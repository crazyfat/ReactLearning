import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {reqMovie, Res} from "../../components/api";
export const getMovie = createAsyncThunk('movie', async ()=>{
    const res = await reqMovie()
    return res;
})
export const counterSlice = createSlice({
    name:'text',
    initialState: {
        id:'0',
        text: '初始的值'
    },
    extraReducers(builder){
        builder
            .addCase(getMovie.pending, state => {
                console.log('进行中');
                state.text = '进行中'
            })
            .addCase(getMovie.fulfilled ,(state, action) => {
                console.log('success');
                state.text = action.payload.data as string;
            })
            .addCase(getMovie.rejected, (state, action) =>{
                const payload = action.payload as Res;
                console.log('reject', action);
                state.text = payload.message as string;
            })
    },
    reducers:{
        clearText: state => {
          state.text = '初始的值12:wq1gti3git ';
          state.id = '0'
        },
        concatText: (state, action) => {
            state.text = state.text.concat(action.payload)
        }
    }
})
export const {clearText, concatText} = counterSlice.actions
export default counterSlice.reducer