import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-imap-server',
    templateUrl: './imap-server.component.html',
    styleUrls: ['./imap-server.component.scss']
})
export class ImapServerComponent implements OnInit {
    imapSettingJson: any[];
    loading: boolean;
    constructor(private imapServices: ImapMailsService, public snackBar: MatSnackBar) {}

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
    activateImap(email: string) {
        this.imapServices.activateImap(email).subscribe(
       (data) => {
           this.getImapList();
       },
        (err) => {
            console.log(err);
            this.snackBar.open(err.message, '', {
                duration: 2000,
            });
        });
    }

    remove(id: string) {
        this.imapServices.deleteImap(id).subscribe(
       (data) => {
           this.getImapList();
       },
        (err) => {
            console.log(err);
            this.snackBar.open(err.message, '', {
                duration: 2000,
            });
        });
    }

    imapSettingJsonTrack(index, data) {
        return data['id'] || index;
    }
}
