import { createStore } from 'redux';
const store = createStore(counter);
console.log(store.getState()); // 0