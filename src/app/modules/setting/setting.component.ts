import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  // @Output()	title =	new	EventEmitter<string>();
    listopen: boolean;
    constructor(private _router: Router) { }

    ngOnInit() {
        this.listopen = false;
    }

    goto( path: string, navtitle: string) {
      // this.title.emit(navtitle);
        this._router.navigate(['/core/setting/' + path]);
    }
}
