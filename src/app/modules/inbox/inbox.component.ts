import {
    Component,
    OnInit,
    OnDestroy
} from '@angular/core';
import {
    Router,
    NavigationStart
} from '@angular/router';
import {
    ImapMailsService
} from '../../service/imapemails.service';
import {
    MdDialog,
    MdDialogConfig,
    MdDialogRef
} from '@angular/material';
import {
    EmailModalComponent
} from '../email-modal/email-modal.component';
import {
    MdSnackBar
} from '@angular/material';
import {
    NgForm,
    FormControl,
    Validators
} from '@angular/forms';
import { Location } from '@angular/common';
import { CoreComponent } from './../../modules/core/core.component';
import { ComposeEmailComponent } from './../../modules/compose-email/compose-email.component';
import { LocalStorageService } from './../../service/local-storage.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit, OnDestroy {
    dialogRef: MdDialogRef < any > ;
    Math: any;
    emaillist: any;
    loading = false;
    tag_id: string;
    tags: any;
    data: any;
    selected: any;
    emailIds: string[];
    selectedTag: any;
    message: string;
    showmessage: boolean;
    showInboxEmailList = true;
    subscription: any;
    tagsForEmailListAndModel: any;
    subject_for_genuine: string;
    emailParentId: any;
    emailChildId: any;
    emailParenttitle: string;
    emailChildTitle: string;
    selectedTagTitle: string;
    sendSuccessEmailListCount: any;
    sendFailedEmailListCount: any;
    dataForInterviewScheduleRound = [];
    constructor(public _core: CoreComponent, public _location: Location, public _router: Router, public dialog: MdDialog, public getemails: ImapMailsService, public snackBar: MdSnackBar, public _localStorageService: LocalStorageService) {
        this.Math = Math;
        this.getemails.componentMehtodCalled$.subscribe(
        () => {
            this.fetchNewEmails();
        });
    }

    ngOnInit() {
        this.emailIds = [];
        this.loading = true;
        this.data = {
            'page': 1,
            'tag_id': 0,
            'limit': 100
        };
        this.defaultOpen();
        setTimeout(() => {
            if (this._location.path().substr(0, 17) === '/core/inbox/email') {
                this.showInboxEmailList = false;
            } else {
                this.showInboxEmailList = true;
            }
        });
        this.subscription = this._core.routerInboxPage.subscribe(() => {
            this.showInboxEmailList = true;
            this.refresh();
        });
    }

    defaultOpen() {
        this.getemails.getAllTagsMain()
            .subscribe((res) => {
                this.formatTagsInArray(res.data);
                if (res.data.length > 0) {
                    if (res.data[0]['data'] && res.data[0]['data'].length > 0) {
                        if (res.data[0]['data'] && res.data[0]['data'].length > 0) {
                            this.data.tag_id = res.data[0]['data'][0]['subchild'][0]['id'] || 1;
                            this.selectedTag = res.data[0]['data'][0]['subchild'][0]['id'] || 1;
                            this.selectedTagTitle = res.data[0]['data'][0]['subchild'][0]['title'];
                            this.emailParentId = res.data[0]['data'][0]['id'].toString() || '0';
                            this.emailChildId = res.data[0]['data'][0]['subchild'][0]['id'].toString() || '0';
                            this.emailParenttitle = res.data[0]['data'][0]['title'] || '';
                            this.emailChildTitle = res.data[0]['data'][0]['subchild'][0]['title'] || '';
                            this.getemails.getEmailList(this.data).subscribe((data) => {
                                this.addSelectedFieldInEmailList(data);
                                this.loading = false;
                            });
                        }
                    }
                }
            }, (err) => {
                this.loading = false;
            });
    }

    addSelectedFieldInEmailList(data) {
        if (data && data['data'].length > 0) {
            _.forEach(data['data'], (value, key) => {
                value['selected'] = false;
            });
        }
        this.emaillist = data;
    }

    searchEmail(searchform: NgForm) {
        if (searchform.valid) {
            if (!!searchform.value['currentTag']) {
                this.data = {
                    'page': 1,
                    'tag_id': this.emailParentId,
                    'default_id': this.emailChildId,
                    'limit': 100,
                    'type': searchform.value['option'],
                    'keyword': searchform.value['keyword'],
                    'selected': searchform.value['currentTag']
                };
            } else {
                this.data = {
                    'page': 1,
                    'limit': 100,
                    'type': searchform.value['option'],
                    'keyword': searchform.value['keyword'],
                    'selected': searchform.value['currentTag']
                };
            }
            this.loading = true;
            this.showmessage = false;
            this.getemails.getEmailList(this.data).subscribe((data) => {
                if (data.data.length > 0) {
                    this.addSelectedFieldInEmailList(data);
                    this.emailIds = [];
                    this.loading = false;
                } else {
                    this.message = data.message;
                    this.showmessage = true;
                    this.emaillist = [];
                    this.loading = false;
                }
            });
        }
    }

    addEmail(id: string) {
        this.emailIds.push(id);
    }

    removeEmails(id: string) {
        this.emailIds.splice(this.emailIds.indexOf(id), 1);
    }

    composeEmail() {
        this.dialogRef = this.dialog.open(ComposeEmailComponent, {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.emailList = this.emailIds;
        this.dialogRef.componentInstance.subject_for_genuine = this.subject_for_genuine;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            this.emailIds = [];
            this.addSelectedFieldInEmailList(this.emaillist);
        });
    }

    assign(id: any) {
        this.selected = {
            'tag_id': id,
            'mongo_id': this.emailIds,
            'selectedTag': this.selectedTag
        };
        this.getemails.assignTag(this.selected).subscribe((data) => {
            this.refresh();
            this.emailIds.length = 0;
            this.notify('done', '');
        }, (err) => {
            console.log(err);
        });
    }

    delete() {
        this.selected = {
            'tag_id': this.selectedTag,
            'mongo_id': this.emailIds
        };
        this.getemails.deleteEmail(this.selected).subscribe((data) => {
            this.refresh();
            this.emailIds.length = 0;
            this.notify('done', '');
        }, (err) => {
            console.log(err);
        });
    }

    notify(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    }

    openEmails(email: any) {
        this.showInboxEmailList = false;
        this._router.navigate(['core/inbox/email', email._id]);
        this._localStorageService.setItem('email', email);
        this._localStorageService.setItem('selectedTag', this.selectedTag);
        this._localStorageService.setItem('tags', this.tagsForEmailListAndModel);
        this._localStorageService.setItem('dataForInterviewScheduleRound', this.dataForInterviewScheduleRound);
    }

    getAllTag() {
        this.getemails.getAllTagsMain()
            .subscribe((res) => {
                this.formatTagsInArray(res.data);
            }, (err) => {
                this.loading = false;
            });
    }
    sendEmailToPendingCandidates() {
        this.getemails.sendEmailToPendingCandidates({'tag_id': this.selectedTag}).subscribe((data) => {
            this.sendSuccessEmailListCount = data['data'][0]['email_send_success_list'].length;
            this.sendFailedEmailListCount = data['data'][0]['email_send_fail_list'].length;
        }, (err) => {
            this.notify(err.message, '');
        });
    }
    sendEmailToAll() {
        this.dialogRef = this.dialog.open(ComposeEmailComponent, {
            height: '90%',
            width: '70%'
        });
        this.dialogRef.componentInstance.emailParenttitle = this.emailParenttitle;
        this.dialogRef.componentInstance.emailChildTitle = this.emailChildTitle;
        this.dialogRef.componentInstance.emailParentId = this.emailParentId;
        this.dialogRef.componentInstance.emailChildId = this.emailChildId;
        this.dialogRef.componentInstance.subject_for_genuine = this.subject_for_genuine;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            this.emailIds = [];
            this.addSelectedFieldInEmailList(this.emaillist);
        });
    }

    emaillists(emailData: any, page?: number) {
        this.emailParenttitle = emailData['parentTitle'];
        this.emailChildTitle = emailData['title'];
        if (this._location.path().substr(0, 17) === '/core/inbox/email') {
            this.showInboxEmailList = true;
            this._location.back();
        }
        this.emailParentId = (emailData.parantTagId ? emailData.parantTagId.toString() : null);
        if (emailData.id == null) {
            this.emailChildId = null;
        } else {
            this.emailChildId = emailData.id.toString() || '0';
        }
        if (emailData.title === 'All') {
            this.selectedTagTitle = emailData.title;
        } else {
            this.selectedTagTitle = '';
        }
        this.selectedTag = emailData.id;
        this.data = null;
        this.showmessage = false;
        this.data = {
            'page': page || 1,
            'tag_id': emailData.parantTagId || ((emailData.id === 0) ? 0 : emailData.id) || 0,
            'default_id': (emailData.parantTagId ? emailData.id : 0).toString() || '0',
            'limit': 100
        };
        this.loading = true;
        this.getemails.getEmailList(this.data).subscribe((data) => {
            this.addSelectedFieldInEmailList(data);
            this.emailIds = [];
            this.loading = false;
        });
    }

    searchEmailList(page: number) {
        this.data.page = page || 1;
        this.showmessage = false;
        this.loading = true;
        this.getemails.getEmailList(this.data).subscribe((data) => {
            this.addSelectedFieldInEmailList(data);
            this.emailIds = [];
            this.loading = false;
        });
    }

    previous() {
        if (this.data.page > 1) {
            this.data.page = this.data.page - 1;
            if (!this.data.type) {
                this.emaillists({'id': this.emailChildId, 'parantTagId': this.emailParentId, 'title': this.selectedTagTitle}, this.data.page);
            } else {
                this.searchEmailList(this.data.page);
            }
        }
    }

    next() {
        if (this.data.page < this.emaillist.count / this.data.limit) {
            this.data.page = this.data.page + 1;
            if (!this.data.type) {
                this.emaillists({'id': this.emailChildId, 'parantTagId': this.emailParentId, 'title': this.selectedTagTitle}, this.data.page);
            } else {
                this.searchEmailList(this.data.page);
            }
        }
    }

    fetchNewEmails() {
        this.loading = true;
        this.getemails.refreshNewEmails().subscribe((data) => {
            this.refresh();
        });
    }

    refresh(id?: string) {
        this.getAllTag();
        this.getemails.getEmailList(this.data).subscribe((data) => {
            this.emailIds = [];
            this.addSelectedFieldInEmailList(data);
        });
    }

    formatTagsInArray(data: any) {
        this.tags = data;
        this.tagsForEmailListAndModel = {};
        _.forEach(data, (value, key) => {
            if (value['subject_for_genuine']) {
                this.subject_for_genuine = value['subject_for_genuine'];
                localStorage.setItem('subject_for_genuine', value['subject_for_genuine']);
            } else {
                this.subject_for_genuine = 'Revert Information';
                localStorage.setItem('subject_for_genuine', 'Revert Information');
            }
            if (!this.tagsForEmailListAndModel['Default']) {
                this.tagsForEmailListAndModel['Default'] = [];
                this.tagsForEmailListAndModel['Default'] = data[0]['data'].length > 0 ? data[0]['data'][0]['subchild'] : [];
            } else {
                this.tagsForEmailListAndModel['Default'] = data[0]['data'].length > 0 ? data[0]['data'][0]['subchild'] : [];
            }
            if (value['data'] && value['data'].length > 0) {
                _.forEach(value['data'], (value1, key1) => {
                    if (value1['type'] === 'Automatic') {
                        if (!this.tagsForEmailListAndModel['Automatic']) {
                            this.tagsForEmailListAndModel['Automatic'] = [];
                            this.tagsForEmailListAndModel['Automatic'].push(value1);
                        } else {
                            this.tagsForEmailListAndModel['Automatic'].push(value1);
                        }
                    }
                });
            }
        });
        // code for removing schedule_first_round, schedule_second_round, schedule_third_round for tagsForEmailListAndModel
        // also creating interview schedule array from here
        if (this.tagsForEmailListAndModel && this.tagsForEmailListAndModel['Default'] && this.tagsForEmailListAndModel['Default'].length > 0) {
            const tempArray = [];
            _.forEach(this.tagsForEmailListAndModel['Default'], (value, key) => {
                if (value['title'].substr(0, 9) === 'Schedule_') {
                    this.dataForInterviewScheduleRound.push(value);
                } else {
                    tempArray.push(value);
                }
            });
            tempArray.push({color: '#ba21d3', count: 0, id: 9999, title: 'Schedule', unread: 0});
            this.tagsForEmailListAndModel['Default'] = tempArray;
        }
        this.loading = false;
    }

    trackByEmails(index, email) {
        return email ? email._id : undefined;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
