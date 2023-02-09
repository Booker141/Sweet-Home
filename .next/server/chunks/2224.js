"use strict";
exports.id = 2224;
exports.ids = [2224];
exports.modules = {

/***/ 2224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4642);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_global_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styles_frontend_conf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__);








function User(props) {
    const { 0: isFollowing , 1: setIsFollowing  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: isCaretaker , 1: setIsCaretaker  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    console.log(props);
    console.log(isCaretaker);
    const followUser = ()=>{
        setIsFollowing(!isFollowing);
        if (isFollowing) {}
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setIsCaretaker(props.isCaretaker);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-a9789b4e6a43273" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().user) || ""),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-a9789b4e6a43273" + " " + "user__image",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: props.userImage,
                            alt: "Imagen de usuario",
                            width: 30,
                            height: 30
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "jsx-a9789b4e6a43273" + " " + "user__username",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: `/profile/${props.username}`,
                                "aria-label": `Ir a perfil de ${props.username}`,
                                className: "jsx-a9789b4e6a43273" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().link) || ""),
                                children: [
                                    "@",
                                    props.username
                                ]
                            }),
                            isCaretaker && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsPatchCheckFill, {
                                size: 20,
                                color: styles_frontend_conf__WEBPACK_IMPORTED_MODULE_3__/* .colors.primary */ .O9.primary
                            })
                        ]
                    }),
                    isFollowing ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        onClick: ()=>followUser(),
                        className: "jsx-a9789b4e6a43273" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonTertiary2) || ""),
                        children: [
                            "Seguir ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineCheck, {})
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>followUser(),
                        className: "jsx-a9789b4e6a43273" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_7___default().buttonFollowed) || ""),
                        children: "Seguido"
                    })
                ]
            }, props._id),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "a9789b4e6a43273",
                children: ".user__image.jsx-a9789b4e6a43273{margin-left:1rem}.user__username.jsx-a9789b4e6a43273{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:.5rem}.text.jsx-a9789b4e6a43273{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.buttonTertiary.jsx-a9789b4e6a43273{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;float:right}a.jsx-a9789b4e6a43273{text-decoration:none}button.jsx-a9789b4e6a43273{margin-right:1rem;margin-top:1rem;margin-bottom:1rem}"
            })
        ]
    });
}


/***/ })

};
;