import { Injectable } from '@angular/core';

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
}
