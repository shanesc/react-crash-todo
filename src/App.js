import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/pages/About';

class App extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((res) => res.json())
      .then((data) => this.setState({ todos: data }));
  }

  toggleComplete = (id) => {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos });
  };

  delTodo = (id) => {
    const todos = [...this.state.todos].filter(
      (todo) => todo.id !== id
    );
    this.setState({ todos });
  };

  addTodo = (todo) => {
    const newTodo = {
      title: todo.title,
      completed: false,
    };

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'post',
      body: JSON.stringify(newTodo),
    }).then((res) => console.log(res));

    const todos = [...this.state.todos, newTodo];

    this.setState({ todos });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/">
              <AddTodo addTodo={this.addTodo} />
              <Todos
                todos={this.state.todos}
                toggleComplete={this.toggleComplete}
                delTodo={this.delTodo}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
