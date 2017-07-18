import { Component, OnInit, ViewEncapsulation, NgZone, trigger, state, animate, transition, style } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { OpenattachementComponent } from '../openattachement/openattachement.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-email-modal',
    templateUrl: './email-modal.component.html',
    styleUrls: ['./email-modal.component.scss'],
    encapsulation: ViewEncapsulation.Native,
    animations: [
        trigger('collapseChange', [
            state('true' ,
                style({ height: '0', overflow : 'hidden' }),
            ),
            state('false',
                style({ height: '*' })
            ),
            transition('* => *', animate('.25s ease-in'))
        ])
    ]
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
    error = false;
    errorMessageText: string;
    constructor (public _location: Location, private route: ActivatedRoute, private router: Router, public setvardialog: MdDialog, private ngZone: NgZone, sanitizer: DomSanitizer, private tagUpdate: ImapMailsService) {
        this.email = JSON.parse(localStorage.getItem('email'));
        if (!localStorage.getItem('selectedTag')) {
            this.selectedTag = -1;
        } else {
            this.selectedTag = JSON.parse(localStorage.getItem('selectedTag'));
        }
        this.tags = JSON.parse(localStorage.getItem('tags'));
    }

    ngOnInit() {
        this.selectedEmail = this.email;
        this.historyList = [];
        this.idlist = [];
        this.body = {
            'status': false,
            'mongo_id': this.route.snapshot.paramMap.get('id')
        };

        this.tagUpdate.UnreadStatus(this.body).subscribe(
        (data) => {
        }, (err) => {
            console.log(err);
        });
        if (this.selectedEmail.attachment && this.selectedEmail.attachment.length === 0 && this.selectedEmail.is_attachment) {
            this.tagUpdate.emailAttachment(this.body.mongo_id).subscribe (
            (data) => {
                this.showEmail(data.data);
                this.getCandiatehistory();
            }, (err) => {
                this.error = true;
                this.errorMessageText = err.message;
            });
        }
        this.getCandiatehistory();
    }

    getCandiatehistory() {
        if (this.email.sender_mail) {
            this.tagUpdate.getCandidateHistory(this.email.sender_mail).subscribe((data) => {
                for (let i = 0; i < data['data'].length; i++) {
                    if (data['data'][i]['body']) {
                        data['data'][i]['body'] = data['data'][i]['body'].replace(/<a /g, '<a target="_blank" ');
                    }
                    if (i === 0) {
                        data['data'][i]['accordianIsOpen'] = true;
                    } else {
                        data['data'][i]['accordianIsOpen'] = false;
                    }
                }
                this.historyList = data;
            }, (err) => {
                console.log(err);
            });
        } else {
            this.tagUpdate.getCandidateHistory(this.email._id).subscribe((data) => {
                for (let i = 0; i < data['data'].length; i++) {
                    if (data['data'][i]['body']) {
                        data['data'][i]['body'] = data['data'][i]['body'].replace(/<a /g, '<a target="_blank" ');
                    }
                    if (i === 0) {
                        data['data'][i]['accordianIsOpen'] = true;
                    } else {
                        data['data'][i]['accordianIsOpen'] = false;
                    }
                }
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

    openAccordian(singleEmail) {
        this.selectedEmail = '';
        this.selectedEmail = singleEmail;
        for (let i = 0; i < this.historyList['data'].length; i++) {
            if (this.historyList['data'][i]['_id'] === singleEmail['_id']) {
                if (this.historyList['data'][i]['accordianIsOpen']) {
                    this.historyList['data'][i]['accordianIsOpen'] = false;
                } else {
                    this.historyList['data'][i]['accordianIsOpen'] = true;
                }
            } else {
                // do not delete this is for close all other accordian
                // this.historyList['data'][i]['accordianIsOpen'] = false;
            }
        }
    }

    assignTag(id: string, emailId) {
        this.body = null;
        this.idlist.push(emailId);
        this.body = {
            'tag_id': id,
            'mongo_id': this.idlist
        };
        this.tagUpdate.assignTag(this.body).subscribe((data) => {
            this.idlist = [];
            this._location.back();
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
        });
    }

    close() {
        // this.dialogRef.close();
    }

    back() {
        this._location.back();
    }

    getColor(title) {
        if (title === 'Ignore') {
            return {'background-color': '#FF0000'};
        } else if (title === 'Genuine Applicant') {
            return {'background-color': '#41A317'};
        } else if (title === 'Reject') {
            return {'background-color': '#F1B2B2'};
        } else if (title === 'Schedule') {
            return {'background-color': '#FBB917'};
        } else {
            return {'background-color': 'cyan'};
        }
    }

    getIcon(title) {
        if (title === 'Ignore') {
            return 'block';
        } else if (title === 'Genuine Applicant') {
            return 'done_all';
        } else if (title === 'Reject') {
            return 'highlight_off';
        } else if (title === 'Schedule') {
            return 'access_time';
        } else {
            return 'thumb_up';
        }
    }
}
