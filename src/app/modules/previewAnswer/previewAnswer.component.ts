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
    attempted: any;
    selectedAnswer: any;
    totalQuestion = 0;
    attemptedQues = 0;

    constructor(public dialogRef: MatDialogRef<any>, private _dialogService: DialogService) {
    }
    ngOnInit() {
        _.forEach(this.allQuestion, (val2, key2) => {
            val2['attempted'] = 0*1;
            _.forEach(val2.questions, (val3, key3) => {
                this.totalQuestion++;
                _.forEach(this.selectedAnswer, (val, key) => {
                    if (val.Q_id === val3._id) {
                        val2['attempted']++;
                    }
                });
            });
        });
        _.forEach(this.allQuestion, (data, key) => {
            this.attemptedQues = this.attemptedQues + data['attempted'];
        });

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
