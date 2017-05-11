import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-add-tag-modal',
    templateUrl: './add-tag-modal.component.html',
    styleUrls: ['./add-tag-modal.component.scss']
})
export class AddTagModalComponent implements OnInit {
    tag: any;
    types: number;
    originalcolor = '#cb891b';
    originaltitle = '#cb891b';
    availableColors = ['#cb891b', '#ef2e46', '#ff5722', '#ba21d3', '#f3b08c', '#f0793d', '#eb7303', '#db62e9', '#ffeb3b', '#3882b8'];
    constructor(public dialogRef: MdDialogRef < any > , private tagUpdate: ImapMailsService) {}

    ngOnInit() {
        this.types = 1;
    }

    registerUser(form: NgForm) {
        if (form.valid) {
            form.value.color = this.originalcolor;
            this.tagUpdate.addTag(form.value).subscribe((data) => {
                form.reset();
                this.dialogRef.close();
            }, (err) => {
                console.log(err);
            });
        }
    }

    close() {
        this.dialogRef.close();
    }
}
