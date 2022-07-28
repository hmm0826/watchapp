(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/order-info/order-info"],{

/***/ 86:
/*!******************************************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/main.js?{"page":"pages%2Forder%2Forder-info%2Forder-info"} ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _orderInfo = _interopRequireDefault(__webpack_require__(/*! ./pages/order/order-info/order-info.vue */ 87));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_orderInfo.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 87:
/*!*********************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-info/order-info.vue ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_info_vue_vue_type_template_id_db9e70d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-info.vue?vue&type=template&id=db9e70d4& */ 88);
/* harmony import */ var _order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-info.vue?vue&type=script&lang=js& */ 90);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-info.vue?vue&type=style&index=0&lang=css& */ 92);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 10);






/* normalize component */

var component = Object(_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_info_vue_vue_type_template_id_db9e70d4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_info_vue_vue_type_template_id_db9e70d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-info/order-info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/*!****************************************************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-info/order-info.vue?vue&type=template&id=db9e70d4& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_template_id_db9e70d4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-info.vue?vue&type=template&id=db9e70d4& */ 89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_template_id_db9e70d4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_template_id_db9e70d4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 89:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-info/order-info.vue?vue&type=template&id=db9e70d4& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 90:
/*!**********************************************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-info/order-info.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-info.vue?vue&type=script&lang=js& */ 91);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 91:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-info/order-info.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniSteps = function uniSteps() {return __webpack_require__.e(/*! import() | components/uni-steps/uni-steps */ "components/uni-steps/uni-steps").then(__webpack_require__.bind(null, /*! @/components/uni-steps/uni-steps.vue */ 184));};var imageText = function imageText() {return __webpack_require__.e(/*! import() | components/image-text/image-text */ "components/image-text/image-text").then(__webpack_require__.bind(null, /*! @/components/image-text/image-text.vue */ 191));};var tkiQrcode = function tkiQrcode() {return Promise.all(/*! import() | components/tki-qrcode/tki-qrcode */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/tki-qrcode/tki-qrcode")]).then(__webpack_require__.bind(null, /*! @/components/tki-qrcode/tki-qrcode.vue */ 198));};var _default =
























































































{
  components: {
    uniSteps: uniSteps,
    imageText: imageText,
    tkiQrcode: tkiQrcode },

  data: function data() {
    return {
      shop: {
        id: 0,
        name: '钟表维修店',
        locationText: '未知' },

      order: {
        orderId: 1,
        orderNo: '订单号',
        orderStep: 0 },


      orderStepText: '请联系店员',
      timelines: [],
      showCtrl: {
        default: true,
        appointment: false,
        orderDetail: true,
        orderStep: true,
        appointmentAccept: false,
        appointmentCancel: false,
        appointmentDispose: false,
        orderQR: false,
        repairComplete: false,
        navigateHome: false,
        scanCodeTakeWatch: false,
        submitRating: false },

      timelinesData: [{
        "orderStepText": "接受预约",
        "createDate": "2020-01-10 16:40:22" },
      {
        "orderStepText": "预约",
        "createDate": "2019-11-28 10:46:23" }],

      QR: {
        defaultVal: '没有二维码', // 要生成的二维码值
        size: 120, // 二维码大小
        unit: 'rpx', // 单位
        background: '#ffffff', // 背景色
        foreground: '#000000', // 前景色
        pdground: '#000000', // 角标色
        icon: '', // 二维码图标
        iconsize: 40, // 二维码图标大小
        lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
        onval: true, // val值变化时自动重新生成二维码
        loadMake: true, // 组件加载完成后自动生成二维码
        src: '' // 二维码生成后的图片地址或base64

        // disabled:false,
        // ifShow: true,
        // masterPhone: '',
      } };
  },
  onLoad: function onLoad(param) {
    console.log('param', param);
    this.order.orderNo = param.orderNo;
    this.order.id = param.orderId;
    this.order.orderStep = param.orderStep;
    this.shop.id = param.shopId;
    this.initPageData();
  },
  onShow: function onShow() {
    this.initPageData();
    this.$websocket.addHandle("orderinfo", this.orderSocketHandle);
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.initPageData();
    setTimeout(function () {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  methods: {
    // 初始化页面数据
    initPageData: function initPageData() {
      console.log('initPageData');
      var that = this;
      that.loadShopData();
      that.$login.checkTokenValidity().
      then(function (res) {
        that.loadOrderInfo();
        that.loadOrderSteps();
      });
    },
    // 初始化页面可展示的元素
    initPageShow: function initPageShow() {
      console.log('initPageShow');
      this.hideActionBtn();
      var isMaster = this.$userInfo.isMasterOrShopOwner();
      var order = this.order;
      var showCtrl = this.showCtrl;
      if (isMaster & order.orderStep <= 2) {
        this.showAppointmentForm();
      } else {
        this.showDefaultForm();
      }
      if (isMaster && order.orderStep == 6) {
        showCtrl.repairComplete = true;
      }
      if (isMaster && order.orderStep == 7) {
        showCtrl.scanCodeTakeWatch = true;
      }
      if (!isMaster && order.orderStep == 8) {
        showCtrl.submitRating = true;
      }
      this.showCtrl = showCtrl;
      // this.showAppointmentForm()
    },
    // 初始化默认表单的展示
    showDefaultForm: function showDefaultForm() {
      console.log('showDefaultForm');
      var showCtrl = this.showCtrl;
      var isMaster = this.$userInfo.isMasterOrShopOwner();
      var order = this.order;
      showCtrl.default = true;
      showCtrl.appointment = false;
      showCtrl.appointmentAccept = false;
      showCtrl.appointmentCancel = false;
      showCtrl.appointmentDispose = false;
      if (!isMaster & order.orderStep <= 2) {
        showCtrl.appointmentCancel = true;
      }
      if (!isMaster & (order.orderStep == 7 || order.orderStep == 2)) {
        showCtrl.orderQR = true;
      }

    },
    // 初始化预约表单的展示
    showAppointmentForm: function showAppointmentForm() {
      console.log('showAppointmentForm...');
      var showCtrl = this.showCtrl;
      var isMaster = this.$userInfo.isMasterOrShopOwner();
      var order = this.order;
      showCtrl.default = false;
      showCtrl.appointment = true;
      showCtrl.appointmentAccept = false;
      showCtrl.appointmentCancel = false;
      showCtrl.appointmentDispose = false;
      if (isMaster & order.orderStep == 1) {
        showCtrl.appointmentAccept = true;
      }
      if (isMaster & order.orderStep == 2) {
        showCtrl.appointmentDispose = true;
      }
      showCtrl.appointmentCancel = false;
      this.showCtrl = showCtrl;
    },
    // 隐藏可操作的按钮
    hideActionBtn: function hideActionBtn() {
      var showCtrl = this.showCtrl;
      showCtrl.appointmentAccept = false;
      showCtrl.appointmentCancel = false;
      showCtrl.appointmentDispose = false;
      showCtrl.repairComplete = false;
      showCtrl.navigateHome = false;
      showCtrl.orderQR = false;
      showCtrl.scanCodeTakeWatch = false;
      this.showCtrl = showCtrl;
    },
    loadShopData: function loadShopData(shopId) {
      console.log('loadShopData');
      var that = this;
      // boolean
      shopId = shopId || that.shop.id;
      that.$api.get({
        url: "/open/shop/".concat(shopId) }).

      then(function (res) {
        console.log('成功', res);
        that.shop = res.data.data;
      }).
      catch(function (res) {
        console.log('失败');
      });
    },
    // 初始化订单信息
    loadOrderInfo: function loadOrderInfo(orderId) {
      console.log('loadOrderInfo');
      var that = this;
      orderId = orderId || that.order.id;
      this.$api.apiGet({
        url: "/api/order/".concat(orderId) }).

      then(function (res) {
        // that.$msg.showMessage("请求ok！", res)
        console.log('请求ok！', res, that.$dict.getValue('order_status', res.data.data.orderStep));
        res.data.data.watchBrand = that.$dict.getSelector('brand_select', res.data.data.watchBrandId);
        that.order = res.data.data;
        that.orderStepText = that.$dict.getValue('order_status', res.data.data.orderStep);
        // 成功加载订单数据后，根据最新数据初始化页面显示
        that.initPageShow();
      }).
      catch(function (res) {
        // that.$msg.showMessage(res.data.msg || "请求失败！")
        that.showCtrl.orderDetail = false;
      });
    },
    // 初始化订单进度
    loadOrderSteps: function loadOrderSteps(orderId) {
      console.log('loadOrderSteps');
      var that = this;
      orderId = orderId || that.order.id;
      this.$api.apiGet({
        url: "/api/order/".concat(orderId, "/steps") }).

      then(function (res) {
        console.log('steps请求ok！', res);
        if (!res.data.data || res.data.data.length == 0) {
          return 0;
        }
        // that.orderStepText = res.data.data[0].orderStepText;
        that.timelines = res.data.data;
      }).
      catch(function (res) {
        that.$msg.showMessage(res.data.msg || "请求失败！");
      });
    },
    // 查看订单详情表单
    getOrderDetail: function getOrderDetail() {
      console.log('getOrderDetail');
      var that = this;
      var order = this.order;
      var orderInfo = JSON.stringify(order);
      var shopInfo = JSON.stringify(this.shop);
      that.$login.checkTokenValidity().
      then(function () {
        uni.navigateTo({
          url: "../order-detail-info/order-detail-info?order=".concat(orderInfo, "&shop=").concat(shopInfo) });

      }).
      catch(function (res) {
        that.$msg.showMessage(res.data.msg || "暂时不能为你打开详情");
      });
    },
    // 二维码回调事件
    qrR: function qrR(res) {
      var QR = this.QR;
      QR.src = res;
      this.QR = QR;
    },
    // 二维码回调事件
    qrcodeDone: function qrcodeDone() {
      this.$refs.qrcode._makeCode();
    },
    // 扫码事件
    scanClickHandle: function scanClickHandle(e) {
      console.log('scanClickHandle...');
      var that = this;
      var isMaster = this.$userInfo.isMasterOrShopOwner();
      if (!isMaster) {
        return 0;
      }
      // 允许从相机和相册扫码
      uni.scanCode({
        success: function success(res) {
          // console.log('条码类型：' + res.scanType);
          // console.log('条码内容：' + res.result);
          var code = res.result;
          that.$msg.showLoading("正在查询订单...");
          that.findOrderByCode(code);
        } });

    },
    // 扫码事件-获取相关订单
    findOrderByCode: function findOrderByCode(code) {
      var that = this;
      that.$login.checkTokenValidity().then(function (res) {
        that.$api.apiGet({
          url: "/api/order/code/".concat(code) }).
        then(function (res) {
          // that.$msg.showMessage("请求ok！", res)
          console.log('findOrderByCode请求ok！', res);
          that.$msg.hideLoading();
          var order = res.data.data;
          if (1 == order.orderQrCodeScene && 2 == order.orderStep) {
            that.toOrderPepair(res.data.data);
          } else if (2 == order.orderQrCodeScene && 7 == order.orderStep) {
            that.takeWatch(order);
          }
        }).catch(function (res) {
          that.$msg.showMessage("请求失败！" + res.data.msg);
        });
      });
    },
    // 扫码事件-确认取表逻辑
    takeWatch: function takeWatch(order) {
      console.log('takeWatch....', order);
      if (!order) {
        return 0;
      }
      // let orderNo = order.orderNo;
      // let watchBodyNo = order.watchBodyNo;
      // let customerPhone = order.customerPhone;
      var content = "\u8BA2\u5355\u7F16\u53F7\uFF1A".concat(order.orderNo);
      if (order.customerPhone) {
        content += "\n\u5BA2\u6237\u624B\u673A\uFF1A".concat(order.customerPhone);
      }
      if (order.watchBodyNo) {
        content += "\n\u8868\u8EAB\u53F7\uFF1A".concat(order.watchBodyNo);
      }
      var that = this;
      uni.showModal({
        title: '确认取表?',
        content: content,
        success: function success(res) {
          if (!res.confirm) {
            return 0;
          }
          that.takeWatchRequest(order.id);
        } });

    },
    // 扫码事件-确认取表请求
    takeWatchRequest: function takeWatchRequest(orderId) {
      var that = this;
      that.$msg.showLoading();
      that.$login.checkTokenValidity().then(function (res) {
        that.$api.apiPost({
          url: "/api/order/".concat(orderId, "/takeWacth") }).
        then(function (res) {
          // that.$msg.showMessage("请求ok！", res)
          console.log('takeWatchRequest请求ok！', res);
          that.$msg.hideLoading();
          that.initPageData();
          that.sendSocketMsg(order.id, order.orderStep, 0, order.customerId);
        }).catch(function (res) {
          that.$msg.showMessage("请求失败！" + res.data.msg);
        });
      });
    },
    // 扫码事件-跳转接修页面
    toOrderPepair: function toOrderPepair(order) {
      order = JSON.stringify(order);
      uni.navigateTo({
        url: "/pages/order/order-repair/order-repair?order=".concat(order) });

    },
    // 接受预约
    acceptAppointment: function acceptAppointment(e) {
      console.log('acceptAppointment...');
      var orderId = this.order.id;
      var that = this;
      that.$login.checkTokenValidity().then(function (res) {
        that.$api.apiPost({
          url: "/api/order/".concat(orderId, "/appointment/accept") }).
        then(function (res) {
          console.log('acceptAppointment请求ok！', res);
          that.$msg.hideLoading();
          that.hideActionBtn();
          that.initPageData();
          that.sendSocketMsg(order.id, order.orderStep, 0, order.customerId);
        }).catch(function (res) {
          that.$msg.showMessage("请求失败！" + res.data.msg);
        });
      });
    },
    // 拒绝预约
    refuseAppointment: function refuseAppointment(e) {
      var orderId = this.order.id;
      var that = this;
      that.$login.checkTokenValidity().then(function (res) {
        that.$api.apiPost({
          url: "/api/order/".concat(orderId, "/appointment/refuse") }).
        then(function (res) {
          console.log('refuseAppointment请求ok！', res);
          that.$msg.hideLoading();
          that.hideActionBtn();
          that.initPageData();
          that.sendSocketMsg(order.id, order.orderStep, 0, order.customerId);
        }).catch(function (res) {
          that.$msg.showMessage("请求失败！" + res.data.msg);
        });
      });
    },
    // 取消预约
    cancelAppointment: function cancelAppointment(e) {
      var orderId = this.order.id;
      var that = this;
      that.$login.checkTokenValidity().then(function (res) {
        that.$api.apiPost({
          url: "/api/order/".concat(orderId, "/appointment/cancel") }).
        then(function (res) {
          console.log('cancelAppointment请求ok！', res);
          that.$msg.hideLoading();
          that.hideActionBtn();
          that.initPageData();
          that.sendSocketMsg(order.id, order.orderStep, order.shopId, order.customerId);
        }).catch(function (res) {
          that.$msg.showMessage("请求失败！" + res.data.msg);
        });
      });
    },
    // 维修完成
    completeRepair: function completeRepair(e) {
      console.log('completeRepair...', e);
      var shopName = this.shop.name;
      var locationText = this.shop.locationText;
      var orderId = this.order.id;
      var path = '/pages/order/order-complete/order-complete';
      path += "?orderId=".concat(orderId, "&shopName=").concat(shopName, "&locationText=").concat(locationText);
      uni.showModal({
        title: '是否维修完成？',
        success: function success(res) {
          if (res.confirm) {
            uni.navigateTo({
              url: path });

          }
        } });


    },
    submitRatingHandle: function submitRatingHandle() {
      var shopId = this.shop.id;
      var orderId = this.order.id;
      uni.navigateTo({
        url: "/pages/order/order-rating/order-rating?shopId=".concat(shopId, "&orderId=").concat(orderId) });

    },
    sendSocketMsg: function sendSocketMsg(orderId, orderStep, notifyShopId, notifyCustomerId) {
      console.log('sendSocketMsg');
      if (!notifyShopId && !notifyCustomerId) {
        console.log('sendSocketMsg... parameter miss...');
        return 0;
      }
      var data = {
        orderId: orderId,
        orderStep: orderStep,
        notifyShopId: notifyShopId,
        notifyCustomerId: notifyCustomerId };

      var isMaster = this.$userInfo.isMasterOrShopOwner();
      if (notifyShopId && !isMaster) {
        delete data.notifyCustomerId;
      } else if (notifyCustomerId && isMaster) {
        delete data.notifyShopId;
      }
      this.$websocket.sendData(data);
    },
    orderSocketHandle: function orderSocketHandle(res) {
      console.log('orderSocketHandle');
      this.initPageData();
    }
    /* initPageData() {
      	console.log('getOrderDetail')
      },
      loadShopData(shopId) {
      	console.log('getOrderDetail')
      },
      loadOrderInfo(orderId) {
      	console.log('getOrderDetail')
      },
      loadOrderSteps(orderId) {
      	console.log('getOrderDetail')
      },
      getOrderDetail() {
      	console.log('getOrderDetail')
      }, */ } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 92:
/*!******************************************************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-info/order-info.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-info.vue?vue&type=style&index=0&lang=css& */ 93);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 93:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-info/order-info.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[86,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/order-info/order-info.js.map