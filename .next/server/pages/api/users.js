"use strict";
(() => {
var exports = {};
exports.id = 2829;
exports.ids = [2829,6450];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

if (!process.env.MONGODB_URI) {
    throw new Error("No se ha podido conectar a la base de datos");
}
const uri = process.env.MONGODB_URI;
let client;
let clientPromise;
if (false) {} else {
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    clientPromise = client.connect();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ }),

/***/ 1800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2536);

async function handler(req, res) {
    const client = await _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__["default"];
    const db = await client.db();
    const body = req.body;
    if (req.method === "GET") {
        const data = await db.collection("users").find({}).limit(50).toArray();
        const users = JSON.parse(JSON.stringify(data));
        res.status(200).json(users);
    }
    if (req.method === "POST") {
        let data1 = await db.collection("users").insertOne(body);
        let user = JSON.parse(JSON.stringify(data1));
        res.json(user.ops[0]);
    }
    if (req.method === "DELETE") {
        await db.collection("users").findOne({
            username: body.username
        }).removeOne();
        res.status(200).json({
            message: "Usuario eliminado correctamente"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1800));
module.exports = __webpack_exports__;

})();