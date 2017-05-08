import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
    listopen: boolean;
    login_time: any;
    current_time: any;
    diff: any;
    constructor(private _router: Router) { }

    ngOnInit() {
        this.listopen = false;
        if (localStorage.getItem('token') !== '') {
            this.login_time = new Date(localStorage.getItem('login_time'));
            this.current_time = new Date();
            this.diff = (this.current_time.getTime() - this.login_time.getTime()) / 1000;
            if (this.diff > 3600) {
                localStorage.removeItem('login_time');
                localStorage.removeItem('token');
                this._router.navigate(['/login']);
            }
        }
    }

    goto( path: string, navtitle: string) {
        this._router.navigate(['/core/setting/' + path]);
    }
}
