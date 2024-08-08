import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductComponent} from './product.component';
import {MatButtonModule} from '@angular/material/button';
import {DescriptionComponent} from './description/description.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [ProductComponent, DescriptionComponent],
    imports: [CommonModule, MatButtonModule, RouterModule],
    exports: [ProductComponent],
})
export class ProductModule {}
