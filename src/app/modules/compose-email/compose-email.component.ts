import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
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
    constructor(public dialogRef: MdDialogRef<any>, private sendToManyEmail: ImapMailsService) {
    }

    ngOnInit() {
        this.showMessage = false;
        this.emails = this.emailList.toString();
    }

    save(form: NgForm) {
        if (form.valid) {
            form.value.emails = this.emailList;
            form.value.subject = this.subject_for_genuine + ' ' + form.value.subject;
            this.sendToManyEmail.sendEmail(form.value).subscribe((data) => {
                form.reset();
                this.sendSuccessEmailList = data['data'][0]['email_send_success_list'];
                this.sendFailedEmailList = data['data'][0]['email_send_fail_list'];
                this.formOpen = false;
            }, (err) => {
                this.showMessage = true;
                this.message = err.message;
            });
        }
    }

    close() {
        this.dialogRef.close();
    }
}
