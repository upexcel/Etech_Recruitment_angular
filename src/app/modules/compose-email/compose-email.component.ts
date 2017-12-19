import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { SetvaremailpreviewComponent } from './../setvaremailpreview/setvaremailpreview.component';

@Component({
    selector: 'app-compose-email-temp',
    templateUrl: './compose-email.component.html',
    styleUrls: ['./compose-email.component.scss'],
})
export class ComposeEmailComponent implements OnInit {
    userVar: any;
    SetvaremaildialogRef: MdDialogRef<any>;
    sysVar: any;
    ckeditorContent: any;
    message: string;
    showMessage: boolean;
    emailList: any;
    emails: any;
    sendSuccessEmailList: any;
    sendFailedEmailList: any;
    formOpen = true;
    subject_for_genuine: any;
    emailParentId: any;
    emailChildId: any;
    emailParenttitle: string;
    emailChildTitle: string;
    templates: any;
    selectedTemplate: any;
    body: string;
    pendingVariables = [];
    filteredTemp = {};
    subject = '';
    selectedTempplateId: any;
    notGenuine: any;
    resendEmailTrackingData: boolean;
    constructor(public setvardialog: MdDialog, public dialogRef: MdDialogRef<any>, private sendToManyEmail: ImapMailsService, public snackBar: MdSnackBar) {
    }

    ngOnInit() {
        this.showMessage = false;
        this.emails = this.emailList ? this.emailList.toString() : false;
        this.sendToManyEmail.getTemplate().subscribe((res) => {
            this.templates = res;
        }, (err) => {
            console.log(err);
        });
    }

    selectTemplate(seletectTemplated) {
        this.body = '';
        this.selectedTempplateId = seletectTemplated['id'];
        if (seletectTemplated['subject']) {
            this.subject = seletectTemplated['subject'] + ' ' + this.subject;
        }
        this.sendToManyEmail.testTemplate(seletectTemplated.id).subscribe((data) => {
            this.body = data;
        }, (err) => {
            console.log(err);
        });
    }

    save(form: NgForm) {
        if (form.valid) {
            form.value.subject = this.subject;
            form.value.body = this.body;
            form.value.template_id = this.selectedTempplateId;
            if (this.emails) {
                form.value.emails = this.emailList;
                this.getUnsavedVariable(form);
            } else if (this.emailParentId && this.emailChildId) {
                if (this.emailParentId === this.emailChildId) {
                    form.value.tag_id = this.emailParentId;
                } else {
                    form.value.tag_id = this.emailParentId;
                    form.value.default_id = this.emailChildId;
                }
                this.getUnsavedVariable(form);
            }
        }
    }

    getUnsavedVariable(form) {
        const stringtocheck = this.body;
        const regx = /#[\w-]+\|[\w -\.,@$%&*!:%^\\\/]+\||#[\w-]+/ig;
        let result = stringtocheck.match(regx);
        this.pendingVariables = [];
        if (result !== null && result.length > 0 && !this.notGenuine) {
            result = _.uniq(result);
            result.map((str) => {
                const start_pos = str.indexOf('|') + 1;
                const end_pos = str.indexOf('|', start_pos);
                const defaultValue = str.substring(start_pos, end_pos);
                this.pendingVariables.push({name: str, value: defaultValue});
            });
            this.setVariable(form);
        } else {
            this.setVariable(form);
        }
    }

    setVariable(form) {
        this.SetvaremaildialogRef = this.setvardialog.open(SetvaremailpreviewComponent, {
            height: '60%',
            width: '40%'
        });
        this.filteredTemp['subject'] = form.value.subject;
        this.filteredTemp['campaign_name'] = form.value.campaign_name;
        this.filteredTemp['body'] = this.body;
        this.filteredTemp['template_id'] = form.value.template_id;
        if (this.resendEmailTrackingData) {
            this.filteredTemp['old_campaign_name'] = this.resendEmailTrackingData['old_campaign_name']
        }
        if (form.value['default_id'] || form.value['tag_id']) {
            this.filteredTemp['default_id'] = form.value['default_id'];
            this.filteredTemp['tag_id'] = form.value['tag_id']
        }
        this.SetvaremaildialogRef.componentInstance.pendingVariables = this.pendingVariables;
        this.SetvaremaildialogRef.componentInstance.temp = this.filteredTemp;
        this.SetvaremaildialogRef.componentInstance.notGenuine = this.notGenuine;
        this.SetvaremaildialogRef.componentInstance.userDetails = {'CandidateEmail': this.emailList};
        this.SetvaremaildialogRef.afterClosed().subscribe(result => {
            this.SetvaremaildialogRef.close();
            this.SetvaremaildialogRef = null;
            if (result !== 'close') {
                this.dialogRef.close('done');
                this.dialogRef = null;
            }
        });
    }

    close() {
        this.dialogRef.close();
    }
}
