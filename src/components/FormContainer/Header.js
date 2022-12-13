import { CommonComponent } from '@/components';
import { TagNames, Titles } from '@/utils';

export class Header extends CommonComponent {
  constructor() {
    super(TagNames.H1);
  }

  render() {
    this.setChildren(Titles.HEADER);
    return this.getComponent();
  }
}
