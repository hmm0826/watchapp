(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/order/order-repair/order-repair"],{

/***/ 110:
/*!**********************************************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/main.js?{"page":"pages%2Forder%2Forder-repair%2Forder-repair"} ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _orderRepair = _interopRequireDefault(__webpack_require__(/*! ./pages/order/order-repair/order-repair.vue */ 111));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_orderRepair.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 111:
/*!*************************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-repair/order-repair.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order_repair_vue_vue_type_template_id_061e99f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-repair.vue?vue&type=template&id=061e99f6& */ 112);
/* harmony import */ var _order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-repair.vue?vue&type=script&lang=js& */ 114);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _order_repair_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-repair.vue?vue&type=style&index=0&lang=css& */ 116);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 10);






/* normalize component */

var component = Object(_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _order_repair_vue_vue_type_template_id_061e99f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _order_repair_vue_vue_type_template_id_061e99f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-repair/order-repair.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 112:
/*!********************************************************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-repair/order-repair.vue?vue&type=template&id=061e99f6& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_template_id_061e99f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-repair.vue?vue&type=template&id=061e99f6& */ 113);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_template_id_061e99f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_template_id_061e99f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 113:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-repair/order-repair.vue?vue&type=template&id=061e99f6& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 114:
/*!**************************************************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-repair/order-repair.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-repair.vue?vue&type=script&lang=js& */ 115);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 115:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-repair/order-repair.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var orderDetailShop = function orderDetailShop() {return __webpack_require__.e(/*! import() | components/order-detail-shop/order-detail-shop */ "components/order-detail-shop/order-detail-shop").then(__webpack_require__.bind(null, /*! @/components/order-detail-shop/order-detail-shop.vue */ 206));};var customSelect = function customSelect() {return __webpack_require__.e(/*! import() | components/custom-select/custom-select */ "components/custom-select/custom-select").then(__webpack_require__.bind(null, /*! @/components/custom-select/custom-select.vue */ 227));};var sunuiUpimg = function sunuiUpimg() {return Promise.all(/*! import() | components/sunui-upimg/sunui-upimg */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/sunui-upimg/sunui-upimg")]).then(__webpack_require__.bind(null, /*! @/components/sunui-upimg/sunui-upimg.vue */ 234));};var imageText = function imageText() {return __webpack_require__.e(/*! import() | components/image-text/image-text */ "components/image-text/image-text").then(__webpack_require__.bind(null, /*! @/components/image-text/image-text.vue */ 191));};var uploadImage = function uploadImage() {return __webpack_require__.e(/*! import() | components/upload-image/upload-image */ "components/upload-image/upload-image").then(__webpack_require__.bind(null, /*! @/components/upload-image/upload-image.vue */ 241));};var _default =



















































































{
  components: {
    orderDetailShop: orderDetailShop,
    customSelect: customSelect,
    sunuiUpimg: sunuiUpimg,
    imageText: imageText,
    uploadImage: uploadImage },

  data: function data() {
    return {
      order: {
        agreeRepair: 0,
        archiveStatus: 0,
        backItemDesc: 0,
        backItemPhoto: 0,
        beforeRepairPhoto: "http://lc-3uxiAoex.cn-n1.lcfile.com/167ecbad8c1fbeb7365b.jpg",
        caseMaterial: 0,
        claspMaterial: 0,
        createBy: 0,
        createDatetime: "0000-0-0 00:00:00",
        customerId: 0,
        customerName: "-",
        customerPhone: "-",
        customerProfile: "-",
        customerSignature: 0,
        delStatus: 0,
        entrustedMail: "",
        id: 0,
        insure: 0,
        masterId: 0,
        orderName: "维修单",
        orderNo: "0000",
        orderQrCode: "10002",
        orderStep: 0,
        orderStepText: "暂无",
        payPrice: 0,
        positiveItemDesc: 0,
        positiveItemPhoto: 0,
        problemDescription: 0,
        problemPhoto: 0,
        purchaseDate: 0,
        purchasePlace: 0,
        remarks: 0,
        repair: 0,
        repairParts: 0,
        reservationDatetime: "0000-0-0 00:00:00",
        shopId: 0,
        sideItemDesc: 0,
        sideItemPhoto: 0,
        tablehandleButton: 0,
        watchBodyNo: "-",
        watchBrandId: 0,
        watchExterior: 0,
        watchFunction: 0,
        watchMaterial: 0,
        watchModel: 0,
        watchMovement: 0,
        watchSerialNumber: 0,
        watchSerie: 0,
        watchStrapNumber: 0,
        watchbandMaterial: 0 },

      select: {
        insurance_select: [],
        brand_select: [],
        series_select: [],
        model_select: [],
        isrepair_select: [],
        function_select: [],
        movement_category_select: [],
        case_material_select: [],
        strap_material_select: [],
        buckle_material_select: [],
        appearance_select: [],
        repair_parts_select: [],
        table_button_select: [] },

      pickerHeight: 40,
      uploadStyle: 'width:90%;height:auto;padding-left:40rpx;padding-right:40rpx',
      payPrice: '',
      disabled: false };

  },
  onLoad: function onLoad(param) {
    console.log('param', param);
    this.order = JSON.parse(param.order);
    this.initPageData();
  },
  methods: {
    initPageData: function initPageData() {
      console.log('initPageData');
      this.initFormInput();
      this.initFormSelect();
    },
    initFormInput: function initFormInput() {
      console.log('initFormInput');
      this.$refs.orderSelect.defaultText = this.order.orderNo;
      this.$refs.customerName.defaultText = this.order.customerName;
      this.$refs.customerPhone.defaultText = this.order.customerPhone;
      this.$refs.customerShipping.defaultText = this.order.entrustedMail;
      var customerPhoto = [];
      customerPhoto.push(this.order.beforeRepairPhoto);
      this.order.beforeRepairPhoto = customerPhoto;
      this.payPrice = this.order.payPrice;
      this.orderStep = this.order.orderStep;
    },
    initFormSelect: function initFormSelect() {
      console.log('initFormSelect');
      // console.log('initFormSelect......',this.$dict.getSelectors('brand_select'))
      //select option 
      var that = this;
      var select = {
        insurance_select: that.$dict.getSelectors('insurance_select'), //['是', '否'],
        brand_select: that.$dict.getSelectors('brand_select'),
        series_select: that.$dict.getSelectors('series_select'),
        model_select: that.$dict.getSelectors('model_select'),
        isrepair_select: that.$dict.getSelectors('isrepair_select'),
        function_select: that.$dict.getSelectors('function_select'),
        movement_category_select: that.$dict.getSelectors('movement_category_select'),
        case_material_select: that.$dict.getSelectors('case_material_select'),
        strap_material_select: that.$dict.getSelectors('strap_material_select'),
        buckle_material_select: that.$dict.getSelectors('buckle_material_select'),
        appearance_select: that.$dict.getSelectors('appearance_select'),
        repair_parts_select: that.$dict.getSelectors('repair_parts_select'),
        table_button_select: that.$dict.getSelectors('table_button_select') };

      console.log('initFormSelect......', select);
      that.select = select;

    },
    uploadText: function uploadText(e, position) {
      console.log('uploadText', e, position);
      position += 'Desc';
      position == 'problemDesc' ? position += 'ription' : position;
      this.order[position] = e.detail.value;
    },
    uploadImage: function uploadImage(e, position) {
      // console.log('uploadImage', e, position, this.order[position])
      position += 'Photo';
      this.order[position] = e[0];
    },
    orderClickHandle: function orderClickHandle(e) {var _this = this;
      console.log('orderClickHandle', e);
      if (this.disabled) {
        return 0;
      }
      // this.disabled = true;
      var postData = this.getFormData();
      console.log('postData...', postData);
      var pass = this.checkFormData(postData);
      if (!pass) {
        this.disabled = false;
        return 0;
      }
      console.log('check pass...');
      var that = this;
      var orderId = this.order.id;
      that.$login.checkTokenValidity().then(function (res) {
        that.$api.apiPost({
          url: "/api/order/".concat(orderId, "/repair/accept"),
          data: postData }).
        then(function (res) {
          console.log('请求ok！', res);
          that.$msg.showMessage(res.data.msg || "接修成功");
          _this.disabled = false;
          var order = res.data.data;
          that.$websocket.sendData({
            orderId: order.id,
            orderStep: order.orderStep,
            // notifyShopId:order.shopId,
            notifyCustomerId: order.customerId });

          that.toOrderDetail(order.id, order.orderNo, order.orderStep, order.shopId);
        }).catch(function (res) {
          console.log('请求fail！', res);
          that.$msg.showMessage(res.data.msg || "请求失败！");
          _this.disabled = false;
        });
      });
    },
    toOrderDetail: function toOrderDetail(orderId, orderNo, orderStep, shopId) {
      uni.navigateTo({
        url: "/pages/order/order-info/order-info?orderId=".concat(orderId, "&shopId=").concat(shopId, "&orderNo=").concat(orderNo, "&orderStep=").concat(orderStep) });

    },
    checkFormData: function checkFormData(data) {
      console.log('checkFormData...');
      if (!data.customerName) {
        this.$msg.showMessage("客户姓名不能为空");
        return false;
      } else if (!data.customerPhone) {
        this.$msg.showMessage("客户手机号不能为空");
        return false;
      } else if (!RegExp(/^\d{11}$/).test(data.customerPhone)) {
        this.$msg.showMessage("客户手机号不正确");
        return false;
      } else if (data.purchaseTime == "0-01 00:00:00" || data.purchaseTime == "-01 00:00:00") {
        this.$msg.showMessage("购买日期不能为空");
        return false;
      } else if (data.tablehandleButton == "") {
        this.$msg.showMessage("表把按钮情况不能为空");
        return false;
      } else if (!data.positiveItemPhoto || !data.positiveItemDesc) {
        this.$msg.showMessage("正面图片或者正面问题描述不能为空");
        return false;
      } else if (!data.backItemPhoto || !data.backItemDesc) {
        this.$msg.showMessage("背面图片或者背面问题描述不能为空");
        return false;
      } else if (!data.sideItemPhoto || !data.sideItemDesc) {
        this.$msg.showMessage("侧面图片或者侧面问题描述不能为空");
        return false;
      } else if (!data.problemPhoto || !data.problemDescription) {
        this.$msg.showMessage("故障面图片或者故障问题描述不能为空");
        return false;
      } else if (!data.payPrice) {
        this.$msg.showMessage("我的报价不能为空");
        return false;
      } else if (!RegExp(/(^(([1-9]\d*)|([0-9]\d*\.\d?[1-9]{1}))$)/).test(data.payPrice)) {
        this.$msg.showMessage("请输入正确的价格");
        return false;
      }
      return true;
    },
    getFormData: function getFormData() {
      var that = this;
      // get order
      // var order = this.order;
      var order = {};
      // get input value

      order.caseMaterial = this.$refs.case_material_select.defaultValue;
      order.claspMaterial = this.$refs.buckle_material_select.defaultValue;
      order.customerName = this.$refs.customerName.defaultText;
      order.customerPhone = this.$refs.customerPhone.defaultText;
      order.entrustedMail = this.$refs.customerShipping.defaultText;
      order.insure = this.$refs.insurance_select.defaultValue;
      order.purchaseDate = that.$refs.buy_date.defaultDate || that.$refs.buy_date.defaultdate;
      order.purchaseDate = order.purchaseDate + "-01 00:00:00";
      console.log('order.purchaseDate: -------- ' + order.purchaseDate);
      order.purchasePlace = this.$refs.buyPosition.defaultText;
      order.repair = this.$refs.isrepair_select.defaultValue;
      order.repairParts = this.$refs.repair_parts_select.defaultValue;
      order.tablehandleButton = this.$refs.watch_button_input.defaultText;
      order.watchBrandId = this.$refs.brand_select.defaultValue;
      order.watchExterior = this.$refs.appearance_select.defaultValue;
      order.watchFunction = this.$refs.function_select.defaultValue;
      order.watchModel = this.$refs.model_select.defaultText;
      order.watchMovement = this.$refs.movement_category_select.defaultValue;
      order.watchSerie = this.$refs.series_select.defaultValue;
      order.watchbandMaterial = this.$refs.strap_material_select.defaultValue;
      order.beforeRepairPhoto = this.order.beforeRepairPhoto[0];
      order.masterId = this.$userInfo.getUserInfo().id || 0;
      order.orderNo = this.order.orderNo;
      order.id = this.order.id;
      order.backItemDesc = this.order.backItemDesc;
      order.backItemPhoto = this.order.backItemPhoto;
      order.positiveItemDesc = this.order.positiveItemDesc;
      order.positiveItemPhoto = this.order.positiveItemPhoto;
      order.problemDescription = this.order.problemDescription;
      order.problemPhoto = this.order.problemPhoto;
      order.sideItemDesc = this.order.sideItemDesc;
      order.sideItemPhoto = this.order.sideItemPhoto;
      order.payPrice = this.order.payPrice;
      return order;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 116:
/*!**********************************************************************************************************************************!*\
  !*** F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-repair/order-repair.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../../../../../../../0二上/html/hbuilderx/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./order-repair.vue?vue&type=style&index=0&lang=css& */ 117);
/* harmony import */ var _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_0_html_hbuilderx_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_order_repair_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 117:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/爱普京/期末项目/前端代码/6/全部/watchapp/8.2/watch-app8.2/pages/order/order-repair/order-repair.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[110,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/order/order-repair/order-repair.js.map