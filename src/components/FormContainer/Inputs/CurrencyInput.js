import { Input } from '@/components';
import { injectable } from '@/utils/di';

export class CurrencyInputComponent extends Input {
  constructor(store) {
    super(store);
  }

  render() {
    return super.render('initial-value', 'currencyInput', true);
  }
}

export const CurrencyInput = injectable(CurrencyInputComponent);
