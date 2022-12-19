import { Store } from '@/store';
import { HttpClient } from '@/utils';
import { environments } from '@/environments';
import { injectable } from '@/utils/di';

class Service {
  #logger;

  #store;

  #http;

  #url = `${environments.API_URL}/coins?skip=0&limit=5&currency=`;

  constructor(store, http) {
    if (store instanceof Store) {
      this.#store = store;
    }
    if (http instanceof HttpClient) {
      this.#http = http;
    }
    this.#logger = console;
  }

  getCoins() {
    const { currentCurrency } = this.#store.getState();
    this.#store.setState({ isLoading: true });
    return this.#http
      .get(`${this.#url}${currentCurrency}`)
      .then(({ coins }) => this.#store.setState({ coins, isLoading: false }))
      .catch(err => this.#logger.error(err));
  }
}

export const CoinsService = injectable(Service);
