import { ResolveFn } from '@angular/router';
import {inject} from "@angular/core";
import {ProductsStoreService} from "./products-store.service";
import {IProduct} from "./product.interface";
import {delay, filter} from "rxjs/operators";

export const productsResolver: ResolveFn<IProduct[]> = ({paramMap}, state) => {
    console.log(state)
    const productsSroreService = inject(ProductsStoreService)
    const subCategoryId = paramMap.get('sub-category')

    productsSroreService.loadProducts(subCategoryId)

    return productsSroreService.products$.pipe(filter(Boolean), delay(500));
};
