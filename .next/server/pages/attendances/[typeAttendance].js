"use strict";
(() => {
var exports = {};
exports.id = 6153;
exports.ids = [6153];
exports.modules = {

/***/ 5526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TypeAttendance),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4642);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9493);








function TypeAttendance({ threads  }) {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)({
        required: true
    });
    const { 0: isSortedByName , 1: setIsSortedByName  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: isSortedByDate , 1: setIsSortedByDate  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: isSortedByNumPosts , 1: setIsSortedByNumPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: sortedThreads , 1: setSortedThreads  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(threads);
    const { 0: typeAttendance , 1: setTypeAttendance  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        nutrition: false,
        hygiene: false,
        leisure: false,
        health: false,
        education: false,
        physichalActivity: false,
        attendance: ""
    });
    const { 0: numPosts , 1: setNumPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (router.query.typeAttendance == "nutrition") {
            setTypeAttendance({
                nutrition: true,
                hygiene: false,
                leisure: false,
                health: false,
                education: false,
                physichalActivity: false,
                attendance: "Nutrici\xf3n"
            });
        }
        if (router.query.typeAttendance == "hygiene") {
            setTypeAttendance({
                nutrition: false,
                hygiene: true,
                leisure: false,
                health: false,
                education: false,
                physichalActivity: false,
                attendance: "Higiene"
            });
        }
        if (router.query.typeAttendance == "leisure") {
            setTypeAttendance({
                nutrition: false,
                hygiene: false,
                leisure: true,
                health: false,
                education: false,
                physichalActivity: false,
                attendance: "Ocio"
            });
        }
        if (router.query.typeAttendance == "health") {
            setTypeAttendance({
                nutrition: false,
                hygiene: false,
                leisure: false,
                health: true,
                education: false,
                physichalActivity: false,
                attendance: "Salud"
            });
        }
        if (router.query.typeAttendance == "education") {
            setTypeAttendance({
                nutrition: false,
                hygiene: false,
                leisure: false,
                health: false,
                education: true,
                physichalActivity: false,
                attendance: "Educaci\xf3n"
            });
        }
        if (router.query.typeAttendance == "physichalActivity") {
            setTypeAttendance({
                nutrition: false,
                hygiene: false,
                leisure: false,
                health: false,
                education: false,
                physichalActivity: true,
                attendance: "Actividad f\xedsica"
            });
        }
    }, []);
    const sortThreadByName = ()=>{
        const sortedThreads = threads.sort((a, b)=>{
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        setIsSortedByName(!isSortedByName);
        setSortedThreads(sortedThreads);
    };
    const sortThreadByDate = ()=>{
        const sortedThreads = threads.sort((a, b)=>{
            if (a.createdAt > b.createdAt) {
                return 1;
            }
            if (a.createdAt < b.createdAt) {
                return -1;
            }
            return 0;
        });
        setIsSortedByDate(!isSortedByDate);
        setSortedThreads(sortedThreads);
    };
    const sortThreadByNumPosts = ()=>{
        const sortedThreads = threads.sort((a, b)=>{
            if (a.numPosts > b.numPosts) {
                return 1;
            }
            if (a.numPosts < b.numPosts) {
                return -1;
            }
            return 0;
        });
        setIsSortedByNumPosts(!isSortedByNumPosts);
        setSortedThreads(sortedThreads);
    };
    if (status === "loading") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().loading),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),
                children: "Cargando.."
            })
        });
    }
    if (session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        className: "jsx-a183743a7568749",
                        children: [
                            "Hilos sobre ",
                            typeAttendance.attendance
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                    className: "jsx-a183743a7568749" + " " + ((_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().title) || ""),
                    children: [
                        "Hilos sobre ",
                        typeAttendance.attendance
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-a183743a7568749" + " " + "sort__buttons",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>router.push(`/attendances/${router.query.typeAttendance}/createThread`),
                            "aria-label": "Crear nuevo hilo",
                            className: "jsx-a183743a7568749" + " " + ((_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonPrimary) || ""),
                            children: "Crear hilo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>sortThreadByName(),
                            "aria-label": "Ordenar categor\xedas por nombre",
                            className: "jsx-a183743a7568749" + " " + ((_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonPrimary) || ""),
                            children: "Ordenar por nombre"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>sortThreadByDate(),
                            "aria-label": "Ordenar categor\xedas por nombre",
                            className: "jsx-a183743a7568749" + " " + ((_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonPrimary) || ""),
                            children: "Ordenar por fecha"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>sortThreadByNumPosts(),
                            "aria-label": "Ordenar por actividad",
                            className: "jsx-a183743a7568749" + " " + ((_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonPrimary) || ""),
                            children: "Ordenar por actividad"
                        })
                    ]
                }),
                threads.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-a183743a7568749" + " " + ((_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().loading) || ""),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "jsx-a183743a7568749",
                        children: "Cargando.."
                    })
                }),
                isSortedByName && sortedThreads.map(({ _id , name , typeAttendanceId , createdAt , userId  })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Thread, {
                            name: name,
                            typeAttendanceId: typeAttendance,
                            createdAt: createdAt,
                            userId: userId
                        }, _id)
                    });
                }),
                isSortedByDate && sortedThreads.map(({ _id , name , typeAttendanceId , createdAt , userId  })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Thread, {
                            name: name,
                            typeAttendanceId: typeAttendance,
                            createdAt: createdAt,
                            userId: userId
                        }, _id)
                    });
                }),
                isSortedByNumPosts && sortedThreads.map(({ _id , name , typeAttendanceId , createdAt , userId  })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Thread, {
                            name: name,
                            typeAttendanceId: typeAttendance,
                            createdAt: createdAt,
                            userId: userId
                        }, _id)
                    });
                }),
                !isSortedByNumPosts && threads.map(({ _id , name , typeAttendanceId , createdAt , userId  })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Thread, {
                            name: name,
                            typeAttendanceId: typeAttendance,
                            createdAt: createdAt,
                            userId: userId
                        }, _id)
                    });
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "a183743a7568749",
                    children: ".sort__buttons.jsx-a183743a7568749{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:1rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
                })
            ]
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-e6e6aabbf62f01eb" + " " + ((_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().content) || ""),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-e6e6aabbf62f01eb" + " " + "message",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-e6e6aabbf62f01eb" + " " + ((_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().title) || ""),
                                    children: "Para acceder a esta p\xe1gina debe iniciar sesi\xf3n"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>signIn(),
                                    className: "jsx-e6e6aabbf62f01eb" + " " + ((_styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonPrimary) || ""),
                                    children: "Iniciar sesi\xf3n"
                                })
                            ]
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "e6e6aabbf62f01eb",
                        children: ".message.jsx-e6e6aabbf62f01eb{display:flex flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
                    })
                ]
            })
        });
    }
}
async function getServerSideProps(context) {
    const { typeAttendance  } = context.params;
    const res = await fetch(`http://localhost:3000/api/threads/${typeAttendance}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const threads = await res.json();
    return {
        props: {
            threads: JSON.parse(JSON.stringify(threads))
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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841,9493], () => (__webpack_exec__(5526)));
module.exports = __webpack_exports__;

})();