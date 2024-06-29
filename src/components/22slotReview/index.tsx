import React from 'react';
interface P{
    name: any,
    children: JSX.Element[]
}

const Child: React.FC<P> = (props) =>{
    console.dir(props)
    console.log(typeof props.children[0])
    return <>
        {
            React.Children.map(props.children, (child: JSX.Element)=>(
                child
            ))
        }
    </>
}
const Father: React.FC = () =>{
    return <>
        <h5>father</h5>
        <Child name={{id: 'zhangsan'}}>
            <h1>in child1</h1>
            <h1>in child2</h1>
        </Child>
    </>
}
export default Father