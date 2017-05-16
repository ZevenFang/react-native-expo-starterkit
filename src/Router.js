import HomePage from './pages/HomePage'
import CounterPage from './pages/CounterPage'
import {
  createRouter
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomePage,
  counter: () => CounterPage,
}));

export default Router;