import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Finish React tut',
        completed: false
      },
      {
        id: 2,
        title: 'Take out trash',
        completed: false
      },
      {
        id: 3,
        title: 'Build apps',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    this.setState({todos: todos});
  }

  render() {
    return (
      <div className="App">
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
        />
      </div>
    );
  }
}

export default App;
