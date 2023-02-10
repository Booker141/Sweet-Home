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
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
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

/***/ "(api)/./pages/api/posts/index.js":
/*!**********************************!*\
  !*** ./pages/api/posts/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/MongoDB */ \"(api)/./pages/api/lib/MongoDB.js\");\n\nasync function handler(req, res) {\n    const client = await _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    const db = await client.db();\n    const body = req.body;\n    const user = await db.collection(\"users\").findOne({\n        username: body.username\n    });\n    if (req.method == \"GET\") {\n        const data = await db.collection(\"posts\").find({}).limit(50).toArray();\n        const posts = JSON.parse(JSON.stringify(data));\n        res.status(200).json(posts);\n    }\n    if (req.method === \"POST\") {\n        await db.collection(\"posts\").insertOne({\n            location: body.location,\n            description: body.description,\n            comments: [],\n            likes: [],\n            saves: [],\n            userId: user._id,\n            username: body.username,\n            createdAt: new Date(),\n            image: \"\"\n        });\n        res.status(201).json({\n            message: \"Creada con \\xe9xito.\"\n        });\n        console.log(post);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFM0IsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBQztJQUUzQyxNQUFNQyxNQUFNLEdBQUcsTUFBTUosb0RBQWE7SUFDbEMsTUFBTUssRUFBRSxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0MsRUFBRSxFQUFFO0lBQzVCLE1BQU1DLElBQUksR0FBR0osR0FBRyxDQUFDSSxJQUFJO0lBQ3JCLE1BQU1DLElBQUksR0FBRyxNQUFNRixFQUFFLENBQUNHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO1FBQUNDLFFBQVEsRUFBRUosSUFBSSxDQUFDSSxRQUFRO0tBQUMsQ0FBQztJQUU1RSxJQUFHUixHQUFHLENBQUNTLE1BQU0sSUFBSSxLQUFLLEVBQUM7UUFFbkIsTUFBTUMsSUFBSSxHQUFHLE1BQU1QLEVBQUUsQ0FBQ0csVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDSyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO1FBRXRFLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsU0FBUyxDQUFDUCxJQUFJLENBQUMsQ0FBQztRQUU5Q1QsR0FBRyxDQUFDaUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLEtBQUssQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFFRCxJQUFHZCxHQUFHLENBQUNTLE1BQU0sS0FBSyxNQUFNLEVBQUM7UUFHckIsTUFBTU4sRUFBRSxDQUFDRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUNjLFNBQVMsQ0FBQztZQUFDQyxRQUFRLEVBQUVqQixJQUFJLENBQUNpQixRQUFRO1lBQUVDLFdBQVcsRUFBRWxCLElBQUksQ0FBQ2tCLFdBQVc7WUFBRUMsUUFBUSxFQUFFLEVBQUU7WUFBRUMsS0FBSyxFQUFFLEVBQUU7WUFBRUMsS0FBSyxFQUFFLEVBQUU7WUFBRUMsTUFBTSxFQUFFckIsSUFBSSxDQUFDc0IsR0FBRztZQUFFbkIsUUFBUSxFQUFFSixJQUFJLENBQUNJLFFBQVE7WUFBRW9CLFNBQVMsRUFBRSxJQUFJQyxJQUFJLEVBQUU7WUFBRUMsS0FBSyxFQUFFLEVBQUU7U0FBQyxDQUFDLENBQUM7UUFFbE43QixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDWSxPQUFPLEVBQUUsc0JBQW1CO1NBQUMsQ0FBQyxDQUFDO1FBRXJEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFHdEIsQ0FBQztBQUVMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2VldC1ob21lLy4vcGFnZXMvYXBpL3Bvc3RzL2luZGV4LmpzPzhlNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uL2xpYi9Nb25nb0RCXCJcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcyl7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xuICAgIGNvbnN0IGRiID0gYXdhaXQgY2xpZW50LmRiKCk7XG4gICAgY29uc3QgYm9keSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmZpbmRPbmUoe3VzZXJuYW1lOiBib2R5LnVzZXJuYW1lfSk7XG5cbiAgICBpZihyZXEubWV0aG9kID09IFwiR0VUXCIpe1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdwb3N0cycpLmZpbmQoe30pLmxpbWl0KDUwKS50b0FycmF5KCk7XG5cbiAgICAgICAgY29uc3QgcG9zdHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0cyk7XG5cbiAgICB9XG4gICBcbiAgICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpe1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3Bvc3RzJykuaW5zZXJ0T25lKHtsb2NhdGlvbjogYm9keS5sb2NhdGlvbiwgZGVzY3JpcHRpb246IGJvZHkuZGVzY3JpcHRpb24sIGNvbW1lbnRzOiBbXSwgbGlrZXM6IFtdLCBzYXZlczogW10sIHVzZXJJZDogdXNlci5faWQsIHVzZXJuYW1lOiBib2R5LnVzZXJuYW1lLCBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksIGltYWdlOiBcIlwifSk7XG5cbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdDcmVhZGEgY29uIMOpeGl0by4nfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhwb3N0KTtcbiAgICAgICAgXG5cbiAgICB9XG4gICAgXG59Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY2xpZW50IiwiZGIiLCJib2R5IiwidXNlciIsImNvbGxlY3Rpb24iLCJmaW5kT25lIiwidXNlcm5hbWUiLCJtZXRob2QiLCJkYXRhIiwiZmluZCIsImxpbWl0IiwidG9BcnJheSIsInBvc3RzIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImluc2VydE9uZSIsImxvY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJjb21tZW50cyIsImxpa2VzIiwic2F2ZXMiLCJ1c2VySWQiLCJfaWQiLCJjcmVhdGVkQXQiLCJEYXRlIiwiaW1hZ2UiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/index.js"));
module.exports = __webpack_exports__;

})();