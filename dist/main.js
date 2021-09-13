/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#playArea{\\n    display: flex;\\n    transform: translate(90px, 0px);\\n}\\n\\n.BoatBtns{\\n    margin : 20px;\\n    height: 70px;\\n    width: 300px;\\n    border-radius: 12px;\\n    font-size: 15px;\\n    border : 0.1px solid rgba(0, 0, 0, 0.301);\\n}\\n\\n.BoatBtns:focus{\\n    box-shadow: 0px 0px 10px 5px #5e5c5c75;\\n}\\n\\n.rang{\\nheight: 50px;\\nwidth: 500px;\\n}\\n\\n#NG{\\n    height: 70px;\\n    width: 300px;\\n    border-radius: 24px;\\n    font-size: 25px;\\n    border : 0.1px solid rgba(0, 0, 0, 0.301);\\n    transform: translate(600px, -300px);\\n}\\n\\n.hit{\\n    background-color: red !important;\\n}\\n\\n.touch{\\n    background-color: blue !important;\\n}\\n\\n#NG:hover, .BoatBtns:hover{\\n    cursor: pointer;\\n    box-shadow: 0px 0px 10px 5px #5e5c5c75;\\n}\\n#preContainer{\\n    height: 500px;\\n    width: 500px;\\n    display: inline;\\n    margin: 50px;\\n    border : solid black;\\n}\\n#IAZone, #HumanZone{\\n    height: 500px;\\n    width: 500px;\\n    display: inline;\\n    margin: 50px;\\n}\\n.case{\\n    padding : 0px;\\n    margin : 0px;\\n    height : 50px;\\n    width : 50px;\\n    border : solid rgba(49, 49, 49, 0.411) 0.1px;\\n    background-color: white;\\n}\\n\\n.caseIA:hover{\\n    cursor: pointer;\\n    background-color: rgb(219, 219, 219);\\n}\\n\\n.hiddenBoat{\\n    background-color: rgba(255, 228, 196, 0.459);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOM/IndexDOM.js":
/*!*****************************!*\
  !*** ./src/DOM/IndexDOM.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayPreGame\": () => (/* reexport safe */ _PreGame__WEBPACK_IMPORTED_MODULE_0__.DisplayPreGame),\n/* harmony export */   \"ShowGame\": () => (/* reexport safe */ _ShowGame__WEBPACK_IMPORTED_MODULE_1__.ShowGame)\n/* harmony export */ });\n/* harmony import */ var _PreGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PreGame */ \"./src/DOM/PreGame.js\");\n/* harmony import */ var _ShowGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowGame */ \"./src/DOM/ShowGame.js\");\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/DOM/IndexDOM.js?");

/***/ }),

/***/ "./src/DOM/PreGame.js":
/*!****************************!*\
  !*** ./src/DOM/PreGame.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DisplayPreGame\": () => (/* binding */ DisplayPreGame),\n/* harmony export */   \"dataship\": () => (/* binding */ dataship)\n/* harmony export */ });\n\nconst letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];\nlet dataship = {\n    Carrier : undefined,\n    Battleship : undefined,\n    Cruiser : undefined,\n    Submarine : undefined,\n    Destroyer : undefined,\n};\n// Ships = [Carrier, Battleship, Cruiser, Submarine, Destroyer];\nconst DisplayPreGame = (Ships) => {\n    const header = document.createElement('div');\n    header.textContent = \"Place your boats ! \";\n    document.body.appendChild(header);\n    \n    const StartGame = document.createElement('button');\n\n    const boatsForm = {\n    Carrier : {\n        div : document.createElement('form'),\n        x : [new Array(10), document.createElement('input')]\n    },\n    Battleship : {\n        div : document.createElement('form'),\n        x : [new Array(10), document.createElement('input')]\n    },\n    Cruiser : {\n        div : document.createElement('form'),\n        x : [new Array(10), document.createElement('input')]\n    },\n    Submarine : {\n        div : document.createElement('form'),\n        x : [new Array(10), document.createElement('input')]\n    },\n    Destroyer : {\n        div : document.createElement('form'),\n        x : [new Array(10), document.createElement('input')]\n    }\n    }\n    \n    // const mode = (ship) => {\n    //     if(ship === 'Carrier'){\n    //         dataship[ship] = {\n    //             Ship : Ships[0],\n    //             cor : {x: 'a', y : 0},\n    //             dir : 'horizontal'\n    //         }\n    //     }\n    //     if(ship === 'Battleship'){\n    //         dataship[ship] = {\n    //             Ship : Ships[1],\n    //             cor : {x: 'b', y : 0},\n    //             dir : 'horizontal'\n    //         }\n    //     }\n    //     if(ship === 'Cruiser'){\n    //         dataship[ship] = {\n    //             Ship : Ships[2],\n    //             cor : {x: 'c', y : 0},\n    //             dir : 'horizontal'\n    //         }\n    //     }\n    //     if(ship === 'Submarine'){\n    //         dataship[ship] = {\n    //             Ship : Ships[3],\n    //             cor : {x: 'd', y : 0},\n    //             dir : 'horizontal'\n    //         }\n    //     }\n    //     if(ship === 'Destroyer'){\n    //         dataship[ship] = {\n    //             Ship : Ships[4],\n    //             cor : {x: 'e', y : 0},\n    //             dir : 'horizontal'\n    //         }\n    //     }\n    // }\n\n    const mode = (ship, cor, dir) => {\n        if(ship === 'Carrier'){\n            dataship[ship] = {\n                Ship : Ships[0],\n                cor,\n                dir\n            }\n        }\n        if(ship === 'Battleship'){\n            dataship[ship] = {\n                Ship : Ships[1],\n                cor,\n                dir\n            }\n        }\n        if(ship === 'Cruiser'){\n            dataship[ship] = {\n                Ship : Ships[2],\n                cor,\n                dir\n            }\n        }\n        if(ship === 'Submarine'){\n            dataship[ship] = {\n                Ship : Ships[3],\n                cor,\n                dir\n            }\n        }\n        if(ship === 'Destroyer'){\n            dataship[ship] = {\n                Ship : Ships[4],\n                cor,\n                dir\n            }\n        }\n    }\n    Ships.forEach(ship => {\n        document.body.appendChild(boatsForm[ship.name].div);\n        boatsForm[ship.name].div.textContent = ship.name;\n        for(let i = 0; i<11; i++){\n            if(i<10){\n            boatsForm[ship.name].x[0][i] = document.createElement('input');\n            boatsForm[ship.name].x[1][i] = document.createElement('label');\n            boatsForm[ship.name].x[0][i].setAttribute('type', 'radio')\n            boatsForm[ship.name].x[0][i].setAttribute('id', letters[i])\n            boatsForm[ship.name].x[0][i].setAttribute('name', ship.name)\n            boatsForm[ship.name].x[1][i].setAttribute('for', letters[i])\n            boatsForm[ship.name].x[1][i].textContent = letters[i];\n            boatsForm[ship.name].x[0][i].setAttribute('value', letters[i])\n            boatsForm[ship.name].div.appendChild(boatsForm[ship.name].x[0][i])\n            boatsForm[ship.name].div.appendChild(boatsForm[ship.name].x[1][i])\n            }\n            if(i === 10){\n                boatsForm[ship.name].x[0][i] = document.createElement('button');\n                boatsForm[ship.name].div.appendChild(boatsForm[ship.name].x[0][i])\n                boatsForm[ship.name].x[0][i].addEventListener(\"click\", () => {\n                    console.log(\"data\");\n                })\n            }\n        }\n        console.log(boatsForm);\n        boatsForm[ship.name].div.classList.add('BoatBtns')\n        boatsForm[ship.name].div.addEventListener('click', () => {\n            mode(ship.name, {x : 'a', y : 0}, \"horizontal\" );\n        })\n    });\n    document.body.appendChild(StartGame);\n    StartGame.addEventListener('click', () => {\n        Ships.forEach(ship => {\n            boatsForm[ship.name].div.remove()\n            })\n        header.remove()\n    })\n    return StartGame;\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/DOM/PreGame.js?");

/***/ }),

/***/ "./src/DOM/ShowGame.js":
/*!*****************************!*\
  !*** ./src/DOM/ShowGame.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShowGame\": () => (/* binding */ ShowGame)\n/* harmony export */ });\n// créer les boards de jeux au niveau du HTML (Humain ou IA)\n\nconst createBoard = (type) => {\n    let rang = {\n        a : undefined,\n        b : undefined,\n        c : undefined,\n        d : undefined,\n        e : undefined,\n        f : undefined,\n        g : undefined,\n        h : undefined,\n        i : undefined,\n        j : undefined,\n    };\n    let container = undefined;\n    let playArea = document.getElementById('playArea');\n    if(type === 'Human'){\n    container = document.getElementById('HumanZone');\n    playArea.appendChild(container);\n    }\n    else if (type === 'IA'){\n    container = document.getElementById('IAZone');\n    playArea.appendChild(container);\n    }\n    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']\n    for (let i=0; i<10; i++){\n        rang[letters[i]] = {\n            div : document.createElement('div'),\n            cases : []\n        }\n        rang[letters[i]].div.setAttribute('id', letters[i]);\n        rang[letters[i]].div.classList.add('rang');\n        container.appendChild(rang[letters[i]].div);\n        for(let j=0; j<10; j++){\n            rang[letters[i]].cases[j] = document.createElement('button');\n            rang[letters[i]].cases[j].setAttribute('id', j);\n            if(type === 'IA'){\n            rang[letters[i]].cases[j].classList.add('case');\n        }\n        else{\n            rang[letters[i]].cases[j].classList.add('case');\n            rang[letters[i]].cases[j].classList.add('caseIA');\n        }\n            rang[letters[i]].div.appendChild(rang[letters[i]].cases[j])\n        }\n    }\n    return rang;\n}\n\n// Place les listener sur la board ennemie et déclanche l'attaque de l'IA dans \n// la foulée\n\n\nlet gameOver = false;\n\nconst setShootListener = (rang1, rang2, player1, player2) => {\n    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];\n    for(let i=0; i<10; i++){\n        rang1[letters[i]].cases.forEach(element => {\n            element.addEventListener('click', () => {\n                if(element.classList.contains('touch') || \n                   element.classList.contains('hit')){\n                    return;\n                }\n                else{\n                    player1.Attack(element.parentNode.id, element.id);\n                    if(player2.board.board[element.parentNode.id][element.id].boat !== undefined){\n                        element.classList.add('hit')\n                    }\n                    else{\n                        element.classList.add('touch');\n                    }\n                    const cor = player2.AttackIA();\n                    if(player1.board.board[cor.x][cor.y].boat !== undefined){\n                        rang2[cor.x].cases[cor.y].classList.add('hit');\n                    }\n                    else{\n                        rang2[cor.x].cases[cor.y].classList.add('touch');\n                    }\n                    }\n                 if(player1.board.gameOver()){\n                     \n                    alert(\"IA won !\");\n                    gameOver = true;\n                }\n                if(player2.board.gameOver()){\n                    alert(\"Human player won !\");\n                    gameOver = true;\n                }\n            })\n            })\n        }\n\n    }\n\n    const getGameOver = () => {\n        return gameOver\n    }\n\n    const setGameOver = () => {\n        gameOver = false;\n    }\n\nconst ShowGame = {\n        createBoard,\n        setShootListener,\n        getGameOver,\n        setGameOver\n    }\n\n\n\n//# sourceURL=webpack://battleship/./src/DOM/ShowGame.js?");

/***/ }),

/***/ "./src/Player.js":
/*!***********************!*\
  !*** ./src/Player.js ***!
  \***********************/
/***/ ((module) => {

eval("const Player = (type, board, ennemyBoard) => {\n    const Attack = (x, y) => {\n        ennemyBoard.AttackShip(x, y)\n    };\n\n\n    if(type === 'IA'){\n        const randomCor = () => {\n            // retourne des cordonné au hazard, utilse math.random\n            let x = String.fromCharCode(Math.floor(Math.random() *10) + 97);\n            let y = Math.floor(Math.random() *10);\n            return {x,y}\n        }\n        const AttackIA = () => {\n            let cor = randomCor();\n            while(ennemyBoard.board[cor.x][cor.y].touch === true){\n                cor = randomCor();\n            }\n            ennemyBoard.AttackShip(cor.x, cor.y);\n            return cor;\n        }\n\n        const checkPlace = (cor, dir, length) => {\n            let free = true;\n            if(dir === \"horizontal\"){\n                for(let i = 0; i<length; i++){\n                    let nextNumber = cor.y + i;\n                    if(board.board[cor.x][nextNumber] === undefined ||\n                         board.board[cor.x][nextNumber].boat !== undefined){\n                            free = false;\n                    }\n                }\n                return free\n            }\n            else if(dir === \"vertical\"){\n                for(let i = 0; i<length; i++){\n                    let nextChar = String.fromCharCode(cor.x.charCodeAt(0) + i);\n                    if(board.board[nextChar] === undefined || \n                       board.board[nextChar][cor.y] === undefined ||\n                       board.board[nextChar][cor.y].boat !== undefined){\n                            free = false;\n                    }\n                }\n                return free\n            }\n        }\n\n        const placeShipIA = (Ship) => {\n            let cor = randomCor();\n            let dir = \"vertical\";\n            while(checkPlace(cor, dir, Ship.length) === false){\n                if(dir === \"horizontal\"){\n                    cor = randomCor()\n                    dir = \"vertical\";\n                }\n                else{\n                    dir = \"horizontal\";\n                }\n            }\n            board.placeShip(Ship, cor, dir);\n        }\n\n        return {\n             type : 'IA',\n             AttackIA,\n             board,\n             placeShipIA\n        }\n    }\n\n\n\n\n    \n    else if(type === 'Human'){\n        return {\n            type : 'Human',\n            Attack,\n            board\n        }\n    }\n}\n\nmodule.exports = Player;\n\n//# sourceURL=webpack://battleship/./src/Player.js?");

/***/ }),

/***/ "./src/gameBoard.js":
/*!**************************!*\
  !*** ./src/gameBoard.js ***!
  \**************************/
/***/ ((module) => {

eval("const gameBoard = () => {\n\n    let Ships = [];\n\n    const field = () => {\n        return {\n        touch : false,\n        boat : undefined\n    }\n}\n\n    let board = {\n        a : new Array(10),\n        b : new Array(10),\n        c : new Array(10),\n        d : new Array(10),\n        e : new Array(10),\n        f : new Array(10),\n        g : new Array(10),\n        h : new Array(10),\n        i : new Array(10),\n        j : new Array(10),\n    }\n    const alphabet = ['a','b','c','d','e','f','g','h','i','j'];\n    for(let i = 0; i<10; i++){\n        let letter = alphabet[i]\n            for(let j = 0; j<10; j++){\n                board[letter][j] = field();\n            }\n    }\n\n    const nextChar = (c) => {\n        return String.fromCharCode(c.charCodeAt(0) + 1);\n    }\n\n    const placeShip = (ship, cor, dir) => {\n        Ships.push(ship);\n        console.log(\"Ships : \", Ships)\n        let x = cor.x;\n        let y = cor.y;\n            for(let i= 0; i<ship.length; i++){\n                board[x][y].boat = ship;\n                board[x][y].nbBoat = i;\n                if(dir === 'horizontal'){\n                    y++\n                }\n                else if (dir === 'vertical'){\n                     x = nextChar(x);\n                }\n            }\n    }\n\n    const AttackShip = (x, y) => {\n        board[x][y].touch = true;\n        if(board[x][y].boat){\n            board[x][y].boat.hit(board[x][y].nbBoat);\n        }\n    }\n    \n    const gameOver = () => {\n        isOver = true;\n        Ships.forEach(ship => {\n            if(!(ship.isSunk())){\n                isOver = false\n            }\n        });\n        return isOver;\n    }\n\n    return {\n        board,\n        placeShip,\n        AttackShip,\n        gameOver,\n    }\n}\n\nmodule.exports = gameBoard\n\n//# sourceURL=webpack://battleship/./src/gameBoard.js?");

/***/ }),

/***/ "./src/gameOver.js":
/*!*************************!*\
  !*** ./src/gameOver.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameOver\": () => (/* binding */ gameOver)\n/* harmony export */ });\nconst gameOver = (a) => {\n    console.log(a);\n    for(let i = 0; i<a.length; i++){\n        if(i<6){\n            a[i] = undefined;\n        }\n        else{\n            let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];\n            console.log(\"boards à remove\", a[i]);\n            for(let j = 0; j<10; j++){\n                a[i][letters[j]].div = undefined;\n                console.log(a[i][letters[j]].div);\n            }\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship/./src/gameOver.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player.js\");\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Player__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _DOM_IndexDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOM/IndexDOM */ \"./src/DOM/IndexDOM.js\");\n/* harmony import */ var _DOM_PreGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOM/PreGame */ \"./src/DOM/PreGame.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameOver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gameOver */ \"./src/gameOver.js\");\n\n\n\n\n\n\nconst gameBoard = __webpack_require__(/*! ./gameBoard */ \"./src/gameBoard.js\");\n\nlet newGameBtn = document.getElementById('NG');\nconst alphabet = ['a','b','c','d','e','f','g','h','i','j'];\nconst game = () => {\n    const boardHuman = gameBoard();\n    const boardIA = gameBoard();\n    const playerHuman = _Player__WEBPACK_IMPORTED_MODULE_0___default()('Human', boardHuman, boardIA);\n    const playerIA = _Player__WEBPACK_IMPORTED_MODULE_0___default()('IA', boardIA, boardHuman);\n    const ShipIA = [(0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Carrier', 5), (0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Battleship', 4), (0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Cruiser', 3), \n    (0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Submarine', 2), (0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Destroyer', 1)]\n    const ShipHuman = [(0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Carrier', 5), (0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Battleship', 4), (0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Cruiser', 3), \n    (0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Submarine', 2), (0,_ship__WEBPACK_IMPORTED_MODULE_4__.Ship)('Destroyer', 1)]\n    for (let i = 0; i < 5; i++){\n        playerIA.placeShipIA(ShipIA[i])\n    }\n    console.log(newGameBtn)\n    newGameBtn.remove();\n    let StartGame = (0,_DOM_IndexDOM__WEBPACK_IMPORTED_MODULE_2__.DisplayPreGame)(_ship__WEBPACK_IMPORTED_MODULE_4__.Ships);\n    StartGame.addEventListener('click', () => {\n        // maintenant utiliser le dataShip pour placer les bateaux sur la board\n        const graphicBoardIA = _DOM_IndexDOM__WEBPACK_IMPORTED_MODULE_2__.ShowGame.createBoard('IA');\n        const graphicBoardHuman = _DOM_IndexDOM__WEBPACK_IMPORTED_MODULE_2__.ShowGame.createBoard('Human');\n        _DOM_IndexDOM__WEBPACK_IMPORTED_MODULE_2__.ShowGame.setShootListener(graphicBoardHuman, graphicBoardIA, playerHuman, playerIA);\n        StartGame.remove();\n        ShipHuman.forEach(ship => {\n            const s = _DOM_PreGame__WEBPACK_IMPORTED_MODULE_3__.dataship[ship.name];\n            boardHuman.placeShip(s.Ship, s.cor, s.dir)\n        });\n        \n    // Essaie de faire mieux la semaine prochaine la je suis fatigué, check si tous les trucs\n    // sont bien vidés, la y a truc qui va pas ca génère 2 fois le même btn\n\n\n        document.addEventListener('click', () => {\n            if(_DOM_IndexDOM__WEBPACK_IMPORTED_MODULE_2__.ShowGame.getGameOver()){\n            alert(\"heeeey\");\n            (0,_gameOver__WEBPACK_IMPORTED_MODULE_5__.gameOver)([boardHuman, boardIA, playerHuman, playerIA, ShipHuman,\n                ShipIA, graphicBoardIA, graphicBoardHuman])\n                newGameBtn = document.createElement('button');\n                document.body.appendChild(newGameBtn);\n                newGameBtn.setAttribute('id', 'NG');\n                newGameBtn.textContent = \"New Game\";\n                newGameBtn.addEventListener('click', game)\n                _DOM_IndexDOM__WEBPACK_IMPORTED_MODULE_2__.ShowGame.setGameOver();\n        }\n        \n    })\n        \n        // si tu veux montrer à l'avance les bateaux de l'ennemi ^ remettre l'aphabet en haut ^ :\n\n        for (let i = 0; i<10; i++){\n            for(let j = 0; j<10; j++){\n                if(boardIA.board[alphabet[i]][j].boat !== undefined){\n                    graphicBoardHuman[alphabet[i]].cases[j].classList.add('hiddenBoat');\n                }\n                if(boardHuman.board[alphabet[i]][j].boat !== undefined){\n                    graphicBoardIA[alphabet[i]].cases[j].classList.add('hiddenBoat');\n                }\n            }\n        }\n    })\n}\n\n\nnewGameBtn.addEventListener('click', game)\n\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ships\": () => (/* binding */ Ships),\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nconst Ship = (name, length) => {\n    let boardLife = new Array(length);\n        boardLife.forEach(e => e = false);\n    const hit = (number) => {\n        boardLife[number] = true;\n    }\n    const isSunk = () => {\n        let sunk = true;\n        for (let i = 0; i<length; i++){\n            if(!(boardLife[i])){\n                sunk = false;\n            }\n        }\n        return sunk\n    }\n\n    return {\n        name,\n        length,\n        hit,\n        isSunk,\n        boardLife\n    }\n}\n\nconst Carrier = Ship('Carrier', 5);\nconst Battleship = Ship('Battleship', 4);\nconst Cruiser = Ship('Cruiser', 3);\nconst Submarine = Ship('Submarine', 2);\nconst Destroyer = Ship('Destroyer', 1);\nconst Ships = [Carrier, Battleship, Cruiser, Submarine, Destroyer];\n\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;