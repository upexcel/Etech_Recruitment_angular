import {Component, OnInit} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { SqlLiteService } from './service/sqlite.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private sqliteservice: SqlLiteService) { }
    ngOnInit(): void {
        this.sqliteservice.createSqlLiteDB()
        this.sqliteservice.createSqlLiteTable()
        this.sqliteservice.dynamicSqlLiteTable()
    }

}
