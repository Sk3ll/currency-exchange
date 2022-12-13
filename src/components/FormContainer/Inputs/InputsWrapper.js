import { CommonComponent } from '@/components';
import { CurrencyInput } from './CurrencyInput';
import { ExchangeButton } from './ExchangeButton';
import { CoinInput } from './CoinInput';
import { TagNames } from '@/utils';
import { Store } from '@/store';
import { CoinsService } from '@/services';

export class InputsWrapper extends CommonComponent {
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
    const currencyInputInstance = new CurrencyInput(this.#store);
    const exchangeButtonInstance = new ExchangeButton(this.#service, this.#store);
    const coinInputInstance = new CoinInput(this.#store);
    this.#store.attach(coinInputInstance);
    this.addClassName('input-exchange-value').appendChildren(
      currencyInputInstance.render(),
      coinInputInstance.render(),
      exchangeButtonInstance.render(),
    );
    return this.getComponent();
  }
}
