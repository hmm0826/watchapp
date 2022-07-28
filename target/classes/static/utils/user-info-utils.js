+(function(w){
    //私有方法，外面将访问不到
    var  LOGIN_USER_INFO = 'LOGIN_USER_INFO';
	var UserInfoUtils = function(){};
    UserInfoUtils.prototype.getUserInfo = function(){
        console.log('UserInfoUtils getUserInfo...');
		var userInfoStr = sessionStorage[LOGIN_USER_INFO];
		if (!userInfoStr) {
            return null;
		}
		return JSON.parse(userInfoStr)
    }
    UserInfoUtils.prototype.setUserInfo = function(userInfo){
        console.log('UserInfoUtils setUserInfo...',userInfo);
        if (!userInfo) {
            console.log('setUserInfo...userInfo is null');
            return ;
        }
        sessionStorage[LOGIN_USER_INFO] = JSON.stringify(userInfo)
    }
    UserInfoUtils.prototype.removeUserInfo = function(){
        sessionStorage[LOGIN_USER_INFO] = "";
    }
    UserInfoUtils.prototype.getAccessToken = function(){
        var userInfo = this.getUserInfo()
        if (!userInfo) {
            return "";
        }
        return userInfo.accessToken;
    }
    //返回构造函数的实例化对象
    w.userInfoUtils = new UserInfoUtils;
})(window);