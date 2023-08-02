import {createStore, applyMiddleware, combineReducers} from "redux";
import text from "./reducers/text";
import num from "./reducers/num";
import counterSlice from "./features/counterSlice";
import textSlice from "./features/textSlice";
import {configureStore} from "@reduxjs/toolkit";
//export default createStore(reducer, applyMiddleware(thunk))
export default configureStore({
    reducer:{
        counterSlice,
        textSlice
    }
})