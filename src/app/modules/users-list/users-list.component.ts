import { Component, OnInit } from '@angular/core';
import { DialogService } from './../../service/dialog.service';
import { ImapMailsService } from './../../service/imapemails.service';
import * as _ from 'lodash';
@Component({
    selector: 'app-users-list',
    templateUrl: './users-list.component.html',
    styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
    page = 1;
    limit = 100;
    userList: Array<any>;
    totalCount: number;
    Math: any;
    constructor(public _dialogService: DialogService, public _imapMailsService: ImapMailsService) {
    }

    ngOnInit() {
        this.Math = Math;
        this.getUserList();
    }

    getUserList() {
        this._imapMailsService.getUserList({'page': this.page, limit: this.limit}).subscribe((res) => {
            this.userList = res['data'];
            this.totalCount = res['total_count'];
        }, (err) => {
            console.log(err);
        });
    }

    previous() {
        --this.page;
        this.getUserList();
    }

    next() {
        ++this.page;
        this.getUserList();
    }

    addUser() {
        this._dialogService.openAddUser().then((res: any) => {
            if (res) {
                this.userList.unshift(res);
                this.getUserList();
            }
        }, (err) => {
            console.log(err);
        });
    }

    deleteUser(userData) {
        this._dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                _.pull(this.userList, userData);
                this._imapMailsService.deleteUser('user/delete/',userData.id).subscribe((deleteData) => {
                    this.getUserList();
                }, (err) => {
                    console.log(err);
                });
            }
        }, (err) => {
            console.log(err);
        });
    }

    userListTrack(index, data) {
        return data['id'] || index;
    }
}
