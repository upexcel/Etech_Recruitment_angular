import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-openattachement',
    templateUrl: './openattachement.component.html',
    styleUrls: ['./openattachement.component.scss']
})
export class OpenattachementComponent implements OnInit {
    link: any;
    constructor ( public setvardialog: MatDialog, public dialogRef: MatDialogRef <any>, sanitizer: DomSanitizer ) { }

    ngOnInit() {
        this.dialogRef.updatePosition({ top: '0px', left: '125px' });
    }

    close() {
        this.dialogRef.close();
    }
}
