import React, {Component} from "react";
import {memo} from "react";

class Child extends Component {
    state = {
        name: 'hhh'
    }
    say = ()=>{
        this.setState({ name: 'ppp' })
    }
    render() {
        return (
            <div>
                this is child {this.state.name}
            </div>
        );
    }
}



export default Child;