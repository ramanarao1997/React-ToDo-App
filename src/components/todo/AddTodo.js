import React, { Component } from 'react'
import propTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // can use target.name and evaluator [] if there are multiple fields to update
    // as long as the name attribute and state properties match
    onTitleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit } style={{ display:'flex' }}>
                <input type="text" 
                name="title" 
                placeholder="Add Todo task" 
                onChange={this.onTitleChange}
                value={this.state.title}
                style= {{ flex: 10, padding: '5 px'}}/>

                <input type="submit"
                value="Add" 
                className="btn"
                style= {{ flex: 1}}/>
            </form>
        )
    }
}

export default AddTodo

AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired,
}
