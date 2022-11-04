// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";function d(e,t){return n(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(r("0iQ30","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!m(e.limit))?new TypeError(r("0iQ3b","limit",e.limit)):null):new TypeError(r("0iQ2h",t))}function c(e){var t=e.default;if("function"==typeof t){var i=function(){return t.apply(this,arguments)};i.prototype=t.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(i,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),i}var f=c(Object.freeze({__proto__:null,default:()=>()=>{}}))("for-each-async:limit");function p(e,t,i,r){var s,n,o,l,m,d,c;if(m=e.length,f("Collection length: %d",m),0===m)return f("Finished processing a collection."),r();for(l=m<t.limit?m:t.limit,f("Concurrency limit: %d",l),f("Number of arguments: %d",i.length),s=m-1,n=0,d=-1,c=0;c<l;c++)d<s&&p();function p(){f("Collection element %d: %s.",d+=1,JSON.stringify(e[d])),2===i.length?i.call(t.thisArg,e[d],h):3===i.length?i.call(t.thisArg,e[d],d,h):i.call(t.thisArg,e[d],d,e,h)}function h(e){if(!o)return e?(o=!0,f("Encountered an error: %s",e.message),r(e)):(f("Processed %d of %d collection elements.",n+=1,m),d<s?p():n===m?(f("Finished processing a collection."),r()):void 0)}}function h(e,n){var o,l,m;if(o={},arguments.length>1){if(l=d(o,e))throw l;m=n}else m=e;if(!t(m))throw new TypeError(r("0iQ43",m));return o.series?o.limit=1:o.limit||(o.limit=s),c;function c(e,s){if(!i(e))throw new TypeError(r("0iQBO",e));if(!t(s))throw new TypeError(r("0iQ43",s));return p(e,o,m,(function(e){if(e)return s(e);s()}))}}function a(e,t,i,r){if(arguments.length<4)return h(t)(e,i);h(t,i)(e,r)}e(a,"factory",h);export{a as default,h as factory};
//# sourceMappingURL=index.mjs.map
