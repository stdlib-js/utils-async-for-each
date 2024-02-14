// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var l=Math.abs,p=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,v,"e"),t=f.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):p.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var x=String.fromCharCode,S=isNaN,j=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _(e){var r,i,t,a,o,l,p,u,f;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",p=1,u=0;u<e.length;u++)if(c(t=e[u]))l+=t;else{if(r=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(p=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[p],10),p+=1,S(t.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[p],10),p+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[p],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),l+=t.arg||"",p+=1}return l}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function T(e){var r,i,t,n;for(i=[],n=0,t=F.exec(e);t;)(r=e.slice(n,F.lastIndex-t[0].length)).length&&i.push(r),i.push(I(t)),n=F.lastIndex,t=F.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function O(e){return"string"==typeof e}function $(e){var r,i;if(!O(e))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[T(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return _.apply(null,r)}var A,C=Object.prototype,R=C.toString,P=C.__defineGetter__,Z=C.__defineSetter__,N=C.__lookupGetter__,L=C.__lookupSetter__;A=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===R.call(e))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(N.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=C,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(e,r,i.get),o&&Z&&Z.call(e,r,i.set),e};var W=A;function G(e,r,i){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var M=/./;function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&Y.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,q="function"==typeof J?J.toStringTag:"";var H=B()?function(e){var r,i,t;if(null==e)return z.call(e);i=e[q],r=D(e,q);try{e[q]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[q]=i:delete e[q],t}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString;var ee=B();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function ie(e){return U(e)||re(e)}function te(e){return"number"==typeof e}function ne(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ae(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ne(n):ne(n)+e,t&&(e="-"+e)),e}G(ie,"isPrimitive",U),G(ie,"isObject",re);var oe=String.prototype.toLowerCase,se=String.prototype.toUpperCase;function ce(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!te(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ae(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ae(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===se.call(e.specifier)?se.call(i):oe.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function le(e){return"string"==typeof e}var pe=Math.abs,ue=String.prototype.toLowerCase,fe=String.prototype.toUpperCase,ge=String.prototype.replace,de=/e\+(\d)$/,he=/e-(\d)$/,we=/^(\d+)$/,be=/^(\d+)e/,ve=/\.0$/,ye=/\.0*e/,me=/(\..*[^0])0*e/;function Ee(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!te(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":pe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ge.call(i,me,"$1e"),i=ge.call(i,ye,"e"),i=ge.call(i,ve,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ge.call(i,de,"e+0$1"),i=ge.call(i,he,"e-0$1"),e.alternate&&(i=ge.call(i,we,"$1."),i=ge.call(i,be,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===fe.call(e.specifier)?fe.call(i):ue.call(i)}function ke(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function xe(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ke(t):ke(t)+e}var Se=String.fromCharCode,je=isNaN,Ve=Array.isArray;function _e(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Fe(e){var r,i,t,n,a,o,s,c,l;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(le(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=_e(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,je(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,je(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ce(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!je(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=je(a)?String(t.arg):Se(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ee(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ae(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=xe(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ie=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Te(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Oe(e){var r,i,t,n;for(i=[],n=0,t=Ie.exec(e);t;)(r=e.slice(n,Ie.lastIndex-t[0].length)).length&&i.push(r),i.push(Te(t)),n=Ie.lastIndex,t=Ie.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function $e(e){return"string"==typeof e}function Ae(e){var r,i;if(!$e(e))throw new TypeError(Ae("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Oe(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Fe.apply(null,r)}function Ce(){return new Function("return this;")()}var Re="object"==typeof self?self:null,Pe="object"==typeof window?window:null,Ze="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Ne="object"==typeof Ze?Ze:null,Le="object"==typeof globalThis?globalThis:null;var We=function(e){if(arguments.length){if(!U(e))throw new TypeError(Ae("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ce()}if(Le)return Le;if(Re)return Re;if(Pe)return Pe;if(Ne)return Ne;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=We.document&&We.document.childNodes,Me=Int8Array;function Ue(){return/^\s*function\s*([^(]*)/i}var Xe=/^\s*function\s*([^(]*)/i;G(Ue,"REGEXP",Xe);var Be=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function ze(e){return"number"==typeof e}function Ye(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function De(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ye(n):Ye(n)+e,t&&(e="-"+e)),e}var Je=String.prototype.toLowerCase,qe=String.prototype.toUpperCase;function He(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ze(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=De(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=De(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===qe.call(e.specifier)?qe.call(i):Je.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ke(e){return"string"==typeof e}var Qe=Math.abs,er=String.prototype.toLowerCase,rr=String.prototype.toUpperCase,ir=String.prototype.replace,tr=/e\+(\d)$/,nr=/e-(\d)$/,ar=/^(\d+)$/,or=/^(\d+)e/,sr=/\.0$/,cr=/\.0*e/,lr=/(\..*[^0])0*e/;function pr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ze(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Qe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ir.call(i,lr,"$1e"),i=ir.call(i,cr,"e"),i=ir.call(i,sr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ir.call(i,tr,"e+0$1"),i=ir.call(i,nr,"e-0$1"),e.alternate&&(i=ir.call(i,ar,"$1."),i=ir.call(i,or,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===rr.call(e.specifier)?rr.call(i):er.call(i)}function ur(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function fr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ur(t):ur(t)+e}var gr=String.fromCharCode,dr=isNaN,hr=Array.isArray;function wr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function br(e){var r,i,t,n,a,o,s,c,l;if(!hr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Ke(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=wr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,dr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,dr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=He(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!dr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=dr(a)?String(t.arg):gr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=pr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=De(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=fr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var vr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function yr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function mr(e){var r,i,t,n;for(i=[],n=0,t=vr.exec(e);t;)(r=e.slice(n,vr.lastIndex-t[0].length)).length&&i.push(r),i.push(yr(t)),n=vr.lastIndex,t=vr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Er(e){return"string"==typeof e}function kr(e){var r,i;if(!Er(e))throw new TypeError(kr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[mr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return br.apply(null,r)}function xr(e){return null!==e&&"object"==typeof e}function Sr(e){var r,i,t,n;if(("Object"===(i=H(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Xe.exec(t.toString()))return r[1]}return xr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G(xr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(kr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Be(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(xr));var jr="function"==typeof M||"object"==typeof Me||"function"==typeof Ge?function(e){return Sr(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Sr(e).toLowerCase():r};function Vr(e){return"function"===jr(e)}var _r=Math.floor;function Fr(e){return _r(e)===e}function Ir(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Fr(e.length)&&e.length>=0&&e.length<=9007199254740991}function Tr(e){return"number"==typeof e}function Or(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function $r(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Or(n):Or(n)+e,t&&(e="-"+e)),e}var Ar=String.prototype.toLowerCase,Cr=String.prototype.toUpperCase;function Rr(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Tr(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=$r(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=$r(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Cr.call(e.specifier)?Cr.call(i):Ar.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Pr(e){return"string"==typeof e}var Zr=Math.abs,Nr=String.prototype.toLowerCase,Lr=String.prototype.toUpperCase,Wr=String.prototype.replace,Gr=/e\+(\d)$/,Mr=/e-(\d)$/,Ur=/^(\d+)$/,Xr=/^(\d+)e/,Br=/\.0$/,zr=/\.0*e/,Yr=/(\..*[^0])0*e/;function Dr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Tr(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Zr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Wr.call(i,Yr,"$1e"),i=Wr.call(i,zr,"e"),i=Wr.call(i,Br,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Wr.call(i,Gr,"e+0$1"),i=Wr.call(i,Mr,"e-0$1"),e.alternate&&(i=Wr.call(i,Ur,"$1."),i=Wr.call(i,Xr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Lr.call(e.specifier)?Lr.call(i):Nr.call(i)}function Jr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function qr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Jr(t):Jr(t)+e}var Hr=String.fromCharCode,Kr=isNaN,Qr=Array.isArray;function ei(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ri(e){var r,i,t,n,a,o,s,c,l;if(!Qr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Pr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=ei(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,l=0;l<i.length;l++)switch(n=i.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Kr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Kr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Rr(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Kr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Kr(a)?String(t.arg):Hr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Dr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=$r(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=qr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var ii=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ti(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function ni(e){var r,i,t,n;for(i=[],n=0,t=ii.exec(e);t;)(r=e.slice(n,ii.lastIndex-t[0].length)).length&&i.push(r),i.push(ti(t)),n=ii.lastIndex,t=ii.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function ai(e){return"string"==typeof e}function oi(e){var r,i,t;if(!ai(e))throw new TypeError(oi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=ni(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return ri.apply(null,i)}var si=Number.POSITIVE_INFINITY;var ci,li=Object,pi=Object.getPrototypeOf;ci=Vr(Object.getPrototypeOf)?pi:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var ui=ci;var fi=Object.prototype;function gi(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!Be(e)}(e)&&(r=function(e){return null==e?null:(e=li(e),ui(e))}(e),!r||!D(e,"constructor")&&D(r,"constructor")&&Vr(r.constructor)&&"[object Function]"===H(r.constructor)&&D(r,"isPrototypeOf")&&Vr(r.isPrototypeOf)&&(r===fi||function(e){var r;for(r in e)if(!D(e,r))return!1;return!0}(e)))}function di(e){return"number"==typeof e}var hi=Number,wi=hi.prototype.toString;var bi=B();function vi(e){return"object"==typeof e&&(e instanceof hi||(bi?function(e){try{return wi.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function yi(e){return di(e)||vi(e)}G(yi,"isPrimitive",di),G(yi,"isObject",vi);var mi=hi.NEGATIVE_INFINITY;function Ei(e){return e<si&&e>mi&&Fr(e)}function ki(e){return di(e)&&Ei(e)}function xi(e){return vi(e)&&Ei(e.valueOf())}function Si(e){return ki(e)||xi(e)}function ji(e){return ki(e)&&e>0}function Vi(e){return xi(e)&&e.valueOf()>0}function _i(e){return ji(e)||Vi(e)}function Fi(e,r){return gi(r)?(D(r,"thisArg")&&(e.thisArg=r.thisArg),D(r,"series")&&(e.series=r.series,!U(e.series))?new TypeError(oi("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):D(r,"limit")&&(e.limit=r.limit,!ji(e.limit))?new TypeError(oi("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):null):new TypeError(oi("invalid argument. Options argument must be an object. Value: `%s`.",r))}function Ii(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var i=function e(){if(this instanceof e){var i=[null];i.push.apply(i,arguments);var t=Function.bind.apply(r,i);return new t}return r.apply(this,arguments)};i.prototype=r.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var t=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(i,r,t.get?t:{enumerable:!0,get:function(){return e[r]}})})),i}G(Si,"isPrimitive",ki),G(Si,"isObject",xi),G(_i,"isPrimitive",ji),G(_i,"isObject",Vi);var Ti=Ii(Object.freeze({__proto__:null,default:()=>()=>{}}))("for-each-async:limit");function Oi(e,r,i,t){var n,a,o,s,c,l,p;if(c=e.length,Ti("Collection length: %d",c),0===c)return Ti("Finished processing a collection."),t();for(s=c<r.limit?c:r.limit,Ti("Concurrency limit: %d",s),Ti("Number of arguments: %d",i.length),n=c-1,a=0,l=-1,p=0;p<s;p++)l<n&&u();function u(){Ti("Collection element %d: %s.",l+=1,JSON.stringify(e[l])),2===i.length?i.call(r.thisArg,e[l],f):3===i.length?i.call(r.thisArg,e[l],l,f):i.call(r.thisArg,e[l],l,e,f)}function f(e){if(!o)return e?(o=!0,Ti("Encountered an error: %s",e.message),t(e)):(Ti("Processed %d of %d collection elements.",a+=1,c),l<n?u():a===c?(Ti("Finished processing a collection."),t()):void 0)}}function $i(e,r){var i,t,n;if(i={},arguments.length>1){if(t=Fi(i,e))throw t;n=r}else n=e;if(!Vr(n))throw new TypeError(oi("invalid argument. Last argument must be a function. Value: `%s`.",n));return i.series?i.limit=1:i.limit||(i.limit=si),a;function a(e,r){if(!Ir(e))throw new TypeError(oi("invalid argument. First argument must be a collection. Value: `%s`.",e));if(!Vr(r))throw new TypeError(oi("invalid argument. Last argument must be a function. Value: `%s`.",r));return Oi(e,i,n,(function(e){if(e)return r(e);r()}))}}function Ai(e,r,i,t){if(arguments.length<4)return $i(r)(e,i);$i(r,i)(e,t)}G(Ai,"factory",$i);export{Ai as default,$i as factory};
//# sourceMappingURL=mod.js.map
