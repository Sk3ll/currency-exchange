import './styles/styles.scss';
import { AppFacade } from '@/app';

const app = new AppFacade().bootstrap();
document.querySelector('.container').appendChild(app);
