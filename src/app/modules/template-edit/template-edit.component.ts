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
    updateData: any;
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

    update(form: NgForm) {
        this.updateData = {
            'templateName': this.tempName,
            'subject': this.subject,
            'body': this.ckeditorContent
        };
        this.getVariable.updateTemplate(this.updateData, this.temp.id).subscribe((data) => {
            form.reset();
            this.dialogRef.close('updated');
        }, (err) => {
            console.log(err);
        });
    }

    close() {
        this.dialogRef.close();
    }
}
