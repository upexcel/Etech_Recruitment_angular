import {Component, OnInit, OnDestroy } from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import { SqlLiteService } from './service/sqlite.service';
import forEach from 'lodash/forEach';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {

    constructor(public _SqlLiteService: SqlLiteService) { }

    ngOnInit(): void {
        this._SqlLiteService.createSqlLiteDB();
        this._SqlLiteService.createSqlLiteTable();

        this._SqlLiteService.getData().subscribe((res) => {
            // console.log('api', res);
            forEach(res, (value, key) => {
                // console.log(value, key)
                if (value.emailFetch ) {
                  this._SqlLiteService.insertSqlLiteTable('emailFetch', value.emailFetch);
                }
            });
            // // this._SqlLiteService.insertSqlLiteTable();
            // this._SqlLiteService.fetchSqlLiteTable();
        })

    }

    ngOnDestroy() {
        // this._SqlLiteService.dropSqlLiteTable();
    }

}
