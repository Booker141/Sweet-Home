"use strict";
(() => {
var exports = {};
exports.id = 4988;
exports.ids = [4988];
exports.modules = {

/***/ 9034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FollowersUser),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/global.module.css
var global_module = __webpack_require__(4642);
var global_module_default = /*#__PURE__*/__webpack_require__.n(global_module);
// EXTERNAL MODULE: ./components/Layout/Layout.js + 1 modules
var Layout = __webpack_require__(9493);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Follower/Follower.js





function Follower(props) {
    const { 0: user , 1: setUser  } = (0,external_react_.useState)({});
    (0,external_react_.useEffect)(async ()=>{
        const res = await fetch(`http://localhost:3000/api/users/${props.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const follower1 = await res.json();
        setUser(follower1);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-8c4a07b4890b80da" + " " + "follower",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-8c4a07b4890b80da" + " " + "follower__image",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: follower.image
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-8c4a07b4890b80da" + " " + "follower__info",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "jsx-8c4a07b4890b80da" + " " + ((global_module_default()).text || ""),
                            children: follower.username
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "8c4a07b4890b80da",
                children: ".follower.jsx-8c4a07b4890b80da{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin:.5rem 0;padding:.5rem 0;border-bottom:1px solid#eaeaea}.follower__image.jsx-8c4a07b4890b80da{width:2rem;height:2rem;margin-right:.5rem}.follower__info.jsx-8c4a07b4890b80da{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/profile/[username]/followersUser.js








function FollowersUser({ user  }) {
    const { data: session , status  } = (0,react_.useSession)({
        required: true
    });
    const { 0: followers , 1: setFollowers  } = (0,external_react_.useState)([]);
    const numFollowers = followers.length;
    (0,external_react_.useEffect)(()=>{
        if (session) {
            if (user.followers.length !== 0) setFollowers(user.followers);
        }
    }, []);
    console.log(user);
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
                        className: "jsx-749943a20526b278",
                        children: "Seguidores"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "jsx-749943a20526b278" + " " + ((global_module_default()).title || ""),
                    children: "Seguidores"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "jsx-749943a20526b278" + " " + ((global_module_default()).text || ""),
                    children: [
                        "Te siguen ",
                        numFollowers,
                        " personas"
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-749943a20526b278" + " " + "followers",
                    children: followers.map((_id)=>/*#__PURE__*/ jsx_runtime_.jsx(Follower, {
                            id: _id
                        }, _id))
                }),
                jsx_runtime_.jsx((style_default()), {
                    id: "749943a20526b278",
                    children: ""
                })
            ]
        });
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(Layout/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-7453fe9c594a9c64" + " " + ((global_module_default()).content || ""),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "jsx-7453fe9c594a9c64" + " " + "message",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "jsx-7453fe9c594a9c64" + " " + ((global_module_default()).title || ""),
                                    children: "Para acceder a esta p\xe1gina debe iniciar sesi\xf3n"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>signIn(),
                                    className: "jsx-7453fe9c594a9c64" + " " + ((global_module_default()).buttonPrimary || ""),
                                    children: "Iniciar sesi\xf3n"
                                })
                            ]
                        })
                    }),
                    jsx_runtime_.jsx((style_default()), {
                        id: "7453fe9c594a9c64",
                        children: ".message.jsx-7453fe9c594a9c64{display:flex flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
                    })
                ]
            })
        });
    }
}
async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/users/${context.query.username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const user = await res.json();
    return {
        props: {
            user
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841,9493], () => (__webpack_exec__(9034)));
module.exports = __webpack_exports__;

})();