import { createStore } from 'redux';
import { todos } from './reducers';


function configureStore() {
  const store = createStore(todos);

  return store;
}

export default configureStore;