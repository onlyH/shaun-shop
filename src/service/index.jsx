import axios from 'axios'
// 请求超时时间
const service = axios.create({timeout: 30000})
export function get(url,params={}) {
    params.t = Date.now();
    return service({
        url:url,
        method:'get',
        header:{},
        params
    })

}

export function post(url, data={}) {
    return service({
        url:url,
        method:'put',
        header:{
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data:JSON.stringify(data)
    })
}

export {service}