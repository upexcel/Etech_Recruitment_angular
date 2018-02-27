import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
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
    message: string;
    showMessage: boolean;
    constructor(public dialogRef: MatDialogRef<any>, private getVariable: ImapMailsService) {
    }

    ngOnInit() {
        this.types = 1;
    }

    save(form: NgForm) {
        if (form.valid) {
            this.body = {
                'variableCode': '#' + form.value['variableCode'],
                'variableValue': form.value['variableValue']
            };
            this.getVariable.addUserVariable(this.body).subscribe((data) => {
                form.reset();
                this.dialogRef.close();
            }, (err) => {
                this.showMessage = true;
                this.message = err.message;
            });

        }
    }

    close() {
        this.dialogRef.close();
    }


}
