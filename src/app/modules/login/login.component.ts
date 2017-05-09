import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
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
    constructor(private formBuilder: FormBuilder, private access: LoginService, private _router: Router) {}

    ngOnInit() {
        this.loading = false;
        this.access.verifyAccess().subscribe((data) => {
            if (data.status === true) {
                this._router.navigate(['/core/inbox']);
            }
        });
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
                this.access.storeToken(data.token).then((status) => {
                    this._router.navigate(['/core/inbox']);
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
