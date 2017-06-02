import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-smtp-server',
    templateUrl: './smtp-server.component.html',
    styleUrls: ['./smtp-server.component.scss']
})
export class SmtpServerComponent implements OnInit {
    settingJson: any[];
    loading: boolean;
    constructor(private apiServices: ImapMailsService, public snackBar: MdSnackBar) {}

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

    test(email: string) {
        this.apiServices.testSmtp(email).subscribe(
       (data) => {
           this.getSmtpList();
           this.snackBar.open('SMTP Tested Successfully', '', {
               duration: 2000,
           });
       },
        (err) => {
            console.log(err);
            this.snackBar.open(err, '', {
                duration: 2000,
            });
        });
    }

    changeStatus(email: string) {
        this.apiServices.changeSmtpStatus(email).subscribe(
       (data) => {
           this.getSmtpList();
           this.snackBar.open(data.message, '', {
               duration: 2000,
           });
       },
        (err) => {
            console.log(err);
            this.snackBar.open(err, '', {
                duration: 2000,
            });
        });
    }

    remove(id: string) {
        this.apiServices.deleteSmtp(id).subscribe(
       (data) => {
           this.getSmtpList();
           this.snackBar.open('SMTP Removed Successfully', '', {
               duration: 2000,
           });
       },
        (err) => {
            console.log(err);
            this.snackBar.open(err.status, '', {
                duration: 2000,
            });
        });
    }
}
