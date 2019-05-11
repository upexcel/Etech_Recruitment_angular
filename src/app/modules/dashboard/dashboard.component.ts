import { Component, OnInit, OnDestroy } from "@angular/core";
import { ImapMailsService } from "./../../service//imapemails.service";
import { DashboardService } from "./../../service/dashboard.service";
import { LoginService } from "../../service/login.service";
import { config } from "./../../config/config";
import { ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
import { MatSnackBar } from '@angular/material';
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
  callLogsSelection = "byDay";
  loading = false;
  notificationStats: any;
  callLogs: any;
  callLogsPerUser: any;
  selectedUser: any;
  callLogsByUsers: any;

  constructor(
    private access: LoginService,
    private _router: Router,
    private route: ActivatedRoute,
    private _apiService: ImapMailsService,
    private _dashboardService: DashboardService,
    public snackBar: MatSnackBar
  ) { }

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
              function (o) {
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
      const dashboardStatsV2 = stats && stats["data"] ? stats["data"] : null;
      this.callLogsByUsers = dashboardStatsV2['callsPerUser'];
      if (dashboardStatsV2) {
        this.notificationStats = [
          { label: 'Email Sent', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["totalEmailCount"] },
          { label: 'Email Viewed', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["respondedEmailCount"] },
          { label: 'Text Sent', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["totalTextCount"] },
          { label: 'Text Viewed', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["respondedTextCount"] },
        ]
        this.callLogs = [
          { label: 'All Calls', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["allCandidate"] },
          { label: 'Call Again', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["callAgain"] },
          { label: 'Missed Call', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["callMissed"] },
          { label: 'Not Reachable', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["callNotConnected"] },
          { label: 'Calls on Scheduled Time', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["callScheduledSuccess"] },
          { label: 'Call Successful', date: dashboardStatsV2["month_days"], data: dashboardStatsV2["callSuccess"] },
        ]
      }
    } catch (error) {
      console.log(error);
    }
  }

  setCallLogFilterType(event) {
    if (event.value == 'byUser') {
      if (this.callLogsByUsers && this.callLogsByUsers.length) {
        this.userSelected(this.callLogsByUsers[0].label);
      } else {
        this.snackBar.open("No user found", "", {
          duration: 2000
        });
      }
    }


  }

  userSelected(event) {
    this.callLogsByUsers.forEach(element => {
      this.selectedUser = event;
      if (element.label == event) {
        this.callLogsPerUser = [
          { label: 'All Calls', date: element.dates, data: element["allCandidate"] },
          { label: 'Call Again', date: element.dates, data: element["callAgain"] },
          { label: 'Missed Call', date: element.dates, data: element["callMissed"] },
          { label: 'Not Reachable', date: element.dates, data: element["callNotConnected"] },
          { label: 'Calls on Scheduled Time', date: element.dates, data: element["callScheduledSuccess"] },
          { label: 'Call Successful', date: element.dates, data: element["callSuccess"] }
        ];
      }
    });
  }

}
