function Eg(t,e){for(var r=0;r<e.length;r++){const o=e[r];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in t)){const a=Object.getOwnPropertyDescriptor(o,l);a&&Object.defineProperty(t,l,a.get?a:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(l){if(l.ep)return;l.ep=!0;const a=r(l);fetch(l.href,a)}})();var Xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var wy={exports:{}},fa={},Py={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),Ig=Symbol.for("react.portal"),kg=Symbol.for("react.fragment"),Ng=Symbol.for("react.strict_mode"),Cg=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ag=Symbol.for("react.context"),Rg=Symbol.for("react.forward_ref"),Lg=Symbol.for("react.suspense"),Dg=Symbol.for("react.memo"),Fg=Symbol.for("react.lazy"),$u=Symbol.iterator;function Mg(t){return t===null||typeof t!="object"?null:(t=$u&&t[$u]||t["@@iterator"],typeof t=="function"?t:null)}var Sy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_y=Object.assign,Ey={};function so(t,e,r){this.props=t,this.context=e,this.refs=Ey,this.updater=r||Sy}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Iy(){}Iy.prototype=so.prototype;function Os(t,e,r){this.props=t,this.context=e,this.refs=Ey,this.updater=r||Sy}var hs=Os.prototype=new Iy;hs.constructor=Os;_y(hs,so.prototype);hs.isPureReactComponent=!0;var Bu=Array.isArray,ky=Object.prototype.hasOwnProperty,bs={current:null},Ny={key:!0,ref:!0,__self:!0,__source:!0};function Cy(t,e,r){var o,l={},a=null,c=null;if(e!=null)for(o in e.ref!==void 0&&(c=e.ref),e.key!==void 0&&(a=""+e.key),e)ky.call(e,o)&&!Ny.hasOwnProperty(o)&&(l[o]=e[o]);var f=arguments.length-2;if(f===1)l.children=r;else if(1<f){for(var u=Array(f),p=0;p<f;p++)u[p]=arguments[p+2];l.children=u}if(t&&t.defaultProps)for(o in f=t.defaultProps,f)l[o]===void 0&&(l[o]=f[o]);return{$$typeof:vl,type:t,key:a,ref:c,props:l,_owner:bs.current}}function $g(t,e){return{$$typeof:vl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ms(t){return typeof t=="object"&&t!==null&&t.$$typeof===vl}function Bg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var zu=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bg(""+t.key):e.toString(36)}function li(t,e,r,o,l){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var c=!1;if(t===null)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case vl:case Ig:c=!0}}if(c)return c=t,l=l(c),t=o===""?"."+xc(c,0):o,Bu(l)?(r="",t!=null&&(r=t.replace(zu,"$&/")+"/"),li(l,e,r,"",function(p){return p})):l!=null&&(ms(l)&&(l=$g(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(zu,"$&/")+"/")+t)),e.push(l)),1;if(c=0,o=o===""?".":o+":",Bu(t))for(var f=0;f<t.length;f++){a=t[f];var u=o+xc(a,f);c+=li(a,e,r,u,l)}else if(u=Mg(t),typeof u=="function")for(t=u.call(t),f=0;!(a=t.next()).done;)a=a.value,u=o+xc(a,f++),c+=li(a,e,r,u,l);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return c}function Ll(t,e,r){if(t==null)return t;var o=[],l=0;return li(t,o,"","",function(a){return e.call(r,a,l++)}),o}function zg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ot={current:null},ii={transition:null},Ug={ReactCurrentDispatcher:Ot,ReactCurrentBatchConfig:ii,ReactCurrentOwner:bs};ge.Children={map:Ll,forEach:function(t,e,r){Ll(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ll(t,function(){e++}),e},toArray:function(t){return Ll(t,function(e){return e})||[]},only:function(t){if(!ms(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ge.Component=so;ge.Fragment=kg;ge.Profiler=Cg;ge.PureComponent=Os;ge.StrictMode=Ng;ge.Suspense=Lg;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ug;ge.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=_y({},t.props),l=t.key,a=t.ref,c=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,c=bs.current),e.key!==void 0&&(l=""+e.key),t.type&&t.type.defaultProps)var f=t.type.defaultProps;for(u in e)ky.call(e,u)&&!Ny.hasOwnProperty(u)&&(o[u]=e[u]===void 0&&f!==void 0?f[u]:e[u])}var u=arguments.length-2;if(u===1)o.children=r;else if(1<u){f=Array(u);for(var p=0;p<u;p++)f[p]=arguments[p+2];o.children=f}return{$$typeof:vl,type:t.type,key:l,ref:a,props:o,_owner:c}};ge.createContext=function(t){return t={$$typeof:Ag,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Tg,_context:t},t.Consumer=t};ge.createElement=Cy;ge.createFactory=function(t){var e=Cy.bind(null,t);return e.type=t,e};ge.createRef=function(){return{current:null}};ge.forwardRef=function(t){return{$$typeof:Rg,render:t}};ge.isValidElement=ms;ge.lazy=function(t){return{$$typeof:Fg,_payload:{_status:-1,_result:t},_init:zg}};ge.memo=function(t,e){return{$$typeof:Dg,type:t,compare:e===void 0?null:e}};ge.startTransition=function(t){var e=ii.transition;ii.transition={};try{t()}finally{ii.transition=e}};ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ge.useCallback=function(t,e){return Ot.current.useCallback(t,e)};ge.useContext=function(t){return Ot.current.useContext(t)};ge.useDebugValue=function(){};ge.useDeferredValue=function(t){return Ot.current.useDeferredValue(t)};ge.useEffect=function(t,e){return Ot.current.useEffect(t,e)};ge.useId=function(){return Ot.current.useId()};ge.useImperativeHandle=function(t,e,r){return Ot.current.useImperativeHandle(t,e,r)};ge.useInsertionEffect=function(t,e){return Ot.current.useInsertionEffect(t,e)};ge.useLayoutEffect=function(t,e){return Ot.current.useLayoutEffect(t,e)};ge.useMemo=function(t,e){return Ot.current.useMemo(t,e)};ge.useReducer=function(t,e,r){return Ot.current.useReducer(t,e,r)};ge.useRef=function(t){return Ot.current.useRef(t)};ge.useState=function(t){return Ot.current.useState(t)};ge.useSyncExternalStore=function(t,e,r){return Ot.current.useSyncExternalStore(t,e,r)};ge.useTransition=function(){return Ot.current.useTransition()};ge.version="18.2.0";Py.exports=ge;var H=Py.exports;const Gn=vy(H),Hg=Eg({__proto__:null,default:Gn},[H]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg=H,Wg=Symbol.for("react.element"),Vg=Symbol.for("react.fragment"),Gg=Object.prototype.hasOwnProperty,Xg=qg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jg={key:!0,ref:!0,__self:!0,__source:!0};function Ty(t,e,r){var o,l={},a=null,c=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(o in e)Gg.call(e,o)&&!Jg.hasOwnProperty(o)&&(l[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)l[o]===void 0&&(l[o]=e[o]);return{$$typeof:Wg,type:t,key:a,ref:c,props:l,_owner:Xg.current}}fa.Fragment=Vg;fa.jsx=Ty;fa.jsxs=Ty;wy.exports=fa;var n=wy.exports,Ay={exports:{}},Ct={},Ry={exports:{}},Ly={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Y){var Q=z.length;z.push(Y);e:for(;0<Q;){var fe=Q-1>>>1,Oe=z[fe];if(0<l(Oe,Y))z[fe]=Y,z[Q]=Oe,Q=fe;else break e}}function r(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var Y=z[0],Q=z.pop();if(Q!==Y){z[0]=Q;e:for(var fe=0,Oe=z.length,Re=Oe>>>1;fe<Re;){var ke=2*(fe+1)-1,D=z[ke],U=ke+1,C=z[U];if(0>l(D,Q))U<Oe&&0>l(C,D)?(z[fe]=C,z[U]=Q,fe=U):(z[fe]=D,z[ke]=Q,fe=ke);else if(U<Oe&&0>l(C,Q))z[fe]=C,z[U]=Q,fe=U;else break e}}return Y}function l(z,Y){var Q=z.sortIndex-Y.sortIndex;return Q!==0?Q:z.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();t.unstable_now=function(){return c.now()-f}}var u=[],p=[],y=1,d=null,O=3,S=!1,j=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(z){for(var Y=r(p);Y!==null;){if(Y.callback===null)o(p);else if(Y.startTime<=z)o(p),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=r(p)}}function v(z){if(x=!1,b(z),!j)if(r(u)!==null)j=!0,Pe(E);else{var Y=r(p);Y!==null&&_e(v,Y.startTime-z)}}function E(z,Y){j=!1,x&&(x=!1,m(T),T=-1),S=!0;var Q=O;try{for(b(Y),d=r(u);d!==null&&(!(d.expirationTime>Y)||z&&!W());){var fe=d.callback;if(typeof fe=="function"){d.callback=null,O=d.priorityLevel;var Oe=fe(d.expirationTime<=Y);Y=t.unstable_now(),typeof Oe=="function"?d.callback=Oe:d===r(u)&&o(u),b(Y)}else o(u);d=r(u)}if(d!==null)var Re=!0;else{var ke=r(p);ke!==null&&_e(v,ke.startTime-Y),Re=!1}return Re}finally{d=null,O=Q,S=!1}}var N=!1,_=null,T=-1,$=5,R=-1;function W(){return!(t.unstable_now()-R<$)}function X(){if(_!==null){var z=t.unstable_now();R=z;var Y=!0;try{Y=_(!0,z)}finally{Y?oe():(N=!1,_=null)}}else N=!1}var oe;if(typeof h=="function")oe=function(){h(X)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,je=le.port2;le.port1.onmessage=X,oe=function(){je.postMessage(null)}}else oe=function(){P(X,0)};function Pe(z){_=z,N||(N=!0,oe())}function _e(z,Y){T=P(function(){z(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){j||S||(j=!0,Pe(E))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return O},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(z){switch(O){case 1:case 2:case 3:var Y=3;break;default:Y=O}var Q=O;O=Y;try{return z()}finally{O=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Q=O;O=z;try{return Y()}finally{O=Q}},t.unstable_scheduleCallback=function(z,Y,Q){var fe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?fe+Q:fe):Q=fe,z){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=Q+Oe,z={id:y++,callback:Y,priorityLevel:z,startTime:Q,expirationTime:Oe,sortIndex:-1},Q>fe?(z.sortIndex=Q,e(p,z),r(u)===null&&z===r(p)&&(x?(m(T),T=-1):x=!0,_e(v,Q-fe))):(z.sortIndex=Oe,e(u,z),j||S||(j=!0,Pe(E))),z},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(z){var Y=O;return function(){var Q=O;O=Y;try{return z.apply(this,arguments)}finally{O=Q}}}})(Ly);Ry.exports=Ly;var Kg=Ry.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=H,kt=Kg;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fy=new Set,Jo={};function xr(t,e){to(t,e),to(t+"Capture",e)}function to(t,e){for(Jo[t]=e,t=0;t<e.length;t++)Fy.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tf=Object.prototype.hasOwnProperty,Qg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uu={},Hu={};function Yg(t){return tf.call(Hu,t)?!0:tf.call(Uu,t)?!1:Qg.test(t)?Hu[t]=!0:(Uu[t]=!0,!1)}function Zg(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ej(t,e,r,o){if(e===null||typeof e>"u"||Zg(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,r,o,l,a,c){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=c}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var gs=/[\-:]([a-z])/g;function js(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gs,js);ot[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gs,js);ot[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gs,js);ot[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function xs(t,e,r,o){var l=ot.hasOwnProperty(e)?ot[e]:null;(l!==null?l.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ej(e,r,l,o)&&(r=null),o||l===null?Yg(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):l.mustUseProperty?t[l.propertyName]=r===null?l.type===3?!1:"":r:(e=l.attributeName,o=l.attributeNamespace,r===null?t.removeAttribute(e):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var Pn=Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Mr=Symbol.for("react.fragment"),vs=Symbol.for("react.strict_mode"),nf=Symbol.for("react.profiler"),My=Symbol.for("react.provider"),$y=Symbol.for("react.context"),ws=Symbol.for("react.forward_ref"),rf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),En=Symbol.for("react.lazy"),By=Symbol.for("react.offscreen"),qu=Symbol.iterator;function jo(t){return t===null||typeof t!="object"?null:(t=qu&&t[qu]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,vc;function To(t){if(vc===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var wc=!1;function Pc(t,e){if(!t||wc)return"";wc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(p){var o=p}Reflect.construct(t,[],e)}else{try{e.call()}catch(p){o=p}t.call(e.prototype)}else{try{throw Error()}catch(p){o=p}t()}}catch(p){if(p&&o&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),a=o.stack.split(`
`),c=l.length-1,f=a.length-1;1<=c&&0<=f&&l[c]!==a[f];)f--;for(;1<=c&&0<=f;c--,f--)if(l[c]!==a[f]){if(c!==1||f!==1)do if(c--,f--,0>f||l[c]!==a[f]){var u=`
`+l[c].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=c&&0<=f);break}}}finally{wc=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?To(t):""}function tj(t){switch(t.tag){case 5:return To(t.type);case 16:return To("Lazy");case 13:return To("Suspense");case 19:return To("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mr:return"Fragment";case Fr:return"Portal";case nf:return"Profiler";case vs:return"StrictMode";case rf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $y:return(t.displayName||"Context")+".Consumer";case My:return(t._context.displayName||"Context")+".Provider";case ws:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ps:return e=t.displayName||null,e!==null?e:lf(t.type)||"Memo";case En:e=t._payload,t=t._init;try{return lf(t(e))}catch{}}return null}function nj(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lf(e);case 8:return e===vs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rj(t){var e=zy(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(c){o=""+c,a.call(this,c)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(c){o=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fl(t){t._valueTracker||(t._valueTracker=rj(t))}function Uy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=zy(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function af(t,e){var r=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Wu(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Xn(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hy(t,e){e=e.checked,e!=null&&xs(t,"checked",e,!1)}function cf(t,e){Hy(t,e);var r=Xn(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ff(t,e.type,r):e.hasOwnProperty("defaultValue")&&ff(t,e.type,Xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vu(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function ff(t,e,r){(e!=="number"||xi(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ao=Array.isArray;function Jr(t,e,r,o){if(t=t.options,e){e={};for(var l=0;l<r.length;l++)e["$"+r[l]]=!0;for(r=0;r<t.length;r++)l=e.hasOwnProperty("$"+t[r].value),t[r].selected!==l&&(t[r].selected=l),l&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Xn(r),e=null,l=0;l<t.length;l++){if(t[l].value===r){t[l].selected=!0,o&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function sf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gu(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(V(92));if(Ao(r)){if(1<r.length)throw Error(V(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Xn(r)}}function qy(t,e){var r=Xn(e.value),o=Xn(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function Xu(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,Vy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,l){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,l)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ko(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oj=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(t){oj.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fo[e]=Fo[t]})});function Gy(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Fo.hasOwnProperty(t)&&Fo[t]?(""+e).trim():e+"px"}function Xy(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,l=Gy(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,l):t[r]=l}}var lj=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pf(t,e){if(e){if(lj[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yf=null;function Ss(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,Kr=null,Qr=null;function Ju(t){if(t=Sl(t)){if(typeof Of!="function")throw Error(V(280));var e=t.stateNode;e&&(e=ya(e),Of(t.stateNode,t.type,e))}}function Jy(t){Kr?Qr?Qr.push(t):Qr=[t]:Kr=t}function Ky(){if(Kr){var t=Kr,e=Qr;if(Qr=Kr=null,Ju(t),e)for(t=0;t<e.length;t++)Ju(e[t])}}function Qy(t,e){return t(e)}function Yy(){}var Sc=!1;function Zy(t,e,r){if(Sc)return t(e,r);Sc=!0;try{return Qy(t,e,r)}finally{Sc=!1,(Kr!==null||Qr!==null)&&(Yy(),Ky())}}function Qo(t,e){var r=t.stateNode;if(r===null)return null;var o=ya(r);if(o===null)return null;r=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(V(231,e,typeof r));return r}var hf=!1;if(gn)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){hf=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{hf=!1}function ij(t,e,r,o,l,a,c,f,u){var p=Array.prototype.slice.call(arguments,3);try{e.apply(r,p)}catch(y){this.onError(y)}}var Mo=!1,vi=null,wi=!1,bf=null,aj={onError:function(t){Mo=!0,vi=t}};function cj(t,e,r,o,l,a,c,f,u){Mo=!1,vi=null,ij.apply(aj,arguments)}function fj(t,e,r,o,l,a,c,f,u){if(cj.apply(this,arguments),Mo){if(Mo){var p=vi;Mo=!1,vi=null}else throw Error(V(198));wi||(wi=!0,bf=p)}}function vr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function eO(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ku(t){if(vr(t)!==t)throw Error(V(188))}function sj(t){var e=t.alternate;if(!e){if(e=vr(t),e===null)throw Error(V(188));return e!==t?null:t}for(var r=t,o=e;;){var l=r.return;if(l===null)break;var a=l.alternate;if(a===null){if(o=l.return,o!==null){r=o;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===r)return Ku(l),t;if(a===o)return Ku(l),e;a=a.sibling}throw Error(V(188))}if(r.return!==o.return)r=l,o=a;else{for(var c=!1,f=l.child;f;){if(f===r){c=!0,r=l,o=a;break}if(f===o){c=!0,o=l,r=a;break}f=f.sibling}if(!c){for(f=a.child;f;){if(f===r){c=!0,r=a,o=l;break}if(f===o){c=!0,o=a,r=l;break}f=f.sibling}if(!c)throw Error(V(189))}}if(r.alternate!==o)throw Error(V(190))}if(r.tag!==3)throw Error(V(188));return r.stateNode.current===r?t:e}function tO(t){return t=sj(t),t!==null?nO(t):null}function nO(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=nO(t);if(e!==null)return e;t=t.sibling}return null}var rO=kt.unstable_scheduleCallback,Qu=kt.unstable_cancelCallback,uj=kt.unstable_shouldYield,pj=kt.unstable_requestPaint,We=kt.unstable_now,dj=kt.unstable_getCurrentPriorityLevel,_s=kt.unstable_ImmediatePriority,oO=kt.unstable_UserBlockingPriority,Pi=kt.unstable_NormalPriority,yj=kt.unstable_LowPriority,lO=kt.unstable_IdlePriority,sa=null,ln=null;function Oj(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(sa,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:mj,hj=Math.log,bj=Math.LN2;function mj(t){return t>>>=0,t===0?32:31-(hj(t)/bj|0)|0}var $l=64,Bl=4194304;function Ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Si(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,l=t.suspendedLanes,a=t.pingedLanes,c=r&268435455;if(c!==0){var f=c&~l;f!==0?o=Ro(f):(a&=c,a!==0&&(o=Ro(a)))}else c=r&~l,c!==0?o=Ro(c):a!==0&&(o=Ro(a));if(o===0)return 0;if(e!==0&&e!==o&&!(e&l)&&(l=o&-o,a=e&-e,l>=a||l===16&&(a&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Vt(e),l=1<<r,o|=t[r],e&=~l;return o}function gj(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jj(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,l=t.expirationTimes,a=t.pendingLanes;0<a;){var c=31-Vt(a),f=1<<c,u=l[c];u===-1?(!(f&r)||f&o)&&(l[c]=gj(f,e)):u<=e&&(t.expiredLanes|=f),a&=~f}}function mf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function iO(){var t=$l;return $l<<=1,!($l&4194240)&&($l=64),t}function _c(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function wl(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vt(e),t[e]=r}function xj(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var l=31-Vt(r),a=1<<l;e[l]=0,o[l]=-1,t[l]=-1,r&=~a}}function Es(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Vt(r),l=1<<o;l&e|t[o]&e&&(t[o]|=e),r&=~l}}var Ie=0;function aO(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var cO,Is,fO,sO,uO,gf=!1,zl=[],Ln=null,Dn=null,Fn=null,Yo=new Map,Zo=new Map,kn=[],vj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yu(t,e){switch(t){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(e.pointerId)}}function vo(t,e,r,o,l,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[l]},e!==null&&(e=Sl(e),e!==null&&Is(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function wj(t,e,r,o,l){switch(e){case"focusin":return Ln=vo(Ln,t,e,r,o,l),!0;case"dragenter":return Dn=vo(Dn,t,e,r,o,l),!0;case"mouseover":return Fn=vo(Fn,t,e,r,o,l),!0;case"pointerover":var a=l.pointerId;return Yo.set(a,vo(Yo.get(a)||null,t,e,r,o,l)),!0;case"gotpointercapture":return a=l.pointerId,Zo.set(a,vo(Zo.get(a)||null,t,e,r,o,l)),!0}return!1}function pO(t){var e=ar(t.target);if(e!==null){var r=vr(e);if(r!==null){if(e=r.tag,e===13){if(e=eO(r),e!==null){t.blockedOn=e,uO(t.priority,function(){fO(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ai(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=jf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);yf=o,r.target.dispatchEvent(o),yf=null}else return e=Sl(r),e!==null&&Is(e),t.blockedOn=r,!1;e.shift()}return!0}function Zu(t,e,r){ai(t)&&r.delete(e)}function Pj(){gf=!1,Ln!==null&&ai(Ln)&&(Ln=null),Dn!==null&&ai(Dn)&&(Dn=null),Fn!==null&&ai(Fn)&&(Fn=null),Yo.forEach(Zu),Zo.forEach(Zu)}function wo(t,e){t.blockedOn===e&&(t.blockedOn=null,gf||(gf=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,Pj)))}function el(t){function e(l){return wo(l,t)}if(0<zl.length){wo(zl[0],t);for(var r=1;r<zl.length;r++){var o=zl[r];o.blockedOn===t&&(o.blockedOn=null)}}for(Ln!==null&&wo(Ln,t),Dn!==null&&wo(Dn,t),Fn!==null&&wo(Fn,t),Yo.forEach(e),Zo.forEach(e),r=0;r<kn.length;r++)o=kn[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<kn.length&&(r=kn[0],r.blockedOn===null);)pO(r),r.blockedOn===null&&kn.shift()}var Yr=Pn.ReactCurrentBatchConfig,_i=!0;function Sj(t,e,r,o){var l=Ie,a=Yr.transition;Yr.transition=null;try{Ie=1,ks(t,e,r,o)}finally{Ie=l,Yr.transition=a}}function _j(t,e,r,o){var l=Ie,a=Yr.transition;Yr.transition=null;try{Ie=4,ks(t,e,r,o)}finally{Ie=l,Yr.transition=a}}function ks(t,e,r,o){if(_i){var l=jf(t,e,r,o);if(l===null)Dc(t,e,o,Ei,r),Yu(t,o);else if(wj(l,t,e,r,o))o.stopPropagation();else if(Yu(t,o),e&4&&-1<vj.indexOf(t)){for(;l!==null;){var a=Sl(l);if(a!==null&&cO(a),a=jf(t,e,r,o),a===null&&Dc(t,e,o,Ei,r),a===l)break;l=a}l!==null&&o.stopPropagation()}else Dc(t,e,o,null,r)}}var Ei=null;function jf(t,e,r,o){if(Ei=null,t=Ss(o),t=ar(t),t!==null)if(e=vr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=eO(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ei=t,null}function dO(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dj()){case _s:return 1;case oO:return 4;case Pi:case yj:return 16;case lO:return 536870912;default:return 16}default:return 16}}var Cn=null,Ns=null,ci=null;function yO(){if(ci)return ci;var t,e=Ns,r=e.length,o,l="value"in Cn?Cn.value:Cn.textContent,a=l.length;for(t=0;t<r&&e[t]===l[t];t++);var c=r-t;for(o=1;o<=c&&e[r-o]===l[a-o];o++);return ci=l.slice(t,1<o?1-o:void 0)}function fi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function ep(){return!1}function Tt(t){function e(r,o,l,a,c){this._reactName=r,this._targetInst=l,this.type=o,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(r=t[f],this[f]=r?r(a):a[f]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Ul:ep,this.isPropagationStopped=ep,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=Tt(uo),Pl=ze({},uo,{view:0,detail:0}),Ej=Tt(Pl),Ec,Ic,Po,ua=ze({},Pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ts,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Po&&(Po&&t.type==="mousemove"?(Ec=t.screenX-Po.screenX,Ic=t.screenY-Po.screenY):Ic=Ec=0,Po=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),tp=Tt(ua),Ij=ze({},ua,{dataTransfer:0}),kj=Tt(Ij),Nj=ze({},Pl,{relatedTarget:0}),kc=Tt(Nj),Cj=ze({},uo,{animationName:0,elapsedTime:0,pseudoElement:0}),Tj=Tt(Cj),Aj=ze({},uo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rj=Tt(Aj),Lj=ze({},uo,{data:0}),np=Tt(Lj),Dj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $j(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Mj[t])?!!e[t]:!1}function Ts(){return $j}var Bj=ze({},Pl,{key:function(t){if(t.key){var e=Dj[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fj[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ts,charCode:function(t){return t.type==="keypress"?fi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zj=Tt(Bj),Uj=ze({},ua,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rp=Tt(Uj),Hj=ze({},Pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ts}),qj=Tt(Hj),Wj=ze({},uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vj=Tt(Wj),Gj=ze({},ua,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xj=Tt(Gj),Jj=[9,13,27,32],As=gn&&"CompositionEvent"in window,$o=null;gn&&"documentMode"in document&&($o=document.documentMode);var Kj=gn&&"TextEvent"in window&&!$o,OO=gn&&(!As||$o&&8<$o&&11>=$o),op=" ",lp=!1;function hO(t,e){switch(t){case"keyup":return Jj.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bO(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function Qj(t,e){switch(t){case"compositionend":return bO(e);case"keypress":return e.which!==32?null:(lp=!0,op);case"textInput":return t=e.data,t===op&&lp?null:t;default:return null}}function Yj(t,e){if($r)return t==="compositionend"||!As&&hO(t,e)?(t=yO(),ci=Ns=Cn=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return OO&&e.locale!=="ko"?null:e.data;default:return null}}var Zj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Zj[t.type]:e==="textarea"}function mO(t,e,r,o){Jy(o),e=Ii(e,"onChange"),0<e.length&&(r=new Cs("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var Bo=null,tl=null;function e1(t){kO(t,0)}function pa(t){var e=Ur(t);if(Uy(e))return t}function t1(t,e){if(t==="change")return e}var gO=!1;if(gn){var Nc;if(gn){var Cc="oninput"in document;if(!Cc){var ap=document.createElement("div");ap.setAttribute("oninput","return;"),Cc=typeof ap.oninput=="function"}Nc=Cc}else Nc=!1;gO=Nc&&(!document.documentMode||9<document.documentMode)}function cp(){Bo&&(Bo.detachEvent("onpropertychange",jO),tl=Bo=null)}function jO(t){if(t.propertyName==="value"&&pa(tl)){var e=[];mO(e,tl,t,Ss(t)),Zy(e1,e)}}function n1(t,e,r){t==="focusin"?(cp(),Bo=e,tl=r,Bo.attachEvent("onpropertychange",jO)):t==="focusout"&&cp()}function r1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pa(tl)}function o1(t,e){if(t==="click")return pa(e)}function l1(t,e){if(t==="input"||t==="change")return pa(e)}function i1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:i1;function nl(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var l=r[o];if(!tf.call(e,l)||!Jt(t[l],e[l]))return!1}return!0}function fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var r=fp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=fp(r)}}function xO(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xO(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vO(){for(var t=window,e=xi();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=xi(t.document)}return e}function Rs(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function a1(t){var e=vO(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&xO(r.ownerDocument.documentElement,r)){if(o!==null&&Rs(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=r.textContent.length,a=Math.min(o.start,l);o=o.end===void 0?a:Math.min(o.end,l),!t.extend&&a>o&&(l=o,o=a,a=l),l=sp(r,a);var c=sp(r,o);l&&c&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==c.node||t.focusOffset!==c.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),a>o?(t.addRange(e),t.extend(c.node,c.offset)):(e.setEnd(c.node,c.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var c1=gn&&"documentMode"in document&&11>=document.documentMode,Br=null,xf=null,zo=null,vf=!1;function up(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;vf||Br==null||Br!==xi(o)||(o=Br,"selectionStart"in o&&Rs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),zo&&nl(zo,o)||(zo=o,o=Ii(xf,"onSelect"),0<o.length&&(e=new Cs("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=Br)))}function Hl(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var zr={animationend:Hl("Animation","AnimationEnd"),animationiteration:Hl("Animation","AnimationIteration"),animationstart:Hl("Animation","AnimationStart"),transitionend:Hl("Transition","TransitionEnd")},Tc={},wO={};gn&&(wO=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function da(t){if(Tc[t])return Tc[t];if(!zr[t])return t;var e=zr[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in wO)return Tc[t]=e[r];return t}var PO=da("animationend"),SO=da("animationiteration"),_O=da("animationstart"),EO=da("transitionend"),IO=new Map,pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){IO.set(t,e),xr(e,[t])}for(var Ac=0;Ac<pp.length;Ac++){var Rc=pp[Ac],f1=Rc.toLowerCase(),s1=Rc[0].toUpperCase()+Rc.slice(1);Kn(f1,"on"+s1)}Kn(PO,"onAnimationEnd");Kn(SO,"onAnimationIteration");Kn(_O,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(EO,"onTransitionEnd");to("onMouseEnter",["mouseout","mouseover"]);to("onMouseLeave",["mouseout","mouseover"]);to("onPointerEnter",["pointerout","pointerover"]);to("onPointerLeave",["pointerout","pointerover"]);xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function dp(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,fj(o,e,void 0,t),t.currentTarget=null}function kO(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],l=o.event;o=o.listeners;e:{var a=void 0;if(e)for(var c=o.length-1;0<=c;c--){var f=o[c],u=f.instance,p=f.currentTarget;if(f=f.listener,u!==a&&l.isPropagationStopped())break e;dp(l,f,p),a=u}else for(c=0;c<o.length;c++){if(f=o[c],u=f.instance,p=f.currentTarget,f=f.listener,u!==a&&l.isPropagationStopped())break e;dp(l,f,p),a=u}}}if(wi)throw t=bf,wi=!1,bf=null,t}function Te(t,e){var r=e[Ef];r===void 0&&(r=e[Ef]=new Set);var o=t+"__bubble";r.has(o)||(NO(e,t,2,!1),r.add(o))}function Lc(t,e,r){var o=0;e&&(o|=4),NO(r,t,o,e)}var ql="_reactListening"+Math.random().toString(36).slice(2);function rl(t){if(!t[ql]){t[ql]=!0,Fy.forEach(function(r){r!=="selectionchange"&&(u1.has(r)||Lc(r,!1,t),Lc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ql]||(e[ql]=!0,Lc("selectionchange",!1,e))}}function NO(t,e,r,o){switch(dO(e)){case 1:var l=Sj;break;case 4:l=_j;break;default:l=ks}r=l.bind(null,e,r,t),l=void 0,!hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),o?l!==void 0?t.addEventListener(e,r,{capture:!0,passive:l}):t.addEventListener(e,r,!0):l!==void 0?t.addEventListener(e,r,{passive:l}):t.addEventListener(e,r,!1)}function Dc(t,e,r,o,l){var a=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var c=o.tag;if(c===3||c===4){var f=o.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(c===4)for(c=o.return;c!==null;){var u=c.tag;if((u===3||u===4)&&(u=c.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;c=c.return}for(;f!==null;){if(c=ar(f),c===null)return;if(u=c.tag,u===5||u===6){o=a=c;continue e}f=f.parentNode}}o=o.return}Zy(function(){var p=a,y=Ss(r),d=[];e:{var O=IO.get(t);if(O!==void 0){var S=Cs,j=t;switch(t){case"keypress":if(fi(r)===0)break e;case"keydown":case"keyup":S=zj;break;case"focusin":j="focus",S=kc;break;case"focusout":j="blur",S=kc;break;case"beforeblur":case"afterblur":S=kc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=tp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=kj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=qj;break;case PO:case SO:case _O:S=Tj;break;case EO:S=Vj;break;case"scroll":S=Ej;break;case"wheel":S=Xj;break;case"copy":case"cut":case"paste":S=Rj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=rp}var x=(e&4)!==0,P=!x&&t==="scroll",m=x?O!==null?O+"Capture":null:O;x=[];for(var h=p,b;h!==null;){b=h;var v=b.stateNode;if(b.tag===5&&v!==null&&(b=v,m!==null&&(v=Qo(h,m),v!=null&&x.push(ol(h,v,b)))),P)break;h=h.return}0<x.length&&(O=new S(O,j,null,r,y),d.push({event:O,listeners:x}))}}if(!(e&7)){e:{if(O=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",O&&r!==yf&&(j=r.relatedTarget||r.fromElement)&&(ar(j)||j[jn]))break e;if((S||O)&&(O=y.window===y?y:(O=y.ownerDocument)?O.defaultView||O.parentWindow:window,S?(j=r.relatedTarget||r.toElement,S=p,j=j?ar(j):null,j!==null&&(P=vr(j),j!==P||j.tag!==5&&j.tag!==6)&&(j=null)):(S=null,j=p),S!==j)){if(x=tp,v="onMouseLeave",m="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(x=rp,v="onPointerLeave",m="onPointerEnter",h="pointer"),P=S==null?O:Ur(S),b=j==null?O:Ur(j),O=new x(v,h+"leave",S,r,y),O.target=P,O.relatedTarget=b,v=null,ar(y)===p&&(x=new x(m,h+"enter",j,r,y),x.target=b,x.relatedTarget=P,v=x),P=v,S&&j)t:{for(x=S,m=j,h=0,b=x;b;b=Cr(b))h++;for(b=0,v=m;v;v=Cr(v))b++;for(;0<h-b;)x=Cr(x),h--;for(;0<b-h;)m=Cr(m),b--;for(;h--;){if(x===m||m!==null&&x===m.alternate)break t;x=Cr(x),m=Cr(m)}x=null}else x=null;S!==null&&yp(d,O,S,x,!1),j!==null&&P!==null&&yp(d,P,j,x,!0)}}e:{if(O=p?Ur(p):window,S=O.nodeName&&O.nodeName.toLowerCase(),S==="select"||S==="input"&&O.type==="file")var E=t1;else if(ip(O))if(gO)E=l1;else{E=r1;var N=n1}else(S=O.nodeName)&&S.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(E=o1);if(E&&(E=E(t,p))){mO(d,E,r,y);break e}N&&N(t,O,p),t==="focusout"&&(N=O._wrapperState)&&N.controlled&&O.type==="number"&&ff(O,"number",O.value)}switch(N=p?Ur(p):window,t){case"focusin":(ip(N)||N.contentEditable==="true")&&(Br=N,xf=p,zo=null);break;case"focusout":zo=xf=Br=null;break;case"mousedown":vf=!0;break;case"contextmenu":case"mouseup":case"dragend":vf=!1,up(d,r,y);break;case"selectionchange":if(c1)break;case"keydown":case"keyup":up(d,r,y)}var _;if(As)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else $r?hO(t,r)&&(T="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(OO&&r.locale!=="ko"&&($r||T!=="onCompositionStart"?T==="onCompositionEnd"&&$r&&(_=yO()):(Cn=y,Ns="value"in Cn?Cn.value:Cn.textContent,$r=!0)),N=Ii(p,T),0<N.length&&(T=new np(T,t,null,r,y),d.push({event:T,listeners:N}),_?T.data=_:(_=bO(r),_!==null&&(T.data=_)))),(_=Kj?Qj(t,r):Yj(t,r))&&(p=Ii(p,"onBeforeInput"),0<p.length&&(y=new np("onBeforeInput","beforeinput",null,r,y),d.push({event:y,listeners:p}),y.data=_))}kO(d,e)})}function ol(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Ii(t,e){for(var r=e+"Capture",o=[];t!==null;){var l=t,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=Qo(t,r),a!=null&&o.unshift(ol(t,a,l)),a=Qo(t,e),a!=null&&o.push(ol(t,a,l))),t=t.return}return o}function Cr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yp(t,e,r,o,l){for(var a=e._reactName,c=[];r!==null&&r!==o;){var f=r,u=f.alternate,p=f.stateNode;if(u!==null&&u===o)break;f.tag===5&&p!==null&&(f=p,l?(u=Qo(r,a),u!=null&&c.unshift(ol(r,u,f))):l||(u=Qo(r,a),u!=null&&c.push(ol(r,u,f)))),r=r.return}c.length!==0&&t.push({event:e,listeners:c})}var p1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function Op(t){return(typeof t=="string"?t:""+t).replace(p1,`
`).replace(d1,"")}function Wl(t,e,r){if(e=Op(e),Op(t)!==e&&r)throw Error(V(425))}function ki(){}var wf=null,Pf=null;function Sf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,y1=typeof clearTimeout=="function"?clearTimeout:void 0,hp=typeof Promise=="function"?Promise:void 0,O1=typeof queueMicrotask=="function"?queueMicrotask:typeof hp<"u"?function(t){return hp.resolve(null).then(t).catch(h1)}:_f;function h1(t){setTimeout(function(){throw t})}function Fc(t,e){var r=e,o=0;do{var l=r.nextSibling;if(t.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(o===0){t.removeChild(l),el(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=l}while(r);el(e)}function Mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var po=Math.random().toString(36).slice(2),tn="__reactFiber$"+po,ll="__reactProps$"+po,jn="__reactContainer$"+po,Ef="__reactEvents$"+po,b1="__reactListeners$"+po,m1="__reactHandles$"+po;function ar(t){var e=t[tn];if(e)return e;for(var r=t.parentNode;r;){if(e=r[jn]||r[tn]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=bp(t);t!==null;){if(r=t[tn])return r;t=bp(t)}return e}t=r,r=t.parentNode}return null}function Sl(t){return t=t[tn]||t[jn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function ya(t){return t[ll]||null}var If=[],Hr=-1;function Qn(t){return{current:t}}function Ae(t){0>Hr||(t.current=If[Hr],If[Hr]=null,Hr--)}function Ne(t,e){Hr++,If[Hr]=t.current,t.current=e}var Jn={},ft=Qn(Jn),jt=Qn(!1),dr=Jn;function no(t,e){var r=t.type.contextTypes;if(!r)return Jn;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in r)l[a]=e[a];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=l),l}function xt(t){return t=t.childContextTypes,t!=null}function Ni(){Ae(jt),Ae(ft)}function mp(t,e,r){if(ft.current!==Jn)throw Error(V(168));Ne(ft,e),Ne(jt,r)}function CO(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var l in o)if(!(l in e))throw Error(V(108,nj(t)||"Unknown",l));return ze({},r,o)}function Ci(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,dr=ft.current,Ne(ft,t),Ne(jt,jt.current),!0}function gp(t,e,r){var o=t.stateNode;if(!o)throw Error(V(169));r?(t=CO(t,e,dr),o.__reactInternalMemoizedMergedChildContext=t,Ae(jt),Ae(ft),Ne(ft,t)):Ae(jt),Ne(jt,r)}var On=null,Oa=!1,Mc=!1;function TO(t){On===null?On=[t]:On.push(t)}function g1(t){Oa=!0,TO(t)}function Yn(){if(!Mc&&On!==null){Mc=!0;var t=0,e=Ie;try{var r=On;for(Ie=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}On=null,Oa=!1}catch(l){throw On!==null&&(On=On.slice(t+1)),rO(_s,Yn),l}finally{Ie=e,Mc=!1}}return null}var qr=[],Wr=0,Ti=null,Ai=0,At=[],Rt=0,yr=null,hn=1,bn="";function rr(t,e){qr[Wr++]=Ai,qr[Wr++]=Ti,Ti=t,Ai=e}function AO(t,e,r){At[Rt++]=hn,At[Rt++]=bn,At[Rt++]=yr,yr=t;var o=hn;t=bn;var l=32-Vt(o)-1;o&=~(1<<l),r+=1;var a=32-Vt(e)+l;if(30<a){var c=l-l%5;a=(o&(1<<c)-1).toString(32),o>>=c,l-=c,hn=1<<32-Vt(e)+l|r<<l|o,bn=a+t}else hn=1<<a|r<<l|o,bn=t}function Ls(t){t.return!==null&&(rr(t,1),AO(t,1,0))}function Ds(t){for(;t===Ti;)Ti=qr[--Wr],qr[Wr]=null,Ai=qr[--Wr],qr[Wr]=null;for(;t===yr;)yr=At[--Rt],At[Rt]=null,bn=At[--Rt],At[Rt]=null,hn=At[--Rt],At[Rt]=null}var It=null,_t=null,Le=!1,qt=null;function RO(t,e){var r=Lt(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function jp(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,It=t,_t=Mn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,It=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=yr!==null?{id:hn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Lt(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,It=t,_t=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nf(t){if(Le){var e=_t;if(e){var r=e;if(!jp(t,e)){if(kf(t))throw Error(V(418));e=Mn(r.nextSibling);var o=It;e&&jp(t,e)?RO(o,r):(t.flags=t.flags&-4097|2,Le=!1,It=t)}}else{if(kf(t))throw Error(V(418));t.flags=t.flags&-4097|2,Le=!1,It=t}}}function xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;It=t}function Vl(t){if(t!==It)return!1;if(!Le)return xp(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sf(t.type,t.memoizedProps)),e&&(e=_t)){if(kf(t))throw LO(),Error(V(418));for(;e;)RO(t,e),e=Mn(e.nextSibling)}if(xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){_t=Mn(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=It?Mn(t.stateNode.nextSibling):null;return!0}function LO(){for(var t=_t;t;)t=Mn(t.nextSibling)}function ro(){_t=It=null,Le=!1}function Fs(t){qt===null?qt=[t]:qt.push(t)}var j1=Pn.ReactCurrentBatchConfig;function Ut(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var Ri=Qn(null),Li=null,Vr=null,Ms=null;function $s(){Ms=Vr=Li=null}function Bs(t){var e=Ri.current;Ae(Ri),t._currentValue=e}function Cf(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function Zr(t,e){Li=t,Ms=Vr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(Ms!==t)if(t={context:t,memoizedValue:e,next:null},Vr===null){if(Li===null)throw Error(V(308));Vr=t,Li.dependencies={lanes:0,firstContext:t}}else Vr=Vr.next=t;return e}var cr=null;function zs(t){cr===null?cr=[t]:cr.push(t)}function DO(t,e,r,o){var l=e.interleaved;return l===null?(r.next=r,zs(e)):(r.next=l.next,l.next=r),e.interleaved=r,xn(t,o)}function xn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var In=!1;function Us(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function FO(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $n(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,ve&2){var l=o.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),o.pending=e,xn(t,r)}return l=o.interleaved,l===null?(e.next=e,zs(o)):(e.next=l.next,l.next=e),o.interleaved=e,xn(t,r)}function si(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Es(t,r)}}function vp(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var l=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?l=a=c:a=a.next=c,r=r.next}while(r!==null);a===null?l=a=e:a=a.next=e}else l=a=e;r={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Di(t,e,r,o){var l=t.updateQueue;In=!1;var a=l.firstBaseUpdate,c=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var u=f,p=u.next;u.next=null,c===null?a=p:c.next=p,c=u;var y=t.alternate;y!==null&&(y=y.updateQueue,f=y.lastBaseUpdate,f!==c&&(f===null?y.firstBaseUpdate=p:f.next=p,y.lastBaseUpdate=u))}if(a!==null){var d=l.baseState;c=0,y=p=u=null,f=a;do{var O=f.lane,S=f.eventTime;if((o&O)===O){y!==null&&(y=y.next={eventTime:S,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var j=t,x=f;switch(O=e,S=r,x.tag){case 1:if(j=x.payload,typeof j=="function"){d=j.call(S,d,O);break e}d=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=x.payload,O=typeof j=="function"?j.call(S,d,O):j,O==null)break e;d=ze({},d,O);break e;case 2:In=!0}}f.callback!==null&&f.lane!==0&&(t.flags|=64,O=l.effects,O===null?l.effects=[f]:O.push(f))}else S={eventTime:S,lane:O,tag:f.tag,payload:f.payload,callback:f.callback,next:null},y===null?(p=y=S,u=d):y=y.next=S,c|=O;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;O=f,f=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);if(y===null&&(u=d),l.baseState=u,l.firstBaseUpdate=p,l.lastBaseUpdate=y,e=l.shared.interleaved,e!==null){l=e;do c|=l.lane,l=l.next;while(l!==e)}else a===null&&(l.shared.lanes=0);hr|=c,t.lanes=c,t.memoizedState=d}}function wp(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],l=o.callback;if(l!==null){if(o.callback=null,o=r,typeof l!="function")throw Error(V(191,l));l.call(o)}}}var MO=new Dy.Component().refs;function Tf(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:ze({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ha={isMounted:function(t){return(t=t._reactInternals)?vr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=dt(),l=zn(t),a=mn(o,l);a.payload=e,r!=null&&(a.callback=r),e=$n(t,a,l),e!==null&&(Gt(e,t,l,o),si(e,t,l))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=dt(),l=zn(t),a=mn(o,l);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=$n(t,a,l),e!==null&&(Gt(e,t,l,o),si(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=dt(),o=zn(t),l=mn(r,o);l.tag=2,e!=null&&(l.callback=e),e=$n(t,l,o),e!==null&&(Gt(e,t,o,r),si(e,t,o))}};function Pp(t,e,r,o,l,a,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,a,c):e.prototype&&e.prototype.isPureReactComponent?!nl(r,o)||!nl(l,a):!0}function $O(t,e,r){var o=!1,l=Jn,a=e.contextType;return typeof a=="object"&&a!==null?a=Mt(a):(l=xt(e)?dr:ft.current,o=e.contextTypes,a=(o=o!=null)?no(t,l):Jn),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ha,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=a),e}function Sp(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&ha.enqueueReplaceState(e,e.state,null)}function Af(t,e,r,o){var l=t.stateNode;l.props=r,l.state=t.memoizedState,l.refs=MO,Us(t);var a=e.contextType;typeof a=="object"&&a!==null?l.context=Mt(a):(a=xt(e)?dr:ft.current,l.context=no(t,a)),l.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Tf(t,e,a,r),l.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&ha.enqueueReplaceState(l,l.state,null),Di(t,r,l,o),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function So(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(V(309));var o=r.stateNode}if(!o)throw Error(V(147,t));var l=o,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(c){var f=l.refs;f===MO&&(f=l.refs={}),c===null?delete f[a]:f[a]=c},e._stringRef=a,e)}if(typeof t!="string")throw Error(V(284));if(!r._owner)throw Error(V(290,t))}return t}function Gl(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _p(t){var e=t._init;return e(t._payload)}function BO(t){function e(m,h){if(t){var b=m.deletions;b===null?(m.deletions=[h],m.flags|=16):b.push(h)}}function r(m,h){if(!t)return null;for(;h!==null;)e(m,h),h=h.sibling;return null}function o(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function l(m,h){return m=Un(m,h),m.index=0,m.sibling=null,m}function a(m,h,b){return m.index=b,t?(b=m.alternate,b!==null?(b=b.index,b<h?(m.flags|=2,h):b):(m.flags|=2,h)):(m.flags|=1048576,h)}function c(m){return t&&m.alternate===null&&(m.flags|=2),m}function f(m,h,b,v){return h===null||h.tag!==6?(h=Wc(b,m.mode,v),h.return=m,h):(h=l(h,b),h.return=m,h)}function u(m,h,b,v){var E=b.type;return E===Mr?y(m,h,b.props.children,v,b.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===En&&_p(E)===h.type)?(v=l(h,b.props),v.ref=So(m,h,b),v.return=m,v):(v=hi(b.type,b.key,b.props,null,m.mode,v),v.ref=So(m,h,b),v.return=m,v)}function p(m,h,b,v){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=Vc(b,m.mode,v),h.return=m,h):(h=l(h,b.children||[]),h.return=m,h)}function y(m,h,b,v,E){return h===null||h.tag!==7?(h=pr(b,m.mode,v,E),h.return=m,h):(h=l(h,b),h.return=m,h)}function d(m,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Wc(""+h,m.mode,b),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Dl:return b=hi(h.type,h.key,h.props,null,m.mode,b),b.ref=So(m,null,h),b.return=m,b;case Fr:return h=Vc(h,m.mode,b),h.return=m,h;case En:var v=h._init;return d(m,v(h._payload),b)}if(Ao(h)||jo(h))return h=pr(h,m.mode,b,null),h.return=m,h;Gl(m,h)}return null}function O(m,h,b,v){var E=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return E!==null?null:f(m,h,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Dl:return b.key===E?u(m,h,b,v):null;case Fr:return b.key===E?p(m,h,b,v):null;case En:return E=b._init,O(m,h,E(b._payload),v)}if(Ao(b)||jo(b))return E!==null?null:y(m,h,b,v,null);Gl(m,b)}return null}function S(m,h,b,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(b)||null,f(h,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Dl:return m=m.get(v.key===null?b:v.key)||null,u(h,m,v,E);case Fr:return m=m.get(v.key===null?b:v.key)||null,p(h,m,v,E);case En:var N=v._init;return S(m,h,b,N(v._payload),E)}if(Ao(v)||jo(v))return m=m.get(b)||null,y(h,m,v,E,null);Gl(h,v)}return null}function j(m,h,b,v){for(var E=null,N=null,_=h,T=h=0,$=null;_!==null&&T<b.length;T++){_.index>T?($=_,_=null):$=_.sibling;var R=O(m,_,b[T],v);if(R===null){_===null&&(_=$);break}t&&_&&R.alternate===null&&e(m,_),h=a(R,h,T),N===null?E=R:N.sibling=R,N=R,_=$}if(T===b.length)return r(m,_),Le&&rr(m,T),E;if(_===null){for(;T<b.length;T++)_=d(m,b[T],v),_!==null&&(h=a(_,h,T),N===null?E=_:N.sibling=_,N=_);return Le&&rr(m,T),E}for(_=o(m,_);T<b.length;T++)$=S(_,m,T,b[T],v),$!==null&&(t&&$.alternate!==null&&_.delete($.key===null?T:$.key),h=a($,h,T),N===null?E=$:N.sibling=$,N=$);return t&&_.forEach(function(W){return e(m,W)}),Le&&rr(m,T),E}function x(m,h,b,v){var E=jo(b);if(typeof E!="function")throw Error(V(150));if(b=E.call(b),b==null)throw Error(V(151));for(var N=E=null,_=h,T=h=0,$=null,R=b.next();_!==null&&!R.done;T++,R=b.next()){_.index>T?($=_,_=null):$=_.sibling;var W=O(m,_,R.value,v);if(W===null){_===null&&(_=$);break}t&&_&&W.alternate===null&&e(m,_),h=a(W,h,T),N===null?E=W:N.sibling=W,N=W,_=$}if(R.done)return r(m,_),Le&&rr(m,T),E;if(_===null){for(;!R.done;T++,R=b.next())R=d(m,R.value,v),R!==null&&(h=a(R,h,T),N===null?E=R:N.sibling=R,N=R);return Le&&rr(m,T),E}for(_=o(m,_);!R.done;T++,R=b.next())R=S(_,m,T,R.value,v),R!==null&&(t&&R.alternate!==null&&_.delete(R.key===null?T:R.key),h=a(R,h,T),N===null?E=R:N.sibling=R,N=R);return t&&_.forEach(function(X){return e(m,X)}),Le&&rr(m,T),E}function P(m,h,b,v){if(typeof b=="object"&&b!==null&&b.type===Mr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Dl:e:{for(var E=b.key,N=h;N!==null;){if(N.key===E){if(E=b.type,E===Mr){if(N.tag===7){r(m,N.sibling),h=l(N,b.props.children),h.return=m,m=h;break e}}else if(N.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===En&&_p(E)===N.type){r(m,N.sibling),h=l(N,b.props),h.ref=So(m,N,b),h.return=m,m=h;break e}r(m,N);break}else e(m,N);N=N.sibling}b.type===Mr?(h=pr(b.props.children,m.mode,v,b.key),h.return=m,m=h):(v=hi(b.type,b.key,b.props,null,m.mode,v),v.ref=So(m,h,b),v.return=m,m=v)}return c(m);case Fr:e:{for(N=b.key;h!==null;){if(h.key===N)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){r(m,h.sibling),h=l(h,b.children||[]),h.return=m,m=h;break e}else{r(m,h);break}else e(m,h);h=h.sibling}h=Vc(b,m.mode,v),h.return=m,m=h}return c(m);case En:return N=b._init,P(m,h,N(b._payload),v)}if(Ao(b))return j(m,h,b,v);if(jo(b))return x(m,h,b,v);Gl(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,h!==null&&h.tag===6?(r(m,h.sibling),h=l(h,b),h.return=m,m=h):(r(m,h),h=Wc(b,m.mode,v),h.return=m,m=h),c(m)):r(m,h)}return P}var oo=BO(!0),zO=BO(!1),_l={},an=Qn(_l),il=Qn(_l),al=Qn(_l);function fr(t){if(t===_l)throw Error(V(174));return t}function Hs(t,e){switch(Ne(al,e),Ne(il,t),Ne(an,_l),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uf(e,t)}Ae(an),Ne(an,e)}function lo(){Ae(an),Ae(il),Ae(al)}function UO(t){fr(al.current);var e=fr(an.current),r=uf(e,t.type);e!==r&&(Ne(il,t),Ne(an,r))}function qs(t){il.current===t&&(Ae(an),Ae(il))}var $e=Qn(0);function Fi(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $c=[];function Ws(){for(var t=0;t<$c.length;t++)$c[t]._workInProgressVersionPrimary=null;$c.length=0}var ui=Pn.ReactCurrentDispatcher,Bc=Pn.ReactCurrentBatchConfig,Or=0,Be=null,Je=null,Qe=null,Mi=!1,Uo=!1,cl=0,x1=0;function it(){throw Error(V(321))}function Vs(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Jt(t[r],e[r]))return!1;return!0}function Gs(t,e,r,o,l,a){if(Or=a,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ui.current=t===null||t.memoizedState===null?S1:_1,t=r(o,l),Uo){a=0;do{if(Uo=!1,cl=0,25<=a)throw Error(V(301));a+=1,Qe=Je=null,e.updateQueue=null,ui.current=E1,t=r(o,l)}while(Uo)}if(ui.current=$i,e=Je!==null&&Je.next!==null,Or=0,Qe=Je=Be=null,Mi=!1,e)throw Error(V(300));return t}function Xs(){var t=cl!==0;return cl=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Be.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function $t(){if(Je===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=Qe===null?Be.memoizedState:Qe.next;if(e!==null)Qe=e,Je=t;else{if(t===null)throw Error(V(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Qe===null?Be.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function fl(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=$t(),r=e.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=t;var o=Je,l=o.baseQueue,a=r.pending;if(a!==null){if(l!==null){var c=l.next;l.next=a.next,a.next=c}o.baseQueue=l=a,r.pending=null}if(l!==null){a=l.next,o=o.baseState;var f=c=null,u=null,p=a;do{var y=p.lane;if((Or&y)===y)u!==null&&(u=u.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),o=p.hasEagerState?p.eagerState:t(o,p.action);else{var d={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};u===null?(f=u=d,c=o):u=u.next=d,Be.lanes|=y,hr|=y}p=p.next}while(p!==null&&p!==a);u===null?c=o:u.next=f,Jt(o,e.memoizedState)||(gt=!0),e.memoizedState=o,e.baseState=c,e.baseQueue=u,r.lastRenderedState=o}if(t=r.interleaved,t!==null){l=t;do a=l.lane,Be.lanes|=a,hr|=a,l=l.next;while(l!==t)}else l===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Uc(t){var e=$t(),r=e.queue;if(r===null)throw Error(V(311));r.lastRenderedReducer=t;var o=r.dispatch,l=r.pending,a=e.memoizedState;if(l!==null){r.pending=null;var c=l=l.next;do a=t(a,c.action),c=c.next;while(c!==l);Jt(a,e.memoizedState)||(gt=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,o]}function HO(){}function qO(t,e){var r=Be,o=$t(),l=e(),a=!Jt(o.memoizedState,l);if(a&&(o.memoizedState=l,gt=!0),o=o.queue,Js(GO.bind(null,r,o,t),[t]),o.getSnapshot!==e||a||Qe!==null&&Qe.memoizedState.tag&1){if(r.flags|=2048,sl(9,VO.bind(null,r,o,l,e),void 0,null),Ye===null)throw Error(V(349));Or&30||WO(r,e,l)}return l}function WO(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function VO(t,e,r,o){e.value=r,e.getSnapshot=o,XO(e)&&JO(t)}function GO(t,e,r){return r(function(){XO(e)&&JO(t)})}function XO(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Jt(t,r)}catch{return!0}}function JO(t){var e=xn(t,1);e!==null&&Gt(e,t,1,-1)}function Ep(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fl,lastRenderedState:t},e.queue=t,t=t.dispatch=P1.bind(null,Be,t),[e.memoizedState,t]}function sl(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function KO(){return $t().memoizedState}function pi(t,e,r,o){var l=en();Be.flags|=t,l.memoizedState=sl(1|e,r,void 0,o===void 0?null:o)}function ba(t,e,r,o){var l=$t();o=o===void 0?null:o;var a=void 0;if(Je!==null){var c=Je.memoizedState;if(a=c.destroy,o!==null&&Vs(o,c.deps)){l.memoizedState=sl(e,r,a,o);return}}Be.flags|=t,l.memoizedState=sl(1|e,r,a,o)}function Ip(t,e){return pi(8390656,8,t,e)}function Js(t,e){return ba(2048,8,t,e)}function QO(t,e){return ba(4,2,t,e)}function YO(t,e){return ba(4,4,t,e)}function ZO(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function eh(t,e,r){return r=r!=null?r.concat([t]):null,ba(4,4,ZO.bind(null,e,t),r)}function Ks(){}function th(t,e){var r=$t();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Vs(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function nh(t,e){var r=$t();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Vs(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function rh(t,e,r){return Or&21?(Jt(r,e)||(r=iO(),Be.lanes|=r,hr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=r)}function v1(t,e){var r=Ie;Ie=r!==0&&4>r?r:4,t(!0);var o=Bc.transition;Bc.transition={};try{t(!1),e()}finally{Ie=r,Bc.transition=o}}function oh(){return $t().memoizedState}function w1(t,e,r){var o=zn(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},lh(t))ih(e,r);else if(r=DO(t,e,r,o),r!==null){var l=dt();Gt(r,t,o,l),ah(r,e,o)}}function P1(t,e,r){var o=zn(t),l={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(lh(t))ih(e,l);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var c=e.lastRenderedState,f=a(c,r);if(l.hasEagerState=!0,l.eagerState=f,Jt(f,c)){var u=e.interleaved;u===null?(l.next=l,zs(e)):(l.next=u.next,u.next=l),e.interleaved=l;return}}catch{}finally{}r=DO(t,e,l,o),r!==null&&(l=dt(),Gt(r,t,o,l),ah(r,e,o))}}function lh(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function ih(t,e){Uo=Mi=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function ah(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Es(t,r)}}var $i={readContext:Mt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},S1={readContext:Mt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:Ip,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,pi(4194308,4,ZO.bind(null,e,t),r)},useLayoutEffect:function(t,e){return pi(4194308,4,t,e)},useInsertionEffect:function(t,e){return pi(4,2,t,e)},useMemo:function(t,e){var r=en();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=en();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=w1.bind(null,Be,t),[o.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Ep,useDebugValue:Ks,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Ep(!1),e=t[0];return t=v1.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=Be,l=en();if(Le){if(r===void 0)throw Error(V(407));r=r()}else{if(r=e(),Ye===null)throw Error(V(349));Or&30||WO(o,e,r)}l.memoizedState=r;var a={value:r,getSnapshot:e};return l.queue=a,Ip(GO.bind(null,o,a,t),[t]),o.flags|=2048,sl(9,VO.bind(null,o,a,r,e),void 0,null),r},useId:function(){var t=en(),e=Ye.identifierPrefix;if(Le){var r=bn,o=hn;r=(o&~(1<<32-Vt(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=cl++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=x1++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_1={readContext:Mt,useCallback:th,useContext:Mt,useEffect:Js,useImperativeHandle:eh,useInsertionEffect:QO,useLayoutEffect:YO,useMemo:nh,useReducer:zc,useRef:KO,useState:function(){return zc(fl)},useDebugValue:Ks,useDeferredValue:function(t){var e=$t();return rh(e,Je.memoizedState,t)},useTransition:function(){var t=zc(fl)[0],e=$t().memoizedState;return[t,e]},useMutableSource:HO,useSyncExternalStore:qO,useId:oh,unstable_isNewReconciler:!1},E1={readContext:Mt,useCallback:th,useContext:Mt,useEffect:Js,useImperativeHandle:eh,useInsertionEffect:QO,useLayoutEffect:YO,useMemo:nh,useReducer:Uc,useRef:KO,useState:function(){return Uc(fl)},useDebugValue:Ks,useDeferredValue:function(t){var e=$t();return Je===null?e.memoizedState=t:rh(e,Je.memoizedState,t)},useTransition:function(){var t=Uc(fl)[0],e=$t().memoizedState;return[t,e]},useMutableSource:HO,useSyncExternalStore:qO,useId:oh,unstable_isNewReconciler:!1};function io(t,e){try{var r="",o=e;do r+=tj(o),o=o.return;while(o);var l=r}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:l,digest:null}}function Hc(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Rf(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var I1=typeof WeakMap=="function"?WeakMap:Map;function ch(t,e,r){r=mn(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){zi||(zi=!0,qf=o),Rf(t,e)},r}function fh(t,e,r){r=mn(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var l=e.value;r.payload=function(){return o(l)},r.callback=function(){Rf(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Rf(t,e),typeof o!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})}),r}function kp(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new I1;var l=new Set;o.set(e,l)}else l=o.get(e),l===void 0&&(l=new Set,o.set(e,l));l.has(r)||(l.add(r),t=U1.bind(null,t,e,r),e.then(t,t))}function Np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cp(t,e,r,o,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=mn(-1,1),e.tag=2,$n(r,e,1))),r.lanes|=1),t)}var k1=Pn.ReactCurrentOwner,gt=!1;function pt(t,e,r,o){e.child=t===null?zO(e,null,r,o):oo(e,t.child,r,o)}function Tp(t,e,r,o,l){r=r.render;var a=e.ref;return Zr(e,l),o=Gs(t,e,r,o,a,l),r=Xs(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,vn(t,e,l)):(Le&&r&&Ls(e),e.flags|=1,pt(t,e,o,l),e.child)}function Ap(t,e,r,o,l){if(t===null){var a=r.type;return typeof a=="function"&&!ou(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,sh(t,e,a,o,l)):(t=hi(r.type,null,o,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&l)){var c=a.memoizedProps;if(r=r.compare,r=r!==null?r:nl,r(c,o)&&t.ref===e.ref)return vn(t,e,l)}return e.flags|=1,t=Un(a,o),t.ref=e.ref,t.return=e,e.child=t}function sh(t,e,r,o,l){if(t!==null){var a=t.memoizedProps;if(nl(a,o)&&t.ref===e.ref)if(gt=!1,e.pendingProps=o=a,(t.lanes&l)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,vn(t,e,l)}return Lf(t,e,r,o,l)}function uh(t,e,r){var o=e.pendingProps,l=o.children,a=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Xr,St),St|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(Xr,St),St|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,Ne(Xr,St),St|=o}else a!==null?(o=a.baseLanes|r,e.memoizedState=null):o=r,Ne(Xr,St),St|=o;return pt(t,e,l,r),e.child}function ph(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Lf(t,e,r,o,l){var a=xt(r)?dr:ft.current;return a=no(e,a),Zr(e,l),r=Gs(t,e,r,o,a,l),o=Xs(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,vn(t,e,l)):(Le&&o&&Ls(e),e.flags|=1,pt(t,e,r,l),e.child)}function Rp(t,e,r,o,l){if(xt(r)){var a=!0;Ci(e)}else a=!1;if(Zr(e,l),e.stateNode===null)di(t,e),$O(e,r,o),Af(e,r,o,l),o=!0;else if(t===null){var c=e.stateNode,f=e.memoizedProps;c.props=f;var u=c.context,p=r.contextType;typeof p=="object"&&p!==null?p=Mt(p):(p=xt(r)?dr:ft.current,p=no(e,p));var y=r.getDerivedStateFromProps,d=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function";d||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==o||u!==p)&&Sp(e,c,o,p),In=!1;var O=e.memoizedState;c.state=O,Di(e,o,c,l),u=e.memoizedState,f!==o||O!==u||jt.current||In?(typeof y=="function"&&(Tf(e,r,y,o),u=e.memoizedState),(f=In||Pp(e,r,f,o,O,u,p))?(d||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=u),c.props=o,c.state=u,c.context=p,o=f):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{c=e.stateNode,FO(t,e),f=e.memoizedProps,p=e.type===e.elementType?f:Ut(e.type,f),c.props=p,d=e.pendingProps,O=c.context,u=r.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=xt(r)?dr:ft.current,u=no(e,u));var S=r.getDerivedStateFromProps;(y=typeof S=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(f!==d||O!==u)&&Sp(e,c,o,u),In=!1,O=e.memoizedState,c.state=O,Di(e,o,c,l);var j=e.memoizedState;f!==d||O!==j||jt.current||In?(typeof S=="function"&&(Tf(e,r,S,o),j=e.memoizedState),(p=In||Pp(e,r,p,o,O,j,u)||!1)?(y||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,j,u),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,j,u)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||f===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=j),c.props=o,c.state=j,c.context=u,o=p):(typeof c.componentDidUpdate!="function"||f===t.memoizedProps&&O===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||f===t.memoizedProps&&O===t.memoizedState||(e.flags|=1024),o=!1)}return Df(t,e,r,o,a,l)}function Df(t,e,r,o,l,a){ph(t,e);var c=(e.flags&128)!==0;if(!o&&!c)return l&&gp(e,r,!1),vn(t,e,a);o=e.stateNode,k1.current=e;var f=c&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&c?(e.child=oo(e,t.child,null,a),e.child=oo(e,null,f,a)):pt(t,e,f,a),e.memoizedState=o.state,l&&gp(e,r,!0),e.child}function dh(t){var e=t.stateNode;e.pendingContext?mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mp(t,e.context,!1),Hs(t,e.containerInfo)}function Lp(t,e,r,o,l){return ro(),Fs(l),e.flags|=256,pt(t,e,r,o),e.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function yh(t,e,r){var o=e.pendingProps,l=$e.current,a=!1,c=(e.flags&128)!==0,f;if((f=c)||(f=t!==null&&t.memoizedState===null?!1:(l&2)!==0),f?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),Ne($e,l&1),t===null)return Nf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(c=o.children,t=o.fallback,a?(o=e.mode,a=e.child,c={mode:"hidden",children:c},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=c):a=ja(c,o,0,null),t=pr(t,o,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Mf(r),e.memoizedState=Ff,t):Qs(e,c));if(l=t.memoizedState,l!==null&&(f=l.dehydrated,f!==null))return N1(t,e,c,o,f,l,r);if(a){a=o.fallback,c=e.mode,l=t.child,f=l.sibling;var u={mode:"hidden",children:o.children};return!(c&1)&&e.child!==l?(o=e.child,o.childLanes=0,o.pendingProps=u,e.deletions=null):(o=Un(l,u),o.subtreeFlags=l.subtreeFlags&14680064),f!==null?a=Un(f,a):(a=pr(a,c,r,null),a.flags|=2),a.return=e,o.return=e,o.sibling=a,e.child=o,o=a,a=e.child,c=t.child.memoizedState,c=c===null?Mf(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=t.childLanes&~r,e.memoizedState=Ff,o}return a=t.child,t=a.sibling,o=Un(a,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function Qs(t,e){return e=ja({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xl(t,e,r,o){return o!==null&&Fs(o),oo(e,t.child,null,r),t=Qs(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N1(t,e,r,o,l,a,c){if(r)return e.flags&256?(e.flags&=-257,o=Hc(Error(V(422))),Xl(t,e,c,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=o.fallback,l=e.mode,o=ja({mode:"visible",children:o.children},l,0,null),a=pr(a,l,c,null),a.flags|=2,o.return=e,a.return=e,o.sibling=a,e.child=o,e.mode&1&&oo(e,t.child,null,c),e.child.memoizedState=Mf(c),e.memoizedState=Ff,a);if(!(e.mode&1))return Xl(t,e,c,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var f=o.dgst;return o=f,a=Error(V(419)),o=Hc(a,o,void 0),Xl(t,e,c,o)}if(f=(c&t.childLanes)!==0,gt||f){if(o=Ye,o!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(o.suspendedLanes|c)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,xn(t,l),Gt(o,t,l,-1))}return ru(),o=Hc(Error(V(421))),Xl(t,e,c,o)}return l.data==="$?"?(e.flags|=128,e.child=t.child,e=H1.bind(null,t),l._reactRetry=e,null):(t=a.treeContext,_t=Mn(l.nextSibling),It=e,Le=!0,qt=null,t!==null&&(At[Rt++]=hn,At[Rt++]=bn,At[Rt++]=yr,hn=t.id,bn=t.overflow,yr=e),e=Qs(e,o.children),e.flags|=4096,e)}function Dp(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Cf(t.return,e,r)}function qc(t,e,r,o,l){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:l}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=l)}function Oh(t,e,r){var o=e.pendingProps,l=o.revealOrder,a=o.tail;if(pt(t,e,o.children,r),o=$e.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Dp(t,r,e);else if(t.tag===19)Dp(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Ne($e,o),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(r=e.child,l=null;r!==null;)t=r.alternate,t!==null&&Fi(t)===null&&(l=r),r=r.sibling;r=l,r===null?(l=e.child,e.child=null):(l=r.sibling,r.sibling=null),qc(e,!1,l,r,a);break;case"backwards":for(r=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Fi(t)===null){e.child=l;break}t=l.sibling,l.sibling=r,r=l,l=t}qc(e,!0,r,null,a);break;case"together":qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function di(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),hr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,r=Un(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=Un(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function C1(t,e,r){switch(e.tag){case 3:dh(e),ro();break;case 5:UO(e);break;case 1:xt(e.type)&&Ci(e);break;case 4:Hs(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,l=e.memoizedProps.value;Ne(Ri,o._currentValue),o._currentValue=l;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Ne($e,$e.current&1),e.flags|=128,null):r&e.child.childLanes?yh(t,e,r):(Ne($e,$e.current&1),t=vn(t,e,r),t!==null?t.sibling:null);Ne($e,$e.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return Oh(t,e,r);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ne($e,$e.current),o)break;return null;case 22:case 23:return e.lanes=0,uh(t,e,r)}return vn(t,e,r)}var hh,$f,bh,mh;hh=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};$f=function(){};bh=function(t,e,r,o){var l=t.memoizedProps;if(l!==o){t=e.stateNode,fr(an.current);var a=null;switch(r){case"input":l=af(t,l),o=af(t,o),a=[];break;case"select":l=ze({},l,{value:void 0}),o=ze({},o,{value:void 0}),a=[];break;case"textarea":l=sf(t,l),o=sf(t,o),a=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=ki)}pf(r,o);var c;r=null;for(p in l)if(!o.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var f=l[p];for(c in f)f.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Jo.hasOwnProperty(p)?a||(a=[]):(a=a||[]).push(p,null));for(p in o){var u=o[p];if(f=l!=null?l[p]:void 0,o.hasOwnProperty(p)&&u!==f&&(u!=null||f!=null))if(p==="style")if(f){for(c in f)!f.hasOwnProperty(c)||u&&u.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in u)u.hasOwnProperty(c)&&f[c]!==u[c]&&(r||(r={}),r[c]=u[c])}else r||(a||(a=[]),a.push(p,r)),r=u;else p==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,f=f?f.__html:void 0,u!=null&&f!==u&&(a=a||[]).push(p,u)):p==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(p,""+u):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Jo.hasOwnProperty(p)?(u!=null&&p==="onScroll"&&Te("scroll",t),a||f===u||(a=[])):(a=a||[]).push(p,u))}r&&(a=a||[]).push("style",r);var p=a;(e.updateQueue=p)&&(e.flags|=4)}};mh=function(t,e,r,o){r!==o&&(e.flags|=4)};function _o(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var l=t.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function T1(t,e,r){var o=e.pendingProps;switch(Ds(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return xt(e.type)&&Ni(),at(e),null;case 3:return o=e.stateNode,lo(),Ae(jt),Ae(ft),Ws(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(Gf(qt),qt=null))),$f(t,e),at(e),null;case 5:qs(e);var l=fr(al.current);if(r=e.type,t!==null&&e.stateNode!=null)bh(t,e,r,o,l),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(V(166));return at(e),null}if(t=fr(an.current),Vl(e)){o=e.stateNode,r=e.type;var a=e.memoizedProps;switch(o[tn]=e,o[ll]=a,t=(e.mode&1)!==0,r){case"dialog":Te("cancel",o),Te("close",o);break;case"iframe":case"object":case"embed":Te("load",o);break;case"video":case"audio":for(l=0;l<Lo.length;l++)Te(Lo[l],o);break;case"source":Te("error",o);break;case"img":case"image":case"link":Te("error",o),Te("load",o);break;case"details":Te("toggle",o);break;case"input":Wu(o,a),Te("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Te("invalid",o);break;case"textarea":Gu(o,a),Te("invalid",o)}pf(r,a),l=null;for(var c in a)if(a.hasOwnProperty(c)){var f=a[c];c==="children"?typeof f=="string"?o.textContent!==f&&(a.suppressHydrationWarning!==!0&&Wl(o.textContent,f,t),l=["children",f]):typeof f=="number"&&o.textContent!==""+f&&(a.suppressHydrationWarning!==!0&&Wl(o.textContent,f,t),l=["children",""+f]):Jo.hasOwnProperty(c)&&f!=null&&c==="onScroll"&&Te("scroll",o)}switch(r){case"input":Fl(o),Vu(o,a,!0);break;case"textarea":Fl(o),Xu(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=ki)}o=l,e.updateQueue=o,o!==null&&(e.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wy(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=c.createElement(r,{is:o.is}):(t=c.createElement(r),r==="select"&&(c=t,o.multiple?c.multiple=!0:o.size&&(c.size=o.size))):t=c.createElementNS(t,r),t[tn]=e,t[ll]=o,hh(t,e,!1,!1),e.stateNode=t;e:{switch(c=df(r,o),r){case"dialog":Te("cancel",t),Te("close",t),l=o;break;case"iframe":case"object":case"embed":Te("load",t),l=o;break;case"video":case"audio":for(l=0;l<Lo.length;l++)Te(Lo[l],t);l=o;break;case"source":Te("error",t),l=o;break;case"img":case"image":case"link":Te("error",t),Te("load",t),l=o;break;case"details":Te("toggle",t),l=o;break;case"input":Wu(t,o),l=af(t,o),Te("invalid",t);break;case"option":l=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},l=ze({},o,{value:void 0}),Te("invalid",t);break;case"textarea":Gu(t,o),l=sf(t,o),Te("invalid",t);break;default:l=o}pf(r,l),f=l;for(a in f)if(f.hasOwnProperty(a)){var u=f[a];a==="style"?Xy(t,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Vy(t,u)):a==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Ko(t,u):typeof u=="number"&&Ko(t,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Jo.hasOwnProperty(a)?u!=null&&a==="onScroll"&&Te("scroll",t):u!=null&&xs(t,a,u,c))}switch(r){case"input":Fl(t),Vu(t,o,!1);break;case"textarea":Fl(t),Xu(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Xn(o.value));break;case"select":t.multiple=!!o.multiple,a=o.value,a!=null?Jr(t,!!o.multiple,a,!1):o.defaultValue!=null&&Jr(t,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=ki)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)mh(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(V(166));if(r=fr(al.current),fr(an.current),Vl(e)){if(o=e.stateNode,r=e.memoizedProps,o[tn]=e,(a=o.nodeValue!==r)&&(t=It,t!==null))switch(t.tag){case 3:Wl(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(o.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[tn]=e,e.stateNode=o}return at(e),null;case 13:if(Ae($e),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&_t!==null&&e.mode&1&&!(e.flags&128))LO(),ro(),e.flags|=98560,a=!1;else if(a=Vl(e),o!==null&&o.dehydrated!==null){if(t===null){if(!a)throw Error(V(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(V(317));a[tn]=e}else ro(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),a=!1}else qt!==null&&(Gf(qt),qt=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?Ke===0&&(Ke=3):ru())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return lo(),$f(t,e),t===null&&rl(e.stateNode.containerInfo),at(e),null;case 10:return Bs(e.type._context),at(e),null;case 17:return xt(e.type)&&Ni(),at(e),null;case 19:if(Ae($e),a=e.memoizedState,a===null)return at(e),null;if(o=(e.flags&128)!==0,c=a.rendering,c===null)if(o)_o(a,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(c=Fi(t),c!==null){for(e.flags|=128,_o(a,!1),o=c.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)a=r,t=o,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,t=c.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Ne($e,$e.current&1|2),e.child}t=t.sibling}a.tail!==null&&We()>ao&&(e.flags|=128,o=!0,_o(a,!1),e.lanes=4194304)}else{if(!o)if(t=Fi(c),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),_o(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Le)return at(e),null}else 2*We()-a.renderingStartTime>ao&&r!==1073741824&&(e.flags|=128,o=!0,_o(a,!1),e.lanes=4194304);a.isBackwards?(c.sibling=e.child,e.child=c):(r=a.last,r!==null?r.sibling=c:e.child=c,a.last=c)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=We(),e.sibling=null,r=$e.current,Ne($e,o?r&1|2:r&1),e):(at(e),null);case 22:case 23:return nu(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?St&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function A1(t,e){switch(Ds(e),e.tag){case 1:return xt(e.type)&&Ni(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lo(),Ae(jt),Ae(ft),Ws(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qs(e),null;case 13:if(Ae($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));ro()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae($e),null;case 4:return lo(),null;case 10:return Bs(e.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var Jl=!1,ct=!1,R1=typeof WeakSet=="function"?WeakSet:Set,ee=null;function Gr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Ue(t,e,o)}else r.current=null}function Bf(t,e,r){try{r()}catch(o){Ue(t,e,o)}}var Fp=!1;function L1(t,e){if(wf=_i,t=vO(),Rs(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var l=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var c=0,f=-1,u=-1,p=0,y=0,d=t,O=null;t:for(;;){for(var S;d!==r||l!==0&&d.nodeType!==3||(f=c+l),d!==a||o!==0&&d.nodeType!==3||(u=c+o),d.nodeType===3&&(c+=d.nodeValue.length),(S=d.firstChild)!==null;)O=d,d=S;for(;;){if(d===t)break t;if(O===r&&++p===l&&(f=c),O===a&&++y===o&&(u=c),(S=d.nextSibling)!==null)break;d=O,O=d.parentNode}d=S}r=f===-1||u===-1?null:{start:f,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pf={focusedElem:t,selectionRange:r},_i=!1,ee=e;ee!==null;)if(e=ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ee=t;else for(;ee!==null;){e=ee;try{var j=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var x=j.memoizedProps,P=j.memoizedState,m=e.stateNode,h=m.getSnapshotBeforeUpdate(e.elementType===e.type?x:Ut(e.type,x),P);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(v){Ue(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,ee=t;break}ee=e.return}return j=Fp,Fp=!1,j}function Ho(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&t)===t){var a=l.destroy;l.destroy=void 0,a!==void 0&&Bf(e,r,a)}l=l.next}while(l!==o)}}function ma(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function zf(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function gh(t){var e=t.alternate;e!==null&&(t.alternate=null,gh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[ll],delete e[Ef],delete e[b1],delete e[m1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jh(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uf(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=ki));else if(o!==4&&(t=t.child,t!==null))for(Uf(t,e,r),t=t.sibling;t!==null;)Uf(t,e,r),t=t.sibling}function Hf(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Hf(t,e,r),t=t.sibling;t!==null;)Hf(t,e,r),t=t.sibling}var nt=null,Ht=!1;function _n(t,e,r){for(r=r.child;r!==null;)xh(t,e,r),r=r.sibling}function xh(t,e,r){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(sa,r)}catch{}switch(r.tag){case 5:ct||Gr(r,e);case 6:var o=nt,l=Ht;nt=null,_n(t,e,r),nt=o,Ht=l,nt!==null&&(Ht?(t=nt,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):nt.removeChild(r.stateNode));break;case 18:nt!==null&&(Ht?(t=nt,r=r.stateNode,t.nodeType===8?Fc(t.parentNode,r):t.nodeType===1&&Fc(t,r),el(t)):Fc(nt,r.stateNode));break;case 4:o=nt,l=Ht,nt=r.stateNode.containerInfo,Ht=!0,_n(t,e,r),nt=o,Ht=l;break;case 0:case 11:case 14:case 15:if(!ct&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var a=l,c=a.destroy;a=a.tag,c!==void 0&&(a&2||a&4)&&Bf(r,e,c),l=l.next}while(l!==o)}_n(t,e,r);break;case 1:if(!ct&&(Gr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(f){Ue(r,e,f)}_n(t,e,r);break;case 21:_n(t,e,r);break;case 22:r.mode&1?(ct=(o=ct)||r.memoizedState!==null,_n(t,e,r),ct=o):_n(t,e,r);break;default:_n(t,e,r)}}function $p(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new R1),e.forEach(function(o){var l=q1.bind(null,t,o);r.has(o)||(r.add(o),o.then(l,l))})}}function zt(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var l=r[o];try{var a=t,c=e,f=c;e:for(;f!==null;){switch(f.tag){case 5:nt=f.stateNode,Ht=!1;break e;case 3:nt=f.stateNode.containerInfo,Ht=!0;break e;case 4:nt=f.stateNode.containerInfo,Ht=!0;break e}f=f.return}if(nt===null)throw Error(V(160));xh(a,c,l),nt=null,Ht=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(p){Ue(l,e,p)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vh(e,t),e=e.sibling}function vh(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),Zt(t),o&4){try{Ho(3,t,t.return),ma(3,t)}catch(x){Ue(t,t.return,x)}try{Ho(5,t,t.return)}catch(x){Ue(t,t.return,x)}}break;case 1:zt(e,t),Zt(t),o&512&&r!==null&&Gr(r,r.return);break;case 5:if(zt(e,t),Zt(t),o&512&&r!==null&&Gr(r,r.return),t.flags&32){var l=t.stateNode;try{Ko(l,"")}catch(x){Ue(t,t.return,x)}}if(o&4&&(l=t.stateNode,l!=null)){var a=t.memoizedProps,c=r!==null?r.memoizedProps:a,f=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{f==="input"&&a.type==="radio"&&a.name!=null&&Hy(l,a),df(f,c);var p=df(f,a);for(c=0;c<u.length;c+=2){var y=u[c],d=u[c+1];y==="style"?Xy(l,d):y==="dangerouslySetInnerHTML"?Vy(l,d):y==="children"?Ko(l,d):xs(l,y,d,p)}switch(f){case"input":cf(l,a);break;case"textarea":qy(l,a);break;case"select":var O=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?Jr(l,!!a.multiple,S,!1):O!==!!a.multiple&&(a.defaultValue!=null?Jr(l,!!a.multiple,a.defaultValue,!0):Jr(l,!!a.multiple,a.multiple?[]:"",!1))}l[ll]=a}catch(x){Ue(t,t.return,x)}}break;case 6:if(zt(e,t),Zt(t),o&4){if(t.stateNode===null)throw Error(V(162));l=t.stateNode,a=t.memoizedProps;try{l.nodeValue=a}catch(x){Ue(t,t.return,x)}}break;case 3:if(zt(e,t),Zt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{el(e.containerInfo)}catch(x){Ue(t,t.return,x)}break;case 4:zt(e,t),Zt(t);break;case 13:zt(e,t),Zt(t),l=t.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(eu=We())),o&4&&$p(t);break;case 22:if(y=r!==null&&r.memoizedState!==null,t.mode&1?(ct=(p=ct)||y,zt(e,t),ct=p):zt(e,t),Zt(t),o&8192){if(p=t.memoizedState!==null,(t.stateNode.isHidden=p)&&!y&&t.mode&1)for(ee=t,y=t.child;y!==null;){for(d=ee=y;ee!==null;){switch(O=ee,S=O.child,O.tag){case 0:case 11:case 14:case 15:Ho(4,O,O.return);break;case 1:Gr(O,O.return);var j=O.stateNode;if(typeof j.componentWillUnmount=="function"){o=O,r=O.return;try{e=o,j.props=e.memoizedProps,j.state=e.memoizedState,j.componentWillUnmount()}catch(x){Ue(o,r,x)}}break;case 5:Gr(O,O.return);break;case 22:if(O.memoizedState!==null){zp(d);continue}}S!==null?(S.return=O,ee=S):zp(d)}y=y.sibling}e:for(y=null,d=t;;){if(d.tag===5){if(y===null){y=d;try{l=d.stateNode,p?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(f=d.stateNode,u=d.memoizedProps.style,c=u!=null&&u.hasOwnProperty("display")?u.display:null,f.style.display=Gy("display",c))}catch(x){Ue(t,t.return,x)}}}else if(d.tag===6){if(y===null)try{d.stateNode.nodeValue=p?"":d.memoizedProps}catch(x){Ue(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;y===d&&(y=null),d=d.return}y===d&&(y=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zt(e,t),Zt(t),o&4&&$p(t);break;case 21:break;default:zt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(jh(r)){var o=r;break e}r=r.return}throw Error(V(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(Ko(l,""),o.flags&=-33);var a=Mp(t);Hf(t,a,l);break;case 3:case 4:var c=o.stateNode.containerInfo,f=Mp(t);Uf(t,f,c);break;default:throw Error(V(161))}}catch(u){Ue(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function D1(t,e,r){ee=t,wh(t)}function wh(t,e,r){for(var o=(t.mode&1)!==0;ee!==null;){var l=ee,a=l.child;if(l.tag===22&&o){var c=l.memoizedState!==null||Jl;if(!c){var f=l.alternate,u=f!==null&&f.memoizedState!==null||ct;f=Jl;var p=ct;if(Jl=c,(ct=u)&&!p)for(ee=l;ee!==null;)c=ee,u=c.child,c.tag===22&&c.memoizedState!==null?Up(l):u!==null?(u.return=c,ee=u):Up(l);for(;a!==null;)ee=a,wh(a),a=a.sibling;ee=l,Jl=f,ct=p}Bp(t)}else l.subtreeFlags&8772&&a!==null?(a.return=l,ee=a):Bp(t)}}function Bp(t){for(;ee!==null;){var e=ee;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||ma(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!ct)if(r===null)o.componentDidMount();else{var l=e.elementType===e.type?r.memoizedProps:Ut(e.type,r.memoizedProps);o.componentDidUpdate(l,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&wp(e,a,o);break;case 3:var c=e.updateQueue;if(c!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}wp(e,c,r)}break;case 5:var f=e.stateNode;if(r===null&&e.flags&4){r=f;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var p=e.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var d=y.dehydrated;d!==null&&el(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}ct||e.flags&512&&zf(e)}catch(O){Ue(e,e.return,O)}}if(e===t){ee=null;break}if(r=e.sibling,r!==null){r.return=e.return,ee=r;break}ee=e.return}}function zp(t){for(;ee!==null;){var e=ee;if(e===t){ee=null;break}var r=e.sibling;if(r!==null){r.return=e.return,ee=r;break}ee=e.return}}function Up(t){for(;ee!==null;){var e=ee;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{ma(4,e)}catch(u){Ue(e,r,u)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var l=e.return;try{o.componentDidMount()}catch(u){Ue(e,l,u)}}var a=e.return;try{zf(e)}catch(u){Ue(e,a,u)}break;case 5:var c=e.return;try{zf(e)}catch(u){Ue(e,c,u)}}}catch(u){Ue(e,e.return,u)}if(e===t){ee=null;break}var f=e.sibling;if(f!==null){f.return=e.return,ee=f;break}ee=e.return}}var F1=Math.ceil,Bi=Pn.ReactCurrentDispatcher,Ys=Pn.ReactCurrentOwner,Dt=Pn.ReactCurrentBatchConfig,ve=0,Ye=null,Ge=null,rt=0,St=0,Xr=Qn(0),Ke=0,ul=null,hr=0,ga=0,Zs=0,qo=null,mt=null,eu=0,ao=1/0,yn=null,zi=!1,qf=null,Bn=null,Kl=!1,Tn=null,Ui=0,Wo=0,Wf=null,yi=-1,Oi=0;function dt(){return ve&6?We():yi!==-1?yi:yi=We()}function zn(t){return t.mode&1?ve&2&&rt!==0?rt&-rt:j1.transition!==null?(Oi===0&&(Oi=iO()),Oi):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:dO(t.type)),t):1}function Gt(t,e,r,o){if(50<Wo)throw Wo=0,Wf=null,Error(V(185));wl(t,r,o),(!(ve&2)||t!==Ye)&&(t===Ye&&(!(ve&2)&&(ga|=r),Ke===4&&Nn(t,rt)),vt(t,o),r===1&&ve===0&&!(e.mode&1)&&(ao=We()+500,Oa&&Yn()))}function vt(t,e){var r=t.callbackNode;jj(t,e);var o=Si(t,t===Ye?rt:0);if(o===0)r!==null&&Qu(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&Qu(r),e===1)t.tag===0?g1(Hp.bind(null,t)):TO(Hp.bind(null,t)),O1(function(){!(ve&6)&&Yn()}),r=null;else{switch(aO(o)){case 1:r=_s;break;case 4:r=oO;break;case 16:r=Pi;break;case 536870912:r=lO;break;default:r=Pi}r=Ch(r,Ph.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function Ph(t,e){if(yi=-1,Oi=0,ve&6)throw Error(V(327));var r=t.callbackNode;if(eo()&&t.callbackNode!==r)return null;var o=Si(t,t===Ye?rt:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Hi(t,o);else{e=o;var l=ve;ve|=2;var a=_h();(Ye!==t||rt!==e)&&(yn=null,ao=We()+500,ur(t,e));do try{B1();break}catch(f){Sh(t,f)}while(!0);$s(),Bi.current=a,ve=l,Ge!==null?e=0:(Ye=null,rt=0,e=Ke)}if(e!==0){if(e===2&&(l=mf(t),l!==0&&(o=l,e=Vf(t,l))),e===1)throw r=ul,ur(t,0),Nn(t,o),vt(t,We()),r;if(e===6)Nn(t,o);else{if(l=t.current.alternate,!(o&30)&&!M1(l)&&(e=Hi(t,o),e===2&&(a=mf(t),a!==0&&(o=a,e=Vf(t,a))),e===1))throw r=ul,ur(t,0),Nn(t,o),vt(t,We()),r;switch(t.finishedWork=l,t.finishedLanes=o,e){case 0:case 1:throw Error(V(345));case 2:or(t,mt,yn);break;case 3:if(Nn(t,o),(o&130023424)===o&&(e=eu+500-We(),10<e)){if(Si(t,0)!==0)break;if(l=t.suspendedLanes,(l&o)!==o){dt(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=_f(or.bind(null,t,mt,yn),e);break}or(t,mt,yn);break;case 4:if(Nn(t,o),(o&4194240)===o)break;for(e=t.eventTimes,l=-1;0<o;){var c=31-Vt(o);a=1<<c,c=e[c],c>l&&(l=c),o&=~a}if(o=l,o=We()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*F1(o/1960))-o,10<o){t.timeoutHandle=_f(or.bind(null,t,mt,yn),o);break}or(t,mt,yn);break;case 5:or(t,mt,yn);break;default:throw Error(V(329))}}}return vt(t,We()),t.callbackNode===r?Ph.bind(null,t):null}function Vf(t,e){var r=qo;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=Hi(t,e),t!==2&&(e=mt,mt=r,e!==null&&Gf(e)),t}function Gf(t){mt===null?mt=t:mt.push.apply(mt,t)}function M1(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var l=r[o],a=l.getSnapshot;l=l.value;try{if(!Jt(a(),l))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nn(t,e){for(e&=~Zs,e&=~ga,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Vt(e),o=1<<r;t[r]=-1,e&=~o}}function Hp(t){if(ve&6)throw Error(V(327));eo();var e=Si(t,0);if(!(e&1))return vt(t,We()),null;var r=Hi(t,e);if(t.tag!==0&&r===2){var o=mf(t);o!==0&&(e=o,r=Vf(t,o))}if(r===1)throw r=ul,ur(t,0),Nn(t,e),vt(t,We()),r;if(r===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,or(t,mt,yn),vt(t,We()),null}function tu(t,e){var r=ve;ve|=1;try{return t(e)}finally{ve=r,ve===0&&(ao=We()+500,Oa&&Yn())}}function br(t){Tn!==null&&Tn.tag===0&&!(ve&6)&&eo();var e=ve;ve|=1;var r=Dt.transition,o=Ie;try{if(Dt.transition=null,Ie=1,t)return t()}finally{Ie=o,Dt.transition=r,ve=e,!(ve&6)&&Yn()}}function nu(){St=Xr.current,Ae(Xr)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,y1(r)),Ge!==null)for(r=Ge.return;r!==null;){var o=r;switch(Ds(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ni();break;case 3:lo(),Ae(jt),Ae(ft),Ws();break;case 5:qs(o);break;case 4:lo();break;case 13:Ae($e);break;case 19:Ae($e);break;case 10:Bs(o.type._context);break;case 22:case 23:nu()}r=r.return}if(Ye=t,Ge=t=Un(t.current,null),rt=St=e,Ke=0,ul=null,Zs=ga=hr=0,mt=qo=null,cr!==null){for(e=0;e<cr.length;e++)if(r=cr[e],o=r.interleaved,o!==null){r.interleaved=null;var l=o.next,a=r.pending;if(a!==null){var c=a.next;a.next=l,o.next=c}r.pending=o}cr=null}return t}function Sh(t,e){do{var r=Ge;try{if($s(),ui.current=$i,Mi){for(var o=Be.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}Mi=!1}if(Or=0,Qe=Je=Be=null,Uo=!1,cl=0,Ys.current=null,r===null||r.return===null){Ke=1,ul=e,Ge=null;break}e:{var a=t,c=r.return,f=r,u=e;if(e=rt,f.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var p=u,y=f,d=y.tag;if(!(y.mode&1)&&(d===0||d===11||d===15)){var O=y.alternate;O?(y.updateQueue=O.updateQueue,y.memoizedState=O.memoizedState,y.lanes=O.lanes):(y.updateQueue=null,y.memoizedState=null)}var S=Np(c);if(S!==null){S.flags&=-257,Cp(S,c,f,a,e),S.mode&1&&kp(a,p,e),e=S,u=p;var j=e.updateQueue;if(j===null){var x=new Set;x.add(u),e.updateQueue=x}else j.add(u);break e}else{if(!(e&1)){kp(a,p,e),ru();break e}u=Error(V(426))}}else if(Le&&f.mode&1){var P=Np(c);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Cp(P,c,f,a,e),Fs(io(u,f));break e}}a=u=io(u,f),Ke!==4&&(Ke=2),qo===null?qo=[a]:qo.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var m=ch(a,u,e);vp(a,m);break e;case 1:f=u;var h=a.type,b=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Bn===null||!Bn.has(b)))){a.flags|=65536,e&=-e,a.lanes|=e;var v=fh(a,f,e);vp(a,v);break e}}a=a.return}while(a!==null)}Ih(r)}catch(E){e=E,Ge===r&&r!==null&&(Ge=r=r.return);continue}break}while(!0)}function _h(){var t=Bi.current;return Bi.current=$i,t===null?$i:t}function ru(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Ye===null||!(hr&268435455)&&!(ga&268435455)||Nn(Ye,rt)}function Hi(t,e){var r=ve;ve|=2;var o=_h();(Ye!==t||rt!==e)&&(yn=null,ur(t,e));do try{$1();break}catch(l){Sh(t,l)}while(!0);if($s(),ve=r,Bi.current=o,Ge!==null)throw Error(V(261));return Ye=null,rt=0,Ke}function $1(){for(;Ge!==null;)Eh(Ge)}function B1(){for(;Ge!==null&&!uj();)Eh(Ge)}function Eh(t){var e=Nh(t.alternate,t,St);t.memoizedProps=t.pendingProps,e===null?Ih(t):Ge=e,Ys.current=null}function Ih(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=A1(r,e),r!==null){r.flags&=32767,Ge=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,Ge=null;return}}else if(r=T1(r,e,St),r!==null){Ge=r;return}if(e=e.sibling,e!==null){Ge=e;return}Ge=e=t}while(e!==null);Ke===0&&(Ke=5)}function or(t,e,r){var o=Ie,l=Dt.transition;try{Dt.transition=null,Ie=1,z1(t,e,r,o)}finally{Dt.transition=l,Ie=o}return null}function z1(t,e,r,o){do eo();while(Tn!==null);if(ve&6)throw Error(V(327));r=t.finishedWork;var l=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(xj(t,a),t===Ye&&(Ge=Ye=null,rt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Kl||(Kl=!0,Ch(Pi,function(){return eo(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Dt.transition,Dt.transition=null;var c=Ie;Ie=1;var f=ve;ve|=4,Ys.current=null,L1(t,r),vh(r,t),a1(Pf),_i=!!wf,Pf=wf=null,t.current=r,D1(r),pj(),ve=f,Ie=c,Dt.transition=a}else t.current=r;if(Kl&&(Kl=!1,Tn=t,Ui=l),a=t.pendingLanes,a===0&&(Bn=null),Oj(r.stateNode),vt(t,We()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)l=e[r],o(l.value,{componentStack:l.stack,digest:l.digest});if(zi)throw zi=!1,t=qf,qf=null,t;return Ui&1&&t.tag!==0&&eo(),a=t.pendingLanes,a&1?t===Wf?Wo++:(Wo=0,Wf=t):Wo=0,Yn(),null}function eo(){if(Tn!==null){var t=aO(Ui),e=Dt.transition,r=Ie;try{if(Dt.transition=null,Ie=16>t?16:t,Tn===null)var o=!1;else{if(t=Tn,Tn=null,Ui=0,ve&6)throw Error(V(331));var l=ve;for(ve|=4,ee=t.current;ee!==null;){var a=ee,c=a.child;if(ee.flags&16){var f=a.deletions;if(f!==null){for(var u=0;u<f.length;u++){var p=f[u];for(ee=p;ee!==null;){var y=ee;switch(y.tag){case 0:case 11:case 15:Ho(8,y,a)}var d=y.child;if(d!==null)d.return=y,ee=d;else for(;ee!==null;){y=ee;var O=y.sibling,S=y.return;if(gh(y),y===p){ee=null;break}if(O!==null){O.return=S,ee=O;break}ee=S}}}var j=a.alternate;if(j!==null){var x=j.child;if(x!==null){j.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}ee=a}}if(a.subtreeFlags&2064&&c!==null)c.return=a,ee=c;else e:for(;ee!==null;){if(a=ee,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Ho(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,ee=m;break e}ee=a.return}}var h=t.current;for(ee=h;ee!==null;){c=ee;var b=c.child;if(c.subtreeFlags&2064&&b!==null)b.return=c,ee=b;else e:for(c=h;ee!==null;){if(f=ee,f.flags&2048)try{switch(f.tag){case 0:case 11:case 15:ma(9,f)}}catch(E){Ue(f,f.return,E)}if(f===c){ee=null;break e}var v=f.sibling;if(v!==null){v.return=f.return,ee=v;break e}ee=f.return}}if(ve=l,Yn(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(sa,t)}catch{}o=!0}return o}finally{Ie=r,Dt.transition=e}}return!1}function qp(t,e,r){e=io(r,e),e=ch(t,e,1),t=$n(t,e,1),e=dt(),t!==null&&(wl(t,1,e),vt(t,e))}function Ue(t,e,r){if(t.tag===3)qp(t,t,r);else for(;e!==null;){if(e.tag===3){qp(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Bn===null||!Bn.has(o))){t=io(r,t),t=fh(e,t,1),e=$n(e,t,1),t=dt(),e!==null&&(wl(e,1,t),vt(e,t));break}}e=e.return}}function U1(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&r,Ye===t&&(rt&r)===r&&(Ke===4||Ke===3&&(rt&130023424)===rt&&500>We()-eu?ur(t,0):Zs|=r),vt(t,e)}function kh(t,e){e===0&&(t.mode&1?(e=Bl,Bl<<=1,!(Bl&130023424)&&(Bl=4194304)):e=1);var r=dt();t=xn(t,e),t!==null&&(wl(t,e,r),vt(t,r))}function H1(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),kh(t,r)}function q1(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,l=t.memoizedState;l!==null&&(r=l.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(V(314))}o!==null&&o.delete(e),kh(t,r)}var Nh;Nh=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||jt.current)gt=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return gt=!1,C1(t,e,r);gt=!!(t.flags&131072)}else gt=!1,Le&&e.flags&1048576&&AO(e,Ai,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;di(t,e),t=e.pendingProps;var l=no(e,ft.current);Zr(e,r),l=Gs(null,e,o,t,l,r);var a=Xs();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(o)?(a=!0,Ci(e)):a=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Us(e),l.updater=ha,e.stateNode=l,l._reactInternals=e,Af(e,o,t,r),e=Df(null,e,o,!0,a,r)):(e.tag=0,Le&&a&&Ls(e),pt(null,e,l,r),e=e.child),e;case 16:o=e.elementType;e:{switch(di(t,e),t=e.pendingProps,l=o._init,o=l(o._payload),e.type=o,l=e.tag=V1(o),t=Ut(o,t),l){case 0:e=Lf(null,e,o,t,r);break e;case 1:e=Rp(null,e,o,t,r);break e;case 11:e=Tp(null,e,o,t,r);break e;case 14:e=Ap(null,e,o,Ut(o.type,t),r);break e}throw Error(V(306,o,""))}return e;case 0:return o=e.type,l=e.pendingProps,l=e.elementType===o?l:Ut(o,l),Lf(t,e,o,l,r);case 1:return o=e.type,l=e.pendingProps,l=e.elementType===o?l:Ut(o,l),Rp(t,e,o,l,r);case 3:e:{if(dh(e),t===null)throw Error(V(387));o=e.pendingProps,a=e.memoizedState,l=a.element,FO(t,e),Di(e,o,null,r);var c=e.memoizedState;if(o=c.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){l=io(Error(V(423)),e),e=Lp(t,e,o,r,l);break e}else if(o!==l){l=io(Error(V(424)),e),e=Lp(t,e,o,r,l);break e}else for(_t=Mn(e.stateNode.containerInfo.firstChild),It=e,Le=!0,qt=null,r=zO(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ro(),o===l){e=vn(t,e,r);break e}pt(t,e,o,r)}e=e.child}return e;case 5:return UO(e),t===null&&Nf(e),o=e.type,l=e.pendingProps,a=t!==null?t.memoizedProps:null,c=l.children,Sf(o,l)?c=null:a!==null&&Sf(o,a)&&(e.flags|=32),ph(t,e),pt(t,e,c,r),e.child;case 6:return t===null&&Nf(e),null;case 13:return yh(t,e,r);case 4:return Hs(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=oo(e,null,o,r):pt(t,e,o,r),e.child;case 11:return o=e.type,l=e.pendingProps,l=e.elementType===o?l:Ut(o,l),Tp(t,e,o,l,r);case 7:return pt(t,e,e.pendingProps,r),e.child;case 8:return pt(t,e,e.pendingProps.children,r),e.child;case 12:return pt(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(o=e.type._context,l=e.pendingProps,a=e.memoizedProps,c=l.value,Ne(Ri,o._currentValue),o._currentValue=c,a!==null)if(Jt(a.value,c)){if(a.children===l.children&&!jt.current){e=vn(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var f=a.dependencies;if(f!==null){c=a.child;for(var u=f.firstContext;u!==null;){if(u.context===o){if(a.tag===1){u=mn(-1,r&-r),u.tag=2;var p=a.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?u.next=u:(u.next=y.next,y.next=u),p.pending=u}}a.lanes|=r,u=a.alternate,u!==null&&(u.lanes|=r),Cf(a.return,r,e),f.lanes|=r;break}u=u.next}}else if(a.tag===10)c=a.type===e.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(V(341));c.lanes|=r,f=c.alternate,f!==null&&(f.lanes|=r),Cf(c,r,e),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===e){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}pt(t,e,l.children,r),e=e.child}return e;case 9:return l=e.type,o=e.pendingProps.children,Zr(e,r),l=Mt(l),o=o(l),e.flags|=1,pt(t,e,o,r),e.child;case 14:return o=e.type,l=Ut(o,e.pendingProps),l=Ut(o.type,l),Ap(t,e,o,l,r);case 15:return sh(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,l=e.pendingProps,l=e.elementType===o?l:Ut(o,l),di(t,e),e.tag=1,xt(o)?(t=!0,Ci(e)):t=!1,Zr(e,r),$O(e,o,l),Af(e,o,l,r),Df(null,e,o,!0,t,r);case 19:return Oh(t,e,r);case 22:return uh(t,e,r)}throw Error(V(156,e.tag))};function Ch(t,e){return rO(t,e)}function W1(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,r,o){return new W1(t,e,r,o)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function V1(t){if(typeof t=="function")return ou(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ws)return 11;if(t===Ps)return 14}return 2}function Un(t,e){var r=t.alternate;return r===null?(r=Lt(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function hi(t,e,r,o,l,a){var c=2;if(o=t,typeof t=="function")ou(t)&&(c=1);else if(typeof t=="string")c=5;else e:switch(t){case Mr:return pr(r.children,l,a,e);case vs:c=8,l|=8;break;case nf:return t=Lt(12,r,e,l|2),t.elementType=nf,t.lanes=a,t;case rf:return t=Lt(13,r,e,l),t.elementType=rf,t.lanes=a,t;case of:return t=Lt(19,r,e,l),t.elementType=of,t.lanes=a,t;case By:return ja(r,l,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case My:c=10;break e;case $y:c=9;break e;case ws:c=11;break e;case Ps:c=14;break e;case En:c=16,o=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=Lt(c,r,e,l),e.elementType=t,e.type=o,e.lanes=a,e}function pr(t,e,r,o){return t=Lt(7,t,o,e),t.lanes=r,t}function ja(t,e,r,o){return t=Lt(22,t,o,e),t.elementType=By,t.lanes=r,t.stateNode={isHidden:!1},t}function Wc(t,e,r){return t=Lt(6,t,null,e),t.lanes=r,t}function Vc(t,e,r){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function G1(t,e,r,o,l){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function lu(t,e,r,o,l,a,c,f,u){return t=new G1(t,e,r,f,u),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Lt(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Us(a),t}function X1(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function Th(t){if(!t)return Jn;t=t._reactInternals;e:{if(vr(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var r=t.type;if(xt(r))return CO(t,r,e)}return e}function Ah(t,e,r,o,l,a,c,f,u){return t=lu(r,o,!0,t,l,a,c,f,u),t.context=Th(null),r=t.current,o=dt(),l=zn(r),a=mn(o,l),a.callback=e??null,$n(r,a,l),t.current.lanes=l,wl(t,l,o),vt(t,o),t}function xa(t,e,r,o){var l=e.current,a=dt(),c=zn(l);return r=Th(r),e.context===null?e.context=r:e.pendingContext=r,e=mn(a,c),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=$n(l,e,c),t!==null&&(Gt(t,l,c,a),si(t,l,c)),c}function qi(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function iu(t,e){Wp(t,e),(t=t.alternate)&&Wp(t,e)}function J1(){return null}var Rh=typeof reportError=="function"?reportError:function(t){console.error(t)};function au(t){this._internalRoot=t}va.prototype.render=au.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));xa(t,e,null,null)};va.prototype.unmount=au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){xa(null,t,null,null)}),e[jn]=null}};function va(t){this._internalRoot=t}va.prototype.unstable_scheduleHydration=function(t){if(t){var e=sO();t={blockedOn:null,target:t,priority:e};for(var r=0;r<kn.length&&e!==0&&e<kn[r].priority;r++);kn.splice(r,0,t),r===0&&pO(t)}};function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vp(){}function K1(t,e,r,o,l){if(l){if(typeof o=="function"){var a=o;o=function(){var p=qi(c);a.call(p)}}var c=Ah(e,o,t,0,null,!1,!1,"",Vp);return t._reactRootContainer=c,t[jn]=c.current,rl(t.nodeType===8?t.parentNode:t),br(),c}for(;l=t.lastChild;)t.removeChild(l);if(typeof o=="function"){var f=o;o=function(){var p=qi(u);f.call(p)}}var u=lu(t,0,!1,null,null,!1,!1,"",Vp);return t._reactRootContainer=u,t[jn]=u.current,rl(t.nodeType===8?t.parentNode:t),br(function(){xa(e,u,r,o)}),u}function Pa(t,e,r,o,l){var a=r._reactRootContainer;if(a){var c=a;if(typeof l=="function"){var f=l;l=function(){var u=qi(c);f.call(u)}}xa(e,c,t,l)}else c=K1(r,e,t,l,o);return qi(c)}cO=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Ro(e.pendingLanes);r!==0&&(Es(e,r|1),vt(e,We()),!(ve&6)&&(ao=We()+500,Yn()))}break;case 13:br(function(){var o=xn(t,1);if(o!==null){var l=dt();Gt(o,t,1,l)}}),iu(t,1)}};Is=function(t){if(t.tag===13){var e=xn(t,134217728);if(e!==null){var r=dt();Gt(e,t,134217728,r)}iu(t,134217728)}};fO=function(t){if(t.tag===13){var e=zn(t),r=xn(t,e);if(r!==null){var o=dt();Gt(r,t,e,o)}iu(t,e)}};sO=function(){return Ie};uO=function(t,e){var r=Ie;try{return Ie=t,e()}finally{Ie=r}};Of=function(t,e,r){switch(e){case"input":if(cf(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var l=ya(o);if(!l)throw Error(V(90));Uy(o),cf(o,l)}}}break;case"textarea":qy(t,r);break;case"select":e=r.value,e!=null&&Jr(t,!!r.multiple,e,!1)}};Qy=tu;Yy=br;var Q1={usingClientEntryPoint:!1,Events:[Sl,Ur,ya,Jy,Ky,tu]},Eo={findFiberByHostInstance:ar,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Y1={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=tO(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||J1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{sa=Ql.inject(Y1),ln=Ql}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q1;Ct.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(e))throw Error(V(200));return X1(t,e,null,r)};Ct.createRoot=function(t,e){if(!cu(t))throw Error(V(299));var r=!1,o="",l=Rh;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=lu(t,1,!1,null,null,r,!1,o,l),t[jn]=e.current,rl(t.nodeType===8?t.parentNode:t),new au(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=tO(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return br(t)};Ct.hydrate=function(t,e,r){if(!wa(e))throw Error(V(200));return Pa(null,t,e,!0,r)};Ct.hydrateRoot=function(t,e,r){if(!cu(t))throw Error(V(405));var o=r!=null&&r.hydratedSources||null,l=!1,a="",c=Rh;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),e=Ah(e,null,t,1,r??null,l,!1,a,c),t[jn]=e.current,rl(t),o)for(t=0;t<o.length;t++)r=o[t],l=r._getVersion,l=l(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,l]:e.mutableSourceEagerHydrationData.push(r,l);return new va(e)};Ct.render=function(t,e,r){if(!wa(e))throw Error(V(200));return Pa(null,t,e,!1,r)};Ct.unmountComponentAtNode=function(t){if(!wa(t))throw Error(V(40));return t._reactRootContainer?(br(function(){Pa(null,null,t,!1,function(){t._reactRootContainer=null,t[jn]=null})}),!0):!1};Ct.unstable_batchedUpdates=tu;Ct.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!wa(r))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return Pa(t,e,r,!1,o)};Ct.version="18.2.0-next-9e3b772b8-20220608";function Lh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lh)}catch(t){console.error(t)}}Lh(),Ay.exports=Ct;var Z1=Ay.exports,Dh,Gp=Z1;Dh=Gp.createRoot,Gp.hydrateRoot;const Xf={},Fh=Gn.createContext(Xf);function te(t){const e=Gn.useContext(Fh);return Gn.useMemo(function(){return typeof t=="function"?t(e):{...e,...t}},[e,t])}function ex(t){let e;return t.disableParentContext?e=typeof t.components=="function"?t.components(Xf):t.components||Xf:e=te(t.components),Gn.createElement(Fh.Provider,{value:e},t.children)}var Mh={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function r(){for(var a="",c=0;c<arguments.length;c++){var f=arguments[c];f&&(a=l(a,o(f)))}return a}function o(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var c="";for(var f in a)e.call(a,f)&&a[f]&&(c=l(c,f));return c}function l(a,c){return c?a?a+" "+c:a+c:a}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(Mh);var tx=Mh.exports;const Ze=vy(tx),nx={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Wi{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,r)}init(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=e||nx,this.options=r,this.debug=r.debug}log(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return this.forward(r,"log","",!0)}warn(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return this.forward(r,"warn","",!0)}error(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return this.forward(r,"error","")}deprecate(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}forward(e,r,o,l){return l&&!this.debug?null:(typeof e[0]=="string"&&(e[0]=`${o}${this.prefix} ${e[0]}`),this.logger[r](e))}create(e){return new Wi(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Wi(this.logger,e)}}var nn=new Wi;class Sa{constructor(){this.observers={}}on(e,r){return e.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const l=this.observers[o].get(r)||0;this.observers[o].set(r,l+1)}),this}off(e,r){if(this.observers[e]){if(!r){delete this.observers[e];return}this.observers[e].delete(r)}}emit(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(c=>{let[f,u]=c;for(let p=0;p<u;p++)f(...o)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(c=>{let[f,u]=c;for(let p=0;p<u;p++)f.apply(f,[e,...o])})}}function Io(){let t,e;const r=new Promise((o,l)=>{t=o,e=l});return r.resolve=t,r.reject=e,r}function Xp(t){return t==null?"":""+t}function rx(t,e,r){t.forEach(o=>{e[o]&&(r[o]=e[o])})}const ox=/###/g;function Vo(t,e,r){function o(f){return f&&f.indexOf("###")>-1?f.replace(ox,"."):f}function l(){return!t||typeof t=="string"}const a=typeof e!="string"?e:e.split(".");let c=0;for(;c<a.length-1;){if(l())return{};const f=o(a[c]);!t[f]&&r&&(t[f]=new r),Object.prototype.hasOwnProperty.call(t,f)?t=t[f]:t={},++c}return l()?{}:{obj:t,k:o(a[c])}}function Jp(t,e,r){const{obj:o,k:l}=Vo(t,e,Object);if(o!==void 0||e.length===1){o[l]=r;return}let a=e[e.length-1],c=e.slice(0,e.length-1),f=Vo(t,c,Object);for(;f.obj===void 0&&c.length;)a=`${c[c.length-1]}.${a}`,c=c.slice(0,c.length-1),f=Vo(t,c,Object),f&&f.obj&&typeof f.obj[`${f.k}.${a}`]<"u"&&(f.obj=void 0);f.obj[`${f.k}.${a}`]=r}function lx(t,e,r,o){const{obj:l,k:a}=Vo(t,e,Object);l[a]=l[a]||[],o&&(l[a]=l[a].concat(r)),o||l[a].push(r)}function Vi(t,e){const{obj:r,k:o}=Vo(t,e);if(r)return r[o]}function ix(t,e,r){const o=Vi(t,r);return o!==void 0?o:Vi(e,r)}function $h(t,e,r){for(const o in e)o!=="__proto__"&&o!=="constructor"&&(o in t?typeof t[o]=="string"||t[o]instanceof String||typeof e[o]=="string"||e[o]instanceof String?r&&(t[o]=e[o]):$h(t[o],e[o],r):t[o]=e[o]);return t}function Tr(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var ax={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function cx(t){return typeof t=="string"?t.replace(/[&<>"'\/]/g,e=>ax[e]):t}class fx{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const r=this.regExpMap.get(e);if(r!==void 0)return r;const o=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,o),this.regExpQueue.push(e),o}}const sx=[" ",",","?","!",";"],ux=new fx(20);function px(t,e,r){e=e||"",r=r||"";const o=sx.filter(c=>e.indexOf(c)<0&&r.indexOf(c)<0);if(o.length===0)return!0;const l=ux.getRegExp(`(${o.map(c=>c==="?"?"\\?":c).join("|")})`);let a=!l.test(t);if(!a){const c=t.indexOf(r);c>0&&!l.test(t.substring(0,c))&&(a=!0)}return a}function Jf(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const o=e.split(r);let l=t;for(let a=0;a<o.length;){if(!l||typeof l!="object")return;let c,f="";for(let u=a;u<o.length;++u)if(u!==a&&(f+=r),f+=o[u],c=l[f],c!==void 0){if(["string","number","boolean"].indexOf(typeof c)>-1&&u<o.length-1)continue;a+=u-a+1;break}l=c}return l}function Gi(t){return t&&t.indexOf("_")>0?t.replace("_","-"):t}class Kp extends Sa{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const r=this.options.ns.indexOf(e);r>-1&&this.options.ns.splice(r,1)}getResource(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,c=l.ignoreJSONStructure!==void 0?l.ignoreJSONStructure:this.options.ignoreJSONStructure;let f;e.indexOf(".")>-1?f=e.split("."):(f=[e,r],o&&(Array.isArray(o)?f.push(...o):typeof o=="string"&&a?f.push(...o.split(a)):f.push(o)));const u=Vi(this.data,f);return!u&&!r&&!o&&e.indexOf(".")>-1&&(e=f[0],r=f[1],o=f.slice(2).join(".")),u||!c||typeof o!="string"?u:Jf(this.data&&this.data[e]&&this.data[e][r],o,a)}addResource(e,r,o,l){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const c=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let f=[e,r];o&&(f=f.concat(c?o.split(c):o)),e.indexOf(".")>-1&&(f=e.split("."),l=r,r=f[1]),this.addNamespaces(r),Jp(this.data,f,l),a.silent||this.emit("added",e,r,o,l)}addResources(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const a in o)(typeof o[a]=="string"||Object.prototype.toString.apply(o[a])==="[object Array]")&&this.addResource(e,r,a,o[a],{silent:!0});l.silent||this.emit("added",e,r,o)}addResourceBundle(e,r,o,l,a){let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},f=[e,r];e.indexOf(".")>-1&&(f=e.split("."),l=o,o=r,r=f[1]),this.addNamespaces(r);let u=Vi(this.data,f)||{};l?$h(u,o,a):u={...u,...o},Jp(this.data,f,u),c.silent||this.emit("added",e,r,o)}removeResourceBundle(e,r){this.hasResourceBundle(e,r)&&delete this.data[e][r],this.removeNamespaces(r),this.emit("removed",e,r)}hasResourceBundle(e,r){return this.getResource(e,r)!==void 0}getResourceBundle(e,r){return r||(r=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,r)}:this.getResource(e,r)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const r=this.getDataByLanguage(e);return!!(r&&Object.keys(r)||[]).find(l=>r[l]&&Object.keys(r[l]).length>0)}toJSON(){return this.data}}var Bh={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,r,o,l){return t.forEach(a=>{this.processors[a]&&(e=this.processors[a].process(e,r,o,l))}),e}};const Qp={};class Xi extends Sa{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),rx(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=nn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const o=this.resolve(e,r);return o&&o.res!==void 0}extractFromKey(e,r){let o=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const l=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=r.ns||this.options.defaultNS||[];const c=o&&e.indexOf(o)>-1,f=!this.options.userDefinedKeySeparator&&!r.keySeparator&&!this.options.userDefinedNsSeparator&&!r.nsSeparator&&!px(e,o,l);if(c&&!f){const u=e.match(this.interpolator.nestingRegexp);if(u&&u.length>0)return{key:e,namespaces:a};const p=e.split(o);(o!==l||o===l&&this.options.ns.indexOf(p[0])>-1)&&(a=p.shift()),e=p.join(l)}return typeof a=="string"&&(a=[a]),{key:e,namespaces:a}}translate(e,r,o){if(typeof r!="object"&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),typeof r=="object"&&(r={...r}),r||(r={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const l=r.returnDetails!==void 0?r.returnDetails:this.options.returnDetails,a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,{key:c,namespaces:f}=this.extractFromKey(e[e.length-1],r),u=f[f.length-1],p=r.lng||this.language,y=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(p&&p.toLowerCase()==="cimode"){if(y){const v=r.nsSeparator||this.options.nsSeparator;return l?{res:`${u}${v}${c}`,usedKey:c,exactUsedKey:c,usedLng:p,usedNS:u,usedParams:this.getUsedParamsDetails(r)}:`${u}${v}${c}`}return l?{res:c,usedKey:c,exactUsedKey:c,usedLng:p,usedNS:u,usedParams:this.getUsedParamsDetails(r)}:c}const d=this.resolve(e,r);let O=d&&d.res;const S=d&&d.usedKey||c,j=d&&d.exactUsedKey||c,x=Object.prototype.toString.apply(O),P=["[object Number]","[object Function]","[object RegExp]"],m=r.joinArrays!==void 0?r.joinArrays:this.options.joinArrays,h=!this.i18nFormat||this.i18nFormat.handleAsObject;if(h&&O&&(typeof O!="string"&&typeof O!="boolean"&&typeof O!="number")&&P.indexOf(x)<0&&!(typeof m=="string"&&x==="[object Array]")){if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const v=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,O,{...r,ns:f}):`key '${c} (${this.language})' returned an object instead of string.`;return l?(d.res=v,d.usedParams=this.getUsedParamsDetails(r),d):v}if(a){const v=x==="[object Array]",E=v?[]:{},N=v?j:S;for(const _ in O)if(Object.prototype.hasOwnProperty.call(O,_)){const T=`${N}${a}${_}`;E[_]=this.translate(T,{...r,joinArrays:!1,ns:f}),E[_]===T&&(E[_]=O[_])}O=E}}else if(h&&typeof m=="string"&&x==="[object Array]")O=O.join(m),O&&(O=this.extendTranslation(O,e,r,o));else{let v=!1,E=!1;const N=r.count!==void 0&&typeof r.count!="string",_=Xi.hasDefaultValue(r),T=N?this.pluralResolver.getSuffix(p,r.count,r):"",$=r.ordinal&&N?this.pluralResolver.getSuffix(p,r.count,{ordinal:!1}):"",R=N&&!r.ordinal&&r.count===0&&this.pluralResolver.shouldUseIntlApi(),W=R&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${T}`]||r[`defaultValue${$}`]||r.defaultValue;!this.isValidLookup(O)&&_&&(v=!0,O=W),this.isValidLookup(O)||(E=!0,O=c);const oe=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:O,le=_&&W!==O&&this.options.updateMissing;if(E||v||le){if(this.logger.log(le?"updateKey":"missingKey",p,u,c,le?W:O),a){const z=this.resolve(c,{...r,keySeparator:!1});z&&z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let je=[];const Pe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Pe&&Pe[0])for(let z=0;z<Pe.length;z++)je.push(Pe[z]);else this.options.saveMissingTo==="all"?je=this.languageUtils.toResolveHierarchy(r.lng||this.language):je.push(r.lng||this.language);const _e=(z,Y,Q)=>{const fe=_&&Q!==O?Q:oe;this.options.missingKeyHandler?this.options.missingKeyHandler(z,u,Y,fe,le,r):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(z,u,Y,fe,le,r),this.emit("missingKey",z,u,Y,O)};this.options.saveMissing&&(this.options.saveMissingPlurals&&N?je.forEach(z=>{const Y=this.pluralResolver.getSuffixes(z,r);R&&r[`defaultValue${this.options.pluralSeparator}zero`]&&Y.indexOf(`${this.options.pluralSeparator}zero`)<0&&Y.push(`${this.options.pluralSeparator}zero`),Y.forEach(Q=>{_e([z],c+Q,r[`defaultValue${Q}`]||W)})}):_e(je,c,W))}O=this.extendTranslation(O,e,r,d,o),E&&O===c&&this.options.appendNamespaceToMissingKey&&(O=`${u}:${c}`),(E||v)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?O=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${u}:${c}`:c,v?O:void 0):O=this.options.parseMissingKeyHandler(O))}return l?(d.res=O,d.usedParams=this.getUsedParamsDetails(r),d):O}extendTranslation(e,r,o,l,a){var c=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||l.usedLng,l.usedNS,l.usedKey,{resolved:l});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const p=typeof e=="string"&&(o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let y;if(p){const O=e.match(this.interpolator.nestingRegexp);y=O&&O.length}let d=o.replace&&typeof o.replace!="string"?o.replace:o;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,o.lng||this.language,o),p){const O=e.match(this.interpolator.nestingRegexp),S=O&&O.length;y<S&&(o.nest=!1)}!o.lng&&this.options.compatibilityAPI!=="v1"&&l&&l.res&&(o.lng=l.usedLng),o.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var O=arguments.length,S=new Array(O),j=0;j<O;j++)S[j]=arguments[j];return a&&a[0]===S[0]&&!o.context?(c.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${r[0]}`),null):c.translate(...S,r)},o)),o.interpolation&&this.interpolator.reset()}const f=o.postProcess||this.options.postProcess,u=typeof f=="string"?[f]:f;return e!=null&&u&&u.length&&o.applyPostProcessor!==!1&&(e=Bh.handle(u,e,r,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...l,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),e}resolve(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o,l,a,c,f;return typeof e=="string"&&(e=[e]),e.forEach(u=>{if(this.isValidLookup(o))return;const p=this.extractFromKey(u,r),y=p.key;l=y;let d=p.namespaces;this.options.fallbackNS&&(d=d.concat(this.options.fallbackNS));const O=r.count!==void 0&&typeof r.count!="string",S=O&&!r.ordinal&&r.count===0&&this.pluralResolver.shouldUseIntlApi(),j=r.context!==void 0&&(typeof r.context=="string"||typeof r.context=="number")&&r.context!=="",x=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);d.forEach(P=>{this.isValidLookup(o)||(f=P,!Qp[`${x[0]}-${P}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(f)&&(Qp[`${x[0]}-${P}`]=!0,this.logger.warn(`key "${l}" for languages "${x.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(m=>{if(this.isValidLookup(o))return;c=m;const h=[y];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(h,y,m,P,r);else{let v;O&&(v=this.pluralResolver.getSuffix(m,r.count,r));const E=`${this.options.pluralSeparator}zero`,N=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(O&&(h.push(y+v),r.ordinal&&v.indexOf(N)===0&&h.push(y+v.replace(N,this.options.pluralSeparator)),S&&h.push(y+E)),j){const _=`${y}${this.options.contextSeparator}${r.context}`;h.push(_),O&&(h.push(_+v),r.ordinal&&v.indexOf(N)===0&&h.push(_+v.replace(N,this.options.pluralSeparator)),S&&h.push(_+E))}}let b;for(;b=h.pop();)this.isValidLookup(o)||(a=b,o=this.getResource(m,P,b,r))}))})}),{res:o,usedKey:l,exactUsedKey:a,usedLng:c,usedNS:f}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,r,o,l):this.resourceStore.getResource(e,r,o,l)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const r=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=e.replace&&typeof e.replace!="string";let l=o?e.replace:e;if(o&&typeof e.count<"u"&&(l.count=e.count),this.options.interpolation.defaultVariables&&(l={...this.options.interpolation.defaultVariables,...l}),!o){l={...l};for(const a of r)delete l[a]}return l}static hasDefaultValue(e){const r="defaultValue";for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&r===o.substring(0,r.length)&&e[o]!==void 0)return!0;return!1}}function Gc(t){return t.charAt(0).toUpperCase()+t.slice(1)}class Yp{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=nn.create("languageUtils")}getScriptPartFromCode(e){if(e=Gi(e),!e||e.indexOf("-")<0)return null;const r=e.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}getLanguagePartFromCode(e){if(e=Gi(e),!e||e.indexOf("-")<0)return e;const r=e.split("-");return this.formatLanguageCode(r[0])}formatLanguageCode(e){if(typeof e=="string"&&e.indexOf("-")>-1){const r=["hans","hant","latn","cyrl","cans","mong","arab"];let o=e.split("-");return this.options.lowerCaseLng?o=o.map(l=>l.toLowerCase()):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=Gc(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=Gc(o[1].toLowerCase())),r.indexOf(o[2].toLowerCase())>-1&&(o[2]=Gc(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let r;return e.forEach(o=>{if(r)return;const l=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(l))&&(r=l)}),!r&&this.options.supportedLngs&&e.forEach(o=>{if(r)return;const l=this.getLanguagePartFromCode(o);if(this.isSupportedCode(l))return r=l;r=this.options.supportedLngs.find(a=>{if(a===l)return a;if(!(a.indexOf("-")<0&&l.indexOf("-")<0)&&a.indexOf(l)===0)return a})}),r||(r=this.getFallbackCodes(this.options.fallbackLng)[0]),r}getFallbackCodes(e,r){if(!e)return[];if(typeof e=="function"&&(e=e(r)),typeof e=="string"&&(e=[e]),Object.prototype.toString.apply(e)==="[object Array]")return e;if(!r)return e.default||[];let o=e[r];return o||(o=e[this.getScriptPartFromCode(r)]),o||(o=e[this.formatLanguageCode(r)]),o||(o=e[this.getLanguagePartFromCode(r)]),o||(o=e.default),o||[]}toResolveHierarchy(e,r){const o=this.getFallbackCodes(r||this.options.fallbackLng||[],e),l=[],a=c=>{c&&(this.isSupportedCode(c)?l.push(c):this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`))};return typeof e=="string"&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(e))):typeof e=="string"&&a(this.formatLanguageCode(e)),o.forEach(c=>{l.indexOf(c)<0&&a(this.formatLanguageCode(c))}),l}}let dx=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],yx={1:function(t){return+(t>1)},2:function(t){return+(t!=1)},3:function(t){return 0},4:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},5:function(t){return t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},6:function(t){return t==1?0:t>=2&&t<=4?1:2},7:function(t){return t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},8:function(t){return t==1?0:t==2?1:t!=8&&t!=11?2:3},9:function(t){return+(t>=2)},10:function(t){return t==1?0:t==2?1:t<7?2:t<11?3:4},11:function(t){return t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3},12:function(t){return+(t%10!=1||t%100==11)},13:function(t){return+(t!==0)},14:function(t){return t==1?0:t==2?1:t==3?2:3},15:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2},16:function(t){return t%10==1&&t%100!=11?0:t!==0?1:2},17:function(t){return t==1||t%10==1&&t%100!=11?0:1},18:function(t){return t==0?0:t==1?1:2},19:function(t){return t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3},20:function(t){return t==1?0:t==0||t%100>0&&t%100<20?1:2},21:function(t){return t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0},22:function(t){return t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3}};const Ox=["v1","v2","v3"],hx=["v4"],Zp={zero:0,one:1,two:2,few:3,many:4,other:5};function bx(){const t={};return dx.forEach(e=>{e.lngs.forEach(r=>{t[r]={numbers:e.nr,plurals:yx[e.fc]}})}),t}class mx{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=r,this.logger=nn.create("pluralResolver"),(!this.options.compatibilityJSON||hx.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=bx()}addRule(e,r){this.rules[e]=r}getRule(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Gi(e==="dev"?"en":e),{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=this.getRule(e,r);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}getPluralFormsOfKey(e,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,o).map(l=>`${r}${l}`)}getSuffixes(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=this.getRule(e,r);return o?this.shouldUseIntlApi()?o.resolvedOptions().pluralCategories.sort((l,a)=>Zp[l]-Zp[a]).map(l=>`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${l}`):o.numbers.map(l=>this.getSuffix(e,l,r)):[]}getSuffix(e,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const l=this.getRule(e,o);return l?this.shouldUseIntlApi()?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${l.select(r)}`:this.getSuffixRetroCompatible(l,r):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,r){const o=e.noAbs?e.plurals(r):e.plurals(Math.abs(r));let l=e.numbers[o];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));const a=()=>this.options.prepend&&l.toString()?this.options.prepend+l.toString():l.toString();return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?`_plural_${l.toString()}`:a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?a():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}shouldUseIntlApi(){return!Ox.includes(this.options.compatibilityJSON)}}function ed(t,e,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=ix(t,e,r);return!a&&l&&typeof r=="string"&&(a=Jf(t,r,o),a===void 0&&(a=Jf(e,r,o))),a}class gx{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=nn.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(r=>r),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const r=e.interpolation;this.escape=r.escape!==void 0?r.escape:cx,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?Tr(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?Tr(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?Tr(r.nestingPrefix):r.nestingPrefixEscaped||Tr("$t("),this.nestingSuffix=r.nestingSuffix?Tr(r.nestingSuffix):r.nestingSuffixEscaped||Tr(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(r,o)=>r&&r.source===o?(r.lastIndex=0,r):new RegExp(o,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,r,o,l){let a,c,f;const u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function p(j){return j.replace(/\$/g,"$$$$")}const y=j=>{if(j.indexOf(this.formatSeparator)<0){const h=ed(r,u,j,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(h,void 0,o,{...l,...r,interpolationkey:j}):h}const x=j.split(this.formatSeparator),P=x.shift().trim(),m=x.join(this.formatSeparator).trim();return this.format(ed(r,u,P,this.options.keySeparator,this.options.ignoreJSONStructure),m,o,{...l,...r,interpolationkey:P})};this.resetRegExp();const d=l&&l.missingInterpolationHandler||this.options.missingInterpolationHandler,O=l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:j=>p(j)},{regex:this.regexp,safeValue:j=>this.escapeValue?p(this.escape(j)):p(j)}].forEach(j=>{for(f=0;a=j.regex.exec(e);){const x=a[1].trim();if(c=y(x),c===void 0)if(typeof d=="function"){const m=d(e,a,l);c=typeof m=="string"?m:""}else if(l&&Object.prototype.hasOwnProperty.call(l,x))c="";else if(O){c=a[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),c="";else typeof c!="string"&&!this.useRawValueToEscape&&(c=Xp(c));const P=j.safeValue(c);if(e=e.replace(a[0],P),O?(j.regex.lastIndex+=c.length,j.regex.lastIndex-=a[0].length):j.regex.lastIndex=0,f++,f>=this.maxReplaces)break}}),e}nest(e,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,a,c;function f(u,p){const y=this.nestingOptionsSeparator;if(u.indexOf(y)<0)return u;const d=u.split(new RegExp(`${y}[ ]*{`));let O=`{${d[1]}`;u=d[0],O=this.interpolate(O,c);const S=O.match(/'/g),j=O.match(/"/g);(S&&S.length%2===0&&!j||j.length%2!==0)&&(O=O.replace(/'/g,'"'));try{c=JSON.parse(O),p&&(c={...p,...c})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${u}`,x),`${u}${y}${O}`}return delete c.defaultValue,u}for(;l=this.nestingRegexp.exec(e);){let u=[];c={...o},c=c.replace&&typeof c.replace!="string"?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;let p=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){const y=l[1].split(this.formatSeparator).map(d=>d.trim());l[1]=y.shift(),u=y,p=!0}if(a=r(f.call(this,l[1].trim(),c),c),a&&l[0]===e&&typeof a!="string")return a;typeof a!="string"&&(a=Xp(a)),a||(this.logger.warn(`missed to resolve ${l[1]} for nesting ${e}`),a=""),p&&(a=u.reduce((y,d)=>this.format(y,d,o.lng,{...o,interpolationkey:l[1].trim()}),a.trim())),e=e.replace(l[0],a),this.regexp.lastIndex=0}return e}}function jx(t){let e=t.toLowerCase().trim();const r={};if(t.indexOf("(")>-1){const o=t.split("(");e=o[0].toLowerCase().trim();const l=o[1].substring(0,o[1].length-1);e==="currency"&&l.indexOf(":")<0?r.currency||(r.currency=l.trim()):e==="relativetime"&&l.indexOf(":")<0?r.range||(r.range=l.trim()):l.split(";").forEach(c=>{if(!c)return;const[f,...u]=c.split(":"),p=u.join(":").trim().replace(/^'+|'+$/g,"");r[f.trim()]||(r[f.trim()]=p),p==="false"&&(r[f.trim()]=!1),p==="true"&&(r[f.trim()]=!0),isNaN(p)||(r[f.trim()]=parseInt(p,10))})}return{formatName:e,formatOptions:r}}function Ar(t){const e={};return function(o,l,a){const c=l+JSON.stringify(a);let f=e[c];return f||(f=t(Gi(l),a),e[c]=f),f(o)}}class xx{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=nn.create("formatter"),this.options=e,this.formats={number:Ar((r,o)=>{const l=new Intl.NumberFormat(r,{...o});return a=>l.format(a)}),currency:Ar((r,o)=>{const l=new Intl.NumberFormat(r,{...o,style:"currency"});return a=>l.format(a)}),datetime:Ar((r,o)=>{const l=new Intl.DateTimeFormat(r,{...o});return a=>l.format(a)}),relativetime:Ar((r,o)=>{const l=new Intl.RelativeTimeFormat(r,{...o});return a=>l.format(a,o.range||"day")}),list:Ar((r,o)=>{const l=new Intl.ListFormat(r,{...o});return a=>l.format(a)})},this.init(e)}init(e){const o=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}add(e,r){this.formats[e.toLowerCase().trim()]=r}addCached(e,r){this.formats[e.toLowerCase().trim()]=Ar(r)}format(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return r.split(this.formatSeparator).reduce((f,u)=>{const{formatName:p,formatOptions:y}=jx(u);if(this.formats[p]){let d=f;try{const O=l&&l.formatParams&&l.formatParams[l.interpolationkey]||{},S=O.locale||O.lng||l.locale||l.lng||o;d=this.formats[p](f,S,{...y,...l,...O})}catch(O){this.logger.warn(O)}return d}else this.logger.warn(`there was no format function for ${p}`);return f},e)}}function vx(t,e){t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)}class wx extends Sa{constructor(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=r,this.services=o,this.languageUtils=o.languageUtils,this.options=l,this.logger=nn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=l.maxParallelReads||10,this.readingCalls=0,this.maxRetries=l.maxRetries>=0?l.maxRetries:5,this.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(o,l.backend,l)}queueLoad(e,r,o,l){const a={},c={},f={},u={};return e.forEach(p=>{let y=!0;r.forEach(d=>{const O=`${p}|${d}`;!o.reload&&this.store.hasResourceBundle(p,d)?this.state[O]=2:this.state[O]<0||(this.state[O]===1?c[O]===void 0&&(c[O]=!0):(this.state[O]=1,y=!1,c[O]===void 0&&(c[O]=!0),a[O]===void 0&&(a[O]=!0),u[d]===void 0&&(u[d]=!0)))}),y||(f[p]=!0)}),(Object.keys(a).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:l}),{toLoad:Object.keys(a),pending:Object.keys(c),toLoadLanguages:Object.keys(f),toLoadNamespaces:Object.keys(u)}}loaded(e,r,o){const l=e.split("|"),a=l[0],c=l[1];r&&this.emit("failedLoading",a,c,r),o&&this.store.addResourceBundle(a,c,o),this.state[e]=r?-1:2;const f={};this.queue.forEach(u=>{lx(u.loaded,[a],c),vx(u,e),r&&u.errors.push(r),u.pendingCount===0&&!u.done&&(Object.keys(u.loaded).forEach(p=>{f[p]||(f[p]={});const y=u.loaded[p];y.length&&y.forEach(d=>{f[p][d]===void 0&&(f[p][d]=!0)})}),u.done=!0,u.errors.length?u.callback(u.errors):u.callback())}),this.emit("loaded",f),this.queue=this.queue.filter(u=>!u.done)}read(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!e.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:r,fcName:o,tried:l,wait:a,callback:c});return}this.readingCalls++;const f=(p,y)=>{if(this.readingCalls--,this.waitingReads.length>0){const d=this.waitingReads.shift();this.read(d.lng,d.ns,d.fcName,d.tried,d.wait,d.callback)}if(p&&y&&l<this.maxRetries){setTimeout(()=>{this.read.call(this,e,r,o,l+1,a*2,c)},a);return}c(p,y)},u=this.backend[o].bind(this.backend);if(u.length===2){try{const p=u(e,r);p&&typeof p.then=="function"?p.then(y=>f(null,y)).catch(f):f(null,p)}catch(p){f(p)}return}return u(e,r,f)}prepareLoading(e,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();typeof e=="string"&&(e=this.languageUtils.toResolveHierarchy(e)),typeof r=="string"&&(r=[r]);const a=this.queueLoad(e,r,o,l);if(!a.toLoad.length)return a.pending.length||l(),null;a.toLoad.forEach(c=>{this.loadOne(c)})}load(e,r,o){this.prepareLoading(e,r,{},o)}reload(e,r,o){this.prepareLoading(e,r,{reload:!0},o)}loadOne(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const o=e.split("|"),l=o[0],a=o[1];this.read(l,a,"read",void 0,void 0,(c,f)=>{c&&this.logger.warn(`${r}loading namespace ${a} for language ${l} failed`,c),!c&&f&&this.logger.log(`${r}loaded namespace ${a} for language ${l}`,f),this.loaded(e,c,f)})}saveMissing(e,r,o,l,a){let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(r)){this.logger.warn(`did not save key "${o}" as the namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend&&this.backend.create){const u={...c,isUpdate:a},p=this.backend.create.bind(this.backend);if(p.length<6)try{let y;p.length===5?y=p(e,r,o,l,u):y=p(e,r,o,l),y&&typeof y.then=="function"?y.then(d=>f(null,d)).catch(f):f(null,y)}catch(y){f(y)}else p(e,r,o,l,f,u)}!e||!e[0]||this.store.addResource(e[0],r,o,l)}}}function td(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){let r={};if(typeof e[1]=="object"&&(r=e[1]),typeof e[1]=="string"&&(r.defaultValue=e[1]),typeof e[2]=="string"&&(r.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const o=e[3]||e[2];Object.keys(o).forEach(l=>{r[l]=o[l]})}return r},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function nd(t){return typeof t.ns=="string"&&(t.ns=[t.ns]),typeof t.fallbackLng=="string"&&(t.fallbackLng=[t.fallbackLng]),typeof t.fallbackNS=="string"&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t}function Yl(){}function Px(t){Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(r=>{typeof t[r]=="function"&&(t[r]=t[r].bind(t))})}class pl extends Sa{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(super(),this.options=nd(e),this.services={},this.logger=nn,this.modules={external:[]},Px(this),r&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,r),this;setTimeout(()=>{this.init(e,r)},0)}}init(){var e=this;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;typeof r=="function"&&(o=r,r={}),!r.defaultNS&&r.defaultNS!==!1&&r.ns&&(typeof r.ns=="string"?r.defaultNS=r.ns:r.ns.indexOf("translation")<0&&(r.defaultNS=r.ns[0]));const l=td();this.options={...l,...this.options,...nd(r)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...l.interpolation,...this.options.interpolation}),r.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=r.keySeparator),r.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=r.nsSeparator);function a(y){return y?typeof y=="function"?new y:y:null}if(!this.options.isClone){this.modules.logger?nn.init(a(this.modules.logger),this.options):nn.init(null,this.options);let y;this.modules.formatter?y=this.modules.formatter:typeof Intl<"u"&&(y=xx);const d=new Yp(this.options);this.store=new Kp(this.options.resources,this.options);const O=this.services;O.logger=nn,O.resourceStore=this.store,O.languageUtils=d,O.pluralResolver=new mx(d,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),y&&(!this.options.interpolation.format||this.options.interpolation.format===l.interpolation.format)&&(O.formatter=a(y),O.formatter.init(O,this.options),this.options.interpolation.format=O.formatter.format.bind(O.formatter)),O.interpolator=new gx(this.options),O.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},O.backendConnector=new wx(a(this.modules.backend),O.resourceStore,O,this.options),O.backendConnector.on("*",function(S){for(var j=arguments.length,x=new Array(j>1?j-1:0),P=1;P<j;P++)x[P-1]=arguments[P];e.emit(S,...x)}),this.modules.languageDetector&&(O.languageDetector=a(this.modules.languageDetector),O.languageDetector.init&&O.languageDetector.init(O,this.options.detection,this.options)),this.modules.i18nFormat&&(O.i18nFormat=a(this.modules.i18nFormat),O.i18nFormat.init&&O.i18nFormat.init(this)),this.translator=new Xi(this.services,this.options),this.translator.on("*",function(S){for(var j=arguments.length,x=new Array(j>1?j-1:0),P=1;P<j;P++)x[P-1]=arguments[P];e.emit(S,...x)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,o||(o=Yl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const y=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);y.length>0&&y[0]!=="dev"&&(this.options.lng=y[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(y=>{this[y]=function(){return e.store[y](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(y=>{this[y]=function(){return e.store[y](...arguments),e}});const u=Io(),p=()=>{const y=(d,O)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),u.resolve(O),o(d,O)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return y(null,this.t.bind(this));this.changeLanguage(this.options.lng,y)};return this.options.resources||!this.options.initImmediate?p():setTimeout(p,0),u}loadResources(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yl;const l=typeof e=="string"?e:this.language;if(typeof e=="function"&&(o=e),!this.options.resources||this.options.partialBundledLanguages){if(l&&l.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const a=[],c=f=>{if(!f||f==="cimode")return;this.services.languageUtils.toResolveHierarchy(f).forEach(p=>{p!=="cimode"&&a.indexOf(p)<0&&a.push(p)})};l?c(l):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>c(u)),this.options.preload&&this.options.preload.forEach(f=>c(f)),this.services.backendConnector.load(a,this.options.ns,f=>{!f&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(f)})}else o(null)}reloadResources(e,r,o){const l=Io();return e||(e=this.languages),r||(r=this.options.ns),o||(o=Yl),this.services.backendConnector.reload(e,r,a=>{l.resolve(),o(a)}),l}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&Bh.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let r=0;r<this.languages.length;r++){const o=this.languages[r];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}}changeLanguage(e,r){var o=this;this.isLanguageChangingTo=e;const l=Io();this.emit("languageChanging",e);const a=u=>{this.language=u,this.languages=this.services.languageUtils.toResolveHierarchy(u),this.resolvedLanguage=void 0,this.setResolvedLanguage(u)},c=(u,p)=>{p?(a(p),this.translator.changeLanguage(p),this.isLanguageChangingTo=void 0,this.emit("languageChanged",p),this.logger.log("languageChanged",p)):this.isLanguageChangingTo=void 0,l.resolve(function(){return o.t(...arguments)}),r&&r(u,function(){return o.t(...arguments)})},f=u=>{!e&&!u&&this.services.languageDetector&&(u=[]);const p=typeof u=="string"?u:this.services.languageUtils.getBestMatchFromCodes(u);p&&(this.language||a(p),this.translator.language||this.translator.changeLanguage(p),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(p)),this.loadResources(p,y=>{c(y,p)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?f(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(f):this.services.languageDetector.detect(f):f(e),l}getFixedT(e,r,o){var l=this;const a=function(c,f){let u;if(typeof f!="object"){for(var p=arguments.length,y=new Array(p>2?p-2:0),d=2;d<p;d++)y[d-2]=arguments[d];u=l.options.overloadTranslationOptionHandler([c,f].concat(y))}else u={...f};u.lng=u.lng||a.lng,u.lngs=u.lngs||a.lngs,u.ns=u.ns||a.ns,u.keyPrefix=u.keyPrefix||o||a.keyPrefix;const O=l.options.keySeparator||".";let S;return u.keyPrefix&&Array.isArray(c)?S=c.map(j=>`${u.keyPrefix}${O}${j}`):S=u.keyPrefix?`${u.keyPrefix}${O}${c}`:c,l.t(S,u)};return typeof e=="string"?a.lng=e:a.lngs=e,a.ns=r,a.keyPrefix=o,a}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=r.lng||this.resolvedLanguage||this.languages[0],l=this.options?this.options.fallbackLng:!1,a=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const c=(f,u)=>{const p=this.services.backendConnector.state[`${f}|${u}`];return p===-1||p===2};if(r.precheck){const f=r.precheck(this,c);if(f!==void 0)return f}return!!(this.hasResourceBundle(o,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(o,e)&&(!l||c(a,e)))}loadNamespaces(e,r){const o=Io();return this.options.ns?(typeof e=="string"&&(e=[e]),e.forEach(l=>{this.options.ns.indexOf(l)<0&&this.options.ns.push(l)}),this.loadResources(l=>{o.resolve(),r&&r(l)}),o):(r&&r(),Promise.resolve())}loadLanguages(e,r){const o=Io();typeof e=="string"&&(e=[e]);const l=this.options.preload||[],a=e.filter(c=>l.indexOf(c)<0);return a.length?(this.options.preload=l.concat(a),this.loadResources(c=>{o.resolve(),r&&r(c)}),o):(r&&r(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services&&this.services.languageUtils||new Yp(td());return r.indexOf(o.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return new pl(e,r)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Yl;const o=e.forkResourceStore;o&&delete e.forkResourceStore;const l={...this.options,...e,isClone:!0},a=new pl(l);return(e.debug!==void 0||e.prefix!==void 0)&&(a.logger=a.logger.clone(e)),["store","services","language"].forEach(f=>{a[f]=this[f]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},o&&(a.store=new Kp(this.store.data,l),a.services.resourceStore=a.store),a.translator=new Xi(a.services,l),a.translator.on("*",function(f){for(var u=arguments.length,p=new Array(u>1?u-1:0),y=1;y<u;y++)p[y-1]=arguments[y];a.emit(f,...p)}),a.init(l,r),a.translator.options=l,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const bt=pl.createInstance();bt.createInstance=pl.createInstance;const Sx=bt.createInstance;bt.dir;bt.init;bt.loadResources;bt.reloadResources;bt.use;bt.changeLanguage;bt.getFixedT;bt.t;bt.exists;bt.setDefaultNamespace;bt.hasLoadedNamespace;bt.loadNamespaces;bt.loadLanguages;function _x(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const rd={};function Kf(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];typeof e[0]=="string"&&rd[e[0]]||(typeof e[0]=="string"&&(rd[e[0]]=new Date),_x(...e))}const zh=(t,e)=>()=>{if(t.isInitialized)e();else{const r=()=>{setTimeout(()=>{t.off("initialized",r)},0),e()};t.on("initialized",r)}};function od(t,e,r){t.loadNamespaces(e,zh(t,r))}function ld(t,e,r,o){typeof r=="string"&&(r=[r]),r.forEach(l=>{t.options.ns.indexOf(l)<0&&t.options.ns.push(l)}),t.loadLanguages(e,zh(t,o))}function Ex(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=e.languages[0],l=e.options?e.options.fallbackLng:!1,a=e.languages[e.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const c=(f,u)=>{const p=e.services.backendConnector.state[`${f}|${u}`];return p===-1||p===2};return r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!c(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(o,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||c(o,t)&&(!l||c(a,t)))}function Ix(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(Kf("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:r.lng,precheck:(l,a)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!a(l.isLanguageChangingTo,t))return!1}}):Ex(t,e,r)}const kx=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Nx={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},Cx=t=>Nx[t],Tx=t=>t.replace(kx,Cx);let Ax={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:Tx};function Rx(){return Ax}let Lx;function Dx(){return Lx}const Uh=H.createContext();class Fx{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Mx=(t,e)=>{const r=H.useRef();return H.useEffect(()=>{r.current=e?r.current:t},[t,e]),r.current};function Hh(t,e,r,o){return t.getFixedT(e,r,o)}function $x(t,e,r,o){return H.useCallback(Hh(t,e,r,o),[t,e,r,o])}function Bx(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:r}=e,{i18n:o,defaultNS:l}=H.useContext(Uh)||{},a=r||o||Dx();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new Fx),!a){Kf("You will need to pass in an i18next instance by using initReactI18next");const E=(_,T)=>typeof T=="string"?T:T&&typeof T=="object"&&typeof T.defaultValue=="string"?T.defaultValue:Array.isArray(_)?_[_.length-1]:_,N=[E,{},!1];return N.t=E,N.i18n={},N.ready=!1,N}a.options.react&&a.options.react.wait!==void 0&&Kf("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...Rx(),...a.options.react,...e},{useSuspense:f,keyPrefix:u}=c;let p=t||l||a.options&&a.options.defaultNS;p=typeof p=="string"?[p]:p||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(p);const y=(a.isInitialized||a.initializedStoreOnce)&&p.every(E=>Ix(E,a,c)),d=$x(a,e.lng||null,c.nsMode==="fallback"?p:p[0],u),O=()=>d,S=()=>Hh(a,e.lng||null,c.nsMode==="fallback"?p:p[0],u),[j,x]=H.useState(O);let P=p.join();e.lng&&(P=`${e.lng}${P}`);const m=Mx(P),h=H.useRef(!0);H.useEffect(()=>{const{bindI18n:E,bindI18nStore:N}=c;h.current=!0,!y&&!f&&(e.lng?ld(a,e.lng,p,()=>{h.current&&x(S)}):od(a,p,()=>{h.current&&x(S)})),y&&m&&m!==P&&h.current&&x(S);function _(){h.current&&x(S)}return E&&a&&a.on(E,_),N&&a&&a.store.on(N,_),()=>{h.current=!1,E&&a&&E.split(" ").forEach(T=>a.off(T,_)),N&&a&&N.split(" ").forEach(T=>a.store.off(T,_))}},[a,P]);const b=H.useRef(!0);H.useEffect(()=>{h.current&&!b.current&&x(O),b.current=!1},[a,u]);const v=[j,a,y];if(v.t=j,v.i18n=a,v.ready=y,y||!y&&!f)return v;throw new Promise(E=>{e.lng?ld(a,e.lng,p,()=>E()):od(a,p,()=>E())})}function zx(t){let{i18n:e,defaultNS:r,children:o}=t;const l=H.useMemo(()=>({i18n:e,defaultNS:r}),[e,r]);return H.createElement(Uh.Provider,{value:l},o)}/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},dl.apply(this,arguments)}var An;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(An||(An={}));const id="popstate";function Ux(t){t===void 0&&(t={});function e(o,l){let{pathname:a,search:c,hash:f}=o.location;return Qf("",{pathname:a,search:c,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(o,l){return typeof l=="string"?l:Ji(l)}return qx(e,r,null,t)}function He(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function fu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Hx(){return Math.random().toString(36).substr(2,8)}function ad(t,e){return{usr:t.state,key:t.key,idx:e}}function Qf(t,e,r,o){return r===void 0&&(r=null),dl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?yo(e):e,{state:r,key:e&&e.key||o||Hx()})}function Ji(t){let{pathname:e="/",search:r="",hash:o=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function yo(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let o=t.indexOf("?");o>=0&&(e.search=t.substr(o),t=t.substr(0,o)),t&&(e.pathname=t)}return e}function qx(t,e,r,o){o===void 0&&(o={});let{window:l=document.defaultView,v5Compat:a=!1}=o,c=l.history,f=An.Pop,u=null,p=y();p==null&&(p=0,c.replaceState(dl({},c.state,{idx:p}),""));function y(){return(c.state||{idx:null}).idx}function d(){f=An.Pop;let P=y(),m=P==null?null:P-p;p=P,u&&u({action:f,location:x.location,delta:m})}function O(P,m){f=An.Push;let h=Qf(x.location,P,m);r&&r(h,P),p=y()+1;let b=ad(h,p),v=x.createHref(h);try{c.pushState(b,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;l.location.assign(v)}a&&u&&u({action:f,location:x.location,delta:1})}function S(P,m){f=An.Replace;let h=Qf(x.location,P,m);r&&r(h,P),p=y();let b=ad(h,p),v=x.createHref(h);c.replaceState(b,"",v),a&&u&&u({action:f,location:x.location,delta:0})}function j(P){let m=l.location.origin!=="null"?l.location.origin:l.location.href,h=typeof P=="string"?P:Ji(P);return He(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let x={get action(){return f},get location(){return t(l,c)},listen(P){if(u)throw new Error("A history only accepts one active listener");return l.addEventListener(id,d),u=P,()=>{l.removeEventListener(id,d),u=null}},createHref(P){return e(l,P)},createURL:j,encodeLocation(P){let m=j(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:O,replace:S,go(P){return c.go(P)}};return x}var cd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(cd||(cd={}));function Wx(t,e,r){r===void 0&&(r="/");let o=typeof e=="string"?yo(e):e,l=co(o.pathname||"/",r);if(l==null)return null;let a=qh(t);Vx(a);let c=null;for(let f=0;c==null&&f<a.length;++f)c=t0(a[f],r0(l));return c}function qh(t,e,r,o){e===void 0&&(e=[]),r===void 0&&(r=[]),o===void 0&&(o="");let l=(a,c,f)=>{let u={relativePath:f===void 0?a.path||"":f,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};u.relativePath.startsWith("/")&&(He(u.relativePath.startsWith(o),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(o.length));let p=Hn([o,u.relativePath]),y=r.concat(u);a.children&&a.children.length>0&&(He(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),qh(a.children,e,y,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:Zx(p,a.index),routesMeta:y})};return t.forEach((a,c)=>{var f;if(a.path===""||!((f=a.path)!=null&&f.includes("?")))l(a,c);else for(let u of Wh(a.path))l(a,c,u)}),e}function Wh(t){let e=t.split("/");if(e.length===0)return[];let[r,...o]=e,l=r.endsWith("?"),a=r.replace(/\?$/,"");if(o.length===0)return l?[a,""]:[a];let c=Wh(o.join("/")),f=[];return f.push(...c.map(u=>u===""?a:[a,u].join("/"))),l&&f.push(...c),f.map(u=>t.startsWith("/")&&u===""?"/":u)}function Vx(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:e0(e.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const Gx=/^:[\w-]+$/,Xx=3,Jx=2,Kx=1,Qx=10,Yx=-2,fd=t=>t==="*";function Zx(t,e){let r=t.split("/"),o=r.length;return r.some(fd)&&(o+=Yx),e&&(o+=Jx),r.filter(l=>!fd(l)).reduce((l,a)=>l+(Gx.test(a)?Xx:a===""?Kx:Qx),o)}function e0(t,e){return t.length===e.length&&t.slice(0,-1).every((o,l)=>o===e[l])?t[t.length-1]-e[e.length-1]:0}function t0(t,e){let{routesMeta:r}=t,o={},l="/",a=[];for(let c=0;c<r.length;++c){let f=r[c],u=c===r.length-1,p=l==="/"?e:e.slice(l.length)||"/",y=Yf({path:f.relativePath,caseSensitive:f.caseSensitive,end:u},p);if(!y)return null;Object.assign(o,y.params);let d=f.route;a.push({params:o,pathname:Hn([l,y.pathname]),pathnameBase:c0(Hn([l,y.pathnameBase])),route:d}),y.pathnameBase!=="/"&&(l=Hn([l,y.pathnameBase]))}return a}function Yf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,o]=n0(t.path,t.caseSensitive,t.end),l=e.match(r);if(!l)return null;let a=l[0],c=a.replace(/(.)\/+$/,"$1"),f=l.slice(1);return{params:o.reduce((p,y,d)=>{let{paramName:O,isOptional:S}=y;if(O==="*"){let x=f[d]||"";c=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const j=f[d];return S&&!j?p[O]=void 0:p[O]=o0(j||"",O),p},{}),pathname:a,pathnameBase:c,pattern:t}}function n0(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),fu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let o=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,f,u)=>(o.push({paramName:f,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),o]}function r0(t){try{return decodeURI(t)}catch(e){return fu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function o0(t,e){try{return decodeURIComponent(t)}catch(r){return fu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function co(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,o=t.charAt(r);return o&&o!=="/"?null:t.slice(r)||"/"}function l0(t,e){e===void 0&&(e="/");let{pathname:r,search:o="",hash:l=""}=typeof t=="string"?yo(t):t;return{pathname:r?r.startsWith("/")?r:i0(r,e):e,search:f0(o),hash:s0(l)}}function i0(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Xc(t,e,r,o){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function a0(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function Vh(t,e){let r=a0(t);return e?r.map((o,l)=>l===t.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function Gh(t,e,r,o){o===void 0&&(o=!1);let l;typeof t=="string"?l=yo(t):(l=dl({},t),He(!l.pathname||!l.pathname.includes("?"),Xc("?","pathname","search",l)),He(!l.pathname||!l.pathname.includes("#"),Xc("#","pathname","hash",l)),He(!l.search||!l.search.includes("#"),Xc("#","search","hash",l)));let a=t===""||l.pathname==="",c=a?"/":l.pathname,f;if(c==null)f=r;else{let d=e.length-1;if(!o&&c.startsWith("..")){let O=c.split("/");for(;O[0]==="..";)O.shift(),d-=1;l.pathname=O.join("/")}f=d>=0?e[d]:"/"}let u=l0(l,f),p=c&&c!=="/"&&c.endsWith("/"),y=(a||c===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(p||y)&&(u.pathname+="/"),u}const Hn=t=>t.join("/").replace(/\/\/+/g,"/"),c0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),f0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,s0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function u0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Xh=["post","put","patch","delete"];new Set(Xh);const p0=["get",...Xh];new Set(p0);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yl(){return yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},yl.apply(this,arguments)}const _a=H.createContext(null),Jh=H.createContext(null),Zn=H.createContext(null),Ea=H.createContext(null),wr=H.createContext({outlet:null,matches:[],isDataRoute:!1}),Kh=H.createContext(null);function d0(t,e){let{relative:r}=e===void 0?{}:e;El()||He(!1);let{basename:o,navigator:l}=H.useContext(Zn),{hash:a,pathname:c,search:f}=Ia(t,{relative:r}),u=c;return o!=="/"&&(u=c==="/"?o:Hn([o,c])),l.createHref({pathname:u,search:f,hash:a})}function El(){return H.useContext(Ea)!=null}function Oo(){return El()||He(!1),H.useContext(Ea).location}function Qh(t){H.useContext(Zn).static||H.useLayoutEffect(t)}function Yh(){let{isDataRoute:t}=H.useContext(wr);return t?_0():y0()}function y0(){El()||He(!1);let t=H.useContext(_a),{basename:e,future:r,navigator:o}=H.useContext(Zn),{matches:l}=H.useContext(wr),{pathname:a}=Oo(),c=JSON.stringify(Vh(l,r.v7_relativeSplatPath)),f=H.useRef(!1);return Qh(()=>{f.current=!0}),H.useCallback(function(p,y){if(y===void 0&&(y={}),!f.current)return;if(typeof p=="number"){o.go(p);return}let d=Gh(p,JSON.parse(c),a,y.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Hn([e,d.pathname])),(y.replace?o.replace:o.push)(d,y.state,y)},[e,o,c,a,t])}function Ia(t,e){let{relative:r}=e===void 0?{}:e,{future:o}=H.useContext(Zn),{matches:l}=H.useContext(wr),{pathname:a}=Oo(),c=JSON.stringify(Vh(l,o.v7_relativeSplatPath));return H.useMemo(()=>Gh(t,JSON.parse(c),a,r==="path"),[t,c,a,r])}function O0(t,e){return h0(t,e)}function h0(t,e,r,o){El()||He(!1);let{navigator:l}=H.useContext(Zn),{matches:a}=H.useContext(wr),c=a[a.length-1],f=c?c.params:{};c&&c.pathname;let u=c?c.pathnameBase:"/";c&&c.route;let p=Oo(),y;if(e){var d;let P=typeof e=="string"?yo(e):e;u==="/"||(d=P.pathname)!=null&&d.startsWith(u)||He(!1),y=P}else y=p;let O=y.pathname||"/",S=u==="/"?O:O.slice(u.length)||"/",j=Wx(t,{pathname:S}),x=x0(j&&j.map(P=>Object.assign({},P,{params:Object.assign({},f,P.params),pathname:Hn([u,l.encodeLocation?l.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?u:Hn([u,l.encodeLocation?l.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),a,r,o);return e&&x?H.createElement(Ea.Provider,{value:{location:yl({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:An.Pop}},x):x}function b0(){let t=S0(),e=u0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),r?H.createElement("pre",{style:l},r):null,null)}const m0=H.createElement(b0,null);class g0 extends H.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?H.createElement(wr.Provider,{value:this.props.routeContext},H.createElement(Kh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function j0(t){let{routeContext:e,match:r,children:o}=t,l=H.useContext(_a);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),H.createElement(wr.Provider,{value:e},o)}function x0(t,e,r,o){var l;if(e===void 0&&(e=[]),r===void 0&&(r=null),o===void 0&&(o=null),t==null){var a;if((a=r)!=null&&a.errors)t=r.matches;else return null}let c=t,f=(l=r)==null?void 0:l.errors;if(f!=null){let y=c.findIndex(d=>d.route.id&&(f==null?void 0:f[d.route.id]));y>=0||He(!1),c=c.slice(0,Math.min(c.length,y+1))}let u=!1,p=-1;if(r&&o&&o.v7_partialHydration)for(let y=0;y<c.length;y++){let d=c[y];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(p=y),d.route.id){let{loaderData:O,errors:S}=r,j=d.route.loader&&O[d.route.id]===void 0&&(!S||S[d.route.id]===void 0);if(d.route.lazy||j){u=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((y,d,O)=>{let S,j=!1,x=null,P=null;r&&(S=f&&d.route.id?f[d.route.id]:void 0,x=d.route.errorElement||m0,u&&(p<0&&O===0?(E0("route-fallback",!1),j=!0,P=null):p===O&&(j=!0,P=d.route.hydrateFallbackElement||null)));let m=e.concat(c.slice(0,O+1)),h=()=>{let b;return S?b=x:j?b=P:d.route.Component?b=H.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=y,H.createElement(j0,{match:d,routeContext:{outlet:y,matches:m,isDataRoute:r!=null},children:b})};return r&&(d.route.ErrorBoundary||d.route.errorElement||O===0)?H.createElement(g0,{location:r.location,revalidation:r.revalidation,component:x,error:S,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var Zh=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Zh||{}),Ki=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ki||{});function v0(t){let e=H.useContext(_a);return e||He(!1),e}function w0(t){let e=H.useContext(Jh);return e||He(!1),e}function P0(t){let e=H.useContext(wr);return e||He(!1),e}function eb(t){let e=P0(),r=e.matches[e.matches.length-1];return r.route.id||He(!1),r.route.id}function S0(){var t;let e=H.useContext(Kh),r=w0(Ki.UseRouteError),o=eb(Ki.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[o]}function _0(){let{router:t}=v0(Zh.UseNavigateStable),e=eb(Ki.UseNavigateStable),r=H.useRef(!1);return Qh(()=>{r.current=!0}),H.useCallback(function(l,a){a===void 0&&(a={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,yl({fromRouteId:e},a)))},[t,e])}const sd={};function E0(t,e,r){!e&&!sd[t]&&(sd[t]=!0)}function tb(t){He(!1)}function I0(t){let{basename:e="/",children:r=null,location:o,navigationType:l=An.Pop,navigator:a,static:c=!1,future:f}=t;El()&&He(!1);let u=e.replace(/^\/*/,"/"),p=H.useMemo(()=>({basename:u,navigator:a,static:c,future:yl({v7_relativeSplatPath:!1},f)}),[u,f,a,c]);typeof o=="string"&&(o=yo(o));let{pathname:y="/",search:d="",hash:O="",state:S=null,key:j="default"}=o,x=H.useMemo(()=>{let P=co(y,u);return P==null?null:{location:{pathname:P,search:d,hash:O,state:S,key:j},navigationType:l}},[u,y,d,O,S,j,l]);return x==null?null:H.createElement(Zn.Provider,{value:p},H.createElement(Ea.Provider,{children:r,value:x}))}function k0(t){let{children:e,location:r}=t;return O0(Zf(e),r)}new Promise(()=>{});function Zf(t,e){e===void 0&&(e=[]);let r=[];return H.Children.forEach(t,(o,l)=>{if(!H.isValidElement(o))return;let a=[...e,l];if(o.type===H.Fragment){r.push.apply(r,Zf(o.props.children,a));return}o.type!==tb&&He(!1),!o.props.index||!o.props.children||He(!1);let c={id:o.props.id||a.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=Zf(o.props.children,a)),r.push(c)}),r}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qi(){return Qi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Qi.apply(this,arguments)}function nb(t,e){if(t==null)return{};var r={},o=Object.keys(t),l,a;for(a=0;a<o.length;a++)l=o[a],!(e.indexOf(l)>=0)&&(r[l]=t[l]);return r}function N0(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function C0(t,e){return t.button===0&&(!e||e==="_self")&&!N0(t)}const T0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],A0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],R0="6";try{window.__reactRouterVersion=R0}catch{}const L0=H.createContext({isTransitioning:!1}),D0="startTransition",ud=Hg[D0];function F0(t){let{basename:e,children:r,future:o,window:l}=t,a=H.useRef();a.current==null&&(a.current=Ux({window:l,v5Compat:!0}));let c=a.current,[f,u]=H.useState({action:c.action,location:c.location}),{v7_startTransition:p}=o||{},y=H.useCallback(d=>{p&&ud?ud(()=>u(d)):u(d)},[u,p]);return H.useLayoutEffect(()=>c.listen(y),[c,y]),H.createElement(I0,{basename:e,children:r,location:f.location,navigationType:f.action,navigator:c,future:o})}const M0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B0=H.forwardRef(function(e,r){let{onClick:o,relative:l,reloadDocument:a,replace:c,state:f,target:u,to:p,preventScrollReset:y,unstable_viewTransition:d}=e,O=nb(e,T0),{basename:S}=H.useContext(Zn),j,x=!1;if(typeof p=="string"&&$0.test(p)&&(j=p,M0))try{let b=new URL(window.location.href),v=p.startsWith("//")?new URL(b.protocol+p):new URL(p),E=co(v.pathname,S);v.origin===b.origin&&E!=null?p=E+v.search+v.hash:x=!0}catch{}let P=d0(p,{relative:l}),m=H0(p,{replace:c,state:f,target:u,preventScrollReset:y,relative:l,unstable_viewTransition:d});function h(b){o&&o(b),b.defaultPrevented||m(b)}return H.createElement("a",Qi({},O,{href:j||P,onClick:x||a?o:h,ref:r,target:u}))}),z0=H.forwardRef(function(e,r){let{"aria-current":o="page",caseSensitive:l=!1,className:a="",end:c=!1,style:f,to:u,unstable_viewTransition:p,children:y}=e,d=nb(e,A0),O=Ia(u,{relative:d.relative}),S=Oo(),j=H.useContext(Jh),{navigator:x,basename:P}=H.useContext(Zn),m=j!=null&&q0(O)&&p===!0,h=x.encodeLocation?x.encodeLocation(O).pathname:O.pathname,b=S.pathname,v=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;l||(b=b.toLowerCase(),v=v?v.toLowerCase():null,h=h.toLowerCase()),v&&P&&(v=co(v,P)||v);const E=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let N=b===h||!c&&b.startsWith(h)&&b.charAt(E)==="/",_=v!=null&&(v===h||!c&&v.startsWith(h)&&v.charAt(h.length)==="/"),T={isActive:N,isPending:_,isTransitioning:m},$=N?o:void 0,R;typeof a=="function"?R=a(T):R=[a,N?"active":null,_?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let W=typeof f=="function"?f(T):f;return H.createElement(B0,Qi({},d,{"aria-current":$,className:R,ref:r,style:W,to:u,unstable_viewTransition:p}),typeof y=="function"?y(T):y)});var es;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(es||(es={}));var pd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pd||(pd={}));function U0(t){let e=H.useContext(_a);return e||He(!1),e}function H0(t,e){let{target:r,replace:o,state:l,preventScrollReset:a,relative:c,unstable_viewTransition:f}=e===void 0?{}:e,u=Yh(),p=Oo(),y=Ia(t,{relative:c});return H.useCallback(d=>{if(C0(d,r)){d.preventDefault();let O=o!==void 0?o:Ji(p)===Ji(y);u(t,{replace:O,state:l,preventScrollReset:a,relative:c,unstable_viewTransition:f})}},[p,u,y,o,l,r,t,a,c,f])}function q0(t,e){e===void 0&&(e={});let r=H.useContext(L0);r==null&&He(!1);let{basename:o}=U0(es.useViewTransitionState),l=Ia(t,{relative:e.relative});if(!r.isTransitioning)return!1;let a=co(r.currentLocation.pathname,o)||r.currentLocation.pathname,c=co(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Yf(l.pathname,c)!=null||Yf(l.pathname,a)!=null}const W0=/\.([a-z]{2})\.mdx?$/;function V0(t){const e=t.match(W0);return e?e[1]:"en"}const G0=/\.([a-z]{2})\.mdx?$/;function ts(t){let e=t.startsWith("/")?t:"/"+t;const r=e.match(G0);return r&&(e="/"+r[1]+e),e=e.replace(/(\/README)?(\.[a-z]{2})?\.mdx?$/,"/").toLocaleLowerCase(),e}const Jc=/^\/([a-z]{2})\//;function X0(t,e){return t.match(Jc)?e==="en"?t.replace(Jc,"/"):t.replace(Jc,"/"+e+"/"):e==="en"?t:"/"+e+t}function J0({docs:t,languages:e}){const r=Oo(),o=Yh(),{i18n:l}=Bx();return H.useEffect(()=>{const a=X0(r.pathname,l.language);a!==r.pathname&&o(a)},[l.language,r.pathname,o]),n.jsx("aside",{className:"doc-ui-site-nav",children:n.jsxs("nav",{className:"doc-ui-site-nav-inner",children:[t.filter(a=>V0(a.filepath)===l.language).map(a=>({title:a.title,path:ts(a.filepath)})).sort((a,c)=>a.path.localeCompare(c.path)).map(a=>n.jsx(z0,{className:"doc-ui-site-nav-item",to:ts(a.path),end:!0,children:a.title},a.path)),e&&n.jsx("select",{value:l.language,onChange:a=>l.changeLanguage(a.target.value),children:e.map(a=>n.jsx("option",{value:a.code,children:a.name},a.code))})]})})}var K0=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function rb(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=K0(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:Ze("bi","bi-check-circle",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),n.jsx("path",{d:"m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"})]}))}var Q0=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function Y0(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=Q0(t,["className","size","color"]);return n.jsx("svg",Object.assign({},l,{className:Ze("bi","bi-copy",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:n.jsx("path",{fillRule:"evenodd",d:"M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"})}))}var Z0=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function ev(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=Z0(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:Ze("bi","bi-exclamation-circle",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),n.jsx("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"})]}))}var tv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function nv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=tv(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:Ze("bi","bi-info-circle",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),n.jsx("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})]}))}var rv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function ov(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=rv(t,["className","size","color"]);return n.jsx("svg",Object.assign({},l,{className:Ze("bi","bi-laptop",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:n.jsx("path",{d:"M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"})}))}var lv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function iv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=lv(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:Ze("bi","bi-phone",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"}),n.jsx("path",{d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"})]}))}var av=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function cv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=av(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:Ze("bi","bi-tablet",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"}),n.jsx("path",{d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"})]}))}var fv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function sv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=fv(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:Ze("bi","bi-x-circle",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),n.jsx("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"})]}))}function uv({type:t="info",children:e}){const r=H.useMemo(()=>{switch(t){case"error":return n.jsx(sv,{});case"success":return n.jsx(rb,{});case"warning":return n.jsx(ev,{});default:return n.jsx(nv,{})}},[t]);return n.jsxs("div",{className:Ze("doc-ui-alert","doc-ui-alert-"+t),children:[n.jsx("div",{className:"doc-ui-alert-icon",children:r}),n.jsx("div",{className:"doc-ui-alert-main",children:e})]})}function ob(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(e=0;e<l;e++)t[e]&&(r=ob(t[e]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function lb(){for(var t,e,r=0,o="",l=arguments.length;r<l;r++)(t=arguments[r])&&(e=ob(t))&&(o&&(o+=" "),o+=e);return o}var pv=Object.create,ka=Object.defineProperty,dv=Object.defineProperties,yv=Object.getOwnPropertyDescriptor,Ov=Object.getOwnPropertyDescriptors,ib=Object.getOwnPropertyNames,Yi=Object.getOwnPropertySymbols,hv=Object.getPrototypeOf,su=Object.prototype.hasOwnProperty,ab=Object.prototype.propertyIsEnumerable,dd=(t,e,r)=>e in t?ka(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,cn=(t,e)=>{for(var r in e||(e={}))su.call(e,r)&&dd(t,r,e[r]);if(Yi)for(var r of Yi(e))ab.call(e,r)&&dd(t,r,e[r]);return t},Na=(t,e)=>dv(t,Ov(e)),cb=(t,e)=>{var r={};for(var o in t)su.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&Yi)for(var o of Yi(t))e.indexOf(o)<0&&ab.call(t,o)&&(r[o]=t[o]);return r},bv=(t,e)=>function(){return e||(0,t[ib(t)[0]])((e={exports:{}}).exports,e),e.exports},mv=(t,e)=>{for(var r in e)ka(t,r,{get:e[r],enumerable:!0})},gv=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of ib(e))!su.call(t,l)&&l!==r&&ka(t,l,{get:()=>e[l],enumerable:!(o=yv(e,l))||o.enumerable});return t},jv=(t,e,r)=>(r=t!=null?pv(hv(t)):{},gv(e||!t||!t.__esModule?ka(r,"default",{value:t,enumerable:!0}):r,t)),xv=bv({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(t,e){var r=function(){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,a={},c={util:{encode:function j(x){return x instanceof f?new f(x.type,j(x.content),x.alias):Array.isArray(x)?x.map(j):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(j){return Object.prototype.toString.call(j).slice(8,-1)},objId:function(j){return j.__id||Object.defineProperty(j,"__id",{value:++l}),j.__id},clone:function j(x,P){P=P||{};var m,h;switch(c.util.type(x)){case"Object":if(h=c.util.objId(x),P[h])return P[h];m={},P[h]=m;for(var b in x)x.hasOwnProperty(b)&&(m[b]=j(x[b],P));return m;case"Array":return h=c.util.objId(x),P[h]?P[h]:(m=[],P[h]=m,x.forEach(function(v,E){m[E]=j(v,P)}),m);default:return x}},getLanguage:function(j){for(;j;){var x=o.exec(j.className);if(x)return x[1].toLowerCase();j=j.parentElement}return"none"},setLanguage:function(j,x){j.className=j.className.replace(RegExp(o,"gi"),""),j.classList.add("language-"+x)},isActive:function(j,x,P){for(var m="no-"+x;j;){var h=j.classList;if(h.contains(x))return!0;if(h.contains(m))return!1;j=j.parentElement}return!!P}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(j,x){var P=c.util.clone(c.languages[j]);for(var m in x)P[m]=x[m];return P},insertBefore:function(j,x,P,m){m=m||c.languages;var h=m[j],b={};for(var v in h)if(h.hasOwnProperty(v)){if(v==x)for(var E in P)P.hasOwnProperty(E)&&(b[E]=P[E]);P.hasOwnProperty(v)||(b[v]=h[v])}var N=m[j];return m[j]=b,c.languages.DFS(c.languages,function(_,T){T===N&&_!=j&&(this[_]=b)}),b},DFS:function j(x,P,m,h){h=h||{};var b=c.util.objId;for(var v in x)if(x.hasOwnProperty(v)){P.call(x,v,x[v],m||v);var E=x[v],N=c.util.type(E);N==="Object"&&!h[b(E)]?(h[b(E)]=!0,j(E,P,null,h)):N==="Array"&&!h[b(E)]&&(h[b(E)]=!0,j(E,P,v,h))}}},plugins:{},highlight:function(j,x,P){var m={code:j,grammar:x,language:P};if(c.hooks.run("before-tokenize",m),!m.grammar)throw new Error('The language "'+m.language+'" has no grammar.');return m.tokens=c.tokenize(m.code,m.grammar),c.hooks.run("after-tokenize",m),f.stringify(c.util.encode(m.tokens),m.language)},tokenize:function(j,x){var P=x.rest;if(P){for(var m in P)x[m]=P[m];delete x.rest}var h=new y;return d(h,h.head,j),p(j,h,x,h.head,0),S(h)},hooks:{all:{},add:function(j,x){var P=c.hooks.all;P[j]=P[j]||[],P[j].push(x)},run:function(j,x){var P=c.hooks.all[j];if(!(!P||!P.length))for(var m=0,h;h=P[m++];)h(x)}},Token:f};function f(j,x,P,m){this.type=j,this.content=x,this.alias=P,this.length=(m||"").length|0}f.stringify=function j(x,P){if(typeof x=="string")return x;if(Array.isArray(x)){var m="";return x.forEach(function(N){m+=j(N,P)}),m}var h={type:x.type,content:j(x.content,P),tag:"span",classes:["token",x.type],attributes:{},language:P},b=x.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(h.classes,b):h.classes.push(b)),c.hooks.run("wrap",h);var v="";for(var E in h.attributes)v+=" "+E+'="'+(h.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+h.tag+' class="'+h.classes.join(" ")+'"'+v+">"+h.content+"</"+h.tag+">"};function u(j,x,P,m){j.lastIndex=x;var h=j.exec(P);if(h&&m&&h[1]){var b=h[1].length;h.index+=b,h[0]=h[0].slice(b)}return h}function p(j,x,P,m,h,b){for(var v in P)if(!(!P.hasOwnProperty(v)||!P[v])){var E=P[v];E=Array.isArray(E)?E:[E];for(var N=0;N<E.length;++N){if(b&&b.cause==v+","+N)return;var _=E[N],T=_.inside,$=!!_.lookbehind,R=!!_.greedy,W=_.alias;if(R&&!_.pattern.global){var X=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,X+"g")}for(var oe=_.pattern||_,le=m.next,je=h;le!==x.tail&&!(b&&je>=b.reach);je+=le.value.length,le=le.next){var Pe=le.value;if(x.length>j.length)return;if(!(Pe instanceof f)){var _e=1,z;if(R){if(z=u(oe,je,j,$),!z||z.index>=j.length)break;var Oe=z.index,Y=z.index+z[0].length,Q=je;for(Q+=le.value.length;Oe>=Q;)le=le.next,Q+=le.value.length;if(Q-=le.value.length,je=Q,le.value instanceof f)continue;for(var fe=le;fe!==x.tail&&(Q<Y||typeof fe.value=="string");fe=fe.next)_e++,Q+=fe.value.length;_e--,Pe=j.slice(je,Q),z.index-=je}else if(z=u(oe,0,Pe,$),!z)continue;var Oe=z.index,Re=z[0],ke=Pe.slice(0,Oe),D=Pe.slice(Oe+Re.length),U=je+Pe.length;b&&U>b.reach&&(b.reach=U);var C=le.prev;ke&&(C=d(x,C,ke),je+=ke.length),O(x,C,_e);var I=new f(v,T?c.tokenize(Re,T):Re,W,Re);if(le=d(x,C,I),D&&d(x,le,D),_e>1){var A={cause:v+","+N,reach:U};p(j,x,P,le.prev,je,A),b&&A.reach>b.reach&&(b.reach=A.reach)}}}}}}function y(){var j={value:null,prev:null,next:null},x={value:null,prev:j,next:null};j.next=x,this.head=j,this.tail=x,this.length=0}function d(j,x,P){var m=x.next,h={value:P,prev:x,next:m};return x.next=h,m.prev=h,j.length++,h}function O(j,x,P){for(var m=x.next,h=0;h<P&&m!==j.tail;h++)m=m.next;x.next=m,m.prev=x,j.length-=h}function S(j){for(var x=[],P=j.head.next;P!==j.tail;)x.push(P.value),P=P.next;return x}return c}();e.exports=r,r.default=r}}),q=jv(xv());q.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},q.languages.markup.tag.inside["attr-value"].inside.entity=q.languages.markup.entity,q.languages.markup.doctype.inside["internal-subset"].inside=q.languages.markup,q.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(q.languages.markup.tag,"addInlined",{value:function(t,o){var r={},r=(r["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:q.languages[o]},r.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}}),o=(r["language-"+o]={pattern:/[\s\S]+/,inside:q.languages[o]},{});o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},q.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(q.languages.markup.tag,"addAttribute",{value:function(t,e){q.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:q.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),q.languages.html=q.languages.markup,q.languages.mathml=q.languages.markup,q.languages.svg=q.languages.markup,q.languages.xml=q.languages.extend("markup",{}),q.languages.ssml=q.languages.xml,q.languages.atom=q.languages.xml,q.languages.rss=q.languages.xml,function(t){var e={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},r=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,o="(?:[^\\\\-]|"+r.source+")",o=RegExp(o+"-"+o),l={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};t.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:o,inside:{escape:r,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":e,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:r}},"special-escape":e,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":l}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:r,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":l}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(q),q.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},q.languages.javascript=q.languages.extend("clike",{"class-name":[q.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),q.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,q.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:q.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:q.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:q.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:q.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:q.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),q.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:q.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),q.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),q.languages.markup&&(q.languages.markup.tag.addInlined("script","javascript"),q.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),q.languages.js=q.languages.javascript,q.languages.actionscript=q.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),q.languages.actionscript["class-name"].alias="function",delete q.languages.actionscript.parameter,delete q.languages.actionscript["literal-property"],q.languages.markup&&q.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:q.languages.markup}}),function(t){var e=/#(?!\{).+/,r={pattern:/#\{[^}]+\}/,alias:"variable"};t.languages.coffeescript=t.languages.extend("javascript",{comment:e,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:r}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),t.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:e,interpolation:r}}}),t.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:t.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:r}}]}),t.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete t.languages.coffeescript["template-string"],t.languages.coffee=t.languages.coffeescript}(q),function(t){var e=t.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(r,o){(r=typeof r=="string"?[r]:r).forEach(function(l){var a=function(d){d.inside||(d.inside={}),d.inside.rest=o},c="doc-comment";if(f=t.languages[l]){var f,u=f[c];if((u=u||(f=t.languages.insertBefore(l,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[c])instanceof RegExp&&(u=f[c]={pattern:u}),Array.isArray(u))for(var p=0,y=u.length;p<y;p++)u[p]instanceof RegExp&&(u[p]={pattern:u[p]}),a(u[p]);else a(u)}})}}),e.addSupport(["java","javascript","php"],e)}(q),function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,e=(t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup);e&&(e.tag.addInlined("style","css"),e.tag.addAttribute("style","css"))}(q),function(t){var e=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,e=(t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:e={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+e.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[e,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=e,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),r={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:e,number:r,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:e,number:r})}(q),function(t){var e=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,o="(?:"+r.source+"(?:[ 	]+"+e.source+")?|"+e.source+"(?:[ 	]+"+r.source+")?)",l=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),a=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function c(f,u){u=(u||"").replace(/m/g,"")+"m";var p=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<value>>/g,function(){return f});return RegExp(p,u)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return o})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<key>>/g,function(){return"(?:"+l+"|"+a+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:c(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:c(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:c(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:c(a),lookbehind:!0,greedy:!0},number:{pattern:c(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:e,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml}(q),function(t){var e=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function r(p){return p=p.replace(/<inner>/g,function(){return e}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+p+")")}var o=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,l=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return o}),a=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,c=(t.languages.markdown=t.languages.extend("markup",{}),t.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:t.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+l+a+"(?:"+l+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+l+a+")(?:"+l+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(o),inside:t.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+l+")"+a+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+l+"$"),inside:{"table-header":{pattern:RegExp(o),alias:"important",inside:t.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:r(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(p){["url","bold","italic","strike","code-snippet"].forEach(function(y){p!==y&&(t.languages.markdown[p].inside.content.inside[y]=t.languages.markdown[y])})}),t.hooks.add("after-tokenize",function(p){p.language!=="markdown"&&p.language!=="md"||function y(d){if(d&&typeof d!="string")for(var O=0,S=d.length;O<S;O++){var j,x=d[O];x.type!=="code"?y(x.content):(j=x.content[1],x=x.content[3],j&&x&&j.type==="code-language"&&x.type==="code-block"&&typeof j.content=="string"&&(j=j.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),j="language-"+(j=(/[a-z][\w-]*/i.exec(j)||[""])[0].toLowerCase()),x.alias?typeof x.alias=="string"?x.alias=[x.alias,j]:x.alias.push(j):x.alias=[j]))}}(p.tokens)}),t.hooks.add("wrap",function(p){if(p.type==="code-block"){for(var y="",d=0,O=p.classes.length;d<O;d++){var S=p.classes[d],S=/language-(.+)/.exec(S);if(S){y=S[1];break}}var j,x=t.languages[y];x?p.content=t.highlight(function(P){return P=P.replace(c,""),P=P.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(m,h){var b;return(h=h.toLowerCase())[0]==="#"?(b=h[1]==="x"?parseInt(h.slice(2),16):Number(h.slice(1)),u(b)):f[h]||m})}(p.content),x,y):y&&y!=="none"&&t.plugins.autoloader&&(j="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),p.attributes.id=j,t.plugins.autoloader.loadLanguages(y,function(){var P=document.getElementById(j);P&&(P.innerHTML=t.highlight(P.textContent,t.languages[y],y))}))}}),RegExp(t.languages.markup.tag.pattern.source,"gi")),f={amp:"&",lt:"<",gt:">",quot:'"'},u=String.fromCodePoint||String.fromCharCode;t.languages.md=t.languages.markdown}(q),q.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:q.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},q.hooks.add("after-tokenize",function(t){if(t.language==="graphql")for(var e=t.tokens.filter(function(j){return typeof j!="string"&&j.type!=="comment"&&j.type!=="scalar"}),r=0;r<e.length;){var o=e[r++];if(o.type==="keyword"&&o.content==="mutation"){var l=[];if(d(["definition-mutation","punctuation"])&&y(1).content==="("){r+=2;var a=O(/^\($/,/^\)$/);if(a===-1)continue;for(;r<a;r++){var c=y(0);c.type==="variable"&&(S(c,"variable-input"),l.push(c.content))}r=a+1}if(d(["punctuation","property-query"])&&y(0).content==="{"&&(r++,S(y(0),"property-mutation"),0<l.length)){var f=O(/^\{$/,/^\}$/);if(f!==-1)for(var u=r;u<f;u++){var p=e[u];p.type==="variable"&&0<=l.indexOf(p.content)&&S(p,"variable-input")}}}}function y(j){return e[r+j]}function d(j,x){x=x||0;for(var P=0;P<j.length;P++){var m=y(P+x);if(!m||m.type!==j[P])return}return 1}function O(j,x){for(var P=1,m=r;m<e.length;m++){var h=e[m],b=h.content;if(h.type==="punctuation"&&typeof b=="string"){if(j.test(b))P++;else if(x.test(b)&&--P===0)return m}}return-1}function S(j,x){var P=j.alias;P?Array.isArray(P)||(j.alias=P=[P]):j.alias=P=[],P.push(x)}}),q.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(t){var e=t.languages.javascript["template-string"],r=e.pattern.source,o=e.inside.interpolation,l=o.inside["interpolation-punctuation"],a=o.pattern.source;function c(d,O){if(t.languages[d])return{pattern:RegExp("((?:"+O+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:d}}}}function f(d,O,S){return d={code:d,grammar:O,language:S},t.hooks.run("before-tokenize",d),d.tokens=t.tokenize(d.code,d.grammar),t.hooks.run("after-tokenize",d),d.tokens}function u(d,O,S){var P=t.tokenize(d,{interpolation:{pattern:RegExp(a),lookbehind:!0}}),j=0,x={},P=f(P.map(function(h){if(typeof h=="string")return h;for(var b,v,h=h.content;d.indexOf((v=j++,b="___"+S.toUpperCase()+"_"+v+"___"))!==-1;);return x[b]=h,b}).join(""),O,S),m=Object.keys(x);return j=0,function h(b){for(var v=0;v<b.length;v++){if(j>=m.length)return;var E,N,_,T,$,R,W,X=b[v];typeof X=="string"||typeof X.content=="string"?(E=m[j],(W=(R=typeof X=="string"?X:X.content).indexOf(E))!==-1&&(++j,N=R.substring(0,W),$=x[E],_=void 0,(T={})["interpolation-punctuation"]=l,(T=t.tokenize($,T)).length===3&&((_=[1,1]).push.apply(_,f(T[1],t.languages.javascript,"javascript")),T.splice.apply(T,_)),_=new t.Token("interpolation",T,o.alias,$),T=R.substring(W+E.length),$=[],N&&$.push(N),$.push(_),T&&(h(R=[T]),$.push.apply($,R)),typeof X=="string"?(b.splice.apply(b,[v,1].concat($)),v+=$.length-1):X.content=$)):(W=X.content,Array.isArray(W)?h(W):h([W]))}}(P),new t.Token(S,P,"language-"+S,d)}t.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),e].filter(Boolean);var p={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function y(d){return typeof d=="string"?d:Array.isArray(d)?d.map(y).join(""):y(d.content)}t.hooks.add("after-tokenize",function(d){d.language in p&&function O(S){for(var j=0,x=S.length;j<x;j++){var P,m,h,b=S[j];typeof b!="string"&&(P=b.content,Array.isArray(P)?b.type==="template-string"?(b=P[1],P.length===3&&typeof b!="string"&&b.type==="embedded-code"&&(m=y(b),b=b.alias,b=Array.isArray(b)?b[0]:b,h=t.languages[b])&&(P[1]=u(m,h,b))):O(P):typeof P!="string"&&O([P]))}}(d.tokens)})}(q),function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var e=t.languages.extend("typescript",{});delete e["class-name"],t.languages.typescript["class-name"].inside=e,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),t.languages.ts=t.languages.typescript}(q),function(t){var e=t.languages.javascript,r=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,o="(@(?:arg|argument|param|property)\\s+(?:"+r+"\\s+)?)";t.languages.jsdoc=t.languages.extend("javadoclike",{parameter:{pattern:RegExp(o+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),t.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(o+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:e,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return r})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+r),lookbehind:!0,inside:{string:e.string,number:e.number,boolean:e.boolean,keyword:t.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:e,alias:"language-javascript"}}}}),t.languages.javadoclike.addSupport("javascript",t.languages.jsdoc)}(q),function(t){t.languages.flow=t.languages.extend("javascript",{}),t.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),t.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete t.languages.flow.parameter,t.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(t.languages.flow.keyword)||(t.languages.flow.keyword=[t.languages.flow.keyword]),t.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(q),q.languages.n4js=q.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),q.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),q.languages.n4jsd=q.languages.n4js,function(t){function e(c,f){return RegExp(c.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),f)}t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),t.languages.insertBefore("javascript","keyword",{imports:{pattern:e(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:e(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:e(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],o=0;o<r.length;o++){var a=r[o],l=t.languages.javascript[a],a=(l=t.util.type(l)==="RegExp"?t.languages.javascript[a]={pattern:l}:l).inside||{};(l.inside=a)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(q),function(t){var e=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(u,p){return u=u.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return l}),RegExp(u,p)}l=a(l).source,t.languages.jsx=t.languages.extend("markup",e),t.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=e.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);function c(u){for(var p=[],y=0;y<u.length;y++){var d=u[y],O=!1;typeof d!="string"&&(d.type==="tag"&&d.content[0]&&d.content[0].type==="tag"?d.content[0].content[0].content==="</"?0<p.length&&p[p.length-1].tagName===f(d.content[0].content[1])&&p.pop():d.content[d.content.length-1].content!=="/>"&&p.push({tagName:f(d.content[0].content[1]),openedBraces:0}):0<p.length&&d.type==="punctuation"&&d.content==="{"?p[p.length-1].openedBraces++:0<p.length&&0<p[p.length-1].openedBraces&&d.type==="punctuation"&&d.content==="}"?p[p.length-1].openedBraces--:O=!0),(O||typeof d=="string")&&0<p.length&&p[p.length-1].openedBraces===0&&(O=f(d),y<u.length-1&&(typeof u[y+1]=="string"||u[y+1].type==="plain-text")&&(O+=f(u[y+1]),u.splice(y+1,1)),0<y&&(typeof u[y-1]=="string"||u[y-1].type==="plain-text")&&(O=f(u[y-1])+O,u.splice(y-1,1),y--),u[y]=new t.Token("plain-text",O,null,O)),d.content&&typeof d.content!="string"&&c(d.content)}}var f=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(f).join(""):""};t.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||c(u.tokens)})}(q),function(t){var e=t.util.clone(t.languages.typescript),e=(t.languages.tsx=t.languages.extend("jsx",e),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"],t.languages.tsx.tag);e.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+e.pattern.source+")",e.pattern.flags),e.lookbehind=!0}(q),q.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},q.languages.swift["string-literal"].forEach(function(t){t.inside.interpolation.inside=q.languages.swift}),function(t){t.languages.kotlin=t.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete t.languages.kotlin["class-name"];var e={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:t.languages.kotlin}};t.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:e},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:e},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete t.languages.kotlin.string,t.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),t.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),t.languages.kt=t.languages.kotlin,t.languages.kts=t.languages.kotlin}(q),q.languages.c=q.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),q.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),q.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},q.languages.c.string],char:q.languages.c.char,comment:q.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:q.languages.c}}}}),q.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete q.languages.c.boolean,q.languages.objectivec=q.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete q.languages.objectivec["class-name"],q.languages.objc=q.languages.objectivec,q.languages.reason=q.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),q.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete q.languages.reason.function,function(t){for(var e=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,r=0;r<2;r++)e=e.replace(/<self>/g,function(){return e});e=e.replace(/<self>/g,function(){return/[^\s\S]/.source}),t.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+e),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},t.languages.rust["closure-params"].inside.rest=t.languages.rust,t.languages.rust.attribute.inside.string=t.languages.rust.string}(q),q.languages.go=q.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),q.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete q.languages.go["class-name"],function(t){var e=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,r=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return e.source});t.languages.cpp=t.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return e.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:e,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),t.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return r})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),t.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t.languages.cpp}}}}),t.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),t.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:t.languages.extend("cpp",{})}}),t.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},t.languages.cpp["base-clause"])}(q),q.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},q.languages.python["string-interpolation"].inside.interpolation.inside.rest=q.languages.python,q.languages.py=q.languages.python;var fb={};mv(fb,{dracula:()=>wv,duotoneDark:()=>Sv,duotoneLight:()=>Ev,github:()=>kv,jettwaveDark:()=>Kv,jettwaveLight:()=>Yv,nightOwl:()=>Cv,nightOwlLight:()=>Av,oceanicNext:()=>Lv,okaidia:()=>Fv,oneDark:()=>ew,oneLight:()=>nw,palenight:()=>$v,shadesOfPurple:()=>zv,synthwave84:()=>Hv,ultramin:()=>Wv,vsDark:()=>sb,vsLight:()=>Xv});var vv={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},wv=vv,Pv={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Sv=Pv,_v={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},Ev=_v,Iv={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},kv=Iv,Nv={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},Cv=Nv,Tv={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},Av=Tv,Pt={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",punctuation:"#5FB3B3",tag:"#fc929e",function:"#79b6f2",className:"#FAC863",method:"#6699CC",operator:"#fc929e"},Rv={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:Pt.keyword}},{types:["attr-value"],style:{color:Pt.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:Pt.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:Pt.primitive}},{types:["boolean"],style:{color:Pt.boolean}},{types:["tag"],style:{color:Pt.tag}},{types:["string"],style:{color:Pt.string}},{types:["punctuation"],style:{color:Pt.string}},{types:["selector","char","builtin","inserted"],style:{color:Pt.char}},{types:["function"],style:{color:Pt.function}},{types:["operator","entity","url","variable"],style:{color:Pt.variable}},{types:["keyword"],style:{color:Pt.keyword}},{types:["atrule","class-name"],style:{color:Pt.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},Lv=Rv,Dv={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},Fv=Dv,Mv={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},$v=Mv,Bv={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},zv=Bv,Uv={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},Hv=Uv,qv={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},Wv=qv,Vv={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},sb=Vv,Gv={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},Xv=Gv,Jv={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Kv=Jv,Qv={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},Yv=Qv,Zv={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},ew=Zv,tw={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},nw=tw,rw=(t,e)=>{const{plain:r}=t,o=t.styles.reduce((l,a)=>{const{languages:c,style:f}=a;return c&&!c.includes(e)||a.types.forEach(u=>{const p=cn(cn({},l[u]),f);l[u]=p}),l},{});return o.root=r,o.plain=Na(cn({},r),{backgroundColor:void 0}),o},yd=rw,ow=(t,e)=>{const[r,o]=H.useState(yd(e,t)),l=H.useRef(),a=H.useRef();return H.useEffect(()=>{(e!==l.current||t!==a.current)&&(l.current=e,a.current=t,o(yd(e,t)))},[t,e]),r},lw=t=>H.useCallback(e=>{var r=e,{className:o,style:l,line:a}=r,c=cb(r,["className","style","line"]);const f=Na(cn({},c),{className:lb("token-line",o)});return typeof t=="object"&&"plain"in t&&(f.style=t.plain),typeof l=="object"&&(f.style=cn(cn({},f.style||{}),l)),f},[t]),iw=t=>{const e=H.useCallback(({types:r,empty:o})=>{if(t!=null){{if(r.length===1&&r[0]==="plain")return o!=null?{display:"inline-block"}:void 0;if(r.length===1&&o!=null)return t[r[0]]}return Object.assign(o!=null?{display:"inline-block"}:{},...r.map(l=>t[l]))}},[t]);return H.useCallback(r=>{var o=r,{token:l,className:a,style:c}=o,f=cb(o,["token","className","style"]);const u=Na(cn({},f),{className:lb("token",...l.types,a),children:l.content,style:e(l)});return c!=null&&(u.style=cn(cn({},u.style||{}),c)),u},[e])},aw=/\r\n|\r|\n/,Od=t=>{t.length===0?t.push({types:["plain"],content:`
`,empty:!0}):t.length===1&&t[0].content===""&&(t[0].content=`
`,t[0].empty=!0)},hd=(t,e)=>{const r=t.length;return r>0&&t[r-1]===e?t:t.concat(e)},cw=t=>{const e=[[]],r=[t],o=[0],l=[t.length];let a=0,c=0,f=[];const u=[f];for(;c>-1;){for(;(a=o[c]++)<l[c];){let p,y=e[c];const O=r[c][a];if(typeof O=="string"?(y=c>0?y:["plain"],p=O):(y=hd(y,O.type),O.alias&&(y=hd(y,O.alias)),p=O.content),typeof p!="string"){c++,e.push(y),r.push(p),o.push(0),l.push(p.length);continue}const S=p.split(aw),j=S.length;f.push({types:y,content:S[0]});for(let x=1;x<j;x++)Od(f),u.push(f=[]),f.push({types:y,content:S[x]})}c--,e.pop(),r.pop(),o.pop(),l.pop()}return Od(f),u},bd=cw,fw=({prism:t,code:e,grammar:r,language:o})=>{const l=H.useRef(t);return H.useMemo(()=>{if(r==null)return bd([e]);const a={code:e,grammar:r,language:o,tokens:[]};return l.current.hooks.run("before-tokenize",a),a.tokens=l.current.tokenize(e,r),l.current.hooks.run("after-tokenize",a),bd(a.tokens)},[e,r,o])},sw=({children:t,language:e,code:r,theme:o,prism:l})=>{const a=e.toLowerCase(),c=ow(a,o),f=lw(c),u=iw(c),p=l.languages[a],y=fw({prism:l,language:a,code:r,grammar:p});return t({tokens:y,className:`prism-code language-${a}`,style:c!=null?c.root:{},getLineProps:f,getTokenProps:u})},ub=t=>H.createElement(sw,Na(cn({},t),{prism:t.prism||q,theme:t.theme||sb,code:t.code,language:t.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/function Ol({children:t,icon:e,color:r,className:o,style:l,onClick:a}){return n.jsxs("a",{className:Ze("doc-ui-tool-button","doc-ui-tool-button-"+r,o),onClick:a,style:l,children:[e&&n.jsx("span",{className:"doc-ui-tool-button-icon",children:e}),t]})}function uw({locale:t}){return n.jsx(Ol,{color:"success",icon:n.jsx(rb,{}),children:(t==null?void 0:t.success)||"Success"})}function pb({code:t,locale:e}){const[r,o]=H.useState(!1);return H.useEffect(()=>{let l=0;return r&&(l=window.setTimeout(()=>{o(!1)},1500)),()=>{window.clearTimeout(l)}},[r]),r?n.jsx(uw,{locale:e}):n.jsxs(Ol,{onClick:()=>{navigator.clipboard.writeText(t||"").then(()=>{o(!0)}).catch()},children:[n.jsx(Y0,{}),(e==null?void 0:e.copy)||"Copy"]})}function db({language:t,filename:e}){return n.jsxs("span",{className:"doc-ui-file-name",children:[t&&n.jsx("span",{className:Ze("doc-ui-file-name-icon","doc-ui-file-name-icon-"+t),children:t==="bash"?">_":t}),n.jsx("span",{className:"doc-ui-file-name-text",children:e})]})}function yb(){return n.jsx("div",{style:{flex:"1 1 auto"}})}function Ob({children:t}){return n.jsx("div",{className:"doc-ui-toolbar",children:t})}function pw({code:t,children:e,filename:r,language:o="bash",className:l}){return n.jsxs("div",{className:Ze("doc-ui-code-block",l),children:[n.jsxs(Ob,{children:[n.jsx(db,{language:o,filename:r}),n.jsx(yb,{}),n.jsx(pb,{code:t})]}),n.jsx(ub,{theme:{plain:{},styles:[]},code:t||e||"",language:o,children:({tokens:a,getLineProps:c,getTokenProps:f,...u})=>n.jsx("pre",{...u,children:a.map((p,y)=>n.jsx("div",{...c({line:p}),children:p.map((d,O)=>n.jsx("span",{...f({token:d})},O))},y))})})]})}function dw({className:t,...e}){return n.jsx("code",{className:Ze("doc-ui-code-inline",t),...e})}var yw={characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0};function Zl(t){var e=window.getSelection();e.empty(),e.addRange(t)}function md(t){return(t.metaKey||t.ctrlKey)&&!t.altKey&&t.code==="KeyZ"}function Rr(t){t=[t.firstChild];for(var e,r="";e=t.pop();)e.nodeType===Node.TEXT_NODE?r+=e.textContent:e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="BR"&&(r+=`
`),e.nextSibling&&t.push(e.nextSibling),e.firstChild&&t.push(e.firstChild);return r[r.length-1]!==`
`&&(r+=`
`),r}function dn(t){var e=window.getSelection().getRangeAt(0),r=e.collapsed?0:e.toString().length,o=document.createRange();return o.setStart(t,0),o.setEnd(e.startContainer,e.startOffset),{position:t=(o=o.toString()).length,extent:r,content:o=(o=o.split(`
`))[e=o.length-1],line:e}}function ko(t,e,r){0>=e&&(e=0),(!r||0>r)&&(r=e);var o=document.createRange();t=[t.firstChild];for(var l,a=0,c=e;l=t[t.length-1];){if(l.nodeType===Node.TEXT_NODE){if(a+l.textContent.length>=c){var f=c-a;if(c===e)if(c=o,f<l.textContent.length?c.setStart(l,f):c.setStartAfter(l),r!==e){c=r;continue}else break;else{e=o,f<(r=l).textContent.length?e.setEnd(r,f):e.setEndAfter(r);break}}a+=l.textContent.length}else if(l.nodeType===Node.ELEMENT_NODE&&l.nodeName==="BR"){if(a+1>=c)if(c===e)if(f=o,0<l.textContent.length?f.setStart(l,0):f.setStartAfter(l),r!==e){c=r;continue}else break;else{e=o,0<(r=l).textContent.length?e.setEnd(r,0):e.setEndAfter(r);break}a++}t.pop(),l.nextSibling&&t.push(l.nextSibling),l.firstChild&&t.push(l.firstChild)}return o}function Ow(t,e,r){function o(d){var O=t.current;if(O){var S=dn(O);O=Rr(O),S.position+=d.length-O.length,p.position=S,p.onChange(d,S)}}function l(d,O){var S=t.current;if(S){var j=window.getSelection().getRangeAt(0);j.deleteContents(),j.collapse();var x=O||0;(j=ko(S,O=(j=dn(S)).position+(0>x?x:0),j.position+(0<x?x:0))).deleteContents(),d&&j.insertNode(document.createTextNode(d)),Zl(ko(S,O+d.length))}}function a(d){var O=t.current;if(O){O.focus();var S=0;if(typeof d=="number")S=d;else{var j=Rr(O).split(`
`).slice(0,d.row);d.row&&(S+=j.join(`
`).length+1),S+=d.column}Zl(ko(O,S))}}function c(){var d=t.current;return{text:Rr(d),position:d=dn(d)}}function f(){p.observer.disconnect()}r||(r={});var u=H.useState([])[1],p=H.useState(function(){var d={observer:null,disconnected:!1,onChange:e,queue:[],history:[],historyAt:-1,position:null};return typeof MutationObserver<"u"&&(d.observer=new MutationObserver(function(O){var S;(S=d.queue).push.apply(S,O)})),d})[0],y=H.useMemo(function(){return{update:o,insert:l,move:a,getState:c}},[]);return typeof navigator!="object"||(H.useLayoutEffect(function(){if(p.onChange=e,t.current&&!r.disabled){if(p.disconnected=!1,p.observer.observe(t.current,yw),p.position){var d=p.position,O=d.position;Zl(ko(t.current,O,O+d.extent))}return f}}),H.useLayoutEffect(function(){if(!t.current||r.disabled)p.history.length=0,p.historyAt=-1;else{var d=t.current;if(p.position){d.focus();var O=p.position,S=O.position;Zl(ko(d,S,S+O.extent))}var j=d.style.whiteSpace,x=d.contentEditable,P=!0;try{d.contentEditable="plaintext-only"}catch{d.contentEditable="true",P=!1}j!=="pre"&&(d.style.whiteSpace="pre-wrap"),r.indentation&&(d.style.tabSize=d.style.MozTabSize=""+r.indentation),O=""+" ".repeat(r.indentation||0);var m,h=new RegExp("^(?:"+O+")"),b=new RegExp("^(?:"+O+")*("+O+")$"),v=function(R){if(t.current&&p.position){var W=Rr(d),X=dn(d),oe=new Date().valueOf(),le=p.history[p.historyAt];!R&&500>oe-m||le&&le[1]===W?m=oe:(R=++p.historyAt,p.history[R]=[X,W],p.history.splice(R+1),500<R&&(p.historyAt--,p.history.shift()))}},E=function(){var R;if((R=p.queue).push.apply(R,p.observer.takeRecords()),R=dn(d),p.queue.length){p.observer.disconnect(),p.disconnected=!0;var W=Rr(d);p.position=R;for(var X,oe;X=p.queue.pop();){for(X.oldValue!==null&&(X.target.textContent=X.oldValue),oe=X.removedNodes.length-1;0<=oe;oe--)X.target.insertBefore(X.removedNodes[oe],X.nextSibling);for(oe=X.addedNodes.length-1;0<=oe;oe--)X.addedNodes[oe].parentNode&&X.target.removeChild(X.addedNodes[oe])}p.onChange(W,R)}},N=function(R){if(!R.defaultPrevented&&R.target===d){if(p.disconnected)return R.preventDefault(),u([]);if(md(R))R.preventDefault(),R.shiftKey?(R=++p.historyAt,(R=p.history[R])||(p.historyAt=p.history.length-1)):(R=--p.historyAt,(R=p.history[R])||(p.historyAt=0)),R&&(p.observer.disconnect(),p.disconnected=!0,p.position=R[0],p.onChange(R[1],R[0]));else{if(v(),R.key==="Enter"){R.preventDefault();var W=dn(d),X=/\S/g.exec(W.content);W=`
`+W.content.slice(0,X?X.index:W.content.length),y.insert(W)}else if((!P||r.indentation)&&R.key==="Backspace")R.preventDefault(),window.getSelection().getRangeAt(0).collapsed?(W=dn(d),W=b.exec(W.content),y.insert("",W?-W[1].length:-1)):y.insert("",0);else if(r.indentation&&R.key==="Tab"){R.preventDefault(),X=(W=dn(d)).position-W.content.length;var oe=Rr(d);W=R.shiftKey?oe.slice(0,X)+W.content.replace(h,"")+oe.slice(X+W.content.length):oe.slice(0,X)+(r.indentation?" ".repeat(r.indentation):"	")+oe.slice(X),y.update(W)}R.repeat&&E()}}},_=function(R){R.defaultPrevented||R.isComposing||(md(R)||v(),E(),d.focus())},T=function(R){p.position=window.getSelection().rangeCount&&R.target===d?dn(d):null},$=function(R){R.preventDefault(),v(!0),y.insert(R.clipboardData.getData("text/plain")),v(!0),E()};return document.addEventListener("selectstart",T),window.addEventListener("keydown",N),d.addEventListener("paste",$),d.addEventListener("keyup",_),function(){document.removeEventListener("selectstart",T),window.removeEventListener("keydown",N),d.removeEventListener("paste",$),d.removeEventListener("keyup",_),d.style.whiteSpace=j,d.contentEditable=x}}},[t.current,r.disabled,r.indentation])),y}var w;(function(t){t[t.NONE=0]="NONE";const r=1;t[t._abstract=r]="_abstract";const o=r+1;t[t._accessor=o]="_accessor";const l=o+1;t[t._as=l]="_as";const a=l+1;t[t._assert=a]="_assert";const c=a+1;t[t._asserts=c]="_asserts";const f=c+1;t[t._async=f]="_async";const u=f+1;t[t._await=u]="_await";const p=u+1;t[t._checks=p]="_checks";const y=p+1;t[t._constructor=y]="_constructor";const d=y+1;t[t._declare=d]="_declare";const O=d+1;t[t._enum=O]="_enum";const S=O+1;t[t._exports=S]="_exports";const j=S+1;t[t._from=j]="_from";const x=j+1;t[t._get=x]="_get";const P=x+1;t[t._global=P]="_global";const m=P+1;t[t._implements=m]="_implements";const h=m+1;t[t._infer=h]="_infer";const b=h+1;t[t._interface=b]="_interface";const v=b+1;t[t._is=v]="_is";const E=v+1;t[t._keyof=E]="_keyof";const N=E+1;t[t._mixins=N]="_mixins";const _=N+1;t[t._module=_]="_module";const T=_+1;t[t._namespace=T]="_namespace";const $=T+1;t[t._of=$]="_of";const R=$+1;t[t._opaque=R]="_opaque";const W=R+1;t[t._out=W]="_out";const X=W+1;t[t._override=X]="_override";const oe=X+1;t[t._private=oe]="_private";const le=oe+1;t[t._protected=le]="_protected";const je=le+1;t[t._proto=je]="_proto";const Pe=je+1;t[t._public=Pe]="_public";const _e=Pe+1;t[t._readonly=_e]="_readonly";const z=_e+1;t[t._require=z]="_require";const Y=z+1;t[t._satisfies=Y]="_satisfies";const Q=Y+1;t[t._set=Q]="_set";const fe=Q+1;t[t._static=fe]="_static";const Oe=fe+1;t[t._symbol=Oe]="_symbol";const Re=Oe+1;t[t._type=Re]="_type";const ke=Re+1;t[t._unique=ke]="_unique";const D=ke+1;t[t._using=D]="_using"})(w||(w={}));var i;(function(t){t[t.PRECEDENCE_MASK=15]="PRECEDENCE_MASK";const r=16;t[t.IS_KEYWORD=r]="IS_KEYWORD";const o=32;t[t.IS_ASSIGN=o]="IS_ASSIGN";const l=64;t[t.IS_RIGHT_ASSOCIATIVE=l]="IS_RIGHT_ASSOCIATIVE";const a=128;t[t.IS_PREFIX=a]="IS_PREFIX";const c=256;t[t.IS_POSTFIX=c]="IS_POSTFIX";const f=512;t[t.IS_EXPRESSION_START=f]="IS_EXPRESSION_START";const u=512;t[t.num=u]="num";const p=1536;t[t.bigint=p]="bigint";const y=2560;t[t.decimal=y]="decimal";const d=3584;t[t.regexp=d]="regexp";const O=4608;t[t.string=O]="string";const S=5632;t[t.name=S]="name";const j=6144;t[t.eof=j]="eof";const x=7680;t[t.bracketL=x]="bracketL";const P=8192;t[t.bracketR=P]="bracketR";const m=9728;t[t.braceL=m]="braceL";const h=10752;t[t.braceBarL=h]="braceBarL";const b=11264;t[t.braceR=b]="braceR";const v=12288;t[t.braceBarR=v]="braceBarR";const E=13824;t[t.parenL=E]="parenL";const N=14336;t[t.parenR=N]="parenR";const _=15360;t[t.comma=_]="comma";const T=16384;t[t.semi=T]="semi";const $=17408;t[t.colon=$]="colon";const R=18432;t[t.doubleColon=R]="doubleColon";const W=19456;t[t.dot=W]="dot";const X=20480;t[t.question=X]="question";const oe=21504;t[t.questionDot=oe]="questionDot";const le=22528;t[t.arrow=le]="arrow";const je=23552;t[t.template=je]="template";const Pe=24576;t[t.ellipsis=Pe]="ellipsis";const _e=25600;t[t.backQuote=_e]="backQuote";const z=27136;t[t.dollarBraceL=z]="dollarBraceL";const Y=27648;t[t.at=Y]="at";const Q=29184;t[t.hash=Q]="hash";const fe=29728;t[t.eq=fe]="eq";const Oe=30752;t[t.assign=Oe]="assign";const Re=32640;t[t.preIncDec=Re]="preIncDec";const ke=33664;t[t.postIncDec=ke]="postIncDec";const D=34432;t[t.bang=D]="bang";const U=35456;t[t.tilde=U]="tilde";const C=35841;t[t.pipeline=C]="pipeline";const I=36866;t[t.nullishCoalescing=I]="nullishCoalescing";const A=37890;t[t.logicalOR=A]="logicalOR";const B=38915;t[t.logicalAND=B]="logicalAND";const G=39940;t[t.bitwiseOR=G]="bitwiseOR";const J=40965;t[t.bitwiseXOR=J]="bitwiseXOR";const Z=41990;t[t.bitwiseAND=Z]="bitwiseAND";const ie=43015;t[t.equality=ie]="equality";const ae=44040;t[t.lessThan=ae]="lessThan";const pe=45064;t[t.greaterThan=pe]="greaterThan";const he=46088;t[t.relationalOrEqual=he]="relationalOrEqual";const be=47113;t[t.bitShiftL=be]="bitShiftL";const xe=48137;t[t.bitShiftR=xe]="bitShiftR";const Me=49802;t[t.plus=Me]="plus";const Ve=50826;t[t.minus=Ve]="minus";const st=51723;t[t.modulo=st]="modulo";const lt=52235;t[t.star=lt]="star";const tr=53259;t[t.slash=tr]="slash";const _r=54348;t[t.exponent=_r]="exponent";const go=55296;t[t.jsxName=go]="jsxName";const Er=56320;t[t.jsxText=Er]="jsxText";const nr=57344;t[t.jsxEmptyText=nr]="jsxEmptyText";const Bt=58880;t[t.jsxTagStart=Bt]="jsxTagStart";const Sn=59392;t[t.jsxTagEnd=Sn]="jsxTagEnd";const Ir=60928;t[t.typeParameterStart=Ir]="typeParameterStart";const kr=61440;t[t.nonNullAssertion=kr]="nonNullAssertion";const Nr=62480;t[t._break=Nr]="_break";const Ba=63504;t[t._case=Ba]="_case";const za=64528;t[t._catch=za]="_catch";const Ua=65552;t[t._continue=Ua]="_continue";const Ha=66576;t[t._debugger=Ha]="_debugger";const qa=67600;t[t._default=qa]="_default";const Wa=68624;t[t._do=Wa]="_do";const Va=69648;t[t._else=Va]="_else";const Ga=70672;t[t._finally=Ga]="_finally";const Xa=71696;t[t._for=Xa]="_for";const Ja=73232;t[t._function=Ja]="_function";const Ka=73744;t[t._if=Ka]="_if";const Qa=74768;t[t._return=Qa]="_return";const Ya=75792;t[t._switch=Ya]="_switch";const Za=77456;t[t._throw=Za]="_throw";const ec=77840;t[t._try=ec]="_try";const tc=78864;t[t._var=tc]="_var";const nc=79888;t[t._let=nc]="_let";const rc=80912;t[t._const=rc]="_const";const oc=81936;t[t._while=oc]="_while";const lc=82960;t[t._with=lc]="_with";const ic=84496;t[t._new=ic]="_new";const ac=85520;t[t._this=ac]="_this";const cc=86544;t[t._super=cc]="_super";const fc=87568;t[t._class=fc]="_class";const sc=88080;t[t._extends=sc]="_extends";const uc=89104;t[t._export=uc]="_export";const pc=90640;t[t._import=pc]="_import";const dc=91664;t[t._yield=dc]="_yield";const yc=92688;t[t._null=yc]="_null";const Oc=93712;t[t._true=Oc]="_true";const hc=94736;t[t._false=hc]="_false";const bc=95256;t[t._in=bc]="_in";const mc=96280;t[t._instanceof=mc]="_instanceof";const gc=97936;t[t._typeof=gc]="_typeof";const jc=98960;t[t._void=jc]="_void";const ug=99984;t[t._delete=ug]="_delete";const pg=100880;t[t._async=pg]="_async";const dg=101904;t[t._get=dg]="_get";const yg=102928;t[t._set=yg]="_set";const Og=103952;t[t._declare=Og]="_declare";const hg=104976;t[t._readonly=hg]="_readonly";const bg=106e3;t[t._abstract=bg]="_abstract";const mg=107024;t[t._static=mg]="_static";const gg=107536;t[t._public=gg]="_public";const jg=108560;t[t._private=jg]="_private";const xg=109584;t[t._protected=xg]="_protected";const vg=110608;t[t._override=vg]="_override";const wg=112144;t[t._as=wg]="_as";const Pg=113168;t[t._enum=Pg]="_enum";const Sg=114192;t[t._type=Sg]="_type";const _g=115216;t[t._implements=_g]="_implements"})(i||(i={}));function hw(t){switch(t){case i.num:return"num";case i.bigint:return"bigint";case i.decimal:return"decimal";case i.regexp:return"regexp";case i.string:return"string";case i.name:return"name";case i.eof:return"eof";case i.bracketL:return"[";case i.bracketR:return"]";case i.braceL:return"{";case i.braceBarL:return"{|";case i.braceR:return"}";case i.braceBarR:return"|}";case i.parenL:return"(";case i.parenR:return")";case i.comma:return",";case i.semi:return";";case i.colon:return":";case i.doubleColon:return"::";case i.dot:return".";case i.question:return"?";case i.questionDot:return"?.";case i.arrow:return"=>";case i.template:return"template";case i.ellipsis:return"...";case i.backQuote:return"`";case i.dollarBraceL:return"${";case i.at:return"@";case i.hash:return"#";case i.eq:return"=";case i.assign:return"_=";case i.preIncDec:return"++/--";case i.postIncDec:return"++/--";case i.bang:return"!";case i.tilde:return"~";case i.pipeline:return"|>";case i.nullishCoalescing:return"??";case i.logicalOR:return"||";case i.logicalAND:return"&&";case i.bitwiseOR:return"|";case i.bitwiseXOR:return"^";case i.bitwiseAND:return"&";case i.equality:return"==/!=";case i.lessThan:return"<";case i.greaterThan:return">";case i.relationalOrEqual:return"<=/>=";case i.bitShiftL:return"<<";case i.bitShiftR:return">>/>>>";case i.plus:return"+";case i.minus:return"-";case i.modulo:return"%";case i.star:return"*";case i.slash:return"/";case i.exponent:return"**";case i.jsxName:return"jsxName";case i.jsxText:return"jsxText";case i.jsxEmptyText:return"jsxEmptyText";case i.jsxTagStart:return"jsxTagStart";case i.jsxTagEnd:return"jsxTagEnd";case i.typeParameterStart:return"typeParameterStart";case i.nonNullAssertion:return"nonNullAssertion";case i._break:return"break";case i._case:return"case";case i._catch:return"catch";case i._continue:return"continue";case i._debugger:return"debugger";case i._default:return"default";case i._do:return"do";case i._else:return"else";case i._finally:return"finally";case i._for:return"for";case i._function:return"function";case i._if:return"if";case i._return:return"return";case i._switch:return"switch";case i._throw:return"throw";case i._try:return"try";case i._var:return"var";case i._let:return"let";case i._const:return"const";case i._while:return"while";case i._with:return"with";case i._new:return"new";case i._this:return"this";case i._super:return"super";case i._class:return"class";case i._extends:return"extends";case i._export:return"export";case i._import:return"import";case i._yield:return"yield";case i._null:return"null";case i._true:return"true";case i._false:return"false";case i._in:return"in";case i._instanceof:return"instanceof";case i._typeof:return"typeof";case i._void:return"void";case i._delete:return"delete";case i._async:return"async";case i._get:return"get";case i._set:return"set";case i._declare:return"declare";case i._readonly:return"readonly";case i._abstract:return"abstract";case i._static:return"static";case i._public:return"public";case i._private:return"private";case i._protected:return"protected";case i._override:return"override";case i._as:return"as";case i._enum:return"enum";case i._type:return"type";case i._implements:return"implements";default:return""}}class un{constructor(e,r,o){this.startTokenIndex=e,this.endTokenIndex=r,this.isFunctionScope=o}}class bw{constructor(e,r,o,l,a,c,f,u,p,y,d,O,S){this.potentialArrowAt=e,this.noAnonFunctionType=r,this.inDisallowConditionalTypesContext=o,this.tokensLength=l,this.scopesLength=a,this.pos=c,this.type=f,this.contextualKeyword=u,this.start=p,this.end=y,this.isType=d,this.scopeDepth=O,this.error=S}}class ut{constructor(){ut.prototype.__init.call(this),ut.prototype.__init2.call(this),ut.prototype.__init3.call(this),ut.prototype.__init4.call(this),ut.prototype.__init5.call(this),ut.prototype.__init6.call(this),ut.prototype.__init7.call(this),ut.prototype.__init8.call(this),ut.prototype.__init9.call(this),ut.prototype.__init10.call(this),ut.prototype.__init11.call(this),ut.prototype.__init12.call(this),ut.prototype.__init13.call(this)}__init(){this.potentialArrowAt=-1}__init2(){this.noAnonFunctionType=!1}__init3(){this.inDisallowConditionalTypesContext=!1}__init4(){this.tokens=[]}__init5(){this.scopes=[]}__init6(){this.pos=0}__init7(){this.type=i.eof}__init8(){this.contextualKeyword=w.NONE}__init9(){this.start=0}__init10(){this.end=0}__init11(){this.isType=!1}__init12(){this.scopeDepth=0}__init13(){this.error=null}snapshot(){return new bw(this.potentialArrowAt,this.noAnonFunctionType,this.inDisallowConditionalTypesContext,this.tokens.length,this.scopes.length,this.pos,this.type,this.contextualKeyword,this.start,this.end,this.isType,this.scopeDepth,this.error)}restoreFromSnapshot(e){this.potentialArrowAt=e.potentialArrowAt,this.noAnonFunctionType=e.noAnonFunctionType,this.inDisallowConditionalTypesContext=e.inDisallowConditionalTypesContext,this.tokens.length=e.tokensLength,this.scopes.length=e.scopesLength,this.pos=e.pos,this.type=e.type,this.contextualKeyword=e.contextualKeyword,this.start=e.start,this.end=e.end,this.isType=e.isType,this.scopeDepth=e.scopeDepth,this.error=e.error}}var k;(function(t){t[t.backSpace=8]="backSpace";const r=10;t[t.lineFeed=r]="lineFeed";const o=9;t[t.tab=o]="tab";const l=13;t[t.carriageReturn=l]="carriageReturn";const a=14;t[t.shiftOut=a]="shiftOut";const c=32;t[t.space=c]="space";const f=33;t[t.exclamationMark=f]="exclamationMark";const u=34;t[t.quotationMark=u]="quotationMark";const p=35;t[t.numberSign=p]="numberSign";const y=36;t[t.dollarSign=y]="dollarSign";const d=37;t[t.percentSign=d]="percentSign";const O=38;t[t.ampersand=O]="ampersand";const S=39;t[t.apostrophe=S]="apostrophe";const j=40;t[t.leftParenthesis=j]="leftParenthesis";const x=41;t[t.rightParenthesis=x]="rightParenthesis";const P=42;t[t.asterisk=P]="asterisk";const m=43;t[t.plusSign=m]="plusSign";const h=44;t[t.comma=h]="comma";const b=45;t[t.dash=b]="dash";const v=46;t[t.dot=v]="dot";const E=47;t[t.slash=E]="slash";const N=48;t[t.digit0=N]="digit0";const _=49;t[t.digit1=_]="digit1";const T=50;t[t.digit2=T]="digit2";const $=51;t[t.digit3=$]="digit3";const R=52;t[t.digit4=R]="digit4";const W=53;t[t.digit5=W]="digit5";const X=54;t[t.digit6=X]="digit6";const oe=55;t[t.digit7=oe]="digit7";const le=56;t[t.digit8=le]="digit8";const je=57;t[t.digit9=je]="digit9";const Pe=58;t[t.colon=Pe]="colon";const _e=59;t[t.semicolon=_e]="semicolon";const z=60;t[t.lessThan=z]="lessThan";const Y=61;t[t.equalsTo=Y]="equalsTo";const Q=62;t[t.greaterThan=Q]="greaterThan";const fe=63;t[t.questionMark=fe]="questionMark";const Oe=64;t[t.atSign=Oe]="atSign";const Re=65;t[t.uppercaseA=Re]="uppercaseA";const ke=66;t[t.uppercaseB=ke]="uppercaseB";const D=67;t[t.uppercaseC=D]="uppercaseC";const U=68;t[t.uppercaseD=U]="uppercaseD";const C=69;t[t.uppercaseE=C]="uppercaseE";const I=70;t[t.uppercaseF=I]="uppercaseF";const A=71;t[t.uppercaseG=A]="uppercaseG";const B=72;t[t.uppercaseH=B]="uppercaseH";const G=73;t[t.uppercaseI=G]="uppercaseI";const J=74;t[t.uppercaseJ=J]="uppercaseJ";const Z=75;t[t.uppercaseK=Z]="uppercaseK";const ie=76;t[t.uppercaseL=ie]="uppercaseL";const ae=77;t[t.uppercaseM=ae]="uppercaseM";const pe=78;t[t.uppercaseN=pe]="uppercaseN";const he=79;t[t.uppercaseO=he]="uppercaseO";const be=80;t[t.uppercaseP=be]="uppercaseP";const xe=81;t[t.uppercaseQ=xe]="uppercaseQ";const Me=82;t[t.uppercaseR=Me]="uppercaseR";const Ve=83;t[t.uppercaseS=Ve]="uppercaseS";const st=84;t[t.uppercaseT=st]="uppercaseT";const lt=85;t[t.uppercaseU=lt]="uppercaseU";const tr=86;t[t.uppercaseV=tr]="uppercaseV";const _r=87;t[t.uppercaseW=_r]="uppercaseW";const go=88;t[t.uppercaseX=go]="uppercaseX";const Er=89;t[t.uppercaseY=Er]="uppercaseY";const nr=90;t[t.uppercaseZ=nr]="uppercaseZ";const Bt=91;t[t.leftSquareBracket=Bt]="leftSquareBracket";const Sn=92;t[t.backslash=Sn]="backslash";const Ir=93;t[t.rightSquareBracket=Ir]="rightSquareBracket";const kr=94;t[t.caret=kr]="caret";const Nr=95;t[t.underscore=Nr]="underscore";const Ba=96;t[t.graveAccent=Ba]="graveAccent";const za=97;t[t.lowercaseA=za]="lowercaseA";const Ua=98;t[t.lowercaseB=Ua]="lowercaseB";const Ha=99;t[t.lowercaseC=Ha]="lowercaseC";const qa=100;t[t.lowercaseD=qa]="lowercaseD";const Wa=101;t[t.lowercaseE=Wa]="lowercaseE";const Va=102;t[t.lowercaseF=Va]="lowercaseF";const Ga=103;t[t.lowercaseG=Ga]="lowercaseG";const Xa=104;t[t.lowercaseH=Xa]="lowercaseH";const Ja=105;t[t.lowercaseI=Ja]="lowercaseI";const Ka=106;t[t.lowercaseJ=Ka]="lowercaseJ";const Qa=107;t[t.lowercaseK=Qa]="lowercaseK";const Ya=108;t[t.lowercaseL=Ya]="lowercaseL";const Za=109;t[t.lowercaseM=Za]="lowercaseM";const ec=110;t[t.lowercaseN=ec]="lowercaseN";const tc=111;t[t.lowercaseO=tc]="lowercaseO";const nc=112;t[t.lowercaseP=nc]="lowercaseP";const rc=113;t[t.lowercaseQ=rc]="lowercaseQ";const oc=114;t[t.lowercaseR=oc]="lowercaseR";const lc=115;t[t.lowercaseS=lc]="lowercaseS";const ic=116;t[t.lowercaseT=ic]="lowercaseT";const ac=117;t[t.lowercaseU=ac]="lowercaseU";const cc=118;t[t.lowercaseV=cc]="lowercaseV";const fc=119;t[t.lowercaseW=fc]="lowercaseW";const sc=120;t[t.lowercaseX=sc]="lowercaseX";const uc=121;t[t.lowercaseY=uc]="lowercaseY";const pc=122;t[t.lowercaseZ=pc]="lowercaseZ";const dc=123;t[t.leftCurlyBrace=dc]="leftCurlyBrace";const yc=124;t[t.verticalBar=yc]="verticalBar";const Oc=125;t[t.rightCurlyBrace=Oc]="rightCurlyBrace";const hc=126;t[t.tilde=hc]="tilde";const bc=160;t[t.nonBreakingSpace=bc]="nonBreakingSpace";const mc=5760;t[t.oghamSpaceMark=mc]="oghamSpaceMark";const gc=8232;t[t.lineSeparator=gc]="lineSeparator";const jc=8233;t[t.paragraphSeparator=jc]="paragraphSeparator"})(k||(k={}));let Ca,me,we,s,K,hb;function hl(){return hb++}function mw(t){if("pos"in t){const e=jw(t.pos);t.message+=` (${e.line}:${e.column})`,t.loc=e}return t}class gw{constructor(e,r){this.line=e,this.column=r}}function jw(t){let e=1,r=1;for(let o=0;o<t;o++)K.charCodeAt(o)===k.lineFeed?(e++,r=1):r++;return new gw(e,r)}function xw(t,e,r,o){K=t,s=new ut,hb=1,Ca=e,me=r,we=o}function ne(t){return s.contextualKeyword===t}function uu(t){const e=kl();return e.type===i.name&&e.contextualKeyword===t}function Xe(t){return s.contextualKeyword===t&&L(i.name)}function qe(t){Xe(t)||ue()}function Et(){return g(i.eof)||g(i.braceR)||yt()}function yt(){const t=s.tokens[s.tokens.length-1],e=t?t.end:0;for(let r=e;r<s.start;r++){const o=K.charCodeAt(r);if(o===k.lineFeed||o===k.carriageReturn||o===8232||o===8233)return!0}return!1}function bb(){const t=pu();for(let e=s.end;e<t;e++){const r=K.charCodeAt(e);if(r===k.lineFeed||r===k.carriageReturn||r===8232||r===8233)return!0}return!1}function rn(){return L(i.semi)||Et()}function Ce(){rn()||ue('Unexpected token, expected ";"')}function F(t){L(t)||ue(`Unexpected token, expected "${hw(t)}"`)}function ue(t="Unexpected token",e=s.start){if(s.error)return;const r=new SyntaxError(t);r.pos=e,s.error=r,s.pos=K.length,se(i.eof)}const mb=[9,11,12,k.space,k.nonBreakingSpace,k.oghamSpaceMark,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],gd=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,gb=new Uint8Array(65536);for(const t of mb)gb[t]=1;function vw(t){if(t<48)return t===36;if(t<58)return!0;if(t<65)return!1;if(t<91)return!0;if(t<97)return t===95;if(t<123)return!0;if(t<128)return!1;throw new Error("Should not be called with non-ASCII char code.")}const Kt=new Uint8Array(65536);for(let t=0;t<128;t++)Kt[t]=vw(t)?1:0;for(let t=128;t<65536;t++)Kt[t]=1;for(const t of mb)Kt[t]=0;Kt[8232]=0;Kt[8233]=0;const Il=Kt.slice();for(let t=k.digit0;t<=k.digit9;t++)Il[t]=0;const jd=new Int32Array([-1,27,783,918,1755,2376,2862,3483,-1,3699,-1,4617,4752,4833,5130,5508,5940,-1,6480,6939,7749,8181,8451,8613,-1,8829,-1,-1,-1,54,243,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,432,-1,-1,-1,675,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,81,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,108,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,135,-1,-1,-1,-1,-1,-1,-1,-1,-1,162,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,189,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,216,-1,-1,-1,-1,-1,-1,w._abstract<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,270,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,297,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,324,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,351,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,378,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,405,-1,-1,-1,-1,-1,-1,-1,-1,w._accessor<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._as<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,459,-1,-1,-1,-1,-1,594,-1,-1,-1,-1,-1,-1,486,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,513,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,540,-1,-1,-1,-1,-1,-1,w._assert<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,567,-1,-1,-1,-1,-1,-1,-1,w._asserts<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,621,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,648,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._async<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,702,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,729,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,756,-1,-1,-1,-1,-1,-1,w._await<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,810,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,837,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,864,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,891,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._break<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,945,-1,-1,-1,-1,-1,-1,1107,-1,-1,-1,1242,-1,-1,1350,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,972,1026,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,999,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._case<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1053,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1080,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._catch<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1134,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1161,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1188,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1215,-1,-1,-1,-1,-1,-1,-1,w._checks<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1269,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1296,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1323,-1,-1,-1,-1,-1,-1,-1,(i._class<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1377,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1404,1620,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1431,-1,-1,-1,-1,-1,-1,(i._const<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1458,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1485,-1,-1,-1,-1,-1,-1,-1,-1,1512,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1539,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1566,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1593,-1,-1,-1,-1,-1,-1,-1,-1,w._constructor<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1647,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1674,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1701,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1728,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._continue<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1782,-1,-1,-1,-1,-1,-1,-1,-1,-1,2349,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1809,1971,-1,-1,2106,-1,-1,-1,-1,-1,2241,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1836,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1863,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1917,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1944,-1,-1,-1,-1,-1,-1,-1,-1,(i._debugger<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1998,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2025,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2052,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2079,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._declare<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2133,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2160,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2187,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2214,-1,-1,-1,-1,-1,-1,(i._default<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2268,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2295,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2322,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._delete<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._do<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2403,-1,2484,-1,-1,-1,-1,-1,-1,-1,-1,-1,2565,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2430,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2457,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._else<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2511,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2538,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._enum<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2592,-1,-1,-1,2727,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2619,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2646,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2673,-1,-1,-1,-1,-1,-1,(i._export<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2700,-1,-1,-1,-1,-1,-1,-1,w._exports<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2754,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2781,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2808,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2835,-1,-1,-1,-1,-1,-1,-1,(i._extends<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2889,-1,-1,-1,-1,-1,-1,-1,2997,-1,-1,-1,-1,-1,3159,-1,-1,3213,-1,-1,3294,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2916,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2943,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2970,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._false<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3024,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3051,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3078,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3105,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3132,-1,(i._finally<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3186,-1,-1,-1,-1,-1,-1,-1,-1,(i._for<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3240,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3267,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._from<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3321,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3348,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3375,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3402,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3429,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3456,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._function<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3510,-1,-1,-1,-1,-1,-1,3564,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3537,-1,-1,-1,-1,-1,-1,w._get<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3591,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3618,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3645,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3672,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._global<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3726,-1,-1,-1,-1,-1,-1,3753,4077,-1,-1,-1,-1,4590,-1,-1,-1,-1,-1,-1,-1,(i._if<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3780,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3807,-1,-1,3996,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3834,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3861,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3888,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3915,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3942,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3969,-1,-1,-1,-1,-1,-1,-1,w._implements<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4023,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4050,-1,-1,-1,-1,-1,-1,(i._import<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._in<<1)+1,-1,-1,-1,-1,-1,4104,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4185,4401,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4131,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4158,-1,-1,-1,-1,-1,-1,-1,-1,w._infer<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4212,-1,-1,-1,-1,-1,-1,-1,4239,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4266,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4293,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4320,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4347,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4374,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._instanceof<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4428,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4455,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4482,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4509,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4536,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4563,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._interface<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._is<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4644,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4671,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4698,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4725,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._keyof<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4779,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4806,-1,-1,-1,-1,-1,-1,(i._let<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4860,-1,-1,-1,-1,-1,4995,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4887,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4914,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4941,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4968,-1,-1,-1,-1,-1,-1,-1,w._mixins<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5022,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5049,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5076,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5103,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._module<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5157,-1,-1,-1,5373,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5427,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5184,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5211,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5238,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5265,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5292,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5319,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5346,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._namespace<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5400,-1,-1,-1,(i._new<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5454,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5481,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._null<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5535,-1,-1,-1,-1,-1,-1,-1,-1,-1,5562,-1,-1,-1,-1,5697,5751,-1,-1,-1,-1,w._of<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5589,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5616,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5643,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5670,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._opaque<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5724,-1,-1,-1,-1,-1,-1,w._out<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5778,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5805,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5832,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5859,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5886,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5913,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._override<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5967,-1,-1,6345,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5994,-1,-1,-1,-1,-1,6129,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6021,-1,-1,-1,-1,-1,6048,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6075,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6102,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._private<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6156,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6183,-1,-1,-1,-1,-1,-1,-1,-1,-1,6318,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6210,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6237,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6264,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6291,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._protected<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._proto<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6426,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6453,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._public<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6507,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6534,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6696,-1,-1,6831,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6561,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6588,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6615,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6642,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6669,-1,w._readonly<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6723,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6750,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6777,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6804,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._require<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6858,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6885,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6912,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._return<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6966,-1,-1,-1,7182,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7236,7371,-1,7479,-1,7614,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6993,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7020,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7047,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7074,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7101,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7128,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7155,-1,-1,-1,-1,-1,-1,-1,w._satisfies<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7209,-1,-1,-1,-1,-1,-1,w._set<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7263,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7290,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7317,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7344,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._static<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7398,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7425,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7452,-1,-1,-1,-1,-1,-1,-1,-1,(i._super<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7506,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7533,-1,-1,-1,-1,-1,-1,-1,-1,-1,7560,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7587,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._switch<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7641,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7668,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7695,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7722,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._symbol<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7776,-1,-1,-1,-1,-1,-1,-1,-1,-1,7938,-1,-1,-1,-1,-1,-1,8046,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7803,-1,-1,-1,-1,-1,-1,-1,-1,7857,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7830,-1,-1,-1,-1,-1,-1,-1,(i._this<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7884,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7911,-1,-1,-1,(i._throw<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7965,-1,-1,-1,8019,-1,-1,-1,-1,-1,-1,7992,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._true<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._try<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8073,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8100,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._type<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8127,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8154,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._typeof<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8208,-1,-1,-1,-1,8343,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8235,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8262,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8289,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8316,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._unique<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8370,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8397,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8424,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._using<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8478,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8532,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8505,-1,-1,-1,-1,-1,-1,-1,-1,(i._var<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8559,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8586,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._void<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8640,8748,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8667,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8694,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8721,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._while<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8775,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8802,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._with<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8856,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8883,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8910,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8937,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._yield<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function ww(){let t=0,e=0,r=s.pos;for(;r<K.length&&(e=K.charCodeAt(r),!(e<k.lowercaseA||e>k.lowercaseZ));){const l=jd[t+(e-k.lowercaseA)+1];if(l===-1)break;t=l,r++}const o=jd[t];if(o>-1&&!Kt[e]){s.pos=r,o&1?se(o>>>1):se(i.name,o>>>1);return}for(;r<K.length;){const l=K.charCodeAt(r);if(Kt[l])r++;else if(l===k.backslash){if(r+=2,K.charCodeAt(r)===k.leftCurlyBrace){for(;r<K.length&&K.charCodeAt(r)!==k.rightCurlyBrace;)r++;r++}}else if(l===k.atSign&&K.charCodeAt(r+1)===k.atSign)r+=2;else break}s.pos=r,se(i.name)}var re;(function(t){t[t.Access=0]="Access";const r=1;t[t.ExportAccess=r]="ExportAccess";const o=r+1;t[t.TopLevelDeclaration=o]="TopLevelDeclaration";const l=o+1;t[t.FunctionScopedDeclaration=l]="FunctionScopedDeclaration";const a=l+1;t[t.BlockScopedDeclaration=a]="BlockScopedDeclaration";const c=a+1;t[t.ObjectShorthandTopLevelDeclaration=c]="ObjectShorthandTopLevelDeclaration";const f=c+1;t[t.ObjectShorthandFunctionScopedDeclaration=f]="ObjectShorthandFunctionScopedDeclaration";const u=f+1;t[t.ObjectShorthandBlockScopedDeclaration=u]="ObjectShorthandBlockScopedDeclaration";const p=u+1;t[t.ObjectShorthand=p]="ObjectShorthand";const y=p+1;t[t.ImportDeclaration=y]="ImportDeclaration";const d=y+1;t[t.ObjectKey=d]="ObjectKey";const O=d+1;t[t.ImportAccess=O]="ImportAccess"})(re||(re={}));var Wt;(function(t){t[t.NoChildren=0]="NoChildren";const r=1;t[t.OneChild=r]="OneChild";const o=r+1;t[t.StaticChildren=o]="StaticChildren";const l=o+1;t[t.KeyAfterPropSpread=l]="KeyAfterPropSpread"})(Wt||(Wt={}));function jb(t){const e=t.identifierRole;return e===re.TopLevelDeclaration||e===re.FunctionScopedDeclaration||e===re.BlockScopedDeclaration||e===re.ObjectShorthandTopLevelDeclaration||e===re.ObjectShorthandFunctionScopedDeclaration||e===re.ObjectShorthandBlockScopedDeclaration}function Pw(t){const e=t.identifierRole;return e===re.FunctionScopedDeclaration||e===re.BlockScopedDeclaration||e===re.ObjectShorthandFunctionScopedDeclaration||e===re.ObjectShorthandBlockScopedDeclaration}function xb(t){const e=t.identifierRole;return e===re.TopLevelDeclaration||e===re.ObjectShorthandTopLevelDeclaration||e===re.ImportDeclaration}function Sw(t){const e=t.identifierRole;return e===re.TopLevelDeclaration||e===re.BlockScopedDeclaration||e===re.ObjectShorthandTopLevelDeclaration||e===re.ObjectShorthandBlockScopedDeclaration}function _w(t){const e=t.identifierRole;return e===re.FunctionScopedDeclaration||e===re.ObjectShorthandFunctionScopedDeclaration}function Ew(t){return t.identifierRole===re.ObjectShorthandTopLevelDeclaration||t.identifierRole===re.ObjectShorthandBlockScopedDeclaration||t.identifierRole===re.ObjectShorthandFunctionScopedDeclaration}class Ta{constructor(){this.type=s.type,this.contextualKeyword=s.contextualKeyword,this.start=s.start,this.end=s.end,this.scopeDepth=s.scopeDepth,this.isType=s.isType,this.identifierRole=null,this.jsxRole=null,this.shadowsGlobal=!1,this.isAsyncOperation=!1,this.contextId=null,this.rhsEndIndex=null,this.isExpression=!1,this.numNullishCoalesceStarts=0,this.numNullishCoalesceEnds=0,this.isOptionalChainStart=!1,this.isOptionalChainEnd=!1,this.subscriptStartIndex=null,this.nullishStartIndex=null}}function M(){s.tokens.push(new Ta),Sb()}function Rn(){s.tokens.push(new Ta),s.start=s.pos,qw()}function Iw(){s.type===i.assign&&--s.pos,zw()}function ye(t){for(let r=s.tokens.length-t;r<s.tokens.length;r++)s.tokens[r].isType=!0;const e=s.isType;return s.isType=!0,e}function de(t){s.isType=t}function L(t){return g(t)?(M(),!0):!1}function vb(t){const e=s.isType;s.isType=!0,L(t),s.isType=e}function g(t){return s.type===t}function De(){const t=s.snapshot();M();const e=s.type;return s.restoreFromSnapshot(t),e}class kw{constructor(e,r){this.type=e,this.contextualKeyword=r}}function kl(){const t=s.snapshot();M();const e=s.type,r=s.contextualKeyword;return s.restoreFromSnapshot(t),new kw(e,r)}function pu(){return wb(s.pos)}function wb(t){gd.lastIndex=t;const e=gd.exec(K);return t+e[0].length}function Pb(){return K.charCodeAt(pu())}function Sb(){if(Eb(),s.start=s.pos,s.pos>=K.length){const t=s.tokens;t.length>=2&&t[t.length-1].start>=K.length&&t[t.length-2].start>=K.length&&ue("Unexpectedly reached the end of input."),se(i.eof);return}Nw(K.charCodeAt(s.pos))}function Nw(t){Il[t]||t===k.backslash||t===k.atSign&&K.charCodeAt(s.pos+1)===k.atSign?ww():Nb(t)}function Cw(){for(;K.charCodeAt(s.pos)!==k.asterisk||K.charCodeAt(s.pos+1)!==k.slash;)if(s.pos++,s.pos>K.length){ue("Unterminated comment",s.pos-2);return}s.pos+=2}function _b(t){let e=K.charCodeAt(s.pos+=t);if(s.pos<K.length)for(;e!==k.lineFeed&&e!==k.carriageReturn&&e!==k.lineSeparator&&e!==k.paragraphSeparator&&++s.pos<K.length;)e=K.charCodeAt(s.pos)}function Eb(){for(;s.pos<K.length;){const t=K.charCodeAt(s.pos);switch(t){case k.carriageReturn:K.charCodeAt(s.pos+1)===k.lineFeed&&++s.pos;case k.lineFeed:case k.lineSeparator:case k.paragraphSeparator:++s.pos;break;case k.slash:switch(K.charCodeAt(s.pos+1)){case k.asterisk:s.pos+=2,Cw();break;case k.slash:_b(2);break;default:return}break;default:if(gb[t])++s.pos;else return}}}function se(t,e=w.NONE){s.end=s.pos,s.type=t,s.contextualKeyword=e}function Tw(){const t=K.charCodeAt(s.pos+1);if(t>=k.digit0&&t<=k.digit9){Cb(!0);return}t===k.dot&&K.charCodeAt(s.pos+2)===k.dot?(s.pos+=3,se(i.ellipsis)):(++s.pos,se(i.dot))}function Aw(){K.charCodeAt(s.pos+1)===k.equalsTo?Se(i.assign,2):Se(i.slash,1)}function Rw(t){let e=t===k.asterisk?i.star:i.modulo,r=1,o=K.charCodeAt(s.pos+1);t===k.asterisk&&o===k.asterisk&&(r++,o=K.charCodeAt(s.pos+2),e=i.exponent),o===k.equalsTo&&K.charCodeAt(s.pos+2)!==k.greaterThan&&(r++,e=i.assign),Se(e,r)}function Lw(t){const e=K.charCodeAt(s.pos+1);if(e===t){K.charCodeAt(s.pos+2)===k.equalsTo?Se(i.assign,3):Se(t===k.verticalBar?i.logicalOR:i.logicalAND,2);return}if(t===k.verticalBar){if(e===k.greaterThan){Se(i.pipeline,2);return}else if(e===k.rightCurlyBrace&&we){Se(i.braceBarR,2);return}}if(e===k.equalsTo){Se(i.assign,2);return}Se(t===k.verticalBar?i.bitwiseOR:i.bitwiseAND,1)}function Dw(){K.charCodeAt(s.pos+1)===k.equalsTo?Se(i.assign,2):Se(i.bitwiseXOR,1)}function Fw(t){const e=K.charCodeAt(s.pos+1);if(e===t){Se(i.preIncDec,2);return}e===k.equalsTo?Se(i.assign,2):t===k.plusSign?Se(i.plus,1):Se(i.minus,1)}function Mw(){const t=K.charCodeAt(s.pos+1);if(t===k.lessThan){if(K.charCodeAt(s.pos+2)===k.equalsTo){Se(i.assign,3);return}s.isType?Se(i.lessThan,1):Se(i.bitShiftL,2);return}t===k.equalsTo?Se(i.relationalOrEqual,2):Se(i.lessThan,1)}function Ib(){if(s.isType){Se(i.greaterThan,1);return}const t=K.charCodeAt(s.pos+1);if(t===k.greaterThan){const e=K.charCodeAt(s.pos+2)===k.greaterThan?3:2;if(K.charCodeAt(s.pos+e)===k.equalsTo){Se(i.assign,e+1);return}Se(i.bitShiftR,e);return}t===k.equalsTo?Se(i.relationalOrEqual,2):Se(i.greaterThan,1)}function kb(){s.type===i.greaterThan&&(s.pos-=1,Ib())}function $w(t){const e=K.charCodeAt(s.pos+1);if(e===k.equalsTo){Se(i.equality,K.charCodeAt(s.pos+2)===k.equalsTo?3:2);return}if(t===k.equalsTo&&e===k.greaterThan){s.pos+=2,se(i.arrow);return}Se(t===k.equalsTo?i.eq:i.bang,1)}function Bw(){const t=K.charCodeAt(s.pos+1),e=K.charCodeAt(s.pos+2);t===k.questionMark&&!(we&&s.isType)?e===k.equalsTo?Se(i.assign,3):Se(i.nullishCoalescing,2):t===k.dot&&!(e>=k.digit0&&e<=k.digit9)?(s.pos+=2,se(i.questionDot)):(++s.pos,se(i.question))}function Nb(t){switch(t){case k.numberSign:++s.pos,se(i.hash);return;case k.dot:Tw();return;case k.leftParenthesis:++s.pos,se(i.parenL);return;case k.rightParenthesis:++s.pos,se(i.parenR);return;case k.semicolon:++s.pos,se(i.semi);return;case k.comma:++s.pos,se(i.comma);return;case k.leftSquareBracket:++s.pos,se(i.bracketL);return;case k.rightSquareBracket:++s.pos,se(i.bracketR);return;case k.leftCurlyBrace:we&&K.charCodeAt(s.pos+1)===k.verticalBar?Se(i.braceBarL,2):(++s.pos,se(i.braceL));return;case k.rightCurlyBrace:++s.pos,se(i.braceR);return;case k.colon:K.charCodeAt(s.pos+1)===k.colon?Se(i.doubleColon,2):(++s.pos,se(i.colon));return;case k.questionMark:Bw();return;case k.atSign:++s.pos,se(i.at);return;case k.graveAccent:++s.pos,se(i.backQuote);return;case k.digit0:{const e=K.charCodeAt(s.pos+1);if(e===k.lowercaseX||e===k.uppercaseX||e===k.lowercaseO||e===k.uppercaseO||e===k.lowercaseB||e===k.uppercaseB){Uw();return}}case k.digit1:case k.digit2:case k.digit3:case k.digit4:case k.digit5:case k.digit6:case k.digit7:case k.digit8:case k.digit9:Cb(!1);return;case k.quotationMark:case k.apostrophe:Hw(t);return;case k.slash:Aw();return;case k.percentSign:case k.asterisk:Rw(t);return;case k.verticalBar:case k.ampersand:Lw(t);return;case k.caret:Dw();return;case k.plusSign:case k.dash:Fw(t);return;case k.lessThan:Mw();return;case k.greaterThan:Ib();return;case k.equalsTo:case k.exclamationMark:$w(t);return;case k.tilde:Se(i.tilde,1);return}ue(`Unexpected character '${String.fromCharCode(t)}'`,s.pos)}function Se(t,e){s.pos+=e,se(t)}function zw(){const t=s.pos;let e=!1,r=!1;for(;;){if(s.pos>=K.length){ue("Unterminated regular expression",t);return}const o=K.charCodeAt(s.pos);if(e)e=!1;else{if(o===k.leftSquareBracket)r=!0;else if(o===k.rightSquareBracket&&r)r=!1;else if(o===k.slash&&!r)break;e=o===k.backslash}++s.pos}++s.pos,Ww(),se(i.regexp)}function Kc(){for(;;){const t=K.charCodeAt(s.pos);if(t>=k.digit0&&t<=k.digit9||t===k.underscore)s.pos++;else break}}function Uw(){for(s.pos+=2;;){const e=K.charCodeAt(s.pos);if(e>=k.digit0&&e<=k.digit9||e>=k.lowercaseA&&e<=k.lowercaseF||e>=k.uppercaseA&&e<=k.uppercaseF||e===k.underscore)s.pos++;else break}K.charCodeAt(s.pos)===k.lowercaseN?(++s.pos,se(i.bigint)):se(i.num)}function Cb(t){let e=!1,r=!1;t||Kc();let o=K.charCodeAt(s.pos);if(o===k.dot&&(++s.pos,Kc(),o=K.charCodeAt(s.pos)),(o===k.uppercaseE||o===k.lowercaseE)&&(o=K.charCodeAt(++s.pos),(o===k.plusSign||o===k.dash)&&++s.pos,Kc(),o=K.charCodeAt(s.pos)),o===k.lowercaseN?(++s.pos,e=!0):o===k.lowercaseM&&(++s.pos,r=!0),e){se(i.bigint);return}if(r){se(i.decimal);return}se(i.num)}function Hw(t){for(s.pos++;;){if(s.pos>=K.length){ue("Unterminated string constant");return}const e=K.charCodeAt(s.pos);if(e===k.backslash)s.pos++;else if(e===t)break;s.pos++}s.pos++,se(i.string)}function qw(){for(;;){if(s.pos>=K.length){ue("Unterminated template");return}const t=K.charCodeAt(s.pos);if(t===k.graveAccent||t===k.dollarSign&&K.charCodeAt(s.pos+1)===k.leftCurlyBrace){if(s.pos===s.start&&g(i.template))if(t===k.dollarSign){s.pos+=2,se(i.dollarBraceL);return}else{++s.pos,se(i.backQuote);return}se(i.template);return}t===k.backslash&&s.pos++,s.pos++}}function Ww(){for(;s.pos<K.length;){const t=K.charCodeAt(s.pos);if(Kt[t])s.pos++;else if(t===k.backslash){if(s.pos+=2,K.charCodeAt(s.pos)===k.leftCurlyBrace){for(;s.pos<K.length&&K.charCodeAt(s.pos)!==k.rightCurlyBrace;)s.pos++;s.pos++}}else break}}function bl(t,e=t.currentIndex()){let r=e+1;if(ei(t,r)){const o=t.identifierNameAtIndex(e);return{isType:!1,leftName:o,rightName:o,endIndex:r}}if(r++,ei(t,r))return{isType:!0,leftName:null,rightName:null,endIndex:r};if(r++,ei(t,r))return{isType:!1,leftName:t.identifierNameAtIndex(e),rightName:t.identifierNameAtIndex(e+2),endIndex:r};if(r++,ei(t,r))return{isType:!0,leftName:null,rightName:null,endIndex:r};throw new Error(`Unexpected import/export specifier at ${e}`)}function ei(t,e){const r=t.tokens[e];return r.type===i.braceR||r.type===i.comma}const Vw=new Map([["quot",'"'],["amp","&"],["apos","'"],["lt","<"],["gt",">"],["nbsp"," "],["iexcl","¡"],["cent","¢"],["pound","£"],["curren","¤"],["yen","¥"],["brvbar","¦"],["sect","§"],["uml","¨"],["copy","©"],["ordf","ª"],["laquo","«"],["not","¬"],["shy","­"],["reg","®"],["macr","¯"],["deg","°"],["plusmn","±"],["sup2","²"],["sup3","³"],["acute","´"],["micro","µ"],["para","¶"],["middot","·"],["cedil","¸"],["sup1","¹"],["ordm","º"],["raquo","»"],["frac14","¼"],["frac12","½"],["frac34","¾"],["iquest","¿"],["Agrave","À"],["Aacute","Á"],["Acirc","Â"],["Atilde","Ã"],["Auml","Ä"],["Aring","Å"],["AElig","Æ"],["Ccedil","Ç"],["Egrave","È"],["Eacute","É"],["Ecirc","Ê"],["Euml","Ë"],["Igrave","Ì"],["Iacute","Í"],["Icirc","Î"],["Iuml","Ï"],["ETH","Ð"],["Ntilde","Ñ"],["Ograve","Ò"],["Oacute","Ó"],["Ocirc","Ô"],["Otilde","Õ"],["Ouml","Ö"],["times","×"],["Oslash","Ø"],["Ugrave","Ù"],["Uacute","Ú"],["Ucirc","Û"],["Uuml","Ü"],["Yacute","Ý"],["THORN","Þ"],["szlig","ß"],["agrave","à"],["aacute","á"],["acirc","â"],["atilde","ã"],["auml","ä"],["aring","å"],["aelig","æ"],["ccedil","ç"],["egrave","è"],["eacute","é"],["ecirc","ê"],["euml","ë"],["igrave","ì"],["iacute","í"],["icirc","î"],["iuml","ï"],["eth","ð"],["ntilde","ñ"],["ograve","ò"],["oacute","ó"],["ocirc","ô"],["otilde","õ"],["ouml","ö"],["divide","÷"],["oslash","ø"],["ugrave","ù"],["uacute","ú"],["ucirc","û"],["uuml","ü"],["yacute","ý"],["thorn","þ"],["yuml","ÿ"],["OElig","Œ"],["oelig","œ"],["Scaron","Š"],["scaron","š"],["Yuml","Ÿ"],["fnof","ƒ"],["circ","ˆ"],["tilde","˜"],["Alpha","Α"],["Beta","Β"],["Gamma","Γ"],["Delta","Δ"],["Epsilon","Ε"],["Zeta","Ζ"],["Eta","Η"],["Theta","Θ"],["Iota","Ι"],["Kappa","Κ"],["Lambda","Λ"],["Mu","Μ"],["Nu","Ν"],["Xi","Ξ"],["Omicron","Ο"],["Pi","Π"],["Rho","Ρ"],["Sigma","Σ"],["Tau","Τ"],["Upsilon","Υ"],["Phi","Φ"],["Chi","Χ"],["Psi","Ψ"],["Omega","Ω"],["alpha","α"],["beta","β"],["gamma","γ"],["delta","δ"],["epsilon","ε"],["zeta","ζ"],["eta","η"],["theta","θ"],["iota","ι"],["kappa","κ"],["lambda","λ"],["mu","μ"],["nu","ν"],["xi","ξ"],["omicron","ο"],["pi","π"],["rho","ρ"],["sigmaf","ς"],["sigma","σ"],["tau","τ"],["upsilon","υ"],["phi","φ"],["chi","χ"],["psi","ψ"],["omega","ω"],["thetasym","ϑ"],["upsih","ϒ"],["piv","ϖ"],["ensp"," "],["emsp"," "],["thinsp"," "],["zwnj","‌"],["zwj","‍"],["lrm","‎"],["rlm","‏"],["ndash","–"],["mdash","—"],["lsquo","‘"],["rsquo","’"],["sbquo","‚"],["ldquo","“"],["rdquo","”"],["bdquo","„"],["dagger","†"],["Dagger","‡"],["bull","•"],["hellip","…"],["permil","‰"],["prime","′"],["Prime","″"],["lsaquo","‹"],["rsaquo","›"],["oline","‾"],["frasl","⁄"],["euro","€"],["image","ℑ"],["weierp","℘"],["real","ℜ"],["trade","™"],["alefsym","ℵ"],["larr","←"],["uarr","↑"],["rarr","→"],["darr","↓"],["harr","↔"],["crarr","↵"],["lArr","⇐"],["uArr","⇑"],["rArr","⇒"],["dArr","⇓"],["hArr","⇔"],["forall","∀"],["part","∂"],["exist","∃"],["empty","∅"],["nabla","∇"],["isin","∈"],["notin","∉"],["ni","∋"],["prod","∏"],["sum","∑"],["minus","−"],["lowast","∗"],["radic","√"],["prop","∝"],["infin","∞"],["ang","∠"],["and","∧"],["or","∨"],["cap","∩"],["cup","∪"],["int","∫"],["there4","∴"],["sim","∼"],["cong","≅"],["asymp","≈"],["ne","≠"],["equiv","≡"],["le","≤"],["ge","≥"],["sub","⊂"],["sup","⊃"],["nsub","⊄"],["sube","⊆"],["supe","⊇"],["oplus","⊕"],["otimes","⊗"],["perp","⊥"],["sdot","⋅"],["lceil","⌈"],["rceil","⌉"],["lfloor","⌊"],["rfloor","⌋"],["lang","〈"],["rang","〉"],["loz","◊"],["spades","♠"],["clubs","♣"],["hearts","♥"],["diams","♦"]]);function Tb(t){const[e,r]=xd(t.jsxPragma||"React.createElement"),[o,l]=xd(t.jsxFragmentPragma||"React.Fragment");return{base:e,suffix:r,fragmentBase:o,fragmentSuffix:l}}function xd(t){let e=t.indexOf(".");return e===-1&&(e=t.length),[t.slice(0,e),t.slice(e)]}class Qt{getPrefixCode(){return""}getHoistedCode(){return""}getSuffixCode(){return""}}class lr extends Qt{__init(){this.lastLineNumber=1}__init2(){this.lastIndex=0}__init3(){this.filenameVarName=null}__init4(){this.esmAutomaticImportNameResolutions={}}__init5(){this.cjsAutomaticModuleNameResolutions={}}constructor(e,r,o,l,a){super(),this.rootTransformer=e,this.tokens=r,this.importProcessor=o,this.nameManager=l,this.options=a,lr.prototype.__init.call(this),lr.prototype.__init2.call(this),lr.prototype.__init3.call(this),lr.prototype.__init4.call(this),lr.prototype.__init5.call(this),this.jsxPragmaInfo=Tb(a),this.isAutomaticRuntime=a.jsxRuntime==="automatic",this.jsxImportSource=a.jsxImportSource||"react"}process(){return this.tokens.matches1(i.jsxTagStart)?(this.processJSXTag(),!0):!1}getPrefixCode(){let e="";if(this.filenameVarName&&(e+=`const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath||"")};`),this.isAutomaticRuntime)if(this.importProcessor)for(const[r,o]of Object.entries(this.cjsAutomaticModuleNameResolutions))e+=`var ${o} = require("${r}");`;else{const{createElement:r,...o}=this.esmAutomaticImportNameResolutions;r&&(e+=`import {createElement as ${r}} from "${this.jsxImportSource}";`);const l=Object.entries(o).map(([a,c])=>`${a} as ${c}`).join(", ");if(l){const a=this.jsxImportSource+(this.options.production?"/jsx-runtime":"/jsx-dev-runtime");e+=`import {${l}} from "${a}";`}}return e}processJSXTag(){const{jsxRole:e,start:r}=this.tokens.currentToken(),o=this.options.production?null:this.getElementLocationCode(r);this.isAutomaticRuntime&&e!==Wt.KeyAfterPropSpread?this.transformTagToJSXFunc(o,e):this.transformTagToCreateElement(o)}getElementLocationCode(e){return`lineNumber: ${this.getLineNumberForIndex(e)}`}getLineNumberForIndex(e){const r=this.tokens.code;for(;this.lastIndex<e&&this.lastIndex<r.length;)r[this.lastIndex]===`
`&&this.lastLineNumber++,this.lastIndex++;return this.lastLineNumber}transformTagToJSXFunc(e,r){const o=r===Wt.StaticChildren;this.tokens.replaceToken(this.getJSXFuncInvocationCode(o));let l=null;if(this.tokens.matches1(i.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, {`),this.processAutomaticChildrenAndEndProps(r);else{if(this.processTagIntro(),this.tokens.appendCode(", {"),l=this.processProps(!0),this.tokens.matches2(i.slash,i.jsxTagEnd))this.tokens.appendCode("}");else if(this.tokens.matches1(i.jsxTagEnd))this.tokens.removeToken(),this.processAutomaticChildrenAndEndProps(r);else throw new Error("Expected either /> or > at the end of the tag.");l&&this.tokens.appendCode(`, ${l}`)}for(this.options.production||(l===null&&this.tokens.appendCode(", void 0"),this.tokens.appendCode(`, ${o}, ${this.getDevSource(e)}, this`)),this.tokens.removeInitialToken();!this.tokens.matches1(i.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}transformTagToCreateElement(e){if(this.tokens.replaceToken(this.getCreateElementInvocationCode()),this.tokens.matches1(i.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, null`),this.processChildren(!0);else if(this.processTagIntro(),this.processPropsObjectWithDevInfo(e),!this.tokens.matches2(i.slash,i.jsxTagEnd))if(this.tokens.matches1(i.jsxTagEnd))this.tokens.removeToken(),this.processChildren(!0);else throw new Error("Expected either /> or > at the end of the tag.");for(this.tokens.removeInitialToken();!this.tokens.matches1(i.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}getJSXFuncInvocationCode(e){return this.options.production?e?this.claimAutoImportedFuncInvocation("jsxs","/jsx-runtime"):this.claimAutoImportedFuncInvocation("jsx","/jsx-runtime"):this.claimAutoImportedFuncInvocation("jsxDEV","/jsx-dev-runtime")}getCreateElementInvocationCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedFuncInvocation("createElement","");{const{jsxPragmaInfo:e}=this;return`${this.importProcessor&&this.importProcessor.getIdentifierReplacement(e.base)||e.base}${e.suffix}(`}}getFragmentCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedName("Fragment",this.options.production?"/jsx-runtime":"/jsx-dev-runtime");{const{jsxPragmaInfo:e}=this;return(this.importProcessor&&this.importProcessor.getIdentifierReplacement(e.fragmentBase)||e.fragmentBase)+e.fragmentSuffix}}claimAutoImportedFuncInvocation(e,r){const o=this.claimAutoImportedName(e,r);return this.importProcessor?`${o}.call(void 0, `:`${o}(`}claimAutoImportedName(e,r){if(this.importProcessor){const o=this.jsxImportSource+r;return this.cjsAutomaticModuleNameResolutions[o]||(this.cjsAutomaticModuleNameResolutions[o]=this.importProcessor.getFreeIdentifierForPath(o)),`${this.cjsAutomaticModuleNameResolutions[o]}.${e}`}else return this.esmAutomaticImportNameResolutions[e]||(this.esmAutomaticImportNameResolutions[e]=this.nameManager.claimFreeName(`_${e}`)),this.esmAutomaticImportNameResolutions[e]}processTagIntro(){let e=this.tokens.currentIndex()+1;for(;this.tokens.tokens[e].isType||!this.tokens.matches2AtIndex(e-1,i.jsxName,i.jsxName)&&!this.tokens.matches2AtIndex(e-1,i.greaterThan,i.jsxName)&&!this.tokens.matches1AtIndex(e,i.braceL)&&!this.tokens.matches1AtIndex(e,i.jsxTagEnd)&&!this.tokens.matches2AtIndex(e,i.slash,i.jsxTagEnd);)e++;if(e===this.tokens.currentIndex()+1){const r=this.tokens.identifierName();Ab(r)&&this.tokens.replaceToken(`'${r}'`)}for(;this.tokens.currentIndex()<e;)this.rootTransformer.processToken()}processPropsObjectWithDevInfo(e){const r=this.options.production?"":`__self: this, __source: ${this.getDevSource(e)}`;if(!this.tokens.matches1(i.jsxName)&&!this.tokens.matches1(i.braceL)){r?this.tokens.appendCode(`, {${r}}`):this.tokens.appendCode(", null");return}this.tokens.appendCode(", {"),this.processProps(!1),r?this.tokens.appendCode(` ${r}}`):this.tokens.appendCode("}")}processProps(e){let r=null;for(;;){if(this.tokens.matches2(i.jsxName,i.eq)){const o=this.tokens.identifierName();if(e&&o==="key"){r!==null&&this.tokens.appendCode(r.replace(/[^\n]/g,"")),this.tokens.removeToken(),this.tokens.removeToken();const l=this.tokens.snapshot();this.processPropValue(),r=this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(l);continue}else this.processPropName(o),this.tokens.replaceToken(": "),this.processPropValue()}else if(this.tokens.matches1(i.jsxName)){const o=this.tokens.identifierName();this.processPropName(o),this.tokens.appendCode(": true")}else if(this.tokens.matches1(i.braceL))this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("");else break;this.tokens.appendCode(",")}return r}processPropName(e){e.includes("-")?this.tokens.replaceToken(`'${e}'`):this.tokens.copyToken()}processPropValue(){this.tokens.matches1(i.braceL)?(this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("")):this.tokens.matches1(i.jsxTagStart)?this.processJSXTag():this.processStringPropValue()}processStringPropValue(){const e=this.tokens.currentToken(),r=this.tokens.code.slice(e.start+1,e.end-1),o=vd(r),l=Xw(r);this.tokens.replaceToken(l+o)}processAutomaticChildrenAndEndProps(e){e===Wt.StaticChildren?(this.tokens.appendCode(" children: ["),this.processChildren(!1),this.tokens.appendCode("]}")):(e===Wt.OneChild&&this.tokens.appendCode(" children: "),this.processChildren(!1),this.tokens.appendCode("}"))}processChildren(e){let r=e;for(;;){if(this.tokens.matches2(i.jsxTagStart,i.slash))return;let o=!1;if(this.tokens.matches1(i.braceL))this.tokens.matches2(i.braceL,i.braceR)?(this.tokens.replaceToken(""),this.tokens.replaceToken("")):(this.tokens.replaceToken(r?", ":""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken(""),o=!0);else if(this.tokens.matches1(i.jsxTagStart))this.tokens.appendCode(r?", ":""),this.processJSXTag(),o=!0;else if(this.tokens.matches1(i.jsxText)||this.tokens.matches1(i.jsxEmptyText))o=this.processChildTextElement(r);else throw new Error("Unexpected token when processing JSX children.");o&&(r=!0)}}processChildTextElement(e){const r=this.tokens.currentToken(),o=this.tokens.code.slice(r.start,r.end),l=vd(o),a=Gw(o);return a==='""'?(this.tokens.replaceToken(l),!1):(this.tokens.replaceToken(`${e?", ":""}${a}${l}`),!0)}getDevSource(e){return`{fileName: ${this.getFilenameVarName()}, ${e}}`}getFilenameVarName(){return this.filenameVarName||(this.filenameVarName=this.nameManager.claimFreeName("_jsxFileName")),this.filenameVarName}}function Ab(t){const e=t.charCodeAt(0);return e>=k.lowercaseA&&e<=k.lowercaseZ}function Gw(t){let e="",r="",o=!1,l=!1;for(let a=0;a<t.length;a++){const c=t[a];if(c===" "||c==="	"||c==="\r")o||(r+=c);else if(c===`
`)r="",o=!0;else{if(l&&o&&(e+=" "),e+=r,r="",c==="&"){const{entity:f,newI:u}=Rb(t,a+1);a=u-1,e+=f}else e+=c;l=!0,o=!1}}return o||(e+=r),JSON.stringify(e)}function vd(t){let e=0,r=0;for(const o of t)o===`
`?(e++,r=0):o===" "&&r++;return`
`.repeat(e)+" ".repeat(r)}function Xw(t){let e="";for(let r=0;r<t.length;r++){const o=t[r];if(o===`
`)if(/\s/.test(t[r+1]))for(e+=" ";r<t.length&&/\s/.test(t[r+1]);)r++;else e+=`
`;else if(o==="&"){const{entity:l,newI:a}=Rb(t,r+1);e+=l,r=a-1}else e+=o}return JSON.stringify(e)}function Rb(t,e){let r="",o=0,l,a=e;if(t[a]==="#"){let c=10;a++;let f;if(t[a]==="x")for(c=16,a++,f=a;a<t.length&&Kw(t.charCodeAt(a));)a++;else for(f=a;a<t.length&&Jw(t.charCodeAt(a));)a++;if(t[a]===";"){const u=t.slice(f,a);u&&(a++,l=String.fromCodePoint(parseInt(u,c)))}}else for(;a<t.length&&o++<10;){const c=t[a];if(a++,c===";"){l=Vw.get(r);break}r+=c}return l?{entity:l,newI:a}:{entity:"&",newI:e}}function Jw(t){return t>=k.digit0&&t<=k.digit9}function Kw(t){return t>=k.digit0&&t<=k.digit9||t>=k.lowercaseA&&t<=k.lowercaseF||t>=k.uppercaseA&&t<=k.uppercaseF}function Lb(t,e){const r=Tb(e),o=new Set;for(let l=0;l<t.tokens.length;l++){const a=t.tokens[l];if(a.type===i.name&&!a.isType&&(a.identifierRole===re.Access||a.identifierRole===re.ObjectShorthand||a.identifierRole===re.ExportAccess)&&!a.shadowsGlobal&&o.add(t.identifierNameForToken(a)),a.type===i.jsxTagStart&&o.add(r.base),a.type===i.jsxTagStart&&l+1<t.tokens.length&&t.tokens[l+1].type===i.jsxTagEnd&&(o.add(r.base),o.add(r.fragmentBase)),a.type===i.jsxName&&a.identifierRole===re.Access){const c=t.identifierNameForToken(a);(!Ab(c)||t.tokens[l+1].type===i.dot)&&o.add(t.identifierNameForToken(a))}}return o}class ir{__init(){this.nonTypeIdentifiers=new Set}__init2(){this.importInfoByPath=new Map}__init3(){this.importsToReplace=new Map}__init4(){this.identifierReplacements=new Map}__init5(){this.exportBindingsByLocalName=new Map}constructor(e,r,o,l,a,c,f){this.nameManager=e,this.tokens=r,this.enableLegacyTypeScriptModuleInterop=o,this.options=l,this.isTypeScriptTransformEnabled=a,this.keepUnusedImports=c,this.helperManager=f,ir.prototype.__init.call(this),ir.prototype.__init2.call(this),ir.prototype.__init3.call(this),ir.prototype.__init4.call(this),ir.prototype.__init5.call(this)}preprocessTokens(){for(let e=0;e<this.tokens.tokens.length;e++)this.tokens.matches1AtIndex(e,i._import)&&!this.tokens.matches3AtIndex(e,i._import,i.name,i.eq)&&this.preprocessImportAtIndex(e),this.tokens.matches1AtIndex(e,i._export)&&!this.tokens.matches2AtIndex(e,i._export,i.eq)&&this.preprocessExportAtIndex(e);this.generateImportReplacements()}pruneTypeOnlyImports(){this.nonTypeIdentifiers=Lb(this.tokens,this.options);for(const[e,r]of this.importInfoByPath.entries()){if(r.hasBareImport||r.hasStarExport||r.exportStarNames.length>0||r.namedExports.length>0)continue;[...r.defaultNames,...r.wildcardNames,...r.namedImports.map(({localName:l})=>l)].every(l=>this.shouldAutomaticallyElideImportedName(l))&&this.importsToReplace.set(e,"")}}shouldAutomaticallyElideImportedName(e){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(e)}generateImportReplacements(){for(const[e,r]of this.importInfoByPath.entries()){const{defaultNames:o,wildcardNames:l,namedImports:a,namedExports:c,exportStarNames:f,hasStarExport:u}=r;if(o.length===0&&l.length===0&&a.length===0&&c.length===0&&f.length===0&&!u){this.importsToReplace.set(e,`require('${e}');`);continue}const p=this.getFreeIdentifierForPath(e);let y;this.enableLegacyTypeScriptModuleInterop?y=p:y=l.length>0?l[0]:this.getFreeIdentifierForPath(e);let d=`var ${p} = require('${e}');`;if(l.length>0)for(const O of l){const S=this.enableLegacyTypeScriptModuleInterop?p:`${this.helperManager.getHelperName("interopRequireWildcard")}(${p})`;d+=` var ${O} = ${S};`}else f.length>0&&y!==p?d+=` var ${y} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${p});`:o.length>0&&y!==p&&(d+=` var ${y} = ${this.helperManager.getHelperName("interopRequireDefault")}(${p});`);for(const{importedName:O,localName:S}of c)d+=` ${this.helperManager.getHelperName("createNamedExportFrom")}(${p}, '${S}', '${O}');`;for(const O of f)d+=` exports.${O} = ${y};`;u&&(d+=` ${this.helperManager.getHelperName("createStarExport")}(${p});`),this.importsToReplace.set(e,d);for(const O of o)this.identifierReplacements.set(O,`${y}.default`);for(const{importedName:O,localName:S}of a)this.identifierReplacements.set(S,`${p}.${O}`)}}getFreeIdentifierForPath(e){const r=e.split("/"),l=r[r.length-1].replace(/\W/g,"");return this.nameManager.claimFreeName(`_${l}`)}preprocessImportAtIndex(e){const r=[],o=[],l=[];if(e++,(this.tokens.matchesContextualAtIndex(e,w._type)||this.tokens.matches1AtIndex(e,i._typeof))&&!this.tokens.matches1AtIndex(e+1,i.comma)&&!this.tokens.matchesContextualAtIndex(e+1,w._from)||this.tokens.matches1AtIndex(e,i.parenL))return;if(this.tokens.matches1AtIndex(e,i.name)&&(r.push(this.tokens.identifierNameAtIndex(e)),e++,this.tokens.matches1AtIndex(e,i.comma)&&e++),this.tokens.matches1AtIndex(e,i.star)&&(e+=2,o.push(this.tokens.identifierNameAtIndex(e)),e++),this.tokens.matches1AtIndex(e,i.braceL)){const f=this.getNamedImports(e+1);e=f.newIndex;for(const u of f.namedImports)u.importedName==="default"?r.push(u.localName):l.push(u)}if(this.tokens.matchesContextualAtIndex(e,w._from)&&e++,!this.tokens.matches1AtIndex(e,i.string))throw new Error("Expected string token at the end of import statement.");const a=this.tokens.stringValueAtIndex(e),c=this.getImportInfo(a);c.defaultNames.push(...r),c.wildcardNames.push(...o),c.namedImports.push(...l),r.length===0&&o.length===0&&l.length===0&&(c.hasBareImport=!0)}preprocessExportAtIndex(e){if(this.tokens.matches2AtIndex(e,i._export,i._var)||this.tokens.matches2AtIndex(e,i._export,i._let)||this.tokens.matches2AtIndex(e,i._export,i._const))this.preprocessVarExportAtIndex(e);else if(this.tokens.matches2AtIndex(e,i._export,i._function)||this.tokens.matches2AtIndex(e,i._export,i._class)){const r=this.tokens.identifierNameAtIndex(e+2);this.addExportBinding(r,r)}else if(this.tokens.matches3AtIndex(e,i._export,i.name,i._function)){const r=this.tokens.identifierNameAtIndex(e+3);this.addExportBinding(r,r)}else this.tokens.matches2AtIndex(e,i._export,i.braceL)?this.preprocessNamedExportAtIndex(e):this.tokens.matches2AtIndex(e,i._export,i.star)&&this.preprocessExportStarAtIndex(e)}preprocessVarExportAtIndex(e){let r=0;for(let o=e+2;;o++)if(this.tokens.matches1AtIndex(o,i.braceL)||this.tokens.matches1AtIndex(o,i.dollarBraceL)||this.tokens.matches1AtIndex(o,i.bracketL))r++;else if(this.tokens.matches1AtIndex(o,i.braceR)||this.tokens.matches1AtIndex(o,i.bracketR))r--;else{if(r===0&&!this.tokens.matches1AtIndex(o,i.name))break;if(this.tokens.matches1AtIndex(1,i.eq)){const l=this.tokens.currentToken().rhsEndIndex;if(l==null)throw new Error("Expected = token with an end index.");o=l-1}else{const l=this.tokens.tokens[o];if(jb(l)){const a=this.tokens.identifierNameAtIndex(o);this.identifierReplacements.set(a,`exports.${a}`)}}}}preprocessNamedExportAtIndex(e){e+=2;const{newIndex:r,namedImports:o}=this.getNamedImports(e);if(e=r,this.tokens.matchesContextualAtIndex(e,w._from))e++;else{for(const{importedName:c,localName:f}of o)this.addExportBinding(c,f);return}if(!this.tokens.matches1AtIndex(e,i.string))throw new Error("Expected string token at the end of import statement.");const l=this.tokens.stringValueAtIndex(e);this.getImportInfo(l).namedExports.push(...o)}preprocessExportStarAtIndex(e){let r=null;if(this.tokens.matches3AtIndex(e,i._export,i.star,i._as)?(e+=3,r=this.tokens.identifierNameAtIndex(e),e+=2):e+=3,!this.tokens.matches1AtIndex(e,i.string))throw new Error("Expected string token at the end of star export statement.");const o=this.tokens.stringValueAtIndex(e),l=this.getImportInfo(o);r!==null?l.exportStarNames.push(r):l.hasStarExport=!0}getNamedImports(e){const r=[];for(;;){if(this.tokens.matches1AtIndex(e,i.braceR)){e++;break}const o=bl(this.tokens,e);if(e=o.endIndex,o.isType||r.push({importedName:o.leftName,localName:o.rightName}),this.tokens.matches2AtIndex(e,i.comma,i.braceR)){e+=2;break}else if(this.tokens.matches1AtIndex(e,i.braceR)){e++;break}else if(this.tokens.matches1AtIndex(e,i.comma))e++;else throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[e])}`)}return{newIndex:e,namedImports:r}}getImportInfo(e){const r=this.importInfoByPath.get(e);if(r)return r;const o={defaultNames:[],wildcardNames:[],namedImports:[],namedExports:[],hasBareImport:!1,exportStarNames:[],hasStarExport:!1};return this.importInfoByPath.set(e,o),o}addExportBinding(e,r){this.exportBindingsByLocalName.has(e)||this.exportBindingsByLocalName.set(e,[]),this.exportBindingsByLocalName.get(e).push(r)}claimImportCode(e){const r=this.importsToReplace.get(e);return this.importsToReplace.set(e,""),r||""}getIdentifierReplacement(e){return this.identifierReplacements.get(e)||null}resolveExportBinding(e){const r=this.exportBindingsByLocalName.get(e);return!r||r.length===0?null:r.map(o=>`exports.${o}`).join(" = ")}getGlobalNames(){return new Set([...this.identifierReplacements.keys(),...this.exportBindingsByLocalName.keys()])}}var ns={exports:{}},ti={exports:{}},wd;function Qw(){return wd||(wd=1,function(t,e){(function(r,o){o(e)})(Xt,function(r){r.get=void 0,r.put=void 0,r.pop=void 0;class o{constructor(){this._indexes={__proto__:null},this.array=[]}}r.get=(l,a)=>l._indexes[a],r.put=(l,a)=>{const c=r.get(l,a);if(c!==void 0)return c;const{array:f,_indexes:u}=l;return u[a]=f.push(a)-1},r.pop=l=>{const{array:a,_indexes:c}=l;if(a.length===0)return;const f=a.pop();c[f]=void 0},r.SetArray=o,Object.defineProperty(r,"__esModule",{value:!0})})}(ti,ti.exports)),ti.exports}var ni={exports:{}},Pd;function Db(){return Pd||(Pd=1,function(t,e){(function(r,o){o(e)})(Xt,function(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=new Uint8Array(64),f=new Uint8Array(128);for(let m=0;m<a.length;m++){const h=a.charCodeAt(m);c[m]=h,f[h]=m}const u=typeof TextDecoder<"u"?new TextDecoder:typeof Buffer<"u"?{decode(m){return Buffer.from(m.buffer,m.byteOffset,m.byteLength).toString()}}:{decode(m){let h="";for(let b=0;b<m.length;b++)h+=String.fromCharCode(m[b]);return h}};function p(m){const h=new Int32Array(5),b=[];let v=0;do{const E=y(m,v),N=[];let _=!0,T=0;h[0]=0;for(let $=v;$<E;$++){let R;$=d(m,$,h,0);const W=h[0];W<T&&(_=!1),T=W,O(m,$,E)?($=d(m,$,h,1),$=d(m,$,h,2),$=d(m,$,h,3),O(m,$,E)?($=d(m,$,h,4),R=[W,h[1],h[2],h[3],h[4]]):R=[W,h[1],h[2],h[3]]):R=[W],N.push(R)}_||S(N),b.push(N),v=E+1}while(v<=m.length);return b}function y(m,h){const b=m.indexOf(";",h);return b===-1?m.length:b}function d(m,h,b,v){let E=0,N=0,_=0;do{const $=m.charCodeAt(h++);_=f[$],E|=(_&31)<<N,N+=5}while(_&32);const T=E&1;return E>>>=1,T&&(E=-2147483648|-E),b[v]+=E,h}function O(m,h,b){return h>=b?!1:m.charCodeAt(h)!==44}function S(m){m.sort(j)}function j(m,h){return m[0]-h[0]}function x(m){const h=new Int32Array(5),b=1024*16,v=b-36,E=new Uint8Array(b),N=E.subarray(0,v);let _=0,T="";for(let $=0;$<m.length;$++){const R=m[$];if($>0&&(_===b&&(T+=u.decode(E),_=0),E[_++]=59),R.length!==0){h[0]=0;for(let W=0;W<R.length;W++){const X=R[W];_>v&&(T+=u.decode(N),E.copyWithin(0,v,_),_-=v),W>0&&(E[_++]=44),_=P(E,_,h,X,0),X.length!==1&&(_=P(E,_,h,X,1),_=P(E,_,h,X,2),_=P(E,_,h,X,3),X.length!==4&&(_=P(E,_,h,X,4)))}}}return T+u.decode(E.subarray(0,_))}function P(m,h,b,v,E){const N=v[E];let _=N-b[E];b[E]=N,_=_<0?-_<<1|1:_<<1;do{let T=_&31;_>>>=5,_>0&&(T|=32),m[h++]=c[T]}while(_>0);return h}r.decode=p,r.encode=x,Object.defineProperty(r,"__esModule",{value:!0})})}(ni,ni.exports)),ni.exports}var ri={exports:{}},Qc={exports:{}},Sd;function Yw(){return Sd||(Sd=1,function(t,e){(function(r,o){t.exports=o()})(Xt,function(){const r=/^[\w+.-]+:\/\//,o=/^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,l=/^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;var a;(function(b){b[b.Empty=1]="Empty",b[b.Hash=2]="Hash",b[b.Query=3]="Query",b[b.RelativePath=4]="RelativePath",b[b.AbsolutePath=5]="AbsolutePath",b[b.SchemeRelative=6]="SchemeRelative",b[b.Absolute=7]="Absolute"})(a||(a={}));function c(b){return r.test(b)}function f(b){return b.startsWith("//")}function u(b){return b.startsWith("/")}function p(b){return b.startsWith("file:")}function y(b){return/^[.?#]/.test(b)}function d(b){const v=o.exec(b);return S(v[1],v[2]||"",v[3],v[4]||"",v[5]||"/",v[6]||"",v[7]||"")}function O(b){const v=l.exec(b),E=v[2];return S("file:","",v[1]||"","",u(E)?E:"/"+E,v[3]||"",v[4]||"")}function S(b,v,E,N,_,T,$){return{scheme:b,user:v,host:E,port:N,path:_,query:T,hash:$,type:a.Absolute}}function j(b){if(f(b)){const E=d("http:"+b);return E.scheme="",E.type=a.SchemeRelative,E}if(u(b)){const E=d("http://foo.com"+b);return E.scheme="",E.host="",E.type=a.AbsolutePath,E}if(p(b))return O(b);if(c(b))return d(b);const v=d("http://foo.com/"+b);return v.scheme="",v.host="",v.type=b?b.startsWith("?")?a.Query:b.startsWith("#")?a.Hash:a.RelativePath:a.Empty,v}function x(b){if(b.endsWith("/.."))return b;const v=b.lastIndexOf("/");return b.slice(0,v+1)}function P(b,v){m(v,v.type),b.path==="/"?b.path=v.path:b.path=x(v.path)+b.path}function m(b,v){const E=v<=a.RelativePath,N=b.path.split("/");let _=1,T=0,$=!1;for(let W=1;W<N.length;W++){const X=N[W];if(!X){$=!0;continue}if($=!1,X!=="."){if(X===".."){T?($=!0,T--,_--):E&&(N[_++]=X);continue}N[_++]=X,T++}}let R="";for(let W=1;W<_;W++)R+="/"+N[W];(!R||$&&!R.endsWith("/.."))&&(R+="/"),b.path=R}function h(b,v){if(!b&&!v)return"";const E=j(b);let N=E.type;if(v&&N!==a.Absolute){const T=j(v),$=T.type;switch(N){case a.Empty:E.hash=T.hash;case a.Hash:E.query=T.query;case a.Query:case a.RelativePath:P(E,T);case a.AbsolutePath:E.user=T.user,E.host=T.host,E.port=T.port;case a.SchemeRelative:E.scheme=T.scheme}$>N&&(N=$)}m(E,N);const _=E.query+E.hash;switch(N){case a.Hash:case a.Query:return _;case a.RelativePath:{const T=E.path.slice(1);return T?y(v||b)&&!y(T)?"./"+T+_:T+_:_||"."}case a.AbsolutePath:return E.path+_;default:return E.scheme+"//"+E.user+E.host+E.port+E.path+_}}return h})}(Qc)),Qc.exports}var _d;function Zw(){return _d||(_d=1,function(t,e){(function(r,o){o(e,Db(),Yw())})(Xt,function(r,o,l){function a(C,I){return I&&!I.endsWith("/")&&(I+="/"),l(C,I)}function c(C){if(!C)return"";const I=C.lastIndexOf("/");return C.slice(0,I+1)}const f=0,u=1,p=2,y=3,d=4,O=1,S=2;function j(C,I){const A=x(C,0);if(A===C.length)return C;I||(C=C.slice());for(let B=A;B<C.length;B=x(C,B+1))C[B]=m(C[B],I);return C}function x(C,I){for(let A=I;A<C.length;A++)if(!P(C[A]))return A;return C.length}function P(C){for(let I=1;I<C.length;I++)if(C[I][f]<C[I-1][f])return!1;return!0}function m(C,I){return I||(C=C.slice()),C.sort(h)}function h(C,I){return C[f]-I[f]}let b=!1;function v(C,I,A,B){for(;A<=B;){const G=A+(B-A>>1),J=C[G][f]-I;if(J===0)return b=!0,G;J<0?A=G+1:B=G-1}return b=!1,A-1}function E(C,I,A){for(let B=A+1;B<C.length&&C[B][f]===I;A=B++);return A}function N(C,I,A){for(let B=A-1;B>=0&&C[B][f]===I;A=B--);return A}function _(){return{lastKey:-1,lastNeedle:-1,lastIndex:-1}}function T(C,I,A,B){const{lastKey:G,lastNeedle:J,lastIndex:Z}=A;let ie=0,ae=C.length-1;if(B===G){if(I===J)return b=Z!==-1&&C[Z][f]===I,Z;I>=J?ie=Z===-1?0:Z:ae=Z}return A.lastKey=B,A.lastNeedle=I,A.lastIndex=v(C,I,ie,ae)}function $(C,I){const A=I.map(W);for(let B=0;B<C.length;B++){const G=C[B];for(let J=0;J<G.length;J++){const Z=G[J];if(Z.length===1)continue;const ie=Z[u],ae=Z[p],pe=Z[y],he=A[ie],be=he[ae]||(he[ae]=[]),xe=I[ie],Me=E(be,pe,T(be,pe,xe,ae));R(be,xe.lastIndex=Me+1,[pe,B,Z[f]])}}return A}function R(C,I,A){for(let B=C.length;B>I;B--)C[B]=C[B-1];C[I]=A}function W(){return{__proto__:null}}const X=function(C,I){const A=typeof C=="string"?JSON.parse(C):C;if(!("sections"in A))return new fe(A,I);const B=[],G=[],J=[],Z=[];oe(A,I,B,G,J,Z,0,0,1/0,1/0);const ie={version:3,file:A.file,names:Z,sources:G,sourcesContent:J,mappings:B};return r.presortedDecodedMap(ie)};function oe(C,I,A,B,G,J,Z,ie,ae,pe){const{sections:he}=C;for(let be=0;be<he.length;be++){const{map:xe,offset:Me}=he[be];let Ve=ae,st=pe;if(be+1<he.length){const lt=he[be+1].offset;Ve=Math.min(ae,Z+lt.line),Ve===ae?st=Math.min(pe,ie+lt.column):Ve<ae&&(st=ie+lt.column)}le(xe,I,A,B,G,J,Z+Me.line,ie+Me.column,Ve,st)}}function le(C,I,A,B,G,J,Z,ie,ae,pe){if("sections"in C)return oe(...arguments);const he=new fe(C,I),be=B.length,xe=J.length,Me=r.decodedMappings(he),{resolvedSources:Ve,sourcesContent:st}=he;if(je(B,Ve),je(J,he.names),st)je(G,st);else for(let lt=0;lt<Ve.length;lt++)G.push(null);for(let lt=0;lt<Me.length;lt++){const tr=Z+lt;if(tr>ae)return;const _r=Pe(A,tr),go=lt===0?ie:0,Er=Me[lt];for(let nr=0;nr<Er.length;nr++){const Bt=Er[nr],Sn=go+Bt[f];if(tr===ae&&Sn>=pe)return;if(Bt.length===1){_r.push([Sn]);continue}const Ir=be+Bt[u],kr=Bt[p],Nr=Bt[y];_r.push(Bt.length===4?[Sn,Ir,kr,Nr]:[Sn,Ir,kr,Nr,xe+Bt[d]])}}}function je(C,I){for(let A=0;A<I.length;A++)C.push(I[A])}function Pe(C,I){for(let A=C.length;A<=I;A++)C[A]=[];return C[I]}const _e="`line` must be greater than 0 (lines start at line 1)",z="`column` must be greater than or equal to 0 (columns start at column 0)",Y=-1,Q=1;r.encodedMappings=void 0,r.decodedMappings=void 0,r.traceSegment=void 0,r.originalPositionFor=void 0,r.generatedPositionFor=void 0,r.allGeneratedPositionsFor=void 0,r.eachMapping=void 0,r.sourceContentFor=void 0,r.presortedDecodedMap=void 0,r.decodedMap=void 0,r.encodedMap=void 0;class fe{constructor(I,A){const B=typeof I=="string";if(!B&&I._decodedMemo)return I;const G=B?JSON.parse(I):I,{version:J,file:Z,names:ie,sourceRoot:ae,sources:pe,sourcesContent:he}=G;this.version=J,this.file=Z,this.names=ie||[],this.sourceRoot=ae,this.sources=pe,this.sourcesContent=he;const be=a(ae||"",c(A));this.resolvedSources=pe.map(Me=>a(Me||"",be));const{mappings:xe}=G;typeof xe=="string"?(this._encoded=xe,this._decoded=void 0):(this._encoded=void 0,this._decoded=j(xe,B)),this._decodedMemo=_(),this._bySources=void 0,this._bySourceMemos=void 0}}(()=>{r.encodedMappings=I=>{var A;return(A=I._encoded)!==null&&A!==void 0?A:I._encoded=o.encode(I._decoded)},r.decodedMappings=I=>I._decoded||(I._decoded=o.decode(I._encoded)),r.traceSegment=(I,A,B)=>{const G=r.decodedMappings(I);if(A>=G.length)return null;const J=G[A],Z=D(J,I._decodedMemo,A,B,Q);return Z===-1?null:J[Z]},r.originalPositionFor=(I,{line:A,column:B,bias:G})=>{if(A--,A<0)throw new Error(_e);if(B<0)throw new Error(z);const J=r.decodedMappings(I);if(A>=J.length)return Re(null,null,null,null);const Z=J[A],ie=D(Z,I._decodedMemo,A,B,G||Q);if(ie===-1)return Re(null,null,null,null);const ae=Z[ie];if(ae.length===1)return Re(null,null,null,null);const{names:pe,resolvedSources:he}=I;return Re(he[ae[u]],ae[p]+1,ae[y],ae.length===5?pe[ae[d]]:null)},r.allGeneratedPositionsFor=(I,{source:A,line:B,column:G,bias:J})=>C(I,A,B,G,J||Y,!0),r.generatedPositionFor=(I,{source:A,line:B,column:G,bias:J})=>C(I,A,B,G,J||Q,!1),r.eachMapping=(I,A)=>{const B=r.decodedMappings(I),{names:G,resolvedSources:J}=I;for(let Z=0;Z<B.length;Z++){const ie=B[Z];for(let ae=0;ae<ie.length;ae++){const pe=ie[ae],he=Z+1,be=pe[0];let xe=null,Me=null,Ve=null,st=null;pe.length!==1&&(xe=J[pe[1]],Me=pe[2]+1,Ve=pe[3]),pe.length===5&&(st=G[pe[4]]),A({generatedLine:he,generatedColumn:be,source:xe,originalLine:Me,originalColumn:Ve,name:st})}}},r.sourceContentFor=(I,A)=>{const{sources:B,resolvedSources:G,sourcesContent:J}=I;if(J==null)return null;let Z=B.indexOf(A);return Z===-1&&(Z=G.indexOf(A)),Z===-1?null:J[Z]},r.presortedDecodedMap=(I,A)=>{const B=new fe(Oe(I,[]),A);return B._decoded=I.mappings,B},r.decodedMap=I=>Oe(I,r.decodedMappings(I)),r.encodedMap=I=>Oe(I,r.encodedMappings(I));function C(I,A,B,G,J,Z){if(B--,B<0)throw new Error(_e);if(G<0)throw new Error(z);const{sources:ie,resolvedSources:ae}=I;let pe=ie.indexOf(A);if(pe===-1&&(pe=ae.indexOf(A)),pe===-1)return Z?[]:ke(null,null);const be=(I._bySources||(I._bySources=$(r.decodedMappings(I),I._bySourceMemos=ie.map(_))))[pe][B];if(be==null)return Z?[]:ke(null,null);const xe=I._bySourceMemos[pe];if(Z)return U(be,xe,B,G,J);const Me=D(be,xe,B,G,J);if(Me===-1)return ke(null,null);const Ve=be[Me];return ke(Ve[O]+1,Ve[S])}})();function Oe(C,I){return{version:C.version,file:C.file,names:C.names,sourceRoot:C.sourceRoot,sources:C.sources,sourcesContent:C.sourcesContent,mappings:I}}function Re(C,I,A,B){return{source:C,line:I,column:A,name:B}}function ke(C,I){return{line:C,column:I}}function D(C,I,A,B,G){let J=T(C,B,I,A);return b?J=(G===Y?E:N)(C,B,J):G===Y&&J++,J===-1||J===C.length?-1:J}function U(C,I,A,B,G){let J=D(C,I,A,B,Q);if(!b&&G===Y&&J++,J===-1||J===C.length)return[];const Z=b?B:C[J][f];b||(J=N(C,Z,J));const ie=E(C,Z,J),ae=[];for(;J<=ie;J++){const pe=C[J];ae.push(ke(pe[O]+1,pe[S]))}return ae}r.AnyMap=X,r.GREATEST_LOWER_BOUND=Q,r.LEAST_UPPER_BOUND=Y,r.TraceMap=fe})}(ri,ri.exports)),ri.exports}(function(t,e){(function(r,o){o(e,Qw(),Db(),Zw())})(Xt,function(r,o,l,a){r.addSegment=void 0,r.addMapping=void 0,r.maybeAddSegment=void 0,r.maybeAddMapping=void 0,r.setSourceContent=void 0,r.toDecodedMap=void 0,r.toEncodedMap=void 0,r.fromMap=void 0,r.allMappings=void 0;let O;class S{constructor({file:_,sourceRoot:T}={}){this._names=new o.SetArray,this._sources=new o.SetArray,this._sourcesContent=[],this._mappings=[],this.file=_,this.sourceRoot=T}}r.addSegment=(N,_,T,$,R,W,X,oe)=>O(!1,N,_,T,$,R,W,X,oe),r.maybeAddSegment=(N,_,T,$,R,W,X,oe)=>O(!0,N,_,T,$,R,W,X,oe),r.addMapping=(N,_)=>E(!1,N,_),r.maybeAddMapping=(N,_)=>E(!0,N,_),r.setSourceContent=(N,_,T)=>{const{_sources:$,_sourcesContent:R}=N;R[o.put($,_)]=T},r.toDecodedMap=N=>{const{file:_,sourceRoot:T,_mappings:$,_sources:R,_sourcesContent:W,_names:X}=N;return m($),{version:3,file:_||void 0,names:X.array,sourceRoot:T||void 0,sources:R.array,sourcesContent:W,mappings:$}},r.toEncodedMap=N=>{const _=r.toDecodedMap(N);return Object.assign(Object.assign({},_),{mappings:l.encode(_.mappings)})},r.allMappings=N=>{const _=[],{_mappings:T,_sources:$,_names:R}=N;for(let W=0;W<T.length;W++){const X=T[W];for(let oe=0;oe<X.length;oe++){const le=X[oe],je={line:W+1,column:le[0]};let Pe,_e,z;le.length!==1&&(Pe=$.array[le[1]],_e={line:le[2]+1,column:le[3]},le.length===5&&(z=R.array[le[4]])),_.push({generated:je,source:Pe,original:_e,name:z})}}return _},r.fromMap=N=>{const _=new a.TraceMap(N),T=new S({file:_.file,sourceRoot:_.sourceRoot});return h(T._names,_.names),h(T._sources,_.sources),T._sourcesContent=_.sourcesContent||_.sources.map(()=>null),T._mappings=a.decodedMappings(_),T},O=(N,_,T,$,R,W,X,oe,le)=>{const{_mappings:je,_sources:Pe,_sourcesContent:_e,_names:z}=_,Y=j(je,T),Q=x(Y,$);if(!R)return N&&b(Y,Q)?void 0:P(Y,Q,[$]);const fe=o.put(Pe,R),Oe=oe?o.put(z,oe):-1;if(fe===_e.length&&(_e[fe]=le??null),!(N&&v(Y,Q,fe,W,X,Oe)))return P(Y,Q,oe?[$,fe,W,X,Oe]:[$,fe,W,X])};function j(N,_){for(let T=N.length;T<=_;T++)N[T]=[];return N[_]}function x(N,_){let T=N.length;for(let $=T-1;$>=0;T=$--){const R=N[$];if(_>=R[0])break}return T}function P(N,_,T){for(let $=N.length;$>_;$--)N[$]=N[$-1];N[_]=T}function m(N){const{length:_}=N;let T=_;for(let $=T-1;$>=0&&!(N[$].length>0);T=$,$--);T<_&&(N.length=T)}function h(N,_){for(let T=0;T<_.length;T++)o.put(N,_[T])}function b(N,_){return _===0?!0:N[_-1].length===1}function v(N,_,T,$,R,W){if(_===0)return!1;const X=N[_-1];return X.length===1?!1:T===X[1]&&$===X[2]&&R===X[3]&&W===(X.length===5?X[4]:-1)}function E(N,_,T){const{generated:$,source:R,original:W,name:X,content:oe}=T;if(!R)return O(N,_,$.line-1,$.column,null,null,null,null,null);const le=R;return O(N,_,$.line-1,$.column,le,W.line-1,W.column,X,oe)}r.GenMapping=S,Object.defineProperty(r,"__esModule",{value:!0})})})(ns,ns.exports);var No=ns.exports;function eP({code:t,mappings:e},r,o,l,a){const c=tP(l,a),f=new No.GenMapping({file:o.compiledFilename});let u=0,p=e[0];for(;p===void 0&&u<e.length-1;)u++,p=e[u];let y=0,d=0;p!==d&&No.maybeAddSegment(f,y,0,r,y,0);for(let x=0;x<t.length;x++){if(x===p){const P=p-d,m=c[u];for(No.maybeAddSegment(f,y,P,r,y,m);(p===x||p===void 0)&&u<e.length-1;)u++,p=e[u]}t.charCodeAt(x)===k.lineFeed&&(y++,d=x+1,p!==d&&No.maybeAddSegment(f,y,0,r,y,0))}const{sourceRoot:O,sourcesContent:S,...j}=No.toEncodedMap(f);return j}function tP(t,e){const r=new Array(e.length);let o=0,l=e[o].start,a=0;for(let c=0;c<t.length;c++)c===l&&(r[o]=l-a,o++,l=e[o].start),t.charCodeAt(c)===k.lineFeed&&(a=c+1);return r}const nP={require:`
    import {createRequire as CREATE_REQUIRE_NAME} from "module";
    const require = CREATE_REQUIRE_NAME(import.meta.url);
  `,interopRequireWildcard:`
    function interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        return newObj;
      }
    }
  `,interopRequireDefault:`
    function interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  `,createNamedExportFrom:`
    function createNamedExportFrom(obj, localName, importedName) {
      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});
    }
  `,createStarExport:`
    function createStarExport(obj) {
      Object.keys(obj)
        .filter((key) => key !== "default" && key !== "__esModule")
        .forEach((key) => {
          if (exports.hasOwnProperty(key)) {
            return;
          }
          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});
        });
    }
  `,nullishCoalesce:`
    function nullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return rhsFn();
      }
    }
  `,asyncNullishCoalesce:`
    async function asyncNullishCoalesce(lhs, rhsFn) {
      if (lhs != null) {
        return lhs;
      } else {
        return await rhsFn();
      }
    }
  `,optionalChain:`
    function optionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,asyncOptionalChain:`
    async function asyncOptionalChain(ops) {
      let lastAccessLHS = undefined;
      let value = ops[0];
      let i = 1;
      while (i < ops.length) {
        const op = ops[i];
        const fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
          return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
          lastAccessLHS = value;
          value = await fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
          value = await fn((...args) => value.call(lastAccessLHS, ...args));
          lastAccessLHS = undefined;
        }
      }
      return value;
    }
  `,optionalChainDelete:`
    function optionalChainDelete(ops) {
      const result = OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `,asyncOptionalChainDelete:`
    async function asyncOptionalChainDelete(ops) {
      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);
      return result == null ? true : result;
    }
  `};class Zi{__init(){this.helperNames={}}__init2(){this.createRequireName=null}constructor(e){this.nameManager=e,Zi.prototype.__init.call(this),Zi.prototype.__init2.call(this)}getHelperName(e){let r=this.helperNames[e];return r||(r=this.nameManager.claimFreeName(`_${e}`),this.helperNames[e]=r,r)}emitHelpers(){let e="";this.helperNames.optionalChainDelete&&this.getHelperName("optionalChain"),this.helperNames.asyncOptionalChainDelete&&this.getHelperName("asyncOptionalChain");for(const[r,o]of Object.entries(nP)){const l=this.helperNames[r];let a=o;r==="optionalChainDelete"?a=a.replace("OPTIONAL_CHAIN_NAME",this.helperNames.optionalChain):r==="asyncOptionalChainDelete"?a=a.replace("ASYNC_OPTIONAL_CHAIN_NAME",this.helperNames.asyncOptionalChain):r==="require"&&(this.createRequireName===null&&(this.createRequireName=this.nameManager.claimFreeName("_createRequire")),a=a.replace(/CREATE_REQUIRE_NAME/g,this.createRequireName)),l&&(e+=" ",e+=a.replace(r,l).replace(/\s+/g," ").trim())}return e}}function Ed(t,e,r){rP(t,r)&&oP(t,e,r)}function rP(t,e){for(const r of t.tokens)if(r.type===i.name&&!r.isType&&Pw(r)&&e.has(t.identifierNameForToken(r)))return!0;return!1}function oP(t,e,r){const o=[];let l=e.length-1;for(let a=t.tokens.length-1;;a--){for(;o.length>0&&o[o.length-1].startTokenIndex===a+1;)o.pop();for(;l>=0&&e[l].endTokenIndex===a+1;)o.push(e[l]),l--;if(a<0)break;const c=t.tokens[a],f=t.identifierNameForToken(c);if(o.length>1&&!c.isType&&c.type===i.name&&r.has(f)){if(Sw(c))Id(o[o.length-1],t,f);else if(_w(c)){let u=o.length-1;for(;u>0&&!o[u].isFunctionScope;)u--;if(u<0)throw new Error("Did not find parent function scope.");Id(o[u],t,f)}}}if(o.length>0)throw new Error("Expected empty scope stack after processing file.")}function Id(t,e,r){for(let o=t.startTokenIndex;o<t.endTokenIndex;o++){const l=e.tokens[o];(l.type===i.name||l.type===i.jsxName)&&e.identifierNameForToken(l)===r&&(l.shadowsGlobal=!0)}}function lP(t,e){const r=[];for(const o of e)o.type===i.name&&r.push(t.slice(o.start,o.end));return r}class du{__init(){this.usedNames=new Set}constructor(e,r){du.prototype.__init.call(this),this.usedNames=new Set(lP(e,r))}claimFreeName(e){const r=this.findFreeName(e);return this.usedNames.add(r),r}findFreeName(e){if(!this.usedNames.has(e))return e;let r=2;for(;this.usedNames.has(e+String(r));)r++;return e+String(r)}}var Ee={},rs={},fn={},iP=Xt&&Xt.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,l){o.__proto__=l}||function(o,l){for(var a in l)l.hasOwnProperty(a)&&(o[a]=l[a])},t(e,r)};return function(e,r){t(e,r);function o(){this.constructor=e}e.prototype=r===null?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(fn,"__esModule",{value:!0});fn.DetailContext=fn.NoopContext=fn.VError=void 0;var Fb=function(t){iP(e,t);function e(r,o){var l=t.call(this,o)||this;return l.path=r,Object.setPrototypeOf(l,e.prototype),l}return e}(Error);fn.VError=Fb;var aP=function(){function t(){}return t.prototype.fail=function(e,r,o){return!1},t.prototype.unionResolver=function(){return this},t.prototype.createContext=function(){return this},t.prototype.resolveUnion=function(e){},t}();fn.NoopContext=aP;var Mb=function(){function t(){this._propNames=[""],this._messages=[null],this._score=0}return t.prototype.fail=function(e,r,o){return this._propNames.push(e),this._messages.push(r),this._score+=o,!1},t.prototype.unionResolver=function(){return new cP},t.prototype.resolveUnion=function(e){for(var r,o,l=e,a=null,c=0,f=l.contexts;c<f.length;c++){var u=f[c];(!a||u._score>=a._score)&&(a=u)}a&&a._score>0&&((r=this._propNames).push.apply(r,a._propNames),(o=this._messages).push.apply(o,a._messages))},t.prototype.getError=function(e){for(var r=[],o=this._propNames.length-1;o>=0;o--){var l=this._propNames[o];e+=typeof l=="number"?"["+l+"]":l?"."+l:"";var a=this._messages[o];a&&r.push(e+" "+a)}return new Fb(e,r.join("; "))},t.prototype.getErrorDetail=function(e){for(var r=[],o=this._propNames.length-1;o>=0;o--){var l=this._propNames[o];e+=typeof l=="number"?"["+l+"]":l?"."+l:"";var a=this._messages[o];a&&r.push({path:e,message:a})}for(var c=null,o=r.length-1;o>=0;o--)c&&(r[o].nested=[c]),c=r[o];return c},t}();fn.DetailContext=Mb;var cP=function(){function t(){this.contexts=[]}return t.prototype.createContext=function(){var e=new Mb;return this.contexts.push(e),e},t}();(function(t){var e=Xt&&Xt.__extends||function(){var D=function(U,C){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(I,A){I.__proto__=A}||function(I,A){for(var B in A)A.hasOwnProperty(B)&&(I[B]=A[B])},D(U,C)};return function(U,C){D(U,C);function I(){this.constructor=U}U.prototype=C===null?Object.create(C):(I.prototype=C.prototype,new I)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.basicTypes=t.BasicType=t.TParamList=t.TParam=t.param=t.TFunc=t.func=t.TProp=t.TOptional=t.opt=t.TIface=t.iface=t.TEnumLiteral=t.enumlit=t.TEnumType=t.enumtype=t.TIntersection=t.intersection=t.TUnion=t.union=t.TTuple=t.tuple=t.TArray=t.array=t.TLiteral=t.lit=t.TName=t.name=t.TType=void 0;var r=fn,o=function(){function D(){}return D}();t.TType=o;function l(D){return typeof D=="string"?c(D):D}function a(D,U){var C=D[U];if(!C)throw new Error("Unknown type "+U);return C}function c(D){return new f(D)}t.name=c;var f=function(D){e(U,D);function U(C){var I=D.call(this)||this;return I.name=C,I._failMsg="is not a "+C,I}return U.prototype.getChecker=function(C,I,A){var B=this,G=a(C,this.name),J=G.getChecker(C,I,A);return G instanceof z||G instanceof U?J:function(Z,ie){return J(Z,ie)?!0:ie.fail(null,B._failMsg,0)}},U}(o);t.TName=f;function u(D){return new p(D)}t.lit=u;var p=function(D){e(U,D);function U(C){var I=D.call(this)||this;return I.value=C,I.name=JSON.stringify(C),I._failMsg="is not "+I.name,I}return U.prototype.getChecker=function(C,I){var A=this;return function(B,G){return B===A.value?!0:G.fail(null,A._failMsg,-1)}},U}(o);t.TLiteral=p;function y(D){return new d(l(D))}t.array=y;var d=function(D){e(U,D);function U(C){var I=D.call(this)||this;return I.ttype=C,I}return U.prototype.getChecker=function(C,I){var A=this.ttype.getChecker(C,I);return function(B,G){if(!Array.isArray(B))return G.fail(null,"is not an array",0);for(var J=0;J<B.length;J++){var Z=A(B[J],G);if(!Z)return G.fail(J,null,1)}return!0}},U}(o);t.TArray=d;function O(){for(var D=[],U=0;U<arguments.length;U++)D[U]=arguments[U];return new S(D.map(function(C){return l(C)}))}t.tuple=O;var S=function(D){e(U,D);function U(C){var I=D.call(this)||this;return I.ttypes=C,I}return U.prototype.getChecker=function(C,I){var A=this.ttypes.map(function(G){return G.getChecker(C,I)}),B=function(G,J){if(!Array.isArray(G))return J.fail(null,"is not an array",0);for(var Z=0;Z<A.length;Z++){var ie=A[Z](G[Z],J);if(!ie)return J.fail(Z,null,1)}return!0};return I?function(G,J){return B(G,J)?G.length<=A.length?!0:J.fail(A.length,"is extraneous",2):!1}:B},U}(o);t.TTuple=S;function j(){for(var D=[],U=0;U<arguments.length;U++)D[U]=arguments[U];return new x(D.map(function(C){return l(C)}))}t.union=j;var x=function(D){e(U,D);function U(C){var I=D.call(this)||this;I.ttypes=C;var A=C.map(function(G){return G instanceof f||G instanceof p?G.name:null}).filter(function(G){return G}),B=C.length-A.length;return A.length?(B>0&&A.push(B+" more"),I._failMsg="is none of "+A.join(", ")):I._failMsg="is none of "+B+" types",I}return U.prototype.getChecker=function(C,I){var A=this,B=this.ttypes.map(function(G){return G.getChecker(C,I)});return function(G,J){for(var Z=J.unionResolver(),ie=0;ie<B.length;ie++){var ae=B[ie](G,Z.createContext());if(ae)return!0}return J.resolveUnion(Z),J.fail(null,A._failMsg,0)}},U}(o);t.TUnion=x;function P(){for(var D=[],U=0;U<arguments.length;U++)D[U]=arguments[U];return new m(D.map(function(C){return l(C)}))}t.intersection=P;var m=function(D){e(U,D);function U(C){var I=D.call(this)||this;return I.ttypes=C,I}return U.prototype.getChecker=function(C,I){var A=new Set,B=this.ttypes.map(function(G){return G.getChecker(C,I,A)});return function(G,J){var Z=B.every(function(ie){return ie(G,J)});return Z?!0:J.fail(null,null,0)}},U}(o);t.TIntersection=m;function h(D){return new b(D)}t.enumtype=h;var b=function(D){e(U,D);function U(C){var I=D.call(this)||this;return I.members=C,I.validValues=new Set,I._failMsg="is not a valid enum value",I.validValues=new Set(Object.keys(C).map(function(A){return C[A]})),I}return U.prototype.getChecker=function(C,I){var A=this;return function(B,G){return A.validValues.has(B)?!0:G.fail(null,A._failMsg,0)}},U}(o);t.TEnumType=b;function v(D,U){return new E(D,U)}t.enumlit=v;var E=function(D){e(U,D);function U(C,I){var A=D.call(this)||this;return A.enumName=C,A.prop=I,A._failMsg="is not "+C+"."+I,A}return U.prototype.getChecker=function(C,I){var A=this,B=a(C,this.enumName);if(!(B instanceof b))throw new Error("Type "+this.enumName+" used in enumlit is not an enum type");var G=B.members[this.prop];if(!B.members.hasOwnProperty(this.prop))throw new Error("Unknown value "+this.enumName+"."+this.prop+" used in enumlit");return function(J,Z){return J===G?!0:Z.fail(null,A._failMsg,-1)}},U}(o);t.TEnumLiteral=E;function N(D){return Object.keys(D).map(function(U){return _(U,D[U])})}function _(D,U){return U instanceof W?new X(D,U.ttype,!0):new X(D,l(U),!1)}function T(D,U){return new $(D,N(U))}t.iface=T;var $=function(D){e(U,D);function U(C,I){var A=D.call(this)||this;return A.bases=C,A.props=I,A.propSet=new Set(I.map(function(B){return B.name})),A}return U.prototype.getChecker=function(C,I,A){var B=this,G=this.bases.map(function(he){return a(C,he).getChecker(C,I)}),J=this.props.map(function(he){return he.ttype.getChecker(C,I)}),Z=new r.NoopContext,ie=this.props.map(function(he,be){return!he.isOpt&&!J[be](void 0,Z)}),ae=function(he,be){if(typeof he!="object"||he===null)return be.fail(null,"is not an object",0);for(var xe=0;xe<G.length;xe++)if(!G[xe](he,be))return!1;for(var xe=0;xe<J.length;xe++){var Me=B.props[xe].name,Ve=he[Me];if(Ve===void 0){if(ie[xe])return be.fail(Me,"is missing",1)}else{var st=J[xe](Ve,be);if(!st)return be.fail(Me,null,1)}}return!0};if(!I)return ae;var pe=this.propSet;return A&&(this.propSet.forEach(function(he){return A.add(he)}),pe=A),function(he,be){if(!ae(he,be))return!1;for(var xe in he)if(!pe.has(xe))return be.fail(xe,"is extraneous",2);return!0}},U}(o);t.TIface=$;function R(D){return new W(l(D))}t.opt=R;var W=function(D){e(U,D);function U(C){var I=D.call(this)||this;return I.ttype=C,I}return U.prototype.getChecker=function(C,I){var A=this.ttype.getChecker(C,I);return function(B,G){return B===void 0||A(B,G)}},U}(o);t.TOptional=W;var X=function(){function D(U,C,I){this.name=U,this.ttype=C,this.isOpt=I}return D}();t.TProp=X;function oe(D){for(var U=[],C=1;C<arguments.length;C++)U[C-1]=arguments[C];return new le(new _e(U),l(D))}t.func=oe;var le=function(D){e(U,D);function U(C,I){var A=D.call(this)||this;return A.paramList=C,A.result=I,A}return U.prototype.getChecker=function(C,I){return function(A,B){return typeof A=="function"?!0:B.fail(null,"is not a function",0)}},U}(o);t.TFunc=le;function je(D,U,C){return new Pe(D,l(U),!!C)}t.param=je;var Pe=function(){function D(U,C,I){this.name=U,this.ttype=C,this.isOpt=I}return D}();t.TParam=Pe;var _e=function(D){e(U,D);function U(C){var I=D.call(this)||this;return I.params=C,I}return U.prototype.getChecker=function(C,I){var A=this,B=this.params.map(function(ie){return ie.ttype.getChecker(C,I)}),G=new r.NoopContext,J=this.params.map(function(ie,ae){return!ie.isOpt&&!B[ae](void 0,G)}),Z=function(ie,ae){if(!Array.isArray(ie))return ae.fail(null,"is not an array",0);for(var pe=0;pe<B.length;pe++){var he=A.params[pe];if(ie[pe]===void 0){if(J[pe])return ae.fail(he.name,"is missing",1)}else{var be=B[pe](ie[pe],ae);if(!be)return ae.fail(he.name,null,1)}}return!0};return I?function(ie,ae){return Z(ie,ae)?ie.length<=B.length?!0:ae.fail(B.length,"is extraneous",2):!1}:Z},U}(o);t.TParamList=_e;var z=function(D){e(U,D);function U(C,I){var A=D.call(this)||this;return A.validator=C,A.message=I,A}return U.prototype.getChecker=function(C,I){var A=this;return function(B,G){return A.validator(B)?!0:G.fail(null,A.message,0)}},U}(o);t.BasicType=z,t.basicTypes={any:new z(function(D){return!0},"is invalid"),number:new z(function(D){return typeof D=="number"},"is not a number"),object:new z(function(D){return typeof D=="object"&&D},"is not an object"),boolean:new z(function(D){return typeof D=="boolean"},"is not a boolean"),string:new z(function(D){return typeof D=="string"},"is not a string"),symbol:new z(function(D){return typeof D=="symbol"},"is not a symbol"),void:new z(function(D){return D==null},"is not void"),undefined:new z(function(D){return D===void 0},"is not undefined"),null:new z(function(D){return D===null},"is not null"),never:new z(function(D){return!1},"is unexpected"),Date:new z(Q("[object Date]"),"is not a Date"),RegExp:new z(Q("[object RegExp]"),"is not a RegExp")};var Y=Object.prototype.toString;function Q(D){return function(U){return typeof U=="object"&&U&&Y.call(U)===D}}typeof Buffer<"u"&&(t.basicTypes.Buffer=new z(function(D){return Buffer.isBuffer(D)},"is not a Buffer"));for(var fe=function(D){t.basicTypes[D.name]=new z(function(U){return U instanceof D},"is not a "+D.name)},Oe=0,Re=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,ArrayBuffer];Oe<Re.length;Oe++){var ke=Re[Oe];fe(ke)}})(rs);(function(t){var e=Xt&&Xt.__spreadArrays||function(){for(var u=0,p=0,y=arguments.length;p<y;p++)u+=arguments[p].length;for(var d=Array(u),O=0,p=0;p<y;p++)for(var S=arguments[p],j=0,x=S.length;j<x;j++,O++)d[O]=S[j];return d};Object.defineProperty(t,"__esModule",{value:!0}),t.Checker=t.createCheckers=void 0;var r=rs,o=fn,l=rs;Object.defineProperty(t,"TArray",{enumerable:!0,get:function(){return l.TArray}}),Object.defineProperty(t,"TEnumType",{enumerable:!0,get:function(){return l.TEnumType}}),Object.defineProperty(t,"TEnumLiteral",{enumerable:!0,get:function(){return l.TEnumLiteral}}),Object.defineProperty(t,"TFunc",{enumerable:!0,get:function(){return l.TFunc}}),Object.defineProperty(t,"TIface",{enumerable:!0,get:function(){return l.TIface}}),Object.defineProperty(t,"TLiteral",{enumerable:!0,get:function(){return l.TLiteral}}),Object.defineProperty(t,"TName",{enumerable:!0,get:function(){return l.TName}}),Object.defineProperty(t,"TOptional",{enumerable:!0,get:function(){return l.TOptional}}),Object.defineProperty(t,"TParam",{enumerable:!0,get:function(){return l.TParam}}),Object.defineProperty(t,"TParamList",{enumerable:!0,get:function(){return l.TParamList}}),Object.defineProperty(t,"TProp",{enumerable:!0,get:function(){return l.TProp}}),Object.defineProperty(t,"TTuple",{enumerable:!0,get:function(){return l.TTuple}}),Object.defineProperty(t,"TType",{enumerable:!0,get:function(){return l.TType}}),Object.defineProperty(t,"TUnion",{enumerable:!0,get:function(){return l.TUnion}}),Object.defineProperty(t,"TIntersection",{enumerable:!0,get:function(){return l.TIntersection}}),Object.defineProperty(t,"array",{enumerable:!0,get:function(){return l.array}}),Object.defineProperty(t,"enumlit",{enumerable:!0,get:function(){return l.enumlit}}),Object.defineProperty(t,"enumtype",{enumerable:!0,get:function(){return l.enumtype}}),Object.defineProperty(t,"func",{enumerable:!0,get:function(){return l.func}}),Object.defineProperty(t,"iface",{enumerable:!0,get:function(){return l.iface}}),Object.defineProperty(t,"lit",{enumerable:!0,get:function(){return l.lit}}),Object.defineProperty(t,"name",{enumerable:!0,get:function(){return l.name}}),Object.defineProperty(t,"opt",{enumerable:!0,get:function(){return l.opt}}),Object.defineProperty(t,"param",{enumerable:!0,get:function(){return l.param}}),Object.defineProperty(t,"tuple",{enumerable:!0,get:function(){return l.tuple}}),Object.defineProperty(t,"union",{enumerable:!0,get:function(){return l.union}}),Object.defineProperty(t,"intersection",{enumerable:!0,get:function(){return l.intersection}}),Object.defineProperty(t,"BasicType",{enumerable:!0,get:function(){return l.BasicType}});var a=fn;Object.defineProperty(t,"VError",{enumerable:!0,get:function(){return a.VError}});function c(){for(var u=[],p=0;p<arguments.length;p++)u[p]=arguments[p];for(var y=Object.assign.apply(Object,e([{},r.basicTypes],u)),d={},O=0,S=u;O<S.length;O++)for(var j=S[O],x=0,P=Object.keys(j);x<P.length;x++){var m=P[x];d[m]=new f(y,j[m])}return d}t.createCheckers=c;var f=function(){function u(p,y,d){if(d===void 0&&(d="value"),this.suite=p,this.ttype=y,this._path=d,this.props=new Map,y instanceof r.TIface)for(var O=0,S=y.props;O<S.length;O++){var j=S[O];this.props.set(j.name,j.ttype)}this.checkerPlain=this.ttype.getChecker(p,!1),this.checkerStrict=this.ttype.getChecker(p,!0)}return u.prototype.setReportedPath=function(p){this._path=p},u.prototype.check=function(p){return this._doCheck(this.checkerPlain,p)},u.prototype.test=function(p){return this.checkerPlain(p,new o.NoopContext)},u.prototype.validate=function(p){return this._doValidate(this.checkerPlain,p)},u.prototype.strictCheck=function(p){return this._doCheck(this.checkerStrict,p)},u.prototype.strictTest=function(p){return this.checkerStrict(p,new o.NoopContext)},u.prototype.strictValidate=function(p){return this._doValidate(this.checkerStrict,p)},u.prototype.getProp=function(p){var y=this.props.get(p);if(!y)throw new Error("Type has no property "+p);return new u(this.suite,y,this._path+"."+p)},u.prototype.methodArgs=function(p){var y=this._getMethod(p);return new u(this.suite,y.paramList)},u.prototype.methodResult=function(p){var y=this._getMethod(p);return new u(this.suite,y.result)},u.prototype.getArgs=function(){if(!(this.ttype instanceof r.TFunc))throw new Error("getArgs() applied to non-function");return new u(this.suite,this.ttype.paramList)},u.prototype.getResult=function(){if(!(this.ttype instanceof r.TFunc))throw new Error("getResult() applied to non-function");return new u(this.suite,this.ttype.result)},u.prototype.getType=function(){return this.ttype},u.prototype._doCheck=function(p,y){var d=new o.NoopContext;if(!p(y,d)){var O=new o.DetailContext;throw p(y,O),O.getError(this._path)}},u.prototype._doValidate=function(p,y){var d=new o.NoopContext;if(p(y,d))return null;var O=new o.DetailContext;return p(y,O),O.getErrorDetail(this._path)},u.prototype._getMethod=function(p){var y=this.props.get(p);if(!y)throw new Error("Type has no property "+p);if(!(y instanceof r.TFunc))throw new Error("Property "+p+" is not a method");return y},u}();t.Checker=f})(Ee);const fP=Ee.union(Ee.lit("jsx"),Ee.lit("typescript"),Ee.lit("flow"),Ee.lit("imports"),Ee.lit("react-hot-loader"),Ee.lit("jest")),sP=Ee.iface([],{compiledFilename:"string"}),uP=Ee.iface([],{transforms:Ee.array("Transform"),disableESTransforms:Ee.opt("boolean"),jsxRuntime:Ee.opt(Ee.union(Ee.lit("classic"),Ee.lit("automatic"),Ee.lit("preserve"))),production:Ee.opt("boolean"),jsxImportSource:Ee.opt("string"),jsxPragma:Ee.opt("string"),jsxFragmentPragma:Ee.opt("string"),keepUnusedImports:Ee.opt("boolean"),preserveDynamicImport:Ee.opt("boolean"),injectCreateRequireForImportRequire:Ee.opt("boolean"),enableLegacyTypeScriptModuleInterop:Ee.opt("boolean"),enableLegacyBabel5ModuleInterop:Ee.opt("boolean"),sourceMapOptions:Ee.opt("SourceMapOptions"),filePath:Ee.opt("string")}),pP={Transform:fP,SourceMapOptions:sP,Options:uP},{Options:dP}=Ee.createCheckers(pP);function yP(t){dP.strictCheck(t)}function $b(){M(),tt(!1)}function Bb(t){M(),Aa(t)}function er(t){ce(),yu(t)}function ea(){ce(),s.tokens[s.tokens.length-1].identifierRole=re.ImportDeclaration}function yu(t){let e;s.scopeDepth===0?e=re.TopLevelDeclaration:t?e=re.BlockScopedDeclaration:e=re.FunctionScopedDeclaration,s.tokens[s.tokens.length-1].identifierRole=e}function Aa(t){switch(s.type){case i._this:{const e=ye(0);M(),de(e);return}case i._yield:case i.name:{s.type=i.name,er(t);return}case i.bracketL:{M(),Ou(i.bracketR,t,!0);return}case i.braceL:_u(!0,t);return;default:ue()}}function Ou(t,e,r=!1,o=!1,l=0){let a=!0,c=!1;const f=s.tokens.length;for(;!L(t)&&!s.error;)if(a?a=!1:(F(i.comma),s.tokens[s.tokens.length-1].contextId=l,!c&&s.tokens[f].isType&&(s.tokens[s.tokens.length-1].isType=!0,c=!0)),!(r&&g(i.comma))){if(L(t))break;if(g(i.ellipsis)){Bb(e),zb(),L(i.comma),F(t);break}else OP(o,e)}}function OP(t,e){t&&hu([w._public,w._protected,w._private,w._readonly,w._override]),ta(e),zb(),ta(e,!0)}function zb(){we?A_():me&&wS()}function ta(t,e=!1){if(e||Aa(t),!L(i.eq))return;const r=s.tokens.length-1;tt(),s.tokens[r].rhsEndIndex=s.tokens.length}function os(){return g(i.name)}function hP(){return g(i.name)||!!(s.type&i.IS_KEYWORD)||g(i.string)||g(i.num)||g(i.bigint)||g(i.decimal)}function Ub(){const t=s.snapshot();return M(),(g(i.bracketL)||g(i.braceL)||g(i.star)||g(i.ellipsis)||g(i.hash)||hP())&&!yt()?!0:(s.restoreFromSnapshot(t),!1)}function hu(t){for(;Hb(t)!==null;);}function Hb(t){if(!g(i.name))return null;const e=s.contextualKeyword;if(t.indexOf(e)!==-1&&Ub()){switch(e){case w._readonly:s.tokens[s.tokens.length-1].type=i._readonly;break;case w._abstract:s.tokens[s.tokens.length-1].type=i._abstract;break;case w._static:s.tokens[s.tokens.length-1].type=i._static;break;case w._public:s.tokens[s.tokens.length-1].type=i._public;break;case w._private:s.tokens[s.tokens.length-1].type=i._private;break;case w._protected:s.tokens[s.tokens.length-1].type=i._protected;break;case w._override:s.tokens[s.tokens.length-1].type=i._override;break;case w._declare:s.tokens[s.tokens.length-1].type=i._declare;break}return e}return null}function Nl(){for(ce();L(i.dot);)ce()}function bP(){Nl(),!yt()&&g(i.lessThan)&&bo()}function mP(){M(),Cl()}function gP(){M()}function jP(){F(i._typeof),g(i._import)?qb():Nl(),!yt()&&g(i.lessThan)&&bo()}function qb(){F(i._import),F(i.parenL),F(i.string),F(i.parenR),L(i.dot)&&Nl(),g(i.lessThan)&&bo()}function xP(){L(i._const);const t=L(i._in),e=Xe(w._out);L(i._const),(t||e)&&!g(i.name)?s.tokens[s.tokens.length-1].type=i.name:ce(),L(i._extends)&&Fe(),L(i.eq)&&Fe()}function Pr(){g(i.lessThan)&&Ra()}function Ra(){const t=ye(0);for(g(i.lessThan)||g(i.typeParameterStart)?M():ue();!L(i.greaterThan)&&!s.error;)xP(),L(i.comma);de(t)}function bu(t){const e=t===i.arrow;Pr(),F(i.parenL),s.scopeDepth++,vP(!1),s.scopeDepth--,(e||g(t))&&ml(t)}function vP(t){Ou(i.parenR,t)}function na(){L(i.comma)||Ce()}function kd(){bu(i.colon),na()}function wP(){const t=s.snapshot();M();const e=L(i.name)&&g(i.colon);return s.restoreFromSnapshot(t),e}function Wb(){if(!(g(i.bracketL)&&wP()))return!1;const t=ye(0);return F(i.bracketL),ce(),Cl(),F(i.bracketR),ho(),na(),de(t),!0}function Nd(t){L(i.question),!t&&(g(i.parenL)||g(i.lessThan))?(bu(i.colon),na()):(ho(),na())}function PP(){if(g(i.parenL)||g(i.lessThan)){kd();return}if(g(i._new)){M(),g(i.parenL)||g(i.lessThan)?kd():Nd(!1);return}const t=!!Hb([w._readonly]);Wb()||((ne(w._get)||ne(w._set))&&Ub(),gl(-1),Nd(t))}function SP(){Vb()}function Vb(){for(F(i.braceL);!L(i.braceR)&&!s.error;)PP()}function _P(){const t=s.snapshot(),e=EP();return s.restoreFromSnapshot(t),e}function EP(){return M(),L(i.plus)||L(i.minus)?ne(w._readonly):(ne(w._readonly)&&M(),!g(i.bracketL)||(M(),!os())?!1:(M(),g(i._in)))}function IP(){ce(),F(i._in),Fe()}function kP(){F(i.braceL),g(i.plus)||g(i.minus)?(M(),qe(w._readonly)):Xe(w._readonly),F(i.bracketL),IP(),Xe(w._as)&&Fe(),F(i.bracketR),g(i.plus)||g(i.minus)?(M(),F(i.question)):L(i.question),HP(),Ce(),F(i.braceR)}function NP(){for(F(i.bracketL);!L(i.bracketR)&&!s.error;)CP(),L(i.comma)}function CP(){L(i.ellipsis)?Fe():(Fe(),L(i.question)),L(i.colon)&&Fe()}function TP(){F(i.parenL),Fe(),F(i.parenR)}function AP(){for(Rn(),Rn();!g(i.backQuote)&&!s.error;)F(i.dollarBraceL),Fe(),Rn(),Rn();M()}var qn;(function(t){t[t.TSFunctionType=0]="TSFunctionType";const r=1;t[t.TSConstructorType=r]="TSConstructorType";const o=r+1;t[t.TSAbstractConstructorType=o]="TSAbstractConstructorType"})(qn||(qn={}));function Yc(t){t===qn.TSAbstractConstructorType&&qe(w._abstract),(t===qn.TSConstructorType||t===qn.TSAbstractConstructorType)&&F(i._new);const e=s.inDisallowConditionalTypesContext;s.inDisallowConditionalTypesContext=!1,bu(i.arrow),s.inDisallowConditionalTypesContext=e}function RP(){switch(s.type){case i.name:bP();return;case i._void:case i._null:M();return;case i.string:case i.num:case i.bigint:case i.decimal:case i._true:case i._false:fo();return;case i.minus:M(),fo();return;case i._this:{gP(),ne(w._is)&&!yt()&&mP();return}case i._typeof:jP();return;case i._import:qb();return;case i.braceL:_P()?kP():SP();return;case i.bracketL:NP();return;case i.parenL:TP();return;case i.backQuote:AP();return;default:if(s.type&i.IS_KEYWORD){M(),s.tokens[s.tokens.length-1].type=i.name;return}break}ue()}function LP(){for(RP();!yt()&&L(i.bracketL);)L(i.bracketR)||(Fe(),F(i.bracketR))}function DP(){if(qe(w._infer),ce(),g(i._extends)){const t=s.snapshot();F(i._extends);const e=s.inDisallowConditionalTypesContext;s.inDisallowConditionalTypesContext=!0,Fe(),s.inDisallowConditionalTypesContext=e,(s.error||!s.inDisallowConditionalTypesContext&&g(i.question))&&s.restoreFromSnapshot(t)}}function ls(){if(ne(w._keyof)||ne(w._unique)||ne(w._readonly))M(),ls();else if(ne(w._infer))DP();else{const t=s.inDisallowConditionalTypesContext;s.inDisallowConditionalTypesContext=!1,LP(),s.inDisallowConditionalTypesContext=t}}function Cd(){if(L(i.bitwiseAND),ls(),g(i.bitwiseAND))for(;L(i.bitwiseAND);)ls()}function FP(){if(L(i.bitwiseOR),Cd(),g(i.bitwiseOR))for(;L(i.bitwiseOR);)Cd()}function MP(){return g(i.lessThan)?!0:g(i.parenL)&&BP()}function $P(){if(g(i.name)||g(i._this))return M(),!0;if(g(i.braceL)||g(i.bracketL)){let t=1;for(M();t>0&&!s.error;)g(i.braceL)||g(i.bracketL)?t++:(g(i.braceR)||g(i.bracketR))&&t--,M();return!0}return!1}function BP(){const t=s.snapshot(),e=zP();return s.restoreFromSnapshot(t),e}function zP(){return M(),!!(g(i.parenR)||g(i.ellipsis)||$P()&&(g(i.colon)||g(i.comma)||g(i.question)||g(i.eq)||g(i.parenR)&&(M(),g(i.arrow))))}function ml(t){const e=ye(0);F(t),qP()||Fe(),de(e)}function UP(){g(i.colon)&&ml(i.colon)}function ho(){g(i.colon)&&Cl()}function HP(){L(i.colon)&&Fe()}function qP(){const t=s.snapshot();return ne(w._asserts)?(M(),Xe(w._is)?(Fe(),!0):os()||g(i._this)?(M(),Xe(w._is)&&Fe(),!0):(s.restoreFromSnapshot(t),!1)):os()||g(i._this)?(M(),ne(w._is)&&!yt()?(M(),Fe(),!0):(s.restoreFromSnapshot(t),!1)):!1}function Cl(){const t=ye(0);F(i.colon),Fe(),de(t)}function Fe(){if(Td(),s.inDisallowConditionalTypesContext||yt()||!L(i._extends))return;const t=s.inDisallowConditionalTypesContext;s.inDisallowConditionalTypesContext=!0,Td(),s.inDisallowConditionalTypesContext=t,F(i.question),Fe(),F(i.colon),Fe()}function WP(){return ne(w._abstract)&&De()===i._new}function Td(){if(MP()){Yc(qn.TSFunctionType);return}if(g(i._new)){Yc(qn.TSConstructorType);return}else if(WP()){Yc(qn.TSAbstractConstructorType);return}FP()}function VP(){const t=ye(1);Fe(),F(i.greaterThan),de(t),Tl()}function GP(){if(L(i.jsxTagStart)){s.tokens[s.tokens.length-1].type=i.typeParameterStart;const t=ye(1);for(;!g(i.greaterThan)&&!s.error;)Fe(),L(i.comma);Ft(),de(t)}}function Gb(){for(;!g(i.braceL)&&!s.error;)XP(),L(i.comma)}function XP(){Nl(),g(i.lessThan)&&bo()}function JP(){er(!1),Pr(),L(i._extends)&&Gb(),Vb()}function KP(){er(!1),Pr(),F(i.eq),Fe(),Ce()}function QP(){if(g(i.string)?fo():ce(),L(i.eq)){const t=s.tokens.length-1;tt(),s.tokens[t].rhsEndIndex=s.tokens.length}}function mu(){for(er(!1),F(i.braceL);!L(i.braceR)&&!s.error;)QP(),L(i.comma)}function gu(){F(i.braceL),Ma(i.braceR)}function is(){er(!1),L(i.dot)?is():gu()}function Xb(){ne(w._global)?ce():g(i.string)?wn():ue(),g(i.braceL)?gu():Ce()}function as(){ea(),F(i.eq),ZP(),Ce()}function YP(){return ne(w._require)&&De()===i.parenL}function ZP(){YP()?eS():Nl()}function eS(){qe(w._require),F(i.parenL),g(i.string)||ue(),fo(),F(i.parenR)}function tS(){if(rn())return!1;switch(s.type){case i._function:{const t=ye(1);M();const e=s.start;return gr(e,!0),de(t),!0}case i._class:{const t=ye(1);return jr(!0,!1),de(t),!0}case i._const:if(g(i._const)&&uu(w._enum)){const t=ye(1);return F(i._const),qe(w._enum),s.tokens[s.tokens.length-1].type=i._enum,mu(),de(t),!0}case i._var:case i._let:{const t=ye(1);return gi(s.type!==i._var),de(t),!0}case i.name:{const t=ye(1),e=s.contextualKeyword;let r=!1;return e===w._global?(Xb(),r=!0):r=La(e,!0),de(t),r}default:return!1}}function Ad(){return La(s.contextualKeyword,!0)}function nS(t){switch(t){case w._declare:{const e=s.tokens.length-1;if(tS())return s.tokens[e].type=i._declare,!0;break}case w._global:if(g(i.braceL))return gu(),!0;break;default:return La(t,!1)}return!1}function La(t,e){switch(t){case w._abstract:if(Lr(e)&&g(i._class))return s.tokens[s.tokens.length-1].type=i._abstract,jr(!0,!1),!0;break;case w._enum:if(Lr(e)&&g(i.name))return s.tokens[s.tokens.length-1].type=i._enum,mu(),!0;break;case w._interface:if(Lr(e)&&g(i.name)){const r=ye(e?2:1);return JP(),de(r),!0}break;case w._module:if(Lr(e)){if(g(i.string)){const r=ye(e?2:1);return Xb(),de(r),!0}else if(g(i.name)){const r=ye(e?2:1);return is(),de(r),!0}}break;case w._namespace:if(Lr(e)&&g(i.name)){const r=ye(e?2:1);return is(),de(r),!0}break;case w._type:if(Lr(e)&&g(i.name)){const r=ye(e?2:1);return KP(),de(r),!0}break}return!1}function Lr(t){return t?(M(),!0):!rn()}function rS(){const t=s.snapshot();return Ra(),mo(),UP(),F(i.arrow),s.error?(s.restoreFromSnapshot(t),!1):(Al(!0),!0)}function ju(){s.type===i.bitShiftL&&(s.pos-=1,se(i.lessThan)),bo()}function bo(){const t=ye(0);for(F(i.lessThan);!g(i.greaterThan)&&!s.error;)Fe(),L(i.comma);t?(F(i.greaterThan),de(t)):(de(t),kb(),F(i.greaterThan),s.tokens[s.tokens.length-1].isType=!0)}function Jb(){if(g(i.name))switch(s.contextualKeyword){case w._abstract:case w._declare:case w._enum:case w._interface:case w._module:case w._namespace:case w._type:return!0}return!1}function oS(t,e){if(g(i.colon)&&ml(i.colon),!g(i.braceL)&&rn()){let r=s.tokens.length-1;for(;r>=0&&(s.tokens[r].start>=t||s.tokens[r].type===i._default||s.tokens[r].type===i._export);)s.tokens[r].isType=!0,r--;return}Al(!1,e)}function lS(t,e,r){if(!yt()&&L(i.bang)){s.tokens[s.tokens.length-1].type=i.nonNullAssertion;return}if(g(i.lessThan)||g(i.bitShiftL)){const o=s.snapshot();if(!e&&rm()&&rS())return;if(ju(),!e&&L(i.parenL)?(s.tokens[s.tokens.length-1].subscriptStartIndex=t,Wn()):g(i.backQuote)?Su():(s.type===i.greaterThan||s.type!==i.parenL&&s.type&i.IS_EXPRESSION_START&&!yt())&&ue(),s.error)s.restoreFromSnapshot(o);else return}else!e&&g(i.questionDot)&&De()===i.lessThan&&(M(),s.tokens[t].isOptionalChainStart=!0,s.tokens[s.tokens.length-1].subscriptStartIndex=t,bo(),F(i.parenL),Wn());vu(t,e,r)}function iS(){if(L(i._import))return ne(w._type)&&De()!==i.eq&&qe(w._type),as(),!0;if(L(i.eq))return et(),Ce(),!0;if(Xe(w._as))return qe(w._namespace),ce(),Ce(),!0;if(ne(w._type)){const t=De();(t===i.braceL||t===i.star)&&M()}return!1}function aS(){if(ce(),g(i.comma)||g(i.braceR)){s.tokens[s.tokens.length-1].identifierRole=re.ImportDeclaration;return}if(ce(),g(i.comma)||g(i.braceR)){s.tokens[s.tokens.length-1].identifierRole=re.ImportDeclaration,s.tokens[s.tokens.length-2].isType=!0,s.tokens[s.tokens.length-1].isType=!0;return}if(ce(),g(i.comma)||g(i.braceR)){s.tokens[s.tokens.length-3].identifierRole=re.ImportAccess,s.tokens[s.tokens.length-1].identifierRole=re.ImportDeclaration;return}ce(),s.tokens[s.tokens.length-3].identifierRole=re.ImportAccess,s.tokens[s.tokens.length-1].identifierRole=re.ImportDeclaration,s.tokens[s.tokens.length-4].isType=!0,s.tokens[s.tokens.length-3].isType=!0,s.tokens[s.tokens.length-2].isType=!0,s.tokens[s.tokens.length-1].isType=!0}function cS(){if(ce(),g(i.comma)||g(i.braceR)){s.tokens[s.tokens.length-1].identifierRole=re.ExportAccess;return}if(ce(),g(i.comma)||g(i.braceR)){s.tokens[s.tokens.length-1].identifierRole=re.ExportAccess,s.tokens[s.tokens.length-2].isType=!0,s.tokens[s.tokens.length-1].isType=!0;return}if(ce(),g(i.comma)||g(i.braceR)){s.tokens[s.tokens.length-3].identifierRole=re.ExportAccess;return}ce(),s.tokens[s.tokens.length-3].identifierRole=re.ExportAccess,s.tokens[s.tokens.length-4].isType=!0,s.tokens[s.tokens.length-3].isType=!0,s.tokens[s.tokens.length-2].isType=!0,s.tokens[s.tokens.length-1].isType=!0}function fS(){if(ne(w._abstract)&&De()===i._class)return s.type=i._abstract,M(),jr(!0,!0),!0;if(ne(w._interface)){const t=ye(2);return La(w._interface,!0),de(t),!0}return!1}function sS(){if(s.type===i._const){const t=kl();if(t.type===i.name&&t.contextualKeyword===w._enum)return F(i._const),qe(w._enum),s.tokens[s.tokens.length-1].type=i._enum,mu(),!0}return!1}function uS(t){const e=s.tokens.length;hu([w._abstract,w._readonly,w._declare,w._static,w._override]);const r=s.tokens.length;if(Wb()){const l=t?e-1:e;for(let a=l;a<r;a++)s.tokens[a].isType=!0;return!0}return!1}function pS(t){nS(t)||Ce()}function dS(){const t=Xe(w._declare);t&&(s.tokens[s.tokens.length-1].type=i._declare);let e=!1;if(g(i.name))if(t){const r=ye(2);e=Ad(),de(r)}else e=Ad();if(!e)if(t){const r=ye(2);Nt(!0),de(r)}else Nt(!0)}function yS(t){if(t&&(g(i.lessThan)||g(i.bitShiftL))&&ju(),Xe(w._implements)){s.tokens[s.tokens.length-1].type=i._implements;const e=ye(1);Gb(),de(e)}}function OS(){Pr()}function hS(){Pr()}function bS(){const t=ye(0);yt()||L(i.bang),ho(),de(t)}function mS(){g(i.colon)&&Cl()}function gS(t,e){return Ca?jS(t,e):xS(t,e)}function jS(t,e){if(!g(i.lessThan))return sn(t,e);const r=s.snapshot();let o=sn(t,e);if(s.error)s.restoreFromSnapshot(r);else return o;return s.type=i.typeParameterStart,Ra(),o=sn(t,e),o||ue(),o}function xS(t,e){if(!g(i.lessThan))return sn(t,e);const r=s.snapshot();Ra();const o=sn(t,e);if(o||ue(),s.error)s.restoreFromSnapshot(r);else return o;return sn(t,e)}function vS(){if(g(i.colon)){const t=s.snapshot();ml(i.colon),Et()&&ue(),g(i.arrow)||ue(),s.error&&s.restoreFromSnapshot(t)}return L(i.arrow)}function wS(){const t=ye(0);L(i.question),ho(),de(t)}function PS(){(g(i.lessThan)||g(i.bitShiftL))&&ju(),Om()}function SS(){let t=!1,e=!1;for(;;){if(s.pos>=K.length){ue("Unterminated JSX contents");return}const r=K.charCodeAt(s.pos);if(r===k.lessThan||r===k.leftCurlyBrace){if(s.pos===s.start){if(r===k.lessThan){s.pos++,se(i.jsxTagStart);return}Nb(r);return}se(t&&!e?i.jsxEmptyText:i.jsxText);return}r===k.lineFeed?t=!0:r!==k.space&&r!==k.carriageReturn&&r!==k.tab&&(e=!0),s.pos++}}function _S(t){for(s.pos++;;){if(s.pos>=K.length){ue("Unterminated string constant");return}if(K.charCodeAt(s.pos)===t){s.pos++;break}s.pos++}se(i.string)}function ES(){let t;do{if(s.pos>K.length){ue("Unexpectedly reached the end of input.");return}t=K.charCodeAt(++s.pos)}while(Kt[t]||t===k.dash);se(i.jsxName)}function cs(){Ft()}function Kb(t){if(cs(),!L(i.colon)){s.tokens[s.tokens.length-1].identifierRole=t;return}cs()}function Qb(){const t=s.tokens.length;Kb(re.Access);let e=!1;for(;g(i.dot);)e=!0,Ft(),cs();if(!e){const r=s.tokens[t],o=K.charCodeAt(r.start);o>=k.lowercaseA&&o<=k.lowercaseZ&&(r.identifierRole=null)}}function IS(){switch(s.type){case i.braceL:M(),et(),Ft();return;case i.jsxTagStart:Zb(),Ft();return;case i.string:Ft();return;default:ue("JSX value should be either an expression or a quoted JSX text")}}function kS(){F(i.ellipsis),et()}function NS(t){if(g(i.jsxTagEnd))return!1;Qb(),me&&GP();let e=!1;for(;!g(i.slash)&&!g(i.jsxTagEnd)&&!s.error;){if(L(i.braceL)){e=!0,F(i.ellipsis),tt(),Ft();continue}e&&s.end-s.start===3&&K.charCodeAt(s.start)===k.lowercaseK&&K.charCodeAt(s.start+1)===k.lowercaseE&&K.charCodeAt(s.start+2)===k.lowercaseY&&(s.tokens[t].jsxRole=Wt.KeyAfterPropSpread),Kb(re.ObjectKey),g(i.eq)&&(Ft(),IS())}const r=g(i.slash);return r&&Ft(),r}function CS(){g(i.jsxTagEnd)||Qb()}function Yb(){const t=s.tokens.length-1;s.tokens[t].jsxRole=Wt.NoChildren;let e=0;if(!NS(t))for(Dr();;)switch(s.type){case i.jsxTagStart:if(Ft(),g(i.slash)){Ft(),CS(),s.tokens[t].jsxRole!==Wt.KeyAfterPropSpread&&(e===1?s.tokens[t].jsxRole=Wt.OneChild:e>1&&(s.tokens[t].jsxRole=Wt.StaticChildren));return}e++,Yb(),Dr();break;case i.jsxText:e++,Dr();break;case i.jsxEmptyText:Dr();break;case i.braceL:M(),g(i.ellipsis)?(kS(),Dr(),e+=2):(g(i.braceR)||(e++,et()),Dr());break;default:ue();return}}function Zb(){Ft(),Yb()}function Ft(){s.tokens.push(new Ta),Eb(),s.start=s.pos;const t=K.charCodeAt(s.pos);if(Il[t])ES();else if(t===k.quotationMark||t===k.apostrophe)_S(t);else switch(++s.pos,t){case k.greaterThan:se(i.jsxTagEnd);break;case k.lessThan:se(i.jsxTagStart);break;case k.slash:se(i.slash);break;case k.equalsTo:se(i.eq);break;case k.leftCurlyBrace:se(i.braceL);break;case k.dot:se(i.dot);break;case k.colon:se(i.colon);break;default:ue()}}function Dr(){s.tokens.push(new Ta),s.start=s.pos,SS()}function TS(t){if(g(i.question)){const e=De();if(e===i.colon||e===i.comma||e===i.parenR)return}em(t)}function AS(){vb(i.question),g(i.colon)&&(me?Cl():we&&Sr())}class RS{constructor(e){this.stop=e}}function et(t=!1){if(tt(t),g(i.comma))for(;L(i.comma);)tt(t)}function tt(t=!1,e=!1){return me?gS(t,e):we?$_(t,e):sn(t,e)}function sn(t,e){if(g(i._yield))return KS(),!1;(g(i.parenL)||g(i.name)||g(i._yield))&&(s.potentialArrowAt=s.start);const r=LS(t);return e&&Pu(),s.type&i.IS_ASSIGN?(M(),tt(t),!1):r}function LS(t){return FS(t)?!0:(DS(t),!1)}function DS(t){me||we?TS(t):em(t)}function em(t){L(i.question)&&(tt(),F(i.colon),tt(t))}function FS(t){const e=s.tokens.length;return Tl()?!0:(bi(e,-1,t),!1)}function bi(t,e,r){if(me&&(i._in&i.PRECEDENCE_MASK)>e&&!yt()&&(Xe(w._as)||Xe(w._satisfies))){const l=ye(1);Fe(),de(l),kb(),bi(t,e,r);return}const o=s.type&i.PRECEDENCE_MASK;if(o>0&&(!r||!g(i._in))&&o>e){const l=s.type;M(),l===i.nullishCoalescing&&(s.tokens[s.tokens.length-1].nullishStartIndex=t);const a=s.tokens.length;Tl(),bi(a,l&i.IS_RIGHT_ASSOCIATIVE?o-1:o,r),l===i.nullishCoalescing&&(s.tokens[t].numNullishCoalesceStarts++,s.tokens[s.tokens.length-1].numNullishCoalesceEnds++),bi(t,e,r)}}function Tl(){if(me&&!Ca&&L(i.lessThan))return VP(),!1;if(ne(w._module)&&Pb()===k.leftCurlyBrace&&!bb())return QS(),!1;if(s.type&i.IS_PREFIX)return M(),Tl(),!1;if(tm())return!0;for(;s.type&i.IS_POSTFIX&&!Et();)s.type===i.preIncDec&&(s.type=i.postIncDec),M();return!1}function tm(){const t=s.tokens.length;return wn()?!0:(xu(t),s.tokens.length>t&&s.tokens[t].isOptionalChainStart&&(s.tokens[s.tokens.length-1].isOptionalChainEnd=!0),!1)}function xu(t,e=!1){we?z_(t,e):nm(t,e)}function nm(t,e=!1){const r=new RS(!1);do MS(t,e,r);while(!r.stop&&!s.error)}function MS(t,e,r){me?lS(t,e,r):we?x_(t,e,r):vu(t,e,r)}function vu(t,e,r){if(!e&&L(i.doubleColon))wu(),r.stop=!0,xu(t,e);else if(g(i.questionDot)){if(s.tokens[t].isOptionalChainStart=!0,e&&De()===i.parenL){r.stop=!0;return}M(),s.tokens[s.tokens.length-1].subscriptStartIndex=t,L(i.bracketL)?(et(),F(i.bracketR)):L(i.parenL)?Wn():ra()}else if(L(i.dot))s.tokens[s.tokens.length-1].subscriptStartIndex=t,ra();else if(L(i.bracketL))s.tokens[s.tokens.length-1].subscriptStartIndex=t,et(),F(i.bracketR);else if(!e&&g(i.parenL))if(rm()){const o=s.snapshot(),l=s.tokens.length;M(),s.tokens[s.tokens.length-1].subscriptStartIndex=t;const a=hl();s.tokens[s.tokens.length-1].contextId=a,Wn(),s.tokens[s.tokens.length-1].contextId=a,$S()&&(s.restoreFromSnapshot(o),r.stop=!0,s.scopeDepth++,mo(),BS(l))}else{M(),s.tokens[s.tokens.length-1].subscriptStartIndex=t;const o=hl();s.tokens[s.tokens.length-1].contextId=o,Wn(),s.tokens[s.tokens.length-1].contextId=o}else g(i.backQuote)?Su():r.stop=!0}function rm(){return s.tokens[s.tokens.length-1].contextualKeyword===w._async&&!Et()}function Wn(){let t=!0;for(;!L(i.parenR)&&!s.error;){if(t)t=!1;else if(F(i.comma),L(i.parenR))break;am(!1)}}function $S(){return g(i.colon)||g(i.arrow)}function BS(t){me?mS():we&&M_(),F(i.arrow),jl(t)}function wu(){const t=s.tokens.length;wn(),xu(t,!0)}function wn(){if(L(i.modulo))return ce(),!1;if(g(i.jsxText)||g(i.jsxEmptyText))return fo(),!1;if(g(i.lessThan)&&Ca)return s.type=i.jsxTagStart,Zb(),M(),!1;const t=s.potentialArrowAt===s.start;switch(s.type){case i.slash:case i.assign:Iw();case i._super:case i._this:case i.regexp:case i.num:case i.bigint:case i.decimal:case i.string:case i._null:case i._true:case i._false:return M(),!1;case i._import:return M(),g(i.dot)&&(s.tokens[s.tokens.length-1].type=i.name,M(),ce()),!1;case i.name:{const e=s.tokens.length,r=s.start,o=s.contextualKeyword;return ce(),o===w._await?(JS(),!1):o===w._async&&g(i._function)&&!Et()?(M(),gr(r,!1),!1):t&&o===w._async&&!Et()&&g(i.name)?(s.scopeDepth++,er(!1),F(i.arrow),jl(e),!0):g(i._do)&&!Et()?(M(),Vn(),!1):t&&!Et()&&g(i.arrow)?(s.scopeDepth++,yu(!1),F(i.arrow),jl(e),!0):(s.tokens[s.tokens.length-1].identifierRole=re.Access,!1)}case i._do:return M(),Vn(),!1;case i.parenL:return om(t);case i.bracketL:return M(),im(i.bracketR,!0),!1;case i.braceL:return _u(!1,!1),!1;case i._function:return zS(),!1;case i.at:Lu();case i._class:return jr(!1),!1;case i._new:return HS(),!1;case i.backQuote:return Su(),!1;case i.doubleColon:return M(),wu(),!1;case i.hash:{const e=Pb();return Il[e]||e===k.backslash?ra():M(),!1}default:return ue(),!1}}function ra(){L(i.hash),ce()}function zS(){const t=s.start;ce(),L(i.dot)&&ce(),gr(t,!1)}function fo(){M()}function Da(){F(i.parenL),et(),F(i.parenR)}function om(t){const e=s.snapshot(),r=s.tokens.length;F(i.parenL);let o=!0;for(;!g(i.parenR)&&!s.error;){if(o)o=!1;else if(F(i.comma),g(i.parenR))break;if(g(i.ellipsis)){Bb(!1),Pu();break}else tt(!1,!0)}return F(i.parenR),t&&US()&&fs()?(s.restoreFromSnapshot(e),s.scopeDepth++,mo(),fs(),jl(r),s.error?(s.restoreFromSnapshot(e),om(!1),!1):!0):!1}function US(){return g(i.colon)||!Et()}function fs(){return me?vS():we?B_():L(i.arrow)}function Pu(){(me||we)&&AS()}function HS(){if(F(i._new),L(i.dot)){ce();return}qS(),we&&v_(),L(i.parenL)&&im(i.parenR)}function qS(){wu(),L(i.questionDot)}function Su(){for(Rn(),Rn();!g(i.backQuote)&&!s.error;)F(i.dollarBraceL),et(),Rn(),Rn();M()}function _u(t,e){const r=hl();let o=!0;for(M(),s.tokens[s.tokens.length-1].contextId=r;!L(i.braceR)&&!s.error;){if(o)o=!1;else if(F(i.comma),L(i.braceR))break;let l=!1;if(g(i.ellipsis)){const a=s.tokens.length;if($b(),t&&(s.tokens.length===a+2&&yu(e),L(i.braceR)))break;continue}t||(l=L(i.star)),!t&&ne(w._async)?(l&&ue(),ce(),g(i.colon)||g(i.parenL)||g(i.braceR)||g(i.eq)||g(i.comma)||(g(i.star)&&(M(),l=!0),gl(r))):gl(r),XS(t,e,r)}s.tokens[s.tokens.length-1].contextId=r}function WS(t){return!t&&(g(i.string)||g(i.num)||g(i.bracketL)||g(i.name)||!!(s.type&i.IS_KEYWORD))}function VS(t,e){const r=s.start;return g(i.parenL)?(t&&ue(),ss(r,!1),!0):WS(t)?(gl(e),ss(r,!1),!0):!1}function GS(t,e){if(L(i.colon)){t?ta(e):tt(!1);return}let r;t?s.scopeDepth===0?r=re.ObjectShorthandTopLevelDeclaration:e?r=re.ObjectShorthandBlockScopedDeclaration:r=re.ObjectShorthandFunctionScopedDeclaration:r=re.ObjectShorthand,s.tokens[s.tokens.length-1].identifierRole=r,ta(e,!0)}function XS(t,e,r){me?OS():we&&T_(),VS(t,r)||GS(t,e)}function gl(t){we&&Ru(),L(i.bracketL)?(s.tokens[s.tokens.length-1].contextId=t,tt(),F(i.bracketR),s.tokens[s.tokens.length-1].contextId=t):(g(i.num)||g(i.string)||g(i.bigint)||g(i.decimal)?wn():ra(),s.tokens[s.tokens.length-1].identifierRole=re.ObjectKey,s.tokens[s.tokens.length-1].contextId=t)}function ss(t,e){const r=hl();s.scopeDepth++;const o=s.tokens.length;mo(e,r),lm(t,r);const a=s.tokens.length;s.scopes.push(new un(o,a,!0)),s.scopeDepth--}function jl(t){Al(!0);const e=s.tokens.length;s.scopes.push(new un(t,e,!0)),s.scopeDepth--}function lm(t,e=0){me?oS(t,e):we?j_(e):Al(!1,e)}function Al(t,e=0){t&&!g(i.braceL)?tt():Vn(!0,e)}function im(t,e=!1){let r=!0;for(;!L(t)&&!s.error;){if(r)r=!1;else if(F(i.comma),L(t))break;am(e)}}function am(t){t&&g(i.comma)||(g(i.ellipsis)?($b(),Pu()):g(i.question)?M():tt(!1,!0))}function ce(){M(),s.tokens[s.tokens.length-1].type=i.name}function JS(){Tl()}function KS(){M(),!g(i.semi)&&!Et()&&(L(i.star),tt())}function QS(){qe(w._module),F(i.braceL),Ma(i.braceR)}function YS(t){return(t.type===i.name||!!(t.type&i.IS_KEYWORD))&&t.contextualKeyword!==w._from}function pn(t){const e=ye(0);F(t||i.colon),wt(),de(e)}function Rd(){F(i.modulo),qe(w._checks),L(i.parenL)&&(et(),F(i.parenR))}function Eu(){const t=ye(0);F(i.colon),g(i.modulo)?Rd():(wt(),g(i.modulo)&&Rd()),de(t)}function ZS(){M(),Iu(!0)}function e_(){M(),ce(),g(i.lessThan)&&Yt(),F(i.parenL),ps(),F(i.parenR),Eu(),Ce()}function us(){g(i._class)?ZS():g(i._function)?e_():g(i._var)?t_():Xe(w._module)?L(i.dot)?o_():n_():ne(w._type)?l_():ne(w._opaque)?i_():ne(w._interface)?a_():g(i._export)?r_():ue()}function t_(){M(),um(),Ce()}function n_(){for(g(i.string)?wn():ce(),F(i.braceL);!g(i.braceR)&&!s.error;)g(i._import)?(M(),xm()):ue();F(i.braceR)}function r_(){F(i._export),L(i._default)?g(i._function)||g(i._class)?us():(wt(),Ce()):g(i._var)||g(i._function)||g(i._class)||ne(w._opaque)?us():g(i.star)||g(i.braceL)||ne(w._interface)||ne(w._type)||ne(w._opaque)?gm():ue()}function o_(){qe(w._exports),Sr(),Ce()}function l_(){M(),Nu()}function i_(){M(),Cu(!0)}function a_(){M(),Iu()}function Iu(t=!1){if(Fa(),g(i.lessThan)&&Yt(),L(i._extends))do mi();while(!t&&L(i.comma));if(ne(w._mixins)){M();do mi();while(L(i.comma))}if(ne(w._implements)){M();do mi();while(L(i.comma))}oa(t,!1,t)}function mi(){cm(!1),g(i.lessThan)&&mr()}function ku(){Iu()}function Fa(){ce()}function Nu(){Fa(),g(i.lessThan)&&Yt(),pn(i.eq),Ce()}function Cu(t){qe(w._type),Fa(),g(i.lessThan)&&Yt(),g(i.colon)&&pn(i.colon),t||pn(i.eq),Ce()}function c_(){Ru(),um(),L(i.eq)&&wt()}function Yt(){const t=ye(0);g(i.lessThan)||g(i.typeParameterStart)?M():ue();do c_(),g(i.greaterThan)||F(i.comma);while(!g(i.greaterThan)&&!s.error);F(i.greaterThan),de(t)}function mr(){const t=ye(0);for(F(i.lessThan);!g(i.greaterThan)&&!s.error;)wt(),g(i.greaterThan)||F(i.comma);F(i.greaterThan),de(t)}function f_(){if(qe(w._interface),L(i._extends))do mi();while(L(i.comma));oa(!1,!1,!1)}function Tu(){g(i.num)||g(i.string)?wn():ce()}function s_(){De()===i.colon?(Tu(),pn()):wt(),F(i.bracketR),pn()}function u_(){Tu(),F(i.bracketR),F(i.bracketR),g(i.lessThan)||g(i.parenL)?Au():(L(i.question),pn())}function Au(){for(g(i.lessThan)&&Yt(),F(i.parenL);!g(i.parenR)&&!g(i.ellipsis)&&!s.error;)la(),g(i.parenR)||F(i.comma);L(i.ellipsis)&&la(),F(i.parenR),pn()}function p_(){Au()}function oa(t,e,r){let o;for(e&&g(i.braceBarL)?(F(i.braceBarL),o=i.braceBarR):(F(i.braceL),o=i.braceR);!g(o)&&!s.error;){if(r&&ne(w._proto)){const l=De();l!==i.colon&&l!==i.question&&(M(),t=!1)}if(t&&ne(w._static)){const l=De();l!==i.colon&&l!==i.question&&M()}if(Ru(),L(i.bracketL))L(i.bracketL)?u_():s_();else if(g(i.parenL)||g(i.lessThan))p_();else{if(ne(w._get)||ne(w._set)){const l=De();(l===i.name||l===i.string||l===i.num)&&M()}d_()}y_()}F(o)}function d_(){if(g(i.ellipsis)){if(F(i.ellipsis),L(i.comma)||L(i.semi),g(i.braceR))return;wt()}else Tu(),g(i.lessThan)||g(i.parenL)?Au():(L(i.question),pn())}function y_(){!L(i.semi)&&!L(i.comma)&&!g(i.braceR)&&!g(i.braceBarR)&&ue()}function cm(t){for(t||ce();L(i.dot);)ce()}function O_(){cm(!0),g(i.lessThan)&&mr()}function h_(){F(i._typeof),fm()}function b_(){for(F(i.bracketL);s.pos<K.length&&!g(i.bracketR)&&(wt(),!g(i.bracketR));)F(i.comma);F(i.bracketR)}function la(){const t=De();t===i.colon||t===i.question?(ce(),L(i.question),pn()):wt()}function ps(){for(;!g(i.parenR)&&!g(i.ellipsis)&&!s.error;)la(),g(i.parenR)||F(i.comma);L(i.ellipsis)&&la()}function fm(){let t=!1;const e=s.noAnonFunctionType;switch(s.type){case i.name:{if(ne(w._interface)){f_();return}ce(),O_();return}case i.braceL:oa(!1,!1,!1);return;case i.braceBarL:oa(!1,!0,!1);return;case i.bracketL:b_();return;case i.lessThan:Yt(),F(i.parenL),ps(),F(i.parenR),F(i.arrow),wt();return;case i.parenL:if(M(),!g(i.parenR)&&!g(i.ellipsis))if(g(i.name)){const r=De();t=r!==i.question&&r!==i.colon}else t=!0;if(t)if(s.noAnonFunctionType=!1,wt(),s.noAnonFunctionType=e,s.noAnonFunctionType||!(g(i.comma)||g(i.parenR)&&De()===i.arrow)){F(i.parenR);return}else L(i.comma);ps(),F(i.parenR),F(i.arrow),wt();return;case i.minus:M(),fo();return;case i.string:case i.num:case i._true:case i._false:case i._null:case i._this:case i._void:case i.star:M();return;default:if(s.type===i._typeof){h_();return}else if(s.type&i.IS_KEYWORD){M(),s.tokens[s.tokens.length-1].type=i.name;return}}ue()}function m_(){for(fm();!Et()&&(g(i.bracketL)||g(i.questionDot));)L(i.questionDot),F(i.bracketL),L(i.bracketR)||(wt(),F(i.bracketR))}function sm(){L(i.question)?sm():m_()}function Ld(){sm(),!s.noAnonFunctionType&&L(i.arrow)&&wt()}function Dd(){for(L(i.bitwiseAND),Ld();L(i.bitwiseAND);)Ld()}function g_(){for(L(i.bitwiseOR),Dd();L(i.bitwiseOR);)Dd()}function wt(){g_()}function Sr(){pn()}function um(){ce(),g(i.colon)&&Sr()}function Ru(){(g(i.plus)||g(i.minus))&&(M(),s.tokens[s.tokens.length-1].isType=!0)}function j_(t){g(i.colon)&&Eu(),Al(!1,t)}function x_(t,e,r){if(g(i.questionDot)&&De()===i.lessThan){if(e){r.stop=!0;return}M(),mr(),F(i.parenL),Wn();return}else if(!e&&g(i.lessThan)){const o=s.snapshot();if(mr(),F(i.parenL),Wn(),s.error)s.restoreFromSnapshot(o);else return}vu(t,e,r)}function v_(){if(g(i.lessThan)){const t=s.snapshot();mr(),s.error&&s.restoreFromSnapshot(t)}}function w_(){if(g(i.name)&&s.contextualKeyword===w._interface){const t=ye(0);return M(),ku(),de(t),!0}else if(ne(w._enum))return pm(),!0;return!1}function P_(){return ne(w._enum)?(pm(),!0):!1}function S_(t){if(t===w._declare){if(g(i._class)||g(i.name)||g(i._function)||g(i._var)||g(i._export)){const e=ye(1);us(),de(e)}}else if(g(i.name)){if(t===w._interface){const e=ye(1);ku(),de(e)}else if(t===w._type){const e=ye(1);Nu(),de(e)}else if(t===w._opaque){const e=ye(1);Cu(!1),de(e)}}Ce()}function __(){return ne(w._type)||ne(w._interface)||ne(w._opaque)||ne(w._enum)}function E_(){return g(i.name)&&(s.contextualKeyword===w._type||s.contextualKeyword===w._interface||s.contextualKeyword===w._opaque||s.contextualKeyword===w._enum)}function I_(){if(ne(w._type)){const t=ye(1);M(),g(i.braceL)?(Du(),xl()):Nu(),de(t)}else if(ne(w._opaque)){const t=ye(1);M(),Cu(!1),de(t)}else if(ne(w._interface)){const t=ye(1);M(),ku(),de(t)}else Nt(!0)}function k_(){return g(i.star)||ne(w._type)&&De()===i.star}function N_(){if(Xe(w._type)){const t=ye(2);ds(),de(t)}else ds()}function C_(t){if(t&&g(i.lessThan)&&mr(),ne(w._implements)){const e=ye(0);M(),s.tokens[s.tokens.length-1].type=i._implements;do Fa(),g(i.lessThan)&&mr();while(L(i.comma));de(e)}}function T_(){g(i.lessThan)&&(Yt(),g(i.parenL)||ue())}function A_(){const t=ye(0);L(i.question),g(i.colon)&&Sr(),de(t)}function R_(){if(g(i._typeof)||ne(w._type)){const t=kl();(YS(t)||t.type===i.braceL||t.type===i.star)&&M()}}function L_(){const t=s.contextualKeyword===w._type||s.type===i._typeof;t?M():ce(),ne(w._as)&&!uu(w._as)?(ce(),t&&!g(i.name)&&!(s.type&i.IS_KEYWORD)||ce()):(t&&(g(i.name)||s.type&i.IS_KEYWORD)&&ce(),Xe(w._as)&&ce())}function D_(){if(g(i.lessThan)){const t=ye(0);Yt(),de(t)}}function F_(){g(i.colon)&&Sr()}function M_(){if(g(i.colon)){const t=s.noAnonFunctionType;s.noAnonFunctionType=!0,Sr(),s.noAnonFunctionType=t}}function $_(t,e){if(g(i.lessThan)){const r=s.snapshot();let o=sn(t,e);if(s.error)s.restoreFromSnapshot(r),s.type=i.typeParameterStart;else return o;const l=ye(0);if(Yt(),de(l),o=sn(t,e),o)return!0;ue()}return sn(t,e)}function B_(){if(g(i.colon)){const t=ye(0),e=s.snapshot(),r=s.noAnonFunctionType;s.noAnonFunctionType=!0,Eu(),s.noAnonFunctionType=r,Et()&&ue(),g(i.arrow)||ue(),s.error&&s.restoreFromSnapshot(e),de(t)}return L(i.arrow)}function z_(t,e=!1){if(s.tokens[s.tokens.length-1].contextualKeyword===w._async&&g(i.lessThan)){const r=s.snapshot();if(U_()&&!s.error)return;s.restoreFromSnapshot(r)}nm(t,e)}function U_(){s.scopeDepth++;const t=s.tokens.length;return mo(),fs()?(jl(t),!0):!1}function pm(){qe(w._enum),s.tokens[s.tokens.length-1].type=i._enum,ce(),H_()}function H_(){Xe(w._of)&&M(),F(i.braceL),q_(),F(i.braceR)}function q_(){for(;!g(i.braceR)&&!s.error&&!L(i.ellipsis);)W_(),g(i.braceR)||F(i.comma)}function W_(){ce(),L(i.eq)&&M()}function V_(){if(Ma(i.eof),s.scopes.push(new un(0,s.tokens.length,!0)),s.scopeDepth!==0)throw new Error(`Invalid scope depth at end of file: ${s.scopeDepth}`);return new TE(s.tokens,s.scopes)}function Nt(t){we&&w_()||(g(i.at)&&Lu(),G_(t))}function G_(t){if(me&&sS())return;const e=s.type;switch(e){case i._break:case i._continue:J_();return;case i._debugger:K_();return;case i._do:Q_();return;case i._for:Y_();return;case i._function:if(De()===i.dot)break;t||ue(),tE();return;case i._class:t||ue(),jr(!0);return;case i._if:nE();return;case i._return:rE();return;case i._switch:oE();return;case i._throw:lE();return;case i._try:aE();return;case i._let:case i._const:t||ue();case i._var:gi(e!==i._var);return;case i._while:cE();return;case i.braceL:Vn();return;case i.semi:fE();return;case i._export:case i._import:{const l=De();if(l===i.parenL||l===i.dot)break;M(),e===i._import?xm():gm();return}case i.name:if(s.contextualKeyword===w._async){const l=s.start,a=s.snapshot();if(M(),g(i._function)&&!Et()){F(i._function),gr(l,!0);return}else s.restoreFromSnapshot(a)}else if(s.contextualKeyword===w._using&&!bb()&&De()===i.name){gi(!0);return}else if(dm()){qe(w._await),gi(!0);return}}const r=s.tokens.length;et();let o=null;if(s.tokens.length===r+1){const l=s.tokens[s.tokens.length-1];l.type===i.name&&(o=l.contextualKeyword)}if(o==null){Ce();return}L(i.colon)?sE():uE(o)}function dm(){if(!ne(w._await))return!1;const t=s.snapshot();return M(),!ne(w._using)||yt()||(M(),!g(i.name)||yt())?(s.restoreFromSnapshot(t),!1):(s.restoreFromSnapshot(t),!0)}function Lu(){for(;g(i.at);)ym()}function ym(){if(M(),L(i.parenL))et(),F(i.parenR);else{for(ce();L(i.dot);)ce();X_()}}function X_(){me?PS():Om()}function Om(){L(i.parenL)&&Wn()}function J_(){M(),rn()||(ce(),Ce())}function K_(){M(),Ce()}function Q_(){M(),Nt(!1),F(i._while),Da(),L(i.semi)}function Y_(){s.scopeDepth++;const t=s.tokens.length;eE();const e=s.tokens.length;s.scopes.push(new un(t,e,!1)),s.scopeDepth--}function Z_(){return!(!ne(w._using)||uu(w._of))}function eE(){M();let t=!1;if(ne(w._await)&&(t=!0,M()),F(i.parenL),g(i.semi)){t&&ue(),Zc();return}const e=dm();if(e||g(i._var)||g(i._let)||g(i._const)||Z_()){if(e&&qe(w._await),M(),hm(!0,s.type!==i._var),g(i._in)||ne(w._of)){Fd(t);return}Zc();return}if(et(!0),g(i._in)||ne(w._of)){Fd(t);return}t&&ue(),Zc()}function tE(){const t=s.start;M(),gr(t,!0)}function nE(){M(),Da(),Nt(!1),L(i._else)&&Nt(!1)}function rE(){M(),rn()||(et(),Ce())}function oE(){M(),Da(),s.scopeDepth++;const t=s.tokens.length;for(F(i.braceL);!g(i.braceR)&&!s.error;)if(g(i._case)||g(i._default)){const r=g(i._case);M(),r&&et(),F(i.colon)}else Nt(!0);M();const e=s.tokens.length;s.scopes.push(new un(t,e,!1)),s.scopeDepth--}function lE(){M(),et(),Ce()}function iE(){Aa(!0),me&&ho()}function aE(){if(M(),Vn(),g(i._catch)){M();let t=null;if(g(i.parenL)&&(s.scopeDepth++,t=s.tokens.length,F(i.parenL),iE(),F(i.parenR)),Vn(),t!=null){const e=s.tokens.length;s.scopes.push(new un(t,e,!1)),s.scopeDepth--}}L(i._finally)&&Vn()}function gi(t){M(),hm(!1,t),Ce()}function cE(){M(),Da(),Nt(!1)}function fE(){M()}function sE(){Nt(!0)}function uE(t){me?pS(t):we?S_(t):Ce()}function Vn(t=!1,e=0){const r=s.tokens.length;s.scopeDepth++,F(i.braceL),e&&(s.tokens[s.tokens.length-1].contextId=e),Ma(i.braceR),e&&(s.tokens[s.tokens.length-1].contextId=e);const o=s.tokens.length;s.scopes.push(new un(r,o,t)),s.scopeDepth--}function Ma(t){for(;!L(t)&&!s.error;)Nt(!0)}function Zc(){F(i.semi),g(i.semi)||et(),F(i.semi),g(i.parenR)||et(),F(i.parenR),Nt(!1)}function Fd(t){t?Xe(w._of):M(),et(),F(i.parenR),Nt(!1)}function hm(t,e){for(;;){if(pE(e),L(i.eq)){const r=s.tokens.length-1;tt(t),s.tokens[r].rhsEndIndex=s.tokens.length}if(!L(i.comma))break}}function pE(t){Aa(t),me?bS():we&&F_()}function gr(t,e,r=!1){g(i.star)&&M(),e&&!r&&!g(i.name)&&!g(i._yield)&&ue();let o=null;g(i.name)&&(e||(o=s.tokens.length,s.scopeDepth++),er(!1));const l=s.tokens.length;s.scopeDepth++,mo(),lm(t);const a=s.tokens.length;s.scopes.push(new un(l,a,!0)),s.scopeDepth--,o!==null&&(s.scopes.push(new un(o,a,!0)),s.scopeDepth--)}function mo(t=!1,e=0){me?hS():we&&D_(),F(i.parenL),e&&(s.tokens[s.tokens.length-1].contextId=e),Ou(i.parenR,!1,!1,t,e),e&&(s.tokens[s.tokens.length-1].contextId=e)}function jr(t,e=!1){const r=hl();M(),s.tokens[s.tokens.length-1].contextId=r,s.tokens[s.tokens.length-1].isExpression=!t;let o=null;t||(o=s.tokens.length,s.scopeDepth++),hE(t,e),bE();const l=s.tokens.length;if(dE(r),!s.error&&(s.tokens[l].contextId=r,s.tokens[s.tokens.length-1].contextId=r,o!==null)){const a=s.tokens.length;s.scopes.push(new un(o,a,!1)),s.scopeDepth--}}function bm(){return g(i.eq)||g(i.semi)||g(i.braceR)||g(i.bang)||g(i.colon)}function mm(){return g(i.parenL)||g(i.lessThan)}function dE(t){for(F(i.braceL);!L(i.braceR)&&!s.error;){if(L(i.semi))continue;if(g(i.at)){ym();continue}const e=s.start;yE(e,t)}}function yE(t,e){me&&hu([w._declare,w._public,w._protected,w._private,w._override]);let r=!1;if(g(i.name)&&s.contextualKeyword===w._static){if(ce(),mm()){Do(t,!1);return}else if(bm()){ji();return}if(s.tokens[s.tokens.length-1].type=i._static,r=!0,g(i.braceL)){s.tokens[s.tokens.length-1].contextId=e,Vn();return}}OE(t,r,e)}function OE(t,e,r){if(me&&uS(e))return;if(L(i.star)){Co(r),Do(t,!1);return}Co(r);let o=!1;const l=s.tokens[s.tokens.length-1];l.contextualKeyword===w._constructor&&(o=!0),Md(),mm()?Do(t,o):bm()?ji():l.contextualKeyword===w._async&&!rn()?(s.tokens[s.tokens.length-1].type=i._async,g(i.star)&&M(),Co(r),Md(),Do(t,!1)):(l.contextualKeyword===w._get||l.contextualKeyword===w._set)&&!(rn()&&g(i.star))?(l.contextualKeyword===w._get?s.tokens[s.tokens.length-1].type=i._get:s.tokens[s.tokens.length-1].type=i._set,Co(r),Do(t,!1)):l.contextualKeyword===w._accessor&&!rn()?(Co(r),ji()):rn()?ji():ue()}function Do(t,e){me?Pr():we&&g(i.lessThan)&&Yt(),ss(t,e)}function Co(t){gl(t)}function Md(){if(me){const t=ye(0);L(i.question),de(t)}}function ji(){if(me?(vb(i.bang),ho()):we&&g(i.colon)&&Sr(),g(i.eq)){const t=s.tokens.length;M(),tt(),s.tokens[t].rhsEndIndex=s.tokens.length}Ce()}function hE(t,e=!1){me&&(!t||e)&&ne(w._implements)||(g(i.name)&&er(!0),me?Pr():we&&g(i.lessThan)&&Yt())}function bE(){let t=!1;L(i._extends)?(tm(),t=!0):t=!1,me?yS(t):we&&C_(t)}function gm(){const t=s.tokens.length-1;me&&iS()||(xE()?vE():jE()?(ce(),g(i.comma)&&De()===i.star?(F(i.comma),F(i.star),qe(w._as),ce()):jm(),xl()):L(i._default)?mE():PE()?gE():(Du(),xl()),s.tokens[t].rhsEndIndex=s.tokens.length)}function mE(){if(me&&fS()||we&&P_())return;const t=s.start;L(i._function)?gr(t,!0,!0):ne(w._async)&&De()===i._function?(Xe(w._async),L(i._function),gr(t,!0,!0)):g(i._class)?jr(!0,!0):g(i.at)?(Lu(),jr(!0,!0)):(tt(),Ce())}function gE(){me?dS():we?I_():Nt(!0)}function jE(){if(me&&Jb())return!1;if(we&&E_())return!1;if(g(i.name))return s.contextualKeyword!==w._async;if(!g(i._default))return!1;const t=pu(),e=kl(),r=e.type===i.name&&e.contextualKeyword===w._from;if(e.type===i.comma)return!0;if(r){const o=K.charCodeAt(wb(t+4));return o===k.quotationMark||o===k.apostrophe}return!1}function jm(){L(i.comma)&&Du()}function xl(){Xe(w._from)&&(wn(),vm()),Ce()}function xE(){return we?k_():g(i.star)}function vE(){we?N_():ds()}function ds(){F(i.star),ne(w._as)?wE():xl()}function wE(){M(),s.tokens[s.tokens.length-1].type=i._as,ce(),jm(),xl()}function PE(){return me&&Jb()||we&&__()||s.type===i._var||s.type===i._const||s.type===i._let||s.type===i._function||s.type===i._class||ne(w._async)||g(i.at)}function Du(){let t=!0;for(F(i.braceL);!L(i.braceR)&&!s.error;){if(t)t=!1;else if(F(i.comma),L(i.braceR))break;SE()}}function SE(){if(me){cS();return}ce(),s.tokens[s.tokens.length-1].identifierRole=re.ExportAccess,Xe(w._as)&&ce()}function _E(){const t=s.snapshot();return qe(w._module),Xe(w._from)?ne(w._from)?(s.restoreFromSnapshot(t),!0):(s.restoreFromSnapshot(t),!1):g(i.comma)?(s.restoreFromSnapshot(t),!1):(s.restoreFromSnapshot(t),!0)}function EE(){ne(w._module)&&_E()&&M()}function xm(){if(me&&g(i.name)&&De()===i.eq){as();return}if(me&&ne(w._type)){const t=kl();if(t.type===i.name&&t.contextualKeyword!==w._from){if(qe(w._type),De()===i.eq){as();return}}else(t.type===i.star||t.type===i.braceL)&&qe(w._type)}g(i.string)||(EE(),kE(),qe(w._from)),wn(),vm(),Ce()}function IE(){return g(i.name)}function $d(){ea()}function kE(){we&&R_();let t=!0;if(!(IE()&&($d(),!L(i.comma)))){if(g(i.star)){M(),qe(w._as),$d();return}for(F(i.braceL);!L(i.braceR)&&!s.error;){if(t)t=!1;else if(L(i.colon)&&ue("ES2015 named imports do not destructure. Use another statement for destructuring after the import."),F(i.comma),L(i.braceR))break;NE()}}}function NE(){if(me){aS();return}if(we){L_();return}ea(),ne(w._as)&&(s.tokens[s.tokens.length-1].identifierRole=re.ImportAccess,M(),ea())}function vm(){(g(i._with)||ne(w._assert)&&!yt())&&(M(),_u(!1,!1))}function CE(){return s.pos===0&&K.charCodeAt(0)===k.numberSign&&K.charCodeAt(1)===k.exclamationMark&&_b(2),Sb(),V_()}class TE{constructor(e,r){this.tokens=e,this.scopes=r}}function AE(t,e,r,o){if(o&&r)throw new Error("Cannot combine flow and typescript plugins.");xw(t,e,r,o);const l=CE();if(s.error)throw mw(s.error);return l}function RE(t){let e=t.currentIndex(),r=0;const o=t.currentToken();do{const l=t.tokens[e];if(l.isOptionalChainStart&&r++,l.isOptionalChainEnd&&r--,r+=l.numNullishCoalesceStarts,r-=l.numNullishCoalesceEnds,l.contextualKeyword===w._await&&l.identifierRole==null&&l.scopeDepth===o.scopeDepth)return!0;e+=1}while(r>0&&e<t.tokens.length);return!1}class Go{__init(){this.resultCode=""}__init2(){this.resultMappings=new Array(this.tokens.length)}__init3(){this.tokenIndex=0}constructor(e,r,o,l,a){this.code=e,this.tokens=r,this.isFlowEnabled=o,this.disableESTransforms=l,this.helperManager=a,Go.prototype.__init.call(this),Go.prototype.__init2.call(this),Go.prototype.__init3.call(this)}snapshot(){return{resultCode:this.resultCode,tokenIndex:this.tokenIndex}}restoreToSnapshot(e){this.resultCode=e.resultCode,this.tokenIndex=e.tokenIndex}dangerouslyGetAndRemoveCodeSinceSnapshot(e){const r=this.resultCode.slice(e.resultCode.length);return this.resultCode=e.resultCode,r}reset(){this.resultCode="",this.resultMappings=new Array(this.tokens.length),this.tokenIndex=0}matchesContextualAtIndex(e,r){return this.matches1AtIndex(e,i.name)&&this.tokens[e].contextualKeyword===r}identifierNameAtIndex(e){return this.identifierNameForToken(this.tokens[e])}identifierNameAtRelativeIndex(e){return this.identifierNameForToken(this.tokenAtRelativeIndex(e))}identifierName(){return this.identifierNameForToken(this.currentToken())}identifierNameForToken(e){return this.code.slice(e.start,e.end)}rawCodeForToken(e){return this.code.slice(e.start,e.end)}stringValueAtIndex(e){return this.stringValueForToken(this.tokens[e])}stringValue(){return this.stringValueForToken(this.currentToken())}stringValueForToken(e){return this.code.slice(e.start+1,e.end-1)}matches1AtIndex(e,r){return this.tokens[e].type===r}matches2AtIndex(e,r,o){return this.tokens[e].type===r&&this.tokens[e+1].type===o}matches3AtIndex(e,r,o,l){return this.tokens[e].type===r&&this.tokens[e+1].type===o&&this.tokens[e+2].type===l}matches1(e){return this.tokens[this.tokenIndex].type===e}matches2(e,r){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===r}matches3(e,r,o){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===r&&this.tokens[this.tokenIndex+2].type===o}matches4(e,r,o,l){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===r&&this.tokens[this.tokenIndex+2].type===o&&this.tokens[this.tokenIndex+3].type===l}matches5(e,r,o,l,a){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===r&&this.tokens[this.tokenIndex+2].type===o&&this.tokens[this.tokenIndex+3].type===l&&this.tokens[this.tokenIndex+4].type===a}matchesContextual(e){return this.matchesContextualAtIndex(this.tokenIndex,e)}matchesContextIdAndLabel(e,r){return this.matches1(e)&&this.currentToken().contextId===r}previousWhitespaceAndComments(){let e=this.code.slice(this.tokenIndex>0?this.tokens[this.tokenIndex-1].end:0,this.tokenIndex<this.tokens.length?this.tokens[this.tokenIndex].start:this.code.length);return this.isFlowEnabled&&(e=e.replace(/@flow/g,"")),e}replaceToken(e){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=e,this.appendTokenSuffix(),this.tokenIndex++}replaceTokenTrimmingLeftWhitespace(e){this.resultCode+=this.previousWhitespaceAndComments().replace(/[^\r\n]/g,""),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=e,this.appendTokenSuffix(),this.tokenIndex++}removeInitialToken(){this.replaceToken("")}removeToken(){this.replaceTokenTrimmingLeftWhitespace("")}removeBalancedCode(){let e=0;for(;!this.isAtEnd();){if(this.matches1(i.braceL))e++;else if(this.matches1(i.braceR)){if(e===0)return;e--}this.removeToken()}}copyExpectedToken(e){if(this.tokens[this.tokenIndex].type!==e)throw new Error(`Expected token ${e}`);this.copyToken()}copyToken(){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}copyTokenWithPrefix(e){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultCode+=e,this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}appendTokenPrefix(){const e=this.currentToken();if((e.numNullishCoalesceStarts||e.isOptionalChainStart)&&(e.isAsyncOperation=RE(this)),!this.disableESTransforms){if(e.numNullishCoalesceStarts)for(let r=0;r<e.numNullishCoalesceStarts;r++)e.isAsyncOperation?(this.resultCode+="await ",this.resultCode+=this.helperManager.getHelperName("asyncNullishCoalesce")):this.resultCode+=this.helperManager.getHelperName("nullishCoalesce"),this.resultCode+="(";e.isOptionalChainStart&&(e.isAsyncOperation&&(this.resultCode+="await "),this.tokenIndex>0&&this.tokenAtRelativeIndex(-1).type===i._delete?e.isAsyncOperation?this.resultCode+=this.helperManager.getHelperName("asyncOptionalChainDelete"):this.resultCode+=this.helperManager.getHelperName("optionalChainDelete"):e.isAsyncOperation?this.resultCode+=this.helperManager.getHelperName("asyncOptionalChain"):this.resultCode+=this.helperManager.getHelperName("optionalChain"),this.resultCode+="([")}}appendTokenSuffix(){const e=this.currentToken();if(e.isOptionalChainEnd&&!this.disableESTransforms&&(this.resultCode+="])"),e.numNullishCoalesceEnds&&!this.disableESTransforms)for(let r=0;r<e.numNullishCoalesceEnds;r++)this.resultCode+="))"}appendCode(e){this.resultCode+=e}currentToken(){return this.tokens[this.tokenIndex]}currentTokenCode(){const e=this.currentToken();return this.code.slice(e.start,e.end)}tokenAtRelativeIndex(e){return this.tokens[this.tokenIndex+e]}currentIndex(){return this.tokenIndex}nextToken(){if(this.tokenIndex===this.tokens.length)throw new Error("Unexpectedly reached end of input.");this.tokenIndex++}previousToken(){this.tokenIndex--}finish(){if(this.tokenIndex!==this.tokens.length)throw new Error("Tried to finish processing tokens before reaching the end.");return this.resultCode+=this.previousWhitespaceAndComments(),{code:this.resultCode,mappings:this.resultMappings}}isAtEnd(){return this.tokenIndex===this.tokens.length}}function LE(t,e,r,o){const l=e.snapshot(),a=DE(e);let c=[];const f=[],u=[];let p=null;const y=[],d=[],O=e.currentToken().contextId;if(O==null)throw new Error("Expected non-null class context ID on class open-brace.");for(e.nextToken();!e.matchesContextIdAndLabel(i.braceR,O);)if(e.matchesContextual(w._constructor)&&!e.currentToken().isType)({constructorInitializerStatements:c,constructorInsertPos:p}=Bd(e));else if(e.matches1(i.semi))o||d.push({start:e.currentIndex(),end:e.currentIndex()+1}),e.nextToken();else if(e.currentToken().isType)e.nextToken();else{const S=e.currentIndex();let j=!1,x=!1,P=!1;for(;ia(e.currentToken());)e.matches1(i._static)&&(j=!0),e.matches1(i.hash)&&(x=!0),(e.matches1(i._declare)||e.matches1(i._abstract))&&(P=!0),e.nextToken();if(j&&e.matches1(i.braceL)){ef(e,O);continue}if(x){ef(e,O);continue}if(e.matchesContextual(w._constructor)&&!e.currentToken().isType){({constructorInitializerStatements:c,constructorInsertPos:p}=Bd(e));continue}const m=e.currentIndex();if(FE(e),e.matches1(i.lessThan)||e.matches1(i.parenL)){ef(e,O);continue}for(;e.currentToken().isType;)e.nextToken();if(e.matches1(i.eq)){const h=e.currentIndex(),b=e.currentToken().rhsEndIndex;if(b==null)throw new Error("Expected rhsEndIndex on class field assignment.");for(e.nextToken();e.currentIndex()<b;)t.processToken();let v;j?(v=r.claimFreeName("__initStatic"),u.push(v)):(v=r.claimFreeName("__init"),f.push(v)),y.push({initializerName:v,equalsIndex:h,start:m,end:e.currentIndex()})}else(!o||P)&&d.push({start:S,end:e.currentIndex()})}return e.restoreToSnapshot(l),o?{headerInfo:a,constructorInitializerStatements:c,instanceInitializerNames:[],staticInitializerNames:[],constructorInsertPos:p,fields:[],rangesToRemove:d}:{headerInfo:a,constructorInitializerStatements:c,instanceInitializerNames:f,staticInitializerNames:u,constructorInsertPos:p,fields:y,rangesToRemove:d}}function ef(t,e){for(t.nextToken();t.currentToken().contextId!==e;)t.nextToken();for(;ia(t.tokenAtRelativeIndex(-1));)t.previousToken()}function DE(t){const e=t.currentToken(),r=e.contextId;if(r==null)throw new Error("Expected context ID on class token.");const o=e.isExpression;if(o==null)throw new Error("Expected isExpression on class token.");let l=null,a=!1;for(t.nextToken(),t.matches1(i.name)&&(l=t.identifierName());!t.matchesContextIdAndLabel(i.braceL,r);)t.matches1(i._extends)&&!t.currentToken().isType&&(a=!0),t.nextToken();return{isExpression:o,className:l,hasSuperclass:a}}function Bd(t){const e=[];t.nextToken();const r=t.currentToken().contextId;if(r==null)throw new Error("Expected context ID on open-paren starting constructor params.");for(;!t.matchesContextIdAndLabel(i.parenR,r);)if(t.currentToken().contextId===r){if(t.nextToken(),ia(t.currentToken())){for(t.nextToken();ia(t.currentToken());)t.nextToken();const a=t.currentToken();if(a.type!==i.name)throw new Error("Expected identifier after access modifiers in constructor arg.");const c=t.identifierNameForToken(a);e.push(`this.${c} = ${c}`)}}else t.nextToken();for(t.nextToken();t.currentToken().isType;)t.nextToken();let o=t.currentIndex(),l=!1;for(;!t.matchesContextIdAndLabel(i.braceR,r);){if(!l&&t.matches2(i._super,i.parenL)){t.nextToken();const a=t.currentToken().contextId;if(a==null)throw new Error("Expected a context ID on the super call");for(;!t.matchesContextIdAndLabel(i.parenR,a);)t.nextToken();o=t.currentIndex(),l=!0}t.nextToken()}return t.nextToken(),{constructorInitializerStatements:e,constructorInsertPos:o}}function ia(t){return[i._async,i._get,i._set,i.plus,i.minus,i._readonly,i._static,i._public,i._private,i._protected,i._override,i._abstract,i.star,i._declare,i.hash].includes(t.type)}function FE(t){if(t.matches1(i.bracketL)){const r=t.currentToken().contextId;if(r==null)throw new Error("Expected class context ID on computed name open bracket.");for(;!t.matchesContextIdAndLabel(i.bracketR,r);)t.nextToken();t.nextToken()}else t.nextToken()}function wm(t){if(t.removeInitialToken(),t.removeToken(),t.removeToken(),t.removeToken(),t.matches1(i.parenL))t.removeToken(),t.removeToken(),t.removeToken();else for(;t.matches1(i.dot);)t.removeToken(),t.removeToken()}const Pm={typeDeclarations:new Set,valueDeclarations:new Set};function Sm(t){const e=new Set,r=new Set;for(let o=0;o<t.tokens.length;o++){const l=t.tokens[o];l.type===i.name&&xb(l)&&(l.isType?e.add(t.identifierNameForToken(l)):r.add(t.identifierNameForToken(l)))}return{typeDeclarations:e,valueDeclarations:r}}function _m(t){let e=t.currentIndex();for(;!t.matches1AtIndex(e,i.braceR);)e++;return t.matchesContextualAtIndex(e+1,w._from)&&t.matches1AtIndex(e+2,i.string)}function sr(t){(t.matches2(i._with,i.braceL)||t.matches2(i.name,i.braceL)&&t.matchesContextual(w._assert))&&(t.removeToken(),t.removeToken(),t.removeBalancedCode(),t.removeToken())}function Em(t,e,r,o){if(!t||e)return!1;const l=r.currentToken();if(l.rhsEndIndex==null)throw new Error("Expected non-null rhsEndIndex on export token.");const a=l.rhsEndIndex-r.currentIndex();if(a!==3&&!(a===4&&r.matches1AtIndex(l.rhsEndIndex-1,i.semi)))return!1;const c=r.tokenAtRelativeIndex(2);if(c.type!==i.name)return!1;const f=r.identifierNameForToken(c);return o.typeDeclarations.has(f)&&!o.valueDeclarations.has(f)}class Xo extends Qt{__init(){this.hadExport=!1}__init2(){this.hadNamedExport=!1}__init3(){this.hadDefaultExport=!1}constructor(e,r,o,l,a,c,f,u,p,y,d,O){super(),this.rootTransformer=e,this.tokens=r,this.importProcessor=o,this.nameManager=l,this.helperManager=a,this.reactHotLoaderTransformer=c,this.enableLegacyBabel5ModuleInterop=f,this.enableLegacyTypeScriptModuleInterop=u,this.isTypeScriptTransformEnabled=p,this.isFlowTransformEnabled=y,this.preserveDynamicImport=d,this.keepUnusedImports=O,Xo.prototype.__init.call(this),Xo.prototype.__init2.call(this),Xo.prototype.__init3.call(this),this.declarationInfo=p?Sm(r):Pm}getPrefixCode(){let e="";return this.hadExport&&(e+='Object.defineProperty(exports, "__esModule", {value: true});'),e}getSuffixCode(){return this.enableLegacyBabel5ModuleInterop&&this.hadDefaultExport&&!this.hadNamedExport?`
module.exports = exports.default;
`:""}process(){return this.tokens.matches3(i._import,i.name,i.eq)?this.processImportEquals():this.tokens.matches1(i._import)?(this.processImport(),!0):this.tokens.matches2(i._export,i.eq)?(this.tokens.replaceToken("module.exports"),!0):this.tokens.matches1(i._export)&&!this.tokens.currentToken().isType?(this.hadExport=!0,this.processExport()):this.tokens.matches2(i.name,i.postIncDec)&&this.processPostIncDec()?!0:this.tokens.matches1(i.name)||this.tokens.matches1(i.jsxName)?this.processIdentifier():this.tokens.matches1(i.eq)?this.processAssignment():this.tokens.matches1(i.assign)?this.processComplexAssignment():this.tokens.matches1(i.preIncDec)?this.processPreIncDec():!1}processImportEquals(){const e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.importProcessor.shouldAutomaticallyElideImportedName(e)?wm(this.tokens):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(i._import,i.parenL)){if(this.preserveDynamicImport){this.tokens.copyToken();return}const r=this.enableLegacyTypeScriptModuleInterop?"":`${this.helperManager.getHelperName("interopRequireWildcard")}(`;this.tokens.replaceToken(`Promise.resolve().then(() => ${r}require`);const o=this.tokens.currentToken().contextId;if(o==null)throw new Error("Expected context ID on dynamic import invocation.");for(this.tokens.copyToken();!this.tokens.matchesContextIdAndLabel(i.parenR,o);)this.rootTransformer.processToken();this.tokens.replaceToken(r?")))":"))");return}if(this.removeImportAndDetectIfShouldElide())this.tokens.removeToken();else{const r=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(r)),this.tokens.appendCode(this.importProcessor.claimImportCode(r))}sr(this.tokens),this.tokens.matches1(i.semi)&&this.tokens.removeToken()}removeImportAndDetectIfShouldElide(){if(this.tokens.removeInitialToken(),this.tokens.matchesContextual(w._type)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,i.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._from))return this.removeRemainingImport(),!0;if(this.tokens.matches1(i.name)||this.tokens.matches1(i.star))return this.removeRemainingImport(),!1;if(this.tokens.matches1(i.string))return!1;let e=!1,r=!1;for(;!this.tokens.matches1(i.string);)(!e&&this.tokens.matches1(i.braceL)||this.tokens.matches1(i.comma))&&(this.tokens.removeToken(),this.tokens.matches1(i.braceR)||(r=!0),(this.tokens.matches2(i.name,i.comma)||this.tokens.matches2(i.name,i.braceR)||this.tokens.matches4(i.name,i.name,i.name,i.comma)||this.tokens.matches4(i.name,i.name,i.name,i.braceR))&&(e=!0)),this.tokens.removeToken();return this.keepUnusedImports?!1:this.isTypeScriptTransformEnabled?!e:this.isFlowTransformEnabled?r&&!e:!1}removeRemainingImport(){for(;!this.tokens.matches1(i.string);)this.tokens.removeToken()}processIdentifier(){const e=this.tokens.currentToken();if(e.shadowsGlobal)return!1;if(e.identifierRole===re.ObjectShorthand)return this.processObjectShorthand();if(e.identifierRole!==re.Access)return!1;const r=this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(e));if(!r)return!1;let o=this.tokens.currentIndex()+1;for(;o<this.tokens.tokens.length&&this.tokens.tokens[o].type===i.parenR;)o++;return this.tokens.tokens[o].type===i.parenL?this.tokens.tokenAtRelativeIndex(1).type===i.parenL&&this.tokens.tokenAtRelativeIndex(-1).type!==i._new?(this.tokens.replaceToken(`${r}.call(void 0, `),this.tokens.removeToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR)):this.tokens.replaceToken(`(0, ${r})`):this.tokens.replaceToken(r),!0}processObjectShorthand(){const e=this.tokens.identifierName(),r=this.importProcessor.getIdentifierReplacement(e);return r?(this.tokens.replaceToken(`${e}: ${r}`),!0):!1}processExport(){if(this.tokens.matches2(i._export,i._enum)||this.tokens.matches3(i._export,i._const,i._enum))return this.hadNamedExport=!0,!1;if(this.tokens.matches2(i._export,i._default))return this.tokens.matches3(i._export,i._default,i._enum)?(this.hadDefaultExport=!0,!1):(this.processExportDefault(),!0);if(this.tokens.matches2(i._export,i.braceL))return this.processExportBindings(),!0;if(this.tokens.matches2(i._export,i.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._type)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(i.braceL)){for(;!this.tokens.matches1(i.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(i._as)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(w._from)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,i.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),sr(this.tokens)),!0}if(this.hadNamedExport=!0,this.tokens.matches2(i._export,i._var)||this.tokens.matches2(i._export,i._let)||this.tokens.matches2(i._export,i._const))return this.processExportVar(),!0;if(this.tokens.matches2(i._export,i._function)||this.tokens.matches3(i._export,i.name,i._function))return this.processExportFunction(),!0;if(this.tokens.matches2(i._export,i._class)||this.tokens.matches3(i._export,i._abstract,i._class)||this.tokens.matches2(i._export,i.at))return this.processExportClass(),!0;if(this.tokens.matches2(i._export,i.star))return this.processExportStar(),!0;throw new Error("Unrecognized export syntax.")}processAssignment(){const e=this.tokens.currentIndex(),r=this.tokens.tokens[e-1];if(r.isType||r.type!==i.name||r.shadowsGlobal||e>=2&&this.tokens.matches1AtIndex(e-2,i.dot)||e>=2&&[i._var,i._let,i._const].includes(this.tokens.tokens[e-2].type))return!1;const o=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(r));return o?(this.tokens.copyToken(),this.tokens.appendCode(` ${o} =`),!0):!1}processComplexAssignment(){const e=this.tokens.currentIndex(),r=this.tokens.tokens[e-1];if(r.type!==i.name||r.shadowsGlobal||e>=2&&this.tokens.matches1AtIndex(e-2,i.dot))return!1;const o=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(r));return o?(this.tokens.appendCode(` = ${o}`),this.tokens.copyToken(),!0):!1}processPreIncDec(){const e=this.tokens.currentIndex(),r=this.tokens.tokens[e+1];if(r.type!==i.name||r.shadowsGlobal||e+2<this.tokens.tokens.length&&(this.tokens.matches1AtIndex(e+2,i.dot)||this.tokens.matches1AtIndex(e+2,i.bracketL)||this.tokens.matches1AtIndex(e+2,i.parenL)))return!1;const o=this.tokens.identifierNameForToken(r),l=this.importProcessor.resolveExportBinding(o);return l?(this.tokens.appendCode(`${l} = `),this.tokens.copyToken(),!0):!1}processPostIncDec(){const e=this.tokens.currentIndex(),r=this.tokens.tokens[e],o=this.tokens.tokens[e+1];if(r.type!==i.name||r.shadowsGlobal||e>=1&&this.tokens.matches1AtIndex(e-1,i.dot))return!1;const l=this.tokens.identifierNameForToken(r),a=this.importProcessor.resolveExportBinding(l);if(!a)return!1;const c=this.tokens.rawCodeForToken(o),f=this.importProcessor.getIdentifierReplacement(l)||l;if(c==="++")this.tokens.replaceToken(`(${f} = ${a} = ${f} + 1, ${f} - 1)`);else if(c==="--")this.tokens.replaceToken(`(${f} = ${a} = ${f} - 1, ${f} + 1)`);else throw new Error(`Unexpected operator: ${c}`);return this.tokens.removeToken(),!0}processExportDefault(){let e=!0;if(this.tokens.matches4(i._export,i._default,i._function,i.name)||this.tokens.matches5(i._export,i._default,i.name,i._function,i.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,w._async)){this.tokens.removeInitialToken(),this.tokens.removeToken();const r=this.processNamedFunction();this.tokens.appendCode(` exports.default = ${r};`)}else if(this.tokens.matches4(i._export,i._default,i._class,i.name)||this.tokens.matches5(i._export,i._default,i._abstract,i._class,i.name)||this.tokens.matches3(i._export,i._default,i.at)){this.tokens.removeInitialToken(),this.tokens.removeToken(),this.copyDecorators(),this.tokens.matches1(i._abstract)&&this.tokens.removeToken();const r=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.default = ${r};`)}else if(Em(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))e=!1,this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken();else if(this.reactHotLoaderTransformer){const r=this.nameManager.claimFreeName("_default");this.tokens.replaceToken(`let ${r}; exports.`),this.tokens.copyToken(),this.tokens.appendCode(` = ${r} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(r)}else this.tokens.replaceToken("exports."),this.tokens.copyToken(),this.tokens.appendCode(" =");e&&(this.hadDefaultExport=!0)}copyDecorators(){for(;this.tokens.matches1(i.at);)if(this.tokens.copyToken(),this.tokens.matches1(i.parenL))this.tokens.copyExpectedToken(i.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR);else{for(this.tokens.copyExpectedToken(i.name);this.tokens.matches1(i.dot);)this.tokens.copyExpectedToken(i.dot),this.tokens.copyExpectedToken(i.name);this.tokens.matches1(i.parenL)&&(this.tokens.copyExpectedToken(i.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR))}}processExportVar(){this.isSimpleExportVar()?this.processSimpleExportVar():this.processComplexExportVar()}isSimpleExportVar(){let e=this.tokens.currentIndex();if(e++,e++,!this.tokens.matches1AtIndex(e,i.name))return!1;for(e++;e<this.tokens.tokens.length&&this.tokens.tokens[e].isType;)e++;return!!this.tokens.matches1AtIndex(e,i.eq)}processSimpleExportVar(){this.tokens.removeInitialToken(),this.tokens.copyToken();const e=this.tokens.identifierName();for(;!this.tokens.matches1(i.eq);)this.rootTransformer.processToken();const r=this.tokens.currentToken().rhsEndIndex;if(r==null)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<r;)this.rootTransformer.processToken();this.tokens.appendCode(`; exports.${e} = ${e}`)}processComplexExportVar(){this.tokens.removeInitialToken(),this.tokens.removeToken();const e=this.tokens.matches1(i.braceL);e&&this.tokens.appendCode("(");let r=0;for(;;)if(this.tokens.matches1(i.braceL)||this.tokens.matches1(i.dollarBraceL)||this.tokens.matches1(i.bracketL))r++,this.tokens.copyToken();else if(this.tokens.matches1(i.braceR)||this.tokens.matches1(i.bracketR))r--,this.tokens.copyToken();else{if(r===0&&!this.tokens.matches1(i.name)&&!this.tokens.currentToken().isType)break;if(this.tokens.matches1(i.eq)){const o=this.tokens.currentToken().rhsEndIndex;if(o==null)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<o;)this.rootTransformer.processToken()}else{const o=this.tokens.currentToken();if(jb(o)){const l=this.tokens.identifierName();let a=this.importProcessor.getIdentifierReplacement(l);if(a===null)throw new Error(`Expected a replacement for ${l} in \`export var\` syntax.`);Ew(o)&&(a=`${l}: ${a}`),this.tokens.replaceToken(a)}else this.rootTransformer.processToken()}}if(e){const o=this.tokens.currentToken().rhsEndIndex;if(o==null)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<o;)this.rootTransformer.processToken();this.tokens.appendCode(")")}}processExportFunction(){this.tokens.replaceToken("");const e=this.processNamedFunction();this.tokens.appendCode(` exports.${e} = ${e};`)}processNamedFunction(){if(this.tokens.matches1(i._function))this.tokens.copyToken();else if(this.tokens.matches2(i.name,i._function)){if(!this.tokens.matchesContextual(w._async))throw new Error("Expected async keyword in function export.");this.tokens.copyToken(),this.tokens.copyToken()}if(this.tokens.matches1(i.star)&&this.tokens.copyToken(),!this.tokens.matches1(i.name))throw new Error("Expected identifier for exported function name.");const e=this.tokens.identifierName();if(this.tokens.copyToken(),this.tokens.currentToken().isType)for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return this.tokens.copyExpectedToken(i.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR),this.rootTransformer.processPossibleTypeRange(),this.tokens.copyExpectedToken(i.braceL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.braceR),e}processExportClass(){this.tokens.removeInitialToken(),this.copyDecorators(),this.tokens.matches1(i._abstract)&&this.tokens.removeToken();const e=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.${e} = ${e};`)}processExportBindings(){this.tokens.removeInitialToken(),this.tokens.removeToken();const e=_m(this.tokens),r=[];for(;;){if(this.tokens.matches1(i.braceR)){this.tokens.removeToken();break}const o=bl(this.tokens);for(;this.tokens.currentIndex()<o.endIndex;)this.tokens.removeToken();if(!(o.isType||!e&&this.shouldElideExportedIdentifier(o.leftName))){const a=o.rightName;a==="default"?this.hadDefaultExport=!0:this.hadNamedExport=!0;const c=o.leftName,f=this.importProcessor.getIdentifierReplacement(c);r.push(`exports.${a} = ${f||c};`)}if(this.tokens.matches1(i.braceR)){this.tokens.removeToken();break}if(this.tokens.matches2(i.comma,i.braceR)){this.tokens.removeToken(),this.tokens.removeToken();break}else if(this.tokens.matches1(i.comma))this.tokens.removeToken();else throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`)}if(this.tokens.matchesContextual(w._from)){this.tokens.removeToken();const o=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(o)),sr(this.tokens)}else this.tokens.appendCode(r.join(" "));this.tokens.matches1(i.semi)&&this.tokens.removeToken()}processExportStar(){for(this.tokens.removeInitialToken();!this.tokens.matches1(i.string);)this.tokens.removeToken();const e=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)),sr(this.tokens),this.tokens.matches1(i.semi)&&this.tokens.removeToken()}shouldElideExportedIdentifier(e){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.declarationInfo.valueDeclarations.has(e)}}class ME extends Qt{constructor(e,r,o,l,a,c,f,u){super(),this.tokens=e,this.nameManager=r,this.helperManager=o,this.reactHotLoaderTransformer=l,this.isTypeScriptTransformEnabled=a,this.isFlowTransformEnabled=c,this.keepUnusedImports=f,this.nonTypeIdentifiers=a&&!f?Lb(e,u):new Set,this.declarationInfo=a&&!f?Sm(e):Pm,this.injectCreateRequireForImportRequire=!!u.injectCreateRequireForImportRequire}process(){if(this.tokens.matches3(i._import,i.name,i.eq))return this.processImportEquals();if(this.tokens.matches4(i._import,i.name,i.name,i.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._type)){this.tokens.removeInitialToken();for(let e=0;e<7;e++)this.tokens.removeToken();return!0}if(this.tokens.matches2(i._export,i.eq))return this.tokens.replaceToken("module.exports"),!0;if(this.tokens.matches5(i._export,i._import,i.name,i.name,i.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,w._type)){this.tokens.removeInitialToken();for(let e=0;e<8;e++)this.tokens.removeToken();return!0}if(this.tokens.matches1(i._import))return this.processImport();if(this.tokens.matches2(i._export,i._default))return this.processExportDefault();if(this.tokens.matches2(i._export,i.braceL))return this.processNamedExports();if(this.tokens.matches2(i._export,i.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._type)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(i.braceL)){for(;!this.tokens.matches1(i.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(i._as)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(w._from)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,i.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),sr(this.tokens)),!0}return!1}processImportEquals(){const e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.shouldAutomaticallyElideImportedName(e)?wm(this.tokens):this.injectCreateRequireForImportRequire?(this.tokens.replaceToken("const"),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.replaceToken(this.helperManager.getHelperName("require"))):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(i._import,i.parenL))return!1;const e=this.tokens.snapshot();if(this.removeImportTypeBindings()){for(this.tokens.restoreToSnapshot(e);!this.tokens.matches1(i.string);)this.tokens.removeToken();this.tokens.removeToken(),sr(this.tokens),this.tokens.matches1(i.semi)&&this.tokens.removeToken()}return!0}removeImportTypeBindings(){if(this.tokens.copyExpectedToken(i._import),this.tokens.matchesContextual(w._type)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,i.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._from))return!0;if(this.tokens.matches1(i.string))return this.tokens.copyToken(),!1;this.tokens.matchesContextual(w._module)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,w._from)&&this.tokens.copyToken();let e=!1,r=!1,o=!1;if(this.tokens.matches1(i.name)&&(this.shouldAutomaticallyElideImportedName(this.tokens.identifierName())?(this.tokens.removeToken(),this.tokens.matches1(i.comma)&&this.tokens.removeToken()):(e=!0,this.tokens.copyToken(),this.tokens.matches1(i.comma)&&(o=!0,this.tokens.removeToken()))),this.tokens.matches1(i.star))this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2))?(this.tokens.removeToken(),this.tokens.removeToken(),this.tokens.removeToken()):(o&&this.tokens.appendCode(","),e=!0,this.tokens.copyExpectedToken(i.star),this.tokens.copyExpectedToken(i.name),this.tokens.copyExpectedToken(i.name));else if(this.tokens.matches1(i.braceL)){for(o&&this.tokens.appendCode(","),this.tokens.copyToken();!this.tokens.matches1(i.braceR);){r=!0;const l=bl(this.tokens);if(l.isType||this.shouldAutomaticallyElideImportedName(l.rightName)){for(;this.tokens.currentIndex()<l.endIndex;)this.tokens.removeToken();this.tokens.matches1(i.comma)&&this.tokens.removeToken()}else{for(e=!0;this.tokens.currentIndex()<l.endIndex;)this.tokens.copyToken();this.tokens.matches1(i.comma)&&this.tokens.copyToken()}}this.tokens.copyExpectedToken(i.braceR)}return this.keepUnusedImports?!1:this.isTypeScriptTransformEnabled?!e:this.isFlowTransformEnabled?r&&!e:!1}shouldAutomaticallyElideImportedName(e){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(e)}processExportDefault(){if(Em(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))return this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken(),!0;if(!(this.tokens.matches4(i._export,i._default,i._function,i.name)||this.tokens.matches5(i._export,i._default,i.name,i._function,i.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,w._async)||this.tokens.matches4(i._export,i._default,i._class,i.name)||this.tokens.matches5(i._export,i._default,i._abstract,i._class,i.name))&&this.reactHotLoaderTransformer){const r=this.nameManager.claimFreeName("_default");return this.tokens.replaceToken(`let ${r}; export`),this.tokens.copyToken(),this.tokens.appendCode(` ${r} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(r),!0}return!1}processNamedExports(){if(!this.isTypeScriptTransformEnabled)return!1;this.tokens.copyExpectedToken(i._export),this.tokens.copyExpectedToken(i.braceL);const e=_m(this.tokens);let r=!1;for(;!this.tokens.matches1(i.braceR);){const o=bl(this.tokens);if(o.isType||!e&&this.shouldElideExportedName(o.leftName)){for(;this.tokens.currentIndex()<o.endIndex;)this.tokens.removeToken();this.tokens.matches1(i.comma)&&this.tokens.removeToken()}else{for(r=!0;this.tokens.currentIndex()<o.endIndex;)this.tokens.copyToken();this.tokens.matches1(i.comma)&&this.tokens.copyToken()}}return this.tokens.copyExpectedToken(i.braceR),!this.keepUnusedImports&&e&&!r&&(this.tokens.removeToken(),this.tokens.removeToken(),sr(this.tokens)),!0}shouldElideExportedName(e){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&this.declarationInfo.typeDeclarations.has(e)&&!this.declarationInfo.valueDeclarations.has(e)}}class $E extends Qt{constructor(e,r,o){super(),this.rootTransformer=e,this.tokens=r,this.isImportsTransformEnabled=o}process(){return this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange()?!0:this.tokens.matches1(i._enum)?(this.processEnum(),!0):this.tokens.matches2(i._export,i._enum)?(this.processNamedExportEnum(),!0):this.tokens.matches3(i._export,i._default,i._enum)?(this.processDefaultExportEnum(),!0):!1}processNamedExportEnum(){if(this.isImportsTransformEnabled){this.tokens.removeInitialToken();const e=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.tokens.appendCode(` exports.${e} = ${e};`)}else this.tokens.copyToken(),this.processEnum()}processDefaultExportEnum(){this.tokens.removeInitialToken(),this.tokens.removeToken();const e=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.isImportsTransformEnabled?this.tokens.appendCode(` exports.default = ${e};`):this.tokens.appendCode(` export default ${e};`)}processEnum(){this.tokens.replaceToken("const"),this.tokens.copyExpectedToken(i.name);let e=!1;this.tokens.matchesContextual(w._of)&&(this.tokens.removeToken(),e=this.tokens.matchesContextual(w._symbol),this.tokens.removeToken());const r=this.tokens.matches3(i.braceL,i.name,i.eq);this.tokens.appendCode(' = require("flow-enums-runtime")');const o=!e&&!r;for(this.tokens.replaceTokenTrimmingLeftWhitespace(o?".Mirrored([":"({");!this.tokens.matches1(i.braceR);){if(this.tokens.matches1(i.ellipsis)){this.tokens.removeToken();break}this.processEnumElement(e,r),this.tokens.matches1(i.comma)&&this.tokens.copyToken()}this.tokens.replaceToken(o?"]);":"});")}processEnumElement(e,r){if(e){const o=this.tokens.identifierName();this.tokens.copyToken(),this.tokens.appendCode(`: Symbol("${o}")`)}else r?(this.tokens.copyToken(),this.tokens.replaceTokenTrimmingLeftWhitespace(":"),this.tokens.copyToken()):this.tokens.replaceToken(`"${this.tokens.identifierName()}"`)}}function BE(t){let e,r=t[0],o=1;for(;o<t.length;){const l=t[o],a=t[o+1];if(o+=2,(l==="optionalAccess"||l==="optionalCall")&&r==null)return;l==="access"||l==="optionalAccess"?(e=r,r=a(r)):(l==="call"||l==="optionalCall")&&(r=a((...c)=>r.call(e,...c)),e=void 0)}return r}const oi="jest",zE=["mock","unmock","enableAutomock","disableAutomock"];class Fu extends Qt{__init(){this.hoistedFunctionNames=[]}constructor(e,r,o,l){super(),this.rootTransformer=e,this.tokens=r,this.nameManager=o,this.importProcessor=l,Fu.prototype.__init.call(this)}process(){return this.tokens.currentToken().scopeDepth===0&&this.tokens.matches4(i.name,i.dot,i.name,i.parenL)&&this.tokens.identifierName()===oi?BE([this,"access",e=>e.importProcessor,"optionalAccess",e=>e.getGlobalNames,"call",e=>e(),"optionalAccess",e=>e.has,"call",e=>e(oi)])?!1:this.extractHoistedCalls():!1}getHoistedCode(){return this.hoistedFunctionNames.length>0?this.hoistedFunctionNames.map(e=>`${e}();`).join(""):""}extractHoistedCalls(){this.tokens.removeToken();let e=!1;for(;this.tokens.matches3(i.dot,i.name,i.parenL);){const r=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);if(zE.includes(r)){const l=this.nameManager.claimFreeName("__jestHoist");this.hoistedFunctionNames.push(l),this.tokens.replaceToken(`function ${l}(){${oi}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR),this.tokens.appendCode(";}"),e=!1}else e?this.tokens.copyToken():this.tokens.replaceToken(`${oi}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR),e=!0}return!0}}class UE extends Qt{constructor(e){super(),this.tokens=e}process(){if(this.tokens.matches1(i.num)){const e=this.tokens.currentTokenCode();if(e.includes("_"))return this.tokens.replaceToken(e.replace(/_/g,"")),!0}return!1}}class HE extends Qt{constructor(e,r){super(),this.tokens=e,this.nameManager=r}process(){return this.tokens.matches2(i._catch,i.braceL)?(this.tokens.copyToken(),this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`),!0):!1}}class qE extends Qt{constructor(e,r){super(),this.tokens=e,this.nameManager=r}process(){if(this.tokens.matches1(i.nullishCoalescing)){const o=this.tokens.currentToken();return this.tokens.tokens[o.nullishStartIndex].isAsyncOperation?this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => ("):this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("),!0}if(this.tokens.matches1(i._delete)&&this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)return this.tokens.removeInitialToken(),!0;const r=this.tokens.currentToken().subscriptStartIndex;if(r!=null&&this.tokens.tokens[r].isOptionalChainStart&&this.tokens.tokenAtRelativeIndex(-1).type!==i._super){const o=this.nameManager.claimFreeName("_");let l;if(r>0&&this.tokens.matches1AtIndex(r-1,i._delete)&&this.isLastSubscriptInChain()?l=`${o} => delete ${o}`:l=`${o} => ${o}`,this.tokens.tokens[r].isAsyncOperation&&(l=`async ${l}`),this.tokens.matches2(i.questionDot,i.parenL)||this.tokens.matches2(i.questionDot,i.lessThan))this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${l}`);else if(this.tokens.matches2(i.questionDot,i.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${l}`);else if(this.tokens.matches1(i.questionDot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${l}.`);else if(this.tokens.matches1(i.dot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${l}.`);else if(this.tokens.matches1(i.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${l}[`);else if(this.tokens.matches1(i.parenL))this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${l}(`);else throw new Error("Unexpected subscript operator in optional chain.");return!0}return!1}isLastSubscriptInChain(){let e=0;for(let r=this.tokens.currentIndex()+1;;r++){if(r>=this.tokens.tokens.length)throw new Error("Reached the end of the code while finding the end of the access chain.");if(this.tokens.tokens[r].isOptionalChainStart?e++:this.tokens.tokens[r].isOptionalChainEnd&&e--,e<0)return!0;if(e===0&&this.tokens.tokens[r].subscriptStartIndex!=null)return!1}}justSkippedSuper(){let e=0,r=this.tokens.currentIndex()-1;for(;;){if(r<0)throw new Error("Reached the start of the code while finding the start of the access chain.");if(this.tokens.tokens[r].isOptionalChainStart?e--:this.tokens.tokens[r].isOptionalChainEnd&&e++,e<0)return!1;if(e===0&&this.tokens.tokens[r].subscriptStartIndex!=null)return this.tokens.tokens[r-1].type===i._super;r--}}}class WE extends Qt{constructor(e,r,o,l){super(),this.rootTransformer=e,this.tokens=r,this.importProcessor=o,this.options=l}process(){const e=this.tokens.currentIndex();if(this.tokens.identifierName()==="createReactClass"){const r=this.importProcessor&&this.importProcessor.getIdentifierReplacement("createReactClass");return r?this.tokens.replaceToken(`(0, ${r})`):this.tokens.copyToken(),this.tryProcessCreateClassCall(e),!0}if(this.tokens.matches3(i.name,i.dot,i.name)&&this.tokens.identifierName()==="React"&&this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+2)==="createClass"){const r=this.importProcessor&&this.importProcessor.getIdentifierReplacement("React")||"React";return r?(this.tokens.replaceToken(r),this.tokens.copyToken(),this.tokens.copyToken()):(this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.copyToken()),this.tryProcessCreateClassCall(e),!0}return!1}tryProcessCreateClassCall(e){const r=this.findDisplayName(e);r&&this.classNeedsDisplayName()&&(this.tokens.copyExpectedToken(i.parenL),this.tokens.copyExpectedToken(i.braceL),this.tokens.appendCode(`displayName: '${r}',`),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.braceR),this.tokens.copyExpectedToken(i.parenR))}findDisplayName(e){return e<2?null:this.tokens.matches2AtIndex(e-2,i.name,i.eq)?this.tokens.identifierNameAtIndex(e-2):e>=2&&this.tokens.tokens[e-2].identifierRole===re.ObjectKey?this.tokens.identifierNameAtIndex(e-2):this.tokens.matches2AtIndex(e-2,i._export,i._default)?this.getDisplayNameFromFilename():null}getDisplayNameFromFilename(){const r=(this.options.filePath||"unknown").split("/"),o=r[r.length-1],l=o.lastIndexOf("."),a=l===-1?o:o.slice(0,l);return a==="index"&&r[r.length-2]?r[r.length-2]:a}classNeedsDisplayName(){let e=this.tokens.currentIndex();if(!this.tokens.matches2(i.parenL,i.braceL))return!1;const r=e+1,o=this.tokens.tokens[r].contextId;if(o==null)throw new Error("Expected non-null context ID on object open-brace.");for(;e<this.tokens.tokens.length;e++){const l=this.tokens.tokens[e];if(l.type===i.braceR&&l.contextId===o){e++;break}if(this.tokens.identifierNameAtIndex(e)==="displayName"&&this.tokens.tokens[e].identifierRole===re.ObjectKey&&l.contextId===o)return!1}if(e===this.tokens.tokens.length)throw new Error("Unexpected end of input when processing React class.");return this.tokens.matches1AtIndex(e,i.parenR)||this.tokens.matches2AtIndex(e,i.comma,i.parenR)}}class Mu extends Qt{__init(){this.extractedDefaultExportName=null}constructor(e,r){super(),this.tokens=e,this.filePath=r,Mu.prototype.__init.call(this)}setExtractedDefaultExportName(e){this.extractedDefaultExportName=e}getPrefixCode(){return`
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`.replace(/\s+/g," ").trim()}getSuffixCode(){const e=new Set;for(const o of this.tokens.tokens)!o.isType&&xb(o)&&o.identifierRole!==re.ImportDeclaration&&e.add(this.tokens.identifierNameForToken(o));const r=Array.from(e).map(o=>({variableName:o,uniqueLocalName:o}));return this.extractedDefaultExportName&&r.push({variableName:this.extractedDefaultExportName,uniqueLocalName:"default"}),`
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${r.map(({variableName:o,uniqueLocalName:l})=>`  reactHotLoader.register(${o}, "${l}", ${JSON.stringify(this.filePath||"")});`).join(`
`)}
  leaveModule(module);
})();`}process(){return!1}}const VE=new Set(["break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield","enum","implements","interface","let","package","private","protected","public","static","await","false","null","true"]);function zd(t){if(t.length===0||!Il[t.charCodeAt(0)])return!1;for(let e=1;e<t.length;e++)if(!Kt[t.charCodeAt(e)])return!1;return!VE.has(t)}class GE extends Qt{constructor(e,r,o){super(),this.rootTransformer=e,this.tokens=r,this.isImportsTransformEnabled=o}process(){return this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange()?!0:this.tokens.matches1(i._public)||this.tokens.matches1(i._protected)||this.tokens.matches1(i._private)||this.tokens.matches1(i._abstract)||this.tokens.matches1(i._readonly)||this.tokens.matches1(i._override)||this.tokens.matches1(i.nonNullAssertion)?(this.tokens.removeInitialToken(),!0):this.tokens.matches1(i._enum)||this.tokens.matches2(i._const,i._enum)?(this.processEnum(),!0):this.tokens.matches2(i._export,i._enum)||this.tokens.matches3(i._export,i._const,i._enum)?(this.processEnum(!0),!0):!1}processEnum(e=!1){for(this.tokens.removeInitialToken();this.tokens.matches1(i._const)||this.tokens.matches1(i._enum);)this.tokens.removeToken();const r=this.tokens.identifierName();this.tokens.removeToken(),e&&!this.isImportsTransformEnabled&&this.tokens.appendCode("export "),this.tokens.appendCode(`var ${r}; (function (${r})`),this.tokens.copyExpectedToken(i.braceL),this.processEnumBody(r),this.tokens.copyExpectedToken(i.braceR),e&&this.isImportsTransformEnabled?this.tokens.appendCode(`)(${r} || (exports.${r} = ${r} = {}));`):this.tokens.appendCode(`)(${r} || (${r} = {}));`)}processEnumBody(e){let r=null;for(;!this.tokens.matches1(i.braceR);){const{nameStringCode:o,variableName:l}=this.extractEnumKeyInfo(this.tokens.currentToken());this.tokens.removeInitialToken(),this.tokens.matches3(i.eq,i.string,i.comma)||this.tokens.matches3(i.eq,i.string,i.braceR)?this.processStringLiteralEnumMember(e,o,l):this.tokens.matches1(i.eq)?this.processExplicitValueEnumMember(e,o,l):this.processImplicitValueEnumMember(e,o,l,r),this.tokens.matches1(i.comma)&&this.tokens.removeToken(),l!=null?r=l:r=`${e}[${o}]`}}extractEnumKeyInfo(e){if(e.type===i.name){const r=this.tokens.identifierNameForToken(e);return{nameStringCode:`"${r}"`,variableName:zd(r)?r:null}}else if(e.type===i.string){const r=this.tokens.stringValueForToken(e);return{nameStringCode:this.tokens.code.slice(e.start,e.end),variableName:zd(r)?r:null}}else throw new Error("Expected name or string at beginning of enum element.")}processStringLiteralEnumMember(e,r,o){o!=null?(this.tokens.appendCode(`const ${o}`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(`; ${e}[${r}] = ${o};`)):(this.tokens.appendCode(`${e}[${r}]`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(";"))}processExplicitValueEnumMember(e,r,o){const l=this.tokens.currentToken().rhsEndIndex;if(l==null)throw new Error("Expected rhsEndIndex on enum assign.");if(o!=null){for(this.tokens.appendCode(`const ${o}`),this.tokens.copyToken();this.tokens.currentIndex()<l;)this.rootTransformer.processToken();this.tokens.appendCode(`; ${e}[${e}[${r}] = ${o}] = ${r};`)}else{for(this.tokens.appendCode(`${e}[${e}[${r}]`),this.tokens.copyToken();this.tokens.currentIndex()<l;)this.rootTransformer.processToken();this.tokens.appendCode(`] = ${r};`)}}processImplicitValueEnumMember(e,r,o,l){let a=l!=null?`${l} + 1`:"0";o!=null&&(this.tokens.appendCode(`const ${o} = ${a}; `),a=o),this.tokens.appendCode(`${e}[${e}[${r}] = ${a}] = ${r};`)}}class aa{__init(){this.transformers=[]}__init2(){this.generatedVariables=[]}constructor(e,r,o,l){aa.prototype.__init.call(this),aa.prototype.__init2.call(this),this.nameManager=e.nameManager,this.helperManager=e.helperManager;const{tokenProcessor:a,importProcessor:c}=e;this.tokens=a,this.isImportsTransformEnabled=r.includes("imports"),this.isReactHotLoaderTransformEnabled=r.includes("react-hot-loader"),this.disableESTransforms=!!l.disableESTransforms,l.disableESTransforms||(this.transformers.push(new qE(a,this.nameManager)),this.transformers.push(new UE(a)),this.transformers.push(new HE(a,this.nameManager))),r.includes("jsx")&&(l.jsxRuntime!=="preserve"&&this.transformers.push(new lr(this,a,c,this.nameManager,l)),this.transformers.push(new WE(this,a,c,l)));let f=null;if(r.includes("react-hot-loader")){if(!l.filePath)throw new Error("filePath is required when using the react-hot-loader transform.");f=new Mu(a,l.filePath),this.transformers.push(f)}if(r.includes("imports")){if(c===null)throw new Error("Expected non-null importProcessor with imports transform enabled.");this.transformers.push(new Xo(this,a,c,this.nameManager,this.helperManager,f,o,!!l.enableLegacyTypeScriptModuleInterop,r.includes("typescript"),r.includes("flow"),!!l.preserveDynamicImport,!!l.keepUnusedImports))}else this.transformers.push(new ME(a,this.nameManager,this.helperManager,f,r.includes("typescript"),r.includes("flow"),!!l.keepUnusedImports,l));r.includes("flow")&&this.transformers.push(new $E(this,a,r.includes("imports"))),r.includes("typescript")&&this.transformers.push(new GE(this,a,r.includes("imports"))),r.includes("jest")&&this.transformers.push(new Fu(this,a,this.nameManager,c))}transform(){this.tokens.reset(),this.processBalancedCode();let r=this.isImportsTransformEnabled?'"use strict";':"";for(const c of this.transformers)r+=c.getPrefixCode();r+=this.helperManager.emitHelpers(),r+=this.generatedVariables.map(c=>` var ${c};`).join("");for(const c of this.transformers)r+=c.getHoistedCode();let o="";for(const c of this.transformers)o+=c.getSuffixCode();const l=this.tokens.finish();let{code:a}=l;if(a.startsWith("#!")){let c=a.indexOf(`
`);return c===-1&&(c=a.length,a+=`
`),{code:a.slice(0,c+1)+r+a.slice(c+1)+o,mappings:this.shiftMappings(l.mappings,r.length)}}else return{code:r+a+o,mappings:this.shiftMappings(l.mappings,r.length)}}processBalancedCode(){let e=0,r=0;for(;!this.tokens.isAtEnd();){if(this.tokens.matches1(i.braceL)||this.tokens.matches1(i.dollarBraceL))e++;else if(this.tokens.matches1(i.braceR)){if(e===0)return;e--}if(this.tokens.matches1(i.parenL))r++;else if(this.tokens.matches1(i.parenR)){if(r===0)return;r--}this.processToken()}}processToken(){if(this.tokens.matches1(i._class)){this.processClass();return}for(const e of this.transformers)if(e.process())return;this.tokens.copyToken()}processNamedClass(){if(!this.tokens.matches2(i._class,i.name))throw new Error("Expected identifier for exported class name.");const e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.processClass(),e}processClass(){const e=LE(this,this.tokens,this.nameManager,this.disableESTransforms),r=(e.headerInfo.isExpression||!e.headerInfo.className)&&e.staticInitializerNames.length+e.instanceInitializerNames.length>0;let o=e.headerInfo.className;r&&(o=this.nameManager.claimFreeName("_class"),this.generatedVariables.push(o),this.tokens.appendCode(` (${o} =`));const a=this.tokens.currentToken().contextId;if(a==null)throw new Error("Expected class to have a context ID.");for(this.tokens.copyExpectedToken(i._class);!this.tokens.matchesContextIdAndLabel(i.braceL,a);)this.processToken();this.processClassBody(e,o);const c=e.staticInitializerNames.map(f=>`${o}.${f}()`);r?this.tokens.appendCode(`, ${c.map(f=>`${f}, `).join("")}${o})`):e.staticInitializerNames.length>0&&this.tokens.appendCode(` ${c.map(f=>`${f};`).join(" ")}`)}processClassBody(e,r){const{headerInfo:o,constructorInsertPos:l,constructorInitializerStatements:a,fields:c,instanceInitializerNames:f,rangesToRemove:u}=e;let p=0,y=0;const d=this.tokens.currentToken().contextId;if(d==null)throw new Error("Expected non-null context ID on class.");this.tokens.copyExpectedToken(i.braceL),this.isReactHotLoaderTransformEnabled&&this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");const O=a.length+f.length>0;if(l===null&&O){const S=this.makeConstructorInitCode(a,f,r);if(o.hasSuperclass){const j=this.nameManager.claimFreeName("args");this.tokens.appendCode(`constructor(...${j}) { super(...${j}); ${S}; }`)}else this.tokens.appendCode(`constructor() { ${S}; }`)}for(;!this.tokens.matchesContextIdAndLabel(i.braceR,d);)if(p<c.length&&this.tokens.currentIndex()===c[p].start){let S=!1;for(this.tokens.matches1(i.bracketL)?this.tokens.copyTokenWithPrefix(`${c[p].initializerName}() {this`):this.tokens.matches1(i.string)||this.tokens.matches1(i.num)?(this.tokens.copyTokenWithPrefix(`${c[p].initializerName}() {this[`),S=!0):this.tokens.copyTokenWithPrefix(`${c[p].initializerName}() {this.`);this.tokens.currentIndex()<c[p].end;)S&&this.tokens.currentIndex()===c[p].equalsIndex&&this.tokens.appendCode("]"),this.processToken();this.tokens.appendCode("}"),p++}else if(y<u.length&&this.tokens.currentIndex()>=u[y].start){for(this.tokens.currentIndex()<u[y].end&&this.tokens.removeInitialToken();this.tokens.currentIndex()<u[y].end;)this.tokens.removeToken();y++}else this.tokens.currentIndex()===l?(this.tokens.copyToken(),O&&this.tokens.appendCode(`;${this.makeConstructorInitCode(a,f,r)};`),this.processToken()):this.processToken();this.tokens.copyExpectedToken(i.braceR)}makeConstructorInitCode(e,r,o){return[...e,...r.map(l=>`${o}.prototype.${l}.call(this)`)].join(";")}processPossibleArrowParamEnd(){if(this.tokens.matches2(i.parenR,i.colon)&&this.tokens.tokenAtRelativeIndex(1).isType){let e=this.tokens.currentIndex()+1;for(;this.tokens.tokens[e].isType;)e++;if(this.tokens.matches1AtIndex(e,i.arrow)){for(this.tokens.removeInitialToken();this.tokens.currentIndex()<e;)this.tokens.removeToken();return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"),!0}}return!1}processPossibleAsyncArrowWithTypeParams(){if(!this.tokens.matchesContextual(w._async)&&!this.tokens.matches1(i._async))return!1;const e=this.tokens.tokenAtRelativeIndex(1);if(e.type!==i.lessThan||!e.isType)return!1;let r=this.tokens.currentIndex()+1;for(;this.tokens.tokens[r].isType;)r++;if(this.tokens.matches1AtIndex(r,i.parenL)){for(this.tokens.replaceToken("async ("),this.tokens.removeInitialToken();this.tokens.currentIndex()<r;)this.tokens.removeToken();return this.tokens.removeToken(),this.processBalancedCode(),this.processToken(),!0}return!1}processPossibleTypeRange(){if(this.tokens.currentToken().isType){for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return!0}return!1}shiftMappings(e,r){for(let o=0;o<e.length;o++){const l=e[o];l!==void 0&&(e[o]=l+r)}return e}}var XE={};(function(t){t.__esModule=!0,t.LinesAndColumns=void 0;var e=`
`,r="\r",o=function(){function l(a){this.string=a;for(var c=[0],f=0;f<a.length;)switch(a[f]){case e:f+=e.length,c.push(f);break;case r:f+=r.length,a[f]===e&&(f+=e.length),c.push(f);break;default:f++;break}this.offsets=c}return l.prototype.locationForIndex=function(a){if(a<0||a>this.string.length)return null;for(var c=0,f=this.offsets;f[c+1]<=a;)c++;var u=a-f[c];return{line:c,column:u}},l.prototype.indexForLocation=function(a){var c=a.line,f=a.column;return c<0||c>=this.offsets.length||f<0||f>this.lengthOfLine(c)?null:this.offsets[c]+f},l.prototype.lengthOfLine=function(a){var c=this.offsets[a],f=a===this.offsets.length-1?this.string.length:this.offsets[a+1];return f-c},l}();t.LinesAndColumns=o,t.default=o})(XE);function JE(t){const e=new Set;for(let r=0;r<t.tokens.length;r++)t.matches1AtIndex(r,i._import)&&!t.matches3AtIndex(r,i._import,i.name,i.eq)&&KE(t,r,e);return e}function KE(t,e,r){e++,!t.matches1AtIndex(e,i.parenL)&&(t.matches1AtIndex(e,i.name)&&(r.add(t.identifierNameAtIndex(e)),e++,t.matches1AtIndex(e,i.comma)&&e++),t.matches1AtIndex(e,i.star)&&(e+=2,r.add(t.identifierNameAtIndex(e)),e++),t.matches1AtIndex(e,i.braceL)&&(e++,QE(t,e,r)))}function QE(t,e,r){for(;;){if(t.matches1AtIndex(e,i.braceR))return;const o=bl(t,e);if(e=o.endIndex,o.isType||r.add(o.rightName),t.matches2AtIndex(e,i.comma,i.braceR))return;if(t.matches1AtIndex(e,i.braceR))return;if(t.matches1AtIndex(e,i.comma))e++;else throw new Error(`Unexpected token: ${JSON.stringify(t.tokens[e])}`)}}function YE(t,e){yP(e);try{const r=ZE(t,e),l=new aa(r,e.transforms,!!e.enableLegacyBabel5ModuleInterop,e).transform();let a={code:l.code};if(e.sourceMapOptions){if(!e.filePath)throw new Error("filePath must be specified when generating a source map.");a={...a,sourceMap:eP(l,e.filePath,e.sourceMapOptions,t,r.tokenProcessor.tokens)}}return a}catch(r){throw e.filePath&&(r.message=`Error transforming ${e.filePath}: ${r.message}`),r}}function ZE(t,e){const r=e.transforms.includes("jsx"),o=e.transforms.includes("typescript"),l=e.transforms.includes("flow"),a=e.disableESTransforms===!0,c=AE(t,r,o,l),f=c.tokens,u=c.scopes,p=new du(t,f),y=new Zi(p),d=new Go(t,f,l,a,y),O=!!e.enableLegacyTypeScriptModuleInterop;let S=null;return e.transforms.includes("imports")?(S=new ir(p,d,O,e,e.transforms.includes("typescript"),!!e.keepUnusedImports,y),S.preprocessTokens(),Ed(d,u,S.getGlobalNames()),e.transforms.includes("typescript")&&!e.keepUnusedImports&&S.pruneTypeOnlyImports()):e.transforms.includes("typescript")&&!e.keepUnusedImports&&Ed(d,u,JE(d)),{tokenProcessor:d,scopes:u,nameManager:p,importProcessor:S,helperManager:y}}var eI=Object.defineProperty,tI=Object.defineProperties,nI=Object.getOwnPropertyDescriptors,ca=Object.getOwnPropertySymbols,Im=Object.prototype.hasOwnProperty,km=Object.prototype.propertyIsEnumerable,Ud=(t,e,r)=>e in t?eI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,on=(t,e)=>{for(var r in e||(e={}))Im.call(e,r)&&Ud(t,r,e[r]);if(ca)for(var r of ca(e))km.call(e,r)&&Ud(t,r,e[r]);return t},Rl=(t,e)=>tI(t,nI(e)),rI=(t,e)=>{var r={};for(var o in t)Im.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&ca)for(var o of ca(t))e.indexOf(o)<0&&km.call(t,o)&&(r[o]=t[o]);return r},oI=(t,e,r)=>new Promise((o,l)=>{var a=u=>{try{f(r.next(u))}catch(p){l(p)}},c=u=>{try{f(r.throw(u))}catch(p){l(p)}},f=u=>u.done?o(u.value):Promise.resolve(u.value).then(a,c);f((r=r.apply(t,e)).next())}),lI=t=>{const{tabMode:e="indentation"}=t,r=H.useRef(null),[o,l]=H.useState(t.code||""),{theme:a}=t;return H.useEffect(()=>{l(t.code)},[t.code]),Ow(r,c=>l(c.slice(0,-1)),{disabled:t.disabled,indentation:e==="indentation"?2:void 0}),H.useEffect(()=>{t.onChange&&t.onChange(o)},[o]),n.jsx("div",{className:t.className,style:t.style,children:n.jsx(ub,{code:o,theme:t.theme||fb.nightOwl,language:t.language,children:({className:c,tokens:f,getLineProps:u,getTokenProps:p,style:y})=>n.jsx("pre",{className:c,style:on(on({margin:0,outline:"none",padding:10,fontFamily:"inherit"},a&&typeof a.plain=="object"?a.plain:{}),y),ref:r,spellCheck:"false",children:f.map((d,O)=>n.jsxs("span",Rl(on({},u({line:d})),{children:[d.filter(S=>!S.empty).map((S,j)=>n.jsx("span",on({},p({token:S})),`token-${j}`)),`
`]}),`line-${O}`))})})})},iI=lI,aI=H.createContext({}),$a=aI,cI=["jsx","imports"];function ys(t={}){const e=Array.isArray(t.transforms)?t.transforms.filter(Boolean):cI;return r=>YE(r,{transforms:e}).code}var fI=(t,e)=>class extends H.Component{componentDidCatch(o){e(o)}render(){return typeof t=="function"?n.jsx(t,{}):Gn.isValidElement(t)?t:null}},Nm=fI,sI=(t,e)=>{const r=Object.keys(e),o=r.map(l=>e[l]);return new Function(...r,t)(...o)},Cm=sI;function uI(...t){return t.reduce((e,r)=>(...o)=>e(r(...o)))}var Tm='const _jsxFileName = "";',Hd=t=>t.trim().replace(/;$/,""),pI=t=>t.replace(Tm,"").trim(),dI=t=>Tm+t,yI=t=>`return (${t})`,OI=({code:t="",scope:e={},enableTypeScript:r=!0},o)=>{const l=["jsx"];r&&l.push("typescript");const a=uI(dI,ys({transforms:["imports"]}),yI,pI,Hd,ys({transforms:l}),Hd)(t);return Nm(Cm(a,on({React:Gn},e)),o)},hI=({code:t="",scope:e={},enableTypeScript:r=!0},o,l)=>{const a=f=>{typeof f>"u"?l(new SyntaxError("`render` must be called with valid JSX.")):o(Nm(f,l))};if(!/render\s*\(/.test(t))return l(new SyntaxError("No-Inline evaluations must call `render`."));const c=["jsx","imports"];r&&c.splice(1,0,"typescript"),Cm(ys({transforms:c})(t),Rl(on({React:Gn},e),{render:a}))};function bI({children:t,code:e="",language:r="tsx",theme:o,enableTypeScript:l=!0,disabled:a=!1,scope:c,transformCode:f,noInline:u=!1}){const[p,y]=H.useState({error:void 0,element:void 0});function d(j){return oI(this,null,function*(){const x=P=>{y({error:P.toString(),element:void 0})};try{const P=f?f(j):j;try{const m=yield Promise.resolve(P),h=v=>y({error:void 0,element:v});if(typeof m!="string")throw new Error("Code failed to transform");const b={code:m,scope:c,enableTypeScript:l};u?(y({error:void 0,element:null}),hI(b,h,x)):h(OI(b,x))}catch(m){return x(m)}}catch(P){return x(P),Promise.resolve()}})}const O=j=>y({error:j.toString()});H.useEffect(()=>{d(e).catch(O)},[e,c,u,f]);const S=j=>{d(j).catch(O)};return n.jsx($a.Provider,{value:Rl(on({},p),{code:e,language:r,theme:o,disabled:a,onError:O,onChange:S}),children:t})}var mI=bI;function gI(t){const{code:e,language:r,theme:o,disabled:l,onChange:a}=H.useContext($a);return n.jsx(iI,on({theme:o,code:e,language:r,disabled:l,onChange:a},t))}function jI(t){const{error:e}=H.useContext($a);return e?n.jsx("pre",Rl(on({},t),{children:e})):null}function xI(t){var e=t,{Component:r="div"}=e,o=rI(e,["Component"]);const{element:l}=H.useContext($a);return n.jsx(r,Rl(on({},o),{children:l?n.jsx(l,{}):null}))}var vI=xI;function wI({value:t,onChange:e,options:r,className:o,style:l}){const[a,c]=H.useState(!1),f=r.find(u=>u.value===t);return n.jsxs("div",{className:Ze("doc-ui-select",o),style:l,children:[n.jsx(Ol,{icon:f==null?void 0:f.icon,onClick:()=>c(u=>!u),children:f==null?void 0:f.label}),n.jsx("div",{className:Ze("doc-ui-select-dropdown",a&&"doc-ui-select-dropdown-open"),children:r.map(u=>n.jsx(Ol,{icon:u.icon,onClick:()=>{e(u.value),c(!1)},children:u.label},u.value))})]})}const PI=/import[\w_,{}$\s]+from\s['"]([.@\w/_-]+)['"];?/gm;function SI(t){return t.replace(PI,"")}function _I({code:t,filename:e,language:r="jsx",device:o="responsive",disablePadding:l,className:a,style:c,imports:f}){const u=H.useMemo(()=>[{value:"mobile",label:"Mobile",icon:n.jsx(iv,{})},{value:"tablet",label:"Tablet",icon:n.jsx(cv,{})},{value:"laptop",label:"Laptop",icon:n.jsx(ov,{})}],[]),[p,y]=H.useState(o==="responsive"?"laptop":o),d=H.useMemo(()=>u.find(O=>O.value===p),[p,u]);return n.jsxs("div",{className:Ze("doc-ui-demo-block","doc-ui-demo-block-"+p,a),style:c,children:[n.jsxs(Ob,{children:[n.jsx(db,{language:r,filename:e}),n.jsx(yb,{}),o==="responsive"?n.jsx(wI,{value:p,onChange:y,options:u}):n.jsx(Ol,{icon:d==null?void 0:d.icon,children:d==null?void 0:d.label}),n.jsx(pb,{code:t})]}),n.jsx(mI,{code:t,theme:{plain:{},styles:[]},enableTypeScript:r==="tsx",transformCode:SI,scope:f,noInline:t==null?void 0:t.includes("render("),children:n.jsxs("div",{className:"doc-ui-demo-block-main",children:[n.jsx(vI,{className:Ze("doc-ui-demo-block-preview",l&&"doc-ui-demo-block-preview-disable-padding")}),n.jsxs("div",{className:"doc-ui-demo-block-develop",children:[n.jsx(jI,{className:"doc-ui-demo-block-error"}),n.jsx(gI,{className:"doc-ui-demo-block-editor"})]})]})})]})}function EI(t){return n.jsx("div",{className:"doc-ui-table",children:n.jsx("table",{...t})})}const II={code:dw,pre:({children:t,...e})=>{var a,c,f;const r=H.Children.only(t),o=((a=r.props.className)==null?void 0:a.substring(9))||"bash",l=(f=(c=r.props.children)==null?void 0:c.trim)==null?void 0:f.call(c);return["jsx","tsx"].includes(o)?n.jsx(_I,{language:o,code:l,...e}):n.jsx(pw,{language:o,code:l,...e})},table:EI,Alert:uv};function kI({docs:t=[],basename:e,languages:r,className:o,style:l}){const a=H.useMemo(()=>{const c=Sx({fallbackLng:"en",supportedLngs:r==null?void 0:r.map(f=>f.code),debug:!0,interpolation:{escapeValue:!1},resources:{en:{translation:{hello:"Hello from other i18n instance"}},de:{translation:{hello:"Hallo aus einer anderen i18n Instanz"}}}});return c.init(),c},[r]);return n.jsx(zx,{i18n:a,children:n.jsx(F0,{basename:e,children:n.jsxs("div",{className:Ze("doc-ui",o),style:l,children:[n.jsx(J0,{languages:r,docs:t}),n.jsx("main",{className:"doc-ui-main",children:n.jsx("article",{className:"doc-ui-content",children:n.jsx(ex,{components:II,children:n.jsx(k0,{children:t.map(c=>n.jsx(tb,{index:c.filepath==="README.md",path:ts(c.filepath),Component:c.default},c.filepath))})})})})]})})})}const NI="CHANGELOG.md",CI="更新日志",TI=void 0;function qd(t){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h2,{children:"1.0.0 (2022-03-17)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["开放 10 篇规约文档，包括：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"7 篇编码规约：HTML 编码规约、CSS 编码规约、JavaScript 编码规约、React 编码规约、Node.js 开发规约、TypeScript 编码规约、Rax 编码规约"}),`
`,n.jsx(e.li,{children:"3 篇工程规约：Git 规约、文档通用规约、更新日志规约"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.0 (2020-12-03)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"开放五个规约配套 npm 包源码，包括：f2elint、eslint-config-ali、stylelint-config-ali、commitlint-config-ali、markdownlint-config-ali"}),`
`]})]})}function Am(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(qd,{...t})}):qd(t)}Am.displayName="MDXContent";const AI=Object.freeze(Object.defineProperty({__proto__:null,default:Am,filepath:NI,frontmatter:TI,title:CI},Symbol.toStringTag,{value:"Module"})),RI="CONTRIBUTING.md",LI="如何参与",DI=void 0;function Wd(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"如何参与"}),`
`,n.jsx(e.h2,{children:"准备工作"}),`
`,n.jsxs(e.p,{children:["本仓库依赖 pnpm 提供的 mono-repo 管理方案 (",n.jsx(e.a,{href:"https://pnpm.io/workspaces",children:"pnpm workspace"}),")。因此你需要",n.jsx(e.a,{href:"https://pnpm.io/installation",children:"安装 pnpm"}),"。"]}),`
`,n.jsx(e.p,{children:"然后克隆本仓库"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`git clone git@github.com:alibaba/f2e-spec.git
cd f2e-spec
pnpm i
`})}),`
`,n.jsx(e.h2,{children:"仓库介绍"}),`
`,n.jsx(e.p,{children:"仓库的主要目录如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`.
├── docs 规约文档
│ ├── coding 编码规约目录
│ └── engineering 工程规约目录
├── packages 配套工具
│ ├── commitlint-config-ali commitlint 配置包
│ ├── eslint-config-ali ESLint 配置包
│ ├── eslint-plugin-ali ESLint plugin，目前未在 ESLint 配置包中默认引入
│ ├── f2elint 一键工具
│ ├── markdownlint-config-ali markdownlint 配置包
│ └── stylelint-config-ali stylelint 配置包
├── CHANGELOG.md
├── CONTRIBUTING.md
└── README.md
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"docs/"})," 目录还未开放。",n.jsx(e.code,{children:"packages/"})," 目录，其中有 6 个 npm 包的源码，分别是 ",n.jsx(e.code,{children:"f2elint"}),"、4 个 ",n.jsx(e.code,{children:"xx-config-ali"})," 以及 ",n.jsx(e.code,{children:"eslint-plugin-ali"}),"。"]}),`
`,n.jsxs(e.p,{children:["4 个 ",n.jsx(e.code,{children:"xx-config-ali"})," 是不同规约对应的 Linter 的规则配置包，它们和规约文档及 Lint 工具对应关系如下："]}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"规约"}),n.jsx(e.th,{children:"Lint 工具"}),n.jsx(e.th,{children:"规则包"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["《JavaScript 编码规约》 "," 《TypeScript 编码规约》 "," 《React 编码规约》 "," 《Rax 编码规约》 "," 《Node.js 开发规约》"]}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://eslint.org/",children:"ESLint"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-config-ali",children:"eslint-config-ali"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"《CSS 编码规约》"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://stylelint.io/",children:"stylelint"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/stylelint-config-ali",children:"stylelint-config-ali"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"《Git 规约》"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://commitlint.js.org/#/",children:"commitlint"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/commitlint-config-ali",children:"commitlint-config-ali"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"《文档通用规约》"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/DavidAnson/markdownlint",children:"markdownlint"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/markdownlint-config-ali",children:"markdownlint-config-ali"})})]})]})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://www.npmjs.com/package/f2elint",children:"f2elint"})," 是封装了 4 个 xx-config-ali 及相关依赖的一键工具。"]}),`
`,n.jsxs(e.p,{children:["你可以到相应的 ",n.jsx(e.code,{children:"xx-config-ali"})," 目录修改和查看具体规则，或者到 ",n.jsx(e.code,{children:"f2elint"})," 目录查看和修改 f2elint 的代码。"]}),`
`,n.jsx(e.h2,{children:"提交 PR"}),`
`,n.jsxs(e.p,{children:["欢迎",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/pulls",children:"提交 PR"}),"，通过后会由仓库 Maintainers 发布 npm 版本。"]}),`
`,n.jsx(e.p,{children:"PR 的标题和 git commit message header 请遵循以下约定："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`<type>[optional scope]: <subject>
`})}),`
`,n.jsx(e.p,{children:"type 用来描述本次改动的类型，可选值及对应含义如下："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"feat: 新增功能"}),`
`,n.jsx(e.li,{children:"fix: 修复 bug"}),`
`,n.jsx(e.li,{children:"docs: 文档相关的改动"}),`
`,n.jsx(e.li,{children:"style: 对代码的格式化改动，代码逻辑并未产生任何变化(例如代码缩进，分号的移除和添加)"}),`
`,n.jsx(e.li,{children:"test: 新增或修改测试用例"}),`
`,n.jsx(e.li,{children:"refactor: 重构代码或其他优化举措"}),`
`,n.jsx(e.li,{children:"chore: 项目工程方面的改动，代码逻辑并未产生任何变化"}),`
`,n.jsx(e.li,{children:"revert: 恢复之前的提交"}),`
`]}),`
`,n.jsx(e.p,{children:"scope 用来描述本次提交所涉及到的改动范围（例如模块、功能或其他任何限定的范围），subject 用来概括和描述本次提交的改动内容。"}),`
`,n.jsx(e.p,{children:"以下示例都是符合规范的："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`fix(f2elint): 修复 xxx 问题
feat(eslint-config-ali): 新增 xxx 规则
docs(stylelint-config-ali): 优化 README
`})}),`
`,n.jsx(e.h2,{children:"版本号规则"}),`
`,n.jsx(e.p,{children:"本仓库中的多个 npm 包独立发布，拥有各自独立的版本和 Changelog。版本号遵循 semver。"}),`
`,n.jsx(e.p,{children:"当 lint 规则变化导致之前不会报 error 的代码出现 error，那么则视为一次 Breaking Change，应该增加版本号的 X 位（14.0.0 -> 15.0.0）。比如下面的例子："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`-    'no-console': 'warn',
+    'no-console': 'error',
`})}),`
`,n.jsx(e.p,{children:"如果 lint 规则变化不会让现有代码报出新的 error，则只需要增加版本 Y 位。比如下面的例子："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`-    'no-console': 'error',
+    'no-console': 'off',
`})}),`
`,n.jsx(e.h2,{children:"发布流程"}),`
`,n.jsx(e.p,{children:"假如你要发布 eslint-config-ali："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`cd packages/eslint-config-ali
pnpm publish
`})}),`
`,n.jsx(e.p,{children:"如果你发布了一个大版本（比如 14.0.0 -> 15.0.0），那么需要检查依赖它的包，比如 f2elint，并发布新版本（同时更新 Changelog）。"})]})}function Rm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Wd,{...t})}):Wd(t)}Rm.displayName="MDXContent";const FI=Object.freeze(Object.defineProperty({__proto__:null,default:Rm,filepath:RI,frontmatter:DI,title:LI},Symbol.toStringTag,{value:"Module"})),MI="README.md",$I="阿里巴巴前端规约及配套工具",BI=void 0;function Vd(t){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"阿里巴巴前端规约及配套工具"}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"https://www.apache.org/licenses/LICENSE-2.0.html",children:n.jsx(e.img,{src:"https://img.shields.io/badge/license-Apache%202-4EB1BA.svg",alt:"License"})})}),`
`,n.jsx(e.h2,{children:"简介"}),`
`,n.jsx(e.p,{children:"「阿里巴巴前端规约」是在阿里经济体内广泛使用的一套前端编码和工程规范，致力于通过统一编码风格、普及最佳实践和代码缺陷检查帮助团队降低协作成本、提升前端项目的可维护性和稳定性。"}),`
`,n.jsxs(e.p,{children:["本项目主要包括「规约文档」和「配套工具」两部分。你可以通过阅读规约文档了解各前端语言、框架及工程规范，并使用 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/f2elint",children:"F2ELint"})," 等配套工具来为项目接入规约检查。"]}),`
`,n.jsx(e.h3,{children:"规约文档"}),`
`,n.jsx(e.p,{children:"规约文档分为编码规约和工程规约两大类，包括："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["编码规约",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/1.html-style-guide.md",children:"HTML 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/2.css-style-guide.md",children:"CSS 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/3.javascript-style-guide.md",children:"JavaScript 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/4.react-style-guide.md",children:"React 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/5.node-style-guide.md",children:"Node.js 开发规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/6.typescript-style-guide.md",children:"TypeScript 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/7.rax-style-guide.md",children:"Rax 编码规约"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["工程规约",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/engineering/1.git.md",children:"Git 规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/engineering/2.doc-writing-practice.md",children:"文档通用规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/engineering/3.doc-changelog.md",children:"更新日志规约"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"配套工具"}),`
`,n.jsx(e.p,{children:"我们引入了多个业界流行的 Linter 作为规约文档的配套工具，并根据规约内容定制了对应的规则包，它们包括："}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"规约"}),n.jsx(e.th,{children:"Lint 工具"}),n.jsx(e.th,{children:"规则包"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsxs(e.td,{children:["《JavaScript 编码规约》 "," 《TypeScript 编码规约》 "," 《React 编码规约》 "," 《Rax 编码规约》 "," 《Node.js 开发规约》"]}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://eslint.org/",children:"ESLint"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-config-ali",children:"eslint-config-ali"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"《CSS 编码规约》"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://stylelint.io/",children:"stylelint"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/stylelint-config-ali",children:"stylelint-config-ali"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"《Git 规约》"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://commitlint.js.org/#/",children:"commitlint"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/commitlint-config-ali",children:"commitlint-config-ali"})})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"《文档通用规约》"}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://github.com/DavidAnson/markdownlint",children:"markdownlint"})}),n.jsx(e.td,{children:n.jsx(e.a,{href:"https://www.npmjs.com/package/markdownlint-config-ali",children:"markdownlint-config-ali"})})]})]})]}),`
`,n.jsx(e.p,{children:"可以看到这些 Linter 和规则包众多且零散，全部安装它们会给项目增加十几个依赖，接入及后续升级成本都比较高。"}),`
`,n.jsxs(e.p,{children:["因此我们封装了 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/f2elint",children:"F2ELint"})," 这个 npm 包，它收敛屏蔽了这些依赖和配置细节，提供简单的 CLI 和 Node.js API，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规约的成本。"]}),`
`,n.jsxs(e.p,{children:["你可以使用 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/f2elint",children:"F2ELint"})," 方便地为项目接入全套规约 Lint，也可以根据需求单独安装 xx-config-ali 和相关 Linter。"]}),`
`,n.jsx(e.h2,{children:"如何参与"}),`
`,n.jsxs(e.p,{children:["非常欢迎大家通过 ",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/issues",children:"Issues"})," 反馈问题和需求，或者通过 ",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/pulls",children:"PRs"})," 参与贡献，请参考 ",n.jsx(e.a,{href:"/CONTRIBUTING.md",children:"CONTRIBUTING.md"}),"。"]}),`
`,n.jsx(e.h2,{children:"贡献者信息"}),`
`,n.jsx(e.p,{children:"文档撰写人员（排名不分先后）：邦彦、尘弦、迟帆、大果、氐宿、法海、姬无、倞羽、连木、林熠、零弌、墨止、牧曈、霂之、年翼、清锐、萨波、释然、双龙、苏青、阎罗、扬炀、洋风、云谦、载天、梓骞"}),`
`,n.jsx(e.p,{children:"文档审阅人员（排名不分先后）：大貘、九十、狼叔、龙归、秦粤、上坡、死月、苏千、吞吞、潕量、艺璇、游鹿、裕波、张挺、知忧"}),`
`,n.jsx(e.p,{children:"工具编写人员（排名不分先后）：尘弦、鹤仙、连木、牧曈、年翼、秦粤、萨波、双龙、扬炀、洋风"}),`
`,n.jsx(e.h2,{children:"引用信息及鸣谢"}),`
`,n.jsx(e.p,{children:"本项目的文档部分参考或引用了许多优秀的业界开源规范、标准化文档和技术官网，它们主要包括："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/airbnb/javascript",children:"Airbnb Style Guide"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://google.github.io/styleguide",children:"Google Style Guide"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://codeguide.co",children:"Code Guide by @mdo"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/ecomfe/spec",children:"ecomfe/spec"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.conventionalcommits.org",children:"Conventional Commits"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md",children:"Conventional Changelog"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web",children:"MDN Web 开发者文档"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://reactjs.org/docs/",children:"React 官方文档"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://developers.google.com/web",children:"谷歌 Web 开发者文档"})}),`
`]}),`
`,n.jsx(e.p,{children:"更详细的引用说明请参见各规约文档的「参考资料」章节。"}),`
`,n.jsx(e.p,{children:"本项目的配套工具使用了多个优秀的 Linter、Formatter 及社区生态，主要包括："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://eslint.org",children:"ESLint"})," 及",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-config-ali#eslint-config-ali",children:"多个 plugin 和 parser"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://stylelint.io/",children:"stylelint"})," 及 ",n.jsx(e.a,{href:"https://github.com/kristerkari/stylelint-scss",children:"stylelint-scss"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://commitlint.js.org/#/",children:"commitlint"})," 及 ",n.jsx(e.a,{href:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits",children:"conventional-changelog-conventionalcommits"})]}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/DavidAnson/markdownlint",children:"markdownlint"})}),`
`]}),`
`,n.jsx(e.p,{children:"在此表示感谢，如有侵权行为，敬请联系我们 :-)"})]})}function Lm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Vd,{...t})}):Vd(t)}Lm.displayName="MDXContent";const zI=Object.freeze(Object.defineProperty({__proto__:null,default:Lm,filepath:MI,frontmatter:BI,title:$I},Symbol.toStringTag,{value:"Module"})),UI="docs/coding/1.html-style-guide.md",HI="HTML 编码规约",qI=void 0;function Gd(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"HTML 编码规约"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注：本篇规约无配套的 Lint 工具包"}),`
`]}),`
`,n.jsx(e.h2,{children:"1 文档"}),`
`,n.jsx(e.h3,{children:"1.1 文档类型"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.1.1【强制】使用 HTML5 DOCTYPE。"}),`
`,n.jsxs(e.p,{children:["在 HTML 文档的开头使用 ",n.jsx(e.code,{children:"<!DOCTYPE html>"})," 来声明文档的 HTML 版本。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad - 非 HTML 5 DOCTYPE -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
</html>

<!-- good -->
<!DOCTYPE html>
<html>
</html>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.2 语言"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.2.1【推荐】指定 ",n.jsx(e.code,{children:"html"})," 标签上的 ",n.jsx(e.code,{children:"lang"})," 属性。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"http://w3c.github.io/html/semantics.html#the-html-element",children:"HTML5 规范"}),"中提到："]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["推荐开发者在 ",n.jsx(e.code,{children:"html"})," 元素上指定 ",n.jsx(e.code,{children:"lang"})," 属性，以指出文档的语言。这有助于读屏、翻译等工具的工作。"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"lang"})," 属性的值由 ",n.jsx(e.code,{children:"language-subtags"})," 组成，在 ",n.jsx(e.a,{href:"http://www.ietf.org/rfc/bcp/bcp47.txt#",children:"BCP47"})," 中定义，",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang",children:"了解更多"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<html lang="zh-CN">
  <!-- ... -->
</html>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.3 元数据"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.3.1【推荐】使用 UTF-8 字符编码。"}),`
`,n.jsx(e.p,{children:"声明一个明确的字符编码，可以让浏览器更快速高效地确定适合网页内容的渲染方式。"}),`
`,n.jsx(e.p,{children:"由于历史原因，不同浏览器采用了不同的字符编码。但对于新业务，如无特殊要求，统一使用 UTF-8 字符编码，以便统一。"}),`
`,n.jsxs(e.p,{children:["在 HTML 中使用 ",n.jsx(e.code,{children:'<meta charset="utf-8" />'})," 声明文档的编码方式："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<head>
  <meta charset="utf-8" />
</head>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3.2【推荐】页面提供给移动设备使用时，需要设置 ",n.jsx(e.a,{href:"https://drafts.csswg.org/css-device-adapt/#viewport-meta",children:"viewport"}),"。"]}),`
`,n.jsxs(e.p,{children:["设置 viewport-fit 设置为“cover”来兼容 iPhone X 的刘海屏，",n.jsx(e.a,{href:"https://webkit.org/blog/7929/designing-websites-for-iphone-x/",children:"了解更多"})," 。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<meta name="viewport" content="width=device-width, minimum-scale=1.0, viewport-fit=cover" />
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.4 资源加载"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[`1.4.1【推荐】引入 CSS 和 JavaScript 时无需指定 type。
根据 HTML5 规范，引入 CSS 和 JavaScript 时通常不需要指明 type，因为 `,n.jsx(e.a,{href:"https://html.spec.whatwg.org/multipage/obsolete.html#attr-style-type",children:"text/css"})," 和 ",n.jsx(e.a,{href:"https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type",children:"text/javascript"})," 分别是他们的默认值。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad -->
<link type="text/css" rel="stylesheet" href="example.css" />
<style type="text/css">
  /* ... */
</style>
<script type="text/javascript" src="example.js"><\/script>

<!-- good -->
<link rel="stylesheet" href="example.css" />
<style>
  /* ... */
</style>
<script src="example.js"><\/script>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.4.2【推荐】在 head 标签内引入 CSS，在 body 结束标签前引入 JS。"}),`
`,n.jsxs(e.p,{children:["在 ",n.jsx(e.code,{children:"<body></body>"})," 中指定外部样式表和嵌入式样式块可能会导致页面的重排和重绘，对页面的渲染造成影响。因此，一般情况下，CSS 应在 ",n.jsx(e.code,{children:"<head></head>"})," 标签里引入，",n.jsx(e.a,{href:"https://developer.yahoo.com/performance/rules.html#css_top",children:"了解更多"}),"。"]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["在 HTTP2（Chrome 浏览器 69 版本之后，Firefox 和 Edge）中可以在 body 中使用 link 标签引入样式文件，但不推荐在 body 中使用 ",n.jsx(e.code,{children:"<style>"})," 标签的内联样式。",n.jsxs(e.strong,{children:[n.jsx(e.code,{children:'<link rel="stylesheet">'})," 将会阻止后续内容的渲染，而不是整个页面"]}),"。"]}),`
`]}),`
`,n.jsxs(e.p,{children:["除了基础库等必须要在 DOM 加载之前运行的 JavaScript 脚本，其他都在靠近 ",n.jsx(e.code,{children:"body"})," 结束标签前引入，以防止出现页面渲染的阻塞，",n.jsx(e.a,{href:"https://developer.yahoo.com/performance/rules.html#js_bottom",children:"了解更多"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad -->
<!DOCTYPE html>
<html>
  <head>
    <script src="mod-a.js"><\/script>
    <script src="jquery.js"><\/script>
  </head>
  <body>
    <style>
      .mod-example {
        padding-left: 15px;
      }
    </style>
  </body>
</html>

<!-- good -->
<!DOCTYPE html>
<html>
  <head>
    <style>
      .mod-example {
        padding-left: 15px;
      }
    </style>
  </head>
  <body>
    ...
    <script src="path/to/my/script.js"><\/script>
  </body>
</html>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.4.3【推荐】外部资源的引用地址跟随页面协议，省略协议部分。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<link rel="stylesheet" href="//g.alicdn.com/lib/style/index-min.css" />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.4.4【推荐】使用 preload 预加载关键资源，",n.jsx(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Preloading_content",children:"了解更多"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<link rel="preload" href="style.css" as="style" />
<link rel="preload" href="main.js" as="script" />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.4.5【推荐】使用 dns-prefetch 和 preconnect 处理 DNS 解析延迟问题，提高网页加载性能，",n.jsx(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/Performance/dns-prefetch",children:"了解更多"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.5 页面标题"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.5.1【强制】页面需要指定 title 标签，有且仅有 1 个。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<head>
  <meta charset="utf-8" />
  <title>淘宝网 - 淘！我喜欢</title>
</head>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2 编码"}),`
`,n.jsx(e.h3,{children:"2.1 缩进"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.1.1【推荐】统一使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company-logo.png" alt="Company" />
    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.2 注释"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.2.1【强制】在 HTML 注释代码中，不允许出现任何敏感信息。"}),`
`,n.jsx(e.p,{children:"常见的敏感信息包括："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"业务相关敏感信息，例如业务规则"}),`
`,n.jsx(e.li,{children:"员工个人隐私信息，例如邮箱、手机、身份证号码"}),`
`,n.jsx(e.li,{children:"AK（accessKey id, accesskey secret）"}),`
`,n.jsx(e.li,{children:"证书、密码"}),`
`,n.jsx(e.li,{children:"内网 IP、URL"}),`
`,n.jsx(e.li,{children:"其他公司、员工相关的内部信息、敏感信息"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.2.2【推荐】单行注释，需在注释内容和注释符之间需留有一个空格，以增强可读性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- 单行注释 -->
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.2.3【推荐】多行注释，注释符单独占一行，注释内容 2 个空格缩进。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!--
  多行注释
  多行注释
-->
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.3 标签"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.3.1【强制】标签名统一使用小写。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad -->
<H1>Hello, world!</H1>

<!-- good -->
<h1>Hello, world!</h1>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.3.2【推荐】不要省略自闭合标签结尾处的斜线，且斜线前需留有一个空格。"}),`
`,n.jsxs(e.p,{children:["虽然 ",n.jsx(e.a,{href:"https://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag",children:"HTML5 规范"})," 中指出结尾的斜线是可选的，但保留它们可以明确表达该标签已闭合的语义，更易于维护和理解。"]}),`
`,n.jsxs(e.p,{children:["同时，在 React 被广泛使用的今天，这与 ",n.jsx(e.a,{href:"https://react-cn.github.io/react/tips/self-closing-tag.html",children:"JSX 的规范"})," 相一致，JSX 中自闭合标签必须保留结尾的斜线。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<img src="images/foo.png" alt="foo">

<!-- good -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<img src="images/foo.png" alt="foo" />
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.4 属性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.4.1【强制】属性值使用双引号，不要使用单引号。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad -->
<link rel='stylesheet' href='example.css'>

<!-- good -->
<link rel="stylesheet" href="example.css" />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.4.2【推荐】不要为 Boolean 属性添加取值。"}),`
`,n.jsxs(e.p,{children:["XHTML 需要每个属性声明取值，但是 HTML5 并不需要。一个元素中 Boolean 属性存在即表示取值 ",n.jsx(e.code,{children:"true"}),"，不存在则表示取值 ",n.jsx(e.code,{children:"false"}),"，",n.jsx(e.a,{href:"http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes",children:"了解更多"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad -->
<input type="text" disabled="disabled" />
<input type="checkbox" value="1" checked="checked" />
<select>
  <option value="1" selected="selected">1</option>
</select>

<!-- good -->
<input type="text" disabled />
<input type="checkbox" value="1" checked />
<select>
  <option value="1" selected>1</option>
</select>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.4.3【推荐】自定义属性的命名：以 data- 为前缀。"}),`
`,n.jsxs(e.p,{children:["建议自定义属性的命名都以 ",n.jsx(e.code,{children:"data-"})," 为前缀，以便区分。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad -->
<a modal="toggle" href="#">
  Example link
</a>

<!-- good -->
<a data-modal="toggle" href="#">
  Example link
</a>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.5 语义化"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.5.1【参考】尽量根据语义使用 HTML 标签。"}),`
`,n.jsxs(e.p,{children:["HTML 标签（更严谨的叫法是 HTML 元素）都有其语义，例如 ",n.jsx(e.code,{children:"p"})," 标签即“paragraphs”用于章节，",n.jsx(e.code,{children:"a"})," 标签即“anchors”用于锚点链接，",n.jsx(e.a,{href:"https://www.w3.org/TR/2018/WD-html53-20181018/fullindex.html#index-elements",children:"了解更多"}),"。"]}),`
`,n.jsxs(e.p,{children:["我们应优先选取符合当下所需语义的标签，这既有助于",n.jsx(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/learn/Accessibility",children:"可访问性（Accessibility）"}),"，也可以在 CSS 加载失败时获得较好的展示效果。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad -->
<div class="list">
  <div class="list-item">1</div>
  <div class="list-item">2</div>
  <div class="list-item">3</div>
</div>

<!-- good -->
<ul class="list">
  <li class="list-item">1</li>
  <li class="list-item">2</li>
  <li class="list-item">3</li>
</ul>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.6 可访问性"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.6.1【参考】注意 HTML 的可访问性（Accessibility）。"}),`
`,n.jsx(e.p,{children:"网页可访问性使网页内容落实“无障碍”，让不同程度或需求的用户可以顺畅的获取网站上的信息。传统上我们认为这只与残疾人士有关，但提升网站的可访问性也可以让其他用户群体受益，比如使用移动设备的人群或低速网络的人群。"}),`
`,n.jsx(e.p,{children:"例如，为 img 标签设置 alt 属性："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- bad - 缺少 alt 属性，无法被无障碍阅读器识别 -->
<img src="hello.jpg" />

<!-- good -->
<img src="hello.jpg" alt="Welcome to visit!" />

<!-- good - 图片无需被无障碍阅读器识别时 -->
<img src="logo.jpg" alt="" />

<!-- good - 图片无需被无障碍阅读器识别时 -->
<img src="logo.jpg" role="presentation" />
`})}),`
`,n.jsxs(e.p,{children:["了解更多 HTML 可访问性的知识，可以阅读",n.jsx(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/learn/Accessibility",children:"这篇 MDN 的文章"}),"。"]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3. 脚手架模板"}),`
`,n.jsx(e.p,{children:"根据以上规约，建议的 HTML 脚手架模板如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="淘宝网 - 亚洲较大的网上交易平台" />
    <meta name="keyword" content="淘宝,掏宝,网上购物,C2C" />
    <meta name="viewport" content="width=device-width, minimum-scale=1.0, viewport-fit=cover" />
    <title>淘宝网</title>
    <link rel="stylesheet" href="example.css" />
  </head>
  <body>
    <div id="container"></div>
    <script src="example.js"><\/script>
  </body>
</html>
`})}),`
`,n.jsx(e.h2,{children:"参考资料"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://codeguide.co",children:"Code Guide by @mdo"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://google.github.io/styleguide/htmlcssguide.html",children:"Google HTML/CSS Style Guide"})}),`
`]})]})}function Dm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Gd,{...t})}):Gd(t)}Dm.displayName="MDXContent";const WI=Object.freeze(Object.defineProperty({__proto__:null,default:Dm,filepath:UI,frontmatter:qI,title:HI},Symbol.toStringTag,{value:"Module"})),VI="docs/coding/2.css-style-guide.md",GI="CSS 编码规约",XI=void 0;function Xd(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"CSS 编码规约"}),`
`,n.jsxs(e.p,{children:["本规约涉及 CSS 及其预编译语言（Sass、Less）的编码风格和最佳实践，部分规则可通过 ",n.jsx(e.a,{href:"https://stylelint.io/",children:"stylelint"})," 工具落地。"]}),`
`,n.jsx(e.h2,{children:"1 CSS"}),`
`,n.jsx(e.h3,{children:"1.1 编码风格"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://img.alicdn.com/tfs/TB1TOLiTpP7gK0jSZFjXXc5aXXa-753-427.svg",alt:"示例代码标注图"})}),`
`,n.jsx(e.p,{children:"上图是一张符合规约要求编码风格的速览图，详细规则如下："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.1【强制】所有声明都应该以分号结尾，不能省略。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon",children:"declaration-block-trailing-semicolon"})]}),`
`,n.jsx(e.p,{children:"虽然 CSS 语法中最后一条声明的分号是可选的，但是使用分号可以增加代码的一致性和易用性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  margin-top: 10px;
  padding-left: 15px
}

/* good */
.selector {
  margin-top: 10px;
  padding-left: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.2【推荐】使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/indentation",children:"indentation"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
    padding-left: 15px;
}

/* good */
.selector {
  padding-left: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.3【推荐】选择器和 ",n.jsx(e.code,{children:"{"})," 之间保留一个空格。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/block-opening-brace-space-before",children:"block-opening-brace-space-before"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector{
  padding-left: 15px;
}

/* good */
.selector {
  padding-left: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.4【推荐】属性名和 ",n.jsx(e.code,{children:":"})," 之前无空格，",n.jsx(e.code,{children:":"})," 和属性值之间保留一个空格。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/declaration-colon-space-after",children:"declaration-colon-space-after"})," ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/declaration-colon-space-before",children:"declaration-colon-space-before"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  margin-top : 10px;
  padding-left:15px;
}

/* good */
.selector {
  margin-top: 10px;
  padding-left: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.5【推荐】",n.jsx(e.code,{children:">"}),"、",n.jsx(e.code,{children:"+"}),"、",n.jsx(e.code,{children:"~"})," 、",n.jsx(e.code,{children:"||"})," 等组合器前后各保留一个空格。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/selector-combinator-space-before",children:"selector-combinator-space-before"})," ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/selector-combinator-space-after",children:"selector-combinator-space-after"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector>.children {
  padding-left: 15px;
}
.selector+.brother {
  padding-left: 15px;
}

/* good */
.selector > .children {
  padding-left: 15px;
}
.selector + .brother {
  padding-left: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.6【推荐】在使用 ",n.jsx(e.code,{children:","})," 分隔的属性值中，",n.jsx(e.code,{children:","})," 之后保留一个空格。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/value-list-comma-space-after",children:"value-list-comma-space-after"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  background-color: rgba(0,0,0,0.5);
  box-shadow: 0px 1px 2px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.5);
}

/* good */
.selector {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.5);
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.7【推荐】注释内容和注释符之间留有一个空格。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/comment-whitespace-inside",children:"comment-whitespace-inside"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  /*comment*/
  /*  comment  */
  /**
   *comment
   */
  padding-left: 15px;
}

/* good */
.selector {
  /* comment */
  /**
   * comment
   */
  padding-left: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.8【推荐】声明块的右大括号 ",n.jsx(e.code,{children:"}"})," 应单独成行。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  padding-left: 15px;}

/* good */
.selector {
  padding-left: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.9【推荐】属性声明应单独成行。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations",children:"declaration-block-single-line-max-declarations"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  padding-left: 15px;  margin-left: 10px;
}

/* good */
.selector {
  padding-left: 15px;
  margin-left: 10px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.10【推荐】单行代码最多不要超过 100 个字符。 stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/max-line-length",children:"max-line-length"})," 除了以下两种情况："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/url",children:n.jsx(e.code,{children:"url()"})})," 函数时"]}),`
`,n.jsx(e.li,{children:"CSS 属性值本身无法换行时，即属性值内无空格或逗号时"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.04, rgb(88, 94, 124)), color-stop(0.52, rgb(115, 123, 162)));

/* good */
background-image: -webkit-gradient(
  linear,
  left bottom,
  left top,
  color-stop(0.04, rgb(88, 94, 124)),
  color-stop(0.52, rgb(115, 123, 162))
);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.11【参考】使用多个选择器时，每个选择器应该单独成行。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/selector-list-comma-newline-after",children:"selector-list-comma-newline-after"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector, .selector-secondary, .selector-third {
  padding: 15px;
  margin-bottom: 15px;
}

/* good */
.selector,
.selector-secondary,
.selector-third {
  padding: 15px;
  margin-bottom: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.1.12【参考】声明块内只有一条语句时，也应该写成多行。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector { padding-left: 15px; }

/* good */
.selector {
  padding-left: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.13【参考】注释行上方需留有一行空行，除非上一行是注释或块的顶部。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/comment-empty-line-before",children:"comment-empty-line-before"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {

  /* comment */
  padding-left: 15px;
  /* comment */
  padding-right: 15px;
}

/* good */
.selector {
  /* comment */
  padding-left: 15px;

  /* comment */
  padding-right: 15px;
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.2 选择器"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.2.1【参考】不要使用 id 选择器。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/selector-max-id",children:"selector-max-id"})]}),`
`,n.jsxs(e.p,{children:["id 会带来过高的",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",children:"选择器优先级"}),"，使得后续很难进行样式覆盖（继而引发使用 ",n.jsx(e.code,{children:"!important"})," 覆盖样式的恶性循环）。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.normal {
  padding: 10px;
}
#special {
  padding: 15px;
}

/* good */
.normal {
  padding: 10px;
}
.normal.special {
  padding: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.2.2【参考】属性选择器的值始终用双引号包裹。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/selector-attribute-quotes",children:"selector-attribute-quotes"})]}),`
`,n.jsxs(e.p,{children:["属性选择器的值的引号只有在",n.jsx(e.a,{href:"https://mathiasbynens.be/notes/unquoted-attribute-values#css",children:"某些情况下"}),"可以省略。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
input[type=text] {
  height: 20px;
}

/* good */
input[type="text"] {
  height: 20px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.2.3【参考】使用 CSS 选择器时，应注意以下性能问题："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"使用 class 而不是原生元素标签"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["减少在经常出现的组件中使用个别属性选择器（如 ",n.jsx(e.code,{children:'[class^="..."]'}),"）"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"控制选择器的长度，每个组合选择器内的条目尽量不超过 3 个"}),`
`]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"只从效率的角度来看，CSS 选择器从高（高效率）到低（低效率）的顺序是："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["ID 选择器， 比如 ",n.jsx(e.code,{children:"#header"})]}),`
`,n.jsxs(e.li,{children:["类选择器，比如 ",n.jsx(e.code,{children:".header"})]}),`
`,n.jsxs(e.li,{children:["标签（元素）选择器，比如 ",n.jsx(e.code,{children:"div"})]}),`
`,n.jsxs(e.li,{children:["相邻兄弟选择器，比如 ",n.jsx(e.code,{children:"h2 + p"})]}),`
`,n.jsxs(e.li,{children:["子选择器，比如 ",n.jsx(e.code,{children:"ul > li"})]}),`
`,n.jsxs(e.li,{children:["后代选择器，比如 ",n.jsx(e.code,{children:"ul a"})]}),`
`,n.jsxs(e.li,{children:["通配符选择器，比如 ",n.jsx(e.code,{children:"*"})]}),`
`,n.jsxs(e.li,{children:["属性选择器，比如 ",n.jsx(e.code,{children:'[class^="grid-"]'})]}),`
`,n.jsxs(e.li,{children:["伪类（伪元素）选择器，比如 ",n.jsx(e.code,{children:"a:hover"}),"、",n.jsx(e.code,{children:"a::before"})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.3 属性和属性值"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3.1【推荐】使用尽可能短的十六进制值。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/color-hex-length",children:"color-hex-length"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  color: #ffffff;
}

/* good */
.selector {
  color: #fff;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.3.2【推荐】不要使用 !important 重写样式。"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3.3【推荐】十六进制值统一使用小写字母（小写字母更容易分辨）。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/color-hex-case",children:"color-hex-case"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  color: #FEFEFE;
}

/* good */
.selector {
  color: #fefefe;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3.4【推荐】长度值为 0 时，省略掉长度单位。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/length-zero-no-unit",children:"length-zero-no-unit"})]}),`
`,n.jsx(e.p,{children:"在 CSS 中，长度值为 0 时，它的单位是可选的（长度单位包括：em, ex, ch, vw, vh, cm, mm, in, pt, pc, px, rem, vmin, and vmax）。省略长度单位可以使代码更简洁："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  margin-top: 0px;
  font-size: 0em;
}

/* good */
.selector {
  margin-top: 0;
  font-size: 0;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3.5【参考】保留小数点前的 0。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/number-leading-zero",children:"number-leading-zero"})]}),`
`,n.jsx(e.p,{children:"在 CSS 中，大于 -1 小于 1 的小数，小数点前的 0 可以省略："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  opacity: .5;
  left: -.5px;
}

/* good */
.selector {
  opacity: 0.5;
  left: -0.5px;
}
`})}),`
`,n.jsx(e.p,{children:"对于是否省略小数点前的 0，业界存在争议："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"省略 0 的好处是：代码更简洁，可以减少一个字符"}),`
`,n.jsx(e.li,{children:"不省略的好处是：代码可读性更好、一致性更强"}),`
`]}),`
`,n.jsx(e.p,{children:"你可选择自己倾向的风格，在代码中风格统一即可，要么都省略，要么都保留。"}),`
`,n.jsx(e.p,{children:"我们推荐保留 0，因为当今很多 CSS 压缩工具会在压缩时帮我们去掉 0，不存在多占用一个字符的问题。保留 0 能增强代码的可读性和一致性。"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.3.6【参考】属性声明的顺序。"}),`
`,n.jsx(e.p,{children:"相关联的属性声明最好写成一组，并按如下顺序排序："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"定位"}),"：如 position、left、right、top、bottom、z-index"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"盒模型"}),"：如 display、float、width、height、margin、padding、border"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"文字排版"}),"：如 font、color、line-height、text-align"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"外观"}),"：如  background"]}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"其他属性"})}),`
`]}),`
`,n.jsx(e.p,{children:"「定位」和「盒模型」放在最前面，是因为它们决定了元素的布局、位置和尺寸。「定位」排在「盒模型」之前，是由于「定位」属性可以让元素脱离正常文本流，从而使「盒模型」属性失效。"}),`
`,n.jsx(e.p,{children:"除了「定位」和「盒模型」，其他属性都只在元素内部起作用，不会对前两类属性的结果产生影响，因此放在后面。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.declaration-order {
  /* 定位 */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* 盒模型 */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  border: 1px solid #e5e5e5;

  /* 排版 */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  color: #333;
  text-align: center;

  /* 外观 */
  background-color: #f5f5f5;

  /* 其他 */
  opacity: 1;
}
`})}),`
`,n.jsx(e.p,{children:"更多 CSS 属性顺序参考如下列表："}),`
`,n.jsxs(e.table,{children:[n.jsx(e.thead,{children:n.jsxs(e.tr,{children:[n.jsx(e.th,{children:"第一组"}),n.jsx(e.th,{children:"第二组"}),n.jsx(e.th,{children:"第三组"}),n.jsx(e.th,{children:"第四组"}),n.jsx(e.th,{children:"第五组"}),n.jsx(e.th,{children:"第六组"}),n.jsx(e.th,{children:"第七组"})]})}),n.jsxs(e.tbody,{children:[n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"content"}),n.jsx(e.td,{children:"box-sizing"}),n.jsx(e.td,{children:"background*"}),n.jsx(e.td,{children:"font*"}),n.jsx(e.td,{children:"opacity"}),n.jsx(e.td,{children:"unicode-bidi"}),n.jsx(e.td,{children:"transition*"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"position"}),n.jsx(e.td,{children:"*width"}),n.jsx(e.td,{children:"color"}),n.jsx(e.td,{children:"src"}),n.jsx(e.td,{children:"visibility"}),n.jsx(e.td,{children:"direction"}),n.jsx(e.td,{children:"transform*"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"top"}),n.jsx(e.td,{children:"*height"}),n.jsx(e.td,{children:"box-decoration-break"}),n.jsx(e.td,{children:"line-height"}),n.jsx(e.td,{children:"filter"}),n.jsx(e.td,{children:"columns"}),n.jsx(e.td,{children:"animation*"})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"right"}),n.jsx(e.td,{children:"margin*"}),n.jsx(e.td,{children:"box-shadow"}),n.jsx(e.td,{children:"letter-spacing"}),n.jsx(e.td,{children:"resize"}),n.jsx(e.td,{children:"column-*"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"bottom"}),n.jsx(e.td,{children:"padding*"}),n.jsx(e.td,{children:"outline*"}),n.jsx(e.td,{children:"quotes"}),n.jsx(e.td,{children:"cursor"}),n.jsx(e.td,{children:"break-*"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"left"}),n.jsx(e.td,{children:"border*"}),n.jsx(e.td,{children:"table-layout"}),n.jsx(e.td,{children:"counter-*"}),n.jsx(e.td,{children:"pointer-events"}),n.jsx(e.td,{children:"page-break-*"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"z-index"}),n.jsx(e.td,{}),n.jsx(e.td,{children:"caption-side"}),n.jsx(e.td,{children:"-ms-writing-mode"}),n.jsx(e.td,{children:"user-select"}),n.jsx(e.td,{children:"orphans"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"display"}),n.jsx(e.td,{}),n.jsx(e.td,{children:"empty-cells"}),n.jsx(e.td,{children:"text-*"}),n.jsx(e.td,{}),n.jsx(e.td,{children:"widows"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"vertical-align"}),n.jsx(e.td,{}),n.jsx(e.td,{children:"list-style*"}),n.jsx(e.td,{children:"white-space"}),n.jsx(e.td,{}),n.jsx(e.td,{children:"*zoom"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"flex*"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{children:"word-*"}),n.jsx(e.td,{}),n.jsx(e.td,{children:"orientation"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"grid*"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{children:"overflow-wrap"}),n.jsx(e.td,{}),n.jsx(e.td,{children:"fill"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"*gap"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{children:"tab-size"}),n.jsx(e.td,{}),n.jsx(e.td,{children:"stroke"}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"align-*"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{children:"hyphens"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"justify-*"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{children:"interpolation-mode"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"order"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"float"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"clear"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"object-fit"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"overflow*"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{})]}),n.jsxs(e.tr,{children:[n.jsx(e.td,{children:"clip"}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{}),n.jsx(e.td,{})]})]})]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3.7【参考】适时使用简写属性。stylelint: ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides",children:"declaration-block-no-shorthand-property-overrides"})," ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties",children:"declaration-block-no-redundant-longhand-properties"})]}),`
`,n.jsxs(e.p,{children:["常见的",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties",children:"简写属性"}),"包括："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"font"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"background"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"padding"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"margin"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"border"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"border-radius"})}),`
`]}),`
`,n.jsx(e.p,{children:"使用简写属性时，需要显式地设置所有值。我们应该在真正需要设置所有值或大多数值时才使用简写属性。"}),`
`,n.jsx(e.p,{children:"如果只是想设置某一个属性，则不应该使用简写属性："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  margin: 0 0 10px;
}

/* good */
.selector {
  margin-bottom: 10px;
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.4 其他"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.4.1【推荐】不要使用 CSS 的 @import。"}),`
`,n.jsxs(e.p,{children:["与 ",n.jsx(e.code,{children:"<link>"})," 相比，",n.jsx(e.code,{children:"@import"})," 会在关键渲染路径上增加更多的往返（即关键路径的深度变长），这样会导致浏览器处理 CSS 文件速度变慢，因此我们应该避免使用 ",n.jsx(e.code,{children:"@import"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`<!-- bad -->
<style>
  @import url("more.css");
</style>

<!-- good -->
<link rel="stylesheet" href="more.css">
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2 Sass 和 Less"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"对于 CSS 而言，可以在新项目中尝试放弃使用 Sass、Less 这样的处理器语言，因为："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"这些处理器语言是在一定历史条件下的产物，虽然这些产物在一定程度上提高开发者的开发效率，但不同的处理器语言也同时增加了项目的维护成本（特别是多人协作，多团队协作的时候）。"}),`
`,n.jsx(e.li,{children:"更建议使用 PostCSS 处理器，它类似于 CSS 中的 Babel，不但具备 Sass 和 Less 的功能，而且社区繁荣，同时还可以根据自己的需求扩展相关的插件。"}),`
`,n.jsx(e.li,{children:"随着 CSS 的一些新特性出现，Sass 和 Less 以往的优势也会慢慢消失。"}),`
`]}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.1【推荐】四则运算符两侧各保留一个空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  width: $default-width/2;
}

/* good */
.selector {
  width: $default-width / 2;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2【推荐】Mixin 名称和括号 ",n.jsx(e.code,{children:"()"})," 间无空格，在拥有多个参数的表达式中， ",n.jsx(e.code,{children:","})," 之前无空格，",n.jsx(e.code,{children:","})," 之后保留一个空格："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`/* bad */
.selector {
  .size(30px,20px);
  .clearfix ();
}

/* good */
.selector {
  .size(30px, 20px);
  .clearfix();
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.3【推荐】按如下顺序组织 Sass / Less 代码："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@import"})," 语句"]}),`
`,n.jsx(e.li,{children:"全局变量声明"}),`
`,n.jsx(e.li,{children:"样式声明"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@import 'common/theme.scss';

$color-red: #f0f0f0;

.selector {
  color: $color-red;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.4【推荐】对于 Sass 和 Less，块内的属性声明按如下顺序排序："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"标准属性声明：除了 mixin 调用、extend 子级选择器的声明，其他属性声明的顺序与「属性声明的顺序」章节的规则一致"}),`
`,n.jsxs(e.li,{children:["mixin 调用：Sass 的 ",n.jsx(e.code,{children:"@include"})," 声明、Less 的 mixin 调用"]}),`
`,n.jsx(e.li,{children:"嵌套的子级选择器：将嵌套的选择器放到块的末尾，并且在其上方保留一行空行"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.btn {
  background: #ccc;
  font-weight: bold;
  @include transition(background 0.5s ease);

  .icon {
    margin-right: 10px;
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.5【推荐】嵌套选择器的深度不要超过 3 层，否则可能带来一些副作用："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"与 HTML 结构强耦合，难以复用"}),`
`,n.jsxs(e.li,{children:["过高的",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity",children:"选择器优先级"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.container {
  .header {
    .user-name {
      // STOP！不要再嵌套更深选择器
    }
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.6【推荐】可以使用双斜杠注释。但需要注意的是，编译为 CSS 后，代码中的双斜杠注释会被删除，而 ",n.jsx(e.code,{children:"/* */"})," 会被保留。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`// 单行注释
.selector-a {
  padding-left: 15px;
}

/*
 * 多行注释
 * 多行注释
 */
.selector-b {
  margin-left: 15px;
}
`})}),`
`,n.jsx(e.p,{children:"编译为 CSS 后，双斜杠注释会被删除："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`.selector-a {
  padding-left: 15px;
}

/*
 * 多行注释
 * 多行注释
 */
.selector-b {
  margin-left: 15px;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.7【推荐】使用 Mixin (@mixin 和 @include 指令) 来让代码遵循 DRY 原则（Don't Repeat Yourself）、增加抽象性和降低复杂度。"}),`
`,n.jsx(e.p,{children:"应避免使用 @extend 指令，它不够直观且具有潜在风险，尤其是在嵌套选择器中。即使继承的是顶层选择器，如果选择器的顺序发生变化，也可能引起问题（比如，如果它们存在于其他文件，而加载顺序发生了变化）。"}),`
`,n.jsx(e.p,{children:"Extend  相比 Mixin 的好处是，如果无参数的 mixin 被多处使用，编译后会输出多段重复的代码。这时如果使用 @extend，可以避免这个问题。但是 gzip 等压缩工具就可以解决重复代码的问题，因此大多数情况下，你只需要使用 mixin 来让代码符合 DRY 原则。"}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"配套工具"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.npmjs.com/package/stylelint-config-ali",children:"stylelint-config-ali"}),"：本规约配套的 ",n.jsx(e.a,{href:"https://stylelint.io/",children:"stylelint"})," 规则包"]}),`
`]}),`
`,n.jsx(e.h2,{children:"参考资料"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://codeguide.co",children:"Code Guide by @mdo"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/airbnb/css",children:"Airbnb CSS / Sass Styleguide"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://google.github.io/styleguide/htmlcssguide.html",children:"Google HTML/CSS Style Guide"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/ecomfe/spec/blob/master/css-style-guide.md",children:"spec css-style-guide"})}),`
`]})]})}function Fm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Xd,{...t})}):Xd(t)}Fm.displayName="MDXContent";const JI=Object.freeze(Object.defineProperty({__proto__:null,default:Fm,filepath:VI,frontmatter:XI,title:GI},Symbol.toStringTag,{value:"Module"})),KI="docs/coding/3.javascript-style-guide.md",QI="JavaScript 编码规约",YI=void 0;function Jd(t){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"JavaScript 编码规约"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsx(e.p,{children:"JavaScript 编码规约主要包含编码风格、语言特性、注释、命名、配套工具等几个部分。本规约面向的 ECMAScript 语言版本是 ES6+，并提供了「关于 ES5」章节供仍在使用 ES5 的开发者查阅。"}),`
`,n.jsx(e.h2,{children:"1 编码风格"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://img.alicdn.com/tfs/TB1IaB4hIVl614jSZKPXXaGjpXa-772-484.svg",alt:"示例代码标注图"})}),`
`,n.jsx(e.p,{children:"上图是一张符合规约要求编码风格的速览图，详细规则如下："}),`
`,n.jsx(e.h3,{children:"1.1 缩进"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.1【强制】使用 2 个空格缩进。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/indent",children:"indent"})]}),`
`,n.jsx(e.p,{children:"统一使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function foo() {
∙∙∙∙let name;
}

// good
function foo() {
∙∙let name;
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.2 分号"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.2.1【强制】使用分号。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/semi",children:"semi"})]}),`
`,n.jsx(e.p,{children:"统一以分号结束语句，可以避免 JS 引擎自动分号插入机制的怪异行为，在语义上也更加明确。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["自动分号插入机制（即 ",n.jsx(e.a,{href:"https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion",children:"Automatic Semicolon Insertion"}),"，简称 ASI） 是当 JS 遇到不带分号的语句时判断是否自动添加分号的机制，它在个别情况下的行为比较怪异，可能导致意想不到的效果。此外随着 JS 新特性的增加，异常的情况可能变得更加复杂。"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 导致 Uncaught ReferenceError 报错
const luke = {}
const leia = {}
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader'
})

// good
const luke = {};
const leia = {};
[luke, leia].forEach((jedi) => {
  jedi.father = 'vader';
});

// bad - 导致 Uncaught ReferenceError 报错
const reaction = "No! That's impossible!"
(async function meanwhileOnTheFalcon() {
}())

// good
const reaction = "No! That's impossible!";
(async function meanwhileOnTheFalcon() {
}());

// bad - 函数将返回 \`undefined\` 而不是换行后的值
function foo() {
  return
    'Result want to be returned'
}

// good
function foo() {
  return 'Result want to be returned';
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.3 逗号"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3.1【强制】对于逗号分隔的多行结构，不使用行首逗号。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/comma-style",children:"comma-style"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const story = [
    once
  , upon
  , aTime
];

// good
const story = [
  once,
  upon,
  aTime,
];

// bad
const hero = {
    firstName: 'Ada'
  , lastName: 'Lovelace'
  , superPower: 'computers'
};

// good
const hero = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  superPower: 'computers',
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3.2【强制】对于逗号分隔的多行结构，始终加上最后一个逗号。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/comma-dangle",children:"comma-dangle"})]}),`
`,n.jsx(e.p,{children:"这样可以使增删行更加容易，也会使 git diffs 更清晰。Babel 等编译器会在编译后的代码里帮我们去掉最后额外的逗号，因此不必担心在旧浏览器中的问题。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-diff",children:`// bad - 没有结尾逗号时，新增一行的 git diff 示例
const hero = {
     firstName: 'Florence',
-    lastName: 'Nightingale'
+    lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing']
};

// good - 有结尾逗号时，新增一行的 git diff 示例
const hero = {
     firstName: 'Florence',
     lastName: 'Nightingale',
+    inventorOf: ['coxcomb chart', 'modern nursing'],
};
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const hero = {
  firstName: 'Dana',
  lastName: 'Scully'
};

const heroes = [
  'Batman',
  'Superman'
];

function createHero(
  firstName,
  lastName,
  inventorOf
) {
  // ...
}

createHero(
  firstName,
  lastName,
  inventorOf
);

// good
const hero = {
  firstName: 'Dana',
  lastName: 'Scully',
};

const heroes = [
  'Batman',
  'Superman',
];

function createHero(
  firstName,
  lastName,
  inventorOf,
) {
  // ...
}

createHero(
  firstName,
  lastName,
  inventorOf,
);

// good - 需注意\b，使用扩展运算符的元素后面不能加逗号
function createHero(
  firstName,
  lastName,
  inventorOf,
  ...heroArgs
) {
  // ...
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.4 块"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["术语解释：",n.jsx(e.strong,{children:"块（block）"})," 可以理解为类、函数、控制语句等由大括号 ",n.jsx(e.code,{children:"{}"})," 分隔的代码块状结构，由一对大括号界定，用于组合若干条语句 ",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block",children:"了解更多"})]}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.4.1【推荐】始终使用大括号包裹代码块。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/curly",children:"curly"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/nonblock-statement-body-position",children:"nonblock-statement-body-position"})]}),`
`,n.jsx(e.p,{children:"多行代码块必须用大括号包裹："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
if (foo)
  bar();
  baz(); // 这一行并不在 if 语句里

// good
if (foo) {
  bar();
  baz();
}
`})}),`
`,n.jsx(e.p,{children:"代码块只有一条语句时，可以省略大括号，并跟控制语句写在同一行。但出于一致性和可读性考虑，不推荐这样做："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
if (foo)
  return false;

// bad - 允许但不推荐
if (foo) return false;

// good
if (foo) {
  return false;
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{children:"1.4.2 大括号换行风格"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.4.2.1【强制】对于非空代码块，采用 Egyptian Brackets 风格。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/brace-style",children:"brace-style"})]}),`
`,n.jsxs(e.p,{children:["对于非空的代码块，大括号的换行方式采用 ",n.jsx(e.a,{href:"https://blog.codinghorror.com/new-programming-jargon/",children:"Egyptian Brackets"})," 风格，具体规则如下："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["左大括号 ",n.jsx(e.code,{children:"{"})," 前面不换行，后面换行"]}),`
`,n.jsxs(e.li,{children:["右大括号 ",n.jsx(e.code,{children:"}"})," 前面换行"]}),`
`,n.jsxs(e.li,{children:["右大括号 ",n.jsx(e.code,{children:"}"})," 后面是否换行有两种情况：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"}"})," 终结了整个语句，如条件语句、函数或类的主体，则需要换行"]}),`
`,n.jsxs(e.li,{children:["如果 ",n.jsx(e.code,{children:"}"})," 后面存在 ",n.jsx(e.code,{children:"else"}),"、",n.jsx(e.code,{children:"catch"}),"、",n.jsx(e.code,{children:"while"})," 等语句，或存在逗号、分号、右小括号（",n.jsx(e.code,{children:")"}),"），则不需要换行"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - else 应与 if 的 } 放在同一行
if (foo) {
  thing1();
}
else
  thing2();
}

// good
if (foo) {
  thing1();
} else {
  thing2();
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.4.2.2【参考】对于空代码块，可以将大括号直接闭合。"}),`
`,n.jsxs(e.p,{children:["对于空的代码块，且不在类似 ",n.jsx(e.code,{children:"if..else.."})," 或 ",n.jsx(e.code,{children:"try..catch..finally.."})," 的多块结构中时，可以立即将大括号闭合："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// good
function doNothing() {}
`})}),`
`,n.jsx(e.p,{children:"但如果空代码块在多块结构中，仍建议按上一条非空块的 Egyptian Brackets 风格换行："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
if (condition) {
  // …
} else if (otherCondition) {} else {
  // …
}

// good
if (condition) {
  // …
} else if (otherCondition) {
} else {
  // …
}

// bad
try {
  // …
} catch (e) {}

// good
try {
  // …
} catch (e) {
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.4.3【强制】不要使用空代码块。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-empty",children:"no-empty"})]}),`
`,n.jsx(e.p,{children:"不要让代码中出现空代码块，这会使阅读者感到困惑。如果必须使用空块，需在块内写明注释。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
if (condition) {
  thing1();
} else {
}

// good
if (condition) {
  thing1();
} else {
  // TODO I haven’t determined what to do.
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.5 空格"}),`
`,n.jsx(e.p,{children:"合理并一致地使用空格有助于提升代码的可读性和可维护性。具体来说，我们采用如下的空格风格："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.5.1【强制】空格风格。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/space-before-blocks",children:"space-before-blocks"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/keyword-spacing",children:"keyword-spacing"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/space-in-parens",children:"space-in-parens"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/array-bracket-spacing",children:"array-bracket-spacing"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/object-curly-spacing",children:"object-curly-spacing"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/space-infix-ops",children:"space-infix-ops"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/key-spacing",children:"key-spacing"})]}),`
`,n.jsxs(e.p,{children:["块的左大括号 ",n.jsx(e.code,{children:"{"})," 前有一个空格："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function test(){
  console.log('test');
}

// good
function test() {
  console.log('test');
}

// bad
dog.set('attr',{
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});

// good
dog.set('attr', {
  age: '1 year',
  breed: 'Bernese Mountain Dog',
});
`})}),`
`,n.jsxs(e.p,{children:["控制语句（",n.jsx(e.code,{children:"if"}),"、",n.jsx(e.code,{children:"while"})," 等）的左小括号 ",n.jsx(e.code,{children:"("})," 前有一个空格："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}
`})}),`
`,n.jsx(e.p,{children:"声明函数时，函数名和参数列表之间无空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
`})}),`
`,n.jsx(e.p,{children:"小括号内部两侧无空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function bar( foo ) {
  return foo;
}

// good
function bar(foo) {
  return foo;
}

// bad
if ( foo ) {
  console.log( foo );
}

// good
if (foo) {
  console.log(foo);
}
`})}),`
`,n.jsx(e.p,{children:"方括号内部两侧无空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);
`})}),`
`,n.jsx(e.p,{children:"大括号内部两侧有空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent' };
`})}),`
`,n.jsx(e.p,{children:"运算符两侧有空格，除了一元运算符："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const x=y+5;

// good
const x = y + 5;

// bad
const isRight = result === 0? false: true;

// good
const isRight = result === 0 ? false : true;

// bad - 一元运算符与操作对象间不应有空格
const x = ! y;

// good
const x = !y;
`})}),`
`,n.jsx(e.p,{children:"定义对象字面量时， key, value 之间有且只有一个空格，不允许所谓的「水平对齐」："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
{
  a:            'short',
  looooongname: 'long',
}

// bad
{
  a           : 'short',
  looooongname: 'long',
}

// good
{
  a: 'short',
  looooongname: 'long',
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.6 空行"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.6.1【推荐】在文件末尾保留一行空行。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/eol-last",children:"eol-last"})]}),`
`,n.jsx(e.p,{children:"在非空文件中保留拖尾换行是一种常见的 UNIX 风格。它的好处同输出文件到终端一样，方便在串联和追加文件时不会打断 shell 的提示。"}),`
`,n.jsx(e.p,{children:"我们统一在文件末尾保留一行空行，即用一个换行符结束文件："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 文件末尾未保留换行符
import { foo } from './Foo';
// ...
export default foo;

// bad - 文件末尾保留了2个换行符
import { foo } from './Foo';
// ...
export default foo;↵
↵

// good
import { foo } from './Foo';
// ...
export default foo;↵
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.6.2【强制】块\b的开始和结束不能是空行。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/padded-blocks",children:"padded-blocks"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function bar() {

  console.log(foo);

}

// good
function bar() {
  console.log(foo);
}

// bad
if (baz) {

  console.log(qux);
} else {
  console.log(foo);

}

// good
if (baz) {
  console.log(qux);
} else {
  console.log(foo);
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.6.3【参考】在块末和新语句间插入一个空行。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;

// bad
const obj = {
  foo() {
  },
  bar() {
  },
};
return obj;

// good
const obj = {
  foo() {
  },

  bar() {
  },
};

return obj;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.7 最大字符数和最大行数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.7.1【推荐】单行最大字符数：100。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/max-len",children:"max-len"})]}),`
`,n.jsx(e.p,{children:"过长的单行代码不易阅读和维护，需要进行合理换行。"}),`
`,n.jsx(e.p,{children:"我们推荐单行代码最多不要超过 100 个字符，除了以下两种情况："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"字符串和模板字符串"}),`
`,n.jsx(e.li,{children:"正则表达式"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

// good
const foo = jsonData
  && jsonData.foo
  && jsonData.foo.bar
  && jsonData.foo.bar.baz
  && jsonData.foo.bar.baz.quux
  && jsonData.foo.bar.baz.quux.xyzzy;

// bad
$.ajax({ method: 'POST', url: 'https://foo.com/', data: { name: 'John' } }).done(() => console.log('Congratulations!')).fail(() => console.log('You have failed this city.'));

// good
$.ajax({
  method: 'POST',
  url: 'https://foo.com/',
  data: { name: 'John' },
})
  .done(() => console.log('Congratulations!'))
  .fail(() => console.log('You have failed this city.'));
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.7.2【参考】文件最大行数：1000。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/max-lines",children:"max-lines"})]}),`
`,n.jsx(e.p,{children:"过长的文件不易阅读和维护，最好对其进行拆分。"}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.7.3【参考】函数最大行数：80。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/max-lines-per-function",children:"max-lines-per-function"})]}),`
`,n.jsx(e.p,{children:"过长的函数不易阅读和维护，最好对其进行拆分。"}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2 语言特性"}),`
`,n.jsx(e.h3,{children:"2.1 变量声明"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.1【强制】使用 const 或 let 声明变量。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-var",children:"no-var"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-undef",children:"no-undef"})]}),`
`,n.jsxs(e.p,{children:["从 ES6 开始，可以使用 ",n.jsx(e.code,{children:"let"})," 和 ",n.jsx(e.code,{children:"const"})," 关键字在块级作用域下声明变量。块级作用域在很多其他编程语言中都有使用，这样声明的变量不会污染全局命名空间。"]}),`
`,n.jsxs(e.p,{children:["不要使用 ",n.jsx(e.code,{children:"var"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
var foo = 'foo';
var bar;

// good
const foo = 'foo';
let bar;
`})}),`
`,n.jsx(e.p,{children:"更不要什么都不用（这将产生全局变量，从而污染全局命名空间）："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
foo = 'foo';

// good
const foo = 'foo';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.2【强制】正确地使用 const 和 let。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-const",children:"prefer-const"})]}),`
`,n.jsxs(e.p,{children:["声明变量时，应优先使用 ",n.jsx(e.code,{children:"const"}),"，只有当变量会被重新赋值时才使用 ",n.jsx(e.code,{children:"let"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 声明后未发生重新赋值，应使用 const
let flag = true;
if (flag) {
  console.log(flag);
}

// good - 声明后发生重新赋值，let 使用正确
let flag = true;
if (flag) {
  flag = false;
}
`})}),`
`,n.jsxs(e.p,{children:["需注意，数组和对象是一个引用，对数组某项和对象某属性的修改并不是重新赋值，因此多数情况下应用 ",n.jsx(e.code,{children:"const"})," 声明："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
let arr = [];
let obj = {};
arr[0] = 'foo';
obj.name = 'bar';

// good
const arr = [];
const obj = {};
arr.push('foo');
obj.name = 'bar';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.3【强制】一条声明语句声明一个变量。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/one-var",children:"one-var"})]}),`
`,n.jsxs(e.p,{children:["这样做更易于追加新的声明语句（你不需要总去把最后的 ",n.jsx(e.code,{children:";"})," 改成 ",n.jsx(e.code,{children:","})," 了），也更易于进行单步调试。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = 1,
      bar = 2;

// good
const foo = 1;
const bar = 2;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.4【强制】声明的变量必须被使用。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-unused-vars",children:"no-unused-vars"})]}),`
`,n.jsx(e.p,{children:"声明而未使用的变量、表达式可能带来潜在的问题，也会给维护者造成困扰，应将它们删除。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 未使用变量 foo
const foo = 1;

// good
const foo = 1;
doSomethingWith(foo);

// bad - 只修改变量不认为是被使用
let bar = 1;
bar = 2;
bar += 1;

// good
let bar = 1;
bar = 2;
bar += 1;
doSomethingWith(bar);

// bad - 未使用参数 y
function getX(x, y) {
  return x;
}

// good
function getXPlusY(x, y) {
  return x + y;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.5【强制】不要在声明前就使用变量。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-use-before-define",children:"no-use-before-define"})]}),`
`,n.jsxs(e.p,{children:["在 ES5 中，由于 ",n.jsx(e.code,{children:"var"})," 的声明提升作用，变量可以在\b声明前\b使用，但这样做可能给人带来疑惑和隐患，所以不要在声明前就使用变量："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
console.log(foo); // => undefined
var foo = 'foo';

// good
var foo = 'foo';
console.log(foo); // => foo
`})}),`
`,n.jsxs(e.p,{children:["在 ES6 中，由于 ",n.jsx(e.code,{children:"const"})," 和 ",n.jsx(e.code,{children:"let"})," 没有声明提升作用，如果在声明前就使用变量，会直接报错："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
console.log(foo); // => Uncaught ReferenceError: foo is not defined
const foo = 'foo';

// good
const foo = 'foo';
console.log(foo); // => foo
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.1.6【参考】哪里使用，哪里声明。"}),`
`,n.jsx(e.p,{children:"在变量被使用前再进行声明，而不是统一在块开始处进行声明。"}),`
`,n.jsxs(e.p,{children:["ES6 提供的 ",n.jsx(e.code,{children:"let"})," 和 ",n.jsx(e.code,{children:"const"})," 是块级作用域，不存在类似 ",n.jsx(e.code,{children:"var"})," 的声明提升的问题。因此我们可以把声明写在更合理\b的地方（\b一般是变量被使用前），而不是统一在块开始处进行声明。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 如果权限校验（checkUserPermission）失败，fetchData 是不必要的
function getData(id) {
  const data = fetchData(id);

  if (!checkUserPermission()) {
    return false;
  }

  if (data.foo === 'bar') {
    // ...
  }

  return data;
}

// good
function getData(id) {
  if (!checkUserPermission()) {
    return false;
  }

  const data = fetchData(id);

  if (data.foo === 'bar') {
    // ...
  }

  return data;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.7【强制】变量不要与外层作用域已存在的变量同名。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-shadow",children:"no-shadow"})]}),`
`,n.jsx(e.p,{children:"如果变量与外层已存在变量同名，会降低可读性，也会导致内层作用域无法读取外层作用域的同名变量。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = 1;
if (someCondition) {
  const foo = 2;
  console.log(foo); // => 2
}

// good
const foo = 1;
if (someCondition) {
  const bar = 2;
  console.log(bar); // => 2
  console.log(foo); // => 1
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.8【强制】不要重复声明变量和函数。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-redeclare",children:"no-redeclare"})]}),`
`,n.jsxs(e.p,{children:["在 ES5 中，尽管使用 ",n.jsx(e.code,{children:"var"})," 重复声明不会报错，但这样做会令人疑惑，降低程序的可维护性。同理，函数的声明也不要与已存在的变量和函数重名："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
var a = 'foo';
var a = 'bar';
function a() {}
console.log(a); // => 'bar'

// good
var a = 'foo';
var b = 'bar';
function c() {}
console.log(a); // => 'foo'

// bad - arg 已作为函数参数声明
function myFunc(arg) {
  var arg = 'foo';
  console.log(arg);
}
myFunc('bar'); // => 'foo'

// good
function myFunc(arg) {
  var otherName = 'foo';
  console.log(arg);
}
myFunc('bar'); // => 'bar'
`})}),`
`,n.jsxs(e.p,{children:["在 ES6 中，使用 ",n.jsx(e.code,{children:"const"})," 或 ",n.jsx(e.code,{children:"let"})," 重复声明变量会\b直接报错："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const a = 'foo';
function a() {} // => Uncaught SyntaxError: Identifier 'a' has already been declared

// good
const a = 'foo';
function b() {}

// bad - arg 已作为函数参数声明
function myFunc(arg) {
  const arg = 'foo';
  console.log(arg);
}
myFunc('bar'); // => Uncaught SyntaxError: Identifier 'arg' has already been declared

// good
function myFunc(arg) {
  const otherName = 'foo';
  console.log(arg);
}
myFunc('bar'); // => 'bar'
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.9【强制】禁止连续赋值。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-multi-assign",children:"no-multi-assign"})]}),`
`,n.jsx(e.p,{children:"变量的连续赋值让人难以阅读和理解，并且可能导致意想不到的结果（如产生全局变量）。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 本例的结果是 let 仅对 a 起到\b\b了预想效果，b 和 c 都成了全局变量
(function test() {
  let a = b = c = 1; // \b相当于 let a = (b = (c = 1));
})();

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function test() {
  let a = 1;
  let b = a;
  let c = a;
})();

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.1.10【参考】将 let 和 const 分别归类。"}),`
`,n.jsxs(e.p,{children:["将 ",n.jsx(e.code,{children:"let"})," 和 ",n.jsx(e.code,{children:"const"})," 归类写在一起，可以提高代码整洁性。此外，\b如果你想按变量的含义排序分组也是允许的。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
let a;
const b = 2;
let c;
const d = 4;
let e;

// good
const b = 2;
const d = 4;
let a;
let c;
let e;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.2 原始类型"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["JS的数据类型包括 7 种原始类型（primitive type），即 Boolean, Null, Undefined, Number, String, Symbol (ES6 新定义), BigInt（ES11新定义），以及 Object 类型，",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",children:"了解更多"}),"。这个章节主要介绍原始类型相关的规约。"]}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.1【强制】不要使用 new Number/String/Boolean。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-new-wrappers",children:"no-new-wrappers"})]}),`
`,n.jsxs(e.p,{children:["使用 new Number/String//Boolean 声明不会有任何好处，还会导致变量成为 ",n.jsx(e.code,{children:"object"})," 类型，可能引起 bug。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const num = new Number(0);
const str = new String('foo');
const bool = new Boolean(false);
console.log(typeof num, typeof str, typeof bool); // => object, object, object
if (num) { // true（对象相当于 true）
}
if (bool) { // true（对象相当于 true）
}

// good
const num = 0;
const str = 'foo';
const bool = false;
console.log(typeof num, typeof str, typeof bool); // => number, string, boolean
if (num) { // false（0 相当于 false）
}
if (bool) { // false
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.2.2【推荐】类型转换。"}),`
`,n.jsxs(e.p,{children:["【数字】使用 ",n.jsx(e.code,{children:"Number()"})," 或 ",n.jsx(e.code,{children:"parseInt()"})," ："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const str = '1';

// bad
const num = +str;
const num = str >> 0;
const num = new Number(str);

// good
const num = Number(str);

// good
const num = parseInt(str, 10);
`})}),`
`,n.jsxs(e.p,{children:["【字符串】使用 ",n.jsx(e.code,{children:"String()"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const num = 1;

// bad
const str = new String(num); // typeof str is "object" not "string"
const str = num + ''; // invokes num.valueOf()
const str = num.toString(); // isn’t guaranteed to return a string

// good
const str = String(num);
`})}),`
`,n.jsxs(e.p,{children:["【布尔值】使用 ",n.jsx(e.code,{children:"!!"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const age = 0;

// bad
const hasAge = new Boolean(age);
const hasAge = Boolean(age);

// good
const hasAge = !!age;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.3【推荐】使用 parseInt() 方法时总是带上基数。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/radix",children:"radix"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"parseInt"})," 方法的第一个参数是\b待转换的字符串，第二个参数是转换基数。当第二个参数省略时，",n.jsx(e.code,{children:"parseInt"})," 会根据第一个参数自动判断基数："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"如果\b以 0x 开头，则使用 16 作基数"}),`
`,n.jsx(e.li,{children:"如果以 0 开头，则使用 8 \b作基数。正是这条规则经常导致错误，ES5 规范中直接将这条规则移除，即 ES5 及之后的执行环境以 0 开头也会使用 10 作为基数"}),`
`,n.jsx(e.li,{children:"其他情况则使用 10 作基数"}),`
`]}),`
`,n.jsxs(e.p,{children:["虽然从 ES5 开始\b就移除了自动以 8 作基数的规则，但有时难以保证所有的浏览器和 JS 执行环境都\b\b\b支持了这一特性。",n.jsx(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt",children:"了解更多"})]}),`
`,n.jsxs(e.p,{children:["因此，推荐始终给 ",n.jsx(e.code,{children:"parseInt()"})," 方法加上基数，除非可以保证代码的执行环境不受上述特性的影响。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
parseInt("071"); // => ES5 前的执行环境中得到的是 57

// good
parseInt("071", 10); // => 71
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.4【强制】避免不必要的布尔\b类型转换。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-extra-boolean-cast",children:"no-extra-boolean-cast"})]}),`
`,n.jsxs(e.p,{children:["在 ",n.jsx(e.code,{children:"if"})," 等条件语句中，将表达式的结果强制转换成布尔值是多余的："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
if (!!foo) {
  // ...
}

while (!!foo) {
  // ...
}

const a = !!flag ? b : c;

// good
if (foo) {
  // ...
}

while (foo) {
  // ...
}

const a = flag ? b : c;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{children:"2.2.5 字符串"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.5.1【强制】字符串优先使用单引号。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/quotes",children:"quotes"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const name = "tod";
const name = \`tod\`; // 模板字符串中应包含变量或换行，否则需用单引号

// good
const name = 'tod';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.5.2【推荐】使用模板字符串替代字符串拼接。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-template",children:"prefer-template"})]}),`
`,n.jsx(e.p,{children:"模板字符串让代码更简洁，可读性更强"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function getDisplayName({ nickName, realName }) {
  return nickName + ' (' + realName + ')';
}

// good
function getDisplayName({ nickName, realName }) {
  return \`\${nickName} (\${realName})\`;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.5.3【强制】禁止不必要的转义字符。",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-useless-escape",children:"no-useless-escape"})]}),`
`,n.jsx(e.p,{children:"转义字符会大大降低代码的可读性，因此尽量不要滥用它们。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = '\\'this\\' \\i\\s \\"quoted\\"';

// good
const foo = '\\'this\\' is "quoted"';
const foo = \`'this' is "quoted"\`;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.3 数组"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.1【强制】使用字面量创建数组。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-array-constructor",children:"no-array-constructor"})]}),`
`,n.jsxs(e.p,{children:["不要使用 ",n.jsx(e.code,{children:"new Array()"})," 和 ",n.jsx(e.code,{children:"Array()"})," 创建数组，除非为了构造某一长度的空数组。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const a = new Array(1, 2, 3);
const b = Array(1, 2, 3);

// good
const a = [1, 2, 3];
const b = new Array(500); // 构造长度为 500 的空数组
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.2【强制】某些数组方法的回调函数中必须包含 return 语句。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/array-callback-return",children:"array-callback-return"})]}),`
`,n.jsxs(e.p,{children:["以下数组方法：",n.jsx(e.code,{children:"map"}),", ",n.jsx(e.code,{children:"filter"}),", ",n.jsx(e.code,{children:"from "}),", ",n.jsx(e.code,{children:"every"}),", ",n.jsx(e.code,{children:"find"}),", ",n.jsx(e.code,{children:"findIndex"}),", ",n.jsx(e.code,{children:"reduce"}),", ",n.jsx(e.code,{children:"reduceRight"}),", ",n.jsx(e.code,{children:"some"}),", ",n.jsx(e.code,{children:"sort"})," 的回调函数中必须包含 ",n.jsx(e.code,{children:"return"})," 语句，否则可能会产生误用或错误。"]}),`
`,n.jsxs(e.p,{children:["一个常见的误用是，本该用 ",n.jsx(e.code,{children:"forEach"})," 的场景却用了 ",n.jsx(e.code,{children:"map"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 欲将 ['a', 'b', 'c'] 转换成 {a: 0, b: 1, c: 2}
const myArray = ['a', 'b', 'c'];
const myObj = {};

// bad - map 应用于构建一个新数组，单纯想遍历数组应使用 forEach
myArray.map((item, index) => {
  myObj[item] = index;
});

// good
myArray.forEach((item, index) => {
  myObj[item] = index;
});
`})}),`
`,n.jsxs(e.p,{children:["某些方法漏掉 ",n.jsx(e.code,{children:"return"})," 还可能引起错误："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 欲将 ['a', 'b', 'c'] 转换成 {a: 0, b: 1, c: 2}
const myArray = ['a', 'b', 'c'];

// bad => Uncaught TypeError: Cannot set property 'b' of undefined
const myObj = myArray.reduce((memo, item, index) => {
  memo[item] = index;
}, {});

// good
const myObj = myArray.reduce((memo, item, index) => {
  memo[item] = index;
  return memo;
}, {});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.3.3【推荐】使用扩展运算符 ... 处理数组。"}),`
`,n.jsxs(e.p,{children:["ES6 提供了扩展运算符 ",n.jsx(e.code,{children:"..."}),"，可以简化一些数组操作。"]}),`
`,n.jsx(e.p,{children:"数组复制："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const array1 = [];
for (let i = 0; i < array.length; i += 1) {
  array1[i] = array[i];
}

// bad
const array1 = array.map(item => item);

// good
const array1 = [...array];
`})}),`
`,n.jsx(e.p,{children:"将类数组结构（有 Iterator 接口的对象）转换为数组："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// good
const nodes = [...foo];
const uniqueNodes = [...new Set(foo)]; // 可以利用 Set 和 ... 将数组去重
`})}),`
`,n.jsx(e.p,{children:"数组拼接："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const array1 = [1, 2].concat(array);

// good
const array1 = [1, 2, ...array]
`})}),`
`,n.jsxs(e.p,{children:["用 ",n.jsx(e.code,{children:"..."})," 替代 ",n.jsx(e.code,{children:"apply"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const args = [1, 2, 3, 4];
Math.max.apply(Math, args);

// good
const args = [1, 2, 3, 4];
Math.max(...args);
`})}),`
`,n.jsxs(e.p,{children:["特殊的，遍历可迭代对象时，\b使用 ",n.jsx(e.code,{children:"Array.from"})," 而不是 ",n.jsx(e.code,{children:"..."}),"，以免创建一个临时数组："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.3.4【推荐】使用解构获取数组元素。"}),`
`,n.jsx(e.p,{children:"使用 ES6 提供的解构方法获取数组元素："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const arr = [1, 2, 3, 4];
const first = arr[0];
const second = arr[1];

// good
const arr = [1, 2, 3, 4];
const [first, second] = arr;
`})}),`
`,n.jsx(e.p,{children:"函数有多个返回值时，应使用对象解构而不是数组解构，因为数组解构需要考虑返回值的位置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function giveMeDivPosition(div) {
  return [left, right, top, bottom];
}
const [left, _, top] = giveMeDivPosition(div);

// good
function giveMeDivPosition(div) {
  return { left, right, top, bottom };
}
const { left, top } = giveMeDivPosition(div);
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.4 对象"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.1【强制】使用字面量创建对象。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-new-object",children:"no-new-object"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const obj = new Object();

// good
const obj = {};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.2【强制】使用对象属性和方法的简写语法。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/object-shorthand",children:"object-shorthand"})]}),`
`,n.jsx(e.p,{children:"ES6 提供了对象属性和方法的简写语法，可以使代码更加简洁："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const value = 'foo';

// bad
const atom = {
  value: value,
  addValue: function (value) {
    return value + ' added';
  },
};

// good
const atom = {
  value,
  addValue(value) {
    return value + ' added';
  },
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.4.3【参考】将对象的简写属性写在一起。"}),`
`,n.jsx(e.p,{children:"将简写的属性写在一起，置于对象的起始或末尾，可以提高代码整洁性。当然，如果你出于属性的含义或其他考虑进行排序也是允许的。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

// good
const obj = {
  lukeSkywalker,
  anakinSkywalker,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  mayTheFourth: 4,
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.4【强制】对象的属性名不要用引号包裹，除非包含特殊字符。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/quote-props",children:"quote-props"})]}),`
`,n.jsx(e.p,{children:"这样更加简洁，也有助于语法高亮和一些 JS 引擎的优化。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
  'one two': 12,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
  'one two': 12,
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.5【强制】优先使用 . 访问对象的属性。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/dot-notation",children:"dot-notation"})]}),`
`,n.jsxs(e.p,{children:["这样可以提高代码可读性。",n.jsx(e.code,{children:"[]"})," \b仅应在访问动态属性名\b或包含特殊字符的属性名时被使用。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const obj = {
  active: true,
  [getDynamicKey()]: 'foo',
  'data-bar': 'bar',
};

// bad
const isActive = obj['active'];

// good
const isActive = obj.active;
const foo = obj[getDynamicKey()];
const bar = obj['data-bar'];
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.4.6【推荐】使用扩展运算符 ... 处理对象。"}),`
`,n.jsxs(e.p,{children:["替代 ",n.jsx(e.code,{children:"Object.assign"})," 方法，来进行对象\b的浅拷贝："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// very bad - original 会被影响
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }  original => { a: 1, b: 2, c: 3 }
delete copy.a; // copy => { b: 2, c: 3 }  original => { b: 2, c: 3 }

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }
`})}),`
`,n.jsx(e.p,{children:"获取\b排除\b某些属性的新对象："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// good
const copy = { a: 1, b: 2, c: 3 };
const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.7【推荐】使用解构获取对象属性。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-destructuring",children:"prefer-destructuring"})]}),`
`,n.jsx(e.p,{children:"获取对象的同名属性、多个属性时，使用解构让代码更简洁，也可以减少为了使用属性而创建的临时引用。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return \`\${firstName} \${lastName}\`;
}

// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return \`\${firstName} \${lastName}\`;
}

// best
function getFullName({ firstName, lastName }) {
  return \`\${firstName} \${lastName}\`;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.4.8【参考】对象的动态属性名应直接写在字面量定义中。"}),`
`,n.jsx(e.p,{children:"ES6 允许在新建对象字面量时使用表达式作为属性名，这样可以将所有属性定义在一个地方。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function getKey(k) {
  return \`a key named \${k}\`;
}

// bad
const obj = {
  id: 1,
  name: 'tod',
};
obj[getKey('foo')] = 'foo';

// good
const obj = {
  id: 1,
  name: 'tod',
  [getKey('foo')]: 'foo',
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.9【强制】不要直接在对象上调用 Object.prototypes 上的方法。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-prototype-builtins",children:"no-prototype-builtins"})]}),`
`,n.jsxs(e.p,{children:["不要直接在对象上调用 ",n.jsx(e.code,{children:"Object.prototypes"})," 上的方法，例如 ",n.jsx(e.code,{children:"hasOwnProperty"}),"、",n.jsx(e.code,{children:"propertyIsEnumerable"}),"、",n.jsx(e.code,{children:"isPrototypeOf"}),"。"]}),`
`,n.jsx(e.p,{children:"这些方法可能会被对象上的属性覆盖，导致错误："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const obj = {
  foo: 'foo',
  hasOwnProperty: false,
};
const objNull = Object.create(null);

// bad => Uncaught TypeError: obj.hasOwnProperty is not a function
console.log(obj.hasOwnProperty('foo'));
console.log(objNull.hasOwnProperty('foo'));

// good
console.log(Object.prototype.hasOwnProperty.call(obj, 'foo'));
console.log(Object.prototype.hasOwnProperty.call(objNull, 'foo'));
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.5 函数"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.1【强制】不要用 Function 构造函数创建函数。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-new-func",children:"no-new-func"})]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"new Function"})," 创建函数会像 ",n.jsx(e.code,{children:"eval()"})," 方法一样执行字符串，带来安全隐患"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const sum = new Function('a', 'b', 'return a + b');

// good
const sum = (a, b) => (a + b);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.2【强制】不要在块中使用函数声明。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-inner-declarations",children:"no-inner-declarations"})]}),`
`,n.jsxs(e.p,{children:["在非函数块（如 ",n.jsx(e.code,{children:"if"}),"、",n.jsx(e.code,{children:"while"})," 等）中，不要使用函数声明："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 函数声明不是块作用域而是函数作用域，因此在块外也能使用函数，容易引起误解
if (true) {
  function test() {
    console.log('test');
  }
}
test(); // => test

// good - 函数表达式可以清晰地说明函数能否在块外使用
// 不能在块外使用
if (true) {
  const test = function () {
    console.log('test');
  };
}
test(); // => Uncaught ReferenceError: test is not defined

// 能在块外使用
let test;
if (true) {
  test = function () {
    console.log('test');
  };
}
test(); // => test
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.5.3【参考】使用函数表达式替代函数声明。"}),`
`,n.jsx(e.p,{children:"这样可以保证函数不能在\b定义前\b被调用。"}),`
`,n.jsx(e.p,{children:"函数声明会被提升到当前作用域的顶部，\b因此函数可以在声明语句前就被调用，这会影响\b代码的可读性\b与可维护性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function foo() {
  // ...
}

// good
const foo = () => {
  // ...
};

const foo = function () {
  // ...
};

// \b有些规范提出，应该给\b函数表达式起一个不同于被赋值变量名的名字\b，以达到易于调试、查看错误堆栈等目的
// 事实上，代码在目前浏览器中或者经过 Babel 转码后，匿名函数表达式也能够方便地查看堆栈。所以除非你出于某些目的想给函数起一个不同于被赋值变量的名字，否则\b直接使用匿名函数表达式
const foo = function foo_more_descriptive_name() {
  // ...
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.4【强制】使用箭头函数代替匿名函数。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-arrow-callback",children:"prefer-arrow-callback"})]}),`
`,n.jsxs(e.p,{children:["ES6 提供的箭头函数可以解决 ",n.jsx(e.code,{children:"this"})," 指向的问题，而且语法更简洁。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
[1, 2, 3].map(function (x) {
  const y = x + 1;
  return x * y;
});

// good
[1, 2, 3].map((x) => {
  const y = x + 1;
  return x * y;
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.5【推荐】箭头函数编码风格。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/arrow-parens",children:"arrow-parens"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/arrow-body-style",children:"arrow-body-style"})]}),`
`,n.jsx(e.p,{children:"箭头函数参数的小括号、函数体的大括号在某些时候可以省略，这可能导致风格的不统一，因此需要规范其编码风格："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"函数体风格"}),`
`,n.jsxs(e.p,{children:["当函数体只包含一条\b ",n.jsx(e.code,{children:"return"})," 语句时，可以省略函数体大括号和 ",n.jsx(e.code,{children:"return"}),"，以使代码更简洁。"]}),`
`,n.jsxs(e.p,{children:["我们推荐使用这个 ES6 提供的语法糖，它可以让书写和阅读更简洁。但你也可以选择\b始终加上大括号和 ",n.jsx(e.code,{children:"return"}),"，\b以方便后续在函数体内增加语句。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:"// good - 函数体包含多条语句时，始终加上大括号\n[1, 2, 3].map((number) => {\n  const nextNumber = number + 1;\n  return `A string containing the ${nextNumber}.`;\n});\n\n// good - 函数体只包含一条\b `return` 语句时，可以也建议省略大括号和 `return`\n[1, 2, 3].map(number => `A string containing the ${number + 1}.`);\n\n// good - 也可以选择始终不省略大括号，不使用简写语法糖，以方便后续在函数体内增加语句\n[1, 2, 3].map((number) => {\n  return `A string containing the ${number + 1}.`;\n});\n"})}),`
`,n.jsxs(e.p,{children:["当 ",n.jsx(e.code,{children:"return"})," 的\b内容为对象或者有多行时，需要用小括号包裹："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - Uncaught SyntaxError: Unexpected token
[1, 2, 3].map((item) => {
  foo: item,
  bar: item + 1,
});

// good
[1, 2, 3].map((item) => ({
  foo: item,
  bar: item + 1,
}));

// bad
['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
);

// good
['get', 'post', 'put'].map(httpMethod => (
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
  )
));
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"函数参数风格"}),`
`,n.jsxs(e.p,{children:["当函数只有一个参数，且函数体为 ",n.jsx(e.code,{children:"return"})," 简写语法时，可以省略包裹参数的小括号以使代码更简洁。"]}),`
`,n.jsx(e.p,{children:"我们建议仅在这种情况下省略\b包裹参数\b的小括号，其余情况都不要省略小括号。但你也可以选择\b始终加上小括号，\b以方便后续可能要增加参数。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// good - 未使用 return 简写语法时，参数始终加上小括号
[1, 2, 3].map((number) => {
  const nextNumber = number + 1;\b
  return \`A string containing the \${nextNumber}.\`;
});

// good - 使用 return 简写语法、且只有一个参数时，可以也建议省略参数的小括号
[1, 2, 3].map(x => x * x);

// good - 也可以选择始终不省略参数的小括号，以方便后续可能要增加参数
[1, 2, 3].map((x) => x * x);
`})}),`
`]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.5.6【强制】不要将函数参数命名为 arguments。"}),`
`,n.jsxs(e.p,{children:["这会覆盖掉函数作用域中的 ",n.jsx(e.code,{children:"arguments"})," 对象。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.7【强制】不要使用 arguments 对象。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-rest-params",children:"prefer-rest-params"})]}),`
`,n.jsxs(e.p,{children:["不要使用 ",n.jsx(e.code,{children:"arguments"})," 对象，使用剩余参数操作符 ",n.jsx(e.code,{children:"..."})," 代替。"]}),`
`,n.jsxs(e.p,{children:["ES6 提供了 rest 操作符 ",n.jsx(e.code,{children:"..."}),"，与 ",n.jsx(e.code,{children:"arguments"})," 相比可以更清晰\b地聚合函数的剩余参数。此外， ",n.jsx(e.code,{children:"..."})," 得到的是一个真正的数组，而 ",n.jsx(e.code,{children:"arguments"})," 得到的则是类数组结构。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function foo(a, b) {
  const args = Array.prototype.slice.call(arguments, foo.length);
  console.log(args);
}
foo(1, 2, 3, 4); // => [3, 4]

// good
function foo(a, b, ...args) {
  console.log(args);
}
foo(1, 2, 3, 4); // => [3, 4]
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.5.8【推荐】使用默认参数语法。"}),`
`,n.jsxs(e.p,{children:["ES6 中引入了默认参数语法，相比之前为参数赋默认值的方法更加简洁、可读性更好。重新对参数赋值是不推荐的行为，且当参数的布尔类型转换结果是 ",n.jsx(e.code,{children:"false"})," 时可能会错误地被赋予默认值。"]}),`
`,n.jsx(e.p,{children:"因此，当函数参数需要默认值时，使用默认参数语法，而不是去修改参数："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const multiple = (a, b) => {
  a = a || 0;
  b = b || 0;
  return a * b;
}

// good
const multiple = (a = 0, b = 0) => {
  return a * b;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.5.9【推荐】有默认值的函数参数需要放到参数列表的最后。"}),`
`,n.jsxs(e.p,{children:["否则你将无法享受到\b\b默认参数的便利，只能通过传 ",n.jsx(e.code,{children:"undefined"})," 触发参数使用默认值。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function multiply(a = 1, b) {
  return a * b;
}
const x = multiply(42); // => NaN
const y = multiply(undefined, 42); // => 42

// good
function multiply(a, b = 1) {
  return a * b;
}
const x = multiply(42); // => 42
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.10【推荐】不要修改函数参数。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-param-reassign",children:"no-param-reassign"})]}),`
`,n.jsx(e.p,{children:"不要修改引用类型的参数，这可能导致作为入参的原变量发生变化："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const f1 = function f1(obj) {
  obj.key = 1;
}
const originalObj = { key: 0 };
f1(originalObj);
console.log(originalObj); // => { key: 1 }

// good
const f2 = function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}
`})}),`
`,n.jsx(e.p,{children:"更不要给参数重新赋值，这可能导致意外的行为和内核优化问题："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function foo(bar, baz) {
  if (!baz) {
    bar = 1;
  }
}

// good
function foo(bar, baz) {
  let qux = bar;
  if (!baz) {
    qux = 1;
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.11【强制】将立即执行函数表达式（IIFE）用小括号包裹。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/wrap-iife",children:"wrap-iife"})]}),`
`,n.jsx(e.p,{children:"IIFE 是一个独立的执行单元，将它用小括号包裹可以更清晰的体现这点。需要提醒的是，由于 ES6 模块语法的引入，你可能不再需要使用 IIFE 了。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`(function () {
  console.log('Welcome to the Internet. Please follow me.');
}());
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.12【参考】函数的复杂度不应过高。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/complexity",children:"complexity"})]}),`
`,n.jsx(e.p,{children:"过高的复杂度意味着代码难以维护和测试。我们推荐函数的复杂度不要超过以下阈值："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["圈复杂度不超过 ",n.jsx(e.strong,{children:"10"})]}),`
`,n.jsxs(e.li,{children:["认知复杂度不超过 ",n.jsx(e.strong,{children:"15"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.13【参考】函数的参数不应过多。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/max-params",children:"max-params"}),`
如果函数的参数过多，将不利于函数的维护和调用。这时你需要考虑是否函数做了太多的事情，是否有必要对其进行拆分。`]}),`
`,n.jsx(e.p,{children:"如果必须使用过多的参数，可以考虑用对象代替参数列表："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function doSomething(param1, param2, param3, param4, param5, param6, param7, param8) {
  // ...
}
doSomething(1, 2, 3, 4, 5, 6, 7, 8);

// good
function doSomething({ param1, param2, param3, param4, param5, param6, param7, param8 }) {
  // ...
}
doSomething({ param1: 1, param2: 2, param3: 3, param4: 4, param5: 5, param6: 6, param7: 7, param8: 8 });
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.14【强制】generator 函数内必须有 yield 语句。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/require-yield",children:"require-yield"})]}),`
`,n.jsxs(e.p,{children:["如果一个 ",n.jsx(e.code,{children:"generator"})," 中没有 ",n.jsx(e.code,{children:"yield"})," 语句，那么这个 ",n.jsx(e.code,{children:"generator"})," 就不是必须的。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function* foo() {
  return 10;
}

// good
function* foo() {
  yield 5;
  return 10;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.5.15【参考】优先使用 JS 提供的高阶函数进行迭代运算。"}),`
`,n.jsx(e.p,{children:"需要迭代运算时，应优先使用 JS 提供的高阶函数，减少直接使用 for 循环（包括 for-in 和 for-of）。"}),`
`,n.jsx(e.p,{children:"如使用 map() / every() / filter() / find() / findIndex() / reduce() / some() / ... 来迭代数组，使用 Object.keys() / Object.values() / Object.entries() 方法来迭代对象"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log(sum); // => 15;

// good
let sum = 0;
numbers.forEach((num) => {
  sum += num;
});
console.log(sum); // => 15;

// best
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // => 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
  increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne = [];
numbers.forEach((num) => {
  increasedByOne.push(num + 1);
});

// best
const increasedByOne = numbers.map(num => num + 1);
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.6 类"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.6.1【推荐】使用 class 语句声明类，而不是使用 prototype。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"class"})," 语句是 ES6 中引入的用于声明类的语法糖，更加简洁易维护。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function Person() {
  this.age = 1;
}
Person.prototype.growOld = function () {
  this.age += 1;
}

// good
class Person {
  constructor() {
    this.age = 1;
  }
  growOld() {
    this.age += 1;
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.6.2【推荐】使用 extends 语句进行类的继承。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"extends"})," 是用于原型继承的内建方法，不会破坏 ",n.jsx(e.code,{children:"instanceof"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
  return this.queue[0];
};

// good
class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.6.3【强制】避免不必要的 constructor。"}),`
`,n.jsxs(e.p,{children:["ES6 class 会提供一个默认的 ",n.jsx(e.code,{children:"constructor"}),"，空 ",n.jsx(e.code,{children:"constructor"})," 或者只调用父类的  ",n.jsx(e.code,{children:"constructor"})," 是不必要的。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-useless-constructor",children:"no-useless-constructor"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 以下两种\b constructor 可以省略
class Parent {
  constructor() {
  }

  method() {
    // ...
  }
}

class Child extends Parent {
  constructor (value) {
    super(value);
  }

  method() {
    // ...
  }
}

// good
class Parent {
  method() {
    // ...
  }
}

class Child extends Parent {
  method() {
    // ...
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.6.4【强制】正确地使用 super 方法。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/constructor-super",children:"constructor-super"})," ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-this-before-super",children:"no-this-before-super"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["子类的 ",n.jsx(e.code,{children:"constructor"})," 中必须使用 ",n.jsx(e.code,{children:"super()"}),"，且必须在 ",n.jsx(e.code,{children:"this"})," 和 ",n.jsx(e.code,{children:"super"})," 关键词前调用"]}),`
`,n.jsxs(e.li,{children:["非\b子类的 ",n.jsx(e.code,{children:"constructor"})," 中不能使用 ",n.jsx(e.code,{children:"super()"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 非子类不能使用 super
class Parent {
  constructor() {
    super();
    this.name = 'parent';
  }
}

// good
class Parent {
  constructor() {
    this.name = 'parent';
  }
}

// bad - 子类必须使用 super
class Child extends Parent {
  constructor() {
    this.name = 'child';
  }
}

// bad - this 必须在调用 super 后使用
class Child extends Parent {
  constructor() {
    this.name = 'foo';
    super();
  }
}

// good
class Child extends Parent {
  constructor (value) {
    super(value);
    this.name = 'foo';
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.6.5【强制】避免重复的类成员命名。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-dupe-class-members",children:"no-dupe-class-members"})]}),`
`,n.jsx(e.p,{children:"重复的类成员声明最终生效的将是最后一个："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
class Foo {
  bar() { console.log('bar'); }
  bar() { console.log('baz'); }
}
const foo = new Foo();
foo.bar(); // => baz

// good
class Foo {
  bar() { console.log('bar'); }
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.7 模块"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.1【推荐】使用 ES6 modules 而非其他非标准的模块系统。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import#module-systems",children:"import/module-systems"})]}),`
`,n.jsxs(e.p,{children:["使用 ES6 modules (",n.jsx(e.code,{children:"import"}),"/",n.jsx(e.code,{children:"export"}),")，而不是其他非标准的模块系统，如 CommonJS、AMD、CMD。"]}),`
`,n.jsx(e.p,{children:"ES6 modules 作为标准代表着未来，让我们拥抱未来吧。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const React = require('react');
module.exports = React.Component;

// good
import React, { Component } from 'react';
export default Component;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.2【强制】不要用多个 import 引入同一模块。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md",children:"import/no-duplicates"})]}),`
`,n.jsxs(e.p,{children:["多条 ",n.jsx(e.code,{children:"import"})," 语句引入了同一模块会降低可维护性，你需要将它们合成一条语句。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
import React from 'react';
import { Component }  from 'react';

// good
import React, { Component } from 'react';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.3【强制】import 语句需要放到模块的最上方。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md",children:"import/first"})]}),`
`,n.jsxs(e.p,{children:["由于 ",n.jsx(e.code,{children:"import"})," 语句会被声明提升，将它们放到模块的最上方以防止异常行为。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
import foo from 'foo';
foo.init();

import bar from 'bar';
bar.init();

// good
import foo from 'foo';
import bar from 'bar';

foo.init();
bar.init();
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.4【强制】禁止 default import 的名字跟文件内的其他 export 命名相同。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md",children:"import/no-named-as-default"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// foo.js
export default 'foo';
export const bar = 'bar';

// bad
import bar from './foo.js';

// good
import foo from './foo.js';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.5【强制】禁止引用自身。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md",children:"import/no-self-import"})]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.6【强制】禁止循环引用。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md",children:"import/no-cycle"})]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.7【推荐】不要在 default export 上使用一个已导出的名称作为属性。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md",children:"import/no-named-as-default-member"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// foo.js
export default 'foo';
export const bar = 'bar';

// bad
import foo from './foo.js';
const bar = foo.bar; // or
const { bar } = foo;

// good
import foo, { bar } from './foo.js';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.8【推荐】在模块导入之后保留一个空行。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md",children:"import/newline-after-import"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
import foo from './foo.js';
const FOO = 'FOO'

// good
import foo from './foo.js';

const FOO = 'FOO'
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.9【参考】import 语句的排序。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md",children:"import/order"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"import"})," 语句建议按以下规则排序："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["先 ",n.jsx(e.code,{children:"import"})," 第三方模块，再 ",n.jsx(e.code,{children:"import"})," 自己工程里的模块"]}),`
`,n.jsxs(e.li,{children:["先 ",n.jsx(e.code,{children:"import"})," 绝对路径，再 ",n.jsx(e.code,{children:"import"})," 相对路径"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
import foo from 'components/foo';
import './index.scss';
import React from 'react';

// good
import React from 'react';
import foo from 'components/foo';
import './index.scss';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.10【参考】当模块内只有一个 export 时，使用 default export。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md",children:"import/prefer-default-export"})]}),`
`,n.jsx(e.p,{children:"我们也建议文件内只包含\b一个 export，这有利于代码的可维护性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
export function foo() {}

// good
export default function foo() {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.7.11【参考】不要在 import 时直接 export。"}),`
`,n.jsx(e.p,{children:"虽然一行代码更\b简洁，\b但这不利于代码的可读性和一致性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
export { Com as Component } from 'react';

// good
import { Component } from 'react';

export default Component;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.12【参考】模块开发者选择EMS和CJS时，需要判断运行时环境：如果你的模块是只面向浏览器的则选择ESM；如果你的模块是只面向Node.js的则选择CJS，并且确定遵循",n.jsx(e.a,{href:"https://nodejs.org/api/esm.html#esm_commonjs_namespaces",children:"CJS命名空间规则"}),"；如果你的模块是2者都要兼容的，则ESM和CJS都要支持。"]}),`
`,n.jsxs(e.p,{children:["Node.js的模块，历史上Node.js遵循的是CommonJS，因此ES6 Module会有比较严重的兼容性问题。暂时没有特别好的解法，只能在Node.js中跟进运行时环境，判断使用模块标准。",n.jsx(e.a,{href:"https://github.com/nodejs/node/issues/33954",children:"讨论issue"})]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.8 操作符"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.1【推荐】使用严格相等运算符。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/eqeqeq",children:"eqeqeq"})]}),`
`,n.jsxs(e.p,{children:["非严格相等运算符（",n.jsx(e.code,{children:"=="})," 和 ",n.jsx(e.code,{children:"!="}),"）会在比较前将被比较值转换为相同类型\b，对于不熟悉 JS 语言特性的人来说，这可能造成不小的隐患。",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness",children:"了解更多"})]}),`
`,n.jsxs(e.p,{children:["因此，一般情况下我们应该使用严格比较运算符（ ",n.jsx(e.code,{children:"==="})," 和 ",n.jsx(e.code,{children:"!=="}),"）进行比较。\b如果要比较的两个值类型不同，应该显性地将其转换成相同类型再进行严格比较，而不是依赖于 ",n.jsx(e.code,{children:"=="})," 和 ",n.jsx(e.code,{children:"!="})," 的隐式类型转换。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const id = '83949';

// bad - 为了兼容 id 可能是字符串的情况，而有意使用 == 与数字比较
if (id == 83949) {
  // do something
}

// good - 如果 id 可能是字符串，应该先将其进行类型转换，再使用 === 进行比较
if (Number(id) === 83949) {
  // do something
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.2【强制】不要使用一元自增自减运算符。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-plusplus",children:"no-plusplus"})]}),`
`,n.jsxs(e.p,{children:["不要使用一元自增自减运算符（",n.jsx(e.code,{children:"++"})," 和 ",n.jsx(e.code,{children:"--"}),"），除非在 ",n.jsx(e.code,{children:"for"})," 循环条件中。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"++"})," 和 ",n.jsx(e.code,{children:"--"})," 会带来值\b是否会提前变化带来的理解成本，也可能因为自动添加分号机制导致一些错误，因此我们推荐使用 ",n.jsx(e.code,{children:"num += 1"})," 来代替 ",n.jsx(e.code,{children:"num++"}),"。但出于习惯，在 ",n.jsx(e.code,{children:"for"})," 循环的条件中依然可以使用自增自减运算符。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`let num = 1;

// bad
num++;
--num;

// good
num += 1;
num -= 1;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.3【强制】不要使用 void 运算符。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-void",children:"no-void"})]}),`
`,n.jsxs(e.p,{children:["在很老版本的 JS 中，",n.jsx(e.code,{children:"undefined"})," 值是可变的，因此使用 ",n.jsx(e.code,{children:"void"})," 语句一般是用来得到一个 ",n.jsx(e.code,{children:"undefined"})," 值。而在新版本的 JS 中，上面的问题已不复存在。因此出于程序可读性的考虑，禁止使用 ",n.jsx(e.code,{children:"void"})," 运算符。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = void 0;

// good
const foo = undefined;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.4【强制】避免嵌套的三元表达式。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-nested-ternary",children:"no-nested-ternary"})]}),`
`,n.jsx(e.p,{children:"嵌套的三元表达式会降低代码可读性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = bar ? baz : qux === quxx ? bing : bam;

// good
const qu = qux === quxx ? bing : bam;
const foo = bar ? baz : qu;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.5【强制】避免不必要的三元表达式。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-unneeded-ternary",children:"no-unneeded-ternary"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.6【强制】混合使用多种操作符时，用小括号包裹分组。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-mixed-operators",children:"no-mixed-operators"})]}),`
`,n.jsxs(e.p,{children:["这可以更清晰地表达代码意图，提高可读性。四则运算符（",n.jsx(e.code,{children:"+"}),", ",n.jsx(e.code,{children:"-"}),", ",n.jsx(e.code,{children:"*"}),", ",n.jsx(e.code,{children:"/"}),"）可以不包裹，因为\b大多数人熟知它们的优先级。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// good
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

// bad
const bar = a ** b - 5 % d;

// good
const bar = (a ** b) - (5 % d);

// bad - 有人可能会误以为执行顺序是 (a || b) && c
if (a || b && c) {
  return d;
}

// good
if (a || (b && c)) {
  return d;
}

// good - 四则运算可以不用小括号包裹
const bar = a + b / c * d;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.9 控制语句"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.9.1【强制】switch 语句中的 case 需要以 break 结尾。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-fallthrough",children:"no-fallthrough"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
switch(foo) {
  case 1:
    doSomething();
  case 2:
    doSomethingElse();
  default:
    doSomething();
}

// good
switch(foo) {
  case 1:
    doSomething();
    break;
  case 2:
    doSomethingElse();
    break;
  default:
    doSomething();
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.9.2【推荐】switch 语句需要始终包含 default 分支。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/default-case",children:"default-case"})]}),`
`,n.jsxs(e.p,{children:["在使用 ",n.jsx(e.code,{children:"switch"})," 语句时，有时会出现因开发者忘记设置 ",n.jsx(e.code,{children:"default"})," 而导致错误，因此建议总是给出 ",n.jsx(e.code,{children:"default"}),"。如果有意省略 ",n.jsx(e.code,{children:"default"}),"，请在\b ",n.jsx(e.code,{children:"switch"})," 语句末尾用 ",n.jsx(e.code,{children:"// no default"})," 注释指明："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
let foo;
switch (bar) {
  case 1:
    foo = 2;
    break;
}

// good
let foo;
switch (bar) {
  case 1:
    foo = 2;
    break;
  default:
    foo = 0;
}

// good - 如果有意省略 default，请在\b switch 语句末尾用 \`// no default\` 注释指明
let foo = 0;
switch (bar) {
  case 1:
    foo = 2;
    break;
  // no default
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.9.3【参考】switch 语句应包含至少 3 个条件分支。"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"switch"})," 语句在有许多条件分支的情况下可以使代码结构更清晰。但对于只有一个或两个条件分支的情况，更适合使用 ",n.jsx(e.code,{children:"if"})," 语句，",n.jsx(e.code,{children:"if"})," 语句更易于书写和阅读。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
let foo;
switch (bar) {
  case 1:
    foo = 2;
    break;
  default:
    foo = 0;
}

// good
let foo;
if (bar === 1) {
  foo = 2;
} else {
  foo = 0;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.9.4【参考】控制语句的嵌套层级不要过深。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/max-depth",children:"max-depth"})]}),`
`,n.jsxs(e.p,{children:["控制语句的嵌套层级不要超过 ",n.jsx(e.strong,{children:"4"})," 级，否则将难以阅读和维护："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
if (condition1) {
  // depth = 1
  if (condition2) {
    // depth = 2
    for (let i = 0; i < 10; i++) {
      // depth = 3
      if (condition4) {
        // depth = 4
        if (condition5) {
          // bad - depth = 5
        }
        return;
      }
    }
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.9.5【强制】for 循环中的计数器应朝着正确方向移动。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/for-direction",children:"for-direction"})]}),`
`,n.jsxs(e.p,{children:["当 ",n.jsx(e.code,{children:"for"})," 循环中更新子句的计数器朝着错误的方向移动时，循环的终止条件将永远无法达到，这会导致死循环的出现。这时要么是程序出现了错误，要么应将 ",n.jsx(e.code,{children:"for"})," 循环改为 ",n.jsx(e.code,{children:"while"})," 循环。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
for (let i = 0; i < length; i--) {
  // do something
}

// good
for (let i = 0; i < length; i++) {
  // do something
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.9.6【推荐】for-in 循环中需要对 key 进行验证。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/guard-for-in",children:"guard-for-in"})]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"for-in"})," 循环时需要\b\b避免对象从原型链上继承来的属性也被遍历出来，因此保险的做法是对 key 是否是对象自身的属性进行验证："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
for (const key in foo) {
  doSomething(key);
}

// good
for (const key in foo) {
  if (Object.prototype.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.9.7【参考】如果一个 if 语句的结果总是返回一个 return 语句，那么最后的 else 是不必要的。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-else-return",children:"no-else-return"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function foo() {
  if (x) {
    return x;
  } else {
    return y;
  }
}

// good
function foo() {
  if (x) {
    return x;
  }

  return y;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.9.8【参考】条件表达式的计算结果。"}),`
`,n.jsxs(e.p,{children:["条件表达式（例如 ",n.jsx(e.code,{children:"if"})," 语句的条件）的值为通过抽象方法 ",n.jsx(e.code,{children:"ToBoolean"})," \b进行强制转换所得，计算结果遵守下面的规则："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"对象"}),"、",n.jsx(e.strong,{children:"数组"})," 被计算为 ",n.jsx(e.strong,{children:"true"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Undefined"})," 被计算为 ",n.jsx(e.strong,{children:"false"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Null"})," 被计算为 ",n.jsx(e.strong,{children:"false"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"布尔值"})," 被计算为 ",n.jsx(e.strong,{children:"布尔的值"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"数字"})," 如果是 ",n.jsx(e.strong,{children:"+0、-0 或 NaN"})," 被计算为 ",n.jsx(e.strong,{children:"false"}),"，否则为 ",n.jsx(e.strong,{children:"true"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"字符串"})," 如果是空字符串 ",n.jsx(e.code,{children:"''"})," 被计算为 ",n.jsx(e.strong,{children:"false"}),"，否则为 ",n.jsx(e.strong,{children:"true"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`if ({}) { // => true
}

if ([]) { // => true
}

if (0) { // => false
}

if ('0') { // => true
}

if ('') { // => false
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.10 其他"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.10.1【强制】禁止使用 eval。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-eval",children:"no-eval"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"eval"})," 语句存在安全风险，可能导致注入攻击。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const obj = { x: 'foo' };
const key = 'x';
const value = eval('obj.' + key);

// good
const obj = { x: 'foo' };
const key = 'x';
const value = obj[key];
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.10.2【强制】禁止使用 debugger。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-debugger",children:"no-debugger"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"debugger"})," 语句会让程序暂停，并在当前位置开启调试器。它通常在程序调试阶段使用，不应发布到线上。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function isTruthy(x) {
  debugger;
  return Boolean(x);
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.10.3【推荐】禁止使用 alert。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-alert",children:"no-alert"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"alert"})," 语句会使浏览器弹出原生警告框，这可能让人感觉你的程序出错了。如果需要对用户弹出警告信息，好的做法是使用第三方的弹窗组件或自己定义警告框样式。同理，",n.jsx(e.code,{children:"confirm"})," 和 ",n.jsx(e.code,{children:"prompt"})," 语句也不应\b被使用。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
alert('Oops!');

// good - 使用自定义的 Alert 组件
Alert('Oops!');
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.10.4【推荐】生产环境\b禁止使用 console。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-console",children:"no-console"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"console"})," 语句通常在调试阶段使用，发布上线前，应该去掉代码里所有的 ",n.jsx(e.code,{children:"console"})," 语句。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
console.log('Some debug messages..');

// good - 如果你非要使用 console 语句，可以考虑自己\b进行\b封装\b以确保不要在生产环境暴露调试信息
const utils = {
  log: (msg) => {
    if (window.env !== 'product') {
      console.log(msg);
    }
  },
};

utils.log('Some debug messages..');
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.10.5【强制】禁止对原生对象或只读的全局对象进行赋值。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-global-assign",children:"no-global-assign"})]}),`
`,n.jsxs(e.p,{children:["JS 执行环境中会包含一些全局变量和原生对象，如浏览器环境中的 ",n.jsx(e.code,{children:"window"}),"，node 环境中的 ",n.jsx(e.code,{children:"global"})," 、",n.jsx(e.code,{children:"process"}),"，",n.jsx(e.code,{children:"Object"}),"，",n.jsx(e.code,{children:"undefined"})," 等。除了像 ",n.jsx(e.code,{children:"window"})," 这样的众所周知的对象，JS 还提供了数百个内置全局对象，你可能在定义全局变量时无意对它们进行了重新赋值，因此最好的做法是不要定义全局变量。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
window = {};
Object = null;
undefined = 1;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3 注释"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["注释的目的：提高代码的可读性，从而提高代码的可维护性",n.jsx(e.br,{}),`
`,"注释的原则：如无必要，勿增注释；如有必要，尽量详尽"]}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.1【推荐】单行注释使用 //。"}),`
`,n.jsx(e.p,{children:"注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;
`})}),`
`,n.jsx(e.p,{children:"注释行上方需要有一个空行（除非注释行上方是一个块的顶部），以增加可读性："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 注释行上方需要一个空行
function getType() {
  console.log('fetching type...');
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good
function getType() {
  console.log('fetching type...');

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// bad - 注释行上面是一个块的顶部时不需要空行
function getType() {

  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}

// good
function getType() {
  // set the default type to 'no type'
  const type = this.type || 'no type';

  return type;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.2【推荐】多行注释使用 /** ... */，而不是多行的 //。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
// make() returns a new element
// based on the passed in tag name
function make(tag) {
  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["3.3【强制】注释内容和注释符之间需要有一个空格。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/spaced-comment",children:"spaced-comment"})]}),`
`,n.jsx(e.p,{children:"注释内容和注释符之间需要有一个空格，以增加可读性："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
//is current tab
const active = true;

// good
// is current tab
const active = true;

// bad
/**
 *make() returns a new element
 *based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {
  // ...

  return element;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["3.4【参考】合理使用特殊注释标记。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-warning-comments",children:"no-warning-comments"})]}),`
`,n.jsx(e.p,{children:"有时我们发现某个可能的 bug，但因为一些原因还没法修复；或者某个地方还有一些待完成的功能，这时我们需要使用相应的特殊标记注释来告知未来的自己或合作者。最常用的特殊标记有两种："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"// FIXME: 说明问题是什么"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"// TODO: 说明还要做什么或者问题的解决方案"})}),`
`]}),`
`,n.jsxs(e.p,{children:["一个我们不愿看到却很普遍的情况是，我们给代码标记 ",n.jsx(e.code,{children:"FIXME"})," 或 ",n.jsx(e.code,{children:"TODO"})," 后却一直\b没找到时间处理。所以当你做了特殊标记，你应该为它负责，在某个时间把它解决。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class Calculator extends Abacus {
  constructor() {
    super();

    // FIXME: shouldn’t use a global here
    total = 0;

    // TODO: total should be configurable by an options param
    this.total = 0;
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.5【参考】文档类注释使用 jsdoc 规范。"}),`
`,n.jsxs(e.p,{children:["文档类注释，如函数、类、文件、事件等，推荐使用 ",n.jsx(e.a,{href:"http://usejsdoc.org/",children:"jsdoc"})," 规范或类 jsdoc 的规范。"]}),`
`,n.jsx(e.p,{children:"例如："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype = {
  /**
   * 获取书本的标题
   * @returns {string|*}
   */
  getTitle() {
    return this.title;
  },

  /**
   * 设置书本的页数
   * @param pageNum {number} 页数
   */
  setPageNum(pageNum) {
    this.pageNum = pageNum;
  },
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.6【参考】无用的代码注释应被即时删除。"}),`
`,n.jsx(e.p,{children:"无用的注释代码会使程序变得臃肿并降低可读性，应被即时删除。你可以通过版本控制系统找回被删除的代码。"}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"4 命名"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["4.1【参考】文件名：使用小写字母命名。考虑到部分操作系统（如 Windows, MacOS）下文件系统大小写不敏感，推荐使用 ",n.jsx(e.code,{children:"-"})," 连接。例如：hello-world.js。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["4.2【参考】使用小驼峰（camelCase）命名原始类型、对象、函数、实例。",n.jsx(e.a,{href:"https://eslint.org/docs/rules/camelcase",children:"camelcase"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const this_is_my_string = 'foo';
const this_is_my_object = {};
function this_is_my_function() {}

// good
const thisIsMyString = 'foo';
const thisIsMyObject = {};
function thisIsMyFunction() {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["4.3【强制】使用大驼峰（PascalCase）命名类和构造函数。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/new-cap",children:"new-cap"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function user(options) {
  this.name = options.name;
}

const bad = new user({
  name: 'nope',
});

// good
class User {
  constructor(options) {
    this.name = options.name;
  }
}

const good = new User({
  name: 'yup',
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"4.4【参考】全部大写字母&单词间用下划线分割的命名模式（UPPERCASE_VARIABLES）。"}),`
`,n.jsx(e.p,{children:"全大写字母、单词间使用下划线分割的命名模式（UPPERCASE_VARIABLES），仅用于命名常量，且该常量需同时满足如下条件："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"const"})," 关键字声明"]}),`
`,n.jsxs(e.li,{children:["用于 ",n.jsx(e.code,{children:"export"}),"，而不是本文件内"]}),`
`]}),`
`,n.jsxs(e.p,{children:["ES6 后 ",n.jsx(e.code,{children:"const"})," 关键字用于声明常量，被广泛使用，如果所有用 ",n.jsx(e.code,{children:"const"})," 声明的值都用 UPPERCASE_VARIABLES 模式命名会使可读性变差，是没有必要的。因此我们约定 UPPERCASE_VARIABLES 命名模式只用于 export 给其他文件用的常量，如果只在同文件内使用，依然使用正常的命名风格。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - 在本文件中使用的常量，不需使用 UPPERCASE_VARIABLES 风格
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// good
export const THIS_IS_CONSTANT = '一个常量';
`})}),`
`,n.jsxs(e.p,{children:["此外，如果 ",n.jsx(e.code,{children:"export"})," 一个对象，只有对象本身需要使用 UPPERCASE_VARIABLES ，对象属性的 key 仍然使用正常命名风格："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad - unnecessarily uppercases key while adding no semantic value
export const AN_OBJECT = {
  KEY: 'value',
};

// good
export const AN_OBJECT = {
  key: 'value',
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"4.5【参考】模块相关的命名规范。"}),`
`,n.jsxs(e.p,{children:["使用小驼峰（camelCase）命名 ",n.jsx(e.code,{children:"export"})," 的函数："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function makeStyleGuide() {
  // ...
}

export default makeStyleGuide;
`})}),`
`,n.jsxs(e.p,{children:["使用大驼峰（PascalCase）命名 ",n.jsx(e.code,{children:"export"})," 的 class、函数库、字面量对象："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const AnObject = {
  foo: {
    // ...
  },
};

export default AnObject;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["4.6【参考】命名不要以下划线开头或结尾。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-underscore-dangle",children:"no-underscore-dangle"})]}),`
`,n.jsx(e.p,{children:"JS 没有私有属性或私有方法的概念，这样的命名可能会让人误解。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
this.__firstName__ = 'Panda';
this.firstName_ = 'Panda';
this._firstName = 'Panda';

// good
this.firstName = 'Panda';
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"5 关于 ES5"}),`
`,n.jsx(e.p,{children:"这个章节是为还在使用 ES5 及之前版本 JS 的同学准备。因为本规约以 ES6 编写，你可以通过阅读本章节来了解 ES5 中有哪些需要额外注意的地方。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"5.1【推荐】ES5 中的变量声明。"}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"var"})," 进行声明："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// good
var foo = 'foo';
`})}),`
`,n.jsxs(e.p,{children:["需注意，",n.jsx(e.code,{children:"var"})," 声明的变量不是块作用域而是函数作用域："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 将打印 2, 2, 2，而非 0, 1, 2
for (var i = 0; i < 3; ++i) {
  var iteration = i;
  setTimeout(function() { console.log(iteration); }, i * 1000);
}
`})}),`
`,n.jsxs(e.p,{children:["另外，",n.jsx(e.code,{children:"var"})," 声明的变量会被提升到其作用域顶部："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// 变量声明会被提升到函数顶部，但赋值不会被提升
function example() {
  console.log(declaredButNotAssigned); // => undefined
  console.log(notDeclared); // => throws a ReferenceError
  var declaredButNotAssigned = true;
}
`})}),`
`,n.jsx(e.p,{children:"即便如此，我们还是推荐在变量使用前再进行声明，而不是统一在作用域开始处声明，以增强可读性。当然，如果你担心声明提升问题会带来隐患，也可以选择统一在\b\b作用域开始处进行声明。"}),`
`,n.jsxs(e.p,{children:["不要在声明前就使用变量，这样做可能给人带来疑惑和隐患。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-use-before-define.html",children:n.jsx(e.code,{children:"no-use-before-define"})})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
console.log(foo); // => undefined
var foo = 'foo';

// good
var foo = 'foo';
console.log(foo); // => foo
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.2【强制】对于逗号分隔的多行结构，不要加上最后一个\b行末逗号。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/comma-dangle",children:"comma-dangle"})]}),`
`,n.jsx(e.p,{children:"这样做会在 IE6/7 和 IE9 怪异模式下引起问题。另外，多余的逗号在某些 ES3 的实现里会增加数组的长度。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
var hero = {
  firstName: 'Kevin',
  lastName: 'Flynn',
};

// good
var hero = {
  firstName: 'Kevin',
  lastName: 'Flynn'
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"5.3【参考】使用 Array 的 slice 方法进行数组复制和类数组对象转换。"}),`
`,n.jsx(e.p,{children:"数组复制："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`var items = [1, 2, 3];

// bad
var itemsCopy = [];
for (var i = 0; i < items.length; i++) {
  itemsCopy[i] = items[i];
}

// good
var itemsCopy = items.slice();
`})}),`
`,n.jsx(e.p,{children:"将类数组对象转换成数组："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`function trigger() {
  var args = Array.prototype.slice.call(arguments);
  // ...
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"5.4【推荐】不要使用保留字作为对象的属性名。"}),`
`,n.jsxs(e.p,{children:["不要使用",n.jsx(e.a,{href:"http://es5.github.io/#x7.6.1",children:"保留字"}),"作为对象的属性名，它们在 IE8 中不工作"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
var superman = {
  class: 'alien',
  default: { clark: 'kent' },
  private: true
};

// good
var superman = {
  type: 'alien',
  defaults: { clark: 'kent' },
  hidden: true
};
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"配套工具"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-config-ali",children:"eslint-config-ali"}),"：本规约配套的 ",n.jsx(e.a,{href:"http://eslint.org/",children:"ESLint"})," 规则包"]}),`
`]}),`
`,n.jsx(e.h2,{children:"参考资料"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/airbnb/javascript",children:"Airbnb JavaScript Style Guide"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://google.github.io/styleguide/jsguide.html",children:"Google JavaScript Style Guide"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://eslint.org/docs/rules/",children:"ESLint rules"})}),`
`]})]})}function Mm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Jd,{...t})}):Jd(t)}Mm.displayName="MDXContent";const ZI=Object.freeze(Object.defineProperty({__proto__:null,default:Mm,filepath:KI,frontmatter:YI,title:QI},Symbol.toStringTag,{value:"Module"})),ek="docs/coding/4.react-style-guide.md",tk="React 编码规约",nk=void 0;function Kd(t){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"React 编码规约"}),`
`,n.jsx(e.h2,{children:"1 编码风格"}),`
`,n.jsx(e.h3,{children:"1.1 缩进"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1.1【强制】JSX 语法使用 2 个空格缩进。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md",children:"react/jsx-indent"})," ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md",children:"react/jsx-indent-props"})," ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md",children:"react/jsx-closing-tag-location"})]}),`
`,n.jsx(e.p,{children:"对于 JSX 语法，遵循与 JS 规约和 HTML 规约一致的 2 个空格缩进，不要使用 4 空格或 tab 缩进："}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Foo
    superLongParam="bar"
    anotherSuperLongParam="baz"
>
    <Quux />
</Foo>

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.2 空格"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.2.1【强制】自闭合标签的斜线前有且仅有一个空格。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-multi-spaces",children:"no-multi-spaces"})," ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md",children:"react/jsx-tag-spacing"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.2.2【强制】JSX 行内属性之间仅有一个空格。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md",children:"react/jsx-props-no-multi-spaces"})]}),`
`,n.jsx(e.p,{children:"同一行中标签和属性之间、属性之间只有一个空格。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<App  spacy />
<App too  spacy />

// good
<App cozy />
<App very cozy />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.2.3【强制】JSX 属性的大括号内部两侧无空格。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md",children:"react/jsx-curly-spacing"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.2.4【强制】不要在 JSX 属性的等号两边加空格。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/jsx-equals-spacing",children:"jsx-equals-spacing"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Hello name = {firstname} />;

// good
<Hello name={firstname} />;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.3 引号"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3.1【强制】JSX 属性使用双引号，不要使用单引号。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/jsx-quotes",children:"jsx-quotes"})]}),`
`,n.jsx(e.p,{children:`为什么？HTML 属性通常使用双引号而不是单引号，因此 JSX 属性沿用了这种约定。
其他 JS 使用单引号。`}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.4 小括号"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.4.1【强制】多行的 JSX 标签需用小括号包裹。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md",children:"react/jsx-wrap-multilines"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
render() {
  return <MyComponent variant="long body" foo="bar">
           <MyChild />
         </MyComponent>;
}

// good
render() {
  return (
    <MyComponent variant="long body" foo="bar">
      <MyChild />
    </MyComponent>
  );
}

// good - 单行的 jsx 无需加圆括号
render() {
  const body = <div>hello</div>;
  return <MyComponent>{body}</MyComponent>;
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.5 标签"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.5.1【强制】无子元素的标签需写成自闭合标签。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md",children:"react/self-closing-comp"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.5.2【强制】标签属性的换行。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md",children:"react/jsx-max-props-per-line"})," ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md",children:"react/jsx-first-prop-new-line"})]}),`
`,n.jsx(e.p,{children:"对 JSX 标签属性的换行，遵循以下规则："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"标签名和它的属性可以写在一行，前提是不超过单行最大 100 字符数的限制"}),`
`,n.jsx(e.li,{children:"如果标签有多个属性，且存在换行，则每个属性都需要换行独占一行"}),`
`]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - 属性应全部换行，或全部跟组件名写在一行
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// good - 组件名和属性可以写在一行，前提是不超过单行最大字符限制
<Foo bar="bar" />

// bad
<Hello foo={{
    }}
    bar />

// good
<Hello foo={{
}} />

<Hello
    foo={{
    }}
    bar
/>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.5.3【强制】标签的属性有多行时，结束标签需另起一行。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md",children:"react/jsx-closing-bracket-location"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.5.4【强制】禁止在有子节点的组件或 DOM 元素中使用 dangerouslySetInnerHTML 属性。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md",children:"react/no-danger-with-children"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<div dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</div>

<Hello dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</Hello>

// good
<div dangerouslySetInnerHTML={{ __html: "HTML" }} />

<Hello dangerouslySetInnerHTML={{ __html: "HTML" }} />

<div>
  Children
</div>

<Hello>
  Children
</Hello>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.5.5【强制】HTML 自闭标签不能有子节点。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md",children:"react/void-dom-elements-no-children"})]}),`
`,n.jsx(e.p,{children:"HTML 自闭标签，比如 img，br，hr，被统称为空 DOM 元素，不能给他们定义子节点。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<br>Children</br>
<br dangerouslySetInnerHTML={{ __html: 'HTML' }} />

// good
<div>Children</div>
<div dangerouslySetInnerHTML={{ __html: 'HTML' }} />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.5.6【推荐】不要使用危险属性。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md",children:"react/no-danger"})]}),`
`,n.jsxs(e.p,{children:["React中的危险属性是指那些已知会引起应用程序漏洞的属性。这些属性命名为 ",n.jsx(e.code,{children:"dangerouslyXyz"})," 已经清楚地表明它们是危险的，应该尽量避免使用。",n.jsx(e.a,{href:"https://facebook.github.io/react/tips/dangerously-set-inner-html.html",children:"详细文档"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>;

// good
<div>Hello World</div>;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.5.7【强制】JSX 语句的文本节点中不要使用注释字符串（例如，以//或/ *开头）。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md",children:"react/jsx-no-comment-textnodes"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
class Hello extends React.Component {
  render() {
    return (
      <div>// empty div</div>
    );
  }
};

class Hello extends React.Component {
  render() {
    return (
      <div>
        /* empty div */
      </div>
    );
  }
};

// good
class Hello extends React.Component {
  render() {
    return <div>{/* empty div */}</div>;
  }
};

class Hello extends React.Component {
  render() {
    return <div /* empty div */></div>;
  }
};

class Hello extends React.Component {
  render() {
    return <div className={'foo' /* temp class */}</div>;
  }
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[`1.5.8【强制】标签中禁止出现无意义字符，比如 > " } '。eslint: `,n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md",children:"react/no-unescaped-entities"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:">"})," 可用 ",n.jsx(e.code,{children:"&gt;"})," 替代"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:'"'})," 可用 ",n.jsx(e.code,{children:"&quot;"}),"，",n.jsx(e.code,{children:"&ldquo;"})," ， ",n.jsx(e.code,{children:"&#34; "})," 或者  ",n.jsx(e.code,{children:"&rdquo;"}),"  替代"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"'"})," 可用 ",n.jsx(e.code,{children:"&apos;"}),"，",n.jsx(e.code,{children:"&lsquo;"}),"，",n.jsx(e.code,{children:"&#39;"})," 或者 ",n.jsx(e.code,{children:"&rsquo;"})," 替代"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"}"})," 可用 ",n.jsx(e.code,{children:"&#125;"})," 替代"]}),`
`,n.jsxs(e.p,{children:["或者写在表达式里，比如 ",n.jsx(e.code,{children:" <div>{'>'}</div>"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<MyComponent
  a="b">  {/* oops! */}
  c="d"
  Intended body text
</MyComponent>

// good
<div> &gt; </div>
<div> {'>'} </div>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2 语言特性"}),`
`,n.jsx(e.h3,{children:"2.1 基本"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.1【参考】使用 ",n.jsx(e.code,{children:"JSX"})," 语法时，防止 ",n.jsx(e.code,{children:"React"})," 变量被标记为未使用，可以使用 ",n.jsx(e.code,{children:"@jsx"})," 标注来指定 ",n.jsx(e.code,{children:"React"})," 之外的变量。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md",children:"react/jsx-uses-react"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
var React = require('react');
// nothing to do with React

/** @jsx Foo */
var React = require('react');
var Hello = <div>Hello {this.props.name}</div>;

// good
var React = require('react');
var Hello = <div>Hello {this.props.name}</div>;

/** @jsx Foo */
var Foo = require('foo');
var Hello = <div>Hello {this.props.name}</div>;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.2【强制】不要使用未声明的组件。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md",children:"react/jsx-no-undef"})," ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md",children:"react/jsx-uses-vars"})]}),`
`,n.jsx(e.p,{children:"不允许没有引用组件就直接使用，也可能是组件名拼写错误。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Hello name="John" />;

// good
import Hello from './Hello';

<Hello name="John" />;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.3【强制】每个文件只包含一个 React 组件。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md",children:"react/no-multi-comp"})]}),`
`,n.jsxs(e.p,{children:["但是可以包含多个",n.jsx(e.a,{href:"https://reactjs.org/docs/components-and-props.html#function-and-class-components",children:"函数组件"}),"。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.4【强制】不要在函数组件中使用 this。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md",children:"react/no-this-in-sfc"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
function Foo(props, context) {
  return (
    <div>
      {this.context.foo ? this.props.bar : ''}
    </div>
  );
}

// good
function Foo(props, context) {
  return (
    <div>
      {context.foo ? props.bar : ''}
    </div>
  );
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.5【强制】使用 ES6 class 创建组件 ，而不是 ",n.jsx(e.a,{href:"https://reactjs.org/docs/react-without-es6.html",children:"createReactClass"})," 。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md",children:"react/prefer-es6-class"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
const Listing = createReactClass({
 // ...
 render() {
   return <div>{this.state.hello}</div>;
 }
});

// good
class Listing extends React.Component {
 // ...
 render() {
   return <div>{this.state.hello}</div>;
 }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.6【参考】如果组件没有内部状态或 refs ，应使用函数组件，而不是类组件。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md",children:"react/prefer-stateless-function"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
class Listing extends React.Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// bad
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.1.7【强制】不要使用 React.createElement，除非你不是用 JSX 文件初始化应用程序。"}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.2 方法"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.1【推荐】不要在 JSX 属性中使用 .bind()。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md",children:"react/jsx-no-bind"})]}),`
`,n.jsx(e.p,{children:"这不利于组件性能，每次 render 都会创建一个新的函数。"}),`
`,n.jsx(e.p,{children:"有 2 种替代方案："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["在 ",n.jsx(e.code,{children:"constructor"})," 中绑定事件处理函数"]}),`
`,n.jsxs(e.li,{children:["使用 react 的 ",n.jsx(e.a,{href:"https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding",children:"property initializers"})," 特性或 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/core-decorators#autobind",children:"ES7 autobind decorator "})]}),`
`]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
class extends React.Component {
  onClickDiv() {
    // ...
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// good - 在 constructor 中绑定事件处理函数
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // ...
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}

// good - 使用 react 的 property initializers 特性
class extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickDiv = () => {
    // ...
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.2【强制】render 方法必须要有返回值。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md",children:"react/require-render-return"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.3【强制】禁止使用 ReactDOM.render 的返回值。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md",children:"react/no-render-return-value"})]}),`
`,n.jsx(e.p,{children:"render()返回 ReactComponent 实例的引用。然而，应该避免使用这个返回值，因为在某些情况下，React 的未来版本中 render 方法可能会异步执行。如果需要引用 ReactComponent 实例，根元素需要增加 ref 回调。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
const inst = ReactDOM.render(<App />, document.body);
doSomethingWithInst(inst);

// good
ReactDOM.render(<App ref={doSomethingWithInst} />, document.body);

ReactDOM.render(<App />, document.body, doSomethingWithInst);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.4【强制】在扩展 React.PureComponent 时禁止使用 shouldComponentUpdate。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md",children:"react/no-redundant-should-component-update"})]}),`
`,n.jsx(e.p,{children:"定义 React.PureComponent 扩展组件时使用 shouldComponentUpdate 虽然有效，但是扩展 PureComponent 变得毫无意义。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
class Foo extends React.PureComponent {
  shouldComponentUpdate() {
    // do check
  }

  render() {
    return <div>Radical!</div>
  }
}

function Bar() {
  return class Baz extends React.PureComponent {
    shouldComponentUpdate() {
      // do check
    }

    render() {
      return <div>Groovy!</div>
    }
  }
}

// good
class Foo extends React.Component {
  shouldComponentUpdate() {
    // do check
  }

  render() {
    return <div>Radical!</div>
  }
}

function Bar() {
  return class Baz extends React.Component {
    shouldComponentUpdate() {
      // do check
    }

    render() {
      return <div>Groovy!</div>
    }
  }
}

class Qux extends React.PureComponent {
  render() {
    return <div>Tubular!</div>
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.5【强制】禁止使用已经废弃的方法。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md",children:"react/no-deprecated"})]}),`
`,n.jsx(e.p,{children:"随着React版本升级，有些方法逐渐被弃用。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
React.render(<MyComponent />, root);

React.unmountComponentAtNode(root);

React.findDOMNode(this.refs.foo);

React.renderToString(<MyComponent />);

React.renderToStaticMarkup(<MyComponent />);

React.createClass({ /* Class object */ });

const propTypes = {
  foo: PropTypes.bar,
};

//Any factories under React.DOM
React.DOM.div();

import React, { PropTypes } from 'react';

class Foo extends React.Component {
  componentWillMount() { }
  componentWillReceiveProps() { }
  componentWillUpdate() { }
  // ...
}

class Foo extends React.PureComponent {
  componentWillMount() { }
  componentWillReceiveProps() { }
  componentWillUpdate() { }
  // ...
}

var Foo = createReactClass({
  componentWillMount: function() {},
  componentWillReceiveProps: function() {},
  componentWillUpdate: function() {},
  // ...
})

// good
ReactDOM.render(<MyComponent />, root);

// When [1, {"react": "0.13.0"}]
ReactDOM.findDOMNode(this.refs.foo);

import { PropTypes } from 'prop-types';

class Foo {
  componentWillMount() { }
  componentWillReceiveProps() { }
  componentWillUpdate() { }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.6【强制】不要使用 findDOMNode。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md",children:"react/no-find-dom-node"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage",children:"严格模式下已经弃用 findDOMNode"}),"。"]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
class MyComponent extends Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />
  }
}

// good
class MyComponent extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    return <div ref={node => this.node = node} />
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.2.7【强制】不要使用 componentWillMount、componentWillReceiveProps、componentWillUpdate。"}),`
`,n.jsxs(e.p,{children:["不要再使用 ",n.jsx(e.a,{href:"https://reactjs.org/docs/react-component.html#unsafe_componentwillmount",children:"componentWillMount"})," 、",n.jsx(e.a,{href:"https://reactjs.org/docs/react-component.html#unsafe_componentwillreceiveprops",children:"componentWillReceiveProps"}),"、",n.jsx(e.a,{href:"https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate",children:"componentWillUpdate"}),"。使用这些生命周期方法通常会导致错误和不一致，因此React 计划在17版本删掉这些方法。"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"componentWillMount() 可以用 constructor() 或 componentDidMount() 替代；"}),`
`,n.jsx(e.li,{children:"componentWillReceiveProps() 可以用 componentDidUpdate() 或其他方式替换；"}),`
`,n.jsx(e.li,{children:"componentWillUpdate() 可以用 componentDidUpdate() 替换或者把逻辑写在 getSnapshotBeforeUpdate() 中。"}),`
`]}),`
`,n.jsxs(e.p,{children:["使用",n.jsx(e.a,{href:"https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles",children:"rename-unsafe-lifecycles codemod"}),"自动为不推荐使用的生命周期钩子添加“UNSAFE_”前缀。转化为"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"UNSAFE_componentWillMount()"}),`
`,n.jsx(e.li,{children:"UNSAFE_componentWillReceiveProps()"}),`
`,n.jsx(e.li,{children:"UNSAFE_componentWillUpdate()"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.8【强制】不要在 componentWillUpdate 内改变 state 值。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md",children:"react/no-will-update-set-state"})]}),`
`,n.jsxs(e.p,{children:["首先，不要再使用 componentWillUpdate，",n.jsx(e.a,{href:"https://reactjs.org/docs/react-component.html#unsafe_componentwillupdate",children:"React 未来在17版本计划删掉 componentWillUpdate"}),"。通常可以用 componentDidUpdate() 替代。使用",n.jsx(e.a,{href:"https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles",children:"rename-unsafe-lifecycles codemod"}),"自动更新组件。"]}),`
`,n.jsxs(e.p,{children:["不要在 componentWillUpdate 调用 this.setState()。若你需要更新状态响应属性的变更，使用 ",n.jsx(e.a,{href:"https://react.docschina.org/docs/react-component.html#static-getderivedstatefromprops",children:"getDerivedStateFromProps()"})," 代替。在 componentWillUpdate 中改变 state 的值可能会引起组件的不确定状态。"]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
class Hello extends React.Component {
  componentWillUpdate() {
    this.setState({
      name: this.props.name.toUpperCase()
    });
  }

  render() {
    return <div>Hello {this.state.name}</div>;
  }
};

// good
class Hello extends React.Component {
  componentWillUpdate() {
    this.props.prepareHandler();
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
};

class Hello extends React.Component {
  componentWillUpdate() {
    this.prepareHandler(function callback(newName) {
      this.setState({
        name: newName
      });
    });
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }
};
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.3 Props"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.1【强制】采用小驼峰风格命名 prop 。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md",children:"react/no-unknown-property"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.2【强制】声明的 prop 必须被使用。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md",children:"react/no-unused-prop-types"})]}),`
`,n.jsx(e.p,{children:"声明而未使用的 prop 可能带来潜在的问题，也会给维护者造成困扰，应将它们删除。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
var Hello = createReactClass({
  propTypes: {
    name: PropTypes.string
  },
  render: function() {
    return <div>Hello Bob</div>;
  }
});

var Hello = createReactClass({
  propTypes: {
    firstname: PropTypes.string.isRequired,
    middlename: PropTypes.string.isRequired, // middlename is never used below
    lastname: PropTypes.string.isRequired
  },
  render: function() {
    return <div>Hello {this.props.firstname} {this.props.lastname}</div>;
  }
});

// good
var Hello = createReactClass({
  propTypes: {
    name: PropTypes.string
  },
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.3【参考】 props，state 优先使用解构赋值。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md",children:"react/destructuring-assignment"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
const MyComponent = (props) => {
  return (<div id={props.id} />)
};

// good
const MyComponent = ({id}) => {
  return (<div id={id} />)
};

const MyComponent = (props, context) => {
  const { id } = props;
  return (<div id={id} />)
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.4【强制】prop 值为 true 时，可以省略它的值。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md",children:"react/jsx-boolean-value"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Foo
  hidden={true}
/>

// good
<Foo
  hidden
/>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.5【推荐】prop 需要 propTypes 验证。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md",children:"react/prop-types"})]}),`
`,n.jsx(e.p,{children:"PropTypes 验证接收到的数据从而提高组件的可重用性。如果其他开发传入了不正确数据类型，可以及时警告。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

// good
class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.6【推荐】不要使用模糊的类型检查器。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md",children:"react/forbid-prop-types"})]}),`
`,n.jsx(e.p,{children:"不要使用模糊的类型验证，比如 any, array, object。它们可以用其他明确的类型代替。any可以替换为任意类型，array 和 object 可以分别替换为 arrayOf 和 shape。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
class MyComponent extends React.Component {
  ...
}

MyComponent.propTypes = {
  // 任意类型的数据
  optionalAny: PropTypes.any,
  // 一个未指定元素类型的数组
  optionalArray: PropTypes.array,
  // 一个未指定属性类型的对象
  optionalObject: PropTypes.object
};

// good
class MyComponent extends React.Component {
  ...
}

MyComponent.propTypes = {
  // 指明待验证数据的特性类型，确保接收的数据是有效的
  optionalAny: PropTypes.string,
  requiredAny: PropTypes.any.isRequired,
  // 一个指定了元素类型的数组
  optionalArray: PropTypes.arrayOf(PropTypes.number),
  // 一个指定了属性类型的对象
  optionalObject: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }),
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.7【参考】属性需要指定 defaultProps，除了 isRequired 的属性。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md",children:"react/require-default-props"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
function MyStatelessComponent({ foo, bar }) {
  return <div>{foo}{bar}</div>;
}
MyStatelessComponent.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
};

// good
function MyStatelessComponent({ foo, bar }) {
  return <div>{foo}{bar}</div>;
}
MyStatelessComponent.propTypes = {
  foo: PropTypes.number.isRequired,
  bar: PropTypes.string,
};
MyStatelessComponent.defaultProps = {
  bar: '',
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.8【强制】如果属性有 isRequired 类型检查，不要在 defaultProps 内对其赋值。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md",children:"react/default-props-match-prop-types"})]}),`
`,n.jsx(e.p,{children:"propTypes 类型检查发生在 defaultProps 解析之后，如果在 defaultProps 赋值，isRequired 类型检查没有实际意义。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string
};

MyStatelessComponent.defaultProps = {
  foo: "foo"
};

// good
MyStatelessComponent.propTypes = {
  foo: React.PropTypes.string.isRequired,
  bar: React.PropTypes.string
};

MyStatelessComponent.defaultProps = {
    bar: 'some default'
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.9【推荐】不要用数组的索引值作为 map 生成元素的 key。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md",children:"react/no-array-index-key"})]}),`
`,n.jsxs(e.p,{children:["为什么？React 使用 key 来标识哪些项已更改，已添加或已删除， ",n.jsx(e.a,{href:"https://reactjs.org/docs/lists-and-keys.html#keys",children:"key 应该始终稳定"}),"。使用不稳定的 ID 是一种",n.jsx(e.a,{href:"https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318",children:"反模式"}),"，因为它不能唯一标识元素。如果数组重新排序或将元素添加到数组的开头，可能会更改索引导致不必要的渲染，对性能产生负面影响。"]}),`
`,n.jsx(e.p,{children:"如果数组的顺序可能发生变化，我们不建议使用索引值作为 key。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
{todos.map((todo, index) =>
  <Todo
    {...todo}
    key={index}
  />
)}

// good
{todos.map(todo => (
  <Todo
    {...todo}
    key={todo.id}
  />
))}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.10【强制】禁止将 children 作为属性名。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md",children:"react/no-children-prop"})]}),`
`,n.jsxs(e.p,{children:["使用 JSX 时，",n.jsx(e.code,{children:"children"})," 应嵌套在开始和结束标签之间。不使用JSX时，应将 ",n.jsx(e.code,{children:"children"})," 作为附加参数传递给 ",n.jsx(e.code,{children:"React.createElement"}),"。"]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<div children='Children' />

<MyComponent children={<AnotherComponent />} />
<MyComponent children={['Child 1', 'Child 2']} />

React.createElement("div", { children: 'Children' })

// good
<div>Children</div>

<MyComponent>Children</MyComponent>

<MyComponent>
  <span>Child 1</span>
  <span>Child 2</span>
</MyComponent>

React.createElement("div", {}, 'Children')
React.createElement("div", 'Child 1', 'Child 2')
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.11【强制】不要声明重复的属性名。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md",children:"react/jsx-no-duplicate-props"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<Hello name="John" name="John" />;

// good
<Hello firstname="John" lastname="Doe" />;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.12【强制】style 的属性值必须是一个对象。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md",children:"react/style-prop-object"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<div style="color: 'red'" />
<div style={true} />
<Hello style={true} />

const styles = true;
<div style={styles} />

React.createElement("div", { style: "color: 'red'" });
React.createElement("div", { style: true });
React.createElement("Hello", { style: true });

const styles = true;
React.createElement("div", { style: styles });

// good
<div style={{ color: "red" }} />
<Hello style={{ color: "red" }} />

const styles = { color: "red" };
<div style={styles} />

React.createElement("div", { style: { color: 'red' }});
React.createElement("Hello", { style: { color: 'red' }});

const styles = { height: '100px' };
React.createElement("div", { style: styles });
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3.13【推荐】不要单独使用 target='_blank'。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md",children:"react/jsx-no-target-blank"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"target='_blank'"})," 常用于在新标签页打开。使用这个属性可能造成严重的安全问题。建议和 ",n.jsx(e.code,{children:"rel='noreferrer noopener'"})," 一起使用。",n.jsx(e.a,{href:"https://mathiasbynens.github.io/rel-noopener/",children:"详见"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
const Hello = <a target='_blank' href="http://example.com/"></a>
const Hello = <a target='_blank' href={ dynamicLink }></a>

// good
const Hello = <p target='_blank'></p>
const Hello = <a target='_blank' rel='noopener noreferrer' href="http://example.com"></a>
const Hello = <a target='_blank' href="relative/path/in/the/host"></a>
const Hello = <a target='_blank' href="/absolute/path/in/the/host"></a>
const Hello = <a></a>
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.4 State"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.1【强制】不要在 setState 中使用 this.state。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md",children:"react/no-access-state-in-setstate"})]}),`
`,n.jsx(e.p,{children:`在 setState 中使用 this.state 可能导致错误，当两个 state 在同一个批处理中时，引用的是旧状态而不是新状态。
为避免这种情况，请在回调中使用 preState 作为第一个参数。`}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
function increment() {
  this.setState({ value: this.state.value + 1 });
}

// good
function increment() {
  this.setState(prevState => ({ value: prevState.value + 1 }));
}
`})}),`
`,n.jsx(e.p,{children:"bad case 中假设 value 为1，有两个 setState 操作在同一个批处理中执行，实际执行的是："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`setState({ value: 1 + 1 })
setState({ value: 1 + 1 })
`})}),`
`,n.jsx(e.p,{children:"good case 中 react 会以正确的更新后的状态调用参数。实际执行的是："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`setState({ value: 1 + 1 })
setState({ value: 2 + 1 })
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.2【强制】声明的 state 必须被使用。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md",children:"react/no-unused-state"})]}),`
`,n.jsx(e.p,{children:"声明而未使用的 state 可能带来潜在的问题，也会给维护者造成困扰，应将它们删除。"}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
class MyComponent extends React.Component {
  state = { foo: 0 };

  render() {
    return <SomeComponent />;
  }
}

var UnusedGetInitialStateTest = createReactClass({
  getInitialState: function() {
    return { foo: 0 };
  },
  render: function() {
    return <SomeComponent />;
  }
})

// good
class MyComponent extends React.Component {
  state = { foo: 0 };

  render() {
    return <SomeComponent foo={this.state.foo} />;
  }
}

var UnusedGetInitialStateTest = createReactClass({
  getInitialState: function() {
    return { foo: 0 };
  },
  render: function() {
    return <SomeComponent foo={this.state.foo} />;
  }
})
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.5 Refs"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.1【强制】使用 ref 回调函数或 React.createRef()，不要使用字符串。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md",children:"react/no-string-refs"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - 使用字符串
class MyComponent extends React.Component {
  componentDidMount() {
    this.refs.inputRef.focus();
  }

  render() {
    return <input type="text" ref="inputRef" />;
  }
}

// good - 使用回调函数
class MyComponent extends React.Component {
  componentDidMount() {
    this.inputRef.focus();
  }

  render() {
    return <input type="text" ref={(ele) => { this.inputRef = ele; }} />;
  }
}

// good - 使用 React.createRef()，React V16 后版本支持
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.6 顺序"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.6.1【参考】组件方法的排序规则。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md",children:"react/sort-comp"})]}),`
`,n.jsx(e.p,{children:"React 组件内有声明周期方法、事件处理方法、render 方法等几类方法，指定这些方法按固定的顺序排序可以增强代码的一致性，方便查找和阅读。"}),`
`,n.jsx(e.p,{children:"我们推荐的方法排序如下："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["可选的 ",n.jsx(e.code,{children:"static"})," 方法"]}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"constructor"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"getChildContext"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"componentWillMount"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"componentDidMount"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"componentWillReceiveProps"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"shouldComponentUpdate"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"componentWillUpdate"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"componentDidUpdate"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"componentWillUnmount"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"clickHandlers 或 eventHandlers"})," 比如 ",n.jsx(e.code,{children:"onClickSubmit()"})," 或 ",n.jsx(e.code,{children:"onChangeDescription()"})]}),`
`,n.jsxs(e.li,{children:[n.jsxs(e.em,{children:[n.jsx(e.code,{children:"render"})," 的 getter 方法"]})," 比如 ",n.jsx(e.code,{children:"getSelectReason()"})," 或 ",n.jsx(e.code,{children:"getFooterContent()"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.em,{children:"可选的 render 方法"})," 比如 ",n.jsx(e.code,{children:"renderNavigation()"})," 或 ",n.jsx(e.code,{children:"renderProfilePicture()"})]}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"render"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"2.7 Mixins"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.7.1【强制】不要使用 mixins。"}),`
`,n.jsx(e.p,{children:"Mixins 引入了隐式依赖，可能导致命名冲突，并导致滚雪球式的复杂度。大多数使用 mixin 的场景都可以通过组件、高阶组件或工具模块以更好的方式完成。"}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3 命名"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["3.1【强制】文件扩展名： 使用 .jsx、.tsx、.js 或 .ts 作为 React 组件的文件扩展名。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md",children:"react/jsx-filename-extension"})]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["3.2【强制】引用名：使用大驼峰风格命名引用的组件，使用小驼峰风格命名引用组件的实例。eslint: ",n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md",children:"react/jsx-pascal-case"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
import reservationCard from './reservation-card';

// good
import ReservationCard from './reservation-card';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.3【推荐】高阶组件命名：将高阶组件名和传入组件名组合作为 displayName。"}),`
`,n.jsxs(e.p,{children:["例如，高阶组件 ",n.jsx(e.code,{children:"withFoo()"})," ，当传入组件 ",n.jsx(e.code,{children:"Bar"})," 时，应该产生一个组件，应使用 withFoo(Bar) 作为生成组件的  displayName。"]}),`
`,n.jsxs(e.p,{children:["组件的 ",n.jsx(e.code,{children:"displayName"})," 可被开发者工具和报错信息使用，这种组合的命名方式能清晰地表达高阶组件和被包裹组件的关系。"]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
export default function withFoo(WrappedComponent) {
  return function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }
}

// good
export default function withFoo(WrappedComponent) {
  function WithFoo(props) {
    return <WrappedComponent {...props} foo />;
  }

  const wrappedComponentName = WrappedComponent.displayName
    || WrappedComponent.name
    || 'Component';

  WithFoo.displayName = \`withFoo(\${wrappedComponentName})\`;
  return WithFoo;
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"4 Hooks"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["4.1【强制】只在最顶层调用 Hooks，不要在循环、条件和嵌套函数中调用 Hooks。eslint: ",n.jsx(e.a,{href:"https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level",children:"rules of Hooks - only call Hooks at the top level"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - call Hooks inside conditions
function ComponentWithConditionalHook() {
  if (cond) {
    useConditionalHook();
  }
}

// bad - call Hooks inside loops
function ComponentWithHookInsideLoop() {
  while (cond) {
    useHookInsideLoop();
  }
}

// bad - call Hooks inside callback
function ComponentWithHookInsideCallback() {
  useEffect(() => {
    useHookInsideCallback();
  });
}

// good
function ComponentWithHook() {
  useHook();
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["4.2【强制】Hooks 命名必须以 ",n.jsx(e.code,{children:"use"})," 开头，小驼峰形式"]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
const customHook = () => {}

// good
const useCustomHook = () => {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["4.3【强制】只在 React 函数组件和自定义 Hooks 中调用 Hooks，不能在普通的 JavaScript 函数中调用 Hooks。eslint: ",n.jsx(e.a,{href:"https://reactjs.org/docs/hooks-rules.html#only-call-hooks-from-react-functions",children:"rules of Hooks - only call Hooks from React functions"})]}),`
`,n.jsx(e.pre,{imports:{},children:n.jsx(e.code,{className:"language-jsx",children:`// bad - call Hooks inside class componennt
class ClassComponentWithHook extends React.Component {
  render() {
    React.useState();
  }
}

// bad - call Hooks inside normal function
function normalFunctionWithHook() {
  useHookInsideNormalFunction();
}

// good - call Hooks inside function component
function ComponentWithHook() {
  useHook();
}

// good - call Hooks inside custom Hooks
function useHookWithHook() {
  useHook();
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["4.4【推荐】",n.jsx(e.code,{children:"useEffect"})," 及",n.jsx(e.a,{href:"https://github.com/facebook/react/blob/3c1a7ac87c5b4903aa0de02d11bd9ec2590ad598/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js#L1518",children:"类似 Hooks "}),"需要声明所有依赖。eslint: ",n.jsx(e.a,{href:"https://github.com/facebook/react/issues/14920",children:"exhaustive-deps"})]}),`
`,n.jsxs(e.p,{children:["此规则在某些场景下可能过于严格，并且 ESLint autofix 可能会造成一些",n.jsx(e.a,{href:"https://github.com/facebook/react/issues/16313",children:"问题"}),"，因此需注意："]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["升级 ",n.jsx(e.code,{children:"eslint-plugin-react-hooks"})," 到 2.4.0 版本及以上，因为 ",n.jsx(e.a,{href:"https://github.com/facebook/react/blob/master/packages/eslint-plugin-react-hooks/CHANGELOG.md#240",children:"2.4.0 版本后该规则的 autofix 被默认禁用"})]}),`
`,n.jsxs(e.li,{children:["如果某些场景下此规则确实不适用，可以通过 ESLint 行注释手动禁用此规则，在行尾添加： ",n.jsx(e.code,{children:"// eslint-disable-line react-hooks/exhaustive-deps"})]}),`
`]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
function MyComponent() {
  const local = {};
  useEffect(() => {
    console.log(local);
  }, []);
}

// good
function MyComponent() {
  const local = {};
  useEffect(() => {
    console.log(local);
  }, [local]);
}
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"5 无障碍"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://www.w3.org/TR/wai-aria/",children:"无障碍丰富互联网应用规范（WAI-ARIA，简称 ARIA）"}),"是 W3C 发布的技术规范，定义了一组可用于元素的 HTML 特性，作为对 HTML 语义化的补充，让残障人士能更加便利的访问 Web 内容和使用 Web 应用。"]}),`
`,n.jsx(e.p,{children:"本章节会涉及到一些 WAI-ARIA 规范中的术语："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["角色（role）：定义了元素的种类。如 ",n.jsx(e.code,{children:'role="button"'})," 告诉屏幕阅读器这是一个按钮元素。"]}),`
`,n.jsxs(e.li,{children:["属性（property）：通过给元素定义一些属性，让他们具备更多的语义。例如 ",n.jsx(e.code,{children:'aria-required="true"'})," 意味着该元素在表单上是必填的。"]}),`
`,n.jsxs(e.li,{children:["状态（state）：用于表达元素当前的条件的特殊属性，例如 ",n.jsx(e.code,{children:'aria-disabled="true"'}),"，屏幕阅读器就会禁止编辑这个表单元素。状态和属性的差异之处就是：属性在应用的生命周期中不会改变，而状态可以，通常我们用编程的方法改变它，例如 JavaScript。"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics",children:"这篇文档"}),"对 WAI-ARIA 规范的内容和使用做了初步介绍。"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.1【推荐】img 标签应包含 alt 属性。eslint: ",n.jsx(e.a,{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md",children:"jsx-a11y/alt-text"})]}),`
`,n.jsxs(e.p,{children:["如果图片无需被无障碍阅读器识别(如作为 button 的 icon 使用)，你可以将 ",n.jsx(e.code,{children:"alt"})," 属性写为空字符串"]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<img src="hello.jpg" />

// good
<img src="hello.jpg" alt="Me waving hello" />

// good - 图片无需被无障碍阅读器识别时
<button>
  <img src="icon.png" alt="" />
  Save
</button>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:['5.2【推荐】img 标签的 alt 属性不要使用 "image"，"photo"，"picture" 之类的关键词。eslint: ',n.jsx(e.a,{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md",children:"jsx-a11y/img-redundant-alt"})]}),`
`,n.jsxs(e.p,{children:["屏幕阅读器已会将 ",n.jsx(e.code,{children:"img"})," 元素识别成图片，再在 alt 中包含这类关键词没有意义。"]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<img src="hello.jpg" alt="Picture of me waving hello" />

// good
<img src="hello.jpg" alt="Me waving hello" />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.3【推荐】锚元素(即 ",n.jsx(e.code,{children:"<a>"})," 元素)必须含有内容，且内容必须对屏幕阅读器可见(这里指内容不能通过设置 ",n.jsx(e.code,{children:"aria-hidden"})," 属性隐藏)。eslint: ",n.jsx(e.a,{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md",children:"jsx-a11y/anchor-has-content"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - empty content
<a />

// bad - content not accessible to screen readers
<a><TextWrapper aria-hidden /></a>

// good
<a>Anchor Content!</a>
<a><TextWrapper /><a>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.4【推荐】禁止使用无效的 ARIA 属性，只能使用列在 ",n.jsx(e.a,{href:"https://www.w3.org/WAI/PF/aria-1.1/states_and_properties",children:"WAI-ARIA States and Properties spec"})," 中的 ",n.jsx(e.code,{children:"aria-*"})," 属性。eslint: ",n.jsx(e.a,{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md",children:"jsx-a11y/aria-props"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - Labeled using incorrectly spelled aria-labeledby
<div id="address_label">Enter your address</div>
<input aria-labeledby="address_label">

// good - Labeled using correctly spelled aria-labelledby
<div id="address_label">Enter your address</div>
<input aria-labelledby="address_label">
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.5【推荐】ARIA 属性、状态的值必须为有效值。eslint: ",n.jsx(e.a,{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md",children:"jsx-a11y/aria-proptypes"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - the aria-hidden state is of type true/false
<span aria-hidden="yes">foo</span>

// good
<span aria-hidden="true">foo</span>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.6【推荐】禁止特定元素包含 ",n.jsx(e.code,{children:"role"})," 和 ",n.jsx(e.code,{children:"aria-*"})," 属性。一些保留的 DOM 元素不支持设置 ARIA 角色或者属性，通常是因为这些元素是不可见的，例如 ",n.jsx(e.code,{children:"meta, html, script, style"}),"。eslint: ",n.jsx(e.a,{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md",children:"jsx-a11y/aria-unsupported-elements"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - the meta element should not be given any ARIA attributes
<meta charset="UTF-8" aria-hidden="false" />

// good
<meta charset="UTF-8" />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.7【推荐】仅使用有效的、非抽象的 ARIA roles，",n.jsx(e.a,{href:"https://www.w3.org/TR/wai-aria/#roles_categorization",children:"了解更多"}),"。eslint: ",n.jsx(e.a,{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md",children:"jsx-a11y/aria-role"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - not an ARIA role
<div role="datepicker" />

// bad - abstract ARIA role
<div role="range" />

// good
<div role="button" />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.8【推荐】有 ARIA role 的元素必须也声明该 role 需要的属性，",n.jsx(e.a,{href:"https://www.w3.org/TR/wai-aria/#requiredState",children:"了解更多"}),"。eslint: ",n.jsx(e.a,{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md",children:"jsx-a11y/role-has-required-aria-props"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - the checkbox role requires the aria-checked state
<span role="checkbox" aria-labelledby="foo" tabindex="0"></span>

// good - the checkbox role requires the aria-checked state
<span role="checkbox" aria-checked="false" aria-labelledby="foo" tabindex="0"></span>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.9【推荐】强制拥有显式或隐式 role 的元素，只能含有该 role 支持的 ",n.jsx(e.code,{children:"aria-*"})," 属性。eslint: ",n.jsx(e.a,{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md",children:"jsx-a11y/role-supports-aria-props"})]}),`
`,n.jsxs(e.p,{children:["一些元素会有隐式的 role ，譬如 ",n.jsx(e.code,{children:'<a href="#">'})," ，会被解析为 ",n.jsx(e.code,{children:'role="link"'}),"。很多 ARIA 属性只能在具有特定 role 的元素上使用"]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad - the radio role does not support the aria-required property
<ul role="radiogroup" aria-labelledby="foo">
  <li aria-required tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
  <li aria-required tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
  <li aria-required tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>

// good - the radiogroup role does support the aria-required property
<ul role="radiogroup" aria-required aria-labelledby="foo">
  <li tabIndex="-1" role="radio" aria-checked="false">Rainbow Trout</li>
  <li tabIndex="-1" role="radio" aria-checked="false">Brook Trout</li>
  <li tabIndex="0" role="radio" aria-checked="true">Lake Trout</li>
</ul>
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.10【推荐】",n.jsx(e.code,{children:"<iframe>"})," 元素必须有一个唯一的 title 属性，表示其内容。eslint: ",n.jsx(e.a,{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md",children:"jsx-a11y/iframe-has-title"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<iframe />
<iframe {...props} />
<iframe title="" />
<iframe title={undefined} />
<iframe title={false} />
<iframe title={true} />
<iframe title={42} />

// good
<iframe title="This is a unique title" />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.11【推荐】不要使用 accessKey 属性。accessKey 属性提供了为当前元素生成快捷键的方式，不过 accessKey 值可能与系统或浏览器键盘快捷键或辅助技术功能相冲突，所以不建议使用。eslint: ",n.jsx(e.a,{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md",children:"jsx-a11y/no-access-key"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<div accessKey="h" />

// good
<div />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.12【推荐】禁止使用会造成视觉分散的元素。一些会引起视觉注意力分散的元素对视觉障碍的用户会造成问题，例如 ",n.jsx(e.code,{children:"<marquee>"})," 和 ",n.jsx(e.code,{children:"<blink>"}),"。eslint: ",n.jsx(e.a,{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md",children:"jsx-a11y/no-distracting-elements"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<marquee />
<blink />

// good
<div />
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["5.13【推荐】scope 属性只能在 ",n.jsx(e.code,{children:"<th>"})," 元素上使用，",n.jsx(e.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced#The_scope_attribute",children:"了解更多"}),"。eslint: ",n.jsx(e.a,{href:"https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md",children:"jsx-a11y/scope"})]}),`
`,n.jsx(e.pre,{static:!0,children:n.jsx(e.code,{className:"language-jsx",children:`// bad
<div scope />

// good
<th scope="col" />
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"配套工具"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-config-ali",children:"eslint-config-ali"}),"：本规约配套的 ",n.jsx(e.a,{href:"http://eslint.org/",children:"ESLint"})," 规则包，可使用 ",n.jsx(e.code,{children:"eslint-config-ali/react"})," 或 ",n.jsx(e.code,{children:"eslint-config-ali/typescript/react"})," 引入本文介绍的规则（「无障碍」章节的规则未默认引入，如需引入请参考",n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-config-ali",children:"文档"}),"中的「a11y 支持」章节）"]}),`
`]}),`
`,n.jsx(e.h2,{children:"参考资料"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://reactjs.org/docs/",children:"React 官网 - v16.6.0"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/airbnb/javascript/master/react",children:"Airbnb JavaScript Style Guide - React"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/yannickcr/eslint-plugin-react/",children:"eslint-plugin-react"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://reactjs.org/docs/hooks-rules.html",children:"Rules of Hooks"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://developer.mozilla.org/zh-CN/docs/learn/Accessibility",children:"MDN - 可访问性"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://developers.google.com/web/fundamentals/accessibility?hl=zh_cn",children:"谷歌开发者 - 无障碍功能"})}),`
`]})]})}function $m(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Kd,{...t})}):Kd(t)}$m.displayName="MDXContent";const rk=Object.freeze(Object.defineProperty({__proto__:null,default:$m,filepath:ek,frontmatter:nk,title:tk},Symbol.toStringTag,{value:"Module"})),ok="docs/coding/5.node-style-guide.md",lk="Node.js 编码规约",ik=void 0;function Qd(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Node.js 编码规约"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsxs(e.p,{children:["Node.js 规约主要包含编码风格、安全规约、最佳实践等几个部分，目的是给业务同学提供研发过程中的实质性规范和指导。其中编码风格 follow ",n.jsx(e.a,{href:"https://github.com/eggjs/eslint-config-egg",children:"eslint-config-egg"}),"。"]}),`
`,n.jsx(e.h2,{children:"1 编码风格"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["1.1【推荐】使用 Node.js 内置的全局变量。eslint: ",n.jsx(e.a,{href:"https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global",children:"node/prefer-global"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const { Buffer } = require('buffer');
const b = Buffer.alloc(16);
// good
const b = Buffer.alloc(16);

// bad
const { URL } = require('url');
const u = new URL(s);
// good
const u = new URL(s);

// bad
const { URLSearchParams } = require('url');
const u = new URLSearchParams(s);
// good
const u = new URLSearchParams(s);

// bad
const { TextEncoder } = require('util');
const u = new TextEncoder(s);
// good
const u = new TextEncoder(s);

// bad
const { TextDecoder } = require('util');
const u = new TextDecoder(s);
// good
const u = new TextDecoder(s);

// bad
const process = require('process');
process.exit(0);
// good
process.exit(0);

// bad
const console = require('console');
console.log('hello');
// good
console.log('hello');
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["1.2【推荐】使用模块内支持的 ",n.jsx(e.code,{children:"promises"})," API。eslint: ",n.jsx(e.a,{href:"https://github.com/mysticatea/eslint-plugin-node/tree/master/docs/rules/prefer-promises",children:"node/prefer-promises"})]}),`
`]}),`
`,n.jsxs(e.p,{children:["Node.js 从 v11.14.0 开始支持 ",n.jsx(e.code,{children:"require('dns').promises"})," 和 ",n.jsx(e.code,{children:"require('fs').promises"})," API。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const dns = require('dns');
const fs = require('fs');

function lookup(hostname) {
  dns.lookup(hostname, (error, address, family) => {
    // ...
  });
}

function readData(filePath) {
  fs.readFile(filePath, 'utf8', (error, content) => {
    // ...
  });
}

// good
const { promises: dns } = require('dns');
const { promises: fs } = require('fs');

async function lookup(hostname) {
  const { address, family } = await dns.lookup(hostname);
  // ...
}

async function readData(filePath) {
  const content = await fs.readFile(filePath, 'utf8');
  // ...
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["1.3【推荐】如无特殊需求，模块引用声明放在文件顶端，注意引用顺序。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md",children:"import/order"})]}),`
`]}),`
`,n.jsx(e.p,{children:"如无特殊需求（如动态 require），模块引用声明需要放在文件顶端。引用顺序如无特殊需求，按以下顺序来引入依赖：node 内置模块、npm 包、本地文件或其他，几类文件代码块之间各空一行，每类文件代码块中的引用顺序按照字典排序，如有解构引用情况，字典序以解构的第一个为准，解构内部按照字典排序。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const Car = require('./models/car');
const moment = require('moment');
const mongoose = require('mongoose');
const fs = require('fs');
const http = require('http');
const { Foo, Bar } = require('tool');
const note = require('note');

// good
const fs = require('fs');
const http = require('http');

const { Bar, Foo } = require('tool');
const moment = require('moment');
const mongoose = require('mongoose');
const note = require('note');

const Car = require('./models/car');

// bad
import Car from './models/car';
import moment from 'moment';
import mongoose from 'mongoose';
import fs from 'fs';
import http from 'http';
import { Foo, Bar } from 'tool';
import note from 'note';

// good
import fs from 'fs';
import http from 'http';

import { Bar, Foo } from 'tool';
import moment from 'moment';
import mongoose from 'mongoose';
import note from 'note';

import Car from './models/car';
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["1.4【推荐】抛出异常时，使用原生 ",n.jsx(e.code,{children:"Error"})," 对象。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-throw-literal",children:"no-throw-literal"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
throw 'error';

throw 0;

throw undefined;

throw null;

const err = new Error();
throw 'an ' + err;

const err = new Error();
throw \`\${err}\`

// good
throw new Error();

throw new Error('error');

const err = new Error('error');
throw err;

try {
  throw new Error('error');
} catch (err) {
  throw err;
}
`})}),`
`,n.jsxs(e.p,{children:["1.5【推荐】线上环境尽量不要使用 ",n.jsx(e.code,{children:"fs/child_process"})," 模块的 ",n.jsx(e.code,{children:"sync"})," 方法，如 ",n.jsx(e.code,{children:"fs.readFileSync()"}),"、",n.jsx(e.code,{children:"cp.execSync()"})," 等。"]}),`
`,n.jsxs(e.p,{children:["这样会阻塞 Node.js 应用的进程，导致不能继续处理新的请求，或当前正在处理的请求超时。推荐使用 ",n.jsx(e.code,{children:"require('fs').promises"})," 方式或使用 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/mz",children:"mz"}),"。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
const fs = require('fs');

function test() {
  fs.readFileSync('./somefile', 'utf-8');
}

// good
const { promises: fs } = require('fs');

async function test() {
  await fs.readFile('./somefile', 'utf-8');
}

// good
const fs = require('mz/fs');

async function test() {
  await fs.readFile('./somefile', 'utf-8');
}
`})}),`
`,n.jsx(e.h2,{children:"2 安全规约"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"2.1【强制】在客户端隐藏错误详情。"}),`
`]}),`
`,n.jsx(e.p,{children:"错误提示有可能会暴露出敏感的系统信息，容易被利用去做进一步的攻击。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"2.2【强制】隐藏或伪造技术栈和框架标识。"}),`
`]}),`
`,n.jsx(e.p,{children:"隐藏或伪造 X-Powered-By 响应头，应用广泛的框架多有公开的漏洞，防止标识露出被恶意利用。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"2.3【强制】JSONP 跨域接口必须严格校验访问来源。"}),`
`]}),`
`,n.jsx(e.p,{children:"配置域名白名单，防止通过 JSONP 接口获取到敏感信息的风险。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"2.4【强制】禁止使用从参数或明文 cookie 中获取的用户标识进行敏感信息查询输出。"}),`
`]}),`
`,n.jsx(e.p,{children:"防止未授权访问/越权访问。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"2.5【强制】防止 SQL 注入。"}),`
`]}),`
`,n.jsx(e.p,{children:"含有用户输入内容的 SQL 语句必须使用预编译模式。若用户输入无法使用预编译模式(输入为表名/字段名等内容)，需要对用户输入进行转义/过滤之后再拼接到 SQL 中。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"2.6【推荐】定期检查过期依赖和依赖漏洞升级。"}),`
`]}),`
`,n.jsx(e.p,{children:"检测依赖，对于有漏洞或者过期的依赖要及时升级或替换。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"2.7【推荐】用户上传文件不允许至服务器本地，需要上传到 OSS 等服务。"}),`
`]}),`
`,n.jsx(e.p,{children:"任意文件上传漏洞，防止用户上传恶意文件，入侵服务器。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"2.8【推荐】服务端 URL 重定向需要设置白名单。"}),`
`]}),`
`,n.jsx(e.p,{children:"若需要对用户输入内容作为目标 URL 进行重定向，需要对其进行域名白名单校验，不允许跳转至白名单外的域名。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"2.9【推荐】对接口入参严格校验。"}),`
`]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/jsonschema",children:"jsonschema"})," 或 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/joi",children:"joi"})," 校验入参，减少意外输入造成的程序报错或崩溃，同时也能减少脏数据形成。"]}),`
`,n.jsx(e.h2,{children:"3 最佳实践"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"3.1【推荐】应用不应该有状态。"}),`
`]}),`
`,n.jsx(e.p,{children:"使用外部数据存储。保证即使结束某个应用实例也不会影响数据和服务。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"3.2【推荐】尽量不要用 Node.js 应用去托管前端静态文件。"}),`
`]}),`
`,n.jsx(e.p,{children:"应该把前端静态文件放到 CDN，当静态文件的访问量很大的时候，可能会阻塞其他服务的执行。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"3.3【推荐】把 CPU 密集型任务委托给反向代理。"}),`
`]}),`
`,n.jsx(e.p,{children:"Node.js 应用不合适做 CPU 密集型任务（例如 gzip，SSL），请尽量把这类任务代理给 nginx 或其他服务。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["3.4【推荐】使用 ",n.jsx(e.code,{children:"async/await"}),"，尽量避免使用回调函数。"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"async/await"})," 可以让你的代码看起来更简洁，可以规避掉回调地狱的问题，并且使异常处理也变得清晰简单。"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["3.5【推荐】使用 ",n.jsx(e.code,{children:"util.promisify"})," 处理回调函数，使其返回 ",n.jsx(e.code,{children:"Promise"}),"。"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);

async function callStat() {
  const stats = await stat('.');
  console.log(\`This directory is owned by \${stats.uid}\`);
}
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["3.6【推荐】使用 Node.js 原生 ",n.jsx(e.code,{children:"Promise"}),"，而不是三方库如 ",n.jsx(e.code,{children:"bluebird"}),"。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["3.7【推荐】在类方法中返回 ",n.jsx(e.code,{children:"this"})," 方便链式调用。"]}),`
`]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class Jedi {
  jump() {
    this.jumping = true;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }
}

const luke = new Jedi();

luke.jump()
  .setHeight(20);
`})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["3.8【推荐】使用 ",n.jsx(e.a,{href:"https://www.aliyun.com/product/nodejs",children:"阿里云 Node.js 性能平台"})," 作为应用的性能监控工具。"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://www.aliyun.com/product/nodejs",children:"阿里云 Node.js 性能平台"}),"提供 Node.js 应用性能监控、管理及报警，性能快照远程截取与调优， 安全与依赖更新提示，异常日志与慢 HTTP 日志等功能，能有效帮助开发者监控和排查 Node.js 应用性能问题。"]}),`
`,n.jsx(e.h2,{children:"配套工具"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-config-ali",children:"eslint-config-ali"}),"：本规约配套的 ",n.jsx(e.a,{href:"http://eslint.org/",children:"ESLint"})," 规则包，可使用 ",n.jsx(e.code,{children:"eslint-config-ali/node"})," 或 ",n.jsx(e.code,{children:"eslint-config-ali/typescript/node"})," 引入本文介绍的规则"]}),`
`]}),`
`,n.jsx(e.h2,{children:"参考资料"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/nodesecurity/eslint-plugin-security",children:"eslint-plugin-security"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/mysticatea/eslint-plugin-node",children:"eslint-plugin-node"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/airbnb/javascript",children:"airbnb javascript style"})}),`
`]})]})}function Bm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Qd,{...t})}):Qd(t)}Bm.displayName="MDXContent";const ak=Object.freeze(Object.defineProperty({__proto__:null,default:Bm,filepath:ok,frontmatter:ik,title:lk},Symbol.toStringTag,{value:"Module"})),ck="docs/coding/6.typescript-style-guide.md",fk="TypeScript 编码规约",sk=void 0;function Yd(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"TypeScript 编码规约"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsx(e.p,{children:"TypeScript 是微软开发的一款开源编程语言，它是 JavaScript 的超集，因此其编码规约和配套 Lint 工具也与《JavaScript 编码规约》一脉相承。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"本文未包含的编码风格说明均默认遵循《JavaScript 编码规约》。"})}),`
`,n.jsx(e.h2,{children:"编码风格"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://img.alicdn.com/imgextra/i3/O1CN01xiw6bP1oMEFb7VtuO_!!6000000005210-55-tps-663-378.svg",alt:"示例代码标注图"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】重载的函数必须写在一起 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md",children:"@typescript-eslint/adjacent-overload-signatures"})]}),`
`,n.jsx(e.p,{children:"自然相关的项组合在一起将提高代码可读性和组织性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function bar(): void;
  export function foo(sn: string | number): void;
}

// good
declare namespace Foo {
  export function foo(s: string): void;
  export function foo(n: number): void;
  export function foo(sn: string | number): void;
  export function bar(): void;
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void;
  foo(sn: string | number): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  bar(): void {}
  foo(sn: string | number): void {}
}

// good
type Foo = {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
};

interface Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void;
  bar(): void;
}

class Foo {
  foo(s: string): void;
  foo(n: number): void;
  foo(sn: string | number): void {}
  bar(): void {}
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
export function foo(s: string): void;
export function foo(n: number): void;
export function bar(): void;
export function foo(sn: string | number): void;

// good
export function bar(): void;
export function foo(s: string): void;
export function foo(n: number): void;
export function foo(sn: string | number): void;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】简单数组类型的定义使用 ",n.jsx(e.code,{children:"T[]"}),"，复杂类型使用 ",n.jsx(e.code,{children:"Array<T>"})," ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md",children:"@typescript-eslint/array-type"})]}),`
`,n.jsx(e.p,{children:"对数组类型的定义使用相同的规范将帮助开发者更快地理解和阅读类型。"}),`
`,n.jsxs(e.p,{children:["简单类型（数字、字符串、布尔等）请使用 ",n.jsx(e.code,{children:"T[]"})," 或 ",n.jsx(e.code,{children:"readonly T[]"})," ，其他复杂类型（联合、交叉、对象、函数等）请使用 ",n.jsx(e.code,{children:"Array<T>"})," 或 ",n.jsx(e.code,{children:"ReadonlyArray<T>"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
const a: (string | number)[] = ['a', 1];
const b: { prop: string }[] = [{ prop: 'a' }];
const c: (() => void)[] = [() => {}];
const d: Array<MyType> = ['a', 'b'];
const e: Array<string> = ['a', 'b'];
const f: ReadonlyArray<string> = ['a', 'b'];

// good
const a: Array<string | number> = ['a', 1];
const b: Array<{ prop: string }> = [{ prop: 'a' }];
const c: Array<() => void> = [() => {}];
const d: MyType[] = ['a', 'b'];
const e: string[] = ['a', 'b'];
const f: readonly string[] = ['a', 'b'];
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】使用 TypeScript 注释指令时需跟随描述说明 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md",children:"@typescript-eslint/ban-ts-comment"})]}),`
`,n.jsx(e.p,{children:"TS 提供了一些指令注释，可用于忽略 TypeScript 编译器在编译阶段的错误，如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// @ts-expect-error
// @ts-ignore
// @ts-nocheck
// @ts-check
`})}),`
`,n.jsx(e.p,{children:"我们允许在代码中使用指令注释，但需要跟随一定长度的描述说明。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
// @ts-expect-error
console.log('my code');

// @ts-ignore
console.log('my code');

// good
// @ts-expect-error: Unreachable code here
console.log('my code');

// @ts-ignore: It's ok to ignore this compile error
console.log('my code');
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】禁止使用 ",n.jsx(e.code,{children:"// tslint:<rule-flag>"})," 等 tslint 注释 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md",children:"@typescript-eslint/ban-tslint-comment"})]}),`
`,n.jsx(e.p,{children:"tslint 已经被废弃，对应的指令注释也不应再出现。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
/* tslint:disable */
/* tslint:enable */
/* tslint:disable:rule1 rule2 rule3... */
/* tslint:enable:rule1 rule2 rule3... */
// tslint:disable-next-line
someCode(); // tslint:disable-line
// tslint:disable-next-line:rule1 rule2 rule3...
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】如果类的属性是一个字面量，则推荐使用只读属性 ",n.jsx(e.code,{children:"readonly"})," 而不是 ",n.jsx(e.code,{children:"getter"})," ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md",children:"@typescript-eslint/class-literal-property-style"})]}),`
`,n.jsx(e.p,{children:"类上所有返回「字面量」的 getter 方法，都推荐使用 readonly 修饰符来代替，字面量包含字符串、模板字符串、数字、bigint、正则和 null。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"说明：在一些特殊场景，编写代码的最终用户是 JavaScript 开发者时，可以使用 getter 来保证字段无法被重新定义和覆盖，因为 readonly 修饰符只作用于 TypeScript 编译阶段。"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
class Mx {
  public static get myField1() {
    return 1;
  }
  private get ['myField2']() {
    return 'hello world';
  }
}

// good
class Mx {
  public readonly myField1 = 1;
  public readonly myField2 = [1, 2, 3]; // 非字面量
  private readonly ['myField3'] = 'hello world';
  public get myField4() {
    return \`hello from \${window.location.href}\`;
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】类型断言必须使用 ",n.jsx(e.code,{children:"as Type"})," ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md",children:"@typescript-eslint/consistent-type-assertions"})]}),`
`,n.jsx(e.p,{children:"类型断言（type assertiions）也可称作类型转换（type casting），本质上是对 TypeScript 类型系统的人为干预："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["强制对类型的断言统一使用 ",n.jsx(e.code,{children:"as Type"})," 风格而非 ",n.jsx(e.code,{children:"<Type>"})," ，后者容易与 ",n.jsx(e.code,{children:"JSX"})," 产生混淆。"]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"对象字面量禁止类型断言，断言成 any 除外，对象字面量应该直接声明。"}),`
`]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.p,{children:["TypeScript 3.4 中引入的 const 断言在本规则中不受约束，",n.jsx(e.code,{children:"let x = 'hello' as const;"})," 和 ",n.jsx(e.code,{children:"let x = <const>'hello';"})," 都是允许的。"]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
const foo = <string>'bar';

// good
const foo = 'bar' as string;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
const x = { ... } as T;
const y = { ... } as object;

// good
const x: T = { ... };
const y = { ... } as any;
const z = { ... } as unknown;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】优先使用 ",n.jsx(e.code,{children:"interface"})," 定义类型 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md",children:"@typescript-eslint/consistent-type-definitions"})]}),`
`,n.jsx(e.p,{children:"interface 支持 extend/implement/union 等等类型能力，同时也可以用于描述普通对象。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
type T = { x: number };

// good
type T = string;
type Foo = string | {};
interface T {
  x: number;
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】设置类成员的可访问性 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md",children:"@typescript-eslint/explicit-member-accessibility"})]}),`
`,n.jsxs(e.p,{children:["将非公开成员的可访问性设置为「私有」，可以增强代码可理解性，同时也能避免一些非法调用，公开的成员可省略 ",n.jsx(e.code,{children:"public"})," 修饰符。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
class Foo {
  static foo = 'foo';
  static getFoo() {
    return Foo.foo;
  }
  constructor() {}
  bar = 'bar';
  getBar() {}
  get baz() {
    return 'baz';
  }
  set baz(value) {
    console.log(value);
  }
}

// good
class Foo {
  private static foo = 'foo';
  public static getFoo() {
    return Foo.foo;
  }
  public constructor() {}
  protected bar = 'bar';
  public getBar() {}
  public get baz() {
    return 'baz';
  }
  public set baz(value) {
    console.log(value);
  }
}

`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】interface/type 类型中使用一致的成员分隔符 ",n.jsx(e.code,{children:";"})," ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md",children:"@typescript-eslint/member-delimiter-style"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad: comma style(JSON style)
interface Foo {
  name: string,
  greet(): void,
}

type Bar = {
  name: string,
  greet(): void,
};

// bad: line break style
interface Foo {
  name: string
  greet(): void
}

type Bar = {
  name: string
  greet(): void
};

// good
interface Foo {
  name: string;
  greet(): void;
}

type Bar = {
  name: string;
  greet(): void;
};

`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】类的成员应按照固定的先后顺序排列 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md",children:"@typescript-eslint/member-ordering"})]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"类的静态方法 / 属性（static）优先于实例的方法 / 属性（instance）"}),`
`,n.jsx(e.li,{children:"属性（field）优先于构造函数（constructor），优先于方法（method）"}),`
`,n.jsx(e.li,{children:"公开的成员（public）优先于受保护的成员（protected），优先于私有的成员（private）"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// good
class Foo {
  public static foo1 = 'foo1';
  protected static foo2 = 'foo2';
  private static foo3 = 'foo3';
  public static getFoo1() {}
  protected static getFoo2() {}
  private static getFoo3() {
    return Foo.foo3;
  }
  public bar1 = 'bar1';
  protected bar2 = 'bar2';
  private bar3 = 'bar3';
  public constructor() {
    console.log(Foo.getFoo3());
    console.log(this.getBar3());
  }
  public getBar1() {}
  protected getBar2() {}
  private getBar3() {
    return this.bar3;
  }
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】接口中的方法使用属性的方式定义 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md",children:"@typescript-eslint/method-signature-style"})]}),`
`,n.jsx(e.p,{children:"使用属性去定义接口中的方法，可以获得更严格的检查。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
interface T1 {
  func(arg: string): number;
}
type T2 = {
  func(arg: boolean): void;
};
interface T3 {
  func(arg: number): void;
  func(arg: string): void;
  func(arg: boolean): void;
}

// good
interface T1 {
  func: (arg: string) => number;
}
type T2 = {
  func: (arg: boolean) => void;
};
// 属性方法实现重载
interface T3 {
  func: ((arg: number) => void) &
    ((arg: string) => void) &
    ((arg: boolean) => void);
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】禁止使用容易混淆的非空断言 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md",children:"@typescript-eslint/no-confusing-non-null-assertion"})]}),`
`,n.jsxs(e.p,{children:["在相等比较运算符（",n.jsx(e.code,{children:"=="})," 或 ",n.jsx(e.code,{children:"==="}),"）前使用非空断言（",n.jsx(e.code,{children:"!"}),"）很容易和不等运算符（",n.jsx(e.code,{children:"!="})," 或 ",n.jsx(e.code,{children:"!=="}),"）混淆，不建议使用。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`interface Foo {
  bar?: string;
  num?: number;
}

// bad
const foo: Foo = getFoo();
const isEqualsBar = foo.bar! == 'hello';
const isEqualsNum = 1 + foo.num! == 2;

// good
const foo: Foo = getFoo();
const isEqualsBar = foo.bar == 'hello';
const isEqualsNum = (1 + foo.num!) == 2;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】避免定义空的接口类型 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md",children:"@typescript-eslint/no-empty-interface"})]}),`
`,n.jsx(e.p,{children:"空的接口类型等效于空对象，若它只继承另一个接口类型，那么该类型与被继承的类型等效。在代码中应减少定义无意义的接口类型。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
// an empty interface
interface Foo {}

// an interface with only one supertype (Bar === Foo)
interface Bar extends Foo {}

// an interface with an empty list of supertypes
interface Baz {}

// good
// an interface with any number of members
interface Foo {
  name: string;
}

// same as above
interface Bar {
  age: number;
}

// an interface with more than one supertype
// in this case the interface can be used as a replacement of a union type.
interface Baz extends Foo, Bar {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】初始化为 ",n.jsx(e.code,{children:"number/string/boolean"})," 的变量或参数应避免显式的类型声明 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md",children:"@typescript-eslint/no-inferrable-types"})]}),`
`,n.jsx(e.p,{children:"对于容易类型推倒出的变量、参数，再次的显式声明类型会带来代码冗余。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
const foo: number = 1;
const bar: string = '';
class Foo {
  prop: number = 5;
}
function fn(a: number = 5, b: boolean = true) {}

// good
const foo = 1;
const bar = '';
class Foo {
  prop = 5;
}
function fn(a = 5, b = true) {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】禁止无意义的 ",n.jsx(e.code,{children:"void"})," 类型 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md",children:"@typescript-eslint/no-invalid-void-type"})]}),`
`,n.jsx(e.p,{children:"禁止在返回类型或泛型类型参数之外使用 void 类型，而且在返回类型中不应再与其他类型做联合或交叉。"}),`
`,n.jsx(e.p,{children:"void 类型代表「无」或函数「不返回任何值」，隐式未定义类型代表函数返回「未定义的值 undefined」，所以 void 类型无法与除了 never 外的其他类型做联合、交叉。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
type PossibleValues = string | number | void;
type MorePossibleValues = string | ((number & any) | (string | void));
function logSomething(thing: void) {}
function printArg<T = void>(arg: T) {}
logAndReturn<void>(undefined);
interface Interface {
  lambda: () => void;
  prop: void;
}
class MyClass {
  private readonly propName: void;
}

// good
type NoOp = () => void;
function noop(): void {}
let trulyUndefined = void 0;
async function promiseMeSomething(): Promise<void> {}
type stillVoid = void | never;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】禁止使用 namespace 来定义命名空间 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md",children:"@typescript-eslint/no-namespace"})]}),`
`,n.jsx(e.p,{children:"自定义 TypeScript 模块（module）和命名空间（namespace）已经不再推荐使用，首选 ES2015 的模块语法来导入导出。此规则仍然允许定义外部的模块或命名空间。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
module foo {}
namespace foo {}
  
// good
declare module 'foo' {}
declare module foo {}
declare namespace foo {}
declare global {
  namespace foo {}
}
declare module foo {
  namespace foo {}
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】禁止在 ",n.jsx(e.code,{children:"optional chaining"})," 之后使用 ",n.jsx(e.code,{children:"non-null"})," 断言 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md",children:"@typescript-eslint/no-non-null-asserted-optional-chain"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"optional chaining"})," 被设计为返回 ",n.jsx(e.code,{children:"undefined"}),"，在之后使用非空断言是错误的，会引入严重的类型安全问题。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
foo?.bar!;
foo?.bar!.baz;
foo?.bar()!;
foo?.bar!();
foo?.bar!().baz;

// good
foo?.bar;
(foo?.bar).baz;
foo?.bar();
foo?.bar();
foo?.bar().baz;

// 如果您使用的是 TS3.9 或更高版本，则以下代码也是正确的
foo?.bar!.baz;
foo?.bar!();
foo?.bar!().baz;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】使用 ES2015 import 语法引入模块 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md",children:"@typescript-eslint/no-require-imports"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
const fs = require('fs');

// good
import * as fs from 'fs';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】不建议将 this 赋值给其他变量 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md",children:"@typescript-eslint/no-this-alias"})]}),`
`,n.jsx(e.p,{children:"通过变量赋值为 this 的方式来管理函数作用域不是我们推荐的最佳实践，应使用箭头函数保留函数作用域。此规则中允许对 this 的解构赋值。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
function foo() {
  const self = this;
  setTimeout(function () {
    self.doWork();
  });
}

// good
function foo() {
  setTimeout(() => {
    this.doWork();
  });
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】当变量的值与类型声明相等时，优先使用 ",n.jsx(e.code,{children:"as const"})," ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md",children:"@typescript-eslint/prefer-as-const"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
let bar: 2 = 2;
let foo = <'bar'>'bar';
let foo = { bar: 'baz' as 'baz' };

// good
let foo = 'bar';
let foo = 'bar' as const;
let foo: 'bar' = 'bar' as const;
let bar = 'bar' as string;
let foo = <string>'bar';
let foo = { bar: 'baz' };
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】禁止使用 module 来定义命名空间 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md",children:"@typescript-eslint/prefer-namespace-keyword"})]}),`
`,n.jsxs(e.p,{children:["module 已经成为 JS 语言的关键字，应避免 TypeScript 模块与 ES2015 模块混淆。",n.jsx(e.code,{children:"declare module"})," 不做限制。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
module Foo {}

// good
declare module Foo {}
declare namespace Foo {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】字符串字面量使用单引号包裹 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md",children:"@typescript-eslint/quotes"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
const foo = "bar";

// good
const foo = 'bar';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】 加号 ",n.jsx(e.code,{children:"+"})," 连接的两侧同为数字或同为字符串 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md",children:"@typescript-eslint/restrict-plus-operands"})]}),`
`,n.jsx(e.p,{children:"数字与字符串的连接往往会导致一些预期外的问题。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
var foo = '5.5' + 5;
var foo = 1n + 1;

// good
var foo = parseInt('5.5', 10) + 10;
var foo = 1n + 1n;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】禁止使用三斜杠语法 ",n.jsx(e.code,{children:"///"})," 导入文件 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md",children:"@typescript-eslint/triple-slash-reference"})]}),`
`,n.jsx(e.p,{children:"三斜杠语法已经被废弃，声明文件（d.ts）以外禁止使用。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
/// <reference path="./my-module" />

// good
import myModule from './my-module';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】类型声明时应正确添加空格间距 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md",children:"@typescript-eslint/type-annotation-spacing"})]}),`
`,n.jsx(e.p,{children:"TypeScript 类型声明周围添加合适的间距可以有效的提升代码可读性，我们约定："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"冒号前无空格，冒号后保留一个空格"}),`
`,n.jsx(e.li,{children:"箭头前后都保留一个空格"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
let foo:string = 'bar';
let foo :string = 'bar';
let foo : string = 'bar';

function foo():string {}
function foo() :string {}
function foo() : string {}

class Foo {
  name:string;
}

class Foo {
  name :string;
}

class Foo {
  name : string;
}

type Foo = ()=> {};

// good
let foo: string = 'bar';

function foo(): string {}

class Foo {
  name: string;
}

type Foo = () => {};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】interface 和 type 定义时必须声明成员的类型 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md",children:"@typescript-eslint/typedef"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
type Members = {
  member;
  otherMember;
};

// good
type Members = {
  member: boolean;
  otherMember: string;
};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】定义函数时，优先使用参数的联合类型而不是函数的类型重载 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md",children:"@typescript-eslint/unified-signatures"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// bad
function f(x: number): void;
function f(x: string): void;
f(): void;
f(...x: number[]): void;

// good
function f(x: number | string): void;
function f(x?: ...number[]): void;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"配套工具"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-config-ali",children:"eslint-config-ali"}),"：本规约配套的 ",n.jsx(e.a,{href:"http://eslint.org/",children:"ESLint"})," 规则包，可使用 ",n.jsx(e.code,{children:"eslint-config-ali/typescript"})," 或 ",n.jsx(e.code,{children:"eslint-config-ali/typescript/xx"})," 引入本文介绍的规则"]}),`
`]})]})}function zm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Yd,{...t})}):Yd(t)}zm.displayName="MDXContent";const uk=Object.freeze(Object.defineProperty({__proto__:null,default:zm,filepath:ck,frontmatter:sk,title:fk},Symbol.toStringTag,{value:"Module"})),pk="docs/coding/7.rax-style-guide.md",dk="Rax 编码规约",yk=void 0;function Zd(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Rax 编码规约"}),`
`,n.jsx(e.h2,{children:"1 编码风格"}),`
`,n.jsx(e.p,{children:"除了少部分在下文「规则定制」章节列出的规则，Rax 编码风格总体上遵循《React 编码规约》，请移步阅读。"}),`
`,n.jsx(e.h2,{children:"配套工具"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-config-ali",children:"eslint-config-ali"})," 是本规约配套的 ",n.jsx(e.a,{href:"http://eslint.org/",children:"ESLint"})," 规则包，可使用 ",n.jsx(e.code,{children:"eslint-config-ali/rax"})," 或 ",n.jsx(e.code,{children:"eslint-config-ali/typescript/rax"})," 引入 Rax 的 Lint 规则。"]}),`
`,n.jsxs(e.p,{children:["由于 Rax 工程和 React 工程语法相近，",n.jsx(e.code,{children:"eslint-config-ali/rax"})," 和 ",n.jsx(e.code,{children:"eslint-config-ali/typescript/rax"})," 分别继承了 ",n.jsx(e.code,{children:"eslint-config-ali/react"})," 和 ",n.jsx(e.code,{children:"eslint-config-ali/typescript/react"}),"，并做了如下定制："]}),`
`,n.jsx(e.h3,{children:"规则定制"}),`
`,n.jsx(e.p,{children:"定制了部分 eslint-plugin-react 的规则："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"关闭 react/prop-types："})," Rax 工程不要求 prop-types；"]}),`
`]}),`
`,n.jsx(e.h3,{children:"配置定制"}),`
`,n.jsx(e.p,{children:"定制 eslint-plugin-react 配置，以兼容 Rax createElement 和 Fragment："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`settings: {
  react: {
    // For Rax
    version: '999.999.999',
    pragma: 'createElement',
    pragmaFrag: 'Fragment',
  }
}
`})}),`
`,n.jsx(e.h2,{children:"参考资料"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://rax.js.org/",children:"Rax 官网"})}),`
`]})]})}function Um(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Zd,{...t})}):Zd(t)}Um.displayName="MDXContent";const Ok=Object.freeze(Object.defineProperty({__proto__:null,default:Um,filepath:pk,frontmatter:yk,title:dk},Symbol.toStringTag,{value:"Module"})),hk="docs/engineering/1.git.md",bk="Git 相关规约",mk=void 0;function ey(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Git 相关规约"}),`
`,n.jsx(e.h2,{children:"1 Git 提交日志格式规约"}),`
`,n.jsx(e.h3,{children:"1.1 前言"}),`
`,n.jsx(e.p,{children:"为什么要对 Git 提交日志（message）的格式进行规约约束？"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"更方便、快捷地浏览和了解项目的历史信息。"}),`
`,n.jsx(e.li,{children:"有利于保证提交内容的独立性，避免把所有改动都放在一个提交里面。"}),`
`,n.jsx(e.li,{children:"便于通过脚本自动化生成 CHANGELOG。"}),`
`]}),`
`,n.jsx(e.h3,{children:"1.2 基本的 message 格式"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`<type>[optional scope]: <subject>

[optional body]

[optional footer(s)]
`})}),`
`,n.jsx(e.p,{children:"其中 message header（即首行）必选，scope、body 和 footer 可选。"}),`
`,n.jsx(e.h4,{children:"1.2.1 字数限制"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"header（首行）：只有一行，不超过 50 个字符"}),`
`,n.jsx(e.li,{children:"body：每行不超过 72 个字符"}),`
`,n.jsx(e.li,{children:"footer：每行不超过 72 个字符"}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"为什么要有字数限制？"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"header： 像 Linux、Git 这样的开源项目，是以邮件列表作为代码评审的平台，header 要作为邮件的标题，而邮件标题本身就有长度的限制，并且标题太长也不利于浏览和信息获取。"}),`
`,n.jsx(e.li,{children:"body 和 footer：源于大部分编程语言的编码规范，最初源于打字机宽度等物理设备的限制，后来慢慢成为默认遵守的规范。"}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{children:"1.2.2 语言选择"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"在开源项目中"}),"：推荐使用英文，因为项目的开发者和参与者可能来自世界各地，使用英文可以更广泛的传递信息。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"在内部项目（并且短时间内也不涉及开源）中"}),"：应该选择内部人员普遍能够熟练表达的语言。"]}),`
`,n.jsx(e.p,{children:"例如在国内的团队中，可以使用中文。"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"关于使用中文可能会出现乱码的问题：处理字符集和字符编码的问题应该是每个程序员的必修课。"}),`
`,n.jsx(e.p,{children:"关于使用英文天然正确性的问题：因地制宜，适合的才是最好的。"}),`
`]}),`
`,n.jsx(e.h3,{children:"1.3 message header"}),`
`,n.jsx(e.h4,{children:"1.3.1 type"}),`
`,n.jsx(e.p,{children:"type 用来描述本次提交的改动类型，可选值及对应含义如下："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"feat: 新增功能"}),`
`,n.jsx(e.li,{children:"fix: 修复 bug"}),`
`,n.jsx(e.li,{children:"docs: 文档相关的改动"}),`
`,n.jsx(e.li,{children:"style: 对代码的格式化改动，代码逻辑并未产生任何变化(例如代码缩进，分号的移除和添加)"}),`
`,n.jsx(e.li,{children:"test: 新增或修改测试用例"}),`
`,n.jsx(e.li,{children:"refactor: 重构代码或其他优化举措"}),`
`,n.jsx(e.li,{children:"chore: 项目工程方面的改动，代码逻辑并未产生任何变化"}),`
`,n.jsx(e.li,{children:"revert: 恢复之前的提交"}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注意："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"commit message 的 type 和 changelog 的 type 存在紧密联系，然而它们两者之间并非一一对应，比如在 changelog 中一般不会指出文档 docs 或测试用例 test 等方面发生的变化"}),`
`,n.jsx(e.li,{children:"css 样式文件的修改一般属于 feat 或者 fix，并不是 style"}),`
`]}),`
`]}),`
`,n.jsx(e.h4,{children:"1.3.2 scope"}),`
`,n.jsx(e.p,{children:"scope 用来描述本次提交所涉及到的改动范围（例如模块、功能或其他任何限定的范围）。"}),`
`,n.jsx(e.p,{children:"scope 的具体取值视项目而定。以淘宝详情页为例，取值可以是：header, footer, favorite, sku, etc..."}),`
`,n.jsx(e.p,{children:"如果是 monorepo 的项目，scope 取值可以是 subpackage 的名称。例如 babel 项目中对某个 package 的修改："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`chore(babel-helper-plugin-utils): add npmignore
`})}),`
`,n.jsx(e.h4,{children:"1.3.3 subject"}),`
`,n.jsx(e.p,{children:"subject 用来概括和描述本次提交的改动内容，需注意以下几点："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"时态方面使用一般现在时，不要使用过去时。虽然查看 message 时，message 内容本身都发生在过去，然而对于主题来说，使用现在时的时态更简洁明确，并且更易达成一致性："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`// good
docs: delete redundant docs

// bad
docs: deleted redundant docs
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"句式使用祈使句。即一般情况不要增加主语。因为在绝大情况下，主语都是作者『我』："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`// good
docs: delete redundant docs

// bad
docs: i delete redundant docs
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"句首无需大写，句尾无需结束标点。因为主题（或标题）本身不用形成完整的句子："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`// good
docs: delete redundant docs

// bad
docs: Delete redundant docs.
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"1.4 message body"}),`
`,n.jsx(e.p,{children:"日志的内容主体 body 用来描述详细的提交内容，可写可不写，需注意以下几点："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"时态方面使用一般现在时，不要用过去时态。"}),`
`,n.jsx(e.li,{children:"句式视情况而定，一般使用祈使句式。"}),`
`,n.jsx(e.li,{children:"标点方面遵循一般的文档格式规约。"}),`
`]}),`
`,n.jsx(e.h3,{children:"1.5 message footer"}),`
`,n.jsx(e.p,{children:"footer 通常用于代码评审过程记录、作者签名等。例如："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Reported-by: User1 <user1@example.com>
Helped-by: User2 <user2@example.com>
Reviewed-by: User3 <user3@example.com>
Signed-off-by: Author <author@example.com>
`})}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"为什么要有签名区？"}),`
`,n.jsx(e.p,{children:"因为一个提交的元信息中只有作者（author）、提交者（committer）两个字段，而一段代码的诞生，参与的人往往不止于此，还可能有问题报告者（Reported-by）、代码评审者（Reviewed-by）、上游 Committer 的签名（Signed-off-by）。为此一些开源项目（如 Git、Linux）的一个约定俗成的习惯，是在提交的最后加上签名，每个贡献者一行，从上到下可以看到这段代码诞生的过程。"}),`
`]}),`
`,n.jsx(e.p,{children:"还可以添加其他元信息，例如："}),`
`,n.jsx(e.h4,{children:"引用 Issues"}),`
`,n.jsx(e.p,{children:"可以在 commit 信息里使用关键字 + Issue ID（Gitlab / Github / Redmine 或其他平台的），来表明该提交解决了某个 Issue。推荐使用的关键字有："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`close
closes
closed
fix
fixes
fixed
resolve
resolves
resolved
`})}),`
`,n.jsx(e.p,{children:"关键字的选用可以根据当前语义、关联的 Issue 是否在当前仓库下，甚至是 commit 消息的长度限制来决定。"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"close: 关闭当前仓库的 Issue"}),`
`,n.jsx(e.li,{children:"fix: 关闭当前或其他仓库的 Issue, 一般指 Bug 修复"}),`
`,n.jsx(e.li,{children:"resolve: 关闭当前或其他仓库的 Issue"}),`
`]}),`
`,n.jsx(e.p,{children:"关闭多个 Issues 使用如下格式:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Close #1, #2, #3
Close #1, close #2, close #3

Fix #1, #2, #3
Fix #1, close #2, close #3

Resolve #1, #2, #3
Resolve #1, close #2, close #3
`})}),`
`,n.jsx(e.h4,{children:"破坏性变动（Breaking changes）"}),`
`,n.jsx(e.p,{children:"如果本次提交的改动是破坏性的，需要在这里声明："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`BREAKING CHANGE: 为了组件 API 规范的统一，本次升级将 size 属性的 value 值从 \`s|m|l\` 替换为 \`small|medium|large\`。

请按照如下方式升级：

<Button size="s">提交</Button>
-->
<Button size="small">提交</Button>

继续使用 size="m" 可能会导致样式错误。
`})}),`
`,n.jsx(e.h2,{children:"2 Git 分支命名规约"}),`
`,n.jsx(e.h3,{children:"2.1 分支模型选择的说明"}),`
`,n.jsxs(e.p,{children:["目前互联网和社区中流传最广泛的一个分支模型 ",n.jsx(e.a,{href:"https://github.com/nvie/gitflow",children:"Git Flow"})," 出自 ",n.jsx(e.a,{href:"https://nvie.com/posts/a-successful-git-branching-model/",children:"a-successful-git-branching-model"})," 这篇十年前的文章，文章作者 Vincent Driessen 在 2020 年三月份的时候已经公开表示，该分支模型已经不适用于现如今持续交付的软件工程方式，推荐在持续交付的软件工程中使用更简单的 ",n.jsx(e.a,{href:"https://guides.github.com/introduction/flow/",children:"Github Flow"})," 模型。"]}),`
`,n.jsx(e.h3,{children:"2.2 分支命名"}),`
`,n.jsxs(e.p,{children:["新建分支的命名格式为：",n.jsx(e.code,{children:"{type}-{issue id}-the-thing-you-do"})]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"type"}),"：和上文 1.3.1 章节中的 type 保持一致"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"issue id"}),"：与分支内容相关的 issue id，如果无关，则可以忽略"]}),`
`]}),`
`,n.jsx(e.p,{children:"比如以下格式都满足规范："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"feat-ssr-prefetch"}),"：新增 ssr prefetch 功能"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"fix-1379-component-insert-order"}),"：修复 issue 1379 中提到的组件插入顺序 bug"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"revert-14218-memory-leak-on-unmount"}),"：回退版本解决 issue 14218 提到的组件卸载时内存泄露的问题"]}),`
`]}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"注：该命名规约只针对新建的临时分支，不包括如 master、develop 等常驻分支"}),`
`]}),`
`,n.jsx(e.h3,{children:"2.3 多版本分支命名"}),`
`,n.jsx(e.p,{children:"在需要同时维护多个版本的项目中，只使用 master 作为主干分支显然是无法满足需求的，但是又不想使用 Git Flow 这种复杂、繁琐的分支结构，那么就可以每发布一个新的版本就单独拉一个新的分支，例如："}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"1.0.0-stable"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"2.0.0-stable"})}),`
`]}),`
`]}),`
`,n.jsx(e.p,{children:"其他开发过程中的分支命名参考上节 2.2 的分支命名规约。"}),`
`,n.jsx(e.h2,{children:"3 Git tag 命名规约"}),`
`,n.jsx(e.p,{children:"Git tag 就是通过语义化的名称来给仓库标注一个个具体的节点。与此同时还可以根据标签名称来大致了解当前项目的兼容性和迭代情况。"}),`
`,n.jsxs(e.p,{children:["命名格式为 ",n.jsx(e.code,{children:"v{semver}"}),"，",n.jsx(e.code,{children:"semver"})," 是遵循 ",n.jsx(e.a,{href:"https://semver.org/lang/zh-CN/",children:"semantic version"})," 的版本号，例如 ",n.jsx(e.code,{children:"v1.2.3"}),"。"]}),`
`,n.jsxs(e.p,{children:["相比于使用例如 ",n.jsx(e.code,{children:"git tag v1.2.3"})," 这种「轻量标签」，更推荐使用如下命令生成「附注标签」："]}),`
`,n.jsx(e.p,{children:n.jsx(e.code,{children:'git tag -a v1.2.3 -m "发布经销商管理模块"'})}),`
`,n.jsx(e.h2,{children:"配套工具"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://www.npmjs.com/package/commitlint-config-ali",children:"commitlint-config-ali"}),"：本规约配套的 ",n.jsx(e.a,{href:"https://github.com/conventional-changelog/commitlint",children:"commitlint"})," 配置包，可用于校验 commit message。"]}),`
`]}),`
`,n.jsx(e.h2,{children:"参考资料"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md",children:"AngularJS 代码贡献指南"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.j8e4paqkfz0q",children:"AngularJS Git Commit Message Conventions"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://karma-runner.github.io/0.13/dev/git-commit-msg.html",children:"Karma 的 Git 日志规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://stackoverflow.com/questions/3580013/should-i-use-past-or-present-tense-in-git-commit-messages",children:"StackOverflow - 在 Git 日志中我该用过去时态还是现在时态？"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://nvie.com/posts/a-successful-git-branching-model/",children:"一个成功的 Git 分支模型"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE",children:"Git 基础打标签"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://en.wikipedia.org/wiki/Characters_per_line",children:"每行字符数"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.conventionalcommits.org",children:"Conventional Commits"})}),`
`]})]})}function Hm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ey,{...t})}):ey(t)}Hm.displayName="MDXContent";const gk=Object.freeze(Object.defineProperty({__proto__:null,default:Hm,filepath:hk,frontmatter:mk,title:bk},Symbol.toStringTag,{value:"Module"})),jk="docs/engineering/2.doc-writing-practice.md",xk="文档通用规约",vk=void 0;function ty(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"文档通用规约"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsx(e.p,{children:"在这个信息爆炸的时代，我们无时无刻不和文档打交道。我们每天都在阅读文档，有时我们自己也需要撰写文档。"}),`
`,n.jsxs(e.p,{children:["因此，我们在撰写文档的时候如果能遵循一点良好的规约，将能",n.jsx(e.strong,{children:"提升所有人的阅读体验"}),"。"]}),`
`,n.jsx(e.p,{children:"在此，文档的含义非常广泛，可以指代任何供人类阅读的文本材料。包括但不限于：Readme、Changelog、代码注释、上手指南、Issue 说明和PPT 分享等。"}),`
`,n.jsx(e.h2,{children:"1 空格"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.1【强制】中英文之间需要增加空格"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
HTML定义网页的结构与内容，CSS定义其格式与样式，而JavaScript则为网页增加可交互性，创作功能丰富的Web应用。

<!-- good -->
HTML 定义网页的结构与内容，CSS 定义其格式与样式，而 JavaScript 则为网页增加可交互性，创作功能丰富的 Web 应用。
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.2【强制】中英文与数字之间需要增加空格"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
截至2012年，所有的现代浏览器都完整的支持 ECMAScript5.1，旧版本的浏览器至少支持 ECMAScript3 标准。

<!-- good -->
截至 2012 年，所有的现代浏览器都完整的支持 ECMAScript 5.1，旧版本的浏览器至少支持 ECMAScript 3 标准。
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.3【强制】全角标点与其他字符之间不加空格"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
不像 UDP， HTTP 是一个不会静默丢失消息的协议。

<!-- good -->
不像 UDP，HTTP 是一个不会静默丢失消息的协议。
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.4【强制】半角标点与其他字符之间需要增加空格"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
Cookie 主要用于以下三个方面：

1.会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
2.个性化设置（如用户自定义设置、主题等）
3.浏览器行为跟踪（如跟踪分析用户行为等）

<!-- good -->
Cookie 主要用于以下三个方面：

1. 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
2. 个性化设置（如用户自定义设置、主题等）
3. 浏览器行为跟踪（如跟踪分析用户行为等）

<!-- bad -->
我+你=世界。

<!-- good -->
我 + 你 = 世界。
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"1.5【推荐】链接文字前后不需要增加空格"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
[了解更多](https://developer.mozilla.org/zh-CN/docs/Web) 开发技术相关知识。

<!-- good -->
[了解更多](https://developer.mozilla.org/zh-CN/docs/Web)开发技术相关知识。
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2 标点符号"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.1【推荐】正确使用引号"}),`
`,n.jsx(e.p,{children:"中文句子内夹用英文句子时，该英文句子用中文双引号标示，保留英文句子内部的英文标点符号，句末使用中文标点。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad - 英文句子不建议使用英文引号标示 -->
他写的是 "Hello, world!"。

<!-- bad - 英文句子不建议使用中文单引号标示 -->
他写的是‘Hello, world!’。

<!-- bad - 英文句子内部的标点符号建议保留英文标点符号 -->
他写的是“Hello，world！”。

<!-- good -->
他写的是“Hello, world!”。
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.2【推荐】正确使用省略号"}),`
`,n.jsx(e.p,{children:"中文省略号的形式为“……”（中文输入法下 SHIFT + 6），6 个居中小圆点；英文省略号的形式为“...”，3 个齐线小圆点。"}),`
`,n.jsx(e.p,{children:"夹用英文的中文句子里，英文内部的省略使用英文省略号；中文内部的省略使用中文省略号。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
省略号是 3 个小圆点...
省略号是 6 个齐线小圆点......
省略号是 6 个句号。。。。。。

<!-- good -->
省略号是 6 个居中小圆点，占两个全角空格……
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.3【推荐】正确使用破折号"}),`
`,n.jsx(e.p,{children:"中文破折号的形式为“——”，长度相当于两个汉字的长度。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad - 破折号不推荐使用两个中横线 -->
第三方框架和库--用来快速构建网站和应用。

<!-- good -->
第三方框架和库——用来快速构建网站和应用。
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3 全角和半角"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.1【强制】中文标点符号使用全角"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad - 中文句子冒号未使用全角 -->
前端框架: React、Vue、Angular。

<!-- bad - 中文句子内夹用并列的英文单词时使未使用顿号分隔 -->
前端框架：React, Vue, Angular。

<!-- good -->
前端框架：React、Vue、Angular。

<!-- bad - 中文句子括号未使用全角 -->
至少熟悉一门非前端的语言(如 Java、PHP、C、C++、Python、Ruby)，并有实践经验！

<!-- good -->
至少熟悉一门非前端的语言（如 Java、PHP、C、C++、Python、Ruby），并有实践经验！
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.2【强制】英文和数字使用半角"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad - 英文和数字不应该使用全角 -->
该版本正式名称为 ＥＣＭＡＳｃｒｉｐｔ ２０１５，但通常被称为 ＥＣＭＡＳｃｒｉｐｔ ６ 或者 ＥＳ６。

<!-- good -->
该版本正式名称为 ECMAScript 2015，但通常被称为 ECMAScript 6 或者 ES6。
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.3【强制】完整的英文整句和特殊名词使用半角标点"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」
推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。

<!-- good -->
乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」
推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"4 名词"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"4.1【强制】正确地拼写英文专有词汇"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
我们需要一位熟悉 Js、h5，至少理解一种框架（如 backbone、angular、RJS 等）的 FED。

<!-- good -->
我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架（如 Backbone.js、AngularJS、React 等）的前端开发者。
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"附录"}),`
`,n.jsx(e.p,{children:"前端常用专有名词："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`HTML, CSS, JavaScript/JS, AJAX, JSON, DOM, BOM, Less, HTTP, HTTPS, WebSocket, ECMAScript, ECMAScript 2015, ECMAScript 6, ES6, ES2015
jQuery, jQuery UI, jQuery Mobile, YUI, Zepto, Dojo
React, React Native, Bootstrap, RequireJS, Sea.js, AngularJS, Backbone.js
Gulp, Grunt, webpack, Yeoman, npm, spm, Babel
Mocha, Jasmine, Should.js
PHP, Java, Node.js
MySQL, MongoDB, Redis
Apache, Nginx
GitHub, GitLab, GitCafe
Chrome, Firefox, Safari, Internet Explore/IE, IE 7, Opera, UC
Android, iOS, Windows, OS X, Ubuntu, Linux, Debian
PC, Mobile, H5
MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini
iPad Air, iPad Air 2, iPad mini, iPhone, iPhone 6s, iPhone 6s Plus, Apple Watch
Alibaba, Taobao, Google, Alphabet, Apple, Microsoft, Yahoo
FPS, UI, URL, URI, URLs, URIs
`})}),`
`,n.jsx(e.h2,{children:"参考资料"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/sparanoid/chinese-copywriting-guidelines",children:"《中文文案排版指北》"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091548267.pdf",children:"《标点符号用法》"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113092346124.pdf",children:"夹用英文的中文文本的标点符号用法（草案）"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://www.w3.org/TR/clreq/",children:"《中文排版需求》"})}),`
`]})]})}function qm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ty,{...t})}):ty(t)}qm.displayName="MDXContent";const wk=Object.freeze(Object.defineProperty({__proto__:null,default:qm,filepath:jk,frontmatter:vk,title:xk},Symbol.toStringTag,{value:"Module"})),Pk="docs/engineering/3.doc-changelog.md",Sk="更新日志规约",_k=void 0;function ny(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志规约"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsx(e.p,{children:"作为一个开发者，我必须为我的项目维护一个更新日志（以下简称 Changelog）吗？"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"如果你在维护一个开源项目，或者公司内部的底层技术产品，那么提供一个 Changelog 是必需的。开发者用户很可能需要从一个低版本升级到最新版，Changelog 可以帮助他们了解新版本有哪些变化。"}),`
`,n.jsx(e.li,{children:"如果你在开发一个业务应用，那么 Changelog 不是必需的。然而提供一个 Changelog 会更好，因为其他协作者或是交接方能更直观地看到业务逻辑的演变。"}),`
`]}),`
`,n.jsx(e.p,{children:"《Git 规约》已经对 Git 提交日志的格式进行了约束，为何还要再约束 Changelog 的格式呢？"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"即便是约束了 Git log 的格式，也无法直接将 Git log 导出一个良好的 Changelog。因为 Changelog 中描述的内容需要更加精炼和归纳，对信息降噪处理等等，因此手写 Changelog 仍然是更好的选择。"}),`
`,n.jsx(e.li,{children:"不管是手写还是自动生成，Changelog 的格式都不能直接照搬 Git log 的格式。这两者的区别与联系同在。"}),`
`]}),`
`,n.jsx(e.h2,{children:"1 文件"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.1【强制】Changelog 文件必须取名为 ",n.jsx(e.code,{children:"CHANGELOG.md"})]}),`
`,n.jsx(e.p,{children:"使用大写来表明本文件的重要性，相当于是项目仓库元信息的一部分。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
changelog.md
Changelog.md
ChangeLog.md
CHANGELOG.MD

<!-- good -->
CHANGELOG.md
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.2【强制】Changelog 文件必须是使用标准 Markdown 语法的文本文件，并以 ",n.jsx(e.code,{children:".md"})," 作为后缀"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
CHANGELOG.txt
CHANGELOG.docx

<!-- good -->
CHANGELOG.md
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["1.3【强制】Changelog 文件必须存放在项目根目录下，和 ",n.jsx(e.code,{children:"README.md"}),"、",n.jsx(e.code,{children:"CONTRIBUTING.md"})," 等并列"]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2 格式"}),`
`,n.jsx(e.p,{children:"规约推荐的标准 Changelog 格式如下："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`# 更新日志

## [<version>](<version-diff-url>) (<date>)

### <type>

* <desc>
* <desc>

### <type>

* <desc>
* <desc>
`})}),`
`,n.jsx(e.p,{children:"详细规则如下："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.1【强制】文章标题使用「更新日志」作为固定文案。国际化场景使用英文「Change Log」作为固定文案"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
# 修改日志
# ChangeLog

<!-- good -->
# 更新日志
# Change Log
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.2【强制】Changelog 内容按版本号降序排列，最新版本放在最前面"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
## 1.0.0
## 2.0.0

<!-- good -->
## 2.0.0
## 1.0.0
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.3【强制】版本号 ",n.jsx(e.code,{children:"version"})," 需遵循 ",n.jsx(e.a,{href:"https://semver.org/lang/zh-CN/",children:"SemVer 规范"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
## 2.0
## 1.0.a
## 0.a.1
## 0.0.0.1

<!-- good -->
## 2.0.0
## 1.0.0
## 1.0.0-rc.1
## 1.0.0-beta.2
## 1.0.0-beta.1
## 1.0.0-beta
## 1.0.0-alpha.beta
## 1.0.0-alpha.1
## 1.0.0-alpha
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.4【推荐】版本号增加一个超链接，指向当前版本和上一个版本之间的 diff"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
## 2.0.0

<!-- good -->
## [2.0.0](https://version-diff-url)
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5【强制】更新日期 ",n.jsx(e.code,{children:"date"})," 采用 ",n.jsx(e.code,{children:"yyyy-MM-dd"})," 格式"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`<!-- bad -->
## [2.0.0](https://version-diff-url) (20200905)
## [2.0.0](https://version-diff-url) (2020-9-5)

<!-- good -->
## [2.0.0](https://version-diff-url) (2020-09-05)
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.6【推荐】更新类型 ",n.jsx(e.code,{children:"type"})," 与 Git message header 中的 ",n.jsx(e.a,{href:"./1.git.md#1.3.1-type",children:n.jsx(e.code,{children:"type"})})," 相关联，可以不一一对应"]}),`
`,n.jsx(e.p,{children:"type 用以说明更新的类型，推荐值如下："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"新增（Features）：新增功能。"}),`
`,n.jsx(e.li,{children:"修复（Bug Fixes）：修复 bug。"}),`
`,n.jsx(e.li,{children:"文档（Documentation）：文档新增或者修改。"}),`
`,n.jsx(e.li,{children:"变更（Changed）：对于某些已存在功能所发生的逻辑变化。"}),`
`,n.jsx(e.li,{children:"优化（Refactored）：性能或结构上的优化，并未带来功能的逻辑变化。"}),`
`,n.jsx(e.li,{children:"即将删除（Deprecation Warnings）：即将废弃功能。"}),`
`,n.jsx(e.li,{children:"删除（Removed）：已删除的功能。"}),`
`,n.jsx(e.li,{children:"重大变更（Breaking Changes）：破坏性变动。"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7【推荐】更新描述 ",n.jsx(e.code,{children:"desc"})," 内容需要注意以下几点："]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"使用完整的句子。即在标点方面遵循一般的文档格式规约；如果使用英语，则句首大写。"}),`
`,n.jsx(e.li,{children:"时态方面使用一般现在时，不要用过去时态。虽然查看 Changelog 时，Changelog 内容本身都发生在过去，然而使用现在时的时态更简洁明确，并且更易达成一致性。"}),`
`,n.jsx(e.li,{children:"句式使用祈使句式。即一般情况不要增加主语。因为在绝大情况下，主语都是作者「我」。"}),`
`,n.jsx(e.li,{children:"注明修复的问题。如有提过 Issue，则在句尾增加 Issue 的 ID 和链接。"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"样本示例"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`# 更新日志

## [4.6.0](https://github.com/ant-design/ant-design/compare/4.5.4...4.6.0) (2020-08-23)

### 新增

- 新增图片组件 Image。
- Table 新增 \`sticky\` 属性以支持固定表头和滚动条。[#25939](https://github.com/ant-design/ant-design/pull/25939)

### 修复

- 修复 Pagination 字体相关样式问题。[#26230](https://github.com/ant-design/ant-design/pull/26230)
- 修复 Space \`children\` 有时会重新渲染的问题。[#26219](https://github.com/ant-design/ant-design/pull/26219)

### 优化

- 用 hooks 重构 Upload。

## [4.5.4](https://github.com/ant-design/ant-design/compare/4.5.3...4.5.4)(2020-08-12)

### 新增

- 新增 \`@badge-color\` Less 变量。

### 修复

- 修复 Form.Item 在 \`hidden\` 时引用 Less 样式时失效的问题。[#26152](https://github.com/ant-design/ant-design/pull/26152)

`})}),`
`,n.jsx(e.h2,{children:"参考资料"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://keepachangelog.com/",children:"Keep a Changelog"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md",children:"Conventional Changelog"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/angular/angular.js/blob/master/CHANGELOG.md",children:"Angular Changelog"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/ant-design/ant-design/blob/master/CHANGELOG.zh-CN.md",children:"Ant Design Changelog"})}),`
`]})]})}function Wm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ny,{...t})}):ny(t)}Wm.displayName="MDXContent";const Ek=Object.freeze(Object.defineProperty({__proto__:null,default:Wm,filepath:Pk,frontmatter:_k,title:Sk},Symbol.toStringTag,{value:"Module"})),Ik="docs/intro/introduction.md",kk="阿里巴巴前端规约",Nk=void 0;function ry(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"阿里巴巴前端规约"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsx(e.p,{children:"「阿里巴巴前端规约」是在阿里经济体内广泛使用的一套前端编码和工程规范，致力于通过统一编码风格、普及最佳实践和代码缺陷检查帮助团队降低协作成本、提升前端项目的可维护性和稳定性。"}),`
`,n.jsxs(e.p,{children:["「阿里巴巴前端规约」主要包括「规约文档」和「配套工具」两部分。你可以通过阅读规约文档了解各前端语言、框架及工程规范，并使用 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/f2elint",children:"F2ELint"})," 等配套工具来为项目接入规约检查。"]}),`
`,n.jsx(e.p,{children:"「规约文档」分为编码规约和工程规约两大类，包括："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["编码规约",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/1.html-style-guide.md",children:"HTML 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/2.css-style-guide.md",children:"CSS 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/3.javascript-style-guide.md",children:"JavaScript 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/4.react-style-guide.md",children:"React 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/5.node-style-guide.md",children:"Node.js 开发规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/6.typescript-style-guide.md",children:"TypeScript 编码规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/coding/7.rax-style-guide.md",children:"Rax 编码规约"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["工程规约",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/engineering/1.git.md",children:"Git 规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/engineering/2.doc-writing-practice.md",children:"文档通用规约"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"docs/engineering/3.doc-changelog.md",children:"更新日志规约"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"单条规约格式说明"}),`
`,n.jsx(e.h3,{children:"规约级别和对应的 Lint 规则"}),`
`,n.jsx(e.p,{children:"根据约束力强弱，一条规约依次分为强制、推荐、参考三个级别："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["【强制】必须遵守。是不得不遵守的约定，违反本约定或将会引起严重的后果。如有对应 Lint 规则，配套规则包中级别为 ",n.jsx(e.code,{children:"error"}),"。"]}),`
`,n.jsxs(e.li,{children:["【推荐】尽量遵守。长期遵守这样的规定，有助于系统稳定性和合作效率的提升。如有对应 Lint 规则，配套规则包中级别为 ",n.jsx(e.code,{children:"warn"}),"。"]}),`
`,n.jsx(e.li,{children:"【参考】充分理解。技术意识的引导，是个人学习、团队沟通、项目合作的方向。如有对应 Lint 规则，配套规则包中默认不开启，开发者可根据需要自行开启。"}),`
`]}),`
`,n.jsx(e.p,{children:"一条规约的级别会在规约描述的开头标注，如有对应的 Lint 规则会在结尾标注，例如："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["1.1.1【强制】使用 2 个空格缩进。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/indent",children:"indent"})]}),`
`]}),`
`,n.jsx(e.h3,{children:"代码示例"}),`
`,n.jsx(e.p,{children:"为了更加直观，规约描述之后通常会配上代码示例，例如："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// bad
function foo() {
∙∙∙∙let name;
}

// good
function foo() {
∙∙let name;
}
`})}),`
`,n.jsxs(e.p,{children:["我们约定用 ",n.jsx(e.code,{children:"bad"})," 注释表示反例，用 ",n.jsx(e.code,{children:"good"})," 注释表示正例。"]}),`
`,n.jsxs(e.p,{children:["除了 ",n.jsx(e.code,{children:"bad"})," 和 ",n.jsx(e.code,{children:"good"}),"，有时你还会看到 ",n.jsx(e.code,{children:"disallowed"}),"、",n.jsx(e.code,{children:"allowed"}),"、",n.jsx(e.code,{children:"best"})," 这几种注释，它们的含义如下："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`// disallowed - 禁止（用于部分明令禁止的用法）
// bad - 反例
// allowed - 中例（用于允许但不推荐的用法）
// good - 正例
// best - 最佳正例（多个正例中最好的实现）
`})}),`
`,n.jsx(e.h2,{children:"如何参与"}),`
`,n.jsxs(e.p,{children:["非常欢迎大家通过 ",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/issues",children:"Issues"})," 反馈问题和需求，或者通过 ",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/pulls",children:"PRs"})," 参与贡献，请参考 ",n.jsx(e.a,{href:"/CONTRIBUTING.md",children:"CONTRIBUTING.md"}),"。"]})]})}function Vm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ry,{...t})}):ry(t)}Vm.displayName="MDXContent";const Ck=Object.freeze(Object.defineProperty({__proto__:null,default:Vm,filepath:Ik,frontmatter:Nk,title:kk},Symbol.toStringTag,{value:"Module"})),Tk="packages/commitlint-config-ali/CHANGELOG.md",Ak="更新日志",Rk=void 0;function oy(t){const e={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h2,{children:"1.0.0 (2023-12-18)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"稳定版"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.3 (2020-12-03)"}),`
`,n.jsx(e.h3,{children:"优化"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修改 package.json 和 README"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.2 (2020-11-25)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"type-enum 规则：移除 Git 规约中未提及的 type，并修改 type 顺序"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.1 (2020-11-13)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"conventional-changelog-conventionalcommits 版本升级到 ^4.5.0"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.0 (2020-04-30)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Fork from ",n.jsx(e.a,{href:"https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional",children:"@commitlint/config-conventional"}),"，并关闭 subject-case"]}),`
`]})]})}function Gm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(oy,{...t})}):oy(t)}Gm.displayName="MDXContent";const Lk=Object.freeze(Object.defineProperty({__proto__:null,default:Gm,filepath:Tk,frontmatter:Rk,title:Ak},Symbol.toStringTag,{value:"Module"})),Dk="packages/commitlint-config-ali/README.md",Fk="commitlint-config-ali",Mk=void 0;function ly(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"commitlint-config-ali"}),`
`,n.jsxs(e.p,{children:["本包提供了《阿里巴巴前端规约 - Git 规约》配套的 ",n.jsx(e.a,{href:"https://commitlint.js.org/#/concepts-shareable-config",children:"commitlint 可共享配置"}),"，用于对 git commit message 进行校验。"]}),`
`,n.jsx(e.h2,{children:"安装"}),`
`,n.jsxs(e.p,{children:["除了本包，你需要同时安装 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/@commitlint/cli",children:"@commitlint/cli"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install commitlint-config-ali @commitlint/cli --save-dev
`})}),`
`,n.jsx(e.h2,{children:"使用"}),`
`,n.jsxs(e.p,{children:["在你的 ",n.jsx(e.code,{children:"commitlint.config.js"})," 中继承本包:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`module.exports = {
  extends: ['ali'],
};
`})}),`
`,n.jsx(e.h2,{children:"设置 git hook"}),`
`,n.jsxs(e.p,{children:["可通过 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/husky",children:"husky"})," 设置在 git commit 时触发 commitlint。"]}),`
`,n.jsx(e.p,{children:"首先安装 husky："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install husky --save-dev
`})}),`
`,n.jsxs(e.p,{children:["然后在 ",n.jsx(e.code,{children:"package.json"})," 中增加："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
`})}),`
`,n.jsxs(e.p,{children:["更多信息可参考 ",n.jsx(e.a,{href:"https://commitlint.js.org/#/guides-local-setup?id=install-husky",children:"commitlint 文档"}),"。"]})]})}function Xm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ly,{...t})}):ly(t)}Xm.displayName="MDXContent";const $k=Object.freeze(Object.defineProperty({__proto__:null,default:Xm,filepath:Dk,frontmatter:Mk,title:Fk},Symbol.toStringTag,{value:"Module"})),Bk="packages/eslint-config-ali/CHANGELOG.md",zk="更新日志",Uk=void 0;function iy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h2,{children:"15.0.0 - 2024-02-06"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"BREAKING CHANGE"})," ",n.jsx(e.code,{children:"node"})," 和 ",n.jsx(e.code,{children:"typescript/node"})," 不再提供 egg 相关的配置，请使用 ",n.jsx(e.code,{children:"egg"})," 和 ",n.jsx(e.code,{children:"typescript/egg"})," 替代"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"BREAKING CHANGE"})," 升级 ",n.jsx(e.code,{children:"vue-eslint-parser"})," 7.x 到 9.x"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"BREAKING CHANGE"})," 升级 ",n.jsx(e.code,{children:"eslint-plugin-vue"})," 7.x 到 9.x"]}),`
`]}),`
`,n.jsx(e.h2,{children:"14.2.1 (2023-12-18)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["修复 TypeScript 中 ",n.jsx(e.code,{children:"no-undef"})," 误报的问题"]}),`
`]}),`
`,n.jsx(e.h2,{children:"14.2.0 (2023-12-18)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["将插件和配置添加到依赖",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"@babel/core"}),`
`,n.jsx(e.li,{children:"@babel/eslint-parser"}),`
`,n.jsx(e.li,{children:"@babel/preset-react"}),`
`,n.jsx(e.li,{children:"eslint-config-egg"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"14.1.0 (2023-12-18)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["将插件和配置添加到依赖",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"eslint-import-resolver-typescript"}),`
`,n.jsx(e.li,{children:"eslint-plugin-import"}),`
`,n.jsx(e.li,{children:"eslint-plugin-react"}),`
`,n.jsx(e.li,{children:"eslint-plugin-react-hooks"}),`
`,n.jsx(e.li,{children:"@typescript-eslint/eslint-plugin"}),`
`,n.jsx(e.li,{children:"@typescript-eslint/parser"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"14.0.2 (2022-09-06)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["react 规约 ",n.jsx(e.code,{children:"react/display-name"})," 调整为 ",n.jsx(e.code,{children:"warn"})]}),`
`]}),`
`,n.jsx(e.h2,{children:"14.0.1 (2022-06-16)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["ts 规约 ",n.jsx(e.code,{children:"no-redeclare"})," 规则调整，增加对函数重载的支持"]}),`
`]}),`
`,n.jsx(e.h2,{children:"14.0.0 (2022-03-16)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["与 ",n.jsx(e.code,{children:"eslint-plugin-import"})," 的推荐配置对齐，升级后若有由 alias 和 external 引起的报错，",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/pull/72",children:"解决方法见此"}),"：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"import/no-unresolved"})," 从 ",n.jsx(e.code,{children:"off"})," 改为 ",n.jsx(e.code,{children:"error"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"import/named"})," 从 ",n.jsx(e.code,{children:"off"})," 改为 ",n.jsx(e.code,{children:"error"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"import/default"})," 从 ",n.jsx(e.code,{children:"off"})," 改为 ",n.jsx(e.code,{children:"error"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"import/namespace"})," 从 ",n.jsx(e.code,{children:"off"})," 改为 ",n.jsx(e.code,{children:"error"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"import/export"})," 从 ",n.jsx(e.code,{children:"off"})," 改为 ",n.jsx(e.code,{children:"error"})]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["使用 ",n.jsx(e.code,{children:"eslint-import-resolver-typescript"})," 解析路径以支持 ",n.jsx(e.code,{children:"tsconfig.json"})," 的 ",n.jsx(e.code,{children:"paths"})]}),`
`]}),`
`,n.jsx(e.h2,{children:"13.1.0 (2022-01-21)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"no-param-reassign"})," 增加对 ",n.jsx(e.code,{children:"immer"})," 的支持"]}),`
`]}),`
`,n.jsx(e.h2,{children:"13.0.0 (2021-11-15)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["将 ",n.jsx(e.code,{children:"babel-eslint"})," 替换为 ",n.jsx(e.code,{children:"@babel/eslint-parser"})]}),`
`,n.jsxs(e.li,{children:["更新 ",n.jsx(e.code,{children:"@typescript-eslint/eslint-plugin"})," 及 ",n.jsx(e.code,{children:"@typescript-eslint/parser"})," 版本（",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/issues/3738",children:"说明"}),"），支持 ESLint 8.x"]}),`
`,n.jsxs(e.li,{children:["升级 ",n.jsx(e.code,{children:"eslint-config-egg"})," 到 10.x"]}),`
`,n.jsxs(e.li,{children:["启用 ",n.jsx(e.code,{children:"template-curly-spacing"})," 为 warn"]}),`
`]}),`
`,n.jsx(e.h2,{children:"12.2.2 (2021-09-14)"}),`
`,n.jsx(e.h3,{children:"删除"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"react/no-did-mount-set-state"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"react/no-did-update-set-state"})}),`
`]}),`
`,n.jsx(e.h2,{children:"12.2.1 (2021-08-12)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TS 规范 parserOptions 加回 createDefaultProgram 配置，兼容所有 tsconfig 配置。已知多包仓库 ESLint 检测速度会变慢。若检测速度非常慢，可考虑增量扫描或者使用下面配置加速："}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`{
  parserOptions: {
    project: [],
    createDefaultProgram: false,
  },
  rules: {
    '@typescript-eslint/dot-notation': 'off'
  }
}
`})}),`
`,n.jsx(e.h2,{children:"12.2.0 (2021-08-05)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TS 规范 parserOptions 去除 createDefaultProgram ，提升性能。"}),`
`]}),`
`,n.jsx(e.h2,{children:"12.1.0 (2021-04-27)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Rax 规则支持通过 ",n.jsx(e.code,{children:"eslint-plugin-jsx-plus"})," 校验 JSX+ 语法"]}),`
`]}),`
`,n.jsx(e.h2,{children:"12.0.2 (2021-04-23)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["更新依赖",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["peerDependencies eslint ",n.jsx(e.code,{children:">=7.0.0"})," -> ",n.jsx(e.code,{children:">=6.8.0"})," 兼容更多原有项目。"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"12.0.1 (2021-02-24)"}),`
`,n.jsx(e.h3,{children:"文档"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 v12 readme 中依赖版本未修改改的问题"}),`
`]}),`
`,n.jsx(e.h2,{children:"12.0.0 (2021-02-03)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["升级依赖",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["eslint ",n.jsx(e.a,{href:"https://eslint.org/docs/user-guide/migrating-to-7.0.0",children:"v6 -> v7"})]}),`
`,n.jsx(e.li,{children:"eslint-plugin-vue v6 -> v7"}),`
`,n.jsx(e.li,{children:"typescript v3 -> v4"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"11.4.1 (2020-12-03)"}),`
`,n.jsx(e.h3,{children:"文档"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 readme 表格展示问题"}),`
`]}),`
`,n.jsx(e.h2,{children:"11.4.0 (2020-12-03)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["关闭规则 ",n.jsx(e.code,{children:"lines-between-class-members"})]}),`
`,n.jsx(e.li,{children:"调整部分 /essential 规则"}),`
`]}),`
`,n.jsx(e.h3,{children:"优化"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"优化 Readme 和部分规则注释"}),`
`,n.jsx(e.li,{children:"调整代码结构"}),`
`,n.jsx(e.li,{children:"package.json 中增删一些字段"}),`
`]}),`
`,n.jsx(e.h2,{children:"11.3.1 (2020-11-24)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"no-shadow"})," 在 typescript 规则下禁用，改为使用 ",n.jsx(e.code,{children:"@typescript-eslint/no-shadow"}),"，错误等级遵循 JS 规约"]}),`
`]}),`
`,n.jsx(e.h2,{children:"11.3.0 (2020-11-19)"}),`
`,n.jsx(e.p,{children:"主要涉及 node 和 typescript/node 的规则变动，具体如下："}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新增 eslint-config-ali/node。删除原有 base/node 规则内容，删除原因见 ",n.jsx(e.a,{href:"https://eslint.org/docs/user-guide/migrating-to-7.0.0#nodejscommonjs-rules-have-been-deprecated",children:"nodejscommonjs-rules-have-been-deprecated"}),"。修改后继承 ",n.jsx(e.a,{href:"https://github.com/eggjs/eslint-config-egg/blob/master/lib/rules/node.js",children:"eslint-config-egg/lib/rules/node"})," 规则。具体规则如下：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"【强制】node/no-new-require"}),`
`,n.jsx(e.li,{children:"【强制】node/prefer-global/buffer"}),`
`,n.jsx(e.li,{children:"【强制】node/prefer-global/console"}),`
`,n.jsx(e.li,{children:"【强制】node/prefer-global/process"}),`
`,n.jsx(e.li,{children:"【强制】node/prefer-promises/dns"}),`
`,n.jsx(e.li,{children:"【强制】node/prefer-promises/fs"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"新增 eslint-config-ali/typescript/node，继承 Node 规则和 Typescript 规则。"}),`
`]}),`
`,n.jsx(e.h2,{children:"11.2.0 (2020-11-10)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新增规则：",n.jsx(e.code,{children:"arrow-parens'': ['warn', 'always']"})]}),`
`,n.jsx(e.li,{children:"关闭规则：no-plusplus、no-return-await、implicit-arrow-linebreak"}),`
`,n.jsxs(e.li,{children:["增加 ",n.jsx(e.a,{href:"https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy",children:"root: ture"})]}),`
`]}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 /essential 规则的报错"}),`
`]}),`
`,n.jsx(e.h3,{children:"文档"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Readme 增加配合 prettier 使用的方法"}),`
`]}),`
`,n.jsx(e.h2,{children:"11.1.1 (2020-10-26)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TS 规则增加 parserOptions.createDefaultProgram，修复未在 tsconfig.json 中 included 的文件报错"}),`
`]}),`
`,n.jsx(e.h2,{children:"11.1.0 (2020-10-20)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"新增 Rax 规约配套规则：增加 eslint-config-ali/rax 和 eslint-config-ali/typescript/rax"}),`
`]}),`
`,n.jsx(e.h2,{children:"11.0.0 (2020-10-13)"}),`
`,n.jsx(e.p,{children:"主要涉及 TS 规约的 lint config 和 guide 重构，具体如下："}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"【推荐】使用 @ts-expect-error/@ts-ignore/@ts-nocheck/@ts-check 等指令时需跟随注释描述"}),`
`,n.jsxs(e.li,{children:["【强制】禁止使用 tslint:"," 等相关注释"]}),`
`,n.jsx(e.li,{children:"【推荐】类的属性如果是字面量，则必须是只读属性而不能用 getter"}),`
`,n.jsxs(e.li,{children:["【强制】类型断言必须使用 as Type 而非 ","，对象字面量禁止类型断言（断言成 any 除外）"]}),`
`,n.jsx(e.li,{children:"【推荐】优先使用 interface 而不是 type 定义对象类型"}),`
`,n.jsx(e.li,{children:"【强制】优先使用 . 访问对象的属性"}),`
`,n.jsx(e.li,{children:"【推荐】设置类的成员的可访问性，public 可省略"}),`
`,n.jsx(e.li,{children:"【强制】interface/type 类型中保持一致的成员分隔符分号「;」，单行类型的最后一个元素不加分号"}),`
`,n.jsxs(e.li,{children:["【推荐】类成员的遵循一定的排序规则",`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"类的静态方法/属性(static)优先于实例的方法/属性(instance)"}),`
`,n.jsx(e.li,{children:"属性(field)优先于构造函数(constructor)，优先于方法(method)"}),`
`,n.jsx(e.li,{children:"公开的项(public)优先于受保护的(protected)，优先于私有的(private)"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"【推荐】interface 中的方法用属性的方式定义"}),`
`,n.jsx(e.li,{children:"【推荐】禁止使用容易混淆的非空断言"}),`
`,n.jsx(e.li,{children:"【推荐】禁止出现空的 interface"}),`
`,n.jsx(e.li,{children:"【关闭】禁止多余的 non-null 断言"}),`
`,n.jsx(e.li,{children:"【推荐】禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型"}),`
`,n.jsx(e.li,{children:"【强制】禁止使用无意义的 void 类型，void 只能用在函数的返回值中"}),`
`,n.jsx(e.li,{children:"【强制】禁止使用 namespace 来定义命名空间，但允许使用 declare namespace 定义外部命名空间"}),`
`,n.jsx(e.li,{children:"【强制】禁止在 optional chaining 之后使用 non-null 断言"}),`
`,n.jsx(e.li,{children:"【推荐】不建议将 this 赋值给其他变量，解构赋值除外"}),`
`,n.jsx(e.li,{children:"【推荐】当设定当前值为当前类型时，推荐使用 as const 替代 as 'bar'"}),`
`,n.jsx(e.li,{children:"【强制】禁止使用 module 来定义命名空间，declare module 是允许的"}),`
`,n.jsx(e.li,{children:"【推荐】使用加号时，两者必须同为数字或同为字符串"}),`
`,n.jsx(e.li,{children:"【强制】三斜杠导入语法已废弃，在非 dts 文件中禁止使用"}),`
`,n.jsx(e.li,{children:"【强制】定义类型时应正确添加空格"}),`
`,n.jsx(e.li,{children:"【强制】interface 和 type 定义时必须声明成员的类型"}),`
`,n.jsx(e.li,{children:"【推荐】定义函数时，优先使用参数的联合类型而不是函数的类型重载"}),`
`]}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"禁止使用指定的类型：强制 -> 关闭"}),`
`,n.jsxs(e.li,{children:["【关闭】限制各种变量或类型的命名规则：",n.jsx(e.code,{children:"@typescript-eslint/camelcase"})," -> ",n.jsx(e.code,{children:"@typescript-eslint/naming-convention"})]}),`
`]}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"TS 规则 extraFileExtensions: ['.vue']"}),`
`]}),`
`,n.jsx(e.h3,{children:"文档"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"重写前端规约 TypeScript 部分"}),`
`,n.jsx(e.li,{children:"增加 parserOptions.project 链接"}),`
`]}),`
`,n.jsx(e.h2,{children:"10.2.2 (2020-09-27)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"fix: spaced-comment markers 增加 /，以支持 ts 三斜线指令"}),`
`]}),`
`,n.jsx(e.h2,{children:"10.2.1 (2020-09-25)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"docs: xima 链接替换为 f2elint"}),`
`]}),`
`,n.jsx(e.h2,{children:"10.2.0 (2020-09-10)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"feat: 新增 jsx-a11y 规则集"}),`
`]}),`
`,n.jsx(e.h2,{children:"10.1.1 (2020-08-03)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["fix: 修改规则",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"'import/prefer-default-export': 'off'"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"'require-yield': 'error'"})}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"10.1.0 (2020-07-29)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新启用规则",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"'react/no-access-state-in-setstate': 'error'"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"'react/jsx-props-no-multi-spaces': 'error'"}),"，essential 中为 ",n.jsx(e.code,{children:"'warn'"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"10.0.0 (2020-07-06)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"feat: 引入 babel-eslint 作为 JS 项目默认 parser"}),`
`,n.jsxs(e.li,{children:["feat: ",n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-plugin-react#configuration",children:"settings.react.version"})," 改为 detect（如果本地没有装 react，CLI 会报一个 Warning）"]}),`
`,n.jsx(e.li,{children:"feat: ecmaVersion 升到 2020"}),`
`]}),`
`,n.jsx(e.h2,{children:"9.1.2 (2020-07-01)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'fix: 增加 peerDependencies 声明 "eslint": ">=6.8.0"'}),`
`]}),`
`,n.jsx(e.h2,{children:"9.1.1 (2020-06-28)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"fix: 删除 @typescript-eslint/ban-ts-ignore 规则"}),`
`]}),`
`,n.jsx(e.h2,{children:"9.1.0 (2020-06-28)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"chore: @typescript-eslint 和 eslint-plugin-react-hooks 依赖版本升至最新"}),`
`,n.jsx(e.li,{children:"docs: 增加 xima 链接"}),`
`]}),`
`,n.jsx(e.h2,{children:"9.0.2 (2019-12-23)"}),`
`,n.jsx(e.h3,{children:"文档"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修改 Changelog，补充对 v9 版本 comma-dangle 规则带来的 Breaking changes"}),`
`]}),`
`,n.jsx(e.h2,{children:"9.0.1 (2019-12-23)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"移除规则：@typescript-eslint/no-angle-bracket-type-assertion"}),`
`]}),`
`,n.jsx(e.h2,{children:"9.0.0 (2019-12-23)"}),`
`,n.jsx(e.h3,{children:"Breaking Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"依赖升级：eslint \bv6 及其他依赖升级"}),`
`,n.jsx(e.li,{children:"comma-dangle 规则对函数参数也生效，即多行的函数参数末尾需要使用逗号"}),`
`]}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"新启用规则：no-useless-catch"}),`
`]}),`
`,n.jsx(e.h2,{children:"8.0.2 (2019-07-23)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"@typescript-eslint/no-use-before-define 规则调整为跟 no-use-before-define 一致"}),`
`]}),`
`,n.jsx(e.h2,{children:"8.0.1 (2019-07-17)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"ecmaVersion 升级到 2019"}),`
`]}),`
`,n.jsx(e.h2,{children:"8.0.0 (2019-07-17)"}),`
`,n.jsx(e.h3,{children:"Breaking Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"依赖的 plugin 和 parser 不再以 peerDependencies 声明，而是让用户完全根据文档手动安装：因为本包支持的项目类型变多，比如用户是 JS + React 的项目，那提示他装 ts、vue 的 plugin 和 parser 就不太合理，后面可能提供一个 cli 工具"}),`
`]}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"增加 TypeScript 支持"}),`
`]}),`
`,n.jsx(e.h2,{children:"7.1.0 (2019-07-10)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"env（全局变量环境）增加几个测试框架：mocha、jasmine、jest"}),`
`]}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"react/default-props-match-prop-types 级别由 error 降为 warn"}),`
`,n.jsxs(e.li,{children:["以下规则在 essential 中进行降级为 warn：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"no-prototype-builtins"}),`
`,n.jsx(e.li,{children:"object-shorthand"}),`
`,n.jsx(e.li,{children:"no-var"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"7.0.0 (2019-07-04)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"增加 Vue 支持，通过 eslint-config-ali/vue 使用"}),`
`]}),`
`,n.jsx(e.h3,{children:"Breaking Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"新增依赖 eslint-plugin-vue 和 vue-eslint-parser 两个依赖"}),`
`]}),`
`,n.jsx(e.h2,{children:"6.1.1 (2019-07-03)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"essential 中降级一些未降级的规则"}),`
`]}),`
`,n.jsx(e.h2,{children:"6.1.0 (2019-06-25)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"增加 essential 级别出口：该级别更加宽松，仅将「必要」的规则设置为 error 级别，默认出口中大部分不会引起 bug 的规则（如风格问题）级别从 error 被降级为 warn"}),`
`]}),`
`,n.jsx(e.h2,{children:"6.0.0 (2019-04-03)"}),`
`,n.jsx(e.h3,{children:"Breaking Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新增依赖 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",children:"eslint-plugin-react-hooks"}),"，以支持 ",n.jsx(e.a,{href:"https://reactjs.org/docs/hooks-rules.html",children:"react hooks 规则"}),"。升级 v6 后，需手动安装 eslint-plugin-react-hooks 依赖"]}),`
`]}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新启用 2 条 react-hooks 规则：",n.jsx(e.code,{children:"react-hooks/rules-of-hooks"}),"、",n.jsx(e.code,{children:"react-hooks/exhaustive-deps"})]}),`
`]}),`
`,n.jsx(e.h2,{children:"5.0.1 (2019-01-10)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"docs: README 修改"}),`
`]}),`
`,n.jsx(e.h2,{children:"5.0.0 (2019-01-10)"}),`
`,n.jsx(e.h3,{children:"Breaking Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"v5 版本相比 v4 对大量规则的错误级别进行了调整，以与 JS 规约中的规则级别对齐。升级后代码的 lint 结果可能有些变化，需进行人工 check"}),`
`]}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"新增 /essential 级别出口文件，关闭部分有争议的或因业务无法规避的问题。以供某些卡点场景使用"}),`
`,n.jsx(e.li,{children:"test: 增加测试"}),`
`]}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"docs: 大部分规则增加中文注释说明"}),`
`]}),`
`,n.jsx(e.h2,{children:"4.1.0 (2018-12-17)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新启用规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"'react/no-this-in-sfc': 'error'"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"react/jsx-closing-tag-location"})," 由 off 改为 error"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"react/no-did-mount-set-state"})," 由 off 改为 warn"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"react/no-did-update-set-state"})," 由 error 改为 warn"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"react/sort-comp"})," 由 warn 改为 off"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"no-empty"})," 由 error 改为 warning"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"newline-per-chained-call"})," 由 error 改为 warning"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"4.0.0 (2018-09-14)"}),`
`,n.jsx(e.h3,{children:"Breaking Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["ESLint 依赖升级到 ",n.jsx(e.a,{href:"https://eslint.org/docs/user-guide/migrating-to-5.0.0",children:"v5"})]}),`
`]}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新启用规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"'no-async-promise-executor': 'error'"}),`
`,n.jsx(e.li,{children:"'no-misleading-character-class': 'error'"}),`
`,n.jsx(e.li,{children:"'require-atomic-updates': 'error'"}),`
`,n.jsx(e.li,{children:"'import/no-self-import': 'error'"}),`
`,n.jsx(e.li,{children:"'import/no-cycle': ['error', { maxDepth: Infinity }]"}),`
`,n.jsx(e.li,{children:"'import/no-useless-path-segments': 'error'"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"parserOptions.ecmaVersion"})," 参数由 ",n.jsx(e.code,{children:"2017"})," 升级到 ",n.jsx(e.code,{children:"2018"}),"，去除废弃的 experimentalObjectRestSpread 参数（对非 es5 规则包）"]}),`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"function-paren-newline"})," 由 off 改为 ['error', 'consistent']"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"no-return-assign"})," 由 error 改为 ['error', 'always']"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"implicit-arrow-linebreak"})," 由 off 改为 ['warn', 'beside']"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3.2.0 (2018-09-14)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["关闭了 2 个阈值限定的规则，包括 ",n.jsx(e.code,{children:"complexity"})," 和 ",n.jsx(e.code,{children:"max-depth"}),"。此类问题在编码过程中会引起大片段报错，让人想关掉它们。这类问题比较适合做后置检查"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"import/first"})," 由 ['error', 'absolute-first'] 调整为 error"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"react/react-in-jsx-scope"})," 由 error 改为 off：如 rax 这类包装过的框架此规则不适用"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"react/sort-comp"})," 由 error 改为 warn，并细化 lifecycle、增加 instance-variables 和 instance-methods"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"react/jsx-no-target-blank"})," 由 error 改为 warn"]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3.1.0 (2018-03-13)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新启用规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["complexity 开启为 ",n.jsx(e.code,{children:"['warn', 20]"})]}),`
`,n.jsxs(e.li,{children:["max-depth 开启为 ",n.jsx(e.code,{children:"['warn', 4]"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["react/jsx-filename-extension 增加",n.jsx(e.code,{children:".js"}),"类型"]}),`
`,n.jsxs(e.li,{children:["default-case 降为 warn 警告级别 ",n.jsx(e.code,{children:"['warn', { commentPattern: '^no default$' }]"})]}),`
`,n.jsx(e.li,{children:"arrow-parens 降为 warn 级别"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3.0.1 (2018-01-19)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"class-methods-use-this 由 warn 改为 off"}),`
`,n.jsx(e.li,{children:"vars-on-top 由 warn 改为 off"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3.0.0 (2018-01-18)"}),`
`,n.jsx(e.h3,{children:"Breaking Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"v3 版本开启了一批 ESLint 官方和 react 插件新增的规则，同时对原有规则做了一些调整。另外，调整了包的代码结构。"}),`
`]}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新启用规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"lines-between-class-members error"}),`
`,n.jsx(e.li,{children:"no-useless-return error"}),`
`,n.jsx(e.li,{children:"no-restricted-globals error"}),`
`,n.jsx(e.li,{children:"prefer-destructuring warn"}),`
`,n.jsx(e.li,{children:"react/no-unused-state error"}),`
`,n.jsx(e.li,{children:"react/default-props-match-prop-types error"}),`
`,n.jsx(e.li,{children:"react/no-redundant-should-component-update error"}),`
`,n.jsx(e.li,{children:"react/no-typos error"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"no-param-reassign off 改为 warn"}),`
`,n.jsx(e.li,{children:"guard-for-in off 改为 warn"}),`
`,n.jsx(e.li,{children:"no-floating-decimal warn 改为 error"}),`
`,n.jsx(e.li,{children:"no-else-return 由 warn 改为 off"}),`
`,n.jsx(e.li,{children:"newline-per-chained-call: 由 off 改为 ['error', { ignoreChainWithDepth: 4 }],"}),`
`,n.jsx(e.li,{children:"max-len 由 120 行调整为 100 行，增加对包含字符串、模板字符串、正则的行的忽略"}),`
`,n.jsx(e.li,{children:"new-cap 由 warn 改为 error"}),`
`,n.jsx(e.li,{children:"import/no-amd 由 off 改为 error"}),`
`,n.jsx(e.li,{children:"react/prefer-stateless-function 由 warn 改为 off"}),`
`,n.jsx(e.li,{children:"react/require-default-props 由 warn 改为 off"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2.0.3 (2017-09-05)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"linebreak-style: 报错级别由['error', 'unix']改为 off"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2.0.2 (2017-09-05)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'react/forbid-prop-types: 报错级别由"error"调整为"warn"'}),`
`,n.jsx(e.li,{children:'new-cap: 报错级别由"error"调整为"warn"'}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2.0.1 (2017-08-01)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:'no-plusplus: 由"error"调整为["error", { allowForLoopAfterthoughts: true }]'}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"2.0.0 (2017-06-28)"}),`
`,n.jsx(e.h3,{children:"Breaking Changes"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["升级如下依赖：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"ESLint 版本从 v3 升级到 v4"}),`
`,n.jsx(e.li,{children:"eslint-plugin-react 从^6.3.0 升级到^7.1.0"}),`
`,n.jsx(e.li,{children:"eslint-plugin-import 从^1.16.0 升级到^2.6.0"}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.3 (2017-06-28)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"v1 版本继续支持 ESLint v3"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.2 (2017-06-28)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"依赖升级到 ESLint v4"}),`
`,n.jsxs(e.li,{children:["调整规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"max-len: 由 200 调整为 120"}),`
`,n.jsx(e.li,{children:'comma-dangle: es6 使用"always-multiline", es5 使用"never"'}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"style: 错误等级由数字改为字符串"}),`
`,n.jsxs(e.li,{children:["fix: 去掉 top-level 的 ecmaFeatures 属性，以修复 ",n.jsx(e.a,{href:"https://github.com/eslint/eslint/issues/8726",children:"ESLint v4 报错"})]}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.1 (2017-05-16)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"docs: README 中安装方式更新"}),`
`,n.jsx(e.li,{children:"调整规则：consistent-return, radix"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.0 (2016-12-06)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["基于 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-config-airbnb",children:"eslint-config-airbnb"})," v.12.0.0 封装一层规则"]}),`
`]})]})}function Jm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(iy,{...t})}):iy(t)}Jm.displayName="MDXContent";const Hk=Object.freeze(Object.defineProperty({__proto__:null,default:Jm,filepath:Bk,frontmatter:Uk,title:zk},Symbol.toStringTag,{value:"Module"})),qk="packages/eslint-config-ali/README.md",Wk="eslint-config-ali",Vk=void 0;function ay(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"eslint-config-ali"}),`
`,n.jsxs(e.p,{children:["本包是",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec",children:"《阿里巴巴前端规约》"}),"配套的 ",n.jsx(e.a,{href:"http://eslint.org/docs/developer-guide/shareable-configs.html",children:"ESLint 可共享配置"}),"，提供了多套配置文件以支持 JavaScript、TypeScript、React、Vue、Node.js 等多种项目类型。"]}),`
`,n.jsx(e.h2,{children:"f2elint 接入（推荐）"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx f2elint
`})}),`
`,n.jsx(e.h2,{children:"手动接入"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install --save-dev eslint eslint-config-ali
`})}),`
`,n.jsx(e.h2,{children:"项目配置"}),`
`,n.jsx(e.h3,{children:"基础 JavaScript 项目"}),`
`,n.jsxs(e.p,{children:["针对未使用 React 或 Vue 的原生 JavaScript 项目，使用 ESLint 原生规则和 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-plugin-import",children:"eslint-plugin-import"})," 规则，使用 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/@babel/eslint-parser",children:"@babel/eslint-parser"})," 作为 parser，是本包的默认配置。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali"]
}
`})}),`
`,n.jsx(e.h3,{children:"基础 TypeScript 项目"}),`
`,n.jsxs(e.p,{children:["针对未使用 React 或 Vue 的 TypeScript 项目，继承了默认配置，并启用了 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin",children:"@typescript-eslint/eslint-plugin"})," 插件的规则，使用 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser",children:"@typescript-eslint/parser"})," 作为 parser。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/typescript"]
}
`})}),`
`,n.jsxs(e.p,{children:["注意：需要保证项目安装了 ",n.jsx(e.code,{children:"typescript@5"})," 依赖，同时根目录下有 ",n.jsx(e.code,{children:"tsconfig.json"})," 文件。"]}),`
`,n.jsx(e.h3,{children:"React JavaScript 项目"}),`
`,n.jsxs(e.p,{children:["针对 JS React 项目，继承了默认配置，并启用了 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-plugin-react",children:"eslint-plugin-react"})," 和 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",children:"eslint-plugin-react-hooks"})," 的规则。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/react"]
}
`})}),`
`,n.jsx(e.p,{children:"如果需要无障碍能力："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/react", "eslint-config-ali/jsx-a11y"]
}
`})}),`
`,n.jsx(e.h3,{children:"TypeScript + React 项目"}),`
`,n.jsxs(e.p,{children:["针对 TS React 项目，继承了 JS React 的配置，并启用了 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin",children:"@typescript-eslint/eslint-plugin"})," 插件的规则，使用 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser",children:"@typescript-eslint/parser"})," 作为 parser。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/typescript/react"]
}
`})}),`
`,n.jsx(e.p,{children:"如果需要无障碍能力："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": [
    "eslint-config-ali/typescript/react",
    "eslint-config-ali/jsx-a11y"
  ]
}
`})}),`
`,n.jsx(e.h3,{children:"Vue JavaScript 项目"}),`
`,n.jsxs(e.p,{children:["针对 JS Vue 的项目，继承了默认配置，并启用了 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/eslint-plugin-vue",children:"eslint-plugin-vue"})," 插件的规则，使用 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/vue-eslint-parser",children:"vue-eslint-parser"})," 作为 parser。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/vue"]
}
`})}),`
`,n.jsx(e.h3,{children:"Vue TypeScript"}),`
`,n.jsxs(e.p,{children:["针对 TS Vue 项目，继承了 JS Vue 的配置，并启用了 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin",children:"@typescript-eslint/eslint-plugin"})," 插件的规则，使用 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser",children:"@typescript-eslint/parser"})," 作为 parser。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/typescript/vue"]
}
`})}),`
`,n.jsx(e.h3,{children:"Node.js JavaScript 项目"}),`
`,n.jsxs(e.p,{children:["针对 Node.js 项目，规则由 ESLint 原生规则和 ",n.jsx(e.a,{href:"https://github.com/mysticatea/eslint-plugin-node",children:"eslint-plugin-node"})," 提供。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/node"]
}
`})}),`
`,n.jsx(e.h3,{children:"Node.js TypeScript 项目"}),`
`,n.jsxs(e.p,{children:["针对未使用 React 和 Vue 的 TypeScript(Node) 项目，继承了 JS Node.js 配置，并启用了 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin",children:"@typescript-eslint/eslint-plugin"})," 插件的规则，使用 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser",children:"@typescript-eslint/parser"})," 作为 parser。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/typescript/node"]
}
`})}),`
`,n.jsx(e.h3,{children:"Egg.js JavaScript 项目"}),`
`,n.jsxs(e.p,{children:["针对 Egg.js 项目，继承了 Node.js 配置和 ",n.jsx(e.a,{href:"https://github.com/eggjs/eslint-config-egg/blob/master/lib/rules/node.js",children:"egg-config-egg 的 node 规则"}),"。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/egg"]
}
`})}),`
`,n.jsx(e.h3,{children:"Egg.js TypeScript 项目"}),`
`,n.jsxs(e.p,{children:["针对未使用 React 和 Vue 的 TypeScript(Node) 项目，继承了 JS Node.js 配置，并启用了 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin",children:"@typescript-eslint/eslint-plugin"})," 插件的规则，使用 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser",children:"@typescript-eslint/parser"})," 作为 parser。"]}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/typescript/egg"]
}
`})}),`
`,n.jsx(e.h3,{children:"配合 Prettier 使用"}),`
`,n.jsxs(e.p,{children:["如果你的项目使用 ",n.jsx(e.a,{href:"https://prettier.io/",children:"Prettier"})," 进行代码格式化，本包的一些规则可能会跟 Prettier 格式化结果有冲突，",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/issues/372",children:"例如这条规则"}),"。为了避免冲突，你需要手动安装 ",n.jsx(e.a,{href:"https://github.com/prettier/eslint-config-prettier",children:"eslint-config-prettier"})," 和 ",n.jsx(e.a,{href:"https://github.com/prettier/eslint-plugin-prettier",children:"eslint-plugin-prettier"}),"："]}),`
`,n.jsx(e.p,{children:"安装依赖："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-sh",children:`npm install --save-dev eslint-config-prettier eslint-plugin-prettier
`})}),`
`,n.jsx(e.p,{children:"ESLint 配置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": ["eslint-config-ali/typescript/react", "plugin:prettier/recommended"]
}
`})}),`
`,n.jsx(e.h2,{children:"将风格问题降级"}),`
`,n.jsxs(e.p,{children:["为了保证一致的编码风格，本包中大量风格相关的规则被设为了 error 级别，以引起开发者的足够重视。如果你觉得风格问题不足以是 error 级别（有些用户根据 ESLint error 进行流程卡点），本包还提供了一套名为 'essential' 的配置文件，这套配置将所有风格问题降级为 warn 级别，仅将必要问题报告为 error，引用方式为在相应配置的 ",n.jsx(e.code,{children:"eslint-config-ali"})," 后面加上 ",n.jsx(e.code,{children:"/essential"}),"，如对 JS React 项目为 ",n.jsx(e.code,{children:"eslint-config-ali/essential/react"}),"、对 TS Vue 项目为 ",n.jsx(e.code,{children:"eslint-config-ali/essential/typescript/vue"})]}),`
`,n.jsx(e.h2,{children:"了解更多"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["如果你对 ESLint 还不熟悉，可以阅读官网的 ",n.jsx(e.a,{href:"https://eslint.org/docs/user-guide/getting-started",children:"Getting Started"})," 快速入门。"]}),`
`,n.jsxs(e.li,{children:["了解如何为 IDE 配置 ESLint，可以参考官网的 ",n.jsx(e.a,{href:"http://eslint.org/docs/user-guide/integrations",children:"Integrations"}),"。"]}),`
`,n.jsxs(e.li,{children:["了解如何在继承本包的基础上对项目 ESLint 进行个性化配置，可参考官网的 ",n.jsx(e.a,{href:"https://eslint.org/docs/user-guide/configuring",children:"Configuring ESLint"}),"。下面简介下 ESLint 配置中的几个常用字段：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"extends"}),": 继承一组规则集。",n.jsx(e.code,{children:'"extends": "eslint-config-ali",'})," 表示继承本包定义的规则配置。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"rules"}),": 配置规则，这里定义的规则会覆盖 ",n.jsx(e.code,{children:"extends"})," 的规则。如果觉得本包开启的某条规则过于严格，你可以暂时在这里将其关闭。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"parser"}),": 设置 ESLint 的解析器。ESLint 使用 espree 作为默认的解析器，可以通过这个参数指定其他的解析器。比如指定为 ",n.jsx(e.a,{href:"https://npmjs.com/package/@babel/eslint-parser",children:"@babel/eslint-parser"}),"，以解析 Babel 支持但 ESLint 默认解析器不支持的语法（本包不同配置文件使用的解析器可在简介表格中的「依赖 parser」一列查看）。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"globals"}),": 指定代码中可能用到的全局变量，以免全局变量被 ",n.jsx(e.a,{href:"http://eslint.org/docs/rules/no-undef",children:"no-undef"})," 规则报错。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"env"}),": 指定代码的运行环境，每个环境预定义了一组对应的全局变量，本包已开启的环境有 browser、node、jquery、es6 及几个测试框架的环境。"]}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["了解常用的 ESLint 命令，如 ",n.jsx(e.code,{children:"--fix"}),"、",n.jsx(e.code,{children:"--ext"}),"，可参考官网的 ",n.jsx(e.a,{href:"http://eslint.org/docs/user-guide/command-line-interface",children:"Command Line Interface"}),"。"]}),`
`]})]})}function Km(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ay,{...t})}):ay(t)}Km.displayName="MDXContent";const Gk=Object.freeze(Object.defineProperty({__proto__:null,default:Km,filepath:qk,frontmatter:Vk,title:Wk},Symbol.toStringTag,{value:"Module"})),Xk="packages/eslint-plugin-ali/CHANGELOG.md",Jk="更新日志",Kk=void 0;function cy(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h2,{children:"1.0.1 (2021-09-15)"}),`
`,n.jsx(e.h3,{children:"优化"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"统一文件命名"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.0 (2020-12-15)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["新增规则：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"no-broad-semantic-versioning"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"no-http-url"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"no-js-in-ts-project"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"no-secret-info"})}),`
`]}),`
`]}),`
`]})]})}function Qm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(cy,{...t})}):cy(t)}Qm.displayName="MDXContent";const Qk=Object.freeze(Object.defineProperty({__proto__:null,default:Qm,filepath:Xk,frontmatter:Kk,title:Jk},Symbol.toStringTag,{value:"Module"})),Yk="packages/eslint-plugin-ali/README.md",Zk="eslint-plugin-ali",e2=void 0;function fy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"eslint-plugin-ali"}),`
`,n.jsx(e.h2,{children:"安装"}),`
`,n.jsxs(e.p,{children:["除了本包，你需要同时安装 ",n.jsx(e.a,{href:"https://eslint.org/",children:"ESlint"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-shell",children:`$ npm install eslint-plugin-ali eslint --save-dev
`})}),`
`,n.jsx(e.h2,{children:"使用"}),`
`,n.jsx(e.h3,{children:"引入插件"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// .eslintrc.js
module.exports = {
  plugin: ["ali"],
  rules: {
    "ali/no-secret-info": "error"
  }
}
`})}),`
`,n.jsx(e.h3,{children:"使用 presets"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// .eslintrc.js
module.exports = {
  // 包含通用规则
  // https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/src/configs/recommended.js
  extends: "plugin:ali/recommended"
}
`})}),`
`,n.jsx(e.h2,{children:"支持的规则"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-broad-semantic-versioning.md",children:n.jsx(e.code,{children:"no-broad-semantic-versioning"})})," 不要指定宽泛的版本范围"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-http-url.md",children:n.jsx(e.code,{children:"no-http-url"})})," 使用 HTTPS 协议头的 URL，而不是 HTTP"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-js-in-ts-project.md",children:n.jsx(e.code,{children:"no-js-in-ts-project"})})," 不要在 TS 项目中使用 JS"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/tree/main/packages/eslint-plugin-ali/docs/rules/no-secret-info.md",children:n.jsx(e.code,{children:"no-secret-info"})})," 不要在代码中直接设置 ",n.jsx(e.code,{children:"password"})," ",n.jsx(e.code,{children:"token"})," and ",n.jsx(e.code,{children:"secret"})," 信息"]}),`
`]})]})}function Ym(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(fy,{...t})}):fy(t)}Ym.displayName="MDXContent";const t2=Object.freeze(Object.defineProperty({__proto__:null,default:Ym,filepath:Yk,frontmatter:e2,title:Zk},Symbol.toStringTag,{value:"Module"})),n2="packages/f2elint/CHANGELOG.md",r2="更新日志",o2=void 0;function sy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h2,{children:"4.1.0 - 2024-02-07"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["导出 ",n.jsx(e.code,{children:"TemplateType"})]}),`
`]}),`
`,n.jsx(e.h2,{children:"4.0.0 - 2024-02-07"}),`
`,n.jsx(e.p,{children:"升级方法："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx f2elint
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"破坏性变更:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"移除了内置的的 lint 命令，直接采用 eslint，style 和 prettier 命令行工具"}),`
`,n.jsx(e.li,{children:"Node.js API 仅保留了 init 接口，scan 和 fix 接口被移除"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"一般变更:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"配置统一放在 package.json，减少配置文件数量"}),`
`,n.jsxs(e.li,{children:["升级 ",n.jsx(e.code,{children:"stylelint"})," 14 到 16"]}),`
`,n.jsxs(e.li,{children:["升级 ",n.jsx(e.code,{children:"@commitlint/cli"})," 16 到 18"]}),`
`,n.jsxs(e.li,{children:["移除 ",n.jsx(e.code,{children:"package.json"})," 中的 ",n.jsx(e.code,{children:"engines"})," 字段，不再人为限制 Node.js 版本"]}),`
`]}),`
`,n.jsx(e.h2,{children:"3.0.0 (2022-03-16)"}),`
`,n.jsx(e.p,{children:"依赖升级："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["增加依赖 ",n.jsx(e.code,{children:"eslint-import-resolver-typescript"})]}),`
`,n.jsxs(e.li,{children:["升级依赖 ",n.jsx(e.code,{children:"eslint"})," 7 -> 8，参见 ",n.jsx(e.a,{href:"https://github.com/eslint/eslint/blob/main/CHANGELOG.md",children:"ESLint 变更日志"})]}),`
`,n.jsxs(e.li,{children:["升级依赖 ",n.jsx(e.code,{children:"eslint-config-ali"})," 13 -> 14"]}),`
`,n.jsxs(e.li,{children:["升级依赖 ",n.jsx(e.code,{children:"eslint-config-prettier"})," 7 -> 8"]}),`
`,n.jsxs(e.li,{children:["升级依赖 ",n.jsx(e.code,{children:"eslint-plugin-prettier"})," 3 -> 4"]}),`
`,n.jsxs(e.li,{children:["升级依赖 ",n.jsx(e.code,{children:"stylelint"})," 13 到 14"]}),`
`,n.jsxs(e.li,{children:["升级依赖 ",n.jsx(e.code,{children:"stylelint-scss"})," 3 到 4"]}),`
`,n.jsxs(e.li,{children:["升级依赖 ",n.jsx(e.code,{children:"@commitlint/cli"})," 11 -> 16"]}),`
`]}),`
`,n.jsx(e.p,{children:"其他："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["Node.js API 变更：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"scan 支持 config 参数，优先级高于 f2elint.config.js"}),`
`,n.jsx(e.li,{children:"config 增加 enableESLint 参数，以支持开关 eslint 扫描"}),`
`,n.jsx(e.li,{children:"config 增加 eslintOptions、stylelintOptions 和 markdownlintOptions"}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["去掉 ",n.jsx(e.code,{children:".eslintrc"})," 中已废弃的 ",n.jsx(e.code,{children:"prettier/react"}),", ",n.jsx(e.code,{children:"prettier/typescript"})," 和 ",n.jsx(e.code,{children:"prettier/vue"})]}),`
`,n.jsxs(e.li,{children:["增加初始化时移除的冲突依赖",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"@ali/kyle"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"@ali/eslint-config-ot-browser"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"@iceworks/spec"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"husky"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"prettier"})}),`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:"tslint"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:["增加初始化时移除的无用配置",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.code,{children:".kylerc"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"tslint.json"}),", ",n.jsx(e.code,{children:"tslint.yaml"})]}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"docs: 文档中增加 TS 项目性能问题的解决方法"}),`
`]}),`
`,n.jsx(e.h2,{children:"2.2.1 (2022-02-28)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 prettier 和 eslint 顺序执行问题，避免互相覆盖"}),`
`]}),`
`,n.jsx(e.h2,{children:"2.2.0 (2022-01-06)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["运行 ",n.jsx(e.code,{children:"f2elint-fix"})," 时提前执行 Prettier 格式化，避免 Prettier 已修复的问题出现在 ESLint/Stylelint 结果中"]}),`
`,n.jsx(e.li,{children:"修复 Prettier 命令运行失败的问题（Command failed with ENOENT 被 catch 了没有输出）改用 Node API 模式"}),`
`]}),`
`,n.jsx(e.h2,{children:"2.1.0 (2021-12-17)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["增加 ",n.jsx(e.code,{children:"build-scripts"})," 产物路径到 ",n.jsx(e.code,{children:".eslintignore"})," (",n.jsx(e.code,{children:"coverage/"}),", ",n.jsx(e.code,{children:"es/"}),", ",n.jsx(e.code,{children:"lib/"}),")"]}),`
`]}),`
`,n.jsx(e.h2,{children:"2.0.2 (2021-12-15)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["升级 ",n.jsx(e.code,{children:"eslint-config-egg"})," 到 10.x"]}),`
`]}),`
`,n.jsx(e.h2,{children:"2.0.1 (2021-12-07)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["修复 ",n.jsx(e.code,{children:"commitlint"})," 硬编码路径的问题"]}),`
`]}),`
`,n.jsx(e.h2,{children:"2.0.0 (2021-12-01)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"babel-eslint"})," 替换为 ",n.jsx(e.code,{children:"@babel/eslint-parser"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@typescript-eslint/eslint-plugin"}),", ",n.jsx(e.code,{children:"@typescript-eslint/parser"})," 升级到 5.x，支持 ESlint 8"]}),`
`,n.jsx(e.li,{children:"VSCode 的 formatter 配置改为根据语言设置，防止被用户设置覆盖"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.2.3 (2021-11-16)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 scan 不显示 fatal error, close #48"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.2.2 (2021-11-10)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 markdownlint-config-ali 导入错误"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.2.1 (2021-09-15)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"统一项目文件命名规范"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.2.0 (2021-03-13)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"feat: init 增加 disableNpmInstall 参数，以支持禁用自动在初始化完成后安装依赖"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.1.2 (2021-03-13)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"fix: 修复 init 生成 stylelintignore 和 markdownlintignore 文件的空格问题"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.1.1 (2021-02-24)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"升级 eslint-config-ali 版本至 v12"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.1.0 (2021-02-18)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"default exports 改为 named exports，方便在 commonjs 环境下引用"}),`
`,n.jsx(e.li,{children:"fix test case"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.3 (2021-02-04)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"f2elint init"})," 不再向 package.json 写入 devDependencies.eslint-config-prettier"]}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.2 (2021-02-04)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 husky 依赖缺失"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.0 (2021-02-03)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["增加对 Prettier 的集成，",n.jsx(e.code,{children:"f2elint init"})," 时用户可选择使用 Prettier 格式化代码"]}),`
`,n.jsxs(e.li,{children:["新增 ",n.jsx(e.code,{children:"f2elint commit-file-scan"})," 和 ",n.jsx(e.code,{children:"f2elint commit-msg-scan"})," 两个命令供 husky 调用，移除了 lint-staged 依赖"]}),`
`]}),`
`,n.jsx(e.h3,{children:"优化"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"使用 TypeScript 重构了代码"}),`
`,n.jsx(e.li,{children:"所有依赖升级到最新"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.4.4 (2020-12-09)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["f2elint：修复找不到 ",n.jsx(e.code,{children:"markdownlint"})," 的拓展文件（",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/issues/3",children:"#3"}),"）"]}),`
`]}),`
`,n.jsx(e.h2,{children:"0.4.3 (2020-12-03)"}),`
`,n.jsx(e.h3,{children:"优化"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["修改 ",n.jsx(e.code,{children:"package.json"})," 和 README"]}),`
`]}),`
`,n.jsx(e.h2,{children:"0.4.2 (2020-11-24)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["init 写入的 prettier 配置增加 ",n.jsx(e.code,{children:"arrowParens: 'always'"})]}),`
`]}),`
`,n.jsx(e.h3,{children:"文档"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修改 Readme 中对 commit 卡口的说明"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.4.1 (2020-11-19)"}),`
`,n.jsx(e.h3,{children:"文档"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Readme 中增加文档规约"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.4.0 (2020-11-19)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["增加对文档规约的 lint 支持：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"init 新增 markdownlint 选项"}),`
`,n.jsxs(e.li,{children:["scan 和 fix 增加对 ",n.jsx(e.code,{children:".md"})," 文件的扫描"]}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"init 新增「Node.js 项目」的选项"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.3.0 (2020-11-05)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"init 增加 rax 选项"}),`
`,n.jsxs(e.li,{children:["init 增加对 ",n.jsx(e.code,{children:".vscode/extensions.json"})," 的写入"]}),`
`,n.jsx(e.li,{children:"scan 和 fix command 支持 --no-ignore 选项，忽略 .eslintignore 配置"}),`
`,n.jsx(e.li,{children:"apiInit 支持 cwd 选项"}),`
`]}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["init 写入的 ",n.jsx(e.code,{children:".vscode/settings.json"})," 中增加保存自动格式化的配置，并增加 prettier 作为 defaultFormatter"]}),`
`,n.jsx(e.li,{children:"scan 根据项目内有无 eslint 和 stylelint 配置文件判断使用项目的配置文件还是 f2elint 默认配置进行扫描。若使用项目的，在未安装依赖时会帮其安装（执行 npm i）。若使用项目配置扫描失败，则使用默认配置扫描"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.5 (2020-10-23)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"0.1.x 版本的 @typescript-eslint 依赖回退到 3.x"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.2.0 (2020-10-22)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"升级依赖：eslint-config-ali 版本 v10 升到 v11"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.4 (2020-10-13)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"fix 命令去掉 quiet 参数"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.3 (2020-10-13)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"支持在任意项目运行 fix 命令"}),`
`,n.jsx(e.li,{children:"scan 命令输出可 auto fix 的条数"}),`
`]}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["兼容在 ",n.jsx(e.code,{children:"package.json"})," 配置 eslintConfig 和 stylelint 的非 f2elint 项目运行 scan 和 fix 命令"]}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.2 (2020-10-10)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"scan 和 fix 命令增加对 .vue 文件处理"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.1 (2020-09-25)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 devDependencies 中的 f2elint 版本"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.0 (2020-09-25)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["从 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/xima",children:"xima"})," v0.3.0 版本迁移"]}),`
`]})]})}function Zm(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(sy,{...t})}):sy(t)}Zm.displayName="MDXContent";const l2=Object.freeze(Object.defineProperty({__proto__:null,default:Zm,filepath:n2,frontmatter:o2,title:r2},Symbol.toStringTag,{value:"Module"})),i2="packages/f2elint/README.md",a2="f2elint",c2=void 0;function uy(t){const e={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"f2elint"}),`
`,n.jsx(e.p,{children:"f2elint 是《阿里巴巴前端规约》的配套初始化工具，可以为各种前端和 Node.js 项目一键接入规约，保障项目的编码规范和代码质量。"}),`
`,n.jsx(e.h2,{children:"CLI"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx f2elint
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://github.com/alibaba/f2e-spec/assets/5836790/80b5c4fd-6ab1-4423-8ae5-0572777db0a7",alt:"screenshot"})}),`
`,n.jsx(e.h2,{children:"API"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install --save f2elint
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import { f2elint, TemplateType } from 'f2elint';

await f2elint('path/to/project/root', {
  template: TemplateType.ReactTS,
  stylelint: true,
  prettier: true,
  lintStaged: true,
  commitlint: false,
})
`})})]})}function eg(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(uy,{...t})}):uy(t)}eg.displayName="MDXContent";const f2=Object.freeze(Object.defineProperty({__proto__:null,default:eg,filepath:i2,frontmatter:c2,title:a2},Symbol.toStringTag,{value:"Module"})),s2="packages/markdownlint-config-ali/CHANGELOG.md",u2="更新日志",p2=void 0;function py(t){const e={h1:"h1",h2:"h2",h3:"h3",li:"li",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h2,{children:"0.1.1 (2020-12-03)"}),`
`,n.jsx(e.h3,{children:"优化"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修改 package.json 和 README"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.1.0 (2020-11-18)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"根据文档规约新增 markdownlint 配置文件"}),`
`]})]})}function tg(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(py,{...t})}):py(t)}tg.displayName="MDXContent";const d2=Object.freeze(Object.defineProperty({__proto__:null,default:tg,filepath:s2,frontmatter:p2,title:u2},Symbol.toStringTag,{value:"Module"})),y2="packages/markdownlint-config-ali/README.md",O2="markdownlint-config-ali",h2=void 0;function dy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"markdownlint-config-ali"}),`
`,n.jsxs(e.p,{children:["本包提供了《阿里巴巴前端规约 - 文档规约》配套的 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/markdownlint#optionsconfig",children:"markdownlint 可共享配置"}),"。"]}),`
`,n.jsx(e.h2,{children:"安装"}),`
`,n.jsxs(e.p,{children:["除了本包，你需要同时安装 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/markdownlint",children:"markdownlint"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install markdownlint-config-ali markdownlint --save-dev
`})}),`
`,n.jsx(e.h2,{children:"使用"}),`
`,n.jsxs(e.p,{children:["在 ",n.jsx(e.code,{children:".markdownlint.json"})," 中继承本包:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": "markdownlint-config-ali"
}
`})})]})}function ng(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(dy,{...t})}):dy(t)}ng.displayName="MDXContent";const b2=Object.freeze(Object.defineProperty({__proto__:null,default:ng,filepath:y2,frontmatter:h2,title:O2},Symbol.toStringTag,{value:"Module"})),m2="packages/prettier-config-ali/CHANGELOG.md",g2="更新日志",j2=void 0;function yy(t){const e={code:"code",h1:"h1",h2:"h2",li:"li",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h2,{children:"1.1.0 - 2024-01-23"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["移除 ",n.jsx(e.code,{children:"prettier-plugin-packagejson"})," (在 ",n.jsx(e.code,{children:"type: module"})," 项目中报错)"]}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.0 (2023-12-18)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"初始版本"}),`
`]})]})}function rg(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(yy,{...t})}):yy(t)}rg.displayName="MDXContent";const x2=Object.freeze(Object.defineProperty({__proto__:null,default:rg,filepath:m2,frontmatter:j2,title:g2},Symbol.toStringTag,{value:"Module"})),v2="packages/prettier-config-ali/README.md",w2="prettier-config-ali",P2=void 0;function Oy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"prettier-config-ali"}),`
`,n.jsxs(e.p,{children:["本包提供了《阿里巴巴前端规约》配套的 ",n.jsx(e.a,{href:"https://prettier.io/docs/en/configuration.html#sharing-configurations",children:"Prettier 可共享配置"}),"，对代码进行自动格式化。Prettier 是可选的。"]}),`
`,n.jsx(e.h2,{children:"使用 f2elint 安装"}),`
`,n.jsx(e.p,{children:"建议您使用 f2elint 工具对项目进行初始化，并选择启用 Prettier，这是最简单的方法。"}),`
`,n.jsx(e.h2,{children:"手动安装和配置"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install --save-dev prettier prettier-config-ali
`})}),`
`,n.jsxs(e.p,{children:["然后在 ",n.jsx(e.code,{children:"package.json"})," 中增加："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "prettier": "prettier-config-ali"
}
`})}),`
`,n.jsxs(e.p,{children:["更多信息可参考 ",n.jsx(e.a,{href:"https://prettier.io/docs/en/options",children:"Prettier 文档"}),"。"]})]})}function og(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Oy,{...t})}):Oy(t)}og.displayName="MDXContent";const S2=Object.freeze(Object.defineProperty({__proto__:null,default:og,filepath:v2,frontmatter:P2,title:w2},Symbol.toStringTag,{value:"Module"})),_2="packages/stylelint-config-ali/CHANGELOG.md",E2="更新日志",I2=void 0;function hy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志"}),`
`,n.jsx(e.h2,{children:"2.1.1 - 2024-02-07"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"更新依赖，解决版本冲突"}),`
`]}),`
`,n.jsx(e.h2,{children:"2.1.0 (2023-12-18)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"将 postcss 从 peerDependencies 改为 dependencies"}),`
`]}),`
`,n.jsx(e.h2,{children:"2.0.0 (2023-12-15)"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"破坏性变更："})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"更新 stylelint 15.x 到 16.x"}),`
`,n.jsx(e.li,{children:"更新 stylelint-scss 5.x 到 6.x"}),`
`,n.jsx(e.li,{children:"更新 stylelint-less 2.x 到 3.x"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.1.0 (2023-10-11)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"移除废弃的 stylelint 规则"}),`
`]}),`
`,n.jsx(e.h2,{children:"1.0.0 (2023-09-13)"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"更新 stylelint 14.x 到 15.x"}),`
`,n.jsx(e.li,{children:"更新 stylelint-scss 2.x 到 5.x"}),`
`,n.jsx(e.li,{children:"增加 stylelint-less 初步支持"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.4.2 (2021-09-22)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"color-hex-length 改为 warning 级别"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.4.1 (2020-12-03)"}),`
`,n.jsx(e.h3,{children:"优化"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修改 package.json 和 README"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.4.0 (2020-11-10)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"关闭规则：no-empty-source、block-no-empty"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.3.4 (2020-09-29)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["修复在开启 length-zero-no-unit 规则的情况下，使用自定义变量无法赋值 ",n.jsx(e.code,{children:"0px"})," 等带单位 0 值的问题（添加了 ",n.jsx(e.code,{children:'ignore: ["custom-properties"]'}),"）"]}),`
`]}),`
`,n.jsx(e.h2,{children:"0.3.3 (2020-09-10)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复在开启 font-family-no-missing-generic-family-keyword 规则的情况下使用 iconfont 的时候会报错的问题，暂时将该规则移除"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.3.2 (2020-05-18)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 vscode 插件打开 jsx 报错的问题（通过设置 ignoreFiles）"}),`
`,n.jsxs(e.li,{children:["增加对小程序的支持：",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"unit-no-unknown 忽略 rpx"}),`
`,n.jsxs(e.li,{children:["selector-type-no-unknown 忽略",n.jsx(e.a,{href:"https://opendocs.alipay.com/mini/component/overview-info",children:"小程序的选择器"})]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"0.3.1 (2020-02-03)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"value-list-comma-space-after 规则由 always 调整为 always-single-line"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.3.0 (2020-01-09)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"更新 peerDependencies 依赖版本"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.2.6 (2019-10-17)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"selector-pseudo-class-no-unknown ignorePseudoClasses 增加 export"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.2.5 (2019-08-30)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"selector-pseudo-class-no-unknown ignorePseudoClasses 增加 local"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.2.4 (2019-07-16)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 scss/operator-no-unspaced 规则导致 less 变量报错的问题，暂时将其注释"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.2.3 (2019-07-03)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 selector-pseudo-class-no-unknown 规则的参数错误"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.2.2 (2019-06-28)"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"修复 selector-pseudo-class-no-unknown 规则 less :global 报错的问题"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.2.1 (2019-06-28)"}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"block-no-empty、keyframe-declaration-no-important 2 条规则不作为必修问题(essential)"}),`
`]}),`
`,n.jsx(e.h2,{children:"0.2.0 (2019-04-25)"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["peerDependencies 新增 stylelint-scss 依赖",`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"用 scss/at-rule-no-unknown 规则代替 at-rule-no-unknown"}),`
`,n.jsx(e.li,{children:"开启 scss/operator-no-unspaced、scss/double-slash-comment-whitespace-inside 2 条规则"}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:"新增 15 条 CSS 规约「推荐」级别的规则"}),`
`,n.jsxs(e.li,{children:["新增 ",n.jsx(e.code,{children:"stylelint-config-ali/essential"})," 出口，此出口未开启 CSS 规约「推荐」级别的规则，仅开启「强制」级别及 stylelint possible-errors 类名下的规则"]}),`
`,n.jsx(e.li,{children:"增加测试"}),`
`]}),`
`,n.jsx(e.h3,{children:"变更"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"peerDependencies 的 stylelint 依赖增加 stylelint@10"}),`
`,n.jsx(e.li,{children:"关闭 no-descending-specificity 规则"}),`
`]}),`
`,n.jsx(e.h1,{children:"0.1.1 - 2018-12-16"}),`
`,n.jsx(e.h3,{children:"修复"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["修复 ",n.jsx(e.code,{children:"color-hex-length"}),"、",n.jsx(e.code,{children:"declaration-block-trailing-semicolon"})," 两条规则配置错误"]}),`
`]}),`
`,n.jsx(e.h1,{children:"0.1.0 - 2018-12-16"}),`
`,n.jsx(e.h3,{children:"新增"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"开启 stylelint possible-errors 类目下的规则及 CSS 规约中「强制」级别的规则"}),`
`]})]})}function lg(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(hy,{...t})}):hy(t)}lg.displayName="MDXContent";const k2=Object.freeze(Object.defineProperty({__proto__:null,default:lg,filepath:_2,frontmatter:I2,title:E2},Symbol.toStringTag,{value:"Module"})),N2="packages/stylelint-config-ali/README.md",C2="stylelint-config-ali",T2=void 0;function by(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"stylelint-config-ali"}),`
`,n.jsxs(e.p,{children:["本包提供了《阿里巴巴前端规约 - CSS 编码规约》配套的 ",n.jsx(e.a,{href:"https://stylelint.io/user-guide/configure",children:"stylelint 可共享配置"}),"。"]}),`
`,n.jsx(e.h2,{children:"安装"}),`
`,n.jsxs(e.p,{children:["除了本包，你需要同时安装 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/stylelint",children:"stylelint"})," 和 ",n.jsx(e.a,{href:"https://www.npmjs.com/package/stylelint-scss",children:"stylelint-scss"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install stylelint-config-ali stylelint stylelint-scss --save-dev
`})}),`
`,n.jsx(e.h2,{children:"使用"}),`
`,n.jsxs(e.p,{children:["在你的 ",n.jsx(e.code,{children:".stylelintrc"})," 中继承本包:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "extends": "stylelint-config-ali"
}
`})})]})}function ig(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(by,{...t})}):by(t)}ig.displayName="MDXContent";const A2=Object.freeze(Object.defineProperty({__proto__:null,default:ig,filepath:N2,frontmatter:T2,title:C2},Symbol.toStringTag,{value:"Module"})),R2="packages/eslint-plugin-ali/docs/rules/no-broad-semantic-versioning.md",L2="no-broad-semantic-versioning",D2=void 0;function my(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"no-broad-semantic-versioning"}),`
`,n.jsxs(e.p,{children:["不要在 ",n.jsx(e.code,{children:"package.json"})," 中使用太过宽泛的版本指定方式，包括 ",n.jsx(e.code,{children:"*"}),"、",n.jsx(e.code,{children:"x"})," 和 ",n.jsx(e.code,{children:"> x"})," 。"]}),`
`,n.jsx(e.h2,{children:"规则内容"}),`
`,n.jsxs(e.p,{children:["参照 ",n.jsx(e.a,{href:"https://docs.npmjs.com/about-semantic-versioning",children:"https://docs.npmjs.com/about-semantic-versioning"}),"。"]}),`
`,n.jsxs(e.p,{children:["使用 ",n.jsx(e.code,{children:"*"}),"、 ",n.jsx(e.code,{children:"x"})," 和 ",n.jsx(e.code,{children:"> x"})," 指定版本会被警告。"]})]})}function ag(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(my,{...t})}):my(t)}ag.displayName="MDXContent";const F2=Object.freeze(Object.defineProperty({__proto__:null,default:ag,filepath:R2,frontmatter:D2,title:L2},Symbol.toStringTag,{value:"Module"})),M2="packages/eslint-plugin-ali/docs/rules/no-http-url.md",$2="no-http-url",B2=void 0;function gy(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"no-http-url"}),`
`,n.jsx(e.p,{children:"推荐将 HTTP 链接换为 HTTPS 链接。"}),`
`,n.jsx(e.h2,{children:"规则内容"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"错误代码"}),"示例:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var test = 'http://test.com';
var jsx = <img src="http://test.com">;
`})}),`
`,n.jsx(e.h2,{children:"何时不适用"}),`
`,n.jsx(e.p,{children:"如果你的网站只支持 HTTP 时。"})]})}function cg(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(gy,{...t})}):gy(t)}cg.displayName="MDXContent";const z2=Object.freeze(Object.defineProperty({__proto__:null,default:cg,filepath:M2,frontmatter:B2,title:$2},Symbol.toStringTag,{value:"Module"})),U2="packages/eslint-plugin-ali/docs/rules/no-js-in-ts-project.md",H2="no-js-in-ts-project",q2=void 0;function jy(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"no-js-in-ts-project"}),`
`,n.jsxs(e.p,{children:["不推荐在项目中同时存在 ",n.jsx(e.code,{children:"JS"})," 和 ",n.jsx(e.code,{children:"TS"})," 文件。"]}),`
`,n.jsx(e.h2,{children:"规则内容"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"错误示例"}),"，TS 项目中包含 JS 文件:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Bash",children:`.
├── index.ts
├── home.js
└── tsconfig.json
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"正确示例"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-Bash",children:`.
├── index.ts
├── home.ts
└── tsconfig.json
`})}),`
`,n.jsx(e.h2,{children:"规则选项"}),`
`,n.jsxs(e.p,{children:["默认当存在 ",n.jsx(e.code,{children:"commitlint.config.js"}),", ",n.jsx(e.code,{children:"eslintrc.js"}),", ",n.jsx(e.code,{children:"prettierrc.js"}),", ",n.jsx(e.code,{children:"stylelintrc.js"})," 文件时不会报错，支持自定义设置文件白名单："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"ali/no-secret-info": [<enabled>, {
  'whiteList': [<string>],
  // 是否 merge 默认文件配置，默认为 true
  'autoMerge': <boolean>
}]
`})})]})}function fg(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(jy,{...t})}):jy(t)}fg.displayName="MDXContent";const W2=Object.freeze(Object.defineProperty({__proto__:null,default:fg,filepath:U2,frontmatter:q2,title:H2},Symbol.toStringTag,{value:"Module"})),V2="packages/eslint-plugin-ali/docs/rules/no-secret-info.md",G2="no-secret-info",X2=void 0;function xy(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...te(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"no-secret-info"}),`
`,n.jsxs(e.p,{children:["不在代码中直接通过纯文本值设置 ",n.jsx(e.code,{children:"password"})," ",n.jsx(e.code,{children:"token"})," 和 ",n.jsx(e.code,{children:"secret"})," 信息。"]}),`
`,n.jsx(e.h2,{children:"规则内容"}),`
`,n.jsxs(e.p,{children:["在包含 ",n.jsx(e.code,{children:"password"})," ",n.jsx(e.code,{children:"token"})," and ",n.jsx(e.code,{children:"secret"})," 名称的 key 中禁止使用纯文本值。"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"错误"}),"代码示例:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var accessKeySecret = 'xxxx';

var client = {
  accessKeyToken: 'xxxx',
};
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"正确"}),"代码示例:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var accessKeySecret = process.env.ACCESS_KEY_SECRET;

var client = {
  accessKeyToken: process.env.ACCESS_KEY_SECRET,
};
`})}),`
`,n.jsx(e.h2,{children:"规则选项"}),`
`,n.jsxs(e.p,{children:["默认会检查名称包含 ",n.jsx(e.code,{children:"password"}),"，",n.jsx(e.code,{children:"token"}),"，",n.jsx(e.code,{children:"secret"})," 字段 key 的值，支持自定义设置字段名称："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"ali/no-secret-info": [<enabled>, {
  'dangerousKeys': [<string>],
  // 是否 merge 默认配置，默认为 true
  'autoMerge': <boolean>
}]
`})})]})}function sg(t={}){const{wrapper:e}={...te(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(xy,{...t})}):xy(t)}sg.displayName="MDXContent";const J2=Object.freeze(Object.defineProperty({__proto__:null,default:sg,filepath:V2,frontmatter:X2,title:G2},Symbol.toStringTag,{value:"Module"}));function K2(){return n.jsx(kI,{docs:[AI,FI,zI,WI,JI,ZI,rk,ak,uk,Ok,gk,wk,Ek,Ck,Lk,$k,Hk,Gk,Qk,t2,l2,f2,d2,b2,x2,S2,k2,A2,F2,z2,W2,J2],basename:"/f2e-spec/",languages:void 0})}Dh(document.getElementById("root")).render(n.jsx(K2,{}));
