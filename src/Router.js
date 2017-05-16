import HomePage from './pages/HomePage'
import CounterPage from './pages/CounterPage'
import TodosPage from './pages/TodosPage'
import {
  createRouter
} from '@expo/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomePage,
  counter: () => CounterPage,
  todos: () => TodosPage,
}));

export default Router;