import { Store } from '@/store';
import { CoinsService } from '@/services';
import { CommonComponent } from '@/components';
import { Header } from './Header';
import { SelectsWrapper } from './Selects/SelectsWrapper';
import { InputsWrapper } from './Inputs/InputsWrapper';
import { TagNames } from '@/utils';

export class FormContainer extends CommonComponent {
  #store;

  #service;

  constructor(store, service) {
    super(TagNames.FORM);
    if (store instanceof Store) {
      this.#store = store;
    }
    if (service instanceof CoinsService) {
      this.#service = service;
    }
  }

  render() {
    const header = new Header().render();
    const selects = new SelectsWrapper(this.#service, this.#store).render();
    const inputs = new InputsWrapper(this.#service, this.#store).render();
    this.appendChildren(header, selects, inputs);
    return this.getComponent();
  }
}
