// gen实现斐波那契数列
function *fi(a, b){
    yield a+b;
    fi(b, a+b);
}
const gen = fi(0, 1);
for(let i = 0; i<10; i++){
    console.log(gen.next().value);
}