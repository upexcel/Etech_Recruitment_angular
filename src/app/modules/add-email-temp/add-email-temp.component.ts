import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from 'app/service/local-storage.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-add-email-temp',
    templateUrl: './add-email-temp.component.html',
    styleUrls: ['./add-email-temp.component.scss'],
})
export class AddEmailTempComponent implements OnInit {
    userVar: any;
    sysVar: any;
    ckeditorContent: any;
    message: string;
    showMessage: boolean;
    subject_for_genuine: string;
    tags:any;
    jobProfile:Array<any> = [];
    constructor(public dialogRef: MdDialogRef<any>, private getVariable: ImapMailsService, public localStorageService:LocalStorageService) {
    }

    ngOnInit() {
        this.showMessage = false;
        this.subject_for_genuine = localStorage.getItem('subject_for_genuine');
        this.tags = this.localStorageService.getItem('tags');
        this.jobProfile.push({title: 'Template will be valid across all Job Profile'});
        _.forEach(this.tags['Automatic'], (value, key) => {
          if(value.id != null && value.id !=0){
          this.jobProfile.push({ title: value.title });
        }
        })
    }

    save(form: NgForm) {
        if (form.valid) {
            console.log(form.value);
            this.getVariable.addTemplate(form.value).subscribe((data) => {
                form.reset();
            }, (err) => {
                this.showMessage = true;
                this.message = err.message;
            });
            this.dialogRef.close('added');
        }
    }

    sysVarTrack(index, data) {
        return data.id || index;
    }

    userVarTrack(index, data) {
        return data.id || index;
    }

    close() {
        this.dialogRef.close();
    }
}
