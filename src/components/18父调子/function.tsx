import React, {useImperativeHandle, useRef, useState} from 'react';
interface ChildProps{
    innerRef?: React.Ref<{name: string, change():void}>,
    age?: number
}
function Index() {
    const cd = useRef<{name: string, change():void}>(null!)
    return (
        <div onClick={(e)=>{
            console.log(cd, e);
            cd.current.change();
        }}>
            <Child innerRef={cd} />
        </div>
    );
}

const Child: React.FC<ChildProps> = (props) =>{
    const [name, setName] = useState<string>('aaa');
    const change = ()=>{
        setName('hhh')
    }
    useImperativeHandle(props.innerRef, ()=>({
        name,
        change
    }))
    return (
        <div>
            this is child {name}
        </div>
    )
}

export default Index;