import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './../../service/local-storage.service';
@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
    listopen: boolean;
    role: string;
    constructor(private _router: Router, private _localStorageService: LocalStorageService) { }

    ngOnInit() {
        this.listopen = false;
        this.role = this._localStorageService.getItem('role');
    }

    goto( path: string, navtitle: string) {
        this._router.navigate(['/core/setting/' + path]);
    }
}
