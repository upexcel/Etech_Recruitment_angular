import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
declare let $: any;
declare let Injector: any;
@Directive({
    selector: '[appAvatarDirective]'
})
export class AvatarDirectiveDirective implements OnInit {
    @Input() email: string;
    constructor(private elementRef: ElementRef, private _http: Http) {
    }

    ngOnInit() {
        this._http.get(`http://picasaweb.google.com/data/entry/api/user/${this.email}?alt=json`).subscribe((res) => {
            const jsonResponse = res.json();
            this.elementRef.nativeElement.innerHTML = `<img src="${jsonResponse['entry']['gphoto$thumbnail']['$t']}" />`
        }, (err) => {
            this.elementRef.nativeElement.innerHTML = `<img src="assets/user.jpg" />`
        })
    }
}
