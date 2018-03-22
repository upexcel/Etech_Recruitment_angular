import { Component, OnInit } from '@angular/core';
import {config} from './../../config/config';
import * as _ from 'lodash'
import { ImapMailsService } from 'app/service/imapemails.service';

@Component({
    selector: 'app-all-test-question',
    templateUrl: './all-test-question.component.html',
    styleUrls: ['./all-test-question.component.scss']
})
export class AllTestQuestionComponent implements OnInit {
    testType: any;
    questionType: any;
    questions: any;
    loading: boolean;
    constructor(private apicall: ImapMailsService) { }

    ngOnInit() {
        this.testType = config['testType'];
        this.getQues(this.testType[0]['type']);
    }

    getQues(questionType: any) {
        this.questionType = questionType;
        this.apicall.getQuesAdmin(questionType).subscribe(res => {
            this.questions = res.data;
        }, err => {
            this.loading = false;
        });
    }

    scroll() {
        window.scroll(0, 0);
    }
    selectParent(group) {
        console.log(group);
        group.selected = !group.selected;
        _.forEach(group.questions, (value, key) => {
            console.log(value)
            value.selected = group.selected;
        })
    }
    selectChild(ques) {
        ques.selected = !ques.selected;
        console.log(ques)
    }

}
