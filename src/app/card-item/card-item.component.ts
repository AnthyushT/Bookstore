import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Book {
  id: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: { currency: string; value: number; displayValue: string };
  quantity?: number;
}

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() item: Book | undefined;
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter()
  @Output() increaseQuantityInCart: EventEmitter<number> = new EventEmitter()
  @Output() decreaseQuantityInCart: EventEmitter<number> = new EventEmitter()


  increaseQuantityCart(id: number) {
    this.increaseQuantityInCart.emit(id)
  }

  decreaseQuantityCart(id: number) {
    this.decreaseQuantityInCart.emit(id)
  }

  removeProduct(id: number) {
    this.removeFromCart.emit(id)
  }

  roundOff(value: number | undefined): number | undefined {
    return value !== undefined ? Math.ceil(value) : undefined;
  }
}
