import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import {
  addTodo,
  removeTodo,
  fetchTodosRequest,
  toggleTodo
} from '../store/actions/actionCreators';

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: todo => dispatch(addTodo(todo)),
    fetchTodos: () => dispatch(fetchTodosRequest()),
    removeTodo: id => dispatch(removeTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id))
  };
};

const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(
  ToDoList
);
export default ToDoListContainer;
