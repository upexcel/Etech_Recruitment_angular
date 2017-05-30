import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-imap-server',
    templateUrl: './imap-server.component.html',
    styleUrls: ['./imap-server.component.scss']
})
export class ImapServerComponent implements OnInit {
    imapSettingJson: any[];
    loading: boolean;
    constructor(private imapServices: ImapMailsService, public snackBar: MdSnackBar) {}

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

    remove(id: string) {
        this.imapServices.deleteImap(id).subscribe(
       (data) => {
           this.getImapList();
           this.snackBar.open(data.status, '', {
               duration: 2000,
           });
       },
        (err) => {
            console.log(err);
        });
    }
}
