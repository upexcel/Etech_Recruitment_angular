import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import { config } from './../../config/config';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
    selector: 'app-walkin-candidate-temp',
    templateUrl: './walkin-candidate.component.html',
    styleUrls: ['./walkin-candidate.component.scss'],
})
export class WalkinCandidateComponent implements OnInit {
    walkinData: any;
    loading: boolean;
    formdata = new FormData();

    constructor(private apiService: ImapMailsService, public snackBar: MatSnackBar, public _router: Router) {
        this.walkinData = JSON.parse(localStorage.getItem('walkinUser'))
    }

    ngOnInit() { }

    save(form: NgForm) {
        if (form.valid) {
            this.loading = true;
            const data = form.value;
            localStorage.setItem('user', form.value.from);
            data['sender_mail'] = this.walkinData.email;
            data['mobile_no'] = config.mobileNoPrefix + form.value['mobile_no'];
            this.formdata.append('from', data.from);
            this.formdata.append('gender', data.gender);
            this.formdata.append('mobile_no', data.mobile_no);
            this.formdata.append('sender_mail', data.sender_mail);
            this.formdata.append('source', data.source);

            this.apiService.addWalkinCandidate(this.formdata).subscribe((res) => {
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

    uploadFile(event) {
        if (event.target.files) {
            const resume = event.target.files;
            const fileNames: any = [];
            const newformData = this.formdata;
            _.forEach(resume, (value, i) => {
                fileNames.push(`file${i + 1}`);
                const a = new ImageCompressor(resume[i], {
                    quality: .6,
                    success(result) {
                        newformData.append(`file${i + 1}`, result);
                    },
                    error(e) {
                        console.log(e.message);
                    },
                });
            })
            this.formdata = newformData;
            this.formdata.append('fileNames', JSON.stringify(fileNames));
        }
    }

    disableText(event) {
        return event.charCode >= 48 && event.charCode <= 57;
    }
}
