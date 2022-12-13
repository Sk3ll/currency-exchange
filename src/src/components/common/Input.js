import { CommonComponent } from '@/components';
import { Attributes, Events, InputAttributesValues, TagNames } from '@/utils';
import { Store } from '@/store';

export class Input extends CommonComponent {
  #store;

  constructor(store) {
    super(TagNames.INPUT);
    if (store instanceof Store) {
      this.#store = store;
    }
  }

  render(className, currentValue, eventListener) {
    this.addClassName(className)
      .setValue(this.#store.getState()[currentValue])
      .setAttribute(Attributes.TYPE, InputAttributesValues.NUMBER);
    if (eventListener) {
      this.addEventListener(Events.CHANGE, event => {
        this.#store.setState({ [currentValue]: event.target.value });
      });
    }
    return this.getComponent();
  }
}
