import httpUtils from '@/utils/http-utils.js'
import httpConfig from '@/common/http-config.js'
import signUtils from '@/utils/sign.js'

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

/**
 * 检查是否可以领取卡
 */
export const isReceive = (grpCode)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.grpCode=grpCode;

		httpUtils.postParams(request,httpConfig.interfaces.isReceive,false,true)
		.then((response)=>{
			resolve(response);
		}).catch(data=>reject(data))
	})
}

/**
 * 检查是否可以领取卡
 */
export const vipQueryCardType = (cardType)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.cardType=cardType;
		httpUtils.realPostParams(request,httpConfig.interfaces.vipQueryCardType,'',false,true)
		.then((response)=>{
			resolve(response);
		}).catch(e=>reject(e))
	})
}


/**
 * 查询会员的所有会员卡
 */
export const queryCard = (queryType,grpCode,cardType,currentPage,pageRow,hideLoading)=>{
	console.log("querycard--------")
	return new Promise((resolve,reject)=>{
		let request={};
		if(cardType)
		request.cardType=cardType;
		if(grpCode)
		request.grpCode=grpCode;
		request.queryType=queryType;
		request.pageRow=pageRow;
		request.currentPage=currentPage;

		httpUtils.postNoAutoLogin(request,httpConfig.interfaces.queryCard,hideLoading,true)
		.then((response)=>{
			resolve(response);
		}).catch(e=>{
			reject(e)
		})
	})
}

export const receive = (cardType,grpCode,shopCode,couponType)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		if(couponType)
		request.couponType=couponType;
		request.cardType=cardType;
		request.grpCode=grpCode;
		if(shopCode)
		request.shopCode=shopCode;

		httpUtils.post(request,httpConfig.interfaces.receive,false,true)
		.then((response)=>{
			resolve(response);
		}).catch(res=>{reject(res)})
	})
}

/**
 * 获取18位会员卡对应数
 */
export const showPayCode = (custCode,expTime,tokenSrc)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		if(expTime)
		request.expTime=expTime;
		request.custCode=custCode;
		if(tokenSrc)
		request.tokenSrc=tokenSrc;

		request.tokenSrc=1;

		httpUtils.post(request,httpConfig.interfaces.showPayCode,false,true)
		.then((response)=>{
			resolve(response);
		})
	})
}
/**
 * 查询优惠券信息
 */
/*export const queryCoupon = (pageNo,pageSize,status,ownType,couponId,couponCode,grpCode,hideLoading)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.status=status;
		request.ownType=ownType;
		if(couponId)
		request.couponId=couponId;
		if(couponCode)
		request.couponCode=couponCode;
		if(grpCode)
		request.grpCode=grpCode;
		request.pageNo=pageNo;
		request.pageSize=pageSize;
		httpUtils.getParams(request,httpConfig.interfaces.queryCoupon,hideLoading,true)
		.then((response)=>{
			resolve(response);
		})
	})
}*/
/**
 * 查询可用优惠券信息
 */
export const queryCouponCanUsed = (pageNo,pageSize,ownType,couponId,couponCode,grpCode,hideLoading)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		if(couponId)
		request.couponId=couponId;
		if(ownType)
		request.ownType=ownType;
		if(couponCode)
		request.couponCode=couponCode;
		if(grpCode)
		request.grpCode=grpCode;
		request.pageNo=pageNo;
		request.pageSize=pageSize;
		httpUtils.getParams(request,httpConfig.interfaces.queryCouponCanUsed,hideLoading,true)
		.then((response)=>{
			resolve(response);
		})
	})
}
/**
 * 查询不可用优惠券信息
 */
export const queryCouponCantUsed = (pageNo,pageSize,hideLoading)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.pageNo=pageNo;
		request.pageSize=pageSize;
		httpUtils.getParams(request,httpConfig.interfaces.queryCouponCantUsed,hideLoading,true)
		.then((response)=>{
			resolve(response);
		})
	})
}
/**
 * 查询已使用优惠券信息
 */
export const queryCouponHasUsed = (pageNo,pageSize,hideLoading)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.pageNo=pageNo;
		request.pageSize=pageSize;
		httpUtils.getParams(request,httpConfig.interfaces.queryCouponHashUsed,hideLoading,true)
		.then((response)=>{
			resolve(response);
		})
	})
}
/**
 * 生成
 */
export const generateCouponToken = (couponId,grpCode,expTime,tokenSrc)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.grpCode=grpCode;
		request.couponId=couponId;
		request.expTime=expTime;
		request.tokenSrc=tokenSrc;

		httpUtils.post(request,httpConfig.interfaces.generateCouponToken,false,true)
		.then((response)=>{
			resolve(response);
		}).catch(res=>{
			reject(res);
		})
	})
}
/**
 * 领取优惠券
 */
export const receiveCoupon = (grpCode,couponCode,shopCode)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.grpCode=grpCode;
		request.couponCode=couponCode;
		if(shopCode)
			request.shopCode=shopCode;
		httpUtils.postParams(request,httpConfig.interfaces.receiveCoupon,false,true)
		.then((response)=>{
			resolve(response);
		}).catch(e=>{
			reject(e)
		})
	})
}
/**
 * 优惠券是否可以领取
 */
export const isReceiveCoupon = (grpCode,couponCode)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.grpCode=grpCode;
		request.couponCode=couponCode;
		httpUtils.getParams(request,httpConfig.interfaces.isReceiveCoupon,true,true)
		.then((response)=>{
			resolve(response);
		}).catch(reason=>reject(reason))
	})
}
/**
 * 根据条件查询优惠券
 */
export const listAllCouponByArgs = (couponCode)=>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.couponCode=couponCode;
		httpUtils.realGetParams(request,httpConfig.interfaces.listAllCouponByArgs,'',true,true)
		.then((response)=>{
			resolve(response);
		}).catch(e=>{
			reject(e);
		})
	})
}
/**
 * 会员查看某商户下优惠券数量
 */
export const countOfGrp = (grpCode) =>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.grpCode=grpCode;
		httpUtils.getParams(request,httpConfig.interfaces.countOfGrp,true,true)
		.then((response)=>{
			resolve(response);
		})
	})
}

/**
 * 会员核销记录查询
 */
export const queryTrans = (grpCode,currentPage,hideLoading) =>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.queryType=1;
		request.currentPage=currentPage,
		request.pageRow=50;
		request.grpCode=grpCode;
		httpUtils.post(request,httpConfig.interfaces.queryTrans,hideLoading,true)
		.then((response)=>{
			resolve(response);
		})
	})
}
/**
 * 发送验证码
 */
export const sendSms = (mobile,hideLoading) =>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.mobile=mobile;
		httpUtils.postParams(request,httpConfig.interfaces.sendSms,hideLoading,true)
		.then((response)=>{
			resolve(response);
		}).catch(e=>{
			reject(e);
		})
	})
}

/**
 * 更新会员信息
 */
export const updateCustInfo = (custCode,custName,photo,mobile,smCode,hideLoading) =>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.custCode=custCode;
		if(custName)
		request.custName=custName;
		if(photo)
		request.photo=photo;
		if(mobile){
			request.mobile=mobile;
			request.smCode=smCode;
		}

		httpUtils.post(request,httpConfig.interfaces.updateCustInfo,hideLoading,true)
		.then((response)=>{
			resolve(response);
		}).catch(e=>{
			reject(e);
		})
	})
}

/**
 * 查询会员信息
 */
export const queryCust = (custCode,grpCode,hideLoading) =>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.custCode=custCode;
		request.grpCode=grpCode;
		request.queryType=2;
		httpUtils.post(request,httpConfig.interfaces.queryCust,hideLoading,true)
		.then((response)=>{
			resolve(response);
		}).catch(e=>{
			reject(e);
		})
	})
}

/**
 * 上传文件至OSS
 */
export const uploadFileToOss = (filePath, name, username, password, hideLoading) => {
    return new Promise((resolve, reject) => {
        httpUtils.postFile(filePath, name, username, password, hideLoading)
            .then((response) => {
                resolve(response);
            }).catch((reason) => reject(reason));
    })
}

/**
 * 查询积分记录
 */
export const queryPoints = (pageNo,grpCode,hideLoading) =>{
	return new Promise((resolve,reject)=>{
		let request={};
		request.pageNo=pageNo;
		request.pageSize=50;
		request.grpCode=grpCode;
		httpUtils.getParams(request,httpConfig.interfaces.queryPoints,hideLoading,true)
		.then((response)=>{
			resolve(response);
		}).catch(e=>{
			reject(e);
		})
	})
}


/**
 * 买卡
 */
export const buyCard = (merchatId, txnAmt, merchantTxnNo,payerRealID,hideLoading, hideError) => {
	return new Promise((resolve, inject) => {
		let request = {};
		request.MerchantID = '100110000046319';
		request.TxnType = '24';
		request.MerchantTxnNo = merchantTxnNo;
		// request.QRCode = qrcode;
		request.TxnAmt = txnAmt;
		request.CurrencyCode = httpConfig.currencyCode;
		request.PartnerID = httpConfig.partnerId;
		request.PayerRealID = payerRealID;
		request.ChannelID = '2';
		request.AppID = 'wx9cb20738818464fa';
		httpUtils.commonPost(signUtils.sign(request), 'https://ss-platform01.shijicloud.com/api-v16', hideLoading, hideError)
			.then((response) => {
				console.log(response)
				resolve(response);
			}).catch(e => {
			console.log(e);
			inject(e);
		})
	})

}



