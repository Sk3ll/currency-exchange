import { Input } from '@/components';
import { Store } from '@/store';
import { injectable } from '@/utils/di';

class CoinInputComponent extends Input {
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

export const CoinInput = injectable(CoinInputComponent);
