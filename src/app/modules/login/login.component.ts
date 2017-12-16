import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../service/local-storage.service';
import { MdSnackBar } from '@angular/material';
import { SqlLiteService } from '../../service/sqlite.service';
import * as _ from 'lodash';

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
    constructor(private formBuilder: FormBuilder, private access: LoginService, private _router: Router, public _localStorageService: LocalStorageService, public _snackbar: MdSnackBar, private SqlLiteService: SqlLiteService) {
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
    login() {
        if (this.addForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this.email = this.addForm.controls['email'].value;
            this.password = this.addForm.controls['password'].value;
            this.keeplogin = this.addForm.controls['keeplogin'].value;
            this.access.login(this.email, this.password, this.keeplogin).subscribe((data) => {
                this._localStorageService.setItem('role', data.role);
                this._localStorageService.setItem('userEmail', this.email);
                this.access.storeToken(data.token).then((status) => {
                    this.SqlLiteService.createSqlLiteDB()
                    this.SqlLiteService.createSqlLiteTable()
                    this.SqlLiteService.getData().subscribe((res) => {
                        // console.log('api', res);
                        _.forEach(res, (value, key) => {
                            // console.log(value, key)
                            if (value.emailFetch ) {
                                this.SqlLiteService.insertSqlLiteTable('emailFetch', value.emailFetch);
                            }
                        });
                    })
                    this.SqlLiteService.getData().subscribe((res) => {
                        _.forEach(res, (value, key) => {
                            if (value.Tag) {
                                this.SqlLiteService.insertSqlLiteTable('Tag', value.Tag)
                            }
                        })
                    })
                    // this.sqliteservice.dropTable()
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
