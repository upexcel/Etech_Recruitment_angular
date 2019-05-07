import { Component, OnInit, OnDestroy } from "@angular/core";
import { ImapMailsService } from "./../../service//imapemails.service";
import { DashboardService } from "./../../service/dashboard.service";
import { LoginService } from "../../service/login.service";

import { config } from "./../../config/config";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  dashboardData: any;
  dashboardChartOptions = config.dashboardChartOptions;
  lineChartLegend = true;
  subscription: any;
  isHome: boolean;
  pieChartOption = config.dashboardPieChartOptions;
  jobSelection = "byDay";
  jobApplicationReadSelection = "byDay";
  automaticEmailReadSelection = "byDay";
  loading = false;
  notificationStats: any;

  constructor(
    private access: LoginService,
    private _router: Router,
    private route: ActivatedRoute,
    private _apiService: ImapMailsService,
    private _dashboardService: DashboardService
  ) {}

  ngOnInit() {
    this.subscription = this.route.data.subscribe(
      res => (this.isHome = res.isHome)
    );
    this.getAllTags();
    this.getNotifications();
  }

  getAllTags() {
    this.loading = true;
    this._apiService.getAllTags().subscribe(
      res => {
        this.loadDashBoardData(res);
      },
      err => {
        console.log(err);
        this.loading = false;
      }
    );
  }

  loadDashBoardData(jobTags) {
    jobTags = jobTags.filter(o => {
      return !o.active_status;
    });
    const disabledJobTags = [];
    jobTags.forEach(element => {
      disabledJobTags.push(element.title);
    });
    this._apiService.getDashboardData().subscribe(
      res => {
        Object.keys(res).forEach(element => {
          //code to remove disabled job profile.
          if (!(element === "read_mail_by_user" || element === "email_stat")) {
            let sortedArray = _.sortBy(res[element], [
              function(o) {
                return o.label;
              }
            ]); //code to fix a bug
            sortedArray.forEach(e => {
              if (this.isDisabled(disabledJobTags, e.label)) {
                _.remove(res[element], e);
              }
            });
          }
        });
        this.dashboardData = this._dashboardService.formatChartData(res);
        this.loading = false;
      },
      err => {
        this.loading = false;
        console.log(err);
      }
    );
  }

  isDisabled(disabledJobTags, label) {
    let flag = false;
    disabledJobTags.forEach(element => {
      if (label.includes(element)) {
        flag = true;
      }
    });
    return flag;
  }

  chartClicked(e) {
    console.log(e);
  }

  chartHovered(e) {
    console.log(e);
  }
  ngOnDestroy() {
    // clearInterval(this.dashboardIntervalSubscription);
  }

  logginpage() {
    this.access.verifyAccess().subscribe(
      data => {
        if (data.status) {
          this._router.navigate(["/candidate-schedule"]);
        }
      },
      error => {
        this._router.navigate(["login"]);
      }
    );
  }

  async getNotifications() {
    try {
      const stats = await this._apiService.getNotificationStats().toPromise();
      const notificationStats = stats && stats["data"] ? stats["data"] : null;
      if(notificationStats) {
        this.notificationStats = [
          {label: 'Email Sent', date: notificationStats["month_days"], data: notificationStats["totalEmailCount"]},
          {label: 'Email Viewed', date: notificationStats["month_days"], data: notificationStats["respondedEmailCount"]},
          {label: 'Text Sent', date: notificationStats["month_days"], data: notificationStats["totalTextCount"]},
          {label: 'Text Viewed', date: notificationStats["month_days"], data: notificationStats["respondedTextCount"]},
          {label: 'Candidate Acknowledged', date: notificationStats["month_days"], data: notificationStats["respondedCandidate"]}
        ]
      }
    } catch (error) {
      console.log(error);
    }
  }
}
