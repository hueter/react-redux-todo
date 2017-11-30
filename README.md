# React Redux Todo

## Instructions to Run

1. Clone the repository
1. `npm i && npm start`
1. Webpack should be running on `localhost:3000`

## Walkthrough to Convert to Redux

_Note: The following instructions are condensed and not very explanative. I highly encourage readers to visit the [official Redux docs](https://redux.js.org/), which are excellent and contain links to two free video series by the Redux creator, Dan Abramov._

&nbsp;

**Refer to the completed source code on the `redux` branch when stuck.**

&nbsp;

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

1. In the `store` directory, create a new directory `actions` with two new files: `actionCreators.js` and `constants.js`. Your action creators should be named camelCase according to the action types they generate. Also, `constants` should just have a list of action types named according to their strings.

1. Refactor the reducer to import types from constants instead of strings.

1. Change `index.js` to have a provider and store. The store is generated with the Redux `createStore` method, and it accepts your root reducer as the first argument along with middleware  Apply the thunk middleware and the dev tools extension like so:

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
    ```

1. Create a `containers` directory which will contain Redux wrappers around React components. In our case, we'll just want `ToDoList` to be a smart (Redux-aware) container, so we'll create `ToDoListContainer.js`.

1. The ToDoListContainer is going to import the ToDoList react component as well as action creators. Two functions are to be defined: `mapStateToProps` and `mapDispatchToProps`; the first one **maps Redux state to React props** while the second one **maps Redux action creators to React props**. These functions are passed as the first two arguments, respectively, to the `react-redux` package's `connect` function. The `connect` function is then composed against our React component like so:

    ```javascript
    const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList);
    ```

    This connected component becomes the default export for our container.

1. In our `components/App.jsx`, instead of importing and rendering `ToDoList`, we now have replace it with `ToDoListContainer`.

1. The last step is to refactor the original `ToDoList` component. The state should be modified to only concern itself with presentational components; the business logic (in this case, `todos array`) is handled by Redux. So state can be simplified like so:

    ```javascript
    this.state = {
      loading: true,
      newTodo: ''
    };
    ```

    Also, all of the click handlers should now dispatch Redux action creators via props rather than making direct API or state changes:

    ```javascript
    toggleTodo(id) {
      this.props.toggleTodo(id);
    }
    ```

    Lastly, we need to add an additional lifecycle method `componentWillRecieveProps` to update state when a new todo has been submitted. We do this by only clearing out our input value (`newTodo` in state) if the incoming `todos` array has a greater length than previously (note that this is kind of a cheap shortcut instead of doing a more expensive deep array comparison, but it should be okay for this example):

    ```javascript
    componentWillReceiveProps(nextProps) {
        // if we've added a todo, reset the newTodo form
        if (this.props.todos.length < nextProps.todos.length)
        this.setState({
            newTodo: ''
        });
    }
    ```

&nbsp;

This should mostly conclude the conversion to Redux; refer to the `redux` branch for completed source code which is working. There are some additional things I did not cover (using a thunk for the `FETCH_TODOS_REQUEST` action creator for instance), but this is simply a rapid intro to converting an app to Redux and there is much further research necessary to lock these concepts down.

&nbsp;

Lastly, here is an example flow comparison of the two versions of the app:

**React Version**
1. ToDoList fetches todos from the API directly and adds them to state
1. ToDoList renders the list from state
1. New todos are input by the child form component `AddToDo` that get added to the `ToDoList` state.

**Redux Version**
1. ToDoList dispatches an action (a thunk) to fetch todos from the API and dispatch a success or fail action.
1. The reducer puts the recently-acquired todos into Redux state.
1. ToDoList re-renders due to its subscription to `mapStateToProps` for `todos`.
1. New todos are input by the child form component `AddToDo` that dispatch `ADD_TODO` actions which go through the reducer and add them to Redux state.
1. Redux state changes are picked up by `componentWillReceiveProps`, which then clears out the input box on `ToDoList` component.

You can see the Redux flow is much more complex, but it's also much more trackable and thus, reproducible. There are still tradeoffs, and in the example of this simple app, it seems much easier to go straight React rather than React + Redux.

