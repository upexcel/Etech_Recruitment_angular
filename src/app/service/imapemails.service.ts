import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { config } from './../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ImapMailsService {

  constructor(public http: Http) { }

   getEmailList(): Observable <any> {
     return this.http.get(config)
                .map((res: Response) => res.json())
                .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}
