import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { config } from './../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TAGS, historylog, Emaillist, UserVariable, SystemVar, TempData } from './mock-data';
import { InterceptedHttp } from './http.interceptor';

@Injectable()
export class ImapMailsService {

    constructor(public http: Http, public Intercepted: InterceptedHttp) {}

    getEmailList(body: any): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'email/fetch', body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    getTags(): Promise < any[] > {
        return Promise.resolve(TAGS);
    }
    getAllTagsMain(): Observable <any> {
        return this.Intercepted.get(config['apibase'] + 'email/countEmail')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
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
    UnreadStatus(body: any): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'email/changeUnreadStatus', body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    assignTag(body: any): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'email/assignMultiple', body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    deleteEmail(body: any): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'email/deleteEmail', body)
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
    getUserVariable(): Observable <any> {
        return this.Intercepted.get(config['apibase'] + 'variable/get/1/')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    getSystemVariable(): Promise < any[] > {
        return Promise.resolve(SystemVar);
    }
    addUserVariable(body): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'variable/add/', body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    deleteVariable(id: string): Observable <any> {
        return this.Intercepted.delete(config['apibase'] + 'variable/delete/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    updateVariable(body: any, id: string): Observable <any> {
        return this.Intercepted.put(config['apibase'] + 'variable/update/' + id, body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    addTemplate(body: any): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'template/add/', body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    getEmailName(): Promise < any[] > {
        return Promise.resolve(Emaillist);
    }
    deleteImap(id: string): Observable <any> {
        return this.Intercepted.delete(config['apibase'] + 'imap/delete/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    storeImap(body): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'imap/save', body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    getImapList(): Observable <any> {
        return this.Intercepted.get(config['apibase'] + 'imap/get/1')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    storeSmtp(body: any): Observable <any> {
        return this.Intercepted.post(config['apibase'] + 'smtp/save', body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    getSmtpList(): Observable <any> {
        return this.Intercepted.get(config['apibase'] + 'smtp/get/1')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    deleteSmtp(id: string): Observable <any> {
        return this.Intercepted.delete(config['apibase'] + 'smtp/delete/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    // *** Email template service functions ***
    getTemplate(): Observable <any> {
        return this.Intercepted.get(config['apibase'] + 'template/get/1')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    updateTemplate(body: any, id: string): Observable <any> {
        return this.Intercepted.put(config['apibase'] + 'template/update/' + id, body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    deleteTemplate(id: string): Observable <any> {
        return this.Intercepted.delete(config['apibase'] + 'template/delete/' + id)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
}
