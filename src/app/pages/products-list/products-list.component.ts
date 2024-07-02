import {Component} from '@angular/core';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    testForNoPreventDefault(){
        console.log('Клик по компоненту ProductsListComponent');
    }
}
