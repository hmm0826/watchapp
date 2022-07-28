import LoginUtils from '@/common/login-utils.js'
import UserInfoUtils from '@/common/user-info-utils.js'

const REQUEST_METHOD = {
	GET: 'GET',
	POST: 'POST',
	PUT: 'PUT',
	DELETE: 'DELETE',
}

var defaultSetting = {
	baseUrl: '',
	url: '',
	data: {},
	method: REQUEST_METHOD.GET,
	header: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	dataType: 'json',
	isLocalResult: true,
	isApiRequest: false
}

function initOptions(options) {
	if (options) {
		options.baseUrl = options.baseUrl || defaultSetting.baseUrl;
		options.url = (options.baseUrl ? options.baseUrl : '') 
			+ (options.url ? options.url : defaultSetting.url);
		options.method = options.method || defaultSetting.method;
		options.header = options.header || defaultSetting.header;
		options.dataType = options.dataType || defaultSetting.dataType;
		options.data = options.data || defaultSetting.data;
		options.isLocalResult = (typeof options.isLocalResult != 'undefined') ? options.isLocalResult : defaultSetting.isLocalResult;
		options.isApiRequest = (typeof options.isApiRequest != 'undefined') ? options.isApiRequest : defaultSetting.isApiRequest;
		if (options.isApiRequest) {
			options.data['access_token'] = UserInfoUtils.getAccessToken()
		} else {
			delete options.data['access_token']
		}
	}
	return options;
}

function request(options) {
	options = initOptions(options)
	console.log(options)
	return sendRequest(options)
}

function sendRequest(options) {
	return new Promise(async (resolve, reject) => {
		var [error, res] = await uni.request(options)
		if ((options.isLocalResult && checkLocalResponseSuccess(res))
			|| (!options.isLocalResult && checkResponseSuccess(res))) {
			console.log('request success')
			resolve(res)
		} else {
			console.log('request success')
			reject(res)
		}
	})
}

function get(options) {
	console.log(options)
	return request(options);
}

function post(options) {
	options.method = REQUEST_METHOD.POST
	return request(options);
}

function apiGet(options) {
	options.isApiRequest = true
	return get(options)
}

function apiPost(options) {
	options.isApiRequest = true
	return post(options)
	
}

function checkLocalResponseSuccess(res) {
	return checkResponseSuccess(res) && res.data && res.data.code == 200
}

function checkResponseSuccess(res) {
	return res && res.statusCode == 200
}

var Api = {
	request,
	get,
	post,
	apiGet,
	apiPost,
	defaultSetting,
	checkLocalResponseSuccess,
	checkResponseSuccess
}

module.exports = Api