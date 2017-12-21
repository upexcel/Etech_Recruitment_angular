import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImapMailsService } from './../../service/imapemails.service';
import { MdSnackBar, MdDialogRef } from '@angular/material';
import { config } from './../../config/config';

@Component({
    selector: 'app-cron-status-model',
    templateUrl: './cron-status-model.component.html',
    styleUrls: ['./cron-status-model.component.scss']
})
export class CronStatusModelComponent implements OnInit {
    loading: boolean;
    emailParentId: any;
    notRepliedCandidate: number;
    pending_candidate_status: number;
    send_to_all_status: number;
    constructor(private dialogRef: MdDialogRef<any>, private _imapMailsService: ImapMailsService) { }

    ngOnInit() {
        this.loading = true;
        this._imapMailsService.getCronStatus({ 'tag_id': this.emailParentId }).subscribe((res) => {
            this.loading = false;
            this.notRepliedCandidate = res['notRepliedCandidate'];
            this.pending_candidate_status = res['pending_candidate_status'];
            this.send_to_all_status = res['send_to_all_status'];
        }, (err) => {
            console.log(err);
        })
    }

    close() {
        this.dialogRef.close('back');
    }
}
