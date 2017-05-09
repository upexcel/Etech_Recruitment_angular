import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { config } from './../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    headers: any;
    options: any;

    constructor(public http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json'
        });
        this.options = new RequestOptions({
            headers: this.headers
        });
    }

    login(id: string, password: string): Observable < any > {
        const body = {
            'email': id,
            'password': password
        };

        return this.http.post(config['apibase'] + 'user/login', body, this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    verifyAccess(): Observable < any > {
        return this.http.get(config['apibase'] + 'verify?accessToken=' + localStorage.getItem('token'), this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    storeToken(token: string): Promise < boolean > {
        localStorage.setItem('token', token);
        return Promise.resolve(true);
    }

    removeToken(): Promise < boolean > {
        localStorage.removeItem('token');
        return Promise.resolve(true);
    }

}
