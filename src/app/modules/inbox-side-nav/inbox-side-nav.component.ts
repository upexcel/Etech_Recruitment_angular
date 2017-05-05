import { Component, OnInit, Input } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-inbox-side-nav',
    templateUrl: './inbox-side-nav.component.html',
    styleUrls: ['./inbox-side-nav.component.scss']
})
export class InboxSideNavComponent implements OnInit {
    firstlist = false;
    secondlist = false;
    thirdlist = false;
    @Input() tags: any[];

    constructor(public getTag: ImapMailsService) { }

    ngOnInit() {

    }

}
