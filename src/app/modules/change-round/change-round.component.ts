import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-change-round',
    templateUrl: './change-round.component.html',
    styleUrls: ['./change-round.component.scss']
})
export class ChangeRoundComponent implements OnInit {
    rounds = [];
    selectedEmail: any;
    allTags: any;
    selectedRound: any;

    constructor(public dialogRef: MatDialogRef<any>) {
        this.allTags = JSON.parse(localStorage.getItem('allTags')).data;
    }

    ngOnInit() {
        if (this.allTags) {
            _.forEach(this.allTags, (value, key) => {
                if (value.title === 'candidate') {
                    const data = value.data[0].subchild;
                    _.forEach(data, (tag, tagKey) => {
                        if (tag.title !== 'All') {
                            this.rounds.push(tag);
                        }
                    });
                }
            });
        }
        if (this.rounds) {
            _.forEach(this.rounds, (tags, key) => {
                if (this.selectedEmail.default_tag == tags.id) {
                    this.selectedRound = tags.id;
                }
            });
        }
    }
    changeRound() {
        this.dialogRef.close(this.selectedRound);
    }
    close() {
        this.dialogRef.close()
    }
}
