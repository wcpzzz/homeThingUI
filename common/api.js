import httpUtils from '@/utils/http-utils.js'
import httpConfig from '@/common/http-config.js'
import signUtils from '@/utils/sign.js'

/**
 * 物品查询
 */
export const findListThing = (item)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request = item
		httpUtils.post(request,httpConfig.interfaces.findListThing)
			.then((response)=>{
				resolve(response);
			}).catch((res)=>{
			reject(res);
		})
	})
}














/**
 * 登录
 */
export const login = (wxCode,grpCode,hideLoading)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.wxCode=wxCode;
		if(grpCode)
		request.grpCode=grpCode;
		httpUtils.realPost(request,httpConfig.interfaces.login,'',hideLoading,true)
		.then((response)=>{
			resolve(response);
		}).catch((res)=>{
			reject(res);

		})
	})
}
/**
 * 注册
 */
export const regist = (wxCode,custName,custSrc,ownType,grpCode,photo,shopCode,mobile)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.custName=custName;
		request.custSrc=custSrc;
		request.grpCode=grpCode;
		request.wxCode=wxCode;
		request.ownType=ownType;

		if(mobile)
		request.mobile=mobile;
		request.photo=photo;
		if(shopCode)
		request.shopCode=shopCode;

		httpUtils.realPost(request,httpConfig.interfaces.regist,'',false,false)
		.then((response)=>{
			resolve(response);
		})
	})
}

