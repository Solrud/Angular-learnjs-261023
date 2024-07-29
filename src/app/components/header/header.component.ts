import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';
import {NamedChunksPlugin} from '@angular-devkit/build-angular/src/tools/webpack/plugins/named-chunks-plugin';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() applicationConfig: ApplicationConfig | null = null;

    @Output() readonly menuClick = new EventEmitter<void>();

    constructor(@Inject('name') private name: string) {}

    get data(): string {
        return 'Yes, data';
    }

    get myName(): string {
        return this.name;
    }

    onMenuClick(_event: MouseEvent) {
        this.menuClick.emit();
    }
}
