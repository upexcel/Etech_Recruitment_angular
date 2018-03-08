import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material'
import { ImapMailsService } from '../../service/imapemails.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-pending-candidate',
    templateUrl: './pendingCandidate.component.html',
    styleUrls: ['./pendingCandidate.component.scss']
})
export class PendingCandidateComponent implements OnInit {
    candidateList: any;
    tags: any;
    jobprofile_tag = [];
    messageShow: any;
    message = false;
    loading:boolean;
    constructor(private _getScore: ImapMailsService, private _ngzone: NgZone, public _matSnackBar: MatSnackBar) { }

    getPendingCandidateList() {
        this._getScore.pendingList().subscribe(res => {
            this._ngzone.run(() => {
                this.candidateList = res;
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
        this._getScore.approveCandidate({ 'email': email, 'tag_id': tag_id }).subscribe(res => {
            this.getPendingCandidateList();
        }, err => {
        });
    }
    delCandidate(id) {
        _.remove(this.candidateList,{'_id':id});
        this._getScore.removeCandidate(id).subscribe(res => {
            if(res.status ==1) {
                this._matSnackBar.open('Candidate Successfully Deleted.', '', {
                    duration: 4000,
                });
            }
        },err=> {
            this._matSnackBar.open('Something went wrong, Please try agian.', '', {
                duration: 4000,
            });           
        })
    }
}
