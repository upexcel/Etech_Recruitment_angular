import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    pieChartLabels: any;
    pieChartData: any;
    pieChartType = 'pie';
    constructor() { }

    ngOnInit() {
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
    }

    chartClicked(e) {
        console.log(e);
    }

    chartHovered(e) {
        console.log(e);
    }

}
