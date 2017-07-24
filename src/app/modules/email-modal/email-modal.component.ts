import { Component, OnInit, ViewEncapsulation, NgZone, trigger, state, animate, transition, style } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { OpenattachementComponent } from '../openattachement/openattachement.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ScheduleInterviewComponent } from './../schedule-interview/schedule-interview.component';
import { CommonService } from './../../service/common.service';
import { LocalStorageService } from './../../service/local-storage.service';
import * as _ from 'lodash';

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
    dialogRef: MdDialogRef < any > ;
    email: any;
    tags: any;
    body: any;
    historyList: any;
    selectedTag: any;
    selectedEmail: any;
    idlist: string[];
    error = false;
    errorMessageText: string;
    dataForInterviewScheduleRound: any;
    constructor (public _location: Location, private route: ActivatedRoute, private router: Router, public setvardialog: MdDialog, private ngZone: NgZone, sanitizer: DomSanitizer, private tagUpdate: ImapMailsService, public dialog: MdDialog, public commonService: CommonService, public _localStorageService: LocalStorageService) {
        this.email = this._localStorageService.getItem('email');
        if (!this._localStorageService.getItem('selectedTag')) {
            this.selectedTag = -1;
        } else {
            this.selectedTag = this._localStorageService.getItem('selectedTag');
        }
        this.tags = this._localStorageService.getItem('tags');
        this.dataForInterviewScheduleRound = this._localStorageService.getItem('dataForInterviewScheduleRound');
    }

    ngOnInit() {
        this.selectedEmail = this.email;
        this.historyList = [];
        this.idlist = [];
        this.body = {
            'status': false,
            'mongo_id': this.route.snapshot.paramMap.get('id')
        };

        this.tagUpdate.UnreadStatus(this.body).subscribe((data) => {
        }, (err) => {
            console.log(err);
        });
        if (this.selectedEmail.attachment && this.selectedEmail.attachment.length === 0 && this.selectedEmail.is_attachment) {
            this.tagUpdate.emailAttachment(this.body.mongo_id).subscribe ((data) => {
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
            this.getCandidateHistoryApi(this.email.sender_mail);
        } else {
            this.getCandidateHistoryApi(this.email._id);
        }
    }

    getCandidateHistoryApi(apiData) {
        this.tagUpdate.getCandidateHistory(apiData).subscribe((data) => {
            _.forEach(data['data'], (value, key) => {
                if (value['body']) {
                    value['body'] = value['body'].replace(/<a/g, '<a target="_blank" ');
                }
                if (key === 0) {
                    value['accordianIsOpen'] = true;
                } else {
                    value['accordianIsOpen'] = false;
                }
            });
            this.historyList = data;
        }, (err) => {
            console.log(err);
        });
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

    assignTag(id: string, emailId, title: string) {
        if (title === 'Schedule') {
            this.dialogRef = this.dialog.open(ScheduleInterviewComponent, {
                height: '90%',
                width: '70%'
            });
            this.dialogRef.componentInstance.tagId = id;
            this.dialogRef.componentInstance.emailId = emailId;
            this.dialogRef.componentInstance.dataForInterviewScheduleRound = this.dataForInterviewScheduleRound;
            this.dialogRef.componentInstance.tagselected = this.selectedTag;
            this.dialogRef.afterClosed().subscribe(result => {
                this.dialogRef = null;
                if (result && result === 'schedule') {
                    this._location.back();
                }
            });
        } else {
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

    back() {
        this._location.back();
    }

    getColor(title) {
        return this.commonService.getDefaultTagColor(title);
    }

    getIcon(title) {
        return this.commonService.getDefaultTagIcon(title);
    }
}
