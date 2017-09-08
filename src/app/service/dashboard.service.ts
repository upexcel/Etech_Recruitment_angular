import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
@Injectable()
export class DashboardService {
    constructor() { }

    formatChartData(res) {
        _.forEach(res.day_wise, (value, key) => {
            _.forEach(value.dates, (dates, datesKey) => {
                value.dates[datesKey] = moment(dates).format('Do MMM');
            });
        });
        _.forEach(res.email_stat, (value, key) => {
            _.forEach(value.dates, (dates, datesKey) => {
                value.dates[datesKey] = moment(dates).format('Do MMM');
            });
        });
        _.forEach(res.read_email_data, (value, key) => {
            _.forEach(value.dates, (dates, datesKey) => {
                value.dates[datesKey] = moment(dates).format('Do MMM');
            });
        });
        return res;
    }
}
