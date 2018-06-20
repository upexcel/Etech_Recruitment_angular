import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
    selector: 'app-deep-link',
    templateUrl: './app-deep-link.component.html',
    styleUrls: ['./app-deep-link.component.scss']
})
export class AppDeepLinkComponent implements OnInit {
    isPlatform = this._commonService.getOS();
    id = this.route.snapshot.paramMap.get('id')
    constructor(
        private _commonService: CommonService,
        private route: ActivatedRoute,
        private _router: Router
    ) {
        console.log(this.isPlatform)
        if (this.isPlatform === 'Android') {
            window.location.href = `https://hrrecruit.app.link/9gvVNNaqIN?%24deeplink_path=${this.id}`
        } else if (this.isPlatform === 'iOS') {
            window.location.href = `https://hrrecruit.app.link/9gvVNNaqIN?%24deeplink_path=${this.id}`
        } else {
            this._router.navigate(['/candidate/interviewques', this.id]);
        }
    }

    ngOnInit() {
    }

}
