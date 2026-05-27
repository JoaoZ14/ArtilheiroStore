function qh(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(n,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function Kh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $f={exports:{}},ua={},Of={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lo=Symbol.for("react.element"),Yh=Symbol.for("react.portal"),Xh=Symbol.for("react.fragment"),Jh=Symbol.for("react.strict_mode"),Zh=Symbol.for("react.profiler"),e0=Symbol.for("react.provider"),t0=Symbol.for("react.context"),r0=Symbol.for("react.forward_ref"),n0=Symbol.for("react.suspense"),o0=Symbol.for("react.memo"),i0=Symbol.for("react.lazy"),tu=Symbol.iterator;function a0(e){return e===null||typeof e!="object"?null:(e=tu&&e[tu]||e["@@iterator"],typeof e=="function"?e:null)}var Af={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mf=Object.assign,Ff={};function zn(e,t,r){this.props=e,this.context=t,this.refs=Ff,this.updater=r||Af}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Df(){}Df.prototype=zn.prototype;function Us(e,t,r){this.props=e,this.context=t,this.refs=Ff,this.updater=r||Af}var Hs=Us.prototype=new Df;Hs.constructor=Us;Mf(Hs,zn.prototype);Hs.isPureReactComponent=!0;var ru=Array.isArray,Bf=Object.prototype.hasOwnProperty,Vs={current:null},Uf={key:!0,ref:!0,__self:!0,__source:!0};function Hf(e,t,r){var n,o={},i=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Bf.call(t,n)&&!Uf.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:Lo,type:e,key:i,ref:l,props:o,_owner:Vs.current}}function l0(e,t){return{$$typeof:Lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lo}function s0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var nu=/\/+/g;function Ma(e,t){return typeof e=="object"&&e!==null&&e.key!=null?s0(""+e.key):t.toString(36)}function pi(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Lo:case Yh:l=!0}}if(l)return l=e,o=o(l),e=n===""?"."+Ma(l,0):n,ru(o)?(r="",e!=null&&(r=e.replace(nu,"$&/")+"/"),pi(o,t,r,"",function(d){return d})):o!=null&&(Ws(o)&&(o=l0(o,r+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(nu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,n=n===""?".":n+":",ru(e))for(var s=0;s<e.length;s++){i=e[s];var u=n+Ma(i,s);l+=pi(i,t,r,u,o)}else if(u=a0(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=n+Ma(i,s++),l+=pi(i,t,r,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Fo(e,t,r){if(e==null)return e;var n=[],o=0;return pi(e,n,"","",function(i){return t.call(r,i,o++)}),n}function c0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _e={current:null},mi={transition:null},u0={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:mi,ReactCurrentOwner:Vs};function Vf(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Fo,forEach:function(e,t,r){Fo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Fo(e,function(){t++}),t},toArray:function(e){return Fo(e,function(t){return t})||[]},only:function(e){if(!Ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=zn;U.Fragment=Xh;U.Profiler=Zh;U.PureComponent=Us;U.StrictMode=Jh;U.Suspense=n0;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;U.act=Vf;U.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Mf({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Vs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Bf.call(t,u)&&!Uf.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];n.children=s}return{$$typeof:Lo,type:e.type,key:o,ref:i,props:n,_owner:l}};U.createContext=function(e){return e={$$typeof:t0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:e0,_context:e},e.Consumer=e};U.createElement=Hf;U.createFactory=function(e){var t=Hf.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:r0,render:e}};U.isValidElement=Ws;U.lazy=function(e){return{$$typeof:i0,_payload:{_status:-1,_result:e},_init:c0}};U.memo=function(e,t){return{$$typeof:o0,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=mi.transition;mi.transition={};try{e()}finally{mi.transition=t}};U.unstable_act=Vf;U.useCallback=function(e,t){return _e.current.useCallback(e,t)};U.useContext=function(e){return _e.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return _e.current.useDeferredValue(e)};U.useEffect=function(e,t){return _e.current.useEffect(e,t)};U.useId=function(){return _e.current.useId()};U.useImperativeHandle=function(e,t,r){return _e.current.useImperativeHandle(e,t,r)};U.useInsertionEffect=function(e,t){return _e.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return _e.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return _e.current.useMemo(e,t)};U.useReducer=function(e,t,r){return _e.current.useReducer(e,t,r)};U.useRef=function(e){return _e.current.useRef(e)};U.useState=function(e){return _e.current.useState(e)};U.useSyncExternalStore=function(e,t,r){return _e.current.useSyncExternalStore(e,t,r)};U.useTransition=function(){return _e.current.useTransition()};U.version="18.3.1";Of.exports=U;var v=Of.exports;const re=Kh(v),d0=qh({__proto__:null,default:re},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0=v,p0=Symbol.for("react.element"),m0=Symbol.for("react.fragment"),h0=Object.prototype.hasOwnProperty,g0=f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x0={key:!0,ref:!0,__self:!0,__source:!0};function Wf(e,t,r){var n,o={},i=null,l=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)h0.call(t,n)&&!x0.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:p0,type:e,key:i,ref:l,props:o,_owner:g0.current}}ua.Fragment=m0;ua.jsx=Wf;ua.jsxs=Wf;$f.exports=ua;var a=$f.exports,Nl={},Gf={exports:{}},Ye={},Qf={exports:{}},qf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,R){var F=T.length;T.push(R);e:for(;0<F;){var q=F-1>>>1,K=T[q];if(0<o(K,R))T[q]=R,T[F]=K,F=q;else break e}}function r(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var R=T[0],F=T.pop();if(F!==R){T[0]=F;e:for(var q=0,K=T.length,wt=K>>>1;q<wt;){var Ue=2*(q+1)-1,bt=T[Ue],He=Ue+1,ye=T[He];if(0>o(bt,F))He<K&&0>o(ye,bt)?(T[q]=ye,T[He]=F,q=He):(T[q]=bt,T[Ue]=F,q=Ue);else if(He<K&&0>o(ye,F))T[q]=ye,T[He]=F,q=He;else break e}}return R}function o(T,R){var F=T.sortIndex-R.sortIndex;return F!==0?F:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],d=[],f=1,m=null,x=3,b=!1,y=!1,k=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var R=r(d);R!==null;){if(R.callback===null)n(d);else if(R.startTime<=T)n(d),R.sortIndex=R.expirationTime,t(u,R);else break;R=r(d)}}function w(T){if(k=!1,h(T),!y)if(r(u)!==null)y=!0,ue(C);else{var R=r(d);R!==null&&ge(w,R.startTime-T)}}function C(T,R){y=!1,k&&(k=!1,g(I),I=-1),b=!0;var F=x;try{for(h(R),m=r(u);m!==null&&(!(m.expirationTime>R)||T&&!M());){var q=m.callback;if(typeof q=="function"){m.callback=null,x=m.priorityLevel;var K=q(m.expirationTime<=R);R=e.unstable_now(),typeof K=="function"?m.callback=K:m===r(u)&&n(u),h(R)}else n(u);m=r(u)}if(m!==null)var wt=!0;else{var Ue=r(d);Ue!==null&&ge(w,Ue.startTime-R),wt=!1}return wt}finally{m=null,x=F,b=!1}}var P=!1,j=null,I=-1,_=5,E=-1;function M(){return!(e.unstable_now()-E<_)}function O(){if(j!==null){var T=e.unstable_now();E=T;var R=!0;try{R=j(!0,T)}finally{R?H():(P=!1,j=null)}}else P=!1}var H;if(typeof p=="function")H=function(){p(O)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Se=L.port2;L.port1.onmessage=O,H=function(){Se.postMessage(null)}}else H=function(){S(O,0)};function ue(T){j=T,P||(P=!0,H())}function ge(T,R){I=S(function(){T(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,ue(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(T){switch(x){case 1:case 2:case 3:var R=3;break;default:R=x}var F=x;x=R;try{return T()}finally{x=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var F=x;x=T;try{return R()}finally{x=F}},e.unstable_scheduleCallback=function(T,R,F){var q=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?q+F:q):F=q,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=F+K,T={id:f++,callback:R,priorityLevel:T,startTime:F,expirationTime:K,sortIndex:-1},F>q?(T.sortIndex=F,t(d,T),r(u)===null&&T===r(d)&&(k?(g(I),I=-1):k=!0,ge(w,F-q))):(T.sortIndex=K,t(u,T),y||b||(y=!0,ue(C))),T},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(T){var R=x;return function(){var F=x;x=R;try{return T.apply(this,arguments)}finally{x=F}}}})(qf);Qf.exports=qf;var v0=Qf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0=v,Ke=v0;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kf=new Set,so={};function Ar(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for(so[e]=t,e=0;e<t.length;e++)Kf.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_l=Object.prototype.hasOwnProperty,w0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},iu={};function b0(e){return _l.call(iu,e)?!0:_l.call(ou,e)?!1:w0.test(e)?iu[e]=!0:(ou[e]=!0,!1)}function j0(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k0(e,t,r,n){if(t===null||typeof t>"u"||j0(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,r,n,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gs=/[\-:]([a-z])/g;function Qs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gs,Qs);Ce[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gs,Qs);Ce[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gs,Qs);Ce[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function qs(e,t,r,n){var o=Ce.hasOwnProperty(t)?Ce[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k0(t,r,o,n)&&(r=null),n||o===null?b0(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Ft=y0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Qr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),Ks=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),Yf=Symbol.for("react.provider"),Xf=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Ol=Symbol.for("react.suspense_list"),Xs=Symbol.for("react.memo"),Yt=Symbol.for("react.lazy"),Jf=Symbol.for("react.offscreen"),au=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Fa;function Qn(e){if(Fa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Fa=t&&t[1]||""}return`
`+Fa+e}var Da=!1;function Ba(e,t){if(!e||Da)return"";Da=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=n.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Da=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Qn(e):""}function C0(e){switch(e.tag){case 5:return Qn(e.type);case 16:return Qn("Lazy");case 13:return Qn("Suspense");case 19:return Qn("SuspenseList");case 0:case 2:case 15:return e=Ba(e.type,!1),e;case 11:return e=Ba(e.type.render,!1),e;case 1:return e=Ba(e.type,!0),e;default:return""}}function Al(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qr:return"Fragment";case Qr:return"Portal";case Rl:return"Profiler";case Ks:return"StrictMode";case $l:return"Suspense";case Ol:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xf:return(e.displayName||"Context")+".Consumer";case Yf:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xs:return t=e.displayName||null,t!==null?t:Al(e.type)||"Memo";case Yt:t=e._payload,e=e._init;try{return Al(e(t))}catch{}}return null}function S0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Al(t);case 8:return t===Ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function P0(e){var t=Zf(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){n=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bo(e){e._valueTracker||(e._valueTracker=P0(e))}function ep(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Zf(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ml(e,t){var r=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function lu(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=mr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tp(e,t){t=t.checked,t!=null&&qs(e,"checked",t,!1)}function Fl(e,t){tp(e,t);var r=mr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Dl(e,t.type,mr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function su(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Dl(e,t,r){(t!=="number"||Li(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var qn=Array.isArray;function cn(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+mr(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(z(92));if(qn(r)){if(1<r.length)throw Error(z(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:mr(r)}}function rp(e,t){var r=mr(t.value),n=mr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function uu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function np(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ul(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?np(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Uo,op=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Uo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function co(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},E0=["Webkit","ms","Moz","O"];Object.keys(Jn).forEach(function(e){E0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Jn[t]=Jn[e]})});function ip(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Jn.hasOwnProperty(e)&&Jn[e]?(""+t).trim():t+"px"}function ap(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=ip(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var z0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(z0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wl=null;function Js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gl=null,un=null,dn=null;function du(e){if(e=Ro(e)){if(typeof Gl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=ha(t),Gl(e.stateNode,e.type,t))}}function lp(e){un?dn?dn.push(e):dn=[e]:un=e}function sp(){if(un){var e=un,t=dn;if(dn=un=null,du(e),t)for(e=0;e<t.length;e++)du(t[e])}}function cp(e,t){return e(t)}function up(){}var Ua=!1;function dp(e,t,r){if(Ua)return e(t,r);Ua=!0;try{return cp(e,t,r)}finally{Ua=!1,(un!==null||dn!==null)&&(up(),sp())}}function uo(e,t){var r=e.stateNode;if(r===null)return null;var n=ha(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(z(231,t,typeof r));return r}var Ql=!1;if($t)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ql=!1}function I0(e,t,r,n,o,i,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(f){this.onError(f)}}var Zn=!1,Ni=null,_i=!1,ql=null,T0={onError:function(e){Zn=!0,Ni=e}};function L0(e,t,r,n,o,i,l,s,u){Zn=!1,Ni=null,I0.apply(T0,arguments)}function N0(e,t,r,n,o,i,l,s,u){if(L0.apply(this,arguments),Zn){if(Zn){var d=Ni;Zn=!1,Ni=null}else throw Error(z(198));_i||(_i=!0,ql=d)}}function Mr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function fp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(Mr(e)!==e)throw Error(z(188))}function _0(e){var t=e.alternate;if(!t){if(t=Mr(e),t===null)throw Error(z(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return fu(o),e;if(i===n)return fu(o),t;i=i.sibling}throw Error(z(188))}if(r.return!==n.return)r=o,n=i;else{for(var l=!1,s=o.child;s;){if(s===r){l=!0,r=o,n=i;break}if(s===n){l=!0,n=o,r=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===r){l=!0,r=i,n=o;break}if(s===n){l=!0,n=i,r=o;break}s=s.sibling}if(!l)throw Error(z(189))}}if(r.alternate!==n)throw Error(z(190))}if(r.tag!==3)throw Error(z(188));return r.stateNode.current===r?e:t}function pp(e){return e=_0(e),e!==null?mp(e):null}function mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mp(e);if(t!==null)return t;e=e.sibling}return null}var hp=Ke.unstable_scheduleCallback,pu=Ke.unstable_cancelCallback,R0=Ke.unstable_shouldYield,$0=Ke.unstable_requestPaint,ce=Ke.unstable_now,O0=Ke.unstable_getCurrentPriorityLevel,Zs=Ke.unstable_ImmediatePriority,gp=Ke.unstable_UserBlockingPriority,Ri=Ke.unstable_NormalPriority,A0=Ke.unstable_LowPriority,xp=Ke.unstable_IdlePriority,da=null,vt=null;function M0(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(da,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:B0,F0=Math.log,D0=Math.LN2;function B0(e){return e>>>=0,e===0?32:31-(F0(e)/D0|0)|0}var Ho=64,Vo=4194304;function Kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $i(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~o;s!==0?n=Kn(s):(i&=l,i!==0&&(n=Kn(i)))}else l=r&~o,l!==0?n=Kn(l):i!==0&&(n=Kn(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-ut(t),o=1<<r,n|=e[r],t&=~o;return n}function U0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function H0(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ut(i),s=1<<l,u=o[l];u===-1?(!(s&r)||s&n)&&(o[l]=U0(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vp(){var e=Ho;return Ho<<=1,!(Ho&4194240)&&(Ho=64),e}function Ha(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function No(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=r}function V0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-ut(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function ec(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-ut(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var Y=0;function yp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wp,tc,bp,jp,kp,Yl=!1,Wo=[],or=null,ir=null,ar=null,fo=new Map,po=new Map,Jt=[],W0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mu(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":fo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":po.delete(t.pointerId)}}function Mn(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ro(t),t!==null&&tc(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function G0(e,t,r,n,o){switch(t){case"focusin":return or=Mn(or,e,t,r,n,o),!0;case"dragenter":return ir=Mn(ir,e,t,r,n,o),!0;case"mouseover":return ar=Mn(ar,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return fo.set(i,Mn(fo.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,po.set(i,Mn(po.get(i)||null,e,t,r,n,o)),!0}return!1}function Cp(e){var t=Sr(e.target);if(t!==null){var r=Mr(t);if(r!==null){if(t=r.tag,t===13){if(t=fp(r),t!==null){e.blockedOn=t,kp(e.priority,function(){bp(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Wl=n,r.target.dispatchEvent(n),Wl=null}else return t=Ro(r),t!==null&&tc(t),e.blockedOn=r,!1;t.shift()}return!0}function hu(e,t,r){hi(e)&&r.delete(t)}function Q0(){Yl=!1,or!==null&&hi(or)&&(or=null),ir!==null&&hi(ir)&&(ir=null),ar!==null&&hi(ar)&&(ar=null),fo.forEach(hu),po.forEach(hu)}function Fn(e,t){e.blockedOn===t&&(e.blockedOn=null,Yl||(Yl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Q0)))}function mo(e){function t(o){return Fn(o,e)}if(0<Wo.length){Fn(Wo[0],e);for(var r=1;r<Wo.length;r++){var n=Wo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(or!==null&&Fn(or,e),ir!==null&&Fn(ir,e),ar!==null&&Fn(ar,e),fo.forEach(t),po.forEach(t),r=0;r<Jt.length;r++)n=Jt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Jt.length&&(r=Jt[0],r.blockedOn===null);)Cp(r),r.blockedOn===null&&Jt.shift()}var fn=Ft.ReactCurrentBatchConfig,Oi=!0;function q0(e,t,r,n){var o=Y,i=fn.transition;fn.transition=null;try{Y=1,rc(e,t,r,n)}finally{Y=o,fn.transition=i}}function K0(e,t,r,n){var o=Y,i=fn.transition;fn.transition=null;try{Y=4,rc(e,t,r,n)}finally{Y=o,fn.transition=i}}function rc(e,t,r,n){if(Oi){var o=Xl(e,t,r,n);if(o===null)Za(e,t,n,Ai,r),mu(e,n);else if(G0(o,e,t,r,n))n.stopPropagation();else if(mu(e,n),t&4&&-1<W0.indexOf(e)){for(;o!==null;){var i=Ro(o);if(i!==null&&wp(i),i=Xl(e,t,r,n),i===null&&Za(e,t,n,Ai,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Za(e,t,n,null,r)}}var Ai=null;function Xl(e,t,r,n){if(Ai=null,e=Js(n),e=Sr(e),e!==null)if(t=Mr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=fp(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ai=e,null}function Sp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O0()){case Zs:return 1;case gp:return 4;case Ri:case A0:return 16;case xp:return 536870912;default:return 16}default:return 16}}var er=null,nc=null,gi=null;function Pp(){if(gi)return gi;var e,t=nc,r=t.length,n,o="value"in er?er.value:er.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===o[i-n];n++);return gi=o.slice(e,1<n?1-n:void 0)}function xi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Go(){return!0}function gu(){return!1}function Xe(e){function t(r,n,o,i,l){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Go:gu,this.isPropagationStopped=gu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=Xe(In),_o=le({},In,{view:0,detail:0}),Y0=Xe(_o),Va,Wa,Dn,fa=le({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ic,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Dn&&(Dn&&e.type==="mousemove"?(Va=e.screenX-Dn.screenX,Wa=e.screenY-Dn.screenY):Wa=Va=0,Dn=e),Va)},movementY:function(e){return"movementY"in e?e.movementY:Wa}}),xu=Xe(fa),X0=le({},fa,{dataTransfer:0}),J0=Xe(X0),Z0=le({},_o,{relatedTarget:0}),Ga=Xe(Z0),eg=le({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),tg=Xe(eg),rg=le({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ng=Xe(rg),og=le({},In,{data:0}),vu=Xe(og),ig={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ag={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lg[e])?!!t[e]:!1}function ic(){return sg}var cg=le({},_o,{key:function(e){if(e.key){var t=ig[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ag[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ic,charCode:function(e){return e.type==="keypress"?xi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ug=Xe(cg),dg=le({},fa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=Xe(dg),fg=le({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ic}),pg=Xe(fg),mg=le({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),hg=Xe(mg),gg=le({},fa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xg=Xe(gg),vg=[9,13,27,32],ac=$t&&"CompositionEvent"in window,eo=null;$t&&"documentMode"in document&&(eo=document.documentMode);var yg=$t&&"TextEvent"in window&&!eo,Ep=$t&&(!ac||eo&&8<eo&&11>=eo),wu=" ",bu=!1;function zp(e,t){switch(e){case"keyup":return vg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Kr=!1;function wg(e,t){switch(e){case"compositionend":return Ip(t);case"keypress":return t.which!==32?null:(bu=!0,wu);case"textInput":return e=t.data,e===wu&&bu?null:e;default:return null}}function bg(e,t){if(Kr)return e==="compositionend"||!ac&&zp(e,t)?(e=Pp(),gi=nc=er=null,Kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ep&&t.locale!=="ko"?null:t.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!jg[e.type]:t==="textarea"}function Tp(e,t,r,n){lp(n),t=Mi(t,"onChange"),0<t.length&&(r=new oc("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var to=null,ho=null;function kg(e){Bp(e,0)}function pa(e){var t=Jr(e);if(ep(t))return e}function Cg(e,t){if(e==="change")return t}var Lp=!1;if($t){var Qa;if($t){var qa="oninput"in document;if(!qa){var ku=document.createElement("div");ku.setAttribute("oninput","return;"),qa=typeof ku.oninput=="function"}Qa=qa}else Qa=!1;Lp=Qa&&(!document.documentMode||9<document.documentMode)}function Cu(){to&&(to.detachEvent("onpropertychange",Np),ho=to=null)}function Np(e){if(e.propertyName==="value"&&pa(ho)){var t=[];Tp(t,ho,e,Js(e)),dp(kg,t)}}function Sg(e,t,r){e==="focusin"?(Cu(),to=t,ho=r,to.attachEvent("onpropertychange",Np)):e==="focusout"&&Cu()}function Pg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pa(ho)}function Eg(e,t){if(e==="click")return pa(t)}function zg(e,t){if(e==="input"||e==="change")return pa(t)}function Ig(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Ig;function go(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!_l.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function Su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pu(e,t){var r=Su(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Su(r)}}function _p(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?_p(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rp(){for(var e=window,t=Li();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Li(e.document)}return t}function lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tg(e){var t=Rp(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&_p(r.ownerDocument.documentElement,r)){if(n!==null&&lc(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Pu(r,i);var l=Pu(r,n);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lg=$t&&"documentMode"in document&&11>=document.documentMode,Yr=null,Jl=null,ro=null,Zl=!1;function Eu(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Zl||Yr==null||Yr!==Li(n)||(n=Yr,"selectionStart"in n&&lc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ro&&go(ro,n)||(ro=n,n=Mi(Jl,"onSelect"),0<n.length&&(t=new oc("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Yr)))}function Qo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Xr={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},Ka={},$p={};$t&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function ma(e){if(Ka[e])return Ka[e];if(!Xr[e])return e;var t=Xr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in $p)return Ka[e]=t[r];return e}var Op=ma("animationend"),Ap=ma("animationiteration"),Mp=ma("animationstart"),Fp=ma("transitionend"),Dp=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,t){Dp.set(e,t),Ar(t,[e])}for(var Ya=0;Ya<zu.length;Ya++){var Xa=zu[Ya],Ng=Xa.toLowerCase(),_g=Xa[0].toUpperCase()+Xa.slice(1);gr(Ng,"on"+_g)}gr(Op,"onAnimationEnd");gr(Ap,"onAnimationIteration");gr(Mp,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Fp,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function Iu(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,N0(n,t,void 0,e),e.currentTarget=null}function Bp(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Iu(o,s,d),i=u}else for(l=0;l<n.length;l++){if(s=n[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Iu(o,s,d),i=u}}}if(_i)throw e=ql,_i=!1,ql=null,e}function J(e,t){var r=t[os];r===void 0&&(r=t[os]=new Set);var n=e+"__bubble";r.has(n)||(Up(t,e,2,!1),r.add(n))}function Ja(e,t,r){var n=0;t&&(n|=4),Up(r,e,n,t)}var qo="_reactListening"+Math.random().toString(36).slice(2);function xo(e){if(!e[qo]){e[qo]=!0,Kf.forEach(function(r){r!=="selectionchange"&&(Rg.has(r)||Ja(r,!1,e),Ja(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qo]||(t[qo]=!0,Ja("selectionchange",!1,t))}}function Up(e,t,r,n){switch(Sp(t)){case 1:var o=q0;break;case 4:o=K0;break;default:o=rc}r=o.bind(null,t,r,e),o=void 0,!Ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Za(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=n.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Sr(s),l===null)return;if(u=l.tag,u===5||u===6){n=i=l;continue e}s=s.parentNode}}n=n.return}dp(function(){var d=i,f=Js(r),m=[];e:{var x=Dp.get(e);if(x!==void 0){var b=oc,y=e;switch(e){case"keypress":if(xi(r)===0)break e;case"keydown":case"keyup":b=ug;break;case"focusin":y="focus",b=Ga;break;case"focusout":y="blur",b=Ga;break;case"beforeblur":case"afterblur":b=Ga;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=xu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=pg;break;case Op:case Ap:case Mp:b=tg;break;case Fp:b=hg;break;case"scroll":b=Y0;break;case"wheel":b=xg;break;case"copy":case"cut":case"paste":b=ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=yu}var k=(t&4)!==0,S=!k&&e==="scroll",g=k?x!==null?x+"Capture":null:x;k=[];for(var p=d,h;p!==null;){h=p;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,g!==null&&(w=uo(p,g),w!=null&&k.push(vo(p,w,h)))),S)break;p=p.return}0<k.length&&(x=new b(x,y,null,r,f),m.push({event:x,listeners:k}))}}if(!(t&7)){e:{if(x=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",x&&r!==Wl&&(y=r.relatedTarget||r.fromElement)&&(Sr(y)||y[Ot]))break e;if((b||x)&&(x=f.window===f?f:(x=f.ownerDocument)?x.defaultView||x.parentWindow:window,b?(y=r.relatedTarget||r.toElement,b=d,y=y?Sr(y):null,y!==null&&(S=Mr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=d),b!==y)){if(k=xu,w="onMouseLeave",g="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(k=yu,w="onPointerLeave",g="onPointerEnter",p="pointer"),S=b==null?x:Jr(b),h=y==null?x:Jr(y),x=new k(w,p+"leave",b,r,f),x.target=S,x.relatedTarget=h,w=null,Sr(f)===d&&(k=new k(g,p+"enter",y,r,f),k.target=h,k.relatedTarget=S,w=k),S=w,b&&y)t:{for(k=b,g=y,p=0,h=k;h;h=Ur(h))p++;for(h=0,w=g;w;w=Ur(w))h++;for(;0<p-h;)k=Ur(k),p--;for(;0<h-p;)g=Ur(g),h--;for(;p--;){if(k===g||g!==null&&k===g.alternate)break t;k=Ur(k),g=Ur(g)}k=null}else k=null;b!==null&&Tu(m,x,b,k,!1),y!==null&&S!==null&&Tu(m,S,y,k,!0)}}e:{if(x=d?Jr(d):window,b=x.nodeName&&x.nodeName.toLowerCase(),b==="select"||b==="input"&&x.type==="file")var C=Cg;else if(ju(x))if(Lp)C=zg;else{C=Pg;var P=Sg}else(b=x.nodeName)&&b.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(C=Eg);if(C&&(C=C(e,d))){Tp(m,C,r,f);break e}P&&P(e,x,d),e==="focusout"&&(P=x._wrapperState)&&P.controlled&&x.type==="number"&&Dl(x,"number",x.value)}switch(P=d?Jr(d):window,e){case"focusin":(ju(P)||P.contentEditable==="true")&&(Yr=P,Jl=d,ro=null);break;case"focusout":ro=Jl=Yr=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Eu(m,r,f);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":Eu(m,r,f)}var j;if(ac)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Kr?zp(e,r)&&(I="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(I="onCompositionStart");I&&(Ep&&r.locale!=="ko"&&(Kr||I!=="onCompositionStart"?I==="onCompositionEnd"&&Kr&&(j=Pp()):(er=f,nc="value"in er?er.value:er.textContent,Kr=!0)),P=Mi(d,I),0<P.length&&(I=new vu(I,e,null,r,f),m.push({event:I,listeners:P}),j?I.data=j:(j=Ip(r),j!==null&&(I.data=j)))),(j=yg?wg(e,r):bg(e,r))&&(d=Mi(d,"onBeforeInput"),0<d.length&&(f=new vu("onBeforeInput","beforeinput",null,r,f),m.push({event:f,listeners:d}),f.data=j))}Bp(m,t)})}function vo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Mi(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=uo(e,r),i!=null&&n.unshift(vo(e,i,o)),i=uo(e,t),i!=null&&n.push(vo(e,i,o))),e=e.return}return n}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tu(e,t,r,n,o){for(var i=t._reactName,l=[];r!==null&&r!==n;){var s=r,u=s.alternate,d=s.stateNode;if(u!==null&&u===n)break;s.tag===5&&d!==null&&(s=d,o?(u=uo(r,i),u!=null&&l.unshift(vo(r,u,s))):o||(u=uo(r,i),u!=null&&l.push(vo(r,u,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var $g=/\r\n?/g,Og=/\u0000|\uFFFD/g;function Lu(e){return(typeof e=="string"?e:""+e).replace($g,`
`).replace(Og,"")}function Ko(e,t,r){if(t=Lu(t),Lu(e)!==t&&r)throw Error(z(425))}function Fi(){}var es=null,ts=null;function rs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,Ag=typeof clearTimeout=="function"?clearTimeout:void 0,Nu=typeof Promise=="function"?Promise:void 0,Mg=typeof queueMicrotask=="function"?queueMicrotask:typeof Nu<"u"?function(e){return Nu.resolve(null).then(e).catch(Fg)}:ns;function Fg(e){setTimeout(function(){throw e})}function el(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),mo(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);mo(t)}function lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _u(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Tn=Math.random().toString(36).slice(2),xt="__reactFiber$"+Tn,yo="__reactProps$"+Tn,Ot="__reactContainer$"+Tn,os="__reactEvents$"+Tn,Dg="__reactListeners$"+Tn,Bg="__reactHandles$"+Tn;function Sr(e){var t=e[xt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Ot]||r[xt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=_u(e);e!==null;){if(r=e[xt])return r;e=_u(e)}return t}e=r,r=e.parentNode}return null}function Ro(e){return e=e[xt]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function ha(e){return e[yo]||null}var is=[],Zr=-1;function xr(e){return{current:e}}function ee(e){0>Zr||(e.current=is[Zr],is[Zr]=null,Zr--)}function X(e,t){Zr++,is[Zr]=e.current,e.current=t}var hr={},Te=xr(hr),Me=xr(!1),Lr=hr;function gn(e,t){var r=e.type.contextTypes;if(!r)return hr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Fe(e){return e=e.childContextTypes,e!=null}function Di(){ee(Me),ee(Te)}function Ru(e,t,r){if(Te.current!==hr)throw Error(z(168));X(Te,t),X(Me,r)}function Hp(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(z(108,S0(e)||"Unknown",o));return le({},r,n)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hr,Lr=Te.current,X(Te,e),X(Me,Me.current),!0}function $u(e,t,r){var n=e.stateNode;if(!n)throw Error(z(169));r?(e=Hp(e,t,Lr),n.__reactInternalMemoizedMergedChildContext=e,ee(Me),ee(Te),X(Te,e)):ee(Me),X(Me,r)}var It=null,ga=!1,tl=!1;function Vp(e){It===null?It=[e]:It.push(e)}function Ug(e){ga=!0,Vp(e)}function vr(){if(!tl&&It!==null){tl=!0;var e=0,t=Y;try{var r=It;for(Y=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}It=null,ga=!1}catch(o){throw It!==null&&(It=It.slice(e+1)),hp(Zs,vr),o}finally{Y=t,tl=!1}}return null}var en=[],tn=0,Ui=null,Hi=0,Je=[],Ze=0,Nr=null,Lt=1,Nt="";function kr(e,t){en[tn++]=Hi,en[tn++]=Ui,Ui=e,Hi=t}function Wp(e,t,r){Je[Ze++]=Lt,Je[Ze++]=Nt,Je[Ze++]=Nr,Nr=e;var n=Lt;e=Nt;var o=32-ut(n)-1;n&=~(1<<o),r+=1;var i=32-ut(t)+o;if(30<i){var l=o-o%5;i=(n&(1<<l)-1).toString(32),n>>=l,o-=l,Lt=1<<32-ut(t)+o|r<<o|n,Nt=i+e}else Lt=1<<i|r<<o|n,Nt=e}function sc(e){e.return!==null&&(kr(e,1),Wp(e,1,0))}function cc(e){for(;e===Ui;)Ui=en[--tn],en[tn]=null,Hi=en[--tn],en[tn]=null;for(;e===Nr;)Nr=Je[--Ze],Je[Ze]=null,Nt=Je[--Ze],Je[Ze]=null,Lt=Je[--Ze],Je[Ze]=null}var qe=null,Qe=null,te=!1,ct=null;function Gp(e,t){var r=et(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ou(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Qe=lr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Nr!==null?{id:Lt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=et(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,qe=e,Qe=null,!0):!1;default:return!1}}function as(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ls(e){if(te){var t=Qe;if(t){var r=t;if(!Ou(e,t)){if(as(e))throw Error(z(418));t=lr(r.nextSibling);var n=qe;t&&Ou(e,t)?Gp(n,r):(e.flags=e.flags&-4097|2,te=!1,qe=e)}}else{if(as(e))throw Error(z(418));e.flags=e.flags&-4097|2,te=!1,qe=e}}}function Au(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Yo(e){if(e!==qe)return!1;if(!te)return Au(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!rs(e.type,e.memoizedProps)),t&&(t=Qe)){if(as(e))throw Qp(),Error(z(418));for(;t;)Gp(e,t),t=lr(t.nextSibling)}if(Au(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Qe=lr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=qe?lr(e.stateNode.nextSibling):null;return!0}function Qp(){for(var e=Qe;e;)e=lr(e.nextSibling)}function xn(){Qe=qe=null,te=!1}function uc(e){ct===null?ct=[e]:ct.push(e)}var Hg=Ft.ReactCurrentBatchConfig;function Bn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(z(309));var n=r.stateNode}if(!n)throw Error(z(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!r._owner)throw Error(z(290,e))}return e}function Xo(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mu(e){var t=e._init;return t(e._payload)}function qp(e){function t(g,p){if(e){var h=g.deletions;h===null?(g.deletions=[p],g.flags|=16):h.push(p)}}function r(g,p){if(!e)return null;for(;p!==null;)t(g,p),p=p.sibling;return null}function n(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function o(g,p){return g=dr(g,p),g.index=0,g.sibling=null,g}function i(g,p,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<p?(g.flags|=2,p):h):(g.flags|=2,p)):(g.flags|=1048576,p)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,p,h,w){return p===null||p.tag!==6?(p=sl(h,g.mode,w),p.return=g,p):(p=o(p,h),p.return=g,p)}function u(g,p,h,w){var C=h.type;return C===qr?f(g,p,h.props.children,w,h.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yt&&Mu(C)===p.type)?(w=o(p,h.props),w.ref=Bn(g,p,h),w.return=g,w):(w=Ci(h.type,h.key,h.props,null,g.mode,w),w.ref=Bn(g,p,h),w.return=g,w)}function d(g,p,h,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=cl(h,g.mode,w),p.return=g,p):(p=o(p,h.children||[]),p.return=g,p)}function f(g,p,h,w,C){return p===null||p.tag!==7?(p=Tr(h,g.mode,w,C),p.return=g,p):(p=o(p,h),p.return=g,p)}function m(g,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=sl(""+p,g.mode,h),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Do:return h=Ci(p.type,p.key,p.props,null,g.mode,h),h.ref=Bn(g,null,p),h.return=g,h;case Qr:return p=cl(p,g.mode,h),p.return=g,p;case Yt:var w=p._init;return m(g,w(p._payload),h)}if(qn(p)||On(p))return p=Tr(p,g.mode,h,null),p.return=g,p;Xo(g,p)}return null}function x(g,p,h,w){var C=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return C!==null?null:s(g,p,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Do:return h.key===C?u(g,p,h,w):null;case Qr:return h.key===C?d(g,p,h,w):null;case Yt:return C=h._init,x(g,p,C(h._payload),w)}if(qn(h)||On(h))return C!==null?null:f(g,p,h,w,null);Xo(g,h)}return null}function b(g,p,h,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(h)||null,s(p,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Do:return g=g.get(w.key===null?h:w.key)||null,u(p,g,w,C);case Qr:return g=g.get(w.key===null?h:w.key)||null,d(p,g,w,C);case Yt:var P=w._init;return b(g,p,h,P(w._payload),C)}if(qn(w)||On(w))return g=g.get(h)||null,f(p,g,w,C,null);Xo(p,w)}return null}function y(g,p,h,w){for(var C=null,P=null,j=p,I=p=0,_=null;j!==null&&I<h.length;I++){j.index>I?(_=j,j=null):_=j.sibling;var E=x(g,j,h[I],w);if(E===null){j===null&&(j=_);break}e&&j&&E.alternate===null&&t(g,j),p=i(E,p,I),P===null?C=E:P.sibling=E,P=E,j=_}if(I===h.length)return r(g,j),te&&kr(g,I),C;if(j===null){for(;I<h.length;I++)j=m(g,h[I],w),j!==null&&(p=i(j,p,I),P===null?C=j:P.sibling=j,P=j);return te&&kr(g,I),C}for(j=n(g,j);I<h.length;I++)_=b(j,g,I,h[I],w),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?I:_.key),p=i(_,p,I),P===null?C=_:P.sibling=_,P=_);return e&&j.forEach(function(M){return t(g,M)}),te&&kr(g,I),C}function k(g,p,h,w){var C=On(h);if(typeof C!="function")throw Error(z(150));if(h=C.call(h),h==null)throw Error(z(151));for(var P=C=null,j=p,I=p=0,_=null,E=h.next();j!==null&&!E.done;I++,E=h.next()){j.index>I?(_=j,j=null):_=j.sibling;var M=x(g,j,E.value,w);if(M===null){j===null&&(j=_);break}e&&j&&M.alternate===null&&t(g,j),p=i(M,p,I),P===null?C=M:P.sibling=M,P=M,j=_}if(E.done)return r(g,j),te&&kr(g,I),C;if(j===null){for(;!E.done;I++,E=h.next())E=m(g,E.value,w),E!==null&&(p=i(E,p,I),P===null?C=E:P.sibling=E,P=E);return te&&kr(g,I),C}for(j=n(g,j);!E.done;I++,E=h.next())E=b(j,g,I,E.value,w),E!==null&&(e&&E.alternate!==null&&j.delete(E.key===null?I:E.key),p=i(E,p,I),P===null?C=E:P.sibling=E,P=E);return e&&j.forEach(function(O){return t(g,O)}),te&&kr(g,I),C}function S(g,p,h,w){if(typeof h=="object"&&h!==null&&h.type===qr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Do:e:{for(var C=h.key,P=p;P!==null;){if(P.key===C){if(C=h.type,C===qr){if(P.tag===7){r(g,P.sibling),p=o(P,h.props.children),p.return=g,g=p;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Yt&&Mu(C)===P.type){r(g,P.sibling),p=o(P,h.props),p.ref=Bn(g,P,h),p.return=g,g=p;break e}r(g,P);break}else t(g,P);P=P.sibling}h.type===qr?(p=Tr(h.props.children,g.mode,w,h.key),p.return=g,g=p):(w=Ci(h.type,h.key,h.props,null,g.mode,w),w.ref=Bn(g,p,h),w.return=g,g=w)}return l(g);case Qr:e:{for(P=h.key;p!==null;){if(p.key===P)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){r(g,p.sibling),p=o(p,h.children||[]),p.return=g,g=p;break e}else{r(g,p);break}else t(g,p);p=p.sibling}p=cl(h,g.mode,w),p.return=g,g=p}return l(g);case Yt:return P=h._init,S(g,p,P(h._payload),w)}if(qn(h))return y(g,p,h,w);if(On(h))return k(g,p,h,w);Xo(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(r(g,p.sibling),p=o(p,h),p.return=g,g=p):(r(g,p),p=sl(h,g.mode,w),p.return=g,g=p),l(g)):r(g,p)}return S}var vn=qp(!0),Kp=qp(!1),Vi=xr(null),Wi=null,rn=null,dc=null;function fc(){dc=rn=Wi=null}function pc(e){var t=Vi.current;ee(Vi),e._currentValue=t}function ss(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function pn(e,t){Wi=e,dc=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(dc!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(Wi===null)throw Error(z(308));rn=e,Wi.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Pr=null;function mc(e){Pr===null?Pr=[e]:Pr.push(e)}function Yp(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,mc(t)):(r.next=o.next,o.next=r),t.interleaved=r,At(e,n)}function At(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Xt=!1;function hc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,G&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,At(e,r)}return o=n.interleaved,o===null?(t.next=t,mc(n)):(t.next=o.next,o.next=t),n.interleaved=t,At(e,r)}function vi(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ec(e,r)}}function Fu(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=l:i=i.next=l,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Gi(e,t,r,n){var o=e.updateQueue;Xt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?i=d:l.next=d,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==l&&(s===null?f.firstBaseUpdate=d:s.next=d,f.lastBaseUpdate=u))}if(i!==null){var m=o.baseState;l=0,f=d=u=null,s=i;do{var x=s.lane,b=s.eventTime;if((n&x)===x){f!==null&&(f=f.next={eventTime:b,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,k=s;switch(x=t,b=r,k.tag){case 1:if(y=k.payload,typeof y=="function"){m=y.call(b,m,x);break e}m=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=k.payload,x=typeof y=="function"?y.call(b,m,x):y,x==null)break e;m=le({},m,x);break e;case 2:Xt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else b={eventTime:b,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(d=f=b,u=m):f=f.next=b,l|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(f===null&&(u=m),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Rr|=l,e.lanes=l,e.memoizedState=m}}function Du(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(z(191,o));o.call(n)}}}var $o={},yt=xr($o),wo=xr($o),bo=xr($o);function Er(e){if(e===$o)throw Error(z(174));return e}function gc(e,t){switch(X(bo,t),X(wo,e),X(yt,$o),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ul(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ul(t,e)}ee(yt),X(yt,t)}function yn(){ee(yt),ee(wo),ee(bo)}function Jp(e){Er(bo.current);var t=Er(yt.current),r=Ul(t,e.type);t!==r&&(X(wo,e),X(yt,r))}function xc(e){wo.current===e&&(ee(yt),ee(wo))}var oe=xr(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rl=[];function vc(){for(var e=0;e<rl.length;e++)rl[e]._workInProgressVersionPrimary=null;rl.length=0}var yi=Ft.ReactCurrentDispatcher,nl=Ft.ReactCurrentBatchConfig,_r=0,ie=null,pe=null,xe=null,qi=!1,no=!1,jo=0,Vg=0;function Pe(){throw Error(z(321))}function yc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!pt(e[r],t[r]))return!1;return!0}function wc(e,t,r,n,o,i){if(_r=i,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?qg:Kg,e=r(n,o),no){i=0;do{if(no=!1,jo=0,25<=i)throw Error(z(301));i+=1,xe=pe=null,t.updateQueue=null,yi.current=Yg,e=r(n,o)}while(no)}if(yi.current=Ki,t=pe!==null&&pe.next!==null,_r=0,xe=pe=ie=null,qi=!1,t)throw Error(z(300));return e}function bc(){var e=jo!==0;return jo=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ie.memoizedState=xe=e:xe=xe.next=e,xe}function nt(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=xe===null?ie.memoizedState:xe.next;if(t!==null)xe=t,pe=e;else{if(e===null)throw Error(z(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},xe===null?ie.memoizedState=xe=e:xe=xe.next=e}return xe}function ko(e,t){return typeof t=="function"?t(e):t}function ol(e){var t=nt(),r=t.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=e;var n=pe,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=l=null,u=null,d=i;do{var f=d.lane;if((_r&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=m,l=n):u=u.next=m,ie.lanes|=f,Rr|=f}d=d.next}while(d!==null&&d!==i);u===null?l=n:u.next=s,pt(n,t.memoizedState)||(Ae=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,ie.lanes|=i,Rr|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function il(e){var t=nt(),r=t.queue;if(r===null)throw Error(z(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);pt(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function Zp(){}function em(e,t){var r=ie,n=nt(),o=t(),i=!pt(n.memoizedState,o);if(i&&(n.memoizedState=o,Ae=!0),n=n.queue,jc(nm.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||xe!==null&&xe.memoizedState.tag&1){if(r.flags|=2048,Co(9,rm.bind(null,r,n,o,t),void 0,null),ve===null)throw Error(z(349));_r&30||tm(r,t,o)}return o}function tm(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function rm(e,t,r,n){t.value=r,t.getSnapshot=n,om(t)&&im(e)}function nm(e,t,r){return r(function(){om(t)&&im(e)})}function om(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!pt(e,r)}catch{return!0}}function im(e){var t=At(e,1);t!==null&&dt(t,e,1,-1)}function Bu(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ko,lastRenderedState:e},t.queue=e,e=e.dispatch=Qg.bind(null,ie,e),[t.memoizedState,e]}function Co(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function am(){return nt().memoizedState}function wi(e,t,r,n){var o=gt();ie.flags|=e,o.memoizedState=Co(1|t,r,void 0,n===void 0?null:n)}function xa(e,t,r,n){var o=nt();n=n===void 0?null:n;var i=void 0;if(pe!==null){var l=pe.memoizedState;if(i=l.destroy,n!==null&&yc(n,l.deps)){o.memoizedState=Co(t,r,i,n);return}}ie.flags|=e,o.memoizedState=Co(1|t,r,i,n)}function Uu(e,t){return wi(8390656,8,e,t)}function jc(e,t){return xa(2048,8,e,t)}function lm(e,t){return xa(4,2,e,t)}function sm(e,t){return xa(4,4,e,t)}function cm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function um(e,t,r){return r=r!=null?r.concat([e]):null,xa(4,4,cm.bind(null,t,e),r)}function kc(){}function dm(e,t){var r=nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&yc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function fm(e,t){var r=nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&yc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function pm(e,t,r){return _r&21?(pt(r,t)||(r=vp(),ie.lanes|=r,Rr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=r)}function Wg(e,t){var r=Y;Y=r!==0&&4>r?r:4,e(!0);var n=nl.transition;nl.transition={};try{e(!1),t()}finally{Y=r,nl.transition=n}}function mm(){return nt().memoizedState}function Gg(e,t,r){var n=ur(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},hm(e))gm(t,r);else if(r=Yp(e,t,r,n),r!==null){var o=Ne();dt(r,e,n,o),xm(r,t,n)}}function Qg(e,t,r){var n=ur(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(hm(e))gm(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,r);if(o.hasEagerState=!0,o.eagerState=s,pt(s,l)){var u=t.interleaved;u===null?(o.next=o,mc(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}r=Yp(e,t,o,n),r!==null&&(o=Ne(),dt(r,e,n,o),xm(r,t,n))}}function hm(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function gm(e,t){no=qi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function xm(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ec(e,r)}}var Ki={readContext:rt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},qg={readContext:rt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Uu,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,wi(4194308,4,cm.bind(null,t,e),r)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return wi(4,2,e,t)},useMemo:function(e,t){var r=gt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=gt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Gg.bind(null,ie,e),[n.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Bu,useDebugValue:kc,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Bu(!1),t=e[0];return e=Wg.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ie,o=gt();if(te){if(r===void 0)throw Error(z(407));r=r()}else{if(r=t(),ve===null)throw Error(z(349));_r&30||tm(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Uu(nm.bind(null,n,i,e),[e]),n.flags|=2048,Co(9,rm.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=gt(),t=ve.identifierPrefix;if(te){var r=Nt,n=Lt;r=(n&~(1<<32-ut(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=jo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Vg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kg={readContext:rt,useCallback:dm,useContext:rt,useEffect:jc,useImperativeHandle:um,useInsertionEffect:lm,useLayoutEffect:sm,useMemo:fm,useReducer:ol,useRef:am,useState:function(){return ol(ko)},useDebugValue:kc,useDeferredValue:function(e){var t=nt();return pm(t,pe.memoizedState,e)},useTransition:function(){var e=ol(ko)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Zp,useSyncExternalStore:em,useId:mm,unstable_isNewReconciler:!1},Yg={readContext:rt,useCallback:dm,useContext:rt,useEffect:jc,useImperativeHandle:um,useInsertionEffect:lm,useLayoutEffect:sm,useMemo:fm,useReducer:il,useRef:am,useState:function(){return il(ko)},useDebugValue:kc,useDeferredValue:function(e){var t=nt();return pe===null?t.memoizedState=e:pm(t,pe.memoizedState,e)},useTransition:function(){var e=il(ko)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Zp,useSyncExternalStore:em,useId:mm,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function cs(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:le({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var va={isMounted:function(e){return(e=e._reactInternals)?Mr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=ur(e),i=_t(n,o);i.payload=t,r!=null&&(i.callback=r),t=sr(e,i,o),t!==null&&(dt(t,e,o,n),vi(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ne(),o=ur(e),i=_t(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=sr(e,i,o),t!==null&&(dt(t,e,o,n),vi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ne(),n=ur(e),o=_t(r,n);o.tag=2,t!=null&&(o.callback=t),t=sr(e,o,n),t!==null&&(dt(t,e,n,r),vi(t,e,n))}};function Hu(e,t,r,n,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,l):t.prototype&&t.prototype.isPureReactComponent?!go(r,n)||!go(o,i):!0}function vm(e,t,r){var n=!1,o=hr,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=Fe(t)?Lr:Te.current,n=t.contextTypes,i=(n=n!=null)?gn(e,o):hr),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=va,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vu(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&va.enqueueReplaceState(t,t.state,null)}function us(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},hc(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=Fe(t)?Lr:Te.current,o.context=gn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(cs(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&va.enqueueReplaceState(o,o.state,null),Gi(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function wn(e,t){try{var r="",n=t;do r+=C0(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function al(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function ds(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Xg=typeof WeakMap=="function"?WeakMap:Map;function ym(e,t,r){r=_t(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Xi||(Xi=!0,bs=n),ds(e,t)},r}function wm(e,t,r){r=_t(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){ds(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){ds(e,t),typeof n!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Wu(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Xg;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=d1.bind(null,e,t,r),t.then(e,e))}function Gu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qu(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=_t(-1,1),t.tag=2,sr(r,t,1))),r.lanes|=1),e)}var Jg=Ft.ReactCurrentOwner,Ae=!1;function Le(e,t,r,n){t.child=e===null?Kp(t,null,r,n):vn(t,e.child,r,n)}function qu(e,t,r,n,o){r=r.render;var i=t.ref;return pn(t,o),n=wc(e,t,r,n,i,o),r=bc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(te&&r&&sc(t),t.flags|=1,Le(e,t,n,o),t.child)}function Ku(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Lc(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,bm(e,t,i,n,o)):(e=Ci(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(r=r.compare,r=r!==null?r:go,r(l,n)&&e.ref===t.ref)return Mt(e,t,o)}return t.flags|=1,e=dr(i,n),e.ref=t.ref,e.return=t,t.child=e}function bm(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(go(i,n)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Mt(e,t,o)}return fs(e,t,r,n,o)}function jm(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(on,Ge),Ge|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(on,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,X(on,Ge),Ge|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,X(on,Ge),Ge|=n;return Le(e,t,o,r),t.child}function km(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function fs(e,t,r,n,o){var i=Fe(r)?Lr:Te.current;return i=gn(t,i),pn(t,o),r=wc(e,t,r,n,i,o),n=bc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Mt(e,t,o)):(te&&n&&sc(t),t.flags|=1,Le(e,t,r,o),t.child)}function Yu(e,t,r,n,o){if(Fe(r)){var i=!0;Bi(t)}else i=!1;if(pn(t,o),t.stateNode===null)bi(e,t),vm(t,r,n),us(t,r,n,o),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,d=r.contextType;typeof d=="object"&&d!==null?d=rt(d):(d=Fe(r)?Lr:Te.current,d=gn(t,d));var f=r.getDerivedStateFromProps,m=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||u!==d)&&Vu(t,l,n,d),Xt=!1;var x=t.memoizedState;l.state=x,Gi(t,n,l,o),u=t.memoizedState,s!==n||x!==u||Me.current||Xt?(typeof f=="function"&&(cs(t,r,f,n),u=t.memoizedState),(s=Xt||Hu(t,r,s,n,x,u,d))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),l.props=n,l.state=u,l.context=d,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Xp(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:at(t.type,s),l.props=d,m=t.pendingProps,x=l.context,u=r.contextType,typeof u=="object"&&u!==null?u=rt(u):(u=Fe(r)?Lr:Te.current,u=gn(t,u));var b=r.getDerivedStateFromProps;(f=typeof b=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==m||x!==u)&&Vu(t,l,n,u),Xt=!1,x=t.memoizedState,l.state=x,Gi(t,n,l,o);var y=t.memoizedState;s!==m||x!==y||Me.current||Xt?(typeof b=="function"&&(cs(t,r,b,n),y=t.memoizedState),(d=Xt||Hu(t,r,d,n,x,y,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,y,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,y,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),l.props=n,l.state=y,l.context=u,n=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),n=!1)}return ps(e,t,r,n,i,o)}function ps(e,t,r,n,o,i){km(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return o&&$u(t,r,!1),Mt(e,t,i);n=t.stateNode,Jg.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=vn(t,e.child,null,i),t.child=vn(t,null,s,i)):Le(e,t,s,i),t.memoizedState=n.state,o&&$u(t,r,!0),t.child}function Cm(e){var t=e.stateNode;t.pendingContext?Ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ru(e,t.context,!1),gc(e,t.containerInfo)}function Xu(e,t,r,n,o){return xn(),uc(o),t.flags|=256,Le(e,t,r,n),t.child}var ms={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sm(e,t,r){var n=t.pendingProps,o=oe.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(oe,o&1),e===null)return ls(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,i?(n=t.mode,i=t.child,l={mode:"hidden",children:l},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=ba(l,n,0,null),e=Tr(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=hs(r),t.memoizedState=ms,e):Cc(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Zg(e,t,l,n,s,o,r);if(i){i=n.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:n.children};return!(l&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=dr(o,u),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=dr(s,i):(i=Tr(i,l,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,l=e.child.memoizedState,l=l===null?hs(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~r,t.memoizedState=ms,n}return i=e.child,e=i.sibling,n=dr(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Cc(e,t){return t=ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jo(e,t,r,n){return n!==null&&uc(n),vn(t,e.child,null,r),e=Cc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zg(e,t,r,n,o,i,l){if(r)return t.flags&256?(t.flags&=-257,n=al(Error(z(422))),Jo(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=ba({mode:"visible",children:n.children},o,0,null),i=Tr(i,o,l,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&vn(t,e.child,null,l),t.child.memoizedState=hs(l),t.memoizedState=ms,i);if(!(t.mode&1))return Jo(e,t,l,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(z(419)),n=al(i,n,void 0),Jo(e,t,l,n)}if(s=(l&e.childLanes)!==0,Ae||s){if(n=ve,n!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,At(e,o),dt(n,e,o,-1))}return Tc(),n=al(Error(z(421))),Jo(e,t,l,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=f1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Qe=lr(o.nextSibling),qe=t,te=!0,ct=null,e!==null&&(Je[Ze++]=Lt,Je[Ze++]=Nt,Je[Ze++]=Nr,Lt=e.id,Nt=e.overflow,Nr=t),t=Cc(t,n.children),t.flags|=4096,t)}function Ju(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ss(e.return,t,r)}function ll(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function Pm(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Le(e,t,n.children,r),n=oe.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ju(e,r,t);else if(e.tag===19)Ju(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(X(oe,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Qi(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),ll(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qi(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}ll(t,!0,r,null,i);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Rr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,r=dr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=dr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function e1(e,t,r){switch(t.tag){case 3:Cm(t),xn();break;case 5:Jp(t);break;case 1:Fe(t.type)&&Bi(t);break;case 4:gc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;X(Vi,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(X(oe,oe.current&1),t.flags|=128,null):r&t.child.childLanes?Sm(e,t,r):(X(oe,oe.current&1),e=Mt(e,t,r),e!==null?e.sibling:null);X(oe,oe.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Pm(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(oe,oe.current),n)break;return null;case 22:case 23:return t.lanes=0,jm(e,t,r)}return Mt(e,t,r)}var Em,gs,zm,Im;Em=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};gs=function(){};zm=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Er(yt.current);var i=null;switch(r){case"input":o=Ml(e,o),n=Ml(e,n),i=[];break;case"select":o=le({},o,{value:void 0}),n=le({},n,{value:void 0}),i=[];break;case"textarea":o=Bl(e,o),n=Bl(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Fi)}Hl(r,n);var l;r=null;for(d in o)if(!n.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(so.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in n){var u=n[d];if(s=o!=null?o[d]:void 0,n.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(r||(r={}),r[l]=u[l])}else r||(i||(i=[]),i.push(d,r)),r=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(so.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&J("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}r&&(i=i||[]).push("style",r);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Im=function(e,t,r,n){r!==n&&(t.flags|=4)};function Un(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function t1(e,t,r){var n=t.pendingProps;switch(cc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Fe(t.type)&&Di(),Ee(t),null;case 3:return n=t.stateNode,yn(),ee(Me),ee(Te),vc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Yo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Cs(ct),ct=null))),gs(e,t),Ee(t),null;case 5:xc(t);var o=Er(bo.current);if(r=t.type,e!==null&&t.stateNode!=null)zm(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(z(166));return Ee(t),null}if(e=Er(yt.current),Yo(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[xt]=t,n[yo]=i,e=(t.mode&1)!==0,r){case"dialog":J("cancel",n),J("close",n);break;case"iframe":case"object":case"embed":J("load",n);break;case"video":case"audio":for(o=0;o<Yn.length;o++)J(Yn[o],n);break;case"source":J("error",n);break;case"img":case"image":case"link":J("error",n),J("load",n);break;case"details":J("toggle",n);break;case"input":lu(n,i),J("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},J("invalid",n);break;case"textarea":cu(n,i),J("invalid",n)}Hl(r,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&Ko(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Ko(n.textContent,s,e),o=["children",""+s]):so.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&J("scroll",n)}switch(r){case"input":Bo(n),su(n,i,!0);break;case"textarea":Bo(n),uu(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=Fi)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=np(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[xt]=t,e[yo]=n,Em(e,t,!1,!1),t.stateNode=e;e:{switch(l=Vl(r,n),r){case"dialog":J("cancel",e),J("close",e),o=n;break;case"iframe":case"object":case"embed":J("load",e),o=n;break;case"video":case"audio":for(o=0;o<Yn.length;o++)J(Yn[o],e);o=n;break;case"source":J("error",e),o=n;break;case"img":case"image":case"link":J("error",e),J("load",e),o=n;break;case"details":J("toggle",e),o=n;break;case"input":lu(e,n),o=Ml(e,n),J("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=le({},n,{value:void 0}),J("invalid",e);break;case"textarea":cu(e,n),o=Bl(e,n),J("invalid",e);break;default:o=n}Hl(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?ap(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&op(e,u)):i==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&co(e,u):typeof u=="number"&&co(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(so.hasOwnProperty(i)?u!=null&&i==="onScroll"&&J("scroll",e):u!=null&&qs(e,i,u,l))}switch(r){case"input":Bo(e),su(e,n,!1);break;case"textarea":Bo(e),uu(e);break;case"option":n.value!=null&&e.setAttribute("value",""+mr(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?cn(e,!!n.multiple,i,!1):n.defaultValue!=null&&cn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Fi)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Im(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(z(166));if(r=Er(bo.current),Er(yt.current),Yo(t)){if(n=t.stateNode,r=t.memoizedProps,n[xt]=t,(i=n.nodeValue!==r)&&(e=qe,e!==null))switch(e.tag){case 3:Ko(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ko(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[xt]=t,t.stateNode=n}return Ee(t),null;case 13:if(ee(oe),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Qe!==null&&t.mode&1&&!(t.flags&128))Qp(),xn(),t.flags|=98560,i=!1;else if(i=Yo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[xt]=t}else xn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else ct!==null&&(Cs(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||oe.current&1?he===0&&(he=3):Tc())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return yn(),gs(e,t),e===null&&xo(t.stateNode.containerInfo),Ee(t),null;case 10:return pc(t.type._context),Ee(t),null;case 17:return Fe(t.type)&&Di(),Ee(t),null;case 19:if(ee(oe),i=t.memoizedState,i===null)return Ee(t),null;if(n=(t.flags&128)!==0,l=i.rendering,l===null)if(n)Un(i,!1);else{if(he!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Qi(e),l!==null){for(t.flags|=128,Un(i,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return X(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>bn&&(t.flags|=128,n=!0,Un(i,!1),t.lanes=4194304)}else{if(!n)if(e=Qi(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Un(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!te)return Ee(t),null}else 2*ce()-i.renderingStartTime>bn&&r!==1073741824&&(t.flags|=128,n=!0,Un(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(r=i.last,r!==null?r.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,r=oe.current,X(oe,n?r&1|2:r&1),t):(Ee(t),null);case 22:case 23:return Ic(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ge&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function r1(e,t){switch(cc(t),t.tag){case 1:return Fe(t.type)&&Di(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),ee(Me),ee(Te),vc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xc(t),null;case 13:if(ee(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(oe),null;case 4:return yn(),null;case 10:return pc(t.type._context),null;case 22:case 23:return Ic(),null;case 24:return null;default:return null}}var Zo=!1,ze=!1,n1=typeof WeakSet=="function"?WeakSet:Set,N=null;function nn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){se(e,t,n)}else r.current=null}function xs(e,t,r){try{r()}catch(n){se(e,t,n)}}var Zu=!1;function o1(e,t){if(es=Oi,e=Rp(),lc(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var l=0,s=-1,u=-1,d=0,f=0,m=e,x=null;t:for(;;){for(var b;m!==r||o!==0&&m.nodeType!==3||(s=l+o),m!==i||n!==0&&m.nodeType!==3||(u=l+n),m.nodeType===3&&(l+=m.nodeValue.length),(b=m.firstChild)!==null;)x=m,m=b;for(;;){if(m===e)break t;if(x===r&&++d===o&&(s=l),x===i&&++f===n&&(u=l),(b=m.nextSibling)!==null)break;m=x,x=m.parentNode}m=b}r=s===-1||u===-1?null:{start:s,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(ts={focusedElem:e,selectionRange:r},Oi=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var k=y.memoizedProps,S=y.memoizedState,g=t.stateNode,p=g.getSnapshotBeforeUpdate(t.elementType===t.type?k:at(t.type,k),S);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(w){se(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=Zu,Zu=!1,y}function oo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&xs(t,r,i)}o=o.next}while(o!==n)}}function ya(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function vs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Tm(e){var t=e.alternate;t!==null&&(e.alternate=null,Tm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[yo],delete t[os],delete t[Dg],delete t[Bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lm(e){return e.tag===5||e.tag===3||e.tag===4}function ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Fi));else if(n!==4&&(e=e.child,e!==null))for(ys(e,t,r),e=e.sibling;e!==null;)ys(e,t,r),e=e.sibling}function ws(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ws(e,t,r),e=e.sibling;e!==null;)ws(e,t,r),e=e.sibling}var we=null,lt=!1;function Wt(e,t,r){for(r=r.child;r!==null;)Nm(e,t,r),r=r.sibling}function Nm(e,t,r){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(da,r)}catch{}switch(r.tag){case 5:ze||nn(r,t);case 6:var n=we,o=lt;we=null,Wt(e,t,r),we=n,lt=o,we!==null&&(lt?(e=we,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):we.removeChild(r.stateNode));break;case 18:we!==null&&(lt?(e=we,r=r.stateNode,e.nodeType===8?el(e.parentNode,r):e.nodeType===1&&el(e,r),mo(e)):el(we,r.stateNode));break;case 4:n=we,o=lt,we=r.stateNode.containerInfo,lt=!0,Wt(e,t,r),we=n,lt=o;break;case 0:case 11:case 14:case 15:if(!ze&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&xs(r,t,l),o=o.next}while(o!==n)}Wt(e,t,r);break;case 1:if(!ze&&(nn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){se(r,t,s)}Wt(e,t,r);break;case 21:Wt(e,t,r);break;case 22:r.mode&1?(ze=(n=ze)||r.memoizedState!==null,Wt(e,t,r),ze=n):Wt(e,t,r);break;default:Wt(e,t,r)}}function td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new n1),t.forEach(function(n){var o=p1.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function it(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,lt=!1;break e;case 3:we=s.stateNode.containerInfo,lt=!0;break e;case 4:we=s.stateNode.containerInfo,lt=!0;break e}s=s.return}if(we===null)throw Error(z(160));Nm(i,l,o),we=null,lt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){se(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)_m(t,e),t=t.sibling}function _m(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ht(e),n&4){try{oo(3,e,e.return),ya(3,e)}catch(k){se(e,e.return,k)}try{oo(5,e,e.return)}catch(k){se(e,e.return,k)}}break;case 1:it(t,e),ht(e),n&512&&r!==null&&nn(r,r.return);break;case 5:if(it(t,e),ht(e),n&512&&r!==null&&nn(r,r.return),e.flags&32){var o=e.stateNode;try{co(o,"")}catch(k){se(e,e.return,k)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=r!==null?r.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&tp(o,i),Vl(s,l);var d=Vl(s,i);for(l=0;l<u.length;l+=2){var f=u[l],m=u[l+1];f==="style"?ap(o,m):f==="dangerouslySetInnerHTML"?op(o,m):f==="children"?co(o,m):qs(o,f,m,d)}switch(s){case"input":Fl(o,i);break;case"textarea":rp(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?cn(o,!!i.multiple,b,!1):x!==!!i.multiple&&(i.defaultValue!=null?cn(o,!!i.multiple,i.defaultValue,!0):cn(o,!!i.multiple,i.multiple?[]:"",!1))}o[yo]=i}catch(k){se(e,e.return,k)}}break;case 6:if(it(t,e),ht(e),n&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(k){se(e,e.return,k)}}break;case 3:if(it(t,e),ht(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{mo(t.containerInfo)}catch(k){se(e,e.return,k)}break;case 4:it(t,e),ht(e);break;case 13:it(t,e),ht(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ec=ce())),n&4&&td(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(ze=(d=ze)||f,it(t,e),ze=d):it(t,e),ht(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(N=e,f=e.child;f!==null;){for(m=N=f;N!==null;){switch(x=N,b=x.child,x.tag){case 0:case 11:case 14:case 15:oo(4,x,x.return);break;case 1:nn(x,x.return);var y=x.stateNode;if(typeof y.componentWillUnmount=="function"){n=x,r=x.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(k){se(n,r,k)}}break;case 5:nn(x,x.return);break;case 22:if(x.memoizedState!==null){nd(m);continue}}b!==null?(b.return=x,N=b):nd(m)}f=f.sibling}e:for(f=null,m=e;;){if(m.tag===5){if(f===null){f=m;try{o=m.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,u=m.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=ip("display",l))}catch(k){se(e,e.return,k)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(k){se(e,e.return,k)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:it(t,e),ht(e),n&4&&td(e);break;case 21:break;default:it(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Lm(r)){var n=r;break e}r=r.return}throw Error(z(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(co(o,""),n.flags&=-33);var i=ed(e);ws(e,i,o);break;case 3:case 4:var l=n.stateNode.containerInfo,s=ed(e);ys(e,s,l);break;default:throw Error(z(161))}}catch(u){se(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i1(e,t,r){N=e,Rm(e)}function Rm(e,t,r){for(var n=(e.mode&1)!==0;N!==null;){var o=N,i=o.child;if(o.tag===22&&n){var l=o.memoizedState!==null||Zo;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ze;s=Zo;var d=ze;if(Zo=l,(ze=u)&&!d)for(N=o;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?od(o):u!==null?(u.return=l,N=u):od(o);for(;i!==null;)N=i,Rm(i),i=i.sibling;N=o,Zo=s,ze=d}rd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,N=i):rd(e)}}function rd(e){for(;N!==null;){var t=N;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||ya(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ze)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:at(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Du(t,i,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Du(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&mo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}ze||t.flags&512&&vs(t)}catch(x){se(t,t.return,x)}}if(t===e){N=null;break}if(r=t.sibling,r!==null){r.return=t.return,N=r;break}N=t.return}}function nd(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var r=t.sibling;if(r!==null){r.return=t.return,N=r;break}N=t.return}}function od(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ya(4,t)}catch(u){se(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(u){se(t,o,u)}}var i=t.return;try{vs(t)}catch(u){se(t,i,u)}break;case 5:var l=t.return;try{vs(t)}catch(u){se(t,l,u)}}}catch(u){se(t,t.return,u)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var a1=Math.ceil,Yi=Ft.ReactCurrentDispatcher,Sc=Ft.ReactCurrentOwner,tt=Ft.ReactCurrentBatchConfig,G=0,ve=null,fe=null,ke=0,Ge=0,on=xr(0),he=0,So=null,Rr=0,wa=0,Pc=0,io=null,Oe=null,Ec=0,bn=1/0,Et=null,Xi=!1,bs=null,cr=null,ei=!1,tr=null,Ji=0,ao=0,js=null,ji=-1,ki=0;function Ne(){return G&6?ce():ji!==-1?ji:ji=ce()}function ur(e){return e.mode&1?G&2&&ke!==0?ke&-ke:Hg.transition!==null?(ki===0&&(ki=vp()),ki):(e=Y,e!==0||(e=window.event,e=e===void 0?16:Sp(e.type)),e):1}function dt(e,t,r,n){if(50<ao)throw ao=0,js=null,Error(z(185));No(e,r,n),(!(G&2)||e!==ve)&&(e===ve&&(!(G&2)&&(wa|=r),he===4&&Zt(e,ke)),De(e,n),r===1&&G===0&&!(t.mode&1)&&(bn=ce()+500,ga&&vr()))}function De(e,t){var r=e.callbackNode;H0(e,t);var n=$i(e,e===ve?ke:0);if(n===0)r!==null&&pu(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&pu(r),t===1)e.tag===0?Ug(id.bind(null,e)):Vp(id.bind(null,e)),Mg(function(){!(G&6)&&vr()}),r=null;else{switch(yp(n)){case 1:r=Zs;break;case 4:r=gp;break;case 16:r=Ri;break;case 536870912:r=xp;break;default:r=Ri}r=Um(r,$m.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function $m(e,t){if(ji=-1,ki=0,G&6)throw Error(z(327));var r=e.callbackNode;if(mn()&&e.callbackNode!==r)return null;var n=$i(e,e===ve?ke:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Zi(e,n);else{t=n;var o=G;G|=2;var i=Am();(ve!==e||ke!==t)&&(Et=null,bn=ce()+500,Ir(e,t));do try{c1();break}catch(s){Om(e,s)}while(!0);fc(),Yi.current=i,G=o,fe!==null?t=0:(ve=null,ke=0,t=he)}if(t!==0){if(t===2&&(o=Kl(e),o!==0&&(n=o,t=ks(e,o))),t===1)throw r=So,Ir(e,0),Zt(e,n),De(e,ce()),r;if(t===6)Zt(e,n);else{if(o=e.current.alternate,!(n&30)&&!l1(o)&&(t=Zi(e,n),t===2&&(i=Kl(e),i!==0&&(n=i,t=ks(e,i))),t===1))throw r=So,Ir(e,0),Zt(e,n),De(e,ce()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(z(345));case 2:Cr(e,Oe,Et);break;case 3:if(Zt(e,n),(n&130023424)===n&&(t=Ec+500-ce(),10<t)){if($i(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ne(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ns(Cr.bind(null,e,Oe,Et),t);break}Cr(e,Oe,Et);break;case 4:if(Zt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var l=31-ut(n);i=1<<l,l=t[l],l>o&&(o=l),n&=~i}if(n=o,n=ce()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*a1(n/1960))-n,10<n){e.timeoutHandle=ns(Cr.bind(null,e,Oe,Et),n);break}Cr(e,Oe,Et);break;case 5:Cr(e,Oe,Et);break;default:throw Error(z(329))}}}return De(e,ce()),e.callbackNode===r?$m.bind(null,e):null}function ks(e,t){var r=io;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=Zi(e,t),e!==2&&(t=Oe,Oe=r,t!==null&&Cs(t)),e}function Cs(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function l1(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!pt(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Zt(e,t){for(t&=~Pc,t&=~wa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-ut(t),n=1<<r;e[r]=-1,t&=~n}}function id(e){if(G&6)throw Error(z(327));mn();var t=$i(e,0);if(!(t&1))return De(e,ce()),null;var r=Zi(e,t);if(e.tag!==0&&r===2){var n=Kl(e);n!==0&&(t=n,r=ks(e,n))}if(r===1)throw r=So,Ir(e,0),Zt(e,t),De(e,ce()),r;if(r===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Cr(e,Oe,Et),De(e,ce()),null}function zc(e,t){var r=G;G|=1;try{return e(t)}finally{G=r,G===0&&(bn=ce()+500,ga&&vr())}}function $r(e){tr!==null&&tr.tag===0&&!(G&6)&&mn();var t=G;G|=1;var r=tt.transition,n=Y;try{if(tt.transition=null,Y=1,e)return e()}finally{Y=n,tt.transition=r,G=t,!(G&6)&&vr()}}function Ic(){Ge=on.current,ee(on)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Ag(r)),fe!==null)for(r=fe.return;r!==null;){var n=r;switch(cc(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Di();break;case 3:yn(),ee(Me),ee(Te),vc();break;case 5:xc(n);break;case 4:yn();break;case 13:ee(oe);break;case 19:ee(oe);break;case 10:pc(n.type._context);break;case 22:case 23:Ic()}r=r.return}if(ve=e,fe=e=dr(e.current,null),ke=Ge=t,he=0,So=null,Pc=wa=Rr=0,Oe=io=null,Pr!==null){for(t=0;t<Pr.length;t++)if(r=Pr[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var l=i.next;i.next=o,n.next=l}r.pending=n}Pr=null}return e}function Om(e,t){do{var r=fe;try{if(fc(),yi.current=Ki,qi){for(var n=ie.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}qi=!1}if(_r=0,xe=pe=ie=null,no=!1,jo=0,Sc.current=null,r===null||r.return===null){he=1,So=t,fe=null;break}e:{var i=e,l=r.return,s=r,u=t;if(t=ke,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=s,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var x=f.alternate;x?(f.updateQueue=x.updateQueue,f.memoizedState=x.memoizedState,f.lanes=x.lanes):(f.updateQueue=null,f.memoizedState=null)}var b=Gu(l);if(b!==null){b.flags&=-257,Qu(b,l,s,i,t),b.mode&1&&Wu(i,d,t),t=b,u=d;var y=t.updateQueue;if(y===null){var k=new Set;k.add(u),t.updateQueue=k}else y.add(u);break e}else{if(!(t&1)){Wu(i,d,t),Tc();break e}u=Error(z(426))}}else if(te&&s.mode&1){var S=Gu(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Qu(S,l,s,i,t),uc(wn(u,s));break e}}i=u=wn(u,s),he!==4&&(he=2),io===null?io=[i]:io.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=ym(i,u,t);Fu(i,g);break e;case 1:s=u;var p=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cr===null||!cr.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=wm(i,s,t);Fu(i,w);break e}}i=i.return}while(i!==null)}Fm(r)}catch(C){t=C,fe===r&&r!==null&&(fe=r=r.return);continue}break}while(!0)}function Am(){var e=Yi.current;return Yi.current=Ki,e===null?Ki:e}function Tc(){(he===0||he===3||he===2)&&(he=4),ve===null||!(Rr&268435455)&&!(wa&268435455)||Zt(ve,ke)}function Zi(e,t){var r=G;G|=2;var n=Am();(ve!==e||ke!==t)&&(Et=null,Ir(e,t));do try{s1();break}catch(o){Om(e,o)}while(!0);if(fc(),G=r,Yi.current=n,fe!==null)throw Error(z(261));return ve=null,ke=0,he}function s1(){for(;fe!==null;)Mm(fe)}function c1(){for(;fe!==null&&!R0();)Mm(fe)}function Mm(e){var t=Bm(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Fm(e):fe=t,Sc.current=null}function Fm(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=r1(r,t),r!==null){r.flags&=32767,fe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,fe=null;return}}else if(r=t1(r,t,Ge),r!==null){fe=r;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);he===0&&(he=5)}function Cr(e,t,r){var n=Y,o=tt.transition;try{tt.transition=null,Y=1,u1(e,t,r,n)}finally{tt.transition=o,Y=n}return null}function u1(e,t,r,n){do mn();while(tr!==null);if(G&6)throw Error(z(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(V0(e,i),e===ve&&(fe=ve=null,ke=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ei||(ei=!0,Um(Ri,function(){return mn(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=tt.transition,tt.transition=null;var l=Y;Y=1;var s=G;G|=4,Sc.current=null,o1(e,r),_m(r,e),Tg(ts),Oi=!!es,ts=es=null,e.current=r,i1(r),$0(),G=s,Y=l,tt.transition=i}else e.current=r;if(ei&&(ei=!1,tr=e,Ji=o),i=e.pendingLanes,i===0&&(cr=null),M0(r.stateNode),De(e,ce()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Xi)throw Xi=!1,e=bs,bs=null,e;return Ji&1&&e.tag!==0&&mn(),i=e.pendingLanes,i&1?e===js?ao++:(ao=0,js=e):ao=0,vr(),null}function mn(){if(tr!==null){var e=yp(Ji),t=tt.transition,r=Y;try{if(tt.transition=null,Y=16>e?16:e,tr===null)var n=!1;else{if(e=tr,tr=null,Ji=0,G&6)throw Error(z(331));var o=G;for(G|=4,N=e.current;N!==null;){var i=N,l=i.child;if(N.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(N=d;N!==null;){var f=N;switch(f.tag){case 0:case 11:case 15:oo(8,f,i)}var m=f.child;if(m!==null)m.return=f,N=m;else for(;N!==null;){f=N;var x=f.sibling,b=f.return;if(Tm(f),f===d){N=null;break}if(x!==null){x.return=b,N=x;break}N=b}}}var y=i.alternate;if(y!==null){var k=y.child;if(k!==null){y.child=null;do{var S=k.sibling;k.sibling=null,k=S}while(k!==null)}}N=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,N=l;else e:for(;N!==null;){if(i=N,i.flags&2048)switch(i.tag){case 0:case 11:case 15:oo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,N=g;break e}N=i.return}}var p=e.current;for(N=p;N!==null;){l=N;var h=l.child;if(l.subtreeFlags&2064&&h!==null)h.return=l,N=h;else e:for(l=p;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ya(9,s)}}catch(C){se(s,s.return,C)}if(s===l){N=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,N=w;break e}N=s.return}}if(G=o,vr(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(da,e)}catch{}n=!0}return n}finally{Y=r,tt.transition=t}}return!1}function ad(e,t,r){t=wn(r,t),t=ym(e,t,1),e=sr(e,t,1),t=Ne(),e!==null&&(No(e,1,t),De(e,t))}function se(e,t,r){if(e.tag===3)ad(e,e,r);else for(;t!==null;){if(t.tag===3){ad(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(cr===null||!cr.has(n))){e=wn(r,e),e=wm(t,e,1),t=sr(t,e,1),e=Ne(),t!==null&&(No(t,1,e),De(t,e));break}}t=t.return}}function d1(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&r,ve===e&&(ke&r)===r&&(he===4||he===3&&(ke&130023424)===ke&&500>ce()-Ec?Ir(e,0):Pc|=r),De(e,t)}function Dm(e,t){t===0&&(e.mode&1?(t=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):t=1);var r=Ne();e=At(e,t),e!==null&&(No(e,t,r),De(e,r))}function f1(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Dm(e,r)}function p1(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(z(314))}n!==null&&n.delete(t),Dm(e,r)}var Bm;Bm=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Ae=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ae=!1,e1(e,t,r);Ae=!!(e.flags&131072)}else Ae=!1,te&&t.flags&1048576&&Wp(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;bi(e,t),e=t.pendingProps;var o=gn(t,Te.current);pn(t,r),o=wc(null,t,n,e,o,r);var i=bc();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(n)?(i=!0,Bi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,hc(t),o.updater=va,t.stateNode=o,o._reactInternals=t,us(t,n,e,r),t=ps(null,t,n,!0,i,r)):(t.tag=0,te&&i&&sc(t),Le(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(bi(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=h1(n),e=at(n,e),o){case 0:t=fs(null,t,n,e,r);break e;case 1:t=Yu(null,t,n,e,r);break e;case 11:t=qu(null,t,n,e,r);break e;case 14:t=Ku(null,t,n,at(n.type,e),r);break e}throw Error(z(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),fs(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),Yu(e,t,n,o,r);case 3:e:{if(Cm(t),e===null)throw Error(z(387));n=t.pendingProps,i=t.memoizedState,o=i.element,Xp(e,t),Gi(t,n,null,r);var l=t.memoizedState;if(n=l.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=wn(Error(z(423)),t),t=Xu(e,t,n,r,o);break e}else if(n!==o){o=wn(Error(z(424)),t),t=Xu(e,t,n,r,o);break e}else for(Qe=lr(t.stateNode.containerInfo.firstChild),qe=t,te=!0,ct=null,r=Kp(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(xn(),n===o){t=Mt(e,t,r);break e}Le(e,t,n,r)}t=t.child}return t;case 5:return Jp(t),e===null&&ls(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,rs(n,o)?l=null:i!==null&&rs(n,i)&&(t.flags|=32),km(e,t),Le(e,t,l,r),t.child;case 6:return e===null&&ls(t),null;case 13:return Sm(e,t,r);case 4:return gc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=vn(t,null,n,r):Le(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),qu(e,t,n,o,r);case 7:return Le(e,t,t.pendingProps,r),t.child;case 8:return Le(e,t,t.pendingProps.children,r),t.child;case 12:return Le(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(Vi,n._currentValue),n._currentValue=l,i!==null)if(pt(i.value,l)){if(i.children===o.children&&!Me.current){t=Mt(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===n){if(i.tag===1){u=_t(-1,r&-r),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=r,u=i.alternate,u!==null&&(u.lanes|=r),ss(i.return,r,t),s.lanes|=r;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),ss(l,r,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Le(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,pn(t,r),o=rt(o),n=n(o),t.flags|=1,Le(e,t,n,r),t.child;case 14:return n=t.type,o=at(n,t.pendingProps),o=at(n.type,o),Ku(e,t,n,o,r);case 15:return bm(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:at(n,o),bi(e,t),t.tag=1,Fe(n)?(e=!0,Bi(t)):e=!1,pn(t,r),vm(t,n,o),us(t,n,o,r),ps(null,t,n,!0,e,r);case 19:return Pm(e,t,r);case 22:return jm(e,t,r)}throw Error(z(156,t.tag))};function Um(e,t){return hp(e,t)}function m1(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,r,n){return new m1(e,t,r,n)}function Lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function h1(e){if(typeof e=="function")return Lc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Xs)return 14}return 2}function dr(e,t){var r=e.alternate;return r===null?(r=et(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Ci(e,t,r,n,o,i){var l=2;if(n=e,typeof e=="function")Lc(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case qr:return Tr(r.children,o,i,t);case Ks:l=8,o|=8;break;case Rl:return e=et(12,r,t,o|2),e.elementType=Rl,e.lanes=i,e;case $l:return e=et(13,r,t,o),e.elementType=$l,e.lanes=i,e;case Ol:return e=et(19,r,t,o),e.elementType=Ol,e.lanes=i,e;case Jf:return ba(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yf:l=10;break e;case Xf:l=9;break e;case Ys:l=11;break e;case Xs:l=14;break e;case Yt:l=16,n=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=et(l,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Tr(e,t,r,n){return e=et(7,e,n,t),e.lanes=r,e}function ba(e,t,r,n){return e=et(22,e,n,t),e.elementType=Jf,e.lanes=r,e.stateNode={isHidden:!1},e}function sl(e,t,r){return e=et(6,e,null,t),e.lanes=r,e}function cl(e,t,r){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function g1(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ha(0),this.expirationTimes=Ha(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ha(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nc(e,t,r,n,o,i,l,s,u){return e=new g1(e,t,r,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},hc(i),e}function x1(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Hm(e){if(!e)return hr;e=e._reactInternals;e:{if(Mr(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var r=e.type;if(Fe(r))return Hp(e,r,t)}return t}function Vm(e,t,r,n,o,i,l,s,u){return e=Nc(r,n,!0,e,o,i,l,s,u),e.context=Hm(null),r=e.current,n=Ne(),o=ur(r),i=_t(n,o),i.callback=t??null,sr(r,i,o),e.current.lanes=o,No(e,o,n),De(e,n),e}function ja(e,t,r,n){var o=t.current,i=Ne(),l=ur(o);return r=Hm(r),t.context===null?t.context=r:t.pendingContext=r,t=_t(i,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=sr(o,t,l),e!==null&&(dt(e,o,l,i),vi(e,o,l)),l}function ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function _c(e,t){ld(e,t),(e=e.alternate)&&ld(e,t)}function v1(){return null}var Wm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rc(e){this._internalRoot=e}ka.prototype.render=Rc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));ja(e,t,null,null)};ka.prototype.unmount=Rc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){ja(null,e,null,null)}),t[Ot]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=jp();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Jt.length&&t!==0&&t<Jt[r].priority;r++);Jt.splice(r,0,e),r===0&&Cp(e)}};function $c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sd(){}function y1(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var d=ea(l);i.call(d)}}var l=Vm(t,n,e,0,null,!1,!1,"",sd);return e._reactRootContainer=l,e[Ot]=l.current,xo(e.nodeType===8?e.parentNode:e),$r(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var d=ea(u);s.call(d)}}var u=Nc(e,0,!1,null,null,!1,!1,"",sd);return e._reactRootContainer=u,e[Ot]=u.current,xo(e.nodeType===8?e.parentNode:e),$r(function(){ja(t,u,r,n)}),u}function Sa(e,t,r,n,o){var i=r._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=ea(l);s.call(u)}}ja(t,l,e,o)}else l=y1(r,t,e,o,n);return ea(l)}wp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Kn(t.pendingLanes);r!==0&&(ec(t,r|1),De(t,ce()),!(G&6)&&(bn=ce()+500,vr()))}break;case 13:$r(function(){var n=At(e,1);if(n!==null){var o=Ne();dt(n,e,1,o)}}),_c(e,1)}};tc=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var r=Ne();dt(t,e,134217728,r)}_c(e,134217728)}};bp=function(e){if(e.tag===13){var t=ur(e),r=At(e,t);if(r!==null){var n=Ne();dt(r,e,t,n)}_c(e,t)}};jp=function(){return Y};kp=function(e,t){var r=Y;try{return Y=e,t()}finally{Y=r}};Gl=function(e,t,r){switch(t){case"input":if(Fl(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=ha(n);if(!o)throw Error(z(90));ep(n),Fl(n,o)}}}break;case"textarea":rp(e,r);break;case"select":t=r.value,t!=null&&cn(e,!!r.multiple,t,!1)}};cp=zc;up=$r;var w1={usingClientEntryPoint:!1,Events:[Ro,Jr,ha,lp,sp,zc]},Hn={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b1={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pp(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||v1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ti=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ti.isDisabled&&ti.supportsFiber)try{da=ti.inject(b1),vt=ti}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w1;Ye.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$c(t))throw Error(z(200));return x1(e,t,null,r)};Ye.createRoot=function(e,t){if(!$c(e))throw Error(z(299));var r=!1,n="",o=Wm;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Nc(e,1,!1,null,null,r,!1,n,o),e[Ot]=t.current,xo(e.nodeType===8?e.parentNode:e),new Rc(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=pp(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return $r(e)};Ye.hydrate=function(e,t,r){if(!Ca(t))throw Error(z(200));return Sa(null,e,t,!0,r)};Ye.hydrateRoot=function(e,t,r){if(!$c(e))throw Error(z(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",l=Wm;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=Vm(t,null,e,1,r??null,o,!1,i,l),e[Ot]=t.current,xo(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new ka(t)};Ye.render=function(e,t,r){if(!Ca(t))throw Error(z(200));return Sa(null,e,t,!1,r)};Ye.unmountComponentAtNode=function(e){if(!Ca(e))throw Error(z(40));return e._reactRootContainer?($r(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Ye.unstable_batchedUpdates=zc;Ye.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ca(r))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return Sa(e,t,r,!1,n)};Ye.version="18.3.1-next-f1338f8080-20240426";function Gm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gm)}catch(e){console.error(e)}}Gm(),Gf.exports=Ye;var j1=Gf.exports,cd=j1;Nl.createRoot=cd.createRoot,Nl.hydrateRoot=cd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Po.apply(this,arguments)}var rr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rr||(rr={}));const ud="popstate";function k1(e){e===void 0&&(e={});function t(n,o){let{pathname:i,search:l,hash:s}=n.location;return Ss("",{pathname:i,search:l,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(n,o){return typeof o=="string"?o:ta(o)}return S1(t,r,null,e)}function ae(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Oc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function C1(){return Math.random().toString(36).substr(2,8)}function dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ss(e,t,r,n){return r===void 0&&(r=null),Po({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ln(t):t,{state:r,key:t&&t.key||n||C1()})}function ta(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ln(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function S1(e,t,r,n){n===void 0&&(n={});let{window:o=document.defaultView,v5Compat:i=!1}=n,l=o.history,s=rr.Pop,u=null,d=f();d==null&&(d=0,l.replaceState(Po({},l.state,{idx:d}),""));function f(){return(l.state||{idx:null}).idx}function m(){s=rr.Pop;let S=f(),g=S==null?null:S-d;d=S,u&&u({action:s,location:k.location,delta:g})}function x(S,g){s=rr.Push;let p=Ss(k.location,S,g);d=f()+1;let h=dd(p,d),w=k.createHref(p);try{l.pushState(h,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(w)}i&&u&&u({action:s,location:k.location,delta:1})}function b(S,g){s=rr.Replace;let p=Ss(k.location,S,g);d=f();let h=dd(p,d),w=k.createHref(p);l.replaceState(h,"",w),i&&u&&u({action:s,location:k.location,delta:0})}function y(S){let g=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof S=="string"?S:ta(S);return p=p.replace(/ $/,"%20"),ae(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let k={get action(){return s},get location(){return e(o,l)},listen(S){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(ud,m),u=S,()=>{o.removeEventListener(ud,m),u=null}},createHref(S){return t(o,S)},createURL:y,encodeLocation(S){let g=y(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:x,replace:b,go(S){return l.go(S)}};return k}var fd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(fd||(fd={}));function P1(e,t,r){return r===void 0&&(r="/"),E1(e,t,r)}function E1(e,t,r,n){let o=typeof t=="string"?Ln(t):t,i=jn(o.pathname||"/",r);if(i==null)return null;let l=Qm(e);z1(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let d=F1(i);s=A1(l[u],d)}return s}function Qm(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let o=(i,l,s)=>{let u={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};u.relativePath.startsWith("/")&&(ae(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let d=fr([n,u.relativePath]),f=r.concat(u);i.children&&i.children.length>0&&(ae(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Qm(i.children,t,f,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:$1(d,i.index),routesMeta:f})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))o(i,l);else for(let u of qm(i.path))o(i,l,u)}),t}function qm(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,o=r.endsWith("?"),i=r.replace(/\?$/,"");if(n.length===0)return o?[i,""]:[i];let l=qm(n.join("/")),s=[];return s.push(...l.map(u=>u===""?i:[i,u].join("/"))),o&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function z1(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:O1(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const I1=/^:[\w-]+$/,T1=3,L1=2,N1=1,_1=10,R1=-2,pd=e=>e==="*";function $1(e,t){let r=e.split("/"),n=r.length;return r.some(pd)&&(n+=R1),t&&(n+=L1),r.filter(o=>!pd(o)).reduce((o,i)=>o+(I1.test(i)?T1:i===""?N1:_1),n)}function O1(e,t){return e.length===t.length&&e.slice(0,-1).every((n,o)=>n===t[o])?e[e.length-1]-t[t.length-1]:0}function A1(e,t,r){let{routesMeta:n}=e,o={},i="/",l=[];for(let s=0;s<n.length;++s){let u=n[s],d=s===n.length-1,f=i==="/"?t:t.slice(i.length)||"/",m=Ps({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),x=u.route;if(!m)return null;Object.assign(o,m.params),l.push({params:o,pathname:fr([i,m.pathname]),pathnameBase:V1(fr([i,m.pathnameBase])),route:x}),m.pathnameBase!=="/"&&(i=fr([i,m.pathnameBase]))}return l}function Ps(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=M1(e.path,e.caseSensitive,e.end),o=t.match(r);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:n.reduce((d,f,m)=>{let{paramName:x,isOptional:b}=f;if(x==="*"){let k=s[m]||"";l=i.slice(0,i.length-k.length).replace(/(.)\/+$/,"$1")}const y=s[m];return b&&!y?d[x]=void 0:d[x]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:l,pattern:e}}function M1(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Oc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(n.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),n]}function F1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Oc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const D1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B1=e=>D1.test(e);function U1(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:o=""}=typeof e=="string"?Ln(e):e,i;if(r)if(B1(r))i=r;else{if(r.includes("//")){let l=r;r=r.replace(/\/\/+/g,"/"),Oc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+r))}r.startsWith("/")?i=md(r.substring(1),"/"):i=md(r,t)}else i=t;return{pathname:i,search:W1(n),hash:G1(o)}}function md(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function ul(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function H1(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ac(e,t){let r=H1(e);return t?r.map((n,o)=>o===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Mc(e,t,r,n){n===void 0&&(n=!1);let o;typeof e=="string"?o=Ln(e):(o=Po({},e),ae(!o.pathname||!o.pathname.includes("?"),ul("?","pathname","search",o)),ae(!o.pathname||!o.pathname.includes("#"),ul("#","pathname","hash",o)),ae(!o.search||!o.search.includes("#"),ul("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,s;if(l==null)s=r;else{let m=t.length-1;if(!n&&l.startsWith("..")){let x=l.split("/");for(;x[0]==="..";)x.shift(),m-=1;o.pathname=x.join("/")}s=m>=0?t[m]:"/"}let u=U1(o,s),d=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const fr=e=>e.join("/").replace(/\/\/+/g,"/"),V1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,G1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Q1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Km=["post","put","patch","delete"];new Set(Km);const q1=["get",...Km];new Set(q1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Eo.apply(this,arguments)}const Pa=v.createContext(null),Ym=v.createContext(null),Dt=v.createContext(null),Ea=v.createContext(null),Bt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Xm=v.createContext(null);function K1(e,t){let{relative:r}=t===void 0?{}:t;Nn()||ae(!1);let{basename:n,navigator:o}=v.useContext(Dt),{hash:i,pathname:l,search:s}=za(e,{relative:r}),u=l;return n!=="/"&&(u=l==="/"?n:fr([n,l])),o.createHref({pathname:u,search:s,hash:i})}function Nn(){return v.useContext(Ea)!=null}function Ut(){return Nn()||ae(!1),v.useContext(Ea).location}function Jm(e){v.useContext(Dt).static||v.useLayoutEffect(e)}function yr(){let{isDataRoute:e}=v.useContext(Bt);return e?sx():Y1()}function Y1(){Nn()||ae(!1);let e=v.useContext(Pa),{basename:t,future:r,navigator:n}=v.useContext(Dt),{matches:o}=v.useContext(Bt),{pathname:i}=Ut(),l=JSON.stringify(Ac(o,r.v7_relativeSplatPath)),s=v.useRef(!1);return Jm(()=>{s.current=!0}),v.useCallback(function(d,f){if(f===void 0&&(f={}),!s.current)return;if(typeof d=="number"){n.go(d);return}let m=Mc(d,JSON.parse(l),i,f.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:fr([t,m.pathname])),(f.replace?n.replace:n.push)(m,f.state,f)},[t,n,l,i,e])}function Fc(){let{matches:e}=v.useContext(Bt),t=e[e.length-1];return t?t.params:{}}function za(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=v.useContext(Dt),{matches:o}=v.useContext(Bt),{pathname:i}=Ut(),l=JSON.stringify(Ac(o,n.v7_relativeSplatPath));return v.useMemo(()=>Mc(e,JSON.parse(l),i,r==="path"),[e,l,i,r])}function X1(e,t){return J1(e,t)}function J1(e,t,r,n){Nn()||ae(!1);let{navigator:o}=v.useContext(Dt),{matches:i}=v.useContext(Bt),l=i[i.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let d=Ut(),f;if(t){var m;let S=typeof t=="string"?Ln(t):t;u==="/"||(m=S.pathname)!=null&&m.startsWith(u)||ae(!1),f=S}else f=d;let x=f.pathname||"/",b=x;if(u!=="/"){let S=u.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=P1(e,{pathname:b}),k=nx(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:fr([u,o.encodeLocation?o.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?u:fr([u,o.encodeLocation?o.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,r,n);return t&&k?v.createElement(Ea.Provider,{value:{location:Eo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:rr.Pop}},k):k}function Z1(){let e=lx(),t=Q1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:o},r):null,null)}const ex=v.createElement(Z1,null);class tx extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(Bt.Provider,{value:this.props.routeContext},v.createElement(Xm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rx(e){let{routeContext:t,match:r,children:n}=e,o=v.useContext(Pa);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Bt.Provider,{value:t},n)}function nx(e,t,r,n){var o;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var i;if(!r)return null;if(r.errors)e=r.matches;else if((i=n)!=null&&i.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,s=(o=r)==null?void 0:o.errors;if(s!=null){let f=l.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);f>=0||ae(!1),l=l.slice(0,Math.min(l.length,f+1))}let u=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let f=0;f<l.length;f++){let m=l[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=f),m.route.id){let{loaderData:x,errors:b}=r,y=m.route.loader&&x[m.route.id]===void 0&&(!b||b[m.route.id]===void 0);if(m.route.lazy||y){u=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((f,m,x)=>{let b,y=!1,k=null,S=null;r&&(b=s&&m.route.id?s[m.route.id]:void 0,k=m.route.errorElement||ex,u&&(d<0&&x===0?(cx("route-fallback"),y=!0,S=null):d===x&&(y=!0,S=m.route.hydrateFallbackElement||null)));let g=t.concat(l.slice(0,x+1)),p=()=>{let h;return b?h=k:y?h=S:m.route.Component?h=v.createElement(m.route.Component,null):m.route.element?h=m.route.element:h=f,v.createElement(rx,{match:m,routeContext:{outlet:f,matches:g,isDataRoute:r!=null},children:h})};return r&&(m.route.ErrorBoundary||m.route.errorElement||x===0)?v.createElement(tx,{location:r.location,revalidation:r.revalidation,component:k,error:b,children:p(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):p()},null)}var Zm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zm||{}),eh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(eh||{});function ox(e){let t=v.useContext(Pa);return t||ae(!1),t}function ix(e){let t=v.useContext(Ym);return t||ae(!1),t}function ax(e){let t=v.useContext(Bt);return t||ae(!1),t}function th(e){let t=ax(),r=t.matches[t.matches.length-1];return r.route.id||ae(!1),r.route.id}function lx(){var e;let t=v.useContext(Xm),r=ix(),n=th();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function sx(){let{router:e}=ox(Zm.UseNavigateStable),t=th(eh.UseNavigateStable),r=v.useRef(!1);return Jm(()=>{r.current=!0}),v.useCallback(function(o,i){i===void 0&&(i={}),r.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Eo({fromRouteId:t},i)))},[e,t])}const hd={};function cx(e,t,r){hd[e]||(hd[e]=!0)}function ux(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Dc(e){let{to:t,replace:r,state:n,relative:o}=e;Nn()||ae(!1);let{future:i,static:l}=v.useContext(Dt),{matches:s}=v.useContext(Bt),{pathname:u}=Ut(),d=yr(),f=Mc(t,Ac(s,i.v7_relativeSplatPath),u,o==="path"),m=JSON.stringify(f);return v.useEffect(()=>d(JSON.parse(m),{replace:r,state:n,relative:o}),[d,m,o,r,n]),null}function W(e){ae(!1)}function dx(e){let{basename:t="/",children:r=null,location:n,navigationType:o=rr.Pop,navigator:i,static:l=!1,future:s}=e;Nn()&&ae(!1);let u=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:u,navigator:i,static:l,future:Eo({v7_relativeSplatPath:!1},s)}),[u,s,i,l]);typeof n=="string"&&(n=Ln(n));let{pathname:f="/",search:m="",hash:x="",state:b=null,key:y="default"}=n,k=v.useMemo(()=>{let S=jn(f,u);return S==null?null:{location:{pathname:S,search:m,hash:x,state:b,key:y},navigationType:o}},[u,f,m,x,b,y,o]);return k==null?null:v.createElement(Dt.Provider,{value:d},v.createElement(Ea.Provider,{children:r,value:k}))}function fx(e){let{children:t,location:r}=e;return X1(Es(t),r)}new Promise(()=>{});function Es(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(n,o)=>{if(!v.isValidElement(n))return;let i=[...t,o];if(n.type===v.Fragment){r.push.apply(r,Es(n.props.children,i));return}n.type!==W&&ae(!1),!n.props.index||!n.props.children||ae(!1);let l={id:n.props.id||i.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Es(n.props.children,i)),r.push(l)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ra.apply(this,arguments)}function rh(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function px(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mx(e,t){return e.button===0&&(!t||t==="_self")&&!px(e)}function zs(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(o=>[r,o]):[[r,n]])},[]))}function hx(e,t){let r=zs(e);return t&&t.forEach((n,o)=>{r.has(o)||t.getAll(o).forEach(i=>{r.append(o,i)})}),r}const gx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xx=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],vx="6";try{window.__reactRouterVersion=vx}catch{}const yx=v.createContext({isTransitioning:!1}),wx="startTransition",gd=d0[wx];function bx(e){let{basename:t,children:r,future:n,window:o}=e,i=v.useRef();i.current==null&&(i.current=k1({window:o,v5Compat:!0}));let l=i.current,[s,u]=v.useState({action:l.action,location:l.location}),{v7_startTransition:d}=n||{},f=v.useCallback(m=>{d&&gd?gd(()=>u(m)):u(m)},[u,d]);return v.useLayoutEffect(()=>l.listen(f),[l,f]),v.useEffect(()=>ux(n),[n]),v.createElement(dx,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:l,future:n})}const jx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",kx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=v.forwardRef(function(t,r){let{onClick:n,relative:o,reloadDocument:i,replace:l,state:s,target:u,to:d,preventScrollReset:f,viewTransition:m}=t,x=rh(t,gx),{basename:b}=v.useContext(Dt),y,k=!1;if(typeof d=="string"&&kx.test(d)&&(y=d,jx))try{let h=new URL(window.location.href),w=d.startsWith("//")?new URL(h.protocol+d):new URL(d),C=jn(w.pathname,b);w.origin===h.origin&&C!=null?d=C+w.search+w.hash:k=!0}catch{}let S=K1(d,{relative:o}),g=Sx(d,{replace:l,state:s,target:u,preventScrollReset:f,relative:o,viewTransition:m});function p(h){n&&n(h),h.defaultPrevented||g(h)}return v.createElement("a",ra({},x,{href:y||S,onClick:k||i?n:p,ref:r,target:u}))}),ri=v.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:o=!1,className:i="",end:l=!1,style:s,to:u,viewTransition:d,children:f}=t,m=rh(t,xx),x=za(u,{relative:m.relative}),b=Ut(),y=v.useContext(Ym),{navigator:k,basename:S}=v.useContext(Dt),g=y!=null&&Px(x)&&d===!0,p=k.encodeLocation?k.encodeLocation(x).pathname:x.pathname,h=b.pathname,w=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(h=h.toLowerCase(),w=w?w.toLowerCase():null,p=p.toLowerCase()),w&&S&&(w=jn(w,S)||w);const C=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let P=h===p||!l&&h.startsWith(p)&&h.charAt(C)==="/",j=w!=null&&(w===p||!l&&w.startsWith(p)&&w.charAt(p.length)==="/"),I={isActive:P,isPending:j,isTransitioning:g},_=P?n:void 0,E;typeof i=="function"?E=i(I):E=[i,P?"active":null,j?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let M=typeof s=="function"?s(I):s;return v.createElement(ne,ra({},m,{"aria-current":_,className:E,ref:r,style:M,to:u,viewTransition:d}),typeof f=="function"?f(I):f)});var Is;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Is||(Is={}));var xd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(xd||(xd={}));function Cx(e){let t=v.useContext(Pa);return t||ae(!1),t}function Sx(e,t){let{target:r,replace:n,state:o,preventScrollReset:i,relative:l,viewTransition:s}=t===void 0?{}:t,u=yr(),d=Ut(),f=za(e,{relative:l});return v.useCallback(m=>{if(mx(m,r)){m.preventDefault();let x=n!==void 0?n:ta(d)===ta(f);u(e,{replace:x,state:o,preventScrollReset:i,relative:l,viewTransition:s})}},[d,u,f,n,o,r,e,i,l,s])}function Ia(e){let t=v.useRef(zs(e)),r=v.useRef(!1),n=Ut(),o=v.useMemo(()=>hx(n.search,r.current?null:t.current),[n.search]),i=yr(),l=v.useCallback((s,u)=>{const d=zs(typeof s=="function"?s(o):s);r.current=!0,i("?"+d,u)},[i,o]);return[o,l]}function Px(e,t){t===void 0&&(t={});let r=v.useContext(yx);r==null&&ae(!1);let{basename:n}=Cx(Is.useViewTransitionState),o=za(e,{relative:t.relative});if(!r.isTransitioning)return!1;let i=jn(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=jn(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Ps(o.pathname,l)!=null||Ps(o.pathname,i)!=null}const nh="artilheiro-cart",vd=0;function Ex(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(nh);return e?JSON.parse(e):[]}catch{return[]}}function Gt(e,t){return`${e}-${t}`}const zx=Ex();function Ix(e,t){switch(t.type){case"LOAD":return Array.isArray(t.payload)?t.payload:[];case"ADD":{const{productId:r,name:n,image:o,size:i,quantity:l,unitPrice:s}=t.payload,u=Gt(r,i);return e.find(f=>Gt(f.productId,f.size)===u)?e.map(f=>Gt(f.productId,f.size)===u?{...f,quantity:f.quantity+l}:f):[...e,{productId:r,name:n,image:o,size:i,quantity:l,unitPrice:s}]}case"UPDATE_QUANTITY":{const{productId:r,size:n,quantity:o}=t.payload,i=Gt(r,n);return o<1?e.filter(l=>Gt(l.productId,l.size)!==i):e.map(l=>Gt(l.productId,l.size)===i?{...l,quantity:o}:l)}case"REMOVE":{const{productId:r,size:n}=t.payload,o=Gt(r,n);return e.filter(i=>Gt(i.productId,i.size)!==o)}case"CLEAR":return[];default:return e}}const oh=v.createContext(null);function Tx({children:e}){const[t,r]=v.useReducer(Ix,zx),[n,o]=v.useState(!1);v.useEffect(()=>{try{localStorage.setItem(nh,JSON.stringify(t))}catch{}},[t]);const i=v.useCallback(S=>{r({type:"ADD",payload:{productId:S.productId,name:S.name,image:S.image??"",size:S.size,quantity:Math.max(1,Number(S.quantity)||1),unitPrice:Number(S.unitPrice)||0}})},[]),l=v.useCallback((S,g,p)=>{r({type:"UPDATE_QUANTITY",payload:{productId:S,size:g,quantity:p}})},[]),s=v.useCallback((S,g)=>{r({type:"REMOVE",payload:{productId:S,size:g}})},[]),u=v.useCallback(()=>{r({type:"CLEAR"})},[]),d=v.useCallback(()=>o(!0),[]),f=v.useCallback(()=>o(!1),[]),m=t.reduce((S,g)=>S+g.quantity,0),x=t.reduce((S,g)=>S+g.unitPrice*g.quantity,0),b=v.useCallback(()=>x,[x]),y=v.useCallback(()=>x+vd,[x]),k={items:t,itemCount:m,subtotal:x,getSubtotal:b,getTotal:y,addItem:i,updateQuantity:l,removeItem:s,clearCart:u,isMiniCartOpen:n,openMiniCart:d,closeMiniCart:f,freightPlaceholder:vd};return a.jsx(oh.Provider,{value:k,children:e})}function Oo(){const e=v.useContext(oh);if(!e)throw new Error("useCart must be used within CartProvider");return e}const ih=v.createContext(null);let Lx=0;function Nx({children:e}){const[t,r]=v.useState([]),n=v.useCallback((d,f="error",m=5e3)=>{const x=++Lx;return r(b=>[...b,{id:x,message:d,type:f}]),m>0&&setTimeout(()=>{o(x)},m),x},[]),o=v.useCallback(d=>{r(f=>f.filter(m=>m.id!==d))},[]),i=v.useCallback(d=>n(d,"error"),[n]),l=v.useCallback(d=>n(d,"success"),[n]),s=v.useCallback(d=>n(d,"info"),[n]),u=v.useMemo(()=>({toasts:t,addToast:n,removeToast:o,showError:i,showSuccess:l,showInfo:s}),[t,n,o,i,l,s]);return a.jsx(ih.Provider,{value:u,children:e})}function Ta(){const e=v.useContext(ih);if(!e)throw new Error("useToast must be used within ToastProvider");return e}var Ie=function(){return Ie=Object.assign||function(t){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},Ie.apply(this,arguments)};function kn(e,t,r){if(r||arguments.length===2)for(var n=0,o=t.length,i;n<o;n++)(i||!(n in t))&&(i||(i=Array.prototype.slice.call(t,0,n)),i[n]=t[n]);return e.concat(i||Array.prototype.slice.call(t))}var Z="-ms-",lo="-moz-",Q="-webkit-",ah="comm",La="rule",Bc="decl",_x="@import",Rx="@namespace",lh="@keyframes",$x="@layer",sh=Math.abs,Uc=String.fromCharCode,Ts=Object.assign;function Ox(e,t){return me(e,0)^45?(((t<<2^me(e,0))<<2^me(e,1))<<2^me(e,2))<<2^me(e,3):0}function ch(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function B(e,t,r){return e.replace(t,r)}function Si(e,t,r){return e.indexOf(t,r)}function me(e,t){return e.charCodeAt(t)|0}function Or(e,t,r){return e.slice(t,r)}function st(e){return e.length}function uh(e){return e.length}function Xn(e,t){return t.push(e),e}function Ax(e,t){return e.map(t).join("")}function yd(e,t){return e.filter(function(r){return!zt(r,t)})}var Na=1,Cn=1,dh=0,ot=0,de=0,_n="";function _a(e,t,r,n,o,i,l,s){return{value:e,root:t,parent:r,type:n,props:o,children:i,line:Na,column:Cn,length:l,return:"",siblings:s}}function Kt(e,t){return Ts(_a("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Hr(e){for(;e.root;)e=Kt(e.root,{children:[e]});Xn(e,e.siblings)}function Mx(){return de}function Fx(){return de=ot>0?me(_n,--ot):0,Cn--,de===10&&(Cn=1,Na--),de}function ft(){return de=ot<dh?me(_n,ot++):0,Cn++,de===10&&(Cn=1,Na++),de}function nr(){return me(_n,ot)}function Pi(){return ot}function Ra(e,t){return Or(_n,e,t)}function zo(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dx(e){return Na=Cn=1,dh=st(_n=e),ot=0,[]}function Bx(e){return _n="",e}function dl(e){return ch(Ra(ot-1,Ls(e===91?e+2:e===40?e+1:e)))}function Ux(e){for(;(de=nr())&&de<33;)ft();return zo(e)>2||zo(de)>3?"":" "}function Hx(e,t){for(;--t&&ft()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return Ra(e,Pi()+(t<6&&nr()==32&&ft()==32))}function Ls(e){for(;ft();)switch(de){case e:return ot;case 34:case 39:e!==34&&e!==39&&Ls(de);break;case 40:e===41&&Ls(e);break;case 92:ft();break}return ot}function Vx(e,t){for(;ft()&&e+de!==57;)if(e+de===84&&nr()===47)break;return"/*"+Ra(t,ot-1)+"*"+Uc(e===47?e:ft())}function Wx(e){for(;!zo(nr());)ft();return Ra(e,ot)}function Gx(e){return Bx(Ei("",null,null,null,[""],e=Dx(e),0,[0],e))}function Ei(e,t,r,n,o,i,l,s,u){for(var d=0,f=0,m=l,x=0,b=0,y=0,k=1,S=1,g=1,p=0,h="",w=o,C=i,P=n,j=h;S;)switch(y=p,p=ft()){case 40:if(y!=108&&me(j,m-1)==58){Si(j+=B(dl(p),"&","&\f"),"&\f",sh(d?s[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:j+=dl(p);break;case 9:case 10:case 13:case 32:j+=Ux(y);break;case 92:j+=Hx(Pi()-1,7);continue;case 47:switch(nr()){case 42:case 47:Xn(Qx(Vx(ft(),Pi()),t,r,u),u),(zo(y||1)==5||zo(nr()||1)==5)&&st(j)&&Or(j,-1,void 0)!==" "&&(j+=" ");break;default:j+="/"}break;case 123*k:s[d++]=st(j)*g;case 125*k:case 59:case 0:switch(p){case 0:case 125:S=0;case 59+f:g==-1&&(j=B(j,/\f/g,"")),b>0&&(st(j)-m||k===0&&y===47)&&Xn(b>32?bd(j+";",n,r,m-1,u):bd(B(j," ","")+";",n,r,m-2,u),u);break;case 59:j+=";";default:if(Xn(P=wd(j,t,r,d,f,o,s,h,w=[],C=[],m,i),i),p===123)if(f===0)Ei(j,t,P,P,w,i,m,s,C);else{switch(x){case 99:if(me(j,3)===110)break;case 108:if(me(j,2)===97)break;default:f=0;case 100:case 109:case 115:}f?Ei(e,P,P,n&&Xn(wd(e,P,P,0,0,o,s,h,o,w=[],m,C),C),o,C,m,s,n?w:C):Ei(j,P,P,P,[""],C,0,s,C)}}d=f=b=0,k=g=1,h=j="",m=l;break;case 58:m=1+st(j),b=y;default:if(k<1){if(p==123)--k;else if(p==125&&k++==0&&Fx()==125)continue}switch(j+=Uc(p),p*k){case 38:g=f>0?1:(j+="\f",-1);break;case 44:s[d++]=(st(j)-1)*g,g=1;break;case 64:nr()===45&&(j+=dl(ft())),x=nr(),f=m=st(h=j+=Wx(Pi())),p++;break;case 45:y===45&&st(j)==2&&(k=0)}}return i}function wd(e,t,r,n,o,i,l,s,u,d,f,m){for(var x=o-1,b=o===0?i:[""],y=uh(b),k=0,S=0,g=0;k<n;++k)for(var p=0,h=Or(e,x+1,x=sh(S=l[k])),w=e;p<y;++p)(w=ch(S>0?b[p]+" "+h:B(h,/&\f/g,b[p])))&&(u[g++]=w);return _a(e,t,r,o===0?La:s,u,d,f,m)}function Qx(e,t,r,n){return _a(e,t,r,ah,Uc(Mx()),Or(e,2,-2),0,n)}function bd(e,t,r,n,o){return _a(e,t,r,Bc,Or(e,0,n),Or(e,n+1,-1),n,o)}function fh(e,t,r){switch(Ox(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Q+e+e;case 4855:return Q+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return lo+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+lo+e+Z+e+e;case 5936:switch(me(e,t+11)){case 114:return Q+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+Z+B(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+Z+e+e;case 6165:return Q+e+Z+"flex-"+e+e;case 5187:return Q+e+B(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return Q+e+Z+"flex-item-"+B(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":Z+"grid-row-"+B(e,/flex-|-self/g,""))+e;case 4675:return Q+e+Z+"flex-line-pack"+B(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+Z+B(e,"shrink","negative")+e;case 5292:return Q+e+Z+B(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+B(e,"-grow","")+Q+e+Z+B(e,"grow","positive")+e;case 4554:return Q+B(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return B(B(B(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return B(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return B(B(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+Z+"flex-pack:$3"),/space-between/,"justify")+Q+e+e;case 4200:if(!zt(e,/flex-|baseline/))return Z+"grid-column-align"+Or(e,t)+e;break;case 2592:case 3360:return Z+B(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,o){return t=o,zt(n.props,/grid-\w+-end/)})?~Si(e+(r=r[t].value),"span",0)?e:Z+B(e,"-start","")+e+Z+"grid-row-span:"+(~Si(r,"span",0)?zt(r,/\d+/):+zt(r,/\d+/)-+zt(e,/\d+/))+";":Z+B(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return zt(n.props,/grid-\w+-start/)})?e:Z+B(B(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return B(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(st(e)-1-t>6)switch(me(e,t+1)){case 109:if(me(e,t+4)!==45)break;case 102:return B(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+lo+(me(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Si(e,"stretch",0)?fh(B(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return B(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,o,i,l,s,u,d){return Z+o+":"+i+d+(l?Z+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(me(e,t+6)===121)return B(e,":",":"+Q)+e;break;case 6444:switch(me(e,me(e,14)===45?18:11)){case 120:return B(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(me(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+Z+"$2box$3")+e;case 100:return B(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(e,"scroll-","scroll-snap-")+e}return e}function na(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function qx(e,t,r,n){switch(e.type){case $x:if(e.children.length)break;case _x:case Rx:case Bc:return e.return=e.return||e.value;case ah:return"";case lh:return e.return=e.value+"{"+na(e.children,n)+"}";case La:if(!st(e.value=e.props.join(",")))return""}return st(r=na(e.children,n))?e.return=e.value+"{"+r+"}":""}function Kx(e){var t=uh(e);return function(r,n,o,i){for(var l="",s=0;s<t;s++)l+=e[s](r,n,o,i)||"";return l}}function Yx(e){return function(t){t.root||(t=t.return)&&e(t)}}function Xx(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Bc:e.return=fh(e.value,e.length,r);return;case lh:return na([Kt(e,{value:B(e.value,"@","@"+Q)})],n);case La:if(e.length)return Ax(r=e.props,function(o){switch(zt(o,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hr(Kt(e,{props:[B(o,/:(read-\w+)/,":"+lo+"$1")]})),Hr(Kt(e,{props:[o]})),Ts(e,{props:yd(r,n)});break;case"::placeholder":Hr(Kt(e,{props:[B(o,/:(plac\w+)/,":"+Q+"input-$1")]})),Hr(Kt(e,{props:[B(o,/:(plac\w+)/,":"+lo+"$1")]})),Hr(Kt(e,{props:[B(o,/:(plac\w+)/,Z+"input-$1")]})),Hr(Kt(e,{props:[o]})),Ts(e,{props:yd(r,n)});break}return""})}}var Jx={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},We={},Sn=typeof process<"u"&&We!==void 0&&(We.REACT_APP_SC_ATTR||We.SC_ATTR)||"data-styled",ph="active",mh="data-styled-version",$a="6.3.8",Hc=`/*!sc*/
`,oa=typeof window<"u"&&typeof document<"u",Rt=re.createContext===void 0,Zx=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&We.REACT_APP_SC_DISABLE_SPEEDY!==""?We.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&We.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&We!==void 0&&We.SC_DISABLE_SPEEDY!==void 0&&We.SC_DISABLE_SPEEDY!==""&&We.SC_DISABLE_SPEEDY!=="false"&&We.SC_DISABLE_SPEEDY),ev={},Oa=Object.freeze([]),Pn=Object.freeze({});function hh(e,t,r){return r===void 0&&(r=Pn),e.theme!==r.theme&&e.theme||t||r.theme}var gh=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),tv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rv=/(^-|-$)/g;function jd(e){return e.replace(tv,"-").replace(rv,"")}var nv=/(a)(d)/gi,kd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ns(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=kd(t%52)+r;return(kd(t%52)+r).replace(nv,"$1-$2")}var fl,an=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},xh=function(e){return an(5381,e)};function Vc(e){return Ns(xh(e)>>>0)}function ov(e){return e.displayName||e.name||"Component"}function pl(e){return typeof e=="string"&&!0}var vh=typeof Symbol=="function"&&Symbol.for,yh=vh?Symbol.for("react.memo"):60115,iv=vh?Symbol.for("react.forward_ref"):60112,av={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sv=((fl={})[iv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fl[yh]=wh,fl);function Cd(e){return("type"in(t=e)&&t.type.$$typeof)===yh?wh:"$$typeof"in e?sv[e.$$typeof]:av;var t}var cv=Object.defineProperty,uv=Object.getOwnPropertyNames,Sd=Object.getOwnPropertySymbols,dv=Object.getOwnPropertyDescriptor,fv=Object.getPrototypeOf,Pd=Object.prototype;function bh(e,t,r){if(typeof t!="string"){if(Pd){var n=fv(t);n&&n!==Pd&&bh(e,n,r)}var o=uv(t);Sd&&(o=o.concat(Sd(t)));for(var i=Cd(e),l=Cd(t),s=0;s<o.length;++s){var u=o[s];if(!(u in lv||r&&r[u]||l&&u in l||i&&u in i)){var d=dv(t,u);try{cv(e,u,d)}catch{}}}}return e}function En(e){return typeof e=="function"}function Wc(e){return typeof e=="object"&&"styledComponentId"in e}function zr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ia(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Io(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function _s(e,t,r){if(r===void 0&&(r=!1),!r&&!Io(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=_s(e[n],t[n]);else if(Io(t))for(var n in t)e[n]=_s(e[n],t[n]);return e}function Gc(e,t){Object.defineProperty(e,"toString",{value:t})}function Ao(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var pv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,o=n.length,i=o;t>=i;)if((i<<=1)<0)throw Ao(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,r.length);l<u;l++)this.tag.insertRule(s,r[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),o=n+r;this.groupSizes[t]=0;for(var i=n;i<o;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],o=this.indexOfGroup(t),i=o+n,l=o;l<i;l++)r+="".concat(this.tag.getRule(l)).concat(Hc);return r},e}(),zi=new Map,aa=new Map,Ii=1,ln=function(e){if(zi.has(e))return zi.get(e);for(;aa.has(Ii);)Ii++;var t=Ii++;return zi.set(e,t),aa.set(t,e),t},mv=function(e,t){Ii=t+1,zi.set(e,t),aa.set(t,e)},hv="style[".concat(Sn,"][").concat(mh,'="').concat($a,'"]'),gv=new RegExp("^".concat(Sn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),xv=function(e,t,r){for(var n,o=r.split(","),i=0,l=o.length;i<l;i++)(n=o[i])&&e.registerName(t,n)},vv=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Hc),o=[],i=0,l=n.length;i<l;i++){var s=n[i].trim();if(s){var u=s.match(gv);if(u){var d=0|parseInt(u[1],10),f=u[2];d!==0&&(mv(f,d),xv(e,f,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}}},Ed=function(e){for(var t=document.querySelectorAll(hv),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(Sn)!==ph&&(vv(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function yv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var jh=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){var u=Array.from(s.querySelectorAll("style[".concat(Sn,"]")));return u[u.length-1]}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Sn,ph),n.setAttribute(mh,$a);var l=yv();return l&&n.setAttribute("nonce",l),r.insertBefore(n,i),n},wv=function(){function e(t){this.element=jh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,o=0,i=n.length;o<i;o++){var l=n[o];if(l.ownerNode===r)return l}throw Ao(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),bv=function(){function e(t){this.element=jh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),jv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),zd=oa,kv={isServer:!oa,useCSSOMInjection:!Zx},la=function(){function e(t,r,n){t===void 0&&(t=Pn),r===void 0&&(r={});var o=this;this.options=Ie(Ie({},kv),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&oa&&zd&&(zd=!1,Ed(this)),Gc(this,function(){return function(i){for(var l=i.getTag(),s=l.length,u="",d=function(m){var x=function(g){return aa.get(g)}(m);if(x===void 0)return"continue";var b=i.names.get(x),y=l.getGroup(m);if(b===void 0||!b.size||y.length===0)return"continue";var k="".concat(Sn,".g").concat(m,'[id="').concat(x,'"]'),S="";b!==void 0&&b.forEach(function(g){g.length>0&&(S+="".concat(g,","))}),u+="".concat(y).concat(k,'{content:"').concat(S,'"}').concat(Hc)},f=0;f<s;f++)d(f);return u}(o)})}return e.registerId=function(t){return ln(t)},e.prototype.rehydrate=function(){!this.server&&oa&&Ed(this)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Ie(Ie({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,o=r.target;return r.isServer?new jv(o):n?new wv(o):new bv(o)}(this.options),new pv(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(ln(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(ln(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ln(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Cv=/&/g,sn=47;function Id(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,r=0,n=0,o=!1,i=0;i<t;i++){var l=e.charCodeAt(i);if(n!==0||o||l!==sn||e.charCodeAt(i+1)!==42)if(o)l===42&&e.charCodeAt(i+1)===sn&&(o=!1,i++);else if(l!==34&&l!==39||i!==0&&e.charCodeAt(i-1)===92){if(n===0){if(l===123)r++;else if(l===125&&--r<0)return!0}}else n===0?n=l:n===l&&(n=0);else o=!0,i++}return r!==0||n!==0}function kh(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=kh(r.children,t)),r})}function Sv(e){var t,r,n,o=Pn,i=o.options,l=i===void 0?Pn:i,s=o.plugins,u=s===void 0?Oa:s,d=function(x,b,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):x},f=u.slice();f.push(function(x){x.type===La&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(Cv,r).replace(n,d))}),l.prefix&&f.push(Xx),f.push(qx);var m=function(x,b,y,k){b===void 0&&(b=""),y===void 0&&(y=""),k===void 0&&(k="&"),t=k,r=b,n=new RegExp("\\".concat(r,"\\b"),"g");var S=function(h){if(!Id(h))return h;for(var w=h.length,C="",P=0,j=0,I=0,_=!1,E=0;E<w;E++){var M=h.charCodeAt(E);if(I!==0||_||M!==sn||h.charCodeAt(E+1)!==42)if(_)M===42&&h.charCodeAt(E+1)===sn&&(_=!1,E++);else if(M!==34&&M!==39||E!==0&&h.charCodeAt(E-1)===92){if(I===0)if(M===123)j++;else if(M===125){if(--j<0){for(var O=E+1;O<w;){var H=h.charCodeAt(O);if(H===59||H===10)break;O++}O<w&&h.charCodeAt(O)===59&&O++,j=0,E=O-1,P=O;continue}j===0&&(C+=h.substring(P,E+1),P=E+1)}else M===59&&j===0&&(C+=h.substring(P,E+1),P=E+1)}else I===0?I=M:I===M&&(I=0);else _=!0,E++}if(P<w){var L=h.substring(P);Id(L)||(C+=L)}return C}(function(h){if(h.indexOf("//")===-1)return h;for(var w=h.length,C=[],P=0,j=0,I=0,_=0;j<w;){var E=h.charCodeAt(j);if(E!==34&&E!==39||j!==0&&h.charCodeAt(j-1)===92)if(I===0)if(E===40&&j>=3&&(32|h.charCodeAt(j-1))==108&&(32|h.charCodeAt(j-2))==114&&(32|h.charCodeAt(j-3))==117)_=1,j++;else if(_>0)E===41?_--:E===40&&_++,j++;else if(E===sn&&j+1<w&&h.charCodeAt(j+1)===sn){for(j>P&&C.push(h.substring(P,j));j<w&&h.charCodeAt(j)!==10;)j++;P=j}else j++;else j++;else I===0?I=E:I===E&&(I=0),j++}return P===0?h:(P<w&&C.push(h.substring(P)),C.join(""))}(x)),g=Gx(y||b?"".concat(y," ").concat(b," { ").concat(S," }"):S);l.namespace&&(g=kh(g,l.namespace));var p=[];return na(g,Kx(f.concat(Yx(function(h){return p.push(h)})))),p};return m.hash=u.length?u.reduce(function(x,b){return b.name||Ao(15),an(x,b.name)},5381).toString():"",m}var Pv=new la,Rs=Sv(),$s={shouldForwardProp:void 0,styleSheet:Pv,stylis:Rs},Ch=Rt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)($s)}}:re.createContext($s);Ch.Consumer;Rt||re.createContext(void 0);function Os(){return Rt?$s:re.useContext(Ch)}var Sh=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=Rs);var l=n.name+i.hash;o.hasNameForId(n.id,l)||o.insertRules(n.id,l,i(n.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Gc(this,function(){throw Ao(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Rs),this.name+t.hash},e}();function Ev(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Jx||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var zv=function(e){return e>="A"&&e<="Z"};function Td(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;zv(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Ph=function(e){return e==null||e===!1||e===""},Eh=function(e){var t=[];for(var r in e){var n=e[r];e.hasOwnProperty(r)&&!Ph(n)&&(Array.isArray(n)&&n.isCss||En(n)?t.push("".concat(Td(r),":"),n,";"):Io(n)?t.push.apply(t,kn(kn(["".concat(r," {")],Eh(n),!1),["}"],!1)):t.push("".concat(Td(r),": ").concat(Ev(r,n),";")))}return t};function pr(e,t,r,n){if(Ph(e))return[];if(Wc(e))return[".".concat(e.styledComponentId)];if(En(e)){if(!En(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return pr(o,t,r,n)}var i;return e instanceof Sh?r?(e.inject(r,n),[e.getName(n)]):[e]:Io(e)?Eh(e):Array.isArray(e)?Array.prototype.concat.apply(Oa,e.map(function(l){return pr(l,t,r,n)})):[e.toString()]}function zh(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(En(r)&&!Wc(r))return!1}return!0}var Iv=xh($a),Tv=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&zh(t),this.componentId=r,this.baseHash=an(Iv,r),this.baseStyle=n,la.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=zr(o,this.staticRulesId);else{var i=ia(pr(this.rules,t,r,n)),l=Ns(an(this.baseHash,i)>>>0);if(!r.hasNameForId(this.componentId,l)){var s=n(i,".".concat(l),void 0,this.componentId);r.insertRules(this.componentId,l,s)}o=zr(o,l),this.staticRulesId=l}else{for(var u=an(this.baseHash,n.hash),d="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")d+=m;else if(m){var x=ia(pr(m,t,r,n));u=an(u,x+f),d+=x}}if(d){var b=Ns(u>>>0);if(!r.hasNameForId(this.componentId,b)){var y=n(d,".".concat(b),void 0,this.componentId);r.insertRules(this.componentId,b,y)}o=zr(o,b)}}return{className:o,css:typeof window>"u"?r.getTag().getGroup(ln(this.componentId)):""}},e}(),Qc=Rt?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:re.createContext(void 0);Qc.Consumer;var ml={};function Lv(e,t,r){var n=Wc(e),o=e,i=!pl(e),l=t.attrs,s=l===void 0?Oa:l,u=t.componentId,d=u===void 0?function(w,C){var P=typeof w!="string"?"sc":jd(w);ml[P]=(ml[P]||0)+1;var j="".concat(P,"-").concat(Vc($a+P+ml[P]));return C?"".concat(C,"-").concat(j):j}(t.displayName,t.parentComponentId):u,f=t.displayName,m=f===void 0?function(w){return pl(w)?"styled.".concat(w):"Styled(".concat(ov(w),")")}(e):f,x=t.displayName&&t.componentId?"".concat(jd(t.displayName),"-").concat(t.componentId):t.componentId||d,b=n&&o.attrs?o.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(n&&o.shouldForwardProp){var k=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(w,C){return k(w,C)&&S(w,C)}}else y=k}var g=new Tv(r,x,n?o.componentStyle:void 0);function p(w,C){return function(P,j,I){var _=P.attrs,E=P.componentStyle,M=P.defaultProps,O=P.foldedComponentIds,H=P.styledComponentId,L=P.target,Se=Rt?void 0:re.useContext(Qc),ue=Os(),ge=P.shouldForwardProp||ue.shouldForwardProp,T=hh(j,Se,M)||Pn,R=function(Fr,Ht,A){for(var $,V=Ie(Ie({},Ht),{className:void 0,theme:A}),mt=0;mt<Fr.length;mt+=1){var Dr=En($=Fr[mt])?$(V):$;for(var Vt in Dr)Vt==="className"?V.className=zr(V.className,Dr[Vt]):Vt==="style"?V.style=Ie(Ie({},V.style),Dr[Vt]):V[Vt]=Dr[Vt]}return"className"in Ht&&typeof Ht.className=="string"&&(V.className=zr(V.className,Ht.className)),V}(_,j,T),F=R.as||L,q={};for(var K in R)R[K]===void 0||K[0]==="$"||K==="as"||K==="theme"&&R.theme===T||(K==="forwardedAs"?q.as=R.forwardedAs:ge&&!ge(K,F)||(q[K]=R[K]));var wt=function(Fr,Ht){var A=Os(),$=Fr.generateAndInjectStyles(Ht,A.styleSheet,A.stylis);return $}(E,R),Ue=wt.className,bt=wt.css,He=zr(O,H);Ue&&(He+=" "+Ue),R.className&&(He+=" "+R.className),q[pl(F)&&!gh.has(F)?"class":"className"]=He,I&&(q.ref=I);var ye=v.createElement(F,q);return Rt&&bt?re.createElement(re.Fragment,null,re.createElement("style",{precedence:"styled-components",href:"sc-".concat(H,"-").concat(Ue),children:bt}),ye):ye}(h,w,C)}p.displayName=m;var h=re.forwardRef(p);return h.attrs=b,h.componentStyle=g,h.displayName=m,h.shouldForwardProp=y,h.foldedComponentIds=n?zr(o.foldedComponentIds,o.styledComponentId):"",h.styledComponentId=x,h.target=n?o.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=n?function(C){for(var P=[],j=1;j<arguments.length;j++)P[j-1]=arguments[j];for(var I=0,_=P;I<_.length;I++)_s(C,_[I],!0);return C}({},o.defaultProps,w):w}}),Gc(h,function(){return".".concat(h.styledComponentId)}),i&&bh(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function Ld(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var Nd=function(e){return Object.assign(e,{isCss:!0})};function qc(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(En(e)||Io(e))return Nd(pr(Ld(Oa,kn([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?pr(n):Nd(pr(Ld(n,t)))}function As(e,t,r){if(r===void 0&&(r=Pn),!t)throw Ao(1,t);var n=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,r,qc.apply(void 0,kn([o],i,!1)))};return n.attrs=function(o){return As(e,t,Ie(Ie({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},n.withConfig=function(o){return As(e,t,Ie(Ie({},r),o))},n}var Ih=function(e){return As(Lv,e)},c=Ih;gh.forEach(function(e){c[e]=Ih(e)});var Nv=function(){function e(t,r){this.rules=t,this.componentId=r,this.isStatic=zh(t),la.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,r,n,o){var i=o(ia(pr(this.rules,r,n,o)),""),l=this.componentId+t;n.insertRules(l,l,i)},e.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,r,n,o){t>2&&la.registerId(this.componentId+t);var i=this.componentId+t;this.isStatic?n.hasNameForId(i,i)||this.createStyles(t,r,n,o):(this.removeStyles(t,n),this.createStyles(t,r,n,o))},e}();function _v(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=qc.apply(void 0,kn([e],t,!1)),o="sc-global-".concat(Vc(JSON.stringify(n))),i=new Nv(n,o),l=new WeakMap,s=function(u){var d=Os(),f=Rt?void 0:re.useContext(Qc),m=l.get(d.styleSheet);if(m===void 0&&(m=d.styleSheet.allocateGSInstance(o),l.set(d.styleSheet,m)),(typeof window>"u"||!d.styleSheet.server)&&function(S,g,p,h,w){if(i.isStatic)i.renderStyles(S,ev,p,w);else{var C=Ie(Ie({},g),{theme:hh(g,h,s.defaultProps)});i.renderStyles(S,C,p,w)}}(m,u,d.styleSheet,f,d.stylis),!Rt){var x=re.useRef(!0);re.useLayoutEffect(function(){return x.current=!1,function(){x.current=!0,queueMicrotask(function(){x.current&&(i.removeStyles(m,d.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(o,'"]')).forEach(function(S){return S.remove()}))})}},[m,d.styleSheet])}if(Rt){var b=o+m,y=typeof window>"u"?d.styleSheet.getTag().getGroup(ln(b)):"";if(y){var k="".concat(o,"-").concat(m);return re.createElement("style",{key:k,"data-styled-global":o,precedence:"styled-components",href:k,children:y})}}return null};return re.memo(s)}function wr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=ia(qc.apply(void 0,kn([e],t,!1))),o=Vc(n);return new Sh(o,n)}const Rv=c.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`,$v=c.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
`,Ov=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Av=c.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Mv=c.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,Fv=c.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,Dv=c.span`
  font-size: 0.9375rem;
  font-weight: 700;
  color: #1a1a1a;
`,Bv=c.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem;
`,Uv=c.button`
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
    color: var(--color-primary);
    background: rgba(166, 124, 82, 0.08);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`;function Hv(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const Vv=()=>a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),a.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),a.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),a.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]});function Wv({item:e,onRemove:t}){const r=e.unitPrice*e.quantity;return a.jsxs(Rv,{children:[a.jsx($v,{children:a.jsx(Ov,{src:e.image,alt:e.name})}),a.jsxs(Av,{children:[a.jsx(Mv,{children:e.name}),a.jsxs(Fv,{children:["Tamanho ",e.size," · ",e.quantity,"x"]}),a.jsx(Dv,{children:Hv(r)})]}),a.jsx(Bv,{children:a.jsx(Uv,{type:"button",onClick:()=>t==null?void 0:t(e.productId,e.size),"aria-label":"Remover item",children:a.jsx(Vv,{})})})]})}const Gv=c.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  visibility: ${({$open:e})=>e?"visible":"hidden"};
  pointer-events: ${({$open:e})=>e?"auto":"none"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  -webkit-tap-highlight-color: transparent;
`,Qv=c.aside`
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
`,qv=c.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
`,Kv=c.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,Yv=c.button`
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
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`,Xv=c.div`
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
`,Jv=c.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
`,Zv=c.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 1.5rem;
`,ey=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ty=c.footer`
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  background: #fff;
  flex-shrink: 0;
`,ry=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,ny=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,oy=c.button`
  width: 100%;
  min-height: 48px;
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

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,iy=c.button`
  width: 100%;
  min-height: 48px;
  height: 48px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-primary);
  background: transparent;
  border: 2px solid var(--color-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(166, 124, 82, 0.08);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`,ay=c.button`
  width: 100%;
  max-width: 280px;
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
`;function ly(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const sy=()=>a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M18 6 6 18M6 6l12 12"})});function cy(){const{items:e,subtotal:t,isMiniCartOpen:r,closeMiniCart:n,removeItem:o,itemCount:i}=Oo(),l=e.length===0,s=u=>{u.target===u.currentTarget&&n()};return a.jsxs(a.Fragment,{children:[a.jsx(Gv,{$open:r,onClick:s,"aria-hidden":"true"}),a.jsxs(Qv,{$open:r,role:"dialog","aria-modal":"true","aria-label":"Meu Carrinho",children:[a.jsxs(qv,{children:[a.jsx(Kv,{children:"Meu Carrinho"}),a.jsx(Yv,{type:"button",onClick:n,"aria-label":"Fechar carrinho",children:a.jsx(sy,{})})]}),a.jsx(Xv,{children:l?a.jsxs(Jv,{children:[a.jsx(Zv,{children:"Seu carrinho está vazio"}),a.jsx(ay,{as:ne,to:"/produtos",onClick:n,children:"Explorar produtos"})]}):a.jsx(ey,{children:e.map(u=>a.jsx(Wv,{item:u,onRemove:o},`${u.productId}-${u.size}`))})}),!l&&a.jsxs(ty,{children:[a.jsxs(ry,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:ly(t)})]}),a.jsxs(ny,{children:[a.jsx(oy,{as:ne,to:"/carrinho",onClick:n,children:"Ir para o carrinho"}),a.jsx(iy,{as:ne,to:"/checkout",onClick:n,children:"Finalizar compra"})]})]})]})]})}const uy=wr`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,dy=wr`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`,fy=c.div`
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
`,py=c.div`
  background: ${e=>e.$type==="success"?"#10b981":e.$type==="info"?"#3b82f6":"#ef4444"};
  color: white;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  animation: ${uy} 0.3s ease-out;
  pointer-events: all;
  font-size: 0.9375rem;
  line-height: 1.5;

  &.removing {
    animation: ${dy} 0.3s ease-out forwards;
  }
`,my=c.div`
  flex: 1;
  font-weight: 500;
`,hy=c.button`
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
`;function gy(){const{toasts:e,removeToast:t}=Ta();return e.length===0?null:a.jsx(fy,{children:e.map(r=>a.jsxs(py,{$type:r.type,children:[a.jsx(my,{children:r.message}),a.jsx(hy,{onClick:()=>t(r.id),"aria-label":"Fechar notificação",children:"×"})]},r.id))})}const Qt=(e,t=800)=>`https://images.unsplash.com/photo-${e}?w=${t}&q=80&auto=format&fit=crop`,D={hero:"/hero/glamour-country-hero-hats.jpg",hat1:Qt("1588850561407-ed78c282e89b"),hat2:Qt("1515372039744-b8f02a3ae446"),hat3:Qt("1594633312681-425c7b97ccd1"),hat4:Qt("1521369909029-2afed882baee"),field:Qt("1469474968028-56623f02e42e",1200),belt:Qt("1551028719-00167b16eac5"),scarf:Qt("1601924994987-69e26d50dc26"),woman:Qt("1496747611176-843222e1e57c"),categoriaPalha:"/categorias/chapeu-palha.jpg",categoriaAbaLarga:"/categorias/chapeu-aba-larga.jpg",categoriaFeltro:"/categorias/chapeu-feltro.jpg",categoriaCountry:"/categorias/cinta-country.jpg",promoPrefooter:"/banners/promo-prefooter.jpg"},xy=["Palha","Aba larga","Feltro","Clássicos"],vy={Palha:{image:D.categoriaPalha,link:"/categoria/chapeus-palha",description:"Palha natural com charme country e leveza no dia a dia."},"Aba larga":{image:D.categoriaAbaLarga,link:"/categoria/chapeus-aba",description:"Aba ampla para proteção solar com elegância western."},Feltro:{image:D.categoriaFeltro,link:"/categoria/chapeus-classicos",description:"Feltro premium com forma americana clássica."},Clássicos:{image:D.categoriaFeltro,link:"/categoria/chapeus-classicos",description:"Modelos atemporais para momentos especiais."}},_d=[{label:"Início",path:"/"},{label:"Chapéus",path:"/chapeus"},{label:"Artigos country",path:"/country"},{label:"Lançamentos",path:"/lancamentos"},{label:"Promoções",path:"/promocoes"}],Th=[{id:1,title:"Chapéus de palha",slug:"chapeus-palha",image:D.categoriaPalha,link:"/categoria/chapeus-palha"},{id:2,title:"Chapéus aba larga",slug:"chapeus-aba",image:D.categoriaAbaLarga,link:"/categoria/chapeus-aba"},{id:3,title:"Clássicos & feltro",slug:"chapeus-classicos",image:D.categoriaFeltro,link:"/categoria/chapeus-classicos"},{id:4,title:"Artigos country",slug:"country",image:D.categoriaCountry,link:"/country"}],Lh={title:"Elegância country",subtitle:"Chapéus e acessórios femininos com charme country e leveza.",ctaLabel:"Ver chapéus",ctaLink:"/chapeus",image:D.hero},yy={title:"Country, estilo e delicadeza",subtitle:"Peças pensadas para a mulher que vive o lifestyle country com charme.",ctaLabel:"Explorar coleção",ctaLink:"/chapeus",image:D.promoPrefooter},Aa=[{id:1,name:"Chapéu de palha Aurora",price:189.9,originalPrice:219.9,image:D.hat2,imageHover:D.woman,badge:"Novo",link:"/produto/1",team:"Linha Aurora",league:"palha",liga:"Palha",category:"chapeus-palha",sizes:["Único","P","M"],isPromo:!1,salesCount:84,createdAt:"2025-04-10",freteGratis:!0},{id:2,name:"Chapéu aba larga Campestre",price:249.9,originalPrice:null,image:D.hat1,imageHover:D.hat4,badge:"Novo",link:"/produto/2",team:"Linha Campestre",league:"aba-larga",liga:"Aba larga",category:"chapeus-aba",sizes:["P","M","G"],isPromo:!1,salesCount:62,createdAt:"2025-03-22",freteGratis:!0},{id:3,name:"Chapéu feltro Montana",price:329.9,originalPrice:379.9,image:D.hat3,imageHover:D.hat1,badge:"Promo",link:"/produto/3",team:"Linha Montana",league:"feltro",liga:"Feltro",category:"chapeus-classicos",sizes:["P","M","G"],isPromo:!0,salesCount:41,createdAt:"2025-02-15"},{id:4,name:"Chapéu vintage Ranch",price:279.9,originalPrice:null,image:D.hat4,imageHover:D.hat3,badge:null,link:"/produto/4",team:"Linha Ranch",league:"classicos",liga:"Clássicos",category:"chapeus-classicos",sizes:["Único","M"],isPromo:!1,salesCount:55,createdAt:"2025-01-08"},{id:5,name:"Chapéu palha Trançado",price:169.9,originalPrice:199.9,image:D.hat2,imageHover:D.field,badge:"Promo",link:"/produto/5",team:"Linha Trançado",league:"palha",liga:"Palha",category:"chapeus-palha",sizes:["Único"],isPromo:!0,salesCount:98,createdAt:"2025-04-01",freteGratis:!0},{id:6,name:"Chapéu aba média Country",price:219.9,originalPrice:null,image:D.hat1,imageHover:D.woman,badge:null,link:"/produto/6",team:"Linha Country",league:"aba-larga",liga:"Aba larga",category:"chapeus-aba",sizes:["P","M","G"],isPromo:!1,salesCount:37,createdAt:"2024-12-20"},{id:7,name:"Chapéu feltro Rosê",price:349.9,originalPrice:null,image:D.hat3,imageHover:D.hat4,badge:"Novo",link:"/produto/7",team:"Linha Rosê",league:"feltro",liga:"Feltro",category:"chapeus-classicos",sizes:["P","M"],isPromo:!1,salesCount:29,createdAt:"2025-04-18"},{id:8,name:"Chapéu palha Leve",price:159.9,originalPrice:189.9,image:D.hat2,imageHover:D.hat1,badge:"Promo",link:"/produto/8",team:"Linha Leve",league:"palha",liga:"Palha",category:"chapeus-palha",sizes:["Único","P"],isPromo:!0,salesCount:71,createdAt:"2024-11-10"},{id:9,name:"Cinta country couro",price:129.9,originalPrice:149.9,image:D.categoriaCountry,imageHover:D.categoriaCountry,badge:"Promo",link:"/produto/9",team:"Acessórios",league:"country",liga:"Country",category:"country",sizes:["P","M","G"],isPromo:!0,salesCount:45,createdAt:"2025-03-05"},{id:10,name:"Lenço xadrez country",price:79.9,originalPrice:null,image:D.scarf,imageHover:D.scarf,badge:null,link:"/produto/10",team:"Acessórios",league:"country",liga:"Country",category:"country",sizes:["Único"],isPromo:!1,salesCount:52,createdAt:"2025-02-28"},{id:11,name:"Pulseira trançada couro",price:59.9,originalPrice:null,image:D.belt,imageHover:D.field,badge:"Novo",link:"/produto/11",team:"Acessórios",league:"country",liga:"Country",category:"country",sizes:["Único"],isPromo:!1,salesCount:33,createdAt:"2025-04-12"},{id:12,name:"Chapéu aba curta Primavera",price:199.9,originalPrice:229.9,image:D.hat4,imageHover:D.hat2,badge:"Edição",link:"/produto/12",team:"Linha Primavera",league:"aba-larga",liga:"Aba larga",category:"chapeus-aba",sizes:["P","M","G"],isPromo:!1,salesCount:28,createdAt:"2025-04-20",freteGratis:!0}];function wy(e){var u;const t=Aa.find(d=>d.id===Number(e));if(!t)return null;const r=t.image,n=t.imageHover||t.image,o=[{src:r,label:"Vista principal"},{src:n,label:"Detalhe"},{src:D.field,label:"Estilo country"}],i=["Único","P","M","G","GG"],l=t.sizes||["Único","M","G"],s={};return i.forEach((d,f)=>{if(!l.includes(d))s[d]=0;else{const m=(t.id+f)%4===0;s[d]=m?0:5}}),{...t,gallery:o,sizeStock:s,material:(u=t.category)!=null&&u.startsWith("chapeus")?"Palha natural ou feltro premium (conforme modelo)":"Couro legítimo e fibras naturais",shipping:"Envio em até 5 dias úteis",exchange:"Troca fácil em até 7 dias"}}const by={palha:"Palha","aba-larga":"Aba larga",feltro:"Feltro",classicos:"Clássicos",country:"Artigos country"};function jy(){const e={},t=new Set;for(const n of Aa){const o=n.league||"palha";e[o]||(e[o]=[]);const i=`${o}-${n.team}`;t.has(i)||(t.add(i),e[o].push({name:n.team,image:n.image,fallbackImage:n.imageHover||null,link:`/produtos?time=${encodeURIComponent(n.team)}`}))}return["palha","aba-larga","feltro","classicos","country"].filter(n=>{var o;return(o=e[n])==null?void 0:o.length}).map(n=>({id:n,name:by[n]||n,teams:e[n].sort((o,i)=>o.name.localeCompare(i.name))}))}const ky=jy();ky.flatMap(e=>e.teams);const Ms={"chapeus-palha":{title:"Chapéus de palha",subtitle:"Leves, frescos e cheios de charme para o seu dia a dia country",bannerImage:D.categoriaPalha,categorySlug:"chapeus-palha"},"chapeus-aba":{title:"Chapéus aba larga",subtitle:"Proteção solar com elegância western",bannerImage:D.categoriaAbaLarga,categorySlug:"chapeus-aba"},"chapeus-classicos":{title:"Clássicos & feltro",subtitle:"Forma americana clássica em feltro premium",bannerImage:D.categoriaFeltro,categorySlug:"chapeus-classicos"},country:{title:"Artigos country",subtitle:"Cintas, lenços e acessórios para completar o look",bannerImage:D.categoriaCountry,categorySlug:"country"},produtos:{title:"Todos os produtos",subtitle:"Chapéus femininos e artigos com espírito country",bannerImage:D.hero,categorySlug:null},chapeus:{title:"Nossa coleção",subtitle:"Chapéus femininos por linha e estilo country",bannerImage:D.hero,categorySlug:null,filterHatsOnly:!0},times:{title:"Coleções",subtitle:"Explore por linha e estilo",bannerImage:D.hero,categorySlug:null},lancamentos:{title:"Lançamentos",subtitle:"Novidades que acabaram de chegar",bannerImage:D.hero,categorySlug:null,sortDefault:"newest"},promocoes:{title:"Promoções",subtitle:"Ofertas especiais em chapéus e acessórios country",bannerImage:D.field,categorySlug:null,filterPromoOnly:!0}},Cy={institutional:[{label:"Sobre nós",path:"/sobre"},{label:"Contato",path:"/contato"}],help:[{label:"Central de ajuda",path:"/ajuda"},{label:"Troca e devolução",path:"/troca-devolucao"},{label:"Entregas",path:"/entregas"},{label:"Formas de pagamento",path:"/pagamento"}],account:[{label:"Meus pedidos",path:"/pedido/consultar"}],social:[{name:"facebook",url:"https://facebook.com",icon:"facebook"},{name:"instagram",url:"https://instagram.com",icon:"instagram"}],copyright:"© 2025 Glamour Country. Todos os direitos reservados."};Aa.slice(0,8);const Rd="Glamour Country",Sy="/logos/552622476_17974491350925840_3124358408146951815_n.jpg",Nh=c.span`
  display: inline-flex;
  align-items: center;
  line-height: 0;
`,Py=c.img`
  height: ${({$footer:e})=>e?"140px":"64px"};
  width: auto;
  max-width: ${({$footer:e})=>e?"280px":"200px"};
  object-fit: contain;
  transition: opacity 0.2s ease;

  ${Nh}:hover & {
    opacity: 0.88;
  }

  @media (min-width: 768px) {
    height: ${({$footer:e})=>e?"160px":"80px"};
  }
`;function _h({className:e,$footer:t=!1}){return a.jsx(Nh,{className:e,"aria-label":Rd,children:a.jsx(Py,{src:Sy,alt:Rd,$footer:t})})}var Rh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$d=re.createContext&&re.createContext(Rh),Ey=["attr","size","title"];function zy(e,t){if(e==null)return{};var r=Iy(e,t),n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Iy(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function sa(){return sa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},sa.apply(this,arguments)}function Od(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function ca(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Od(Object(r),!0).forEach(function(n){Ty(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Od(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Ty(e,t,r){return t=Ly(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ly(e){var t=Ny(e,"string");return typeof t=="symbol"?t:t+""}function Ny(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $h(e){return e&&e.map((t,r)=>re.createElement(t.tag,ca({key:r},t.attr),$h(t.child)))}function Be(e){return t=>re.createElement(_y,sa({attr:ca({},e.attr)},t),$h(e.child))}function _y(e){var t=r=>{var{attr:n,size:o,title:i}=e,l=zy(e,Ey),s=o||r.size||"1em",u;return r.className&&(u=r.className),e.className&&(u=(u?u+" ":"")+e.className),re.createElement("svg",sa({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,l,{className:u,style:ca(ca({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&re.createElement("title",null,i),e.children)};return $d!==void 0?re.createElement($d.Consumer,null,r=>t(r)):t(Rh)}function Oh(e){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"},child:[]}]})(e)}function Ry(e){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"},child:[]}]})(e)}function $y(e){return Be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 64c14.4 0 22.3-7 30.8-14.4C360.4 41.1 370.7 32 392 32c49.3 0 84.4 152.2 97.9 221.9C447.8 272.1 390.9 288 320 288s-127.8-15.9-169.9-34.1C163.6 184.2 198.7 32 248 32c21.3 0 31.6 9.1 41.2 17.6C297.7 57 305.6 64 320 64zM111.1 270.7c47.2 24.5 117.5 49.3 209 49.3s161.8-24.8 208.9-49.3c24.8-12.9 49.8-28.3 70.1-47.7c7.9-7.9 20.2-9.2 29.6-3.3c9.5 5.9 13.5 17.9 9.9 28.5c-13.5 37.7-38.4 72.3-66.1 100.6C523.7 398.9 443.6 448 320 448s-203.6-49.1-252.5-99.2C39.8 320.4 14.9 285.8 1.4 248.1c-3.6-10.6 .4-22.6 9.9-28.5c9.5-5.9 21.7-4.5 29.6 3.3c20.4 19.4 45.3 34.8 70.1 47.7z"},child:[]}]})(e)}function Ad(e){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"},child:[]}]})(e)}function Oy(e){return Be({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"},child:[]}]})(e)}function Ay(e){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"},child:[]}]})(e)}function My(e){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"},child:[]}]})(e)}function Fy(e){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(e)}function Dy(e){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"},child:[]}]})(e)}const By=c.nav`
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
`,Uy=c.div`
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
`,Hy=c.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0;
`,Vy=c.ul`
  display: none;
  align-items: center;
  gap: 0.25rem;

  @media (min-width: 992px) {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 0.5rem;
  }
`,Wy=c.li`
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
`,Md=c.form`
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
`,Fd=c.input`
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
`,Dd=c.button`
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
`,Gy=c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Qy=c.div`
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
`,qy=c.span`
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
`,Bd=c.a`
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
`,Ky=c.div`
  display: none;
  flex: 1;
  min-width: 0;
  max-width: 280px;
  margin: 0 0.5rem;

  @media (min-width: 992px) {
    display: block;
  }
`,Yy=c.button`
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
`,Xy=c.div`
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
`,Jy=c.div`
  padding: 0 0 0.75rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 0.75rem;

  @media (min-width: 992px) {
    display: none;
  }
`;function be(){const[e,t]=v.useState(!1),[r,n]=v.useState(""),o=yr(),[i]=Ia(),{openMiniCart:l,itemCount:s}=Oo();v.useEffect(()=>{const f=i.get("q");f!=null&&n(f)},[i]);const u=f=>{f.preventDefault();const m=r.trim();m&&(o(`/produtos?q=${encodeURIComponent(m)}`),t(!1))},d="Buscar chapéus, acessórios ou coleções";return a.jsxs(By,{children:[a.jsxs(Uy,{children:[a.jsx(Hy,{as:ri,to:"/",children:a.jsx(_h,{})}),a.jsx(Vy,{children:_d.map(f=>a.jsx(Wy,{children:a.jsx(ri,{to:f.path,className:({isActive:m})=>m?"active":"",onClick:()=>t(!1),children:f.label})},f.path))}),a.jsx(Ky,{children:a.jsxs(Md,{onSubmit:u,role:"search",children:[a.jsx(Fd,{type:"search",placeholder:d,value:r,onChange:f=>n(f.target.value),"aria-label":d}),a.jsx(Dd,{type:"submit","aria-label":"Buscar",children:a.jsx(Ad,{size:20,"aria-hidden":!0})})]})}),a.jsxs(Gy,{children:[a.jsxs(Qy,{children:[a.jsx(Bd,{as:"button",type:"button",onClick:l,"aria-label":`Carrinho com ${s} itens`,children:a.jsx(Oh,{size:22,"aria-hidden":!0})}),s>0&&a.jsx(qy,{"aria-hidden":"true",children:s>99?"99+":s})]}),a.jsx(Bd,{as:ri,to:"/pedido/consultar","aria-label":"Meus pedidos",onClick:()=>t(!1),children:a.jsx(Dy,{size:22,"aria-hidden":!0})})]}),a.jsx(Yy,{onClick:()=>t(!e),"aria-label":e?"Fechar menu":"Abrir menu",children:e?a.jsx(Oy,{size:24,"aria-hidden":!0}):a.jsx(Ry,{size:24,"aria-hidden":!0})})]}),a.jsxs(Xy,{$open:e,children:[a.jsx(Jy,{children:a.jsxs(Md,{onSubmit:u,role:"search",children:[a.jsx(Fd,{type:"search",placeholder:d,value:r,onChange:f=>n(f.target.value),"aria-label":d}),a.jsx(Dd,{type:"submit","aria-label":"Buscar",children:a.jsx(Ad,{size:20,"aria-hidden":!0})})]})}),_d.map(f=>a.jsx(ri,{to:f.path,onClick:()=>t(!1),children:f.label},f.path))]})]})}const Zy=c.section`
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
`,e2=c.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;
`,t2=c.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to right,
    rgba(250, 247, 242, 0.92) 0%,
    rgba(250, 247, 242, 0.5) 42%,
    transparent 72%
  );
`,r2=c.div`
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
`,n2=c.h1`
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
`,o2=c.p`
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
`,i2=c.a`
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
`;function a2(){const{title:e,subtitle:t,ctaLabel:r,ctaLink:n,image:o}=Lh;return a.jsxs(Zy,{children:[a.jsx(e2,{src:o,alt:"Chapéus e acessórios western femininos"}),a.jsx(t2,{}),a.jsxs(r2,{children:[a.jsx(n2,{children:e}),a.jsx(o2,{children:t}),a.jsx(i2,{as:ne,to:n,children:r})]})]})}const Ah=c.article`
  position: relative;
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 12px rgba(61, 50, 41, 0.05);

  @media (min-width: 768px) {
    aspect-ratio: 3 / 2;
  }
`,l2=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${Ah}:hover & {
    transform: scale(1.05);
  }
`,s2=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(74, 63, 53, 0.55) 0%,
    rgba(74, 63, 53, 0.15) 45%,
    transparent 100%
  );
`,c2=c.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    font-size: 1.35rem;
    bottom: 1.25rem;
    left: 1.25rem;
  }
`;function Mh({title:e,image:t,link:r,fallbackImage:n}){const[o,i]=v.useState(t),l=()=>{n&&i(n)};return a.jsxs(Ah,{as:ne,to:r,children:[a.jsx(l2,{src:o,alt:e,onError:l}),a.jsx(s2,{}),a.jsx(c2,{children:e})]})}const u2=c.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,d2=c.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,f2=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;function p2(){return a.jsx(u2,{children:a.jsx(d2,{children:a.jsx(f2,{children:Th.map(e=>a.jsx(Mh,{title:e.title,image:e.image,link:e.link},e.id))})})})}function Fh(e,t){const r=Number(e),n=Number(t);if(r<=0||n>=r)return null;const o=(r-n)/r*100;return Math.round(o)}const Dh=c.article`
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
`,m2=c.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--color-bg);
`,h2=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.35s ease, transform 0.4s ease;

  ${Dh}:hover & {
    transform: scale(1.03);
  }
`,g2=c.span`
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
`,x2=c.div`
  padding: 1rem 1rem 1.1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`,v2=c.span`
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.25;
`,y2=c.span`
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.2;
`,w2=c.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.15rem;
`,b2=c.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--color-text-muted);
  text-decoration: line-through;
`,j2=c.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-left: 0.25rem;
`,k2=c.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #7A8F6E;
  line-height: 1.2;
`;function Ud(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function Kc({name:e,price:t,originalPrice:r,image:n,imageHover:o,badge:i,link:l,liga:s,freteGratis:u}){const[d,f]=v.useState(!1),m=o&&d?o:n,x=r?Fh(r,t):null;return a.jsxs(Dh,{as:ne,to:l,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[a.jsxs(m2,{children:[a.jsx(h2,{src:m,alt:e}),i&&a.jsx(g2,{$type:i==="Promo"?"promo":i==="Edição"||i==="Retrô"?"edicao":"new",children:i})]}),a.jsxs(x2,{children:[a.jsx(v2,{children:e}),s&&a.jsx(y2,{children:s}),a.jsxs(w2,{children:[Ud(t),r&&a.jsxs(a.Fragment,{children:[a.jsx(b2,{children:Ud(r)}),x!=null&&a.jsxs(j2,{children:["-",x,"%"]})]})]}),u&&a.jsx(k2,{children:"Frete grátis"})]})]})}const C2=wr`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,Yc=c.div`
  background: linear-gradient(
    90deg,
    #eee 0%,
    #f5f5f5 50%,
    #eee 100%
  );
  background-size: 200% 100%;
  animation: ${C2} 1.2s ease-in-out infinite;
  border-radius: 4px;
`,S2=c.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
`,P2=c(Yc)`
  aspect-ratio: 1;
  width: 100%;
`,E2=c.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,z2=c(Yc)`
  height: 0.95rem;
  width: 85%;
`,I2=c(Yc)`
  height: 1.1rem;
  width: 40%;
`;function Bh(){return a.jsxs(S2,{"aria-hidden":!0,children:[a.jsx(P2,{}),a.jsxs(E2,{children:[a.jsx(z2,{}),a.jsx(I2,{})]})]})}const T2=c.div`
  text-align: center;
  padding: 4rem 1.5rem;
  max-width: 400px;
  margin: 0 auto;
`,L2=c.div`
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
`,N2=c.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,_2=c.p`
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,R2=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`,$2=c.button`
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
`,O2=c(ne)`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;function Xc({title:e="Algo deu errado",message:t="Não foi possível carregar. Tente novamente.",onRetry:r,backToLabel:n="Voltar para a loja",backToPath:o="/produtos"}){return a.jsxs(T2,{role:"alert",children:[a.jsx(L2,{"aria-hidden":!0,children:"⚠"}),a.jsx(N2,{children:e}),a.jsx(_2,{children:t}),a.jsxs(R2,{children:[r&&a.jsx($2,{type:"button",onClick:r,children:"Tentar novamente"}),a.jsx(O2,{to:o,children:n})]})]})}function Uh(e){if(!e)return null;const t=e.sizes||[],r=e.sizeStock||{};!e.sizeStock&&t.length&&t.forEach(d=>{r[d]=5});const n=e.image||"",o=e.imageHover||n,i=e.gallery||[n,o].filter(Boolean).map((d,f)=>({src:d,label:f===0?"Principal":"Detalhe"})),l=e.isPromo||e.badge==="Promo",s=Number(e.price),u=e.originalPrice!=null?Number(e.originalPrice):null;return{id:e.id,name:e.name,price:s,originalPrice:u,image:n,imageHover:o,badge:e.badge||(l?"Promo":null),link:e.link||`/produto/${e.id}`,team:e.team,liga:(e.liga??"").trim()||null,category:e.category||"chapeus-palha",sizes:t,sizeStock:r,isPromo:l,salesCount:e.salesCount||0,createdAt:e.createdAt||new Date().toISOString(),gallery:i,material:e.material||"Materiais selecionados com cuidado",shipping:e.shipping||"Envio em até 5 dias úteis",exchange:e.exchange||"Troca fácil em até 7 dias",season:e.season,frete_gratis:!!(e.frete_gratis??e.freteGratis)}}function A2(e,t={}){let r=[...e];if(t.liga){const n=t.liga.toLowerCase();r=r.filter(o=>(o.liga||"").toLowerCase()===n)}if(t.category&&(r=r.filter(n=>n.category===t.category)),t.team&&(r=r.filter(n=>n.team===t.team)),t.search){const n=t.search.toLowerCase();r=r.filter(o=>{var i,l,s,u;return((i=o.name)==null?void 0:i.toLowerCase().includes(n))||((l=o.liga)==null?void 0:l.toLowerCase().includes(n))||((s=o.team)==null?void 0:s.toLowerCase().includes(n))||((u=o.category)==null?void 0:u.toLowerCase().includes(n))})}return r.map(Uh)}async function M2(e={}){const t=A2(Aa,e);return Promise.resolve(t)}async function F2(e){const t=wy(e);return t?Promise.resolve(Uh(t)):Promise.reject(new Error("Produto não encontrado"))}const To={getAll:M2,getById:F2},Hd=c.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,Vd=c.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,D2=c.h2`
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
`,B2=c.div`
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
`,Wd=8;function U2(){return To.getAll()}function H2(){const[e,t]=v.useState([]),[r,n]=v.useState(!0),[o,i]=v.useState(!1),l=async()=>{n(!0),i(!1);try{const u=[...await U2()].sort((d,f)=>new Date(f.createdAt)-new Date(d.createdAt)).slice(0,Wd);t(u)}catch{i(!0)}finally{n(!1)}};return v.useEffect(()=>{l()},[]),o?a.jsx(Hd,{children:a.jsx(Vd,{children:a.jsx(Xc,{message:"Não foi possível carregar os produtos mais recentes",onRetry:l})})}):a.jsx(Hd,{children:a.jsxs(Vd,{children:[a.jsx(D2,{children:"Novidades da temporada"}),a.jsx(B2,{children:r?Array.from({length:Wd},(s,u)=>a.jsx(Bh,{},u)):e.map(s=>a.jsx(Kc,{name:s.name,price:s.price,originalPrice:s.originalPrice,image:s.image,imageHover:s.imageHover,badge:s.badge,link:s.link,liga:s.liga,freteGratis:s.frete_gratis??s.freteGratis},s.id))})]})})}const V2=c.section`
  position: relative;
  width: 100%;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 320px;
  }
`,W2=c.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
`,G2=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(74, 63, 53, 0.65) 0%,
    rgba(74, 63, 53, 0.25) 55%,
    transparent 100%
  );
`,Q2=c.div`
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
`,q2=c.h2`
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
`,K2=c.p`
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
`,Y2=c.a`
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
`;function X2(){const{title:e,subtitle:t,ctaLabel:r,ctaLink:n,image:o}=yy;return a.jsxs(V2,{children:[a.jsx(W2,{src:o,alt:"Chapéus e acessórios country Glamour Country"}),a.jsx(G2,{}),a.jsxs(Q2,{children:[a.jsx(q2,{children:e}),a.jsx(K2,{children:t}),a.jsx(Y2,{as:ne,to:n,children:r})]})]})}const J2=c.footer`
  background: var(--color-footer-bg);
  color: var(--color-footer-text);
  padding: 3rem 0 2rem;

  @media (min-width: 768px) {
    padding: 4rem 0 2rem;
  }
`,Z2=c.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,e5=c.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`,t5=c.a`
  display: inline-block;
  line-height: 0;
  text-decoration: none;
`,r5=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`,ni=c.div``,oi=c.h3`
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 400;
  color: #F5EDE4;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
`,hl=c.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,gl=c.a`
  font-size: 0.9rem;
  color: var(--color-footer-text);
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`,n5=c.div`
  display: flex;
  gap: 0.75rem;
`,o5=c.a`
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
`,i5=c.p`
  font-size: 0.8rem;
  color: rgba(212, 201, 188, 0.65);
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;function je(){const{institutional:e,help:t,account:r,social:n,copyright:o}=Cy;return a.jsx(J2,{children:a.jsxs(Z2,{children:[a.jsx(e5,{children:a.jsx(t5,{as:ne,to:"/",children:a.jsx(_h,{$footer:!0})})}),a.jsxs(r5,{children:[a.jsxs(ni,{children:[a.jsx(oi,{children:"Institucional"}),a.jsx(hl,{children:e.map(i=>a.jsx("li",{children:a.jsx(gl,{as:ne,to:i.path,children:i.label})},i.path))})]}),a.jsxs(ni,{children:[a.jsx(oi,{children:"Ajuda"}),a.jsx(hl,{children:t.map(i=>a.jsx("li",{children:a.jsx(gl,{as:ne,to:i.path,children:i.label})},i.path))})]}),a.jsxs(ni,{children:[a.jsx(oi,{children:"Minha conta"}),a.jsx(hl,{children:r.map(i=>a.jsx("li",{children:a.jsx(gl,{as:ne,to:i.path,children:i.label})},i.path))})]}),a.jsxs(ni,{children:[a.jsx(oi,{children:"Redes sociais"}),a.jsx(n5,{children:n.map(i=>a.jsx(o5,{href:i.url,target:"_blank",rel:"noopener noreferrer","aria-label":i.name,children:a.jsx(Fy,{size:18,"aria-hidden":!0})},i.name))})]})]}),a.jsx(i5,{children:o})]})})}const a5=c.div`
  padding-top: var(--navbar-height, 100px);
`;function l5(){return a.jsxs(a.Fragment,{children:[a.jsx(be,{}),a.jsxs(a5,{children:[a.jsxs("main",{children:[a.jsx(a2,{}),a.jsx(p2,{}),a.jsx(H2,{}),a.jsx(X2,{})]}),a.jsx(je,{})]})]})}const s5=c.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`,c5=c.header`
  position: relative;
  width: 100%;
  min-height: 220px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 280px;
  }
`,u5=c.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,d5=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`,f5=c.div`
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
`,p5=c.h1`
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
`,m5=c.p`
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
`,h5=c.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem 3rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 0 2rem 4rem;
  }
`,g5=c.div`
  display: grid;
  gap: 2rem;
  padding-top: 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: 240px 1fr;
    gap: 2.5rem;
    padding-top: 2rem;
  }
`,x5=c.aside`
  @media (max-width: 991px) {
    order: 2;
  }
`,Vn=c.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Wn=c.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
`,v5=c.select`
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
`,Gd=c.label`
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
`,y5=c.button`
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
`,w5=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Qd=c.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,b5=c.div`
  min-width: 0;
`,j5=c.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`,k5=c.span`
  font-size: 0.9rem;
  color: #666;
`,C5=c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,S5=c.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
  white-space: nowrap;
`,P5=c.select`
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
`,qd=c.div`
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
`,E5=c.button`
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
`,z5=c.div`
  @media (max-width: 991px) {
    display: ${({$open:e})=>e?"block":"none"};
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
  }
`,I5=[{value:"bestseller",label:"Mais vendidos"},{value:"price_asc",label:"Menor preço"},{value:"price_desc",label:"Maior preço"},{value:"newest",label:"Lançamentos"}],T5=["P","M","G","GG","EG"];function L5(e,t){const r=e.slug;return r||t.replace(/^\//,"").split("/")[0]||"produtos"}function Kd(e,t,r,n){const o=Ms[n];let i=[...e];if(o!=null&&o.categorySlug&&(i=i.filter(l=>l.category===o.categorySlug)),o!=null&&o.filterPromoOnly&&(i=i.filter(l=>l.isPromo)),o!=null&&o.filterHatsOnly&&(i=i.filter(l=>{var s;return(s=l.category)==null?void 0:s.startsWith("chapeus")})),t.liga){const l=t.liga.toLowerCase();i=i.filter(s=>(s.liga||"").toLowerCase()===l)}if(t.team&&(i=i.filter(l=>l.team===t.team)),t.size&&(i=i.filter(l=>{var s;return(s=l.sizes)==null?void 0:s.includes(t.size)})),t.promoOnly&&(i=i.filter(l=>l.isPromo)),t.priceMin!=null&&t.priceMin!==""){const l=Number(t.priceMin);Number.isNaN(l)||(i=i.filter(s=>s.price>=l))}if(t.priceMax!=null&&t.priceMax!==""){const l=Number(t.priceMax);Number.isNaN(l)||(i=i.filter(s=>s.price<=l))}return r==="bestseller"?i.sort((l,s)=>(s.salesCount||0)-(l.salesCount||0)):r==="price_asc"?i.sort((l,s)=>l.price-s.price):r==="price_desc"?i.sort((l,s)=>s.price-l.price):r==="newest"&&i.sort((l,s)=>new Date(s.createdAt)-new Date(l.createdAt)),i}function N5(e){return[...new Set(e.map(r=>r.team).filter(Boolean))].sort((r,n)=>r.localeCompare(n))}function _5(e){return[...new Set(e.map(r=>r.liga).filter(Boolean))].sort((r,n)=>r.localeCompare(n))}function Yd(e,t){if(!(t!=null&&t.trim()))return e;const r=t.trim().toLowerCase();return e.filter(n=>{var o,i,l,s;return((o=n.name)==null?void 0:o.toLowerCase().includes(r))||((i=n.team)==null?void 0:i.toLowerCase().includes(r))||((l=n.category)==null?void 0:l.toLowerCase().includes(r))||((s=n.liga)==null?void 0:s.toLowerCase().includes(r))})}function jr(){const e=Fc(),{pathname:t}=Ut(),[r,n]=Ia(),{showError:o}=Ta(),i=L5(e,t),l=Ms[i]||Ms.produtos,s=r.get("time")||"",u=r.get("liga")||"",d=r.get("q")??"",[f,m]=v.useState(l.sortDefault||"bestseller"),[x,b]=v.useState({liga:u,team:s,size:"",promoOnly:l.filterPromoOnly||!1,priceMin:"",priceMax:""}),[y,k]=v.useState(!1),[S,g]=v.useState(!0),[p,h]=v.useState(!1),[w,C]=v.useState([]),[P,j]=v.useState([]),[I,_]=v.useState(0);v.useEffect(()=>{b(L=>({...L,team:s,liga:u}))},[s,u]),v.useEffect(()=>{m(l.sortDefault||"bestseller"),b({liga:u,team:s,size:"",promoOnly:l.filterPromoOnly||!1,priceMin:"",priceMax:""})},[i]),v.useEffect(()=>{let L=!0;async function Se(){g(!0),h(!1);try{const ue={};x.liga&&(ue.liga=x.liga),x.team&&(ue.team=x.team),d.trim()&&(ue.search=d.trim());const ge=await To.getAll(ue);if(!L)return;j(ge);const T=Yd(ge,d),R=Kd(T,x,f,i);C(R)}catch(ue){if(!L)return;console.error("Erro ao carregar produtos:",ue),h(!0),C([]),o("Erro ao carregar produtos. Tente novamente.")}finally{L&&g(!1)}}return Se(),()=>{L=!1}},[I,x.liga,x.team,d]),v.useEffect(()=>{if(P.length===0)return;const L=Yd(P,d),Se=Kd(L,x,f,i);C(Se)},[x,f,i,d,P]);const E=()=>{h(!1),_(L=>L+1)},M=v.useMemo(()=>N5(P),[P]),O=v.useMemo(()=>_5(P),[P]),H=(L,Se)=>{b(ue=>({...ue,[L]:Se})),L==="liga"&&n(ue=>{const ge=new URLSearchParams(ue);return Se?ge.set("liga",Se):ge.delete("liga"),ge},{replace:!0})};return a.jsxs(s5,{children:[a.jsx(be,{}),a.jsxs(c5,{children:[a.jsx(u5,{src:l.bannerImage,alt:""}),a.jsx(d5,{}),a.jsxs(f5,{children:[a.jsx(p5,{children:d.trim()?`Resultados para '${d.trim()}'`:l.title}),a.jsx(m5,{children:l.subtitle})]})]}),a.jsx(h5,{children:a.jsxs(g5,{children:[a.jsxs(x5,{children:[a.jsxs(E5,{type:"button",onClick:()=>k(L=>!L),"aria-expanded":y,children:["Filtros ",y?"▲":"▼"]}),a.jsxs(z5,{$open:y,children:[a.jsxs(Vn,{children:[a.jsx(Wn,{children:"Coleção"}),a.jsxs(v5,{value:x.liga,onChange:L=>H("liga",L.target.value),"aria-label":"Filtrar por coleção",children:[a.jsx("option",{value:"",children:"Todas"}),O.map(L=>a.jsx("option",{value:L,children:L},L))]})]}),a.jsxs(Vn,{children:[a.jsx(Wn,{children:"Linha"}),a.jsx("div",{children:M.map(L=>a.jsxs(Gd,{children:[a.jsx("input",{type:"radio",name:"team",checked:x.team===L,onChange:()=>H("team",x.team===L?"":L)}),L]},L))})]}),a.jsxs(Vn,{children:[a.jsx(Wn,{children:"Tamanho"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.25rem"},children:T5.map(L=>a.jsx(y5,{type:"button",className:x.size===L?"active":"",onClick:()=>H("size",x.size===L?"":L),children:L},L))})]}),a.jsxs(Vn,{children:[a.jsx(Wn,{children:"Preço"}),a.jsxs(w5,{children:[a.jsx(Qd,{type:"number",placeholder:"Mín. R$",min:"0",step:"10",value:x.priceMin,onChange:L=>H("priceMin",L.target.value)}),a.jsx(Qd,{type:"number",placeholder:"Máx. R$",min:"0",step:"10",value:x.priceMax,onChange:L=>H("priceMax",L.target.value)})]})]}),!l.filterPromoOnly&&a.jsxs(Vn,{children:[a.jsx(Wn,{children:"Promoção"}),a.jsxs(Gd,{children:[a.jsx("input",{type:"checkbox",checked:x.promoOnly,onChange:L=>H("promoOnly",L.target.checked)}),"Apenas em promoção"]})]})]})]}),a.jsx(b5,{children:p?a.jsx(Xc,{onRetry:E}):a.jsxs(a.Fragment,{children:[!S&&a.jsxs(j5,{children:[a.jsxs(k5,{children:[w.length," produto",w.length!==1?"s":""]}),a.jsxs(C5,{children:[a.jsx(S5,{htmlFor:"plp-sort",children:"Ordenar:"}),a.jsx(P5,{id:"plp-sort",value:f,onChange:L=>m(L.target.value),"aria-label":"Ordenação",children:I5.map(L=>a.jsx("option",{value:L.value,children:L.label},L.value))})]})]}),S?a.jsx(qd,{children:Array.from({length:12},(L,Se)=>a.jsx(Bh,{},`skeleton-${Se}`))}):a.jsxs(a.Fragment,{children:[a.jsx(qd,{children:w.map(L=>a.jsx(Kc,{name:L.name,price:L.price,originalPrice:L.originalPrice,image:L.image,imageHover:L.imageHover,badge:L.badge,link:L.link,liga:L.liga,freteGratis:L.frete_gratis??L.freteGratis},L.id))}),w.length===0&&a.jsx("p",{style:{textAlign:"center",padding:"3rem",color:"#666"},children:"Nenhum produto encontrado com os filtros selecionados. Tente alterar os filtros."})]})]})})]})}),a.jsx(je,{})]})}const R5=c.nav`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`,$5=c.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
`,Xd=c.li`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  &:not(:last-child)::after {
    content: '›';
    color: #9ca3af;
    font-weight: 400;
  }
`,O5=c.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }
`,A5=c.span`
  color: #1a1a1a;
  font-weight: 500;
`,M5=[{label:"Home",path:"/"},{label:"Produtos",path:"/produtos"}];function F5({items:e=M5,current:t}){return a.jsx(R5,{"aria-label":"Breadcrumb",children:a.jsxs($5,{children:[e.map(r=>a.jsx(Xd,{children:a.jsx(O5,{as:ne,to:r.path,children:r.label})},r.path||r.label)),t&&a.jsx(Xd,{children:a.jsx(A5,{children:t})})]})})}const D5=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  min-width: 0;
  overflow: hidden;
`,Hh=c.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`,B5=c.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${Hh}:hover & {
    transform: scale(1.05);
  }
`,U5=c.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,H5=c.button`
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
`,V5=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function W5({gallery:e=[]}){const[t,r]=v.useState(0),n=e[t]||e[0];return e!=null&&e.length?a.jsxs(D5,{children:[a.jsx(Hh,{children:a.jsx(B5,{src:n==null?void 0:n.src,alt:(n==null?void 0:n.label)||"Imagem do produto"})}),a.jsx(U5,{children:e.map((o,i)=>a.jsx(H5,{type:"button",$active:t===i,onClick:()=>r(i),"aria-label":o.label,"aria-pressed":t===i,children:a.jsx(V5,{src:o.src,alt:""})},i))})]}):null}const G5=c.div`
  margin-bottom: 1.25rem;
`,Q5=c.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`,q5=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,K5=c.button`
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
`,Y5=["P","M","G","GG","EG"];function X5({sizeStock:e={},value:t,onChange:r}){const n=Y5.filter(o=>e[o]!==void 0);return a.jsxs(G5,{children:[a.jsx(Q5,{children:"Tamanho"}),a.jsx(q5,{children:n.map(o=>{const l=(e[o]??0)===0,s=t===o;return a.jsx(K5,{type:"button",$selected:s,$disabled:l,disabled:l,onClick:()=>!l&&r(o),"aria-pressed":s,"aria-label":`Tamanho ${o}${l?", sem estoque":""}`,children:o},o)})})]})}const J5=c.div`
  margin-bottom: 1.25rem;
`,Z5=c.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`,ew=c.div`
  display: inline-flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
`,Jd=c.button`
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
`,tw=c.span`
  min-width: 48px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
`,rw=1,nw=10;function ow({value:e,onChange:t,min:r=rw,max:n=nw}){const o=e>r,i=e<n;return a.jsxs(J5,{children:[a.jsx(Z5,{children:"Quantidade"}),a.jsxs(ew,{children:[a.jsx(Jd,{type:"button",onClick:()=>t(Math.max(r,e-1)),disabled:!o,"aria-label":"Diminuir quantidade",children:"−"}),a.jsx(tw,{"aria-live":"polite",children:e}),a.jsx(Jd,{type:"button",onClick:()=>t(Math.min(n,e+1)),disabled:!i,"aria-label":"Aumentar quantidade",children:"+"})]})]})}const iw=c.button`
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
`;function aw({disabled:e,onAddToCart:t,children:r="Adicionar ao carrinho"}){const[n,o]=v.useState(!1),i=async()=>{if(!(e||n)){o(!0);try{await(t==null?void 0:t())}finally{o(!1)}}},l=e||n;return a.jsx(iw,{type:"button",$disabled:l,disabled:l,onClick:i,"aria-busy":n,children:n?"Adicionando...":r})}const lw=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e7eb;
`,sw=c.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: #4b5563;
`,cw=c.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #6b7280;
`,uw=c.span`
  font-weight: 500;
  color: #374151;
`,dw=[{icon:"◆",label:"Material",text:"100% Poliéster"},{icon:"✈",label:"Envio",text:"Envio em até 48h"},{icon:"↔",label:"Troca",text:"Troca fácil em até 7 dias"}];function fw({items:e=dw}){return a.jsx(lw,{children:e.map(t=>a.jsxs(sw,{children:[a.jsx(cw,{"aria-hidden":!0,children:t.icon}),a.jsx(uw,{children:t.text})]},t.label))})}const pw=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,mw=c.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
`,hw=c.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`,gw=c.div`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
`,xw=c.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #059669;
  line-height: 1.3;
  margin-bottom: 1rem;
  display: block;
`,vw=c.span`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a1a1a;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,yw=c.span`
  font-size: 1rem;
  font-weight: 400;
  color: #9ca3af;
  text-decoration: line-through;
`,ww=c.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
`,bw=c.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,jw=c.div`
  flex-shrink: 0;
`,kw=c.div`
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
`,Cw=c.span`
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
`;function Zd(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function Sw({product:e,selectedSize:t,onSizeChange:r,quantity:n,onQuantityChange:o,onAddToCart:i,maxQuantity:l=10,addedFeedback:s=!1}){const u=(e==null?void 0:e.badge)||"Oficial",d=(e==null?void 0:e.isPromo)&&(e==null?void 0:e.originalPrice),f=d?Fh(e.originalPrice,e.price):null;return a.jsxs(pw,{children:[a.jsx(mw,{children:u}),a.jsx(hw,{children:e==null?void 0:e.name}),a.jsxs(gw,{children:[a.jsx(vw,{children:Zd((e==null?void 0:e.price)??0)}),d&&a.jsxs(a.Fragment,{children:[a.jsx(yw,{children:Zd(e.originalPrice)}),a.jsxs(ww,{children:["Promoção",f!=null?` -${f}%`:""]})]})]}),((e==null?void 0:e.frete_gratis)??(e==null?void 0:e.freteGratis))&&a.jsx(xw,{children:"Frete grátis"}),a.jsx(X5,{sizeStock:(e==null?void 0:e.sizeStock)??{},value:t,onChange:r}),a.jsx(bw,{children:a.jsx(jw,{children:a.jsx(ow,{value:n,onChange:o,min:1,max:l})})}),a.jsxs(kw,{children:[a.jsx(aw,{disabled:!t,onAddToCart:i}),s&&a.jsx(Cw,{children:"Adicionado ao carrinho!"})]}),a.jsx(fw,{items:[...e!=null&&e.liga?[{icon:"🌾",label:"Coleção",text:e.liga}]:[],{icon:"◆",label:"Material",text:(e==null?void 0:e.material)||"100% Poliéster"},{icon:"✈",label:"Envio",text:(e==null?void 0:e.shipping)||"Envio em até 48h"},{icon:"↔",label:"Troca",text:(e==null?void 0:e.exchange)||"Troca fácil em até 7 dias"}]})]})}const Pw=wr`
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
  animation: ${Pw} 1.2s ease-in-out infinite;
  border-radius: 4px;
`,Ew=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
    align-items: start;
  }
`,zw=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,Iw=c(br)`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
`,Tw=c.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,Lw=c(br)`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 6px;
`,Nw=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`,_w=c(br)`
  height: 14px;
  width: 60px;
  margin-bottom: 0.5rem;
`,Rw=c(br)`
  height: 28px;
  width: 85%;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    height: 32px;
  }
`,$w=c(br)`
  height: 32px;
  width: 140px;
  margin-bottom: 1.25rem;

  @media (min-width: 768px) {
    height: 36px;
  }
`,Ow=c(br)`
  height: 14px;
  width: 80px;
  margin-bottom: 0.5rem;
`,Aw=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`,Mw=c(br)`
  width: 48px;
  height: 48px;
  border-radius: 6px;
`,Fw=c(br)`
  height: 48px;
  width: 100%;
  max-width: 280px;
  margin-top: 0.5rem;
  border-radius: 8px;
`,Dw=3,Bw=5;function Uw(){return a.jsxs(Ew,{"aria-hidden":!0,children:[a.jsxs(zw,{children:[a.jsx(Iw,{}),a.jsx(Tw,{children:Array.from({length:Dw},(e,t)=>a.jsx(Lw,{},`thumb-${t}`))})]}),a.jsxs(Nw,{children:[a.jsx(_w,{}),a.jsx(Rw,{}),a.jsx($w,{}),a.jsx(Ow,{}),a.jsx(Aw,{children:Array.from({length:Bw},(e,t)=>a.jsx(Mw,{},`chip-${t}`))}),a.jsx(Fw,{})]})]})}const ii=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
`,ai=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,Hw=c.div`
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
`,Vw=c.div``,Ww=c.div`
  min-width: 0;
`,Gw=c.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`,Qw=c.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
`,qw=c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,Kw=c.div`
  text-align: center;
  padding: 4rem 1rem;
`,Yw=c.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,Xw=c.p`
  color: #6b7280;
  margin-bottom: 1rem;
`,Jw=c(ne)`
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,Zw=4;function e4(e){if(!e)return[{label:"Home",path:"/"},{label:"Produtos",path:"/produtos"}];const t=e.liga||"Produtos";return[{label:"Home",path:"/"},{label:"Produtos",path:"/produtos"},{label:t,path:`/produtos?liga=${encodeURIComponent(t)}`}]}function t4(){const{id:e}=Fc(),{addItem:t,openMiniCart:r}=Oo(),{showError:n}=Ta(),[o,i]=v.useState(null),[l,s]=v.useState([]),[u,d]=v.useState(!0),[f,m]=v.useState(!1),[x,b]=v.useState(0),[y,k]=v.useState(null),[S,g]=v.useState(1),[p,h]=v.useState(!1);v.useEffect(()=>{let j=!0;async function I(){d(!0),m(!1);try{const[_,E]=await Promise.all([To.getById(e),To.getAll()]);if(!j)return;i(_);const M=E.filter(O=>O.id!==(_==null?void 0:_.id)&&(O.liga===(_==null?void 0:_.liga)||O.category===(_==null?void 0:_.category))).slice(0,Zw);s(M)}catch(_){if(!j)return;console.error("Erro ao carregar produto:",_),m(!0),i(null),_.status!==404&&n("Erro ao carregar produto. Tente novamente.")}finally{j&&d(!1)}}return I(),()=>{j=!1}},[e,x,n]);const w=()=>{m(!1),b(j=>j+1)},C=!y||!(o!=null&&o.sizeStock)?10:Math.min(10,o.sizeStock[y]||1);v.useEffect(()=>{S>C&&g(C)},[C,S]);const P=async()=>{var j,I;await new Promise(_=>setTimeout(_,600)),t({productId:o.id,name:o.name,image:((I=(j=o.gallery)==null?void 0:j[0])==null?void 0:I.src)||o.image,size:y,quantity:S,unitPrice:o.price}),h(!0),r()};return v.useEffect(()=>{if(!p)return;const j=setTimeout(()=>h(!1),2500);return()=>clearTimeout(j)},[p]),u?a.jsxs(ii,{children:[a.jsx(be,{}),a.jsx(ai,{children:a.jsx(Uw,{})}),a.jsx(je,{})]}):f?a.jsxs(ii,{children:[a.jsx(be,{}),a.jsx(ai,{children:a.jsx(Xc,{onRetry:w})}),a.jsx(je,{})]}):o?a.jsxs(ii,{children:[a.jsx(be,{}),a.jsxs(ai,{children:[a.jsx(F5,{items:e4(o),current:o.name}),a.jsxs(Hw,{children:[a.jsx(Vw,{children:a.jsx(W5,{gallery:o.gallery})}),a.jsx(Ww,{children:a.jsx(Sw,{product:o,selectedSize:y,onSizeChange:k,quantity:S,onQuantityChange:g,onAddToCart:P,maxQuantity:C,addedFeedback:p})})]}),l.length>0&&a.jsxs(Gw,{children:[a.jsx(Qw,{children:"Você também pode gostar"}),a.jsx(qw,{children:l.map(j=>a.jsx(Kc,{name:j.name,price:j.price,originalPrice:j.originalPrice,image:j.image,imageHover:j.imageHover,badge:j.badge,link:j.link,liga:j.liga},j.id))})]})]}),a.jsx(je,{})]}):a.jsxs(ii,{children:[a.jsx(be,{}),a.jsx(ai,{children:a.jsxs(Kw,{children:[a.jsx(Yw,{children:"Produto não encontrado"}),a.jsx(Xw,{children:"O produto que você procura não existe ou foi removido."}),a.jsx(Jw,{to:"/produtos",children:"Voltar para a loja"})]})}),a.jsx(je,{})]})}const Vh=wr`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`,r4=c.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
  background: var(--color-bg);
`,n4=c.header`
  position: relative;
  width: 100%;
  min-height: 260px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 340px;
  }
`,o4=c.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
`,i4=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(74, 63, 53, 0.82) 0%,
    rgba(74, 63, 53, 0.45) 45%,
    rgba(74, 63, 53, 0.15) 100%
  );
`,a4=c.div`
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
`,l4=c.span`
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
`,s4=c.h1`
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
`,c4=c.p`
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
`,u4=c(ne)`
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
`,d4=c.main`
  flex: 1;
  padding: 2.5rem 0 4rem;

  @media (min-width: 768px) {
    padding: 3rem 0 5rem;
  }
`,f4=c.section`
  margin-bottom: 3rem;
`,p4=c.h2`
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text);
  margin: 0 0 0.35rem;
`,m4=c.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,h4=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,g4=c.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,x4=c.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 3.5rem;
  }
`,v4=c(ne)`
  display: block;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border);
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
`,y4=c.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.5s ease;

  @media (min-width: 768px) {
    aspect-ratio: 21 / 9;
  }
`,w4=c.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(74, 63, 53, 0.75) 0%,
    rgba(74, 63, 53, 0.2) 45%,
    transparent 100%
  );
`,b4=c.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.25rem 1.5rem;

  @media (min-width: 768px) {
    padding: 1.75rem 2rem;
  }
`,j4=c.h2`
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
`,k4=c.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.92);
  margin: 0 0 0.5rem;
  max-width: 480px;
`,C4=c.span`
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
`,S4=c.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  padding: 0;
  margin: 0;
  list-style: none;
`,P4=c(ne)`
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
`;const E4=c.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,z4=c.div`
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
`,I4=c.div`
  aspect-ratio: 4 / 3;
  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    #ede4d8 50%,
    var(--color-bg) 100%
  );
  background-size: 200% 100%;
  animation: ${Vh} 1.4s ease-in-out infinite;
`,T4=c.div`
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
  animation: ${Vh} 1.4s ease-in-out infinite;

  &:last-child {
    width: 60%;
    margin-top: 0.5rem;
  }
`,L4=Th.filter(e=>e.slug.startsWith("chapeus"));function N4(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g,"-")}function ef(e){var r;const t={};for(const n of e){if(!((r=n.category)!=null&&r.startsWith("chapeus")))continue;const o=(n.liga||"").trim();o&&(t[o]||(t[o]=[]),`${o}${n.team}`,!t[o].some(i=>i.name===n.team)&&t[o].push({name:n.team,link:`/produtos?time=${encodeURIComponent(n.team)}`}))}return xy.map(n=>{const o=vy[n];return{id:N4(n),name:n,image:(o==null?void 0:o.image)??null,categoryLink:(o==null?void 0:o.link)??`/produtos?liga=${encodeURIComponent(n)}`,description:(o==null?void 0:o.description)??"",lines:(t[n]||[]).sort((i,l)=>i.name.localeCompare(l.name))}})}function _4(){return a.jsx(E4,{"aria-hidden":"true",children:Array.from({length:3},(e,t)=>a.jsxs(z4,{children:[a.jsx(I4,{}),a.jsx(T4,{})]},t))})}function R4(){const[e,t]=v.useState([]),[r,n]=v.useState(!0);return v.useEffect(()=>{let o=!0;async function i(){try{const l=await To.getAll();if(!o)return;t(ef(l))}catch(l){console.error("Erro ao carregar coleções:",l),t(ef([]))}finally{o&&n(!1)}}return i(),()=>{o=!1}},[]),a.jsxs(r4,{children:[a.jsx(be,{}),a.jsxs(n4,{children:[a.jsx(o4,{src:Lh.image,alt:"Chapéus country Glamour Country"}),a.jsx(i4,{}),a.jsxs(a4,{children:[a.jsx(l4,{children:"Glamour Country"}),a.jsx(s4,{children:"Nossa coleção"}),a.jsx(c4,{children:"Chapéus femininos por estilo country. Escolha a classificação e encontre o seu modelo."}),a.jsx(u4,{to:"/produtos",children:"Ver todos os chapéus"})]})]}),a.jsx(d4,{children:a.jsxs(g4,{children:[a.jsxs(f4,{"aria-labelledby":"estilos-title",children:[a.jsx(p4,{id:"estilos-title",children:"Por estilo"}),a.jsx(m4,{children:"Palha, aba larga, feltro e clássicos — as classificações da loja."}),a.jsx(h4,{children:L4.map(o=>a.jsx(Mh,{title:o.title,image:o.image,link:o.link},o.id))})]}),r?a.jsx(_4,{}):e.map(o=>a.jsxs(x4,{id:`coleção-${o.id}`,"aria-labelledby":`titulo-${o.id}`,children:[a.jsxs(v4,{to:o.categoryLink,children:[o.image&&a.jsx(y4,{src:o.image,alt:`Chapéus ${o.name}`}),a.jsx(w4,{}),a.jsxs(b4,{children:[a.jsx(j4,{id:`titulo-${o.id}`,children:o.name}),o.description&&a.jsx(k4,{children:o.description}),a.jsx(C4,{children:"Ver coleção →"})]})]}),o.lines.length>0&&a.jsx(S4,{"aria-label":`Linhas ${o.name}`,children:o.lines.map(i=>a.jsx("li",{children:a.jsx(P4,{to:i.link,children:i.name})},i.name))})]},o.id))]})}),a.jsx(je,{})]})}const $4=c.div`
  display: inline-flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
`,tf=c.button`
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
`,O4=c.span`
  min-width: 40px;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
`;function A4({value:e,onChange:t,min:r=1,max:n=99,"aria-label":o="Quantidade"}){const i=e>r,l=e<n;return a.jsxs($4,{role:"group","aria-label":o,children:[a.jsx(tf,{type:"button",onClick:()=>t(Math.max(r,e-1)),disabled:!i,"aria-label":"Diminuir quantidade",children:"−"}),a.jsx(O4,{"aria-live":"polite",children:e}),a.jsx(tf,{type:"button",onClick:()=>t(Math.min(n,e+1)),disabled:!l,"aria-label":"Aumentar quantidade",children:"+"})]})}const M4=c.article`
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
`,F4=c.a`
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
`,D4=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,B4=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
`,U4=c.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
  word-break: break-word;
`,H4=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`,V4=c.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #374151;
`,W4=c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,G4=c.div`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: right;

  @media (min-width: 640px) {
    min-width: 80px;
    text-align: right;
  }
`,Q4=c.button`
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
`,q4=c.div`
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
`;function rf(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const K4=()=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),a.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),a.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),a.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]});function Y4({item:e,onUpdateQuantity:t,onRemove:r}){const[n,o]=v.useState(!1),i=e.unitPrice*e.quantity;v.useEffect(()=>{if(!n)return;const s=setTimeout(()=>o(!1),3e3);return()=>clearTimeout(s)},[n]);const l=()=>{n?(r==null||r(e.productId,e.size),o(!1)):o(!0)};return a.jsxs(M4,{children:[a.jsx(F4,{as:ne,to:`/produto/${e.productId}`,children:a.jsx(D4,{src:e.image,alt:e.name})}),a.jsxs(B4,{children:[a.jsx(U4,{children:e.name}),a.jsxs(H4,{children:["Tamanho: ",e.size]}),a.jsx(V4,{children:rf(e.unitPrice)})]}),a.jsx(W4,{children:a.jsx(A4,{value:e.quantity,onChange:s=>t==null?void 0:t(e.productId,e.size,s),min:1,max:99,"aria-label":`Quantidade de ${e.name}`})}),a.jsx(G4,{children:rf(i)}),a.jsxs(q4,{children:[a.jsx(Q4,{type:"button",onClick:l,"aria-label":n?"Clique novamente para remover":"Remover item",title:n?"Clique novamente para remover":"Remover",children:a.jsx(K4,{})}),n&&a.jsx("span",{style:{fontSize:"0.75rem",color:"var(--color-primary)",fontWeight:600},children:"Clique de novo para remover"})]})]})}const X4=c.aside`
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
`,J4=c.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,Fs=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`,Z4=c(Fs)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 1rem;
`,eb=c.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 1rem;
`,tb=c.button`
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
`;function nf(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const rb=0;function nb({subtotal:e,itemCount:t,onCheckout:r}){const o=e+rb;return a.jsxs(X4,{children:[a.jsx(J4,{children:"Resumo do pedido"}),a.jsxs(Fs,{children:[a.jsxs("span",{children:["Subtotal (",t," ",t===1?"item":"itens",")"]}),a.jsx("span",{children:nf(e)})]}),a.jsxs(Fs,{children:[a.jsx("span",{children:"Frete"}),a.jsx("span",{children:"Calculado no checkout"})]}),a.jsx(eb,{children:"O valor do frete será calculado na próxima etapa."}),a.jsxs(Z4,{children:[a.jsx("span",{children:"Total"}),a.jsx("span",{children:nf(o)})]}),a.jsx(tb,{type:"button",disabled:t===0,onClick:r,"aria-label":"Finalizar compra",children:"Finalizar compra"})]})}const ob=c.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem;
  min-height: 320px;
`,ib=c.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #d1d5db;
  margin-bottom: 1.25rem;
`,ab=c.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,lb=c.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  max-width: 280px;
`,sb=c(ne)`
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
`,cb=()=>a.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}),a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]});function ub(){return a.jsxs(ob,{children:[a.jsx(ib,{"aria-hidden":!0,children:a.jsx(cb,{})}),a.jsx(ab,{children:"Seu carrinho está vazio"}),a.jsx(lb,{children:"Adicione chapéus e acessórios ao carrinho e finalize quando quiser."}),a.jsx(sb,{to:"/produtos",children:"Voltar para a loja"})]})}const db=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,fb=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,pb=c.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,mb=c.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,hb=c.a`
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
`,gb=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 340px;
    gap: 2rem;
  }
`,xb=c.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
`,vb=c.div`
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
`;function yb(){const e=yr(),{items:t,itemCount:r,subtotal:n,updateQuantity:o,removeItem:i}=Oo(),l=()=>{r!==0&&e("/checkout")};return a.jsxs(db,{children:[a.jsx(be,{}),a.jsxs(fb,{children:[a.jsxs(pb,{children:[a.jsx(mb,{children:"Meu Carrinho"}),a.jsx(hb,{as:ne,to:"/produtos",children:"Continuar comprando"})]}),t.length===0?a.jsx(ub,{}):a.jsxs(gb,{children:[a.jsx(xb,{children:t.map(s=>a.jsx(Y4,{item:s,onUpdateQuantity:o,onRemove:i},`${s.productId}-${s.size}`))}),a.jsx(vb,{children:a.jsx(nb,{subtotal:n,itemCount:r,onCheckout:l})})]})]}),a.jsx(je,{})]})}const wb="http://localhost:8080",bb=3e4;class Gr extends Error{constructor(t,r,n){super(t),this.name="ApiError",this.status=r,this.data=n}}function jb(e){const t=new AbortController,r=setTimeout(()=>t.abort(),e);return{signal:t.signal,clearTimeout:()=>clearTimeout(r)}}async function Gn(e,t={}){const{timeout:r=bb,...n}=t,o=`${wb}${e}`,i=jb(r);try{const l=await fetch(o,{...n,signal:i.signal,headers:{"Content-Type":"application/json",...n.headers}});if(i.clearTimeout(),!l.ok){let u=null;try{u=await l.json()}catch{u={message:await l.text()}}const d=(u==null?void 0:u.message)||`Erro ${l.status}`;throw new Gr(d,l.status,u)}return l.status===204?null:await l.json()}catch(l){throw i.clearTimeout(),l.name==="AbortError"?new Gr("Tempo limite de requisição excedido",408,null):l instanceof TypeError&&l.message.includes("fetch")?new Gr("Erro de conexão. Verifique sua internet.",0,null):l instanceof Gr?l:new Gr("Erro inesperado",500,{originalError:l.message})}}const Rn={get:(e,t={})=>Gn(e,{...t,method:"GET"}),post:(e,t,r={})=>Gn(e,{...r,method:"POST",body:JSON.stringify(t)}),put:(e,t,r={})=>Gn(e,{...r,method:"PUT",body:JSON.stringify(t)}),patch:(e,t,r={})=>Gn(e,{...r,method:"PATCH",body:JSON.stringify(t)}),delete:(e,t={})=>Gn(e,{...t,method:"DELETE"})};async function kb(){return{mercadopagoPublicKey:(await Rn.get("/api/config")).mercadopagoPublicKey}}async function Cb(e){try{const t={customer:{name:e.customer.name,email:e.customer.email,cpf:String(e.customer.cpf).replace(/\D/g,"")},address:{cep:String(e.address.cep).replace(/\D/g,""),rua:e.address.rua,numero:e.address.numero,complemento:e.address.complemento||"",cidade:e.address.cidade,estado:e.address.estado},items:e.items.map(n=>({productId:n.productId,size:n.size,quantity:n.quantity,unitPrice:Number(n.unitPrice)})),total:Number(e.total)},r=await Rn.post("/api/orders",t);return{orderId:r.orderId||r.id,status:r.status||"PAYMENT_PENDING",checkoutUrl:r.checkoutUrl??null,preferenceId:r.preferenceId??null,total:r.total??e.total}}catch(t){throw console.error("[OrderService] Erro ao criar pedido:",t),t}}function Sb(e,t=!1){var n,o;const r={email:e.email,name:e.name||void 0,identification:{type:((n=e.identification)==null?void 0:n.type)||"CPF",number:String(((o=e.identification)==null?void 0:o.number)??"").replace(/\D/g,"")}};return t&&e.address&&(r.address={rua:e.address.rua,numero:String(e.address.numero??""),cep:String(e.address.cep??"").replace(/\D/g,""),cidade:e.address.cidade,estado:e.address.estado}),r}async function Pb(e,t){const r=t.payment_method_id,n=r&&r!=="pix"&&r!=="bolbradesco",o={payment_method_id:r,payer:Sb(t.payer,r==="bolbradesco")};n&&t.token&&(o.token=t.token,o.installments=Number(t.installments??1),t.issuer_id!=null&&t.issuer_id!==""&&(o.issuer_id=String(t.issuer_id)));const i=await Rn.post(`/api/orders/${encodeURIComponent(e)}/payments`,o);return{paymentId:i.paymentId,status:i.status,statusDetail:i.statusDetail,orderId:i.orderId??e,qrCodeBase64:i.qrCodeBase64,qrCode:i.qrCode,ticketUrl:i.ticketUrl}}async function Eb(e,t){const r=await Rn.get(`/api/orders/${encodeURIComponent(e)}/payments/${encodeURIComponent(t)}`);return{updated:!!r.updated,status:r.status}}async function zb(e,t){const r=new URLSearchParams({email:e.trim(),code:t.trim()}),n=await Rn.get(`/api/orders/lookup?${r.toString()}`);return{...n,orderCode:n.orderId??n.orderCode}}async function Ib(e){const t=String(e??"").replace(/\D/g,""),r=new URLSearchParams({cpf:t}),n=await Rn.get(`/api/orders/by-cpf?${r.toString()}`);return Array.isArray(n)?n:(n==null?void 0:n.orders)??[]}const Tt={getConfig:kb,createOrder:Cb,createPayment:Pb,getPaymentStatus:Eb,lookupOrder:zb,getOrdersByCpf:Ib},Tb="https://sdk.mercadopago.com/js/v2";let li=null;function Lb(){return typeof window>"u"?Promise.reject(new Error("Mercado Pago SDK só pode ser carregado no browser")):window.MercadoPago?Promise.resolve(window.MercadoPago):li||(li=new Promise((e,t)=>{const r=document.createElement("script");r.src=Tb,r.async=!0,r.onload=()=>{window.MercadoPago?e(window.MercadoPago):t(new Error("Mercado Pago SDK não disponível após carregar o script"))},r.onerror=()=>t(new Error("Falha ao carregar o SDK do Mercado Pago")),document.head.appendChild(r)}),li)}async function Nb(e,t,r){var s,u,d,f;const n=await Lb(),l=await new n(e,{locale:"pt-BR"}).bricks().create("cardPayment",t,{initialization:{amount:((s=r.initialization)==null?void 0:s.amount)??0},callbacks:{onReady:((u=r.callbacks)==null?void 0:u.onReady)??(()=>{}),onSubmit:((d=r.callbacks)==null?void 0:d.onSubmit)??(()=>Promise.resolve()),onError:((f=r.callbacks)==null?void 0:f.onError)??(m=>console.error("[CardPaymentBrick]",m))}});return{unmount:()=>{l&&typeof l.unmount=="function"&&l.unmount()}}}const _b=c.aside`
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
`,Rb=c.button`
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
`,$b=c.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({$open:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;

  @media (min-width: 768px) {
    display: none;
  }
`,Ob=c.div`
  padding: 0 1.25rem 1.25rem;
  max-height: ${({$open:e})=>e?"800px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;

  @media (min-width: 768px) {
    max-height: none;
    padding: 1.25rem;
  }
`,Ab=c.ul`
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
`,Mb=c.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: #374151;
`,Fb=c.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`,Db=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Bb=c.div`
  flex: 1;
  min-width: 0;
`,Ub=c.span`
  display: block;
  font-weight: 500;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Hb=c.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,Vb=c.span`
  font-weight: 600;
  color: #1a1a1a;
  flex-shrink: 0;
`,Ds=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`,Wb=c(Ds)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 0;
`,Gb=c.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 0.5rem;
`;function xl(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const Qb=()=>a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"m6 9 6 6 6-6"})}),qb=0;function Kb({items:e,subtotal:t}){const[r,n]=v.useState(!1),i=t+qb;return a.jsxs(_b,{children:[a.jsxs(Rb,{type:"button",onClick:()=>n(l=>!l),"aria-expanded":r,children:[a.jsx("span",{children:"Resumo do pedido"}),a.jsx($b,{$open:r,children:a.jsx(Qb,{})})]}),a.jsxs(Ob,{$open:r,children:[a.jsx(Ab,{children:e.map(l=>a.jsxs(Mb,{children:[a.jsx(Fb,{children:a.jsx(Db,{src:l.image,alt:l.name})}),a.jsxs(Bb,{children:[a.jsx(Ub,{children:l.name}),a.jsxs(Hb,{children:["Tamanho ",l.size," · ",l.quantity,"x"]})]}),a.jsx(Vb,{children:xl(l.unitPrice*l.quantity)})]},`${l.productId}-${l.size}`))}),a.jsxs(Ds,{children:[a.jsxs("span",{children:["Subtotal (",e.reduce((l,s)=>l+s.quantity,0)," itens)"]}),a.jsx("span",{children:xl(t)})]}),a.jsxs(Ds,{children:[a.jsx("span",{children:"Frete"}),a.jsx("span",{children:"Calculado no checkout"})]}),a.jsx(Gb,{children:"O valor do frete será calculado na próxima etapa."}),a.jsxs(Wb,{children:[a.jsx("span",{children:"Total"}),a.jsx("span",{children:xl(i)})]})]})]})}const Yb=wr`
  to { transform: rotate(360deg); }
`,Xb=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,Jb=c.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,Zb=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 360px;
    gap: 2rem;
  }
`,ej=c.div`
  min-width: 0;
`,vl=c.section`
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
`,yl=c.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1.25rem;
`,of=c.form`
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
`,Ct=c.input`
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
`,af=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,qt=c.button`
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
`,wl=c.span`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${Yb} 0.75s linear infinite;
  flex-shrink: 0;
`,tj=c.label`
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
`,rj=c.input`
  width: 20px;
  height: 20px;
  accent-color: var(--color-primary);
`,nj=c.div`
  @media (max-width: 767px) {
    order: -1;
  }
`,oj=c.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,ij=c.span`
  display: flex;
  gap: 0.5rem;
`,aj=c.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$active:e})=>e?"var(--color-primary)":"#e5e7eb"};
  transition: background 0.2s;
`,lj=c.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
`,sj=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`,cj=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin: 1rem 0;
`,uj=c.img`
  display: block;
  width: 200px;
  height: 200px;
  object-fit: contain;
  background: #fff;
  border-radius: 4px;
`,lf=c.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,dj=c.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,fj=c.input`
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
`,pj=c.button`
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
`,sf=c.a`
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
`,si="artilheiro-checkout-success",cf="cardPaymentBrick_container",mj=[{id:"card",label:"Cartão de crédito ou débito",value:"card"},{id:"pix",label:"PIX",value:"pix"},{id:"boleto",label:"Boleto bancário",value:"boleto"}],hj=[{id:1,title:"Dados pessoais"},{id:2,title:"Endereço"},{id:3,title:"Pagamento"}];function uf(e){const t=(e.nome||"").trim(),r=(e.email||"").trim(),n=(e.cpf||"").trim();return t.length>=3&&r.includes("@")&&n.length>=11}function df(e){const t=(e.cep||"").trim(),r=(e.rua||"").trim(),n=(e.numero||"").trim(),o=(e.cidade||"").trim(),i=(e.estado||"").trim();return t.length>=8&&r.length>=3&&n.length>=1&&o.length>=2&&i.length>=2}function gj(e,t,r){return{customer:{name:e.nome,email:e.email,cpf:e.cpf},address:{cep:e.cep,rua:e.rua,numero:e.numero,complemento:e.complemento,cidade:e.cidade,estado:e.estado},items:t.map(n=>({productId:n.productId,size:n.size,quantity:n.quantity,unitPrice:n.unitPrice})),total:r}}function xj(){const e=yr(),{items:t,subtotal:r,itemCount:n,clearCart:o}=Oo(),{showError:i,showSuccess:l}=Ta(),[s,u]=v.useState(1),[d,f]=v.useState({nome:"",email:"",cpf:"",cep:"",rua:"",numero:"",complemento:"",cidade:"",estado:""}),[m,x]=v.useState(null),[b,y]=v.useState(null),[k,S]=v.useState(!1),[g,p]=v.useState(null),[h,w]=v.useState(null),[C,P]=v.useState("card"),[j,I]=v.useState(!1),[_,E]=v.useState(null),M=v.useRef(null),[O,H]=v.useState(null),[L,Se]=v.useState(!1),[ue,ge]=v.useState(null),[T,R]=v.useState(!1);v.useEffect(()=>{n===0&&e("/carrinho",{replace:!0})},[n,e]),v.useEffect(()=>{if(s!==3||m||k||n===0)return;p(null),S(!0);const A=gj(d,t,r);Promise.all([Tt.createOrder(A),Tt.getConfig().catch(()=>({mercadopagoPublicKey:"TEST-97f82dbb-2289-4d20-8e9b-bf6d36316387"}))]).then(([$,V])=>{x($.orderId),y($.total),w((V==null?void 0:V.mercadopagoPublicKey)||"TEST-97f82dbb-2289-4d20-8e9b-bf6d36316387")}).catch($=>{console.error("Erro ao criar pedido:",$),p($.message||"Não foi possível criar o pedido. Tente novamente.")}).finally(()=>{S(!1)})},[s,m,k,d,t,r,n]),v.useEffect(()=>{if(s!==3||C!=="card"||!m||!h||r<=0)return;let A=!0;return E(null),I(!1),Nb(h,cf,{initialization:{amount:r},callbacks:{onReady:()=>{A&&I(!0)},onSubmit:$=>{const V=$.token,mt=$.paymentMethodId??$.payment_method_id,Dr=$.installments??1,Vt=$.issuerId??$.issuer_id;if(!V||!mt)return Promise.reject(new Error("Dados do cartão incompletos."));const Gh={token:V,payment_method_id:mt,installments:Dr,issuer_id:Vt,payer:{email:d.email.trim(),name:d.nome.trim(),identification:{type:"CPF",number:String(d.cpf).replace(/\D/g,"")}}};return Tt.createPayment(m,Gh).then($e=>{var Br,$n,Mo,eu;if($e.status==="approved"){l("Pagamento aprovado! Redirecionando...");try{sessionStorage.setItem(si,JSON.stringify({orderId:$e.orderId,total:b??r,email:(($n=(Br=d.email)==null?void 0:Br.trim)==null?void 0:$n.call(Br))??""}))}catch{}o(),e("/checkout/sucesso",{replace:!0});return}if($e.status==="pending"){l("Pagamento em análise. Você receberá a confirmação em breve.");try{sessionStorage.setItem(si,JSON.stringify({orderId:$e.orderId,total:b??r,email:((eu=(Mo=d.email)==null?void 0:Mo.trim)==null?void 0:eu.call(Mo))??""}))}catch{}o(),e("/checkout/sucesso",{replace:!0});return}return i($e.statusDetail||"Pagamento recusado. Tente outro cartão ou forma de pagamento."),Promise.reject(new Error($e.statusDetail||"Pagamento recusado"))}).catch($e=>{var $n;const Br=($e==null?void 0:$e.message)||(($n=$e==null?void 0:$e.data)==null?void 0:$n.message)||"Erro ao processar pagamento. Tente novamente.";return i(Br),Promise.reject($e)})},onError:$=>{console.error("[CardPaymentBrick]",$),A&&E(($==null?void 0:$.message)||"Erro no formulário de pagamento.")}}}).then($=>{A&&(M.current=$)}).catch($=>{console.error("Erro ao carregar formulário de pagamento:",$),A&&E(($==null?void 0:$.message)||"Não foi possível carregar o formulário de pagamento.")}),()=>{var $;A=!1,($=M.current)!=null&&$.unmount&&(M.current.unmount(),M.current=null),I(!1)}},[s,m,h,r,C]);const F=O==null?void 0:O.paymentId,q=v.useRef(d.email);q.current=d.email,v.useEffect(()=>{if(!F||!m)return;const $=setInterval(()=>{Tt.getPaymentStatus(m,F).then(({updated:V})=>{V&&(o(),l("Pagamento confirmado!"),e("/checkout/sucesso",{replace:!0,state:{fromPix:!0,email:(q.current||"").trim(),orderCode:m}}))}).catch(()=>{})},4e3);return()=>clearInterval($)},[m,F,o,e,l]);const K=()=>({email:d.email.trim(),name:d.nome.trim(),identification:{type:"CPF",number:String(d.cpf).replace(/\D/g,"")}}),wt=()=>{!m||L||(Se(!0),H(null),Tt.createPayment(m,{payment_method_id:"pix",payer:K()}).then(A=>{var $,V;H({paymentId:A.paymentId,qrCodeBase64:A.qrCodeBase64,qrCode:A.qrCode,ticketUrl:A.ticketUrl});try{sessionStorage.setItem(si,JSON.stringify({orderId:A.orderId,total:b??r,email:((V=($=d.email)==null?void 0:$.trim)==null?void 0:V.call($))??""}))}catch{}}).catch(A=>{var $;i((A==null?void 0:A.message)||(($=A==null?void 0:A.data)==null?void 0:$.message)||"Erro ao gerar PIX. Tente novamente.")}).finally(()=>Se(!1)))},Ue=()=>{!m||T||(R(!0),ge(null),Tt.createPayment(m,{payment_method_id:"bolbradesco",payer:{...K(),address:{rua:d.rua.trim(),numero:String(d.numero??"").trim(),cep:String(d.cep).replace(/\D/g,""),cidade:d.cidade.trim(),estado:d.estado.trim()}}}).then(A=>{var $,V;ge({ticketUrl:A.ticketUrl});try{sessionStorage.setItem(si,JSON.stringify({orderId:A.orderId,total:b??r,email:((V=($=d.email)==null?void 0:$.trim)==null?void 0:V.call($))??""}))}catch{}}).catch(A=>{var $;i((A==null?void 0:A.message)||(($=A==null?void 0:A.data)==null?void 0:$.message)||"Erro ao gerar boleto. Tente novamente.")}).finally(()=>R(!1)))},bt=()=>{o(),e("/checkout/sucesso",{replace:!0})},He=()=>{var A;O!=null&&O.qrCode&&((A=navigator.clipboard)==null||A.writeText(O.qrCode).then(()=>l("Código PIX copiado!")))},ye=A=>{const{name:$,value:V}=A.target;f(mt=>({...mt,[$]:V}))},Fr=A=>{A.preventDefault(),uf(d)&&u(2)},Ht=A=>{A.preventDefault(),df(d)&&u(3)};return n===0?null:a.jsxs(Xb,{children:[a.jsx(be,{}),a.jsx(Jb,{children:a.jsxs(Zb,{children:[a.jsxs(ej,{children:[a.jsxs(oj,{"aria-label":`Passo ${s} de 3`,children:[a.jsx(ij,{children:hj.map(A=>a.jsx(aj,{$active:s>=A.id,"aria-hidden":!0},A.id))}),a.jsxs(lj,{children:["Passo ",s," de 3"]})]}),s===1&&a.jsxs(vl,{children:[a.jsx(yl,{children:"Dados pessoais"}),a.jsxs(of,{onSubmit:Fr,children:[a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"nome",children:"Nome completo"}),a.jsx(Ct,{id:"nome",name:"nome",type:"text",placeholder:"Seu nome completo",value:d.nome,onChange:ye,required:!0,minLength:3})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"email",children:"Email"}),a.jsx(Ct,{id:"email",name:"email",type:"email",placeholder:"seu@email.com",value:d.email,onChange:ye,required:!0})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"cpf",children:"CPF"}),a.jsx(Ct,{id:"cpf",name:"cpf",type:"text",inputMode:"numeric",placeholder:"000.000.000-00",value:d.cpf,onChange:ye,required:!0,minLength:11})]}),a.jsx(qt,{type:"submit",disabled:!uf(d),children:"Continuar"})]})]}),s===2&&a.jsxs(vl,{children:[a.jsx(yl,{children:"Endereço"}),a.jsxs(of,{onSubmit:Ht,children:[a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"cep",children:"CEP"}),a.jsx(Ct,{id:"cep",name:"cep",type:"text",inputMode:"numeric",autoComplete:"postal-code",placeholder:"00000-000",value:d.cep,onChange:ye,required:!0})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"rua",children:"Rua"}),a.jsx(Ct,{id:"rua",name:"rua",type:"text",placeholder:"Nome da rua",value:d.rua,onChange:ye,required:!0})]}),a.jsxs(af,{children:[a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"numero",children:"Número"}),a.jsx(Ct,{id:"numero",name:"numero",type:"text",inputMode:"numeric",placeholder:"Nº",value:d.numero,onChange:ye,required:!0})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"complemento",children:"Complemento"}),a.jsx(Ct,{id:"complemento",name:"complemento",type:"text",placeholder:"Apto, bloco",value:d.complemento,onChange:ye})]})]}),a.jsxs(af,{children:[a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"cidade",children:"Cidade"}),a.jsx(Ct,{id:"cidade",name:"cidade",type:"text",placeholder:"Cidade",value:d.cidade,onChange:ye,required:!0})]}),a.jsxs(jt,{children:[a.jsx(kt,{htmlFor:"estado",children:"Estado"}),a.jsx(Ct,{id:"estado",name:"estado",type:"text",placeholder:"UF",value:d.estado,onChange:ye,required:!0,maxLength:2})]})]}),a.jsx(qt,{type:"submit",disabled:!df(d),children:"Continuar"})]})]}),s===3&&a.jsxs(vl,{children:[a.jsx(yl,{children:"Pagamento"}),k&&a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Criando seu pedido… Aguarde."}),a.jsxs(qt,{type:"button",disabled:!0,children:[a.jsx(wl,{"aria-hidden":!0}),"Processando…"]})]}),g&&!k&&a.jsxs(a.Fragment,{children:[a.jsx(Ve,{role:"alert",style:{color:"#b91c1c"},children:g}),a.jsx(qt,{type:"button",onClick:()=>{x(null),p(null),S(!1)},children:"Tentar novamente"})]}),!k&&m&&a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Escolha a forma de pagamento."}),a.jsx(sj,{role:"group","aria-label":"Forma de pagamento",children:mj.map(({id:A,label:$,value:V})=>a.jsxs(tj,{$selected:C===V,className:C===V?"selected":"",children:[a.jsx(rj,{type:"radio",name:"paymentMethod",value:V,checked:C===V,onChange:()=>{P(V),H(null),ge(null)},disabled:V==="card"&&!h}),a.jsx("span",{children:$}),V==="card"&&!h&&a.jsx("span",{style:{fontSize:"0.75rem",color:"#6b7280"},children:" (indisponível)"})]},A))}),C==="card"&&!h&&a.jsx(Ve,{role:"alert",style:{color:"#b91c1c"},children:"Chave do Mercado Pago não configurada. Use PIX ou Boleto ou configure GET /api/config (mercadopagoPublicKey) ou VITE_MERCADOPAGO_PUBLIC_KEY."}),C==="card"&&h&&a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Preencha os dados do cartão abaixo. O pagamento é processado de forma segura pelo Mercado Pago."}),_&&a.jsx(Ve,{role:"alert",style:{color:"#b91c1c",marginBottom:"0.5rem"},children:_}),a.jsx("div",{id:cf,style:{minHeight:j?void 0:280},"aria-busy":!j,"aria-live":"polite"})]}),C==="pix"&&a.jsx(a.Fragment,{children:O?a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Escaneie o QR Code ou copie o código PIX e pague no app do seu banco."}),a.jsxs(cj,{children:[O.qrCodeBase64&&a.jsxs(a.Fragment,{children:[a.jsx(lf,{children:"QR Code"}),a.jsx(uj,{src:`data:image/png;base64,${O.qrCodeBase64}`,alt:"QR Code PIX",width:200,height:200})]}),O.qrCode&&a.jsxs(dj,{children:[a.jsx(lf,{children:"Código PIX (copia e cola)"}),a.jsx(fj,{type:"text",readOnly:!0,value:O.qrCode,"aria-label":"Código PIX para copiar"}),a.jsx(pj,{type:"button",onClick:He,children:"Copiar código"})]})]}),O.ticketUrl&&a.jsx(Ve,{style:{marginTop:"0.5rem"},children:a.jsx(sf,{href:O.ticketUrl,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",marginTop:"0.5rem"},children:"Ver pagamento no Mercado Pago"})}),a.jsx(Ve,{style:{marginTop:"1rem"},children:"Após o pagamento você receberá a confirmação por e-mail."}),a.jsx(qt,{type:"button",onClick:bt,children:"Ir para página do pedido"})]}):a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Gere o QR Code PIX e pague pelo app do seu banco."}),a.jsxs(qt,{type:"button",onClick:wt,disabled:L,"aria-busy":L,children:[L&&a.jsx(wl,{"aria-hidden":!0}),L?"Gerando PIX…":"Gerar QR Code PIX"]})]})}),C==="boleto"&&a.jsx(a.Fragment,{children:ue?a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Abra ou baixe o boleto e pague até o vencimento."}),ue.ticketUrl&&a.jsx(sf,{href:ue.ticketUrl,target:"_blank",rel:"noopener noreferrer",children:"Abrir / Baixar boleto"}),a.jsx(Ve,{style:{marginTop:"1rem"},children:"Após o pagamento você receberá a confirmação por e-mail."}),a.jsx(qt,{type:"button",onClick:bt,children:"Ir para página do pedido"})]}):a.jsxs(a.Fragment,{children:[a.jsx(Ve,{children:"Gere o boleto e pague em qualquer banco ou lotérica."}),a.jsxs(qt,{type:"button",onClick:Ue,disabled:T,"aria-busy":T,children:[T&&a.jsx(wl,{"aria-hidden":!0}),T?"Gerando boleto…":"Gerar boleto"]})]})})]})]})]}),a.jsx(nj,{children:(s===1||s===2||s===3)&&t.length>0&&a.jsx(Kb,{items:t,subtotal:r})})]})}),a.jsx(je,{})]})}const bl={yellow:{bg:"#fef3c7",text:"#92400e",border:"#f59e0b"},green:{bg:"#d1fae5",text:"#065f46",border:"#10b981"},red:{bg:"#fee2e2",text:"#991b1b",border:"#ef4444"},blue:{bg:"#dbeafe",text:"#1e40af",border:"#3b82f6"},teal:{bg:"#ccfbf1",text:"#0f766e",border:"#14b8a6"}},vj=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 1.5rem;
`,yj=c.div`
  padding: 1.5rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  row-gap: 0.5rem;
`,wj=c.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
`,bj=c.span`
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  background: ${({$variant:e})=>{var t;return((t=bl[e])==null?void 0:t.bg)||"#f3f4f6"}};
  color: ${({$variant:e})=>{var t;return((t=bl[e])==null?void 0:t.text)||"#374151"}};
  border: 1px solid ${({$variant:e})=>{var t;return((t=bl[e])==null?void 0:t.border)||"#e5e7eb"}};
`,jj=c.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: #fafbfc;
`,kj=c.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem;
`,Cj=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,Sj=c.li`
  display: flex;
  align-items: flex-start;
  position: relative;
`,Pj=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 2px;
`,Ej=c.span`
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
`,zj=c.span`
  width: 2px;
  min-height: 28px;
  flex: 1;
  background: ${({$done:e})=>e?"#22c55e":"#e5e7eb"};
  margin: 2px 0 0;
`,Ij=c.div`
  margin-left: 12px;
  padding-bottom: 4px;
  min-width: 0;
`,Tj=c.span`
  font-size: 0.875rem;
  font-weight: ${({$active:e})=>e?600:400};
  color: ${({$active:e})=>e?"#1e293b":"#6b7280"};
  display: block;
  line-height: 1.35;
`,Lj=c.span`
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 2px;
  display: block;
`,Nj=c.p`
  font-size: 0.8125rem;
  color: #b91c1c;
  font-weight: 500;
  margin: 0.75rem 0 0 26px;
`,_j=c.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`,ff=c.span``,Rj=c.span`
  font-weight: 700;
  font-size: 1rem;
  color: #111827;
`,$j=c.div`
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
  font-size: 0.875rem;
  color: #475569;
`,Ti=c.span`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
`,jl=c.p`
  margin: 0;
  line-height: 1.5;
  color: #1e293b;

  & + ${Ti} {
    margin-top: 0.75rem;
  }
`,Oj=c.div`
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`,Aj=c.span`
  font-size: 0.875rem;
  color: #475569;

  strong {
    color: #1e293b;
    font-weight: 600;
  }
`,Mj=c.a`
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
`,Fj=c.h3`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  padding: 1rem 1.5rem 0 1.5rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`,Dj=c.ul`
  list-style: none;
  margin: 0;
  padding: 0 1.5rem 1.5rem;
`,Bj=c.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`,Uj=c.div`
  width: 56px;
  height: 56px;
  border-radius: 6px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`,Hj=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Vj=c.div`
  flex: 1;
  min-width: 0;
`,Wj=c.span`
  display: block;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.2rem;
`,Gj=c.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,Qj=c.span`
  font-weight: 600;
  color: #1a1a1a;
  flex-shrink: 0;
`,qj={CREATED:"Criado",PAYMENT_PENDING:"Aguardando pagamento",PENDING_PAYMENT:"Aguardando pagamento",PAID:"Pago",RECEIVED:"Recebido",CONFIRMED:"Confirmado",PREPARING:"Em preparação",SHIPPED:"Enviado",IN_TRANSIT:"Em trânsito",DELIVERED:"Entregue",CANCELLED:"Cancelado",CANCELED:"Cancelado"},Kj={CREATED:"yellow",PAYMENT_PENDING:"yellow",PENDING_PAYMENT:"yellow",PAID:"green",RECEIVED:"blue",CONFIRMED:"blue",PREPARING:"blue",SHIPPED:"teal",IN_TRANSIT:"teal",DELIVERED:"green",CANCELLED:"red",CANCELED:"red"},Bs=[{key:"PAYMENT_PENDING",label:"Pedido realizado"},{key:"RECEIVED",label:"Pagamento aprovado"},{key:"CONFIRMED",label:"Confirmado"},{key:"PREPARING",label:"Em separação"},{key:"SHIPPED",label:"Enviado"},{key:"IN_TRANSIT",label:"Em trânsito"},{key:"DELIVERED",label:"Entregue"}];function Yj(e){if(e==="CANCELLED"||e==="CANCELED")return-1;const t=Bs.findIndex(r=>r.key===e);return t>=0?t:0}function Xj(e){return Kj[e]||"yellow"}function pf(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function kl(e){if(!e)return"—";try{return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(e))}catch{return e}}function Jj(e){return e.name??e.productName??"Produto"}function Zj(e){if(!e)return"";const t=String(e).replaceAll(/\D/g,"");return t.length===8?`${t.slice(0,5)}-${t.slice(5)}`:e}function mf(e){if(!e||typeof e!="object")return null;const{rua:t,numero:r,complemento:n,cidade:o,estado:i,cep:l}=e,s=[];t&&s.push(t),r!=null&&r!==""&&s.push(r),n&&s.push(n);const u=s.length?s.join(", "):null,d=[];o&&d.push(o),i&&d.push(i);const f=d.length?d.join(" - "):null,m=l?`CEP ${Zj(l)}`:null;return[u,f,m].filter(Boolean).join(". ")}function Jc({order:e}){var l;const t=qj[e.status]||e.status,r=Xj(e.status),n=e.trackingUrl||e.trackingCode,o=Yj(e.status),i=e.status==="CANCELLED"||e.status==="CANCELED";return a.jsxs(vj,{"aria-label":`Pedido ${e.orderCode}`,children:[a.jsxs(yj,{children:[a.jsx(wj,{children:e.orderCode}),a.jsx(bj,{$variant:r,children:t})]}),a.jsxs(jj,{"aria-label":"Progresso do pedido",children:[a.jsx(kj,{children:"Acompanhe seu pedido"}),a.jsx(Cj,{role:"list",children:Bs.map((s,u)=>{const d=!i&&u<o,f=!i&&u===o,m=d?"done":f?"current":"pending",x=!i&&u<o,b=u===Bs.length-1,y=s.key==="PAYMENT_PENDING"&&e.createdAt||s.key==="SHIPPED"&&e.shippedAt,k=s.key==="PAYMENT_PENDING"?e.createdAt:s.key==="SHIPPED"?e.shippedAt:null;return a.jsxs(Sj,{role:"listitem",children:[a.jsxs(Pj,{children:[a.jsx(Ej,{$state:m,"aria-current":f?"step":void 0,children:d?"✓":""}),!b&&a.jsx(zj,{$done:x,"aria-hidden":!0})]}),a.jsxs(Ij,{children:[a.jsx(Tj,{$active:f,children:s.label}),y&&k&&a.jsx(Lj,{children:kl(k)})]})]},s.key)})}),i&&a.jsx(Nj,{children:"Pedido cancelado"})]}),a.jsxs(_j,{children:[a.jsxs(ff,{children:["Data do pedido: ",kl(e.createdAt)]}),e.shippedAt&&a.jsxs(ff,{children:["Enviado em: ",kl(e.shippedAt)]}),a.jsxs(Rj,{children:["Total: ",pf(e.total)]})]}),(e.customerName||e.email||e.address||e.paymentMethodName)&&a.jsxs($j,{children:[e.customerName&&a.jsxs(a.Fragment,{children:[a.jsx(Ti,{children:"Cliente"}),a.jsxs(jl,{children:[e.customerName,e.email&&` · ${e.email}`]})]}),e.address&&mf(e.address)&&a.jsxs(a.Fragment,{children:[a.jsx(Ti,{children:"Entrega"}),a.jsx(jl,{children:mf(e.address)})]}),e.paymentMethodName&&a.jsxs(a.Fragment,{children:[a.jsx(Ti,{children:"Pagamento"}),a.jsx(jl,{children:e.paymentMethodName})]})]}),n&&a.jsxs(Oj,{children:[e.trackingCode&&a.jsxs(Aj,{children:["Rastreio: ",a.jsx("strong",{children:e.trackingCode}),e.carrier&&` · ${e.carrier}`]}),e.trackingUrl&&a.jsx(Mj,{href:e.trackingUrl,target:"_blank",rel:"noopener noreferrer",children:"Rastrear entrega"})]}),a.jsx(Fj,{children:"Itens do pedido"}),a.jsx(Dj,{"aria-label":"Itens do pedido",children:(l=e.items)==null?void 0:l.map((s,u)=>{const d=Jj(s);return a.jsxs(Bj,{children:[a.jsx(Uj,{children:a.jsx(Hj,{src:s.image||"/logos/sem%20fundo/4.png",alt:d,loading:"lazy"})}),a.jsxs(Vj,{children:[a.jsx(Wj,{children:d}),a.jsxs(Gj,{children:[s.size?`Tamanho ${s.size}`:"",s.size&&s.quantity?" · ":"",s.quantity?`${s.quantity}x`:""]})]}),a.jsx(Qj,{children:pf((s.price??s.unitPrice??0)*(s.quantity??1))})]},`${d}-${s.size??""}-${u}`)})})]})}const e3=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,t3=c.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 2rem 1rem calc(4rem + var(--safe-area-bottom, 0px));
  text-align: center;
  min-width: 0;
`,r3=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 2.5rem 1.5rem;
`,n3=c.div`
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
`,o3=c.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`,hf=c.p`
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`,i3=c.dl`
  text-align: left;
  background: #f9fafb;
  border-radius: 8px;
  padding: 1.25rem 1rem;
  margin-bottom: 1.5rem;
  display: grid;
  gap: 0.75rem;
`,gf=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`,xf=c.dt`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0;
`,vf=c.dd`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,a3=c.div`
  margin-top: 1.5rem;
  text-align: left;
`,l3=c(ne)`
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
`,yf="artilheiro-checkout-success";function s3(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e??0)}function c3(){const e=yr(),t=Ut(),[r]=Ia(),[n,o]=v.useState(null),[i,l]=v.useState(null),[s,u]=v.useState(!1),d=t.state??{};v.useEffect(()=>{var S;const k=r.get("code");if(k!=null&&k.trim()){const g=r.get("total"),p=g!=null?Number(g):null,h=r.get("email");o({orderId:k.trim(),total:p,email:(h==null?void 0:h.trim())||null});return}try{const g=sessionStorage.getItem(yf);if(!g){e("/",{replace:!0});return}const p=JSON.parse(g);if(!(p!=null&&p.orderId)){e("/",{replace:!0});return}o({orderId:p.orderId,total:p.total??null,email:((S=p.email)==null?void 0:S.trim())||null})}catch{e("/",{replace:!0})}},[e,r]);const f=(n==null?void 0:n.email)??(d==null?void 0:d.email),m=(n==null?void 0:n.orderId)??(d==null?void 0:d.orderCode);v.useEffect(()=>{!(f!=null&&f.trim())||!(m!=null&&m.trim())||(u(!0),Tt.lookupOrder(f.trim(),m.trim()).then(l).catch(()=>l(null)).finally(()=>u(!1)))},[f,m]);const x=()=>{try{sessionStorage.removeItem(yf)}catch{}};if(!n)return null;const b=i&&!s,y=!s&&!i;return a.jsxs(e3,{children:[a.jsx(be,{}),a.jsx(t3,{children:a.jsxs(r3,{children:[a.jsx(n3,{"aria-hidden":!0,children:"✓"}),a.jsx(o3,{children:"Pedido realizado com sucesso!"}),a.jsx(hf,{children:"Recebemos seu pedido e ele já está sendo processado."}),s&&a.jsx(hf,{style:{marginTop:"0.5rem",fontSize:"0.875rem"},children:"Carregando detalhes do pedido…"}),b&&a.jsx(a3,{children:a.jsx(Jc,{order:i})}),y&&a.jsxs(i3,{children:[a.jsxs(gf,{children:[a.jsx(xf,{children:"Número do pedido"}),a.jsx(vf,{children:n.orderId})]}),a.jsxs(gf,{children:[a.jsx(xf,{children:"Valor total"}),a.jsx(vf,{children:n.total!=null?s3(n.total):"—"})]})]}),a.jsx(l3,{to:"/",onClick:x,style:{marginTop:"1.5rem"},children:"Voltar para a loja"})]})}),a.jsx(je,{})]})}const u3=wr`
  to { transform: rotate(360deg); }
`,wf=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,bf=c.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Cl=c.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,Sl=c.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,Pl=c.input`
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
`,jf=c.button`
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
`,kf=c.span`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${u3} 0.75s linear infinite;
  flex-shrink: 0;
`;function Cf(e){const t=(e??"").replace(/\D/g,"").slice(0,11);return t.length<=3?t:t.length<=6?`${t.slice(0,3)}.${t.slice(3)}`:`${t.slice(0,3)}.${t.slice(3,6)}.${t.slice(6,9)}-${t.slice(9)}`}function d3({mode:e="email",email:t,orderCode:r,cpf:n="",loading:o,onChange:i,onSubmit:l}){const s=((t==null?void 0:t.trim())||"").length>0&&((r==null?void 0:r.trim())||"").length>0,d=(n??"").replace(/\D/g,"").length>=11,f=e==="cpf"?d:s,m=y=>{y.preventDefault(),!(!f||o)&&l()},x=y=>{const k=(y.target.value??"").replace(/\D/g,"").slice(0,11);i({cpf:Cf(k)})},b=y=>{if(y.key!=="Backspace")return;const k=(n??"").replace(/\D/g,"");k.length!==0&&(y.preventDefault(),i({cpf:Cf(k.slice(0,-1))}))};return e==="cpf"?a.jsx(wf,{children:a.jsxs(bf,{onSubmit:m,noValidate:!0,children:[a.jsxs(Cl,{children:[a.jsx(Sl,{htmlFor:"order-lookup-cpf",children:"CPF"}),a.jsx(Pl,{id:"order-lookup-cpf",type:"text",inputMode:"numeric",placeholder:"000.000.000-00",value:n,onChange:x,onKeyDown:b,disabled:o,autoComplete:"off",required:!0,maxLength:14,"aria-label":"CPF para consultar pedidos"})]}),a.jsxs(jf,{type:"submit",disabled:!f||o,"aria-busy":o,children:[o&&a.jsx(kf,{"aria-hidden":!0}),o?"Buscando…":"Buscar pedidos"]})]})}):a.jsx(wf,{children:a.jsxs(bf,{onSubmit:m,noValidate:!0,children:[a.jsxs(Cl,{children:[a.jsx(Sl,{htmlFor:"order-lookup-email",children:"E-mail"}),a.jsx(Pl,{id:"order-lookup-email",type:"email",placeholder:"seu@email.com",value:t,onChange:y=>i({email:y.target.value,orderCode:r}),disabled:o,autoComplete:"email",required:!0})]}),a.jsxs(Cl,{children:[a.jsx(Sl,{htmlFor:"order-lookup-code",children:"Código do pedido"}),a.jsx(Pl,{id:"order-lookup-code",type:"text",placeholder:"Ex: ART-10293",value:r,onChange:y=>i({email:t,orderCode:y.target.value}),disabled:o,autoComplete:"off",required:!0})]}),a.jsxs(jf,{type:"submit",disabled:!f||o,"aria-busy":o,children:[o&&a.jsx(kf,{"aria-hidden":!0}),o?"Buscando…":"Buscar pedido"]})]})})}const El={yellow:{bg:"#fef3c7",text:"#92400e",border:"#f59e0b"},green:{bg:"#d1fae5",text:"#065f46",border:"#10b981"},red:{bg:"#fee2e2",text:"#991b1b",border:"#ef4444"},blue:{bg:"#dbeafe",text:"#1e40af",border:"#3b82f6"},teal:{bg:"#ccfbf1",text:"#0f766e",border:"#14b8a6"}},f3=c.article`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 0.75rem;
`,p3=c.button`
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
`,m3=c.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
  flex: 1;
`,h3=c.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
`,g3=c.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`,x3=c.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Sf=c.div`
  min-width: 0;
  flex: 1;
`,Pf=c.span`
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ef=c.span`
  display: block;
  font-size: 0.8125rem;
  color: #6b7280;
  margin-top: 0.15rem;
`,v3=c.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`,y3=c.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;
`,w3=c.span`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: ${({$variant:e})=>{var t;return((t=El[e])==null?void 0:t.bg)||"#f3f4f6"}};
  color: ${({$variant:e})=>{var t;return((t=El[e])==null?void 0:t.text)||"#374151"}};
  border: 1px solid ${({$variant:e})=>{var t;return((t=El[e])==null?void 0:t.border)||"#e5e7eb"}};
  flex-shrink: 0;
`,b3=c.span`
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
`,j3=c.div`
  border-top: 1px solid #e5e7eb;
  background: #fafbfc;
  padding: 0 1rem 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem 1.5rem;
  }
`,k3={CREATED:"Criado",PAYMENT_PENDING:"Aguardando pagamento",PENDING_PAYMENT:"Aguardando pagamento",PAID:"Pago",RECEIVED:"Recebido",CONFIRMED:"Confirmado",PREPARING:"Em preparação",SHIPPED:"Enviado",IN_TRANSIT:"Em trânsito",DELIVERED:"Entregue",CANCELLED:"Cancelado",CANCELED:"Cancelado"},C3={CREATED:"yellow",PAYMENT_PENDING:"yellow",PENDING_PAYMENT:"yellow",PAID:"green",RECEIVED:"blue",CONFIRMED:"blue",PREPARING:"blue",SHIPPED:"teal",IN_TRANSIT:"teal",DELIVERED:"green",CANCELLED:"red",CANCELED:"red"};function S3(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e??0)}function zf(e){if(!e)return"—";try{return new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(e))}catch{return e}}function zl(e){return(e==null?void 0:e.name)??(e==null?void 0:e.productName)??"Produto"}const P3=3,E3="/logos/sem%20fundo/4.png";function z3({order:e,expanded:t,onToggle:r}){const n=e.orderCode??e.orderId??e.id??"—",o=k3[e.status]??e.status,i=C3[e.status]??"yellow",l=e.items&&e.items.length>0?e.items:[],s=l[0],u=l.slice(0,P3),d=s?l.length===1?zl(s):`${zl(s)}${l.length>1?` e mais ${l.length-1} ${l.length===2?"item":"itens"}`:""}`:n,f=[];s!=null&&s.size&&f.push(`Tam. ${s.size}`),s!=null&&s.quantity&&f.push(`${s.quantity}x`),e.createdAt&&f.push(zf(e.createdAt));const m=f.join(" · ");return a.jsxs(f3,{"aria-label":s?`Pedido: ${d}`:`Pedido ${n}`,children:[a.jsxs(p3,{type:"button",onClick:r,"aria-expanded":t,"aria-controls":`order-details-${e.id??n}`,id:`order-header-${e.id??n}`,children:[a.jsx(m3,{children:l.length>0?a.jsxs(a.Fragment,{children:[a.jsx(h3,{children:u.map((x,b)=>{var y;return a.jsx(g3,{children:a.jsx(x3,{src:x.image??((y=x.images)==null?void 0:y[0])??E3,alt:zl(x),loading:"lazy"})},`${x.productId??b}-${x.size??""}`)})}),a.jsxs(Sf,{children:[a.jsx(Pf,{children:d}),m&&a.jsx(Ef,{children:m})]})]}):a.jsxs(Sf,{children:[a.jsx(Pf,{children:n}),a.jsx(Ef,{children:zf(e.createdAt)})]})}),a.jsxs(v3,{children:[a.jsx(y3,{children:S3(e.total)}),a.jsx(w3,{$variant:i,children:o}),a.jsx(b3,{className:t?"expanded":"","aria-hidden":!0,children:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("polyline",{points:"6 9 12 15 18 9"})})})]})]}),t&&a.jsx(j3,{id:`order-details-${e.id??n}`,role:"region","aria-labelledby":`order-header-${e.id??n}`,children:a.jsx(Jc,{order:e})})]})}const I3=wr`
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
`,T3=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
`,Zc=c.div`
  height: 16px;
  background: #e5e7eb;
  border-radius: 4px;
  animation: ${I3} 1.2s ease-in-out infinite;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`,If=c(Zc)`
  height: 48px;
  margin-bottom: 1rem;
`,L3=c(Zc)`
  height: 52px;
  margin-top: 0.5rem;
`;function N3(){return a.jsxs(T3,{"aria-hidden":!0,children:[a.jsx(Zc,{style:{width:"40%",marginBottom:"0.5rem"}}),a.jsx(If,{}),a.jsx(If,{}),a.jsx(L3,{})]})}const _3=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,R3=c.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,$3=c.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.35rem;
`,O3=c.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0 0 1.5rem;
  line-height: 1.45;
`,A3=c.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  text-align: center;
`,M3=c.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
`,F3=c.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
`,D3=c.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
`,Tf=c.button`
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
`,B3=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`,Lf="artilheiro-order-lookup";function Nf(e){if(e instanceof Gr){if(e.status===404)return"Pedido não encontrado";if(e.status===400||e.status===422)return"Confira os dados e tente novamente"}return"Erro ao consultar pedido"}const Vr="email",Wr="cpf";function _f(){const e=yr(),{id:t}=Fc(),[r,n]=v.useState(Vr),[o,i]=v.useState(""),[l,s]=v.useState(""),[u,d]=v.useState(""),[f,m]=v.useState(!1),[x,b]=v.useState(null),[y,k]=v.useState([]),[S,g]=v.useState(null),[p,h]=v.useState(null);v.useEffect(()=>{if(!t){b(null);return}try{const E=sessionStorage.getItem(Lf);if(!E)return;const{id:M,order:O}=JSON.parse(E);O&&M===t&&(b(O),h(null))}catch{}},[t]),v.useEffect(()=>()=>{b(null),h(null)},[]);const w=({email:E,orderCode:M,cpf:O})=>{E!==void 0&&i(E),M!==void 0&&s(M),O!==void 0&&d(O),h(null)},C=E=>{n(E),b(null),k([]),g(null),h(null),t&&E===Wr&&e("/pedido/consultar",{replace:!0})},P=E=>{g(M=>M===E?null:E)},j=async()=>{if(r===Wr){if((u??"").replace(/\D/g,"").length<11)return;m(!0),h(null),b(null),k([]);try{const H=await Tt.getOrdersByCpf(u);k(Array.isArray(H)?H:[]),H!=null&&H.length||h("Nenhum pedido encontrado para este CPF.")}catch(H){h(Nf(H))}finally{m(!1)}return}const E=o.trim(),M=l.trim();if(!(!E||!M)){m(!0),h(null),b(null),k([]);try{const O=await Tt.lookupOrder(E,M);b(O);const H=O.id??O.orderCode??O.orderId;if(H){try{sessionStorage.setItem(Lf,JSON.stringify({id:H,order:O}))}catch{}e(`/pedido/consultar/${encodeURIComponent(H)}`,{replace:!0})}}catch(O){h(Nf(O))}finally{m(!1)}}},I=!f&&x&&r===Vr,_=!f&&y.length>0;return a.jsxs(_3,{children:[a.jsx(be,{}),a.jsxs(R3,{children:[a.jsx($3,{children:"Consultar pedido"}),a.jsx(O3,{children:"Busque por e-mail e código do pedido ou pelo seu CPF para ver todos os pedidos."}),a.jsxs(D3,{role:"tablist","aria-label":"Forma de consulta",children:[a.jsx(Tf,{type:"button",role:"tab","aria-selected":r===Vr,"aria-controls":"lookup-form",id:"tab-email",className:r===Vr?"active":"",onClick:()=>C(Vr),children:"E-mail e código"}),a.jsx(Tf,{type:"button",role:"tab","aria-selected":r===Wr,"aria-controls":"lookup-form",id:"tab-cpf",className:r===Wr?"active":"",onClick:()=>C(Wr),children:"Por CPF"})]}),a.jsx("div",{id:"lookup-form",role:"tabpanel","aria-labelledby":r===Vr?"tab-email":"tab-cpf",children:a.jsx(d3,{mode:r,email:o,orderCode:l,cpf:u,loading:f,onChange:w,onSubmit:j})}),f&&a.jsx(N3,{}),!f&&p&&a.jsxs(A3,{role:"alert",children:[a.jsx(M3,{children:r===Wr?"Nenhum pedido encontrado":"Não foi possível encontrar o pedido"}),a.jsx(F3,{children:p})]}),I&&a.jsx(Jc,{order:x}),_&&a.jsx(B3,{children:y.map(E=>{const M=E.id??E.orderCode??E.orderId;return a.jsx(z3,{order:E,expanded:S===M,onToggle:()=>P(M)},M)})})]}),a.jsx(je,{})]})}const U3=c.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`,H3=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  width: 100%;
`,V3=c.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,W3=c.div`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;function St({title:e,paragraphs:t}){return a.jsxs(U3,{children:[a.jsx(be,{}),a.jsxs(H3,{children:[a.jsx(V3,{children:e}),a.jsx(W3,{children:t.map((r,n)=>a.jsx("p",{children:r},n))})]}),a.jsx(je,{})]})}const G3=[{id:"faq-1",sectionId:"pedidos",question:"Como acompanhar meu pedido?",answer:'Você pode acompanhar seu pedido acessando a área "Consultar pedido" com seu e-mail e o código do pedido. Lá você verá o status atualizado e o histórico de movimentações.',keywords:["pedido","acompanhar","rastreio","status","código"]},{id:"faq-2",sectionId:"pagamentos",question:"Meu pagamento foi recusado, o que fazer?",answer:"Confira se os dados do cartão estão corretos e se há limite disponível. Tente outra forma de pagamento (Pix, boleto ou outro cartão). Se o problema persistir, entre em contato conosco.",keywords:["pagamento","recusado","cartão","erro","negado"]},{id:"faq-3",sectionId:"pedidos",question:"Posso cancelar um pedido?",answer:"Sim. Enquanto o pedido não tiver sido enviado, você pode solicitar o cancelamento pelo e-mail de confirmação ou entrando em contato. Após o envio, consulte a política de troca e devolução.",keywords:["cancelar","pedido","cancelamento"]},{id:"faq-4",sectionId:"pagamentos",question:"Como solicitar reembolso?",answer:"O reembolso é processado após a devolução do produto ou em caso de cancelamento antes do envio. O valor volta na mesma forma de pagamento em até alguns dias úteis.",keywords:["reembolso","estorno","devolução","dinheiro"]},{id:"faq-5",sectionId:"produtos",question:"Como trocar um produto?",answer:"Entre em contato em até 7 dias após o recebimento e informe o motivo. Após a aprovação, você receberá as instruções para envio. Confira a página Troca e devolução para o passo a passo.",keywords:["troca","trocar","produto","tamanho","devolução"]},{id:"faq-6",sectionId:"entrega",question:"Qual o prazo de entrega?",answer:"O prazo varia conforme sua região. Após a confirmação do pagamento, o pedido é preparado e enviado em até 2 dias úteis. O prazo total costuma ser de 5 a 15 dias úteis. Consulte a página Entregas para a tabela completa.",keywords:["prazo","entrega","envio","dias","demora"]},{id:"faq-7",sectionId:"entrega",question:"Como rastrear minha entrega?",answer:"O código de rastreio é enviado por e-mail quando o pedido é despachado. Use esse código no site dos Correios ou da transportadora para acompanhar em tempo real.",keywords:["rastreio","rastrear","código","correios","transportadora"]},{id:"faq-8",sectionId:"conta-seguranca",question:"Esqueci minha senha, como recuperar?",answer:'Na tela de login, clique em "Esqueci minha senha" e informe o e-mail cadastrado. Você receberá um link para criar uma nova senha. Se não receber o e-mail, verifique a pasta de spam.',keywords:["senha","esqueci","recuperar","login","acesso"]}];function Q3(e){return Be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}function q3(e){return Be({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(e)}const K3=c.div`
  position: relative;
  width: 100%;
`,Y3=c.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  pointer-events: none;
`,X3=c.input`
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
`;function J3({value:e,onChange:t,placeholder:r}){return a.jsxs(K3,{children:[a.jsx(Y3,{"aria-hidden":!0,children:a.jsx(q3,{size:18,strokeWidth:2})}),a.jsx(X3,{type:"search",value:e,onChange:n=>t(n.target.value),placeholder:r||"Buscar por pedidos, pagamento, entrega...","aria-label":"Buscar na ajuda",autoComplete:"off"})]})}const Z3=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid #f0f0f0;
`,Wh=c.li`
  border-bottom: 1px solid #f0f0f0;
`,ek=c.button`
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
`,tk=c.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  transition: transform 0.2s ease;

  ${Wh}[data-open="true"] & {
    transform: rotate(180deg);
  }
`,rk=c.div`
  overflow: hidden;
  transition: max-height 0.2s ease;
`,nk=c.div`
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
`;function ok(e){const t=/\[([^\]]+)\]\((\/[^)]+)\)/g,r=[];let n=0,o;for(;(o=t.exec(e))!==null;)o.index>n&&r.push({type:"text",value:e.slice(n,o.index)}),r.push({type:"link",label:o[1],to:o[2]}),n=o.index+o[0].length;return n<e.length&&r.push({type:"text",value:e.slice(n)}),r.length===0&&r.push({type:"text",value:e}),r}function ik({answer:e}){const t=ok(e);return a.jsx(a.Fragment,{children:t.map((r,n)=>r.type==="link"?a.jsx(ne,{to:r.to,children:r.label},n):a.jsx("span",{children:r.value},n))})}function ak({items:e,openId:t,onToggle:r}){const n=v.useRef({});return a.jsx(Z3,{role:"list",children:e.map(o=>{var l;const i=t===o.id;return a.jsxs(Wh,{"data-open":i,role:"listitem",children:[a.jsxs(ek,{type:"button",onClick:()=>r(i?null:o.id),"aria-expanded":i,"aria-controls":`faq-answer-${o.id}`,id:`faq-question-${o.id}`,children:[o.question,a.jsx(tk,{"aria-hidden":!0,children:a.jsx(Q3,{size:16,strokeWidth:2})})]}),a.jsx(rk,{id:`faq-answer-${o.id}`,role:"region","aria-labelledby":`faq-question-${o.id}`,style:{maxHeight:i?((l=n.current[o.id])==null?void 0:l.scrollHeight)??200:0},children:a.jsx(nk,{ref:s=>{s&&(n.current[o.id]=s)},children:a.jsx(ik,{answer:o.answer})})})]},o.id)})})}const lk=c.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
  padding: 1rem 0;
  line-height: 1.5;
`;function sk(){return a.jsx(lk,{role:"status","aria-live":"polite",children:"Nenhum resultado encontrado para sua busca."})}const ck=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,uk=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,dk=c.header`
  margin-bottom: 2rem;
`,fk=c.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`,pk=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`,mk=c.section`
  margin-bottom: 2rem;
`,hk=c.section`
  margin-bottom: 2.5rem;
`,gk=c.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`;function xk(e,t){const r=t.trim().toLowerCase();return r?e.filter(n=>n.question.toLowerCase().includes(r)||n.answer.toLowerCase().includes(r)||n.keywords&&n.keywords.some(o=>o.toLowerCase().includes(r))):e}function vk(){const[e,t]=v.useState(""),[r,n]=v.useState(null),o=v.useMemo(()=>xk(G3,e),[e]);return a.jsxs(ck,{children:[a.jsx(be,{}),a.jsxs(uk,{children:[a.jsxs(dk,{children:[a.jsx(fk,{children:"Ajuda"}),a.jsx(pk,{children:"Encontre respostas rápidas para as principais dúvidas"})]}),a.jsx(mk,{"aria-label":"Buscar dúvidas",children:a.jsx(J3,{value:e,onChange:t,placeholder:"Buscar por pedidos, pagamento, entrega..."})}),a.jsxs(hk,{"aria-labelledby":"faq-title",children:[a.jsx(gk,{id:"faq-title",children:"Perguntas frequentes"}),o.length===0?a.jsx(sk,{}):a.jsx(ak,{items:o,openId:r,onToggle:n})]})]}),a.jsx(je,{})]})}const yk={intro:"Entre em contato conosco para dúvidas, sugestões ou parcerias. Nossa equipe está pronta para atender você.",email:{label:"E-mail",value:"contato@joaopossidonio.com",href:"mailto:contato@joaopossidonio.com"},phone:{label:"Telefone / WhatsApp",items:[{value:"(24) 98868-5043",href:"https://wa.me/5524988685043"},{value:"(24) 99301-2170",href:"https://wa.me/5524993012170"}]},address:{label:"Endereço",lines:["Rua Raizel Cukier, 126","Resende – RJ","CEP 27537-278"]},hours:{label:"Horário de atendimento",lines:["Segunda a sexta: 9h às 18h","Sábado: 9h às 13h","Domingo e feriados: fechado"]}},wk=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,bk=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,jk=c.header`
  margin-bottom: 2rem;
`,kk=c.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`,Ck=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`,Sk=c.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;
  margin: 0 0 2rem;
`,Pk=c.section`
  margin-bottom: 2.5rem;
`,Ek=c.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`,zk=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,ci=c.li`
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
`,Ik=c.a`
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
`,Il=c.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,ui=c.div`
  flex: 1;
  min-width: 0;
`,di=c.span`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
`,Tk=c.span`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.4;
`,Rf=c.div`
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.5;

  p {
    margin: 0 0 0.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,Lk=c.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
`,Nk=c.a`
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
`,fi=c.span`
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
`,_k=()=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[a.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),a.jsx("polyline",{points:"22,6 12,13 2,6"})]}),Rk=()=>a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:a.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),$k=()=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[a.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),Ok=()=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0,children:[a.jsx("circle",{cx:"12",cy:"12",r:"10"}),a.jsx("polyline",{points:"12 6 12 12 16 14"})]});function Ak(){const{intro:e,email:t,phone:r,address:n,hours:o}=yk;return a.jsxs(wk,{children:[a.jsx(be,{}),a.jsxs(bk,{children:[a.jsxs(jk,{children:[a.jsx(kk,{children:"Contato"}),a.jsx(Ck,{children:"Dúvidas, sugestões ou parcerias? Fale com a gente."})]}),a.jsx(Sk,{children:e}),a.jsxs(Pk,{"aria-labelledby":"contact-section-title",children:[a.jsx(Ek,{id:"contact-section-title",children:"Como nos encontrar"}),a.jsxs(zk,{children:[a.jsx(ci,{children:a.jsxs(Ik,{href:t.href,rel:"noopener noreferrer",children:[a.jsx(fi,{"aria-hidden":!0,children:a.jsx(_k,{})}),a.jsxs(ui,{children:[a.jsx(di,{children:t.label}),a.jsx(Tk,{children:t.value})]})]})}),a.jsx(ci,{children:a.jsxs(Il,{children:[a.jsx(fi,{"aria-hidden":!0,children:a.jsx(Rk,{})}),a.jsxs(ui,{children:[a.jsx(di,{children:r.label}),a.jsx(Lk,{children:r.items.map(i=>a.jsx(Nk,{href:i.href,target:"_blank",rel:"noopener noreferrer","aria-label":`Abrir WhatsApp: ${i.value}`,children:i.value},i.value))})]})]})}),a.jsx(ci,{$plain:!0,children:a.jsxs(Il,{children:[a.jsx(fi,{"aria-hidden":!0,children:a.jsx($k,{})}),a.jsxs(ui,{children:[a.jsx(di,{children:n.label}),a.jsx(Rf,{children:n.lines.map(i=>a.jsx("p",{children:i},i))})]})]})}),a.jsx(ci,{$plain:!0,children:a.jsxs(Il,{children:[a.jsx(fi,{"aria-hidden":!0,children:a.jsx(Ok,{})}),a.jsxs(ui,{children:[a.jsx(di,{children:o.label}),a.jsx(Rf,{children:o.lines.map(i=>a.jsx("p",{children:i},i))})]})]})})]})]})]}),a.jsx(je,{})]})}function Mk(e){return Be({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.115 16.479a.93.927 0 0 1-.939-.886c-.002-.042-.006-.155-.103-.155-.04 0-.074.023-.113.059-.112.103-.254.206-.46.206a.816.814 0 0 1-.305-.066c-.535-.214-.542-.578-.521-.725.006-.038.007-.08-.02-.11l-.032-.03h-.034c-.027 0-.055.012-.093.039a.788.786 0 0 1-.454.16.7.699 0 0 1-.253-.05c-.708-.27-.65-.928-.617-1.126.005-.041-.005-.072-.03-.092l-.05-.04-.047.043a.728.726 0 0 1-.505.203.73.728 0 0 1-.732-.725c0-.4.328-.722.732-.722.364 0 .675.27.721.63l.026.195.11-.165c.01-.018.307-.46.852-.46.102 0 .21.016.316.05.434.13.508.52.519.68.008.094.075.1.09.1.037 0 .064-.024.083-.045a.746.744 0 0 1 .54-.225c.128 0 .263.03.402.09.69.293.379 1.158.374 1.167-.058.144-.061.207-.005.244l.027.013h.02c.03 0 .07-.014.134-.035.093-.032.235-.08.367-.08a.944.942 0 0 1 .94.93.936.934 0 0 1-.94.928zm7.302-4.171c-1.138-.98-3.768-3.24-4.481-3.77-.406-.302-.685-.462-.928-.533a1.559 1.554 0 0 0-.456-.07c-.182 0-.376.032-.58.095-.46.145-.918.505-1.362.854l-.023.018c-.414.324-.84.66-1.164.73a1.986 1.98 0 0 1-.43.049c-.362 0-.687-.104-.81-.258-.02-.025-.007-.066.04-.125l.008-.008 1-1.067c.783-.774 1.525-1.506 3.23-1.545h.085c1.062 0 2.12.469 2.24.524a7.03 7.03 0 0 0 3.056.724c1.076 0 2.188-.263 3.354-.795a9.135 9.11 0 0 0-.405-.317c-1.025.44-2.003.66-2.946.66-.962 0-1.925-.229-2.858-.68-.05-.022-1.22-.567-2.44-.57-.032 0-.065 0-.096.002-1.434.033-2.24.536-2.782.976-.528.013-.982.138-1.388.25-.361.1-.673.186-.979.185-.125 0-.35-.01-.37-.012-.35-.01-2.115-.437-3.518-.962-.143.1-.28.203-.415.31 1.466.593 3.25 1.053 3.812 1.089.157.01.323.027.491.027.372 0 .744-.103 1.104-.203.213-.059.446-.123.692-.17l-.196.194-1.017 1.087c-.08.08-.254.294-.14.557a.705.703 0 0 0 .268.292c.243.162.677.27 1.08.271.152 0 .297-.015.43-.044.427-.095.874-.448 1.349-.82.377-.296.913-.672 1.323-.782a1.494 1.49 0 0 1 .37-.05.611.61 0 0 1 .095.005c.27.034.533.125 1.003.472.835.62 4.531 3.815 4.566 3.846.002.002.238.203.22.537-.007.186-.11.352-.294.466a.902.9 0 0 1-.484.15.804.802 0 0 1-.428-.124c-.014-.01-1.28-1.157-1.746-1.543-.074-.06-.146-.115-.22-.115a.122.122 0 0 0-.096.045c-.073.09.01.212.105.294l1.48 1.47c.002 0 .184.17.204.395.012.244-.106.447-.35.606a.957.955 0 0 1-.526.171.766.764 0 0 1-.42-.127l-.214-.206a21.035 20.978 0 0 0-1.08-1.009c-.072-.058-.148-.112-.221-.112a.127.127 0 0 0-.094.038c-.033.037-.056.103.028.212a.698.696 0 0 0 .075.083l1.078 1.198c.01.01.222.26.024.511l-.038.048a1.18 1.178 0 0 1-.1.096c-.184.15-.43.164-.527.164a.8.798 0 0 1-.147-.012c-.106-.018-.178-.048-.212-.089l-.013-.013c-.06-.06-.602-.609-1.054-.98-.059-.05-.133-.11-.21-.11a.128.128 0 0 0-.096.042c-.09.096.044.24.1.293l.92 1.003a.204.204 0 0 1-.033.062c-.033.044-.144.155-.479.196a.91.907 0 0 1-.122.007c-.345 0-.712-.164-.902-.264a1.343 1.34 0 0 0 .13-.576 1.368 1.365 0 0 0-1.42-1.357c.024-.342-.025-.99-.697-1.274a1.455 1.452 0 0 0-.575-.125c-.146 0-.287.025-.42.075a1.153 1.15 0 0 0-.671-.564 1.52 1.515 0 0 0-.494-.085c-.28 0-.537.08-.767.242a1.168 1.165 0 0 0-.903-.43 1.173 1.17 0 0 0-.82.335c-.287-.217-1.425-.93-4.467-1.613a17.39 17.344 0 0 1-.692-.189 4.822 4.82 0 0 0-.077.494l.67.157c3.108.682 4.136 1.391 4.309 1.525a1.145 1.142 0 0 0-.09.442 1.16 1.158 0 0 0 1.378 1.132c.096.467.406.821.879 1.003a1.165 1.162 0 0 0 .415.08c.09 0 .179-.012.266-.034.086.22.282.493.722.668a1.233 1.23 0 0 0 .457.094c.122 0 .241-.022.355-.063a1.373 1.37 0 0 0 1.269.841c.37.002.726-.147.985-.41.221.121.688.341 1.163.341.06 0 .118-.002.175-.01.47-.059.689-.24.789-.382a.571.57 0 0 0 .048-.078c.11.032.234.058.373.058.255 0 .501-.086.75-.265.244-.174.418-.424.444-.637v-.01c.083.017.167.026.251.026.265 0 .527-.082.773-.242.48-.31.562-.715.554-.98a1.28 1.279 0 0 0 .978-.194 1.04 1.04 0 0 0 .502-.808 1.088 1.085 0 0 0-.16-.653c.804-.342 2.636-1.003 4.795-1.483a4.734 4.721 0 0 0-.067-.492 27.742 27.667 0 0 0-5.049 1.62zm5.123-.763c0 4.027-5.166 7.293-11.537 7.293-6.372 0-11.538-3.266-11.538-7.293 0-4.028 5.165-7.293 11.539-7.293 6.371 0 11.537 3.265 11.537 7.293zm.46.004c0-4.272-5.374-7.755-12-7.755S.002 7.277.002 11.55L0 12.004c0 4.533 4.695 8.203 11.999 8.203 7.347 0 12-3.67 12-8.204z"},child:[]}]})(e)}function Fk(e){return Be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z"},child:[]}]})(e)}function Dk(e){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 224h192V32H0v192zM64 96h64v64H64V96zm192-64v192h192V32H256zm128 128h-64V96h64v64zM0 480h192V288H0v192zm64-128h64v64H64v-64zm352-64h32v128h-96v-32h-32v96h-64V288h96v32h64v-32zm0 160h32v32h-32v-32zm-64 0h32v32h-32v-32z"},child:[]}]})(e)}const Bk={intro:"Aceitamos cartão de crédito, débito e PIX. Todas as transações são processadas de forma segura.",processorNote:{title:"Processamento de pagamento",text:"Os pagamentos são processados pelo Mercado Pago. Seus dados são criptografados e não armazenamos informações completas do cartão em nossos servidores. O Mercado Pago é uma solução segura e amplamente utilizada no Brasil."},methods:[{id:"card",title:"Cartão de crédito ou débito",paragraphs:["Você pode pagar com cartão de crédito ou débito no checkout. Os dados são informados na própria página de finalização da compra.","Parcelamento: oferecemos opções de parcelamento em várias vezes. Quando houver parcelamento com juros, os juros são por conta do comprador — ou seja, o valor das parcelas já inclui os encargos da operadora/bandeira, e você vê o total antes de confirmar o pagamento.","O pagamento com cartão é processado pelo Mercado Pago, em ambiente seguro. A aprovação é feita em instantes e você recebe a confirmação por e-mail."]},{id:"pix",title:"PIX",paragraphs:["Pagamento instantâneo via PIX. No checkout você gera um QR Code ou o código PIX (copia e cola) e paga pelo app do seu banco.","A confirmação costuma ser em segundos. Assim que o pagamento for identificado, você recebe a confirmação por e-mail e o pedido segue para processamento."]}]},Uk=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,Hk=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,Vk=c.header`
  margin-bottom: 2rem;
`,Wk=c.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`,Gk=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`,Qk=c.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;
  margin: 0 0 2rem;
`,qk=c.section`
  background: linear-gradient(135deg, #009ee3 0%, #00b1ea 100%);
  border: none;
  border-radius: 16px;
  padding: 1.5rem 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  box-shadow: 0 4px 14px rgba(0, 158, 227, 0.25);
`,Kk=c.div`
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
`,Yk=c.div`
  flex: 1;
  min-width: 0;
`,Xk=c.h2`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem;
  line-height: 1.3;
`,Jk=c.p`
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin: 0;
`,Zk=c.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 1rem;
  line-height: 1.3;
`,eC=c.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,tC=c.li`
  background: #fff;
  border: none;
  border-radius: 12px;
  padding: 1.5rem 1.5rem;
  box-shadow: none;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,rC=c.div`
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
`,nC=c.div`
  flex: 1;
  min-width: 0;
`,oC=c.h3`
  font-size: 1.0625rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`,iC=c.div`
  font-size: 0.9375rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin: 0 0 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,aC={card:Fk,pix:Dk};function lC(){const{intro:e,processorNote:t,methods:r}=Bk;return a.jsxs(Uk,{children:[a.jsx(be,{}),a.jsxs(Hk,{children:[a.jsxs(Vk,{children:[a.jsx(Wk,{children:"Formas de pagamento"}),a.jsx(Gk,{children:"Cartão e PIX. Escolha a opção que preferir na hora da compra."})]}),a.jsx(Qk,{children:e}),a.jsxs(qk,{"aria-labelledby":"processor-note-title",children:[a.jsx(Kk,{"aria-hidden":!0,children:a.jsx(Mk,{})}),a.jsxs(Yk,{children:[a.jsx(Xk,{id:"processor-note-title",children:t.title}),a.jsx(Jk,{children:t.text})]})]}),a.jsxs("section",{"aria-labelledby":"payment-methods-title",children:[a.jsx(Zk,{id:"payment-methods-title",children:"Opções disponíveis"}),a.jsx(eC,{children:r.map(n=>{const o=aC[n.id];return a.jsxs(tC,{children:[a.jsx(rC,{"aria-hidden":!0,children:o?a.jsx(o,{}):null}),a.jsxs(nC,{children:[a.jsx(oC,{children:n.title}),a.jsx(iC,{children:n.paragraphs.map(i=>a.jsx("p",{children:i},i))})]})]},n.id)})})]})]}),a.jsx(je,{})]})}const sC={intro:"Trabalhamos com envio para todo o Brasil. Abaixo você encontra informações gerais sobre prazos e como acompanhar seu pedido.",sections:[{id:"como-funciona",title:"Como funciona",paragraphs:["Após a confirmação do pagamento, seu pedido é separado e enviado pelas transportadoras parceiras, conforme a região.","O endereço de entrega é o que você informou no checkout. Por isso, confira sempre que os dados estão corretos antes de finalizar a compra."]},{id:"prazos",title:"Prazos de entrega",paragraphs:["Os prazos variam de acordo com a sua localidade e a disponibilidade dos transportes. Em geral, a entrega pode levar de 7 a 15 dias úteis após a postagem, dependendo da região do país.","Pedidos postados em dias úteis costumam ser despachados em até 3 dias úteis após a confirmação do pagamento. Em períodos de maior movimento (promoções, datas comemorativas), esse prazo pode ser um pouco maior."]},{id:"acompanhar",title:"Acompanhar pedido",paragraphs:['Quando o pedido for enviado, você receberá um e-mail com as informações de rastreio, se disponíveis. Também é possível consultar o status pela página "Consultar pedido", informando seu e-mail e o código do pedido.']},{id:"duvidas",title:"Dúvidas ou necessidade de ajuda",paragraphs:["Se tiver qualquer dúvida sobre seu pedido, envio ou entrega, entre em contato conosco pela página de Contato. Nossa equipe está à disposição para ajudar.","Acesse o menu Contato para ver e-mail, telefone e horário de atendimento."]}]},cC=c.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,uC=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,dC=c.header`
  margin-bottom: 2rem;
`,fC=c.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`,pC=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`,mC=c.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;
  margin: 0 0 2rem;
`,hC=c.section`
  margin-bottom: 2rem;
`,gC=c.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`,xC=c.div`
  font-size: 0.9375rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin: 0 0 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;function vC(){const{intro:e,sections:t}=sC;return a.jsxs(cC,{children:[a.jsx(be,{}),a.jsxs(uC,{children:[a.jsxs(dC,{children:[a.jsx(fC,{children:"Entregas"}),a.jsx(pC,{children:"Informações sobre envio e prazos para todo o Brasil."})]}),a.jsx(mC,{children:e}),t.map(r=>a.jsxs(hC,{"aria-labelledby":`entregas-${r.id}`,children:[a.jsx(gC,{id:`entregas-${r.id}`,children:r.title}),a.jsx(xC,{children:r.paragraphs.map(n=>a.jsx("p",{children:n},n))})]},r.id))]}),a.jsx(je,{})]})}const yC=c.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`,wC=c.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`,bC=c.header`
  margin-bottom: 2.5rem;
`,jC=c.h1`
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
`,kC=c.p`
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
`,Tl=c.section`
  margin-bottom: 2.5rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`,Ll=c.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`,CC=c.div`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin: 0 0 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`,SC=c.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`,PC=c.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`,EC=c.span`
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
`,zC=c.div`
  min-width: 0;
`,IC=c.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
`,TC=c.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`,LC=c.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,NC=c.li`
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
`,_C=c.section`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
`,RC=c.p`
  font-size: 0.9375rem;
  color: #374151;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`,$C=c(ne)`
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
`,OC=[{icon:Ay,title:"Qualidade artesanal",desc:"Chapéus e acessórios selecionados com cuidado e acabamento delicado."},{icon:$y,title:"Estilo western feminino",desc:"Peças que unem charme country e elegância no dia a dia."},{icon:Oh,title:"Compra simples",desc:"Do catálogo ao checkout, tudo claro e sem complicação."},{icon:My,title:"Atendimento próximo",desc:"Suporte humano quando você precisar de ajuda."}],AC=["Escolha seu chapéu ou acessório no catálogo.","Finalize a compra com seus dados e pagamento.","Receba em casa com carinho e acompanhe o pedido."];function MC(){return a.jsxs(yC,{children:[a.jsx(be,{}),a.jsxs(wC,{children:[a.jsxs(bC,{children:[a.jsx(jC,{children:"Sobre a Glamour Country"}),a.jsx(kC,{children:"Chapéus femininos e artigos country com leveza, charme e espírito western."})]}),a.jsxs(Tl,{"aria-labelledby":"quem-somos-title",children:[a.jsx(Ll,{id:"quem-somos-title",children:"Quem somos"}),a.jsxs(CC,{children:[a.jsx("p",{children:"A Glamour Country nasceu para a mulher que vive o lifestyle country com estilo. Somos uma loja de chapéus e acessórios country com foco em modelos femininos, delicados e cheios de personalidade."}),a.jsx("p",{children:"Nosso compromisso é oferecer peças que protegem do sol, completam o look e contam uma história — com transparência em cada etapa da compra."})]})]}),a.jsxs(Tl,{"aria-labelledby":"valores-title",children:[a.jsx(Ll,{id:"valores-title",children:"O que valorizamos"}),a.jsx(SC,{children:OC.map(({icon:e,title:t,desc:r})=>a.jsxs(PC,{children:[a.jsx(EC,{"aria-hidden":!0,children:a.jsx(e,{size:20})}),a.jsxs(zC,{children:[a.jsx(IC,{children:t}),a.jsx(TC,{children:r})]})]},t))})]}),a.jsxs(Tl,{"aria-labelledby":"como-funciona-title",children:[a.jsx(Ll,{id:"como-funciona-title",children:"Como funciona"}),a.jsx(LC,{children:AC.map((e,t)=>a.jsx(NC,{"data-step":t+1,children:e},e))})]}),a.jsxs(_C,{children:[a.jsx(RC,{children:"Pronta para encontrar seu próximo chapéu?"}),a.jsx($C,{to:"/chapeus",children:"Ver chapéus"})]})]}),a.jsx(je,{})]})}const Pt={"politica-de-privacidade":{title:"Política de privacidade",paragraphs:["A Glamour Country respeita sua privacidade e está comprometida com a proteção dos seus dados pessoais.","Esta página está em construção. Em breve publicaremos nossa política completa de privacidade e uso de dados."]},termos:{title:"Termos de uso",paragraphs:["Ao utilizar nosso site e serviços, você concorda com os termos aqui descritos.","Esta página está em construção. Em breve disponibilizaremos os termos completos de uso da Glamour Country."]},lojas:{title:"Nossas lojas",paragraphs:["Encontre uma Glamour Country perto de você.","Esta página está em construção. Em breve traremos endereços e horários de funcionamento."]},"trabalhe-conosco":{title:"Trabalhe conosco",paragraphs:["Quer fazer parte da Glamour Country? Confira nossas vagas abertas.","Esta página está em construção. Em breve disponibilizaremos oportunidades de trabalho."]},"troca-devolucao":{title:"Troca e devolução",paragraphs:["Sua satisfação é nossa prioridade. Consulte as regras para trocas e devoluções.","Esta página está em construção. Em breve traremos todas as informações sobre política de trocas."]},pedidos:{title:"Meus pedidos",paragraphs:["Acompanhe seus pedidos e histórico de compras.","Esta página está em construção. Em breve você poderá acessar sua conta e ver seus pedidos."]},favoritos:{title:"Meus favoritos",paragraphs:["Guarde seus produtos favoritos para comprar depois.","Esta página está em construção. Em breve você poderá salvar e gerenciar seus favoritos."]},cadastro:{title:"Cadastre-se",paragraphs:["Crie sua conta para agilizar compras e acompanhar pedidos.","Esta página está em construção. Em breve disponibilizaremos o formulário de cadastro."]},login:{title:"Login",paragraphs:["Acesse sua conta para gerenciar pedidos e favoritos.","Esta página está em construção. Em breve disponibilizaremos o acesso à sua conta."]}};function FC(){return a.jsx(Dc,{to:"/chapeus",replace:!0})}function DC(){return a.jsx(Dc,{to:"/country",replace:!0})}function BC(){const[e]=Ia(),t=e.get("q"),r=t?`/produtos?q=${encodeURIComponent(t)}`:"/produtos";return a.jsx(Dc,{to:r,replace:!0})}function UC(){return a.jsx(bx,{children:a.jsx(Nx,{children:a.jsxs(Tx,{children:[a.jsx(gy,{}),a.jsx(cy,{}),a.jsxs(fx,{children:[a.jsx(W,{path:"/",element:a.jsx(l5,{})}),a.jsx(W,{path:"/chapeus",element:a.jsx(R4,{})}),a.jsx(W,{path:"/times",element:a.jsx(FC,{})}),a.jsx(W,{path:"/country",element:a.jsx(jr,{})}),a.jsx(W,{path:"/agro",element:a.jsx(DC,{})}),a.jsx(W,{path:"/produtos",element:a.jsx(jr,{})}),a.jsx(W,{path:"/produto/:id",element:a.jsx(t4,{})}),a.jsx(W,{path:"/carrinho",element:a.jsx(yb,{})}),a.jsx(W,{path:"/checkout",element:a.jsx(xj,{})}),a.jsx(W,{path:"/checkout/sucesso",element:a.jsx(c3,{})}),a.jsx(W,{path:"/pedido/consultar/:id",element:a.jsx(_f,{})}),a.jsx(W,{path:"/pedido/consultar",element:a.jsx(_f,{})}),a.jsx(W,{path:"/busca",element:a.jsx(BC,{})}),a.jsx(W,{path:"/sobre",element:a.jsx(MC,{})}),a.jsx(W,{path:"/contato",element:a.jsx(Ak,{})}),a.jsx(W,{path:"/ajuda",element:a.jsx(vk,{})}),a.jsx(W,{path:"/politica-de-privacidade",element:a.jsx(St,{...Pt["politica-de-privacidade"]})}),a.jsx(W,{path:"/termos",element:a.jsx(St,{...Pt.termos})}),a.jsx(W,{path:"/lojas",element:a.jsx(St,{...Pt.lojas})}),a.jsx(W,{path:"/trabalhe-conosco",element:a.jsx(St,{...Pt["trabalhe-conosco"]})}),a.jsx(W,{path:"/troca-devolucao",element:a.jsx(St,{...Pt["troca-devolucao"]})}),a.jsx(W,{path:"/entregas",element:a.jsx(vC,{})}),a.jsx(W,{path:"/pagamento",element:a.jsx(lC,{})}),a.jsx(W,{path:"/pedidos",element:a.jsx(St,{...Pt.pedidos})}),a.jsx(W,{path:"/favoritos",element:a.jsx(St,{...Pt.favoritos})}),a.jsx(W,{path:"/cadastro",element:a.jsx(St,{...Pt.cadastro})}),a.jsx(W,{path:"/login",element:a.jsx(St,{...Pt.login})}),a.jsx(W,{path:"/categoria/:slug",element:a.jsx(jr,{})}),a.jsx(W,{path:"/brasileirao",element:a.jsx(jr,{})}),a.jsx(W,{path:"/europeus",element:a.jsx(jr,{})}),a.jsx(W,{path:"/lancamentos",element:a.jsx(jr,{})}),a.jsx(W,{path:"/promocoes",element:a.jsx(jr,{})})]})]})})})}const HC=_v`
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
`;Nl.createRoot(document.getElementById("root")).render(a.jsxs(re.StrictMode,{children:[a.jsx(HC,{}),a.jsx(UC,{})]}));
