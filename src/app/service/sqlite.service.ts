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

    getData() {
      // return this.http.get('http://192.168.1.117:8091/new/inboxContent/5')
      return this.http.get('./../../assets/sqlite.json')

        .map( (res ) => {
            return res.json();
        })
    }


    createSqlLiteDB() {
        try {
            if (window.openDatabase) {
                const databaseName = 'HRRRR';
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
                    console.log(`${value}`)
                    tx.executeSql(`${value}`, [], function (res, err) {
                      console.log('table created successfully!',  res, err);
                    }, function () {
                        console.log('query error');
                    })
                })
            })
        })
    }

    dropSqlLiteTable() {
        this.db.transaction(function (tx) {
            tx.executeSql(`DROP TABLE emailFetch`, [], (res, err) => {
                console.log('table created successfully!', res, err);
            }, () => {
                console.log('query error');
            })
        })
    }

    insertSqlLiteTable(tableName, data) {
        console.log(sqldata)
        console.log(data, tableName)

        const findLength = keys(data);

        // forEach(data, (value, key) => {
        //     count++;
            forEach(data, (value1, key1) => {
                let dataToInsert: String = '';
                forEach(value1, (value3, key2) => {
                    if (typeof(value3) === 'object') {
                        // value3 = JSON.stringify(value3)
                      value3 = value3.toString();
                        console.log(value3)
                    }
                    dataToInsert = dataToInsert + '"' + value3 + '"' + '' + ',';
                })

                this.insert(tableName, dataToInsert);
            })

        // });
    }

    insert(insert, dataToInsert) {
        dataToInsert = dataToInsert.slice(0, -1);
        // console.log(dataToInsert)

        this.db.transaction(function (tx) {
          console.log(`INSERT INTO ${insert} VALUES (${dataToInsert})`)
            tx.executeSql(`INSERT INTO ${insert} VALUES (${dataToInsert})`, [], (res) => {
                console.log('inserted', res)
            }, (err) => {
                console.log('error table not inserted', err)
            });
        })
    }

    fetchSqlLiteTable() {
        const lists = [];
        return new Promise((resolve, reject) => {
            this.db.transaction(function (tx) {
                tx.executeSql(`SELECT * from allEmailData`, [], (err, rows ) => {
                    console.log('fetched', rows)
                    const contador = 0;
                    forEach(rows, (value11 , key11) => {
                      // lists[contador] = value11.nombre + ';' + value11.cedula + ';' + value11.edad + ';'
                      //   + value11.pais;
                        console.log(value11, key11)
                    });
                    console.log(lists)
                });
            })
        })
    };

};
