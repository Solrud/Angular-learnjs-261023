import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {IProduct} from './product.interface';
import {ProductsApiService} from './products-api.service';
import {Subscription} from 'rxjs';

@Injectable()
export class ProductsStoreService {
    private readonly productsStore$ = new BehaviorSubject<IProduct[] | null>(null);

    private activeLoadProductsSubscription: Subscription | null = null;

    constructor(private readonly productsApiService: ProductsApiService) {}

    get products$(): Observable<IProduct[] | null> {
        return this.productsStore$.asObservable();
    }

    loadProducts() {
        if (this.activeLoadProductsSubscription) {
            this.activeLoadProductsSubscription.unsubscribe();
        }

        this.activeLoadProductsSubscription = this.productsApiService
            .getProducts$()
            .subscribe((products: any[]) => {
                this.productsStore$.next(products);
                this.activeLoadProductsSubscription = null;
            });
    }
}
