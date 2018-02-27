import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DialogService } from './../../service/dialog.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-previewanswer',
    templateUrl: './previewAnswer.component.html',
    styleUrls: ['./previewAnswer.component.scss'],
})
export class PreviewAnswerComponent implements OnInit {
    allQuestion: any;
    selectedAnswer: any;
    attemptedQues = [];

    constructor(public dialogRef: MatDialogRef<any>, private _dialogService: DialogService) {
    }
    ngOnInit() {
        _.forEach(this.selectedAnswer, (val, key) => {
            _.forEach(this.allQuestion, (val2, key2) => {
                _.forEach(val2.questions, (val3, key3) => {
                    if (val.Q_id === val3._id) {
                        val3['ans_id'] = val.ans_id;
                        this.attemptedQues.push(val3);
                    }
                });
            });
        })
    }
    close() {
        this.dialogRef.close();
    }
    submit() {
        this._dialogService.confirmSubmitTestBox('You cannot change response after final Submit!  Are you sure to Continue?').then((res) => {
            if (res === 'yes') {
                this.dialogRef.close('final Submit');
            }
        }, (err) => {
        });
    }
}
