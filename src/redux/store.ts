import {createStore, applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducer'
import personReducer from '../redux/reducers/person';
import thunk from "redux-thunk";
const reducers = combineReducers({
    countReducer,
    personReducer
})
export default createStore(reducers, applyMiddleware(thunk))