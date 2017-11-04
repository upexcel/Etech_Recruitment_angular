import {
    Component,
    OnInit
} from '@angular/core';
import {
    ImapMailsService
} from '../../service/imapemails.service';
import clone from 'lodash/clone';
@Component({
    selector: 'slack-info',
    templateUrl: './slack-info.component.html',
    styleUrls: ['./slack-info.component.scss']
})
export class SlackInfoComponent implements OnInit {
    slackJson: any[];
    loading: boolean=true;
    selectchannel: any;
    showmessage: boolean = true;
    message: any;
    constructor(public _apiService: ImapMailsService) {}
    ngOnInit() {
        this.getSlackList();
    }
    select(index, id) {
        let refData = Object.assign({}, this.slackJson[index]);
        delete refData['channel_list'];
        this.updateSlackList(refData, id)
    }
    activateSlack(slackdata, id) {
        slackdata.status = !slackdata.status;
        this.updateSlackList(slackdata, id)
    }
    getSlackList() {
        this._apiService.getSlackInfo().subscribe((data) => {
            this.loading=false;
                this.slackJson = data;
            },
            (err) => {
                console.log(err);
            });
    }
    updateSlackList(refData, id) {
        this._apiService.updateSlackInfo(refData, id).subscribe((data) => {
                this.showmessage = true;
                this.message = "Data Updated!"
                if (data) {
                    this.getSlackList();
                    this.showmessage = false;
                }
            },
            (err) => {
                console.log(err);
            });
    }
    deleteSlackData(id) {
        this._apiService.deleteSlackData(id).subscribe((data) => {
                this.getSlackList();
            },
            (err) => {
                console.log(err);
            });
    }
}