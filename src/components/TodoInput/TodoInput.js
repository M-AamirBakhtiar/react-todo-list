import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleInputChange, handleFormSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleFormSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleInputChange}
            />
          </div>
          <button className="btn btn-block btn-primary mt-3 text-uppercase">
            add item
          </button>
        </form>
      </div>
    );
  }
}
