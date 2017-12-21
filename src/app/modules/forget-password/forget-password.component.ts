import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../../service/login.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-forget-password',
    templateUrl: './forget-password.component.html',
    styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
    forgotForm: FormGroup;
    loading: boolean;
    message: string;
    showmessage: boolean;
    constructor(private formBuilder: FormBuilder, private _loginService: LoginService, public snackBar: MdSnackBar) {
        this.forgotForm = this.formBuilder.group({
            'email' : [null, Validators.compose([
                Validators.required,
                Validators.email,
                Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')
            ])],
        });
    }

    ngOnInit() {
        this.loading = false;
    }
    forgotPassword() {
        if (this.forgotForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this._loginService.forgotPassword(this.forgotForm.value).subscribe((res) => {
                this.loading = false;
                this.showmessage = false;
                this.snackBar.open(res.message, '', {
                    duration: 2000,
                });
            },
            (err) => {
                this.loading = false;
                this.showmessage = true;
                this.message = err.message;
            });
        }
    }
}
