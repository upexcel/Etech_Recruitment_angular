import { Injectable } from '@angular/core';
declare let window: any;
@Injectable()
export class SqlLiteService {
    db: any
    constructor() { }
    createDatabase() {
        try {
            if (window.openDatabase) {
                const databaseName = 'databaseDb';
                const version = '1.0';
                const displayName = 'myDatabase';
                const maxSize = 65535;
                this.db = window.openDatabase(databaseName, version, displayName, maxSize);
                console.log('>>>>>>>>>>>>', this.db);
            }
        }catch (e) {
            alert(e);
        }
    }
    createTable() {
        this.db.transaction(function(tx){
            tx.executeSql('CREATE TABLE EMAIL (id varchar PRIMARY KEY, datefrom varchar, sender_mail varchar, date varchar, email_date varchar, subject, unread integer, uid integer, is_automatic_email_send integer, default_tag varchar, is_attachment integer)');
            // tx.executeSql('CREATE TABLE fetch_email (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, from VARCHAR, sender_mail VARCHAR, subject VARCHAR, unread INTEGER, uid INTEGER, is_automatic_email_send INTEGER, default_tag VARCHAR, is_attachment INTEGER)');
        });
    }
    insertValue() {
        this.db.transaction(function(tx){
            tx.executeSql('insert into EMAIL (id,datefrom,sender_mail,date,email_date,subject,unread,uid,is_automatic_email_send,default_tag,is_attachment) VALUES ("5a1551b0aa656f24f550e217s1","sds","testexcel69@gmail.com","2017-11-22T10:23:29.000Z","2017-11-22T10:23:29.000Z",Smtp test",0,368,0,"sdsd",0)');
        });
    }
    dropTable() {
        this.db.transaction(function(tx){
            tx.executeSql('DROP TABLE EMAIL');
        })
    }
    // insertValue(){
    //     let img = document.getElementById('image');
    //     let sql = 'insert into image (name,image) VALUES ("sujeet","'+img + '")';
    //     executeQuery(sql, function(results){alert(results)});
    // }
}

