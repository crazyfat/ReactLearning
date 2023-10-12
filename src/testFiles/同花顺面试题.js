const source = [{
    id: 1,
    pid: 0,
    name: 'body'
}, {
    id: 2,
    pid: 1,
    name: 'title'
}, {
    id: 3,
    pid: 2,
    name: 'div'
}]
function joinTree(){
    const map = new Map();
    for(let value of source){
        map.set(value.id, value);
    }
    let res = [];
    for(let value of source){
        if(value.pid===0){
            res.push(value);
        }else{
            let p = map.get(value.pid);
            if(p.children){
                p.children.push(value);
            }else{
                p.children = [value];
            }
        }
    }
    console.log(JSON.stringify(res[0], null,2))
    return;
}
joinTree()