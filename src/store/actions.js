// constants aka Action Types
export const ADD_TODO = 'ADD_TODO';

// actionCreators
function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    newTodo
  }
}