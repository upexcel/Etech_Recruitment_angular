import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-emailbox',
    templateUrl: './emailbox.component.html',
    styleUrls: ['./emailbox.component.scss']
})
export class EmailboxComponent implements OnInit {
    data: any;
    selected = false;
    selectedMid: string[];
    @Input() email: any;
    @Input() tags: any[];
    @Input() allTags: any;
    @Input() tagselected: any;
    @Output() refresh = new EventEmitter<string>();
    @Output() openEmail = new EventEmitter<any>();
    @Output() selectEmail = new EventEmitter<string>();
    @Output() removeEmail = new EventEmitter<string>();

    constructor(private assignEmail: ImapMailsService) { }

    ngOnInit() {
        this.selectedMid = [];
        this.removeSelected();
    }

    emailSelection() {
        this.selected = !this.selected;
        if (this.selected) {
            this.selectEmail.emit(this.email._id);
        } else {
            this.removeEmail.emit(this.email._id);
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

    assignTag(id: string, emailId: string) {
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

