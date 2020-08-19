(this["webpackJsonp03-nasa-apod"]=this["webpackJsonp03-nasa-apod"]||[]).push([[0],{14:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),l=a.n(c),o=(a(19),a(13)),i=a(3),u=a.n(i),s=a(6),m=a(2),g=a(12),d=(a(10),function(e){var t=e.onActiveStartDateChange,a=e.onChange,n=e.value;return r.a.createElement("div",{className:"App-calendar"},r.a.createElement(g.a,{onChange:a,value:n,onActiveStartDateChange:t}))}),f=function(e){var t=e.img,a=e.setBigImage;return r.a.createElement("div",{className:"item",onClick:function(){return a(t)}},r.a.createElement("img",{src:t.url,alt:t.title,title:t.title}),r.a.createElement("p",null," ",r.a.createElement("b",null,t.title)),r.a.createElement("p",null,t.date))},p=(a(23),function(){return r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"round"}))}),v=function(e){var t=e.imgArray,a=e.setBigImage,n=t.filter((function(e){return e.title})).map((function(e,t){return r.a.createElement(f,{key:t,setBigImage:a,img:e})}));return r.a.createElement(r.a.Fragment,null,0===t.length?r.a.createElement(p,null):r.a.createElement("div",{className:"App-all-content"},t?n:""))},h=function(e){var t=e.src,a=e.isModal,n=e.setBigImage;if(a){return r.a.createElement("div",{className:"background-big-image",key:t,onClick:function(e){"background-big-image"===e.target.className&&n()}},r.a.createElement("svg",{onClick:n,className:"modal__cross",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},r.a.createElement("path",{d:"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"})),r.a.createElement("div",{className:"big-image"},r.a.createElement("img",{src:t.hdurl,alt:""}),r.a.createElement("p",null,t.title," [ ",t.date," ]"),r.a.createElement("a",{href:t.hdurl,target:"_blank",download:!0},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0444\u0430\u0439\u043b")))}return r.a.createElement(r.a.Fragment,null)},E=function(e){var t=e.title,a=e.date,n=e.explanation;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("b",null,t)),r.a.createElement("p",null,a),r.a.createElement("p",{className:"Explanation"},n))},b=function(e){var t=e.img,a=e.setBigImage,c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],i=l[1];return r.a.createElement("div",{className:"App-content"},r.a.createElement("div",{className:"Content-img"},null===t.hdurl?r.a.createElement(p,null):r.a.createElement("img",{onClick:function(){return a(t)},onMouseOver:function(){return i(!0)},onMouseOut:function(){return i(!1)},src:t.hdurl,alt:t.title,title:t.title?"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0434\u043b\u044f \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044f":""})),!o&&null!==t.hdurl&&r.a.createElement(E,{title:t.title?t.title:"\u0414\u0430\u043d\u043d\u044b\u0445 \u043d\u0435\u0442",date:t.date?t.date:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0434\u0430\u0442\u0430 \u0435\u0449\u0435 \u043d\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u0438\u043b\u0430 \u0438\u043b\u0438 \u043d\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",explanation:t.explanation?t.explanation:""}))},w=a(7),x=a.n(w),k="SaoJfZRzRAH13d01ZBCtcITtjs6ydPcNhxjK4O7c",j="https://api.nasa.gov/planetary/apod",O=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="".concat(j,"?date=").concat(e,"&api_key=").concat(k,"&hd=").concat(t);return fetch(a).then((function(e){return e.json()}))},S=(a(24),function(){var e={url:null,hdurl:null,title:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",date:"",explanation:""},t=Object(n.useState)(e),a=Object(m.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)([]),g=Object(m.a)(i,2),f=g[0],p=g[1],E=Object(n.useState)(!1),w=Object(m.a)(E,2),k=w[0],j=w[1],S=Object(n.useState)(e),I=Object(m.a)(S,2),N=I[0],y=I[1],B=function(){j(!k)},C=function(){return localStorage.getItem("date")?new Date(localStorage.getItem("date")):new Date};Object(n.useEffect)((function(){D(C()),A()}),[]);var D=function(){var e=Object(s.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,F(t);case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(u.a.mark((function e(){var t,a,n,r,c,l=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l.length>0&&void 0!==l[0]?l[0]:new Date,a=32-new Date(t.getFullYear(),t.getMonth(),32).getDate(),n=[],r=1;case 4:if(!(r<=a)){e.next=14;break}return c=new Date(t.getFullYear(),t.getMonth(),r),e.t0=n,e.next=9,F(c);case 9:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 11:r++,e.next=4;break;case 14:return Promise.all(n).then((function(e){return p(e)})),e.abrupt("return",n);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){var t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return"".concat(n,"-").concat(a,"-").concat(t)},F=function(){var e=Object(s.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(M(t));case 2:return a=e.sent,n=a.url?a.hdurl:x.a,e.abrupt("return",{url:a.hdurl?n:x.a,hdurl:a.hdurl?a.hdurl:x.a,title:a.title,date:a.date,explanation:a.explanation});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){return y(e),B()};return r.a.createElement("div",{className:"App-wrapper"},r.a.createElement(d,{onChange:function(t){l(e),M(t)===M(new Date)?localStorage.removeItem("date"):localStorage.setItem("date",t),D(t)},onActiveStartDateChange:function(e){var t=e.activeStartDate;e.value,e.view;p([]),console.log(t),A(t)},value:C()}),r.a.createElement(b,{img:c,setBigImage:_}),r.a.createElement(v,{imgArray:Object(o.a)(f),setBigImage:_}),r.a.createElement(h,{src:N,isModal:k,setBigImage:B}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a.p+"static/media/not_found.e9ff6ff5.gif"}},[[14,1,2]]]);
//# sourceMappingURL=main.55685f6e.chunk.js.map