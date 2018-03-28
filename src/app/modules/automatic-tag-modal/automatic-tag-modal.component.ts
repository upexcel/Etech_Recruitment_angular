import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatChipInputEvent } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { color_list } from '../../config/config';
import * as moment from 'moment';
import { ENTER, COMMA } from '@angular/cdk/keycodes';

@Component({
    selector: 'app-automatic-tag-modal',
    templateUrl: './automatic-tag-modal.component.html',
    styleUrls: ['./automatic-tag-modal.component.scss']
})
export class AutomaticTagModalComponent implements OnInit {
    tag: any;
    tempList: any;
    originalcolor = '';
    originaltitle = '';
    temp_id: any;
    availableColors = color_list;
    tags = [];
    separatorKeysCodes = [ENTER, COMMA];
    visible = true;
    selectable = true;
    removable = true;
    addOnBlur = true;
    tagStatus: any;
    constructor(public dialogRef: MatDialogRef<any>, private tagupdate: ImapMailsService) { }

    ngOnInit() {
        this.tagStatus = this.tag.active_status;
        if (this.tag.active_status) {
            if (this.tag.keyword === null || this.tag.keyword === ['']) {
                this.tags = [];
            } else {
                this.tags = this.tag.keyword.split(',');
            }
            this.originaltitle = this.tag.title;
            this.originalcolor = this.tag.color;
            this.temp_id = this.tag.template_id;
            if (this.tag['from']) {
                this.tag['from'] = moment(this.tag['from']).format('YYYY-MM-DD');
            }
            if (this.tag['to']) {
                this.tag['to'] = moment(this.tag['to']).format('YYYY-MM-DD');
            }
        }
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

    save() {
        if (this.tags.length === 0) {
            this.tag.keyword = null;
        } else {
            this.tag.keyword = this.tags.toString();
        }
        this.tag.title = this.originaltitle;
        this.tag.color = this.originalcolor;
        this.tag.template_id = this.temp_id;
        this.tagupdate.updateTag(this.tag, this.tag.type).subscribe((data) => {
            this.dialogRef.close('updated');
        }, (err) => {
            console.log(err);
        });
    }

    close() {
        this.dialogRef.close();
    }
    enableJobtag(tagStatus) {
        if (tagStatus) {
            const body = { id: this.tag.id, status: tagStatus };
            this.tagupdate.closeJobProfile(body).subscribe(data => {
                this.dialogRef.close('enabled')
            }, err => {
                console.log(err);
            });
        }
    }
}
