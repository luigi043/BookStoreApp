import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  order: Order = {
    bookTitle: '',
    authorName: '',
    quantity: 0,
    deliveryAddress: ''
  };
  
  constructor() {}

  ngOnInit(): void {}
  
}
