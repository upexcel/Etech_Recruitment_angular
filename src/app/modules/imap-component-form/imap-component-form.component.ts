import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-imap-component-form',
    templateUrl: './imap-component-form.component.html',
    styleUrls: ['./imap-component-form.component.scss']
})
export class ImapComponentFormComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    addimap(form: NgForm) {
        if (form.valid) {
        }
    }
}
