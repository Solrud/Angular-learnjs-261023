import {ChangeDetectionStrategy, Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {PopUpService} from '../../shared/popup-service/pop-up.service';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.empty]': 'this.isEmpty',
    },
})
export class PopupHostComponent {
    isEmpty = true;

    popupTemplateListener$ = this.popupService.popupTemplate$.pipe(
        tap(templateObj => {
            this.isEmpty = !templateObj?.template;
        }),
    );

    constructor(private popupService: PopUpService) {}

    @HostListener('contextmenu', ['$event'])
    contextMenuClick(event: Event) {
        console.log(event);
        event.preventDefault();
    }
}
