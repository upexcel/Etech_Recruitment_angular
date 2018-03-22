import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AllTestQuestionComponent } from './../all-test-question/all-test-question.component';

@Component({
    selector: 'app-create-test-set',
    templateUrl: './create-test-set.component.html',
    styleUrls: ['./create-test-set.component.scss']
})
export class CreateTestSetComponent implements OnInit {
    testGroup: any[];
    loading: boolean;
    limit: any[];
    testLimit: any;
    testGroupId: any;
    testName: any;
    private dialogRef: MatDialogRef<any>
    constructor(private dialog: MatDialog, private _mdSnackBar: MatSnackBar, private apiCall: ImapMailsService) { }

    ngOnInit() {
        this.loading = true;
        this.getTestGroup();
        this.limit = [{ time: 30 }, { time: 60 }, { time: 90 }, { time: 120 }, { time: 180 }, { time: 240 }];
    }
    getTestGroup() {
        this.apiCall.examGroup()
            .subscribe((data) => {
                console.log(data)
                this.testGroup = data;
                this.loading = false;
            }, (err) => {
                console.log(err)
            });
    }
    add() {
        this.dialogRef = this.dialog.open(AllTestQuestionComponent, {
            height: '80%',
            width: '80%'
        });
        // this.dialogRef.componentInstance.questionType = this.questionType;
        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this._mdSnackBar.open(result.message, '', {
                    duration: 2000,
                });
                this.dialogRef = null;
            }
        });
    }
}
