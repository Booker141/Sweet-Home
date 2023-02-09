"use strict";
(() => {
var exports = {};
exports.id = 8358;
exports.ids = [8358];
exports.modules = {

/***/ 6608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NewsId),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9493);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4642);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_global_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2081);
/* harmony import */ var components_New_New__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1074);









function NewsId({ news  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    console.log(news);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "51916ec1c9c3a3c9",
                            [
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .fonts.secondary */ .Rq.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .colors.primary */ .O9.primary
                            ]
                        ]
                    ]),
                    children: [
                        "Noticia ",
                        router.query.newId
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "51916ec1c9c3a3c9",
                        [
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .colors.primary */ .O9.primary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .fonts.secondary */ .Rq.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .colors.primary */ .O9.primary
                        ]
                    ]
                ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().title) || ""),
                children: [
                    "Noticia ",
                    router?.query?.newId,
                    " ✧"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_New_New__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                title: news.title,
                date: news.date,
                author: news.author,
                introduction: news.introduction,
                body: news.body,
                conclusion: news.conclusion
            }, news._id),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "51916ec1c9c3a3c9",
                dynamic: [
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .colors.primary */ .O9.primary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .fonts.secondary */ .Rq.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .colors.primary */ .O9.primary
                ],
                children: `.dialog.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.dialog__name.__jsx-style-dynamic-selector{font-family:"Poppins",sans-serif;font-weight:450}.dialog__italic.__jsx-style-dynamic-selector{font-family:"Poppins",sans-serif;font-style:italic}.highlighted.__jsx-style-dynamic-selector{margin-bottom:3rem;font-weight:400;font-family:"Poppins",sans-serif;font-size:1.2rem;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .colors.primary */ .O9.primary}}.list.__jsx-style-dynamic-selector{margin-bottom:5rem;font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .fonts.secondary */ .Rq.secondary};list-style-type:circle}hr.__jsx-style-dynamic-selector{width:100%;margin-bottom:5rem}p.__jsx-style-dynamic-selector{margin-bottom:4rem}h2.__jsx-style-dynamic-selector{font-weight:400;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_5__/* .colors.primary */ .O9.primary}}li.__jsx-style-dynamic-selector{margin-bottom:1.5rem}li.__jsx-style-dynamic-selector:last-child{margin-bottom:3.5rem}`
            })
        ]
    });
}
async function getServerSideProps(context) {
    const { newId  } = context.query;
    const res = await fetch(`http://localhost:3000/api/news/${newId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const news = await res.json();
    return {
        props: {
            news
        }
    };
}


/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 8098:
/***/ ((module) => {

module.exports = require("react-icons/ri");

/***/ }),

/***/ 382:
/***/ ((module) => {

module.exports = require("react-icons/vsc");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841,9493,1074], () => (__webpack_exec__(6608)));
module.exports = __webpack_exports__;

})();