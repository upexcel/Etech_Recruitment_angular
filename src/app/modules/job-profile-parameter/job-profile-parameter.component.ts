import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { AddParameterModalComponent } from '../add-parameter-modal/add-parameter-modal.component';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatSnackBar } from '@angular/material';
import { DialogService } from 'app/service/dialog.service';

@Component({
    selector: 'app-job-profile-param',
    templateUrl: './job-profile-parameter.component.html',
    styleUrls: ['./job-profile-parameter.component.scss']
})

export class JobProfileParameterComponent implements OnInit {
    dialogRef: MatDialogRef<any>;
    parameterList: any[];

    constructor(
        private dialog: MatDialog,
        private dialogService: DialogService,
        private imapmailservice: ImapMailsService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.getJobProfileParameters();
    }

    getJobProfileParameters() {
        this.imapmailservice.getJobProfileParameters().subscribe(data => {
            this.parameterList = data.data;
        });
    }

    addParam() {
        this.dialogRef = this.dialog.open(AddParameterModalComponent, {
            width: "65vw"
        });
        this.dialogRef.afterClosed().subscribe(res => {
            if (res === 'success') {
                this.getJobProfileParameters();
            }
        })
    }

    deleteParameter(id) {
        this.dialogService.openConfirmationBox('Are you sure ?').then((res) => {
            if (res === 'yes') {
                this.imapmailservice.deleteJobProfileParameter(id).subscribe(res => {
                    if (res.status) {
                        this.getJobProfileParameters();
                        this.snackBar.open(`Parameter Deleted Successfully`, '', {
                            duration: 2000,
                        });
                    }
                }, (err) => {
                    console.error(err);
                });
            }
        }, (err) => {
            console.error(err);
        });
    }

    editParameter(parameter: any) {
        this.dialogRef = this.dialog.open(AddParameterModalComponent, { width: '65vw' });
        this.dialogRef.componentInstance.formData = parameter;
        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getJobProfileParameters();
            }
        });
    }
}