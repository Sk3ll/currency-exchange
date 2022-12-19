import { CommonComponent } from '@/components';
import { Header } from './Header';
import { SelectsWrapper } from './Selects/SelectsWrapper';
import { InputsWrapper } from './Inputs/InputsWrapper';
import { TagNames } from '@/utils';

export class FormContainer extends CommonComponent {
  constructor() {
    super(TagNames.FORM);
  }

  render() {
    const header = new Header().render();
    const selects = new SelectsWrapper().render();
    const inputs = new InputsWrapper().render();
    this.appendChildren(header, selects, inputs);
    return this.getComponent();
  }
}
