function t0(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function r0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Uf={exports:{}},da={},Hf={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var No=Symbol.for("react.element"),n0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),i0=Symbol.for("react.strict_mode"),a0=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),s0=Symbol.for("react.context"),c0=Symbol.for("react.forward_ref"),u0=Symbol.for("react.suspense"),d0=Symbol.for("react.memo"),f0=Symbol.for("react.lazy"),lu=Symbol.iterator;function p0(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var Vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wf=Object.assign,Gf={};function In(e,t,r){this.props=e,this.context=t,this.refs=Gf,this.updater=r||Vf}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qf(){}Qf.prototype=In.prototype;function qs(e,t,r){this.props=e,this.context=t,this.refs=Gf,this.updater=r||Vf}var Ys=qs.prototype=new Qf;Ys.constructor=qs;Wf(Ys,In.prototype);Ys.isPureReactComponent=!0;var su=Array.isArray,qf=Object.prototype.hasOwnProperty,Ks={current:null},Yf={key:!0,ref:!0,__self:!0,__source:!0};function Kf(e,t,r){var n,o={},i=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)qf.call(t,n)&&!Yf.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:No,type:e,key:i,ref:l,props:o,_owner:Ks.current}}function m0(e,t){return{$$typeof:No,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===No}function h0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var cu=/\/+/g;function Ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?h0(""+e.key):t.toString(36)}function mi(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case No:case n0:l=!0}}if(l)return l=e,o=o(l),e=n===""?"."+Ba(l,0):n,su(o)?(r="",e!=null&&(r=e.replace(cu,"$&/")+"/"),mi(o,t,r,"",function(d){return d})):o!=null&&(Xs(o)&&(o=m0(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(cu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=n===""?".":n+":",su(e))for(var s=0;s<e.length;s++){i=e[s];var u=n+Ba(i,s);l+=mi(i,t,r,u,o)}else if(u=p0(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=n+Ba(i,s++),l+=mi(i,t,r,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Bo(e,t,r){if(e==null)return e;var n=[],o=0;return mi(e,n,"","",function(i){return t.call(r,i,o++)}),n}function g0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},hi={transition:null},x0={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:hi,ReactCurrentOwner:Ks};function Xf(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Bo,forEach:function(e,t,r){Bo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Bo(e,function(){t++}),t},toArray:function(e){return Bo(e,function(t){return t})||[]},only:function(e){if(!Xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=In;U.Fragment=o0;U.Profiler=a0;U.PureComponent=qs;U.StrictMode=i0;U.Suspense=u0;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0;U.act=Xf;U.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Wf({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Ks.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)qf.call(t,u)&&!Yf.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];n.children=s}return{$$typeof:No,type:e.type,key:o,ref:i,props:n,_owner:l}};U.createContext=function(e){return e={$$typeof:s0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l0,_context:e},e.Consumer=e};U.createElement=Kf;U.createFactory=function(e){var t=Kf.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:c0,render:e}};U.isValidElement=Xs;U.lazy=function(e){return{$$typeof:f0,_payload:{_status:-1,_result:e},_init:g0}};U.memo=function(e,t){return{$$typeof:d0,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=hi.transition;hi.transition={};try{e()}finally{hi.transition=t}};U.unstable_act=Xf;U.useCallback=function(e,t){return _e.current.useCallback(e,t)};U.useContext=function(e){return _e.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};U.useEffect=function(e,t){return _e.current.useEffect(e,t)};U.useId=function(){return _e.current.useId()};U.useImperativeHandle=function(e,t,r){return _e.current.useImperativeHandle(e,t,r)};U.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return _e.current.useMemo(e,t)};U.useReducer=function(e,t,r){return _e.current.useReducer(e,t,r)};U.useRef=function(e){return _e.current.useRef(e)};U.useState=function(e){return _e.current.useState(e)};U.useSyncExternalStore=function(e,t,r){return _e.current.useSyncExternalStore(e,t,r)};U.useTransition=function(){return _e.current.useTransition()};U.version="18.3.1";Hf.exports=U;var y=Hf.exports;const re=r0(y),v0=t0({__proto__:null,default:re},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=y,w0=Symbol.for("react.element"),b0=Symbol.for("react.fragment"),j0=Object.prototype.hasOwnProperty,k0=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S0={key:!0,ref:!0,__self:!0,__source:!0};function Jf(e,t,r){var n,o={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)j0.call(t,n)&&!S0.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:w0,type:e,key:i,ref:l,props:o,_owner:k0.current}}da.Fragment=b0;da.jsx=Jf;da.jsxs=Jf;Uf.exports=da;var a=Uf.exports,Ol={},Zf={exports:{}},Ke={},ep={exports:{}},tp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var F=T.length;T.push(R);e:for(;0<F;){var q=F-1>>>1,Y=T[q];if(0<o(Y,R))T[q]=R,T[F]=Y,F=q;else break e}}function r(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var R=T[0],F=T.pop();if(F!==R){T[0]=F;e:for(var q=0,Y=T.length,wt=Y>>>1;q<wt;){var Ue=2*(q+1)-1,bt=T[Ue],He=Ue+1,be=T[He];if(0>o(bt,F))He<Y&&0>o(be,bt)?(T[q]=be,T[He]=F,q=He):(T[q]=bt,T[Ue]=F,q=Ue);else if(He<Y&&0>o(be,F))T[q]=be,T[He]=F,q=He;else break e}}return R}function o(T,R){var F=T.sortIndex-R.sortIndex;return F!==0?F:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],h=1,f=null,g=3,w=!1,v=!1,k=!1,P=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var R=r(d);R!==null;){if(R.callback===null)n(d);else if(R.startTime<=T)n(d),R.sortIndex=R.expirationTime,t(u,R);else break;R=r(d)}}function b(T){if(k=!1,m(T),!v)if(r(u)!==null)v=!0,ue(S);else{var R=r(d);R!==null&&ge(b,R.startTime-T)}}function S(T,R){v=!1,k&&(k=!1,x(I),I=-1),w=!0;var F=g;try{for(m(R),f=r(u);f!==null&&(!(f.expirationTime>R)||T&&!M());){var q=f.callback;if(typeof q=="function"){f.callback=null,g=f.priorityLevel;var Y=q(f.expirationTime<=R);R=e.unstable_now(),typeof Y=="function"?f.callback=Y:f===r(u)&&n(u),m(R)}else n(u);f=r(u)}if(f!==null)var wt=!0;else{var Ue=r(d);Ue!==null&&ge(b,Ue.startTime-R),wt=!1}return wt}finally{f=null,g=F,w=!1}}var C=!1,j=null,I=-1,_=5,E=-1;function M(){return!(e.unstable_now()-E<_)}function O(){if(j!==null){var T=e.unstable_now();E=T;var R=!0;try{R=j(!0,T)}finally{R?H():(C=!1,j=null)}}else C=!1}var H;if(typeof p=="function")H=function(){p(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Ce=L.port2;L.port1.onmessage=O,H=function(){Ce.postMessage(null)}}else H=function(){P(O,0)};function ue(T){j=T,C||(C=!0,H())}function ge(T,R){I=P(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,ue(S))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(T){switch(g){case 1:case 2:case 3:var R=3;break;default:R=g}var F=g;g=R;try{return T()}finally{g=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=g;g=T;try{return R()}finally{g=F}},e.unstable_scheduleCallback=function(T,R,F){var q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?q+F:q):F=q,T){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=F+Y,T={id:h++,callback:R,priorityLevel:T,startTime:F,expirationTime:Y,sortIndex:-1},F>q?(T.sortIndex=F,t(d,T),r(u)===null&&T===r(d)&&(k?(x(I),I=-1):k=!0,ge(b,F-q))):(T.sortIndex=Y,t(u,T),v||w||(v=!0,ue(S))),T},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(T){var R=g;return function(){var F=g;g=R;try{return T.apply(this,arguments)}finally{g=F}}}})(tp);ep.exports=tp;var C0=ep.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=y,Ye=C0;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rp=new Set,uo={};function Or(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(uo[e]=t,e=0;e<t.length;e++)rp.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=Object.prototype.hasOwnProperty,E0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,uu={},du={};function z0(e){return Al.call(du,e)?!0:Al.call(uu,e)?!1:E0.test(e)?du[e]=!0:(uu[e]=!0,!1)}function I0(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function T0(e,t,r,n){if(t===null||typeof t>"u"||I0(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,r,n,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Js=/[\-:]([a-z])/g;function Zs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Js,Zs);Se[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Js,Zs);Se[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Js,Zs);Se[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function ec(e,t,r,n){var o=Se.hasOwnProperty(t)?Se[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(T0(t,r,o,n)&&(r=null),n||o===null?z0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ft=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Uo=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),tc=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),np=Symbol.for("react.provider"),op=Symbol.for("react.context"),rc=Symbol.for("react.forward_ref"),Fl=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),nc=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),ip=Symbol.for("react.offscreen"),fu=Symbol.iterator;function An(e){return e===null||typeof e!="object"?null:(e=fu&&e[fu]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Object.assign,Ua;function Yn(e){if(Ua===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ua=t&&t[1]||""}return`
`+Ua+e}var Ha=!1;function Va(e,t){if(!e||Ha)return"";Ha=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=n.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Ha=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Yn(e):""}function L0(e){switch(e.tag){case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 2:case 15:return e=Va(e.type,!1),e;case 11:return e=Va(e.type.render,!1),e;case 1:return e=Va(e.type,!0),e;default:return""}}function Bl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qr:return"Fragment";case Qr:return"Portal";case Ml:return"Profiler";case tc:return"StrictMode";case Fl:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case op:return(e.displayName||"Context")+".Consumer";case np:return(e._context.displayName||"Context")+".Provider";case rc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nc:return t=e.displayName||null,t!==null?t:Bl(e.type)||"Memo";case Jt:t=e._payload,e=e._init;try{return Bl(e(t))}catch{}}return null}function N0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bl(t);case 8:return t===tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function gr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ap(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _0(e){var t=ap(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ho(e){e._valueTracker||(e._valueTracker=_0(e))}function lp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ap(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Ni(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ul(e,t){var r=t.checked;return ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function pu(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=gr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sp(e,t){t=t.checked,t!=null&&ec(e,"checked",t,!1)}function Hl(e,t){sp(e,t);var r=gr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,gr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mu(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Vl(e,t,r){(t!=="number"||Ni(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Kn=Array.isArray;function cn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+gr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(z(92));if(Kn(r)){if(1<r.length)throw Error(z(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:gr(r)}}function cp(e,t){var r=gr(t.value),n=gr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function up(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?up(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vo,dp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vo=Vo||document.createElement("div"),Vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var eo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R0=["Webkit","ms","Moz","O"];Object.keys(eo).forEach(function(e){R0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),eo[t]=eo[e]})});function fp(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||eo.hasOwnProperty(e)&&eo[e]?(""+t).trim():t+"px"}function pp(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=fp(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var $0=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ql(e,t){if(t){if($0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kl=null,un=null,dn=null;function xu(e){if(e=$o(e)){if(typeof Kl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=ga(t),Kl(e.stateNode,e.type,t))}}function mp(e){un?dn?dn.push(e):dn=[e]:un=e}function hp(){if(un){var e=un,t=dn;if(dn=un=null,xu(e),t)for(e=0;e<t.length;e++)xu(t[e])}}function gp(e,t){return e(t)}function xp(){}var Wa=!1;function vp(e,t,r){if(Wa)return e(t,r);Wa=!0;try{return gp(e,t,r)}finally{Wa=!1,(un!==null||dn!==null)&&(xp(),hp())}}function po(e,t){var r=e.stateNode;if(r===null)return null;var n=ga(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(z(231,t,typeof r));return r}var Xl=!1;if($t)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Xl=!1}function O0(e,t,r,n,o,i,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(h){this.onError(h)}}var to=!1,_i=null,Ri=!1,Jl=null,A0={onError:function(e){to=!0,_i=e}};function M0(e,t,r,n,o,i,l,s,u){to=!1,_i=null,O0.apply(A0,arguments)}function F0(e,t,r,n,o,i,l,s,u){if(M0.apply(this,arguments),to){if(to){var d=_i;to=!1,_i=null}else throw Error(z(198));Ri||(Ri=!0,Jl=d)}}function Ar(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function yp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vu(e){if(Ar(e)!==e)throw Error(z(188))}function D0(e){var t=e.alternate;if(!t){if(t=Ar(e),t===null)throw Error(z(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return vu(o),e;if(i===n)return vu(o),t;i=i.sibling}throw Error(z(188))}if(r.return!==n.return)r=o,n=i;else{for(var l=!1,s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l)throw Error(z(189))}}if(r.alternate!==n)throw Error(z(190))}if(r.tag!==3)throw Error(z(188));return r.stateNode.current===r?e:t}function wp(e){return e=D0(e),e!==null?bp(e):null}function bp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bp(e);if(t!==null)return t;e=e.sibling}return null}var jp=Ye.unstable_scheduleCallback,yu=Ye.unstable_cancelCallback,B0=Ye.unstable_shouldYield,U0=Ye.unstable_requestPaint,ce=Ye.unstable_now,H0=Ye.unstable_getCurrentPriorityLevel,ic=Ye.unstable_ImmediatePriority,kp=Ye.unstable_UserBlockingPriority,$i=Ye.unstable_NormalPriority,V0=Ye.unstable_LowPriority,Sp=Ye.unstable_IdlePriority,fa=null,vt=null;function W0(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(fa,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:q0,G0=Math.log,Q0=Math.LN2;function q0(e){return e>>>=0,e===0?32:31-(G0(e)/Q0|0)|0}var Wo=64,Go=4194304;function Xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oi(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~o;s!==0?n=Xn(s):(i&=l,i!==0&&(n=Xn(i)))}else l=r&~o,l!==0?n=Xn(l):i!==0&&(n=Xn(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ut(t),o=1<<r,n|=e[r],t&=~o;return n}function Y0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K0(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ut(i),s=1<<l,u=o[l];u===-1?(!(s&r)||s&n)&&(o[l]=Y0(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cp(){var e=Wo;return Wo<<=1,!(Wo&4194240)&&(Wo=64),e}function Ga(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function _o(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=r}function X0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-ut(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function ac(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ut(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var K=0;function Pp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ep,lc,zp,Ip,Tp,es=!1,Qo=[],ar=null,lr=null,sr=null,mo=new Map,ho=new Map,er=[],J0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,t){switch(e){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(t.pointerId)}}function Fn(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=$o(t),t!==null&&lc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Z0(e,t,r,n,o){switch(t){case"focusin":return ar=Fn(ar,e,t,r,n,o),!0;case"dragenter":return lr=Fn(lr,e,t,r,n,o),!0;case"mouseover":return sr=Fn(sr,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return mo.set(i,Fn(mo.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,ho.set(i,Fn(ho.get(i)||null,e,t,r,n,o)),!0}return!1}function Lp(e){var t=Sr(e.target);if(t!==null){var r=Ar(t);if(r!==null){if(t=r.tag,t===13){if(t=yp(r),t!==null){e.blockedOn=t,Tp(e.priority,function(){zp(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ts(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Yl=n,r.target.dispatchEvent(n),Yl=null}else return t=$o(r),t!==null&&lc(t),e.blockedOn=r,!1;t.shift()}return!0}function bu(e,t,r){gi(e)&&r.delete(t)}function eg(){es=!1,ar!==null&&gi(ar)&&(ar=null),lr!==null&&gi(lr)&&(lr=null),sr!==null&&gi(sr)&&(sr=null),mo.forEach(bu),ho.forEach(bu)}function Dn(e,t){e.blockedOn===t&&(e.blockedOn=null,es||(es=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,eg)))}function go(e){function t(o){return Dn(o,e)}if(0<Qo.length){Dn(Qo[0],e);for(var r=1;r<Qo.length;r++){var n=Qo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(ar!==null&&Dn(ar,e),lr!==null&&Dn(lr,e),sr!==null&&Dn(sr,e),mo.forEach(t),ho.forEach(t),r=0;r<er.length;r++)n=er[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<er.length&&(r=er[0],r.blockedOn===null);)Lp(r),r.blockedOn===null&&er.shift()}var fn=Ft.ReactCurrentBatchConfig,Ai=!0;function tg(e,t,r,n){var o=K,i=fn.transition;fn.transition=null;try{K=1,sc(e,t,r,n)}finally{K=o,fn.transition=i}}function rg(e,t,r,n){var o=K,i=fn.transition;fn.transition=null;try{K=4,sc(e,t,r,n)}finally{K=o,fn.transition=i}}function sc(e,t,r,n){if(Ai){var o=ts(e,t,r,n);if(o===null)rl(e,t,n,Mi,r),wu(e,n);else if(Z0(o,e,t,r,n))n.stopPropagation();else if(wu(e,n),t&4&&-1<J0.indexOf(e)){for(;o!==null;){var i=$o(o);if(i!==null&&Ep(i),i=ts(e,t,r,n),i===null&&rl(e,t,n,Mi,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else rl(e,t,n,null,r)}}var Mi=null;function ts(e,t,r,n){if(Mi=null,e=oc(n),e=Sr(e),e!==null)if(t=Ar(e),t===null)e=null;else if(r=t.tag,r===13){if(e=yp(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mi=e,null}function Np(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(H0()){case ic:return 1;case kp:return 4;case $i:case V0:return 16;case Sp:return 536870912;default:return 16}default:return 16}}var rr=null,cc=null,xi=null;function _p(){if(xi)return xi;var e,t=cc,r=t.length,n,o="value"in rr?rr.value:rr.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===o[i-n];n++);return xi=o.slice(e,1<n?1-n:void 0)}function vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function ju(){return!1}function Xe(e){function t(r,n,o,i,l){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qo:ju,this.isPropagationStopped=ju,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Xe(Tn),Ro=ae({},Tn,{view:0,detail:0}),ng=Xe(Ro),Qa,qa,Bn,pa=ae({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(Qa=e.screenX-Bn.screenX,qa=e.screenY-Bn.screenY):qa=Qa=0,Bn=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:qa}}),ku=Xe(pa),og=ae({},pa,{dataTransfer:0}),ig=Xe(og),ag=ae({},Ro,{relatedTarget:0}),Ya=Xe(ag),lg=ae({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=Xe(lg),cg=ae({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ug=Xe(cg),dg=ae({},Tn,{data:0}),Su=Xe(dg),fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mg[e])?!!t[e]:!1}function dc(){return hg}var gg=ae({},Ro,{key:function(e){if(e.key){var t=fg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xg=Xe(gg),vg=ae({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cu=Xe(vg),yg=ae({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),wg=Xe(yg),bg=ae({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),jg=Xe(bg),kg=ae({},pa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=Xe(kg),Cg=[9,13,27,32],fc=$t&&"CompositionEvent"in window,ro=null;$t&&"documentMode"in document&&(ro=document.documentMode);var Pg=$t&&"TextEvent"in window&&!ro,Rp=$t&&(!fc||ro&&8<ro&&11>=ro),Pu=" ",Eu=!1;function $p(e,t){switch(e){case"keyup":return Cg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yr=!1;function Eg(e,t){switch(e){case"compositionend":return Op(t);case"keypress":return t.which!==32?null:(Eu=!0,Pu);case"textInput":return e=t.data,e===Pu&&Eu?null:e;default:return null}}function zg(e,t){if(Yr)return e==="compositionend"||!fc&&$p(e,t)?(e=_p(),xi=cc=rr=null,Yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rp&&t.locale!=="ko"?null:t.data;default:return null}}var Ig={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ig[e.type]:t==="textarea"}function Ap(e,t,r,n){mp(n),t=Fi(t,"onChange"),0<t.length&&(r=new uc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var no=null,xo=null;function Tg(e){qp(e,0)}function ma(e){var t=Jr(e);if(lp(t))return e}function Lg(e,t){if(e==="change")return t}var Mp=!1;if($t){var Ka;if($t){var Xa="oninput"in document;if(!Xa){var Iu=document.createElement("div");Iu.setAttribute("oninput","return;"),Xa=typeof Iu.oninput=="function"}Ka=Xa}else Ka=!1;Mp=Ka&&(!document.documentMode||9<document.documentMode)}function Tu(){no&&(no.detachEvent("onpropertychange",Fp),xo=no=null)}function Fp(e){if(e.propertyName==="value"&&ma(xo)){var t=[];Ap(t,xo,e,oc(e)),vp(Tg,t)}}function Ng(e,t,r){e==="focusin"?(Tu(),no=t,xo=r,no.attachEvent("onpropertychange",Fp)):e==="focusout"&&Tu()}function _g(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ma(xo)}function Rg(e,t){if(e==="click")return ma(t)}function $g(e,t){if(e==="input"||e==="change")return ma(t)}function Og(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Og;function vo(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Al.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function Lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,t){var r=Lu(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Lu(r)}}function Dp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bp(){for(var e=window,t=Ni();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ni(e.document)}return t}function pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ag(e){var t=Bp(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Dp(r.ownerDocument.documentElement,r)){if(n!==null&&pc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Nu(r,i);var l=Nu(r,n);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mg=$t&&"documentMode"in document&&11>=document.documentMode,Kr=null,rs=null,oo=null,ns=!1;function _u(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ns||Kr==null||Kr!==Ni(n)||(n=Kr,"selectionStart"in n&&pc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),oo&&vo(oo,n)||(oo=n,n=Fi(rs,"onSelect"),0<n.length&&(t=new uc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Kr)))}function Yo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Xr={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Ja={},Up={};$t&&(Up=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function ha(e){if(Ja[e])return Ja[e];if(!Xr[e])return e;var t=Xr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Up)return Ja[e]=t[r];return e}var Hp=ha("animationend"),Vp=ha("animationiteration"),Wp=ha("animationstart"),Gp=ha("transitionend"),Qp=new Map,Ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(e,t){Qp.set(e,t),Or(t,[e])}for(var Za=0;Za<Ru.length;Za++){var el=Ru[Za],Fg=el.toLowerCase(),Dg=el[0].toUpperCase()+el.slice(1);vr(Fg,"on"+Dg)}vr(Hp,"onAnimationEnd");vr(Vp,"onAnimationIteration");vr(Wp,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Gp,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jn));function $u(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,F0(n,t,void 0,e),e.currentTarget=null}function qp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;$u(o,s,d),i=u}else for(l=0;l<n.length;l++){if(s=n[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;$u(o,s,d),i=u}}}if(Ri)throw e=Jl,Ri=!1,Jl=null,e}function J(e,t){var r=t[ss];r===void 0&&(r=t[ss]=new Set);var n=e+"__bubble";r.has(n)||(Yp(t,e,2,!1),r.add(n))}function tl(e,t,r){var n=0;t&&(n|=4),Yp(r,e,n,t)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function yo(e){if(!e[Ko]){e[Ko]=!0,rp.forEach(function(r){r!=="selectionchange"&&(Bg.has(r)||tl(r,!1,e),tl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ko]||(t[Ko]=!0,tl("selectionchange",!1,t))}}function Yp(e,t,r,n){switch(Np(t)){case 1:var o=tg;break;case 4:o=rg;break;default:o=sc}r=o.bind(null,t,r,e),o=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function rl(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Sr(s),l===null)return;if(u=l.tag,u===5||u===6){n=i=l;continue e}s=s.parentNode}}n=n.return}vp(function(){var d=i,h=oc(r),f=[];e:{var g=Qp.get(e);if(g!==void 0){var w=uc,v=e;switch(e){case"keypress":if(vi(r)===0)break e;case"keydown":case"keyup":w=xg;break;case"focusin":v="focus",w=Ya;break;case"focusout":v="blur",w=Ya;break;case"beforeblur":case"afterblur":w=Ya;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=wg;break;case Hp:case Vp:case Wp:w=sg;break;case Gp:w=jg;break;case"scroll":w=ng;break;case"wheel":w=Sg;break;case"copy":case"cut":case"paste":w=ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Cu}var k=(t&4)!==0,P=!k&&e==="scroll",x=k?g!==null?g+"Capture":null:g;k=[];for(var p=d,m;p!==null;){m=p;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,x!==null&&(b=po(p,x),b!=null&&k.push(wo(p,b,m)))),P)break;p=p.return}0<k.length&&(g=new w(g,v,null,r,h),f.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&r!==Yl&&(v=r.relatedTarget||r.fromElement)&&(Sr(v)||v[Ot]))break e;if((w||g)&&(g=h.window===h?h:(g=h.ownerDocument)?g.defaultView||g.parentWindow:window,w?(v=r.relatedTarget||r.toElement,w=d,v=v?Sr(v):null,v!==null&&(P=Ar(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=d),w!==v)){if(k=ku,b="onMouseLeave",x="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=Cu,b="onPointerLeave",x="onPointerEnter",p="pointer"),P=w==null?g:Jr(w),m=v==null?g:Jr(v),g=new k(b,p+"leave",w,r,h),g.target=P,g.relatedTarget=m,b=null,Sr(h)===d&&(k=new k(x,p+"enter",v,r,h),k.target=m,k.relatedTarget=P,b=k),P=b,w&&v)t:{for(k=w,x=v,p=0,m=k;m;m=Br(m))p++;for(m=0,b=x;b;b=Br(b))m++;for(;0<p-m;)k=Br(k),p--;for(;0<m-p;)x=Br(x),m--;for(;p--;){if(k===x||x!==null&&k===x.alternate)break t;k=Br(k),x=Br(x)}k=null}else k=null;w!==null&&Ou(f,g,w,k,!1),v!==null&&P!==null&&Ou(f,P,v,k,!0)}}e:{if(g=d?Jr(d):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var S=Lg;else if(zu(g))if(Mp)S=$g;else{S=_g;var C=Ng}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=Rg);if(S&&(S=S(e,d))){Ap(f,S,r,h);break e}C&&C(e,g,d),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&Vl(g,"number",g.value)}switch(C=d?Jr(d):window,e){case"focusin":(zu(C)||C.contentEditable==="true")&&(Kr=C,rs=d,oo=null);break;case"focusout":oo=rs=Kr=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,_u(f,r,h);break;case"selectionchange":if(Mg)break;case"keydown":case"keyup":_u(f,r,h)}var j;if(fc)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Yr?$p(e,r)&&(I="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(I="onCompositionStart");I&&(Rp&&r.locale!=="ko"&&(Yr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Yr&&(j=_p()):(rr=h,cc="value"in rr?rr.value:rr.textContent,Yr=!0)),C=Fi(d,I),0<C.length&&(I=new Su(I,e,null,r,h),f.push({event:I,listeners:C}),j?I.data=j:(j=Op(r),j!==null&&(I.data=j)))),(j=Pg?Eg(e,r):zg(e,r))&&(d=Fi(d,"onBeforeInput"),0<d.length&&(h=new Su("onBeforeInput","beforeinput",null,r,h),f.push({event:h,listeners:d}),h.data=j))}qp(f,t)})}function wo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Fi(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=po(e,r),i!=null&&n.unshift(wo(e,i,o)),i=po(e,t),i!=null&&n.push(wo(e,i,o))),e=e.return}return n}function Br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ou(e,t,r,n,o){for(var i=t._reactName,l=[];r!==null&&r!==n;){var s=r,u=s.alternate,d=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&d!==null&&(s=d,o?(u=po(r,i),u!=null&&l.unshift(wo(r,u,s))):o||(u=po(r,i),u!=null&&l.push(wo(r,u,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Ug=/\r\n?/g,Hg=/\u0000|\uFFFD/g;function Au(e){return(typeof e=="string"?e:""+e).replace(Ug,`
`).replace(Hg,"")}function Xo(e,t,r){if(t=Au(t),Au(e)!==t&&r)throw Error(z(425))}function Di(){}var os=null,is=null;function as(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,Mu=typeof Promise=="function"?Promise:void 0,Wg=typeof queueMicrotask=="function"?queueMicrotask:typeof Mu<"u"?function(e){return Mu.resolve(null).then(e).catch(Gg)}:ls;function Gg(e){setTimeout(function(){throw e})}function nl(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),go(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);go(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ln=Math.random().toString(36).slice(2),xt="__reactFiber$"+Ln,bo="__reactProps$"+Ln,Ot="__reactContainer$"+Ln,ss="__reactEvents$"+Ln,Qg="__reactListeners$"+Ln,qg="__reactHandles$"+Ln;function Sr(e){var t=e[xt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ot]||r[xt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Fu(e);e!==null;){if(r=e[xt])return r;e=Fu(e)}return t}e=r,r=e.parentNode}return null}function $o(e){return e=e[xt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function ga(e){return e[bo]||null}var cs=[],Zr=-1;function yr(e){return{current:e}}function ee(e){0>Zr||(e.current=cs[Zr],cs[Zr]=null,Zr--)}function X(e,t){Zr++,cs[Zr]=e.current,e.current=t}var xr={},Te=yr(xr),Me=yr(!1),Tr=xr;function gn(e,t){var r=e.type.contextTypes;if(!r)return xr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function Bi(){ee(Me),ee(Te)}function Du(e,t,r){if(Te.current!==xr)throw Error(z(168));X(Te,t),X(Me,r)}function Kp(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(z(108,N0(e)||"Unknown",o));return ae({},r,n)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xr,Tr=Te.current,X(Te,e),X(Me,Me.current),!0}function Bu(e,t,r){var n=e.stateNode;if(!n)throw Error(z(169));r?(e=Kp(e,t,Tr),n.__reactInternalMemoizedMergedChildContext=e,ee(Me),ee(Te),X(Te,e)):ee(Me),X(Me,r)}var It=null,xa=!1,ol=!1;function Xp(e){It===null?It=[e]:It.push(e)}function Yg(e){xa=!0,Xp(e)}function wr(){if(!ol&&It!==null){ol=!0;var e=0,t=K;try{var r=It;for(K=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}It=null,xa=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),jp(ic,wr),o}finally{K=t,ol=!1}}return null}var en=[],tn=0,Hi=null,Vi=0,Je=[],Ze=0,Lr=null,Lt=1,Nt="";function jr(e,t){en[tn++]=Vi,en[tn++]=Hi,Hi=e,Vi=t}function Jp(e,t,r){Je[Ze++]=Lt,Je[Ze++]=Nt,Je[Ze++]=Lr,Lr=e;var n=Lt;e=Nt;var o=32-ut(n)-1;n&=~(1<<o),r+=1;var i=32-ut(t)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,Lt=1<<32-ut(t)+o|r<<o|n,Nt=i+e}else Lt=1<<i|r<<o|n,Nt=e}function mc(e){e.return!==null&&(jr(e,1),Jp(e,1,0))}function hc(e){for(;e===Hi;)Hi=en[--tn],en[tn]=null,Vi=en[--tn],en[tn]=null;for(;e===Lr;)Lr=Je[--Ze],Je[Ze]=null,Nt=Je[--Ze],Je[Ze]=null,Lt=Je[--Ze],Je[Ze]=null}var qe=null,Qe=null,te=!1,ct=null;function Zp(e,t){var r=et(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Uu(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Qe=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Lr!==null?{id:Lt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=et(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Qe=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ds(e){if(te){var t=Qe;if(t){var r=t;if(!Uu(e,t)){if(us(e))throw Error(z(418));t=cr(r.nextSibling);var n=qe;t&&Uu(e,t)?Zp(n,r):(e.flags=e.flags&-4097|2,te=!1,qe=e)}}else{if(us(e))throw Error(z(418));e.flags=e.flags&-4097|2,te=!1,qe=e}}}function Hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Jo(e){if(e!==qe)return!1;if(!te)return Hu(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!as(e.type,e.memoizedProps)),t&&(t=Qe)){if(us(e))throw em(),Error(z(418));for(;t;)Zp(e,t),t=cr(t.nextSibling)}if(Hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=cr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=qe?cr(e.stateNode.nextSibling):null;return!0}function em(){for(var e=Qe;e;)e=cr(e.nextSibling)}function xn(){Qe=qe=null,te=!1}function gc(e){ct===null?ct=[e]:ct.push(e)}var Kg=Ft.ReactCurrentBatchConfig;function Un(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(z(309));var n=r.stateNode}if(!n)throw Error(z(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!r._owner)throw Error(z(290,e))}return e}function Zo(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vu(e){var t=e._init;return t(e._payload)}function tm(e){function t(x,p){if(e){var m=x.deletions;m===null?(x.deletions=[p],x.flags|=16):m.push(p)}}function r(x,p){if(!e)return null;for(;p!==null;)t(x,p),p=p.sibling;return null}function n(x,p){for(x=new Map;p!==null;)p.key!==null?x.set(p.key,p):x.set(p.index,p),p=p.sibling;return x}function o(x,p){return x=pr(x,p),x.index=0,x.sibling=null,x}function i(x,p,m){return x.index=m,e?(m=x.alternate,m!==null?(m=m.index,m<p?(x.flags|=2,p):m):(x.flags|=2,p)):(x.flags|=1048576,p)}function l(x){return e&&x.alternate===null&&(x.flags|=2),x}function s(x,p,m,b){return p===null||p.tag!==6?(p=dl(m,x.mode,b),p.return=x,p):(p=o(p,m),p.return=x,p)}function u(x,p,m,b){var S=m.type;return S===qr?h(x,p,m.props.children,b,m.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Jt&&Vu(S)===p.type)?(b=o(p,m.props),b.ref=Un(x,p,m),b.return=x,b):(b=Ci(m.type,m.key,m.props,null,x.mode,b),b.ref=Un(x,p,m),b.return=x,b)}function d(x,p,m,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=fl(m,x.mode,b),p.return=x,p):(p=o(p,m.children||[]),p.return=x,p)}function h(x,p,m,b,S){return p===null||p.tag!==7?(p=Ir(m,x.mode,b,S),p.return=x,p):(p=o(p,m),p.return=x,p)}function f(x,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=dl(""+p,x.mode,m),p.return=x,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Uo:return m=Ci(p.type,p.key,p.props,null,x.mode,m),m.ref=Un(x,null,p),m.return=x,m;case Qr:return p=fl(p,x.mode,m),p.return=x,p;case Jt:var b=p._init;return f(x,b(p._payload),m)}if(Kn(p)||An(p))return p=Ir(p,x.mode,m,null),p.return=x,p;Zo(x,p)}return null}function g(x,p,m,b){var S=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:s(x,p,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Uo:return m.key===S?u(x,p,m,b):null;case Qr:return m.key===S?d(x,p,m,b):null;case Jt:return S=m._init,g(x,p,S(m._payload),b)}if(Kn(m)||An(m))return S!==null?null:h(x,p,m,b,null);Zo(x,m)}return null}function w(x,p,m,b,S){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(m)||null,s(p,x,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Uo:return x=x.get(b.key===null?m:b.key)||null,u(p,x,b,S);case Qr:return x=x.get(b.key===null?m:b.key)||null,d(p,x,b,S);case Jt:var C=b._init;return w(x,p,m,C(b._payload),S)}if(Kn(b)||An(b))return x=x.get(m)||null,h(p,x,b,S,null);Zo(p,b)}return null}function v(x,p,m,b){for(var S=null,C=null,j=p,I=p=0,_=null;j!==null&&I<m.length;I++){j.index>I?(_=j,j=null):_=j.sibling;var E=g(x,j,m[I],b);if(E===null){j===null&&(j=_);break}e&&j&&E.alternate===null&&t(x,j),p=i(E,p,I),C===null?S=E:C.sibling=E,C=E,j=_}if(I===m.length)return r(x,j),te&&jr(x,I),S;if(j===null){for(;I<m.length;I++)j=f(x,m[I],b),j!==null&&(p=i(j,p,I),C===null?S=j:C.sibling=j,C=j);return te&&jr(x,I),S}for(j=n(x,j);I<m.length;I++)_=w(j,x,I,m[I],b),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?I:_.key),p=i(_,p,I),C===null?S=_:C.sibling=_,C=_);return e&&j.forEach(function(M){return t(x,M)}),te&&jr(x,I),S}function k(x,p,m,b){var S=An(m);if(typeof S!="function")throw Error(z(150));if(m=S.call(m),m==null)throw Error(z(151));for(var C=S=null,j=p,I=p=0,_=null,E=m.next();j!==null&&!E.done;I++,E=m.next()){j.index>I?(_=j,j=null):_=j.sibling;var M=g(x,j,E.value,b);if(M===null){j===null&&(j=_);break}e&&j&&M.alternate===null&&t(x,j),p=i(M,p,I),C===null?S=M:C.sibling=M,C=M,j=_}if(E.done)return r(x,j),te&&jr(x,I),S;if(j===null){for(;!E.done;I++,E=m.next())E=f(x,E.value,b),E!==null&&(p=i(E,p,I),C===null?S=E:C.sibling=E,C=E);return te&&jr(x,I),S}for(j=n(x,j);!E.done;I++,E=m.next())E=w(j,x,I,E.value,b),E!==null&&(e&&E.alternate!==null&&j.delete(E.key===null?I:E.key),p=i(E,p,I),C===null?S=E:C.sibling=E,C=E);return e&&j.forEach(function(O){return t(x,O)}),te&&jr(x,I),S}function P(x,p,m,b){if(typeof m=="object"&&m!==null&&m.type===qr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Uo:e:{for(var S=m.key,C=p;C!==null;){if(C.key===S){if(S=m.type,S===qr){if(C.tag===7){r(x,C.sibling),p=o(C,m.props.children),p.return=x,x=p;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Jt&&Vu(S)===C.type){r(x,C.sibling),p=o(C,m.props),p.ref=Un(x,C,m),p.return=x,x=p;break e}r(x,C);break}else t(x,C);C=C.sibling}m.type===qr?(p=Ir(m.props.children,x.mode,b,m.key),p.return=x,x=p):(b=Ci(m.type,m.key,m.props,null,x.mode,b),b.ref=Un(x,p,m),b.return=x,x=b)}return l(x);case Qr:e:{for(C=m.key;p!==null;){if(p.key===C)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){r(x,p.sibling),p=o(p,m.children||[]),p.return=x,x=p;break e}else{r(x,p);break}else t(x,p);p=p.sibling}p=fl(m,x.mode,b),p.return=x,x=p}return l(x);case Jt:return C=m._init,P(x,p,C(m._payload),b)}if(Kn(m))return v(x,p,m,b);if(An(m))return k(x,p,m,b);Zo(x,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(r(x,p.sibling),p=o(p,m),p.return=x,x=p):(r(x,p),p=dl(m,x.mode,b),p.return=x,x=p),l(x)):r(x,p)}return P}var vn=tm(!0),rm=tm(!1),Wi=yr(null),Gi=null,rn=null,xc=null;function vc(){xc=rn=Gi=null}function yc(e){var t=Wi.current;ee(Wi),e._currentValue=t}function fs(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function pn(e,t){Gi=e,xc=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(xc!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(Gi===null)throw Error(z(308));rn=e,Gi.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Cr=null;function wc(e){Cr===null?Cr=[e]:Cr.push(e)}function nm(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,wc(t)):(r.next=o.next,o.next=r),t.interleaved=r,At(e,n)}function At(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Zt=!1;function bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function om(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,G&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,At(e,r)}return o=n.interleaved,o===null?(t.next=t,wc(n)):(t.next=o.next,o.next=t),n.interleaved=t,At(e,r)}function yi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ac(e,r)}}function Wu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Qi(e,t,r,n){var o=e.updateQueue;Zt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?i=d:l.next=d,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=u))}if(i!==null){var f=o.baseState;l=0,h=d=u=null,s=i;do{var g=s.lane,w=s.eventTime;if((n&g)===g){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var v=e,k=s;switch(g=t,w=r,k.tag){case 1:if(v=k.payload,typeof v=="function"){f=v.call(w,f,g);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=k.payload,g=typeof v=="function"?v.call(w,f,g):v,g==null)break e;f=ae({},f,g);break e;case 2:Zt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else w={eventTime:w,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=w,u=f):h=h.next=w,l|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(h===null&&(u=f),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);_r|=l,e.lanes=l,e.memoizedState=f}}function Gu(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(z(191,o));o.call(n)}}}var Oo={},yt=yr(Oo),jo=yr(Oo),ko=yr(Oo);function Pr(e){if(e===Oo)throw Error(z(174));return e}function jc(e,t){switch(X(ko,t),X(jo,e),X(yt,Oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}ee(yt),X(yt,t)}function yn(){ee(yt),ee(jo),ee(ko)}function im(e){Pr(ko.current);var t=Pr(yt.current),r=Gl(t,e.type);t!==r&&(X(jo,e),X(yt,r))}function kc(e){jo.current===e&&(ee(yt),ee(jo))}var ne=yr(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var il=[];function Sc(){for(var e=0;e<il.length;e++)il[e]._workInProgressVersionPrimary=null;il.length=0}var wi=Ft.ReactCurrentDispatcher,al=Ft.ReactCurrentBatchConfig,Nr=0,oe=null,pe=null,xe=null,Yi=!1,io=!1,So=0,Xg=0;function Pe(){throw Error(z(321))}function Cc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!pt(e[r],t[r]))return!1;return!0}function Pc(e,t,r,n,o,i){if(Nr=i,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wi.current=e===null||e.memoizedState===null?t1:r1,e=r(n,o),io){i=0;do{if(io=!1,So=0,25<=i)throw Error(z(301));i+=1,xe=pe=null,t.updateQueue=null,wi.current=n1,e=r(n,o)}while(io)}if(wi.current=Ki,t=pe!==null&&pe.next!==null,Nr=0,xe=pe=oe=null,Yi=!1,t)throw Error(z(300));return e}function Ec(){var e=So!==0;return So=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?oe.memoizedState=xe=e:xe=xe.next=e,xe}function nt(){if(pe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=xe===null?oe.memoizedState:xe.next;if(t!==null)xe=t,pe=e;else{if(e===null)throw Error(z(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},xe===null?oe.memoizedState=xe=e:xe=xe.next=e}return xe}function Co(e,t){return typeof t=="function"?t(e):t}function ll(e){var t=nt(),r=t.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=e;var n=pe,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=l=null,u=null,d=i;do{var h=d.lane;if((Nr&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var f={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=f,l=n):u=u.next=f,oe.lanes|=h,_r|=h}d=d.next}while(d!==null&&d!==i);u===null?l=n:u.next=s,pt(n,t.memoizedState)||(Ae=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,oe.lanes|=i,_r|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function sl(e){var t=nt(),r=t.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);pt(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function am(){}function lm(e,t){var r=oe,n=nt(),o=t(),i=!pt(n.memoizedState,o);if(i&&(n.memoizedState=o,Ae=!0),n=n.queue,zc(um.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(r.flags|=2048,Po(9,cm.bind(null,r,n,o,t),void 0,null),we===null)throw Error(z(349));Nr&30||sm(r,t,o)}return o}function sm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function cm(e,t,r,n){t.value=r,t.getSnapshot=n,dm(t)&&fm(e)}function um(e,t,r){return r(function(){dm(t)&&fm(e)})}function dm(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!pt(e,r)}catch{return!0}}function fm(e){var t=At(e,1);t!==null&&dt(t,e,1,-1)}function Qu(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:e},t.queue=e,e=e.dispatch=e1.bind(null,oe,e),[t.memoizedState,e]}function Po(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function pm(){return nt().memoizedState}function bi(e,t,r,n){var o=gt();oe.flags|=e,o.memoizedState=Po(1|t,r,void 0,n===void 0?null:n)}function va(e,t,r,n){var o=nt();n=n===void 0?null:n;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,n!==null&&Cc(n,l.deps)){o.memoizedState=Po(t,r,i,n);return}}oe.flags|=e,o.memoizedState=Po(1|t,r,i,n)}function qu(e,t){return bi(8390656,8,e,t)}function zc(e,t){return va(2048,8,e,t)}function mm(e,t){return va(4,2,e,t)}function hm(e,t){return va(4,4,e,t)}function gm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xm(e,t,r){return r=r!=null?r.concat([e]):null,va(4,4,gm.bind(null,t,e),r)}function Ic(){}function vm(e,t){var r=nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Cc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ym(e,t){var r=nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Cc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function wm(e,t,r){return Nr&21?(pt(r,t)||(r=Cp(),oe.lanes|=r,_r|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=r)}function Jg(e,t){var r=K;K=r!==0&&4>r?r:4,e(!0);var n=al.transition;al.transition={};try{e(!1),t()}finally{K=r,al.transition=n}}function bm(){return nt().memoizedState}function Zg(e,t,r){var n=fr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},jm(e))km(t,r);else if(r=nm(e,t,r,n),r!==null){var o=Ne();dt(r,e,n,o),Sm(r,t,n)}}function e1(e,t,r){var n=fr(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(jm(e))km(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,r);if(o.hasEagerState=!0,o.eagerState=s,pt(s,l)){var u=t.interleaved;u===null?(o.next=o,wc(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}r=nm(e,t,o,n),r!==null&&(o=Ne(),dt(r,e,n,o),Sm(r,t,n))}}function jm(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function km(e,t){io=Yi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Sm(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ac(e,r)}}var Ki={readContext:rt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},t1={readContext:rt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:qu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,bi(4194308,4,gm.bind(null,t,e),r)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return bi(4,2,e,t)},useMemo:function(e,t){var r=gt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=gt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Zg.bind(null,oe,e),[n.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Qu,useDebugValue:Ic,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Qu(!1),t=e[0];return e=Jg.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=oe,o=gt();if(te){if(r===void 0)throw Error(z(407));r=r()}else{if(r=t(),we===null)throw Error(z(349));Nr&30||sm(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,qu(um.bind(null,n,i,e),[e]),n.flags|=2048,Po(9,cm.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=gt(),t=we.identifierPrefix;if(te){var r=Nt,n=Lt;r=(n&~(1<<32-ut(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=So++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Xg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},r1={readContext:rt,useCallback:vm,useContext:rt,useEffect:zc,useImperativeHandle:xm,useInsertionEffect:mm,useLayoutEffect:hm,useMemo:ym,useReducer:ll,useRef:pm,useState:function(){return ll(Co)},useDebugValue:Ic,useDeferredValue:function(e){var t=nt();return wm(t,pe.memoizedState,e)},useTransition:function(){var e=ll(Co)[0],t=nt().memoizedState;return[e,t]},useMutableSource:am,useSyncExternalStore:lm,useId:bm,unstable_isNewReconciler:!1},n1={readContext:rt,useCallback:vm,useContext:rt,useEffect:zc,useImperativeHandle:xm,useInsertionEffect:mm,useLayoutEffect:hm,useMemo:ym,useReducer:sl,useRef:pm,useState:function(){return sl(Co)},useDebugValue:Ic,useDeferredValue:function(e){var t=nt();return pe===null?t.memoizedState=e:wm(t,pe.memoizedState,e)},useTransition:function(){var e=sl(Co)[0],t=nt().memoizedState;return[e,t]},useMutableSource:am,useSyncExternalStore:lm,useId:bm,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=ae({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ps(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:ae({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ya={isMounted:function(e){return(e=e._reactInternals)?Ar(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=fr(e),i=_t(n,o);i.payload=t,r!=null&&(i.callback=r),t=ur(e,i,o),t!==null&&(dt(t,e,o,n),yi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=fr(e),i=_t(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=ur(e,i,o),t!==null&&(dt(t,e,o,n),yi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ne(),n=fr(e),o=_t(r,n);o.tag=2,t!=null&&(o.callback=t),t=ur(e,o,n),t!==null&&(dt(t,e,n,r),yi(t,e,n))}};function Yu(e,t,r,n,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):t.prototype&&t.prototype.isPureReactComponent?!vo(r,n)||!vo(o,i):!0}function Cm(e,t,r){var n=!1,o=xr,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=Fe(t)?Tr:Te.current,n=t.contextTypes,i=(n=n!=null)?gn(e,o):xr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ya,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ku(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ya.enqueueReplaceState(t,t.state,null)}function ms(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},bc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=Fe(t)?Tr:Te.current,o.context=gn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ps(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ya.enqueueReplaceState(o,o.state,null),Qi(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var r="",n=t;do r+=L0(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function cl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function hs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var o1=typeof WeakMap=="function"?WeakMap:Map;function Pm(e,t,r){r=_t(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ji||(Ji=!0,Cs=n),hs(e,t)},r}function Em(e,t,r){r=_t(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){hs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){hs(e,t),typeof n!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Xu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new o1;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=v1.bind(null,e,t,r),t.then(e,e))}function Ju(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zu(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=_t(-1,1),t.tag=2,ur(r,t,1))),r.lanes|=1),e)}var i1=Ft.ReactCurrentOwner,Ae=!1;function Le(e,t,r,n){t.child=e===null?rm(t,null,r,n):vn(t,e.child,r,n)}function ed(e,t,r,n,o){r=r.render;var i=t.ref;return pn(t,o),n=Pc(e,t,r,n,i,o),r=Ec(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(te&&r&&mc(t),t.flags|=1,Le(e,t,n,o),t.child)}function td(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Ac(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,zm(e,t,i,n,o)):(e=Ci(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:vo,r(l,n)&&e.ref===t.ref)return Mt(e,t,o)}return t.flags|=1,e=pr(i,n),e.ref=t.ref,e.return=t,t.child=e}function zm(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(vo(i,n)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Mt(e,t,o)}return gs(e,t,r,n,o)}function Im(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(on,Ge),Ge|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(on,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,X(on,Ge),Ge|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,X(on,Ge),Ge|=n;return Le(e,t,o,r),t.child}function Tm(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function gs(e,t,r,n,o){var i=Fe(r)?Tr:Te.current;return i=gn(t,i),pn(t,o),r=Pc(e,t,r,n,i,o),n=Ec(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(te&&n&&mc(t),t.flags|=1,Le(e,t,r,o),t.child)}function rd(e,t,r,n,o){if(Fe(r)){var i=!0;Ui(t)}else i=!1;if(pn(t,o),t.stateNode===null)ji(e,t),Cm(t,r,n),ms(t,r,n,o),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=rt(d):(d=Fe(r)?Tr:Te.current,d=gn(t,d));var h=r.getDerivedStateFromProps,f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||u!==d)&&Ku(t,l,n,d),Zt=!1;var g=t.memoizedState;l.state=g,Qi(t,n,l,o),u=t.memoizedState,s!==n||g!==u||Me.current||Zt?(typeof h=="function"&&(ps(t,r,h,n),u=t.memoizedState),(s=Zt||Yu(t,r,s,n,g,u,d))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),l.props=n,l.state=u,l.context=d,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,om(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:at(t.type,s),l.props=d,f=t.pendingProps,g=l.context,u=r.contextType,typeof u=="object"&&u!==null?u=rt(u):(u=Fe(r)?Tr:Te.current,u=gn(t,u));var w=r.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||g!==u)&&Ku(t,l,n,u),Zt=!1,g=t.memoizedState,l.state=g,Qi(t,n,l,o);var v=t.memoizedState;s!==f||g!==v||Me.current||Zt?(typeof w=="function"&&(ps(t,r,w,n),v=t.memoizedState),(d=Zt||Yu(t,r,d,n,g,v,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),l.props=n,l.state=v,l.context=u,n=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return xs(e,t,r,n,i,o)}function xs(e,t,r,n,o,i){Tm(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return o&&Bu(t,r,!1),Mt(e,t,i);n=t.stateNode,i1.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=vn(t,e.child,null,i),t.child=vn(t,null,s,i)):Le(e,t,s,i),t.memoizedState=n.state,o&&Bu(t,r,!0),t.child}function Lm(e){var t=e.stateNode;t.pendingContext?Du(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Du(e,t.context,!1),jc(e,t.containerInfo)}function nd(e,t,r,n,o){return xn(),gc(o),t.flags|=256,Le(e,t,r,n),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nm(e,t,r){var n=t.pendingProps,o=ne.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(ne,o&1),e===null)return ds(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,i?(n=t.mode,i=t.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ja(l,n,0,null),e=Ir(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ys(r),t.memoizedState=vs,e):Tc(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return a1(e,t,l,n,s,o,r);if(i){i=n.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:n.children};return!(l&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=pr(o,u),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=pr(s,i):(i=Ir(i,l,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,l=e.child.memoizedState,l=l===null?ys(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=vs,n}return i=e.child,e=i.sibling,n=pr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Tc(e,t){return t=ja({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ei(e,t,r,n){return n!==null&&gc(n),vn(t,e.child,null,r),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function a1(e,t,r,n,o,i,l){if(r)return t.flags&256?(t.flags&=-257,n=cl(Error(z(422))),ei(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=ja({mode:"visible",children:n.children},o,0,null),i=Ir(i,o,l,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&vn(t,e.child,null,l),t.child.memoizedState=ys(l),t.memoizedState=vs,i);if(!(t.mode&1))return ei(e,t,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(z(419)),n=cl(i,n,void 0),ei(e,t,l,n)}if(s=(l&e.childLanes)!==0,Ae||s){if(n=we,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,At(e,o),dt(n,e,o,-1))}return Oc(),n=cl(Error(z(421))),ei(e,t,l,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=y1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=cr(o.nextSibling),qe=t,te=!0,ct=null,e!==null&&(Je[Ze++]=Lt,Je[Ze++]=Nt,Je[Ze++]=Lr,Lt=e.id,Nt=e.overflow,Lr=t),t=Tc(t,n.children),t.flags|=4096,t)}function od(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),fs(e.return,t,r)}function ul(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function _m(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Le(e,t,n.children,r),n=ne.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&od(e,r,t);else if(e.tag===19)od(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(X(ne,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&qi(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),ul(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&qi(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ul(t,!0,r,null,i);break;case"together":ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ji(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),_r|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,r=pr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=pr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function l1(e,t,r){switch(t.tag){case 3:Lm(t),xn();break;case 5:im(t);break;case 1:Fe(t.type)&&Ui(t);break;case 4:jc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;X(Wi,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(X(ne,ne.current&1),t.flags|=128,null):r&t.child.childLanes?Nm(e,t,r):(X(ne,ne.current&1),e=Mt(e,t,r),e!==null?e.sibling:null);X(ne,ne.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return _m(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(ne,ne.current),n)break;return null;case 22:case 23:return t.lanes=0,Im(e,t,r)}return Mt(e,t,r)}var Rm,ws,$m,Om;Rm=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ws=function(){};$m=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Pr(yt.current);var i=null;switch(r){case"input":o=Ul(e,o),n=Ul(e,n),i=[];break;case"select":o=ae({},o,{value:void 0}),n=ae({},n,{value:void 0}),i=[];break;case"textarea":o=Wl(e,o),n=Wl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Di)}Ql(r,n);var l;r=null;for(d in o)if(!n.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(uo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var u=n[d];if(s=o!=null?o[d]:void 0,n.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(r||(r={}),r[l]=u[l])}else r||(i||(i=[]),i.push(d,r)),r=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(uo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&J("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Om=function(e,t,r,n){r!==n&&(t.flags|=4)};function Hn(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function s1(e,t,r){var n=t.pendingProps;switch(hc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Fe(t.type)&&Bi(),Ee(t),null;case 3:return n=t.stateNode,yn(),ee(Me),ee(Te),Sc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(zs(ct),ct=null))),ws(e,t),Ee(t),null;case 5:kc(t);var o=Pr(ko.current);if(r=t.type,e!==null&&t.stateNode!=null)$m(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(z(166));return Ee(t),null}if(e=Pr(yt.current),Jo(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[xt]=t,n[bo]=i,e=(t.mode&1)!==0,r){case"dialog":J("cancel",n),J("close",n);break;case"iframe":case"object":case"embed":J("load",n);break;case"video":case"audio":for(o=0;o<Jn.length;o++)J(Jn[o],n);break;case"source":J("error",n);break;case"img":case"image":case"link":J("error",n),J("load",n);break;case"details":J("toggle",n);break;case"input":pu(n,i),J("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},J("invalid",n);break;case"textarea":hu(n,i),J("invalid",n)}Ql(r,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&Xo(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Xo(n.textContent,s,e),o=["children",""+s]):uo.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&J("scroll",n)}switch(r){case"input":Ho(n),mu(n,i,!0);break;case"textarea":Ho(n),gu(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Di)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=up(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[xt]=t,e[bo]=n,Rm(e,t,!1,!1),t.stateNode=e;e:{switch(l=ql(r,n),r){case"dialog":J("cancel",e),J("close",e),o=n;break;case"iframe":case"object":case"embed":J("load",e),o=n;break;case"video":case"audio":for(o=0;o<Jn.length;o++)J(Jn[o],e);o=n;break;case"source":J("error",e),o=n;break;case"img":case"image":case"link":J("error",e),J("load",e),o=n;break;case"details":J("toggle",e),o=n;break;case"input":pu(e,n),o=Ul(e,n),J("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=ae({},n,{value:void 0}),J("invalid",e);break;case"textarea":hu(e,n),o=Wl(e,n),J("invalid",e);break;default:o=n}Ql(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?pp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dp(e,u)):i==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&fo(e,u):typeof u=="number"&&fo(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(uo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&J("scroll",e):u!=null&&ec(e,i,u,l))}switch(r){case"input":Ho(e),mu(e,n,!1);break;case"textarea":Ho(e),gu(e);break;case"option":n.value!=null&&e.setAttribute("value",""+gr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?cn(e,!!n.multiple,i,!1):n.defaultValue!=null&&cn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Di)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Om(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(z(166));if(r=Pr(ko.current),Pr(yt.current),Jo(t)){if(n=t.stateNode,r=t.memoizedProps,n[xt]=t,(i=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:Xo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xo(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[xt]=t,t.stateNode=n}return Ee(t),null;case 13:if(ee(ne),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Qe!==null&&t.mode&1&&!(t.flags&128))em(),xn(),t.flags|=98560,i=!1;else if(i=Jo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[xt]=t}else xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else ct!==null&&(zs(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ne.current&1?he===0&&(he=3):Oc())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return yn(),ws(e,t),e===null&&yo(t.stateNode.containerInfo),Ee(t),null;case 10:return yc(t.type._context),Ee(t),null;case 17:return Fe(t.type)&&Bi(),Ee(t),null;case 19:if(ee(ne),i=t.memoizedState,i===null)return Ee(t),null;if(n=(t.flags&128)!==0,l=i.rendering,l===null)if(n)Hn(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=qi(e),l!==null){for(t.flags|=128,Hn(i,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return X(ne,ne.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>bn&&(t.flags|=128,n=!0,Hn(i,!1),t.lanes=4194304)}else{if(!n)if(e=qi(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Hn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!te)return Ee(t),null}else 2*ce()-i.renderingStartTime>bn&&r!==1073741824&&(t.flags|=128,n=!0,Hn(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,r=ne.current,X(ne,n?r&1|2:r&1),t):(Ee(t),null);case 22:case 23:return $c(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ge&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function c1(e,t){switch(hc(t),t.tag){case 1:return Fe(t.type)&&Bi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),ee(Me),ee(Te),Sc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return kc(t),null;case 13:if(ee(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(ne),null;case 4:return yn(),null;case 10:return yc(t.type._context),null;case 22:case 23:return $c(),null;case 24:return null;default:return null}}var ti=!1,ze=!1,u1=typeof WeakSet=="function"?WeakSet:Set,N=null;function nn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){le(e,t,n)}else r.current=null}function bs(e,t,r){try{r()}catch(n){le(e,t,n)}}var id=!1;function d1(e,t){if(os=Ai,e=Bp(),pc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,s=-1,u=-1,d=0,h=0,f=e,g=null;t:for(;;){for(var w;f!==r||o!==0&&f.nodeType!==3||(s=l+o),f!==i||n!==0&&f.nodeType!==3||(u=l+n),f.nodeType===3&&(l+=f.nodeValue.length),(w=f.firstChild)!==null;)g=f,f=w;for(;;){if(f===e)break t;if(g===r&&++d===o&&(s=l),g===i&&++h===n&&(u=l),(w=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=w}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(is={focusedElem:e,selectionRange:r},Ai=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var k=v.memoizedProps,P=v.memoizedState,x=t.stateNode,p=x.getSnapshotBeforeUpdate(t.elementType===t.type?k:at(t.type,k),P);x.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){le(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return v=id,id=!1,v}function ao(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&bs(t,r,i)}o=o.next}while(o!==n)}}function wa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function js(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Am(e){var t=e.alternate;t!==null&&(e.alternate=null,Am(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[bo],delete t[ss],delete t[Qg],delete t[qg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mm(e){return e.tag===5||e.tag===3||e.tag===4}function ad(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ks(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Di));else if(n!==4&&(e=e.child,e!==null))for(ks(e,t,r),e=e.sibling;e!==null;)ks(e,t,r),e=e.sibling}function Ss(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ss(e,t,r),e=e.sibling;e!==null;)Ss(e,t,r),e=e.sibling}var je=null,lt=!1;function Qt(e,t,r){for(r=r.child;r!==null;)Fm(e,t,r),r=r.sibling}function Fm(e,t,r){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(fa,r)}catch{}switch(r.tag){case 5:ze||nn(r,t);case 6:var n=je,o=lt;je=null,Qt(e,t,r),je=n,lt=o,je!==null&&(lt?(e=je,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):je.removeChild(r.stateNode));break;case 18:je!==null&&(lt?(e=je,r=r.stateNode,e.nodeType===8?nl(e.parentNode,r):e.nodeType===1&&nl(e,r),go(e)):nl(je,r.stateNode));break;case 4:n=je,o=lt,je=r.stateNode.containerInfo,lt=!0,Qt(e,t,r),je=n,lt=o;break;case 0:case 11:case 14:case 15:if(!ze&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&bs(r,t,l),o=o.next}while(o!==n)}Qt(e,t,r);break;case 1:if(!ze&&(nn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){le(r,t,s)}Qt(e,t,r);break;case 21:Qt(e,t,r);break;case 22:r.mode&1?(ze=(n=ze)||r.memoizedState!==null,Qt(e,t,r),ze=n):Qt(e,t,r);break;default:Qt(e,t,r)}}function ld(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new u1),t.forEach(function(n){var o=w1.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function it(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:je=s.stateNode,lt=!1;break e;case 3:je=s.stateNode.containerInfo,lt=!0;break e;case 4:je=s.stateNode.containerInfo,lt=!0;break e}s=s.return}if(je===null)throw Error(z(160));Fm(i,l,o),je=null,lt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){le(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dm(t,e),t=t.sibling}function Dm(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ht(e),n&4){try{ao(3,e,e.return),wa(3,e)}catch(k){le(e,e.return,k)}try{ao(5,e,e.return)}catch(k){le(e,e.return,k)}}break;case 1:it(t,e),ht(e),n&512&&r!==null&&nn(r,r.return);break;case 5:if(it(t,e),ht(e),n&512&&r!==null&&nn(r,r.return),e.flags&32){var o=e.stateNode;try{fo(o,"")}catch(k){le(e,e.return,k)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&sp(o,i),ql(s,l);var d=ql(s,i);for(l=0;l<u.length;l+=2){var h=u[l],f=u[l+1];h==="style"?pp(o,f):h==="dangerouslySetInnerHTML"?dp(o,f):h==="children"?fo(o,f):ec(o,h,f,d)}switch(s){case"input":Hl(o,i);break;case"textarea":cp(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?cn(o,!!i.multiple,w,!1):g!==!!i.multiple&&(i.defaultValue!=null?cn(o,!!i.multiple,i.defaultValue,!0):cn(o,!!i.multiple,i.multiple?[]:"",!1))}o[bo]=i}catch(k){le(e,e.return,k)}}break;case 6:if(it(t,e),ht(e),n&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){le(e,e.return,k)}}break;case 3:if(it(t,e),ht(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{go(t.containerInfo)}catch(k){le(e,e.return,k)}break;case 4:it(t,e),ht(e);break;case 13:it(t,e),ht(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(_c=ce())),n&4&&ld(e);break;case 22:if(h=r!==null&&r.memoizedState!==null,e.mode&1?(ze=(d=ze)||h,it(t,e),ze=d):it(t,e),ht(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(f=N=h;N!==null;){switch(g=N,w=g.child,g.tag){case 0:case 11:case 14:case 15:ao(4,g,g.return);break;case 1:nn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(k){le(n,r,k)}}break;case 5:nn(g,g.return);break;case 22:if(g.memoizedState!==null){cd(f);continue}}w!==null?(w.return=g,N=w):cd(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{o=f.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=fp("display",l))}catch(k){le(e,e.return,k)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(k){le(e,e.return,k)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),ht(e),n&4&&ld(e);break;case 21:break;default:it(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Mm(r)){var n=r;break e}r=r.return}throw Error(z(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(fo(o,""),n.flags&=-33);var i=ad(e);Ss(e,i,o);break;case 3:case 4:var l=n.stateNode.containerInfo,s=ad(e);ks(e,s,l);break;default:throw Error(z(161))}}catch(u){le(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f1(e,t,r){N=e,Bm(e)}function Bm(e,t,r){for(var n=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||ti;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ze;s=ti;var d=ze;if(ti=l,(ze=u)&&!d)for(N=o;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?ud(o):u!==null?(u.return=l,N=u):ud(o);for(;i!==null;)N=i,Bm(i),i=i.sibling;N=o,ti=s,ze=d}sd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):sd(e)}}function sd(e){for(;N!==null;){var t=N;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||wa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ze)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:at(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Gu(t,i,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Gu(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&go(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ze||t.flags&512&&js(t)}catch(g){le(t,t.return,g)}}if(t===e){N=null;break}if(r=t.sibling,r!==null){r.return=t.return,N=r;break}N=t.return}}function cd(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var r=t.sibling;if(r!==null){r.return=t.return,N=r;break}N=t.return}}function ud(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{wa(4,t)}catch(u){le(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(u){le(t,o,u)}}var i=t.return;try{js(t)}catch(u){le(t,i,u)}break;case 5:var l=t.return;try{js(t)}catch(u){le(t,l,u)}}}catch(u){le(t,t.return,u)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var p1=Math.ceil,Xi=Ft.ReactCurrentDispatcher,Lc=Ft.ReactCurrentOwner,tt=Ft.ReactCurrentBatchConfig,G=0,we=null,fe=null,ke=0,Ge=0,on=yr(0),he=0,Eo=null,_r=0,ba=0,Nc=0,lo=null,Oe=null,_c=0,bn=1/0,Et=null,Ji=!1,Cs=null,dr=null,ri=!1,nr=null,Zi=0,so=0,Ps=null,ki=-1,Si=0;function Ne(){return G&6?ce():ki!==-1?ki:ki=ce()}function fr(e){return e.mode&1?G&2&&ke!==0?ke&-ke:Kg.transition!==null?(Si===0&&(Si=Cp()),Si):(e=K,e!==0||(e=window.event,e=e===void 0?16:Np(e.type)),e):1}function dt(e,t,r,n){if(50<so)throw so=0,Ps=null,Error(z(185));_o(e,r,n),(!(G&2)||e!==we)&&(e===we&&(!(G&2)&&(ba|=r),he===4&&tr(e,ke)),De(e,n),r===1&&G===0&&!(t.mode&1)&&(bn=ce()+500,xa&&wr()))}function De(e,t){var r=e.callbackNode;K0(e,t);var n=Oi(e,e===we?ke:0);if(n===0)r!==null&&yu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&yu(r),t===1)e.tag===0?Yg(dd.bind(null,e)):Xp(dd.bind(null,e)),Wg(function(){!(G&6)&&wr()}),r=null;else{switch(Pp(n)){case 1:r=ic;break;case 4:r=kp;break;case 16:r=$i;break;case 536870912:r=Sp;break;default:r=$i}r=Ym(r,Um.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Um(e,t){if(ki=-1,Si=0,G&6)throw Error(z(327));var r=e.callbackNode;if(mn()&&e.callbackNode!==r)return null;var n=Oi(e,e===we?ke:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ea(e,n);else{t=n;var o=G;G|=2;var i=Vm();(we!==e||ke!==t)&&(Et=null,bn=ce()+500,zr(e,t));do try{g1();break}catch(s){Hm(e,s)}while(!0);vc(),Xi.current=i,G=o,fe!==null?t=0:(we=null,ke=0,t=he)}if(t!==0){if(t===2&&(o=Zl(e),o!==0&&(n=o,t=Es(e,o))),t===1)throw r=Eo,zr(e,0),tr(e,n),De(e,ce()),r;if(t===6)tr(e,n);else{if(o=e.current.alternate,!(n&30)&&!m1(o)&&(t=ea(e,n),t===2&&(i=Zl(e),i!==0&&(n=i,t=Es(e,i))),t===1))throw r=Eo,zr(e,0),tr(e,n),De(e,ce()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(z(345));case 2:kr(e,Oe,Et);break;case 3:if(tr(e,n),(n&130023424)===n&&(t=_c+500-ce(),10<t)){if(Oi(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ls(kr.bind(null,e,Oe,Et),t);break}kr(e,Oe,Et);break;case 4:if(tr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-ut(n);i=1<<l,l=t[l],l>o&&(o=l),n&=~i}if(n=o,n=ce()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*p1(n/1960))-n,10<n){e.timeoutHandle=ls(kr.bind(null,e,Oe,Et),n);break}kr(e,Oe,Et);break;case 5:kr(e,Oe,Et);break;default:throw Error(z(329))}}}return De(e,ce()),e.callbackNode===r?Um.bind(null,e):null}function Es(e,t){var r=lo;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=ea(e,t),e!==2&&(t=Oe,Oe=r,t!==null&&zs(t)),e}function zs(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function m1(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!pt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tr(e,t){for(t&=~Nc,t&=~ba,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ut(t),n=1<<r;e[r]=-1,t&=~n}}function dd(e){if(G&6)throw Error(z(327));mn();var t=Oi(e,0);if(!(t&1))return De(e,ce()),null;var r=ea(e,t);if(e.tag!==0&&r===2){var n=Zl(e);n!==0&&(t=n,r=Es(e,n))}if(r===1)throw r=Eo,zr(e,0),tr(e,t),De(e,ce()),r;if(r===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kr(e,Oe,Et),De(e,ce()),null}function Rc(e,t){var r=G;G|=1;try{return e(t)}finally{G=r,G===0&&(bn=ce()+500,xa&&wr())}}function Rr(e){nr!==null&&nr.tag===0&&!(G&6)&&mn();var t=G;G|=1;var r=tt.transition,n=K;try{if(tt.transition=null,K=1,e)return e()}finally{K=n,tt.transition=r,G=t,!(G&6)&&wr()}}function $c(){Ge=on.current,ee(on)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Vg(r)),fe!==null)for(r=fe.return;r!==null;){var n=r;switch(hc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Bi();break;case 3:yn(),ee(Me),ee(Te),Sc();break;case 5:kc(n);break;case 4:yn();break;case 13:ee(ne);break;case 19:ee(ne);break;case 10:yc(n.type._context);break;case 22:case 23:$c()}r=r.return}if(we=e,fe=e=pr(e.current,null),ke=Ge=t,he=0,Eo=null,Nc=ba=_r=0,Oe=lo=null,Cr!==null){for(t=0;t<Cr.length;t++)if(r=Cr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var l=i.next;i.next=o,n.next=l}r.pending=n}Cr=null}return e}function Hm(e,t){do{var r=fe;try{if(vc(),wi.current=Ki,Yi){for(var n=oe.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Yi=!1}if(Nr=0,xe=pe=oe=null,io=!1,So=0,Lc.current=null,r===null||r.return===null){he=1,Eo=t,fe=null;break}e:{var i=e,l=r.return,s=r,u=t;if(t=ke,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=s,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var g=h.alternate;g?(h.updateQueue=g.updateQueue,h.memoizedState=g.memoizedState,h.lanes=g.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Ju(l);if(w!==null){w.flags&=-257,Zu(w,l,s,i,t),w.mode&1&&Xu(i,d,t),t=w,u=d;var v=t.updateQueue;if(v===null){var k=new Set;k.add(u),t.updateQueue=k}else v.add(u);break e}else{if(!(t&1)){Xu(i,d,t),Oc();break e}u=Error(z(426))}}else if(te&&s.mode&1){var P=Ju(l);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Zu(P,l,s,i,t),gc(wn(u,s));break e}}i=u=wn(u,s),he!==4&&(he=2),lo===null?lo=[i]:lo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var x=Pm(i,u,t);Wu(i,x);break e;case 1:s=u;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(dr===null||!dr.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var b=Em(i,s,t);Wu(i,b);break e}}i=i.return}while(i!==null)}Gm(r)}catch(S){t=S,fe===r&&r!==null&&(fe=r=r.return);continue}break}while(!0)}function Vm(){var e=Xi.current;return Xi.current=Ki,e===null?Ki:e}function Oc(){(he===0||he===3||he===2)&&(he=4),we===null||!(_r&268435455)&&!(ba&268435455)||tr(we,ke)}function ea(e,t){var r=G;G|=2;var n=Vm();(we!==e||ke!==t)&&(Et=null,zr(e,t));do try{h1();break}catch(o){Hm(e,o)}while(!0);if(vc(),G=r,Xi.current=n,fe!==null)throw Error(z(261));return we=null,ke=0,he}function h1(){for(;fe!==null;)Wm(fe)}function g1(){for(;fe!==null&&!B0();)Wm(fe)}function Wm(e){var t=qm(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Gm(e):fe=t,Lc.current=null}function Gm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=c1(r,t),r!==null){r.flags&=32767,fe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,fe=null;return}}else if(r=s1(r,t,Ge),r!==null){fe=r;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);he===0&&(he=5)}function kr(e,t,r){var n=K,o=tt.transition;try{tt.transition=null,K=1,x1(e,t,r,n)}finally{tt.transition=o,K=n}return null}function x1(e,t,r,n){do mn();while(nr!==null);if(G&6)throw Error(z(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(X0(e,i),e===we&&(fe=we=null,ke=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ri||(ri=!0,Ym($i,function(){return mn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=tt.transition,tt.transition=null;var l=K;K=1;var s=G;G|=4,Lc.current=null,d1(e,r),Dm(r,e),Ag(is),Ai=!!os,is=os=null,e.current=r,f1(r),U0(),G=s,K=l,tt.transition=i}else e.current=r;if(ri&&(ri=!1,nr=e,Zi=o),i=e.pendingLanes,i===0&&(dr=null),W0(r.stateNode),De(e,ce()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Ji)throw Ji=!1,e=Cs,Cs=null,e;return Zi&1&&e.tag!==0&&mn(),i=e.pendingLanes,i&1?e===Ps?so++:(so=0,Ps=e):so=0,wr(),null}function mn(){if(nr!==null){var e=Pp(Zi),t=tt.transition,r=K;try{if(tt.transition=null,K=16>e?16:e,nr===null)var n=!1;else{if(e=nr,nr=null,Zi=0,G&6)throw Error(z(331));var o=G;for(G|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(N=d;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:ao(8,h,i)}var f=h.child;if(f!==null)f.return=h,N=f;else for(;N!==null;){h=N;var g=h.sibling,w=h.return;if(Am(h),h===d){N=null;break}if(g!==null){g.return=w,N=g;break}N=w}}}var v=i.alternate;if(v!==null){var k=v.child;if(k!==null){v.child=null;do{var P=k.sibling;k.sibling=null,k=P}while(k!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ao(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,N=x;break e}N=i.return}}var p=e.current;for(N=p;N!==null;){l=N;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,N=m;else e:for(l=p;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:wa(9,s)}}catch(S){le(s,s.return,S)}if(s===l){N=null;break e}var b=s.sibling;if(b!==null){b.return=s.return,N=b;break e}N=s.return}}if(G=o,wr(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(fa,e)}catch{}n=!0}return n}finally{K=r,tt.transition=t}}return!1}function fd(e,t,r){t=wn(r,t),t=Pm(e,t,1),e=ur(e,t,1),t=Ne(),e!==null&&(_o(e,1,t),De(e,t))}function le(e,t,r){if(e.tag===3)fd(e,e,r);else for(;t!==null;){if(t.tag===3){fd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(dr===null||!dr.has(n))){e=wn(r,e),e=Em(t,e,1),t=ur(t,e,1),e=Ne(),t!==null&&(_o(t,1,e),De(t,e));break}}t=t.return}}function v1(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&r,we===e&&(ke&r)===r&&(he===4||he===3&&(ke&130023424)===ke&&500>ce()-_c?zr(e,0):Nc|=r),De(e,t)}function Qm(e,t){t===0&&(e.mode&1?(t=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):t=1);var r=Ne();e=At(e,t),e!==null&&(_o(e,t,r),De(e,r))}function y1(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Qm(e,r)}function w1(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(z(314))}n!==null&&n.delete(t),Qm(e,r)}var qm;qm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Ae=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ae=!1,l1(e,t,r);Ae=!!(e.flags&131072)}else Ae=!1,te&&t.flags&1048576&&Jp(t,Vi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;ji(e,t),e=t.pendingProps;var o=gn(t,Te.current);pn(t,r),o=Pc(null,t,n,e,o,r);var i=Ec();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(n)?(i=!0,Ui(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,bc(t),o.updater=ya,t.stateNode=o,o._reactInternals=t,ms(t,n,e,r),t=xs(null,t,n,!0,i,r)):(t.tag=0,te&&i&&mc(t),Le(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(ji(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=j1(n),e=at(n,e),o){case 0:t=gs(null,t,n,e,r);break e;case 1:t=rd(null,t,n,e,r);break e;case 11:t=ed(null,t,n,e,r);break e;case 14:t=td(null,t,n,at(n.type,e),r);break e}throw Error(z(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),gs(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),rd(e,t,n,o,r);case 3:e:{if(Lm(t),e===null)throw Error(z(387));n=t.pendingProps,i=t.memoizedState,o=i.element,om(e,t),Qi(t,n,null,r);var l=t.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=wn(Error(z(423)),t),t=nd(e,t,n,r,o);break e}else if(n!==o){o=wn(Error(z(424)),t),t=nd(e,t,n,r,o);break e}else for(Qe=cr(t.stateNode.containerInfo.firstChild),qe=t,te=!0,ct=null,r=rm(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(xn(),n===o){t=Mt(e,t,r);break e}Le(e,t,n,r)}t=t.child}return t;case 5:return im(t),e===null&&ds(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,as(n,o)?l=null:i!==null&&as(n,i)&&(t.flags|=32),Tm(e,t),Le(e,t,l,r),t.child;case 6:return e===null&&ds(t),null;case 13:return Nm(e,t,r);case 4:return jc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=vn(t,null,n,r):Le(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),ed(e,t,n,o,r);case 7:return Le(e,t,t.pendingProps,r),t.child;case 8:return Le(e,t,t.pendingProps.children,r),t.child;case 12:return Le(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(Wi,n._currentValue),n._currentValue=l,i!==null)if(pt(i.value,l)){if(i.children===o.children&&!Me.current){t=Mt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(i.tag===1){u=_t(-1,r&-r),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}i.lanes|=r,u=i.alternate,u!==null&&(u.lanes|=r),fs(i.return,r,t),s.lanes|=r;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),fs(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Le(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,pn(t,r),o=rt(o),n=n(o),t.flags|=1,Le(e,t,n,r),t.child;case 14:return n=t.type,o=at(n,t.pendingProps),o=at(n.type,o),td(e,t,n,o,r);case 15:return zm(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),ji(e,t),t.tag=1,Fe(n)?(e=!0,Ui(t)):e=!1,pn(t,r),Cm(t,n,o),ms(t,n,o,r),xs(null,t,n,!0,e,r);case 19:return _m(e,t,r);case 22:return Im(e,t,r)}throw Error(z(156,t.tag))};function Ym(e,t){return jp(e,t)}function b1(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,r,n){return new b1(e,t,r,n)}function Ac(e){return e=e.prototype,!(!e||!e.isReactComponent)}function j1(e){if(typeof e=="function")return Ac(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rc)return 11;if(e===nc)return 14}return 2}function pr(e,t){var r=e.alternate;return r===null?(r=et(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ci(e,t,r,n,o,i){var l=2;if(n=e,typeof e=="function")Ac(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case qr:return Ir(r.children,o,i,t);case tc:l=8,o|=8;break;case Ml:return e=et(12,r,t,o|2),e.elementType=Ml,e.lanes=i,e;case Fl:return e=et(13,r,t,o),e.elementType=Fl,e.lanes=i,e;case Dl:return e=et(19,r,t,o),e.elementType=Dl,e.lanes=i,e;case ip:return ja(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case np:l=10;break e;case op:l=9;break e;case rc:l=11;break e;case nc:l=14;break e;case Jt:l=16,n=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=et(l,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Ir(e,t,r,n){return e=et(7,e,n,t),e.lanes=r,e}function ja(e,t,r,n){return e=et(22,e,n,t),e.elementType=ip,e.lanes=r,e.stateNode={isHidden:!1},e}function dl(e,t,r){return e=et(6,e,null,t),e.lanes=r,e}function fl(e,t,r){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function k1(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ga(0),this.expirationTimes=Ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Mc(e,t,r,n,o,i,l,s,u){return e=new k1(e,t,r,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(i),e}function S1(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Km(e){if(!e)return xr;e=e._reactInternals;e:{if(Ar(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var r=e.type;if(Fe(r))return Kp(e,r,t)}return t}function Xm(e,t,r,n,o,i,l,s,u){return e=Mc(r,n,!0,e,o,i,l,s,u),e.context=Km(null),r=e.current,n=Ne(),o=fr(r),i=_t(n,o),i.callback=t??null,ur(r,i,o),e.current.lanes=o,_o(e,o,n),De(e,n),e}function ka(e,t,r,n){var o=t.current,i=Ne(),l=fr(o);return r=Km(r),t.context===null?t.context=r:t.pendingContext=r,t=_t(i,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ur(o,t,l),e!==null&&(dt(e,o,l,i),yi(e,o,l)),l}function ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function pd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Fc(e,t){pd(e,t),(e=e.alternate)&&pd(e,t)}function C1(){return null}var Jm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dc(e){this._internalRoot=e}Sa.prototype.render=Dc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));ka(e,t,null,null)};Sa.prototype.unmount=Dc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rr(function(){ka(null,e,null,null)}),t[Ot]=null}};function Sa(e){this._internalRoot=e}Sa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ip();e={blockedOn:null,target:e,priority:t};for(var r=0;r<er.length&&t!==0&&t<er[r].priority;r++);er.splice(r,0,e),r===0&&Lp(e)}};function Bc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function md(){}function P1(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var d=ta(l);i.call(d)}}var l=Xm(t,n,e,0,null,!1,!1,"",md);return e._reactRootContainer=l,e[Ot]=l.current,yo(e.nodeType===8?e.parentNode:e),Rr(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var d=ta(u);s.call(d)}}var u=Mc(e,0,!1,null,null,!1,!1,"",md);return e._reactRootContainer=u,e[Ot]=u.current,yo(e.nodeType===8?e.parentNode:e),Rr(function(){ka(t,u,r,n)}),u}function Pa(e,t,r,n,o){var i=r._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=ta(l);s.call(u)}}ka(t,l,e,o)}else l=P1(r,t,e,o,n);return ta(l)}Ep=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Xn(t.pendingLanes);r!==0&&(ac(t,r|1),De(t,ce()),!(G&6)&&(bn=ce()+500,wr()))}break;case 13:Rr(function(){var n=At(e,1);if(n!==null){var o=Ne();dt(n,e,1,o)}}),Fc(e,1)}};lc=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var r=Ne();dt(t,e,134217728,r)}Fc(e,134217728)}};zp=function(e){if(e.tag===13){var t=fr(e),r=At(e,t);if(r!==null){var n=Ne();dt(r,e,t,n)}Fc(e,t)}};Ip=function(){return K};Tp=function(e,t){var r=K;try{return K=e,t()}finally{K=r}};Kl=function(e,t,r){switch(t){case"input":if(Hl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ga(n);if(!o)throw Error(z(90));lp(n),Hl(n,o)}}}break;case"textarea":cp(e,r);break;case"select":t=r.value,t!=null&&cn(e,!!r.multiple,t,!1)}};gp=Rc;xp=Rr;var E1={usingClientEntryPoint:!1,Events:[$o,Jr,ga,mp,hp,Rc]},Vn={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z1={bundleType:Vn.bundleType,version:Vn.version,rendererPackageName:Vn.rendererPackageName,rendererConfig:Vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wp(e),e===null?null:e.stateNode},findFiberByHostInstance:Vn.findFiberByHostInstance||C1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ni=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ni.isDisabled&&ni.supportsFiber)try{fa=ni.inject(z1),vt=ni}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E1;Ke.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bc(t))throw Error(z(200));return S1(e,t,null,r)};Ke.createRoot=function(e,t){if(!Bc(e))throw Error(z(299));var r=!1,n="",o=Jm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Mc(e,1,!1,null,null,r,!1,n,o),e[Ot]=t.current,yo(e.nodeType===8?e.parentNode:e),new Dc(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=wp(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return Rr(e)};Ke.hydrate=function(e,t,r){if(!Ca(t))throw Error(z(200));return Pa(null,e,t,!0,r)};Ke.hydrateRoot=function(e,t,r){if(!Bc(e))throw Error(z(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",l=Jm;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Xm(t,null,e,1,r??null,o,!1,i,l),e[Ot]=t.current,yo(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Sa(t)};Ke.render=function(e,t,r){if(!Ca(t))throw Error(z(200));return Pa(null,e,t,!1,r)};Ke.unmountComponentAtNode=function(e){if(!Ca(e))throw Error(z(40));return e._reactRootContainer?(Rr(function(){Pa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Ke.unstable_batchedUpdates=Rc;Ke.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ca(r))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Pa(e,t,r,!1,n)};Ke.version="18.3.1-next-f1338f8080-20240426";function Zm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zm)}catch(e){console.error(e)}}Zm(),Zf.exports=Ke;var I1=Zf.exports,hd=I1;Ol.createRoot=hd.createRoot,Ol.hydrateRoot=hd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},zo.apply(this,arguments)}var or;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(or||(or={}));const gd="popstate";function T1(e){e===void 0&&(e={});function t(n,o){let{pathname:i,search:l,hash:s}=n.location;return Is("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:ra(o)}return N1(t,r,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Uc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function L1(){return Math.random().toString(36).substr(2,8)}function xd(e,t){return{usr:e.state,key:e.key,idx:t}}function Is(e,t,r,n){return r===void 0&&(r=null),zo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Nn(t):t,{state:r,key:t&&t.key||n||L1()})}function ra(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Nn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function N1(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,l=o.history,s=or.Pop,u=null,d=h();d==null&&(d=0,l.replaceState(zo({},l.state,{idx:d}),""));function h(){return(l.state||{idx:null}).idx}function f(){s=or.Pop;let P=h(),x=P==null?null:P-d;d=P,u&&u({action:s,location:k.location,delta:x})}function g(P,x){s=or.Push;let p=Is(k.location,P,x);d=h()+1;let m=xd(p,d),b=k.createHref(p);try{l.pushState(m,"",b)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;o.location.assign(b)}i&&u&&u({action:s,location:k.location,delta:1})}function w(P,x){s=or.Replace;let p=Is(k.location,P,x);d=h();let m=xd(p,d),b=k.createHref(p);l.replaceState(m,"",b),i&&u&&u({action:s,location:k.location,delta:0})}function v(P){let x=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof P=="string"?P:ra(P);return p=p.replace(/ $/,"%20"),ie(x,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,x)}let k={get action(){return s},get location(){return e(o,l)},listen(P){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(gd,f),u=P,()=>{o.removeEventListener(gd,f),u=null}},createHref(P){return t(o,P)},createURL:v,encodeLocation(P){let x=v(P);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:g,replace:w,go(P){return l.go(P)}};return k}var vd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vd||(vd={}));function _1(e,t,r){return r===void 0&&(r="/"),R1(e,t,r)}function R1(e,t,r,n){let o=typeof t=="string"?Nn(t):t,i=jn(o.pathname||"/",r);if(i==null)return null;let l=eh(e);$1(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let d=G1(i);s=V1(l[u],d)}return s}function eh(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,l,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(ie(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let d=mr([n,u.relativePath]),h=r.concat(u);i.children&&i.children.length>0&&(ie(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),eh(i.children,t,h,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:U1(d,i.index),routesMeta:h})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let u of th(i.path))o(i,l,u)}),t}function th(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let l=th(n.join("/")),s=[];return s.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function $1(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:H1(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const O1=/^:[\w-]+$/,A1=3,M1=2,F1=1,D1=10,B1=-2,yd=e=>e==="*";function U1(e,t){let r=e.split("/"),n=r.length;return r.some(yd)&&(n+=B1),t&&(n+=M1),r.filter(o=>!yd(o)).reduce((o,i)=>o+(O1.test(i)?A1:i===""?F1:D1),n)}function H1(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function V1(e,t,r){let{routesMeta:n}=e,o={},i="/",l=[];for(let s=0;s<n.length;++s){let u=n[s],d=s===n.length-1,h=i==="/"?t:t.slice(i.length)||"/",f=Ts({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},h),g=u.route;if(!f)return null;Object.assign(o,f.params),l.push({params:o,pathname:mr([i,f.pathname]),pathnameBase:X1(mr([i,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(i=mr([i,f.pathnameBase]))}return l}function Ts(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=W1(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((d,h,f)=>{let{paramName:g,isOptional:w}=h;if(g==="*"){let k=s[f]||"";l=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const v=s[f];return w&&!v?d[g]=void 0:d[g]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:e}}function W1(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Uc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(n.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function G1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Uc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const Q1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,q1=e=>Q1.test(e);function Y1(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Nn(e):e,i;if(r)if(q1(r))i=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),Uc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?i=wd(r.substring(1),"/"):i=wd(r,t)}else i=t;return{pathname:i,search:J1(n),hash:Z1(o)}}function wd(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function pl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function K1(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Hc(e,t){let r=K1(e);return t?r.map((n,o)=>o===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Vc(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=Nn(e):(o=zo({},e),ie(!o.pathname||!o.pathname.includes("?"),pl("?","pathname","search",o)),ie(!o.pathname||!o.pathname.includes("#"),pl("#","pathname","hash",o)),ie(!o.search||!o.search.includes("#"),pl("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=r;else{let f=t.length-1;if(!n&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),f-=1;o.pathname=g.join("/")}s=f>=0?t[f]:"/"}let u=Y1(o,s),d=l&&l!=="/"&&l.endsWith("/"),h=(i||l===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(d||h)&&(u.pathname+="/"),u}const mr=e=>e.join("/").replace(/\/\/+/g,"/"),X1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),J1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Z1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ex(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const rh=["post","put","patch","delete"];new Set(rh);const tx=["get",...rh];new Set(tx);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Io.apply(this,arguments)}const Ea=y.createContext(null),nh=y.createContext(null),Dt=y.createContext(null),za=y.createContext(null),Bt=y.createContext({outlet:null,matches:[],isDataRoute:!1}),oh=y.createContext(null);function rx(e,t){let{relative:r}=t===void 0?{}:t;_n()||ie(!1);let{basename:n,navigator:o}=y.useContext(Dt),{hash:i,pathname:l,search:s}=Ia(e,{relative:r}),u=l;return n!=="/"&&(u=l==="/"?n:mr([n,l])),o.createHref({pathname:u,search:s,hash:i})}function _n(){return y.useContext(za)!=null}function Ut(){return _n()||ie(!1),y.useContext(za).location}function ih(e){y.useContext(Dt).static||y.useLayoutEffect(e)}function Ht(){let{isDataRoute:e}=y.useContext(Bt);return e?hx():nx()}function nx(){_n()||ie(!1);let e=y.useContext(Ea),{basename:t,future:r,navigator:n}=y.useContext(Dt),{matches:o}=y.useContext(Bt),{pathname:i}=Ut(),l=JSON.stringify(Hc(o,r.v7_relativeSplatPath)),s=y.useRef(!1);return ih(()=>{s.current=!0}),y.useCallback(function(d,h){if(h===void 0&&(h={}),!s.current)return;if(typeof d=="number"){n.go(d);return}let f=Vc(d,JSON.parse(l),i,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mr([t,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[t,n,l,i,e])}function Wc(){let{matches:e}=y.useContext(Bt),t=e[e.length-1];return t?t.params:{}}function Ia(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=y.useContext(Dt),{matches:o}=y.useContext(Bt),{pathname:i}=Ut(),l=JSON.stringify(Hc(o,n.v7_relativeSplatPath));return y.useMemo(()=>Vc(e,JSON.parse(l),i,r==="path"),[e,l,i,r])}function ox(e,t){return ix(e,t)}function ix(e,t,r,n){_n()||ie(!1);let{navigator:o}=y.useContext(Dt),{matches:i}=y.useContext(Bt),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let d=Ut(),h;if(t){var f;let P=typeof t=="string"?Nn(t):t;u==="/"||(f=P.pathname)!=null&&f.startsWith(u)||ie(!1),h=P}else h=d;let g=h.pathname||"/",w=g;if(u!=="/"){let P=u.replace(/^\//,"").split("/");w="/"+g.replace(/^\//,"").split("/").slice(P.length).join("/")}let v=_1(e,{pathname:w}),k=ux(v&&v.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:mr([u,o.encodeLocation?o.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:mr([u,o.encodeLocation?o.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),i,r,n);return t&&k?y.createElement(za.Provider,{value:{location:Io({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:or.Pop}},k):k}function ax(){let e=mx(),t=ex(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:o},r):null,null)}const lx=y.createElement(ax,null);class sx extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?y.createElement(Bt.Provider,{value:this.props.routeContext},y.createElement(oh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cx(e){let{routeContext:t,match:r,children:n}=e,o=y.useContext(Ea);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(Bt.Provider,{value:t},n)}function ux(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,s=(o=r)==null?void 0:o.errors;if(s!=null){let h=l.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);h>=0||ie(!1),l=l.slice(0,Math.min(l.length,h+1))}let u=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let h=0;h<l.length;h++){let f=l[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=h),f.route.id){let{loaderData:g,errors:w}=r,v=f.route.loader&&g[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||v){u=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((h,f,g)=>{let w,v=!1,k=null,P=null;r&&(w=s&&f.route.id?s[f.route.id]:void 0,k=f.route.errorElement||lx,u&&(d<0&&g===0?(gx("route-fallback"),v=!0,P=null):d===g&&(v=!0,P=f.route.hydrateFallbackElement||null)));let x=t.concat(l.slice(0,g+1)),p=()=>{let m;return w?m=k:v?m=P:f.route.Component?m=y.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=h,y.createElement(cx,{match:f,routeContext:{outlet:h,matches:x,isDataRoute:r!=null},children:m})};return r&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?y.createElement(sx,{location:r.location,revalidation:r.revalidation,component:k,error:w,children:p(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):p()},null)}var ah=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ah||{}),lh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(lh||{});function dx(e){let t=y.useContext(Ea);return t||ie(!1),t}function fx(e){let t=y.useContext(nh);return t||ie(!1),t}function px(e){let t=y.useContext(Bt);return t||ie(!1),t}function sh(e){let t=px(),r=t.matches[t.matches.length-1];return r.route.id||ie(!1),r.route.id}function mx(){var e;let t=y.useContext(oh),r=fx(),n=sh();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function hx(){let{router:e}=dx(ah.UseNavigateStable),t=sh(lh.UseNavigateStable),r=y.useRef(!1);return ih(()=>{r.current=!0}),y.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Io({fromRouteId:t},i)))},[e,t])}const bd={};function gx(e,t,r){bd[e]||(bd[e]=!0)}function xx(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Gc(e){let{to:t,replace:r,state:n,relative:o}=e;_n()||ie(!1);let{future:i,static:l}=y.useContext(Dt),{matches:s}=y.useContext(Bt),{pathname:u}=Ut(),d=Ht(),h=Vc(t,Hc(s,i.v7_relativeSplatPath),u,o==="path"),f=JSON.stringify(h);return y.useEffect(()=>d(JSON.parse(f),{replace:r,state:n,relative:o}),[d,f,o,r,n]),null}function W(e){ie(!1)}function vx(e){let{basename:t="/",children:r=null,location:n,navigationType:o=or.Pop,navigator:i,static:l=!1,future:s}=e;_n()&&ie(!1);let u=t.replace(/^\/*/,"/"),d=y.useMemo(()=>({basename:u,navigator:i,static:l,future:Io({v7_relativeSplatPath:!1},s)}),[u,s,i,l]);typeof n=="string"&&(n=Nn(n));let{pathname:h="/",search:f="",hash:g="",state:w=null,key:v="default"}=n,k=y.useMemo(()=>{let P=jn(h,u);return P==null?null:{location:{pathname:P,search:f,hash:g,state:w,key:v},navigationType:o}},[u,h,f,g,w,v,o]);return k==null?null:y.createElement(Dt.Provider,{value:d},y.createElement(za.Provider,{children:r,value:k}))}function yx(e){let{children:t,location:r}=e;return ox(Ls(t),r)}new Promise(()=>{});function Ls(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(n,o)=>{if(!y.isValidElement(n))return;let i=[...t,o];if(n.type===y.Fragment){r.push.apply(r,Ls(n.props.children,i));return}n.type!==W&&ie(!1),!n.props.index||!n.props.children||ie(!1);let l={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Ls(n.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},na.apply(this,arguments)}function ch(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function wx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bx(e,t){return e.button===0&&(!t||t==="_self")&&!wx(e)}function Ns(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function jx(e,t){let r=Ns(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(i=>{r.append(o,i)})}),r}const kx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Sx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Cx="6";try{window.__reactRouterVersion=Cx}catch{}const Px=y.createContext({isTransitioning:!1}),Ex="startTransition",jd=v0[Ex];function zx(e){let{basename:t,children:r,future:n,window:o}=e,i=y.useRef();i.current==null&&(i.current=T1({window:o,v5Compat:!0}));let l=i.current,[s,u]=y.useState({action:l.action,location:l.location}),{v7_startTransition:d}=n||{},h=y.useCallback(f=>{d&&jd?jd(()=>u(f)):u(f)},[u,d]);return y.useLayoutEffect(()=>l.listen(h),[l,h]),y.useEffect(()=>xx(n),[n]),y.createElement(vx,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:l,future:n})}const Ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,se=y.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:l,state:s,target:u,to:d,preventScrollReset:h,viewTransition:f}=t,g=ch(t,kx),{basename:w}=y.useContext(Dt),v,k=!1;if(typeof d=="string"&&Tx.test(d)&&(v=d,Ix))try{let m=new URL(window.location.href),b=d.startsWith("//")?new URL(m.protocol+d):new URL(d),S=jn(b.pathname,w);b.origin===m.origin&&S!=null?d=S+b.search+b.hash:k=!0}catch{}let P=rx(d,{relative:o}),x=Nx(d,{replace:l,state:s,target:u,preventScrollReset:h,relative:o,viewTransition:f});function p(m){n&&n(m),m.defaultPrevented||x(m)}return y.createElement("a",na({},g,{href:v||P,onClick:k||i?n:p,ref:r,target:u}))}),Wn=y.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:o=!1,className:i="",end:l=!1,style:s,to:u,viewTransition:d,children:h}=t,f=ch(t,Sx),g=Ia(u,{relative:f.relative}),w=Ut(),v=y.useContext(nh),{navigator:k,basename:P}=y.useContext(Dt),x=v!=null&&_x(g)&&d===!0,p=k.encodeLocation?k.encodeLocation(g).pathname:g.pathname,m=w.pathname,b=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(m=m.toLowerCase(),b=b?b.toLowerCase():null,p=p.toLowerCase()),b&&P&&(b=jn(b,P)||b);const S=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let C=m===p||!l&&m.startsWith(p)&&m.charAt(S)==="/",j=b!=null&&(b===p||!l&&b.startsWith(p)&&b.charAt(p.length)==="/"),I={isActive:C,isPending:j,isTransitioning:x},_=C?n:void 0,E;typeof i=="function"?E=i(I):E=[i,C?"active":null,j?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let M=typeof s=="function"?s(I):s;return y.createElement(se,na({},f,{"aria-current":_,className:E,ref:r,style:M,to:u,viewTransition:d}),typeof h=="function"?h(I):h)});var _s;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_s||(_s={}));var kd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kd||(kd={}));function Lx(e){let t=y.useContext(Ea);return t||ie(!1),t}function Nx(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,u=Ht(),d=Ut(),h=Ia(e,{relative:l});return y.useCallback(f=>{if(bx(f,r)){f.preventDefault();let g=n!==void 0?n:ra(d)===ra(h);u(e,{replace:g,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[d,u,h,n,o,r,e,i,l,s])}function Ta(e){let t=y.useRef(Ns(e)),r=y.useRef(!1),n=Ut(),o=y.useMemo(()=>jx(n.search,r.current?null:t.current),[n.search]),i=Ht(),l=y.useCallback((s,u)=>{const d=Ns(typeof s=="function"?s(o):s);r.current=!0,i("?"+d,u)},[i,o]);return[o,l]}function _x(e,t){t===void 0&&(t={});let r=y.useContext(Px);r==null&&ie(!1);let{basename:n}=Lx(_s.useViewTransitionState),o=Ia(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=jn(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=jn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Ts(o.pathname,l)!=null||Ts(o.pathname,i)!=null}const uh="artilheiro-cart",Sd=0;function Rx(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(uh);return e?JSON.parse(e):[]}catch{return[]}}function qt(e,t){return`${e}-${t}`}const $x=Rx();function Ox(e,t){switch(t.type){case"LOAD":return Array.isArray(t.payload)?t.payload:[];case"ADD":{const{productId:r,name:n,image:o,size:i,quantity:l,unitPrice:s}=t.payload,u=qt(r,i);return e.find(h=>qt(h.productId,h.size)===u)?e.map(h=>qt(h.productId,h.size)===u?{...h,quantity:h.quantity+l}:h):[...e,{productId:r,name:n,image:o,size:i,quantity:l,unitPrice:s}]}case"UPDATE_QUANTITY":{const{productId:r,size:n,quantity:o}=t.payload,i=qt(r,n);return o<1?e.filter(l=>qt(l.productId,l.size)!==i):e.map(l=>qt(l.productId,l.size)===i?{...l,quantity:o}:l)}case"REMOVE":{const{productId:r,size:n}=t.payload,o=qt(r,n);return e.filter(i=>qt(i.productId,i.size)!==o)}case"CLEAR":return[];default:return e}}const dh=y.createContext(null);function Ax({children:e}){const[t,r]=y.useReducer(Ox,$x);y.useEffect(()=>{try{localStorage.setItem(uh,JSON.stringify(t))}catch{}},[t]);const n=y.useCallback(g=>{r({type:"ADD",payload:{productId:g.productId,name:g.name,image:g.image??"",size:g.size,quantity:Math.max(1,Number(g.quantity)||1),unitPrice:Number(g.unitPrice)||0}})},[]),o=y.useCallback((g,w,v)=>{r({type:"UPDATE_QUANTITY",payload:{productId:g,size:w,quantity:v}})},[]),i=y.useCallback((g,w)=>{r({type:"REMOVE",payload:{productId:g,size:w}})},[]),l=y.useCallback(()=>{r({type:"CLEAR"})},[]),s=t.reduce((g,w)=>g+w.quantity,0),u=t.reduce((g,w)=>g+w.unitPrice*w.quantity,0),d=y.useCallback(()=>u,[u]),h=y.useCallback(()=>u+Sd,[u]),f={items:t,itemCount:s,subtotal:u,getSubtotal:d,getTotal:h,addItem:n,updateQuantity:o,removeItem:i,clearCart:l,freightPlaceholder:Sd};return a.jsx(dh.Provider,{value:f,children:e})}function La(){const e=y.useContext(dh);if(!e)throw new Error("useCart must be used within CartProvider");return e}const fh=y.createContext(null);let Mx=0;function Fx({children:e}){const[t,r]=y.useState([]),n=y.useCallback((d,h="error",f=5e3)=>{const g=++Mx;return r(w=>[...w,{id:g,message:d,type:h}]),f>0&&setTimeout(()=>{o(g)},f),g},[]),o=y.useCallback(d=>{r(h=>h.filter(f=>f.id!==d))},[]),i=y.useCallback(d=>n(d,"error"),[n]),l=y.useCallback(d=>n(d,"success"),[n]),s=y.useCallback(d=>n(d,"info"),[n]),u=y.useMemo(()=>({toasts:t,addToast:n,removeToast:o,showError:i,showSuccess:l,showInfo:s}),[t,n,o,i,l,s]);return a.jsx(fh.Provider,{value:u,children:e})}function Ao(){const e=y.useContext(fh);if(!e)throw new Error("useToast must be used within ToastProvider");return e}var Ie=function(){return Ie=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Ie.apply(this,arguments)};function kn(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var Z="-ms-",co="-moz-",Q="-webkit-",ph="comm",Na="rule",Qc="decl",Dx="@import",Bx="@namespace",mh="@keyframes",Ux="@layer",hh=Math.abs,qc=String.fromCharCode,Rs=Object.assign;function Hx(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function gh(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,r){return e.replace(t,r)}function Pi(e,t,r){return e.indexOf(t,r)}function me(e,t){return e.charCodeAt(t)|0}function $r(e,t,r){return e.slice(t,r)}function st(e){return e.length}function xh(e){return e.length}function Zn(e,t){return t.push(e),e}function Vx(e,t){return e.map(t).join("")}function Cd(e,t){return e.filter(function(r){return!zt(r,t)})}var _a=1,Sn=1,vh=0,ot=0,de=0,Rn="";function Ra(e,t,r,n,o,i,l,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:_a,column:Sn,length:l,return:"",siblings:s}}function Xt(e,t){return Rs(Ra("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ur(e){for(;e.root;)e=Xt(e.root,{children:[e]});Zn(e,e.siblings)}function Wx(){return de}function Gx(){return de=ot>0?me(Rn,--ot):0,Sn--,de===10&&(Sn=1,_a--),de}function ft(){return de=ot<vh?me(Rn,ot++):0,Sn++,de===10&&(Sn=1,_a++),de}function ir(){return me(Rn,ot)}function Ei(){return ot}function $a(e,t){return $r(Rn,e,t)}function To(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Qx(e){return _a=Sn=1,vh=st(Rn=e),ot=0,[]}function qx(e){return Rn="",e}function ml(e){return gh($a(ot-1,$s(e===91?e+2:e===40?e+1:e)))}function Yx(e){for(;(de=ir())&&de<33;)ft();return To(e)>2||To(de)>3?"":" "}function Kx(e,t){for(;--t&&ft()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return $a(e,Ei()+(t<6&&ir()==32&&ft()==32))}function $s(e){for(;ft();)switch(de){case e:return ot;case 34:case 39:e!==34&&e!==39&&$s(de);break;case 40:e===41&&$s(e);break;case 92:ft();break}return ot}function Xx(e,t){for(;ft()&&e+de!==57;)if(e+de===84&&ir()===47)break;return"/*"+$a(t,ot-1)+"*"+qc(e===47?e:ft())}function Jx(e){for(;!To(ir());)ft();return $a(e,ot)}function Zx(e){return qx(zi("",null,null,null,[""],e=Qx(e),0,[0],e))}function zi(e,t,r,n,o,i,l,s,u){for(var d=0,h=0,f=l,g=0,w=0,v=0,k=1,P=1,x=1,p=0,m="",b=o,S=i,C=n,j=m;P;)switch(v=p,p=ft()){case 40:if(v!=108&&me(j,f-1)==58){Pi(j+=B(ml(p),"&","&\f"),"&\f",hh(d?s[d-1]:0))!=-1&&(x=-1);break}case 34:case 39:case 91:j+=ml(p);break;case 9:case 10:case 13:case 32:j+=Yx(v);break;case 92:j+=Kx(Ei()-1,7);continue;case 47:switch(ir()){case 42:case 47:Zn(ev(Xx(ft(),Ei()),t,r,u),u),(To(v||1)==5||To(ir()||1)==5)&&st(j)&&$r(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*k:s[d++]=st(j)*x;case 125*k:case 59:case 0:switch(p){case 0:case 125:P=0;case 59+h:x==-1&&(j=B(j,/\f/g,"")),w>0&&(st(j)-f||k===0&&v===47)&&Zn(w>32?Ed(j+";",n,r,f-1,u):Ed(B(j," ","")+";",n,r,f-2,u),u);break;case 59:j+=";";default:if(Zn(C=Pd(j,t,r,d,h,o,s,m,b=[],S=[],f,i),i),p===123)if(h===0)zi(j,t,C,C,b,i,f,s,S);else{switch(g){case 99:if(me(j,3)===110)break;case 108:if(me(j,2)===97)break;default:h=0;case 100:case 109:case 115:}h?zi(e,C,C,n&&Zn(Pd(e,C,C,0,0,o,s,m,o,b=[],f,S),S),o,S,f,s,n?b:S):zi(j,C,C,C,[""],S,0,s,S)}}d=h=w=0,k=x=1,m=j="",f=l;break;case 58:f=1+st(j),w=v;default:if(k<1){if(p==123)--k;else if(p==125&&k++==0&&Gx()==125)continue}switch(j+=qc(p),p*k){case 38:x=h>0?1:(j+="\f",-1);break;case 44:s[d++]=(st(j)-1)*x,x=1;break;case 64:ir()===45&&(j+=ml(ft())),g=ir(),h=f=st(m=j+=Jx(Ei())),p++;break;case 45:v===45&&st(j)==2&&(k=0)}}return i}function Pd(e,t,r,n,o,i,l,s,u,d,h,f){for(var g=o-1,w=o===0?i:[""],v=xh(w),k=0,P=0,x=0;k<n;++k)for(var p=0,m=$r(e,g+1,g=hh(P=l[k])),b=e;p<v;++p)(b=gh(P>0?w[p]+" "+m:B(m,/&\f/g,w[p])))&&(u[x++]=b);return Ra(e,t,r,o===0?Na:s,u,d,h,f)}function ev(e,t,r,n){return Ra(e,t,r,ph,qc(Wx()),$r(e,2,-2),0,n)}function Ed(e,t,r,n,o){return Ra(e,t,r,Qc,$r(e,0,n),$r(e,n+1,-1),n,o)}function yh(e,t,r){switch(Hx(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Q+e+e;case 4855:return Q+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return co+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+co+e+Z+e+e;case 5936:switch(me(e,t+11)){case 114:return Q+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+Z+e+e;case 6165:return Q+e+Z+"flex-"+e+e;case 5187:return Q+e+B(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return Q+e+Z+"flex-item-"+B(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":Z+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return Q+e+Z+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+Z+B(e,"shrink","negative")+e;case 5292:return Q+e+Z+B(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+B(e,"-grow","")+Q+e+Z+B(e,"grow","positive")+e;case 4554:return Q+B(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+Z+"flex-pack:$3"),/space-between/,"justify")+Q+e+e;case 4200:if(!zt(e,/flex-|baseline/))return Z+"grid-column-align"+$r(e,t)+e;break;case 2592:case 3360:return Z+B(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,zt(n.props,/grid-\w+-end/)})?~Pi(e+(r=r[t].value),"span",0)?e:Z+B(e,"-start","")+e+Z+"grid-row-span:"+(~Pi(r,"span",0)?zt(r,/\d+/):+zt(r,/\d+/)-+zt(e,/\d+/))+";":Z+B(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return zt(n.props,/grid-\w+-start/)})?e:Z+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+co+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pi(e,"stretch",0)?yh(B(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,l,s,u,d){return Z+o+":"+i+d+(l?Z+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(me(e,t+6)===121)return B(e,":",":"+Q)+e;break;case 6444:switch(me(e,me(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(me(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+Z+"$2box$3")+e;case 100:return B(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function oa(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function tv(e,t,r,n){switch(e.type){case Ux:if(e.children.length)break;case Dx:case Bx:case Qc:return e.return=e.return||e.value;case ph:return"";case mh:return e.return=e.value+"{"+oa(e.children,n)+"}";case Na:if(!st(e.value=e.props.join(",")))return""}return st(r=oa(e.children,n))?e.return=e.value+"{"+r+"}":""}function rv(e){var t=xh(e);return function(r,n,o,i){for(var l="",s=0;s<t;s++)l+=e[s](r,n,o,i)||"";return l}}function nv(e){return function(t){t.root||(t=t.return)&&e(t)}}function ov(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Qc:e.return=yh(e.value,e.length,r);return;case mh:return oa([Xt(e,{value:B(e.value,"@","@"+Q)})],n);case Na:if(e.length)return Vx(r=e.props,function(o){switch(zt(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ur(Xt(e,{props:[B(o,/:(read-\w+)/,":"+co+"$1")]})),Ur(Xt(e,{props:[o]})),Rs(e,{props:Cd(r,n)});break;case"::placeholder":Ur(Xt(e,{props:[B(o,/:(plac\w+)/,":"+Q+"input-$1")]})),Ur(Xt(e,{props:[B(o,/:(plac\w+)/,":"+co+"$1")]})),Ur(Xt(e,{props:[B(o,/:(plac\w+)/,Z+"input-$1")]})),Ur(Xt(e,{props:[o]})),Rs(e,{props:Cd(r,n)});break}return""})}}var iv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},We={},Cn=typeof process<"u"&&We!==void 0&&(We.REACT_APP_SC_ATTR||We.SC_ATTR)||"data-styled",wh="active",bh="data-styled-version",Oa="6.3.8",Yc=`/*!sc*/
`,ia=typeof window<"u"&&typeof document<"u",Rt=re.createContext===void 0,av=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==""?We.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&We.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.SC_DISABLE_SPEEDY!==void 0&&We.SC_DISABLE_SPEEDY!==""&&We.SC_DISABLE_SPEEDY!=="false"&&We.SC_DISABLE_SPEEDY),lv={},Aa=Object.freeze([]),Pn=Object.freeze({});function jh(e,t,r){return r===void 0&&(r=Pn),e.theme!==r.theme&&e.theme||t||r.theme}var kh=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),sv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cv=/(^-|-$)/g;function zd(e){return e.replace(sv,"-").replace(cv,"")}var uv=/(a)(d)/gi,Id=function(e){return String.fromCharCode(e+(e>25?39:97))};function Os(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=Id(t%52)+r;return(Id(t%52)+r).replace(uv,"$1-$2")}var hl,an=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Sh=function(e){return an(5381,e)};function Kc(e){return Os(Sh(e)>>>0)}function dv(e){return e.displayName||e.name||"Component"}function gl(e){return typeof e=="string"&&!0}var Ch=typeof Symbol=="function"&&Symbol.for,Ph=Ch?Symbol.for("react.memo"):60115,fv=Ch?Symbol.for("react.forward_ref"):60112,pv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},mv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Eh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},hv=((hl={})[fv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hl[Ph]=Eh,hl);function Td(e){return("type"in(t=e)&&t.type.$$typeof)===Ph?Eh:"$$typeof"in e?hv[e.$$typeof]:pv;var t}var gv=Object.defineProperty,xv=Object.getOwnPropertyNames,Ld=Object.getOwnPropertySymbols,vv=Object.getOwnPropertyDescriptor,yv=Object.getPrototypeOf,Nd=Object.prototype;function zh(e,t,r){if(typeof t!="string"){if(Nd){var n=yv(t);n&&n!==Nd&&zh(e,n,r)}var o=xv(t);Ld&&(o=o.concat(Ld(t)));for(var i=Td(e),l=Td(t),s=0;s<o.length;++s){var u=o[s];if(!(u in mv||r&&r[u]||l&&u in l||i&&u in i)){var d=vv(t,u);try{gv(e,u,d)}catch{}}}}return e}function En(e){return typeof e=="function"}function Xc(e){return typeof e=="object"&&"styledComponentId"in e}function Er(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function aa(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Lo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function As(e,t,r){if(r===void 0&&(r=!1),!r&&!Lo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=As(e[n],t[n]);else if(Lo(t))for(var n in t)e[n]=As(e[n],t[n]);return e}function Jc(e,t){Object.defineProperty(e,"toString",{value:t})}function Mo(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var wv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Mo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,r.length);l<u;l++)this.tag.insertRule(s,r[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,l=o;l<i;l++)r+="".concat(this.tag.getRule(l)).concat(Yc);return r},e}(),Ii=new Map,la=new Map,Ti=1,ln=function(e){if(Ii.has(e))return Ii.get(e);for(;la.has(Ti);)Ti++;var t=Ti++;return Ii.set(e,t),la.set(t,e),t},bv=function(e,t){Ti=t+1,Ii.set(e,t),la.set(t,e)},jv="style[".concat(Cn,"][").concat(bh,'="').concat(Oa,'"]'),kv=new RegExp("^".concat(Cn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Sv=function(e,t,r){for(var n,o=r.split(","),i=0,l=o.length;i<l;i++)(n=o[i])&&e.registerName(t,n)},Cv=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Yc),o=[],i=0,l=n.length;i<l;i++){var s=n[i].trim();if(s){var u=s.match(kv);if(u){var d=0|parseInt(u[1],10),h=u[2];d!==0&&(bv(h,d),Sv(e,h,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}}},_d=function(e){for(var t=document.querySelectorAll(jv),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Cn)!==wh&&(Cv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Pv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ih=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){var u=Array.from(s.querySelectorAll("style[".concat(Cn,"]")));return u[u.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Cn,wh),n.setAttribute(bh,Oa);var l=Pv();return l&&n.setAttribute("nonce",l),r.insertBefore(n,i),n},Ev=function(){function e(t){this.element=Ih(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var l=n[o];if(l.ownerNode===r)return l}throw Mo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),zv=function(){function e(t){this.element=Ih(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Iv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Rd=ia,Tv={isServer:!ia,useCSSOMInjection:!av},sa=function(){function e(t,r,n){t===void 0&&(t=Pn),r===void 0&&(r={});var o=this;this.options=Ie(Ie({},Tv),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&ia&&Rd&&(Rd=!1,_d(this)),Jc(this,function(){return function(i){for(var l=i.getTag(),s=l.length,u="",d=function(f){var g=function(x){return la.get(x)}(f);if(g===void 0)return"continue";var w=i.names.get(g),v=l.getGroup(f);if(w===void 0||!w.size||v.length===0)return"continue";var k="".concat(Cn,".g").concat(f,'[id="').concat(g,'"]'),P="";w!==void 0&&w.forEach(function(x){x.length>0&&(P+="".concat(x,","))}),u+="".concat(v).concat(k,'{content:"').concat(P,'"}').concat(Yc)},h=0;h<s;h++)d(h);return u}(o)})}return e.registerId=function(t){return ln(t)},e.prototype.rehydrate=function(){!this.server&&ia&&_d(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Ie(Ie({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new Iv(o):n?new Ev(o):new zv(o)}(this.options),new wv(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ln(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ln(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ln(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Lv=/&/g,sn=47;function $d(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,r=0,n=0,o=!1,i=0;i<t;i++){var l=e.charCodeAt(i);if(n!==0||o||l!==sn||e.charCodeAt(i+1)!==42)if(o)l===42&&e.charCodeAt(i+1)===sn&&(o=!1,i++);else if(l!==34&&l!==39||i!==0&&e.charCodeAt(i-1)===92){if(n===0){if(l===123)r++;else if(l===125&&--r<0)return!0}}else n===0?n=l:n===l&&(n=0);else o=!0,i++}return r!==0||n!==0}function Th(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=Th(r.children,t)),r})}function Nv(e){var t,r,n,o=Pn,i=o.options,l=i===void 0?Pn:i,s=o.plugins,u=s===void 0?Aa:s,d=function(g,w,v){return v.startsWith(r)&&v.endsWith(r)&&v.replaceAll(r,"").length>0?".".concat(t):g},h=u.slice();h.push(function(g){g.type===Na&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Lv,r).replace(n,d))}),l.prefix&&h.push(ov),h.push(tv);var f=function(g,w,v,k){w===void 0&&(w=""),v===void 0&&(v=""),k===void 0&&(k="&"),t=k,r=w,n=new RegExp("\\".concat(r,"\\b"),"g");var P=function(m){if(!$d(m))return m;for(var b=m.length,S="",C=0,j=0,I=0,_=!1,E=0;E<b;E++){var M=m.charCodeAt(E);if(I!==0||_||M!==sn||m.charCodeAt(E+1)!==42)if(_)M===42&&m.charCodeAt(E+1)===sn&&(_=!1,E++);else if(M!==34&&M!==39||E!==0&&m.charCodeAt(E-1)===92){if(I===0)if(M===123)j++;else if(M===125){if(--j<0){for(var O=E+1;O<b;){var H=m.charCodeAt(O);if(H===59||H===10)break;O++}O<b&&m.charCodeAt(O)===59&&O++,j=0,E=O-1,C=O;continue}j===0&&(S+=m.substring(C,E+1),C=E+1)}else M===59&&j===0&&(S+=m.substring(C,E+1),C=E+1)}else I===0?I=M:I===M&&(I=0);else _=!0,E++}if(C<b){var L=m.substring(C);$d(L)||(S+=L)}return S}(function(m){if(m.indexOf("//")===-1)return m;for(var b=m.length,S=[],C=0,j=0,I=0,_=0;j<b;){var E=m.charCodeAt(j);if(E!==34&&E!==39||j!==0&&m.charCodeAt(j-1)===92)if(I===0)if(E===40&&j>=3&&(32|m.charCodeAt(j-1))==108&&(32|m.charCodeAt(j-2))==114&&(32|m.charCodeAt(j-3))==117)_=1,j++;else if(_>0)E===41?_--:E===40&&_++,j++;else if(E===sn&&j+1<b&&m.charCodeAt(j+1)===sn){for(j>C&&S.push(m.substring(C,j));j<b&&m.charCodeAt(j)!==10;)j++;C=j}else j++;else j++;else I===0?I=E:I===E&&(I=0),j++}return C===0?m:(C<b&&S.push(m.substring(C)),S.join(""))}(g)),x=Zx(v||w?"".concat(v," ").concat(w," { ").concat(P," }"):P);l.namespace&&(x=Th(x,l.namespace));var p=[];return oa(x,rv(h.concat(nv(function(m){return p.push(m)})))),p};return f.hash=u.length?u.reduce(function(g,w){return w.name||Mo(15),an(g,w.name)},5381).toString():"",f}var _v=new sa,Ms=Nv(),Fs={shouldForwardProp:void 0,styleSheet:_v,stylis:Ms},Lh=Rt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(Fs)}}:re.createContext(Fs);Lh.Consumer;Rt||re.createContext(void 0);function Ds(){return Rt?Fs:re.useContext(Lh)}var Nh=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Ms);var l=n.name+i.hash;o.hasNameForId(n.id,l)||o.insertRules(n.id,l,i(n.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Jc(this,function(){throw Mo(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ms),this.name+t.hash},e}();function Rv(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in iv||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var $v=function(e){return e>="A"&&e<="Z"};function Od(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;$v(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var _h=function(e){return e==null||e===!1||e===""},Rh=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!_h(n)&&(Array.isArray(n)&&n.isCss||En(n)?t.push("".concat(Od(r),":"),n,";"):Lo(n)?t.push.apply(t,kn(kn(["".concat(r," {")],Rh(n),!1),["}"],!1)):t.push("".concat(Od(r),": ").concat(Rv(r,n),";")))}return t};function hr(e,t,r,n){if(_h(e))return[];if(Xc(e))return[".".concat(e.styledComponentId)];if(En(e)){if(!En(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return hr(o,t,r,n)}var i;return e instanceof Nh?r?(e.inject(r,n),[e.getName(n)]):[e]:Lo(e)?Rh(e):Array.isArray(e)?Array.prototype.concat.apply(Aa,e.map(function(l){return hr(l,t,r,n)})):[e.toString()]}function $h(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(En(r)&&!Xc(r))return!1}return!0}var Ov=Sh(Oa),Av=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&$h(t),this.componentId=r,this.baseHash=an(Ov,r),this.baseStyle=n,sa.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=Er(o,this.staticRulesId);else{var i=aa(hr(this.rules,t,r,n)),l=Os(an(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,l)){var s=n(i,".".concat(l),void 0,this.componentId);r.insertRules(this.componentId,l,s)}o=Er(o,l),this.staticRulesId=l}else{for(var u=an(this.baseHash,n.hash),d="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")d+=f;else if(f){var g=aa(hr(f,t,r,n));u=an(u,g+h),d+=g}}if(d){var w=Os(u>>>0);if(!r.hasNameForId(this.componentId,w)){var v=n(d,".".concat(w),void 0,this.componentId);r.insertRules(this.componentId,w,v)}o=Er(o,w)}}return{className:o,css:typeof window>"u"?r.getTag().getGroup(ln(this.componentId)):""}},e}(),Zc=Rt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:re.createContext(void 0);Zc.Consumer;var xl={};function Mv(e,t,r){var n=Xc(e),o=e,i=!gl(e),l=t.attrs,s=l===void 0?Aa:l,u=t.componentId,d=u===void 0?function(b,S){var C=typeof b!="string"?"sc":zd(b);xl[C]=(xl[C]||0)+1;var j="".concat(C,"-").concat(Kc(Oa+C+xl[C]));return S?"".concat(S,"-").concat(j):j}(t.displayName,t.parentComponentId):u,h=t.displayName,f=h===void 0?function(b){return gl(b)?"styled.".concat(b):"Styled(".concat(dv(b),")")}(e):h,g=t.displayName&&t.componentId?"".concat(zd(t.displayName),"-").concat(t.componentId):t.componentId||d,w=n&&o.attrs?o.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(n&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var P=t.shouldForwardProp;v=function(b,S){return k(b,S)&&P(b,S)}}else v=k}var x=new Av(r,g,n?o.componentStyle:void 0);function p(b,S){return function(C,j,I){var _=C.attrs,E=C.componentStyle,M=C.defaultProps,O=C.foldedComponentIds,H=C.styledComponentId,L=C.target,Ce=Rt?void 0:re.useContext(Zc),ue=Ds(),ge=C.shouldForwardProp||ue.shouldForwardProp,T=jh(j,Ce,M)||Pn,R=function(Mr,Wt,A){for(var $,V=Ie(Ie({},Wt),{className:void 0,theme:A}),mt=0;mt<Mr.length;mt+=1){var Fr=En($=Mr[mt])?$(V):$;for(var Gt in Fr)Gt==="className"?V.className=Er(V.className,Fr[Gt]):Gt==="style"?V.style=Ie(Ie({},V.style),Fr[Gt]):V[Gt]=Fr[Gt]}return"className"in Wt&&typeof Wt.className=="string"&&(V.className=Er(V.className,Wt.className)),V}(_,j,T),F=R.as||L,q={};for(var Y in R)R[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&R.theme===T||(Y==="forwardedAs"?q.as=R.forwardedAs:ge&&!ge(Y,F)||(q[Y]=R[Y]));var wt=function(Mr,Wt){var A=Ds(),$=Mr.generateAndInjectStyles(Wt,A.styleSheet,A.stylis);return $}(E,R),Ue=wt.className,bt=wt.css,He=Er(O,H);Ue&&(He+=" "+Ue),R.className&&(He+=" "+R.className),q[gl(F)&&!kh.has(F)?"class":"className"]=He,I&&(q.ref=I);var be=y.createElement(F,q);return Rt&&bt?re.createElement(re.Fragment,null,re.createElement("style",{precedence:"styled-components",href:"sc-".concat(H,"-").concat(Ue),children:bt}),be):be}(m,b,S)}p.displayName=f;var m=re.forwardRef(p);return m.attrs=w,m.componentStyle=x,m.displayName=f,m.shouldForwardProp=v,m.foldedComponentIds=n?Er(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=g,m.target=n?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=n?function(S){for(var C=[],j=1;j<arguments.length;j++)C[j-1]=arguments[j];for(var I=0,_=C;I<_.length;I++)As(S,_[I],!0);return S}({},o.defaultProps,b):b}}),Jc(m,function(){return".".concat(m.styledComponentId)}),i&&zh(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Ad(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Md=function(e){return Object.assign(e,{isCss:!0})};function eu(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(En(e)||Lo(e))return Md(hr(Ad(Aa,kn([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?hr(n):Md(hr(Ad(n,t)))}function Bs(e,t,r){if(r===void 0&&(r=Pn),!t)throw Mo(1,t);var n=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,r,eu.apply(void 0,kn([o],i,!1)))};return n.attrs=function(o){return Bs(e,t,Ie(Ie({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return Bs(e,t,Ie(Ie({},r),o))},n}var Oh=function(e){return Bs(Mv,e)},c=Oh;kh.forEach(function(e){c[e]=Oh(e)});var Fv=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=$h(t),sa.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(aa(hr(this.rules,r,n,o)),""),l=this.componentId+t;n.insertRules(l,l,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&sa.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?n.hasNameForId(i,i)||this.createStyles(t,r,n,o):(this.removeStyles(t,n),this.createStyles(t,r,n,o))},e}();function Dv(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=eu.apply(void 0,kn([e],t,!1)),o="sc-global-".concat(Kc(JSON.stringify(n))),i=new Fv(n,o),l=new WeakMap,s=function(u){var d=Ds(),h=Rt?void 0:re.useContext(Zc),f=l.get(d.styleSheet);if(f===void 0&&(f=d.styleSheet.allocateGSInstance(o),l.set(d.styleSheet,f)),(typeof window>"u"||!d.styleSheet.server)&&function(P,x,p,m,b){if(i.isStatic)i.renderStyles(P,lv,p,b);else{var S=Ie(Ie({},x),{theme:jh(x,m,s.defaultProps)});i.renderStyles(P,S,p,b)}}(f,u,d.styleSheet,h,d.stylis),!Rt){var g=re.useRef(!0);re.useLayoutEffect(function(){return g.current=!1,function(){g.current=!0,queueMicrotask(function(){g.current&&(i.removeStyles(f,d.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(P){return P.remove()}))})}},[f,d.styleSheet])}if(Rt){var w=o+f,v=typeof window>"u"?d.styleSheet.getTag().getGroup(ln(w)):"";if(v){var k="".concat(o,"-").concat(f);return re.createElement("style",{key:k,"data-styled-global":o,precedence:"styled-components",href:k,children:v})}}return null};return re.memo(s)}function Vt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=aa(eu.apply(void 0,kn([e],t,!1))),o=Kc(n);return new Nh(o,n)}const Bv=Vt`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,Uv=Vt`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,Hv=c.div`
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
`,Vv=c.div`
  background: ${e=>e.$type==="success"?"#10b981":e.$type==="info"?"#3b82f6":"#ef4444"};
  color: white;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  animation: ${Bv} 0.3s ease-out;
  pointer-events: all;
  font-size: 0.9375rem;
  line-height: 1.5;

  &.removing {
    animation: ${Uv} 0.3s ease-out forwards;
  }
`,Wv=c.div`
  flex: 1;
  font-weight: 500;
`,Gv=c.button`
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
`;function Qv(){const{toasts:e,removeToast:t}=Ao();return e.length===0?null:a.jsx(Hv,{children:e.map(r=>a.jsxs(Vv,{$type:r.type,children:[a.jsx(Wv,{children:r.message}),a.jsx(Gv,{onClick:()=>t(r.id),"aria-label":"Fechar notificação",children:"×"})]},r.id))})}const Yt=(e,t=800)=>`https://images.unsplash.com/photo-${e}?w=${t}&q=80&auto=format&fit=crop`,D={hero:"/hero/glamour-country-hero-hats.jpg",hat1:Yt("1588850561407-ed78c282e89b"),hat2:Yt("1515372039744-b8f02a3ae446"),hat3:Yt("1594633312681-425c7b97ccd1"),hat4:Yt("1521369909029-2afed882baee"),field:Yt("1469474968028-56623f02e42e",1200),belt:Yt("1551028719-00167b16eac5"),scarf:Yt("1601924994987-69e26d50dc26"),woman:Yt("1496747611176-843222e1e57c"),categoriaPalha:"/categorias/chapeu-palha.jpg",categoriaAbaLarga:"/categorias/chapeu-aba-larga.jpg",categoriaFeltro:"/categorias/chapeu-feltro.jpg",categoriaCountry:"/categorias/cinta-country.jpg",promoPrefooter:"/banners/promo-prefooter.jpg"},qv=["Palha","Aba larga","Feltro","Clássicos"],Yv={Palha:{image:D.categoriaPalha,link:"/categoria/chapeus-palha",description:"Palha natural com charme country e leveza no dia a dia."},"Aba larga":{image:D.categoriaAbaLarga,link:"/categoria/chapeus-aba",description:"Aba ampla para proteção solar com elegância western."},Feltro:{image:D.categoriaFeltro,link:"/categoria/chapeus-classicos",description:"Feltro premium com forma americana clássica."},Clássicos:{image:D.categoriaFeltro,link:"/categoria/chapeus-classicos",description:"Modelos atemporais para momentos especiais."}},Fd=[{label:"Início",path:"/"},{label:"Chapéus",path:"/chapeus"},{label:"Artigos country",path:"/country"},{label:"Lançamentos",path:"/lancamentos"},{label:"Promoções",path:"/promocoes"}],Kv=[{id:1,title:"Chapéus de palha",slug:"chapeus-palha",image:D.categoriaPalha,link:"/categoria/chapeus-palha"},{id:2,title:"Chapéus aba larga",slug:"chapeus-aba",image:D.categoriaAbaLarga,link:"/categoria/chapeus-aba"},{id:3,title:"Clássicos & feltro",slug:"chapeus-classicos",image:D.categoriaFeltro,link:"/categoria/chapeus-classicos"},{id:4,title:"Artigos country",slug:"country",image:D.categoriaCountry,link:"/country"}],tu={title:"Elegância country",subtitle:"Chapéus e acessórios femininos com charme country e leveza.",ctaLabel:"Ver chapéus",ctaLink:"/chapeus",image:D.hero},Xv={title:"Country, estilo e delicadeza",subtitle:"Peças pensadas para a mulher que vive o lifestyle country com charme.",ctaLabel:"Explorar coleção",ctaLink:"/chapeus",image:D.promoPrefooter},Ma=[{id:1,name:"Chapéu de palha Aurora",price:189.9,originalPrice:219.9,image:D.hat2,imageHover:D.woman,badge:"Novo",link:"/produto/1",team:"Linha Aurora",league:"palha",liga:"Palha",category:"chapeus-palha",sizes:["Único","P","M"],isPromo:!1,salesCount:84,createdAt:"2025-04-10",freteGratis:!0},{id:2,name:"Chapéu aba larga Campestre",price:249.9,originalPrice:null,image:D.hat1,imageHover:D.hat4,badge:"Novo",link:"/produto/2",team:"Linha Campestre",league:"aba-larga",liga:"Aba larga",category:"chapeus-aba",sizes:["P","M","G"],isPromo:!1,salesCount:62,createdAt:"2025-03-22",freteGratis:!0},{id:3,name:"Chapéu feltro Montana",price:329.9,originalPrice:379.9,image:D.hat3,imageHover:D.hat1,badge:"Promo",link:"/produto/3",team:"Linha Montana",league:"feltro",liga:"Feltro",category:"chapeus-classicos",sizes:["P","M","G"],isPromo:!0,salesCount:41,createdAt:"2025-02-15"},{id:4,name:"Chapéu vintage Ranch",price:279.9,originalPrice:null,image:D.hat4,imageHover:D.hat3,badge:null,link:"/produto/4",team:"Linha Ranch",league:"classicos",liga:"Clássicos",category:"chapeus-classicos",sizes:["Único","M"],isPromo:!1,salesCount:55,createdAt:"2025-01-08"},{id:5,name:"Chapéu palha Trançado",price:169.9,originalPrice:199.9,image:D.hat2,imageHover:D.field,badge:"Promo",link:"/produto/5",team:"Linha Trançado",league:"palha",liga:"Palha",category:"chapeus-palha",sizes:["Único"],isPromo:!0,salesCount:98,createdAt:"2025-04-01",freteGratis:!0},{id:6,name:"Chapéu aba média Country",price:219.9,originalPrice:null,image:D.hat1,imageHover:D.woman,badge:null,link:"/produto/6",team:"Linha Country",league:"aba-larga",liga:"Aba larga",category:"chapeus-aba",sizes:["P","M","G"],isPromo:!1,salesCount:37,createdAt:"2024-12-20"},{id:7,name:"Chapéu feltro Rosê",price:349.9,originalPrice:null,image:D.hat3,imageHover:D.hat4,badge:"Novo",link:"/produto/7",team:"Linha Rosê",league:"feltro",liga:"Feltro",category:"chapeus-classicos",sizes:["P","M"],isPromo:!1,salesCount:29,createdAt:"2025-04-18"},{id:8,name:"Chapéu palha Leve",price:159.9,originalPrice:189.9,image:D.hat2,imageHover:D.hat1,badge:"Promo",link:"/produto/8",team:"Linha Leve",league:"palha",liga:"Palha",category:"chapeus-palha",sizes:["Único","P"],isPromo:!0,salesCount:71,createdAt:"2024-11-10"},{id:9,name:"Cinta country couro",price:129.9,originalPrice:149.9,image:D.categoriaCountry,imageHover:D.categoriaCountry,badge:"Promo",link:"/produto/9",team:"Acessórios",league:"country",liga:"Country",category:"country",sizes:["P","M","G"],isPromo:!0,salesCount:45,createdAt:"2025-03-05"},{id:10,name:"Lenço xadrez country",price:79.9,originalPrice:null,image:D.scarf,imageHover:D.scarf,badge:null,link:"/produto/10",team:"Acessórios",league:"country",liga:"Country",category:"country",sizes:["Único"],isPromo:!1,salesCount:52,createdAt:"2025-02-28"},{id:11,name:"Pulseira trançada couro",price:59.9,originalPrice:null,image:D.belt,imageHover:D.field,badge:"Novo",link:"/produto/11",team:"Acessórios",league:"country",liga:"Country",category:"country",sizes:["Único"],isPromo:!1,salesCount:33,createdAt:"2025-04-12"},{id:12,name:"Chapéu aba curta Primavera",price:199.9,originalPrice:229.9,image:D.hat4,imageHover:D.hat2,badge:"Edição",link:"/produto/12",team:"Linha Primavera",league:"aba-larga",liga:"Aba larga",category:"chapeus-aba",sizes:["P","M","G"],isPromo:!1,salesCount:28,createdAt:"2025-04-20",freteGratis:!0}];function Jv(e){var u;const t=Ma.find(d=>d.id===Number(e));if(!t)return null;const r=t.image,n=t.imageHover||t.image,o=[{src:r,label:"Vista principal"},{src:n,label:"Detalhe"},{src:D.field,label:"Estilo country"}],i=["Único","P","M","G","GG"],l=t.sizes||["Único","M","G"],s={};return i.forEach((d,h)=>{if(!l.includes(d))s[d]=0;else{const f=(t.id+h)%4===0;s[d]=f?0:5}}),{...t,gallery:o,sizeStock:s,material:(u=t.category)!=null&&u.startsWith("chapeus")?"Palha natural ou feltro premium (conforme modelo)":"Couro legítimo e fibras naturais",shipping:"Envio em até 5 dias úteis",exchange:"Troca fácil em até 7 dias"}}const Zv={palha:"Palha","aba-larga":"Aba larga",feltro:"Feltro",classicos:"Clássicos",country:"Artigos country"};function ey(){const e={},t=new Set;for(const n of Ma){const o=n.league||"palha";e[o]||(e[o]=[]);const i=`${o}-${n.team}`;t.has(i)||(t.add(i),e[o].push({name:n.team,image:n.image,fallbackImage:n.imageHover||null,link:`/produtos?time=${encodeURIComponent(n.team)}`}))}return["palha","aba-larga","feltro","classicos","country"].filter(n=>{var o;return(o=e[n])==null?void 0:o.length}).map(n=>({id:n,name:Zv[n]||n,teams:e[n].sort((o,i)=>o.name.localeCompare(i.name))}))}const ty=ey();ty.flatMap(e=>e.teams);const Us={"chapeus-palha":{title:"Chapéus de palha",subtitle:"Leves, frescos e cheios de charme para o seu dia a dia country",bannerImage:D.categoriaPalha,categorySlug:"chapeus-palha"},"chapeus-aba":{title:"Chapéus aba larga",subtitle:"Proteção solar com elegância western",bannerImage:D.categoriaAbaLarga,categorySlug:"chapeus-aba"},"chapeus-classicos":{title:"Clássicos & feltro",subtitle:"Forma americana clássica em feltro premium",bannerImage:D.categoriaFeltro,categorySlug:"chapeus-classicos"},country:{title:"Artigos country",subtitle:"Cintas, lenços e acessórios para completar o look",bannerImage:D.categoriaCountry,categorySlug:"country"},produtos:{title:"Todos os produtos",subtitle:"Chapéus femininos e artigos com espírito country",bannerImage:D.hero,categorySlug:null},chapeus:{title:"Nossa coleção",subtitle:"Chapéus femininos por linha e estilo country",bannerImage:D.hero,categorySlug:null,filterHatsOnly:!0},times:{title:"Coleções",subtitle:"Explore por linha e estilo",bannerImage:D.hero,categorySlug:null},lancamentos:{title:"Lançamentos",subtitle:"Novidades que acabaram de chegar",bannerImage:D.hero,categorySlug:null,sortDefault:"newest"},promocoes:{title:"Promoções",subtitle:"Ofertas especiais em chapéus e acessórios country",bannerImage:D.field,categorySlug:null,filterPromoOnly:!0}},ry={institutional:[{label:"Sobre nós",path:"/sobre"},{label:"Contato",path:"/contato"}],help:[{label:"Central de ajuda",path:"/ajuda"},{label:"Troca e devolução",path:"/troca-devolucao"},{label:"Entregas",path:"/entregas"},{label:"Formas de pagamento",path:"/pagamento"}],account:[{label:"Meus pedidos",path:"/pedido/consultar"}],social:[{name:"facebook",url:"https://facebook.com",icon:"facebook"},{name:"instagram",url:"https://instagram.com",icon:"instagram"}],copyright:"© 2025 Glamour Country. Todos os direitos reservados."};Ma.slice(0,8);const Dd="Glamour Country",ny="/logos/552622476_17974491350925840_3124358408146951815_n.jpg",Ah=c.span`
  display: inline-flex;
  align-items: center;
  line-height: 0;
`,oy=c.img`
  height: ${({$footer:e})=>e?"140px":"64px"};
  width: auto;
  max-width: ${({$footer:e})=>e?"280px":"200px"};
  object-fit: contain;
  transition: opacity 0.2s ease;

  ${Ah}:hover & {
    opacity: 0.88;
  }

  @media (min-width: 768px) {
    height: ${({$footer:e})=>e?"160px":"80px"};
  }
`;function Mh({className:e,$footer:t=!1}){return a.jsx(Ah,{className:e,"aria-label":Dd,children:a.jsx(oy,{src:ny,alt:Dd,$footer:t})})}var Fh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bd=re.createContext&&re.createContext(Fh),iy=["attr","size","title"];function ay(e,t){if(e==null)return{};var r=ly(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ly(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ca.apply(this,arguments)}function Ud(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ua(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ud(Object(r),!0).forEach(function(n){sy(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ud(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function sy(e,t,r){return t=cy(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function cy(e){var t=uy(e,"string");return typeof t=="symbol"?t:t+""}function uy(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Dh(e){return e&&e.map((t,r)=>re.createElement(t.tag,ua({key:r},t.attr),Dh(t.child)))}function Be(e){return t=>re.createElement(dy,ca({attr:ua({},e.attr)},t),Dh(e.child))}function dy(e){var t=r=>{var{attr:n,size:o,title:i}=e,l=ay(e,iy),s=o||r.size||"1em",u;return r.className&&(u=r.className),e.className&&(u=(u?u+" ":"")+e.className),re.createElement("svg",ca({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:u,style:ua(ua({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&re.createElement("title",null,i),e.children)};return Bd!==void 0?re.createElement(Bd.Consumer,null,r=>t(r)):t(Fh)}function Bh(e){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"},child:[]}]})(e)}function fy(e){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"},child:[]}]})(e)}function py(e){return Be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z"},child:[]}]})(e)}function Hd(e){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},child:[]}]})(e)}function my(e){return Be({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"},child:[]}]})(e)}function hy(e){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},child:[]}]})(e)}function gy(e){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"},child:[]}]})(e)}function xy(e){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(e)}function vy(e){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"},child:[]}]})(e)}const yy=c.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--color-surface);
  box-shadow: 0 1px 8px rgba(61, 50, 41, 0.06);
  border-bottom: 1px solid var(--color-border);
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  @media (max-width: 991px) {
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border-bottom-color: var(--color-border);
  }
`,wy=c.div`
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
    min-height: 96px;
    gap: 2rem;
  }
`,by=c.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0;
`,jy=c.ul`
  display: none;
  align-items: center;
  gap: 0.25rem;

  @media (min-width: 992px) {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 0.5rem;
  }
`,ky=c.li`
  a {
    display: block;
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--color-text);
    border-radius: 6px;
    transition: color 0.2s, background 0.2s;

    &:hover {
      color: var(--color-primary);
      background: var(--color-primary-soft);
    }

    &.active {
      color: var(--color-primary);
      font-weight: 600;
    }
  }
`,Vd=c.form`
  display: flex;
  align-items: center;
  max-width: 280px;
  width: 100%;
  min-height: 44px;
  height: 44px;
  background: var(--color-bg);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--color-border);

  &:focus-within {
    border-color: var(--color-primary);
    background: var(--color-surface);
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
`,Wd=c.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 0.75rem;
  font-size: 0.9rem;
  color: var(--color-text);
  background: transparent;
  border: none;

  &::placeholder {
    color: var(--color-text-muted);
  }

  &:focus {
    outline: none;
  }
`,Gd=c.button`
  flex-shrink: 0;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  & > svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: var(--color-primary);
  }

  @media (min-width: 992px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`,Sy=c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Cy=c.div`
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
`,Py=c.span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  font-size: 0.6875rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Qd=c.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  color: var(--color-text);
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  & > svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    color: var(--color-primary);
    background: var(--color-primary-soft);
  }

  @media (max-width: 991px) {
    color: var(--color-text);

    &:hover {
      color: var(--color-primary);
      background: var(--color-primary-soft);
    }
  }

  @media (min-width: 992px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`,Ey=c.div`
  display: none;
  flex: 1;
  min-width: 0;
  max-width: 280px;
  margin: 0 0.5rem;

  @media (min-width: 992px) {
    display: block;
  }
`,zy=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  color: var(--color-text);
  background: transparent;
  border-radius: 8px;
  transition: color 0.2s;

  & > svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 991px) {
    color: var(--color-text);
  }

  @media (min-width: 992px) {
    display: none;
  }
`,Iy=c.div`
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-top: ${({$open:e})=>e?"1px solid var(--color-border)":"none"};
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
    color: var(--color-text);
    border-radius: 6px;

    &:hover {
      background: var(--color-primary-soft);
      color: var(--color-primary);
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`,Ty=c.div`
  padding: 0 0 0.75rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 0.75rem;

  @media (min-width: 992px) {
    display: none;
  }
`;function ve(){const[e,t]=y.useState(!1),[r,n]=y.useState(""),o=Ht(),[i]=Ta(),{itemCount:l}=La();y.useEffect(()=>{const d=i.get("q");d!=null&&n(d)},[i]);const s=d=>{d.preventDefault();const h=r.trim();h&&(o(`/produtos?q=${encodeURIComponent(h)}`),t(!1))},u="Buscar chapéus, acessórios ou coleções";return a.jsxs(yy,{children:[a.jsxs(wy,{children:[a.jsx(by,{as:Wn,to:"/",children:a.jsx(Mh,{})}),a.jsx(jy,{children:Fd.map(d=>a.jsx(ky,{children:a.jsx(Wn,{to:d.path,className:({isActive:h})=>h?"active":"",onClick:()=>t(!1),children:d.label})},d.path))}),a.jsx(Ey,{children:a.jsxs(Vd,{onSubmit:s,role:"search",children:[a.jsx(Wd,{type:"search",placeholder:u,value:r,onChange:d=>n(d.target.value),"aria-label":u}),a.jsx(Gd,{type:"submit","aria-label":"Buscar",children:a.jsx(Hd,{size:20,"aria-hidden":!0})})]})}),a.jsxs(Sy,{children:[a.jsxs(Cy,{children:[a.jsx(Qd,{as:Wn,to:"/carrinho","aria-label":`Carrinho com ${l} itens`,onClick:()=>t(!1),children:a.jsx(Bh,{size:22,"aria-hidden":!0})}),l>0&&a.jsx(Py,{"aria-hidden":"true",children:l>99?"99+":l})]}),a.jsx(Qd,{as:Wn,to:"/pedido/consultar","aria-label":"Meus pedidos",onClick:()=>t(!1),children:a.jsx(vy,{size:22,"aria-hidden":!0})})]}),a.jsx(zy,{onClick:()=>t(!e),"aria-label":e?"Fechar menu":"Abrir menu",children:e?a.jsx(my,{size:24,"aria-hidden":!0}):a.jsx(fy,{size:24,"aria-hidden":!0})})]}),a.jsxs(Iy,{$open:e,children:[a.jsx(Ty,{children:a.jsxs(Vd,{onSubmit:s,role:"search",children:[a.jsx(Wd,{type:"search",placeholder:u,value:r,onChange:d=>n(d.target.value),"aria-label":u}),a.jsx(Gd,{type:"submit","aria-label":"Buscar",children:a.jsx(Hd,{size:20,"aria-hidden":!0})})]})}),Fd.map(d=>a.jsx(Wn,{to:d.path,onClick:()=>t(!1),children:d.label},d.path))]})]})}const Ly=c.section`
  position: relative;
  width: 100%;
  max-width: none;
  margin: 0;
  overflow: hidden;
  border-radius: 0;
  min-height: 300px;

  @media (min-width: 768px) {
    min-height: max(480px, 52vh);
  }
`,Ny=c.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;

  @media (max-width: 767px) {
    opacity: 0.55;
  }
`,_y=c.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(250, 247, 242, 0.88) 0%,
    rgba(250, 247, 242, 0.78) 50%,
    rgba(250, 247, 242, 0.65) 100%
  );

  @media (min-width: 768px) {
    background: linear-gradient(
      to right,
      rgba(250, 247, 242, 0.92) 0%,
      rgba(250, 247, 242, 0.5) 42%,
      transparent 72%
    );
  }
`,Ry=c.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: inherit;
  padding: 2rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
    max-width: 560px;
    margin: 0;
    margin-right: auto;
  }
`,$y=c.h1`
  font-family: var(--font-display);
  font-size: 2.25rem;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-primary);
  line-height: 1.15;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`,Oy=c.p`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  max-width: 400px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,Ay=c.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border-radius: 24px;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-1px);
  }
`;function My(){const{title:e,subtitle:t,ctaLabel:r,ctaLink:n,image:o}=tu;return a.jsxs(Ly,{children:[a.jsx(Ny,{src:o,alt:"Chapéus e acessórios western femininos"}),a.jsx(_y,{}),a.jsxs(Ry,{children:[a.jsx($y,{children:e}),a.jsx(Oy,{children:t}),a.jsx(Ay,{as:se,to:n,children:r})]})]})}const Hs=c.article`
  position: relative;
  display: block;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: var(--color-bg);
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.2s ease;

  @media (min-width: 768px) {
    aspect-ratio: 4 / 5;
  }

  @media (max-width: 767px) {
    &:active {
      opacity: 0.94;
    }
  }
`,Fy=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;

  ${Hs}:hover & {
    transform: scale(1.03);
  }

  @media (hover: none) {
    ${Hs}:hover & {
      transform: none;
    }
  }
`,Dy=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.08) 35%,
    transparent 65%
  );
  pointer-events: none;
`,By=c.span`
  position: absolute;
  bottom: 0.85rem;
  left: 0.85rem;
  right: 0.85rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  line-height: 1.3;

  @media (min-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    font-size: 0.875rem;
  }
`;function Uy({title:e,image:t,link:r,fallbackImage:n}){const[o,i]=y.useState(t),l=()=>{n&&i(n)};return a.jsxs(Hs,{as:se,to:r,children:[a.jsx(Fy,{src:o,alt:e,onError:l}),a.jsx(Dy,{}),a.jsx(By,{children:e})]})}const Hy=c.section`
  padding: 2rem 0 2.5rem;

  @media (min-width: 768px) {
    padding: 3rem 0 4rem;
  }
`,Vy=c.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 0.75rem;

  @media (min-width: 520px) {
    padding: 0 1.25rem;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Wy=c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media (min-width: 520px) {
    gap: 0.65rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.85rem;
  }

  @media (min-width: 1200px) {
    gap: 1rem;
  }
`;function Gy(){return a.jsx(Hy,{children:a.jsx(Vy,{children:a.jsx(Wy,{children:Kv.map(e=>a.jsx(Uy,{title:e.title,image:e.image,link:e.link},e.id))})})})}function Uh(e,t){const r=Number(e),n=Number(t);if(r<=0||n>=r)return null;const o=(r-n)/r*100;return Math.round(o)}const Hh=c.article`
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 12px rgba(61, 50, 41, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: 0 8px 24px rgba(61, 50, 41, 0.08);
    transform: translateY(-2px);
    border-color: var(--color-primary-soft);
  }

  @media (max-width: 767px) {
    &:active {
      opacity: 0.96;
    }
  }
`,Qy=c.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--color-bg);
`,qy=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.35s ease, transform 0.4s ease;

  ${Hh}:hover & {
    transform: scale(1.03);
  }
`,Yy=c.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.25rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text);
  border-radius: 20px;
  background: ${({$type:e})=>e==="promo"?"var(--color-primary-soft)":e==="retro"||e==="edicao"?"#EDE4D8":"rgba(255, 255, 255, 0.92)"};
  border: 1px solid var(--color-border);
`,Ky=c.div`
  padding: 1rem 1rem 1.1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,Xy=c.span`
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.25;
`,Jy=c.span`
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.2;
`,Zy=c.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.15rem;
`,e2=c.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--color-text-muted);
  text-decoration: line-through;
`,t2=c.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-left: 0.25rem;
`,r2=c.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #7A8F6E;
  line-height: 1.2;
`;function qd(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function Fo({name:e,price:t,originalPrice:r,image:n,imageHover:o,badge:i,link:l,liga:s,freteGratis:u}){const[d,h]=y.useState(!1),f=o&&d?o:n,g=r?Uh(r,t):null;return a.jsxs(Hh,{as:se,to:l,onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[a.jsxs(Qy,{children:[a.jsx(qy,{src:f,alt:e}),i&&a.jsx(Yy,{$type:i==="Promo"?"promo":i==="Edição"||i==="Retrô"?"edicao":"new",children:i})]}),a.jsxs(Ky,{children:[a.jsx(Xy,{children:e}),s&&a.jsx(Jy,{children:s}),a.jsxs(Zy,{children:[qd(t),r&&a.jsxs(a.Fragment,{children:[a.jsx(e2,{children:qd(r)}),g!=null&&a.jsxs(t2,{children:["-",g,"%"]})]})]}),u&&a.jsx(r2,{children:"Frete grátis"})]})]})}const n2=Vt`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,ru=c.div`
  background: linear-gradient(
    90deg,
    #eee 0%,
    #f5f5f5 50%,
    #eee 100%
  );
  background-size: 200% 100%;
  animation: ${n2} 1.2s ease-in-out infinite;
  border-radius: 4px;
`,o2=c.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
`,i2=c(ru)`
  aspect-ratio: 1;
  width: 100%;
`,a2=c.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,l2=c(ru)`
  height: 0.95rem;
  width: 85%;
`,s2=c(ru)`
  height: 1.1rem;
  width: 40%;
`;function nu(){return a.jsxs(o2,{"aria-hidden":!0,children:[a.jsx(i2,{}),a.jsxs(a2,{children:[a.jsx(l2,{}),a.jsx(s2,{})]})]})}const c2=c.div`
  text-align: center;
  padding: 4rem 1.5rem;
  max-width: 400px;
  margin: 0 auto;
`,u2=c.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  background: #fef2f2;
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  line-height: 1;
`,d2=c.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,f2=c.p`
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,p2=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`,m2=c.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;

  &:hover:not(:disabled) {
    background: var(--color-primary-hover);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,h2=c(se)`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;function Fa({title:e="Algo deu errado",message:t="Não foi possível carregar. Tente novamente.",onRetry:r,backToLabel:n="Voltar para a loja",backToPath:o="/produtos"}){return a.jsxs(c2,{role:"alert",children:[a.jsx(u2,{"aria-hidden":!0,children:"⚠"}),a.jsx(d2,{children:e}),a.jsx(f2,{children:t}),a.jsxs(p2,{children:[r&&a.jsx(m2,{type:"button",onClick:r,children:"Tentar novamente"}),a.jsx(h2,{to:o,children:n})]})]})}function Vh(e){if(!e)return null;const t=e.sizes||[],r=e.sizeStock||{};!e.sizeStock&&t.length&&t.forEach(d=>{r[d]=5});const n=e.image||"",o=e.imageHover||n,i=e.gallery||[n,o].filter(Boolean).map((d,h)=>({src:d,label:h===0?"Principal":"Detalhe"})),l=e.isPromo||e.badge==="Promo",s=Number(e.price),u=e.originalPrice!=null?Number(e.originalPrice):null;return{id:e.id,name:e.name,price:s,originalPrice:u,image:n,imageHover:o,badge:e.badge||(l?"Promo":null),link:e.link||`/produto/${e.id}`,team:e.team,liga:(e.liga??"").trim()||null,category:e.category||"chapeus-palha",sizes:t,sizeStock:r,isPromo:l,salesCount:e.salesCount||0,createdAt:e.createdAt||new Date().toISOString(),gallery:i,material:e.material||"Materiais selecionados com cuidado",shipping:e.shipping||"Envio em até 5 dias úteis",exchange:e.exchange||"Troca fácil em até 7 dias",season:e.season,frete_gratis:!!(e.frete_gratis??e.freteGratis)}}function g2(e,t={}){let r=[...e];if(t.liga){const n=t.liga.toLowerCase();r=r.filter(o=>(o.liga||"").toLowerCase()===n)}if(t.category&&(r=r.filter(n=>n.category===t.category)),t.team&&(r=r.filter(n=>n.team===t.team)),t.search){const n=t.search.toLowerCase();r=r.filter(o=>{var i,l,s,u;return((i=o.name)==null?void 0:i.toLowerCase().includes(n))||((l=o.liga)==null?void 0:l.toLowerCase().includes(n))||((s=o.team)==null?void 0:s.toLowerCase().includes(n))||((u=o.category)==null?void 0:u.toLowerCase().includes(n))})}return r.map(Vh)}async function x2(e={}){const t=g2(Ma,e);return Promise.resolve(t)}async function v2(e){const t=Jv(e);return t?Promise.resolve(Vh(t)):Promise.reject(new Error("Produto não encontrado"))}const zn={getAll:x2,getById:v2},Yd=c.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,Kd=c.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,y2=c.h2`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    text-align: left;
  }
`,w2=c.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-text-muted);
  margin: -1rem 0 1.25rem;
  text-align: center;

  @media (min-width: 768px) {
    margin: -1.5rem 0 1.5rem;
    text-align: left;
  }
`,b2=c.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;

  & > * {
    flex: 0 0 min(280px, 78vw);
    scroll-snap-align: start;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    overflow: visible;
    padding-bottom: 0;

    & > * {
      flex: initial;
    }
  }
`;c.div`
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
`;const Xd=8;function j2(){return zn.getAll()}function k2(){const[e,t]=y.useState([]),[r,n]=y.useState(!0),[o,i]=y.useState(!1),l=async()=>{n(!0),i(!1);try{const u=[...await j2()].sort((d,h)=>new Date(h.createdAt)-new Date(d.createdAt)).slice(0,Xd);t(u)}catch{i(!0)}finally{n(!1)}};return y.useEffect(()=>{l()},[]),o?a.jsx(Yd,{children:a.jsx(Kd,{children:a.jsx(Fa,{message:"Não foi possível carregar os produtos mais recentes",onRetry:l})})}):a.jsx(Yd,{children:a.jsxs(Kd,{children:[a.jsx(y2,{children:"Novidades da temporada"}),a.jsx(w2,{children:"Arraste para ver mais"}),a.jsx(b2,{children:r?Array.from({length:Xd},(s,u)=>a.jsx(nu,{},u)):e.map(s=>a.jsx(Fo,{name:s.name,price:s.price,originalPrice:s.originalPrice,image:s.image,imageHover:s.imageHover,badge:s.badge,link:s.link,liga:s.liga,freteGratis:s.frete_gratis??s.freteGratis},s.id))})]})})}const S2=c.section`
  position: relative;
  width: 100%;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 320px;
  }
`,C2=c.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
`,P2=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(74, 63, 53, 0.65) 0%,
    rgba(74, 63, 53, 0.25) 55%,
    transparent 100%
  );
`,E2=c.div`
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
`,z2=c.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,I2=c.p`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1.25rem;
  max-width: 28rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,T2=c.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border-radius: 24px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-1px);
  }
`;function L2(){const{title:e,subtitle:t,ctaLabel:r,ctaLink:n,image:o}=Xv;return a.jsxs(S2,{children:[a.jsx(C2,{src:o,alt:"Chapéus e acessórios country Glamour Country"}),a.jsx(P2,{}),a.jsxs(E2,{children:[a.jsx(z2,{children:e}),a.jsx(I2,{children:t}),a.jsx(T2,{as:se,to:n,children:r})]})]})}const N2=c.footer`
  background: var(--color-footer-bg);
  color: var(--color-footer-text);
  padding: 3rem 0 2rem;

  @media (min-width: 768px) {
    padding: 4rem 0 2rem;
  }
`,_2=c.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,R2=c.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,$2=c.a`
  display: inline-block;
  line-height: 0;
  text-decoration: none;
`,O2=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`,oi=c.div``,ii=c.h3`
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 400;
  color: #F5EDE4;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`,vl=c.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,yl=c.a`
  font-size: 0.9rem;
  color: var(--color-footer-text);
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`,A2=c.div`
  display: flex;
  gap: 0.75rem;
`,M2=c.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--color-footer-text);
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.2s, background 0.2s;

  & > svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.12);
  }
`,F2=c.p`
  font-size: 0.8rem;
  color: rgba(212, 201, 188, 0.65);
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;function ye(){const{institutional:e,help:t,account:r,social:n,copyright:o}=ry;return a.jsx(N2,{children:a.jsxs(_2,{children:[a.jsx(R2,{children:a.jsx($2,{as:se,to:"/",children:a.jsx(Mh,{$footer:!0})})}),a.jsxs(O2,{children:[a.jsxs(oi,{children:[a.jsx(ii,{children:"Institucional"}),a.jsx(vl,{children:e.map(i=>a.jsx("li",{children:a.jsx(yl,{as:se,to:i.path,children:i.label})},i.path))})]}),a.jsxs(oi,{children:[a.jsx(ii,{children:"Ajuda"}),a.jsx(vl,{children:t.map(i=>a.jsx("li",{children:a.jsx(yl,{as:se,to:i.path,children:i.label})},i.path))})]}),a.jsxs(oi,{children:[a.jsx(ii,{children:"Minha conta"}),a.jsx(vl,{children:r.map(i=>a.jsx("li",{children:a.jsx(yl,{as:se,to:i.path,children:i.label})},i.path))})]}),a.jsxs(oi,{children:[a.jsx(ii,{children:"Redes sociais"}),a.jsx(A2,{children:n.map(i=>a.jsx(M2,{href:i.url,target:"_blank",rel:"noopener noreferrer","aria-label":i.name,children:a.jsx(xy,{size:18,"aria-hidden":!0})},i.name))})]})]}),a.jsx(F2,{children:o})]})})}const D2=c.div`
  padding-top: var(--navbar-height, 100px);
`;function B2(){return a.jsxs(a.Fragment,{children:[a.jsx(ve,{}),a.jsxs(D2,{children:[a.jsxs("main",{children:[a.jsx(My,{}),a.jsx(Gy,{}),a.jsx(k2,{}),a.jsx(L2,{})]}),a.jsx(ye,{})]})]})}const U2=c.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`,H2=c.header`
  position: relative;
  width: 100%;
  min-height: 220px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 280px;
  }
`,V2=c.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,W2=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`,G2=c.div`
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
`,Q2=c.h1`
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,q2=c.p`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,Y2=c.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem 3rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 0 2rem 4rem;
  }
`,K2=c.div`
  display: grid;
  gap: 2rem;
  padding-top: 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: 240px 1fr;
    gap: 2.5rem;
    padding-top: 2rem;
  }
`,X2=c.aside`
  @media (max-width: 991px) {
    order: 2;
  }
`,Gn=c.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Qn=c.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
`,J2=c.select`
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
    border-color: var(--color-primary);
  }
`,Jd=c.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #444;
  cursor: pointer;
  padding: 0.35rem 0;
  transition: color 0.2s;

  &:hover {
    color: var(--color-primary);
  }

  input {
    width: 16px;
    height: 16px;
    accent-color: var(--color-primary);
    cursor: pointer;
  }
`,Z2=c.button`
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
    border-color: var(--color-primary);
    color: var(--color-primary);
  }

  &.active {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: #fff;
  }
`,e5=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Zd=c.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,t5=c.div`
  min-width: 0;
`,r5=c.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`,n5=c.span`
  font-size: 0.9rem;
  color: #666;
`,o5=c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,i5=c.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
  white-space: nowrap;
`,a5=c.select`
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
    border-color: var(--color-primary);
  }
`,ef=c.div`
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
`,l5=c.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  background: #fff;
  border: 2px solid var(--color-primary);
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;

  @media (min-width: 992px) {
    display: none;
  }
`,s5=c.div`
  @media (max-width: 991px) {
    display: ${({$open:e})=>e?"block":"none"};
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
  }
`,c5=[{value:"bestseller",label:"Mais vendidos"},{value:"price_asc",label:"Menor preço"},{value:"price_desc",label:"Maior preço"},{value:"newest",label:"Lançamentos"}],u5=["P","M","G","GG","EG"];function d5(e,t){const r=e.slug;return r||t.replace(/^\//,"").split("/")[0]||"produtos"}function tf(e,t,r,n){const o=Us[n];let i=[...e];if(o!=null&&o.categorySlug&&(i=i.filter(l=>l.category===o.categorySlug)),o!=null&&o.filterPromoOnly&&(i=i.filter(l=>l.isPromo)),o!=null&&o.filterHatsOnly&&(i=i.filter(l=>{var s;return(s=l.category)==null?void 0:s.startsWith("chapeus")})),t.liga){const l=t.liga.toLowerCase();i=i.filter(s=>(s.liga||"").toLowerCase()===l)}if(t.team&&(i=i.filter(l=>l.team===t.team)),t.size&&(i=i.filter(l=>{var s;return(s=l.sizes)==null?void 0:s.includes(t.size)})),t.promoOnly&&(i=i.filter(l=>l.isPromo)),t.priceMin!=null&&t.priceMin!==""){const l=Number(t.priceMin);Number.isNaN(l)||(i=i.filter(s=>s.price>=l))}if(t.priceMax!=null&&t.priceMax!==""){const l=Number(t.priceMax);Number.isNaN(l)||(i=i.filter(s=>s.price<=l))}return r==="bestseller"?i.sort((l,s)=>(s.salesCount||0)-(l.salesCount||0)):r==="price_asc"?i.sort((l,s)=>l.price-s.price):r==="price_desc"?i.sort((l,s)=>s.price-l.price):r==="newest"&&i.sort((l,s)=>new Date(s.createdAt)-new Date(l.createdAt)),i}function f5(e){return[...new Set(e.map(r=>r.team).filter(Boolean))].sort((r,n)=>r.localeCompare(n))}function p5(e){return[...new Set(e.map(r=>r.liga).filter(Boolean))].sort((r,n)=>r.localeCompare(n))}function rf(e,t){if(!(t!=null&&t.trim()))return e;const r=t.trim().toLowerCase();return e.filter(n=>{var o,i,l,s;return((o=n.name)==null?void 0:o.toLowerCase().includes(r))||((i=n.team)==null?void 0:i.toLowerCase().includes(r))||((l=n.category)==null?void 0:l.toLowerCase().includes(r))||((s=n.liga)==null?void 0:s.toLowerCase().includes(r))})}function Hr(){const e=Wc(),{pathname:t}=Ut(),[r,n]=Ta(),{showError:o}=Ao(),i=d5(e,t),l=Us[i]||Us.produtos,s=r.get("time")||"",u=r.get("liga")||"",d=r.get("q")??"",[h,f]=y.useState(l.sortDefault||"bestseller"),[g,w]=y.useState({liga:u,team:s,size:"",promoOnly:l.filterPromoOnly||!1,priceMin:"",priceMax:""}),[v,k]=y.useState(!1),[P,x]=y.useState(!0),[p,m]=y.useState(!1),[b,S]=y.useState([]),[C,j]=y.useState([]),[I,_]=y.useState(0);y.useEffect(()=>{w(L=>({...L,team:s,liga:u}))},[s,u]),y.useEffect(()=>{f(l.sortDefault||"bestseller"),w({liga:u,team:s,size:"",promoOnly:l.filterPromoOnly||!1,priceMin:"",priceMax:""})},[i]),y.useEffect(()=>{let L=!0;async function Ce(){x(!0),m(!1);try{const ue={};g.liga&&(ue.liga=g.liga),g.team&&(ue.team=g.team),d.trim()&&(ue.search=d.trim());const ge=await zn.getAll(ue);if(!L)return;j(ge);const T=rf(ge,d),R=tf(T,g,h,i);S(R)}catch(ue){if(!L)return;console.error("Erro ao carregar produtos:",ue),m(!0),S([]),o("Erro ao carregar produtos. Tente novamente.")}finally{L&&x(!1)}}return Ce(),()=>{L=!1}},[I,g.liga,g.team,d]),y.useEffect(()=>{if(C.length===0)return;const L=rf(C,d),Ce=tf(L,g,h,i);S(Ce)},[g,h,i,d,C]);const E=()=>{m(!1),_(L=>L+1)},M=y.useMemo(()=>f5(C),[C]),O=y.useMemo(()=>p5(C),[C]),H=(L,Ce)=>{w(ue=>({...ue,[L]:Ce})),L==="liga"&&n(ue=>{const ge=new URLSearchParams(ue);return Ce?ge.set("liga",Ce):ge.delete("liga"),ge},{replace:!0})};return a.jsxs(U2,{children:[a.jsx(ve,{}),a.jsxs(H2,{children:[a.jsx(V2,{src:l.bannerImage,alt:""}),a.jsx(W2,{}),a.jsxs(G2,{children:[a.jsx(Q2,{children:d.trim()?`Resultados para '${d.trim()}'`:l.title}),a.jsx(q2,{children:l.subtitle})]})]}),a.jsx(Y2,{children:a.jsxs(K2,{children:[a.jsxs(X2,{children:[a.jsxs(l5,{type:"button",onClick:()=>k(L=>!L),"aria-expanded":v,children:["Filtros ",v?"▲":"▼"]}),a.jsxs(s5,{$open:v,children:[a.jsxs(Gn,{children:[a.jsx(Qn,{children:"Coleção"}),a.jsxs(J2,{value:g.liga,onChange:L=>H("liga",L.target.value),"aria-label":"Filtrar por coleção",children:[a.jsx("option",{value:"",children:"Todas"}),O.map(L=>a.jsx("option",{value:L,children:L},L))]})]}),a.jsxs(Gn,{children:[a.jsx(Qn,{children:"Linha"}),a.jsx("div",{children:M.map(L=>a.jsxs(Jd,{children:[a.jsx("input",{type:"radio",name:"team",checked:g.team===L,onChange:()=>H("team",g.team===L?"":L)}),L]},L))})]}),a.jsxs(Gn,{children:[a.jsx(Qn,{children:"Tamanho"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.25rem"},children:u5.map(L=>a.jsx(Z2,{type:"button",className:g.size===L?"active":"",onClick:()=>H("size",g.size===L?"":L),children:L},L))})]}),a.jsxs(Gn,{children:[a.jsx(Qn,{children:"Preço"}),a.jsxs(e5,{children:[a.jsx(Zd,{type:"number",placeholder:"Mín. R$",min:"0",step:"10",value:g.priceMin,onChange:L=>H("priceMin",L.target.value)}),a.jsx(Zd,{type:"number",placeholder:"Máx. R$",min:"0",step:"10",value:g.priceMax,onChange:L=>H("priceMax",L.target.value)})]})]}),!l.filterPromoOnly&&a.jsxs(Gn,{children:[a.jsx(Qn,{children:"Promoção"}),a.jsxs(Jd,{children:[a.jsx("input",{type:"checkbox",checked:g.promoOnly,onChange:L=>H("promoOnly",L.target.checked)}),"Apenas em promoção"]})]})]})]}),a.jsx(t5,{children:p?a.jsx(Fa,{onRetry:E}):a.jsxs(a.Fragment,{children:[!P&&a.jsxs(r5,{children:[a.jsxs(n5,{children:[b.length," produto",b.length!==1?"s":""]}),a.jsxs(o5,{children:[a.jsx(i5,{htmlFor:"plp-sort",children:"Ordenar:"}),a.jsx(a5,{id:"plp-sort",value:h,onChange:L=>f(L.target.value),"aria-label":"Ordenação",children:c5.map(L=>a.jsx("option",{value:L.value,children:L.label},L.value))})]})]}),P?a.jsx(ef,{children:Array.from({length:12},(L,Ce)=>a.jsx(nu,{},`skeleton-${Ce}`))}):a.jsxs(a.Fragment,{children:[a.jsx(ef,{children:b.map(L=>a.jsx(Fo,{name:L.name,price:L.price,originalPrice:L.originalPrice,image:L.image,imageHover:L.imageHover,badge:L.badge,link:L.link,liga:L.liga,freteGratis:L.frete_gratis??L.freteGratis},L.id))}),b.length===0&&a.jsx("p",{style:{textAlign:"center",padding:"3rem",color:"#666"},children:"Nenhum produto encontrado com os filtros selecionados. Tente alterar os filtros."})]})]})})]})}),a.jsx(ye,{})]})}const m5=1e3*60*60*24;function h5(e){if(!e)return 1/0;const t=new Date(e);return Number.isNaN(t.getTime())?1/0:Math.floor((new Date-t)/m5)}function g5(e){return[...e].sort((t,r)=>new Date(r.createdAt||0)-new Date(t.createdAt||0))}function x5(e){const t=g5(e),r=t[0]??null,n=t.slice(1,7),o=new Set([r==null?void 0:r.id,...n.map(u=>u.id)].filter(Boolean)),i=[],l=[],s=[];for(const u of t){if(o.has(u.id))continue;const d=h5(u.createdAt);d<=7?i.push(u):d<=30?l.push(u):s.push(u)}return{sorted:t,spotlight:r,highlights:n,thisWeek:i,thisMonth:l,earlier:s}}function v5(e){return[...new Set(e.map(t=>t.liga).filter(Boolean))].sort((t,r)=>t.localeCompare(r))}const Da=Vt`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,y5=c.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
  background: var(--color-bg);
`,w5=c.header`
  position: relative;
  width: 100%;
  min-height: 240px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 300px;
  }
`,b5=c.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`,j5=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(74, 63, 53, 0.88) 0%,
    rgba(74, 63, 53, 0.55) 50%,
    rgba(155, 115, 73, 0.35) 100%
  );
`,k5=c.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: inherit;
  padding: 2.5rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  animation: ${Da} 0.6s ease-out;

  @media (min-width: 768px) {
    padding: 3.5rem 2rem;
  }
`,S5=c.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
`,C5=c.h1`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`,P5=c.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
  max-width: 480px;
  margin: 0;
`,E5=c.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem 5rem;
  }
`,z5=c.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  animation: ${Da} 0.5s ease-out 0.1s both;
`,I5=c.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin-right: 0.25rem;
`,nf=c.button`
  padding: 0.45rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: var(--font-body);
  color: var(--color-text-muted);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &.active {
    color: #fff;
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  &:hover:not(.active) {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`,Wh=c(se)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  margin-bottom: 2.5rem;
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background: var(--color-surface);
  box-shadow: 0 4px 24px rgba(61, 50, 41, 0.1);
  animation: ${Da} 0.55s ease-out 0.15s both;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(61, 50, 41, 0.14);
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 1fr;
    min-height: 360px;
  }
`,T5=c.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--color-bg);

  @media (min-width: 768px) {
    aspect-ratio: auto;
    min-height: 360px;
  }
`,L5=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`,N5=c.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.75rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  background: var(--color-primary);
  border-radius: 6px;
`,_5=c.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`,R5=c.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`,$5=c.h2`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text);
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.85rem;
  }
`,O5=c.p`
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
`,A5=c.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1.25rem;
`,M5=c.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.65rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border-radius: 24px;
  transition: background 0.2s ease;

  ${Wh}:hover & {
    background: var(--color-primary-hover);
  }
`,Gh=c.section`
  margin-bottom: 3rem;
  animation: ${Da} 0.5s ease-out both;

  &:last-child {
    margin-bottom: 0;
  }
`,Qh=c.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,qh=c.h2`
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text);
`,Yh=c.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
  white-space: nowrap;
`,F5=c.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
  margin-bottom: 2.5rem;
  scrollbar-width: thin;

  & > * {
    flex: 0 0 min(280px, 78vw);
    scroll-snap-align: start;
  }

  @media (min-width: 768px) {
    & > * {
      flex: 0 0 260px;
    }
  }
`,D5=c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`,B5=c.p`
  text-align: center;
  padding: 3rem 1rem;
  color: var(--color-text-muted);
  font-size: 1rem;
`,U5=c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;function H5(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function Vs(e){return e.link||`/produto/${e.id}`}function V5({products:e}){return a.jsx(D5,{children:e.map(t=>a.jsx(Fo,{name:t.name,price:t.price,originalPrice:t.originalPrice,image:t.image,imageHover:t.imageHover,badge:t.badge||"Novo",link:Vs(t),liga:t.liga,freteGratis:t.frete_gratis??t.freteGratis},t.id))})}function wl({title:e,products:t,animationDelay:r}){return t.length===0?null:a.jsxs(Gh,{style:{animationDelay:r??"0s"},children:[a.jsxs(Qh,{children:[a.jsx(qh,{children:e}),a.jsxs(Yh,{children:[t.length," ",t.length===1?"peça":"peças"]})]}),a.jsx(V5,{products:t})]})}function W5(){const{showError:e}=Ao(),[t,r]=y.useState([]),[n,o]=y.useState(""),[i,l]=y.useState(!0),[s,u]=y.useState(!1),[d,h]=y.useState(0);y.useEffect(()=>{let v=!0;async function k(){l(!0),u(!1);try{const P=await zn.getAll();v&&r(P)}catch(P){console.error("Erro ao carregar lançamentos:",P),v&&(u(!0),e("Erro ao carregar lançamentos. Tente novamente."))}finally{v&&l(!1)}}return k(),()=>{v=!1}},[d]);const f=y.useMemo(()=>n?t.filter(v=>v.liga===n):t,[t,n]),g=y.useMemo(()=>x5(f),[f]),w=y.useMemo(()=>v5(t),[t]);return a.jsxs(y5,{children:[a.jsx(ve,{}),a.jsxs(w5,{children:[a.jsx(b5,{src:tu.image,alt:""}),a.jsx(j5,{}),a.jsxs(k5,{children:[a.jsx(S5,{children:"Novidades"}),a.jsx(C5,{children:"Lançamentos"}),a.jsx(P5,{children:"Os modelos que acabaram de chegar — em destaque, por coleção e por data."})]})]}),a.jsx(E5,{children:s?a.jsx(Fa,{onRetry:()=>h(v=>v+1)}):i?a.jsx(U5,{"aria-hidden":"true",children:Array.from({length:8},(v,k)=>a.jsx(nu,{},k))}):f.length===0?a.jsx(B5,{children:n?`Nenhum lançamento na coleção “${n}”.`:"Nenhum lançamento disponível no momento."}):a.jsxs(a.Fragment,{children:[w.length>1&&a.jsxs(z5,{children:[a.jsx(I5,{children:"Coleção:"}),a.jsx(nf,{type:"button",className:n===""?"active":"",onClick:()=>o(""),children:"Todas"}),w.map(v=>a.jsx(nf,{type:"button",className:n===v?"active":"",onClick:()=>o(n===v?"":v),children:v},v))]}),g.spotlight&&a.jsxs(Wh,{to:Vs(g.spotlight),children:[a.jsxs(T5,{children:[a.jsx(L5,{src:g.spotlight.imageHover||g.spotlight.image,alt:g.spotlight.name}),a.jsx(N5,{children:"Destaque"})]}),a.jsxs(_5,{children:[a.jsx(R5,{children:"Último lançamento"}),a.jsx($5,{children:g.spotlight.name}),g.spotlight.liga&&a.jsx(O5,{children:g.spotlight.liga}),a.jsx(A5,{children:H5(g.spotlight.price)}),a.jsx(M5,{children:"Ver detalhes"})]})]}),g.highlights.length>0&&a.jsxs(Gh,{children:[a.jsxs(Qh,{children:[a.jsx(qh,{children:"Em destaque"}),a.jsx(Yh,{children:"Deslize para ver mais"})]}),a.jsx(F5,{children:g.highlights.map(v=>a.jsx(Fo,{name:v.name,price:v.price,originalPrice:v.originalPrice,image:v.image,imageHover:v.imageHover,badge:v.badge||"Novo",link:Vs(v),liga:v.liga,freteGratis:v.frete_gratis??v.freteGratis},v.id))})]}),a.jsx(wl,{title:"Chegou esta semana",products:g.thisWeek,animationDelay:"0.2s"}),a.jsx(wl,{title:"Este mês",products:g.thisMonth,animationDelay:"0.25s"}),a.jsx(wl,{title:"Lançamentos anteriores",products:g.earlier,animationDelay:"0.3s"})]})}),a.jsx(ye,{})]})}const G5=c.nav`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`,Q5=c.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
`,of=c.li`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  &:not(:last-child)::after {
    content: '›';
    color: #9ca3af;
    font-weight: 400;
  }
`,q5=c.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }
`,Y5=c.span`
  color: #1a1a1a;
  font-weight: 500;
`,K5=[{label:"Home",path:"/"},{label:"Produtos",path:"/produtos"}];function X5({items:e=K5,current:t}){return a.jsx(G5,{"aria-label":"Breadcrumb",children:a.jsxs(Q5,{children:[e.map(r=>a.jsx(of,{children:a.jsx(q5,{as:se,to:r.path,children:r.label})},r.path||r.label)),t&&a.jsx(of,{children:a.jsx(Y5,{children:t})})]})})}const J5=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,Kh=c.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`,Z5=c.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${Kh}:hover & {
    transform: scale(1.05);
  }
`,ew=c.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,tw=c.button`
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
`,rw=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function nw({gallery:e=[]}){const[t,r]=y.useState(0),n=e[t]||e[0];return e!=null&&e.length?a.jsxs(J5,{children:[a.jsx(Kh,{children:a.jsx(Z5,{src:n==null?void 0:n.src,alt:(n==null?void 0:n.label)||"Imagem do produto"})}),a.jsx(ew,{children:e.map((o,i)=>a.jsx(tw,{type:"button",$active:t===i,onClick:()=>r(i),"aria-label":o.label,"aria-pressed":t===i,children:a.jsx(rw,{src:o.src,alt:""})},i))})]}):null}const ow=c.div`
  margin-bottom: 1.25rem;
`,iw=c.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`,aw=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,lw=c.button`
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
`,sw=["P","M","G","GG","EG"];function cw({sizeStock:e={},value:t,onChange:r}){const n=sw.filter(o=>e[o]!==void 0);return a.jsxs(ow,{children:[a.jsx(iw,{children:"Tamanho"}),a.jsx(aw,{children:n.map(o=>{const l=(e[o]??0)===0,s=t===o;return a.jsx(lw,{type:"button",$selected:s,$disabled:l,disabled:l,onClick:()=>!l&&r(o),"aria-pressed":s,"aria-label":`Tamanho ${o}${l?", sem estoque":""}`,children:o},o)})})]})}const uw=c.div`
  margin-bottom: 1.25rem;
`,dw=c.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`,fw=c.div`
  display: inline-flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
`,af=c.button`
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
`,pw=c.span`
  min-width: 48px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
`,mw=1,hw=10;function gw({value:e,onChange:t,min:r=mw,max:n=hw}){const o=e>r,i=e<n;return a.jsxs(uw,{children:[a.jsx(dw,{children:"Quantidade"}),a.jsxs(fw,{children:[a.jsx(af,{type:"button",onClick:()=>t(Math.max(r,e-1)),disabled:!o,"aria-label":"Diminuir quantidade",children:"−"}),a.jsx(pw,{"aria-live":"polite",children:e}),a.jsx(af,{type:"button",onClick:()=>t(Math.min(n,e+1)),disabled:!i,"aria-label":"Aumentar quantidade",children:"+"})]})]})}const xw=c.button`
  width: 100%;
  min-height: 48px;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: ${({$disabled:e})=>e?"#9ca3af":"var(--color-primary)"};
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
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`;function vw({disabled:e,onAddToCart:t,children:r="Adicionar ao carrinho"}){const[n,o]=y.useState(!1),i=async()=>{if(!(e||n)){o(!0);try{await(t==null?void 0:t())}finally{o(!1)}}},l=e||n;return a.jsx(xw,{type:"button",$disabled:l,disabled:l,onClick:i,"aria-busy":n,children:n?"Adicionando...":r})}const yw=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e7eb;
`,ww=c.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: #4b5563;
`,bw=c.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #6b7280;
`,jw=c.span`
  font-weight: 500;
  color: #374151;
`,kw=[{icon:"◆",label:"Material",text:"100% Poliéster"},{icon:"✈",label:"Envio",text:"Envio em até 48h"},{icon:"↔",label:"Troca",text:"Troca fácil em até 7 dias"}];function Sw({items:e=kw}){return a.jsx(yw,{children:e.map(t=>a.jsxs(ww,{children:[a.jsx(bw,{"aria-hidden":!0,children:t.icon}),a.jsx(jw,{children:t.text})]},t.label))})}const Cw=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Pw=c.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
`,Ew=c.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`,zw=c.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Iw=c.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #059669;
  line-height: 1.3;
  margin-bottom: 1rem;
  display: block;
`,Tw=c.span`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a1a1a;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,Lw=c.span`
  font-size: 1rem;
  font-weight: 400;
  color: #9ca3af;
  text-decoration: line-through;
`,Nw=c.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
`,_w=c.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,Rw=c.div`
  flex-shrink: 0;
`,$w=c.div`
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
`,Ow=c.span`
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
`;function lf(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function Aw({product:e,selectedSize:t,onSizeChange:r,quantity:n,onQuantityChange:o,onAddToCart:i,maxQuantity:l=10,addedFeedback:s=!1}){const u=(e==null?void 0:e.badge)||"Oficial",d=(e==null?void 0:e.isPromo)&&(e==null?void 0:e.originalPrice),h=d?Uh(e.originalPrice,e.price):null;return a.jsxs(Cw,{children:[a.jsx(Pw,{children:u}),a.jsx(Ew,{children:e==null?void 0:e.name}),a.jsxs(zw,{children:[a.jsx(Tw,{children:lf((e==null?void 0:e.price)??0)}),d&&a.jsxs(a.Fragment,{children:[a.jsx(Lw,{children:lf(e.originalPrice)}),a.jsxs(Nw,{children:["Promoção",h!=null?` -${h}%`:""]})]})]}),((e==null?void 0:e.frete_gratis)??(e==null?void 0:e.freteGratis))&&a.jsx(Iw,{children:"Frete grátis"}),a.jsx(cw,{sizeStock:(e==null?void 0:e.sizeStock)??{},value:t,onChange:r}),a.jsx(_w,{children:a.jsx(Rw,{children:a.jsx(gw,{value:n,onChange:o,min:1,max:l})})}),a.jsxs($w,{children:[a.jsx(vw,{disabled:!t,onAddToCart:i}),s&&a.jsx(Ow,{children:"Adicionado ao carrinho!"})]}),a.jsx(Sw,{items:[...e!=null&&e.liga?[{icon:"🌾",label:"Coleção",text:e.liga}]:[],{icon:"◆",label:"Material",text:(e==null?void 0:e.material)||"100% Poliéster"},{icon:"✈",label:"Envio",text:(e==null?void 0:e.shipping)||"Envio em até 48h"},{icon:"↔",label:"Troca",text:(e==null?void 0:e.exchange)||"Troca fácil em até 7 dias"}]})]})}const Mw=Vt`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,br=c.div`
  background: linear-gradient(
    90deg,
    #eee 0%,
    #f5f5f5 50%,
    #eee 100%
  );
  background-size: 200% 100%;
  animation: ${Mw} 1.2s ease-in-out infinite;
  border-radius: 4px;
`,Fw=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    align-items: start;
  }
`,Dw=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,Bw=c(br)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
`,Uw=c.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,Hw=c(br)`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 6px;
`,Vw=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`,Ww=c(br)`
  height: 14px;
  width: 60px;
  margin-bottom: 0.5rem;
`,Gw=c(br)`
  height: 28px;
  width: 85%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    height: 32px;
  }
`,Qw=c(br)`
  height: 32px;
  width: 140px;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    height: 36px;
  }
`,qw=c(br)`
  height: 14px;
  width: 80px;
  margin-bottom: 0.5rem;
`,Yw=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`,Kw=c(br)`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`,Xw=c(br)`
  height: 48px;
  width: 100%;
  max-width: 280px;
  margin-top: 0.5rem;
  border-radius: 8px;
`,Jw=3,Zw=5;function e4(){return a.jsxs(Fw,{"aria-hidden":!0,children:[a.jsxs(Dw,{children:[a.jsx(Bw,{}),a.jsx(Uw,{children:Array.from({length:Jw},(e,t)=>a.jsx(Hw,{},`thumb-${t}`))})]}),a.jsxs(Vw,{children:[a.jsx(Ww,{}),a.jsx(Gw,{}),a.jsx(Qw,{}),a.jsx(qw,{}),a.jsx(Yw,{children:Array.from({length:Zw},(e,t)=>a.jsx(Kw,{},`chip-${t}`))}),a.jsx(Xw,{})]})]})}const ai=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
`,li=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,t4=c.div`
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
`,r4=c.div``,n4=c.div`
  min-width: 0;
`,o4=c.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`,i4=c.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
`,a4=c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,l4=c.div`
  text-align: center;
  padding: 4rem 1rem;
`,s4=c.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,c4=c.p`
  color: #6b7280;
  margin-bottom: 1rem;
`,u4=c(se)`
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,d4=4;function f4(e){if(!e)return[{label:"Home",path:"/"},{label:"Produtos",path:"/produtos"}];const t=e.liga||"Produtos";return[{label:"Home",path:"/"},{label:"Produtos",path:"/produtos"},{label:t,path:`/produtos?liga=${encodeURIComponent(t)}`}]}function p4(){const{id:e}=Wc(),t=Ht(),{addItem:r}=La(),{showError:n}=Ao(),[o,i]=y.useState(null),[l,s]=y.useState([]),[u,d]=y.useState(!0),[h,f]=y.useState(!1),[g,w]=y.useState(0),[v,k]=y.useState(null),[P,x]=y.useState(1),[p,m]=y.useState(!1);y.useEffect(()=>{let j=!0;async function I(){d(!0),f(!1);try{const[_,E]=await Promise.all([zn.getById(e),zn.getAll()]);if(!j)return;i(_);const M=E.filter(O=>O.id!==(_==null?void 0:_.id)&&(O.liga===(_==null?void 0:_.liga)||O.category===(_==null?void 0:_.category))).slice(0,d4);s(M)}catch(_){if(!j)return;console.error("Erro ao carregar produto:",_),f(!0),i(null),_.status!==404&&n("Erro ao carregar produto. Tente novamente.")}finally{j&&d(!1)}}return I(),()=>{j=!1}},[e,g,n]);const b=()=>{f(!1),w(j=>j+1)},S=!v||!(o!=null&&o.sizeStock)?10:Math.min(10,o.sizeStock[v]||1);y.useEffect(()=>{P>S&&x(S)},[S,P]);const C=async()=>{var j,I;await new Promise(_=>setTimeout(_,600)),r({productId:o.id,name:o.name,image:((I=(j=o.gallery)==null?void 0:j[0])==null?void 0:I.src)||o.image,size:v,quantity:P,unitPrice:o.price}),m(!0),t("/carrinho")};return y.useEffect(()=>{if(!p)return;const j=setTimeout(()=>m(!1),2500);return()=>clearTimeout(j)},[p]),u?a.jsxs(ai,{children:[a.jsx(ve,{}),a.jsx(li,{children:a.jsx(e4,{})}),a.jsx(ye,{})]}):h?a.jsxs(ai,{children:[a.jsx(ve,{}),a.jsx(li,{children:a.jsx(Fa,{onRetry:b})}),a.jsx(ye,{})]}):o?a.jsxs(ai,{children:[a.jsx(ve,{}),a.jsxs(li,{children:[a.jsx(X5,{items:f4(o),current:o.name}),a.jsxs(t4,{children:[a.jsx(r4,{children:a.jsx(nw,{gallery:o.gallery})}),a.jsx(n4,{children:a.jsx(Aw,{product:o,selectedSize:v,onSizeChange:k,quantity:P,onQuantityChange:x,onAddToCart:C,maxQuantity:S,addedFeedback:p})})]}),l.length>0&&a.jsxs(o4,{children:[a.jsx(i4,{children:"Você também pode gostar"}),a.jsx(a4,{children:l.map(j=>a.jsx(Fo,{name:j.name,price:j.price,originalPrice:j.originalPrice,image:j.image,imageHover:j.imageHover,badge:j.badge,link:j.link,liga:j.liga},j.id))})]})]}),a.jsx(ye,{})]}):a.jsxs(ai,{children:[a.jsx(ve,{}),a.jsx(li,{children:a.jsxs(l4,{children:[a.jsx(s4,{children:"Produto não encontrado"}),a.jsx(c4,{children:"O produto que você procura não existe ou foi removido."}),a.jsx(u4,{to:"/produtos",children:"Voltar para a loja"})]})}),a.jsx(ye,{})]})}const Xh=Vt`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,m4=c.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
  background: var(--color-bg);
`,h4=c.header`
  position: relative;
  width: 100%;
  min-height: 260px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 340px;
  }
`,g4=c.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
`,x4=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(74, 63, 53, 0.82) 0%,
    rgba(74, 63, 53, 0.45) 45%,
    rgba(74, 63, 53, 0.15) 100%
  );
`,v4=c.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 260px;
  padding: 2.5rem 1.5rem;
  max-width: 640px;

  @media (min-width: 768px) {
    min-height: 340px;
    padding: 3.5rem 2rem;
    margin-left: max(1.5rem, calc((100vw - 1400px) / 2 + 2rem));
  }
`,y4=c.span`
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
`,w4=c.h1`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.75rem;
  line-height: 1.15;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`,b4=c.p`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
  margin: 0 0 1.25rem;
  max-width: 420px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,j4=c(se)`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 0.7rem 1.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border-radius: 24px;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-1px);
  }
`,k4=c.main`
  flex: 1;
  padding: 2.5rem 0 4rem;

  @media (min-width: 768px) {
    padding: 3rem 0 5rem;
  }
`,S4=c.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,C4=c.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 3.5rem;
  }
`,P4=c(se)`
  display: block;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  border: none;
  box-shadow: 0 2px 16px rgba(61, 50, 41, 0.08);
  text-decoration: none;
  color: inherit;
  margin-bottom: 1.25rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(61, 50, 41, 0.12);
  }

  &:hover img {
    transform: scale(1.04);
  }
`,E4=c.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.5s ease;

  @media (min-width: 768px) {
    aspect-ratio: 21 / 9;
  }
`,z4=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(74, 63, 53, 0.75) 0%,
    rgba(74, 63, 53, 0.2) 45%,
    transparent 100%
  );
`,I4=c.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.25rem 1.5rem;

  @media (min-width: 768px) {
    padding: 1.75rem 2rem;
  }
`,T4=c.h2`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  margin: 0 0 0.35rem;
  line-height: 1.15;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,L4=c.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.92);
  margin: 0 0 0.5rem;
  max-width: 480px;
`,N4=c.span`
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
`,_4=c.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  padding: 0;
  margin: 0;
  list-style: none;
`,R4=c(se)`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }
`;c.p`
  text-align: center;
  padding: 3rem 1rem;
  font-family: var(--font-body);
  color: var(--color-text-muted);
`;const $4=c.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,O4=c.div`
  border-radius: 14px;
  overflow: hidden;
  border: none;
  background: var(--color-surface);
`,A4=c.div`
  aspect-ratio: 4 / 3;
  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    #ede4d8 50%,
    var(--color-bg) 100%
  );
  background-size: 200% 100%;
  animation: ${Xh} 1.4s ease-in-out infinite;
`,M4=c.div`
  height: 14px;
  margin: 1rem;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    #ede4d8 50%,
    var(--color-bg) 100%
  );
  background-size: 200% 100%;
  animation: ${Xh} 1.4s ease-in-out infinite;

  &:last-child {
    width: 60%;
    margin-top: 0.5rem;
  }
`;function F4(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-")}function sf(e){var r;const t={};for(const n of e){if(!((r=n.category)!=null&&r.startsWith("chapeus")))continue;const o=(n.liga||"").trim();o&&(t[o]||(t[o]=[]),`${o}${n.team}`,!t[o].some(i=>i.name===n.team)&&t[o].push({name:n.team,link:`/produtos?time=${encodeURIComponent(n.team)}`}))}return qv.map(n=>{const o=Yv[n];return{id:F4(n),name:n,image:(o==null?void 0:o.image)??null,categoryLink:(o==null?void 0:o.link)??`/produtos?liga=${encodeURIComponent(n)}`,description:(o==null?void 0:o.description)??"",lines:(t[n]||[]).sort((i,l)=>i.name.localeCompare(l.name))}})}function D4(){return a.jsx($4,{"aria-hidden":"true",children:Array.from({length:3},(e,t)=>a.jsxs(O4,{children:[a.jsx(A4,{}),a.jsx(M4,{})]},t))})}function B4(){const[e,t]=y.useState([]),[r,n]=y.useState(!0);return y.useEffect(()=>{let o=!0;async function i(){try{const l=await zn.getAll();if(!o)return;t(sf(l))}catch(l){console.error("Erro ao carregar coleções:",l),t(sf([]))}finally{o&&n(!1)}}return i(),()=>{o=!1}},[]),a.jsxs(m4,{children:[a.jsx(ve,{}),a.jsxs(h4,{children:[a.jsx(g4,{src:tu.image,alt:"Chapéus country Glamour Country"}),a.jsx(x4,{}),a.jsxs(v4,{children:[a.jsx(y4,{children:"Glamour Country"}),a.jsx(w4,{children:"Nossa coleção"}),a.jsx(b4,{children:"Chapéus femininos por estilo country. Escolha a classificação e encontre o seu modelo."}),a.jsx(j4,{to:"/produtos",children:"Ver todos os chapéus"})]})]}),a.jsx(k4,{children:a.jsx(S4,{children:r?a.jsx(D4,{}):e.map(o=>a.jsxs(C4,{id:`coleção-${o.id}`,"aria-labelledby":`titulo-${o.id}`,children:[a.jsxs(P4,{to:o.categoryLink,children:[o.image&&a.jsx(E4,{src:o.image,alt:`Chapéus ${o.name}`}),a.jsx(z4,{}),a.jsxs(I4,{children:[a.jsx(T4,{id:`titulo-${o.id}`,children:o.name}),o.description&&a.jsx(L4,{children:o.description}),a.jsx(N4,{children:"Ver coleção →"})]})]}),o.lines.length>0&&a.jsx(_4,{"aria-label":`Linhas ${o.name}`,children:o.lines.map(i=>a.jsx("li",{children:a.jsx(R4,{to:i.link,children:i.name})},i.name))})]},o.id))})}),a.jsx(ye,{})]})}const U4=c.div`
  display: inline-flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
`,cf=c.button`
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
`,H4=c.span`
  min-width: 40px;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
`;function V4({value:e,onChange:t,min:r=1,max:n=99,"aria-label":o="Quantidade"}){const i=e>r,l=e<n;return a.jsxs(U4,{role:"group","aria-label":o,children:[a.jsx(cf,{type:"button",onClick:()=>t(Math.max(r,e-1)),disabled:!i,"aria-label":"Diminuir quantidade",children:"−"}),a.jsx(H4,{"aria-live":"polite",children:e}),a.jsx(cf,{type:"button",onClick:()=>t(Math.min(n,e+1)),disabled:!l,"aria-label":"Aumentar quantidade",children:"+"})]})}const W4=c.article`
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
`,G4=c.a`
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
`,Q4=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,q4=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
`,Y4=c.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
  word-break: break-word;
`,K4=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`,X4=c.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #374151;
`,J4=c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,Z4=c.div`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: right;

  @media (min-width: 640px) {
    min-width: 80px;
    text-align: right;
  }
`,eb=c.button`
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
    color: var(--color-primary);
    background: rgba(166, 124, 82, 0.08);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`,tb=c.div`
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
`;function uf(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const rb=()=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),a.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),a.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),a.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]});function nb({item:e,onUpdateQuantity:t,onRemove:r}){const[n,o]=y.useState(!1),i=e.unitPrice*e.quantity;y.useEffect(()=>{if(!n)return;const s=setTimeout(()=>o(!1),3e3);return()=>clearTimeout(s)},[n]);const l=()=>{n?(r==null||r(e.productId,e.size),o(!1)):o(!0)};return a.jsxs(W4,{children:[a.jsx(G4,{as:se,to:`/produto/${e.productId}`,children:a.jsx(Q4,{src:e.image,alt:e.name})}),a.jsxs(q4,{children:[a.jsx(Y4,{children:e.name}),a.jsxs(K4,{children:["Tamanho: ",e.size]}),a.jsx(X4,{children:uf(e.unitPrice)})]}),a.jsx(J4,{children:a.jsx(V4,{value:e.quantity,onChange:s=>t==null?void 0:t(e.productId,e.size,s),min:1,max:99,"aria-label":`Quantidade de ${e.name}`})}),a.jsx(Z4,{children:uf(i)}),a.jsxs(tb,{children:[a.jsx(eb,{type:"button",onClick:l,"aria-label":n?"Clique novamente para remover":"Remover item",title:n?"Clique novamente para remover":"Remover",children:a.jsx(rb,{})}),n&&a.jsx("span",{style:{fontSize:"0.75rem",color:"var(--color-primary)",fontWeight:600},children:"Clique de novo para remover"})]})]})}const ob=c.aside`
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
`,ib=c.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,Ws=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`,ab=c(Ws)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 1rem;
`,lb=c.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 1rem;
`,sb=c.button`
  width: 100%;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
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
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`;function df(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const cb=0;function ub({subtotal:e,itemCount:t,onCheckout:r}){const o=e+cb;return a.jsxs(ob,{children:[a.jsx(ib,{children:"Resumo do pedido"}),a.jsxs(Ws,{children:[a.jsxs("span",{children:["Subtotal (",t," ",t===1?"item":"itens",")"]}),a.jsx("span",{children:df(e)})]}),a.jsxs(Ws,{children:[a.jsx("span",{children:"Frete"}),a.jsx("span",{children:"Calculado no checkout"})]}),a.jsx(lb,{children:"O valor do frete será calculado na próxima etapa."}),a.jsxs(ab,{children:[a.jsx("span",{children:"Total"}),a.jsx("span",{children:df(o)})]}),a.jsx(sb,{type:"button",disabled:t===0,onClick:r,"aria-label":"Finalizar compra",children:"Finalizar compra"})]})}const db=c.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem;
  min-height: 320px;
`,fb=c.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #d1d5db;
  margin-bottom: 1.25rem;
`,pb=c.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,mb=c.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  max-width: 280px;
`,hb=c(se)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #a01930;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,gb=()=>a.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}),a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]});function xb(){return a.jsxs(db,{children:[a.jsx(fb,{"aria-hidden":!0,children:a.jsx(gb,{})}),a.jsx(pb,{children:"Seu carrinho está vazio"}),a.jsx(mb,{children:"Adicione chapéus e acessórios ao carrinho e finalize quando quiser."}),a.jsx(hb,{to:"/produtos",children:"Voltar para a loja"})]})}const vb=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,yb=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,wb=c.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,bb=c.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,jb=c.a`
  font-size: 0.9375rem;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;
  align-self: flex-start;

  &:hover {
    color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,kb=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 340px;
    gap: 2rem;
  }
`,Sb=c.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
`,Cb=c.div`
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
`;function Pb(){const e=Ht(),{items:t,itemCount:r,subtotal:n,updateQuantity:o,removeItem:i}=La(),l=()=>{r!==0&&e("/checkout")};return a.jsxs(vb,{children:[a.jsx(ve,{}),a.jsxs(yb,{children:[a.jsxs(wb,{children:[a.jsx(bb,{children:"Meu Carrinho"}),a.jsx(jb,{as:se,to:"/produtos",children:"Continuar comprando"})]}),t.length===0?a.jsx(xb,{}):a.jsxs(kb,{children:[a.jsx(Sb,{children:t.map(s=>a.jsx(nb,{item:s,onUpdateQuantity:o,onRemove:i},`${s.productId}-${s.size}`))}),a.jsx(Cb,{children:a.jsx(ub,{subtotal:n,itemCount:r,onCheckout:l})})]})]}),a.jsx(ye,{})]})}const Eb="http://localhost:8080",zb=3e4;class Gr extends Error{constructor(t,r,n){super(t),this.name="ApiError",this.status=r,this.data=n}}function Ib(e){const t=new AbortController,r=setTimeout(()=>t.abort(),e);return{signal:t.signal,clearTimeout:()=>clearTimeout(r)}}async function qn(e,t={}){const{timeout:r=zb,...n}=t,o=`${Eb}${e}`,i=Ib(r);try{const l=await fetch(o,{...n,signal:i.signal,headers:{"Content-Type":"application/json",...n.headers}});if(i.clearTimeout(),!l.ok){let u=null;try{u=await l.json()}catch{u={message:await l.text()}}const d=(u==null?void 0:u.message)||`Erro ${l.status}`;throw new Gr(d,l.status,u)}return l.status===204?null:await l.json()}catch(l){throw i.clearTimeout(),l.name==="AbortError"?new Gr("Tempo limite de requisição excedido",408,null):l instanceof TypeError&&l.message.includes("fetch")?new Gr("Erro de conexão. Verifique sua internet.",0,null):l instanceof Gr?l:new Gr("Erro inesperado",500,{originalError:l.message})}}const $n={get:(e,t={})=>qn(e,{...t,method:"GET"}),post:(e,t,r={})=>qn(e,{...r,method:"POST",body:JSON.stringify(t)}),put:(e,t,r={})=>qn(e,{...r,method:"PUT",body:JSON.stringify(t)}),patch:(e,t,r={})=>qn(e,{...r,method:"PATCH",body:JSON.stringify(t)}),delete:(e,t={})=>qn(e,{...t,method:"DELETE"})};async function Tb(){return{mercadopagoPublicKey:(await $n.get("/api/config")).mercadopagoPublicKey}}async function Lb(e){try{const t={customer:{name:e.customer.name,email:e.customer.email,cpf:String(e.customer.cpf).replace(/\D/g,"")},address:{cep:String(e.address.cep).replace(/\D/g,""),rua:e.address.rua,numero:e.address.numero,complemento:e.address.complemento||"",cidade:e.address.cidade,estado:e.address.estado},items:e.items.map(n=>({productId:n.productId,size:n.size,quantity:n.quantity,unitPrice:Number(n.unitPrice)})),total:Number(e.total)},r=await $n.post("/api/orders",t);return{orderId:r.orderId||r.id,status:r.status||"PAYMENT_PENDING",checkoutUrl:r.checkoutUrl??null,preferenceId:r.preferenceId??null,total:r.total??e.total}}catch(t){throw console.error("[OrderService] Erro ao criar pedido:",t),t}}function Nb(e,t=!1){var n,o;const r={email:e.email,name:e.name||void 0,identification:{type:((n=e.identification)==null?void 0:n.type)||"CPF",number:String(((o=e.identification)==null?void 0:o.number)??"").replace(/\D/g,"")}};return t&&e.address&&(r.address={rua:e.address.rua,numero:String(e.address.numero??""),cep:String(e.address.cep??"").replace(/\D/g,""),cidade:e.address.cidade,estado:e.address.estado}),r}async function _b(e,t){const r=t.payment_method_id,n=r&&r!=="pix"&&r!=="bolbradesco",o={payment_method_id:r,payer:Nb(t.payer,r==="bolbradesco")};n&&t.token&&(o.token=t.token,o.installments=Number(t.installments??1),t.issuer_id!=null&&t.issuer_id!==""&&(o.issuer_id=String(t.issuer_id)));const i=await $n.post(`/api/orders/${encodeURIComponent(e)}/payments`,o);return{paymentId:i.paymentId,status:i.status,statusDetail:i.statusDetail,orderId:i.orderId??e,qrCodeBase64:i.qrCodeBase64,qrCode:i.qrCode,ticketUrl:i.ticketUrl}}async function Rb(e,t){const r=await $n.get(`/api/orders/${encodeURIComponent(e)}/payments/${encodeURIComponent(t)}`);return{updated:!!r.updated,status:r.status}}async function $b(e,t){const r=new URLSearchParams({email:e.trim(),code:t.trim()}),n=await $n.get(`/api/orders/lookup?${r.toString()}`);return{...n,orderCode:n.orderId??n.orderCode}}async function Ob(e){const t=String(e??"").replace(/\D/g,""),r=new URLSearchParams({cpf:t}),n=await $n.get(`/api/orders/by-cpf?${r.toString()}`);return Array.isArray(n)?n:(n==null?void 0:n.orders)??[]}const Tt={getConfig:Tb,createOrder:Lb,createPayment:_b,getPaymentStatus:Rb,lookupOrder:$b,getOrdersByCpf:Ob},Ab="https://sdk.mercadopago.com/js/v2";let si=null;function Mb(){return typeof window>"u"?Promise.reject(new Error("Mercado Pago SDK só pode ser carregado no browser")):window.MercadoPago?Promise.resolve(window.MercadoPago):si||(si=new Promise((e,t)=>{const r=document.createElement("script");r.src=Ab,r.async=!0,r.onload=()=>{window.MercadoPago?e(window.MercadoPago):t(new Error("Mercado Pago SDK não disponível após carregar o script"))},r.onerror=()=>t(new Error("Falha ao carregar o SDK do Mercado Pago")),document.head.appendChild(r)}),si)}async function Fb(e,t,r){var s,u,d,h;const n=await Mb(),l=await new n(e,{locale:"pt-BR"}).bricks().create("cardPayment",t,{initialization:{amount:((s=r.initialization)==null?void 0:s.amount)??0},callbacks:{onReady:((u=r.callbacks)==null?void 0:u.onReady)??(()=>{}),onSubmit:((d=r.callbacks)==null?void 0:d.onSubmit)??(()=>Promise.resolve()),onError:((h=r.callbacks)==null?void 0:h.onError)??(f=>console.error("[CardPaymentBrick]",f))}});return{unmount:()=>{l&&typeof l.unmount=="function"&&l.unmount()}}}const Db=c.aside`
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
`,Bb=c.button`
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
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    cursor: default;
    pointer-events: none;
    border-bottom: 1px solid #e5e7eb;
    min-height: 0;
  }
`,Ub=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({$open:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;

  @media (min-width: 768px) {
    display: none;
  }
`,Hb=c.div`
  padding: 0 1.25rem 1.25rem;
  max-height: ${({$open:e})=>e?"800px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;

  @media (min-width: 768px) {
    max-height: none;
    padding: 1.25rem;
  }
`,Vb=c.ul`
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
`,Wb=c.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: #374151;
`,Gb=c.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`,Qb=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,qb=c.div`
  flex: 1;
  min-width: 0;
`,Yb=c.span`
  display: block;
  font-weight: 500;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Kb=c.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,Xb=c.span`
  font-weight: 600;
  color: #1a1a1a;
  flex-shrink: 0;
`,Gs=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`,Jb=c(Gs)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 0;
`,Zb=c.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 0.5rem;
`;function bl(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const ej=()=>a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"m6 9 6 6 6-6"})}),tj=0;function rj({items:e,subtotal:t}){const[r,n]=y.useState(!1),i=t+tj;return a.jsxs(Db,{children:[a.jsxs(Bb,{type:"button",onClick:()=>n(l=>!l),"aria-expanded":r,children:[a.jsx("span",{children:"Resumo do pedido"}),a.jsx(Ub,{$open:r,children:a.jsx(ej,{})})]}),a.jsxs(Hb,{$open:r,children:[a.jsx(Vb,{children:e.map(l=>a.jsxs(Wb,{children:[a.jsx(Gb,{children:a.jsx(Qb,{src:l.image,alt:l.name})}),a.jsxs(qb,{children:[a.jsx(Yb,{children:l.name}),a.jsxs(Kb,{children:["Tamanho ",l.size," · ",l.quantity,"x"]})]}),a.jsx(Xb,{children:bl(l.unitPrice*l.quantity)})]},`${l.productId}-${l.size}`))}),a.jsxs(Gs,{children:[a.jsxs("span",{children:["Subtotal (",e.reduce((l,s)=>l+s.quantity,0)," itens)"]}),a.jsx("span",{children:bl(t)})]}),a.jsxs(Gs,{children:[a.jsx("span",{children:"Frete"}),a.jsx("span",{children:"Calculado no checkout"})]}),a.jsx(Zb,{children:"O valor do frete será calculado na próxima etapa."}),a.jsxs(Jb,{children:[a.jsx("span",{children:"Total"}),a.jsx("span",{children:bl(i)})]})]})]})}const nj=Vt`
  to { transform: rotate(360deg); }
`,oj=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,ij=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,aj=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 360px;
    gap: 2rem;
  }
`,lj=c.div`
  min-width: 0;
`,jl=c.section`
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
`,kl=c.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1.25rem;
`,ff=c.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Ve=c.p`
  font-size: 0.9375rem;
  color: #4b5563;
  margin: 0 0 0.75rem;
  line-height: 1.5;
`,jt=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,kt=c.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,St=c.input`
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
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(166, 124, 82, 0.15);
  }

  &:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`,pf=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,Kt=c.button`
  width: 100%;
  min-height: 48px;
  height: 52px;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
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
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,Sl=c.span`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${nj} 0.75s linear infinite;
  flex-shrink: 0;
`,sj=c.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  min-height: 44px;
  border: 2px solid ${({$selected:e})=>e?"var(--color-primary)":"#e5e7eb"};
  border-radius: 8px;
  cursor: pointer;
  background: ${({$selected:e})=>e?"rgba(166, 124, 82, 0.04)":"#fff"};
  transition: border-color 0.2s, background 0.2s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({$selected:e})=>e?"var(--color-primary)":"#d1d5db"};
  }
`,cj=c.input`
  width: 20px;
  height: 20px;
  accent-color: var(--color-primary);
`,uj=c.div`
  @media (max-width: 767px) {
    order: -1;
  }
`,dj=c.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,fj=c.span`
  display: flex;
  gap: 0.5rem;
`,pj=c.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$active:e})=>e?"var(--color-primary)":"#e5e7eb"};
  transition: background 0.2s;
`,mj=c.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
`,hj=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`,gj=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin: 1rem 0;
`,xj=c.img`
  display: block;
  width: 200px;
  height: 200px;
  object-fit: contain;
  background: #fff;
  border-radius: 4px;
`,mf=c.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,vj=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,yj=c.input`
  width: 100%;
  min-height: 44px;
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  font-family: monospace;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;
`,wj=c.button`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  background: #fff;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--color-primary);
    color: #fff;
  }
`,hf=c.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #a01930;
  }
`,ci="artilheiro-checkout-success",gf="cardPaymentBrick_container",bj=[{id:"card",label:"Cartão de crédito ou débito",value:"card"},{id:"pix",label:"PIX",value:"pix"},{id:"boleto",label:"Boleto bancário",value:"boleto"}],jj=[{id:1,title:"Dados pessoais"},{id:2,title:"Endereço"},{id:3,title:"Pagamento"}];function xf(e){const t=(e.nome||"").trim(),r=(e.email||"").trim(),n=(e.cpf||"").trim();return t.length>=3&&r.includes("@")&&n.length>=11}function vf(e){const t=(e.cep||"").trim(),r=(e.rua||"").trim(),n=(e.numero||"").trim(),o=(e.cidade||"").trim(),i=(e.estado||"").trim();return t.length>=8&&r.length>=3&&n.length>=1&&o.length>=2&&i.length>=2}function kj(e,t,r){return{customer:{name:e.nome,email:e.email,cpf:e.cpf},address:{cep:e.cep,rua:e.rua,numero:e.numero,complemento:e.complemento,cidade:e.cidade,estado:e.estado},items:t.map(n=>({productId:n.productId,size:n.size,quantity:n.quantity,unitPrice:n.unitPrice})),total:r}}function Sj(){const e=Ht(),{items:t,subtotal:r,itemCount:n,clearCart:o}=La(),{showError:i,showSuccess:l}=Ao(),[s,u]=y.useState(1),[d,h]=y.useState({nome:"",email:"",cpf:"",cep:"",rua:"",numero:"",complemento:"",cidade:"",estado:""}),[f,g]=y.useState(null),[w,v]=y.useState(null),[k,P]=y.useState(!1),[x,p]=y.useState(null),[m,b]=y.useState(null),[S,C]=y.useState("card"),[j,I]=y.useState(!1),[_,E]=y.useState(null),M=y.useRef(null),[O,H]=y.useState(null),[L,Ce]=y.useState(!1),[ue,ge]=y.useState(null),[T,R]=y.useState(!1);y.useEffect(()=>{n===0&&e("/carrinho",{replace:!0})},[n,e]),y.useEffect(()=>{if(s!==3||f||k||n===0)return;p(null),P(!0);const A=kj(d,t,r);Promise.all([Tt.createOrder(A),Tt.getConfig().catch(()=>({mercadopagoPublicKey:"TEST-97f82dbb-2289-4d20-8e9b-bf6d36316387"}))]).then(([$,V])=>{g($.orderId),v($.total),b((V==null?void 0:V.mercadopagoPublicKey)||"TEST-97f82dbb-2289-4d20-8e9b-bf6d36316387")}).catch($=>{console.error("Erro ao criar pedido:",$),p($.message||"Não foi possível criar o pedido. Tente novamente.")}).finally(()=>{P(!1)})},[s,f,k,d,t,r,n]),y.useEffect(()=>{if(s!==3||S!=="card"||!f||!m||r<=0)return;let A=!0;return E(null),I(!1),Fb(m,gf,{initialization:{amount:r},callbacks:{onReady:()=>{A&&I(!0)},onSubmit:$=>{const V=$.token,mt=$.paymentMethodId??$.payment_method_id,Fr=$.installments??1,Gt=$.issuerId??$.issuer_id;if(!V||!mt)return Promise.reject(new Error("Dados do cartão incompletos."));const Zh={token:V,payment_method_id:mt,installments:Fr,issuer_id:Gt,payer:{email:d.email.trim(),name:d.nome.trim(),identification:{type:"CPF",number:String(d.cpf).replace(/\D/g,"")}}};return Tt.createPayment(f,Zh).then($e=>{var Dr,On,Do,au;if($e.status==="approved"){l("Pagamento aprovado! Redirecionando...");try{sessionStorage.setItem(ci,JSON.stringify({orderId:$e.orderId,total:w??r,email:((On=(Dr=d.email)==null?void 0:Dr.trim)==null?void 0:On.call(Dr))??""}))}catch{}o(),e("/checkout/sucesso",{replace:!0});return}if($e.status==="pending"){l("Pagamento em análise. Você receberá a confirmação em breve.");try{sessionStorage.setItem(ci,JSON.stringify({orderId:$e.orderId,total:w??r,email:((au=(Do=d.email)==null?void 0:Do.trim)==null?void 0:au.call(Do))??""}))}catch{}o(),e("/checkout/sucesso",{replace:!0});return}return i($e.statusDetail||"Pagamento recusado. Tente outro cartão ou forma de pagamento."),Promise.reject(new Error($e.statusDetail||"Pagamento recusado"))}).catch($e=>{var On;const Dr=($e==null?void 0:$e.message)||((On=$e==null?void 0:$e.data)==null?void 0:On.message)||"Erro ao processar pagamento. Tente novamente.";return i(Dr),Promise.reject($e)})},onError:$=>{console.error("[CardPaymentBrick]",$),A&&E(($==null?void 0:$.message)||"Erro no formulário de pagamento.")}}}).then($=>{A&&(M.current=$)}).catch($=>{console.error("Erro ao carregar formulário de pagamento:",$),A&&E(($==null?void 0:$.message)||"Não foi possível carregar o formulário de pagamento.")}),()=>{var $;A=!1,($=M.current)!=null&&$.unmount&&(M.current.unmount(),M.current=null),I(!1)}},[s,f,m,r,S]);const F=O==null?void 0:O.paymentId,q=y.useRef(d.email);q.current=d.email,y.useEffect(()=>{if(!F||!f)return;const $=setInterval(()=>{Tt.getPaymentStatus(f,F).then(({updated:V})=>{V&&(o(),l("Pagamento confirmado!"),e("/checkout/sucesso",{replace:!0,state:{fromPix:!0,email:(q.current||"").trim(),orderCode:f}}))}).catch(()=>{})},4e3);return()=>clearInterval($)},[f,F,o,e,l]);const Y=()=>({email:d.email.trim(),name:d.nome.trim(),identification:{type:"CPF",number:String(d.cpf).replace(/\D/g,"")}}),wt=()=>{!f||L||(Ce(!0),H(null),Tt.createPayment(f,{payment_method_id:"pix",payer:Y()}).then(A=>{var $,V;H({paymentId:A.paymentId,qrCodeBase64:A.qrCodeBase64,qrCode:A.qrCode,ticketUrl:A.ticketUrl});try{sessionStorage.setItem(ci,JSON.stringify({orderId:A.orderId,total:w??r,email:((V=($=d.email)==null?void 0:$.trim)==null?void 0:V.call($))??""}))}catch{}}).catch(A=>{var $;i((A==null?void 0:A.message)||(($=A==null?void 0:A.data)==null?void 0:$.message)||"Erro ao gerar PIX. Tente novamente.")}).finally(()=>Ce(!1)))},Ue=()=>{!f||T||(R(!0),ge(null),Tt.createPayment(f,{payment_method_id:"bolbradesco",payer:{...Y(),address:{rua:d.rua.trim(),numero:String(d.numero??"").trim(),cep:String(d.cep).replace(/\D/g,""),cidade:d.cidade.trim(),estado:d.estado.trim()}}}).then(A=>{var $,V;ge({ticketUrl:A.ticketUrl});try{sessionStorage.setItem(ci,JSON.stringify({orderId:A.orderId,total:w??r,email:((V=($=d.email)==null?void 0:$.trim)==null?void 0:V.call($))??""}))}catch{}}).catch(A=>{var $;i((A==null?void 0:A.message)||(($=A==null?void 0:A.data)==null?void 0:$.message)||"Erro ao gerar boleto. Tente novamente.")}).finally(()=>R(!1)))},bt=()=>{o(),e("/checkout/sucesso",{replace:!0})},He=()=>{var A;O!=null&&O.qrCode&&((A=navigator.clipboard)==null||A.writeText(O.qrCode).then(()=>l("Código PIX copiado!")))},be=A=>{const{name:$,value:V}=A.target;h(mt=>({...mt,[$]:V}))},Mr=A=>{A.preventDefault(),xf(d)&&u(2)},Wt=A=>{A.preventDefault(),vf(d)&&u(3)};return n===0?null:a.jsxs(oj,{children:[a.jsx(ve,{}),a.jsx(ij,{children:a.jsxs(aj,{children:[a.jsxs(lj,{children:[a.jsxs(dj,{"aria-label":`Passo ${s} de 3`,children:[a.jsx(fj,{children:jj.map(A=>a.jsx(pj,{$active:s>=A.id,"aria-hidden":!0},A.id))}),a.jsxs(mj,{children:["Passo ",s," de 3"]})]}),s===1&&a.jsxs(jl,{children:[a.jsx(kl,{children:"Dados pessoais"}),a.jsxs(ff,{onSubmit:Mr,children:[a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"nome",children:"Nome completo"}),a.jsx(St,{id:"nome",name:"nome",type:"text",placeholder:"Seu nome completo",value:d.nome,onChange:be,required:!0,minLength:3})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"email",children:"Email"}),a.jsx(St,{id:"email",name:"email",type:"email",placeholder:"seu@email.com",value:d.email,onChange:be,required:!0})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"cpf",children:"CPF"}),a.jsx(St,{id:"cpf",name:"cpf",type:"text",inputMode:"numeric",placeholder:"000.000.000-00",value:d.cpf,onChange:be,required:!0,minLength:11})]}),a.jsx(Kt,{type:"submit",disabled:!xf(d),children:"Continuar"})]})]}),s===2&&a.jsxs(jl,{children:[a.jsx(kl,{children:"Endereço"}),a.jsxs(ff,{onSubmit:Wt,children:[a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"cep",children:"CEP"}),a.jsx(St,{id:"cep",name:"cep",type:"text",inputMode:"numeric",autoComplete:"postal-code",placeholder:"00000-000",value:d.cep,onChange:be,required:!0})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"rua",children:"Rua"}),a.jsx(St,{id:"rua",name:"rua",type:"text",placeholder:"Nome da rua",value:d.rua,onChange:be,required:!0})]}),a.jsxs(pf,{children:[a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"numero",children:"Número"}),a.jsx(St,{id:"numero",name:"numero",type:"text",inputMode:"numeric",placeholder:"Nº",value:d.numero,onChange:be,required:!0})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"complemento",children:"Complemento"}),a.jsx(St,{id:"complemento",name:"complemento",type:"text",placeholder:"Apto, bloco",value:d.complemento,onChange:be})]})]}),a.jsxs(pf,{children:[a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"cidade",children:"Cidade"}),a.jsx(St,{id:"cidade",name:"cidade",type:"text",placeholder:"Cidade",value:d.cidade,onChange:be,required:!0})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"estado",children:"Estado"}),a.jsx(St,{id:"estado",name:"estado",type:"text",placeholder:"UF",value:d.estado,onChange:be,required:!0,maxLength:2})]})]}),a.jsx(Kt,{type:"submit",disabled:!vf(d),children:"Continuar"})]})]}),s===3&&a.jsxs(jl,{children:[a.jsx(kl,{children:"Pagamento"}),k&&a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Criando seu pedido… Aguarde."}),a.jsxs(Kt,{type:"button",disabled:!0,children:[a.jsx(Sl,{"aria-hidden":!0}),"Processando…"]})]}),x&&!k&&a.jsxs(a.Fragment,{children:[a.jsx(Ve,{role:"alert",style:{color:"#b91c1c"},children:x}),a.jsx(Kt,{type:"button",onClick:()=>{g(null),p(null),P(!1)},children:"Tentar novamente"})]}),!k&&f&&a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Escolha a forma de pagamento."}),a.jsx(hj,{role:"group","aria-label":"Forma de pagamento",children:bj.map(({id:A,label:$,value:V})=>a.jsxs(sj,{$selected:S===V,className:S===V?"selected":"",children:[a.jsx(cj,{type:"radio",name:"paymentMethod",value:V,checked:S===V,onChange:()=>{C(V),H(null),ge(null)},disabled:V==="card"&&!m}),a.jsx("span",{children:$}),V==="card"&&!m&&a.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:" (indisponível)"})]},A))}),S==="card"&&!m&&a.jsx(Ve,{role:"alert",style:{color:"#b91c1c"},children:"Chave do Mercado Pago não configurada. Use PIX ou Boleto ou configure GET /api/config (mercadopagoPublicKey) ou VITE_MERCADOPAGO_PUBLIC_KEY."}),S==="card"&&m&&a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Preencha os dados do cartão abaixo. O pagamento é processado de forma segura pelo Mercado Pago."}),_&&a.jsx(Ve,{role:"alert",style:{color:"#b91c1c",marginBottom:"0.5rem"},children:_}),a.jsx("div",{id:gf,style:{minHeight:j?void 0:280},"aria-busy":!j,"aria-live":"polite"})]}),S==="pix"&&a.jsx(a.Fragment,{children:O?a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Escaneie o QR Code ou copie o código PIX e pague no app do seu banco."}),a.jsxs(gj,{children:[O.qrCodeBase64&&a.jsxs(a.Fragment,{children:[a.jsx(mf,{children:"QR Code"}),a.jsx(xj,{src:`data:image/png;base64,${O.qrCodeBase64}`,alt:"QR Code PIX",width:200,height:200})]}),O.qrCode&&a.jsxs(vj,{children:[a.jsx(mf,{children:"Código PIX (copia e cola)"}),a.jsx(yj,{type:"text",readOnly:!0,value:O.qrCode,"aria-label":"Código PIX para copiar"}),a.jsx(wj,{type:"button",onClick:He,children:"Copiar código"})]})]}),O.ticketUrl&&a.jsx(Ve,{style:{marginTop:"0.5rem"},children:a.jsx(hf,{href:O.ticketUrl,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",marginTop:"0.5rem"},children:"Ver pagamento no Mercado Pago"})}),a.jsx(Ve,{style:{marginTop:"1rem"},children:"Após o pagamento você receberá a confirmação por e-mail."}),a.jsx(Kt,{type:"button",onClick:bt,children:"Ir para página do pedido"})]}):a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Gere o QR Code PIX e pague pelo app do seu banco."}),a.jsxs(Kt,{type:"button",onClick:wt,disabled:L,"aria-busy":L,children:[L&&a.jsx(Sl,{"aria-hidden":!0}),L?"Gerando PIX…":"Gerar QR Code PIX"]})]})}),S==="boleto"&&a.jsx(a.Fragment,{children:ue?a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Abra ou baixe o boleto e pague até o vencimento."}),ue.ticketUrl&&a.jsx(hf,{href:ue.ticketUrl,target:"_blank",rel:"noopener noreferrer",children:"Abrir / Baixar boleto"}),a.jsx(Ve,{style:{marginTop:"1rem"},children:"Após o pagamento você receberá a confirmação por e-mail."}),a.jsx(Kt,{type:"button",onClick:bt,children:"Ir para página do pedido"})]}):a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Gere o boleto e pague em qualquer banco ou lotérica."}),a.jsxs(Kt,{type:"button",onClick:Ue,disabled:T,"aria-busy":T,children:[T&&a.jsx(Sl,{"aria-hidden":!0}),T?"Gerando boleto…":"Gerar boleto"]})]})})]})]})]}),a.jsx(uj,{children:(s===1||s===2||s===3)&&t.length>0&&a.jsx(rj,{items:t,subtotal:r})})]})}),a.jsx(ye,{})]})}const Cl={yellow:{bg:"#fef3c7",text:"#92400e",border:"#f59e0b"},green:{bg:"#d1fae5",text:"#065f46",border:"#10b981"},red:{bg:"#fee2e2",text:"#991b1b",border:"#ef4444"},blue:{bg:"#dbeafe",text:"#1e40af",border:"#3b82f6"},teal:{bg:"#ccfbf1",text:"#0f766e",border:"#14b8a6"}},Cj=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,Pj=c.div`
  padding: 1.5rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  row-gap: 0.5rem;
`,Ej=c.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
`,zj=c.span`
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  background: ${({$variant:e})=>{var t;return((t=Cl[e])==null?void 0:t.bg)||"#f3f4f6"}};
  color: ${({$variant:e})=>{var t;return((t=Cl[e])==null?void 0:t.text)||"#374151"}};
  border: 1px solid ${({$variant:e})=>{var t;return((t=Cl[e])==null?void 0:t.border)||"#e5e7eb"}};
`,Ij=c.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: #fafbfc;
`,Tj=c.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem;
`,Lj=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,Nj=c.li`
  display: flex;
  align-items: flex-start;
  position: relative;
`,_j=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 2px;
`,Rj=c.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 700;
  color: #fff;
  background: ${({$state:e})=>e==="done"?"#22c55e":e==="current"?"#2563eb":"#e5e7eb"};
  border: 2px solid
    ${({$state:e})=>e==="done"?"#22c55e":e==="current"?"#2563eb":"#d1d5db"};
  box-sizing: border-box;
  z-index: 1;
`,$j=c.span`
  width: 2px;
  min-height: 28px;
  flex: 1;
  background: ${({$done:e})=>e?"#22c55e":"#e5e7eb"};
  margin: 2px 0 0;
`,Oj=c.div`
  margin-left: 12px;
  padding-bottom: 4px;
  min-width: 0;
`,Aj=c.span`
  font-size: 0.875rem;
  font-weight: ${({$active:e})=>e?600:400};
  color: ${({$active:e})=>e?"#1e293b":"#6b7280"};
  display: block;
  line-height: 1.35;
`,Mj=c.span`
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 2px;
  display: block;
`,Fj=c.p`
  font-size: 0.8125rem;
  color: #b91c1c;
  font-weight: 500;
  margin: 0.75rem 0 0 26px;
`,Dj=c.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`,yf=c.span``,Bj=c.span`
  font-weight: 700;
  font-size: 1rem;
  color: #111827;
`,Uj=c.div`
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
  font-size: 0.875rem;
  color: #475569;
`,Li=c.span`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
`,Pl=c.p`
  margin: 0;
  line-height: 1.5;
  color: #1e293b;

  & + ${Li} {
    margin-top: 0.75rem;
  }
`,Hj=c.div`
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`,Vj=c.span`
  font-size: 0.875rem;
  color: #475569;

  strong {
    color: #1e293b;
    font-weight: 600;
  }
`,Wj=c.a`
  font-size: 0.875rem;
  font-weight: 600;
  color: #0f766e;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    outline: 2px solid #14b8a6;
    outline-offset: 2px;
  }
`,Gj=c.h3`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  padding: 1rem 1.5rem 0 1.5rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,Qj=c.ul`
  list-style: none;
  margin: 0;
  padding: 0 1.5rem 1.5rem;
`,qj=c.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`,Yj=c.div`
  width: 56px;
  height: 56px;
  border-radius: 6px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`,Kj=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Xj=c.div`
  flex: 1;
  min-width: 0;
`,Jj=c.span`
  display: block;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.2rem;
`,Zj=c.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,e3=c.span`
  font-weight: 600;
  color: #1a1a1a;
  flex-shrink: 0;
`,t3={CREATED:"Criado",PAYMENT_PENDING:"Aguardando pagamento",PENDING_PAYMENT:"Aguardando pagamento",PAID:"Pago",RECEIVED:"Recebido",CONFIRMED:"Confirmado",PREPARING:"Em preparação",SHIPPED:"Enviado",IN_TRANSIT:"Em trânsito",DELIVERED:"Entregue",CANCELLED:"Cancelado",CANCELED:"Cancelado"},r3={CREATED:"yellow",PAYMENT_PENDING:"yellow",PENDING_PAYMENT:"yellow",PAID:"green",RECEIVED:"blue",CONFIRMED:"blue",PREPARING:"blue",SHIPPED:"teal",IN_TRANSIT:"teal",DELIVERED:"green",CANCELLED:"red",CANCELED:"red"},Qs=[{key:"PAYMENT_PENDING",label:"Pedido realizado"},{key:"RECEIVED",label:"Pagamento aprovado"},{key:"CONFIRMED",label:"Confirmado"},{key:"PREPARING",label:"Em separação"},{key:"SHIPPED",label:"Enviado"},{key:"IN_TRANSIT",label:"Em trânsito"},{key:"DELIVERED",label:"Entregue"}];function n3(e){if(e==="CANCELLED"||e==="CANCELED")return-1;const t=Qs.findIndex(r=>r.key===e);return t>=0?t:0}function o3(e){return r3[e]||"yellow"}function wf(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function El(e){if(!e)return"—";try{return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(e))}catch{return e}}function i3(e){return e.name??e.productName??"Produto"}function a3(e){if(!e)return"";const t=String(e).replaceAll(/\D/g,"");return t.length===8?`${t.slice(0,5)}-${t.slice(5)}`:e}function bf(e){if(!e||typeof e!="object")return null;const{rua:t,numero:r,complemento:n,cidade:o,estado:i,cep:l}=e,s=[];t&&s.push(t),r!=null&&r!==""&&s.push(r),n&&s.push(n);const u=s.length?s.join(", "):null,d=[];o&&d.push(o),i&&d.push(i);const h=d.length?d.join(" - "):null,f=l?`CEP ${a3(l)}`:null;return[u,h,f].filter(Boolean).join(". ")}function ou({order:e}){var l;const t=t3[e.status]||e.status,r=o3(e.status),n=e.trackingUrl||e.trackingCode,o=n3(e.status),i=e.status==="CANCELLED"||e.status==="CANCELED";return a.jsxs(Cj,{"aria-label":`Pedido ${e.orderCode}`,children:[a.jsxs(Pj,{children:[a.jsx(Ej,{children:e.orderCode}),a.jsx(zj,{$variant:r,children:t})]}),a.jsxs(Ij,{"aria-label":"Progresso do pedido",children:[a.jsx(Tj,{children:"Acompanhe seu pedido"}),a.jsx(Lj,{role:"list",children:Qs.map((s,u)=>{const d=!i&&u<o,h=!i&&u===o,f=d?"done":h?"current":"pending",g=!i&&u<o,w=u===Qs.length-1,v=s.key==="PAYMENT_PENDING"&&e.createdAt||s.key==="SHIPPED"&&e.shippedAt,k=s.key==="PAYMENT_PENDING"?e.createdAt:s.key==="SHIPPED"?e.shippedAt:null;return a.jsxs(Nj,{role:"listitem",children:[a.jsxs(_j,{children:[a.jsx(Rj,{$state:f,"aria-current":h?"step":void 0,children:d?"✓":""}),!w&&a.jsx($j,{$done:g,"aria-hidden":!0})]}),a.jsxs(Oj,{children:[a.jsx(Aj,{$active:h,children:s.label}),v&&k&&a.jsx(Mj,{children:El(k)})]})]},s.key)})}),i&&a.jsx(Fj,{children:"Pedido cancelado"})]}),a.jsxs(Dj,{children:[a.jsxs(yf,{children:["Data do pedido: ",El(e.createdAt)]}),e.shippedAt&&a.jsxs(yf,{children:["Enviado em: ",El(e.shippedAt)]}),a.jsxs(Bj,{children:["Total: ",wf(e.total)]})]}),(e.customerName||e.email||e.address||e.paymentMethodName)&&a.jsxs(Uj,{children:[e.customerName&&a.jsxs(a.Fragment,{children:[a.jsx(Li,{children:"Cliente"}),a.jsxs(Pl,{children:[e.customerName,e.email&&` · ${e.email}`]})]}),e.address&&bf(e.address)&&a.jsxs(a.Fragment,{children:[a.jsx(Li,{children:"Entrega"}),a.jsx(Pl,{children:bf(e.address)})]}),e.paymentMethodName&&a.jsxs(a.Fragment,{children:[a.jsx(Li,{children:"Pagamento"}),a.jsx(Pl,{children:e.paymentMethodName})]})]}),n&&a.jsxs(Hj,{children:[e.trackingCode&&a.jsxs(Vj,{children:["Rastreio: ",a.jsx("strong",{children:e.trackingCode}),e.carrier&&` · ${e.carrier}`]}),e.trackingUrl&&a.jsx(Wj,{href:e.trackingUrl,target:"_blank",rel:"noopener noreferrer",children:"Rastrear entrega"})]}),a.jsx(Gj,{children:"Itens do pedido"}),a.jsx(Qj,{"aria-label":"Itens do pedido",children:(l=e.items)==null?void 0:l.map((s,u)=>{const d=i3(s);return a.jsxs(qj,{children:[a.jsx(Yj,{children:a.jsx(Kj,{src:s.image||"/logos/sem%20fundo/4.png",alt:d,loading:"lazy"})}),a.jsxs(Xj,{children:[a.jsx(Jj,{children:d}),a.jsxs(Zj,{children:[s.size?`Tamanho ${s.size}`:"",s.size&&s.quantity?" · ":"",s.quantity?`${s.quantity}x`:""]})]}),a.jsx(e3,{children:wf((s.price??s.unitPrice??0)*(s.quantity??1))})]},`${d}-${s.size??""}-${u}`)})})]})}const l3=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,s3=c.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 2rem 1rem calc(4rem + var(--safe-area-bottom, 0px));
  text-align: center;
  min-width: 0;
`,c3=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 2.5rem 1.5rem;
`,u3=c.div`
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
`,d3=c.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`,jf=c.p`
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`,f3=c.dl`
  text-align: left;
  background: #f9fafb;
  border-radius: 8px;
  padding: 1.25rem 1rem;
  margin-bottom: 1.5rem;
  display: grid;
  gap: 0.75rem;
`,kf=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`,Sf=c.dt`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0;
`,Cf=c.dd`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,p3=c.div`
  margin-top: 1.5rem;
  text-align: left;
`,m3=c(se)`
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
  background: var(--color-primary);
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
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: none;
  }
`,Pf="artilheiro-checkout-success";function h3(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e??0)}function g3(){const e=Ht(),t=Ut(),[r]=Ta(),[n,o]=y.useState(null),[i,l]=y.useState(null),[s,u]=y.useState(!1),d=t.state??{};y.useEffect(()=>{var P;const k=r.get("code");if(k!=null&&k.trim()){const x=r.get("total"),p=x!=null?Number(x):null,m=r.get("email");o({orderId:k.trim(),total:p,email:(m==null?void 0:m.trim())||null});return}try{const x=sessionStorage.getItem(Pf);if(!x){e("/",{replace:!0});return}const p=JSON.parse(x);if(!(p!=null&&p.orderId)){e("/",{replace:!0});return}o({orderId:p.orderId,total:p.total??null,email:((P=p.email)==null?void 0:P.trim())||null})}catch{e("/",{replace:!0})}},[e,r]);const h=(n==null?void 0:n.email)??(d==null?void 0:d.email),f=(n==null?void 0:n.orderId)??(d==null?void 0:d.orderCode);y.useEffect(()=>{!(h!=null&&h.trim())||!(f!=null&&f.trim())||(u(!0),Tt.lookupOrder(h.trim(),f.trim()).then(l).catch(()=>l(null)).finally(()=>u(!1)))},[h,f]);const g=()=>{try{sessionStorage.removeItem(Pf)}catch{}};if(!n)return null;const w=i&&!s,v=!s&&!i;return a.jsxs(l3,{children:[a.jsx(ve,{}),a.jsx(s3,{children:a.jsxs(c3,{children:[a.jsx(u3,{"aria-hidden":!0,children:"✓"}),a.jsx(d3,{children:"Pedido realizado com sucesso!"}),a.jsx(jf,{children:"Recebemos seu pedido e ele já está sendo processado."}),s&&a.jsx(jf,{style:{marginTop:"0.5rem",fontSize:"0.875rem"},children:"Carregando detalhes do pedido…"}),w&&a.jsx(p3,{children:a.jsx(ou,{order:i})}),v&&a.jsxs(f3,{children:[a.jsxs(kf,{children:[a.jsx(Sf,{children:"Número do pedido"}),a.jsx(Cf,{children:n.orderId})]}),a.jsxs(kf,{children:[a.jsx(Sf,{children:"Valor total"}),a.jsx(Cf,{children:n.total!=null?h3(n.total):"—"})]})]}),a.jsx(m3,{to:"/",onClick:g,style:{marginTop:"1.5rem"},children:"Voltar para a loja"})]})}),a.jsx(ye,{})]})}const x3=Vt`
  to { transform: rotate(360deg); }
`,Ef=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,zf=c.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,zl=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Il=c.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,Tl=c.input`
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
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(166, 124, 82, 0.15);
  }

  &:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
  }
`,If=c.button`
  width: 100%;
  min-height: 48px;
  height: 52px;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
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
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,Tf=c.span`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${x3} 0.75s linear infinite;
  flex-shrink: 0;
`;function Lf(e){const t=(e??"").replace(/\D/g,"").slice(0,11);return t.length<=3?t:t.length<=6?`${t.slice(0,3)}.${t.slice(3)}`:`${t.slice(0,3)}.${t.slice(3,6)}.${t.slice(6,9)}-${t.slice(9)}`}function v3({mode:e="email",email:t,orderCode:r,cpf:n="",loading:o,onChange:i,onSubmit:l}){const s=((t==null?void 0:t.trim())||"").length>0&&((r==null?void 0:r.trim())||"").length>0,d=(n??"").replace(/\D/g,"").length>=11,h=e==="cpf"?d:s,f=v=>{v.preventDefault(),!(!h||o)&&l()},g=v=>{const k=(v.target.value??"").replace(/\D/g,"").slice(0,11);i({cpf:Lf(k)})},w=v=>{if(v.key!=="Backspace")return;const k=(n??"").replace(/\D/g,"");k.length!==0&&(v.preventDefault(),i({cpf:Lf(k.slice(0,-1))}))};return e==="cpf"?a.jsx(Ef,{children:a.jsxs(zf,{onSubmit:f,noValidate:!0,children:[a.jsxs(zl,{children:[a.jsx(Il,{htmlFor:"order-lookup-cpf",children:"CPF"}),a.jsx(Tl,{id:"order-lookup-cpf",type:"text",inputMode:"numeric",placeholder:"000.000.000-00",value:n,onChange:g,onKeyDown:w,disabled:o,autoComplete:"off",required:!0,maxLength:14,"aria-label":"CPF para consultar pedidos"})]}),a.jsxs(If,{type:"submit",disabled:!h||o,"aria-busy":o,children:[o&&a.jsx(Tf,{"aria-hidden":!0}),o?"Buscando…":"Buscar pedidos"]})]})}):a.jsx(Ef,{children:a.jsxs(zf,{onSubmit:f,noValidate:!0,children:[a.jsxs(zl,{children:[a.jsx(Il,{htmlFor:"order-lookup-email",children:"E-mail"}),a.jsx(Tl,{id:"order-lookup-email",type:"email",placeholder:"seu@email.com",value:t,onChange:v=>i({email:v.target.value,orderCode:r}),disabled:o,autoComplete:"email",required:!0})]}),a.jsxs(zl,{children:[a.jsx(Il,{htmlFor:"order-lookup-code",children:"Código do pedido"}),a.jsx(Tl,{id:"order-lookup-code",type:"text",placeholder:"Ex: ART-10293",value:r,onChange:v=>i({email:t,orderCode:v.target.value}),disabled:o,autoComplete:"off",required:!0})]}),a.jsxs(If,{type:"submit",disabled:!h||o,"aria-busy":o,children:[o&&a.jsx(Tf,{"aria-hidden":!0}),o?"Buscando…":"Buscar pedido"]})]})})}const Ll={yellow:{bg:"#fef3c7",text:"#92400e",border:"#f59e0b"},green:{bg:"#d1fae5",text:"#065f46",border:"#10b981"},red:{bg:"#fee2e2",text:"#991b1b",border:"#ef4444"},blue:{bg:"#dbeafe",text:"#1e40af",border:"#3b82f6"},teal:{bg:"#ccfbf1",text:"#0f766e",border:"#14b8a6"}},y3=c.article`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 0.75rem;
`,w3=c.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  text-align: left;
  background: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #f9fafb;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,b3=c.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
  flex: 1;
`,j3=c.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
`,k3=c.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`,S3=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Nf=c.div`
  min-width: 0;
  flex: 1;
`,_f=c.span`
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Rf=c.span`
  display: block;
  font-size: 0.8125rem;
  color: #6b7280;
  margin-top: 0.15rem;
`,C3=c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`,P3=c.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;
`,E3=c.span`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: ${({$variant:e})=>{var t;return((t=Ll[e])==null?void 0:t.bg)||"#f3f4f6"}};
  color: ${({$variant:e})=>{var t;return((t=Ll[e])==null?void 0:t.text)||"#374151"}};
  border: 1px solid ${({$variant:e})=>{var t;return((t=Ll[e])==null?void 0:t.border)||"#e5e7eb"}};
  flex-shrink: 0;
`,z3=c.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: transform 0.2s ease;

  &.expanded {
    transform: rotate(180deg);
  }
`,I3=c.div`
  border-top: 1px solid #e5e7eb;
  background: #fafbfc;
  padding: 0 1rem 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem 1.5rem;
  }
`,T3={CREATED:"Criado",PAYMENT_PENDING:"Aguardando pagamento",PENDING_PAYMENT:"Aguardando pagamento",PAID:"Pago",RECEIVED:"Recebido",CONFIRMED:"Confirmado",PREPARING:"Em preparação",SHIPPED:"Enviado",IN_TRANSIT:"Em trânsito",DELIVERED:"Entregue",CANCELLED:"Cancelado",CANCELED:"Cancelado"},L3={CREATED:"yellow",PAYMENT_PENDING:"yellow",PENDING_PAYMENT:"yellow",PAID:"green",RECEIVED:"blue",CONFIRMED:"blue",PREPARING:"blue",SHIPPED:"teal",IN_TRANSIT:"teal",DELIVERED:"green",CANCELLED:"red",CANCELED:"red"};function N3(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e??0)}function $f(e){if(!e)return"—";try{return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(e))}catch{return e}}function Nl(e){return(e==null?void 0:e.name)??(e==null?void 0:e.productName)??"Produto"}const _3=3,R3="/logos/sem%20fundo/4.png";function $3({order:e,expanded:t,onToggle:r}){const n=e.orderCode??e.orderId??e.id??"—",o=T3[e.status]??e.status,i=L3[e.status]??"yellow",l=e.items&&e.items.length>0?e.items:[],s=l[0],u=l.slice(0,_3),d=s?l.length===1?Nl(s):`${Nl(s)}${l.length>1?` e mais ${l.length-1} ${l.length===2?"item":"itens"}`:""}`:n,h=[];s!=null&&s.size&&h.push(`Tam. ${s.size}`),s!=null&&s.quantity&&h.push(`${s.quantity}x`),e.createdAt&&h.push($f(e.createdAt));const f=h.join(" · ");return a.jsxs(y3,{"aria-label":s?`Pedido: ${d}`:`Pedido ${n}`,children:[a.jsxs(w3,{type:"button",onClick:r,"aria-expanded":t,"aria-controls":`order-details-${e.id??n}`,id:`order-header-${e.id??n}`,children:[a.jsx(b3,{children:l.length>0?a.jsxs(a.Fragment,{children:[a.jsx(j3,{children:u.map((g,w)=>{var v;return a.jsx(k3,{children:a.jsx(S3,{src:g.image??((v=g.images)==null?void 0:v[0])??R3,alt:Nl(g),loading:"lazy"})},`${g.productId??w}-${g.size??""}`)})}),a.jsxs(Nf,{children:[a.jsx(_f,{children:d}),f&&a.jsx(Rf,{children:f})]})]}):a.jsxs(Nf,{children:[a.jsx(_f,{children:n}),a.jsx(Rf,{children:$f(e.createdAt)})]})}),a.jsxs(C3,{children:[a.jsx(P3,{children:N3(e.total)}),a.jsx(E3,{$variant:i,children:o}),a.jsx(z3,{className:t?"expanded":"","aria-hidden":!0,children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})]}),t&&a.jsx(I3,{id:`order-details-${e.id??n}`,role:"region","aria-labelledby":`order-header-${e.id??n}`,children:a.jsx(ou,{order:e})})]})}const O3=Vt`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`,A3=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
`,iu=c.div`
  height: 16px;
  background: #e5e7eb;
  border-radius: 4px;
  animation: ${O3} 1.2s ease-in-out infinite;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Of=c(iu)`
  height: 48px;
  margin-bottom: 1rem;
`,M3=c(iu)`
  height: 52px;
  margin-top: 0.5rem;
`;function F3(){return a.jsxs(A3,{"aria-hidden":!0,children:[a.jsx(iu,{style:{width:"40%",marginBottom:"0.5rem"}}),a.jsx(Of,{}),a.jsx(Of,{}),a.jsx(M3,{})]})}const D3=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,B3=c.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,U3=c.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.35rem;
`,H3=c.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0 0 1.5rem;
  line-height: 1.45;
`,V3=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  text-align: center;
`,W3=c.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
`,G3=c.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
`,Q3=c.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
`,Af=c.button`
  padding: 0.75rem 1rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #6b7280;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #374151;
  }

  &.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,q3=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`,Mf="artilheiro-order-lookup";function Ff(e){if(e instanceof Gr){if(e.status===404)return"Pedido não encontrado";if(e.status===400||e.status===422)return"Confira os dados e tente novamente"}return"Erro ao consultar pedido"}const Vr="email",Wr="cpf";function Df(){const e=Ht(),{id:t}=Wc(),[r,n]=y.useState(Vr),[o,i]=y.useState(""),[l,s]=y.useState(""),[u,d]=y.useState(""),[h,f]=y.useState(!1),[g,w]=y.useState(null),[v,k]=y.useState([]),[P,x]=y.useState(null),[p,m]=y.useState(null);y.useEffect(()=>{if(!t){w(null);return}try{const E=sessionStorage.getItem(Mf);if(!E)return;const{id:M,order:O}=JSON.parse(E);O&&M===t&&(w(O),m(null))}catch{}},[t]),y.useEffect(()=>()=>{w(null),m(null)},[]);const b=({email:E,orderCode:M,cpf:O})=>{E!==void 0&&i(E),M!==void 0&&s(M),O!==void 0&&d(O),m(null)},S=E=>{n(E),w(null),k([]),x(null),m(null),t&&E===Wr&&e("/pedido/consultar",{replace:!0})},C=E=>{x(M=>M===E?null:E)},j=async()=>{if(r===Wr){if((u??"").replace(/\D/g,"").length<11)return;f(!0),m(null),w(null),k([]);try{const H=await Tt.getOrdersByCpf(u);k(Array.isArray(H)?H:[]),H!=null&&H.length||m("Nenhum pedido encontrado para este CPF.")}catch(H){m(Ff(H))}finally{f(!1)}return}const E=o.trim(),M=l.trim();if(!(!E||!M)){f(!0),m(null),w(null),k([]);try{const O=await Tt.lookupOrder(E,M);w(O);const H=O.id??O.orderCode??O.orderId;if(H){try{sessionStorage.setItem(Mf,JSON.stringify({id:H,order:O}))}catch{}e(`/pedido/consultar/${encodeURIComponent(H)}`,{replace:!0})}}catch(O){m(Ff(O))}finally{f(!1)}}},I=!h&&g&&r===Vr,_=!h&&v.length>0;return a.jsxs(D3,{children:[a.jsx(ve,{}),a.jsxs(B3,{children:[a.jsx(U3,{children:"Consultar pedido"}),a.jsx(H3,{children:"Busque por e-mail e código do pedido ou pelo seu CPF para ver todos os pedidos."}),a.jsxs(Q3,{role:"tablist","aria-label":"Forma de consulta",children:[a.jsx(Af,{type:"button",role:"tab","aria-selected":r===Vr,"aria-controls":"lookup-form",id:"tab-email",className:r===Vr?"active":"",onClick:()=>S(Vr),children:"E-mail e código"}),a.jsx(Af,{type:"button",role:"tab","aria-selected":r===Wr,"aria-controls":"lookup-form",id:"tab-cpf",className:r===Wr?"active":"",onClick:()=>S(Wr),children:"Por CPF"})]}),a.jsx("div",{id:"lookup-form",role:"tabpanel","aria-labelledby":r===Vr?"tab-email":"tab-cpf",children:a.jsx(v3,{mode:r,email:o,orderCode:l,cpf:u,loading:h,onChange:b,onSubmit:j})}),h&&a.jsx(F3,{}),!h&&p&&a.jsxs(V3,{role:"alert",children:[a.jsx(W3,{children:r===Wr?"Nenhum pedido encontrado":"Não foi possível encontrar o pedido"}),a.jsx(G3,{children:p})]}),I&&a.jsx(ou,{order:g}),_&&a.jsx(q3,{children:v.map(E=>{const M=E.id??E.orderCode??E.orderId;return a.jsx($3,{order:E,expanded:P===M,onToggle:()=>C(M)},M)})})]}),a.jsx(ye,{})]})}const Y3=c.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`,K3=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  width: 100%;
`,X3=c.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,J3=c.div`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;function Ct({title:e,paragraphs:t}){return a.jsxs(Y3,{children:[a.jsx(ve,{}),a.jsxs(K3,{children:[a.jsx(X3,{children:e}),a.jsx(J3,{children:t.map((r,n)=>a.jsx("p",{children:r},n))})]}),a.jsx(ye,{})]})}const Z3=[{id:"faq-1",sectionId:"pedidos",question:"Como acompanhar meu pedido?",answer:'Você pode acompanhar seu pedido acessando a área "Consultar pedido" com seu e-mail e o código do pedido. Lá você verá o status atualizado e o histórico de movimentações.',keywords:["pedido","acompanhar","rastreio","status","código"]},{id:"faq-2",sectionId:"pagamentos",question:"Meu pagamento foi recusado, o que fazer?",answer:"Confira se os dados do cartão estão corretos e se há limite disponível. Tente outra forma de pagamento (Pix, boleto ou outro cartão). Se o problema persistir, entre em contato conosco.",keywords:["pagamento","recusado","cartão","erro","negado"]},{id:"faq-3",sectionId:"pedidos",question:"Posso cancelar um pedido?",answer:"Sim. Enquanto o pedido não tiver sido enviado, você pode solicitar o cancelamento pelo e-mail de confirmação ou entrando em contato. Após o envio, consulte a política de troca e devolução.",keywords:["cancelar","pedido","cancelamento"]},{id:"faq-4",sectionId:"pagamentos",question:"Como solicitar reembolso?",answer:"O reembolso é processado após a devolução do produto ou em caso de cancelamento antes do envio. O valor volta na mesma forma de pagamento em até alguns dias úteis.",keywords:["reembolso","estorno","devolução","dinheiro"]},{id:"faq-5",sectionId:"produtos",question:"Como trocar um produto?",answer:"Entre em contato em até 7 dias após o recebimento e informe o motivo. Após a aprovação, você receberá as instruções para envio. Confira a página Troca e devolução para o passo a passo.",keywords:["troca","trocar","produto","tamanho","devolução"]},{id:"faq-6",sectionId:"entrega",question:"Qual o prazo de entrega?",answer:"O prazo varia conforme sua região. Após a confirmação do pagamento, o pedido é preparado e enviado em até 2 dias úteis. O prazo total costuma ser de 5 a 15 dias úteis. Consulte a página Entregas para a tabela completa.",keywords:["prazo","entrega","envio","dias","demora"]},{id:"faq-7",sectionId:"entrega",question:"Como rastrear minha entrega?",answer:"O código de rastreio é enviado por e-mail quando o pedido é despachado. Use esse código no site dos Correios ou da transportadora para acompanhar em tempo real.",keywords:["rastreio","rastrear","código","correios","transportadora"]},{id:"faq-8",sectionId:"conta-seguranca",question:"Esqueci minha senha, como recuperar?",answer:'Na tela de login, clique em "Esqueci minha senha" e informe o e-mail cadastrado. Você receberá um link para criar uma nova senha. Se não receber o e-mail, verifique a pasta de spam.',keywords:["senha","esqueci","recuperar","login","acesso"]}];function ek(e){return Be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function tk(e){return Be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(e)}const rk=c.div`
  position: relative;
  width: 100%;
`,nk=c.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  pointer-events: none;
`,ok=c.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  font-size: 0.9375rem;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  transition: border-color 0.15s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #9ca3af;
  }
`;function ik({value:e,onChange:t,placeholder:r}){return a.jsxs(rk,{children:[a.jsx(nk,{"aria-hidden":!0,children:a.jsx(tk,{size:18,strokeWidth:2})}),a.jsx(ok,{type:"search",value:e,onChange:n=>t(n.target.value),placeholder:r||"Buscar por pedidos, pagamento, entrega...","aria-label":"Buscar na ajuda",autoComplete:"off"})]})}const ak=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid #f0f0f0;
`,Jh=c.li`
  border-bottom: 1px solid #f0f0f0;
`,lk=c.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.875rem 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #1a1a1a;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #374151;
  }

  &:focus-visible {
    outline: 1px solid #6b7280;
    outline-offset: 2px;
  }
`,sk=c.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  transition: transform 0.2s ease;

  ${Jh}[data-open="true"] & {
    transform: rotate(180deg);
  }
`,ck=c.div`
  overflow: hidden;
  transition: max-height 0.2s ease;
`,uk=c.div`
  padding: 0 0 0.875rem;
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.55;

  a {
    color: #374151;
    text-decoration: underline;

    &:hover {
      color: #1a1a1a;
    }
  }
`;function dk(e){const t=/\[([^\]]+)\]\((\/[^)]+)\)/g,r=[];let n=0,o;for(;(o=t.exec(e))!==null;)o.index>n&&r.push({type:"text",value:e.slice(n,o.index)}),r.push({type:"link",label:o[1],to:o[2]}),n=o.index+o[0].length;return n<e.length&&r.push({type:"text",value:e.slice(n)}),r.length===0&&r.push({type:"text",value:e}),r}function fk({answer:e}){const t=dk(e);return a.jsx(a.Fragment,{children:t.map((r,n)=>r.type==="link"?a.jsx(se,{to:r.to,children:r.label},n):a.jsx("span",{children:r.value},n))})}function pk({items:e,openId:t,onToggle:r}){const n=y.useRef({});return a.jsx(ak,{role:"list",children:e.map(o=>{var l;const i=t===o.id;return a.jsxs(Jh,{"data-open":i,role:"listitem",children:[a.jsxs(lk,{type:"button",onClick:()=>r(i?null:o.id),"aria-expanded":i,"aria-controls":`faq-answer-${o.id}`,id:`faq-question-${o.id}`,children:[o.question,a.jsx(sk,{"aria-hidden":!0,children:a.jsx(ek,{size:16,strokeWidth:2})})]}),a.jsx(ck,{id:`faq-answer-${o.id}`,role:"region","aria-labelledby":`faq-question-${o.id}`,style:{maxHeight:i?((l=n.current[o.id])==null?void 0:l.scrollHeight)??200:0},children:a.jsx(uk,{ref:s=>{s&&(n.current[o.id]=s)},children:a.jsx(fk,{answer:o.answer})})})]},o.id)})})}const mk=c.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
  padding: 1rem 0;
  line-height: 1.5;
`;function hk(){return a.jsx(mk,{role:"status","aria-live":"polite",children:"Nenhum resultado encontrado para sua busca."})}const gk=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,xk=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,vk=c.header`
  margin-bottom: 2rem;
`,yk=c.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`,wk=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`,bk=c.section`
  margin-bottom: 2rem;
`,jk=c.section`
  margin-bottom: 2.5rem;
`,kk=c.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`;function Sk(e,t){const r=t.trim().toLowerCase();return r?e.filter(n=>n.question.toLowerCase().includes(r)||n.answer.toLowerCase().includes(r)||n.keywords&&n.keywords.some(o=>o.toLowerCase().includes(r))):e}function Ck(){const[e,t]=y.useState(""),[r,n]=y.useState(null),o=y.useMemo(()=>Sk(Z3,e),[e]);return a.jsxs(gk,{children:[a.jsx(ve,{}),a.jsxs(xk,{children:[a.jsxs(vk,{children:[a.jsx(yk,{children:"Ajuda"}),a.jsx(wk,{children:"Encontre respostas rápidas para as principais dúvidas"})]}),a.jsx(bk,{"aria-label":"Buscar dúvidas",children:a.jsx(ik,{value:e,onChange:t,placeholder:"Buscar por pedidos, pagamento, entrega..."})}),a.jsxs(jk,{"aria-labelledby":"faq-title",children:[a.jsx(kk,{id:"faq-title",children:"Perguntas frequentes"}),o.length===0?a.jsx(hk,{}):a.jsx(pk,{items:o,openId:r,onToggle:n})]})]}),a.jsx(ye,{})]})}const Pk={intro:"Entre em contato conosco para dúvidas, sugestões ou parcerias. Nossa equipe está pronta para atender você.",email:{label:"E-mail",value:"contato@joaopossidonio.com",href:"mailto:contato@joaopossidonio.com"},phone:{label:"Telefone / WhatsApp",items:[{value:"(24) 98868-5043",href:"https://wa.me/5524988685043"},{value:"(24) 99301-2170",href:"https://wa.me/5524993012170"}]},address:{label:"Endereço",lines:["Rua Raizel Cukier, 126","Resende – RJ","CEP 27537-278"]},hours:{label:"Horário de atendimento",lines:["Segunda a sexta: 9h às 18h","Sábado: 9h às 13h","Domingo e feriados: fechado"]}},Ek=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,zk=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,Ik=c.header`
  margin-bottom: 2rem;
`,Tk=c.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`,Lk=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`,Nk=c.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;
  margin: 0 0 2rem;
`,_k=c.section`
  margin-bottom: 2.5rem;
`,Rk=c.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`,$k=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ui=c.li`
  background: #fff;
  border: ${({$plain:e})=>e?"none":"1px solid #e5e7eb"};
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  box-shadow: ${({$plain:e})=>e?"none":"0 1px 3px rgba(0, 0, 0, 0.06)"};
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: ${({$plain:e})=>e?"transparent":"#d1d5db"};
    box-shadow: ${({$plain:e})=>e?"none":"0 2px 8px rgba(0, 0, 0, 0.06)"};
  }
`,Ok=c.a`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
    border-radius: 8px;
  }
`,_l=c.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,di=c.div`
  flex: 1;
  min-width: 0;
`,fi=c.span`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
`,Ak=c.span`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.4;
`,Bf=c.div`
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.5;

  p {
    margin: 0 0 0.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,Mk=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`,Fk=c.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #0c7c59;
  background: #dcfce7;
  border: 1px solid #86efac;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background: #bbf7d0;
    border-color: #4ade80;
    color: #047857;
  }

  &:focus-visible {
    outline: 2px solid #0c7c59;
    outline-offset: 2px;
  }
`,pi=c.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #f3f4f6;
  color: #6b7280;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  & > svg {
    width: 20px;
    height: 20px;
  }
`,Dk=()=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[a.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),a.jsx("polyline",{points:"22,6 12,13 2,6"})]}),Bk=()=>a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:a.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),Uk=()=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[a.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),Hk=()=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("polyline",{points:"12 6 12 12 16 14"})]});function Vk(){const{intro:e,email:t,phone:r,address:n,hours:o}=Pk;return a.jsxs(Ek,{children:[a.jsx(ve,{}),a.jsxs(zk,{children:[a.jsxs(Ik,{children:[a.jsx(Tk,{children:"Contato"}),a.jsx(Lk,{children:"Dúvidas, sugestões ou parcerias? Fale com a gente."})]}),a.jsx(Nk,{children:e}),a.jsxs(_k,{"aria-labelledby":"contact-section-title",children:[a.jsx(Rk,{id:"contact-section-title",children:"Como nos encontrar"}),a.jsxs($k,{children:[a.jsx(ui,{children:a.jsxs(Ok,{href:t.href,rel:"noopener noreferrer",children:[a.jsx(pi,{"aria-hidden":!0,children:a.jsx(Dk,{})}),a.jsxs(di,{children:[a.jsx(fi,{children:t.label}),a.jsx(Ak,{children:t.value})]})]})}),a.jsx(ui,{children:a.jsxs(_l,{children:[a.jsx(pi,{"aria-hidden":!0,children:a.jsx(Bk,{})}),a.jsxs(di,{children:[a.jsx(fi,{children:r.label}),a.jsx(Mk,{children:r.items.map(i=>a.jsx(Fk,{href:i.href,target:"_blank",rel:"noopener noreferrer","aria-label":`Abrir WhatsApp: ${i.value}`,children:i.value},i.value))})]})]})}),a.jsx(ui,{$plain:!0,children:a.jsxs(_l,{children:[a.jsx(pi,{"aria-hidden":!0,children:a.jsx(Uk,{})}),a.jsxs(di,{children:[a.jsx(fi,{children:n.label}),a.jsx(Bf,{children:n.lines.map(i=>a.jsx("p",{children:i},i))})]})]})}),a.jsx(ui,{$plain:!0,children:a.jsxs(_l,{children:[a.jsx(pi,{"aria-hidden":!0,children:a.jsx(Hk,{})}),a.jsxs(di,{children:[a.jsx(fi,{children:o.label}),a.jsx(Bf,{children:o.lines.map(i=>a.jsx("p",{children:i},i))})]})]})})]})]})]}),a.jsx(ye,{})]})}function Wk(e){return Be({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155-.04 0-.074.023-.113.059-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126.005-.041-.005-.072-.03-.092l-.05-.04-.047.043a.728.726 0 0 1-.505.203.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722.364 0 .675.27.721.63l.026.195.11-.165c.01-.018.307-.46.852-.46.102 0 .21.016.316.05.434.13.508.52.519.68.008.094.075.1.09.1.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225c.128 0 .263.03.402.09.69.293.379 1.158.374 1.167-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93.936.934 0 0 1-.94.928zm7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07c-.182 0-.376.032-.58.095-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258-.02-.025-.007-.066.04-.125l.008-.008 1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7.03 7.03 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66-.962 0-1.925-.229-2.858-.68-.05-.022-1.22-.567-2.44-.57-.032 0-.065 0-.096.002-1.434.033-2.24.536-2.782.976-.528.013-.982.138-1.388.25-.361.1-.673.186-.979.185-.125 0-.35-.01-.37-.012-.35-.01-2.115-.437-3.518-.962-.143.1-.28.203-.415.31 1.466.593 3.25 1.053 3.812 1.089.157.01.323.027.491.027.372 0 .744-.103 1.104-.203.213-.059.446-.123.692-.17l-.196.194-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271.152 0 .297-.015.43-.044.427-.095.874-.448 1.349-.82.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472.835.62 4.531 3.815 4.566 3.846.002.002.238.203.22.537-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543-.074-.06-.146-.115-.22-.115a.122.122 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395.012.244-.106.447-.35.606a.957.955 0 0 1-.526.171.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.127.127 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012c-.106-.018-.178-.048-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98-.059-.05-.133-.11-.21-.11a.128.128 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.204.204 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576 1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125c-.146 0-.287.025-.42.075a1.153 1.15 0 0 0-.671-.564 1.52 1.515 0 0 0-.494-.085c-.28 0-.537.08-.767.242a1.168 1.165 0 0 0-.903-.43 1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189 4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442 1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08c.09 0 .179-.012.266-.034.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094c.122 0 .241-.022.355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41.221.121.688.341 1.163.341.06 0 .118-.002.175-.01.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058.255 0 .501-.086.75-.265.244-.174.418-.424.444-.637v-.01c.083.017.167.026.251.026.265 0 .527-.082.773-.242.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194 1.04 1.04 0 0 0 .502-.808 1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492 27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293-6.372 0-11.538-3.266-11.538-7.293 0-4.028 5.165-7.293 11.539-7.293 6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203 7.347 0 12-3.67 12-8.204z"},child:[]}]})(e)}function Gk(e){return Be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"},child:[]}]})(e)}function Qk(e){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"},child:[]}]})(e)}const qk={intro:"Aceitamos cartão de crédito, débito e PIX. Todas as transações são processadas de forma segura.",processorNote:{title:"Processamento de pagamento",text:"Os pagamentos são processados pelo Mercado Pago. Seus dados são criptografados e não armazenamos informações completas do cartão em nossos servidores. O Mercado Pago é uma solução segura e amplamente utilizada no Brasil."},methods:[{id:"card",title:"Cartão de crédito ou débito",paragraphs:["Você pode pagar com cartão de crédito ou débito no checkout. Os dados são informados na própria página de finalização da compra.","Parcelamento: oferecemos opções de parcelamento em várias vezes. Quando houver parcelamento com juros, os juros são por conta do comprador — ou seja, o valor das parcelas já inclui os encargos da operadora/bandeira, e você vê o total antes de confirmar o pagamento.","O pagamento com cartão é processado pelo Mercado Pago, em ambiente seguro. A aprovação é feita em instantes e você recebe a confirmação por e-mail."]},{id:"pix",title:"PIX",paragraphs:["Pagamento instantâneo via PIX. No checkout você gera um QR Code ou o código PIX (copia e cola) e paga pelo app do seu banco.","A confirmação costuma ser em segundos. Assim que o pagamento for identificado, você recebe a confirmação por e-mail e o pedido segue para processamento."]}]},Yk=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,Kk=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,Xk=c.header`
  margin-bottom: 2rem;
`,Jk=c.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`,Zk=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`,eS=c.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;
  margin: 0 0 2rem;
`,tS=c.section`
  background: linear-gradient(135deg, #009ee3 0%, #00b1ea 100%);
  border: none;
  border-radius: 16px;
  padding: 1.5rem 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 14px rgba(0, 158, 227, 0.25);
`,rS=c.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #fff;
  font-size: 28px;
`,nS=c.div`
  flex: 1;
  min-width: 0;
`,oS=c.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem;
  line-height: 1.3;
`,iS=c.p`
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin: 0;
`,aS=c.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 1rem;
  line-height: 1.3;
`,lS=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,sS=c.li`
  background: #fff;
  border: none;
  border-radius: 12px;
  padding: 1.5rem 1.5rem;
  box-shadow: none;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,cS=c.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  border-radius: 10px;
  color: #374151;
  font-size: 1.25rem;
`,uS=c.div`
  flex: 1;
  min-width: 0;
`,dS=c.h3`
  font-size: 1.0625rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`,fS=c.div`
  font-size: 0.9375rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin: 0 0 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,pS={card:Gk,pix:Qk};function mS(){const{intro:e,processorNote:t,methods:r}=qk;return a.jsxs(Yk,{children:[a.jsx(ve,{}),a.jsxs(Kk,{children:[a.jsxs(Xk,{children:[a.jsx(Jk,{children:"Formas de pagamento"}),a.jsx(Zk,{children:"Cartão e PIX. Escolha a opção que preferir na hora da compra."})]}),a.jsx(eS,{children:e}),a.jsxs(tS,{"aria-labelledby":"processor-note-title",children:[a.jsx(rS,{"aria-hidden":!0,children:a.jsx(Wk,{})}),a.jsxs(nS,{children:[a.jsx(oS,{id:"processor-note-title",children:t.title}),a.jsx(iS,{children:t.text})]})]}),a.jsxs("section",{"aria-labelledby":"payment-methods-title",children:[a.jsx(aS,{id:"payment-methods-title",children:"Opções disponíveis"}),a.jsx(lS,{children:r.map(n=>{const o=pS[n.id];return a.jsxs(sS,{children:[a.jsx(cS,{"aria-hidden":!0,children:o?a.jsx(o,{}):null}),a.jsxs(uS,{children:[a.jsx(dS,{children:n.title}),a.jsx(fS,{children:n.paragraphs.map(i=>a.jsx("p",{children:i},i))})]})]},n.id)})})]})]}),a.jsx(ye,{})]})}const hS={intro:"Trabalhamos com envio para todo o Brasil. Abaixo você encontra informações gerais sobre prazos e como acompanhar seu pedido.",sections:[{id:"como-funciona",title:"Como funciona",paragraphs:["Após a confirmação do pagamento, seu pedido é separado e enviado pelas transportadoras parceiras, conforme a região.","O endereço de entrega é o que você informou no checkout. Por isso, confira sempre que os dados estão corretos antes de finalizar a compra."]},{id:"prazos",title:"Prazos de entrega",paragraphs:["Os prazos variam de acordo com a sua localidade e a disponibilidade dos transportes. Em geral, a entrega pode levar de 7 a 15 dias úteis após a postagem, dependendo da região do país.","Pedidos postados em dias úteis costumam ser despachados em até 3 dias úteis após a confirmação do pagamento. Em períodos de maior movimento (promoções, datas comemorativas), esse prazo pode ser um pouco maior."]},{id:"acompanhar",title:"Acompanhar pedido",paragraphs:['Quando o pedido for enviado, você receberá um e-mail com as informações de rastreio, se disponíveis. Também é possível consultar o status pela página "Consultar pedido", informando seu e-mail e o código do pedido.']},{id:"duvidas",title:"Dúvidas ou necessidade de ajuda",paragraphs:["Se tiver qualquer dúvida sobre seu pedido, envio ou entrega, entre em contato conosco pela página de Contato. Nossa equipe está à disposição para ajudar.","Acesse o menu Contato para ver e-mail, telefone e horário de atendimento."]}]},gS=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,xS=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,vS=c.header`
  margin-bottom: 2rem;
`,yS=c.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`,wS=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`,bS=c.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;
  margin: 0 0 2rem;
`,jS=c.section`
  margin-bottom: 2rem;
`,kS=c.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`,SS=c.div`
  font-size: 0.9375rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin: 0 0 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;function CS(){const{intro:e,sections:t}=hS;return a.jsxs(gS,{children:[a.jsx(ve,{}),a.jsxs(xS,{children:[a.jsxs(vS,{children:[a.jsx(yS,{children:"Entregas"}),a.jsx(wS,{children:"Informações sobre envio e prazos para todo o Brasil."})]}),a.jsx(bS,{children:e}),t.map(r=>a.jsxs(jS,{"aria-labelledby":`entregas-${r.id}`,children:[a.jsx(kS,{id:`entregas-${r.id}`,children:r.title}),a.jsx(SS,{children:r.paragraphs.map(n=>a.jsx("p",{children:n},n))})]},r.id))]}),a.jsx(ye,{})]})}const PS=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,ES=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,zS=c.header`
  margin-bottom: 2.5rem;
`,IS=c.h1`
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-primary);
  margin: 0 0 0.25rem;
  line-height: 1.2;
  letter-spacing: 0.04em;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`,TS=c.p`
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.65;
  font-weight: 500;
  max-width: 36rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,Rl=c.section`
  margin-bottom: 2.5rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`,$l=c.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`,LS=c.div`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin: 0 0 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,NS=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`,_S=c.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`,RS=c.span`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  background: var(--color-primary-soft);
  border-radius: 10px;

  & > svg {
    width: 18px;
    height: 18px;
  }
`,$S=c.div`
  min-width: 0;
`,OS=c.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
`,AS=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`,MS=c.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,FS=c.li`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: 0.9375rem;
  color: #374151;
  line-height: 1.5;

  &::before {
    content: attr(data-step);
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    color: #1a1a1a;
    background: #e5e7eb;
    border-radius: 50%;
  }
`,DS=c.section`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
`,BS=c.p`
  font-size: 0.9375rem;
  color: #374151;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,US=c(se)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 48px;
  height: 52px;
  max-width: 280px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
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
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 0 1.5rem;
  }
`,HS=[{icon:hy,title:"Qualidade artesanal",desc:"Chapéus e acessórios selecionados com cuidado e acabamento delicado."},{icon:py,title:"Estilo western feminino",desc:"Peças que unem charme country e elegância no dia a dia."},{icon:Bh,title:"Compra simples",desc:"Do catálogo ao checkout, tudo claro e sem complicação."},{icon:gy,title:"Atendimento próximo",desc:"Suporte humano quando você precisar de ajuda."}],VS=["Escolha seu chapéu ou acessório no catálogo.","Finalize a compra com seus dados e pagamento.","Receba em casa com carinho e acompanhe o pedido."];function WS(){return a.jsxs(PS,{children:[a.jsx(ve,{}),a.jsxs(ES,{children:[a.jsxs(zS,{children:[a.jsx(IS,{children:"Sobre a Glamour Country"}),a.jsx(TS,{children:"Chapéus femininos e artigos country com leveza, charme e espírito western."})]}),a.jsxs(Rl,{"aria-labelledby":"quem-somos-title",children:[a.jsx($l,{id:"quem-somos-title",children:"Quem somos"}),a.jsxs(LS,{children:[a.jsx("p",{children:"A Glamour Country nasceu para a mulher que vive o lifestyle country com estilo. Somos uma loja de chapéus e acessórios country com foco em modelos femininos, delicados e cheios de personalidade."}),a.jsx("p",{children:"Nosso compromisso é oferecer peças que protegem do sol, completam o look e contam uma história — com transparência em cada etapa da compra."})]})]}),a.jsxs(Rl,{"aria-labelledby":"valores-title",children:[a.jsx($l,{id:"valores-title",children:"O que valorizamos"}),a.jsx(NS,{children:HS.map(({icon:e,title:t,desc:r})=>a.jsxs(_S,{children:[a.jsx(RS,{"aria-hidden":!0,children:a.jsx(e,{size:20})}),a.jsxs($S,{children:[a.jsx(OS,{children:t}),a.jsx(AS,{children:r})]})]},t))})]}),a.jsxs(Rl,{"aria-labelledby":"como-funciona-title",children:[a.jsx($l,{id:"como-funciona-title",children:"Como funciona"}),a.jsx(MS,{children:VS.map((e,t)=>a.jsx(FS,{"data-step":t+1,children:e},e))})]}),a.jsxs(DS,{children:[a.jsx(BS,{children:"Pronta para encontrar seu próximo chapéu?"}),a.jsx(US,{to:"/chapeus",children:"Ver chapéus"})]})]}),a.jsx(ye,{})]})}const Pt={"politica-de-privacidade":{title:"Política de privacidade",paragraphs:["A Glamour Country respeita sua privacidade e está comprometida com a proteção dos seus dados pessoais.","Esta página está em construção. Em breve publicaremos nossa política completa de privacidade e uso de dados."]},termos:{title:"Termos de uso",paragraphs:["Ao utilizar nosso site e serviços, você concorda com os termos aqui descritos.","Esta página está em construção. Em breve disponibilizaremos os termos completos de uso da Glamour Country."]},lojas:{title:"Nossas lojas",paragraphs:["Encontre uma Glamour Country perto de você.","Esta página está em construção. Em breve traremos endereços e horários de funcionamento."]},"trabalhe-conosco":{title:"Trabalhe conosco",paragraphs:["Quer fazer parte da Glamour Country? Confira nossas vagas abertas.","Esta página está em construção. Em breve disponibilizaremos oportunidades de trabalho."]},"troca-devolucao":{title:"Troca e devolução",paragraphs:["Sua satisfação é nossa prioridade. Consulte as regras para trocas e devoluções.","Esta página está em construção. Em breve traremos todas as informações sobre política de trocas."]},pedidos:{title:"Meus pedidos",paragraphs:["Acompanhe seus pedidos e histórico de compras.","Esta página está em construção. Em breve você poderá acessar sua conta e ver seus pedidos."]},favoritos:{title:"Meus favoritos",paragraphs:["Guarde seus produtos favoritos para comprar depois.","Esta página está em construção. Em breve você poderá salvar e gerenciar seus favoritos."]},cadastro:{title:"Cadastre-se",paragraphs:["Crie sua conta para agilizar compras e acompanhar pedidos.","Esta página está em construção. Em breve disponibilizaremos o formulário de cadastro."]},login:{title:"Login",paragraphs:["Acesse sua conta para gerenciar pedidos e favoritos.","Esta página está em construção. Em breve disponibilizaremos o acesso à sua conta."]}};function GS(){return a.jsx(Gc,{to:"/chapeus",replace:!0})}function QS(){return a.jsx(Gc,{to:"/country",replace:!0})}function qS(){const[e]=Ta(),t=e.get("q"),r=t?`/produtos?q=${encodeURIComponent(t)}`:"/produtos";return a.jsx(Gc,{to:r,replace:!0})}function YS(){return a.jsx(zx,{children:a.jsx(Fx,{children:a.jsxs(Ax,{children:[a.jsx(Qv,{}),a.jsxs(yx,{children:[a.jsx(W,{path:"/",element:a.jsx(B2,{})}),a.jsx(W,{path:"/chapeus",element:a.jsx(B4,{})}),a.jsx(W,{path:"/times",element:a.jsx(GS,{})}),a.jsx(W,{path:"/country",element:a.jsx(Hr,{})}),a.jsx(W,{path:"/agro",element:a.jsx(QS,{})}),a.jsx(W,{path:"/produtos",element:a.jsx(Hr,{})}),a.jsx(W,{path:"/produto/:id",element:a.jsx(p4,{})}),a.jsx(W,{path:"/carrinho",element:a.jsx(Pb,{})}),a.jsx(W,{path:"/checkout",element:a.jsx(Sj,{})}),a.jsx(W,{path:"/checkout/sucesso",element:a.jsx(g3,{})}),a.jsx(W,{path:"/pedido/consultar/:id",element:a.jsx(Df,{})}),a.jsx(W,{path:"/pedido/consultar",element:a.jsx(Df,{})}),a.jsx(W,{path:"/busca",element:a.jsx(qS,{})}),a.jsx(W,{path:"/sobre",element:a.jsx(WS,{})}),a.jsx(W,{path:"/contato",element:a.jsx(Vk,{})}),a.jsx(W,{path:"/ajuda",element:a.jsx(Ck,{})}),a.jsx(W,{path:"/politica-de-privacidade",element:a.jsx(Ct,{...Pt["politica-de-privacidade"]})}),a.jsx(W,{path:"/termos",element:a.jsx(Ct,{...Pt.termos})}),a.jsx(W,{path:"/lojas",element:a.jsx(Ct,{...Pt.lojas})}),a.jsx(W,{path:"/trabalhe-conosco",element:a.jsx(Ct,{...Pt["trabalhe-conosco"]})}),a.jsx(W,{path:"/troca-devolucao",element:a.jsx(Ct,{...Pt["troca-devolucao"]})}),a.jsx(W,{path:"/entregas",element:a.jsx(CS,{})}),a.jsx(W,{path:"/pagamento",element:a.jsx(mS,{})}),a.jsx(W,{path:"/pedidos",element:a.jsx(Ct,{...Pt.pedidos})}),a.jsx(W,{path:"/favoritos",element:a.jsx(Ct,{...Pt.favoritos})}),a.jsx(W,{path:"/cadastro",element:a.jsx(Ct,{...Pt.cadastro})}),a.jsx(W,{path:"/login",element:a.jsx(Ct,{...Pt.login})}),a.jsx(W,{path:"/categoria/:slug",element:a.jsx(Hr,{})}),a.jsx(W,{path:"/brasileirao",element:a.jsx(Hr,{})}),a.jsx(W,{path:"/europeus",element:a.jsx(Hr,{})}),a.jsx(W,{path:"/lancamentos",element:a.jsx(W5,{})}),a.jsx(W,{path:"/promocoes",element:a.jsx(Hr,{})})]})]})})})}const KS=Dv`
  :root {
    --navbar-height: 108px;
    --safe-area-bottom: env(safe-area-inset-bottom, 0px);

    /* Tipografia alinhada à logo: Glamour Country (Glamour) + script (Country) */
    --font-display: 'Rye', 'Smokum', Georgia, serif;
    --font-script: 'Pinyon Script', 'Great Vibes', cursive;
    --font-body: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

    /* Marrom caramelo da logo */
    --color-primary: #9B7349;
    --color-primary-hover: #82613D;
    --color-primary-soft: rgba(155, 115, 73, 0.12);
    --color-bg: #FAF7F2;
    --color-surface: #FFFFFF;
    --color-text: #3D3229;
    --color-text-muted: #7A6B5D;
    --color-border: #E5DDD3;
    --color-accent: #B8956A;
    --color-footer-bg: #4A3F35;
    --color-footer-text: #D4C9BC;
  }

  @media (max-width: 767px) {
    :root {
      --navbar-height: 88px;
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
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-text);
    background: var(--color-bg);
  }

  h1, h2, h3 {
    font-family: var(--font-display);
    font-weight: 400;
    letter-spacing: 0.02em;
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

  /* Evita ícones SVG (react-icons) esticarem no layout */
  button svg,
  a svg {
    flex-shrink: 0;
  }

  ul {
    list-style: none;
  }
`;Ol.createRoot(document.getElementById("root")).render(a.jsxs(re.StrictMode,{children:[a.jsx(KS,{}),a.jsx(YS,{})]}));
