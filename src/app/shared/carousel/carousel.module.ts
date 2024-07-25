import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselDirective} from './carousel.directive';
import {PaginationModule} from '../pagination/pagination.module';

@NgModule({
    declarations: [CarouselDirective],
    imports: [CommonModule, PaginationModule],
    exports: [CarouselDirective],
})
export class CarouselModule {}
