import { Component } from '@angular/core';
import { productMock} from "../../../../shared/products/product.mock";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
    productMock = productMock;
    productMockRating = Array.from({ length: 5 }, (_, i) => i + 1);
    randomImageIndex: number;

    constructor() {
        this.randomImageIndex = this.getRandomNum(0, this.productMock.images.length - 1);
    }

    onClickBuyButton(event: Event){
        console.log('Клик по кнопке "Купить"');
        event.stopPropagation();
    }

    getRandomNum(min: number, max: number){
        let value = Math.floor(Math.random() * (max - min) + min);
        return value
    }

    getPicture(){
        return this.productMock.images[this.randomImageIndex].url
    }
}
