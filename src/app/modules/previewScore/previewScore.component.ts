import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { DialogService } from './../../service/dialog.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-preview-score',
    templateUrl: './previewScore.component.html',
    styleUrls: ['./previewScore.component.scss'],
})
export class PreviewScoreComponent implements OnInit {
    detailedData: any;
    fb_id: any;
    fbloading = false;
    hours: any;
    min: any;
    constructor(public dialogRef: MatDialogRef<any>, private getdata: ImapMailsService, private _dialogService: DialogService) {
    }
    ngOnInit() {
        this.fbloading = true;
        this.getdata.detailedScore({ 'fb_id': this.fb_id }).subscribe(res => {
            this.detailedData = res.data;
            const time = this.detailedData['taken_time_minutes'];
            this.hours = Math.floor(time / 60);
            this.min = Math.floor(time % 60);
            this.fbloading = false;
        }, err => {
        });
    }
    close() {
        this.dialogRef.close();
    }
}
