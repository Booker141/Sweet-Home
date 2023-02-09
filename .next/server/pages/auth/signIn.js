"use strict";
(() => {
var exports = {};
exports.id = 5485;
exports.ids = [5485];
exports.modules = {

/***/ 5885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn),
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4642);
/* harmony import */ var styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(styles_global_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2081);
/* harmony import */ var components_Header_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9112);
/* harmony import */ var components_BasicFooter_BasicFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7148);
/* harmony import */ var components_ThemeButton_ThemeButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8042);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__);

















/*
    * @author Sergio García Navarro
    * @returns Login page
    * @version 1.0
    * @date 13/01/2020
    * @description Login page
*/ /**
 * It returns a JSX element that contains a Head component, a Header component, a FormLogin component
 * and a BasicFooter component
 * @returns A React component.
 */ function SignIn({ providers , csrfToken  }) {
    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();
    const { 0: email , 1: setEmail  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: password , 1: setPassword  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: isValidate , 1: setIsValidate  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (session) {
            return Router.replace("/home");
        }
    }, [
        Router
    ]);
    /**
  * If the password input type is password, then hide the first icon and show the second icon, and
  * change the input type to text. Otherwise, show the first icon and hide the second icon, and change
  * the input type to password
  */ const showPassword = ()=>{
        let passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            document.getElementById("show__icon1").style.display = "none";
            document.getElementById("show__icon2").style.display = "inline";
            passwordInput.type = "text";
        } else {
            document.getElementById("show__icon1").style.display = "inline";
            document.getElementById("show__icon2").style.display = "none";
            passwordInput.type = "password";
        }
    };
    const validate = (e)=>{
        // Regular expressions
        let regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        let regPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (e.target.name == "password") {
            if (password.length < 8 || !password.match(regPassword)) {
                document.getElementById("password__error").classList.add("form__input-passwordError--active");
                document.getElementById("error__password").classList.add("form__icon-error--active");
                document.getElementById("success__password").classList.remove("form__icon-success--active");
                setIsValidate(false);
            } else {
                document.getElementById("password__error").classList.remove("form__input-passwordError--active");
                document.getElementById("error__password").classList.remove("form__icon-error--active");
                document.getElementById("success__password").classList.add("form__icon-success--active");
                setIsValidate(true);
            }
        }
        // Validación del formato del email
        if (e.target.name == "email") {
            if (!email.match(regEmail)) {
                document.getElementById("email__error").classList.add("form__input-emailError--active");
                document.getElementById("error__email").classList.add("form__error-icon--active");
                document.getElementById("success__email").classList.remove("form__success-icon--active");
                setIsValidate(false);
            } else {
                document.getElementById("email__error").classList.remove("form__input-emailError--active");
                document.getElementById("error__email").classList.remove("form__error-icon--active");
                document.getElementById("success__email").classList.add("form__success-icon--active");
                setIsValidate(true);
            }
        }
    };
    /**
  * A function that is called when the user clicks the login button. It takes the email and password
  * from the form and sends it to the backend. If the login is successful, the user is redirected to
  * the home page.
  * @param e - the event object
  * @returns The user is being returned to the home page.
  */ const Login = async (e)=>{
        e.preventDefault();
        document.getElementById("submit__error").classList.remove("submit__error--active");
        if (isValidate) {
            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signIn)("credentials", {
                redirect: false,
                email: email,
                password: password,
                callbackUrl: "/home"
            });
            if (res?.error) {
                setMessage(res.error);
                document.getElementById("submit__error").classList.add("submit__error--active");
            }
            return Router.push("/home");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                        [
                            "f4c4aedf2658b0d2",
                            [
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                            ]
                        ]
                    ]),
                    children: "Inicio de sesi\xf3n"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Header_Header__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                url1: "/news",
                url2: "/about",
                url3: "/contact",
                url4: "/auth/signUp",
                text1: "Noticias",
                text2: "Qui\xe9nes somos",
                text3: "Contacto",
                text4: "Registrarse"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "f4c4aedf2658b0d2",
                        [
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                        ]
                    ]
                ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().content) || ""),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ThemeButton_ThemeButton__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "f4c4aedf2658b0d2",
                                [
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                ]
                            ]
                        ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().content) || ""),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "f4c4aedf2658b0d2",
                                    [
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                    ]
                                ]
                            ]) + " " + "page",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "f4c4aedf2658b0d2",
                                            [
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                            ]
                                        ]
                                    ]) + " " + "page__video"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("video", {
                                    autoPlay: true,
                                    loop: true,
                                    muted: true,
                                    style: {
                                        position: "absolute",
                                        width: "70rem",
                                        height: "80rem",
                                        objectFit: "cover",
                                        zIndex: "-99999",
                                        borderRadius: "30px 30px 30px 30px"
                                    },
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "f4c4aedf2658b0d2",
                                            [
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                            ]
                                        ]
                                    ]),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("source", {
                                        src: "/videos/video2.mp4",
                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                            [
                                                "f4c4aedf2658b0d2",
                                                [
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                ]
                                            ]
                                        ])
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                        [
                                            "f4c4aedf2658b0d2",
                                            [
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                            ]
                                        ]
                                    ]) + " " + "page__form",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "f4c4aedf2658b0d2",
                                                    [
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                    ]
                                                ]
                                            ]) + " " + "form__text",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "f4c4aedf2658b0d2",
                                                        [
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                        ]
                                                    ]
                                                ]),
                                                children: "\xa1Bienvenido de nuevo!"
                                            })
                                        }),
                                        providers && Object.values(providers).filter((provider)=>provider.name != "Credentials" && provider.name == "Twitter").map((provider)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "f4c4aedf2658b0d2",
                                                        [
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                        ]
                                                    ]
                                                ]),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signIn)(provider.id, {
                                                            callbackUrl: "/home"
                                                        }),
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "f4c4aedf2658b0d2",
                                                            [
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                            ]
                                                        ]
                                                    ]) + " " + "form-vertical__button2",
                                                    children: [
                                                        "Inicia sesi\xf3n con ",
                                                        provider.name,
                                                        " \xa0 ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsTwitter, {
                                                            size: 20,
                                                            color: styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary
                                                        })
                                                    ]
                                                })
                                            }, provider.name)),
                                        providers && Object.values(providers).filter((provider)=>provider.name != "Credentials" && provider.name == "Google").map((provider)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                    [
                                                        "f4c4aedf2658b0d2",
                                                        [
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                        ]
                                                    ]
                                                ]),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signIn)(provider.id, {
                                                            callbackUrl: "/home"
                                                        }),
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "f4c4aedf2658b0d2",
                                                            [
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                            ]
                                                        ]
                                                    ]) + " " + "form-vertical__button2",
                                                    children: [
                                                        "Inicia sesi\xf3n con ",
                                                        provider.name,
                                                        " \xa0 ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsGoogle, {
                                                            size: 20,
                                                            color: styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary
                                                        })
                                                    ]
                                                })
                                            }, provider.name)),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "f4c4aedf2658b0d2",
                                                    [
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                    ]
                                                ]
                                            ]) + " " + "divider",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "f4c4aedf2658b0d2",
                                                            [
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                            ]
                                                        ]
                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().white__line) || "")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "f4c4aedf2658b0d2",
                                                            [
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                            ]
                                                        ]
                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().text) || ""),
                                                    children: " \xf3 "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "f4c4aedf2658b0d2",
                                                            [
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                            ]
                                                        ]
                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().white__line) || "")
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            action: "/api/auth/signIn/credentials",
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "f4c4aedf2658b0d2",
                                                    [
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                    ]
                                                ]
                                            ]) + " " + "form-vertical",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    name: "csrfToken",
                                                    type: "hidden",
                                                    defaultValue: csrfToken,
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "f4c4aedf2658b0d2",
                                                            [
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                            ]
                                                        ]
                                                    ])
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "f4c4aedf2658b0d2",
                                                            [
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                            ]
                                                        ]
                                                    ]) + " " + "form-vertical__email",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "f4c4aedf2658b0d2",
                                                                    [
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                    ]
                                                                ]
                                                            ]) + " " + "label",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                        [
                                                                            "f4c4aedf2658b0d2",
                                                                            [
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                            ]
                                                                        ]
                                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().text) || ""),
                                                                    children: "Email"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_12__.MdEmail, {
                                                                    size: 20,
                                                                    color: styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "f4c4aedf2658b0d2",
                                                                    [
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                    ]
                                                                ]
                                                            ]) + " " + "email__input",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    title: "Introducir email",
                                                                    type: "email",
                                                                    name: "email",
                                                                    value: email,
                                                                    required: true,
                                                                    onKeyUp: (e)=>validate(e),
                                                                    onBlur: (e)=>validate(e),
                                                                    onChange: (e)=>setEmail(e.target.value),
                                                                    placeholder: "p.ej.: javier@email.com",
                                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                        [
                                                                            "f4c4aedf2658b0d2",
                                                                            [
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                            ]
                                                                        ]
                                                                    ]) + " " + "input"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    id: "error__email",
                                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                        [
                                                                            "f4c4aedf2658b0d2",
                                                                            [
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                            ]
                                                                        ]
                                                                    ]) + " " + "form__error-icon",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsFillXCircleFill, {
                                                                        size: 20,
                                                                        color: styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    id: "success__email",
                                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                        [
                                                                            "f4c4aedf2658b0d2",
                                                                            [
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                            ]
                                                                        ]
                                                                    ]) + " " + "form__success-icon",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsFillCheckCircleFill, {
                                                                        size: 20,
                                                                        color: styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    id: "email__error",
                                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                        [
                                                                            "f4c4aedf2658b0d2",
                                                                            [
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                            ]
                                                                        ]
                                                                    ]) + " " + "form__input-emailError",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                                [
                                                                                    "f4c4aedf2658b0d2",
                                                                                    [
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                                    ]
                                                                                ]
                                                                            ]) + " " + "error__icon",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_12__.MdOutlineError, {
                                                                                size: 30,
                                                                                color: styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                                [
                                                                                    "f4c4aedf2658b0d2",
                                                                                    [
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                                    ]
                                                                                ]
                                                                            ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().text2) || ""),
                                                                            children: "Debe seguir el formato correcto"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "f4c4aedf2658b0d2",
                                                            [
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                            ]
                                                        ]
                                                    ]) + " " + "form-vertical__password",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "f4c4aedf2658b0d2",
                                                                    [
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                    ]
                                                                ]
                                                            ]) + " " + "label",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                        [
                                                                            "f4c4aedf2658b0d2",
                                                                            [
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                            ]
                                                                        ]
                                                                    ]) + " " + ((styles_global_module_css__WEBPACK_IMPORTED_MODULE_14___default().text) || ""),
                                                                    children: "Contrase\xf1a"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsFillLockFill, {
                                                                    size: 25,
                                                                    color: styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                [
                                                                    "f4c4aedf2658b0d2",
                                                                    [
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                    ]
                                                                ]
                                                            ]) + " " + "password__input",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    title: "Introducir contrase\xf1a",
                                                                    type: "password",
                                                                    name: "Contrase\xf1a",
                                                                    value: password,
                                                                    required: true,
                                                                    pattern: "(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%?&])[A-Za-z\\d@$!%?&]{8,}",
                                                                    onChange: (e)=>setPassword(e.target.value),
                                                                    placeholder: "Contrase\xf1a",
                                                                    id: "password",
                                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                        [
                                                                            "f4c4aedf2658b0d2",
                                                                            [
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                            ]
                                                                        ]
                                                                    ]) + " " + "input"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                    onClick: ()=>showPassword(),
                                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                        [
                                                                            "f4c4aedf2658b0d2",
                                                                            [
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                            ]
                                                                        ]
                                                                    ]) + " " + "password--visibility",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__.AiFillEye, {
                                                                            id: "show__icon1",
                                                                            size: 20,
                                                                            color: styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            style: {
                                                                                display: "none"
                                                                            },
                                                                            id: "show__icon2",
                                                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                                [
                                                                                    "f4c4aedf2658b0d2",
                                                                                    [
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                                    ]
                                                                                ]
                                                                            ]),
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_13__.AiFillEyeInvisible, {
                                                                                size: 20,
                                                                                color: styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            href: "/changePassword",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                "aria-label": "Ir al formulario de cambio de contrase\xf1a",
                                                                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                                    [
                                                                        "f4c4aedf2658b0d2",
                                                                        [
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                            styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                        ]
                                                                    ]
                                                                ]),
                                                                children: "\xbfHas olvidado la contrase\xf1a?"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            id: "submit__error",
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "f4c4aedf2658b0d2",
                                                    [
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                    ]
                                                ]
                                            ]) + " " + "submit__error",
                                            children: message
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "submit",
                                            value: "Iniciar sesi\xf3n",
                                            onClick: (e)=>Login(e),
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "f4c4aedf2658b0d2",
                                                    [
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                    ]
                                                ]
                                            ]) + " " + "form-vertical__button"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                [
                                                    "f4c4aedf2658b0d2",
                                                    [
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                        styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                    ]
                                                ]
                                            ]) + " " + "form-register",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                        [
                                                            "f4c4aedf2658b0d2",
                                                            [
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                            ]
                                                        ]
                                                    ]),
                                                    children: "\xbfNo tiene una cuenta?"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: "/auth/signUp",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        "aria-label": "Ir al formulario de registro",
                                                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                                            [
                                                                "f4c4aedf2658b0d2",
                                                                [
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                                                                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                                                                ]
                                                            ]
                                                        ]),
                                                        children: "Registrarse"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BasicFooter_BasicFooter__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                color: "#f0810f",
                hover: "#f9A603",
                url1: "/faq",
                text1: "Informaci\xf3n",
                url2: "/privacy",
                text2: "Privacidad",
                url3: "/conditions",
                text3: "Condiciones",
                url4: "/accessibility",
                text4: "Accesibilidad"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "f4c4aedf2658b0d2",
                dynamic: [
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary,
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"],
                    styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]
                ],
                children: `.page.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:7rem;margin-top:7rem;-webkit-border-radius:1rem;-moz-border-radius:1rem;border-radius:1rem}.form__text.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:2rem;margin-left:2rem;margin-right:2rem;margin-bottom:2rem}.page__video.__jsx-style-dynamic-selector{position:absolute;z-index:-9;display:block;width:70rem;height:80rem;-webkit-border-radius:30px 30px 30px 30px;-moz-border-radius:30px 30px 30px 30px;border-radius:30px 30px 30px 30px;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background-color:rgba(0,0,0,.2)}.page__form.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:2rem;margin-top:2rem;background-image:-webkit-linear-gradient(45deg,rgba(240,129,15,.8)35%,rgba(249,166,3,.8)100%);background-image:-moz-linear-gradient(45deg,rgba(240,129,15,.8)35%,rgba(249,166,3,.8)100%);background-image:-o-linear-gradient(45deg,rgba(240,129,15,.8)35%,rgba(249,166,3,.8)100%);background-image:linear-gradient(45deg,rgba(240,129,15,.8)35%,rgba(249,166,3,.8)100%);-webkit-background-size:100%100%;-moz-background-size:100%100%;-o-background-size:100%100%;background-size:100%100%;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px}.form-register.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:2rem}.form__input-emailError.__jsx-style-dynamic-selector{position:absolute;margin-left:22rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin-bottom:2rem;font-family:"Poppins",sans-serif;color:#fafafa;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error};opacity:0}.form__input-emailError.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin-left:2rem}.form__input-emailError--active.__jsx-style-dynamic-selector{position:absolute;margin-left:22rem;margin-bottom:2rem;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-family:"Poppins",sans-serif;color:#fafafa;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error};opacity:1}.form__input-passwordError.__jsx-style-dynamic-selector{position:absolute;margin-left:20rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:2rem;margin-left:7rem;width:100%;font-family:"Poppins",sans-serif;color:#fafafa;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error};opacity:0}.form__input-passwordError.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin-left:2rem}.form__input-passwordError--active.__jsx-style-dynamic-selector{position:absolute;margin-left:20rem;margin-bottom:2rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;font-family:"Poppins",sans-serif;color:#fafafa;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error};opacity:1}.error__icon.__jsx-style-dynamic-selector{margin-left:1rem}.form__error-icon.__jsx-style-dynamic-selector{position:relative;right:-1.1rem;bottom:.5rem;z-index:999;opacity:0;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error}}.form__success-icon.__jsx-style-dynamic-selector{position:relative;right:.1rem;bottom:.5rem;z-index:999;opacity:0;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success}}.form__error-icon--active.__jsx-style-dynamic-selector{position:relative;right:-1.1rem;bottom:.5rem;z-index:999;opacity:1;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error}}.form__success-icon--active.__jsx-style-dynamic-selector{position:relative;right:.1rem;bottom:.5rem;z-index:999;opacity:1;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.success */ .Bh.success}}.submit__error.__jsx-style-dynamic-selector{display:none;font-family:"Poppins",sans-serif;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary};background-color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error}}.submit__error--active.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.5rem;width:65%;font-family:"Poppins",sans-serif;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary};-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .statusColors.error */ .Bh.error}}.form-vertical.__jsx-style-dynamic-selector{position:relative;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:2rem;height:25rem}.form-vertical__email.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:20rem}.form-vertical__password.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:20rem}.form-vertical__button.__jsx-style-dynamic-selector{position:relative;display:block;height:7vh;width:70%;padding:.5rem;margin-top:2rem;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary};font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]}+"Light";font-style:bold;font-size:1rem;cursor:pointer;background-color:rgba(240,142,15,.5);-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid ${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary}}.form-vertical__button.__jsx-style-dynamic-selector:hover{background-color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary};-webkit-transition:all.5s ease-in-out;-moz-transition:all.5s ease-in-out;-o-transition:all.5s ease-in-out;transition:all.5s ease-in-out}.form-vertical__button2.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:3rem;width:100%;padding:.5rem;margin-bottom:1rem;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary};font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]}+"Light";font-style:bold;font-size:1rem;cursor:pointer;background-color:rgba(240,142,15,.5);-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid ${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary}}.form-vertical__button2.__jsx-style-dynamic-selector:hover{background-color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.tertiary */ .O9.tertiary};-webkit-transition:all.5s ease-in-out;-moz-transition:all.5s ease-in-out;-o-transition:all.5s ease-in-out;transition:all.5s ease-in-out}.email__input.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.password__input.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.page__image.__jsx-style-dynamic-selector{margin-right:4rem;margin-left:4rem;width:50%;height:100%}.label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.password__input.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.password--visibility.__jsx-style-dynamic-selector{margin-left:-2rem;margin-bottom:1.5rem;cursor:pointer}.divider.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-bottom:.5rem}.divider.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin:1rem}h2.__jsx-style-dynamic-selector{color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary};font-family:"Satisfy";font-weight:500;font-size:3rem}p.__jsx-style-dynamic-selector{margin-right:1rem;font-size:1rem;font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary}}h6.__jsx-style-dynamic-selector{margin-right:1rem;font-size:.8rem;font-weight:500;font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary}}a.__jsx-style-dynamic-selector{font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};font-size:.8rem;font-weight:bold;color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.secondary */ .O9.secondary};text-decoration:none}a.__jsx-style-dynamic-selector:hover{font-size:.9rem;-webkit-transition:font-size.8s ease-out;-moz-transition:font-size.8s ease-out;-o-transition:font-size.8s ease-out;transition:font-size.8s ease-out}.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector:-moz-placeholder{color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector::-moz-placeholder{color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector:-ms-input-placeholder{color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector::-ms-input-placeholder{color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}.__jsx-style-dynamic-selector::placeholder{color:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .colors.primary */ .O9.primary}}input[type="email"].__jsx-style-dynamic-selector{width:100%;height:2rem;padding:.4rem;margin-bottom:1rem;font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};font-size:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:0;-webkit-transition:.2s ease all;-moz-transition:.2s ease all;-o-transition:.2s ease all;transition:.2s ease all}input[type="email"].__jsx-style-dynamic-selector:focus{border:2px solid#4d97f7;outline:none;-webkit-box-shadow:10px 10px 20px 0px rgba(176,176,176,.66);-moz-box-shadow:10px 10px 20px 0px rgba(176,176,176,.66);box-shadow:10px 10px 20px 0px rgba(176,176,176,.66)}input[type="password"].__jsx-style-dynamic-selector{width:84%;height:2rem;padding:.4rem;margin-bottom:2rem;font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};font-size:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:0;-webkit-transition:.2s ease all;-moz-transition:.2s ease all;-o-transition:.2s ease all;transition:.2s ease all}input[type="password"].__jsx-style-dynamic-selector:focus{border:2px solid#4d97f7;outline:none;-webkit-box-shadow:10px 10px 20px 0px rgba(176,176,176,.66);-moz-box-shadow:10px 10px 20px 0px rgba(176,176,176,.66);box-shadow:10px 10px 20px 0px rgba(176,176,176,.66)}input[type="text"].__jsx-style-dynamic-selector{width:84%;height:2rem;padding:.4rem;margin-bottom:2rem;font-family:${styles_frontend_conf_js__WEBPACK_IMPORTED_MODULE_7__/* .fonts["default"] */ .Rq["default"]};font-size:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:0;-webkit-transition:.2s ease all;-moz-transition:.2s ease all;-o-transition:.2s ease all;transition:.2s ease all}input[type="text"].__jsx-style-dynamic-selector:focus{border:2px solid#4d97f7;outline:none;-webkit-box-shadow:10px 10px 20px 0px rgba(176,176,176,.66);-moz-box-shadow:10px 10px 20px 0px rgba(176,176,176,.66);box-shadow:10px 10px 20px 0px rgba(176,176,176,.66)}`
            })
        ]
    });
}
async function getServerSideProps(context) {
    return {
        props: {
            providers: await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.getProviders)(),
            csrfToken: await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.getCsrfToken)(context)
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
var __webpack_exports__ = __webpack_require__.X(0, [676,3061,8841], () => (__webpack_exec__(5885)));
module.exports = __webpack_exports__;

})();