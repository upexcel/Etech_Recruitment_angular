import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-var',
    templateUrl: './add-var.component.html',
    styleUrls: ['./add-var.component.scss']
})
export class AddVarComponent implements OnInit {
    ckeditorContent: any;
    types: number;
    type: any;
    constructor(public dialogRef: MdDialogRef<any>, private getVariable: ImapMailsService) {
    }

    ngOnInit() {
        this.types = 1;
    }

    save(form: NgForm) {
        form.reset();
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
}
