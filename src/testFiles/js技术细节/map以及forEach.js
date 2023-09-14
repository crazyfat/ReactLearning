const arr = ['1', '2', '333']
console.log(arr)
console.log(arr.map(parseInt))
arr.forEach((item, idx)=>{
    arr[idx] = parseInt(item)
})
console.log(arr)
const a = 110.000001
console.log(a.toFixed(3), Math.round(a), a.toPrecision(3))