import { Injectable } from '@angular/core';
import * as _ from 'lodash';
@Injectable()
export class DashboardService {
    constructor() { }

    formatChartData(res) {
        _.forEach(res.profile, (profileValue, profileKey) => {
            profileValue['labels'] = [];
            profileValue['data'] = [];
            _.forEach(profileValue.profile, (profileTagsValue, profileTagsKey) => {
                profileValue['labels'].push(profileTagsKey);
                profileValue['data'].push(profileTagsValue);
            });
        });
        let tempArray = JSON.parse(JSON.stringify(res.email));
        res.email = {}
        res.email['emails'] = tempArray;
        res.email.title = 'Emails';
        res.email['labels'] = [];
        res.email['data'] = [];
        _.forEach(res.email.emails, (emailValue, emailKey) => {
            res.email['labels'].push(emailValue.user);
            res.email['data'].push(emailValue.email_send);
        });
        tempArray = JSON.parse(JSON.stringify(res.imap));
        res.imap = {}
        res.imap['imaps'] = tempArray;
        res.imap.title = 'Imap';
        res.imap['labels'] = [];
        res.imap['data'] = [];
        _.forEach(res.imap.imaps, (imapValue, imapKey) => {
            res.imap['labels'].push(imapValue.email);
            res.imap['data'].push(imapValue.total_email);
        });
        res.inbox['data'] = [res.inbox.total, res.inbox.unread];
        res.inbox['labels'] = ['total', 'unread'];
        res.user['data'] = [res.user.Admin, res.user.Guest, res.user.HR];
        res.user['labels'] = ['Admin', 'Guest', 'HR'];
        res.tag['data'] = [res.tag.Automatic, res.tag.Manual, res.tag.Default];
        res.tag['labels'] = ['Automatic', 'Manual', 'Default'];
        return res;
    }
}
