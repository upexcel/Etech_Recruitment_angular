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
import { LocalStorageService } from './../../service/local-storage.service'
@Component({
    selector: 'app-interviewee-inbox',
    templateUrl: './interviewee-inbox.component.html',
    styleUrls: ['./interviewee-inbox.component.scss']
})
export class IntervieweeInboxComponent implements OnInit, OnDestroy {
    inboxEmail: any;
    constructor(private _apiService: ImapMailsService, private _localStorageService: LocalStorageService) {
    }
    ngOnInit() {
        this.getInboxMails();
    }

    getInboxMails() {
        this._apiService.getIntervieweeInboxData().subscribe((res) => {
            this.inboxEmail = res;
            console.log(res)
        }, (err) => {
            console.log(err)
        })
    }

    countEmailSubject(emailSubject) {
        return (emailSubject && emailSubject.length > 88) ? emailSubject.substring(0, 88) + '...' : emailSubject;
    }

    ngOnDestroy() {
    }

}
