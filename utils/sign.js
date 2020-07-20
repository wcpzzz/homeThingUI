import jsonSha256 from '@/utils/jsonSha256.js';
import httpArgs from '@/common/http-config.js';
const dateTimeformat='yyyy/MM/dd hh:mm:ss'

const sign= (request)=>{


	request.Key=httpArgs.requestPayKey;
	request.TxnReqTime=new Date().Format(dateTimeformat);
	request=jsonSha256.objKeySort(request);

	let sign="";
	for (let item in request) {
		// 不算数组
		if (!(request[item] instanceof Array))
		sign=sign+item+'='+request[item]+'&';
	}


	console.log('签名bufff'+sign.slice(0,sign.length-1))
	request.Sign=jsonSha256.SHA256(sign.slice(0,sign.length-1));
	delete request.Key;
	return request;
  }

const reSign=(response)=>{
	if(!response.Sign) return false;
	response.Key=httpArgs.requestPayKey;
	let calculateSign="";
	response=jsonSha256.objKeySort(response);
	for (let item in response) {
		if (!(response[item] instanceof Array) && item!=='Sign')
		{
			if(response[item] instanceof Object){
				response[item]=JSON.stringify(response[item])
			}
			calculateSign=calculateSign+item+'='+response[item]+'&';
		}
	}
	calculateSign=jsonSha256.SHA256(calculateSign.slice(0,calculateSign.length-1));
	if(calculateSign==response.Sign)
		return true;
	else return false;
}


export default{
	sign,
	reSign
}
