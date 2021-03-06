import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ManualTagModalComponent } from '../manual-tag-modal/manual-tag-modal.component';
import { AutomaticTagModalComponent } from '../automatic-tag-modal/automatic-tag-modal.component';
import { AddTagModalComponent } from '../add-tag-modal/add-tag-modal.component';
import { MatSnackBar } from '@angular/material';
import { DialogService } from './../../service/dialog.service';
import { DragulaService } from 'ng2-dragula';
import * as _ from 'lodash';
import { LocalStorageService } from '../../service/local-storage.service';
@Component({
    selector: 'app-job-profile-tag',
    templateUrl: './job-profile-tag.component.html',
    styleUrls: ['./job-profile-tag.component.scss']
})
export class JobProfileTagComponent implements OnInit {
    dialogRef: MatDialogRef<any>;
    loading = false;
    tempList: any;
    tags: any[];
    constructor(private dragulaService: DragulaService, private getTags: ImapMailsService, public dialog: MatDialog, public viewContainerRef: ViewContainerRef, public snackBar: MatSnackBar, private _dialogService: DialogService, public _localStorageService: LocalStorageService) {
        dragulaService.drop.subscribe((value) => {
            this.onDrop(value.slice(1));
        });
    }

    onDrop(args) {
        const apiData = [];
        _.forEach(this.tags['Automatic'], (value, key) => {
            apiData.push({ 'id': value['id'], 'priority': (key + 1) })
        })
        this.getTags.updatePriority(apiData).subscribe((res) => {
            console.error(res)
        }, (err) => {
            console.error(err)
        })
    }

    ngOnInit() {
        this.loading = true;
        this.getAllTag();
        this.getAllTemp();
    }
    getAllTemp() {
        this.getTags.getTemplate().subscribe((data) => {
            this.tempList = data;
        }, (err) => {
            console.error(err);
        });
    }
    getAllTag() {
        this.getTags.getAllTags()
            .subscribe((data) => {
                this.formatTagsInArray(data);
            }, (err) => {
                console.error(err);
                this.loading = false;
            });
    }

    removeTag(id: string, type: string) {
        this._dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this.getTags.deleteTag(id, type).subscribe((data) => {
                    this.getAllTag();
                    this.refreshAllTags();
                }, (err) => {
                    console.error(err);
                });
            }
        }, (err) => {
            console.error(err);
        });
    }

    openAutomatic(tag1: any) {
        this.dialogRef = this.dialog.open(AutomaticTagModalComponent, {panelClass: 'scrollable'});
        this.dialogRef.componentInstance.tag = tag1;
        this.dialogRef.componentInstance.tempList = this.tempList;
        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.snackBar.open(`Tag ${result} Successfully`, '', {
                    duration: 2000,
                });
                this.dialogRef = null;
                this.getAllTag();
            }
        });
    }

    addTag() {
        this.dialogRef = this.dialog.open(AddTagModalComponent, {panelClass: 'scrollable'});
        this.dialogRef.componentInstance.tempList = this.tempList;
        this.dialogRef.componentInstance.addTagType = 'jobProfile';
        this.dialogRef.afterClosed().subscribe(result => {
            if (result === 'Added') {
                this.dialogRef = null;
                this.getAllTag();
                this.refreshAllTags();
            }
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

    tagsAutomaticTrack(index, data) {
        return data['id'] || index;
    }

    refreshAllTags() {
        this.getTags.getAllTagsMain()
        .subscribe((res) => {
            this._localStorageService.setItem('allTags', res);
        })
    }
}
