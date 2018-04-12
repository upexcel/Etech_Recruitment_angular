import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';
import { inputBox, config } from '../../config/config';

@Component({
    selector: 'app-addquestion-dialog',
    templateUrl: './addQuestionDialog.component.html',
    styleUrls: ['./addQuestionDialog.component.scss'],
})
export class AddQuestionDialogComponent implements OnInit {
    tags: any[];
    job_profile: any;
    question: any;
    answer: any;
    opt1: any;
    opt2: any;
    opt3: any;
    opt4: any;
    opt5: any;
    ans_id: any;
    answerOpt: any;
    options = [];
    message: string;
    showmessage: boolean;
    questionEditable: any;
    editabledialog = false;
    questionId: any;
    testType = [];
    questionType: any;
    examgroup = [];
    examId: any;
    count = 2;
    inputbox = [];
    desc: any;
    subjective: boolean;
    difficultyLable = false;
    constructor(private dialogRef: MatDialogRef<any>, private getTags: ImapMailsService) {
    }
    ngOnInit() {
        this.inputbox = JSON.parse(JSON.stringify(inputBox))
        this.testType = config['testType'];
        this.getExamGroup();
        if (this.questionEditable) {
            if (this.questionEditable.questionType === 'Subjective') {
                this.subjective = true;
                this.questionId = this.questionEditable._id;
                this.question = this.questionEditable.question;
                this.examId = this.questionEditable.exam_subject;
                this.questionType = this.questionEditable.questionType;
            } else {
                this.questionId = this.questionEditable._id;
                this.question = this.questionEditable.question;
                this.answer = this.questionEditable.answer;
                this.examId = this.questionEditable.exam_subject;
                this.desc = this.questionEditable.description;
                this.ans_id = this.questionEditable.answer;
                this.editabledialog = true;
                this.inputbox = this.questionEditable.options;
                this.count = this.questionEditable.options.length;
                this.questionType = this.questionEditable.questionType;
                this.subjective = false;
                this.difficultyLable = this.questionEditable.hard ? this.questionEditable.hard : false;
            }
        } else {
            if (this.questionType === 'Subjective') {
                this.subjective = true;
            } else {
                this.subjective = false;
            }
        }

    }
    add() {
        this.count++;
        this.inputbox.push({ 'option': '', 'opt_id': this.count })
    }
    selectedType(type) {
        this.questionType = type;
        if (this.questionType === 'Subjective') {
            this.subjective = true;
        } else {
            this.subjective = false;
        }
    }
    remove(id) {
        this.count--;
        this.inputbox.splice(id, 1)
    }
    getExamGroup() {
        this.getTags.examGroup()
            .subscribe((data) => {
                this.examgroup = data;
            }, (err) => {
            });
    }
    close() {
    }
    answerRight(val) {
        this.ans_id = val.value;
    }
    createQues(form: NgForm) {
        let quesdata;
        if (form.valid) {
            if (!this.subjective) {
                quesdata = {
                    'questionType': this.questionType,
                    'question': form.value.question,
                    'description': form.value.desc,
                    'answer': parseInt(this.ans_id, 10),
                    'exam_subject': form.value.examId,
                    'options': this.inputbox,
                    'hard': form.value.difficulty
                };
            } else {
                quesdata = {
                    'questionType': this.questionType,
                    'question': form.value.question,
                    'exam_subject': form.value.examId,
                };
            }
        }
        this.showmessage = false;
        if (this.questionEditable) {
            this.getTags.updateQues(quesdata, this.questionId).subscribe(res => {
                this.showmessage = false;
                this.dialogRef.close(res);
            }, err => {
                this.showmessage = true;
                this.message = err.message;
            });
        } else {
            this.getTags.creteQues(quesdata).subscribe(res => {
                this.showmessage = false;
                this.dialogRef.close(res);
            }, err => {
                this.showmessage = true;
                this.message = err.message;
            });
        }
    }
}
