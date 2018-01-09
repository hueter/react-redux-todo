import { createStore } from 'redux';
import { todos } from './reducers';


function configureStore() {
  const store = createStore(todos);
  // dispatch
  // getState
  // subscribe

  return store;
}

export default configureStore;