import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { CreateTestSetComponent } from './../create-test-set/create-test-set.component'
import { ImapMailsService } from '../../service/imapemails.service';
import * as _ from 'lodash';
import { DialogService } from '../../service/dialog.service';
import { CommonService } from '../../service/common.service';
import { testTableHeader } from '../../config/config';
import { ViewTestPaperComponent } from '../view-test-paper/view-test-paper.component';

@Component({
    selector: 'app-test-sets',
    templateUrl: './test-sets.component.html',
    styleUrls: ['./test-sets.component.scss']
})
export class TestSetsComponent implements OnInit {
    private dialogRef: MatDialogRef<any>
    dataSource = [];
    job_profile: any;
    round: any;
    displayedColumns: any;
    constructor(private _dialogService: DialogService, private dialog: MatDialog, private _mdSnackBar: MatSnackBar, private apiCall: ImapMailsService, private _commonService: CommonService) { }

    ngOnInit() {
        this.displayedColumns = testTableHeader;
        this._commonService.getAllTag().then(res => {
            this.job_profile = res;
            this.getTestPaper();
        });
    }
    createTest() {
        this.dialogRef = this.dialog.open(CreateTestSetComponent, {
            height: '80%',
            width: '50%'
        });
        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._mdSnackBar.open('TestPaper Created Successfully', '', {
                    duration: 2000,
                });
                this.dialogRef = null;
                this.getTestPaper();
            }
        });
    }
    getTestPaper() {
        this.apiCall.getAllTestPaper().subscribe(testPaper => {
            this.dataSource = testPaper.data;
            _.forEach(testPaper.data, (value, key) => {
                _.forEach(this.job_profile, (job, keyJob) => {
                    if (job.id === value.job_profile) {
                        value.job_profileName = job.title
                    }
                    _.forEach(job.subchild, (round, keyround) => {
                        if (round.id === value.round) {
                            value.testRound = round.title;
                        }
                    });
                });
            });
        }, err => {
            console.log(err)
        })
    }
    getSingleTest(testId) {
        this.dialogRef = this.dialog.open(ViewTestPaperComponent, {
            height: '80%',
            width: '50%'
        });
        this.dialogRef.componentInstance.testId = testId;
    }

    editTest(data) {
        this.dialogRef = this.dialog.open(CreateTestSetComponent, {
            height: '80%',
            width: '50%'
        });
        this.dialogRef.componentInstance.updateTestData = data;
        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._mdSnackBar.open('TestPaper Updated Successfully', '', {
                    duration: 2000,
                });
                this.dialogRef = null;
                this.getTestPaper();
            }
        });
    }

    deleteTest (id, interviewId) {
        this._dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this.apiCall.deleteTestPaper({'_id': id, 'interviewId': interviewId}).subscribe(response => {
                    this.getTestPaper();
                    this._mdSnackBar.open(response.mesage, '', {
                        duration: 2000,
                    });
                }, error => {
                    console.log(error)
                })
            }
        }, (err) => {
        });
    }

}
