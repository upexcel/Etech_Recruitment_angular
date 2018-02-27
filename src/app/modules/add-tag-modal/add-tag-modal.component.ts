import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar, MatChipInputEvent } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import { color_list } from '../../config/config';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

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
    addTagType: string;
    originalcolor = color_list[0];
    availableColors = color_list;
    tags = [];
    separatorKeysCodes = [ENTER, COMMA];
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    constructor(public dialogRef: MatDialogRef<any>, private tagUpdate: ImapMailsService, public _snackBar: MatSnackBar) { }

    ngOnInit() {
        if (this.addTagType === 'manual') {
            this.types = 0;
            this.type = 'Manual';
        } else if (this.addTagType === 'automatic' || this.addTagType === 'jobProfile') {
            this.type = 'Automatic';
            this.types = 1;
        }
        this.showMessage = false;
        this.showloading = false;
    }

    add(event: MatChipInputEvent): void {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.tags.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
    }

    remove(tag: any): void {
        const index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }

    addTag(form: NgForm) {
        // console.log(form.value.keyword.toString());
        this.showMessage = false;
        this.showloading = true;
        if (form.valid) {
            if (this.addTagType === 'jobProfile') {
                form.value.is_job_profile_tag = 1;
                form.value.keyword = this.tags.toString();
            }
            if (form.value.assign === '') {
                form.value.assign = false;
            }
            if (form.value.is_email_send === '') {
                form.value.is_email_send = false;
            }
            form.value.color = this.originalcolor;
            this.tagUpdate.addTag(form.value).subscribe((data) => {
                form.reset();
                this.showloading = true;
                this._snackBar.open('Job Profile Added', '', {
                    duration: 2000
                })
            }, (err) => {
                this.showMessage = true;
                this.showloading = false;
                this.message = err.message;
            });
            this.dialogRef.close('Added');
        }
    }

    tempListTrack(index, data) {
        return data.id || index;
    }

    availableColorsTrackBY(index, data) {
        return data.id || index;
    }

    close() {
        this.dialogRef.close();
    }
}
