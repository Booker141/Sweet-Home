(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6153],{1359:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/attendances/[typeAttendance]",function(){return n(5526)}])},5526:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return x},default:function(){return b}});var a=n(5893),i=n(357),r=n.n(i),c=n(9008),s=n.n(c),d=n(1163),o=n(3299),l=n(7294),u=n(5590),h=n.n(u),m=n(9493),x=!0;function b(e){var t=e.threads,n=(0,o.useSession)({required:!0}),i=n.data,c=n.status,u=(0,l.useState)(!1),x=u[0],b=u[1],y=(0,l.useState)(!1),f=y[0],p=y[1],j=(0,l.useState)(!1),g=j[0],A=j[1],v=(0,l.useState)(t),k=v[0],_=v[1],N=(0,l.useState)({nutrition:!1,hygiene:!1,leisure:!1,health:!1,education:!1,physichalActivity:!1,attendance:""}),w=N[0],I=N[1],P=(0,l.useState)(0),C=(P[0],P[1],(0,d.useRouter)());(0,l.useEffect)((function(){"nutrition"==C.query.typeAttendance&&I({nutrition:!0,hygiene:!1,leisure:!1,health:!1,education:!1,physichalActivity:!1,attendance:"Nutrici\xf3n"}),"hygiene"==C.query.typeAttendance&&I({nutrition:!1,hygiene:!0,leisure:!1,health:!1,education:!1,physichalActivity:!1,attendance:"Higiene"}),"leisure"==C.query.typeAttendance&&I({nutrition:!1,hygiene:!1,leisure:!0,health:!1,education:!1,physichalActivity:!1,attendance:"Ocio"}),"health"==C.query.typeAttendance&&I({nutrition:!1,hygiene:!1,leisure:!1,health:!0,education:!1,physichalActivity:!1,attendance:"Salud"}),"education"==C.query.typeAttendance&&I({nutrition:!1,hygiene:!1,leisure:!1,health:!1,education:!0,physichalActivity:!1,attendance:"Educaci\xf3n"}),"physichalActivity"==C.query.typeAttendance&&I({nutrition:!1,hygiene:!1,leisure:!1,health:!1,education:!1,physichalActivity:!0,attendance:"Actividad f\xedsica"})}),[]);return"loading"===c?(0,a.jsx)("div",{className:h().loading,children:(0,a.jsx)("p",{className:h().title,children:"Cargando.."})}):i?(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(s(),{children:(0,a.jsxs)("title",{className:"jsx-a183743a7568749",children:["Hilos sobre ",w.attendance]})}),(0,a.jsxs)("h1",{className:"jsx-a183743a7568749 "+(h().title||""),children:["Hilos sobre ",w.attendance]}),(0,a.jsxs)("div",{className:"jsx-a183743a7568749 sort__buttons",children:[(0,a.jsx)("button",{onClick:function(){return C.push("/attendances/".concat(C.query.typeAttendance,"/createThread"))},"aria-label":"Crear nuevo hilo",className:"jsx-a183743a7568749 "+(h().buttonPrimary||""),children:"Crear hilo"}),(0,a.jsx)("button",{onClick:function(){return function(){var e=t.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));b(!x),_(e)}()},"aria-label":"Ordenar categor\xedas por nombre",className:"jsx-a183743a7568749 "+(h().buttonPrimary||""),children:"Ordenar por nombre"}),(0,a.jsx)("button",{onClick:function(){return function(){var e=t.sort((function(e,t){return e.createdAt>t.createdAt?1:e.createdAt<t.createdAt?-1:0}));p(!f),_(e)}()},"aria-label":"Ordenar categor\xedas por nombre",className:"jsx-a183743a7568749 "+(h().buttonPrimary||""),children:"Ordenar por fecha"}),(0,a.jsx)("button",{onClick:function(){return function(){var e=t.sort((function(e,t){return e.numPosts>t.numPosts?1:e.numPosts<t.numPosts?-1:0}));A(!g),_(e)}()},"aria-label":"Ordenar por actividad",className:"jsx-a183743a7568749 "+(h().buttonPrimary||""),children:"Ordenar por actividad"})]}),0===t.length&&(0,a.jsx)("div",{className:"jsx-a183743a7568749 "+(h().loading||""),children:(0,a.jsx)("p",{className:"jsx-a183743a7568749",children:"Cargando.."})}),x&&k.map((function(e){var t=e._id,n=e.name,i=(e.typeAttendanceId,e.createdAt),r=e.userId;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Thread,{name:n,typeAttendanceId:w,createdAt:i,userId:r},t)})})),f&&k.map((function(e){var t=e._id,n=e.name,i=(e.typeAttendanceId,e.createdAt),r=e.userId;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Thread,{name:n,typeAttendanceId:w,createdAt:i,userId:r},t)})})),g&&k.map((function(e){var t=e._id,n=e.name,i=(e.typeAttendanceId,e.createdAt),r=e.userId;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Thread,{name:n,typeAttendanceId:w,createdAt:i,userId:r},t)})})),!g&&t.map((function(e){var t=e._id,n=e.name,i=(e.typeAttendanceId,e.createdAt),r=e.userId;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Thread,{name:n,typeAttendanceId:w,createdAt:i,userId:r},t)})})),(0,a.jsx)(r(),{id:"a183743a7568749",children:".sort__buttons.jsx-a183743a7568749{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;gap:1rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"})]}):(0,a.jsx)(m.Z,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-e6e6aabbf62f01eb "+(h().content||""),children:(0,a.jsxs)("div",{className:"jsx-e6e6aabbf62f01eb message",children:[(0,a.jsx)("h1",{className:"jsx-e6e6aabbf62f01eb "+(h().title||""),children:"Para acceder a esta p\xe1gina debe iniciar sesi\xf3n"}),(0,a.jsx)("button",{onClick:function(){return signIn()},className:"jsx-e6e6aabbf62f01eb "+(h().buttonPrimary||""),children:"Iniciar sesi\xf3n"})]})}),(0,a.jsx)(r(),{id:"e6e6aabbf62f01eb",children:".message.jsx-e6e6aabbf62f01eb{display:flex flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"})]})})}},9008:function(e,t,n){e.exports=n(5443)}},function(e){e.O(0,[1228,5445,5937,2013,2876,3609,6865,8841,9493,9774,2888,179],(function(){return t=1359,e(e.s=t);var t}));var t=e.O();_N_E=t}]);