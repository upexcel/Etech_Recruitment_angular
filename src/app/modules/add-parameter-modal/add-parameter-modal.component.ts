import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MatSnackBar, MatChipInputEvent } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';
import { jobProfileParameters, jobParameterValues } from '../../config/config';
import { element } from 'protractor';
@Component({
    selector: 'app-add-param-modal',
    templateUrl: './add-parameter-modal.component.html',
    styleUrls: ['./add-parameter-modal.component.scss']
})
export class AddParameterModalComponent implements OnInit {

    formData: any;
    flag = [];
    jobProfileParameters = jobProfileParameters;
    jobParameterList: any[];
    parameters: FormArray;
    paramForm: FormGroup;
    parameterValueOption: any[] = [];
    parameterDropdown: Array<any> = [];

    constructor(public dialogRef: MatDialogRef<any>, public _snackBar: MatSnackBar, private _fb: FormBuilder, private imapMailService: ImapMailsService) { }

    ngOnInit() {
        this.getJobProfileParameterData();
        this.flag = [];
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
        this.jobParameterList = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].type === 'Automatic' && data[i]['active_status']) {
                if (!this.jobParameterList['Automatic']) {
                    this.jobParameterList['Automatic'] = [];
                    this.jobParameterList['Automatic'].push(data[i]);
                } else {
                    this.jobParameterList['Automatic'].push(data[i]);
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
        this.flag.push({ value: false });
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

        this.createEditData(this.formData.data)
    }

    createEditData(formData) {
        for (var i = 0; i < formData.length; i++) {
            this.parameterDropdown.push({ id: i, name: formData[i].parameterName, values: jobParameterValues[formData[i].parameterName] })
            this.flag.push({ value: true })
        }
    }

    addParam(): FormGroup {
        return this._fb.group({
            parameterName: ['', Validators.required],
            parameterValue: ['', Validators.required],
            parameterWeight: ['', Validators.compose([Validators.required, Validators.max(10), Validators.min(-10), Validators.maxLength(2)])]
        })
    }

    addForms(i): void {
        (<FormArray>this.paramForm.get('parameters')).push(this.addParam());
        this.flag.forEach(element => {
            element.value = true;
        })
        this.flag.push({ value: false })
    }

    onSubmit(formData) {
        formData['parameters'].forEach(param => {
            param['parameterName'] = param['parameterName'];
            param['parameterValue'] = param['parameterValue'].toLowerCase();
            param['tagId'] = formData['tagId']
        });
        const apiData = { bulkData: formData['parameters'], tagId: formData['tagId'] };
        if (this.formData) {
            this.imapMailService.updateJobProfileParameters(apiData).subscribe(data => {
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

    removeParameterRow(i) {
        let control = <FormArray>this.paramForm.controls.parameters;
        control.removeAt(i);
        this.flag.splice(i, 1)
    }

    editParameterRow(index) {
        console.log(index);
        this.flag[index].value = !this.flag[index].value;
        console.log(this.flag);

    }

    selectParameterName(event, i) {
        const selected = this.parameterDropdown.findIndex(parameter => parameter.id === i);
        // if (event.value === 'dob' || event.value === 'location' || event.value === 'skill') {
        //     if(selected != -1) this.parameterDropdown.splice(selected, 1);
        //     return false;
        // };
        if (selected == -1) {
            this.parameterDropdown.push({ id: i, name: event.value, values: jobParameterValues[event.value] });
        } else {
            // debugger
            if (event.value === 'dob' || event.value === 'location' || event.value === 'skill') {
                let control = <FormArray>this.paramForm.controls.parameters;
                control['controls'][i].patchValue({
                    parameterValue: "",
                    parameterWeight: ""
                });
            }
            this.parameterDropdown.splice(selected, 1, { id: i, name: event.value, values: jobParameterValues[event.value] });
        }
        console.log(this.parameterDropdown);

    }

    close(data?) {
        this.dialogRef.close(data);
    }
}
