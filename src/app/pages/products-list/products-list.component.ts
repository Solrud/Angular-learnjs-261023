import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IProduct} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {filter, map, switchMap, tap} from "rxjs/operators";

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
    // readonly products$ = this.productsStoreService.products$;

    products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('sub-category')),
        tap( subCategoryId => {
            console.log(subCategoryId)
            this.productsStoreService.loadProducts(subCategoryId);
        }),
        switchMap(()=> this.productsStoreService.products$)
    )

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) {}
    // [routerLink]="['/product', product._id]"
    ngOnInit(): void {
        // this.productsStoreService.loadProducts();
        // console.log(this.activatedRoute)
        // this.activatedRoute.paramMap.subscribe(res => {
        //     console.log(res)
        // })
        this.products$.subscribe(res => {
            console.log(res)
        })
    }


    onClickNavigateProductById(product: IProduct){
        console.log(product);
        this.router.navigate(['/product', product._id])
    }

    trackById(_index: number, {_id}: IProduct) {
        return _id;
    }

    navigateToProduct() {
        // this.router.navigate(['product', 'id']);
        this.router.navigate(['/product/id']);
        // this.router.navigateByUrl('/product/id');
    }
}
