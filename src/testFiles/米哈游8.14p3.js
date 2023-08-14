const arr = [[1,2], [2,3]];
const n = 3;
const func = ()=>{

}
let ifSeeArr = new Array(n+1).fill(0)
for(let item of arr){
    // item为数字后的每行输入
    let start = parseInt(item[0])
    let end = parseInt(item[1])
    let ans = 0
    for (let i = start; i <= end ; i++) {
        if(ifSeeArr[i] === 0) ans++
        ifSeeArr[i] = 1
    }
    console.log(ans)
}