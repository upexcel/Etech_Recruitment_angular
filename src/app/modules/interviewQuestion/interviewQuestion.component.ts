import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { LoginService } from '../../service/login.service';
import * as _ from 'lodash';
import { PreviewAnswerComponent } from '../previewAnswer/previewAnswer.component';
import { config } from './../../config/config';
import { instructions } from './../../config/config';
declare const FB: any;

@Component({
    selector: 'app-interviewques',
    templateUrl: './interviewQuestion.component.html',
    styleUrls: ['./interviewQuestion.component.scss']
})

export class InterviewQuestionComponent implements OnInit, OnDestroy {
    questions: any;
    options: any;
    job_pro: any[];
    hide = false;
    dialogRef: MatDialogRef<any>;
    selectedJob: any;
    selectedAnswer = [];
    allansRecord: any;
    user_id: any;
    thankyou = false;
    temp: any;
    total: any;
    questionsAttemped = 0;
    timer: any;
    redAlert = false;
    totalQues = [];
    maxtime: any;
    notag: any;
    interval: any;
    contactHR: any;
    loading = true;
    isSubmitted = true;
    instructionsRead:boolean = false;
    instructions:Array<string> = instructions;
    disabled:boolean;
    // @HostListener('window:beforeunload', ['$event'])
    // onChange($event) {
    //     if (this.isSubmitted) {
    //         $event.returnValue = 'If you Reload your page, All your answers will be lost. Are you sure you want to do this?';
    //     }
    // }
    constructor(public dialog: MatDialog, private act_route: ActivatedRoute, private _mdSnackBar: MatSnackBar, private _apiService: ImapMailsService, private _router: Router, private _localStorageService: LocalStorageService) {
        this.user_id = this.act_route.snapshot.paramMap.get('id')
        if (!localStorage.getItem('token') || localStorage.getItem('user_id') !== this.user_id) {
            this._router.navigate(['/emailtestlogin']);
        }
        if (localStorage.getItem('thank') === 'true') {
            this.thankyou = true;
        }
    }
    ngOnInit() {
        if (!!this._localStorageService.getItem('QuestionsWithUserAnswers')) {
            this.selectedJob = localStorage.getItem('_idjob');
            this.hide = false;
            this.start(this.selectedJob);
        } else {
            this.getJobProfile();
        }
        // if (localStorage.getItem('sessionStart')) {
        // this.maxtime = parseInt(localStorage.getItem('maxtime'), 10);
        // this.hide = false;
        // this.selectedJob = localStorage.getItem('_idjob');
        // this.getQues();
        // } else {
        // this.maxtime = config.testMaxtime;
        // }
        if(this._localStorageService.getItem('instructions')!=null) {
            this.instructionsRead = this._localStorageService.getItem('instructions');
        }
    }
    ngOnDestroy() {
        // clearInterval(this.interval);
    }

    getJobProfile() {
        this._apiService.jobprofile({ 'fb_id': this.user_id }).subscribe(res => {
            if (res.status === 0) {
                this.loading = false;
                this.notag = true;
                this.contactHR = res.message;
            } else {
                if (res.length === 1) {
                    this.selectedJob = res[0].id;
                    localStorage.setItem('_idjob', this.selectedJob);
                    this.hide = false;
                    this.start(this.selectedJob);
                } else {
                    this.loading = false;
                    this.notag = false;
                    this.hide = true;
                    this.job_pro = res;
                }
            }
        }, err => { });
    }

    selected(job_id) {
        this.selectedJob = job_id;
        localStorage.setItem('_idjob', job_id);
    }

    getQues() {
        if (this.selectedJob) {
            this.start(this.selectedJob);
        } else {
            this._mdSnackBar.open('Please select Job profile', '', {
                duration: 2000,
            });
        }
    }

    start(id: any) {
        this.selectedAnswer = [];
        if (!!this._localStorageService.getItem('QuestionsWithUserAnswers')) {
            this.hide = false;
            this.loading = false;
            const res = this._localStorageService.getItem('QuestionsWithUserAnswers')
            this.questions = res.data;
            _.forEach(this.questions, (val, key) => {
                _.forEach(val.questions, (val1, key1) => {
                    this.totalQues.push(val1._id);
                    if (val1['selected']) {
                        this.selectedAnswer.push({ 'Q_id': val1['_id'], 'ans_id': val1['selected'] });
                        ++this.questionsAttemped;
                    }
                })
            })
            this.total = res.count;
            localStorage.setItem('sessionStart', 'true')
            // this.timerstart();
        } else {
            this._apiService.getQues(id).subscribe(res => {
                this.loading = false;
                if (res.data.length > 0) {
                    this._localStorageService.setItem('QuestionsWithUserAnswers', res);
                    this.hide = false;
                    this.questions = res.data;
                    _.forEach(this.questions, (val, key) => {
                        _.forEach(val.questions, (val1, key1) => {
                            this.totalQues.push(val1._id);
                            this.selectedAnswer.push({ 'Q_id': val1['_id'], 'ans_id': val1['selected'] });
                        })
                    })
                    this.total = res.count;
                    localStorage.setItem('sessionStart', 'true')
                    // this.timerstart();
                } else {
                    this._mdSnackBar.open('Test not available', '', {
                        duration: 2000,
                    });
                }
            }, err => {
                this.hide = true;
            });
        }
    }
    // timerstart() {
    //     this.interval = setInterval(() => {
    //         this.maxtime = this.maxtime - 1000;
    //         localStorage.setItem('maxtime', JSON.stringify(this.maxtime));
    //         let hours = Math.floor((this.maxtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         let minutes = Math.floor((this.maxtime % (1000 * 60 * 60)) / (1000 * 60));
    //         let seconds = Math.floor((this.maxtime % (1000 * 60)) / 1000);

    //         this.timer = hours + 'h ' + minutes + 'm ' + seconds + 's ';
    //         if (this.maxtime <= 0) {
    //             clearInterval(this.interval);
    //             localStorage.removeItem('maxtime');
    //             this.submit();
    //         }
    //     }, 1000);
    // }

    selectedAns(quesId: any, ansId: any) {
        this.selectedAnswer = [];
        const localQuestionsWithUserAnswers = this._localStorageService.getItem('QuestionsWithUserAnswers')
        localQuestionsWithUserAnswers['data'] = this.questions;
        this._localStorageService.clearItem('QuestionsWithUserAnswers');
        setTimeout(() => {
            this.questionsAttemped = 0;
            _.forEach(this.questions, (val, key) => {
                _.forEach(val.questions, (val1, key1) => {
                    if (val1['selected']) {
                        this.selectedAnswer.push({ 'Q_id': val1['_id'], 'ans_id': val1['selected'] });
                        ++this.questionsAttemped;
                    }
                })
            })
            this._localStorageService.setItem('QuestionsWithUserAnswers', localQuestionsWithUserAnswers);
        }, 100)
        // this.temp = { 'Q_id': quesId, 'ans_id': ansId };
        // if (this.selectedAnswer.length > 0 && this.filterdata(quesId)) {
        //     this.selectedAnswer.push(this.temp);
        // } else {
        //     this.selectedAnswer.push(this.temp);
        // }
    }

    // filterdata(quesId) {
    //     _.forEach(this.selectedAnswer, (val, key) => {
    //         if (val.Q_id === quesId) {
    //             this.selectedAnswer.splice(key, 1);
    //             return false;
    //         }
    //     });
    // }

    savePreview() {
        if (this.selectedAnswer.length > 0) {
            this.dialogRef = this.dialog.open(PreviewAnswerComponent, {
                height: '100%',
                width: '50%'
            });
            this.dialogRef.componentInstance.selectedAnswer = this.selectedAnswer;
            this.dialogRef.componentInstance.allQuestion = this.questions;

            this.dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.dialogRef = null;
                    this.thankyou = true;
                    this.submit();
                }
            });
        } else {
            this._mdSnackBar.open('Attempt atlest one Question', '', {
                duration: 2000,
            });
        }
    }

    scroll() {
        setTimeout(() => {
            if (document && document.getElementsByTagName('mat-sidenav-content').length > 0) {
                document.getElementsByTagName('mat-sidenav-content')[0].scrollTop = 50;
            }
        }, 100)
    }

    submit() {
        const startTime = new Date(JSON.parse(localStorage.getItem('start')));
        const endTime = new Date();
        const totalHours = (endTime.getHours() - startTime.getHours());
        const minutes = (endTime.getMinutes() - startTime.getMinutes());
        const totalMinutes = (totalHours * 60) + minutes;
        this.allansRecord = {
            'job_profile': this.selectedJob,
            'fb_id': this.user_id,
            'answers': this.selectedAnswer,
            'questionIds': this.totalQues,
            'taken_time_minutes': totalMinutes
        }
        this.isSubmitted = false;
        this._apiService.submitTest(this.allansRecord).subscribe(res => {
            // clearInterval(this.interval);
            setTimeout(() => {
                this.fblogout();
            }, 5000);
        }, err => {
            this.thankyou = false;
            this._mdSnackBar.open(err.message, '', {
                duration: 2000
            });
        });
    }
    fblogout() {
            localStorage.clear();
            this._router.navigate(['/emailtestlogin']);
    }
    onRead() {
        this.instructionsRead = true;
        this._localStorageService.setItem('instructions',this.instructionsRead);

    }
    onHelp() {
        this.disabled = true;
        this._apiService.helpMe({'fb_id': this.user_id,}).subscribe(res => {
            if(res.status ==1) {
                this.disabled = false;
                this._mdSnackBar.open('Please Wait! We have sent a message to HR.', '', {
                    duration: 4000,
                });
            }
        },err=> {
            this.disabled = false;
            this._mdSnackBar.open('Something went wrong, Please try agian.', '', {
                duration: 4000,
            });           
        })
    }
};
