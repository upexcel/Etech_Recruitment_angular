import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { AddEmailTempComponent } from '../add-email-temp/add-email-temp.component';
import { ImapMailsService } from '../../service/imapemails.service';
import { TemplateEditComponent } from '../template-edit/template-edit.component';
import { TestTemplateComponent } from '../test-template/test-template.component';
import { LocalStorageService } from 'app/service/local-storage.service';
import * as _ from 'lodash';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-email-templates',
    templateUrl: './email-templates.component.html',
    styleUrls: ['./email-templates.component.scss']
})
export class EmailTemplatesComponent implements OnInit {
    dialogRef: MatDialogRef < any > ;
    userVar: string[];
    sysVar: string[];
    tempData: string[];
    tags:any;
    jobProfile:Array<any>= [];
    currentJobProfile:any;
    constructor(public dialog: MatDialog, private getVariable: ImapMailsService, public snackBar: MatSnackBar, public localStorageService: LocalStorageService) { }

    ngOnInit() {
        this.getVariable.getUserVariable().subscribe((data) => {
            this.userVar = data;
        });
        this.getVariable.getSystemVariable().subscribe(data => {
            this.sysVar = data;
        });
        this.loadTemp();
        this.tags = this.localStorageService.getItem('tags');
        this.jobProfile.push({ title:'For All Job Profile', tag_id: 0 });
        this.currentJobProfile = this.jobProfile[0].tag_id;
        _.forEach(this.tags['Automatic'], (value, key) => {
          if(value.id != null && value.id !=0){
          this.jobProfile.push({ title: value.title, tag_id: value.id });
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

    change(value) {
        this.currentJobProfile = value;
    }
}
