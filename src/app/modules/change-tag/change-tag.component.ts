import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'app/service/local-storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-change-tag',
  templateUrl: './change-tag.component.html',
  styleUrls: ['./change-tag.component.scss']
})
export class ChangeTagComponent implements OnInit {
  tags:any;
  jobProfile:Array<any> = [];
  constructor(public localStorageService:LocalStorageService) {
    this.tags = localStorageService.getItem('tags');
    _.forEach(this.tags['Automatic'],(value,key)=>{
      this.jobProfile.push({title : value.title});
    })
    // console.log(this.jobProfile);
   }

  ngOnInit() {
    
  }

}
