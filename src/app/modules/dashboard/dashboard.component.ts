import { Component, OnInit } from '@angular/core';
import { ImapMailsService } from './../../service//imapemails.service';
import { DashboardService } from './../../service/dashboard.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    pieChartLabels: any;
    pieChartData: any;
    pieChartType = 'pie';
    dashboardData: any;
    constructor(private _apiService: ImapMailsService, private _dashboardService: DashboardService) { }

    ngOnInit() {
        this._apiService.getDashboardData().subscribe((res) => {
            this.dashboardData = this._dashboardService.formatChartData(res);
        }, (err) => {
            console.log(err)
        });
    }

    chartClicked(e) {
        console.log(e);
    }

    chartHovered(e) {
        console.log(e);
    }

}
