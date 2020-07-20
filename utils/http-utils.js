import httpConfig from '@/common/http-config.js'
import commonFuntcion from '@/utils/common-function.js'
import storageConfig from '@/common/storage-config.js'
const success='00';
const loadingTitle='请稍后...'
const tokenError='X1';
const unRegist='X3';
/**
 * 返回示例
 * {
  "code": "string",
  "data": {
    "rc": "string",
    "rcDetail": "string",
  },
  "message": "string"
}
 */

/**
 * 失败通信直接显示原因
 */
const showFaile=(reason)=>{
	uni.showToast({
		icon:'none',
		title:reason
	})
}
/**
 * param interface 接口名
 * param request  请求体
 * param token token
 * param hideLoading 是否隐藏loading ios如果下拉和loading均存在时，会造成首次下拉回弹超过标题！
 */



const commonPost=(request,url,hideLoading,hideError)=>{
	return new Promise((resolve,reject)=>{
		console.log("request：------"+JSON.stringify(request))
		console.log("request url:------"+url)
		if(!hideLoading){
			uni.showLoading({
				title:loadingTitle,
				mask:true
			})
		}
		uni.request({
				url:url,
				data:request,
				method: 'POST',
				success(res) {
					res=res.data;
					console.log("response:----"+JSON.stringify(res))
					uni.hideLoading();
					if(res.RespCode ==success){
						resolve(res);
					}else{
						reject(res.RespDesc)
					}

				},
				fail(res) {
					console.log("response网络异常:----"+JSON.stringify(res))
					uni.hideLoading();
					reject('网络异常!')
					showFaile('网络异常!')
				}
			}
		)
	})
}


const realPost=(request,interfaceName,token,hideLoading,hideError)=>{
	return new Promise((resolve,reject)=>{
			if(token)
				request.token=token;
			console.log("request：------"+JSON.stringify(request))
			console.log("request url:------"+httpConfig.requestUrl+interfaceName)
			if(!hideLoading){
				uni.showLoading({
					title:loadingTitle,
					mask:true
				})
			}
			uni.request({
				url:httpConfig.requestUrl+interfaceName,
				data:request,
				method: 'POST',
				success(res) {
					res=res.data;
					console.log("response:----"+JSON.stringify(res))
					uni.hideLoading();
					if(res.code==success){
						if(res.token){
							commonFuntcion.saveStorage(storageConfig.tokenStorage,res.token)
							.then(()=>{
								resolve(res.data);
							}).catch(()=>{
								reject('token保存失败!')
								if(!hideError)
								showFaile('token保存失败!')
							})
						}

						// 再判rc内部
						var data=res.data;
						if(data.rc==success){
							if(data.token){
								commonFuntcion.saveStorage(storageConfig.tokenStorage,data.token)
								.then(()=>{
									resolve(res.data);
								}).catch(()=>{
									reject('token保存失败!')
									if(!hideError)
									showFaile('token保存失败!')
								})
							}else{
								resolve(res.data);
							}
						}else{
							if(data.rc==tokenError){
								commonFuntcion.removeStorageByKey(storageConfig.tokenStorage);
							}
							reject(data);
							if(!hideError)
							showFaile(data.rcDetail)
						}
					}
					else{
						if(res.code==tokenError){
							commonFuntcion.removeStorageByKey(storageConfig.tokenStorage);
						}
						reject(res.message)
						if(!hideError)
						showFaile(res.message)

					}
				},
				fail(res) {
					console.log("response网络异常:----"+JSON.stringify(res))
					uni.hideLoading();
					reject('网络异常!')
					showFaile('网络异常!')
				}
			}
		)
	})
}

/**
 * param interface 接口名
 * param request  请求体
 * param token token
 * param hideLoading 是否隐藏loading ios如果下拉和loading均存在时，会造成首次下拉回弹超过标题！
 */
const realGet=(request,interfaceName,token,hideLoading,hideError)=>{
	return new Promise((resolve,reject)=>{
		if(token)
			request.token=token;
		console.log("request：------"+JSON.stringify(request))
		console.log("request url:------"+httpConfig.requestUrl+interfaceName)
		if(!hideLoading){
			uni.showLoading({
				title:loadingTitle,
				mask:true
			})
		}
		uni.request({
				url:httpConfig.requestUrl+interfaceName,
				data:request,
				method: 'GET',
				success(res) {
					res=res.data;
					console.log("response:----"+JSON.stringify(res))
					uni.hideLoading();
					if(res.code==success){
						if(res.token){
							commonFuntcion.saveStorage(storageConfig.tokenStorage,res.token)
								.then(()=>{
									resolve(res.data);
								}).catch(()=>{
								reject('token保存失败!')
								if(!hideError)
									showFaile('token保存失败!')
							})
						}

						// 再判rc内部
						var data=res.data;
						if(data.rc==success){
							if(data.token){
								commonFuntcion.saveStorage(storageConfig.tokenStorage,data.token)
									.then(()=>{
										resolve(res.data);
									}).catch(()=>{
									reject('token保存失败!')
									if(!hideError)
										showFaile('token保存失败!')
								})
							}else{
								resolve(res.data);
							}
						}else{
							if(data.rc==tokenError){
								commonFuntcion.removeStorageByKey(storageConfig.tokenStorage);
							}
							reject(data);
							if(!hideError)
								showFaile(data.rcDetail)
						}
					}
					else{
						if(res.code==tokenError){
							commonFuntcion.removeStorageByKey(storageConfig.tokenStorage);
						}
						reject(res.message)
						if(!hideError)
							showFaile(res.message)

					}
				},
				fail(res) {
					console.log("response网络异常:----"+JSON.stringify(res))
					uni.hideLoading();
					reject('网络异常!')
					showFaile('网络异常!')
				}
			}
		)
	})
}
/**
 * param interface 接口名
 * param request  请求体
 * param token token
 * param hideLoading 是否隐藏loading ios如果下拉和loading均存在时，会造成首次下拉回弹超过标题！
 */
const realGetParams=(request,interfaceName,token,hideLoading,hideError)=>{
	
	return new Promise((resolve,reject)=>{
		if(token)
			request.token=token;
		console.log("request：------"+JSON.stringify(request))
		console.log("request url:------"+httpConfig.requestUrl+interfaceName)
		if(!hideLoading){
			uni.showLoading({
				title:loadingTitle,
				mask:true
			})
		}
		uni.request({
				url:httpConfig.requestUrl+interfaceName,
				data:request,
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				},
				success(res) {
					res=res.data;
					console.log("response:----"+JSON.stringify(res))
					uni.hideLoading();
					if(res.code==success){
						if(res.token){
							commonFuntcion.saveStorage(storageConfig.tokenStorage,res.token)
								.then(()=>{
									resolve(res.data);
								}).catch(()=>{
								reject('token保存失败!')
								if(!hideError)
									showFaile('token保存失败!')
							})
						}

						// 再判rc内部
						var data=res.data;
						if(data.rc==success){
							if(data.token){
								commonFuntcion.saveStorage(storageConfig.tokenStorage,data.token)
									.then(()=>{
										resolve(res.data);
									}).catch(()=>{
									reject('token保存失败!')
									if(!hideError)
										showFaile('token保存失败!')
								})
							}else{
								resolve(res.data);
							}
						}else{
							if(data.rc==tokenError){
								commonFuntcion.removeStorageByKey(storageConfig.tokenStorage);
							}
							reject(data);
							if(!hideError)
								showFaile(data.rcDetail)
						}
					}
					else{
						if(res.code==tokenError){
							commonFuntcion.removeStorageByKey(storageConfig.tokenStorage);
						}
						reject(res.message)
						if(!hideError)
							showFaile(res.message)

					}
				},
				fail(res) {
					console.log("response网络异常:----"+JSON.stringify(res))
					uni.hideLoading();
					reject('网络异常!')
					showFaile('网络异常!')
				}
			}
		)
	})
}

/**
 * param interface 接口名
 * param request  请求体
 * param token token
 * param hideLoading 是否隐藏loading ios如果下拉和loading均存在时，会造成首次下拉回弹超过标题！
 */
const realPostParams=(request,interfaceName,token,hideLoading,hideError)=>{
	return new Promise((resolve,reject)=>{
			if(token)
				request.token=token;
			console.log("request：------"+JSON.stringify(request))
			console.log("request url:------"+httpConfig.requestUrl+interfaceName)
			if(!hideLoading){
				uni.showLoading({
					title:loadingTitle,
					mask:true
				})
			}
			uni.request({
				url:httpConfig.requestUrl+interfaceName,
				data:request,
				method: 'POST',
				header: {
				        'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
				    },
				success(res) {
					res=res.data;
					console.log("response:----"+JSON.stringify(res))
					uni.hideLoading();
					if(res.code==success){
						if(res.token){
							commonFuntcion.saveStorage(storageConfig.tokenStorage,res.token)
							.then(()=>{
								resolve(res.data);
							}).catch(()=>{
								reject('token保存失败!')
								if(!hideError)
								showFaile('token保存失败!')
							})
						}

						// 再判rc内部
						var data=res.data;
						if(data.rc==success){
							if(data.token){
								commonFuntcion.saveStorage(storageConfig.tokenStorage,data.token)
								.then(()=>{
									resolve(res.data);
								}).catch(()=>{
									reject('token保存失败!')
									if(!hideError)
									showFaile('token保存失败!')
								})
							}else{
								resolve(res.data);
							}
						}else{
							if(data.rc==tokenError){
								commonFuntcion.removeStorageByKey(storageConfig.tokenStorage);
							}
							reject(data);
							if(!hideError)
							showFaile(data.rcDetail)
						}
					}
					else{
						if(res.code==tokenError){
							commonFuntcion.removeStorageByKey(storageConfig.tokenStorage);
						}
						reject(res.message)
						if(!hideError)
						showFaile(res.message)

					}
				},
				fail(res) {
					console.log("response网络异常:----"+JSON.stringify(res))
					uni.hideLoading();
					reject('网络异常!')
					showFaile('网络异常!')
				}
			}
		)
	})
}

/**
 * 不跳转自动登录
 */
const postNoAutoLogin = (request,interfaceName,hideLoading,hideError)=>{
	return new Promise((resolve,inject)=>{
		commonFuntcion.checkStorgeHasUser(false).then(token=>{
			realPost(request,interfaceName,token,hideLoading,hideError).then((res)=>{
				resolve(res);
			}).catch((reason)=>{inject(reason)})
		}).catch(()=>{inject('尚未登录!')})
	})
}
/**
 * 跳转自动登录
 */
const post = (request,interfaceName,hideLoading,hideError)=>{
	return new Promise((resolve,inject)=>{
		commonFuntcion.checkStorgeHasUser(true).then(token=>{
			realPost(request,interfaceName,token,hideLoading,hideError).then((res)=>{
				resolve(res);
			}).catch((reason)=>{inject(reason)})
		}).catch(()=>{inject('尚未登录!')})
	})
}


/**
 * 跳转自动登录get
 */
const get = (request,interfaceName,hideLoading,hideError)=>{
	return new Promise((resolve,inject)=>{
		commonFuntcion.checkStorgeHasUser(true).then(token=>{
			realGet(request,interfaceName,token,hideLoading,hideError).then((res)=>{
				resolve(res);
			}).catch((reason)=>{inject(reason)})
		}).catch(()=>{inject('尚未登录!')})
	})
}


/**
 * 跳转自动登录form-data请求
 */
const postParams = (request,interfaceName,hideLoading,hideError)=>{
	return new Promise((resolve,inject)=>{
		commonFuntcion.checkStorgeHasUser(true).then(token=>{
			realPostParams(request,interfaceName,token,hideLoading,hideError).then((res)=>{
				resolve(res);
			}).catch((reason)=>{inject(reason)})
		}).catch(()=>{inject('尚未登录!')})
	})
}

/**
 * 不跳转自动登录
 */
const postParamsNoAutoLogin = (request,interfaceName,hideLoading,hideError)=>{
	return new Promise((resolve,inject)=>{
		commonFuntcion.checkStorgeHasUser(false).then(token=>{
			realPostParams(request,interfaceName,token,hideLoading,hideError).then((res)=>{
				resolve(res);
			}).catch((reason)=>{inject(reason)})
		}).catch(()=>{inject('尚未登录!')})
	})
}

/**
 * 跳转自动登录form-data请求
 */
const getParams = (request,interfaceName,hideLoading,hideError)=>{
	return new Promise((resolve,inject)=>{
		commonFuntcion.checkStorgeHasUser(true).then(token=>{
			realGetParams(request,interfaceName,token,hideLoading,hideError).then((res)=>{
				resolve(res);
			}).catch((reason)=>{inject(reason)})
		}).catch(()=>{inject('尚未登录!')})
	})
}

const postFile=(filePath,name,username,password,hideLoading)=>{
	return new Promise((resolve,reject)=>{
		if(!hideLoading){
			uni.showLoading({
				title:loadingTitle,
				mask:true
			})
		}
		console.log("username:----"+username);
		console.log('password:----'+password)

		uni.uploadFile({
			url:httpConfig.ossUrl,
			filePath:filePath,
			name:name,
			formData:{
				'userName':username,
				'password':password
			},
			success(res) {
				res=JSON.parse(res.data);
				console.log("response:----"+JSON.stringify(res))
				uni.hideLoading();
				if(res.RC==success){
					console.log('上传成功')
					resolve();
				}else{
					console.log(res.Msg)
					reject(res.Msg);
				}
			},
			fail(res) {
				console.log("response网络异常:----"+JSON.stringify(res))
				uni.hideLoading();
				reject('网络异常!')
			}
		})
	})
}

export default{
	postFile,
	realPost,
	post,
	postNoAutoLogin,
	postParamsNoAutoLogin,
	postParams,
	realPostParams,
	realGetParams,
	get,
	getParams,
	realGet,
	commonPost
}
