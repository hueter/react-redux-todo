import { ADD_TODO } from './actions';

const DEFAULT_STATE = {
  todos: []
};

export const todos = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodos = [...state.todos, action.newTodo];
      return { ...state, todos: newTodos };
    }
    default:
      return { ...state };
  }
};

// export { todos: todos}
// export default todos
