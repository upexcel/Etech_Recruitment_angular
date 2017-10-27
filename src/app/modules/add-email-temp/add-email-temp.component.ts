import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-email-temp',
    templateUrl: './add-email-temp.component.html',
    styleUrls: ['./add-email-temp.component.scss'],
})
export class AddEmailTempComponent implements OnInit {
    userVar: any;
    sysVar: any;
    ckeditorContent: any;
    message: string;
    showMessage: boolean;
    constructor(public dialogRef: MdDialogRef<any>, private getVariable: ImapMailsService) {
    }

    ngOnInit() {
        this.showMessage = false;
    }

    save(form: NgForm) {
        if (form.valid) {
            this.getVariable.addTemplate(form.value).subscribe((data) => {
                form.reset();
            }, (err) => {
                this.showMessage = true;
                this.message = err.message;
            });
            this.dialogRef.close('added');
        }
    }

    sysVarTrack(index, data) {
        return data.id || index;
    }

    userVarTrack(index, data) {
        return data.id || index;
    }

    close() {
        this.dialogRef.close();
    }
}
