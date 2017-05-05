import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-imap-server',
    templateUrl: './imap-server.component.html',
    styleUrls: ['./imap-server.component.scss']
})
export class ImapServerComponent implements OnInit {
    imapsettingjson: any[];
    loading: boolean;
    constructor(public imapservices: ImapMailsService) {}

    ngOnInit() {
        this.imapservices.getImapList().then((data) => {
            this.imapsettingjson = data;
            console.log(this.imapsettingjson);
        });
    }

    test(id: string) {

    }

    remove(id: string) {

    }
}
