import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-manual-tag-modal',
    templateUrl: './manual-tag-modal.component.html',
    styleUrls: ['./manual-tag-modal.component.scss']
})
export class ManualTagModalComponent implements OnInit {
    id: string;
    constructor(public dialogRef: MdDialogRef<any>) { }

    ngOnInit() {}
}
