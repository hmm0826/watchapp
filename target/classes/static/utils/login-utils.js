// 立刻执行函数
+(function (w) {
    //私有方法，外面将访问不到
    var clientOption = {
        clientId: 'backend',
        clientSecret: '123456'
    }
    var LoginUtils = function () {};
    LoginUtils.prototype.login = function (option) {
        console.log('LoginUtils login...', option, option.username, option.password);
        // 使用layui内置的jq和layer模块
        layui.use(['jquery', 'layer'], function () {
            var layer = layui.layer;
            var $ = layui.$;
            if (!option || !option.username || !option.password) {
                layer.msg("参数缺失", {anim: 5});
            }
            var loading = layer.load(2);
            var layerMsg = '请求处理完毕';
            // code...
            $.ajax({
                url: '/open/user/passwordLogin',
                data: {
                    'username': option.username,
                    'password': option.password,
                    'clientId': clientOption.clientId,
                    'clientSecret': clientOption.clientSecret
                },
                dataType: "JSON",
                success: function (res) {
                    console.log('LoginUtils login success...', res)
                    if (res.code != 200) {
                        layerMsg = res.msg || layerMsg;
                        return 0;
                    }
                    layerMsg = "登录成功";
                    w.userInfoUtils.setUserInfo(res.data);
                    if (option.success && typeof option.success == 'function') {
                        option.success(res);
                    }
                },
                error: function (res) {
                    layerMsg = "请求异常";
                    if (option.error && typeof option.error == 'function') {
                        option.error(res);
                    }
                },
                complete: function (res) {
                    layer.close(loading)
                    layer.msg(layerMsg, {anim: 5});
                    if (option.complete && typeof option.complete == 'function') {
                        option.complete(res);
                    }
                }
            });
        });
    }

    //返回构造函数的实例化对象
    w.loginUtils = new LoginUtils;
})(window);
