import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDatepicker } from '@angular/material';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-imap-component-form',
    templateUrl: './imap-component-form.component.html',
    styleUrls: ['./imap-component-form.component.scss']
})
export class ImapComponentFormComponent implements OnInit {
    @Output() addedImap = new EventEmitter<any>();
    showmessage: boolean;
    message: string;

    emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
    dateFormControl = new FormControl('', [Validators.required]);
    constructor(private imapServices: ImapMailsService) { }

    ngOnInit() {

    }

    addImap(form: NgForm) {
        this.showmessage = false;
        if (form.valid) {

            form.value['email'] = this.emailFormControl.value;
            form.value['last_fetched_time'] = this.dateFormControl.value;
            this.imapServices.storeImap(form.value).subscribe((data) => {
                this.addedImap.emit();
                form.resetForm();
                this.emailFormControl.reset();
                this.dateFormControl.reset();
            },
                (err) => {
                    this.showmessage = true;
                    this.message = err.message;
                });
        }
    }
}
