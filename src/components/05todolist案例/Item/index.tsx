import React, {Component} from 'react';
import './index.css'
export interface Todo{
    id: string,
    name: string,
    done: boolean,
}
interface Props{
    todo: Todo,
    updateTodo: Function,
    deleteTodo: Function
}
class Index extends Component<Props, any> {
    state = {
        mouse: false
    }
    handleMouseEnt = (flag: boolean) =>{
        return () => {
            this.setState({ mouse: flag})
        }
    }
    handleCheck = (id: string) =>{
        return (e: any) => {
            this.props.updateTodo(id, e.target.checked);
        }
    }
    handleDel = (id: string) =>{
        this.props.deleteTodo(id);
    }
    render() {
        const {name, done, id} = this.props.todo;
        const {mouse} = this.state;
        return (
            <li
                style={{ backgroundColor: mouse? '#ddd':'#fff'}}
                onMouseEnter={this.handleMouseEnt(true)}
                onMouseLeave={this.handleMouseEnt(false)}
            >
                <label>
                    <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse? 'block':'none' }} onClick={()=>{ this.handleDel(id) }}>删除</button>
            </li>
        );
    }
}

export default Index;