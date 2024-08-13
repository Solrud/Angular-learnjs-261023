import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductsListComponent} from "./products-list.component";
import {productsResolver} from "../../shared/products/products.resolver";


const productsListRoutes: Routes   = [
    {
        path: '',
        pathMatch: 'full',
        component: ProductsListComponent,
        resolve: {
            products: productsResolver
        },
    },
    {
        path: ':sub-category',
        component: ProductsListComponent,
        resolve: {
            products: productsResolver
        },
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(productsListRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsListRoutingModule {
}
