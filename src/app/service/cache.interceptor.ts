import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment'
import { HttpCacheService } from '../service/cache.service';

@Injectable()
export class CacheIntercepter implements HttpInterceptor {
    constructor(private cacheService: HttpCacheService) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newUrl = request.urlWithParams.replace(`?accessToken=${localStorage.getItem('token')}`, '');
        const catchdata = this.cacheService.get(request) as HttpEvent<any>;
        // const catchdata = this.cacheService[request.urlWithParams] || null;
        // const newurl = request.url.replace(environment['apibase'], '');
        // NOTE: this is the correct way to implement caching, but for now, we are commeting this code.
        // because this is not working. i guess its due to HttpEvent type checking, but no time ot debug
        // so instead we are doing it directly in the local-storage-service
        // if (request.urlWithParams.indexOf('/inbox') > 0 && catchdata) {
        //     console.log('respo from cache', catchdata)
        //     return Observable.of(catchdata);
        // }

        return next.handle(request)
        .do(event => {
            if (event instanceof HttpResponse) {
                if (request.urlWithParams.indexOf('/inbox') > 0) {
                    // let url = req.url.replace(environment['apibase'], '');
                    let url = request.url.replace(`?accessToken=${localStorage.getItem('token')}`, '');
                    // localStorage.setItem(url, JSON.stringify({'date': new Date(), 'data': req.body}));
                    this.cacheService.put(url, event)
                    // this.cacheService[request.urlWithParams] = event;
                }
            }
        })
    }
}
