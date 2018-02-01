import { Component, OnInit} from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DialogService } from './../../service/dialog.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-preview-score',
    templateUrl: './previewScore.component.html',
    styleUrls: ['./previewScore.component.scss'],
})
export class PreviewScoreComponent implements OnInit {
    detailedScore: any;

    constructor(public dialogRef: MdDialogRef<any>, private _dialogService: DialogService) {
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
}
