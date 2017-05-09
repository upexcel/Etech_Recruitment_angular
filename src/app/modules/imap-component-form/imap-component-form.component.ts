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
    constructor(private imapservices: ImapMailsService) { }

    ngOnInit() {
    }

    addimap(form: NgForm) {
        if (form.valid) {
            this.imapservices.storeImap(form.value).subscribe((data) => {
                this.addedImap.emit();
                form.resetForm();
            },
            (err) => {
                console.log(err);
            });
        }
    }
}
