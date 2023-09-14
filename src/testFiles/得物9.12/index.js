let day = 5, arr = [2,1,2,1,2]
// void (async function () {
//     // let day = parseInt(await readline());
//     // let arr = (await readline()).split(' ');
//     // arr = arr.map(item=>parseInt(item));
//     if(day===1){
//         console.log(arr[0]);
//         return;
//     }
//     if(day===2){
//         console.log(Math.max(arr[0], arr[1]));
//         return;
//     }
//     let dp = new Array(day).fill(0);
//     dp[0] = arr[0];
//     dp[1] = Math.max(arr[0], arr[1]);
//     dp[2] = Math.max(dp[0]+arr[2], dp[1]);
//     for(let i = 3; i<day; i++){
//         dp[i] = Math.max(arr[i]+dp[i-2], arr[i]+dp[i-3], dp[i-1])
//     }
//     console.log(dp[day-1]);
//     return;
// })()
let n = 7, arr2= [1,2,3,3,2,5,1]
function q2(s){
    let num = 1;
    while(Math.pow(2,num)-1<n){
        num++;
    }
    num--;
    let max = Math.pow(2, num);
    const find = (idx) =>{
        if(idx>n){
            return 0;
        }else if(idx>max && idx<=n){
            return arr2[idx-1];
        }
        return find(2*idx)+find(2*idx-1)
    }
    let l = find(2*s);
    let r = find(2*s+1);
    if(l>r){
        console.log("L");
    }else if(l<r){
        console.log('R');
    }else console.log("E");
    return;
}
q2(3)