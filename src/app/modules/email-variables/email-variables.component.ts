import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { AddVarComponent } from '../add-var/add-var.component';
import { EditVariableComponent } from '../edit-variable/edit-variable.component';

@Component({
    selector: 'app-email-variables',
    templateUrl: './email-variables.component.html',
    styleUrls: ['./email-variables.component.scss']
})
export class EmailVariablesComponent implements OnInit {
    dialogRef: MdDialogRef < any > ;
    userVar: string[];
    sysVar: string[];
    constructor(public dialog: MdDialog, private getVariable: ImapMailsService) { }

    ngOnInit() {
        this.loadVariables();
    }

    loadVariables() {
        this.getVariable.getUserVariable().subscribe((data) => {
            this.userVar = data;
        });
        this.getVariable.getSystemVariable().then(data => {
            this.sysVar = data;
        });
    }

    addVariable() {
        this.dialogRef = this.dialog.open(AddVarComponent, {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            this.loadVariables();
        });
    }

    delete(id: string) {
        this.getVariable.deleteVariable(id).subscribe((data) => {
            this.loadVariables();
        });
    }

    editVariable(usr_var: any) {
        this.dialogRef = this.dialog.open(EditVariableComponent, {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.userVar = usr_var;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            this.loadVariables();
        });

    }

}
