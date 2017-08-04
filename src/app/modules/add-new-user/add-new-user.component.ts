import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImapMailsService } from './../../service/imapemails.service';
import { MdSnackBar } from '@angular/material';
import { config } from './../../config/config';

@Component({
    selector: 'app-add-new-user',
    templateUrl: './add-new-user.component.html',
    styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
    addNewUserForm: FormGroup;
    loading: boolean;
    message: string;
    showmessage: boolean;
    userType: Array<string>;
    constructor(private formBuilder: FormBuilder, private _imapMailsService: ImapMailsService, public snackBar: MdSnackBar) {
        this.addNewUserForm = this.formBuilder.group({
            'email' : [null, Validators.compose([
                Validators.required,
                Validators.email,
                Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')
            ])],
            'user_type' : [null, Validators.required],
            'password' : [null, Validators.required],
            'confirm_password' : [null, Validators.required]
        }, { validator: this.checkIfMatchingPasswords('password', 'confirm_password') });
        this.userType = config['userType'];
    }

    ngOnInit() {
        this.loading = false;
    }

    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            const passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                return passwordConfirmationInput.setErrors({notEquivalent: true});
            } else {
                return passwordConfirmationInput.setErrors(null);
            }
        };
    }
    addUser() {
        if (this.addNewUserForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this._imapMailsService.addUser(this.addNewUserForm.value).subscribe((res) => {
                this.loading = false;
                this.showmessage = false;
                this.snackBar.open(res.message, '', {
                    duration: 2000,
                });
                this.addNewUserForm.reset();
            },
            (err) => {
                this.loading = false;
                this.showmessage = true;
                this.message = err.message;
            });
        }
    }
}
