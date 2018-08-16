import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { ImapMailsService } from '../../service/imapemails.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  companyProfileForm: FormGroup;
  previousContent: any;
  constructor(
    private fb: FormBuilder,
    private apiService: ImapMailsService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getCompanyProfile();
  }

  getCompanyProfile() {
    this.apiService.getCompanyProfile().subscribe((res) => {
      this.previousContent = res;
      if (!this.previousContent) {
        this.createForm();
      } else {
        this.updateForm(this.previousContent);
      }
    })
  }

  createForm() {
    this.companyProfileForm = this.fb.group({
      'company_profile': null
    })
  }


  updateForm(formData) {
    this.companyProfileForm = this.fb.group({
      'company_profile': formData['company_profile'],
    })
  }

  companyProfile(formData) {
    if (!this.previousContent) {
      this.apiService.addCompanyProfile(formData).subscribe((res) => {
        this.snackbar.open('Company Profile Added', '', {
          duration: 2000
        })
        this.getCompanyProfile();
      })
    } else {
      this.apiService.updateCompanyProfile(this.previousContent['id'], formData).subscribe((res) => {
        this.previousContent['company_profile'] = formData['companyProfile'];
        this.snackbar.open('Company Profile Updated', '', {
          duration: 2000
        })
      })
    }
  }
}
