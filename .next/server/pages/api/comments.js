"use strict";
(() => {
var exports = {};
exports.id = 3265;
exports.ids = [3265,6450];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 9842:
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
    const body = req.body;
    const user = await db.collection("users").findOne({
        username: body.username
    });
    if (req.method === "GET") {
        const data = await db.collection("comments").find({}).limit(50).toArray();
        const comments = JSON.parse(JSON.stringify(data));
        res.status(200).json(comments);
    }
    if (req.method === "POST") {
        const data1 = await db.collection("comments").insertOne({
            description: body.description,
            username: body.username,
            userId: user._id,
            postId: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(body.postId)
        });
        let comment = JSON.parse(JSON.stringify(data1));
        console.log(comment);
        await db.collection("posts").updateOne({
            _id: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(body.postId)
        }, {
            $push: {
                comments: (0,mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId)(comment.insertedId)
            }
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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9842));
module.exports = __webpack_exports__;

})();