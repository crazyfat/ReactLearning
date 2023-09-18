function arrange(str) {
    return new Arrange(str);
}
class Arrange {
    constructor(str){
        this.str = str;
        this.delay = 0;
        this.delayFirst = 0;
    }
    execute = function () {
        setTimeout(()=>{
            console.log(this.str+'is notified')
        }, this.delayFirst)
        return this
    }
    wait = function (delay) {
        this.delay += delay*1000
        return this
    }
    waitFirst = function (delayFirst) {
        this.delayFirst += delayFirst*1000
        return this
    }
    do = function (str2) {
        setTimeout(() => {
            setTimeout(()=>{
                console.log('Start to '+str2)
            })
        }, this.delay+this.delayFirst);
        return this
    }
}

arrange('William').execute();
