import React from 'react';
import {useParams, useMatch, useSearchParams, useLocation} from "react-router-dom";
import {Message} from "./index";

function Content(props: any) {
    //const a = useParams();
    const [search, setSearch] = useSearchParams();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>this is title: {location.state.title}</h1>
            <h2>this is content: {location.state.content}</h2>
            <button onClick={()=>{
                setSearch('title=xxx&content=kkkk')
            }}>update search</button>
        </div>
    );
}

export default Content;