import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';

@Component({
    selector: 'app-view-test-paper',
    templateUrl: './view-test-paper.component.html',
    styleUrls: ['./view-test-paper.component.scss']
})
export class ViewTestPaperComponent implements OnInit {
    testId: any;
    testPaper: any;
    constructor(private apiCall: ImapMailsService, private dialogRef: MatDialogRef<any>) { }

    ngOnInit() {
        this.apiCall.getTestPaperById(this.testId).subscribe(res => {
            this.testPaper = res.data;
            this.group();
        }, err => {});
    }
    close() {
        this.dialogRef.close();
    }
    group() {
        this.apiCall.examGroup().subscribe((data) => {
            _.forEach(data, (groupData, key) => {
                _.forEach(this.testPaper.SubjectQuestionLimits, (value, groupKey) => {
                    if (groupData.id === value.group_id) {
                        value.exam_subject = groupData.exam_subject;
                    }
                })
            })
        })
    }
}
