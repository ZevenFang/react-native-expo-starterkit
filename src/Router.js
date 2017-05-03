import HomePage from './pages/HomePage'
import {
  createRouter
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomePage
}));

export default Router;