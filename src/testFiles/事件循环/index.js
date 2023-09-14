setTimeout(()=>{
    console.log('111')
})
function doForever(){
    return new Promise((resolve)=>{
        resolve()
    }).then(
        doForever
    )
}
doForever()