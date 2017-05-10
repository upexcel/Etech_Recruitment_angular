import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-imap-server',
    templateUrl: './imap-server.component.html',
    styleUrls: ['./imap-server.component.scss']
})
export class ImapServerComponent implements OnInit {
    imapSettingJson: any[];
    loading: boolean;
    constructor(private imapServices: ImapMailsService) {}

    ngOnInit() {
        this.getImapList();
    }

    getImapList() {
        this.imapServices.getImapList().subscribe((data) => {
            this.imapSettingJson = data;
        },
        (err) => {
            console.log(err);
        });
    }

    test(id: string) {

    }

    remove(id: string) {
        this.imapServices.deleteImap(id).subscribe(
       (data) => {
           this.getImapList();
       },
        (err) => {
            console.log(err);
        });
    }
}
