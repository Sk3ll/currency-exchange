import { Select } from '@/components';
import { Store } from '@/store';
import { CoinsService } from '@/services';
import { Titles } from '@/utils';
import { injectable } from '@/utils/di';

export class CoinsSelectComponent extends Select {
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
    this.#coinsService.getCoins();
    return this.getComponent();
  }

  update() {
    const { isLoading } = this.#store.getState();
    this.setChildren(isLoading ? `<option>${Titles.LOADING}</option>` : '').isDisabled(isLoading);

    if (!isLoading) {
      super.render('result-currency', 'coins', 'currentCoin');
    }
  }
}

export const CoinsSelect = injectable(CoinsSelectComponent);
