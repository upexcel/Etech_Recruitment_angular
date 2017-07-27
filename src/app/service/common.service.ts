import { Injectable } from '@angular/core';
import { config } from './../config/config';
import * as _ from 'lodash';

@Injectable()
export class CommonService {
    constructor() { }

    getDefaultTagColor(title) {
        if (title === 'Ignore') {
            return {'background-color': '#FF0000'};
        } else if (title === 'Genuine Applicant') {
            return {'background-color': '#41A317'};
        } else if (title === 'Reject') {
            return {'background-color': '#F1B2B2'};
        } else if (title === 'Schedule') {
            return {'background-color': '#FBB917'};
        } else {
            return {'background-color': 'cyan'};
        }
    }

    getDefaultTagIcon(title) {
        if (title === 'Ignore') {
            return 'block';
        } else if (title === 'Genuine Applicant') {
            return 'done_all';
        } else if (title === 'Reject') {
            return 'highlight_off';
        } else if (title === 'Schedule') {
            return 'access_time';
        } else {
            return 'thumb_up';
        }
    }

    formateDate(date) {
        return date.getFullYear() + '-' + ((date.getMonth() * 1) > 9 ? '' : '0') + ((date.getMonth() * 1) + 1) + '-' + ((date.getDate() * 1) > 9 ? '' : '0') + date.getDate();
    }

    interviewRoundDisableCheck(dataForInterviewScheduleRound, tagselected) {
        const interviewRounds = config['interviewRounds'];
        let interviewRoundsDisableIndex = -1;
        _.forEach(interviewRounds, (value, key) => {
            value['id'] = dataForInterviewScheduleRound[key]['id'];
            if (dataForInterviewScheduleRound[key]['id'] === tagselected) {
                interviewRoundsDisableIndex = key;
            }
        });
        // performing interview rounnd disable login as per select tag id from side nav
        if (interviewRoundsDisableIndex >= 0) {
            _.forEach(interviewRounds, (value, key) => {
                if (interviewRoundsDisableIndex >= key) {
                    value['disable'] = true;
                } else {
                    value['disable'] = false;
                }
            });
        } else {
            _.forEach(interviewRounds, (value, key) => {
                value['disable'] = false;
            });
        }
        return interviewRounds;
    }
}
