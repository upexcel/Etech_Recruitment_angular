import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImapMailsService } from './../../service/imapemails.service';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    resetPasswordForm: FormGroup;
    loading: boolean;
    message: string;
    showmessage: boolean;
    constructor(private formBuilder: FormBuilder, private _imapMailsService: ImapMailsService, public snackBar: MdSnackBar) {
        this.resetPasswordForm = this.formBuilder.group({
            'old_password' : [null, Validators.required],
            'new_password' : [null, Validators.required]
        });
    }

    ngOnInit() {
        this.loading = false;
    }
    resetPassword() {
        if (this.resetPasswordForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this._imapMailsService.resetPassword(this.resetPasswordForm.value).subscribe((res) => {
                this.loading = false;
                this.showmessage = false;
                this.snackBar.open(res.message, '', {
                    duration: 2000,
                });
                this.resetPasswordForm.reset();
            },
            (err) => {
                this.loading = false;
                this.showmessage = true;
                this.message = err.message;
            });
        }
    }
}
