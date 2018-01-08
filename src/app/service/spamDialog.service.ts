import { Injectable } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ScheduleInterviewComponent } from './../modules/schedule-interview/schedule-interview.component';
import {AddNewSpamContactComponent } from './../modules/add-spam-contact/add-spam-contact.component';
import { ConfirmationDialogComponent } from './../modules/confirmation-dialog/confirmation-dialog.component';
import { SetvaremailpreviewComponent } from './../modules/setvaremailpreview/setvaremailpreview.component';
import { FetchEmailByDayComponent } from './../modules/fetch-email-by-day/fetch-email-by-day.component';
import { CronStatusModelComponent } from './../modules/cron-status-model/cron-status-model.component';

@Injectable()
export class SpamDialogService {
    dialogRef: MdDialogRef<any>;
    constructor(public dialog: MdDialog) { }

    openScheduleInterview(data) {
        return new Promise((resolve, reject) => {
            this.dialogRef = this.dialog.open(ScheduleInterviewComponent, {
                height: '90%',
                width: '70%'
            });
            this.dialogRef.componentInstance.tagId = data.id;
            this.dialogRef.componentInstance.emailId = data.emailId;
            this.dialogRef.componentInstance.dataForInterviewScheduleRound = data.dataForInterviewScheduleRound;
            this.dialogRef.componentInstance.tagselected = data.tagselected;
            this.dialogRef.componentInstance.emailData = data.emailData;
            this.dialogRef.afterClosed().subscribe(result => {
                this.dialogRef = null;
                if (result) {
                    resolve(result);
                } else {
                    resolve();
                }
            });
        });
    }
    openAddSpam(activity,formData?) {
        return new Promise((resolve, reject) => {
            this.dialogRef = this.dialog.open(AddNewSpamContactComponent);
            this.dialogRef.componentInstance.activity=activity;
            this.dialogRef.componentInstance.formData=formData;
            this.dialogRef.afterClosed().subscribe(result => {
                this.dialogRef = null;
                if (result) {
                    resolve(result);
                } else {
                    resolve();
                }
            });
        });
    }
    getCronStatusDialog(emailParentId) {
        return new Promise((resolve, reject) => {
            this.dialogRef = this.dialog.open(CronStatusModelComponent);
            this.dialogRef.componentInstance.emailParentId = emailParentId;
            this.dialogRef.afterClosed().subscribe(result => {
                this.dialogRef = null;
                if (result) {
                    resolve(result);
                } else {
                    resolve();
                }
            });
        });
    }
    fetchEmailByDay() {
        return new Promise((resolve, reject) => {
            this.dialogRef = this.dialog.open(FetchEmailByDayComponent, {
                'height': '180px'
            });
            this.dialogRef.afterClosed().subscribe(result => {
                this.dialogRef = null;
                resolve();
            });
        });
    }
    openConfirmationBox(message) {
        return new Promise((resolve, reject) => {
            this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
                'height': '140px'
            });
            this.dialogRef.componentInstance.message = message;
            this.dialogRef.afterClosed().subscribe(result => {
                this.dialogRef = null;
                if (result) {
                    resolve(result);
                } else {
                    resolve();
                }
            });
        });
    }

    previewEmail(emailData) {
        return new Promise((resolve, reject) => {
            this.dialogRef = this.dialog.open(SetvaremailpreviewComponent, {
                height: '60%',
                width: '40%'
            });
            this.dialogRef.componentInstance.pendingVariables = [];
            this.dialogRef.componentInstance.temp = emailData;
            this.dialogRef.afterClosed().subscribe(result => {
                this.dialogRef = null;
                resolve();
            });
        });
    }
}
