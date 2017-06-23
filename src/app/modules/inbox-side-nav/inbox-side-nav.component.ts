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
        this.selectedId = !!this.tags['Automatic'] ? this.tags['Automatic'][0].id : 1;
    }
    getEmail(id: string) {
        this.selectedId = id;
        this.getEmails.emit(id);
    }
}
