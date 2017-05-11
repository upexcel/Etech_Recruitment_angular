import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-core',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
    title = 'Inbox';
    constructor(private _router: Router, private access: LoginService) { }

    ngOnInit(): void {
        this.title = 'Inbox';
        this.access.verifyAccess().subscribe((data) => {
            if (!data.status) {
                this.logout();
            }
        }, (err) => {
            console.log(err);
        });
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
