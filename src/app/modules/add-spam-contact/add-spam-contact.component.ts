import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ImapMailsService} from './../../service/imapemails.service';
import {MdSnackBar, MdDialogRef} from '@angular/material';
import {config} from './../../config/config';

@Component({
    selector: 'add-spam-contact',
    templateUrl: './add-spam-contact.component.html',
    styleUrls: ['./add-spam-contact.component.scss']
})
export class AddNewSpamContactComponent implements OnInit {
    addNewSpamContactForm: FormGroup;
    loading: boolean;
    message: string;
    showmessage: boolean;
    activity: any;
    formData: any;
    constructor(private dialogRef: MdDialogRef<any>, private formBuilder: FormBuilder, private _imapMailsService: ImapMailsService, public snackBar: MdSnackBar) {
    }

    ngOnInit() {
        this.addNewSpamContactForm = this.formBuilder.group({
            'name': [this.formData ? this.formData.name : null, Validators.required],
            'email': [this.formData ? this.formData.email : null, Validators.compose([
                Validators.required,
                Validators.email,
                Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')
            ])]
        });
        this.loading = false;
    }

    addUser() {
        if (this.addNewSpamContactForm.valid) {
            this.loading = true;
            this.showmessage = false;
            if (this.activity == "edit") {
                this.addNewSpamContactForm.value['id']=this.formData['id'];
                this._imapMailsService.updateSpam(this.addNewSpamContactForm.value).subscribe((res) => {
                    this.loading = false;
                    this.showmessage = false;
                    this.dialogRef.close(res);
                    this.addNewSpamContactForm.reset();
                },
                    (err) => {
                        this.loading = false;
                        this.showmessage = true;
                        this.message = err.message;
                    });
            } else {
                this._imapMailsService.addSpam(this.addNewSpamContactForm.value).subscribe((res) => {
                    this.loading = false;
                    this.showmessage = false;
                    this.dialogRef.close(res);
                    this.addNewSpamContactForm.reset();
                },
                    (err) => {
                        this.loading = false;
                        this.showmessage = true;
                        this.message = err.message;
                    });
            }
        }
    }


    close() {
        this.dialogRef.close('back');
    }
}
