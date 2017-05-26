import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-single-template',
    templateUrl: './single-template.component.html',
    styleUrls: ['./single-template.component.scss']
})
export class SingleTemplateComponent implements OnInit {
    open: boolean;
    @Input() temp: any;
    @Output() edits = new EventEmitter<any>();
    @Output() deleteTemp = new EventEmitter<string>();
    @Output() testTemp = new EventEmitter<any>();
    constructor() { }

    ngOnInit() {
        this.open = false;
    }

    delete(id: string) {
        this.deleteTemp.emit(id);
    }

    edit(temp: any) {
        this.edits.emit(temp);
    }

    test(temp: any) {
        this.testTemp.emit(temp);
    }
}
