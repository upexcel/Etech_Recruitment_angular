import { Component, OnInit, group } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AllTestQuestionComponent } from './../all-test-question/all-test-question.component';
import _ = require('lodash');
import { config } from '../../config/config';
import { CommonService } from '../../service/common.service';

@Component({
    selector: 'app-create-test-set',
    templateUrl: './create-test-set.component.html',
    styleUrls: ['./create-test-set.component.scss']
})
export class CreateTestSetComponent implements OnInit {
    testGroup: any[];
    loading: boolean;
    limit: any[];
    testLimit: any;
    testGroupId: any;
    testName: any;
    questions = [];
    testType: any[];
    selectedType: any;
    subjective: boolean;
    job_profile: any;
    round: any
    private dialogRef: MatDialogRef<any>
    constructor(private _commonService: CommonService, private dialogRef2: MatDialogRef<any>, private dialog: MatDialog, private _mdSnackBar: MatSnackBar, private apiCall: ImapMailsService) { }

    ngOnInit() {
        this.loading = true;
        this.getTestGroup();
        this.getAllTag();
        this.limit = [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 180 }, { time: 240 }];
    }
    getAllTag() {
        let data = JSON.parse(localStorage.getItem('allTags')).data;
        if (data.length > 0) {
            _.forEach(data, (value, key) => {
                if (value['title'] === 'candidate') {
                    this.job_profile = value.data;
                }
            })
        }
    }
    assignJobProfile(tag) {
        console.log(tag)
        this.round = [];
        _.forEach(tag.subchild, (subchild, key) => {
            console.log(subchild.id);
            if (subchild.title === 'First Round' || subchild.title === 'Second Round') {
                this.round.push(subchild);
            }
        })
    }
    getTestGroup() {
        this.apiCall.examGroup()
            .subscribe((data) => {
                this.testGroup = data;
                this.loading = false;
            }, (err) => {
                console.log(err)
            });
    }
    add() {
        this.dialogRef = this.dialog.open(AllTestQuestionComponent, {
            height: '80%',
            width: '80%'
        });
        this.dialogRef.componentInstance.selectedData = this.questions;
        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.questions = result
                this.dialogRef = null;
            }
        });
    }
    remove(index) {
        this.questions.splice(index, 1)
    }

    createQues(form: NgForm) {
      console.log(form.value)
        const questionId = [];
        _.forEach(this.questions, (question, key) => {
            questionId.push(question._id);
        })
        if (form.valid) {
            const SubjectQuestionLimits = [];
            _.forEach(this.testGroup, (groupData, key) => {
                _.forEach(form.value, (formvalue, formkey) => {
                    if (groupData.exam_subject == formkey){
                        SubjectQuestionLimits.push({'group_id' : groupData.id, 'limit': parseInt(form.value[formkey], 10)})
                    }
                })
            })
            const data = {
                'testName' : form.value.testName,
                'Questions' : questionId,
                'SubjectQuestionLimits' : SubjectQuestionLimits,
                'timeForExam' : form.value.testLimit,
                'job_profile' : form.value.jobProfileId,
                'round' : form.value.roundId
            }
            this.finalCreate(data);
        }
    }
    finalCreate(data) {
        this.apiCall.createTestSet(data).subscribe(response => {
            this.dialogRef2.close(response);
        }, error => {
            console.log(error)
        });
    }
    disableText(event) {
        return event.charCode >= 48 && event.charCode <= 57;
    }
}
