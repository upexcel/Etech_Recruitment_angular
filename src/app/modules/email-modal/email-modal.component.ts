import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { OpenattachementComponent } from '../openattachement/openattachement.component';

@Component({
    selector: 'app-email-modal',
    templateUrl: './email-modal.component.html',
    styleUrls: ['./email-modal.component.scss'],
    encapsulation: ViewEncapsulation.Native
})
export class EmailModalComponent implements OnInit {
    dialogConfig: MdDialogRef <any> ;
    email: any;
    tags: any;
    body: any;
    historyList: any;
    selectedTag: any;
    selectedEmail: any;
    idlist: string[];
    constructor ( public setvardialog: MdDialog, private ngZone: NgZone, public dialogRef: MdDialogRef <any> , sanitizer: DomSanitizer, private tagUpdate: ImapMailsService) {}

    ngOnInit() {
        this.selectedEmail = this.email;
        this.historyList = [];
        this.idlist = [];
        this.body = {
            'status': false,
            'mongo_id': this.email._id
        };
        this.tagUpdate.UnreadStatus(this.body).subscribe(
        (data) => {
        }, (err) => {
            console.log( err );
        });

        if (this.selectedEmail.attachment && this.selectedEmail.attachment.length === 0) {
            this.tagUpdate.emailAttachment(this.body.mongo_id).subscribe (
            (data) => {
                this.showEmail(data.data);
                this.getCandiatehistory();
            }, (err) => {
                console.log(err);
            });
        }
        this.getCandiatehistory();
    }

    getCandiatehistory() {
        if (this.email.sender_mail) {
            this.tagUpdate.getCandidateHistory(this.email.sender_mail).subscribe((data) => {
                this.historyList = data;

            }, (err) => {
                console.log(err);
            });
        } else {
            this.tagUpdate.getCandidateHistory(this.email._id).subscribe((data) => {
                this.historyList = data;
            }, (err) => {
                console.log(err);
            });
        }
    }

    showEmail(singlemail: any) {
        this.selectedEmail = '';
        this.selectedEmail = singlemail;
    }

    assignTag(id: string) {
        this.body = null;
        this.idlist.push(this.email._id);
        this.body = {
            'tag_id': id,
            'mongo_id': this.idlist
        };
        this.tagUpdate.assignTag(this.body).subscribe((data) => {
            this.idlist = [];
            this.dialogRef.close();
        }, (err) => {
            console.log(err);
        });
    }

    openAttachment(link: string) {
        this.dialogConfig = this.setvardialog.open(OpenattachementComponent, {
            height: '100%',
            width: '120%'
        });
        this.dialogConfig.componentInstance.link = link;
        this.dialogConfig.afterClosed().subscribe(result => {
            this.dialogConfig = null;
            this.dialogRef.close();
        });
    }

    close() {
        this.dialogRef.close();
    }
}
