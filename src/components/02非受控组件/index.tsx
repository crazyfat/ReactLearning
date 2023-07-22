import React from 'react';
class CMP02 extends React.Component<any, any>{
    private pwd: any;
    showPwd = (e:any)=>{
        e.preventDefault()
        alert(this.pwd.value+'&'+this.state.uid);
    }
    state = {
        uid: ''
    }
    setValue = (prop: string) =>{
        return (e: any)=>{
            this.setState({
                [prop]: e.target.value
            })
        }
    }
    render() {
        return (
            <form action="http://www.baidu.com">
                {/*这就是受控的表单input, 提前存放了value,类似于v-model*/}
                用户名：<input type="text" placeholder="输入账号" name="userId" onChange={this.setValue('uid')}/>
                {/*这就是非受控的表单input*/}
                密码：<input ref={c=>this.pwd = c} type="password" placeholder="输入密码" name="pwd"/>
                <button onClick={this.showPwd}>登录</button>
            </form>
        );
    }
}
export default CMP02