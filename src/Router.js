import HomePage from './pages/HomePage'
import TabsPage from './pages/TabsPage'
import {
  createRouter
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomePage,
  tabs: () => TabsPage,
}));

export default Router;