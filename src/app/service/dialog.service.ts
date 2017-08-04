import { Injectable } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ScheduleInterviewComponent } from './../modules/schedule-interview/schedule-interview.component';
import { AddNewUserComponent } from './../modules/add-new-user/add-new-user.component';
import { ConfirmationDialogComponent } from './../modules/confirmation-dialog/confirmation-dialog.component';

@Injectable()
export class DialogService {
    dialogRef: MdDialogRef < any > ;
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
    openAddUser() {
        return new Promise((resolve, reject) => {
            this.dialogRef = this.dialog.open(AddNewUserComponent);
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
    openConfirmationBox(message) {
        return new Promise((resolve, reject) => {
            this.dialogRef = this.dialog.open(ConfirmationDialogComponent);
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
}
