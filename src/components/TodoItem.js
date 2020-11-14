import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle() {
    return (
      {
        backgroundColor: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ? 'line-through' : 'none'
      }
    );
  }

  render() {
    const { todo } = this.props;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onClick={() => this.props.markComplete(todo.id)} /> { todo.title }
        </p>
      </div>
    );
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem;