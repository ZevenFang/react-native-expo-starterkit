import {getLatest} from '../services/zhihu-api';

export default {
  namespace: 'zhihu',
  state: {
    data: []
  },
  reducers: {
    setLatest(state, {data}){
      state.data = data.stories;
      return {...state};
    }
  },
  effects: {
    *getLatest(action, {put, call}){
      let {data} = yield call(getLatest);
      yield put({
        type: 'setLatest', data
      });
    }
  }
}