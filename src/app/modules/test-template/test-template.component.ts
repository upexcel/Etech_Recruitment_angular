import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-test-template',
    templateUrl: './test-template.component.html',
    styleUrls: ['./test-template.component.scss']
})
export class TestTemplateComponent implements OnInit {
    first: boolean;
    userDetails: any;
    temp: any;
    subject: string;
    templateName: string;
    constructor(public dialogRef: MdDialogRef<any>) { }

    ngOnInit() {
        this.first = true;
        this.subject = this.temp.subject;
        this.templateName = this.temp.templateName;
    }

    save(form: NgForm) {
        if (form.valid) {
            this.userDetails = form.value;
            this.first = false;
            this.dialogRef.updateSize('80%', '80%');
        }
    }

    setVariable() {

    }

    close() {
        this.dialogRef.close();
    }

}
