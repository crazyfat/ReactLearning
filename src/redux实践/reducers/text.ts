import {Action, Text} from "../interface";
import {textConfig} from "../constants"
const {CLEAR, CONCAT} = textConfig;
const initState: Text = { id:'0', text: '初始文本' };
export default function(preState=initState, action: Action<string>){
    const {type, data} = action;
    switch (type){
        case CLEAR:
            return { id: preState.id+1, text: '初始文本'};
        case CONCAT:
            return {id: preState.id, text: preState.text.concat(data)};
        default:
            return preState;
    }
}