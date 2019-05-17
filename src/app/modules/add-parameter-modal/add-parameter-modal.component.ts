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
    formData: any;

    constructor(public dialogRef: MatDialogRef<any>, public _snackBar: MatSnackBar, private _fb: FormBuilder, private imapMailService: ImapMailsService) { }

    ngOnInit() {
        this.getJobProfileParameterData();
    }

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
        if (!this.formData) {
            this.createForm();
        } else {
            this.createFormData();
        }
    }

    createForm() {
        this.paramForm = this._fb.group({
            tagId: [''],
            parameters: this._fb.array([this.addParam()])
        });
    }

    createFormData() {
        const formData = { tagId: this.formData['tagId'], parameters: [] };
        this.formData['data'].forEach(parameter => {
            formData.parameters.push({
                parameterName: parameter.parameterName,
                parameterValue: parameter.parameterValue,
                parameterWeight: parameter.parameterWeight
            });
        });
        this.editForm(formData);
    }

    editForm(formData) {
        this.paramForm = this._fb.group({
            tagId: [formData.tagId],
            parameters: this._fb.array([])
        });
        this.paramForm.patchValue({
            tagId: formData.tagId,
        })
        let control = <FormArray>this.paramForm.controls.parameters;
        formData.parameters.forEach(parameter => {
            control.push(this._fb.group(parameter));
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
        const apiData = { bulkData: formData['parameters'], tagId: formData['tagId'] };
        if (this.formData) {
            this.imapMailService.updateJobProfileParameters(formData).subscribe(data => {
                console.log(data)
                this._snackBar.open('Job Profile Parameter Successfully Updated', '', {
                    duration: 2000
                });
                this.close('success');
            }, err => {
                console.error(err)
            });
        } else {
            this.imapMailService.addJobProfileParameter(apiData).subscribe((data) => {
                this.paramForm.reset();
                if (data.status == 0) {
                    this._snackBar.open(data.message, '', {
                        duration: 2000
                    });
                    this.close('success');
                } else {
                    this._snackBar.open('Job Profile Parameter Added', '', {
                        duration: 2000
                    });
                    this.close('success');
                }

            }, (err) => {
                console.error(err)
            });
        }
    }

    close(data?) {
        this.dialogRef.close(data);
    }
}
