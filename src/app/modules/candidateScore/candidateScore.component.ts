import { Component, OnInit } from '@angular/core';
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
    constructor(private _getScore: ImapMailsService, private _mdSnackBar: MdSnackBar, public dialog: MdDialog, private _dialogService: DialogService) { }

    ngOnInit() {
        const blankscore = {};
        this.getScore(blankscore);
    }

    getScore(data) {
        this._getScore.score(data).subscribe(res => {
            console.log(res);
            this.scores = res;
        },
        err => {
            console.log(err);
        });
    }
    searchScorelist(searchform: NgForm) {
        console.log(searchform.value);
        if (searchform.valid) {
            // if (!!searchform.value['currentTag']) {
            //     if (this.data['is_attach']) {
            //         this.data = {
            //             'page': 1,
            //             'tag_id': this.emailParentId,
            //             'default_id': this.emailChildId,
            //             'limit': 100,
            //             'type': searchform.value['option'],
            //             'keyword': searchform.value['keyword'],
            //             'selected': searchform.value['currentTag'],
            //             'is_attach': this.data['is_attach']
            //         };
            //     } else {
            //         this.data = {
            //             'page': 1,
            //             'tag_id': this.emailParentId,
            //             'default_id': this.emailChildId,
            //             'limit': 100,
            //             'type': searchform.value['option'],
            //             'keyword': searchform.value['keyword'],
            //             'selected': searchform.value['currentTag']
            //         };
            //     }
            // } else {
            //     this.data = {
            //         'page': 1,
            //         'limit': 100,
            //         'type': searchform.value['option'],
            //         'keyword': searchform.value['keyword'],
            //         'selected': searchform.value['currentTag']
            //     };
            // }
            // this.loading = true;
            // this.showmessage = false;
            // this.getemails.getEmailList(this.data).subscribe((data) => {
            //     if (data.data.length > 0) {
            //         this.addSelectedFieldInEmailList(data);
            //         this.emailIds = [];
            //         this.loading = false;
            //     } else {
            //         this.message = data.message;
            //         this.showmessage = true;
            //         this.emaillist = [];
            //         this.loading = false;
            //     }
            // });
        }
    }
}
