import { Component, OnInit, Output,	EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-smtp-component-form',
    templateUrl: './smtp-component-form.component.html',
    styleUrls: ['./smtp-component-form.component.scss']
})
export class SmtpComponentFormComponent implements OnInit {
    @Output() addedSMTP = new EventEmitter<any>();
    showmessage: boolean;
    message: string;
    constructor(private apiServices: ImapMailsService) { }

    ngOnInit() {
    }

    addSMTP(form: NgForm) {
        this.showmessage = false;
        if (form.valid) {
            this.apiServices.storeSmtp(form.value).subscribe((data) => {
                this.addedSMTP.emit();
                form.resetForm();
            },
            (err) => {
                this.showmessage = true;
                this.message = err.message;
            });
        }
    }
}
