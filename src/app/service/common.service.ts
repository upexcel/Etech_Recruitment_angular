import { Injectable, EventEmitter, Output } from '@angular/core';
import { config } from './../config/config';
import { ImapMailsService } from './imapemails.service';
import * as _ from 'lodash';
import { LocalStorageService } from './local-storage.service';
@Injectable()
export class CommonService {
    @Output() inboxRefresh: EventEmitter<any> = new EventEmitter(true);
    constructor(public _apiService: ImapMailsService, private _localStorageService: LocalStorageService) { }

    getDefaultTagColor(title) {
        if (title === 'Ignore') {
            return { 'background-color': '#FF0000' };
        } else if (title === 'Genuine Applicant') {
            return { 'background-color': '#41A317' };
        } else if (title === 'Reject') {
            return { 'background-color': '#F1B2B2' };
        } else if (title === 'Schedule') {
            return { 'background-color': '#FBB917' };
        } else {
            return { 'background-color': 'cyan' };
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
                if (key === 0) {
                    value['disable'] = false;
                } else {
                    value['disable'] = true;
                }
            });
        }
        return interviewRounds;
    }

    inboxRefreshEvent() {
        this.inboxRefresh.emit();
    }

    formateTags(data) {
        return new Promise((resolve, reject) => {
            const tagsForEmailListAndModel = {};
            const dataForInterviewScheduleRound = [];
            let inboxMailsTagsForEmailListAndModel = {};
            let subject_for_genuine = '';
            const role = this._localStorageService.getItem('role');
            if (role === 'Guest') {
                resolve(
                    {
                        'tagsForEmailListAndModel': tagsForEmailListAndModel,
                        'dataForInterviewScheduleRound': dataForInterviewScheduleRound,
                        'subject_for_genuine': subject_for_genuine,
                        'inboxMailsTagsForEmailListAndModel': inboxMailsTagsForEmailListAndModel
                    }
                );
                return;
            }
            if (data && data.length > 0) {
                inboxMailsTagsForEmailListAndModel = data[0];
            }
            _.forEach(data, (value, key) => {
                if (value['subject_for_genuine']) {
                    subject_for_genuine = value['subject_for_genuine'];
                    localStorage.setItem('subject_for_genuine', value['subject_for_genuine']);
                } else {
                    subject_for_genuine = 'Revert Information';
                    localStorage.setItem('subject_for_genuine', 'Revert Information');
                }
                if (!tagsForEmailListAndModel['Default']) {
                    tagsForEmailListAndModel['Default'] = [];
                    tagsForEmailListAndModel['Default'] = data[0]['data'].length > 0 ? data[0]['data'][0]['subchild'] : [];
                } else {
                    tagsForEmailListAndModel['Default'] = data[0]['data'].length > 0 ? data[0]['data'][0]['subchild'] : [];
                }
                if (value['data'] && value['data'].length > 0) {
                    _.forEach(value['data'], (value1, key1) => {
                        if (value1['type'] === 'Automatic') {
                            if (!tagsForEmailListAndModel['Automatic']) {
                                tagsForEmailListAndModel['Automatic'] = [];
                                tagsForEmailListAndModel['Automatic'].push(value1);
                            } else {
                                tagsForEmailListAndModel['Automatic'].push(value1);
                            }
                        }
                    });
                }
            });
            // code for removing schedule_first_round, schedule_second_round, schedule_third_round for tagsForEmailListAndModel
            // also creating interview schedule array from here
            this._apiService.getScheduleData().subscribe((scheduleData) => {
                if (scheduleData && scheduleData.length > 0) {
                    _.forEach(scheduleData[0]['rounds'], (scheduleDataValue, scheduleDataKey) => {
                        if (tagsForEmailListAndModel && tagsForEmailListAndModel['Default'] && tagsForEmailListAndModel['Default'].length > 0) {
                            _.forEach(tagsForEmailListAndModel['Default'], (value, key) => {
                                if (value['title'] === scheduleDataValue['round']) {
                                    dataForInterviewScheduleRound.push(value);
                                }
                            });
                        }
                    });
                    _.pullAll(tagsForEmailListAndModel['Default'], dataForInterviewScheduleRound);
                    tagsForEmailListAndModel['Default'].push({ color: '#ba21d3', count: 0, id: 9999, title: 'Schedule', unread: 0 });
                }
                resolve({
                    'tagsForEmailListAndModel': tagsForEmailListAndModel,
                    'dataForInterviewScheduleRound': dataForInterviewScheduleRound,
                    'subject_for_genuine': subject_for_genuine,
                    'inboxMailsTagsForEmailListAndModel': inboxMailsTagsForEmailListAndModel
                })
            }, (err) => {
                console.log(err);
            });
        });
    }

    reduseCountEmail(tags, selectedTag) {
        _.forEach(tags, (value, key) => {
            _.forEach(value['data'], (dataValue, dataKey) => {
                if (!selectedTag && dataValue['title'] === 'Mails') {
                    dataValue['unread'] = dataValue['unread'] - 1;
                }
                _.forEach(dataValue['subchild'], (subchildValue, subchildKey) => {
                    if (subchildValue['id'] === selectedTag) {
                        subchildValue['unread'] = subchildValue['unread'] - 1;
                    }
                });
            });
        });
        return tags;
    }
}
