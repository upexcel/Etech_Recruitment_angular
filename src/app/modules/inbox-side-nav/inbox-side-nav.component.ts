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
    @Input() tags: any[];
    @Output() getEmails = new EventEmitter<string>();
    constructor(public getTag: ImapMailsService) { }
    ngOnInit() {
        this.selectedId = !!this.tags[0]['data'][0]['id'] ? this.tags[0]['data'][0]['id'] : 1;
    }
    getEmail(id: string) {
        this.selectedId = id;
        this.getEmails.emit(id);
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
}
