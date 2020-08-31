import httpUtils from '@/utils/http-utils.js'
import httpConfig from '@/common/http-config.js'
import signUtils from '@/utils/sign.js'

const createLocation = (item) => {
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
const pageLocation = (item) => {
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
const findOneLocation = (item) => {
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
const findListLocation = (item) => {
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
const updateByIdLocation = (item) => {
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
const createThing = (item) => {
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
const pageThing = (item) => {
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
const findOneThing = (item) => {
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
const findListThing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        console.log(JSON.stringify(request))
        httpUtils.post(request, httpConfig.interfaces.findListThing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const updateByIdThing = (item) => {
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
const createThingandlocation = (item) => {
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
const pageThingandlocation = (item) => {
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
const findOneThingandlocation = (item) => {
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
const findListThingandlocation = (item) => {
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
const updateByIdThingandlocation = (item) => {
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
const createThingandtype = (item) => {
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
const pageThingandtype = (item) => {
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
const findOneThingandtype = (item) => {
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
const findListThingandtype = (item) => {
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
const updateByIdThingandtype = (item) => {
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
const createThingtype = (item) => {
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
const pageThingtype = (item) => {
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
const findOneThingtype = (item) => {
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
const findListThingtype = (item) => {
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
const updateByIdThingtype = (item) => {
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
const createUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.createUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const pageUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.pageUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const findOneUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findOneUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const findListUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.findListUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const updateByIdUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.post(request, httpConfig.interfaces.updateByIdUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const location = (item) => {
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
const deleteLocation = (item) => {
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
const thing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.thing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const deleteThing = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.deleteThing).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const thingandlocation = (item) => {
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
const deleteThingandlocation = (item) => {
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

const thingandtype = (item) => {
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
const deleteThingandtype = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.deleteThingandtype).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const thingtype = (item) => {
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
const deleteThingtype = (item) => {
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
const user = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.user).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}
const deleteUser = (item) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request = item;
        httpUtils.getParams(request, httpConfig.interfaces.deleteUser).then((response) => {
            resolve(response);
        }).catch((res) => {
            reject(res);
        })
    })
}

export default {
    location,
    createLocation,
    pageLocation,
    findOneLocation,
    findListLocation,
    updateByIdLocation,
    deleteLocation,
    thing,
    createThing,
    pageThing,
    findOneThing,
    findListThing,
    updateByIdThing,
    deleteThing,
    thingandlocation,
    createThingandlocation,
    pageThingandlocation,
    findOneThingandlocation,
    findListThingandlocation,
    updateByIdThingandlocation,
    deleteThingandlocation,
    thingandtype,
    createThingandtype,
    pageThingandtype,
    findOneThingandtype,
    findListThingandtype,
    updateByIdThingandtype,
    deleteThingandtype,
    thingtype,
    createThingtype,
    pageThingtype,
    findOneThingtype,
    findListThingtype,
    updateByIdThingtype,
    deleteThingtype,
    user,
    createUser,
    pageUser,
    findOneUser,
    findListUser,
    updateByIdUser,
    deleteUser
}