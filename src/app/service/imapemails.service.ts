import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { config } from './../config/config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { historylog, Emaillist, SystemVar } from './mock-data';
import { InterceptedHttp } from './http.interceptor';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ImapMailsService {
    count = 0;
    @Output() apiStartEvent: EventEmitter<any> = new EventEmitter(true);
    @Output() apiEndEvent: EventEmitter<any> = new EventEmitter(true);
    private childMethodCall = new Subject<any>();
    // Observalbe string streams
    componentMehtodCalled$ = this.childMethodCall.asObservable();
    constructor(public http: Http, public Intercepted: InterceptedHttp) {}

    fetchNewEmail() {
        this.childMethodCall.next();
    }
    refreshNewEmails() {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + 'email/fetchByButton')
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    increaseAPiCount() {
        ++this.count;
        this.apiStartEvent.emit();
    }
    decreaseAPiCount() {
        --this.count;
        if (this.count === 0) {
            this.apiEndEvent.emit();
        }
    }
    getEmailList(body: any): Observable <any> {
        this.increaseAPiCount();
        if (!!body.type) {
            return this.Intercepted.put(config['apibase'] + `email/fetch/${body.tag_id}/${body.page}/${body.limit}`, body)
                .map((res: Response) => {
                    this.decreaseAPiCount();
                    return res.json();
                })
                .catch((error: any) => {
                    this.count = 0;
                    this.apiEndEvent.emit();
                    return Observable.throw(error.json() || 'Server error');
                });
        } else {
            return this.Intercepted.put(config['apibase'] + `email/fetch/${body.tag_id}/${body.page}/${body.limit}`, body)
                .map((res: Response) => {
                    this.decreaseAPiCount();
                    return res.json();
                })
                .catch((error: any) => {
                    this.count = 0;
                    this.apiEndEvent.emit();
                    return Observable.throw(error.json() || 'Server error');
                });
        }
    }
    getAllTagsMain(): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + 'email/countEmail')
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    getAllTags(): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + 'tag/get')
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    addTag(body: any): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.post(config['apibase'] + 'tag/add/' + body.type, body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    sendEmail(body: any): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.post(config['apibase'] + 'email/sendtomany', body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    UnreadStatus(body: any): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.put(config['apibase'] + `email/changeUnreadStatus/${body.mongo_id}/${body.status}`, body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    emailAttachment(id: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.put(config['apibase'] + `email/mailAttachment/${id}`)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    assignTag(body: any): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.put(config['apibase'] + `email/assignMultiple/${body.tag_id}`, body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    deleteEmail(body: any): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.post(config['apibase'] + `email/deleteEmail/${body.tag_id}`, body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    updateTag(tag: any, type: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.put(config['apibase'] + 'tag/update/' + type + '/' + tag.id, tag)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    deleteTag(tag: string, type: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.delete(config['apibase'] + 'tag/delete/' + type + '/' + tag)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    getHistory(): Promise < any[] > {
        return Promise.resolve(historylog);
    }
    getUserVariable(): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + 'variable/get/1/20')
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    getSystemVariable(): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + 'systemVariable/get/1/20')
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    addUserVariable(body): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.post(config['apibase'] + 'variable/add/', body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    deleteVariable(id: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.delete(config['apibase'] + 'variable/delete/' + id)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    updateVariable(body: any, id: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.put(config['apibase'] + 'variable/update/' + id, body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    addTemplate(body: any): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.post(config['apibase'] + 'template/add/', body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    getEmailName(): Promise < any[] > {
        return Promise.resolve(Emaillist);
    }
    deleteImap(id: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.delete(config['apibase'] + 'imap/delete/' + id)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    storeImap(body): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.post(config['apibase'] + 'imap/save', body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    getImapList(): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + 'imap/get')
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    storeSmtp(body: any): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.post(config['apibase'] + 'smtp/save', body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    sendTestEmail(userDetail: any, body: any): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.post(config['apibase'] + `template/email/${userDetail.CandidateEmail}`, body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    activateImap(email_id: any): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.put(config['apibase'] + `imap/statusActive/${email_id}`)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    getSmtpList(): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + 'smtp/get/1/10')
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    deleteSmtp(id: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.delete(config['apibase'] + 'smtp/delete/' + id)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    testSmtp(email: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.put(config['apibase'] + `smtp/testSmtp/${email}`)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    changeSmtpStatus(email: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.put(config['apibase'] + `smtp/changeStatus/${email}`)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    // *** Email template service functions ***
    getTemplate(): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + 'template/get/1/20')
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    updateTemplate(body: any, id: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.put(config['apibase'] + 'template/update/' + id, body)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    deleteTemplate(id: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.delete(config['apibase'] + 'template/delete/' + id)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    getCandidateHistory(Email_id: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + `email/inbox/${Email_id}`)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
    testTemplate(temp_id: string): Observable <any> {
        this.increaseAPiCount();
        return this.Intercepted.get(config['apibase'] + `template/test/${temp_id}`)
            .map((res: Response) => {
                this.decreaseAPiCount();
                return res.json();
            })
            .catch((error: any) => {
                this.count = 0;
                this.apiEndEvent.emit();
                return Observable.throw(error.json() || 'Server error');
            });
    }
}
