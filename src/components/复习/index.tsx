import React, {
    JSXElementConstructor,
    ReactElement,
    ReactNode,
    ReactPortal,
    useCallback,
    useEffect,
    useState
} from "react";
type FunctionType = () => void;
const Tle = React.memo((props: { text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; tap: FunctionType; show: boolean}) => {
    console.log(props)
    const[data, setData] = useState('')
    useEffect(()=>{
        console.log('child updated')
    })
    useEffect(()=>{
        console.log('child mounted')
        return ()=>{
            console.log('child unmounted')
        }
    }, [])
    return <div>
        <h5>{props.text+data}</h5>
        <button onClick={()=>setData(data+'3')}>子组件数据更新</button>
        <button onClick={props.tap}>数字增强</button>
    </div>
})
function Cmp26(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false)
    const [data, setData] = useState('初始数据')
    const [cnt, setCnt] = useState(0)
    const listInfo = ['1', '2', '3']
    let tmp = cnt
    const addCnt = ()=>{
        setCnt(tmp+1)
    }
    useEffect(()=>{
        console.log('father mount')
        return ()=>{
            console.log('father unmount')
        }
    }, [])
    const change = () =>{
        setShow(!show);
    }
    // @ts-ignore
    // @ts-ignore
    return <div>
        {/*{show? <Tle text={data}></Tle> : <div><h5>unshow</h5></div>}*/}
        <Tle tap={addCnt} text={data} show={show}></Tle>
        <h5>{cnt}</h5>
        <button onClick={change}>点击切换</button>
        <button onClick={()=>setData(data+'4')}>切换数据</button>
        <ul>
            {
                listInfo.map((item, idx)=>(
                    <li key={idx}>{item}</li>
                ))
            }
        </ul>
    </div>
}
export default Cmp26