import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';
import { config } from './../../config/config';

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
    formdata = new FormData();
    validTypes = config.fileTypes;
    errorFileType:boolean = false;
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
            this.formdata.append('default_tag',form.value.default_tag);
            this.formdata.append('from',form.value.from);
            this.formdata.append('mobile_no',form.value.mobile_no);
            this.formdata.append('sender_mail',form.value.sender_mail);
            this.formdata.append('source',form.value.source);
            this.formdata.append('subject',form.value.subject);
            this.formdata.append('tag_id',form.value.tag_id);
            this.apiService.addNewCandidate(this.formdata).subscribe((res) => {
                this.dialogRef.close();
                this.snackBar.open('Candidate Added', '', {
                    duration: 2000,
                });
            }, (err) => {
                this.diabledOnclick = false;
                console.log(err)
            })
        }
    }
    uploadFile(event) {
        if(event.target.files[0]) {
        if(this.validTypes.indexOf(event.target.files[0].type)!=-1){
            let resume = event.target.files[0];
            this.formdata.append('resume',resume);
            this.errorFileType = false;
        }
        else {
            this.errorFileType = true;
        }
    }
    }

    close() {
        this.dialogRef.close();
    }
}
