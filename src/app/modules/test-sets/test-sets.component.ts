import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { CreateTestSetComponent } from './../create-test-set/create-test-set.component'
import { ImapMailsService } from '../../service/imapemails.service';
import _ = require('lodash');

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
    displayedColumns = ['testName', 'Questions', 'job_profileName', 'testRound', 'Preview']
    constructor(private dialog: MatDialog, private _mdSnackBar: MatSnackBar, private apiCall: ImapMailsService) { }

    ngOnInit() {
        this.getAllTag();
        this.getTestPaper();
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
        this.apiCall.getTestPaper().subscribe(testPaper => {
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
    getAllTag() {
        const data = JSON.parse(localStorage.getItem('allTags')).data;
        if (data.length > 0) {
            _.forEach(data, (value, key) => {
                if (value['title'] === 'candidate') {
                    this.job_profile = value.data;
                }
            })
        }
    }
    assignJobProfile(tag) {
        this.round = [];
        _.forEach(tag.subchild, (subchild, key) => {
            if (subchild.title === 'First Round' || subchild.title === 'Second Round') {
                this.round.push(subchild);
            }
        })
    }

}
