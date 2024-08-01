import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import {PopUpService} from '../../shared/popup-service/pop-up.service';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    popupTemplateListener$ = this.popupService.popupTemplate$.pipe(
        tap(templateObj => {
            this.isEmpty = !templateObj?.template;
        }),
    );

    constructor(private popupService: PopUpService) {}

    @HostBinding('class.empty')
    isEmpty = true;
}
