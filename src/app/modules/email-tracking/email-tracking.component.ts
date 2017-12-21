import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImapMailsService } from './../../service/imapemails.service';
import { DialogService } from './../../service/dialog.service';
import * as _ from 'lodash';
import { config } from './../../config/config';
import { ComposeEmailComponent } from './../compose-email/compose-email.component';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-email-tracking',
    templateUrl: './email-tracking.component.html',
    styleUrls: ['./email-tracking.component.scss']
})
export class EmailTrackingComponent implements OnInit {
    trackingData: any;
    selectedTrackingData: any;
    selectedTrackingFullData: any;
    pageNo = 0;
    recordPerPage = config['emailTrackingRecordPerPage'];
    totalPages: number;
    dialogConfig: MdDialogRef<any>;
    dialogRef: MdDialogRef<any>;
    constructor(private _apiService: ImapMailsService, public _dialogService: DialogService, public dialog: MdDialog) { }
    ngOnInit() {
        this.emailTrackingData();
    }

    emailTrackingData() {
        this._apiService.getEmailTrackingData().subscribe((res) => {
            this.trackingData = res.reverse();
            this.selectedTrackingFullData = res[0];
            this.paginate(this.selectedTrackingFullData['data']);
        }, (err) => {
            console.log(err)
        })
    }

    previewEmail(emailData) {
        this._dialogService.previewEmail(emailData);
    }

    paginate(data) {
        data = JSON.parse(JSON.stringify(data));
        this.totalPages = Math.ceil((this.selectedTrackingFullData['data'].length || 0) / this.recordPerPage);
        const startRec = this.pageNo * this.recordPerPage;
        const endRec = startRec + this.recordPerPage;
        this.selectedTrackingData = _.slice(data, startRec, endRec);
    }

    next() {
        ++this.pageNo;
        this.paginate(this.selectedTrackingFullData['data']);
    }
    previous() {
        --this.pageNo;
        this.paginate(this.selectedTrackingFullData['data']);
    }

    selectedTracking(data) {
        this.selectedTrackingFullData = data;
        this.pageNo = 0;
        this.paginate(this.selectedTrackingFullData['data']);
    }

    resendEmail() {
        this.dialogRef = this.dialog.open(ComposeEmailComponent, {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.emailParenttitle = 'Resend Emails';
        this.dialogRef.componentInstance.emailChildTitle = this.selectedTrackingFullData['campaign_name'];
        this.dialogRef.componentInstance.emailParentId = this.selectedTrackingFullData['data'][0]['tag_id'];
        this.dialogRef.componentInstance.emailChildId = this.selectedTrackingFullData['data'][0]['tag_id'];
        this.dialogRef.componentInstance.resendEmailTrackingData = {old_campaign_name: this.selectedTrackingFullData['campaign_name']};
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }

}
