import { Component, OnInit, OnDestroy, AfterContentInit, ViewEncapsulation, NgZone, trigger, state, animate, transition, style } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { OpenattachementComponent } from '../openattachement/openattachement.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { ScheduleInterviewComponent } from './../schedule-interview/schedule-interview.component';
import { CommonService } from './../../service/common.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { DialogService } from './../../service/dialog.service';
import * as _ from 'lodash';
import * as moment from 'moment';
import { ComposeEmailComponent } from './../compose-email/compose-email.component';
import { AddNoteComponent } from './../add-note/add-note.component';
import { PreviewScoreComponent } from '../previewScore/previewScore.component';
import { ChangeTagComponent } from '../../modules//change-tag/change-tag.component';
import { config } from './../../config/config';


@Component({
    selector: 'app-email-modal',
    templateUrl: './email-modal.component.html',
    styleUrls: ['./email-modal.component.scss'],
    encapsulation: ViewEncapsulation.Native,
    animations: [
        trigger('collapseChange', [
            state('true',
                style({ height: '0', overflow: 'hidden' }),
            ),
            state('false',
                style({ height: '*' })
            ),
            transition('* => *', animate('.25s ease-in'))
        ])
    ]
})
export class EmailModalComponent implements OnInit, OnDestroy, AfterContentInit {
    dialogConfig: MdDialogRef<any>;
    dialogRef: MdDialogRef<any>;
    tags: any;
    body: any;
    historyList: any;
    selectedTag: any;
    selectedEmail: any;
    idlist: string[];
    error = false;
    errorMessageText: string;
    dataForInterviewScheduleRound: any;
    inboxMailsTagsForEmailListAndModel: any;
    noteData: any;
    updatedData: any
    user: any;
    mongoid: any;
    intervieweeList: any;
    tagAssigned = [];
    tagfilter = [];
    url: string;
    constructor(public snackBar: MdSnackBar, public _location: Location, private route: ActivatedRoute, private router: Router, public setvardialog: MdDialog, private ngZone: NgZone, sanitizer: DomSanitizer, private tagUpdate: ImapMailsService, public dialog: MdDialog, public commonService: CommonService, public _localStorageService: LocalStorageService, public _dialogService: DialogService) {
        this.tags = this._localStorageService.getItem('tags');
        this.dataForInterviewScheduleRound = this._localStorageService.getItem('dataForInterviewScheduleRound');
        this.inboxMailsTagsForEmailListAndModel = this._localStorageService.getItem('inboxMailsTagsForEmailListAndModel');
    }

    ngAfterContentInit() {
        document.getElementById('sideNav').classList.add('sidehide');
    }

    ngOnInit() {
        this.selectedEmail = {
            _id: this.route.snapshot.paramMap.get('id'),
        }
        this.url = config.avatarUrl;
        this.historyList = [];
        this.idlist = [];
        this.user = this._localStorageService.getItem('userEmail');
        this.body = {
            'status': false,
            'mongo_id': this.selectedEmail['_id']
        };
        this.tagUpdate.getCandidateHistory(this.selectedEmail['_id']).subscribe((data) => {
            this.selectedEmail = data.data[0];
            // this.historyList = this.commonService.formateEmailHistoryData(data, this.selectedEmail['_id']);
            this.historyList['data'] = this.commonService.sortBydate(data)
            this.tagfilter = this._localStorageService.getItem('tagFilter');
            if (this.selectedEmail.tag_id.length !== 0) {
                this.selectedTag = this.selectedEmail['default_tag'] || '0';
                this.tagAssigned = this.commonService.filtertag(this.selectedEmail);
            };
            if (document.getElementsByClassName('mat-sidenav-content').length > 0) {
                setTimeout(() => {
                    document.getElementsByClassName('mat-sidenav-content')[0].scrollTo(0, 0);
                }, 100);
            }
            this.openAccordian();
            this.getIntervieweeList();
            this.historyAttchement(this.historyList['data'])
        })
    }

    getIntervieweeList() {
        this.commonService.getIntervieweeList().then((res) => {
            this.intervieweeList = res;
        }, (err) => {
            console.log(err)
        })
    }

    assignInterviewee(interviewee) {
        const apiData = {
            mongo_id: this.selectedEmail._id,
            interviewee: interviewee
        }
        this.tagUpdate.assignInterviewee(apiData).subscribe((res) => { }, (err) => {
            console.log(err)
        })
    }

    ngOnDestroy() {
        document.getElementById('sideNav').classList.remove('sidehide');
    }

    getCandiatehistory() {
        if (this.selectedEmail['sender_mail']) {
            this.getCandidateHistoryApi(this.selectedEmail['sender_mail']);
        } else {
            this.getCandidateHistoryApi(this.selectedEmail['_id']);
        }
    }

    getCandidateHistoryApi(apiData) {
        this.tagUpdate.getCandidateHistory(apiData).subscribe((data) => {
            // this.historyList = this.commonService.formateEmailHistoryData(data, this.selectedEmail['_id']);
            this.historyList['data'] = this.commonService.sortBydate(data);
            this._localStorageService.setItem('email', this.historyList['data'][0]);
            this.openAccordian();
        }, (err) => {
            console.log(err);
        });
    }

    historyAttchement(emailAll: any) {
        emailAll = JSON.parse(JSON.stringify(emailAll));
        return new Promise((resolve, reject) => {
            const historyData = (allEmails, callback) => {
                const first_data = allEmails.splice(0, 1)[0];
                const index = _.findIndex(this.historyList['data'], first_data)
                if (first_data.attachment && first_data.attachment.length === 0 && first_data.is_attachment) {
                    this.tagUpdate.emailAttachment(first_data['_id']).subscribe((data) => {
                        this.getCandiatehistory();
                        if (allEmails && allEmails.length !== 0) {
                            historyData(allEmails, callback);
                        } else {
                            callback(true);
                        }
                    }, (err) => {
                        this.error = true;
                        this.errorMessageText = err.message;
                    })
                } else if (first_data.attachment && first_data.attachment.length >= 1 && first_data.is_attachment) {
                    if (allEmails && allEmails.length !== 0) {
                        historyData(allEmails, callback);
                    } else {
                        callback(true);
                    }
                } else {
                    if (index === 0) {
                        this.historyList['data'][index]['accordianIsOpen'] = true;
                    }
                    if (allEmails && allEmails.length !== 0) {
                        historyData(allEmails, callback);
                    } else {
                        callback(true);
                    }
                }
            }
            historyData(emailAll, response => {
                resolve(response);
            })
        })
    }

    openAccordian() {
        let count = 1;
        _.forEach(this.historyList['data'], (email, key) => {
            if (key === 0) {
                email['accordianIsOpen'] = true;
            } else if (email.is_attachment) {
                if (count) {
                    email['accordianIsOpen'] = true;
                    count = 0;
                } else {
                    email['accordianIsOpen'] = false;
                }
            } else {
                email['accordianIsOpen'] = false;
            }
        })
    }

    getEmailAttachment(email) {
        const index = _.findIndex(this.historyList['data'], email)
        this.tagUpdate.emailAttachment(email['_id']).subscribe((data) => {
            this.historyList['data'][index] = data['data'];
            this.historyList['data'][index]['accordianIsOpen'] = true;
        }, (err) => {
            this.error = true;
            this.errorMessageText = err.message;
        });
    }

    assignTag(id: string, emailId, title: string, emailData) {
        if (title === 'Schedule') {
            this._dialogService.openScheduleInterview({ 'tagId': id, 'emailId': emailId, 'dataForInterviewScheduleRound': this.dataForInterviewScheduleRound, 'tagselected': this.selectedTag, 'emailData': emailData }).then((data: any) => {
                if (data && data.tag_id) {
                    this.tagUpdate.assignTag(data).subscribe((res) => {
                        this.snackBar.open('Added Successfully', '', {
                            duration: 2000,
                        });
                        this.commonService.inboxRefreshEvent();
                        this.broadcast_send();
                    }, (err) => {
                        console.log(err);
                    });
                    this._location.back();
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
                    this.body = null;
                    this.idlist.push(emailId);
                    this.body = {
                        'tag_id': id,
                        'mongo_id': this.idlist
                    };
                    this.tagUpdate.assignTag(this.body).subscribe((data) => {
                        this.idlist = [];
                        this.snackBar.open('Added Successfully', '', {
                            duration: 2000,
                        });
                        this.commonService.inboxRefreshEvent();
                        this.broadcast_send();
                        if(this._localStorageService.getItem('close')) {
                            this.close();
                        }
                    }, (err) => {
                        console.log(err);
                    });
                    this._location.back();
                }
            })
        } else {
            console.log('modalRejct');
            this.body = null;
            this.idlist.push(emailId);
            this.body = {
                'tag_id': id,
                'mongo_id': this.idlist
            };
            this.tagUpdate.assignTag(this.body).subscribe((data) => {
                this.idlist = [];
                this.snackBar.open('Added Successfully', '', {
                    duration: 2000,
                });
                this.commonService.inboxRefreshEvent();
                this.broadcast_send();
            }, (err) => {
                console.log(err);
            });
            this._location.back();
        }
    }

    broadcast_send() {
        localStorage.setItem('updateInbox', this.selectedEmail['_id']);
    }
    close() {
        window.close();
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

    historyListDataTrack(index, data) {
        return data['_id'] || index;
    }

    tagsDefaultTrack(index, data) {
        return data['id'] || index;
    }

    inboxMailsTagsForEmailListAndModelDataTrack(index, data) {
        return data['id'] || index;
    }

    H_emailAttachmentTrack(index, data) {
        return index;
    }

    sendEmail() {
        this.dialogRef = this.dialog.open(ComposeEmailComponent, {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.emailList = [this.selectedEmail['sender_mail']];
        this.dialogRef.componentInstance.subject_for_genuine = localStorage.getItem('subject_for_genuine');
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }
    addNote(candidateid: any) {
        this.dialogRef = this.dialog.open(AddNoteComponent, {
            height: '35%',
            width: '30%'
        });
        this.dialogRef.componentInstance.candidateid = candidateid;
        this.dialogRef.componentInstance.emailList = this.selectedEmail;
        this.dialogRef.afterClosed().subscribe(result => {
            const date = moment(new Date()).format('DD-MM-YYYY');
            const time = moment(new Date()).format('hh:mm:ss a');
            // for (let i = 0; i <= this.historyList.data.length; i++) {
            // if (this.historyList.data[i]._id === result.notedata.mongo_id) {
            this.selectedEmail['notes'].push({ 'note': result.notedata.note, 'date': date, 'assignee': this.user, 'time': time })
            // }
            // }
            this.dialogRef = null;
        });
    }

    eventHandler(event, notedate, notetime, mongoid) {
        this.mongoid = mongoid;
        this.updatedData = {
            note: event.target.outerText, mongo_id: mongoid, note_date: notedate, note_time: notetime
        }
    }
    update(event, i) {
        if (this.updatedData !== undefined) {
            this.tagUpdate.updateNote(this.updatedData).subscribe((data) => { }, (err) => {
                this.error = true;
                this.errorMessageText = err.message;
            });
            const date = moment(new Date()).format('DD-MM-YYYY');
            const time = moment(new Date()).format('hh:mm:ss a');
            for (let j = 0; j <= this.historyList.data.length; j++) {
                if (this.historyList.data[j]._id === this.mongoid) {
                    this.historyList.data[j].notes[i] = ({
                        'note': this.updatedData.note,
                        'date': date,
                        'assignee': this.user,
                        'time': time
                    })
                }
            }

        }
    }
    getDetailedScore(fb_id: any) {
        this.dialogRef = this.dialog.open(PreviewScoreComponent, {
            height: '100%',
            width: '50%'
        });
        this.dialogRef.componentInstance.fb_id = fb_id;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }
    changeTag() {
        this.dialogRef = this.dialog.open(ChangeTagComponent, {
            height: '40%',
            width: '60%'
        });
        this.dialogRef.componentInstance.tagIdArray = this.selectedEmail['tag_id'];
        this.dialogRef.componentInstance.id = this.selectedEmail['_id']
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        })
    }
}
