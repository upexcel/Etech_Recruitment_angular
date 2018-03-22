import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-remove-old-logs',
  templateUrl: './remove-old-logs.component.html',
  styleUrls: ['./remove-old-logs.component.scss']
})
export class RemoveOldLogsComponent implements OnInit {
  currentUser: string;
  showloading: boolean;
  constructor(public dialogRef: MatDialogRef<any> ,private imapMailService: ImapMailsService) { }

  ngOnInit() {
  }

  removeOldlogs(data) {
    const body = {
      'userId': this.currentUser,
      'start': new Date(data.from),
      'end': new Date(data.to)
    }    
    this.showloading = true;
    this.dialogRef.close("close");
    this.imapMailService.removeOldlogs(body).subscribe(()=>{
      this.showloading = false;      
    }, (err)=> {
      this.showloading = false;            
      console.log(err);      
    });
  }

  close() {
    this.dialogRef.close();
  }
}
