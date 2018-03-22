import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { CreateTestSetComponent } from './../create-test-set/create-test-set.component'
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-test-sets',
    templateUrl: './test-sets.component.html',
    styleUrls: ['./test-sets.component.scss']
})
export class TestSetsComponent implements OnInit {
    private dialogRef: MatDialogRef<any>
    dataSource = [];
    displayedColumns = ['testName', 'Questions', 'Preview']
    constructor(private dialog: MatDialog, private _mdSnackBar: MatSnackBar, private apiCall: ImapMailsService) { }

    ngOnInit() {
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
        }, err => {
            console.log(err)
        })
    }

}
