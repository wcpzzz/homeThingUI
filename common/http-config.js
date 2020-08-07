const isTest=true //true测试环境 false生产环境
const version='1.1.0'
const dateTimeformat='yyyy/MM/dd'
const dateformat='yyyy/MM/dd'
const dateSelectFormat='yyyy-MM-dd'
const dateApiFormat='yyyy/MM/dd'
//用日期去查询默认初始时间
const defaultStartDate='2016-01-01';//舍弃
//测试地址
const testUrl='http://localhost:8088/'

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
	//先统一配置地址，注意接口名格式规范

	location: 'location',//getParams
	createLocation: 'location/create',
	pageLocation:'location/page',
	findOneLocation:'location/findOne',
	findListLocation:'location/findList',
	updateByIdLocation:'location/updateById',
	deleteLocation:'location/delete',//getParams

	thing:'thing',//get
	createThing: 'thing/create',
	pageThing:'thing/page',
	findOneThing:'thing/findOne',
	findListThing:'thing/findList',
	updateByIdThing:'thing/updateById',
	deleteThing:'thing/delete',//get

	thingandlocation:'thingandlocation',//getParams
	createThingandlocation: 'thingandlocation/create',
	pageThingandlocation:'thingandlocation/page',
	findOneThingandlocation:'thingandlocation/findOne',
	findListThingandlocation:'thingandlocation/findList',
	updateByIdThingandlocation:'thingandlocation/updateById',
	deleteThingandlocation:'thingandlocation/delete',//getParams

	thingandtype:'thingandtype',//getParams
	createThingandtype: 'thingandtype/create',
	pageThingandtype:'thingandtype/page',
	findOneThingandtype:'thingandtype/findOne',
	findListThingandtype:'thingandtype/findList',
	updateByIdThingandtype:'thingandtype/updateById',
	deleteThingandtype:'thingandtype/delete',

	thingtype:'thingtype',//getParams
	createThingtype: 'thingtype/create',
	pageThingtype:'thingtype/page',
	findOneThingtype:'thingtype/findOne',
	findListThingtype:'thingtype/findList',
	updateByIdThingtype:'thingtype/updateById',
	deleteThingtype:'thingtype/delete',//getParams

	user2:'user2',//getParams
	createUser2: 'user2/create',
	pageUser2:'user2/page',
	findOneUser2:'user2/findOne',
	findListUser2:'user2/findList',
	updateByIdUser2:'user2/updateById',
	deleteUser2:'user2/delete',//getParams
}
const interfacesnew={
	login: 'user2/login'
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
	interfacesnew,
	cantGetCard,
	unRegist,
	version,
	ossDownloadUrl,
	requestPayUrl,
	partnerId,
	currencyCode,
	requestPayKey

}
