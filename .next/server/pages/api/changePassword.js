"use strict";
(() => {
var exports = {};
exports.id = 6330;
exports.ids = [6330,6450];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_MongoDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2536);


async function handler(req, res) {
    if (req.method == "PUT") {
        const client = await _lib_MongoDB__WEBPACK_IMPORTED_MODULE_1__["default"];
        const db = await client.db();
        let body = JSON.parse(req.body);
        const userExist = db.collection("users").findOne({
            email: body.email
        });
        if (userExist) {
            const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSalt(10);
            const hashPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(body.password, salt);
            userExist.update({
                password: hashPassword
            });
        } else {
            res.status(200).json({
                message: "No existe el usuario"
            });
        }
    }
}


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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(817));
module.exports = __webpack_exports__;

})();