module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.tsx":
/*!*****************************!*\
  !*** ./components/Card.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/card.module.scss */ \"./styles/card.module.scss\");\n/* harmony import */ var _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/kamui/dev/Visual-Novel-Recommender/client/components/Card.tsx\";\n\n\nconst Card = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.card,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.cover,\n      alt: \"\",\n      className: _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.cover\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_card_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.info,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: props.link,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: props.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: props.desc\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQudHN4P2M5NjAiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwic3R5bGVzIiwiY2FyZCIsImNvdmVyIiwiaW5mbyIsImxpbmsiLCJ0aXRsZSIsImRlc2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFTQSxNQUFNQSxJQUFJLEdBQUlDLEtBQUQsSUFBa0I7QUFDN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLCtEQUFNLENBQUNDLElBQXZCO0FBQUEsNEJBQ0U7QUFBSyxTQUFHLEVBQUVGLEtBQUssQ0FBQ0csS0FBaEI7QUFBdUIsU0FBRyxFQUFDLEVBQTNCO0FBQThCLGVBQVMsRUFBRUYsK0RBQU0sQ0FBQ0U7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFFRiwrREFBTSxDQUFDRyxJQUF2QjtBQUFBLDhCQUNFO0FBQUcsWUFBSSxFQUFFSixLQUFLLENBQUNLLElBQWY7QUFBQSwrQkFDRTtBQUFBLG9CQUFLTCxLQUFLLENBQUNNO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFBLGtCQUFJTixLQUFLLENBQUNPO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFXRCxDQVpEOztBQWNlUixtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY2FyZC5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjOiBzdHJpbmc7XG4gIGNvdmVyOiBzdHJpbmc7XG4gIGxpbms6IHN0cmluZztcbn1cblxuY29uc3QgQ2FyZCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgPGltZyBzcmM9e3Byb3BzLmNvdmVyfSBhbHQ9XCJcIiBjbGFzc05hbWU9e3N0eWxlcy5jb3Zlcn0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgIDxhIGhyZWY9e3Byb3BzLmxpbmt9PlxuICAgICAgICAgIDxoMz57cHJvcHMudGl0bGV9PC9oMz5cbiAgICAgICAgPC9hPlxuICAgICAgICA8cD57cHJvcHMuZGVzY308L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.tsx\n");

/***/ }),

/***/ "./components/SearchBar.tsx":
/*!**********************************!*\
  !*** ./components/SearchBar.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bi */ \"react-icons/bi\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/SearchBar.module.scss */ \"./styles/SearchBar.module.scss\");\n/* harmony import */ var _styles_SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/kamui/dev/Visual-Novel-Recommender/client/components/SearchBar.tsx\";\n\n\n\n\nconst SearchBar = ({\n  callback\n}) => {\n  const {\n    0: inputText,\n    1: setInputText\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.search_container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__[\"BiSearch\"], {\n      className: _styles_SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      className: _styles_SearchBar_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.searchbar,\n      placeholder: \"Search...\",\n      onChange: ev => setInputText(ev.target.value),\n      onKeyPress: ev => {\n        if (ev.key == \"Enter\") {\n          callback(inputText);\n        }\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaEJhci50c3g/MDcwNCJdLCJuYW1lcyI6WyJTZWFyY2hCYXIiLCJjYWxsYmFjayIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsInVzZVN0YXRlIiwic3R5bGVzIiwic2VhcmNoX2NvbnRhaW5lciIsImljb24iLCJzZWFyY2hiYXIiLCJldiIsInRhcmdldCIsInZhbHVlIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDbEMsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsb0VBQU0sQ0FBQ0MsZ0JBQXZCO0FBQUEsNEJBQ0UscUVBQUMsdURBQUQ7QUFBVSxlQUFTLEVBQUVELG9FQUFNLENBQUNFO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsZUFBUyxFQUFFRixvRUFBTSxDQUFDRyxTQUZwQjtBQUdFLGlCQUFXLEVBQUMsV0FIZDtBQUlFLGNBQVEsRUFBR0MsRUFBRCxJQUFRTixZQUFZLENBQUNNLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxLQUFYLENBSmhDO0FBS0UsZ0JBQVUsRUFBR0YsRUFBRCxJQUFRO0FBQ2xCLFlBQUlBLEVBQUUsQ0FBQ0csR0FBSCxJQUFVLE9BQWQsRUFBdUI7QUFDckJYLGtCQUFRLENBQUNDLFNBQUQsQ0FBUjtBQUNEO0FBQ0Y7QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0JELENBbEJEOztBQW9CZUYsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaEJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQmlTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9TZWFyY2hCYXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgU2VhcmNoQmFyID0gKHsgY2FsbGJhY2sgfSkgPT4ge1xuICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoXCJcIik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hfY29udGFpbmVyfT5cbiAgICAgIDxCaVNlYXJjaCBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoYmFyfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiXG4gICAgICAgIG9uQ2hhbmdlPXsoZXYpID0+IHNldElucHV0VGV4dChldi50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleVByZXNzPXsoZXYpID0+IHtcbiAgICAgICAgICBpZiAoZXYua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgY2FsbGJhY2soaW5wdXRUZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoQmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchBar.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SearchBar */ \"./components/SearchBar.tsx\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/kamui/dev/Visual-Novel-Recommender/client/pages/index.tsx\";\n\n\n\n\n\n\nconst Home = () => {\n  const {\n    0: data,\n    1: setData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n\n  const search = async username => {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(`http://localhost:5000/user/${username}`);\n    setData(res.data.data);\n  };\n\n  const trim = text => {\n    if (text && text.length >= 400) {\n      return text.slice(0, 400) + \"...\";\n    } else {\n      return text;\n    }\n  };\n\n  const removeBracketText = text => {\n    if (text) {\n      return text.replace(/\\[.*\\]/g, \"\");\n    } else {\n      return text;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.bg,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        children: \"Discover New Visual Novels\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"Start by entering your VNDB username\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.search,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        callback: search\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.cardgrid,\n      children: data.map(vn => {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          title: vn.title,\n          desc: trim(removeBracketText(vn.description)),\n          cover: vn.image,\n          link: `https://vndb.org/v${vn.id}`\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwiZGF0YSIsInNldERhdGEiLCJ1c2VTdGF0ZSIsInNlYXJjaCIsInVzZXJuYW1lIiwicmVzIiwiYXhpb3MiLCJnZXQiLCJ0cmltIiwidGV4dCIsImxlbmd0aCIsInNsaWNlIiwicmVtb3ZlQnJhY2tldFRleHQiLCJyZXBsYWNlIiwic3R5bGVzIiwiYmciLCJjYXJkZ3JpZCIsIm1hcCIsInZuIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUNqQixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQzs7QUFFQSxRQUFNQyxNQUFNLEdBQUcsTUFBT0MsUUFBUCxJQUFvQjtBQUNqQyxVQUFNQyxHQUFHLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFXLDhCQUE2QkgsUUFBUyxFQUFqRCxDQUFsQjtBQUNBSCxXQUFPLENBQUNJLEdBQUcsQ0FBQ0wsSUFBSixDQUFTQSxJQUFWLENBQVA7QUFDRCxHQUhEOztBQUtBLFFBQU1RLElBQUksR0FBSUMsSUFBRCxJQUEwQjtBQUNyQyxRQUFJQSxJQUFJLElBQUlBLElBQUksQ0FBQ0MsTUFBTCxJQUFlLEdBQTNCLEVBQWdDO0FBQzlCLGFBQU9ELElBQUksQ0FBQ0UsS0FBTCxDQUFXLENBQVgsRUFBYyxHQUFkLElBQXFCLEtBQTVCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBT0YsSUFBUDtBQUNEO0FBQ0YsR0FORDs7QUFRQSxRQUFNRyxpQkFBaUIsR0FBSUgsSUFBRCxJQUEwQjtBQUNsRCxRQUFJQSxJQUFKLEVBQVU7QUFDUixhQUFPQSxJQUFJLENBQUNJLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLEVBQXhCLENBQVA7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPSixJQUFQO0FBQ0Q7QUFDRixHQU5EOztBQVFBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVLLGdFQUFNLENBQUNDLEVBQXZCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLGVBQVMsRUFBRUQsZ0VBQU0sQ0FBQ1gsTUFBdkI7QUFBQSw2QkFDRSxxRUFBQyw2REFBRDtBQUFXLGdCQUFRLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBU0U7QUFBSyxlQUFTLEVBQUVXLGdFQUFNLENBQUNFLFFBQXZCO0FBQUEsZ0JBQ0doQixJQUFJLENBQUNpQixHQUFMLENBQVVDLEVBQUQsSUFBUTtBQUNoQiw0QkFDRSxxRUFBQyx3REFBRDtBQUNFLGVBQUssRUFBRUEsRUFBRSxDQUFDQyxLQURaO0FBRUUsY0FBSSxFQUFFWCxJQUFJLENBQUNJLGlCQUFpQixDQUFDTSxFQUFFLENBQUNFLFdBQUosQ0FBbEIsQ0FGWjtBQUdFLGVBQUssRUFBRUYsRUFBRSxDQUFDRyxLQUhaO0FBSUUsY0FBSSxFQUFHLHFCQUFvQkgsRUFBRSxDQUFDSSxFQUFHO0FBSm5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFRRCxPQVRBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURjtBQUFBLGtCQURGO0FBd0JELENBaEREOztBQWtEZXZCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jICh1c2VybmFtZSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VzZXIvJHt1c2VybmFtZX1gKTtcbiAgICBzZXREYXRhKHJlcy5kYXRhLmRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHRyaW0gPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBpZiAodGV4dCAmJiB0ZXh0Lmxlbmd0aCA+PSA0MDApIHtcbiAgICAgIHJldHVybiB0ZXh0LnNsaWNlKDAsIDQwMCkgKyBcIi4uLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlQnJhY2tldFRleHQgPSAodGV4dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICBpZiAodGV4dCkge1xuICAgICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXFxbLipcXF0vZywgXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJnfT5cbiAgICAgICAgPGgzPkRpc2NvdmVyIE5ldyBWaXN1YWwgTm92ZWxzPC9oMz5cbiAgICAgICAgPGgyPlN0YXJ0IGJ5IGVudGVyaW5nIHlvdXIgVk5EQiB1c2VybmFtZTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofT5cbiAgICAgICAgPFNlYXJjaEJhciBjYWxsYmFjaz17c2VhcmNofSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZGdyaWR9PlxuICAgICAgICB7ZGF0YS5tYXAoKHZuKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgIHRpdGxlPXt2bi50aXRsZX1cbiAgICAgICAgICAgICAgZGVzYz17dHJpbShyZW1vdmVCcmFja2V0VGV4dCh2bi5kZXNjcmlwdGlvbikpfVxuICAgICAgICAgICAgICBjb3Zlcj17dm4uaW1hZ2V9XG4gICAgICAgICAgICAgIGxpbms9e2BodHRwczovL3ZuZGIub3JnL3Yke3ZuLmlkfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/SearchBar.module.scss":
/*!**************************************!*\
  !*** ./styles/SearchBar.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"search_container\": \"SearchBar_search_container__2hCsI\",\n\t\"searchbar\": \"SearchBar_searchbar__2sjct\",\n\t\"icon\": \"SearchBar_icon__16QCu\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvU2VhcmNoQmFyLm1vZHVsZS5zY3NzPzczYjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL1NlYXJjaEJhci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNlYXJjaF9jb250YWluZXJcIjogXCJTZWFyY2hCYXJfc2VhcmNoX2NvbnRhaW5lcl9fMmhDc0lcIixcblx0XCJzZWFyY2hiYXJcIjogXCJTZWFyY2hCYXJfc2VhcmNoYmFyX18yc2pjdFwiLFxuXHRcImljb25cIjogXCJTZWFyY2hCYXJfaWNvbl9fMTZRQ3VcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/SearchBar.module.scss\n");

/***/ }),

/***/ "./styles/card.module.scss":
/*!*********************************!*\
  !*** ./styles/card.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card_card__1Kbrp\",\n\t\"info\": \"card_info__3YKW2\",\n\t\"cover\": \"card_cover__1Ioyz\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY2FyZC5tb2R1bGUuc2Nzcz8zZTQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9jYXJkLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcImNhcmRfY2FyZF9fMUticnBcIixcblx0XCJpbmZvXCI6IFwiY2FyZF9pbmZvX18zWUtXMlwiLFxuXHRcImNvdmVyXCI6IFwiY2FyZF9jb3Zlcl9fMUlveXpcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/card.module.scss\n");

/***/ }),

/***/ "./styles/index.module.scss":
/*!**********************************!*\
  !*** ./styles/index.module.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"bg\": \"styles_bg__1IOrd\",\n\t\"search\": \"styles_search__1Wddl\",\n\t\"cardgrid\": \"styles_cardgrid__2pkZb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3M/ODQwOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiZ1wiOiBcInN0eWxlc19iZ19fMUlPcmRcIixcblx0XCJzZWFyY2hcIjogXCJzdHlsZXNfc2VhcmNoX18xV2RkbFwiLFxuXHRcImNhcmRncmlkXCI6IFwic3R5bGVzX2NhcmRncmlkX18ycGtaYlwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/index.module.scss\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/bi":
/*!*********************************!*\
  !*** external "react-icons/bi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/bi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9iaVwiPzEyNDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvYmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9iaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/bi\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });