import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {IfModule} from '../../shared/if/if.module';
import {MatButtonModule} from '@angular/material/button';
import {PaginationModule} from '../../shared/pagination/pagination.module';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [
        CardModule,
        IfModule,
        CommonModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        PaginationModule,
        MatSelectModule,
        MatOptionModule,
        MatFormFieldModule,
    ],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
