import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})

export class BookCardComponent {

  @Input() book: any;
  @Output() order = new EventEmitter<any>();

  orderBook() {
    this.order.emit(this.book);
  }

}
