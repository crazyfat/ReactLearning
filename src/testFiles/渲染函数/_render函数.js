/*
    几个dom方法：document.createTextNode/document.createElement/dom.setAttribute/dom.appendChild
 */
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
/*
    vnode{
        tag:'DIV",
        attrs:{ id:'app' },
        children:[{...}]
    }
 */
function _render2(vnode){
    if(typeof vnode === 'number') vnode = String(vnode);
    if(typeof vnode === 'string') return document.createTextNode(vnode);
    const dom = document.createElement(vnode.tag)
    if(vnode.attrs){
        Object.keys(vnode.attrs).forEach((key)=>{
            dom.setAttribute(key, vnode.attrs[key]);
        })
    }
    vnode.children.forEach((child)=>{
        dom.appendChild(_render2(child));
    })
    return dom;

}