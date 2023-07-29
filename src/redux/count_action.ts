import {INCREMENT, DECREMENT, SUBMIT} from "./constant";
export const createIn = (data: any) => ( { type: INCREMENT, data } )
export const creatDe = (data: any) => ( {type: DECREMENT, data} )
export const asyncIn = (data: any) =>{
    return (dispatch: Function) =>{
        setTimeout(()=>{
            dispatch({type: INCREMENT, data})
        }, 1000)
    }
}
