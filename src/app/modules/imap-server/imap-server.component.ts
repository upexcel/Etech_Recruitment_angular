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
        this.imapsettingjson = [{
            '_id': '2398dskj3298',
            'email': '123@gmail.com',
            'Server': 'imap.host.com',
            'Port': 1234,
            'Encryption': 'ssl',
            'Status': false,
            'Active': true
        }];
    }

    test(id: string) {

    }

    remove(id: string) {

    }
}
