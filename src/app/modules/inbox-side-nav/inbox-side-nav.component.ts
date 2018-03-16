import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { AddSubTagModalComponent } from '../add-sub-tag-modal/add-sub-tag-modal.component';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { DialogService } from './../../service/dialog.service';
import { LocalStorageService } from './../../service/local-storage.service';

import * as _ from 'lodash';
@Component({
    selector: 'app-inbox-side-nav',
    templateUrl: './inbox-side-nav.component.html',
    styleUrls: ['./inbox-side-nav.component.scss']
})
export class InboxSideNavComponent implements OnInit {
    showaddtag = false;
    showHide: any;
    firstlist = false;
    thirdlist = false;
    selectedId: string;
    parantTagId: string;
    showId: any;
    showAlltag: boolean;
    tempArray: any;
    @Input() tags: any[];
    menuShow: boolean;
    @Output() getEmails = new EventEmitter<any>();
    @Output() getTags = new EventEmitter<any>();
    @Output() getStarredEmails = new EventEmitter<any>();
    dialogRef: MatDialogRef<any>;
    constructor(public _apiService: ImapMailsService, public dialog: MatDialog, private _dialogService: DialogService, private localStorageService: LocalStorageService) { }
    ngOnInit() {
        _.forEach(this.tags, (tagValue, tagKey) => {
            if (tagValue['title'] === 'inbox') {
                _.forEach(tagValue['data'], (tagSubValue, tagSubKey) => {
                    if (tagSubValue['title'] === 'Attachment') {
                        this.selectedId = tagSubValue['id'];
                        this.parantTagId = '0';
                    }
                });
            }
        });
        if (localStorage.getItem('tagShowId')) {
            this.showId = localStorage.getItem('tagShowId');
        } else {
            this.showAlltag = true;
        }
    }
    getEmail(id, parantTagId, title, parentTitle, active_status) {
        this.parantTagId = parantTagId;
        this.selectedId = (id === 0 ? parantTagId : id);
        this.menuShow = false;
        if (title === 'Mails') {
            this.getEmails.emit({ 'id': null, 'parantTagId': null, 'title': title, 'parentTitle': parentTitle });
        } else if (title === 'Attachment') {
            this.getEmails.emit({ 'id': null, 'parantTagId': null, 'title': title, 'parentTitle': parentTitle, 'is_attach': true });
        } else {
            this.getEmails.emit({ 'id': id, 'parantTagId': parantTagId, 'title': title, 'parentTitle': parentTitle, 'active_status': active_status });
        }
    }
    openSubMenu(title) {
        for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i]['title'] === title) {
                this.tags[i]['menuOpen'] = !this.tags[i]['menuOpen'];
                return;
            }
        }
    }
    openSubChildMenu(title) {
        for (let i = 0; i < this.tags.length; i++) {
            for (let j = 0; j < this.tags[i]['data'].length; j++) {
                if (this.tags[i]['data'][j]['title'] === title) {
                    this.tags[i]['data'][j]['menuOpen'] = !this.tags[i]['data'][j]['menuOpen'];
                }
            }
        }
    }

    tagDataTrack(index, data) {
        return data['id'] || index;
    }

    subTagSubchildTrack(index, data) {
        return data['id'] || index;
    }
    addTag(parentid: any) {
        this.dialogRef = this.dialog.open(AddSubTagModalComponent, {});
        // this.dialogRef.componentInstance.tempList = this.tempList;
        this.dialogRef.componentInstance.addTagType = 'Default';
        this.dialogRef.componentInstance.parentid = parentid;
        this.dialogRef.afterClosed().subscribe(result => {
            if (result === 'Added') {
                this.getTags.emit();
                this.dialogRef = null;
            }
        });
    }
    removeTag(type: string, tagid: string) {
        this._dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this._apiService.deleteSubTag(type, tagid).subscribe((data) => {
                    this.getTags.emit();
                }, (err) => {
                    console.log(err);
                });
            }
        }, (err) => {
            console.log(err);
        });
    }
    showHideMenu(id, active_status) {
        if (active_status) {
            if (this.localStorageService.getItem('tagShowId') === id) {
                this.localStorageService.clearItem('tagShowId');
                this.showAlltag = true;
            } else {
                this.showAlltag = false;
                this.showId = id;
                this.localStorageService.setItem('tagShowId', id);
            }
        }
    }
    getStarredMails() {
        this.getStarredEmails.emit(true);
    }
}
