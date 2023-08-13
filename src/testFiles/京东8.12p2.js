const p = (n, arr)=>{
    arr.forEach((item, index, arr)=>{
        arr[index] = item % 10;
    })
    arr = arr.reverse();
    const dp = new Array(n).fill(0).map(()=>new Array(10).fill(0));
    // dp[0]表示第0次操作
    for(let idx = 0; idx<n; idx++)
        dp[idx][arr[idx]] = 1;
    for(let i = 1; i<n; i++){
        let tmp = [];
        for(let j = 0; j<10; j++){
            tmp.push(func(j, dp, i));
            //dp[i][j] = func(j, dp, i);
        }
        dp[i] = tmp;
    }
    console.log(...dp[n-1]);

}
const funcSum = (num, dp, i) =>{
    let sumP = 0;
    for(let j = 0; j<10; j++){
        if(dp[i][j]===0 || dp[i-1][((num+10)-j)%10]===0) continue
        sumP += dp[i][j]*dp[i-1][((num+10)-j)%10]
    }
    return sumP;
}
const funcMul = (dp, i, a, b) =>{
    if(a === b)
        return dp[i][a]*dp[i-1][b];
    else
        return dp[i][a]*dp[i-1][b]+dp[i][b]*dp[i-1][a];
}
const func = (flag, dp, i) =>{
    let mulP = 0, sumP = 0;
    switch (flag){
        case 0:
            mulP = dp[i][0]+dp[i-1][0];
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        case 1:
            mulP = funcMul(dp, i, 1, 1)+funcMul(dp, i, 3,7)+funcMul(dp, i, 9, 9);
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        case 2:
            mulP = funcMul(dp, i, 1,2)+funcMul(dp, i, 6,2)+funcMul(dp, i, 3,4)+funcMul(dp, i, 8,4)+funcMul(dp, i, 7,6)+funcMul(dp, i, 8, 9);
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        case 3:
            mulP = funcMul(dp, i, 1,3)+funcMul(dp, i, 1,3)+funcMul(dp, i, 9,7);
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        case 4:
            mulP = funcMul(dp, i, 1, 4)+funcMul(dp, i, 2, 2)+funcMul(dp, i, 2, 7)+funcMul(dp, i, 3, 8)+funcMul(dp, i, 6, 4)+funcMul(dp, i, 6, 9)+funcMul(dp, i, 8, 8);
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        case 5:
            mulP = funcMul(dp, i, 1, 5)+funcMul(dp, i, 3, 5)+funcMul(dp, i, 5, 5)+funcMul(dp, i, 7, 5)+funcMul(dp, i, 9, 5);
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        case 6:
            mulP = funcMul(dp, i, 1, 6)+funcMul(dp, i, 2, 3)+funcMul(dp, i, 2, 8)+funcMul(dp, i, 4, 4)+funcMul(dp, i, 4, 9)+funcMul(dp, i, 6, 6)+funcMul(dp, i, 7, 8);
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        case 7:
            mulP = funcMul(dp, i, 1, 7)+funcMul(dp, i, 3, 9);
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        case 8:
            mulP = funcMul(dp, i, 1, 8)+funcMul(dp, i, 2, 4)+funcMul(dp, i, 2, 9)+funcMul(dp, i, 3, 6)+funcMul(dp, i, 4, 7)+funcMul(dp, i, 6, 8);
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        case 9:
            mulP = funcMul(dp, i, 1, 9)+funcMul(dp, i, 3, 3)+funcMul(dp, i, 7, 7);
            sumP = funcSum(flag, dp, i);
            return (mulP+sumP);
        default:
            return 0;
    }
}
const arr = [1,2,3,4];
p(4, arr);