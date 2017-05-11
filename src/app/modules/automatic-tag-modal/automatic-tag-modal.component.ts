import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-automatic-tag-modal',
    templateUrl: './automatic-tag-modal.component.html',
    styleUrls: ['./automatic-tag-modal.component.scss']
})
export class AutomaticTagModalComponent implements OnInit {
    tag: any;
    originalcolor = 'blue';
    originaltitle = '#cb891b';
    availableColors = [ '#cb891b' , '#ef2e46' , '#ff5722' , '#ba21d3' , '#f3b08c' , '#f0793d' , '#eb7303' , '#db62e9' , '#ffeb3b' , '#3882b8'];
    constructor(public dialogRef: MdDialogRef<any>, private tagupdate: ImapMailsService) { }

    ngOnInit() {
        this.originaltitle = this.tag.title;
        this.originalcolor = this.tag.color;
    }

    save() {
        this.tag.title = this.originaltitle;
        this.tag.color = this.originalcolor;
        this.tagupdate.updateTag(this.tag, 'Automatic').subscribe((data) => {
            console.log(data);
        });
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
}
