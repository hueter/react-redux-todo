import React, { Component } from 'react';
import styled from 'styled-components';
import ToDo from './ToDo';
import { fetchTodos } from '../services/api';

const ContainerStyle = styled.div`
  width: 300px;
  margin: auto;
  text-align: left;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  border-top: 1px solid #e4e4e4;
`;

const HeaderStyle = styled.h2`
  text-align: center;
`;

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
      <ContainerStyle>
        {this.state.todos.map(todo => (
          <ToDo
            toggleTodo={this.toggleTodo.bind(this, todo.id)}
            key={todo.id}
            {...todo}
          />
        ))}
      </ContainerStyle>
    );
    return (
      <div>
        <HeaderStyle> Companies </HeaderStyle>
        {this.state.loading ? 'loading...' : companies}
      </div>
    );
  }
}

export default ToDoList;
