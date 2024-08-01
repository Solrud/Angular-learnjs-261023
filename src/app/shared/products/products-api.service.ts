import {map} from 'rxjs';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IProductsDTO} from './iproducts-dto';

@Injectable({
    providedIn: 'root',
})
export class ProductsApiService {
    constructor(private httpClient: HttpClient) {}

    getProducts$(): any {
        return this.httpClient
            .get<IProductsDTO>('/products/suggestion')
            .pipe(map(({data}) => data.items));
    }
}
