import { CommonComponent } from '@/components';
import { CoinsSelect } from './CoinsSelect';
import { CurrenciesSelect } from './CurrenciesSelect';
import { TagNames } from '@/utils';
import { Store } from '@/store';
import { CoinsService } from '@/services';
import { injectable } from '@/utils/di';

class SelectsWrapperComponent extends CommonComponent {
  #service;

  #store;

  constructor(service, store) {
    super(TagNames.DIV);
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CoinsService) {
      this.#service = service;
    }
  }

  render() {
    const currenciesSelectInstance = new CurrenciesSelect(this.#service, this.#store);
    const coinsSelectInstance = new CoinsSelect(this.#service, this.#store);
    this.#store.subscribe(coinsSelectInstance);
    this.addClassName('currency').appendChildren(currenciesSelectInstance.render(), coinsSelectInstance.render());
    return this.getComponent();
  }
}

export const SelectsWrapper = injectable(SelectsWrapperComponent);
