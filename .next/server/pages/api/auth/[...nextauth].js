"use strict";
(() => {
var exports = {};
exports.id = 3748;
exports.ids = [3748,6450];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 6805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/twitter"
const twitter_namespaceObject = require("next-auth/providers/twitter");
var twitter_default = /*#__PURE__*/__webpack_require__.n(twitter_namespaceObject);
;// CONCATENATED MODULE: external "@next-auth/mongodb-adapter"
const mongodb_adapter_namespaceObject = require("@next-auth/mongodb-adapter");
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: ./pages/api/lib/MongoDB.js
var MongoDB = __webpack_require__(2536);
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js









const authOptions = {
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        twitter_default()({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET,
            version: "2.0"
        }),
        credentials_default()({
            id: "credentials",
            name: "Credentials",
            async authorize (credentials) {
                const { email , password  } = credentials;
                const client = await MongoDB["default"];
                const db = await client.db();
                if (!email && !password) {
                    throw new Error("Introduzca las credenciales.");
                }
                if (!email) {
                    throw new Error("Introduzca el email.");
                }
                if (!password) {
                    throw new Error("Introduzca la contrase\xf1a.");
                }
                const user = await db.collection("users").findOne({
                    email: email
                });
                if (!user) {
                    throw new Error("Usuario no encontrado.");
                }
                if (user.status == "blocked") {
                    throw new Error("Usuario bloqueado.");
                }
                const isValid = await external_bcrypt_default().compare(password, user.password);
                if (!isValid) {
                    throw new Error("Contrase\xf1a incorrecta.");
                }
                return user;
            }
        })
    ],
    database: process.env.MONGODB_URI,
    pages: {
        signIn: "/auth/signIn",
        error: "/_error"
    },
    adapter: (0,mongodb_adapter_namespaceObject.MongoDBAdapter)(MongoDB["default"], {
        databaseName: "SweetHomeDB"
    }),
    jwt: {
        secret: process.env.NEXT_AUTH_SECRET
    },
    session: {
        strategy: "jwt",
        maxAge: 3600 * 24,
        updateAge: 3600 * 24
    },
    jwt: {
        async encode ({ token , secret  }) {
            const tokenJWT = {
                id: token.id,
                state: token.state,
                email: token.email,
                username: token.username,
                status: token.status,
                role: token.role,
                biography: token.biography,
                followers: token.followers,
                following: token.following,
                isCaretaker: token.isCaretaker
            };
            const codedToken = external_jsonwebtoken_default().sign(tokenJWT, secret);
            return codedToken;
        },
        async decode ({ token , secret  }) {
            const decodedToken = external_jsonwebtoken_default().verify(token, secret);
            return decodedToken;
        }
    },
    callbacks: {
        async signIn ({ user , account , profile , credentials  }) {
            const client = await MongoDB["default"];
            const db = await client.db();
            const accountExist = await db.collection("accounts").findOne({
                providerAccountId: account.providerAccountId
            });
            const accountExist2 = await db.collection("accounts").findOne({
                userId: user._id
            });
            const userExist = await db.collection("users").findOne({
                _id: user._id
            });
            const userStatus = await db.collection("userStatus").findOne({
                name: "activo"
            });
            const userRole = await db.collection("userRole").findOne({
                name: "usuario"
            });
            console.log(user);
            console.log(account);
            const randomId = new external_mongodb_.ObjectId();
            const maxAge = 3600 * 24;
            const expiryDate = new Date(Date.now() + maxAge * 3000);
            const token = Math.random().toString(36).substring(2, 120);
            const token2 = Math.random().toString(36).substring(2, 120);
            if (account.provider === "credentials") {
                if (!accountExist2) {
                    const accountInserted = await db.collection("accounts").insertOne({
                        provider: account.provider,
                        type: account.type,
                        access_token: token,
                        expires_at: expiryDate,
                        scope: "user.read",
                        token_type: "Bearer",
                        refresh_token: token2,
                        providerAccountId: account.providerAccountId,
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        username: user.username,
                        image: user.image,
                        createdAt: new Date(),
                        userId: user._id
                    });
                    await db.collection("users").updateOne({
                        _id: user._id
                    }, {
                        $set: {
                            accountId: accountInserted._id
                        }
                    });
                } else {
                    await db.collection("accounts").updateOne({
                        userId: user._id
                    }, {
                        $set: {
                            expires_at: expiryDate * 24
                        }
                    });
                    await db.collection("users").updateOne({
                        _id: user._id
                    }, {
                        $set: {
                            accountId: accountExist2._id
                        }
                    });
                }
            }
            if (account.provider === "google") {
                if (!accountExist) {
                    const accountInserted1 = await db.collection("accounts").insertOne({
                        provider: account.provider,
                        type: account.type,
                        access_token: account.access_token,
                        expires_at: account.expires_at,
                        scope: account.scope,
                        token_type: account.token_type,
                        refresh_token: account.id_token,
                        providerAccountId: account.providerAccountId,
                        email: user.email,
                        firstname: "",
                        lastname: "",
                        username: user.name,
                        image: user.image,
                        createdAt: new Date(),
                        userId: randomId
                    });
                    await db.collection("users").updateOne({
                        _id: user._id
                    }, {
                        $set: {
                            accountId: accountInserted1._id
                        }
                    });
                    if (!userExist) {
                        await db.collection("users").insertOne({
                            _id: randomId,
                            email: user.email,
                            firstname: "",
                            lastname: "",
                            username: user.name,
                            password: "",
                            phone: "",
                            gender: "",
                            birthdate: new Date("<2012-12-12>"),
                            image: user.image,
                            status: userStatus,
                            role: userRole,
                            createdAt: new Date(),
                            accountId: account._id,
                            followers: [],
                            following: [],
                            isCaretaker: false
                        });
                    } else {
                        if (accountExist.userId == userExist._id) {
                            await db.collection("users").updateOne({
                                _id: userExist._id
                            }, {
                                $set: {
                                    accountId: accountExist._id
                                }
                            });
                        }
                    }
                } else {
                    await db.collection("accounts").updateOne({
                        _id: accountExist.id
                    }, {
                        $set: {
                            expires_at: account.expires_at * 2
                        }
                    });
                    await db.collection("users").updateOne({
                        _id: user._id
                    }, {
                        $set: {
                            accountId: accountExist._id
                        }
                    });
                }
            }
            if (account.provider === "twitter") {
                if (!accountExist) {
                    const accountInserted2 = await db.collection("accounts").updateOne({
                        _id: account.id
                    }, {
                        $set: {
                            provider: account.provider,
                            type: account.type,
                            access_token: account.access_token,
                            expires_at: account.expires_at,
                            scope: account.scope,
                            token_type: account.token_type,
                            refresh_token: account.refresh_token,
                            providerAccountId: account.providerAccountId,
                            email: user.email,
                            firstname: "",
                            lastname: "",
                            username: user.name,
                            image: user.image,
                            createdAt: new Date(),
                            userId: randomId
                        }
                    });
                    await db.collection("users").updateOne({
                        _id: user._id
                    }, {
                        $set: {
                            accountId: accountInserted2._id
                        }
                    });
                    if (!userExist) {
                        await db.collection("users").insertOne({
                            _id: randomId,
                            email: user.email,
                            firstname: "",
                            lastname: "",
                            username: user.name,
                            password: "",
                            phone: "",
                            gender: "",
                            birthdate: new Date("<2012-12-12>"),
                            image: user.image,
                            status: userStatus,
                            role: userRole,
                            createdAt: new Date(),
                            accountId: account._id,
                            followers: [],
                            following: [],
                            isCaretaker: false
                        });
                    } else {
                        if (accountExist.userId == userExist._id) {
                            await db.collection("users").updateOne({
                                _id: userExist._id
                            }, {
                                $set: {
                                    accountId: accountExist._id
                                }
                            });
                        }
                    }
                } else {
                    await db.collection("accounts").updateOne({
                        _id: account._id
                    }, {
                        $set: {
                            provider: account.provider,
                            type: account.type,
                            access_token: account.access_token,
                            expires_at: account.expires_at,
                            scope: account.scope,
                            token_type: account.token_type,
                            refresh_token: account.refresh_token,
                            providerAccountId: account.providerAccountId,
                            email: user.email,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            username: user.name,
                            image: user.image,
                            status: user.status,
                            role: user.role,
                            createdAt: user.createdAt,
                            userId: user._id
                        }
                    });
                }
                await db.collection("users").updateOne({
                    _id: user._id
                }, {
                    $set: {
                        accountId: accountExist._id
                    }
                });
            }
            return true;
        },
        async jwt ({ token , user  }) {
            console.log(user);
            if (user) {
                token = {
                    ...token,
                    id: user._id,
                    isCaretaker: user.isCaretaker,
                    email: user.email,
                    username: user.username,
                    biography: user.biography,
                    followers: user.followers,
                    following: user.following,
                    role: user.role.name
                };
            }
            console.log(token);
            return Promise.resolve(token);
        },
        async session ({ session , token  }) {
            console.log(token);
            if (token) {
                session = {
                    ...session,
                    user: {
                        id: token.id,
                        email: token.email,
                        username: token.username,
                        biography: token.biography,
                        followers: token.followers,
                        following: token.following,
                        isCaretaker: token.isCaretaker,
                        role: token.role
                    }
                };
            }
            console.log(session);
            return Promise.resolve(session);
        }
    }
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ }),

/***/ 2536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

if (!process.env.MONGODB_URI) {
    throw new Error("No se ha podido conectar a la base de datos");
}
const uri = process.env.MONGODB_URI;
let client;
let clientPromise;
if (false) {} else {
    client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    clientPromise = client.connect();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6805));
module.exports = __webpack_exports__;

})();