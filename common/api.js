import httpUtils from '@/utils/http-utils.js'
import httpConfig from '@/common/http-config.js'
import signUtils from '@/utils/sign.js'

export const createLocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.createLocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const pageLocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.pageLocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findOneLocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findOneLocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findListLocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findListLocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const updateByIdLocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.updateByIdLocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const thing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.thing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const createThing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.createThing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const pageThing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.pageThing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findOneThing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findOneThing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findListThing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findListThing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const updateByIdThing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.updateByIdThing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const deleteThing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.deleteThing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const createThingandlocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.createThingandlocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const pageThingandlocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.pageThingandlocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findOneThingandlocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findOneThingandlocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findListThingandlocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findListThingandlocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const updateByIdThingandlocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.updateByIdThingandlocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const createThingandtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.createThingandtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const pageThingandtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.pageThingandtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findOneThingandtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findOneThingandtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findListThingandtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findListThingandtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const updateByIdThingandtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.updateByIdThingandtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const deleteThingandtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.deleteThingandtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const createThingtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.createThingtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const pageThingtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.pageThingtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findOneThingtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findOneThingtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findListThingtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findListThingtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const updateByIdThingtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.updateByIdThingtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const createUser2 = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.createUser2).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const pageUser2 = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.pageUser2).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findOneUser2 = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findOneUser2).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const findListUser2 = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findListUser2).then((response) => {

            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const updateByIdUser2 = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.updateByIdUser2).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const location = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.location).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const deleteLocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.deleteLocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const thingandlocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.thingandlocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const deleteThingandlocation = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.deleteThingandlocation).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const thingandtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.thingandtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const thingtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.thingtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const deleteThingtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.deleteThingtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const user2 = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.user2).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
export const deleteUser2 = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.deleteUser2).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}


/**
 * 登录
 */
export const login = (wxCode, grpCode, hideLoading) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request.wxCode = wxCode;
        if (grpCode)
            request.grpCode = grpCode;
        httpUtils.realPost(request, httpConfig.interfaces.login, '', hideLoading, true)
            .then((response) => {
                resolve(response);
            }).catch((res) => {
            reject(res);

        })
    })
}







/**
 * 注册
 */
export const regist = (wxCode, custName, custSrc, ownType, grpCode, photo, shopCode, mobile) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request.custName = custName;
        request.custSrc = custSrc;
        request.grpCode = grpCode;
        request.wxCode = wxCode;
        request.ownType = ownType;

        if (mobile)
            request.mobile = mobile;
        request.photo = photo;
        if (shopCode)
            request.shopCode = shopCode;

        httpUtils.realPost(request, httpConfig.interfaces.regist, '', false, false)
            .then((response) => {
                resolve(response);
            })
    })
}

