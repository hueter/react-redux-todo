import { createStore } from 'redux';
import { todos } from './reducers';

function configureStore() {
  const store = createStore(
    todos,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  // dispatch
  // getState
  // subscribe

  return store;
}

export default configureStore;
