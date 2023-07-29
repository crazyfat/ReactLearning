import {PersonObj} from "../interface";
const initState: Array<PersonObj> = [{id:'01', name:'zhangsan', age:'89'}];
export default function (prevState: Array<PersonObj> = initState, action: any) {
    const {type, data} = action;
    switch (type){
        case 'submit':
            return [...prevState, data];
        default:
            return prevState;
    }
}