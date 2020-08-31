import storageConfig from '@/common/storage-config.js'

const toLogin=()=>{
	uni.navigateTo({
	    url: '/pages/home/home'
	})
}

/**
 * 随机生成订单号
 */
export const getRandomMerchantTxnNumber=()=>{
    let mydate=new Date();
    let result=mydate.getFullYear()+''+((mydate.getMonth()+1)>9?(mydate.getMonth()+1):'0'+(mydate.getMonth()+1))+''+(mydate.getDate()>9?mydate.getDate():'0'+mydate.getDate())+mydate.getHours()+''+
        mydate.getMinutes()+''+mydate.getSeconds()+''+Math.floor((1+Math.random())*1000000);
    return result+'';

}



/**
 * 跳转设置界面授权
 */
const toSetting=(content)=>{
	uni.showModal({
		title:'提示',
		content:content,
		confirmText:'去开启',
		success:(res)=> {
			if(res.confirm){
				uni.openSetting();
			}
		}
	})
}

/**
 * 检查本地缓存是否有用户对象
 */
const checkStorgeHasUser = (autoLogin) => {
    return new Promise((resolve, reject) => {
        uni.getStorage({
            key: storageConfig.tokenStorage,
            success: (res) => {
				if(res.data){
					resolve(res.data);
				}else{
					reject('本地缓存无登录信息,跳转登录');
					if(autoLogin)
						toLogin();
				}
            }, fail: () => {
                reject('本地缓存无登录信息,跳转登录');
                if(autoLogin)
					toLogin();
            }
        })
    })
}
/**
 * 页面跳转
 * @param path 跳转的路径
 */
const toPage=(path)=>{
	return new Promise((resolve,inject)=>{
		uni.navigateTo({
			url:path,
			success() {
				resolve();
			},
			fail() {
				uni.showToast({
					icon:'none',
					title:'功能建设中!敬请期待'
				})
			}
		})
	})
}

/**
 * 页面跳转
 * @param path 跳转的路径
 */
const redirectPage=(path)=>{
	return new Promise((resolve,inject)=>{
		uni.redirectTo({
			url:path,
			success() {
				resolve();
			},
			fail() {
				uni.showToast({
					icon:'none',
					title:'功能建设中!尽请期待'
				})
			}
		})
	})
}

/**
 * 存入缓存
 */
const saveStorage = (key, data) => {
    return new Promise((resolve, reject) => {
        uni.setStorage({
            key: key,
            data: data,
            success() {
                resolve();
            },
            fail() {
                reject();
            }
        })
    })
}
/**
 * 删除缓存
 */
const removeStorageByKey = (key) => {
    return new Promise((resolve, reject) => {
        uni.removeStorage({
            key: key,
            success() {
                resolve();
            },
            fail() {
                reject();
            }
        })
    })
}

/**
 * 取出缓存内容
 */
const getStorageByKey = (key) => {
    return new Promise((resolve, inject) => {
        uni.getStorage({
            key: key,
            success(res) {
                resolve(res.data);
            }, fail() {
                inject('获取' + key + '失败')
            }
        })
    })
}


/**
 * 返回非N的所有内容
 * @return array
 */
const filterArray = (array, n) => {
    Array.filter(item => {
        return item !== n;
    })
}

/**
 * 提示
 */
const showToast = (title) => {
    uni.showToast({
        icon: 'none',
        title: title
    })
}
/**
 * 深拷贝数组
 */
const deepClone = (initalObj) => {
    const obj = [];
    if (typeof initalObj !== 'object') {
        return initalObj
    }
    for (const key in initalObj) {
        if (typeof initalObj[key] === 'object') {
            //对数组特殊处理
            if (Array.isArray(initalObj[key])) {
                //用map方法返回新数组，将数组中的元素递归
                obj[key] = initalObj[key].map(item => deepClone(item))
            } else {
                //递归返回新的对象
                obj[key] = deepClone(initalObj[key]);
            }
        } else if (typeof initalObj[key] === 'function') {
            //返回新函数
            obj[key] = initalObj[key].bind(obj);
        } else {
            //基本类型直接返回
            obj[key] = initalObj[key];
        }
    }
    return obj;
}
/**
 * 密码必须为字母加数字且长度不小于8位
 */
const checkPassword = (password) => {//必须为字母加数字且长度不小于8位
    var str = password;
    if (str == null || str.length < 8) {
        return false;
    }
    var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
    if (!reg1.test(str)) {
        return false;
    }
    var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
    if (reg.test(str)) {
        return true;
    } else {
        return false;
    }
}

const changeDay=(org,days,timeFormat)=>{
		var nowDate=new Date(org);
		nowDate.setDate(nowDate.getDate()+days);
		return nowDate.Format(timeFormat);
	}
	
const compare=(obj1,obj2)=>{
    var props1 = Object.getOwnPropertyNames(obj1);
    var props2 = Object.getOwnPropertyNames(obj2);
    if (props1.length != props2.length) {
      return false;
    }
    for (var i = 0,max = props1.length; i < max; i++) {
      var propName = props1[i];
      if (obj1[propName] !== obj2[propName]) {
        return false;
      }
    }
    return true;
}	
	

/**
 * 获取小程序code
 */

const getCode=()=>{
	return new Promise((resolve,reject)=>{
		uni.login({
			provider:'weixin',
			success:(res)=>{
				resolve(res.code);
			},fail:(res)=> {
				reject(res.errMsg);
			}
		})
	})
}





export default {
	getCode,
	compare,
    toPage,
	toSetting,
	checkStorgeHasUser,
    saveStorage,
    getStorageByKey,
    showToast,
    deepClone,
	redirectPage,
    removeStorageByKey,
    checkPassword,
	changeDay,
    getRandomMerchantTxnNumber
}
