import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class IntercepterHttp implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloneReq = request.clone({ headers: request.headers
          // .set('accessToken', localStorage.getItem('token'))
          .set( 'Content-Type', 'application/json')
        });
        const params = new HttpParams().set('accessToken', localStorage.getItem('token'));
        // constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        //     super(backend, defaultOptions);
        // }

        // get(url: string): Observable<Response> {
        //     url = this.updateUrl(url);
        //     // return super.get(url, this.getRequestOptionArgs(options));
        // }

        // post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        //     url = this.updateUrl(url);
        //     return super.post(url, body, this.getRequestOptionArgs(options));
        // }

        // put(url: string, body?: any, options?: RequestOptionsArgs): Observable<Response> {
        //     url = this.updateUrl(url);
        //     return super.put(url, body, this.getRequestOptionArgs(options));
        // }

        // delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        //     url = this.updateUrl(url);
        //     return super.delete(url, this.getRequestOptionArgs(options));
        // }

        // private updateUrl(req: string) {
        //     return req + '?accessToken=' + localStorage.getItem('token');
        // }

        // private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        //     if (options == null) {
        //         options = new RequestOptions();
        //     }
        //     if (options.headers == null) {
        //         options.headers = new Headers();
        //     }
        //     options.headers.append('Content-Type', 'application/json');

        //     return options;
        // }

        // request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        //     return super.request(url, options).catch((error) => {
        //         if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
        //             window.localStorage.setItem('loginMessage', JSON.stringify('Token Expire. Please login Again.'));
        //             const getUrl = window.location;
        //             const baseUrl = getUrl.protocol + '//' + getUrl.host + '/' + getUrl.pathname.split('/')[1];
        //             window.location.replace(baseUrl);
        //         }
        //         return Observable.throw(error);
        //     });
        // }
        console.log(cloneReq);
        return next.handle(request)
        .do((req: HttpEvent<any>) => {
            if (req instanceof HttpRequest) {
                console.log('request', req);
                // return ev['url'] + '?accessToken=' + localStorage.getItem('token');
            }
            if (req instanceof HttpResponse) {
                console.log('processing response', req);
            }
        })
        .catch(response => {
            if (response instanceof HttpErrorResponse) {
                console.log('Processing http error', response.status);
                if ((response.status === 401 || response.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                    window.localStorage.setItem('loginMessage', JSON.stringify('Token Expire. Please login Again.'));
                    const getUrl = window.location;
                    const baseUrl = getUrl.protocol + '//' + getUrl.host + '/' + getUrl.pathname.split('/')[1];
                    window.location.replace(baseUrl);
                }
            }

            return Observable.throw(response);
        }); ;
    }
}
