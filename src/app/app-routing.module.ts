import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './pages/product/product.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {NotFoundModule} from "./pages/not-found/not-found.module";
import {questionCanActivateGuard} from "./shared/test-guards/question-can-activate.guard";
import {canMatchGuard} from "./shared/test-guards/can-match.guard";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products-list',
    },
    {
        path: 'products-list', // ['products-list']
        loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListModule),
    },

    {
        path: 'product/:id', // ['product', 'id']
        component: ProductComponent,
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
        canActivate: [questionCanActivateGuard],
        canMatch: [canMatchGuard],
        // canDeactivate: [canDeactivateGuard],
        // canActivateChild: [canActivateChildGuard]
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), NotFoundModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

// url === http://localhost:4200/product/id/type
// urlSegments === product/id/type

// search indexes: 0 -> 1 -> 2 -> ...
// current url segments: ['product', ':id']

/**
 *                  ____________    undefined   _______________
 *       __________/              /           \                \_________
 *      /                        /             \                         \
 *     |                        |               |                         |
 *    ['']         ['products-list']         ['product', ':id']         ['**']
 *                                              /           \
 *                                             /             \
 *                                            |               |
 *                                  ['description']        ['type']
 */
