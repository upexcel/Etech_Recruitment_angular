import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { color_list } from '../../config/config';

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
    constructor(public dialogRef: MdDialogRef<any>, private tagupdate: ImapMailsService) { }

    ngOnInit() {
        this.originaltitle = this.tag.title;
        this.originalcolor = this.tag.color;
        this.temp_id = this.tag.template_id;
    }

    save() {
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
}
