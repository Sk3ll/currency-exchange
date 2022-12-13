import { Select } from '@/components';
import { Store } from '@/store';
import { CoinsService } from '@/services';

export class CurrenciesSelect extends Select {
  #coinsService;

  #store;

  constructor(service, store) {
    super(store);
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CoinsService) {
      this.#coinsService = service;
    }
  }

  render() {
    return super.render('changeable-currency', 'currencies', 'currentCurrency', this.#renderCoinsSelect.bind(this));
  }

  #renderCoinsSelect() {
    this.#coinsService.getCoins();
  }
}
