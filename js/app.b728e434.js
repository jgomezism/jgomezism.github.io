(function(i){function t(t){for(var n,d,s=t[0],r=t[1],o=t[2],c=0,l=[];c<s.length;c++)d=s[c],v[d]&&l.push(v[d][0]),v[d]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i[n]=r[n]);u&&u(t);while(l.length)l.shift()();return a.push.apply(a,o||[]),e()}function e(){for(var i,t=0;t<a.length;t++){for(var e=a[t],n=!0,d=1;d<e.length;d++){var s=e[d];0!==v[s]&&(n=!1)}n&&(a.splice(t--,1),i=r(r.s=e[0]))}return i}var n={},d={app:0},v={app:0},a=[];function s(i){return r.p+"js/"+({us:"us"}[i]||i)+"."+{"chunk-2d0b2ece":"2be2fb4b","chunk-2d210c47":"39c317bd","chunk-2d230643":"f66fe31c","chunk-4525ae00":"1f8b1dc8",us:"69a1a2f4"}[i]+".js"}function r(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(i){var t=[],e={"chunk-4525ae00":1};d[i]?t.push(d[i]):0!==d[i]&&e[i]&&t.push(d[i]=new Promise(function(t,e){for(var n="css/"+({us:"us"}[i]||i)+"."+{"chunk-2d0b2ece":"31d6cfe0","chunk-2d210c47":"31d6cfe0","chunk-2d230643":"31d6cfe0","chunk-4525ae00":"f368381f",us:"31d6cfe0"}[i]+".css",v=r.p+n,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var o=a[s],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===n||c===v))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){o=l[s],c=o.getAttribute("data-href");if(c===n||c===v)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var n=t&&t.target&&t.target.src||v,a=new Error("Loading CSS chunk "+i+" failed.\n("+n+")");a.request=n,delete d[i],u.parentNode.removeChild(u),e(a)},u.href=v;var f=document.getElementsByTagName("head")[0];f.appendChild(u)}).then(function(){d[i]=0}));var n=v[i];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,e){n=v[i]=[t,e]});t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=s(i),o=function(t){c.onerror=c.onload=null,clearTimeout(l);var e=v[i];if(0!==e){if(e){var n=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src,a=new Error("Loading chunk "+i+" failed.\n("+n+": "+d+")");a.type=n,a.request=d,e[1](a)}v[i]=void 0}};var l=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},r.m=i,r.c=n,r.d=function(i,t,e){r.o(i,t)||Object.defineProperty(i,t,{enumerable:!0,get:e})},r.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},r.t=function(i,t){if(1&t&&(i=r(i)),8&t)return i;if(4&t&&"object"===typeof i&&i&&i.__esModule)return i;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:i}),2&t&&"string"!=typeof i)for(var n in i)r.d(e,n,function(t){return i[t]}.bind(null,n));return e},r.n=function(i){var t=i&&i.__esModule?function(){return i["default"]}:function(){return i};return r.d(t,"a",t),t},r.o=function(i,t){return Object.prototype.hasOwnProperty.call(i,t)},r.p="/",r.oe=function(i){throw console.error(i),i};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;a.push([0,"chunk-vendors"]),e()})({0:function(i,t,e){i.exports=e("56d7")},"21bb":function(i,t,e){"use strict";var n=e("bcc9"),d=e.n(n);d.a},"56d7":function(i,t,e){"use strict";e.r(t);var n=e("2b0e"),d=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{attrs:{id:"navbar"}},[n("router-link",{attrs:{to:"/",id:"home-logo"}},[n("img",{attrs:{src:e("80bd"),alt:"iso"}})]),n("div",{class:{active:i.displayMenu},attrs:{id:"menuicon"},on:{click:function(t){i.displayMenu=!i.displayMenu}}},[n("div",{staticClass:"bar",attrs:{id:"bar1"}}),n("div",{staticClass:"bar",attrs:{id:"bar2"}}),n("div",{staticClass:"bar",attrs:{id:"bar3"}})])],1),i.displayMenu?n("nav",{attrs:{id:"menu"},on:{click:function(t){i.displayMenu=!i.displayMenu}}},[n("div",{staticClass:"links-container"},[n("ul",{staticClass:"links"},[n("li",[n("router-link",{attrs:{to:"/"}},[i._v("Home")])],1),n("li",[n("router-link",{attrs:{to:"/services"}},[i._v("Services")])],1),n("li",[n("router-link",{attrs:{to:"/cases"}},[i._v("Use Cases")])],1),n("li",[n("router-link",{attrs:{to:"/docs"}},[i._v("Documents")])],1),n("li",[n("router-link",{attrs:{to:"/us"}},[i._v("Our Team")])],1),n("li",[n("router-link",{attrs:{to:"/contact"}},[i._v("Contact")])],1)])]),n("div",{staticClass:"actions-container"},[n("ul",{staticClass:"actions"},[n("li",[n("router-link",{attrs:{id:"demobtn",to:"/contact"}},[i._v("Request a Demo")])],1),n("li",[n("router-link",{attrs:{id:"contactbtn",to:"/contact"}},[i._v("Contact Us")])],1)])])]):i._e(),n("transition",{attrs:{name:"router-anim"}},[n("router-view")],1)],1)},v=[],a={data:function(){return{displayMenu:!1}},computed:{}},s=a,r=(e("5c0b"),e("2877")),o=Object(r["a"])(s,d,v,!1,null,null,null),c=o.exports,l=e("8c4f"),u=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{attrs:{id:"home"}},[n("header",{attrs:{id:"main-banner"}},[n("div",{staticClass:"video-container",class:{skipped:i.skipped}},[n("video",{attrs:{muted:"",autoplay:"",id:"main-video"},domProps:{muted:!0}},[n("source",{attrs:{src:e("abb1"),type:"video/mp4"}}),i._v("\n                Your browser does not support HTML5 video.\n            ")]),n("div",{staticClass:"btn bottom",on:{click:i.skip}},[i._v("Continue")])]),n("div",{class:{transition1:i.transition1},attrs:{id:"title"}},[i._m(0),n("p",[i._v("FEATURES:")]),i._m(1),n("p",{staticClass:"definition"},[i._v("The next generation platform built for first responders")]),n("div",{staticClass:"btn",on:{click:i.greet}},[i._v("GET STARTED")])]),n("AnimatedContainer"),i.displayContent?n("div",{attrs:{id:"main-content"}},[i._m(2),i._m(3),n("div",{attrs:{id:"text"}},[i._v("\n                Join us and bring your team to the next level\n            ")]),n("div",{staticClass:"actions-container"},[n("router-link",{attrs:{id:"demobtn",to:"/contact"}},[i._v("Request a Demo")]),n("router-link",{attrs:{id:"contactbtn",to:"/services"}},[i._v("Learn More")])],1)]):i._e()],1)])},f=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("h1",[i._v("Intelligent "),e("span",[i._v("Social Media")])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("h2",[i._v("OP"),e("span",[i._v("NET")])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("h2",[i._v("OP"),e("span",[i._v("NET")])])},function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{attrs:{id:"services"}},[e("div",{staticClass:"service"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-users fa-2x"})]),e("div",{staticClass:"title"},[i._v("Groups and Communities")]),e("div",{staticClass:"description"},[i._v("Shared interests, incident management, circles of excellence, general preparedness")])]),e("div",{staticClass:"service"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-file-alt fa-2x"})]),e("div",{staticClass:"title"},[i._v("Secure Document Sharing")]),e("div",{staticClass:"description"},[i._v("Handle plans, schemetics, images, procedures, videos, and more")])]),e("div",{staticClass:"service"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-stopwatch fa-2x"})]),e("div",{staticClass:"title"},[i._v("Real-Time Collaboration")]),e("div",{staticClass:"description"},[i._v("Whether it is for operational readiness, incident response, sharing or group communication")])]),e("div",{staticClass:"service"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-comments fa-2x"})]),e("div",{staticClass:"title"},[i._v("Chat and Video Chat")]),e("div",{staticClass:"description"},[i._v("Through your desktop, pad or mobile, stay connected")])]),e("div",{staticClass:"service"},[e("div",{staticClass:"icon"},[e("i",{staticClass:"fas fa-book fa-2x"})]),e("div",{staticClass:"title"},[i._v("Dedicated Documentation")]),e("div",{staticClass:"description"},[i._v("Simplle search and assignable levels of permission-based access")])])])}],p=(e("ac6a"),function(){var i=this,t=i.$createElement;i._self._c;return i._m(0)}),m=[function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{attrs:{id:"animated-container"}},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])}],h={},b=Object(r["a"])(h,p,m,!1,null,null,null),_=b.exports,C={data:function(){return{transition1:!1,displayContent:!1,skipped:!1}},components:{AnimatedContainer:_},mounted:function(){var i=document.getElementById("animated-container");i.querySelectorAll("div").forEach(function(i){i.style.transitionDuration=Math.random()+.5+"s"})},methods:{skip:function(){this.skipped=!0},greet:function(){var i=document.getElementById("animated-container");i.querySelectorAll("div").forEach(function(i){i.className="transition-1"}),this.transition1=!0,this.displayContent=!0}}},g=C,y=(e("21bb"),Object(r["a"])(g,u,f,!1,null,null,null)),k=y.exports;n["a"].use(l["a"]);var E=new l["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:k},{path:"/us",name:"us",component:function(){return e.e("us").then(e.bind(null,"9de5"))}},{path:"/services",name:"services",component:function(){return e.e("chunk-4525ae00").then(e.bind(null,"f23e"))}},{path:"/contact",name:"contact",component:function(){return e.e("chunk-2d210c47").then(e.bind(null,"b8fa"))}},{path:"/cases",name:"cases",component:function(){return e.e("chunk-2d0b2ece").then(e.bind(null,"25d9"))}},{path:"/docs",name:"docs",component:function(){return e.e("chunk-2d230643").then(e.bind(null,"eba1"))}}]});n["a"].config.productionTip=!1,n["a"].directive("vpshow",{inViewport:function(i){var t=i.getBoundingClientRect();return!(t.bottom<0||t.right<0||t.left>window.innerWidth||t.top>window.innerHeight)},bind:function(i,t){i.classList.add("before-enter"),i.$onScroll=function(){t.def.inViewport(i)&&(i.classList.add("enter"),i.classList.remove("before-enter"),t.def.unbind(i,t))},document.addEventListener("scroll",i.$onScroll)},inserted:function(i){i.$onScroll()},unbind:function(i){document.removeEventListener("scroll",i.$onScroll),delete i.$onScroll}}),new n["a"]({router:E,render:function(i){return i(c)}}).$mount("#app")},"5c0b":function(i,t,e){"use strict";var n=e("5e27"),d=e.n(n);d.a},"5e27":function(i,t,e){},"80bd":function(i,t,e){i.exports=e.p+"img/iso.ca8bbb43.svg"},abb1:function(i,t,e){i.exports=e.p+"media/vid1.940c129e.mp4"},bcc9:function(i,t,e){}});
//# sourceMappingURL=app.b728e434.js.map