export default {
  namespace: 'todos',
  state: {
    list: [
      {text: 'hello', completed: false},
      {text: 'world', completed: true}
    ]
  },
  reducers: {
    add(state, {text}){
      state.list.push({text, completed: false});
      return {...state};
    },
    del(state, {index}){
      state.list.splice(index,1);
      return {...state};
    },
    upd(state, {index, text}){
      state.list[index].text = text;
      return {...state};
    },
    check(state, {index}){
      state.list[index].completed = !state.list[index].completed;
      return {...state};
    }
  }
}