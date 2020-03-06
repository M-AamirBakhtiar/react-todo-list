import React, { Component } from 'react';
import TodoInput from '../components/TodoInput/TodoInput';
import TodoList from '../components/TodoList/TodoList';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    id: uuidv4(),
    item: '',
    items: [],
    editItem: false
  };
  handleInputChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    const itemToBeAdded = {
      id: this.state.id,
      title: this.state.item
    };
    if (itemToBeAdded.title.length > 0) {
      const updatedList = [...this.state.items, itemToBeAdded];
      this.setState({
        items: updatedList,
        id: uuidv4(),
        item: '',
        editItem: false
      });
    }
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    console.log('edited');
  };
  render() {
    const { item, items, editItem } = this.state;
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
