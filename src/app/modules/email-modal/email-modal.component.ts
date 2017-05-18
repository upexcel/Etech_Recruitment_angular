import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-email-modal',
    templateUrl: './email-modal.component.html',
    styleUrls: ['./email-modal.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class EmailModalComponent implements OnInit {
    email: any;
    tags: any;
    body: any;
    idlist: string[];
    constructor(public dialogRef: MdDialogRef <any> , sanitizer: DomSanitizer, private tagUpdate: ImapMailsService) {}

    ngOnInit() {
        this.idlist = [];
        this.body = {
            'status': 'false',
            'mongo_id': this.email._id
        };
        this.tagUpdate.UnreadStatus(this.body).subscribe(
        (data) => {
        }, (err) => {
            console.log( err );
        });
    }

    assignTag(id: string) {
        this.body = null;
        this.idlist.push(this.email._id);
        this.body = {
            'tag_id': id,
            'mongo_id': this.idlist
        };
        this.tagUpdate.assignTag(this.body).subscribe((data) => {
            this.idlist.length = 0;
            this.dialogRef.close();
        }, (err) => {
            console.log(err);
        });
    }

    close() {
        this.dialogRef.close();
    }
}
