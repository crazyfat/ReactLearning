function debounce(fn){
    let timer = null;
    return (time)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn();
        }, time)
    }
}
function throttle(fn){
    let timer = false;
    return (time)=>{
        if(timer) return;
        timer = true;
        setTimeout(()=>{
            fn();
            timer = false;
        }, time);
    }
}