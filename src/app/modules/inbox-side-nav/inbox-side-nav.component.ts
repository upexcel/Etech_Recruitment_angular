import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-inbox-side-nav',
    templateUrl: './inbox-side-nav.component.html',
    styleUrls: ['./inbox-side-nav.component.scss']
})
export class InboxSideNavComponent {
    firstlist = false;
    thirdlist = false;
    @Input() tags: any[];
    @Output() getEmails = new EventEmitter<string>();
    constructor(public getTag: ImapMailsService) { }

    getEmail(id: string) {
        this.getEmails.emit(id);
    }
}
