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
    archiveAllMail(value) {
        this.data['start'] = new Date(value.from);
        this.data['end'] = new Date(value.to);
        this.showloading = true;
        this.imapMailService.archiveAllMail(this.data).subscribe(res => {
            this.showloading = false;
            this.close(res);
        }, (err) => {
            console.log(err);
        });
    }

    close(value) {
        this.dialogRef.close(value);
    }

}
