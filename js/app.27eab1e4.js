(function(e){function t(t){for(var a,r,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==c[s]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-21fe0341":"bea6e6ed","chunk-b0592552":"d82416e3","chunk-c606d854":"6115ee34"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-21fe0341":1,"chunk-b0592552":1,"chunk-c606d854":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-21fe0341":"4423f852","chunk-b0592552":"d57f605d","chunk-c606d854":"0f9f2846"}[e]+".css",c=i.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===c))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[e],f.parentNode.removeChild(f),n(o)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var a=c[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=c[e]=[t,n]}));t.push(a[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/gogoBus/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0364":function(e,t,n){},"220c":function(e,t,n){},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"48dd":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHHSURBVHgB7VbdccIwDFa4vjcbNBuUDcoIbIA3gA0KG7ABGYEN0g1oJ0g3aDqBKhdzCMWO5ctP+8B3p4vPluXP+osB7hgYiFhYgb8AHZyTvJJ84RV2fJiMlPNAjWHUk5ARJKwXKiccFYwJOmAZurnHUwsYC2R8zw4ynnXD1veQgBmkIWfjd886n3uEEYk0bDz3rPO5bxgLNu4JObKEMeGrECe8p9QwNvC/9BFGpsR2T9mS5DA1RLka6IFo1bgE3bsbq2/LQnjoFSpnqBLxN0LHKNcwRmgWILGiz4lkIZYK0EPqGmuTbG9AAzz/3lGThBjJEefVLbarbBMjUYgNJXbkBSqTFa9VxjHvIlIxxS1EgIlVg7c/zSqklDMlVWfE25YfbenuDN6Bc58SD8sRlHBeVLd0EaLiMv8Q0H8CPXaQVk0vbNx4NYjhibFdwcAgm2tV+LHdhHQ1ryOxErZNbIMsswP2aNEuoSths9RulmTQGbMemyv228TfeAgESWQdxmxY1uBPRJtkn+wLTi9nX9+eXZZlSY/qC5lQi06B6p2SKTn9xpo+tmk9w/mRHDJsb25f8x8kR/LAGyigJhIgV4iphg5u4I4B8AOBVcMxQDPDMQAAAABJRU5ErkJggg=="},"4c81":function(e,t,n){"use strict";n("e40d")},"55ca":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEVSURBVHgB7ZehDoMwEIZ/lgnkJLJyEolETu4ReLQ9ChKJRCInkTh2zbpsWWi5u5Qty/iSCwlpex/XQgvw7yRQME1TSpeDC8uYJEkPBSIBSmzoUlJkFOlMk46ikciwBNwTnymO4NFS1CQyLDVcFKDktswVnuXmYpNfliR2CCdPlcnh+lRuDJ0A7vOtSf4qUUAj4Eof7MykDFUhVAHuguNQfFvAQCGQIR6ZRiC4eoWo1sBH2AQ2gVkBt+1GxTemrwI54lOCI+D2gDUEjBs7LACPaSRyjkDMPeCdgiPQYT3WHFuH+FhOC+kE/+Yy0BmwhoA95IzwHzAaCNF8CW2S68z9nqKGENWfkYWmwr5S5pGcSt9i4xe5AR94RQEo7xbzAAAAAElFTkSuQmCC"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=Object(a["createElementVNode"])("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),c=Object(a["createElementVNode"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),o=Object(a["createElementVNode"])("link",{href:"https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap",rel:"stylesheet"},null,-1),s=Object(a["createElementVNode"])("link",{rel:"stylesheet",href:"https://pro.fontawesome.com/releases/v5.10.0/css/all.css",integrity:"sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",crossorigin:"anonymous"},null,-1),i={class:"wrap_content"};function u(e,t,n,u,l,d){var f=Object(a["resolveComponent"])("NavbarMobile"),b=Object(a["resolveComponent"])("Navbardesktop"),m=Object(a["resolveComponent"])("ContentNav"),j=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[r,c,o,s,Object(a["createVNode"])(f),Object(a["createVNode"])(b),Object(a["createElementVNode"])("main",null,[Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(m),Object(a["createElementVNode"])("div",null,[Object(a["createVNode"])(j)])])])],64)}n("3e48");var l=n("741b"),d=n.n(l),f=n("48dd"),b=n.n(f),m=n("ccbe"),j=n.n(m),p=n("55ca"),A=n.n(p),g=function(e){return Object(a["pushScopeId"])("data-v-1732288f"),e=e(),Object(a["popScopeId"])(),e},h={class:"nav flex-column"},y=g((function(){return Object(a["createElementVNode"])("a",{class:"nav-link",href:"#"},[Object(a["createElementVNode"])("img",{src:d.a,alt:"公車小圖示"}),Object(a["createElementVNode"])("p",null,"GO GO Bus")],-1)})),v=[y],C=g((function(){return Object(a["createElementVNode"])("img",{src:b.a,alt:"地圖小圖示"},null,-1)})),O=g((function(){return Object(a["createElementVNode"])("img",{src:j.a,alt:"放大鏡小圖示"},null,-1)})),N=g((function(){return Object(a["createElementVNode"])("img",{src:A.a,alt:"最新消息小圖示"},null,-1)}));function k(e,t,n,r,c,o){var s=Object(a["resolveComponent"])("router-link"),i=Object(a["resolveComponent"])("a-switch");return Object(a["openBlock"])(),Object(a["createElementBlock"])("ul",h,[Object(a["createElementVNode"])("li",{onClick:t[0]||(t[0]=function(){return e.clickDarkMode&&e.clickDarkMode.apply(e,arguments)})},v),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(s,{class:"nav-link",href:"#",to:{name:"nearbyStation"}},{default:Object(a["withCtx"])((function(){return[C]})),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(s,{class:"nav-link",href:"#",to:{name:"RoadSearch"}},{default:Object(a["withCtx"])((function(){return[O]})),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(s,{to:{name:"LatestNews"},class:"nav-link"},{default:Object(a["withCtx"])((function(){return[N]})),_:1})]),Object(a["createElementVNode"])("li",null,[Object(a["createVNode"])(i,{checked:r.checked,"onUpdate:checked":t[1]||(t[1]=function(e){return r.checked=e})},null,8,["checked"])])])}var w={name:"Navbardesktop",setup:function(){var e=Object(a["ref"])(!1);function t(){var e=document.querySelector("html");e.classList.toggle("dark")}return Object(a["watch"])(e,(function(){t()})),{checked:e}}},E=(n("84ed"),n("6b0d")),B=n.n(E);const S=B()(w,[["render",k],["__scopeId","data-v-1732288f"]]);var T=S,R=function(e){return Object(a["pushScopeId"])("data-v-d5799b12"),e=e(),Object(a["popScopeId"])(),e},V={class:"navbar navbar-expand-lg navbar_mobile"},x=R((function(){return Object(a["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["createElementVNode"])("i",{class:"fas fa-align-center"})],-1)})),Q={class:"container-fluid"},z=R((function(){return Object(a["createElementVNode"])("a",{href:""},[Object(a["createElementVNode"])("img",{src:d.a,alt:"公車小圖示"}),Object(a["createElementVNode"])("p",null,"GO GO Bus")],-1)})),I={class:"collapse navbar-collapse",id:"navbarSupportedContent"},L={class:"navbar-nav me-auto mb-2 mb-lg-0"},M={class:"nav-item"},U=R((function(){return Object(a["createElementVNode"])("img",{src:b.a,alt:"地圖小圖示"},null,-1)})),P={class:"nav-item"},D=R((function(){return Object(a["createElementVNode"])("img",{src:j.a,alt:"放大鏡小圖示"},null,-1)})),H={class:"nav-item"},Y=R((function(){return Object(a["createElementVNode"])("img",{src:A.a,alt:""},null,-1)}));function J(e,t,n,r,c,o){var s=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createElementBlock"])("nav",V,[x,Object(a["createElementVNode"])("div",Q,[z,Object(a["createElementVNode"])("div",I,[Object(a["createElementVNode"])("ul",L,[Object(a["createElementVNode"])("li",M,[Object(a["createVNode"])(s,{to:{name:"nearbyStation"},"cltouter-linkss":"nav-link active","aria-current":"page",href:"#"},{default:Object(a["withCtx"])((function(){return[U]})),_:1})]),Object(a["createElementVNode"])("li",P,[Object(a["createVNode"])(s,{to:{name:"RoadSearch"}},{default:Object(a["withCtx"])((function(){return[D]})),_:1})]),Object(a["createElementVNode"])("li",H,[Object(a["createVNode"])(s,{to:{name:"LatestNews"},href:"#",tabindex:"-1","aria-disabled":"true"},{default:Object(a["withCtx"])((function(){return[Y]})),_:1})])])])])])}var G={name:"NavbarMobile"};n("87be");const F=B()(G,[["render",J],["__scopeId","data-v-d5799b12"]]);var q=F,X={href:"#"},K=Object(a["createTextVNode"])("|"),W={href:"#"};function Z(e,t,n,r,c,o){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createElementVNode"])("nav",null,[Object(a["createElementVNode"])("a",X,Object(a["toDisplayString"])(e.$route.meta.en),1),K,Object(a["createElementVNode"])("a",W,Object(a["toDisplayString"])(e.$route.meta.title),1)])])}var _={name:"ContentNav",data:function(){return{searchText:""}},methods:{}};n("4c81");const $=B()(_,[["render",Z],["__scopeId","data-v-3d05738b"]]);var ee=$,te={components:{Navbardesktop:T,NavbarMobile:q,ContentNav:ee},data:function(){return{}},created:function(){}};n("7faa");const ne=B()(te,[["render",u]]);var ae=ne,re=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),ce=[{path:"/",name:"nearbyStation",component:function(){return n.e("chunk-b0592552").then(n.bind(null,"fc39"))},meta:{title:"附近站牌",en:"BUS STOP"}},{path:"/RoadSearch",name:"RoadSearch",component:function(){return n.e("chunk-21fe0341").then(n.bind(null,"d529"))},meta:{title:"路線搜尋",en:"ROAD SEARCH"}},{path:"/LatestNews",name:"LatestNews",component:function(){return n.e("chunk-c606d854").then(n.bind(null,"65d5"))},meta:{title:"最新消息",en:"LATEST NEWS"}}],oe=Object(re["a"])({history:Object(re["b"])("/gogoBus/"),routes:ce});oe.beforeEach((function(e){e.meta.title&&(document.title=e.meta.title)}));var se=oe,ie=n("1da1"),ue=(n("96cf"),n("7db0"),n("5502")),le=n("5530"),de=(n("99af"),n("bc3a")),fe=n.n(de),be=n("6c2d"),me=fe.a.create({baseURL:"https://ptx.transportdata.tw/",header:{Accept:"application/json","Content-Type":"application/json"}});function je(){var e="12efae2e62544e008e3edb1edfc82542",t="SLIpweeVUHAwlA3-4jmwbHH0ryg",n=(new Date).toGMTString(),a=new be["a"]("SHA-1","TEXT");a.setHMACKey(t,"TEXT"),a.update("x-date: "+n);var r=a.getHMAC("B64"),c='hmac username="'.concat(e,'", algorithm="hmac-sha1", headers="x-date", signature="').concat(r,'"');return{Authorization:c,"X-Date":n}}me.interceptors.request.use((function(e){return e.headers=Object(le["a"])({Accept:"application/json","Content-Type":"application/json"},je()),e}),(function(e){return Promise.reject(e)}));var pe={getCity:function(e,t){return fe.a.get("https://nominatim.openstreetmap.org/reverse?format=json&lon=".concat(t,"&lat=").concat(e))},getBusNews:function(e){return me.get("MOTC/v2/Bus/News/City/".concat(e,"?%24top=30&%24format=JSON"))},getNearByBusStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:800;return console.log(e,t,n),me.get("MOTC/v2/Bus/Station/NearBy",{params:{$spatialFilter:"nearby(".concat(e,",").concat(t,",").concat(n,")"),$format:"JSON"}})},getCityOfRoute:function(e){return me.get("MOTC/v2/Bus/Route/City/".concat(e,"?%24format=JSON"))},getEstimatedTime:function(e,t){return me.get("MOTC/v2/Bus/EstimatedTimeOfArrival/City/".concat(e,"/").concat(t,"?%24format=JSON"))},realTimeByFrequency:function(e,t){return me.get("https://ptx.transportdata.tw/MOTC/v2/Bus/RealTimeByFrequency/City/".concat(e,"/").concat(t,"?%24format=JSON\n    "))}},Ae=n("7a9d"),ge=Object(ue["a"])({state:{user:"wendy",title:"最新消息",latestNews:[],latitude:0,longitude:0,city:"Taipei",nearbyBusStop:[],cityOfRoute:[],estimatedTime:[],realTimeByFrequency:[]},mutations:{getLatestInfo:function(e,t){e.latestNews=t},updateCurrentPosition:function(e,t){console.log("經緯度");var n=t.latitude,a=t.longitude;e.latitude=n,e.longitude=a},updateLocationCity:function(e,t){e.city=t},updateNearByBusStop:function(e,t){e.nearbyBusStop=t},updateCityOfRoute:function(e,t){e.cityOfRoute=t},updateEstimatedTime:function(e,t){e.estimatedTime=t},updateRealTimeByFrequency:function(e,t){e.realTimeByFrequency=t}},actions:{getCity:function(e){return Object(ie["a"])(regeneratorRuntime.mark((function t(){var n,a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.state,t.next=3,pe.getCity(a.latitude,a.longitude);case 3:r=t.sent,c=Ae.find((function(e){return e.CityName==r.data.address.city})),a.city=null!==(n=c.City)&&void 0!==n?n:"Taipei";case 6:case"end":return t.stop()}}),t)})))()},getCurrentPosition:function(e){return Object(ie["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,new Promise((function(e){navigator.geolocation.getCurrentPosition(function(){var t=Object(ie["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e(n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}));case 3:a=t.sent,n("updateCurrentPosition",{latitude:a.coords.latitude||0,longitude:a.coords.longitude||0});case 5:case"end":return t.stop()}}),t)})))()},getLatestInfoAPI:function(e){return Object(ie["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,a=e.state,console.log(a.city),t.next=4,pe.getBusNews(a.city);case 4:r=t.sent,n("getLatestInfo",r.data);case 6:case"end":return t.stop()}}),t)})))()},getNearByBusStop:function(e,t){return Object(ie["a"])(regeneratorRuntime.mark((function n(){var a,r,c,o,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=t.latitude,c=t.longitude,o=t.distance,n.next=4,pe.getNearByBusStop(r,c,o);case 4:s=n.sent,console.log(s),a("updateNearByBusStop",s.data);case 7:case"end":return n.stop()}}),n)})))()},getCityOfRoute:function(e,t){return Object(ie["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,pe.getCityOfRoute(t);case 3:r=n.sent,console.log("getCityOfRoute",r),a("updateCityOfRoute",r.data);case 6:case"end":return n.stop()}}),n)})))()},getEstimatedTime:function(e,t){return Object(ie["a"])(regeneratorRuntime.mark((function n(){var a,r,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=t.selectedCity,c=t.selectedRoute,n.next=4,pe.getEstimatedTime(r,c);case 4:o=n.sent,a("updateEstimatedTime",o.data);case 6:case"end":return n.stop()}}),n)})))()},getRealTimeByFrequency:function(e,t){return Object(ie["a"])(regeneratorRuntime.mark((function n(){var a,r,c,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,r=t.selectedCity,c=t.selectedRoute,n.next=4,pe.realTimeByFrequency(r,c);case 4:o=n.sent,a("updateRealTimeByFrequency",o.data);case 6:case"end":return n.stop()}}),n)})))()}},getters:{latestNewsData:function(e){return e.latestNews},latitude:function(e){return e.latitude},longitude:function(e){return e.longitude},city:function(e){return e.city},nearbyBusStop:function(e){var t=e.nearbyBusStop.reduce((function(e,t){var n={};return n["stationName"]=t.StationName.Zh_tw,n["busStops"]=t.Stops,e.push(n),e}),[]);return t},cityOfRoute:function(e){return e.cityOfRoute},estimatedTime:function(e){return e.estimatedTime},realTimeByFrequency:function(e){return e.realTimeByFrequency}}}),he=n("2993"),ye=n.n(he),ve=(n("a8ea"),n("160c"));n("202f");Object(a["createApp"])(ae).use(ge).use(se).use(ye.a).use(ve["a"]).mount("#app")},"741b":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAiCAYAAADRcLDBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGxSURBVHgB7Zf/VYMwEMe/6ev/MgIb2E5gO4Ej2E4gTtA6gTqB3UCdoDiBdQK6AThBvJOAaYCQ8vj1Rz/v3WsDl7sjOS4HUIKUckWyJ4llO8TK3gp1kJKvlLvki/3ofoURREQ/PrrnQLIUQiQ8mGoBbCwBsPIDzueJxCu5PiMJSLYnV3kVLEsYoQE1NuNMb6KUF+hnG3Q88ssrkm+HVzdDBXq2o5r7HMTBNQifZI+OmGAEjCIIQXvNy+zjNDGXDnN5C9+08Zrk6DBP31auFwnK3h0HQ1l11fEd5xW45ETGaILgJHzEMLyw/wmdZCH9ucIwSPYvVFY3OqBaYs7bscWwrDiIawzLrbAUpx3JJ8mC5A7NeSf5sNqpaDgCQ+dZNmNr2AnKlJzKtiyWaFdmhh2vTKm0WLGycam26akg0QdZY2tSVTE3xjhAM+71gUyb6QK2xOSE+ia5QZpUTQmRJnilHVsQvTGaAyzEsORnR9bi9Q2/LfO/b1GZfi2/GgpHtLtKCxQfdE2v7W5qmRSSwhotQQ+6Q8Vq2xLzB93zX7xUOd1rlTSSjt2zK6r0R5qPvPX/BQj4kP+wjxzYAAAAAElFTkSuQmCC"},"7a9d":function(e){e.exports=JSON.parse('[{"CityName":"臺北市","City":"Taipei"},{"CityName":"新北市","City":"NewTaipei"},{"CityName":"桃園市","City":"Taoyuan"},{"CityName":"臺中市","City":"Taichung"},{"CityName":"臺南市","City":"Tainan"},{"CityName":"高雄市","City":"Kaohsiung"},{"CityName":"新竹市","City":"Hsinchu"},{"CityName":"新竹縣","City":"HsinchuCounty"},{"CityName":"苗栗縣","City":"MiaoliCounty"},{"CityName":"彰化縣","City":"ChanghuaCounty"},{"CityName":"南投縣","City":"NantouCounty"},{"CityName":"雲林縣","City":"YunlinCounty"},{"CityName":"嘉義縣","City":"ChiayiCounty"},{"CityName":"嘉義市","City":"Chiayi"},{"CityName":"屏東縣","City":"PingtungCounty"},{"CityName":"宜蘭縣","City":"YilanCounty"},{"CityName":"花蓮縣","City":"HualienCounty"},{"CityName":"臺東縣","City":"TaitungCounty"},{"CityName":"金門縣","City":"KinmenCounty"},{"CityName":"澎湖縣","City":"PenghuCounty"}]')},"7faa":function(e,t,n){"use strict";n("9510")},"84ed":function(e,t,n){"use strict";n("220c")},"87be":function(e,t,n){"use strict";n("0364")},9510:function(e,t,n){},ccbe:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF/SURBVHgBvVaLcYMwDJUzgTcoI7BBPUJHYINkg9AJ2g2SDTpC6AQkEzgbkA1UEcSdI/AHnPTdvQNsyc+SbRkFCUDEgh7Gabr2VEpd4RkgAU3cEzv0oyVWkAMaYBsRkbBEExtXzQgd6FGJ5oZ4IZ6JmlgQ34mlsKsptZ+QGNGXmPGB18tnbzgqF7sUoa1wqiARZFsLXxMyLsQaxWc3HePb8T+FDI9u6mAFcNi9NhqdMCpgJcj3IzhpaiyTwk8T085ydLJ/A8M2HvELGaBtf4OhuvTQMku9mHa+b5CPi69jA8+HhoCYG00B+Xhz3h8zxYs6ooUM8HkdYWX/hhe14e8SEwpqAMZ5b8Azo13u9ueobPS8zpz+PSwA+5+DB1o4GHxEkiBH5Ap1mFKFcFq9LXqqP4Zv8rTMzAiOsz3hcL/1bD02qwTlYsfwwz71KkEW7av4EedTZXG4w0wkM4s22zjIvbAydcQ2X3Dh5CaCryjEd1Blqunh/mkpeDU4whr+G389qBQN18GHnAAAAABJRU5ErkJggg=="},e40d:function(e,t,n){}});
//# sourceMappingURL=app.27eab1e4.js.map