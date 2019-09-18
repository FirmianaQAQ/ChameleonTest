var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([30],{

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/demo-com/demo-com.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DemoCom = function () {
  function DemoCom() {
    _classCallCheck(this, DemoCom);

    this.props = {
      title: {
        type: String,
        default: ''
      },
      imageSrc: {
        type: String,
        default: ''
      }
    };
    this.data = {};
    this.computed = {};
    this.watch = {};
    this.methods = {};
  }

  _createClass(DemoCom, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {}
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return DemoCom;
}();

exports.default = new DemoCom();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_cml-extract-css-webpack-plugin@1.0.3@cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/demo-com/demo-com.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/demo-com/demo-com.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_cml-extract-css-webpack-plugin@1.0.3@cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/demo-com/demo-com.cml");
var __cml__script = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/demo-com/demo-com.cml");


/***/ })

},["./src/components/demo-com/demo-com.cml"]);