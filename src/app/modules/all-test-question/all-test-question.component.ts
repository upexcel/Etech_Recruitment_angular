import { Component, OnInit } from '@angular/core';
import {config} from './../../config/config';
import * as _ from 'lodash'
import { ImapMailsService } from 'app/service/imapemails.service';
import { MatDialogRef } from '@angular/material';
import { CommonService } from '../../service/common.service';

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
    subjective: boolean;
    selectedData = [];
    constructor(private dialogRef: MatDialogRef<any>, private apicall: ImapMailsService, private _commonService: CommonService) {
        dialogRef.disableClose = true;
    }

    ngOnInit() {
        this.loading = true;
        this.testType = config['testType'];
        this.getQues(config['testType'][0]['type']);
    }
    close() {
        this.dialogRef.close();
    }
    getQues(questionType: any) {
        this.loading = true;
        this.questionType = questionType;
        this.apicall.getQuesAdmin(questionType).subscribe(res => {
            this.questions = res.data;
            this.loading = false;
            if (res.questionType === 'Objective') {
                this.questions[0]['hidden'] = true;
            }
            this.questions = this._commonService.checkedItem(res.questionType, this.questions, this.selectedData);
        }, err => {
            this.loading = false;
        });
    }
    selectParent(group) {
        group.selected = !group.selected;
        _.forEach(group.questions, (value, key) => {
            value.selected = group.selected;
            if (value.selected) {
                this.checkDuplicateData(value);
            } else {
                if (this.selectedData.indexOf(value) !== -1) {
                    this.selectedData.splice(this.selectedData.indexOf(value), 1);
                }
            }
        })
    }
    checkDuplicateData(quest) {
        let flag = 0;
        _.forEach(this.selectedData, (data, keydata) => {
            if (data._id === quest._id) {
                flag = 1;
            }
        })
        if (flag === 0) {
            this.selectedData.push(quest);
        }
    }
    selectChild(ques) {
        ques.selected = !ques.selected;
        if (ques.selected) {
            this.checkDuplicateData(ques);
        } else {
            this.selectedData.splice(this.selectedData.indexOf(ques), 1);
        }

    }
    getAllSelected() {
        this.dialogRef.close(this.selectedData);
    }
    selectSubjective(ques) {
        ques.selected = !ques.selected;
        if (ques.selected) {
            this.selectedData.push(ques);
        } else {
            this.selectedData.splice(this.selectedData.indexOf(ques), 1);
        }
    }
}
