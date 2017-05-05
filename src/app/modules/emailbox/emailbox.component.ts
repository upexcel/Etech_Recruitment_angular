import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-emailbox',
    templateUrl: './emailbox.component.html',
    styleUrls: ['./emailbox.component.scss']
})
export class EmailboxComponent implements OnInit {
    @Input() email: any;
    constructor() { }

    ngOnInit() {
    }

}
