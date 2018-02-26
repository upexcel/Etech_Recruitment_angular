import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { AddEmailTempComponent } from '../add-email-temp/add-email-temp.component';
import { ImapMailsService } from '../../service/imapemails.service';
import { TemplateEditComponent } from '../template-edit/template-edit.component';
import { TestTemplateComponent } from '../test-template/test-template.component';
import { MdSnackBar } from '@angular/material';
import { LocalStorageService } from 'app/service/local-storage.service';
import * as _ from 'lodash';

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
    tags:any;
    jobProfile:Array<any>= [];
    constructor(public dialog: MdDialog, private getVariable: ImapMailsService, public snackBar: MdSnackBar, public localStorageService: LocalStorageService) { }

    ngOnInit() {
        this.getVariable.getUserVariable().subscribe((data) => {
            this.userVar = data;
        });
        this.getVariable.getSystemVariable().subscribe(data => {
            this.sysVar = data;
        });
        this.loadTemp();
        console.log(this.tags);
        this.tags = this.localStorageService.getItem('tags');
        _.forEach(this.tags['Automatic'], (value, key) => {
          if(value.id != null && value.id !=0){
          this.jobProfile.push({ title: value.title });
         }
        });
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
            if (result === 'added') {
                this.snackBar.open('Template Added Successfully', '', {
                    duration: 2000,
                });
                this.loadTemp();
            }
            this.dialogRef = null;
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
            if (result === 'updated') {
                this.snackBar.open('Template Updated Successfully', '', {
                    duration: 2000,
                });
            }
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
            this.snackBar.open('Template Deleted Successfully', '', {
                duration: 2000,
            });
        }, (err) => {
            console.log(err);
            this.snackBar.open(err.message, '', {
                duration: 2000,
            });
        });
    }

    tempDataTrack(index, data) {
        return data['id'] || index;
    }
}
