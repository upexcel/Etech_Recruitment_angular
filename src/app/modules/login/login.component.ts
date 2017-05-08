import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    addForm: FormGroup;
    email: string;
    password: string;
    keeplogin: boolean;
    loading: boolean;
    message: string;
    showmessage: boolean;
    login_time: any;
    current_time: any;
    diff: any;
    constructor(private formBuilder: FormBuilder, private access: ImapMailsService, private _router: Router) {}

    ngOnInit() {
        this.loading = false;
        if (localStorage.getItem('token') !== '') {
            this.login_time = new Date(localStorage.getItem('login_time'));
            this.current_time = new Date();
            this.diff = (this.current_time.getTime() - this.login_time.getTime()) / 1000;
            if (this.diff < 3600) {
                this._router.navigate(['/core/inbox']);
            }
        }
        this.addForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            keeplogin: false
        });
    }
    login() {
        if (this.addForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this.email = this.addForm.controls['email'].value;
            this.password = this.addForm.controls['password'].value;
            this.keeplogin = this.addForm.controls['keeplogin'].value;
            this.access.login(this.email, this.password).subscribe((data) => {
                localStorage.setItem('token', data.token);
                this.login_time = new Date();
                localStorage.setItem('login_time', this.login_time);
                this._router.navigate(['/core/inbox']);
            },
            (err) => {
                this.loading = false;
                this.showmessage = true;
                this.message = err.message;
            });
        }
    }
}
