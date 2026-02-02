function Lm(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function _m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zd={exports:{}},Di={},Id={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),Nm=Symbol.for("react.portal"),Rm=Symbol.for("react.fragment"),$m=Symbol.for("react.strict_mode"),Om=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),Am=Symbol.for("react.context"),Fm=Symbol.for("react.forward_ref"),Bm=Symbol.for("react.suspense"),Dm=Symbol.for("react.memo"),Um=Symbol.for("react.lazy"),yu=Symbol.iterator;function Hm(e){return e===null||typeof e!="object"?null:(e=yu&&e[yu]||e["@@iterator"],typeof e=="function"?e:null)}var Td={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ld=Object.assign,_d={};function pr(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Td}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nd(){}Nd.prototype=pr.prototype;function cs(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Td}var ds=cs.prototype=new Nd;ds.constructor=cs;Ld(ds,pr.prototype);ds.isPureReactComponent=!0;var wu=Array.isArray,Rd=Object.prototype.hasOwnProperty,fs={current:null},$d={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)Rd.call(t,r)&&!$d.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:mo,type:e,key:i,ref:a,props:o,_owner:fs.current}}function Wm(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ps(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function Vm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Su=/\/+/g;function ha(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Vm(""+e.key):t.toString(36)}function Go(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case mo:case Nm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+ha(a,0):r,wu(o)?(n="",e!=null&&(n=e.replace(Su,"$&/")+"/"),Go(o,t,n,"",function(c){return c})):o!=null&&(ps(o)&&(o=Wm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(Su,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",wu(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+ha(i,s);a+=Go(i,t,n,u,o)}else if(u=Hm(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+ha(i,s++),a+=Go(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Co(e,t,n){if(e==null)return e;var r=[],o=0;return Go(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Gm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},qo={transition:null},qm={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:qo,ReactCurrentOwner:fs};function Md(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Co,forEach:function(e,t,n){Co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Co(e,function(){t++}),t},toArray:function(e){return Co(e,function(t){return t})||[]},only:function(e){if(!ps(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=pr;M.Fragment=Rm;M.Profiler=Om;M.PureComponent=cs;M.StrictMode=$m;M.Suspense=Bm;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qm;M.act=Md;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ld({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=fs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Rd.call(t,u)&&!$d.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:mo,type:e.type,key:o,ref:i,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:Am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Mm,_context:e},e.Consumer=e};M.createElement=Od;M.createFactory=function(e){var t=Od.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:Fm,render:e}};M.isValidElement=ps;M.lazy=function(e){return{$$typeof:Um,_payload:{_status:-1,_result:e},_init:Gm}};M.memo=function(e,t){return{$$typeof:Dm,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=qo.transition;qo.transition={};try{e()}finally{qo.transition=t}};M.unstable_act=Md;M.useCallback=function(e,t){return be.current.useCallback(e,t)};M.useContext=function(e){return be.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return be.current.useDeferredValue(e)};M.useEffect=function(e,t){return be.current.useEffect(e,t)};M.useId=function(){return be.current.useId()};M.useImperativeHandle=function(e,t,n){return be.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return be.current.useMemo(e,t)};M.useReducer=function(e,t,n){return be.current.useReducer(e,t,n)};M.useRef=function(e){return be.current.useRef(e)};M.useState=function(e){return be.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return be.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return be.current.useTransition()};M.version="18.3.1";Id.exports=M;var S=Id.exports;const pe=_m(S),Qm=Lm({__proto__:null,default:pe},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym=S,Km=Symbol.for("react.element"),Xm=Symbol.for("react.fragment"),Jm=Object.prototype.hasOwnProperty,Zm=Ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eh={key:!0,ref:!0,__self:!0,__source:!0};function Ad(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Jm.call(t,r)&&!eh.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Km,type:e,key:i,ref:a,props:o,_owner:Zm.current}}Di.Fragment=Xm;Di.jsx=Ad;Di.jsxs=Ad;zd.exports=Di;var l=zd.exports,tl={},Fd={exports:{}},He={},Bd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var $=T.length;T.push(R);e:for(;0<$;){var H=$-1>>>1,W=T[H];if(0<o(W,R))T[H]=R,T[$]=W,$=H;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],$=T.pop();if($!==R){T[0]=$;e:for(var H=0,W=T.length,an=W>>>1;H<an;){var et=2*(H+1)-1,En=T[et],tt=et+1,ln=T[tt];if(0>o(En,$))tt<W&&0>o(ln,En)?(T[H]=ln,T[tt]=$,H=tt):(T[H]=En,T[et]=$,H=et);else if(tt<W&&0>o(ln,$))T[H]=ln,T[tt]=$,H=tt;else break e}}return R}function o(T,R){var $=T.sortIndex-R.sortIndex;return $!==0?$:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],g=1,p=null,x=3,y=!1,k=!1,j=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=T)r(c),R.sortIndex=R.expirationTime,t(u,R);else break;R=n(c)}}function v(T){if(j=!1,m(T),!k)if(n(u)!==null)k=!0,ge(E);else{var R=n(c);R!==null&&Pe(v,R.startTime-T)}}function E(T,R){k=!1,j&&(j=!1,h(z),z=-1),y=!0;var $=x;try{for(m(R),p=n(u);p!==null&&(!(p.expirationTime>R)||T&&!B());){var H=p.callback;if(typeof H=="function"){p.callback=null,x=p.priorityLevel;var W=H(p.expirationTime<=R);R=e.unstable_now(),typeof W=="function"?p.callback=W:p===n(u)&&r(u),m(R)}else r(u);p=n(u)}if(p!==null)var an=!0;else{var et=n(c);et!==null&&Pe(v,et.startTime-R),an=!1}return an}finally{p=null,x=$,y=!1}}var b=!1,w=null,z=-1,N=5,I=-1;function B(){return!(e.unstable_now()-I<N)}function ee(){if(w!==null){var T=e.unstable_now();I=T;var R=!0;try{R=w(!0,T)}finally{R?ue():(b=!1,w=null)}}else b=!1}var ue;if(typeof f=="function")ue=function(){f(ee)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,$e=L.port2;L.port1.onmessage=ee,ue=function(){$e.postMessage(null)}}else ue=function(){C(ee,0)};function ge(T){w=T,b||(b=!0,ue())}function Pe(T,R){z=C(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,ge(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(T){switch(x){case 1:case 2:case 3:var R=3;break;default:R=x}var $=x;x=R;try{return T()}finally{x=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var $=x;x=T;try{return R()}finally{x=$}},e.unstable_scheduleCallback=function(T,R,$){var H=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?H+$:H):$=H,T){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=$+W,T={id:g++,callback:R,priorityLevel:T,startTime:$,expirationTime:W,sortIndex:-1},$>H?(T.sortIndex=$,t(c,T),n(u)===null&&T===n(c)&&(j?(h(z),z=-1):j=!0,Pe(v,$-H))):(T.sortIndex=W,t(u,T),k||y||(k=!0,ge(E))),T},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(T){var R=x;return function(){var $=x;x=R;try{return T.apply(this,arguments)}finally{x=$}}}})(Dd);Bd.exports=Dd;var th=Bd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh=S,Ue=th;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ud=new Set,Gr={};function kn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Gr[e]=t,e=0;e<t.length;e++)Ud.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nl=Object.prototype.hasOwnProperty,rh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ku={},ju={};function oh(e){return nl.call(ju,e)?!0:nl.call(ku,e)?!1:rh.test(e)?ju[e]=!0:(ku[e]=!0,!1)}function ih(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ah(e,t,n,r){if(t===null||typeof t>"u"||ih(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var ms=/[\-:]([a-z])/g;function hs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ms,hs);he[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ms,hs);he[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ms,hs);he[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function gs(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ah(t,n,o,r)&&(n=null),r||o===null?oh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var zt=nh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bo=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),Rn=Symbol.for("react.fragment"),xs=Symbol.for("react.strict_mode"),rl=Symbol.for("react.profiler"),Hd=Symbol.for("react.provider"),Wd=Symbol.for("react.context"),vs=Symbol.for("react.forward_ref"),ol=Symbol.for("react.suspense"),il=Symbol.for("react.suspense_list"),ys=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),Vd=Symbol.for("react.offscreen"),Cu=Symbol.iterator;function wr(e){return e===null||typeof e!="object"?null:(e=Cu&&e[Cu]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,ga;function Lr(e){if(ga===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ga=t&&t[1]||""}return`
`+ga+e}var xa=!1;function va(e,t){if(!e||xa)return"";xa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var u=`
`+o[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{xa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Lr(e):""}function lh(e){switch(e.tag){case 5:return Lr(e.type);case 16:return Lr("Lazy");case 13:return Lr("Suspense");case 19:return Lr("SuspenseList");case 0:case 2:case 15:return e=va(e.type,!1),e;case 11:return e=va(e.type.render,!1),e;case 1:return e=va(e.type,!0),e;default:return""}}function al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Rn:return"Fragment";case Nn:return"Portal";case rl:return"Profiler";case xs:return"StrictMode";case ol:return"Suspense";case il:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wd:return(e.displayName||"Context")+".Consumer";case Hd:return(e._context.displayName||"Context")+".Provider";case vs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ys:return t=e.displayName||null,t!==null?t:al(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return al(e(t))}catch{}}return null}function sh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return al(t);case 8:return t===xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function uh(e){var t=Gd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Eo(e){e._valueTracker||(e._valueTracker=uh(e))}function qd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ll(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function bu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Qd(e,t){t=t.checked,t!=null&&gs(e,"checked",t,!1)}function sl(e,t){Qd(e,t);var n=Jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ul(e,t.type,n):t.hasOwnProperty("defaultValue")&&ul(e,t.type,Jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ul(e,t,n){(t!=="number"||ui(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _r=Array.isArray;function Qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function cl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Pu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(_r(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Jt(n)}}function Yd(e,t){var n=Jt(t.value),r=Jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Kd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Kd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Po,Xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Or={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ch=["Webkit","ms","Moz","O"];Object.keys(Or).forEach(function(e){ch.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Or[t]=Or[e]})});function Jd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Or.hasOwnProperty(e)&&Or[e]?(""+t).trim():t+"px"}function Zd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Jd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var dh=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fl(e,t){if(t){if(dh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function pl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ml=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hl=null,Yn=null,Kn=null;function Iu(e){if(e=xo(e)){if(typeof hl!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Gi(t),hl(e.stateNode,e.type,t))}}function ef(e){Yn?Kn?Kn.push(e):Kn=[e]:Yn=e}function tf(){if(Yn){var e=Yn,t=Kn;if(Kn=Yn=null,Iu(e),t)for(e=0;e<t.length;e++)Iu(t[e])}}function nf(e,t){return e(t)}function rf(){}var ya=!1;function of(e,t,n){if(ya)return e(t,n);ya=!0;try{return nf(e,t,n)}finally{ya=!1,(Yn!==null||Kn!==null)&&(rf(),tf())}}function Qr(e,t){var n=e.stateNode;if(n===null)return null;var r=Gi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var gl=!1;if(Ct)try{var Sr={};Object.defineProperty(Sr,"passive",{get:function(){gl=!0}}),window.addEventListener("test",Sr,Sr),window.removeEventListener("test",Sr,Sr)}catch{gl=!1}function fh(e,t,n,r,o,i,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var Mr=!1,ci=null,di=!1,xl=null,ph={onError:function(e){Mr=!0,ci=e}};function mh(e,t,n,r,o,i,a,s,u){Mr=!1,ci=null,fh.apply(ph,arguments)}function hh(e,t,n,r,o,i,a,s,u){if(mh.apply(this,arguments),Mr){if(Mr){var c=ci;Mr=!1,ci=null}else throw Error(P(198));di||(di=!0,xl=c)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function af(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tu(e){if(jn(e)!==e)throw Error(P(188))}function gh(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Tu(o),e;if(i===r)return Tu(o),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,s=o.child;s;){if(s===n){a=!0,n=o,r=i;break}if(s===r){a=!0,r=o,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=o;break}if(s===r){a=!0,r=i,n=o;break}s=s.sibling}if(!a)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function lf(e){return e=gh(e),e!==null?sf(e):null}function sf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=sf(e);if(t!==null)return t;e=e.sibling}return null}var uf=Ue.unstable_scheduleCallback,Lu=Ue.unstable_cancelCallback,xh=Ue.unstable_shouldYield,vh=Ue.unstable_requestPaint,ne=Ue.unstable_now,yh=Ue.unstable_getCurrentPriorityLevel,Ss=Ue.unstable_ImmediatePriority,cf=Ue.unstable_UserBlockingPriority,fi=Ue.unstable_NormalPriority,wh=Ue.unstable_LowPriority,df=Ue.unstable_IdlePriority,Ui=null,mt=null;function Sh(e){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Ui,e,void 0,(e.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Ch,kh=Math.log,jh=Math.LN2;function Ch(e){return e>>>=0,e===0?32:31-(kh(e)/jh|0)|0}var zo=64,Io=4194304;function Nr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~o;s!==0?r=Nr(s):(i&=a,i!==0&&(r=Nr(i)))}else a=n&~o,a!==0?r=Nr(a):i!==0&&(r=Nr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-lt(t),o=1<<n,r|=e[n],t&=~o;return r}function bh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-lt(i),s=1<<a,u=o[a];u===-1?(!(s&n)||s&r)&&(o[a]=bh(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function vl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ff(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function wa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ho(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-lt(t),e[t]=n}function Ph(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-lt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var U=0;function pf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mf,js,hf,gf,xf,yl=!1,To=[],Ut=null,Ht=null,Wt=null,Yr=new Map,Kr=new Map,Ot=[],zh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _u(e,t){switch(e){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kr.delete(t.pointerId)}}function kr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=xo(t),t!==null&&js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ih(e,t,n,r,o){switch(t){case"focusin":return Ut=kr(Ut,e,t,n,r,o),!0;case"dragenter":return Ht=kr(Ht,e,t,n,r,o),!0;case"mouseover":return Wt=kr(Wt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Yr.set(i,kr(Yr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Kr.set(i,kr(Kr.get(i)||null,e,t,n,r,o)),!0}return!1}function vf(e){var t=cn(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=af(n),t!==null){e.blockedOn=t,xf(e.priority,function(){hf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ml=r,n.target.dispatchEvent(r),ml=null}else return t=xo(n),t!==null&&js(t),e.blockedOn=n,!1;t.shift()}return!0}function Nu(e,t,n){Qo(e)&&n.delete(t)}function Th(){yl=!1,Ut!==null&&Qo(Ut)&&(Ut=null),Ht!==null&&Qo(Ht)&&(Ht=null),Wt!==null&&Qo(Wt)&&(Wt=null),Yr.forEach(Nu),Kr.forEach(Nu)}function jr(e,t){e.blockedOn===t&&(e.blockedOn=null,yl||(yl=!0,Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority,Th)))}function Xr(e){function t(o){return jr(o,e)}if(0<To.length){jr(To[0],e);for(var n=1;n<To.length;n++){var r=To[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ut!==null&&jr(Ut,e),Ht!==null&&jr(Ht,e),Wt!==null&&jr(Wt,e),Yr.forEach(t),Kr.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)vf(n),n.blockedOn===null&&Ot.shift()}var Xn=zt.ReactCurrentBatchConfig,mi=!0;function Lh(e,t,n,r){var o=U,i=Xn.transition;Xn.transition=null;try{U=1,Cs(e,t,n,r)}finally{U=o,Xn.transition=i}}function _h(e,t,n,r){var o=U,i=Xn.transition;Xn.transition=null;try{U=4,Cs(e,t,n,r)}finally{U=o,Xn.transition=i}}function Cs(e,t,n,r){if(mi){var o=wl(e,t,n,r);if(o===null)Ta(e,t,r,hi,n),_u(e,r);else if(Ih(o,e,t,n,r))r.stopPropagation();else if(_u(e,r),t&4&&-1<zh.indexOf(e)){for(;o!==null;){var i=xo(o);if(i!==null&&mf(i),i=wl(e,t,n,r),i===null&&Ta(e,t,r,hi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ta(e,t,r,null,n)}}var hi=null;function wl(e,t,n,r){if(hi=null,e=ws(r),e=cn(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=af(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hi=e,null}function yf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yh()){case Ss:return 1;case cf:return 4;case fi:case wh:return 16;case df:return 536870912;default:return 16}default:return 16}}var At=null,bs=null,Yo=null;function wf(){if(Yo)return Yo;var e,t=bs,n=t.length,r,o="value"in At?At.value:At.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Yo=o.slice(e,1<r?1-r:void 0)}function Ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lo(){return!0}function Ru(){return!1}function We(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lo:Ru,this.isPropagationStopped=Ru,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),t}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=We(mr),go=Z({},mr,{view:0,detail:0}),Nh=We(go),Sa,ka,Cr,Hi=Z({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ps,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Cr&&(Cr&&e.type==="mousemove"?(Sa=e.screenX-Cr.screenX,ka=e.screenY-Cr.screenY):ka=Sa=0,Cr=e),Sa)},movementY:function(e){return"movementY"in e?e.movementY:ka}}),$u=We(Hi),Rh=Z({},Hi,{dataTransfer:0}),$h=We(Rh),Oh=Z({},go,{relatedTarget:0}),ja=We(Oh),Mh=Z({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ah=We(Mh),Fh=Z({},mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bh=We(Fh),Dh=Z({},mr,{data:0}),Ou=We(Dh),Uh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wh[e])?!!t[e]:!1}function Ps(){return Vh}var Gh=Z({},go,{key:function(e){if(e.key){var t=Uh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ps,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qh=We(Gh),Qh=Z({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mu=We(Qh),Yh=Z({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ps}),Kh=We(Yh),Xh=Z({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jh=We(Xh),Zh=Z({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eg=We(Zh),tg=[9,13,27,32],zs=Ct&&"CompositionEvent"in window,Ar=null;Ct&&"documentMode"in document&&(Ar=document.documentMode);var ng=Ct&&"TextEvent"in window&&!Ar,Sf=Ct&&(!zs||Ar&&8<Ar&&11>=Ar),Au=" ",Fu=!1;function kf(e,t){switch(e){case"keyup":return tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function rg(e,t){switch(e){case"compositionend":return jf(t);case"keypress":return t.which!==32?null:(Fu=!0,Au);case"textInput":return e=t.data,e===Au&&Fu?null:e;default:return null}}function og(e,t){if($n)return e==="compositionend"||!zs&&kf(e,t)?(e=wf(),Yo=bs=At=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ig[e.type]:t==="textarea"}function Cf(e,t,n,r){ef(r),t=gi(t,"onChange"),0<t.length&&(n=new Es("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Fr=null,Jr=null;function ag(e){$f(e,0)}function Wi(e){var t=An(e);if(qd(t))return e}function lg(e,t){if(e==="change")return t}var bf=!1;if(Ct){var Ca;if(Ct){var ba="oninput"in document;if(!ba){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),ba=typeof Du.oninput=="function"}Ca=ba}else Ca=!1;bf=Ca&&(!document.documentMode||9<document.documentMode)}function Uu(){Fr&&(Fr.detachEvent("onpropertychange",Ef),Jr=Fr=null)}function Ef(e){if(e.propertyName==="value"&&Wi(Jr)){var t=[];Cf(t,Jr,e,ws(e)),of(ag,t)}}function sg(e,t,n){e==="focusin"?(Uu(),Fr=t,Jr=n,Fr.attachEvent("onpropertychange",Ef)):e==="focusout"&&Uu()}function ug(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(Jr)}function cg(e,t){if(e==="click")return Wi(t)}function dg(e,t){if(e==="input"||e==="change")return Wi(t)}function fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ct=typeof Object.is=="function"?Object.is:fg;function Zr(e,t){if(ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!nl.call(t,o)||!ct(e[o],t[o]))return!1}return!0}function Hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wu(e,t){var n=Hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hu(n)}}function Pf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zf(){for(var e=window,t=ui();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ui(e.document)}return t}function Is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function pg(e){var t=zf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pf(n.ownerDocument.documentElement,n)){if(r!==null&&Is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Wu(n,i);var a=Wu(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mg=Ct&&"documentMode"in document&&11>=document.documentMode,On=null,Sl=null,Br=null,kl=!1;function Vu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kl||On==null||On!==ui(r)||(r=On,"selectionStart"in r&&Is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&Zr(Br,r)||(Br=r,r=gi(Sl,"onSelect"),0<r.length&&(t=new Es("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function _o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Ea={},If={};Ct&&(If=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function Vi(e){if(Ea[e])return Ea[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in If)return Ea[e]=t[n];return e}var Tf=Vi("animationend"),Lf=Vi("animationiteration"),_f=Vi("animationstart"),Nf=Vi("transitionend"),Rf=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){Rf.set(e,t),kn(t,[e])}for(var Pa=0;Pa<Gu.length;Pa++){var za=Gu[Pa],hg=za.toLowerCase(),gg=za[0].toUpperCase()+za.slice(1);en(hg,"on"+gg)}en(Tf,"onAnimationEnd");en(Lf,"onAnimationIteration");en(_f,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(Nf,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kn("onBeforeInput",["compositionend","keypress","textInput","paste"]);kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function qu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hh(r,t,void 0,e),e.currentTarget=null}function $f(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;qu(o,s,c),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;qu(o,s,c),i=u}}}if(di)throw e=xl,di=!1,xl=null,e}function G(e,t){var n=t[Pl];n===void 0&&(n=t[Pl]=new Set);var r=e+"__bubble";n.has(r)||(Of(t,e,2,!1),n.add(r))}function Ia(e,t,n){var r=0;t&&(r|=4),Of(n,e,r,t)}var No="_reactListening"+Math.random().toString(36).slice(2);function eo(e){if(!e[No]){e[No]=!0,Ud.forEach(function(n){n!=="selectionchange"&&(xg.has(n)||Ia(n,!1,e),Ia(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[No]||(t[No]=!0,Ia("selectionchange",!1,t))}}function Of(e,t,n,r){switch(yf(t)){case 1:var o=Lh;break;case 4:o=_h;break;default:o=Cs}n=o.bind(null,t,n,e),o=void 0,!gl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ta(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;a=a.return}for(;s!==null;){if(a=cn(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}of(function(){var c=i,g=ws(n),p=[];e:{var x=Rf.get(e);if(x!==void 0){var y=Es,k=e;switch(e){case"keypress":if(Ko(n)===0)break e;case"keydown":case"keyup":y=qh;break;case"focusin":k="focus",y=ja;break;case"focusout":k="blur",y=ja;break;case"beforeblur":case"afterblur":y=ja;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=$u;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=$h;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Kh;break;case Tf:case Lf:case _f:y=Ah;break;case Nf:y=Jh;break;case"scroll":y=Nh;break;case"wheel":y=eg;break;case"copy":case"cut":case"paste":y=Bh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Mu}var j=(t&4)!==0,C=!j&&e==="scroll",h=j?x!==null?x+"Capture":null:x;j=[];for(var f=c,m;f!==null;){m=f;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,h!==null&&(v=Qr(f,h),v!=null&&j.push(to(f,v,m)))),C)break;f=f.return}0<j.length&&(x=new y(x,k,null,n,g),p.push({event:x,listeners:j}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",x&&n!==ml&&(k=n.relatedTarget||n.fromElement)&&(cn(k)||k[bt]))break e;if((y||x)&&(x=g.window===g?g:(x=g.ownerDocument)?x.defaultView||x.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=c,k=k?cn(k):null,k!==null&&(C=jn(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=c),y!==k)){if(j=$u,v="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(j=Mu,v="onPointerLeave",h="onPointerEnter",f="pointer"),C=y==null?x:An(y),m=k==null?x:An(k),x=new j(v,f+"leave",y,n,g),x.target=C,x.relatedTarget=m,v=null,cn(g)===c&&(j=new j(h,f+"enter",k,n,g),j.target=m,j.relatedTarget=C,v=j),C=v,y&&k)t:{for(j=y,h=k,f=0,m=j;m;m=In(m))f++;for(m=0,v=h;v;v=In(v))m++;for(;0<f-m;)j=In(j),f--;for(;0<m-f;)h=In(h),m--;for(;f--;){if(j===h||h!==null&&j===h.alternate)break t;j=In(j),h=In(h)}j=null}else j=null;y!==null&&Qu(p,x,y,j,!1),k!==null&&C!==null&&Qu(p,C,k,j,!0)}}e:{if(x=c?An(c):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var E=lg;else if(Bu(x))if(bf)E=dg;else{E=ug;var b=sg}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(E=cg);if(E&&(E=E(e,c))){Cf(p,E,n,g);break e}b&&b(e,x,c),e==="focusout"&&(b=x._wrapperState)&&b.controlled&&x.type==="number"&&ul(x,"number",x.value)}switch(b=c?An(c):window,e){case"focusin":(Bu(b)||b.contentEditable==="true")&&(On=b,Sl=c,Br=null);break;case"focusout":Br=Sl=On=null;break;case"mousedown":kl=!0;break;case"contextmenu":case"mouseup":case"dragend":kl=!1,Vu(p,n,g);break;case"selectionchange":if(mg)break;case"keydown":case"keyup":Vu(p,n,g)}var w;if(zs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else $n?kf(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Sf&&n.locale!=="ko"&&($n||z!=="onCompositionStart"?z==="onCompositionEnd"&&$n&&(w=wf()):(At=g,bs="value"in At?At.value:At.textContent,$n=!0)),b=gi(c,z),0<b.length&&(z=new Ou(z,e,null,n,g),p.push({event:z,listeners:b}),w?z.data=w:(w=jf(n),w!==null&&(z.data=w)))),(w=ng?rg(e,n):og(e,n))&&(c=gi(c,"onBeforeInput"),0<c.length&&(g=new Ou("onBeforeInput","beforeinput",null,n,g),p.push({event:g,listeners:c}),g.data=w))}$f(p,t)})}function to(e,t,n){return{instance:e,listener:t,currentTarget:n}}function gi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Qr(e,n),i!=null&&r.unshift(to(e,i,o)),i=Qr(e,t),i!=null&&r.push(to(e,i,o))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qu(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=Qr(n,i),u!=null&&a.unshift(to(n,u,s))):o||(u=Qr(n,i),u!=null&&a.push(to(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var vg=/\r\n?/g,yg=/\u0000|\uFFFD/g;function Yu(e){return(typeof e=="string"?e:""+e).replace(vg,`
`).replace(yg,"")}function Ro(e,t,n){if(t=Yu(t),Yu(e)!==t&&n)throw Error(P(425))}function xi(){}var jl=null,Cl=null;function bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var El=typeof setTimeout=="function"?setTimeout:void 0,wg=typeof clearTimeout=="function"?clearTimeout:void 0,Ku=typeof Promise=="function"?Promise:void 0,Sg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ku<"u"?function(e){return Ku.resolve(null).then(e).catch(kg)}:El;function kg(e){setTimeout(function(){throw e})}function La(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Xr(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hr=Math.random().toString(36).slice(2),pt="__reactFiber$"+hr,no="__reactProps$"+hr,bt="__reactContainer$"+hr,Pl="__reactEvents$"+hr,jg="__reactListeners$"+hr,Cg="__reactHandles$"+hr;function cn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xu(e);e!==null;){if(n=e[pt])return n;e=Xu(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[pt]||e[bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Gi(e){return e[no]||null}var zl=[],Fn=-1;function tn(e){return{current:e}}function Q(e){0>Fn||(e.current=zl[Fn],zl[Fn]=null,Fn--)}function V(e,t){Fn++,zl[Fn]=e.current,e.current=t}var Zt={},Se=tn(Zt),_e=tn(!1),gn=Zt;function tr(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ne(e){return e=e.childContextTypes,e!=null}function vi(){Q(_e),Q(Se)}function Ju(e,t,n){if(Se.current!==Zt)throw Error(P(168));V(Se,t),V(_e,n)}function Mf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,sh(e)||"Unknown",o));return Z({},n,r)}function yi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,gn=Se.current,V(Se,e),V(_e,_e.current),!0}function Zu(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Mf(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,Q(_e),Q(Se),V(Se,e)):Q(_e),V(_e,n)}var yt=null,qi=!1,_a=!1;function Af(e){yt===null?yt=[e]:yt.push(e)}function bg(e){qi=!0,Af(e)}function nn(){if(!_a&&yt!==null){_a=!0;var e=0,t=U;try{var n=yt;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}yt=null,qi=!1}catch(o){throw yt!==null&&(yt=yt.slice(e+1)),uf(Ss,nn),o}finally{U=t,_a=!1}}return null}var Bn=[],Dn=0,wi=null,Si=0,Ve=[],Ge=0,xn=null,wt=1,St="";function sn(e,t){Bn[Dn++]=Si,Bn[Dn++]=wi,wi=e,Si=t}function Ff(e,t,n){Ve[Ge++]=wt,Ve[Ge++]=St,Ve[Ge++]=xn,xn=e;var r=wt;e=St;var o=32-lt(r)-1;r&=~(1<<o),n+=1;var i=32-lt(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,wt=1<<32-lt(t)+o|n<<o|r,St=i+e}else wt=1<<i|n<<o|r,St=e}function Ts(e){e.return!==null&&(sn(e,1),Ff(e,1,0))}function Ls(e){for(;e===wi;)wi=Bn[--Dn],Bn[Dn]=null,Si=Bn[--Dn],Bn[Dn]=null;for(;e===xn;)xn=Ve[--Ge],Ve[Ge]=null,St=Ve[--Ge],Ve[Ge]=null,wt=Ve[--Ge],Ve[Ge]=null}var De=null,Be=null,Y=!1,at=null;function Bf(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,Be=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,Be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:wt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,Be=null,!0):!1;default:return!1}}function Il(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tl(e){if(Y){var t=Be;if(t){var n=t;if(!ec(e,t)){if(Il(e))throw Error(P(418));t=Vt(n.nextSibling);var r=De;t&&ec(e,t)?Bf(r,n):(e.flags=e.flags&-4097|2,Y=!1,De=e)}}else{if(Il(e))throw Error(P(418));e.flags=e.flags&-4097|2,Y=!1,De=e}}}function tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function $o(e){if(e!==De)return!1;if(!Y)return tc(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bl(e.type,e.memoizedProps)),t&&(t=Be)){if(Il(e))throw Df(),Error(P(418));for(;t;)Bf(e,t),t=Vt(t.nextSibling)}if(tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Be=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Be=null}}else Be=De?Vt(e.stateNode.nextSibling):null;return!0}function Df(){for(var e=Be;e;)e=Vt(e.nextSibling)}function nr(){Be=De=null,Y=!1}function _s(e){at===null?at=[e]:at.push(e)}var Eg=zt.ReactCurrentBatchConfig;function br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Oo(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nc(e){var t=e._init;return t(e._payload)}function Uf(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=Yt(h,f),h.index=0,h.sibling=null,h}function i(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,f,m,v){return f===null||f.tag!==6?(f=Fa(m,h.mode,v),f.return=h,f):(f=o(f,m),f.return=h,f)}function u(h,f,m,v){var E=m.type;return E===Rn?g(h,f,m.props.children,v,m.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&nc(E)===f.type)?(v=o(f,m.props),v.ref=br(h,f,m),v.return=h,v):(v=ri(m.type,m.key,m.props,null,h.mode,v),v.ref=br(h,f,m),v.return=h,v)}function c(h,f,m,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Ba(m,h.mode,v),f.return=h,f):(f=o(f,m.children||[]),f.return=h,f)}function g(h,f,m,v,E){return f===null||f.tag!==7?(f=hn(m,h.mode,v,E),f.return=h,f):(f=o(f,m),f.return=h,f)}function p(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Fa(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case bo:return m=ri(f.type,f.key,f.props,null,h.mode,m),m.ref=br(h,null,f),m.return=h,m;case Nn:return f=Ba(f,h.mode,m),f.return=h,f;case Rt:var v=f._init;return p(h,v(f._payload),m)}if(_r(f)||wr(f))return f=hn(f,h.mode,m,null),f.return=h,f;Oo(h,f)}return null}function x(h,f,m,v){var E=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:s(h,f,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case bo:return m.key===E?u(h,f,m,v):null;case Nn:return m.key===E?c(h,f,m,v):null;case Rt:return E=m._init,x(h,f,E(m._payload),v)}if(_r(m)||wr(m))return E!==null?null:g(h,f,m,v,null);Oo(h,m)}return null}function y(h,f,m,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return h=h.get(m)||null,s(f,h,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case bo:return h=h.get(v.key===null?m:v.key)||null,u(f,h,v,E);case Nn:return h=h.get(v.key===null?m:v.key)||null,c(f,h,v,E);case Rt:var b=v._init;return y(h,f,m,b(v._payload),E)}if(_r(v)||wr(v))return h=h.get(m)||null,g(f,h,v,E,null);Oo(f,v)}return null}function k(h,f,m,v){for(var E=null,b=null,w=f,z=f=0,N=null;w!==null&&z<m.length;z++){w.index>z?(N=w,w=null):N=w.sibling;var I=x(h,w,m[z],v);if(I===null){w===null&&(w=N);break}e&&w&&I.alternate===null&&t(h,w),f=i(I,f,z),b===null?E=I:b.sibling=I,b=I,w=N}if(z===m.length)return n(h,w),Y&&sn(h,z),E;if(w===null){for(;z<m.length;z++)w=p(h,m[z],v),w!==null&&(f=i(w,f,z),b===null?E=w:b.sibling=w,b=w);return Y&&sn(h,z),E}for(w=r(h,w);z<m.length;z++)N=y(w,h,z,m[z],v),N!==null&&(e&&N.alternate!==null&&w.delete(N.key===null?z:N.key),f=i(N,f,z),b===null?E=N:b.sibling=N,b=N);return e&&w.forEach(function(B){return t(h,B)}),Y&&sn(h,z),E}function j(h,f,m,v){var E=wr(m);if(typeof E!="function")throw Error(P(150));if(m=E.call(m),m==null)throw Error(P(151));for(var b=E=null,w=f,z=f=0,N=null,I=m.next();w!==null&&!I.done;z++,I=m.next()){w.index>z?(N=w,w=null):N=w.sibling;var B=x(h,w,I.value,v);if(B===null){w===null&&(w=N);break}e&&w&&B.alternate===null&&t(h,w),f=i(B,f,z),b===null?E=B:b.sibling=B,b=B,w=N}if(I.done)return n(h,w),Y&&sn(h,z),E;if(w===null){for(;!I.done;z++,I=m.next())I=p(h,I.value,v),I!==null&&(f=i(I,f,z),b===null?E=I:b.sibling=I,b=I);return Y&&sn(h,z),E}for(w=r(h,w);!I.done;z++,I=m.next())I=y(w,h,z,I.value,v),I!==null&&(e&&I.alternate!==null&&w.delete(I.key===null?z:I.key),f=i(I,f,z),b===null?E=I:b.sibling=I,b=I);return e&&w.forEach(function(ee){return t(h,ee)}),Y&&sn(h,z),E}function C(h,f,m,v){if(typeof m=="object"&&m!==null&&m.type===Rn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case bo:e:{for(var E=m.key,b=f;b!==null;){if(b.key===E){if(E=m.type,E===Rn){if(b.tag===7){n(h,b.sibling),f=o(b,m.props.children),f.return=h,h=f;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Rt&&nc(E)===b.type){n(h,b.sibling),f=o(b,m.props),f.ref=br(h,b,m),f.return=h,h=f;break e}n(h,b);break}else t(h,b);b=b.sibling}m.type===Rn?(f=hn(m.props.children,h.mode,v,m.key),f.return=h,h=f):(v=ri(m.type,m.key,m.props,null,h.mode,v),v.ref=br(h,f,m),v.return=h,h=v)}return a(h);case Nn:e:{for(b=m.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=o(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Ba(m,h.mode,v),f.return=h,h=f}return a(h);case Rt:return b=m._init,C(h,f,b(m._payload),v)}if(_r(m))return k(h,f,m,v);if(wr(m))return j(h,f,m,v);Oo(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=o(f,m),f.return=h,h=f):(n(h,f),f=Fa(m,h.mode,v),f.return=h,h=f),a(h)):n(h,f)}return C}var rr=Uf(!0),Hf=Uf(!1),ki=tn(null),ji=null,Un=null,Ns=null;function Rs(){Ns=Un=ji=null}function $s(e){var t=ki.current;Q(ki),e._currentValue=t}function Ll(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){ji=e,Ns=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Le=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(Ns!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(ji===null)throw Error(P(308));Un=e,ji.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var dn=null;function Os(e){dn===null?dn=[e]:dn.push(e)}function Wf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Os(t)):(n.next=o.next,o.next=n),t.interleaved=n,Et(e,r)}function Et(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $t=!1;function Ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Et(e,n)}return o=r.interleaved,o===null?(t.next=t,Os(r)):(t.next=o.next,o.next=t),r.interleaved=t,Et(e,n)}function Xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}function rc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ci(e,t,n,r){var o=e.updateQueue;$t=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,s=g.lastBaseUpdate,s!==a&&(s===null?g.firstBaseUpdate=c:s.next=c,g.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;a=0,g=c=u=null,s=i;do{var x=s.lane,y=s.eventTime;if((r&x)===x){g!==null&&(g=g.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,j=s;switch(x=t,y=n,j.tag){case 1:if(k=j.payload,typeof k=="function"){p=k.call(y,p,x);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=j.payload,x=typeof k=="function"?k.call(y,p,x):k,x==null)break e;p=Z({},p,x);break e;case 2:$t=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else y={eventTime:y,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},g===null?(c=g=y,u=p):g=g.next=y,a|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(g===null&&(u=p),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);yn|=a,e.lanes=a,e.memoizedState=p}}function oc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var vo={},ht=tn(vo),ro=tn(vo),oo=tn(vo);function fn(e){if(e===vo)throw Error(P(174));return e}function As(e,t){switch(V(oo,t),V(ro,e),V(ht,vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:dl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=dl(t,e)}Q(ht),V(ht,t)}function or(){Q(ht),Q(ro),Q(oo)}function Gf(e){fn(oo.current);var t=fn(ht.current),n=dl(t,e.type);t!==n&&(V(ro,e),V(ht,n))}function Fs(e){ro.current===e&&(Q(ht),Q(ro))}var K=tn(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Na=[];function Bs(){for(var e=0;e<Na.length;e++)Na[e]._workInProgressVersionPrimary=null;Na.length=0}var Jo=zt.ReactCurrentDispatcher,Ra=zt.ReactCurrentBatchConfig,vn=0,X=null,ae=null,ce=null,Ei=!1,Dr=!1,io=0,Pg=0;function xe(){throw Error(P(321))}function Ds(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ct(e[n],t[n]))return!1;return!0}function Us(e,t,n,r,o,i){if(vn=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Jo.current=e===null||e.memoizedState===null?Lg:_g,e=n(r,o),Dr){i=0;do{if(Dr=!1,io=0,25<=i)throw Error(P(301));i+=1,ce=ae=null,t.updateQueue=null,Jo.current=Ng,e=n(r,o)}while(Dr)}if(Jo.current=Pi,t=ae!==null&&ae.next!==null,vn=0,ce=ae=X=null,Ei=!1,t)throw Error(P(300));return e}function Hs(){var e=io!==0;return io=0,e}function ft(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?X.memoizedState=ce=e:ce=ce.next=e,ce}function Je(){if(ae===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=ce===null?X.memoizedState:ce.next;if(t!==null)ce=t,ae=e;else{if(e===null)throw Error(P(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},ce===null?X.memoizedState=ce=e:ce=ce.next=e}return ce}function ao(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=Je(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ae,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=a=null,u=null,c=i;do{var g=c.lane;if((vn&g)===g)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,a=r):u=u.next=p,X.lanes|=g,yn|=g}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=s,ct(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,X.lanes|=i,yn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oa(e){var t=Je(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);ct(i,t.memoizedState)||(Le=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function qf(){}function Qf(e,t){var n=X,r=Je(),o=t(),i=!ct(r.memoizedState,o);if(i&&(r.memoizedState=o,Le=!0),r=r.queue,Ws(Xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(n.flags|=2048,lo(9,Kf.bind(null,n,r,o,t),void 0,null),de===null)throw Error(P(349));vn&30||Yf(n,t,o)}return o}function Yf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kf(e,t,n,r){t.value=n,t.getSnapshot=r,Jf(t)&&Zf(e)}function Xf(e,t,n){return n(function(){Jf(t)&&Zf(e)})}function Jf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ct(e,n)}catch{return!0}}function Zf(e){var t=Et(e,1);t!==null&&st(t,e,1,-1)}function ic(e){var t=ft();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ao,lastRenderedState:e},t.queue=e,e=e.dispatch=Tg.bind(null,X,e),[t.memoizedState,e]}function lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ep(){return Je().memoizedState}function Zo(e,t,n,r){var o=ft();X.flags|=e,o.memoizedState=lo(1|t,n,void 0,r===void 0?null:r)}function Qi(e,t,n,r){var o=Je();r=r===void 0?null:r;var i=void 0;if(ae!==null){var a=ae.memoizedState;if(i=a.destroy,r!==null&&Ds(r,a.deps)){o.memoizedState=lo(t,n,i,r);return}}X.flags|=e,o.memoizedState=lo(1|t,n,i,r)}function ac(e,t){return Zo(8390656,8,e,t)}function Ws(e,t){return Qi(2048,8,e,t)}function tp(e,t){return Qi(4,2,e,t)}function np(e,t){return Qi(4,4,e,t)}function rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function op(e,t,n){return n=n!=null?n.concat([e]):null,Qi(4,4,rp.bind(null,t,e),n)}function Vs(){}function ip(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ap(e,t){var n=Je();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ds(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lp(e,t,n){return vn&21?(ct(n,t)||(n=ff(),X.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n)}function zg(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=Ra.transition;Ra.transition={};try{e(!1),t()}finally{U=n,Ra.transition=r}}function sp(){return Je().memoizedState}function Ig(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},up(e))cp(t,n);else if(n=Wf(e,t,n,r),n!==null){var o=Ce();st(n,e,r,o),dp(n,t,r)}}function Tg(e,t,n){var r=Qt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(up(e))cp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,ct(s,a)){var u=t.interleaved;u===null?(o.next=o,Os(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Wf(e,t,o,r),n!==null&&(o=Ce(),st(n,e,r,o),dp(n,t,r))}}function up(e){var t=e.alternate;return e===X||t!==null&&t===X}function cp(e,t){Dr=Ei=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}var Pi={readContext:Xe,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},Lg={readContext:Xe,useCallback:function(e,t){return ft().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:ac,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=ft();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ft();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ig.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ft();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:Vs,useDeferredValue:function(e){return ft().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=zg.bind(null,e[1]),ft().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=ft();if(Y){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),de===null)throw Error(P(349));vn&30||Yf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ac(Xf.bind(null,r,i,e),[e]),r.flags|=2048,lo(9,Kf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ft(),t=de.identifierPrefix;if(Y){var n=St,r=wt;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=io++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_g={readContext:Xe,useCallback:ip,useContext:Xe,useEffect:Ws,useImperativeHandle:op,useInsertionEffect:tp,useLayoutEffect:np,useMemo:ap,useReducer:$a,useRef:ep,useState:function(){return $a(ao)},useDebugValue:Vs,useDeferredValue:function(e){var t=Je();return lp(t,ae.memoizedState,e)},useTransition:function(){var e=$a(ao)[0],t=Je().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:Qf,useId:sp,unstable_isNewReconciler:!1},Ng={readContext:Xe,useCallback:ip,useContext:Xe,useEffect:Ws,useImperativeHandle:op,useInsertionEffect:tp,useLayoutEffect:np,useMemo:ap,useReducer:Oa,useRef:ep,useState:function(){return Oa(ao)},useDebugValue:Vs,useDeferredValue:function(e){var t=Je();return ae===null?t.memoizedState=e:lp(t,ae.memoizedState,e)},useTransition:function(){var e=Oa(ao)[0],t=Je().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:Qf,useId:sp,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yi={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=Qt(e),i=kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(st(t,e,o,r),Xo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),o=Qt(e),i=kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(st(t,e,o,r),Xo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Qt(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(st(t,e,r,n),Xo(t,e,r))}};function lc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Zr(n,r)||!Zr(o,i):!0}function fp(e,t,n){var r=!1,o=Zt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(o=Ne(t)?gn:Se.current,r=t.contextTypes,i=(r=r!=null)?tr(e,o):Zt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function sc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yi.enqueueReplaceState(t,t.state,null)}function Nl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ms(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Xe(i):(i=Ne(t)?gn:Se.current,o.context=tr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(_l(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yi.enqueueReplaceState(o,o.state,null),Ci(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t){try{var n="",r=t;do n+=lh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ma(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rg=typeof WeakMap=="function"?WeakMap:Map;function pp(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ii||(Ii=!0,Wl=r),Rl(e,t)},n}function mp(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Rl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Rl(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function uc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Qg.bind(null,e,t,n),t.then(e,e))}function cc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var $g=zt.ReactCurrentOwner,Le=!1;function je(e,t,n,r){t.child=e===null?Hf(t,null,n,r):rr(t,e.child,n,r)}function fc(e,t,n,r,o){n=n.render;var i=t.ref;return Jn(t,o),r=Us(e,t,n,r,i,o),n=Hs(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(Y&&n&&Ts(t),t.flags|=1,je(e,t,r,o),t.child)}function pc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Zs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hp(e,t,i,r,o)):(e=ri(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Zr,n(a,r)&&e.ref===t.ref)return Pt(e,t,o)}return t.flags|=1,e=Yt(i,r),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Zr(i,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Pt(e,t,o)}return $l(e,t,n,r,o)}function gp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Wn,Fe),Fe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Wn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,V(Wn,Fe),Fe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,V(Wn,Fe),Fe|=r;return je(e,t,o,n),t.child}function xp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $l(e,t,n,r,o){var i=Ne(n)?gn:Se.current;return i=tr(t,i),Jn(t,o),n=Us(e,t,n,r,i,o),r=Hs(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Pt(e,t,o)):(Y&&r&&Ts(t),t.flags|=1,je(e,t,n,o),t.child)}function mc(e,t,n,r,o){if(Ne(n)){var i=!0;yi(t)}else i=!1;if(Jn(t,o),t.stateNode===null)ei(e,t),fp(t,n,r),Nl(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xe(c):(c=Ne(n)?gn:Se.current,c=tr(t,c));var g=n.getDerivedStateFromProps,p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&sc(t,a,r,c),$t=!1;var x=t.memoizedState;a.state=x,Ci(t,r,a,o),u=t.memoizedState,s!==r||x!==u||_e.current||$t?(typeof g=="function"&&(_l(t,n,g,r),u=t.memoizedState),(s=$t||lc(t,n,s,r,x,u,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Vf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rt(t.type,s),a.props=c,p=t.pendingProps,x=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xe(u):(u=Ne(n)?gn:Se.current,u=tr(t,u));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==p||x!==u)&&sc(t,a,r,u),$t=!1,x=t.memoizedState,a.state=x,Ci(t,r,a,o);var k=t.memoizedState;s!==p||x!==k||_e.current||$t?(typeof y=="function"&&(_l(t,n,y,r),k=t.memoizedState),(c=$t||lc(t,n,c,r,x,k,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Ol(e,t,n,r,i,o)}function Ol(e,t,n,r,o,i){xp(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Zu(t,n,!1),Pt(e,t,i);r=t.stateNode,$g.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=rr(t,e.child,null,i),t.child=rr(t,null,s,i)):je(e,t,s,i),t.memoizedState=r.state,o&&Zu(t,n,!0),t.child}function vp(e){var t=e.stateNode;t.pendingContext?Ju(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ju(e,t.context,!1),As(e,t.containerInfo)}function hc(e,t,n,r,o){return nr(),_s(o),t.flags|=256,je(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Al(e){return{baseLanes:e,cachePool:null,transitions:null}}function yp(e,t,n){var r=t.pendingProps,o=K.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(K,o&1),e===null)return Tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Ji(a,r,0,null),e=hn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Al(n),t.memoizedState=Ml,e):Gs(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Og(e,t,a,r,s,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Yt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Yt(s,i):(i=hn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Al(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ml,r}return i=e.child,e=i.sibling,r=Yt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Gs(e,t){return t=Ji({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Mo(e,t,n,r){return r!==null&&_s(r),rr(t,e.child,null,n),e=Gs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Og(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Ma(Error(P(422))),Mo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Ji({mode:"visible",children:r.children},o,0,null),i=hn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&rr(t,e.child,null,a),t.child.memoizedState=Al(a),t.memoizedState=Ml,i);if(!(t.mode&1))return Mo(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(P(419)),r=Ma(i,r,void 0),Mo(e,t,a,r)}if(s=(a&e.childLanes)!==0,Le||s){if(r=de,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Et(e,o),st(r,e,o,-1))}return Js(),r=Ma(Error(P(421))),Mo(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Yg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Be=Vt(o.nextSibling),De=t,Y=!0,at=null,e!==null&&(Ve[Ge++]=wt,Ve[Ge++]=St,Ve[Ge++]=xn,wt=e.id,St=e.overflow,xn=t),t=Gs(t,r.children),t.flags|=4096,t)}function gc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ll(e.return,t,n)}function Aa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function wp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(je(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gc(e,n,t);else if(e.tag===19)gc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&bi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Aa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&bi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Aa(t,!0,n,null,i);break;case"together":Aa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ei(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Pt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Yt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mg(e,t,n){switch(t.tag){case 3:vp(t),nr();break;case 5:Gf(t);break;case 1:Ne(t.type)&&yi(t);break;case 4:As(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(ki,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?yp(e,t,n):(V(K,K.current&1),e=Pt(e,t,n),e!==null?e.sibling:null);V(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,gp(e,t,n)}return Pt(e,t,n)}var Sp,Fl,kp,jp;Sp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fl=function(){};kp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,fn(ht.current);var i=null;switch(n){case"input":o=ll(e,o),r=ll(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=cl(e,o),r=cl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xi)}fl(n,r);var a;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Gr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Gr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&G("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};jp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Er(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ag(e,t,n){var r=t.pendingProps;switch(Ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Ne(t.type)&&vi(),ve(t),null;case 3:return r=t.stateNode,or(),Q(_e),Q(Se),Bs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&($o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,at!==null&&(ql(at),at=null))),Fl(e,t),ve(t),null;case 5:Fs(t);var o=fn(oo.current);if(n=t.type,e!==null&&t.stateNode!=null)kp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return ve(t),null}if(e=fn(ht.current),$o(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[no]=i,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<Rr.length;o++)G(Rr[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":bu(r,i),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},G("invalid",r);break;case"textarea":Pu(r,i),G("invalid",r)}fl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ro(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ro(r.textContent,s,e),o=["children",""+s]):Gr.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&G("scroll",r)}switch(n){case"input":Eo(r),Eu(r,i,!0);break;case"textarea":Eo(r),zu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[pt]=t,e[no]=r,Sp(e,t,!1,!1),t.stateNode=e;e:{switch(a=pl(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rr.length;o++)G(Rr[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":bu(e,r),o=ll(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),G("invalid",e);break;case"textarea":Pu(e,r),o=cl(e,r),G("invalid",e);break;default:o=r}fl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Zd(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Xd(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&qr(e,u):typeof u=="number"&&qr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Gr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&G("scroll",e):u!=null&&gs(e,i,u,a))}switch(n){case"input":Eo(e),Eu(e,r,!1);break;case"textarea":Eo(e),zu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Jt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)jp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=fn(oo.current),fn(ht.current),$o(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:Ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ro(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return ve(t),null;case 13:if(Q(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Be!==null&&t.mode&1&&!(t.flags&128))Df(),nr(),t.flags|=98560,i=!1;else if(i=$o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[pt]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),i=!1}else at!==null&&(ql(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?se===0&&(se=3):Js())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return or(),Fl(e,t),e===null&&eo(t.stateNode.containerInfo),ve(t),null;case 10:return $s(t.type._context),ve(t),null;case 17:return Ne(t.type)&&vi(),ve(t),null;case 19:if(Q(K),i=t.memoizedState,i===null)return ve(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)Er(i,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=bi(e),a!==null){for(t.flags|=128,Er(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&ne()>ar&&(t.flags|=128,r=!0,Er(i,!1),t.lanes=4194304)}else{if(!r)if(e=bi(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Y)return ve(t),null}else 2*ne()-i.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,Er(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ne(),t.sibling=null,n=K.current,V(K,r?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return Xs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Fe&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function Fg(e,t){switch(Ls(t),t.tag){case 1:return Ne(t.type)&&vi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),Q(_e),Q(Se),Bs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Fs(t),null;case 13:if(Q(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(K),null;case 4:return or(),null;case 10:return $s(t.type._context),null;case 22:case 23:return Xs(),null;case 24:return null;default:return null}}var Ao=!1,ye=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,_=null;function Hn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(e,t,r)}else n.current=null}function Bl(e,t,n){try{n()}catch(r){te(e,t,r)}}var xc=!1;function Dg(e,t){if(jl=mi,e=zf(),Is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,g=0,p=e,x=null;t:for(;;){for(var y;p!==n||o!==0&&p.nodeType!==3||(s=a+o),p!==i||r!==0&&p.nodeType!==3||(u=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(y=p.firstChild)!==null;)x=p,p=y;for(;;){if(p===e)break t;if(x===n&&++c===o&&(s=a),x===i&&++g===r&&(u=a),(y=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=y}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cl={focusedElem:e,selectionRange:n},mi=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var j=k.memoizedProps,C=k.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?j:rt(t.type,j),C);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(v){te(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return k=xc,xc=!1,k}function Ur(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Bl(t,n,i)}o=o.next}while(o!==r)}}function Ki(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Dl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cp(e){var t=e.alternate;t!==null&&(e.alternate=null,Cp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[no],delete t[Pl],delete t[jg],delete t[Cg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bp(e){return e.tag===5||e.tag===3||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xi));else if(r!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Hl(e,t,n),e=e.sibling;e!==null;)Hl(e,t,n),e=e.sibling}var fe=null,ot=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Ep(e,t,n),n=n.sibling}function Ep(e,t,n){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Ui,n)}catch{}switch(n.tag){case 5:ye||Hn(n,t);case 6:var r=fe,o=ot;fe=null,Lt(e,t,n),fe=r,ot=o,fe!==null&&(ot?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(ot?(e=fe,n=n.stateNode,e.nodeType===8?La(e.parentNode,n):e.nodeType===1&&La(e,n),Xr(e)):La(fe,n.stateNode));break;case 4:r=fe,o=ot,fe=n.stateNode.containerInfo,ot=!0,Lt(e,t,n),fe=r,ot=o;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Bl(n,t,a),o=o.next}while(o!==r)}Lt(e,t,n);break;case 1:if(!ye&&(Hn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){te(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Lt(e,t,n),ye=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function yc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Bg),t.forEach(function(r){var o=Kg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,ot=!1;break e;case 3:fe=s.stateNode.containerInfo,ot=!0;break e;case 4:fe=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(fe===null)throw Error(P(160));Ep(i,a,o),fe=null,ot=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){te(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pp(t,e),t=t.sibling}function Pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),dt(e),r&4){try{Ur(3,e,e.return),Ki(3,e)}catch(j){te(e,e.return,j)}try{Ur(5,e,e.return)}catch(j){te(e,e.return,j)}}break;case 1:nt(t,e),dt(e),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(nt(t,e),dt(e),r&512&&n!==null&&Hn(n,n.return),e.flags&32){var o=e.stateNode;try{qr(o,"")}catch(j){te(e,e.return,j)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Qd(o,i),pl(s,a);var c=pl(s,i);for(a=0;a<u.length;a+=2){var g=u[a],p=u[a+1];g==="style"?Zd(o,p):g==="dangerouslySetInnerHTML"?Xd(o,p):g==="children"?qr(o,p):gs(o,g,p,c)}switch(s){case"input":sl(o,i);break;case"textarea":Yd(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Qn(o,!!i.multiple,y,!1):x!==!!i.multiple&&(i.defaultValue!=null?Qn(o,!!i.multiple,i.defaultValue,!0):Qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[no]=i}catch(j){te(e,e.return,j)}}break;case 6:if(nt(t,e),dt(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(j){te(e,e.return,j)}}break;case 3:if(nt(t,e),dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(j){te(e,e.return,j)}break;case 4:nt(t,e),dt(e);break;case 13:nt(t,e),dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ys=ne())),r&4&&yc(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ye=(c=ye)||g,nt(t,e),ye=c):nt(t,e),dt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&e.mode&1)for(_=e,g=e.child;g!==null;){for(p=_=g;_!==null;){switch(x=_,y=x.child,x.tag){case 0:case 11:case 14:case 15:Ur(4,x,x.return);break;case 1:Hn(x,x.return);var k=x.stateNode;if(typeof k.componentWillUnmount=="function"){r=x,n=x.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(j){te(r,n,j)}}break;case 5:Hn(x,x.return);break;case 22:if(x.memoizedState!==null){Sc(p);continue}}y!==null?(y.return=x,_=y):Sc(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{o=p.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Jd("display",a))}catch(j){te(e,e.return,j)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(j){te(e,e.return,j)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:nt(t,e),dt(e),r&4&&yc(e);break;case 21:break;default:nt(t,e),dt(e)}}function dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bp(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qr(o,""),r.flags&=-33);var i=vc(e);Hl(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,s=vc(e);Ul(e,s,a);break;default:throw Error(P(161))}}catch(u){te(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ug(e,t,n){_=e,zp(e)}function zp(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ao;if(!a){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ye;s=Ao;var c=ye;if(Ao=a,(ye=u)&&!c)for(_=o;_!==null;)a=_,u=a.child,a.tag===22&&a.memoizedState!==null?kc(o):u!==null?(u.return=a,_=u):kc(o);for(;i!==null;)_=i,zp(i),i=i.sibling;_=o,Ao=s,ye=c}wc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,_=i):wc(e)}}function wc(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ye||Ki(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ye)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&oc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oc(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&Xr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ye||t.flags&512&&Dl(t)}catch(x){te(t,t.return,x)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Sc(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function kc(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ki(4,t)}catch(u){te(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){te(t,o,u)}}var i=t.return;try{Dl(t)}catch(u){te(t,i,u)}break;case 5:var a=t.return;try{Dl(t)}catch(u){te(t,a,u)}}}catch(u){te(t,t.return,u)}if(t===e){_=null;break}var s=t.sibling;if(s!==null){s.return=t.return,_=s;break}_=t.return}}var Hg=Math.ceil,zi=zt.ReactCurrentDispatcher,qs=zt.ReactCurrentOwner,Ke=zt.ReactCurrentBatchConfig,A=0,de=null,oe=null,me=0,Fe=0,Wn=tn(0),se=0,so=null,yn=0,Xi=0,Qs=0,Hr=null,Te=null,Ys=0,ar=1/0,xt=null,Ii=!1,Wl=null,qt=null,Fo=!1,Ft=null,Ti=0,Wr=0,Vl=null,ti=-1,ni=0;function Ce(){return A&6?ne():ti!==-1?ti:ti=ne()}function Qt(e){return e.mode&1?A&2&&me!==0?me&-me:Eg.transition!==null?(ni===0&&(ni=ff()),ni):(e=U,e!==0||(e=window.event,e=e===void 0?16:yf(e.type)),e):1}function st(e,t,n,r){if(50<Wr)throw Wr=0,Vl=null,Error(P(185));ho(e,n,r),(!(A&2)||e!==de)&&(e===de&&(!(A&2)&&(Xi|=n),se===4&&Mt(e,me)),Re(e,r),n===1&&A===0&&!(t.mode&1)&&(ar=ne()+500,qi&&nn()))}function Re(e,t){var n=e.callbackNode;Eh(e,t);var r=pi(e,e===de?me:0);if(r===0)n!==null&&Lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lu(n),t===1)e.tag===0?bg(jc.bind(null,e)):Af(jc.bind(null,e)),Sg(function(){!(A&6)&&nn()}),n=null;else{switch(pf(r)){case 1:n=Ss;break;case 4:n=cf;break;case 16:n=fi;break;case 536870912:n=df;break;default:n=fi}n=Op(n,Ip.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ip(e,t){if(ti=-1,ni=0,A&6)throw Error(P(327));var n=e.callbackNode;if(Zn()&&e.callbackNode!==n)return null;var r=pi(e,e===de?me:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Li(e,r);else{t=r;var o=A;A|=2;var i=Lp();(de!==e||me!==t)&&(xt=null,ar=ne()+500,mn(e,t));do try{Gg();break}catch(s){Tp(e,s)}while(!0);Rs(),zi.current=i,A=o,oe!==null?t=0:(de=null,me=0,t=se)}if(t!==0){if(t===2&&(o=vl(e),o!==0&&(r=o,t=Gl(e,o))),t===1)throw n=so,mn(e,0),Mt(e,r),Re(e,ne()),n;if(t===6)Mt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Wg(o)&&(t=Li(e,r),t===2&&(i=vl(e),i!==0&&(r=i,t=Gl(e,i))),t===1))throw n=so,mn(e,0),Mt(e,r),Re(e,ne()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:un(e,Te,xt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=Ys+500-ne(),10<t)){if(pi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=El(un.bind(null,e,Te,xt),t);break}un(e,Te,xt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-lt(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Hg(r/1960))-r,10<r){e.timeoutHandle=El(un.bind(null,e,Te,xt),r);break}un(e,Te,xt);break;case 5:un(e,Te,xt);break;default:throw Error(P(329))}}}return Re(e,ne()),e.callbackNode===n?Ip.bind(null,e):null}function Gl(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Li(e,t),e!==2&&(t=Te,Te=n,t!==null&&ql(t)),e}function ql(e){Te===null?Te=e:Te.push.apply(Te,e)}function Wg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ct(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~Qs,t&=~Xi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-lt(t),r=1<<n;e[n]=-1,t&=~r}}function jc(e){if(A&6)throw Error(P(327));Zn();var t=pi(e,0);if(!(t&1))return Re(e,ne()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=vl(e);r!==0&&(t=r,n=Gl(e,r))}if(n===1)throw n=so,mn(e,0),Mt(e,t),Re(e,ne()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,un(e,Te,xt),Re(e,ne()),null}function Ks(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(ar=ne()+500,qi&&nn())}}function wn(e){Ft!==null&&Ft.tag===0&&!(A&6)&&Zn();var t=A;A|=1;var n=Ke.transition,r=U;try{if(Ke.transition=null,U=1,e)return e()}finally{U=r,Ke.transition=n,A=t,!(A&6)&&nn()}}function Xs(){Fe=Wn.current,Q(Wn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,wg(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(Ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&vi();break;case 3:or(),Q(_e),Q(Se),Bs();break;case 5:Fs(r);break;case 4:or();break;case 13:Q(K);break;case 19:Q(K);break;case 10:$s(r.type._context);break;case 22:case 23:Xs()}n=n.return}if(de=e,oe=e=Yt(e.current,null),me=Fe=t,se=0,so=null,Qs=Xi=yn=0,Te=Hr=null,dn!==null){for(t=0;t<dn.length;t++)if(n=dn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}dn=null}return e}function Tp(e,t){do{var n=oe;try{if(Rs(),Jo.current=Pi,Ei){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ei=!1}if(vn=0,ce=ae=X=null,Dr=!1,io=0,qs.current=null,n===null||n.return===null){se=1,so=t,oe=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=me,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,g=s,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var x=g.alternate;x?(g.updateQueue=x.updateQueue,g.memoizedState=x.memoizedState,g.lanes=x.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=cc(a);if(y!==null){y.flags&=-257,dc(y,a,s,i,t),y.mode&1&&uc(i,c,t),t=y,u=c;var k=t.updateQueue;if(k===null){var j=new Set;j.add(u),t.updateQueue=j}else k.add(u);break e}else{if(!(t&1)){uc(i,c,t),Js();break e}u=Error(P(426))}}else if(Y&&s.mode&1){var C=cc(a);if(C!==null){!(C.flags&65536)&&(C.flags|=256),dc(C,a,s,i,t),_s(ir(u,s));break e}}i=u=ir(u,s),se!==4&&(se=2),Hr===null?Hr=[i]:Hr.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=pp(i,u,t);rc(i,h);break e;case 1:s=u;var f=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(qt===null||!qt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=mp(i,s,t);rc(i,v);break e}}i=i.return}while(i!==null)}Np(n)}catch(E){t=E,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function Lp(){var e=zi.current;return zi.current=Pi,e===null?Pi:e}function Js(){(se===0||se===3||se===2)&&(se=4),de===null||!(yn&268435455)&&!(Xi&268435455)||Mt(de,me)}function Li(e,t){var n=A;A|=2;var r=Lp();(de!==e||me!==t)&&(xt=null,mn(e,t));do try{Vg();break}catch(o){Tp(e,o)}while(!0);if(Rs(),A=n,zi.current=r,oe!==null)throw Error(P(261));return de=null,me=0,se}function Vg(){for(;oe!==null;)_p(oe)}function Gg(){for(;oe!==null&&!xh();)_p(oe)}function _p(e){var t=$p(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Np(e):oe=t,qs.current=null}function Np(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Fg(n,t),n!==null){n.flags&=32767,oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,oe=null;return}}else if(n=Ag(n,t,Fe),n!==null){oe=n;return}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);se===0&&(se=5)}function un(e,t,n){var r=U,o=Ke.transition;try{Ke.transition=null,U=1,qg(e,t,n,r)}finally{Ke.transition=o,U=r}return null}function qg(e,t,n,r){do Zn();while(Ft!==null);if(A&6)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Ph(e,i),e===de&&(oe=de=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fo||(Fo=!0,Op(fi,function(){return Zn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ke.transition,Ke.transition=null;var a=U;U=1;var s=A;A|=4,qs.current=null,Dg(e,n),Pp(n,e),pg(Cl),mi=!!jl,Cl=jl=null,e.current=n,Ug(n),vh(),A=s,U=a,Ke.transition=i}else e.current=n;if(Fo&&(Fo=!1,Ft=e,Ti=o),i=e.pendingLanes,i===0&&(qt=null),Sh(n.stateNode),Re(e,ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Ii)throw Ii=!1,e=Wl,Wl=null,e;return Ti&1&&e.tag!==0&&Zn(),i=e.pendingLanes,i&1?e===Vl?Wr++:(Wr=0,Vl=e):Wr=0,nn(),null}function Zn(){if(Ft!==null){var e=pf(Ti),t=Ke.transition,n=U;try{if(Ke.transition=null,U=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Ti=0,A&6)throw Error(P(331));var o=A;for(A|=4,_=e.current;_!==null;){var i=_,a=i.child;if(_.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(_=c;_!==null;){var g=_;switch(g.tag){case 0:case 11:case 15:Ur(8,g,i)}var p=g.child;if(p!==null)p.return=g,_=p;else for(;_!==null;){g=_;var x=g.sibling,y=g.return;if(Cp(g),g===c){_=null;break}if(x!==null){x.return=y,_=x;break}_=y}}}var k=i.alternate;if(k!==null){var j=k.child;if(j!==null){k.child=null;do{var C=j.sibling;j.sibling=null,j=C}while(j!==null)}}_=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,_=a;else e:for(;_!==null;){if(i=_,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ur(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,_=h;break e}_=i.return}}var f=e.current;for(_=f;_!==null;){a=_;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,_=m;else e:for(a=f;_!==null;){if(s=_,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ki(9,s)}}catch(E){te(s,s.return,E)}if(s===a){_=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,_=v;break e}_=s.return}}if(A=o,nn(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Ui,e)}catch{}r=!0}return r}finally{U=n,Ke.transition=t}}return!1}function Cc(e,t,n){t=ir(n,t),t=pp(e,t,1),e=Gt(e,t,1),t=Ce(),e!==null&&(ho(e,1,t),Re(e,t))}function te(e,t,n){if(e.tag===3)Cc(e,e,n);else for(;t!==null;){if(t.tag===3){Cc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=ir(n,e),e=mp(t,e,1),t=Gt(t,e,1),e=Ce(),t!==null&&(ho(t,1,e),Re(t,e));break}}t=t.return}}function Qg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(me&n)===n&&(se===4||se===3&&(me&130023424)===me&&500>ne()-Ys?mn(e,0):Qs|=n),Re(e,t)}function Rp(e,t){t===0&&(e.mode&1?(t=Io,Io<<=1,!(Io&130023424)&&(Io=4194304)):t=1);var n=Ce();e=Et(e,t),e!==null&&(ho(e,t,n),Re(e,n))}function Yg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rp(e,n)}function Kg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Rp(e,n)}var $p;$p=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||_e.current)Le=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Le=!1,Mg(e,t,n);Le=!!(e.flags&131072)}else Le=!1,Y&&t.flags&1048576&&Ff(t,Si,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ei(e,t),e=t.pendingProps;var o=tr(t,Se.current);Jn(t,n),o=Us(null,t,r,e,o,n);var i=Hs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(r)?(i=!0,yi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ms(t),o.updater=Yi,t.stateNode=o,o._reactInternals=t,Nl(t,r,e,n),t=Ol(null,t,r,!0,i,n)):(t.tag=0,Y&&i&&Ts(t),je(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ei(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Jg(r),e=rt(r,e),o){case 0:t=$l(null,t,r,e,n);break e;case 1:t=mc(null,t,r,e,n);break e;case 11:t=fc(null,t,r,e,n);break e;case 14:t=pc(null,t,r,rt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),$l(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),mc(e,t,r,o,n);case 3:e:{if(vp(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Vf(e,t),Ci(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=ir(Error(P(423)),t),t=hc(e,t,r,n,o);break e}else if(r!==o){o=ir(Error(P(424)),t),t=hc(e,t,r,n,o);break e}else for(Be=Vt(t.stateNode.containerInfo.firstChild),De=t,Y=!0,at=null,n=Hf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===o){t=Pt(e,t,n);break e}je(e,t,r,n)}t=t.child}return t;case 5:return Gf(t),e===null&&Tl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,bl(r,o)?a=null:i!==null&&bl(r,i)&&(t.flags|=32),xp(e,t),je(e,t,a,n),t.child;case 6:return e===null&&Tl(t),null;case 13:return yp(e,t,n);case 4:return As(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):je(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),fc(e,t,r,o,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,V(ki,r._currentValue),r._currentValue=a,i!==null)if(ct(i.value,a)){if(i.children===o.children&&!_e.current){t=Pt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=kt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?u.next=u:(u.next=g.next,g.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ll(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(P(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ll(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}je(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Jn(t,n),o=Xe(o),r=r(o),t.flags|=1,je(e,t,r,n),t.child;case 14:return r=t.type,o=rt(r,t.pendingProps),o=rt(r.type,o),pc(e,t,r,o,n);case 15:return hp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),ei(e,t),t.tag=1,Ne(r)?(e=!0,yi(t)):e=!1,Jn(t,n),fp(t,r,o),Nl(t,r,o,n),Ol(null,t,r,!0,e,n);case 19:return wp(e,t,n);case 22:return gp(e,t,n)}throw Error(P(156,t.tag))};function Op(e,t){return uf(e,t)}function Xg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new Xg(e,t,n,r)}function Zs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jg(e){if(typeof e=="function")return Zs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vs)return 11;if(e===ys)return 14}return 2}function Yt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ri(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Zs(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Rn:return hn(n.children,o,i,t);case xs:a=8,o|=8;break;case rl:return e=qe(12,n,t,o|2),e.elementType=rl,e.lanes=i,e;case ol:return e=qe(13,n,t,o),e.elementType=ol,e.lanes=i,e;case il:return e=qe(19,n,t,o),e.elementType=il,e.lanes=i,e;case Vd:return Ji(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hd:a=10;break e;case Wd:a=9;break e;case vs:a=11;break e;case ys:a=14;break e;case Rt:a=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=qe(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function hn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Ji(e,t,n,r){return e=qe(22,e,r,t),e.elementType=Vd,e.lanes=n,e.stateNode={isHidden:!1},e}function Fa(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function Ba(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function eu(e,t,n,r,o,i,a,s,u){return e=new Zg(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ms(i),e}function e0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Mp(e){if(!e)return Zt;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ne(n))return Mf(e,n,t)}return t}function Ap(e,t,n,r,o,i,a,s,u){return e=eu(n,r,!0,e,o,i,a,s,u),e.context=Mp(null),n=e.current,r=Ce(),o=Qt(n),i=kt(r,o),i.callback=t??null,Gt(n,i,o),e.current.lanes=o,ho(e,o,r),Re(e,r),e}function Zi(e,t,n,r){var o=t.current,i=Ce(),a=Qt(o);return n=Mp(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,a),e!==null&&(st(e,o,a,i),Xo(e,o,a)),a}function _i(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tu(e,t){bc(e,t),(e=e.alternate)&&bc(e,t)}function t0(){return null}var Fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}ea.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Zi(e,t,null,null)};ea.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Zi(null,e,null,null)}),t[bt]=null}};function ea(e){this._internalRoot=e}ea.prototype.unstable_scheduleHydration=function(e){if(e){var t=gf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&vf(e)}};function ru(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ta(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ec(){}function n0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=_i(a);i.call(c)}}var a=Ap(t,r,e,0,null,!1,!1,"",Ec);return e._reactRootContainer=a,e[bt]=a.current,eo(e.nodeType===8?e.parentNode:e),wn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=_i(u);s.call(c)}}var u=eu(e,0,!1,null,null,!1,!1,"",Ec);return e._reactRootContainer=u,e[bt]=u.current,eo(e.nodeType===8?e.parentNode:e),wn(function(){Zi(t,u,n,r)}),u}function na(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var u=_i(a);s.call(u)}}Zi(t,a,e,o)}else a=n0(n,t,e,o,r);return _i(a)}mf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nr(t.pendingLanes);n!==0&&(ks(t,n|1),Re(t,ne()),!(A&6)&&(ar=ne()+500,nn()))}break;case 13:wn(function(){var r=Et(e,1);if(r!==null){var o=Ce();st(r,e,1,o)}}),tu(e,1)}};js=function(e){if(e.tag===13){var t=Et(e,134217728);if(t!==null){var n=Ce();st(t,e,134217728,n)}tu(e,134217728)}};hf=function(e){if(e.tag===13){var t=Qt(e),n=Et(e,t);if(n!==null){var r=Ce();st(n,e,t,r)}tu(e,t)}};gf=function(){return U};xf=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};hl=function(e,t,n){switch(t){case"input":if(sl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Gi(r);if(!o)throw Error(P(90));qd(r),sl(r,o)}}}break;case"textarea":Yd(e,n);break;case"select":t=n.value,t!=null&&Qn(e,!!n.multiple,t,!1)}};nf=Ks;rf=wn;var r0={usingClientEntryPoint:!1,Events:[xo,An,Gi,ef,tf,Ks]},Pr={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o0={bundleType:Pr.bundleType,version:Pr.version,rendererPackageName:Pr.rendererPackageName,rendererConfig:Pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lf(e),e===null?null:e.stateNode},findFiberByHostInstance:Pr.findFiberByHostInstance||t0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Ui=Bo.inject(o0),mt=Bo}catch{}}He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0;He.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ru(t))throw Error(P(200));return e0(e,t,null,n)};He.createRoot=function(e,t){if(!ru(e))throw Error(P(299));var n=!1,r="",o=Fp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=eu(e,1,!1,null,null,n,!1,r,o),e[bt]=t.current,eo(e.nodeType===8?e.parentNode:e),new nu(t)};He.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=lf(t),e=e===null?null:e.stateNode,e};He.flushSync=function(e){return wn(e)};He.hydrate=function(e,t,n){if(!ta(t))throw Error(P(200));return na(null,e,t,!0,n)};He.hydrateRoot=function(e,t,n){if(!ru(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=Fp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ap(t,null,e,1,n??null,o,!1,i,a),e[bt]=t.current,eo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new ea(t)};He.render=function(e,t,n){if(!ta(t))throw Error(P(200));return na(null,e,t,!1,n)};He.unmountComponentAtNode=function(e){if(!ta(e))throw Error(P(40));return e._reactRootContainer?(wn(function(){na(null,null,e,!1,function(){e._reactRootContainer=null,e[bt]=null})}),!0):!1};He.unstable_batchedUpdates=Ks;He.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ta(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return na(e,t,n,!1,r)};He.version="18.3.1-next-f1338f8080-20240426";function Bp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bp)}catch(e){console.error(e)}}Bp(),Fd.exports=He;var i0=Fd.exports,Pc=i0;tl.createRoot=Pc.createRoot,tl.hydrateRoot=Pc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uo(){return uo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uo.apply(this,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const zc="popstate";function a0(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:s}=r.location;return Ql("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Ni(o)}return s0(t,n,null,e)}function J(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ou(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function l0(){return Math.random().toString(36).substr(2,8)}function Ic(e,t){return{usr:e.state,key:e.key,idx:t}}function Ql(e,t,n,r){return n===void 0&&(n=null),uo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?gr(t):t,{state:n,key:t&&t.key||r||l0()})}function Ni(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function gr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function s0(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s=Bt.Pop,u=null,c=g();c==null&&(c=0,a.replaceState(uo({},a.state,{idx:c}),""));function g(){return(a.state||{idx:null}).idx}function p(){s=Bt.Pop;let C=g(),h=C==null?null:C-c;c=C,u&&u({action:s,location:j.location,delta:h})}function x(C,h){s=Bt.Push;let f=Ql(j.location,C,h);c=g()+1;let m=Ic(f,c),v=j.createHref(f);try{a.pushState(m,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;o.location.assign(v)}i&&u&&u({action:s,location:j.location,delta:1})}function y(C,h){s=Bt.Replace;let f=Ql(j.location,C,h);c=g();let m=Ic(f,c),v=j.createHref(f);a.replaceState(m,"",v),i&&u&&u({action:s,location:j.location,delta:0})}function k(C){let h=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof C=="string"?C:Ni(C);return f=f.replace(/ $/,"%20"),J(h,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,h)}let j={get action(){return s},get location(){return e(o,a)},listen(C){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(zc,p),u=C,()=>{o.removeEventListener(zc,p),u=null}},createHref(C){return t(o,C)},createURL:k,encodeLocation(C){let h=k(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:x,replace:y,go(C){return a.go(C)}};return j}var Tc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Tc||(Tc={}));function u0(e,t,n){return n===void 0&&(n="/"),c0(e,t,n)}function c0(e,t,n,r){let o=typeof t=="string"?gr(t):t,i=lr(o.pathname||"/",n);if(i==null)return null;let a=Dp(e);d0(a);let s=null;for(let u=0;s==null&&u<a.length;++u){let c=k0(i);s=w0(a[u],c)}return s}function Dp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};u.relativePath.startsWith("/")&&(J(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Kt([r,u.relativePath]),g=n.concat(u);i.children&&i.children.length>0&&(J(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dp(i.children,t,g,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:v0(c,i.index),routesMeta:g})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,a);else for(let u of Up(i.path))o(i,a,u)}),t}function Up(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=Up(r.join("/")),s=[];return s.push(...a.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...a),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function d0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:y0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const f0=/^:[\w-]+$/,p0=3,m0=2,h0=1,g0=10,x0=-2,Lc=e=>e==="*";function v0(e,t){let n=e.split("/"),r=n.length;return n.some(Lc)&&(r+=x0),t&&(r+=m0),n.filter(o=>!Lc(o)).reduce((o,i)=>o+(f0.test(i)?p0:i===""?h0:g0),r)}function y0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function w0(e,t,n){let{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,g=i==="/"?t:t.slice(i.length)||"/",p=Yl({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},g),x=u.route;if(!p)return null;Object.assign(o,p.params),a.push({params:o,pathname:Kt([i,p.pathname]),pathnameBase:P0(Kt([i,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(i=Kt([i,p.pathnameBase]))}return a}function Yl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=S0(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((c,g,p)=>{let{paramName:x,isOptional:y}=g;if(x==="*"){let j=s[p]||"";a=i.slice(0,i.length-j.length).replace(/(.)\/+$/,"$1")}const k=s[p];return y&&!k?c[x]=void 0:c[x]=(k||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:a,pattern:e}}function S0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ou(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function k0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ou(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function lr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const j0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,C0=e=>j0.test(e);function b0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?gr(e):e,i;if(n)if(C0(n))i=n;else{if(n.includes("//")){let a=n;n=n.replace(/\/\/+/g,"/"),ou(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?i=_c(n.substring(1),"/"):i=_c(n,t)}else i=t;return{pathname:i,search:z0(r),hash:I0(o)}}function _c(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Da(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function E0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function iu(e,t){let n=E0(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function au(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=gr(e):(o=uo({},e),J(!o.pathname||!o.pathname.includes("?"),Da("?","pathname","search",o)),J(!o.pathname||!o.pathname.includes("#"),Da("#","pathname","hash",o)),J(!o.search||!o.search.includes("#"),Da("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,s;if(a==null)s=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let x=a.split("/");for(;x[0]==="..";)x.shift(),p-=1;o.pathname=x.join("/")}s=p>=0?t[p]:"/"}let u=b0(o,s),c=a&&a!=="/"&&a.endsWith("/"),g=(i||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||g)&&(u.pathname+="/"),u}const Kt=e=>e.join("/").replace(/\/\/+/g,"/"),P0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),z0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function T0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hp=["post","put","patch","delete"];new Set(Hp);const L0=["get",...Hp];new Set(L0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}const ra=S.createContext(null),Wp=S.createContext(null),It=S.createContext(null),oa=S.createContext(null),Tt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Vp=S.createContext(null);function _0(e,t){let{relative:n}=t===void 0?{}:t;xr()||J(!1);let{basename:r,navigator:o}=S.useContext(It),{hash:i,pathname:a,search:s}=ia(e,{relative:n}),u=a;return r!=="/"&&(u=a==="/"?r:Kt([r,a])),o.createHref({pathname:u,search:s,hash:i})}function xr(){return S.useContext(oa)!=null}function rn(){return xr()||J(!1),S.useContext(oa).location}function Gp(e){S.useContext(It).static||S.useLayoutEffect(e)}function Cn(){let{isDataRoute:e}=S.useContext(Tt);return e?V0():N0()}function N0(){xr()||J(!1);let e=S.useContext(ra),{basename:t,future:n,navigator:r}=S.useContext(It),{matches:o}=S.useContext(Tt),{pathname:i}=rn(),a=JSON.stringify(iu(o,n.v7_relativeSplatPath)),s=S.useRef(!1);return Gp(()=>{s.current=!0}),S.useCallback(function(c,g){if(g===void 0&&(g={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=au(c,JSON.parse(a),i,g.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Kt([t,p.pathname])),(g.replace?r.replace:r.push)(p,g.state,g)},[t,r,a,i,e])}function qp(){let{matches:e}=S.useContext(Tt),t=e[e.length-1];return t?t.params:{}}function ia(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(It),{matches:o}=S.useContext(Tt),{pathname:i}=rn(),a=JSON.stringify(iu(o,r.v7_relativeSplatPath));return S.useMemo(()=>au(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function R0(e,t){return $0(e,t)}function $0(e,t,n,r){xr()||J(!1);let{navigator:o}=S.useContext(It),{matches:i}=S.useContext(Tt),a=i[i.length-1],s=a?a.params:{};a&&a.pathname;let u=a?a.pathnameBase:"/";a&&a.route;let c=rn(),g;if(t){var p;let C=typeof t=="string"?gr(t):t;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||J(!1),g=C}else g=c;let x=g.pathname||"/",y=x;if(u!=="/"){let C=u.replace(/^\//,"").split("/");y="/"+x.replace(/^\//,"").split("/").slice(C.length).join("/")}let k=u0(e,{pathname:y}),j=B0(k&&k.map(C=>Object.assign({},C,{params:Object.assign({},s,C.params),pathname:Kt([u,o.encodeLocation?o.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:Kt([u,o.encodeLocation?o.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),i,n,r);return t&&j?S.createElement(oa.Provider,{value:{location:co({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Bt.Pop}},j):j}function O0(){let e=W0(),t=T0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:o},n):null,null)}const M0=S.createElement(O0,null);class A0 extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(Tt.Provider,{value:this.props.routeContext},S.createElement(Vp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F0(e){let{routeContext:t,match:n,children:r}=e,o=S.useContext(ra);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Tt.Provider,{value:t},r)}function B0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,s=(o=n)==null?void 0:o.errors;if(s!=null){let g=a.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);g>=0||J(!1),a=a.slice(0,Math.min(a.length,g+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<a.length;g++){let p=a[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=g),p.route.id){let{loaderData:x,errors:y}=n,k=p.route.loader&&x[p.route.id]===void 0&&(!y||y[p.route.id]===void 0);if(p.route.lazy||k){u=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((g,p,x)=>{let y,k=!1,j=null,C=null;n&&(y=s&&p.route.id?s[p.route.id]:void 0,j=p.route.errorElement||M0,u&&(c<0&&x===0?(G0("route-fallback"),k=!0,C=null):c===x&&(k=!0,C=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,x+1)),f=()=>{let m;return y?m=j:k?m=C:p.route.Component?m=S.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=g,S.createElement(F0,{match:p,routeContext:{outlet:g,matches:h,isDataRoute:n!=null},children:m})};return n&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?S.createElement(A0,{location:n.location,revalidation:n.revalidation,component:j,error:y,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):f()},null)}var Qp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qp||{}),Yp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yp||{});function D0(e){let t=S.useContext(ra);return t||J(!1),t}function U0(e){let t=S.useContext(Wp);return t||J(!1),t}function H0(e){let t=S.useContext(Tt);return t||J(!1),t}function Kp(e){let t=H0(),n=t.matches[t.matches.length-1];return n.route.id||J(!1),n.route.id}function W0(){var e;let t=S.useContext(Vp),n=U0(),r=Kp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function V0(){let{router:e}=D0(Qp.UseNavigateStable),t=Kp(Yp.UseNavigateStable),n=S.useRef(!1);return Gp(()=>{n.current=!0}),S.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,co({fromRouteId:t},i)))},[e,t])}const Nc={};function G0(e,t,n){Nc[e]||(Nc[e]=!0)}function q0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Q0(e){let{to:t,replace:n,state:r,relative:o}=e;xr()||J(!1);let{future:i,static:a}=S.useContext(It),{matches:s}=S.useContext(Tt),{pathname:u}=rn(),c=Cn(),g=au(t,iu(s,i.v7_relativeSplatPath),u,o==="path"),p=JSON.stringify(g);return S.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:o}),[c,p,o,n,r]),null}function D(e){J(!1)}function Y0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Bt.Pop,navigator:i,static:a=!1,future:s}=e;xr()&&J(!1);let u=t.replace(/^\/*/,"/"),c=S.useMemo(()=>({basename:u,navigator:i,static:a,future:co({v7_relativeSplatPath:!1},s)}),[u,s,i,a]);typeof r=="string"&&(r=gr(r));let{pathname:g="/",search:p="",hash:x="",state:y=null,key:k="default"}=r,j=S.useMemo(()=>{let C=lr(g,u);return C==null?null:{location:{pathname:C,search:p,hash:x,state:y,key:k},navigationType:o}},[u,g,p,x,y,k,o]);return j==null?null:S.createElement(It.Provider,{value:c},S.createElement(oa.Provider,{children:n,value:j}))}function K0(e){let{children:t,location:n}=e;return R0(Kl(t),n)}new Promise(()=>{});function Kl(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,o)=>{if(!S.isValidElement(r))return;let i=[...t,o];if(r.type===S.Fragment){n.push.apply(n,Kl(r.props.children,i));return}r.type!==D&&J(!1),!r.props.index||!r.props.children||J(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Kl(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ri(){return Ri=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ri.apply(this,arguments)}function Xp(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function X0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function J0(e,t){return e.button===0&&(!t||t==="_self")&&!X0(e)}function Xl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(o=>[n,o]):[[n,r]])},[]))}function Z0(e,t){let n=Xl(e);return t&&t.forEach((r,o)=>{n.has(o)||t.getAll(o).forEach(i=>{n.append(o,i)})}),n}const e1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],t1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],n1="6";try{window.__reactRouterVersion=n1}catch{}const r1=S.createContext({isTransitioning:!1}),o1="startTransition",Rc=Qm[o1];function i1(e){let{basename:t,children:n,future:r,window:o}=e,i=S.useRef();i.current==null&&(i.current=a0({window:o,v5Compat:!0}));let a=i.current,[s,u]=S.useState({action:a.action,location:a.location}),{v7_startTransition:c}=r||{},g=S.useCallback(p=>{c&&Rc?Rc(()=>u(p)):u(p)},[u,c]);return S.useLayoutEffect(()=>a.listen(g),[a,g]),S.useEffect(()=>q0(r),[r]),S.createElement(Y0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:a,future:r})}const a1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",l1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ie=S.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:s,target:u,to:c,preventScrollReset:g,viewTransition:p}=t,x=Xp(t,e1),{basename:y}=S.useContext(It),k,j=!1;if(typeof c=="string"&&l1.test(c)&&(k=c,a1))try{let m=new URL(window.location.href),v=c.startsWith("//")?new URL(m.protocol+c):new URL(c),E=lr(v.pathname,y);v.origin===m.origin&&E!=null?c=E+v.search+v.hash:j=!0}catch{}let C=_0(c,{relative:o}),h=u1(c,{replace:a,state:s,target:u,preventScrollReset:g,relative:o,viewTransition:p});function f(m){r&&r(m),m.defaultPrevented||h(m)}return S.createElement("a",Ri({},x,{href:k||C,onClick:j||i?r:f,ref:n,target:u}))}),Do=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:u,viewTransition:c,children:g}=t,p=Xp(t,t1),x=ia(u,{relative:p.relative}),y=rn(),k=S.useContext(Wp),{navigator:j,basename:C}=S.useContext(It),h=k!=null&&c1(x)&&c===!0,f=j.encodeLocation?j.encodeLocation(x).pathname:x.pathname,m=y.pathname,v=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;o||(m=m.toLowerCase(),v=v?v.toLowerCase():null,f=f.toLowerCase()),v&&C&&(v=lr(v,C)||v);const E=f!=="/"&&f.endsWith("/")?f.length-1:f.length;let b=m===f||!a&&m.startsWith(f)&&m.charAt(E)==="/",w=v!=null&&(v===f||!a&&v.startsWith(f)&&v.charAt(f.length)==="/"),z={isActive:b,isPending:w,isTransitioning:h},N=b?r:void 0,I;typeof i=="function"?I=i(z):I=[i,b?"active":null,w?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let B=typeof s=="function"?s(z):s;return S.createElement(ie,Ri({},p,{"aria-current":N,className:I,ref:n,style:B,to:u,viewTransition:c}),typeof g=="function"?g(z):g)});var Jl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Jl||(Jl={}));var $c;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})($c||($c={}));function s1(e){let t=S.useContext(ra);return t||J(!1),t}function u1(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=t===void 0?{}:t,u=Cn(),c=rn(),g=ia(e,{relative:a});return S.useCallback(p=>{if(J0(p,n)){p.preventDefault();let x=r!==void 0?r:Ni(c)===Ni(g);u(e,{replace:x,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[c,u,g,r,o,n,e,i,a,s])}function lu(e){let t=S.useRef(Xl(e)),n=S.useRef(!1),r=rn(),o=S.useMemo(()=>Z0(r.search,n.current?null:t.current),[r.search]),i=Cn(),a=S.useCallback((s,u)=>{const c=Xl(typeof s=="function"?s(o):s);n.current=!0,i("?"+c,u)},[i,o]);return[o,a]}function c1(e,t){t===void 0&&(t={});let n=S.useContext(r1);n==null&&J(!1);let{basename:r}=s1(Jl.useViewTransitionState),o=ia(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=lr(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=lr(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yl(o.pathname,a)!=null||Yl(o.pathname,i)!=null}const Jp="artilheiro-cart",Oc=0;function d1(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(Jp);return e?JSON.parse(e):[]}catch{return[]}}function _t(e,t){return`${e}-${t}`}const f1=d1();function p1(e,t){switch(t.type){case"LOAD":return Array.isArray(t.payload)?t.payload:[];case"ADD":{const{productId:n,name:r,image:o,size:i,quantity:a,unitPrice:s}=t.payload,u=_t(n,i);return e.find(g=>_t(g.productId,g.size)===u)?e.map(g=>_t(g.productId,g.size)===u?{...g,quantity:g.quantity+a}:g):[...e,{productId:n,name:r,image:o,size:i,quantity:a,unitPrice:s}]}case"UPDATE_QUANTITY":{const{productId:n,size:r,quantity:o}=t.payload,i=_t(n,r);return o<1?e.filter(a=>_t(a.productId,a.size)!==i):e.map(a=>_t(a.productId,a.size)===i?{...a,quantity:o}:a)}case"REMOVE":{const{productId:n,size:r}=t.payload,o=_t(n,r);return e.filter(i=>_t(i.productId,i.size)!==o)}case"CLEAR":return[];default:return e}}const Zp=S.createContext(null);function m1({children:e}){const[t,n]=S.useReducer(p1,f1),[r,o]=S.useState(!1);S.useEffect(()=>{try{localStorage.setItem(Jp,JSON.stringify(t))}catch{}},[t]);const i=S.useCallback(C=>{n({type:"ADD",payload:{productId:C.productId,name:C.name,image:C.image??"",size:C.size,quantity:Math.max(1,Number(C.quantity)||1),unitPrice:Number(C.unitPrice)||0}})},[]),a=S.useCallback((C,h,f)=>{n({type:"UPDATE_QUANTITY",payload:{productId:C,size:h,quantity:f}})},[]),s=S.useCallback((C,h)=>{n({type:"REMOVE",payload:{productId:C,size:h}})},[]),u=S.useCallback(()=>{n({type:"CLEAR"})},[]),c=S.useCallback(()=>o(!0),[]),g=S.useCallback(()=>o(!1),[]),p=t.reduce((C,h)=>C+h.quantity,0),x=t.reduce((C,h)=>C+h.unitPrice*h.quantity,0),y=S.useCallback(()=>x,[x]),k=S.useCallback(()=>x+Oc,[x]),j={items:t,itemCount:p,subtotal:x,getSubtotal:y,getTotal:k,addItem:i,updateQuantity:a,removeItem:s,clearCart:u,isMiniCartOpen:r,openMiniCart:c,closeMiniCart:g,freightPlaceholder:Oc};return l.jsx(Zp.Provider,{value:j,children:e})}function yo(){const e=S.useContext(Zp);if(!e)throw new Error("useCart must be used within CartProvider");return e}const em=S.createContext(null);let h1=0;function g1({children:e}){const[t,n]=S.useState([]),r=S.useCallback((c,g="error",p=5e3)=>{const x=++h1;return n(y=>[...y,{id:x,message:c,type:g}]),p>0&&setTimeout(()=>{o(x)},p),x},[]),o=S.useCallback(c=>{n(g=>g.filter(p=>p.id!==c))},[]),i=S.useCallback(c=>r(c,"error"),[r]),a=S.useCallback(c=>r(c,"success"),[r]),s=S.useCallback(c=>r(c,"info"),[r]),u=S.useMemo(()=>({toasts:t,addToast:r,removeToast:o,showError:i,showSuccess:a,showInfo:s}),[t,r,o,i,a,s]);return l.jsx(em.Provider,{value:u,children:e})}function aa(){const e=S.useContext(em);if(!e)throw new Error("useToast must be used within ToastProvider");return e}var we=function(){return we=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},we.apply(this,arguments)};function sr(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var q="-ms-",Vr="-moz-",F="-webkit-",tm="comm",la="rule",su="decl",x1="@import",v1="@namespace",nm="@keyframes",y1="@layer",rm=Math.abs,uu=String.fromCharCode,Zl=Object.assign;function w1(e,t){return le(e,0)^45?(((t<<2^le(e,0))<<2^le(e,1))<<2^le(e,2))<<2^le(e,3):0}function om(e){return e.trim()}function vt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function oi(e,t,n){return e.indexOf(t,n)}function le(e,t){return e.charCodeAt(t)|0}function Sn(e,t,n){return e.slice(t,n)}function it(e){return e.length}function im(e){return e.length}function $r(e,t){return t.push(e),e}function S1(e,t){return e.map(t).join("")}function Mc(e,t){return e.filter(function(n){return!vt(n,t)})}var sa=1,ur=1,am=0,Ze=0,re=0,vr="";function ua(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:sa,column:ur,length:a,return:"",siblings:s}}function Nt(e,t){return Zl(ua("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Tn(e){for(;e.root;)e=Nt(e.root,{children:[e]});$r(e,e.siblings)}function k1(){return re}function j1(){return re=Ze>0?le(vr,--Ze):0,ur--,re===10&&(ur=1,sa--),re}function ut(){return re=Ze<am?le(vr,Ze++):0,ur++,re===10&&(ur=1,sa++),re}function Dt(){return le(vr,Ze)}function ii(){return Ze}function ca(e,t){return Sn(vr,e,t)}function fo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function C1(e){return sa=ur=1,am=it(vr=e),Ze=0,[]}function b1(e){return vr="",e}function Ua(e){return om(ca(Ze-1,es(e===91?e+2:e===40?e+1:e)))}function E1(e){for(;(re=Dt())&&re<33;)ut();return fo(e)>2||fo(re)>3?"":" "}function P1(e,t){for(;--t&&ut()&&!(re<48||re>102||re>57&&re<65||re>70&&re<97););return ca(e,ii()+(t<6&&Dt()==32&&ut()==32))}function es(e){for(;ut();)switch(re){case e:return Ze;case 34:case 39:e!==34&&e!==39&&es(re);break;case 40:e===41&&es(e);break;case 92:ut();break}return Ze}function z1(e,t){for(;ut()&&e+re!==57;)if(e+re===84&&Dt()===47)break;return"/*"+ca(t,Ze-1)+"*"+uu(e===47?e:ut())}function I1(e){for(;!fo(Dt());)ut();return ca(e,Ze)}function T1(e){return b1(ai("",null,null,null,[""],e=C1(e),0,[0],e))}function ai(e,t,n,r,o,i,a,s,u){for(var c=0,g=0,p=a,x=0,y=0,k=0,j=1,C=1,h=1,f=0,m="",v=o,E=i,b=r,w=m;C;)switch(k=f,f=ut()){case 40:if(k!=108&&le(w,p-1)==58){oi(w+=O(Ua(f),"&","&\f"),"&\f",rm(c?s[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:w+=Ua(f);break;case 9:case 10:case 13:case 32:w+=E1(k);break;case 92:w+=P1(ii()-1,7);continue;case 47:switch(Dt()){case 42:case 47:$r(L1(z1(ut(),ii()),t,n,u),u),(fo(k||1)==5||fo(Dt()||1)==5)&&it(w)&&Sn(w,-1,void 0)!==" "&&(w+=" ");break;default:w+="/"}break;case 123*j:s[c++]=it(w)*h;case 125*j:case 59:case 0:switch(f){case 0:case 125:C=0;case 59+g:h==-1&&(w=O(w,/\f/g,"")),y>0&&(it(w)-p||j===0&&k===47)&&$r(y>32?Fc(w+";",r,n,p-1,u):Fc(O(w," ","")+";",r,n,p-2,u),u);break;case 59:w+=";";default:if($r(b=Ac(w,t,n,c,g,o,s,m,v=[],E=[],p,i),i),f===123)if(g===0)ai(w,t,b,b,v,i,p,s,E);else{switch(x){case 99:if(le(w,3)===110)break;case 108:if(le(w,2)===97)break;default:g=0;case 100:case 109:case 115:}g?ai(e,b,b,r&&$r(Ac(e,b,b,0,0,o,s,m,o,v=[],p,E),E),o,E,p,s,r?v:E):ai(w,b,b,b,[""],E,0,s,E)}}c=g=y=0,j=h=1,m=w="",p=a;break;case 58:p=1+it(w),y=k;default:if(j<1){if(f==123)--j;else if(f==125&&j++==0&&j1()==125)continue}switch(w+=uu(f),f*j){case 38:h=g>0?1:(w+="\f",-1);break;case 44:s[c++]=(it(w)-1)*h,h=1;break;case 64:Dt()===45&&(w+=Ua(ut())),x=Dt(),g=p=it(m=w+=I1(ii())),f++;break;case 45:k===45&&it(w)==2&&(j=0)}}return i}function Ac(e,t,n,r,o,i,a,s,u,c,g,p){for(var x=o-1,y=o===0?i:[""],k=im(y),j=0,C=0,h=0;j<r;++j)for(var f=0,m=Sn(e,x+1,x=rm(C=a[j])),v=e;f<k;++f)(v=om(C>0?y[f]+" "+m:O(m,/&\f/g,y[f])))&&(u[h++]=v);return ua(e,t,n,o===0?la:s,u,c,g,p)}function L1(e,t,n,r){return ua(e,t,n,tm,uu(k1()),Sn(e,2,-2),0,r)}function Fc(e,t,n,r,o){return ua(e,t,n,su,Sn(e,0,r),Sn(e,r+1,-1),r,o)}function lm(e,t,n){switch(w1(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return F+e+e;case 4855:return F+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Vr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Vr+e+q+e+e;case 5936:switch(le(e,t+11)){case 114:return F+e+q+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+q+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+q+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+q+e+e;case 6165:return F+e+q+"flex-"+e+e;case 5187:return F+e+O(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+q+"flex-$1$2")+e;case 5443:return F+e+q+"flex-item-"+O(e,/flex-|-self/g,"")+(vt(e,/flex-|baseline/)?"":q+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return F+e+q+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+q+O(e,"shrink","negative")+e;case 5292:return F+e+q+O(e,"basis","preferred-size")+e;case 6060:return F+"box-"+O(e,"-grow","")+F+e+q+O(e,"grow","positive")+e;case 4554:return F+O(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+q+"flex-pack:$3"),/space-between/,"justify")+F+e+e;case 4200:if(!vt(e,/flex-|baseline/))return q+"grid-column-align"+Sn(e,t)+e;break;case 2592:case 3360:return q+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,vt(r.props,/grid-\w+-end/)})?~oi(e+(n=n[t].value),"span",0)?e:q+O(e,"-start","")+e+q+"grid-row-span:"+(~oi(n,"span",0)?vt(n,/\d+/):+vt(n,/\d+/)-+vt(e,/\d+/))+";":q+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return vt(r.props,/grid-\w+-start/)})?e:q+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(it(e)-1-t>6)switch(le(e,t+1)){case 109:if(le(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Vr+(le(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~oi(e,"stretch",0)?lm(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,s,u,c){return q+o+":"+i+c+(a?q+o+"-span:"+(s?u:+u-+i)+c:"")+e});case 4949:if(le(e,t+6)===121)return O(e,":",":"+F)+e;break;case 6444:switch(le(e,le(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(le(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+q+"$2box$3")+e;case 100:return O(e,":",":"+q)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function $i(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function _1(e,t,n,r){switch(e.type){case y1:if(e.children.length)break;case x1:case v1:case su:return e.return=e.return||e.value;case tm:return"";case nm:return e.return=e.value+"{"+$i(e.children,r)+"}";case la:if(!it(e.value=e.props.join(",")))return""}return it(n=$i(e.children,r))?e.return=e.value+"{"+n+"}":""}function N1(e){var t=im(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}function R1(e){return function(t){t.root||(t=t.return)&&e(t)}}function $1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case su:e.return=lm(e.value,e.length,n);return;case nm:return $i([Nt(e,{value:O(e.value,"@","@"+F)})],r);case la:if(e.length)return S1(n=e.props,function(o){switch(vt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Tn(Nt(e,{props:[O(o,/:(read-\w+)/,":"+Vr+"$1")]})),Tn(Nt(e,{props:[o]})),Zl(e,{props:Mc(n,r)});break;case"::placeholder":Tn(Nt(e,{props:[O(o,/:(plac\w+)/,":"+F+"input-$1")]})),Tn(Nt(e,{props:[O(o,/:(plac\w+)/,":"+Vr+"$1")]})),Tn(Nt(e,{props:[O(o,/:(plac\w+)/,q+"input-$1")]})),Tn(Nt(e,{props:[o]})),Zl(e,{props:Mc(n,r)});break}return""})}}var O1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ae={},cr=typeof process<"u"&&Ae!==void 0&&(Ae.REACT_APP_SC_ATTR||Ae.SC_ATTR)||"data-styled",sm="active",um="data-styled-version",da="6.3.8",cu=`/*!sc*/
`,Oi=typeof window<"u"&&typeof document<"u",jt=pe.createContext===void 0,M1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ae!==void 0&&Ae.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ae.REACT_APP_SC_DISABLE_SPEEDY!==""?Ae.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ae.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ae!==void 0&&Ae.SC_DISABLE_SPEEDY!==void 0&&Ae.SC_DISABLE_SPEEDY!==""&&Ae.SC_DISABLE_SPEEDY!=="false"&&Ae.SC_DISABLE_SPEEDY),A1={},fa=Object.freeze([]),dr=Object.freeze({});function cm(e,t,n){return n===void 0&&(n=dr),e.theme!==n.theme&&e.theme||t||n.theme}var dm=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),F1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,B1=/(^-|-$)/g;function Bc(e){return e.replace(F1,"-").replace(B1,"")}var D1=/(a)(d)/gi,Dc=function(e){return String.fromCharCode(e+(e>25?39:97))};function ts(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Dc(t%52)+n;return(Dc(t%52)+n).replace(D1,"$1-$2")}var Ha,Vn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},fm=function(e){return Vn(5381,e)};function du(e){return ts(fm(e)>>>0)}function U1(e){return e.displayName||e.name||"Component"}function Wa(e){return typeof e=="string"&&!0}var pm=typeof Symbol=="function"&&Symbol.for,mm=pm?Symbol.for("react.memo"):60115,H1=pm?Symbol.for("react.forward_ref"):60112,W1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},V1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},G1=((Ha={})[H1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ha[mm]=hm,Ha);function Uc(e){return("type"in(t=e)&&t.type.$$typeof)===mm?hm:"$$typeof"in e?G1[e.$$typeof]:W1;var t}var q1=Object.defineProperty,Q1=Object.getOwnPropertyNames,Hc=Object.getOwnPropertySymbols,Y1=Object.getOwnPropertyDescriptor,K1=Object.getPrototypeOf,Wc=Object.prototype;function gm(e,t,n){if(typeof t!="string"){if(Wc){var r=K1(t);r&&r!==Wc&&gm(e,r,n)}var o=Q1(t);Hc&&(o=o.concat(Hc(t)));for(var i=Uc(e),a=Uc(t),s=0;s<o.length;++s){var u=o[s];if(!(u in V1||n&&n[u]||a&&u in a||i&&u in i)){var c=Y1(t,u);try{q1(e,u,c)}catch{}}}}return e}function fr(e){return typeof e=="function"}function fu(e){return typeof e=="object"&&"styledComponentId"in e}function pn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Mi(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function po(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ns(e,t,n){if(n===void 0&&(n=!1),!n&&!po(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ns(e[r],t[r]);else if(po(t))for(var r in t)e[r]=ns(e[r],t[r]);return e}function pu(e,t){Object.defineProperty(e,"toString",{value:t})}function wo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var X1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw wo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var s=this.indexOfGroup(t+1),u=(a=0,n.length);a<u;a++)this.tag.insertRule(s,n[a])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(cu);return n},e}(),li=new Map,Ai=new Map,si=1,Gn=function(e){if(li.has(e))return li.get(e);for(;Ai.has(si);)si++;var t=si++;return li.set(e,t),Ai.set(t,e),t},J1=function(e,t){si=t+1,li.set(e,t),Ai.set(t,e)},Z1="style[".concat(cr,"][").concat(um,'="').concat(da,'"]'),ex=new RegExp("^".concat(cr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tx=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},nx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(cu),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var u=s.match(ex);if(u){var c=0|parseInt(u[1],10),g=u[2];c!==0&&(J1(g,c),tx(e,g,u[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},Vc=function(e){for(var t=document.querySelectorAll(Z1),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(cr)!==sm&&(nx(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function rx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var u=Array.from(s.querySelectorAll("style[".concat(cr,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(cr,sm),r.setAttribute(um,da);var a=rx();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},ox=function(){function e(t){this.element=xm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw wo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ix=function(){function e(t){this.element=xm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ax=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gc=Oi,lx={isServer:!Oi,useCSSOMInjection:!M1},Fi=function(){function e(t,n,r){t===void 0&&(t=dr),n===void 0&&(n={});var o=this;this.options=we(we({},lx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Oi&&Gc&&(Gc=!1,Vc(this)),pu(this,function(){return function(i){for(var a=i.getTag(),s=a.length,u="",c=function(p){var x=function(h){return Ai.get(h)}(p);if(x===void 0)return"continue";var y=i.names.get(x),k=a.getGroup(p);if(y===void 0||!y.size||k.length===0)return"continue";var j="".concat(cr,".g").concat(p,'[id="').concat(x,'"]'),C="";y!==void 0&&y.forEach(function(h){h.length>0&&(C+="".concat(h,","))}),u+="".concat(k).concat(j,'{content:"').concat(C,'"}').concat(cu)},g=0;g<s;g++)c(g);return u}(o)})}return e.registerId=function(t){return Gn(t)},e.prototype.rehydrate=function(){!this.server&&Oi&&Vc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(we(we({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new ax(o):r?new ox(o):new ix(o)}(this.options),new X1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Gn(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Gn(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Gn(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),sx=/&/g,qn=47;function qc(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,o=!1,i=0;i<t;i++){var a=e.charCodeAt(i);if(r!==0||o||a!==qn||e.charCodeAt(i+1)!==42)if(o)a===42&&e.charCodeAt(i+1)===qn&&(o=!1,i++);else if(a!==34&&a!==39||i!==0&&e.charCodeAt(i-1)===92){if(r===0){if(a===123)n++;else if(a===125&&--n<0)return!0}}else r===0?r=a:r===a&&(r=0);else o=!0,i++}return n!==0||r!==0}function vm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=vm(n.children,t)),n})}function ux(e){var t,n,r,o=dr,i=o.options,a=i===void 0?dr:i,s=o.plugins,u=s===void 0?fa:s,c=function(x,y,k){return k.startsWith(n)&&k.endsWith(n)&&k.replaceAll(n,"").length>0?".".concat(t):x},g=u.slice();g.push(function(x){x.type===la&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(sx,n).replace(r,c))}),a.prefix&&g.push($1),g.push(_1);var p=function(x,y,k,j){y===void 0&&(y=""),k===void 0&&(k=""),j===void 0&&(j="&"),t=j,n=y,r=new RegExp("\\".concat(n,"\\b"),"g");var C=function(m){if(!qc(m))return m;for(var v=m.length,E="",b=0,w=0,z=0,N=!1,I=0;I<v;I++){var B=m.charCodeAt(I);if(z!==0||N||B!==qn||m.charCodeAt(I+1)!==42)if(N)B===42&&m.charCodeAt(I+1)===qn&&(N=!1,I++);else if(B!==34&&B!==39||I!==0&&m.charCodeAt(I-1)===92){if(z===0)if(B===123)w++;else if(B===125){if(--w<0){for(var ee=I+1;ee<v;){var ue=m.charCodeAt(ee);if(ue===59||ue===10)break;ee++}ee<v&&m.charCodeAt(ee)===59&&ee++,w=0,I=ee-1,b=ee;continue}w===0&&(E+=m.substring(b,I+1),b=I+1)}else B===59&&w===0&&(E+=m.substring(b,I+1),b=I+1)}else z===0?z=B:z===B&&(z=0);else N=!0,I++}if(b<v){var L=m.substring(b);qc(L)||(E+=L)}return E}(function(m){if(m.indexOf("//")===-1)return m;for(var v=m.length,E=[],b=0,w=0,z=0,N=0;w<v;){var I=m.charCodeAt(w);if(I!==34&&I!==39||w!==0&&m.charCodeAt(w-1)===92)if(z===0)if(I===40&&w>=3&&(32|m.charCodeAt(w-1))==108&&(32|m.charCodeAt(w-2))==114&&(32|m.charCodeAt(w-3))==117)N=1,w++;else if(N>0)I===41?N--:I===40&&N++,w++;else if(I===qn&&w+1<v&&m.charCodeAt(w+1)===qn){for(w>b&&E.push(m.substring(b,w));w<v&&m.charCodeAt(w)!==10;)w++;b=w}else w++;else w++;else z===0?z=I:z===I&&(z=0),w++}return b===0?m:(b<v&&E.push(m.substring(b)),E.join(""))}(x)),h=T1(k||y?"".concat(k," ").concat(y," { ").concat(C," }"):C);a.namespace&&(h=vm(h,a.namespace));var f=[];return $i(h,N1(g.concat(R1(function(m){return f.push(m)})))),f};return p.hash=u.length?u.reduce(function(x,y){return y.name||wo(15),Vn(x,y.name)},5381).toString():"",p}var cx=new Fi,rs=ux(),os={shouldForwardProp:void 0,styleSheet:cx,stylis:rs},ym=jt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(os)}}:pe.createContext(os);ym.Consumer;jt||pe.createContext(void 0);function is(){return jt?os:pe.useContext(ym)}var wm=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=rs);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,pu(this,function(){throw wo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=rs),this.name+t.hash},e}();function dx(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in O1||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var fx=function(e){return e>="A"&&e<="Z"};function Qc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;fx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Sm=function(e){return e==null||e===!1||e===""},km=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Sm(r)&&(Array.isArray(r)&&r.isCss||fr(r)?t.push("".concat(Qc(n),":"),r,";"):po(r)?t.push.apply(t,sr(sr(["".concat(n," {")],km(r),!1),["}"],!1)):t.push("".concat(Qc(n),": ").concat(dx(n,r),";")))}return t};function Xt(e,t,n,r){if(Sm(e))return[];if(fu(e))return[".".concat(e.styledComponentId)];if(fr(e)){if(!fr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Xt(o,t,n,r)}var i;return e instanceof wm?n?(e.inject(n,r),[e.getName(r)]):[e]:po(e)?km(e):Array.isArray(e)?Array.prototype.concat.apply(fa,e.map(function(a){return Xt(a,t,n,r)})):[e.toString()]}function jm(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(fr(n)&&!fu(n))return!1}return!0}var px=fm(da),mx=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&jm(t),this.componentId=n,this.baseHash=Vn(px,n),this.baseStyle=r,Fi.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=pn(o,this.staticRulesId);else{var i=Mi(Xt(this.rules,t,n,r)),a=ts(Vn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var s=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,s)}o=pn(o,a),this.staticRulesId=a}else{for(var u=Vn(this.baseHash,r.hash),c="",g=0;g<this.rules.length;g++){var p=this.rules[g];if(typeof p=="string")c+=p;else if(p){var x=Mi(Xt(p,t,n,r));u=Vn(u,x+g),c+=x}}if(c){var y=ts(u>>>0);if(!n.hasNameForId(this.componentId,y)){var k=r(c,".".concat(y),void 0,this.componentId);n.insertRules(this.componentId,y,k)}o=pn(o,y)}}return{className:o,css:typeof window>"u"?n.getTag().getGroup(Gn(this.componentId)):""}},e}(),mu=jt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:pe.createContext(void 0);mu.Consumer;var Va={};function hx(e,t,n){var r=fu(e),o=e,i=!Wa(e),a=t.attrs,s=a===void 0?fa:a,u=t.componentId,c=u===void 0?function(v,E){var b=typeof v!="string"?"sc":Bc(v);Va[b]=(Va[b]||0)+1;var w="".concat(b,"-").concat(du(da+b+Va[b]));return E?"".concat(E,"-").concat(w):w}(t.displayName,t.parentComponentId):u,g=t.displayName,p=g===void 0?function(v){return Wa(v)?"styled.".concat(v):"Styled(".concat(U1(v),")")}(e):g,x=t.displayName&&t.componentId?"".concat(Bc(t.displayName),"-").concat(t.componentId):t.componentId||c,y=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,k=t.shouldForwardProp;if(r&&o.shouldForwardProp){var j=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;k=function(v,E){return j(v,E)&&C(v,E)}}else k=j}var h=new mx(n,x,r?o.componentStyle:void 0);function f(v,E){return function(b,w,z){var N=b.attrs,I=b.componentStyle,B=b.defaultProps,ee=b.foldedComponentIds,ue=b.styledComponentId,L=b.target,$e=jt?void 0:pe.useContext(mu),ge=is(),Pe=b.shouldForwardProp||ge.shouldForwardProp,T=cm(w,$e,B)||dr,R=function(So,Pn,ko){for(var yr,gt=we(we({},Pn),{className:void 0,theme:ko}),ma=0;ma<So.length;ma+=1){var jo=fr(yr=So[ma])?yr(gt):yr;for(var zn in jo)zn==="className"?gt.className=pn(gt.className,jo[zn]):zn==="style"?gt.style=we(we({},gt.style),jo[zn]):gt[zn]=jo[zn]}return"className"in Pn&&typeof Pn.className=="string"&&(gt.className=pn(gt.className,Pn.className)),gt}(N,w,T),$=R.as||L,H={};for(var W in R)R[W]===void 0||W[0]==="$"||W==="as"||W==="theme"&&R.theme===T||(W==="forwardedAs"?H.as=R.forwardedAs:Pe&&!Pe(W,$)||(H[W]=R[W]));var an=function(So,Pn){var ko=is(),yr=So.generateAndInjectStyles(Pn,ko.styleSheet,ko.stylis);return yr}(I,R),et=an.className,En=an.css,tt=pn(ee,ue);et&&(tt+=" "+et),R.className&&(tt+=" "+R.className),H[Wa($)&&!dm.has($)?"class":"className"]=tt,z&&(H.ref=z);var ln=S.createElement($,H);return jt&&En?pe.createElement(pe.Fragment,null,pe.createElement("style",{precedence:"styled-components",href:"sc-".concat(ue,"-").concat(et),children:En}),ln):ln}(m,v,E)}f.displayName=p;var m=pe.forwardRef(f);return m.attrs=y,m.componentStyle=h,m.displayName=p,m.shouldForwardProp=k,m.foldedComponentIds=r?pn(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=x,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(E){for(var b=[],w=1;w<arguments.length;w++)b[w-1]=arguments[w];for(var z=0,N=b;z<N.length;z++)ns(E,N[z],!0);return E}({},o.defaultProps,v):v}}),pu(m,function(){return".".concat(m.styledComponentId)}),i&&gm(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Yc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Kc=function(e){return Object.assign(e,{isCss:!0})};function hu(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(fr(e)||po(e))return Kc(Xt(Yc(fa,sr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Xt(r):Kc(Xt(Yc(r,t)))}function as(e,t,n){if(n===void 0&&(n=dr),!t)throw wo(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,hu.apply(void 0,sr([o],i,!1)))};return r.attrs=function(o){return as(e,t,we(we({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return as(e,t,we(we({},n),o))},r}var Cm=function(e){return as(hx,e)},d=Cm;dm.forEach(function(e){d[e]=Cm(e)});var gx=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=jm(t),Fi.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(Mi(Xt(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&Fi.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?r.hasNameForId(i,i)||this.createStyles(t,n,r,o):(this.removeStyles(t,r),this.createStyles(t,n,r,o))},e}();function xx(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=hu.apply(void 0,sr([e],t,!1)),o="sc-global-".concat(du(JSON.stringify(r))),i=new gx(r,o),a=new WeakMap,s=function(u){var c=is(),g=jt?void 0:pe.useContext(mu),p=a.get(c.styleSheet);if(p===void 0&&(p=c.styleSheet.allocateGSInstance(o),a.set(c.styleSheet,p)),(typeof window>"u"||!c.styleSheet.server)&&function(C,h,f,m,v){if(i.isStatic)i.renderStyles(C,A1,f,v);else{var E=we(we({},h),{theme:cm(h,m,s.defaultProps)});i.renderStyles(C,E,f,v)}}(p,u,c.styleSheet,g,c.stylis),!jt){var x=pe.useRef(!0);pe.useLayoutEffect(function(){return x.current=!1,function(){x.current=!0,queueMicrotask(function(){x.current&&(i.removeStyles(p,c.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(C){return C.remove()}))})}},[p,c.styleSheet])}if(jt){var y=o+p,k=typeof window>"u"?c.styleSheet.getTag().getGroup(Gn(y)):"";if(k){var j="".concat(o,"-").concat(p);return pe.createElement("style",{key:j,"data-styled-global":o,precedence:"styled-components",href:j,children:k})}}return null};return pe.memo(s)}function bn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Mi(hu.apply(void 0,sr([e],t,!1))),o=du(r);return new wm(o,r)}const vx=d.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`,yx=d.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
`,wx=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Sx=d.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,kx=d.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,jx=d.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,Cx=d.span`
  font-size: 0.9375rem;
  font-weight: 700;
  color: #1a1a1a;
`,bx=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem;
`,Ex=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #6b7280;
  background: transparent;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #c41e3a;
    background: rgba(196, 30, 58, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`;function Px(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const zx=()=>l.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 6h18"}),l.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),l.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),l.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),l.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]});function Ix({item:e,onRemove:t}){const n=e.unitPrice*e.quantity;return l.jsxs(vx,{children:[l.jsx(yx,{children:l.jsx(wx,{src:e.image,alt:e.name})}),l.jsxs(Sx,{children:[l.jsx(kx,{children:e.name}),l.jsxs(jx,{children:["Tamanho ",e.size," · ",e.quantity,"x"]}),l.jsx(Cx,{children:Px(n)})]}),l.jsx(bx,{children:l.jsx(Ex,{type:"button",onClick:()=>t==null?void 0:t(e.productId,e.size),"aria-label":"Remover item",children:l.jsx(zx,{})})})]})}const Tx=d.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  visibility: ${({$open:e})=>e?"visible":"hidden"};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  -webkit-tap-highlight-color: transparent;
`,Lx=d.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1101;
  width: 100%;
  max-width: 420px;
  background: #fff;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transform: ${({$open:e})=>e?"translateX(0)":"translateX(100%)"};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 767px) {
    max-width: none;
    border-radius: 16px 16px 0 0;
    top: auto;
    height: 95vh;
    max-height: 95vh;
    min-height: 0;
    transform: ${({$open:e})=>e?"translateY(0)":"translateY(100%)"};
  }
`,_x=d.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
`,Nx=d.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,Rx=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  color: #6b7280;
  background: transparent;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #1a1a1a;
    background: rgba(0, 0, 0, 0.05);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`,$x=d.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  min-height: 0;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`,Ox=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
`,Mx=d.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 1.5rem;
`,Ax=d.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Fx=d.footer`
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  background: #fff;
  flex-shrink: 0;
`,Bx=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,Dx=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,Ux=d.button`
  width: 100%;
  min-height: 48px;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    background: #a01930;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`,Hx=d.button`
  width: 100%;
  min-height: 48px;
  height: 48px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #c41e3a;
  background: transparent;
  border: 2px solid #c41e3a;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(196, 30, 58, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`,Wx=d.button`
  width: 100%;
  max-width: 280px;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #a01930;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`;function Vx(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const Gx=()=>l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"M18 6 6 18M6 6l12 12"})});function qx(){const{items:e,subtotal:t,isMiniCartOpen:n,closeMiniCart:r,removeItem:o,itemCount:i}=yo(),a=e.length===0,s=u=>{u.target===u.currentTarget&&r()};return l.jsxs(l.Fragment,{children:[l.jsx(Tx,{$open:n,onClick:s,"aria-hidden":"true"}),l.jsxs(Lx,{$open:n,role:"dialog","aria-modal":"true","aria-label":"Meu Carrinho",children:[l.jsxs(_x,{children:[l.jsx(Nx,{children:"Meu Carrinho"}),l.jsx(Rx,{type:"button",onClick:r,"aria-label":"Fechar carrinho",children:l.jsx(Gx,{})})]}),l.jsx($x,{children:a?l.jsxs(Ox,{children:[l.jsx(Mx,{children:"Seu carrinho está vazio"}),l.jsx(Wx,{as:ie,to:"/produtos",onClick:r,children:"Explorar produtos"})]}):l.jsx(Ax,{children:e.map(u=>l.jsx(Ix,{item:u,onRemove:o},`${u.productId}-${u.size}`))})}),!a&&l.jsxs(Fx,{children:[l.jsxs(Bx,{children:[l.jsx("span",{children:"Subtotal"}),l.jsx("span",{children:Vx(t)})]}),l.jsxs(Dx,{children:[l.jsx(Ux,{as:ie,to:"/carrinho",onClick:r,children:"Ir para o carrinho"}),l.jsx(Hx,{as:ie,to:"/checkout",onClick:r,children:"Finalizar compra"})]})]})]})]})}const Qx=bn`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Yx=bn`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,Kx=d.div`
  position: fixed;
  top: 5rem;
  right: 1rem;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 400px;
  width: calc(100% - 2rem);
  pointer-events: none;

  @media (max-width: 768px) {
    top: 4.5rem;
    right: 0.5rem;
    width: calc(100% - 1rem);
  }
`,Xx=d.div`
  background: ${e=>e.$type==="success"?"#10b981":e.$type==="info"?"#3b82f6":"#ef4444"};
  color: white;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  animation: ${Qx} 0.3s ease-out;
  pointer-events: all;
  font-size: 0.9375rem;
  line-height: 1.5;

  &.removing {
    animation: ${Yx} 0.3s ease-out forwards;
  }
`,Jx=d.div`
  flex: 1;
  font-weight: 500;
`,Zx=d.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }
`;function ev(){const{toasts:e,removeToast:t}=aa();return e.length===0?null:l.jsx(Kx,{children:e.map(n=>l.jsxs(Xx,{$type:n.type,children:[l.jsx(Jx,{children:n.message}),l.jsx(Zx,{onClick:()=>t(n.id),"aria-label":"Fechar notificação",children:"×"})]},n.id))})}const Xc=[{label:"Início",path:"/"},{label:"Times",path:"/times"},{label:"Lançamentos",path:"/lancamentos"},{label:"Promoções",path:"/promocoes"}],tv=[{id:1,title:"Camisas Nacionais",slug:"nacionais",image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",link:"/categoria/nacionais"},{id:2,title:"Camisas Europeias",slug:"europeias",image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",link:"/categoria/europeias"},{id:3,title:"Retrô",slug:"retro",image:"/banners/retro_banner.jpg",link:"/categoria/retro"},{id:4,title:"Promoções",slug:"promocoes",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",link:"/promocoes"}],nv=[{id:1,name:"Flamengo",price:299.9,originalPrice:349.9,image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",badge:"Novo",link:"/produto/1"},{id:2,name:"Corinthians",price:279.9,originalPrice:null,image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",badge:null,link:"/produto/2"},{id:3,name:"Real Madrid",price:399.9,originalPrice:449.9,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Promo",link:"/produto/3"},{id:4,name:"Barcelona",price:389.9,originalPrice:null,image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",badge:"Novo",link:"/produto/4"},{id:5,name:"Palmeiras",price:269.9,originalPrice:319.9,image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",badge:"Promo",link:"/produto/5"},{id:6,name:"São Paulo",price:289.9,originalPrice:null,image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:null,link:"/produto/6"},{id:7,name:"Manchester United",price:419.9,originalPrice:null,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",badge:"Novo",link:"/produto/7"},{id:8,name:"Liverpool",price:409.9,originalPrice:459.9,image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Promo",link:"/produto/8"}],rv={title:"Até 40% OFF",subtitle:"Em camisas selecionadas",ctaLabel:"Ver ofertas",ctaLink:"/promocoes",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80"},ov=[{id:1,name:"Flamengo 2025/26",price:299.9,originalPrice:349.9,image:"/times/Brasileirao/camisa%20flamengo%2025-26.jpg",imageHover:"/times/Brasileirao/camisa%20flamengo%2025-26.jpg",badge:"Novo",link:"/produto/1",team:"Flamengo",league:"brasileirao",category:"nacionais",sizes:["P","M","G","GG"],isPromo:!1,salesCount:120,createdAt:"2025-01-15"},{id:2,name:"Corinthians 2025/26",price:279.9,originalPrice:null,image:"/times/Brasileirao/Corinthians%2025-26.jpg",imageHover:"/times/Brasileirao/Corinthians%2025-26.jpg",badge:"Novo",link:"/produto/2",team:"Corinthians",league:"brasileirao",category:"nacionais",sizes:["P","M","G","GG","EG"],isPromo:!1,salesCount:95,createdAt:"2024-11-01"},{id:3,name:"Real Madrid",price:399.9,originalPrice:449.9,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Promo",link:"/produto/3",team:"Real Madrid",league:"la-liga",category:"europeias",sizes:["M","G","GG"],isPromo:!0,salesCount:210,createdAt:"2024-09-10"},{id:4,name:"Barcelona",price:389.9,originalPrice:null,image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",badge:"Novo",link:"/produto/4",team:"Barcelona",league:"la-liga",category:"europeias",sizes:["P","M","G"],isPromo:!1,salesCount:88,createdAt:"2025-01-20"},{id:5,name:"Palmeiras",price:269.9,originalPrice:319.9,image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",badge:"Promo",link:"/produto/5",team:"Palmeiras",league:"brasileirao",category:"nacionais",sizes:["P","M","G","GG"],isPromo:!0,salesCount:156,createdAt:"2024-10-05"},{id:6,name:"São Paulo",price:289.9,originalPrice:null,image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:null,link:"/produto/6",team:"São Paulo",league:"brasileirao",category:"nacionais",sizes:["M","G","GG"],isPromo:!1,salesCount:72,createdAt:"2024-08-20"},{id:7,name:"Manchester United",price:419.9,originalPrice:null,image:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",badge:"Novo",link:"/produto/7",team:"Manchester United",league:"premier-league",category:"europeias",sizes:["P","M","G","GG"],isPromo:!1,salesCount:134,createdAt:"2025-01-10"},{id:8,name:"Liverpool",price:409.9,originalPrice:459.9,image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Promo",link:"/produto/8",team:"Liverpool",league:"premier-league",category:"europeias",sizes:["M","G"],isPromo:!0,salesCount:98,createdAt:"2024-12-01"},{id:9,name:"Santos",price:259.9,originalPrice:299.9,image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",badge:"Promo",link:"/produto/9",team:"Santos",league:"brasileirao",category:"nacionais",sizes:["P","M","G","GG"],isPromo:!0,salesCount:64,createdAt:"2024-07-15"},{id:10,name:"Grêmio",price:274.9,originalPrice:null,image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",badge:null,link:"/produto/10",team:"Grêmio",league:"brasileirao",category:"nacionais",sizes:["M","G","GG"],isPromo:!1,salesCount:81,createdAt:"2024-09-01"},{id:11,name:"Chelsea",price:394.9,originalPrice:null,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Novo",link:"/produto/11",team:"Chelsea",league:"premier-league",category:"europeias",sizes:["P","M","G"],isPromo:!1,salesCount:67,createdAt:"2025-01-25"},{id:12,name:"Flamengo 1994",price:329.9,originalPrice:369.9,image:"/times/Brasileirao/camisa%20flamengo%201994.jpg",imageHover:"/times/Brasileirao/camisa%20flamengo%201994.jpg",badge:"Retrô",link:"/produto/12",team:"Flamengo",league:"brasileirao",category:"retro",sizes:["M","G","GG"],isPromo:!0,salesCount:145,createdAt:"2024-11-20"},{id:13,name:"Flamengo 2009",price:289.9,originalPrice:339.9,image:"/times/Brasileirao/camisa%20flamengo%202009.jpg",imageHover:"/times/Brasileirao/camisa%20flamengo%202009.jpg",badge:"Retrô",link:"/produto/13",team:"Flamengo",league:"brasileirao",category:"retro",sizes:["P","M","G","GG"],isPromo:!1,salesCount:98,createdAt:"2024-10-01"}],iv={brasileirao:"Brasileirão","premier-league":"Premier League","la-liga":"La Liga"},av={Flamengo:"/times/Brasileirao/flamengo%20logo.jpg",Corinthians:"/times/Brasileirao/corinthians%20logo.jpg",Palmeiras:"/times/Brasileirao/Palmeiras.jpg","São Paulo":"/times/Brasileirao/SaoPaulo.jpg",Santos:"/times/Brasileirao/Santos.jpg",Grêmio:"/times/Brasileirao/Gremio.jpg"};function lv(){const e={},t=new Set;for(const r of ov){const o=r.league||"brasileirao";e[o]||(e[o]=[]);const i=`${o}-${r.team}`;if(t.has(i))continue;t.add(i);const s=o==="brasileirao"?av[r.team]:null;e[o].push({name:r.team,image:s||r.image,fallbackImage:s?r.image:null,link:`/produtos?time=${encodeURIComponent(r.team)}`})}return["brasileirao","premier-league","la-liga"].filter(r=>{var o;return(o=e[r])==null?void 0:o.length}).map(r=>({id:r,name:iv[r]||r,teams:e[r].sort((o,i)=>o.name.localeCompare(i.name))}))}const sv=lv();sv.flatMap(e=>e.teams);const ls={nacionais:{title:"Camisas Nacionais",subtitle:"Os principais times do Brasil",bannerImage:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80",categorySlug:"nacionais"},europeias:{title:"Camisas Europeias",subtitle:"Os maiores clubes da Europa",bannerImage:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80",categorySlug:"europeias"},retro:{title:"Camisas Retrô",subtitle:"Clássicos que nunca saem de moda",bannerImage:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&q=80",categorySlug:"retro"},produtos:{title:"Todos os Produtos",subtitle:"Camisas oficiais dos maiores clubes",bannerImage:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80",categorySlug:null},times:{title:"Todos os Times",subtitle:"Encontre a camisa do seu time",bannerImage:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80",categorySlug:null},brasileirao:{title:"Camisas do Brasileirão",subtitle:"Times da Série A",bannerImage:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80",categorySlug:"nacionais"},europeus:{title:"Camisas Europeias",subtitle:"Premier League, La Liga e mais",bannerImage:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80",categorySlug:"europeias"},lancamentos:{title:"Lançamentos",subtitle:"As novidades que acabaram de chegar",bannerImage:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&q=80",categorySlug:null,sortDefault:"newest"},promocoes:{title:"Promoções",subtitle:"Ofertas imperdíveis em camisas oficiais",bannerImage:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80",categorySlug:null,filterPromoOnly:!0}},uv={institutional:[{label:"Sobre nós",path:"/sobre"},{label:"Lojas",path:"/lojas"},{label:"Trabalhe conosco",path:"/trabalhe-conosco"},{label:"Contato",path:"/contato"}],help:[{label:"Central de ajuda",path:"/ajuda"},{label:"Troca e devolução",path:"/troca-devolucao"},{label:"Entregas",path:"/entregas"},{label:"Formas de pagamento",path:"/pagamento"}],account:[{label:"Meus pedidos",path:"/pedidos"},{label:"Meus favoritos",path:"/favoritos"},{label:"Cadastre-se",path:"/cadastro"},{label:"Login",path:"/login"}],social:[{name:"facebook",url:"https://facebook.com",icon:"facebook"},{name:"instagram",url:"https://instagram.com",icon:"instagram"},{name:"twitter",url:"https://twitter.com",icon:"twitter"}],copyright:"© 2025 Artilheiro Store. Todos os direitos reservados."},cv=d.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #eee;
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  @media (max-width: 991px) {
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border-bottom-color: #eee;
  }
`,dv=d.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 72px;
  height: auto;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
    min-height: 85px;
    gap: 2rem;
  }
`,fv=d.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0;
`,pv=d.img`
  height: 56px;
  width: auto;
  max-height: 72px;
  object-fit: contain;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  @media (min-width: 768px) {
    height: 85px;
  }
`,mv=d.ul`
  display: none;
  align-items: center;
  gap: 0.25rem;

  @media (min-width: 992px) {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 0.5rem;
  }
`,hv=d.li`
  a {
    display: block;
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
    border-radius: 4px;
    transition: color 0.2s, background 0.2s;

    &:hover {
      color: #c41e3a;
      background: rgba(196, 30, 58, 0.06);
    }

    &.active {
      color: #c41e3a;
      font-weight: 600;
    }
  }
`,Jc=d.form`
  display: flex;
  align-items: center;
  max-width: 280px;
  width: 100%;
  min-height: 44px;
  height: 44px;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #eee;

  &:focus-within {
    border-color: #c41e3a;
    background: #fff;
  }

  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 0.5rem;
    min-height: 44px;
    height: 44px;
  }

  @media (min-width: 992px) {
    height: 40px;
    min-height: 40px;
  }
`,Zc=d.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 0.75rem;
  font-size: 0.9rem;
  color: #1a1a1a;
  background: transparent;
  border: none;

  &::placeholder {
    color: #6b7280;
  }

  &:focus {
    outline: none;
  }
`,ed=d.button`
  flex-shrink: 0;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #c41e3a;
  }

  @media (min-width: 992px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`,gv=d.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,xv=d.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    min-width: 44px;
    min-height: 44px;
  }

  @media (min-width: 992px) {
    button {
      min-width: 40px;
      min-height: 40px;
    }
  }
`,vv=d.span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  font-size: 0.6875rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`,td=d.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  color: #333;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #c41e3a;
    background: rgba(196, 30, 58, 0.06);
  }

  @media (max-width: 991px) {
    color: #333;

    &:hover {
      color: #c41e3a;
      background: rgba(196, 30, 58, 0.06);
    }
  }

  @media (min-width: 992px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`,yv=d.div`
  display: none;
  flex: 1;
  min-width: 0;
  max-width: 280px;
  margin: 0 0.5rem;

  @media (min-width: 992px) {
    display: block;
  }
`,wv=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  color: #333;
  background: transparent;
  border-radius: 8px;
  transition: color 0.2s;

  @media (max-width: 991px) {
    color: #333;
  }

  @media (min-width: 992px) {
    display: none;
  }
`,Sv=d.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-top: ${({$open:e})=>e?"1px solid #eee":"none"};
  padding: ${({$open:e})=>e?"1rem":"0"};
  max-height: ${({$open:e})=>e?"85vh":"0"};
  min-height: 0;
  overflow-x: hidden;
  overflow-y: ${({$open:e})=>e?"auto":"hidden"};
  transition: max-height 0.3s ease, padding 0.3s ease, border 0.3s ease;

  a {
    display: flex;
    align-items: center;
    padding: 0.875rem 1rem;
    min-height: 44px;
    font-weight: 500;
    color: #333;
    border-radius: 6px;

    &:hover {
      background: rgba(196, 30, 58, 0.06);
      color: #c41e3a;
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`,kv=d.div`
  padding: 0 0 0.75rem;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.75rem;

  @media (min-width: 992px) {
    display: none;
  }
`,nd=()=>l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"11",cy:"11",r:"8"}),l.jsx("path",{d:"m21 21-4.35-4.35"})]}),jv=()=>l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}),l.jsx("path",{d:"M3 6h18"}),l.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),Cv=()=>l.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),l.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),bv=()=>l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("line",{x1:"4",y1:"6",x2:"20",y2:"6"}),l.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12"}),l.jsx("line",{x1:"4",y1:"18",x2:"20",y2:"18"})]}),Ev=()=>l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:l.jsx("path",{d:"M18 6 6 18M6 6l12 12"})});function Qe(){const[e,t]=S.useState(!1),[n,r]=S.useState(""),o=Cn(),[i]=lu(),{openMiniCart:a,itemCount:s}=yo();S.useEffect(()=>{const c=i.get("q");c!=null&&r(c)},[i]);const u=c=>{c.preventDefault();const g=n.trim();g&&(o(`/produtos?q=${encodeURIComponent(g)}`),t(!1))};return l.jsxs(cv,{children:[l.jsxs(dv,{children:[l.jsx(fv,{as:Do,to:"/",children:l.jsx(pv,{src:"/logos/sem%20fundo/4.png",alt:"Artilheiro Store"})}),l.jsx(mv,{children:Xc.map(c=>l.jsx(hv,{children:l.jsx(Do,{to:c.path,className:({isActive:g})=>g?"active":"",onClick:()=>t(!1),children:c.label})},c.path))}),l.jsx(yv,{children:l.jsxs(Jc,{onSubmit:u,role:"search",children:[l.jsx(Zc,{type:"search",placeholder:"Buscar camisas, times ou categorias",value:n,onChange:c=>r(c.target.value),"aria-label":"Buscar camisas, times ou categorias"}),l.jsx(ed,{type:"submit","aria-label":"Buscar",children:l.jsx(nd,{})})]})}),l.jsxs(gv,{children:[l.jsxs(xv,{children:[l.jsx(td,{as:"button",type:"button",onClick:a,"aria-label":`Carrinho com ${s} itens`,children:l.jsx(jv,{})}),s>0&&l.jsx(vv,{"aria-hidden":"true",children:s>99?"99+":s})]}),l.jsx(td,{as:Do,to:"/pedido/consultar","aria-label":"Perfil",onClick:()=>t(!1),children:l.jsx(Cv,{})})]}),l.jsx(wv,{onClick:()=>t(!e),"aria-label":e?"Fechar menu":"Abrir menu",children:e?l.jsx(Ev,{}):l.jsx(bv,{})})]}),l.jsxs(Sv,{$open:e,children:[l.jsx(kv,{children:l.jsxs(Jc,{onSubmit:u,role:"search",children:[l.jsx(Zc,{type:"search",placeholder:"Buscar camisas, times ou categorias",value:n,onChange:c=>r(c.target.value),"aria-label":"Buscar camisas, times ou categorias"}),l.jsx(ed,{type:"submit","aria-label":"Buscar",children:l.jsx(nd,{})})]})}),Xc.map(c=>l.jsx(Do,{to:c.path,onClick:()=>t(!1),children:c.label},c.path))]})]})}const Pv=d.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`,zv=d.img`
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
`,Iv=d.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 45%,
    rgba(0, 0, 0, 0.1) 100%
  );
`,Tv="/Design%20sem%20nome%20(5).png";function Lv(){return l.jsxs(Pv,{children:[l.jsx(zv,{src:Tv,alt:""}),l.jsx(Iv,{})]})}const bm=d.article`
  position: relative;
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: 768px) {
    aspect-ratio: 3 / 2;
  }
`,_v=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${bm}:hover & {
    transform: scale(1.06);
  }
`,Nv=d.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
`,Rv=d.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    font-size: 1.25rem;
    bottom: 1.25rem;
    left: 1.25rem;
  }
`;function $v({title:e,image:t,link:n,fallbackImage:r}){const[o,i]=S.useState(t),a=()=>{r&&i(r)};return l.jsxs(bm,{as:ie,to:n,children:[l.jsx(_v,{src:o,alt:e,onError:a}),l.jsx(Nv,{}),l.jsx(Rv,{children:e})]})}const Ov=d.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,Mv=d.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Av=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;function Fv(){return l.jsx(Ov,{children:l.jsx(Mv,{children:l.jsx(Av,{children:tv.map(e=>l.jsx($v,{title:e.title,image:e.image,link:e.link},e.id))})})})}const Em=d.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }

  @media (max-width: 767px) {
    &:active {
      opacity: 0.95;
    }
  }
`,Bv=d.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f5f5f5;
`,Dv=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;

  ${Em}:hover & {
    opacity: 1;
  }
`,Uv=d.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  border-radius: 4px;
  background: ${({$type:e})=>e==="promo"?"#c41e3a":e==="retro"?"#6b4423":"#1a1a1a"};
`,Hv=d.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,Wv=d.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.3;
`,Vv=d.span`
  font-size: 0.8rem;
  color: #666;
  line-height: 1.2;
`,Gv=d.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #c41e3a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,qv=d.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: #999;
  text-decoration: line-through;
`;function rd(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function gu({name:e,price:t,originalPrice:n,image:r,imageHover:o,badge:i,link:a,liga:s}){const[u,c]=S.useState(!1),g=o&&u?o:r;return l.jsxs(Em,{as:ie,to:a,onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[l.jsxs(Bv,{children:[l.jsx(Dv,{src:g,alt:e}),i&&l.jsx(Uv,{$type:i==="Promo"?"promo":i==="Retrô"?"retro":"new",children:i})]}),l.jsxs(Hv,{children:[l.jsx(Wv,{children:e}),s&&l.jsx(Vv,{children:s}),l.jsxs(Gv,{children:[rd(t),n&&l.jsx(qv,{children:rd(n)})]})]})]})}const Qv=d.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,Yv=d.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Kv=d.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    text-align: left;
  }
`,Xv=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;function Jv(){return l.jsx(Qv,{children:l.jsxs(Yv,{children:[l.jsx(Kv,{children:"Destaques da Semana"}),l.jsx(Xv,{children:nv.map(e=>l.jsx(gu,{name:e.name,price:e.price,originalPrice:e.originalPrice,image:e.image,imageHover:e.imageHover,badge:e.badge,link:e.link},e.id))})]})})}const Zv=d.section`
  position: relative;
  width: 100%;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 320px;
  }
`,ey=d.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,ty=d.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.2) 60%,
    transparent 100%
  );
`,ny=d.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 280px;
  padding: 2rem 1.5rem;

  @media (min-width: 768px) {
    min-height: 320px;
    padding: 3rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 3rem;
  }
`,ry=d.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,oy=d.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.25rem;
`,iy=d.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: #c41e3a;
  border-radius: 6px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #a01830;
    transform: translateY(-1px);
  }
`;function ay(){const{title:e,subtitle:t,ctaLabel:n,ctaLink:r,image:o}=rv;return l.jsxs(Zv,{children:[l.jsx(ey,{src:o,alt:""}),l.jsx(ty,{}),l.jsxs(ny,{children:[l.jsx(ry,{children:e}),l.jsx(oy,{children:t}),l.jsx(iy,{as:ie,to:r,children:n})]})]})}const ly=d.footer`
  background: #1a1a1a;
  color: #aaa;
  padding: 3rem 0 2rem;

  @media (min-width: 768px) {
    padding: 4rem 0 2rem;
  }
`,sy=d.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,uy=d.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,cy=d.a`
  display: inline-block;
  line-height: 0;
`,dy=d.img`
  height: 200px !important;
  width: auto;
  object-fit: contain;

  @media (min-width: 768px) {
    height: 200px;
  }
`,fy=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`,Uo=d.div``,Ho=d.h3`
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
`,Ga=d.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,qa=d.a`
  font-size: 0.9rem;
  color: #aaa;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`,py=d.div`
  display: flex;
  gap: 0.75rem;
`,my=d.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #aaa;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
  }
`,hy=d.p`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
`,gy=({name:e})=>({facebook:l.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),instagram:l.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),l.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),l.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),twitter:l.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})[e]||null;function Ye(){const{institutional:e,help:t,account:n,social:r,copyright:o}=uv;return l.jsx(ly,{children:l.jsxs(sy,{children:[l.jsx(uy,{children:l.jsx(cy,{as:ie,to:"/",children:l.jsx(dy,{src:"/logos/sem%20fundo/LogoBranca.png",alt:"Artilheiro Store"})})}),l.jsxs(fy,{children:[l.jsxs(Uo,{children:[l.jsx(Ho,{children:"Institucional"}),l.jsx(Ga,{children:e.map(i=>l.jsx("li",{children:l.jsx(qa,{as:ie,to:i.path,children:i.label})},i.path))})]}),l.jsxs(Uo,{children:[l.jsx(Ho,{children:"Ajuda"}),l.jsx(Ga,{children:t.map(i=>l.jsx("li",{children:l.jsx(qa,{as:ie,to:i.path,children:i.label})},i.path))})]}),l.jsxs(Uo,{children:[l.jsx(Ho,{children:"Minha Conta"}),l.jsx(Ga,{children:n.map(i=>l.jsx("li",{children:l.jsx(qa,{as:ie,to:i.path,children:i.label})},i.path))})]}),l.jsxs(Uo,{children:[l.jsx(Ho,{children:"Redes Sociais"}),l.jsx(py,{children:r.map(i=>l.jsx(my,{href:i.url,target:"_blank",rel:"noopener noreferrer","aria-label":i.name,children:l.jsx(gy,{name:i.icon})},i.name))})]})]}),l.jsx(hy,{children:o})]})})}const xy=d.div`
  padding-top: var(--navbar-height, 100px);
`;function vy(){return l.jsxs(l.Fragment,{children:[l.jsx(Qe,{}),l.jsxs(xy,{children:[l.jsxs("main",{children:[l.jsx(Lv,{}),l.jsx(Fv,{}),l.jsx(Jv,{}),l.jsx(ay,{})]}),l.jsx(Ye,{})]})]})}const yy=bn`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,xu=d.div`
  background: linear-gradient(
    90deg,
    #eee 0%,
    #f5f5f5 50%,
    #eee 100%
  );
  background-size: 200% 100%;
  animation: ${yy} 1.2s ease-in-out infinite;
  border-radius: 4px;
`,wy=d.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
`,Sy=d(xu)`
  aspect-ratio: 1;
  width: 100%;
`,ky=d.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,jy=d(xu)`
  height: 0.95rem;
  width: 85%;
`,Cy=d(xu)`
  height: 1.1rem;
  width: 40%;
`;function by(){return l.jsxs(wy,{"aria-hidden":!0,children:[l.jsx(Sy,{}),l.jsxs(ky,{children:[l.jsx(jy,{}),l.jsx(Cy,{})]})]})}const Ey=d.div`
  text-align: center;
  padding: 4rem 1.5rem;
  max-width: 400px;
  margin: 0 auto;
`,Py=d.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  background: #fef2f2;
  color: #c41e3a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  line-height: 1;
`,zy=d.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,Iy=d.p`
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,Ty=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`,Ly=d.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;

  &:hover:not(:disabled) {
    background: #a01830;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,_y=d(ie)`
  font-size: 0.9rem;
  font-weight: 600;
  color: #c41e3a;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;function Pm({title:e="Algo deu errado",message:t="Não foi possível carregar. Tente novamente.",onRetry:n,backToLabel:r="Voltar para a loja",backToPath:o="/produtos"}){return l.jsxs(Ey,{role:"alert",children:[l.jsx(Py,{"aria-hidden":!0,children:"⚠"}),l.jsx(zy,{children:e}),l.jsx(Iy,{children:t}),l.jsxs(Ty,{children:[n&&l.jsx(Ly,{type:"button",onClick:n,children:"Tentar novamente"}),l.jsx(_y,{to:o,children:r})]})]})}const Ny="https://artilheirostore-be.onrender.com",Ry=3e4;class _n extends Error{constructor(t,n,r){super(t),this.name="ApiError",this.status=n,this.data=r}}function $y(e){const t=new AbortController,n=setTimeout(()=>t.abort(),e);return{signal:t.signal,clearTimeout:()=>clearTimeout(n)}}async function zr(e,t={}){const{timeout:n=Ry,...r}=t,o=`${Ny}${e}`,i=$y(n);try{const a=await fetch(o,{...r,signal:i.signal,headers:{"Content-Type":"application/json",...r.headers}});if(i.clearTimeout(),!a.ok){let u=null;try{u=await a.json()}catch{u={message:await a.text()}}const c=(u==null?void 0:u.message)||`Erro ${a.status}`;throw new _n(c,a.status,u)}return a.status===204?null:await a.json()}catch(a){throw i.clearTimeout(),a.name==="AbortError"?new _n("Tempo limite de requisição excedido",408,null):a instanceof TypeError&&a.message.includes("fetch")?new _n("Erro de conexão. Verifique sua internet.",0,null):a instanceof _n?a:new _n("Erro inesperado",500,{originalError:a.message})}}const pa={get:(e,t={})=>zr(e,{...t,method:"GET"}),post:(e,t,n={})=>zr(e,{...n,method:"POST",body:JSON.stringify(t)}),put:(e,t,n={})=>zr(e,{...n,method:"PUT",body:JSON.stringify(t)}),patch:(e,t,n={})=>zr(e,{...n,method:"PATCH",body:JSON.stringify(t)}),delete:(e,t={})=>zr(e,{...t,method:"DELETE"})};function zm(e){var u,c;if(!e)return null;let t=[],n={};e.sizes&&(Array.isArray(e.sizes)?(t=e.sizes.map(g=>g.label),e.sizes.forEach(g=>{n[g.label]=g.stock||0})):typeof e.sizes=="object"&&(t=Object.keys(e.sizes),n={...e.sizes}));const r=((u=e.images)==null?void 0:u[0])||"",o=((c=e.images)==null?void 0:c[1])||r,i=(e.images||[]).map((g,p)=>({src:g,label:p===0?"Frente":p===1?"Costas":`Detalhe ${p}`})),a=`/produto/${e.id}`;let s=null;return e.isPromotion?s="Promo":e.isNew&&(s="Novo"),{id:e.id,name:e.name,price:e.price,originalPrice:e.originalPrice||null,image:r,imageHover:o,badge:s,link:a,team:e.team,liga:(e.liga??e.league??"").trim()||null,category:e.category||"nacionais",sizes:t,sizeStock:n,isPromo:e.isPromotion||!1,salesCount:e.salesCount||0,createdAt:e.createdAt||new Date().toISOString(),gallery:i,material:e.material||"100% Poliéster",shipping:e.shipping||"Envio em até 48h",exchange:e.exchange||"Troca fácil em até 7 dias",season:e.season}}async function Oy(e={}){try{const t=new URLSearchParams;e.liga&&t.set("liga",e.liga),e.category&&t.set("category",e.category),e.team&&t.set("team",e.team),e.search&&t.set("search",e.search);const n=t.toString(),r=n?`/api/products?${n}`:"/api/products",o=await pa.get(r);if(!Array.isArray(o))throw new Error("Resposta inválida da API");return o.map(zm)}catch(t){throw console.error("[ProductService] Erro ao buscar produtos:",t),t}}async function My(e){try{const t=await pa.get(`/api/products/${e}`);return zm(t)}catch(t){throw console.error(`[ProductService] Erro ao buscar produto ${e}:`,t),t}}const Bi={getAll:Oy,getById:My},Ay=d.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`,Fy=d.header`
  position: relative;
  width: 100%;
  min-height: 220px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 280px;
  }
`,By=d.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Dy=d.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`,Uy=d.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  padding: 2rem 1.5rem;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    min-height: 280px;
    align-items: flex-start;
    text-align: left;
    padding: 3rem 2rem;
  }
`,Hy=d.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,Wy=d.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,Vy=d.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem 3rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 0 2rem 4rem;
  }
`,Gy=d.div`
  display: grid;
  gap: 2rem;
  padding-top: 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: 240px 1fr;
    gap: 2.5rem;
    padding-top: 2rem;
  }
`,qy=d.aside`
  @media (max-width: 991px) {
    order: 2;
  }
`,Ir=d.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Tr=d.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
`,Qy=d.select`
  width: 100%;
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23444' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.6rem center;

  &:focus {
    outline: none;
    border-color: #c41e3a;
  }
`,od=d.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #444;
  cursor: pointer;
  padding: 0.35rem 0;
  transition: color 0.2s;

  &:hover {
    color: #c41e3a;
  }

  input {
    width: 16px;
    height: 16px;
    accent-color: #c41e3a;
    cursor: pointer;
  }
`,Yy=d.button`
  display: inline-flex;
  align-items: center;
  padding: 0.4rem 0.75rem;
  margin: 0.25rem 0.25rem 0 0;
  font-size: 0.85rem;
  font-weight: 500;
  color: #444;
  background: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #eee;
    border-color: #c41e3a;
    color: #c41e3a;
  }

  &.active {
    background: #c41e3a;
    border-color: #c41e3a;
    color: #fff;
  }
`,Ky=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,id=d.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #c41e3a;
  }
`,Xy=d.div`
  min-width: 0;
`,Jy=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`,Zy=d.span`
  font-size: 0.9rem;
  color: #666;
`,ew=d.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,tw=d.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
  white-space: nowrap;
`,nw=d.select`
  padding: 0.5rem 2rem 0.5rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23444' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.6rem center;

  &:focus {
    outline: none;
    border-color: #c41e3a;
  }
`,ad=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;

  @media (min-width: 400px) {
    gap: 1rem;
  }

  @media (min-width: 576px) {
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`,rw=d.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #c41e3a;
  background: #fff;
  border: 2px solid #c41e3a;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    display: none;
  }
`,ow=d.div`
  @media (max-width: 991px) {
    display: ${({$open:e})=>e?"block":"none"};
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
  }
`,iw=[{value:"bestseller",label:"Mais vendidos"},{value:"price_asc",label:"Menor preço"},{value:"price_desc",label:"Maior preço"},{value:"newest",label:"Lançamentos"}],aw=["P","M","G","GG","EG"];function lw(e,t){const n=e.slug;return n||t.replace(/^\//,"").split("/")[0]||"times"}function ld(e,t,n,r){const o=ls[r];let i=[...e];if(o!=null&&o.categorySlug&&(i=i.filter(a=>a.category===o.categorySlug)),o!=null&&o.filterPromoOnly&&(i=i.filter(a=>a.isPromo)),t.liga){const a=t.liga.toLowerCase();i=i.filter(s=>(s.liga||"").toLowerCase()===a)}if(t.team&&(i=i.filter(a=>a.team===t.team)),t.size&&(i=i.filter(a=>{var s;return(s=a.sizes)==null?void 0:s.includes(t.size)})),t.promoOnly&&(i=i.filter(a=>a.isPromo)),t.priceMin!=null&&t.priceMin!==""){const a=Number(t.priceMin);Number.isNaN(a)||(i=i.filter(s=>s.price>=a))}if(t.priceMax!=null&&t.priceMax!==""){const a=Number(t.priceMax);Number.isNaN(a)||(i=i.filter(s=>s.price<=a))}return n==="bestseller"?i.sort((a,s)=>(s.salesCount||0)-(a.salesCount||0)):n==="price_asc"?i.sort((a,s)=>a.price-s.price):n==="price_desc"?i.sort((a,s)=>s.price-a.price):n==="newest"&&i.sort((a,s)=>new Date(s.createdAt)-new Date(a.createdAt)),i}function sw(e){return[...new Set(e.map(n=>n.team).filter(Boolean))].sort((n,r)=>n.localeCompare(r))}function uw(e){return[...new Set(e.map(n=>n.liga).filter(Boolean))].sort((n,r)=>n.localeCompare(r))}function sd(e,t){if(!(t!=null&&t.trim()))return e;const n=t.trim().toLowerCase();return e.filter(r=>{var o,i,a,s;return((o=r.name)==null?void 0:o.toLowerCase().includes(n))||((i=r.team)==null?void 0:i.toLowerCase().includes(n))||((a=r.category)==null?void 0:a.toLowerCase().includes(n))||((s=r.liga)==null?void 0:s.toLowerCase().includes(n))})}function Ln(){const e=qp(),{pathname:t}=rn(),[n,r]=lu(),{showError:o}=aa(),i=lw(e,t),a=ls[i]||ls.times,s=n.get("time")||"",u=n.get("liga")||"",c=n.get("q")??"",[g,p]=S.useState(a.sortDefault||"bestseller"),[x,y]=S.useState({liga:u,team:s,size:"",promoOnly:a.filterPromoOnly||!1,priceMin:"",priceMax:""}),[k,j]=S.useState(!1),[C,h]=S.useState(!0),[f,m]=S.useState(!1),[v,E]=S.useState([]),[b,w]=S.useState([]),[z,N]=S.useState(0);S.useEffect(()=>{s&&y(L=>({...L,team:s}))},[s]),S.useEffect(()=>{u&&y(L=>({...L,liga:u}))},[u]),S.useEffect(()=>{let L=!0;async function $e(){h(!0),m(!1);try{const ge={};x.liga&&(ge.liga=x.liga),x.team&&(ge.team=x.team),c.trim()&&(ge.search=c.trim());const Pe=await Bi.getAll(ge);if(!L)return;w(Pe);const T=sd(Pe,c),R=ld(T,x,g,i);E(R)}catch(ge){if(!L)return;console.error("Erro ao carregar produtos:",ge),m(!0),E([]),o("Erro ao carregar produtos. Tente novamente.")}finally{L&&h(!1)}}return $e(),()=>{L=!1}},[z,x.liga,x.team,c]),S.useEffect(()=>{if(b.length===0)return;const L=sd(b,c),$e=ld(L,x,g,i);E($e)},[x,g,i,c,b]);const I=()=>{m(!1),N(L=>L+1)},B=S.useMemo(()=>sw(b),[b]),ee=S.useMemo(()=>uw(b),[b]),ue=(L,$e)=>{y(ge=>({...ge,[L]:$e})),L==="liga"&&r(ge=>{const Pe=new URLSearchParams(ge);return $e?Pe.set("liga",$e):Pe.delete("liga"),Pe},{replace:!0})};return l.jsxs(Ay,{children:[l.jsx(Qe,{}),l.jsxs(Fy,{children:[l.jsx(By,{src:a.bannerImage,alt:""}),l.jsx(Dy,{}),l.jsxs(Uy,{children:[l.jsx(Hy,{children:c.trim()?`Resultados para '${c.trim()}'`:a.title}),l.jsx(Wy,{children:a.subtitle})]})]}),l.jsx(Vy,{children:l.jsxs(Gy,{children:[l.jsxs(qy,{children:[l.jsxs(rw,{type:"button",onClick:()=>j(L=>!L),"aria-expanded":k,children:["Filtros ",k?"▲":"▼"]}),l.jsxs(ow,{$open:k,children:[l.jsxs(Ir,{children:[l.jsx(Tr,{children:"Liga"}),l.jsxs(Qy,{value:x.liga,onChange:L=>ue("liga",L.target.value),"aria-label":"Filtrar por liga",children:[l.jsx("option",{value:"",children:"Todas"}),ee.map(L=>l.jsx("option",{value:L,children:L},L))]})]}),l.jsxs(Ir,{children:[l.jsx(Tr,{children:"Time"}),l.jsx("div",{children:B.map(L=>l.jsxs(od,{children:[l.jsx("input",{type:"radio",name:"team",checked:x.team===L,onChange:()=>ue("team",x.team===L?"":L)}),L]},L))})]}),l.jsxs(Ir,{children:[l.jsx(Tr,{children:"Tamanho"}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.25rem"},children:aw.map(L=>l.jsx(Yy,{type:"button",className:x.size===L?"active":"",onClick:()=>ue("size",x.size===L?"":L),children:L},L))})]}),l.jsxs(Ir,{children:[l.jsx(Tr,{children:"Preço"}),l.jsxs(Ky,{children:[l.jsx(id,{type:"number",placeholder:"Mín. R$",min:"0",step:"10",value:x.priceMin,onChange:L=>ue("priceMin",L.target.value)}),l.jsx(id,{type:"number",placeholder:"Máx. R$",min:"0",step:"10",value:x.priceMax,onChange:L=>ue("priceMax",L.target.value)})]})]}),!a.filterPromoOnly&&l.jsxs(Ir,{children:[l.jsx(Tr,{children:"Promoção"}),l.jsxs(od,{children:[l.jsx("input",{type:"checkbox",checked:x.promoOnly,onChange:L=>ue("promoOnly",L.target.checked)}),"Apenas em promoção"]})]})]})]}),l.jsx(Xy,{children:f?l.jsx(Pm,{onRetry:I}):l.jsxs(l.Fragment,{children:[!C&&l.jsxs(Jy,{children:[l.jsxs(Zy,{children:[v.length," produto",v.length!==1?"s":""]}),l.jsxs(ew,{children:[l.jsx(tw,{htmlFor:"plp-sort",children:"Ordenar:"}),l.jsx(nw,{id:"plp-sort",value:g,onChange:L=>p(L.target.value),"aria-label":"Ordenação",children:iw.map(L=>l.jsx("option",{value:L.value,children:L.label},L.value))})]})]}),C?l.jsx(ad,{children:Array.from({length:12},(L,$e)=>l.jsx(by,{},`skeleton-${$e}`))}):l.jsxs(l.Fragment,{children:[l.jsx(ad,{children:v.map(L=>l.jsx(gu,{name:L.name,price:L.price,originalPrice:L.originalPrice,image:L.image,imageHover:L.imageHover,badge:L.badge,link:L.link,liga:L.liga},L.id))}),v.length===0&&l.jsx("p",{style:{textAlign:"center",padding:"3rem",color:"#666"},children:"Nenhum produto encontrado com os filtros selecionados. Tente alterar os filtros."})]})]})})]})}),l.jsx(Ye,{})]})}const cw=d.nav`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`,dw=d.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
`,ud=d.li`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  &:not(:last-child)::after {
    content: '›';
    color: #9ca3af;
    font-weight: 400;
  }
`,fw=d.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }
`,pw=d.span`
  color: #1a1a1a;
  font-weight: 500;
`,mw=[{label:"Home",path:"/"},{label:"Camisas",path:"/produtos"}];function hw({items:e=mw,current:t}){return l.jsx(cw,{"aria-label":"Breadcrumb",children:l.jsxs(dw,{children:[e.map(n=>l.jsx(ud,{children:l.jsx(fw,{as:ie,to:n.path,children:n.label})},n.path||n.label)),t&&l.jsx(ud,{children:l.jsx(pw,{children:t})})]})})}const gw=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,Im=d.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`,xw=d.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${Im}:hover & {
    transform: scale(1.05);
  }
`,vw=d.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,yw=d.button`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  padding: 0;
  border: 2px solid ${({$active:e})=>e?"#1a1a1a":"#e5e7eb"};
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #9ca3af;
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: 2px;
  }
`,ww=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function Sw({gallery:e=[]}){const[t,n]=S.useState(0),r=e[t]||e[0];return e!=null&&e.length?l.jsxs(gw,{children:[l.jsx(Im,{children:l.jsx(xw,{src:r==null?void 0:r.src,alt:(r==null?void 0:r.label)||"Imagem do produto"})}),l.jsx(vw,{children:e.map((o,i)=>l.jsx(yw,{type:"button",$active:t===i,onClick:()=>n(i),"aria-label":o.label,"aria-pressed":t===i,children:l.jsx(ww,{src:o.src,alt:""})},i))})]}):null}const kw=d.div`
  margin-bottom: 1.25rem;
`,jw=d.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`,Cw=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,bw=d.button`
  min-width: 48px;
  min-height: 48px;
  height: 48px;
  padding: 0 0.75rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({$selected:e,$disabled:t})=>t?"#9ca3af":e?"#fff":"#1a1a1a"};
  background: ${({$selected:e,$disabled:t})=>t?"#f3f4f6":e?"#1a1a1a":"#fff"};
  border: 2px solid
    ${({$selected:e,$disabled:t})=>t?"#e5e7eb":e?"#1a1a1a":"#e5e7eb"};
  border-radius: 6px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    border-color: #1a1a1a;
    background: ${({$selected:e})=>e?"#1a1a1a":"#f9fafb"};
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: 2px;
  }
`,Ew=["P","M","G","GG","EG"];function Pw({sizeStock:e={},value:t,onChange:n}){const r=Ew.filter(o=>e[o]!==void 0);return l.jsxs(kw,{children:[l.jsx(jw,{children:"Tamanho"}),l.jsx(Cw,{children:r.map(o=>{const a=(e[o]??0)===0,s=t===o;return l.jsx(bw,{type:"button",$selected:s,$disabled:a,disabled:a,onClick:()=>!a&&n(o),"aria-pressed":s,"aria-label":`Tamanho ${o}${a?", sem estoque":""}`,children:o},o)})})]})}const zw=d.div`
  margin-bottom: 1.25rem;
`,Iw=d.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`,Tw=d.div`
  display: inline-flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
`,cd=d.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  background: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover:not(:disabled) {
    background: #f3f4f6;
    color: #1a1a1a;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: -2px;
  }
`,Lw=d.span`
  min-width: 48px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
`,_w=1,Nw=10;function Rw({value:e,onChange:t,min:n=_w,max:r=Nw}){const o=e>n,i=e<r;return l.jsxs(zw,{children:[l.jsx(Iw,{children:"Quantidade"}),l.jsxs(Tw,{children:[l.jsx(cd,{type:"button",onClick:()=>t(Math.max(n,e-1)),disabled:!o,"aria-label":"Diminuir quantidade",children:"−"}),l.jsx(Lw,{"aria-live":"polite",children:e}),l.jsx(cd,{type:"button",onClick:()=>t(Math.min(r,e+1)),disabled:!i,"aria-label":"Aumentar quantidade",children:"+"})]})]})}const $w=d.button`
  width: 100%;
  min-height: 48px;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: ${({$disabled:e})=>e?"#9ca3af":"#c41e3a"};
  border: none;
  border-radius: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    background: #a01930;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`;function Ow({disabled:e,onAddToCart:t,children:n="Adicionar ao carrinho"}){const[r,o]=S.useState(!1),i=async()=>{if(!(e||r)){o(!0);try{await(t==null?void 0:t())}finally{o(!1)}}},a=e||r;return l.jsx($w,{type:"button",$disabled:a,disabled:a,onClick:i,"aria-busy":r,children:r?"Adicionando...":n})}const Mw=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e7eb;
`,Aw=d.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: #4b5563;
`,Fw=d.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #6b7280;
`,Bw=d.span`
  font-weight: 500;
  color: #374151;
`,Dw=[{icon:"◆",label:"Material",text:"100% Poliéster"},{icon:"✈",label:"Envio",text:"Envio em até 48h"},{icon:"↔",label:"Troca",text:"Troca fácil em até 7 dias"}];function Uw({items:e=Dw}){return l.jsx(Mw,{children:e.map(t=>l.jsxs(Aw,{children:[l.jsx(Fw,{"aria-hidden":!0,children:t.icon}),l.jsx(Bw,{children:t.text})]},t.label))})}const Hw=d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ww=d.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
`,Vw=d.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`,Gw=d.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
`,qw=d.span`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a1a1a;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,Qw=d.span`
  font-size: 1rem;
  font-weight: 400;
  color: #9ca3af;
  text-decoration: line-through;
`,Yw=d.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
`,Kw=d.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,Xw=d.div`
  flex-shrink: 0;
`,Jw=d.div`
  margin-top: 0.5rem;
  position: relative;

  @media (max-width: 767px) {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    padding-bottom: calc(1rem + var(--safe-area-bottom, 0px));
    margin-bottom: calc(-1rem - var(--safe-area-bottom, 0px));
    background: #fff;
    padding-top: 0.75rem;
    margin-top: 0.75rem;
    border-top: 1px solid #f3f4f6;
  }
`,Zw=d.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #059669;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;function dd(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function e2({product:e,selectedSize:t,onSizeChange:n,quantity:r,onQuantityChange:o,onAddToCart:i,maxQuantity:a=10,addedFeedback:s=!1}){const u=(e==null?void 0:e.badge)||"Oficial",c=(e==null?void 0:e.isPromo)&&(e==null?void 0:e.originalPrice);return l.jsxs(Hw,{children:[l.jsx(Ww,{children:u}),l.jsx(Vw,{children:e==null?void 0:e.name}),l.jsxs(Gw,{children:[l.jsx(qw,{children:dd((e==null?void 0:e.price)??0)}),c&&l.jsxs(l.Fragment,{children:[l.jsx(Qw,{children:dd(e.originalPrice)}),l.jsx(Yw,{children:"Promoção"})]})]}),l.jsx(Pw,{sizeStock:(e==null?void 0:e.sizeStock)??{},value:t,onChange:n}),l.jsx(Kw,{children:l.jsx(Xw,{children:l.jsx(Rw,{value:r,onChange:o,min:1,max:a})})}),l.jsxs(Jw,{children:[l.jsx(Ow,{disabled:!t,onAddToCart:i}),s&&l.jsx(Zw,{children:"Adicionado ao carrinho!"})]}),l.jsx(Uw,{items:[...e!=null&&e.liga?[{icon:"🏆",label:"Liga",text:e.liga}]:[],{icon:"◆",label:"Material",text:(e==null?void 0:e.material)||"100% Poliéster"},{icon:"✈",label:"Envio",text:(e==null?void 0:e.shipping)||"Envio em até 48h"},{icon:"↔",label:"Troca",text:(e==null?void 0:e.exchange)||"Troca fácil em até 7 dias"}]})]})}const t2=bn`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,on=d.div`
  background: linear-gradient(
    90deg,
    #eee 0%,
    #f5f5f5 50%,
    #eee 100%
  );
  background-size: 200% 100%;
  animation: ${t2} 1.2s ease-in-out infinite;
  border-radius: 4px;
`,n2=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    align-items: start;
  }
`,r2=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,o2=d(on)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
`,i2=d.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,a2=d(on)`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 6px;
`,l2=d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`,s2=d(on)`
  height: 14px;
  width: 60px;
  margin-bottom: 0.5rem;
`,u2=d(on)`
  height: 28px;
  width: 85%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    height: 32px;
  }
`,c2=d(on)`
  height: 32px;
  width: 140px;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    height: 36px;
  }
`,d2=d(on)`
  height: 14px;
  width: 80px;
  margin-bottom: 0.5rem;
`,f2=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`,p2=d(on)`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`,m2=d(on)`
  height: 48px;
  width: 100%;
  max-width: 280px;
  margin-top: 0.5rem;
  border-radius: 8px;
`,h2=3,g2=5;function x2(){return l.jsxs(n2,{"aria-hidden":!0,children:[l.jsxs(r2,{children:[l.jsx(o2,{}),l.jsx(i2,{children:Array.from({length:h2},(e,t)=>l.jsx(a2,{},`thumb-${t}`))})]}),l.jsxs(l2,{children:[l.jsx(s2,{}),l.jsx(u2,{}),l.jsx(c2,{}),l.jsx(d2,{}),l.jsx(f2,{children:Array.from({length:g2},(e,t)=>l.jsx(p2,{},`chip-${t}`))}),l.jsx(m2,{})]})]})}const Wo=d.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
`,Vo=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,v2=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 1fr;
  }
`,y2=d.div``,w2=d.div`
  min-width: 0;
`,S2=d.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`,k2=d.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
`,j2=d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,C2=d.div`
  text-align: center;
  padding: 4rem 1rem;
`,b2=d.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,E2=d.p`
  color: #6b7280;
  margin-bottom: 1rem;
`,P2=d(ie)`
  color: #c41e3a;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,z2=4;function I2(e){if(!e)return[{label:"Home",path:"/"},{label:"Camisas",path:"/produtos"}];const t=e.liga||"Produtos";return[{label:"Home",path:"/"},{label:"Camisas",path:"/produtos"},{label:t,path:`/produtos?liga=${encodeURIComponent(t)}`}]}function T2(){const{id:e}=qp(),{addItem:t,openMiniCart:n}=yo(),{showError:r}=aa(),[o,i]=S.useState(null),[a,s]=S.useState([]),[u,c]=S.useState(!0),[g,p]=S.useState(!1),[x,y]=S.useState(0),[k,j]=S.useState(null),[C,h]=S.useState(1),[f,m]=S.useState(!1);S.useEffect(()=>{let w=!0;async function z(){c(!0),p(!1);try{const[N,I]=await Promise.all([Bi.getById(e),Bi.getAll()]);if(!w)return;i(N);const B=I.filter(ee=>ee.id!==(N==null?void 0:N.id)&&(ee.liga===(N==null?void 0:N.liga)||ee.category===(N==null?void 0:N.category))).slice(0,z2);s(B)}catch(N){if(!w)return;console.error("Erro ao carregar produto:",N),p(!0),i(null),N.status!==404&&r("Erro ao carregar produto. Tente novamente.")}finally{w&&c(!1)}}return z(),()=>{w=!1}},[e,x,r]);const v=()=>{p(!1),y(w=>w+1)},E=!k||!(o!=null&&o.sizeStock)?10:Math.min(10,o.sizeStock[k]||1);S.useEffect(()=>{C>E&&h(E)},[E,C]);const b=async()=>{var w,z;await new Promise(N=>setTimeout(N,600)),t({productId:o.id,name:o.name,image:((z=(w=o.gallery)==null?void 0:w[0])==null?void 0:z.src)||o.image,size:k,quantity:C,unitPrice:o.price}),m(!0),n()};return S.useEffect(()=>{if(!f)return;const w=setTimeout(()=>m(!1),2500);return()=>clearTimeout(w)},[f]),u?l.jsxs(Wo,{children:[l.jsx(Qe,{}),l.jsx(Vo,{children:l.jsx(x2,{})}),l.jsx(Ye,{})]}):g?l.jsxs(Wo,{children:[l.jsx(Qe,{}),l.jsx(Vo,{children:l.jsx(Pm,{onRetry:v})}),l.jsx(Ye,{})]}):o?l.jsxs(Wo,{children:[l.jsx(Qe,{}),l.jsxs(Vo,{children:[l.jsx(hw,{items:I2(o),current:o.name}),l.jsxs(v2,{children:[l.jsx(y2,{children:l.jsx(Sw,{gallery:o.gallery})}),l.jsx(w2,{children:l.jsx(e2,{product:o,selectedSize:k,onSizeChange:j,quantity:C,onQuantityChange:h,onAddToCart:b,maxQuantity:E,addedFeedback:f})})]}),a.length>0&&l.jsxs(S2,{children:[l.jsx(k2,{children:"Você também pode gostar"}),l.jsx(j2,{children:a.map(w=>l.jsx(gu,{name:w.name,price:w.price,originalPrice:w.originalPrice,image:w.image,imageHover:w.imageHover,badge:w.badge,link:w.link,liga:w.liga},w.id))})]})]}),l.jsx(Ye,{})]}):l.jsxs(Wo,{children:[l.jsx(Qe,{}),l.jsx(Vo,{children:l.jsxs(C2,{children:[l.jsx(b2,{children:"Produto não encontrado"}),l.jsx(E2,{children:"O produto que você procura não existe ou foi removido."}),l.jsx(P2,{to:"/produtos",children:"Voltar para a loja"})]})}),l.jsx(Ye,{})]})}const L2=d(ie)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 120px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,_2=d.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;


`,N2=d.span`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.2;
`;function R2({name:e,image:t,link:n,fallbackImage:r}){const[o,i]=S.useState(t),a=()=>{r&&i(r)};return l.jsxs(L2,{as:ie,to:n,children:[l.jsx(_2,{src:o,alt:e,onError:a}),l.jsx(N2,{children:e})]})}const $2=d.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`,O2=d.header`
  position: relative;
  width: 100%;
  min-height: 220px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 280px;
  }
`,M2=d.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,A2=d.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`,F2=d.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  padding: 2rem 1.5rem;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    min-height: 280px;
    align-items: flex-start;
    text-align: left;
    padding: 3rem 2rem;
  }
`,B2=d.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,D2=d.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,U2=d.main`
  flex: 1;
  padding: 3rem 0 4rem;
`,H2=d.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,W2=d.section`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,V2=d.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgb(192, 192, 192);

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
`,G2=d.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  justify-items: start;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 0.85rem;
  }
`,q2={Flamengo:"/times/Brasileirao/flamengo%20logo.jpg",Corinthians:"/times/Brasileirao/corinthians%20logo.jpg",Palmeiras:"/times/Brasileirao/Palmeiras.jpg","São Paulo":"/times/Brasileirao/SaoPaulo.jpg",Santos:"/times/Brasileirao/Santos.jpg",Grêmio:"/times/Brasileirao/Gremio.jpg"};function Q2(e){const t={},n=new Set;for(const r of e){const o=(r.liga||"").trim()||"Outros";t[o]||(t[o]=[]);const i=`${o}-${r.team}`;if(n.has(i))continue;n.add(i);const s=/brasileirão|brasileirao/i.test(o)?q2[r.team]:null;t[o].push({name:r.team,image:s||r.image,fallbackImage:s?r.image:null,link:`/produtos?time=${encodeURIComponent(r.team)}`})}return Object.keys(t).sort((r,o)=>r.localeCompare(o)).map(r=>({id:r,name:r,teams:t[r].sort((o,i)=>o.name.localeCompare(i.name))}))}function Y2(){const[e,t]=S.useState([]),[n,r]=S.useState(!0);return S.useEffect(()=>{let o=!0;async function i(){try{const a=await Bi.getAll();if(!o)return;const s=Q2(a);t(s)}catch(a){console.error("Erro ao carregar times:",a),t([])}finally{o&&r(!1)}}return i(),()=>{o=!1}},[]),l.jsxs($2,{children:[l.jsx(Qe,{}),l.jsxs(O2,{children:[l.jsx(M2,{src:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80",alt:""}),l.jsx(A2,{}),l.jsxs(F2,{children:[l.jsx(B2,{children:"Escolha seu time"}),l.jsx(D2,{children:"Clique no time para ver as camisas disponíveis"})]})]}),l.jsx(U2,{children:l.jsx(H2,{children:n?l.jsx("p",{style:{textAlign:"center",padding:"3rem",color:"#666"},children:"Carregando times..."}):e.length===0?l.jsx("p",{style:{textAlign:"center",padding:"3rem",color:"#666"},children:"Nenhum time disponível no momento."}):e.map(o=>l.jsxs(W2,{children:[l.jsx(V2,{children:o.name}),l.jsx(G2,{children:o.teams.map(i=>l.jsx(R2,{name:i.name,image:i.image,link:i.link,fallbackImage:i.fallbackImage??void 0},i.name))})]},o.id))})}),l.jsx(Ye,{})]})}const K2=d.div`
  display: inline-flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
`,fd=d.button`
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  background: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    background: #f3f4f6;
    color: #1a1a1a;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: -2px;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`,X2=d.span`
  min-width: 40px;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
`;function J2({value:e,onChange:t,min:n=1,max:r=99,"aria-label":o="Quantidade"}){const i=e>n,a=e<r;return l.jsxs(K2,{role:"group","aria-label":o,children:[l.jsx(fd,{type:"button",onClick:()=>t(Math.max(n,e-1)),disabled:!i,"aria-label":"Diminuir quantidade",children:"−"}),l.jsx(X2,{"aria-live":"polite",children:e}),l.jsx(fd,{type:"button",onClick:()=>t(Math.min(r,e+1)),disabled:!a,"aria-label":"Aumentar quantidade",children:"+"})]})}const Z2=d.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  @media (min-width: 640px) {
    grid-template-columns: 100px 1fr auto auto auto;
    align-items: center;
    gap: 1.25rem;
    padding: 1.25rem;
  }
`,eS=d.a`
  display: block;
  width: 100%;
  aspect-ratio: 1;
  max-width: 100px;
  border-radius: 6px;
  overflow: hidden;
  background: #f5f5f5;
  margin: 0 auto;

  @media (min-width: 640px) {
    margin: 0;
    max-width: 100px;
  }
`,tS=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,nS=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
`,rS=d.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
  word-break: break-word;
`,oS=d.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`,iS=d.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #374151;
`,aS=d.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,lS=d.div`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: right;

  @media (min-width: 640px) {
    min-width: 80px;
    text-align: right;
  }
`,sS=d.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  color: #6b7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #c41e3a;
    background: rgba(196, 30, 58, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`,uS=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  grid-column: 1 / -1;

  @media (min-width: 640px) {
    grid-column: auto;
    justify-content: flex-end;
    gap: 1rem;
  }
`;function pd(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const cS=()=>l.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 6h18"}),l.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),l.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),l.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),l.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]});function dS({item:e,onUpdateQuantity:t,onRemove:n}){const[r,o]=S.useState(!1),i=e.unitPrice*e.quantity;S.useEffect(()=>{if(!r)return;const s=setTimeout(()=>o(!1),3e3);return()=>clearTimeout(s)},[r]);const a=()=>{r?(n==null||n(e.productId,e.size),o(!1)):o(!0)};return l.jsxs(Z2,{children:[l.jsx(eS,{as:ie,to:`/produto/${e.productId}`,children:l.jsx(tS,{src:e.image,alt:e.name})}),l.jsxs(nS,{children:[l.jsx(rS,{children:e.name}),l.jsxs(oS,{children:["Tamanho: ",e.size]}),l.jsx(iS,{children:pd(e.unitPrice)})]}),l.jsx(aS,{children:l.jsx(J2,{value:e.quantity,onChange:s=>t==null?void 0:t(e.productId,e.size,s),min:1,max:99,"aria-label":`Quantidade de ${e.name}`})}),l.jsx(lS,{children:pd(i)}),l.jsxs(uS,{children:[l.jsx(sS,{type:"button",onClick:a,"aria-label":r?"Clique novamente para remover":"Remover item",title:r?"Clique novamente para remover":"Remover",children:l.jsx(cS,{})}),r&&l.jsx("span",{style:{fontSize:"0.75rem",color:"#c41e3a",fontWeight:600},children:"Clique de novo para remover"})]})]})}const fS=d.aside`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.25rem;
  height: fit-content;

  @media (min-width: 768px) {
    position: sticky;
    top: calc(var(--navbar-height, 100px) + 1rem);
  }
`,pS=d.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,ss=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`,mS=d(ss)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 1rem;
`,hS=d.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 1rem;
`,gS=d.button`
  width: 100%;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    background: #a01930;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`;function md(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const xS=0;function vS({subtotal:e,itemCount:t,onCheckout:n}){const o=e+xS;return l.jsxs(fS,{children:[l.jsx(pS,{children:"Resumo do pedido"}),l.jsxs(ss,{children:[l.jsxs("span",{children:["Subtotal (",t," ",t===1?"item":"itens",")"]}),l.jsx("span",{children:md(e)})]}),l.jsxs(ss,{children:[l.jsx("span",{children:"Frete"}),l.jsx("span",{children:"Calculado no checkout"})]}),l.jsx(hS,{children:"O valor do frete será calculado na próxima etapa."}),l.jsxs(mS,{children:[l.jsx("span",{children:"Total"}),l.jsx("span",{children:md(o)})]}),l.jsx(gS,{type:"button",disabled:t===0,onClick:n,"aria-label":"Finalizar compra",children:"Finalizar compra"})]})}const yS=d.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem;
  min-height: 320px;
`,wS=d.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #d1d5db;
  margin-bottom: 1.25rem;
`,SS=d.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,kS=d.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  max-width: 280px;
`,jS=d(ie)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: #c41e3a;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #a01930;
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`,CS=()=>l.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}),l.jsx("path",{d:"M3 6h18"}),l.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]});function bS(){return l.jsxs(yS,{children:[l.jsx(wS,{"aria-hidden":!0,children:l.jsx(CS,{})}),l.jsx(SS,{children:"Seu carrinho está vazio"}),l.jsx(kS,{children:"Adicione camisas do seu time e finalize sua compra quando quiser."}),l.jsx(jS,{to:"/produtos",children:"Voltar para a loja"})]})}const ES=d.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,PS=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,zS=d.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,IS=d.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,TS=d.a`
  font-size: 0.9375rem;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;
  align-self: flex-start;

  &:hover {
    color: #c41e3a;
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`,LS=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 340px;
    gap: 2rem;
  }
`,_S=d.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
`,NS=d.div`
  @media (max-width: 767px) {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    padding-bottom: calc(1rem + var(--safe-area-bottom, 0px));
    background: #fff;
    border-top: 1px solid #e5e7eb;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.06);
    z-index: 10;
  }
`;function RS(){const e=Cn(),{items:t,itemCount:n,subtotal:r,updateQuantity:o,removeItem:i}=yo(),a=()=>{n!==0&&e("/checkout")};return l.jsxs(ES,{children:[l.jsx(Qe,{}),l.jsxs(PS,{children:[l.jsxs(zS,{children:[l.jsx(IS,{children:"Meu Carrinho"}),l.jsx(TS,{as:ie,to:"/produtos",children:"Continuar comprando"})]}),t.length===0?l.jsx(bS,{}):l.jsxs(LS,{children:[l.jsx(_S,{children:t.map(s=>l.jsx(dS,{item:s,onUpdateQuantity:o,onRemove:i},`${s.productId}-${s.size}`))}),l.jsx(NS,{children:l.jsx(vS,{subtotal:r,itemCount:n,onCheckout:a})})]})]}),l.jsx(Ye,{})]})}async function $S(e){try{const t={customer:{name:e.customer.name,email:e.customer.email,cpf:e.customer.cpf},address:{cep:e.address.cep,rua:e.address.rua,numero:e.address.numero,complemento:e.address.complemento||"",cidade:e.address.cidade,estado:e.address.estado},items:e.items.map(r=>({productId:r.productId,size:r.size,quantity:r.quantity,unitPrice:r.unitPrice})),total:e.total},n=await pa.post("/api/orders",t);return{orderId:n.orderId||n.id,status:n.status||"confirmed",total:n.total||e.total}}catch(t){throw console.error("[OrderService] Erro ao criar pedido:",t),t}}async function OS(e,t){const n=new URLSearchParams({email:e.trim(),code:t.trim()});return await pa.get(`/api/orders/lookup?${n.toString()}`)}const Tm={createOrder:$S,lookupOrder:OS},MS=d.aside`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  height: fit-content;

  @media (min-width: 768px) {
    position: sticky;
    top: calc(var(--navbar-height, 100px) + 1rem);
  }
`,AS=d.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  min-height: 44px;
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  background: #fff;
  border: none;
  cursor: pointer;
  text-align: left;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    cursor: default;
    pointer-events: none;
    border-bottom: 1px solid #e5e7eb;
    min-height: 0;
  }
`,FS=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({$open:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;

  @media (min-width: 768px) {
    display: none;
  }
`,BS=d.div`
  padding: 0 1.25rem 1.25rem;
  max-height: ${({$open:e})=>e?"800px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;

  @media (min-width: 768px) {
    max-height: none;
    padding: 1.25rem;
  }
`,DS=d.ul`
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
`,US=d.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: #374151;
`,HS=d.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`,WS=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,VS=d.div`
  flex: 1;
  min-width: 0;
`,GS=d.span`
  display: block;
  font-weight: 500;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,qS=d.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,QS=d.span`
  font-weight: 600;
  color: #1a1a1a;
  flex-shrink: 0;
`,us=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`,YS=d(us)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 0;
`,KS=d.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 0.5rem;
`;function Qa(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const XS=()=>l.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:l.jsx("path",{d:"m6 9 6 6 6-6"})}),JS=0;function ZS({items:e,subtotal:t}){const[n,r]=S.useState(!1),i=t+JS;return l.jsxs(MS,{children:[l.jsxs(AS,{type:"button",onClick:()=>r(a=>!a),"aria-expanded":n,children:[l.jsx("span",{children:"Resumo do pedido"}),l.jsx(FS,{$open:n,children:l.jsx(XS,{})})]}),l.jsxs(BS,{$open:n,children:[l.jsx(DS,{children:e.map(a=>l.jsxs(US,{children:[l.jsx(HS,{children:l.jsx(WS,{src:a.image,alt:a.name})}),l.jsxs(VS,{children:[l.jsx(GS,{children:a.name}),l.jsxs(qS,{children:["Tamanho ",a.size," · ",a.quantity,"x"]})]}),l.jsx(QS,{children:Qa(a.unitPrice*a.quantity)})]},`${a.productId}-${a.size}`))}),l.jsxs(us,{children:[l.jsxs("span",{children:["Subtotal (",e.reduce((a,s)=>a+s.quantity,0)," itens)"]}),l.jsx("span",{children:Qa(t)})]}),l.jsxs(us,{children:[l.jsx("span",{children:"Frete"}),l.jsx("span",{children:"Calculado no checkout"})]}),l.jsx(KS,{children:"O valor do frete será calculado na próxima etapa."}),l.jsxs(YS,{children:[l.jsx("span",{children:"Total"}),l.jsx("span",{children:Qa(i)})]})]})]})}const ek=bn`
  to { transform: rotate(360deg); }
`,tk=d.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,nk=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,rk=d.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 360px;
    gap: 2rem;
  }
`,ok=d.div`
  min-width: 0;
`,Ya=d.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  padding-bottom: calc(1.5rem + var(--safe-area-bottom, 0px));

  @media (min-width: 768px) {
    padding: 2rem;
    padding-bottom: 2rem;
  }
`,Ka=d.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1.25rem;
`,Xa=d.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ke=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Oe=d.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,Me=d.input`
  width: 100%;
  min-height: 48px;
  height: 48px;
  padding: 0 1rem;
  font-size: 16px;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
  -webkit-tap-highlight-color: transparent;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #c41e3a;
    box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.15);
  }

  &:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`,Ja=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,Za=d.button`
  width: 100%;
  min-height: 48px;
  height: 52px;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    background: #a01930;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`,ik=d.span`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${ek} 0.75s linear infinite;
  flex-shrink: 0;
`,hd=d.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  min-height: 44px;
  border: 2px solid ${({$selected:e})=>e?"#c41e3a":"#e5e7eb"};
  border-radius: 8px;
  cursor: pointer;
  background: ${({$selected:e})=>e?"rgba(196, 30, 58, 0.04)":"#fff"};
  transition: border-color 0.2s, background 0.2s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({$selected:e})=>e?"#c41e3a":"#d1d5db"};
  }
`,gd=d.input`
  width: 20px;
  height: 20px;
  accent-color: #c41e3a;
`,ak=d.div`
  @media (max-width: 767px) {
    order: -1;
  }
`,lk=d.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,sk=d.span`
  display: flex;
  gap: 0.5rem;
`,uk=d.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$active:e})=>e?"#c41e3a":"#e5e7eb"};
  transition: background 0.2s;
`,ck=d.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
`,dk="artilheiro-checkout-success",fk=[{id:1,title:"Dados pessoais"},{id:2,title:"Endereço"},{id:3,title:"Pagamento"}];function xd(e){const t=(e.nome||"").trim(),n=(e.email||"").trim(),r=(e.cpf||"").trim();return t.length>=3&&n.includes("@")&&r.length>=11}function vd(e){const t=(e.cep||"").trim(),n=(e.rua||"").trim(),r=(e.numero||"").trim(),o=(e.cidade||"").trim(),i=(e.estado||"").trim();return t.length>=8&&n.length>=3&&r.length>=1&&o.length>=2&&i.length>=2}function pk(){const e=Cn(),{items:t,subtotal:n,itemCount:r,clearCart:o}=yo(),{showError:i,showSuccess:a}=aa(),[s,u]=S.useState(1),[c,g]=S.useState(!1),[p,x]=S.useState({nome:"",email:"",cpf:"",cep:"",rua:"",numero:"",complemento:"",cidade:"",estado:"",paymentMethod:"credit"});S.useEffect(()=>{r===0&&e("/carrinho",{replace:!0})},[r,e]);const y=h=>{const{name:f,value:m}=h.target;x(v=>({...v,[f]:m}))},k=h=>{h.preventDefault(),xd(p)&&u(2)},j=h=>{h.preventDefault(),vd(p)&&u(3)},C=async h=>{if(h.preventDefault(),!c){g(!0);try{const f={customer:{name:p.nome,email:p.email,cpf:p.cpf},address:{cep:p.cep,rua:p.rua,numero:p.numero,complemento:p.complemento,cidade:p.cidade,estado:p.estado},items:t.map(v=>({productId:v.productId,size:v.size,quantity:v.quantity,unitPrice:v.unitPrice})),total:n},m=await Tm.createOrder(f);try{sessionStorage.setItem(dk,JSON.stringify({orderId:m.orderId,total:m.total}))}catch{}o(),a("Pedido realizado com sucesso!"),e("/checkout/sucesso",{replace:!0})}catch(f){console.error("Erro ao finalizar pedido:",f),i(f.message||"Não foi possível finalizar o pedido. Verifique os dados e tente novamente.")}finally{g(!1)}}};return r===0?null:l.jsxs(tk,{children:[l.jsx(Qe,{}),l.jsx(nk,{children:l.jsxs(rk,{children:[l.jsxs(ok,{children:[l.jsxs(lk,{"aria-label":`Passo ${s} de 3`,children:[l.jsx(sk,{children:fk.map(h=>l.jsx(uk,{$active:s>=h.id,"aria-hidden":!0},h.id))}),l.jsxs(ck,{children:["Passo ",s," de 3"]})]}),s===1&&l.jsxs(Ya,{children:[l.jsx(Ka,{children:"Dados pessoais"}),l.jsxs(Xa,{onSubmit:k,children:[l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"nome",children:"Nome completo"}),l.jsx(Me,{id:"nome",name:"nome",type:"text",placeholder:"Seu nome completo",value:p.nome,onChange:y,required:!0,minLength:3})]}),l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"email",children:"Email"}),l.jsx(Me,{id:"email",name:"email",type:"email",placeholder:"seu@email.com",value:p.email,onChange:y,required:!0})]}),l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"cpf",children:"CPF"}),l.jsx(Me,{id:"cpf",name:"cpf",type:"text",inputMode:"numeric",placeholder:"000.000.000-00",value:p.cpf,onChange:y,required:!0,minLength:11})]}),l.jsx(Za,{type:"submit",disabled:!xd(p),children:"Continuar"})]})]}),s===2&&l.jsxs(Ya,{children:[l.jsx(Ka,{children:"Endereço"}),l.jsxs(Xa,{onSubmit:j,children:[l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"cep",children:"CEP"}),l.jsx(Me,{id:"cep",name:"cep",type:"text",inputMode:"numeric",autoComplete:"postal-code",placeholder:"00000-000",value:p.cep,onChange:y,required:!0})]}),l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"rua",children:"Rua"}),l.jsx(Me,{id:"rua",name:"rua",type:"text",placeholder:"Nome da rua",value:p.rua,onChange:y,required:!0})]}),l.jsxs(Ja,{children:[l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"numero",children:"Número"}),l.jsx(Me,{id:"numero",name:"numero",type:"text",inputMode:"numeric",placeholder:"Nº",value:p.numero,onChange:y,required:!0})]}),l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"complemento",children:"Complemento"}),l.jsx(Me,{id:"complemento",name:"complemento",type:"text",placeholder:"Apto, bloco",value:p.complemento,onChange:y})]})]}),l.jsxs(Ja,{children:[l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"cidade",children:"Cidade"}),l.jsx(Me,{id:"cidade",name:"cidade",type:"text",placeholder:"Cidade",value:p.cidade,onChange:y,required:!0})]}),l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"estado",children:"Estado"}),l.jsx(Me,{id:"estado",name:"estado",type:"text",placeholder:"UF",value:p.estado,onChange:y,required:!0,maxLength:2})]})]}),l.jsx(Za,{type:"submit",disabled:!vd(p),children:"Continuar"})]})]}),s===3&&l.jsxs(Ya,{children:[l.jsx(Ka,{children:"Pagamento"}),l.jsxs(Xa,{onSubmit:C,children:[l.jsx(ke,{children:l.jsxs(hd,{$selected:p.paymentMethod==="credit",children:[l.jsx(gd,{type:"radio",name:"paymentMethod",value:"credit",checked:p.paymentMethod==="credit",onChange:y}),l.jsx("span",{children:"Cartão de crédito"})]})}),l.jsx(ke,{children:l.jsxs(hd,{$selected:p.paymentMethod==="pix",children:[l.jsx(gd,{type:"radio",name:"paymentMethod",value:"pix",checked:p.paymentMethod==="pix",onChange:y}),l.jsx("span",{children:"Pix"})]})}),p.paymentMethod==="credit"&&l.jsxs(l.Fragment,{children:[l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"cardNumber",children:"Número do cartão (mock)"}),l.jsx(Me,{id:"cardNumber",name:"cardNumber",type:"text",placeholder:"0000 0000 0000 0000",readOnly:!0,disabled:!0})]}),l.jsxs(Ja,{children:[l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"cardExp",children:"Validade (mock)"}),l.jsx(Me,{id:"cardExp",name:"cardExp",type:"text",placeholder:"MM/AA",readOnly:!0,disabled:!0})]}),l.jsxs(ke,{children:[l.jsx(Oe,{htmlFor:"cardCvv",children:"CVV (mock)"}),l.jsx(Me,{id:"cardCvv",name:"cardCvv",type:"text",placeholder:"***",readOnly:!0,disabled:!0})]})]})]}),p.paymentMethod==="pix"&&l.jsxs(ke,{children:[l.jsx(Oe,{children:"Pix (mock)"}),l.jsx(Me,{type:"text",placeholder:"QR Code será exibido aqui",readOnly:!0,disabled:!0})]}),l.jsxs(Za,{type:"submit",disabled:c,"aria-busy":c,children:[c&&l.jsx(ik,{"aria-hidden":!0}),c?"Processando pedido…":"Finalizar compra"]})]})]})]}),l.jsx(ak,{children:(s===1||s===2||s===3)&&t.length>0&&l.jsx(ZS,{items:t,subtotal:n})})]})}),l.jsx(Ye,{})]})}const mk=d.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,hk=d.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem 1rem calc(4rem + var(--safe-area-bottom, 0px));
  text-align: center;
  min-width: 0;
`,gk=d.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 2.5rem 1.5rem;
`,xk=d.div`
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem;
  background: #dcfce7;
  color: #16a34a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  line-height: 1;
`,vk=d.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`,yk=d.p`
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`,wk=d.dl`
  text-align: left;
  background: #f9fafb;
  border-radius: 8px;
  padding: 1.25rem 1rem;
  margin-bottom: 1.5rem;
  display: grid;
  gap: 0.75rem;
`,yd=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`,wd=d.dt`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0;
`,Sd=d.dd`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,Sk=d(ie)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  min-width: 200px;
  min-height: 48px;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #a01930;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: none;
  }
`,kd="artilheiro-checkout-success";function kk(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e??0)}function jk(){const e=Cn(),[t,n]=S.useState(null);S.useEffect(()=>{try{const o=sessionStorage.getItem(kd);if(!o){e("/",{replace:!0});return}const i=JSON.parse(o);if(!(i!=null&&i.orderId)||(i==null?void 0:i.total)==null){e("/",{replace:!0});return}n({orderId:i.orderId,total:i.total})}catch{e("/",{replace:!0})}},[e]);const r=()=>{try{sessionStorage.removeItem(kd)}catch{}};return t?l.jsxs(mk,{children:[l.jsx(Qe,{}),l.jsx(hk,{children:l.jsxs(gk,{children:[l.jsx(xk,{"aria-hidden":!0,children:"✓"}),l.jsx(vk,{children:"Pedido realizado com sucesso!"}),l.jsx(yk,{children:"Recebemos seu pedido e ele já está sendo processado."}),l.jsxs(wk,{children:[l.jsxs(yd,{children:[l.jsx(wd,{children:"Número do pedido"}),l.jsx(Sd,{children:t.orderId})]}),l.jsxs(yd,{children:[l.jsx(wd,{children:"Valor total"}),l.jsx(Sd,{children:kk(t.total)})]})]}),l.jsx(Sk,{to:"/",onClick:r,children:"Voltar para a loja"})]})}),l.jsx(Ye,{})]}):null}const Ck=bn`
  to { transform: rotate(360deg); }
`,bk=d.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Ek=d.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,jd=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Cd=d.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,bd=d.input`
  width: 100%;
  min-height: 48px;
  height: 48px;
  padding: 0 1rem;
  font-size: 16px;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
  -webkit-tap-highlight-color: transparent;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #c41e3a;
    box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.15);
  }

  &:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
  }
`,Pk=d.button`
  width: 100%;
  min-height: 48px;
  height: 52px;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    background: #a01930;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`,zk=d.span`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${Ck} 0.75s linear infinite;
  flex-shrink: 0;
`;function Ik({email:e,orderCode:t,loading:n,onChange:r,onSubmit:o}){const i=((e==null?void 0:e.trim())||"").length>0&&((t==null?void 0:t.trim())||"").length>0,a=s=>{s.preventDefault(),!(!i||n)&&o()};return l.jsx(bk,{children:l.jsxs(Ek,{onSubmit:a,noValidate:!0,children:[l.jsxs(jd,{children:[l.jsx(Cd,{htmlFor:"order-lookup-email",children:"E-mail"}),l.jsx(bd,{id:"order-lookup-email",type:"email",placeholder:"seu@email.com",value:e,onChange:s=>r({email:s.target.value,orderCode:t}),disabled:n,autoComplete:"email",required:!0})]}),l.jsxs(jd,{children:[l.jsx(Cd,{htmlFor:"order-lookup-code",children:"Código do pedido"}),l.jsx(bd,{id:"order-lookup-code",type:"text",placeholder:"Ex: ART-10293",value:t,onChange:s=>r({email:e,orderCode:s.target.value}),disabled:n,autoComplete:"off",required:!0})]}),l.jsxs(Pk,{type:"submit",disabled:!i||n,"aria-busy":n,children:[n&&l.jsx(zk,{"aria-hidden":!0}),n?"Buscando…":"Buscar pedido"]})]})})}const el={yellow:{bg:"#fef3c7",text:"#92400e",border:"#f59e0b"},green:{bg:"#d1fae5",text:"#065f46",border:"#10b981"},red:{bg:"#fee2e2",text:"#991b1b",border:"#ef4444"}},Tk=d.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,Lk=d.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  row-gap: 0.5rem;
`,_k=d.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
`,Nk=d.span`
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  background: ${({$variant:e})=>{var t;return((t=el[e])==null?void 0:t.bg)||"#f3f4f6"}};
  color: ${({$variant:e})=>{var t;return((t=el[e])==null?void 0:t.text)||"#374151"}};
  border: 1px solid ${({$variant:e})=>{var t;return((t=el[e])==null?void 0:t.border)||"#e5e7eb"}};
`,Rk=d.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`,$k=d.span``,Ok=d.span`
  font-weight: 700;
  color: #1a1a1a;
`,Mk=d.ul`
  list-style: none;
  margin: 0;
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,Ak=d.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`,Fk=d.div`
  width: 56px;
  height: 56px;
  border-radius: 6px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`,Bk=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Dk=d.div`
  flex: 1;
  min-width: 0;
`,Uk=d.span`
  display: block;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.2rem;
`,Hk=d.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,Wk=d.span`
  font-weight: 600;
  color: #1a1a1a;
  flex-shrink: 0;
`,Vk={CREATED:"Criado",PENDING_PAYMENT:"Aguardando pagamento",PAID:"Pago",CANCELED:"Cancelado"},Gk={CREATED:"yellow",PENDING_PAYMENT:"yellow",PAID:"green",CANCELED:"red"};function qk(e){return Gk[e]||"yellow"}function Ed(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function Qk(e){if(!e)return"—";try{return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(e))}catch{return e}}function Yk({order:e}){var r;const t=Vk[e.status]||e.status,n=qk(e.status);return l.jsxs(Tk,{"aria-label":`Pedido ${e.orderCode}`,children:[l.jsxs(Lk,{children:[l.jsx(_k,{children:e.orderCode}),l.jsx(Nk,{$variant:n,children:t})]}),l.jsxs(Rk,{children:[l.jsxs($k,{children:["Data: ",Qk(e.createdAt)]}),l.jsxs(Ok,{children:["Total: ",Ed(e.total)]})]}),l.jsx(Mk,{"aria-label":"Itens do pedido",children:(r=e.items)==null?void 0:r.map((o,i)=>l.jsxs(Ak,{children:[l.jsx(Fk,{children:l.jsx(Bk,{src:o.image||"/logos/sem%20fundo/4.png",alt:o.name,loading:"lazy"})}),l.jsxs(Dk,{children:[l.jsx(Uk,{children:o.name}),l.jsxs(Hk,{children:["Tamanho ",o.size," · ",o.quantity,"x"]})]}),l.jsx(Wk,{children:Ed((o.price||o.unitPrice)*(o.quantity||1))})]},`${o.name}-${o.size}-${i}`))})]})}const Kk=bn`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`,Xk=d.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
`,vu=d.div`
  height: 16px;
  background: #e5e7eb;
  border-radius: 4px;
  animation: ${Kk} 1.2s ease-in-out infinite;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Pd=d(vu)`
  height: 48px;
  margin-bottom: 1rem;
`,Jk=d(vu)`
  height: 52px;
  margin-top: 0.5rem;
`;function Zk(){return l.jsxs(Xk,{"aria-hidden":!0,children:[l.jsx(vu,{style:{width:"40%",marginBottom:"0.5rem"}}),l.jsx(Pd,{}),l.jsx(Pd,{}),l.jsx(Jk,{})]})}const e5=d.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,t5=d.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,n5=d.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.35rem;
`,r5=d.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0 0 1.5rem;
  line-height: 1.45;
`,o5=d.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  text-align: center;
`,i5=d.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
`,a5=d.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
`;function l5(e){if(e instanceof _n){if(e.status===404)return"Pedido não encontrado";if(e.status===400||e.status===422)return"Confira os dados e tente novamente"}return"Erro ao consultar pedido"}function s5(){const[e,t]=S.useState(""),[n,r]=S.useState(""),[o,i]=S.useState(!1),[a,s]=S.useState(null),[u,c]=S.useState(null);S.useEffect(()=>()=>{s(null),c(null)},[]);const g=({email:x,orderCode:y})=>{t(x??e),r(y??n),c(null)},p=async()=>{const x=e.trim(),y=n.trim();if(!(!x||!y)){i(!0),c(null),s(null);try{const k=await Tm.lookupOrder(x,y);s(k)}catch(k){c(l5(k))}finally{i(!1)}}};return l.jsxs(e5,{children:[l.jsx(Qe,{}),l.jsxs(t5,{children:[l.jsx(n5,{children:"Consultar pedido"}),l.jsx(r5,{children:"Informe seu e-mail e o código do pedido para acompanhar o status."}),l.jsx(Ik,{email:e,orderCode:n,loading:o,onChange:g,onSubmit:p}),o&&l.jsx(Zk,{}),!o&&u&&l.jsxs(o5,{role:"alert",children:[l.jsx(i5,{children:"Não foi possível encontrar o pedido"}),l.jsx(a5,{children:u})]}),!o&&a&&l.jsx(Yk,{order:a})]}),l.jsx(Ye,{})]})}const u5=d.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`,c5=d.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  width: 100%;
`,d5=d.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,f5=d.div`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;function ze({title:e,paragraphs:t}){return l.jsxs(u5,{children:[l.jsx(Qe,{}),l.jsxs(c5,{children:[l.jsx(d5,{children:e}),l.jsx(f5,{children:t.map((n,r)=>l.jsx("p",{children:n},r))})]}),l.jsx(Ye,{})]})}const Ie={sobre:{title:"Sobre nós",paragraphs:["A Artilheiro Store nasceu da paixão por futebol e pela vontade de levar camisas oficiais dos maiores clubes do Brasil e do mundo até você.","Trabalhamos com produtos originais e qualidade garantida. Esta página está em construção. Em breve traremos mais informações sobre nossa história e nossa equipe."]},contato:{title:"Contato",paragraphs:["Entre em contato conosco para dúvidas, sugestões ou parcerias. Nossa equipe está pronta para atender você.","Esta página está em construção. Em breve disponibilizaremos formulário, e-mail e telefone para contato."]},ajuda:{title:"Central de ajuda",paragraphs:["Aqui você encontra respostas para as principais dúvidas sobre pedidos, entregas, trocas e devoluções.","Esta página está em construção. Em breve traremos um FAQ completo e canais de atendimento."]},"politica-de-privacidade":{title:"Política de privacidade",paragraphs:["A Artilheiro Store respeita sua privacidade e está comprometida com a proteção dos seus dados pessoais.","Esta página está em construção. Em breve publicaremos nossa política completa de privacidade e uso de dados."]},termos:{title:"Termos de uso",paragraphs:["Ao utilizar nosso site e serviços, você concorda com os termos aqui descritos.","Esta página está em construção. Em breve disponibilizaremos os termos completos de uso da Artilheiro Store."]},lojas:{title:"Nossas lojas",paragraphs:["Encontre uma Artilheiro Store perto de você.","Esta página está em construção. Em breve traremos endereços e horários de funcionamento."]},"trabalhe-conosco":{title:"Trabalhe conosco",paragraphs:["Quer fazer parte do time Artilheiro Store? Confira nossas vagas abertas.","Esta página está em construção. Em breve disponibilizaremos oportunidades de trabalho."]},"troca-devolucao":{title:"Troca e devolução",paragraphs:["Sua satisfação é nossa prioridade. Consulte as regras para trocas e devoluções.","Esta página está em construção. Em breve traremos todas as informações sobre política de trocas."]},entregas:{title:"Entregas",paragraphs:["Entregamos em todo o Brasil. Confira prazos e condições de envio.","Esta página está em construção. Em breve disponibilizaremos a tabela de fretes e prazos."]},pagamento:{title:"Formas de pagamento",paragraphs:["Aceitamos cartão de crédito, débito, Pix e boleto.","Esta página está em construção. Em breve traremos detalhes de todas as opções de pagamento."]},pedidos:{title:"Meus pedidos",paragraphs:["Acompanhe seus pedidos e histórico de compras.","Esta página está em construção. Em breve você poderá acessar sua conta e ver seus pedidos."]},favoritos:{title:"Meus favoritos",paragraphs:["Guarde seus produtos favoritos para comprar depois.","Esta página está em construção. Em breve você poderá salvar e gerenciar seus favoritos."]},cadastro:{title:"Cadastre-se",paragraphs:["Crie sua conta para agilizar compras e acompanhar pedidos.","Esta página está em construção. Em breve disponibilizaremos o formulário de cadastro."]},login:{title:"Login",paragraphs:["Acesse sua conta para gerenciar pedidos e favoritos.","Esta página está em construção. Em breve disponibilizaremos o acesso à sua conta."]}};function p5(){const[e]=lu(),t=e.get("q"),n=t?`/produtos?q=${encodeURIComponent(t)}`:"/produtos";return l.jsx(Q0,{to:n,replace:!0})}function m5(){return l.jsx(i1,{children:l.jsx(g1,{children:l.jsxs(m1,{children:[l.jsx(ev,{}),l.jsx(qx,{}),l.jsxs(K0,{children:[l.jsx(D,{path:"/",element:l.jsx(vy,{})}),l.jsx(D,{path:"/times",element:l.jsx(Y2,{})}),l.jsx(D,{path:"/produtos",element:l.jsx(Ln,{})}),l.jsx(D,{path:"/produto/:id",element:l.jsx(T2,{})}),l.jsx(D,{path:"/carrinho",element:l.jsx(RS,{})}),l.jsx(D,{path:"/checkout",element:l.jsx(pk,{})}),l.jsx(D,{path:"/checkout/sucesso",element:l.jsx(jk,{})}),l.jsx(D,{path:"/pedido/consultar",element:l.jsx(s5,{})}),l.jsx(D,{path:"/busca",element:l.jsx(p5,{})}),l.jsx(D,{path:"/sobre",element:l.jsx(ze,{...Ie.sobre})}),l.jsx(D,{path:"/contato",element:l.jsx(ze,{...Ie.contato})}),l.jsx(D,{path:"/ajuda",element:l.jsx(ze,{...Ie.ajuda})}),l.jsx(D,{path:"/politica-de-privacidade",element:l.jsx(ze,{...Ie["politica-de-privacidade"]})}),l.jsx(D,{path:"/termos",element:l.jsx(ze,{...Ie.termos})}),l.jsx(D,{path:"/lojas",element:l.jsx(ze,{...Ie.lojas})}),l.jsx(D,{path:"/trabalhe-conosco",element:l.jsx(ze,{...Ie["trabalhe-conosco"]})}),l.jsx(D,{path:"/troca-devolucao",element:l.jsx(ze,{...Ie["troca-devolucao"]})}),l.jsx(D,{path:"/entregas",element:l.jsx(ze,{...Ie.entregas})}),l.jsx(D,{path:"/pagamento",element:l.jsx(ze,{...Ie.pagamento})}),l.jsx(D,{path:"/pedidos",element:l.jsx(ze,{...Ie.pedidos})}),l.jsx(D,{path:"/favoritos",element:l.jsx(ze,{...Ie.favoritos})}),l.jsx(D,{path:"/cadastro",element:l.jsx(ze,{...Ie.cadastro})}),l.jsx(D,{path:"/login",element:l.jsx(ze,{...Ie.login})}),l.jsx(D,{path:"/categoria/:slug",element:l.jsx(Ln,{})}),l.jsx(D,{path:"/brasileirao",element:l.jsx(Ln,{})}),l.jsx(D,{path:"/europeus",element:l.jsx(Ln,{})}),l.jsx(D,{path:"/lancamentos",element:l.jsx(Ln,{})}),l.jsx(D,{path:"/promocoes",element:l.jsx(Ln,{})})]})]})})})}const h5=xx`
  :root {
    --navbar-height: 100px;
    --safe-area-bottom: env(safe-area-inset-bottom, 0px);
  }

  @media (max-width: 767px) {
    :root {
      --navbar-height: 72px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #1a1a1a;
    background: #fff;
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul {
    list-style: none;
  }
`;tl.createRoot(document.getElementById("root")).render(l.jsxs(pe.StrictMode,{children:[l.jsx(h5,{}),l.jsx(m5,{})]}));
