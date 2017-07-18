import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-compose-email-temp',
    templateUrl: './compose-email.component.html',
    styleUrls: ['./compose-email.component.scss'],
})
export class ComposeEmailComponent implements OnInit {
    userVar: any;
    sysVar: any;
    ckeditorContent: any;
    message: string;
    showMessage: boolean;
    emailList: any;
    emails: any;
    sendSuccessEmailList: any;
    sendFailedEmailList: any;
    formOpen = true;
    subject_for_genuine: any;
    emailParentId: any;
    emailChildId: any;
    emailParenttitle: string;
    emailChildTitle: string;
    constructor(public dialogRef: MdDialogRef<any>, private sendToManyEmail: ImapMailsService, public snackBar: MdSnackBar) {
    }

    ngOnInit() {
        this.showMessage = false;
        this.emails = this.emailList ? this.emailList.toString() : false;
    }

    save(form: NgForm) {
        if (form.valid) {
            if (this.emails) {
                form.value.emails = this.emailList;
                form.value.subject = this.subject_for_genuine + ' ' + form.value.subject;
                this.sendToManyEmail.sendEmail(form.value).subscribe((data) => {
                    form.reset();
                    this.sendSuccessEmailList = data['data'][0]['email_send_success_list'];
                    this.sendFailedEmailList = data['data'][0]['email_send_fail_list'];
                    this.formOpen = false;
                    this.snackBar.open('Mail Send', '', {
                        duration: 2000,
                    });
                }, (err) => {
                    this.showMessage = true;
                    this.message = err.message;
                });
            } else if (this.emailParentId && this.emailChildId) {
                if (this.emailParentId === this.emailChildId) {
                    form.value.tag_id = this.emailParentId;
                } else {
                    form.value.tag_id = this.emailParentId;
                    form.value.default_id = this.emailChildId;
                }
                form.value.subject = this.subject_for_genuine + ' ' + form.value.subject;
                this.sendToManyEmail.sendEmail(form.value).subscribe((data) => {
                    form.reset();
                    this.sendSuccessEmailList = data['data'][0]['email_send_success_list'];
                    this.sendFailedEmailList = data['data'][0]['email_send_fail_list'];
                    this.formOpen = false;
                    this.snackBar.open('Mail Send', '', {
                        duration: 2000,
                    });
                }, (err) => {
                    this.showMessage = true;
                    this.message = err.message;
                });
            }
        }
    }

    close() {
        this.dialogRef.close();
    }
}
