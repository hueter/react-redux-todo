import React, { Component } from 'react';
import ToDo from './ToDo';
import { fetchTodos } from '../services/api';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      loading: true
    };
  }

  async componentWillMount() {
    const todos = await fetchTodos();
    this.setState({
      todos,
      loading: false
    });
  }

  toggleTodo(id) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.applied = !todo.applied;
      }
      return todo;
    });

    this.setState({ todos });
  }

  render() {
    const companies = (
      <div
        style={{
          width: '300px',
          margin: 'auto',
          textAlign: 'left',
          borderLeft: '1px solid #e4e4e4',
          borderRight: '1px solid #e4e4e4',
          borderTop: '1px solid #e4e4e4'
        }}
      >
        {this.state.todos.map(todo => (
          <ToDo
            toggleTodo={this.toggleTodo.bind(this, todo.id)}
            key={todo.id}
            {...todo}
          />
        ))}
      </div>
    );
    return (
      <div>
        <h2> Companies </h2>
        {this.state.loading ? 'loading...' : companies}
      </div>
    );
  }
}

export default ToDoList;
