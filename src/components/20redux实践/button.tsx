import React from 'react';
import {useDispatch} from "react-redux";
import {increment, asyncIncrement} from "../../redux实践/features/counterSlice";
import {clearText, getMovie} from "../../redux实践/features/textSlice";
import {reqMovie} from "../api";

const Input: React.FC = (props) =>{
    const dispatch = useDispatch<any>();
    const clear = () =>{
        dispatch(clearText())
    }
    const asynClear = async () =>{
        dispatch(getMovie())
    }
    const add = () =>{
        dispatch(increment())
    }
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <button onClick={clear}>清空文本</button>
            <button onClick={asynClear}>点击数据请求</button>
            <button onClick={add}>数字添加</button>
        </div>
    )
}

export default Input;