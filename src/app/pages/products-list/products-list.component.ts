import {Component} from '@angular/core';
import {productsMock} from '../../shared/products/products.mock';
import {IProduct} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly productsMock = productsMock;

    toClickCard() {
        console.log('Card clicked');
    }

    onBuyProduct(productId: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log('Buy Product ID:', productId);
    }
}
