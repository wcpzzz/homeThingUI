const isTest=true //true测试环境 false生产环境
//测试地址
const testUrl='http://localhost:8088/'
//生产地址
const releaseUrl='https://ss-pm.shijicloud.com/vip-api'
//请求地址
const requestUrl=isTest?testUrl:releaseUrl


const interfaces={
	//先统一配置地址，注意接口名格式规范

	location: 'location',//getParams
	createLocation: 'location/create',
	pageLocation:'location/page',
	findOneLocation:'location/findOne',
	findListLocation:'location/findList',
	updateByIdLocation:'location/updateById',
	deleteLocation:'location/delete',//getParams

	thing:'thing',//getParams
	createThing: 'thing/create',
	pageThing:'thing/page',
	findOneThing:'thing/findOne',
	findListThing:'thing/findList',
	updateByIdThing:'thing/updateById',
	deleteThing:'thing/delete',//getParams

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
	deleteThingandtype:'thingandtype/delete',//getParams

	thingtype:'thingtype',//getParams
	createThingtype: 'thingtype/create',
	pageThingtype:'thingtype/page',
	findOneThingtype:'thingtype/findOne',
	findListThingtype:'thingtype/findList',
	updateByIdThingtype:'thingtype/updateById',
	deleteThingtype:'thingtype/delete',//getParams

	user:'user',//getParams
	createUser: 'user/create',
	pageUser:'user/page',
	findOneUser:'user/findOne',
	findListUser:'user/findList',
	updateByIdUser:'user/updateById',
	deleteUser:'user/delete',//getParams

}
const interfacesnew = {
	login: 'user/login',
	findListThingWithThingtypeWithUserWithLocation: 'thing/findListThingWithThingtypeWithUserWithLocation',
	findListWithUser:'thing/findListWithUser',
};
export default{
	interfacesnew,
	interfaces,
	testUrl,
	releaseUrl,
	requestUrl
}
