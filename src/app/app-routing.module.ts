import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ProductComponent} from './pages/product/product.component';
import {DescriptionComponent} from './pages/product/description/description.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/products-list',
    },
    {
        path: 'product/:id',
        component: ProductComponent,
        children: [
            {
                path: 'description',
                component: DescriptionComponent,
            },
        ],
    },
    {
        path: 'products-list',
        component: ProductsListComponent,
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
