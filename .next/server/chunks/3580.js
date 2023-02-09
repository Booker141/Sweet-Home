"use strict";
exports.id = 3580;
exports.ids = [3580];
exports.modules = {

/***/ 3580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Post)
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
// EXTERNAL MODULE: ./styles/global.module.css
var global_module = __webpack_require__(4642);
var global_module_default = /*#__PURE__*/__webpack_require__.n(global_module);
// EXTERNAL MODULE: ./styles/frontend-conf.js
var frontend_conf = __webpack_require__(2081);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: ./components/Modal/Modal.js
var Modal = __webpack_require__(1836);
;// CONCATENATED MODULE: ./components/Comment/Comment.js










function Comment(props) {
    const { 0: comment , 1: setComment  } = (0,external_react_.useState)({});
    const { 0: isCaretaker , 1: setIsCaretaker  } = (0,external_react_.useState)(false);
    const { 0: isModalVisible , 1: setIsModalVisible  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(async ()=>{
        const res = await fetch(`/api/comments/${props.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).catch((err)=>console.log(err));
        const data = await res.json();
        setComment(data);
        setIsCaretaker(data.isCaretaker);
    }, []);
    const fetchComments = async ()=>{
        const res = await fetch(`/api/comments/${props.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).catch((err)=>console.log(err));
        const data = await res.json();
        console.log(data);
        setComment(data);
        setIsCaretaker(data.isCaretaker);
    };
    const deleteComment = async ()=>{
        const res = await fetch(`/api/comments/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).catch((err)=>console.log(err));
        const data = await res.json();
        console.log(data);
        setIsModalVisible(false);
        fetchComments();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "jsx-3e02396eb5daf4ef" + " " + ((global_module_default()).comment || ""),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-3e02396eb5daf4ef" + " " + "comment__username",
                        children: comment !== null && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "jsx-3e02396eb5daf4ef" + " " + ((global_module_default()).tertiary2__bold || ""),
                            children: [
                                "@",
                                comment.username,
                                isCaretaker && /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsPatchCheckFill, {
                                    size: 15,
                                    color: frontend_conf/* colors.primary */.O9.primary
                                }),
                                ": "
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-3e02396eb5daf4ef" + " " + "comment__description",
                        children: comment !== null && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "jsx-3e02396eb5daf4ef" + " " + ((global_module_default()).tertiary2 || ""),
                            children: comment.description
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>setIsModalVisible(true),
                        className: "jsx-3e02396eb5daf4ef" + " " + "delete__button",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdDeleteOutline, {
                            size: 20,
                            color: frontend_conf/* colors.primary */.O9.primary
                        })
                    })
                ]
            }, props.id),
            isModalVisible && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Modal/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "jsx-3e02396eb5daf4ef" + " " + ((global_module_default()).title3 || ""),
                        children: "Eliminar comentario"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "jsx-3e02396eb5daf4ef" + " " + ((global_module_default()).text2 || ""),
                        children: "\xbfEst\xe1s seguro de eliminar este comentario?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-3e02396eb5daf4ef" + " " + "buttons",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>deleteComment(),
                                className: "jsx-3e02396eb5daf4ef" + " " + ((global_module_default()).buttonSecondary || ""),
                                children: "S\xed"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setIsModalVisible(false),
                                className: "jsx-3e02396eb5daf4ef" + " " + ((global_module_default()).buttonTertiary || ""),
                                children: "No"
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "3e02396eb5daf4ef",
                children: ".comment__description.jsx-3e02396eb5daf4ef{margin-left:1rem}.comment__username.jsx-3e02396eb5daf4ef{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin.left: 1rem;}.delete__button.jsx-3e02396eb5daf4ef{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-left:auto;margin-right:1.5rem;background:transparent;border:none;cursor:pointer}.buttons.jsx-3e02396eb5daf4ef{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem}"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Toast/Toast.js




function Toast(props) {
    const { 0: isActive , 1: setIsActive  } = (0,external_react_.useState)(false);
    console.log(props);
    (0,external_react_.useEffect)(()=>{
        const toast = document.getElementById("toast");
        setIsActive(props.isActive);
        if (isActive) {
            console.log("toast active");
            toast.classList.add("active");
        }
        setTimeout(()=>{
            setIsActive(false);
            toast.classList.remove("active");
        }, 5000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "toast",
                className: "jsx-2df9e64bb2fc6236" + " " + "toast__container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "jsx-2df9e64bb2fc6236" + " " + ((global_module_default()).toast || ""),
                    children: [
                        props.children,
                        console.log("Toast impreso")
                    ]
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "2df9e64bb2fc6236",
                children: ".toast__container.jsx-2df9e64bb2fc6236{-webkit-transform:translateY(100%);-moz-transform:translateY(100%);-ms-transform:translateY(100%);-o-transform:translateY(100%);transform:translateY(100%);z-index:1000;-webkit-transition:.5s -webkit-transform opacity;-moz-transition:.5s -moz-transform opacity;-o-transition:.5s -o-transform opacity;transition:.5s -webkit-transform opacity;transition:.5s -moz-transform opacity;transition:.5s -o-transform opacity;transition:.5s transform opacity;opacity:0}.toast__container.active.jsx-2df9e64bb2fc6236{-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);opacity:1}"
            })
        ]
    });
}

// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
;// CONCATENATED MODULE: ./components/Post/Post.js














function Post(props) {
    const { data: session , status  } = (0,react_.useSession)();
    const { 0: user , 1: setUser  } = (0,external_react_.useState)({});
    const { 0: comment , 1: setComment  } = (0,external_react_.useState)("");
    const { 0: moreComments , 1: setMoreComments  } = (0,external_react_.useState)(false);
    const { 0: isVisible , 1: setIsVisible  } = (0,external_react_.useState)(false);
    const { 0: isLike , 1: setIsLike  } = (0,external_react_.useState)(false);
    const { 0: isToastActive , 1: setIsToastActive  } = (0,external_react_.useState)(false);
    const { 0: isSave , 1: setIsSave  } = (0,external_react_.useState)(false);
    const { 0: isCaretaker , 1: setIsCaretaker  } = (0,external_react_.useState)(false);
    const { 0: isModalVisible , 1: setIsModalVisible  } = (0,external_react_.useState)(false);
    console.log(props);
    (0,external_react_.useEffect)(()=>{
        const fetchUser = async ()=>{
            const res = await fetch(`http://localhost:3000/api/users/${props.username}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const user = await res.json();
            setUser(user);
            setIsCaretaker(user.isCaretaker);
        };
        fetchUser();
    }, []);
    const refreshComments = ()=>{};
    const Commentate = async (e)=>{
        e.preventDefault();
        document.getElementById("comment").value = "";
        const res = await fetch("/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                postId: props.id,
                description: comment,
                username: session.user.username
            })
        });
        const data = await res.json();
        if (data.error) {
            console.log(data.error);
        }
        setIsToastActive(!isToastActive);
    };
    const deletePost = async ()=>{
        const res = await fetch(`/api/posts/${session.user.username}/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        if (data.error) {
            console.log(data.error);
        }
        setIsModalVisible(false);
    };
    const Like = ()=>{
        setIsLike(!isLike);
    //Like function
    };
    const Save = ()=>{
        setIsSave(!isSave);
    //Save function
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: style_default().dynamic([
                    [
                        "48e325cc1fef9552",
                        [
                            frontend_conf/* colors.primary */.O9.primary,
                            frontend_conf/* fonts.default */.Rq["default"],
                            frontend_conf/* colors.primary */.O9.primary,
                            frontend_conf/* fonts.default */.Rq["default"],
                            frontend_conf/* colors.primary */.O9.primary,
                            frontend_conf/* colors.tertiary */.O9.tertiary,
                            frontend_conf/* fonts.default */.Rq["default"],
                            frontend_conf/* colors.primary */.O9.primary
                        ]
                    ]
                ]) + " " + "post__content",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: style_default().dynamic([
                        [
                            "48e325cc1fef9552",
                            [
                                frontend_conf/* colors.primary */.O9.primary,
                                frontend_conf/* fonts.default */.Rq["default"],
                                frontend_conf/* colors.primary */.O9.primary,
                                frontend_conf/* fonts.default */.Rq["default"],
                                frontend_conf/* colors.primary */.O9.primary,
                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                frontend_conf/* fonts.default */.Rq["default"],
                                frontend_conf/* colors.primary */.O9.primary
                            ]
                        ]
                    ]) + " " + ((global_module_default()).post || ""),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "48e325cc1fef9552",
                                    [
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary
                                    ]
                                ]
                            ]) + " " + "post__header",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + "header__user",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: user.image,
                                            className: style_default().dynamic([
                                                [
                                                    "48e325cc1fef9552",
                                                    [
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary
                                                    ]
                                                ]
                                            ])
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: style_default().dynamic([
                                                [
                                                    "48e325cc1fef9552",
                                                    [
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary
                                                    ]
                                                ]
                                            ]) + " " + ((global_module_default()).text2__bold || ""),
                                            children: user.username
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + "header__location",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: style_default().dynamic([
                                            [
                                                "48e325cc1fef9552",
                                                [
                                                    frontend_conf/* colors.primary */.O9.primary,
                                                    frontend_conf/* fonts.default */.Rq["default"],
                                                    frontend_conf/* colors.primary */.O9.primary,
                                                    frontend_conf/* fonts.default */.Rq["default"],
                                                    frontend_conf/* colors.primary */.O9.primary,
                                                    frontend_conf/* colors.tertiary */.O9.tertiary,
                                                    frontend_conf/* fonts.default */.Rq["default"],
                                                    frontend_conf/* colors.primary */.O9.primary
                                                ]
                                            ]
                                        ]) + " " + ((global_module_default()).text2 || ""),
                                        children: [
                                            props.location,
                                            user.username === session.user.username && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                onClick: ()=>setIsModalVisible(true),
                                                className: style_default().dynamic([
                                                    [
                                                        "48e325cc1fef9552",
                                                        [
                                                            frontend_conf/* colors.primary */.O9.primary,
                                                            frontend_conf/* fonts.default */.Rq["default"],
                                                            frontend_conf/* colors.primary */.O9.primary,
                                                            frontend_conf/* fonts.default */.Rq["default"],
                                                            frontend_conf/* colors.primary */.O9.primary,
                                                            frontend_conf/* colors.tertiary */.O9.tertiary,
                                                            frontend_conf/* fonts.default */.Rq["default"],
                                                            frontend_conf/* colors.primary */.O9.primary
                                                        ]
                                                    ]
                                                ]) + " " + "delete__button",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(md_.MdDeleteOutline, {
                                                    size: 20,
                                                    color: frontend_conf/* colors.secondary */.O9.secondary
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: props.mediaUrl,
                            className: style_default().dynamic([
                                [
                                    "48e325cc1fef9552",
                                    [
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary
                                    ]
                                ]
                            ])
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "48e325cc1fef9552",
                                    [
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary
                                    ]
                                ]
                            ]) + " " + "description",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: user.image,
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ])
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + ((global_module_default()).tertiary2__bold || ""),
                                    children: [
                                        "@",
                                        user.username,
                                        isCaretaker && /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsPatchCheckFill, {
                                            size: 15,
                                            color: frontend_conf/* colors.primary */.O9.primary
                                        }),
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + ((global_module_default()).tertiary2 || ""),
                                    children: props.description
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "48e325cc1fef9552",
                                    [
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary
                                    ]
                                ]
                            ]) + " " + "post__block",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + "post__comment",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            title: "Escribir comentario",
                                            type: "text",
                                            name: "text",
                                            id: "comment",
                                            value: comment,
                                            required: true,
                                            onChange: (e)=>setComment(e.target.value),
                                            placeholder: "Escribir comentario...",
                                            className: style_default().dynamic([
                                                [
                                                    "48e325cc1fef9552",
                                                    [
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary
                                                    ]
                                                ]
                                            ]) + " " + "input"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: (e)=>Commentate(e),
                                            className: style_default().dynamic([
                                                [
                                                    "48e325cc1fef9552",
                                                    [
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary
                                                    ]
                                                ]
                                            ]) + " " + ((global_module_default()).buttonTertiary || ""),
                                            children: "Enviar"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + "post__icons",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: style_default().dynamic([
                                                [
                                                    "48e325cc1fef9552",
                                                    [
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary
                                                    ]
                                                ]
                                            ]) + " " + "like",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: style_default().dynamic([
                                                        [
                                                            "48e325cc1fef9552",
                                                            [
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary
                                                            ]
                                                        ]
                                                    ]) + " " + ((global_module_default()).text2__bold || ""),
                                                    children: props.likes.length === null ? 0 : props.likes.length
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: ()=>Like(),
                                                    className: style_default().dynamic([
                                                        [
                                                            "48e325cc1fef9552",
                                                            [
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary
                                                            ]
                                                        ]
                                                    ]) + " " + "like--status",
                                                    children: isLike ? /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoPaw, {
                                                        size: 20,
                                                        color: frontend_conf/* colors.secondary */.O9.secondary
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoPawOutline, {
                                                        size: 20,
                                                        color: frontend_conf/* colors.secondary */.O9.secondary
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: style_default().dynamic([
                                                [
                                                    "48e325cc1fef9552",
                                                    [
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary
                                                    ]
                                                ]
                                            ]) + " " + "save",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: style_default().dynamic([
                                                        [
                                                            "48e325cc1fef9552",
                                                            [
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary
                                                            ]
                                                        ]
                                                    ]) + " " + ((global_module_default()).text2__bold || ""),
                                                    children: props.saves.length === null ? 0 : props.saves.length
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    onClick: ()=>Save(),
                                                    className: style_default().dynamic([
                                                        [
                                                            "48e325cc1fef9552",
                                                            [
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary,
                                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                                frontend_conf/* fonts.default */.Rq["default"],
                                                                frontend_conf/* colors.primary */.O9.primary
                                                            ]
                                                        ]
                                                    ]) + " " + "save--status",
                                                    children: isSave ? /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsBookmarkFill, {
                                                        size: 20,
                                                        color: frontend_conf/* colors.secondary */.O9.secondary
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(bs_.BsBookmark, {
                                                        className: "bookmark1",
                                                        size: 20,
                                                        color: frontend_conf/* colors.secondary */.O9.secondary
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Toast, {
                            isActive: isToastActive,
                            children: [
                                "Se ha publicado tu comentario a @",
                                user.username
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: style_default().dynamic([
                                [
                                    "48e325cc1fef9552",
                                    [
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary,
                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                        frontend_conf/* fonts.default */.Rq["default"],
                                        frontend_conf/* colors.primary */.O9.primary
                                    ]
                                ]
                            ]) + " " + "comment__container",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + "comment__title",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: style_default().dynamic([
                                                [
                                                    "48e325cc1fef9552",
                                                    [
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary
                                                    ]
                                                ]
                                            ]) + " " + ((global_module_default()).tertiary2__bold || ""),
                                            children: "Comentarios"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            onClick: ()=>refreshComments(),
                                            className: style_default().dynamic([
                                                [
                                                    "48e325cc1fef9552",
                                                    [
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary,
                                                        frontend_conf/* colors.tertiary */.O9.tertiary,
                                                        frontend_conf/* fonts.default */.Rq["default"],
                                                        frontend_conf/* colors.primary */.O9.primary
                                                    ]
                                                ]
                                            ]) + " " + "refresh__button",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiOutlineRefresh, {
                                                size: 15,
                                                color: frontend_conf/* colors.quaternary */.O9.quaternary
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + ((global_module_default()).line || "")
                                }),
                                props.comments.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + ((global_module_default()).tertiary2 || ""),
                                    children: "No hay ning\xfan comentario"
                                }),
                                props.comments.slice(0, 3).map((id)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Comment, {
                                                id: id
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                className: style_default().dynamic([
                                                    [
                                                        "48e325cc1fef9552",
                                                        [
                                                            frontend_conf/* colors.primary */.O9.primary,
                                                            frontend_conf/* fonts.default */.Rq["default"],
                                                            frontend_conf/* colors.primary */.O9.primary,
                                                            frontend_conf/* fonts.default */.Rq["default"],
                                                            frontend_conf/* colors.primary */.O9.primary,
                                                            frontend_conf/* colors.tertiary */.O9.tertiary,
                                                            frontend_conf/* fonts.default */.Rq["default"],
                                                            frontend_conf/* colors.primary */.O9.primary
                                                        ]
                                                    ]
                                                ]) + " " + ((global_module_default()).divider || "")
                                            })
                                        ]
                                    });
                                }),
                                props.comments.length >= 3 && isVisible === false && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>{
                                        setMoreComments(!moreComments);
                                        setIsVisible(!isVisible);
                                    },
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + "button__see",
                                    children: "Ver m\xe1s.."
                                }),
                                moreComments && props.comments.slice(3, props.comments.length).map((id)=>{
                                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Comment, {
                                                id: id
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                                className: style_default().dynamic([
                                                    [
                                                        "48e325cc1fef9552",
                                                        [
                                                            frontend_conf/* colors.primary */.O9.primary,
                                                            frontend_conf/* fonts.default */.Rq["default"],
                                                            frontend_conf/* colors.primary */.O9.primary,
                                                            frontend_conf/* fonts.default */.Rq["default"],
                                                            frontend_conf/* colors.primary */.O9.primary,
                                                            frontend_conf/* colors.tertiary */.O9.tertiary,
                                                            frontend_conf/* fonts.default */.Rq["default"],
                                                            frontend_conf/* colors.primary */.O9.primary
                                                        ]
                                                    ]
                                                ]) + " " + ((global_module_default()).divider || "")
                                            })
                                        ]
                                    });
                                }),
                                isVisible === true && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>{
                                        setMoreComments(!moreComments);
                                        setIsVisible(!isVisible);
                                    },
                                    className: style_default().dynamic([
                                        [
                                            "48e325cc1fef9552",
                                            [
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary,
                                                frontend_conf/* colors.tertiary */.O9.tertiary,
                                                frontend_conf/* fonts.default */.Rq["default"],
                                                frontend_conf/* colors.primary */.O9.primary
                                            ]
                                        ]
                                    ]) + " " + "button__see",
                                    children: "Ver menos.."
                                })
                            ]
                        })
                    ]
                }, props._id)
            }),
            isModalVisible && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Modal/* default */.Z, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: style_default().dynamic([
                            [
                                "48e325cc1fef9552",
                                [
                                    frontend_conf/* colors.primary */.O9.primary,
                                    frontend_conf/* fonts.default */.Rq["default"],
                                    frontend_conf/* colors.primary */.O9.primary,
                                    frontend_conf/* fonts.default */.Rq["default"],
                                    frontend_conf/* colors.primary */.O9.primary,
                                    frontend_conf/* colors.tertiary */.O9.tertiary,
                                    frontend_conf/* fonts.default */.Rq["default"],
                                    frontend_conf/* colors.primary */.O9.primary
                                ]
                            ]
                        ]) + " " + ((global_module_default()).title3 || ""),
                        children: "Eliminar publicaci\xf3n"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: style_default().dynamic([
                            [
                                "48e325cc1fef9552",
                                [
                                    frontend_conf/* colors.primary */.O9.primary,
                                    frontend_conf/* fonts.default */.Rq["default"],
                                    frontend_conf/* colors.primary */.O9.primary,
                                    frontend_conf/* fonts.default */.Rq["default"],
                                    frontend_conf/* colors.primary */.O9.primary,
                                    frontend_conf/* colors.tertiary */.O9.tertiary,
                                    frontend_conf/* fonts.default */.Rq["default"],
                                    frontend_conf/* colors.primary */.O9.primary
                                ]
                            ]
                        ]) + " " + ((global_module_default()).text2 || ""),
                        children: "\xbfEst\xe1s seguro de eliminar esta publicaci\xf3n?"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "48e325cc1fef9552",
                                [
                                    frontend_conf/* colors.primary */.O9.primary,
                                    frontend_conf/* fonts.default */.Rq["default"],
                                    frontend_conf/* colors.primary */.O9.primary,
                                    frontend_conf/* fonts.default */.Rq["default"],
                                    frontend_conf/* colors.primary */.O9.primary,
                                    frontend_conf/* colors.tertiary */.O9.tertiary,
                                    frontend_conf/* fonts.default */.Rq["default"],
                                    frontend_conf/* colors.primary */.O9.primary
                                ]
                            ]
                        ]) + " " + "buttons",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>deletePost(),
                                className: style_default().dynamic([
                                    [
                                        "48e325cc1fef9552",
                                        [
                                            frontend_conf/* colors.primary */.O9.primary,
                                            frontend_conf/* fonts.default */.Rq["default"],
                                            frontend_conf/* colors.primary */.O9.primary,
                                            frontend_conf/* fonts.default */.Rq["default"],
                                            frontend_conf/* colors.primary */.O9.primary,
                                            frontend_conf/* colors.tertiary */.O9.tertiary,
                                            frontend_conf/* fonts.default */.Rq["default"],
                                            frontend_conf/* colors.primary */.O9.primary
                                        ]
                                    ]
                                ]) + " " + ((global_module_default()).buttonSecondary || ""),
                                children: "S\xed"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: ()=>setIsModalVisible(false),
                                className: style_default().dynamic([
                                    [
                                        "48e325cc1fef9552",
                                        [
                                            frontend_conf/* colors.primary */.O9.primary,
                                            frontend_conf/* fonts.default */.Rq["default"],
                                            frontend_conf/* colors.primary */.O9.primary,
                                            frontend_conf/* fonts.default */.Rq["default"],
                                            frontend_conf/* colors.primary */.O9.primary,
                                            frontend_conf/* colors.tertiary */.O9.tertiary,
                                            frontend_conf/* fonts.default */.Rq["default"],
                                            frontend_conf/* colors.primary */.O9.primary
                                        ]
                                    ]
                                ]) + " " + ((global_module_default()).buttonTertiary || ""),
                                children: "No"
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "48e325cc1fef9552",
                dynamic: [
                    frontend_conf/* colors.primary */.O9.primary,
                    frontend_conf/* fonts.default */.Rq["default"],
                    frontend_conf/* colors.primary */.O9.primary,
                    frontend_conf/* fonts.default */.Rq["default"],
                    frontend_conf/* colors.primary */.O9.primary,
                    frontend_conf/* colors.tertiary */.O9.tertiary,
                    frontend_conf/* fonts.default */.Rq["default"],
                    frontend_conf/* colors.primary */.O9.primary
                ],
                children: `.post__content.__jsx-style-dynamic-selector{margin-bottom:3rem}.post__header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.post__block.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:1rem;margin-bottom:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.post__comment.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-bottom:1rem;margin-top:1rem}.post__icons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.header__user.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.header__user.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{margin-right:1rem}.header__location.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem}.description.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;margin-top:1rem;margin-bottom:1rem;background-color:white;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.like--status.__jsx-style-dynamic-selector .save--status.__jsx-style-dynamic-selector{cursor:pointer}.description.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin-right:1rem;margin-left:1rem}.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:${frontend_conf/* colors.primary */.O9.primary}}.__jsx-style-dynamic-selector:-moz-placeholder{color:${frontend_conf/* colors.primary */.O9.primary}}.__jsx-style-dynamic-selector::-moz-placeholder{color:${frontend_conf/* colors.primary */.O9.primary}}.__jsx-style-dynamic-selector:-ms-input-placeholder{color:${frontend_conf/* colors.primary */.O9.primary}}.__jsx-style-dynamic-selector::-ms-input-placeholder{color:${frontend_conf/* colors.primary */.O9.primary}}.__jsx-style-dynamic-selector::placeholder{color:${frontend_conf/* colors.primary */.O9.primary}}.input.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem;width:100%;height:2rem;margin-right:5rem;font-family:${frontend_conf/* fonts.default */.Rq["default"]};font-size:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid ${frontend_conf/* colors.primary */.O9.primary}}.comment__container.__jsx-style-dynamic-selector{-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background-color:#fff}.comment__container.__jsx-style-dynamic-selector p.__jsx-style-dynamic-selector{margin-left:1rem}.comment__title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:.4rem}.button__see.__jsx-style-dynamic-selector{margin-left:1rem;margin-bottom:1rem;margin-top:1rem;font-size:1rem;font:${frontend_conf/* fonts.default */.Rq["default"]};color:${frontend_conf/* colors.primary */.O9.primary};border:none;background:transparent;cursor:pointer;-webkit-transition:.5s ease all;-moz-transition:.5s ease all;-o-transition:.5s ease all;transition:.5s ease all}.button__see.__jsx-style-dynamic-selector:hover{color:${frontend_conf/* colors.tertiary */.O9.tertiary}}.buttons.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem}.delete__button.__jsx-style-dynamic-selector{border:none;background:transparent;cursor:pointer}.refresh__button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border:none;background:transparent;cursor:pointer}.like.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem}.save.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:1rem}input[type="text"].__jsx-style-dynamic-selector{width:26rem;height:2rem;margin-right:1rem;font-family:${frontend_conf/* fonts.default */.Rq["default"]};font-size:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid ${frontend_conf/* colors.primary */.O9.primary}}a.__jsx-style-dynamic-selector{cursor:pointer}hr.__jsx-style-dynamic-selector{width:100%}`
            })
        ]
    });
}


/***/ })

};
;