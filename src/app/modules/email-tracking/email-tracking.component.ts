import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImapMailsService } from './../../service/imapemails.service';

@Component({
    selector: 'app-email-tracking',
    templateUrl: './email-tracking.component.html',
    styleUrls: ['./email-tracking.component.scss']
})
export class EmailTrackingComponent implements OnInit {
    trackingData: any;
    selectedTrackingData: any;
    startDate: any;
    endDate: any;
    filter = false;
    maxDate = new Date();
    constructor(private _apiService: ImapMailsService) { }
    ngOnInit() {
        this.emailTrackingData();
    }

    emailTrackingData() {
        this._apiService.getEmailTrackingData().subscribe((res) => {
            console.log(res)
            this.trackingData = res;
            this.selectedTrackingData = res[0];
        }, (err) => {
            console.log(err)
        })
    }

    changeInDateStartDate(e) {
        console.log(e)
        this.startDate = e;
    }
    changeInDateEndDate(e) {
        console.log(e)
        this.endDate = e;
    }

}
