import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
// import { ImapMailsService } from '../../service/imapemails.service';
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
        this.first = false;
        this.subject = this.temp.subject;
        this.templateName = this.temp.templateName;
        // *** just for checking ***
        this.userDetails = {
            'CandidateEmail': 'amit@gmail.com',
            'CandidateName': 'amit'
        };
        this.dialogRef.updateSize('80%', '80%');
        // *** checking end ***
    }

    save(form: NgForm) {
        if (form.valid) {
            console.log(form.value);
        	// this.userDetails = form.value;
            // this.getVariable.addTemplate(form.value).subscribe((data) => {
            form.reset();
            // this.dialogRef.close();
            this.dialogRef.updateSize('80%', '80%');
            // }, (err) => {
            //     console.log(err);
            // });
        }
    }

    close() {
        this.dialogRef.close();
    }

}
