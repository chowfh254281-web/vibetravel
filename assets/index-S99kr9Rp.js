(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Cw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cg={exports:{}},El={},Pg={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lo=Symbol.for("react.element"),Pw=Symbol.for("react.portal"),xw=Symbol.for("react.fragment"),Nw=Symbol.for("react.strict_mode"),Dw=Symbol.for("react.profiler"),Vw=Symbol.for("react.provider"),Ow=Symbol.for("react.context"),Mw=Symbol.for("react.forward_ref"),Lw=Symbol.for("react.suspense"),bw=Symbol.for("react.memo"),Fw=Symbol.for("react.lazy"),np=Symbol.iterator;function Uw(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var xg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ng=Object.assign,Dg={};function bi(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||xg}bi.prototype.isReactComponent={};bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vg(){}Vg.prototype=bi.prototype;function wh(t,e,n){this.props=t,this.context=e,this.refs=Dg,this.updater=n||xg}var Eh=wh.prototype=new Vg;Eh.constructor=wh;Ng(Eh,bi.prototype);Eh.isPureReactComponent=!0;var rp=Array.isArray,Og=Object.prototype.hasOwnProperty,Th={current:null},Mg={key:!0,ref:!0,__self:!0,__source:!0};function Lg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Og.call(e,r)&&!Mg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:lo,type:t,key:s,ref:o,props:i,_owner:Th.current}}function jw(t,e){return{$$typeof:lo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ih(t){return typeof t=="object"&&t!==null&&t.$$typeof===lo}function zw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ip=/\/+/g;function _u(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zw(""+t.key):e.toString(36)}function ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case lo:case Pw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_u(o,0):r,rp(i)?(n="",t!=null&&(n=t.replace(ip,"$&/")+"/"),ha(i,e,n,"",function(h){return h})):i!=null&&(Ih(i)&&(i=jw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ip,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",rp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+_u(s,l);o+=ha(s,e,n,u,i)}else if(u=Uw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+_u(s,l++),o+=ha(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Bo(t,e,n){if(t==null)return t;var r=[],i=0;return ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Bw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dt={current:null},da={transition:null},$w={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:da,ReactCurrentOwner:Th};function bg(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Bo,forEach:function(t,e,n){Bo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Bo(t,function(){e++}),e},toArray:function(t){return Bo(t,function(e){return e})||[]},only:function(t){if(!Ih(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=bi;ee.Fragment=xw;ee.Profiler=Dw;ee.PureComponent=wh;ee.StrictMode=Nw;ee.Suspense=Lw;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$w;ee.act=bg;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ng({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Th.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Og.call(e,u)&&!Mg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:lo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:Ow,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vw,_context:t},t.Consumer=t};ee.createElement=Lg;ee.createFactory=function(t){var e=Lg.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:Mw,render:t}};ee.isValidElement=Ih;ee.lazy=function(t){return{$$typeof:Fw,_payload:{_status:-1,_result:t},_init:Bw}};ee.memo=function(t,e){return{$$typeof:bw,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=da.transition;da.transition={};try{t()}finally{da.transition=e}};ee.unstable_act=bg;ee.useCallback=function(t,e){return dt.current.useCallback(t,e)};ee.useContext=function(t){return dt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return dt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return dt.current.useEffect(t,e)};ee.useId=function(){return dt.current.useId()};ee.useImperativeHandle=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return dt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return dt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return dt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return dt.current.useReducer(t,e,n)};ee.useRef=function(t){return dt.current.useRef(t)};ee.useState=function(t){return dt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return dt.current.useTransition()};ee.version="18.3.1";Pg.exports=ee;var he=Pg.exports;const Hw=Cw(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ww=he,qw=Symbol.for("react.element"),Kw=Symbol.for("react.fragment"),Gw=Object.prototype.hasOwnProperty,Qw=Ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xw={key:!0,ref:!0,__self:!0,__source:!0};function Fg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Gw.call(e,r)&&!Xw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:qw,type:t,key:s,ref:o,props:i,_owner:Qw.current}}El.Fragment=Kw;El.jsx=Fg;El.jsxs=Fg;Cg.exports=El;var k=Cg.exports,Ug={exports:{}},Rt={},jg={exports:{}},zg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var Z=B.length;B.push(K);e:for(;0<Z;){var me=Z-1>>>1,le=B[me];if(0<i(le,K))B[me]=K,B[Z]=le,Z=me;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],Z=B.pop();if(Z!==K){B[0]=Z;e:for(var me=0,le=B.length,Te=le>>>1;me<Te;){var Ft=2*(me+1)-1,Fe=B[Ft],Pt=Ft+1,z=B[Pt];if(0>i(Fe,Z))Pt<le&&0>i(z,Fe)?(B[me]=z,B[Pt]=Z,me=Pt):(B[me]=Fe,B[Ft]=Z,me=Ft);else if(Pt<le&&0>i(z,Z))B[me]=z,B[Pt]=Z,me=Pt;else break e}}return K}function i(B,K){var Z=B.sortIndex-K.sortIndex;return Z!==0?Z:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,y=3,R=!1,x=!1,D=!1,O=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function V(B){if(D=!1,S(B),!x)if(n(u)!==null)x=!0,fr(U);else{var K=n(h);K!==null&&wt(V,K.startTime-B)}}function U(B,K){x=!1,D&&(D=!1,I(m),m=-1),R=!0;var Z=y;try{for(S(K),g=n(u);g!==null&&(!(g.expirationTime>K)||B&&!A());){var me=g.callback;if(typeof me=="function"){g.callback=null,y=g.priorityLevel;var le=me(g.expirationTime<=K);K=t.unstable_now(),typeof le=="function"?g.callback=le:g===n(u)&&r(u),S(K)}else r(u);g=n(u)}if(g!==null)var Te=!0;else{var Ft=n(h);Ft!==null&&wt(V,Ft.startTime-K),Te=!1}return Te}finally{g=null,y=Z,R=!1}}var F=!1,v=null,m=-1,_=5,T=-1;function A(){return!(t.unstable_now()-T<_)}function C(){if(v!==null){var B=t.unstable_now();T=B;var K=!0;try{K=v(!0,B)}finally{K?E():(F=!1,v=null)}}else F=!1}var E;if(typeof w=="function")E=function(){w(C)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ln=at.port2;at.port1.onmessage=C,E=function(){ln.postMessage(null)}}else E=function(){O(C,0)};function fr(B){v=B,F||(F=!0,E())}function wt(B,K){m=O(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||R||(x=!0,fr(U))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Z=y;y=K;try{return B()}finally{y=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Z=y;y=B;try{return K()}finally{y=Z}},t.unstable_scheduleCallback=function(B,K,Z){var me=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?me+Z:me):Z=me,B){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=Z+le,B={id:f++,callback:K,priorityLevel:B,startTime:Z,expirationTime:le,sortIndex:-1},Z>me?(B.sortIndex=Z,e(h,B),n(u)===null&&B===n(h)&&(D?(I(m),m=-1):D=!0,wt(V,Z-me))):(B.sortIndex=le,e(u,B),x||R||(x=!0,fr(U))),B},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(B){var K=y;return function(){var Z=y;y=K;try{return B.apply(this,arguments)}finally{y=Z}}}})(zg);jg.exports=zg;var Yw=jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jw=he,At=Yw;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bg=new Set,Ls={};function jr(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for(Ls[t]=e,t=0;t<e.length;t++)Bg.add(e[t])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=Object.prototype.hasOwnProperty,Zw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sp={},op={};function eE(t){return sc.call(op,t)?!0:sc.call(sp,t)?!1:Zw.test(t)?op[t]=!0:(sp[t]=!0,!1)}function tE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nE(t,e,n,r){if(e===null||typeof e>"u"||tE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ft(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ge[t]=new ft(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ge[e]=new ft(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ge[t]=new ft(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ge[t]=new ft(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ge[t]=new ft(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ge[t]=new ft(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ge[t]=new ft(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ge[t]=new ft(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ge[t]=new ft(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sh=/[\-:]([a-z])/g;function Ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sh,Ah);Ge[e]=new ft(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sh,Ah);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sh,Ah);Ge[e]=new ft(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!1,!1)});Ge.xlinkHref=new ft("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ge[t]=new ft(t,1,!1,t.toLowerCase(),null,!0,!0)});function kh(t,e,n,r){var i=Ge.hasOwnProperty(e)?Ge[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nE(e,n,i,r)&&(n=null),r||i===null?eE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pn=Jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$o=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),Rh=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Hg=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),lc=Symbol.for("react.suspense_list"),Ph=Symbol.for("react.memo"),Ln=Symbol.for("react.lazy"),Wg=Symbol.for("react.offscreen"),ap=Symbol.iterator;function ss(t){return t===null||typeof t!="object"?null:(t=ap&&t[ap]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,wu;function ps(t){if(wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||""}return`
`+wu+t}var Eu=!1;function Tu(t,e){if(!t||Eu)return"";Eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ps(t):""}function rE(t){switch(t.tag){case 5:return ps(t.type);case 16:return ps("Lazy");case 13:return ps("Suspense");case 19:return ps("SuspenseList");case 0:case 2:case 15:return t=Tu(t.type,!1),t;case 11:return t=Tu(t.type.render,!1),t;case 1:return t=Tu(t.type,!0),t;default:return""}}function uc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zr:return"Portal";case oc:return"Profiler";case Rh:return"StrictMode";case ac:return"Suspense";case lc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hg:return(t.displayName||"Context")+".Consumer";case $g:return(t._context.displayName||"Context")+".Provider";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ph:return e=t.displayName||null,e!==null?e:uc(t.type)||"Memo";case Ln:e=t._payload,t=t._init;try{return uc(t(e))}catch{}}return null}function iE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return uc(e);case 8:return e===Rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sE(t){var e=qg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){t._valueTracker||(t._valueTracker=sE(t))}function Kg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cc(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gg(t,e){e=e.checked,e!=null&&kh(t,"checked",e,!1)}function hc(t,e){Gg(t,e);var n=ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&dc(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function up(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dc(t,e,n){(e!=="number"||Va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ms=Array.isArray;function hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(ms(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function Qg(t,e){var n=ir(e.value),r=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wo,Yg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wo=Wo||document.createElement("div"),Wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ts={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oE=["Webkit","ms","Moz","O"];Object.keys(Ts).forEach(function(t){oE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ts[e]=Ts[t]})});function Jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ts.hasOwnProperty(t)&&Ts[t]?(""+e).trim():e+"px"}function Zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var aE=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mc(t,e){if(e){if(aE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function gc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yc=null;function xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vc=null,di=null,fi=null;function dp(t){if(t=ho(t)){if(typeof vc!="function")throw Error(b(280));var e=t.stateNode;e&&(e=kl(e),vc(t.stateNode,t.type,e))}}function ey(t){di?fi?fi.push(t):fi=[t]:di=t}function ty(){if(di){var t=di,e=fi;if(fi=di=null,dp(t),e)for(t=0;t<e.length;t++)dp(e[t])}}function ny(t,e){return t(e)}function ry(){}var Iu=!1;function iy(t,e,n){if(Iu)return t(e,n);Iu=!0;try{return ny(t,e,n)}finally{Iu=!1,(di!==null||fi!==null)&&(ry(),ty())}}function Fs(t,e){var n=t.stateNode;if(n===null)return null;var r=kl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var _c=!1;if(En)try{var os={};Object.defineProperty(os,"passive",{get:function(){_c=!0}}),window.addEventListener("test",os,os),window.removeEventListener("test",os,os)}catch{_c=!1}function lE(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Is=!1,Oa=null,Ma=!1,wc=null,uE={onError:function(t){Is=!0,Oa=t}};function cE(t,e,n,r,i,s,o,l,u){Is=!1,Oa=null,lE.apply(uE,arguments)}function hE(t,e,n,r,i,s,o,l,u){if(cE.apply(this,arguments),Is){if(Is){var h=Oa;Is=!1,Oa=null}else throw Error(b(198));Ma||(Ma=!0,wc=h)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fp(t){if(zr(t)!==t)throw Error(b(188))}function dE(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return fp(i),t;if(s===r)return fp(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function oy(t){return t=dE(t),t!==null?ay(t):null}function ay(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ay(t);if(e!==null)return e;t=t.sibling}return null}var ly=At.unstable_scheduleCallback,pp=At.unstable_cancelCallback,fE=At.unstable_shouldYield,pE=At.unstable_requestPaint,Ne=At.unstable_now,mE=At.unstable_getCurrentPriorityLevel,Nh=At.unstable_ImmediatePriority,uy=At.unstable_UserBlockingPriority,La=At.unstable_NormalPriority,gE=At.unstable_LowPriority,cy=At.unstable_IdlePriority,Tl=null,Zt=null;function yE(t){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Tl,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:wE,vE=Math.log,_E=Math.LN2;function wE(t){return t>>>=0,t===0?32:31-(vE(t)/_E|0)|0}var qo=64,Ko=4194304;function gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=gs(l):(s&=o,s!==0&&(r=gs(s)))}else o=n&~i,o!==0?r=gs(o):s!==0&&(r=gs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function EE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=EE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hy(){var t=qo;return qo<<=1,!(qo&4194240)&&(qo=64),t}function Su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function IE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ue=0;function dy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fy,Vh,py,my,gy,Tc=!1,Go=[],qn=null,Kn=null,Gn=null,Us=new Map,js=new Map,Fn=[],SE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mp(t,e){switch(t){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Kn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":Us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(e.pointerId)}}function as(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ho(e),e!==null&&Vh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AE(t,e,n,r,i){switch(e){case"focusin":return qn=as(qn,t,e,n,r,i),!0;case"dragenter":return Kn=as(Kn,t,e,n,r,i),!0;case"mouseover":return Gn=as(Gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Us.set(s,as(Us.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,js.set(s,as(js.get(s)||null,t,e,n,r,i)),!0}return!1}function yy(t){var e=Er(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=sy(n),e!==null){t.blockedOn=e,gy(t.priority,function(){py(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);yc=r,n.target.dispatchEvent(r),yc=null}else return e=ho(n),e!==null&&Vh(e),t.blockedOn=n,!1;e.shift()}return!0}function gp(t,e,n){fa(t)&&n.delete(e)}function kE(){Tc=!1,qn!==null&&fa(qn)&&(qn=null),Kn!==null&&fa(Kn)&&(Kn=null),Gn!==null&&fa(Gn)&&(Gn=null),Us.forEach(gp),js.forEach(gp)}function ls(t,e){t.blockedOn===e&&(t.blockedOn=null,Tc||(Tc=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,kE)))}function zs(t){function e(i){return ls(i,t)}if(0<Go.length){ls(Go[0],t);for(var n=1;n<Go.length;n++){var r=Go[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qn!==null&&ls(qn,t),Kn!==null&&ls(Kn,t),Gn!==null&&ls(Gn,t),Us.forEach(e),js.forEach(e),n=0;n<Fn.length;n++)r=Fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)yy(n),n.blockedOn===null&&Fn.shift()}var pi=Pn.ReactCurrentBatchConfig,Fa=!0;function RE(t,e,n,r){var i=ue,s=pi.transition;pi.transition=null;try{ue=1,Oh(t,e,n,r)}finally{ue=i,pi.transition=s}}function CE(t,e,n,r){var i=ue,s=pi.transition;pi.transition=null;try{ue=4,Oh(t,e,n,r)}finally{ue=i,pi.transition=s}}function Oh(t,e,n,r){if(Fa){var i=Ic(t,e,n,r);if(i===null)Ou(t,e,r,Ua,n),mp(t,r);else if(AE(i,t,e,n,r))r.stopPropagation();else if(mp(t,r),e&4&&-1<SE.indexOf(t)){for(;i!==null;){var s=ho(i);if(s!==null&&fy(s),s=Ic(t,e,n,r),s===null&&Ou(t,e,r,Ua,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ou(t,e,r,null,n)}}var Ua=null;function Ic(t,e,n,r){if(Ua=null,t=xh(r),t=Er(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ua=t,null}function vy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mE()){case Nh:return 1;case uy:return 4;case La:case gE:return 16;case cy:return 536870912;default:return 16}default:return 16}}var $n=null,Mh=null,pa=null;function _y(){if(pa)return pa;var t,e=Mh,n=e.length,r,i="value"in $n?$n.value:$n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return pa=i.slice(t,1<r?1-r:void 0)}function ma(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function yp(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qo:yp,this.isPropagationStopped=yp,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),e}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lh=Ct(Fi),co=Ae({},Fi,{view:0,detail:0}),PE=Ct(co),Au,ku,us,Il=Ae({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==us&&(us&&t.type==="mousemove"?(Au=t.screenX-us.screenX,ku=t.screenY-us.screenY):ku=Au=0,us=t),Au)},movementY:function(t){return"movementY"in t?t.movementY:ku}}),vp=Ct(Il),xE=Ae({},Il,{dataTransfer:0}),NE=Ct(xE),DE=Ae({},co,{relatedTarget:0}),Ru=Ct(DE),VE=Ae({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),OE=Ct(VE),ME=Ae({},Fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LE=Ct(ME),bE=Ae({},Fi,{data:0}),_p=Ct(bE),FE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},UE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jE[t])?!!e[t]:!1}function bh(){return zE}var BE=Ae({},co,{key:function(t){if(t.key){var e=FE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ma(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?UE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bh,charCode:function(t){return t.type==="keypress"?ma(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ma(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$E=Ct(BE),HE=Ae({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Ct(HE),WE=Ae({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bh}),qE=Ct(WE),KE=Ae({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),GE=Ct(KE),QE=Ae({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XE=Ct(QE),YE=[9,13,27,32],Fh=En&&"CompositionEvent"in window,Ss=null;En&&"documentMode"in document&&(Ss=document.documentMode);var JE=En&&"TextEvent"in window&&!Ss,wy=En&&(!Fh||Ss&&8<Ss&&11>=Ss),Ep=" ",Tp=!1;function Ey(t,e){switch(t){case"keyup":return YE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ty(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function ZE(t,e){switch(t){case"compositionend":return Ty(e);case"keypress":return e.which!==32?null:(Tp=!0,Ep);case"textInput":return t=e.data,t===Ep&&Tp?null:t;default:return null}}function eT(t,e){if(ti)return t==="compositionend"||!Fh&&Ey(t,e)?(t=_y(),pa=Mh=$n=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wy&&e.locale!=="ko"?null:e.data;default:return null}}var tT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tT[t.type]:e==="textarea"}function Iy(t,e,n,r){ey(r),e=ja(e,"onChange"),0<e.length&&(n=new Lh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var As=null,Bs=null;function nT(t){Oy(t,0)}function Sl(t){var e=ii(t);if(Kg(e))return t}function rT(t,e){if(t==="change")return e}var Sy=!1;if(En){var Cu;if(En){var Pu="oninput"in document;if(!Pu){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),Pu=typeof Sp.oninput=="function"}Cu=Pu}else Cu=!1;Sy=Cu&&(!document.documentMode||9<document.documentMode)}function Ap(){As&&(As.detachEvent("onpropertychange",Ay),Bs=As=null)}function Ay(t){if(t.propertyName==="value"&&Sl(Bs)){var e=[];Iy(e,Bs,t,xh(t)),iy(nT,e)}}function iT(t,e,n){t==="focusin"?(Ap(),As=e,Bs=n,As.attachEvent("onpropertychange",Ay)):t==="focusout"&&Ap()}function sT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(Bs)}function oT(t,e){if(t==="click")return Sl(e)}function aT(t,e){if(t==="input"||t==="change")return Sl(e)}function lT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:lT;function $s(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!sc.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function kp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rp(t,e){var n=kp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kp(n)}}function ky(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ky(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ry(){for(var t=window,e=Va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Va(t.document)}return e}function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uT(t){var e=Ry(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ky(n.ownerDocument.documentElement,n)){if(r!==null&&Uh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Rp(n,s);var o=Rp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cT=En&&"documentMode"in document&&11>=document.documentMode,ni=null,Sc=null,ks=null,Ac=!1;function Cp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ac||ni==null||ni!==Va(r)||(r=ni,"selectionStart"in r&&Uh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ks&&$s(ks,r)||(ks=r,r=ja(Sc,"onSelect"),0<r.length&&(e=new Lh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function Xo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},xu={},Cy={};En&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function Al(t){if(xu[t])return xu[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cy)return xu[t]=e[n];return t}var Py=Al("animationend"),xy=Al("animationiteration"),Ny=Al("animationstart"),Dy=Al("transitionend"),Vy=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){Vy.set(t,e),jr(e,[t])}for(var Nu=0;Nu<Pp.length;Nu++){var Du=Pp[Nu],hT=Du.toLowerCase(),dT=Du[0].toUpperCase()+Du.slice(1);cr(hT,"on"+dT)}cr(Py,"onAnimationEnd");cr(xy,"onAnimationIteration");cr(Ny,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(Dy,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));function xp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hE(r,e,void 0,t),t.currentTarget=null}function Oy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;xp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;xp(i,l,h),s=u}}}if(Ma)throw t=wc,Ma=!1,wc=null,t}function ve(t,e){var n=e[xc];n===void 0&&(n=e[xc]=new Set);var r=t+"__bubble";n.has(r)||(My(e,t,2,!1),n.add(r))}function Vu(t,e,n){var r=0;e&&(r|=4),My(n,t,r,e)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function Hs(t){if(!t[Yo]){t[Yo]=!0,Bg.forEach(function(n){n!=="selectionchange"&&(fT.has(n)||Vu(n,!1,t),Vu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Yo]||(e[Yo]=!0,Vu("selectionchange",!1,e))}}function My(t,e,n,r){switch(vy(e)){case 1:var i=RE;break;case 4:i=CE;break;default:i=Oh}n=i.bind(null,e,n,t),i=void 0,!_c||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ou(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Er(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}iy(function(){var h=s,f=xh(n),g=[];e:{var y=Vy.get(t);if(y!==void 0){var R=Lh,x=t;switch(t){case"keypress":if(ma(n)===0)break e;case"keydown":case"keyup":R=$E;break;case"focusin":x="focus",R=Ru;break;case"focusout":x="blur",R=Ru;break;case"beforeblur":case"afterblur":R=Ru;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=NE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=qE;break;case Py:case xy:case Ny:R=OE;break;case Dy:R=GE;break;case"scroll":R=PE;break;case"wheel":R=XE;break;case"copy":case"cut":case"paste":R=LE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=wp}var D=(e&4)!==0,O=!D&&t==="scroll",I=D?y!==null?y+"Capture":null:y;D=[];for(var w=h,S;w!==null;){S=w;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=Fs(w,I),V!=null&&D.push(Ws(w,V,S)))),O)break;w=w.return}0<D.length&&(y=new R(y,x,null,n,f),g.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",y&&n!==yc&&(x=n.relatedTarget||n.fromElement)&&(Er(x)||x[Tn]))break e;if((R||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,R?(x=n.relatedTarget||n.toElement,R=h,x=x?Er(x):null,x!==null&&(O=zr(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(R=null,x=h),R!==x)){if(D=vp,V="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(D=wp,V="onPointerLeave",I="onPointerEnter",w="pointer"),O=R==null?y:ii(R),S=x==null?y:ii(x),y=new D(V,w+"leave",R,n,f),y.target=O,y.relatedTarget=S,V=null,Er(f)===h&&(D=new D(I,w+"enter",x,n,f),D.target=S,D.relatedTarget=O,V=D),O=V,R&&x)t:{for(D=R,I=x,w=0,S=D;S;S=Qr(S))w++;for(S=0,V=I;V;V=Qr(V))S++;for(;0<w-S;)D=Qr(D),w--;for(;0<S-w;)I=Qr(I),S--;for(;w--;){if(D===I||I!==null&&D===I.alternate)break t;D=Qr(D),I=Qr(I)}D=null}else D=null;R!==null&&Np(g,y,R,D,!1),x!==null&&O!==null&&Np(g,O,x,D,!0)}}e:{if(y=h?ii(h):window,R=y.nodeName&&y.nodeName.toLowerCase(),R==="select"||R==="input"&&y.type==="file")var U=rT;else if(Ip(y))if(Sy)U=aT;else{U=sT;var F=iT}else(R=y.nodeName)&&R.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(U=oT);if(U&&(U=U(t,h))){Iy(g,U,n,f);break e}F&&F(t,y,h),t==="focusout"&&(F=y._wrapperState)&&F.controlled&&y.type==="number"&&dc(y,"number",y.value)}switch(F=h?ii(h):window,t){case"focusin":(Ip(F)||F.contentEditable==="true")&&(ni=F,Sc=h,ks=null);break;case"focusout":ks=Sc=ni=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Cp(g,n,f);break;case"selectionchange":if(cT)break;case"keydown":case"keyup":Cp(g,n,f)}var v;if(Fh)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else ti?Ey(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(wy&&n.locale!=="ko"&&(ti||m!=="onCompositionStart"?m==="onCompositionEnd"&&ti&&(v=_y()):($n=f,Mh="value"in $n?$n.value:$n.textContent,ti=!0)),F=ja(h,m),0<F.length&&(m=new _p(m,t,null,n,f),g.push({event:m,listeners:F}),v?m.data=v:(v=Ty(n),v!==null&&(m.data=v)))),(v=JE?ZE(t,n):eT(t,n))&&(h=ja(h,"onBeforeInput"),0<h.length&&(f=new _p("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=v))}Oy(g,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fs(t,n),s!=null&&r.unshift(Ws(t,s,i)),s=Fs(t,e),s!=null&&r.push(Ws(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Np(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Fs(n,s),u!=null&&o.unshift(Ws(n,u,l))):i||(u=Fs(n,s),u!=null&&o.push(Ws(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pT=/\r\n?/g,mT=/\u0000|\uFFFD/g;function Dp(t){return(typeof t=="string"?t:""+t).replace(pT,`
`).replace(mT,"")}function Jo(t,e,n){if(e=Dp(e),Dp(t)!==e&&n)throw Error(b(425))}function za(){}var kc=null,Rc=null;function Cc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,gT=typeof clearTimeout=="function"?clearTimeout:void 0,Vp=typeof Promise=="function"?Promise:void 0,yT=typeof queueMicrotask=="function"?queueMicrotask:typeof Vp<"u"?function(t){return Vp.resolve(null).then(t).catch(vT)}:Pc;function vT(t){setTimeout(function(){throw t})}function Mu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zs(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),Yt="__reactFiber$"+Ui,qs="__reactProps$"+Ui,Tn="__reactContainer$"+Ui,xc="__reactEvents$"+Ui,_T="__reactListeners$"+Ui,wT="__reactHandles$"+Ui;function Er(t){var e=t[Yt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[Yt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Op(t);t!==null;){if(n=t[Yt])return n;t=Op(t)}return e}t=n,n=t.parentNode}return null}function ho(t){return t=t[Yt]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function kl(t){return t[qs]||null}var Nc=[],si=-1;function hr(t){return{current:t}}function _e(t){0>si||(t.current=Nc[si],Nc[si]=null,si--)}function pe(t,e){si++,Nc[si]=t.current,t.current=e}var sr={},st=hr(sr),yt=hr(!1),xr=sr;function Ii(t,e){var n=t.type.contextTypes;if(!n)return sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function vt(t){return t=t.childContextTypes,t!=null}function Ba(){_e(yt),_e(st)}function Mp(t,e,n){if(st.current!==sr)throw Error(b(168));pe(st,e),pe(yt,n)}function Ly(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,iE(t)||"Unknown",i));return Ae({},n,r)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,xr=st.current,pe(st,t),pe(yt,yt.current),!0}function Lp(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Ly(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,_e(yt),_e(st),pe(st,t)):_e(yt),pe(yt,n)}var dn=null,Rl=!1,Lu=!1;function by(t){dn===null?dn=[t]:dn.push(t)}function ET(t){Rl=!0,by(t)}function dr(){if(!Lu&&dn!==null){Lu=!0;var t=0,e=ue;try{var n=dn;for(ue=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,Rl=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),ly(Nh,dr),i}finally{ue=e,Lu=!1}}return null}var oi=[],ai=0,Ha=null,Wa=0,xt=[],Nt=0,Nr=null,pn=1,mn="";function vr(t,e){oi[ai++]=Wa,oi[ai++]=Ha,Ha=t,Wa=e}function Fy(t,e,n){xt[Nt++]=pn,xt[Nt++]=mn,xt[Nt++]=Nr,Nr=t;var r=pn;t=mn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-Wt(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function jh(t){t.return!==null&&(vr(t,1),Fy(t,1,0))}function zh(t){for(;t===Ha;)Ha=oi[--ai],oi[ai]=null,Wa=oi[--ai],oi[ai]=null;for(;t===Nr;)Nr=xt[--Nt],xt[Nt]=null,mn=xt[--Nt],xt[Nt]=null,pn=xt[--Nt],xt[Nt]=null}var St=null,It=null,Ee=!1,$t=null;function Uy(t,e){var n=Vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,It=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,It=null,!0):!1;default:return!1}}function Dc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vc(t){if(Ee){var e=It;if(e){var n=e;if(!bp(t,e)){if(Dc(t))throw Error(b(418));e=Qn(n.nextSibling);var r=St;e&&bp(t,e)?Uy(r,n):(t.flags=t.flags&-4097|2,Ee=!1,St=t)}}else{if(Dc(t))throw Error(b(418));t.flags=t.flags&-4097|2,Ee=!1,St=t}}}function Fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Zo(t){if(t!==St)return!1;if(!Ee)return Fp(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cc(t.type,t.memoizedProps)),e&&(e=It)){if(Dc(t))throw jy(),Error(b(418));for(;e;)Uy(t,e),e=Qn(e.nextSibling)}if(Fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=St?Qn(t.stateNode.nextSibling):null;return!0}function jy(){for(var t=It;t;)t=Qn(t.nextSibling)}function Si(){It=St=null,Ee=!1}function Bh(t){$t===null?$t=[t]:$t.push(t)}var TT=Pn.ReactCurrentBatchConfig;function cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ea(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Up(t){var e=t._init;return e(t._payload)}function zy(t){function e(I,w){if(t){var S=I.deletions;S===null?(I.deletions=[w],I.flags|=16):S.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function i(I,w){return I=Zn(I,w),I.index=0,I.sibling=null,I}function s(I,w,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<w?(I.flags|=2,w):S):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,w,S,V){return w===null||w.tag!==6?(w=$u(S,I.mode,V),w.return=I,w):(w=i(w,S),w.return=I,w)}function u(I,w,S,V){var U=S.type;return U===ei?f(I,w,S.props.children,V,S.key):w!==null&&(w.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ln&&Up(U)===w.type)?(V=i(w,S.props),V.ref=cs(I,w,S),V.return=I,V):(V=Ta(S.type,S.key,S.props,null,I.mode,V),V.ref=cs(I,w,S),V.return=I,V)}function h(I,w,S,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==S.containerInfo||w.stateNode.implementation!==S.implementation?(w=Hu(S,I.mode,V),w.return=I,w):(w=i(w,S.children||[]),w.return=I,w)}function f(I,w,S,V,U){return w===null||w.tag!==7?(w=Rr(S,I.mode,V,U),w.return=I,w):(w=i(w,S),w.return=I,w)}function g(I,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return w=$u(""+w,I.mode,S),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case $o:return S=Ta(w.type,w.key,w.props,null,I.mode,S),S.ref=cs(I,null,w),S.return=I,S;case Zr:return w=Hu(w,I.mode,S),w.return=I,w;case Ln:var V=w._init;return g(I,V(w._payload),S)}if(ms(w)||ss(w))return w=Rr(w,I.mode,S,null),w.return=I,w;ea(I,w)}return null}function y(I,w,S,V){var U=w!==null?w.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return U!==null?null:l(I,w,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $o:return S.key===U?u(I,w,S,V):null;case Zr:return S.key===U?h(I,w,S,V):null;case Ln:return U=S._init,y(I,w,U(S._payload),V)}if(ms(S)||ss(S))return U!==null?null:f(I,w,S,V,null);ea(I,S)}return null}function R(I,w,S,V,U){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(w,I,""+V,U);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case $o:return I=I.get(V.key===null?S:V.key)||null,u(w,I,V,U);case Zr:return I=I.get(V.key===null?S:V.key)||null,h(w,I,V,U);case Ln:var F=V._init;return R(I,w,S,F(V._payload),U)}if(ms(V)||ss(V))return I=I.get(S)||null,f(w,I,V,U,null);ea(w,V)}return null}function x(I,w,S,V){for(var U=null,F=null,v=w,m=w=0,_=null;v!==null&&m<S.length;m++){v.index>m?(_=v,v=null):_=v.sibling;var T=y(I,v,S[m],V);if(T===null){v===null&&(v=_);break}t&&v&&T.alternate===null&&e(I,v),w=s(T,w,m),F===null?U=T:F.sibling=T,F=T,v=_}if(m===S.length)return n(I,v),Ee&&vr(I,m),U;if(v===null){for(;m<S.length;m++)v=g(I,S[m],V),v!==null&&(w=s(v,w,m),F===null?U=v:F.sibling=v,F=v);return Ee&&vr(I,m),U}for(v=r(I,v);m<S.length;m++)_=R(v,I,m,S[m],V),_!==null&&(t&&_.alternate!==null&&v.delete(_.key===null?m:_.key),w=s(_,w,m),F===null?U=_:F.sibling=_,F=_);return t&&v.forEach(function(A){return e(I,A)}),Ee&&vr(I,m),U}function D(I,w,S,V){var U=ss(S);if(typeof U!="function")throw Error(b(150));if(S=U.call(S),S==null)throw Error(b(151));for(var F=U=null,v=w,m=w=0,_=null,T=S.next();v!==null&&!T.done;m++,T=S.next()){v.index>m?(_=v,v=null):_=v.sibling;var A=y(I,v,T.value,V);if(A===null){v===null&&(v=_);break}t&&v&&A.alternate===null&&e(I,v),w=s(A,w,m),F===null?U=A:F.sibling=A,F=A,v=_}if(T.done)return n(I,v),Ee&&vr(I,m),U;if(v===null){for(;!T.done;m++,T=S.next())T=g(I,T.value,V),T!==null&&(w=s(T,w,m),F===null?U=T:F.sibling=T,F=T);return Ee&&vr(I,m),U}for(v=r(I,v);!T.done;m++,T=S.next())T=R(v,I,m,T.value,V),T!==null&&(t&&T.alternate!==null&&v.delete(T.key===null?m:T.key),w=s(T,w,m),F===null?U=T:F.sibling=T,F=T);return t&&v.forEach(function(C){return e(I,C)}),Ee&&vr(I,m),U}function O(I,w,S,V){if(typeof S=="object"&&S!==null&&S.type===ei&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case $o:e:{for(var U=S.key,F=w;F!==null;){if(F.key===U){if(U=S.type,U===ei){if(F.tag===7){n(I,F.sibling),w=i(F,S.props.children),w.return=I,I=w;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ln&&Up(U)===F.type){n(I,F.sibling),w=i(F,S.props),w.ref=cs(I,F,S),w.return=I,I=w;break e}n(I,F);break}else e(I,F);F=F.sibling}S.type===ei?(w=Rr(S.props.children,I.mode,V,S.key),w.return=I,I=w):(V=Ta(S.type,S.key,S.props,null,I.mode,V),V.ref=cs(I,w,S),V.return=I,I=V)}return o(I);case Zr:e:{for(F=S.key;w!==null;){if(w.key===F)if(w.tag===4&&w.stateNode.containerInfo===S.containerInfo&&w.stateNode.implementation===S.implementation){n(I,w.sibling),w=i(w,S.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=Hu(S,I.mode,V),w.return=I,I=w}return o(I);case Ln:return F=S._init,O(I,w,F(S._payload),V)}if(ms(S))return x(I,w,S,V);if(ss(S))return D(I,w,S,V);ea(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,w!==null&&w.tag===6?(n(I,w.sibling),w=i(w,S),w.return=I,I=w):(n(I,w),w=$u(S,I.mode,V),w.return=I,I=w),o(I)):n(I,w)}return O}var Ai=zy(!0),By=zy(!1),qa=hr(null),Ka=null,li=null,$h=null;function Hh(){$h=li=Ka=null}function Wh(t){var e=qa.current;_e(qa),t._currentValue=e}function Oc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mi(t,e){Ka=t,$h=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if($h!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(Ka===null)throw Error(b(308));li=t,Ka.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var Tr=null;function qh(t){Tr===null?Tr=[t]:Tr.push(t)}function $y(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qh(e)):(n.next=i.next,i.next=n),e.interleaved=n,In(t,r)}function In(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var bn=!1;function Kh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,In(t,n)}return i=r.interleaved,i===null?(e.next=e,qh(r)):(e.next=i.next,i.next=e),r.interleaved=e,In(t,n)}function ga(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dh(t,n)}}function jp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ga(t,e,n,r){var i=t.updateQueue;bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,R=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:R,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,D=l;switch(y=e,R=n,D.tag){case 1:if(x=D.payload,typeof x=="function"){g=x.call(R,g,y);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=D.payload,y=typeof x=="function"?x.call(R,g,y):x,y==null)break e;g=Ae({},g,y);break e;case 2:bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else R={eventTime:R,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=R,u=g):f=f.next=R,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=g}}function zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var fo={},en=hr(fo),Ks=hr(fo),Gs=hr(fo);function Ir(t){if(t===fo)throw Error(b(174));return t}function Gh(t,e){switch(pe(Gs,e),pe(Ks,t),pe(en,fo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=pc(e,t)}_e(en),pe(en,e)}function ki(){_e(en),_e(Ks),_e(Gs)}function Wy(t){Ir(Gs.current);var e=Ir(en.current),n=pc(e,t.type);e!==n&&(pe(Ks,t),pe(en,n))}function Qh(t){Ks.current===t&&(_e(en),_e(Ks))}var Ie=hr(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bu=[];function Xh(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var ya=Pn.ReactCurrentDispatcher,Fu=Pn.ReactCurrentBatchConfig,Dr=0,Se=null,Oe=null,je=null,Xa=!1,Rs=!1,Qs=0,IT=0;function Ze(){throw Error(b(321))}function Yh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Jh(t,e,n,r,i,s){if(Dr=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ya.current=t===null||t.memoizedState===null?RT:CT,t=n(r,i),Rs){s=0;do{if(Rs=!1,Qs=0,25<=s)throw Error(b(301));s+=1,je=Oe=null,e.updateQueue=null,ya.current=PT,t=n(r,i)}while(Rs)}if(ya.current=Ya,e=Oe!==null&&Oe.next!==null,Dr=0,je=Oe=Se=null,Xa=!1,e)throw Error(b(300));return t}function Zh(){var t=Qs!==0;return Qs=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Se.memoizedState=je=t:je=je.next=t,je}function bt(){if(Oe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=je===null?Se.memoizedState:je.next;if(e!==null)je=e,Oe=t;else{if(t===null)throw Error(b(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},je===null?Se.memoizedState=je=t:je=je.next=t}return je}function Xs(t,e){return typeof e=="function"?e(t):e}function Uu(t){var e=bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Dr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,Se.lanes|=f,Vr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Gt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,Vr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ju(t){var e=bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qy(){}function Ky(t,e){var n=Se,r=bt(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,ed(Xy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Ys(9,Qy.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(b(349));Dr&30||Gy(n,e,i)}return i}function Gy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qy(t,e,n,r){e.value=n,e.getSnapshot=r,Yy(e)&&Jy(t)}function Xy(t,e,n){return n(function(){Yy(e)&&Jy(t)})}function Yy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function Jy(t){var e=In(t,1);e!==null&&qt(e,t,1,-1)}function Bp(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=kT.bind(null,Se,t),[e.memoizedState,t]}function Ys(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Zy(){return bt().memoizedState}function va(t,e,n,r){var i=Xt();Se.flags|=t,i.memoizedState=Ys(1|e,n,void 0,r===void 0?null:r)}function Cl(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&Yh(r,o.deps)){i.memoizedState=Ys(e,n,s,r);return}}Se.flags|=t,i.memoizedState=Ys(1|e,n,s,r)}function $p(t,e){return va(8390656,8,t,e)}function ed(t,e){return Cl(2048,8,t,e)}function ev(t,e){return Cl(4,2,t,e)}function tv(t,e){return Cl(4,4,t,e)}function nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rv(t,e,n){return n=n!=null?n.concat([t]):null,Cl(4,4,nv.bind(null,e,t),n)}function td(){}function iv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ov(t,e,n){return Dr&21?(Gt(n,e)||(n=hy(),Se.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function ST(t,e){var n=ue;ue=n!==0&&4>n?n:4,t(!0);var r=Fu.transition;Fu.transition={};try{t(!1),e()}finally{ue=n,Fu.transition=r}}function av(){return bt().memoizedState}function AT(t,e,n){var r=Jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lv(t))uv(e,n);else if(n=$y(t,e,n,r),n!==null){var i=ht();qt(n,t,r,i),cv(n,e,r)}}function kT(t,e,n){var r=Jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lv(t))uv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Gt(l,o)){var u=e.interleaved;u===null?(i.next=i,qh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=$y(t,e,i,r),n!==null&&(i=ht(),qt(n,t,r,i),cv(n,e,r))}}function lv(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function uv(t,e){Rs=Xa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dh(t,n)}}var Ya={readContext:Lt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},RT={readContext:Lt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:$p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,va(4194308,4,nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return va(4194308,4,t,e)},useInsertionEffect:function(t,e){return va(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AT.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:Bp,useDebugValue:td,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=Bp(!1),e=t[0];return t=ST.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=Xt();if(Ee){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),ze===null)throw Error(b(349));Dr&30||Gy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$p(Xy.bind(null,r,s,t),[t]),r.flags|=2048,Ys(9,Qy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=ze.identifierPrefix;if(Ee){var n=mn,r=pn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CT={readContext:Lt,useCallback:iv,useContext:Lt,useEffect:ed,useImperativeHandle:rv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:Uu,useRef:Zy,useState:function(){return Uu(Xs)},useDebugValue:td,useDeferredValue:function(t){var e=bt();return ov(e,Oe.memoizedState,t)},useTransition:function(){var t=Uu(Xs)[0],e=bt().memoizedState;return[t,e]},useMutableSource:qy,useSyncExternalStore:Ky,useId:av,unstable_isNewReconciler:!1},PT={readContext:Lt,useCallback:iv,useContext:Lt,useEffect:ed,useImperativeHandle:rv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:ju,useRef:Zy,useState:function(){return ju(Xs)},useDebugValue:td,useDeferredValue:function(t){var e=bt();return Oe===null?e.memoizedState=t:ov(e,Oe.memoizedState,t)},useTransition:function(){var t=ju(Xs)[0],e=bt().memoizedState;return[t,e]},useMutableSource:qy,useSyncExternalStore:Ky,useId:av,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=Jn(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(qt(e,t,i,r),ga(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=Jn(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&(qt(e,t,i,r),ga(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=Jn(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&(qt(e,t,r,n),ga(e,t,r))}};function Hp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$s(n,r)||!$s(i,s):!0}function hv(t,e,n){var r=!1,i=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=vt(e)?xr:st.current,r=e.contextTypes,s=(r=r!=null)?Ii(t,i):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Wp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pl.enqueueReplaceState(e,e.state,null)}function Lc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Kh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=vt(e)?xr:st.current,i.context=Ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pl.enqueueReplaceState(i,i.state,null),Ga(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ri(t,e){try{var n="",r=e;do n+=rE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xT=typeof WeakMap=="function"?WeakMap:Map;function dv(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Za||(Za=!0,Kc=r),bc(t,e)},n}function fv(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bc(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HT.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var NT=Pn.ReactCurrentOwner,gt=!1;function ct(t,e,n,r){e.child=t===null?By(e,null,n,r):Ai(e,t.child,n,r)}function Qp(t,e,n,r,i){n=n.render;var s=e.ref;return mi(e,i),r=Jh(t,e,n,r,s,i),n=Zh(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(Ee&&n&&jh(e),e.flags|=1,ct(t,e,r,i),e.child)}function Xp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ud(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pv(t,e,s,r,i)):(t=Ta(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(o,r)&&t.ref===e.ref)return Sn(t,e,i)}return e.flags|=1,t=Zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function pv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($s(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Sn(t,e,i)}return Fc(t,e,n,r,i)}function mv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pe(ci,Tt),Tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,pe(ci,Tt),Tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,pe(ci,Tt),Tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,pe(ci,Tt),Tt|=r;return ct(t,e,i,n),e.child}function gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fc(t,e,n,r,i){var s=vt(n)?xr:st.current;return s=Ii(e,s),mi(e,i),n=Jh(t,e,n,r,s,i),r=Zh(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(Ee&&r&&jh(e),e.flags|=1,ct(t,e,n,i),e.child)}function Yp(t,e,n,r,i){if(vt(n)){var s=!0;$a(e)}else s=!1;if(mi(e,i),e.stateNode===null)_a(t,e),hv(e,n,r),Lc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Lt(h):(h=vt(n)?xr:st.current,h=Ii(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Wp(e,o,r,h),bn=!1;var y=e.memoizedState;o.state=y,Ga(e,r,o,i),u=e.memoizedState,l!==r||y!==u||yt.current||bn?(typeof f=="function"&&(Mc(e,n,f,r),u=e.memoizedState),(l=bn||Hp(e,n,l,r,y,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Hy(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:zt(e.type,l),o.props=h,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Lt(u):(u=vt(n)?xr:st.current,u=Ii(e,u));var R=n.getDerivedStateFromProps;(f=typeof R=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&Wp(e,o,r,u),bn=!1,y=e.memoizedState,o.state=y,Ga(e,r,o,i);var x=e.memoizedState;l!==g||y!==x||yt.current||bn?(typeof R=="function"&&(Mc(e,n,R,r),x=e.memoizedState),(h=bn||Hp(e,n,h,r,y,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Uc(t,e,n,r,s,i)}function Uc(t,e,n,r,i,s){gv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Lp(e,n,!1),Sn(t,e,s);r=e.stateNode,NT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ai(e,t.child,null,s),e.child=Ai(e,null,l,s)):ct(t,e,l,s),e.memoizedState=r.state,i&&Lp(e,n,!0),e.child}function yv(t){var e=t.stateNode;e.pendingContext?Mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mp(t,e.context,!1),Gh(t,e.containerInfo)}function Jp(t,e,n,r,i){return Si(),Bh(i),e.flags|=256,ct(t,e,n,r),e.child}var jc={dehydrated:null,treeContext:null,retryLane:0};function zc(t){return{baseLanes:t,cachePool:null,transitions:null}}function vv(t,e,n){var r=e.pendingProps,i=Ie.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),pe(Ie,i&1),t===null)return Vc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dl(o,r,0,null),t=Rr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zc(n),e.memoizedState=jc,t):nd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return DT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Zn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Zn(l,s):(s=Rr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?zc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=jc,r}return s=t.child,t=s.sibling,r=Zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function nd(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ta(t,e,n,r){return r!==null&&Bh(r),Ai(e,t.child,null,n),t=nd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function DT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zu(Error(b(422))),ta(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dl({mode:"visible",children:r.children},i,0,null),s=Rr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ai(e,t.child,null,o),e.child.memoizedState=zc(o),e.memoizedState=jc,s);if(!(e.mode&1))return ta(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(b(419)),r=zu(s,r,void 0),ta(t,e,o,r)}if(l=(o&t.childLanes)!==0,gt||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,In(t,i),qt(r,t,i,-1))}return ld(),r=zu(Error(b(421))),ta(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=Qn(i.nextSibling),St=e,Ee=!0,$t=null,t!==null&&(xt[Nt++]=pn,xt[Nt++]=mn,xt[Nt++]=Nr,pn=t.id,mn=t.overflow,Nr=e),e=nd(e,r.children),e.flags|=4096,e)}function Zp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Oc(t.return,e,n)}function Bu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _v(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,n,e);else if(t.tag===19)Zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(pe(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Bu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Bu(e,!0,n,null,s);break;case"together":Bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _a(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function VT(t,e,n){switch(e.tag){case 3:yv(e),Si();break;case 5:Wy(e);break;case 1:vt(e.type)&&$a(e);break;case 4:Gh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;pe(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(pe(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?vv(t,e,n):(pe(Ie,Ie.current&1),t=Sn(t,e,n),t!==null?t.sibling:null);pe(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _v(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),pe(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,mv(t,e,n)}return Sn(t,e,n)}var wv,Bc,Ev,Tv;wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bc=function(){};Ev=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(en.current);var s=null;switch(n){case"input":i=cc(t,i),r=cc(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=fc(t,i),r=fc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=za)}mc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ls.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ls.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Tv=function(t,e,n,r){n!==r&&(e.flags|=4)};function hs(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function et(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function OT(t,e,n){var r=e.pendingProps;switch(zh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(e),null;case 1:return vt(e.type)&&Ba(),et(e),null;case 3:return r=e.stateNode,ki(),_e(yt),_e(st),Xh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(Xc($t),$t=null))),Bc(t,e),et(e),null;case 5:Qh(e);var i=Ir(Gs.current);if(n=e.type,t!==null&&e.stateNode!=null)Ev(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return et(e),null}if(t=Ir(en.current),Zo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Yt]=e,r[qs]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<ys.length;i++)ve(ys[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":lp(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":cp(r,s),ve("invalid",r)}mc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Jo(r.textContent,l,t),i=["children",""+l]):Ls.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ho(r),up(r,s,!0);break;case"textarea":Ho(r),hp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=za)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Yt]=e,t[qs]=r,wv(t,e,!1,!1),e.stateNode=t;e:{switch(o=gc(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<ys.length;i++)ve(ys[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":lp(t,r),i=cc(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),ve("invalid",t);break;case"textarea":cp(t,r),i=fc(t,r),ve("invalid",t);break;default:i=r}mc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Zg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bs(t,u):typeof u=="number"&&bs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ls.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&kh(t,s,u,o))}switch(n){case"input":Ho(t),up(t,r,!1);break;case"textarea":Ho(t),hp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return et(e),null;case 6:if(t&&e.stateNode!=null)Tv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Ir(Gs.current),Ir(en.current),Zo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Yt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:Jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Yt]=e,e.stateNode=r}return et(e),null;case 13:if(_e(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&It!==null&&e.mode&1&&!(e.flags&128))jy(),Si(),e.flags|=98560,s=!1;else if(s=Zo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Yt]=e}else Si(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;et(e),s=!1}else $t!==null&&(Xc($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Le===0&&(Le=3):ld())),e.updateQueue!==null&&(e.flags|=4),et(e),null);case 4:return ki(),Bc(t,e),t===null&&Hs(e.stateNode.containerInfo),et(e),null;case 10:return Wh(e.type._context),et(e),null;case 17:return vt(e.type)&&Ba(),et(e),null;case 19:if(_e(Ie),s=e.memoizedState,s===null)return et(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)hs(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=128,hs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return pe(Ie,Ie.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Ci&&(e.flags|=128,r=!0,hs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return et(e),null}else 2*Ne()-s.renderingStartTime>Ci&&n!==1073741824&&(e.flags|=128,r=!0,hs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=Ie.current,pe(Ie,r?n&1|2:n&1),e):(et(e),null);case 22:case 23:return ad(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tt&1073741824&&(et(e),e.subtreeFlags&6&&(e.flags|=8192)):et(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function MT(t,e){switch(zh(e),e.tag){case 1:return vt(e.type)&&Ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ki(),_e(yt),_e(st),Xh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(_e(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));Si()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Ie),null;case 4:return ki(),null;case 10:return Wh(e.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var na=!1,rt=!1,LT=typeof WeakSet=="function"?WeakSet:Set,$=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function $c(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var em=!1;function bT(t,e){if(kc=Fa,t=Ry(),Uh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,y=null;t:for(;;){for(var R;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(R=g.firstChild)!==null;)y=g,g=R;for(;;){if(g===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(R=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=R}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rc={focusedElem:t,selectionRange:n},Fa=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var D=x.memoizedProps,O=x.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:zt(e.type,D),O);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(V){Ce(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return x=em,em=!1,x}function Cs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&$c(e,n,s)}i=i.next}while(i!==r)}}function xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Hc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Iv(t){var e=t.alternate;e!==null&&(t.alternate=null,Iv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yt],delete e[qs],delete e[xc],delete e[_T],delete e[wT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sv(t){return t.tag===5||t.tag===3||t.tag===4}function tm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=za));else if(r!==4&&(t=t.child,t!==null))for(Wc(t,e,n),t=t.sibling;t!==null;)Wc(t,e,n),t=t.sibling}function qc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qc(t,e,n),t=t.sibling;t!==null;)qc(t,e,n),t=t.sibling}var $e=null,Bt=!1;function On(t,e,n){for(n=n.child;n!==null;)Av(t,e,n),n=n.sibling}function Av(t,e,n){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Tl,n)}catch{}switch(n.tag){case 5:rt||ui(n,e);case 6:var r=$e,i=Bt;$e=null,On(t,e,n),$e=r,Bt=i,$e!==null&&(Bt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Bt?(t=$e,n=n.stateNode,t.nodeType===8?Mu(t.parentNode,n):t.nodeType===1&&Mu(t,n),zs(t)):Mu($e,n.stateNode));break;case 4:r=$e,i=Bt,$e=n.stateNode.containerInfo,Bt=!0,On(t,e,n),$e=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$c(n,e,o),i=i.next}while(i!==r)}On(t,e,n);break;case 1:if(!rt&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,On(t,e,n),rt=r):On(t,e,n);break;default:On(t,e,n)}}function nm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LT),e.forEach(function(r){var i=qT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,Bt=!1;break e;case 3:$e=l.stateNode.containerInfo,Bt=!0;break e;case 4:$e=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if($e===null)throw Error(b(160));Av(s,o,i),$e=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ce(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kv(e,t),e=e.sibling}function kv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(e,t),Qt(t),r&4){try{Cs(3,t,t.return),xl(3,t)}catch(D){Ce(t,t.return,D)}try{Cs(5,t,t.return)}catch(D){Ce(t,t.return,D)}}break;case 1:jt(e,t),Qt(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(jt(e,t),Qt(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var i=t.stateNode;try{bs(i,"")}catch(D){Ce(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gg(i,s),gc(l,o);var h=gc(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?Zg(i,g):f==="dangerouslySetInnerHTML"?Yg(i,g):f==="children"?bs(i,g):kh(i,f,g,h)}switch(l){case"input":hc(i,s);break;case"textarea":Qg(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var R=s.value;R!=null?hi(i,!!s.multiple,R,!1):y!==!!s.multiple&&(s.defaultValue!=null?hi(i,!!s.multiple,s.defaultValue,!0):hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[qs]=s}catch(D){Ce(t,t.return,D)}}break;case 6:if(jt(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ce(t,t.return,D)}}break;case 3:if(jt(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zs(e.containerInfo)}catch(D){Ce(t,t.return,D)}break;case 4:jt(e,t),Qt(t);break;case 13:jt(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(sd=Ne())),r&4&&nm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(h=rt)||f,jt(e,t),rt=h):jt(e,t),Qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(g=$=f;$!==null;){switch(y=$,R=y.child,y.tag){case 0:case 11:case 14:case 15:Cs(4,y,y.return);break;case 1:ui(y,y.return);var x=y.stateNode;if(typeof x.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(D){Ce(r,n,D)}}break;case 5:ui(y,y.return);break;case 22:if(y.memoizedState!==null){im(g);continue}}R!==null?(R.return=y,$=R):im(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Jg("display",o))}catch(D){Ce(t,t.return,D)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(D){Ce(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:jt(e,t),Qt(t),r&4&&nm(t);break;case 21:break;default:jt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sv(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bs(i,""),r.flags&=-33);var s=tm(t);qc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=tm(t);Wc(t,l,o);break;default:throw Error(b(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FT(t,e,n){$=t,Rv(t)}function Rv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||na;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||rt;l=na;var h=rt;if(na=o,(rt=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?sm(i):u!==null?(u.return=o,$=u):sm(i);for(;s!==null;)$=s,Rv(s),s=s.sibling;$=i,na=l,rt=h}rm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):rm(t)}}function rm(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&zs(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}rt||e.flags&512&&Hc(e)}catch(y){Ce(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function im(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function sm(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xl(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{Hc(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{Hc(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var UT=Math.ceil,Ja=Pn.ReactCurrentDispatcher,rd=Pn.ReactCurrentOwner,Ot=Pn.ReactCurrentBatchConfig,se=0,ze=null,Ve=null,qe=0,Tt=0,ci=hr(0),Le=0,Js=null,Vr=0,Nl=0,id=0,Ps=null,mt=null,sd=0,Ci=1/0,hn=null,Za=!1,Kc=null,Yn=null,ra=!1,Hn=null,el=0,xs=0,Gc=null,wa=-1,Ea=0;function ht(){return se&6?Ne():wa!==-1?wa:wa=Ne()}function Jn(t){return t.mode&1?se&2&&qe!==0?qe&-qe:TT.transition!==null?(Ea===0&&(Ea=hy()),Ea):(t=ue,t!==0||(t=window.event,t=t===void 0?16:vy(t.type)),t):1}function qt(t,e,n,r){if(50<xs)throw xs=0,Gc=null,Error(b(185));uo(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(Nl|=n),Le===4&&Un(t,qe)),_t(t,r),n===1&&se===0&&!(e.mode&1)&&(Ci=Ne()+500,Rl&&dr()))}function _t(t,e){var n=t.callbackNode;TE(t,e);var r=ba(t,t===ze?qe:0);if(r===0)n!==null&&pp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pp(n),e===1)t.tag===0?ET(om.bind(null,t)):by(om.bind(null,t)),yT(function(){!(se&6)&&dr()}),n=null;else{switch(dy(r)){case 1:n=Nh;break;case 4:n=uy;break;case 16:n=La;break;case 536870912:n=cy;break;default:n=La}n=Mv(n,Cv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cv(t,e){if(wa=-1,Ea=0,se&6)throw Error(b(327));var n=t.callbackNode;if(gi()&&t.callbackNode!==n)return null;var r=ba(t,t===ze?qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=tl(t,r);else{e=r;var i=se;se|=2;var s=xv();(ze!==t||qe!==e)&&(hn=null,Ci=Ne()+500,kr(t,e));do try{BT();break}catch(l){Pv(t,l)}while(!0);Hh(),Ja.current=s,se=i,Ve!==null?e=0:(ze=null,qe=0,e=Le)}if(e!==0){if(e===2&&(i=Ec(t),i!==0&&(r=i,e=Qc(t,i))),e===1)throw n=Js,kr(t,0),Un(t,r),_t(t,Ne()),n;if(e===6)Un(t,r);else{if(i=t.current.alternate,!(r&30)&&!jT(i)&&(e=tl(t,r),e===2&&(s=Ec(t),s!==0&&(r=s,e=Qc(t,s))),e===1))throw n=Js,kr(t,0),Un(t,r),_t(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:_r(t,mt,hn);break;case 3:if(Un(t,r),(r&130023424)===r&&(e=sd+500-Ne(),10<e)){if(ba(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pc(_r.bind(null,t,mt,hn),e);break}_r(t,mt,hn);break;case 4:if(Un(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*UT(r/1960))-r,10<r){t.timeoutHandle=Pc(_r.bind(null,t,mt,hn),r);break}_r(t,mt,hn);break;case 5:_r(t,mt,hn);break;default:throw Error(b(329))}}}return _t(t,Ne()),t.callbackNode===n?Cv.bind(null,t):null}function Qc(t,e){var n=Ps;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=tl(t,e),t!==2&&(e=mt,mt=n,e!==null&&Xc(e)),t}function Xc(t){mt===null?mt=t:mt.push.apply(mt,t)}function jT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Un(t,e){for(e&=~id,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function om(t){if(se&6)throw Error(b(327));gi();var e=ba(t,0);if(!(e&1))return _t(t,Ne()),null;var n=tl(t,e);if(t.tag!==0&&n===2){var r=Ec(t);r!==0&&(e=r,n=Qc(t,r))}if(n===1)throw n=Js,kr(t,0),Un(t,e),_t(t,Ne()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,mt,hn),_t(t,Ne()),null}function od(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Ci=Ne()+500,Rl&&dr())}}function Or(t){Hn!==null&&Hn.tag===0&&!(se&6)&&gi();var e=se;se|=1;var n=Ot.transition,r=ue;try{if(Ot.transition=null,ue=1,t)return t()}finally{ue=r,Ot.transition=n,se=e,!(se&6)&&dr()}}function ad(){Tt=ci.current,_e(ci)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gT(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(zh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ba();break;case 3:ki(),_e(yt),_e(st),Xh();break;case 5:Qh(r);break;case 4:ki();break;case 13:_e(Ie);break;case 19:_e(Ie);break;case 10:Wh(r.type._context);break;case 22:case 23:ad()}n=n.return}if(ze=t,Ve=t=Zn(t.current,null),qe=Tt=e,Le=0,Js=null,id=Nl=Vr=0,mt=Ps=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Tr=null}return t}function Pv(t,e){do{var n=Ve;try{if(Hh(),ya.current=Ya,Xa){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xa=!1}if(Dr=0,je=Oe=Se=null,Rs=!1,Qs=0,rd.current=null,n===null||n.return===null){Le=1,Js=e,Ve=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var R=Kp(o);if(R!==null){R.flags&=-257,Gp(R,o,l,s,e),R.mode&1&&qp(s,h,e),e=R,u=h;var x=e.updateQueue;if(x===null){var D=new Set;D.add(u),e.updateQueue=D}else x.add(u);break e}else{if(!(e&1)){qp(s,h,e),ld();break e}u=Error(b(426))}}else if(Ee&&l.mode&1){var O=Kp(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Gp(O,o,l,s,e),Bh(Ri(u,l));break e}}s=u=Ri(u,l),Le!==4&&(Le=2),Ps===null?Ps=[s]:Ps.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=dv(s,u,e);jp(s,I);break e;case 1:l=u;var w=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Yn===null||!Yn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=fv(s,l,e);jp(s,V);break e}}s=s.return}while(s!==null)}Dv(n)}catch(U){e=U,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function xv(){var t=Ja.current;return Ja.current=Ya,t===null?Ya:t}function ld(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(Vr&268435455)&&!(Nl&268435455)||Un(ze,qe)}function tl(t,e){var n=se;se|=2;var r=xv();(ze!==t||qe!==e)&&(hn=null,kr(t,e));do try{zT();break}catch(i){Pv(t,i)}while(!0);if(Hh(),se=n,Ja.current=r,Ve!==null)throw Error(b(261));return ze=null,qe=0,Le}function zT(){for(;Ve!==null;)Nv(Ve)}function BT(){for(;Ve!==null&&!fE();)Nv(Ve)}function Nv(t){var e=Ov(t.alternate,t,Tt);t.memoizedProps=t.pendingProps,e===null?Dv(t):Ve=e,rd.current=null}function Dv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MT(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ve=null;return}}else if(n=OT(n,e,Tt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);Le===0&&(Le=5)}function _r(t,e,n){var r=ue,i=Ot.transition;try{Ot.transition=null,ue=1,$T(t,e,n,r)}finally{Ot.transition=i,ue=r}return null}function $T(t,e,n,r){do gi();while(Hn!==null);if(se&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(IE(t,s),t===ze&&(Ve=ze=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ra||(ra=!0,Mv(La,function(){return gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=ue;ue=1;var l=se;se|=4,rd.current=null,bT(t,n),kv(n,t),uT(Rc),Fa=!!kc,Rc=kc=null,t.current=n,FT(n),pE(),se=l,ue=o,Ot.transition=s}else t.current=n;if(ra&&(ra=!1,Hn=t,el=i),s=t.pendingLanes,s===0&&(Yn=null),yE(n.stateNode),_t(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Za)throw Za=!1,t=Kc,Kc=null,t;return el&1&&t.tag!==0&&gi(),s=t.pendingLanes,s&1?t===Gc?xs++:(xs=0,Gc=t):xs=0,dr(),null}function gi(){if(Hn!==null){var t=dy(el),e=Ot.transition,n=ue;try{if(Ot.transition=null,ue=16>t?16:t,Hn===null)var r=!1;else{if(t=Hn,Hn=null,el=0,se&6)throw Error(b(331));var i=se;for(se|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:Cs(8,f,s)}var g=f.child;if(g!==null)g.return=f,$=g;else for(;$!==null;){f=$;var y=f.sibling,R=f.return;if(Iv(f),f===h){$=null;break}if(y!==null){y.return=R,$=y;break}$=R}}}var x=s.alternate;if(x!==null){var D=x.child;if(D!==null){x.child=null;do{var O=D.sibling;D.sibling=null,D=O}while(D!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Cs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,$=I;break e}$=s.return}}var w=t.current;for($=w;$!==null;){o=$;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,$=S;else e:for(o=w;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xl(9,l)}}catch(U){Ce(l,l.return,U)}if(l===o){$=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,$=V;break e}$=l.return}}if(se=i,dr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Tl,t)}catch{}r=!0}return r}finally{ue=n,Ot.transition=e}}return!1}function am(t,e,n){e=Ri(n,e),e=dv(t,e,1),t=Xn(t,e,1),e=ht(),t!==null&&(uo(t,1,e),_t(t,e))}function Ce(t,e,n){if(t.tag===3)am(t,t,n);else for(;e!==null;){if(e.tag===3){am(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Ri(n,t),t=fv(e,t,1),e=Xn(e,t,1),t=ht(),e!==null&&(uo(e,1,t),_t(e,t));break}}e=e.return}}function HT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(qe&n)===n&&(Le===4||Le===3&&(qe&130023424)===qe&&500>Ne()-sd?kr(t,0):id|=n),_t(t,e)}function Vv(t,e){e===0&&(t.mode&1?(e=Ko,Ko<<=1,!(Ko&130023424)&&(Ko=4194304)):e=1);var n=ht();t=In(t,e),t!==null&&(uo(t,e,n),_t(t,n))}function WT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vv(t,n)}function qT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),Vv(t,n)}var Ov;Ov=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||yt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,VT(t,e,n);gt=!!(t.flags&131072)}else gt=!1,Ee&&e.flags&1048576&&Fy(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_a(t,e),t=e.pendingProps;var i=Ii(e,st.current);mi(e,n),i=Jh(null,e,r,t,i,n);var s=Zh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vt(r)?(s=!0,$a(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kh(e),i.updater=Pl,e.stateNode=i,i._reactInternals=e,Lc(e,r,t,n),e=Uc(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&jh(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_a(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GT(r),t=zt(r,t),i){case 0:e=Fc(null,e,r,t,n);break e;case 1:e=Yp(null,e,r,t,n);break e;case 11:e=Qp(null,e,r,t,n);break e;case 14:e=Xp(null,e,r,zt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Fc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Yp(t,e,r,i,n);case 3:e:{if(yv(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Hy(t,e),Ga(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ri(Error(b(423)),e),e=Jp(t,e,r,n,i);break e}else if(r!==i){i=Ri(Error(b(424)),e),e=Jp(t,e,r,n,i);break e}else for(It=Qn(e.stateNode.containerInfo.firstChild),St=e,Ee=!0,$t=null,n=By(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Si(),r===i){e=Sn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return Wy(e),t===null&&Vc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cc(r,i)?o=null:s!==null&&Cc(r,s)&&(e.flags|=32),gv(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Vc(e),null;case 13:return vv(t,e,n);case 4:return Gh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Qp(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,pe(qa,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!yt.current){e=Sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=_n(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Oc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Oc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mi(e,n),i=Lt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Xp(t,e,r,i,n);case 15:return pv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),_a(t,e),e.tag=1,vt(r)?(t=!0,$a(e)):t=!1,mi(e,n),hv(e,r,i),Lc(e,r,i,n),Uc(null,e,r,!0,t,n);case 19:return _v(t,e,n);case 22:return mv(t,e,n)}throw Error(b(156,e.tag))};function Mv(t,e){return ly(t,e)}function KT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(t,e,n,r){return new KT(t,e,n,r)}function ud(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GT(t){if(typeof t=="function")return ud(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ch)return 11;if(t===Ph)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=Vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ta(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ud(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return Rr(n.children,i,s,e);case Rh:o=8,i|=8;break;case oc:return t=Vt(12,n,e,i|2),t.elementType=oc,t.lanes=s,t;case ac:return t=Vt(13,n,e,i),t.elementType=ac,t.lanes=s,t;case lc:return t=Vt(19,n,e,i),t.elementType=lc,t.lanes=s,t;case Wg:return Dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $g:o=10;break e;case Hg:o=9;break e;case Ch:o=11;break e;case Ph:o=14;break e;case Ln:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Rr(t,e,n,r){return t=Vt(7,t,r,e),t.lanes=n,t}function Dl(t,e,n,r){return t=Vt(22,t,r,e),t.elementType=Wg,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=Vt(6,t,null,e),t.lanes=n,t}function Hu(t,e,n){return e=Vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Su(0),this.expirationTimes=Su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Su(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cd(t,e,n,r,i,s,o,l,u){return t=new QT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kh(s),t}function XT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lv(t){if(!t)return sr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(vt(n))return Ly(t,n,e)}return e}function bv(t,e,n,r,i,s,o,l,u){return t=cd(n,r,!0,t,i,s,o,l,u),t.context=Lv(null),n=t.current,r=ht(),i=Jn(n),s=_n(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,uo(t,i,r),_t(t,r),t}function Vl(t,e,n,r){var i=e.current,s=ht(),o=Jn(i);return n=Lv(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&(qt(t,i,o,s),ga(t,i,o)),o}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hd(t,e){lm(t,e),(t=t.alternate)&&lm(t,e)}function YT(){return null}var Fv=typeof reportError=="function"?reportError:function(t){console.error(t)};function dd(t){this._internalRoot=t}Ol.prototype.render=dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Vl(t,e,null,null)};Ol.prototype.unmount=dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Vl(null,t,null,null)}),e[Tn]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var e=my();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Fn.length&&e!==0&&e<Fn[n].priority;n++);Fn.splice(n,0,t),n===0&&yy(t)}};function fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function um(){}function JT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=nl(o);s.call(h)}}var o=bv(e,r,t,0,null,!1,!1,"",um);return t._reactRootContainer=o,t[Tn]=o.current,Hs(t.nodeType===8?t.parentNode:t),Or(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=nl(u);l.call(h)}}var u=cd(t,0,!1,null,null,!1,!1,"",um);return t._reactRootContainer=u,t[Tn]=u.current,Hs(t.nodeType===8?t.parentNode:t),Or(function(){Vl(e,u,n,r)}),u}function Ll(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=nl(o);l.call(u)}}Vl(e,o,t,i)}else o=JT(n,e,t,i,r);return nl(o)}fy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=gs(e.pendingLanes);n!==0&&(Dh(e,n|1),_t(e,Ne()),!(se&6)&&(Ci=Ne()+500,dr()))}break;case 13:Or(function(){var r=In(t,1);if(r!==null){var i=ht();qt(r,t,1,i)}}),hd(t,1)}};Vh=function(t){if(t.tag===13){var e=In(t,134217728);if(e!==null){var n=ht();qt(e,t,134217728,n)}hd(t,134217728)}};py=function(t){if(t.tag===13){var e=Jn(t),n=In(t,e);if(n!==null){var r=ht();qt(n,t,e,r)}hd(t,e)}};my=function(){return ue};gy=function(t,e){var n=ue;try{return ue=t,e()}finally{ue=n}};vc=function(t,e,n){switch(e){case"input":if(hc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=kl(r);if(!i)throw Error(b(90));Kg(r),hc(r,i)}}}break;case"textarea":Qg(t,n);break;case"select":e=n.value,e!=null&&hi(t,!!n.multiple,e,!1)}};ny=od;ry=Or;var ZT={usingClientEntryPoint:!1,Events:[ho,ii,kl,ey,ty,od]},ds={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eI={bundleType:ds.bundleType,version:ds.version,rendererPackageName:ds.rendererPackageName,rendererConfig:ds.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oy(t),t===null?null:t.stateNode},findFiberByHostInstance:ds.findFiberByHostInstance||YT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ia=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ia.isDisabled&&ia.supportsFiber)try{Tl=ia.inject(eI),Zt=ia}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZT;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fd(e))throw Error(b(200));return XT(t,e,null,n)};Rt.createRoot=function(t,e){if(!fd(t))throw Error(b(299));var n=!1,r="",i=Fv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=cd(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,Hs(t.nodeType===8?t.parentNode:t),new dd(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=oy(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Or(t)};Rt.hydrate=function(t,e,n){if(!Ml(e))throw Error(b(200));return Ll(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!fd(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=bv(e,null,t,1,n??null,i,!1,s,o),t[Tn]=e.current,Hs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ol(e)};Rt.render=function(t,e,n){if(!Ml(e))throw Error(b(200));return Ll(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(b(40));return t._reactRootContainer?(Or(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};Rt.unstable_batchedUpdates=od;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ml(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Ll(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function Uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uv)}catch(t){console.error(t)}}Uv(),Ug.exports=Rt;var tI=Ug.exports,jv,cm=tI;jv=cm.createRoot,cm.hydrateRoot;var hm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Bv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,R=h&63;u||(R=64,o||(y=64)),r.push(n[f],n[g],n[y],n[R])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new rI;const y=s<<2|l>>4;if(r.push(y),h!==64){const R=l<<4&240|h>>2;if(r.push(R),g!==64){const x=h<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iI=function(t){const e=zv(t);return Bv.encodeByteArray(e,!0)},rl=function(t){return iI(t).replace(/\./g,"")},$v=function(t){try{return Bv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=()=>sI().__FIREBASE_DEFAULTS__,aI=()=>{if(typeof process>"u"||typeof hm>"u")return;const t=hm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$v(t[1]);return e&&JSON.parse(e)},bl=()=>{try{return oI()||aI()||lI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hv=t=>{var e,n;return(n=(e=bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uI=t=>{const e=Hv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wv=()=>{var t;return(t=bl())===null||t===void 0?void 0:t.config},qv=t=>{var e;return(e=bl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function fI(){var t;const e=(t=bl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function mI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vI(){return!fI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _I(){try{return typeof indexedDB=="object"}catch{return!1}}function wI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EI,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,po.prototype.create)}}class po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?TI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new xn(i,l,r)}}function TI(t,e){return t.replace(II,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const II=/\{\$([^}]+)}/g;function SI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function il(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dm(s)&&dm(o)){if(!il(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function AI(t,e){const n=new kI(t,e);return n.subscribe.bind(n)}class kI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wu),i.error===void 0&&(i.error=Wu),i.complete===void 0&&(i.complete=Wu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){return t&&t._delegate?t._delegate:t}class Mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xI(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PI(t){return t===wr?void 0:t}function xI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const DI={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},VI=ne.INFO,OI={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},MI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=OI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pd{constructor(e){this.name=e,this._logLevel=VI,this._logHandler=MI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const LI=(t,e)=>e.some(n=>t instanceof n);let fm,pm;function bI(){return fm||(fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FI(){return pm||(pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kv=new WeakMap,Yc=new WeakMap,Gv=new WeakMap,qu=new WeakMap,md=new WeakMap;function UI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kv.set(n,t)}).catch(()=>{}),md.set(e,t),e}function jI(t){if(Yc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yc.set(t,e)}let Jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zI(t){Jc=t(Jc)}function BI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ku(this),e,...n);return Gv.set(r,e.sort?e.sort():[e]),er(r)}:FI().includes(t)?function(...e){return t.apply(Ku(this),e),er(Kv.get(this))}:function(...e){return er(t.apply(Ku(this),e))}}function $I(t){return typeof t=="function"?BI(t):(t instanceof IDBTransaction&&jI(t),LI(t,bI())?new Proxy(t,Jc):t)}function er(t){if(t instanceof IDBRequest)return UI(t);if(qu.has(t))return qu.get(t);const e=$I(t);return e!==t&&(qu.set(t,e),md.set(e,t)),e}const Ku=t=>md.get(t);function HI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=er(o);return r&&o.addEventListener("upgradeneeded",u=>{r(er(o.result),u.oldVersion,u.newVersion,er(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const WI=["get","getKey","getAll","getAllKeys","count"],qI=["put","add","delete","clear"],Gu=new Map;function mm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gu.get(e))return Gu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WI.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Gu.set(e,s),s}zI(t=>({...t,get:(e,n,r)=>mm(e,n)||t.get(e,n,r),has:(e,n)=>!!mm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function GI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zc="@firebase/app",gm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new pd("@firebase/app"),QI="@firebase/app-compat",XI="@firebase/analytics-compat",YI="@firebase/analytics",JI="@firebase/app-check-compat",ZI="@firebase/app-check",e1="@firebase/auth",t1="@firebase/auth-compat",n1="@firebase/database",r1="@firebase/data-connect",i1="@firebase/database-compat",s1="@firebase/functions",o1="@firebase/functions-compat",a1="@firebase/installations",l1="@firebase/installations-compat",u1="@firebase/messaging",c1="@firebase/messaging-compat",h1="@firebase/performance",d1="@firebase/performance-compat",f1="@firebase/remote-config",p1="@firebase/remote-config-compat",m1="@firebase/storage",g1="@firebase/storage-compat",y1="@firebase/firestore",v1="@firebase/vertexai-preview",_1="@firebase/firestore-compat",w1="firebase",E1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="[DEFAULT]",T1={[Zc]:"fire-core",[QI]:"fire-core-compat",[YI]:"fire-analytics",[XI]:"fire-analytics-compat",[ZI]:"fire-app-check",[JI]:"fire-app-check-compat",[e1]:"fire-auth",[t1]:"fire-auth-compat",[n1]:"fire-rtdb",[r1]:"fire-data-connect",[i1]:"fire-rtdb-compat",[s1]:"fire-fn",[o1]:"fire-fn-compat",[a1]:"fire-iid",[l1]:"fire-iid-compat",[u1]:"fire-fcm",[c1]:"fire-fcm-compat",[h1]:"fire-perf",[d1]:"fire-perf-compat",[f1]:"fire-rc",[p1]:"fire-rc-compat",[m1]:"fire-gcs",[g1]:"fire-gcs-compat",[y1]:"fire-fst",[_1]:"fire-fst-compat",[v1]:"fire-vertex","fire-js":"fire-js",[w1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map,I1=new Map,th=new Map;function ym(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pi(t){const e=t.name;if(th.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;th.set(e,t);for(const n of sl.values())ym(n,t);for(const n of I1.values())ym(n,t);return!0}function gd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new po("app","Firebase",S1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=E1;function Qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:eh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=Wv()),!n)throw tr.create("no-options");const s=sl.get(i);if(s){if(il(n,s.options)&&il(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new NI(i);for(const u of th.values())o.addComponent(u);const l=new A1(n,r,o);return sl.set(i,l),l}function Xv(t=eh){const e=sl.get(t);if(!e&&t===eh&&Wv())return Qv();if(!e)throw tr.create("no-app",{appName:t});return e}function nr(t,e,n){var r;let i=(r=T1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(l.join(" "));return}Pi(new Mr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="firebase-heartbeat-database",R1=1,Zs="firebase-heartbeat-store";let Qu=null;function Yv(){return Qu||(Qu=HI(k1,R1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),Qu}async function C1(t){try{const n=(await Yv()).transaction(Zs),r=await n.objectStore(Zs).get(Jv(t));return await n.done,r}catch(e){if(e instanceof xn)An.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function vm(t,e){try{const r=(await Yv()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,Jv(t)),await r.done}catch(n){if(n instanceof xn)An.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function Jv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1=1024,x1=30*24*60*60*1e3;class N1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_m();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=x1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_m(),{heartbeatsToSend:r,unsentEntries:i}=D1(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return An.warn(n),""}}}function _m(){return new Date().toISOString().substring(0,10)}function D1(t,e=P1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _I()?wI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await C1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wm(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t){Pi(new Mr("platform-logger",e=>new KI(e),"PRIVATE")),Pi(new Mr("heartbeat",e=>new N1(e),"PRIVATE")),nr(Zc,gm,t),nr(Zc,gm,"esm2017"),nr("fire-js","")}O1("");var M1="firebase",L1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nr(M1,L1,"app");function yd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Zv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const b1=Zv,e_=new po("auth","Firebase",Zv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=new pd("@firebase/auth");function F1(t,...e){ol.logLevel<=ne.WARN&&ol.warn(`Auth (${ji}): ${t}`,...e)}function Ia(t,...e){ol.logLevel<=ne.ERROR&&ol.error(`Auth (${ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,...e){throw _d(t,...e)}function Kt(t,...e){return _d(t,...e)}function vd(t,e,n){const r=Object.assign(Object.assign({},b1()),{[e]:n});return new po("auth","Firebase",r).create(e,{appName:t.name})}function rr(t){return vd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function U1(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(t,"argument-error"),vd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _d(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e_.create(t,...e)}function G(t,e,...n){if(!t)throw _d(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ia(e),new Error(e)}function kn(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function j1(){return Em()==="http:"||Em()==="https:"}function Em(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j1()||mI()||"connection"in navigator)?navigator.onLine:!0}function B1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=dI()||gI()}get(){return z1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new go(3e4,6e4);function Fl(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function zi(t,e,n,r,i={}){return n_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=mo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return pI()||(h.referrerPolicy="no-referrer"),t_.fetch()(i_(t,t.config.apiHost,n,l),h)})}async function n_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$1),e);try{const i=new W1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw sa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw sa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw sa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw sa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw vd(t,f,h);sn(t,f)}}catch(i){if(i instanceof xn)throw i;sn(t,"network-request-failed",{message:String(i)})}}async function r_(t,e,n,r,i={}){const s=await zi(t,e,n,r,i);return"mfaPendingCredential"in s&&sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function i_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wd(t.config,i):`${t.config.apiScheme}://${i}`}class W1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Kt(this.auth,"network-request-failed")),H1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Kt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(t,e){return zi(t,"POST","/v1/accounts:delete",e)}async function s_(t,e){return zi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K1(t,e=!1){const n=kt(t),r=await n.getIdToken(e),i=Ed(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ns(Xu(i.auth_time)),issuedAtTime:Ns(Xu(i.iat)),expirationTime:Ns(Xu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xu(t){return Number(t)*1e3}function Ed(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ia("JWT malformed, contained fewer than 3 sections"),null;try{const i=$v(n);return i?JSON.parse(i):(Ia("Failed to decode base64 JWT payload"),null)}catch(i){return Ia("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Tm(t){const e=Ed(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&G1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function G1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ns(this.lastLoginAt),this.creationTime=Ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(t){var e;const n=t.auth,r=await t.getIdToken(),i=await eo(t,s_(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?o_(s.providerUserInfo):[],l=Y1(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new rh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function X1(t){const e=kt(t);await al(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function o_(t){return t.map(e=>{var{providerId:n}=e,r=yd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(t,e){const n=await n_(t,{},async()=>{const r=mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=i_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",t_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Z1(t,e){return zi(t,"POST","/v2/accounts:revokeToken",Fl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Tm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await J1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new yi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Q1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await eo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return K1(this,e)}reload(){return X1(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await al(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(rr(this.auth));const e=await this.getIdToken();return await eo(this,q1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,R=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,w=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:U,providerData:F,stsTokenManager:v}=n;G(S&&v,e,"internal-error");const m=yi.fromJSON(this.name,v);G(typeof S=="string",e,"internal-error"),Mn(g,e.name),Mn(y,e.name),G(typeof V=="boolean",e,"internal-error"),G(typeof U=="boolean",e,"internal-error"),Mn(R,e.name),Mn(x,e.name),Mn(D,e.name),Mn(O,e.name),Mn(I,e.name),Mn(w,e.name);const _=new yn({uid:S,auth:e,email:y,emailVerified:V,displayName:g,isAnonymous:U,photoURL:x,phoneNumber:R,tenantId:D,stsTokenManager:m,createdAt:I,lastLoginAt:w});return F&&Array.isArray(F)&&(_.providerData=F.map(T=>Object.assign({},T))),O&&(_._redirectEventId=O),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new yi;i.updateFromServerResponse(n);const s=new yn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await al(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?o_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new yi;l.updateFromIdToken(r);const u=new yn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im=new Map;function vn(t){kn(t instanceof Function,"Expected a class definition");let e=Im.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Im.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a_.type="NONE";const Sm=a_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(t,e,n){return`firebase:${t}:${e}:${n}`}class vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vi(vn(Sm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||vn(Sm);const o=Sa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){const g=yn._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new vi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new vi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(f_(e))return"Blackberry";if(p_(e))return"Webos";if(u_(e))return"Safari";if((e.includes("chrome/")||c_(e))&&!e.includes("edge/"))return"Chrome";if(d_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function l_(t=ot()){return/firefox\//i.test(t)}function u_(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c_(t=ot()){return/crios\//i.test(t)}function h_(t=ot()){return/iemobile/i.test(t)}function d_(t=ot()){return/android/i.test(t)}function f_(t=ot()){return/blackberry/i.test(t)}function p_(t=ot()){return/webos/i.test(t)}function Td(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eS(t=ot()){var e;return Td(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tS(){return yI()&&document.documentMode===10}function m_(t=ot()){return Td(t)||d_(t)||p_(t)||f_(t)||/windows phone/i.test(t)||h_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t,e=[]){let n;switch(t){case"Browser":n=Am(ot());break;case"Worker":n=`${Am(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e={}){return zi(t,"GET","/v2/passwordPolicy",Fl(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=6;class sS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new km(this),this.idTokenSubscription=new km(this),this.beforeStateQueue=new nS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await s_(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await al(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=B1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(rr(this));const n=e?kt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rS(this),n=new sS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Z1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&F1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yo(t){return kt(t)}class km{constructor(e){this.auth=e,this.observer=null,this.addObserver=AI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aS(t){Id=t}function lS(t){return Id.loadJS(t)}function uS(){return Id.gapiScript}function cS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t,e){const n=gd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(il(s,e??{}))return i;sn(i,"already-initialized")}return n.initialize({options:e})}function dS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fS(t,e,n){const r=yo(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=y_(e),{host:o,port:l}=pS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),mS()}function y_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pS(t){const e=y_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Rm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Rm(o)}}}function Rm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(t,e){return r_(t,"POST","/v1/accounts:signInWithIdp",Fl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="http://localhost";class Lr extends v_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Lr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:gS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=mo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo extends Sd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends vo{constructor(){super("facebook.com")}static credential(e){return Lr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Lr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fn.credential(n,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends vo{constructor(){super("github.com")}static credential(e){return Lr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.GITHUB_SIGN_IN_METHOD="github.com";zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends vo{constructor(){super("twitter.com")}static credential(e,n){return Lr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yS(t,e){return r_(t,"POST","/v1/accounts:signUp",Fl(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await yn._fromIdTokenResponse(e,r,i),o=Cm(r);return new or({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Cm(r);return new or({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Cm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(t){var e;if(Jt(t.app))return Promise.reject(rr(t));const n=yo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new or({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await yS(n,{returnSecureToken:!0}),i=await or._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends xn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ll.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ll(e,n,r,i)}}function __(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ll._fromErrorAndOperation(t,s,e,r):s})}async function _S(t,e,n=!1){const r=await eo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return or._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(rr(r));const i="reauthenticate";try{const s=await eo(t,__(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Ed(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),or._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t,e,n=!1){if(Jt(t.app))return Promise.reject(rr(t));const r="signIn",i=await __(t,r,e),s=await or._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function TS(t,e,n,r){return kt(t).onIdTokenChanged(e,n,r)}function IS(t,e,n){return kt(t).beforeAuthStateChanged(e,n)}function SS(t,e,n,r){return kt(t).onAuthStateChanged(e,n,r)}function AS(t){return kt(t).signOut()}const ul="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ul,"1"),this.storage.removeItem(ul),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=1e3,RS=10;class E_ extends w_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=m_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RS):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}E_.type="LOCAL";const CS=E_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_ extends w_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}T_.type="SESSION";const I_=T_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ul(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await PS(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ul.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Ad("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function NS(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function DS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function OS(){return S_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_="firebaseLocalStorageDb",MS=1,cl="firebaseLocalStorage",k_="fbase_key";class _o{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jl(t,e){return t.transaction([cl],e?"readwrite":"readonly").objectStore(cl)}function LS(){const t=indexedDB.deleteDatabase(A_);return new _o(t).toPromise()}function ih(){const t=indexedDB.open(A_,MS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cl,{keyPath:k_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cl)?e(r):(r.close(),await LS(),e(await ih()))})})}async function Pm(t,e,n){const r=jl(t,!0).put({[k_]:e,value:n});return new _o(r).toPromise()}async function bS(t,e){const n=jl(t,!1).get(e),r=await new _o(n).toPromise();return r===void 0?null:r.value}function xm(t,e){const n=jl(t,!0).delete(e);return new _o(n).toPromise()}const FS=800,US=3;class R_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>US)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ul._getInstance(OS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DS(),!this.activeServiceWorker)return;this.sender=new xS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ih();return await Pm(e,ul,"1"),await xm(e,ul),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jl(i,!1).getAll();return new _o(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R_.type="LOCAL";const jS=R_;new go(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t,e){return e?vn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends v_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zS(t){return ES(t.auth,new kd(t),t.bypassAuthState)}function BS(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),wS(n,new kd(t),t.bypassAuthState)}async function $S(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),_S(n,new kd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zS;case"linkViaPopup":case"linkViaRedirect":return $S;case"reauthViaPopup":case"reauthViaRedirect":return BS;default:sn(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=new go(2e3,1e4);async function WS(t,e,n){if(Jt(t.app))return Promise.reject(Kt(t,"operation-not-supported-in-this-environment"));const r=yo(t);U1(t,e,Sd);const i=C_(r,n);return new Sr(r,"signInViaPopup",e,i).executeNotNull()}class Sr extends P_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HS.get())};e()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="pendingRedirect",Aa=new Map;class KS extends P_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Aa.get(this.auth._key());if(!e){try{const r=await GS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Aa.set(this.auth._key(),e)}return this.bypassAuthState||Aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GS(t,e){const n=YS(e),r=XS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QS(t,e){Aa.set(t._key(),e)}function XS(t){return vn(t._redirectPersistence)}function YS(t){return Sa(qS,t.config.apiKey,t.name)}async function JS(t,e,n=!1){if(Jt(t.app))return Promise.reject(rr(t));const r=yo(t),i=C_(r,e),o=await new KS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=10*60*1e3;class eA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!x_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Kt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nm(e))}saveEventToCache(e){this.cachedEventUids.add(Nm(e)),this.lastProcessedEventTime=Date.now()}}function Nm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function x_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return x_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e={}){return zi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iA=/^https?/;async function sA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nA(t);for(const n of e)try{if(oA(n))return}catch{}sn(t,"unauthorized-domain")}function oA(t){const e=nh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iA.test(n))return!1;if(rA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new go(3e4,6e4);function Dm(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lA(t){return new Promise((e,n)=>{var r,i,s;function o(){Dm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dm(),n(Kt(t,"network-request-failed"))},timeout:aA.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const l=cS("iframefcb");return tn()[l]=()=>{gapi.load?o():n(Kt(t,"network-request-failed"))},lS(`${uS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ka=null,e})}let ka=null;function uA(t){return ka=ka||lA(t),ka}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=new go(5e3,15e3),hA="__/auth/iframe",dA="emulator/auth/iframe",fA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mA(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wd(e,dA):`https://${t.config.authDomain}/${hA}`,r={apiKey:e.apiKey,appName:t.name,v:ji},i=pA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${mo(r).slice(1)}`}async function gA(t){const e=await uA(t),n=tn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:mA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Kt(t,"network-request-failed"),l=tn().setTimeout(()=>{s(o)},cA.get());function u(){tn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vA=500,_A=600,wA="_blank",EA="http://localhost";class Vm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TA(t,e,n,r=vA,i=_A){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},yA),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ot().toLowerCase();n&&(l=c_(h)?wA:n),l_(h)&&(e=e||EA,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[R,x])=>`${y}${R}=${x},`,"");if(eS(h)&&l!=="_self")return IA(e||"",l),new Vm(null);const g=window.open(e||"",l,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new Vm(g)}function IA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA="__/auth/handler",AA="emulator/auth/handler",kA=encodeURIComponent("fac");async function Om(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:i};if(e instanceof Sd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof vo){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${kA}=${encodeURIComponent(u)}`:"";return`${RA(t)}?${mo(l).slice(1)}${h}`}function RA({config:t}){return t.emulator?wd(t,AA):`https://${t.authDomain}/${SA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu="webStorageSupport";class CA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=I_,this._completeRedirectFn=JS,this._overrideRedirectResult=QS}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Om(e,n,r,nh(),i);return TA(e,o,Ad())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Om(e,n,r,nh(),i);return NS(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gA(e),r=new eA(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yu,{type:Yu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Yu];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return m_()||u_()||Td()}}const PA=CA;var Mm="@firebase/auth",Lm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DA(t){Pi(new Mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g_(t)},h=new oS(r,i,s,u);return dS(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pi(new Mr("auth-internal",e=>{const n=yo(e.getProvider("auth").getImmediate());return(r=>new xA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nr(Mm,Lm,NA(t)),nr(Mm,Lm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=5*60,OA=qv("authIdTokenMaxAge")||VA;let bm=null;const MA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>OA)return;const i=n==null?void 0:n.token;bm!==i&&(bm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LA(t=Xv()){const e=gd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hS(t,{popupRedirectResolver:PA,persistence:[jS,CS,I_]}),r=qv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MA(s.toString());IS(n,o,()=>o(n.currentUser)),TS(n,l=>o(l))}}const i=Hv("auth");return i&&fS(n,`http://${i}`),n}function bA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Kt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DA("Browser");var Fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cr,N_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(T,A,C){for(var E=Array(arguments.length-2),at=2;at<arguments.length;at++)E[at-2]=arguments[at];return m.prototype[A].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,m,_){_||(_=0);var T=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)T[A]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(A=0;16>A;++A)T[A]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],A=v.g[2];var C=v.g[3],E=m+(C^_&(A^C))+T[0]+3614090360&4294967295;m=_+(E<<7&4294967295|E>>>25),E=C+(A^m&(_^A))+T[1]+3905402710&4294967295,C=m+(E<<12&4294967295|E>>>20),E=A+(_^C&(m^_))+T[2]+606105819&4294967295,A=C+(E<<17&4294967295|E>>>15),E=_+(m^A&(C^m))+T[3]+3250441966&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(C^_&(A^C))+T[4]+4118548399&4294967295,m=_+(E<<7&4294967295|E>>>25),E=C+(A^m&(_^A))+T[5]+1200080426&4294967295,C=m+(E<<12&4294967295|E>>>20),E=A+(_^C&(m^_))+T[6]+2821735955&4294967295,A=C+(E<<17&4294967295|E>>>15),E=_+(m^A&(C^m))+T[7]+4249261313&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(C^_&(A^C))+T[8]+1770035416&4294967295,m=_+(E<<7&4294967295|E>>>25),E=C+(A^m&(_^A))+T[9]+2336552879&4294967295,C=m+(E<<12&4294967295|E>>>20),E=A+(_^C&(m^_))+T[10]+4294925233&4294967295,A=C+(E<<17&4294967295|E>>>15),E=_+(m^A&(C^m))+T[11]+2304563134&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(C^_&(A^C))+T[12]+1804603682&4294967295,m=_+(E<<7&4294967295|E>>>25),E=C+(A^m&(_^A))+T[13]+4254626195&4294967295,C=m+(E<<12&4294967295|E>>>20),E=A+(_^C&(m^_))+T[14]+2792965006&4294967295,A=C+(E<<17&4294967295|E>>>15),E=_+(m^A&(C^m))+T[15]+1236535329&4294967295,_=A+(E<<22&4294967295|E>>>10),E=m+(A^C&(_^A))+T[1]+4129170786&4294967295,m=_+(E<<5&4294967295|E>>>27),E=C+(_^A&(m^_))+T[6]+3225465664&4294967295,C=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(C^m))+T[11]+643717713&4294967295,A=C+(E<<14&4294967295|E>>>18),E=_+(C^m&(A^C))+T[0]+3921069994&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(A^C&(_^A))+T[5]+3593408605&4294967295,m=_+(E<<5&4294967295|E>>>27),E=C+(_^A&(m^_))+T[10]+38016083&4294967295,C=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(C^m))+T[15]+3634488961&4294967295,A=C+(E<<14&4294967295|E>>>18),E=_+(C^m&(A^C))+T[4]+3889429448&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(A^C&(_^A))+T[9]+568446438&4294967295,m=_+(E<<5&4294967295|E>>>27),E=C+(_^A&(m^_))+T[14]+3275163606&4294967295,C=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(C^m))+T[3]+4107603335&4294967295,A=C+(E<<14&4294967295|E>>>18),E=_+(C^m&(A^C))+T[8]+1163531501&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(A^C&(_^A))+T[13]+2850285829&4294967295,m=_+(E<<5&4294967295|E>>>27),E=C+(_^A&(m^_))+T[2]+4243563512&4294967295,C=m+(E<<9&4294967295|E>>>23),E=A+(m^_&(C^m))+T[7]+1735328473&4294967295,A=C+(E<<14&4294967295|E>>>18),E=_+(C^m&(A^C))+T[12]+2368359562&4294967295,_=A+(E<<20&4294967295|E>>>12),E=m+(_^A^C)+T[5]+4294588738&4294967295,m=_+(E<<4&4294967295|E>>>28),E=C+(m^_^A)+T[8]+2272392833&4294967295,C=m+(E<<11&4294967295|E>>>21),E=A+(C^m^_)+T[11]+1839030562&4294967295,A=C+(E<<16&4294967295|E>>>16),E=_+(A^C^m)+T[14]+4259657740&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(_^A^C)+T[1]+2763975236&4294967295,m=_+(E<<4&4294967295|E>>>28),E=C+(m^_^A)+T[4]+1272893353&4294967295,C=m+(E<<11&4294967295|E>>>21),E=A+(C^m^_)+T[7]+4139469664&4294967295,A=C+(E<<16&4294967295|E>>>16),E=_+(A^C^m)+T[10]+3200236656&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(_^A^C)+T[13]+681279174&4294967295,m=_+(E<<4&4294967295|E>>>28),E=C+(m^_^A)+T[0]+3936430074&4294967295,C=m+(E<<11&4294967295|E>>>21),E=A+(C^m^_)+T[3]+3572445317&4294967295,A=C+(E<<16&4294967295|E>>>16),E=_+(A^C^m)+T[6]+76029189&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(_^A^C)+T[9]+3654602809&4294967295,m=_+(E<<4&4294967295|E>>>28),E=C+(m^_^A)+T[12]+3873151461&4294967295,C=m+(E<<11&4294967295|E>>>21),E=A+(C^m^_)+T[15]+530742520&4294967295,A=C+(E<<16&4294967295|E>>>16),E=_+(A^C^m)+T[2]+3299628645&4294967295,_=A+(E<<23&4294967295|E>>>9),E=m+(A^(_|~C))+T[0]+4096336452&4294967295,m=_+(E<<6&4294967295|E>>>26),E=C+(_^(m|~A))+T[7]+1126891415&4294967295,C=m+(E<<10&4294967295|E>>>22),E=A+(m^(C|~_))+T[14]+2878612391&4294967295,A=C+(E<<15&4294967295|E>>>17),E=_+(C^(A|~m))+T[5]+4237533241&4294967295,_=A+(E<<21&4294967295|E>>>11),E=m+(A^(_|~C))+T[12]+1700485571&4294967295,m=_+(E<<6&4294967295|E>>>26),E=C+(_^(m|~A))+T[3]+2399980690&4294967295,C=m+(E<<10&4294967295|E>>>22),E=A+(m^(C|~_))+T[10]+4293915773&4294967295,A=C+(E<<15&4294967295|E>>>17),E=_+(C^(A|~m))+T[1]+2240044497&4294967295,_=A+(E<<21&4294967295|E>>>11),E=m+(A^(_|~C))+T[8]+1873313359&4294967295,m=_+(E<<6&4294967295|E>>>26),E=C+(_^(m|~A))+T[15]+4264355552&4294967295,C=m+(E<<10&4294967295|E>>>22),E=A+(m^(C|~_))+T[6]+2734768916&4294967295,A=C+(E<<15&4294967295|E>>>17),E=_+(C^(A|~m))+T[13]+1309151649&4294967295,_=A+(E<<21&4294967295|E>>>11),E=m+(A^(_|~C))+T[4]+4149444226&4294967295,m=_+(E<<6&4294967295|E>>>26),E=C+(_^(m|~A))+T[11]+3174756917&4294967295,C=m+(E<<10&4294967295|E>>>22),E=A+(m^(C|~_))+T[2]+718787259&4294967295,A=C+(E<<15&4294967295|E>>>17),E=_+(C^(A|~m))+T[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,v.g[2]=v.g[2]+A&4294967295,v.g[3]=v.g[3]+C&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,T=this.B,A=this.h,C=0;C<m;){if(A==0)for(;C<=_;)i(this,v,C),C+=this.blockSize;if(typeof v=="string"){for(;C<m;)if(T[A++]=v.charCodeAt(C++),A==this.blockSize){i(this,T),A=0;break}}else for(;C<m;)if(T[A++]=v[C++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var T=0;32>T;T+=8)v[_++]=this.g[m]>>>T&255;return v};function s(v,m){var _=l;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function o(v,m){this.h=m;for(var _=[],T=!0,A=v.length-1;0<=A;A--){var C=v[A]|0;T&&C==m||(_[A]=C,T=!1)}this.g=_}var l={};function u(v){return-128<=v&&128>v?s(v,function(m){return new o([m|0],0>m?-1:0)}):new o([v|0],0>v?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return g;if(0>v)return O(h(-v));for(var m=[],_=1,T=0;v>=_;T++)m[T]=v/_|0,_*=4294967296;return new o(m,0)}function f(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return O(f(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),T=g,A=0;A<v.length;A+=8){var C=Math.min(8,v.length-A),E=parseInt(v.substring(A,A+C),m);8>C?(C=h(Math.pow(m,C)),T=T.j(C).add(h(E))):(T=T.j(_),T=T.add(h(E)))}return T}var g=u(0),y=u(1),R=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-O(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var T=this.i(_);v+=(0<=T?T:4294967296+T)*m,m*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(D(this))return"-"+O(this).toString(v);for(var m=h(Math.pow(v,6)),_=this,T="";;){var A=V(_,m).g;_=I(_,A.j(m));var C=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=A,x(_))return C+T;for(;6>C.length;)C="0"+C;T=C+T}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function D(v){return v.h==-1}t.l=function(v){return v=I(this,v),D(v)?-1:x(v)?0:1};function O(v){for(var m=v.g.length,_=[],T=0;T<m;T++)_[T]=~v.g[T];return new o(_,~v.h).add(y)}t.abs=function(){return D(this)?O(this):this},t.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],T=0,A=0;A<=m;A++){var C=T+(this.i(A)&65535)+(v.i(A)&65535),E=(C>>>16)+(this.i(A)>>>16)+(v.i(A)>>>16);T=E>>>16,C&=65535,E&=65535,_[A]=E<<16|C}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(v,m){return v.add(O(m))}t.j=function(v){if(x(this)||x(v))return g;if(D(this))return D(v)?O(this).j(O(v)):O(O(this).j(v));if(D(v))return O(this.j(O(v)));if(0>this.l(R)&&0>v.l(R))return h(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],T=0;T<2*m;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<v.g.length;A++){var C=this.i(T)>>>16,E=this.i(T)&65535,at=v.i(A)>>>16,ln=v.i(A)&65535;_[2*T+2*A]+=E*ln,w(_,2*T+2*A),_[2*T+2*A+1]+=C*ln,w(_,2*T+2*A+1),_[2*T+2*A+1]+=E*at,w(_,2*T+2*A+1),_[2*T+2*A+2]+=C*at,w(_,2*T+2*A+2)}for(T=0;T<m;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=m;T<2*m;T++)_[T]=0;return new o(_,0)};function w(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function S(v,m){this.g=v,this.h=m}function V(v,m){if(x(m))throw Error("division by zero");if(x(v))return new S(g,g);if(D(v))return m=V(O(v),m),new S(O(m.g),O(m.h));if(D(m))return m=V(v,O(m)),new S(O(m.g),m.h);if(30<v.g.length){if(D(v)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,T=m;0>=T.l(v);)_=U(_),T=U(T);var A=F(_,1),C=F(T,1);for(T=F(T,2),_=F(_,2);!x(T);){var E=C.add(T);0>=E.l(v)&&(A=A.add(_),C=E),T=F(T,1),_=F(_,1)}return m=I(v,A.j(m)),new S(A,m)}for(A=g;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),C=h(_),E=C.j(m);D(E)||0<E.l(v);)_-=T,C=h(_),E=C.j(m);x(C)&&(C=y),A=A.add(C),v=I(v,E)}return new S(A,v)}t.A=function(v){return V(this,v).h},t.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)&v.i(T);return new o(_,this.h&v.h)},t.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)|v.i(T);return new o(_,this.h|v.h)},t.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],T=0;T<m;T++)_[T]=this.i(T)^v.i(T);return new o(_,this.h^v.h)};function U(v){for(var m=v.g.length+1,_=[],T=0;T<m;T++)_[T]=v.i(T)<<1|v.i(T-1)>>>31;return new o(_,v.h)}function F(v,m){var _=m>>5;m%=32;for(var T=v.g.length-_,A=[],C=0;C<T;C++)A[C]=0<m?v.i(C+_)>>>m|v.i(C+_+1)<<32-m:v.i(C+_);return new o(A,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,N_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Cr=o}).apply(typeof Fm<"u"?Fm:typeof self<"u"?self:typeof window<"u"?window:{});var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D_,vs,V_,Ra,sh,O_,M_,L_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof oa=="object"&&oa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var P=a[p];if(!(P in d))break e;d=d[P]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,P={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function R(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function x(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,P,N){for(var j=Array(arguments.length-2),de=2;de<arguments.length;de++)j[de-2]=arguments[de];return c.prototype[P].apply(p,j)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function O(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const P=a.length||0,N=p.length||0;a.length=P+N;for(let j=0;j<N;j++)a[P+j]=p[j]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var U=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function F(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function v(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,c){let d,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(d in p)a[d]=p[d];for(let N=0;N<_.length;N++)d=_[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function E(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class at{constructor(){this.h=this.g=null}add(c,d){const p=ln.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ln=new I(()=>new fr,a=>a.reset());class fr{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let wt,B=!1,K=new at,Z=()=>{const a=l.Promise.resolve(void 0);wt=()=>{a.then(me)}};var me=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){C(d)}var c=ln;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}B=!1};function le(){this.s=this.s,this.C=this.C}le.prototype.s=!1,le.prototype.ma=function(){this.s||(this.s=!0,this.N())},le.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Ft=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function Fe(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{V(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Pt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Fe.aa.h.call(this)}}x(Fe,Te);var Pt={2:"touch",3:"pen",4:"mouse"};Fe.prototype.h=function(){Fe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),X=0;function ge(a,c,d,p,P){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=P,this.key=++X,this.da=this.fa=!1}function fe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ie(a){this.src=a,this.g={},this.h=0}ie.prototype.add=function(a,c,d,p,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var j=Hr(a,c,p,P);return-1<j?(c=a[j],d||(c.fa=!1)):(c=new ge(c,this.src,N,!!p,P),c.fa=d,a.push(c)),c};function pt(a,c){var d=c.type;if(d in a.g){var p=a.g[d],P=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=P)&&Array.prototype.splice.call(p,P,1),N&&(fe(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Hr(a,c,d,p){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return P}return-1}var Jl="closure_lm_"+(1e6*Math.random()|0),Zl={};function nf(a,c,d,p,P){if(Array.isArray(c)){for(var N=0;N<c.length;N++)nf(a,c[N],d,p,P);return null}return d=of(d),a&&a[z]?a.K(c,d,h(p)?!!p.capture:!1,P):Z0(a,c,d,!1,p,P)}function Z0(a,c,d,p,P,N){if(!c)throw Error("Invalid event type");var j=h(P)?!!P.capture:!!P,de=tu(a);if(de||(a[Jl]=de=new ie(a)),d=de.add(c,d,p,j,N),d.proxy)return d;if(p=ew(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)Ft||(P=j),P===void 0&&(P=!1),a.addEventListener(c.toString(),p,P);else if(a.attachEvent)a.attachEvent(sf(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ew(){function a(d){return c.call(a.src,a.listener,d)}const c=tw;return a}function rf(a,c,d,p,P){if(Array.isArray(c))for(var N=0;N<c.length;N++)rf(a,c[N],d,p,P);else p=h(p)?!!p.capture:!!p,d=of(d),a&&a[z]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=Hr(N,d,p,P),-1<d&&(fe(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=tu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Hr(c,d,p,P)),(d=-1<a?c[a]:null)&&eu(d))}function eu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[z])pt(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(sf(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=tu(c))?(pt(d,a),d.h==0&&(d.src=null,c[Jl]=null)):fe(a)}}}function sf(a){return a in Zl?Zl[a]:Zl[a]="on"+a}function tw(a,c){if(a.da)a=!0;else{c=new Fe(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&eu(a),a=d.call(p,c)}return a}function tu(a){return a=a[Jl],a instanceof ie?a:null}var nu="__closure_events_fn_"+(1e9*Math.random()>>>0);function of(a){return typeof a=="function"?a:(a[nu]||(a[nu]=function(c){return a.handleEvent(c)}),a[nu])}function Xe(){le.call(this),this.i=new ie(this),this.M=this,this.F=null}x(Xe,le),Xe.prototype[z]=!0,Xe.prototype.removeEventListener=function(a,c,d,p){rf(this,a,c,d,p)};function lt(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var P=c;c=new Te(p,a),T(c,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var j=c.g=d[N];P=ko(j,p,!0,c)&&P}if(j=c.g=a,P=ko(j,p,!0,c)&&P,P=ko(j,p,!1,c)&&P,d)for(N=0;N<d.length;N++)j=c.g=d[N],P=ko(j,p,!1,c)&&P}Xe.prototype.N=function(){if(Xe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)fe(d[p]);delete a.g[c],a.h--}}this.F=null},Xe.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Xe.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function ko(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,N=0;N<c.length;++N){var j=c[N];if(j&&!j.da&&j.capture==d){var de=j.listener,Be=j.ha||j.src;j.fa&&pt(a.i,j),P=de.call(Be,p)!==!1&&P}}return P&&!p.defaultPrevented}function af(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function lf(a){a.g=af(()=>{a.g=null,a.i&&(a.i=!1,lf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class nw extends le{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:lf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qi(a){le.call(this),this.h=a,this.g={}}x(qi,le);var uf=[];function cf(a){F(a.g,function(c,d){this.g.hasOwnProperty(d)&&eu(c)},a),a.g={}}qi.prototype.N=function(){qi.aa.N.call(this),cf(this)},qi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ru=l.JSON.stringify,rw=l.JSON.parse,iw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function iu(){}iu.prototype.h=null;function hf(a){return a.h||(a.h=a.i())}function df(){}var Ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function su(){Te.call(this,"d")}x(su,Te);function ou(){Te.call(this,"c")}x(ou,Te);var pr={},ff=null;function Ro(){return ff=ff||new Xe}pr.La="serverreachability";function pf(a){Te.call(this,pr.La,a)}x(pf,Te);function Gi(a){const c=Ro();lt(c,new pf(c))}pr.STAT_EVENT="statevent";function mf(a,c){Te.call(this,pr.STAT_EVENT,a),this.stat=c}x(mf,Te);function ut(a){const c=Ro();lt(c,new mf(c,a))}pr.Ma="timingevent";function gf(a,c){Te.call(this,pr.Ma,a),this.size=c}x(gf,Te);function Qi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Xi(){this.g=!0}Xi.prototype.xa=function(){this.g=!1};function sw(a,c,d,p,P,N){a.info(function(){if(a.g)if(N)for(var j="",de=N.split("&"),Be=0;Be<de.length;Be++){var oe=de[Be].split("=");if(1<oe.length){var Ye=oe[0];oe=oe[1];var Je=Ye.split("_");j=2<=Je.length&&Je[1]=="type"?j+(Ye+"="+oe+"&"):j+(Ye+"=redacted&")}}else j=null;else j=N;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+d+`
`+j})}function ow(a,c,d,p,P,N,j){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+d+`
`+N+" "+j})}function Wr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+lw(a,d)+(p?" "+p:"")})}function aw(a,c){a.info(function(){return"TIMEOUT: "+c})}Xi.prototype.info=function(){};function lw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var j=1;j<P.length;j++)P[j]=""}}}}return ru(d)}catch{return c}}var Co={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},au;function Po(){}x(Po,iu),Po.prototype.g=function(){return new XMLHttpRequest},Po.prototype.i=function(){return{}},au=new Po;function Nn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new qi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vf}function vf(){this.i=null,this.g="",this.h=!1}var _f={},lu={};function uu(a,c,d){a.L=1,a.v=Vo(un(c)),a.m=d,a.P=!0,wf(a,null)}function wf(a,c){a.F=Date.now(),xo(a),a.A=un(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),Of(d.i,"t",p),a.C=0,d=a.j.J,a.h=new vf,a.g=Jf(a.j,d?c:null,!a.m),0<a.O&&(a.M=new nw(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(uf[0]=P.toString()),P=uf);for(var N=0;N<P.length;N++){var j=nf(d,P[N],p||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Gi(),sw(a.i,a.u,a.A,a.l,a.R,a.m)}Nn.prototype.ca=function(a){a=a.target;const c=this.M;c&&cn(a)==3?c.j():this.Y(a)},Nn.prototype.Y=function(a){try{if(a==this.g)e:{const Je=cn(this.g);var c=this.g.Ba();const Gr=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||zf(this.g)))){this.J||Je!=4||c==7||(c==8||0>=Gr?Gi(3):Gi(2)),cu(this);var d=this.g.Z();this.X=d;t:if(Ef(this)){var p=zf(this.g);a="";var P=p.length,N=cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),Yi(this);var j="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==P-1)});p.length=0,this.h.g+=a,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,ow(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var de,Be=this.g;if((de=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(de)){var oe=de;break t}}oe=null}if(d=oe)Wr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hu(this,d);else{this.o=!1,this.s=3,ut(12),mr(this),Yi(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<j.length;)if(Ut=uw(this,j),Ut==lu){Je==4&&(this.s=4,ut(14),d=!1),Wr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==_f){this.s=4,ut(15),Wr(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else Wr(this.i,this.l,Ut,null),hu(this,Ut);if(Ef(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||j.length!=0||this.h.h||(this.s=1,ut(16),d=!1),this.o=this.o&&d,!d)Wr(this.i,this.l,j,"[Invalid Chunked Response]"),mr(this),Yi(this);else if(0<j.length&&!this.W){this.W=!0;var Ye=this.j;Ye.g==this&&Ye.ba&&!Ye.M&&(Ye.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),yu(Ye),Ye.M=!0,ut(11))}}else Wr(this.i,this.l,j,null),hu(this,j);Je==4&&mr(this),this.o&&!this.J&&(Je==4?Gf(this.j,this):(this.o=!1,xo(this)))}else kw(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),mr(this),Yi(this)}}}catch{}finally{}};function Ef(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function uw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?lu:(d=Number(c.substring(d,p)),isNaN(d)?_f:(p+=1,p+d>c.length?lu:(c=c.slice(p,p+d),a.C=p+d,c)))}Nn.prototype.cancel=function(){this.J=!0,mr(this)};function xo(a){a.S=Date.now()+a.I,Tf(a,a.I)}function Tf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Qi(y(a.ba,a),c)}function cu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Nn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(aw(this.i,this.A),this.L!=2&&(Gi(),ut(17)),mr(this),this.s=2,Yi(this)):Tf(this,this.S-a)};function Yi(a){a.j.G==0||a.J||Gf(a.j,a)}function mr(a){cu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,cf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function hu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||du(d.h,a))){if(!a.K&&du(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Uo(d),bo(d);else break e;gu(d),ut(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Qi(y(d.Za,d),6e3));if(1>=Af(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else yr(d,11)}else if((a.K||d.g==a)&&Uo(d),!w(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let oe=P[c];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Ye=oe[3];Ye!=null&&(d.la=Ye,d.j.info("VER="+d.la));const Je=oe[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const Gr=oe[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(p=1.5*Gr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ut=a.g;if(Ut){const zo=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zo){var N=p.h;N.g||zo.indexOf("spdy")==-1&&zo.indexOf("quic")==-1&&zo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(fu(N,N.h),N.h=null))}if(p.D){const vu=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;vu&&(p.ya=vu,ye(p.I,p.D,vu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=a;if(p.qa=Yf(p,p.J?p.ia:null,p.W),j.K){kf(p.h,j);var de=j,Be=p.L;Be&&(de.I=Be),de.B&&(cu(de),xo(de)),p.g=j}else qf(p);0<d.i.length&&Fo(d)}else oe[0]!="stop"&&oe[0]!="close"||yr(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?yr(d,7):mu(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}Gi(4)}catch{}}var cw=class{constructor(a,c){this.g=a,this.map=c}};function If(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Af(a){return a.h?1:a.g?a.g.size:0}function du(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function fu(a,c){a.g?a.g.add(c):a.h=c}function kf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}If.prototype.cancel=function(){if(this.i=Rf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Rf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function hw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function dw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Cf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=dw(a),p=hw(a),P=p.length,N=0;N<P;N++)c.call(void 0,p[N],d&&d[N],a)}var Pf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),P=null;if(0<=p){var N=a[d].substring(0,p);P=a[d].substring(p+1)}else N=a[d];c(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,No(this,a.j),this.o=a.o,this.g=a.g,Do(this,a.s),this.l=a.l;var c=a.i,d=new es;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),xf(this,d),this.m=a.m}else a&&(c=String(a).match(Pf))?(this.h=!1,No(this,c[1]||"",!0),this.o=Ji(c[2]||""),this.g=Ji(c[3]||"",!0),Do(this,c[4]),this.l=Ji(c[5]||"",!0),xf(this,c[6]||"",!0),this.m=Ji(c[7]||"")):(this.h=!1,this.i=new es(null,this.h))}gr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Zi(c,Nf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Zi(c,Nf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Zi(d,d.charAt(0)=="/"?gw:mw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Zi(d,vw)),a.join("")};function un(a){return new gr(a)}function No(a,c,d){a.j=d?Ji(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Do(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function xf(a,c,d){c instanceof es?(a.i=c,_w(a.i,a.h)):(d||(c=Zi(c,yw)),a.i=new es(c,a.h))}function ye(a,c,d){a.i.set(c,d)}function Vo(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ji(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Zi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,pw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function pw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Nf=/[#\/\?@]/g,mw=/[#\?:]/g,gw=/[#\?]/g,yw=/[#\?@]/g,vw=/#/g;function es(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Dn(a){a.g||(a.g=new Map,a.h=0,a.i&&fw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=es.prototype,t.add=function(a,c){Dn(this),this.i=null,a=qr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Df(a,c){Dn(a),c=qr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Vf(a,c){return Dn(a),c=qr(a,c),a.g.has(c)}t.forEach=function(a,c){Dn(this),this.g.forEach(function(d,p){d.forEach(function(P){a.call(c,P,p,this)},this)},this)},t.na=function(){Dn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const P=a[p];for(let N=0;N<P.length;N++)d.push(c[p])}return d},t.V=function(a){Dn(this);let c=[];if(typeof a=="string")Vf(this,a)&&(c=c.concat(this.g.get(qr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Dn(this),this.i=null,a=qr(this,a),Vf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Of(a,c,d){Df(a,c),0<d.length&&(a.i=null,a.g.set(qr(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var P=N;j[p]!==""&&(P+="="+encodeURIComponent(String(j[p]))),a.push(P)}}return this.i=a.join("&")};function qr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function _w(a,c){c&&!a.j&&(Dn(a),a.i=null,a.g.forEach(function(d,p){var P=p.toLowerCase();p!=P&&(Df(this,p),Of(this,P,d))},a)),a.j=c}function ww(a,c){const d=new Xi;if(l.Image){const p=new Image;p.onload=R(Vn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=R(Vn,d,"TestLoadImage: error",!1,c,p),p.onabort=R(Vn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=R(Vn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Ew(a,c){const d=new Xi,p=new AbortController,P=setTimeout(()=>{p.abort(),Vn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(P),N.ok?Vn(d,"TestPingServer: ok",!0,c):Vn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Vn(d,"TestPingServer: error",!1,c)})}function Vn(a,c,d,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(d)}catch{}}function Tw(){this.g=new iw}function Iw(a,c,d){const p=d||"";try{Cf(a,function(P,N){let j=P;h(P)&&(j=ru(P)),c.push(p+N+"="+encodeURIComponent(j))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function Oo(a){this.l=a.Ub||null,this.j=a.eb||!1}x(Oo,iu),Oo.prototype.g=function(){return new Mo(this.l,this.j)},Oo.prototype.i=function(a){return function(){return a}}({});function Mo(a,c){Xe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Mo,Xe),t=Mo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ns(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ts(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ns(this)),this.g&&(this.readyState=3,ns(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ts(this):ns(this),this.readyState==3&&Mf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ts(this))},t.Qa=function(a){this.g&&(this.response=a,ts(this))},t.ga=function(){this.g&&ts(this)};function ts(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ns(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function ns(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Lf(a){let c="";return F(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function pu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Lf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ye(a,c,d))}function Re(a){Xe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Re,Xe);var Sw=/^https?$/i,Aw=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():au.g(),this.v=this.o?hf(this.o):hf(au),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){bf(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)d.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Aw,c,void 0))||p||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,j]of d)this.g.setRequestHeader(N,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){bf(this,N)}};function bf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Ff(a),Lo(a)}function Ff(a){a.A||(a.A=!0,lt(a,"complete"),lt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,lt(this,"complete"),lt(this,"abort"),Lo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Lo(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Uf(this):this.bb())},t.bb=function(){Uf(this)};function Uf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||cn(a)!=4||a.Z()!=2)){if(a.u&&cn(a)==4)af(a.Ea,0,a);else if(lt(a,"readystatechange"),cn(a)==4){a.h=!1;try{const j=a.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=j===0){var P=String(a.D).match(Pf)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!Sw.test(P?P.toLowerCase():"")}d=p}if(d)lt(a,"complete"),lt(a,"success");else{a.m=6;try{var N=2<cn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Ff(a)}}finally{Lo(a)}}}}function Lo(a,c){if(a.g){jf(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||lt(a,"ready");try{d.onreadystatechange=p}catch{}}}function jf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function cn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),rw(c)}};function zf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function kw(a){const c={};a=(a.g&&2<=cn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(w(a[p]))continue;var d=A(a[p]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[P]||[];c[P]=N,N.push(d)}v(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rs(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Bf(a){this.Aa=0,this.i=[],this.j=new Xi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rs("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rs("baseRetryDelayMs",5e3,a),this.cb=rs("retryDelaySeedMs",1e4,a),this.Wa=rs("forwardChannelMaxRetries",2,a),this.wa=rs("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new If(a&&a.concurrentRequestLimit),this.Da=new Tw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Bf.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){ut(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Yf(this,null,this.W),Fo(this)};function mu(a){if($f(a),a.G==3){var c=a.U++,d=un(a.I);if(ye(d,"SID",a.K),ye(d,"RID",c),ye(d,"TYPE","terminate"),is(a,d),c=new Nn(a,a.j,c),c.L=2,c.v=Vo(un(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=Jf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),xo(c)}Xf(a)}function bo(a){a.g&&(yu(a),a.g.cancel(),a.g=null)}function $f(a){bo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Uo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Fo(a){if(!Sf(a.h)&&!a.s){a.s=!0;var c=a.Ga;wt||Z(),B||(wt(),B=!0),K.add(c,a),a.B=0}}function Rw(a,c){return Af(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Qi(y(a.Ga,a,c),Qf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Nn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=m(N),T(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Wf(this,P,c),d=un(this.I),ye(d,"RID",a),ye(d,"CVER",22),this.D&&ye(d,"X-HTTP-Session-Id",this.D),is(this,d),N&&(this.O?c="headers="+encodeURIComponent(String(Lf(N)))+"&"+c:this.m&&pu(d,this.m,N)),fu(this.h,P),this.Ua&&ye(d,"TYPE","init"),this.P?(ye(d,"$req",c),ye(d,"SID","null"),P.T=!0,uu(P,d,null)):uu(P,d,c),this.G=2}}else this.G==3&&(a?Hf(this,a):this.i.length==0||Sf(this.h)||Hf(this))};function Hf(a,c){var d;c?d=c.l:d=a.U++;const p=un(a.I);ye(p,"SID",a.K),ye(p,"RID",d),ye(p,"AID",a.T),is(a,p),a.m&&a.o&&pu(p,a.m,a.o),d=new Nn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Wf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),fu(a.h,d),uu(d,p,c)}function is(a,c){a.H&&F(a.H,function(d,p){ye(c,p,d)}),a.l&&Cf({},function(d,p){ye(c,p,d)})}function Wf(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const j=["count="+d];N==-1?0<d?(N=P[0].g,j.push("ofs="+N)):N=0:j.push("ofs="+N);let de=!0;for(let Be=0;Be<d;Be++){let oe=P[Be].g;const Ye=P[Be].map;if(oe-=N,0>oe)N=Math.max(0,P[Be].g-100),de=!1;else try{Iw(Ye,j,"req"+oe+"_")}catch{p&&p(Ye)}}if(de){p=j.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function qf(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;wt||Z(),B||(wt(),B=!0),K.add(c,a),a.v=0}}function gu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Qi(y(a.Fa,a),Qf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Kf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Qi(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ut(10),bo(this),Kf(this))};function yu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Kf(a){a.g=new Nn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=un(a.qa);ye(c,"RID","rpc"),ye(c,"SID",a.K),ye(c,"AID",a.T),ye(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(c,"TO",a.ja),ye(c,"TYPE","xmlhttp"),is(a,c),a.m&&a.o&&pu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Vo(un(c)),d.m=null,d.P=!0,wf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,bo(this),gu(this),ut(19))};function Uo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Gf(a,c){var d=null;if(a.g==c){Uo(a),yu(a),a.g=null;var p=2}else if(du(a.h,c))d=c.D,kf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;p=Ro(),lt(p,new gf(p,d)),Fo(a)}else qf(a);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&Rw(a,c)||p==2&&gu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),P){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function Qf(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function yr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const P=!p;p=new gr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||No(p,"https"),Vo(p),P?ww(p.toString(),d):Ew(p.toString(),d)}else ut(2);a.G=0,a.l&&a.l.sa(c),Xf(a),$f(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Xf(a){if(a.G=0,a.ka=[],a.l){const c=Rf(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Yf(a,c,d){var p=d instanceof gr?un(d):new gr(d);if(p.g!="")c&&(p.g=c+"."+p.g),Do(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var N=new gr(null);p&&No(N,p),c&&(N.g=c),P&&Do(N,P),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&ye(p,d,c),ye(p,"VER",a.la),is(a,p),p}function Jf(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Re(new Oo({eb:d})):new Re(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zf(){}t=Zf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function jo(){}jo.prototype.g=function(a,c){return new Et(a,c)};function Et(a,c){Xe.call(this),this.g=new Bf(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Kr(this)}x(Et,Xe),Et.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Et.prototype.close=function(){mu(this.g)},Et.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ru(a),a=d);c.i.push(new cw(c.Ya++,a)),c.G==3&&Fo(c)},Et.prototype.N=function(){this.g.l=null,delete this.j,mu(this.g),delete this.g,Et.aa.N.call(this)};function ep(a){su.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}x(ep,su);function tp(){ou.call(this),this.status=1}x(tp,ou);function Kr(a){this.g=a}x(Kr,Zf),Kr.prototype.ua=function(){lt(this.g,"a")},Kr.prototype.ta=function(a){lt(this.g,new ep(a))},Kr.prototype.sa=function(a){lt(this.g,new tp)},Kr.prototype.ra=function(){lt(this.g,"b")},jo.prototype.createWebChannel=jo.prototype.g,Et.prototype.send=Et.prototype.o,Et.prototype.open=Et.prototype.m,Et.prototype.close=Et.prototype.close,L_=function(){return new jo},M_=function(){return Ro()},O_=pr,sh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Co.NO_ERROR=0,Co.TIMEOUT=8,Co.HTTP_ERROR=6,Ra=Co,yf.COMPLETE="complete",V_=yf,df.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",Xe.prototype.listen=Xe.prototype.K,vs=df,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,D_=Re}).apply(typeof oa<"u"?oa:typeof self<"u"?self:typeof window<"u"?window:{});const Um="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new pd("@firebase/firestore");function fs(){return br.logLevel}function H(t,...e){if(br.logLevel<=ne.DEBUG){const n=e.map(Rd);br.debug(`Firestore (${Bi}): ${t}`,...n)}}function Rn(t,...e){if(br.logLevel<=ne.ERROR){const n=e.map(Rd);br.error(`Firestore (${Bi}): ${t}`,...n)}}function xi(t,...e){if(br.logLevel<=ne.WARN){const n=e.map(Rd);br.warn(`Firestore (${Bi}): ${t}`,...n)}}function Rd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Bi}) INTERNAL ASSERTION FAILED: `+t;throw Rn(e),new Error(e)}function ce(t,e){t||Q()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class UA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jA{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ce(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new b_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new nt(e)}}class zA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class BA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new zA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $A{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ce(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.R=n.token,new $A(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=WA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function Ni(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new be(0,0))}static max(){return new Y(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return to.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof to?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Pe extends to{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Pe(n)}static emptyPath(){return new Pe([])}}const qA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends to{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return qA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(Pe.fromString(e))}static fromName(e){return new q(Pe.fromString(e).popFirst(5))}static empty(){return new q(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new Pe(e.slice()))}}function KA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new ar(i,q.empty(),e)}function GA(t){return new ar(t.readTime,t.key,-1)}class ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ar(Y.min(),q.empty(),-1)}static max(){return new ar(Y.max(),q.empty(),-1)}}function QA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==XA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function JA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Eo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Cd.oe=-1;function zl(t){return t==null}function hl(t){return t===0&&1/t==-1/0}function ZA(t){return typeof t=="number"&&Number.isInteger(t)&&!hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $i(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function U_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}}class aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zm(this.data.getIterator())}getIteratorFrom(e){return new zm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class zm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new Ke(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new j_("Invalid base64 string: "+s):s}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const ek=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=ek.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xd(t){const e=t.mapValue.fields.__previous_value__;return Pd(e)?xd(e):e}function no(t){const e=lr(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,n,r,i,s,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class ro{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ro("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la={mapValue:{}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pd(t)?4:rk(t)?9007199254740991:nk(t)?10:11:Q()}function on(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return no(t).isEqual(no(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=lr(i.timestampValue),l=lr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fr(i.bytesValue).isEqual(Fr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?hl(o)===hl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ni(t.arrayValue.values||[],e.arrayValue.values||[],on);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(jm(o)!==jm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!on(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function io(t,e){return(t.values||[]).find(n=>on(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Bm(t.timestampValue,e.timestampValue);case 4:return Bm(no(t),no(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Fr(s),u=Fr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ae(l[h],u[h]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(xe(s.latitude),xe(o.latitude));return l!==0?l:ae(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $m(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const g=s.fields||{},y=o.fields||{},R=(l=g.value)===null||l===void 0?void 0:l.arrayValue,x=(u=y.value)===null||u===void 0?void 0:u.arrayValue,D=ae(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:$m(R,x)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===la.mapValue&&o===la.mapValue)return 0;if(s===la.mapValue)return 1;if(o===la.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=ae(u[g],f[g]);if(y!==0)return y;const R=Di(l[u[g]],h[f[g]]);if(R!==0)return R}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function Bm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=lr(t),r=lr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function $m(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Di(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function Vi(t){return oh(t)}function oh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=oh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${oh(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function ah(t){return!!t&&"integerValue"in t}function Nd(t){return!!t&&"arrayValue"in t}function Hm(t){return!!t&&"nullValue"in t}function Wm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ca(t){return!!t&&"mapValue"in t}function nk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $i(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function rk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=We.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ds(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return on(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ca(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$i(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Dt(Ds(this.value))}}function z_(t){const e=[];return $i(t.fields,(n,r)=>{const i=new We([n]);if(Ca(r)){const s=z_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new it(e,0,Y.min(),Y.min(),Y.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,Y.min(),Y.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,Y.min(),Y.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n){this.position=e,this.inclusive=n}}function qm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Km(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!on(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,n="asc"){this.field=e,this.dir=n}}function ik(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{}class Me extends B_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ok(e,n,r):n==="array-contains"?new uk(e,r):n==="in"?new ck(e,r):n==="not-in"?new hk(e,r):n==="array-contains-any"?new dk(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ak(e,r):new lk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Di(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class an extends B_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new an(e,n)}matches(e){return $_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $_(t){return t.op==="and"}function H_(t){return sk(t)&&$_(t)}function sk(t){for(const e of t.filters)if(e instanceof an)return!1;return!0}function lh(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Vi(t.value);if(H_(t))return t.filters.map(e=>lh(e)).join(",");{const e=t.filters.map(n=>lh(n)).join(",");return`${t.op}(${e})`}}function W_(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&on(r.value,i.value)}(t,e):t instanceof an?function(r,i){return i instanceof an&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&W_(o,i.filters[l]),!0):!1}(t,e):void Q()}function q_(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Vi(n.value)}`}(t):t instanceof an?function(n){return n.op.toString()+" {"+n.getFilters().map(q_).join(" ,")+"}"}(t):"Filter"}class ok extends Me{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class ak extends Me{constructor(e,n){super(e,"in",n),this.keys=K_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class lk extends Me{constructor(e,n){super(e,"not-in",n),this.keys=K_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function K_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class uk extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nd(n)&&io(n.arrayValue,this.value)}}class ck extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&io(this.value.arrayValue,n)}}class hk extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!io(this.value.arrayValue,n)}}class dk extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>io(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Gm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fk(t,e,n,r,i,s,o)}function Dd(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vi(r)).join(",")),e.ue=n}return e.ue}function Vd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ik(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!W_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Km(t.startAt,e.startAt)&&Km(t.endAt,e.endAt)}function uh(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pk(t,e,n,r,i,s,o,l){return new Bl(t,e,n,r,i,s,o,l)}function Od(t){return new Bl(t)}function Qm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mk(t){return t.collectionGroup!==null}function Vs(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new fl(s,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new fl(We.keyField(),r))}return e.ce}function nn(t){const e=J(t);return e.le||(e.le=gk(e,Vs(t))),e.le}function gk(t,e){if(t.limitType==="F")return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fl(i.field,s)});const n=t.endAt?new dl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new dl(t.startAt.position,t.startAt.inclusive):null;return Gm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ch(t,e,n){return new Bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $l(t,e){return Vd(nn(t),nn(e))&&t.limitType===e.limitType}function G_(t){return`${Dd(nn(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>q_(i)).join(", ")}]`),zl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vi(i)).join(",")),`Target(${r})`}(nn(t))}; limitType=${t.limitType})`}function Hl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Vs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=qm(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Vs(r),i)||r.endAt&&!function(o,l,u){const h=qm(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Vs(r),i))}(t,e)}function yk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Q_(t){return(e,n)=>{let r=!1;for(const i of Vs(t)){const s=vk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function vk(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Di(u,h):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$i(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return U_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new ke(q.comparator);function Cn(){return _k}const X_=new ke(q.comparator);function _s(...t){let e=X_;for(const n of t)e=e.insert(n.key,n);return e}function Y_(t){let e=X_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return Os()}function J_(){return Os()}function Os(){return new Hi(t=>t.toString(),(t,e)=>t.isEqual(e))}const wk=new ke(q.comparator),Ek=new Ke(q.comparator);function te(...t){let e=Ek;for(const n of t)e=e.add(n);return e}const Tk=new Ke(ae);function Ik(){return Tk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hl(e)?"-0":e}}function Z_(t){return{integerValue:""+t}}function Sk(t,e){return ZA(e)?Z_(e):Md(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this._=void 0}}function Ak(t,e,n){return t instanceof pl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Pd(s)&&(s=xd(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof so?t0(t,e):t instanceof oo?n0(t,e):function(i,s){const o=e0(i,s),l=Xm(o)+Xm(i.Pe);return ah(o)&&ah(i.Pe)?Z_(l):Md(i.serializer,l)}(t,e)}function kk(t,e,n){return t instanceof so?t0(t,e):t instanceof oo?n0(t,e):n}function e0(t,e){return t instanceof ml?function(r){return ah(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class pl extends Wl{}class so extends Wl{constructor(e){super(),this.elements=e}}function t0(t,e){const n=r0(e);for(const r of t.elements)n.some(i=>on(i,r))||n.push(r);return{arrayValue:{values:n}}}class oo extends Wl{constructor(e){super(),this.elements=e}}function n0(t,e){let n=r0(e);for(const r of t.elements)n=n.filter(i=>!on(i,r));return{arrayValue:{values:n}}}class ml extends Wl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Xm(t){return xe(t.integerValue||t.doubleValue)}function r0(t){return Nd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Rk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof so&&i instanceof so||r instanceof oo&&i instanceof oo?Ni(r.elements,i.elements,on):r instanceof ml&&i instanceof ml?on(r.Pe,i.Pe):r instanceof pl&&i instanceof pl}(t.transform,e.transform)}class Ck{constructor(e,n){this.version=e,this.transformResults=n}}class wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wn}static exists(e){return new wn(void 0,e)}static updateTime(e){return new wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ql{}function i0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new o0(t.key,wn.none()):new To(t.key,t.data,wn.none());{const n=t.data,r=Dt.empty();let i=new Ke(We.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Br(t.key,r,new Ht(i.toArray()),wn.none())}}function Pk(t,e,n){t instanceof To?function(i,s,o){const l=i.value.clone(),u=Jm(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(i,s,o){if(!Pa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Jm(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(s0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ms(t,e,n,r){return t instanceof To?function(s,o,l,u){if(!Pa(s.precondition,o))return l;const h=s.value.clone(),f=Zm(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(s,o,l,u){if(!Pa(s.precondition,o))return l;const h=Zm(s.fieldTransforms,u,o),f=o.data;return f.setAll(s0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Pa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function xk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=e0(r.transform,i||null);s!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,s))}return n||null}function Ym(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ni(r,i,(s,o)=>Rk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class To extends ql{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Br extends ql{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function s0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jm(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,kk(o,l,n[i]))}return r}function Zm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Ak(s,o,e))}return r}class o0 extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nk extends ql{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Pk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ms(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ms(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=J_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=i0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(n,r)=>Ym(n,r))&&Ni(this.baseMutations,e.baseMutations,(n,r)=>Ym(n,r))}}class Ld{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=function(){return wk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ld(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ok{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,re;function Mk(t){switch(t){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function a0(t){if(t===void 0)return Rn("GRPC error has no .code"),L.UNKNOWN;switch(t){case De.OK:return L.OK;case De.CANCELLED:return L.CANCELLED;case De.UNKNOWN:return L.UNKNOWN;case De.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case De.INTERNAL:return L.INTERNAL;case De.UNAVAILABLE:return L.UNAVAILABLE;case De.UNAUTHENTICATED:return L.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case De.NOT_FOUND:return L.NOT_FOUND;case De.ALREADY_EXISTS:return L.ALREADY_EXISTS;case De.PERMISSION_DENIED:return L.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case De.ABORTED:return L.ABORTED;case De.OUT_OF_RANGE:return L.OUT_OF_RANGE;case De.UNIMPLEMENTED:return L.UNIMPLEMENTED;case De.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bk=new Cr([4294967295,4294967295],0);function eg(t){const e=Lk().encode(t),n=new N_;return n.update(e),new Uint8Array(n.digest())}function tg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Cr([n,r],0),new Cr([i,s],0)]}class bd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ws(`Invalid padding: ${n}`);if(r<0)throw new ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ws(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Cr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Cr.fromNumber(r)));return i.compare(bk)===1&&(i=new Cr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=eg(e),[r,i]=tg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new bd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=eg(e),[r,i]=tg(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Kl(Y.min(),i,new ke(ae),Cn(),te())}}class Io{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Io(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class l0{constructor(e,n){this.targetId=e,this.me=n}}class u0{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ng{constructor(){this.fe=0,this.ge=ig(),this.pe=Qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Io(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=ig()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Fk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cn(),this.qe=rg(),this.Qe=new ke(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(uh(s))if(r===0){const o=new q(s.path);this.Ue(n,o,it.newNoDocument(o,Y.min()))}else ce(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(u){if(u instanceof j_)return xi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new bd(o,i,s)}catch(u){return xi(u instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&uh(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,it.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Kl(e,n,this.Qe,this.ke,r);return this.ke=Cn(),this.qe=rg(),this.Qe=new ke(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ng,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ke(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ng),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function rg(){return new ke(q.comparator)}function ig(){return new ke(q.comparator)}const Uk={asc:"ASCENDING",desc:"DESCENDING"},jk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zk={and:"AND",or:"OR"};class Bk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hh(t,e){return t.useProto3Json||zl(e)?e:{value:e}}function gl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function c0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $k(t,e){return gl(t,e.toTimestamp())}function rn(t){return ce(!!t),Y.fromTimestamp(function(n){const r=lr(n);return new be(r.seconds,r.nanos)}(t))}function Fd(t,e){return dh(t,e).canonicalString()}function dh(t,e){const n=function(i){return new Pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function h0(t){const e=Pe.fromString(t);return ce(g0(e)),e}function fh(t,e){return Fd(t.databaseId,e.path)}function Ju(t,e){const n=h0(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(f0(n))}function d0(t,e){return Fd(t.databaseId,e)}function Hk(t){const e=h0(t);return e.length===4?Pe.emptyPath():f0(e)}function ph(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function f0(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sg(t,e,n){return{name:fh(t,e),fields:n.value.mapValue.fields}}function Wk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(ce(f===void 0||typeof f=="string"),Qe.fromBase64String(f||"")):(ce(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Qe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:a0(h.code);return new W(f,h.message||"")}(o);n=new u0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ju(t,r.document.name),s=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):Y.min(),l=new Dt({mapValue:{fields:r.document.fields}}),u=it.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new xa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ju(t,r.document),s=r.readTime?rn(r.readTime):Y.min(),o=it.newNoDocument(i,s),l=r.removedTargetIds||[];n=new xa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ju(t,r.document),s=r.removedTargetIds||[];n=new xa([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ok(i,s),l=r.targetId;n=new l0(l,o)}}return n}function qk(t,e){let n;if(e instanceof To)n={update:sg(t,e.key,e.value)};else if(e instanceof o0)n={delete:fh(t,e.key)};else if(e instanceof Br)n={update:sg(t,e.key,e.data),updateMask:tR(e.fieldMask)};else{if(!(e instanceof Nk))return Q();n={verify:fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof pl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof so)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ml)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$k(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function Kk(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?rn(i.updateTime):rn(s);return o.isEqual(Y.min())&&(o=rn(s)),new Ck(o,i.transformResults||[])}(n,e))):[]}function Gk(t,e){return{documents:[d0(t,e.path)]}}function Qk(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=d0(t,i);const s=function(h){if(h.length!==0)return m0(an.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Yr(y.field),direction:Jk(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:i}}function Xk(t){let e=Hk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=p0(g);return y instanceof an&&H_(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(x){return new fl(Jr(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,zl(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,R=g.values||[];return new dl(R,y)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const y=!g.before,R=g.values||[];return new dl(R,y)}(n.endAt)),pk(e,i,o,s,l,"F",u,h)}function Yk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function p0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jr(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jr(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Jr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return an.create(n.compositeFilter.filters.map(r=>p0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function Jk(t){return Uk[t]}function Zk(t){return jk[t]}function eR(t){return zk[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return We.fromServerFormat(t.fieldPath)}function m0(t){return t instanceof Me?function(n){if(n.op==="=="){if(Wm(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(Hm(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wm(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(Hm(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:Zk(n.op),value:n.value}}}(t):t instanceof an?function(n){const r=n.getFilters().map(i=>m0(i));return r.length===1?r[0]:{compositeFilter:{op:eR(n.op),filters:r}}}(t):Q()}function tR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function g0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e){this.ct=e}}function rR(t){const e=Xk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ch(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(){this.un=new sR}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(ar.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class sR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(Pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Oi(0)}static kn(){return new Oi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(){this.changes=new Hi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ms(r.mutation,i,Ht.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Ar();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=_s();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cn();const o=Os(),l=function(){return Os()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Br)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ms(f.mutation,h,f.mutation.getFieldMask(),be.now())):o.set(h.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new aR(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Os();let i=new ke((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ht.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=J_();f.forEach(y=>{if(!s.has(y)){const R=i0(n.get(y),r.get(y));R!==null&&g.set(y,R),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):mk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(Ar());let l=-1,u=s;return o.next(h=>M.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:Y_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=_s();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=_s();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(g,y){return new Bl(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,it.newInvalidDocument(f)))});let l=_s();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ms(f.mutation,h,Ht.empty(),be.now()),Hl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:rR(i.bundledQuery),readTime:rn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(){this.overlays=new ke(q.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=Ar(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ke((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Ar(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ar(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Vk(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.Tr=new Ke(Ue.Er),this.dr=new Ke(Ue.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ue(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ue(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new Pe([])),r=new Ue(n,e),i=new Ue(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new Pe([])),r=new Ue(n,e),i=new Ue(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ue(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ue{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ke(Ue.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Dk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new Ue(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ue(n,0),i=new Ue(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ae);return n.forEach(i=>{const s=new Ue(i,0),o=new Ue(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ue(new q(s),0);let l=new Ke(ae);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new Ue(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ue(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.Mr=e,this.docs=function(){return new ke(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||QA(GA(f),r)<=0||(i.has(f.key)||Hl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pR(this)}getSize(e){return M.resolve(this.size)}}class pR extends oR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.persistence=e,this.Nr=new Hi(n=>Dd(n),Vd),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ud,this.targetCount=0,this.kr=Oi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Oi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Cd(0),this.Kr=!1,this.Kr=!0,this.$r=new hR,this.referenceDelegate=e(this),this.Ur=new mR(this),this.indexManager=new iR,this.remoteDocumentCache=function(i){return new fR(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new nR(n),this.Gr=new uR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new dR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new yR(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class yR extends YA{constructor(e){super(),this.currentSequenceNumber=e}}class jd{constructor(e){this.persistence=e,this.Jr=new Ud,this.Yr=null}static Zr(e){return new jd(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return vI()?8:JA(ot())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new vR;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(fs()<=ne.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(fs()<=ne.DEBUG&&H("QueryEngine","Query:",Xr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(fs()<=ne.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nn(n))):M.resolve())}Yi(e,n){if(Qm(n))return M.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ch(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,ch(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Qm(n)||i.isEqual(Y.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(fs()<=ne.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xr(n)),this.rs(e,o,n,KA(i,-1)).next(l=>l))})}ts(e,n){let r=new Ke(Q_(e));return n.forEach((i,s)=>{Hl(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return fs()<=ne.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.Ji.getDocumentsMatchingQuery(e,n,ar.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ke(ae),this._s=new Hi(s=>Dd(s),Vd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ER(t,e,n,r){return new wR(t,e,n,r)}async function y0(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function TR(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,y=g.keys();let R=M.resolve();return y.forEach(x=>{R=R.next(()=>f.getEntry(u,x)).next(D=>{const O=h.docVersions.get(x);ce(O!==null),D.version.compareTo(O)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function v0(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function IR(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,g)));let R=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,r)),i=i.insert(g,R),function(D,O,I){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,R,f)&&l.push(n.Ur.updateTargetData(s,R))});let u=Cn(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(SR(s,o,e.documentUpdates).next(f=>{u=f.Ps,h=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(g=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.os=i,s))}function SR(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function AR(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function kR(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new Wn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function mh(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Eo(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function og(t,e,n){const r=J(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=J(u),y=g._s.get(f);return y!==void 0?M.resolve(g.os.get(y)):g.Ur.getTargetData(h,f)}(r,o,nn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:te())).next(l=>(RR(r,yk(e),l),{documents:l,Ts:s})))}function RR(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class ag{constructor(){this.activeTargetIds=Ik()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CR{constructor(){this.so=new ag,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua=null;function Zu(){return ua===null?ua=function(){return 268435456+Math.round(2147483648*Math.random())}():ua++,"0x"+ua.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class DR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Zu(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw xi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=xR[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Zu();return new Promise((o,l)=>{const u=new D_;u.setWithCredentials(!0),u.listenOnce(V_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ra.NO_ERROR:const f=u.getResponseJson();H(tt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Ra.TIMEOUT:H(tt,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ra.HTTP_ERROR:const g=u.getStatus();if(H(tt,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const R=y==null?void 0:y.error;if(R&&R.status&&R.message){const x=function(O){const I=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(I)>=0?I:L.UNKNOWN}(R.status);l(new W(x,R.message))}else l(new W(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{H(tt,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(tt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Zu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=L_(),l=M_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(tt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let y=!1,R=!1;const x=new NR({Io:O=>{R?H(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,O):(y||(H(tt,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),H(tt,`RPC '${e}' stream ${i} sending:`,O),g.send(O))},To:()=>g.close()}),D=(O,I,w)=>{O.listen(I,S=>{try{w(S)}catch(V){setTimeout(()=>{throw V},0)}})};return D(g,vs.EventType.OPEN,()=>{R||(H(tt,`RPC '${e}' stream ${i} transport opened.`),x.yo())}),D(g,vs.EventType.CLOSE,()=>{R||(R=!0,H(tt,`RPC '${e}' stream ${i} transport closed`),x.So())}),D(g,vs.EventType.ERROR,O=>{R||(R=!0,xi(tt,`RPC '${e}' stream ${i} transport errored:`,O),x.So(new W(L.UNAVAILABLE,"The operation could not be completed")))}),D(g,vs.EventType.MESSAGE,O=>{var I;if(!R){const w=O.data[0];ce(!!w);const S=w,V=S.error||((I=S[0])===null||I===void 0?void 0:I.error);if(V){H(tt,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let F=function(_){const T=De[_];if(T!==void 0)return a0(T)}(U),v=V.message;F===void 0&&(F=L.INTERNAL,v="Unknown error status: "+U+" with message "+V.message),R=!0,x.So(new W(F,v)),g.close()}else H(tt,`RPC '${e}' stream ${i} received:`,w),x.bo(w)}}),D(l,O_.STAT_EVENT,O=>{O.stat===sh.PROXY?H(tt,`RPC '${e}' stream ${i} detected buffering proxy`):O.stat===sh.NOPROXY&&H(tt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function ec(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(t){return new Bk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class VR extends w0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Wk(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?rn(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ph(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=uh(u)?{documents:Gk(s,u)}:{query:Qk(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=c0(s,o.resumeToken);const h=hh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=gl(s,o.snapshotVersion.toTimestamp());const h=hh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=Yk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ph(this.serializer),n.removeTarget=e,this.a_(n)}}class OR extends w0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ce(!!e.streamToken),this.lastStreamToken=e.streamToken,ce(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=Kk(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ph(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>qk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,dh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,dh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class LR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Rn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{$r(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=J(u);h.L_.add(4),await So(h),h.q_.set("Unknown"),h.L_.delete(4),await Ql(h)}(this))})}),this.q_=new LR(r,i)}}async function Ql(t){if($r(t))for(const e of t.B_)await e(!0)}async function So(t){for(const e of t.B_)await e(!1)}function E0(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Wd(n)?Hd(n):Wi(n).r_()&&$d(n,e))}function Bd(t,e){const n=J(t),r=Wi(n);n.N_.delete(e),r.r_()&&T0(n,e),n.N_.size===0&&(r.r_()?r.o_():$r(n)&&n.q_.set("Unknown"))}function $d(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Wi(t).A_(e)}function T0(t,e){t.Q_.xe(e),Wi(t).R_(e)}function Hd(t){t.Q_=new Fk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Wi(t).start(),t.q_.v_()}function Wd(t){return $r(t)&&!Wi(t).n_()&&t.N_.size>0}function $r(t){return J(t).L_.size===0}function I0(t){t.Q_=void 0}async function FR(t){t.q_.set("Online")}async function UR(t){t.N_.forEach((e,n)=>{$d(t,e)})}async function jR(t,e){I0(t),Wd(t)?(t.q_.M_(e),Hd(t)):t.q_.set("Unknown")}async function zR(t,e,n){if(t.q_.set("Online"),e instanceof u0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yl(t,r)}else if(e instanceof xa?t.Q_.Ke(e):e instanceof l0?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await v0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Qe.EMPTY_BYTE_STRING,f.snapshotVersion)),T0(s,u);const g=new Wn(f.target,u,h,f.sequenceNumber);$d(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await yl(t,r)}}async function yl(t,e,n){if(!Eo(e))throw e;t.L_.add(1),await So(t),t.q_.set("Offline"),n||(n=()=>v0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ql(t)})}function S0(t,e){return e().catch(n=>yl(t,n,e))}async function Xl(t){const e=J(t),n=ur(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;BR(e);)try{const i=await AR(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,$R(e,i)}catch(i){await yl(e,i)}A0(e)&&k0(e)}function BR(t){return $r(t)&&t.O_.length<10}function $R(t,e){t.O_.push(e);const n=ur(t);n.r_()&&n.V_&&n.m_(e.mutations)}function A0(t){return $r(t)&&!ur(t).n_()&&t.O_.length>0}function k0(t){ur(t).start()}async function HR(t){ur(t).p_()}async function WR(t){const e=ur(t);for(const n of t.O_)e.m_(n.mutations)}async function qR(t,e,n){const r=t.O_.shift(),i=Ld.from(r,e,n);await S0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Xl(t)}async function KR(t,e){e&&ur(t).V_&&await async function(r,i){if(function(o){return Mk(o)&&o!==L.ABORTED}(i.code)){const s=r.O_.shift();ur(r).s_(),await S0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Xl(r)}}(t,e),A0(t)&&k0(t)}async function ug(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=$r(n);n.L_.add(3),await So(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ql(n)}async function GR(t,e){const n=J(t);e?(n.L_.delete(2),await Ql(n)):e||(n.L_.add(2),await So(n),n.q_.set("Unknown"))}function Wi(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new VR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:FR.bind(null,t),Ro:UR.bind(null,t),mo:jR.bind(null,t),d_:zR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Wd(t)?Hd(t):t.q_.set("Unknown")):(await t.K_.stop(),I0(t))})),t.K_}function ur(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new OR(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:HR.bind(null,t),mo:KR.bind(null,t),f_:WR.bind(null,t),g_:qR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Xl(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new qd(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Kd(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),Eo(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=_s(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new wi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(){this.W_=new ke(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Mi(e,n,wi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$l(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class XR{constructor(){this.queries=hg(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=hg(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function hg(){return new Hi(t=>G_(t),$l)}async function YR(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new QR,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Kd(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Gd(n)}async function JR(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ZR(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Gd(n)}function eC(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Gd(t){t.Y_.forEach(e=>{e.next()})}var gh,dg;(dg=gh||(gh={})).ea="default",dg.Cache="cache";class tC{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==gh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(e){this.key=e}}class C0{constructor(e){this.key=e}}class nC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=Q_(e),this.Ra=new wi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new cg,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),R=Hl(this.query,g)?g:null,x=!!y&&this.mutatedKeys.has(y.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let O=!1;y&&R?y.data.isEqual(R.data)?x!==D&&(r.track({type:3,doc:R}),O=!0):this.ga(y,R)||(r.track({type:2,doc:R}),O=!0,(u&&this.Aa(R,u)>0||h&&this.Aa(R,h)<0)&&(l=!0)):!y&&R?(r.track({type:0,doc:R}),O=!0):y&&!R&&(r.track({type:1,doc:y}),O=!0,(u||h)&&(l=!0)),O&&(R?(o=o.add(R),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(R,x){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return D(R)-D(x)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Mi(this.query,e.Ra,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new cg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new C0(r))}),this.da.forEach(r=>{e.has(r)||n.push(new R0(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Mi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class rC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iC{constructor(e){this.key=e,this.va=!1}}class sC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Hi(l=>G_(l),$l),this.Ma=new Map,this.xa=new Set,this.Oa=new ke(q.comparator),this.Na=new Map,this.La=new Ud,this.Ba={},this.ka=new Map,this.qa=Oi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function oC(t,e,n=!0){const r=O0(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await P0(r,e,n,!0),i}async function aC(t,e){const n=O0(t);await P0(n,e,!0,!1)}async function P0(t,e,n,r){const i=await kR(t.localStore,nn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await lC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&E0(t.remoteStore,i),l}async function lC(t,e,n,r,i){t.Ka=(g,y,R)=>async function(D,O,I,w){let S=O.view.ma(I);S.ns&&(S=await og(D.localStore,O.query,!1).then(({documents:v})=>O.view.ma(v,S)));const V=w&&w.targetChanges.get(O.targetId),U=w&&w.targetMismatches.get(O.targetId)!=null,F=O.view.applyChanges(S,D.isPrimaryClient,V,U);return pg(D,O.targetId,F.wa),F.snapshot}(t,g,y,R);const s=await og(t.localStore,e,!0),o=new nC(e,s.Ts),l=o.ma(s.documents),u=Io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);pg(t,n,h.wa);const f=new rC(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function uC(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!$l(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bd(r.remoteStore,i.targetId),yh(r,i.targetId)}).catch(wo)):(yh(r,i.targetId),await mh(r.localStore,i.targetId,!0))}async function cC(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bd(n.remoteStore,r.targetId))}async function hC(t,e,n){const r=vC(t);try{const i=await function(o,l){const u=J(o),h=be.now(),f=l.reduce((R,x)=>R.add(x.key),te());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let x=Cn(),D=te();return u.cs.getEntries(R,f).next(O=>{x=O,x.forEach((I,w)=>{w.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,x)).next(O=>{g=O;const I=[];for(const w of l){const S=xk(w,g.get(w.key).overlayedDocument);S!=null&&I.push(new Br(w.key,S,z_(S.value.mapValue),wn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,h,I,l)}).next(O=>{y=O;const I=O.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(R,O.batchId,I)})}).then(()=>({batchId:y.batchId,changes:Y_(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new ke(ae)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ao(r,i.changes),await Xl(r.remoteStore)}catch(i){const s=Kd(i,"Failed to persist write");n.reject(s)}}async function x0(t,e){const n=J(t);try{const r=await IR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ce(o.va):i.removedDocuments.size>0&&(ce(o.va),o.va=!1))}),await Ao(n,r,e)}catch(r){await wo(r)}}function fg(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const y of g.j_)y.Z_(l)&&(h=!0)}),h&&Gd(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function dC(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ke(q.comparator);o=o.insert(s,it.newNoDocument(s,Y.min()));const l=te().add(s),u=new Kl(Y.min(),new Map,new ke(ae),o,l);await x0(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Qd(r)}else await mh(r.localStore,e,!1).then(()=>yh(r,e,n)).catch(wo)}async function fC(t,e){const n=J(t),r=e.batch.batchId;try{const i=await TR(n.localStore,e);D0(n,r,null),N0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ao(n,i)}catch(i){await wo(i)}}async function pC(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(ce(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);D0(r,e,n),N0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ao(r,i)}catch(i){await wo(i)}}function N0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function D0(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function yh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||V0(t,r)})}function V0(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Bd(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Qd(t))}function pg(t,e,n){for(const r of n)r instanceof R0?(t.La.addReference(r.key,e),mC(t,r)):r instanceof C0?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||V0(t,r.key)):Q()}function mC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Qd(t))}function Qd(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(Pe.fromString(e)),r=t.qa.next();t.Na.set(r,new iC(n)),t.Oa=t.Oa.insert(n,r),E0(t.remoteStore,new Wn(nn(Od(n.path)),r,"TargetPurposeLimboResolution",Cd.oe))}}async function Ao(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=zd.Wi(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,h){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>M.forEach(h,y=>M.forEach(y.$i,R=>f.persistence.referenceDelegate.addReference(g,y.targetId,R)).next(()=>M.forEach(y.Ui,R=>f.persistence.referenceDelegate.removeReference(g,y.targetId,R)))))}catch(g){if(!Eo(g))throw g;H("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const R=f.os.get(y),x=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(y,D)}}}(r.localStore,s))}async function gC(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await y0(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ao(n,r.hs)}}function yC(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function O0(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=x0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=dC.bind(null,e),e.Ca.d_=ZR.bind(null,e.eventManager),e.Ca.$a=eC.bind(null,e.eventManager),e}function vC(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pC.bind(null,e),e}class vl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return ER(this.persistence,new _R,e.initialUser,this.serializer)}Ga(e){return new gR(jd.Zr,this.serializer)}Wa(e){return new CR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vl.provider={build:()=>new vl};class vh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gC.bind(null,this.syncEngine),await GR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new XR}()}createDatastore(e){const n=Gl(e.databaseInfo.databaseId),r=function(s){return new DR(s)}(e.databaseInfo);return function(s,o,l,u){return new MR(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new bR(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>fg(this.syncEngine,n,0),function(){return lg.D()?new lg:new PR}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const g=new sC(i,s,o,l,u,h);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await So(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vh.provider={build:()=>new vh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=F_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Kd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await y0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EC(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ug(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ug(e.remoteStore,i)),t._onlineComponents=e}async function EC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;xi("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new vl)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await tc(t,new vl);return t._offlineComponents}async function M0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await mg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await mg(t,new vh))),t._onlineComponents}function TC(t){return M0(t).then(e=>e.syncEngine)}async function gg(t){const e=await M0(t),n=e.eventManager;return n.onListen=oC.bind(null,e.syncEngine),n.onUnlisten=uC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=aC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=cC.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SC(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vg(t){if(!q.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xd(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=L0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _g({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _g(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new FA;switch(r.type){case"firstParty":return new BA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yg.get(n);r&&(H("ComponentProvider","Removing Datastore"),yg.delete(n),r.terminate())}(this),Promise.resolve()}}function AC(t,e,n,r={}){var i;const s=(t=Ei(t,Yd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&xi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=nt.MOCK_USER;else{l=hI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new nt(h)}t._authCredentials=new UA(new b_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yl(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class ao extends Yl{constructor(e,n,r){super(e,n,Od(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new q(e))}withConverter(e){return new ao(this.firestore,e,this._path)}}function kC(t,e,...n){if(t=kt(t),arguments.length===1&&(e=F_.newId()),IC("doc","path",e),t instanceof Yd){const r=Pe.fromString(e,...n);return vg(r),new Mt(t,null,new q(r))}{if(!(t instanceof Mt||t instanceof ao))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return vg(r),new Mt(t.firestore,t instanceof ao?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _0(this,"async_queue_retry"),this.Vu=()=>{const r=ec();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Pr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Eo(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Rn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=qd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Eg(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class _l extends Yd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new wg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wg(e),this._firestoreClient=void 0,await e}}}function RC(t,e){const n=typeof t=="object"?t:Xv(),r=typeof t=="string"?t:"(default)",i=gd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uI("firestore");s&&AC(i,...s)}return i}function b0(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CC(t),t._firestoreClient}function CC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new tk(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,L0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new wC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Li(Qe.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Li(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=/^__.*__$/;class xC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new To(e,this.data,n,this.fieldTransforms)}}function U0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class tf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return wl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(U0(this.Cu)&&PC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class NC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gl(e)}Qu(e,n,r,i=!1){return new tf({Cu:e,methodName:n,qu:r,path:We.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function DC(t){const e=t._freezeSettings(),n=Gl(t._databaseId);return new NC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VC(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);$0("Data must be an object, but it was:",o,r);const l=z0(r,o);let u,h;if(s.merge)u=new Ht(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=OC(e,g,n);if(!o.contains(y))throw new W(L.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);LC(f,y)||f.push(y)}u=new Ht(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new xC(new Dt(l),u,h)}function j0(t,e){if(B0(t=kt(t)))return $0("Unsupported field value:",e,t),z0(t,e);if(t instanceof F0)return function(r,i){if(!U0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=j0(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Sk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:gl(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gl(i.serializer,s)}}if(r instanceof Zd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Li)return{bytesValue:c0(i.serializer,r._byteString)};if(r instanceof Mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Fd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ef)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Md(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Xd(r)}`)}(t,e)}function z0(t,e){const n={};return U_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$i(t,(r,i)=>{const s=j0(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function B0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Zd||t instanceof Li||t instanceof Mt||t instanceof F0||t instanceof ef)}function $0(t,e,n){if(!B0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xd(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function OC(t,e,n){if((e=kt(e))instanceof Jd)return e._internalPath;if(typeof e=="string")return H0(t,e);throw wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const MC=new RegExp("[~\\*/\\[\\]]");function H0(t,e,n){if(e.search(MC)>=0)throw wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jd(...e.split("."))._internalPath}catch{throw wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function LC(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(q0("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bC extends W0{data(){return super.data()}}function q0(t,e){return typeof e=="string"?H0(t,e):e instanceof Jd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class UC{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return $i(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>xe(o.doubleValue));return new ef(s)}convertGeoPoint(e){return new Zd(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=xd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(no(e));default:return null}}convertTimestamp(e){const n=lr(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);ce(g0(r));const i=new ro(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Rn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jC(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class K0 extends W0{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(q0("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Na extends K0{data(e={}){return super.data(e)}}class zC{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Es(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Na(this._firestore,this._userDataWriter,r.key,r,new Es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Na(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Es(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Na(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Es(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:BC(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function BC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class G0 extends UC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function Tg(t,e,n){t=Ei(t,Mt);const r=Ei(t.firestore,_l),i=jC(t.converter,e);return HC(r,[VC(DC(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wn.none())])}function $C(t,...e){var n,r,i;t=kt(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Eg(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Eg(e[o])){const g=e[o];e[o]=(n=g.next)===null||n===void 0?void 0:n.bind(g),e[o+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[o+2]=(i=g.complete)===null||i===void 0?void 0:i.bind(g)}let u,h,f;if(t instanceof Mt)h=Ei(t.firestore,_l),f=Od(t._key.path),u={next:g=>{e[o]&&e[o](WC(h,t,g))},error:e[o+1],complete:e[o+2]};else{const g=Ei(t,Yl);h=Ei(g.firestore,_l),f=g._query;const y=new G0(h);u={next:R=>{e[o]&&e[o](new zC(h,y,g,R))},error:e[o+1],complete:e[o+2]},FC(t._query)}return function(y,R,x,D){const O=new _C(D),I=new tC(R,O,x);return y.asyncQueue.enqueueAndForget(async()=>YR(await gg(y),I)),()=>{O.Za(),y.asyncQueue.enqueueAndForget(async()=>JR(await gg(y),I))}}(b0(h),f,l,u)}function HC(t,e){return function(r,i){const s=new Pr;return r.asyncQueue.enqueueAndForget(async()=>hC(await TC(r),i,s)),s.promise}(b0(t),e)}function WC(t,e,n){const r=n.docs.get(e._key),i=new G0(t);return new K0(t,i,e._key,r,new Es(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Bi=i})(ji),Pi(new Mr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new _l(new jA(r.getProvider("auth-internal")),new HA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ro(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),nr(Um,"4.7.3",e),nr(Um,"4.7.3","esm2017")})();/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q0=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var KC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GC=he.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>he.createElement("svg",{ref:u,...KC,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Q0("lucide",i),...l},[...o.map(([h,f])=>he.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=(t,e)=>{const n=he.forwardRef(({className:r,...i},s)=>he.createElement(GC,{ref:s,iconNode:e,className:Q0(`lucide-${qC(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=we("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=we("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YC=we("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=we("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=we("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eP=we("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tP=we("CloudOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nP=we("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rP=we("Coffee",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iP=we("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=we("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sP=we("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=we("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oP=we("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aP=we("PartyPopper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lP=we("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=we("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=we("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uP=we("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cP=we("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hP=we("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=we("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=we("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dP=we("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=we("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),fP={apiKey:"AIzaSyCJO2IQIVtUaM0NV0iltbeid8hFd6cbdnQ",authDomain:"vibetravel-39374.firebaseapp.com",projectId:"vibetravel-39374",storageBucket:"vibetravel-39374.firebasestorage.app",messagingSenderId:"408343885090",appId:"1:408343885090:web:80c286e2ef0c7832b5217b",measurementId:"G-ECPB0N84RJ"},J0=Qv(fP),ca=LA(J0),pP=RC(J0),mP=new fn,gP="my-vibe-trip-2026";class yP extends Hw.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("App Error:",e,n)}render(){var e;return this.state.hasError?k.jsxs("div",{className:"min-h-screen bg-black text-red-500 p-10 flex flex-col items-center justify-center text-center",children:[k.jsx(X0,{size:48,className:"mb-4"}),k.jsx("h1",{className:"text-2xl font-bold mb-2",children:"程式發生錯誤"}),k.jsx("p",{className:"text-gray-400 mb-4",children:"請嘗試重新整理，或檢查資料格式。"}),k.jsx("div",{className:"bg-gray-900 p-4 rounded text-left overflow-auto max-w-full mb-4",children:k.jsx("pre",{className:"text-xs",children:(e=this.state.error)==null?void 0:e.toString()})}),k.jsx("button",{onClick:()=>{localStorage.removeItem("vibetravel_last_trip_id"),window.location.href=window.location.pathname},className:"px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-500",children:"清除快取並重整"})]}):this.props.children}}const nc=()=>Math.random().toString(36).substr(2,9),vP=()=>{try{return new URLSearchParams(window.location.search).get("trip")||null}catch{return null}},_P=()=>{try{return localStorage.getItem("vibetravel_last_trip_id")}catch{return null}},Rg=t=>{try{localStorage.setItem("vibetravel_last_trip_id",t)}catch{}},_h=t=>{if(!t)return"";try{const e=new Date(t);if(isNaN(e.getTime()))return"";const r=(new Date-e)/1e3;return r<60?"剛剛":r<3600?`${Math.floor(r/60)} 分鐘前`:r<86400?`${Math.floor(r/3600)} 小時前`:`${e.getMonth()+1}/${e.getDate()} ${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")}`}catch{return""}},wP=(t,e)=>{try{const n=new Date(t);return n.setDate(n.getDate()+e),n}catch{return new Date}},EP=t=>`${t.getMonth()+1}/${t.getDate()}`,rc={title:"🇻🇳 峴港·會安 6日5夜之旅",subtitle:"2026/01/02 ~ 01/07 | 家族旅行",startDate:"2026-01-02",tags:["峴港 (美溪沙灘)","會安 (古鎮)","巴拿山"],flight:{outbound:{date:"1/2",code:"UO552",route:"HKG 08:25 → DAD 09:20"},inbound:{date:"1/7",code:"UO559",route:"DAD 18:30 → HKG 21:25"}},meta:{lastEditedBy:null,lastEditedPhoto:null,lastEditedAt:null},days:[{id:"day_1",dayNum:1,highlight:"粉紅教堂＋龍橋",weather:"🌤 26°C",activities:[{id:"d1_1",time:"08:25",title:"香港起飛",subtitle:"香港快運 UO552",type:"plane",location:"香港國際機場 T1",notes:"記得提早兩小時到機場"},{id:"d1_2",time:"09:20",title:"抵達峴港 & 接機",subtitle:"預約 Grab 或 包車",type:"car",location:"峴港國際機場 T2",notes:"司機會在出口舉牌"},{id:"d1_3",time:"12:00",title:"午餐：越式米線",subtitle:"Mì Quảng 1A",type:"food",location:"Mì Quảng 1A",notes:"必點招牌米線"},{id:"d1_4",time:"14:00",title:"飯店 Check-in",subtitle:"辦理入住手續",type:"stay",location:"美溪沙灘周邊飯店",notes:""},{id:"d1_5",time:"16:30",title:"粉紅教堂打卡",subtitle:"免費參觀",type:"camera",location:"Da Nang Cathedral",notes:"穿亮色衣服拍照更好看"},{id:"d1_6",time:"19:00",title:"晚餐：越式披薩",subtitle:"Pizza 4P's",type:"food",location:"Pizza 4P's",notes:"記得先訂位"},{id:"d1_7",time:"21:00",title:"龍橋噴火秀",subtitle:"週五限定活動",type:"sightseeing",location:"Dragon Bridge",notes:"最佳觀賞點在橋頭"}]},{id:"day_2",dayNum:2,highlight:"巴拿山一日遊",weather:"🌥 22°C",activities:[{id:"d2_1",time:"08:00",title:"出發前往巴拿山",subtitle:"車程約 40 分鐘",type:"car",location:"Ba Na Hills"},{id:"d2_2",time:"09:30",title:"黃金佛手橋",subtitle:"必拍打卡點",type:"camera",location:"Golden Bridge"},{id:"d2_3",time:"12:00",title:"山頂自助午餐",subtitle:"Beer Plaza",type:"food",location:"Beer Plaza"},{id:"d2_4",time:"14:00",title:"Fantasy Park",subtitle:"室內遊樂場",type:"sightseeing",location:"室內遊樂場"},{id:"d2_5",time:"16:30",title:"搭纜車下山",subtitle:"欣賞夕陽美景",type:"transport",location:""},{id:"d2_6",time:"19:00",title:"晚餐：越南煎餅",subtitle:"Bánh Xèo Bà Dưỡng",type:"food",location:"Bánh Xèo Bà Dưỡng"}]},{id:"day_3",dayNum:3,highlight:"會安古鎮燈籠夜",weather:"☀️ 28°C",activities:[]},{id:"day_4",dayNum:4,highlight:"美溪沙灘漫步",weather:"🌤 27°C",activities:[]},{id:"day_5",dayNum:5,highlight:"山茶半島巡禮",weather:"☁️ 25°C",activities:[]},{id:"day_6",dayNum:6,highlight:"返程香港",weather:"✈️",activities:[]}]},ic=t=>kC(pP,"artifacts",gP,"public","data","trips",`trip_${t}`),TP=({isOpen:t,onClose:e,onJoin:n})=>{const[r,i]=he.useState("");return t?k.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 z-50",children:k.jsxs("div",{className:"bg-[#1c1c1e] border border-gray-700 rounded-2xl w-full max-w-sm p-6 shadow-2xl animate-in fade-in zoom-in duration-200",children:[k.jsxs("div",{className:"flex justify-between items-center mb-4",children:[k.jsx("h3",{className:"text-lg font-bold text-white",children:"加入行程"}),k.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white",children:k.jsx(Y0,{size:20})})]}),k.jsxs("p",{className:"text-sm text-gray-400 mb-4",children:["請輸入朋友分享的 ",k.jsx("b",{className:"text-yellow-500",children:"Trip ID"})]}),k.jsx("input",{type:"text",value:r,onChange:s=>i(s.target.value.trim()),placeholder:"例如: x9s8d7f",className:"w-full bg-[#2c2c2e] text-white rounded-xl px-4 py-3 text-lg font-mono focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4"}),k.jsx("button",{onClick:()=>{r&&n(r)},disabled:!r,className:"w-full py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 disabled:opacity-50 transition-colors",children:"加入"})]})}):null},IP=({isOpen:t,onClose:e,onSave:n,onDelete:r,initialData:i,isEditMode:s})=>{const[o,l]=he.useState({time:"12:00",title:"",subtitle:"",location:"",notes:"",type:"sightseeing"});he.useEffect(()=>{t&&l(i||{time:"12:00",title:"",subtitle:"",location:"",notes:"",type:"sightseeing"})},[t,i]);const u=h=>{const{name:f,value:g}=h.target;l(y=>({...y,[f]:g}))};return t?k.jsx("div",{className:"fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 z-50",children:k.jsxs("div",{className:"bg-[#1c1c1e] border border-gray-700 rounded-2xl w-full max-w-md p-6 shadow-2xl animate-in fade-in zoom-in duration-200 max-h-[90vh] overflow-y-auto",children:[k.jsxs("div",{className:"flex justify-between items-center mb-6",children:[k.jsx("h3",{className:"text-lg font-bold text-white",children:s?"編輯活動":"新增活動"}),k.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white",children:k.jsx(Y0,{size:20})})]}),k.jsxs("div",{className:"space-y-5",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-xs text-gray-400 mb-1 font-bold",children:"活動性質"}),k.jsx("div",{className:"grid grid-cols-2 gap-2",children:k.jsxs("select",{name:"type",value:o.type,onChange:u,className:"col-span-2 w-full bg-[#2c2c2e] text-white rounded-xl px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none border-r-8 border-transparent cursor-pointer",children:[k.jsx("option",{value:"food",children:"🍽️ 美食 (餐廳/小吃)"}),k.jsx("option",{value:"sightseeing",children:"⭐️ 景點 (觀光/打卡)"}),k.jsx("option",{value:"stay",children:"🏨 住宿 (飯店/民宿)"}),k.jsx("option",{value:"transport",children:"🚗 交通 (包車/Grab)"}),k.jsx("option",{value:"event",children:"🎉 特別活動 (表演/展覽)"}),k.jsx("option",{value:"plane",children:"✈️ 飛機"}),k.jsx("option",{value:"coffee",children:"☕️ 咖啡/下午茶"})]})})]}),k.jsxs("div",{className:"flex gap-4",children:[k.jsxs("div",{className:"w-1/3",children:[k.jsx("label",{className:"block text-xs text-gray-400 mb-1 font-bold",children:"時間"}),k.jsx("input",{type:"time",name:"time",value:o.time,onChange:u,className:"w-full bg-[#2c2c2e] text-white rounded-xl px-3 py-3 text-lg font-mono focus:outline-none focus:ring-2 focus:ring-yellow-500"})]}),k.jsxs("div",{className:"flex-1",children:[k.jsx("label",{className:"block text-xs text-gray-400 mb-1 font-bold",children:"活動名稱 (必填)"}),k.jsx("input",{type:"text",name:"title",value:o.title,onChange:u,placeholder:"例如：午餐",className:"w-full bg-[#2c2c2e] text-white rounded-xl px-3 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"})]})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-xs text-gray-400 mb-1 font-bold",children:"活動內容 / 詳情"}),k.jsx("input",{type:"text",name:"subtitle",value:o.subtitle,onChange:u,placeholder:"例如：越式米線、參觀教堂...",className:"w-full bg-[#2c2c2e] text-white rounded-xl px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-xs text-gray-400 mb-1 font-bold",children:"地點 / 地址"}),k.jsxs("div",{className:"relative",children:[k.jsx("input",{type:"text",name:"location",value:o.location,onChange:u,placeholder:"輸入地點...",className:"w-full bg-[#2c2c2e] text-white rounded-xl px-3 py-3 pl-10 text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder-gray-600"}),k.jsx(Da,{size:18,className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"})]})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-xs text-gray-400 mb-1 font-bold",children:"備註"}),k.jsx("textarea",{name:"notes",value:o.notes,onChange:u,placeholder:"例如：記得訂位、門票費用...",rows:"3",className:"w-full bg-[#2c2c2e] text-white rounded-xl px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none placeholder-gray-600"})]}),(i==null?void 0:i.meta)&&k.jsxs("div",{className:"mt-6 pt-4 border-t border-gray-700/50 text-[10px] text-gray-500 space-y-1",children:[i.meta.createdBy&&k.jsxs("p",{children:["建立者: ",k.jsx("span",{className:"text-gray-400",children:i.meta.createdBy})," (",_h(i.meta.createdAt),")"]}),i.meta.lastEditedBy&&k.jsxs("p",{children:["最後編輯: ",k.jsx("span",{className:"text-yellow-500",children:i.meta.lastEditedBy})," (",_h(i.meta.lastEditedAt),")"]})]})]}),k.jsxs("div",{className:"flex gap-3 mt-6 pt-2",children:[s&&k.jsx("button",{onClick:()=>{window.confirm("確定要刪除此活動嗎？")&&r()},className:"px-4 py-3 rounded-xl border border-red-900/50 text-red-500 font-medium hover:bg-red-900/20 transition-colors",children:k.jsx(hP,{size:20})}),k.jsx("button",{onClick:()=>{o.title&&n(o)},disabled:!o.title,className:"flex-1 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 disabled:opacity-50 transition-colors shadow-lg shadow-yellow-500/20",children:s?"儲存修改":"確認新增"})]})]})}):null};function SP(){var Pt;const[t,e]=he.useState(null),[n,r]=he.useState(null),[i,s]=he.useState(!0),[o,l]=he.useState(null),[u,h]=he.useState(rc),[f,g]=he.useState("day_1"),[y,R]=he.useState(!1),[x,D]=he.useState(!1),[O,I]=he.useState(""),[w,S]=he.useState(!1),[V,U]=he.useState({isOpen:!1,mode:"add",initialData:null,activityId:null}),[F,v]=he.useState("idle"),[m,_]=he.useState(!1);he.useEffect(()=>{_(window.location.protocol==="blob:"||window.location.protocol==="file:")},[]),he.useEffect(()=>{const z=SS(ca,X=>{X?(e(X),s(!1)):vS(ca).catch(ge=>{console.error("Auto guest login failed",ge),s(!1)})});return()=>z()},[]);const T=async()=>{try{await WS(ca,mP)}catch(z){console.error("Login failed",z),l("登入失敗，請確認您已在 Firebase 開啟 Google Auth")}},A=async()=>{await AS(ca)},C=async(z,X=!1)=>{s(!0),r(z),l(null),Rg(z);const ge=`?trip=${z}`;try{window.history.pushState({path:ge},"",ge)}catch{}if(X){const fe=ic(z);try{const ie={...rc,meta:{lastEditedBy:(t==null?void 0:t.displayName)||"匿名用戶",lastEditedPhoto:t==null?void 0:t.photoURL,lastEditedAt:new Date().toISOString()}};await Tg(fe,ie),h(ie),g(rc.days[0].id)}catch(ie){console.error("Create trip failed",ie),l("建立失敗：請檢查資料庫權限")}s(!1)}};he.useEffect(()=>{if(!t)return;let z=n;if(!z){const fe=vP(),ie=_P();if(fe)z=fe,r(fe),Rg(fe);else if(ie){z=ie,r(ie);const pt=`?trip=${ie}`;try{window.history.pushState({path:pt},"",pt)}catch{}}else{const pt=nc();C(pt,!0);return}}const X=ic(z),ge=$C(X,fe=>{if(fe.exists()){const ie=fe.data();if(h(pt=>({...pt,...ie})),ie.days&&ie.days.length>0){const pt=ie.days.some(Hr=>Hr.id===f);(!f||!pt)&&g(ie.days[0].id)}v("saved")}s(!1)},fe=>{console.error("Snapshot error:",fe),l("讀取錯誤，請稍後再試"),s(!1),v("error")});return()=>ge()},[t,n]);const E=async z=>{if(t!=null&&t.isAnonymous){v("error"),I("訪客無法儲存，請先登入"),D(!0),setTimeout(()=>D(!1),3e3);return}const X={...z,meta:{lastEditedBy:t.displayName||"使用者",lastEditedPhoto:t.photoURL,lastEditedAt:new Date().toISOString()}};if(h(X),v("saving"),!n||!t){v("error");return}try{await Tg(ic(n),X),v("saved"),o&&l(null)}catch(ge){console.error("Save error:",ge),v("error")}},at=(z,X,ge)=>{const fe=u.days.map(ie=>ie.id!==z?ie:{...ie,[X]:ge});E({...u,days:fe})},ln=()=>{U({isOpen:!0,mode:"add",initialData:null,activityId:null})},fr=z=>{t!=null&&t.isAnonymous||U({isOpen:!0,mode:"edit",initialData:z,activityId:z.id})},wt=()=>{U({...V,isOpen:!1})},B=z=>{const X=u.days.map(ge=>{if(ge.id!==f)return ge;let fe;if(V.mode==="add"){const ie={id:nc(),...z,meta:{createdBy:t.displayName||"匿名",createdAt:new Date().toISOString(),lastEditedBy:t.displayName||"匿名",lastEditedAt:new Date().toISOString(),lastEditedPhoto:t.photoURL}};fe=[...ge.activities,ie]}else fe=ge.activities.map(ie=>ie.id===V.activityId?{...ie,...z,meta:{...ie.meta,lastEditedBy:t.displayName||"匿名",lastEditedAt:new Date().toISOString(),lastEditedPhoto:t.photoURL}}:ie);return fe.sort((ie,pt)=>ie.time.localeCompare(pt.time)),{...ge,activities:fe}});E({...u,days:X}),wt()},K=()=>{if(V.mode==="edit"){const z=u.days.map(X=>X.id!==f?X:{...X,activities:X.activities.filter(ge=>ge.id!==V.activityId)});E({...u,days:z}),wt()}},Z=()=>{const z=u.days.length+1,X={id:nc(),dayNum:z,highlight:"新行程",weather:"🌤",activities:[]};E({...u,days:[...u.days,X]}),g(X.id)},me=()=>{if(u.days.length<=1||!window.confirm("確定要刪除最後一天的行程嗎？"))return;const z=[...u.days];z.pop();let X=f;f===u.days[u.days.length-1].id&&(X=z[z.length-1].id),E({...u,days:z}),g(X)},le=()=>{let z=m?n:`${window.location.origin}${window.location.pathname}?trip=${n}`;navigator.clipboard.writeText(z),I("已複製連結"),D(!0),setTimeout(()=>D(!1),3e3)},Te=z=>{const X={size:16,strokeWidth:2.5};switch(z){case"food":return k.jsx(dP,{...X,className:"text-orange-500"});case"transport":return k.jsx(ZC,{...X,className:"text-blue-400"});case"plane":return k.jsx(lP,{...X,className:"text-blue-400"});case"car":return k.jsx(YC,{...X,className:"text-blue-400"});case"stay":return k.jsx(QC,{...X,className:"text-indigo-400"});case"camera":return k.jsx(XC,{...X,className:"text-green-500"});case"coffee":return k.jsx(rP,{...X,className:"text-amber-500"});case"sightseeing":return k.jsx(cP,{...X,className:"text-yellow-500"});case"event":return k.jsx(aP,{...X,className:"text-pink-500"});case"boat":return k.jsx(Da,{...X,className:"text-teal-400"});default:return k.jsx(Da,{...X,className:"text-gray-400"})}},Ft=z=>{switch(z){case"food":return"bg-orange-500/10 border-orange-500/30";case"plane":case"car":case"transport":return"bg-blue-500/10 border-blue-500/30";case"stay":return"bg-indigo-500/10 border-indigo-500/30";case"camera":return"bg-green-500/10 border-green-500/30";case"coffee":return"bg-amber-500/10 border-amber-500/30";case"sightseeing":return"bg-yellow-500/10 border-yellow-500/30";case"event":return"bg-pink-500/10 border-pink-500/30";default:return"bg-gray-700/30 border-gray-600"}};if(i)return k.jsx("div",{className:"flex h-screen items-center justify-center bg-[#101010] text-yellow-500",children:k.jsx(Ag,{size:32,className:"animate-spin"})});if(!t)return k.jsx("div",{className:"flex h-screen items-center justify-center bg-[#101010]"});const Fe=(u.days||[]).find(z=>z.id===f)||(u.days||[])[0];return k.jsxs("div",{className:"min-h-screen bg-[#101010] text-gray-200 font-sans pb-20 selection:bg-yellow-500/30",children:[k.jsx(TP,{isOpen:w,onClose:()=>S(!1),onJoin:z=>{S(!1),C(z,!1)}}),k.jsx(QrModal,{isOpen:showQrModal,onClose:()=>setShowQrModal(!1),tripId:n,isBlobEnv:m}),k.jsx(IP,{isOpen:V.isOpen,onClose:wt,onSave:B,onDelete:K,initialData:V.initialData,isEditMode:V.mode==="edit"}),k.jsxs("div",{className:"bg-gray-900 px-4 py-2 flex justify-between items-center border-b border-gray-800",children:[k.jsx("div",{className:"flex items-center gap-2 text-xs text-gray-400",children:(Pt=u.meta)!=null&&Pt.lastEditedBy?k.jsxs(k.Fragment,{children:[k.jsx("span",{children:"最後修改:"}),u.meta.lastEditedPhoto?k.jsx("img",{src:u.meta.lastEditedPhoto,className:"w-4 h-4 rounded-full",alt:""}):k.jsx(kg,{size:14}),k.jsx("span",{className:"text-yellow-500",children:u.meta.lastEditedBy}),k.jsxs("span",{children:["• ",_h(u.meta.lastEditedAt)]})]}):k.jsx("span",{children:"新行程"})}),k.jsx("div",{className:"flex items-center gap-3",children:t!=null&&t.isAnonymous?k.jsxs("button",{onClick:T,className:"flex items-center gap-2 bg-yellow-500 text-black px-3 py-1.5 rounded-full text-xs font-bold hover:bg-yellow-400 transition-colors shadow-[0_0_10px_rgba(234,179,8,0.3)] animate-pulse",children:[k.jsx(Ig,{size:14})," 登入 Google 以編輯"]}):k.jsxs(k.Fragment,{children:[k.jsxs("div",{className:"flex items-center gap-2 bg-gray-800 rounded-full px-2 py-1 pr-3",children:[t.photoURL?k.jsx("img",{src:t.photoURL,alt:t.displayName,className:"w-5 h-5 rounded-full"}):k.jsx(kg,{size:16,className:"text-gray-400"}),k.jsx("span",{className:"text-xs font-bold text-gray-300",children:t.displayName})]}),k.jsx("button",{onClick:A,title:"登出",className:"text-gray-500 hover:text-white",children:k.jsx(sP,{size:16})})]})})]}),k.jsxs("div",{className:"relative bg-[#101010]",children:[k.jsxs("div",{className:"absolute inset-0 z-0",children:[k.jsx("img",{src:"https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=2000&auto=format&fit=crop",alt:"Da Nang",className:"w-full h-full object-cover opacity-40"}),k.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#101010]/20 via-[#101010]/90 to-[#101010]"})]}),k.jsx("div",{className:"relative z-10 px-5 pt-10 pb-2",children:k.jsxs("div",{className:"max-w-md mx-auto",children:[k.jsxs("div",{className:"flex justify-between items-start mb-2",children:[k.jsxs("div",{children:[k.jsx("input",{className:"text-2xl font-bold text-yellow-500 w-full bg-transparent outline-none placeholder-yellow-800 disabled:opacity-80 disabled:cursor-not-allowed drop-shadow-lg",value:u.title,onChange:z=>E({...u,title:z.target.value}),disabled:t==null?void 0:t.isAnonymous}),k.jsx("input",{className:"text-xs text-gray-300 mt-1 w-full bg-transparent outline-none disabled:opacity-80 disabled:cursor-not-allowed drop-shadow-md",value:u.subtitle||"",placeholder:"日期 | 天數 | 旅行人數",onChange:z=>E({...u,subtitle:z.target.value}),disabled:t==null?void 0:t.isAnonymous})]}),k.jsxs("div",{className:"flex gap-3",children:[k.jsx("button",{onClick:()=>S(!0),title:"加入行程",children:k.jsx(Ig,{size:20,className:"text-gray-300 hover:text-white drop-shadow-md"})}),k.jsx("button",{onClick:le,title:"複製連結",children:k.jsx(uP,{size:20,className:"text-yellow-500 hover:text-yellow-400 drop-shadow-md"})})]})]}),k.jsxs("div",{className:"absolute top-4 right-4 flex items-center gap-1 text-xs",children:[F==="saving"&&k.jsxs("span",{className:"text-yellow-500 flex items-center animate-pulse",children:[k.jsx(Ag,{size:12,className:"mr-1"})," 儲存中..."]}),F==="saved"&&k.jsxs("span",{className:"text-green-500 flex items-center",children:[k.jsx(nP,{size:12,className:"mr-1"})," 已同步"]}),F==="error"&&k.jsxs("span",{className:"text-red-500 flex items-center",children:[k.jsx(tP,{size:12,className:"mr-1"})," ",t!=null&&t.isAnonymous?"訪客模式":"未同步"]})]}),k.jsxs("div",{className:"bg-[#1c1c1e]/80 backdrop-blur-sm rounded-xl p-4 mb-4 border border-gray-700 flex items-center relative overflow-hidden group shadow-lg",children:[k.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-yellow-500"}),k.jsxs("div",{className:"flex-1 flex items-center justify-between pl-3",children:[k.jsxs("div",{children:[k.jsx("div",{className:"text-xs text-gray-400 mb-1",children:"當日重點行程"}),k.jsx("input",{className:"text-lg font-bold text-white bg-transparent outline-none placeholder-gray-600 w-full",value:Fe.highlight||"",placeholder:"輸入重點 (8字內)",maxLength:8,onChange:z=>at(f,"highlight",z.target.value),disabled:t==null?void 0:t.isAnonymous})]}),k.jsxs("div",{className:"text-right border-l border-gray-600 pl-4 ml-4",children:[k.jsx("div",{className:"text-xs text-gray-400 mb-1",children:"天氣"}),k.jsx("input",{className:"text-lg font-bold text-yellow-400 bg-transparent outline-none placeholder-gray-600 w-20 text-right",value:Fe.weather||"",placeholder:"🌤 28°C",onChange:z=>at(f,"weather",z.target.value),disabled:t==null?void 0:t.isAnonymous})]})]})]}),k.jsxs("div",{className:"flex items-center overflow-x-auto no-scrollbar border-b border-gray-800",children:[k.jsx("div",{className:"flex",children:(u.days||[]).map((z,X)=>{const ge=Fe&&Fe.id===z.id,fe=wP(u.startDate,X);return k.jsxs("button",{onClick:()=>g(z.id),className:`flex-shrink-0 px-4 py-3 flex flex-col items-center justify-center transition-all border-b-2 relative ${ge?"text-yellow-500 border-yellow-500":"text-gray-500 border-transparent hover:text-gray-300"}`,children:[k.jsxs("span",{className:`text-lg font-bold ${ge?"text-yellow-400":"text-gray-400"}`,children:["Day ",X+1]}),k.jsx("span",{className:"text-[10px] opacity-60 uppercase tracking-wide",children:EP(fe)})]},z.id)})}),!(t!=null&&t.isAnonymous)&&k.jsxs("div",{className:"flex items-center pl-2 border-l border-gray-800 ml-2",children:[k.jsx("button",{onClick:Z,className:"px-3 py-2 text-gray-500 hover:text-yellow-500",children:k.jsx(Sg,{size:18})}),k.jsx("button",{onClick:me,className:"px-3 py-2 text-gray-600 hover:text-red-500",children:k.jsx(oP,{size:18})})]})]})]})})]}),o&&k.jsxs("div",{className:"bg-red-900/90 text-white px-4 py-3 text-sm flex items-center justify-center gap-2 border-b border-red-500 sticky top-0 z-50 animate-pulse",children:[k.jsx(X0,{size:16,className:"text-yellow-300"}),k.jsx("span",{children:o})]}),k.jsx("div",{className:"max-w-md mx-auto px-5 py-4",children:k.jsxs("div",{className:"space-y-0 relative",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-4 text-gray-400 text-sm",children:[k.jsx(eP,{size:16})," ",k.jsx("span",{children:"每日行程時間軸"})]}),Fe&&(Fe.activities||[]).map((z,X)=>k.jsxs("div",{onClick:()=>fr(z),className:`relative pl-0 group flex ${t!=null&&t.isAnonymous?"":"cursor-pointer hover:bg-white/5 rounded-lg transition-colors"}`,children:[k.jsx("div",{className:"w-20 pt-1 pr-2 flex-shrink-0 text-right",children:k.jsx("div",{className:"text-sm font-bold text-gray-300 font-mono",children:z.time})}),k.jsxs("div",{className:"relative flex flex-col items-center mr-4",children:[k.jsx("div",{className:`absolute w-[2px] bg-[#333] ${X===0?"top-3 h-[calc(100%-12px)]":"h-full"} ${X===Fe.activities.length-1?"h-4":""}`}),k.jsx("div",{className:`relative z-10 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 ${Ft(z.type)}`,children:Te(z.type)})]}),k.jsx("div",{className:"flex-1 pb-8 min-w-0 pt-1",children:k.jsxs("div",{children:[k.jsx("div",{className:"text-base font-bold text-gray-200",children:z.title}),k.jsxs("div",{className:"flex flex-col mt-1 gap-1",children:[z.subtitle&&k.jsx("div",{className:"text-sm text-gray-400",children:z.subtitle}),z.location&&k.jsxs("div",{className:"flex items-center gap-1 text-xs text-gray-500",children:[k.jsx(Da,{size:12}),k.jsx("a",{href:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(z.location)}`,target:"_blank",rel:"noopener noreferrer",onClick:ge=>ge.stopPropagation(),className:"hover:text-yellow-500 underline decoration-dotted",children:z.location})]}),z.notes&&k.jsxs("div",{className:"flex items-start gap-1 mt-1 bg-gray-800/50 p-2 rounded-lg border border-gray-700/50",children:[k.jsx(iP,{size:12,className:"text-gray-500 mt-0.5 flex-shrink-0"}),k.jsx("div",{className:"text-xs text-gray-400 leading-relaxed whitespace-pre-wrap",children:z.notes})]})]})]})})]},z.id)),Fe&&k.jsxs("div",{className:"pl-14 flex items-center gap-4",children:[k.jsx("div",{className:"w-8 flex justify-center",children:k.jsx("div",{className:"w-[2px] h-4 bg-[#333]"})}),!(t!=null&&t.isAnonymous)&&k.jsxs("button",{onClick:ln,className:"flex items-center gap-2 text-gray-500 hover:text-yellow-500 text-sm py-2",children:[k.jsx("div",{className:"w-6 h-6 rounded-full border border-dashed border-gray-600 flex items-center justify-center",children:k.jsx(Sg,{size:14})}),"新增行程"]})]})]})}),k.jsxs("div",{className:`fixed bottom-6 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 transition-all ${x?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"}`,children:[k.jsx(JC,{size:16})," ",O]})]})}function AP(){return k.jsx(yP,{children:k.jsx(SP,{})})}jv(document.getElementById("root")).render(k.jsx(he.StrictMode,{children:k.jsx(AP,{})}));
