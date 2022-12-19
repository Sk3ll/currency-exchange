import { Select } from '@/components';
import { Store } from '@/store';
import { CoinsService } from '@/services';
import { injectable } from '@/utils/di';

export class CurrenciesSelectComponent extends Select {
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

export const CurrenciesSelect = injectable(CurrenciesSelectComponent);
