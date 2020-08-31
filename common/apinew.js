import httpUtils from '@/utils/http-utils.js'
import httpConfig from '@/common/http-config.js'
import signUtils from '@/utils/sign.js'

const login = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.realPost(request, httpConfig.interfacesnew.login).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const findListThingWithThingtypeWithUserWithLocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfacesnew.findListThingWithThingtypeWithUserWithLocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const findListWithUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfacesnew.findListWithUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export default {
    login,
    findListThingWithThingtypeWithUserWithLocation,
    findListWithUser
}