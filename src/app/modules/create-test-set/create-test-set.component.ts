import { Component, OnInit, group } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AllTestQuestionComponent } from './../all-test-question/all-test-question.component';
import * as _ from 'lodash';
import { config, limitTime } from '../../config/config';
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
    showmessage = false;
    message: any;
    round = []
    roundId: any;
    updateData: any;
    jobProfile: any;
    private dialogRef: MatDialogRef<any>
    constructor(private _commonService: CommonService, private dialogRef2: MatDialogRef<any>, private dialog: MatDialog, private _mdSnackBar: MatSnackBar, private apiCall: ImapMailsService) { }

    ngOnInit() {
        this.loading = true;
        this.getTestGroup();
        this.getAllTag();
        this.limit = limitTime;
        if (this.updateData) {
            this.updateData = JSON.parse(JSON.stringify(this.updateData));
            this.apiCall.getTestPaperById(this.updateData._id).subscribe(res => {
                this.questions = res.data.Questions;
            }, err => {

            })
            this.testName = this.updateData.testName;
            this.testLimit = this.updateData.timeForExam;
            this.jobProfile = this.updateData.job_profile;
            this.roundId = this.updateData.round;
        }
    }
    getAllTag() {
        const data = JSON.parse(localStorage.getItem('allTags')).data;
        if (data.length > 0) {
            _.forEach(data, (value, key) => {
                if (value['title'] === 'candidate') {
                    this.job_profile = value.data;
                    if (this.job_profile.length > 0) {
                        _.forEach(this.job_profile[0].subchild, (subchild, key3) => {
                            if (subchild.title === 'First Round' || subchild.title === 'Second Round') {
                                this.round.push(subchild);
                            }
                        })
                    }
                }
            })
        }
    }
    getTestGroup() {
        this.apiCall.examGroup()
            .subscribe((data) => {
                this.testGroup = data;
                if (this.updateData) { // test group limit for edit test and update
                    _.forEach(this.testGroup, (groupData, key) => {
                        _.forEach(this.updateData.SubjectQuestionLimits, (value, keyInner) =>{
                            if (groupData.id === value.group_id) {
                                groupData.limit = value.limit
                            }
                        })
                    })
                } else { // test group limit for create new test
                    _.forEach(this.testGroup, (groupData, key) => {
                        groupData.limit = '';
                    })
                }
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
        const questionId = [];
        _.forEach(this.questions, (question, key) => {
            questionId.push(question._id);
        })
        if (form.valid) {
            const SubjectQuestionLimits = [];
            _.forEach(this.testGroup, (groupData, key) => {
                _.forEach(form.value, (formvalue, formkey) => {
                    if (groupData.exam_subject === formkey) {
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
            if (!this.updateData) {
                this.createTest(data);
            } else {
                data['_id'] = this.updateData['_id'],
                data['interviewId'] = this.updateData['interviewId']
                this.updateTest(data);
            }
        }
    }
    createTest(data) {
        this.apiCall.createTestSet(data).subscribe(response => {
            this.dialogRef2.close(response);
        }, error => {
            this.message = error.message
            this.showmessage = true;
            console.log(error)
        });
    }
    updateTest(data) {
        this.apiCall.updateTestSet(data).subscribe(response => {
            this.dialogRef2.close(response);
        }, error => {
            this.message = error.message
            this.showmessage = true;
            console.log(error)
        });
    }
    disableText(event) {
        return event.charCode >= 48 && event.charCode <= 57;
    }
}
