import {createSlice} from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name:'counter',
    initialState: {
        id:'0',
        num: 0
    },
    reducers:{
        increment: state => {
            state.num += 1
        },
        asyncIncrement: state => {
            setTimeout(()=>{
                console.log('async', state)
            })
        }
    }
})
console.log('counterSlice', counterSlice)
console.log('counterSlice.actions', counterSlice.actions)
console.log('counterSlice.reducer', counterSlice.reducer)
export const {increment, asyncIncrement} = counterSlice.actions
export default counterSlice.reducer