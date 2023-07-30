import React, {useState} from 'react';

function ErrorTest(props: any) {
    const [cnt, setCnt] = useState<number>(0);
    if(cnt>0) throw Error('cnt>0!');
    return (
        <div>
            <h1>cnt: {cnt}</h1>
            <button onClick={()=>setCnt((cnt)=>cnt+1)}>+</button>
        </div>
    );
}

export default ErrorTest;