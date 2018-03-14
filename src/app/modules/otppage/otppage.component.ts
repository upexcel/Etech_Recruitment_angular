import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-otppage',
  templateUrl: './otppage.component.html',
  styleUrls: ['./otppage.component.scss']
})
export class OtppageComponent implements OnInit {
  fb_id: any;
  otp: any;
  error = false;
  errorMsg: any;
  loading: boolean;

  constructor(private access: LoginService, private _router: Router, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.fb_id = this.activatedRoute.snapshot.paramMap.get('candidateId');
  }
  submitOtp() {
    this.loading = true;
    this.access.candidateOtp_login({ 'fb_id': this.fb_id, 'examToken': this.otp }).subscribe(response => {
    this.loading = false;      
        if (response.status === 1) {
                localStorage.setItem('token', 'true');
                localStorage.setItem('role', JSON.stringify('Candidate'));
                localStorage.setItem('user', response.data.name);
                localStorage.setItem('user_id', response.data.fb_id);
                localStorage.setItem('img', response.data.profile_pic);
                localStorage.setItem('start', JSON.stringify(new Date()));
                this._router.navigate(['/candidate/interviewques', this.fb_id]);
        }
    }, err => {
        this.errorMsg = err.message;
        this.error = true;
        this.loading = false;        
    })
}
}
