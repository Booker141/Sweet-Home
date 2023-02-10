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
exports.id = "pages/api/news";
exports.ids = ["pages/api/news"];
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

/***/ "(api)/./pages/api/news/index.js":
/*!*********************************!*\
  !*** ./pages/api/news/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/MongoDB */ \"(api)/./pages/api/lib/MongoDB.js\");\n\nasync function handler(req, res) {\n    const client = await _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = await client.db();\n    const body = req.body;\n    if (req.method === \"GET\") {\n        const data = await db.collection(\"news\").find({}).limit(50).toArray();\n        const news = JSON.parse(JSON.stringify(data));\n        res.status(200).json(news);\n    }\n    if (req.method === \"POST\") {\n        const data1 = await db.collection(\"news\").insertOne(body);\n        const news1 = JSON.parse(JSON.stringify(data1));\n        res.json(news1.ops[0]);\n    }\n    if (req.method === \"DELETE\") {\n        await db.collection(\"news\").findOne({\n            _id: body.id\n        }).removeOne();\n        res.status(200).json({\n            message: \"Noticia eliminada correctamente\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEwQztBQUUzQixlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFDO0lBRTNDLE1BQU1DLE1BQU0sR0FBRyxNQUFNSixvREFBYTtJQUNsQyxNQUFNSyxFQUFFLEdBQUcsTUFBTUQsTUFBTSxDQUFDQyxFQUFFLEVBQUU7SUFDNUIsTUFBTUMsSUFBSSxHQUFHSixHQUFHLENBQUNJLElBQUk7SUFFckIsSUFBR0osR0FBRyxDQUFDSyxNQUFNLEtBQUssS0FBSyxFQUFDO1FBRXBCLE1BQU1DLElBQUksR0FBRyxNQUFNSCxFQUFFLENBQUNJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNDLE9BQU8sRUFBRTtRQUVyRSxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDLENBQUM7UUFFN0NMLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLElBQUksQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUFFRCxJQUFHWCxHQUFHLENBQUNLLE1BQU0sS0FBSyxNQUFNLEVBQUM7UUFFckIsTUFBTUMsS0FBSSxHQUFHLE1BQU1ILEVBQUUsQ0FBQ0ksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDVSxTQUFTLENBQUNiLElBQUksQ0FBQztRQUV4RCxNQUFNTyxLQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLFNBQVMsQ0FBQ1IsS0FBSSxDQUFDLENBQUM7UUFFN0NMLEdBQUcsQ0FBQ2UsSUFBSSxDQUFDTCxLQUFJLENBQUNPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFRCxJQUFHbEIsR0FBRyxDQUFDSyxNQUFNLEtBQUssUUFBUSxFQUFDO1FBRXZCLE1BQU1GLEVBQUUsQ0FBQ0ksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDWSxPQUFPLENBQUM7WUFBQ0MsR0FBRyxFQUFFaEIsSUFBSSxDQUFDaUIsRUFBRTtTQUFDLENBQUMsQ0FBQ0MsU0FBUyxFQUFFLENBQUM7UUFFaEVyQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNPLE9BQU8sRUFBRSxpQ0FBaUM7U0FBQyxDQUFDLENBQUM7SUFFdkUsQ0FBQztBQUlMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2VldC1ob21lLy4vcGFnZXMvYXBpL25ld3MvaW5kZXguanM/NjVjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vbGliL01vbmdvREJcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKXtcblxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2U7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBib2R5ID0gcmVxLmJvZHk7XG5cbiAgICBpZihyZXEubWV0aG9kID09PSAnR0VUJyl7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ25ld3MnKS5maW5kKHt9KS5saW1pdCg1MCkudG9BcnJheSgpO1xuXG4gICAgICAgIGNvbnN0IG5ld3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihuZXdzKTtcblxuICAgIH1cblxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRiLmNvbGxlY3Rpb24oJ25ld3MnKS5pbnNlcnRPbmUoYm9keSk7XG5cbiAgICAgICAgY29uc3QgbmV3cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgICAgIHJlcy5qc29uKG5ld3Mub3BzWzBdKTtcblxuICAgIH1cblxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKXtcblxuICAgICAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKCduZXdzJykuZmluZE9uZSh7X2lkOiBib2R5LmlkfSkucmVtb3ZlT25lKCk7XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe21lc3NhZ2U6IFwiTm90aWNpYSBlbGltaW5hZGEgY29ycmVjdGFtZW50ZVwifSk7XG5cbiAgICB9XG5cbiAgXG4gICAgXG59Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJib2R5IiwibWV0aG9kIiwiZGF0YSIsImNvbGxlY3Rpb24iLCJmaW5kIiwibGltaXQiLCJ0b0FycmF5IiwibmV3cyIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJpbnNlcnRPbmUiLCJvcHMiLCJmaW5kT25lIiwiX2lkIiwiaWQiLCJyZW1vdmVPbmUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/news/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/news/index.js"));
module.exports = __webpack_exports__;

})();