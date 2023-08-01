import React, {useState} from 'react';
import {NavLink, Outlet} from "react-router-dom";
export interface Message{
    id: string,
    title: string,
    content: string
}
function Index() {
    const [msgs] = useState<Array<Message>>([
        {id: '001', title: '这是消息1', content: '消息1的内容'},
        {id: '002', title: '这是消息2', content: '消息2的内容'},
        {id: '003', title: '这是消息3', content: '消息3的内容'},
        {id: '004', title: '这是消息4', content: '消息4的内容'},
    ])
    return (
        <div>
            <ul>
                {
                    msgs.map((item)=>(
                        <li key={item.id}>
                            {/*<NavLink to={`content/${item.title}/${item.content}`}>{item.title}</NavLink>&nbsp;&nbsp;*/}
                            {/*<NavLink to={`content?title=${item.title}&content=${item.content}`}>{item.title}</NavLink>&nbsp;&nbsp;*/}
                            <NavLink to='content' state={{ title: item.title, content: item.content }}>{item.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
}

export default Index;