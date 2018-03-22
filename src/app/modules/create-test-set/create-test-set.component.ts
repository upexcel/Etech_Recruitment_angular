import { Component, OnInit, group } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AllTestQuestionComponent } from './../all-test-question/all-test-question.component';
import _ = require('lodash');
import { config } from '../../config/config';

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
    private dialogRef: MatDialogRef<any>
    constructor(private dialogRef2: MatDialogRef<any>, private dialog: MatDialog, private _mdSnackBar: MatSnackBar, private apiCall: ImapMailsService) { }

    ngOnInit() {
        this.loading = true;
        this.testType = config['testType'];
        this.getTestGroup();
        this.setType(config['testType'][0]['type']);
        this.limit = [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 180 }, { time: 240 }];
    }
    setType(testType) {
        this.questions = [];
        this.selectedType = testType;
        if (testType === 'Subjective') {
            this.subjective = true
        } else {
            this.subjective = false
        }
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
        this.dialogRef.componentInstance.selectedType = this.selectedType;
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
        const questionId = []
        _.forEach(this.questions, (question, key) => {
            questionId.push(question._id);
        })
        if (form.valid) {
            if (this.selectedType !== 'Subjective') {
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
                    'timeForExam' : form.value.testLimit
                }
                this.finalCreate(data);
            } else {
                const data = {
                    'testName' : form.value.testName,
                    'Questions' : questionId,
                    'timeForExam' : form.value.testLimit
                }
                this.finalCreate(data);
            }
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
