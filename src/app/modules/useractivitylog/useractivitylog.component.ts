import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import * as _ from 'lodash';

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
    constructor(public emailactivity: ImapMailsService) { }

    ngOnInit() {
        this.emailactivity.getHistory().subscribe((data) => {
            _.forEach(data['data'], (value, key) => {
                _.forEach(value['action'], (actionValue, actionKey) => {
                    data['data'][key]['action'][actionKey] = actionValue.substr(0, actionValue.indexOf('?'));
                    data['data'][key]['json'][actionKey] = JSON.stringify(data['data'][key]['json'][actionKey]);
                });
            });
            this.usersLog = data['data'];
            this.selectUserLogFullData = data['data'][0];
            this.totalPages = Math.ceil(this.selectUserLogFullData['action'].length / this.recordPerPage);
            this.paginate(data['data'][0]);
        }, (err) => {
            console.log(err);
        });
    }

    paginate(data) {
        data = JSON.parse(JSON.stringify(data));
        this.selectUserLog = {'email': data['email']};
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
        this.pageNo = 0;
        this.selectUserLogFullData = logData;
        this.totalPages = Math.ceil(this.selectUserLogFullData['action'].length / this.recordPerPage);
        this.paginate(logData);
    }

}
