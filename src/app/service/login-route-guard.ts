import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()

export class LoginRouteGuard implements CanActivate {
    constructor() {}

    canActivate() {
        // return !!localStorage.getItem('token');
        return true;
    }
}
