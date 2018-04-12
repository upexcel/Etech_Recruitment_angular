import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MatDialogRef } from '@angular/material';
import { CommonService } from '../../service/common.service';

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

    constructor(public dialogRef: MatDialogRef<any>, private _commonService: CommonService) {
    }
    ngOnInit() {
        this._commonService.getAllTag().then(res => {
            this.allTags = res[0].subchild;
            _.forEach(this.allTags, (tag, tagKey) => {
                if (tag.title !== "All") {
                    this.rounds.push(tag);
                }
                if (this.selectedEmail.default_tag == tag.id) {
                    this.selectedRound = tag.id;
                }
            });
        });
    }
    changeRound() {
        this.dialogRef.close(this.selectedRound);
    }
    close() {
        this.dialogRef.close()
    }
}
