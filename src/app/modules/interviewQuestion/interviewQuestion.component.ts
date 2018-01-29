import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { LoginService } from '../../service/login.service';
import * as _ from 'lodash';
import { PreviewAnswerComponent } from '../previewAnswer/previewAnswer.component';
declare const FB: any;
@Component({
    selector: 'app-interviewques',
    templateUrl: './interviewQuestion.component.html',
    styleUrls: ['./interviewQuestion.component.scss']
})
export class InterviewQuestionComponent implements OnInit {
    questions: any;
    options: any;
    job_pro: any [];
    hide: boolean;
    dialogRef: MdDialogRef<any>;
    selectedJob: any;
    selectedAnswer= [];
    allansRecord: any;
    user_id: any;
    thankyou = false;
    temp: any;
    total: any;
    constructor(public dialog: MdDialog, private act_route: ActivatedRoute, private _mdSnackBar: MdSnackBar, private getTags: ImapMailsService, private _router: Router) {
        this.user_id = this.act_route.snapshot.paramMap.get('id')
        if (!localStorage.getItem('token') || localStorage.getItem('user_id') !== this.user_id ) {
            this._router.navigate(['/candidatelogin']);
        }
        if (localStorage.getItem('thank') === 'true') {
            this.thankyou = true;
        }
        this.hide = true;
        this.getTags.jobprofile().subscribe(res => {
            this.job_pro = res;
        }, err => {
        });
    }
    ngOnInit() {
            // this.user_id=this.act_route.snapshot.paramMap.get('id')
    }
    selected(job_id) {
        this.selectedJob = job_id;
    }
    getQues() {
        if (this.selectedJob) {
            this.getTags.getQues(this.selectedJob).subscribe(res => {
                if (res.data.length > 0) {
                    this.hide = false;
                    this.questions = res.data;
                    this.total = res.count;
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
            this.thankyou = true;
            setTimeout(() => {
                FB.logout((result) => {
                    this._router.navigate(['/candidatelogin']);
                    localStorage.clear();
                })
            }, 10000)
        }, err => {
            this._mdSnackBar.open(err.message, '', {
                duration: 2000
            });
        });
    }
};
