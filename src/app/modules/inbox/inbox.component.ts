import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-inbox',
    templateUrl: './inbox.component.html',
    styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
    emaillist: any;
    loading = false;
    tag_id: string;
    tags: any[];
    data: any;
    constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, public getemails: ImapMailsService) {
        // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
        const uparrowSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('../../../../assets/up_arrow.svg');
        iconRegistry.addSvgIconSetInNamespace('up_arrow', uparrowSafeUrl);
    }

    ngOnInit() {
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

    getAllTag() {
        this.getemails.getAllTags()
            .subscribe((data) => {
                this.formatTagsInArray(data);
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

    refresh(id: string) {
        this.getemails.getEmailList(this.data).subscribe((data) => {
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
            }
        }
        this.loading = false;
    }

}
