import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import todoReducer from './store/reducers/todo';

const store = createStore(
  todoReducer,
  compose(applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
