import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { config } from './../config/config';
import * as _ from 'lodash';
import { LocalStorageService } from './local-storage.service';
@Injectable()

export class LoginRouteGuard implements CanActivate {
    role: string;
    constructor(private router: Router, private _localStorageService: LocalStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!!this._localStorageService.getItem('role')) {
            this.role = this._localStorageService.getItem('role');
            if (this.role === 'Admin') {
                return true;
            }
            if (_.indexOf(config['roles'][this.role], state.url) !== -1) {
                return true;
            } else {
                if (state.url === '/core/setting/imap' && this.role === 'HR') {
                    this.router.navigate(['/core/setting/emailtemplate']);
                    return true;
                } else if (state.url === '/core/setting/imap' && (this.role === 'Guest' || this.role === 'Interviewee')) {
                    this.router.navigate(['/core/setting/resetPassword']);
                    return true;
                } else if (state.url.substring(0, 18) === '/core/inbox/email/' || state.url.substring(0, 18) === '/core/intervieweeC') {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
}
