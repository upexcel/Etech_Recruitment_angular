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
    constructor(private imapservices: ImapMailsService) {}

    ngOnInit() {
        this.getImaplist();
    }

    getImaplist() {
        this.imapservices.getImapList().subscribe((data) => {
            this.imapsettingjson = data;
        },
        (err) => {
            console.log(err);
        });
    }

    test(id: string) {

    }

    remove(id: string) {
        console.log(id);
        this.imapservices.deleteImap(id).subscribe(
       (data) => {
           console.log(data);
           this.getImaplist();
       },
        (err) => {
            console.log(err);
        });
    }
}
