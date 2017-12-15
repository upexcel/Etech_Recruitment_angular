import { Injectable } from '@angular/core';
import { ImapMailsService } from './imapemails.service';
import forEach from 'lodash/forEach';
import keys from 'lodash/keys';
import {UUID} from 'angular2-uuid';
import { stringify } from '@angular/core/src/util';
import * as sqldata from './../../assets/sqlite.json';
import * as tablestruct from './../../assets/structure.json';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
declare let window: any;
@Injectable()
export class SqlLiteService {
    db: any;
    constructor(private apiService: ImapMailsService, private http: Http ) {}
    createSqlLiteDB() {
        try {
            if (window.openDatabase) {
                const databaseName = 'Hr_Recruit';
                const version = '1.0';
                const displayName = 'myDatabase';
                const maxSize = 65535;
                this.db = window.openDatabase(databaseName, version, displayName, maxSize);
            }
        }catch (e) {
            alert(e);
        }
    }
    createSqlLiteTable() {
        return new Promise((resolve, reject) => {
            const findLength = keys(tablestruct);
            let count = 0;
            forEach(tablestruct, (value, key) => {
                this.db.transaction(function(tx){
                    count++;
                    tx.executeSql(`${value}`, [], function(tx, res){
                        console.log('table created successfully!');
                    }, function(){
                        console.log('query error');
                    })
                })

            })
        })

    }
    insertSqlLiteTable(insertData) {

        const findLength = keys(sqldata);
        let count = 0;
        count++;
        forEach(insertData, (value1, key1) => {
            let dataToInsert: String = '';
            forEach(value1, (value3, key2) => {
                if (typeof(value3) === 'object' ) {
                    value3 = JSON.stringify(value3)
                }
                dataToInsert = dataToInsert + '"' + value3 + '"' + '' + ',';
            })
            this.insert(dataToInsert);
        })
    }

    insert(dataToInsert) {
        dataToInsert = dataToInsert.slice(0, -1);
        console.log(dataToInsert)
        this.db.transaction(function (tx) {
            tx.executeSql(`insert into tag_table VALUES (${dataToInsert})`, [], function (res) {
                console.log('inserted', res)
            }, function (err) {
                console.log('error', err)
            });
        })
    }
    getData() {
        return this.http.get('http://192.168.1.117:8091/new/inboxContent/100')
        .map( (res ) => {
            return res.json();
        })
    }
    dropTable() {
        this.db.transaction(function(tx){
            tx.executeSql('DROP TABLE tag_table');
        })
    }

}

