import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends Component {
  render() {
    return (
      this.props.todos.map((todo) => (
        <TodoItem 
          key = {todo.id} 
          todo={todo}
          toggleComplete={this.props.toggleComplete}
          deleteItem={this.props.deleteItem}/>
      ))
    );
  }
}

Todos.propTypes = {
    todos: propTypes.array.isRequired,
    toggleComplete: propTypes.func.isRequired,
    deleteItem: propTypes.func.isRequired,
}

export default Todos;
