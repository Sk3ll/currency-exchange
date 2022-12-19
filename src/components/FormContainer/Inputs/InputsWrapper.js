import { CommonComponent } from '@/components';
import { CurrencyInput } from './CurrencyInput';
import { ExchangeButton } from './ExchangeButton';
import { CoinInput } from './CoinInput';
import { TagNames } from '@/utils';
import { Store } from '@/store';
import { CoinsService } from '@/services';
import { injectable } from '@/utils/di';

class InputsWrapperComponent extends CommonComponent {
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
    const currencyInputInstance = new CurrencyInput();
    const exchangeButtonInstance = new ExchangeButton();
    const coinInputInstance = new CoinInput();
    this.#store.subscribe(coinInputInstance);
    this.#store.subscribe(exchangeButtonInstance);
    this.addClassName('input-exchange-value').appendChildren(
      currencyInputInstance.render(),
      coinInputInstance.render(),
      exchangeButtonInstance.render(),
    );
    return this.getComponent();
  }
}

export const InputsWrapper = injectable(InputsWrapperComponent);
