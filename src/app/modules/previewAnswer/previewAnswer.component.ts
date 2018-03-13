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
    questionsAttemped: any;

    constructor(public dialogRef: MatDialogRef<any>, private _dialogService: DialogService) {
    }
    ngOnInit() {
        _.forEach(this.allQuestion, (group, key2) => {
            group['attempted'] = 0;
            _.forEach(group.questions, (question, key3) => {
                this.totalQuestion++;
                _.forEach(this.selectedAnswer, (answer, key) => {
                    if (answer.Q_id === question._id) {
                        group['attempted']++;
                    }
                });
            });
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
