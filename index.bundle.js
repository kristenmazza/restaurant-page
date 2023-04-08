"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  height: 100vh;\n  max-width: 100%;\n  font-family: Roboto, Monaco, Cambria;\n  margin: 0px;\n  overflow-x: hidden;\n}\n\n#content {\n  color: #3a3c3e;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  max-width: 100%;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  box-shadow: 0 3px 10px #505254;\n  z-index: 1;\n}\n\n.logo {\n  flex: 0;\n  max-width: 300px;\n  height: auto;\n  padding: 0px 20px;\n}\n\n.tab-container {\n  display: flex;\n  justify-content: end;\n  padding: 20px 30px;\n  flex: 1;\n  gap: 50px;\n  max-width: 100%;\n}\n\n.tab-content-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1 0 auto;\n  max-width: 100%;\n  max-height: 100%;\n  color: rgb(60, 60, 60);\n}\n\n.main-image {\n  border-bottom: 4px solid rgb(197 216 211);\n  width: 100%;\n}\n\n.copy {\n  max-width: 100%;\n  font-size: 1.3rem;\n  padding-bottom: 30px;\n}\n\n.headline {\n  font-weight: 500;\n  font-size: 2rem;\n  letter-spacing: .05rem;\n}\n\n.pre {\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n\n.copy-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem 7rem;\n  max-width: 70%;\n  text-align: center;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  color: rgb(255, 255, 255);\n  padding: 2rem 6rem;\n  gap: 1rem;\n  flex-shrink: 0;\n  background-color: rgb(60, 60, 60);\n  font-size: 0.8rem;\n}\n\n.component-location,\n.component-hours,\n.component-contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  letter-spacing: .05rem;\n  font-weight: 400;\n  flex: 1 0 150px;\n}\n\n.component-location {\n  justify-self: self-end;\n}\n\n.footer-text {\n  font-weight: 300;\n}\n\n.divider {\n  font-weight: bold;\n  font-size: 1rem;\n  color: rgb(197, 216, 211);\n}\n\n.buttons {\n  background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  display: inline-block;\n  position: relative;\n  color: rgb(60, 60, 60);\n  font-size: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.05rem;\n}\n\n.buttons::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 3px;\n  bottom: -10px;\n  left: 0;\n  background-color: rgb(173, 65, 54);\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n\n.buttons:hover::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.buttons:hover {\n  color: rgb(173, 65, 54);\n}\n\n.menu-container, .contact-container {\n  width: 100%;\n  background-color: rgb(77, 111, 144);\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 3rem;\n  flex-grow: 1;\n  color: white;\n  font-weight: 500;\n  text-align: center;\n  padding-bottom: 30px;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\nh2 {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.menu-items {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 30px;\n  justify-content: center;\n}\n\n.menu-item {\n  background-color: white;\n  color: rgb(60, 60, 60);\n  border-radius: 10px;\n  box-shadow: 0 0px 5px #505254;\n  padding: 20px;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.contact-form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  width: 70%;\n  margin: 3rem;\n  border-radius: 10px;\n  box-shadow: 0 0px 5px #505254;\n  padding: 20px;\n}\n\n.contact-details {\n  margin: 0;\n  font-weight: 400;\n  letter-spacing: 0.05rem;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  padding: 30px 0px;\n}\n\ninput[type='text'],\ninput[type='email'],\ntextarea {\n  width: 300px;\n  height: 25px;\n  font-family: inherit;\n  padding-left: 5px;\n  padding-right: 5px;\n  border: solid 1px rgb(60, 60, 60);\n  border-radius: 4px;\n  outline: none;\n  font-size: 1rem;\n}\n\ntextarea {\n  height: 200px;\n  margin-bottom: 15px;\n}\n\ninput:focus {\n  border: 1px solid rgb(101, 142, 182);\n}\n\ninput:invalid {\n  border: 1px solid rgb(255, 116, 116);\n  box-shadow: 0px 2px 4px rgb(199, 199, 199);\n}\n\nlabel {\n  font-size: 0.8rem;\n  color: rgb(60, 60, 60);\n  font-weight: 500;\n  letter-spacing: 0.05em;\n  padding: 15px 0px 3px;\n}\n\nbutton[type='submit'] {\n  background-color: rgb(173, 65, 54);\n  color: rgb(255, 255, 255);\n  padding: 10px 30px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  border-radius: 5px;\n  border: none;\n}\n\nbutton[type='submit']:hover {\n  background-color: rgb(183, 79, 67);\n  cursor: pointer;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n  height: 100vh;\n  max-width: 100%;\n  font-family: Roboto, Monaco, Cambria;\n  margin: 0px;\n  overflow-x: hidden;\n}\n\n#content {\n  color: #3a3c3e;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  max-width: 100%;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  box-shadow: 0 3px 10px #505254;\n  z-index: 1;\n}\n\n.logo {\n  flex: 0;\n  max-width: 300px;\n  height: auto;\n  padding: 0px 20px;\n}\n\n.tab-container {\n  display: flex;\n  justify-content: end;\n  padding: 20px 30px;\n  flex: 1;\n  gap: 50px;\n  max-width: 100%;\n}\n\n.tab-content-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 1 0 auto;\n  max-width: 100%;\n  max-height: 100%;\n  color: rgb(60, 60, 60);\n}\n\n.main-image {\n  border-bottom: 4px solid rgb(197 216 211);\n  width: 100%;\n}\n\n.copy {\n  max-width: 100%;\n  font-size: 1.3rem;\n  padding-bottom: 30px;\n}\n\n.headline {\n  font-weight: 500;\n  font-size: 2rem;\n  letter-spacing: .05rem;\n}\n\n.pre {\n  overflow-x: auto;\n  white-space: pre-wrap;\n  white-space: -moz-pre-wrap;\n  white-space: -pre-wrap;\n  white-space: -o-pre-wrap;\n  word-wrap: break-word;\n}\n\n.copy-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2rem 7rem;\n  max-width: 70%;\n  text-align: center;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: flex-start;\n  color: rgb(255, 255, 255);\n  padding: 2rem 6rem;\n  gap: 1rem;\n  flex-shrink: 0;\n  background-color: rgb(60, 60, 60);\n  font-size: 0.8rem;\n}\n\n.component-location,\n.component-hours,\n.component-contact {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  letter-spacing: .05rem;\n  font-weight: 400;\n  flex: 1 0 150px;\n}\n\n.component-location {\n  justify-self: self-end;\n}\n\n.footer-text {\n  font-weight: 300;\n}\n\n.divider {\n  font-weight: bold;\n  font-size: 1rem;\n  color: rgb(197, 216, 211);\n}\n\n.buttons {\n  background: none;\n\tcolor: inherit;\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n  display: inline-block;\n  position: relative;\n  color: rgb(60, 60, 60);\n  font-size: 1.5rem;\n  font-weight: 500;\n  letter-spacing: 0.05rem;\n}\n\n.buttons::after {\n  content: '';\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 3px;\n  bottom: -10px;\n  left: 0;\n  background-color: rgb(173, 65, 54);\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n\n.buttons:hover::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.buttons:hover {\n  color: rgb(173, 65, 54);\n}\n\n.menu-container, .contact-container {\n  width: 100%;\n  background-color: rgb(77, 111, 144);\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  width: 80%;\n  margin: 3rem;\n  flex-grow: 1;\n  color: white;\n  font-weight: 500;\n  text-align: center;\n  padding-bottom: 30px;\n}\n\nh1 {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\nh2 {\n  font-size: 2rem;\n  font-weight: 500;\n}\n\n.menu-items {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 300px);\n  gap: 30px;\n  justify-content: center;\n}\n\n.menu-item {\n  background-color: white;\n  color: rgb(60, 60, 60);\n  border-radius: 10px;\n  box-shadow: 0 0px 5px #505254;\n  padding: 20px;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1rem;\n  font-weight: 400;\n}\n\n.contact-form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: white;\n  width: 70%;\n  margin: 3rem;\n  border-radius: 10px;\n  box-shadow: 0 0px 5px #505254;\n  padding: 20px;\n}\n\n.contact-details {\n  margin: 0;\n  font-weight: 400;\n  letter-spacing: 0.05rem;\n}\n\n.contact-form {\n  display: flex;\n  flex-direction: column;\n  padding: 30px 0px;\n}\n\ninput[type='text'],\ninput[type='email'],\ntextarea {\n  width: 300px;\n  height: 25px;\n  font-family: inherit;\n  padding-left: 5px;\n  padding-right: 5px;\n  border: solid 1px rgb(60, 60, 60);\n  border-radius: 4px;\n  outline: none;\n  font-size: 1rem;\n}\n\ntextarea {\n  height: 200px;\n  margin-bottom: 15px;\n}\n\ninput:focus {\n  border: 1px solid rgb(101, 142, 182);\n}\n\ninput:invalid {\n  border: 1px solid rgb(255, 116, 116);\n  box-shadow: 0px 2px 4px rgb(199, 199, 199);\n}\n\nlabel {\n  font-size: 0.8rem;\n  color: rgb(60, 60, 60);\n  font-weight: 500;\n  letter-spacing: 0.05em;\n  padding: 15px 0px 3px;\n}\n\nbutton[type='submit'] {\n  background-color: rgb(173, 65, 54);\n  color: rgb(255, 255, 255);\n  padding: 10px 30px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  border-radius: 5px;\n  border: none;\n}\n\nbutton[type='submit']:hover {\n  background-color: rgb(183, 79, 67);\n  cursor: pointer;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentContactContent": () => (/* binding */ componentContactContent),
/* harmony export */   "contactBtn": () => (/* binding */ contactBtn)
/* harmony export */ });
function componentContactButton() {
    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'CONTACT';
    contactBtn.classList.add('buttons');

    return contactBtn;
}

const contactBtn = componentContactButton();

function componentContactContainer() {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    return contactContainer;
}

function componentContactFormContainer() {
    const contactFormContainer = document.createElement('div');
    contactFormContainer.classList.add('contact-form-container');

    return contactFormContainer;
}

function componentContactHeader() {
    const contactHeader = document.createElement('h2');
    contactHeader.classList.add('contact-header');
    contactHeader.textContent = 'CONTACT US'

    return contactHeader;
}

function componentPhoneNumber() {
    const phoneNumber = document.createElement('p');
    phoneNumber.classList.add('contact-details');
    phoneNumber.textContent = 'PHONE: 555-5555-FOOD';

    return phoneNumber;
}

function componentEmail() {
    const email = document.createElement('p');
    email.classList.add('contact-details');
    email.textContent = 'EMAIL: info@restaurant.com';

    return email;
}

function componentContactForm() {
    const contactForm = document.createElement('form');
    contactForm.setAttribute('method', 'post');
    contactForm.setAttribute('action', '');
    contactForm.classList.add('contact-form');

    return contactForm;
}

function componentFormInputName() {
    const formInputName = document.createElement('input');
    formInputName.setAttribute('type', 'text');
    formInputName.setAttribute('id', 'name');
    formInputName.setAttribute('name', 'name');

    return formInputName;
}

function componentFormLabelName() {
    const formLabelName = document.createElement('label');
    formLabelName.setAttribute('for', 'name');
    formLabelName.innerHTML = 'FULL NAME';

    return formLabelName;
}

function componentFormInputEmail() {
    const formInputEmail = document.createElement('input');
    formInputEmail.setAttribute('type', 'email');
    formInputEmail.setAttribute('id', 'email');
    formInputEmail.setAttribute('name', 'email');

    return formInputEmail;
}

function componentFormLabelEmail() {
    const formLabelEmail = document.createElement('label');
    formLabelEmail.setAttribute('for', 'email');
    formLabelEmail.innerHTML = 'EMAIL ADDRESS';

    return formLabelEmail;
}

function componentFormInputMessage() {
    const formInputMessage = document.createElement('textarea');
    formInputMessage.setAttribute('id', 'message');
    formInputMessage.setAttribute('name', 'message');

    return formInputMessage;
}

function componentFormLabelMessage() {
    const formLabelMessage = document.createElement('label');
    formLabelMessage.setAttribute('for', 'message');
    formLabelMessage.innerHTML = 'MESSAGE';

    return formLabelMessage;
}

function componentSubmitButton() {
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'SUBMIT';

    return submitButton;
}

function componentContactContent() {
    const contactContainer = componentContactContainer();
    const contactFormContainer = componentContactFormContainer();
    const contactForm = componentContactForm();

    contactContainer.appendChild(contactFormContainer);
    contactFormContainer.appendChild(componentContactHeader());
    contactFormContainer.appendChild(componentPhoneNumber());
    contactFormContainer.appendChild(componentEmail());
    contactFormContainer.appendChild(contactForm);
    contactForm.appendChild(componentFormLabelName())
    contactForm.appendChild(componentFormInputName());
    contactForm.appendChild(componentFormLabelEmail())
    contactForm.appendChild(componentFormInputEmail());
    contactForm.appendChild(componentFormLabelMessage())
    contactForm.appendChild(componentFormInputMessage());
    contactForm.appendChild(componentSubmitButton());

    return [contactContainer];
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentHomeContent": () => (/* binding */ componentHomeContent),
/* harmony export */   "homeBtn": () => (/* binding */ homeBtn)
/* harmony export */ });
/* harmony import */ var _overcookedheader_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overcookedheader.png */ "./src/overcookedheader.png");


function componentHomeButton() {
  const homeBtn = document.createElement("button");
  homeBtn.textContent = "HOME";
  homeBtn.classList.add("buttons");

  return homeBtn;
}

const homeBtn = componentHomeButton();

function componentCopyContainer() {
  const copyContainer = document.createElement("div");
  copyContainer.classList.add("copy-container");

  return copyContainer;
}

function componentCopy() {
  const copy = document.createElement("div");
  copy.classList.add("copy", "pre");
  copy.textContent = `Welcome to Overcooked Restaurant, where culinary chaos reigns supreme! If you're looking for an exciting dining experience that's sure to satisfy your appetite for adventure, look no further than Overcooked. \n\nWith a menu that's constantly changing and evolving, there's always something new to try at Overcooked. Whether you're in the mood for classic comfort food or innovative fusion cuisine, our talented chefs are always pushing the boundaries of what's possible. \n\nSo gather your friends and family, and join us for a meal that's sure to be an unforgettable experience. At Overcooked Restaurant, the heat is always on and the excitement is never-ending!`;

  return copy;
}

function componentHeadline() {
  const headline = document.createElement("h1");
  headline.textContent = "Welcome to Overcooked Restaurant!";
  headline.classList.add("headline");

  return headline;
}

function componentImage() {
  const mainImage = new Image();
  mainImage.src = _overcookedheader_png__WEBPACK_IMPORTED_MODULE_0__;
  mainImage.classList.add("main-image");

  return mainImage;
}

function componentHomeContent() {
  const copyContainer = componentCopyContainer();
  copyContainer.appendChild(componentHeadline());
  copyContainer.appendChild(componentCopy());

  return [componentImage(), copyContainer];
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-load */ "./src/page-load.js");





(0,_page_load__WEBPACK_IMPORTED_MODULE_3__.init)();

_page_load__WEBPACK_IMPORTED_MODULE_3__.tabContainer.appendChild(_home__WEBPACK_IMPORTED_MODULE_1__.homeBtn);
_page_load__WEBPACK_IMPORTED_MODULE_3__.tabContainer.appendChild(_menu__WEBPACK_IMPORTED_MODULE_2__.menuBtn);
_page_load__WEBPACK_IMPORTED_MODULE_3__.tabContainer.appendChild(_contact__WEBPACK_IMPORTED_MODULE_0__.contactBtn);

_home__WEBPACK_IMPORTED_MODULE_1__.homeBtn.addEventListener('click', () => {
    // Spread operator adds image and copy as children to tabContentContainer.
    // Spread operator allows you to add a dynamic number of parameters based on the length of the
    // returned array
    _page_load__WEBPACK_IMPORTED_MODULE_3__.tabContentContainer.replaceChildren(...(0,_home__WEBPACK_IMPORTED_MODULE_1__.componentHomeContent)());
});

_menu__WEBPACK_IMPORTED_MODULE_2__.menuBtn.addEventListener('click', () => {
    _page_load__WEBPACK_IMPORTED_MODULE_3__.tabContentContainer.replaceChildren(...(0,_menu__WEBPACK_IMPORTED_MODULE_2__.componentMenuContent)());
});

_contact__WEBPACK_IMPORTED_MODULE_0__.contactBtn.addEventListener('click', () => {
    _page_load__WEBPACK_IMPORTED_MODULE_3__.tabContentContainer.replaceChildren(...(0,_contact__WEBPACK_IMPORTED_MODULE_0__.componentContactContent)());
});

_page_load__WEBPACK_IMPORTED_MODULE_3__.tabContentContainer.replaceChildren(...(0,_home__WEBPACK_IMPORTED_MODULE_1__.componentHomeContent)());



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentMenuContent": () => (/* binding */ componentMenuContent),
/* harmony export */   "menuBtn": () => (/* binding */ menuBtn)
/* harmony export */ });
/* harmony import */ var _burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger.png */ "./src/burger.png");
/* harmony import */ var _meat_burrito_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meat-burrito.png */ "./src/meat-burrito.png");
/* harmony import */ var _mushroom_burrito_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mushroom-burrito.png */ "./src/mushroom-burrito.png");
/* harmony import */ var _sushi_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sushi.png */ "./src/sushi.png");
/* harmony import */ var _salad_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salad.png */ "./src/salad.png");
/* harmony import */ var _cake_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cake.png */ "./src/cake.png");







function componentMenuButton() {
    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'MENU';
    menuBtn.classList.add('buttons');

    return menuBtn;
}

const menuBtn = componentMenuButton();

function componentMenuContainer() {
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    return menuContainer;
}

function componentMenuItem(menuImage, title, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodImage = new Image();
    foodImage.src = menuImage;
    foodImage.classList.add('food-image');

    const foodTitle = document.createElement('h2');
    foodTitle.textContent = title;
    foodTitle.classList.add('food-title');

    const foodDescription = document.createElement('p');
    foodDescription.textContent = description;
    foodDescription.classList.add('food-description');

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodTitle);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function componentMenuHeader() {
    const menuHeader = document.createElement('h1');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = `CHEF'S SPECIALS`;

    return menuHeader;
}

function componentMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    return menu;
}

function componentMenuItems() {
    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');
    menuItems.appendChild(componentMenuItem(_burger_png__WEBPACK_IMPORTED_MODULE_0__, 'Burger', `Our juicy beef patty is topped with melted cheddar cheese, crispy bacon, lettuce, tomato, and our secret sauce that's bursting with flavor. Served on a toasted sesame seed bun with a side of golden fries, this burger is the perfect fuel for your next culinary adventure.`));
    menuItems.appendChild(componentMenuItem(_meat_burrito_png__WEBPACK_IMPORTED_MODULE_1__, 'Meat Burrito', `This mouth-watering burrito is packed with a blend of perfectly seasoned meat chunks, rice, and melted cheese, all wrapped in a warm flour tortilla. Served with a generous dollop of our house-made guacamole and a side of crispy tortilla chips, this burrito is bursting with bold flavors and textures.`));
    menuItems.appendChild(componentMenuItem(_mushroom_burrito_png__WEBPACK_IMPORTED_MODULE_2__, 'Mushroom Burrito', `For all the vegan chefs out there, this burrito is a meatless masterpiece that's bursting with flavor. Stuffed with sautéed mushrooms, onions, pinto beans, and rice, all wrapped in a warm flour tortilla, this burrito is the perfect blend of hearty and healthy. Served with a dollop of our house-made salsa and fresh tortilla chips.`));
    menuItems.appendChild(componentMenuItem(_sushi_png__WEBPACK_IMPORTED_MODULE_3__, 'Sushi', `Roll up your sleeves and get ready to experience a fusion of Japanese and Western cuisine with our signature sushi roll. Made with perfectly cooked sushi rice, tender strips of seared beef, avocado, and cucumber, and finished off with a drizzle of our special sauce, this sushi roll is a delicious and creative twist on a classic dish.`));
    menuItems.appendChild(componentMenuItem(_salad_png__WEBPACK_IMPORTED_MODULE_4__, 'Garden Salad', `For those who want to keep it light and healthy, our garden salad is the perfect choice. Made with a blend of fresh greens, juicy cherry tomatoes, crunchy cucumbers, and shredded carrots, this salad is topped with croutons and your choice of dressing. `));
    menuItems.appendChild(componentMenuItem(_cake_png__WEBPACK_IMPORTED_MODULE_5__, 'Chocolate Cake', `If you have a sweet tooth, this decadent chocolate cake is the perfect way to satisfy your cravings. Rich, moist, and loaded with intense chocolate flavor, this cake is a chocoholic's dream come true. Served with a scoop of creamy vanilla ice cream and drizzled with warm chocolate sauce, this dessert is the perfect way to end your meal on a high note.`));

    return menuItems;
}

function componentMenuContent() {
    const menuContainer = componentMenuContainer();
    const menu = componentMenu();

    menuContainer.appendChild(menu);
    menu.appendChild(componentMenuHeader());
    menu.appendChild(componentMenuItems());

    return [menuContainer];
}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "tabContainer": () => (/* binding */ tabContainer),
/* harmony export */   "tabContentContainer": () => (/* binding */ tabContentContainer)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _overcookedlogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overcookedlogo.png */ "./src/overcookedlogo.png");



function componentContent() {
  const content = document.createElement('div');
  content.setAttribute('id', 'content');

  return content;
}

function componentHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  return header;
}

function componentName() {
  const logo = new Image();
  logo.src = _overcookedlogo_png__WEBPACK_IMPORTED_MODULE_1__;
  logo.classList.add('logo');

  return logo;
}

function componentTabContainer() {
  const tabContainer = document.createElement('div');
  tabContainer.classList.add('tab-container');

  return tabContainer;
}

function componentTabContentContainer() {
  const tabContentContainer = document.createElement('div');
  tabContentContainer.classList.add('tab-content-container');

  return tabContentContainer;
}

function componentFooter() {
  const footer = document.createElement('div');
  footer.classList.add('footer');

  return footer;
}

function componentFooterLocation() {
  const footerLocation = document.createElement('div');
   footerLocation.textContent = 'LOCATION';
   footerLocation.classList.add('component-location');

   return footerLocation;
}

function componentFooterLocationText() {
  const footerLocationText = document.createElement('div');
  footerLocationText.textContent = `123 Burnt Boulevard,\nKitchen Kingdom`;
  footerLocationText.classList.add('pre', 'footer-text');

  return footerLocationText;
}

function componentFooterHours() {
  const footerHours = document.createElement('div');
  footerHours.textContent = 'HOURS';
  footerHours.classList.add('component-hours');

  return footerHours;
}

function componentFooterHoursText() {
  const footerContactText = document.createElement('div');
  footerContactText.textContent = `TUESDAY - SUNDAY: 11am - 10pm\nMONDAY: Closed (Time to chop more onions!)`;
  footerContactText.classList.add('pre', 'footer-text');

  return footerContactText;
}

function componentFooterContact() {
  const footerContact = document.createElement('div');
  footerContact.textContent = 'CONTACT';
  footerContact.classList.add('component-contact');

  return footerContact;
}

function componentFooterContactText() {
  const footerContactText = document.createElement('div');
  footerContactText.textContent = `PHONE: 555-5555-FOOD\nEMAIL: info@restaurant.com`;
  footerContactText.classList.add('pre', 'footer-text');

  return footerContactText;
}

function componentDivider() {
  const divider = document.createElement('div');
  divider.textContent = '—';
  divider.classList.add('divider');

  return divider;
}

const tabContainer = componentTabContainer();
const tabContentContainer = componentTabContentContainer();
const name = componentName();

function init() {
  const content = componentContent();
  const header = componentHeader();
  const footer = componentFooter();
  const footerLocation = componentFooterLocation();
  const footerHours = componentFooterHours();
  const footerContact = componentFooterContact();

  document.body.appendChild(content);
  content.appendChild(header);
  header.appendChild(componentName());
  header.appendChild(tabContainer);
  content.appendChild(tabContentContainer);

  content.appendChild(footer);
  footer.appendChild(footerLocation);
  footer.appendChild(footerHours);
  footer.appendChild(footerContact);
  footerLocation.appendChild(componentDivider());
  footerLocation.appendChild(componentFooterLocationText());
  footerHours.appendChild(componentDivider());
  footerHours.appendChild(componentFooterHoursText())
  footerContact.appendChild(componentDivider());
  footerContact.appendChild(componentFooterContactText());
}




/***/ }),

/***/ "./src/burger.png":
/*!************************!*\
  !*** ./src/burger.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "544b660c59061d0abaab.png";

/***/ }),

/***/ "./src/cake.png":
/*!**********************!*\
  !*** ./src/cake.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc9ca67a7fc125b78ce5.png";

/***/ }),

/***/ "./src/meat-burrito.png":
/*!******************************!*\
  !*** ./src/meat-burrito.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "369b47a99d923a5f1114.png";

/***/ }),

/***/ "./src/mushroom-burrito.png":
/*!**********************************!*\
  !*** ./src/mushroom-burrito.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27ef4e28854d138f26f8.png";

/***/ }),

/***/ "./src/overcookedheader.png":
/*!**********************************!*\
  !*** ./src/overcookedheader.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45232f004bf160320901.png";

/***/ }),

/***/ "./src/overcookedlogo.png":
/*!********************************!*\
  !*** ./src/overcookedlogo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29e795320fe2da4f21b3.png";

/***/ }),

/***/ "./src/salad.png":
/*!***********************!*\
  !*** ./src/salad.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dc2769fe04a0040fe154.png";

/***/ }),

/***/ "./src/sushi.png":
/*!***********************!*\
  !*** ./src/sushi.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c708fad28df502e7e25.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEs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ZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIE1vbmFjbywgQ2FtYnJpYTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBjb2xvcjogIzNhM2MzZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4ICM1MDUyNTQ7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmbGV4OiAwO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4udGFiLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxufVxcblxcbi5tYWluLWltYWdlIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2IoMTk3IDIxNiAyMTEpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb3B5IHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5oZWFkbGluZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNXJlbTtcXG59XFxuXFxuLnByZSB7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XFxuICB3aGl0ZS1zcGFjZTogLXByZS13cmFwO1xcbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uY29weS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbSA3cmVtO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZzogMnJlbSA2cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmNvbXBvbmVudC1sb2NhdGlvbixcXG4uY29tcG9uZW50LWhvdXJzLFxcbi5jb21wb25lbnQtY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogLjA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZsZXg6IDEgMCAxNTBweDtcXG59XFxuXFxuLmNvbXBvbmVudC1sb2NhdGlvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogcmdiKDE5NywgMjE2LCAyMTEpO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XFxufVxcblxcbi5idXR0b25zOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogLTEwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgNjUsIDU0KTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcXG59XFxuXFxuLmJ1dHRvbnM6aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcblxcbi5idXR0b25zOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTczLCA2NSwgNTQpO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIsIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgMTExLCAxNDQpO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDNyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzAwcHgpO1xcbiAgZ2FwOiAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMHB4IDVweCAjNTA1MjU0O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwcHggNXB4ICM1MDUyNTQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHggMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J10sXFxuaW5wdXRbdHlwZT0nZW1haWwnXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDYwLCA2MCwgNjApO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDEsIDE0MiwgMTgyKTtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAxMTYsIDExNik7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2IoMTk5LCAxOTksIDE5OSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgcGFkZGluZzogMTVweCAwcHggM3B4O1xcbn1cXG5cXG5idXR0b25bdHlwZT0nc3VibWl0J10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgNjUsIDU0KTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvblt0eXBlPSdzdWJtaXQnXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgzLCA3OSwgNjcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixzQkFBc0I7QUFD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ekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIE1vbmFjbywgQ2FtYnJpYTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBjb2xvcjogIzNhM2MzZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4ICM1MDUyNTQ7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmbGV4OiAwO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDBweCAyMHB4O1xcbn1cXG5cXG4udGFiLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBmbGV4OiAxO1xcbiAgZ2FwOiA1MHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxufVxcblxcbi5tYWluLWltYWdlIHtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2IoMTk3IDIxNiAyMTEpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jb3B5IHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi5oZWFkbGluZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC4wNXJlbTtcXG59XFxuXFxuLnByZSB7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XFxuICB3aGl0ZS1zcGFjZTogLXByZS13cmFwO1xcbiAgd2hpdGUtc3BhY2U6IC1vLXByZS13cmFwO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4uY29weS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMnJlbSA3cmVtO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZzogMnJlbSA2cmVtO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjAsIDYwLCA2MCk7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmNvbXBvbmVudC1sb2NhdGlvbixcXG4uY29tcG9uZW50LWhvdXJzLFxcbi5jb21wb25lbnQtY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZXR0ZXItc3BhY2luZzogLjA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZsZXg6IDEgMCAxNTBweDtcXG59XFxuXFxuLmNvbXBvbmVudC1sb2NhdGlvbiB7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xcbn1cXG5cXG4uZm9vdGVyLXRleHQge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLmRpdmlkZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogcmdiKDE5NywgMjE2LCAyMTEpO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiBpbmhlcml0O1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVyZW07XFxufVxcblxcbi5idXR0b25zOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICBoZWlnaHQ6IDNweDtcXG4gIGJvdHRvbTogLTEwcHg7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgNjUsIDU0KTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcXG59XFxuXFxuLmJ1dHRvbnM6aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcblxcbi5idXR0b25zOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2IoMTczLCA2NSwgNTQpO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIsIC5jb250YWN0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3NywgMTExLCAxNDQpO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDNyZW07XFxuICBmbGV4LWdyb3c6IDE7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tZW51LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzAwcHgpO1xcbiAgZ2FwOiAzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogcmdiKDYwLCA2MCwgNjApO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDAgMHB4IDVweCAjNTA1MjU0O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAwcHggNXB4ICM1MDUyNTQ7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uY29udGFjdC1kZXRhaWxzIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNXJlbTtcXG59XFxuXFxuLmNvbnRhY3QtZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMwcHggMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J10sXFxuaW5wdXRbdHlwZT0nZW1haWwnXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDYwLCA2MCwgNjApO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMDEsIDE0MiwgMTgyKTtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAxMTYsIDExNik7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2IoMTk5LCAxOTksIDE5OSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6IHJnYig2MCwgNjAsIDYwKTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbiAgcGFkZGluZzogMTVweCAwcHggM3B4O1xcbn1cXG5cXG5idXR0b25bdHlwZT0nc3VibWl0J10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MywgNjUsIDU0KTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvblt0eXBlPSdzdWJtaXQnXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTgzLCA3OSwgNjcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY29tcG9uZW50Q29udGFjdEJ1dHRvbigpIHtcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDT05UQUNUJztcbiAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKTtcblxuICAgIHJldHVybiBjb250YWN0QnRuO1xufVxuXG5leHBvcnQgY29uc3QgY29udGFjdEJ0biA9IGNvbXBvbmVudENvbnRhY3RCdXR0b24oKTtcblxuZnVuY3Rpb24gY29tcG9uZW50Q29udGFjdENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWNvbnRhaW5lcicpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbnRhY3RGb3JtQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RGb3JtQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDb250YWN0SGVhZGVyKCkge1xuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnRhY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1oZWFkZXInKTtcbiAgICBjb250YWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ0NPTlRBQ1QgVVMnXG5cbiAgICByZXR1cm4gY29udGFjdEhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50UGhvbmVOdW1iZXIoKSB7XG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1kZXRhaWxzJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnUEhPTkU6IDU1NS01NTU1LUZPT0QnO1xuXG4gICAgcmV0dXJuIHBob25lTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRFbWFpbCgpIHtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWRldGFpbHMnKTtcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9ICdFTUFJTDogaW5mb0ByZXN0YXVyYW50LmNvbSc7XG5cbiAgICByZXR1cm4gZW1haWw7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbnRhY3RGb3JtKCkge1xuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnRhY3RGb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgICBjb250YWN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcnKTtcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWZvcm0nKTtcblxuICAgIHJldHVybiBjb250YWN0Rm9ybTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Rm9ybUlucHV0TmFtZSgpIHtcbiAgICBjb25zdCBmb3JtSW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtSW5wdXROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZm9ybUlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICBmb3JtSW5wdXROYW1lLnNldEF0dHJpYnV0ZSgnbmFtZScsICduYW1lJyk7XG5cbiAgICByZXR1cm4gZm9ybUlucHV0TmFtZTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Rm9ybUxhYmVsTmFtZSgpIHtcbiAgICBjb25zdCBmb3JtTGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBmb3JtTGFiZWxOYW1lLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcbiAgICBmb3JtTGFiZWxOYW1lLmlubmVySFRNTCA9ICdGVUxMIE5BTUUnO1xuXG4gICAgcmV0dXJuIGZvcm1MYWJlbE5hbWU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1JbnB1dEVtYWlsKCkge1xuICAgIGNvbnN0IGZvcm1JbnB1dEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBmb3JtSW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgICBmb3JtSW5wdXRFbWFpbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsJyk7XG4gICAgZm9ybUlucHV0RW1haWwuc2V0QXR0cmlidXRlKCduYW1lJywgJ2VtYWlsJyk7XG5cbiAgICByZXR1cm4gZm9ybUlucHV0RW1haWw7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEZvcm1MYWJlbEVtYWlsKCkge1xuICAgIGNvbnN0IGZvcm1MYWJlbEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBmb3JtTGFiZWxFbWFpbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdlbWFpbCcpO1xuICAgIGZvcm1MYWJlbEVtYWlsLmlubmVySFRNTCA9ICdFTUFJTCBBRERSRVNTJztcblxuICAgIHJldHVybiBmb3JtTGFiZWxFbWFpbDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Rm9ybUlucHV0TWVzc2FnZSgpIHtcbiAgICBjb25zdCBmb3JtSW5wdXRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBmb3JtSW5wdXRNZXNzYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xuICAgIGZvcm1JbnB1dE1lc3NhZ2Uuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKTtcblxuICAgIHJldHVybiBmb3JtSW5wdXRNZXNzYWdlO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGb3JtTGFiZWxNZXNzYWdlKCkge1xuICAgIGNvbnN0IGZvcm1MYWJlbE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZvcm1MYWJlbE1lc3NhZ2Uuc2V0QXR0cmlidXRlKCdmb3InLCAnbWVzc2FnZScpO1xuICAgIGZvcm1MYWJlbE1lc3NhZ2UuaW5uZXJIVE1MID0gJ01FU1NBR0UnO1xuXG4gICAgcmV0dXJuIGZvcm1MYWJlbE1lc3NhZ2U7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFN1Ym1pdEJ1dHRvbigpIHtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTVUJNSVQnO1xuXG4gICAgcmV0dXJuIHN1Ym1pdEJ1dHRvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudENvbnRhY3RDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRhY3RDb250YWluZXIgPSBjb21wb25lbnRDb250YWN0Q29udGFpbmVyKCk7XG4gICAgY29uc3QgY29udGFjdEZvcm1Db250YWluZXIgPSBjb21wb25lbnRDb250YWN0Rm9ybUNvbnRhaW5lcigpO1xuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gY29tcG9uZW50Q29udGFjdEZvcm0oKTtcblxuICAgIGNvbnRhY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm1Db250YWluZXIpO1xuICAgIGNvbnRhY3RGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbXBvbmVudENvbnRhY3RIZWFkZXIoKSk7XG4gICAgY29udGFjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50UGhvbmVOdW1iZXIoKSk7XG4gICAgY29udGFjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50RW1haWwoKSk7XG4gICAgY29udGFjdEZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbXBvbmVudEZvcm1MYWJlbE5hbWUoKSlcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChjb21wb25lbnRGb3JtSW5wdXROYW1lKCkpO1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbXBvbmVudEZvcm1MYWJlbEVtYWlsKCkpXG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29tcG9uZW50Rm9ybUlucHV0RW1haWwoKSk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29tcG9uZW50Rm9ybUxhYmVsTWVzc2FnZSgpKVxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGNvbXBvbmVudEZvcm1JbnB1dE1lc3NhZ2UoKSk7XG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoY29tcG9uZW50U3VibWl0QnV0dG9uKCkpO1xuXG4gICAgcmV0dXJuIFtjb250YWN0Q29udGFpbmVyXTtcbn0iLCJpbXBvcnQgT3ZlcmNvb2tlZCBmcm9tIFwiLi9vdmVyY29va2VkaGVhZGVyLnBuZ1wiO1xuXG5mdW5jdGlvbiBjb21wb25lbnRIb21lQnV0dG9uKCkge1xuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgaG9tZUJ0bi50ZXh0Q29udGVudCA9IFwiSE9NRVwiO1xuICBob21lQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25zXCIpO1xuXG4gIHJldHVybiBob21lQnRuO1xufVxuXG5leHBvcnQgY29uc3QgaG9tZUJ0biA9IGNvbXBvbmVudEhvbWVCdXR0b24oKTtcblxuZnVuY3Rpb24gY29tcG9uZW50Q29weUNvbnRhaW5lcigpIHtcbiAgY29uc3QgY29weUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvcHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvcHktY29udGFpbmVyXCIpO1xuXG4gIHJldHVybiBjb3B5Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRDb3B5KCkge1xuICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29weS5jbGFzc0xpc3QuYWRkKFwiY29weVwiLCBcInByZVwiKTtcbiAgY29weS50ZXh0Q29udGVudCA9IGBXZWxjb21lIHRvIE92ZXJjb29rZWQgUmVzdGF1cmFudCwgd2hlcmUgY3VsaW5hcnkgY2hhb3MgcmVpZ25zIHN1cHJlbWUhIElmIHlvdSdyZSBsb29raW5nIGZvciBhbiBleGNpdGluZyBkaW5pbmcgZXhwZXJpZW5jZSB0aGF0J3Mgc3VyZSB0byBzYXRpc2Z5IHlvdXIgYXBwZXRpdGUgZm9yIGFkdmVudHVyZSwgbG9vayBubyBmdXJ0aGVyIHRoYW4gT3ZlcmNvb2tlZC4gXFxuXFxuV2l0aCBhIG1lbnUgdGhhdCdzIGNvbnN0YW50bHkgY2hhbmdpbmcgYW5kIGV2b2x2aW5nLCB0aGVyZSdzIGFsd2F5cyBzb21ldGhpbmcgbmV3IHRvIHRyeSBhdCBPdmVyY29va2VkLiBXaGV0aGVyIHlvdSdyZSBpbiB0aGUgbW9vZCBmb3IgY2xhc3NpYyBjb21mb3J0IGZvb2Qgb3IgaW5ub3ZhdGl2ZSBmdXNpb24gY3Vpc2luZSwgb3VyIHRhbGVudGVkIGNoZWZzIGFyZSBhbHdheXMgcHVzaGluZyB0aGUgYm91bmRhcmllcyBvZiB3aGF0J3MgcG9zc2libGUuIFxcblxcblNvIGdhdGhlciB5b3VyIGZyaWVuZHMgYW5kIGZhbWlseSwgYW5kIGpvaW4gdXMgZm9yIGEgbWVhbCB0aGF0J3Mgc3VyZSB0byBiZSBhbiB1bmZvcmdldHRhYmxlIGV4cGVyaWVuY2UuIEF0IE92ZXJjb29rZWQgUmVzdGF1cmFudCwgdGhlIGhlYXQgaXMgYWx3YXlzIG9uIGFuZCB0aGUgZXhjaXRlbWVudCBpcyBuZXZlci1lbmRpbmchYDtcblxuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50SGVhZGxpbmUoKSB7XG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBPdmVyY29va2VkIFJlc3RhdXJhbnQhXCI7XG4gIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJoZWFkbGluZVwiKTtcblxuICByZXR1cm4gaGVhZGxpbmU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudEltYWdlKCkge1xuICBjb25zdCBtYWluSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbWFpbkltYWdlLnNyYyA9IE92ZXJjb29rZWQ7XG4gIG1haW5JbWFnZS5jbGFzc0xpc3QuYWRkKFwibWFpbi1pbWFnZVwiKTtcblxuICByZXR1cm4gbWFpbkltYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50SG9tZUNvbnRlbnQoKSB7XG4gIGNvbnN0IGNvcHlDb250YWluZXIgPSBjb21wb25lbnRDb3B5Q29udGFpbmVyKCk7XG4gIGNvcHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50SGVhZGxpbmUoKSk7XG4gIGNvcHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50Q29weSgpKTtcblxuICByZXR1cm4gW2NvbXBvbmVudEltYWdlKCksIGNvcHlDb250YWluZXJdO1xufVxuIiwiaW1wb3J0IHsgY29tcG9uZW50Q29udGFjdENvbnRlbnQsIGNvbnRhY3RCdG4gfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHsgY29tcG9uZW50SG9tZUNvbnRlbnQsIGhvbWVCdG59IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBjb21wb25lbnRNZW51Q29udGVudCwgbWVudUJ0biB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyB0YWJDb250YWluZXIsIGluaXQsIHRhYkNvbnRlbnRDb250YWluZXIgfSBmcm9tICcuL3BhZ2UtbG9hZCc7XG5cbmluaXQoKTtcblxudGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xudGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xudGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIFNwcmVhZCBvcGVyYXRvciBhZGRzIGltYWdlIGFuZCBjb3B5IGFzIGNoaWxkcmVuIHRvIHRhYkNvbnRlbnRDb250YWluZXIuXG4gICAgLy8gU3ByZWFkIG9wZXJhdG9yIGFsbG93cyB5b3UgdG8gYWRkIGEgZHluYW1pYyBudW1iZXIgb2YgcGFyYW1ldGVycyBiYXNlZCBvbiB0aGUgbGVuZ3RoIG9mIHRoZVxuICAgIC8vIHJldHVybmVkIGFycmF5XG4gICAgdGFiQ29udGVudENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oLi4uY29tcG9uZW50SG9tZUNvbnRlbnQoKSk7XG59KTtcblxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YWJDb250ZW50Q29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbiguLi5jb21wb25lbnRNZW51Q29udGVudCgpKTtcbn0pO1xuXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhYkNvbnRlbnRDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKC4uLmNvbXBvbmVudENvbnRhY3RDb250ZW50KCkpO1xufSk7XG5cbnRhYkNvbnRlbnRDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKC4uLmNvbXBvbmVudEhvbWVDb250ZW50KCkpO1xuXG4iLCJpbXBvcnQgQnVyZ2VyIGZyb20gJy4vYnVyZ2VyLnBuZyc7XG5pbXBvcnQgTWVhdEJ1cnJpdG8gZnJvbSAnLi9tZWF0LWJ1cnJpdG8ucG5nJztcbmltcG9ydCBNdXNocm9vbUJ1cnJpdG8gZnJvbSAnLi9tdXNocm9vbS1idXJyaXRvLnBuZyc7XG5pbXBvcnQgU3VzaGkgZnJvbSAnLi9zdXNoaS5wbmcnO1xuaW1wb3J0IFNhbGFkIGZyb20gJy4vc2FsYWQucG5nJztcbmltcG9ydCBDYWtlIGZyb20gJy4vY2FrZS5wbmcnO1xuXG5mdW5jdGlvbiBjb21wb25lbnRNZW51QnV0dG9uKCkge1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xuXG4gICAgcmV0dXJuIG1lbnVCdG47XG59XG5cbmV4cG9ydCBjb25zdCBtZW51QnRuID0gY29tcG9uZW50TWVudUJ1dHRvbigpO1xuXG5mdW5jdGlvbiBjb21wb25lbnRNZW51Q29udGFpbmVyKCkge1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50TWVudUl0ZW0obWVudUltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgZm9vZEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgZm9vZEltYWdlLnNyYyA9IG1lbnVJbWFnZTtcbiAgICBmb29kSW1hZ2UuY2xhc3NMaXN0LmFkZCgnZm9vZC1pbWFnZScpO1xuXG4gICAgY29uc3QgZm9vZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBmb29kVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBmb29kVGl0bGUuY2xhc3NMaXN0LmFkZCgnZm9vZC10aXRsZScpO1xuXG4gICAgY29uc3QgZm9vZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgIGZvb2REZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdmb29kLWRlc2NyaXB0aW9uJyk7XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kSW1hZ2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RUaXRsZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKTtcblxuICAgIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50TWVudUhlYWRlcigpIHtcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBtZW51SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyJyk7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IGBDSEVGJ1MgU1BFQ0lBTFNgO1xuXG4gICAgcmV0dXJuIG1lbnVIZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudE1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgcmV0dXJuIG1lbnU7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudE1lbnVJdGVtcygpIHtcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChjb21wb25lbnRNZW51SXRlbShCdXJnZXIsICdCdXJnZXInLCBgT3VyIGp1aWN5IGJlZWYgcGF0dHkgaXMgdG9wcGVkIHdpdGggbWVsdGVkIGNoZWRkYXIgY2hlZXNlLCBjcmlzcHkgYmFjb24sIGxldHR1Y2UsIHRvbWF0bywgYW5kIG91ciBzZWNyZXQgc2F1Y2UgdGhhdCdzIGJ1cnN0aW5nIHdpdGggZmxhdm9yLiBTZXJ2ZWQgb24gYSB0b2FzdGVkIHNlc2FtZSBzZWVkIGJ1biB3aXRoIGEgc2lkZSBvZiBnb2xkZW4gZnJpZXMsIHRoaXMgYnVyZ2VyIGlzIHRoZSBwZXJmZWN0IGZ1ZWwgZm9yIHlvdXIgbmV4dCBjdWxpbmFyeSBhZHZlbnR1cmUuYCkpO1xuICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChjb21wb25lbnRNZW51SXRlbShNZWF0QnVycml0bywgJ01lYXQgQnVycml0bycsIGBUaGlzIG1vdXRoLXdhdGVyaW5nIGJ1cnJpdG8gaXMgcGFja2VkIHdpdGggYSBibGVuZCBvZiBwZXJmZWN0bHkgc2Vhc29uZWQgbWVhdCBjaHVua3MsIHJpY2UsIGFuZCBtZWx0ZWQgY2hlZXNlLCBhbGwgd3JhcHBlZCBpbiBhIHdhcm0gZmxvdXIgdG9ydGlsbGEuIFNlcnZlZCB3aXRoIGEgZ2VuZXJvdXMgZG9sbG9wIG9mIG91ciBob3VzZS1tYWRlIGd1YWNhbW9sZSBhbmQgYSBzaWRlIG9mIGNyaXNweSB0b3J0aWxsYSBjaGlwcywgdGhpcyBidXJyaXRvIGlzIGJ1cnN0aW5nIHdpdGggYm9sZCBmbGF2b3JzIGFuZCB0ZXh0dXJlcy5gKSk7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGNvbXBvbmVudE1lbnVJdGVtKE11c2hyb29tQnVycml0bywgJ011c2hyb29tIEJ1cnJpdG8nLCBgRm9yIGFsbCB0aGUgdmVnYW4gY2hlZnMgb3V0IHRoZXJlLCB0aGlzIGJ1cnJpdG8gaXMgYSBtZWF0bGVzcyBtYXN0ZXJwaWVjZSB0aGF0J3MgYnVyc3Rpbmcgd2l0aCBmbGF2b3IuIFN0dWZmZWQgd2l0aCBzYXV0w6llZCBtdXNocm9vbXMsIG9uaW9ucywgcGludG8gYmVhbnMsIGFuZCByaWNlLCBhbGwgd3JhcHBlZCBpbiBhIHdhcm0gZmxvdXIgdG9ydGlsbGEsIHRoaXMgYnVycml0byBpcyB0aGUgcGVyZmVjdCBibGVuZCBvZiBoZWFydHkgYW5kIGhlYWx0aHkuIFNlcnZlZCB3aXRoIGEgZG9sbG9wIG9mIG91ciBob3VzZS1tYWRlIHNhbHNhIGFuZCBmcmVzaCB0b3J0aWxsYSBjaGlwcy5gKSk7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGNvbXBvbmVudE1lbnVJdGVtKFN1c2hpLCAnU3VzaGknLCBgUm9sbCB1cCB5b3VyIHNsZWV2ZXMgYW5kIGdldCByZWFkeSB0byBleHBlcmllbmNlIGEgZnVzaW9uIG9mIEphcGFuZXNlIGFuZCBXZXN0ZXJuIGN1aXNpbmUgd2l0aCBvdXIgc2lnbmF0dXJlIHN1c2hpIHJvbGwuIE1hZGUgd2l0aCBwZXJmZWN0bHkgY29va2VkIHN1c2hpIHJpY2UsIHRlbmRlciBzdHJpcHMgb2Ygc2VhcmVkIGJlZWYsIGF2b2NhZG8sIGFuZCBjdWN1bWJlciwgYW5kIGZpbmlzaGVkIG9mZiB3aXRoIGEgZHJpenpsZSBvZiBvdXIgc3BlY2lhbCBzYXVjZSwgdGhpcyBzdXNoaSByb2xsIGlzIGEgZGVsaWNpb3VzIGFuZCBjcmVhdGl2ZSB0d2lzdCBvbiBhIGNsYXNzaWMgZGlzaC5gKSk7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGNvbXBvbmVudE1lbnVJdGVtKFNhbGFkLCAnR2FyZGVuIFNhbGFkJywgYEZvciB0aG9zZSB3aG8gd2FudCB0byBrZWVwIGl0IGxpZ2h0IGFuZCBoZWFsdGh5LCBvdXIgZ2FyZGVuIHNhbGFkIGlzIHRoZSBwZXJmZWN0IGNob2ljZS4gTWFkZSB3aXRoIGEgYmxlbmQgb2YgZnJlc2ggZ3JlZW5zLCBqdWljeSBjaGVycnkgdG9tYXRvZXMsIGNydW5jaHkgY3VjdW1iZXJzLCBhbmQgc2hyZWRkZWQgY2Fycm90cywgdGhpcyBzYWxhZCBpcyB0b3BwZWQgd2l0aCBjcm91dG9ucyBhbmQgeW91ciBjaG9pY2Ugb2YgZHJlc3NpbmcuIGApKTtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoY29tcG9uZW50TWVudUl0ZW0oQ2FrZSwgJ0Nob2NvbGF0ZSBDYWtlJywgYElmIHlvdSBoYXZlIGEgc3dlZXQgdG9vdGgsIHRoaXMgZGVjYWRlbnQgY2hvY29sYXRlIGNha2UgaXMgdGhlIHBlcmZlY3Qgd2F5IHRvIHNhdGlzZnkgeW91ciBjcmF2aW5ncy4gUmljaCwgbW9pc3QsIGFuZCBsb2FkZWQgd2l0aCBpbnRlbnNlIGNob2NvbGF0ZSBmbGF2b3IsIHRoaXMgY2FrZSBpcyBhIGNob2NvaG9saWMncyBkcmVhbSBjb21lIHRydWUuIFNlcnZlZCB3aXRoIGEgc2Nvb3Agb2YgY3JlYW15IHZhbmlsbGEgaWNlIGNyZWFtIGFuZCBkcml6emxlZCB3aXRoIHdhcm0gY2hvY29sYXRlIHNhdWNlLCB0aGlzIGRlc3NlcnQgaXMgdGhlIHBlcmZlY3Qgd2F5IHRvIGVuZCB5b3VyIG1lYWwgb24gYSBoaWdoIG5vdGUuYCkpO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudE1lbnVDb250ZW50KCkge1xuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBjb21wb25lbnRNZW51Q29udGFpbmVyKCk7XG4gICAgY29uc3QgbWVudSA9IGNvbXBvbmVudE1lbnUoKTtcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChjb21wb25lbnRNZW51SGVhZGVyKCkpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY29tcG9uZW50TWVudUl0ZW1zKCkpO1xuXG4gICAgcmV0dXJuIFttZW51Q29udGFpbmVyXTtcbn0iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBPdmVyY29va2VkTG9nbyBmcm9tICcuL292ZXJjb29rZWRsb2dvLnBuZyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudENvbnRlbnQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50SGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudE5hbWUoKSB7XG4gIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nby5zcmMgPSBPdmVyY29va2VkTG9nbztcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG5cbiAgcmV0dXJuIGxvZ287XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudFRhYkNvbnRhaW5lcigpIHtcbiAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWItY29udGFpbmVyJyk7XG5cbiAgcmV0dXJuIHRhYkNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50VGFiQ29udGVudENvbnRhaW5lcigpIHtcbiAgY29uc3QgdGFiQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0YWJDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50LWNvbnRhaW5lcicpO1xuXG4gIHJldHVybiB0YWJDb250ZW50Q29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGb290ZXIoKSB7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Rm9vdGVyTG9jYXRpb24oKSB7XG4gIGNvbnN0IGZvb3RlckxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBmb290ZXJMb2NhdGlvbi50ZXh0Q29udGVudCA9ICdMT0NBVElPTic7XG4gICBmb290ZXJMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21wb25lbnQtbG9jYXRpb24nKTtcblxuICAgcmV0dXJuIGZvb3RlckxvY2F0aW9uO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGb290ZXJMb2NhdGlvblRleHQoKSB7XG4gIGNvbnN0IGZvb3RlckxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXJMb2NhdGlvblRleHQudGV4dENvbnRlbnQgPSBgMTIzIEJ1cm50IEJvdWxldmFyZCxcXG5LaXRjaGVuIEtpbmdkb21gO1xuICBmb290ZXJMb2NhdGlvblRleHQuY2xhc3NMaXN0LmFkZCgncHJlJywgJ2Zvb3Rlci10ZXh0Jyk7XG5cbiAgcmV0dXJuIGZvb3RlckxvY2F0aW9uVGV4dDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Rm9vdGVySG91cnMoKSB7XG4gIGNvbnN0IGZvb3RlckhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckhvdXJzLnRleHRDb250ZW50ID0gJ0hPVVJTJztcbiAgZm9vdGVySG91cnMuY2xhc3NMaXN0LmFkZCgnY29tcG9uZW50LWhvdXJzJyk7XG5cbiAgcmV0dXJuIGZvb3RlckhvdXJzO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGb290ZXJIb3Vyc1RleHQoKSB7XG4gIGNvbnN0IGZvb3RlckNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gYFRVRVNEQVkgLSBTVU5EQVk6IDExYW0gLSAxMHBtXFxuTU9OREFZOiBDbG9zZWQgKFRpbWUgdG8gY2hvcCBtb3JlIG9uaW9ucyEpYDtcbiAgZm9vdGVyQ29udGFjdFRleHQuY2xhc3NMaXN0LmFkZCgncHJlJywgJ2Zvb3Rlci10ZXh0Jyk7XG5cbiAgcmV0dXJuIGZvb3RlckNvbnRhY3RUZXh0O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnRGb290ZXJDb250YWN0KCkge1xuICBjb25zdCBmb290ZXJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ09OVEFDVCc7XG4gIGZvb3RlckNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29tcG9uZW50LWNvbnRhY3QnKTtcblxuICByZXR1cm4gZm9vdGVyQ29udGFjdDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50Rm9vdGVyQ29udGFjdFRleHQoKSB7XG4gIGNvbnN0IGZvb3RlckNvbnRhY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvb3RlckNvbnRhY3RUZXh0LnRleHRDb250ZW50ID0gYFBIT05FOiA1NTUtNTU1NS1GT09EXFxuRU1BSUw6IGluZm9AcmVzdGF1cmFudC5jb21gO1xuICBmb290ZXJDb250YWN0VGV4dC5jbGFzc0xpc3QuYWRkKCdwcmUnLCAnZm9vdGVyLXRleHQnKTtcblxuICByZXR1cm4gZm9vdGVyQ29udGFjdFRleHQ7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudERpdmlkZXIoKSB7XG4gIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2aWRlci50ZXh0Q29udGVudCA9ICfigJQnO1xuICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoJ2RpdmlkZXInKTtcblxuICByZXR1cm4gZGl2aWRlcjtcbn1cblxuZXhwb3J0IGNvbnN0IHRhYkNvbnRhaW5lciA9IGNvbXBvbmVudFRhYkNvbnRhaW5lcigpO1xuZXhwb3J0IGNvbnN0IHRhYkNvbnRlbnRDb250YWluZXIgPSBjb21wb25lbnRUYWJDb250ZW50Q29udGFpbmVyKCk7XG5leHBvcnQgY29uc3QgbmFtZSA9IGNvbXBvbmVudE5hbWUoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBjb21wb25lbnRDb250ZW50KCk7XG4gIGNvbnN0IGhlYWRlciA9IGNvbXBvbmVudEhlYWRlcigpO1xuICBjb25zdCBmb290ZXIgPSBjb21wb25lbnRGb290ZXIoKTtcbiAgY29uc3QgZm9vdGVyTG9jYXRpb24gPSBjb21wb25lbnRGb290ZXJMb2NhdGlvbigpO1xuICBjb25zdCBmb290ZXJIb3VycyA9IGNvbXBvbmVudEZvb3RlckhvdXJzKCk7XG4gIGNvbnN0IGZvb3RlckNvbnRhY3QgPSBjb21wb25lbnRGb290ZXJDb250YWN0KCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29tcG9uZW50TmFtZSgpKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYkNvbnRhaW5lcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFiQ29udGVudENvbnRhaW5lcik7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTG9jYXRpb24pO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVySG91cnMpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFjdCk7XG4gIGZvb3RlckxvY2F0aW9uLmFwcGVuZENoaWxkKGNvbXBvbmVudERpdmlkZXIoKSk7XG4gIGZvb3RlckxvY2F0aW9uLmFwcGVuZENoaWxkKGNvbXBvbmVudEZvb3RlckxvY2F0aW9uVGV4dCgpKTtcbiAgZm9vdGVySG91cnMuYXBwZW5kQ2hpbGQoY29tcG9uZW50RGl2aWRlcigpKTtcbiAgZm9vdGVySG91cnMuYXBwZW5kQ2hpbGQoY29tcG9uZW50Rm9vdGVySG91cnNUZXh0KCkpXG4gIGZvb3RlckNvbnRhY3QuYXBwZW5kQ2hpbGQoY29tcG9uZW50RGl2aWRlcigpKTtcbiAgZm9vdGVyQ29udGFjdC5hcHBlbmRDaGlsZChjb21wb25lbnRGb290ZXJDb250YWN0VGV4dCgpKTtcbn1cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=