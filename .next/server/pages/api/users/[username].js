"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/users/[username]";
exports.ids = ["pages/api/users/[username]"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/lib/MongoDB.js":
/*!**********************************!*\
  !*** ./pages/api/lib/MongoDB.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"No se ha podido conectar a la base de datos\");\n}\nconst uri = process.env.MONGODB_URI;\nlet client;\nlet clientPromise;\nif (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGliL01vbmdvREIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUU1QixNQUFNLElBQUlDLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0FBRWpFLENBQUM7QUFFRCxNQUFNQyxHQUFHLEdBQUdKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO0FBRW5DLElBQUlHLE1BQU07QUFDVixJQUFJQyxhQUFhO0FBRWpCLElBQUlOLElBQXNDLEVBQUU7SUFFMUMsSUFBSSxDQUFDTyxNQUFNLENBQUNDLG1CQUFtQixFQUFFO1FBQy9CSCxNQUFNLEdBQUcsSUFBSU4sZ0RBQVcsQ0FBQ0ssR0FBRyxFQUFFO1lBQUVLLGVBQWUsRUFBQyxJQUFJO1lBQUVDLGtCQUFrQixFQUFDLElBQUk7U0FBRSxDQUFDLENBQUM7UUFDakZILE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdILE1BQU0sQ0FBQ00sT0FBTyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVETCxhQUFhLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQW1CLENBQUM7QUFFN0MsT0FBTyxFQUdOO0FBRUQsaUVBQWVGLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N3ZWV0LWhvbWUvLi9wYWdlcy9hcGkvbGliL01vbmdvREIuanM/MjNhOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInXG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcblxuICB0aHJvdyBuZXcgRXJyb3IoJ05vIHNlIGhhIHBvZGlkbyBjb25lY3RhciBhIGxhIGJhc2UgZGUgZGF0b3MnKTtcbiAgXG59XG5cbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5sZXQgY2xpZW50O1xubGV0IGNsaWVudFByb21pc2U7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCB7IHVzZU5ld1VybFBhcnNlcjp0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6dHJ1ZSB9KTtcbiAgICBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG4gIH1cblxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG5cbn0gZWxzZSB7XG4gIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIHsgdXNlTmV3VXJsUGFyc2VyOnRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTp0cnVlICB9KTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsInVyaSIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/lib/MongoDB.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/[username]/index.js":
/*!*********************************************!*\
  !*** ./pages/api/users/[username]/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/MongoDB */ \"(api)/./pages/api/lib/MongoDB.js\");\n\nasync function handler(req, res) {\n    const client = await _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = await client.db();\n    if (req.method == \"GET\") {\n        const data = await db.collection(\"users\").findOne({\n            username: req.query.username\n        });\n        console.log(data);\n        const user = JSON.parse(JSON.stringify(data));\n        res.status(200).json(user);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvW3VzZXJuYW1lXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QztBQUU5QixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFDO0lBRTNDLE1BQU1DLE1BQU0sR0FBRyxNQUFNSixvREFBYTtJQUNsQyxNQUFNSyxFQUFFLEdBQUcsTUFBTUQsTUFBTSxDQUFDQyxFQUFFLEVBQUU7SUFFNUIsSUFBR0gsR0FBRyxDQUFDSSxNQUFNLElBQUksS0FBSyxFQUFDO1FBRW5CLE1BQU1DLElBQUksR0FBRyxNQUFNRixFQUFFLENBQUNHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO1lBQUNDLFFBQVEsRUFBRVIsR0FBRyxDQUFDUyxLQUFLLENBQUNELFFBQVE7U0FBQyxDQUFDO1FBRWpGRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sSUFBSSxDQUFDLENBQUM7UUFFbEIsTUFBTU8sSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNWLElBQUksQ0FBQyxDQUFDO1FBQzdDSixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxJQUFJLENBQUMsQ0FBQztJQUUvQixDQUFDO0FBR0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N3ZWV0LWhvbWUvLi9wYWdlcy9hcGkvdXNlcnMvW3VzZXJuYW1lXS9pbmRleC5qcz8yYzQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi9saWIvTW9uZ29EQlwiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNsaWVudC5kYigpO1xuXG4gICAgaWYocmVxLm1ldGhvZCA9PSBcIkdFVFwiKXtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kT25lKHt1c2VybmFtZTogcmVxLnF1ZXJ5LnVzZXJuYW1lfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgY29uc3QgdXNlciA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyKTtcblxuICAgIH1cbiAgIFxuICAgIFxufSJdLCJuYW1lcyI6WyJjbGllbnRQcm9taXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNsaWVudCIsImRiIiwibWV0aG9kIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwidXNlcm5hbWUiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/[username]/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/[username]/index.js"));
module.exports = __webpack_exports__;

})();