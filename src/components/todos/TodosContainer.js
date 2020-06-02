import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

  renderTodos = () => this.props.todos.map((todo, id) => <Todo removeTodo={this.props.removeTodo} itemId= {todo.id} key={todo.id} text={todo.text} />)
// the map functions accepts index as an optional argument to the callback
  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => ({
  removeTodo: itemId => dispatch({ type: 'REMOVE_TODO', id: itemId })
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
