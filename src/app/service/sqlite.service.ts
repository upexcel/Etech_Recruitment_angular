import { Injectable } from '@angular/core';
import { ImapMailsService } from './imapemails.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import forEach from 'lodash/forEach';
import keys from 'lodash/keys';

import * as sqldata from './../../assets/sqlite.json';
import * as tabledata from './../../assets/table.json'

declare let window: any;



@Injectable()

export class SqlLiteService {

    db: any;
    constructor(private http: Http, private apiService: ImapMailsService) { }

    createSqlLiteDB() {
        try {
            if (window.openDatabase) {
                const databaseName = 'tableDB';
                const version = '1.0';
                const displayName = 'recruit';
                const maxSize = 65535;
                this.db = window.openDatabase(databaseName, version, displayName, maxSize);
            }
        } catch (e) {
            alert(e);
        }

    }

    createSqlLiteTable() {
        return new Promise((resolve, reject) => {
            const findLength = keys(tabledata);
            let count = 0;
            forEach(tabledata, (value, key) => {
                this.db.transaction(function (tx) {
                    count++;
                    tx.executeSql(`${value}`, [], function (tx, res) {
                        console.log('table created successfully!');
                    }, function () {
                        console.log('query error');
                    })
                })
            })
        })
    }

    insertSqlLiteTable() {
        const findLength = keys(sqldata);
        let count = 0;
        let insert: String = '';
        forEach(tabledata, (value, key) => {
            if (key === 'insertData') {
                insert = value;
            }
        })
        forEach(sqldata, (value, key) => {
            count++;
            forEach(value.data, (value1, key1) => {
                let dataToInsert: String = '';
                forEach(value1, (value3, key2) => {
                    dataToInsert = dataToInsert + '"' + value3 + '"' + '' + ',';
                })
                this.insert(insert, dataToInsert);
            })

        });
    }

    insert(insert, dataToInsert) {
        dataToInsert = dataToInsert.slice(0, -1);
        this.db.transaction(function (tx) {
            tx.executeSql(`${insert} VALUES (${dataToInsert})`, [], function (res) {
                console.log('inserted', res)
            }, function (err) {
                console.log('error', err)
            });
        })
    }

};
