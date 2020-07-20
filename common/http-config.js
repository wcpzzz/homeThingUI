const isTest=true //true测试环境 false生产环境
const version='1.1.0'
const dateTimeformat='yyyy/MM/dd'
const dateformat='yyyy/MM/dd'
const dateSelectFormat='yyyy-MM-dd'
const dateApiFormat='yyyy/MM/dd'
//用日期去查询默认初始时间
const defaultStartDate='2016-01-01';//舍弃
//测试地址
const testUrl='http://192.168.0.219:9012/vip-api'

// const testUrl='https://test.chenghcloud.cn/vip-api'

// const testUrl='http://192.168.0.65:9012/vip-api'
// const testUrl='https://192.168.0.219:9000/vip-api'

//生产地址
const releaseUrl='https://ss-pm.shijicloud.com/vip-api'
//请求地址
const requestUrl=isTest?testUrl:releaseUrl
//接口名

//测试key
const testKey='1wcyz5wmr6rq23c353xe'
//生产Key
const releaseKey='nn5nqn2g6tosx68k8gsm'
//请求key
const requestKey=isTest?testKey:releaseKey


//oss地址
const ossTestUrl='https://ss-platform-test.shijicloud.com/upload-server/server'
const ossReleaseUrl='https://ss-service.shijicloud.com/upload-server/server'
const ossUrl=isTest?ossTestUrl:ossReleaseUrl
const ossAC_headPhoto_test='headphototest'
const ossAC_headPhoto_release='headphoto'
const ossAC_brandLogo_test='brandlogotest'
const ossAC_brandLogo_release='brandlogo'
const ossPW='888888'
const ossAC_headPhoto=isTest?ossAC_headPhoto_test:ossAC_headPhoto_release
const ossAC_brandLogo=isTest?ossAC_brandLogo_test:ossAC_brandLogo_release
//下载OSS
const ossDownloadTestUrl='https://ss-platform-test.shijicloud.com/mch-entry-server/api?FileName=vip/imgs/brandlogotest/'
const ossDownloadReleaseUrl='https://ss-platform-test.shijicloud.com/mch-entry-server/api?FileName=vip/imgs/brandlogo/'
const ossDownloadUrl=isTest?ossDownloadTestUrl:ossDownloadReleaseUrl

/**
 * 支付参数
 */
//测试地址
const testPayUrl='https://ss-platform-test.shijicloud.com/api-v16'
//生产地址
const releasePayUrl='https://ss-platform01.shijicloud.com/api-v16'
//请求地址
const requestPayUrl=isTest?testPayUrl:releasePayUrl
//测试key
// const testPayKey='1wcyz5wmr6rq23c353xe'
const testPayKey='nn5nqn2g6tosx68k8gsm'
//生产Key
// const releasePayKey='nn5nqn2g6tosx68k8gsm'
const releasePayKey='1wcyz5wmr6rq23c353xe'
//请求key
const requestPayKey=isTest?testPayKey:releasePayKey
const partnerId='1001'
const currencyCode='156'



//错误码
const unRegist='X3';//未注册
const cantGetCard='X4';//不可领取卡

const interfaces={
	login:'/cust/custLogin',
	regist:'/cust/custRegister',
	isReceive:'/cust/isReceive',
	vipQueryCardType:'/card/vipQueryCardType',
	queryCard:'/cust/queryCard',
	receive:'/cust/receive',
	showPayCode:'/cust/showPayCode',
	queryCoupon:'/coupon/vip/list',
	generateCouponToken:'/coupon/generateToken',
	receiveCoupon:'/coupon/receive',
	isReceiveCoupon:'/coupon/isReceive',
	listAllCouponByArgs:'/coupon/listAllByArgs',
	countOfGrp:'/coupon/vip/countOfGrp',
	queryTrans:'/cust/queryTrans',
	sendSms:'/cust/sendSms',
	queryCust:'/cust/queryCust',
	updateCustInfo:'/cust/updateCustInfo',
	queryPoints:'/points/vip/list',
	queryCouponCanUsed:'/coupon/vip/listCanUsed',
	queryCouponCantUsed:'/coupon/vip/listCantUsed',
	queryCouponHashUsed:'/coupon/vip/listHasUsed'
}

export default{
	ossAC_headPhoto,
	ossAC_brandLogo,
	ossPW,
	ossUrl,
	requestKey,
	dateTimeformat,
	dateformat,
	dateSelectFormat,
	dateApiFormat,
	defaultStartDate,
	requestUrl,
	interfaces,
	cantGetCard,
	unRegist,
	version,
	ossDownloadUrl,
	requestPayUrl,
	partnerId,
	currencyCode,
	requestPayKey

}
