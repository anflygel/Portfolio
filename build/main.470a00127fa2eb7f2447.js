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

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./media */ \"./js/media.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _img_aloe_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/aloe.jpg */ \"./img/aloe.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst pic = document.createElement(\"img\");\r\npic.src = _img_aloe_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\npic.onload = () => {\r\n    document.body.appendChild(pic)\r\n}\r\npic.classList.add('aloeclass')\r\n\r\n\r\nconsole.log(pic.className);\r\n\r\nconst goods = [\r\n    { title: 'Rose', img: _media__WEBPACK_IMPORTED_MODULE_0__.flowers[0] },\r\n    { title: 'Lily', img: _media__WEBPACK_IMPORTED_MODULE_0__.flowers[1] },\r\n    { title: 'Orchid', img: _media__WEBPACK_IMPORTED_MODULE_0__.flowers[2] },\r\n    { title: 'Aster', img: _media__WEBPACK_IMPORTED_MODULE_0__.flowers[3] },\r\n\r\n];\r\n\r\nconst music = [\r\n    { title: 'Birds', mp3: _media__WEBPACK_IMPORTED_MODULE_0__.audio[0] },\r\n    { title: 'Music', mp3: _media__WEBPACK_IMPORTED_MODULE_0__.audio[1] },\r\n    { title: 'Night', mp3: _media__WEBPACK_IMPORTED_MODULE_0__.audio[2] },\r\n\r\n];\r\n\r\n\r\nconst film = [\r\n    { title: 'Man', mp4: _media__WEBPACK_IMPORTED_MODULE_0__.video[0] },\r\n    { title: 'Sea', mp4: _media__WEBPACK_IMPORTED_MODULE_0__.video[1] },\r\n\r\n];\r\n\r\nconst renderGoodsItem = (title = 'New', img = rose1) => {\r\n    return `<div class=\"goods-item\">\r\n        <img class='goods-item-img' src=${img} alt=\"flower\">\r\n        <div class='goods-item-name'>\r\n            <h3>${title}</h3>\r\n        </div>\r\n       \r\n    </div>`;\r\n};\r\n\r\nconst renderAudio = (title = 'New', mp3 = _img_aloe_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) => {\r\n    return `<div>\r\n        <audio\r\n        controls\r\n        src=${mp3}>\r\n            Your browser does not support the\r\n            <code>audio</code> element.\r\n    </audio>\r\n        <div class='goods-item-name'>\r\n            <h3>${title}</h3>\r\n        </div>\r\n\r\n    </div>`;\r\n};\r\n\r\nconst renderVideo = (title = 'New', mp4 = _img_aloe_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]) => {\r\n    return `<div>\r\n    <video class='item-video' src=${mp4} controls></video> \r\n        <div class='goods-item-name'>\r\n            <h3>${title}</h3>\r\n        </div>\r\n\r\n    </div>`;\r\n};\r\n\r\n\r\nconst renderGoodsList = (list) => {\r\n    let goodsList = list.map(item => renderGoodsItem(item.title, item.img));\r\n    document.querySelector('.goods-list').innerHTML = goodsList.join('');\r\n}\r\nconst renderGoodsListaudio = (list) => {\r\n    let listAudio = list.map(item => renderAudio(item.title, item.mp3));\r\n    document.querySelector('.list-audio').innerHTML = listAudio.join('');\r\n}\r\nconst renderGoodsListVideo = (list) => {\r\n    let listVideo = list.map(item => renderVideo(item.title, item.mp4));\r\n    document.querySelector('.list-video').innerHTML = listVideo.join('');\r\n}\r\n\r\nrenderGoodsList(goods);\r\nrenderGoodsListaudio(music);\r\nrenderGoodsListVideo(film);\n\n//# sourceURL=webpack://lesson3/./js/main.js?");

/***/ }),

/***/ "./js/media.js":
/*!*********************!*\
  !*** ./js/media.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"audio\": () => (/* binding */ audio),\n/* harmony export */   \"video\": () => (/* binding */ video),\n/* harmony export */   \"flowers\": () => (/* binding */ flowers)\n/* harmony export */ });\n/* harmony import */ var _img_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/1.jpg */ \"./img/1.jpg\");\n/* harmony import */ var _img_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/2.jpg */ \"./img/2.jpg\");\n/* harmony import */ var _img_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/3.jpg */ \"./img/3.jpg\");\n/* harmony import */ var _img_4_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/4.gif */ \"./img/4.gif\");\n/* harmony import */ var _audio_1_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../audio/1.mp3 */ \"./audio/1.mp3\");\n/* harmony import */ var _audio_2_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audio/2.mp3 */ \"./audio/2.mp3\");\n/* harmony import */ var _audio_3_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audio/3.mp3 */ \"./audio/3.mp3\");\n/* harmony import */ var _video_1_mp4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../video/1.mp4 */ \"./video/1.mp4\");\n/* harmony import */ var _video_2_mp4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../video/2.mp4 */ \"./video/2.mp4\");\n\r\n\r\n\r\n\r\n\r\nconst pic1 = document.createElement('img');\r\nconst pic2 = document.createElement('img');\r\nconst pic3 = document.createElement('img');\r\nconst pic4 = document.createElement('img');\r\n\r\npic1.src = _img_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\npic2.src = _img_2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\npic3.src = _img_3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\npic4.src = _img_4_gif__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n\r\n;\r\n\r\n\r\n\r\nconst aud1 = document.createElement('audio');\r\nconst aud2 = document.createElement('audio');\r\nconst aud3 = document.createElement('audio');\r\n\r\naud1.src = _audio_1_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\r\naud2.src = _audio_2_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\r\naud3.src = _audio_3_mp3__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\r\n\r\n;\r\n\r\n\r\nconst vid1 = document.createElement('video');\r\nconst vid2 = document.createElement('video');\r\n\r\nvid1.src = _video_1_mp4__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\r\nvid2.src = _video_2_mp4__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\r\n\r\nconst audio = [_audio_1_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _audio_2_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _audio_3_mp3__WEBPACK_IMPORTED_MODULE_6__[\"default\"]]\r\nconst video = [_video_1_mp4__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _video_2_mp4__WEBPACK_IMPORTED_MODULE_8__[\"default\"]]\r\nconst flowers = [_img_1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _img_2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _img_3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _img_4_gif__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]\r\n\n\n//# sourceURL=webpack://lesson3/./js/media.js?");

/***/ }),

/***/ "./audio/1.mp3":
/*!*********************!*\
  !*** ./audio/1.mp3 ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/1.mp3\");\n\n//# sourceURL=webpack://lesson3/./audio/1.mp3?");

/***/ }),

/***/ "./audio/2.mp3":
/*!*********************!*\
  !*** ./audio/2.mp3 ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/2.mp3\");\n\n//# sourceURL=webpack://lesson3/./audio/2.mp3?");

/***/ }),

/***/ "./audio/3.mp3":
/*!*********************!*\
  !*** ./audio/3.mp3 ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"audio/3.mp3\");\n\n//# sourceURL=webpack://lesson3/./audio/3.mp3?");

/***/ }),

/***/ "./img/1.jpg":
/*!*******************!*\
  !*** ./img/1.jpg ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/1.jpg\");\n\n//# sourceURL=webpack://lesson3/./img/1.jpg?");

/***/ }),

/***/ "./img/2.jpg":
/*!*******************!*\
  !*** ./img/2.jpg ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/2.jpg\");\n\n//# sourceURL=webpack://lesson3/./img/2.jpg?");

/***/ }),

/***/ "./img/3.jpg":
/*!*******************!*\
  !*** ./img/3.jpg ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/3.jpg\");\n\n//# sourceURL=webpack://lesson3/./img/3.jpg?");

/***/ }),

/***/ "./img/4.gif":
/*!*******************!*\
  !*** ./img/4.gif ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/4.gif\");\n\n//# sourceURL=webpack://lesson3/./img/4.gif?");

/***/ }),

/***/ "./img/aloe.jpg":
/*!**********************!*\
  !*** ./img/aloe.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/aloe.jpg\");\n\n//# sourceURL=webpack://lesson3/./img/aloe.jpg?");

/***/ }),

/***/ "./video/1.mp4":
/*!*********************!*\
  !*** ./video/1.mp4 ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"video/1.mp4\");\n\n//# sourceURL=webpack://lesson3/./video/1.mp4?");

/***/ }),

/***/ "./video/2.mp4":
/*!*********************!*\
  !*** ./video/2.mp4 ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"video/2.mp4\");\n\n//# sourceURL=webpack://lesson3/./video/2.mp4?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lesson3/./styles/main.scss?");

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
/******/ 			// no module.id needed
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;