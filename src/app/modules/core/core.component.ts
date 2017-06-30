import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
    title = 'Inbox';
    constructor(private _router: Router, public getNewEmail: ImapMailsService, private access: LoginService) { }

    ngOnInit(): void {
        this.title = 'Inbox';
        this.access.verifyAccess().subscribe((data) => {
            if (!data.status) {
                this.logout();
            }
        }, (err) => {
            if (!err.status) {
                this.logout();
            }
        });
    }

    emailRefresh() {
        this.getNewEmail.fetchNewEmail();
    }

    goto(path: string, navtitle: string) {
        this.title = navtitle;
        this._router.navigate(['/core/' + path]);
    }

    logout() {
        this.access.removeToken().then((data) => {
            if (data) {
                this._router.navigate(['/login']);
            }
        });
    }
}
