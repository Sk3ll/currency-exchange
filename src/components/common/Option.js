import { CommonComponent } from '@/components';
import { TagNames } from '@/utils';

export class Option extends CommonComponent {
  constructor() {
    super(TagNames.OPTION);
  }

  render(value, name) {
    this.setValue(value).setChildren(name);
    return this.getComponent();
  }
}
