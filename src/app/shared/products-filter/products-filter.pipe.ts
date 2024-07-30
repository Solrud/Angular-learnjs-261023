import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from '../products/product.interface';

@Pipe({
    name: 'productsFilter',
})
export class ProductsFilterPipe implements PipeTransform {
    transform(itemsList: IProduct[] | undefined | null, name: string): IProduct[] | null {
        return itemsList!.filter(item => item!.name!.toLowerCase().includes(name.toLowerCase()));
    }
}
