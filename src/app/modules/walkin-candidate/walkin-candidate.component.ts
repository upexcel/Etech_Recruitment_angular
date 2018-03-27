import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import { config } from './../../config/config';
import { Router } from '@angular/router';

@Component({
    selector: 'app-walkin-candidate-temp',
    templateUrl: './walkin-candidate.component.html',
    styleUrls: ['./walkin-candidate.component.scss'],
})
export class WalkinCandidateComponent implements OnInit {
    walkinData: any;
    loading: boolean;

    constructor(private apiService: ImapMailsService, public snackBar: MatSnackBar, public _router: Router) {
        this.walkinData = JSON.parse(localStorage.getItem('walkinUser'))
    }

    ngOnInit() {}

    save(form: NgForm) {
        if (form.valid) {
            console.log(form.value)
            this.loading = true;
            const data = form.value;
            localStorage.setItem('user', form.value.from);
            data['sender_mail'] = this.walkinData.email;
            data['mobile_no'] = config.mobileNoPrefix + form.value['mobile_no'];
            this.apiService.addWalkinCandidate(data).subscribe((res) => {
                this.loading = false;
                this.snackBar.open('Candidate Added', '', {
                    duration: 2000,
                });
                this._router.navigate(['/ThankYou']);
            }, (err) => {
                this.loading = false;
                this.snackBar.open('Something Went Wrong', '', {
                    duration: 2000,
                });
            })
        }
    }
    disableText (event) {
        return event.charCode >= 48 && event.charCode <= 57;
    }
}
