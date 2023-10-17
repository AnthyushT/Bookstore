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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() book: Book | undefined;
  @Output() addProduct: EventEmitter<Book> = new EventEmitter();

  addToCart(book:Book) {
    this.addProduct.emit(book);
  }

  roundOff(value: number | undefined): number | undefined {
    if (value === undefined){
      return undefined;
    }
    if (value < 1){
      return 0;
    }
    return Math.ceil(value);
  }
}
