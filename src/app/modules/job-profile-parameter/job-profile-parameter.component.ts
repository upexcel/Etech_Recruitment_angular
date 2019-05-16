import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { AddParameterModalComponent } from '../add-parameter-modal/add-parameter-modal.component';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
    selector: 'app-job-profile-param',
    templateUrl: './job-profile-parameter.component.html',
    styleUrls: ['./job-profile-parameter.component.scss']
})

export class JobProfileParameterComponent implements OnInit {
    dialogRef: MatDialogRef<any>;
    parameterList: any[];
    constructor(public dialog: MatDialog, private imapmailservice: ImapMailsService) { }

    ngOnInit() {

        // this.getJobProfileParameters();
    }

    getJobProfileParameters() {
        this.imapmailservice.getJobProfileParameters().subscribe(data => {
            this.parameterList = data.data;
            console.log(this.parameterList);
        }
        );
    }

    // updateJobProfileParameters(data) {
    //     this.imapmailservice.updateJobProfileParameters(data).subscribe(data => {
    //         console.log(data);
    //     }
    //     );
    // }

    // deleteJobProfileParameters(id) {
    //     this.imapmailservice.deleteJobProfilrParameter(id).subscribe(data => {
    //         console.log(data);
    //     }
    //     );
    // }


    addParam() {
        this.dialogRef = this.dialog.open(AddParameterModalComponent, {
            width: "60vw"
        });
    }
};