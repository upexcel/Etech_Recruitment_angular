import { Component, OnInit, NgZone } from '@angular/core';
import { LoginService } from '../../service/login.service';
import { CommonService } from '../../service/common.service';
import { LocalStorageService } from '../../service/local-storage.service';
import { MatSnackBar, MatDialog, MatDialogRef } from '@angular/material';
import { OtpdialogComponent } from '../otpdialog/otpdialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  apiFire;
  emailTestObj;
  loading;
  dialogRef: MatDialogRef<any>;
  counter;
  count = 30;
  again:boolean;
  constructor(public dialog: MatDialog, private ngzone: NgZone, private access: LoginService, public commonService: CommonService, public localStorageService: LocalStorageService, public _router: Router) { }

  ngOnInit() {
    this.apiFire = setInterval(() => {
      this.emailTestObj = this.localStorageService.getItem('walkinUser');
      this.access.candidate_login(this.emailTestObj).subscribe(response => {
        let added = this.commonService.storeFbdata(this.emailTestObj);
          if (response.status === 1) {
            clearInterval(this.apiFire);
            clearInterval(this.counter);
            this._router.navigate([`/testpageotp/${response.fb_id}`]);            
          }
      }, (err) => {
        console.log(err);
          this.loading = false;
      })
    }, 30000);
    this.counter = setInterval(()=>{
      this.count--;
      if(this.count==0) {
        this.count = 30;
        this.again = true;
      }
    },1000)
  }
  ngOnDestroy(){
    if(this.apiFire) {
      clearInterval(this.apiFire);
      clearInterval(this.counter);               
    }
  }
}
