import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';
import { ManualTagModalComponent } from '../manual-tag-modal/manual-tag-modal.component';

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
        this.tags = [];
        this.gettags.getAllTags()
            .subscribe((data) => {
                console.log(data);
                this.formattagsinarray(data);
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
    }
    removetag(id: string) { }

    open(id: string) {
        this.dialogRef = this.dialog.open(ManualTagModalComponent, {
            height: '200px',
            width: '200px',
        });
        this.dialogRef.componentInstance.id = id;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }

    formattagsinarray(data: any) {
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
