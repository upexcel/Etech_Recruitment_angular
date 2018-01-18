import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { LoginService } from '../../service/login.service';
import { NgForm } from '@angular/forms';

declare let FB: any;
@Component({
    selector: 'app-candidate',
    templateUrl: './candidate.component.html',
    styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
    questions: any;
    options: any;
    job_pro: any [];
    selectedJob: any;
    constructor(private _localStorageService: LocalStorageService, private getTags: ImapMailsService, private access: LoginService, private _router: Router) {

    }
    statusChangeCallback(response: any) {
        console.log(response);
        if (response.status === 'connected') {
            console.log('connected');
        } else {
            console.log('loginnn required');
        }
    }
    ngOnInit() {
        FB.init({
            appId: '526179664434624',
            cookie: true, // enable cookies to allow the server to access
            xfbml: true, // parse social plugins on this page
            version: 'v2.11' // use graph api version 2.8
        });
        FB.getLoginStatus((response) => {
            this.statusChangeCallback(response);
        });
    }

    fblogout() {
        FB.logout((result) => {
            this.access.removeToken().then((data) => {
                if (data) {
                    this._router.navigate(['']);
                }
            });
        })
    }

}
