import {TemplateRef} from '@angular/core';
import {IPopUpContext} from './pop-up-context.interface';

export interface IPopUp {
    template: TemplateRef<IPopUpContext>;
    context: IPopUpContext;
}
