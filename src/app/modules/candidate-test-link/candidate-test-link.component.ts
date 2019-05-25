import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-candidate-test-link',
  templateUrl: './candidate-test-link.component.html',
  styleUrls: ['./candidate-test-link.component.scss']
})
export class CandidateTestLinkComponent implements OnInit {

  userId: any;
  spinner : boolean;
  constructor(private route: ActivatedRoute, private imapmailservice: ImapMailsService, private snackBar: MatSnackBar, private router : Router) { }

  ngOnInit() {
    this.spinner = false;
    this.route.params.subscribe(param => {
     // code to get id from url
      // this.userId = param.userId

      this.userId  = "5ce7d5c67f4ba87b8690bb42";
      

    })
  }
  
  generateTestLink(pageUrl) {
    this.spinner = true;
    this.imapmailservice.generateTestLink(this.userId).subscribe((response) => {
      console.log(response);
      
      const url = `${window.location.origin}/#/${pageUrl}/${response.data}`;
      console.log(url);
      
      this.imapmailservice.getBitlyURL(escape(url)).subscribe((res) => {
        console.log(res)
        if (res['status_code'] === 200) {
        //   window.open(res['data']['url'])
        //   this.openSnackBarForExamUrl(res['data']['url']);
        // } else {
        //   this.openSnackBarForExamUrl(url);
        console.log(res['data']['url']);
        window.open(res['data']['url']);
          // event.preventDefault();
        
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
    this.spinner = false;
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
