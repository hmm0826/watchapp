import Vue from 'vue'
import App from './App'
import UserInfoUtils from '@/common/user-info-utils.js'
import Api from '@/common/api.js'
import LoginUtils from '@/common/login-utils.js'
import MessageUtils from '@/common/message-utils.js'
import DictUtils from '@/common/dict-utils.js'
import AV from '@/common/3d-parts/av-weapp-min.js'
import WebSocketUtils from '@/common/websocket-utils.js'

Api.defaultSetting.baseUrl='http://localhost:8080'
WebSocketUtils.webSocketSetting.domain = 'wss://emoker.utools.club/websocket/';
Vue.config.productionTip = false
Vue.prototype.$userInfo=UserInfoUtils
App.mpType = 'app'
Vue.prototype.$api=Api
Vue.prototype.$login=LoginUtils
Vue.prototype.$msg = MessageUtils
Vue.prototype.$dict = DictUtils
Vue.prototype.$av = AV
Vue.prototype.$websocket = WebSocketUtils
const app = new Vue({
    ...App
})
app.$mount()

AV.init({
  appId: 'fdbb4ArYHbm8MJ3a08N8qLEf-gzGzoHsz',
  appKey: '68E4Kjo8w7lVoMwynry6tKn0',
  // 请将 xxx.example.com 替换为你的应用绑定的自定义 API 域名
  serverURLs: "https://fdbb4ary.lc-cn-n1-shared.com",
});