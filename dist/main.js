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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0;\n    margin: 0;\n    border: 0;\n}\n\nhtml, body {\n    min-height: 100vh;\n    height: auto;\n    overflow-y: auto; /* Ensures the page can scroll vertically */\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    font-size: 2rem;\n    font-family: Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    position: relative;\n\n}\n\nheader {\n    background-color: #333; /* Dark background for contrast */\n    color: #fff; /* White text color for readability */\n    padding: 1rem 0; /* Spacing around the content */\n    position: fixed; /* Fixed position for header */\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1000; /* Ensures header stays above other content */\n}\n\n.head__container {\n    max-width: 1440px;\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 1rem;\n}\n\n.logo {\n    font-size: 2.4rem;\n    font-weight: bold;\n    color: #fff;\n}\n\nnav {\n    display: flex;\n    gap: 1rem;\n}\n\nnav button {\n    background-color: #555; /* Slightly lighter than header */\n    color: #fff;\n    border: none;\n    padding: 0.75rem 1.5rem;\n    font-size: 1.6rem;\n    cursor: pointer;\n    border-radius: 4px;\n    transition: background-color 0.3s ease;\n}\n\nnav button:hover {\n    background-color: #777; /* Lighter on hover */\n}\n\n#content {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin-top: 80px; /* Adjust based on header height */\n    margin-bottom: 120px; /* Adjust based on footer height */\n    overflow-y: auto;\n}\n\n.slideshow-container {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 98%;\n    overflow: hidden;\n    z-index: -1;\n}\n\n.mySlides {\n    display: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.slide-image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    filter: brightness(70%);\n}\n\n.slide-text {\n    position: absolute;\n    bottom: 25px;\n    left: 20px;\n    color: white;\n    font-size: 2rem;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n.fade {\n    -webkit-animation-name: fade;\n    -webkit-animation-duration: 1.5s;\n    animation-name: fade;\n    animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n@keyframes fade {\n    from {opacity: .4}\n    to {opacity: 1}\n}\n\n.btn {\n    background-color: #4CAF50;\n    color: white;\n    padding: 15px 20px;\n    margin: 10px;\n    border: none;\n    cursor: pointer;\n    font-size: 16px;\n    border-radius: 5px;\n}\n\n.btn:hover {\n    background-color: #45a049;\n}\n\n.main__container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    gap: 20px;\n    max-width: 80%;\n    position: relative;\n    background: #fff;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    padding: 2rem;\n}\n\n.main__container h1 {\n    font-size: 3rem; /* Large and prominent heading */\n    color: #333; /* Dark color for contrast */\n    margin-bottom: 1.5rem; /* Space below the heading */\n    font-weight: bold; /* Make heading stand out */\n    text-transform: uppercase; /* Uppercase for a strong impression */\n}\n\n.main__container p.intro {\n    font-size: 1.6rem; /* Slightly larger font for readability */\n    color: #555; /* Softer color than the heading */\n    line-height: 1.6; /* Improve readability */\n    margin: 0; /* Remove default margin */\n    max-width: 600px; /* Limit width to ensure text does not stretch too far */\n}\n\n.btn-container {\n    display: flex;\n    gap: 1rem;\n}\n\nfooter {\n    background-color: #333; /* Matches header background */\n    color: #fff;\n    padding: 1rem 0; /* Spacing around the content */\n    text-align: center;\n    position: relative;\n}\n\n.footer__container {\n    max-width: 1440px;\n    margin: 0 auto;\n}\n\n.footer__container ul {\n    list-style-type: none;\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}\n\n.footer__container ul li {\n    font-size: 1.4rem;\n}\n\n.footer__container ul li a {\n    color: #fff;\n    text-decoration: none;\n    transition: color 0.3s ease;\n}\n\n.footer__container ul li a:hover {\n    color: #ddd; /* Light color on hover */\n}\n\n/* Menu Page Styles */\n.menu__container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n    max-width: 1200px;\n    margin: auto;\n}\n\n.menu__container h1 {\n    font-size: 3rem;\n    color: #333;\n    margin-bottom: 2rem;\n}\n\n.menu-item {\n    display: flex;\n    align-items: center;\n    border: 1px solid #ddd;\n    border-radius: 8px;\n    overflow: hidden;\n    margin-bottom: 2rem;\n    width: 100%;\n    max-width: 1000px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.menu-item-image {\n    width: 40%;\n    height: auto;\n    object-fit: cover;\n}\n\n.menu-item-info {\n    padding: 1rem;\n    width: 60%;\n}\n\n.menu-item-info h2 {\n    font-size: 2rem;\n    color: #333;\n    margin-bottom: 0.5rem;\n}\n\n.menu-item-info p {\n    font-size: 1.6rem;\n    color: #666;\n    margin-bottom: 0.5rem;\n}\n\n.price {\n    font-size: 1.8rem;\n    color: #4CAF50;\n    font-weight: bold;\n}\n\n/* Contact Page styles*/\n.contact__container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n    max-width: 800px;\n    margin: auto;\n    background: #f9f9f9;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.contact__container h1 {\n    font-size: 3rem;\n    color: #333;\n    margin-bottom: 1.5rem;\n}\n\n.contact-form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n}\n\n.contact-form label {\n    font-size: 1.6rem;\n    color: #333;\n    margin-bottom: 0.5rem;\n}\n\n.contact-form input,\n.contact-form textarea {\n    font-size: 1.6rem;\n    padding: 0.75rem;\n    margin-bottom: 1rem;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n}\n\n.contact-form textarea {\n    height: 200px;\n    resize: vertical;\n}\n\n.contact-form button {\n    font-size: 1.6rem;\n    padding: 0.75rem;\n    border: none;\n    border-radius: 4px;\n    background-color: #4CAF50;\n    color: #fff;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n}\n\n.contact-form button:hover {\n    background-color: #45a049;\n}\n\n\n/* Checkout Page Styles */\n.checkout__container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n    max-width: 800px;\n    margin: auto;\n}\n\n.checkout__container h1 {\n    font-size: 3rem;\n    color: #333;\n    margin-bottom: 2rem;\n}\n\n.checkout__container form {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    max-width: 600px;\n}\n\n.checkout__container label {\n    font-size: 1.6rem;\n    color: #333;\n    margin-bottom: 0.5rem;\n}\n\n.checkout__container input,\n.checkout__container select {\n    font-size: 1.6rem;\n    padding: 0.5rem;\n    margin-bottom: 1rem;\n    border: 1px solid #ddd;\n    border-radius: 4px;\n}\n\n.checkout__container button {\n    background-color: #4CAF50;\n    color: white;\n    padding: 1rem;\n    border: none;\n    cursor: pointer;\n    font-size: 1.6rem;\n    border-radius: 5px;\n    transition: background-color 0.3s ease;\n}\n\n.checkout__container button:hover {\n    background-color: #45a049;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/checkout.js":
/*!************************************!*\
  !*** ./src/components/checkout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkout)\n/* harmony export */ });\n// checkout.js\nfunction checkout() {\n    const component = document.createElement('div');\n    component.classList.add('checkout__container');\n\n    const header = document.createElement('h1');\n    header.textContent = 'Checkout';\n    component.appendChild(header);\n\n    const summary = document.createElement('p');\n    summary.textContent = 'Your order summary and payment options will be displayed here.';\n    component.appendChild(summary);\n\n    // Add additional checkout details, form elements, etc. here\n    const form = document.createElement('form');\n\n    const nameLabel = document.createElement('label');\n    nameLabel.textContent = 'Name:';\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.required = true;\n    form.appendChild(nameLabel);\n    form.appendChild(nameInput);\n\n    const addressLabel = document.createElement('label');\n    addressLabel.textContent = 'Address:';\n    const addressInput = document.createElement('input');\n    addressInput.type = 'text';\n    addressInput.required = true;\n    form.appendChild(addressLabel);\n    form.appendChild(addressInput);\n\n    const paymentLabel = document.createElement('label');\n    paymentLabel.textContent = 'Payment Method:';\n    const paymentSelect = document.createElement('select');\n    const option1 = document.createElement('option');\n    option1.value = 'credit';\n    option1.textContent = 'Credit Card';\n    const option2 = document.createElement('option');\n    option2.value = 'paypal';\n    option2.textContent = 'PayPal';\n    paymentSelect.appendChild(option1);\n    paymentSelect.appendChild(option2);\n    form.appendChild(paymentLabel);\n    form.appendChild(paymentSelect);\n\n    const submitButton = document.createElement('button');\n    submitButton.textContent = 'Place Order';\n    submitButton.type = 'submit';\n    submitButton.classList.add('btn');\n    form.appendChild(submitButton);\n\n    form.addEventListener('submit', (e) => {\n        e.preventDefault();\n        alert('Order placed successfully!');\n        window.location.href = 'index.html'; // Redirect to home or another page after submission\n    });\n\n    component.appendChild(form);\n\n    return component;\n}\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/components/checkout.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact() {\n    const component = document.createElement('div');\n    component.classList.add('contact__container');\n\n    const header = document.createElement('h1');\n    header.textContent = 'Contact Us';\n    component.appendChild(header);\n\n    const form = document.createElement('form');\n    form.classList.add('contact-form');\n\n    const nameLabel = document.createElement('label');\n    nameLabel.textContent = 'Name:';\n    nameLabel.setAttribute('for', 'name');\n    form.appendChild(nameLabel);\n\n    const nameInput = document.createElement('input');\n    nameInput.type = 'text';\n    nameInput.id = 'name';\n    nameInput.name = 'name';\n    nameInput.required = true;\n    form.appendChild(nameInput);\n\n    const emailLabel = document.createElement('label');\n    emailLabel.textContent = 'Email:';\n    emailLabel.setAttribute('for', 'email');\n    form.appendChild(emailLabel);\n\n    const emailInput = document.createElement('input');\n    emailInput.type = 'email';\n    emailInput.id = 'email';\n    emailInput.name = 'email';\n    emailInput.required = true;\n    form.appendChild(emailInput);\n\n    const messageLabel = document.createElement('label');\n    messageLabel.textContent = 'Message:';\n    messageLabel.setAttribute('for', 'message');\n    form.appendChild(messageLabel);\n\n    const messageTextarea = document.createElement('textarea');\n    messageTextarea.id = 'message';\n    messageTextarea.name = 'message';\n    messageTextarea.required = true;\n    form.appendChild(messageTextarea);\n\n    const submitButton = document.createElement('button');\n    submitButton.type = 'submit';\n    submitButton.textContent = 'Send';\n    submitButton.classList.add('btn');\n    form.appendChild(submitButton);\n\n    component.appendChild(form);\n\n    return component;\n}\n\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/components/menu.js\");\n/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout */ \"./src/components/checkout.js\");\n/* harmony import */ var _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/burger.jpg */ \"./src/assets/burger.jpg\");\n/* harmony import */ var _assets_pasta1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/pasta1.jpg */ \"./src/assets/pasta1.jpg\");\n\n\n\n\n\nfunction home() {\n    const component = document.createElement(\"div\");\n    component.classList.add(\"main__container\");\n\n    // Slideshow background container\n    const slideshowContainer = document.createElement(\"div\");\n    slideshowContainer.classList.add(\"slideshow-container\");\n\n    const images = [\n        { src: _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_2__, text: \"Delicious Burger\" },\n        { src: _assets_pasta1_jpg__WEBPACK_IMPORTED_MODULE_3__, text: \"Tasty Pasta\" }\n    ];\n\n    images.forEach(({ src, text }) => {\n        const slide = document.createElement(\"div\");\n        slide.classList.add(\"mySlides\");\n\n        const img = document.createElement(\"img\");\n        img.src = src;\n        img.classList.add(\"slide-image\");\n\n        const textOverlay = document.createElement(\"div\");\n        textOverlay.classList.add(\"slide-text\");\n        textOverlay.textContent = text;\n\n        slide.appendChild(img);\n        slide.appendChild(textOverlay);\n        slideshowContainer.appendChild(slide);\n    });\n\n    // Append the slideshow continer to the body to act as a background\n    document.querySelector('#content').appendChild(slideshowContainer);\n\n    // Content that stays on top of the slideshow\n    const header = document.createElement(\"h1\");\n    header.textContent = \"Welcome to G'sK\";\n    component.appendChild(header);\n\n    const para = document.createElement(\"p\");\n    para.classList.add(\"intro\");\n    para.textContent = \"Experience the finest dining with our exquisite menu options. Enjoy a culinary journey that will tantalize your taste buds.\";\n    component.appendChild(para);\n\n\n    const button_container = document.createElement(\"div\");\n    button_container.classList.add(\"btn-container\");\n    \n\n\n    const showMoreButton = document.createElement(\"button\");\n    showMoreButton.textContent = \"Show More\";\n    showMoreButton.classList.add(\"btn\");\n    showMoreButton.addEventListener('click', () => loadContent(_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    button_container.appendChild(showMoreButton);\n\n    const placeOrderButton = document.createElement(\"button\");\n    placeOrderButton.textContent = \"Place Order\";\n    placeOrderButton.classList.add(\"btn\");\n    placeOrderButton.addEventListener('click', () => loadContent(_checkout__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\n    button_container.appendChild(placeOrderButton);\n\n    component.appendChild(button_container);\n\n     // Append the main content after adding the slideshow\n     document.querySelector('#content').appendChild(component);\n\n    // Ensure the showSlides function is called after the slides are created\n    setTimeout(showSlides, 100);\n\n    return component;\n}\n\n\nfunction loadContent(pageFunction) {\n    const content = document.querySelector('#content');\n    if (content) {\n        content.innerHTML = ''; // Clear existing content\n        content.appendChild(pageFunction()); // Load new content\n    } else {\n        console.error('No element with id \"content\" found.');\n    }\n}\n\n\n\nfunction showSlides() {\n    let slideIndex = 0;\n    const slides = document.querySelectorAll('.mySlides');\n\n    function displaySlides() {\n        slides.forEach((slide) => {\n            slide.style.display = 'none';\n        });\n\n        slideIndex++;\n        if (slideIndex > slides.length) { \n            slideIndex = 1; \n        }\n        slides[slideIndex - 1].style.display = 'block';\n    }\n\n    displaySlides();  // Initial display\n    setInterval(displaySlides, 3000);  // Change image every 3 seconds\n}\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/components/home.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _assets_pizza1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/pizza1.jpg */ \"./src/assets/pizza1.jpg\");\n/* harmony import */ var _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/burger.jpg */ \"./src/assets/burger.jpg\");\n/* harmony import */ var _assets_pasta1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/pasta1.jpg */ \"./src/assets/pasta1.jpg\");\n\n\n\n\n\n\nfunction menu() {\n    const component = document.createElement('div');\n    component.classList.add('menu__container');\n\n    const header = document.createElement('h1');\n    header.textContent = 'Our Menu';\n    component.appendChild(header);\n\n    const menuItems = [\n        { name: 'Margherita Pizza', description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.', price: '$12.99', image: _assets_pizza1_jpg__WEBPACK_IMPORTED_MODULE_0__ },\n        { name: 'Cheeseburger', description: 'Juicy beef burger with cheddar cheese, lettuce, and tomato.', price: '$10.99', image: _assets_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ },\n        { name: 'Pasta Alfredo', description: 'Creamy Alfredo pasta with Parmesan cheese and garlic.', price: '$14.99', image: _assets_pasta1_jpg__WEBPACK_IMPORTED_MODULE_2__ }\n    ];\n\n    menuItems.forEach(item => {\n        const menuItem = document.createElement('div');\n        menuItem.classList.add('menu-item');\n\n        const img = document.createElement('img');\n        img.src = item.image;\n        img.alt = item.name;\n        img.classList.add('menu-item-image');\n\n        const itemInfo = document.createElement('div');\n        itemInfo.classList.add('menu-item-info');\n\n        const name = document.createElement('h2');\n        name.textContent = item.name;\n\n        const description = document.createElement('p');\n        description.textContent = item.description;\n\n        const price = document.createElement('p');\n        price.classList.add('price');\n        price.textContent = item.price;\n\n        itemInfo.appendChild(name);\n        itemInfo.appendChild(description);\n        itemInfo.appendChild(price);\n\n        menuItem.appendChild(img);\n        menuItem.appendChild(itemInfo);\n\n        component.appendChild(menuItem);\n    });\n\n    return component;\n}\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/components/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home */ \"./src/components/home.js\");\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu */ \"./src/components/menu.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n\n\n\n\n\nconst content = document.querySelector('#content');\n\nconst loadContent = (component) => {\n    content.textContent = '';  // Clear previous content\n    content.appendChild(component());\n};\n\n// Load home content by default\nloadContent(_components_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\ndocument.querySelector('#home-button').addEventListener('click', () => loadContent(_components_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\ndocument.querySelector('#menu-button').addEventListener('click', () => loadContent(_components_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\ndocument.querySelector('#contact-button').addEventListener('click', () => loadContent(_components_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"]));\n\n\n//# sourceURL=webpack://project-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/assets/burger.jpg":
/*!*******************************!*\
  !*** ./src/assets/burger.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3de1c2a975f5d7a47ca8.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/burger.jpg?");

/***/ }),

/***/ "./src/assets/pasta1.jpg":
/*!*******************************!*\
  !*** ./src/assets/pasta1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1bb8525a48476dbc3a34.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/pasta1.jpg?");

/***/ }),

/***/ "./src/assets/pizza1.jpg":
/*!*******************************!*\
  !*** ./src/assets/pizza1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8e59e3eeaae832726c8.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page/./src/assets/pizza1.jpg?");

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