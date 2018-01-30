import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { LoginService } from '../../service/login.service';
import * as _ from 'lodash';
import { PreviewAnswerComponent } from '../previewAnswer/previewAnswer.component';
@Component({
    selector: 'app-interviewques',
    templateUrl: './interviewQuestion.component.html',
    styleUrls: ['./interviewQuestion.component.scss']
})
export class InterviewQuestionComponent implements OnInit, OnDestroy {
    questions: any;
    options: any;
    job_pro: any [];
    hide= true;
    dialogRef: MdDialogRef<any>;
    selectedJob: any;
    selectedAnswer= [];
    allansRecord: any;
    user_id: any;
    thankyou = false;
    temp: any;
    total: any;
    timer: any;
    redAlert= false;
    maxtime = 7200000;
    notag: any;
    interval: any;
    contactHR: any;
    constructor(public dialog: MdDialog, private act_route: ActivatedRoute, private _mdSnackBar: MdSnackBar, private getTags: ImapMailsService, private _router: Router) {
        this.user_id = this.act_route.snapshot.paramMap.get('id')
        if (!localStorage.getItem('token') || localStorage.getItem('user_id') !== this.user_id ) {
            this._router.navigate(['/candidatelogin']);
        }
        if (localStorage.getItem('thank') === 'true') {
            this.thankyou = true;
        }
        this.getTags.jobprofile({'fb_id': this.user_id}).subscribe(res => {
            if (res.status === 0) {
                this.notag = true;
                this.contactHR = res.message;
                console.log(res)
            }else {
                console.log(res);
                this.job_pro = res;
            }
        }, err => {});
    }
    ngOnInit() {
        if (localStorage.getItem('maxtime')) {
            this.maxtime = parseInt(localStorage.getItem('maxtime'), 10);
            this.hide = false;
            this.selectedJob = localStorage.getItem('_idjob');
            this.getQues();
        }
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
    selected(job_id) {
        this.selectedJob = job_id;
        localStorage.setItem('_idjob', job_id);
    }
    getQues() {
        if (this.selectedJob) {
            this.getTags.getQues(this.selectedJob).subscribe(res => {
                if (res.data.length > 0) {
                    this.hide = false;
                    this.questions = res.data;
                    this.total = res.count;
                    this.timerstart();
                } else {
                    this._mdSnackBar.open('Test not available', '', {
                        duration: 2000,
                    });
                }
            }, err => {
                this.hide = true;
            });
        } else {
            this._mdSnackBar.open('Please select Job profile', '', {
                duration: 2000,
            });
        }
    }

    timerstart() {
        this.interval = setInterval(() => {
            this.maxtime = this.maxtime - 1000;
            localStorage.setItem('maxtime', JSON.stringify(this.maxtime));
            let hours = Math.floor((this.maxtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((this.maxtime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((this.maxtime % (1000 * 60)) / 1000);

            this.timer = hours + 'h ' + minutes + 'm ' + seconds + 's ';
            console.log(this.timer);
            if (this.maxtime <= 0) {
                clearInterval(this.interval);
                localStorage.removeItem('maxtime');
                this.submit();
            }
        }, 1000);
        console.log(this.timer, this.maxtime);
    }

    selectedAns(quesId: any, ansId: any) {
        this.temp = { 'Q_id': quesId, 'ans_id': ansId };
        if (this.selectedAnswer.length > 0 && this.filterdata(quesId)) {
            this.selectedAnswer.push(this.temp);
        } else {
            this.selectedAnswer.push(this.temp);
        }
    }
    filterdata(quesId) {
        _.forEach(this.selectedAnswer, (val, key) => {
            if (val.Q_id === quesId) {
                this.selectedAnswer.splice(key, 1);
                return false;
            }
        });
    }
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
                    this.submit();
                }
            });
        } else {
            this._mdSnackBar.open('Attempt atlest one Question', '', {
                duration: 2000,
            });
        }
    }
    submit() {
        this.allansRecord = {
            'job_profile': this.selectedJob,
            'fb_id': this.user_id,
            'answers': this.selectedAnswer
        }
        this.getTags.submitTest(this.allansRecord).subscribe(res => {
            this._mdSnackBar.open(res.message, '', {
                duration: 2000,
            });
            clearInterval(this.interval);
            this.thankyou = true;
            setTimeout(() => {
                this._router.navigate(['/candidatelogin']);
                localStorage.clear();
            }, 10000);
        }, err => {
            this._mdSnackBar.open(err.message, '', {
                duration: 2000
            });
        });
    }
};
