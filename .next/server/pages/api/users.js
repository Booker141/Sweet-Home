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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
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

/***/ "(api)/./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/MongoDB */ \"(api)/./pages/api/lib/MongoDB.js\");\n\nasync function handler(req, res) {\n    const client = await _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = await client.db();\n    const body = req.body;\n    if (req.method === \"GET\") {\n        const data = await db.collection(\"users\").find({}).limit(50).toArray();\n        const users = JSON.parse(JSON.stringify(data));\n        res.status(200).json(users);\n    }\n    if (req.method === \"POST\") {\n        let data1 = await db.collection(\"users\").insertOne(body);\n        let user = JSON.parse(JSON.stringify(data1));\n        res.json(user.ops[0]);\n    }\n    if (req.method === \"DELETE\") {\n        await db.collection(\"users\").findOne({\n            username: body.username\n        }).removeOne();\n        res.status(200).json({\n            message: \"Usuario eliminado correctamente\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFM0IsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUUzQyxNQUFNQyxNQUFNLEdBQUcsTUFBTUosb0RBQWE7SUFDbEMsTUFBTUssRUFBRSxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0MsRUFBRSxFQUFFO0lBQzVCLE1BQU1DLElBQUksR0FBR0osR0FBRyxDQUFDSSxJQUFJO0lBRXJCLElBQUdKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLEtBQUssRUFBQztRQUVwQixNQUFNQyxJQUFJLEdBQUcsTUFBTUgsRUFBRSxDQUFDSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxPQUFPLEVBQUU7UUFFdEUsTUFBTUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNSLElBQUksQ0FBQyxDQUFDO1FBRTlDTCxHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDTCxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBR1gsR0FBRyxDQUFDSyxNQUFNLEtBQUssTUFBTSxFQUFDO1FBSXJCLElBQUlDLEtBQUksR0FBRyxNQUFNSCxFQUFFLENBQUNJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQ1UsU0FBUyxDQUFDYixJQUFJLENBQUM7UUFFdkQsSUFBSWMsSUFBSSxHQUFHTixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxTQUFTLENBQUNSLEtBQUksQ0FBQyxDQUFDO1FBRTNDTCxHQUFHLENBQUNlLElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBRUQsSUFBR25CLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLFFBQVEsRUFBQztRQUV2QixNQUFNRixFQUFFLENBQUNJLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQ2EsT0FBTyxDQUFDO1lBQUNDLFFBQVEsRUFBRWpCLElBQUksQ0FBQ2lCLFFBQVE7U0FBQyxDQUFDLENBQUNDLFNBQVMsRUFBRSxDQUFDO1FBRTVFckIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDTyxPQUFPLEVBQUUsaUNBQWlDO1NBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7QUFHTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3dlZXQtaG9tZS8uL3BhZ2VzL2FwaS91c2Vycy9pbmRleC5qcz8xZDhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi9saWIvTW9uZ29EQlwiXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpe1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcbiAgICBjb25zdCBkYiA9IGF3YWl0IGNsaWVudC5kYigpO1xuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcblxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdHRVQnKXtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kKHt9KS5saW1pdCg1MCkudG9BcnJheSgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdXNlcnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2Vycyk7XG4gICAgfVxuXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcbiAgICAgICAgXG4gICAgICAgIFxuXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5pbnNlcnRPbmUoYm9keSk7XG5cbiAgICAgICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgICByZXMuanNvbih1c2VyLm9wc1swXSk7XG5cbiAgICB9XG5cbiAgICBpZihyZXEubWV0aG9kID09PSAnREVMRVRFJyl7XG5cbiAgICAgICAgYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kT25lKHt1c2VybmFtZTogYm9keS51c2VybmFtZX0pLnJlbW92ZU9uZSgpO1xuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiBcIlVzdWFyaW8gZWxpbWluYWRvIGNvcnJlY3RhbWVudGVcIn0pO1xuICAgIH1cbiAgIFxuICAgXG59Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJib2R5IiwibWV0aG9kIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJmaW5kIiwibGltaXQiLCJ0b0FycmF5IiwidXNlcnMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiaW5zZXJ0T25lIiwidXNlciIsIm9wcyIsImZpbmRPbmUiLCJ1c2VybmFtZSIsInJlbW92ZU9uZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();