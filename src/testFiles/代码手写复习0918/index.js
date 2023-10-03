// promise.then
const then = function(onfulfilled, onrejected){
    const self = this;
    return new Promise((resolve, reject)=>{
        let fulfilled = function(){
            try{
                let res = onfulfilled(self.value);
                return res instanceof Promise? res.then(resolve, reject) : resolve(res);
            }catch (e) {
                reject(e);
            }
        }
        let rejected = function(){
            try{
                let res = onrejected(self.value);
                return res instanceof Promise? res.then(resolve, reject) : rejected(res);
            }catch (e) {
                rejected(e)
            }
        }
        switch(self.state){
            case 'pending':
                self.onFulfilledCb.push(fulfilled);
                self.onRejectedCb.push(rejected);
                break;
            case 'resolve':
                fulfilled();
                break;
            case 'rejected':
                rejected();
                break;
        }
    })
}
function curry(fn){
    return function curried(...args1){
        const self = this;
        if(args1.length === fn.length){
            return fn.apply(self,args1);
        }else{
            return (...args2)=>{
                return curried.apply(self, args1.concat(args2))
            }
        }
    }
}
