import {useReducer, useState} from "react";
interface Action{
    type: string,
    payload: number
}
const numReducer = (state: number, action: Action)=>{
    switch(action.type){
        case 'add':
            return state+action.payload;
        case 'dec':
            return state-1;
        default:
            throw new Error('unknown type')
    }
}
const Cmp = () =>{
    const [cnt, dispatch] = useReducer(numReducer, 0)
    return <>
        <h5>{cnt}</h5>
        <button onClick={()=>dispatch({type: 'add', payload: 2})}>+</button>
        <button onClick={()=>dispatch({type: 'dec', payload: 2})}>-</button>
    </>
}
export default Cmp