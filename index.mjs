// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import{isPrimitive as c}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";function m(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var r=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}var d=m(Object.freeze({__proto__:null,default:()=>()=>{}}))("for-each-async:limit");function f(e,m){var f,p,h;if(f={},arguments.length>1){if(p=function(e,t){return n(t)?(o(t,"thisArg")&&(e.thisArg=t.thisArg),o(t,"series")&&(e.series=t.series,!l(e.series))?new TypeError(i("1R92o","series",e.series)):o(t,"limit")&&(e.limit=t.limit,!c(e.limit))?new TypeError(i("1R93P","limit",e.limit)):null):new TypeError(i("1R92V",t))}(f,e),p)throw p;h=m}else h=e;if(!t(h))throw new TypeError(i("1R93q",h));return f.series?f.limit=1:f.limit||(f.limit=s),function(e,s){if(!r(e))throw new TypeError(i("1R9Ah",e));if(!t(s))throw new TypeError(i("1R93q",s));return function(e,t,r,i){var s,n,o,l,c,m,f;if(c=e.length,d("Collection length: %d",c),0===c)return d("Finished processing a collection."),i();for(l=c<t.limit?c:t.limit,d("Concurrency limit: %d",l),d("Number of arguments: %d",r.length),s=c-1,n=0,m=-1,f=0;f<l;f++)m<s&&p();function p(){d("Collection element %d: %s.",m+=1,JSON.stringify(e[m])),2===r.length?r.call(t.thisArg,e[m],h):3===r.length?r.call(t.thisArg,e[m],m,h):r.call(t.thisArg,e[m],m,e,h)}function h(e){if(!o)return e?(o=!0,d("Encountered an error: %s",e.message),i(e)):(d("Processed %d of %d collection elements.",n+=1,c),m<s?p():n===c?(d("Finished processing a collection."),i()):void 0)}}(e,f,h,(function(e){if(e)return s(e);s()}))}}function p(e,t,r,i){if(arguments.length<4)return f(t)(e,r);f(t,r)(e,i)}e(p,"factory",f);export{p as default,f as factory};
//# sourceMappingURL=index.mjs.map
