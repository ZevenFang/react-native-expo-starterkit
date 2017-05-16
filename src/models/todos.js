export default {
  namespace: 'todos',
  state: {
    tasks: []
  },
  reducers: {
    del(state, {index}){
      state.tasks.splice(index,1);
      return {...state};
    },
    upd(state, {index, text}){
      state.tasks[index].text = text;
      return {...state};
    },
    check(state, {index}){
      state.tasks[index].completed = !state.tasks[index].completed;
      return {...state};
    }
  }
}