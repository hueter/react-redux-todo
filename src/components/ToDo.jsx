import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.li`
  padding: 5px;
  margin-bottom: 5px;

  border-bottom: 1px solid #e4e4e4;
  list-style: none;

  .hover: {
    cursor: pointer;
  }
`;

const ToDo = props => (
  <ListStyle
    style={{
      textDecoration: props.applied ? 'line-through' : 'none'
    }}
  >
    <input
      type="checkbox"
      value={props.name}
      checked={props.applied}
      onChange={props.toggleTodo}
    />
    <span style={{ marginLeft: '20px' }}> {props.name} </span>
  </ListStyle>
);

export default ToDo;
