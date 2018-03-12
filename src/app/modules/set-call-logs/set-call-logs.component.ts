import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ImapMailsService } from '../../service/imapemails.service';

@Component({
  selector: 'app-set-call-logs',
  templateUrl: './set-call-logs.component.html',
  styleUrls: ['./set-call-logs.component.scss']
})
export class SetCallLogsComponent implements OnInit {
  id: string;
  constructor(public dialogRef: MatDialogRef<any>, public imap: ImapMailsService, private _mdSnackBar: MatSnackBar) { }

  ngOnInit() {
  }

  changeStatus(value) {
    let body = {
      'callingStatus': value
    }
    if (value == 'success') {
      body['callSuccessTime'] = new Date();
    }
    this.dialogRef.close(body);
    this.imap.setCallStatus(this.id, body).subscribe((res) => {
      if (res.status == 1) {
        this._mdSnackBar.open('Call Status Recorded.', '', {
          duration: 2000,
        });
      }
    }, (err) => {
      this._mdSnackBar.open('Something went wrong, Please try again.', '', {
        duration: 2000,
      });
    })

  }
  close() {
    this.dialogRef.close();
  }
}
