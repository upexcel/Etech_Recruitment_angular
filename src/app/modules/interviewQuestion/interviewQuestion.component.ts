import { Component, OnInit } from '@angular/core';
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
    temp: any;
    constructor(public dialog: MdDialog, private act_route: ActivatedRoute, private _mdSnackBar: MdSnackBar, private getTags: ImapMailsService, private _router: Router) {
        this.user_id = this.act_route.snapshot.paramMap.get('id')
        if (!localStorage.getItem('token')) {
            this._router.navigate(['/login']);
        }
        this.hide = true;
        this.getTags.jobprofile().subscribe(res => {
            this.job_pro = res;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
            // this.user_id=this.act_route.snapshot.paramMap.get('id')
        console.log(this.user_id);
    }
    selected(job_id) {
        this.selectedJob = job_id;
    }
    getQues() {
        if (this.selectedJob) {
            this.getTags.getQues(this.selectedJob).subscribe(res => {
                this.hide = false;
                this.questions = res.data;
            }, err => {
                console.log(err);
                this.hide = true;
            });
        } else {
            this._mdSnackBar.open('Please select Job profile', '', {
                duration: 2000,
            });
        }
    }

    selectedAns(quesId: any, ansId: any) {
        console.log(quesId, ansId)
        this.temp = { 'Q_id': quesId, 'ans_id': ansId };
        if (this.selectedAnswer.length > 0 && this.filterdata(quesId)) {
            this.selectedAnswer.push(this.temp);
        } else {
            this.selectedAnswer.push(this.temp);
        }
        console.log(this.selectedAnswer);
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
        this.dialogRef = this.dialog.open(PreviewAnswerComponent, {
            height: '100%',
            width: '50%'
        });
        this.dialogRef.componentInstance.selectedAnswer = this.selectedAnswer;
        this.dialogRef.componentInstance.allQuestion = this.questions;

        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._mdSnackBar.open(result, '', {
                    duration: 2000,
                });
                this.dialogRef = null;
                this.submit();
            }
        });
    }
    submit() {
        this.allansRecord = {
            'job_profile': this.selectedJob,
            'user_id': this.user_id,
            'answers': this.selectedAnswer
        }
        this.getTags.submitTest(this.allansRecord).subscribe(res => {
            console.log(res);
            this._mdSnackBar.open(res.message, '', {
                duration: 2000,
            });
        }, err => {
            console.log(err);
        });
    }
};
