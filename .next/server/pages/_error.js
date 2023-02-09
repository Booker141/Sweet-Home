"use strict";
(() => {
var exports = {};
exports.id = 4820;
exports.ids = [4820];
exports.modules = {

/***/ 6135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9493);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4642);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_global_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2081);










/*
    * @author Sergio García Navarro
    * @returns Error page
    * @version 1.0
    * @date 13/01/2020
    * @description Error page
*/ /**
 * A function that returns an error message if the page is not found.
 */ function Error({ statusCode  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "401d7a7b47990254",
                                [
                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                ]
                            ]
                        ]),
                        children: [
                            "\xa1Ups! Algo ha salido mal.. Error ",
                            router.error,
                            statusCode
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "401d7a7b47990254",
                            [
                                _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                            ]
                        ]
                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_8___default().content) || ""),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "401d7a7b47990254",
                                [
                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                ]
                            ]
                        ]) + " " + "error",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "401d7a7b47990254",
                                        [
                                            _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                            _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                            _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                            _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                        ]
                                    ]
                                ]) + " " + "first-line",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdPets, {
                                        size: 35,
                                        color: _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        className: "icon"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "401d7a7b47990254",
                                                [
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                ]
                                            ]
                                        ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_8___default().title) || ""),
                                        children: [
                                            "Error ",
                                            statusCode
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdPets, {
                                        size: 35,
                                        color: _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        className: "icon"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                    [
                                        "401d7a7b47990254",
                                        [
                                            _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                            _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                            _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                            _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                        ]
                                    ]
                                ]) + " " + "second-line",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "401d7a7b47990254",
                                                [
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                ]
                                            ]
                                        ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_8___default().title) || ""),
                                        children: "Vaya... este perro se ha comido la p\xe1gina"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "401d7a7b47990254",
                                                [
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                ]
                                            ]
                                        ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_8___default().secondary) || ""),
                                        children: "Parece ser que este travieso perro se ha comido la p\xe1gina que buscabas. Solucionaremos este error lo antes posible."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        onClick: ()=>router.back(),
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "401d7a7b47990254",
                                                [
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                ]
                                            ]
                                        ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_8___default().buttonPrimary) || ""),
                                        children: "Volver"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: "/error-1.svg",
                                alt: "Imagen de perro",
                                width: 1000,
                                height: 1000
                            })
                        ]
                    })
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "401d7a7b47990254",
                    dynamic: [
                        _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                        _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                        _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                        _styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                    ],
                    children: `.text.__jsx-style-dynamic-selector{margin:1.5rem}.icon.__jsx-style-dynamic-selector{margin:7rem}.first-line.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.second-line.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.error.__jsx-style-dynamic-selector{display:block;margin:auto;text-align:center;height:30%}h1.__jsx-style-dynamic-selector{height:50%;font-size:2.5rem;font-family:${_styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};color:${_styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary};text-align:center}h2.__jsx-style-dynamic-selector{height:50%;margin-bottom:2rem;font-size:1rem;font-family:${_styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};color:${_styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary};text-align:center}img.__jsx-style-dynamic-selector{width:80%;height:50%;margin:auto;-webkit-animation-name:imagen;-moz-animation-name:imagen;-o-animation-name:imagen;animation-name:imagen;-webkit-animation-duration:2s;-moz-animation-duration:2s;-o-animation-duration:2s;animation-duration:2s}@-webkit-keyframes imagen{from{opacity:0}to{opacity:1}}@-moz-keyframes imagen{from{opacity:0}to{opacity:1}}@-o-keyframes imagen{from{opacity:0}to{opacity:1}}@keyframes imagen{from{opacity:0}to{opacity:1}}`
                })
            ]
        })
    });
}
Error.getInitialProps = ({ res , err  })=>{
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841,9493], () => (__webpack_exec__(6135)));
module.exports = __webpack_exports__;

})();