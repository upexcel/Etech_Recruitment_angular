import { Component, OnInit ,AfterContentInit} from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-token-expire',
    templateUrl: './token-expire.component.html',
    styleUrls: ['./token-expire.component.scss']
})
export class TokenExpireComponent implements OnInit, AfterContentInit {

    constructor(public dialogRef: MatDialogRef<any>) {
        dialogRef.disableClose = true;
    }

    ngOnInit() {
    }
    ngAfterContentInit() {

    }

}
