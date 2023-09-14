import {useEffect, useState} from "react";

export const useHover = (node:any)=>{
    const [cache, setCache] = useState({});
    const addListener = (key:string, cb:Function)=>{
        setCache({
            [key]:cb,
            ...cache
        });
        console.log(node)
        node.current.addEventListener(key, cb);
    }
    useEffect(()=>{
        return ()=>{
            console.log('umount hover')
            Object.keys(cache).forEach(key=>{
                node.removeEventListener(key);
            })
        }
    },[])
    return addListener
}
