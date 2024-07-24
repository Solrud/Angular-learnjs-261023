import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';
import {ScrollDirectionEnum} from '../../shared/scroll-with-loading/scroll-direction.enum';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    private productsStore: IProduct[] | null = null;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    get products(): IProduct[] | null {
        return this.productsStore;
    }

    get data(): string {
        console.log('Data calculated');

        return 'Yes, data dada';
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.productsStore = productsMock;
            console.log('productStore');
            this.changeDetectorRef.markForCheck();
        }, 1000);
        // setTimeout(() => {
        //     this.productsStore = productsMock.map(item => ({...item}));
        // }, 3000);
    }

    onLoad(scrollDirection: ScrollDirectionEnum) {
        if (scrollDirection === ScrollDirectionEnum.scrollTop)
            console.log('ScrollDirectionEnum.scrollTop');

        if (scrollDirection === ScrollDirectionEnum.scrollBottom)
            console.log('ScrollDirectionEnum.scrollBottom');
    }

    trackById(index: number, {_id}: IProduct) {
        return _id;
    }
}
