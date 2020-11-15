import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle() {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed
        ? 'line-through'
        : 'none',
    };
  }

  render() {
    const { todo } = this.props;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onClick={() => this.props.toggleComplete(todo.id)}
          />{' '}
          {todo.title}
          <button
            style={btnStyle}
            onClick={() => this.props.delTodo(todo.id)}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
