import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { AddVarComponent } from '../add-var/add-var.component';
import { EditVariableComponent } from '../edit-variable/edit-variable.component';
import { DialogService } from '../../service/dialog.service';

@Component({
    selector: 'app-email-variables',
    templateUrl: './email-variables.component.html',
    styleUrls: ['./email-variables.component.scss']
})
export class EmailVariablesComponent implements OnInit {
    dialogRef: MatDialogRef < any > ;
    userVar: string[];
    sysVar: string[];
    constructor(public dialog: MatDialog, private getVariable: ImapMailsService, public _dialogService: DialogService) { }

    ngOnInit() {
        this.loadVariables();
    }

    loadVariables() {
        this.getVariable.getUserVariable().subscribe((data) => {
            this.userVar = data;
        });
        this.getVariable.getSystemVariable().subscribe(data => {
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
        this._dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this.getVariable.deleteVariable(id).subscribe((data) => {
                    this.loadVariables();
                });
            }
        }, (err) => {
            console.log(err);
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
