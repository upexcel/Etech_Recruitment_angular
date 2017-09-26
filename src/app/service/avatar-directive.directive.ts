import { Directive, ElementRef, Input, OnInit } from '@angular/core';
declare let $: any;
declare let Injector: any;
@Directive({
    selector: '[appAvatarDirective]'
})
export class AvatarDirectiveDirective implements OnInit {
    @Input() email: string;
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
      // console.log(this.elementRef.nativeElement.innerHTML)
      // this.elementRef.nativeElement.innerHTML = `<script src="https://www.avatarapi.com/js.aspx?email=${this.email}&size=128"></script>`;
      // console.log('input-box keys  : ', this.email);

        // console.log(this.elementRef.nativeElement.innerHTML)
        // const script = document.createElement( 'script' );
        // script.type = 'text/javascript';
        // script.src = `https://www.avatarapi.com/js.aspx?email=${this.email}&size=128`;
        // this.elementRef.nativeElement.appendChild(script);

        // console.log('input-box keys  : ', this.email);
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.src = `https://www.avatarapi.com/js.aspx?email=${this.email}&size=128`;
        // $(this.elementRef.nativeElement).append(s);

        // console.log('input-box keys  : ', this.email);
        // const s = document.createElement('script');
        // s.type = 'text/javascript';
        // s.src = `https://www.avatarapi.com/js.aspx?email=${this.email}&size=128`;
        // console.log(Injector)
        // const injector = new Injector({s: s});
        // injector.eval($(this.elementRef.nativeElement).append(s));
    }
}
