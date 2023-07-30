import React, {useContext} from 'react';
import {createContext, Component} from "react";
const Mycontext = createContext({name:'', age:0});
const {Provider, Consumer} = Mycontext;

function Index(props: any) {
    const obj = {
        name: 'zhangsan',
        age: 12
    }
    return (
        <div style={{backgroundColor: '#0dd'}}>
            this is Index
            <Provider value={obj}>
                <A/>
            </Provider>
        </div>
    );
}

class A extends Component {
    static contextType = Mycontext;
    render() {
        return (
            <div style={{ backgroundColor: '#0f0' }}>
                this is B, {JSON.stringify(this.context)}
                <B/>
            </div>
        );
    }
}


function B(){
    return (
        <div style={{backgroundColor: '#f00'}}>
            this is B
            <Consumer>
                {
                    ctx => (`name:${ctx.name}, age:${ctx.age}`)
                }
            </Consumer>
            <D/>
        </div>
    )
}

function D(){
    const ctx = useContext(Mycontext);
    return (
        <div style={{backgroundColor: '#fff '}}>
            {
                `name: ${ctx.name}`
            }
        </div>
    )
}

export default Index;