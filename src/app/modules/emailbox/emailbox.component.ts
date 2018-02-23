import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import * as _ from 'lodash';
import { ScheduleInterviewComponent } from './../schedule-interview/schedule-interview.component';
import { CommonService } from './../../service/common.service';
import { DialogService } from './../../service/dialog.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { ViewNoteComponent } from './../view-note/view-note.component';
import { AddNoteComponent } from './../add-note/add-note.component';
import { config } from './../../config/config';

@Component({
    // changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-emailbox',
    templateUrl: './emailbox.component.html',
    styleUrls: ['./emailbox.component.scss']
})
export class EmailboxComponent implements OnInit {
    dialogRef: MdDialogRef<any>;
    data: any;
    selected = false;
    selectedMid: string[];
    tagAssigned = [];
    @Input() email: any;
    @Input() tagfilter: any;
    @Input() tags: any[];
    @Input() allTags: any;
    @Input() tagselected: any;
    @Input() dataForInterviewScheduleRound: any;
    @Input() inboxMailsTagsForEmailListAndModel: any;
    @Input() intervieweeList: any
    @Input() isSearching: boolean;
    @Output() refresh = new EventEmitter<string>();
    @Output() refreshAndDelete = new EventEmitter<string>();
    @Output() openEmail = new EventEmitter<any>();
    @Output() refreshEmail = new EventEmitter<any>();
    @Output() selectEmail = new EventEmitter<string>();
    @Output() removeEmail = new EventEmitter<string>();
    @Output() removeStarredEmail = new EventEmitter<string>();
    @Output() deleteAndAssignTag = new EventEmitter();
    @Output() deleteEmailFromList = new EventEmitter();
    role: string;
    url: string;
    starred = false;
    allTagTitle = config['allTagTitle'];
    constructor(private _localStorageService: LocalStorageService, private assignEmail: ImapMailsService, public dialog: MdDialog, public commonService: CommonService, public _dialogService: DialogService, public _snackBar: MdSnackBar) { }

    ngOnInit() {
        this.url = config.avatarUrl;
        this.selectedMid = [];
        this.removeSelected();
        this.role = this._localStorageService.getItem('role');
        this.tagAssigned = this.commonService.filtertag(this.email);
        this.email = this.commonService.getTagTitle(this.email);
    }
    emailSelection() {
        if (this.email.selected) {
            this.selectEmail.emit(this.email.sender_mail);
        } else {
            this.removeEmail.emit(this.email.sender_mail);
        }
    }
    openEmails(email: any) {
        if (email['unread']) {
            this.assignEmail.UnreadStatus({
                'status': false,
                'mongo_id': email['_id']
            }).subscribe((data) => {
            }, (err) => {
                console.log(err);
            });
        }
        this.openEmail.emit(this.email);
    }

    removeSelected() {
        this.tags = _.reject(this.tags, { 'id': this.tagselected });
    }

    assignTag(id: string, emailId: string, title: string, emailData) {
        if (title === 'Schedule') {
            this._dialogService.openScheduleInterview({ 'tagId': id, 'emailId': emailId, 'dataForInterviewScheduleRound': this.dataForInterviewScheduleRound, 'tagselected': this.tagselected, 'emailData': emailData }).then((data: any) => {
                if (data && data.tag_id) {
                    this.assignEmail.assignTag(data).subscribe((res) => {
                        // this.deleteAndAssignTag.emit(data.tag_id);
                        this.refreshAndDelete.emit()
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
                    this.deleteAndAssignTag.emit(id);
                }
            })
        } else {
            this.deleteAndAssignTag.emit(id);
        }
    }

    getColor(title) {
        return this.commonService.getDefaultTagColor(title);
    }

    getIcon(title) {
        return this.commonService.getDefaultTagIcon(title);
    }

    countEmailSubject(emailSubject) {
        return (emailSubject && emailSubject.length > 88) ? emailSubject.substring(0, 88) + '...' : emailSubject;
    }

    allTagsDefaultTrack(index, data) {
        if (data && data['id']) {
            return data['id'];
        } else {
            return index;
        }
    }

    inboxMailsTagsForEmailListAndModelDataTrack(index, data) {
        return index;
    }

    markReadUnread() {
        if (!this.email.unread) {
            this.assignEmail.MarkASUnreadStatus({
                'mongo_id': this.email._id
            }).subscribe((data) => {
            }, (err) => {
                console.log(err);
            });
        } else {
            this.assignEmail.UnreadStatus({
                'status': false,
                'mongo_id': this.email._id
            }).subscribe((data) => {
            }, (err) => {
                console.log(err);
            });
        }
        this.refreshEmail.emit(this.email);
    }

    assignInterviewee(interviewee) {
        const apiData = {
            mongo_id: this.email._id,
            interviewee: interviewee
        }
        this.assignEmail.assignInterviewee(apiData).subscribe((res) => { }, (err) => {
            console.log(err)
        })
    }

    emailNoteView(candidateNote: any) {
        this.dialogRef = this.dialog.open(ViewNoteComponent, {
            height: '100%',
            width: 'auto'
        });
        this.dialogRef.componentInstance.candidateNote = candidateNote;
    }
    markStarred(email) {
        const body = {
            'mongo_id': this.email._id
        }
        if (this.email.candidate_star && this.email.candidate_star.length) {
            this.starred = false;
            this.email.candidate_star = [];
            this.removeStarredEmail.emit(this.email.sender_mail)
        } else {
            this.starred = true;
            this.email.candidate_star = [0];
        }
        this.assignEmail.markStarred(this.starred, body).subscribe(() => {
        }, (err) => {
            console.log(err);
        })
    }
    moveToSpam(email) {
        this._dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this.assignEmail.moveEmailToSpam(email['sender_mail']).subscribe((response) => {
                    this._snackBar.open('Moved to spam', '', {
                        duration: 2000
                    })
                }, (err) => {
                    console.log(err);
                })
                this.deleteEmailFromList.emit();
            }
        }, (err) => {
        });
    }
    moveToArchive(email) {
        this._dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this.assignEmail.moveEmailToArchive(email['sender_mail']).subscribe((response) => {
                    this._snackBar.open('Moved to archive', '', {
                        duration: 2000
                    })
                }, (err) => {
                    console.log(err);
                })
                this.deleteEmailFromList.emit();
            }
        }, (err) => {
        });
    }
}
