import {Component, OnInit} from '@angular/core';
import {SpamDialogService} from './../../service/spamDialog.service';
import {ImapMailsService} from './../../service/imapemails.service';
import * as _ from 'lodash';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'app-spam-list',
    templateUrl: './spam.component.html',
    styleUrls: ['./spam.component.scss']
})
export class SpamComponent implements OnInit {
    page = 1;
    limit = 100;
    spamList: Array<any>;
    totalCount: number;
    Math: any;
    constructor(public _snackBar: MdSnackBar, public _spamDialogService: SpamDialogService, public _imapMailsService: ImapMailsService) {
    }

    ngOnInit() {
        this.Math = Math;
        this.getSpamList();
    }

    getSpamList() {
        this._imapMailsService.getSpamList({'page': this.page, limit: this.limit}).subscribe((res) => {
            this.spamList = res;
            this.totalCount = res['total_count'];
        }, (err) => {
            console.log(err);
        });
    }

    gotoSpam() {
        this._spamDialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this._imapMailsService.moveSpamFromJobProfile().subscribe((data) => {
                    this._snackBar.open(data.message, '', {
                        duration: 2000,
                    });
                }, (err) => {
                    this._snackBar.open(err.message, '', {
                        duration: 2000,
                    });
                });
            }
        })
    }
    addSpam() {
        this._spamDialogService.openAddSpam('add').then((res: any) => {
            if (res && res['id']) {
                this.spamList.unshift(res);
                this.getSpamList();
            }
        }, (err) => {
            console.log(err);
        });
    }

    deleteSpam(spamData) {
        this._spamDialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                _.pull(this.spamList, spamData);
                this._imapMailsService.deleteUser('spamList/delete/', spamData.id).subscribe((deleteData) => {
                    this.getSpamList();
                }, (err) => {
                    console.log(err);
                });
            }
        }, (err) => {
            console.log(err);
        });
    }
    editSpam(spamData) {
        this._spamDialogService.openAddSpam('edit', spamData).then((res: any) => {
            if (res && res['id']) {
                this.spamList.unshift(res);
                this.getSpamList();
            }
        }, (err) => {
            console.log(err);
        });
    }

    spamListTrack(index, data) {
        return data['id'] || index;
    }
}
