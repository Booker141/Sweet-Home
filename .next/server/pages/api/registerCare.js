"use strict";
(() => {
var exports = {};
exports.id = 2279;
exports.ids = [2279];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    if (req.method === "POST") {
        const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__.MongoClient.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = await client.db();
        const body = req.body;
        const userExist1 = await db.collection("users").findOne({
            email: body.email
        });
        const userExist2 = await db.collection("users").findOne({
            username: body.username
        });
        const userRole = await db.collection("userRole").findOne({
            name: "usuario"
        });
        const userStatus = await db.collection("userStatus").findOne({
            name: "activo"
        });
        if (userExist1) {
            res.status(200).json({
                message: "Ya est\xe1 registrado con este email."
            });
            return;
        }
        if (userExist2) {
            res.status(200).json({
                message: "Ya est\xe1 registrado con este nombre de usuario."
            });
            return;
        }
        const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSalt(10);
        const hashPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hash(body.password, salt);
        await db.collection("users").insertOne({
            email: body.email,
            firstname: body.name,
            lastname: body.lastname,
            username: body.username,
            password: hashPassword,
            phone: "",
            gender: "",
            birthdate: new Date("<2012-12-12>"),
            image: "/public/userPhotos/default.png",
            status: userStatus,
            role: userRole,
            createdAt: new Date(),
            accountId: mongodb__WEBPACK_IMPORTED_MODULE_1__.ObjectId,
            biography: "",
            followers: [],
            following: [],
            isCaretaker: true
        });
        if (res.statusCode == 500) {
            res.status(500).json({
                message: "Error al registrar el usuario."
            });
        }
        res.status(201).json({
            message: "Registrado con \xe9xito."
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
var __webpack_exports__ = (__webpack_exec__(6576));
module.exports = __webpack_exports__;

})();