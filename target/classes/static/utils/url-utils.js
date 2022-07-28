+(function (w) {
    var UrlUtils = function(){};
    // var handles = {};
    UrlUtils.prototype= {
        getParameters: function(){
            var url = location.search;   //获取url中"?"符后的字串
            var requestParam = new Object();
            if (url.indexOf("?") != -1)
            {
                var str = url.substr(1);
                strs = str.split("&");
                for (var i = 0; i < strs.length; i++)
                {
                    requestParam[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1] || "");
                }
            }
            return requestParam;
        },
        hasParameter: function(key){
            return this.getParameters().hasOwnProperty(key);
        },
    }
    w.urlUtils = new UrlUtils();
})(window);