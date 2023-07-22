import React from 'react';
import {root} from '../../index'
import {clear} from "@testing-library/user-event/dist/clear";
class Cmp03 extends React.Component<any, any>{
    state = {
        opacity: 1
    }
    unMountTitle = () =>{
        root.unmount();
    }
    static getDerivedStateFromProps(props: any, state: any){
        console.log('getDerivedStateFromProps', props);
        return null;
    }
    static getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): any {

    }


    componentDidMount() {
        console.log('mount');
        const interval = setInterval(()=>{
            this.setState({
                opacity: this.state.opacity-0.1
            })
            // console.log('console')
            if(this.state.opacity<=0){
                clearInterval(interval);
            }
        }, 200)
    }

    render() {
        console.log('render');
        let { opacity} = this.state;
        return (
            <div style={{ opacity: opacity }}>
                <h2>this is a title</h2>
                <button onClick={this.unMountTitle}>click</button>
            </div>
        )
    }
}
export default Cmp03