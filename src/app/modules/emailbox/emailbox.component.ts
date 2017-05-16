import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';

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
    @Output() refresh = new EventEmitter<string>();
    @Output() openEmail = new EventEmitter<any>();
    @Output() selectEmail = new EventEmitter<string>();
    @Output() removeEmail = new EventEmitter<string>();

    constructor(private assignEmail: ImapMailsService) { }

    ngOnInit() {
        this.selectedMid = [];
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
}

