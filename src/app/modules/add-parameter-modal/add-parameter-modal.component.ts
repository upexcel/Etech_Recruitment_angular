import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar, MatChipInputEvent } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
@Component({
    selector: 'app-add-param-modal',
    templateUrl: './add-parameter-modal.component.html',
    styleUrls: ['./add-parameter-modal.component.scss']
})
export class AddParameterModalComponent implements OnInit {

    tempList: any[];
    parameters: FormArray;
    paramForm: FormGroup;

    constructor(public dialogRef: MatDialogRef<any>, public _snackBar: MatSnackBar, private _fb: FormBuilder, private imapMailService: ImapMailsService) { }

    ngOnInit() { this.getJobProfileParameterData(); }

    getJobProfileParameterData() {
        this.imapMailService.getAllTags()
            .subscribe((data) => {
                this.filterParameterData(data);
            }, (err) => {
                console.log(err);
            });
    }

    filterParameterData(data: any) {
        this.tempList = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === 'Automatic') {
                if (!this.tempList['Automatic']) {
                    this.tempList['Automatic'] = [];
                    this.tempList['Automatic'].push(data[i]);
                } else {
                    this.tempList['Automatic'].push(data[i]);
                }
            }
        }
        this.createForm();
    }

    createForm() {
        this.paramForm = this._fb.group({
            tagId: [''],
            parameters: this._fb.array([this.addParam()])
        });
    }

    addParam(): FormGroup {
        return this._fb.group({
            parameterName: ['', Validators.required],
            parameterValue: ['', Validators.required],
            parameterWeight: ['', Validators.compose([Validators.required, Validators.max(10), Validators.min(1), Validators.maxLength(2)])]
        })
    }
    addForms(i): void { (<FormArray>this.paramForm.get('parameters')).push(this.addParam()); }

    onSubmit(formData) {
        formData['parameters'].forEach(param => {
            param['parameterName'] = param['parameterName'].toLowerCase();
            param['parameterValue'] = param['parameterValue'].toLowerCase();
            param['tagId'] = formData['tagId']
        });
        const apiData = { bulkData: formData['parameters'] };
        this.imapMailService.addJobProfileParameter(apiData).subscribe((data) => {
            this.paramForm.reset();
            this._snackBar.open('Job Profile Parameter Added', '', {
                duration: 2000
            })
        }, (err) => {
            console.log(err)
        });
        this.dialogRef.close();
    }
    close() { this.dialogRef.close(); }
}
