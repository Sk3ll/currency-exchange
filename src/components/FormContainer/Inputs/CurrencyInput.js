import { Input } from '@/components';

export class CurrencyInput extends Input {
  constructor(store) {
    super(store);
  }

  render() {
    return super.render('initial-value', 'currencyInput', true);
  }
}
