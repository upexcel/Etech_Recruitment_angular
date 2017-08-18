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
    constructor(public emailactivity: ImapMailsService) { }

    ngOnInit() {
        this.emailactivity.getHistory().subscribe((data) => {
            this.usersLog = data['data'];
            this.selectUserLog = data['data'][0];
            _.forEach(data['data'], (value, key) => {
                _.forEach(value['action'], (actionValue, actionKey) => {
                    data['data'][key]['action'][actionKey] = actionValue.substr(0, actionValue.indexOf('?'));
                    data['data'][key]['json'][actionKey] = JSON.stringify(data['data'][key]['json'][actionKey]);
                });
            });
        }, (err) => {
            console.log(err);
        });
    }

    selectedUser(logData) {
        this.selectUserLog = logData;
    }

}
