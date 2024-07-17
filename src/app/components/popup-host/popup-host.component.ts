import {
    Component,
    Input,
    OnChanges,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-popup-host',
  templateUrl: './popup-host.component.html',
  styleUrls: ['./popup-host.component.css']
})
export class PopupHostComponent implements OnChanges{
    @Input()
    template: TemplateRef<unknown> | null = null;

    @ViewChild('viewPortPopUp', {static: true, read: ViewContainerRef})
    private readonly viewContainerPopUpContent? : ViewContainerRef;

    ngOnChanges({template}: SimpleChanges): void {
        if (template){
            this.toSetNewView(template.currentValue);
        }
    }

    toSetNewView(template: TemplateRef<unknown>){
        this.viewContainerPopUpContent?.clear();
        if (template){
            this.viewContainerPopUpContent?.createEmbeddedView(template);
        }
    }

}
