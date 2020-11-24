/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_sliders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/sliders */ \"./src/scripts/parts/sliders.js\");\n/* harmony import */ var _parts_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/header */ \"./src/scripts/parts/header.js\");\n/* harmony import */ var _parts_DIKIEKOSTILI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/DIKIEKOSTILI */ \"./src/scripts/parts/DIKIEKOSTILI.js\");\n\r\n\r\n\r\n$(document).ready(() => {\r\n  Object(_parts_sliders__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  Object(_parts_header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  Object(_parts_DIKIEKOSTILI__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n  \n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/parts/DIKIEKOSTILI.js":
/*!*******************************************!*\
  !*** ./src/scripts/parts/DIKIEKOSTILI.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return KOSTILY; });\nfunction KOSTILY(){\r\nvar button = document.getElementById(\"buttonBuy\");\r\nvar i = 0;\r\nvar g = localStorage.getItem(\"good\");\r\ndocument.getElementById(\"counter\").innerHTML = g;\r\nvar i = i + +g;\r\nbutton.addEventListener('click', function(e) {  \r\n  i = (i + 1);\r\n  document.getElementById(\"counter\").innerHTML = i;\r\n  localStorage.setItem(\"good\", i);\r\n});\r\n}\n\n//# sourceURL=webpack:///./src/scripts/parts/DIKIEKOSTILI.js?");

/***/ }),

/***/ "./src/scripts/parts/header.js":
/*!*************************************!*\
  !*** ./src/scripts/parts/header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return headerTheme; });\nfunction headerTheme(){\r\n$('.mainSlider').on('afterChange', function(event, slick, currentSlide) {\r\n    $('.headerBlack').removeClass('headerWWW').eq(currentSlide).addClass('headerWWW');\r\n  });\r\n}\n\n//# sourceURL=webpack:///./src/scripts/parts/header.js?");

/***/ }),

/***/ "./src/scripts/parts/sliders.js":
/*!**************************************!*\
  !*** ./src/scripts/parts/sliders.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initSliders; });\nfunction initSliderHomepage() {\r\n  $('.mainSlider').slick({\r\n    prevArrow: $('.prev'),\r\n    nextArrow: $('.next')\r\n  });\r\n}\r\nfunction initSliderProductCardOne() {\r\n  $('.productCard__slider__one-main').slick({\r\n      slidesToShow: 1,\r\n      fade: true,\r\n      centerMode: false,\r\n      arrows: false, \r\n    });\r\n  \r\n    $('.productCard__slider__one-support').slick({\r\n      slidesToShow: 4,\r\n      slidesToScroll: 1,\r\n      asNavFor: '.productCard__slider__one-main',\r\n      dots: false,\r\n      centerMode: false,\r\n      focusOnSelect: true,\r\n      arrows: false,  \r\n    });\r\n  }\r\n  function initSliderProductCardTwo() {\r\n  $('.productCard__slider__two-slick').slick({\r\n      prevArrow: $('.productCard__prev'),\r\n      nextArrow: $('.productCard__next'),\r\n      infinite: true,\r\n      slidesToShow: 4,\r\n      slidesToScroll: 1,\r\n      centerMode: false,\r\n      variableWidth: true,\r\n      responsive: [\r\n        {\r\n          breakpoint: 1199,\r\n          settings: {\r\n            slidesToShow: 1,\r\n            slidesToScroll: 1,\r\n            \r\n          }\r\n        }\r\n      ]\r\n    });}\r\n\r\nfunction initSliders() {\r\n    initSliderHomepage();\r\n    initSliderProductCardOne();\r\n    initSliderProductCardTwo();\r\n  }\n\n//# sourceURL=webpack:///./src/scripts/parts/sliders.js?");

/***/ })

/******/ });