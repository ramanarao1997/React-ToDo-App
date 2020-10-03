import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Todos from './components/todo/Todos';
import AddTodo from './components/todo/AddTodo'
import Header from './components/Header';
import About from './components/About';

import './App.css';

import axios from 'axios';
import uuid from 'react-uuid';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      this.setState({ todos:res.data.slice(0, 3) });
    }).catch( ()=> {
      console.log("An error occurred while getting posts!");
    });
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />

            <Route exact path="/" render={props => (
              <React.Fragment>
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteItem={this.deleteItem}/>
                <AddTodo addTodo={this.addTodo}/>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }

  toggleComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  deleteItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, 
    ).then(res => {
      this.setState({ todos: [...this.state.todos.filter(todo =>
        todo.id !== id)]
      });
    }).catch( ()=> {
      console.log("An error occurred while deleting post!");
    });
  }

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title:title,
      completed:false,
    }).then(res => {
      
      // using uuid to avoid same ids from mockAPI
      const newPost = {
        id:uuid(),
        title:title,
        completed:false
      };

      this.setState({
        todos: [...this.state.todos, newPost]
      });
    }).catch( () => {
      console.log("An error occurred while saving post!");
    })
  }
}

export default App;

