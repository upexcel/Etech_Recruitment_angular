import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-var',
    templateUrl: './add-var.component.html',
    styleUrls: ['./add-var.component.scss']
})
export class AddVarComponent implements OnInit {
    ckeditorContent: any;
    types: number;
    type: any;
    body: any;
    constructor(public dialogRef: MdDialogRef<any>, private getVariable: ImapMailsService) {
    }

    ngOnInit() {
        this.types = 1;
    }

    save(form: NgForm) {
        if (form.valid) {
            console.log(form);
            this.body = {
                'variableCode': '#' + form.value['variableCode'],
                'variableValue': form.value['variableValue']
            };
            console.log(this.body);
            this.getVariable.addUserVariable(this.body).subscribe((data) => {
                console.log(data);
                form.reset();
                this.dialogRef.close();
            }, (err) => {
                console.log(err);
            });

        }
    }

    close() {
        this.dialogRef.close();
    }


}
