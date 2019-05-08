import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ImapMailsService } from "app/service/imapemails.service";
import { MatSnackBar, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-mobile-number",
  templateUrl: "./add-mobile-number.component.html",
  styleUrls: ["./add-mobile-number.component.scss"]
})
export class AddMobileNumberComponent implements OnInit {
  emailData: any;
  addPhoneForm: FormGroup;
  apiInProgress: Boolean;
  
  constructor(
    private apiService: ImapMailsService,
    private dialogRef: MatDialogRef<AddMobileNumberComponent>,
    private formBuilder: FormBuilder,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.addPhoneForm = this.formBuilder.group({
      phone: [null, Validators.required]
    });
  }

  async addPhoneNumber(formData) {
    this.apiInProgress = true;
    formData["phone"] = "+91" + formData["phone"];
    try {
      await this.apiService.addMobileNumber(formData, this.emailData['_id']).toPromise();
      this.emailData["mobile_no"] = formData["phone"];
      this.dialogRef.close(this.emailData);
      this.apiInProgress = false;
    } catch (error) {
      this.matSnackBar.open("Something Went Wrong! Check Console", "", {
        duration: 2000
      });
      console.error(error);
      this.apiInProgress = false;
    }
  }
}
