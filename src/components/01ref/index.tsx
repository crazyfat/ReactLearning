import React from 'react';
class cmp extends React.Component<any, any>{
    state = {
        isHot: false
    }
    alertRef:any = React.createRef()
    showData = ()=>{
        console.log(this)
    }
    showData1(){
        // 这种写法 this会是undefined
        console.log(this)
    }
    changeWeather = ()=>{
        this.setState({
            isHot: !this.state.isHot
        })
    }
    saveRef = (cur:HTMLInputElement)=>{
        console.log('$', cur)
    }
    private input: HTMLInputElement | null | undefined;
    render() {
        const {isHot} = this.state;
        return (
            <div>
                <input ref={(cur)=>{ this.input = cur }} type="text" placeholder="点击展示数据"/>
                <button onClick={this.showData}>点击提示数据</button>
                <div onClick={this.changeWeather} ref={this.saveRef}>今天天气有点{isHot? '炎热':'凉爽'}</div>
                <div ref={this.alertRef} onClick={()=>{console.log(this.alertRef.current)}}>点击弹出createRef</div>
            </div>
        )
    }
}
export default cmp