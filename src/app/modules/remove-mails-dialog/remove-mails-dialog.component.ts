import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { ImapMailsService } from 'app/service/imapemails.service';


@Component({
    selector: 'app-remove-mails-dialog',
    templateUrl: './remove-mails-dialog.component.html',
    styleUrls: ['./remove-mails-dialog.component.scss']
})
export class RemoveMailsDialogComponent implements OnInit {
    emailParentId: any;
    showMessage: boolean;
    showloading: boolean;
    unread: boolean;
    role: any;
    emailChildId: any;
    constructor(public dialogRef: MatDialogRef<any>, private imapMailService: ImapMailsService) { }

    ngOnInit() {
        this.showloading = false;
        if (this.role === 'HR') {
            setTimeout(() => {
                this.close(this.role);
            }, 1000);
        }
    }
    removeOldEmails(data) {
        const body = {
            'tag_id': this.emailParentId,
            'default_tag': this.emailChildId || "",
            'start': data.from,
            'end': data.to,
            'unread': data.unread !== undefined ? data.unread : false
        }
        this.showloading = true;
        this.close(this.role);
        this.imapMailService.removeOldEmails(body).subscribe(res => {
            this.showloading = false;
        }, (err) => {
            console.log(err);
        });
    }

    close(value) {
        this.dialogRef.close(value);
    }
}
