/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-color: var(--ecru);\n}\n.battlefield-cell {\n    border: 1px solid var(--vista-blue);\n    padding: 0;\n    background-color: var(--carmine);\n}\n.battlefield-cell:hover {\n    border: 1px solid var(--vista-blue);\n    padding: 0;\n    background-color: var(--feldgrau);\n}\n.battlefield-cell-content {\n    width: 2rem;\n    height: 2rem;\n    text-align: center;\n}\n\n.battlefield-ship {\n    background-color: var(--yale-blue);\n}\nhtml {\n    --yale-blue: #133667ff;\n    --feldgrau: #495b4cff;\n    --ecru: #bfb48fff;\n    --vista-blue: #8390faff;\n    --carmine: #91171fff;\n}\n.battlefieldgame{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n}\n/* attempt with img cover */\n.cover {\n   position: relative;\n   width: 2rem;\n   height: 2rem;\n   padding: 0;\n}\n.dot {\n    height: 25px;\n    width: 25px;\n    background-color: var(--vista-blue);\n    border-radius: 50%;\n    display: inline-block;\n}\n.battlefieldtitle{\n    display: grid;\n    grid-template-columns: 15% 30% 20% 20% 15%;\n    grid-template-rows: auto;\n    grid-template-areas: \n    \"space1 title1 empty1 title2 empty2\";\n    width: 100%;\n\n}\n.p1title{\n    grid-area: title1;\n}\n.p2title {\n    grid-area: title2;\n}\n.transparent {\n    opacity: 60%;\n}\n.battlefield-controller {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: space-evenly;\n}\n.battlefield-coordinates {\n    display: none;\n    align-items: center;\n    width: 100%;\n    justify-content: space-evenly;\n}\n.coord-form{\n    display: flex;\n    flex-direction: column;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-javascript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-javascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-javascript/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-javascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-javascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-javascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-javascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-javascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-javascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/game/battleshipUI.js":
/*!**********************************!*\
  !*** ./src/game/battleshipUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/game/player.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/game/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/game/ship.js\");\n/* harmony import */ var _img_circle_small_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/circle-small.png */ \"./src/img/circle-small.png\");\n\n\n\n\nconst DOMController = (() => {\n    let player1, player2, current_turn, ship_order, current_ship\n    \n    function getRandomInt(max) {\n        return Math.floor(Math.random() * max);\n    }\n\n    function customStringToArray(str) {\n        // Remove the outermost brackets if they exist\n        str = str.replace(\"[[\", '').replace(\"]]\", '');\n      \n        // Split the string on '],[' to get individual stringified pairs\n        const pairs = str.split('],[');\n      \n        // Map each pair to an array of numbers\n        return pairs.map(pair => {\n          return pair.split(',').map(Number);\n        });\n      }\n      \n    function initalsetup() {\n        // let real = new Player(true) // real\n        // let computer = new Player(false) //computer\n        player1 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(true) // real\n        player2 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(false) //computer\n        current_turn = 0\n        \n        defaultboard(player1)\n        defaultboard(player2)\n        load()\n        const defaultStart = document.querySelector(\".default\")\n        defaultStart.addEventListener(\"click\", () => {\n            current_turn++\n            // hides start buttons\n            document.querySelector(\".battlefield-controller\").style.display = \"none\";\n            load()\n        })\n        const customStart = document.querySelector(\".custom\")\n        customStart.addEventListener(\"click\", () => {\n            ship_order = [1,1,1,1,2,2,2,3,3,4]\n            current_ship = [0]\n            document.querySelector(\".battlefield-controller\").style.display = \"none\";\n            player1 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(true) // real\n            player2 = new _player__WEBPACK_IMPORTED_MODULE_0__.Player(false) //computer\n\n            const currentship = document.querySelector(\".cur-ship\")\n            currentship.textContent = `Current Ship Length ${ship_order[current_ship]}`\n            \n            // adding event listener to add ship button\n            const addship = document.querySelector(\".add-ship\")\n            addship.addEventListener(\"click\", () => {\n                let length = ship_order[current_ship]\n                // place(coordinates, ship){\n                let curcoordinate = customStringToArray(document.querySelector(\"#coordinates\").value)\n                console.log(curcoordinate)\n                let curship = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(length)\n                player1.gameboard.place(curcoordinate, curship)    \n                current_ship++\n                // when index out of bounds\n                if(current_ship >= ship_order.length){\n                    // hide coordinate form\n                    document.querySelector(\".battlefield-coordinates\").style.display = \"none\"\n                    current_turn++\n                    load()  \n                }else{\n                    const currentship = document.querySelector(\".cur-ship\")\n                    currentship.textContent = `Current Ship Length ${ship_order[current_ship]}`\n                    load()\n                }\n            })\n            defaultboard(player2)\n            load()\n            //shows ship placement\n            let placeshipcontroller = document.querySelector(\".battlefield-coordinates\")\n            placeshipcontroller.style.display = \"flex\"  \n\n            const p1board = document.querySelector('.player-1 > table')\n            // event listener to get coords temporary\n            p1board.addEventListener(\"click\", () => {\n                const target = event.target\n                // when clicking on cell\n                if(target.matches(\".battlefield-cell\")){\n                    const row = target.dataset.row\n                    const col = target.dataset.col\n                    const coords = document.querySelector(\".coords\")\n                    coords.textContent = `Coordinate: [${row}, ${col}]`\n                }\n            })\n        })\n    }\n    function defaultboard(player) {\n        // contains 4(1) boats, 3(2) boats, 2(3) boats, 1(4) boat\n        let gameboard = player.gameboard\n\n        // 4(1) boats\n        let ship1 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(1)\n        let ship2 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(1)\n        let ship3 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(1)\n        let ship4 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(1)\n        \n        gameboard.place([[3,3]], ship1)\n        gameboard.place([[7,5]], ship2)\n        gameboard.place([[5,6]], ship3)\n        gameboard.place([[7,7]], ship4)\n\n        //  3(2) boats\n        let ship5 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(2)\n        let ship6 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(2)\n        let ship7 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(2)\n\n        gameboard.place([[0,6],[0,7]], ship5)\n        gameboard.place([[2,1],[3,1]], ship6)\n        gameboard.place([[5,2],[6,2]], ship7)\n        \n        // 2(3) boats\n        let ship8 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3)\n        let ship9 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(3)\n        gameboard.place([[6,0],[7,0],[8,0]], ship8)\n        gameboard.place([[9,7],[9,8],[9,9]], ship9)\n\n        // 1(4) boat\n        let ship10 = new _ship__WEBPACK_IMPORTED_MODULE_2__.Ship(4)\n        gameboard.place([[3,5],[3,6],[3,7],[3,8]], ship10)\n    }\n    function load() {\n        const p1board = document.querySelector('.player-1 > table')\n        const p2board = document.querySelector('.player-2 > table')\n        // current_turn 0 means game has not yet started\n        if(current_turn == 0){\n            filltable(p1board, player1,false)\n            filltable(p2board, player2, false)\n        }else{\n            // game started\n            let current_player = current_turn % 2\n            if(current_player == 1){\n                filltable(p1board, player1)\n                filltable(p2board, player2, false)\n                computeraction(player1)\n                // p2 not active\n            }else{\n                // p1 not active\n                filltable(p1board, player1, false)\n                filltable(p2board, player2)\n                computeraction(player2)\n            }\n        }\n        \n    }\n    function filltable(board, player, active = true) {\n        let  board_data = player.gameboard.board\n        let gameboard = player.gameboard\n        // creating table\n        const table = document.createElement(\"table\")\n        table.classList.add(\"battlefield-table\")\n        board.innerHTML = \"\"\n        // adding A-J label\n        const labelrow = document.createElement('tr')\n        labelrow.classList.add(\"battlefield-row\")\n        table.append(labelrow)\n        // columns\n        let collumns = [\"\", \"A\", \"B\", \"C\", \"D\", \"E\", \"F\",\"G\", \"H\", \"I\", \"J\"]\n        collumns.forEach((col) => {\n            const label = document.createElement('th')\n            label.textContent = col\n            label.classList.add(\"battlefield-cell-content\")\n            labelrow.append(label)\n        })\n\n        // adding board data\n        board_data.forEach((row, row_index) => {\n            const gamerow = document.createElement('tr')\n            gamerow.classList.add(\"battlefield-row\")\n            table.append(gamerow)\n            // adds row\n            const row_label = document.createElement('th')\n            row_label.classList.add(\"battlefield-cell-content\")\n            row_label.textContent = row_index + 1\n            gamerow.append(row_label)\n            \n            row.forEach((col, col_index) => {\n                const gamecell = document.createElement('td')\n                gamecell.classList.add(\"battlefield-cell\")\n                gamecell.classList.add(\"battlefield-cell-content\")\n                gamecell.setAttribute(\"data-row\", row_index)\n                gamecell.setAttribute(\"data-col\", col_index)\n                \n                // might add active player type later using real as substitute\n                if(col instanceof _ship__WEBPACK_IMPORTED_MODULE_2__.Ship){\n                    if(player == player1){\n                        // show only for player 1\n                        gamecell.classList.add(\"battlefield-ship\")\n                    }\n                    // if ship there\n                }else {\n                    if(col == \".\"){\n                        // const img = document.createElement('img')\n                        // img.src = circle\n                        // img.classList.add(\"cover\")\n                        // gamecell.append(img)\n                        gamecell.innerHTML = '<span class=\"dot\"></span>'\n                    }else {\n                        gamecell.textContent = col\n                    }\n                }\n                gamerow.append(gamecell)\n            })\n            \n        })\n        if (active){\n            board.classList.remove(\"transparent\")\n            table.addEventListener(\"click\", () => {\n                const target = event.target\n                // when clicking on cell\n                if(target.matches(\".battlefield-cell\")){\n                    const row = target.dataset.row\n                    const col = target.dataset.col\n                    // if only goes next turn and loads if point is valid not x or .\n                    if(gameboard.isvalid([row,col])){\n                        // correctly updates board with x or .\n                        gameboard.recieveattack([row,col])\n                        current_turn++\n                        load()\n                        let current_player = current_turn % 2\n                        // if(current_player == 1){\n                        //     filltable(p1board, player1)\n                        //     filltable(p2board, player2, false)\n                        //     // p2\n                        // }else{\n                        //     // p1\n                        //     filltable(p1board, player1, false)\n                        //     filltable(p2board, player2)\n                        // }\n                        if(gameboard.isallsunk()){\n                            const message = document.querySelector(\".message\")\n                            if(current_player == 0){\n                                current_player = 2\n                            }\n                            message.textContent = `Player ${current_player} loses`     \n                        }    \n                    }\n                    // console.log(current_turn)\n                }\n            })\n        }else{\n            board.classList.add(\"transparent\")\n        }\n        \n        board.append(table)\n    }\n    function computeraction(player) {\n        // when computer\n        let gameboard = player.gameboard\n        if(player.real){\n            while (true) {\n                // random coords\n                let row = getRandomInt(10)\n                let col = getRandomInt(10)\n\n                //they are valid\n                if(gameboard.isvalid([row,col])){\n                    gameboard.recieveattack([row,col])\n                    current_turn++\n                    break\n                }\n            }\n            load()\n            \n        } \n        \n    }\n    return {initalsetup}\n})()\nDOMController.initalsetup()\n\n\n//# sourceURL=webpack://battleship-javascript/./src/game/battleshipUI.js?");

/***/ }),

/***/ "./src/game/gameboard.js":
/*!*******************************!*\
  !*** ./src/game/gameboard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/game/ship.js\");\n\nclass Gameboard {\n    constructor() {\n        // 10×10\n        this._board = [[\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"],\n        [\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"],\n        [\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"],\n        [\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"],\n        [\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"],\n        [\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"],\n        [\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"],\n        [\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"],\n        [\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"],\n        [\" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \" , \" \"]] \n    }\n    get board() {\n        return this._board\n    }\n    // places ship at coordinates\n    place(coordinates, ship){\n        // will be a list of coordinates\n        coordinates.forEach((coordinate) => {\n            // [row, col]\n            let row = coordinate[0]\n            let col = coordinate[1]\n            this._board[row][col] = ship\n        })\n        \n    }\n    isempty(coordinate) {\n        let row = coordinate[0]\n        let col = coordinate[1]\n        if(this._board[row][col] != \" \"){\n            // when not empty\n            return false\n        }else {\n            // when empty\n            return true\n        } \n    }\n    recieveattack(coordinate) {\n        let row = coordinate[0]\n        let col = coordinate[1]\n        let board = this._board\n        if(this.isempty(coordinate)){\n            // when \" \"\n            board[row][col] = \".\"\n            return false\n        }else {\n            try{\n                // when not empty prob has ship\n                board[row][col].hit()\n                board[row][col] = \"x\"\n                return true\n            }catch{\n                return false\n            }\n        } \n    }\n    isvalid(coordinate) {\n        let row = coordinate[0]\n        let col = coordinate[1]\n        let board = this._board\n        let point = board[row][col]\n        if(point == \".\" || point == \"x\"){\n            // if filled return false\n            return false\n        }else{\n            // if not return true\n            return true\n        }\n    }\n    get allships(){\n        // board used to acces this._board simply renames it\n        let board = this._board\n        let ships = []\n        board.forEach((element, row) => {\n            element.forEach((data, col) => {\n                if(data instanceof _ship__WEBPACK_IMPORTED_MODULE_0__.Ship){\n                    let coordinate = [row, col]\n                    ships.push(coordinate)\n                }\n            })\n        })\n        return ships\n        // returns result like [] or  [[0,0]]\n    }\n    isallsunk(){\n        let coordinates = this.allships\n        if(coordinates.length  == 0){\n            return true\n        }else{ \n            let isallsunk = true\n            coordinates.forEach((coordinate) => {\n                // isSunk() true if sunk\n                let row = coordinate[0]\n                let col = coordinate[1]\n                let ship = this._board[row][col]\n                if(!(ship.isSunk())){\n                    // when ship didn't sink\n                    isallsunk = false\n                    // sets since if return in here doesn't return for isallsunk()\n                }\n            })\n            return isallsunk\n        }\n    }\n    \n}\n\n\n\n//# sourceURL=webpack://battleship-javascript/./src/game/gameboard.js?");

/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/game/gameboard.js\");\n\nclass Player {\n    constructor(real){\n        this._real = real;\n        this._gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard;\n    }\n    get real() {\n        return this._real\n    }\n    get board() {\n        return this._gameboard.board\n    }\n    get gameboard() {\n        return this._gameboard\n    }\n}\n\n\n//# sourceURL=webpack://battleship-javascript/./src/game/player.js?");

/***/ }),

/***/ "./src/game/ship.js":
/*!**************************!*\
  !*** ./src/game/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ship: () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n     //  {length, hits, sunk}\n    constructor(length){\n        this.length = length;\n        this._hits = 0;\n    }\n\n    get hits() {\n        return this._hits\n        // adds I to hits\n    }\n    set hits(hits) {\n        this._hits = hits\n    }\n    isSunk() {\n        if (this.length <= this.hits){\n            // hits reach length \n            return true\n        }else {\n            return false\n        }\n    }\n    hit() {\n        this._hits++\n    }\n    get ship() {\n        return {length: this.length, hits: this.hits, sunk: this.sunk}\n    }\n}\n\n\n\n//# sourceURL=webpack://battleship-javascript/./src/game/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_battleshipUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/battleshipUI */ \"./src/game/battleshipUI.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n//# sourceURL=webpack://battleship-javascript/./src/index.js?");

/***/ }),

/***/ "./src/img/circle-small.png":
/*!**********************************!*\
  !*** ./src/img/circle-small.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2de8de157271ef628251.png\";\n\n//# sourceURL=webpack://battleship-javascript/./src/img/circle-small.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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