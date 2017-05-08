import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { config, apibase } from './../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TAGS, historylog, Emaillist } from './mock-data';

@Injectable()
export class ImapMailsService {
    headers: any;
    options: any;

    constructor(public http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: this.headers });
    }

    getEmailList(): Observable <any> {
        return this.http.get(config)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getTags(): Promise < any[] > {
        return Promise.resolve(TAGS);
    }

    getHistory(): Promise < any[] > {
        return Promise.resolve(historylog);
    }

    getEmailName(): Promise < any[] > {
        return Promise.resolve(Emaillist);
    }
    deleteImap(id: string): Observable <any> {
        return this.http.delete(apibase + 'imap/delete/' + id + '?accessToken=' + localStorage.getItem('token'), this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    storeImap(body): Observable <any> {
        return this.http.post(apibase + 'imap/save?accessToken=' + localStorage.getItem('token'), body, this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getImapList(): Observable <any> {
        return this.http.get(apibase + 'imap/get/1?accessToken=' + localStorage.getItem('token'), this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    login(id: string, password: string): Observable <any> {
        const body = {
            'email' : id,
            'password' : password
        };

        return this.http.post(apibase + 'user/login', body, this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
}
