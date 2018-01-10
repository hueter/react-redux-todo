import { compose, createStore, applyMiddleware } from 'redux';
import { todos } from './reducers';
import thunk from 'redux-thunk';

function configureStore() {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
  const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  );
  const store = createStore(todos, enhancer);
  // dispatch
  // getState
  // subscribe

  return store;
}

export default configureStore;
