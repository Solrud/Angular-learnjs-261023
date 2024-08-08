import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent {
    readonly product$ = this.activatedRoute.paramMap;

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        console.log(this.product$);
        console.log(this.activatedRoute.queryParams.subscribe(console.log));
    }

    onOpenDesc() {
        this.router.navigate(['./description'], {
            relativeTo: this.activatedRoute,
            queryParams: {text: 'Matthew'},
        });
    }
}
