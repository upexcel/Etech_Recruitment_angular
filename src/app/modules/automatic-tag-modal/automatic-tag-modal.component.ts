import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { color_list } from '../../config/config';
import * as moment from 'moment';

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
    isJobProfile: boolean;
    constructor(public dialogRef: MdDialogRef<any>, private tagupdate: ImapMailsService) { }

    ngOnInit() {
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

    save() {
        this.tag.title = this.originaltitle;
        this.tag.color = this.originalcolor;
        this.tag.template_id = this.temp_id;
        this.tagupdate.updateTag(this.tag, this.tag.type).subscribe((data) => {
        }, (err) => {
            console.log(err);
        });
        this.dialogRef.close('updated');
    }

    close() {
        this.dialogRef.close();
    }
}
