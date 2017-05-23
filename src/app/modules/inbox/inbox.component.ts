import {
    Component,
    OnInit
} from '@angular/core';
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

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
    dialogRef: MdDialogRef < any > ;
    emaillist: any;
    loading = false;
    tag_id: string;
    tags: any[];
    data: any;
    selected: any;
    emailIds: string[];
    constructor(public dialog: MdDialog, public getemails: ImapMailsService, public snackBar: MdSnackBar) {}

    ngOnInit() {
        this.emailIds = [];
        this.loading = true;
        this.getAllTag();
        this.data = {
            'page': 1,
            'tag_id': ''
        };
        this.getemails.getEmailList(this.data).subscribe((data) => {
            this.emaillist = data.data;
            this.loading = false;
        });
    }

    addEmail(id: string) {
        this.emailIds.push(id);
    }

    removeEmails(id: string) {
        this.emailIds.splice(this.emailIds.indexOf(id), 1);
    }

    ignore() {
        this.selected = {
            'tag_id': '2',
            'mongo_id': this.emailIds
        };
        this.getemails.assignTag(this.selected).subscribe((data) => {
            this.getAllTag();
            this.refresh();
            this.emailIds.length = 0;
            this.notify('done', '');
        }, (err) => {
            console.log(err);
        });
    }

    reject() {
        this.selected = {
            'tag_id': '1',
            'mongo_id': this.emailIds
        };
        this.getemails.assignTag(this.selected).subscribe((data) => {
            this.getAllTag();
            this.refresh();
            this.emailIds.length = 0;
            this.notify('done', '');
        }, (err) => {
            console.log(err);
        });
    }

    delete() {
        this.selected = {
            'mongo_id': this.emailIds
        };
        this.getemails.deleteEmail(this.selected).subscribe((data) => {
            this.getAllTag();
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
        this.dialogRef = this.dialog.open(EmailModalComponent, {
            height: '550px',
            width: '80%'
        });
        this.dialogRef.componentInstance.email = email;
        this.dialogRef.componentInstance.tags = this.tags;
        this.dialogRef.afterClosed().subscribe(result => {
            this.dialogRef = null;
            this.refresh();
            this.getAllTag();
        });
    }

    getAllTag() {
        this.getemails.getAllTagsMain()
            .subscribe((res) => {
                this.formatTagsInArray(res.data);
            }, (err) => {
                console.log(err);
                this.loading = false;
            });
    }

    emaillists(id: string, page?: number) {
        this.data = {
            'page': page || 1,
            'tag_id': id
        };
        this.loading = true;
        this.getemails.getEmailList(this.data).subscribe((data) => {
            this.emaillist = data.data;
            this.emailIds = [];
            this.loading = false;
        });
    }

    previous() {
        if (this.data.page > 1) {
            this.data.page = this.data.page - 1;
            this.emaillists(this.data.tag_id, this.data.page);
        }
    }

    next() {
        this.data.page = this.data.page + 1;
        this.emaillists(this.data.tag_id, this.data.page);
    }

    refresh(id?: string) {
        this.getAllTag();
        this.getemails.getEmailList(this.data).subscribe((data) => {
            this.emailIds = [];
            this.emaillist = data.data;
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
            } else if (data[i].type === 'Main') {
                if (!this.tags['Main']) {
                    this.tags['Main'] = [];
                    this.tags['Main'].push(data[i]);
                } else {
                    this.tags['Main'].push(data[i]);
                }
            }
        }
        this.loading = false;
    }

}
