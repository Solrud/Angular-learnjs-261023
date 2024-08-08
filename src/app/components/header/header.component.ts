import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
    TemplateRef,
} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';
import {IPopUp} from '../../shared/popup-service/pop-up.interface';
import {PopUpService} from '../../shared/popup-service/pop-up.service';
import {IPopUpContext} from '../../shared/popup-service/pop-up-context.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    toShowBadge = false;

    constructor(@Inject(PopUpService) private popupService: PopUpService) {}

    @Input() applicationConfig: ApplicationConfig | null = null;

    @Output() readonly menuClick = new EventEmitter<void>();

    onMenuClick(_event: MouseEvent) {
        this.menuClick.emit();
    }

    openPopup(_template: TemplateRef<IPopUpContext>) {
        this.toShowBadge = true;
        const context: IPopUpContext = {$implicit: 'Значение из контекстной переменной'};
        const templateObject: IPopUp = {
            template: _template,
            context: context,
        };
        this.popupService.openPopup(templateObject);
    }

    closePopup() {
        this.popupService.closePopup();
    }
}
