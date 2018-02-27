import { Component, OnInit, NgZone } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { CommonService } from '../../service/common.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { OtpdialogComponent } from '../otpdialog/otpdialog.component';
import { environment } from '../../../environments/environment';
declare let FB: any;

@Component({
    selector: 'app-candidate-login',
    templateUrl: './candidateLogin.component.html',
    styleUrls: ['./candidateLogin.component.scss'],
    providers: [Title]
})
export class CandidateLoginComponent implements OnInit {
    addForm: FormGroup;
    email: string;
    password: string;
    keeplogin: boolean;
    loading: boolean;
    fbloading: boolean;
    message: string;
    showmessage: boolean;
    fbObj: any;
    fbtoken: any;
    dialogRef: MatDialogRef<any>;
    constructor(private title: Title, public dialog: MatDialog, private commonService: CommonService, private formBuilder: FormBuilder, private zone: NgZone, private access: LoginService, private _router: Router, public _localStorageService: LocalStorageService, public _snackbar: MatSnackBar) {
        this.title.setTitle('Test Papers');
        if (this._localStorageService.getItem('loginMessage')) {
            this._snackbar.open(this._localStorageService.getItem('loginMessage'), '', {
                duration: 2000,
            });
            this._localStorageService.clearItem('loginMessage');
        }
    }

    ngOnInit() {
        this.addForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')])],
            password: ['', Validators.required],
            keeplogin: false
        });
    }


    fblogin() {
        FB.login((result) => {
            if (result.status === 'connected') {
                this.fbtoken = result.authResponse.accessToken;
                this.testAPI();
            }
        }, { scope: 'user_friends,email' });
    }
    testAPI() {
        this.fbloading = true;
        this.showmessage = false;
        FB.api('/me?fields=id,email,name,gender,picture.width(150).height(150)', (res) => {
            this.fbObj = {
                'email': res.email,
                'appliedEmail': res.email,
                'name': res.name,
                'gender': res.gender,
                'profile_pic': res.picture.data.url,
                'fb_id': res.id
            };
            this.access.facebook_login(this.fbObj).subscribe(response => {
                const added = this.commonService.storeFbdata(this.fbObj);
                // localStorage.setItem('role', JSON.stringify('Candidate'));
                // localStorage.setItem('user', res.name);
                // localStorage.setItem('user_id', res.id)
                localStorage.setItem('token', this.fbtoken);
                // localStorage.setItem('img', res.picture.data.url);

                this.zone.run(() => {
                    if (response.status === 1) {
                        this.dialogRef = this.dialog.open(OtpdialogComponent, {
                            height: '225px',
                            width: '300px'
                        });
                        this.dialogRef.componentInstance.fb_id = this.fbObj.fb_id;

                        this.dialogRef.afterClosed().subscribe(result => {
                            if (result) {
                                this.fbloading = true;
                            } else {
                                this.fbloading = false;
                            }
                            this.dialogRef = null;
                        });
                    } else {
                        this.fbloading = false;
                        localStorage.setItem('walkinUser', JSON.stringify(this.fbObj));
                        this._router.navigate(['/verifycandidate']);
                    }

                })
            },
                (err) => {
                    this.zone.run(() => {
                        this.fbloading = false;
                        this.message = err.message;
                        this.showmessage = true;
                    })
                });
        });
    }
}
