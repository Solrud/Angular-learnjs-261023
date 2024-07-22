import {Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {ICarouselContext} from "./carousel-context.interface";
import {BehaviorSubject, map} from "rxjs";

@Directive({
  selector: '[appCarousel]'
})
export class CarouselDirective<T> implements OnChanges, OnInit {
    @Input()
    appCarouselOf: T[] | undefined | null;

    private readonly currentIndex = new BehaviorSubject<number>(0);

    constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<ICarouselContext<T>>)
    { }

    ngOnChanges({appCarouselOf}: SimpleChanges): void {
        if (appCarouselOf){
            this.updateView();
        }
    }

    ngOnInit(): void {
        this.listenCurrentIndex();
    }

    private updateView(){
        const shouldShowItems = this.appCarouselOf?.length;

        if (!shouldShowItems){
            this.viewContainerRef.clear();
        }


    }

    private listenCurrentIndex(){
        this.currentIndex
            .pipe(
                map(currentIndex => this.getCurrentContext(currentIndex)),
            )
            .subscribe(context => {
            this.viewContainerRef.clear();
            this.viewContainerRef.createEmbeddedView(this.templateRef, context);
        })
    }

    private getCurrentContext(currentIndex: number): ICarouselContext<T>{
        return {
            $implicit: this.appCarouselOf![currentIndex],
            next: () => {
                this.next();
            },
            back: () => {
                this.back();
            },
        }
    }

    private next(){
        const nextIndex = this.currentIndex.value + 1;

        const newIndex = this.appCarouselOf!.length > nextIndex ? nextIndex : 0;
        this.currentIndex.next(newIndex);
    }

    private back(){
        const previousIndex = this.currentIndex.value - 1;

        const newIndex = previousIndex < 0 ? this.appCarouselOf!.length - 1: previousIndex;
        this.currentIndex.next(newIndex);
    }
}

