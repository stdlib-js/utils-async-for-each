// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||f.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function g(t,r){return null!=t&&d.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[m],r=g(t,m);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},j=Boolean.prototype.toString;var _=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===h(t)))}function O(t){return p(t)||w(t)}function E(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",w);var P="object"==typeof self?self:null,A="object"==typeof window?window:null,S="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof S?S:null;var F=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(P)return P;if(A)return A;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),I=F.document&&F.document.childNodes,N=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var R=/^\s*function\s*([^(]*)/i;a(V,"REGEXP",R);var B=Array.isArray?Array.isArray:function(t){return"[object Array]"===h(t)};function C(t){return null!==t&&"object"==typeof t}function G(t){var r,e,n,o;if(("Object"===(e=h(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=R.exec(n.toString()))return r[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!B(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(C));var M="function"==typeof s||"object"==typeof N||"function"==typeof I?function(t){return G(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?G(t).toLowerCase():r};function k(t){return"function"===M(t)}var x=Math.floor;function J(t){return x(t)===t}function L(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&J(t.length)&&t.length>=0&&t.length<=9007199254740991}function q(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var D=Number.POSITIVE_INFINITY;var U,Y=Object.getPrototypeOf;U=k(Object.getPrototypeOf)?Y:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===h(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var z=U;var X=Object.prototype;function H(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!B(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),z(t))}(t),!r||!g(t,"constructor")&&g(r,"constructor")&&k(r.constructor)&&"[object Function]"===h(r.constructor)&&g(r,"isPrototypeOf")&&k(r.isPrototypeOf)&&(r===X||function(t){var r;for(r in t)if(!g(t,r))return!1;return!0}(t)))}function K(t){return"number"==typeof t}var Q=Number,W=Q.prototype.toString;var Z=b();function $(t){return"object"==typeof t&&(t instanceof Q||(Z?function(t){try{return W.call(t),!0}catch(t){return!1}}(t):"[object Number]"===h(t)))}function tt(t){return K(t)||$(t)}a(tt,"isPrimitive",K),a(tt,"isObject",$);var rt=Q.NEGATIVE_INFINITY;function et(t){return t<D&&t>rt&&J(t)}function nt(t){return K(t)&&et(t)}function ot(t){return $(t)&&et(t.valueOf())}function it(t){return nt(t)||ot(t)}function ut(t){return nt(t)&&t>0}function ct(t){return ot(t)&&t.valueOf()>0}function ft(t){return ut(t)||ct(t)}function lt(t,r){return H(r)?(g(r,"thisArg")&&(t.thisArg=r.thisArg),g(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(q("1R92o,GE","series",t.series)):g(r,"limit")&&(t.limit=r.limit,!ut(t.limit))?new TypeError(q("1R93P,Fv","limit",t.limit)):null):new TypeError(q("1R92V,FD",r))}function at(t){if(t.__esModule)return t;var r=t.default;if("function"==typeof r){var e=function t(){if(this instanceof t){var e=[null];e.push.apply(e,arguments);var n=Function.bind.apply(r,e);return new n}return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}a(it,"isPrimitive",nt),a(it,"isObject",ot),a(ft,"isPrimitive",ut),a(ft,"isObject",ct);var st=at(Object.freeze({__proto__:null,default:()=>()=>{}}))("for-each-async:limit");function pt(t,r,e,n){var o,i,u,c,f,l,a;if(f=t.length,st("Collection length: %d",f),0===f)return st("Finished processing a collection."),n();for(c=f<r.limit?f:r.limit,st("Concurrency limit: %d",c),st("Number of arguments: %d",e.length),o=f-1,i=0,l=-1,a=0;a<c;a++)l<o&&s();function s(){st("Collection element %d: %s.",l+=1,JSON.stringify(t[l])),2===e.length?e.call(r.thisArg,t[l],p):3===e.length?e.call(r.thisArg,t[l],l,p):e.call(r.thisArg,t[l],l,t,p)}function p(t){if(!u)return t?(u=!0,st("Encountered an error: %s",t.message),n(t)):(st("Processed %d of %d collection elements.",i+=1,f),l<o?s():i===f?(st("Finished processing a collection."),n()):void 0)}}function yt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=lt(e,t))throw n;o=r}else o=t;if(!k(o))throw new TypeError(q("1R93q,JV",o));return e.series?e.limit=1:e.limit||(e.limit=D),i;function i(t,r){if(!L(t))throw new TypeError(q("1R9Ah,O3",t));if(!k(r))throw new TypeError(q("1R93q,JV",r));return pt(t,e,o,(function(t){if(t)return r(t);r()}))}}function bt(t,r,e,n){if(arguments.length<4)return yt(r)(t,e);yt(r,e)(t,n)}a(bt,"factory",yt);export{bt as default,yt as factory};
//# sourceMappingURL=mod.js.map
