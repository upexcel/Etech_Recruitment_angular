import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-template-edit',
    templateUrl: './template-edit.component.html',
    styleUrls: ['./template-edit.component.scss']
})
export class TemplateEditComponent implements OnInit {
    userVar: any;
    sysVar: any;
    ckeditorContent: any;
    tempName: string;
    subject: string;
    temp: any;
    constructor(public dialogRef: MdDialogRef<any>, private getVariable: ImapMailsService) {
    }

    ngOnInit() {
        this.tempName = this.temp.templateName;
        this.subject = this.temp.subject;
        this.ckeditorContent = this.temp.body;
    }

    save(form: NgForm) {
        form.reset();
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
}
