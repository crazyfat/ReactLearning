import React, {Component, PureComponent} from 'react';

class Index extends Component {
    render() {
        return (
            <div>
                <Father/>
            </div>
        );
    }
}

class Father extends Component<any, any>{
    state={
        car:{
            name: '01'
        }
    }
    render() {
        return (
            <div style={{width: '400px', height:'400px', backgroundColor: '#f00'}}>
                <h1>car's name : {this.state.car.name}</h1>
                <button onClick={()=>{this.setState({ car:{name: this.state.car.name+'1'} })}}>change car's name</button>
                <Child/>
            </div>
        );
    }
}
class Child extends PureComponent<any, any>{
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        console.log('update')
    }

    render() {
        return (
            <div style={{width: '200px', height:'200px', backgroundColor: '#0f0'}}>
                <h2>this is child</h2>
            </div>
        );
    }
}

export default Index;