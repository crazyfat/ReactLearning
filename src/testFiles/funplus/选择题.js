function fun(m,n){
    console.log(n)
    return {
        fun:function(o){
            return fun(o,m);
        }
    }
}
var hello = fun(0).fun(1).fun(2).fun(3)
console.log(hello)
setTimeout(()=>{
    console.log(1)
},0)
new Promise((resolve)=>{
    console.log(2);
    for(var i = 0; i<10000; i++){
        i == 9999 && resolve();
    }
    console.log(3)
}).then(()=>{console.log(4)})
console.log(5)
let arr1 = [1,2], arr2 = [3,4]
arr1.concat(arr2)
console.log(arr1)
