(this["webpackJsonp03-nasa-apod"]=this["webpackJsonp03-nasa-apod"]||[]).push([[0],{22:function(e,t,a){e.exports=a(36)},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=(a(27),a(21)),c=(a(16),function(e){var t=e.onActiveStartDateChange,a=e.onChange,n=e.value;return r.a.createElement("div",{className:"App-calendar"},r.a.createElement(o.a,{onChange:a,value:n,onActiveStartDateChange:t}))}),u=(a(17),a(14)),s=a(18),m=function(e){var t=e.title,a=e.url,n=Object(u.a)(e,["title","url"]);return r.a.createElement(s.LazyLoadImage,Object.assign({alt:t,title:t,effect:"blur",src:a,visibleByDefault:!0},n))},d=function(e){var t=e.url;return r.a.createElement("iframe",{src:t,frameBorder:"0",allowFullScreen:!0,allowtransparency:!0})},v=function(e){var t=e.media_type,a=e.title,n=e.url,l=Object(u.a)(e,["media_type","title","url"]);switch(t){case"image":return r.a.createElement(m,Object.assign({title:a,url:n},l));case"video":return r.a.createElement(d,Object.assign({url:n},l))}},g=function(e){var t=e.img,a=e.setModal,n=e.imgArray,l=e.id;return r.a.createElement("div",{className:"item",onClick:function(){return a(n,l)}},r.a.createElement(v,{media_type:t.media_type,title:t.title,url:t.url}),r.a.createElement("p",null,r.a.createElement("b",null,t.title)),r.a.createElement("p",null,t.date))},h=(a(30),function(){return r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"round"}))}),f=function(e){var t=e.imgArray,a=e.setModal,n=e.isLoad,l=t.map((function(e,n){return r.a.createElement(g,{key:n,id:n,imgArray:t,setModal:a,img:e})}));return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(h,null):r.a.createElement("div",{className:"App-all-content"},t?l:""))},p=a(9),w=function(e){var t=e.onClick;return r.a.createElement("div",{className:"modal__cross title","data-title":"Close"},r.a.createElement("div",{onClick:t,className:"area"},r.a.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"}))))},E=function(e){var t=e.onClick;return r.a.createElement("div",{className:"arrow__left title","data-title":"Previous"},r.a.createElement("svg",{onClick:t,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"})))},y=function(e){var t=e.onClick;return r.a.createElement("div",{className:"arrow__right title","data-title":"Next"},r.a.createElement("svg",{onClick:t,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"})))},S=function(e){var t=e.url;return r.a.createElement("div",{className:"modal__download  title","data-title":"Download"},r.a.createElement("a",{href:t,target:"_blank",download:!0},r.a.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"}))))},x=function(e){var t=e.onClick;return r.a.createElement("div",{className:"modal__info title","data-title":"More information"},r.a.createElement("div",{onClick:t,className:"area"},r.a.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),r.a.createElement("path",{d:"M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z"}),r.a.createElement("circle",{cx:"8",cy:"4.5",r:"1"}))))},O=function(e){var t=e.media_type,a=e.explanation;switch(t){case"image":return r.a.createElement("div",{className:"pullUp"},a);case"video":return r.a.createElement("div",{className:"pullDown"},a)}},A=function(e){var t=e.images,a=e.setModal,l=e.movePrev,i=e.moveNext,o=t.viewedImages[t.key],c=Object(n.useState)(!1),u=Object(p.a)(c,2),s=u[0],m=u[1];Object(n.useEffect)((function(){return m(!1)}),[t.isShow]);return r.a.createElement(r.a.Fragment,null,t.isShow&&r.a.createElement("div",{className:"background-modal-image",onClick:function(e){switch(e.target.className){case"background-modal-image":case"modal-content":case"modal-image-content":return a()}},key:t.key},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-image-content"},t.isShowPrev&&r.a.createElement(E,{onClick:function(){return l(t.key,t.viewedImages)}}),t.isShowNext&&r.a.createElement(y,{onClick:function(){return i(t.key,t.viewedImages)}}),r.a.createElement(w,{onClick:a}),r.a.createElement(S,{url:o.hdurl}),r.a.createElement("div",{className:"image-explanation"},r.a.createElement(x,{onClick:function(){return m(!s)}}),s&&r.a.createElement(O,{media_type:o.media_type,explanation:o.explanation}),r.a.createElement(v,{media_type:o.media_type,title:o.title,url:o.url}))),r.a.createElement("p",null,o.title," [ ",o.date," ]"))))},N=function(e){var t=e.title,a=e.date,n=e.explanation;return r.a.createElement("div",{className:"info"},r.a.createElement("span",null,r.a.createElement("b",null,t)),r.a.createElement("p",null,a),r.a.createElement("p",{className:"Explanation"},n))},b=function(e){var t=e.img,a=e.setModal,l=Object(n.useState)(!0),i=Object(p.a)(l,2),o=i[0],c=i[1];return r.a.createElement("div",{className:"App-content"},r.a.createElement("div",{className:"Content-img"},t.isLoad?r.a.createElement(h,null):r.a.createElement(v,{media_type:t.media_type,title:"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044f",url:t.url,onClick:function(){return a([t])},onMouseOver:function(){return c(!1)},onMouseOut:function(){return c(!0)}})),o&&!t.isLoad&&r.a.createElement(N,{title:t.title,date:t.date,explanation:t.explanation}))},I=(a(31),a(3)),M=a(8),k=a(4),j=a.n(k),_=a(6),R=a(2),L=a(5),C=a.n(L),D="SaoJfZRzRAH13d01ZBCtcITtjs6ydPcNhxjK4O7c",z="https://api.nasa.gov/planetary/apod",P=function(){var e=Object(_.a)(j.a.mark((function e(t){var a,n,r,l=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]&&l[1],n="".concat(z,"?date=").concat(T(t),"&api_key=").concat(D,"&hd=").concat(a),e.next=4,q(n);case 4:return r=e.sent,e.abrupt("return",B(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(e){var t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return"".concat(n,"-").concat(a,"-").concat(t)},q=function(e){return fetch(e).then((function(e){return e.json()}))},B=function(e){var t=e.url?e.url:C.a;return{url:e.url?t:C.a,hdurl:e.hdurl?e.hdurl:t,title:e.title?e.title:"\u0414\u0430\u043d\u043d\u044b\u0445 \u043d\u0435\u0442",media_type:e.media_type?e.media_type:"image",date:e.date?e.date:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0434\u0430\u0442\u0430 \u0435\u0449\u0435 \u043d\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u0438\u043b\u0430 \u0438\u043b\u0438 \u043d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",explanation:e.explanation}},G={isLoad:!1,url:C.a,hdurl:C.a,media_type:"image",title:"\u0414\u0430\u043d\u043d\u044b\u0445 \u043d\u0435\u0442",date:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0434\u0430\u0442\u0430 \u0435\u0449\u0435 \u043d\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u0438\u043b\u0430 \u0438\u043b\u0438 \u043d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",explanation:""},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-IMAGE":return Object(R.a)(Object(R.a)({},e),{},{url:t.newImage.url,hdurl:t.newImage.hdurl,media_type:t.newImage.media_type,title:t.newImage.title,date:t.newImage.date,explanation:t.newImage.explanation,isLoad:!e.isLoad});case"SET-LOADING":return Object(R.a)(Object(R.a)({},e),{},{isLoad:!e.isLoad});default:return e}},F={isShow:!1,viewedImages:[{url:C.a,hdurl:C.a,media_type:"image",title:"\u0414\u0430\u043d\u043d\u044b\u0445 \u043d\u0435\u0442",date:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0434\u0430\u0442\u0430 \u0435\u0449\u0435 \u043d\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u0438\u043b\u0430 \u0438\u043b\u0438 \u043d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",explanation:""}],key:0,isShowPrev:!1,isShowNext:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=e.length,n=function(e,t){return{isShowPrev:e,isShowNext:t}};return 1===a?n(!1,!1):t+1===a?n(!0,!1):n(0!==t,!0)},H=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return{type:"SET-MODAL-IMAGE",viewedImages:e,key:n,isShowPrev:t,isShowNext:a}},J=function(e,t,a){return{type:"MOVE-ARRAY",key:e,isShowPrev:t,isShowNext:a}},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-MODAL-IMAGE":return e.isShow?Object(R.a)(Object(R.a)({},e),{},{isShow:!e.isShow}):Object(R.a)(Object(R.a)({},e),{},{isShow:!e.isShow,viewedImages:t.viewedImages,key:t.key,isShowPrev:t.isShowPrev,isShowNext:t.isShowNext});case"MOVE-ARRAY":return Object(R.a)(Object(R.a)({},e),{},{key:t.key,isShowPrev:t.isShowPrev,isShowNext:t.isShowNext});default:return e}},W=0,X={query:0,isLoad:!1,imagesArray:[]},Z=function(e,t){return{type:"SET-ARRAY",imagesArray:e,query:t}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-ARRAY":return e.query===t.query?Object(R.a)(Object(R.a)({},e),{},{query:t.query,imagesArray:t.imagesArray,isLoad:!1}):Object(R.a)(Object(R.a)({},e),{},{isLoad:!0});case"START-LOADING":return Object(R.a)(Object(R.a)({},e),{},{query:t.query>e.query?t.query:e.query,isLoad:!0});default:return e}},$=Object(I.d)(Object(M.b)((function(e){return{image:e.imageReducer,modalImages:e.modalReducer,monthImages:e.monthImageReducer.imagesArray,isLoadMonthImages:e.monthImageReducer.isLoad}}),{setImage:function(e){return function(){var t=Object(_.a)(j.a.mark((function t(a){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:"SET-LOADING"}),t.next=3,P(e);case 3:n=t.sent,a({type:"SET-IMAGE",newImage:n});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setModalImage:function(e){return function(t){var a=V(e,0);t(H(e,a.isShowPrev,a.isShowNext))}},setModalImages:function(e,t){return function(a){var n=V(e,t);a(H(e,n.isShowPrev,n.isShowNext,t))}},setImagesArray:function(e){return function(){var t=Object(_.a)(j.a.mark((function t(a){var n,r,l,i,o;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=++W,a({type:"START-LOADING",query:n}),r=[],l=32-new Date(e.getFullYear(),e.getMonth(),32).getDate(),i=1;case 5:if(!(i<=l)){t.next=15;break}return o=new Date(e.getFullYear(),e.getMonth(),i),t.t0=r,t.next=10,P(o);case 10:t.t1=t.sent,t.t0.push.call(t.t0,t.t1);case 12:i++,t.next=5;break;case 15:a(Z(r.filter((function(e){return e.explanation})),n));case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},movePrev:function(e,t){return function(a){e--;var n=V(t,e);a(J(e,n.isShowPrev,n.isShowNext))}},moveNext:function(e,t){return function(a){e++;var n=V(t,e);a(J(e,n.isShowPrev,n.isShowNext))}}}))((function(e){var t=e.image,a=e.modalImages,l=e.monthImages,i=e.isLoadMonthImages,o=e.setImage,u=e.setModalImage,s=e.setImagesArray,m=e.setModalImages,d=e.movePrev,v=e.moveNext,g=function(){return localStorage.getItem("date")?new Date(localStorage.getItem("date")):new Date};Object(n.useEffect)((function(){o(g()),s(g())}),[]);return r.a.createElement("div",{className:"App-wrapper"},r.a.createElement(c,{onChange:function(e){T(e)===T(new Date)?localStorage.removeItem("date"):localStorage.setItem("date",e),o(e)},onActiveStartDateChange:function(e){var t=e.activeStartDate;e.value,e.view;s(t)},value:g()}),r.a.createElement(b,{img:t,setModal:u}),r.a.createElement(f,{imgArray:l,setModal:m,isLoad:i}),r.a.createElement(A,{images:a,setModal:u,movePrev:d,moveNext:v}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(20),ee=Object(I.c)({imageReducer:Y,modalReducer:U,monthImageReducer:K}),te=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||I.d,ae=Object(I.e)(ee,te(Object(I.a)(Q.a)));window.store=ae;var ne=ae;i.a.render(r.a.createElement(M.a,{store:ne},r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a.p+"static/media/not_found.e9ff6ff5.gif"}},[[22,1,2]]]);
//# sourceMappingURL=main.e5f8bab2.chunk.js.map