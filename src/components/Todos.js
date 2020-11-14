import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  render() {
    const { todos } = this.props;
    return todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
        />
      );
    });
  }
}

// PropTypes
Todos.propType = {
  todos: PropTypes.array.isRequired
}

export default Todos;
