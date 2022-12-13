import { CommonComponent } from '@/components';
import { CoinsSelect } from './CoinsSelect';
import { CurrenciesSelect } from './CurrenciesSelect';
import { TagNames } from '@/utils';
import { Store } from '@/store';
import { CoinsService } from '@/services';

export class SelectsWrapper extends CommonComponent {
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
    this.#store.attach(coinsSelectInstance);
    this.addClassName('currency').appendChildren(currenciesSelectInstance.render(), coinsSelectInstance.render());
    return this.getComponent();
  }
}
