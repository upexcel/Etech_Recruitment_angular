import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { DialogService } from './../../service/dialog.service';
import { AddQuestionDialogComponent } from '../addQuestionDialog/addQuestionDialog.component';
import * as _ from 'lodash';

@Component({
    selector: 'app-createquestion',
    templateUrl: './createQuestion.component.html',
    styleUrls: ['./createQuestion.component.scss']
})
export class CreateQuestionComponent implements OnInit {
    loading = false;
    dialogRef: MdDialogRef<any>;
    tags: any[];
    questions: any[];
    selectedJobid: any;
    questionEdited: any;
    constructor(private getTags: ImapMailsService, private _mdSnackBar: MdSnackBar, public dialog: MdDialog, private _dialogService: DialogService) { }

    ngOnInit() {
        this.loading = true;
        this.getAllTag();
    }

    getAllTag() {
        this.getTags.getAllTags()
            .subscribe((data) => {
                this.formatTagsInArray(data);
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
    }

    formatTagsInArray(data: any) {
        this.tags = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === 'Default') {
                if (!this.tags['Default']) {
                    this.tags['Default'] = [];
                    this.tags['Default'].push(data[i]);
                } else {
                    this.tags['Default'].push(data[i]);
                }
            } else if (data[i].type === 'Manual') {
                if (!this.tags['Manual']) {
                    this.tags['Manual'] = [];
                    this.tags['Manual'].push(data[i]);
                } else {
                    this.tags['Manual'].push(data[i]);
                }
            } else if (data[i].type === 'Automatic') {
                if (!this.tags['Automatic']) {
                    this.tags['Automatic'] = [];
                    this.tags['Automatic'].push(data[i]);
                } else {
                    this.tags['Automatic'].push(data[i]);
                }
            }
        }
        if (this.tags['Automatic']) {
            _.forEach(this.tags['Automatic'], (val, key) => {
                if (!val.is_job_profile_tag) {
                    this.tags['Automatic'].splice(key, 1);
                }
            })
        }
        this.loading = false;
    }
    getQues(job_id: any) {
        this.selectedJobid = job_id;
        this.getTags.getQues(job_id).subscribe(res => {
            this.questions = res.data;
        }, err => {
            console.log(err);
            this.loading = false;
        });
    }
    addQues() {
        this.dialogRef = this.dialog.open(AddQuestionDialogComponent, {
            height: '100%',
            width: '40%'
        });

        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._mdSnackBar.open(result.message, '', {
                    duration: 2000,
                });
                this.dialogRef = null;
                this.getQues(this.selectedJobid);
            }
        });
    }
    editQues(id: any) {
        this.getTags.getQuesByid(id).subscribe(res => {
          console.log(res);
            this.questionEdited = res.data;
            this.dialogRef = this.dialog.open(AddQuestionDialogComponent, {
                height: '100%',
                width: '40%'
            });
            this.dialogRef.componentInstance.questionEditable = this.questionEdited;

            this.dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this._mdSnackBar.open(result.mesage, '', {
                        duration: 2000,
                    });
                    this.dialogRef = null;
                    this.getQues(this.selectedJobid);
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
                    this.getQues(this.selectedJobid);
                }, err => {
                    console.log(err);
                });
            }
        }, (err) => {
            console.log(err);
        });

    };

}