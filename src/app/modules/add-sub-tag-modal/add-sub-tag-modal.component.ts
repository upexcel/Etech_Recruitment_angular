import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { color_list } from '../../config/config';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-add-tag-modal',
    templateUrl: './add-sub-tag-modal.component.html',
    styleUrls: ['./add-sub-tag-modal.component.scss']
})
export class AddSubTagModalComponent implements OnInit {
    tag: any;
    type: any;
    showMessage: boolean;
    showloading: boolean;
    message: string;
    addTagType: string;
    originalcolor = color_list[0];
    availableColors = color_list;
    parentid:string;
    emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
    constructor(public dialogRef: MdDialogRef < any > , private tagUpdate: ImapMailsService,) {}

    ngOnInit() {
        this.type=this.addTagType
        this.showMessage = false;
        this.showloading = false;
    }

    addTag(form: NgForm) {
        this.showMessage = false;
        this.showloading = true;
        if (form.valid) {
             form.value['email'] = this.emailFormControl.value;
            form.value.color = this.originalcolor;
             form.value.parent_id = this.parentid;
            this.tagUpdate.addSubTag(form.value).subscribe((data) => {
               
                this.showloading = true;
                 this.dialogRef.close('Added');
                  form.reset();
            }, (err) => {
                this.showMessage = true;
                this.showloading = false;
                this.message = err.message;
            });
           
        }
    }

    availableColorsTrackBY(index, data) {
        return data.id || index;
    }

    close() {
        this.dialogRef.close();
    }
}
