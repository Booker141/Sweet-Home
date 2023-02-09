"use strict";
(() => {
var exports = {};
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 9522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4642);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(styles_global_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2081);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8098);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1111);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9493);
/* harmony import */ var components_BasicFooter_BasicFooter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7148);
/* harmony import */ var components_Post_Post__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3580);
/* harmony import */ var components_User_User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2224);
















/* 
    * @author Sergio García Navarro
    * @returns Posts page
    * @version 1.0
    * @date 13/12/2020
    * @description Posts page
*/ /**
 * It returns a React fragment that contains a Head component with a title of "Reciente" and a div
 * that contains a list of posts
 * @returns An array of objects.
 */ function Home({ posts , users  }) {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)({
        required: true
    });
    const { 0: postList , 1: setPostList  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(posts);
    const { 0: search , 1: setSearch  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: isSortedByUsername , 1: setIsSortedByUsername  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: isSortedByLikes , 1: setIsSortedByLikes  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const refresh = ()=>{};
    const sortPostByUsername = ()=>{
        setIsSortedByUsername(!isSortedByUsername);
        const sortedPosts = posts.sort((a, b)=>a.username > b.username ? 1 : b.username > a.username ? -1 : 0);
        setPostList(sortedPosts);
    };
    const sortPostByLikes = ()=>{
        setIsSortedByLikes(!isSortedByLikes);
        const sortedPosts = posts.sort((a, b)=>a.likes > b.likes ? 1 : b.likes > a.likes ? -1 : 0);
        setPostList(sortedPosts);
    };
    console.log(session);
    const searchPost = (e)=>{
        e.preventDefault();
        setSearch(e.target.value);
        if (search.length > 0 && search !== " ") {
            const filteredPosts = posts.filter((post)=>post.username.toLowerCase().includes(search.toLowerCase()));
            setPostList(filteredPosts);
        }
    };
    if (status == "loading") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().loading),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().title),
                children: "Cargando.."
            })
        });
    }
    if (session) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "c5eebe69d863984d",
                                [
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                ]
                            ]
                        ]),
                        children: "Reciente"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "c5eebe69d863984d",
                            [
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                            ]
                        ]
                    ]) + " " + "column1__buttons",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>Router.push("/createPost"),
                            "aria-label": "Crear nuevo post",
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "c5eebe69d863984d",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                    ]
                                ]
                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().buttonPrimary) || ""),
                            children: "Crear post"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>sortPostByUsername(),
                            "aria-label": "Ordenar publicaciones por usuario",
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "c5eebe69d863984d",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                    ]
                                ]
                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().buttonPrimary) || ""),
                            children: "Ordenar por usuario"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>sortPostByLikes(),
                            "aria-label": "Ordenar publicaciones por likes",
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "c5eebe69d863984d",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                    ]
                                ]
                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().buttonPrimary) || ""),
                            children: "Ordenar por popularidad"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "c5eebe69d863984d",
                            [
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                            ]
                        ]
                    ]) + " " + "column1__search",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "c5eebe69d863984d",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                    ]
                                ]
                            ]) + " " + "search__icon",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_8__.RiSearchLine, {
                                size: 20,
                                color: styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "search",
                            name: "search",
                            value: search,
                            placeholder: "Buscar..",
                            onBlur: (e)=>searchPost(e),
                            onKeyUp: (e)=>searchPost(e),
                            onChange: (e)=>setSearch(e.target.value),
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "c5eebe69d863984d",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                    ]
                                ]
                            ])
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "c5eebe69d863984d",
                            [
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                            ]
                        ]
                    ]) + " " + "container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "c5eebe69d863984d",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                    ]
                                ]
                            ]) + " " + "container__column1",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "c5eebe69d863984d",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                            ]
                                        ]
                                    ]) + " " + "column1__header",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "c5eebe69d863984d",
                                                    [
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                    ]
                                                ]
                                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().title) || ""),
                                            children: "Reciente"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>refresh(),
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "c5eebe69d863984d",
                                                    [
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                    ]
                                                ]
                                            ]) + " " + "refresh__button",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_9__.HiOutlineRefresh, {
                                                size: 30,
                                                color: styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                            })
                                        })
                                    ]
                                }),
                                (isSortedByUsername || isSortedByLikes) && posts.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "c5eebe69d863984d",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                            ]
                                        ]
                                    ]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "c5eebe69d863984d",
                                                [
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                ]
                                            ]
                                        ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().loading) || ""),
                                        children: "Cargando.."
                                    })
                                }),
                                (isSortedByUsername || isSortedByLikes) && postList.map(({ _id , username , location , mediaUrl , description , comments , likes , saves  })=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Post_Post__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            id: _id,
                                            username: username,
                                            location: location,
                                            mediaUrl: mediaUrl,
                                            description: description,
                                            comments: comments,
                                            likes: likes,
                                            saves: saves
                                        }, _id)
                                    });
                                }),
                                !isSortedByUsername && !isSortedByLikes && posts.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "c5eebe69d863984d",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                            ]
                                        ]
                                    ]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "c5eebe69d863984d",
                                                [
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                ]
                                            ]
                                        ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().loading) || ""),
                                        children: "Cargando.."
                                    })
                                }),
                                !isSortedByUsername && !isSortedByLikes && posts.sort((post1, post2)=>{
                                    return new Date(post2.createdAt) - new Date(post1.createdAt);
                                }).map(({ _id , username , location , mediaUrl , description , comments , likes , saves  })=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Post_Post__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                            id: _id,
                                            username: username,
                                            location: location,
                                            mediaUrl: mediaUrl,
                                            description: description,
                                            comments: comments,
                                            likes: likes,
                                            saves: saves
                                        }, _id)
                                    });
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "c5eebe69d863984d",
                                    [
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                    ]
                                ]
                            ]) + " " + "container__column2",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "c5eebe69d863984d",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                            ]
                                        ]
                                    ]) + " " + "column2__follow",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "c5eebe69d863984d",
                                                    [
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                    ]
                                                ]
                                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().title) || ""),
                                            children: "Seguir"
                                        }),
                                        users.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "c5eebe69d863984d",
                                                    [
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                    ]
                                                ]
                                            ]),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "c5eebe69d863984d",
                                                        [
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                        ]
                                                    ]
                                                ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().loading) || ""),
                                                children: "Cargando.."
                                            })
                                        }),
                                        users.filter((user)=>user.username !== session.user.username).slice(0, 5).map(({ _id , userImage , username , isCaretaker  })=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_User_User__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                    id: _id,
                                                    userImage: userImage,
                                                    username: username,
                                                    isCaretaker: isCaretaker
                                                }, _id)
                                            });
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "c5eebe69d863984d",
                                                    [
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                    ]
                                                ]
                                            ]) + " " + "users__link",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                href: "/allUsers",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "aria-label": "Ir a ver m\xe1s usuarios",
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "c5eebe69d863984d",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                            ]
                                                        ]
                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().link) || ""),
                                                    children: "Ver todos →"
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "c5eebe69d863984d",
                                            [
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                            ]
                                        ]
                                    ]) + " " + "footer",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "c5eebe69d863984d",
                                                [
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                ]
                                            ]
                                        ]) + " " + "footer__links",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: (styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().link),
                                                href: "/use",
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "aria-label": "Ir a Informaci\xf3n",
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "c5eebe69d863984d",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Informaci\xf3n"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: (styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().link),
                                                href: "/privacy",
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "aria-label": "Ir a Privacidad",
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "c5eebe69d863984d",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Privacidad"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: (styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().link),
                                                href: "/conditions",
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "aria-label": "Ir a Condiciones",
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "c5eebe69d863984d",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Condiciones"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: (styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().link),
                                                href: "/accessibility",
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "aria-label": "Ir a Accesibilidad",
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "c5eebe69d863984d",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Accesibilidad"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                className: (styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().link),
                                                href: "/rules",
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    "aria-label": "Ir a Reglas y Pol\xedticas",
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "c5eebe69d863984d",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "Reglas y Pol\xedticas"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "c5eebe69d863984d",
                                                        [
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                        ]
                                                    ]
                                                ]) + " " + "copyright",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "c5eebe69d863984d",
                                                            [
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "\xa9 2022 Sweet Home Corporation. Todos los derechos reservados."
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "c5eebe69d863984d",
                    dynamic: [
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                        styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                    ],
                    children: `.container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.footer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.footer__links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:1rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.footer__links.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{font-family:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};text-decoration:none;color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.footer__links.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{font-family:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary};-webkit-transition:.3s ease all;-moz-transition:.3s ease all;-o-transition:.3s ease all;transition:.3s ease all}.copyright.__jsx-style-dynamic-selector{font-family:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};text-decoration:none;color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.container__column1.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:70%}.column1__header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:1rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.container__column2.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:30%}.column2__follow.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:3rem}.users__link.__jsx-style-dynamic-selector{margin-bottom:2rem}.column1__buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.column1__buttons.__jsx-style-dynamic-selector button.__jsx-style-dynamic-selector{margin-right:1rem}.refresh__button.__jsx-style-dynamic-selector{background:transparent;border:none;cursor:pointer}.column1__search.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:26rem}.search__icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-right:.5rem}input[type="search"].__jsx-style-dynamic-selector{width:100%;height:2rem;padding:.4rem;font-family:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};font-size:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid ${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary};background:transparent;-webkit-transition:.2s ease all;-moz-transition:.2s ease all;-o-transition:.2s ease all;transition:.2s ease all}input[type="search"].__jsx-style-dynamic-selector:focus{border:2px solid ${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary};outline:none;-webkit-box-shadow:10px 10px 20px 0px rgba(176,176,176,.66);-moz-box-shadow:10px 10px 20px 0px rgba(176,176,176,.66);box-shadow:10px 10px 20px 0px rgba(176,176,176,.66)}.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector:-moz-placeholder{color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector::-moz-placeholder{color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector:-ms-input-placeholder{color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector::-ms-input-placeholder{color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector::placeholder{color:${styles_frontend_conf__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}`
                })
            ]
        });
    } else {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-8a49c7e7b291d916" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().content) || ""),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-8a49c7e7b291d916" + " " + "message",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "jsx-8a49c7e7b291d916" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().title) || ""),
                                    children: "Para acceder a esta p\xe1gina debe iniciar sesi\xf3n"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>signIn(),
                                    className: "jsx-8a49c7e7b291d916" + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().buttonPrimary) || ""),
                                    children: "Iniciar sesi\xf3n"
                                })
                            ]
                        })
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                        id: "8a49c7e7b291d916",
                        children: ".message.jsx-8a49c7e7b291d916{display:flex flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"
                    })
                ]
            })
        });
    }
}
async function getServerSideProps(context) {
    let res = await fetch("http://localhost:3000/api/posts", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    let user = await fetch("http://localhost:3000/api/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    let posts = await res.json();
    let users = await user.json();
    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
            users: JSON.parse(JSON.stringify(users))
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

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841,9493,3580,2224], () => (__webpack_exec__(9522)));
module.exports = __webpack_exports__;

})();