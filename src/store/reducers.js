const DEFAULT_STATE = {
  todos: []
};

export const todos = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    default: 
      return { ...state };
  }
}

// export { todos: todos}
// export default todos