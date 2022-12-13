import { Input } from '@/components';
import { Store } from '@/store';

export class CoinInput extends Input {
  #store;

  constructor(store) {
    super(store);
    if (store instanceof Store) {
      this.#store = store;
    }
  }

  render() {
    return super.render('result-value', 'coinInput');
  }

  update() {
    this.setValue(this.#store.getState().coinInput);
  }
}
