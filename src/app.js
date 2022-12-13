import { HttpClient } from '@/utils';
import { CoinsService } from '@/services';
import { FormContainer } from '@/components';
import { Store } from '@/store';

export class AppFacade {
  bootstrap() {
    const store = new Store();
    const http = new HttpClient();
    const service = new CoinsService(store, http);
    const formContainer = new FormContainer(store, service);

    return formContainer.render();
  }
}
