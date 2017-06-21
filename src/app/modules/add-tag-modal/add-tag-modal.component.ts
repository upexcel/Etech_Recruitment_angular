import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import { color_list } from '../../config/config';

@Component({
    selector: 'app-add-tag-modal',
    templateUrl: './add-tag-modal.component.html',
    styleUrls: ['./add-tag-modal.component.scss']
})
export class AddTagModalComponent implements OnInit {
    tag: any;
    types: number;
    type: any;
    tempList: any;
    showMessage: boolean;
    showloading: boolean;
    message: string;
    originalcolor = color_list[0];
    availableColors = color_list;
    constructor(public dialogRef: MdDialogRef < any > , private tagUpdate: ImapMailsService) {}

    ngOnInit() {
        this.types = 1;
        this.showMessage = false;
        this.showloading = false;
    }

    addTag(form: NgForm) {
        this.showMessage = false;
        this.showloading = true;
        if (form.valid) {
            form.value.color = this.originalcolor;
            this.tagUpdate.addTag(form.value).subscribe((data) => {
                form.reset();
                this.showloading = true;
                this.dialogRef.close('Added');
            }, (err) => {
                console.log(err);
                this.showMessage = true;
                this.showloading = false;
                this.message = err.message;
            });
        }
    }

    close() {
        this.dialogRef.close();
    }
}
