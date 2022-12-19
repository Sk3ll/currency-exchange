import { HttpClient } from '@/utils';
import { CoinsService } from '@/services';
import { FormContainer } from '@/components';
import { Store } from '@/store';
import { Container } from '@/utils/di';

export class AppFacade {
  bootstrap() {
    // eslint-disable-next-line no-new
    new Container({
      providers: [
        { providerName: 'store', useClass: Store },
        { providerName: 'service', useClass: CoinsService },
        { providerName: 'http', useClass: HttpClient },
      ],
    });

    return new FormContainer().render();
  }
}
