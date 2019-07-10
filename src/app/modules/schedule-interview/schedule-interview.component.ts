import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { CommonService } from '../../service/common.service';
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
    templateData: string[];
    emailData: any;
    minDate: any;
    maxDate: any;
    showSelectedDate = null;
    apiFiredOnce = false;
    errorMessage: string;
    scheduleBy: string | null = config['scheduleInterviewBy'];
    constructor(private _fb: FormBuilder, private dialogRef: MatDialogRef<any>, private scheduleApi: ImapMailsService, public _commonService: CommonService) {
        this.interviewForm = this._fb.group({
            'selectedInterviewRound': [null, Validators.compose([Validators.required])],
            'selectedInterviewTemplate': [null, Validators.compose([Validators.required])],
            'selectedInterviewDate': [{ value: null, disabled: false }, Validators.compose([Validators.required])],
            'selectedInterviewTime': [{ value: null, disabled: false }, Validators.compose([Validators.required])],
            'mobile_no': [null, Validators.compose([Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^\d+$/)])],
        });
    }

    ngOnInit() {
        this.afterFormInit()
    }

    afterFormInit() {
        this.minDate = new Date();
        if (this.emailData) {
            if (this.emailData.mobile_no === 'undefined') {
                this.emailData.mobile_no = '';
            } else if (this.emailData.mobile_no.length) {
                if (this.emailData.mobile_no.includes('+91')) {
                    this.emailData.mobile_no = this.emailData.mobile_no.slice(3);
                }
            }
            this.interviewForm.get('mobile_no').setValue(this.emailData.mobile_no);
        }
        this.showForm = true;
        this.interviewForm.get('selectedInterviewDate').disable();
        this.interviewForm.get('selectedInterviewTime').disable();
        this.interviewRounds = this._commonService.interviewRoundDisableCheck(this.dataForInterviewScheduleRound, this.tagselected);
    }

    dateFilter = (d: Date): any => {
        return _.filter(this.scheduleData, { 'date': this._commonService.formateDate(d) }).length;
    }
    onSchedule(scheduleBy) {
        if (scheduleBy === 'scheduleByEmail' && !this.apiFiredOnce) {
            this.showForm = false;
            this.scheduleApi.getEmailStatus({ 'tag_id': this.tagselected, 'mongo_id': this.emailData._id, 'email': this.emailData.sender_mail }).subscribe((res) => {
                if (res.flag) {
                    this.scheduleApi.getScheduleData().subscribe((data) => {
                        this.scheduleData = data;
                        // this.minDate = new Date(data[0]['date']);
                        // this.maxDate = new Date(data[data.length - 1]['date']);
                        this.getTemplateList();
                        this.apiFiredOnce = true;
                    }, (err) => {
                        console.log(err);
                    });
                } else {
                    this.errorMessage = res.message;
                }
            }, (err) => {
                console.log(err)
            });
        }
    }
    changeInInterviewRound(interviewRound) {
        this.selectedInterviewRound = interviewRound;
        this.interviewForm.get('selectedInterviewDate').enable();
        this.interviewForm.get('selectedInterviewDate').setValue(null);
        this.interviewForm.get('selectedInterviewTime').setValue(null);
        this.showSelectedDate = null;
    }

    changeInDate(selectedDate) {
        this.interviewForm.get('selectedInterviewTime').enable();
        this.interviewForm.get('selectedInterviewTime').setValue(null);
        this.showSelectedDate = selectedDate;
        this.timeListData = this.scheduleData[0]['time_slots']['first_round'];
    }

    scheduleInterview(data) {
        const apiData = {
            'tag_id': data.value.selectedInterviewRound.id,
            'mongo_id': [this.emailId],
            'shedule_for': data.value.selectedInterviewRound.value,
            'shedule_date': this._commonService.formateDate(data.value.selectedInterviewDate),
            'shedule_time': data.value.selectedInterviewTime,
            'tamplate_id': data.value.selectedInterviewTemplate,
            'mobile_no': config.mobileNoPrefix + data.value.mobile_no
        };
        this.dialogRef.close(apiData);
    }
    scheduleInterviewDirect(data) {
        const apiData = {
            'tag_id': data.id,
            'mongo_id': [this.emailId]
        };
        this.dialogRef.close(apiData);
    }

    getColor(title) {
        return this._commonService.getDefaultTagColor(title);
    }

    getIcon(title) {
        return this._commonService.getDefaultTagIcon(title);
    }

    close() {
        this.dialogRef.close('back');
    }

    getTemplateList() {
        this.scheduleApi.getTemplate().subscribe(data => {
            this.templateData = data;
            this.showForm = true;
        }, (err) => {
            console.log(err);
        });
    }

    interviewRoundsTrack(index, data) {
        return data['id'] || index;
    }

    timeListDataTrack(index, data) {
        return data['id'] || index;
    }

    templateDataTrack(index, data) {
        return data['id'] || index;
    }

}
