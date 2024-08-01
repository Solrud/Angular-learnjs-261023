import {Injectable, TemplateRef} from '@angular/core';
import {IPopUp} from './pop-up.interface';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PopUpService {
    private popupTemplateStore$ = new BehaviorSubject<IPopUp | null>(null);

    popupTemplate$ = this.popupTemplateStore$.asObservable();

    openPopup(templateAsObject: IPopUp): void {
        this.popupTemplateStore$.next(templateAsObject);
    }

    closePopup(): void {
        this.popupTemplateStore$.next(null);
    }
}
