// @ts-ignore
function decorator(target: any){
    target.prototype.say = () =>{
        console.log('kkk');
    }
}
function de2(name: string){
    return (target: any) =>{
        target.say = () =>{
            console.log(name)
        }
    }
}
@de2('ozhangsan')
class Obj{
    static say: ()=>void;
    constructor() {
    }

}
Obj.say();