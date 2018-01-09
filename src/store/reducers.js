import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';

const DEFAULT_STATE = {
  todos: []
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
    default:
      return { ...state };
  }
};

// export { todos: todos}
// export default todos
