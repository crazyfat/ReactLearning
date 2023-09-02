// function foo() {
//     console.log( this );
// }
//
// function doFoo() {
//     console.log(this)
//     foo();
// }
//
// var obj = {
//     a: 1,
//     doFoo: doFoo
// };
//
// var a = 2;
// obj.doFoo()

// function a(){
//     console.log(this.value)
// }
// const obj = {
//     value: 33,
//     fn: function(){
//         a()
//     },
//     fn2: a
// }
// obj.fn()
// obj.fn2()
function a(xx){
    this.x = xx;
    return this
};
var x = a(5);
var y = a(6);

console.log(x.x)  // undefined
console.log(y.x)  // 6
console.log(x=99)
var az;
console.log([]==![])
console.log([]==false)
console.log(![]==false)
