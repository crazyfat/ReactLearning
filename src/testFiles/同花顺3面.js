let arr = [[1,1],[2,2],[3,3],[4,4]], s=[0,0], d=[5,5], r=2;
const q = ()=>{
    arr.unshift(s);
    arr.push(d);
    let len = arr.length;
    const road = new Array(len).fill(0).map(()=>new Array(len).fill(0));
    for(let i = 0; i<len; i++){
        for(let j = i; j<len; j++){
            let dis = Math.sqrt((arr[i][0]-arr[j][0])*(arr[i][0]-arr[j][0])+(arr[i][1]-arr[j][1])*(arr[i][1]-arr[j][1]));
            if(dis<=r){
                road[i][j] = 1;
                road[j][i] = 1;
            }
        }
    }
    console.log(road)
    const record = new Array(len).fill(0), que = [];
    que.push(0);
    while(que.length){
        let cur = que.shift();
        record[cur] = 1;
        if(cur === (len-1)) return true;
        for(let i = 0; i<len; i++){
            // 距离可达并且未被访问
            if(road[cur][i] && !record[i]) que.push(i);
        }
    }
    return false;
}
console.log(q())

