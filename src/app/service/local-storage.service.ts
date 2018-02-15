import {Injectable, EventEmitter, Output} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {historylog, Emaillist, SystemVar} from './mock-data';
import {Subject} from 'rxjs/Subject';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class LocalStorageService {
    emaillocal: any;
    constructor( private Intercepted: HttpClient) { }

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
                return res;
            })
            .catch((error: any) => {
                return Observable.throw(error || 'Server error');
            });
    }
    getAllHistory(emails: any) {
        emails = JSON.parse(JSON.stringify(emails));
        return new Promise((resolve, reject) => {
            let historyData = (allEmails, callback) => {
                let first_data = allEmails.splice(0, 1)[0];
                if (first_data) {
                    if (!localStorage.getItem(`email/inbox/${first_data['sender_mail']}`)) {
                        this.emailHistory(first_data['sender_mail']).subscribe(res => {
                            if (allEmails && allEmails.length !== 1) {
                                historyData(allEmails, callback);
                            } else {
                                callback(true);
                            }
                        })
                    }else {
                        if (allEmails && allEmails.length !== 1) {
                            historyData(allEmails, callback);
                        } else {
                            callback(true);
                        }
                    }
                }
            }
            historyData(emails, response => {
                resolve(response);
            })
        })
    }
}
