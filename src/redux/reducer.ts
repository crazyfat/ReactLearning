//形参的默认值
import {INCREMENT, DECREMENT} from "./constant";

const initState = 0;
export default function (prevState:any = initState, action:any){
    console.log(prevState, action)
    const {type, data} = action;
    switch (type){
        case INCREMENT:
            return prevState+data;
        case DECREMENT:
            return prevState-data;
        default:
            return prevState;
    }
}