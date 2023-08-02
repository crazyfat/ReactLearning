import {Action, Num} from "../interface";
import {numConfig} from "../constants"
const {ADD} = numConfig;
const initState: Num = { id:'0',  num: 1};
export default function(preState=initState, action: Action<number>){
    const {type, data} = action;
    switch (type){
        case ADD:
            const newT: Num = { id: preState.id, num: preState.num+data };
            return newT;
        default:
            return preState;
    }
}