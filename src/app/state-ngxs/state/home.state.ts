import { State, Action, StateContext } from '@ngxs/store';
import { Hide, Show } from '../actions/home.actions';


@State<boolean>({
  name: 'home',
  defaults: false
})

export class HomeState {
  @Action(Show)
  show(ctx: StateContext<boolean>) {
    ctx.setState(true);
  }

  @Action(Hide)
  decrement(ctx: StateContext<boolean>) {
    ctx.setState(false);
  }
}
