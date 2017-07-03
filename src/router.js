import HomePage from './pages/HomePage'
import CounterPage from './pages/CounterPage'
import TodosPage from './pages/TodosPage'
import AxiosPage from './pages/AxiosPage'

export default {
  Home: {
    path: '/',
    screen: HomePage,
  },
  Counter: {
    path: '/counter',
    screen: CounterPage,
  },
  Todos: {
    path: '/todos',
    screen: TodosPage,
  },
  Axios: {
    path: '/axios',
    screen: AxiosPage,
  },
};