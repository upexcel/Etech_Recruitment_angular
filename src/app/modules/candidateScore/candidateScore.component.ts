import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatSnackBar, MatTableDataSource, MatDialogConfig, MatSort } from '@angular/material'; import { Router } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { PreviewScoreComponent } from '../previewScore/previewScore.component';
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
    detailedScore: any;
    dialogRef: MatDialogRef<any>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['from', 'sender_mail', 'exam_submit_date', 'examScore', 'action'];
    dataSource: any;
    constructor(private _getScore: ImapMailsService, private _mdSnackBar: MatSnackBar, public dialog: MatDialog) { }

    ngOnInit() {
        this.option = 'email';
        const blankscore = {};
        this.getScore(blankscore);
    }

    getScore(data) {
        this._getScore.score(data).subscribe(res => {
            this.scores = res;
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        },
            err => {
            });
    }
    getDetailedScore(data) {
        this.dialogRef = this.dialog.open(PreviewScoreComponent, {
            height: '100%',
            width: '50%'
        });
        this.dialogRef.componentInstance.fb_id = data.fb_id;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
        });
    }
    searchScorelist(searchform: NgForm) {

        this.option = searchform.value['option'];
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
