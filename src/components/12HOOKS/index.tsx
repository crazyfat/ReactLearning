import React, {useEffect, useState} from 'react';
import {root} from "../../index";

function Index(props: any) {
    const [sum, setSum] = useState<number>(0);
    useEffect(()=>{
        console.log('%%%')
        return ()=>console.log('unmount')
    }, [])
    const add = ()=>{
        setSum(prevState => prevState+1);
    }
    const unmount = () =>{
        root.unmount();
    }
    return (
        <div>
            <h1>current sum: {sum}</h1>
            <button onClick={add}>+</button>
            <button onClick={unmount}>unMount</button>
        </div>
    );
}

export default Index;