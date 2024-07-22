import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {SidenavComponent} from './sidenav.component';
import {InsertShadowModule} from "../../shared/insert-shadow/insert-shadow.module";
import {ProductsListModule} from "../../pages/products-list/products-list.module";

@NgModule({
    declarations: [SidenavComponent],
    imports: [MatSidenavModule, MatButtonModule, InsertShadowModule, ProductsListModule],
    exports: [SidenavComponent],
})
export class SidenavModule {}
