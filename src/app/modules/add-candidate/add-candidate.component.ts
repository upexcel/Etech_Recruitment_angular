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
    diabledOnclick: boolean
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
            this.apiService.addNewCandidate(form.value).subscribe((res) => {
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

    close() {
        this.dialogRef.close();
    }
}
