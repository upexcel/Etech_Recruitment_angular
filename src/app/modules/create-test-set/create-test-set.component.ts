import { Component, OnInit, group } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
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
    testType: any[];
    selectedType: any;
    subjective: boolean;
    job_profile: any;
    showmessage = false;
    message: any;
    round = []
    roundId: any;
    updateTestData: any;
    updateData: any;
    jobProfile: any;
    randomQuestions: any;
    private dialogRef: MatDialogRef<any>
    constructor(private _commonService: CommonService, private dialogRefTestSet: MatDialogRef<CreateTestSetComponent>, private dialog: MatDialog, private _mdSnackBar: MatSnackBar, private apiCall: ImapMailsService) {
        dialogRefTestSet.disableClose = true;
    }

    ngOnInit() {
        this.loading = true;
        this.getTestGroup();
        this.getAllTag();
        this.limit = limitTime;
        if (this.updateTestData) {
            console.log(this.updateTestData);
            this.updateData = JSON.parse(JSON.stringify(this.updateTestData));
            this.testName = this.updateData.testName;
            this.testLimit = this.updateData.timeForExam;
            this.jobProfile = this.updateData.job_profile;
            this.roundId = this.updateData.round;
            this.randomQuestions = this.updateData.random_question;
        }
    }
    getAllTag() {
        this._commonService.getAllTag().then(res => {
            this.job_profile = res;
            if (this.job_profile.length > 0) {
                _.forEach(this.job_profile[0].subchild, (subchild, key3) => {
                    if (subchild.title === 'First Round' || subchild.title === 'Second Round') {
                        this.round.push(subchild);
                    }
                })
            }
        });
    }
    getTestGroup() {
        this.apiCall.examGroup()
            .subscribe((data) => {
                this.testGroup = data;
                if (this.updateData) { // test group limit for edit test and update
                    _.forEach(this.testGroup, (groupData, key) => {
                        _.forEach(this.updateData.SubjectQuestionLimits, (value, keyInner) => {
                            if (groupData.id === value.group_id) {
                                groupData.limit = value.limit
                            }
                        })
                    })
                } else { // test group limit for create new test
                    _.forEach(this.testGroup, (groupData, key) => {
                        groupData.limit = 0;
                    })
                }
                this.loading = false;
            }, (err) => {
                console.log(err)
            });
    }

    close() {
        this.dialogRefTestSet.close();
    }
    createQues(form: NgForm) {
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
                'SubjectQuestionLimits' : SubjectQuestionLimits,
                'timeForExam' : form.value.testLimit,
                'job_profile' : form.value.jobProfileId,
                'round' : form.value.roundId,
                'random_question' : form.value.random_question
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
            this.dialogRefTestSet.close(response);
        }, error => {
            this.message = error.message
            this.showmessage = true;
            console.log(error)
        });
    }
    updateTest(data) {
        this.apiCall.updateTestSet(data).subscribe(response => {
            this.dialogRefTestSet.close(response);
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
