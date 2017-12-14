import { Injectable } from '@angular/core';
import { ImapMailsService } from './imapemails.service';
import forEach from 'lodash/forEach';
import keys from 'lodash/keys';
import {UUID} from 'angular2-uuid';
import { stringify } from '@angular/core/src/util';
import * as sqldata from './../../assets/sqlite.json';
import * as tablestruct from './../../assets/structure.json';
import * as dynamicStruct from './../../assets/tag_strct.json';
declare let window: any;
@Injectable()
export class SqlLiteService {
    db: any;
    constructor(private apiService: ImapMailsService) {}
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
    dynamicSqlLiteTable() {
        console.log('dynamic', dynamicStruct)
        return new Promise((resolve, reject) => {
            const findLength = keys(dynamicStruct);
            let count = 0;
            forEach(dynamicStruct, (tablevalue, tablekey) => {
                forEach(tablevalue, (fieldvalue, fieldkey) => {
                    let dynamicField: String = ''
                    forEach(fieldvalue, (typevalue, typekey) => {
                        if (typevalue.type === 'ENUM(\'Default\',\'Manual\',\'Automatic\')') {
                            typevalue.type = 'VARCHAR'
                        }
                        dynamicField = dynamicField + '' + typekey + ' ' + typevalue.type + '' + '' + ',';
                    })
                    dynamicField = dynamicField.slice(0, -1);
                    this.db.transaction(function(tx){
                        count++;
                        tx.executeSql(`CREATE TABLE IF NOT EXISTS tags (${dynamicField})`, [], function(tx, res){
                            console.log('table created successfully!');
                        }, function(err){
                            console.log('query error', err);
                        })
                    })
                })
            })
        })

    }
    dropTable() {
        this.db.transaction(function(tx){
            tx.executeSql('DROP TABLE tags');
        })
    }

}

