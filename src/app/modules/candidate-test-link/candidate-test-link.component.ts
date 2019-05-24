import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-candidate-test-link',
  templateUrl: './candidate-test-link.component.html',
  styleUrls: ['./candidate-test-link.component.scss']
})
export class CandidateTestLinkComponent implements OnInit {

  userId: any;
  constructor(private route: ActivatedRoute, private imapmailservice: ImapMailsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.userId = param.userId
      console.log(this.userId);

      //this.imapmailservice.

    })
  }
  
  generateTestLink(email, pageUrl) {
    // window.open("https://www.google.com", "_blank");
    this.imapmailservice.generateTestLink(email['_id']).subscribe((response) => {
      const url = `${window.location.origin}/#/${pageUrl}/${response.data}`;
      this.imapmailservice.getBitlyURL(escape(url)).subscribe((res) => {
        console.log(res)
        if (res['status_code'] === 200) {
          this.openSnackBarForExamUrl(res['data']['url']);
        } else {
          this.openSnackBarForExamUrl(url);
        }
      }, (err) => {
        console.log(err)
        this.openSnackBarForExamUrl(url);
      })
    }, (err) => {
      console.log(err);
    })
  }

  openSnackBarForExamUrl(url) {
    const snackBarRef = this.snackBar.open(url, 'Copy', {
      duration: 20000
    });
    snackBarRef.onAction().subscribe(() => {
      const inp = document.createElement('input');
      document.body.appendChild(inp)
      inp.value = url;
      inp.select();
      document.execCommand('copy', false);
      inp.remove();
      this.snackBar.open(`Copied`, '', {
        duration: 1000
      });
    });
  }


}
