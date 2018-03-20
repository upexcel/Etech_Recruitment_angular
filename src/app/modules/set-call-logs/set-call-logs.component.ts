import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import * as callStatus from './../../config/config';
import * as _ from 'lodash';

@Component({
    selector: 'app-set-call-logs',
    templateUrl: './set-call-logs.component.html',
    styleUrls: ['./set-call-logs.component.scss']
})
export class SetCallLogsComponent implements OnInit {
    email: any;
    constructor(public dialogRef: MatDialogRef<any>, public imap: ImapMailsService, private _mdSnackBar: MatSnackBar) { }

    ngOnInit() {
        if (this.email.callingDetails) {
            this.email.callingDetails.reverse();
            _.forEach(this.email.callingDetails, (value, key) => {
                if (value.status) {
                    value.status = callStatus.callToolTips[`${value.status}`];
                }
            })
        }
    }

    changeStatus(value) {
        const body = {
            'callingStatus': value,
            'callSuccessTime' : new Date(),
            'callingDetails' : this.email.callingDetails || []
        }
        this.dialogRef.close(body);
        this.imap.setCallStatus(this.email._id, body).subscribe((res) => {
            if (res.status === 1) {
                this._mdSnackBar.open('Call Status Recorded.', '', {
                    duration: 2000,
                });
            }
        }, (err) => {
            this._mdSnackBar.open('Something went wrong, Please try again.', '', {
                duration: 2000,
            });
        })

    }
    close() {
        this.dialogRef.close();
    }
}
