import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    Router,
    NavigationStart,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {
    ImapMailsService
} from '../../service/imapemails.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { config } from './../../config/config';
import { CommonService } from '../../service/common.service';
import * as _ from 'lodash';
import { DialogService, } from '../../service/dialog.service';
import { MatDialogRef, MatDialog } from '@angular/material';
import { AddNoteComponent } from './../add-note/add-note.component';
@Component({
    selector: 'app-interviewee-inbox',
    templateUrl: './interviewee-inbox.component.html',
    styleUrls: ['./interviewee-inbox.component.scss']
})
export class IntervieweeInboxComponent implements OnInit, OnDestroy {
    dialogRef: MatDialogRef<any>;
    inboxEmail: any;
    url: string;
    tagAssigned = [];
    tagAssignedArray = [];
    selected: any;
    dataForInterviewScheduleRound: any;

    constructor(private _apiService: ImapMailsService, private _localStorageService: LocalStorageService, public commonService: CommonService, public _dialogService: DialogService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.url = config.avatarUrl;
        if (!this._localStorageService.getItem('allTags')) {
            this.getAllTags();
        } else {
            this.getInboxMails();
        }
    }

    getAllTags() {
        this._apiService.getAllTagsMain().subscribe((res) => {
            this._localStorageService.setItem('allTags', res);
            this.getInboxMails();
        })
    }

    getInboxMails() {
        this._apiService.getIntervieweeInboxData().subscribe((res) => {
            this.inboxEmail = res;
            this.getTags();
        }, (err) => {
            console.log(err)
        })
        this.getDateForInterview();
    }

    getDateForInterview() {
        this.commonService.formateTags(this._localStorageService.getItem('allTags')).then((res: any) => {
            this.dataForInterviewScheduleRound = res.dataForInterviewScheduleRound;
            console.log(this.dataForInterviewScheduleRound);
        }, (err) => { });
    }

    openEmails(email: any) {
        if (email['unread']) {
            this._apiService.UnreadStatus({
                'status': false,
                'mongo_id': email['_id']
            }).subscribe((data) => {
            }, (err) => {
                console.log(err);
            });
        }
        const landingUrl = window.location.origin + '/#/core/intervieweeCandidate/' + email._id;
        window.open(landingUrl);
        this._localStorageService.setItem('email', email);
    }

    countEmailSubject(emailSubject) {
        return (emailSubject && emailSubject.length > 88) ? emailSubject.substring(0, 88) + '...' : emailSubject;
    }

    getTags() {
        this.tagAssigned = [];
        this.tagAssignedArray = [];
        _.forEach(this.inboxEmail, (value, key) => {
            this.tagAssigned = this.commonService.filtertag(value);
            this.tagAssignedArray.push(this.tagAssigned);
        })
    }

    assignTag(id: string, emailId: string, title: string, default_tag, emailData) {
        if (title === 'Schedule') {
            this._dialogService.openScheduleInterview({ 'tagId': id, 'emailId': emailId, 'dataForInterviewScheduleRound': this.dataForInterviewScheduleRound, 'tagselected': default_tag, 'emailData': emailData }).then((data: any) => {
                if (data && data.tag_id) {
                    this._apiService.assignTag(data).subscribe((res) => {
                        this.getInboxMails();
                    }, (err) => {
                        console.log(err);
                    });
                }
            }, (err) => {
                console.log(err);
            });
        } else if (title === 'Reject' || title === 'CV Rejected') {
            this.dialogRef = this.dialog.open(AddNoteComponent, {
                height: '35%',
                width: '30%'
            });
            this.dialogRef.componentInstance.candidateid = emailData._id;
            this.dialogRef.componentInstance.title = title;
            this.dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.assign(id, emailData['_id']);
                }
            })
        } else {
            this.assign(id, emailData['_id']);

        }
    }

    getColor(title) {
        return this.commonService.getDefaultTagColor(title);
    }

    getIcon(title) {
        return this.commonService.getDefaultTagIcon(title);
    }
    assign(tag_id, id) {
        this.selected = {
            'tag_id': tag_id,
            'mongo_id': id
        };
        this._apiService.assignTag(this.selected).subscribe((data) => {
            this.getAllTags();
        }, (err) => {
            console.log(err);
        });
    }

    ngOnDestroy() {
    }

}
