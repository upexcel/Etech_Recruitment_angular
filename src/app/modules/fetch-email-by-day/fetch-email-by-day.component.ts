import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImapMailsService } from './../../service/imapemails.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { config } from './../../config/config';

@Component({
    selector: 'app-fetch-email-by-day',
    templateUrl: './fetch-email-by-day.component.html',
    styleUrls: ['./fetch-email-by-day.component.scss']
})
export class FetchEmailByDayComponent implements OnInit {
    daysForm: FormGroup;
    constructor(private dialogRef: MatDialogRef<any>, private formBuilder: FormBuilder, private _imapMailsService: ImapMailsService, public snackBar: MatSnackBar) {
        this.daysForm = this.formBuilder.group({
            'days': [null, Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]*$')])]
        });
    }

    ngOnInit() {
    }
    sendData() {
        if (this.daysForm.valid) {
            this._imapMailsService.fetchEmailByDays(this.daysForm.value).subscribe((res) => { }, (err) => { });
            this.dialogRef.close();
            this.daysForm.reset();
        }
    }

    close() {
        this.dialogRef.close('back');
    }
}
