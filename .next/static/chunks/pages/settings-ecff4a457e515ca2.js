(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{9655:function(r,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings",function(){return e(9291)}])},9291:function(r,a,e){"use strict";e.r(a),e.d(a,{default:function(){return b}});var i=e(7568),t=e(655),y=e(5893),d=e(357),n=e.n(d),o=e(9008),O=e.n(o),c=e(7294),m=e(5590),l=e.n(m),s=e(2081),p=e(9583),u=e(8193),f=e(3750),q=e(9493),R=e(1836);function b(){var r=(0,c.useState)(""),a=r[0],e=r[1],d=(0,c.useState)(""),o=d[0],m=d[1],b=(0,c.useState)(""),x=b[0],h=b[1],k=(0,c.useState)(""),w=k[0],j=k[1],_=(0,c.useState)(""),g=_[0],v=_[1],z=(0,c.useState)(!1),N=z[0],S=z[1],E=(0,c.useState)(""),C=(E[0],E[1],(0,c.useState)("")),I=(C[0],C[1]),P=(0,c.useState)(""),D=P[0],G=P[1],T=function(){var r=(0,i.Z)((function(r){return(0,t.__generator)(this,(function(a){switch(a.label){case 0:return r.preventDefault(),[4,fetch("/api/users",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:sessionStorage.user.username})}).catch((function(r){return console.log(r)}))];case 1:return a.sent(),G("Se ha eliminado la cuenta correctamente"),router.push("/"),[2]}}))}));return function(a){return r.apply(this,arguments)}}(),B=function(r){var a=document.querySelector(".form-page"),e=document.querySelector(".saved"),i=document.querySelector(".complaints");if("Editar"===r){var t=document.querySelector("#edit");a.style.display="block",e.style.display="none",i.style.display="none",t.addEventListener("click",(function(){t.focus()}))}else if("Guardados"===r){var y=document.querySelector("#saved");a.style.display="none",e.style.display="flex",i.style.display="none",y.addEventListener("click",(function(){y.focus()}))}else if("Denuncias"===r){var d=document.querySelector("#complaints");a.style.display="none",e.style.display="none",i.style.display="flex",d.addEventListener("click",(function(){d.focus()}))}};return(0,y.jsxs)(q.Z,{children:[(0,y.jsx)(O(),{children:(0,y.jsx)("title",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]]),children:"Configuraci\xf3n"})}),(0,y.jsx)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().content||""),children:(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" settings",children:[(0,y.jsxs)("nav",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" settings__links",children:[(0,y.jsx)("button",{id:"edit",onClick:function(){return B("Editar")},"aria-label":"Ir a Editar Perfil",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" config__style",children:"Editar perfil"}),(0,y.jsx)("button",{id:"saved",onClick:function(){return B("Guardados")},"aria-label":"Ir a Guardados",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" config__style",children:"Guardados"}),(0,y.jsx)("button",{id:"complaints",onClick:function(){return B("Denuncias")},"aria-label":"Ir a Denuncias",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" config__style",children:"Denuncias"})]}),(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" form-page",children:[(0,y.jsx)("h1",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().title||""),children:"Editar perfil"}),(0,y.jsxs)("form",{action:"/api/auth/signIn/email",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" form-vertical",children:[(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" form-vertical__name",children:[(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" label",children:[(0,y.jsx)("p",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().text||""),children:"Nombre"}),(0,y.jsx)(p.Bj$,{size:20,color:s.O9.primary})]}),(0,y.jsx)("input",{title:"Introducir nombre",type:"text",name:"Nombrec",value:a,required:!0,onChange:function(r){return e(r.target.value)},placeholder:"p. ej.: Javier",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])})]}),(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" form-vertical__lastname",children:[(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" label",children:[(0,y.jsx)("p",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().text||""),children:"Apellidos"}),(0,y.jsx)(p.Bj$,{size:20,color:s.O9.primary})]}),(0,y.jsx)("input",{title:"Introducir apellidos",type:"text",name:"lastName",value:o,required:!0,onChange:function(r){return m(r.target.value)},placeholder:"p. ej.: Garc\xeda Navarro",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])})]}),(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" form-vertical__phone",children:[(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" label",children:[(0,y.jsx)("p",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().text||""),children:"Tel\xe9fono"}),(0,y.jsx)(u.rJP,{size:20,color:s.O9.primary})]}),(0,y.jsx)("input",{title:"Introducir tel\xe9fono",type:"text",name:"Tel\xe9fono",value:x,onChange:function(r){return h(r.target.value)},placeholder:"p. ej.: 654897612",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])})]}),(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" form-vertical__biography",children:[(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" label",children:[(0,y.jsx)("p",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().text||""),children:"Biograf\xeda"}),(0,y.jsx)(f.S71,{size:20,color:s.O9.primary})]}),(0,y.jsx)("textarea",{title:"Introducir biograf\xeda",name:"Biography",value:w,onChange:function(r){return j(r.target.value)},placeholder:"p. ej.: Soy un estudiante de 4\xba de ESO.",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])})]}),(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" form-vertical__gender",children:[(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" label",children:[(0,y.jsx)("p",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().text||""),children:"G\xe9nero"}),(0,y.jsx)(f.vw2,{size:20,color:s.O9.primary})]}),(0,y.jsxs)("select",{name:"gender",id:"gender",onChange:function(r){return I(r)},className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" selector",children:[(0,y.jsx)("option",{value:"male",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]]),children:"Masculino"}),(0,y.jsx)("option",{value:"woman",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]]),children:"Femenino"}),(0,y.jsx)("option",{value:"other",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]]),children:"Otro"})]})]}),(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" form-vertical__birthdate",children:[(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" label",children:[(0,y.jsx)("p",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().text||""),children:"Fecha de nacimiento"}),(0,y.jsx)(p.RUr,{size:20,color:s.O9.primary})]}),(0,y.jsx)("input",{title:"Introducir nombre",type:"date",max:function(){var r=new Date;return r.getFullYear()-4+"-"+(r.getMonth()+1)+"-"+r.getDate()}(),name:"Birthdate",value:g,onChange:function(r){return v(r.target.value)},className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])})]}),(0,y.jsx)("button",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().buttonPrimary||""),children:(0,y.jsx)("a",{href:"/changePassword",title:"Ir a la p\xe1gina para cambiar la contrase\xf1a","aria-label":"Ir a cambiar contrase\xf1a",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]]),children:"Cambiar contrase\xf1a"})}),(0,y.jsx)("button",{onClick:function(){return S(!0)},className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().buttonDelete||""),children:"Eliminar cuenta"}),(0,y.jsx)("button",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().buttonPrimary||""),children:(0,y.jsx)("a",{href:"/myprofile/pets",title:"Ir a la p\xe1gina para a\xf1adir mascotas","aria-label":"Ir a cambiar contrase\xf1a",className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]]),children:"A\xf1adir mascotas"})})]}),(0,y.jsx)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().error||""),children:D}),(0,y.jsx)("button",{onClick:function(r){},className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().buttonPrimary||""),children:"Guardar"}),N&&(0,y.jsxs)(R.Z,{children:[(0,y.jsx)("h2",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().title3||""),children:"Eliminar cuenta"}),(0,y.jsx)("p",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().text2||""),children:"\xbfEst\xe1s seguro de que quieres eliminar tu cuenta?"}),(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" buttons",children:[(0,y.jsx)("button",{onClick:function(r){return T(r)},className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().buttonSecondary||""),children:"S\xed"}),(0,y.jsx)("button",{onClick:function(){return S(!1)},className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().buttonTertiary||""),children:"No"})]})]})]}),(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" saved",children:[(0,y.jsx)("h1",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().title||""),children:"Guardados"}),(0,y.jsx)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" saved__content"})]}),(0,y.jsxs)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" complaints",children:[(0,y.jsx)("h1",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" "+(l().title||""),children:"Denuncias"}),(0,y.jsx)("div",{className:n().dynamic([["c40bb189253d6e1b",[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary]]])+" complaints__content"})]})]})}),(0,y.jsx)(n(),{id:"c40bb189253d6e1b",dynamic:[s.O9.primary,s.O9.secondary,s.O9.primary,s.O9.secondary,s.O9.primary,s.Rq.default,s.O9.secondary,s.O9.tertiary,s.Rq.default,s.O9.quaternary,s.O9.secondary,s.O9.primary,s.O9.primary,s.Rq.secondary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.Rq.default,s.O9.primary,s.O9.secondary],children:".settings.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;gap:2rem;padding:5rem;border:1px solid ".concat(s.O9.primary,';-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.settings__links.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start}.config__style.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:1rem;color:#1c1c1c;font-size:1.5rem;font-weight:600;border:none;background-color:transparent;font-family:"Poppins",sans-serif;text-decoration:none}.config__style.__jsx-style-dynamic-selector:hover{padding:.5rem;color:').concat(s.O9.secondary,";cursor:pointer;background-color:").concat(s.O9.primary,";-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:.3s ease all;-moz-transition:.3s ease all;-o-transition:.3s ease all;transition:.3s ease all}.config__style.__jsx-style-dynamic-selector:focus{padding:.5rem;color:").concat(s.O9.secondary,";cursor:pointer;background-color:").concat(s.O9.primary,";-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:.3s ease all;-moz-transition:.3s ease all;-o-transition:.3s ease all;transition:.3s ease all}.form__text.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:2rem;margin-bottom:2rem}.form-page.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.form-vertical.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:15rem;margin-bottom:15rem;width:20rem;height:30rem}.form-vertical__username.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.form-vertical__password.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%}.form__link.__jsx-style-dynamic-selector{font-family:").concat(s.Rq.default,";color:").concat(s.O9.secondary,";text-decoration:none;font-size:1rem;font-weight:400}.form__link.__jsx-style-dynamic-selector:hover{color:").concat(s.O9.tertiary,";-webkit-transition:all.5s ease-in-out;-moz-transition:all.5s ease-in-out;-o-transition:all.5s ease-in-out;transition:all.5s ease-in-out}.label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.selector.__jsx-style-dynamic-selector{width:100%;font-family:").concat(s.Rq.default,";font-size:1rem;color:").concat(s.O9.quaternary,";background-color:").concat(s.O9.secondary,";border:1px solid ").concat(s.O9.primary,";-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px}.saved.__jsx-style-dynamic-selector{display:none}h2.__jsx-style-dynamic-selector{color:").concat(s.O9.primary,";font-family:").concat(s.Rq.secondary,";font-weight:600;font-size:2rem}p.__jsx-style-dynamic-selector{margin-right:1rem;font-size:1rem;font-family:").concat(s.Rq.default,";color:").concat(s.O9.primary,"}h6.__jsx-style-dynamic-selector{margin-right:1rem;font-size:.8rem;font-weight:500;font-family:").concat(s.Rq.default,";color:").concat(s.O9.primary,"}.__jsx-style-dynamic-selector::-webkit-input-placeholder{color:").concat(s.O9.primary,"}.__jsx-style-dynamic-selector:-moz-placeholder{color:").concat(s.O9.primary,"}.__jsx-style-dynamic-selector::-moz-placeholder{color:").concat(s.O9.primary,"}.__jsx-style-dynamic-selector:-ms-input-placeholder{color:").concat(s.O9.primary,"}.__jsx-style-dynamic-selector::-ms-input-placeholder{color:").concat(s.O9.primary,"}.__jsx-style-dynamic-selector::placeholder{color:").concat(s.O9.primary,'}input[type="text"].__jsx-style-dynamic-selector{width:100%;height:2rem;padding:.4rem;margin-bottom:2rem;font-family:').concat(s.Rq.default,";font-size:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid ").concat(s.O9.primary,'}input[type="date"].__jsx-style-dynamic-selector{width:100%;height:2rem;padding:.4rem;margin-bottom:2rem;font-family:').concat(s.Rq.default,";font-size:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid ").concat(s.O9.primary,"}textarea.__jsx-style-dynamic-selector{width:100%;height:3rem;padding:.4rem;margin-bottom:2rem;font-family:").concat(s.Rq.default,";font-size:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;border:1px solid ").concat(s.O9.primary,"}a.__jsx-style-dynamic-selector{text-decoration:none;color:").concat(s.O9.secondary,"}h1.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}")})]})}},9008:function(r,a,e){r.exports=e(5443)},7568:function(r,a,e){"use strict";function i(r,a,e,i,t,y,d){try{var n=r[y](d),o=n.value}catch(O){return void e(O)}n.done?a(o):Promise.resolve(o).then(i,t)}function t(r){return function(){var a=this,e=arguments;return new Promise((function(t,y){var d=r.apply(a,e);function n(r){i(d,t,y,n,o,"next",r)}function o(r){i(d,t,y,n,o,"throw",r)}n(void 0)}))}}e.d(a,{Z:function(){return t}})}},function(r){r.O(0,[1228,5445,5937,2013,2876,3609,4617,6865,8841,9493,9774,2888,179],(function(){return a=9655,r(r.s=a);var a}));var a=r.O();_N_E=a}]);