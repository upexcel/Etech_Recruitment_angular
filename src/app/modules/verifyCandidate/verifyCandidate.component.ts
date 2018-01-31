import { Component, OnInit, NgZone } from '@angular/core';
import { DialogService } from './../../service/dialog.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImapMailsService } from './../../service/imapemails.service';
import { CommonService } from '../../service/common.service';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { OtpdialogComponent} from '../otpdialog/otpdialog.component';
import { WalkinCandidateComponent } from '../walkin-candidate/walkin-candidate.component';

@Component({
    selector: 'app-verify-candidate',
    templateUrl: './verifyCandidate.component.html',
    styleUrls: ['./verifyCandidate.component.scss']
})
export class VerifyCandidateComponent implements OnInit {
    contacthr= false;
    fbdata: any;
    enterEmail: any;
    loading= false;
    error = false;
    errorMsg: any;
    addForm: FormGroup;
    dialogRef: MdDialogRef<any>;
    constructor(public dialog: MdDialog, private ngzone: NgZone, private _router: Router, private access: LoginService, private formBuilder: FormBuilder, private commonService: CommonService) {
    }

    ngOnInit() {
        this.fbdata = this.commonService.storeFbdata('verifyEmail');
        this.addForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')])],
        });

    }
    contactHr() {
        this.dialogRef = this.dialog.open(WalkinCandidateComponent, {
            height: '100%',
            width: '60%'
        });
        this.dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result) {
                this.contacthr = true;
                this.enterEmail = false;
                setTimeout(() => {
                    this._router.navigate(['/candidatelogin']);
                    localStorage.clear();
                }, 5000);
            }
            this.dialogRef = null;
        });
    }
    checkUser() {
        this.contacthr = false;
        this.enterEmail = true;
    }
    verifyLogin() {
        if (this.addForm.valid) {
            this.loading = true;
            this.fbdata['appliedEmail'] = this.addForm.controls['email'].value;
            this.access.facebook_login(this.fbdata).subscribe(response => {
                if (response.status === 1) {
                    this.ngzone.run(() => {
                        this.dialogRef = this.dialog.open(OtpdialogComponent, {
                            height: '225px',
                            width: '300px'
                        });
                        this.dialogRef.componentInstance.fb_id = this.fbdata.fb_id;
                        this.dialogRef.afterClosed().subscribe(result => {
                            this.loading = false;
                            if (result) {
                                this._router.navigate(['/candidate/interviewques', response.data.fb_id]);
                            }
                            this.dialogRef = null;
                        });
                    });
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
}
