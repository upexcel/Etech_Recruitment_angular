import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { NgForm } from '@angular/forms';


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
    constructor(public setvardialog: MdDialog, public dialogRef: MdDialogRef<any>, private apiService: ImapMailsService, public snackBar: MdSnackBar) {
    }

    ngOnInit() { }

    save(form: NgForm) {
        if (form.valid) {
            console.log(form.value)
            console.log(this.emailParentId, this.emailChildId)
            console.log(this.emailParenttitle, this.emailChildTitle)
            if (this.emailParentId && this.emailChildId) {
                if (this.emailParentId === this.emailChildId) {
                    form.value.tag_id = this.emailParentId;
                    form.value.default_tag = 0;
                } else {
                    form.value.tag_id = this.emailParentId;
                    form.value.default_tag = this.emailChildId;
                }
            }
            this.apiService.addNewCandidate(form.value).subscribe((res) => {
                this.dialogRef.close();
                this.snackBar.open('Candidate Added', '', {
                    duration: 2000,
                });
            }, (err) => {
                console.log(err)
            })
        }
    }

    close() {
        this.dialogRef.close();
    }
}
