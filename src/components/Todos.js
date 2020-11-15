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
          toggleComplete={this.props.toggleComplete}
          delTodo={this.props.delTodo}
        />
      );
    });
  }
}

// PropTypes
Todos.propType = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;
