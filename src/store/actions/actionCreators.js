import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL
} from './constants';
import { fetchTodos } from '../../services/api';

export function fetchTodosRequest() {
  // THUNK!
  return async dispatch => {
    try {
      const todos = await fetchTodos();
      return dispatch(fetchTodosSuccess(todos));
    } catch (err) {
      return dispatch(fetchTodosFail(err));
    }
  };
}

function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos
  };
}

function fetchTodosFail(err) {
  return {
    type: FETCH_TODOS_FAIL,
    payload: err
  };
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: id
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}
