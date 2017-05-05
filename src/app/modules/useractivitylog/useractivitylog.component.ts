import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-useractivitylog',
    templateUrl: './useractivitylog.component.html',
    styleUrls: ['./useractivitylog.component.scss']
})
export class UserActivityLogComponent implements OnInit {
    history: any;
    emaillist: any;
    constructor(public emailactivity: ImapMailsService) { }

    ngOnInit() {
        this.emailactivity.getHistory().then((data) => {
            this.history = data;
        });
        this.emailactivity.getEmailName().then((data) => {
            this.emaillist = data;
        });
    }

}
