// import React from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../store/actions';
import ToDoList from '../components/ToDoList';

function mapStateToProps(reduxState) {
  // component will now have
  //  props.todos from redux state
  return {
    todos: reduxState.todos
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
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
