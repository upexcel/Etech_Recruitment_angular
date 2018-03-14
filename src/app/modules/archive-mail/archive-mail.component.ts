import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { ImapMailsService } from 'app/service/imapemails.service';

@Component({
    selector: 'app-archive-mail',
    templateUrl: './archive-mail.component.html',
    styleUrls: ['./archive-mail.component.scss']
})
export class ArchiveMailComponent implements OnInit {
    emailParentId: any;
    is_attachment: any;
    showloading: boolean;
    data: any;
    email: any;
    constructor(public dialogRef: MatDialogRef<any>, private imapMailService: ImapMailsService) { }

    ngOnInit() {
        this.showloading = false;
        if (this.emailParentId) {
            this.data = {
                'tag_id': this.emailParentId
            }
        } else {
            this.data = {
                'is_attachment': this.is_attachment || false
            }
        }
    }
    showTotalMail(date, value) {
        if (date == 'start') {
            this.data['start'] = value;
        } else {
            this.data['end'] = value;
        }
        if (this.data['start'] && this.data['end']) {
            this.imapMailService.archivefindTotalMail(this.data).subscribe(res => {
                this.email = res.data;
            }, (err) => {
                console.log(err);
            });
        }
    }
    archiveAllMail() {
        this.showloading = true;
        this.imapMailService.archiveAllMail(this.data).subscribe(res => {
            this.close(res);
        }, (err) => {
            console.log(err);
        });
    }

    close(value) {
        this.dialogRef.close(value);
    }

}
