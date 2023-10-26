import { State, Action, StateContext } from '@ngxs/store';
import { LoadProducts, LoadProductsSuccess, LoadProductsFailure } from '../actions/product.actions';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Injectable } from '@angular/core';

export interface ProductStateModel {
  products: any[];
  loading: boolean;
  error: any;
}

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: [],
    loading: false,
    error: null
  }
})

@Injectable()
export class ProductState {
  constructor(private productService: ProductService) {}  // Inject your existing service

  @Action(LoadProducts)
  loadProducts(ctx: StateContext<ProductStateModel>) {
    ctx.patchState({ loading: true });
    return this.productService.getProducts().pipe(
      tap((result) => {
        ctx.dispatch(new LoadProductsSuccess(result));
      }),
      catchError((error) => {
        ctx.dispatch(new LoadProductsFailure(error));
        return of(error);
      })
    );
  }

  @Action(LoadProductsSuccess)
  loadProductsSuccess(ctx: StateContext<ProductStateModel>, action: LoadProductsSuccess) {
    ctx.patchState({ products: action.payload, loading: false });
  }

  @Action(LoadProductsFailure)
  loadProductsFailure(ctx: StateContext<ProductStateModel>, action: LoadProductsFailure) {
    ctx.patchState({ error: action.payload, loading: false });
  }
}
