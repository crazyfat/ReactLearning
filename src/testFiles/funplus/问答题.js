function f(str){
    return str.split('').reduce((a,b)=>(a[b]++ || (a[b] = 1),a),{})
}
console.log(f('1234  999999ggg  3hg3 '))
const func = (a,b)=>(
    a[b]++ || (a[b]=1),a
)