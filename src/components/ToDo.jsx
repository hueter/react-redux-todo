import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.li`
  padding: 5px;
  margin-bottom: 5px;

  border-bottom: 1px solid #e4e4e4;
  list-style: none;

  text-decoration: ${props => (props.applied ? 'line-through' : 'none')};

  .hover: {
    cursor: pointer;
  }
`;

const NameStyle = styled.span`
  margin-left: 20px;
`;

const ToDo = props => (
  <ListStyle applied={props.applied}>
    <input
      type="checkbox"
      value={props.name}
      checked={props.applied}
      onChange={props.toggleTodo}
    />
    <NameStyle> {props.name} </NameStyle>
  </ListStyle>
);

export default ToDo;
