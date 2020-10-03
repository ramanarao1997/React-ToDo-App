import React, { Component } from 'react'
import propTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        const { id, title } = this.props.todo;

        return (
            <div style= {this.getItemStyle()} >
                <span>
                    <input type="checkbox" onChange={ this.props.toggleComplete.bind(this, id) }/> {' '}
                    {title}
                    <button style={btnStyle} onClick={ this.props.deleteItem.bind(this, id) }> x </button>
                </span>
            </div>
        )
    }

    // programmatic css for complete/incomplete items
    getItemStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBotoom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    toggleComplete: propTypes.func.isRequired,
    deleteItem: propTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000cc',
    color:'#ffffff',
    border:'none',
    padding: '5px 5px',
    cursor: 'pointer',
    float:'right',
    borderRadius: '25%'
}

export default TodoItem
