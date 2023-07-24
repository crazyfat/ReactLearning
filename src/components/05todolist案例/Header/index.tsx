import React, {Component} from 'react';
import './index.css'
import {nanoid} from "nanoid";

interface Props{
    handleSubmit: Function
}
class Index extends Component<Props, any> {
    handleKeyUp = (event: any) =>{
        if(event.keyCode === 13){
            const subTodo = {
                id: nanoid(),
                name: event.target.value,
                done: false
            }
            this.props.handleSubmit(subTodo);
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称，回车键返回" onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}

export default Index;