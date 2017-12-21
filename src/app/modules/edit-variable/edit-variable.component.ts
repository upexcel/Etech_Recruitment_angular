import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-edit-variable',
    templateUrl: './edit-variable.component.html',
    styleUrls: ['./edit-variable.component.scss']
})
export class EditVariableComponent implements OnInit {
    userVar: any;
    body: any;
    varCode: string;
    varValue: string;

    types: number;
    type: any;
    constructor(public dialogRef: MdDialogRef<any>, private getVariable: ImapMailsService) {
    }

    ngOnInit() {
        this.types = 1;
        this.varCode = this.userVar.variableCode;
        this.varValue = this.userVar.variableValue;
    }

    update(form: NgForm) {
        this.body = {
            'variableCode': this.varCode,
            'variableValue': this.varValue
        };
        this.getVariable.updateVariable(this.body, this.userVar.id).subscribe((data) => {
            form.reset();
            this.dialogRef.close();
        }, (err) => {
            console.log(err);
        });
    }

    close() {
        this.dialogRef.close();
    }

}
