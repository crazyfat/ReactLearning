import {Dispatch} from "redux";
import {numConfig} from "../constants";
import {Action} from "../interface";
const {ADD} = numConfig;
export const addNumber = (newNum: number) => ({ type: ADD, data: newNum});
export const delayAddNumber = (newNum: number) =>{
    return (dispatch: Dispatch<Action<number>>) =>{
        setTimeout(()=>{
            dispatch(addNumber(newNum))
        }, 1000)
    }
}
