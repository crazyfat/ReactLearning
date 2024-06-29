import {createContext, memo, useContext, useEffect, useState} from "react";
interface P{
    data?: number
}
const Ctx = createContext({name: 'mike'})

const Child: React.FC<P> = memo((P)=>{
    const person = useContext(Ctx)
    useEffect(()=>{
        console.log('child updated', person.name)
    })
    return <div><h5>child cmp</h5></div>
})
const Father = ()=>{
    const [cnt, setCnt] = useState<number>(0)
    return  <div>
        <button onClick={()=>setCnt(cnt+1)}>add cnt</button>
        <h5>{cnt}</h5>
        <Ctx.Provider value={{name: 'juice'}}>
            <Child data={cnt}></Child>
        </Ctx.Provider>
        <Child data={cnt}></Child>
    </div>
}
export default Father