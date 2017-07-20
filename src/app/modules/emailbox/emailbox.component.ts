import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import * as _ from 'lodash';
import { ScheduleInterviewComponent } from './../schedule-interview/schedule-interview.component';

@Component({
    selector: 'app-emailbox',
    templateUrl: './emailbox.component.html',
    styleUrls: ['./emailbox.component.scss']
})
export class EmailboxComponent implements OnInit {
    dialogRef: MdDialogRef < any > ;
    data: any;
    selected = false;
    selectedMid: string[];
    @Input() email: any;
    @Input() tags: any[];
    @Input() allTags: any;
    @Input() tagselected: any;
    @Input() dataForInterviewScheduleRound: any;
    @Output() refresh = new EventEmitter<string>();
    @Output() openEmail = new EventEmitter<any>();
    @Output() selectEmail = new EventEmitter<string>();
    @Output() removeEmail = new EventEmitter<string>();

    constructor(private assignEmail: ImapMailsService, public dialog: MdDialog) { }

    ngOnInit() {
        this.selectedMid = [];
        this.removeSelected();
    }

    emailSelection() {
        // this.email.selected = !this.email.selected;
        if (this.email.selected) {
            this.selectEmail.emit(this.email.sender_mail);
        } else {
            this.removeEmail.emit(this.email.sender_mail);
        }
    }
    openEmails(email: any) {
        this.openEmail.emit(this.email);
    }

    removeSelected() {
        this.tags = _.reject(this.tags, { 'id': this.tagselected });
    }

    assignToEmail(id: string, emailId: string) {
        this.selectedMid.push(emailId);
        this.data = {
            'tag_id': id,
            'mongo_id': this.selectedMid
        };
        this.assignEmail.assignTag(this.data).subscribe((data) => {
            this.selectedMid = [];
            this.refresh.emit(id);
        }, (err) => {
            console.log(err);
        });
    }

    assignTag(id: string, emailId: string, title: string) {
        if (title === 'Schedule') {
            this.dialogRef = this.dialog.open(ScheduleInterviewComponent, {
                height: '90%',
                width: '70%'
            });
            this.dialogRef.componentInstance.tagId = id;
            this.dialogRef.componentInstance.emailId = emailId;
            this.dialogRef.componentInstance.dataForInterviewScheduleRound = this.dataForInterviewScheduleRound;
            this.dialogRef.componentInstance.tagselected = this.tagselected;
            this.dialogRef.afterClosed().subscribe(result => {
                this.dialogRef = null;
                if (result && result === 'schedule') {
                    this.refresh.emit(id);
                }
            });
        } else {
            this.selectedMid.push(emailId);
            this.data = {
                'tag_id': id,
                'mongo_id': this.selectedMid
            };
            this.assignEmail.assignTag(this.data).subscribe((data) => {
                this.selectedMid = [];
                this.refresh.emit(id);
            }, (err) => {
                console.log(err);
            });
        }
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

    countEmailSubject(emailSubject) {
        return (emailSubject.length > 88) ? emailSubject.substring(0, 88) + '...' : emailSubject;
    }
}

