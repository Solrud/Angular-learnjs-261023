import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input()
    product: IProduct | null = null;

    @Output()
    readonly buyProductId = new EventEmitter<IProduct['_id']>();

    onProductBuy(productId: IProduct['_id'] | undefined) {
        this.buyProductId.emit(productId);
    }

    isStarActive(starIndex: number): boolean {
        return !!(this.product && this.product.rating >= starIndex);
    }
}
