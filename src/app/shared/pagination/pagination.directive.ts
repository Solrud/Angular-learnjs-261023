import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Directive({
    selector: '[appPagination]',
})
export class PaginationDirective<T> implements OnInit {
    @Input() appPaginationOf: T[] | undefined | null = null;

    @Input() appPaginationChankSize: number | undefined | null = null;

    activeIndex$ = new BehaviorSubject<number>(0);
    pageIndexes: number | null = null;

    constructor(
        private viewContainerRef: ViewContainerRef,
        private templateRef: TemplateRef<unknown>,
    ) {}

    ngOnInit(): void {
        if (this.appPaginationOf && this.appPaginationChankSize)
            this.pageIndexes = Math.ceil(
                this.appPaginationOf?.length / this.appPaginationChankSize,
            );

        this.listenActiveIndex();
    }

    private listenActiveIndex() {
        this.activeIndex$
            .pipe(map(activeIndex => this.getContext(activeIndex)))
            .subscribe(context => {
                this.viewContainerRef.clear();
                this.viewContainerRef.createEmbeddedView(this.templateRef, context);
            });
    }

    private getContext(activeIndex: number) {
        const allItems = this.appPaginationOf;
        const chankSize = this.appPaginationChankSize;
        let chankItemList;
        if (chankSize)
            chankItemList = allItems!.slice(
                activeIndex * chankSize,
                activeIndex * chankSize + chankSize,
            );
        return {
            $implicit: chankItemList,
            pageIndexes: this.pageIndexes,
            index: activeIndex + 1,
            next: () => {
                this.next();
            },
            back: () => {
                this.back();
            },
            selectIndex: (selectedIndex: number) => {
                this.selectIndex(selectedIndex);
            },
            isFirstPage: activeIndex === 0,
            isLastPage: activeIndex + 1 === this.pageIndexes,
        };
    }

    next() {
        const activeIndex = this.activeIndex$.value;
        if (this.pageIndexes && activeIndex + 1 < this.pageIndexes)
            this.activeIndex$.next(activeIndex + 1);
    }

    back() {
        const activeIndex = this.activeIndex$.value;
        if (this.pageIndexes && activeIndex > 0) this.activeIndex$.next(activeIndex - 1);
    }

    selectIndex(selectedIndex: number) {
        this.activeIndex$.next(selectedIndex);
    }
}
