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
        form.reset();
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

}
