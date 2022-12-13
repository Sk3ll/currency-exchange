import { CommonComponent } from '@/components';
import { Events, TagNames } from '@/utils';
import { Option } from './Option';
import { Store } from '@/store';

export class Select extends CommonComponent {
  #store;

  constructor(store) {
    super(TagNames.SELECT);
    if (store instanceof Store) {
      this.#store = store;
    }
  }

  render(className, model, currentOption, interceptor) {
    this.addClassName(className).addEventListener(Events.CHANGE, event => {
      this.#store.setSelects({ [currentOption]: event.target.value });
      if (interceptor) interceptor();
    });
    this.#renderOptions(model);

    if (!this.#store.getState()[currentOption]) {
      this.#chooseFirstElement(model, currentOption);
    }
    this.setValue(this.#store.getState()[currentOption]);
    return this.getComponent();
  }

  #chooseFirstElement(model, currentOption) {
    const [{ symbol }] = this.#store.getState()[model];
    this.#store.setSelects({ [currentOption]: symbol });
  }

  #renderOptions(model) {
    this.#store.getState()[model].forEach(currency => {
      const option = new Option().render(currency.symbol, currency.name);
      this.appendChild(option);
    });
  }
}
