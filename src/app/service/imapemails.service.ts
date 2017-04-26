import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { config } from './../config/config';

@Injectable()
export class ImapemailsService {

  constructor(public http: Http) { }

   // apibaseUrl: string = 'http://excellencetechnologies.co.in/imap/?email=acc.excellence2017@gmail.com&pass=java@123&date=2017-04-16&host=imap.gmail.com&port=993&encryp=ssl';

   getemaillist(): Observable <any> {
     // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
     // let options = new RequestOptions({ headers: headers }); // Create a request option
  	 // console.log(this.bodyString);

     return this.http.get(config)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
   }

}
