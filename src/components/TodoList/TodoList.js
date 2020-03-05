import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <>
        <h2>Todo List</h2>
        <TodoItem />
      </>
    );
  }
}
