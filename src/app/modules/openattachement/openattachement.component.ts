import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from 'environments/environment';

@Component({
    selector: 'app-openattachement',
    templateUrl: './openattachement.component.html',
    styleUrls: ['./openattachement.component.scss']
})
export class OpenattachementComponent implements OnInit {
    link: any;
    apiEndPoint: any;
    constructor ( public setvardialog: MatDialog, public dialogRef: MatDialogRef <any>, sanitizer: DomSanitizer ) { }

    ngOnInit() {
        this.dialogRef.updatePosition({ top: '0px', left: '125px' });
        this.apiEndPoint = environment.apibase;
    }

    close() {
        this.dialogRef.close();
    }
}
