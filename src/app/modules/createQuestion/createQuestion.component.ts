import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { DialogService } from './../../service/dialog.service';
import { AddQuestionDialogComponent } from '../addQuestionDialog/addQuestionDialog.component';
import * as _ from 'lodash';
import {config} from './../../config/config';

@Component({
    selector: 'app-createquestion',
    templateUrl: './createQuestion.component.html',
    styleUrls: ['./createQuestion.component.scss']
})
export class CreateQuestionComponent implements OnInit {
    loading = false;
    dialogRef: MatDialogRef<any>;
    tags: any[];
    questions: any[];
    showmessage = false;
    message: any;
    questionEdited: any;
    group: any;
    jobprofile_tag = [];
    add = false;
    panelOpenState = false;
    QueNotAvailable = false;
    messageQues: any;
    testType: any;
    questionType: any;
    constructor(private getTags: ImapMailsService, private _mdSnackBar: MatSnackBar, public dialog: MatDialog, private _dialogService: DialogService) { }

    ngOnInit() {
        this.loading = true;
        this.testType = config['testType'];
        this.getQues(this.testType[0]['type']);
    }

    getQues(questionType: any) {
        this.add = true;
        this.questionType = questionType;
        this.getTags.getQuesAdmin(questionType).subscribe(res => {
            this.questions = res.data;
            if (res.data.length === 0) {
                this.QueNotAvailable = true;
                this.messageQues = 'Questions Not Available';
            } else {
                this.QueNotAvailable = false;
            }
        }, err => {
            this.loading = false;
        });
    }
    scroll() {
        window.scroll(0, 0);
    }
    addQues() {
        this.dialogRef = this.dialog.open(AddQuestionDialogComponent, {
            height: '100%',
            width: '40%'
        });
        this.dialogRef.componentInstance.questionType = this.questionType;
        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._mdSnackBar.open(result.message, '', {
                    duration: 2000,
                });
                this.dialogRef = null;
                this.getQues(this.questionType);
            }
        });
    }
    editQues(id: any) {
        this.getTags.getQuesByid(id).subscribe(res => {
            this.questionEdited = res.data;
            this.dialogRef = this.dialog.open(AddQuestionDialogComponent, {
                height: '100%',
                width: '40%'
            });
            this.dialogRef.componentInstance.questionEditable = this.questionEdited;
            this.dialogRef.componentInstance.questionType = this.questionType;
            this.dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this._mdSnackBar.open(result.mesage, '', {
                        duration: 2000,
                    });
                    this.dialogRef = null;
                    this.getQues(this.questionType);
                }
            });
        }, err => {
            this.loading = false;
        });
    };

    delQues(id: any) {
        this._dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this.getTags.deleteQueByid(id).subscribe(resp => {
                    this.getQues(this.questionType);
                }, err => {
                });
            }
        }, (err) => {
        });

    };
    createGroup(form: NgForm) {
        this.showmessage = false;
        if (form.value.group) {
            const data = { 'exam_subject': form.value.group };
            this.getTags.createGroup(data).subscribe(resp => {
                this._mdSnackBar.open('Group created Sucessfully', '', {
                    duration: 2000
                });
                form.reset();
                this.getQues(this.questionType);
            }, err => {
                this.message = err.message;
                this.showmessage = true;
            });
        } else {
            this.message = 'Invalid Name';
            this.showmessage = true;
        }
    }

}
