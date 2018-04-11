import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { LoginService } from '../../service/login.service';
import * as _ from 'lodash';
import { config } from './../../config/config';
import { DialogService } from '../../service/dialog.service';

@Component({
    selector: 'app-interviewques',
    templateUrl: './interviewQuestion.component.html',
    styleUrls: ['./interviewQuestion.component.scss']
})

export class InterviewQuestionComponent implements OnInit, OnDestroy {
    questions = [];
    options: any;
    job_pro: any[];
    hide = false;
    dialogRef: MatDialogRef<any>;
    job_profile: any;
    selectedAnswer = [];
    allansRecord: any;
    user_id: any;
    thankyou = false;
    temp: any;
    total: any;
    questionsAttempted = 0;
    timer: any;
    redAlert = false;
    totalQues = [];
    maxtime: any;
    notag: any;
    interval: any;
    contactHR: any;
    loading = true;
    isSubmitted = true;
    instructionsRead = false;
    instructions: String;
    disabled: boolean;
    timeExp: boolean;
    timerMin: any;
    testNotAvailable = false;
    isSubmit: boolean;
    errMessage: any;
    showMessage = false;
    subjective: boolean;
    totalQuestion = 0;
    timeForExam: any;
    // @HostListener('window:beforeunload', ['$event'])
    // onChange($event) {
    //     if (this.isSubmitted) {
    //         $event.returnValue = 'If you Reload your page, All your answers will be lost. Are you sure you want to do this?';
    //     }
    // }
    constructor(public dialog: MatDialog, private act_route: ActivatedRoute, private _mdSnackBar: MatSnackBar, private _apiService: ImapMailsService, private _router: Router, private _localStorageService: LocalStorageService, public _dialogService: DialogService) {
        this.user_id = this.act_route.snapshot.paramMap.get('id')
        if (!localStorage.getItem('token') || localStorage.getItem('user_id') !== this.user_id) {
            this._router.navigate(['/emailtestlogin']);
        }
        if (localStorage.getItem('thank') === 'true') {
            this.thankyou = true;
        }
    }
    ngOnInit() {
        // if (!!this._localStorageService.getItem('QuestionsWithUserAnswers')) {
        //     this.selectedJob = localStorage.getItem('_idjob');
        //     this.hide = false;
        // } else {
        //     this.getJobProfile();
        // }
        this.start(this.user_id);
        if (localStorage.getItem('sessionStart') && localStorage.getItem('maxtime') !== 'null') {
            this.maxtime = parseInt(localStorage.getItem('maxtime'), 10);
            this.hide = false;
            this.job_profile = localStorage.getItem('job_profile');
            if (localStorage.getItem('limitExpire')) {
                this.timeExp = true;
            }
            this.timerstart();
        }
        if (this._localStorageService.getItem('instructions') != null) {
            this.instructions = this._localStorageService.getItem('instructions');
        }
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }

    // getJobProfile() {
    //     this._apiService.jobprofile({ 'fb_id': this.user_id }).subscribe(res => {
    //       console.log(res);

    //         if (res.status === 0) {
    //             this.loading = false;
    //             this.notag = true;
    //             this.contactHR = res.message;
    //         } else {
    //             if (res.length === 1) {
    //                 this.selectedJob = res[0].id;
    //                 localStorage.setItem('_idjob', this.selectedJob);
    //                 this.hide = false;
    //                 this.start(this.user_id);
    //             } else {
    //                 this.loading = false;
    //                 this.notag = false;
    //                 this.hide = true;
    //                 this.job_pro = res;
    //             }
    //         }
    //     }, err => { });
    // }

    // selected(job_id) {
    //     this.selectedJob = job_id;
    //     localStorage.setItem('_idjob', job_id);
    // }

    // getQues() {
    //     if (this.selectedJob) {
    //         this.start(this.user_id);
    //     } else {
    //         this._mdSnackBar.open('Please select Job profile', '', {
    //             duration: 2000,
    //         });
    //     }
    // }

    start(id: any) {
        this.selectedAnswer = [];
        if (!!this._localStorageService.getItem('QuestionsWithUserAnswers')) {
            this.hide = false;
            this.loading = false;
            this.job_profile = localStorage.getItem("job_profile");
            const res = this._localStorageService.getItem('QuestionsWithUserAnswers')
            if (localStorage.getItem('roundType') === 'Subjective') {
                this.subjective = true;
            } else {
                this.subjective = false;
            }
            this.questions = res.data;
            _.forEach(this.questions, (val, key) => {
                _.forEach(val.questions, (val1, key1) => {
                    this.totalQues.push(val1._id);
                    if (val1['selected']) {
                        this.selectedAnswer.push({ 'Q_id': val1['_id'], 'ans_id': val1['selected'] });
                        ++this.questionsAttempted;
                    }
                })
            })
            this.total = res.count;
        } else {

            this._apiService.getQues(id).subscribe(res => {
                this.loading = false;
                if (res.data.length > 0) {
                    this._localStorageService.setItem('QuestionsWithUserAnswers', res);
                    this.hide = false;
                    this.showMessage = false;
                    this.questions = res.data;
                    this.timeForExam = res.timeForExam;
                    this.job_profile = res.job_profile
                    this.instructions = res.instructions.replace(new RegExp("\n", "g"), "<br>");
                    this._localStorageService.setItem('instructions', this.instructions);
                    localStorage.setItem('job_profile', this.job_profile);
                    if (res.roundType === 'Subjective') {
                        this.subjective = true;
                        localStorage.setItem('roundType', res.roundType);
                    } else {
                        this.subjective = false;
                    }
                    _.forEach(this.questions, (val, key) => {
                        _.forEach(val.questions, (val1, key1) => {
                            this.totalQues.push(val1._id);
                            // this.selectedAnswer.push({ 'Q_id': val1['_id'], 'ans_id': val1['selected'] });
                        })
                    })
                    this.total = res.count;
                    this.testNotAvailable = false;
                    this.timerstart()
                } else {
                    this.testNotAvailable = true;
                    setTimeout(() => {
                        this.start(this.user_id);
                    }, config.refreshTime);
                    clearInterval(this.interval);
                    this._mdSnackBar.open('Test not available', '', {
                        duration: 2000,
                    });
                }
            }, err => {
                console.log(err);
                this.loading = false;
                this.showMessage = true;
                this.errMessage = err.message
                this.hide = true;
            });
        }
    }
    timerstart() {
        this.interval = setInterval(() => {
            this.maxtime = this.maxtime - 1000;
            localStorage.setItem('maxtime', JSON.stringify(this.maxtime));
            const hours = Math.floor((this.maxtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((this.maxtime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((this.maxtime % (1000 * 60)) / 1000);

            this.timer = hours + 'h ' + minutes + 'm ' + seconds + 's ';
            this.timerMin = minutes + ' min ' + seconds + ' sec ';
            if (this.maxtime === 0) {
                if (!localStorage.getItem('limitExpire')) {
                    this._mdSnackBar.open('You time for taking the exam is over, Please submit all your questions in next 2minutes" and if in next 2mintues questions are not submitted. it will automatically submit', 'OK', {
                    });
                    this.maxtime = config.timeGrace;
                    this.timeExp = true;
                    localStorage.setItem('limitExpire', 'true');
                } else {
                    clearInterval(this.interval);
                    localStorage.removeItem('maxtime');
                    this.thankyou = true;
                    if (!this.subjective) {
                        this.submit();
                    } else {
                        this.fblogout();
                    }
                }
            }
        }, 1000);
    }

    selectedAns(quesId: any, ansId: any) {
        this.selectedAnswer = [];
        const localQuestionsWithUserAnswers = this._localStorageService.getItem('QuestionsWithUserAnswers')
        localQuestionsWithUserAnswers['data'] = this.questions;
        this._localStorageService.clearItem('QuestionsWithUserAnswers');
        setTimeout(() => {
            this.questionsAttempted = 0;
            _.forEach(this.questions, (val, key) => {
                _.forEach(val.questions, (val1, key1) => {
                    if (val1['selected']) {
                        this.selectedAnswer.push({ 'Q_id': val1['_id'], 'ans_id': val1['selected'] });
                        ++this.questionsAttempted;
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
            this.isSubmit = true;
            _.forEach(this.questions, (group, key2) => {
                group['attempted'] = 0;
                _.forEach(group.questions, (question, key3) => {
                    this.totalQuestion++;
                    _.forEach(this.selectedAnswer, (answer, key) => {
                        if (answer.Q_id === question._id) {
                            group['attempted']++;
                        }
                    });
                });
            });
        } else {
            this._mdSnackBar.open('Attempt at least one question before you submit the test ', '', {
                duration: 2000,
            });
        }
    }
    finalSubmit() {
        this._dialogService.confirmSubmitTestBox('You cannot change response after final Submit!  Are you sure to Continue?').then((res) => {
            if (res === 'yes') {
                this.submit();
                this.thankyou = true;
            }
        }, (err) => {
        });
    }
    goBack() {
        this.isSubmit = false;
        this.totalQuestion = 0;
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
            'job_profile': this.job_profile,
            'fb_id': this.user_id,
            'answers': this.selectedAnswer,
            'questionIds': this.totalQues,
            'taken_time_minutes': totalMinutes
        }
        this.isSubmitted = false;
        this._apiService.submitTest(this.allansRecord).subscribe(res => {
            clearInterval(this.interval);
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
        this.maxtime = this.timeForExam * 60000;
        localStorage.setItem('sessionStart', 'true');
        // this._localStorageService.setItem('instructions', this.instructionsRead);

    }
    onHelp() {
        this.disabled = true;
        this._apiService.helpMe({'fb_id': this.user_id, }).subscribe(res => {
            if (res.status === 1) {
                this.disabled = false;
                this._mdSnackBar.open('Please Wait! We have sent a message to HR.', '', {
                    duration: 4000,
                });
            }
        }, err => {
            this.disabled = false;
            this._mdSnackBar.open('Something went wrong, Please try agian.', '', {
                duration: 4000,
            });
        })
    }
};
