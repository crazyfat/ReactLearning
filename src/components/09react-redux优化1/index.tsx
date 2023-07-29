import React, {Component} from 'react';
import {connect} from "react-redux";
import {asyncIn, createIn} from "../../redux/count_action";
interface StateProps{
    sum: number
}
interface DispatchProps{
    increment: (arg0: number)=>void
}
class Index extends Component<StateProps & DispatchProps, any> {
    select = React.createRef<HTMLSelectElement>();
    render() {
        console.log(this.props)

        // @ts-ignore
        return (
            <div>
                <h1>当前的和为：{this.props.sum}</h1>
                <div style={{ display:'flex', justifyContent:'center' }}>
                    <select ref={this.select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={()=>{ // @ts-ignore
                        this.setState({ sum: this.state.sum + parseInt(this.select.current?.value) }) }} style={style.btnSty}>+</button>
                    <button onClick={()=>{ // @ts-ignore
                        this.setState({ sum: this.state.sum - parseInt(this.select.current?.value) }) }} style={style.btnSty} style={style.btnSty}>-</button>
                    <button onClick={()=>{ // @ts-ignore
                        if(this.state.sum%2 !== 0){ this.setState({sum: this.state.sum + parseInt(this.select.current?.value)}) } }} style={style.btnSty}>和奇数的话就加</button>
                    <button style={style.btnSty} onClick={()=>{ // @ts-ignore
                        this.props.increment(this.select.current?.value*1)}}>异步加</button>
                </div>
            </div>
        );
    }
}
const style = {
    btnSty: {
        marginLeft: '10px'
    }
}
export default connect(
    (initialState: number)=> ({ sum: initialState }),
    {
        increment: createIn
    }
)(Index);


