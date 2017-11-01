import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { SetvaremailpreviewComponent } from './../setvaremailpreview/setvaremailpreview.component';
import { CommonService } from './../../service/common.service';

@Component({
    selector: 'app-note',
    templateUrl: './add-note.component.html',
    styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent  {
    note = '';
    formOpen = true;
    candidateid:any;
    data:any;
    constructor(public dialogRef: MdDialogRef<any>, public _apiService: ImapMailsService) {
    }
    save(form: NgForm) {
        if (form.valid) {
            form.value.note = this.note;
             form.value.mongo_id=this.candidateid
             this._apiService.addNote(form.value).subscribe((data)=>{
                 this.close();
               })
        }
    }
    close() {
        this.dialogRef.close();
    }
}
