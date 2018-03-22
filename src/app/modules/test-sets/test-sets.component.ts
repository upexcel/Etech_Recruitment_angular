import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { CreateTestSetComponent } from './../create-test-set/create-test-set.component'

@Component({
    selector: 'app-test-sets',
    templateUrl: './test-sets.component.html',
    styleUrls: ['./test-sets.component.scss']
})
export class TestSetsComponent implements OnInit {
    private dialogRef: MatDialogRef<any>
    constructor(private dialog: MatDialog, private _mdSnackBar: MatSnackBar) { }

    ngOnInit() {
    }
    createTest() {
        this.dialogRef = this.dialog.open(CreateTestSetComponent, {
            height: '60%',
            width: '40%'
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
