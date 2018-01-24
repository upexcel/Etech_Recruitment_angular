import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { CommonService } from '../../service/common.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';
import { MdSnackBar, MdDialog, MdDialogRef } from '@angular/material';
import { OtpdialogComponent} from '../otpdialog/otpdialog.component';
declare let FB: any;

@Component({
    selector: 'app-candidate-login',
    templateUrl: './candidateLogin.component.html',
    styleUrls: ['./candidateLogin.component.scss']
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
    dialogRef: MdDialogRef<any>;
    constructor(public dialog: MdDialog, private commonService: CommonService, private formBuilder: FormBuilder, private zone: NgZone, private access: LoginService, private _router: Router, public _localStorageService: LocalStorageService, public _snackbar: MdSnackBar) {
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

        FB.init({
            appId: '526179664434624',
            cookie: true, // enable cookies to allow the server to access
            xfbml: true, // parse social plugins on this page
            version: 'v2.11' // use graph api version 2.8
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
        FB.api('/me?fields=id,email,name,gender,picture.width(150).height(150)', (res) => {
            this.fbObj = {
                'email': res.email,
                'appliedEmail': res.email,
                'name': res.name,
                'gender': res.gender,
                'profile_pic' : res.picture.data.url,
                'fb_id' : res.id
            };
            this.access.facebook_login(this.fbObj).subscribe(response => {
                let added = this.commonService.storeFbdata(this.fbObj);
                console.log('sucess', response);
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
                            }
                            this.dialogRef = null;
                            console.log(result, 'jjjjjjjjjjjjjjjjjjjj')
                        });
                    } else if (response.status === 2) {
                        this._router.navigate(['/verifycandidate']);
                    }

                })
            },
            (err) => {
                console.log(err);
                this.fbloading = false;
                this.showmessage = true;
                this.message = err.message;
            });
        });
    }
}
