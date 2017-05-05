import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-inbox-side-nav',
    templateUrl: './inbox-side-nav.component.html',
    styleUrls: ['./inbox-side-nav.component.scss']
})
export class InboxSideNavComponent implements OnInit {
    firstlist = true;
    secondlist = false;
    constructor() { }

    ngOnInit() {
    }

}
