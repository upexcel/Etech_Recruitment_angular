import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ImapMailsService } from "app/service/imapemails.service";
import { MatSnackBar } from "@angular/material";
import { CommonService } from "app/service/common.service";

@Component({
  selector: "app-candidate-schedule",
  templateUrl: "./candidate-schedule.component.html",
  styleUrls: ["./candidate-schedule.component.scss"]
})
export class CandidateScheduleComponent implements OnInit {
  scheduleInterviewForm: FormGroup;
  scheduleData: any;
  scheduleTime: any;
  userId: any;
  notificationId: any;
  apiInProgress: boolean;
  constructor(
    private activatedRoute: ActivatedRoute,
    private commonService: CommonService,
    private formBuilder: FormBuilder,
    private imapMailsService: ImapMailsService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.userId = this.activatedRoute.snapshot.paramMap.get("userId");
    this.notificationId = this.activatedRoute.snapshot.queryParamMap.get(
      "notificationId"
    );
    this.getScheduledTime();
  }

  getScheduledTime() {
    this.imapMailsService.getScheduleData().subscribe(
      data => {
        this.scheduleData = data;
        this.createForm();
      },
      err => {
        this.matSnackBar.open(
          "Something Went Wrong. Reload or Contact HR!",
          "Close"
        );
      }
    );
  }

  createForm() {
    this.scheduleInterviewForm = this.formBuilder.group({
      shedule_date: [null, { validators: Validators.required, updateOn: "blur" }],
      shedule_time: [null, { validators: Validators.required, updateOn: "blur" }]
    });

    this.scheduleInterviewForm.valueChanges.subscribe(formData => {
      if (formData.shedule_date) {
        this.filterScheduledTime(formData.shedule_date);
      }
    });
  }

  filterScheduledTime(date) {
    const year = date.getFullYear();
    const month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    const fullDate = year + "-" + month + "-" + day;
    if (this.scheduleData && this.scheduleData.length) {
      const timing = this.scheduleData.find(element => {
        return element.date === fullDate;
      });
      this.scheduleTime = timing["time_slots"]["first_round"];
    }
  }

  dateFilter = (date: Date): boolean => {
    const validDate = this.scheduleData.find(element => {
      return (
        new Date(element.date).getDate() === date.getDate() &&
        new Date(element.date).getMonth() === date.getMonth()
      );
    });
    if (validDate) {
      return true;
    }
  };

  addSchedule(formData) {
    this.apiInProgress = true;
    formData.notificationId = this.notificationId;
    formData.userId = this.userId;
    formData.shedule_date = this.commonService.formateDate(formData.shedule_date);
    this.imapMailsService.saveCandidateDesiredSchedule(formData).subscribe(
      res => {
        this.matSnackBar.open("Interview Scheduled Successfully!", "Close");
        this.apiInProgress = false;
        this.createForm();
      },
      err => {
        if (err && err["scheduled"]) {
          this.matSnackBar.open(err.message, "Close");
          this.createForm();
        } else {
          this.matSnackBar.open(
            "Something Went Wrong. Reload or Contact HR!",
            "Close"
          );
        }
        this.apiInProgress = false;
      }
    );
  }
}
