import httpUtils from '@/utils/http-utils.js'
import httpConfig from '@/common/http-config.js'
import signUtils from '@/utils/sign.js'

export const login = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfacesnew.login).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
