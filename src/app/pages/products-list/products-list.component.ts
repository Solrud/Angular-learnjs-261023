import {Component, OnInit} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';
import {ScrollDirectionEnum} from '../../shared/scroll-with-loading/scroll-direction.enum';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
    private productsStore: IProduct[] | null = null;

    get products(): IProduct[] | null {
        return this.productsStore;
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.productsStore = productsMock;
        }, 1000);
    }

    onLoad(scrollDirection: ScrollDirectionEnum) {
        if (scrollDirection === ScrollDirectionEnum.scrollTop)
            console.log('ScrollDirectionEnum.scrollTop');

        if (scrollDirection === ScrollDirectionEnum.scrollBottom)
            console.log('ScrollDirectionEnum.scrollBottom');
    }
}
