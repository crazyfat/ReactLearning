import React, {useEffect, useRef, useState} from 'react';
import {root} from "../../index";
interface State{
    name:string
}

function Index() {
    const [msg, setMsg] = useState<State>({name:'sdfdsaf'})
    const [able, setAble] = useState<boolean>(true);
    const c = useRef('1');
    let flag = true, obj = {};
    useEffect(()=>{
        c.current = c.current+10;
        console.log(c.current)
        // @ts-ignore
        obj['c'] = 888;
        setTimeout(()=>{
            if(able){
                console.log('failure!!!',obj);
            }
        }, 3000)
        return ()=>{

            setTimeout(()=>{
                console.log('return able', able)
            }, 1000)
        }
    }, [])
    useEffect(()=>{
        console.log('msg change', obj)
    }, [msg])
    const umount = ()=>{
        root.unmount()
    }
    return (
        <div>
            <button onClick={umount} >click to umount</button>
            <br/>
            <button onClick={()=>{
                setMsg({name:'66666'})
                flag = false
            }}>update status</button>
        </div>
    );
}

export default Index;