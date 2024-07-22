import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appInsertShadow]'
})
export class InsertShadowDirective {
    private boxShadowActive: boolean = false;

    @HostListener('click')
    logClick(){
        this.boxShadowActive = !this.boxShadowActive;
    }

    @HostBinding('style.boxShadow')
    private get boxShadow(): string {
        return this.boxShadowActive ? 'inset 0 0 10px #000' : '';
    }
}


