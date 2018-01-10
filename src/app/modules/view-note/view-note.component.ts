import { Component, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { SetvaremailpreviewComponent } from './../setvaremailpreview/setvaremailpreview.component';
import { CommonService } from './../../service/common.service';

@Component({
    selector: 'app-view-note',
    templateUrl: './view-note.component.html',
    styleUrls: ['./view-note.component.scss'],
})
export class ViewNoteComponent {
    candidateNote: any;
    constructor(public dialogRef: MdDialogRef<any>, public _apiService: ImapMailsService) {
        console.log(this.candidateNote)
    }
    close() {
    }
}
