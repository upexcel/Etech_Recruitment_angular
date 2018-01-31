import { Component, OnInit} from '@angular/core';
import { MdDialogRef } from '@angular/material';
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
    attemptedQues= [];

    constructor(public dialogRef: MdDialogRef<any>, private _dialogService: DialogService) {
    }
    ngOnInit() {
       console.log(this.allQuestion, this.selectedAnswer)
        _.forEach(this.selectedAnswer, (val, key) => {
            console.log(val);
            _.forEach(this.allQuestion, (val2, key2) => {
                console.log(val2.questions);
                _.forEach(val2.questions, (val3, key3) => {
                    console.log(val3);
                    if (val.Q_id === val3._id) {
                        val3['ans_id'] = val.ans_id;
                        this.attemptedQues.push(val3);
                    }
                });
            });
        })
        console.log(this.attemptedQues);
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
            console.log(err);
        });
    }
}
