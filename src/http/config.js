var Fly = require("flyio/dist/npm/wx")
var fly = new Fly;
import qs from 'qs';

export const post = (url, params) => {
    return fly.post({
        url: url,
        data: qs.stringify(params),
    })
}

export const get = (url, params) => {
    return fly.get({
        url: url,
        params: params,
    })
}