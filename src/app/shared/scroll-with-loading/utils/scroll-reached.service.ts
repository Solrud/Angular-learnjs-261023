import {Injectable} from '@angular/core';
import {borderOffset} from '../scroll-border-offset.constant';

@Injectable({
    providedIn: 'root',
})
export class ScrollReachedService {
    isScrollReachedTop(topScrollView: number): boolean {
        return topScrollView <= borderOffset;
    }

    isScrollReachedBottom(allScrollHeight: number, bottomScrollView: number): boolean {
        return allScrollHeight - bottomScrollView <= borderOffset;
    }
}
