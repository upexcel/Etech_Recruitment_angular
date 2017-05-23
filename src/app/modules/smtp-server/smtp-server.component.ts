import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-smtp-server',
    templateUrl: './smtp-server.component.html',
    styleUrls: ['./smtp-server.component.scss']
})
export class SmtpServerComponent implements OnInit {
    settingJson: any[];
    loading: boolean;
    constructor(private apiServices: ImapMailsService) {}

    ngOnInit() {
        this.getSmtpList();
    }

    getSmtpList() {
        this.apiServices.getSmtpList().subscribe((data) => {
            this.settingJson = data;
        },
        (err) => {
            console.log(err);
        });
    }

    test(id: string) {

    }

    remove(id: string) {
        this.apiServices.deleteSmtp(id).subscribe(
       (data) => {
           this.getSmtpList();
       },
        (err) => {
            console.log(err);
        });
    }
}
