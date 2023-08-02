import React, {useEffect, useImperativeHandle, useRef, useState} from 'react';
import {concatText} from "../../redux实践/features/textSlice";
import {useDispatch} from "react-redux";
const Input: React.FC = (props) =>{
    const dispatch = useDispatch();
    const submit = () =>{
        dispatch(concatText(inputRef.current?.value))
    }
    /*
    The error message says that the useRef function expects either an HTMLInputElement or null,
    but if you pass in nothing, it evaluates to undefined and that's why get the error message:
    */
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <div>
            <input ref={inputRef} type="text" placeholder="追加文本"/>
            <button onClick={submit}>提交</button>
        </div>
    )
}
export default Input;