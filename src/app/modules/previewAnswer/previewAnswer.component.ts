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
        _.forEach(this.selectedAnswer, (val, key) => {
            console.log(val);
            _.forEach(this.allQuestion, (val2, key2) => {
                console.log(val.Q_id === val2._id);
                if (val.Q_id === val2._id) {
                    val2['ans_id'] = val.ans_id
                    this.attemptedQues.push(val2);
                }
            });
        })
        console.log(this.attemptedQues);
    }
    close() {
        this.dialogRef.close();
    }
    submit() {
        this._dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this.dialogRef.close('final Submit');
            }
        }, (err) => {
            console.log(err);
        });
    }
}
