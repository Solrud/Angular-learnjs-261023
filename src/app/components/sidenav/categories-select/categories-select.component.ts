import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ICategory} from '../../../shared/categories/category.interface';
import {ISubCategory} from "../../../shared/categories/sub-category.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-categories-select',
    templateUrl: './categories-select.component.html',
    styleUrls: ['./categories-select.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesSelectComponent {
    @Input() categories!: ICategory[] | null;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router
                ) {
    }

    onClickRedirectSubCategoryUrl(subCategory: ISubCategory){
        this.router.navigate(['/products-list', subCategory._id.toString()])
    }
}
