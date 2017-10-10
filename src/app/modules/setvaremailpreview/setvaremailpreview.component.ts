import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
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
    notGenuine: any;
    constructor(public dialogRef: MdDialogRef<any>, public apiServices: ImapMailsService, public snackBar: MdSnackBar) { }

    ngOnInit() {
        if (this.pendingVariables.length > 0) {
            this.first = true;
        } else {
            this.previewEmail();
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
        if (this.temp['default_id'] || this.temp['tag_id']) {
            if (this.notGenuine) {
                this.apiServices.sendToNotReplied(this.temp).subscribe((data) => {
                    this.snackBar.open(`Mail Sending to ${data.no_of_candidate}`, '', {
                        duration: 2000,
                    });
                }, (err) => {
                    console.log(err)
                });
            } else {
                this.apiServices.sendEmail(this.temp).subscribe((data) => {
                    this.snackBar.open('Mail Send', '', {
                        duration: 2000,
                    });
                }, (err) => {
                    console.log(err)
                });
            }
        } else {
            console.log(this.userDetails, this.temp)
            if (this.userDetails['CandidateEmail'] || this.userDetails['CandidateName']) {
                this.apiServices.sendTestEmail(this.userDetails, this.temp).subscribe((data) => {
                    this.snackBar.open('Email Send', '', {
                        duration: 2000,
                    });
                }, (err) => {
                    this.snackBar.open(err.message, '', {
                        duration: 2000,
                    });
                    console.log(err);
                });
            } else {
                this.apiServices.sendEmailBySeclection(this.userDetails, this.temp).subscribe((data) => {
                    this.snackBar.open('Email Send', '', {
                        duration: 2000,
                    });
                }, (err) => {
                    this.snackBar.open(err.message, '', {
                        duration: 2000,
                    });
                    console.log(err);
                });
            }
        }
        this.dialogRef.close('done');
    }

    close() {
        this.dialogRef.close('close');
    }
}
