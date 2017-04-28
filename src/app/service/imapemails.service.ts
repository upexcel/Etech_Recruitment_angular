import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { config } from './../config/config';

@Injectable()
export class ImapemailsService {

  constructor(public http: Http) { }

   getemaillist(): Observable <any> {
     // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     // let options = new RequestOptions({ headers: headers }); // Create a request option

     return this.http.get(config)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

}
