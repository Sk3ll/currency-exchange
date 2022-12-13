import { Observable } from '@/utils';

export class Store extends Observable {
  #isLoading = false;

  #coins = [];

  #currencies = [
    {
      symbol: 'USD',
      name: 'Dollar',
    },
    {
      symbol: 'EUR',
      name: 'Euro',
    },
    {
      symbol: 'UAH',
      name: 'Hryvnia',
    },
  ];

  #currentCoin = null;

  #currentCurrency = this.#currencies[0].symbol;

  #coinInput = 0;

  #currencyInput = 1;

  getState() {
    return {
      isLoading: this.#isLoading,
      coinInput: this.#coinInput,
      coins: this.#coins,
      currentCoin: this.#currentCoin,
      currencies: this.#currencies,
      currentCurrency: this.#currentCurrency,
      currencyInput: this.#currencyInput,
    };
  }

  setState({ coins, coinInput, currencies, currencyInput, isLoading }) {
    this.#coins = coins || this.#coins;
    this.#coinInput = coinInput || this.#coinInput;
    this.#currencies = currencies || this.#currencies;
    this.#currencyInput = currencyInput || this.#currencyInput;
    this.#isLoading = typeof isLoading === 'boolean' ? isLoading : this.#isLoading;
    this.notifyObservers();
  }

  setSelects({ currentCoin, currentCurrency }) {
    this.#currentCurrency = currentCurrency || this.#currentCurrency;
    this.#currentCoin = currentCoin || this.#currentCoin;
  }
}
