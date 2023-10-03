function  computeAns(m, n, x, y, mArr, nArr){
    // 先从小到大排序
    mArr.sort((a, b) => a-b)
    nArr.sort((a, b) => a-b)
    //先把能排的货物先排了
    // 表示卡车是否有被使用过
    let used = new Array(n).fill(0)
    // 表示该货物是否找到卡车
    let finded = new Array(m).fill(0)
    // 表示遍历到的卡车标号
    let nIndex = 0
    let ans = 0
    for (let i = 0; i < m; i++) {
        let item = mArr[i]
        let findIndex = -1
        while (nIndex < n){
            // 如果当前元素是大于等于item，并且该元素没有被使用过
            if(nArr[nIndex] >= item && used[nIndex] === 0){
                used[nIndex] = 1
                finded[i] = 1
                ans++
                break
            }
            nIndex++
        }
        // 表示没有找到比该货物更大的卡车
        if(nIndex === n) break
    }
    // 表示遍历到的卡车标号
    nIndex = 0
    for (let i = 0; i < m; i++) {
        // 表示没有漏斗了
        let item = mArr[i]
        if(x === 0) break
        if(finded[i] === 0){
            // 尝试给货物找卡车
            while (nIndex < n){
                // 如果该货车没被使用过
                let temp = nArr[nIndex]+y
                if( temp >= item && used[nIndex] === 0){
                    used[nIndex] = 1
                    finded[i] = 1
                    ans++
                    x--
                    break
                }
                nIndex++
            }
        }
        // 表示没有找到比该货物更大的卡车
        if(nIndex === n) break

    }
    return ans

}
console.log(computeAns(5,5,1,5,[9,5,9,8,5],[1,6,2,6,4]))