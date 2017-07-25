import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import * as _ from 'lodash';
import { config } from './../../config/config';

@Component({
    selector: 'app-schedule-interview',
    templateUrl: './schedule-interview.component.html',
    styleUrls: ['./schedule-interview.component.scss']
})
export class ScheduleInterviewComponent implements OnInit {
    scheduleData: any;
    timeListData: any;
    interviewRounds: any;
    interviewForm: FormGroup;
    emailId: string;
    tagId: string;
    selectedInterviewRound: string;
    showForm = false;
    dataForInterviewScheduleRound: any;
    tagselected: any;
    interviewRoundsDisableIndex = -1;
    templateData: string[];
    constructor(private _fb: FormBuilder, private dialogRef: MdDialogRef<any>, private scheduleApi: ImapMailsService) {
        this.interviewForm = this._fb.group({
            'selectedInterviewRound': [null, Validators.compose([Validators.required])],
            'selectedInterviewTemplate': [null, Validators.compose([Validators.required])],
            'selectedInterviewDate': [{value: null, disabled: false}, Validators.compose([Validators.required])],
            'selectedInterviewTime': [{value: null, disabled: false}, Validators.compose([Validators.required])]
        });
    }

    ngOnInit() {
        this.scheduleApi.getScheduleData().subscribe((data) => {
            this.scheduleData = data;
            this.getTeamplateList();
        }, (err) => {
            console.log(err);
        });
        this.interviewForm.get('selectedInterviewDate').disable();
        this.interviewForm.get('selectedInterviewTime').disable();
        this.interviewRounds = config['interviewRounds'];
        for (let i = 0; i < this.interviewRounds.length; i ++) {
            this.interviewRounds[i]['id'] = this.dataForInterviewScheduleRound[i]['id'];
            if (this.dataForInterviewScheduleRound[i]['id'] === this.tagselected) {
                this.interviewRoundsDisableIndex = i;
            }
        }
        // performing interview rounnd disable login as per select tag id from side nav
        if (this.interviewRoundsDisableIndex >= 0) {
            for (let i = 0; i < this.interviewRounds.length; i++) {
                if (this.interviewRoundsDisableIndex >= i) {
                    this.interviewRounds[i]['disable'] = true;
                } else {
                    this.interviewRounds[i]['disable'] = false;
                }
            }
        }
    }

    changeInInterviewRound(interviewRound) {
        this.selectedInterviewRound = interviewRound;
        this.interviewForm.get('selectedInterviewDate').enable();
        this.interviewForm.get('selectedInterviewDate').setValue(null);
        this.interviewForm.get('selectedInterviewTime').setValue(null);
    }

    changeInDate(selectedDate) {
        this.interviewForm.get('selectedInterviewTime').enable();
        this.interviewForm.get('selectedInterviewTime').setValue(null);
        this.timeListData = _.filter(this.scheduleData, {'date' : selectedDate})[0]['time_slots'][this.selectedInterviewRound['value']];
    }

    scheduleInterview(data) {
        const apiData = {
            'tag_id': data.value.selectedInterviewRound.id,
            'mongo_id': [this.emailId],
            'shedule_for': data.value.selectedInterviewRound.value,
            'shedule_date': data.value.selectedInterviewDate,
            'shedule_time': data.value.selectedInterviewTime,
            'tamplate_id': data.value.selectedInterviewTemplate
        };
        this.scheduleApi.assignTag(apiData).subscribe((res) => {
            this.dialogRef.close('schedule');
        }, (err) => {
            console.log(err);
        });
    }

    close() {
        this.dialogRef.close('back');
    }

    getTeamplateList() {
        this.scheduleApi.getTemplate().subscribe(data => {
            this.templateData = data;
            this.showForm = true;
        }, (err) => {
            console.log(err);
        });
    }

}
