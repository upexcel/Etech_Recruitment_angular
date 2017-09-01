import { Injectable } from '@angular/core';
import * as _ from 'lodash';
@Injectable()
export class DashboardService {
    constructor() { }

    formatChartData(res) {
        _.forEach(res.profile, (profileValue, profileKey) => {
            res.profile[profileKey].profile = _.fromPairs(_.sortBy(_.toPairs(profileValue.profile), function(a){return a[1]}).reverse());
            profileValue['labels'] = [];
            profileValue['datasets'] = [{ 'label': profileValue.title, 'data': [] }];
            _.forEach(profileValue.profile, (profileTagsValue, profileTagsKey) => {
                profileValue['labels'].push(profileTagsKey);
                profileValue['datasets'][0]['data'].push(profileTagsValue);
            });
        });
        res.email = _.sortBy(res.email, ['email_send']).reverse();
        let tempArray = JSON.parse(JSON.stringify(res.email));
        res.email = {}
        res.email['emails'] = tempArray;
        res.email['labels'] = [];
        res.email['datasets'] = [{ 'label': 'Emails', 'data': [] }];
        _.forEach(res.email.emails, (emailValue, emailKey) => {
            res.email['labels'].push(emailValue.user);
            res.email['datasets'][0]['data'].push(emailValue.email_send);
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
        res.user = {'users': _.fromPairs(_.sortBy(_.toPairs(res.user), function(a){return a[1]}).reverse())};
        res.user['labels'] = [];
        res.user['datasets'] = [{ 'label': 'Users', 'data': [] }];
        _.forEach(res.user.users, (userValue, userKey) => {
            res.user['labels'].push(userKey);
            res.user['datasets'][0]['data'].push(userValue);
        });
        res.tag['data'] = [res.tag.Automatic, res.tag.Manual, res.tag.Default];
        res.tag['labels'] = ['Automatic', 'Manual', 'Default'];
        return res;
    }
}
