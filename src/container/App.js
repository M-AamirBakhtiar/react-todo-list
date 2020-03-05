import React, { Component } from 'react';
import TodoInput from '../components/TodoInput/TodoInput';
import TodoList from '../components/TodoList/TodoList';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}
