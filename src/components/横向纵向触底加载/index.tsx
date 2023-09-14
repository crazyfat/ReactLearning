import React, {useEffect, useRef, useState} from 'react';
import './index.css'

function Index() {
    const [arr1, setArr1] = useState([1,2]);
    const [arr2, setArr2] = useState([1,2]);
    const columnRef = useRef();
    useEffect(()=>{
        const scroll1 = document.getElementsByClassName("row");
        // @ts-ignore
    },[])
    const reSetArr1 = ()=>{
        setArr1([1,2,3,4,5])
    }
    const reSetArr2 = ()=>{
        setArr2([1,2,3,4,5])
    }
    const pushArr1 = ()=>{
        setArr1([...arr1, ...arr1])
    }
    const pushArr2 = ()=>{
        setArr2([...arr2, ...arr2])
    }
    const onScroll1 = (e:any)=>{
        console.log(getComputedStyle(e.target).overflowY)
        if(e.target.clientHeight+e.target.scrollTop>=e.target.scrollHeight-1){
            pushArr1()
        }
    }
    const onScroll2 = (e:any)=>{
        if(e.target.clientWidth+e.target.scrollLeft>=e.target.scrollWidth-1){
            console.log('横向触底');
            pushArr2()
        }
    }
    return (
        <div>
            <div className="column" onScroll={onScroll1}>
                {
                    arr1.map((item, idx)=>(
                        <div style={{
                            width: '200px',
                            height:'300px',
                            backgroundColor:'#000',
                            marginLeft:'10px',
                            marginTop:'20px'
                        }}></div>
                    ))
                }
            </div>
            <div className="row" onScroll={onScroll2}>
                {
                    arr2.map((item, idx)=>(
                        <div style={{
                            width: '200px',
                            height:'300px',
                            backgroundColor:'#000',
                            marginLeft:'10px',
                            marginTop:'20px'
                        }}></div>
                    ))
                }
            </div>
            <button onClick={pushArr1}>add arr1</button>
            <button onClick={reSetArr1}>reset arr1</button>
        </div>
    );
}

export default Index;