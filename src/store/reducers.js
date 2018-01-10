import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL
} from './actions';

const DEFAULT_STATE = {
  todos: [],
  loading: true
};

export const todos = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodos = [...state.todos, action.newTodo];
      return { ...state, todos: newTodos };
    }
    case REMOVE_TODO: {
      const newTodos = state.todos.filter(todo => todo.id !== action.id);
      return { ...state, todos: newTodos };
    }
    case TOGGLE_TODO: {
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, applied: !todo.applied };
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    case FETCH_TODOS_SUCCESS: {
      return { ...state, todos: action.todos, loading: false };
    }
    case FETCH_TODOS_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_TODOS_FAIL:
    default:
      return { ...state };
  }
};

// export { todos: todos}
// export default todos
