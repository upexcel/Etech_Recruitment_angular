import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { InterceptedHttp } from './http.interceptor';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {
    headers: any;
    options: any;

    constructor(public http: Http, public Intercepted: InterceptedHttp) {
        this.headers = new Headers({
            'Content-Type': 'application/json'
        });
        this.options = new RequestOptions({
            headers: this.headers
        });
    }

    login(id: string, password: string, keepLogin: boolean): Observable < any > {
        const body = {
            'email': id,
            'password': password,
            'remember_me': keepLogin
        };

        return this.http.post(environment['apibase'] + 'user/login', body, this.options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    forgotPassword(body): Observable < any > {
        return this.http.put(environment['apibase'] + `account/forgot_password/${body.email}`, body)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    verifyAccess(): Observable < any > {
        return this.Intercepted.get(environment['apibase'] + 'verify')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

    storeToken(token: string): Promise < boolean > {
        localStorage.setItem('token', token);
        return Promise.resolve(true);
    }

    removeToken(): Promise < boolean > {
        localStorage.removeItem('token');
        localStorage.removeItem('tagShowId');
        return Promise.resolve(true);
    }

    candidate_login(body: any): Observable < any > {
        return this.http.post(environment['apibase'] + 'exams/signup_login_fb', body, this.options)
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }
    candidateOtp_login(body: any): Observable < any > {
        return this.http.post(environment['apibase'] + 'exams/verifyExamToken', body, this.options)
          .map((res: Response) => res.json())
          .catch((error: any) => Observable.throw(error.json() || 'Server error'));
    }

}
