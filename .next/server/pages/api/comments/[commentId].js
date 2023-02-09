"use strict";
(() => {
var exports = {};
exports.id = 9470;
exports.ids = [9470,6450];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2536);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    const client = await _lib_MongoDB__WEBPACK_IMPORTED_MODULE_0__["default"];
    const db = await client.db();
    console.log(req.query.commentId);
    if (req.method === "GET") {
        const data = await db.collection("comments").findOne({
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(req.query.commentId)
        });
        console.log(data);
        const user = await db.collection("users").findOne({
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(data.userId)
        });
        console.log(user);
        const comment = {
            ...data,
            ...user
        };
        res.status(200).json(comment);
    }
    if (req.method === "DELETE") {
        const comment1 = await db.collection("comments").findOne({
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(req.query.commentId)
        });
        await db.collection("posts").updateOne({
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(comment1.postId)
        }, {
            $pull: {
                comments: [
                    {
                        _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(req.query.commentId)
                    }
                ]
            }
        });
        await db.collection("comments").deleteOne({
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(req.query.commentId)
        });
        res.status(200).json({
            message: "Comentario eliminado"
        });
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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1725));
module.exports = __webpack_exports__;

})();