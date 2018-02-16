import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()

abstract class HttpCache {
    abstract get(req: HttpRequest< any >): HttpResponse<any> | null
    abstract put(req: HttpRequest < any > , resp: HttpResponse<any>): void
}

export class HttpCacheService implements HttpCache {
    private cache = {}

    get (requrl: any): HttpResponse<any> | null {
        return JSON.parse(localStorage.getItem(requrl));
        // return this.cache[req.urlWithParams];
    }
    put(requrl: any, resp: HttpResponse<any>): void {

        localStorage.setItem(requrl, JSON.stringify(resp));
        // this.cache[req.urlWithParams] = resp;
    }
}
