const defineReactive = function(obj, key ,init){
    Object.defineProperty(obj, key, {
        get() {
            return init;
        },
        set(v) {
            init = init*v;
        }
    })
}
const obj = {a:2};
defineReactive(obj, 'a', 10);
console.log(obj.a)
obj.a = 2;
console.log(obj.a)

const cr = [1,2,3]
cr.splice()