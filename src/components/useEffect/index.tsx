import {useEffect, useState} from "react";

const Cmp: React.FC = ()=>{
    const [data, setData] = useState(()=>{console.log('get data'); return 0;})
    useEffect(()=>{
        console.log('mounted')
        return ()=>{
            console.log('unmount')
        }
    }, [])
    useEffect(()=>{
        console.log('updated1', data)
        return ()=>{
            console.log('updated2', data)
        }
    })
    useEffect(()=>{
        console.log('data updated1', data)
        return ()=>{
            console.log('data update2', data)
        }
    },[data])
    return <>
        <h5>{data}</h5>
        <button onClick={()=>setData(data+1)}>+</button>
    </>
}
export default Cmp