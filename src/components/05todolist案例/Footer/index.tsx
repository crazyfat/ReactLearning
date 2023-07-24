import React, {Component} from 'react';
import './index.css'
class Index extends Component {
    render() {
        return (
            <div className="todo-footer">
                <label htmlFor="">
                    <input type="checkbox"/>
                </label>
                <span>已经完成0</span> / 全部2
                <button className='btn btn-danger'>清除已完成任务</button>
            </div>
        );
    }
}

export default Index;