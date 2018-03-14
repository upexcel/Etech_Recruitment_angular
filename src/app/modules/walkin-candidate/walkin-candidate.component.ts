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

    ngOnInit() { 
        console.log(this.loading);
        
    }

    save(form: NgForm) {
        if (form.valid) {
            this.loading = true;
            console.log(this.loading);
            const data = form.value;
            data['sender_mail'] = this.walkinData.email;
            data['from'] = this.walkinData.name;
            data['fb_id'] = this.walkinData.fb_id;
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
}
