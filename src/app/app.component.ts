import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from './../environments/environment';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }
    statusChangeCallback(response: any) {
        if (response.status !== 'connected') {
            console.log('loginnn required');
        }
    }


}
