import React, {Component} from 'react';
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
import './index.css'
import {Todo} from "./Item";

class TodoList extends Component {
    state = {
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: true
            },
            {
                id: '002',
                name: '睡觉',
                done: true
            },
            {
                id: '003',
                name: '做事情',
                done: true
            },
        ]
    }
    addTodo = (todo: Todo) =>{
        const {todos} = this.state;
        todos.push(todo);
        this.setState({
            todos
        })
    }
    updateTodo = (id:string, status: boolean) =>{
        const {todos} = this.state;
        todos.forEach((value, index) =>{
            if(value.id === id){
                value.done = status;
            }
        })
        this.setState({ todos })
    }
    deleteTodo = (id: string) =>{
        if(window.confirm('确定删除吗？')){
            const todos = this.state.todos.filter((item)=>{
                return item.id !== id;
            })
            this.setState({ todos });
        }
    }
    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header handleSubmit={this.addTodo}/>
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default TodoList;