import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import { config } from './../../config/config';
import * as _ from 'lodash';
import ImageCompressor from 'image-compressor.js';

@Component({
    selector: 'app-add-candidate-temp',
    templateUrl: './add-candidate.component.html',
    styleUrls: ['./add-candidate.component.scss'],
})
export class AddCandidateComponent implements OnInit {
    emailParentId: any;
    emailChildId: any;
    emailParenttitle: string;
    emailChildTitle: string;
    diabledOnclick: boolean;
    loading: boolean;
    formdata = new FormData();

    constructor(public setvardialog: MatDialog, public dialogRef: MatDialogRef<any>, private apiService: ImapMailsService, public snackBar: MatSnackBar) {
        this.diabledOnclick = false;
    }

    ngOnInit() { }

    save(form: NgForm) {
        if (form.valid) {
            this.diabledOnclick = true;
            if (this.emailParentId && this.emailChildId) {
                if (this.emailParentId === this.emailChildId) {
                    form.value.tag_id = this.emailParentId;
                    form.value.default_tag = 0;
                } else {
                    form.value.tag_id = this.emailParentId;
                    form.value.default_tag = this.emailChildId;
                }
            }
            form.value['mobile_no'] = config.mobileNoPrefix + form.value['mobile_no']
            this.formdata.append('default_tag', form.value.default_tag);
            this.formdata.append('from', form.value.from);
            this.formdata.append('mobile_no', form.value.mobile_no);
            this.formdata.append('sender_mail', form.value.sender_mail);
            this.formdata.append('source', form.value.source);
            this.formdata.append('subject', form.value.subject);
            this.formdata.append('tag_id', form.value.tag_id);
            this.loading = true;
            this.apiService.addNewCandidate(this.formdata).subscribe((res) => {
                this.loading = false;
                this.dialogRef.close();
                this.snackBar.open('Candidate Added', '', {
                    duration: 2000,
                });
            }, (err) => {
                this.diabledOnclick = false;
                this.loading = false;
                console.log(err);
                this.snackBar.open('Try Again!!', '', {
                    duration: 2000,
                });
            })
        }
    }
    uploadFile(event) {
        if (event.target.files) {
            const resume = event.target.files;
            const fileNames: any = [];
            const newformData = this.formdata;
            _.forEach(resume, (value, i) => {
                fileNames.push(`file${i + 1}`);
                if ((resume[i].type).includes('image')) {
                    const a = new ImageCompressor(resume[i], {
                        quality: .6,
                        success(result) {
                            newformData.append(`file${i + 1}`, result);
                        },
                        error(e) {
                            console.log(e.message);
                        },
                    });
                } else {
                    newformData.append(`file${i + 1}`, resume[i]);
                }
            })
            this.formdata = newformData;
            this.formdata.append('fileNames', JSON.stringify(fileNames));
        }
    }

    close() {
        this.dialogRef.close();
    }
}
