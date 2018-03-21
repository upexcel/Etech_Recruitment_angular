import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import * as _ from 'lodash';
import { LocalStorageService } from './../../service/local-storage.service';
import { RemoveOldLogsComponent } from './../../modules/remove-old-logs/remove-old-logs.component';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
    selector: 'app-useractivitylog',
    templateUrl: './useractivitylog.component.html',
    styleUrls: ['./useractivitylog.component.scss']
})
export class UserActivityLogComponent implements OnInit {
    usersLog: any;
    selectUserLog: any;
    selectUserLogFullData: any;
    pageNo = 0;
    recordPerPage = 100;
    totalPages: number;
    selectedUserEmail: string;
    errorMessage: string;
    dialogRef: MatDialogRef<any>;
    constructor(public emailactivity: ImapMailsService, private _localStorageService: LocalStorageService, public dialog: MatDialog) { }

    ngOnInit() {
        this.selectedUserEmail = this._localStorageService.getItem('userEmail');
        if (this.selectedUserEmail) {
            this.getUserLogs();
            this.getUserList();
        }
    }

    getUserLogs() {
        this.errorMessage = '';
        this.emailactivity.getHistory({ 'email': this.selectedUserEmail }).subscribe((data) => {
            _.forEach(data['data'], (value, key) => {
                _.forEach(value['action'], (actionValue, actionKey) => {
                    data['data'][key]['action'][actionKey] = actionValue.substr(0, actionValue.indexOf('?'));
                    data['data'][key]['json'][actionKey] = JSON.stringify(data['data'][key]['json'][actionKey]);
                });
            });
            this.selectUserLogFullData = data['data'][0] || [];
            this.errorMessage = data['message'];
            if (data['data'][0]) {
                this.totalPages = Math.ceil((this.selectUserLogFullData['action'].length || 0) / this.recordPerPage);
                this.paginate(data['data'][0]);
            }
        }, (err) => {
            console.log(err);
        });
    }

    getUserList() {
        this.emailactivity.getUserList({ 'page': 1, limit: 100 }).subscribe((res) => {
            this.usersLog = res['data'];
            this.usersLog.unshift({ 'email': this._localStorageService.getItem('userEmail') });
        }, (err) => {
            console.log(err);
        });
    }

    paginate(data) {
        data = JSON.parse(JSON.stringify(data));
        this.selectUserLog = { 'email': data['email'] };
        const startRec = this.pageNo * this.recordPerPage;
        const endRec = startRec + this.recordPerPage;
        this.selectUserLog['action'] = _.slice(data.action, startRec, endRec);
        this.selectUserLog['json'] = _.slice(data.json, startRec, endRec);
        this.selectUserLog['time'] = _.slice(data.time, startRec, endRec);
    }

    next() {
        ++this.pageNo;
        this.paginate(this.selectUserLogFullData);
    }
    previous() {
        --this.pageNo;
        this.paginate(this.selectUserLogFullData);
    }

    selectedUser(logData) {
        this.selectedUserEmail = logData['email'];
        this.getUserLogs();
        this.pageNo = 0;
        this.selectUserLogFullData = [];
        this.selectUserLog = { 'email': logData['email'] };
    }

    usersLogTrack(index, data) {
        return data['id'] || index;
    }

    selectUserLogActionTrack(index, data) {
        return index;
    }

    removeLogs() {
        this.dialogRef = this.dialog.open(RemoveOldLogsComponent, {
            height: '60%',
            width: '60%'
        });
        this.dialogRef.componentInstance.currentUser = this.selectedUserEmail;

    }

}
