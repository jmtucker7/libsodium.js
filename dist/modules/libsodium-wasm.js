!function(e){function t(e){"use strict";function t(e){U("NO_DYNAMIC_EXECUTION=1 was set, cannot eval")}function r(e,t){e||U("Assertion failed: "+t)}function n(e){var t=B["_"+e];return t||U("NO_DYNAMIC_EXECUTION=1 was set, cannot eval"),r(t,"Cannot call unknown function "+e+" (perhaps LLVM optimizations or closure removed it?)"),t}function a(e,t,r,n){switch("*"===(r=r||"i8").charAt(r.length-1)&&(r="i32"),r){case"i1":case"i8":re[e>>0]=t;break;case"i16":ae[e>>1]=t;break;case"i32":_e[e>>2]=t;break;case"i64":tempI64=[t>>>0,(tempDouble=t,+Ie(tempDouble)>=1?tempDouble>0?(0|Ne(+Le(tempDouble/4294967296),4294967295))>>>0:~~+Oe((tempDouble-+(~~tempDouble>>>0))/4294967296)>>>0:0)],_e[e>>2]=tempI64[0],_e[e+4>>2]=tempI64[1];break;case"float":ce[e>>2]=t;break;case"double":se[e>>3]=t;break;default:U("invalid type for setValue: "+r)}}function o(e,t,r){switch("*"===(t=t||"i8").charAt(t.length-1)&&(t="i32"),t){case"i1":case"i8":return re[e>>0];case"i16":return ae[e>>1];case"i32":case"i64":return _e[e>>2];case"float":return ce[e>>2];case"double":return se[e>>3];default:U("invalid type for setValue: "+t)}return null}function _(e,t,n,o){var _,i;"number"==typeof e?(_=!0,i=e):(_=!1,i=e.length);var c,s="string"==typeof t?t:null;if(c=n==$?o:["function"==typeof Xe?Xe:Y.staticAlloc,Y.stackAlloc,Y.staticAlloc,Y.dynamicAlloc][void 0===n?Q:n](Math.max(i,s?1:t.length)),_){var y,o=c;for(r(0==(3&c)),y=c+(-4&i);o<y;o+=4)_e[o>>2]=0;for(y=c+i;o<y;)re[o++>>0]=0;return c}if("i8"===s)return e.subarray||e.slice?ne.set(e,c):ne.set(new Uint8Array(e),c),c;for(var u,p,l,f=0;f<i;){var h=e[f];"function"==typeof h&&(h=Y.getFunctionIndex(h)),0!==(u=s||t[f])?("i64"==u&&(u="i32"),a(c+f,h,u),l!==u&&(p=Y.getNativeTypeSize(u),l=u),f+=p):f++}return c}function i(e,t){if(0===t||!e)return"";for(var r,n=0,a=0;;){if(r=ne[e+a>>0],n|=r,0==r&&!t)break;if(a++,t&&a==t)break}t||(t=a);var o="";if(n<128){for(var _;t>0;)_=String.fromCharCode.apply(String,ne.subarray(e,e+Math.min(t,1024))),o=o?o+_:_,e+=1024,t-=1024;return o}return B.UTF8ToString(e)}function c(e,t){for(var r=t;e[r];)++r;if(r-t>16&&e.subarray&&ee)return ee.decode(e.subarray(t,r));for(var n,a,o,_,i,c="";;){if(!(n=e[t++]))return c;if(128&n)if(a=63&e[t++],192!=(224&n))if(o=63&e[t++],224==(240&n)?n=(15&n)<<12|a<<6|o:(_=63&e[t++],240==(248&n)?n=(7&n)<<18|a<<12|o<<6|_:(i=63&e[t++],n=248==(252&n)?(3&n)<<24|a<<18|o<<12|_<<6|i:(1&n)<<30|a<<24|o<<18|_<<12|i<<6|63&e[t++])),n<65536)c+=String.fromCharCode(n);else{var s=n-65536;c+=String.fromCharCode(55296|s>>10,56320|1023&s)}else c+=String.fromCharCode((31&n)<<6|a);else c+=String.fromCharCode(n)}}function s(e,t,r,n){if(!(n>0))return 0;for(var a=r,o=r+n-1,_=0;_<e.length;++_){var i=e.charCodeAt(_);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++_)),i<=127){if(r>=o)break;t[r++]=i}else if(i<=2047){if(r+1>=o)break;t[r++]=192|i>>6,t[r++]=128|63&i}else if(i<=65535){if(r+2>=o)break;t[r++]=224|i>>12,t[r++]=128|i>>6&63,t[r++]=128|63&i}else if(i<=2097151){if(r+3>=o)break;t[r++]=240|i>>18,t[r++]=128|i>>12&63,t[r++]=128|i>>6&63,t[r++]=128|63&i}else if(i<=67108863){if(r+4>=o)break;t[r++]=248|i>>24,t[r++]=128|i>>18&63,t[r++]=128|i>>12&63,t[r++]=128|i>>6&63,t[r++]=128|63&i}else{if(r+5>=o)break;t[r++]=252|i>>30,t[r++]=128|i>>24&63,t[r++]=128|i>>18&63,t[r++]=128|i>>12&63,t[r++]=128|i>>6&63,t[r++]=128|63&i}}return t[r]=0,r-a}function y(e,t,r){return s(e,ne,t,r)}function u(e){for(var t=0,r=0;r<e.length;++r){var n=e.charCodeAt(r);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&e.charCodeAt(++r)),n<=127?++t:t+=n<=2047?2:n<=65535?3:n<=2097151?4:n<=67108863?5:6}return t}function p(e){var t=B.___cxa_demangle||B.__cxa_demangle;if(t){try{var r=e.substr(1),n=u(r)+1,a=Xe(n);y(r,a,n);var _=Xe(4),c=t(a,0,0,_);if(0===o(_,"i32")&&c)return i(c)}catch(e){}finally{a&&Ge(a),_&&Ge(_),c&&Ge(c)}return e}return Y.warnOnce("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling"),e}function l(e){var t=/__Z[\w\d_]+/g;return e.replace(t,function(e){var t=p(e);return e===t?e:e+" ["+t+"]"})}function f(){var e=new Error;if(!e.stack){try{throw new Error(0)}catch(t){e=t}if(!e.stack)return"(no stack trace available)"}return e.stack.toString()}function h(){var e=f();return B.extraStackTrace&&(e+="\n"+B.extraStackTrace()),l(e)}function m(e,t){return e%t>0&&(e+=t-e%t),e}function d(e){B.buffer=te=e}function b(){B.HEAP8=re=new Int8Array(te),B.HEAP16=ae=new Int16Array(te),B.HEAP32=_e=new Int32Array(te),B.HEAPU8=ne=new Uint8Array(te),B.HEAPU16=oe=new Uint16Array(te),B.HEAPU32=ie=new Uint32Array(te),B.HEAPF32=ce=new Float32Array(te),B.HEAPF64=se=new Float64Array(te)}function g(){var e=B.usingWasm?de:be,t=2147483648-e;if(_e[me>>2]>t)return!1;var r=Ae;for(Ae=Math.max(Ae,ge);Ae<_e[me>>2];)Ae=Ae<=536870912?m(2*Ae,e):Math.min(m((3*Ae+2147483648)/4,e),t);var n=B.reallocBuffer(Ae);return n&&n.byteLength==Ae?(d(n),b(),!0):(Ae=r,!1)}function v(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var r=t.func;"number"==typeof r?void 0===t.arg?B.dynCall_v(r):B.dynCall_vi(r,t.arg):r(void 0===t.arg?null:t.arg)}else t()}}function w(){if(B.preRun)for("function"==typeof B.preRun&&(B.preRun=[B.preRun]);B.preRun.length;)M(B.preRun.shift());v(ke)}function A(){Se||(Se=!0,v(xe))}function k(){v(Te)}function x(){v(Me),Re=!0}function T(){if(B.postRun)for("function"==typeof B.postRun&&(B.postRun=[B.postRun]);B.postRun.length;)E(B.postRun.shift());v(Ee)}function M(e){ke.unshift(e)}function E(e){Ee.unshift(e)}function S(e,t,r){var n=r>0?r:u(e)+1,a=new Array(n),o=s(e,a,0,a.length);return t&&(a.length=o),a}function R(e,t){re.set(e,t)}function C(e,t,r){for(var n=0;n<e.length;++n)re[t++>>0]=e.charCodeAt(n);r||(re[t>>0]=0)}function I(e){Pe++,B.monitorRunDependencies&&B.monitorRunDependencies(Pe)}function O(e){if(Pe--,B.monitorRunDependencies&&B.monitorRunDependencies(Pe),0==Pe&&(null!==Fe&&(clearInterval(Fe),Fe=null),Ue)){var t=Ue;Ue=null,t()}}function L(e,t){De.varargs=t;try{var n=De.get(),a=De.get(),o=De.get(),_=0;L.buffer||(L.buffers=[null,[],[]],L.printChar=function(e,t){var n=L.buffers[e];r(n),0===t||10===t?((1===e?B.print:B.printErr)(c(n,0)),n.length=0):n.push(t)});for(var i=0;i<o;i++){for(var s=_e[a+8*i>>2],y=_e[a+(8*i+4)>>2],u=0;u<y;u++)L.printChar(n,ne[s+u]);_+=y}return _}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||U(e),-e.errno}}function N(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function P(e){function t(){B.calledRun||(B.calledRun=!0,X||(A(),k(),B.onRuntimeInitialized&&B.onRuntimeInitialized(),B._main&&ut&&B.callMain(e),T()))}e=e||B.arguments,null===ct&&(ct=Date.now()),Pe>0||(w(),Pe>0||B.calledRun||(B.setStatus?(B.setStatus("Running..."),setTimeout(function(){setTimeout(function(){B.setStatus("")},1),t()},1)):t()))}function F(e,t){t&&B.noExitRuntime||(B.noExitRuntime||(X=!0,Z=e,le=it,x(),B.onExit&&B.onExit(e)),j&&process.exit(e),B.quit(e,new N(e)))}function U(e){B.onAbort&&B.onAbort(e),void 0!==e?(B.print(e),B.printErr(e),e=JSON.stringify(e)):e="",X=!0,Z=1;var t="abort("+e+") at "+h()+"\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.";throw yt&&yt.forEach(function(r){t=r(t,e)}),t}var B;(B=e)||(B=(void 0!==B?B:null)||{});var W={};for(var z in B)B.hasOwnProperty(z)&&(W[z]=B[z]);var D=!1,H=!1,j=!1,q=!1;if(B.ENVIRONMENT)if("WEB"===B.ENVIRONMENT)D=!0;else if("WORKER"===B.ENVIRONMENT)H=!0;else if("NODE"===B.ENVIRONMENT)j=!0;else{if("SHELL"!==B.ENVIRONMENT)throw new Error("The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.");q=!0}else D="object"==typeof window,H="function"==typeof importScripts,j="object"==typeof process&&"function"==typeof require&&!D&&!H,q=!D&&!j&&!H;if(j){B.print||(B.print=console.log),B.printErr||(B.printErr=console.warn);var V,G;B.read=function(e,t){V||(V=require("fs")),G||(G=require("path")),e=G.normalize(e);var r=V.readFileSync(e);return t?r:r.toString()},B.readBinary=function(e){var t=B.read(e,!0);return t.buffer||(t=new Uint8Array(t)),r(t.buffer),t},B.load=function(e){t(read(e))},B.thisProgram||(process.argv.length>1?B.thisProgram=process.argv[1].replace(/\\/g,"/"):B.thisProgram="unknown-program"),B.arguments=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=B),process.on("uncaughtException",function(e){if(!(e instanceof N))throw e}),B.inspect=function(){return"[Emscripten Module object]"}}else if(q)B.print||(B.print=print),"undefined"!=typeof printErr&&(B.printErr=printErr),"undefined"!=typeof read?B.read=read:B.read=function(){throw"no read() available"},B.readBinary=function(e){if("function"==typeof readbuffer)return new Uint8Array(readbuffer(e));var t=read(e,"binary");return r("object"==typeof t),t},"undefined"!=typeof scriptArgs?B.arguments=scriptArgs:void 0!==arguments&&(B.arguments=arguments),"function"==typeof quit&&(B.quit=function(e,t){quit(e)});else{if(!D&&!H)throw"Unknown runtime environment. Where are we?";if(B.read=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},H&&(B.readBinary=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),B.readAsync=function(e,t,r){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="arraybuffer",n.onload=function(){200==n.status||0==n.status&&n.response?t(n.response):r()},n.onerror=r,n.send(null)},void 0!==arguments&&(B.arguments=arguments),"undefined"!=typeof console)B.print||(B.print=function(e){}),B.printErr||(B.printErr=function(e){});else{B.print||(B.print=function(e){})}H&&(B.load=importScripts),void 0===B.setWindowTitle&&(B.setWindowTitle=function(e){document.title=e})}!B.load&&B.read&&(B.load=function(e){t(B.read(e))}),B.print||(B.print=function(){}),B.printErr||(B.printErr=B.print),B.arguments||(B.arguments=[]),B.thisProgram||(B.thisProgram="./this.program"),B.quit||(B.quit=function(e,t){throw t}),B.print=B.print,B.printErr=B.printErr,B.preRun=[],B.postRun=[];for(var z in W)W.hasOwnProperty(z)&&(B[z]=W[z]);W=void 0;var Y={setTempRet0:function(e){return tempRet0=e,e},getTempRet0:function(){return tempRet0},stackSave:function(){return le},stackRestore:function(e){le=e},getNativeTypeSize:function(e){switch(e){case"i1":case"i8":return 1;case"i16":return 2;case"i32":return 4;case"i64":return 8;case"float":return 4;case"double":return 8;default:if("*"===e[e.length-1])return Y.QUANTUM_SIZE;if("i"===e[0]){var t=parseInt(e.substr(1));return r(t%8==0),t/8}return 0}},getNativeFieldSize:function(e){return Math.max(Y.getNativeTypeSize(e),Y.QUANTUM_SIZE)},STACK_ALIGN:16,prepVararg:function(e,t){return"double"===t||"i64"===t?7&e&&(r(4==(7&e)),e+=4):r(0==(3&e)),e},getAlignSize:function(e,t,r){return r||"i64"!=e&&"double"!=e?e?Math.min(t||(e?Y.getNativeFieldSize(e):0),Y.QUANTUM_SIZE):Math.min(t,8):8},dynCall:function(e,t,r){return r&&r.length?B["dynCall_"+e].apply(null,[t].concat(r)):B["dynCall_"+e].call(null,t)},functionPointers:[null,null,null,null,null,null,null,null],addFunction:function(e){for(var t=0;t<Y.functionPointers.length;t++)if(!Y.functionPointers[t])return Y.functionPointers[t]=e,1*(1+t);throw"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS."},removeFunction:function(e){Y.functionPointers[(e-1)/1]=null},warnOnce:function(e){Y.warnOnce.shown||(Y.warnOnce.shown={}),Y.warnOnce.shown[e]||(Y.warnOnce.shown[e]=1,B.printErr(e))},funcWrappers:{},getFuncWrapper:function(e,t){r(t),Y.funcWrappers[t]||(Y.funcWrappers[t]={});var n=Y.funcWrappers[t];return n[e]||(1===t.length?n[e]=function(){return Y.dynCall(t,e)}:2===t.length?n[e]=function(r){return Y.dynCall(t,e,[r])}:n[e]=function(){return Y.dynCall(t,e,Array.prototype.slice.call(arguments))}),n[e]},getCompilerSetting:function(e){throw"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work"},stackAlloc:function(e){var t=le;return le=le+e|0,le=le+15&-16,t},staticAlloc:function(e){var t=ue;return ue=ue+e|0,ue=ue+15&-16,t},dynamicAlloc:function(e){var t=_e[me>>2],r=-16&(t+e+15|0);return _e[me>>2]=r,r>=Ae&&!g()?(_e[me>>2]=t,0):t},alignMemory:function(e,t){return e=Math.ceil(e/(t||16))*(t||16)},makeBigInt:function(e,t,r){return r?+(e>>>0)+4294967296*+(t>>>0):+(e>>>0)+4294967296*+(0|t)},GLOBAL_BASE:1024,QUANTUM_SIZE:4,__dummy__:0};B.Runtime=Y;var J,K,X=0,Z=0;!function(){var e={stackSave:function(){Y.stackSave()},stackRestore:function(){Y.stackRestore()},arrayToC:function(e){var t=Y.stackAlloc(e.length);return R(e,t),t},stringToC:function(e){var t=0;if(null!==e&&void 0!==e&&0!==e){var r=1+(e.length<<2);y(e,t=Y.stackAlloc(r),r)}return t}},t={string:e.stringToC,array:e.arrayToC};K=function(e,r,a,o,_){var c=n(e),s=[],y=0;if(o)for(var u=0;u<o.length;u++){var p=t[a[u]];p?(0===y&&(y=Y.stackSave()),s[u]=p(o[u])):s[u]=o[u]}var l=c.apply(null,s);if("string"===r&&(l=i(l)),0!==y){if(_&&_.async)return void EmterpreterAsync.asyncFinalizers.push(function(){Y.stackRestore(y)});Y.stackRestore(y)}return l},J=function(e,t,r){return function(){return K(e,t,r,arguments)}}}(),B.ccall=K,B.cwrap=J,B.setValue=a,B.getValue=o;var Q=2,$=4;B.ALLOC_NORMAL=0,B.ALLOC_STACK=1,B.ALLOC_STATIC=Q,B.ALLOC_DYNAMIC=3,B.ALLOC_NONE=$,B.allocate=_,B.getMemory=function(e){return pe?Se?Xe(e):Y.dynamicAlloc(e):Y.staticAlloc(e)},B.Pointer_stringify=i,B.AsciiToString=function(e){for(var t="";;){var r=re[e++>>0];if(!r)return t;t+=String.fromCharCode(r)}},B.stringToAscii=function(e,t){return C(e,t,!1)};var ee="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;B.UTF8ArrayToString=c,B.UTF8ToString=function(e){return c(ne,e)},B.stringToUTF8Array=s,B.stringToUTF8=y,B.lengthBytesUTF8=u;"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");B.stackTrace=h;var te,re,ne,ae,oe,_e,ie,ce,se,ye,ue,pe,le,fe,he,me,de=65536,be=16777216,ge=16777216;ye=ue=le=fe=he=me=0,pe=!1,B.reallocBuffer||(B.reallocBuffer=function(e){var t;try{if(ArrayBuffer.transfer)t=ArrayBuffer.transfer(te,e);else{var r=re;t=new ArrayBuffer(e),new Int8Array(t).set(r)}}catch(e){return!1}return!!Ze(t)&&t});var ve;try{(ve=Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype,"byteLength").get))(new ArrayBuffer(4))}catch(e){ve=function(e){return e.byteLength}}var we=B.TOTAL_STACK||5242880,Ae=B.TOTAL_MEMORY||16777216;if(Ae<we&&B.printErr("TOTAL_MEMORY should be larger than TOTAL_STACK, was "+Ae+"! (TOTAL_STACK="+we+")"),B.buffer?te=B.buffer:"object"==typeof WebAssembly&&"function"==typeof WebAssembly.Memory?(B.wasmMemory=new WebAssembly.Memory({initial:Ae/de}),te=B.wasmMemory.buffer):te=new ArrayBuffer(Ae),b(),_e[0]=1668509029,ae[1]=25459,115!==ne[2]||99!==ne[3])throw"Runtime error: expected the system to be little-endian!";B.HEAP=void 0,B.buffer=te,B.HEAP8=re,B.HEAP16=ae,B.HEAP32=_e,B.HEAPU8=ne,B.HEAPU16=oe,B.HEAPU32=ie,B.HEAPF32=ce,B.HEAPF64=se;var ke=[],xe=[],Te=[],Me=[],Ee=[],Se=!1,Re=!1;if(B.addOnPreRun=M,B.addOnInit=function(e){xe.unshift(e)},B.addOnPreMain=function(e){Te.unshift(e)},B.addOnExit=function(e){Me.unshift(e)},B.addOnPostRun=E,B.intArrayFromString=S,B.intArrayToString=function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];n>255&&(n&=255),t.push(String.fromCharCode(n))}return t.join("")},B.writeStringToMemory=function(e,t,r){Y.warnOnce("writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!");var n,a;r&&(a=t+u(e),n=re[a]),y(e,t,1/0),r&&(re[a]=n)},B.writeArrayToMemory=R,B.writeAsciiToMemory=C,Math.imul&&-5===Math.imul(4294967295,5)||(Math.imul=function(e,t){var r=65535&e,n=65535&t;return r*n+((e>>>16)*n+r*(t>>>16)<<16)|0}),Math.imul=Math.imul,!Math.fround){var Ce=new Float32Array(1);Math.fround=function(e){return Ce[0]=e,Ce[0]}}Math.fround=Math.fround,Math.clz32||(Math.clz32=function(e){e>>>=0;for(var t=0;t<32;t++)if(e&1<<31-t)return t;return 32}),Math.clz32=Math.clz32,Math.trunc||(Math.trunc=function(e){return e<0?Math.ceil(e):Math.floor(e)}),Math.trunc=Math.trunc;var Ie=Math.abs,Oe=(Math.cos,Math.sin,Math.tan,Math.acos,Math.asin,Math.atan,Math.atan2,Math.exp,Math.log,Math.sqrt,Math.ceil),Le=Math.floor,Ne=(Math.pow,Math.imul,Math.fround,Math.round,Math.min),Pe=(Math.clz32,Math.trunc,0),Fe=null,Ue=null;B.addRunDependency=I,B.removeRunDependency=O,B.preloadedImages={},B.preloadedAudios={};var Be=null;!function(e){function t(e,t){var r=l;if(e.indexOf(".")<0)r=(r||{})[e];else{var n=e.split(".");r=((r=(r||{})[n[0]])||{})[n[1]]}return t&&(r=(r||{})[t]),void 0===r&&U("bad lookupImport to ("+e+")."+t),r}function n(t){var r=e.buffer;t.byteLength<r.byteLength&&e.printErr("the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here");var n=new Int8Array(r),a=new Int8Array(t);Be||n.set(a.subarray(e.STATIC_BASE,e.STATIC_BASE+e.STATIC_BUMP),e.STATIC_BASE),a.set(n),d(t),b()}function a(e){return e}function o(){try{var t;if(e.wasmBinary)t=e.wasmBinary,t=new Uint8Array(t);else{if(!e.readBinary)throw"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)";t=e.readBinary(u)}return t}catch(e){U(e)}}function _(t,r,n){return"function"==typeof e.asm&&e.asm!==w||(e.asmPreload?e.asm=e.asmPreload:U("NO_DYNAMIC_EXECUTION=1 was set, cannot eval")),"function"!=typeof e.asm?(e.printErr("asm evalling did not set the module properly"),!1):e.asm(t,r,n)}function i(t,r,a){function _(t){(f=t.exports).memory&&n(f.memory),e.asm=f,e.usingWasm=!0,O("wasm-instantiate")}if("object"!=typeof WebAssembly)return e.printErr("no native wasm support detected"),!1;if(!(e.wasmMemory instanceof WebAssembly.Memory))return e.printErr("no native wasm Memory in use"),!1;if(r.memory=e.wasmMemory,l.global={NaN:NaN,Infinity:1/0},l["global.Math"]=t.Math,l.env=r,I("wasm-instantiate"),e.instantiateWasm)try{return e.instantiateWasm(l,_)}catch(t){return e.printErr("Module.instantiateWasm callback failed with error: "+t),!1}var i;try{i=new WebAssembly.Instance(new WebAssembly.Module(o()),l)}catch(t){return e.printErr("failed to compile wasm module: "+t),t.toString().indexOf("imported Memory with incompatible size")>=0&&e.printErr("Memory size incompatibility issues may be due to changing TOTAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set TOTAL_MEMORY at runtime to something smaller than it was at compile time)."),!1}return _(i),f}function c(a,_,i,c){if("function"!=typeof WasmJS)return e.printErr("WasmJS not detected - polyfill not bundled?"),!1;var s=WasmJS({});s.outside=e,s.info=l,s.lookupImport=t,r(i===e.buffer),l.global=a,l.env=_,r(i===e.buffer),_.memory=i,r(_.memory instanceof ArrayBuffer),s.providedTotalMemory=e.buffer.byteLength;var u;u="interpret-binary"===c?o():e.read("interpret-asm2wasm"==c?p:y);var h;if("interpret-asm2wasm"==c)h=s._malloc(u.length+1),s.writeAsciiToMemory(u,h),s._load_asm2wasm(h);else if("interpret-s-expr"===c)h=s._malloc(u.length+1),s.writeAsciiToMemory(u,h),s._load_s_expr2wasm(h);else{if("interpret-binary"!==c)throw"what? "+c;h=s._malloc(u.length),s.HEAPU8.set(u,h),s._load_binary2wasm(h,u.length)}return s._free(h),s._instantiate(h),e.newBuffer&&(n(e.newBuffer),e.newBuffer=null),f=s.asmExports}var s=e.wasmJSMethod||"native-wasm";e.wasmJSMethod=s;var y=e.wasmTextFile||"libsodium.wast",u=e.wasmBinaryFile||"libsodium.wasm",p=e.asmjsCodeFile||"libsodium.asm.js";"function"==typeof e.locateFile&&(y=e.locateFile(y),u=e.locateFile(u),p=e.locateFile(p));var l={global:null,env:null,asm2wasm:{"f64-rem":function(e,t){return e%t},"f64-to-int":function(e){return 0|e},"i32s-div":function(e,t){return(0|e)/(0|t)|0},"i32u-div":function(e,t){return(e>>>0)/(t>>>0)>>>0},"i32s-rem":function(e,t){return(0|e)%(0|t)|0},"i32u-rem":function(e,t){return(e>>>0)%(t>>>0)>>>0},debugger:function(){}},parent:e},f=null;e.asmPreload=e.asm;var h=e.reallocBuffer,g=function(t){t=m(t,e.usingWasm?de:be);var r=e.buffer,n=r.byteLength;if(!e.usingWasm)return f.__growWasmMemory((t-n)/65536),e.buffer!==r?e.buffer:null;try{return-1!==e.wasmMemory.grow((t-n)/65536)?e.buffer=e.wasmMemory.buffer:null}catch(e){return null}};e.reallocBuffer=function(e){return"asmjs"===v?h(e):g(e)};var v="";e.asm=function(t,r,n){if(t=a(t),!(r=a(r)).table){var o=e.wasmTableSize;void 0===o&&(o=1024);var y=e.wasmMaxTableSize;"object"==typeof WebAssembly&&"function"==typeof WebAssembly.Table?r.table=void 0!==y?new WebAssembly.Table({initial:o,maximum:y,element:"anyfunc"}):new WebAssembly.Table({initial:o,element:"anyfunc"}):r.table=new Array(o),e.wasmTable=r.table}r.memoryBase||(r.memoryBase=e.STATIC_BASE),r.tableBase||(r.tableBase=0);for(var u,p=s.split(","),l=0;l<p.length;l++){var f=p[l];if(v=f,"native-wasm"===f){if(u=i(t,r))break}else if("asmjs"===f){if(u=_(t,r,n))break}else if("interpret-asm2wasm"===f||"interpret-s-expr"===f||"interpret-binary"===f){if(u=c(t,r,n,f))break}else U("bad method: "+f)}if(!u)throw"no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods";return u};var w=e.asm}(B);var We=[function(){return B.getRandomValue()},function(){if(void 0===B.getRandomValue)try{var e="object"==typeof window?window:self,t=void 0!==e.crypto?e.crypto:e.msCrypto,r=function(){var e=new Uint32Array(1);return t.getRandomValues(e),e[0]>>>0};r(),B.getRandomValue=r}catch(e){try{var n=require("crypto"),a=function(){var e=n.randomBytes(4);return(e[0]<<24|e[1]<<16|e[2]<<8|e[3])>>>0};a(),B.getRandomValue=a}catch(e){throw"No secure random number generator found"}}}];ye=Y.GLOBAL_BASE,ue=ye+37296,xe.push(),Be=B.wasmJSMethod.indexOf("asmjs")>=0||B.wasmJSMethod.indexOf("interpret-asm2wasm")>=0?"libsodium.js.mem":null;B.STATIC_BASE=ye,B.STATIC_BUMP=37296;var ze=ue;ue+=16,B._bitshift64Ashr=Ye,B._i64Subtract=Qe,B._i64Add=tt,B._memset=Je,B._bitshift64Lshr=je,B._bitshift64Shl=et;var De={varargs:0,get:function(e){return De.varargs+=4,_e[De.varargs-4>>2]},getStr:function(){return i(De.get())},get64:function(){var e=De.get(),t=De.get();return r(e>=0?0===t:-1===t),e},getZero:function(){r(0===De.get())}};B.___muldsi3=Ke,B.___muldi3=$e,B._sbrk=qe,B._memcpy=Ve,B._memmove=rt,Me.push(function(){var e=B._fflush;e&&e(0);var t=L.printChar;if(t){var r=L.buffers;r[1].length&&t(1,10),r[2].length&&t(2,10)}}),me=_(1,"i32",Q),fe=(le=Y.alignMemory(ue))+we,he=Y.alignMemory(fe),_e[me>>2]=he,pe=!0,B.wasmTableSize=64,B.wasmMaxTableSize=64,B.asmGlobalArg={Math:Math,Int8Array:Int8Array,Int16Array:Int16Array,Int32Array:Int32Array,Uint8Array:Uint8Array,Uint16Array:Uint16Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array,NaN:NaN,Infinity:1/0,byteLength:ve},B.asmLibraryArg={abort:U,assert:r,enlargeMemory:g,getTotalMemory:function(){return Ae},abortOnCannotGrowMemory:function(){U("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value "+Ae+", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ")},invoke_ii:function(e,t){try{return B.dynCall_ii(e,t)}catch(e){if("number"!=typeof e&&"longjmp"!==e)throw e;B.setThrew(1,0)}},jsCall_ii:function(e,t){return Y.functionPointers[e](t)},invoke_iiii:function(e,t,r,n){try{return B.dynCall_iiii(e,t,r,n)}catch(e){if("number"!=typeof e&&"longjmp"!==e)throw e;B.setThrew(1,0)}},jsCall_iiii:function(e,t,r,n){return Y.functionPointers[e](t,r,n)},_emscripten_asm_const_i:function(e){return We[e]()},___lock:function(){},___syscall6:function(e,t){De.varargs=t;try{var r=De.getStreamFromFD();return FS.close(r),0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||U(e),-e.errno}},___setErrNo:function(e){return B.___errno_location&&(_e[B.___errno_location()>>2]=e),e},_abort:function(){B.abort()},___syscall140:function(e,t){De.varargs=t;try{var r=De.getStreamFromFD(),n=(De.get(),De.get()),a=De.get(),o=De.get(),_=n;return FS.llseek(r,_,o),_e[a>>2]=r.position,r.getdents&&0===_&&0===o&&(r.getdents=null),0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||U(e),-e.errno}},_emscripten_memcpy_big:function(e,t,r){return ne.set(ne.subarray(t,t+r),e),e},___syscall54:function(e,t){De.varargs=t;try{return 0}catch(e){return"undefined"!=typeof FS&&e instanceof FS.ErrnoError||U(e),-e.errno}},___unlock:function(){},_emscripten_asm_const_v:function(e){return We[e]()},___assert_fail:function(e,t,r,n){throw X=!0,"Assertion failed: "+i(e)+", at: "+[t?i(t):"unknown filename",r,n?i(n):"unknown function"]+" at "+h()},___syscall146:L,DYNAMICTOP_PTR:me,tempDoublePtr:ze,ABORT:X,STACKTOP:le,STACK_MAX:fe};var He=B.asm(B.asmGlobalArg,B.asmLibraryArg,te),je=(B._sodium_library_version_minor=He._sodium_library_version_minor,B._bitshift64Lshr=He._bitshift64Lshr),qe=(B._crypto_kx_publickeybytes=He._crypto_kx_publickeybytes,B._crypto_pwhash_bytes_max=He._crypto_pwhash_bytes_max,B._crypto_box_noncebytes=He._crypto_box_noncebytes,B._crypto_aead_chacha20poly1305_ietf_keybytes=He._crypto_aead_chacha20poly1305_ietf_keybytes,B._crypto_aead_chacha20poly1305_ietf_encrypt_detached=He._crypto_aead_chacha20poly1305_ietf_encrypt_detached,B._crypto_scalarmult_base=He._crypto_scalarmult_base,B._crypto_aead_chacha20poly1305_abytes=He._crypto_aead_chacha20poly1305_abytes,B._crypto_core_hchacha20_outputbytes=He._crypto_core_hchacha20_outputbytes,B._crypto_auth_bytes=He._crypto_auth_bytes,B._crypto_sign_statebytes=He._crypto_sign_statebytes,B._crypto_sign_open=He._crypto_sign_open,B._crypto_aead_chacha20poly1305_decrypt_detached=He._crypto_aead_chacha20poly1305_decrypt_detached,B._sbrk=He._sbrk),Ve=B._memcpy=He._memcpy,Ge=(B._crypto_kdf_bytes_max=He._crypto_kdf_bytes_max,B._crypto_kdf_bytes_min=He._crypto_kdf_bytes_min,B._crypto_box_seed_keypair=He._crypto_box_seed_keypair,B.stackAlloc=He.stackAlloc,B._crypto_box_open_easy_afternm=He._crypto_box_open_easy_afternm,B._crypto_sign_ed25519_sk_to_curve25519=He._crypto_sign_ed25519_sk_to_curve25519,B._emscripten_get_global_libc=He._emscripten_get_global_libc,B._free=He._free),Ye=(B._crypto_aead_chacha20poly1305_keybytes=He._crypto_aead_chacha20poly1305_keybytes,B.stackSave=He.stackSave,B._crypto_box_seal=He._crypto_box_seal,B._crypto_aead_xchacha20poly1305_ietf_keygen=He._crypto_aead_xchacha20poly1305_ietf_keygen,B._crypto_kx_keypair=He._crypto_kx_keypair,B.runPostSets=He.runPostSets,B._crypto_kx_client_session_keys=He._crypto_kx_client_session_keys,B._crypto_generichash_bytes_min=He._crypto_generichash_bytes_min,B._crypto_shorthash=He._crypto_shorthash,B._crypto_auth_keybytes=He._crypto_auth_keybytes,B._crypto_aead_chacha20poly1305_npubbytes=He._crypto_aead_chacha20poly1305_npubbytes,B._crypto_aead_xchacha20poly1305_ietf_abytes=He._crypto_aead_xchacha20poly1305_ietf_abytes,B._crypto_sign_seedbytes=He._crypto_sign_seedbytes,B._crypto_box_detached_afternm=He._crypto_box_detached_afternm,B._crypto_auth=He._crypto_auth,B._randombytes_random=He._randombytes_random,B._crypto_sign_keypair=He._crypto_sign_keypair,B._crypto_generichash_keybytes_min=He._crypto_generichash_keybytes_min,B._crypto_generichash_statebytes=He._crypto_generichash_statebytes,B._randombytes_buf_deterministic=He._randombytes_buf_deterministic,B._crypto_aead_chacha20poly1305_encrypt_detached=He._crypto_aead_chacha20poly1305_encrypt_detached,B._sodium_library_version_major=He._sodium_library_version_major,B._crypto_sign_final_verify=He._crypto_sign_final_verify,B._crypto_secretbox_keygen=He._crypto_secretbox_keygen,B._sodium_version_string=He._sodium_version_string,B._crypto_generichash_keybytes_max=He._crypto_generichash_keybytes_max,B._crypto_sign_ed25519_pk_to_curve25519=He._crypto_sign_ed25519_pk_to_curve25519,B._crypto_aead_chacha20poly1305_nsecbytes=He._crypto_aead_chacha20poly1305_nsecbytes,B._crypto_box_beforenmbytes=He._crypto_box_beforenmbytes,B._crypto_generichash=He._crypto_generichash,B.getTempRet0=He.getTempRet0,B._crypto_aead_chacha20poly1305_ietf_nsecbytes=He._crypto_aead_chacha20poly1305_ietf_nsecbytes,B._randombytes_stir=He._randombytes_stir,B._crypto_aead_chacha20poly1305_ietf_encrypt=He._crypto_aead_chacha20poly1305_ietf_encrypt,B._crypto_core_hchacha20=He._crypto_core_hchacha20,B._crypto_box_beforenm=He._crypto_box_beforenm,B._crypto_aead_chacha20poly1305_ietf_decrypt=He._crypto_aead_chacha20poly1305_ietf_decrypt,B._randombytes_close=He._randombytes_close,B._crypto_kx_server_session_keys=He._crypto_kx_server_session_keys,B._crypto_core_hchacha20_constbytes=He._crypto_core_hchacha20_constbytes,B._crypto_pwhash_bytes_min=He._crypto_pwhash_bytes_min,B._crypto_shorthash_bytes=He._crypto_shorthash_bytes,B._crypto_kdf_keybytes=He._crypto_kdf_keybytes,B.setThrew=He.setThrew,B.establishStackSpace=He.establishStackSpace,B._crypto_sign_final_create=He._crypto_sign_final_create,B._crypto_aead_chacha20poly1305_encrypt=He._crypto_aead_chacha20poly1305_encrypt,B._crypto_box_keypair=He._crypto_box_keypair,B._crypto_aead_xchacha20poly1305_ietf_encrypt=He._crypto_aead_xchacha20poly1305_ietf_encrypt,B._crypto_kx_secretkeybytes=He._crypto_kx_secretkeybytes,B._crypto_box_detached=He._crypto_box_detached,B._randombytes_buf=He._randombytes_buf,B._bitshift64Ashr=He._bitshift64Ashr),Je=(B._crypto_generichash_init=He._crypto_generichash_init,B._crypto_box_open_detached=He._crypto_box_open_detached,B._crypto_scalarmult_bytes=He._crypto_scalarmult_bytes,B._crypto_pwhash_opslimit_max=He._crypto_pwhash_opslimit_max,B._crypto_kx_seedbytes=He._crypto_kx_seedbytes,B._crypto_auth_verify=He._crypto_auth_verify,B._crypto_box_seal_open=He._crypto_box_seal_open,B._crypto_pwhash_memlimit_max=He._crypto_pwhash_memlimit_max,B._crypto_secretbox_detached=He._crypto_secretbox_detached,B._crypto_secretbox_easy=He._crypto_secretbox_easy,B._crypto_aead_xchacha20poly1305_ietf_decrypt_detached=He._crypto_aead_xchacha20poly1305_ietf_decrypt_detached,B._crypto_pwhash_passwd_max=He._crypto_pwhash_passwd_max,B._memset=He._memset),Ke=(B._crypto_generichash_keygen=He._crypto_generichash_keygen,B._crypto_box_open_detached_afternm=He._crypto_box_open_detached_afternm,B._sodium_bin2hex=He._sodium_bin2hex,B._crypto_aead_xchacha20poly1305_ietf_decrypt=He._crypto_aead_xchacha20poly1305_ietf_decrypt,B._crypto_aead_chacha20poly1305_ietf_keygen=He._crypto_aead_chacha20poly1305_ietf_keygen,B._crypto_box_seedbytes=He._crypto_box_seedbytes,B._crypto_core_hchacha20_inputbytes=He._crypto_core_hchacha20_inputbytes,B._crypto_auth_keygen=He._crypto_auth_keygen,B._crypto_hash=He._crypto_hash,B._sodium_library_minimal=He._sodium_library_minimal,B._crypto_box_easy_afternm=He._crypto_box_easy_afternm,B._crypto_aead_xchacha20poly1305_ietf_encrypt_detached=He._crypto_aead_xchacha20poly1305_ietf_encrypt_detached,B._crypto_box_macbytes=He._crypto_box_macbytes,B._randombytes_seedbytes=He._randombytes_seedbytes,B._crypto_box_publickeybytes=He._crypto_box_publickeybytes,B._crypto_box_sealbytes=He._crypto_box_sealbytes,B._crypto_sign_secretkeybytes=He._crypto_sign_secretkeybytes,B._crypto_box_secretkeybytes=He._crypto_box_secretkeybytes,B.___muldsi3=He.___muldsi3),Xe=(B._crypto_aead_xchacha20poly1305_ietf_keybytes=He._crypto_aead_xchacha20poly1305_ietf_keybytes,B._crypto_scalarmult_scalarbytes=He._crypto_scalarmult_scalarbytes,B._crypto_shorthash_keybytes=He._crypto_shorthash_keybytes,B._crypto_aead_chacha20poly1305_keygen=He._crypto_aead_chacha20poly1305_keygen,B._crypto_kx_sessionkeybytes=He._crypto_kx_sessionkeybytes,B._malloc=He._malloc),Ze=(B._crypto_aead_chacha20poly1305_decrypt=He._crypto_aead_chacha20poly1305_decrypt,B._emscripten_replace_memory=He._emscripten_replace_memory),Qe=(B._crypto_secretbox_open_easy=He._crypto_secretbox_open_easy,B._crypto_aead_chacha20poly1305_ietf_decrypt_detached=He._crypto_aead_chacha20poly1305_ietf_decrypt_detached,B._crypto_sign=He._crypto_sign,B._crypto_secretbox_noncebytes=He._crypto_secretbox_noncebytes,B._crypto_pwhash_passwd_min=He._crypto_pwhash_passwd_min,B._i64Subtract=He._i64Subtract),$e=(B._crypto_generichash_keybytes=He._crypto_generichash_keybytes,B._sodium_hex2bin=He._sodium_hex2bin,B._sodium_init=He._sodium_init,B._crypto_secretbox_macbytes=He._crypto_secretbox_macbytes,B._crypto_secretbox_keybytes=He._crypto_secretbox_keybytes,B._crypto_aead_xchacha20poly1305_ietf_npubbytes=He._crypto_aead_xchacha20poly1305_ietf_npubbytes,B._randombytes=He._randombytes,B._crypto_sign_publickeybytes=He._crypto_sign_publickeybytes,B._crypto_sign_update=He._crypto_sign_update,B._fflush=He._fflush,B.setTempRet0=He.setTempRet0,B._crypto_generichash_bytes=He._crypto_generichash_bytes,B._crypto_generichash_bytes_max=He._crypto_generichash_bytes_max,B._crypto_secretbox_open_detached=He._crypto_secretbox_open_detached,B._crypto_sign_init=He._crypto_sign_init,B._crypto_core_hchacha20_keybytes=He._crypto_core_hchacha20_keybytes,B.___muldi3=He.___muldi3),et=B._bitshift64Shl=He._bitshift64Shl,tt=(B._crypto_sign_verify_detached=He._crypto_sign_verify_detached,B._crypto_kx_seed_keypair=He._crypto_kx_seed_keypair,B._crypto_box_open_easy=He._crypto_box_open_easy,B._crypto_hash_bytes=He._crypto_hash_bytes,B._i64Add=He._i64Add),rt=(B._crypto_kdf_contextbytes=He._crypto_kdf_contextbytes,B._crypto_sign_bytes=He._crypto_sign_bytes,B._crypto_generichash_update=He._crypto_generichash_update,B._crypto_scalarmult=He._crypto_scalarmult,B._crypto_aead_chacha20poly1305_ietf_abytes=He._crypto_aead_chacha20poly1305_ietf_abytes,B.stackRestore=He.stackRestore,B._crypto_kdf_keygen=He._crypto_kdf_keygen,B._crypto_aead_xchacha20poly1305_ietf_nsecbytes=He._crypto_aead_xchacha20poly1305_ietf_nsecbytes,B._crypto_sign_detached=He._crypto_sign_detached,B._crypto_box_easy=He._crypto_box_easy,B.___errno_location=He.___errno_location,B._memmove=He._memmove);B._crypto_generichash_final=He._crypto_generichash_final,B._crypto_stream_keygen=He._crypto_stream_keygen,B._randombytes_uniform=He._randombytes_uniform,B._crypto_sign_seed_keypair=He._crypto_sign_seed_keypair,B._crypto_kdf_derive_from_key=He._crypto_kdf_derive_from_key,B._crypto_shorthash_keygen=He._crypto_shorthash_keygen,B._crypto_pwhash_opslimit_min=He._crypto_pwhash_opslimit_min,B._crypto_pwhash_memlimit_min=He._crypto_pwhash_memlimit_min,B._crypto_aead_chacha20poly1305_ietf_npubbytes=He._crypto_aead_chacha20poly1305_ietf_npubbytes,B.dynCall_ii=He.dynCall_ii,B.dynCall_iiii=He.dynCall_iiii;if(Y.stackAlloc=B.stackAlloc,Y.stackSave=B.stackSave,Y.stackRestore=B.stackRestore,Y.establishStackSpace=B.establishStackSpace,Y.setTempRet0=B.setTempRet0,Y.getTempRet0=B.getTempRet0,B.asm=He,Be)if("function"==typeof B.locateFile?Be=B.locateFile(Be):B.memoryInitializerPrefixURL&&(Be=B.memoryInitializerPrefixURL+Be),j||q){var nt=B.readBinary(Be);ne.set(nt,Y.GLOBAL_BASE)}else{I("memory initializer");var at=function(e){e.byteLength&&(e=new Uint8Array(e)),ne.set(e,Y.GLOBAL_BASE),B.memoryInitializerRequest&&delete B.memoryInitializerRequest.response,O("memory initializer")};function ot(){B.readAsync(Be,at,function(){throw"could not load memory initializer "+Be})}if(B.memoryInitializerRequest){function _t(){var e=B.memoryInitializerRequest;200===e.status||0===e.status?at(e.response):ot()}B.memoryInitializerRequest.response?setTimeout(_t,0):B.memoryInitializerRequest.addEventListener("load",_t)}else ot()}N.prototype=new Error,N.prototype.constructor=N;var it,ct=null,st=!1;Ue=function e(){B.calledRun||P(),B.calledRun||(Ue=e)},B.callMain=B.callMain=function(e){function t(){for(var e=0;e<3;e++)n.push(0)}e=e||[],A();var r=e.length+1,n=[_(S(B.thisProgram),"i8",0)];t();for(var a=0;a<r-1;a+=1)n.push(_(S(e[a]),"i8",0)),t();n.push(0),n=_(n,"i32",0);try{F(B._main(r,n,0),!0)}catch(e){if(e instanceof N)return;if("SimulateInfiniteLoop"==e)return void(B.noExitRuntime=!0);var o=e;e&&"object"==typeof e&&e.stack&&(o=[e,e.stack]),B.printErr("exception thrown: "+o),B.quit(1,e)}finally{st=!0}},B.run=B.run=P,B.exit=B.exit=F;var yt=[];if(B.abort=B.abort=U,B.preInit)for("function"==typeof B.preInit&&(B.preInit=[B.preInit]);B.preInit.length>0;)B.preInit.pop()();var ut=!0;return B.noInitialRun&&(ut=!1),P(),j&&process.removeAllListeners("uncaughtException"),B}"function"==typeof define&&define.amd?define(["exports"],t):"object"==typeof exports&&"string"!=typeof exports.nodeName?t(exports):e.libsodium=t(e.libsodium_mod||(e.commonJsStrict={}))}(this);
