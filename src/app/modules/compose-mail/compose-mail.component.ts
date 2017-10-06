import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-compose-mail-temp',
    templateUrl: './compose-mail.component.html',
    styleUrls: ['./compose-mail.component.scss'],
})
export class ComposeMailComponent implements OnInit {
    message: string;
    showMessage: boolean;
    emailList: any;
    emails: any;
    subject_for_genuine: any;
    templates: any;
    body: string;
    selectedTemplate: any;
    constructor(public dialogRef: MdDialogRef<any>, private sendToManyEmail: ImapMailsService, public snackBar: MdSnackBar) {
    }

    ngOnInit() {
        this.showMessage = false;
        this.emails = this.emailList ? this.emailList.toString() : false;
        this.sendToManyEmail.getTemplate().subscribe((res) => {
            this.templates = res;
        }, (err) => {
            console.log(err);
        })
    }

    selectTemplate(seletectTemplated) {
        this.body = '';
        this.sendToManyEmail.testTemplate(seletectTemplated.id).subscribe((data) => {
            this.body = data;
        }, (err) => {
            console.log(err);
        });
    }

    save(form: NgForm) {
        if (form.valid) {
            form.value.subject = this.subject_for_genuine + ' ' + form.value.subject;
            form.value.emails = this.emailList;
            form.value.body = this.body;
            this.sendToMany(form);
        }
    }

    sendToMany(form) {
        this.sendToManyEmail.sendEmail(form.value).subscribe((data) => {
            form.reset();
            this.snackBar.open('Mail Send', '', {
                duration: 2000,
            });
        }, (err) => {
            this.showMessage = true;
            this.message = err.message;
        });
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
}
