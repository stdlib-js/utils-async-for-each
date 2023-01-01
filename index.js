// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).forEachAsync=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function m(t,r){return null!=t&&g.call(t,r)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[d],r=m(t,d);try{t[d]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[d]=e:delete t[d],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=b();function O(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function w(t){return p(t)||O(t)}function E(){return new Function("return this;")()}a(w,"isPrimitive",p),a(w,"isObject",O);var P="object"==typeof self?self:null,T="object"==typeof window?window:null,A="object"==typeof global?global:null;var S=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),I=S.document&&S.document.childNodes,N=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",F);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function Q(t){return null!==t&&"object"==typeof t}function V(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=F.exec(n.toString()))return r[1]}return Q(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(Q,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Q));var x="function"==typeof s||"object"==typeof N||"function"==typeof I?function(t){return V(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?V(t).toLowerCase():r};function k(t){return"function"===x(t)}var G=Math.floor;function M(t){return G(t)===t}function L(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=9007199254740991}function R(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var U=Number.POSITIVE_INFINITY;var Y,z=Object.getPrototypeOf;Y=k(Object.getPrototypeOf)?z:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var D=Y;var J=Object.prototype;function X(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!C(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),D(t))}(t),!r||!m(t,"constructor")&&m(r,"constructor")&&k(r.constructor)&&"[object Function]"===h(r.constructor)&&m(r,"isPrototypeOf")&&k(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!m(t,r))return!1;return!0}(t)))}function q(t){return"number"==typeof t}var H=Number,K=H.prototype.toString;var W=b();function Z(t){return"object"==typeof t&&(t instanceof H||(W?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function $(t){return q(t)||Z(t)}a($,"isPrimitive",q),a($,"isObject",Z);var tt=H.NEGATIVE_INFINITY;function rt(t){return t<U&&t>tt&&M(t)}function et(t){return q(t)&&rt(t)}function nt(t){return Z(t)&&rt(t.valueOf())}function ot(t){return et(t)||nt(t)}function it(t){return et(t)&&t>0}function ut(t){return nt(t)&&t.valueOf()>0}function ct(t){return it(t)||ut(t)}function ft(t,r){return X(r)?(m(r,"thisArg")&&(t.thisArg=r.thisArg),m(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(R("0iQ30","series",t.series)):m(r,"limit")&&(t.limit=r.limit,!it(t.limit))?new TypeError(R("0iQ3b","limit",t.limit)):null):new TypeError(R("0iQ2h",r))}function lt(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}a(ot,"isPrimitive",et),a(ot,"isObject",nt),a(ct,"isPrimitive",it),a(ct,"isObject",ut);var at=lt(Object.freeze({__proto__:null,default:()=>()=>{}}))("for-each-async:limit");function st(t,r,e,n){var o,i,u,c,f,l,a;if(f=t.length,at("Collection length: %d",f),0===f)return at("Finished processing a collection."),n();for(c=f<r.limit?f:r.limit,at("Concurrency limit: %d",c),at("Number of arguments: %d",e.length),o=f-1,i=0,l=-1,a=0;a<c;a++)l<o&&s();function s(){at("Collection element %d: %s.",l+=1,JSON.stringify(t[l])),2===e.length?e.call(r.thisArg,t[l],p):3===e.length?e.call(r.thisArg,t[l],l,p):e.call(r.thisArg,t[l],l,t,p)}function p(t){if(!u)return t?(u=!0,at("Encountered an error: %s",t.message),n(t)):(at("Processed %d of %d collection elements.",i+=1,f),l<o?s():i===f?(at("Finished processing a collection."),n()):void 0)}}function pt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=ft(e,t))throw n;o=r}else o=t;if(!k(o))throw new TypeError(R("0iQ43",o));return e.series?e.limit=1:e.limit||(e.limit=U),i;function i(t,r){if(!L(t))throw new TypeError(R("0iQBO",t));if(!k(r))throw new TypeError(R("0iQ43",r));return st(t,e,o,(function(t){if(t)return r(t);r()}))}}function yt(t,r,e,n){if(arguments.length<4)return pt(r)(t,e);pt(r,e)(t,n)}return a(yt,"factory",pt),yt}));
//# sourceMappingURL=index.js.map
