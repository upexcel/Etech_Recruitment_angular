import {Injectable, EventEmitter, Output} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {historylog, Emaillist, SystemVar} from './mock-data';
import {InterceptedHttp} from './http.interceptor';
import {Subject} from 'rxjs/Subject';
import * as _ from 'lodash';
@Injectable()
export class LocalStorageService {
    constructor( private Intercepted: InterceptedHttp) { }

    setItem(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    clearItem(key) {
        localStorage.removeItem(key);
    }

    emailHistory(Email_id: any): Observable<any> {
        return this.Intercepted.get(environment['apibase'] + `email/inbox/${Email_id}`)
            .map((res: Response) => {
                return res.json();
            })
            .catch((error: any) => {
                return Observable.throw(error.json() || 'Server error');
            });
    }
    getAllHistory(emails: any) {
        return new Promise((resolve, reject) => {
            let historyData = [];
            _.forEach(emails, (email, key) => {
                if (!localStorage.getItem(`email/inbox/${email['sender_mail']}`)) {
                    this.emailHistory(email['sender_mail']).subscribe(data => {
                        this.setItem(`email/inbox/${email['sender_mail']}`, data);
                        if (key === emails.length - 1) {
                            resolve(historyData);
                        }
                    })
                }
            })
        })
    }
}
