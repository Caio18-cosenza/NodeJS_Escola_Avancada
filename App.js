import { NavigationContainer } from '@react-navigation/native';

import StackRouter from './src/routes/stack';
import DrawerRouter from './src/routes/Drawer';
import TopTabsRouter from './src/routes/TopTabs';
import BottomTabsRouter from './src/routes/bottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <StackRouter />
    </NavigationContainer>
  );
}
