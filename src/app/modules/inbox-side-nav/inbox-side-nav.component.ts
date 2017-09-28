import { Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';

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
        if (this.tags[0] && this.tags[0]['data'] && this.tags[0]['data'].length > 0) {
            this.selectedId = !!this.tags[0]['data'][0]['id'] ? this.tags[0]['data'][0]['id'] : 1;
            this.parantTagId = !!this.tags[0]['data'][0]['id'] ? this.tags[0]['data'][0]['id'] : 1;
        }
    }
    getEmail(id, parantTagId, title, parentTitle) {
        this.parantTagId = parantTagId;
        this.selectedId = (id === 0 ? parantTagId : id);
        this.menuShow = false;
        if (title === 'Mails') {
            this.getEmails.emit({'id': null, 'parantTagId': null, 'title': title, 'parentTitle': parentTitle});
        } else {
            this.getEmails.emit({'id': id, 'parantTagId': parantTagId, 'title': title, 'parentTitle': parentTitle});
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
