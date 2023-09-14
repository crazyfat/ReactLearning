import React, {useEffect, useRef} from 'react';
import './index.css'
import {useHover} from "./index";
import button from "../20redux实践/button";
import { root } from '../..';

function UseHover() {
    const ref = useRef(null);
    const hover = useHover(ref);
    useEffect(()=>{
        hover('mouseenter', ()=>{
            console.log('!!')
            alert('msg')
        })
        return ()=>{
            console.log('umount fa')
        }
    },[])
    return (
        <div>
            <div ref={ref} className="first">
                <div className="two">
                    <div className="three">
                    </div>
                </div>
            </div>
            <button onClick={()=>root.unmount()}>umount</button>
        </div>

    );
}

export default UseHover;