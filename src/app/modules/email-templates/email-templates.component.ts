import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { AddEmailTempComponent } from '../add-email-temp/add-email-temp.component';
import { ImapMailsService } from '../../service/imapemails.service';
import { TemplateEditComponent } from '../template-edit/template-edit.component';
import { TestTemplateComponent } from '../test-template/test-template.component';
import { MdSnackBar } from '@angular/material';

@Component({
    selector: 'app-email-templates',
    templateUrl: './email-templates.component.html',
    styleUrls: ['./email-templates.component.scss']
})
export class EmailTemplatesComponent implements OnInit {
    dialogRef: MdDialogRef < any > ;
    userVar: string[];
    sysVar: string[];
    tempData: string[];
    constructor(public dialog: MdDialog, private getVariable: ImapMailsService, public snackBar: MdSnackBar) { }

    ngOnInit() {
        this.getVariable.getUserVariable().subscribe((data) => {
            this.userVar = data;
        });
        this.getVariable.getSystemVariable().subscribe(data => {
            this.sysVar = data;
        });
        this.loadTemp();
    }

    loadTemp() {
        this.getVariable.getTemplate().subscribe(data => {
            this.tempData = data;
        });
    }

    addTemp() {
        this.dialogRef = this.dialog.open(AddEmailTempComponent, {
            height: '90%',
            width: '80%'
        });
        this.dialogRef.componentInstance.userVar = this.userVar;
        this.dialogRef.componentInstance.sysVar = this.sysVar;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            this.loadTemp();
        });
    }

    editTemp(temp: any) {
        this.dialogRef = this.dialog.open(TemplateEditComponent, {
            height: '90%',
            width: '80%'
        });
        this.dialogRef.componentInstance.userVar = this.userVar;
        this.dialogRef.componentInstance.sysVar = this.sysVar;
        this.dialogRef.componentInstance.temp = temp;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            this.loadTemp();
        });
    }

    testTemplate(temp: any) {
        this.dialogRef = this.dialog.open(TestTemplateComponent, {
            height: '40%',
            width: '60%'
        });
        this.dialogRef.componentInstance.temp = temp;
        this.dialogRef.afterClosed().subscribe(result => {
            if (result === 'done') {
                this.snackBar.open('Email Send Successfully', '', {
                    duration: 2000,
                });
            }
            this.dialogRef = null;
            this.loadTemp();
        });
    }

    deleteTempId(id: string) {
        this.getVariable.deleteTemplate(id).subscribe((data) => {
            this.loadTemp();
        }, (err) => {
            console.log(err);
        });
    }
}
