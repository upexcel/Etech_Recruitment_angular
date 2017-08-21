import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from './../../service/imapemails.service';
import { DialogService } from './../../service/dialog.service';

@Component({
    selector: 'app-email-logs',
    templateUrl: './email-logs.component.html',
    styleUrls: ['./email-logs.component.scss']
})
export class EmailLogsComponent implements OnInit {
    page = 1;
    totalPages = 1;
    limit = 100;
    emailLogs: any;
    constructor(public _apiService: ImapMailsService, public _dialogService: DialogService) { }

    ngOnInit() {
        this.getEmailLogs();
    }

    getEmailLogs() {
        this._apiService.getEmailLogs({'page': this.page, 'limit': this.limit}).subscribe((res) => {
            this.emailLogs = res['data'];
            this.totalPages = Math.ceil(res['count'] / this.limit);
        }, (err) => {
            console.log(err);
        });
    }

    previous() {
        --this.page;
        this.getEmailLogs();
    }

    next() {
        ++this.page;
        this.getEmailLogs();
    }

    previewEmail(emailData) {
        this._dialogService.previewEmail(emailData).then((res) => {
            console.log(res);
        });
    }

}
