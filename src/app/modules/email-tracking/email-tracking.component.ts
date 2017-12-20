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
    dialogConfig: MdDialogRef<any>;
    dialogRef: MdDialogRef<any>;
    seenUnseen = true;
    constructor(private _apiService: ImapMailsService, public _dialogService: DialogService, public dialog: MdDialog) { }
    ngOnInit() {
        this.emailTrackingData();
    }

    emailTrackingData() {
        this._apiService.getEmailTrackingData().subscribe((res) => {
            this.trackingData = res.reverse();
            console.log(res)
            this.selectedTrackingData = this.trackingData[0];
        }, (err) => {
            console.log(err)
        })
    }

    previewEmail() {
        this._dialogService.previewEmail(this.selectedTrackingData['body']);
    }

    selectedTracking(data) {
        this.selectedTrackingData = data;
    }

    deleteCampaign(data) {
        console.log(data)
        this._apiService.deleteCampaign(data).subscribe((res) => {
            this.trackingData = res.reverse();
            console.log(res)
            this.selectedTrackingData = this.trackingData[0];
            console.log(this.selectedTrackingData)
        }, (err) => {
            console.log(err)
        })
    }

    resendEmail() {
        this.dialogRef = this.dialog.open(ComposeEmailComponent, {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.emailParenttitle = 'Resend Emails';
        this.dialogRef.componentInstance.emailChildTitle = this.selectedTrackingData['campaign_name'];
        this.dialogRef.componentInstance.emailParentId = this.selectedTrackingData['body']['tag_id'];
        this.dialogRef.componentInstance.emailChildId = this.selectedTrackingData['body']['tag_id'];
        this.dialogRef.componentInstance.resendEmailTrackingData = {old_campaign_name: this.selectedTrackingData['campaign_name']};
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }

}
