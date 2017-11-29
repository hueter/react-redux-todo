# React Redux Todo

## Instructions to Run

1. Clone the repository
1. `npm i && npm start`
1. Webpack should be running on `localhost:3000`

## Walkthrough to Convert to Redux

1. Install packages:

    ```
    npm i redux
    npm i react-redux
    npm i redux-thunk
    npm i --save-dev redux-devtools
    ```

1. Create a `store` directory with a `reducers.js` file and build your todos reducer, which has to be a pure function with two params:
   `state` and `action`. The first parameter should have a default object that
   is kind of like your state "database schema"; at least showing the keys
   involved in the app. For us, it's likely just going to have 1 key:

    ```javascript
    const DEFAULT_STATE = [];
    ```

    The todos reducer should contain a `switch` statement on `action.type` that matches the three possible actions in our app:
    * ADD_TODO
    * REMOVE_TODO 
    * TOGGLE_TODO

    To remain pure/idempotent, the function needs to return a new state each time, which means we need methods that return a new `todos` array.

1. In the `store` directory, create a new directory `actions` with two new files: `actionCreators.js` and `constants.js`. Your action creators should be named camelCase according to the action types they cause. Also, `constants` should just have a list of action types.

1. Refactor the reducer to import types from constants instead of strings.

1. Change `index.js` to have a provider and store. Apply the thunk middleware and the dev tools extension like so:

    ```javascript
        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';
        import { Provider } from 'react-redux';
        import { createStore, applyMiddleware } from 'redux';
        import thunk from 'redux-thunk';
        import registerServiceWorker from './registerServiceWorker';
        import App from './components/App';
        import todoReducer from './reducers/todo';

        const store = createStore(
            todoReducer,
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        );

        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById('root')
        );
        registerServiceWorker();
    ```

1. 
