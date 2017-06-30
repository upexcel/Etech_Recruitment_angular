import { Component, OnInit, Output,	EventEmitter } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-smtp-component-form',
    templateUrl: './smtp-component-form.component.html',
    styleUrls: ['./smtp-component-form.component.scss']
})
export class SmtpComponentFormComponent implements OnInit {
    @Output() addedSMTP = new EventEmitter<any>();
    showmessage: boolean;
    message: string;
    emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
    constructor(private apiServices: ImapMailsService) { }

    ngOnInit() {
    }

    addSMTP(form: NgForm) {
        this.showmessage = false;
        if (form.valid) {
            form.value['email'] = this.emailFormControl.value;
            this.apiServices.storeSmtp(form.value).subscribe((data) => {
                this.addedSMTP.emit();
                form.resetForm();
                this.emailFormControl.reset();
            },
            (err) => {
                this.showmessage = true;
                this.message = err.message;
            });
        }
    }
}
