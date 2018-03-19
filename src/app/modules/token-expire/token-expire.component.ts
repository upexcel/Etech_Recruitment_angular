import { Component, OnInit, OnDestroy} from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
    selector: 'app-token-expire',
    templateUrl: './token-expire.component.html',
    styleUrls: ['./token-expire.component.scss']
})
export class TokenExpireComponent implements OnInit, OnDestroy {

    constructor(public dialogRef: MatDialogRef<any>, public _matDialog: MatDialog) {
        dialogRef.disableClose = true;
    }

    ngOnInit() {
        document.getElementsByClassName('cdk-overlay-container')[0].classList.add('backgroundExpire');
    }

    ngOnDestroy() {
        document.getElementsByClassName('cdk-overlay-container')[0].classList.remove('backgroundExpire');
    }

    close() {
        this._matDialog.closeAll();
    }
}
