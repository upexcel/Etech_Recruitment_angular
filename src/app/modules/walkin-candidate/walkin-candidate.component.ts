import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import { config } from './../../config/config';

@Component({
    selector: 'app-walkin-candidate-temp',
    templateUrl: './walkin-candidate.component.html',
    styleUrls: ['./walkin-candidate.component.scss'],
})
export class WalkinCandidateComponent implements OnInit {
    walkinData: any;
    constructor(public dialogRef: MatDialogRef<any>, private apiService: ImapMailsService, public snackBar: MatSnackBar) {
        this.walkinData = JSON.parse(localStorage.getItem('walkinUser'))
    }

    ngOnInit() { }

    save(form: NgForm) {
        if (form.valid) {
            const data = form.value;
            data['sender_mail'] = this.walkinData.email;
            data['from'] = this.walkinData.name;
            data['fb_id'] = this.walkinData.fb_id;
            data['mobile_no'] = config.mobileNoPrefix + form.value['mobile_no'];
            this.apiService.addWalkinCandidate(data).subscribe((res) => {
                this.dialogRef.close('sucess');
                this.snackBar.open('Candidate Added', '', {
                    duration: 2000,
                });
            }, (err) => {
            })
        }
    }

    close() {
        this.dialogRef.close();
    }
}
