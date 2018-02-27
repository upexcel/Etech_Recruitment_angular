import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from './../environments/environment';
declare let FB: any;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        FB.init({
            appId: environment['fb_loginAppid'],
            cookie: true, // enable cookies to allow the server to access
            xfbml: true, // parse social plugins on this page
            version: environment['fb_version'] // use graph api version 2.8
        });
    }

}
