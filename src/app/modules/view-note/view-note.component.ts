import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-view-note',
    templateUrl: './view-note.component.html',
    styleUrls: ['./view-note.component.scss'],
})
export class ViewNoteComponent {
    candidateNote: any;
    constructor(public dialogRef: MdDialogRef<any>) {
    }
    close() {
    }
}
