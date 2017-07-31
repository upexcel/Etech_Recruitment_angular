import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImapMailsService } from './../../service/imapemails.service';
import { MdSnackBar } from '@angular/material';

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
    constructor(private formBuilder: FormBuilder, private _imapMailsService: ImapMailsService, public snackBar: MdSnackBar) {
        this.addNewUserForm = this.formBuilder.group({
            'email' : [null, Validators.compose([
                Validators.required,
                Validators.email,
                Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')
            ])],
            'name' : [null, Validators.required],
            'role' : [null, Validators.required]
        });
    }

    ngOnInit() {
        this.loading = false;
    }
    resetPassword() {
        if (this.addNewUserForm.valid) {
            this.loading = true;
            this.showmessage = false;
            this._imapMailsService.resetPassword(this.addNewUserForm.value).subscribe((res) => {
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
