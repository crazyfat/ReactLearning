import React, {useRef} from 'react';
import {root} from '../../index'
import {clear} from "@testing-library/user-event/dist/clear";
class Cmp04 extends React.Component<any, any>{
    state = {
        newsArr: []
    }
    list = React.createRef<HTMLDivElement>();
    getSnapshotBeforeUpdate(prevProps: Readonly<any>, prevState: Readonly<any>): any {
        console.log(this.list.current?.scrollTop)
        return this.list.current?.scrollHeight;

    }
    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        // @ts-ignore
        // 当前scrollHeight-上一轮scrollHeight，就相当于新增元素的高度，让这个top以这个高度作为偏移
        // 当前情况是父容器没有padding的，所以可以取30作为偏移，但是如果有padding的话，就需要以下面的方式了
        this.list.current.scrollTop += this.list.current.scrollHeight - snapshot;
    }

    componentDidMount() {
        const timer = setInterval(()=>{
            const { newsArr } = this.state;
            const news: string = '新闻'+(newsArr.length+1);
            this.setState({ newsArr: [news, ...newsArr] })
        }, 100);
        setTimeout(()=>{
            clearInterval(timer);
        }, 10000);
    }

    render() {
        const style = {
            container:{
                width: '200px',
                height: '150px',
                backgroundColor: '#0f0',
                overflow: 'auto'
            },
            news:{
                height: '30px'
            }
        }
        const { newsArr } = this.state;
        return (
            <div ref={this.list} style={style.container}>
                {
                    newsArr.map((value, index)=><div key={index} style={style.news}>{value}</div>)
                }
            </div>
        )
    }
}
export default Cmp04