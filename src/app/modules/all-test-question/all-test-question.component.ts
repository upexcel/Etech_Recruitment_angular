import { Component, OnInit } from '@angular/core';
import {config} from './../../config/config';
import * as _ from 'lodash'
import { ImapMailsService } from 'app/service/imapemails.service';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-all-test-question',
    templateUrl: './all-test-question.component.html',
    styleUrls: ['./all-test-question.component.scss']
})
export class AllTestQuestionComponent implements OnInit {
    testType: any;
    questionType: any;
    questions: any;
    selectedType: any;
    loading: boolean;
    constructor(private dialogRef: MatDialogRef<any>, private apicall: ImapMailsService) { }

    ngOnInit() {
        this.getQues(this.selectedType);
    }

    getQues(questionType: any) {
        this.questionType = questionType;
        this.apicall.getQuesAdmin(questionType).subscribe(res => {
            this.questions = res.data;
            this.questions[0]['hidden'] = true;
        }, err => {
            this.loading = false;
        });
    }

    scroll() {
        window.scroll(0, 0);
    }
    selectParent(group) {
        group.selected = !group.selected;
        _.forEach(group.questions, (value, key) => {
            value.selected = group.selected;
        })
    }
    selectChild(ques) {
        ques.selected = !ques.selected;
    }
    getAllSelected() {
        const selectedData = [];
        if (this.questionType !== 'Subjective') {
            _.forEach(this.questions, (group, key) => {
                _.forEach(group.questions, (child, childkey) => {
                    if (child.selected) {
                        selectedData.push(child)
                    }
                });
            });
        } else {
            _.forEach(this.questions, (ques, key) => {
                if (ques.selected) {
                    selectedData.push(ques);
                }
            });
        }
        this.dialogRef.close(selectedData);
    }
    selectSubjective(ques) {
        ques.selected = !ques.selected;
    }
}
