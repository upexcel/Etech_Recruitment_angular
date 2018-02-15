import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    Router,
    NavigationStart,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import {
    ImapMailsService
} from '../../service/imapemails.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { config } from './../../config/config';
@Component({
    selector: 'app-interviewee-inbox',
    templateUrl: './interviewee-inbox.component.html',
    styleUrls: ['./interviewee-inbox.component.scss']
})
export class IntervieweeInboxComponent implements OnInit, OnDestroy {
    inboxEmail: any;
    url:string;
    constructor(private _apiService: ImapMailsService, private _localStorageService: LocalStorageService) {
    }
    ngOnInit() {
        this.url = config.avatarUrl;
        this.getInboxMails();
    }

    getInboxMails() {
        this._apiService.getIntervieweeInboxData().subscribe((res) => {
            this.inboxEmail = res;
        }, (err) => {
            console.log(err)
        })
    }

    openEmails(email: any) {
        if (email['unread']) {
            this._apiService.UnreadStatus({
                'status': false,
                'mongo_id': email['_id']
            }).subscribe((data) => {
            }, (err) => {
                console.log(err);
            });
        }
        const landingUrl = window.location.origin + '/#/core/intervieweeCandidate/' + email._id;
        window.open(landingUrl);
        this._localStorageService.setItem('email', email);
    }

    countEmailSubject(emailSubject) {
        return (emailSubject && emailSubject.length > 88) ? emailSubject.substring(0, 88) + '...' : emailSubject;
    }

    ngOnDestroy() {
    }

}
