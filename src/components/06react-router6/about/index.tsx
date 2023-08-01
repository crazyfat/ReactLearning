import React, {useState} from 'react';
import {Navigate} from "react-router-dom";

function Index() {
    const [sum, setSum] = useState<number>(1);
    return (
        <div>
            <h1>this is about !!</h1>
            <h1>current sum is {sum}</h1>
            {sum === 2? <Navigate to="/home"/>: ''}
            <button onClick={()=>setSum(2)}>+</button>
        </div>
    );
}

export default Index;