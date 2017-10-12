import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import * as _ from 'lodash';
@Component({
    selector: 'app-inbox-side-nav',
    templateUrl: './inbox-side-nav.component.html',
    styleUrls: ['./inbox-side-nav.component.scss']
})
export class InboxSideNavComponent implements OnInit {
    firstlist = false;
    thirdlist = false;
    selectedId: string;
    parantTagId: string;
    @Input() tags: any[];
    menuShow: boolean;
    @Output() getEmails = new EventEmitter<any>();
    constructor(public getTag: ImapMailsService) { }
    ngOnInit() {
        _.forEach(this.tags, (tagValue, tagKey) => {
            if (tagValue['title'] === 'inbox') {
                _.forEach(tagValue['data'], (tagSubValue, tagSubKey) => {
                    if (tagSubValue['title'] === 'Mails') {
                        this.selectedId = tagSubValue['id'];
                        this.parantTagId = '0';
                    }
                });
            }
        });
    }
    getEmail(id, parantTagId, title, parentTitle) {
        this.parantTagId = parantTagId;
        this.selectedId = (id === 0 ? parantTagId : id);
        this.menuShow = false;
        if (title === 'Mails') {
            this.getEmails.emit({ 'id': null, 'parantTagId': null, 'title': title, 'parentTitle': parentTitle });
        } else if (title === 'Attachment') {
            this.getEmails.emit({ 'id': null, 'parantTagId': null, 'title': title, 'parentTitle': parentTitle, 'is_attach': true });
        } else {
            this.getEmails.emit({ 'id': id, 'parantTagId': parantTagId, 'title': title, 'parentTitle': parentTitle });
        }
    }
    openSubMenu(title) {
        for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i]['title'] === title) {
                this.tags[i]['menuOpen'] = !this.tags[i]['menuOpen'];
                return;
            }
        }
    }
    openSubChildMenu(title) {
        for (let i = 0; i < this.tags.length; i++) {
            for (let j = 0; j < this.tags[i]['data'].length; j++) {
                if (this.tags[i]['data'][j]['title'] === title) {
                    this.tags[i]['data'][j]['menuOpen'] = !this.tags[i]['data'][j]['menuOpen'];
                }
            }
        }
    }

    tagDataTrack(index, data) {
        return data['id'] || index;
    }

    subTagSubchildTrack(index, data) {
        return data['id'] || index;
    }
}
