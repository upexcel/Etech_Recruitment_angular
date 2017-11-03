import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import * as _ from 'lodash';
import { ScheduleInterviewComponent } from './../schedule-interview/schedule-interview.component';
import { CommonService } from './../../service/common.service';
import { DialogService } from './../../service/dialog.service';
import { LocalStorageService } from './../../service/local-storage.service';
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
    @Input() email: any;
    @Input() tags: any[];
    @Input() allTags: any;
    @Input() tagselected: any;
    @Input() dataForInterviewScheduleRound: any;
    @Input() inboxMailsTagsForEmailListAndModel: any;
    @Output() refresh = new EventEmitter<string>();
    @Output() openEmail = new EventEmitter<any>();
    @Output() refreshEmail = new EventEmitter<any>();
    @Output() selectEmail = new EventEmitter<string>();
    @Output() removeEmail = new EventEmitter<string>();
    @Output() deleteAndAssignTag = new EventEmitter();
    role: string;
    constructor(private _localStorageService: LocalStorageService, private assignEmail: ImapMailsService, public dialog: MdDialog, public commonService: CommonService, public _dialogService: DialogService) { }

    ngOnInit() {
        this.selectedMid = [];
        this.removeSelected();
        this.role = this._localStorageService.getItem('role');
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
                        this.deleteAndAssignTag.emit(data.tag_id);
                  }, (err) => {
                      console.log(err);
                  });
                }
            }, (err) => {
                console.log(err);
            });
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
        return (emailSubject.length > 88) ? emailSubject.substring(0, 88) + '...' : emailSubject;
    }

    allTagsDefaultTrack(index, data) {
        return data['id'] || index;
    }

    inboxMailsTagsForEmailListAndModelDataTrack(index, data) {
        return index;
    }

    markReadUnread() {
        if (!this.email.unread) {
            this.assignEmail.MarkASUnreadStatus({
                'mongo_id': this.email._id
            }).subscribe((data) => {
                this.refreshEmail.emit(this.email);
            }, (err) => {
                console.log(err);
            });
        } else {
            this.assignEmail.UnreadStatus({
                'status': false,
                'mongo_id': this.email._id
            }).subscribe((data) => {
                this.refreshEmail.emit(this.email);
            }, (err) => {
                console.log(err);
            });
        }

    }
}
