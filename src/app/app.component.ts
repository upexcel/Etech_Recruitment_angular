import {Component, OnInit} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
// import { SqlLiteService } from './service/sqlite.service';
// import * as _ from 'lodash';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    tagdata: any;
    constructor() { }
    ngOnInit(): void {
        // this.sqliteservice.createSqlLiteDB()
        // this.sqliteservice.createSqlLiteTable()
        // this.sqliteservice.getData().subscribe((res) => {
        //     _.forEach(res, (value, key) => {
        //         if (value.Tag) {
        //             this.sqliteservice.insertSqlLiteTable(value.Tag)
        //         }
        //     })
        // })
        //   this.sqliteservice.dropTable()
    }

}
