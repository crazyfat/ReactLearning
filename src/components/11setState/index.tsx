import React, {Component, useState} from 'react';
interface State{
    sum: number
}
class Index extends Component<any, State> {
    state = {
        sum: 10
    }
    add = ()=>{
        this.setState({ sum: this.state.sum+1 }, ()=>console.log(this.state.sum));// setState是一个异步任务
        this.setState((prevState, props)=>({sum: prevState.sum+1}))
    }
    render() {
        return (
            <div>
                <h1>current sum: {this.state.sum}</h1>
                <button onClick={this.add}>+</button>
            </div>
        );
    }
}

export default Index;