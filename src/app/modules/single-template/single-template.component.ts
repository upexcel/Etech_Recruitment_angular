import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-single-template',
    templateUrl: './single-template.component.html',
    styleUrls: ['./single-template.component.scss']
})
export class SingleTemplateComponent implements OnInit {
    open: boolean;
    @Input() temp: any;
    constructor() { }

    ngOnInit() {
        this.open = false;
    }

    delete(id: string) {

    }

    edit(id: string) {

    }

    test(temp: any) {

    }
}
