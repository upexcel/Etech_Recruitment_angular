import { Component, OnInit, NgZone } from '@angular/core';
import { DialogService } from './../../service/dialog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImapMailsService } from './../../service/imapemails.service';
import { CommonService } from '../../service/common.service';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { WalkinCandidateComponent } from '../walkin-candidate/walkin-candidate.component';
import { LocalStorageService } from '../../service/local-storage.service';

@Component({
    selector: 'app-verify-candidate',
    templateUrl: './verifyCandidate.component.html',
    styleUrls: ['./verifyCandidate.component.scss']
})
export class VerifyCandidateComponent implements OnInit {
    contacthr = false;
    fbdata: any;
    enterEmail: any;
    loading = false;
    error = false;
    errorMsg: any;
    addForm: FormGroup;
    dialogRef: MatDialogRef<any>;
    emailTestObj;
    apiFire;
    constructor(public dialog: MatDialog, private ngzone: NgZone, private _router: Router, private access: LoginService, private formBuilder: FormBuilder, private commonService: CommonService, public localStorageService: LocalStorageService) {
    }

    ngOnInit() {
        this.fbdata = this.commonService.storeFbdata('verifyEmail');
        this.addForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')])],
        });

    }
    ngOnDestroy() {
        if(this.apiFire) {
            clearInterval(this.apiFire);
        }
    }
    addWalkinCandidate() {
        this._router.navigate(['/addwalkin']);
    }
    checkUser() {
        this.contacthr = false;
        this.enterEmail = true;
    }
    verifyLogin() {
        if (this.addForm.valid) {
            this.loading = true;
            this.fbdata['appliedEmail'] = this.addForm.controls['email'].value;
            this.access.candidate_login(this.fbdata).subscribe(response => {
                if (response.status === 1) {
                    this._router.navigate([`/otp/${response.fb_id}`]);
                } else {
                    this.loading = false;
                    this.errorMsg = 'Email Not found';
                    this.error = true;
                }
            }, err => {
                this.loading = false;
                this.errorMsg = err.message;
                this.error = true;
            });
        }
    }
    fblogout() {
        localStorage.clear();
        this._router.navigate(['/emailtestlogin']);
    }
}
