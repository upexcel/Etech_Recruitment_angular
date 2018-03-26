import { Component, OnInit, NgZone } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../../service/login.service';
import { CommonService } from '../../service/common.service';
import { config } from './../../config/config'
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { OtpdialogComponent} from '../otpdialog/otpdialog.component';

@Component({
    selector: 'app-emailtestlogin',
    templateUrl: './emailtestlogin.component.html',
    styleUrls: ['./emailtestlogin.component.scss'],
    providers: [ Title]
})
export class EmailtestloginComponent implements OnInit {
    emailTestObj: any;
    loading = false;
    showmessage= false;
    message: any;
    dialogRef: MatDialogRef<any>;
    constructor(private title: Title, public dialog: MatDialog, private commonService: CommonService, private zone: NgZone, private access: LoginService, private _router: Router, public _localStorageService: LocalStorageService) {
        this.title.setTitle('Test Papers');
    }

    ngOnInit() {
        localStorage.clear();
    }
    submit(form: NgForm) {
        console.log(form.valid, form.value)
        if (form.valid) {
            this.emailTestObj = form.value;
            this.emailTestObj['appliedEmail'] = this.emailTestObj['email']
            this.emailTestObj['profile_pic'] = `${config.avatarUrl}/${this.emailTestObj['email']}?size=60`;
            this.loading = true;
            this.showmessage = false;
            localStorage.setItem('loginByfb', 'false');
            this.access.candidate_login(this.emailTestObj).subscribe(response => {
                this.commonService.storeFbdata(this.emailTestObj);
                if (response.status === 1) {
                    this._router.navigate([`/otp/${response.fb_id}`]);
                } else {
                    this.loading = false;
                    localStorage.setItem('walkinUser', JSON.stringify(this.emailTestObj));
                    this._router.navigate(['/verifycandidate']);
                }
            },
            (err) => {
                console.log(err);
                this.zone.run(() => {
                    this.loading = false;
                    this.message = err.message;
                    this.showmessage = true;
                })
            });
        };
    }

}
