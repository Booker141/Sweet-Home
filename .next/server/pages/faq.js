"use strict";
(() => {
var exports = {};
exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 6432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Use),
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/global.module.css
var global_module = __webpack_require__(4642);
var global_module_default = /*#__PURE__*/__webpack_require__.n(global_module);
// EXTERNAL MODULE: ./components/Layout/Layout.js + 1 modules
var Layout = __webpack_require__(9493);
;// CONCATENATED MODULE: ./components/Question/Question.js



/**
 * This function takes in a question object and returns a div with the question's title and description
 * @param props - This is the object that contains all the data that was passed to the component.
 * @returns A function that returns a JSX element.
 */ function Question(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-20e74da85b61da60" + " " + ((global_module_default()).question || ""),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "jsx-20e74da85b61da60" + " " + ((global_module_default()).secondary2 || ""),
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "jsx-20e74da85b61da60" + " " + ((global_module_default()).text2 || ""),
                        children: props.description
                    })
                ]
            }, props._id),
            jsx_runtime_.jsx((style_default()), {
                id: "20e74da85b61da60",
                children: ""
            })
        ]
    });
}

;// CONCATENATED MODULE: ./public/faq-1.svg
/* harmony default export */ const faq_1 = ({"src":"/_next/static/media/faq-1.7f1abfcf.svg","height":500,"width":500});
;// CONCATENATED MODULE: ./pages/faq/index.js








/*
    * @author Sergio García Navarro
    * @returns Use page
    * @version 1.0
    * @date 13/12/2020
    * @description Use page
*/ /**
 * It returns a div with a title
 * @returns A React element.
 */ function Use({ questions  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    className: "jsx-31992c28c06dc5cc",
                    children: "Preguntas frecuentes"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-31992c28c06dc5cc" + " " + "faq",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        id: "title",
                        className: "jsx-31992c28c06dc5cc" + " " + ((global_module_default()).title || ""),
                        children: "Preguntas frecuentes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-31992c28c06dc5cc" + " " + "top__image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: faq_1,
                            alt: "Imagen de un perro mirando al frente",
                            priority: true
                        })
                    }),
                    questions.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-31992c28c06dc5cc",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "jsx-31992c28c06dc5cc" + " " + ((global_module_default()).loading || ""),
                            children: "Cargando.."
                        })
                    }),
                    questions.map(({ _id , title , description  })=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Question, {
                                title: title,
                                description: description
                            }, _id)
                        });
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "31992c28c06dc5cc",
                children: "#title.jsx-31992c28c06dc5cc{margin-bottom:4rem}.faq.jsx-31992c28c06dc5cc{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.top__image.jsx-31992c28c06dc5cc{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;margin-bottom:3rem;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}"
            })
        ]
    });
}
async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/questions", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const questions = await res.json();
    return {
        props: {
            questions
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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841,9493], () => (__webpack_exec__(6432)));
module.exports = __webpack_exports__;

})();