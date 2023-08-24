function _render(vnode){
    if(typeof vnode === 'number') vnode = String(vnode);
    if(typeof vnode === 'string') return document.createTextNode(vnode);
    // 如果是普通的dom元素
    const dom = document.createElement(vnode.tag);
    if(vnode.attrs){
        Object.keys(vnode.attrs).forEach((key)=>{
            const value = vnode.attrs[key];
            dom.setAttribute(key, value);
        })
    }
    vnode.children.forEach((child)=>{
        dom.appendChild(_render(child));
    })
    return dom;
}