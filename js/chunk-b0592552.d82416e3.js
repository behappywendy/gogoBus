(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b0592552"],{1276:function(e,t,n){"use strict";var r=n("2ba4"),c=n("c65b"),i=n("e330"),o=n("d784"),a=n("44e7"),u=n("825a"),s=n("1d80"),l=n("4840"),d=n("8aa5"),f=n("50c4"),p=n("577e"),b=n("dc4a"),v=n("4dae"),g=n("14c3"),h=n("9263"),m=n("9f7f"),k=n("d039"),O=m.UNSUPPORTED_Y,j=4294967295,x=Math.min,B=[].push,w=i(/./.exec),y=i(B),E=i("".slice),C=!k((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=p(s(this)),o=void 0===n?j:n>>>0;if(0===o)return[];if(void 0===e)return[i];if(!a(e))return c(t,i,e,o);var u,l,d,f=[],b=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,m=new RegExp(e.source,b+"g");while(u=c(h,m,i)){if(l=m.lastIndex,l>g&&(y(f,E(i,g,u.index)),u.length>1&&u.index<i.length&&r(B,f,v(u,1)),d=u[0].length,g=l,f.length>=o))break;m.lastIndex===u.index&&m.lastIndex++}return g===i.length?!d&&w(m,"")||y(f,""):y(f,E(i,g)),f.length>o?v(f,0,o):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:c(t,this,e,n)}:t,[function(t,n){var r=s(this),o=void 0==t?void 0:b(t,e);return o?c(o,t,r,n):c(i,p(r),t,n)},function(e,r){var c=u(this),o=p(e),a=n(i,c,o,r,i!==t);if(a.done)return a.value;var s=l(c,RegExp),b=c.unicode,v=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(O?"g":"y"),h=new s(O?"^(?:"+c.source+")":c,v),m=void 0===r?j:r>>>0;if(0===m)return[];if(0===o.length)return null===g(h,o)?[o]:[];var k=0,B=0,w=[];while(B<o.length){h.lastIndex=O?0:B;var C,_=g(h,O?E(o,B):o);if(null===_||(C=x(f(h.lastIndex+(O?B:0)),o.length))===k)B=d(o,B,b);else{if(y(w,E(o,k,B)),w.length===m)return w;for(var N=1;N<=_.length-1;N++)if(y(w,_[N]),w.length===m)return w;B=k=C}}return y(w,E(o,k)),w}]}),!C,O)},"14c3":function(e,t,n){var r=n("da84"),c=n("c65b"),i=n("825a"),o=n("1626"),a=n("c6b6"),u=n("9263"),s=r.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var r=c(n,e,t);return null!==r&&i(r),r}if("RegExp"===a(e))return c(u,e,t);throw s("RegExp#exec called on incompatible receiver")}},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),i=n("b622"),o=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==c(e))}},"5f8e":function(e,t,n){},"63e8":function(e,t,n){},"6fb1":function(e,t,n){"use strict";n("9f06")},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"93ce":function(e,t,n){"use strict";var r=n("7a23");function c(e,t,n,c,i,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("button",{class:"button",onClick:t[0]||(t[0]=function(t){return e.$emit("clickDistanceButton",t)})},[Object(r["renderSlot"])(e.$slots,"default",{},void 0,!0)])}var i={name:"DistanceButton",methods:{},emits:["clickDistanceButton"]},o=(n("9f01"),n("6b0d")),a=n.n(o);const u=a()(i,[["render",c],["__scopeId","data-v-29229326"]]);t["a"]=u},9825:function(e,t,n){"use strict";n("63e8")},"9f01":function(e,t,n){"use strict";n("5f8e")},"9f06":function(e,t,n){},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),c=n("6eeb"),i=n("9263"),o=n("d039"),a=n("b622"),u=n("9112"),s=a("species"),l=RegExp.prototype;e.exports=function(e,t,n,d){var f=a(e),p=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),b=p&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!p||!b||n){var v=r(/./[f]),g=t(f,""[e],(function(e,t,n,c,o){var a=r(e),u=t.exec;return u===i||u===l.exec?p&&!o?{done:!0,value:v(t,n,c)}:{done:!0,value:a(n,t,c)}:{done:!1}}));c(String.prototype,e,g[0]),c(l,f,g[1])}d&&u(l[f],"sham",!0)}},fc39:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c={class:"content"},i={class:"wrap_button"},o=Object(r["createTextVNode"])("800m"),a=Object(r["createTextVNode"])("1000m"),u={key:0,class:"loading"},s={key:1,class:"warp_card"};function l(e,t,n,l,d,f){var p=Object(r["resolveComponent"])("DistanceButton"),b=Object(r["resolveComponent"])("Card");return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",c,[Object(r["createElementVNode"])("div",i,[Object(r["createVNode"])(p,{class:"primary",onClick:f.clickDistanceButton},{default:Object(r["withCtx"])((function(){return[o]})),_:1},8,["onClick"]),Object(r["createVNode"])(p,{class:"primary_light",onClick:f.clickDistanceButton},{default:Object(r["withCtx"])((function(){return[a]})),_:1},8,["onClick"])]),d.isLoading?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",u)):(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",s,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(f.nearbyBusStop,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:t,title:e.stationName,stops:e.busStops},null,8,["title","stops"])})),128))]))])}var d=n("1da1"),f=(n("ac1f"),n("1276"),n("96cf"),n("93ce")),p={class:"bus_list"},b={class:"list_content"};function v(e,t,n,c,i,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",p,[Object(r["createElementVNode"])("h2",null,Object(r["toDisplayString"])(n.title),1),Object(r["createElementVNode"])("div",b,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(n.stops,(function(e,t){return Object(r["openBlock"])(),Object(r["createElementBlock"])("span",{key:t},Object(r["toDisplayString"])(e.RouteName.Zh_tw),1)})),128))])])}var g={name:"Card",props:["title","stops"]},h=(n("9825"),n("6b0d")),m=n.n(h);const k=m()(g,[["render",v],["__scopeId","data-v-b026016e"]]);var O=k,j={components:{DistanceButton:f["a"],Card:O},created:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getCurrentPosition");case 2:return t.next=4,e.$store.dispatch("getNearByBusStop",{latitude:e.latitude,longitude:e.longitude,distance:800});case 4:e.isLoading=!1;case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{isLoading:!0}},computed:{latitude:function(){return this.$store.getters.latitude},longitude:function(){return this.$store.getters.longitude},nearbyBusStop:function(){return this.$store.getters.nearbyBusStop}},methods:{clickDistanceButton:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("getNearByBusStop",{latitude:t.latitude,longitude:t.longitude,distance:e.target.innerHTML.split("m")[0]});case 2:case"end":return n.stop()}}),n)})))()}}};n("6fb1");const x=m()(j,[["render",l],["__scopeId","data-v-5b1dc2a4"]]);t["default"]=x}}]);
//# sourceMappingURL=chunk-b0592552.d82416e3.js.map