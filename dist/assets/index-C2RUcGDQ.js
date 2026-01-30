function em(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function tm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Kc={exports:{}},Io={},Xc={exports:{}},$={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ri=Symbol.for("react.element"),nm=Symbol.for("react.portal"),rm=Symbol.for("react.fragment"),im=Symbol.for("react.strict_mode"),om=Symbol.for("react.profiler"),lm=Symbol.for("react.provider"),am=Symbol.for("react.context"),sm=Symbol.for("react.forward_ref"),um=Symbol.for("react.suspense"),cm=Symbol.for("react.memo"),dm=Symbol.for("react.lazy"),nu=Symbol.iterator;function fm(e){return e===null||typeof e!="object"?null:(e=nu&&e[nu]||e["@@iterator"],typeof e=="function"?e:null)}var Zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jc=Object.assign,ed={};function ir(e,t,n){this.props=e,this.context=t,this.refs=ed,this.updater=n||Zc}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function td(){}td.prototype=ir.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=ed,this.updater=n||Zc}var ts=es.prototype=new td;ts.constructor=es;Jc(ts,ir.prototype);ts.isPureReactComponent=!0;var ru=Array.isArray,nd=Object.prototype.hasOwnProperty,ns={current:null},rd={key:!0,ref:!0,__self:!0,__source:!0};function id(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)nd.call(t,r)&&!rd.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:ri,type:e,key:o,ref:l,props:i,_owner:ns.current}}function pm(e,t){return{$$typeof:ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===ri}function mm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iu=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?mm(""+e.key):t.toString(36)}function $i(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ri:case nm:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+il(l,0):r,ru(i)?(n="",e!=null&&(n=e.replace(iu,"$&/")+"/"),$i(i,t,n,"",function(c){return c})):i!=null&&(rs(i)&&(i=pm(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(iu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",ru(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+il(o,s);l+=$i(o,t,n,u,i)}else if(u=fm(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+il(o,s++),l+=$i(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function mi(e,t,n){if(e==null)return e;var r=[],i=0;return $i(e,r,"","",function(o){return t.call(n,o,i++)}),r}function hm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},Oi={transition:null},gm={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:Oi,ReactCurrentOwner:ns};function od(){throw Error("act(...) is not supported in production builds of React.")}$.Children={map:mi,forEach:function(e,t,n){mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mi(e,function(){t++}),t},toArray:function(e){return mi(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};$.Component=ir;$.Fragment=rm;$.Profiler=om;$.PureComponent=es;$.StrictMode=im;$.Suspense=um;$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;$.act=od;$.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=ns.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)nd.call(t,u)&&!rd.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:ri,type:e.type,key:i,ref:o,props:r,_owner:l}};$.createContext=function(e){return e={$$typeof:am,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lm,_context:e},e.Consumer=e};$.createElement=id;$.createFactory=function(e){var t=id.bind(null,e);return t.type=e,t};$.createRef=function(){return{current:null}};$.forwardRef=function(e){return{$$typeof:sm,render:e}};$.isValidElement=rs;$.lazy=function(e){return{$$typeof:dm,_payload:{_status:-1,_result:e},_init:hm}};$.memo=function(e,t){return{$$typeof:cm,type:e,compare:t===void 0?null:t}};$.startTransition=function(e){var t=Oi.transition;Oi.transition={};try{e()}finally{Oi.transition=t}};$.unstable_act=od;$.useCallback=function(e,t){return ke.current.useCallback(e,t)};$.useContext=function(e){return ke.current.useContext(e)};$.useDebugValue=function(){};$.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};$.useEffect=function(e,t){return ke.current.useEffect(e,t)};$.useId=function(){return ke.current.useId()};$.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};$.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};$.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};$.useMemo=function(e,t){return ke.current.useMemo(e,t)};$.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};$.useRef=function(e){return ke.current.useRef(e)};$.useState=function(e){return ke.current.useState(e)};$.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};$.useTransition=function(){return ke.current.useTransition()};$.version="18.3.1";Xc.exports=$;var C=Xc.exports;const ue=tm(C),vm=em({__proto__:null,default:ue},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=C,xm=Symbol.for("react.element"),wm=Symbol.for("react.fragment"),km=Object.prototype.hasOwnProperty,Sm=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cm={key:!0,ref:!0,__self:!0,__source:!0};function ld(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)km.call(t,r)&&!Cm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xm,type:e,key:o,ref:l,props:i,_owner:Sm.current}}Io.Fragment=wm;Io.jsx=ld;Io.jsxs=ld;Kc.exports=Io;var a=Kc.exports,Wl={},ad={exports:{}},Me={},sd={exports:{}},ud={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,L){var T=_.length;_.push(L);e:for(;0<T;){var D=T-1>>>1,B=_[D];if(0<i(B,L))_[D]=L,_[T]=B,T=D;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var L=_[0],T=_.pop();if(T!==L){_[0]=T;e:for(var D=0,B=_.length,Xt=B>>>1;D<Xt;){var Ge=2*(D+1)-1,xn=_[Ge],Qe=Ge+1,Zt=_[Qe];if(0>i(xn,T))Qe<B&&0>i(Zt,xn)?(_[D]=Zt,_[Qe]=T,D=Qe):(_[D]=xn,_[Ge]=T,D=Ge);else if(Qe<B&&0>i(Zt,T))_[D]=Zt,_[Qe]=T,D=Qe;else break e}}return L}function i(_,L){var T=_.sortIndex-L.sortIndex;return T!==0?T:_.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var u=[],c=[],h=1,g=null,v=3,w=!1,x=!1,y=!1,j=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=_)r(c),L.sortIndex=L.expirationTime,t(u,L);else break;L=n(c)}}function k(_){if(y=!1,f(_),!x)if(n(u)!==null)x=!0,ur(E);else{var L=n(c);L!==null&&Kt(k,L.startTime-_)}}function E(_,L){x=!1,y&&(y=!1,m(z),z=-1),w=!0;var T=v;try{for(f(L),g=n(u);g!==null&&(!(g.expirationTime>L)||_&&!H());){var D=g.callback;if(typeof D=="function"){g.callback=null,v=g.priorityLevel;var B=D(g.expirationTime<=L);L=e.unstable_now(),typeof B=="function"?g.callback=B:g===n(u)&&r(u),f(L)}else r(u);g=n(u)}if(g!==null)var Xt=!0;else{var Ge=n(c);Ge!==null&&Kt(k,Ge.startTime-L),Xt=!1}return Xt}finally{g=null,v=T,w=!1}}var P=!1,S=null,z=-1,M=5,I=-1;function H(){return!(e.unstable_now()-I<M)}function fe(){if(S!==null){var _=e.unstable_now();I=_;var L=!0;try{L=S(!0,_)}finally{L?Ve():(P=!1,S=null)}}else P=!1}var Ve;if(typeof d=="function")Ve=function(){d(fe)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,nl=Yt.port2;Yt.port1.onmessage=fe,Ve=function(){nl.postMessage(null)}}else Ve=function(){j(fe,0)};function ur(_){S=_,P||(P=!0,Ve())}function Kt(_,L){z=j(function(){_(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,ur(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(v){case 1:case 2:case 3:var L=3;break;default:L=v}var T=v;v=L;try{return _()}finally{v=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,L){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var T=v;v=_;try{return L()}finally{v=T}},e.unstable_scheduleCallback=function(_,L,T){var D=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?D+T:D):T=D,_){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=T+B,_={id:h++,callback:L,priorityLevel:_,startTime:T,expirationTime:B,sortIndex:-1},T>D?(_.sortIndex=T,t(c,_),n(u)===null&&_===n(c)&&(y?(m(z),z=-1):y=!0,Kt(k,T-D))):(_.sortIndex=B,t(u,_),x||w||(x=!0,ur(E))),_},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(_){var L=v;return function(){var T=v;v=L;try{return _.apply(this,arguments)}finally{v=T}}}})(ud);sd.exports=ud;var jm=sd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em=C,Re=jm;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cd=new Set,Rr={};function gn(e,t){Gn(e,t),Gn(e+"Capture",t)}function Gn(e,t){for(Rr[e]=t,e=0;e<t.length;e++)cd.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vl=Object.prototype.hasOwnProperty,Pm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ou={},lu={};function bm(e){return Vl.call(lu,e)?!0:Vl.call(ou,e)?!1:Pm.test(e)?lu[e]=!0:(ou[e]=!0,!1)}function zm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _m(e,t,n,r){if(t===null||typeof t>"u"||zm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,os);de[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,os);de[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,os);de[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function ls(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_m(t,n,i,r)&&(n=null),r||i===null?bm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Em.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hi=Symbol.for("react.element"),En=Symbol.for("react.portal"),Pn=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),dd=Symbol.for("react.provider"),fd=Symbol.for("react.context"),ss=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),pd=Symbol.for("react.offscreen"),au=Symbol.iterator;function dr(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,ol;function xr(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var ll=!1;function al(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,s=o.length-1;1<=l&&0<=s&&i[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(i[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||i[l]!==o[s]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xr(e):""}function Im(e){switch(e.tag){case 5:return xr(e.type);case 16:return xr("Lazy");case 13:return xr("Suspense");case 19:return xr("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Yl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Pn:return"Fragment";case En:return"Portal";case Gl:return"Profiler";case as:return"StrictMode";case Ql:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fd:return(e.displayName||"Context")+".Consumer";case dd:return(e._context.displayName||"Context")+".Provider";case ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case us:return t=e.displayName||null,t!==null?t:Yl(e.type)||"Memo";case jt:t=e._payload,e=e._init;try{return Yl(e(t))}catch{}}return null}function Nm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yl(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lm(e){var t=md(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gi(e){e._valueTracker||(e._valueTracker=Lm(e))}function hd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=md(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Kl(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function gd(e,t){t=t.checked,t!=null&&ls(e,"checked",t,!1)}function Xl(e,t){gd(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zl(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zl(e,t,n){(t!=="number"||Ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(wr(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function vd(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function yd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ea(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?yd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,xd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tm=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(e){Tm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jr[t]=jr[e]})});function wd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jr.hasOwnProperty(e)&&jr[e]?(""+t).trim():t+"px"}function kd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Rm=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(e,t){if(t){if(Rm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function na(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ra=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ia=null,Bn=null,Un=null;function fu(e){if(e=li(e)){if(typeof ia!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Mo(t),ia(e.stateNode,e.type,t))}}function Sd(e){Bn?Un?Un.push(e):Un=[e]:Bn=e}function Cd(){if(Bn){var e=Bn,t=Un;if(Un=Bn=null,fu(e),t)for(e=0;e<t.length;e++)fu(t[e])}}function jd(e,t){return e(t)}function Ed(){}var sl=!1;function Pd(e,t,n){if(sl)return e(t,n);sl=!0;try{return jd(e,t,n)}finally{sl=!1,(Bn!==null||Un!==null)&&(Ed(),Cd())}}function $r(e,t){var n=e.stateNode;if(n===null)return null;var r=Mo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var oa=!1;if(gt)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){oa=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{oa=!1}function Mm(e,t,n,r,i,o,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Er=!1,eo=null,to=!1,la=null,$m={onError:function(e){Er=!0,eo=e}};function Om(e,t,n,r,i,o,l,s,u){Er=!1,eo=null,Mm.apply($m,arguments)}function Fm(e,t,n,r,i,o,l,s,u){if(Om.apply(this,arguments),Er){if(Er){var c=eo;Er=!1,eo=null}else throw Error(b(198));to||(to=!0,la=c)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function bd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pu(e){if(vn(e)!==e)throw Error(b(188))}function Am(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pu(i),e;if(o===r)return pu(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function zd(e){return e=Am(e),e!==null?_d(e):null}function _d(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_d(e);if(t!==null)return t;e=e.sibling}return null}var Id=Re.unstable_scheduleCallback,mu=Re.unstable_cancelCallback,Dm=Re.unstable_shouldYield,Bm=Re.unstable_requestPaint,J=Re.unstable_now,Um=Re.unstable_getCurrentPriorityLevel,ds=Re.unstable_ImmediatePriority,Nd=Re.unstable_UserBlockingPriority,no=Re.unstable_NormalPriority,Hm=Re.unstable_LowPriority,Ld=Re.unstable_IdlePriority,No=null,lt=null;function Wm(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(No,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Qm,Vm=Math.log,Gm=Math.LN2;function Qm(e){return e>>>=0,e===0?32:31-(Vm(e)/Gm|0)|0}var yi=64,xi=4194304;function kr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ro(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~i;s!==0?r=kr(s):(o&=l,o!==0&&(r=kr(o)))}else l=n&~i,l!==0?r=kr(l):o!==0&&(r=kr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),i=1<<n,r|=e[n],t&=~i;return r}function qm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ym(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Je(o),s=1<<l,u=i[l];u===-1?(!(s&n)||s&r)&&(i[l]=qm(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function aa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Td(){var e=yi;return yi<<=1,!(yi&4194240)&&(yi=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ii(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Km(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Je(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function fs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var A=0;function Rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Md,ps,$d,Od,Fd,sa=!1,wi=[],Lt=null,Tt=null,Rt=null,Or=new Map,Fr=new Map,Pt=[],Xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(t.pointerId)}}function pr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=li(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Zm(e,t,n,r,i){switch(t){case"focusin":return Lt=pr(Lt,e,t,n,r,i),!0;case"dragenter":return Tt=pr(Tt,e,t,n,r,i),!0;case"mouseover":return Rt=pr(Rt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Or.set(o,pr(Or.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Fr.set(o,pr(Fr.get(o)||null,e,t,n,r,i)),!0}return!1}function Ad(e){var t=tn(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=bd(n),t!==null){e.blockedOn=t,Fd(e.priority,function(){$d(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ua(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ra=r,n.target.dispatchEvent(r),ra=null}else return t=li(n),t!==null&&ps(t),e.blockedOn=n,!1;t.shift()}return!0}function gu(e,t,n){Fi(e)&&n.delete(t)}function Jm(){sa=!1,Lt!==null&&Fi(Lt)&&(Lt=null),Tt!==null&&Fi(Tt)&&(Tt=null),Rt!==null&&Fi(Rt)&&(Rt=null),Or.forEach(gu),Fr.forEach(gu)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,sa||(sa=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Jm)))}function Ar(e){function t(i){return mr(i,e)}if(0<wi.length){mr(wi[0],e);for(var n=1;n<wi.length;n++){var r=wi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Lt!==null&&mr(Lt,e),Tt!==null&&mr(Tt,e),Rt!==null&&mr(Rt,e),Or.forEach(t),Fr.forEach(t),n=0;n<Pt.length;n++)r=Pt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Pt.length&&(n=Pt[0],n.blockedOn===null);)Ad(n),n.blockedOn===null&&Pt.shift()}var Hn=wt.ReactCurrentBatchConfig,io=!0;function eh(e,t,n,r){var i=A,o=Hn.transition;Hn.transition=null;try{A=1,ms(e,t,n,r)}finally{A=i,Hn.transition=o}}function th(e,t,n,r){var i=A,o=Hn.transition;Hn.transition=null;try{A=4,ms(e,t,n,r)}finally{A=i,Hn.transition=o}}function ms(e,t,n,r){if(io){var i=ua(e,t,n,r);if(i===null)xl(e,t,r,oo,n),hu(e,r);else if(Zm(i,e,t,n,r))r.stopPropagation();else if(hu(e,r),t&4&&-1<Xm.indexOf(e)){for(;i!==null;){var o=li(i);if(o!==null&&Md(o),o=ua(e,t,n,r),o===null&&xl(e,t,r,oo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var oo=null;function ua(e,t,n,r){if(oo=null,e=cs(r),e=tn(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=bd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oo=e,null}function Dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Um()){case ds:return 1;case Nd:return 4;case no:case Hm:return 16;case Ld:return 536870912;default:return 16}default:return 16}}var zt=null,hs=null,Ai=null;function Bd(){if(Ai)return Ai;var e,t=hs,n=t.length,r,i="value"in zt?zt.value:zt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ai=i.slice(e,1<r?1-r:void 0)}function Di(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function vu(){return!1}function $e(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ki:vu,this.isPropagationStopped=vu,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=$e(or),oi=K({},or,{view:0,detail:0}),nh=$e(oi),cl,dl,hr,Lo=K({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hr&&(hr&&e.type==="mousemove"?(cl=e.screenX-hr.screenX,dl=e.screenY-hr.screenY):dl=cl=0,hr=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),yu=$e(Lo),rh=K({},Lo,{dataTransfer:0}),ih=$e(rh),oh=K({},oi,{relatedTarget:0}),fl=$e(oh),lh=K({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),ah=$e(lh),sh=K({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uh=$e(sh),ch=K({},or,{data:0}),xu=$e(ch),dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ph={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ph[e])?!!t[e]:!1}function vs(){return mh}var hh=K({},oi,{key:function(e){if(e.key){var t=dh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Di(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?Di(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Di(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gh=$e(hh),vh=K({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wu=$e(vh),yh=K({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),xh=$e(yh),wh=K({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),kh=$e(wh),Sh=K({},Lo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ch=$e(Sh),jh=[9,13,27,32],ys=gt&&"CompositionEvent"in window,Pr=null;gt&&"documentMode"in document&&(Pr=document.documentMode);var Eh=gt&&"TextEvent"in window&&!Pr,Ud=gt&&(!ys||Pr&&8<Pr&&11>=Pr),ku=" ",Su=!1;function Hd(e,t){switch(e){case"keyup":return jh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bn=!1;function Ph(e,t){switch(e){case"compositionend":return Wd(t);case"keypress":return t.which!==32?null:(Su=!0,ku);case"textInput":return e=t.data,e===ku&&Su?null:e;default:return null}}function bh(e,t){if(bn)return e==="compositionend"||!ys&&Hd(e,t)?(e=Bd(),Ai=hs=zt=null,bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ud&&t.locale!=="ko"?null:t.data;default:return null}}var zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zh[e.type]:t==="textarea"}function Vd(e,t,n,r){Sd(r),t=lo(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var br=null,Dr=null;function _h(e){nf(e,0)}function To(e){var t=In(e);if(hd(t))return e}function Ih(e,t){if(e==="change")return t}var Gd=!1;if(gt){var pl;if(gt){var ml="oninput"in document;if(!ml){var ju=document.createElement("div");ju.setAttribute("oninput","return;"),ml=typeof ju.oninput=="function"}pl=ml}else pl=!1;Gd=pl&&(!document.documentMode||9<document.documentMode)}function Eu(){br&&(br.detachEvent("onpropertychange",Qd),Dr=br=null)}function Qd(e){if(e.propertyName==="value"&&To(Dr)){var t=[];Vd(t,Dr,e,cs(e)),Pd(_h,t)}}function Nh(e,t,n){e==="focusin"?(Eu(),br=t,Dr=n,br.attachEvent("onpropertychange",Qd)):e==="focusout"&&Eu()}function Lh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return To(Dr)}function Th(e,t){if(e==="click")return To(t)}function Rh(e,t){if(e==="input"||e==="change")return To(t)}function Mh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:Mh;function Br(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vl.call(t,i)||!nt(e[i],t[i]))return!1}return!0}function Pu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bu(e,t){var n=Pu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pu(n)}}function qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yd(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ji(e.document)}return t}function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $h(e){var t=Yd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qd(n.ownerDocument.documentElement,n)){if(r!==null&&xs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=bu(n,o);var l=bu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Oh=gt&&"documentMode"in document&&11>=document.documentMode,zn=null,ca=null,zr=null,da=!1;function zu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;da||zn==null||zn!==Ji(r)||(r=zn,"selectionStart"in r&&xs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Br(zr,r)||(zr=r,r=lo(ca,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},hl={},Kd={};gt&&(Kd=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Ro(e){if(hl[e])return hl[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kd)return hl[e]=t[n];return e}var Xd=Ro("animationend"),Zd=Ro("animationiteration"),Jd=Ro("animationstart"),ef=Ro("transitionend"),tf=new Map,_u="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){tf.set(e,t),gn(t,[e])}for(var gl=0;gl<_u.length;gl++){var vl=_u[gl],Fh=vl.toLowerCase(),Ah=vl[0].toUpperCase()+vl.slice(1);Wt(Fh,"on"+Ah)}Wt(Xd,"onAnimationEnd");Wt(Zd,"onAnimationIteration");Wt(Jd,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(ef,"onTransitionEnd");Gn("onMouseEnter",["mouseout","mouseover"]);Gn("onMouseLeave",["mouseout","mouseover"]);Gn("onPointerEnter",["pointerout","pointerover"]);Gn("onPointerLeave",["pointerout","pointerover"]);gn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gn("onBeforeInput",["compositionend","keypress","textInput","paste"]);gn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sr));function Iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Fm(r,t,void 0,e),e.currentTarget=null}function nf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==o&&i.isPropagationStopped())break e;Iu(i,s,c),o=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==o&&i.isPropagationStopped())break e;Iu(i,s,c),o=u}}}if(to)throw e=la,to=!1,la=null,e}function W(e,t){var n=t[ga];n===void 0&&(n=t[ga]=new Set);var r=e+"__bubble";n.has(r)||(rf(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),rf(n,e,r,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Ur(e){if(!e[Ci]){e[Ci]=!0,cd.forEach(function(n){n!=="selectionchange"&&(Dh.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,yl("selectionchange",!1,t))}}function rf(e,t,n,r){switch(Dd(t)){case 1:var i=eh;break;case 4:i=th;break;default:i=ms}n=i.bind(null,t,n,e),i=void 0,!oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;s!==null;){if(l=tn(s),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}s=s.parentNode}}r=r.return}Pd(function(){var c=o,h=cs(n),g=[];e:{var v=tf.get(e);if(v!==void 0){var w=gs,x=e;switch(e){case"keypress":if(Di(n)===0)break e;case"keydown":case"keyup":w=gh;break;case"focusin":x="focus",w=fl;break;case"focusout":x="blur",w=fl;break;case"beforeblur":case"afterblur":w=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=ih;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=xh;break;case Xd:case Zd:case Jd:w=ah;break;case ef:w=kh;break;case"scroll":w=nh;break;case"wheel":w=Ch;break;case"copy":case"cut":case"paste":w=uh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=wu}var y=(t&4)!==0,j=!y&&e==="scroll",m=y?v!==null?v+"Capture":null:v;y=[];for(var d=c,f;d!==null;){f=d;var k=f.stateNode;if(f.tag===5&&k!==null&&(f=k,m!==null&&(k=$r(d,m),k!=null&&y.push(Hr(d,k,f)))),j)break;d=d.return}0<y.length&&(v=new w(v,x,null,n,h),g.push({event:v,listeners:y}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",v&&n!==ra&&(x=n.relatedTarget||n.fromElement)&&(tn(x)||x[vt]))break e;if((w||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=c,x=x?tn(x):null,x!==null&&(j=vn(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=c),w!==x)){if(y=yu,k="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=wu,k="onPointerLeave",m="onPointerEnter",d="pointer"),j=w==null?v:In(w),f=x==null?v:In(x),v=new y(k,d+"leave",w,n,h),v.target=j,v.relatedTarget=f,k=null,tn(h)===c&&(y=new y(m,d+"enter",x,n,h),y.target=f,y.relatedTarget=j,k=y),j=k,w&&x)t:{for(y=w,m=x,d=0,f=y;f;f=Sn(f))d++;for(f=0,k=m;k;k=Sn(k))f++;for(;0<d-f;)y=Sn(y),d--;for(;0<f-d;)m=Sn(m),f--;for(;d--;){if(y===m||m!==null&&y===m.alternate)break t;y=Sn(y),m=Sn(m)}y=null}else y=null;w!==null&&Nu(g,v,w,y,!1),x!==null&&j!==null&&Nu(g,j,x,y,!0)}}e:{if(v=c?In(c):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var E=Ih;else if(Cu(v))if(Gd)E=Rh;else{E=Lh;var P=Nh}else(w=v.nodeName)&&w.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=Th);if(E&&(E=E(e,c))){Vd(g,E,n,h);break e}P&&P(e,v,c),e==="focusout"&&(P=v._wrapperState)&&P.controlled&&v.type==="number"&&Zl(v,"number",v.value)}switch(P=c?In(c):window,e){case"focusin":(Cu(P)||P.contentEditable==="true")&&(zn=P,ca=c,zr=null);break;case"focusout":zr=ca=zn=null;break;case"mousedown":da=!0;break;case"contextmenu":case"mouseup":case"dragend":da=!1,zu(g,n,h);break;case"selectionchange":if(Oh)break;case"keydown":case"keyup":zu(g,n,h)}var S;if(ys)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else bn?Hd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ud&&n.locale!=="ko"&&(bn||z!=="onCompositionStart"?z==="onCompositionEnd"&&bn&&(S=Bd()):(zt=h,hs="value"in zt?zt.value:zt.textContent,bn=!0)),P=lo(c,z),0<P.length&&(z=new xu(z,e,null,n,h),g.push({event:z,listeners:P}),S?z.data=S:(S=Wd(n),S!==null&&(z.data=S)))),(S=Eh?Ph(e,n):bh(e,n))&&(c=lo(c,"onBeforeInput"),0<c.length&&(h=new xu("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:c}),h.data=S))}nf(g,t)})}function Hr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function lo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$r(e,n),o!=null&&r.unshift(Hr(e,o,i)),o=$r(e,t),o!=null&&r.push(Hr(e,o,i))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,i?(u=$r(n,o),u!=null&&l.unshift(Hr(n,u,s))):i||(u=$r(n,o),u!=null&&l.push(Hr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Bh=/\r\n?/g,Uh=/\u0000|\uFFFD/g;function Lu(e){return(typeof e=="string"?e:""+e).replace(Bh,`
`).replace(Uh,"")}function ji(e,t,n){if(t=Lu(t),Lu(e)!==t&&n)throw Error(b(425))}function ao(){}var fa=null,pa=null;function ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ha=typeof setTimeout=="function"?setTimeout:void 0,Hh=typeof clearTimeout=="function"?clearTimeout:void 0,Tu=typeof Promise=="function"?Promise:void 0,Wh=typeof queueMicrotask=="function"?queueMicrotask:typeof Tu<"u"?function(e){return Tu.resolve(null).then(e).catch(Vh)}:ha;function Vh(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ar(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ru(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var lr=Math.random().toString(36).slice(2),ot="__reactFiber$"+lr,Wr="__reactProps$"+lr,vt="__reactContainer$"+lr,ga="__reactEvents$"+lr,Gh="__reactListeners$"+lr,Qh="__reactHandles$"+lr;function tn(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ru(e);e!==null;){if(n=e[ot])return n;e=Ru(e)}return t}e=n,n=e.parentNode}return null}function li(e){return e=e[ot]||e[vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Mo(e){return e[Wr]||null}var va=[],Nn=-1;function Vt(e){return{current:e}}function G(e){0>Nn||(e.current=va[Nn],va[Nn]=null,Nn--)}function U(e,t){Nn++,va[Nn]=e.current,e.current=t}var Ht={},ve=Vt(Ht),Ee=Vt(!1),sn=Ht;function Qn(e,t){var n=e.type.contextTypes;if(!n)return Ht;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function so(){G(Ee),G(ve)}function Mu(e,t,n){if(ve.current!==Ht)throw Error(b(168));U(ve,t),U(Ee,n)}function of(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,Nm(e)||"Unknown",i));return K({},n,r)}function uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ht,sn=ve.current,U(ve,e),U(Ee,Ee.current),!0}function $u(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=of(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,G(Ee),G(ve),U(ve,e)):G(Ee),U(Ee,n)}var dt=null,$o=!1,kl=!1;function lf(e){dt===null?dt=[e]:dt.push(e)}function qh(e){$o=!0,lf(e)}function Gt(){if(!kl&&dt!==null){kl=!0;var e=0,t=A;try{var n=dt;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,$o=!1}catch(i){throw dt!==null&&(dt=dt.slice(e+1)),Id(ds,Gt),i}finally{A=t,kl=!1}}return null}var Ln=[],Tn=0,co=null,fo=0,Fe=[],Ae=0,un=null,ft=1,pt="";function Jt(e,t){Ln[Tn++]=fo,Ln[Tn++]=co,co=e,fo=t}function af(e,t,n){Fe[Ae++]=ft,Fe[Ae++]=pt,Fe[Ae++]=un,un=e;var r=ft;e=pt;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var o=32-Je(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,ft=1<<32-Je(t)+i|n<<i|r,pt=o+e}else ft=1<<o|n<<i|r,pt=e}function ws(e){e.return!==null&&(Jt(e,1),af(e,1,0))}function ks(e){for(;e===co;)co=Ln[--Tn],Ln[Tn]=null,fo=Ln[--Tn],Ln[Tn]=null;for(;e===un;)un=Fe[--Ae],Fe[Ae]=null,pt=Fe[--Ae],Fe[Ae]=null,ft=Fe[--Ae],Fe[Ae]=null}var Te=null,Le=null,Q=!1,Ze=null;function sf(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ou(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Le=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Le=null,!0):!1;default:return!1}}function ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xa(e){if(Q){var t=Le;if(t){var n=t;if(!Ou(e,t)){if(ya(e))throw Error(b(418));t=Mt(n.nextSibling);var r=Te;t&&Ou(e,t)?sf(r,n):(e.flags=e.flags&-4097|2,Q=!1,Te=e)}}else{if(ya(e))throw Error(b(418));e.flags=e.flags&-4097|2,Q=!1,Te=e}}}function Fu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Ei(e){if(e!==Te)return!1;if(!Q)return Fu(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ma(e.type,e.memoizedProps)),t&&(t=Le)){if(ya(e))throw uf(),Error(b(418));for(;t;)sf(e,t),t=Mt(t.nextSibling)}if(Fu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Mt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Te?Mt(e.stateNode.nextSibling):null;return!0}function uf(){for(var e=Le;e;)e=Mt(e.nextSibling)}function qn(){Le=Te=null,Q=!1}function Ss(e){Ze===null?Ze=[e]:Ze.push(e)}var Yh=wt.ReactCurrentBatchConfig;function gr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=i.refs;l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Pi(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Au(e){var t=e._init;return t(e._payload)}function cf(e){function t(m,d){if(e){var f=m.deletions;f===null?(m.deletions=[d],m.flags|=16):f.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=At(m,d),m.index=0,m.sibling=null,m}function o(m,d,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<d?(m.flags|=2,d):f):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,f,k){return d===null||d.tag!==6?(d=zl(f,m.mode,k),d.return=m,d):(d=i(d,f),d.return=m,d)}function u(m,d,f,k){var E=f.type;return E===Pn?h(m,d,f.props.children,k,f.key):d!==null&&(d.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jt&&Au(E)===d.type)?(k=i(d,f.props),k.ref=gr(m,d,f),k.return=m,k):(k=Qi(f.type,f.key,f.props,null,m.mode,k),k.ref=gr(m,d,f),k.return=m,k)}function c(m,d,f,k){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=_l(f,m.mode,k),d.return=m,d):(d=i(d,f.children||[]),d.return=m,d)}function h(m,d,f,k,E){return d===null||d.tag!==7?(d=an(f,m.mode,k,E),d.return=m,d):(d=i(d,f),d.return=m,d)}function g(m,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=zl(""+d,m.mode,f),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case hi:return f=Qi(d.type,d.key,d.props,null,m.mode,f),f.ref=gr(m,null,d),f.return=m,f;case En:return d=_l(d,m.mode,f),d.return=m,d;case jt:var k=d._init;return g(m,k(d._payload),f)}if(wr(d)||dr(d))return d=an(d,m.mode,f,null),d.return=m,d;Pi(m,d)}return null}function v(m,d,f,k){var E=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:s(m,d,""+f,k);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case hi:return f.key===E?u(m,d,f,k):null;case En:return f.key===E?c(m,d,f,k):null;case jt:return E=f._init,v(m,d,E(f._payload),k)}if(wr(f)||dr(f))return E!==null?null:h(m,d,f,k,null);Pi(m,f)}return null}function w(m,d,f,k,E){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(f)||null,s(d,m,""+k,E);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case hi:return m=m.get(k.key===null?f:k.key)||null,u(d,m,k,E);case En:return m=m.get(k.key===null?f:k.key)||null,c(d,m,k,E);case jt:var P=k._init;return w(m,d,f,P(k._payload),E)}if(wr(k)||dr(k))return m=m.get(f)||null,h(d,m,k,E,null);Pi(d,k)}return null}function x(m,d,f,k){for(var E=null,P=null,S=d,z=d=0,M=null;S!==null&&z<f.length;z++){S.index>z?(M=S,S=null):M=S.sibling;var I=v(m,S,f[z],k);if(I===null){S===null&&(S=M);break}e&&S&&I.alternate===null&&t(m,S),d=o(I,d,z),P===null?E=I:P.sibling=I,P=I,S=M}if(z===f.length)return n(m,S),Q&&Jt(m,z),E;if(S===null){for(;z<f.length;z++)S=g(m,f[z],k),S!==null&&(d=o(S,d,z),P===null?E=S:P.sibling=S,P=S);return Q&&Jt(m,z),E}for(S=r(m,S);z<f.length;z++)M=w(S,m,z,f[z],k),M!==null&&(e&&M.alternate!==null&&S.delete(M.key===null?z:M.key),d=o(M,d,z),P===null?E=M:P.sibling=M,P=M);return e&&S.forEach(function(H){return t(m,H)}),Q&&Jt(m,z),E}function y(m,d,f,k){var E=dr(f);if(typeof E!="function")throw Error(b(150));if(f=E.call(f),f==null)throw Error(b(151));for(var P=E=null,S=d,z=d=0,M=null,I=f.next();S!==null&&!I.done;z++,I=f.next()){S.index>z?(M=S,S=null):M=S.sibling;var H=v(m,S,I.value,k);if(H===null){S===null&&(S=M);break}e&&S&&H.alternate===null&&t(m,S),d=o(H,d,z),P===null?E=H:P.sibling=H,P=H,S=M}if(I.done)return n(m,S),Q&&Jt(m,z),E;if(S===null){for(;!I.done;z++,I=f.next())I=g(m,I.value,k),I!==null&&(d=o(I,d,z),P===null?E=I:P.sibling=I,P=I);return Q&&Jt(m,z),E}for(S=r(m,S);!I.done;z++,I=f.next())I=w(S,m,z,I.value,k),I!==null&&(e&&I.alternate!==null&&S.delete(I.key===null?z:I.key),d=o(I,d,z),P===null?E=I:P.sibling=I,P=I);return e&&S.forEach(function(fe){return t(m,fe)}),Q&&Jt(m,z),E}function j(m,d,f,k){if(typeof f=="object"&&f!==null&&f.type===Pn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case hi:e:{for(var E=f.key,P=d;P!==null;){if(P.key===E){if(E=f.type,E===Pn){if(P.tag===7){n(m,P.sibling),d=i(P,f.props.children),d.return=m,m=d;break e}}else if(P.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===jt&&Au(E)===P.type){n(m,P.sibling),d=i(P,f.props),d.ref=gr(m,P,f),d.return=m,m=d;break e}n(m,P);break}else t(m,P);P=P.sibling}f.type===Pn?(d=an(f.props.children,m.mode,k,f.key),d.return=m,m=d):(k=Qi(f.type,f.key,f.props,null,m.mode,k),k.ref=gr(m,d,f),k.return=m,m=k)}return l(m);case En:e:{for(P=f.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(m,d.sibling),d=i(d,f.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=_l(f,m.mode,k),d.return=m,m=d}return l(m);case jt:return P=f._init,j(m,d,P(f._payload),k)}if(wr(f))return x(m,d,f,k);if(dr(f))return y(m,d,f,k);Pi(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,f),d.return=m,m=d):(n(m,d),d=zl(f,m.mode,k),d.return=m,m=d),l(m)):n(m,d)}return j}var Yn=cf(!0),df=cf(!1),po=Vt(null),mo=null,Rn=null,Cs=null;function js(){Cs=Rn=mo=null}function Es(e){var t=po.current;G(po),e._currentValue=t}function wa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Wn(e,t){mo=e,Cs=Rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Cs!==e)if(e={context:e,memoizedValue:t,next:null},Rn===null){if(mo===null)throw Error(b(308));Rn=e,mo.dependencies={lanes:0,firstContext:e}}else Rn=Rn.next=e;return t}var nn=null;function Ps(e){nn===null?nn=[e]:nn.push(e)}function ff(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ps(t)):(n.next=i.next,i.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Et=!1;function bs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,yt(e,n)}return i=r.interleaved,i===null?(t.next=t,Ps(r)):(t.next=i.next,i.next=t),r.interleaved=t,yt(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}function Du(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ho(e,t,n,r){var i=e.updateQueue;Et=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;l=0,h=c=u=null,s=o;do{var v=s.lane,w=s.eventTime;if((r&v)===v){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,y=s;switch(v=t,w=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){g=x.call(w,g,v);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,v=typeof x=="function"?x.call(w,g,v):x,v==null)break e;g=K({},g,v);break e;case 2:Et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[s]:v.push(s))}else w={eventTime:w,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=w,u=g):h=h.next=w,l|=v;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;v=s,s=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);if(h===null&&(u=g),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);dn|=l,e.lanes=l,e.memoizedState=g}}function Bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var ai={},at=Vt(ai),Vr=Vt(ai),Gr=Vt(ai);function rn(e){if(e===ai)throw Error(b(174));return e}function zs(e,t){switch(U(Gr,t),U(Vr,e),U(at,ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ea(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ea(t,e)}G(at),U(at,t)}function Kn(){G(at),G(Vr),G(Gr)}function mf(e){rn(Gr.current);var t=rn(at.current),n=ea(t,e.type);t!==n&&(U(Vr,e),U(at,n))}function _s(e){Vr.current===e&&(G(at),G(Vr))}var q=Vt(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sl=[];function Is(){for(var e=0;e<Sl.length;e++)Sl[e]._workInProgressVersionPrimary=null;Sl.length=0}var Ui=wt.ReactCurrentDispatcher,Cl=wt.ReactCurrentBatchConfig,cn=0,Y=null,re=null,le=null,vo=!1,_r=!1,Qr=0,Kh=0;function pe(){throw Error(b(321))}function Ns(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nt(e[n],t[n]))return!1;return!0}function Ls(e,t,n,r,i,o){if(cn=o,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?e0:t0,e=n(r,i),_r){o=0;do{if(_r=!1,Qr=0,25<=o)throw Error(b(301));o+=1,le=re=null,t.updateQueue=null,Ui.current=n0,e=n(r,i)}while(_r)}if(Ui.current=yo,t=re!==null&&re.next!==null,cn=0,le=re=Y=null,vo=!1,t)throw Error(b(300));return e}function Ts(){var e=Qr!==0;return Qr=0,e}function it(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?Y.memoizedState=le=e:le=le.next=e,le}function He(){if(re===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=le===null?Y.memoizedState:le.next;if(t!==null)le=t,re=e;else{if(e===null)throw Error(b(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},le===null?Y.memoizedState=le=e:le=le.next=e}return le}function qr(e,t){return typeof t=="function"?t(e):t}function jl(e){var t=He(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var s=l=null,u=null,c=o;do{var h=c.lane;if((cn&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,l=r):u=u.next=g,Y.lanes|=h,dn|=h}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=s,nt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Y.lanes|=o,dn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function El(e){var t=He(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);nt(o,t.memoizedState)||(je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function hf(){}function gf(e,t){var n=Y,r=He(),i=t(),o=!nt(r.memoizedState,i);if(o&&(r.memoizedState=i,je=!0),r=r.queue,Rs(xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,Yr(9,yf.bind(null,n,r,i,t),void 0,null),ae===null)throw Error(b(349));cn&30||vf(n,t,i)}return i}function vf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yf(e,t,n,r){t.value=n,t.getSnapshot=r,wf(t)&&kf(e)}function xf(e,t,n){return n(function(){wf(t)&&kf(e)})}function wf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nt(e,n)}catch{return!0}}function kf(e){var t=yt(e,1);t!==null&&et(t,e,1,-1)}function Uu(e){var t=it();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qr,lastRenderedState:e},t.queue=e,e=e.dispatch=Jh.bind(null,Y,e),[t.memoizedState,e]}function Yr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sf(){return He().memoizedState}function Hi(e,t,n,r){var i=it();Y.flags|=e,i.memoizedState=Yr(1|t,n,void 0,r===void 0?null:r)}function Oo(e,t,n,r){var i=He();r=r===void 0?null:r;var o=void 0;if(re!==null){var l=re.memoizedState;if(o=l.destroy,r!==null&&Ns(r,l.deps)){i.memoizedState=Yr(t,n,o,r);return}}Y.flags|=e,i.memoizedState=Yr(1|t,n,o,r)}function Hu(e,t){return Hi(8390656,8,e,t)}function Rs(e,t){return Oo(2048,8,e,t)}function Cf(e,t){return Oo(4,2,e,t)}function jf(e,t){return Oo(4,4,e,t)}function Ef(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pf(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4,4,Ef.bind(null,t,e),n)}function Ms(){}function bf(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zf(e,t){var n=He();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ns(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _f(e,t,n){return cn&21?(nt(n,t)||(n=Td(),Y.lanes|=n,dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Xh(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Cl.transition;Cl.transition={};try{e(!1),t()}finally{A=n,Cl.transition=r}}function If(){return He().memoizedState}function Zh(e,t,n){var r=Ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Nf(e))Lf(t,n);else if(n=ff(e,t,n,r),n!==null){var i=we();et(n,e,r,i),Tf(n,t,r)}}function Jh(e,t,n){var r=Ft(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nf(e))Lf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,n);if(i.hasEagerState=!0,i.eagerState=s,nt(s,l)){var u=t.interleaved;u===null?(i.next=i,Ps(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=ff(e,t,i,r),n!==null&&(i=we(),et(n,e,r,i),Tf(n,t,r))}}function Nf(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Lf(e,t){_r=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Tf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fs(e,n)}}var yo={readContext:Ue,useCallback:pe,useContext:pe,useEffect:pe,useImperativeHandle:pe,useInsertionEffect:pe,useLayoutEffect:pe,useMemo:pe,useReducer:pe,useRef:pe,useState:pe,useDebugValue:pe,useDeferredValue:pe,useTransition:pe,useMutableSource:pe,useSyncExternalStore:pe,useId:pe,unstable_isNewReconciler:!1},e0={readContext:Ue,useCallback:function(e,t){return it().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Hu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Hi(4194308,4,Ef.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Hi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Hi(4,2,e,t)},useMemo:function(e,t){var n=it();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=it();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Zh.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=it();return e={current:e},t.memoizedState=e},useState:Uu,useDebugValue:Ms,useDeferredValue:function(e){return it().memoizedState=e},useTransition:function(){var e=Uu(!1),t=e[0];return e=Xh.bind(null,e[1]),it().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,i=it();if(Q){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),ae===null)throw Error(b(349));cn&30||vf(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Hu(xf.bind(null,r,o,e),[e]),r.flags|=2048,Yr(9,yf.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=it(),t=ae.identifierPrefix;if(Q){var n=pt,r=ft;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},t0={readContext:Ue,useCallback:bf,useContext:Ue,useEffect:Rs,useImperativeHandle:Pf,useInsertionEffect:Cf,useLayoutEffect:jf,useMemo:zf,useReducer:jl,useRef:Sf,useState:function(){return jl(qr)},useDebugValue:Ms,useDeferredValue:function(e){var t=He();return _f(t,re.memoizedState,e)},useTransition:function(){var e=jl(qr)[0],t=He().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:gf,useId:If,unstable_isNewReconciler:!1},n0={readContext:Ue,useCallback:bf,useContext:Ue,useEffect:Rs,useImperativeHandle:Pf,useInsertionEffect:Cf,useLayoutEffect:jf,useMemo:zf,useReducer:El,useRef:Sf,useState:function(){return El(qr)},useDebugValue:Ms,useDeferredValue:function(e){var t=He();return re===null?t.memoizedState=e:_f(t,re.memoizedState,e)},useTransition:function(){var e=El(qr)[0],t=He().memoizedState;return[e,t]},useMutableSource:hf,useSyncExternalStore:gf,useId:If,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ka(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fo={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=we(),i=Ft(e),o=mt(r,i);o.payload=t,n!=null&&(o.callback=n),t=$t(e,o,i),t!==null&&(et(t,e,i,r),Bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=we(),i=Ft(e),o=mt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=$t(e,o,i),t!==null&&(et(t,e,i,r),Bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=we(),r=Ft(e),i=mt(n,r);i.tag=2,t!=null&&(i.callback=t),t=$t(e,i,r),t!==null&&(et(t,e,r,n),Bi(t,e,r))}};function Wu(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Br(n,r)||!Br(i,o):!0}function Rf(e,t,n){var r=!1,i=Ht,o=t.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=Pe(t)?sn:ve.current,r=t.contextTypes,o=(r=r!=null)?Qn(e,i):Ht),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fo.enqueueReplaceState(t,t.state,null)}function Sa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bs(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=Pe(t)?sn:ve.current,i.context=Qn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ka(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fo.enqueueReplaceState(i,i.state,null),ho(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=Im(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Pl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ca(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var r0=typeof WeakMap=="function"?WeakMap:Map;function Mf(e,t,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){wo||(wo=!0,Ta=r),Ca(e,t)},n}function $f(e,t,n){n=mt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ca(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ca(e,t),typeof r!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new r0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=v0.bind(null,e,t,n),t.then(e,e))}function Qu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=mt(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e)}var i0=wt.ReactCurrentOwner,je=!1;function xe(e,t,n,r){t.child=e===null?df(t,null,n,r):Yn(t,e.child,n,r)}function Yu(e,t,n,r,i){n=n.render;var o=t.ref;return Wn(t,i),r=Ls(e,t,n,r,o,i),n=Ts(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(Q&&n&&ws(t),t.flags|=1,xe(e,t,r,i),t.child)}function Ku(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Hs(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Of(e,t,o,r,i)):(e=Qi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Br,n(l,r)&&e.ref===t.ref)return xt(e,t,i)}return t.flags|=1,e=At(o,r),e.ref=t.ref,e.return=t,t.child=e}function Of(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Br(o,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,xt(e,t,i)}return ja(e,t,n,r,i)}function Ff(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U($n,Ne),Ne|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U($n,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,U($n,Ne),Ne|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,U($n,Ne),Ne|=r;return xe(e,t,i,n),t.child}function Af(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ja(e,t,n,r,i){var o=Pe(n)?sn:ve.current;return o=Qn(t,o),Wn(t,i),n=Ls(e,t,n,r,o,i),r=Ts(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,xt(e,t,i)):(Q&&r&&ws(t),t.flags|=1,xe(e,t,n,i),t.child)}function Xu(e,t,n,r,i){if(Pe(n)){var o=!0;uo(t)}else o=!1;if(Wn(t,i),t.stateNode===null)Wi(e,t),Rf(t,n,r),Sa(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Pe(n)?sn:ve.current,c=Qn(t,c));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Vu(t,l,r,c),Et=!1;var v=t.memoizedState;l.state=v,ho(t,r,l,i),u=t.memoizedState,s!==r||v!==u||Ee.current||Et?(typeof h=="function"&&(ka(t,n,h,r),u=t.memoizedState),(s=Et||Wu(t,n,s,r,v,u,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,pf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Ye(t.type,s),l.props=c,g=t.pendingProps,v=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ue(u):(u=Pe(n)?sn:ve.current,u=Qn(t,u));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||v!==u)&&Vu(t,l,r,u),Et=!1,v=t.memoizedState,l.state=v,ho(t,r,l,i);var x=t.memoizedState;s!==g||v!==x||Ee.current||Et?(typeof w=="function"&&(ka(t,n,w,r),x=t.memoizedState),(c=Et||Wu(t,n,c,r,v,x,u)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ea(e,t,n,r,o,i)}function Ea(e,t,n,r,i,o){Af(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&$u(t,n,!1),xt(e,t,o);r=t.stateNode,i0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Yn(t,e.child,null,o),t.child=Yn(t,null,s,o)):xe(e,t,s,o),t.memoizedState=r.state,i&&$u(t,n,!0),t.child}function Df(e){var t=e.stateNode;t.pendingContext?Mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mu(e,t.context,!1),zs(e,t.containerInfo)}function Zu(e,t,n,r,i){return qn(),Ss(i),t.flags|=256,xe(e,t,n,r),t.child}var Pa={dehydrated:null,treeContext:null,retryLane:0};function ba(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bf(e,t,n){var r=t.pendingProps,i=q.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(q,i&1),e===null)return xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Bo(l,r,0,null),e=an(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ba(n),t.memoizedState=Pa,e):$s(t,l));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return o0(e,t,l,r,s,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,s=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=At(i,u),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?o=At(s,o):(o=an(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ba(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Pa,r}return o=e.child,e=o.sibling,r=At(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $s(e,t){return t=Bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function bi(e,t,n,r){return r!==null&&Ss(r),Yn(t,e.child,null,n),e=$s(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Pl(Error(b(422))),bi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Bo({mode:"visible",children:r.children},i,0,null),o=an(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Yn(t,e.child,null,l),t.child.memoizedState=ba(l),t.memoizedState=Pa,o);if(!(t.mode&1))return bi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(b(419)),r=Pl(o,r,void 0),bi(e,t,l,r)}if(s=(l&e.childLanes)!==0,je||s){if(r=ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,yt(e,i),et(r,e,i,-1))}return Us(),r=Pl(Error(b(421))),bi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=y0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Le=Mt(i.nextSibling),Te=t,Q=!0,Ze=null,e!==null&&(Fe[Ae++]=ft,Fe[Ae++]=pt,Fe[Ae++]=un,ft=e.id,pt=e.overflow,un=t),t=$s(t,r.children),t.flags|=4096,t)}function Ju(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),wa(e.return,t,n)}function bl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Uf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(xe(e,t,r.children,n),r=q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ju(e,n,t);else if(e.tag===19)Ju(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bl(t,!0,n,null,o);break;case"together":bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Wi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function xt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function l0(e,t,n){switch(t.tag){case 3:Df(t),qn();break;case 5:mf(t);break;case 1:Pe(t.type)&&uo(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(po,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?Bf(e,t,n):(U(q,q.current&1),e=xt(e,t,n),e!==null?e.sibling:null);U(q,q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Uf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(q,q.current),r)break;return null;case 22:case 23:return t.lanes=0,Ff(e,t,n)}return xt(e,t,n)}var Hf,za,Wf,Vf;Hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};za=function(){};Wf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,rn(at.current);var o=null;switch(n){case"input":i=Kl(e,i),r=Kl(e,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ao)}ta(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&W("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function vr(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function me(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function a0(e,t,n){var r=t.pendingProps;switch(ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return me(t),null;case 1:return Pe(t.type)&&so(),me(t),null;case 3:return r=t.stateNode,Kn(),G(Ee),G(ve),Is(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ze!==null&&($a(Ze),Ze=null))),za(e,t),me(t),null;case 5:_s(t);var i=rn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Wf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return me(t),null}if(e=rn(at.current),Ei(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ot]=t,r[Wr]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Sr.length;i++)W(Sr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":su(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":cu(r,o),W("invalid",r)}ta(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ji(r.textContent,s,e),i=["children",""+s]):Rr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",r)}switch(n){case"input":gi(r),uu(r,o,!0);break;case"textarea":gi(r),du(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[ot]=t,e[Wr]=r,Hf(e,t,!1,!1),t.stateNode=e;e:{switch(l=na(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Sr.length;i++)W(Sr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":su(e,r),i=Kl(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":cu(e,r),i=Jl(e,r),W("invalid",e);break;default:i=r}ta(n,i),s=i;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?kd(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xd(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Mr(e,u):typeof u=="number"&&Mr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Rr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&W("scroll",e):u!=null&&ls(e,o,u,l))}switch(n){case"input":gi(e),uu(e,r,!1);break;case"textarea":gi(e),du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return me(t),null;case 6:if(e&&t.stateNode!=null)Vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=rn(Gr.current),rn(at.current),Ei(t)){if(r=t.stateNode,n=t.memoizedProps,r[ot]=t,(o=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:ji(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ji(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r}return me(t),null;case 13:if(G(q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Le!==null&&t.mode&1&&!(t.flags&128))uf(),qn(),t.flags|=98560,o=!1;else if(o=Ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[ot]=t}else qn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;me(t),o=!1}else Ze!==null&&($a(Ze),Ze=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?oe===0&&(oe=3):Us())),t.updateQueue!==null&&(t.flags|=4),me(t),null);case 4:return Kn(),za(e,t),e===null&&Ur(t.stateNode.containerInfo),me(t),null;case 10:return Es(t.type._context),me(t),null;case 17:return Pe(t.type)&&so(),me(t),null;case 19:if(G(q),o=t.memoizedState,o===null)return me(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)vr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=go(e),l!==null){for(t.flags|=128,vr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(q,q.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>Zn&&(t.flags|=128,r=!0,vr(o,!1),t.lanes=4194304)}else{if(!r)if(e=go(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!Q)return me(t),null}else 2*J()-o.renderingStartTime>Zn&&n!==1073741824&&(t.flags|=128,r=!0,vr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=q.current,U(q,r?n&1|2:n&1),t):(me(t),null);case 22:case 23:return Bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(me(t),t.subtreeFlags&6&&(t.flags|=8192)):me(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function s0(e,t){switch(ks(t),t.tag){case 1:return Pe(t.type)&&so(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Kn(),G(Ee),G(ve),Is(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return _s(t),null;case 13:if(G(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));qn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(q),null;case 4:return Kn(),null;case 10:return Es(t.type._context),null;case 22:case 23:return Bs(),null;case 24:return null;default:return null}}var zi=!1,he=!1,u0=typeof WeakSet=="function"?WeakSet:Set,N=null;function Mn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function _a(e,t,n){try{n()}catch(r){X(e,t,r)}}var ec=!1;function c0(e,t){if(fa=io,e=Yd(),xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,h=0,g=e,v=null;t:for(;;){for(var w;g!==n||i!==0&&g.nodeType!==3||(s=l+i),g!==o||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(w=g.firstChild)!==null;)v=g,g=w;for(;;){if(g===e)break t;if(v===n&&++c===i&&(s=l),v===o&&++h===r&&(u=l),(w=g.nextSibling)!==null)break;g=v,v=g.parentNode}g=w}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(pa={focusedElem:e,selectionRange:n},io=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,j=x.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ye(t.type,y),j);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(k){X(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return x=ec,ec=!1,x}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_a(t,n,o)}i=i.next}while(i!==r)}}function Ao(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ia(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Gf(e){var t=e.alternate;t!==null&&(e.alternate=null,Gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[Wr],delete t[ga],delete t[Gh],delete t[Qh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qf(e){return e.tag===5||e.tag===3||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Na(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ao));else if(r!==4&&(e=e.child,e!==null))for(Na(e,t,n),e=e.sibling;e!==null;)Na(e,t,n),e=e.sibling}function La(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(La(e,t,n),e=e.sibling;e!==null;)La(e,t,n),e=e.sibling}var se=null,Ke=!1;function kt(e,t,n){for(n=n.child;n!==null;)qf(e,t,n),n=n.sibling}function qf(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(No,n)}catch{}switch(n.tag){case 5:he||Mn(n,t);case 6:var r=se,i=Ke;se=null,kt(e,t,n),se=r,Ke=i,se!==null&&(Ke?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(Ke?(e=se,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),Ar(e)):wl(se,n.stateNode));break;case 4:r=se,i=Ke,se=n.stateNode.containerInfo,Ke=!0,kt(e,t,n),se=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&_a(n,t,l),i=i.next}while(i!==r)}kt(e,t,n);break;case 1:if(!he&&(Mn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}kt(e,t,n);break;case 21:kt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,kt(e,t,n),he=r):kt(e,t,n);break;default:kt(e,t,n)}}function nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new u0),t.forEach(function(r){var i=x0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,Ke=!1;break e;case 3:se=s.stateNode.containerInfo,Ke=!0;break e;case 4:se=s.stateNode.containerInfo,Ke=!0;break e}s=s.return}if(se===null)throw Error(b(160));qf(o,l,i),se=null,Ke=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){X(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Yf(t,e),t=t.sibling}function Yf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),rt(e),r&4){try{Ir(3,e,e.return),Ao(3,e)}catch(y){X(e,e.return,y)}try{Ir(5,e,e.return)}catch(y){X(e,e.return,y)}}break;case 1:qe(t,e),rt(e),r&512&&n!==null&&Mn(n,n.return);break;case 5:if(qe(t,e),rt(e),r&512&&n!==null&&Mn(n,n.return),e.flags&32){var i=e.stateNode;try{Mr(i,"")}catch(y){X(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&gd(i,o),na(s,l);var c=na(s,o);for(l=0;l<u.length;l+=2){var h=u[l],g=u[l+1];h==="style"?kd(i,g):h==="dangerouslySetInnerHTML"?xd(i,g):h==="children"?Mr(i,g):ls(i,h,g,c)}switch(s){case"input":Xl(i,o);break;case"textarea":vd(i,o);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Dn(i,!!o.multiple,w,!1):v!==!!o.multiple&&(o.defaultValue!=null?Dn(i,!!o.multiple,o.defaultValue,!0):Dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wr]=o}catch(y){X(e,e.return,y)}}break;case 6:if(qe(t,e),rt(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){X(e,e.return,y)}}break;case 3:if(qe(t,e),rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(t.containerInfo)}catch(y){X(e,e.return,y)}break;case 4:qe(t,e),rt(e);break;case 13:qe(t,e),rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(As=J())),r&4&&nc(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||h,qe(t,e),he=c):qe(t,e),rt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(N=e,h=e.child;h!==null;){for(g=N=h;N!==null;){switch(v=N,w=v.child,v.tag){case 0:case 11:case 14:case 15:Ir(4,v,v.return);break;case 1:Mn(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){X(r,n,y)}}break;case 5:Mn(v,v.return);break;case 22:if(v.memoizedState!==null){ic(g);continue}}w!==null?(w.return=v,N=w):ic(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{i=g.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=wd("display",l))}catch(y){X(e,e.return,y)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(y){X(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:qe(t,e),rt(e),r&4&&nc(e);break;case 21:break;default:qe(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Qf(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mr(i,""),r.flags&=-33);var o=tc(e);La(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,s=tc(e);Na(e,s,l);break;default:throw Error(b(161))}}catch(u){X(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function d0(e,t,n){N=e,Kf(e)}function Kf(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||zi;if(!l){var s=i.alternate,u=s!==null&&s.memoizedState!==null||he;s=zi;var c=he;if(zi=l,(he=u)&&!c)for(N=i;N!==null;)l=N,u=l.child,l.tag===22&&l.memoizedState!==null?oc(i):u!==null?(u.return=l,N=u):oc(i);for(;o!==null;)N=o,Kf(o),o=o.sibling;N=i,zi=s,he=c}rc(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,N=o):rc(e)}}function rc(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Ao(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ye(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Bu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Ar(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}he||t.flags&512&&Ia(t)}catch(v){X(t,t.return,v)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function ic(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function oc(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ao(4,t)}catch(u){X(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){X(t,i,u)}}var o=t.return;try{Ia(t)}catch(u){X(t,o,u)}break;case 5:var l=t.return;try{Ia(t)}catch(u){X(t,l,u)}}}catch(u){X(t,t.return,u)}if(t===e){N=null;break}var s=t.sibling;if(s!==null){s.return=t.return,N=s;break}N=t.return}}var f0=Math.ceil,xo=wt.ReactCurrentDispatcher,Os=wt.ReactCurrentOwner,Be=wt.ReactCurrentBatchConfig,O=0,ae=null,te=null,ce=0,Ne=0,$n=Vt(0),oe=0,Kr=null,dn=0,Do=0,Fs=0,Nr=null,Ce=null,As=0,Zn=1/0,ut=null,wo=!1,Ta=null,Ot=null,_i=!1,_t=null,ko=0,Lr=0,Ra=null,Vi=-1,Gi=0;function we(){return O&6?J():Vi!==-1?Vi:Vi=J()}function Ft(e){return e.mode&1?O&2&&ce!==0?ce&-ce:Yh.transition!==null?(Gi===0&&(Gi=Td()),Gi):(e=A,e!==0||(e=window.event,e=e===void 0?16:Dd(e.type)),e):1}function et(e,t,n,r){if(50<Lr)throw Lr=0,Ra=null,Error(b(185));ii(e,n,r),(!(O&2)||e!==ae)&&(e===ae&&(!(O&2)&&(Do|=n),oe===4&&bt(e,ce)),be(e,r),n===1&&O===0&&!(t.mode&1)&&(Zn=J()+500,$o&&Gt()))}function be(e,t){var n=e.callbackNode;Ym(e,t);var r=ro(e,e===ae?ce:0);if(r===0)n!==null&&mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mu(n),t===1)e.tag===0?qh(lc.bind(null,e)):lf(lc.bind(null,e)),Wh(function(){!(O&6)&&Gt()}),n=null;else{switch(Rd(r)){case 1:n=ds;break;case 4:n=Nd;break;case 16:n=no;break;case 536870912:n=Ld;break;default:n=no}n=ip(n,Xf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Xf(e,t){if(Vi=-1,Gi=0,O&6)throw Error(b(327));var n=e.callbackNode;if(Vn()&&e.callbackNode!==n)return null;var r=ro(e,e===ae?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=So(e,r);else{t=r;var i=O;O|=2;var o=Jf();(ae!==e||ce!==t)&&(ut=null,Zn=J()+500,ln(e,t));do try{h0();break}catch(s){Zf(e,s)}while(!0);js(),xo.current=o,O=i,te!==null?t=0:(ae=null,ce=0,t=oe)}if(t!==0){if(t===2&&(i=aa(e),i!==0&&(r=i,t=Ma(e,i))),t===1)throw n=Kr,ln(e,0),bt(e,r),be(e,J()),n;if(t===6)bt(e,r);else{if(i=e.current.alternate,!(r&30)&&!p0(i)&&(t=So(e,r),t===2&&(o=aa(e),o!==0&&(r=o,t=Ma(e,o))),t===1))throw n=Kr,ln(e,0),bt(e,r),be(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:en(e,Ce,ut);break;case 3:if(bt(e,r),(r&130023424)===r&&(t=As+500-J(),10<t)){if(ro(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){we(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ha(en.bind(null,e,Ce,ut),t);break}en(e,Ce,ut);break;case 4:if(bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Je(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*f0(r/1960))-r,10<r){e.timeoutHandle=ha(en.bind(null,e,Ce,ut),r);break}en(e,Ce,ut);break;case 5:en(e,Ce,ut);break;default:throw Error(b(329))}}}return be(e,J()),e.callbackNode===n?Xf.bind(null,e):null}function Ma(e,t){var n=Nr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=So(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&$a(t)),e}function $a(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function p0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!nt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bt(e,t){for(t&=~Fs,t&=~Do,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if(O&6)throw Error(b(327));Vn();var t=ro(e,0);if(!(t&1))return be(e,J()),null;var n=So(e,t);if(e.tag!==0&&n===2){var r=aa(e);r!==0&&(t=r,n=Ma(e,r))}if(n===1)throw n=Kr,ln(e,0),bt(e,t),be(e,J()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,Ce,ut),be(e,J()),null}function Ds(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(Zn=J()+500,$o&&Gt())}}function fn(e){_t!==null&&_t.tag===0&&!(O&6)&&Vn();var t=O;O|=1;var n=Be.transition,r=A;try{if(Be.transition=null,A=1,e)return e()}finally{A=r,Be.transition=n,O=t,!(O&6)&&Gt()}}function Bs(){Ne=$n.current,G($n)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Hh(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:Kn(),G(Ee),G(ve),Is();break;case 5:_s(r);break;case 4:Kn();break;case 13:G(q);break;case 19:G(q);break;case 10:Es(r.type._context);break;case 22:case 23:Bs()}n=n.return}if(ae=e,te=e=At(e.current,null),ce=Ne=t,oe=0,Kr=null,Fs=Do=dn=0,Ce=Nr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}nn=null}return e}function Zf(e,t){do{var n=te;try{if(js(),Ui.current=yo,vo){for(var r=Y.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vo=!1}if(cn=0,le=re=Y=null,_r=!1,Qr=0,Os.current=null,n===null||n.return===null){oe=1,Kr=t,te=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=ce,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=Qu(l);if(w!==null){w.flags&=-257,qu(w,l,s,o,t),w.mode&1&&Gu(o,c,t),t=w,u=c;var x=t.updateQueue;if(x===null){var y=new Set;y.add(u),t.updateQueue=y}else x.add(u);break e}else{if(!(t&1)){Gu(o,c,t),Us();break e}u=Error(b(426))}}else if(Q&&s.mode&1){var j=Qu(l);if(j!==null){!(j.flags&65536)&&(j.flags|=256),qu(j,l,s,o,t),Ss(Xn(u,s));break e}}o=u=Xn(u,s),oe!==4&&(oe=2),Nr===null?Nr=[o]:Nr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Mf(o,u,t);Du(o,m);break e;case 1:s=u;var d=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ot===null||!Ot.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=$f(o,s,t);Du(o,k);break e}}o=o.return}while(o!==null)}tp(n)}catch(E){t=E,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function Jf(){var e=xo.current;return xo.current=yo,e===null?yo:e}function Us(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(dn&268435455)&&!(Do&268435455)||bt(ae,ce)}function So(e,t){var n=O;O|=2;var r=Jf();(ae!==e||ce!==t)&&(ut=null,ln(e,t));do try{m0();break}catch(i){Zf(e,i)}while(!0);if(js(),O=n,xo.current=r,te!==null)throw Error(b(261));return ae=null,ce=0,oe}function m0(){for(;te!==null;)ep(te)}function h0(){for(;te!==null&&!Dm();)ep(te)}function ep(e){var t=rp(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?tp(e):te=t,Os.current=null}function tp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=s0(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,te=null;return}}else if(n=a0(n,t,Ne),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);oe===0&&(oe=5)}function en(e,t,n){var r=A,i=Be.transition;try{Be.transition=null,A=1,g0(e,t,n,r)}finally{Be.transition=i,A=r}return null}function g0(e,t,n,r){do Vn();while(_t!==null);if(O&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Km(e,o),e===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_i||(_i=!0,ip(no,function(){return Vn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Be.transition,Be.transition=null;var l=A;A=1;var s=O;O|=4,Os.current=null,c0(e,n),Yf(n,e),$h(pa),io=!!fa,pa=fa=null,e.current=n,d0(n),Bm(),O=s,A=l,Be.transition=o}else e.current=n;if(_i&&(_i=!1,_t=e,ko=i),o=e.pendingLanes,o===0&&(Ot=null),Wm(n.stateNode),be(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wo)throw wo=!1,e=Ta,Ta=null,e;return ko&1&&e.tag!==0&&Vn(),o=e.pendingLanes,o&1?e===Ra?Lr++:(Lr=0,Ra=e):Lr=0,Gt(),null}function Vn(){if(_t!==null){var e=Rd(ko),t=Be.transition,n=A;try{if(Be.transition=null,A=16>e?16:e,_t===null)var r=!1;else{if(e=_t,_t=null,ko=0,O&6)throw Error(b(331));var i=O;for(O|=4,N=e.current;N!==null;){var o=N,l=o.child;if(N.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(N=c;N!==null;){var h=N;switch(h.tag){case 0:case 11:case 15:Ir(8,h,o)}var g=h.child;if(g!==null)g.return=h,N=g;else for(;N!==null;){h=N;var v=h.sibling,w=h.return;if(Gf(h),h===c){N=null;break}if(v!==null){v.return=w,N=v;break}N=w}}}var x=o.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var j=y.sibling;y.sibling=null,y=j}while(y!==null)}}N=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,N=l;else e:for(;N!==null;){if(o=N,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ir(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,N=m;break e}N=o.return}}var d=e.current;for(N=d;N!==null;){l=N;var f=l.child;if(l.subtreeFlags&2064&&f!==null)f.return=l,N=f;else e:for(l=d;N!==null;){if(s=N,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Ao(9,s)}}catch(E){X(s,s.return,E)}if(s===l){N=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,N=k;break e}N=s.return}}if(O=i,Gt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(No,e)}catch{}r=!0}return r}finally{A=n,Be.transition=t}}return!1}function ac(e,t,n){t=Xn(n,t),t=Mf(e,t,1),e=$t(e,t,1),t=we(),e!==null&&(ii(e,1,t),be(e,t))}function X(e,t,n){if(e.tag===3)ac(e,e,n);else for(;t!==null;){if(t.tag===3){ac(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Xn(n,e),e=$f(t,e,1),t=$t(t,e,1),e=we(),t!==null&&(ii(t,1,e),be(t,e));break}}t=t.return}}function v0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&n,ae===e&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>J()-As?ln(e,0):Fs|=n),be(e,t)}function np(e,t){t===0&&(e.mode&1?(t=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):t=1);var n=we();e=yt(e,t),e!==null&&(ii(e,t,n),be(e,n))}function y0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),np(e,n)}function x0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),np(e,n)}var rp;rp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,l0(e,t,n);je=!!(e.flags&131072)}else je=!1,Q&&t.flags&1048576&&af(t,fo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Wi(e,t),e=t.pendingProps;var i=Qn(t,ve.current);Wn(t,n),i=Ls(null,t,r,e,i,n);var o=Ts();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(o=!0,uo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bs(t),i.updater=Fo,t.stateNode=i,i._reactInternals=t,Sa(t,r,e,n),t=Ea(null,t,r,!0,o,n)):(t.tag=0,Q&&o&&ws(t),xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Wi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=k0(r),e=Ye(r,e),i){case 0:t=ja(null,t,r,e,n);break e;case 1:t=Xu(null,t,r,e,n);break e;case 11:t=Yu(null,t,r,e,n);break e;case 14:t=Ku(null,t,r,Ye(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),ja(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Xu(e,t,r,i,n);case 3:e:{if(Df(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,pf(e,t),ho(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Xn(Error(b(423)),t),t=Zu(e,t,r,n,i);break e}else if(r!==i){i=Xn(Error(b(424)),t),t=Zu(e,t,r,n,i);break e}else for(Le=Mt(t.stateNode.containerInfo.firstChild),Te=t,Q=!0,Ze=null,n=df(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qn(),r===i){t=xt(e,t,n);break e}xe(e,t,r,n)}t=t.child}return t;case 5:return mf(t),e===null&&xa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ma(r,i)?l=null:o!==null&&ma(r,o)&&(t.flags|=32),Af(e,t),xe(e,t,l,n),t.child;case 6:return e===null&&xa(t),null;case 13:return Bf(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Yn(t,null,r,n):xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Yu(e,t,r,i,n);case 7:return xe(e,t,t.pendingProps,n),t.child;case 8:return xe(e,t,t.pendingProps.children,n),t.child;case 12:return xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,U(po,r._currentValue),r._currentValue=l,o!==null)if(nt(o.value,l)){if(o.children===i.children&&!Ee.current){t=xt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=mt(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),wa(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(b(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),wa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Wn(t,n),i=Ue(i),r=r(i),t.flags|=1,xe(e,t,r,n),t.child;case 14:return r=t.type,i=Ye(r,t.pendingProps),i=Ye(r.type,i),Ku(e,t,r,i,n);case 15:return Of(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ye(r,i),Wi(e,t),t.tag=1,Pe(r)?(e=!0,uo(t)):e=!1,Wn(t,n),Rf(t,r,i),Sa(t,r,i,n),Ea(null,t,r,!0,e,n);case 19:return Uf(e,t,n);case 22:return Ff(e,t,n)}throw Error(b(156,t.tag))};function ip(e,t){return Id(e,t)}function w0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new w0(e,t,n,r)}function Hs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function k0(e){if(typeof e=="function")return Hs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ss)return 11;if(e===us)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Hs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Pn:return an(n.children,i,o,t);case as:l=8,i|=8;break;case Gl:return e=De(12,n,t,i|2),e.elementType=Gl,e.lanes=o,e;case Ql:return e=De(13,n,t,i),e.elementType=Ql,e.lanes=o,e;case ql:return e=De(19,n,t,i),e.elementType=ql,e.lanes=o,e;case pd:return Bo(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case dd:l=10;break e;case fd:l=9;break e;case ss:l=11;break e;case us:l=14;break e;case jt:l=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=De(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function an(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Bo(e,t,n,r){return e=De(22,e,r,t),e.elementType=pd,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function _l(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function S0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ws(e,t,n,r,i,o,l,s,u){return e=new S0(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bs(o),e}function C0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function op(e){if(!e)return Ht;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Pe(n))return of(e,n,t)}return t}function lp(e,t,n,r,i,o,l,s,u){return e=Ws(n,r,!0,e,i,o,l,s,u),e.context=op(null),n=e.current,r=we(),i=Ft(n),o=mt(r,i),o.callback=t??null,$t(n,o,i),e.current.lanes=i,ii(e,i,r),be(e,r),e}function Uo(e,t,n,r){var i=t.current,o=we(),l=Ft(i);return n=op(n),t.context===null?t.context=n:t.pendingContext=n,t=mt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(i,t,l),e!==null&&(et(e,i,l,o),Bi(e,i,l)),l}function Co(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vs(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function j0(){return null}var ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gs(e){this._internalRoot=e}Ho.prototype.render=Gs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));Uo(e,t,null,null)};Ho.prototype.unmount=Gs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Uo(null,e,null,null)}),t[vt]=null}};function Ho(e){this._internalRoot=e}Ho.prototype.unstable_scheduleHydration=function(e){if(e){var t=Od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pt.length&&t!==0&&t<Pt[n].priority;n++);Pt.splice(n,0,e),n===0&&Ad(e)}};function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function uc(){}function E0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Co(l);o.call(c)}}var l=lp(t,r,e,0,null,!1,!1,"",uc);return e._reactRootContainer=l,e[vt]=l.current,Ur(e.nodeType===8?e.parentNode:e),fn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=Co(u);s.call(c)}}var u=Ws(e,0,!1,null,null,!1,!1,"",uc);return e._reactRootContainer=u,e[vt]=u.current,Ur(e.nodeType===8?e.parentNode:e),fn(function(){Uo(t,u,n,r)}),u}function Vo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var s=i;i=function(){var u=Co(l);s.call(u)}}Uo(t,l,e,i)}else l=E0(n,t,e,i,r);return Co(l)}Md=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kr(t.pendingLanes);n!==0&&(fs(t,n|1),be(t,J()),!(O&6)&&(Zn=J()+500,Gt()))}break;case 13:fn(function(){var r=yt(e,1);if(r!==null){var i=we();et(r,e,1,i)}}),Vs(e,1)}};ps=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=we();et(t,e,134217728,n)}Vs(e,134217728)}};$d=function(e){if(e.tag===13){var t=Ft(e),n=yt(e,t);if(n!==null){var r=we();et(n,e,t,r)}Vs(e,t)}};Od=function(){return A};Fd=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};ia=function(e,t,n){switch(t){case"input":if(Xl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Mo(r);if(!i)throw Error(b(90));hd(r),Xl(r,i)}}}break;case"textarea":vd(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};jd=Ds;Ed=fn;var P0={usingClientEntryPoint:!1,Events:[li,In,Mo,Sd,Cd,Ds]},yr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},b0={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zd(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||j0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{No=Ii.inject(b0),lt=Ii}catch{}}Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0;Me.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qs(t))throw Error(b(200));return C0(e,t,null,n)};Me.createRoot=function(e,t){if(!Qs(e))throw Error(b(299));var n=!1,r="",i=ap;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ws(e,1,!1,null,null,n,!1,r,i),e[vt]=t.current,Ur(e.nodeType===8?e.parentNode:e),new Gs(t)};Me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=zd(t),e=e===null?null:e.stateNode,e};Me.flushSync=function(e){return fn(e)};Me.hydrate=function(e,t,n){if(!Wo(t))throw Error(b(200));return Vo(null,e,t,!0,n)};Me.hydrateRoot=function(e,t,n){if(!Qs(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ap;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=lp(t,null,e,1,n??null,i,!1,o,l),e[vt]=t.current,Ur(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ho(t)};Me.render=function(e,t,n){if(!Wo(t))throw Error(b(200));return Vo(null,e,t,!1,n)};Me.unmountComponentAtNode=function(e){if(!Wo(e))throw Error(b(40));return e._reactRootContainer?(fn(function(){Vo(null,null,e,!1,function(){e._reactRootContainer=null,e[vt]=null})}),!0):!1};Me.unstable_batchedUpdates=Ds;Me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wo(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Vo(e,t,n,!1,r)};Me.version="18.3.1-next-f1338f8080-20240426";function sp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sp)}catch(e){console.error(e)}}sp(),ad.exports=Me;var z0=ad.exports,cc=z0;Wl.createRoot=cc.createRoot,Wl.hydrateRoot=cc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xr(){return Xr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xr.apply(this,arguments)}var It;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(It||(It={}));const dc="popstate";function _0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:s}=r.location;return Oa("",{pathname:o,search:l,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:jo(i)}return N0(t,n,null,e)}function Z(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function qs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function I0(){return Math.random().toString(36).substr(2,8)}function fc(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,n,r){return n===void 0&&(n=null),Xr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ar(t):t,{state:n,key:t&&t.key||r||I0()})}function jo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ar(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function N0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,s=It.Pop,u=null,c=h();c==null&&(c=0,l.replaceState(Xr({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function g(){s=It.Pop;let j=h(),m=j==null?null:j-c;c=j,u&&u({action:s,location:y.location,delta:m})}function v(j,m){s=It.Push;let d=Oa(y.location,j,m);c=h()+1;let f=fc(d,c),k=y.createHref(d);try{l.pushState(f,"",k)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(k)}o&&u&&u({action:s,location:y.location,delta:1})}function w(j,m){s=It.Replace;let d=Oa(y.location,j,m);c=h();let f=fc(d,c),k=y.createHref(d);l.replaceState(f,"",k),o&&u&&u({action:s,location:y.location,delta:0})}function x(j){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof j=="string"?j:jo(j);return d=d.replace(/ $/,"%20"),Z(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let y={get action(){return s},get location(){return e(i,l)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(dc,g),u=j,()=>{i.removeEventListener(dc,g),u=null}},createHref(j){return t(i,j)},createURL:x,encodeLocation(j){let m=x(j);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:w,go(j){return l.go(j)}};return y}var pc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(pc||(pc={}));function L0(e,t,n){return n===void 0&&(n="/"),T0(e,t,n)}function T0(e,t,n,r){let i=typeof t=="string"?ar(t):t,o=Jn(i.pathname||"/",n);if(o==null)return null;let l=up(e);R0(l);let s=null;for(let u=0;s==null&&u<l.length;++u){let c=V0(o);s=H0(l[u],c)}return s}function up(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,s)=>{let u={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Z(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=Dt([r,u.relativePath]),h=n.concat(u);o.children&&o.children.length>0&&(Z(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),up(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:B0(c,o.index),routesMeta:h})};return e.forEach((o,l)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))i(o,l);else for(let u of cp(o.path))i(o,l,u)}),t}function cp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=cp(r.join("/")),s=[];return s.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&s.push(...l),s.map(u=>e.startsWith("/")&&u===""?"/":u)}function R0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:U0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const M0=/^:[\w-]+$/,$0=3,O0=2,F0=1,A0=10,D0=-2,mc=e=>e==="*";function B0(e,t){let n=e.split("/"),r=n.length;return n.some(mc)&&(r+=D0),t&&(r+=O0),n.filter(i=>!mc(i)).reduce((i,o)=>i+(M0.test(o)?$0:o===""?F0:A0),r)}function U0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function H0(e,t,n){let{routesMeta:r}=e,i={},o="/",l=[];for(let s=0;s<r.length;++s){let u=r[s],c=s===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",g=Fa({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},h),v=u.route;if(!g)return null;Object.assign(i,g.params),l.push({params:i,pathname:Dt([o,g.pathname]),pathnameBase:K0(Dt([o,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(o=Dt([o,g.pathnameBase]))}return l}function Fa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=W0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,h,g)=>{let{paramName:v,isOptional:w}=h;if(v==="*"){let y=s[g]||"";l=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const x=s[g];return w&&!x?c[v]=void 0:c[v]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:l,pattern:e}}function W0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),qs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,u)=>(r.push({paramName:s,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function V0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return qs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const G0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Q0=e=>G0.test(e);function q0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ar(e):e,o;if(n)if(Q0(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),qs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=hc(n.substring(1),"/"):o=hc(n,t)}else o=t;return{pathname:o,search:X0(r),hash:Z0(i)}}function hc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Il(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function dp(e,t){let n=Y0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ar(e):(i=Xr({},e),Z(!i.pathname||!i.pathname.includes("?"),Il("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),Il("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),Il("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,s;if(l==null)s=n;else{let g=t.length-1;if(!r&&l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),g-=1;i.pathname=v.join("/")}s=g>=0?t[g]:"/"}let u=q0(i,s),c=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||h)&&(u.pathname+="/"),u}const Dt=e=>e.join("/").replace(/\/\/+/g,"/"),K0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),X0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Z0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function J0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const pp=["post","put","patch","delete"];new Set(pp);const eg=["get",...pp];new Set(eg);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zr(){return Zr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zr.apply(this,arguments)}const Go=C.createContext(null),mp=C.createContext(null),Qt=C.createContext(null),Qo=C.createContext(null),qt=C.createContext({outlet:null,matches:[],isDataRoute:!1}),hp=C.createContext(null);function tg(e,t){let{relative:n}=t===void 0?{}:t;si()||Z(!1);let{basename:r,navigator:i}=C.useContext(Qt),{hash:o,pathname:l,search:s}=Yo(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Dt([r,l])),i.createHref({pathname:u,search:s,hash:o})}function si(){return C.useContext(Qo)!=null}function yn(){return si()||Z(!1),C.useContext(Qo).location}function gp(e){C.useContext(Qt).static||C.useLayoutEffect(e)}function qo(){let{isDataRoute:e}=C.useContext(qt);return e?mg():ng()}function ng(){si()||Z(!1);let e=C.useContext(Go),{basename:t,future:n,navigator:r}=C.useContext(Qt),{matches:i}=C.useContext(qt),{pathname:o}=yn(),l=JSON.stringify(dp(i,n.v7_relativeSplatPath)),s=C.useRef(!1);return gp(()=>{s.current=!0}),C.useCallback(function(c,h){if(h===void 0&&(h={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let g=fp(c,JSON.parse(l),o,h.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Dt([t,g.pathname])),(h.replace?r.replace:r.push)(g,h.state,h)},[t,r,l,o,e])}function vp(){let{matches:e}=C.useContext(qt),t=e[e.length-1];return t?t.params:{}}function Yo(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=C.useContext(Qt),{matches:i}=C.useContext(qt),{pathname:o}=yn(),l=JSON.stringify(dp(i,r.v7_relativeSplatPath));return C.useMemo(()=>fp(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function rg(e,t){return ig(e,t)}function ig(e,t,n,r){si()||Z(!1);let{navigator:i}=C.useContext(Qt),{matches:o}=C.useContext(qt),l=o[o.length-1],s=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let c=yn(),h;if(t){var g;let j=typeof t=="string"?ar(t):t;u==="/"||(g=j.pathname)!=null&&g.startsWith(u)||Z(!1),h=j}else h=c;let v=h.pathname||"/",w=v;if(u!=="/"){let j=u.replace(/^\//,"").split("/");w="/"+v.replace(/^\//,"").split("/").slice(j.length).join("/")}let x=L0(e,{pathname:w}),y=ug(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},s,j.params),pathname:Dt([u,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?u:Dt([u,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&y?C.createElement(Qo.Provider,{value:{location:Zr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:It.Pop}},y):y}function og(){let e=pg(),t=J0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,null)}const lg=C.createElement(og,null);class ag extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?C.createElement(qt.Provider,{value:this.props.routeContext},C.createElement(hp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sg(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Go);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(qt.Provider,{value:t},r)}function ug(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let h=l.findIndex(g=>g.route.id&&(s==null?void 0:s[g.route.id])!==void 0);h>=0||Z(!1),l=l.slice(0,Math.min(l.length,h+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<l.length;h++){let g=l[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(c=h),g.route.id){let{loaderData:v,errors:w}=n,x=g.route.loader&&v[g.route.id]===void 0&&(!w||w[g.route.id]===void 0);if(g.route.lazy||x){u=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((h,g,v)=>{let w,x=!1,y=null,j=null;n&&(w=s&&g.route.id?s[g.route.id]:void 0,y=g.route.errorElement||lg,u&&(c<0&&v===0?(hg("route-fallback"),x=!0,j=null):c===v&&(x=!0,j=g.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,v+1)),d=()=>{let f;return w?f=y:x?f=j:g.route.Component?f=C.createElement(g.route.Component,null):g.route.element?f=g.route.element:f=h,C.createElement(sg,{match:g,routeContext:{outlet:h,matches:m,isDataRoute:n!=null},children:f})};return n&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?C.createElement(ag,{location:n.location,revalidation:n.revalidation,component:y,error:w,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var yp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yp||{}),xp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xp||{});function cg(e){let t=C.useContext(Go);return t||Z(!1),t}function dg(e){let t=C.useContext(mp);return t||Z(!1),t}function fg(e){let t=C.useContext(qt);return t||Z(!1),t}function wp(e){let t=fg(),n=t.matches[t.matches.length-1];return n.route.id||Z(!1),n.route.id}function pg(){var e;let t=C.useContext(hp),n=dg(),r=wp();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function mg(){let{router:e}=cg(yp.UseNavigateStable),t=wp(xp.UseNavigateStable),n=C.useRef(!1);return gp(()=>{n.current=!0}),C.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Zr({fromRouteId:t},o)))},[e,t])}const gc={};function hg(e,t,n){gc[e]||(gc[e]=!0)}function gg(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Oe(e){Z(!1)}function vg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=It.Pop,navigator:o,static:l=!1,future:s}=e;si()&&Z(!1);let u=t.replace(/^\/*/,"/"),c=C.useMemo(()=>({basename:u,navigator:o,static:l,future:Zr({v7_relativeSplatPath:!1},s)}),[u,s,o,l]);typeof r=="string"&&(r=ar(r));let{pathname:h="/",search:g="",hash:v="",state:w=null,key:x="default"}=r,y=C.useMemo(()=>{let j=Jn(h,u);return j==null?null:{location:{pathname:j,search:g,hash:v,state:w,key:x},navigationType:i}},[u,h,g,v,w,x,i]);return y==null?null:C.createElement(Qt.Provider,{value:c},C.createElement(Qo.Provider,{children:n,value:y}))}function yg(e){let{children:t,location:n}=e;return rg(Aa(t),n)}new Promise(()=>{});function Aa(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Aa(r.props.children,o));return}r.type!==Oe&&Z(!1),!r.props.index||!r.props.children||Z(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Aa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Eo(){return Eo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Eo.apply(this,arguments)}function kp(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function xg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wg(e,t){return e.button===0&&(!t||t==="_self")&&!xg(e)}function Da(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function kg(e,t){let n=Da(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const Sg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Cg=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],jg="6";try{window.__reactRouterVersion=jg}catch{}const Eg=C.createContext({isTransitioning:!1}),Pg="startTransition",vc=vm[Pg];function bg(e){let{basename:t,children:n,future:r,window:i}=e,o=C.useRef();o.current==null&&(o.current=_0({window:i,v5Compat:!0}));let l=o.current,[s,u]=C.useState({action:l.action,location:l.location}),{v7_startTransition:c}=r||{},h=C.useCallback(g=>{c&&vc?vc(()=>u(g)):u(g)},[u,c]);return C.useLayoutEffect(()=>l.listen(h),[l,h]),C.useEffect(()=>gg(r),[r]),C.createElement(vg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l,future:r})}const zg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_g=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:s,target:u,to:c,preventScrollReset:h,viewTransition:g}=t,v=kp(t,Sg),{basename:w}=C.useContext(Qt),x,y=!1;if(typeof c=="string"&&_g.test(c)&&(x=c,zg))try{let f=new URL(window.location.href),k=c.startsWith("//")?new URL(f.protocol+c):new URL(c),E=Jn(k.pathname,w);k.origin===f.origin&&E!=null?c=E+k.search+k.hash:y=!0}catch{}let j=tg(c,{relative:i}),m=Ng(c,{replace:l,state:s,target:u,preventScrollReset:h,relative:i,viewTransition:g});function d(f){r&&r(f),f.defaultPrevented||m(f)}return C.createElement("a",Eo({},v,{href:x||j,onClick:y||o?r:d,ref:n,target:u}))}),Nl=C.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:l=!1,style:s,to:u,viewTransition:c,children:h}=t,g=kp(t,Cg),v=Yo(u,{relative:g.relative}),w=yn(),x=C.useContext(mp),{navigator:y,basename:j}=C.useContext(Qt),m=x!=null&&Tg(v)&&c===!0,d=y.encodeLocation?y.encodeLocation(v).pathname:v.pathname,f=w.pathname,k=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(f=f.toLowerCase(),k=k?k.toLowerCase():null,d=d.toLowerCase()),k&&j&&(k=Jn(k,j)||k);const E=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let P=f===d||!l&&f.startsWith(d)&&f.charAt(E)==="/",S=k!=null&&(k===d||!l&&k.startsWith(d)&&k.charAt(d.length)==="/"),z={isActive:P,isPending:S,isTransitioning:m},M=P?r:void 0,I;typeof o=="function"?I=o(z):I=[o,P?"active":null,S?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let H=typeof s=="function"?s(z):s;return C.createElement(ne,Eo({},g,{"aria-current":M,className:I,ref:n,style:H,to:u,viewTransition:c}),typeof h=="function"?h(z):h)});var Ba;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ba||(Ba={}));var yc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(yc||(yc={}));function Ig(e){let t=C.useContext(Go);return t||Z(!1),t}function Ng(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,viewTransition:s}=t===void 0?{}:t,u=qo(),c=yn(),h=Yo(e,{relative:l});return C.useCallback(g=>{if(wg(g,n)){g.preventDefault();let v=r!==void 0?r:jo(c)===jo(h);u(e,{replace:v,state:i,preventScrollReset:o,relative:l,viewTransition:s})}},[c,u,h,r,i,n,e,o,l,s])}function Lg(e){let t=C.useRef(Da(e)),n=C.useRef(!1),r=yn(),i=C.useMemo(()=>kg(r.search,n.current?null:t.current),[r.search]),o=qo(),l=C.useCallback((s,u)=>{const c=Da(typeof s=="function"?s(i):s);n.current=!0,o("?"+c,u)},[o,i]);return[i,l]}function Tg(e,t){t===void 0&&(t={});let n=C.useContext(Eg);n==null&&Z(!1);let{basename:r}=Ig(Ba.useViewTransitionState),i=Yo(e,{relative:t.relative});if(!n.isTransitioning)return!1;let o=Jn(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Jn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Fa(i.pathname,l)!=null||Fa(i.pathname,o)!=null}const Sp="artilheiro-cart",xc=0;function Rg(){if(typeof window>"u")return[];try{const e=window.localStorage.getItem(Sp);return e?JSON.parse(e):[]}catch{return[]}}function St(e,t){return`${e}-${t}`}const Mg=Rg();function $g(e,t){switch(t.type){case"LOAD":return Array.isArray(t.payload)?t.payload:[];case"ADD":{const{productId:n,name:r,image:i,size:o,quantity:l,unitPrice:s}=t.payload,u=St(n,o);return e.find(h=>St(h.productId,h.size)===u)?e.map(h=>St(h.productId,h.size)===u?{...h,quantity:h.quantity+l}:h):[...e,{productId:n,name:r,image:i,size:o,quantity:l,unitPrice:s}]}case"UPDATE_QUANTITY":{const{productId:n,size:r,quantity:i}=t.payload,o=St(n,r);return i<1?e.filter(l=>St(l.productId,l.size)!==o):e.map(l=>St(l.productId,l.size)===o?{...l,quantity:i}:l)}case"REMOVE":{const{productId:n,size:r}=t.payload,i=St(n,r);return e.filter(o=>St(o.productId,o.size)!==i)}case"CLEAR":return[];default:return e}}const Cp=C.createContext(null);function Og({children:e}){const[t,n]=C.useReducer($g,Mg),[r,i]=C.useState(!1);C.useEffect(()=>{try{localStorage.setItem(Sp,JSON.stringify(t))}catch{}},[t]);const o=C.useCallback(j=>{n({type:"ADD",payload:{productId:j.productId,name:j.name,image:j.image??"",size:j.size,quantity:Math.max(1,Number(j.quantity)||1),unitPrice:Number(j.unitPrice)||0}})},[]),l=C.useCallback((j,m,d)=>{n({type:"UPDATE_QUANTITY",payload:{productId:j,size:m,quantity:d}})},[]),s=C.useCallback((j,m)=>{n({type:"REMOVE",payload:{productId:j,size:m}})},[]),u=C.useCallback(()=>{n({type:"CLEAR"})},[]),c=C.useCallback(()=>i(!0),[]),h=C.useCallback(()=>i(!1),[]),g=t.reduce((j,m)=>j+m.quantity,0),v=t.reduce((j,m)=>j+m.unitPrice*m.quantity,0),w=C.useCallback(()=>v,[v]),x=C.useCallback(()=>v+xc,[v]),y={items:t,itemCount:g,subtotal:v,getSubtotal:w,getTotal:x,addItem:o,updateQuantity:l,removeItem:s,clearCart:u,isMiniCartOpen:r,openMiniCart:c,closeMiniCart:h,freightPlaceholder:xc};return a.jsx(Cp.Provider,{value:y,children:e})}function ui(){const e=C.useContext(Cp);if(!e)throw new Error("useCart must be used within CartProvider");return e}var ge=function(){return ge=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ge.apply(this,arguments)};function Jr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var V="-ms-",Tr="-moz-",F="-webkit-",jp="comm",Ko="rule",Ys="decl",Fg="@import",Ag="@namespace",Ep="@keyframes",Dg="@layer",Pp=Math.abs,Ks=String.fromCharCode,Ua=Object.assign;function Bg(e,t){return ie(e,0)^45?(((t<<2^ie(e,0))<<2^ie(e,1))<<2^ie(e,2))<<2^ie(e,3):0}function bp(e){return e.trim()}function ct(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function qi(e,t,n){return e.indexOf(t,n)}function ie(e,t){return e.charCodeAt(t)|0}function pn(e,t,n){return e.slice(t,n)}function Xe(e){return e.length}function zp(e){return e.length}function Cr(e,t){return t.push(e),e}function Ug(e,t){return e.map(t).join("")}function wc(e,t){return e.filter(function(n){return!ct(n,t)})}var Xo=1,er=1,_p=0,We=0,ee=0,sr="";function Zo(e,t,n,r,i,o,l,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Xo,column:er,length:l,return:"",siblings:s}}function Ct(e,t){return Ua(Zo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Cn(e){for(;e.root;)e=Ct(e.root,{children:[e]});Cr(e,e.siblings)}function Hg(){return ee}function Wg(){return ee=We>0?ie(sr,--We):0,er--,ee===10&&(er=1,Xo--),ee}function tt(){return ee=We<_p?ie(sr,We++):0,er++,ee===10&&(er=1,Xo++),ee}function Nt(){return ie(sr,We)}function Yi(){return We}function Jo(e,t){return pn(sr,e,t)}function ei(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Vg(e){return Xo=er=1,_p=Xe(sr=e),We=0,[]}function Gg(e){return sr="",e}function Ll(e){return bp(Jo(We-1,Ha(e===91?e+2:e===40?e+1:e)))}function Qg(e){for(;(ee=Nt())&&ee<33;)tt();return ei(e)>2||ei(ee)>3?"":" "}function qg(e,t){for(;--t&&tt()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return Jo(e,Yi()+(t<6&&Nt()==32&&tt()==32))}function Ha(e){for(;tt();)switch(ee){case e:return We;case 34:case 39:e!==34&&e!==39&&Ha(ee);break;case 40:e===41&&Ha(e);break;case 92:tt();break}return We}function Yg(e,t){for(;tt()&&e+ee!==57;)if(e+ee===84&&Nt()===47)break;return"/*"+Jo(t,We-1)+"*"+Ks(e===47?e:tt())}function Kg(e){for(;!ei(Nt());)tt();return Jo(e,We)}function Xg(e){return Gg(Ki("",null,null,null,[""],e=Vg(e),0,[0],e))}function Ki(e,t,n,r,i,o,l,s,u){for(var c=0,h=0,g=l,v=0,w=0,x=0,y=1,j=1,m=1,d=0,f="",k=i,E=o,P=r,S=f;j;)switch(x=d,d=tt()){case 40:if(x!=108&&ie(S,g-1)==58){qi(S+=R(Ll(d),"&","&\f"),"&\f",Pp(c?s[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:S+=Ll(d);break;case 9:case 10:case 13:case 32:S+=Qg(x);break;case 92:S+=qg(Yi()-1,7);continue;case 47:switch(Nt()){case 42:case 47:Cr(Zg(Yg(tt(),Yi()),t,n,u),u),(ei(x||1)==5||ei(Nt()||1)==5)&&Xe(S)&&pn(S,-1,void 0)!==" "&&(S+=" ");break;default:S+="/"}break;case 123*y:s[c++]=Xe(S)*m;case 125*y:case 59:case 0:switch(d){case 0:case 125:j=0;case 59+h:m==-1&&(S=R(S,/\f/g,"")),w>0&&(Xe(S)-g||y===0&&x===47)&&Cr(w>32?Sc(S+";",r,n,g-1,u):Sc(R(S," ","")+";",r,n,g-2,u),u);break;case 59:S+=";";default:if(Cr(P=kc(S,t,n,c,h,i,s,f,k=[],E=[],g,o),o),d===123)if(h===0)Ki(S,t,P,P,k,o,g,s,E);else{switch(v){case 99:if(ie(S,3)===110)break;case 108:if(ie(S,2)===97)break;default:h=0;case 100:case 109:case 115:}h?Ki(e,P,P,r&&Cr(kc(e,P,P,0,0,i,s,f,i,k=[],g,E),E),i,E,g,s,r?k:E):Ki(S,P,P,P,[""],E,0,s,E)}}c=h=w=0,y=m=1,f=S="",g=l;break;case 58:g=1+Xe(S),w=x;default:if(y<1){if(d==123)--y;else if(d==125&&y++==0&&Wg()==125)continue}switch(S+=Ks(d),d*y){case 38:m=h>0?1:(S+="\f",-1);break;case 44:s[c++]=(Xe(S)-1)*m,m=1;break;case 64:Nt()===45&&(S+=Ll(tt())),v=Nt(),h=g=Xe(f=S+=Kg(Yi())),d++;break;case 45:x===45&&Xe(S)==2&&(y=0)}}return o}function kc(e,t,n,r,i,o,l,s,u,c,h,g){for(var v=i-1,w=i===0?o:[""],x=zp(w),y=0,j=0,m=0;y<r;++y)for(var d=0,f=pn(e,v+1,v=Pp(j=l[y])),k=e;d<x;++d)(k=bp(j>0?w[d]+" "+f:R(f,/&\f/g,w[d])))&&(u[m++]=k);return Zo(e,t,n,i===0?Ko:s,u,c,h,g)}function Zg(e,t,n,r){return Zo(e,t,n,jp,Ks(Hg()),pn(e,2,-2),0,r)}function Sc(e,t,n,r,i){return Zo(e,t,n,Ys,pn(e,0,r),pn(e,r+1,-1),r,i)}function Ip(e,t,n){switch(Bg(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return F+e+e;case 4855:return F+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Tr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Tr+e+V+e+e;case 5936:switch(ie(e,t+11)){case 114:return F+e+V+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+V+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+V+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+V+e+e;case 6165:return F+e+V+"flex-"+e+e;case 5187:return F+e+R(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return F+e+V+"flex-item-"+R(e,/flex-|-self/g,"")+(ct(e,/flex-|baseline/)?"":V+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return F+e+V+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+V+R(e,"shrink","negative")+e;case 5292:return F+e+V+R(e,"basis","preferred-size")+e;case 6060:return F+"box-"+R(e,"-grow","")+F+e+V+R(e,"grow","positive")+e;case 4554:return F+R(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+V+"flex-pack:$3"),/space-between/,"justify")+F+e+e;case 4200:if(!ct(e,/flex-|baseline/))return V+"grid-column-align"+pn(e,t)+e;break;case 2592:case 3360:return V+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ct(r.props,/grid-\w+-end/)})?~qi(e+(n=n[t].value),"span",0)?e:V+R(e,"-start","")+e+V+"grid-row-span:"+(~qi(n,"span",0)?ct(n,/\d+/):+ct(n,/\d+/)-+ct(e,/\d+/))+";":V+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ct(r.props,/grid-\w+-start/)})?e:V+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xe(e)-1-t>6)switch(ie(e,t+1)){case 109:if(ie(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Tr+(ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qi(e,"stretch",0)?Ip(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,s,u,c){return V+i+":"+o+c+(l?V+i+"-span:"+(s?u:+u-+o)+c:"")+e});case 4949:if(ie(e,t+6)===121)return R(e,":",":"+F)+e;break;case 6444:switch(ie(e,ie(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(ie(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+V+"$2box$3")+e;case 100:return R(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function Po(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jg(e,t,n,r){switch(e.type){case Dg:if(e.children.length)break;case Fg:case Ag:case Ys:return e.return=e.return||e.value;case jp:return"";case Ep:return e.return=e.value+"{"+Po(e.children,r)+"}";case Ko:if(!Xe(e.value=e.props.join(",")))return""}return Xe(n=Po(e.children,r))?e.return=e.value+"{"+n+"}":""}function e1(e){var t=zp(e);return function(n,r,i,o){for(var l="",s=0;s<t;s++)l+=e[s](n,r,i,o)||"";return l}}function t1(e){return function(t){t.root||(t=t.return)&&e(t)}}function n1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ys:e.return=Ip(e.value,e.length,n);return;case Ep:return Po([Ct(e,{value:R(e.value,"@","@"+F)})],r);case Ko:if(e.length)return Ug(n=e.props,function(i){switch(ct(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Cn(Ct(e,{props:[R(i,/:(read-\w+)/,":"+Tr+"$1")]})),Cn(Ct(e,{props:[i]})),Ua(e,{props:wc(n,r)});break;case"::placeholder":Cn(Ct(e,{props:[R(i,/:(plac\w+)/,":"+F+"input-$1")]})),Cn(Ct(e,{props:[R(i,/:(plac\w+)/,":"+Tr+"$1")]})),Cn(Ct(e,{props:[R(i,/:(plac\w+)/,V+"input-$1")]})),Cn(Ct(e,{props:[i]})),Ua(e,{props:wc(n,r)});break}return""})}}var r1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ie={},tr=typeof process<"u"&&Ie!==void 0&&(Ie.REACT_APP_SC_ATTR||Ie.SC_ATTR)||"data-styled",Np="active",Lp="data-styled-version",el="6.3.8",Xs=`/*!sc*/
`,bo=typeof window<"u"&&typeof document<"u",ht=ue.createContext===void 0,i1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ie.REACT_APP_SC_DISABLE_SPEEDY!==""?Ie.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ie.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ie!==void 0&&Ie.SC_DISABLE_SPEEDY!==void 0&&Ie.SC_DISABLE_SPEEDY!==""&&Ie.SC_DISABLE_SPEEDY!=="false"&&Ie.SC_DISABLE_SPEEDY),o1={},tl=Object.freeze([]),nr=Object.freeze({});function Tp(e,t,n){return n===void 0&&(n=nr),e.theme!==n.theme&&e.theme||t||n.theme}var Rp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),l1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,a1=/(^-|-$)/g;function Cc(e){return e.replace(l1,"-").replace(a1,"")}var s1=/(a)(d)/gi,jc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Wa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=jc(t%52)+n;return(jc(t%52)+n).replace(s1,"$1-$2")}var Tl,On=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mp=function(e){return On(5381,e)};function $p(e){return Wa(Mp(e)>>>0)}function u1(e){return e.displayName||e.name||"Component"}function Rl(e){return typeof e=="string"&&!0}var Op=typeof Symbol=="function"&&Symbol.for,Fp=Op?Symbol.for("react.memo"):60115,c1=Op?Symbol.for("react.forward_ref"):60112,d1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},f1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ap={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},p1=((Tl={})[c1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tl[Fp]=Ap,Tl);function Ec(e){return("type"in(t=e)&&t.type.$$typeof)===Fp?Ap:"$$typeof"in e?p1[e.$$typeof]:d1;var t}var m1=Object.defineProperty,h1=Object.getOwnPropertyNames,Pc=Object.getOwnPropertySymbols,g1=Object.getOwnPropertyDescriptor,v1=Object.getPrototypeOf,bc=Object.prototype;function Dp(e,t,n){if(typeof t!="string"){if(bc){var r=v1(t);r&&r!==bc&&Dp(e,r,n)}var i=h1(t);Pc&&(i=i.concat(Pc(t)));for(var o=Ec(e),l=Ec(t),s=0;s<i.length;++s){var u=i[s];if(!(u in f1||n&&n[u]||l&&u in l||o&&u in o)){var c=g1(t,u);try{m1(e,u,c)}catch{}}}}return e}function rr(e){return typeof e=="function"}function Zs(e){return typeof e=="object"&&"styledComponentId"in e}function on(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Va(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function ti(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ga(e,t,n){if(n===void 0&&(n=!1),!n&&!ti(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ga(e[r],t[r]);else if(ti(t))for(var r in t)e[r]=Ga(e[r],t[r]);return e}function Js(e,t){Object.defineProperty(e,"toString",{value:t})}function ci(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var y1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ci(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),u=(l=0,n.length);l<u;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Xs);return n},e}(),Xi=new Map,zo=new Map,Zi=1,Fn=function(e){if(Xi.has(e))return Xi.get(e);for(;zo.has(Zi);)Zi++;var t=Zi++;return Xi.set(e,t),zo.set(t,e),t},x1=function(e,t){Zi=t+1,Xi.set(e,t),zo.set(t,e)},w1="style[".concat(tr,"][").concat(Lp,'="').concat(el,'"]'),k1=new RegExp("^".concat(tr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),S1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},C1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Xs),i=[],o=0,l=r.length;o<l;o++){var s=r[o].trim();if(s){var u=s.match(k1);if(u){var c=0|parseInt(u[1],10),h=u[2];c!==0&&(x1(h,c),S1(e,h,u[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},zc=function(e){for(var t=document.querySelectorAll(w1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(tr)!==Np&&(C1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function j1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Bp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var u=Array.from(s.querySelectorAll("style[".concat(tr,"]")));return u[u.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(tr,Np),r.setAttribute(Lp,el);var l=j1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},E1=function(){function e(t){this.element=Bp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw ci(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),P1=function(){function e(t){this.element=Bp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),b1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),_c=bo,z1={isServer:!bo,useCSSOMInjection:!i1},_o=function(){function e(t,n,r){t===void 0&&(t=nr),n===void 0&&(n={});var i=this;this.options=ge(ge({},z1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&bo&&_c&&(_c=!1,zc(this)),Js(this,function(){return function(o){for(var l=o.getTag(),s=l.length,u="",c=function(g){var v=function(m){return zo.get(m)}(g);if(v===void 0)return"continue";var w=o.names.get(v),x=l.getGroup(g);if(w===void 0||!w.size||x.length===0)return"continue";var y="".concat(tr,".g").concat(g,'[id="').concat(v,'"]'),j="";w!==void 0&&w.forEach(function(m){m.length>0&&(j+="".concat(m,","))}),u+="".concat(x).concat(y,'{content:"').concat(j,'"}').concat(Xs)},h=0;h<s;h++)c(h);return u}(i)})}return e.registerId=function(t){return Fn(t)},e.prototype.rehydrate=function(){!this.server&&bo&&zc(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ge(ge({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new b1(i):r?new E1(i):new P1(i)}(this.options),new y1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Fn(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Fn(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fn(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),_1=/&/g,An=47;function Ic(e){if(e.indexOf("}")===-1)return!1;for(var t=e.length,n=0,r=0,i=!1,o=0;o<t;o++){var l=e.charCodeAt(o);if(r!==0||i||l!==An||e.charCodeAt(o+1)!==42)if(i)l===42&&e.charCodeAt(o+1)===An&&(i=!1,o++);else if(l!==34&&l!==39||o!==0&&e.charCodeAt(o-1)===92){if(r===0){if(l===123)n++;else if(l===125&&--n<0)return!0}}else r===0?r=l:r===l&&(r=0);else i=!0,o++}return n!==0||r!==0}function Up(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Up(n.children,t)),n})}function I1(e){var t,n,r,i=nr,o=i.options,l=o===void 0?nr:o,s=i.plugins,u=s===void 0?tl:s,c=function(v,w,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):v},h=u.slice();h.push(function(v){v.type===Ko&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(_1,n).replace(r,c))}),l.prefix&&h.push(n1),h.push(Jg);var g=function(v,w,x,y){w===void 0&&(w=""),x===void 0&&(x=""),y===void 0&&(y="&"),t=y,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var j=function(f){if(!Ic(f))return f;for(var k=f.length,E="",P=0,S=0,z=0,M=!1,I=0;I<k;I++){var H=f.charCodeAt(I);if(z!==0||M||H!==An||f.charCodeAt(I+1)!==42)if(M)H===42&&f.charCodeAt(I+1)===An&&(M=!1,I++);else if(H!==34&&H!==39||I!==0&&f.charCodeAt(I-1)===92){if(z===0)if(H===123)S++;else if(H===125){if(--S<0){for(var fe=I+1;fe<k;){var Ve=f.charCodeAt(fe);if(Ve===59||Ve===10)break;fe++}fe<k&&f.charCodeAt(fe)===59&&fe++,S=0,I=fe-1,P=fe;continue}S===0&&(E+=f.substring(P,I+1),P=I+1)}else H===59&&S===0&&(E+=f.substring(P,I+1),P=I+1)}else z===0?z=H:z===H&&(z=0);else M=!0,I++}if(P<k){var Yt=f.substring(P);Ic(Yt)||(E+=Yt)}return E}(function(f){if(f.indexOf("//")===-1)return f;for(var k=f.length,E=[],P=0,S=0,z=0,M=0;S<k;){var I=f.charCodeAt(S);if(I!==34&&I!==39||S!==0&&f.charCodeAt(S-1)===92)if(z===0)if(I===40&&S>=3&&(32|f.charCodeAt(S-1))==108&&(32|f.charCodeAt(S-2))==114&&(32|f.charCodeAt(S-3))==117)M=1,S++;else if(M>0)I===41?M--:I===40&&M++,S++;else if(I===An&&S+1<k&&f.charCodeAt(S+1)===An){for(S>P&&E.push(f.substring(P,S));S<k&&f.charCodeAt(S)!==10;)S++;P=S}else S++;else S++;else z===0?z=I:z===I&&(z=0),S++}return P===0?f:(P<k&&E.push(f.substring(P)),E.join(""))}(v)),m=Xg(x||w?"".concat(x," ").concat(w," { ").concat(j," }"):j);l.namespace&&(m=Up(m,l.namespace));var d=[];return Po(m,e1(h.concat(t1(function(f){return d.push(f)})))),d};return g.hash=u.length?u.reduce(function(v,w){return w.name||ci(15),On(v,w.name)},5381).toString():"",g}var N1=new _o,Qa=I1(),qa={shouldForwardProp:void 0,styleSheet:N1,stylis:Qa},Hp=ht?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(qa)}}:ue.createContext(qa);Hp.Consumer;ht||ue.createContext(void 0);function Ya(){return ht?qa:ue.useContext(Hp)}var L1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Qa);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Js(this,function(){throw ci(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qa),this.name+t.hash},e}();function T1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in r1||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var R1=function(e){return e>="A"&&e<="Z"};function Nc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;R1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Wp=function(e){return e==null||e===!1||e===""},Vp=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!Wp(r)&&(Array.isArray(r)&&r.isCss||rr(r)?t.push("".concat(Nc(n),":"),r,";"):ti(r)?t.push.apply(t,Jr(Jr(["".concat(n," {")],Vp(r),!1),["}"],!1)):t.push("".concat(Nc(n),": ").concat(T1(n,r),";")))}return t};function Bt(e,t,n,r){if(Wp(e))return[];if(Zs(e))return[".".concat(e.styledComponentId)];if(rr(e)){if(!rr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Bt(i,t,n,r)}var o;return e instanceof L1?n?(e.inject(n,r),[e.getName(r)]):[e]:ti(e)?Vp(e):Array.isArray(e)?Array.prototype.concat.apply(tl,e.map(function(l){return Bt(l,t,n,r)})):[e.toString()]}function Gp(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(rr(n)&&!Zs(n))return!1}return!0}var M1=Mp(el),$1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Gp(t),this.componentId=n,this.baseHash=On(M1,n),this.baseStyle=r,_o.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=on(i,this.staticRulesId);else{var o=Va(Bt(this.rules,t,n,r)),l=Wa(On(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}i=on(i,l),this.staticRulesId=l}else{for(var u=On(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var g=this.rules[h];if(typeof g=="string")c+=g;else if(g){var v=Va(Bt(g,t,n,r));u=On(u,v+h),c+=v}}if(c){var w=Wa(u>>>0);if(!n.hasNameForId(this.componentId,w)){var x=r(c,".".concat(w),void 0,this.componentId);n.insertRules(this.componentId,w,x)}i=on(i,w)}}return{className:i,css:typeof window>"u"?n.getTag().getGroup(Fn(this.componentId)):""}},e}(),eu=ht?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:ue.createContext(void 0);eu.Consumer;var Ml={};function O1(e,t,n){var r=Zs(e),i=e,o=!Rl(e),l=t.attrs,s=l===void 0?tl:l,u=t.componentId,c=u===void 0?function(k,E){var P=typeof k!="string"?"sc":Cc(k);Ml[P]=(Ml[P]||0)+1;var S="".concat(P,"-").concat($p(el+P+Ml[P]));return E?"".concat(E,"-").concat(S):S}(t.displayName,t.parentComponentId):u,h=t.displayName,g=h===void 0?function(k){return Rl(k)?"styled.".concat(k):"Styled(".concat(u1(k),")")}(e):h,v=t.displayName&&t.componentId?"".concat(Cc(t.displayName),"-").concat(t.componentId):t.componentId||c,w=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,x=t.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(t.shouldForwardProp){var j=t.shouldForwardProp;x=function(k,E){return y(k,E)&&j(k,E)}}else x=y}var m=new $1(n,v,r?i.componentStyle:void 0);function d(k,E){return function(P,S,z){var M=P.attrs,I=P.componentStyle,H=P.defaultProps,fe=P.foldedComponentIds,Ve=P.styledComponentId,Yt=P.target,nl=ht?void 0:ue.useContext(eu),ur=Ya(),Kt=P.shouldForwardProp||ur.shouldForwardProp,_=Tp(S,nl,H)||nr,L=function(di,wn,fi){for(var cr,st=ge(ge({},wn),{className:void 0,theme:fi}),rl=0;rl<di.length;rl+=1){var pi=rr(cr=di[rl])?cr(st):cr;for(var kn in pi)kn==="className"?st.className=on(st.className,pi[kn]):kn==="style"?st.style=ge(ge({},st.style),pi[kn]):st[kn]=pi[kn]}return"className"in wn&&typeof wn.className=="string"&&(st.className=on(st.className,wn.className)),st}(M,S,_),T=L.as||Yt,D={};for(var B in L)L[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&L.theme===_||(B==="forwardedAs"?D.as=L.forwardedAs:Kt&&!Kt(B,T)||(D[B]=L[B]));var Xt=function(di,wn){var fi=Ya(),cr=di.generateAndInjectStyles(wn,fi.styleSheet,fi.stylis);return cr}(I,L),Ge=Xt.className,xn=Xt.css,Qe=on(fe,Ve);Ge&&(Qe+=" "+Ge),L.className&&(Qe+=" "+L.className),D[Rl(T)&&!Rp.has(T)?"class":"className"]=Qe,z&&(D.ref=z);var Zt=C.createElement(T,D);return ht&&xn?ue.createElement(ue.Fragment,null,ue.createElement("style",{precedence:"styled-components",href:"sc-".concat(Ve,"-").concat(Ge),children:xn}),Zt):Zt}(f,k,E)}d.displayName=g;var f=ue.forwardRef(d);return f.attrs=w,f.componentStyle=m,f.displayName=g,f.shouldForwardProp=x,f.foldedComponentIds=r?on(i.foldedComponentIds,i.styledComponentId):"",f.styledComponentId=v,f.target=r?i.target:e,Object.defineProperty(f,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(E){for(var P=[],S=1;S<arguments.length;S++)P[S-1]=arguments[S];for(var z=0,M=P;z<M.length;z++)Ga(E,M[z],!0);return E}({},i.defaultProps,k):k}}),Js(f,function(){return".".concat(f.styledComponentId)}),o&&Dp(f,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),f}function Lc(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Tc=function(e){return Object.assign(e,{isCss:!0})};function Qp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(rr(e)||ti(e))return Tc(Bt(Lc(tl,Jr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Bt(r):Tc(Bt(Lc(r,t)))}function Ka(e,t,n){if(n===void 0&&(n=nr),!t)throw ci(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Qp.apply(void 0,Jr([i],o,!1)))};return r.attrs=function(i){return Ka(e,t,ge(ge({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ka(e,t,ge(ge({},n),i))},r}var qp=function(e){return Ka(O1,e)},p=qp;Rp.forEach(function(e){p[e]=qp(e)});var F1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Gp(t),_o.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Va(Bt(this.rules,n,r,i)),""),l=this.componentId+t;r.insertRules(l,l,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&_o.registerId(this.componentId+t);var o=this.componentId+t;this.isStatic?r.hasNameForId(o,o)||this.createStyles(t,n,r,i):(this.removeStyles(t,r),this.createStyles(t,n,r,i))},e}();function A1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Qp.apply(void 0,Jr([e],t,!1)),i="sc-global-".concat($p(JSON.stringify(r))),o=new F1(r,i),l=new WeakMap,s=function(u){var c=Ya(),h=ht?void 0:ue.useContext(eu),g=l.get(c.styleSheet);if(g===void 0&&(g=c.styleSheet.allocateGSInstance(i),l.set(c.styleSheet,g)),(typeof window>"u"||!c.styleSheet.server)&&function(j,m,d,f,k){if(o.isStatic)o.renderStyles(j,o1,d,k);else{var E=ge(ge({},m),{theme:Tp(m,f,s.defaultProps)});o.renderStyles(j,E,d,k)}}(g,u,c.styleSheet,h,c.stylis),!ht){var v=ue.useRef(!0);ue.useLayoutEffect(function(){return v.current=!1,function(){v.current=!0,queueMicrotask(function(){v.current&&(o.removeStyles(g,c.styleSheet),typeof document<"u"&&document.querySelectorAll('style[data-styled-global="'.concat(i,'"]')).forEach(function(j){return j.remove()}))})}},[g,c.styleSheet])}if(ht){var w=i+g,x=typeof window>"u"?c.styleSheet.getTag().getGroup(Fn(w)):"";if(x){var y="".concat(i,"-").concat(g);return ue.createElement("style",{key:y,"data-styled-global":i,precedence:"styled-components",href:y,children:x})}}return null};return ue.memo(s)}const D1=p.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`,B1=p.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
`,U1=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,H1=p.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,W1=p.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,V1=p.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,G1=p.span`
  font-size: 0.9375rem;
  font-weight: 700;
  color: #1a1a1a;
`,Q1=p.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem;
`,q1=p.button`
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
`;function Y1(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const K1=()=>a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),a.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),a.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),a.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]});function X1({item:e,onRemove:t}){const n=e.unitPrice*e.quantity;return a.jsxs(D1,{children:[a.jsx(B1,{children:a.jsx(U1,{src:e.image,alt:e.name})}),a.jsxs(H1,{children:[a.jsx(W1,{children:e.name}),a.jsxs(V1,{children:["Tamanho ",e.size," · ",e.quantity,"x"]}),a.jsx(G1,{children:Y1(n)})]}),a.jsx(Q1,{children:a.jsx(q1,{type:"button",onClick:()=>t==null?void 0:t(e.productId,e.size),"aria-label":"Remover item",children:a.jsx(K1,{})})})]})}const Z1=p.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1100;
  opacity: ${({$open:e})=>e?1:0};
  visibility: ${({$open:e})=>e?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  -webkit-tap-highlight-color: transparent;
`,J1=p.aside`
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
    max-height: 92vh;
    transform: ${({$open:e})=>e?"translateY(0)":"translateY(100%)"};
  }
`,ev=p.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
`,tv=p.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,nv=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #6b7280;
  background: transparent;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #1a1a1a;
    background: rgba(0, 0, 0, 0.05);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`,rv=p.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 0;
`,iv=p.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
`,ov=p.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 1.5rem;
`,lv=p.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,av=p.footer`
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  background: #fff;
  flex-shrink: 0;
`,sv=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,uv=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,cv=p.button`
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

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`,dv=p.button`
  width: 100%;
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
`,fv=p.button`
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
`;function pv(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const mv=()=>a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"M18 6 6 18M6 6l12 12"})});function hv(){const{items:e,subtotal:t,isMiniCartOpen:n,closeMiniCart:r,removeItem:i,itemCount:o}=ui(),l=e.length===0,s=u=>{u.target===u.currentTarget&&r()};return a.jsxs(a.Fragment,{children:[a.jsx(Z1,{$open:n,onClick:s,"aria-hidden":"true"}),a.jsxs(J1,{$open:n,role:"dialog","aria-modal":"true","aria-label":"Meu Carrinho",children:[a.jsxs(ev,{children:[a.jsx(tv,{children:"Meu Carrinho"}),a.jsx(nv,{type:"button",onClick:r,"aria-label":"Fechar carrinho",children:a.jsx(mv,{})})]}),a.jsx(rv,{children:l?a.jsxs(iv,{children:[a.jsx(ov,{children:"Seu carrinho está vazio"}),a.jsx(fv,{as:ne,to:"/produtos",onClick:r,children:"Explorar produtos"})]}):a.jsx(lv,{children:e.map(u=>a.jsx(X1,{item:u,onRemove:i},`${u.productId}-${u.size}`))})}),!l&&a.jsxs(av,{children:[a.jsxs(sv,{children:[a.jsx("span",{children:"Subtotal"}),a.jsx("span",{children:pv(t)})]}),a.jsxs(uv,{children:[a.jsx(cv,{as:ne,to:"/carrinho",onClick:r,children:"Ir para o carrinho"}),a.jsx(dv,{as:ne,to:"/checkout",onClick:r,children:"Finalizar compra"})]})]})]})]})}const Rc=[{label:"Início",path:"/"},{label:"Times",path:"/times"},{label:"Brasileirão",path:"/brasileirao"},{label:"Europeus",path:"/europeus"},{label:"Lançamentos",path:"/lancamentos"},{label:"Promoções",path:"/promocoes"}],gv=[{id:1,title:"Camisas Nacionais",slug:"nacionais",image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",link:"/categoria/nacionais"},{id:2,title:"Camisas Europeias",slug:"europeias",image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",link:"/categoria/europeias"},{id:3,title:"Retrô",slug:"retro",image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80",link:"/categoria/retro"},{id:4,title:"Promoções",slug:"promocoes",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",link:"/promocoes"}],vv=[{id:1,name:"Flamengo",price:299.9,originalPrice:349.9,image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",badge:"Novo",link:"/produto/1"},{id:2,name:"Corinthians",price:279.9,originalPrice:null,image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",badge:null,link:"/produto/2"},{id:3,name:"Real Madrid",price:399.9,originalPrice:449.9,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Promo",link:"/produto/3"},{id:4,name:"Barcelona",price:389.9,originalPrice:null,image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",badge:"Novo",link:"/produto/4"},{id:5,name:"Palmeiras",price:269.9,originalPrice:319.9,image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",badge:"Promo",link:"/produto/5"},{id:6,name:"São Paulo",price:289.9,originalPrice:null,image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:null,link:"/produto/6"},{id:7,name:"Manchester United",price:419.9,originalPrice:null,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",badge:"Novo",link:"/produto/7"},{id:8,name:"Liverpool",price:409.9,originalPrice:459.9,image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Promo",link:"/produto/8"}],yv={ctaLabel:"Comprar agora",ctaLink:"/produtos"},xv={title:"Até 40% OFF",subtitle:"Em camisas selecionadas",ctaLabel:"Ver ofertas",ctaLink:"/promocoes",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80"},ni=[{id:1,name:"Flamengo 2025/26",price:299.9,originalPrice:349.9,image:"/times/Brasileirao/camisa%20flamengo%2025-26.jpg",imageHover:"/times/Brasileirao/camisa%20flamengo%2025-26.jpg",badge:"Novo",link:"/produto/1",team:"Flamengo",league:"brasileirao",category:"nacionais",sizes:["P","M","G","GG"],isPromo:!1,salesCount:120,createdAt:"2025-01-15"},{id:2,name:"Corinthians 2025/26",price:279.9,originalPrice:null,image:"/times/Brasileirao/Corinthians%2025-26.jpg",imageHover:"/times/Brasileirao/Corinthians%2025-26.jpg",badge:"Novo",link:"/produto/2",team:"Corinthians",league:"brasileirao",category:"nacionais",sizes:["P","M","G","GG","EG"],isPromo:!1,salesCount:95,createdAt:"2024-11-01"},{id:3,name:"Real Madrid",price:399.9,originalPrice:449.9,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Promo",link:"/produto/3",team:"Real Madrid",league:"la-liga",category:"europeias",sizes:["M","G","GG"],isPromo:!0,salesCount:210,createdAt:"2024-09-10"},{id:4,name:"Barcelona",price:389.9,originalPrice:null,image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",badge:"Novo",link:"/produto/4",team:"Barcelona",league:"la-liga",category:"europeias",sizes:["P","M","G"],isPromo:!1,salesCount:88,createdAt:"2025-01-20"},{id:5,name:"Palmeiras",price:269.9,originalPrice:319.9,image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",badge:"Promo",link:"/produto/5",team:"Palmeiras",league:"brasileirao",category:"nacionais",sizes:["P","M","G","GG"],isPromo:!0,salesCount:156,createdAt:"2024-10-05"},{id:6,name:"São Paulo",price:289.9,originalPrice:null,image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:null,link:"/produto/6",team:"São Paulo",league:"brasileirao",category:"nacionais",sizes:["M","G","GG"],isPromo:!1,salesCount:72,createdAt:"2024-08-20"},{id:7,name:"Manchester United",price:419.9,originalPrice:null,image:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",badge:"Novo",link:"/produto/7",team:"Manchester United",league:"premier-league",category:"europeias",sizes:["P","M","G","GG"],isPromo:!1,salesCount:134,createdAt:"2025-01-10"},{id:8,name:"Liverpool",price:409.9,originalPrice:459.9,image:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Promo",link:"/produto/8",team:"Liverpool",league:"premier-league",category:"europeias",sizes:["M","G"],isPromo:!0,salesCount:98,createdAt:"2024-12-01"},{id:9,name:"Santos",price:259.9,originalPrice:299.9,image:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80",badge:"Promo",link:"/produto/9",team:"Santos",league:"brasileirao",category:"nacionais",sizes:["P","M","G","GG"],isPromo:!0,salesCount:64,createdAt:"2024-07-15"},{id:10,name:"Grêmio",price:274.9,originalPrice:null,image:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80",badge:null,link:"/produto/10",team:"Grêmio",league:"brasileirao",category:"nacionais",sizes:["M","G","GG"],isPromo:!1,salesCount:81,createdAt:"2024-09-01"},{id:11,name:"Chelsea",price:394.9,originalPrice:null,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",imageHover:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80",badge:"Novo",link:"/produto/11",team:"Chelsea",league:"premier-league",category:"europeias",sizes:["P","M","G"],isPromo:!1,salesCount:67,createdAt:"2025-01-25"},{id:12,name:"Flamengo 1994",price:329.9,originalPrice:369.9,image:"/times/Brasileirao/camisa%20flamengo%201994.jpg",imageHover:"/times/Brasileirao/camisa%20flamengo%201994.jpg",badge:"Retrô",link:"/produto/12",team:"Flamengo",league:"brasileirao",category:"retro",sizes:["M","G","GG"],isPromo:!0,salesCount:145,createdAt:"2024-11-20"},{id:13,name:"Flamengo 2009",price:289.9,originalPrice:339.9,image:"/times/Brasileirao/camisa%20flamengo%202009.jpg",imageHover:"/times/Brasileirao/camisa%20flamengo%202009.jpg",badge:"Retrô",link:"/produto/13",team:"Flamengo",league:"brasileirao",category:"retro",sizes:["P","M","G","GG"],isPromo:!1,salesCount:98,createdAt:"2024-10-01"}];function wv(e){const t=ni.find(u=>u.id===Number(e));if(!t)return null;const n=t.image,r=t.imageHover||t.image,i=[{src:n,label:"Frente"},{src:r,label:"Costas"},{src:n,label:"Detalhe do tecido"}],o=["P","M","G","GG","EG"],l=t.sizes||["P","M","G","GG"],s={};return o.forEach((u,c)=>{if(!l.includes(u))s[u]=0;else{const h=(t.id+c)%4===0;s[u]=h?0:5}}),{...t,gallery:i,sizeStock:s,material:"100% Poliéster",shipping:"Envio em até 48h",exchange:"Troca fácil em até 7 dias"}}const Yp={brasileirao:"Brasileirão","premier-league":"Premier League","la-liga":"La Liga"},kv={Flamengo:"/times/Brasileirao/flamengo%20logo.jpg",Corinthians:"/times/Brasileirao/corinthians%20logo.jpg",Palmeiras:"/times/Brasileirao/Palmeiras.jpg","São Paulo":"/times/Brasileirao/SaoPaulo.jpg",Santos:"/times/Brasileirao/Santos.jpg",Grêmio:"/times/Brasileirao/Gremio.jpg"};function Sv(){const e={},t=new Set;for(const r of ni){const i=r.league||"brasileirao";e[i]||(e[i]=[]);const o=`${i}-${r.team}`;if(t.has(o))continue;t.add(o);const s=i==="brasileirao"?kv[r.team]:null;e[i].push({name:r.team,image:s||r.image,fallbackImage:s?r.image:null,link:`/produtos?time=${encodeURIComponent(r.team)}`})}return["brasileirao","premier-league","la-liga"].filter(r=>{var i;return(i=e[r])==null?void 0:i.length}).map(r=>({id:r,name:Yp[r]||r,teams:e[r].sort((i,o)=>i.name.localeCompare(o.name))}))}const Kp=Sv();Kp.flatMap(e=>e.teams);const Xa={nacionais:{title:"Camisas Nacionais",subtitle:"Os principais times do Brasil",bannerImage:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80",categorySlug:"nacionais"},europeias:{title:"Camisas Europeias",subtitle:"Os maiores clubes da Europa",bannerImage:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80",categorySlug:"europeias"},retro:{title:"Camisas Retrô",subtitle:"Clássicos que nunca saem de moda",bannerImage:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&q=80",categorySlug:"retro"},produtos:{title:"Todos os Produtos",subtitle:"Camisas oficiais dos maiores clubes",bannerImage:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80",categorySlug:null},times:{title:"Todos os Times",subtitle:"Encontre a camisa do seu time",bannerImage:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80",categorySlug:null},brasileirao:{title:"Camisas do Brasileirão",subtitle:"Times da Série A",bannerImage:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80",categorySlug:"nacionais"},europeus:{title:"Camisas Europeias",subtitle:"Premier League, La Liga e mais",bannerImage:"https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80",categorySlug:"europeias"},lancamentos:{title:"Lançamentos",subtitle:"As novidades que acabaram de chegar",bannerImage:"https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&q=80",categorySlug:null,sortDefault:"newest"},promocoes:{title:"Promoções",subtitle:"Ofertas imperdíveis em camisas oficiais",bannerImage:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80",categorySlug:null,filterPromoOnly:!0}},Cv={institutional:[{label:"Sobre nós",path:"/sobre"},{label:"Lojas",path:"/lojas"},{label:"Trabalhe conosco",path:"/trabalhe-conosco"},{label:"Contato",path:"/contato"}],help:[{label:"Central de ajuda",path:"/ajuda"},{label:"Troca e devolução",path:"/troca-devolucao"},{label:"Entregas",path:"/entregas"},{label:"Formas de pagamento",path:"/pagamento"}],account:[{label:"Meus pedidos",path:"/pedidos"},{label:"Meus favoritos",path:"/favoritos"},{label:"Cadastre-se",path:"/cadastro"},{label:"Login",path:"/login"}],social:[{name:"facebook",url:"https://facebook.com",icon:"facebook"},{name:"instagram",url:"https://instagram.com",icon:"instagram"},{name:"twitter",url:"https://twitter.com",icon:"twitter"}],copyright:"© 2025 Artilheiro Store. Todos os direitos reservados."},jv=p.nav`
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
`,Ev=p.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  min-height: 85px;
  height: auto;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Pv=p.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,bv=p.img`
  height: 85px;
  width: auto;
  object-fit: contain;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`,zv=p.ul`
  display: none;
  align-items: center;
  gap: 0.25rem;

  @media (min-width: 992px) {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 0.5rem;
  }
`,_v=p.li`
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
`,Iv=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Nv=p.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,Lv=p.span`
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
`,$l=p.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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
`,Tv=p.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  width: 40px;
  height: 40px;
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
`,Rv=p.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-top: ${({$open:e})=>e?"1px solid #eee":"none"};
  padding: ${({$open:e})=>e?"1rem":"0"};
  max-height: ${({$open:e})=>e?"400px":"0"};
  min-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease, border 0.3s ease;

  a {
    padding: 0.75rem 1rem;
    font-weight: 500;
    color: #333;
    border-radius: 4px;

    &:hover {
      background: rgba(196, 30, 58, 0.06);
      color: #c41e3a;
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`,Mv=()=>a.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("circle",{cx:"11",cy:"11",r:"8"}),a.jsx("path",{d:"m21 21-4.35-4.35"})]}),$v=()=>a.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}),a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),Ov=()=>a.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),a.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),Fv=()=>a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("line",{x1:"4",y1:"6",x2:"20",y2:"6"}),a.jsx("line",{x1:"4",y1:"12",x2:"20",y2:"12"}),a.jsx("line",{x1:"4",y1:"18",x2:"20",y2:"18"})]}),Av=()=>a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:a.jsx("path",{d:"M18 6 6 18M6 6l12 12"})});function mn(){const[e,t]=C.useState(!1),{openMiniCart:n,itemCount:r}=ui();return a.jsxs(jv,{children:[a.jsxs(Ev,{children:[a.jsx(Pv,{as:Nl,to:"/",children:a.jsx(bv,{src:"/logos/sem%20fundo/4.png",alt:"Artilheiro Store"})}),a.jsx(zv,{children:Rc.map(i=>a.jsx(_v,{children:a.jsx(Nl,{to:i.path,className:({isActive:o})=>o?"active":"",onClick:()=>t(!1),children:i.label})},i.path))}),a.jsxs(Iv,{children:[a.jsx($l,{href:"/busca","aria-label":"Buscar",children:a.jsx(Mv,{})}),a.jsxs(Nv,{children:[a.jsx($l,{as:"button",type:"button",onClick:n,"aria-label":`Carrinho com ${r} itens`,children:a.jsx($v,{})}),r>0&&a.jsx(Lv,{"aria-hidden":"true",children:r>99?"99+":r})]}),a.jsx($l,{href:"/perfil","aria-label":"Perfil",children:a.jsx(Ov,{})})]}),a.jsx(Tv,{onClick:()=>t(!e),"aria-label":e?"Fechar menu":"Abrir menu",children:e?a.jsx(Av,{}):a.jsx(Fv,{})})]}),a.jsx(Rv,{$open:e,children:Rc.map(i=>a.jsx(Nl,{to:i.path,onClick:()=>t(!1),children:i.label},i.path))})]})}const Dv=p.section`
  position: relative;
  width: 100%;
  aspect-ratio: 20 / 9;
  overflow: hidden;
`,Bv=p.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Uv=p.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 45%,
    rgba(0, 0, 0, 0.1) 100%
  );
`,Hv=p.div`
  position: absolute;
  bottom: 2rem;
  left: 2.5rem;
  z-index: 2;

  @media (min-width: 768px) {
    bottom: 10rem;
    left: 20rem;
  }
`,Wv=p.a`
  display: inline-block;
  padding: 0.65rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: #1a1a1a;
  border: 2px solid #fff;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background: #2f2f2f;
    color:rgb(255, 255, 255);
    transform: translateY(-1px);
  }
`,Vv="/Design%20sem%20nome%20(5).png";function Gv(){const{ctaLabel:e,ctaLink:t}=yv;return a.jsxs(Dv,{children:[a.jsx(Bv,{src:Vv,alt:""}),a.jsx(Uv,{}),a.jsx(Hv,{children:a.jsx(Wv,{as:ne,to:t,children:e})})]})}const Xp=p.article`
  position: relative;
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: 768px) {
    aspect-ratio: 3 / 2;
  }
`,Qv=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Xp}:hover & {
    transform: scale(1.06);
  }
`,qv=p.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
`,Yv=p.span`
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
`;function Kv({title:e,image:t,link:n,fallbackImage:r}){const[i,o]=C.useState(t),l=()=>{r&&o(r)};return a.jsxs(Xp,{as:ne,to:n,children:[a.jsx(Qv,{src:i,alt:e,onError:l}),a.jsx(qv,{}),a.jsx(Yv,{children:e})]})}const Xv=p.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,Zv=p.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Jv=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`;function ey(){return a.jsx(Xv,{children:a.jsx(Zv,{children:a.jsx(Jv,{children:gv.map(e=>a.jsx(Kv,{title:e.title,image:e.image,link:e.link},e.id))})})})}const Zp=p.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`,ty=p.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f5f5f5;
`,ny=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;

  ${Zp}:hover & {
    opacity: 1;
  }
`,ry=p.span`
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
`,iy=p.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,oy=p.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
`,ly=p.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #c41e3a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ay=p.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: #999;
  text-decoration: line-through;
`;function Mc(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function tu({name:e,price:t,originalPrice:n,image:r,imageHover:i,badge:o,link:l}){const[s,u]=C.useState(!1),c=i&&s?i:r;return a.jsxs(Zp,{as:ne,to:l,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[a.jsxs(ty,{children:[a.jsx(ny,{src:c,alt:e}),o&&a.jsx(ry,{$type:o==="Promo"?"promo":o==="Retrô"?"retro":"new",children:o})]}),a.jsxs(iy,{children:[a.jsx(oy,{children:e}),a.jsxs(ly,{children:[Mc(t),n&&a.jsx(ay,{children:Mc(n)})]})]})]})}const sy=p.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`,uy=p.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,cy=p.h2`
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
`,dy=p.div`
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
`;function fy(){return a.jsx(sy,{children:a.jsxs(uy,{children:[a.jsx(cy,{children:"Destaques da Semana"}),a.jsx(dy,{children:vv.map(e=>a.jsx(tu,{name:e.name,price:e.price,originalPrice:e.originalPrice,image:e.image,imageHover:e.imageHover,badge:e.badge,link:e.link},e.id))})]})})}const py=p.section`
  position: relative;
  width: 100%;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 320px;
  }
`,my=p.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,hy=p.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.2) 60%,
    transparent 100%
  );
`,gy=p.div`
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
`,vy=p.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,yy=p.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.25rem;
`,xy=p.a`
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
`;function wy(){const{title:e,subtitle:t,ctaLabel:n,ctaLink:r,image:i}=xv;return a.jsxs(py,{children:[a.jsx(my,{src:i,alt:""}),a.jsx(hy,{}),a.jsxs(gy,{children:[a.jsx(vy,{children:e}),a.jsx(yy,{children:t}),a.jsx(xy,{as:ne,to:r,children:n})]})]})}const ky=p.footer`
  background: #1a1a1a;
  color: #aaa;
  padding: 3rem 0 2rem;

  @media (min-width: 768px) {
    padding: 4rem 0 2rem;
  }
`,Sy=p.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Cy=p.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
`,jy=p.a`
  display: inline-block;
  line-height: 0;
`,Ey=p.img`
  height: 200px !important;
  width: auto;
  object-fit: contain;

  @media (min-width: 768px) {
    height: 200px;
  }
`,Py=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1.5rem;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`,Ni=p.div``,Li=p.h3`
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
`,Ol=p.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Fl=p.a`
  font-size: 0.9rem;
  color: #aaa;
  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`,by=p.div`
  display: flex;
  gap: 0.75rem;
`,zy=p.a`
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
`,_y=p.p`
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid #333;
`,Iy=({name:e})=>({facebook:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),instagram:a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[a.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),a.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),a.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]}),twitter:a.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})[e]||null;function hn(){const{institutional:e,help:t,account:n,social:r,copyright:i}=Cv;return a.jsx(ky,{children:a.jsxs(Sy,{children:[a.jsx(Cy,{children:a.jsx(jy,{as:ne,to:"/",children:a.jsx(Ey,{src:"/logos/sem%20fundo/LogoBranca.png",alt:"Artilheiro Store"})})}),a.jsxs(Py,{children:[a.jsxs(Ni,{children:[a.jsx(Li,{children:"Institucional"}),a.jsx(Ol,{children:e.map(o=>a.jsx("li",{children:a.jsx(Fl,{as:ne,to:o.path,children:o.label})},o.path))})]}),a.jsxs(Ni,{children:[a.jsx(Li,{children:"Ajuda"}),a.jsx(Ol,{children:t.map(o=>a.jsx("li",{children:a.jsx(Fl,{as:ne,to:o.path,children:o.label})},o.path))})]}),a.jsxs(Ni,{children:[a.jsx(Li,{children:"Minha Conta"}),a.jsx(Ol,{children:n.map(o=>a.jsx("li",{children:a.jsx(Fl,{as:ne,to:o.path,children:o.label})},o.path))})]}),a.jsxs(Ni,{children:[a.jsx(Li,{children:"Redes Sociais"}),a.jsx(by,{children:r.map(o=>a.jsx(zy,{href:o.url,target:"_blank",rel:"noopener noreferrer","aria-label":o.name,children:a.jsx(Iy,{name:o.icon})},o.name))})]})]}),a.jsx(_y,{children:i})]})})}const Ny=p.div`
  padding-top: var(--navbar-height, 100px);
`;function Ly(){return a.jsxs(a.Fragment,{children:[a.jsx(mn,{}),a.jsxs(Ny,{children:[a.jsxs("main",{children:[a.jsx(Gv,{}),a.jsx(ey,{}),a.jsx(fy,{}),a.jsx(wy,{})]}),a.jsx(hn,{})]})]})}const Ty=p.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`,Ry=p.header`
  position: relative;
  width: 100%;
  min-height: 220px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 280px;
  }
`,My=p.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,$y=p.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`,Oy=p.div`
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
`,Fy=p.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,Ay=p.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,Dy=p.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0 2rem 4rem;
  }
`,By=p.div`
  display: grid;
  gap: 2rem;
  padding-top: 1.5rem;

  @media (min-width: 992px) {
    grid-template-columns: 240px 1fr;
    gap: 2.5rem;
    padding-top: 2rem;
  }
`,Uy=p.aside`
  @media (max-width: 991px) {
    order: 2;
  }
`,Ti=p.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Ri=p.h3`
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #eee;
`,$c=p.label`
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
`,Hy=p.button`
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
`,Wy=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Oc=p.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.9rem;
  border: 1px solid #ddd;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: #c41e3a;
  }
`,Vy=p.div`
  min-width: 0;
`,Gy=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
`,Qy=p.span`
  font-size: 0.9rem;
  color: #666;
`,qy=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,Yy=p.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: #444;
  white-space: nowrap;
`,Ky=p.select`
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
`,Xy=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

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
`,Zy=p.button`
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
`,Jy=p.div`
  @media (max-width: 991px) {
    display: ${({$open:e})=>e?"block":"none"};
    margin-bottom: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 8px;
  }
`,ex=[{value:"bestseller",label:"Mais vendidos"},{value:"price_asc",label:"Menor preço"},{value:"price_desc",label:"Maior preço"},{value:"newest",label:"Lançamentos"}],tx=["P","M","G","GG","EG"];function nx(e,t){const n=e.slug;return n||t.replace(/^\//,"").split("/")[0]||"times"}function rx(e,t,n,r){const i=Xa[r];let o=[...e];if(i!=null&&i.categorySlug&&(o=o.filter(l=>l.category===i.categorySlug)),i!=null&&i.filterPromoOnly&&(o=o.filter(l=>l.isPromo)),t.team&&(o=o.filter(l=>l.team===t.team)),t.size&&(o=o.filter(l=>{var s;return(s=l.sizes)==null?void 0:s.includes(t.size)})),t.promoOnly&&(o=o.filter(l=>l.isPromo)),t.priceMin!=null&&t.priceMin!==""){const l=Number(t.priceMin);Number.isNaN(l)||(o=o.filter(s=>s.price>=l))}if(t.priceMax!=null&&t.priceMax!==""){const l=Number(t.priceMax);Number.isNaN(l)||(o=o.filter(s=>s.price<=l))}return n==="bestseller"?o.sort((l,s)=>(s.salesCount||0)-(l.salesCount||0)):n==="price_asc"?o.sort((l,s)=>l.price-s.price):n==="price_desc"?o.sort((l,s)=>s.price-l.price):n==="newest"&&o.sort((l,s)=>new Date(s.createdAt)-new Date(l.createdAt)),o}function ix(e){return[...new Set(e.map(n=>n.team).filter(Boolean))].sort((n,r)=>n.localeCompare(r))}function jn(){const e=vp(),{pathname:t}=yn(),[n]=Lg(),r=nx(e,t),i=Xa[r]||Xa.times,o=n.get("time")||"",[l,s]=C.useState(i.sortDefault||"bestseller"),[u,c]=C.useState({team:o,size:"",promoOnly:i.filterPromoOnly||!1,priceMin:"",priceMax:""}),[h,g]=C.useState(!1);C.useEffect(()=>{o&&c(y=>({...y,team:o}))},[o]);const v=C.useMemo(()=>ix(ni),[]),w=C.useMemo(()=>rx(ni,u,l,r),[u,l,r]),x=(y,j)=>{c(m=>({...m,[y]:j}))};return a.jsxs(Ty,{children:[a.jsx(mn,{}),a.jsxs(Ry,{children:[a.jsx(My,{src:i.bannerImage,alt:""}),a.jsx($y,{}),a.jsxs(Oy,{children:[a.jsx(Fy,{children:i.title}),a.jsx(Ay,{children:i.subtitle})]})]}),a.jsx(Dy,{children:a.jsxs(By,{children:[a.jsxs(Uy,{children:[a.jsxs(Zy,{type:"button",onClick:()=>g(y=>!y),"aria-expanded":h,children:["Filtros ",h?"▲":"▼"]}),a.jsxs(Jy,{$open:h,children:[a.jsxs(Ti,{children:[a.jsx(Ri,{children:"Time"}),a.jsx("div",{children:v.map(y=>a.jsxs($c,{children:[a.jsx("input",{type:"radio",name:"team",checked:u.team===y,onChange:()=>x("team",u.team===y?"":y)}),y]},y))})]}),a.jsxs(Ti,{children:[a.jsx(Ri,{children:"Tamanho"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.25rem"},children:tx.map(y=>a.jsx(Hy,{type:"button",className:u.size===y?"active":"",onClick:()=>x("size",u.size===y?"":y),children:y},y))})]}),a.jsxs(Ti,{children:[a.jsx(Ri,{children:"Preço"}),a.jsxs(Wy,{children:[a.jsx(Oc,{type:"number",placeholder:"Mín. R$",min:"0",step:"10",value:u.priceMin,onChange:y=>x("priceMin",y.target.value)}),a.jsx(Oc,{type:"number",placeholder:"Máx. R$",min:"0",step:"10",value:u.priceMax,onChange:y=>x("priceMax",y.target.value)})]})]}),!i.filterPromoOnly&&a.jsxs(Ti,{children:[a.jsx(Ri,{children:"Promoção"}),a.jsxs($c,{children:[a.jsx("input",{type:"checkbox",checked:u.promoOnly,onChange:y=>x("promoOnly",y.target.checked)}),"Apenas em promoção"]})]})]})]}),a.jsxs(Vy,{children:[a.jsxs(Gy,{children:[a.jsxs(Qy,{children:[w.length," produto",w.length!==1?"s":""]}),a.jsxs(qy,{children:[a.jsx(Yy,{htmlFor:"plp-sort",children:"Ordenar:"}),a.jsx(Ky,{id:"plp-sort",value:l,onChange:y=>s(y.target.value),"aria-label":"Ordenação",children:ex.map(y=>a.jsx("option",{value:y.value,children:y.label},y.value))})]})]}),a.jsx(Xy,{children:w.map(y=>a.jsx(tu,{name:y.name,price:y.price,originalPrice:y.originalPrice,image:y.image,imageHover:y.imageHover,badge:y.badge,link:y.link},y.id))}),w.length===0&&a.jsx("p",{style:{textAlign:"center",padding:"3rem",color:"#666"},children:"Nenhum produto encontrado com os filtros selecionados. Tente alterar os filtros."})]})]})}),a.jsx(hn,{})]})}const ox=p.nav`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`,lx=p.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
`,Fc=p.li`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  &:not(:last-child)::after {
    content: '›';
    color: #9ca3af;
    font-weight: 400;
  }
`,ax=p.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }
`,sx=p.span`
  color: #1a1a1a;
  font-weight: 500;
`,ux=[{label:"Home",path:"/"},{label:"Camisas",path:"/produtos"}];function cx({items:e=ux,current:t}){return a.jsx(ox,{"aria-label":"Breadcrumb",children:a.jsxs(lx,{children:[e.map(n=>a.jsx(Fc,{children:a.jsx(ax,{as:ne,to:n.path,children:n.label})},n.path||n.label)),t&&a.jsx(Fc,{children:a.jsx(sx,{children:t})})]})})}const dx=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`,Jp=p.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
`,fx=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Jp}:hover & {
    transform: scale(1.05);
  }
`,px=p.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`,mx=p.button`
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
`,hx=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;function gx({gallery:e=[]}){const[t,n]=C.useState(0),r=e[t]||e[0];return e!=null&&e.length?a.jsxs(dx,{children:[a.jsx(Jp,{children:a.jsx(fx,{src:r==null?void 0:r.src,alt:(r==null?void 0:r.label)||"Imagem do produto"})}),a.jsx(px,{children:e.map((i,o)=>a.jsx(mx,{type:"button",$active:t===o,onClick:()=>n(o),"aria-label":i.label,"aria-pressed":t===o,children:a.jsx(hx,{src:i.src,alt:""})},o))})]}):null}const vx=p.div`
  margin-bottom: 1.25rem;
`,yx=p.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`,xx=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,wx=p.button`
  min-width: 48px;
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

  &:hover:not(:disabled) {
    border-color: #1a1a1a;
    background: ${({$selected:e})=>e?"#1a1a1a":"#f9fafb"};
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: 2px;
  }
`,kx=["P","M","G","GG","EG"];function Sx({sizeStock:e={},value:t,onChange:n}){const r=kx.filter(i=>e[i]!==void 0);return a.jsxs(vx,{children:[a.jsx(yx,{children:"Tamanho"}),a.jsx(xx,{children:r.map(i=>{const l=(e[i]??0)===0,s=t===i;return a.jsx(wx,{type:"button",$selected:s,$disabled:l,disabled:l,onClick:()=>!l&&n(i),"aria-pressed":s,"aria-label":`Tamanho ${i}${l?", sem estoque":""}`,children:i},i)})})]})}const Cx=p.div`
  margin-bottom: 1.25rem;
`,jx=p.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`,Ex=p.div`
  display: inline-flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
`,Ac=p.button`
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
`,Px=p.span`
  min-width: 48px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
`,bx=1,zx=10;function _x({value:e,onChange:t,min:n=bx,max:r=zx}){const i=e>n,o=e<r;return a.jsxs(Cx,{children:[a.jsx(jx,{children:"Quantidade"}),a.jsxs(Ex,{children:[a.jsx(Ac,{type:"button",onClick:()=>t(Math.max(n,e-1)),disabled:!i,"aria-label":"Diminuir quantidade",children:"−"}),a.jsx(Px,{"aria-live":"polite",children:e}),a.jsx(Ac,{type:"button",onClick:()=>t(Math.min(r,e+1)),disabled:!o,"aria-label":"Aumentar quantidade",children:"+"})]})]})}const Ix=p.button`
  width: 100%;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: ${({$disabled:e})=>e?"#9ca3af":"#c41e3a"};
  border: none;
  border-radius: 8px;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: background 0.2s ease, transform 0.15s ease;

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
`;function Nx({disabled:e,onAddToCart:t,children:n="Adicionar ao carrinho"}){const[r,i]=C.useState(!1),o=async()=>{if(!(e||r)){i(!0);try{await(t==null?void 0:t())}finally{i(!1)}}},l=e||r;return a.jsx(Ix,{type:"button",$disabled:l,disabled:l,onClick:o,"aria-busy":r,children:r?"Adicionando...":n})}const Lx=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e7eb;
`,Tx=p.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: #4b5563;
`,Rx=p.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #6b7280;
`,Mx=p.span`
  font-weight: 500;
  color: #374151;
`,$x=[{icon:"◆",label:"Material",text:"100% Poliéster"},{icon:"✈",label:"Envio",text:"Envio em até 48h"},{icon:"↔",label:"Troca",text:"Troca fácil em até 7 dias"}];function Ox({items:e=$x}){return a.jsx(Lx,{children:e.map(t=>a.jsxs(Tx,{children:[a.jsx(Rx,{"aria-hidden":!0,children:t.icon}),a.jsx(Mx,{children:t.text})]},t.label))})}const Fx=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ax=p.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
`,Dx=p.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`,Bx=p.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Ux=p.span`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a1a1a;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`,Hx=p.span`
  font-size: 1rem;
  font-weight: 400;
  color: #9ca3af;
  text-decoration: line-through;
`,Wx=p.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
`,Vx=p.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
`,Gx=p.div`
  flex-shrink: 0;
`,Qx=p.div`
  margin-top: 0.5rem;
  position: relative;
`,qx=p.span`
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
`;function Dc(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}function Yx({product:e,selectedSize:t,onSizeChange:n,quantity:r,onQuantityChange:i,onAddToCart:o,maxQuantity:l=10}){const s=(e==null?void 0:e.badge)||"Oficial",u=(e==null?void 0:e.isPromo)&&(e==null?void 0:e.originalPrice);return a.jsxs(Fx,{children:[a.jsx(Ax,{children:s}),a.jsx(Dx,{children:e==null?void 0:e.name}),a.jsxs(Bx,{children:[a.jsx(Ux,{children:Dc((e==null?void 0:e.price)??0)}),u&&a.jsxs(a.Fragment,{children:[a.jsx(Hx,{children:Dc(e.originalPrice)}),a.jsx(Wx,{children:"Promoção"})]})]}),a.jsx(Sx,{sizeStock:(e==null?void 0:e.sizeStock)??{},value:t,onChange:n}),a.jsx(Vx,{children:a.jsx(Gx,{children:a.jsx(_x,{value:r,onChange:i,min:1,max:l})})}),a.jsxs(Qx,{children:[a.jsx(Nx,{disabled:!t,onAddToCart:o}),addedFeedback&&a.jsx(qx,{children:"Adicionado ao carrinho!"})]}),a.jsx(Ox,{items:[{icon:"◆",label:"Material",text:(e==null?void 0:e.material)||"100% Poliéster"},{icon:"✈",label:"Envio",text:(e==null?void 0:e.shipping)||"Envio em até 48h"},{icon:"↔",label:"Troca",text:(e==null?void 0:e.exchange)||"Troca fácil em até 7 dias"}]})]})}const Bc=p.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
`,Uc=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,Kx=p.div`
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
`,Xx=p.div``,Zx=p.div`
  min-width: 0;
`,Jx=p.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`,ew=p.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
`,tw=p.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`,nw=p.div`
  text-align: center;
  padding: 4rem 1rem;
`,rw=p.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,iw=p.p`
  color: #6b7280;
  margin-bottom: 1rem;
`,ow=p(ne)`
  color: #c41e3a;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,lw=4;function aw(e){if(!e)return[{label:"Home",path:"/"},{label:"Camisas",path:"/produtos"}];const t=Yp[e.league]||e.league;return[{label:"Home",path:"/"},{label:"Camisas",path:"/produtos"},{label:t,path:`/${e.league}`}]}function sw(){const{id:e}=vp(),{addItem:t,openMiniCart:n}=ui(),r=C.useMemo(()=>wv(e),[e]),[i,o]=C.useState(null),[l,s]=C.useState(1),[u,c]=C.useState(!1),h=C.useMemo(()=>r?ni.filter(x=>x.id!==r.id).slice(0,lw):[],[r]),g=C.useMemo(()=>!i||!(r!=null&&r.sizeStock)?10:Math.min(10,r.sizeStock[i]||1),[r==null?void 0:r.sizeStock,i]);C.useEffect(()=>{l>g&&s(g)},[g,l]);const v=()=>{var w,x;t({productId:r.id,name:r.name,image:((x=(w=r.gallery)==null?void 0:w[0])==null?void 0:x.src)||r.image,size:i,quantity:l,unitPrice:r.price}),c(!0),n()};return C.useEffect(()=>{if(!u)return;const w=setTimeout(()=>c(!1),2500);return()=>clearTimeout(w)},[u]),r?a.jsxs(Bc,{children:[a.jsx(mn,{}),a.jsxs(Uc,{children:[a.jsx(cx,{items:aw(r),current:r.name}),a.jsxs(Kx,{children:[a.jsx(Xx,{children:a.jsx(gx,{gallery:r.gallery})}),a.jsx(Zx,{children:a.jsx(Yx,{product:r,selectedSize:i,onSizeChange:o,quantity:l,onQuantityChange:s,onAddToCart:v,maxQuantity:g,addedFeedback:u})})]}),h.length>0&&a.jsxs(Jx,{children:[a.jsx(ew,{children:"Você também pode gostar"}),a.jsx(tw,{children:h.map(w=>a.jsx(tu,{name:w.name,price:w.price,originalPrice:w.originalPrice,image:w.image,imageHover:w.imageHover,badge:w.badge,link:w.link},w.id))})]})]}),a.jsx(hn,{})]}):a.jsxs(Bc,{children:[a.jsx(mn,{}),a.jsx(Uc,{children:a.jsxs(nw,{children:[a.jsx(rw,{children:"Produto não encontrado"}),a.jsx(iw,{children:"O produto que você procura não existe ou foi removido."}),a.jsx(ow,{to:"/produtos",children:"Ver todos os produtos"})]})}),a.jsx(hn,{})]})}const uw=p(ne)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 120px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,cw=p.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  overflow: hidden;
  background: #f0f0f0;


`,dw=p.span`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.2;
`;function fw({name:e,image:t,link:n,fallbackImage:r}){const[i,o]=C.useState(t),l=()=>{r&&o(r)};return a.jsxs(uw,{as:ne,to:n,children:[a.jsx(cw,{src:i,alt:e,onError:l}),a.jsx(dw,{children:e})]})}const pw=p.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`,mw=p.header`
  position: relative;
  width: 100%;
  min-height: 220px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 280px;
  }
`,hw=p.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`,gw=p.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`,vw=p.div`
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
`,yw=p.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`,xw=p.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`,ww=p.main`
  flex: 1;
  padding: 3rem 0 4rem;
`,kw=p.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`,Sw=p.section`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,Cw=p.h2`
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
`,jw=p.div`
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
`;function Ew(){return a.jsxs(pw,{children:[a.jsx(mn,{}),a.jsxs(mw,{children:[a.jsx(hw,{src:"https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80",alt:""}),a.jsx(gw,{}),a.jsxs(vw,{children:[a.jsx(yw,{children:"Escolha seu time"}),a.jsx(xw,{children:"Clique no time para ver as camisas disponíveis"})]})]}),a.jsx(ww,{children:a.jsx(kw,{children:Kp.map(e=>a.jsxs(Sw,{children:[a.jsx(Cw,{children:e.name}),a.jsx(jw,{children:e.teams.map(t=>a.jsx(fw,{name:t.name,image:t.image,link:t.link,fallbackImage:t.fallbackImage??void 0},t.name))})]},e.id))})}),a.jsx(hn,{})]})}const Pw=p.div`
  display: inline-flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
`,Hc=p.button`
  width: 40px;
  height: 40px;
  min-width: 40px;
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
`,bw=p.span`
  min-width: 40px;
  text-align: center;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
`;function zw({value:e,onChange:t,min:n=1,max:r=99,"aria-label":i="Quantidade"}){const o=e>n,l=e<r;return a.jsxs(Pw,{role:"group","aria-label":i,children:[a.jsx(Hc,{type:"button",onClick:()=>t(Math.max(n,e-1)),disabled:!o,"aria-label":"Diminuir quantidade",children:"−"}),a.jsx(bw,{"aria-live":"polite",children:e}),a.jsx(Hc,{type:"button",onClick:()=>t(Math.min(r,e+1)),disabled:!l,"aria-label":"Aumentar quantidade",children:"+"})]})}const _w=p.article`
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
`,Iw=p.a`
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
`,Nw=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Lw=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
`,Tw=p.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
`,Rw=p.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`,Mw=p.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #374151;
`,$w=p.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`,Ow=p.div`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: right;

  @media (min-width: 640px) {
    min-width: 80px;
    text-align: right;
  }
`,Fw=p.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
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
`,Aw=p.div`
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
`;function Wc(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const Dw=()=>a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),a.jsx("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),a.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),a.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]});function Bw({item:e,onUpdateQuantity:t,onRemove:n}){const[r,i]=C.useState(!1),o=e.unitPrice*e.quantity;C.useEffect(()=>{if(!r)return;const s=setTimeout(()=>i(!1),3e3);return()=>clearTimeout(s)},[r]);const l=()=>{r?(n==null||n(e.productId,e.size),i(!1)):i(!0)};return a.jsxs(_w,{children:[a.jsx(Iw,{as:ne,to:`/produto/${e.productId}`,children:a.jsx(Nw,{src:e.image,alt:e.name})}),a.jsxs(Lw,{children:[a.jsx(Tw,{children:e.name}),a.jsxs(Rw,{children:["Tamanho: ",e.size]}),a.jsx(Mw,{children:Wc(e.unitPrice)})]}),a.jsx($w,{children:a.jsx(zw,{value:e.quantity,onChange:s=>t==null?void 0:t(e.productId,e.size,s),min:1,max:99,"aria-label":`Quantidade de ${e.name}`})}),a.jsx(Ow,{children:Wc(o)}),a.jsxs(Aw,{children:[a.jsx(Fw,{type:"button",onClick:l,"aria-label":r?"Clique novamente para remover":"Remover item",title:r?"Clique novamente para remover":"Remover",children:a.jsx(Dw,{})}),r&&a.jsx("span",{style:{fontSize:"0.75rem",color:"#c41e3a",fontWeight:600},children:"Clique de novo para remover"})]})]})}const Uw=p.aside`
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
`,Hw=p.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`,Za=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`,Ww=p(Za)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 1rem;
`,Vw=p.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 1rem;
`,Gw=p.button`
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
`;function Vc(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const Qw=0;function qw({subtotal:e,itemCount:t,onCheckout:n}){const i=e+Qw;return a.jsxs(Uw,{children:[a.jsx(Hw,{children:"Resumo do pedido"}),a.jsxs(Za,{children:[a.jsxs("span",{children:["Subtotal (",t," ",t===1?"item":"itens",")"]}),a.jsx("span",{children:Vc(e)})]}),a.jsxs(Za,{children:[a.jsx("span",{children:"Frete"}),a.jsx("span",{children:"Calculado no checkout"})]}),a.jsx(Vw,{children:"O valor do frete será calculado na próxima etapa."}),a.jsxs(Ww,{children:[a.jsx("span",{children:"Total"}),a.jsx("span",{children:Vc(i)})]}),a.jsx(Gw,{type:"button",disabled:t===0,onClick:n,"aria-label":"Finalizar compra",children:"Finalizar compra"})]})}const Yw=p.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem;
  min-height: 320px;
`,Kw=p.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #d1d5db;
  margin-bottom: 1.25rem;
`,Xw=p.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`,Zw=p.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  max-width: 280px;
`,Jw=p(ne)`
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
`,e2=()=>a.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[a.jsx("path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}),a.jsx("path",{d:"M3 6h18"}),a.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]});function t2(){return a.jsxs(Yw,{children:[a.jsx(Kw,{"aria-hidden":!0,children:a.jsx(e2,{})}),a.jsx(Xw,{children:"Seu carrinho está vazio"}),a.jsx(Zw,{children:"Adicione camisas do seu time e finalize sua compra quando quiser."}),a.jsx(Jw,{to:"/produtos",children:"Voltar para a loja"})]})}const n2=p.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,r2=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,i2=p.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,o2=p.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`,l2=p.a`
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
`,a2=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 340px;
    gap: 2rem;
  }
`,s2=p.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
`,u2=p.div`
  @media (max-width: 767px) {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: #fff;
    border-top: 1px solid #e5e7eb;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.06);
    z-index: 10;
  }
`;function c2(){const e=qo(),{items:t,itemCount:n,subtotal:r,updateQuantity:i,removeItem:o}=ui(),l=()=>{n!==0&&e("/checkout")};return a.jsxs(n2,{children:[a.jsx(mn,{}),a.jsxs(r2,{children:[a.jsxs(i2,{children:[a.jsx(o2,{children:"Meu Carrinho"}),a.jsx(l2,{as:ne,to:"/produtos",children:"Continuar comprando"})]}),t.length===0?a.jsx(t2,{}):a.jsxs(a2,{children:[a.jsx(s2,{children:t.map(s=>a.jsx(Bw,{item:s,onUpdateQuantity:i,onRemove:o},`${s.productId}-${s.size}`))}),a.jsx(u2,{children:a.jsx(qw,{subtotal:r,itemCount:n,onCheckout:l})})]})]}),a.jsx(hn,{})]})}const d2=p.aside`
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
`,f2=p.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
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
  }
`,p2=p.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({$open:e})=>e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.2s ease;

  @media (min-width: 768px) {
    display: none;
  }
`,m2=p.div`
  padding: 0 1.25rem 1.25rem;
  max-height: ${({$open:e})=>e?"800px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;

  @media (min-width: 768px) {
    max-height: none;
    padding: 1.25rem;
  }
`,h2=p.ul`
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
`,g2=p.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: #374151;
`,v2=p.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`,y2=p.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,x2=p.div`
  flex: 1;
  min-width: 0;
`,w2=p.span`
  display: block;
  font-weight: 500;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,k2=p.span`
  font-size: 0.8125rem;
  color: #6b7280;
`,S2=p.span`
  font-weight: 600;
  color: #1a1a1a;
  flex-shrink: 0;
`,Ja=p.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`,C2=p(Ja)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 0;
`,j2=p.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 0.5rem;
`;function Al(e){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e)}const E2=()=>a.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:a.jsx("path",{d:"m6 9 6 6 6-6"})}),P2=0;function b2({items:e,subtotal:t}){const[n,r]=C.useState(!1),o=t+P2;return a.jsxs(d2,{children:[a.jsxs(f2,{type:"button",onClick:()=>r(l=>!l),"aria-expanded":n,children:[a.jsx("span",{children:"Resumo do pedido"}),a.jsx(p2,{$open:n,children:a.jsx(E2,{})})]}),a.jsxs(m2,{$open:n,children:[a.jsx(h2,{children:e.map(l=>a.jsxs(g2,{children:[a.jsx(v2,{children:a.jsx(y2,{src:l.image,alt:l.name})}),a.jsxs(x2,{children:[a.jsx(w2,{children:l.name}),a.jsxs(k2,{children:["Tamanho ",l.size," · ",l.quantity,"x"]})]}),a.jsx(S2,{children:Al(l.unitPrice*l.quantity)})]},`${l.productId}-${l.size}`))}),a.jsxs(Ja,{children:[a.jsxs("span",{children:["Subtotal (",e.reduce((l,s)=>l+s.quantity,0)," itens)"]}),a.jsx("span",{children:Al(t)})]}),a.jsxs(Ja,{children:[a.jsx("span",{children:"Frete"}),a.jsx("span",{children:"Calculado no checkout"})]}),a.jsx(j2,{children:"O valor do frete será calculado na próxima etapa."}),a.jsxs(C2,{children:[a.jsx("span",{children:"Total"}),a.jsx("span",{children:Al(o)})]})]})]})}const z2=p.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`,_2=p.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`,I2=p.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 360px;
    gap: 2rem;
  }
`,N2=p.div`
  min-width: 0;
`,Mi=p.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`,Dl=p.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1.25rem;
`,Bl=p.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ye=p.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`,ze=p.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`,_e=p.input`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  font-size: 1rem;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;

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
`,Ul=p.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`,Hl=p.button`
  width: 100%;
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
`,L2=p.div`
  text-align: center;
  padding: 2rem 1rem;
`,T2=p.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
`,R2=p.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 2rem;
`,M2=p.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
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
`,Gc=p.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 2px solid ${({$selected:e})=>e?"#c41e3a":"#e5e7eb"};
  border-radius: 8px;
  cursor: pointer;
  background: ${({$selected:e})=>e?"rgba(196, 30, 58, 0.04)":"#fff"};
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${({$selected:e})=>e?"#c41e3a":"#d1d5db"};
  }
`,Qc=p.input`
  width: 20px;
  height: 20px;
  accent-color: #c41e3a;
`,$2=p.div`
  @media (max-width: 767px) {
    order: -1;
  }
`,O2=p.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,F2=p.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({$active:e})=>e?"#c41e3a":"#e5e7eb"};
  transition: background 0.2s;
`,A2=[{id:1,title:"Dados pessoais"},{id:2,title:"Endereço"},{id:3,title:"Pagamento"},{id:4,title:"Confirmação"}];function qc(e){const t=(e.nome||"").trim(),n=(e.email||"").trim(),r=(e.cpf||"").trim();return t.length>=3&&n.includes("@")&&r.length>=11}function Yc(e){const t=(e.cep||"").trim(),n=(e.rua||"").trim(),r=(e.numero||"").trim(),i=(e.cidade||"").trim(),o=(e.estado||"").trim();return t.length>=8&&n.length>=3&&r.length>=1&&i.length>=2&&o.length>=2}function D2(){const e=qo(),{items:t,subtotal:n,itemCount:r,clearCart:i}=ui(),[o,l]=C.useState(1),[s,u]=C.useState({nome:"",email:"",cpf:"",cep:"",rua:"",numero:"",complemento:"",cidade:"",estado:"",paymentMethod:"credit"});C.useEffect(()=>{r===0&&o<4&&e("/carrinho",{replace:!0})},[r,o,e]);const c=o===4,h=x=>{const{name:y,value:j}=x.target;u(m=>({...m,[y]:j}))},g=x=>{x.preventDefault(),qc(s)&&l(2)},v=x=>{x.preventDefault(),Yc(s)&&l(3)},w=x=>{x.preventDefault(),l(4),i()};return r===0&&!c?null:a.jsxs(z2,{children:[a.jsx(mn,{}),a.jsx(_2,{children:a.jsxs(I2,{children:[a.jsxs(N2,{children:[a.jsx(O2,{children:A2.map(x=>a.jsx(F2,{$active:o>=x.id,"aria-hidden":!0},x.id))}),o===1&&a.jsxs(Mi,{children:[a.jsx(Dl,{children:"Dados pessoais"}),a.jsxs(Bl,{onSubmit:g,children:[a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"nome",children:"Nome completo"}),a.jsx(_e,{id:"nome",name:"nome",type:"text",placeholder:"Seu nome completo",value:s.nome,onChange:h,required:!0,minLength:3})]}),a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"email",children:"Email"}),a.jsx(_e,{id:"email",name:"email",type:"email",placeholder:"seu@email.com",value:s.email,onChange:h,required:!0})]}),a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"cpf",children:"CPF"}),a.jsx(_e,{id:"cpf",name:"cpf",type:"text",placeholder:"000.000.000-00",value:s.cpf,onChange:h,required:!0,minLength:11})]}),a.jsx(Hl,{type:"submit",disabled:!qc(s),children:"Continuar"})]})]}),o===2&&a.jsxs(Mi,{children:[a.jsx(Dl,{children:"Endereço"}),a.jsxs(Bl,{onSubmit:v,children:[a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"cep",children:"CEP"}),a.jsx(_e,{id:"cep",name:"cep",type:"text",placeholder:"00000-000",value:s.cep,onChange:h,required:!0})]}),a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"rua",children:"Rua"}),a.jsx(_e,{id:"rua",name:"rua",type:"text",placeholder:"Nome da rua",value:s.rua,onChange:h,required:!0})]}),a.jsxs(Ul,{children:[a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"numero",children:"Número"}),a.jsx(_e,{id:"numero",name:"numero",type:"text",placeholder:"Nº",value:s.numero,onChange:h,required:!0})]}),a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"complemento",children:"Complemento"}),a.jsx(_e,{id:"complemento",name:"complemento",type:"text",placeholder:"Apto, bloco",value:s.complemento,onChange:h})]})]}),a.jsxs(Ul,{children:[a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"cidade",children:"Cidade"}),a.jsx(_e,{id:"cidade",name:"cidade",type:"text",placeholder:"Cidade",value:s.cidade,onChange:h,required:!0})]}),a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"estado",children:"Estado"}),a.jsx(_e,{id:"estado",name:"estado",type:"text",placeholder:"UF",value:s.estado,onChange:h,required:!0,maxLength:2})]})]}),a.jsx(Hl,{type:"submit",disabled:!Yc(s),children:"Continuar"})]})]}),o===3&&a.jsxs(Mi,{children:[a.jsx(Dl,{children:"Pagamento"}),a.jsxs(Bl,{onSubmit:w,children:[a.jsx(ye,{children:a.jsxs(Gc,{$selected:s.paymentMethod==="credit",children:[a.jsx(Qc,{type:"radio",name:"paymentMethod",value:"credit",checked:s.paymentMethod==="credit",onChange:h}),a.jsx("span",{children:"Cartão de crédito"})]})}),a.jsx(ye,{children:a.jsxs(Gc,{$selected:s.paymentMethod==="pix",children:[a.jsx(Qc,{type:"radio",name:"paymentMethod",value:"pix",checked:s.paymentMethod==="pix",onChange:h}),a.jsx("span",{children:"Pix"})]})}),s.paymentMethod==="credit"&&a.jsxs(a.Fragment,{children:[a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"cardNumber",children:"Número do cartão (mock)"}),a.jsx(_e,{id:"cardNumber",name:"cardNumber",type:"text",placeholder:"0000 0000 0000 0000",readOnly:!0,disabled:!0})]}),a.jsxs(Ul,{children:[a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"cardExp",children:"Validade (mock)"}),a.jsx(_e,{id:"cardExp",name:"cardExp",type:"text",placeholder:"MM/AA",readOnly:!0,disabled:!0})]}),a.jsxs(ye,{children:[a.jsx(ze,{htmlFor:"cardCvv",children:"CVV (mock)"}),a.jsx(_e,{id:"cardCvv",name:"cardCvv",type:"text",placeholder:"***",readOnly:!0,disabled:!0})]})]})]}),s.paymentMethod==="pix"&&a.jsxs(ye,{children:[a.jsx(ze,{children:"Pix (mock)"}),a.jsx(_e,{type:"text",placeholder:"QR Code será exibido aqui",readOnly:!0,disabled:!0})]}),a.jsx(Hl,{type:"submit",children:"Finalizar compra"})]})]}),o===4&&a.jsx(Mi,{children:a.jsxs(L2,{children:[a.jsx(T2,{children:"Compra realizada com sucesso!"}),a.jsx(R2,{children:"Obrigado por comprar na Artilheiro Store."}),a.jsx(M2,{as:ne,to:"/",children:"Voltar para a loja"})]})})]}),a.jsx($2,{children:(o===1||o===2||o===3)&&t.length>0&&a.jsx(b2,{items:t,subtotal:n})})]})}),a.jsx(hn,{})]})}function B2(){return a.jsx(bg,{children:a.jsxs(Og,{children:[a.jsx(hv,{}),a.jsxs(yg,{children:[a.jsx(Oe,{path:"/",element:a.jsx(Ly,{})}),a.jsx(Oe,{path:"/times",element:a.jsx(Ew,{})}),a.jsx(Oe,{path:"/produtos",element:a.jsx(jn,{})}),a.jsx(Oe,{path:"/produto/:id",element:a.jsx(sw,{})}),a.jsx(Oe,{path:"/carrinho",element:a.jsx(c2,{})}),a.jsx(Oe,{path:"/checkout",element:a.jsx(D2,{})}),a.jsx(Oe,{path:"/categoria/:slug",element:a.jsx(jn,{})}),a.jsx(Oe,{path:"/brasileirao",element:a.jsx(jn,{})}),a.jsx(Oe,{path:"/europeus",element:a.jsx(jn,{})}),a.jsx(Oe,{path:"/lancamentos",element:a.jsx(jn,{})}),a.jsx(Oe,{path:"/promocoes",element:a.jsx(jn,{})})]})]})})}const U2=A1`
  :root {
    --navbar-height: 100px;
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
`;Wl.createRoot(document.getElementById("root")).render(a.jsxs(ue.StrictMode,{children:[a.jsx(U2,{}),a.jsx(B2,{})]}));
