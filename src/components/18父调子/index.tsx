import React, {Component} from 'react';
import Child from "./child";

class Index extends Component {
    private cd: React.RefObject<Child>;
    constructor(p: any) {
        super(p);
        this.cd = React.createRef();

    }

    render() {
        return (
            <div onClick={()=>{console.log(this.cd); this.cd.current?.say()
            }}>
              <Child ref={this.cd} />
            </div>
        );
    }
}



export default Index;