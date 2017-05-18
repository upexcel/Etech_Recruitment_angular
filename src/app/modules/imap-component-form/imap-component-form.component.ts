import { Component, OnInit, Output,	EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-imap-component-form',
    templateUrl: './imap-component-form.component.html',
    styleUrls: ['./imap-component-form.component.scss']
})
export class ImapComponentFormComponent implements OnInit {
    @Output() addedImap = new EventEmitter<any>();
    showmessage: boolean;
    message: string;
    constructor(private imapServices: ImapMailsService) { }

    ngOnInit() {
    }

    addImap(form: NgForm) {
        this.showmessage = false;
        if (form.valid) {
            this.imapServices.storeImap(form.value).subscribe((data) => {
                this.addedImap.emit();
                form.resetForm();
            },
            (err) => {
                this.showmessage = true;
                this.message = err.message;
            });
        }
    }
}
