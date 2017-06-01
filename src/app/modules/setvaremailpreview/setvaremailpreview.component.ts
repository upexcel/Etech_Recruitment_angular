import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';

@Component({
    selector: 'app-setvaremailpreview',
    templateUrl: './setvaremailpreview.component.html',
    styleUrls: ['./setvaremailpreview.component.scss']
})
export class SetvaremailpreviewComponent implements OnInit {
    first: boolean;
    pendingVariables: any;
    userDetails: any;
    temp: any;
    body = '';
    constructor(public dialogRef: MdDialogRef<any>, public apiServices: ImapMailsService) { }

    ngOnInit() {
        if (this.pendingVariables.length > 0) {
            this.first = true;
        } else {
            this.first = false;
        }
    }

    setVariable(form: NgForm) {
        if (form.valid) {
            this.body = this.temp.body;
            const self = this;
            _.forEach(form.value, function(value, key) {
                self.body = _.replace(self.body, key, value);
            });
            self.temp.body = self.body;
            this.previewEmail();
        }
    }

    previewEmail() {
        this.first = false;
        this.dialogRef.updateSize('80%', '80%');
    }

    sendEmail() {
        this.apiServices.sendTestEmail(this.userDetails, this.temp).subscribe((data) => {
            console.log(data);
            this.dialogRef.close('done');
        }, (err) => {
            console.log(err);
        });
    }

    close() {
        this.dialogRef.close('close');
    }
}
