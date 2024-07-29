import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'currency',
    pure: false,
})
export class CurrencyPipe implements PipeTransform {
    transform(price: number | undefined, code: string, pattern: number): string {
        console.log(price, code, pattern);
        return `${price || '-'} $`;
    }
}
