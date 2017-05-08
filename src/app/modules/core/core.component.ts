import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
    title = 'Inbox';
    login_time: any;
    current_time: any;
    diff: any;
    constructor(private _router: Router) { }

    ngOnInit(): void {
        this.title = 'Inbox';
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
        this.title = navtitle;
        this._router.navigate(['/core/' + path]);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('login_time');
        this._router.navigate(['/login']);
    }
}
