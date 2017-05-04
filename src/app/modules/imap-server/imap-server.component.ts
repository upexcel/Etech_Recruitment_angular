import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
            },
            {
                '_id': '23sdfsdskj3298',
                'email': 'amit@gmail.com',
                'Server': 'imap.host.com',
                'Port': 8888,
                'Encryption': 'tls',
                'Status': true,
                'Active': false
            },
            {
                '_id': '2sdfsdf8dskj3298',
                'email': 'amit@gmail.com',
                'Server': 'imap.host.com',
                'Port': 8888,
                'Encryption': 'tls',
                'Status': true,
                'Active': false
            }
        ];
    }

    addimap(form: NgForm) {
        if (form.valid) {
            console.log(form);
        }
    }

    test(id: string) {

    }

    remove(id: string) {

    }
}
