var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([3],{

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Index = function () {
  function Index() {
    _classCallCheck(this, Index);

    this.data = {
      message: "Hello Chameleon!",
      array: [{
        city: "北京"
      }, {
        city: "上海"
      }, {
        city: "广州"
      }],
      showlist: true
    };
    this.computed = {
      message2: function message2() {
        return "computed" + this.message;
      }
    };
    this.watch = {
      showlist: function showlist(newVal, oldVal) {
        console.log("showlist changed:" + newVal);
      }
    };
    this.methods = {
      changeShow: function changeShow() {
        this.showlist = !this.showlist;
      }
    };
  }

  _createClass(Index, [{
    key: "created",
    value: function created() {
      console.log("生命周期");
    }
  }]);

  return Index;
}();

exports.default = new Index();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_cml-extract-css-webpack-plugin@1.0.3@cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_cml-extract-css-webpack-plugin@1.0.3@cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/wx/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"wx\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");
var __cml__script = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=wx&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");


/***/ })

},["./src/pages/index/index.cml"]);