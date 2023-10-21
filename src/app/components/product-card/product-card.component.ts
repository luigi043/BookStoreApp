import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product: any;
  @Output() order = new EventEmitter<any>();

  orderProduct() {
    this.order.emit(this.product);
  }

  rating = 3; // Initialize to some default value between 1-5
  stars = [1, 2, 3, 4, 5];
  setRating(star: number): void {
    this.rating = star;
  }

  getBadgeClass(category: string): string {
    switch (category) {
      case 'electronics':
        return 'badge text-bg-primary';
      case 'jewelery':
        return 'badge text-bg-secondary';
      case "men's clothing":
        return 'badge text-bg-success';
      case "women's clothing":
        return 'badge text-bg-danger';
      default:
        return 'badge';
    }
  }
  

}
