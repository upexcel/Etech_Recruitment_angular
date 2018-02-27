import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';

@Component({
    selector: 'app-view-note',
    templateUrl: './view-note.component.html',
    styleUrls: ['./view-note.component.scss'],
})
export class ViewNoteComponent implements OnInit {
    candidateNote: any;
    data11: any;

    constructor(public dialogRef: MatDialogRef<any>) {
    }
    ngOnInit() {
        _.forEach(this.candidateNote, (val, key) => {
            val.note = val.note.replace(new RegExp('\n', 'g'), '<br />');
        });

    }
    close() {
    }
}
