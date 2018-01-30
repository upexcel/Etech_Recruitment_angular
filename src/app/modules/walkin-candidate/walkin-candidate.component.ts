import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-walkin-candidate-temp',
    templateUrl: './walkin-candidate.component.html',
    styleUrls: ['./walkin-candidate.component.scss'],
})
export class WalkinCandidateComponent implements OnInit {
    walkinData: any;
    constructor(public dialogRef: MdDialogRef<any>, private apiService: ImapMailsService, public snackBar: MdSnackBar) {
        this.walkinData = JSON.parse(localStorage.getItem('walkinUser'))
        console.log(this.walkinData);
    }

    ngOnInit() { }

    save(form: NgForm) {
        if (form.valid) {
            let data = form.value;
            data['sender_mail'] = this.walkinData.email;
            data['from'] = this.walkinData.name;
            data['fb_id'] = this.walkinData.fb_id;
            console.log(data)
            this.apiService.addWalkinCandidate(data).subscribe((res) => {
                this.dialogRef.close('sucess');
                this.snackBar.open('Candidate Added', '', {
                    duration: 2000,
                });
            }, (err) => {
                console.log(err)
            })
        }
    }

    close() {
        this.dialogRef.close();
    }
}
