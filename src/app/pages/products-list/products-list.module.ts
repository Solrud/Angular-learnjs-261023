import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card.module';
import {IfModule} from "../../shared/if/if.module";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
    declarations: [ProductsListComponent],
    imports: [CommonModule, CardModule, IfModule, MatProgressSpinnerModule],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
