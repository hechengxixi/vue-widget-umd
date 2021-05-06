(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("antd"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["antd", "react"], factory);
	else if(typeof exports === 'object')
		exports["xncomponents-react-demo"] = factory(require("antd"), require("react"));
	else
		root["xncomponents-react-demo"] = factory(root["antd"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_antd__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__("react"),
    g = 60103;

exports.Fragment = 60107;

if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  exports.Fragment = h("react.fragment");
}

var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    n = Object.prototype.hasOwnProperty,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, k) {
  var b,
      d = {},
      e = null,
      l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);

  for (b in a) {
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: g,
    type: c,
    key: e,
    ref: l,
    props: d,
    _owner: m.current
  };
}

exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}

/***/ }),

/***/ "./src/components/button/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/button/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
// helpers
function getExclamationMarks(numChars){return Array(numChars+1).join('!');}function Button(_ref){var name=_ref.name,_ref$enthusiasmLevel=_ref.enthusiasmLevel,enthusiasmLevel=_ref$enthusiasmLevel===void 0?1:_ref$enthusiasmLevel;if(enthusiasmLevel<=0){throw new Error('You could be a little more enthusiastic. :DDDDDD');}return/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div",{className:"hello",children:[/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div",{className:"greeting",children:["Hello ",name+getExclamationMarks(enthusiasmLevel)]}),/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"],{className:"button",children:[" ",name," "]})]});}/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/button/style/index.less":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/button/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/index.jsx");
var XnUI={};var handleErr=function handleErr(err){if(typeof err==='string')console.error(err);else console.error("xn-".concat(err.type||'',"Error: ").concat(err.msg));};XnUI.registerComponentUrl=function(url){if(window.registerComponentUrl){// 全局添加 auth
// eslint-disable-next-line no-undef
return registerComponentUrl(url).catch(function(){handleErr({type:'AuthError',msg:'请检查服务与密钥！!'});});}else{handleErr({type:'Global',msg:'未引入presets!'});}return Promise.reject();};XnUI.install=function(app,options){try{if(!window.AUTH_MAP)throw{type:'Global',msg:'未获取权限！'};Object.keys(_components__WEBPACK_IMPORTED_MODULE_0__).map(function(cponName){// 本地调试添加
window.AUTH_MAP['XnButton']={get:true,post:true,put:true,delete:true};window.AUTH_MAP['filepreview']={get:true,post:true,put:true,delete:true};window.AUTH_MAP['fieldgroup']={get:true,post:true,put:true,delete:true};if(!window.checkComponentAuth)throw{type:'Global',msg:'未引入presets!'};// eslint-disable-next-line no-undef
if(checkComponentAuth(cponName))_components__WEBPACK_IMPORTED_MODULE_0__[cponName]&&app.component(cponName);else{// 如果没有权限，不管使用了没，注册的时候会全部报错
// console.error(`xn-AuthError: 该密钥没有 ${cponName} 权限`)
// 如果组件没有权限 统一显示 NoAuth 组件
// CPONS[cponName] && app.component(cponName, <NoAuth cponname={cponName} />)
}});}catch(err){handleErr(err);}};// 需要加载权限，不能 auto install
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
// }
/* harmony default export */ __webpack_exports__["default"] = (XnUI);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.js");


/***/ }),

/***/ "antd":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_antd__;

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=xncomponents-react-demo.js.map