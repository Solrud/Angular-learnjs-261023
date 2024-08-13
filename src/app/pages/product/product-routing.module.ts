import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DescriptionComponent} from "./description/description.component";
import {TypeComponent} from "./type/type.component";
import {ProductComponent} from "./product.component";
import {redirectGuard} from "../../shared/test-guards/redirect.guard";


const productRoutes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'description',
            },
            {
                path: 'description',
                component: DescriptionComponent,
                canActivate: [redirectGuard]
            },
            {
                path: 'type',
                component: TypeComponent,
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule {
}
