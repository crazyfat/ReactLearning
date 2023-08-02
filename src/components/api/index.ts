import axios from "axios";
export interface Res{
    message?: string,
    data?: string,
    status?: number
}
export const reqMovie = async function<Promise> (){
    const resObj:Res = {};
    return new Promise<Res>((resolve, reject)=>{
        axios.request({
            method:'get',
            url: 'https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=24&page_id=1&ret_num=48'
        }).then(value => {
            resObj.message = value.statusText;
            resObj.status = value.status;
            if(value.status === 200) {
                resObj.data = value.data.data.list[0].title;
                resolve(resObj);
            }
            else{
                resObj.data = value.statusText;
                reject(resObj);
            }
        }).catch(reason => {
            resObj.message = reason.message;
            reject(resObj)
        })
    })
}