import {
    ChangeDetectionStrategy,
    Component,
    Inject,
    OnInit,
    Optional,
    SkipSelf,
} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    readonly products$ = this.productsStoreService.products$;

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly routerService: Router,
    ) {}

    ngOnInit(): void {
        this.productsStoreService.loadProducts();
    }

    trackById(_index: number, {_id}: IProduct) {
        return _id;
    }

    onClickNavigateToProduct() {
        this.routerService.navigate(['product', 'id']);
    }
}
