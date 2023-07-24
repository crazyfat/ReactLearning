import React, {Component} from 'react';
import Item from "../Item";
import {Todo} from "../Item";
interface Props{
    todos: Array<Todo>,
    updateTodo: Function,
    deleteTodo: Function
}
class Index extends Component<Props, any> {
    render() {
        const {todos} = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((value, index)=>{
                        return <Item todo={value} key={index} updateTodo={this.props.updateTodo} deleteTodo={this.props.deleteTodo}/>
                    })
                }
            </ul>
        );
    }
}

export default Index;