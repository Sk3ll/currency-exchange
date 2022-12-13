import { Store } from '@/store';
import { CoinsService } from '@/services';
import { roundCoin, Events, TagNames, Titles } from '@/utils';
import { CommonComponent } from '@/components';

export class ExchangeButton extends CommonComponent {
  #store;

  #service;

  constructor(service, store) {
    super(TagNames.BUTTON);
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CoinsService) {
      this.#service = service;
    }
  }

  render() {
    this.addClassName('exchange')
      .setChildren(Titles.EXCHANGE)
      .addEventListener(Events.CLICK, this.#exchange.bind(this));
    return this.getComponent();
  }

  #exchange(event) {
    event.preventDefault();
    const { currencyInput } = this.#store.getState();
    const price = this.#getPrice();
    this.#store.setState({ coinInput: roundCoin(currencyInput * price) });
  }

  #getPrice() {
    const { coins, currentCoin } = this.#store.getState();
    const coin = coins.find(item => item.symbol === currentCoin);
    return coin?.price;
  }
}
