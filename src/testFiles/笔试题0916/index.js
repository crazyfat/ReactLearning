function getCombineArr(m, n) {
    // write code here
    const combinations = [];
    if(n > m) return combinations
    function generateCombination(currentCombination, start) {
        if (currentCombination.length === n) {
            combinations.push([...currentCombination]);
            return;
        }
        for (let i = start; i <= m; i++) {
            currentCombination.push(i);
            generateCombination(currentCombination, i + 1);
            currentCombination.pop();
        }
    }
    generateCombination([], 1);
    return combinations;
}
let arr = getCombineArr(1,0)
console.log(arr)

let q1 = (m,n)=>{

}
