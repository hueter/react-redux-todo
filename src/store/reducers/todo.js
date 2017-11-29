import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL
} from '../actions/constants';
const DEFAULT_STATE = [];

function todosReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          applied: false
        }
      ];
    case REMOVE_TODO:
      return state.filter(
        todo =>
          todo.id === action.payload
            ? { ...todo, applied: !todo.applied }
            : todo
      );
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.payload
            ? { ...todo, applied: !todo.applied }
            : todo
      );
    case FETCH_TODOS_SUCCESS:
      return [...action.payload];
    case FETCH_TODOS_FAIL: {
      console.log(action.payload);
      return state;
    }
    default:
      return state;
  }
}

export default todosReducer;
