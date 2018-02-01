import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-pending-candidate',
    templateUrl: './pendingCandidate.component.html',
    styleUrls: ['./pendingCandidate.component.scss']
})
export class PendingCandidateComponent implements OnInit {
    candiadteList: any;
    tags: any;
    jobprofile_tag= [];
    messageShow: any;
    message= false;
    constructor (private _getScore: ImapMailsService, private _ngzone: NgZone) { }

    getPendingCandidateList() {
        this._getScore.pendingList().subscribe(res => {
            this._ngzone.run(() => {
                this.candiadteList = res;
                if (res.length === 0) {
                    this.messageShow = 'No Pending Candidates';
                    this.message = true;
                }
            });
        },
        err => {
        });
    }
    jobprofile() {
        this._getScore.getAllTags().subscribe(res => {
            this._ngzone.run(() => {
                this.formatTagsInArray(res);
            });
        },
        err => {
        });
    }
    formatTagsInArray(data: any) {
        this.tags = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === 'Default') {
                if (!this.tags['Default']) {
                    this.tags['Default'] = [];
                    this.tags['Default'].push(data[i]);
                } else {
                    this.tags['Default'].push(data[i]);
                }
            } else if (data[i].type === 'Manual') {
                if (!this.tags['Manual']) {
                    this.tags['Manual'] = [];
                    this.tags['Manual'].push(data[i]);
                } else {
                    this.tags['Manual'].push(data[i]);
                }
            } else if (data[i].type === 'Automatic') {
                if (!this.tags['Automatic']) {
                    this.tags['Automatic'] = [];
                    this.tags['Automatic'].push(data[i]);
                } else {
                    this.tags['Automatic'].push(data[i]);
                }
            }
        }
        if (this.tags['Automatic']) {
            _.forEach(this.tags['Automatic'], (val, key) => {
                if (val.is_job_profile_tag) {
                    this.jobprofile_tag.push(val);
                };
            })
        }
    }
    ngOnInit() {
        this.getPendingCandidateList();
        this.jobprofile();
    }
    assignTag(tag_id: any, email: any) {
        this._getScore.approveCandidate({'email': email, 'tag_id': tag_id}).subscribe(res => {
            this.getPendingCandidateList();
        }, err => {
        });
    }
}
