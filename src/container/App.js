import React, { Component } from 'react';
import TodoInput from '../components/TodoInput/TodoInput';
import TodoList from '../components/TodoList/TodoList';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    id: uuid(),
    item: '',
    items: [
      { id: 1, title: 'Wake Up' },
      { id: 2, title: 'Make Breakfast' }
    ],
    editItem: false
  };
  handleInputChange = e => {
    console.log(e);
  };
  handleFormSubmit = e => {
    e.preveantDefault();
  };
  clearList = () => {};
  handleDelete = id => {};
  handleEdit = id => {};
  render() {
    const { id, item, items, editItem } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={item}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              editItem={editItem}
            />
            <TodoList
              items={items}
              key={id}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
