import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { ImapMailsService } from 'app/service/imapemails.service';
import { LocalStorageService } from 'app/service/local-storage.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-change-tag',
  templateUrl: './change-tag.component.html',
  styleUrls: ['./change-tag.component.scss']
})
export class ChangeTagComponent implements OnInit {
  tagIdArray;
  tags: any;
  id: any;
  selected;
  showloading: boolean;
  jobProfile: Array<any> = [];
  tagIdTitle: Array<any> = [];
  placeholder;
  constructor(public dialogRef: MdDialogRef<any>, public localStorageService: LocalStorageService, public imapMailsService: ImapMailsService,public snackBar: MdSnackBar) {
    this.tags = localStorageService.getItem('tags')
  }

  ngOnInit() { 
    this.showloading = false;
    _.forEach(this.tags['Automatic'], (value, key) => {
      if(value.id != null && value.id !=0){
      this.jobProfile.push({ title: value.title });
    }
    })
    this.tagIdArray = _.uniq(this.tagIdArray);
    _.forEach(this.tagIdArray, (value1, key) => {
      _.forEach(this.tags['Automatic'], (value2, key) => {
        if(value1 == value2.id) {
          this.tagIdTitle.push(value2.title);
        }
      })
    })
    _.forEach(this.tagIdTitle,(value3,key)=>{
      _.remove(this.jobProfile,{'title':value3});
    });
    if(this.jobProfile.length) {
      this.placeholder = "Job Profile";
    } else {
      this.placeholder = "No Profile";
      
    }
  }
  changeJobProfile(title) {
    _.forEach(this.tags['Automatic'], (value, key) => {
      if (value.title == title.selectNewTag) {
        this.assign(value.id, this.id);
      }
    })
  }
  assign(tag_id, id: any) {
    this.selected = {
      'tag_id': tag_id,
      'mongo_id': id
    };
    this.showloading = true;
    this.close();
    this.imapMailsService.assignTag(this.selected).subscribe((data) => {
      this.showloading =  false;
      this.snackBar.open('Moved Successfully', '', {
        duration: 2000,
    })
      this.broadcast_send();
    }, (err) => {
      console.log(err);
    });
  }
  broadcast_send() {
    localStorage.setItem('tagReassigned',this.id);
  }
  close() {
    this.dialogRef.close();
  }
}
