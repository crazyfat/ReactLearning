const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
void async function () {
    function q2(a,b,c){
        let delta = b*b-4*a*c, x1, x2;
        if(a === 0){
            x1 = -c/b;
            x2 = x1;
            console.log(x1);
            console.log(x2);
            return;
        }
        if(delta>=0){
            x1 = (-b+Math.sqrt(delta))/2*a;
            x2 = (-b-Math.sqrt(delta))/2*a;
            console.log(x1);
            console.log(x2);
        }else{
            x1 = (-b/2*a);
            x2 = x1;
            console.log(x1+' '+(Math.sqrt(-delta)));
            console.log(x2+' '+(-Math.sqrt(-delta)));
        }
        return;
    }

    var a = parseInt(await readline());
    var b = parseInt(await readline());
    var c = parseInt(await readline());
    q2(a,b,c);
}()
//q2(1,-4,4)