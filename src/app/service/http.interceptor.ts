import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment'

@Injectable()
export class IntercepterHttp implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let cloneReq = request.clone({ headers: request.headers
          .set( 'Content-Type', 'application/json')
        }).clone({ url: request.url + '?accessToken=' + localStorage.getItem('token') });

        return next.handle(cloneReq)
        .catch(response => {
            if (response instanceof HttpErrorResponse) {
                console.log('Processing http error', response.status);
                if ((response.status === 401 || response.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                    window.localStorage.setItem('loginMessage', JSON.stringify('Token Expire. Please login Again.'));
                    const getUrl = window.location;
                    const baseUrl = getUrl.protocol + '//' + getUrl.host + '/' + getUrl.pathname.split('/')[1];
                    window.location.replace(baseUrl);
                }
                return Observable.throw(response);
            }
        });
    }
}
