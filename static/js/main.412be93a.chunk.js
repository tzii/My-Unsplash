(this["webpackJsonpmy-unsplash"]=this["webpackJsonpmy-unsplash"]||[]).push([[0],{45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(0),r=s(1),n=s(14),c=s.n(n),o=s(2),l=s(4),i=s.n(l),d="https://myunsplash.herokuapp.com/",u=function(e){return i()({method:"GET",url:d+"api/search/"+e}).then((function(e){return e.data}))},m=s(17),b=Object(r.createContext)({images:[],imgId:"",setImages:function(){},setImgId:function(){},setSearchString:function(){},setPercent:function(){}});function j(e){var t=e.setState,s=e.image,n=Object(r.useContext)(b).setImgId;return Object(a.jsxs)("div",{className:"img-container relative rounded-2xl overflow-hidden",children:[Object(a.jsx)("div",{className:"mask absolute w-full h-full bg-black bg-opacity-50 duration-300",children:Object(a.jsxs)("div",{className:"h-full relative font-mont",children:[Object(a.jsx)("button",{className:"px-3 text-white bg-red-400 hover:bg-red-500 rounded-full absolute top-3 right-3",onClick:function(){n(s._id),t("delete")},children:"delete"}),Object(a.jsx)("p",{className:" text-white text-lg absolute bottom-0 left-0 p-3",children:s.label})]})}),Object(a.jsx)("img",{className:"w-full",src:s.url,alt:""})]})}function x(e){var t=e.setState,s=Object(r.useContext)(b).images;return Object(a.jsx)("div",{className:"container mt-10 mx-auto px-4 min-w-640",children:Object(a.jsx)(m.a,{gap:30,items:s.map((function(e){return{key:e._id,node:Object(a.jsx)(j,{setState:t,image:e})}})),minColumnWidth:300})})}var h=s.p+"static/media/logo.c888ca72.svg";function f(e){var t=e.data,s=Object(r.useState)(!0),n=Object(o.a)(s,2),c=n[0],l=n[1];Object(r.useEffect)((function(){l(!1)}),[t]);var i=function(){l(!0)};return!t||c?null:"ok"===t.status?Object(a.jsx)("div",{className:"bg-green-600 animate-slide-down fixed z-5 w-screen",children:Object(a.jsx)("div",{className:"container mx-auto py-3 px-3 sm:px-6 lg:px-8",children:Object(a.jsxs)("div",{className:"flex items-center justify-between flex-wrap",children:[Object(a.jsxs)("div",{className:"w-0 flex-1 flex items-center",children:[Object(a.jsx)("span",{className:"rounded-lg bg-green-800 h-8 w-8 flex items-center justify-center",children:Object(a.jsx)("i",{className:"fas fa-check text-white text-xl"})}),Object(a.jsx)("p",{className:"ml-3 font-medium text-white truncate",children:Object(a.jsx)("span",{className:"inline",children:null===t||void 0===t?void 0:t.msg})})]}),Object(a.jsx)("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-3",children:Object(a.jsx)("button",{type:"button",className:"-mr-1 flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2",onClick:i,children:Object(a.jsx)("svg",{className:"h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})})})})]})})}):Object(a.jsx)("div",{className:"bg-red-600 animate-slide-down fixed z-5 w-screen",children:Object(a.jsx)("div",{className:"container mx-auto py-3 px-3 sm:px-6 lg:px-8",children:Object(a.jsxs)("div",{className:"flex items-center justify-between flex-wrap",children:[Object(a.jsxs)("div",{className:"w-0 flex-1 flex items-center",children:[Object(a.jsx)("span",{className:"rounded-lg bg-red-800 h-8 w-8 flex items-center justify-center",children:Object(a.jsx)("i",{className:"fas fa-check text-white text-xl"})}),Object(a.jsx)("p",{className:"ml-3 font-medium text-white truncate",children:Object(a.jsx)("span",{className:"inline",children:null===t||void 0===t?void 0:t.msg})})]}),Object(a.jsx)("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-3",children:Object(a.jsx)("button",{type:"button",className:"-mr-1 flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2",onClick:i,children:Object(a.jsx)("svg",{className:"h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(a.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})})})})]})})})}function g(e){var t=e.setState,s=e.noti,n=Object(r.useContext)(b).setSearchString;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("header",{className:"font-noto min-w-640 py-1 shadow bg-white sticky top-0 z-10",children:Object(a.jsxs)("div",{className:"container mx-auto px-4 my-2 flex justify-between items-center ",children:[Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("img",{className:"mr-8",src:h,alt:""}),Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),n(e.target.search.value)},children:Object(a.jsxs)("label",{htmlFor:"search",className:"relative",children:[Object(a.jsx)("input",{className:"h-10 pl-9 border-2 border-gray-300 focus:border-gray-400 rounded-lg text-gray-700",type:"text",name:"search",id:"search",placeholder:"Search by name",autoComplete:"off"}),Object(a.jsx)("i",{className:"fas fa-search text-gray-300 absolute pos-center left-3"})]})})]}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"h-10 mr-4 px-4 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow duration-300",onClick:function(e){t("add")},children:"Add a photo"})})]})}),Object(a.jsx)(f,{data:s})]})}var p=new RegExp("(http|https|ftp):[/]{2}([a-zA-Z0-9-.]+.[a-zA-Z]{2,4})","g");function O(e){var t=e.state,s=e.setState,n=e.setNoti,c=Object(r.useState)(!0),l=Object(o.a)(c,2),m=l[0],j=l[1],x=Object(r.useState)(!0),h=Object(o.a)(x,2),f=h[0],g=h[1],O=Object(r.useState)(!0),w=Object(o.a)(O,2),v=w[0],y=w[1],N=Object(r.useState)(!0),S=Object(o.a)(N,2),k=S[0],C=S[1],I=Object(r.useContext)(b),P=I.setImages,z=I.imgId,F=I.setPercent;Object(r.useEffect)((function(){"none"!==t?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}),[t]);return Object(a.jsxs)(a.Fragment,{children:["add"===t?Object(a.jsx)("div",{className:"fixed z-30 top-4 left-0 w-full",children:Object(a.jsxs)("form",{className:"modal mx-auto p-7 rounded-2xl font-noto bg-white flex flex-col w-500 animate-slide-down",onSubmit:function(e){e.preventDefault(),""!==e.target.label.value?(j(!0),p.test(e.target.url.value)?(g(!0),""!==e.target.password.value?(y(!0),F(80),function(e,t,s){var a=JSON.stringify({label:e,url:t,password:s});return i()({method:"POST",url:d+"api/upload",headers:{"Content-Type":"application/json"},data:a}).then((function(e){return e.data}))}(e.target.label.value,e.target.url.value,e.target.password.value).then((function(e){u("").then(P),F(100),n(e)})),s("none")):y(!1)):g(!1)):j(!1)},children:[Object(a.jsx)("h5",{className:"text-gray-700 text-lg",children:"Add a new photo"}),Object(a.jsx)("label",{className:"text-gray-600 text-sm mt-4",htmlFor:"label",children:"Label"}),Object(a.jsx)("input",{className:"text-gray-700 px-4 py-2 mt-2 border rounded-xl"+(m?" border-gray-400 focus:border-gray-600":" border-red-400 focus:border-red-600"),type:"text",name:"",id:"label",placeholder:"Suspendisse elit massa",autoComplete:"off"}),Object(a.jsx)("label",{className:"text-gray-600 text-sm mt-3",htmlFor:"url",children:"Photo URL"}),Object(a.jsx)("input",{className:"text-gray-700 px-4 py-2 mt-2 border rounded-xl"+(f?" border-gray-400 focus:border-gray-600":" border-red-400 focus:border-red-600"),type:"text",name:"",id:"url",autoComplete:"off",placeholder:"https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."}),Object(a.jsx)("label",{className:"text-gray-600 text-sm mt-4",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"text-gray-700 px-4 py-2 mt-2 border rounded-xl"+(v?" border-gray-400 focus:border-gray-600":" border-red-400 focus:border-red-600"),type:"text",name:"",id:"password",placeholder:"Password",autoComplete:"off"}),Object(a.jsxs)("div",{className:"mt-3 flex flex-row-reverse",children:[Object(a.jsx)("button",{type:"submit",className:"h-10 mr-4 px-4 text-white bg-green-500 hover:bg-green-600 rounded-lg shadow transition",children:"Submit"}),Object(a.jsx)("button",{className:"h-10 mr-4 px-4 text-gray-300 bg-white hover:bg-gray-50 hover:shadow rounded-lg transition",onClick:function(){return s("none")},children:"Cancel"})]})]})}):"delete"===t?Object(a.jsx)("div",{className:"fixed z-30 top-4 left-0 w-full",children:Object(a.jsxs)("form",{className:"modal mx-auto p-7 rounded-2xl font-noto bg-white flex flex-col w-500 animate-slide-down",onSubmit:function(e){e.preventDefault(),""!==e.target.password.value?(C(!0),F(80),function(e,t){var s=JSON.stringify({id:e,password:t});return i()({method:"POST",url:d+"api/delete",headers:{"Content-Type":"application/json"},data:s}).then((function(e){return e.data}))}(z,e.target.password.value).then((function(e){u("").then(P),F(100),n(e)})),s("none")):C(!1)},children:[Object(a.jsx)("h5",{className:"text-gray-700 text-lg",children:"Are you sure?"}),Object(a.jsx)("label",{className:"text-gray-600 text-sm mt-4",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"text-gray-700 px-4 py-2 mt-2 border rounded-xl"+(k?" border-gray-400 focus:border-gray-600":" border-red-400 focus:border-red-600"),type:"Password",name:"",id:"password",placeholder:"********",autoComplete:"off"}),Object(a.jsxs)("div",{className:"mt-3 flex flex-row-reverse",children:[Object(a.jsx)("button",{type:"submit",className:"h-10 mr-4 px-4 text-white bg-green-500 rounded-lg shadow transition",children:"Submit"}),Object(a.jsx)("button",{className:"h-10 mr-4 px-4 text-gray-300 bg-white hover:bg-gray-50 hover:shadow rounded-lg transition",onClick:function(){return s("none")},children:"Cancel"})]})]})}):null,Object(a.jsx)("div",{className:"modal-backdrop bg-black duration-300"+("none"!==t?" fixed z-20 top-0 left-0 w-full h-full bg-opacity-50":" bg-opacity-0"),onClick:function(){return s("none")}})]})}var w=s(16);function v(){return Object(a.jsxs)("footer",{className:"font-mont text-sm font-medium text-center my-4",children:[Object(a.jsx)("a",{href:"https://github.com/Shoji5",children:"Tu\u1ea5n V\u0169"})," @ ",Object(a.jsx)("a",{href:"https://devchallenges.io/",children:"DevChallenges.io"})]})}function y(){var e=Object(r.useState)("none"),t=Object(o.a)(e,2),s=t[0],n=t[1],c=Object(r.useState)([]),l=Object(o.a)(c,2),i=l[0],d=l[1],m=Object(r.useState)(""),j=Object(o.a)(m,2),h=j[0],f=j[1],p=Object(r.useState)(""),y=Object(o.a)(p,2),N=y[0],S=y[1],k=Object(r.useState)(),C=Object(o.a)(k,2),I=C[0],P=C[1],z=Object(r.useState)(0),F=Object(o.a)(z,2),L=F[0],T=F[1];return Object(r.useEffect)((function(){T(80),console.log(80),u(h).then((function(e){d(e),T(100)}))}),[h]),Object(a.jsxs)(b.Provider,{value:{images:i,imgId:N,setImages:d,setImgId:S,setSearchString:f,setPercent:T},children:[Object(a.jsx)(w.a,{color:"#f11946",progress:L,onLoaderFinished:function(){return T(0)},waitingTime:500}),Object(a.jsx)(g,{setState:n,noti:I}),Object(a.jsx)(x,{setState:n}),Object(a.jsx)(O,{state:s,setState:n,setNoti:P}),Object(a.jsx)(v,{})]})}s(45);c.a.render(Object(a.jsx)(y,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.412be93a.chunk.js.map