import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { LoginService } from '../../service/login.service';

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
    selectedJob: any;
    constructor(private _localStorageService: LocalStorageService, private getTags: ImapMailsService, private access: LoginService, private _router: Router) {
        if (!this._localStorageService.getItem('token')) {
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

    }
    selected(job_id) {
        this.selectedJob = job_id;
    }
    getQues() {
        this.getTags.getQues(this.selectedJob).subscribe(res => {
            this.hide = false;
            this.questions = res.data;
        }, err => {
            console.log(err);
            this.hide = true;
        });
    }
};
