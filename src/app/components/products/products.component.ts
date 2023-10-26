import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadProducts } from 'src/app/state-ngxs/actions/product.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // products: any[] = [];
  product: any;

  products$: Observable<any>;


  constructor(
    private productService: ProductService, 
    private store: Store,
    private router: Router) {
      this.products$ = this.store.select(state => state.products.products);
    }

  ngOnInit(): void {

    this.store.dispatch(new LoadProducts())

    // this.productService.getProducts().subscribe(data => {
    //   this.products = data;
    //   console.log('Products: ', this.products);
    // });
  }
  
  orderProductNow(product: any) {
    console.log('Product to be ordered: ', product);
  }

  removeProductNow(id: number) {
    console.log('Product to be removed: ', id);
  }
}
