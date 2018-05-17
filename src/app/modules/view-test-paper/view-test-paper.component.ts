import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from '../../service/imapemails.service';
import { MatDialogRef } from '@angular/material';
import * as _ from 'lodash';

@Component({
    selector: 'app-view-test-paper',
    templateUrl: './view-test-paper.component.html',
    styleUrls: ['./view-test-paper.component.scss']
})
export class ViewTestPaperComponent implements OnInit {
    testId: any;
    testPaper: any;
    pdfData: any;
    htmlData = '';
    answerTable = '';
    generatePDFButtonDisable = true;
    constructor(private apiCall: ImapMailsService, private dialogRef: MatDialogRef<any>) { }

    ngOnInit() {
        this.apiCall.getTestPaperById(this.testId).subscribe(res => {
            this.testPaper = res.data;
            this.group();
            this.getQuestionPdfs();
        }, err => { });
    }
    close() {
        this.dialogRef.close();
    }
    group() {
        this.apiCall.examGroup().subscribe((data) => {
            _.forEach(data, (groupData, key) => {
                _.forEach(this.testPaper.SubjectQuestionLimits, (value, groupKey) => {
                    if (groupData.id === value.group_id) {
                        value.exam_subject = groupData.exam_subject;
                    }
                })
            })
        })
    }

    getQuestionPdfs() {
        this.apiCall.questionsForPDF(this.testId).subscribe(res => {
            console.log(res)
            this.generatePDFButtonDisable = false;
            this.pdfData = res.data;
            _.forEach(this.pdfData, (value, key) => {
                let questionsHtml = '';
                let answerHtml = '';
                _.forEach(value['questions'], (questionValue, questionKey) => {
                    let optionsHtml = '';
                    _.forEach(questionValue['options'], (optionValue, optionKey) => {
                        optionsHtml += `<li>${optionValue.option}</li>`
                    });
                    questionsHtml += `
                    <div style="margin-top: 0.5em;">
                    <p style="float:right; margin:0;">${questionValue.hard ? '2 Marks' : '1 Marks'}</p>
                        <ul style="list-style-type: none; margin:0;">
                            <li>
                                <h4 style="margin:0;">Question ${questionKey + 1}. <span>${questionValue.question}</span></h4>
                            </li>
                            <li style="display: ${(questionValue.description && questionValue.description.length > 0) ? 'block' : 'none'}">
                                <pre style=" min-height: 20px; padding: 19px; margin-bottom: 20px; background-color: #f5f5f5; border: 1px solid #e3e3e3; border-radius: 4px; -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05); box-shadow: inset 0 1px 1px rgba(0,0,0,.05);">${questionValue.description}</pre>
                            </li>
                            <li>Options:</li>
                            <ol>${optionsHtml}</ol>
                        </ul>
                    </div>
                    `
                    answerHtml += `<span>Question ${questionKey + 1} => <b>Ansewer: ${questionValue.answer},</b></span>&nbsp;&nbsp;&nbsp;`;
                })
                this.answerTable += `<h4>${value.group_name}</h4>
                ${answerHtml}
                `;
                this.htmlData += `<h4 style="margin: 0 20px;">${value.group_name}</h4>
                ${questionsHtml}
                `;
            })
        }, err => {
        });
    }

    generateTestPDF() {
        const win = window.open('', `Excellence Technologies: ${this.testPaper.testName} Test`, 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=980,height=500,top=' + (screen.height - 400) + ',left=' + (screen.width - 840));
        win.document.body.innerHTML = `
        <h3>Excellence Technologies: ${this.testPaper.testName} Test</h3>
        ${this.htmlData}
        <br>
        <h3>Answers</h3>
        ${this.answerTable}
        <div style="display: block; text-align: center;">
            <button onclick="parentNode.remove(); window.print()">Print</button>
        </div>
        `;
    }
}
