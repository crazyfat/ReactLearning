import React, {useEffect, useRef, useState} from "react";
import Mbutton from "./button";
import {RootState} from "../../redux实践/interface";
import Minput from "./input";
import {useSelector} from "react-redux";
const Index: React.FC = (props) =>{
    const textInfo = useSelector((state: RootState) => state.textSlice);
    const numInfo = useSelector((state: RootState) => state.counterSlice);
    return (
        <div>
            <h1>文本内容展示</h1>
            <hr/>
            <h1>{textInfo.text}</h1>
            <h1>数字展示{numInfo.num}</h1>
            <Mbutton/>
            <Minput/>
        </div>
    )
}
export default Index;