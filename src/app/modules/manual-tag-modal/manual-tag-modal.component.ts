import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-manual-tag-modal',
    templateUrl: './manual-tag-modal.component.html',
    styleUrls: ['./manual-tag-modal.component.scss']
})
export class ManualTagModalComponent implements OnInit {
    tag: any;
    originalcolor = 'blue';
    originaltitle = 'title';
    availableColors = [ '#cb891b' , '#ef2e46' , '#ff5722' , '#ba21d3' , '#f3b08c' , '#f0793d' , '#eb7303' , '#db62e9' , '#ffeb3b' , '#3882b8'];
    constructor(public dialogRef: MdDialogRef<any>, private tagupdate: ImapMailsService) { }

    ngOnInit() {
        this.originaltitle = this.tag.title;
        this.originalcolor = this.tag.color;
    }

    save() {
        this.tag.title = this.originaltitle;
        this.tag.color = this.originalcolor;
        this.tagupdate.updateTag(this.tag, 'Manual').subscribe((data) => {
            console.log(data);
        });
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }
}
