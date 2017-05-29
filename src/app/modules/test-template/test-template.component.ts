import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { SetvaremailpreviewComponent } from '../setvaremailpreview/setvaremailpreview.component';

@Component({
    selector: 'app-test-template',
    templateUrl: './test-template.component.html',
    styleUrls: ['./test-template.component.scss']
})
export class TestTemplateComponent implements OnInit {
    dialogConfig: MdDialogRef <any> ;
    first: boolean;
    userDetails: any;
    temp: any;
    subject: string;
    templateName: string;
    pendingVariables: any;
    constructor(public setvardialog: MdDialog, public dialogRef: MdDialogRef<any>) { }

    ngOnInit() {
        this.first = true;
        this.subject = this.temp.subject;
        this.templateName = this.temp.templateName;
    }

    save(form: NgForm) {
        if (form.valid) {
            this.userDetails = form.value;
            this.first = false;
            this.dialogRef.updateSize('80%', '80%');
            this.getUnsavedVariable();
        }
    }

    setVariable() {
        this.dialogConfig = this.setvardialog.open(SetvaremailpreviewComponent, {
            height: '60%',
            width: '40%'
        });
        this.dialogConfig.componentInstance.pendingVariables = this.pendingVariables;
        this.dialogConfig.componentInstance.temp = this.temp;
        this.dialogConfig.afterClosed().subscribe(result => {
            this.dialogConfig = null;
            this.close();
        });
    }

    getUnsavedVariable() {
        const stringtocheck = this.temp.body;
        const regx = /#[\w-]+\|[\w -\.,@$%&*!:%^\\\/]+\||#[\w-]+/ig;
        let result = stringtocheck.match(regx);
        this.pendingVariables = [];
        if (result !== null && result.length > 0) {
            result = _.uniq(result);
            result.map((str) => {
                const start_pos = str.indexOf('|') + 1;
                const end_pos = str.indexOf('|', start_pos);
                const defaultValue = str.substring(start_pos, end_pos);
                this.pendingVariables.push({name: str, value: defaultValue});
            });
        }
    }

    close() {
        this.dialogRef.close();
    }

}
