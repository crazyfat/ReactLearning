import React from 'react';

function Index() {
    return (
        <div>
            {/*<Red>*/}
            {/*    <Blue/>*/}
            {/*</Red>*/}
            <Red render={(name: string)=><Blue name={name}/>}/>
        </div>
    );
}

function Red(props: any) {
    const name = 'zhangsan';
    console.log(props)
    return (
        <div style={{width: '100px', height: '100px', backgroundColor:'#f00'}}>
            this is red
            {props.render(name)}
        </div>
    );
}

function Blue(props: any) {
    return (
        <div style={{width: '100px', height: '100px', backgroundColor:'#00f'}}>
            this is blue
            {props.name}
        </div>
    );
}


export default Index;