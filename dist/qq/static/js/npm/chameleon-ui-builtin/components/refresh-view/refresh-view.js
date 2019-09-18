var __CML__GLOBAL = require("../../../../manifest.js");
__CML__GLOBAL.webpackJsonp([14],{

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __INTERFACE__FILEPATH = "/Users/firmiana/Downloads/Projects/ChameleonTest/node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.interface";
var __CML_ERROR__ = function throwError(content) {
  throw new Error("\u6587\u4EF6\u4F4D\u7F6E: " + __INTERFACE__FILEPATH + "\n            " + content);
};

var __enableTypes__ = [];
var __INTERFAE__DEFINES__ = {
  "types": {
    "scrollEventDetail": {
      "deltaX": "Number",
      "deltaY": "Number",
      "scrollHeight": "Number",
      "scrollLeft": "Number",
      "scrollTop": "Number",
      "scrollWidth": "Number"
    }
  },
  "interfaces": {
    "RefreshViewInterface": {
      "enablePullUpLoad": "Boolean",
      "pullUpLoadComplete": "Boolean",
      "pullingUp": "Boolean",
      "pullUpStart": "Number",
      "pullUpStop": "Number",
      "pullDownStart": "Number",
      "pullDownStop": "Number",
      "pullingDown": "Boolean",
      "onPullDownRefresh": {
        "input": ["Undefined"],
        "output": "Undefined"
      },
      "onPullUpLoad": {
        "input": ["Undefined"],
        "output": "Undefined"
      }
    }
  },
  "classes": {}
};
var __CML__DEFINES__ = {
  "types": {},
  "interfaces": {},
  "classes": {
    "RefreshView": ["RefreshViewInterface"]
  }
};
var __CML__WRAPPER__ = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/runtime/check.js");

var RefreshView = function () {
  function RefreshView() {
    _classCallCheck(this, RefreshView);

    this.props = {
      enablePullUpLoad: {
        type: Boolean,
        default: false
      },
      pullUpLoadComplete: {
        type: Boolean,
        default: false
      },
      pullingUp: {
        type: Boolean,
        default: false
      },
      pullUpStop: {
        type: Number,
        default: 80
      },
      pullUpStart: {
        type: Number,
        default: 50
      },
      pullDownStart: {
        type: Number,
        default: 50
      },
      pullDownStop: {
        type: Number,
        default: 80
      },
      pullingDown: {
        type: Boolean,
        default: false
      }
    };
    this.methods = {
      onPullDownRefresh: function onPullDownRefresh() {
        this.$cmlEmit('onPullDownRefresh');
      },
      onPullUpLoad: function onPullUpLoad() {
        this.$cmlEmit('onPullUpLoad');
      }
    };
    this.watch = {
      pullingDown: function pullingDown(v) {
        if (!v) {
          qq.stopPullDownRefresh();
        }
      }
    };
  }

  _createClass(RefreshView, [{
    key: "created",
    value: function created() {
      var _this = this;

      var currentPages = getCurrentPages();
      var currentPath = currentPages.pop().route;
      this.$cmlEventBus.on(currentPath + "_onPullDownRefresh", function () {
        if (_this.pullingDown) return;
        _this.onPullDownRefresh();
      });

      if (this.enablePullUpLoad) {
        this.$cmlEventBus.on(currentPath + "_onReachBottom", function () {
          if (_this.pullUpLoadComplete || _this.pullingUp) return;
          _this.onPullUpLoad();
        });
      }
    }
  }]);

  return RefreshView;
}();

exports.default = __CML__WRAPPER__(new RefreshView(), __CML_ERROR__, __enableTypes__, __INTERFAE__DEFINES__, __CML__DEFINES__);


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_cml-extract-css-webpack-plugin@1.0.3@cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.qq.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.qq.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_cml-extract-css-webpack-plugin@1.0.3@cml-extract-css-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_vue-style-loader@4.1.2@vue-style-loader/index.js!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_css-loader@0.28.11@css-loader/index.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_postcss-loader@2.1.5@postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"/usr/local/lib/node_modules/chameleon-tool/configs/postcss/qq/.postcssrc.js\"}}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_less-loader@4.1.0@less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-css-loader@1.0.3@chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"qq\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.qq.cml");
var __cml__script = __webpack_require__("../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js?{\"filename\":\"/usr/local/lib/node_modules/chameleon-tool/chameleon.js\"}!../../../../../usr/local/lib/node_modules/chameleon-tool/node_modules/_chameleon-loader@1.0.3@chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=qq&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.qq.cml");


/***/ })

},["./node_modules/chameleon-ui-builtin/components/refresh-view/refresh-view.qq.cml"]);