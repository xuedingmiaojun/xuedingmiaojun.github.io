(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{117:function(e,t,n){},216:function(e,t,n){"use strict";var r=n(117);n.n(r).a},325:function(e,t,n){"use strict";n.r(t);let r=n(72);var o={components:{},data:()=>({loading:1,news:[]}),computed:{},mounted(){this.getNews()},methods:{jump(e){window.open("https://www.oschina.net/p/"+e)},getNews(){let e=this;r.get("https://tiaocaoer.com:18884/get_opensource_software_web").then(t=>{let n=t.data.data;e.news=n,e.loading=0}).catch(function(e){console.log(e)})}},watch:{}},s=(n(216),n(2)),i=Object(s.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"zynews"},[n("section",{staticClass:"main-content"},[n("div",{staticClass:"blog-content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading"},[e._v("\n        加载中 ^_^\n        "),n("i",{staticClass:"fa fa-spinner fa-spin"})]),e._v(" "),e._l(e.news,function(t){return n("div",{staticClass:"news-content",attrs:{news_info:t}},[n("div",{staticClass:"title",on:{click:function(n){return e.jump(t.ident)}}},[n("span",{staticClass:"name"},[e._v(e._s(t.name))]),e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),n("div",{staticClass:"desc"},[e._v(e._s(t.desc))])])})],2)])])},[],!1,null,"ae5cb132",null);t.default=i.exports},72:function(e,t,n){var r=new(n(73));e.exports=r},73:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports={type:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isObject:function(e,t){return t?"object"===this.type(e):e&&"object"===(void 0===e?"undefined":r(e))},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},trim:function(e){return e.replace(/(^\s*)|(\s*$)/g,"")},encode:function(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")},formatParams:function(e){var t="",n=!0,r=this;if(!this.isObject(e))return e;return function e(o,s){var i=r.encode,a=r.type(o);if("array"==a)o.forEach(function(t,n){r.isObject(t)||(n=""),e(t,s+"%5B"+n+"%5D")});else if("object"==a)for(var c in o)e(o[c],s?s+"%5B"+i(c)+"%5D":i(c));else n||(t+="&"),n=!1,t+=s+"="+i(o)}(e,""),t},merge:function(e,t){for(var n in t)e.hasOwnProperty(n)?this.isObject(t[n],1)&&this.isObject(e[n],1)&&this.merge(e[n],t[n]):e[n]=t[n];return e}}},,function(e,t,n){var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=n(0),s="undefined"!=typeof document,i=function(){function e(t){function n(e){var t=void 0,n=void 0;function r(){e.p=t=n=null}o.merge(e,{lock:function(){t||(e.p=new Promise(function(e,r){t=e,n=r}))},unlock:function(){t&&(t(),r())},clear:function(){n&&(n("cancel"),r())}})}!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.engine=t||XMLHttpRequest,this.default=this;var r=this.interceptors={response:{use:function(e,t){this.handler=e,this.onerror=t}},request:{use:function(e){this.handler=e}}},s=r.request;n(r.response),n(s),this.config={method:"GET",baseURL:"",headers:{},timeout:0,params:{},parseJson:!0,withCredentials:!1}}return r(e,[{key:"request",value:function(e,t,n){var r=this,i=new this.engine,a="Content-Type",c=a.toLowerCase(),u=this.interceptors,f=u.request,l=u.response,p=f.handler,d=new Promise(function(u,d){function h(e){return e&&e.then&&e.catch}function m(e,t){e?e.then(function(){t()}):t()}o.isObject(e)&&(e=(n=e).url),(n=n||{}).headers=n.headers||{},m(f.p,function(){o.merge(n,JSON.parse(JSON.stringify(r.config)));var v=n.headers;v[a]=v[a]||v[c]||"",delete v[c],n.body=t||n.body,e=o.trim(e||""),n.method=n.method.toUpperCase(),n.url=e;var g=n;p&&(g=p.call(f,n,Promise)||n),h(g)||(g=Promise.resolve(g)),g.then(function(r){r===n?function(n){t=n.body,e=o.trim(n.url);var r=o.trim(n.baseURL||"");if(e||!s||r||(e=location.href),0!==e.indexOf("http")){var f="/"===e[0];if(!r&&s){var p=location.pathname.split("/");p.pop(),r=location.protocol+"//"+location.host+(f?"":p.join("/"))}if("/"!==r[r.length-1]&&(r+="/"),e=r+(f?e.substr(1):e),s){var v=document.createElement("a");v.href=e,e=v.href}}var g=o.trim(n.responseType||""),y=-1!==["GET","HEAD","DELETE","OPTION"].indexOf(n.method),w=o.type(t),b=n.params||{};y&&"object"===w&&(b=o.merge(t,b));var O=[];(b=o.formatParams(b))&&O.push(b),y&&t&&"string"===w&&O.push(t),O.length>0&&(e+=(-1===e.indexOf("?")?"?":"&")+O.join("&")),i.open(n.method,e);try{i.withCredentials=!!n.withCredentials,i.timeout=n.timeout||0,"stream"!==g&&(i.responseType=g)}catch(e){}var j=n.headers[a]||n.headers[c],_="application/x-www-form-urlencoded";for(var x in o.trim((j||"").toLowerCase())===_?t=o.formatParams(t):o.isFormData(t)||-1===["object","array"].indexOf(o.type(t))||(_="application/json;charset=utf-8",t=JSON.stringify(t)),j||y||(n.headers[a]=_),n.headers)if(x===a&&o.isFormData(t))delete n.headers[x];else try{i.setRequestHeader(x,n.headers[x])}catch(e){}function C(e,t,r){m(l.p,function(){if(e){r&&(t.request=n);var o=e.call(l,t,Promise);t=void 0===o?t:o}h(t)||(t=Promise[0===r?"resolve":"reject"](t)),t.then(function(e){u(e)}).catch(function(e){d(e)})})}function P(e){e.engine=i,C(l.onerror,e,-1)}function E(e,t){this.message=e,this.status=t}i.onload=function(){try{var e=i.response||i.responseText;e&&n.parseJson&&-1!==(i.getResponseHeader(a)||"").indexOf("json")&&!o.isObject(e)&&(e=JSON.parse(e));var t=i.responseHeaders;if(!t){t={};var r=(i.getAllResponseHeaders()||"").split("\r\n");r.pop(),r.forEach(function(e){if(e){var n=e.split(":")[0];t[n]=i.getResponseHeader(n)}})}var s=i.status,c=i.statusText,u={data:e,headers:t,status:s,statusText:c};if(o.merge(u,i._response),s>=200&&s<300||304===s)u.engine=i,u.request=n,C(l.handler,u,0);else{var f=new E(c,s);f.response=u,P(f)}}catch(f){P(new E(f.msg,i.status))}},i.onerror=function(e){P(new E(e.msg||"Network Error",0))},i.ontimeout=function(){P(new E("timeout [ "+i.timeout+"ms ]",1))},i._options=n,setTimeout(function(){i.send(y?null:t)},0)}(r):u(r)},function(e){d(e)})})});return d.engine=i,d}},{key:"all",value:function(e){return Promise.all(e)}},{key:"spread",value:function(e){return function(t){return e.apply(null,t)}}}]),e}();i.default=i,["get","post","put","patch","head","delete"].forEach(function(e){i.prototype[e]=function(t,n,r){return this.request(t,n,o.merge({method:e},r))}}),["lock","unlock","clear"].forEach(function(e){i.prototype[e]=function(){this.interceptors.request[e]()}}),e.exports=i}])},e.exports=r()}}]);