import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ManualTagModalComponent } from '../manual-tag-modal/manual-tag-modal.component';
import { AutomaticTagModalComponent } from '../automatic-tag-modal/automatic-tag-modal.component';
import { AddTagModalComponent } from '../add-tag-modal/add-tag-modal.component';

@Component({
    selector: 'app-tag-setting',
    templateUrl: './tag-setting.component.html',
    styleUrls: ['./tag-setting.component.scss']
})
export class TagSettingComponent implements OnInit {
    dialogRef: MdDialogRef < any > ;
    loading = false;
    tags: any [];
    constructor(private gettags: ImapMailsService, public dialog: MdDialog, public viewContainerRef: ViewContainerRef) {}

    ngOnInit() {
        this.loading = true;
        this.getAllTag();
    }
    getAllTag() {
        this.gettags.getAllTags()
            .subscribe((data) => {
                this.formatTagsInArray(data);
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
    }

    removeTag(id: string, type: string) {
        this.gettags.deleteTag(id, type)
            .subscribe((data) => {
                this.getAllTag();
            }, (err) => {
                console.log(err);
            });
    }

    openManual(tag: any) {
        this.dialogRef = this.dialog.open(ManualTagModalComponent, {
            height: '430px',
            width: '370px'
        });
        this.dialogRef.componentInstance.tag = tag;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }

    openAutomatic(tag1: any) {
        this.dialogRef = this.dialog.open(AutomaticTagModalComponent, {
            height: '600px',
            width: '350px'
        });
        this.dialogRef.componentInstance.tag = tag1;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }

    addTag() {
        this.dialogRef = this.dialog.open(AddTagModalComponent, {
            height: '600px',
            width: '450px'
        });
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            this.getAllTag();
        });
    }

    formatTagsInArray(data: any) {
        this.tags = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === 'Default') {
                if (!this.tags['Default']) {
                    this.tags['Default'] = [];
                    this.tags['Default'].push(data[i]);
                } else {
                    this.tags['Default'].push(data[i]);
                }
            } else if (data[i].type === 'Manual') {
                if (!this.tags['Manual']) {
                    this.tags['Manual'] = [];
                    this.tags['Manual'].push(data[i]);
                } else {
                    this.tags['Manual'].push(data[i]);
                }
            } else if (data[i].type === 'Automatic') {
                if (!this.tags['Automatic']) {
                    this.tags['Automatic'] = [];
                    this.tags['Automatic'].push(data[i]);
                } else {
                    this.tags['Automatic'].push(data[i]);
                }
            }
        }
        this.loading = false;
    }
}
