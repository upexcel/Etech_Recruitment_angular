import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { DialogService } from './../../service/dialog.service';
import { AddQuestionDialogComponent } from '../addQuestionDialog/addQuestionDialog.component';
import * as _ from 'lodash';

@Component({
    selector: 'app-candidate-score',
    templateUrl: './candidateScore.component.html',
    styleUrls: ['./candidateScore.component.scss']
})
export class CandidateScoreComponent implements OnInit {
    scores: any;
    keyword: any;
    start_date: any;
    option: any;
    end_date: any;
    constructor(private _getScore: ImapMailsService, private _ngzone: NgZone, private _mdSnackBar: MdSnackBar, public dialog: MdDialog, private _dialogService: DialogService) { }

    ngOnInit() {
        const blankscore = {};
        this.getScore(blankscore);
    }

    getScore(data) {
        this._getScore.score(data).subscribe(res => {
            this._ngzone.run(() => {
                this.scores = res;
            });
        },
        err => {
        });
    }
    searchScorelist(searchform: NgForm) {

        this.option = searchform.value['option'];
        // this.key = searchform.value['keyword'];
        if (searchform.valid) {
            let dataS;
            if (this.option === 'name') {
                dataS = { search_type: this.option, name: this.keyword };
            }
            if (this.option === 'email') {
                dataS = { search_type: this.option, user_email: this.keyword };
            }
            if (this.option === 'date') {
                dataS = { search_type: this.option, start_date: this.start_date, end_date: this.end_date };
            }
            this.getScore(dataS);
        }
    }
}
