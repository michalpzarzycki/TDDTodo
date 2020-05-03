import React, { Component } from 'react';


class App extends Component {
  
    state = {
        todos: []
    }


    addTodo() {
        const nextId = this.state.todos.length+1;
        this.state.todos.push({ id: nextId });
        this.setState({ todos :this.state.todos })
    }
    render() {
        return(
            <div>
                <h1>TODOS</h1>
                <button onClick={this.addTodo.bind(this)} className='btn-add'>ADD TODO</button>
            </div>
        )
    }
}

export default App;