import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
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
        if (environment['picasa'] && this.email && this.email.length && this.email.split('@')[1] === 'gmail.com') {
            this._http.get(`${environment['picasa']}/${this.email}?alt=json`).subscribe((res) => {
                const jsonResponse = res.json();
                this.elementRef.nativeElement.innerHTML = `<img src="${jsonResponse['entry']['gphoto$thumbnail']['$t']}" />`;
            }, (err) => {
                this.elementRef.nativeElement.innerHTML = `<img src="assets/user.jpg" />`;
            });
        } else {
            this.elementRef.nativeElement.innerHTML = `<img src="assets/user.jpg" />`
        }
    }
}
