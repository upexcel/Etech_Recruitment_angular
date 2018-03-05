import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { LoginService } from '../../service/login.service';
import { NgForm } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { config } from './../../config/config';

declare let FB: any;
@Component({
    selector: 'app-candidate',
    templateUrl: './candidate.component.html',
    styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {
    questions: any;
    options: any;
    job_pro: any[];
    candidateName: any;
    selectedJob: any;
    img: any;
    constructor(private _localStorageService: LocalStorageService, private getTags: ImapMailsService, private access: LoginService, private _router: Router) {
        this.candidateName = localStorage.getItem('user');
        this.img = localStorage.getItem('img');
    }
    // statusChangeCallback(response: any) {
    //     if (response.status === 'connected') {
    //     } else {
    //     }
    // }
    ngOnInit() {
        // FB.init({
        //     appId: environment['fb_loginAppid'],
        //     cookie: true, // enable cookies to allow the server to access
        //     xfbml: true, // parse social plugins on this page
        //     version: config.fb_version // use graph api version 2.8
        // });
        // FB.getLoginStatus((response) => {
        //     this.statusChangeCallback(response);
        // });
    }

    fblogout() {
        if (JSON.parse(localStorage.getItem('loginByfb'))) {
            FB.logout((result) => {
                localStorage.clear();
                this._router.navigate(['/candidatelogin']);
            })
        } else {
            localStorage.clear();
            this._router.navigate(['/emailtestlogin']);
        }
    }

}
