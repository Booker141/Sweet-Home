(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3529],{5102:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/attendances/[typeAttendance]/[thread]",function(){return t(9177)}])},9177:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return x},default:function(){return f}});var a=t(5893),r=t(357),s=t.n(r),c=t(9008),i=t.n(c),d=t(1163),u=t(3299),o=t(7294),l=t(5590),b=t.n(l),m=t(9493),x=!0;function f(e){var n=e.attendances,t=(0,u.useSession)({required:!0}),r=t.data,c=t.status,l=(0,o.useState)(!1),x=l[0],f=(l[1],(0,o.useState)(!1)),h=f[0],j=(f[1],(0,o.useState)(n)),p=j[0],y=(j[1],(0,d.useRouter)());return"loading"==c?(0,a.jsx)("div",{className:b().loading,children:(0,a.jsx)("p",{className:b().title,children:"Cargando.."})}):r?(0,a.jsxs)(m.Z,{children:[(0,a.jsx)(i(),{children:(0,a.jsxs)("title",{children:["Hilo ",y.query.thread]})}),(0,a.jsx)("h1",{className:b().title,children:y.query.thread}),(0,a.jsxs)("div",{className:"sort__buttons",children:[(0,a.jsx)("button",{className:b().buttonPrimary,onClick:function(){return Router.push("/attendances/".concat(y.query.thread,"/createAttendance"))},"aria-label":"Crear nuevo cuidado",children:"Crear nuevo cuidado"}),(0,a.jsx)("button",{className:b().buttonPrimary,onClick:function(){return sortThreadByUsername()},"aria-label":"Ordenar categor\xedas por usuario",children:"Ordenar por usuario"}),(0,a.jsx)("button",{className:b().buttonPrimary,onClick:function(){return sortThreadByDate()},"aria-label":"Ordenar categor\xedas por nombre",children:"Ordenar por fecha"})]}),0===n.length&&(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:b().loading,children:"Cargando.."})}),x&&p.map((function(e){var n=e._id,t=e.name,r=(e.typeAttendanceId,e.createdAt),s=e.userId;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Attendance,{name:t,typeAttendanceId:typeAttendance,createdAt:r,userId:s},n)})})),h&&p.map((function(e){var n=e._id,t=e.name,r=(e.typeAttendanceId,e.createdAt),s=e.userId;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Attendance,{name:t,typeAttendanceId:typeAttendance,createdAt:r,userId:s},n)})})),(!x||!h)&&n.map((function(e){var n=e._id,t=e.name,r=(e.typeAttendanceId,e.createdAt),s=e.userId;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(Attendance,{name:t,typeAttendanceId:typeAttendance,createdAt:r,userId:s},n)})}))]}):(0,a.jsx)(m.Z,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"jsx-e6e6aabbf62f01eb "+(b().content||""),children:(0,a.jsxs)("div",{className:"jsx-e6e6aabbf62f01eb message",children:[(0,a.jsx)("h1",{className:"jsx-e6e6aabbf62f01eb "+(b().title||""),children:"Para acceder a esta p\xe1gina debe iniciar sesi\xf3n"}),(0,a.jsx)("button",{onClick:function(){return signIn()},className:"jsx-e6e6aabbf62f01eb "+(b().buttonPrimary||""),children:"Iniciar sesi\xf3n"})]})}),(0,a.jsx)(s(),{id:"e6e6aabbf62f01eb",children:".message.jsx-e6e6aabbf62f01eb{display:flex flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"})]})})}},9008:function(e,n,t){e.exports=t(5443)}},function(e){e.O(0,[1228,5445,5937,2013,2876,3609,6865,8841,9493,9774,2888,179],(function(){return n=5102,e(e.s=n);var n}));var n=e.O();_N_E=n}]);