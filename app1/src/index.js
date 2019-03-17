import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import ag1 from './ag1';
import ag2 from './ag2';
import ag3 from './ag3';
import ag4 from './ag4';


import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: Page1,
  Agricultura: Page3,
  Alimentos: Page2,
  Necessita: Page4,
  Doar_adotar: Page5,
  Local: Page6,
  Procedimentos: Page7,
  Ajuda: Page8,
  Agrotoxico: Page9,
  Ag1 : ag1,
  Ag2 : ag2,
  Ag3 : ag3,
  Ag4 : ag4,
},{ headerMode: 'none'});

export default { StackNavigator };