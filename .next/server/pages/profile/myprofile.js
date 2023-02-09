"use strict";
(() => {
var exports = {};
exports.id = 7232;
exports.ids = [7232];
exports.modules = {

/***/ 2519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyProfile),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4642);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styles_global_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2081);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_Layout_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9493);
/* harmony import */ var components_Post_Post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3580);













function MyProfile({ posts  }) {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();
    const { 0: followers , 1: setFollowers  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: following , 1: setFollowing  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const { 0: isCaretaker , 1: setIsCaretaker  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (session) {
            setFollowers(session.user.followers);
            setFollowing(session.user.following);
            setIsCaretaker(session.user.isCaretaker);
        }
    }, []);
    if (status == "loading") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().loading),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
                children: "Cargando.."
            })
        });
    }
    if (session) {
        const numFollowers = followers.length;
        const numFollowing = following.length;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "1de7c9b292ef7310",
                                [
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                ]
                            ]
                        ]),
                        children: "Mi perfil"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "1de7c9b292ef7310",
                            [
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                            ]
                        ]
                    ]) + " " + "container__profile",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                            src: session.user.image,
                            style: {
                                borderRadius: "50px"
                            },
                            width: 100,
                            height: 100
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "1de7c9b292ef7310",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                    ]
                                ]
                            ]) + " " + "profile__text",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "1de7c9b292ef7310",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                            ]
                                        ]
                                    ]) + " " + "text__username",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "1de7c9b292ef7310",
                                                    [
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                                    ]
                                                ]
                                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().title2) || ""),
                                            children: [
                                                "@",
                                                session.user.username
                                            ]
                                        }),
                                        isCaretaker && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsPatchCheckFill, {
                                            size: 30,
                                            color: styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>router.push("/settings"),
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "1de7c9b292ef7310",
                                                    [
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                                    ]
                                                ]
                                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().buttonTertiary) || ""),
                                            children: "Editar perfil"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "1de7c9b292ef7310",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                            ]
                                        ]
                                    ]) + " " + "profile__followers",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "1de7c9b292ef7310",
                                                    [
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                                    ]
                                                ]
                                            ]) + " " + "followers",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/profile/myprofile/followers",
                                                    "aria-label": `Ir a los seguidores de ${session.user.username}`,
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "1de7c9b292ef7310",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                                            ]
                                                        ]
                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().text) || ""),
                                                    children: "Seguidores"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "1de7c9b292ef7310",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                                            ]
                                                        ]
                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().text__bold) || ""),
                                                    children: numFollowers
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "1de7c9b292ef7310",
                                                    [
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                                    ]
                                                ]
                                            ]) + " " + "following",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "/profile/myprofile/following",
                                                    "aria-label": `Ir a los usuarios seguidos por ${session.user.username}`,
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "1de7c9b292ef7310",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                                            ]
                                                        ]
                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().text) || ""),
                                                    children: "Siguiendo"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "1de7c9b292ef7310",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                                            ]
                                                        ]
                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().text__bold) || ""),
                                                    children: numFollowing
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "1de7c9b292ef7310",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                            ]
                                        ]
                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().text) || ""),
                                    children: session.user.biography
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "1de7c9b292ef7310",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                    ]
                                ]
                            ]) + " " + "profile__functions",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "1de7c9b292ef7310",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                            ]
                                        ]
                                    ]) + " " + "function__title",
                                    children: "Publicaciones"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "1de7c9b292ef7310",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                            ]
                                        ]
                                    ]) + " " + "function__title",
                                    children: " Guardados "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "1de7c9b292ef7310",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                            ]
                                        ]
                                    ]) + " " + "function__title",
                                    children: " Mascotas "
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "1de7c9b292ef7310",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                                    ]
                                ]
                            ]) + " " + "posts",
                            children: posts.map(({ _id , userImage , username , location , mediaUrl , description , comments  })=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Post_Post__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                        id: _id,
                                        userImage: userImage,
                                        username: username,
                                        location: location,
                                        mediaUrl: mediaUrl,
                                        description: description,
                                        comments: comments
                                    })
                                });
                            })
                        })
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "1de7c9b292ef7310",
                    dynamic: [
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary
                    ],
                    children: `.container__profile.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border:1px solid ${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary};-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.profile__text.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-top:1rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.profile__text.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{margin-bottom:2rem}.text__username.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:1rem}.text__username.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.profile__followers.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:2rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:2rem}.followers.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.following.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.posts.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.profile__functions.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:2rem;margin-top:1.5rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.function__title.__jsx-style-dynamic-selector{margin-bottom:2rem;font-family:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};font-size:1rem;font-weight:500;color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary};border-bottom:2px solid ${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}button.__jsx-style-dynamic-selector{margin:2rem 2rem 2rem 0}a.__jsx-style-dynamic-selector{text-decoration:none;color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.quaternary */ .O9.quaternary}}`
                })
            ]
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-7453fe9c594a9c64" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().content) || ""),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-7453fe9c594a9c64" + " " + "message",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-7453fe9c594a9c64" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().title) || ""),
                                    children: "Para acceder a esta p\xe1gina debe iniciar sesi\xf3n"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),
                                    className: "jsx-7453fe9c594a9c64" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_11___default().buttonPrimary) || ""),
                                    children: "Iniciar sesi\xf3n"
                                })
                            ]
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "7453fe9c594a9c64",
                        children: ".message.jsx-7453fe9c594a9c64{display:flex flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
                    })
                ]
            })
        });
    }
}
async function getServerSideProps(context) {
    const { username  } = context.query;
    const post = await fetch(`http://localhost:3000/api/posts/${username}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    const posts = await post.json();
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts))
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

/***/ 1111:
/***/ ((module) => {

module.exports = require("react-icons/hi");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = require("react-icons/im");

/***/ }),

/***/ 9989:
/***/ ((module) => {

module.exports = require("react-icons/io5");

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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841,9493,3580], () => (__webpack_exec__(2519)));
module.exports = __webpack_exports__;

})();