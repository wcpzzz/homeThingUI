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
//查询thing列表+location+user+thingtype关联表
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
//查询thing列表+user关联表
const findListThingWithUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfacesnew.findListThingWithUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
//查询Location列表+user关联表
const findListLocationWithUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfacesnew.findListLocationWithUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
//查询Thingtype列表+user关联表
const findListThingtypeWithUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfacesnew.findListThingtypeWithUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export default {
    login,
    findListThingWithThingtypeWithUserWithLocation,
    findListThingWithUser,
    findListLocationWithUser,
    findListThingtypeWithUser
}