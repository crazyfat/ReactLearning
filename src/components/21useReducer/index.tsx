import React, {createContext, useContext, useReducer, useRef} from 'react';
import button from "../20redux实践/button";
import {Dispatch} from "redux";
interface Detail{
    name: string;
    age: number;
    hobby: string
}
const Ctx = createContext<Dispatch|null>(null);
function Detail(){

}
function Index() {
    const initValue: Detail = {
        name: 'wuyi',
        age: 2,
        hobby: 'sleep'
    }
    const reducer = (prevState:Detail, action:{type: string, payload:(string|number)}):Detail=>{
        const {type, payload} = action;
        switch (type){
            case 'changeName':
                return {
                    ...prevState,
                    name: payload as string
                };
            case 'changeAge':
                return {
                    ...prevState,
                    age: payload as number
                };
            case 'changeHobby':
                return {
                    ...prevState,
                    hobby: payload as string
                }
            case 'clear':
                return {
                    name: 'wuyi',
                    age: 2,
                    hobby: 'sleep'
                }
            default:
                return {...prevState};
        }
    }
    const [state, dispatch] = useReducer(reducer, initValue);
    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const hobbyRef = useRef<HTMLInputElement>(null);
    const clickFun = (fName: string)=>{
        switch (fName){
            case 'name':
                return ()=>{
                    dispatch({type:'changeName', payload: nameRef.current?.value as string})
                }
            case 'age':
                return ()=>{
                    dispatch({type:'changeAge', payload: ageRef.current?.value as string})
                }
            case 'hobby':
                return ()=>{
                    dispatch({type:'changeHobby', payload: hobbyRef.current?.value as string})
                }
        }
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <h1>this is cat's detail</h1>
            <ul>
                <li>name: {state.name}</li>
                <li>age: {state.age}</li>
                <li>hobby: {state.hobby}</li>
            </ul>
            <div>
                <input ref={nameRef} type="text" placeholder="change name"/>
                <button onClick={clickFun('name')}>change</button>
            </div>
            <div>
                <input ref={ageRef} type="text" placeholder="change age"/>
                <button onClick={clickFun('age')}>change</button>
            </div>
            <div>
                <input ref={hobbyRef} type="text" placeholder="change hobby"/>
                <button onClick={clickFun('hobby')}>change</button>
            </div>
            <Ctx.Provider value={dispatch as Dispatch}>
                <Clear/>
            </Ctx.Provider>
        </div>
    );
}
const Clear:React.FC = () =>{
    const dispatch = useContext(Ctx) as Dispatch;
    return (
        <button onClick={()=>{dispatch({type: 'clear'})}}>clear all</button>
    )
}

export default Index;