import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {IfModule} from '../../shared/if/if.module';
import {PaginationModule} from '../../shared/pagination/pagination.module';
import {MyAsyncModule} from '../../shared/my-async/my-async.module';
import {ProductsFilterModule} from '../../shared/products-filter/products-filter.module';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        CardModule,
        IfModule,
        CommonModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatIconModule,
        PaginationModule,
        MyAsyncModule,
        ProductsFilterModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
