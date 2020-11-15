import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {v4 as uuid} from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Finish React tut',
        completed: false
      },
      {
        id: uuid(),
        title: 'Take out trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Build apps',
        completed: false
      }
    ]
  }

  toggleComplete = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    this.setState({ todos });
  }

  delTodo = (id) => {
    const todos = [...this.state.todos].filter(todo => todo.id !== id);
    this.setState({ todos });
  }

  addTodo = (todo) => {
    const newTodo = {
      id: uuid(),
      title: todo.title,
      completed: false
    }
    const todos = [...this.state.todos, newTodo]

    this.setState({ todos });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
