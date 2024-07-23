import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import {ScrollDirectionEnum} from './scroll-direction.enum';
import {ScrollReachedService} from './utils/scroll-reached.service';

@Directive({
    selector: '[appScrollWithLoading]',
})
export class ScrollWithLoadingDirective {
    @Output()
    readonly loadData = new EventEmitter<ScrollDirectionEnum>();

    @HostListener('scroll', ['$event.target'])
    private scrollListen({scrollHeight, scrollTop, clientHeight}: HTMLElement) {
        const allScrollHeight = scrollHeight;
        const topScrollView = scrollTop;
        const bottomScrollView = clientHeight + scrollTop;

        if (this.scrollReachService.isScrollReachedTop(topScrollView!)) {
            this.loadData.emit(ScrollDirectionEnum.scrollTop);

            return;
        }

        if (this.scrollReachService.isScrollReachedBottom(allScrollHeight!, bottomScrollView!)) {
            this.loadData.emit(ScrollDirectionEnum.scrollBottom);
        }
    }

    constructor(private scrollReachService: ScrollReachedService) {}
}
