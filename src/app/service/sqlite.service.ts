import {Injectable} from '@angular/core';
import {ImapMailsService} from './imapemails.service';
import * as _ from 'lodash';
import {stringify} from '@angular/core/src/util';
import * as sqldata from './../../assets/sqlite.json';
import * as tablestruct from './../../assets/structure.json';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {LocalStorageService} from './local-storage.service';
declare let window: any;
@Injectable()
export class SqlLiteService {
    fetchLocalEmails: any;
    db: any;
    constructor(private apiService: ImapMailsService, private http: Http, private _localStorageService: LocalStorageService) {}
    createSqlLiteDB() {
        try {
            if (window.openDatabase) {
                const databaseName = 'Recruit';
                const version = '1.0';
                const displayName = 'myDatabase';
                const maxSize = 65535;
                this.db = window.openDatabase(databaseName, version, displayName, maxSize);
            }
        } catch (e) {
            alert(e);
        }
    }
    createSqlLiteTable() {
        return new Promise((resolve, reject) => {
            const findLength = _.keys(tablestruct);
            let count = 0;
            _.forEach(tablestruct, (value, key) => {
                this.db.transaction(function (tx) {
                    count++;
                    tx.executeSql(`${value}`, [], function (tx, res) {
                        // console.log('table created successfully!');
                    }, function () {
                        // console.log('query error');
                    })
                })
            })
            resolve(0)
        })
    }
    insertSqlLiteTable(tableName, data) {
        return new Promise((resolve, reject) => {
            const findLength = _.keys(sqldata);
            let count = 0;
            count++;
            if (this._localStorageService.getItem('tablecount') !== 1) {
                let flag = false;
                _.forEach(data, (value1, key1: any) => {
                    let dataToInsert: String = '';
                    _.forEach(value1, (value3, key2) => {
                        if (typeof (value3) === 'object') {
                            value3 = value3.toString()
                        }
                        dataToInsert = dataToInsert + '"' + value3 + '"' + '' + ',';
                        if (key2 === 'tag_id') {
                            flag = true;
                        }
                    })
                    dataToInsert = dataToInsert.slice(0, -1);
                    this.db.transaction(function (tx) {
                        tx.executeSql(`INSERT INTO ${tableName} VALUES (${dataToInsert})`, [], (res) => {
                            if (key1 === data.length - 1 && flag) {
                                resolve('sucess');
                            }
                        }, function (err) {
                        });
                    })
                })
            } else {
                reject('errr');
            }
        });
    }

    fetchMails(data, cb) {
        console.log('fetch email caleed data is ', data);
        let fetcheddata = {};
        const self = this;
        this.db.transaction(function (tx: any) {
            if (data.tag_id === 0 || data.tag_id === '0') {
                tx.executeSql(`SELECT * FROM ${data.table} WHERE tag_id="" AND is_attachment=='false' LIMIT ${data.limit} OFFSET  ${((data.page) - 1)}  * ${(data.limit)} `, [], function (tx, results) {
                    console.log('response fetched results', tx, results, results.rows.length)
                    results['data'] = []
                    _.forEach(results.rows, (value, key) => {
                        console.log(value.attachment);
                        if (value.tag_id === '') {
                            value.tag_id = [];
                        }else {
                            value.tag_id = value.tag_id.split(',');
                        }
                        if (value.attachment === '') {
                            value.attachment = [];
                        } else {
                            value.attachment = value.attachment.split(',');
                        }
                        if (value.is_attachment === 'false') {
                            value.is_attachment = false;
                        }
                        value.from = value._sfrom;
                        results['data'].push(value)
                    })
                    fetcheddata = results;
                    self.counteTotalmail(data.table, count => {
                        if (results['data']) {
                            results['count'] = count;
                        }
                    });
                    cb(results);
                }, function (tx, error) {
                });
            } else {
                console.log('errroorrr')
            }
        });
    }
    counteTotalmail(table, cb) {
        this.db.transaction(function (tx: any) {
            tx.executeSql(`SELECT count(*) AS count FROM ${table} WHERE tag_id="" AND is_attachment=='false'`, [], function (tx, results) {
                let count = '';
                count = results['rows'][0]['count']
                cb(count);
            }, function (tx, error) {
            });
        })
    }
    dropTable() {
        this.db.transaction(function (tx: any) {
            tx.executeSql('DROP TABLE emailFetch');
        })
    }
}

