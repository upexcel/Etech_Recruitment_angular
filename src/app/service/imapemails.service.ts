import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { config } from './../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TAGS, historylog, Emaillist } from './mock-data';
import { InterceptedHttp } from './http.interceptor';

@Injectable()
export class ImapMailsService {

    constructor(public http: Http, public Intercepted: InterceptedHttp) {}

    getEmailList(): Observable <any> {
        return this.http.get(config['imap'])
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getTags(): Promise < any[] > {
        return Promise.resolve(TAGS);
    }
    getAllTags(): Observable <any> {
        return this.Intercepted.get(config['apibase'] + 'tag/get')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    addTag(body: any): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'tag/add/' + body.type, body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    updateTag(tag: any, type: string): Observable <any> {
        return this.Intercepted.put(config['apibase'] + 'tag/update/' + type + '/' + tag.id, tag)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    deleteTag(tag: string, type: string): Observable <any> {
        return this.Intercepted.delete(config['apibase'] + 'tag/delete/' + type + '/' + tag)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    getHistory(): Promise < any[] > {
        return Promise.resolve(historylog);
    }

    getEmailName(): Promise < any[] > {
        return Promise.resolve(Emaillist);
    }
    deleteImap(id: string): Observable <any> {
        return this.Intercepted.delete(config['apibase'] + 'imap/delete/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    storeImap(body): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'imap/save', body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getImapList(): Observable <any> {
        return this.Intercepted.get(config['apibase'] + 'imap/get/1')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
}
