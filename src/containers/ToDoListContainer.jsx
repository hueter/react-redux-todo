// import React from 'react';
import { connect } from 'react-redux';
import {
  addTodo,
  removeTodo,
  toggleTodo,
  fetchTodosRequest
} from '../store/actions';
import ToDoList from '../components/ToDoList';

function mapStateToProps(reduxState) {
  // component will now have
  //  props.todos from redux state
  return {
    todos: reduxState.todos,
    loading: reduxState.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: function(todo) {
      return dispatch(addTodo(todo));
    },
    removeTodo: function(id) {
      return dispatch(removeTodo(id));
    },
    toggleTodo: function(id) {
      return dispatch(toggleTodo(id));
    },
    fetchTodos: function() {
      return dispatch(fetchTodosRequest());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
