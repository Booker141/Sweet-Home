"use strict";
(() => {
var exports = {};
exports.id = 7998;
exports.ids = [7998];
exports.modules = {

/***/ 3393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Attendances),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/global.module.css
var global_module = __webpack_require__(4642);
var global_module_default = /*#__PURE__*/__webpack_require__.n(global_module);
// EXTERNAL MODULE: ./components/Layout/Layout.js + 1 modules
var Layout = __webpack_require__(9493);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/frontend-conf.js
var frontend_conf = __webpack_require__(2081);
;// CONCATENATED MODULE: ./components/TypeAttendance/TypeAttendance.js





function TypeAttendance(props) {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "18a7f1e4ae5d4bc8",
                        [
                            frontend_conf/* colors.tertiary */.O9.tertiary
                        ]
                    ]
                ]) + " " + ((global_module_default()).typeAttendance || ""),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: style_default().dynamic([
                            [
                                "18a7f1e4ae5d4bc8",
                                [
                                    frontend_conf/* colors.tertiary */.O9.tertiary
                                ]
                            ]
                        ]) + " " + ((global_module_default()).tertiary || ""),
                        children: props.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                        className: style_default().dynamic([
                            [
                                "18a7f1e4ae5d4bc8",
                                [
                                    frontend_conf/* colors.tertiary */.O9.tertiary
                                ]
                            ]
                        ]) + " " + ((global_module_default()).white__line2 || "")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: style_default().dynamic([
                            [
                                "18a7f1e4ae5d4bc8",
                                [
                                    frontend_conf/* colors.tertiary */.O9.tertiary
                                ]
                            ]
                        ]) + " " + ((global_module_default()).text || ""),
                        children: props.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>router.push(`/attendances/${props.urlName}`),
                        "aria-label": "Ir a " + `${props.url}`,
                        className: style_default().dynamic([
                            [
                                "18a7f1e4ae5d4bc8",
                                [
                                    frontend_conf/* colors.tertiary */.O9.tertiary
                                ]
                            ]
                        ]) + " " + ((global_module_default()).buttonTertiary || ""),
                        children: "Entrar"
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "18a7f1e4ae5d4bc8",
                dynamic: [
                    frontend_conf/* colors.tertiary */.O9.tertiary
                ],
                children: `h1.__jsx-style-dynamic-selector{margin-right:2rem;margin-left:2rem;margin-top:2rem;margin-bottom:2rem;font-size:1.4rem;font-weight:600}p.__jsx-style-dynamic-selector{margin-right:2rem;padding:2rem}button.__jsx-style-dynamic-selector{margin-left:2rem;margin-bottom:2rem;margin-top:1rem}a.__jsx-style-dynamic-selector:hover{color:${frontend_conf/* colors.tertiary */.O9.tertiary};-webkit-transition:.3s ease all;-moz-transition:.3s ease all;-o-transition:.3s ease all;transition:.3s ease all}`
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/attendances/index.js









/*
    * @author Sergio García Navarro
    * @returns Attendances page
    * @version 1.0
    * @date 13/12/2020
    * @description This page is the attendances page of the application
*/ /**
 * It returns a Layout component, which contains a Head component, a Header component, and a Footer
 * component
 * @returns the Layout component, which is a wrapper for the Header, Footer and the content of the
 * page.
 */ function Attendances({ typeAttendance  }) {
    const { data: session , status  } = (0,react_.useSession)({
        required: true
    });
    const { 0: isSorted , 1: setIsSorted  } = (0,external_react_.useState)(false);
    const { 0: sortedAttendance , 1: setSortedAttendance  } = (0,external_react_.useState)(typeAttendance);
    const Router = (0,router_.useRouter)();
    const sortAttendanceByName = ()=>{
        const sortedAttendance = typeAttendance.sort((a, b)=>{
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        setIsSorted(!isSorted);
        setSortedAttendance(sortedAttendance);
    };
    if (status == "loading") {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (global_module_default()).loading,
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: (global_module_default()).title,
                children: "Cargando.."
            })
        });
    }
    if (session) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Cuidados"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (global_module_default()).title,
                    children: "Foro de cuidados"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (global_module_default()).title2,
                    children: "Categor\xedas"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: (global_module_default()).buttonPrimary,
                    onClick: ()=>sortAttendanceByName(),
                    "aria-label": "Ordenar categor\xedas por nombre",
                    children: "Ordenar por nombre"
                }),
                typeAttendance.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (global_module_default()).loading,
                        children: "Cargando.."
                    })
                }),
                isSorted && sortedAttendance.map(({ _id , name , description , urlName  })=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TypeAttendance, {
                            name: name,
                            description: description,
                            urlName: urlName
                        }, _id)
                    });
                }),
                !isSorted && typeAttendance.map(({ _id , name , description , urlName  })=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(TypeAttendance, {
                            name: name,
                            description: description,
                            urlName: urlName
                        }, _id)
                    });
                })
            ]
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-b9e5ea5e53453efb" + " " + ((global_module_default()).content || ""),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-b9e5ea5e53453efb" + " " + "message",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "jsx-b9e5ea5e53453efb" + " " + ((global_module_default()).title || ""),
                                    children: "Para acceder a esta p\xe1gina debe iniciar sesi\xf3n"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>signIn(),
                                    className: "jsx-b9e5ea5e53453efb" + " " + ((global_module_default()).buttonPrimary || ""),
                                    children: "Iniciar sesi\xf3n"
                                })
                            ]
                        })
                    }),
                    jsx_runtime_.jsx((style_default()), {
                        id: "b9e5ea5e53453efb",
                        children: ".message.jsx-b9e5ea5e53453efb{display:flex flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
                    })
                ]
            })
        });
    }
}
async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/typeAttendance", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const typeAttendance = await res.json();
    return {
        props: {
            typeAttendance: JSON.parse(JSON.stringify(typeAttendance))
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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841,9493], () => (__webpack_exec__(3393)));
module.exports = __webpack_exports__;

})();