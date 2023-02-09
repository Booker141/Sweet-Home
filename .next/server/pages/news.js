"use strict";
(() => {
var exports = {};
exports.id = 6134;
exports.ids = [6134];
exports.modules = {

/***/ 9372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ News),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4642);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_global_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2081);
/* harmony import */ var components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9493);
/* harmony import */ var components_New_New__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1074);









/*
    * @author Sergio García Navarro
    * @returns Conditions page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the conditions page of the application
*/ /**
 * It returns a Layout component with a Head component inside it, which sets the title of the page to
 * "Condiciones", and a bunch of other components inside it, which display the terms and conditions of
 * the app
 * @returns the Layout component with the children props being the <> component.
 */ function News({ news  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "b154d0de74a58753",
                            [
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .fonts.secondary */ .Rq.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.tertiary */ .O9.tertiary
                            ]
                        ]
                    ]),
                    children: "Noticias"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "b154d0de74a58753",
                        [
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .fonts.secondary */ .Rq.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary */ .O9.primary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.tertiary */ .O9.tertiary
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "b154d0de74a58753",
                                [
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .fonts.secondary */ .Rq.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.tertiary */ .O9.tertiary
                                ]
                            ]
                        ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().title) || ""),
                        children: "\xdaltimas noticias ✧"
                    }),
                    news.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "b154d0de74a58753",
                                [
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .fonts.secondary */ .Rq.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.tertiary */ .O9.tertiary
                                ]
                            ]
                        ]),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "b154d0de74a58753",
                                    [
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .fonts.secondary */ .Rq.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.tertiary */ .O9.tertiary
                                    ]
                                ]
                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().loading) || ""),
                            children: "Cargando.."
                        })
                    }),
                    news.map(({ _id , id , title , date , author , introduction  })=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "b154d0de74a58753",
                                        [
                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .fonts.secondary */ .Rq.secondary,
                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary */ .O9.primary,
                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.tertiary */ .O9.tertiary
                                        ]
                                    ]
                                ]) + " " + "new",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_New_New__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        id: id,
                                        title: title,
                                        date: date,
                                        author: author,
                                        introduction: introduction
                                    }, _id),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: `/news/${id}`,
                                        as: `/news/${id}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            "aria-label": "Enlace a noticia",
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "b154d0de74a58753",
                                                    [
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .fonts.secondary */ .Rq.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.tertiary */ .O9.tertiary
                                                    ]
                                                ]
                                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().link3) || ""),
                                            children: "Leer m\xe1s →"
                                        })
                                    })
                                ]
                            })
                        });
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "b154d0de74a58753",
                dynamic: [
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .fonts.secondary */ .Rq.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary */ .O9.primary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.tertiary */ .O9.tertiary
                ],
                children: `.new.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin-bottom:1rem;padding:1rem;font-family:"Poppins",sans-serif;color:#fafafa;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:-webkit-linear-gradient(45deg,rgba(240,129,15,1)35%,rgba(249,166,3,1)100%);background:-moz-linear-gradient(45deg,rgba(240,129,15,1)35%,rgba(249,166,3,1)100%);background:-o-linear-gradient(45deg,rgba(240,129,15,1)35%,rgba(249,166,3,1)100%);background:linear-gradient(45deg,rgba(240,129,15,1)35%,rgba(249,166,3,1)100%)}.list.__jsx-style-dynamic-selector{margin-bottom:5rem;font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .fonts.secondary */ .Rq.secondary};list-style-type:circle}hr.__jsx-style-dynamic-selector{width:100%;margin-bottom:5rem}p.__jsx-style-dynamic-selector{margin-bottom:4rem}h2.__jsx-style-dynamic-selector{font-weight:400;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.primary */ .O9.primary}}li.__jsx-style-dynamic-selector{margin-bottom:1.5rem}li.__jsx-style-dynamic-selector:last-child{margin-bottom:3.5rem}a.__jsx-style-dynamic-selector{margin-bottom:3rem;-webkit-transition:.3s all ease;-moz-transition:.3s all ease;-o-transition:.3s all ease;transition:.3s all ease}a.__jsx-style-dynamic-selector:hover{color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_4__/* .colors.tertiary */ .O9.tertiary}}`
            })
        ]
    });
}
async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/news", {
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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841,9493,1074], () => (__webpack_exec__(9372)));
module.exports = __webpack_exports__;

})();