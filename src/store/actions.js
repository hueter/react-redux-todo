import { fetchTodos } from '../services/api';

// constants aka Action Types
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';

// actionCreators
export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    newTodo
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function fetchTodosRequest() {
  // THIS IS THE THUNK
  return function(dispatch) {
    dispatch({ type: FETCH_TODOS_REQUEST });    
    return fetchTodos()
      .then(result => dispatch(fetchTodosSuccess(result)))
      .catch(err => dispatch(fetchTodosFail(err)));
  };
}

export function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    todos
  }
}

export function fetchTodosFail() {}
