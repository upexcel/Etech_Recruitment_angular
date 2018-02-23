import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { config } from './../config/config';

@Injectable()

abstract class HttpCache {
    abstract get(req: HttpRequest<any>): HttpResponse<any> | null
    abstract put(req: HttpRequest<any>, resp: HttpResponse<any>): void
}

export class HttpCacheService implements HttpCache {
    private cache = {}

    get(requrl: any): HttpResponse<any> | null {
        let localHistorySingleData = JSON.parse(localStorage.getItem(requrl))
        const CurrentTimeStamp = new Date().getTime();
        if (localHistorySingleData) {
            if (localHistorySingleData['expire'] && CurrentTimeStamp > localHistorySingleData['expire']) {
                localStorage.removeItem(requrl);
                localHistorySingleData = null;
            }
        }
        console.log(localHistorySingleData)
        return localHistorySingleData ? localHistorySingleData['data'] : localHistorySingleData;
    }
    put(requrl: any, resp: HttpResponse<any>): void {
        let time = new Date().getTime();
        time = time + (config['candidateHistoryDeleteHours'] * 1 * 60 * 60 * 1000);
        localStorage.setItem(requrl, JSON.stringify({ expire: time, data: resp }));
    }
}
