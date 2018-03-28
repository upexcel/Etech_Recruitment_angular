import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
// import { DialogService } from './dialog.service'

@Injectable()
export class InterceptedHttp extends Http {
    private tokenExpireCall = new Subject<any>();
    tokenExpMehtodCalled$ = this.tokenExpireCall.asObservable();
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.get(url, this.getRequestOptionArgs(url,options));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.post(url, body, this.getRequestOptionArgs(url,options));
    }

    put(url: string, body?: any, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.put(url, body, this.getRequestOptionArgs(url,options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.delete(url, this.getRequestOptionArgs(url,options));
    }

    private updateUrl(req: string) {
        return req + '?accessToken=' + localStorage.getItem('token');
    }

    private getRequestOptionArgs(url,options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        let subString = "addNewCandidate";
        if(url.includes(subString)) {
            options.headers.append('Content-Type', 'multipart/form-data');
        } else {
            options.headers.append('Content-Type', 'application/json');
        }

        return options;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {


        return super.request(url, options).catch((error) => {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                window.localStorage.setItem('loginMessage', JSON.stringify('Token Expire. Please login Again.'));

                this.tokenExpireCall.next();
            }
            return Observable.throw(error);
        });
    }
}
