function ug(t,e){for(var r=0;r<e.length;r++){const o=e[r];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in t)){const a=Object.getOwnPropertyDescriptor(o,l);a&&Object.defineProperty(t,l,a.get?a:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(l){if(l.ep)return;l.ep=!0;const a=r(l);fetch(l.href,a)}})();var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Oy={exports:{}},ua={},by={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pl=Symbol.for("react.element"),pg=Symbol.for("react.portal"),yg=Symbol.for("react.fragment"),hg=Symbol.for("react.strict_mode"),Og=Symbol.for("react.profiler"),bg=Symbol.for("react.provider"),mg=Symbol.for("react.context"),gg=Symbol.for("react.forward_ref"),jg=Symbol.for("react.suspense"),xg=Symbol.for("react.memo"),vg=Symbol.for("react.lazy"),Bd=Symbol.iterator;function wg(t){return t===null||typeof t!="object"?null:(t=Bd&&t[Bd]||t["@@iterator"],typeof t=="function"?t:null)}var my={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gy=Object.assign,jy={};function po(t,e,r){this.props=t,this.context=e,this.refs=jy,this.updater=r||my}po.prototype.isReactComponent={};po.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};po.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xy(){}xy.prototype=po.prototype;function hf(t,e,r){this.props=t,this.context=e,this.refs=jy,this.updater=r||my}var Of=hf.prototype=new xy;Of.constructor=hf;gy(Of,po.prototype);Of.isPureReactComponent=!0;var $d=Array.isArray,vy=Object.prototype.hasOwnProperty,bf={current:null},wy={key:!0,ref:!0,__self:!0,__source:!0};function Py(t,e,r){var o,l={},a=null,c=null;if(e!=null)for(o in e.ref!==void 0&&(c=e.ref),e.key!==void 0&&(a=""+e.key),e)vy.call(e,o)&&!wy.hasOwnProperty(o)&&(l[o]=e[o]);var s=arguments.length-2;if(s===1)l.children=r;else if(1<s){for(var d=Array(s),u=0;u<s;u++)d[u]=arguments[u+2];l.children=d}if(t&&t.defaultProps)for(o in s=t.defaultProps,s)l[o]===void 0&&(l[o]=s[o]);return{$$typeof:Pl,type:t,key:a,ref:c,props:l,_owner:bf.current}}function Pg(t,e){return{$$typeof:Pl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pl}function Sg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var zd=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sg(""+t.key):e.toString(36)}function ai(t,e,r,o,l){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var c=!1;if(t===null)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case Pl:case pg:c=!0}}if(c)return c=t,l=l(c),t=o===""?"."+vc(c,0):o,$d(l)?(r="",t!=null&&(r=t.replace(zd,"$&/")+"/"),ai(l,e,r,"",function(u){return u})):l!=null&&(mf(l)&&(l=Pg(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(zd,"$&/")+"/")+t)),e.push(l)),1;if(c=0,o=o===""?".":o+":",$d(t))for(var s=0;s<t.length;s++){a=t[s];var d=o+vc(a,s);c+=ai(a,e,r,d,l)}else if(d=wg(t),typeof d=="function")for(t=d.call(t),s=0;!(a=t.next()).done;)a=a.value,d=o+vc(a,s++),c+=ai(a,e,r,d,l);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return c}function Ml(t,e,r){if(t==null)return t;var o=[],l=0;return ai(t,o,"","",function(a){return e.call(r,a,l++)}),o}function _g(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var bn={current:null},ci={transition:null},Eg={ReactCurrentDispatcher:bn,ReactCurrentBatchConfig:ci,ReactCurrentOwner:bf};ge.Children={map:Ml,forEach:function(t,e,r){Ml(t,function(){e.apply(this,arguments)},r)},count:function(t){var e=0;return Ml(t,function(){e++}),e},toArray:function(t){return Ml(t,function(e){return e})||[]},only:function(t){if(!mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ge.Component=po;ge.Fragment=yg;ge.Profiler=Og;ge.PureComponent=hf;ge.StrictMode=hg;ge.Suspense=jg;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;ge.cloneElement=function(t,e,r){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=gy({},t.props),l=t.key,a=t.ref,c=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,c=bf.current),e.key!==void 0&&(l=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(d in e)vy.call(e,d)&&!wy.hasOwnProperty(d)&&(o[d]=e[d]===void 0&&s!==void 0?s[d]:e[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){s=Array(d);for(var u=0;u<d;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:Pl,type:t.type,key:l,ref:a,props:o,_owner:c}};ge.createContext=function(t){return t={$$typeof:mg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bg,_context:t},t.Consumer=t};ge.createElement=Py;ge.createFactory=function(t){var e=Py.bind(null,t);return e.type=t,e};ge.createRef=function(){return{current:null}};ge.forwardRef=function(t){return{$$typeof:gg,render:t}};ge.isValidElement=mf;ge.lazy=function(t){return{$$typeof:vg,_payload:{_status:-1,_result:t},_init:_g}};ge.memo=function(t,e){return{$$typeof:xg,type:t,compare:e===void 0?null:e}};ge.startTransition=function(t){var e=ci.transition;ci.transition={};try{t()}finally{ci.transition=e}};ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ge.useCallback=function(t,e){return bn.current.useCallback(t,e)};ge.useContext=function(t){return bn.current.useContext(t)};ge.useDebugValue=function(){};ge.useDeferredValue=function(t){return bn.current.useDeferredValue(t)};ge.useEffect=function(t,e){return bn.current.useEffect(t,e)};ge.useId=function(){return bn.current.useId()};ge.useImperativeHandle=function(t,e,r){return bn.current.useImperativeHandle(t,e,r)};ge.useInsertionEffect=function(t,e){return bn.current.useInsertionEffect(t,e)};ge.useLayoutEffect=function(t,e){return bn.current.useLayoutEffect(t,e)};ge.useMemo=function(t,e){return bn.current.useMemo(t,e)};ge.useReducer=function(t,e,r){return bn.current.useReducer(t,e,r)};ge.useRef=function(t){return bn.current.useRef(t)};ge.useState=function(t){return bn.current.useState(t)};ge.useSyncExternalStore=function(t,e,r){return bn.current.useSyncExternalStore(t,e,r)};ge.useTransition=function(){return bn.current.useTransition()};ge.version="18.2.0";by.exports=ge;var U=by.exports;const Xt=hy(U),Ig=ug({__proto__:null,default:Xt},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg=U,Ng=Symbol.for("react.element"),Cg=Symbol.for("react.fragment"),Tg=Object.prototype.hasOwnProperty,Ag=kg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rg={key:!0,ref:!0,__self:!0,__source:!0};function Sy(t,e,r){var o,l={},a=null,c=null;r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(o in e)Tg.call(e,o)&&!Rg.hasOwnProperty(o)&&(l[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps,e)l[o]===void 0&&(l[o]=e[o]);return{$$typeof:Ng,type:t,key:a,ref:c,props:l,_owner:Ag.current}}ua.Fragment=Cg;ua.jsx=Sy;ua.jsxs=Sy;Oy.exports=ua;var n=Oy.exports,_y={exports:{}},Rn={},Ey={exports:{}},Iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Z){var Y=z.length;z.push(Z);e:for(;0<Y;){var se=Y-1>>>1,Oe=z[se];if(0<l(Oe,Z))z[se]=Z,z[Y]=Oe,Y=se;else break e}}function r(z){return z.length===0?null:z[0]}function o(z){if(z.length===0)return null;var Z=z[0],Y=z.pop();if(Y!==Z){z[0]=Y;e:for(var se=0,Oe=z.length,Re=Oe>>>1;se<Re;){var Le=2*(se+1)-1,F=z[Le],$=Le+1,V=z[$];if(0>l(F,Y))$<Oe&&0>l(V,F)?(z[se]=V,z[$]=Y,se=$):(z[se]=F,z[Le]=Y,se=Le);else if($<Oe&&0>l(V,Y))z[se]=V,z[$]=Y,se=$;else break e}}return Z}function l(z,Z){var Y=z.sortIndex-Z.sortIndex;return Y!==0?Y:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var c=Date,s=c.now();t.unstable_now=function(){return c.now()-s}}var d=[],u=[],h=1,p=null,y=3,S=!1,g=!1,x=!1,P=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(z){for(var Z=r(u);Z!==null;){if(Z.callback===null)o(u);else if(Z.startTime<=z)o(u),Z.sortIndex=Z.expirationTime,e(d,Z);else break;Z=r(u)}}function v(z){if(x=!1,b(z),!g)if(r(d)!==null)g=!0,Pe(E);else{var Z=r(u);Z!==null&&_e(v,Z.startTime-z)}}function E(z,Z){g=!1,x&&(x=!1,m(N),N=-1),S=!0;var Y=y;try{for(b(Z),p=r(d);p!==null&&(!(p.expirationTime>Z)||z&&!W());){var se=p.callback;if(typeof se=="function"){p.callback=null,y=p.priorityLevel;var Oe=se(p.expirationTime<=Z);Z=t.unstable_now(),typeof Oe=="function"?p.callback=Oe:p===r(d)&&o(d),b(Z)}else o(d);p=r(d)}if(p!==null)var Re=!0;else{var Le=r(u);Le!==null&&_e(v,Le.startTime-Z),Re=!1}return Re}finally{p=null,y=Y,S=!1}}var k=!1,_=null,N=-1,D=5,A=-1;function W(){return!(t.unstable_now()-A<D)}function J(){if(_!==null){var z=t.unstable_now();A=z;var Z=!0;try{Z=_(!0,z)}finally{Z?ae():(k=!1,_=null)}}else k=!1}var ae;if(typeof O=="function")ae=function(){O(J)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,xe=ie.port2;ie.port1.onmessage=J,ae=function(){xe.postMessage(null)}}else ae=function(){P(J,0)};function Pe(z){_=z,k||(k=!0,ae())}function _e(z,Z){N=P(function(){z(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){g||S||(g=!0,Pe(E))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return r(d)},t.unstable_next=function(z){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var Y=y;y=Z;try{return z()}finally{y=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=y;y=z;try{return Z()}finally{y=Y}},t.unstable_scheduleCallback=function(z,Z,Y){var se=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?se+Y:se):Y=se,z){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=Y+Oe,z={id:h++,callback:Z,priorityLevel:z,startTime:Y,expirationTime:Oe,sortIndex:-1},Y>se?(z.sortIndex=Y,e(u,z),r(d)===null&&z===r(u)&&(x?(m(N),N=-1):x=!0,_e(v,Y-se))):(z.sortIndex=Oe,e(d,z),g||S||(g=!0,Pe(E))),z},t.unstable_shouldYield=W,t.unstable_wrapCallback=function(z){var Z=y;return function(){var Y=y;y=Z;try{return z.apply(this,arguments)}finally{y=Y}}}})(Iy);Ey.exports=Iy;var Lg=Ey.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ky=U,Tn=Lg;function G(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ny=new Set,Qo={};function wr(t,e){ro(t,e),ro(t+"Capture",e)}function ro(t,e){for(Qo[t]=e,t=0;t<e.length;t++)Ny.add(e[t])}var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ts=Object.prototype.hasOwnProperty,Fg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ud={},Hd={};function Mg(t){return ts.call(Hd,t)?!0:ts.call(Ud,t)?!1:Fg.test(t)?Hd[t]=!0:(Ud[t]=!0,!1)}function Dg(t,e,r,o){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Bg(t,e,r,o){if(e===null||typeof e>"u"||Dg(t,e,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,r,o,l,a,c){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=o,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=c}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var gf=/[\-:]([a-z])/g;function jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gf,jf);an[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gf,jf);an[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gf,jf);an[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function xf(t,e,r,o){var l=an.hasOwnProperty(e)?an[e]:null;(l!==null?l.type!==0:o||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Bg(e,r,l,o)&&(r=null),o||l===null?Mg(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):l.mustUseProperty?t[l.propertyName]=r===null?l.type===3?!1:"":r:(e=l.attributeName,o=l.attributeNamespace,r===null?t.removeAttribute(e):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,o?t.setAttributeNS(o,e,r):t.setAttribute(e,r))))}var _t=ky.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dl=Symbol.for("react.element"),Br=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),vf=Symbol.for("react.strict_mode"),rs=Symbol.for("react.profiler"),Cy=Symbol.for("react.provider"),Ty=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),os=Symbol.for("react.suspense"),ls=Symbol.for("react.suspense_list"),Pf=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),Ay=Symbol.for("react.offscreen"),qd=Symbol.iterator;function vo(t){return t===null||typeof t!="object"?null:(t=qd&&t[qd]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,wc;function Ro(t){if(wc===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);wc=e&&e[1]||""}return`
`+wc+t}var Pc=!1;function Sc(t,e){if(!t||Pc)return"";Pc=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var o=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){o=u}t.call(e.prototype)}else{try{throw Error()}catch(u){o=u}t()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var l=u.stack.split(`
`),a=o.stack.split(`
`),c=l.length-1,s=a.length-1;1<=c&&0<=s&&l[c]!==a[s];)s--;for(;1<=c&&0<=s;c--,s--)if(l[c]!==a[s]){if(c!==1||s!==1)do if(c--,s--,0>s||l[c]!==a[s]){var d=`
`+l[c].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=c&&0<=s);break}}}finally{Pc=!1,Error.prepareStackTrace=r}return(t=t?t.displayName||t.name:"")?Ro(t):""}function $g(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function is(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Br:return"Portal";case rs:return"Profiler";case vf:return"StrictMode";case os:return"Suspense";case ls:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ty:return(t.displayName||"Context")+".Consumer";case Cy:return(t._context.displayName||"Context")+".Provider";case wf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pf:return e=t.displayName||null,e!==null?e:is(t.type)||"Memo";case kt:e=t._payload,t=t._init;try{return is(t(e))}catch{}}return null}function zg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(e);case 8:return e===vf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ry(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ug(t){var e=Ry(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),o=""+t[e];if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(c){o=""+c,a.call(this,c)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(c){o=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Bl(t){t._valueTracker||(t._valueTracker=Ug(t))}function Ly(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var r=e.getValue(),o="";return t&&(o=Ry(t)?t.checked?"true":"false":t.value),t=o,t!==r?(e.setValue(t),!0):!1}function Pi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function as(t,e){var r=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Wd(t,e){var r=e.defaultValue==null?"":e.defaultValue,o=e.checked!=null?e.checked:e.defaultChecked;r=Kt(e.value!=null?e.value:r),t._wrapperState={initialChecked:o,initialValue:r,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fy(t,e){e=e.checked,e!=null&&xf(t,"checked",e,!1)}function cs(t,e){Fy(t,e);var r=Kt(e.value),o=e.type;if(r!=null)o==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=""+r):t.value!==""+r&&(t.value=""+r);else if(o==="submit"||o==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ss(t,e.type,r):e.hasOwnProperty("defaultValue")&&ss(t,e.type,Kt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vd(t,e,r){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var o=e.type;if(!(o!=="submit"&&o!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==""&&(t.name=r)}function ss(t,e,r){(e!=="number"||Pi(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Lo=Array.isArray;function Qr(t,e,r,o){if(t=t.options,e){e={};for(var l=0;l<r.length;l++)e["$"+r[l]]=!0;for(r=0;r<t.length;r++)l=e.hasOwnProperty("$"+t[r].value),t[r].selected!==l&&(t[r].selected=l),l&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Kt(r),e=null,l=0;l<t.length;l++){if(t[l].value===r){t[l].selected=!0,o&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function fs(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(G(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Gd(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){if(e!=null)throw Error(G(92));if(Lo(r)){if(1<r.length)throw Error(G(93));r=r[0]}e=r}e==null&&(e=""),r=e}t._wrapperState={initialValue:Kt(r)}}function My(t,e){var r=Kt(e.value),o=Kt(e.defaultValue);r!=null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),o!=null&&(t.defaultValue=""+o)}function Jd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ds(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $l,By=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,r,o,l){MSApp.execUnsafeLocalFunction(function(){return t(e,r,o,l)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($l=$l||document.createElement("div"),$l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yo(t,e){if(e){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hg=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(t){Hg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bo[e]=Bo[t]})});function $y(t,e,r){return e==null||typeof e=="boolean"||e===""?"":r||typeof e!="number"||e===0||Bo.hasOwnProperty(t)&&Bo[t]?(""+e).trim():e+"px"}function zy(t,e){t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var o=r.indexOf("--")===0,l=$y(r,e[r],o);r==="float"&&(r="cssFloat"),o?t.setProperty(r,l):t[r]=l}}var qg=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function us(t,e){if(e){if(qg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(G(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(G(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(G(61))}if(e.style!=null&&typeof e.style!="object")throw Error(G(62))}}function ps(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ys=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hs=null,Yr=null,Zr=null;function Xd(t){if(t=El(t)){if(typeof hs!="function")throw Error(G(280));var e=t.stateNode;e&&(e=ba(e),hs(t.stateNode,t.type,e))}}function Uy(t){Yr?Zr?Zr.push(t):Zr=[t]:Yr=t}function Hy(){if(Yr){var t=Yr,e=Zr;if(Zr=Yr=null,Xd(t),e)for(t=0;t<e.length;t++)Xd(e[t])}}function qy(t,e){return t(e)}function Wy(){}var _c=!1;function Vy(t,e,r){if(_c)return t(e,r);_c=!0;try{return qy(t,e,r)}finally{_c=!1,(Yr!==null||Zr!==null)&&(Wy(),Hy())}}function Zo(t,e){var r=t.stateNode;if(r===null)return null;var o=ba(r);if(o===null)return null;r=o[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(G(231,e,typeof r));return r}var Os=!1;if(xt)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){Os=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{Os=!1}function Wg(t,e,r,o,l,a,c,s,d){var u=Array.prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(h){this.onError(h)}}var $o=!1,Si=null,_i=!1,bs=null,Vg={onError:function(t){$o=!0,Si=t}};function Gg(t,e,r,o,l,a,c,s,d){$o=!1,Si=null,Wg.apply(Vg,arguments)}function Jg(t,e,r,o,l,a,c,s,d){if(Gg.apply(this,arguments),$o){if($o){var u=Si;$o=!1,Si=null}else throw Error(G(198));_i||(_i=!0,bs=u)}}function Pr(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function Gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kd(t){if(Pr(t)!==t)throw Error(G(188))}function Xg(t){var e=t.alternate;if(!e){if(e=Pr(t),e===null)throw Error(G(188));return e!==t?null:t}for(var r=t,o=e;;){var l=r.return;if(l===null)break;var a=l.alternate;if(a===null){if(o=l.return,o!==null){r=o;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===r)return Kd(l),t;if(a===o)return Kd(l),e;a=a.sibling}throw Error(G(188))}if(r.return!==o.return)r=l,o=a;else{for(var c=!1,s=l.child;s;){if(s===r){c=!0,r=l,o=a;break}if(s===o){c=!0,o=l,r=a;break}s=s.sibling}if(!c){for(s=a.child;s;){if(s===r){c=!0,r=a,o=l;break}if(s===o){c=!0,o=a,r=l;break}s=s.sibling}if(!c)throw Error(G(189))}}if(r.alternate!==o)throw Error(G(190))}if(r.tag!==3)throw Error(G(188));return r.stateNode.current===r?t:e}function Jy(t){return t=Xg(t),t!==null?Xy(t):null}function Xy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Xy(t);if(e!==null)return e;t=t.sibling}return null}var Ky=Tn.unstable_scheduleCallback,Qd=Tn.unstable_cancelCallback,Kg=Tn.unstable_shouldYield,Qg=Tn.unstable_requestPaint,Ge=Tn.unstable_now,Yg=Tn.unstable_getCurrentPriorityLevel,_f=Tn.unstable_ImmediatePriority,Qy=Tn.unstable_UserBlockingPriority,Ei=Tn.unstable_NormalPriority,Zg=Tn.unstable_LowPriority,Yy=Tn.unstable_IdlePriority,pa=null,ct=null;function ej(t){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(pa,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:rj,nj=Math.log,tj=Math.LN2;function rj(t){return t>>>=0,t===0?32:31-(nj(t)/tj|0)|0}var zl=64,Ul=4194304;function Fo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ii(t,e){var r=t.pendingLanes;if(r===0)return 0;var o=0,l=t.suspendedLanes,a=t.pingedLanes,c=r&268435455;if(c!==0){var s=c&~l;s!==0?o=Fo(s):(a&=c,a!==0&&(o=Fo(a)))}else c=r&~l,c!==0?o=Fo(c):a!==0&&(o=Fo(a));if(o===0)return 0;if(e!==0&&e!==o&&!(e&l)&&(l=o&-o,a=e&-e,l>=a||l===16&&(a&4194240)!==0))return e;if(o&4&&(o|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=o;0<e;)r=31-Xn(e),l=1<<r,o|=t[r],e&=~l;return o}function oj(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lj(t,e){for(var r=t.suspendedLanes,o=t.pingedLanes,l=t.expirationTimes,a=t.pendingLanes;0<a;){var c=31-Xn(a),s=1<<c,d=l[c];d===-1?(!(s&r)||s&o)&&(l[c]=oj(s,e)):d<=e&&(t.expiredLanes|=s),a&=~s}}function ms(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zy(){var t=zl;return zl<<=1,!(zl&4194240)&&(zl=64),t}function Ec(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}function Sl(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=r}function ij(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var o=t.eventTimes;for(t=t.expirationTimes;0<r;){var l=31-Xn(r),a=1<<l;e[l]=0,o[l]=-1,t[l]=-1,r&=~a}}function Ef(t,e){var r=t.entangledLanes|=e;for(t=t.entanglements;r;){var o=31-Xn(r),l=1<<o;l&e|t[o]&e&&(t[o]|=e),r&=~l}}var Ie=0;function eh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nh,If,th,rh,oh,gs=!1,Hl=[],Mt=null,Dt=null,Bt=null,el=new Map,nl=new Map,Ct=[],aj="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yd(t,e){switch(t){case"focusin":case"focusout":Mt=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":el.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":nl.delete(e.pointerId)}}function Po(t,e,r,o,l,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[l]},e!==null&&(e=El(e),e!==null&&If(e)),t):(t.eventSystemFlags|=o,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function cj(t,e,r,o,l){switch(e){case"focusin":return Mt=Po(Mt,t,e,r,o,l),!0;case"dragenter":return Dt=Po(Dt,t,e,r,o,l),!0;case"mouseover":return Bt=Po(Bt,t,e,r,o,l),!0;case"pointerover":var a=l.pointerId;return el.set(a,Po(el.get(a)||null,t,e,r,o,l)),!0;case"gotpointercapture":return a=l.pointerId,nl.set(a,Po(nl.get(a)||null,t,e,r,o,l)),!0}return!1}function lh(t){var e=sr(t.target);if(e!==null){var r=Pr(e);if(r!==null){if(e=r.tag,e===13){if(e=Gy(r),e!==null){t.blockedOn=e,oh(t.priority,function(){th(r)});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function si(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var r=js(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);ys=o,r.target.dispatchEvent(o),ys=null}else return e=El(r),e!==null&&If(e),t.blockedOn=r,!1;e.shift()}return!0}function Zd(t,e,r){si(t)&&r.delete(e)}function sj(){gs=!1,Mt!==null&&si(Mt)&&(Mt=null),Dt!==null&&si(Dt)&&(Dt=null),Bt!==null&&si(Bt)&&(Bt=null),el.forEach(Zd),nl.forEach(Zd)}function So(t,e){t.blockedOn===e&&(t.blockedOn=null,gs||(gs=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,sj)))}function tl(t){function e(l){return So(l,t)}if(0<Hl.length){So(Hl[0],t);for(var r=1;r<Hl.length;r++){var o=Hl[r];o.blockedOn===t&&(o.blockedOn=null)}}for(Mt!==null&&So(Mt,t),Dt!==null&&So(Dt,t),Bt!==null&&So(Bt,t),el.forEach(e),nl.forEach(e),r=0;r<Ct.length;r++)o=Ct[r],o.blockedOn===t&&(o.blockedOn=null);for(;0<Ct.length&&(r=Ct[0],r.blockedOn===null);)lh(r),r.blockedOn===null&&Ct.shift()}var eo=_t.ReactCurrentBatchConfig,ki=!0;function fj(t,e,r,o){var l=Ie,a=eo.transition;eo.transition=null;try{Ie=1,kf(t,e,r,o)}finally{Ie=l,eo.transition=a}}function dj(t,e,r,o){var l=Ie,a=eo.transition;eo.transition=null;try{Ie=4,kf(t,e,r,o)}finally{Ie=l,eo.transition=a}}function kf(t,e,r,o){if(ki){var l=js(t,e,r,o);if(l===null)Mc(t,e,o,Ni,r),Yd(t,o);else if(cj(l,t,e,r,o))o.stopPropagation();else if(Yd(t,o),e&4&&-1<aj.indexOf(t)){for(;l!==null;){var a=El(l);if(a!==null&&nh(a),a=js(t,e,r,o),a===null&&Mc(t,e,o,Ni,r),a===l)break;l=a}l!==null&&o.stopPropagation()}else Mc(t,e,o,null,r)}}var Ni=null;function js(t,e,r,o){if(Ni=null,t=Sf(o),t=sr(t),t!==null)if(e=Pr(t),e===null)t=null;else if(r=e.tag,r===13){if(t=Gy(e),t!==null)return t;t=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ni=t,null}function ih(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yg()){case _f:return 1;case Qy:return 4;case Ei:case Zg:return 16;case Yy:return 536870912;default:return 16}default:return 16}}var At=null,Nf=null,fi=null;function ah(){if(fi)return fi;var t,e=Nf,r=e.length,o,l="value"in At?At.value:At.textContent,a=l.length;for(t=0;t<r&&e[t]===l[t];t++);var c=r-t;for(o=1;o<=c&&e[r-o]===l[a-o];o++);return fi=l.slice(t,1<o?1-o:void 0)}function di(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function eu(){return!1}function Ln(t){function e(r,o,l,a,c){this._reactName=r,this._targetInst=l,this.type=o,this.nativeEvent=a,this.target=c,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ql:eu,this.isPropagationStopped=eu,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cf=Ln(yo),_l=Ue({},yo,{view:0,detail:0}),uj=Ln(_l),Ic,kc,_o,ya=Ue({},_l,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(Ic=t.screenX-_o.screenX,kc=t.screenY-_o.screenY):kc=Ic=0,_o=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),nu=Ln(ya),pj=Ue({},ya,{dataTransfer:0}),yj=Ln(pj),hj=Ue({},_l,{relatedTarget:0}),Nc=Ln(hj),Oj=Ue({},yo,{animationName:0,elapsedTime:0,pseudoElement:0}),bj=Ln(Oj),mj=Ue({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gj=Ln(mj),jj=Ue({},yo,{data:0}),tu=Ln(jj),xj={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vj={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wj={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pj(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wj[t])?!!e[t]:!1}function Tf(){return Pj}var Sj=Ue({},_l,{key:function(t){if(t.key){var e=xj[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=di(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vj[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tf,charCode:function(t){return t.type==="keypress"?di(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?di(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_j=Ln(Sj),Ej=Ue({},ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ru=Ln(Ej),Ij=Ue({},_l,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tf}),kj=Ln(Ij),Nj=Ue({},yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cj=Ln(Nj),Tj=Ue({},ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Aj=Ln(Tj),Rj=[9,13,27,32],Af=xt&&"CompositionEvent"in window,zo=null;xt&&"documentMode"in document&&(zo=document.documentMode);var Lj=xt&&"TextEvent"in window&&!zo,ch=xt&&(!Af||zo&&8<zo&&11>=zo),ou=" ",lu=!1;function sh(t,e){switch(t){case"keyup":return Rj.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function Fj(t,e){switch(t){case"compositionend":return fh(e);case"keypress":return e.which!==32?null:(lu=!0,ou);case"textInput":return t=e.data,t===ou&&lu?null:t;default:return null}}function Mj(t,e){if(zr)return t==="compositionend"||!Af&&sh(t,e)?(t=ah(),fi=Nf=At=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ch&&e.locale!=="ko"?null:e.data;default:return null}}var Dj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function iu(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Dj[t.type]:e==="textarea"}function dh(t,e,r,o){Uy(o),e=Ci(e,"onChange"),0<e.length&&(r=new Cf("onChange","change",null,r,o),t.push({event:r,listeners:e}))}var Uo=null,rl=null;function Bj(t){vh(t,0)}function ha(t){var e=qr(t);if(Ly(e))return t}function $j(t,e){if(t==="change")return e}var uh=!1;if(xt){var Cc;if(xt){var Tc="oninput"in document;if(!Tc){var au=document.createElement("div");au.setAttribute("oninput","return;"),Tc=typeof au.oninput=="function"}Cc=Tc}else Cc=!1;uh=Cc&&(!document.documentMode||9<document.documentMode)}function cu(){Uo&&(Uo.detachEvent("onpropertychange",ph),rl=Uo=null)}function ph(t){if(t.propertyName==="value"&&ha(rl)){var e=[];dh(e,rl,t,Sf(t)),Vy(Bj,e)}}function zj(t,e,r){t==="focusin"?(cu(),Uo=e,rl=r,Uo.attachEvent("onpropertychange",ph)):t==="focusout"&&cu()}function Uj(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ha(rl)}function Hj(t,e){if(t==="click")return ha(e)}function qj(t,e){if(t==="input"||t==="change")return ha(e)}function Wj(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Wj;function ol(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),o=Object.keys(e);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var l=r[o];if(!ts.call(e,l)||!Yn(t[l],e[l]))return!1}return!0}function su(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fu(t,e){var r=su(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=e&&o>=e)return{node:r,offset:e-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=su(r)}}function yh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hh(){for(var t=window,e=Pi();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=Pi(t.document)}return e}function Rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Vj(t){var e=hh(),r=t.focusedElem,o=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&yh(r.ownerDocument.documentElement,r)){if(o!==null&&Rf(r)){if(e=o.start,t=o.end,t===void 0&&(t=e),"selectionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var l=r.textContent.length,a=Math.min(o.start,l);o=o.end===void 0?a:Math.min(o.end,l),!t.extend&&a>o&&(l=o,o=a,a=l),l=fu(r,a);var c=fu(r,o);l&&c&&(t.rangeCount!==1||t.anchorNode!==l.node||t.anchorOffset!==l.offset||t.focusNode!==c.node||t.focusOffset!==c.offset)&&(e=e.createRange(),e.setStart(l.node,l.offset),t.removeAllRanges(),a>o?(t.addRange(e),t.extend(c.node,c.offset)):(e.setEnd(c.node,c.offset),t.addRange(e)))}}for(e=[],t=r;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Gj=xt&&"documentMode"in document&&11>=document.documentMode,Ur=null,xs=null,Ho=null,vs=!1;function du(t,e,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;vs||Ur==null||Ur!==Pi(o)||(o=Ur,"selectionStart"in o&&Rf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ho&&ol(Ho,o)||(Ho=o,o=Ci(xs,"onSelect"),0<o.length&&(e=new Cf("onSelect","select",null,e,r),t.push({event:e,listeners:o}),e.target=Ur)))}function Wl(t,e){var r={};return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Hr={animationend:Wl("Animation","AnimationEnd"),animationiteration:Wl("Animation","AnimationIteration"),animationstart:Wl("Animation","AnimationStart"),transitionend:Wl("Transition","TransitionEnd")},Ac={},Oh={};xt&&(Oh=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Oa(t){if(Ac[t])return Ac[t];if(!Hr[t])return t;var e=Hr[t],r;for(r in e)if(e.hasOwnProperty(r)&&r in Oh)return Ac[t]=e[r];return t}var bh=Oa("animationend"),mh=Oa("animationiteration"),gh=Oa("animationstart"),jh=Oa("transitionend"),xh=new Map,uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(t,e){xh.set(t,e),wr(e,[t])}for(var Rc=0;Rc<uu.length;Rc++){var Lc=uu[Rc],Jj=Lc.toLowerCase(),Xj=Lc[0].toUpperCase()+Lc.slice(1);Yt(Jj,"on"+Xj)}Yt(bh,"onAnimationEnd");Yt(mh,"onAnimationIteration");Yt(gh,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(jh,"onTransitionEnd");ro("onMouseEnter",["mouseout","mouseover"]);ro("onMouseLeave",["mouseout","mouseover"]);ro("onPointerEnter",["pointerout","pointerover"]);ro("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kj=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function pu(t,e,r){var o=t.type||"unknown-event";t.currentTarget=r,Jg(o,e,void 0,t),t.currentTarget=null}function vh(t,e){e=(e&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],l=o.event;o=o.listeners;e:{var a=void 0;if(e)for(var c=o.length-1;0<=c;c--){var s=o[c],d=s.instance,u=s.currentTarget;if(s=s.listener,d!==a&&l.isPropagationStopped())break e;pu(l,s,u),a=d}else for(c=0;c<o.length;c++){if(s=o[c],d=s.instance,u=s.currentTarget,s=s.listener,d!==a&&l.isPropagationStopped())break e;pu(l,s,u),a=d}}}if(_i)throw t=bs,_i=!1,bs=null,t}function Te(t,e){var r=e[Es];r===void 0&&(r=e[Es]=new Set);var o=t+"__bubble";r.has(o)||(wh(e,t,2,!1),r.add(o))}function Fc(t,e,r){var o=0;e&&(o|=4),wh(r,t,o,e)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function ll(t){if(!t[Vl]){t[Vl]=!0,Ny.forEach(function(r){r!=="selectionchange"&&(Kj.has(r)||Fc(r,!1,t),Fc(r,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Vl]||(e[Vl]=!0,Fc("selectionchange",!1,e))}}function wh(t,e,r,o){switch(ih(e)){case 1:var l=fj;break;case 4:l=dj;break;default:l=kf}r=l.bind(null,e,r,t),l=void 0,!Os||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),o?l!==void 0?t.addEventListener(e,r,{capture:!0,passive:l}):t.addEventListener(e,r,!0):l!==void 0?t.addEventListener(e,r,{passive:l}):t.addEventListener(e,r,!1)}function Mc(t,e,r,o,l){var a=o;if(!(e&1)&&!(e&2)&&o!==null)e:for(;;){if(o===null)return;var c=o.tag;if(c===3||c===4){var s=o.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(c===4)for(c=o.return;c!==null;){var d=c.tag;if((d===3||d===4)&&(d=c.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;c=c.return}for(;s!==null;){if(c=sr(s),c===null)return;if(d=c.tag,d===5||d===6){o=a=c;continue e}s=s.parentNode}}o=o.return}Vy(function(){var u=a,h=Sf(r),p=[];e:{var y=xh.get(t);if(y!==void 0){var S=Cf,g=t;switch(t){case"keypress":if(di(r)===0)break e;case"keydown":case"keyup":S=_j;break;case"focusin":g="focus",S=Nc;break;case"focusout":g="blur",S=Nc;break;case"beforeblur":case"afterblur":S=Nc;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=yj;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=kj;break;case bh:case mh:case gh:S=bj;break;case jh:S=Cj;break;case"scroll":S=uj;break;case"wheel":S=Aj;break;case"copy":case"cut":case"paste":S=gj;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ru}var x=(e&4)!==0,P=!x&&t==="scroll",m=x?y!==null?y+"Capture":null:y;x=[];for(var O=u,b;O!==null;){b=O;var v=b.stateNode;if(b.tag===5&&v!==null&&(b=v,m!==null&&(v=Zo(O,m),v!=null&&x.push(il(O,v,b)))),P)break;O=O.return}0<x.length&&(y=new S(y,g,null,r,h),p.push({event:y,listeners:x}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",y&&r!==ys&&(g=r.relatedTarget||r.fromElement)&&(sr(g)||g[vt]))break e;if((S||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,S?(g=r.relatedTarget||r.toElement,S=u,g=g?sr(g):null,g!==null&&(P=Pr(g),g!==P||g.tag!==5&&g.tag!==6)&&(g=null)):(S=null,g=u),S!==g)){if(x=nu,v="onMouseLeave",m="onMouseEnter",O="mouse",(t==="pointerout"||t==="pointerover")&&(x=ru,v="onPointerLeave",m="onPointerEnter",O="pointer"),P=S==null?y:qr(S),b=g==null?y:qr(g),y=new x(v,O+"leave",S,r,h),y.target=P,y.relatedTarget=b,v=null,sr(h)===u&&(x=new x(m,O+"enter",g,r,h),x.target=b,x.relatedTarget=P,v=x),P=v,S&&g)n:{for(x=S,m=g,O=0,b=x;b;b=Ar(b))O++;for(b=0,v=m;v;v=Ar(v))b++;for(;0<O-b;)x=Ar(x),O--;for(;0<b-O;)m=Ar(m),b--;for(;O--;){if(x===m||m!==null&&x===m.alternate)break n;x=Ar(x),m=Ar(m)}x=null}else x=null;S!==null&&yu(p,y,S,x,!1),g!==null&&P!==null&&yu(p,P,g,x,!0)}}e:{if(y=u?qr(u):window,S=y.nodeName&&y.nodeName.toLowerCase(),S==="select"||S==="input"&&y.type==="file")var E=$j;else if(iu(y))if(uh)E=qj;else{E=Uj;var k=zj}else(S=y.nodeName)&&S.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(E=Hj);if(E&&(E=E(t,u))){dh(p,E,r,h);break e}k&&k(t,y,u),t==="focusout"&&(k=y._wrapperState)&&k.controlled&&y.type==="number"&&ss(y,"number",y.value)}switch(k=u?qr(u):window,t){case"focusin":(iu(k)||k.contentEditable==="true")&&(Ur=k,xs=u,Ho=null);break;case"focusout":Ho=xs=Ur=null;break;case"mousedown":vs=!0;break;case"contextmenu":case"mouseup":case"dragend":vs=!1,du(p,r,h);break;case"selectionchange":if(Gj)break;case"keydown":case"keyup":du(p,r,h)}var _;if(Af)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else zr?sh(t,r)&&(N="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(ch&&r.locale!=="ko"&&(zr||N!=="onCompositionStart"?N==="onCompositionEnd"&&zr&&(_=ah()):(At=h,Nf="value"in At?At.value:At.textContent,zr=!0)),k=Ci(u,N),0<k.length&&(N=new tu(N,t,null,r,h),p.push({event:N,listeners:k}),_?N.data=_:(_=fh(r),_!==null&&(N.data=_)))),(_=Lj?Fj(t,r):Mj(t,r))&&(u=Ci(u,"onBeforeInput"),0<u.length&&(h=new tu("onBeforeInput","beforeinput",null,r,h),p.push({event:h,listeners:u}),h.data=_))}vh(p,e)})}function il(t,e,r){return{instance:t,listener:e,currentTarget:r}}function Ci(t,e){for(var r=e+"Capture",o=[];t!==null;){var l=t,a=l.stateNode;l.tag===5&&a!==null&&(l=a,a=Zo(t,r),a!=null&&o.unshift(il(t,a,l)),a=Zo(t,e),a!=null&&o.push(il(t,a,l))),t=t.return}return o}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yu(t,e,r,o,l){for(var a=e._reactName,c=[];r!==null&&r!==o;){var s=r,d=s.alternate,u=s.stateNode;if(d!==null&&d===o)break;s.tag===5&&u!==null&&(s=u,l?(d=Zo(r,a),d!=null&&c.unshift(il(r,d,s))):l||(d=Zo(r,a),d!=null&&c.push(il(r,d,s)))),r=r.return}c.length!==0&&t.push({event:e,listeners:c})}var Qj=/\r\n?/g,Yj=/\u0000|\uFFFD/g;function hu(t){return(typeof t=="string"?t:""+t).replace(Qj,`
`).replace(Yj,"")}function Gl(t,e,r){if(e=hu(e),hu(t)!==e&&r)throw Error(G(425))}function Ti(){}var ws=null,Ps=null;function Ss(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _s=typeof setTimeout=="function"?setTimeout:void 0,Zj=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,ex=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(t){return Ou.resolve(null).then(t).catch(nx)}:_s;function nx(t){setTimeout(function(){throw t})}function Dc(t,e){var r=e,o=0;do{var l=r.nextSibling;if(t.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(o===0){t.removeChild(l),tl(e);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=l}while(r);tl(e)}function $t(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bu(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),ot="__reactFiber$"+ho,al="__reactProps$"+ho,vt="__reactContainer$"+ho,Es="__reactEvents$"+ho,tx="__reactListeners$"+ho,rx="__reactHandles$"+ho;function sr(t){var e=t[ot];if(e)return e;for(var r=t.parentNode;r;){if(e=r[vt]||r[ot]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(t=bu(t);t!==null;){if(r=t[ot])return r;t=bu(t)}return e}t=r,r=t.parentNode}return null}function El(t){return t=t[ot]||t[vt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(G(33))}function ba(t){return t[al]||null}var Is=[],Wr=-1;function Zt(t){return{current:t}}function Ae(t){0>Wr||(t.current=Is[Wr],Is[Wr]=null,Wr--)}function Ne(t,e){Wr++,Is[Wr]=t.current,t.current=e}var Qt={},un=Zt(Qt),vn=Zt(!1),hr=Qt;function oo(t,e){var r=t.type.contextTypes;if(!r)return Qt;var o=t.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===e)return o.__reactInternalMemoizedMaskedChildContext;var l={},a;for(a in r)l[a]=e[a];return o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=l),l}function wn(t){return t=t.childContextTypes,t!=null}function Ai(){Ae(vn),Ae(un)}function mu(t,e,r){if(un.current!==Qt)throw Error(G(168));Ne(un,e),Ne(vn,r)}function Ph(t,e,r){var o=t.stateNode;if(e=e.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var l in o)if(!(l in e))throw Error(G(108,zg(t)||"Unknown",l));return Ue({},r,o)}function Ri(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qt,hr=un.current,Ne(un,t),Ne(vn,vn.current),!0}function gu(t,e,r){var o=t.stateNode;if(!o)throw Error(G(169));r?(t=Ph(t,e,hr),o.__reactInternalMemoizedMergedChildContext=t,Ae(vn),Ae(un),Ne(un,t)):Ae(vn),Ne(vn,r)}var bt=null,ma=!1,Bc=!1;function Sh(t){bt===null?bt=[t]:bt.push(t)}function ox(t){ma=!0,Sh(t)}function er(){if(!Bc&&bt!==null){Bc=!0;var t=0,e=Ie;try{var r=bt;for(Ie=1;t<r.length;t++){var o=r[t];do o=o(!0);while(o!==null)}bt=null,ma=!1}catch(l){throw bt!==null&&(bt=bt.slice(t+1)),Ky(_f,er),l}finally{Ie=e,Bc=!1}}return null}var Vr=[],Gr=0,Li=null,Fi=0,Fn=[],Mn=0,Or=null,mt=1,gt="";function lr(t,e){Vr[Gr++]=Fi,Vr[Gr++]=Li,Li=t,Fi=e}function _h(t,e,r){Fn[Mn++]=mt,Fn[Mn++]=gt,Fn[Mn++]=Or,Or=t;var o=mt;t=gt;var l=32-Xn(o)-1;o&=~(1<<l),r+=1;var a=32-Xn(e)+l;if(30<a){var c=l-l%5;a=(o&(1<<c)-1).toString(32),o>>=c,l-=c,mt=1<<32-Xn(e)+l|r<<l|o,gt=a+t}else mt=1<<a|r<<l|o,gt=t}function Lf(t){t.return!==null&&(lr(t,1),_h(t,1,0))}function Ff(t){for(;t===Li;)Li=Vr[--Gr],Vr[Gr]=null,Fi=Vr[--Gr],Vr[Gr]=null;for(;t===Or;)Or=Fn[--Mn],Fn[Mn]=null,gt=Fn[--Mn],Fn[Mn]=null,mt=Fn[--Mn],Fn[Mn]=null}var Cn=null,kn=null,Fe=!1,Gn=null;function Eh(t,e){var r=Dn(5,null,null,0);r.elementType="DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function ju(t,e){switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,kn=$t(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,kn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(r=Or!==null?{id:mt,overflow:gt}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},r=Dn(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Cn=t,kn=null,!0):!1;default:return!1}}function ks(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ns(t){if(Fe){var e=kn;if(e){var r=e;if(!ju(t,e)){if(ks(t))throw Error(G(418));e=$t(r.nextSibling);var o=Cn;e&&ju(t,e)?Eh(o,r):(t.flags=t.flags&-4097|2,Fe=!1,Cn=t)}}else{if(ks(t))throw Error(G(418));t.flags=t.flags&-4097|2,Fe=!1,Cn=t}}}function xu(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Jl(t){if(t!==Cn)return!1;if(!Fe)return xu(t),Fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ss(t.type,t.memoizedProps)),e&&(e=kn)){if(ks(t))throw Ih(),Error(G(418));for(;e;)Eh(t,e),e=$t(e.nextSibling)}if(xu(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(G(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){kn=$t(t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}kn=null}}else kn=Cn?$t(t.stateNode.nextSibling):null;return!0}function Ih(){for(var t=kn;t;)t=$t(t.nextSibling)}function lo(){kn=Cn=null,Fe=!1}function Mf(t){Gn===null?Gn=[t]:Gn.push(t)}var lx=_t.ReactCurrentBatchConfig;function Wn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}return e}var Mi=Zt(null),Di=null,Jr=null,Df=null;function Bf(){Df=Jr=Di=null}function $f(t){var e=Mi.current;Ae(Mi),t._currentValue=e}function Cs(t,e,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,o!==null&&(o.childLanes|=e)):o!==null&&(o.childLanes&e)!==e&&(o.childLanes|=e),t===r)break;t=t.return}}function no(t,e){Di=t,Df=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(Df!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(Di===null)throw Error(G(308));Jr=t,Di.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var fr=null;function zf(t){fr===null?fr=[t]:fr.push(t)}function kh(t,e,r,o){var l=e.interleaved;return l===null?(r.next=r,zf(e)):(r.next=l.next,l.next=r),e.interleaved=r,wt(t,o)}function wt(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.tag===3?r.stateNode:null}var Nt=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zt(t,e,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,ve&2){var l=o.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),o.pending=e,wt(t,r)}return l=o.interleaved,l===null?(e.next=e,zf(o)):(e.next=l.next,l.next=e),o.interleaved=e,wt(t,r)}function ui(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Ef(t,r)}}function vu(t,e){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var l=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?l=a=c:a=a.next=c,r=r.next}while(r!==null);a===null?l=a=e:a=a.next=e}else l=a=e;r={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:o.shared,effects:o.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function Bi(t,e,r,o){var l=t.updateQueue;Nt=!1;var a=l.firstBaseUpdate,c=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var d=s,u=d.next;d.next=null,c===null?a=u:c.next=u,c=d;var h=t.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==c&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=d))}if(a!==null){var p=l.baseState;c=0,h=u=d=null,s=a;do{var y=s.lane,S=s.eventTime;if((o&y)===y){h!==null&&(h=h.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,x=s;switch(y=e,S=r,x.tag){case 1:if(g=x.payload,typeof g=="function"){p=g.call(S,p,y);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,y=typeof g=="function"?g.call(S,p,y):g,y==null)break e;p=Ue({},p,y);break e;case 2:Nt=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,y=l.effects,y===null?l.effects=[s]:y.push(s))}else S={eventTime:S,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=S,d=p):h=h.next=S,c|=y;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;y=s,s=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);if(h===null&&(d=p),l.baseState=d,l.firstBaseUpdate=u,l.lastBaseUpdate=h,e=l.shared.interleaved,e!==null){l=e;do c|=l.lane,l=l.next;while(l!==e)}else a===null&&(l.shared.lanes=0);mr|=c,t.lanes=c,t.memoizedState=p}}function wu(t,e,r){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var o=t[e],l=o.callback;if(l!==null){if(o.callback=null,o=r,typeof l!="function")throw Error(G(191,l));l.call(o)}}}var Ch=new ky.Component().refs;function Ts(t,e,r,o){e=t.memoizedState,r=r(o,e),r=r==null?e:Ue({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var ga={isMounted:function(t){return(t=t._reactInternals)?Pr(t)===t:!1},enqueueSetState:function(t,e,r){t=t._reactInternals;var o=hn(),l=Ht(t),a=jt(o,l);a.payload=e,r!=null&&(a.callback=r),e=zt(t,a,l),e!==null&&(Kn(e,t,l,o),ui(e,t,l))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var o=hn(),l=Ht(t),a=jt(o,l);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=zt(t,a,l),e!==null&&(Kn(e,t,l,o),ui(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=hn(),o=Ht(t),l=jt(r,o);l.tag=2,e!=null&&(l.callback=e),e=zt(t,l,o),e!==null&&(Kn(e,t,o,r),ui(e,t,o))}};function Pu(t,e,r,o,l,a,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,a,c):e.prototype&&e.prototype.isPureReactComponent?!ol(r,o)||!ol(l,a):!0}function Th(t,e,r){var o=!1,l=Qt,a=e.contextType;return typeof a=="object"&&a!==null?a=zn(a):(l=wn(e)?hr:un.current,o=e.contextTypes,a=(o=o!=null)?oo(t,l):Qt),e=new e(r,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ga,t.stateNode=e,e._reactInternals=t,o&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=a),e}function Su(t,e,r,o){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,o),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,o),e.state!==t&&ga.enqueueReplaceState(e,e.state,null)}function As(t,e,r,o){var l=t.stateNode;l.props=r,l.state=t.memoizedState,l.refs=Ch,Uf(t);var a=e.contextType;typeof a=="object"&&a!==null?l.context=zn(a):(a=wn(e)?hr:un.current,l.context=oo(t,a)),l.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Ts(t,e,a,r),l.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(e=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),e!==l.state&&ga.enqueueReplaceState(l,l.state,null),Bi(t,r,l,o),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308)}function Eo(t,e,r){if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(G(309));var o=r.stateNode}if(!o)throw Error(G(147,t));var l=o,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(c){var s=l.refs;s===Ch&&(s=l.refs={}),c===null?delete s[a]:s[a]=c},e._stringRef=a,e)}if(typeof t!="string")throw Error(G(284));if(!r._owner)throw Error(G(290,t))}return t}function Xl(t,e){throw t=Object.prototype.toString.call(e),Error(G(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _u(t){var e=t._init;return e(t._payload)}function Ah(t){function e(m,O){if(t){var b=m.deletions;b===null?(m.deletions=[O],m.flags|=16):b.push(O)}}function r(m,O){if(!t)return null;for(;O!==null;)e(m,O),O=O.sibling;return null}function o(m,O){for(m=new Map;O!==null;)O.key!==null?m.set(O.key,O):m.set(O.index,O),O=O.sibling;return m}function l(m,O){return m=qt(m,O),m.index=0,m.sibling=null,m}function a(m,O,b){return m.index=b,t?(b=m.alternate,b!==null?(b=b.index,b<O?(m.flags|=2,O):b):(m.flags|=2,O)):(m.flags|=1048576,O)}function c(m){return t&&m.alternate===null&&(m.flags|=2),m}function s(m,O,b,v){return O===null||O.tag!==6?(O=Vc(b,m.mode,v),O.return=m,O):(O=l(O,b),O.return=m,O)}function d(m,O,b,v){var E=b.type;return E===$r?h(m,O,b.props.children,v,b.key):O!==null&&(O.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kt&&_u(E)===O.type)?(v=l(O,b.props),v.ref=Eo(m,O,b),v.return=m,v):(v=mi(b.type,b.key,b.props,null,m.mode,v),v.ref=Eo(m,O,b),v.return=m,v)}function u(m,O,b,v){return O===null||O.tag!==4||O.stateNode.containerInfo!==b.containerInfo||O.stateNode.implementation!==b.implementation?(O=Gc(b,m.mode,v),O.return=m,O):(O=l(O,b.children||[]),O.return=m,O)}function h(m,O,b,v,E){return O===null||O.tag!==7?(O=yr(b,m.mode,v,E),O.return=m,O):(O=l(O,b),O.return=m,O)}function p(m,O,b){if(typeof O=="string"&&O!==""||typeof O=="number")return O=Vc(""+O,m.mode,b),O.return=m,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Dl:return b=mi(O.type,O.key,O.props,null,m.mode,b),b.ref=Eo(m,null,O),b.return=m,b;case Br:return O=Gc(O,m.mode,b),O.return=m,O;case kt:var v=O._init;return p(m,v(O._payload),b)}if(Lo(O)||vo(O))return O=yr(O,m.mode,b,null),O.return=m,O;Xl(m,O)}return null}function y(m,O,b,v){var E=O!==null?O.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return E!==null?null:s(m,O,""+b,v);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Dl:return b.key===E?d(m,O,b,v):null;case Br:return b.key===E?u(m,O,b,v):null;case kt:return E=b._init,y(m,O,E(b._payload),v)}if(Lo(b)||vo(b))return E!==null?null:h(m,O,b,v,null);Xl(m,b)}return null}function S(m,O,b,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(b)||null,s(O,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Dl:return m=m.get(v.key===null?b:v.key)||null,d(O,m,v,E);case Br:return m=m.get(v.key===null?b:v.key)||null,u(O,m,v,E);case kt:var k=v._init;return S(m,O,b,k(v._payload),E)}if(Lo(v)||vo(v))return m=m.get(b)||null,h(O,m,v,E,null);Xl(O,v)}return null}function g(m,O,b,v){for(var E=null,k=null,_=O,N=O=0,D=null;_!==null&&N<b.length;N++){_.index>N?(D=_,_=null):D=_.sibling;var A=y(m,_,b[N],v);if(A===null){_===null&&(_=D);break}t&&_&&A.alternate===null&&e(m,_),O=a(A,O,N),k===null?E=A:k.sibling=A,k=A,_=D}if(N===b.length)return r(m,_),Fe&&lr(m,N),E;if(_===null){for(;N<b.length;N++)_=p(m,b[N],v),_!==null&&(O=a(_,O,N),k===null?E=_:k.sibling=_,k=_);return Fe&&lr(m,N),E}for(_=o(m,_);N<b.length;N++)D=S(_,m,N,b[N],v),D!==null&&(t&&D.alternate!==null&&_.delete(D.key===null?N:D.key),O=a(D,O,N),k===null?E=D:k.sibling=D,k=D);return t&&_.forEach(function(W){return e(m,W)}),Fe&&lr(m,N),E}function x(m,O,b,v){var E=vo(b);if(typeof E!="function")throw Error(G(150));if(b=E.call(b),b==null)throw Error(G(151));for(var k=E=null,_=O,N=O=0,D=null,A=b.next();_!==null&&!A.done;N++,A=b.next()){_.index>N?(D=_,_=null):D=_.sibling;var W=y(m,_,A.value,v);if(W===null){_===null&&(_=D);break}t&&_&&W.alternate===null&&e(m,_),O=a(W,O,N),k===null?E=W:k.sibling=W,k=W,_=D}if(A.done)return r(m,_),Fe&&lr(m,N),E;if(_===null){for(;!A.done;N++,A=b.next())A=p(m,A.value,v),A!==null&&(O=a(A,O,N),k===null?E=A:k.sibling=A,k=A);return Fe&&lr(m,N),E}for(_=o(m,_);!A.done;N++,A=b.next())A=S(_,m,N,A.value,v),A!==null&&(t&&A.alternate!==null&&_.delete(A.key===null?N:A.key),O=a(A,O,N),k===null?E=A:k.sibling=A,k=A);return t&&_.forEach(function(J){return e(m,J)}),Fe&&lr(m,N),E}function P(m,O,b,v){if(typeof b=="object"&&b!==null&&b.type===$r&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Dl:e:{for(var E=b.key,k=O;k!==null;){if(k.key===E){if(E=b.type,E===$r){if(k.tag===7){r(m,k.sibling),O=l(k,b.props.children),O.return=m,m=O;break e}}else if(k.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===kt&&_u(E)===k.type){r(m,k.sibling),O=l(k,b.props),O.ref=Eo(m,k,b),O.return=m,m=O;break e}r(m,k);break}else e(m,k);k=k.sibling}b.type===$r?(O=yr(b.props.children,m.mode,v,b.key),O.return=m,m=O):(v=mi(b.type,b.key,b.props,null,m.mode,v),v.ref=Eo(m,O,b),v.return=m,m=v)}return c(m);case Br:e:{for(k=b.key;O!==null;){if(O.key===k)if(O.tag===4&&O.stateNode.containerInfo===b.containerInfo&&O.stateNode.implementation===b.implementation){r(m,O.sibling),O=l(O,b.children||[]),O.return=m,m=O;break e}else{r(m,O);break}else e(m,O);O=O.sibling}O=Gc(b,m.mode,v),O.return=m,m=O}return c(m);case kt:return k=b._init,P(m,O,k(b._payload),v)}if(Lo(b))return g(m,O,b,v);if(vo(b))return x(m,O,b,v);Xl(m,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,O!==null&&O.tag===6?(r(m,O.sibling),O=l(O,b),O.return=m,m=O):(r(m,O),O=Vc(b,m.mode,v),O.return=m,m=O),c(m)):r(m,O)}return P}var io=Ah(!0),Rh=Ah(!1),Il={},st=Zt(Il),cl=Zt(Il),sl=Zt(Il);function dr(t){if(t===Il)throw Error(G(174));return t}function Hf(t,e){switch(Ne(sl,e),Ne(cl,t),Ne(st,Il),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ds(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ds(e,t)}Ae(st),Ne(st,e)}function ao(){Ae(st),Ae(cl),Ae(sl)}function Lh(t){dr(sl.current);var e=dr(st.current),r=ds(e,t.type);e!==r&&(Ne(cl,t),Ne(st,r))}function qf(t){cl.current===t&&(Ae(st),Ae(cl))}var $e=Zt(0);function $i(t){for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $c=[];function Wf(){for(var t=0;t<$c.length;t++)$c[t]._workInProgressVersionPrimary=null;$c.length=0}var pi=_t.ReactCurrentDispatcher,zc=_t.ReactCurrentBatchConfig,br=0,ze=null,Ke=null,Ye=null,zi=!1,qo=!1,fl=0,ix=0;function sn(){throw Error(G(321))}function Vf(t,e){if(e===null)return!1;for(var r=0;r<e.length&&r<t.length;r++)if(!Yn(t[r],e[r]))return!1;return!0}function Gf(t,e,r,o,l,a){if(br=a,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pi.current=t===null||t.memoizedState===null?fx:dx,t=r(o,l),qo){a=0;do{if(qo=!1,fl=0,25<=a)throw Error(G(301));a+=1,Ye=Ke=null,e.updateQueue=null,pi.current=ux,t=r(o,l)}while(qo)}if(pi.current=Ui,e=Ke!==null&&Ke.next!==null,br=0,Ye=Ke=ze=null,zi=!1,e)throw Error(G(300));return t}function Jf(){var t=fl!==0;return fl=0,t}function rt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?ze.memoizedState=Ye=t:Ye=Ye.next=t,Ye}function Un(){if(Ke===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var e=Ye===null?ze.memoizedState:Ye.next;if(e!==null)Ye=e,Ke=t;else{if(t===null)throw Error(G(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Ye===null?ze.memoizedState=Ye=t:Ye=Ye.next=t}return Ye}function dl(t,e){return typeof e=="function"?e(t):e}function Uc(t){var e=Un(),r=e.queue;if(r===null)throw Error(G(311));r.lastRenderedReducer=t;var o=Ke,l=o.baseQueue,a=r.pending;if(a!==null){if(l!==null){var c=l.next;l.next=a.next,a.next=c}o.baseQueue=l=a,r.pending=null}if(l!==null){a=l.next,o=o.baseState;var s=c=null,d=null,u=a;do{var h=u.lane;if((br&h)===h)d!==null&&(d=d.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:t(o,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};d===null?(s=d=p,c=o):d=d.next=p,ze.lanes|=h,mr|=h}u=u.next}while(u!==null&&u!==a);d===null?c=o:d.next=s,Yn(o,e.memoizedState)||(xn=!0),e.memoizedState=o,e.baseState=c,e.baseQueue=d,r.lastRenderedState=o}if(t=r.interleaved,t!==null){l=t;do a=l.lane,ze.lanes|=a,mr|=a,l=l.next;while(l!==t)}else l===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Hc(t){var e=Un(),r=e.queue;if(r===null)throw Error(G(311));r.lastRenderedReducer=t;var o=r.dispatch,l=r.pending,a=e.memoizedState;if(l!==null){r.pending=null;var c=l=l.next;do a=t(a,c.action),c=c.next;while(c!==l);Yn(a,e.memoizedState)||(xn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,o]}function Fh(){}function Mh(t,e){var r=ze,o=Un(),l=e(),a=!Yn(o.memoizedState,l);if(a&&(o.memoizedState=l,xn=!0),o=o.queue,Xf($h.bind(null,r,o,t),[t]),o.getSnapshot!==e||a||Ye!==null&&Ye.memoizedState.tag&1){if(r.flags|=2048,ul(9,Bh.bind(null,r,o,l,e),void 0,null),Ze===null)throw Error(G(349));br&30||Dh(r,e,l)}return l}function Dh(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Bh(t,e,r,o){e.value=r,e.getSnapshot=o,zh(e)&&Uh(t)}function $h(t,e,r){return r(function(){zh(e)&&Uh(t)})}function zh(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!Yn(t,r)}catch{return!0}}function Uh(t){var e=wt(t,1);e!==null&&Kn(e,t,1,-1)}function Eu(t){var e=rt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dl,lastRenderedState:t},e.queue=t,t=t.dispatch=sx.bind(null,ze,t),[e.memoizedState,t]}function ul(t,e,r,o){return t={tag:t,create:e,destroy:r,deps:o,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,e.lastEffect=t)),t}function Hh(){return Un().memoizedState}function yi(t,e,r,o){var l=rt();ze.flags|=t,l.memoizedState=ul(1|e,r,void 0,o===void 0?null:o)}function ja(t,e,r,o){var l=Un();o=o===void 0?null:o;var a=void 0;if(Ke!==null){var c=Ke.memoizedState;if(a=c.destroy,o!==null&&Vf(o,c.deps)){l.memoizedState=ul(e,r,a,o);return}}ze.flags|=t,l.memoizedState=ul(1|e,r,a,o)}function Iu(t,e){return yi(8390656,8,t,e)}function Xf(t,e){return ja(2048,8,t,e)}function qh(t,e){return ja(4,2,t,e)}function Wh(t,e){return ja(4,4,t,e)}function Vh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gh(t,e,r){return r=r!=null?r.concat([t]):null,ja(4,4,Vh.bind(null,e,t),r)}function Kf(){}function Jh(t,e){var r=Un();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Vf(e,o[1])?o[0]:(r.memoizedState=[t,e],t)}function Xh(t,e){var r=Un();e=e===void 0?null:e;var o=r.memoizedState;return o!==null&&e!==null&&Vf(e,o[1])?o[0]:(t=t(),r.memoizedState=[t,e],t)}function Kh(t,e,r){return br&21?(Yn(r,e)||(r=Zy(),ze.lanes|=r,mr|=r,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=r)}function ax(t,e){var r=Ie;Ie=r!==0&&4>r?r:4,t(!0);var o=zc.transition;zc.transition={};try{t(!1),e()}finally{Ie=r,zc.transition=o}}function Qh(){return Un().memoizedState}function cx(t,e,r){var o=Ht(t);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Yh(t))Zh(e,r);else if(r=kh(t,e,r,o),r!==null){var l=hn();Kn(r,t,o,l),eO(r,e,o)}}function sx(t,e,r){var o=Ht(t),l={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Yh(t))Zh(e,l);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var c=e.lastRenderedState,s=a(c,r);if(l.hasEagerState=!0,l.eagerState=s,Yn(s,c)){var d=e.interleaved;d===null?(l.next=l,zf(e)):(l.next=d.next,d.next=l),e.interleaved=l;return}}catch{}finally{}r=kh(t,e,l,o),r!==null&&(l=hn(),Kn(r,t,o,l),eO(r,e,o))}}function Yh(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function Zh(t,e){qo=zi=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function eO(t,e,r){if(r&4194240){var o=e.lanes;o&=t.pendingLanes,r|=o,e.lanes=r,Ef(t,r)}}var Ui={readContext:zn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},fx={readContext:zn,useCallback:function(t,e){return rt().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:Iu,useImperativeHandle:function(t,e,r){return r=r!=null?r.concat([t]):null,yi(4194308,4,Vh.bind(null,e,t),r)},useLayoutEffect:function(t,e){return yi(4194308,4,t,e)},useInsertionEffect:function(t,e){return yi(4,2,t,e)},useMemo:function(t,e){var r=rt();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var o=rt();return e=r!==void 0?r(e):e,o.memoizedState=o.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},o.queue=t,t=t.dispatch=cx.bind(null,ze,t),[o.memoizedState,t]},useRef:function(t){var e=rt();return t={current:t},e.memoizedState=t},useState:Eu,useDebugValue:Kf,useDeferredValue:function(t){return rt().memoizedState=t},useTransition:function(){var t=Eu(!1),e=t[0];return t=ax.bind(null,t[1]),rt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){var o=ze,l=rt();if(Fe){if(r===void 0)throw Error(G(407));r=r()}else{if(r=e(),Ze===null)throw Error(G(349));br&30||Dh(o,e,r)}l.memoizedState=r;var a={value:r,getSnapshot:e};return l.queue=a,Iu($h.bind(null,o,a,t),[t]),o.flags|=2048,ul(9,Bh.bind(null,o,a,r,e),void 0,null),r},useId:function(){var t=rt(),e=Ze.identifierPrefix;if(Fe){var r=gt,o=mt;r=(o&~(1<<32-Xn(o)-1)).toString(32)+r,e=":"+e+"R"+r,r=fl++,0<r&&(e+="H"+r.toString(32)),e+=":"}else r=ix++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dx={readContext:zn,useCallback:Jh,useContext:zn,useEffect:Xf,useImperativeHandle:Gh,useInsertionEffect:qh,useLayoutEffect:Wh,useMemo:Xh,useReducer:Uc,useRef:Hh,useState:function(){return Uc(dl)},useDebugValue:Kf,useDeferredValue:function(t){var e=Un();return Kh(e,Ke.memoizedState,t)},useTransition:function(){var t=Uc(dl)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Fh,useSyncExternalStore:Mh,useId:Qh,unstable_isNewReconciler:!1},ux={readContext:zn,useCallback:Jh,useContext:zn,useEffect:Xf,useImperativeHandle:Gh,useInsertionEffect:qh,useLayoutEffect:Wh,useMemo:Xh,useReducer:Hc,useRef:Hh,useState:function(){return Hc(dl)},useDebugValue:Kf,useDeferredValue:function(t){var e=Un();return Ke===null?e.memoizedState=t:Kh(e,Ke.memoizedState,t)},useTransition:function(){var t=Hc(dl)[0],e=Un().memoizedState;return[t,e]},useMutableSource:Fh,useSyncExternalStore:Mh,useId:Qh,unstable_isNewReconciler:!1};function co(t,e){try{var r="",o=e;do r+=$g(o),o=o.return;while(o);var l=r}catch(a){l=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:l,digest:null}}function qc(t,e,r){return{value:t,source:null,stack:r??null,digest:e??null}}function Rs(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){throw r})}}var px=typeof WeakMap=="function"?WeakMap:Map;function nO(t,e,r){r=jt(-1,r),r.tag=3,r.payload={element:null};var o=e.value;return r.callback=function(){qi||(qi=!0,qs=o),Rs(t,e)},r}function tO(t,e,r){r=jt(-1,r),r.tag=3;var o=t.type.getDerivedStateFromError;if(typeof o=="function"){var l=e.value;r.payload=function(){return o(l)},r.callback=function(){Rs(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Rs(t,e),typeof o!="function"&&(Ut===null?Ut=new Set([this]):Ut.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})}),r}function ku(t,e,r){var o=t.pingCache;if(o===null){o=t.pingCache=new px;var l=new Set;o.set(e,l)}else l=o.get(e),l===void 0&&(l=new Set,o.set(e,l));l.has(r)||(l.add(r),t=Ex.bind(null,t,e,r),e.then(t,t))}function Nu(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cu(t,e,r,o,l){return t.mode&1?(t.flags|=65536,t.lanes=l,t):(t===e?t.flags|=65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=jt(-1,1),e.tag=2,zt(r,e,1))),r.lanes|=1),t)}var yx=_t.ReactCurrentOwner,xn=!1;function yn(t,e,r,o){e.child=t===null?Rh(e,null,r,o):io(e,t.child,r,o)}function Tu(t,e,r,o,l){r=r.render;var a=e.ref;return no(e,l),o=Gf(t,e,r,o,a,l),r=Jf(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,Pt(t,e,l)):(Fe&&r&&Lf(e),e.flags|=1,yn(t,e,o,l),e.child)}function Au(t,e,r,o,l){if(t===null){var a=r.type;return typeof a=="function"&&!od(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(e.tag=15,e.type=a,rO(t,e,a,o,l)):(t=mi(r.type,null,o,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&l)){var c=a.memoizedProps;if(r=r.compare,r=r!==null?r:ol,r(c,o)&&t.ref===e.ref)return Pt(t,e,l)}return e.flags|=1,t=qt(a,o),t.ref=e.ref,t.return=e,e.child=t}function rO(t,e,r,o,l){if(t!==null){var a=t.memoizedProps;if(ol(a,o)&&t.ref===e.ref)if(xn=!1,e.pendingProps=o=a,(t.lanes&l)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,Pt(t,e,l)}return Ls(t,e,r,o,l)}function oO(t,e,r){var o=e.pendingProps,l=o.children,a=t!==null?t.memoizedState:null;if(o.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Kr,In),In|=r;else{if(!(r&1073741824))return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(Kr,In),In|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,Ne(Kr,In),In|=o}else a!==null?(o=a.baseLanes|r,e.memoizedState=null):o=r,Ne(Kr,In),In|=o;return yn(t,e,l,r),e.child}function lO(t,e){var r=e.ref;(t===null&&r!==null||t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Ls(t,e,r,o,l){var a=wn(r)?hr:un.current;return a=oo(e,a),no(e,l),r=Gf(t,e,r,o,a,l),o=Jf(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l,Pt(t,e,l)):(Fe&&o&&Lf(e),e.flags|=1,yn(t,e,r,l),e.child)}function Ru(t,e,r,o,l){if(wn(r)){var a=!0;Ri(e)}else a=!1;if(no(e,l),e.stateNode===null)hi(t,e),Th(e,r,o),As(e,r,o,l),o=!0;else if(t===null){var c=e.stateNode,s=e.memoizedProps;c.props=s;var d=c.context,u=r.contextType;typeof u=="object"&&u!==null?u=zn(u):(u=wn(r)?hr:un.current,u=oo(e,u));var h=r.getDerivedStateFromProps,p=typeof h=="function"||typeof c.getSnapshotBeforeUpdate=="function";p||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(s!==o||d!==u)&&Su(e,c,o,u),Nt=!1;var y=e.memoizedState;c.state=y,Bi(e,o,c,l),d=e.memoizedState,s!==o||y!==d||vn.current||Nt?(typeof h=="function"&&(Ts(e,r,h,o),d=e.memoizedState),(s=Nt||Pu(e,r,s,o,y,d,u))?(p||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(e.flags|=4194308)):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=o,e.memoizedState=d),c.props=o,c.state=d,c.context=u,o=s):(typeof c.componentDidMount=="function"&&(e.flags|=4194308),o=!1)}else{c=e.stateNode,Nh(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Wn(e.type,s),c.props=u,p=e.pendingProps,y=c.context,d=r.contextType,typeof d=="object"&&d!==null?d=zn(d):(d=wn(r)?hr:un.current,d=oo(e,d));var S=r.getDerivedStateFromProps;(h=typeof S=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(s!==p||y!==d)&&Su(e,c,o,d),Nt=!1,y=e.memoizedState,c.state=y,Bi(e,o,c,l);var g=e.memoizedState;s!==p||y!==g||vn.current||Nt?(typeof S=="function"&&(Ts(e,r,S,o),g=e.memoizedState),(u=Nt||Pu(e,r,u,o,y,g,d)||!1)?(h||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(o,g,d),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(o,g,d)),typeof c.componentDidUpdate=="function"&&(e.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof c.componentDidUpdate!="function"||s===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=o,e.memoizedState=g),c.props=o,c.state=g,c.context=d,o=u):(typeof c.componentDidUpdate!="function"||s===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),o=!1)}return Fs(t,e,r,o,a,l)}function Fs(t,e,r,o,l,a){lO(t,e);var c=(e.flags&128)!==0;if(!o&&!c)return l&&gu(e,r,!1),Pt(t,e,a);o=e.stateNode,yx.current=e;var s=c&&typeof r.getDerivedStateFromError!="function"?null:o.render();return e.flags|=1,t!==null&&c?(e.child=io(e,t.child,null,a),e.child=io(e,null,s,a)):yn(t,e,s,a),e.memoizedState=o.state,l&&gu(e,r,!0),e.child}function iO(t){var e=t.stateNode;e.pendingContext?mu(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mu(t,e.context,!1),Hf(t,e.containerInfo)}function Lu(t,e,r,o,l){return lo(),Mf(l),e.flags|=256,yn(t,e,r,o),e.child}var Ms={dehydrated:null,treeContext:null,retryLane:0};function Ds(t){return{baseLanes:t,cachePool:null,transitions:null}}function aO(t,e,r){var o=e.pendingProps,l=$e.current,a=!1,c=(e.flags&128)!==0,s;if((s=c)||(s=t!==null&&t.memoizedState===null?!1:(l&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(l|=1),Ne($e,l&1),t===null)return Ns(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(c=o.children,t=o.fallback,a?(o=e.mode,a=e.child,c={mode:"hidden",children:c},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=c):a=wa(c,o,0,null),t=yr(t,o,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=Ds(r),e.memoizedState=Ms,t):Qf(e,c));if(l=t.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return hx(t,e,c,o,s,l,r);if(a){a=o.fallback,c=e.mode,l=t.child,s=l.sibling;var d={mode:"hidden",children:o.children};return!(c&1)&&e.child!==l?(o=e.child,o.childLanes=0,o.pendingProps=d,e.deletions=null):(o=qt(l,d),o.subtreeFlags=l.subtreeFlags&14680064),s!==null?a=qt(s,a):(a=yr(a,c,r,null),a.flags|=2),a.return=e,o.return=e,o.sibling=a,e.child=o,o=a,a=e.child,c=t.child.memoizedState,c=c===null?Ds(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},a.memoizedState=c,a.childLanes=t.childLanes&~r,e.memoizedState=Ms,o}return a=t.child,t=a.sibling,o=qt(a,{mode:"visible",children:o.children}),!(e.mode&1)&&(o.lanes=r),o.return=e,o.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)),e.child=o,e.memoizedState=null,o}function Qf(t,e){return e=wa({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Kl(t,e,r,o){return o!==null&&Mf(o),io(e,t.child,null,r),t=Qf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hx(t,e,r,o,l,a,c){if(r)return e.flags&256?(e.flags&=-257,o=qc(Error(G(422))),Kl(t,e,c,o)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=o.fallback,l=e.mode,o=wa({mode:"visible",children:o.children},l,0,null),a=yr(a,l,c,null),a.flags|=2,o.return=e,a.return=e,o.sibling=a,e.child=o,e.mode&1&&io(e,t.child,null,c),e.child.memoizedState=Ds(c),e.memoizedState=Ms,a);if(!(e.mode&1))return Kl(t,e,c,null);if(l.data==="$!"){if(o=l.nextSibling&&l.nextSibling.dataset,o)var s=o.dgst;return o=s,a=Error(G(419)),o=qc(a,o,void 0),Kl(t,e,c,o)}if(s=(c&t.childLanes)!==0,xn||s){if(o=Ze,o!==null){switch(c&-c){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(o.suspendedLanes|c)?0:l,l!==0&&l!==a.retryLane&&(a.retryLane=l,wt(t,l),Kn(o,t,l,-1))}return rd(),o=qc(Error(G(421))),Kl(t,e,c,o)}return l.data==="$?"?(e.flags|=128,e.child=t.child,e=Ix.bind(null,t),l._reactRetry=e,null):(t=a.treeContext,kn=$t(l.nextSibling),Cn=e,Fe=!0,Gn=null,t!==null&&(Fn[Mn++]=mt,Fn[Mn++]=gt,Fn[Mn++]=Or,mt=t.id,gt=t.overflow,Or=e),e=Qf(e,o.children),e.flags|=4096,e)}function Fu(t,e,r){t.lanes|=e;var o=t.alternate;o!==null&&(o.lanes|=e),Cs(t.return,e,r)}function Wc(t,e,r,o,l){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:l}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=l)}function cO(t,e,r){var o=e.pendingProps,l=o.revealOrder,a=o.tail;if(yn(t,e,o.children,r),o=$e.current,o&2)o=o&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fu(t,r,e);else if(t.tag===19)Fu(t,r,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}if(Ne($e,o),!(e.mode&1))e.memoizedState=null;else switch(l){case"forwards":for(r=e.child,l=null;r!==null;)t=r.alternate,t!==null&&$i(t)===null&&(l=r),r=r.sibling;r=l,r===null?(l=e.child,e.child=null):(l=r.sibling,r.sibling=null),Wc(e,!1,l,r,a);break;case"backwards":for(r=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&$i(t)===null){e.child=l;break}t=l.sibling,l.sibling=r,r=l,l=t}Wc(e,!0,r,null,a);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hi(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pt(t,e,r){if(t!==null&&(e.dependencies=t.dependencies),mr|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(G(153));if(e.child!==null){for(t=e.child,r=qt(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==null;)t=t.sibling,r=r.sibling=qt(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function Ox(t,e,r){switch(e.tag){case 3:iO(e),lo();break;case 5:Lh(e);break;case 1:wn(e.type)&&Ri(e);break;case 4:Hf(e,e.stateNode.containerInfo);break;case 10:var o=e.type._context,l=e.memoizedProps.value;Ne(Mi,o._currentValue),o._currentValue=l;break;case 13:if(o=e.memoizedState,o!==null)return o.dehydrated!==null?(Ne($e,$e.current&1),e.flags|=128,null):r&e.child.childLanes?aO(t,e,r):(Ne($e,$e.current&1),t=Pt(t,e,r),t!==null?t.sibling:null);Ne($e,$e.current&1);break;case 19:if(o=(r&e.childLanes)!==0,t.flags&128){if(o)return cO(t,e,r);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ne($e,$e.current),o)break;return null;case 22:case 23:return e.lanes=0,oO(t,e,r)}return Pt(t,e,r)}var sO,Bs,fO,dO;sO=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Bs=function(){};fO=function(t,e,r,o){var l=t.memoizedProps;if(l!==o){t=e.stateNode,dr(st.current);var a=null;switch(r){case"input":l=as(t,l),o=as(t,o),a=[];break;case"select":l=Ue({},l,{value:void 0}),o=Ue({},o,{value:void 0}),a=[];break;case"textarea":l=fs(t,l),o=fs(t,o),a=[];break;default:typeof l.onClick!="function"&&typeof o.onClick=="function"&&(t.onclick=Ti)}us(r,o);var c;r=null;for(u in l)if(!o.hasOwnProperty(u)&&l.hasOwnProperty(u)&&l[u]!=null)if(u==="style"){var s=l[u];for(c in s)s.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Qo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in o){var d=o[u];if(s=l!=null?l[u]:void 0,o.hasOwnProperty(u)&&d!==s&&(d!=null||s!=null))if(u==="style")if(s){for(c in s)!s.hasOwnProperty(c)||d&&d.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in d)d.hasOwnProperty(c)&&s[c]!==d[c]&&(r||(r={}),r[c]=d[c])}else r||(a||(a=[]),a.push(u,r)),r=d;else u==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,s=s?s.__html:void 0,d!=null&&s!==d&&(a=a||[]).push(u,d)):u==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(u,""+d):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Qo.hasOwnProperty(u)?(d!=null&&u==="onScroll"&&Te("scroll",t),a||s===d||(a=[])):(a=a||[]).push(u,d))}r&&(a=a||[]).push("style",r);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};dO=function(t,e,r,o){r!==o&&(e.flags|=4)};function Io(t,e){if(!Fe)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function fn(t){var e=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(e)for(var l=t.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags&14680064,o|=l.flags&14680064,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)r|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=o,t.childLanes=r,e}function bx(t,e,r){var o=e.pendingProps;switch(Ff(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fn(e),null;case 1:return wn(e.type)&&Ai(),fn(e),null;case 3:return o=e.stateNode,ao(),Ae(vn),Ae(un),Wf(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(t===null||t.child===null)&&(Jl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Gs(Gn),Gn=null))),Bs(t,e),fn(e),null;case 5:qf(e);var l=dr(sl.current);if(r=e.type,t!==null&&e.stateNode!=null)fO(t,e,r,o,l),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!o){if(e.stateNode===null)throw Error(G(166));return fn(e),null}if(t=dr(st.current),Jl(e)){o=e.stateNode,r=e.type;var a=e.memoizedProps;switch(o[ot]=e,o[al]=a,t=(e.mode&1)!==0,r){case"dialog":Te("cancel",o),Te("close",o);break;case"iframe":case"object":case"embed":Te("load",o);break;case"video":case"audio":for(l=0;l<Mo.length;l++)Te(Mo[l],o);break;case"source":Te("error",o);break;case"img":case"image":case"link":Te("error",o),Te("load",o);break;case"details":Te("toggle",o);break;case"input":Wd(o,a),Te("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},Te("invalid",o);break;case"textarea":Gd(o,a),Te("invalid",o)}us(r,a),l=null;for(var c in a)if(a.hasOwnProperty(c)){var s=a[c];c==="children"?typeof s=="string"?o.textContent!==s&&(a.suppressHydrationWarning!==!0&&Gl(o.textContent,s,t),l=["children",s]):typeof s=="number"&&o.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Gl(o.textContent,s,t),l=["children",""+s]):Qo.hasOwnProperty(c)&&s!=null&&c==="onScroll"&&Te("scroll",o)}switch(r){case"input":Bl(o),Vd(o,a,!0);break;case"textarea":Bl(o),Jd(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=Ti)}o=l,e.updateQueue=o,o!==null&&(e.flags|=4)}else{c=l.nodeType===9?l:l.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dy(r)),t==="http://www.w3.org/1999/xhtml"?r==="script"?(t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof o.is=="string"?t=c.createElement(r,{is:o.is}):(t=c.createElement(r),r==="select"&&(c=t,o.multiple?c.multiple=!0:o.size&&(c.size=o.size))):t=c.createElementNS(t,r),t[ot]=e,t[al]=o,sO(t,e,!1,!1),e.stateNode=t;e:{switch(c=ps(r,o),r){case"dialog":Te("cancel",t),Te("close",t),l=o;break;case"iframe":case"object":case"embed":Te("load",t),l=o;break;case"video":case"audio":for(l=0;l<Mo.length;l++)Te(Mo[l],t);l=o;break;case"source":Te("error",t),l=o;break;case"img":case"image":case"link":Te("error",t),Te("load",t),l=o;break;case"details":Te("toggle",t),l=o;break;case"input":Wd(t,o),l=as(t,o),Te("invalid",t);break;case"option":l=o;break;case"select":t._wrapperState={wasMultiple:!!o.multiple},l=Ue({},o,{value:void 0}),Te("invalid",t);break;case"textarea":Gd(t,o),l=fs(t,o),Te("invalid",t);break;default:l=o}us(r,l),s=l;for(a in s)if(s.hasOwnProperty(a)){var d=s[a];a==="style"?zy(t,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&By(t,d)):a==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Yo(t,d):typeof d=="number"&&Yo(t,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Qo.hasOwnProperty(a)?d!=null&&a==="onScroll"&&Te("scroll",t):d!=null&&xf(t,a,d,c))}switch(r){case"input":Bl(t),Vd(t,o,!1);break;case"textarea":Bl(t),Jd(t);break;case"option":o.value!=null&&t.setAttribute("value",""+Kt(o.value));break;case"select":t.multiple=!!o.multiple,a=o.value,a!=null?Qr(t,!!o.multiple,a,!1):o.defaultValue!=null&&Qr(t,!!o.multiple,o.defaultValue,!0);break;default:typeof l.onClick=="function"&&(t.onclick=Ti)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return fn(e),null;case 6:if(t&&e.stateNode!=null)dO(t,e,t.memoizedProps,o);else{if(typeof o!="string"&&e.stateNode===null)throw Error(G(166));if(r=dr(sl.current),dr(st.current),Jl(e)){if(o=e.stateNode,r=e.memoizedProps,o[ot]=e,(a=o.nodeValue!==r)&&(t=Cn,t!==null))switch(t.tag){case 3:Gl(o.nodeValue,r,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gl(o.nodeValue,r,(t.mode&1)!==0)}a&&(e.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[ot]=e,e.stateNode=o}return fn(e),null;case 13:if(Ae($e),o=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&kn!==null&&e.mode&1&&!(e.flags&128))Ih(),lo(),e.flags|=98560,a=!1;else if(a=Jl(e),o!==null&&o.dehydrated!==null){if(t===null){if(!a)throw Error(G(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(G(317));a[ot]=e}else lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;fn(e),a=!1}else Gn!==null&&(Gs(Gn),Gn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=r,e):(o=o!==null,o!==(t!==null&&t.memoizedState!==null)&&o&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?Qe===0&&(Qe=3):rd())),e.updateQueue!==null&&(e.flags|=4),fn(e),null);case 4:return ao(),Bs(t,e),t===null&&ll(e.stateNode.containerInfo),fn(e),null;case 10:return $f(e.type._context),fn(e),null;case 17:return wn(e.type)&&Ai(),fn(e),null;case 19:if(Ae($e),a=e.memoizedState,a===null)return fn(e),null;if(o=(e.flags&128)!==0,c=a.rendering,c===null)if(o)Io(a,!1);else{if(Qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(c=$i(t),c!==null){for(e.flags|=128,Io(a,!1),o=c.updateQueue,o!==null&&(e.updateQueue=o,e.flags|=4),e.subtreeFlags=0,o=r,r=e.child;r!==null;)a=r,t=o,a.flags&=14680066,c=a.alternate,c===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=c.childLanes,a.lanes=c.lanes,a.child=c.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=c.memoizedProps,a.memoizedState=c.memoizedState,a.updateQueue=c.updateQueue,a.type=c.type,t=c.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return Ne($e,$e.current&1|2),e.child}t=t.sibling}a.tail!==null&&Ge()>so&&(e.flags|=128,o=!0,Io(a,!1),e.lanes=4194304)}else{if(!o)if(t=$i(c),t!==null){if(e.flags|=128,o=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Io(a,!0),a.tail===null&&a.tailMode==="hidden"&&!c.alternate&&!Fe)return fn(e),null}else 2*Ge()-a.renderingStartTime>so&&r!==1073741824&&(e.flags|=128,o=!0,Io(a,!1),e.lanes=4194304);a.isBackwards?(c.sibling=e.child,e.child=c):(r=a.last,r!==null?r.sibling=c:e.child=c,a.last=c)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ge(),e.sibling=null,r=$e.current,Ne($e,o?r&1|2:r&1),e):(fn(e),null);case 22:case 23:return td(),o=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==o&&(e.flags|=8192),o&&e.mode&1?In&1073741824&&(fn(e),e.subtreeFlags&6&&(e.flags|=8192)):fn(e),null;case 24:return null;case 25:return null}throw Error(G(156,e.tag))}function mx(t,e){switch(Ff(e),e.tag){case 1:return wn(e.type)&&Ai(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ao(),Ae(vn),Ae(un),Wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qf(e),null;case 13:if(Ae($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(G(340));lo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae($e),null;case 4:return ao(),null;case 10:return $f(e.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var Ql=!1,dn=!1,gx=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Xr(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){He(t,e,o)}else r.current=null}function $s(t,e,r){try{r()}catch(o){He(t,e,o)}}var Mu=!1;function jx(t,e){if(ws=ki,t=hh(),Rf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var l=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var c=0,s=-1,d=-1,u=0,h=0,p=t,y=null;n:for(;;){for(var S;p!==r||l!==0&&p.nodeType!==3||(s=c+l),p!==a||o!==0&&p.nodeType!==3||(d=c+o),p.nodeType===3&&(c+=p.nodeValue.length),(S=p.firstChild)!==null;)y=p,p=S;for(;;){if(p===t)break n;if(y===r&&++u===l&&(s=c),y===a&&++h===o&&(d=c),(S=p.nextSibling)!==null)break;p=y,y=p.parentNode}p=S}r=s===-1||d===-1?null:{start:s,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ps={focusedElem:t,selectionRange:r},ki=!1,ne=e;ne!==null;)if(e=ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ne=t;else for(;ne!==null;){e=ne;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,P=g.memoizedState,m=e.stateNode,O=m.getSnapshotBeforeUpdate(e.elementType===e.type?x:Wn(e.type,x),P);m.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(v){He(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,ne=t;break}ne=e.return}return g=Mu,Mu=!1,g}function Wo(t,e,r){var o=e.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&t)===t){var a=l.destroy;l.destroy=void 0,a!==void 0&&$s(e,r,a)}l=l.next}while(l!==o)}}function xa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var r=e=e.next;do{if((r.tag&t)===t){var o=r.create;r.destroy=o()}r=r.next}while(r!==e)}}function zs(t){var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="function"?e(t):e.current=t}}function uO(t){var e=t.alternate;e!==null&&(t.alternate=null,uO(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ot],delete e[al],delete e[Es],delete e[tx],delete e[rx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pO(t){return t.tag===5||t.tag===3||t.tag===4}function Du(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pO(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Us(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Ti));else if(o!==4&&(t=t.child,t!==null))for(Us(t,e,r),t=t.sibling;t!==null;)Us(t,e,r),t=t.sibling}function Hs(t,e,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(o!==4&&(t=t.child,t!==null))for(Hs(t,e,r),t=t.sibling;t!==null;)Hs(t,e,r),t=t.sibling}var on=null,Vn=!1;function It(t,e,r){for(r=r.child;r!==null;)yO(t,e,r),r=r.sibling}function yO(t,e,r){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(pa,r)}catch{}switch(r.tag){case 5:dn||Xr(r,e);case 6:var o=on,l=Vn;on=null,It(t,e,r),on=o,Vn=l,on!==null&&(Vn?(t=on,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(r)):on.removeChild(r.stateNode));break;case 18:on!==null&&(Vn?(t=on,r=r.stateNode,t.nodeType===8?Dc(t.parentNode,r):t.nodeType===1&&Dc(t,r),tl(t)):Dc(on,r.stateNode));break;case 4:o=on,l=Vn,on=r.stateNode.containerInfo,Vn=!0,It(t,e,r),on=o,Vn=l;break;case 0:case 11:case 14:case 15:if(!dn&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){l=o=o.next;do{var a=l,c=a.destroy;a=a.tag,c!==void 0&&(a&2||a&4)&&$s(r,e,c),l=l.next}while(l!==o)}It(t,e,r);break;case 1:if(!dn&&(Xr(r,e),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(s){He(r,e,s)}It(t,e,r);break;case 21:It(t,e,r);break;case 22:r.mode&1?(dn=(o=dn)||r.memoizedState!==null,It(t,e,r),dn=o):It(t,e,r);break;default:It(t,e,r)}}function Bu(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var r=t.stateNode;r===null&&(r=t.stateNode=new gx),e.forEach(function(o){var l=kx.bind(null,t,o);r.has(o)||(r.add(o),o.then(l,l))})}}function qn(t,e){var r=e.deletions;if(r!==null)for(var o=0;o<r.length;o++){var l=r[o];try{var a=t,c=e,s=c;e:for(;s!==null;){switch(s.tag){case 5:on=s.stateNode,Vn=!1;break e;case 3:on=s.stateNode.containerInfo,Vn=!0;break e;case 4:on=s.stateNode.containerInfo,Vn=!0;break e}s=s.return}if(on===null)throw Error(G(160));yO(a,c,l),on=null,Vn=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(u){He(l,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hO(e,t),e=e.sibling}function hO(t,e){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),tt(t),o&4){try{Wo(3,t,t.return),xa(3,t)}catch(x){He(t,t.return,x)}try{Wo(5,t,t.return)}catch(x){He(t,t.return,x)}}break;case 1:qn(e,t),tt(t),o&512&&r!==null&&Xr(r,r.return);break;case 5:if(qn(e,t),tt(t),o&512&&r!==null&&Xr(r,r.return),t.flags&32){var l=t.stateNode;try{Yo(l,"")}catch(x){He(t,t.return,x)}}if(o&4&&(l=t.stateNode,l!=null)){var a=t.memoizedProps,c=r!==null?r.memoizedProps:a,s=t.type,d=t.updateQueue;if(t.updateQueue=null,d!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Fy(l,a),ps(s,c);var u=ps(s,a);for(c=0;c<d.length;c+=2){var h=d[c],p=d[c+1];h==="style"?zy(l,p):h==="dangerouslySetInnerHTML"?By(l,p):h==="children"?Yo(l,p):xf(l,h,p,u)}switch(s){case"input":cs(l,a);break;case"textarea":My(l,a);break;case"select":var y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?Qr(l,!!a.multiple,S,!1):y!==!!a.multiple&&(a.defaultValue!=null?Qr(l,!!a.multiple,a.defaultValue,!0):Qr(l,!!a.multiple,a.multiple?[]:"",!1))}l[al]=a}catch(x){He(t,t.return,x)}}break;case 6:if(qn(e,t),tt(t),o&4){if(t.stateNode===null)throw Error(G(162));l=t.stateNode,a=t.memoizedProps;try{l.nodeValue=a}catch(x){He(t,t.return,x)}}break;case 3:if(qn(e,t),tt(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{tl(e.containerInfo)}catch(x){He(t,t.return,x)}break;case 4:qn(e,t),tt(t);break;case 13:qn(e,t),tt(t),l=t.child,l.flags&8192&&(a=l.memoizedState!==null,l.stateNode.isHidden=a,!a||l.alternate!==null&&l.alternate.memoizedState!==null||(ed=Ge())),o&4&&Bu(t);break;case 22:if(h=r!==null&&r.memoizedState!==null,t.mode&1?(dn=(u=dn)||h,qn(e,t),dn=u):qn(e,t),tt(t),o&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(ne=t,h=t.child;h!==null;){for(p=ne=h;ne!==null;){switch(y=ne,S=y.child,y.tag){case 0:case 11:case 14:case 15:Wo(4,y,y.return);break;case 1:Xr(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){o=y,r=y.return;try{e=o,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){He(o,r,x)}}break;case 5:Xr(y,y.return);break;case 22:if(y.memoizedState!==null){zu(p);continue}}S!==null?(S.return=y,ne=S):zu(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{l=p.stateNode,u?(a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=p.stateNode,d=p.memoizedProps.style,c=d!=null&&d.hasOwnProperty("display")?d.display:null,s.style.display=$y("display",c))}catch(x){He(t,t.return,x)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){He(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qn(e,t),tt(t),o&4&&Bu(t);break;case 21:break;default:qn(e,t),tt(t)}}function tt(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(pO(r)){var o=r;break e}r=r.return}throw Error(G(160))}switch(o.tag){case 5:var l=o.stateNode;o.flags&32&&(Yo(l,""),o.flags&=-33);var a=Du(t);Hs(t,a,l);break;case 3:case 4:var c=o.stateNode.containerInfo,s=Du(t);Us(t,s,c);break;default:throw Error(G(161))}}catch(d){He(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function xx(t,e,r){ne=t,OO(t)}function OO(t,e,r){for(var o=(t.mode&1)!==0;ne!==null;){var l=ne,a=l.child;if(l.tag===22&&o){var c=l.memoizedState!==null||Ql;if(!c){var s=l.alternate,d=s!==null&&s.memoizedState!==null||dn;s=Ql;var u=dn;if(Ql=c,(dn=d)&&!u)for(ne=l;ne!==null;)c=ne,d=c.child,c.tag===22&&c.memoizedState!==null?Uu(l):d!==null?(d.return=c,ne=d):Uu(l);for(;a!==null;)ne=a,OO(a),a=a.sibling;ne=l,Ql=s,dn=u}$u(t)}else l.subtreeFlags&8772&&a!==null?(a.return=l,ne=a):$u(t)}}function $u(t){for(;ne!==null;){var e=ne;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||xa(5,e);break;case 1:var o=e.stateNode;if(e.flags&4&&!dn)if(r===null)o.componentDidMount();else{var l=e.elementType===e.type?r.memoizedProps:Wn(e.type,r.memoizedProps);o.componentDidUpdate(l,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&wu(e,a,o);break;case 3:var c=e.updateQueue;if(c!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:r=e.child.stateNode}wu(e,c,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var d=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&tl(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}dn||e.flags&512&&zs(e)}catch(y){He(e,e.return,y)}}if(e===t){ne=null;break}if(r=e.sibling,r!==null){r.return=e.return,ne=r;break}ne=e.return}}function zu(t){for(;ne!==null;){var e=ne;if(e===t){ne=null;break}var r=e.sibling;if(r!==null){r.return=e.return,ne=r;break}ne=e.return}}function Uu(t){for(;ne!==null;){var e=ne;try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{xa(4,e)}catch(d){He(e,r,d)}break;case 1:var o=e.stateNode;if(typeof o.componentDidMount=="function"){var l=e.return;try{o.componentDidMount()}catch(d){He(e,l,d)}}var a=e.return;try{zs(e)}catch(d){He(e,a,d)}break;case 5:var c=e.return;try{zs(e)}catch(d){He(e,c,d)}}}catch(d){He(e,e.return,d)}if(e===t){ne=null;break}var s=e.sibling;if(s!==null){s.return=e.return,ne=s;break}ne=e.return}}var vx=Math.ceil,Hi=_t.ReactCurrentDispatcher,Yf=_t.ReactCurrentOwner,Bn=_t.ReactCurrentBatchConfig,ve=0,Ze=null,Je=null,ln=0,In=0,Kr=Zt(0),Qe=0,pl=null,mr=0,va=0,Zf=0,Vo=null,jn=null,ed=0,so=1/0,Ot=null,qi=!1,qs=null,Ut=null,Yl=!1,Rt=null,Wi=0,Go=0,Ws=null,Oi=-1,bi=0;function hn(){return ve&6?Ge():Oi!==-1?Oi:Oi=Ge()}function Ht(t){return t.mode&1?ve&2&&ln!==0?ln&-ln:lx.transition!==null?(bi===0&&(bi=Zy()),bi):(t=Ie,t!==0||(t=window.event,t=t===void 0?16:ih(t.type)),t):1}function Kn(t,e,r,o){if(50<Go)throw Go=0,Ws=null,Error(G(185));Sl(t,r,o),(!(ve&2)||t!==Ze)&&(t===Ze&&(!(ve&2)&&(va|=r),Qe===4&&Tt(t,ln)),Pn(t,o),r===1&&ve===0&&!(e.mode&1)&&(so=Ge()+500,ma&&er()))}function Pn(t,e){var r=t.callbackNode;lj(t,e);var o=Ii(t,t===Ze?ln:0);if(o===0)r!==null&&Qd(r),t.callbackNode=null,t.callbackPriority=0;else if(e=o&-o,t.callbackPriority!==e){if(r!=null&&Qd(r),e===1)t.tag===0?ox(Hu.bind(null,t)):Sh(Hu.bind(null,t)),ex(function(){!(ve&6)&&er()}),r=null;else{switch(eh(o)){case 1:r=_f;break;case 4:r=Qy;break;case 16:r=Ei;break;case 536870912:r=Yy;break;default:r=Ei}r=PO(r,bO.bind(null,t))}t.callbackPriority=e,t.callbackNode=r}}function bO(t,e){if(Oi=-1,bi=0,ve&6)throw Error(G(327));var r=t.callbackNode;if(to()&&t.callbackNode!==r)return null;var o=Ii(t,t===Ze?ln:0);if(o===0)return null;if(o&30||o&t.expiredLanes||e)e=Vi(t,o);else{e=o;var l=ve;ve|=2;var a=gO();(Ze!==t||ln!==e)&&(Ot=null,so=Ge()+500,pr(t,e));do try{Sx();break}catch(s){mO(t,s)}while(!0);Bf(),Hi.current=a,ve=l,Je!==null?e=0:(Ze=null,ln=0,e=Qe)}if(e!==0){if(e===2&&(l=ms(t),l!==0&&(o=l,e=Vs(t,l))),e===1)throw r=pl,pr(t,0),Tt(t,o),Pn(t,Ge()),r;if(e===6)Tt(t,o);else{if(l=t.current.alternate,!(o&30)&&!wx(l)&&(e=Vi(t,o),e===2&&(a=ms(t),a!==0&&(o=a,e=Vs(t,a))),e===1))throw r=pl,pr(t,0),Tt(t,o),Pn(t,Ge()),r;switch(t.finishedWork=l,t.finishedLanes=o,e){case 0:case 1:throw Error(G(345));case 2:ir(t,jn,Ot);break;case 3:if(Tt(t,o),(o&130023424)===o&&(e=ed+500-Ge(),10<e)){if(Ii(t,0)!==0)break;if(l=t.suspendedLanes,(l&o)!==o){hn(),t.pingedLanes|=t.suspendedLanes&l;break}t.timeoutHandle=_s(ir.bind(null,t,jn,Ot),e);break}ir(t,jn,Ot);break;case 4:if(Tt(t,o),(o&4194240)===o)break;for(e=t.eventTimes,l=-1;0<o;){var c=31-Xn(o);a=1<<c,c=e[c],c>l&&(l=c),o&=~a}if(o=l,o=Ge()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*vx(o/1960))-o,10<o){t.timeoutHandle=_s(ir.bind(null,t,jn,Ot),o);break}ir(t,jn,Ot);break;case 5:ir(t,jn,Ot);break;default:throw Error(G(329))}}}return Pn(t,Ge()),t.callbackNode===r?bO.bind(null,t):null}function Vs(t,e){var r=Vo;return t.current.memoizedState.isDehydrated&&(pr(t,e).flags|=256),t=Vi(t,e),t!==2&&(e=jn,jn=r,e!==null&&Gs(e)),t}function Gs(t){jn===null?jn=t:jn.push.apply(jn,t)}function wx(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var l=r[o],a=l.getSnapshot;l=l.value;try{if(!Yn(a(),l))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tt(t,e){for(e&=~Zf,e&=~va,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var r=31-Xn(e),o=1<<r;t[r]=-1,e&=~o}}function Hu(t){if(ve&6)throw Error(G(327));to();var e=Ii(t,0);if(!(e&1))return Pn(t,Ge()),null;var r=Vi(t,e);if(t.tag!==0&&r===2){var o=ms(t);o!==0&&(e=o,r=Vs(t,o))}if(r===1)throw r=pl,pr(t,0),Tt(t,e),Pn(t,Ge()),r;if(r===6)throw Error(G(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ir(t,jn,Ot),Pn(t,Ge()),null}function nd(t,e){var r=ve;ve|=1;try{return t(e)}finally{ve=r,ve===0&&(so=Ge()+500,ma&&er())}}function gr(t){Rt!==null&&Rt.tag===0&&!(ve&6)&&to();var e=ve;ve|=1;var r=Bn.transition,o=Ie;try{if(Bn.transition=null,Ie=1,t)return t()}finally{Ie=o,Bn.transition=r,ve=e,!(ve&6)&&er()}}function td(){In=Kr.current,Ae(Kr)}function pr(t,e){t.finishedWork=null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,Zj(r)),Je!==null)for(r=Je.return;r!==null;){var o=r;switch(Ff(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Ai();break;case 3:ao(),Ae(vn),Ae(un),Wf();break;case 5:qf(o);break;case 4:ao();break;case 13:Ae($e);break;case 19:Ae($e);break;case 10:$f(o.type._context);break;case 22:case 23:td()}r=r.return}if(Ze=t,Je=t=qt(t.current,null),ln=In=e,Qe=0,pl=null,Zf=va=mr=0,jn=Vo=null,fr!==null){for(e=0;e<fr.length;e++)if(r=fr[e],o=r.interleaved,o!==null){r.interleaved=null;var l=o.next,a=r.pending;if(a!==null){var c=a.next;a.next=l,o.next=c}r.pending=o}fr=null}return t}function mO(t,e){do{var r=Je;try{if(Bf(),pi.current=Ui,zi){for(var o=ze.memoizedState;o!==null;){var l=o.queue;l!==null&&(l.pending=null),o=o.next}zi=!1}if(br=0,Ye=Ke=ze=null,qo=!1,fl=0,Yf.current=null,r===null||r.return===null){Qe=1,pl=e,Je=null;break}e:{var a=t,c=r.return,s=r,d=e;if(e=ln,s.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var u=d,h=s,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var S=Nu(c);if(S!==null){S.flags&=-257,Cu(S,c,s,a,e),S.mode&1&&ku(a,u,e),e=S,d=u;var g=e.updateQueue;if(g===null){var x=new Set;x.add(d),e.updateQueue=x}else g.add(d);break e}else{if(!(e&1)){ku(a,u,e),rd();break e}d=Error(G(426))}}else if(Fe&&s.mode&1){var P=Nu(c);if(P!==null){!(P.flags&65536)&&(P.flags|=256),Cu(P,c,s,a,e),Mf(co(d,s));break e}}a=d=co(d,s),Qe!==4&&(Qe=2),Vo===null?Vo=[a]:Vo.push(a),a=c;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var m=nO(a,d,e);vu(a,m);break e;case 1:s=d;var O=a.type,b=a.stateNode;if(!(a.flags&128)&&(typeof O.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Ut===null||!Ut.has(b)))){a.flags|=65536,e&=-e,a.lanes|=e;var v=tO(a,s,e);vu(a,v);break e}}a=a.return}while(a!==null)}xO(r)}catch(E){e=E,Je===r&&r!==null&&(Je=r=r.return);continue}break}while(!0)}function gO(){var t=Hi.current;return Hi.current=Ui,t===null?Ui:t}function rd(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),Ze===null||!(mr&268435455)&&!(va&268435455)||Tt(Ze,ln)}function Vi(t,e){var r=ve;ve|=2;var o=gO();(Ze!==t||ln!==e)&&(Ot=null,pr(t,e));do try{Px();break}catch(l){mO(t,l)}while(!0);if(Bf(),ve=r,Hi.current=o,Je!==null)throw Error(G(261));return Ze=null,ln=0,Qe}function Px(){for(;Je!==null;)jO(Je)}function Sx(){for(;Je!==null&&!Kg();)jO(Je)}function jO(t){var e=wO(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?xO(t):Je=e,Yf.current=null}function xO(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){if(r=mx(r,e),r!==null){r.flags&=32767,Je=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Qe=6,Je=null;return}}else if(r=bx(r,e,In),r!==null){Je=r;return}if(e=e.sibling,e!==null){Je=e;return}Je=e=t}while(e!==null);Qe===0&&(Qe=5)}function ir(t,e,r){var o=Ie,l=Bn.transition;try{Bn.transition=null,Ie=1,_x(t,e,r,o)}finally{Bn.transition=l,Ie=o}return null}function _x(t,e,r,o){do to();while(Rt!==null);if(ve&6)throw Error(G(327));r=t.finishedWork;var l=t.finishedLanes;if(r===null)return null;if(t.finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(G(177));t.callbackNode=null,t.callbackPriority=0;var a=r.lanes|r.childLanes;if(ij(t,a),t===Ze&&(Je=Ze=null,ln=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Yl||(Yl=!0,PO(Ei,function(){return to(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=Bn.transition,Bn.transition=null;var c=Ie;Ie=1;var s=ve;ve|=4,Yf.current=null,jx(t,r),hO(r,t),Vj(Ps),ki=!!ws,Ps=ws=null,t.current=r,xx(r),Qg(),ve=s,Ie=c,Bn.transition=a}else t.current=r;if(Yl&&(Yl=!1,Rt=t,Wi=l),a=t.pendingLanes,a===0&&(Ut=null),ej(r.stateNode),Pn(t,Ge()),e!==null)for(o=t.onRecoverableError,r=0;r<e.length;r++)l=e[r],o(l.value,{componentStack:l.stack,digest:l.digest});if(qi)throw qi=!1,t=qs,qs=null,t;return Wi&1&&t.tag!==0&&to(),a=t.pendingLanes,a&1?t===Ws?Go++:(Go=0,Ws=t):Go=0,er(),null}function to(){if(Rt!==null){var t=eh(Wi),e=Bn.transition,r=Ie;try{if(Bn.transition=null,Ie=16>t?16:t,Rt===null)var o=!1;else{if(t=Rt,Rt=null,Wi=0,ve&6)throw Error(G(331));var l=ve;for(ve|=4,ne=t.current;ne!==null;){var a=ne,c=a.child;if(ne.flags&16){var s=a.deletions;if(s!==null){for(var d=0;d<s.length;d++){var u=s[d];for(ne=u;ne!==null;){var h=ne;switch(h.tag){case 0:case 11:case 15:Wo(8,h,a)}var p=h.child;if(p!==null)p.return=h,ne=p;else for(;ne!==null;){h=ne;var y=h.sibling,S=h.return;if(uO(h),h===u){ne=null;break}if(y!==null){y.return=S,ne=y;break}ne=S}}}var g=a.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var P=x.sibling;x.sibling=null,x=P}while(x!==null)}}ne=a}}if(a.subtreeFlags&2064&&c!==null)c.return=a,ne=c;else e:for(;ne!==null;){if(a=ne,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Wo(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,ne=m;break e}ne=a.return}}var O=t.current;for(ne=O;ne!==null;){c=ne;var b=c.child;if(c.subtreeFlags&2064&&b!==null)b.return=c,ne=b;else e:for(c=O;ne!==null;){if(s=ne,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xa(9,s)}}catch(E){He(s,s.return,E)}if(s===c){ne=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,ne=v;break e}ne=s.return}}if(ve=l,er(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(pa,t)}catch{}o=!0}return o}finally{Ie=r,Bn.transition=e}}return!1}function qu(t,e,r){e=co(r,e),e=nO(t,e,1),t=zt(t,e,1),e=hn(),t!==null&&(Sl(t,1,e),Pn(t,e))}function He(t,e,r){if(t.tag===3)qu(t,t,r);else for(;e!==null;){if(e.tag===3){qu(e,t,r);break}else if(e.tag===1){var o=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ut===null||!Ut.has(o))){t=co(r,t),t=tO(e,t,1),e=zt(e,t,1),t=hn(),e!==null&&(Sl(e,1,t),Pn(e,t));break}}e=e.return}}function Ex(t,e,r){var o=t.pingCache;o!==null&&o.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&r,Ze===t&&(ln&r)===r&&(Qe===4||Qe===3&&(ln&130023424)===ln&&500>Ge()-ed?pr(t,0):Zf|=r),Pn(t,e)}function vO(t,e){e===0&&(t.mode&1?(e=Ul,Ul<<=1,!(Ul&130023424)&&(Ul=4194304)):e=1);var r=hn();t=wt(t,e),t!==null&&(Sl(t,e,r),Pn(t,r))}function Ix(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),vO(t,r)}function kx(t,e){var r=0;switch(t.tag){case 13:var o=t.stateNode,l=t.memoizedState;l!==null&&(r=l.retryLane);break;case 19:o=t.stateNode;break;default:throw Error(G(314))}o!==null&&o.delete(e),vO(t,r)}var wO;wO=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||vn.current)xn=!0;else{if(!(t.lanes&r)&&!(e.flags&128))return xn=!1,Ox(t,e,r);xn=!!(t.flags&131072)}else xn=!1,Fe&&e.flags&1048576&&_h(e,Fi,e.index);switch(e.lanes=0,e.tag){case 2:var o=e.type;hi(t,e),t=e.pendingProps;var l=oo(e,un.current);no(e,r),l=Gf(null,e,o,t,l,r);var a=Jf();return e.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(o)?(a=!0,Ri(e)):a=!1,e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Uf(e),l.updater=ga,e.stateNode=l,l._reactInternals=e,As(e,o,t,r),e=Fs(null,e,o,!0,a,r)):(e.tag=0,Fe&&a&&Lf(e),yn(null,e,l,r),e=e.child),e;case 16:o=e.elementType;e:{switch(hi(t,e),t=e.pendingProps,l=o._init,o=l(o._payload),e.type=o,l=e.tag=Cx(o),t=Wn(o,t),l){case 0:e=Ls(null,e,o,t,r);break e;case 1:e=Ru(null,e,o,t,r);break e;case 11:e=Tu(null,e,o,t,r);break e;case 14:e=Au(null,e,o,Wn(o.type,t),r);break e}throw Error(G(306,o,""))}return e;case 0:return o=e.type,l=e.pendingProps,l=e.elementType===o?l:Wn(o,l),Ls(t,e,o,l,r);case 1:return o=e.type,l=e.pendingProps,l=e.elementType===o?l:Wn(o,l),Ru(t,e,o,l,r);case 3:e:{if(iO(e),t===null)throw Error(G(387));o=e.pendingProps,a=e.memoizedState,l=a.element,Nh(t,e),Bi(e,o,null,r);var c=e.memoizedState;if(o=c.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){l=co(Error(G(423)),e),e=Lu(t,e,o,r,l);break e}else if(o!==l){l=co(Error(G(424)),e),e=Lu(t,e,o,r,l);break e}else for(kn=$t(e.stateNode.containerInfo.firstChild),Cn=e,Fe=!0,Gn=null,r=Rh(e,null,o,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(lo(),o===l){e=Pt(t,e,r);break e}yn(t,e,o,r)}e=e.child}return e;case 5:return Lh(e),t===null&&Ns(e),o=e.type,l=e.pendingProps,a=t!==null?t.memoizedProps:null,c=l.children,Ss(o,l)?c=null:a!==null&&Ss(o,a)&&(e.flags|=32),lO(t,e),yn(t,e,c,r),e.child;case 6:return t===null&&Ns(e),null;case 13:return aO(t,e,r);case 4:return Hf(e,e.stateNode.containerInfo),o=e.pendingProps,t===null?e.child=io(e,null,o,r):yn(t,e,o,r),e.child;case 11:return o=e.type,l=e.pendingProps,l=e.elementType===o?l:Wn(o,l),Tu(t,e,o,l,r);case 7:return yn(t,e,e.pendingProps,r),e.child;case 8:return yn(t,e,e.pendingProps.children,r),e.child;case 12:return yn(t,e,e.pendingProps.children,r),e.child;case 10:e:{if(o=e.type._context,l=e.pendingProps,a=e.memoizedProps,c=l.value,Ne(Mi,o._currentValue),o._currentValue=c,a!==null)if(Yn(a.value,c)){if(a.children===l.children&&!vn.current){e=Pt(t,e,r);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){c=a.child;for(var d=s.firstContext;d!==null;){if(d.context===o){if(a.tag===1){d=jt(-1,r&-r),d.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?d.next=d:(d.next=h.next,h.next=d),u.pending=d}}a.lanes|=r,d=a.alternate,d!==null&&(d.lanes|=r),Cs(a.return,r,e),s.lanes|=r;break}d=d.next}}else if(a.tag===10)c=a.type===e.type?null:a.child;else if(a.tag===18){if(c=a.return,c===null)throw Error(G(341));c.lanes|=r,s=c.alternate,s!==null&&(s.lanes|=r),Cs(c,r,e),c=a.sibling}else c=a.child;if(c!==null)c.return=a;else for(c=a;c!==null;){if(c===e){c=null;break}if(a=c.sibling,a!==null){a.return=c.return,c=a;break}c=c.return}a=c}yn(t,e,l.children,r),e=e.child}return e;case 9:return l=e.type,o=e.pendingProps.children,no(e,r),l=zn(l),o=o(l),e.flags|=1,yn(t,e,o,r),e.child;case 14:return o=e.type,l=Wn(o,e.pendingProps),l=Wn(o.type,l),Au(t,e,o,l,r);case 15:return rO(t,e,e.type,e.pendingProps,r);case 17:return o=e.type,l=e.pendingProps,l=e.elementType===o?l:Wn(o,l),hi(t,e),e.tag=1,wn(o)?(t=!0,Ri(e)):t=!1,no(e,r),Th(e,o,l),As(e,o,l,r),Fs(null,e,o,!0,t,r);case 19:return cO(t,e,r);case 22:return oO(t,e,r)}throw Error(G(156,e.tag))};function PO(t,e){return Ky(t,e)}function Nx(t,e,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,r,o){return new Nx(t,e,r,o)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cx(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wf)return 11;if(t===Pf)return 14}return 2}function qt(t,e){var r=t.alternate;return r===null?(r=Dn(t.tag,e,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function mi(t,e,r,o,l,a){var c=2;if(o=t,typeof t=="function")od(t)&&(c=1);else if(typeof t=="string")c=5;else e:switch(t){case $r:return yr(r.children,l,a,e);case vf:c=8,l|=8;break;case rs:return t=Dn(12,r,e,l|2),t.elementType=rs,t.lanes=a,t;case os:return t=Dn(13,r,e,l),t.elementType=os,t.lanes=a,t;case ls:return t=Dn(19,r,e,l),t.elementType=ls,t.lanes=a,t;case Ay:return wa(r,l,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cy:c=10;break e;case Ty:c=9;break e;case wf:c=11;break e;case Pf:c=14;break e;case kt:c=16,o=null;break e}throw Error(G(130,t==null?t:typeof t,""))}return e=Dn(c,r,e,l),e.elementType=t,e.type=o,e.lanes=a,e}function yr(t,e,r,o){return t=Dn(7,t,o,e),t.lanes=r,t}function wa(t,e,r,o){return t=Dn(22,t,o,e),t.elementType=Ay,t.lanes=r,t.stateNode={isHidden:!1},t}function Vc(t,e,r){return t=Dn(6,t,null,e),t.lanes=r,t}function Gc(t,e,r){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Tx(t,e,r,o,l){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=o,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ld(t,e,r,o,l,a,c,s,d){return t=new Tx(t,e,r,s,d),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Dn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uf(a),t}function Ax(t,e,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:o==null?null:""+o,children:t,containerInfo:e,implementation:r}}function SO(t){if(!t)return Qt;t=t._reactInternals;e:{if(Pr(t)!==t||t.tag!==1)throw Error(G(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(G(171))}if(t.tag===1){var r=t.type;if(wn(r))return Ph(t,r,e)}return e}function _O(t,e,r,o,l,a,c,s,d){return t=ld(r,o,!0,t,l,a,c,s,d),t.context=SO(null),r=t.current,o=hn(),l=Ht(r),a=jt(o,l),a.callback=e??null,zt(r,a,l),t.current.lanes=l,Sl(t,l,o),Pn(t,o),t}function Pa(t,e,r,o){var l=e.current,a=hn(),c=Ht(l);return r=SO(r),e.context===null?e.context=r:e.pendingContext=r,e=jt(a,c),e.payload={element:t},o=o===void 0?null:o,o!==null&&(e.callback=o),t=zt(l,e,c),t!==null&&(Kn(t,l,c,a),ui(t,l,c)),c}function Gi(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wu(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function id(t,e){Wu(t,e),(t=t.alternate)&&Wu(t,e)}function Rx(){return null}var EO=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}Sa.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(G(409));Pa(t,e,null,null)};Sa.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gr(function(){Pa(null,t,null,null)}),e[vt]=null}};function Sa(t){this._internalRoot=t}Sa.prototype.unstable_scheduleHydration=function(t){if(t){var e=rh();t={blockedOn:null,target:t,priority:e};for(var r=0;r<Ct.length&&e!==0&&e<Ct[r].priority;r++);Ct.splice(r,0,t),r===0&&lh(t)}};function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _a(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function Lx(t,e,r,o,l){if(l){if(typeof o=="function"){var a=o;o=function(){var u=Gi(c);a.call(u)}}var c=_O(e,o,t,0,null,!1,!1,"",Vu);return t._reactRootContainer=c,t[vt]=c.current,ll(t.nodeType===8?t.parentNode:t),gr(),c}for(;l=t.lastChild;)t.removeChild(l);if(typeof o=="function"){var s=o;o=function(){var u=Gi(d);s.call(u)}}var d=ld(t,0,!1,null,null,!1,!1,"",Vu);return t._reactRootContainer=d,t[vt]=d.current,ll(t.nodeType===8?t.parentNode:t),gr(function(){Pa(e,d,r,o)}),d}function Ea(t,e,r,o,l){var a=r._reactRootContainer;if(a){var c=a;if(typeof l=="function"){var s=l;l=function(){var d=Gi(c);s.call(d)}}Pa(e,c,t,l)}else c=Lx(r,e,t,l,o);return Gi(c)}nh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var r=Fo(e.pendingLanes);r!==0&&(Ef(e,r|1),Pn(e,Ge()),!(ve&6)&&(so=Ge()+500,er()))}break;case 13:gr(function(){var o=wt(t,1);if(o!==null){var l=hn();Kn(o,t,1,l)}}),id(t,1)}};If=function(t){if(t.tag===13){var e=wt(t,134217728);if(e!==null){var r=hn();Kn(e,t,134217728,r)}id(t,134217728)}};th=function(t){if(t.tag===13){var e=Ht(t),r=wt(t,e);if(r!==null){var o=hn();Kn(r,t,e,o)}id(t,e)}};rh=function(){return Ie};oh=function(t,e){var r=Ie;try{return Ie=t,e()}finally{Ie=r}};hs=function(t,e,r){switch(e){case"input":if(cs(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<r.length;e++){var o=r[e];if(o!==t&&o.form===t.form){var l=ba(o);if(!l)throw Error(G(90));Ly(o),cs(o,l)}}}break;case"textarea":My(t,r);break;case"select":e=r.value,e!=null&&Qr(t,!!r.multiple,e,!1)}};qy=nd;Wy=gr;var Fx={usingClientEntryPoint:!1,Events:[El,qr,ba,Uy,Hy,nd]},ko={findFiberByHostInstance:sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Mx={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_t.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Jy(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||Rx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{pa=Zl.inject(Mx),ct=Zl}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;Rn.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(e))throw Error(G(200));return Ax(t,e,null,r)};Rn.createRoot=function(t,e){if(!cd(t))throw Error(G(299));var r=!1,o="",l=EO;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(o=e.identifierPrefix),e.onRecoverableError!==void 0&&(l=e.onRecoverableError)),e=ld(t,1,!1,null,null,r,!1,o,l),t[vt]=e.current,ll(t.nodeType===8?t.parentNode:t),new ad(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(G(188)):(t=Object.keys(t).join(","),Error(G(268,t)));return t=Jy(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return gr(t)};Rn.hydrate=function(t,e,r){if(!_a(e))throw Error(G(200));return Ea(null,t,e,!0,r)};Rn.hydrateRoot=function(t,e,r){if(!cd(t))throw Error(G(405));var o=r!=null&&r.hydratedSources||null,l=!1,a="",c=EO;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),e=_O(e,null,t,1,r??null,l,!1,a,c),t[vt]=e.current,ll(t),o)for(t=0;t<o.length;t++)r=o[t],l=r._getVersion,l=l(r._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,l]:e.mutableSourceEagerHydrationData.push(r,l);return new Sa(e)};Rn.render=function(t,e,r){if(!_a(e))throw Error(G(200));return Ea(null,t,e,!1,r)};Rn.unmountComponentAtNode=function(t){if(!_a(t))throw Error(G(40));return t._reactRootContainer?(gr(function(){Ea(null,null,t,!1,function(){t._reactRootContainer=null,t[vt]=null})}),!0):!1};Rn.unstable_batchedUpdates=nd;Rn.unstable_renderSubtreeIntoContainer=function(t,e,r,o){if(!_a(r))throw Error(G(200));if(t==null||t._reactInternals===void 0)throw Error(G(38));return Ea(t,e,r,!1,o)};Rn.version="18.2.0-next-9e3b772b8-20220608";function IO(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(IO)}catch(t){console.error(t)}}IO(),_y.exports=Rn;var Dx=_y.exports,kO,Gu=Dx;kO=Gu.createRoot,Gu.hydrateRoot;const Js={},NO=Xt.createContext(Js);function fe(t){const e=Xt.useContext(NO);return Xt.useMemo(function(){return typeof t=="function"?t(e):{...e,...t}},[e,t])}function Bx(t){let e;return t.disableParentContext?e=typeof t.components=="function"?t.components(Js):t.components||Js:e=fe(t.components),Xt.createElement(NO.Provider,{value:e},t.children)}var CO={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function r(){for(var a="",c=0;c<arguments.length;c++){var s=arguments[c];s&&(a=l(a,o(s)))}return a}function o(a){if(typeof a=="string"||typeof a=="number")return a;if(typeof a!="object")return"";if(Array.isArray(a))return r.apply(null,a);if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]"))return a.toString();var c="";for(var s in a)e.call(a,s)&&a[s]&&(c=l(c,s));return c}function l(a,c){return c?a?a+" "+c:a+c:a}t.exports?(r.default=r,t.exports=r):window.classNames=r})()})(CO);var $x=CO.exports;const en=hy($x),zx={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Ji{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,r)}init(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=r.prefix||"i18next:",this.logger=e||zx,this.options=r,this.debug=r.debug}log(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return this.forward(r,"log","",!0)}warn(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return this.forward(r,"warn","",!0)}error(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return this.forward(r,"error","")}deprecate(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return this.forward(r,"warn","WARNING DEPRECATED: ",!0)}forward(e,r,o,l){return l&&!this.debug?null:(typeof e[0]=="string"&&(e[0]=`${o}${this.prefix} ${e[0]}`),this.logger[r](e))}create(e){return new Ji(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Ji(this.logger,e)}}var lt=new Ji;class Ia{constructor(){this.observers={}}on(e,r){return e.split(" ").forEach(o=>{this.observers[o]||(this.observers[o]=new Map);const l=this.observers[o].get(r)||0;this.observers[o].set(r,l+1)}),this}off(e,r){if(this.observers[e]){if(!r){delete this.observers[e];return}this.observers[e].delete(r)}}emit(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(c=>{let[s,d]=c;for(let u=0;u<d;u++)s(...o)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(c=>{let[s,d]=c;for(let u=0;u<d;u++)s.apply(s,[e,...o])})}}function No(){let t,e;const r=new Promise((o,l)=>{t=o,e=l});return r.resolve=t,r.reject=e,r}function Ju(t){return t==null?"":""+t}function Ux(t,e,r){t.forEach(o=>{e[o]&&(r[o]=e[o])})}const Hx=/###/g;function Jo(t,e,r){function o(s){return s&&s.indexOf("###")>-1?s.replace(Hx,"."):s}function l(){return!t||typeof t=="string"}const a=typeof e!="string"?e:e.split(".");let c=0;for(;c<a.length-1;){if(l())return{};const s=o(a[c]);!t[s]&&r&&(t[s]=new r),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++c}return l()?{}:{obj:t,k:o(a[c])}}function Xu(t,e,r){const{obj:o,k:l}=Jo(t,e,Object);if(o!==void 0||e.length===1){o[l]=r;return}let a=e[e.length-1],c=e.slice(0,e.length-1),s=Jo(t,c,Object);for(;s.obj===void 0&&c.length;)a=`${c[c.length-1]}.${a}`,c=c.slice(0,c.length-1),s=Jo(t,c,Object),s&&s.obj&&typeof s.obj[`${s.k}.${a}`]<"u"&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=r}function qx(t,e,r,o){const{obj:l,k:a}=Jo(t,e,Object);l[a]=l[a]||[],o&&(l[a]=l[a].concat(r)),o||l[a].push(r)}function Xi(t,e){const{obj:r,k:o}=Jo(t,e);if(r)return r[o]}function Wx(t,e,r){const o=Xi(t,r);return o!==void 0?o:Xi(e,r)}function TO(t,e,r){for(const o in e)o!=="__proto__"&&o!=="constructor"&&(o in t?typeof t[o]=="string"||t[o]instanceof String||typeof e[o]=="string"||e[o]instanceof String?r&&(t[o]=e[o]):TO(t[o],e[o],r):t[o]=e[o]);return t}function Rr(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Vx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Gx(t){return typeof t=="string"?t.replace(/[&<>"'\/]/g,e=>Vx[e]):t}class Jx{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const r=this.regExpMap.get(e);if(r!==void 0)return r;const o=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,o),this.regExpQueue.push(e),o}}const Xx=[" ",",","?","!",";"],Kx=new Jx(20);function Qx(t,e,r){e=e||"",r=r||"";const o=Xx.filter(c=>e.indexOf(c)<0&&r.indexOf(c)<0);if(o.length===0)return!0;const l=Kx.getRegExp(`(${o.map(c=>c==="?"?"\\?":c).join("|")})`);let a=!l.test(t);if(!a){const c=t.indexOf(r);c>0&&!l.test(t.substring(0,c))&&(a=!0)}return a}function Xs(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const o=e.split(r);let l=t;for(let a=0;a<o.length;){if(!l||typeof l!="object")return;let c,s="";for(let d=a;d<o.length;++d)if(d!==a&&(s+=r),s+=o[d],c=l[s],c!==void 0){if(["string","number","boolean"].indexOf(typeof c)>-1&&d<o.length-1)continue;a+=d-a+1;break}l=c}return l}function Ki(t){return t&&t.indexOf("_")>0?t.replace("_","-"):t}class Ku extends Ia{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const r=this.options.ns.indexOf(e);r>-1&&this.options.ns.splice(r,1)}getResource(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const a=l.keySeparator!==void 0?l.keySeparator:this.options.keySeparator,c=l.ignoreJSONStructure!==void 0?l.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;e.indexOf(".")>-1?s=e.split("."):(s=[e,r],o&&(Array.isArray(o)?s.push(...o):typeof o=="string"&&a?s.push(...o.split(a)):s.push(o)));const d=Xi(this.data,s);return!d&&!r&&!o&&e.indexOf(".")>-1&&(e=s[0],r=s[1],o=s.slice(2).join(".")),d||!c||typeof o!="string"?d:Xs(this.data&&this.data[e]&&this.data[e][r],o,a)}addResource(e,r,o,l){let a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const c=a.keySeparator!==void 0?a.keySeparator:this.options.keySeparator;let s=[e,r];o&&(s=s.concat(c?o.split(c):o)),e.indexOf(".")>-1&&(s=e.split("."),l=r,r=s[1]),this.addNamespaces(r),Xu(this.data,s,l),a.silent||this.emit("added",e,r,o,l)}addResources(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const a in o)(typeof o[a]=="string"||Object.prototype.toString.apply(o[a])==="[object Array]")&&this.addResource(e,r,a,o[a],{silent:!0});l.silent||this.emit("added",e,r,o)}addResourceBundle(e,r,o,l,a){let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1},s=[e,r];e.indexOf(".")>-1&&(s=e.split("."),l=o,o=r,r=s[1]),this.addNamespaces(r);let d=Xi(this.data,s)||{};l?TO(d,o,a):d={...d,...o},Xu(this.data,s,d),c.silent||this.emit("added",e,r,o)}removeResourceBundle(e,r){this.hasResourceBundle(e,r)&&delete this.data[e][r],this.removeNamespaces(r),this.emit("removed",e,r)}hasResourceBundle(e,r){return this.getResource(e,r)!==void 0}getResourceBundle(e,r){return r||(r=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,r)}:this.getResource(e,r)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const r=this.getDataByLanguage(e);return!!(r&&Object.keys(r)||[]).find(l=>r[l]&&Object.keys(r[l]).length>0)}toJSON(){return this.data}}var AO={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,r,o,l){return t.forEach(a=>{this.processors[a]&&(e=this.processors[a].process(e,r,o,l))}),e}};const Qu={};class Qi extends Ia{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Ux(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=r,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=lt.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const o=this.resolve(e,r);return o&&o.res!==void 0}extractFromKey(e,r){let o=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;o===void 0&&(o=":");const l=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator;let a=r.ns||this.options.defaultNS||[];const c=o&&e.indexOf(o)>-1,s=!this.options.userDefinedKeySeparator&&!r.keySeparator&&!this.options.userDefinedNsSeparator&&!r.nsSeparator&&!Qx(e,o,l);if(c&&!s){const d=e.match(this.interpolator.nestingRegexp);if(d&&d.length>0)return{key:e,namespaces:a};const u=e.split(o);(o!==l||o===l&&this.options.ns.indexOf(u[0])>-1)&&(a=u.shift()),e=u.join(l)}return typeof a=="string"&&(a=[a]),{key:e,namespaces:a}}translate(e,r,o){if(typeof r!="object"&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),typeof r=="object"&&(r={...r}),r||(r={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const l=r.returnDetails!==void 0?r.returnDetails:this.options.returnDetails,a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,{key:c,namespaces:s}=this.extractFromKey(e[e.length-1],r),d=s[s.length-1],u=r.lng||this.language,h=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(h){const v=r.nsSeparator||this.options.nsSeparator;return l?{res:`${d}${v}${c}`,usedKey:c,exactUsedKey:c,usedLng:u,usedNS:d,usedParams:this.getUsedParamsDetails(r)}:`${d}${v}${c}`}return l?{res:c,usedKey:c,exactUsedKey:c,usedLng:u,usedNS:d,usedParams:this.getUsedParamsDetails(r)}:c}const p=this.resolve(e,r);let y=p&&p.res;const S=p&&p.usedKey||c,g=p&&p.exactUsedKey||c,x=Object.prototype.toString.apply(y),P=["[object Number]","[object Function]","[object RegExp]"],m=r.joinArrays!==void 0?r.joinArrays:this.options.joinArrays,O=!this.i18nFormat||this.i18nFormat.handleAsObject;if(O&&y&&(typeof y!="string"&&typeof y!="boolean"&&typeof y!="number")&&P.indexOf(x)<0&&!(typeof m=="string"&&x==="[object Array]")){if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const v=this.options.returnedObjectHandler?this.options.returnedObjectHandler(S,y,{...r,ns:s}):`key '${c} (${this.language})' returned an object instead of string.`;return l?(p.res=v,p.usedParams=this.getUsedParamsDetails(r),p):v}if(a){const v=x==="[object Array]",E=v?[]:{},k=v?g:S;for(const _ in y)if(Object.prototype.hasOwnProperty.call(y,_)){const N=`${k}${a}${_}`;E[_]=this.translate(N,{...r,joinArrays:!1,ns:s}),E[_]===N&&(E[_]=y[_])}y=E}}else if(O&&typeof m=="string"&&x==="[object Array]")y=y.join(m),y&&(y=this.extendTranslation(y,e,r,o));else{let v=!1,E=!1;const k=r.count!==void 0&&typeof r.count!="string",_=Qi.hasDefaultValue(r),N=k?this.pluralResolver.getSuffix(u,r.count,r):"",D=r.ordinal&&k?this.pluralResolver.getSuffix(u,r.count,{ordinal:!1}):"",A=k&&!r.ordinal&&r.count===0&&this.pluralResolver.shouldUseIntlApi(),W=A&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${N}`]||r[`defaultValue${D}`]||r.defaultValue;!this.isValidLookup(y)&&_&&(v=!0,y=W),this.isValidLookup(y)||(E=!0,y=c);const ae=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&E?void 0:y,ie=_&&W!==y&&this.options.updateMissing;if(E||v||ie){if(this.logger.log(ie?"updateKey":"missingKey",u,d,c,ie?W:y),a){const z=this.resolve(c,{...r,keySeparator:!1});z&&z.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let xe=[];const Pe=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Pe&&Pe[0])for(let z=0;z<Pe.length;z++)xe.push(Pe[z]);else this.options.saveMissingTo==="all"?xe=this.languageUtils.toResolveHierarchy(r.lng||this.language):xe.push(r.lng||this.language);const _e=(z,Z,Y)=>{const se=_&&Y!==y?Y:ae;this.options.missingKeyHandler?this.options.missingKeyHandler(z,d,Z,se,ie,r):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(z,d,Z,se,ie,r),this.emit("missingKey",z,d,Z,y)};this.options.saveMissing&&(this.options.saveMissingPlurals&&k?xe.forEach(z=>{const Z=this.pluralResolver.getSuffixes(z,r);A&&r[`defaultValue${this.options.pluralSeparator}zero`]&&Z.indexOf(`${this.options.pluralSeparator}zero`)<0&&Z.push(`${this.options.pluralSeparator}zero`),Z.forEach(Y=>{_e([z],c+Y,r[`defaultValue${Y}`]||W)})}):_e(xe,c,W))}y=this.extendTranslation(y,e,r,p,o),E&&y===c&&this.options.appendNamespaceToMissingKey&&(y=`${d}:${c}`),(E||v)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?y=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${d}:${c}`:c,v?y:void 0):y=this.options.parseMissingKeyHandler(y))}return l?(p.res=y,p.usedParams=this.getUsedParamsDetails(r),p):y}extendTranslation(e,r,o,l,a){var c=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...o},o.lng||this.language||l.usedLng,l.usedNS,l.usedKey,{resolved:l});else if(!o.skipInterpolation){o.interpolation&&this.interpolator.init({...o,interpolation:{...this.options.interpolation,...o.interpolation}});const u=typeof e=="string"&&(o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let h;if(u){const y=e.match(this.interpolator.nestingRegexp);h=y&&y.length}let p=o.replace&&typeof o.replace!="string"?o.replace:o;if(this.options.interpolation.defaultVariables&&(p={...this.options.interpolation.defaultVariables,...p}),e=this.interpolator.interpolate(e,p,o.lng||this.language,o),u){const y=e.match(this.interpolator.nestingRegexp),S=y&&y.length;h<S&&(o.nest=!1)}!o.lng&&this.options.compatibilityAPI!=="v1"&&l&&l.res&&(o.lng=l.usedLng),o.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var y=arguments.length,S=new Array(y),g=0;g<y;g++)S[g]=arguments[g];return a&&a[0]===S[0]&&!o.context?(c.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${r[0]}`),null):c.translate(...S,r)},o)),o.interpolation&&this.interpolator.reset()}const s=o.postProcess||this.options.postProcess,d=typeof s=="string"?[s]:s;return e!=null&&d&&d.length&&o.applyPostProcessor!==!1&&(e=AO.handle(d,e,r,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...l,usedParams:this.getUsedParamsDetails(o)},...o}:o,this)),e}resolve(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o,l,a,c,s;return typeof e=="string"&&(e=[e]),e.forEach(d=>{if(this.isValidLookup(o))return;const u=this.extractFromKey(d,r),h=u.key;l=h;let p=u.namespaces;this.options.fallbackNS&&(p=p.concat(this.options.fallbackNS));const y=r.count!==void 0&&typeof r.count!="string",S=y&&!r.ordinal&&r.count===0&&this.pluralResolver.shouldUseIntlApi(),g=r.context!==void 0&&(typeof r.context=="string"||typeof r.context=="number")&&r.context!=="",x=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);p.forEach(P=>{this.isValidLookup(o)||(s=P,!Qu[`${x[0]}-${P}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(s)&&(Qu[`${x[0]}-${P}`]=!0,this.logger.warn(`key "${l}" for languages "${x.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),x.forEach(m=>{if(this.isValidLookup(o))return;c=m;const O=[h];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(O,h,m,P,r);else{let v;y&&(v=this.pluralResolver.getSuffix(m,r.count,r));const E=`${this.options.pluralSeparator}zero`,k=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(y&&(O.push(h+v),r.ordinal&&v.indexOf(k)===0&&O.push(h+v.replace(k,this.options.pluralSeparator)),S&&O.push(h+E)),g){const _=`${h}${this.options.contextSeparator}${r.context}`;O.push(_),y&&(O.push(_+v),r.ordinal&&v.indexOf(k)===0&&O.push(_+v.replace(k,this.options.pluralSeparator)),S&&O.push(_+E))}}let b;for(;b=O.pop();)this.isValidLookup(o)||(a=b,o=this.getResource(m,P,b,r))}))})}),{res:o,usedKey:l,exactUsedKey:a,usedLng:c,usedNS:s}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,r,o,l):this.resourceStore.getResource(e,r,o,l)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const r=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],o=e.replace&&typeof e.replace!="string";let l=o?e.replace:e;if(o&&typeof e.count<"u"&&(l.count=e.count),this.options.interpolation.defaultVariables&&(l={...this.options.interpolation.defaultVariables,...l}),!o){l={...l};for(const a of r)delete l[a]}return l}static hasDefaultValue(e){const r="defaultValue";for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)&&r===o.substring(0,r.length)&&e[o]!==void 0)return!0;return!1}}function Jc(t){return t.charAt(0).toUpperCase()+t.slice(1)}class Yu{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=lt.create("languageUtils")}getScriptPartFromCode(e){if(e=Ki(e),!e||e.indexOf("-")<0)return null;const r=e.split("-");return r.length===2||(r.pop(),r[r.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(r.join("-"))}getLanguagePartFromCode(e){if(e=Ki(e),!e||e.indexOf("-")<0)return e;const r=e.split("-");return this.formatLanguageCode(r[0])}formatLanguageCode(e){if(typeof e=="string"&&e.indexOf("-")>-1){const r=["hans","hant","latn","cyrl","cans","mong","arab"];let o=e.split("-");return this.options.lowerCaseLng?o=o.map(l=>l.toLowerCase()):o.length===2?(o[0]=o[0].toLowerCase(),o[1]=o[1].toUpperCase(),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=Jc(o[1].toLowerCase()))):o.length===3&&(o[0]=o[0].toLowerCase(),o[1].length===2&&(o[1]=o[1].toUpperCase()),o[0]!=="sgn"&&o[2].length===2&&(o[2]=o[2].toUpperCase()),r.indexOf(o[1].toLowerCase())>-1&&(o[1]=Jc(o[1].toLowerCase())),r.indexOf(o[2].toLowerCase())>-1&&(o[2]=Jc(o[2].toLowerCase()))),o.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let r;return e.forEach(o=>{if(r)return;const l=this.formatLanguageCode(o);(!this.options.supportedLngs||this.isSupportedCode(l))&&(r=l)}),!r&&this.options.supportedLngs&&e.forEach(o=>{if(r)return;const l=this.getLanguagePartFromCode(o);if(this.isSupportedCode(l))return r=l;r=this.options.supportedLngs.find(a=>{if(a===l)return a;if(!(a.indexOf("-")<0&&l.indexOf("-")<0)&&a.indexOf(l)===0)return a})}),r||(r=this.getFallbackCodes(this.options.fallbackLng)[0]),r}getFallbackCodes(e,r){if(!e)return[];if(typeof e=="function"&&(e=e(r)),typeof e=="string"&&(e=[e]),Object.prototype.toString.apply(e)==="[object Array]")return e;if(!r)return e.default||[];let o=e[r];return o||(o=e[this.getScriptPartFromCode(r)]),o||(o=e[this.formatLanguageCode(r)]),o||(o=e[this.getLanguagePartFromCode(r)]),o||(o=e.default),o||[]}toResolveHierarchy(e,r){const o=this.getFallbackCodes(r||this.options.fallbackLng||[],e),l=[],a=c=>{c&&(this.isSupportedCode(c)?l.push(c):this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`))};return typeof e=="string"&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&a(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&a(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&a(this.getLanguagePartFromCode(e))):typeof e=="string"&&a(this.formatLanguageCode(e)),o.forEach(c=>{l.indexOf(c)<0&&a(this.formatLanguageCode(c))}),l}}let Yx=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Zx={1:function(t){return+(t>1)},2:function(t){return+(t!=1)},3:function(t){return 0},4:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},5:function(t){return t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5},6:function(t){return t==1?0:t>=2&&t<=4?1:2},7:function(t){return t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2},8:function(t){return t==1?0:t==2?1:t!=8&&t!=11?2:3},9:function(t){return+(t>=2)},10:function(t){return t==1?0:t==2?1:t<7?2:t<11?3:4},11:function(t){return t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3},12:function(t){return+(t%10!=1||t%100==11)},13:function(t){return+(t!==0)},14:function(t){return t==1?0:t==2?1:t==3?2:3},15:function(t){return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2},16:function(t){return t%10==1&&t%100!=11?0:t!==0?1:2},17:function(t){return t==1||t%10==1&&t%100!=11?0:1},18:function(t){return t==0?0:t==1?1:2},19:function(t){return t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3},20:function(t){return t==1?0:t==0||t%100>0&&t%100<20?1:2},21:function(t){return t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0},22:function(t){return t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3}};const e1=["v1","v2","v3"],n1=["v4"],Zu={zero:0,one:1,two:2,few:3,many:4,other:5};function t1(){const t={};return Yx.forEach(e=>{e.lngs.forEach(r=>{t[r]={numbers:e.nr,plurals:Zx[e.fc]}})}),t}class r1{constructor(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=r,this.logger=lt.create("pluralResolver"),(!this.options.compatibilityJSON||n1.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=t1()}addRule(e,r){this.rules[e]=r}getRule(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(Ki(e==="dev"?"en":e),{type:r.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=this.getRule(e,r);return this.shouldUseIntlApi()?o&&o.resolvedOptions().pluralCategories.length>1:o&&o.numbers.length>1}getPluralFormsOfKey(e,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,o).map(l=>`${r}${l}`)}getSuffixes(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const o=this.getRule(e,r);return o?this.shouldUseIntlApi()?o.resolvedOptions().pluralCategories.sort((l,a)=>Zu[l]-Zu[a]).map(l=>`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${l}`):o.numbers.map(l=>this.getSuffix(e,l,r)):[]}getSuffix(e,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const l=this.getRule(e,o);return l?this.shouldUseIntlApi()?`${this.options.prepend}${o.ordinal?`ordinal${this.options.prepend}`:""}${l.select(r)}`:this.getSuffixRetroCompatible(l,r):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,r){const o=e.noAbs?e.plurals(r):e.plurals(Math.abs(r));let l=e.numbers[o];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(l===2?l="plural":l===1&&(l=""));const a=()=>this.options.prepend&&l.toString()?this.options.prepend+l.toString():l.toString();return this.options.compatibilityJSON==="v1"?l===1?"":typeof l=="number"?`_plural_${l.toString()}`:a():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?a():this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString()}shouldUseIntlApi(){return!e1.includes(this.options.compatibilityJSON)}}function ep(t,e,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,a=Wx(t,e,r);return!a&&l&&typeof r=="string"&&(a=Xs(t,r,o),a===void 0&&(a=Xs(e,r,o))),a}class o1{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=lt.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(r=>r),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const r=e.interpolation;this.escape=r.escape!==void 0?r.escape:Gx,this.escapeValue=r.escapeValue!==void 0?r.escapeValue:!0,this.useRawValueToEscape=r.useRawValueToEscape!==void 0?r.useRawValueToEscape:!1,this.prefix=r.prefix?Rr(r.prefix):r.prefixEscaped||"{{",this.suffix=r.suffix?Rr(r.suffix):r.suffixEscaped||"}}",this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||",",this.unescapePrefix=r.unescapeSuffix?"":r.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":r.unescapeSuffix||"",this.nestingPrefix=r.nestingPrefix?Rr(r.nestingPrefix):r.nestingPrefixEscaped||Rr("$t("),this.nestingSuffix=r.nestingSuffix?Rr(r.nestingSuffix):r.nestingSuffixEscaped||Rr(")"),this.nestingOptionsSeparator=r.nestingOptionsSeparator?r.nestingOptionsSeparator:r.nestingOptionsSeparator||",",this.maxReplaces=r.maxReplaces?r.maxReplaces:1e3,this.alwaysFormat=r.alwaysFormat!==void 0?r.alwaysFormat:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(r,o)=>r&&r.source===o?(r.lastIndex=0,r):new RegExp(o,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,r,o,l){let a,c,s;const d=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(g){return g.replace(/\$/g,"$$$$")}const h=g=>{if(g.indexOf(this.formatSeparator)<0){const O=ep(r,d,g,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(O,void 0,o,{...l,...r,interpolationkey:g}):O}const x=g.split(this.formatSeparator),P=x.shift().trim(),m=x.join(this.formatSeparator).trim();return this.format(ep(r,d,P,this.options.keySeparator,this.options.ignoreJSONStructure),m,o,{...l,...r,interpolationkey:P})};this.resetRegExp();const p=l&&l.missingInterpolationHandler||this.options.missingInterpolationHandler,y=l&&l.interpolation&&l.interpolation.skipOnVariables!==void 0?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:g=>u(g)},{regex:this.regexp,safeValue:g=>this.escapeValue?u(this.escape(g)):u(g)}].forEach(g=>{for(s=0;a=g.regex.exec(e);){const x=a[1].trim();if(c=h(x),c===void 0)if(typeof p=="function"){const m=p(e,a,l);c=typeof m=="string"?m:""}else if(l&&Object.prototype.hasOwnProperty.call(l,x))c="";else if(y){c=a[0];continue}else this.logger.warn(`missed to pass in variable ${x} for interpolating ${e}`),c="";else typeof c!="string"&&!this.useRawValueToEscape&&(c=Ju(c));const P=g.safeValue(c);if(e=e.replace(a[0],P),y?(g.regex.lastIndex+=c.length,g.regex.lastIndex-=a[0].length):g.regex.lastIndex=0,s++,s>=this.maxReplaces)break}}),e}nest(e,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l,a,c;function s(d,u){const h=this.nestingOptionsSeparator;if(d.indexOf(h)<0)return d;const p=d.split(new RegExp(`${h}[ ]*{`));let y=`{${p[1]}`;d=p[0],y=this.interpolate(y,c);const S=y.match(/'/g),g=y.match(/"/g);(S&&S.length%2===0&&!g||g.length%2!==0)&&(y=y.replace(/'/g,'"'));try{c=JSON.parse(y),u&&(c={...u,...c})}catch(x){return this.logger.warn(`failed parsing options string in nesting for key ${d}`,x),`${d}${h}${y}`}return delete c.defaultValue,d}for(;l=this.nestingRegexp.exec(e);){let d=[];c={...o},c=c.replace&&typeof c.replace!="string"?c.replace:c,c.applyPostProcessor=!1,delete c.defaultValue;let u=!1;if(l[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(l[1])){const h=l[1].split(this.formatSeparator).map(p=>p.trim());l[1]=h.shift(),d=h,u=!0}if(a=r(s.call(this,l[1].trim(),c),c),a&&l[0]===e&&typeof a!="string")return a;typeof a!="string"&&(a=Ju(a)),a||(this.logger.warn(`missed to resolve ${l[1]} for nesting ${e}`),a=""),u&&(a=d.reduce((h,p)=>this.format(h,p,o.lng,{...o,interpolationkey:l[1].trim()}),a.trim())),e=e.replace(l[0],a),this.regexp.lastIndex=0}return e}}function l1(t){let e=t.toLowerCase().trim();const r={};if(t.indexOf("(")>-1){const o=t.split("(");e=o[0].toLowerCase().trim();const l=o[1].substring(0,o[1].length-1);e==="currency"&&l.indexOf(":")<0?r.currency||(r.currency=l.trim()):e==="relativetime"&&l.indexOf(":")<0?r.range||(r.range=l.trim()):l.split(";").forEach(c=>{if(!c)return;const[s,...d]=c.split(":"),u=d.join(":").trim().replace(/^'+|'+$/g,"");r[s.trim()]||(r[s.trim()]=u),u==="false"&&(r[s.trim()]=!1),u==="true"&&(r[s.trim()]=!0),isNaN(u)||(r[s.trim()]=parseInt(u,10))})}return{formatName:e,formatOptions:r}}function Lr(t){const e={};return function(o,l,a){const c=l+JSON.stringify(a);let s=e[c];return s||(s=t(Ki(l),a),e[c]=s),s(o)}}class i1{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=lt.create("formatter"),this.options=e,this.formats={number:Lr((r,o)=>{const l=new Intl.NumberFormat(r,{...o});return a=>l.format(a)}),currency:Lr((r,o)=>{const l=new Intl.NumberFormat(r,{...o,style:"currency"});return a=>l.format(a)}),datetime:Lr((r,o)=>{const l=new Intl.DateTimeFormat(r,{...o});return a=>l.format(a)}),relativetime:Lr((r,o)=>{const l=new Intl.RelativeTimeFormat(r,{...o});return a=>l.format(a,o.range||"day")}),list:Lr((r,o)=>{const l=new Intl.ListFormat(r,{...o});return a=>l.format(a)})},this.init(e)}init(e){const o=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=o.formatSeparator?o.formatSeparator:o.formatSeparator||","}add(e,r){this.formats[e.toLowerCase().trim()]=r}addCached(e,r){this.formats[e.toLowerCase().trim()]=Lr(r)}format(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return r.split(this.formatSeparator).reduce((s,d)=>{const{formatName:u,formatOptions:h}=l1(d);if(this.formats[u]){let p=s;try{const y=l&&l.formatParams&&l.formatParams[l.interpolationkey]||{},S=y.locale||y.lng||l.locale||l.lng||o;p=this.formats[u](s,S,{...h,...l,...y})}catch(y){this.logger.warn(y)}return p}else this.logger.warn(`there was no format function for ${u}`);return s},e)}}function a1(t,e){t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)}class c1 extends Ia{constructor(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=r,this.services=o,this.languageUtils=o.languageUtils,this.options=l,this.logger=lt.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=l.maxParallelReads||10,this.readingCalls=0,this.maxRetries=l.maxRetries>=0?l.maxRetries:5,this.retryTimeout=l.retryTimeout>=1?l.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(o,l.backend,l)}queueLoad(e,r,o,l){const a={},c={},s={},d={};return e.forEach(u=>{let h=!0;r.forEach(p=>{const y=`${u}|${p}`;!o.reload&&this.store.hasResourceBundle(u,p)?this.state[y]=2:this.state[y]<0||(this.state[y]===1?c[y]===void 0&&(c[y]=!0):(this.state[y]=1,h=!1,c[y]===void 0&&(c[y]=!0),a[y]===void 0&&(a[y]=!0),d[p]===void 0&&(d[p]=!0)))}),h||(s[u]=!0)}),(Object.keys(a).length||Object.keys(c).length)&&this.queue.push({pending:c,pendingCount:Object.keys(c).length,loaded:{},errors:[],callback:l}),{toLoad:Object.keys(a),pending:Object.keys(c),toLoadLanguages:Object.keys(s),toLoadNamespaces:Object.keys(d)}}loaded(e,r,o){const l=e.split("|"),a=l[0],c=l[1];r&&this.emit("failedLoading",a,c,r),o&&this.store.addResourceBundle(a,c,o),this.state[e]=r?-1:2;const s={};this.queue.forEach(d=>{qx(d.loaded,[a],c),a1(d,e),r&&d.errors.push(r),d.pendingCount===0&&!d.done&&(Object.keys(d.loaded).forEach(u=>{s[u]||(s[u]={});const h=d.loaded[u];h.length&&h.forEach(p=>{s[u][p]===void 0&&(s[u][p]=!0)})}),d.done=!0,d.errors.length?d.callback(d.errors):d.callback())}),this.emit("loaded",s),this.queue=this.queue.filter(d=>!d.done)}read(e,r,o){let l=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,c=arguments.length>5?arguments[5]:void 0;if(!e.length)return c(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:r,fcName:o,tried:l,wait:a,callback:c});return}this.readingCalls++;const s=(u,h)=>{if(this.readingCalls--,this.waitingReads.length>0){const p=this.waitingReads.shift();this.read(p.lng,p.ns,p.fcName,p.tried,p.wait,p.callback)}if(u&&h&&l<this.maxRetries){setTimeout(()=>{this.read.call(this,e,r,o,l+1,a*2,c)},a);return}c(u,h)},d=this.backend[o].bind(this.backend);if(d.length===2){try{const u=d(e,r);u&&typeof u.then=="function"?u.then(h=>s(null,h)).catch(s):s(null,u)}catch(u){s(u)}return}return d(e,r,s)}prepareLoading(e,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},l=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),l&&l();typeof e=="string"&&(e=this.languageUtils.toResolveHierarchy(e)),typeof r=="string"&&(r=[r]);const a=this.queueLoad(e,r,o,l);if(!a.toLoad.length)return a.pending.length||l(),null;a.toLoad.forEach(c=>{this.loadOne(c)})}load(e,r,o){this.prepareLoading(e,r,{},o)}reload(e,r,o){this.prepareLoading(e,r,{reload:!0},o)}loadOne(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const o=e.split("|"),l=o[0],a=o[1];this.read(l,a,"read",void 0,void 0,(c,s)=>{c&&this.logger.warn(`${r}loading namespace ${a} for language ${l} failed`,c),!c&&s&&this.logger.log(`${r}loaded namespace ${a} for language ${l}`,s),this.loaded(e,c,s)})}saveMissing(e,r,o,l,a){let c=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(r)){this.logger.warn(`did not save key "${o}" as the namespace "${r}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(o==null||o==="")){if(this.backend&&this.backend.create){const d={...c,isUpdate:a},u=this.backend.create.bind(this.backend);if(u.length<6)try{let h;u.length===5?h=u(e,r,o,l,d):h=u(e,r,o,l),h&&typeof h.then=="function"?h.then(p=>s(null,p)).catch(s):s(null,h)}catch(h){s(h)}else u(e,r,o,l,s,d)}!e||!e[0]||this.store.addResource(e[0],r,o,l)}}}function np(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(e){let r={};if(typeof e[1]=="object"&&(r=e[1]),typeof e[1]=="string"&&(r.defaultValue=e[1]),typeof e[2]=="string"&&(r.tDescription=e[2]),typeof e[2]=="object"||typeof e[3]=="object"){const o=e[3]||e[2];Object.keys(o).forEach(l=>{r[l]=o[l]})}return r},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function tp(t){return typeof t.ns=="string"&&(t.ns=[t.ns]),typeof t.fallbackLng=="string"&&(t.fallbackLng=[t.fallbackLng]),typeof t.fallbackNS=="string"&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t}function ei(){}function s1(t){Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(r=>{typeof t[r]=="function"&&(t[r]=t[r].bind(t))})}class yl extends Ia{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;if(super(),this.options=tp(e),this.services={},this.logger=lt,this.modules={external:[]},s1(this),r&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,r),this;setTimeout(()=>{this.init(e,r)},0)}}init(){var e=this;let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;typeof r=="function"&&(o=r,r={}),!r.defaultNS&&r.defaultNS!==!1&&r.ns&&(typeof r.ns=="string"?r.defaultNS=r.ns:r.ns.indexOf("translation")<0&&(r.defaultNS=r.ns[0]));const l=np();this.options={...l,...this.options,...tp(r)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...l.interpolation,...this.options.interpolation}),r.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=r.keySeparator),r.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=r.nsSeparator);function a(h){return h?typeof h=="function"?new h:h:null}if(!this.options.isClone){this.modules.logger?lt.init(a(this.modules.logger),this.options):lt.init(null,this.options);let h;this.modules.formatter?h=this.modules.formatter:typeof Intl<"u"&&(h=i1);const p=new Yu(this.options);this.store=new Ku(this.options.resources,this.options);const y=this.services;y.logger=lt,y.resourceStore=this.store,y.languageUtils=p,y.pluralResolver=new r1(p,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),h&&(!this.options.interpolation.format||this.options.interpolation.format===l.interpolation.format)&&(y.formatter=a(h),y.formatter.init(y,this.options),this.options.interpolation.format=y.formatter.format.bind(y.formatter)),y.interpolator=new o1(this.options),y.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},y.backendConnector=new c1(a(this.modules.backend),y.resourceStore,y,this.options),y.backendConnector.on("*",function(S){for(var g=arguments.length,x=new Array(g>1?g-1:0),P=1;P<g;P++)x[P-1]=arguments[P];e.emit(S,...x)}),this.modules.languageDetector&&(y.languageDetector=a(this.modules.languageDetector),y.languageDetector.init&&y.languageDetector.init(y,this.options.detection,this.options)),this.modules.i18nFormat&&(y.i18nFormat=a(this.modules.i18nFormat),y.i18nFormat.init&&y.i18nFormat.init(this)),this.translator=new Qi(this.services,this.options),this.translator.on("*",function(S){for(var g=arguments.length,x=new Array(g>1?g-1:0),P=1;P<g;P++)x[P-1]=arguments[P];e.emit(S,...x)}),this.modules.external.forEach(S=>{S.init&&S.init(this)})}if(this.format=this.options.interpolation.format,o||(o=ei),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const h=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);h.length>0&&h[0]!=="dev"&&(this.options.lng=h[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(h=>{this[h]=function(){return e.store[h](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(h=>{this[h]=function(){return e.store[h](...arguments),e}});const d=No(),u=()=>{const h=(p,y)=>{this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),d.resolve(y),o(p,y)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return h(null,this.t.bind(this));this.changeLanguage(this.options.lng,h)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),d}loadResources(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ei;const l=typeof e=="string"?e:this.language;if(typeof e=="function"&&(o=e),!this.options.resources||this.options.partialBundledLanguages){if(l&&l.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return o();const a=[],c=s=>{if(!s||s==="cimode")return;this.services.languageUtils.toResolveHierarchy(s).forEach(u=>{u!=="cimode"&&a.indexOf(u)<0&&a.push(u)})};l?c(l):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(d=>c(d)),this.options.preload&&this.options.preload.forEach(s=>c(s)),this.services.backendConnector.load(a,this.options.ns,s=>{!s&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),o(s)})}else o(null)}reloadResources(e,r,o){const l=No();return e||(e=this.languages),r||(r=this.options.ns),o||(o=ei),this.services.backendConnector.reload(e,r,a=>{l.resolve(),o(a)}),l}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&AO.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let r=0;r<this.languages.length;r++){const o=this.languages[r];if(!(["cimode","dev"].indexOf(o)>-1)&&this.store.hasLanguageSomeTranslations(o)){this.resolvedLanguage=o;break}}}changeLanguage(e,r){var o=this;this.isLanguageChangingTo=e;const l=No();this.emit("languageChanging",e);const a=d=>{this.language=d,this.languages=this.services.languageUtils.toResolveHierarchy(d),this.resolvedLanguage=void 0,this.setResolvedLanguage(d)},c=(d,u)=>{u?(a(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,l.resolve(function(){return o.t(...arguments)}),r&&r(d,function(){return o.t(...arguments)})},s=d=>{!e&&!d&&this.services.languageDetector&&(d=[]);const u=typeof d=="string"?d:this.services.languageUtils.getBestMatchFromCodes(d);u&&(this.language||a(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,h=>{c(h,u)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?s(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(s):this.services.languageDetector.detect(s):s(e),l}getFixedT(e,r,o){var l=this;const a=function(c,s){let d;if(typeof s!="object"){for(var u=arguments.length,h=new Array(u>2?u-2:0),p=2;p<u;p++)h[p-2]=arguments[p];d=l.options.overloadTranslationOptionHandler([c,s].concat(h))}else d={...s};d.lng=d.lng||a.lng,d.lngs=d.lngs||a.lngs,d.ns=d.ns||a.ns,d.keyPrefix=d.keyPrefix||o||a.keyPrefix;const y=l.options.keySeparator||".";let S;return d.keyPrefix&&Array.isArray(c)?S=c.map(g=>`${d.keyPrefix}${y}${g}`):S=d.keyPrefix?`${d.keyPrefix}${y}${c}`:c,l.t(S,d)};return typeof e=="string"?a.lng=e:a.lngs=e,a.ns=r,a.keyPrefix=o,a}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const o=r.lng||this.resolvedLanguage||this.languages[0],l=this.options?this.options.fallbackLng:!1,a=this.languages[this.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const c=(s,d)=>{const u=this.services.backendConnector.state[`${s}|${d}`];return u===-1||u===2};if(r.precheck){const s=r.precheck(this,c);if(s!==void 0)return s}return!!(this.hasResourceBundle(o,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||c(o,e)&&(!l||c(a,e)))}loadNamespaces(e,r){const o=No();return this.options.ns?(typeof e=="string"&&(e=[e]),e.forEach(l=>{this.options.ns.indexOf(l)<0&&this.options.ns.push(l)}),this.loadResources(l=>{o.resolve(),r&&r(l)}),o):(r&&r(),Promise.resolve())}loadLanguages(e,r){const o=No();typeof e=="string"&&(e=[e]);const l=this.options.preload||[],a=e.filter(c=>l.indexOf(c)<0);return a.length?(this.options.preload=l.concat(a),this.loadResources(c=>{o.resolve(),r&&r(c)}),o):(r&&r(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const r=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],o=this.services&&this.services.languageUtils||new Yu(np());return r.indexOf(o.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return new yl(e,r)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:ei;const o=e.forkResourceStore;o&&delete e.forkResourceStore;const l={...this.options,...e,isClone:!0},a=new yl(l);return(e.debug!==void 0||e.prefix!==void 0)&&(a.logger=a.logger.clone(e)),["store","services","language"].forEach(s=>{a[s]=this[s]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},o&&(a.store=new Ku(this.store.data,l),a.services.resourceStore=a.store),a.translator=new Qi(a.services,l),a.translator.on("*",function(s){for(var d=arguments.length,u=new Array(d>1?d-1:0),h=1;h<d;h++)u[h-1]=arguments[h];a.emit(s,...u)}),a.init(l,r),a.translator.options=l,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const gn=yl.createInstance();gn.createInstance=yl.createInstance;const f1=gn.createInstance;gn.dir;gn.init;gn.loadResources;gn.reloadResources;gn.use;gn.changeLanguage;gn.getFixedT;gn.t;gn.exists;gn.setDefaultNamespace;gn.hasLoadedNamespace;gn.loadNamespaces;gn.loadLanguages;function d1(){if(console&&console.warn){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];typeof e[0]=="string"&&(e[0]=`react-i18next:: ${e[0]}`),console.warn(...e)}}const rp={};function Ks(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];typeof e[0]=="string"&&rp[e[0]]||(typeof e[0]=="string"&&(rp[e[0]]=new Date),d1(...e))}const RO=(t,e)=>()=>{if(t.isInitialized)e();else{const r=()=>{setTimeout(()=>{t.off("initialized",r)},0),e()};t.on("initialized",r)}};function op(t,e,r){t.loadNamespaces(e,RO(t,r))}function lp(t,e,r,o){typeof r=="string"&&(r=[r]),r.forEach(l=>{t.options.ns.indexOf(l)<0&&t.options.ns.push(l)}),t.loadLanguages(e,RO(t,o))}function u1(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=e.languages[0],l=e.options?e.options.fallbackLng:!1,a=e.languages[e.languages.length-1];if(o.toLowerCase()==="cimode")return!0;const c=(s,d)=>{const u=e.services.backendConnector.state[`${s}|${d}`];return u===-1||u===2};return r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!c(e.isLanguageChangingTo,t)?!1:!!(e.hasResourceBundle(o,t)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||c(o,t)&&(!l||c(a,t)))}function p1(t,e){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return!e.languages||!e.languages.length?(Ks("i18n.languages were undefined or empty",e.languages),!0):e.options.ignoreJSONStructure!==void 0?e.hasLoadedNamespace(t,{lng:r.lng,precheck:(l,a)=>{if(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&l.services.backendConnector.backend&&l.isLanguageChangingTo&&!a(l.isLanguageChangingTo,t))return!1}}):u1(t,e,r)}const y1=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,h1={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},O1=t=>h1[t],b1=t=>t.replace(y1,O1);let m1={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:b1};function g1(){return m1}let j1;function x1(){return j1}const LO=U.createContext();class v1{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(r=>{this.usedNamespaces[r]||(this.usedNamespaces[r]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const w1=(t,e)=>{const r=U.useRef();return U.useEffect(()=>{r.current=e?r.current:t},[t,e]),r.current};function FO(t,e,r,o){return t.getFixedT(e,r,o)}function P1(t,e,r,o){return U.useCallback(FO(t,e,r,o),[t,e,r,o])}function S1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{i18n:r}=e,{i18n:o,defaultNS:l}=U.useContext(LO)||{},a=r||o||x1();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new v1),!a){Ks("You will need to pass in an i18next instance by using initReactI18next");const E=(_,N)=>typeof N=="string"?N:N&&typeof N=="object"&&typeof N.defaultValue=="string"?N.defaultValue:Array.isArray(_)?_[_.length-1]:_,k=[E,{},!1];return k.t=E,k.i18n={},k.ready=!1,k}a.options.react&&a.options.react.wait!==void 0&&Ks("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const c={...g1(),...a.options.react,...e},{useSuspense:s,keyPrefix:d}=c;let u=t||l||a.options&&a.options.defaultNS;u=typeof u=="string"?[u]:u||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(u);const h=(a.isInitialized||a.initializedStoreOnce)&&u.every(E=>p1(E,a,c)),p=P1(a,e.lng||null,c.nsMode==="fallback"?u:u[0],d),y=()=>p,S=()=>FO(a,e.lng||null,c.nsMode==="fallback"?u:u[0],d),[g,x]=U.useState(y);let P=u.join();e.lng&&(P=`${e.lng}${P}`);const m=w1(P),O=U.useRef(!0);U.useEffect(()=>{const{bindI18n:E,bindI18nStore:k}=c;O.current=!0,!h&&!s&&(e.lng?lp(a,e.lng,u,()=>{O.current&&x(S)}):op(a,u,()=>{O.current&&x(S)})),h&&m&&m!==P&&O.current&&x(S);function _(){O.current&&x(S)}return E&&a&&a.on(E,_),k&&a&&a.store.on(k,_),()=>{O.current=!1,E&&a&&E.split(" ").forEach(N=>a.off(N,_)),k&&a&&k.split(" ").forEach(N=>a.store.off(N,_))}},[a,P]);const b=U.useRef(!0);U.useEffect(()=>{O.current&&!b.current&&x(y),b.current=!1},[a,d]);const v=[g,a,h];if(v.t=g,v.i18n=a,v.ready=h,h||!h&&!s)return v;throw new Promise(E=>{e.lng?lp(a,e.lng,u,()=>E()):op(a,u,()=>E())})}function _1(t){let{i18n:e,defaultNS:r,children:o}=t;const l=U.useMemo(()=>({i18n:e,defaultNS:r}),[e,r]);return U.createElement(LO.Provider,{value:l},o)}/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},hl.apply(this,arguments)}var Lt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Lt||(Lt={}));const ip="popstate";function E1(t){t===void 0&&(t={});function e(o,l){let{pathname:a,search:c,hash:s}=o.location;return Qs("",{pathname:a,search:c,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(o,l){return typeof l=="string"?l:Yi(l)}return k1(e,r,null,t)}function qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function sd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function I1(){return Math.random().toString(36).substr(2,8)}function ap(t,e){return{usr:t.state,key:t.key,idx:e}}function Qs(t,e,r,o){return r===void 0&&(r=null),hl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Oo(e):e,{state:r,key:e&&e.key||o||I1()})}function Yi(t){let{pathname:e="/",search:r="",hash:o=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function Oo(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let o=t.indexOf("?");o>=0&&(e.search=t.substr(o),t=t.substr(0,o)),t&&(e.pathname=t)}return e}function k1(t,e,r,o){o===void 0&&(o={});let{window:l=document.defaultView,v5Compat:a=!1}=o,c=l.history,s=Lt.Pop,d=null,u=h();u==null&&(u=0,c.replaceState(hl({},c.state,{idx:u}),""));function h(){return(c.state||{idx:null}).idx}function p(){s=Lt.Pop;let P=h(),m=P==null?null:P-u;u=P,d&&d({action:s,location:x.location,delta:m})}function y(P,m){s=Lt.Push;let O=Qs(x.location,P,m);r&&r(O,P),u=h()+1;let b=ap(O,u),v=x.createHref(O);try{c.pushState(b,"",v)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;l.location.assign(v)}a&&d&&d({action:s,location:x.location,delta:1})}function S(P,m){s=Lt.Replace;let O=Qs(x.location,P,m);r&&r(O,P),u=h();let b=ap(O,u),v=x.createHref(O);c.replaceState(b,"",v),a&&d&&d({action:s,location:x.location,delta:0})}function g(P){let m=l.location.origin!=="null"?l.location.origin:l.location.href,O=typeof P=="string"?P:Yi(P);return qe(m,"No window.location.(origin|href) available to create URL for href: "+O),new URL(O,m)}let x={get action(){return s},get location(){return t(l,c)},listen(P){if(d)throw new Error("A history only accepts one active listener");return l.addEventListener(ip,p),d=P,()=>{l.removeEventListener(ip,p),d=null}},createHref(P){return e(l,P)},createURL:g,encodeLocation(P){let m=g(P);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:y,replace:S,go(P){return c.go(P)}};return x}var cp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(cp||(cp={}));function N1(t,e,r){r===void 0&&(r="/");let o=typeof e=="string"?Oo(e):e,l=fo(o.pathname||"/",r);if(l==null)return null;let a=MO(t);C1(a);let c=null;for(let s=0;c==null&&s<a.length;++s)c=$1(a[s],U1(l));return c}function MO(t,e,r,o){e===void 0&&(e=[]),r===void 0&&(r=[]),o===void 0&&(o="");let l=(a,c,s)=>{let d={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:c,route:a};d.relativePath.startsWith("/")&&(qe(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let u=Wt([o,d.relativePath]),h=r.concat(d);a.children&&a.children.length>0&&(qe(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),MO(a.children,e,h,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:D1(u,a.index),routesMeta:h})};return t.forEach((a,c)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))l(a,c);else for(let d of DO(a.path))l(a,c,d)}),e}function DO(t){let e=t.split("/");if(e.length===0)return[];let[r,...o]=e,l=r.endsWith("?"),a=r.replace(/\?$/,"");if(o.length===0)return l?[a,""]:[a];let c=DO(o.join("/")),s=[];return s.push(...c.map(d=>d===""?a:[a,d].join("/"))),l&&s.push(...c),s.map(d=>t.startsWith("/")&&d===""?"/":d)}function C1(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:B1(e.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const T1=/^:[\w-]+$/,A1=3,R1=2,L1=1,F1=10,M1=-2,sp=t=>t==="*";function D1(t,e){let r=t.split("/"),o=r.length;return r.some(sp)&&(o+=M1),e&&(o+=R1),r.filter(l=>!sp(l)).reduce((l,a)=>l+(T1.test(a)?A1:a===""?L1:F1),o)}function B1(t,e){return t.length===e.length&&t.slice(0,-1).every((o,l)=>o===e[l])?t[t.length-1]-e[e.length-1]:0}function $1(t,e){let{routesMeta:r}=t,o={},l="/",a=[];for(let c=0;c<r.length;++c){let s=r[c],d=c===r.length-1,u=l==="/"?e:e.slice(l.length)||"/",h=Ys({path:s.relativePath,caseSensitive:s.caseSensitive,end:d},u);if(!h)return null;Object.assign(o,h.params);let p=s.route;a.push({params:o,pathname:Wt([l,h.pathname]),pathnameBase:G1(Wt([l,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(l=Wt([l,h.pathnameBase]))}return a}function Ys(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,o]=z1(t.path,t.caseSensitive,t.end),l=e.match(r);if(!l)return null;let a=l[0],c=a.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:o.reduce((u,h,p)=>{let{paramName:y,isOptional:S}=h;if(y==="*"){let x=s[p]||"";c=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const g=s[p];return S&&!g?u[y]=void 0:u[y]=H1(g||"",y),u},{}),pathname:a,pathnameBase:c,pattern:t}}function z1(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),sd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let o=[],l="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,s,d)=>(o.push({paramName:s,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(o.push({paramName:"*"}),l+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":t!==""&&t!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),o]}function U1(t){try{return decodeURI(t)}catch(e){return sd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function H1(t,e){try{return decodeURIComponent(t)}catch(r){return sd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function fo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,o=t.charAt(r);return o&&o!=="/"?null:t.slice(r)||"/"}function q1(t,e){e===void 0&&(e="/");let{pathname:r,search:o="",hash:l=""}=typeof t=="string"?Oo(t):t;return{pathname:r?r.startsWith("/")?r:W1(r,e):e,search:J1(o),hash:X1(l)}}function W1(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function Xc(t,e,r,o){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function V1(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function BO(t,e){let r=V1(t);return e?r.map((o,l)=>l===t.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function $O(t,e,r,o){o===void 0&&(o=!1);let l;typeof t=="string"?l=Oo(t):(l=hl({},t),qe(!l.pathname||!l.pathname.includes("?"),Xc("?","pathname","search",l)),qe(!l.pathname||!l.pathname.includes("#"),Xc("#","pathname","hash",l)),qe(!l.search||!l.search.includes("#"),Xc("#","search","hash",l)));let a=t===""||l.pathname==="",c=a?"/":l.pathname,s;if(c==null)s=r;else{let p=e.length-1;if(!o&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),p-=1;l.pathname=y.join("/")}s=p>=0?e[p]:"/"}let d=q1(l,s),u=c&&c!=="/"&&c.endsWith("/"),h=(a||c===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(u||h)&&(d.pathname+="/"),d}const Wt=t=>t.join("/").replace(/\/\/+/g,"/"),G1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),J1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,X1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function K1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const zO=["post","put","patch","delete"];new Set(zO);const Q1=["get",...zO];new Set(Q1);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ol(){return Ol=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Ol.apply(this,arguments)}const ka=U.createContext(null),UO=U.createContext(null),nr=U.createContext(null),Na=U.createContext(null),Sr=U.createContext({outlet:null,matches:[],isDataRoute:!1}),HO=U.createContext(null);function Y1(t,e){let{relative:r}=e===void 0?{}:e;kl()||qe(!1);let{basename:o,navigator:l}=U.useContext(nr),{hash:a,pathname:c,search:s}=Ca(t,{relative:r}),d=c;return o!=="/"&&(d=c==="/"?o:Wt([o,c])),l.createHref({pathname:d,search:s,hash:a})}function kl(){return U.useContext(Na)!=null}function bo(){return kl()||qe(!1),U.useContext(Na).location}function qO(t){U.useContext(nr).static||U.useLayoutEffect(t)}function WO(){let{isDataRoute:t}=U.useContext(Sr);return t?dv():Z1()}function Z1(){kl()||qe(!1);let t=U.useContext(ka),{basename:e,future:r,navigator:o}=U.useContext(nr),{matches:l}=U.useContext(Sr),{pathname:a}=bo(),c=JSON.stringify(BO(l,r.v7_relativeSplatPath)),s=U.useRef(!1);return qO(()=>{s.current=!0}),U.useCallback(function(u,h){if(h===void 0&&(h={}),!s.current)return;if(typeof u=="number"){o.go(u);return}let p=$O(u,JSON.parse(c),a,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:Wt([e,p.pathname])),(h.replace?o.replace:o.push)(p,h.state,h)},[e,o,c,a,t])}function Ca(t,e){let{relative:r}=e===void 0?{}:e,{future:o}=U.useContext(nr),{matches:l}=U.useContext(Sr),{pathname:a}=bo(),c=JSON.stringify(BO(l,o.v7_relativeSplatPath));return U.useMemo(()=>$O(t,JSON.parse(c),a,r==="path"),[t,c,a,r])}function ev(t,e){return nv(t,e)}function nv(t,e,r,o){kl()||qe(!1);let{navigator:l}=U.useContext(nr),{matches:a}=U.useContext(Sr),c=a[a.length-1],s=c?c.params:{};c&&c.pathname;let d=c?c.pathnameBase:"/";c&&c.route;let u=bo(),h;if(e){var p;let P=typeof e=="string"?Oo(e):e;d==="/"||(p=P.pathname)!=null&&p.startsWith(d)||qe(!1),h=P}else h=u;let y=h.pathname||"/",S=d==="/"?y:y.slice(d.length)||"/",g=N1(t,{pathname:S}),x=iv(g&&g.map(P=>Object.assign({},P,{params:Object.assign({},s,P.params),pathname:Wt([d,l.encodeLocation?l.encodeLocation(P.pathname).pathname:P.pathname]),pathnameBase:P.pathnameBase==="/"?d:Wt([d,l.encodeLocation?l.encodeLocation(P.pathnameBase).pathname:P.pathnameBase])})),a,r,o);return e&&x?U.createElement(Na.Provider,{value:{location:Ol({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Lt.Pop}},x):x}function tv(){let t=fv(),e=K1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),r?U.createElement("pre",{style:l},r):null,null)}const rv=U.createElement(tv,null);class ov extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error!==void 0?U.createElement(Sr.Provider,{value:this.props.routeContext},U.createElement(HO.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lv(t){let{routeContext:e,match:r,children:o}=t,l=U.useContext(ka);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),U.createElement(Sr.Provider,{value:e},o)}function iv(t,e,r,o){var l;if(e===void 0&&(e=[]),r===void 0&&(r=null),o===void 0&&(o=null),t==null){var a;if((a=r)!=null&&a.errors)t=r.matches;else return null}let c=t,s=(l=r)==null?void 0:l.errors;if(s!=null){let h=c.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id]));h>=0||qe(!1),c=c.slice(0,Math.min(c.length,h+1))}let d=!1,u=-1;if(r&&o&&o.v7_partialHydration)for(let h=0;h<c.length;h++){let p=c[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=h),p.route.id){let{loaderData:y,errors:S}=r,g=p.route.loader&&y[p.route.id]===void 0&&(!S||S[p.route.id]===void 0);if(p.route.lazy||g){d=!0,u>=0?c=c.slice(0,u+1):c=[c[0]];break}}}return c.reduceRight((h,p,y)=>{let S,g=!1,x=null,P=null;r&&(S=s&&p.route.id?s[p.route.id]:void 0,x=p.route.errorElement||rv,d&&(u<0&&y===0?(uv("route-fallback",!1),g=!0,P=null):u===y&&(g=!0,P=p.route.hydrateFallbackElement||null)));let m=e.concat(c.slice(0,y+1)),O=()=>{let b;return S?b=x:g?b=P:p.route.Component?b=U.createElement(p.route.Component,null):p.route.element?b=p.route.element:b=h,U.createElement(lv,{match:p,routeContext:{outlet:h,matches:m,isDataRoute:r!=null},children:b})};return r&&(p.route.ErrorBoundary||p.route.errorElement||y===0)?U.createElement(ov,{location:r.location,revalidation:r.revalidation,component:x,error:S,children:O(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):O()},null)}var VO=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(VO||{}),Zi=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Zi||{});function av(t){let e=U.useContext(ka);return e||qe(!1),e}function cv(t){let e=U.useContext(UO);return e||qe(!1),e}function sv(t){let e=U.useContext(Sr);return e||qe(!1),e}function GO(t){let e=sv(),r=e.matches[e.matches.length-1];return r.route.id||qe(!1),r.route.id}function fv(){var t;let e=U.useContext(HO),r=cv(Zi.UseRouteError),o=GO(Zi.UseRouteError);return e!==void 0?e:(t=r.errors)==null?void 0:t[o]}function dv(){let{router:t}=av(VO.UseNavigateStable),e=GO(Zi.UseNavigateStable),r=U.useRef(!1);return qO(()=>{r.current=!0}),U.useCallback(function(l,a){a===void 0&&(a={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,Ol({fromRouteId:e},a)))},[t,e])}const fp={};function uv(t,e,r){!e&&!fp[t]&&(fp[t]=!0)}function JO(t){qe(!1)}function pv(t){let{basename:e="/",children:r=null,location:o,navigationType:l=Lt.Pop,navigator:a,static:c=!1,future:s}=t;kl()&&qe(!1);let d=e.replace(/^\/*/,"/"),u=U.useMemo(()=>({basename:d,navigator:a,static:c,future:Ol({v7_relativeSplatPath:!1},s)}),[d,s,a,c]);typeof o=="string"&&(o=Oo(o));let{pathname:h="/",search:p="",hash:y="",state:S=null,key:g="default"}=o,x=U.useMemo(()=>{let P=fo(h,d);return P==null?null:{location:{pathname:P,search:p,hash:y,state:S,key:g},navigationType:l}},[d,h,p,y,S,g,l]);return x==null?null:U.createElement(nr.Provider,{value:u},U.createElement(Na.Provider,{children:r,value:x}))}function yv(t){let{children:e,location:r}=t;return ev(Zs(e),r)}new Promise(()=>{});function Zs(t,e){e===void 0&&(e=[]);let r=[];return U.Children.forEach(t,(o,l)=>{if(!U.isValidElement(o))return;let a=[...e,l];if(o.type===U.Fragment){r.push.apply(r,Zs(o.props.children,a));return}o.type!==JO&&qe(!1),!o.props.index||!o.props.children||qe(!1);let c={id:o.props.id||a.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(c.children=Zs(o.props.children,a)),r.push(c)}),r}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ea(){return ea=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},ea.apply(this,arguments)}function XO(t,e){if(t==null)return{};var r={},o=Object.keys(t),l,a;for(a=0;a<o.length;a++)l=o[a],!(e.indexOf(l)>=0)&&(r[l]=t[l]);return r}function hv(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ov(t,e){return t.button===0&&(!e||e==="_self")&&!hv(t)}const bv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],mv=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],gv="6";try{window.__reactRouterVersion=gv}catch{}const jv=U.createContext({isTransitioning:!1}),xv="startTransition",dp=Ig[xv];function vv(t){let{basename:e,children:r,future:o,window:l}=t,a=U.useRef();a.current==null&&(a.current=E1({window:l,v5Compat:!0}));let c=a.current,[s,d]=U.useState({action:c.action,location:c.location}),{v7_startTransition:u}=o||{},h=U.useCallback(p=>{u&&dp?dp(()=>d(p)):d(p)},[d,u]);return U.useLayoutEffect(()=>c.listen(h),[c,h]),U.createElement(pv,{basename:e,children:r,location:s.location,navigationType:s.action,navigator:c,future:o})}const wv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sv=U.forwardRef(function(e,r){let{onClick:o,relative:l,reloadDocument:a,replace:c,state:s,target:d,to:u,preventScrollReset:h,unstable_viewTransition:p}=e,y=XO(e,bv),{basename:S}=U.useContext(nr),g,x=!1;if(typeof u=="string"&&Pv.test(u)&&(g=u,wv))try{let b=new URL(window.location.href),v=u.startsWith("//")?new URL(b.protocol+u):new URL(u),E=fo(v.pathname,S);v.origin===b.origin&&E!=null?u=E+v.search+v.hash:x=!0}catch{}let P=Y1(u,{relative:l}),m=Ev(u,{replace:c,state:s,target:d,preventScrollReset:h,relative:l,unstable_viewTransition:p});function O(b){o&&o(b),b.defaultPrevented||m(b)}return U.createElement("a",ea({},y,{href:g||P,onClick:x||a?o:O,ref:r,target:d}))}),up=U.forwardRef(function(e,r){let{"aria-current":o="page",caseSensitive:l=!1,className:a="",end:c=!1,style:s,to:d,unstable_viewTransition:u,children:h}=e,p=XO(e,mv),y=Ca(d,{relative:p.relative}),S=bo(),g=U.useContext(UO),{navigator:x,basename:P}=U.useContext(nr),m=g!=null&&Iv(y)&&u===!0,O=x.encodeLocation?x.encodeLocation(y).pathname:y.pathname,b=S.pathname,v=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;l||(b=b.toLowerCase(),v=v?v.toLowerCase():null,O=O.toLowerCase()),v&&P&&(v=fo(v,P)||v);const E=O!=="/"&&O.endsWith("/")?O.length-1:O.length;let k=b===O||!c&&b.startsWith(O)&&b.charAt(E)==="/",_=v!=null&&(v===O||!c&&v.startsWith(O)&&v.charAt(O.length)==="/"),N={isActive:k,isPending:_,isTransitioning:m},D=k?o:void 0,A;typeof a=="function"?A=a(N):A=[a,k?"active":null,_?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let W=typeof s=="function"?s(N):s;return U.createElement(Sv,ea({},p,{"aria-current":D,className:A,ref:r,style:W,to:d,unstable_viewTransition:u}),typeof h=="function"?h(N):h)});var ef;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ef||(ef={}));var pp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(pp||(pp={}));function _v(t){let e=U.useContext(ka);return e||qe(!1),e}function Ev(t,e){let{target:r,replace:o,state:l,preventScrollReset:a,relative:c,unstable_viewTransition:s}=e===void 0?{}:e,d=WO(),u=bo(),h=Ca(t,{relative:c});return U.useCallback(p=>{if(Ov(p,r)){p.preventDefault();let y=o!==void 0?o:Yi(u)===Yi(h);d(t,{replace:y,state:l,preventScrollReset:a,relative:c,unstable_viewTransition:s})}},[u,d,h,o,l,r,t,a,c,s])}function Iv(t,e){e===void 0&&(e={});let r=U.useContext(jv);r==null&&qe(!1);let{basename:o}=_v(ef.useViewTransitionState),l=Ca(t,{relative:e.relative});if(!r.isTransitioning)return!1;let a=fo(r.currentLocation.pathname,o)||r.currentLocation.pathname,c=fo(r.nextLocation.pathname,o)||r.nextLocation.pathname;return Ys(l.pathname,c)!=null||Ys(l.pathname,a)!=null}const kv=/\.([a-z]{2})\.mdx?$/;function Nv(t){const e=t.match(kv);return e?e[1]:"en"}const Cv=/\.([a-z]{2})\.mdx?$/;function gi(t){let e=t.startsWith("/")?t:"/"+t;const r=e.match(Cv);return r&&(e="/"+r[1]+e),e=e.replace(/(\/README)?(\.[a-z]{2})?\.mdx?$/,"/").toLocaleLowerCase(),e}const Kc=/^\/([a-z]{2})\//;function Tv(t,e){return t.match(Kc)?e==="en"?t.replace(Kc,"/"):t.replace(Kc,"/"+e+"/"):e==="en"?t:"/"+e+t}function Av({docs:t,languages:e}){const r=bo(),o=WO(),{i18n:l}=S1();U.useEffect(()=>{const s=Tv(r.pathname,l.language);s!==r.pathname&&o(s)},[l.language,r.pathname,o]);const a=t.filter(s=>Nv(s.filepath)===l.language).map(s=>{var d,u;return{title:s.title,path:gi(s.filepath),group:(d=s.frontmatter)==null?void 0:d.group,order:(u=s.frontmatter)==null?void 0:u.order}}).sort((s,d)=>typeof s.order=="number"&&typeof d.order=="number"?s.order-d.order:typeof s.order=="number"?-1:typeof d.order=="number"?1:s.path.localeCompare(d.path)),c=[];return a.forEach(s=>{s.group&&!c.includes(s.group)&&c.push(s.group)}),n.jsx("aside",{className:"doc-ui-site-nav",children:n.jsxs("nav",{className:"doc-ui-site-nav-inner",children:[n.jsx("div",{className:"doc-ui-site-settings",children:e&&n.jsx("select",{value:l.language,onChange:s=>l.changeLanguage(s.target.value),children:e.map(s=>n.jsx("option",{value:s.code,children:s.name},s.code))})}),a.filter(s=>!s.group).map(s=>n.jsx(up,{className:"doc-ui-site-nav-item",to:gi(s.path),end:!0,children:s.title},s.path)),c.map(s=>n.jsxs("div",{className:"doc-ui-site-nav-group",children:[n.jsx("div",{className:"doc-ui-site-nav-group-title",children:s}),a.filter(d=>s===d.group).map(d=>n.jsx(up,{className:"doc-ui-site-nav-item",to:gi(d.path),end:!0,children:d.title},d.path))]},s))]})})}var Rv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function KO(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=Rv(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:en("bi","bi-check-circle",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),n.jsx("path",{d:"m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"})]}))}var Lv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function Fv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=Lv(t,["className","size","color"]);return n.jsx("svg",Object.assign({},l,{className:en("bi","bi-copy",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:n.jsx("path",{fillRule:"evenodd",d:"M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"})}))}var Mv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function Dv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=Mv(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:en("bi","bi-exclamation-circle",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),n.jsx("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"})]}))}var Bv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function $v(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=Bv(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:en("bi","bi-info-circle",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),n.jsx("path",{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"})]}))}var zv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function Uv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=zv(t,["className","size","color"]);return n.jsx("svg",Object.assign({},l,{className:en("bi","bi-laptop",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:n.jsx("path",{d:"M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"})}))}var Hv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function qv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=Hv(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:en("bi","bi-phone",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"}),n.jsx("path",{d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"})]}))}var Wv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function Vv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=Wv(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:en("bi","bi-tablet",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"}),n.jsx("path",{d:"M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"})]}))}var Gv=function(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)e.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(r[o[l]]=t[o[l]]);return r};function Jv(t){var{className:e,size:r="1em",color:o="currentColor"}=t,l=Gv(t,["className","size","color"]);return n.jsxs("svg",Object.assign({},l,{className:en("bi","bi-x-circle",e),viewBox:"0 0 16 16",width:r,height:r,fill:o,children:[n.jsx("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),n.jsx("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"})]}))}function Xv({type:t="info",children:e}){const r=U.useMemo(()=>{switch(t){case"error":return n.jsx(Jv,{});case"success":return n.jsx(KO,{});case"warning":return n.jsx(Dv,{});default:return n.jsx($v,{})}},[t]);return n.jsxs("div",{className:en("doc-ui-alert","doc-ui-alert-"+t),children:[n.jsx("div",{className:"doc-ui-alert-icon",children:r}),n.jsx("div",{className:"doc-ui-alert-main",children:e})]})}function QO(t){var e,r,o="";if(typeof t=="string"||typeof t=="number")o+=t;else if(typeof t=="object")if(Array.isArray(t)){var l=t.length;for(e=0;e<l;e++)t[e]&&(r=QO(t[e]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r);return o}function YO(){for(var t,e,r=0,o="",l=arguments.length;r<l;r++)(t=arguments[r])&&(e=QO(t))&&(o&&(o+=" "),o+=e);return o}var Kv=Object.create,Ta=Object.defineProperty,Qv=Object.defineProperties,Yv=Object.getOwnPropertyDescriptor,Zv=Object.getOwnPropertyDescriptors,ZO=Object.getOwnPropertyNames,na=Object.getOwnPropertySymbols,e0=Object.getPrototypeOf,fd=Object.prototype.hasOwnProperty,eb=Object.prototype.propertyIsEnumerable,yp=(t,e,r)=>e in t?Ta(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ft=(t,e)=>{for(var r in e||(e={}))fd.call(e,r)&&yp(t,r,e[r]);if(na)for(var r of na(e))eb.call(e,r)&&yp(t,r,e[r]);return t},Aa=(t,e)=>Qv(t,Zv(e)),nb=(t,e)=>{var r={};for(var o in t)fd.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&na)for(var o of na(t))e.indexOf(o)<0&&eb.call(t,o)&&(r[o]=t[o]);return r},n0=(t,e)=>function(){return e||(0,t[ZO(t)[0]])((e={exports:{}}).exports,e),e.exports},t0=(t,e)=>{for(var r in e)Ta(t,r,{get:e[r],enumerable:!0})},r0=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of ZO(e))!fd.call(t,l)&&l!==r&&Ta(t,l,{get:()=>e[l],enumerable:!(o=Yv(e,l))||o.enumerable});return t},o0=(t,e,r)=>(r=t!=null?Kv(e0(t)):{},r0(e||!t||!t.__esModule?Ta(r,"default",{value:t,enumerable:!0}):r,t)),l0=n0({"../../node_modules/.pnpm/prismjs@1.29.0_patch_hash=vrxx3pzkik6jpmgpayxfjunetu/node_modules/prismjs/prism.js"(t,e){var r=function(){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,l=0,a={},c={util:{encode:function g(x){return x instanceof s?new s(x.type,g(x.content),x.alias):Array.isArray(x)?x.map(g):x.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(g){return Object.prototype.toString.call(g).slice(8,-1)},objId:function(g){return g.__id||Object.defineProperty(g,"__id",{value:++l}),g.__id},clone:function g(x,P){P=P||{};var m,O;switch(c.util.type(x)){case"Object":if(O=c.util.objId(x),P[O])return P[O];m={},P[O]=m;for(var b in x)x.hasOwnProperty(b)&&(m[b]=g(x[b],P));return m;case"Array":return O=c.util.objId(x),P[O]?P[O]:(m=[],P[O]=m,x.forEach(function(v,E){m[E]=g(v,P)}),m);default:return x}},getLanguage:function(g){for(;g;){var x=o.exec(g.className);if(x)return x[1].toLowerCase();g=g.parentElement}return"none"},setLanguage:function(g,x){g.className=g.className.replace(RegExp(o,"gi"),""),g.classList.add("language-"+x)},isActive:function(g,x,P){for(var m="no-"+x;g;){var O=g.classList;if(O.contains(x))return!0;if(O.contains(m))return!1;g=g.parentElement}return!!P}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(g,x){var P=c.util.clone(c.languages[g]);for(var m in x)P[m]=x[m];return P},insertBefore:function(g,x,P,m){m=m||c.languages;var O=m[g],b={};for(var v in O)if(O.hasOwnProperty(v)){if(v==x)for(var E in P)P.hasOwnProperty(E)&&(b[E]=P[E]);P.hasOwnProperty(v)||(b[v]=O[v])}var k=m[g];return m[g]=b,c.languages.DFS(c.languages,function(_,N){N===k&&_!=g&&(this[_]=b)}),b},DFS:function g(x,P,m,O){O=O||{};var b=c.util.objId;for(var v in x)if(x.hasOwnProperty(v)){P.call(x,v,x[v],m||v);var E=x[v],k=c.util.type(E);k==="Object"&&!O[b(E)]?(O[b(E)]=!0,g(E,P,null,O)):k==="Array"&&!O[b(E)]&&(O[b(E)]=!0,g(E,P,v,O))}}},plugins:{},highlight:function(g,x,P){var m={code:g,grammar:x,language:P};if(c.hooks.run("before-tokenize",m),!m.grammar)throw new Error('The language "'+m.language+'" has no grammar.');return m.tokens=c.tokenize(m.code,m.grammar),c.hooks.run("after-tokenize",m),s.stringify(c.util.encode(m.tokens),m.language)},tokenize:function(g,x){var P=x.rest;if(P){for(var m in P)x[m]=P[m];delete x.rest}var O=new h;return p(O,O.head,g),u(g,O,x,O.head,0),S(O)},hooks:{all:{},add:function(g,x){var P=c.hooks.all;P[g]=P[g]||[],P[g].push(x)},run:function(g,x){var P=c.hooks.all[g];if(!(!P||!P.length))for(var m=0,O;O=P[m++];)O(x)}},Token:s};function s(g,x,P,m){this.type=g,this.content=x,this.alias=P,this.length=(m||"").length|0}s.stringify=function g(x,P){if(typeof x=="string")return x;if(Array.isArray(x)){var m="";return x.forEach(function(k){m+=g(k,P)}),m}var O={type:x.type,content:g(x.content,P),tag:"span",classes:["token",x.type],attributes:{},language:P},b=x.alias;b&&(Array.isArray(b)?Array.prototype.push.apply(O.classes,b):O.classes.push(b)),c.hooks.run("wrap",O);var v="";for(var E in O.attributes)v+=" "+E+'="'+(O.attributes[E]||"").replace(/"/g,"&quot;")+'"';return"<"+O.tag+' class="'+O.classes.join(" ")+'"'+v+">"+O.content+"</"+O.tag+">"};function d(g,x,P,m){g.lastIndex=x;var O=g.exec(P);if(O&&m&&O[1]){var b=O[1].length;O.index+=b,O[0]=O[0].slice(b)}return O}function u(g,x,P,m,O,b){for(var v in P)if(!(!P.hasOwnProperty(v)||!P[v])){var E=P[v];E=Array.isArray(E)?E:[E];for(var k=0;k<E.length;++k){if(b&&b.cause==v+","+k)return;var _=E[k],N=_.inside,D=!!_.lookbehind,A=!!_.greedy,W=_.alias;if(A&&!_.pattern.global){var J=_.pattern.toString().match(/[imsuy]*$/)[0];_.pattern=RegExp(_.pattern.source,J+"g")}for(var ae=_.pattern||_,ie=m.next,xe=O;ie!==x.tail&&!(b&&xe>=b.reach);xe+=ie.value.length,ie=ie.next){var Pe=ie.value;if(x.length>g.length)return;if(!(Pe instanceof s)){var _e=1,z;if(A){if(z=d(ae,xe,g,D),!z||z.index>=g.length)break;var Oe=z.index,Z=z.index+z[0].length,Y=xe;for(Y+=ie.value.length;Oe>=Y;)ie=ie.next,Y+=ie.value.length;if(Y-=ie.value.length,xe=Y,ie.value instanceof s)continue;for(var se=ie;se!==x.tail&&(Y<Z||typeof se.value=="string");se=se.next)_e++,Y+=se.value.length;_e--,Pe=g.slice(xe,Y),z.index-=xe}else if(z=d(ae,0,Pe,D),!z)continue;var Oe=z.index,Re=z[0],Le=Pe.slice(0,Oe),F=Pe.slice(Oe+Re.length),$=xe+Pe.length;b&&$>b.reach&&(b.reach=$);var V=ie.prev;Le&&(V=p(x,V,Le),xe+=Le.length),y(x,V,_e);var X=new s(v,N?c.tokenize(Re,N):Re,W,Re);if(ie=p(x,V,X),F&&p(x,ie,F),_e>1){var C={cause:v+","+k,reach:$};u(g,x,P,ie.prev,xe,C),b&&C.reach>b.reach&&(b.reach=C.reach)}}}}}}function h(){var g={value:null,prev:null,next:null},x={value:null,prev:g,next:null};g.next=x,this.head=g,this.tail=x,this.length=0}function p(g,x,P){var m=x.next,O={value:P,prev:x,next:m};return x.next=O,m.prev=O,g.length++,O}function y(g,x,P){for(var m=x.next,O=0;O<P&&m!==g.tail;O++)m=m.next;x.next=m,m.prev=x,g.length-=O}function S(g){for(var x=[],P=g.head.next;P!==g.tail;)x.push(P.value),P=P.next;return x}return c}();e.exports=r,r.default=r}}),H=o0(l0());H.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},H.languages.markup.tag.inside["attr-value"].inside.entity=H.languages.markup.entity,H.languages.markup.doctype.inside["internal-subset"].inside=H.languages.markup,H.hooks.add("wrap",function(t){t.type==="entity"&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(H.languages.markup.tag,"addInlined",{value:function(t,o){var r={},r=(r["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:H.languages[o]},r.cdata=/^<!\[CDATA\[|\]\]>$/i,{"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}}),o=(r["language-"+o]={pattern:/[\s\S]+/,inside:H.languages[o]},{});o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:r},H.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(H.languages.markup.tag,"addAttribute",{value:function(t,e){H.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:H.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),H.languages.html=H.languages.markup,H.languages.mathml=H.languages.markup,H.languages.svg=H.languages.markup,H.languages.xml=H.languages.extend("markup",{}),H.languages.ssml=H.languages.xml,H.languages.atom=H.languages.xml,H.languages.rss=H.languages.xml,function(t){var e={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},r=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|0[0-7]{0,2}|[123][0-7]{2}|c[a-zA-Z]|.)/,o="(?:[^\\\\-]|"+r.source+")",o=RegExp(o+"-"+o),l={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};t.languages.regex={"char-class":{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"char-class-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"char-class-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:o,inside:{escape:r,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":e,"char-set":{pattern:/\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},escape:r}},"special-escape":e,"char-set":{pattern:/\.|\\[wsd]|\\p\{[^{}]+\}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":l}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:r,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":l}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{\d+(?:,\d*)?\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}}}(H),H.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},H.languages.javascript=H.languages.extend("clike",{"class-name":[H.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),H.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,H.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:H.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:H.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:H.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:H.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:H.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),H.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:H.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),H.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),H.languages.markup&&(H.languages.markup.tag.addInlined("script","javascript"),H.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),H.languages.js=H.languages.javascript,H.languages.actionscript=H.languages.extend("javascript",{keyword:/\b(?:as|break|case|catch|class|const|default|delete|do|dynamic|each|else|extends|final|finally|for|function|get|if|implements|import|in|include|instanceof|interface|internal|is|namespace|native|new|null|override|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|use|var|void|while|with)\b/,operator:/\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/}),H.languages.actionscript["class-name"].alias="function",delete H.languages.actionscript.parameter,delete H.languages.actionscript["literal-property"],H.languages.markup&&H.languages.insertBefore("actionscript","string",{xml:{pattern:/(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,lookbehind:!0,inside:H.languages.markup}}),function(t){var e=/#(?!\{).+/,r={pattern:/#\{[^}]+\}/,alias:"variable"};t.languages.coffeescript=t.languages.extend("javascript",{comment:e,string:[{pattern:/'(?:\\[\s\S]|[^\\'])*'/,greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,greedy:!0,inside:{interpolation:r}}],keyword:/\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,"class-member":{pattern:/@(?!\d)\w+/,alias:"variable"}}),t.languages.insertBefore("coffeescript","comment",{"multiline-comment":{pattern:/###[\s\S]+?###/,alias:"comment"},"block-regex":{pattern:/\/{3}[\s\S]*?\/{3}/,alias:"regex",inside:{comment:e,interpolation:r}}}),t.languages.insertBefore("coffeescript","string",{"inline-javascript":{pattern:/`(?:\\[\s\S]|[^\\`])*`/,inside:{delimiter:{pattern:/^`|`$/,alias:"punctuation"},script:{pattern:/[\s\S]+/,alias:"language-javascript",inside:t.languages.javascript}}},"multiline-string":[{pattern:/'''[\s\S]*?'''/,greedy:!0,alias:"string"},{pattern:/"""[\s\S]*?"""/,greedy:!0,alias:"string",inside:{interpolation:r}}]}),t.languages.insertBefore("coffeescript","keyword",{property:/(?!\d)\w+(?=\s*:(?!:))/}),delete t.languages.coffeescript["template-string"],t.languages.coffee=t.languages.coffeescript}(H),function(t){var e=t.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:arg|arguments|param)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(e,"addSupport",{value:function(r,o){(r=typeof r=="string"?[r]:r).forEach(function(l){var a=function(p){p.inside||(p.inside={}),p.inside.rest=o},c="doc-comment";if(s=t.languages[l]){var s,d=s[c];if((d=d||(s=t.languages.insertBefore(l,"comment",{"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}}))[c])instanceof RegExp&&(d=s[c]={pattern:d}),Array.isArray(d))for(var u=0,h=d.length;u<h;u++)d[u]instanceof RegExp&&(d[u]={pattern:d[u]}),a(d[u]);else a(d)}})}}),e.addSupport(["java","javascript","php"],e)}(H),function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,e=(t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css,t.languages.markup);e&&(e.tag.addInlined("style","css"),e.tag.addAttribute("style","css"))}(H),function(t){var e=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,e=(t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:e={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+e.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[e,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=e,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}}),{pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0}),r={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:e,number:r,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:e,number:r})}(H),function(t){var e=/[*&][^\s[\]{},]+/,r=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,o="(?:"+r.source+"(?:[ 	]+"+e.source+")?|"+e.source+"(?:[ 	]+"+r.source+")?)",l=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),a=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function c(s,d){d=(d||"").replace(/m/g,"")+"m";var u=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<value>>/g,function(){return s});return RegExp(u,d)}t.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return o})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return o}).replace(/<<key>>/g,function(){return"(?:"+l+"|"+a+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:c(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:c(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:c(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:c(a),lookbehind:!0,greedy:!0},number:{pattern:c(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:r,important:e,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml}(H),function(t){var e=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function r(u){return u=u.replace(/<inner>/g,function(){return e}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var o=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,l=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return o}),a=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source,c=(t.languages.markdown=t.languages.extend("markup",{}),t.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:t.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+l+a+"(?:"+l+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+l+a+")(?:"+l+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(o),inside:t.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+l+")"+a+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+l+"$"),inside:{"table-header":{pattern:RegExp(o),alias:"important",inside:t.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:r(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:r(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:r(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:r(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(h){u!==h&&(t.languages.markdown[u].inside.content.inside[h]=t.languages.markdown[h])})}),t.hooks.add("after-tokenize",function(u){u.language!=="markdown"&&u.language!=="md"||function h(p){if(p&&typeof p!="string")for(var y=0,S=p.length;y<S;y++){var g,x=p[y];x.type!=="code"?h(x.content):(g=x.content[1],x=x.content[3],g&&x&&g.type==="code-language"&&x.type==="code-block"&&typeof g.content=="string"&&(g=g.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp"),g="language-"+(g=(/[a-z][\w-]*/i.exec(g)||[""])[0].toLowerCase()),x.alias?typeof x.alias=="string"?x.alias=[x.alias,g]:x.alias.push(g):x.alias=[g]))}}(u.tokens)}),t.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var h="",p=0,y=u.classes.length;p<y;p++){var S=u.classes[p],S=/language-(.+)/.exec(S);if(S){h=S[1];break}}var g,x=t.languages[h];x?u.content=t.highlight(function(P){return P=P.replace(c,""),P=P.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(m,O){var b;return(O=O.toLowerCase())[0]==="#"?(b=O[1]==="x"?parseInt(O.slice(2),16):Number(O.slice(1)),d(b)):s[O]||m})}(u.content),x,h):h&&h!=="none"&&t.plugins.autoloader&&(g="md-"+new Date().valueOf()+"-"+Math.floor(1e16*Math.random()),u.attributes.id=g,t.plugins.autoloader.loadLanguages(h,function(){var P=document.getElementById(g);P&&(P.innerHTML=t.highlight(P.textContent,t.languages[h],h))}))}}),RegExp(t.languages.markup.tag.pattern.source,"gi")),s={amp:"&",lt:"<",gt:">",quot:'"'},d=String.fromCodePoint||String.fromCharCode;t.languages.md=t.languages.markdown}(H),H.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:H.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:false|true)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/\b[A-Z]\w*Input\b/,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},H.hooks.add("after-tokenize",function(t){if(t.language==="graphql")for(var e=t.tokens.filter(function(g){return typeof g!="string"&&g.type!=="comment"&&g.type!=="scalar"}),r=0;r<e.length;){var o=e[r++];if(o.type==="keyword"&&o.content==="mutation"){var l=[];if(p(["definition-mutation","punctuation"])&&h(1).content==="("){r+=2;var a=y(/^\($/,/^\)$/);if(a===-1)continue;for(;r<a;r++){var c=h(0);c.type==="variable"&&(S(c,"variable-input"),l.push(c.content))}r=a+1}if(p(["punctuation","property-query"])&&h(0).content==="{"&&(r++,S(h(0),"property-mutation"),0<l.length)){var s=y(/^\{$/,/^\}$/);if(s!==-1)for(var d=r;d<s;d++){var u=e[d];u.type==="variable"&&0<=l.indexOf(u.content)&&S(u,"variable-input")}}}}function h(g){return e[r+g]}function p(g,x){x=x||0;for(var P=0;P<g.length;P++){var m=h(P+x);if(!m||m.type!==g[P])return}return 1}function y(g,x){for(var P=1,m=r;m<e.length;m++){var O=e[m],b=O.content;if(O.type==="punctuation"&&typeof b=="string"){if(g.test(b))P++;else if(x.test(b)&&--P===0)return m}}return-1}function S(g,x){var P=g.alias;P?Array.isArray(P)||(g.alias=P=[P]):g.alias=P=[],P.push(x)}}),H.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},function(t){var e=t.languages.javascript["template-string"],r=e.pattern.source,o=e.inside.interpolation,l=o.inside["interpolation-punctuation"],a=o.pattern.source;function c(p,y){if(t.languages[p])return{pattern:RegExp("((?:"+y+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:p}}}}function s(p,y,S){return p={code:p,grammar:y,language:S},t.hooks.run("before-tokenize",p),p.tokens=t.tokenize(p.code,p.grammar),t.hooks.run("after-tokenize",p),p.tokens}function d(p,y,S){var P=t.tokenize(p,{interpolation:{pattern:RegExp(a),lookbehind:!0}}),g=0,x={},P=s(P.map(function(O){if(typeof O=="string")return O;for(var b,v,O=O.content;p.indexOf((v=g++,b="___"+S.toUpperCase()+"_"+v+"___"))!==-1;);return x[b]=O,b}).join(""),y,S),m=Object.keys(x);return g=0,function O(b){for(var v=0;v<b.length;v++){if(g>=m.length)return;var E,k,_,N,D,A,W,J=b[v];typeof J=="string"||typeof J.content=="string"?(E=m[g],(W=(A=typeof J=="string"?J:J.content).indexOf(E))!==-1&&(++g,k=A.substring(0,W),D=x[E],_=void 0,(N={})["interpolation-punctuation"]=l,(N=t.tokenize(D,N)).length===3&&((_=[1,1]).push.apply(_,s(N[1],t.languages.javascript,"javascript")),N.splice.apply(N,_)),_=new t.Token("interpolation",N,o.alias,D),N=A.substring(W+E.length),D=[],k&&D.push(k),D.push(_),N&&(O(A=[N]),D.push.apply(D,A)),typeof J=="string"?(b.splice.apply(b,[v,1].concat(D)),v+=D.length-1):J.content=D)):(W=J.content,Array.isArray(W)?O(W):O([W]))}}(P),new t.Token(S,P,"language-"+S,p)}t.languages.javascript["template-string"]=[c("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),c("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),c("svg",/\bsvg/.source),c("markdown",/\b(?:markdown|md)/.source),c("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),c("sql",/\bsql/.source),e].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function h(p){return typeof p=="string"?p:Array.isArray(p)?p.map(h).join(""):h(p.content)}t.hooks.add("after-tokenize",function(p){p.language in u&&function y(S){for(var g=0,x=S.length;g<x;g++){var P,m,O,b=S[g];typeof b!="string"&&(P=b.content,Array.isArray(P)?b.type==="template-string"?(b=P[1],P.length===3&&typeof b!="string"&&b.type==="embedded-code"&&(m=h(b),b=b.alias,b=Array.isArray(b)?b[0]:b,O=t.languages[b])&&(P[1]=d(m,O,b))):y(P):typeof P!="string"&&y([P]))}}(p.tokens)})}(H),function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var e=t.languages.extend("typescript",{});delete e["class-name"],t.languages.typescript["class-name"].inside=e,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),t.languages.ts=t.languages.typescript}(H),function(t){var e=t.languages.javascript,r=/\{(?:[^{}]|\{(?:[^{}]|\{[^{}]*\})*\})+\}/.source,o="(@(?:arg|argument|param|property)\\s+(?:"+r+"\\s+)?)";t.languages.jsdoc=t.languages.extend("javadoclike",{parameter:{pattern:RegExp(o+/(?:(?!\s)[$\w\xA0-\uFFFF.])+(?=\s|$)/.source),lookbehind:!0,inside:{punctuation:/\./}}}),t.languages.insertBefore("jsdoc","keyword",{"optional-parameter":{pattern:RegExp(o+/\[(?:(?!\s)[$\w\xA0-\uFFFF.])+(?:=[^[\]]+)?\](?=\s|$)/.source),lookbehind:!0,inside:{parameter:{pattern:/(^\[)[$\w\xA0-\uFFFF\.]+/,lookbehind:!0,inside:{punctuation:/\./}},code:{pattern:/(=)[\s\S]*(?=\]$)/,lookbehind:!0,inside:e,alias:"language-javascript"},punctuation:/[=[\]]/}},"class-name":[{pattern:RegExp(/(@(?:augments|class|extends|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g,function(){return r})),lookbehind:!0,inside:{punctuation:/\./}},{pattern:RegExp("(@[a-z]+\\s+)"+r),lookbehind:!0,inside:{string:e.string,number:e.number,boolean:e.boolean,keyword:t.languages.typescript.keyword,operator:/=>|\.\.\.|[&|?:*]/,punctuation:/[.,;=<>{}()[\]]/}}],example:{pattern:/(@example\s+(?!\s))(?:[^@\s]|\s+(?!\s))+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,lookbehind:!0,inside:{code:{pattern:/^([\t ]*(?:\*\s*)?)\S.*$/m,lookbehind:!0,inside:e,alias:"language-javascript"}}}}),t.languages.javadoclike.addSupport("javascript",t.languages.jsdoc)}(H),function(t){t.languages.flow=t.languages.extend("javascript",{}),t.languages.insertBefore("flow","keyword",{type:[{pattern:/\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|[Ss]ymbol|any|mixed|null|void)\b/,alias:"class-name"}]}),t.languages.flow["function-variable"].pattern=/(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/i,delete t.languages.flow.parameter,t.languages.insertBefore("flow","operator",{"flow-punctuation":{pattern:/\{\||\|\}/,alias:"punctuation"}}),Array.isArray(t.languages.flow.keyword)||(t.languages.flow.keyword=[t.languages.flow.keyword]),t.languages.flow.keyword.unshift({pattern:/(^|[^$]\b)(?:Class|declare|opaque|type)\b(?!\$)/,lookbehind:!0},{pattern:/(^|[^$]\B)\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\b(?!\$)/,lookbehind:!0})}(H),H.languages.n4js=H.languages.extend("javascript",{keyword:/\b(?:Array|any|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/}),H.languages.insertBefore("n4js","constant",{annotation:{pattern:/@+\w+/,alias:"operator"}}),H.languages.n4jsd=H.languages.n4js,function(t){function e(c,s){return RegExp(c.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),s)}t.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+t.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),t.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+t.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),t.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]}),t.languages.insertBefore("javascript","keyword",{imports:{pattern:e(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:t.languages.javascript},exports:{pattern:e(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:t.languages.javascript}}),t.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),t.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),t.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:e(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],o=0;o<r.length;o++){var a=r[o],l=t.languages.javascript[a],a=(l=t.util.type(l)==="RegExp"?t.languages.javascript[a]={pattern:l}:l).inside||{};(l.inside=a)["maybe-class-name"]=/^[A-Z][\s\S]*/}}(H),function(t){var e=t.util.clone(t.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,o=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,l=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function a(d,u){return d=d.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return o}).replace(/<SPREAD>/g,function(){return l}),RegExp(d,u)}l=a(l).source,t.languages.jsx=t.languages.extend("markup",e),t.languages.jsx.tag.pattern=a(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=e.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:a(/<SPREAD>/.source),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:a(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx}}},t.languages.jsx.tag);function c(d){for(var u=[],h=0;h<d.length;h++){var p=d[h],y=!1;typeof p!="string"&&(p.type==="tag"&&p.content[0]&&p.content[0].type==="tag"?p.content[0].content[0].content==="</"?0<u.length&&u[u.length-1].tagName===s(p.content[0].content[1])&&u.pop():p.content[p.content.length-1].content!=="/>"&&u.push({tagName:s(p.content[0].content[1]),openedBraces:0}):0<u.length&&p.type==="punctuation"&&p.content==="{"?u[u.length-1].openedBraces++:0<u.length&&0<u[u.length-1].openedBraces&&p.type==="punctuation"&&p.content==="}"?u[u.length-1].openedBraces--:y=!0),(y||typeof p=="string")&&0<u.length&&u[u.length-1].openedBraces===0&&(y=s(p),h<d.length-1&&(typeof d[h+1]=="string"||d[h+1].type==="plain-text")&&(y+=s(d[h+1]),d.splice(h+1,1)),0<h&&(typeof d[h-1]=="string"||d[h-1].type==="plain-text")&&(y=s(d[h-1])+y,d.splice(h-1,1),h--),d[h]=new t.Token("plain-text",y,null,y)),p.content&&typeof p.content!="string"&&c(p.content)}}var s=function(d){return d?typeof d=="string"?d:typeof d.content=="string"?d.content:d.content.map(s).join(""):""};t.hooks.add("after-tokenize",function(d){d.language!=="jsx"&&d.language!=="tsx"||c(d.tokens)})}(H),function(t){var e=t.util.clone(t.languages.typescript),e=(t.languages.tsx=t.languages.extend("jsx",e),delete t.languages.tsx.parameter,delete t.languages.tsx["literal-property"],t.languages.tsx.tag);e.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+e.pattern.source+")",e.pattern.flags),e.lookbehind=!0}(H),H.languages.swift={comment:{pattern:/(^|[^\\:])(?:\/\/.*|\/\*(?:[^/*]|\/(?!\*)|\*(?!\/)|\/\*(?:[^*]|\*(?!\/))*\*\/)*\*\/)/,lookbehind:!0,greedy:!0},"string-literal":[{pattern:RegExp(/(^|[^"#])/.source+"(?:"+/"(?:\\(?:\((?:[^()]|\([^()]*\))*\)|\r\n|[^(])|[^\\\r\n"])*"/.source+"|"+/"""(?:\\(?:\((?:[^()]|\([^()]*\))*\)|[^(])|[^\\"]|"(?!""))*"""/.source+")"+/(?!["#])/.source),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\\($/,alias:"punctuation"},punctuation:/\\(?=[\r\n])/,string:/[\s\S]+/}},{pattern:RegExp(/(^|[^"#])(#+)/.source+"(?:"+/"(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|\r\n|[^#])|[^\\\r\n])*?"/.source+"|"+/"""(?:\\(?:#+\((?:[^()]|\([^()]*\))*\)|[^#])|[^\\])*?"""/.source+")\\2"),lookbehind:!0,greedy:!0,inside:{interpolation:{pattern:/(\\#+\()(?:[^()]|\([^()]*\))*(?=\))/,lookbehind:!0,inside:null},"interpolation-punctuation":{pattern:/^\)|\\#+\($/,alias:"punctuation"},string:/[\s\S]+/}}],directive:{pattern:RegExp(/#/.source+"(?:"+/(?:elseif|if)\b/.source+"(?:[ 	]*"+/(?:![ \t]*)?(?:\b\w+\b(?:[ \t]*\((?:[^()]|\([^()]*\))*\))?|\((?:[^()]|\([^()]*\))*\))(?:[ \t]*(?:&&|\|\|))?/.source+")+|"+/(?:else|endif)\b/.source+")"),alias:"property",inside:{"directive-name":/^#\w+/,boolean:/\b(?:false|true)\b/,number:/\b\d+(?:\.\d+)*\b/,operator:/!|&&|\|\||[<>]=?/,punctuation:/[(),]/}},literal:{pattern:/#(?:colorLiteral|column|dsohandle|file(?:ID|Literal|Path)?|function|imageLiteral|line)\b/,alias:"constant"},"other-directive":{pattern:/#\w+\b/,alias:"property"},attribute:{pattern:/@\w+/,alias:"atrule"},"function-definition":{pattern:/(\bfunc\s+)\w+/,lookbehind:!0,alias:"function"},label:{pattern:/\b(break|continue)\s+\w+|\b[a-zA-Z_]\w*(?=\s*:\s*(?:for|repeat|while)\b)/,lookbehind:!0,alias:"important"},keyword:/\b(?:Any|Protocol|Self|Type|actor|as|assignment|associatedtype|associativity|async|await|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|higherThan|if|import|in|indirect|infix|init|inout|internal|is|isolated|lazy|left|let|lowerThan|mutating|none|nonisolated|nonmutating|open|operator|optional|override|postfix|precedencegroup|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|set|some|static|struct|subscript|super|switch|throw|throws|try|typealias|unowned|unsafe|var|weak|where|while|willSet)\b/,boolean:/\b(?:false|true)\b/,nil:{pattern:/\bnil\b/,alias:"constant"},"short-argument":/\$\d+\b/,omit:{pattern:/\b_\b/,alias:"keyword"},number:/\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,"class-name":/\b[A-Z](?:[A-Z_\d]*[a-z]\w*)?\b/,function:/\b[a-z_]\w*(?=\s*\()/i,constant:/\b(?:[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,operator:/[-+*/%=!<>&|^~?]+|\.[.\-+*/%=!<>&|^~?]+/,punctuation:/[{}[\]();,.:\\]/},H.languages.swift["string-literal"].forEach(function(t){t.inside.interpolation.inside=H.languages.swift}),function(t){t.languages.kotlin=t.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[{pattern:/(?:`[^\r\n`]+`|\b\w+)(?=\s*\()/,greedy:!0},{pattern:/(\.)(?:`[^\r\n`]+`|\w+)(?=\s*\{)/,lookbehind:!0,greedy:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete t.languages.kotlin["class-name"];var e={"interpolation-punctuation":{pattern:/^\$\{?|\}$/,alias:"punctuation"},expression:{pattern:/[\s\S]+/,inside:t.languages.kotlin}};t.languages.insertBefore("kotlin","string",{"string-literal":[{pattern:/"""(?:[^$]|\$(?:(?!\{)|\{[^{}]*\}))*?"""/,alias:"multiline",inside:{interpolation:{pattern:/\$(?:[a-z_]\w*|\{[^{}]*\})/i,inside:e},string:/[\s\S]+/}},{pattern:/"(?:[^"\\\r\n$]|\\.|\$(?:(?!\{)|\{[^{}]*\}))*"/,alias:"singleline",inside:{interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$(?:[a-z_]\w*|\{[^{}]*\})/i,lookbehind:!0,inside:e},string:/[\s\S]+/}}],char:{pattern:/'(?:[^'\\\r\n]|\\(?:.|u[a-fA-F0-9]{0,4}))'/,greedy:!0}}),delete t.languages.kotlin.string,t.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),t.languages.insertBefore("kotlin","function",{label:{pattern:/\b\w+@|@\w+\b/,alias:"symbol"}}),t.languages.kt=t.languages.kotlin,t.languages.kts=t.languages.kotlin}(H),H.languages.c=H.languages.extend("clike",{comment:{pattern:/\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},"class-name":{pattern:/(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,lookbehind:!0},keyword:/\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,function:/\b[a-z_]\w*(?=\s*\()/i,number:/(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,operator:/>>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/}),H.languages.insertBefore("c","string",{char:{pattern:/'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,greedy:!0}}),H.languages.insertBefore("c","string",{macro:{pattern:/(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,lookbehind:!0,greedy:!0,alias:"property",inside:{string:[{pattern:/^(#\s*include\s*)<[^>]+>/,lookbehind:!0},H.languages.c.string],char:H.languages.c.char,comment:H.languages.c.comment,"macro-name":[{pattern:/(^#\s*define\s+)\w+\b(?!\()/i,lookbehind:!0},{pattern:/(^#\s*define\s+)\w+\b(?=\()/i,lookbehind:!0,alias:"function"}],directive:{pattern:/^(#\s*)[a-z]+/,lookbehind:!0,alias:"keyword"},"directive-hash":/^#/,punctuation:/##|\\(?=[\r\n])/,expression:{pattern:/\S[\s\S]*/,inside:H.languages.c}}}}),H.languages.insertBefore("c","function",{constant:/\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/}),delete H.languages.c.boolean,H.languages.objectivec=H.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete H.languages.objectivec["class-name"],H.languages.objc=H.languages.objectivec,H.languages.reason=H.languages.extend("clike",{string:{pattern:/"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,greedy:!0},"class-name":/\b[A-Z]\w*/,keyword:/\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,operator:/\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/}),H.languages.insertBefore("reason","class-name",{char:{pattern:/'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,greedy:!0},constructor:/\b[A-Z]\w*\b(?!\s*\.)/,label:{pattern:/\b[a-z]\w*(?=::)/,alias:"symbol"}}),delete H.languages.reason.function,function(t){for(var e=/\/\*(?:[^*/]|\*(?!\/)|\/(?!\*)|<self>)*\*\//.source,r=0;r<2;r++)e=e.replace(/<self>/g,function(){return e});e=e.replace(/<self>/g,function(){return/[^\s\S]/.source}),t.languages.rust={comment:[{pattern:RegExp(/(^|[^\\])/.source+e),lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/b?"(?:\\[\s\S]|[^\\"])*"|b?r(#*)"(?:[^"]|"(?!\1))*"\1/,greedy:!0},char:{pattern:/b?'(?:\\(?:x[0-7][\da-fA-F]|u\{(?:[\da-fA-F]_*){1,6}\}|.)|[^\\\r\n\t'])'/,greedy:!0},attribute:{pattern:/#!?\[(?:[^\[\]"]|"(?:\\[\s\S]|[^\\"])*")*\]/,greedy:!0,alias:"attr-name",inside:{string:null}},"closure-params":{pattern:/([=(,:]\s*|\bmove\s*)\|[^|]*\||\|[^|]*\|(?=\s*(?:\{|->))/,lookbehind:!0,greedy:!0,inside:{"closure-punctuation":{pattern:/^\||\|$/,alias:"punctuation"},rest:null}},"lifetime-annotation":{pattern:/'\w+/,alias:"symbol"},"fragment-specifier":{pattern:/(\$\w+:)[a-z]+/,lookbehind:!0,alias:"punctuation"},variable:/\$\w+/,"function-definition":{pattern:/(\bfn\s+)\w+/,lookbehind:!0,alias:"function"},"type-definition":{pattern:/(\b(?:enum|struct|trait|type|union)\s+)\w+/,lookbehind:!0,alias:"class-name"},"module-declaration":[{pattern:/(\b(?:crate|mod)\s+)[a-z][a-z_\d]*/,lookbehind:!0,alias:"namespace"},{pattern:/(\b(?:crate|self|super)\s*)::\s*[a-z][a-z_\d]*\b(?:\s*::(?:\s*[a-z][a-z_\d]*\s*::)*)?/,lookbehind:!0,alias:"namespace",inside:{punctuation:/::/}}],keyword:[/\b(?:Self|abstract|as|async|await|become|box|break|const|continue|crate|do|dyn|else|enum|extern|final|fn|for|if|impl|in|let|loop|macro|match|mod|move|mut|override|priv|pub|ref|return|self|static|struct|super|trait|try|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\b/,/\b(?:bool|char|f(?:32|64)|[ui](?:8|16|32|64|128|size)|str)\b/],function:/\b[a-z_]\w*(?=\s*(?:::\s*<|\())/,macro:{pattern:/\b\w+!/,alias:"property"},constant:/\b[A-Z_][A-Z_\d]+\b/,"class-name":/\b[A-Z]\w*\b/,namespace:{pattern:/(?:\b[a-z][a-z_\d]*\s*::\s*)*\b[a-z][a-z_\d]*\s*::(?!\s*<)/,inside:{punctuation:/::/}},number:/\b(?:0x[\dA-Fa-f](?:_?[\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(?:(?:\d(?:_?\d)*)?\.)?\d(?:_?\d)*(?:[Ee][+-]?\d+)?)(?:_?(?:f32|f64|[iu](?:8|16|32|64|size)?))?\b/,boolean:/\b(?:false|true)\b/,punctuation:/->|\.\.=|\.{1,3}|::|[{}[\];(),:]/,operator:/[-+*\/%!^]=?|=[=>]?|&[&=]?|\|[|=]?|<<?=?|>>?=?|[@?]/},t.languages.rust["closure-params"].inside.rest=t.languages.rust,t.languages.rust.attribute.inside.string=t.languages.rust.string}(H),H.languages.go=H.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,lookbehind:!0,greedy:!0},keyword:/\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,boolean:/\b(?:_|false|iota|nil|true)\b/,number:[/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i],operator:/[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,builtin:/\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/}),H.languages.insertBefore("go","string",{char:{pattern:/'(?:\\.|[^'\\\r\n]){0,10}'/,greedy:!0}}),delete H.languages.go["class-name"],function(t){var e=/\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,r=/\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g,function(){return e.source});t.languages.cpp=t.languages.extend("c",{"class-name":[{pattern:RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g,function(){return e.source})),lookbehind:!0},/\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,/\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,/\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/],keyword:e,number:{pattern:/(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,greedy:!0},operator:/>>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,boolean:/\b(?:false|true)\b/}),t.languages.insertBefore("cpp","string",{module:{pattern:RegExp(/(\b(?:import|module)\s+)/.source+"(?:"+/"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source+"|"+/<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g,function(){return r})+")"),lookbehind:!0,greedy:!0,inside:{string:/^[<"][\s\S]+/,operator:/:/,punctuation:/\./}},"raw-string":{pattern:/R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,alias:"string",greedy:!0}}),t.languages.insertBefore("cpp","keyword",{"generic-function":{pattern:/\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,inside:{function:/^\w+/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t.languages.cpp}}}}),t.languages.insertBefore("cpp","operator",{"double-colon":{pattern:/::/,alias:"punctuation"}}),t.languages.insertBefore("cpp","class-name",{"base-clause":{pattern:/(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,lookbehind:!0,greedy:!0,inside:t.languages.extend("cpp",{})}}),t.languages.insertBefore("inside","double-colon",{"class-name":/\b[a-z_]\w*\b(?!\s*::)/i},t.languages.cpp["base-clause"])}(H),H.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},H.languages.python["string-interpolation"].inside.interpolation.inside.rest=H.languages.python,H.languages.py=H.languages.python;var tb={};t0(tb,{dracula:()=>a0,duotoneDark:()=>s0,duotoneLight:()=>d0,github:()=>p0,jettwaveDark:()=>R0,jettwaveLight:()=>F0,nightOwl:()=>h0,nightOwlLight:()=>b0,oceanicNext:()=>g0,okaidia:()=>x0,oneDark:()=>D0,oneLight:()=>$0,palenight:()=>w0,shadesOfPurple:()=>S0,synthwave84:()=>E0,ultramin:()=>k0,vsDark:()=>rb,vsLight:()=>T0});var i0={plain:{color:"#F8F8F2",backgroundColor:"#282A36"},styles:[{types:["prolog","constant","builtin"],style:{color:"rgb(189, 147, 249)"}},{types:["inserted","function"],style:{color:"rgb(80, 250, 123)"}},{types:["deleted"],style:{color:"rgb(255, 85, 85)"}},{types:["changed"],style:{color:"rgb(255, 184, 108)"}},{types:["punctuation","symbol"],style:{color:"rgb(248, 248, 242)"}},{types:["string","char","tag","selector"],style:{color:"rgb(255, 121, 198)"}},{types:["keyword","variable"],style:{color:"rgb(189, 147, 249)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(98, 114, 164)"}},{types:["attr-name"],style:{color:"rgb(241, 250, 140)"}}]},a0=i0,c0={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s0=c0,f0={plain:{backgroundColor:"#faf8f5",color:"#728fcb"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#b6ad9a"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#063289"}},{types:["property","function"],style:{color:"#b29762"}},{types:["tag-id","selector","atrule-id"],style:{color:"#2d2006"}},{types:["attr-name"],style:{color:"#896724"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule"],style:{color:"#728fcb"}},{types:["placeholder","variable"],style:{color:"#93abdc"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#896724"}}]},d0=f0,u0={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},p0=u0,y0={plain:{color:"#d6deeb",backgroundColor:"#011627"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(99, 119, 119)",fontStyle:"italic"}},{types:["string","url"],style:{color:"rgb(173, 219, 103)"}},{types:["variable"],style:{color:"rgb(214, 222, 235)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation"],style:{color:"rgb(199, 146, 234)"}},{types:["selector","doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(255, 203, 139)"}},{types:["tag","operator","keyword"],style:{color:"rgb(127, 219, 202)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["property"],style:{color:"rgb(128, 203, 196)"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}}]},h0=y0,O0={plain:{color:"#403f53",backgroundColor:"#FBFBFB"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)",fontStyle:"italic"}},{types:["inserted","attr-name"],style:{color:"rgb(72, 118, 214)",fontStyle:"italic"}},{types:["comment"],style:{color:"rgb(152, 159, 177)",fontStyle:"italic"}},{types:["string","builtin","char","constant","url"],style:{color:"rgb(72, 118, 214)"}},{types:["variable"],style:{color:"rgb(201, 103, 101)"}},{types:["number"],style:{color:"rgb(170, 9, 130)"}},{types:["punctuation"],style:{color:"rgb(153, 76, 195)"}},{types:["function","selector","doctype"],style:{color:"rgb(153, 76, 195)",fontStyle:"italic"}},{types:["class-name"],style:{color:"rgb(17, 17, 17)"}},{types:["tag"],style:{color:"rgb(153, 76, 195)"}},{types:["operator","property","keyword","namespace"],style:{color:"rgb(12, 150, 155)"}},{types:["boolean"],style:{color:"rgb(188, 84, 84)"}}]},b0=O0,En={char:"#D8DEE9",comment:"#999999",keyword:"#c5a5c5",primitive:"#5a9bcf",string:"#8dc891",variable:"#d7deea",boolean:"#ff8b50",punctuation:"#5FB3B3",tag:"#fc929e",function:"#79b6f2",className:"#FAC863",method:"#6699CC",operator:"#fc929e"},m0={plain:{backgroundColor:"#282c34",color:"#ffffff"},styles:[{types:["attr-name"],style:{color:En.keyword}},{types:["attr-value"],style:{color:En.string}},{types:["comment","block-comment","prolog","doctype","cdata","shebang"],style:{color:En.comment}},{types:["property","number","function-name","constant","symbol","deleted"],style:{color:En.primitive}},{types:["boolean"],style:{color:En.boolean}},{types:["tag"],style:{color:En.tag}},{types:["string"],style:{color:En.string}},{types:["punctuation"],style:{color:En.string}},{types:["selector","char","builtin","inserted"],style:{color:En.char}},{types:["function"],style:{color:En.function}},{types:["operator","entity","url","variable"],style:{color:En.variable}},{types:["keyword"],style:{color:En.keyword}},{types:["atrule","class-name"],style:{color:En.className}},{types:["important"],style:{fontWeight:"400"}},{types:["bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}}]},g0=m0,j0={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["changed"],style:{color:"rgb(162, 191, 252)",fontStyle:"italic"}},{types:["deleted"],style:{color:"#f92672",fontStyle:"italic"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)",fontStyle:"italic"}},{types:["comment"],style:{color:"#8292a2",fontStyle:"italic"}},{types:["string","url"],style:{color:"#a6e22e"}},{types:["variable"],style:{color:"#f8f8f2"}},{types:["number"],style:{color:"#ae81ff"}},{types:["builtin","char","constant","function","class-name"],style:{color:"#e6db74"}},{types:["punctuation"],style:{color:"#f8f8f2"}},{types:["selector","doctype"],style:{color:"#a6e22e",fontStyle:"italic"}},{types:["tag","operator","keyword"],style:{color:"#66d9ef"}},{types:["boolean"],style:{color:"#ae81ff"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)",opacity:.7}},{types:["tag","property"],style:{color:"#f92672"}},{types:["attr-name"],style:{color:"#a6e22e !important"}},{types:["doctype"],style:{color:"#8292a2"}},{types:["rule"],style:{color:"#e6db74"}}]},x0=j0,v0={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},w0=v0,P0={plain:{color:"#9EFEFF",backgroundColor:"#2D2A55"},styles:[{types:["changed"],style:{color:"rgb(255, 238, 128)"}},{types:["deleted"],style:{color:"rgba(239, 83, 80, 0.56)"}},{types:["inserted"],style:{color:"rgb(173, 219, 103)"}},{types:["comment"],style:{color:"rgb(179, 98, 255)",fontStyle:"italic"}},{types:["punctuation"],style:{color:"rgb(255, 255, 255)"}},{types:["constant"],style:{color:"rgb(255, 98, 140)"}},{types:["string","url"],style:{color:"rgb(165, 255, 144)"}},{types:["variable"],style:{color:"rgb(255, 238, 128)"}},{types:["number","boolean"],style:{color:"rgb(255, 98, 140)"}},{types:["attr-name"],style:{color:"rgb(255, 180, 84)"}},{types:["keyword","operator","property","namespace","tag","selector","doctype"],style:{color:"rgb(255, 157, 0)"}},{types:["builtin","char","constant","function","class-name"],style:{color:"rgb(250, 208, 0)"}}]},S0=P0,_0={plain:{backgroundColor:"linear-gradient(to bottom, #2a2139 75%, #34294f)",backgroundImage:"#34294f",color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"},styles:[{types:["comment","block-comment","prolog","doctype","cdata"],style:{color:"#495495",fontStyle:"italic"}},{types:["punctuation"],style:{color:"#ccc"}},{types:["tag","attr-name","namespace","number","unit","hexcode","deleted"],style:{color:"#e2777a"}},{types:["property","selector"],style:{color:"#72f1b8",textShadow:"0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"}},{types:["function-name"],style:{color:"#6196cc"}},{types:["boolean","selector-id","function"],style:{color:"#fdfdfd",textShadow:"0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"}},{types:["class-name","maybe-class-name","builtin"],style:{color:"#fff5f6",textShadow:"0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"}},{types:["constant","symbol"],style:{color:"#f92aad",textShadow:"0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"}},{types:["important","atrule","keyword","selector-class"],style:{color:"#f4eee4",textShadow:"0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"}},{types:["string","char","attr-value","regex","variable"],style:{color:"#f87c32"}},{types:["parameter"],style:{fontStyle:"italic"}},{types:["entity","url"],style:{color:"#67cdcc"}},{types:["operator"],style:{color:"ffffffee"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["entity"],style:{cursor:"help"}},{types:["inserted"],style:{color:"green"}}]},E0=_0,I0={plain:{color:"#282a2e",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(197, 200, 198)"}},{types:["string","number","builtin","variable"],style:{color:"rgb(150, 152, 150)"}},{types:["class-name","function","tag","attr-name"],style:{color:"rgb(40, 42, 46)"}}]},k0=I0,N0={plain:{color:"#9CDCFE",backgroundColor:"#1E1E1E"},styles:[{types:["prolog"],style:{color:"rgb(0, 0, 128)"}},{types:["comment"],style:{color:"rgb(106, 153, 85)"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"rgb(86, 156, 214)"}},{types:["number","inserted"],style:{color:"rgb(181, 206, 168)"}},{types:["constant"],style:{color:"rgb(100, 102, 149)"}},{types:["attr-name","variable"],style:{color:"rgb(156, 220, 254)"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"rgb(206, 145, 120)"}},{types:["selector"],style:{color:"rgb(215, 186, 125)"}},{types:["tag"],style:{color:"rgb(78, 201, 176)"}},{types:["tag"],languages:["markup"],style:{color:"rgb(86, 156, 214)"}},{types:["punctuation","operator"],style:{color:"rgb(212, 212, 212)"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"rgb(220, 220, 170)"}},{types:["class-name"],style:{color:"rgb(78, 201, 176)"}},{types:["char"],style:{color:"rgb(209, 105, 105)"}}]},rb=N0,C0={plain:{color:"#000000",backgroundColor:"#ffffff"},styles:[{types:["comment"],style:{color:"rgb(0, 128, 0)"}},{types:["builtin"],style:{color:"rgb(0, 112, 193)"}},{types:["number","variable","inserted"],style:{color:"rgb(9, 134, 88)"}},{types:["operator"],style:{color:"rgb(0, 0, 0)"}},{types:["constant","char"],style:{color:"rgb(129, 31, 63)"}},{types:["tag"],style:{color:"rgb(128, 0, 0)"}},{types:["attr-name"],style:{color:"rgb(255, 0, 0)"}},{types:["deleted","string"],style:{color:"rgb(163, 21, 21)"}},{types:["changed","punctuation"],style:{color:"rgb(4, 81, 165)"}},{types:["function","keyword"],style:{color:"rgb(0, 0, 255)"}},{types:["class-name"],style:{color:"rgb(38, 127, 153)"}}]},T0=C0,A0={plain:{color:"#f8fafc",backgroundColor:"#011627"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#569CD6"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#f8fafc"}},{types:["attr-name","variable"],style:{color:"#9CDCFE"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#cbd5e1"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#D4D4D4"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#7dd3fc"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},R0=A0,L0={plain:{color:"#0f172a",backgroundColor:"#f1f5f9"},styles:[{types:["prolog"],style:{color:"#000080"}},{types:["comment"],style:{color:"#6A9955"}},{types:["builtin","changed","keyword","interpolation-punctuation"],style:{color:"#0c4a6e"}},{types:["number","inserted"],style:{color:"#B5CEA8"}},{types:["constant"],style:{color:"#0f172a"}},{types:["attr-name","variable"],style:{color:"#0c4a6e"}},{types:["deleted","string","attr-value","template-punctuation"],style:{color:"#64748b"}},{types:["selector"],style:{color:"#D7BA7D"}},{types:["tag"],style:{color:"#0ea5e9"}},{types:["tag"],languages:["markup"],style:{color:"#0ea5e9"}},{types:["punctuation","operator"],style:{color:"#475569"}},{types:["punctuation"],languages:["markup"],style:{color:"#808080"}},{types:["function"],style:{color:"#0e7490"}},{types:["class-name"],style:{color:"#0ea5e9"}},{types:["char"],style:{color:"#D16969"}}]},F0=L0,M0={plain:{backgroundColor:"hsl(220, 13%, 18%)",color:"hsl(220, 14%, 71%)",textShadow:"0 1px rgba(0, 0, 0, 0.3)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(220, 10%, 40%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(220, 14%, 71%)"}},{types:["attr-name","class-name","maybe-class-name","boolean","constant","number","atrule"],style:{color:"hsl(29, 54%, 61%)"}},{types:["keyword"],style:{color:"hsl(286, 60%, 67%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(355, 65%, 65%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value"],style:{color:"hsl(95, 38%, 62%)"}},{types:["variable","operator","function"],style:{color:"hsl(207, 82%, 66%)"}},{types:["url"],style:{color:"hsl(187, 47%, 55%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(220, 14%, 71%)"}}]},D0=M0,B0={plain:{backgroundColor:"hsl(230, 1%, 98%)",color:"hsl(230, 8%, 24%)"},styles:[{types:["comment","prolog","cdata"],style:{color:"hsl(230, 4%, 64%)"}},{types:["doctype","punctuation","entity"],style:{color:"hsl(230, 8%, 24%)"}},{types:["attr-name","class-name","boolean","constant","number","atrule"],style:{color:"hsl(35, 99%, 36%)"}},{types:["keyword"],style:{color:"hsl(301, 63%, 40%)"}},{types:["property","tag","symbol","deleted","important"],style:{color:"hsl(5, 74%, 59%)"}},{types:["selector","string","char","builtin","inserted","regex","attr-value","punctuation"],style:{color:"hsl(119, 34%, 47%)"}},{types:["variable","operator","function"],style:{color:"hsl(221, 87%, 60%)"}},{types:["url"],style:{color:"hsl(198, 99%, 37%)"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"hsl(230, 8%, 24%)"}}]},$0=B0,z0=(t,e)=>{const{plain:r}=t,o=t.styles.reduce((l,a)=>{const{languages:c,style:s}=a;return c&&!c.includes(e)||a.types.forEach(d=>{const u=ft(ft({},l[d]),s);l[d]=u}),l},{});return o.root=r,o.plain=Aa(ft({},r),{backgroundColor:void 0}),o},hp=z0,U0=(t,e)=>{const[r,o]=U.useState(hp(e,t)),l=U.useRef(),a=U.useRef();return U.useEffect(()=>{(e!==l.current||t!==a.current)&&(l.current=e,a.current=t,o(hp(e,t)))},[t,e]),r},H0=t=>U.useCallback(e=>{var r=e,{className:o,style:l,line:a}=r,c=nb(r,["className","style","line"]);const s=Aa(ft({},c),{className:YO("token-line",o)});return typeof t=="object"&&"plain"in t&&(s.style=t.plain),typeof l=="object"&&(s.style=ft(ft({},s.style||{}),l)),s},[t]),q0=t=>{const e=U.useCallback(({types:r,empty:o})=>{if(t!=null){{if(r.length===1&&r[0]==="plain")return o!=null?{display:"inline-block"}:void 0;if(r.length===1&&o!=null)return t[r[0]]}return Object.assign(o!=null?{display:"inline-block"}:{},...r.map(l=>t[l]))}},[t]);return U.useCallback(r=>{var o=r,{token:l,className:a,style:c}=o,s=nb(o,["token","className","style"]);const d=Aa(ft({},s),{className:YO("token",...l.types,a),children:l.content,style:e(l)});return c!=null&&(d.style=ft(ft({},d.style||{}),c)),d},[e])},W0=/\r\n|\r|\n/,Op=t=>{t.length===0?t.push({types:["plain"],content:`
`,empty:!0}):t.length===1&&t[0].content===""&&(t[0].content=`
`,t[0].empty=!0)},bp=(t,e)=>{const r=t.length;return r>0&&t[r-1]===e?t:t.concat(e)},V0=t=>{const e=[[]],r=[t],o=[0],l=[t.length];let a=0,c=0,s=[];const d=[s];for(;c>-1;){for(;(a=o[c]++)<l[c];){let u,h=e[c];const y=r[c][a];if(typeof y=="string"?(h=c>0?h:["plain"],u=y):(h=bp(h,y.type),y.alias&&(h=bp(h,y.alias)),u=y.content),typeof u!="string"){c++,e.push(h),r.push(u),o.push(0),l.push(u.length);continue}const S=u.split(W0),g=S.length;s.push({types:h,content:S[0]});for(let x=1;x<g;x++)Op(s),d.push(s=[]),s.push({types:h,content:S[x]})}c--,e.pop(),r.pop(),o.pop(),l.pop()}return Op(s),d},mp=V0,G0=({prism:t,code:e,grammar:r,language:o})=>{const l=U.useRef(t);return U.useMemo(()=>{if(r==null)return mp([e]);const a={code:e,grammar:r,language:o,tokens:[]};return l.current.hooks.run("before-tokenize",a),a.tokens=l.current.tokenize(e,r),l.current.hooks.run("after-tokenize",a),mp(a.tokens)},[e,r,o])},J0=({children:t,language:e,code:r,theme:o,prism:l})=>{const a=e.toLowerCase(),c=U0(a,o),s=H0(c),d=q0(c),u=l.languages[a],h=G0({prism:l,language:a,code:r,grammar:u});return t({tokens:h,className:`prism-code language-${a}`,style:c!=null?c.root:{},getLineProps:s,getTokenProps:d})},ob=t=>U.createElement(J0,Aa(ft({},t),{prism:t.prism||H,theme:t.theme||rb,code:t.code,language:t.language}));/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/function bl({children:t,icon:e,color:r,className:o,style:l,onClick:a}){return n.jsxs("a",{className:en("doc-ui-tool-button","doc-ui-tool-button-"+r,o),onClick:a,style:l,children:[e&&n.jsx("span",{className:"doc-ui-tool-button-icon",children:e}),t]})}function X0({locale:t}){return n.jsx(bl,{color:"success",icon:n.jsx(KO,{}),children:(t==null?void 0:t.success)||"Success"})}function lb({code:t,locale:e}){const[r,o]=U.useState(!1);return U.useEffect(()=>{let l=0;return r&&(l=window.setTimeout(()=>{o(!1)},1500)),()=>{window.clearTimeout(l)}},[r]),r?n.jsx(X0,{locale:e}):n.jsxs(bl,{onClick:()=>{navigator.clipboard.writeText(t||"").then(()=>{o(!0)}).catch()},children:[n.jsx(Fv,{}),(e==null?void 0:e.copy)||"Copy"]})}function ib({language:t,filename:e}){return n.jsxs("span",{className:"doc-ui-file-name",children:[t&&n.jsx("span",{className:en("doc-ui-file-name-icon","doc-ui-file-name-icon-"+t),children:t==="bash"?">_":t}),n.jsx("span",{className:"doc-ui-file-name-text",children:e})]})}function ab(){return n.jsx("div",{style:{flex:"1 1 auto"}})}function cb({children:t}){return n.jsx("div",{className:"doc-ui-toolbar",children:t})}function K0({code:t,children:e,filename:r,language:o="bash",className:l}){return n.jsxs("div",{className:en("doc-ui-code-block",l),children:[n.jsxs(cb,{children:[n.jsx(ib,{language:o,filename:r}),n.jsx(ab,{}),n.jsx(lb,{code:t})]}),n.jsx(ob,{theme:{plain:{},styles:[]},code:t||e||"",language:o,children:({tokens:a,getLineProps:c,getTokenProps:s,...d})=>n.jsx("pre",{...d,children:a.map((u,h)=>n.jsx("div",{...c({line:u}),children:u.map((p,y)=>n.jsx("span",{...s({token:p})},y))},h))})})]})}function Q0({className:t,...e}){return n.jsx("code",{className:en("doc-ui-code-inline",t),...e})}var Y0={characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0};function ni(t){var e=window.getSelection();e.empty(),e.addRange(t)}function gp(t){return(t.metaKey||t.ctrlKey)&&!t.altKey&&t.code==="KeyZ"}function Fr(t){t=[t.firstChild];for(var e,r="";e=t.pop();)e.nodeType===Node.TEXT_NODE?r+=e.textContent:e.nodeType===Node.ELEMENT_NODE&&e.nodeName==="BR"&&(r+=`
`),e.nextSibling&&t.push(e.nextSibling),e.firstChild&&t.push(e.firstChild);return r[r.length-1]!==`
`&&(r+=`
`),r}function ht(t){var e=window.getSelection().getRangeAt(0),r=e.collapsed?0:e.toString().length,o=document.createRange();return o.setStart(t,0),o.setEnd(e.startContainer,e.startOffset),{position:t=(o=o.toString()).length,extent:r,content:o=(o=o.split(`
`))[e=o.length-1],line:e}}function Co(t,e,r){0>=e&&(e=0),(!r||0>r)&&(r=e);var o=document.createRange();t=[t.firstChild];for(var l,a=0,c=e;l=t[t.length-1];){if(l.nodeType===Node.TEXT_NODE){if(a+l.textContent.length>=c){var s=c-a;if(c===e)if(c=o,s<l.textContent.length?c.setStart(l,s):c.setStartAfter(l),r!==e){c=r;continue}else break;else{e=o,s<(r=l).textContent.length?e.setEnd(r,s):e.setEndAfter(r);break}}a+=l.textContent.length}else if(l.nodeType===Node.ELEMENT_NODE&&l.nodeName==="BR"){if(a+1>=c)if(c===e)if(s=o,0<l.textContent.length?s.setStart(l,0):s.setStartAfter(l),r!==e){c=r;continue}else break;else{e=o,0<(r=l).textContent.length?e.setEnd(r,0):e.setEndAfter(r);break}a++}t.pop(),l.nextSibling&&t.push(l.nextSibling),l.firstChild&&t.push(l.firstChild)}return o}function Z0(t,e,r){function o(p){var y=t.current;if(y){var S=ht(y);y=Fr(y),S.position+=p.length-y.length,u.position=S,u.onChange(p,S)}}function l(p,y){var S=t.current;if(S){var g=window.getSelection().getRangeAt(0);g.deleteContents(),g.collapse();var x=y||0;(g=Co(S,y=(g=ht(S)).position+(0>x?x:0),g.position+(0<x?x:0))).deleteContents(),p&&g.insertNode(document.createTextNode(p)),ni(Co(S,y+p.length))}}function a(p){var y=t.current;if(y){y.focus();var S=0;if(typeof p=="number")S=p;else{var g=Fr(y).split(`
`).slice(0,p.row);p.row&&(S+=g.join(`
`).length+1),S+=p.column}ni(Co(y,S))}}function c(){var p=t.current;return{text:Fr(p),position:p=ht(p)}}function s(){u.observer.disconnect()}r||(r={});var d=U.useState([])[1],u=U.useState(function(){var p={observer:null,disconnected:!1,onChange:e,queue:[],history:[],historyAt:-1,position:null};return typeof MutationObserver<"u"&&(p.observer=new MutationObserver(function(y){var S;(S=p.queue).push.apply(S,y)})),p})[0],h=U.useMemo(function(){return{update:o,insert:l,move:a,getState:c}},[]);return typeof navigator!="object"||(U.useLayoutEffect(function(){if(u.onChange=e,t.current&&!r.disabled){if(u.disconnected=!1,u.observer.observe(t.current,Y0),u.position){var p=u.position,y=p.position;ni(Co(t.current,y,y+p.extent))}return s}}),U.useLayoutEffect(function(){if(!t.current||r.disabled)u.history.length=0,u.historyAt=-1;else{var p=t.current;if(u.position){p.focus();var y=u.position,S=y.position;ni(Co(p,S,S+y.extent))}var g=p.style.whiteSpace,x=p.contentEditable,P=!0;try{p.contentEditable="plaintext-only"}catch{p.contentEditable="true",P=!1}g!=="pre"&&(p.style.whiteSpace="pre-wrap"),r.indentation&&(p.style.tabSize=p.style.MozTabSize=""+r.indentation),y=""+" ".repeat(r.indentation||0);var m,O=new RegExp("^(?:"+y+")"),b=new RegExp("^(?:"+y+")*("+y+")$"),v=function(A){if(t.current&&u.position){var W=Fr(p),J=ht(p),ae=new Date().valueOf(),ie=u.history[u.historyAt];!A&&500>ae-m||ie&&ie[1]===W?m=ae:(A=++u.historyAt,u.history[A]=[J,W],u.history.splice(A+1),500<A&&(u.historyAt--,u.history.shift()))}},E=function(){var A;if((A=u.queue).push.apply(A,u.observer.takeRecords()),A=ht(p),u.queue.length){u.observer.disconnect(),u.disconnected=!0;var W=Fr(p);u.position=A;for(var J,ae;J=u.queue.pop();){for(J.oldValue!==null&&(J.target.textContent=J.oldValue),ae=J.removedNodes.length-1;0<=ae;ae--)J.target.insertBefore(J.removedNodes[ae],J.nextSibling);for(ae=J.addedNodes.length-1;0<=ae;ae--)J.addedNodes[ae].parentNode&&J.target.removeChild(J.addedNodes[ae])}u.onChange(W,A)}},k=function(A){if(!A.defaultPrevented&&A.target===p){if(u.disconnected)return A.preventDefault(),d([]);if(gp(A))A.preventDefault(),A.shiftKey?(A=++u.historyAt,(A=u.history[A])||(u.historyAt=u.history.length-1)):(A=--u.historyAt,(A=u.history[A])||(u.historyAt=0)),A&&(u.observer.disconnect(),u.disconnected=!0,u.position=A[0],u.onChange(A[1],A[0]));else{if(v(),A.key==="Enter"){A.preventDefault();var W=ht(p),J=/\S/g.exec(W.content);W=`
`+W.content.slice(0,J?J.index:W.content.length),h.insert(W)}else if((!P||r.indentation)&&A.key==="Backspace")A.preventDefault(),window.getSelection().getRangeAt(0).collapsed?(W=ht(p),W=b.exec(W.content),h.insert("",W?-W[1].length:-1)):h.insert("",0);else if(r.indentation&&A.key==="Tab"){A.preventDefault(),J=(W=ht(p)).position-W.content.length;var ae=Fr(p);W=A.shiftKey?ae.slice(0,J)+W.content.replace(O,"")+ae.slice(J+W.content.length):ae.slice(0,J)+(r.indentation?" ".repeat(r.indentation):"	")+ae.slice(J),h.update(W)}A.repeat&&E()}}},_=function(A){A.defaultPrevented||A.isComposing||(gp(A)||v(),E(),p.focus())},N=function(A){u.position=window.getSelection().rangeCount&&A.target===p?ht(p):null},D=function(A){A.preventDefault(),v(!0),h.insert(A.clipboardData.getData("text/plain")),v(!0),E()};return document.addEventListener("selectstart",N),window.addEventListener("keydown",k),p.addEventListener("paste",D),p.addEventListener("keyup",_),function(){document.removeEventListener("selectstart",N),window.removeEventListener("keydown",k),p.removeEventListener("paste",D),p.removeEventListener("keyup",_),p.style.whiteSpace=g,p.contentEditable=x}}},[t.current,r.disabled,r.indentation])),h}var w;(function(t){t[t.NONE=0]="NONE";const r=1;t[t._abstract=r]="_abstract";const o=r+1;t[t._accessor=o]="_accessor";const l=o+1;t[t._as=l]="_as";const a=l+1;t[t._assert=a]="_assert";const c=a+1;t[t._asserts=c]="_asserts";const s=c+1;t[t._async=s]="_async";const d=s+1;t[t._await=d]="_await";const u=d+1;t[t._checks=u]="_checks";const h=u+1;t[t._constructor=h]="_constructor";const p=h+1;t[t._declare=p]="_declare";const y=p+1;t[t._enum=y]="_enum";const S=y+1;t[t._exports=S]="_exports";const g=S+1;t[t._from=g]="_from";const x=g+1;t[t._get=x]="_get";const P=x+1;t[t._global=P]="_global";const m=P+1;t[t._implements=m]="_implements";const O=m+1;t[t._infer=O]="_infer";const b=O+1;t[t._interface=b]="_interface";const v=b+1;t[t._is=v]="_is";const E=v+1;t[t._keyof=E]="_keyof";const k=E+1;t[t._mixins=k]="_mixins";const _=k+1;t[t._module=_]="_module";const N=_+1;t[t._namespace=N]="_namespace";const D=N+1;t[t._of=D]="_of";const A=D+1;t[t._opaque=A]="_opaque";const W=A+1;t[t._out=W]="_out";const J=W+1;t[t._override=J]="_override";const ae=J+1;t[t._private=ae]="_private";const ie=ae+1;t[t._protected=ie]="_protected";const xe=ie+1;t[t._proto=xe]="_proto";const Pe=xe+1;t[t._public=Pe]="_public";const _e=Pe+1;t[t._readonly=_e]="_readonly";const z=_e+1;t[t._require=z]="_require";const Z=z+1;t[t._satisfies=Z]="_satisfies";const Y=Z+1;t[t._set=Y]="_set";const se=Y+1;t[t._static=se]="_static";const Oe=se+1;t[t._symbol=Oe]="_symbol";const Re=Oe+1;t[t._type=Re]="_type";const Le=Re+1;t[t._unique=Le]="_unique";const F=Le+1;t[t._using=F]="_using"})(w||(w={}));var i;(function(t){t[t.PRECEDENCE_MASK=15]="PRECEDENCE_MASK";const r=16;t[t.IS_KEYWORD=r]="IS_KEYWORD";const o=32;t[t.IS_ASSIGN=o]="IS_ASSIGN";const l=64;t[t.IS_RIGHT_ASSOCIATIVE=l]="IS_RIGHT_ASSOCIATIVE";const a=128;t[t.IS_PREFIX=a]="IS_PREFIX";const c=256;t[t.IS_POSTFIX=c]="IS_POSTFIX";const s=512;t[t.IS_EXPRESSION_START=s]="IS_EXPRESSION_START";const d=512;t[t.num=d]="num";const u=1536;t[t.bigint=u]="bigint";const h=2560;t[t.decimal=h]="decimal";const p=3584;t[t.regexp=p]="regexp";const y=4608;t[t.string=y]="string";const S=5632;t[t.name=S]="name";const g=6144;t[t.eof=g]="eof";const x=7680;t[t.bracketL=x]="bracketL";const P=8192;t[t.bracketR=P]="bracketR";const m=9728;t[t.braceL=m]="braceL";const O=10752;t[t.braceBarL=O]="braceBarL";const b=11264;t[t.braceR=b]="braceR";const v=12288;t[t.braceBarR=v]="braceBarR";const E=13824;t[t.parenL=E]="parenL";const k=14336;t[t.parenR=k]="parenR";const _=15360;t[t.comma=_]="comma";const N=16384;t[t.semi=N]="semi";const D=17408;t[t.colon=D]="colon";const A=18432;t[t.doubleColon=A]="doubleColon";const W=19456;t[t.dot=W]="dot";const J=20480;t[t.question=J]="question";const ae=21504;t[t.questionDot=ae]="questionDot";const ie=22528;t[t.arrow=ie]="arrow";const xe=23552;t[t.template=xe]="template";const Pe=24576;t[t.ellipsis=Pe]="ellipsis";const _e=25600;t[t.backQuote=_e]="backQuote";const z=27136;t[t.dollarBraceL=z]="dollarBraceL";const Z=27648;t[t.at=Z]="at";const Y=29184;t[t.hash=Y]="hash";const se=29728;t[t.eq=se]="eq";const Oe=30752;t[t.assign=Oe]="assign";const Re=32640;t[t.preIncDec=Re]="preIncDec";const Le=33664;t[t.postIncDec=Le]="postIncDec";const F=34432;t[t.bang=F]="bang";const $=35456;t[t.tilde=$]="tilde";const V=35841;t[t.pipeline=V]="pipeline";const X=36866;t[t.nullishCoalescing=X]="nullishCoalescing";const C=37890;t[t.logicalOR=C]="logicalOR";const T=38915;t[t.logicalAND=T]="logicalAND";const L=39940;t[t.bitwiseOR=L]="bitwiseOR";const q=40965;t[t.bitwiseXOR=q]="bitwiseXOR";const ee=41990;t[t.bitwiseAND=ee]="bitwiseAND";const Q=43015;t[t.equality=Q]="equality";const te=44040;t[t.lessThan=te]="lessThan";const be=45064;t[t.greaterThan=be]="greaterThan";const le=46088;t[t.relationalOrEqual=le]="relationalOrEqual";const de=47113;t[t.bitShiftL=de]="bitShiftL";const je=48137;t[t.bitShiftR=je]="bitShiftR";const ke=49802;t[t.plus=ke]="plus";const Be=50826;t[t.minus=Be]="minus";const Ve=51723;t[t.modulo=Ve]="modulo";const rn=52235;t[t.star=rn]="star";const _n=53259;t[t.slash=_n]="slash";const cn=54348;t[t.exponent=cn]="exponent";const rr=55296;t[t.jsxName=rr]="jsxName";const Ir=56320;t[t.jsxText=Ir]="jsxText";const xo=57344;t[t.jsxEmptyText=xo]="jsxEmptyText";const kr=58880;t[t.jsxTagStart=kr]="jsxTagStart";const or=59392;t[t.jsxTagEnd=or]="jsxTagEnd";const Hn=60928;t[t.typeParameterStart=Hn]="typeParameterStart";const Et=61440;t[t.nonNullAssertion=Et]="nonNullAssertion";const Nr=62480;t[t._break=Nr]="_break";const Cr=63504;t[t._case=Cr]="_case";const Tr=64528;t[t._catch=Tr]="_catch";const Ha=65552;t[t._continue=Ha]="_continue";const qa=66576;t[t._debugger=qa]="_debugger";const Wa=67600;t[t._default=Wa]="_default";const Va=68624;t[t._do=Va]="_do";const Ga=69648;t[t._else=Ga]="_else";const Ja=70672;t[t._finally=Ja]="_finally";const Xa=71696;t[t._for=Xa]="_for";const Ka=73232;t[t._function=Ka]="_function";const Qa=73744;t[t._if=Qa]="_if";const Ya=74768;t[t._return=Ya]="_return";const Za=75792;t[t._switch=Za]="_switch";const ec=77456;t[t._throw=ec]="_throw";const nc=77840;t[t._try=nc]="_try";const tc=78864;t[t._var=tc]="_var";const rc=79888;t[t._let=rc]="_let";const oc=80912;t[t._const=oc]="_const";const lc=81936;t[t._while=lc]="_while";const ic=82960;t[t._with=ic]="_with";const ac=84496;t[t._new=ac]="_new";const cc=85520;t[t._this=cc]="_this";const sc=86544;t[t._super=sc]="_super";const fc=87568;t[t._class=fc]="_class";const dc=88080;t[t._extends=dc]="_extends";const uc=89104;t[t._export=uc]="_export";const pc=90640;t[t._import=pc]="_import";const yc=91664;t[t._yield=yc]="_yield";const hc=92688;t[t._null=hc]="_null";const Oc=93712;t[t._true=Oc]="_true";const bc=94736;t[t._false=bc]="_false";const mc=95256;t[t._in=mc]="_in";const gc=96280;t[t._instanceof=gc]="_instanceof";const jc=97936;t[t._typeof=jc]="_typeof";const xc=98960;t[t._void=xc]="_void";const Km=99984;t[t._delete=Km]="_delete";const Qm=100880;t[t._async=Qm]="_async";const Ym=101904;t[t._get=Ym]="_get";const Zm=102928;t[t._set=Zm]="_set";const eg=103952;t[t._declare=eg]="_declare";const ng=104976;t[t._readonly=ng]="_readonly";const tg=106e3;t[t._abstract=tg]="_abstract";const rg=107024;t[t._static=rg]="_static";const og=107536;t[t._public=og]="_public";const lg=108560;t[t._private=lg]="_private";const ig=109584;t[t._protected=ig]="_protected";const ag=110608;t[t._override=ag]="_override";const cg=112144;t[t._as=cg]="_as";const sg=113168;t[t._enum=sg]="_enum";const fg=114192;t[t._type=fg]="_type";const dg=115216;t[t._implements=dg]="_implements"})(i||(i={}));function ew(t){switch(t){case i.num:return"num";case i.bigint:return"bigint";case i.decimal:return"decimal";case i.regexp:return"regexp";case i.string:return"string";case i.name:return"name";case i.eof:return"eof";case i.bracketL:return"[";case i.bracketR:return"]";case i.braceL:return"{";case i.braceBarL:return"{|";case i.braceR:return"}";case i.braceBarR:return"|}";case i.parenL:return"(";case i.parenR:return")";case i.comma:return",";case i.semi:return";";case i.colon:return":";case i.doubleColon:return"::";case i.dot:return".";case i.question:return"?";case i.questionDot:return"?.";case i.arrow:return"=>";case i.template:return"template";case i.ellipsis:return"...";case i.backQuote:return"`";case i.dollarBraceL:return"${";case i.at:return"@";case i.hash:return"#";case i.eq:return"=";case i.assign:return"_=";case i.preIncDec:return"++/--";case i.postIncDec:return"++/--";case i.bang:return"!";case i.tilde:return"~";case i.pipeline:return"|>";case i.nullishCoalescing:return"??";case i.logicalOR:return"||";case i.logicalAND:return"&&";case i.bitwiseOR:return"|";case i.bitwiseXOR:return"^";case i.bitwiseAND:return"&";case i.equality:return"==/!=";case i.lessThan:return"<";case i.greaterThan:return">";case i.relationalOrEqual:return"<=/>=";case i.bitShiftL:return"<<";case i.bitShiftR:return">>/>>>";case i.plus:return"+";case i.minus:return"-";case i.modulo:return"%";case i.star:return"*";case i.slash:return"/";case i.exponent:return"**";case i.jsxName:return"jsxName";case i.jsxText:return"jsxText";case i.jsxEmptyText:return"jsxEmptyText";case i.jsxTagStart:return"jsxTagStart";case i.jsxTagEnd:return"jsxTagEnd";case i.typeParameterStart:return"typeParameterStart";case i.nonNullAssertion:return"nonNullAssertion";case i._break:return"break";case i._case:return"case";case i._catch:return"catch";case i._continue:return"continue";case i._debugger:return"debugger";case i._default:return"default";case i._do:return"do";case i._else:return"else";case i._finally:return"finally";case i._for:return"for";case i._function:return"function";case i._if:return"if";case i._return:return"return";case i._switch:return"switch";case i._throw:return"throw";case i._try:return"try";case i._var:return"var";case i._let:return"let";case i._const:return"const";case i._while:return"while";case i._with:return"with";case i._new:return"new";case i._this:return"this";case i._super:return"super";case i._class:return"class";case i._extends:return"extends";case i._export:return"export";case i._import:return"import";case i._yield:return"yield";case i._null:return"null";case i._true:return"true";case i._false:return"false";case i._in:return"in";case i._instanceof:return"instanceof";case i._typeof:return"typeof";case i._void:return"void";case i._delete:return"delete";case i._async:return"async";case i._get:return"get";case i._set:return"set";case i._declare:return"declare";case i._readonly:return"readonly";case i._abstract:return"abstract";case i._static:return"static";case i._public:return"public";case i._private:return"private";case i._protected:return"protected";case i._override:return"override";case i._as:return"as";case i._enum:return"enum";case i._type:return"type";case i._implements:return"implements";default:return""}}class pt{constructor(e,r,o){this.startTokenIndex=e,this.endTokenIndex=r,this.isFunctionScope=o}}class nw{constructor(e,r,o,l,a,c,s,d,u,h,p,y,S){this.potentialArrowAt=e,this.noAnonFunctionType=r,this.inDisallowConditionalTypesContext=o,this.tokensLength=l,this.scopesLength=a,this.pos=c,this.type=s,this.contextualKeyword=d,this.start=u,this.end=h,this.isType=p,this.scopeDepth=y,this.error=S}}class pn{constructor(){pn.prototype.__init.call(this),pn.prototype.__init2.call(this),pn.prototype.__init3.call(this),pn.prototype.__init4.call(this),pn.prototype.__init5.call(this),pn.prototype.__init6.call(this),pn.prototype.__init7.call(this),pn.prototype.__init8.call(this),pn.prototype.__init9.call(this),pn.prototype.__init10.call(this),pn.prototype.__init11.call(this),pn.prototype.__init12.call(this),pn.prototype.__init13.call(this)}__init(){this.potentialArrowAt=-1}__init2(){this.noAnonFunctionType=!1}__init3(){this.inDisallowConditionalTypesContext=!1}__init4(){this.tokens=[]}__init5(){this.scopes=[]}__init6(){this.pos=0}__init7(){this.type=i.eof}__init8(){this.contextualKeyword=w.NONE}__init9(){this.start=0}__init10(){this.end=0}__init11(){this.isType=!1}__init12(){this.scopeDepth=0}__init13(){this.error=null}snapshot(){return new nw(this.potentialArrowAt,this.noAnonFunctionType,this.inDisallowConditionalTypesContext,this.tokens.length,this.scopes.length,this.pos,this.type,this.contextualKeyword,this.start,this.end,this.isType,this.scopeDepth,this.error)}restoreFromSnapshot(e){this.potentialArrowAt=e.potentialArrowAt,this.noAnonFunctionType=e.noAnonFunctionType,this.inDisallowConditionalTypesContext=e.inDisallowConditionalTypesContext,this.tokens.length=e.tokensLength,this.scopes.length=e.scopesLength,this.pos=e.pos,this.type=e.type,this.contextualKeyword=e.contextualKeyword,this.start=e.start,this.end=e.end,this.isType=e.isType,this.scopeDepth=e.scopeDepth,this.error=e.error}}var I;(function(t){t[t.backSpace=8]="backSpace";const r=10;t[t.lineFeed=r]="lineFeed";const o=9;t[t.tab=o]="tab";const l=13;t[t.carriageReturn=l]="carriageReturn";const a=14;t[t.shiftOut=a]="shiftOut";const c=32;t[t.space=c]="space";const s=33;t[t.exclamationMark=s]="exclamationMark";const d=34;t[t.quotationMark=d]="quotationMark";const u=35;t[t.numberSign=u]="numberSign";const h=36;t[t.dollarSign=h]="dollarSign";const p=37;t[t.percentSign=p]="percentSign";const y=38;t[t.ampersand=y]="ampersand";const S=39;t[t.apostrophe=S]="apostrophe";const g=40;t[t.leftParenthesis=g]="leftParenthesis";const x=41;t[t.rightParenthesis=x]="rightParenthesis";const P=42;t[t.asterisk=P]="asterisk";const m=43;t[t.plusSign=m]="plusSign";const O=44;t[t.comma=O]="comma";const b=45;t[t.dash=b]="dash";const v=46;t[t.dot=v]="dot";const E=47;t[t.slash=E]="slash";const k=48;t[t.digit0=k]="digit0";const _=49;t[t.digit1=_]="digit1";const N=50;t[t.digit2=N]="digit2";const D=51;t[t.digit3=D]="digit3";const A=52;t[t.digit4=A]="digit4";const W=53;t[t.digit5=W]="digit5";const J=54;t[t.digit6=J]="digit6";const ae=55;t[t.digit7=ae]="digit7";const ie=56;t[t.digit8=ie]="digit8";const xe=57;t[t.digit9=xe]="digit9";const Pe=58;t[t.colon=Pe]="colon";const _e=59;t[t.semicolon=_e]="semicolon";const z=60;t[t.lessThan=z]="lessThan";const Z=61;t[t.equalsTo=Z]="equalsTo";const Y=62;t[t.greaterThan=Y]="greaterThan";const se=63;t[t.questionMark=se]="questionMark";const Oe=64;t[t.atSign=Oe]="atSign";const Re=65;t[t.uppercaseA=Re]="uppercaseA";const Le=66;t[t.uppercaseB=Le]="uppercaseB";const F=67;t[t.uppercaseC=F]="uppercaseC";const $=68;t[t.uppercaseD=$]="uppercaseD";const V=69;t[t.uppercaseE=V]="uppercaseE";const X=70;t[t.uppercaseF=X]="uppercaseF";const C=71;t[t.uppercaseG=C]="uppercaseG";const T=72;t[t.uppercaseH=T]="uppercaseH";const L=73;t[t.uppercaseI=L]="uppercaseI";const q=74;t[t.uppercaseJ=q]="uppercaseJ";const ee=75;t[t.uppercaseK=ee]="uppercaseK";const Q=76;t[t.uppercaseL=Q]="uppercaseL";const te=77;t[t.uppercaseM=te]="uppercaseM";const be=78;t[t.uppercaseN=be]="uppercaseN";const le=79;t[t.uppercaseO=le]="uppercaseO";const de=80;t[t.uppercaseP=de]="uppercaseP";const je=81;t[t.uppercaseQ=je]="uppercaseQ";const ke=82;t[t.uppercaseR=ke]="uppercaseR";const Be=83;t[t.uppercaseS=Be]="uppercaseS";const Ve=84;t[t.uppercaseT=Ve]="uppercaseT";const rn=85;t[t.uppercaseU=rn]="uppercaseU";const _n=86;t[t.uppercaseV=_n]="uppercaseV";const cn=87;t[t.uppercaseW=cn]="uppercaseW";const rr=88;t[t.uppercaseX=rr]="uppercaseX";const Ir=89;t[t.uppercaseY=Ir]="uppercaseY";const xo=90;t[t.uppercaseZ=xo]="uppercaseZ";const kr=91;t[t.leftSquareBracket=kr]="leftSquareBracket";const or=92;t[t.backslash=or]="backslash";const Hn=93;t[t.rightSquareBracket=Hn]="rightSquareBracket";const Et=94;t[t.caret=Et]="caret";const Nr=95;t[t.underscore=Nr]="underscore";const Cr=96;t[t.graveAccent=Cr]="graveAccent";const Tr=97;t[t.lowercaseA=Tr]="lowercaseA";const Ha=98;t[t.lowercaseB=Ha]="lowercaseB";const qa=99;t[t.lowercaseC=qa]="lowercaseC";const Wa=100;t[t.lowercaseD=Wa]="lowercaseD";const Va=101;t[t.lowercaseE=Va]="lowercaseE";const Ga=102;t[t.lowercaseF=Ga]="lowercaseF";const Ja=103;t[t.lowercaseG=Ja]="lowercaseG";const Xa=104;t[t.lowercaseH=Xa]="lowercaseH";const Ka=105;t[t.lowercaseI=Ka]="lowercaseI";const Qa=106;t[t.lowercaseJ=Qa]="lowercaseJ";const Ya=107;t[t.lowercaseK=Ya]="lowercaseK";const Za=108;t[t.lowercaseL=Za]="lowercaseL";const ec=109;t[t.lowercaseM=ec]="lowercaseM";const nc=110;t[t.lowercaseN=nc]="lowercaseN";const tc=111;t[t.lowercaseO=tc]="lowercaseO";const rc=112;t[t.lowercaseP=rc]="lowercaseP";const oc=113;t[t.lowercaseQ=oc]="lowercaseQ";const lc=114;t[t.lowercaseR=lc]="lowercaseR";const ic=115;t[t.lowercaseS=ic]="lowercaseS";const ac=116;t[t.lowercaseT=ac]="lowercaseT";const cc=117;t[t.lowercaseU=cc]="lowercaseU";const sc=118;t[t.lowercaseV=sc]="lowercaseV";const fc=119;t[t.lowercaseW=fc]="lowercaseW";const dc=120;t[t.lowercaseX=dc]="lowercaseX";const uc=121;t[t.lowercaseY=uc]="lowercaseY";const pc=122;t[t.lowercaseZ=pc]="lowercaseZ";const yc=123;t[t.leftCurlyBrace=yc]="leftCurlyBrace";const hc=124;t[t.verticalBar=hc]="verticalBar";const Oc=125;t[t.rightCurlyBrace=Oc]="rightCurlyBrace";const bc=126;t[t.tilde=bc]="tilde";const mc=160;t[t.nonBreakingSpace=mc]="nonBreakingSpace";const gc=5760;t[t.oghamSpaceMark=gc]="oghamSpaceMark";const jc=8232;t[t.lineSeparator=jc]="lineSeparator";const xc=8233;t[t.paragraphSeparator=xc]="paragraphSeparator"})(I||(I={}));let Ra,me,we,f,K,sb;function ml(){return sb++}function tw(t){if("pos"in t){const e=ow(t.pos);t.message+=` (${e.line}:${e.column})`,t.loc=e}return t}class rw{constructor(e,r){this.line=e,this.column=r}}function ow(t){let e=1,r=1;for(let o=0;o<t;o++)K.charCodeAt(o)===I.lineFeed?(e++,r=1):r++;return new rw(e,r)}function lw(t,e,r,o){K=t,f=new pn,sb=1,Ra=e,me=r,we=o}function re(t){return f.contextualKeyword===t}function dd(t){const e=Cl();return e.type===i.name&&e.contextualKeyword===t}function Xe(t){return f.contextualKeyword===t&&R(i.name)}function We(t){Xe(t)||pe()}function Nn(){return j(i.eof)||j(i.braceR)||On()}function On(){const t=f.tokens[f.tokens.length-1],e=t?t.end:0;for(let r=e;r<f.start;r++){const o=K.charCodeAt(r);if(o===I.lineFeed||o===I.carriageReturn||o===8232||o===8233)return!0}return!1}function fb(){const t=ud();for(let e=f.end;e<t;e++){const r=K.charCodeAt(e);if(r===I.lineFeed||r===I.carriageReturn||r===8232||r===8233)return!0}return!1}function it(){return R(i.semi)||Nn()}function Ce(){it()||pe('Unexpected token, expected ";"')}function M(t){R(t)||pe(`Unexpected token, expected "${ew(t)}"`)}function pe(t="Unexpected token",e=f.start){if(f.error)return;const r=new SyntaxError(t);r.pos=e,f.error=r,f.pos=K.length,ue(i.eof)}const db=[9,11,12,I.space,I.nonBreakingSpace,I.oghamSpaceMark,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],jp=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,ub=new Uint8Array(65536);for(const t of db)ub[t]=1;function iw(t){if(t<48)return t===36;if(t<58)return!0;if(t<65)return!1;if(t<91)return!0;if(t<97)return t===95;if(t<123)return!0;if(t<128)return!1;throw new Error("Should not be called with non-ASCII char code.")}const Zn=new Uint8Array(65536);for(let t=0;t<128;t++)Zn[t]=iw(t)?1:0;for(let t=128;t<65536;t++)Zn[t]=1;for(const t of db)Zn[t]=0;Zn[8232]=0;Zn[8233]=0;const Nl=Zn.slice();for(let t=I.digit0;t<=I.digit9;t++)Nl[t]=0;const xp=new Int32Array([-1,27,783,918,1755,2376,2862,3483,-1,3699,-1,4617,4752,4833,5130,5508,5940,-1,6480,6939,7749,8181,8451,8613,-1,8829,-1,-1,-1,54,243,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,432,-1,-1,-1,675,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,81,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,108,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,135,-1,-1,-1,-1,-1,-1,-1,-1,-1,162,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,189,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,216,-1,-1,-1,-1,-1,-1,w._abstract<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,270,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,297,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,324,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,351,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,378,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,405,-1,-1,-1,-1,-1,-1,-1,-1,w._accessor<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._as<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,459,-1,-1,-1,-1,-1,594,-1,-1,-1,-1,-1,-1,486,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,513,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,540,-1,-1,-1,-1,-1,-1,w._assert<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,567,-1,-1,-1,-1,-1,-1,-1,w._asserts<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,621,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,648,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._async<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,702,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,729,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,756,-1,-1,-1,-1,-1,-1,w._await<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,810,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,837,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,864,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,891,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._break<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,945,-1,-1,-1,-1,-1,-1,1107,-1,-1,-1,1242,-1,-1,1350,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,972,1026,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,999,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._case<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1053,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1080,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._catch<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1134,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1161,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1188,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1215,-1,-1,-1,-1,-1,-1,-1,w._checks<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1269,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1296,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1323,-1,-1,-1,-1,-1,-1,-1,(i._class<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1377,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1404,1620,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1431,-1,-1,-1,-1,-1,-1,(i._const<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1458,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1485,-1,-1,-1,-1,-1,-1,-1,-1,1512,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1539,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1566,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1593,-1,-1,-1,-1,-1,-1,-1,-1,w._constructor<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1647,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1674,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1701,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1728,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._continue<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1782,-1,-1,-1,-1,-1,-1,-1,-1,-1,2349,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1809,1971,-1,-1,2106,-1,-1,-1,-1,-1,2241,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1836,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1863,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1917,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1944,-1,-1,-1,-1,-1,-1,-1,-1,(i._debugger<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1998,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2025,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2052,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2079,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._declare<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2133,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2160,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2187,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2214,-1,-1,-1,-1,-1,-1,(i._default<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2268,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2295,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2322,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._delete<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._do<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2403,-1,2484,-1,-1,-1,-1,-1,-1,-1,-1,-1,2565,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2430,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2457,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._else<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2511,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2538,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._enum<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2592,-1,-1,-1,2727,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2619,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2646,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2673,-1,-1,-1,-1,-1,-1,(i._export<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2700,-1,-1,-1,-1,-1,-1,-1,w._exports<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2754,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2781,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2808,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2835,-1,-1,-1,-1,-1,-1,-1,(i._extends<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2889,-1,-1,-1,-1,-1,-1,-1,2997,-1,-1,-1,-1,-1,3159,-1,-1,3213,-1,-1,3294,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2916,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2943,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2970,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._false<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3024,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3051,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3078,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3105,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3132,-1,(i._finally<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3186,-1,-1,-1,-1,-1,-1,-1,-1,(i._for<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3240,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3267,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._from<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3321,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3348,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3375,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3402,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3429,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3456,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._function<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3510,-1,-1,-1,-1,-1,-1,3564,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3537,-1,-1,-1,-1,-1,-1,w._get<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3591,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3618,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3645,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3672,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._global<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3726,-1,-1,-1,-1,-1,-1,3753,4077,-1,-1,-1,-1,4590,-1,-1,-1,-1,-1,-1,-1,(i._if<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3780,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3807,-1,-1,3996,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3834,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3861,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3888,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3915,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3942,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3969,-1,-1,-1,-1,-1,-1,-1,w._implements<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4023,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4050,-1,-1,-1,-1,-1,-1,(i._import<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._in<<1)+1,-1,-1,-1,-1,-1,4104,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4185,4401,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4131,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4158,-1,-1,-1,-1,-1,-1,-1,-1,w._infer<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4212,-1,-1,-1,-1,-1,-1,-1,4239,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4266,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4293,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4320,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4347,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4374,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._instanceof<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4428,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4455,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4482,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4509,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4536,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4563,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._interface<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._is<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4644,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4671,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4698,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4725,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._keyof<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4779,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4806,-1,-1,-1,-1,-1,-1,(i._let<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4860,-1,-1,-1,-1,-1,4995,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4887,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4914,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4941,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4968,-1,-1,-1,-1,-1,-1,-1,w._mixins<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5022,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5049,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5076,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5103,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._module<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5157,-1,-1,-1,5373,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5427,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5184,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5211,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5238,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5265,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5292,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5319,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5346,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._namespace<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5400,-1,-1,-1,(i._new<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5454,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5481,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._null<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5535,-1,-1,-1,-1,-1,-1,-1,-1,-1,5562,-1,-1,-1,-1,5697,5751,-1,-1,-1,-1,w._of<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5589,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5616,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5643,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5670,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._opaque<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5724,-1,-1,-1,-1,-1,-1,w._out<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5778,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5805,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5832,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5859,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5886,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5913,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._override<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5967,-1,-1,6345,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5994,-1,-1,-1,-1,-1,6129,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6021,-1,-1,-1,-1,-1,6048,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6075,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6102,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._private<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6156,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6183,-1,-1,-1,-1,-1,-1,-1,-1,-1,6318,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6210,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6237,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6264,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6291,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._protected<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._proto<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6426,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6453,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._public<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6507,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6534,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6696,-1,-1,6831,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6561,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6588,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6615,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6642,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6669,-1,w._readonly<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6723,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6750,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6777,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6804,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._require<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6858,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6885,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6912,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._return<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6966,-1,-1,-1,7182,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7236,7371,-1,7479,-1,7614,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6993,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7020,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7047,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7074,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7101,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7128,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7155,-1,-1,-1,-1,-1,-1,-1,w._satisfies<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7209,-1,-1,-1,-1,-1,-1,w._set<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7263,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7290,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7317,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7344,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._static<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7398,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7425,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7452,-1,-1,-1,-1,-1,-1,-1,-1,(i._super<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7506,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7533,-1,-1,-1,-1,-1,-1,-1,-1,-1,7560,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7587,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._switch<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7641,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7668,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7695,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7722,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._symbol<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7776,-1,-1,-1,-1,-1,-1,-1,-1,-1,7938,-1,-1,-1,-1,-1,-1,8046,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7803,-1,-1,-1,-1,-1,-1,-1,-1,7857,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7830,-1,-1,-1,-1,-1,-1,-1,(i._this<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7884,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7911,-1,-1,-1,(i._throw<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7965,-1,-1,-1,8019,-1,-1,-1,-1,-1,-1,7992,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._true<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._try<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8073,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8100,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._type<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8127,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8154,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._typeof<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8208,-1,-1,-1,-1,8343,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8235,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8262,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8289,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8316,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._unique<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8370,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8397,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8424,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,w._using<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8478,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8532,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8505,-1,-1,-1,-1,-1,-1,-1,-1,(i._var<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8559,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8586,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._void<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8640,8748,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8667,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8694,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8721,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._while<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8775,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8802,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._with<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8856,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8883,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8910,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8937,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,(i._yield<<1)+1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);function aw(){let t=0,e=0,r=f.pos;for(;r<K.length&&(e=K.charCodeAt(r),!(e<I.lowercaseA||e>I.lowercaseZ));){const l=xp[t+(e-I.lowercaseA)+1];if(l===-1)break;t=l,r++}const o=xp[t];if(o>-1&&!Zn[e]){f.pos=r,o&1?ue(o>>>1):ue(i.name,o>>>1);return}for(;r<K.length;){const l=K.charCodeAt(r);if(Zn[l])r++;else if(l===I.backslash){if(r+=2,K.charCodeAt(r)===I.leftCurlyBrace){for(;r<K.length&&K.charCodeAt(r)!==I.rightCurlyBrace;)r++;r++}}else if(l===I.atSign&&K.charCodeAt(r+1)===I.atSign)r+=2;else break}f.pos=r,ue(i.name)}var oe;(function(t){t[t.Access=0]="Access";const r=1;t[t.ExportAccess=r]="ExportAccess";const o=r+1;t[t.TopLevelDeclaration=o]="TopLevelDeclaration";const l=o+1;t[t.FunctionScopedDeclaration=l]="FunctionScopedDeclaration";const a=l+1;t[t.BlockScopedDeclaration=a]="BlockScopedDeclaration";const c=a+1;t[t.ObjectShorthandTopLevelDeclaration=c]="ObjectShorthandTopLevelDeclaration";const s=c+1;t[t.ObjectShorthandFunctionScopedDeclaration=s]="ObjectShorthandFunctionScopedDeclaration";const d=s+1;t[t.ObjectShorthandBlockScopedDeclaration=d]="ObjectShorthandBlockScopedDeclaration";const u=d+1;t[t.ObjectShorthand=u]="ObjectShorthand";const h=u+1;t[t.ImportDeclaration=h]="ImportDeclaration";const p=h+1;t[t.ObjectKey=p]="ObjectKey";const y=p+1;t[t.ImportAccess=y]="ImportAccess"})(oe||(oe={}));var Jn;(function(t){t[t.NoChildren=0]="NoChildren";const r=1;t[t.OneChild=r]="OneChild";const o=r+1;t[t.StaticChildren=o]="StaticChildren";const l=o+1;t[t.KeyAfterPropSpread=l]="KeyAfterPropSpread"})(Jn||(Jn={}));function pb(t){const e=t.identifierRole;return e===oe.TopLevelDeclaration||e===oe.FunctionScopedDeclaration||e===oe.BlockScopedDeclaration||e===oe.ObjectShorthandTopLevelDeclaration||e===oe.ObjectShorthandFunctionScopedDeclaration||e===oe.ObjectShorthandBlockScopedDeclaration}function cw(t){const e=t.identifierRole;return e===oe.FunctionScopedDeclaration||e===oe.BlockScopedDeclaration||e===oe.ObjectShorthandFunctionScopedDeclaration||e===oe.ObjectShorthandBlockScopedDeclaration}function yb(t){const e=t.identifierRole;return e===oe.TopLevelDeclaration||e===oe.ObjectShorthandTopLevelDeclaration||e===oe.ImportDeclaration}function sw(t){const e=t.identifierRole;return e===oe.TopLevelDeclaration||e===oe.BlockScopedDeclaration||e===oe.ObjectShorthandTopLevelDeclaration||e===oe.ObjectShorthandBlockScopedDeclaration}function fw(t){const e=t.identifierRole;return e===oe.FunctionScopedDeclaration||e===oe.ObjectShorthandFunctionScopedDeclaration}function dw(t){return t.identifierRole===oe.ObjectShorthandTopLevelDeclaration||t.identifierRole===oe.ObjectShorthandBlockScopedDeclaration||t.identifierRole===oe.ObjectShorthandFunctionScopedDeclaration}class La{constructor(){this.type=f.type,this.contextualKeyword=f.contextualKeyword,this.start=f.start,this.end=f.end,this.scopeDepth=f.scopeDepth,this.isType=f.isType,this.identifierRole=null,this.jsxRole=null,this.shadowsGlobal=!1,this.isAsyncOperation=!1,this.contextId=null,this.rhsEndIndex=null,this.isExpression=!1,this.numNullishCoalesceStarts=0,this.numNullishCoalesceEnds=0,this.isOptionalChainStart=!1,this.isOptionalChainEnd=!1,this.subscriptStartIndex=null,this.nullishStartIndex=null}}function B(){f.tokens.push(new La),mb()}function Ft(){f.tokens.push(new La),f.start=f.pos,Iw()}function uw(){f.type===i.assign&&--f.pos,Sw()}function he(t){for(let r=f.tokens.length-t;r<f.tokens.length;r++)f.tokens[r].isType=!0;const e=f.isType;return f.isType=!0,e}function ye(t){f.isType=t}function R(t){return j(t)?(B(),!0):!1}function hb(t){const e=f.isType;f.isType=!0,R(t),f.isType=e}function j(t){return f.type===t}function Me(){const t=f.snapshot();B();const e=f.type;return f.restoreFromSnapshot(t),e}class pw{constructor(e,r){this.type=e,this.contextualKeyword=r}}function Cl(){const t=f.snapshot();B();const e=f.type,r=f.contextualKeyword;return f.restoreFromSnapshot(t),new pw(e,r)}function ud(){return Ob(f.pos)}function Ob(t){jp.lastIndex=t;const e=jp.exec(K);return t+e[0].length}function bb(){return K.charCodeAt(ud())}function mb(){if(jb(),f.start=f.pos,f.pos>=K.length){const t=f.tokens;t.length>=2&&t[t.length-1].start>=K.length&&t[t.length-2].start>=K.length&&pe("Unexpectedly reached the end of input."),ue(i.eof);return}yw(K.charCodeAt(f.pos))}function yw(t){Nl[t]||t===I.backslash||t===I.atSign&&K.charCodeAt(f.pos+1)===I.atSign?aw():wb(t)}function hw(){for(;K.charCodeAt(f.pos)!==I.asterisk||K.charCodeAt(f.pos+1)!==I.slash;)if(f.pos++,f.pos>K.length){pe("Unterminated comment",f.pos-2);return}f.pos+=2}function gb(t){let e=K.charCodeAt(f.pos+=t);if(f.pos<K.length)for(;e!==I.lineFeed&&e!==I.carriageReturn&&e!==I.lineSeparator&&e!==I.paragraphSeparator&&++f.pos<K.length;)e=K.charCodeAt(f.pos)}function jb(){for(;f.pos<K.length;){const t=K.charCodeAt(f.pos);switch(t){case I.carriageReturn:K.charCodeAt(f.pos+1)===I.lineFeed&&++f.pos;case I.lineFeed:case I.lineSeparator:case I.paragraphSeparator:++f.pos;break;case I.slash:switch(K.charCodeAt(f.pos+1)){case I.asterisk:f.pos+=2,hw();break;case I.slash:gb(2);break;default:return}break;default:if(ub[t])++f.pos;else return}}}function ue(t,e=w.NONE){f.end=f.pos,f.type=t,f.contextualKeyword=e}function Ow(){const t=K.charCodeAt(f.pos+1);if(t>=I.digit0&&t<=I.digit9){Pb(!0);return}t===I.dot&&K.charCodeAt(f.pos+2)===I.dot?(f.pos+=3,ue(i.ellipsis)):(++f.pos,ue(i.dot))}function bw(){K.charCodeAt(f.pos+1)===I.equalsTo?Se(i.assign,2):Se(i.slash,1)}function mw(t){let e=t===I.asterisk?i.star:i.modulo,r=1,o=K.charCodeAt(f.pos+1);t===I.asterisk&&o===I.asterisk&&(r++,o=K.charCodeAt(f.pos+2),e=i.exponent),o===I.equalsTo&&K.charCodeAt(f.pos+2)!==I.greaterThan&&(r++,e=i.assign),Se(e,r)}function gw(t){const e=K.charCodeAt(f.pos+1);if(e===t){K.charCodeAt(f.pos+2)===I.equalsTo?Se(i.assign,3):Se(t===I.verticalBar?i.logicalOR:i.logicalAND,2);return}if(t===I.verticalBar){if(e===I.greaterThan){Se(i.pipeline,2);return}else if(e===I.rightCurlyBrace&&we){Se(i.braceBarR,2);return}}if(e===I.equalsTo){Se(i.assign,2);return}Se(t===I.verticalBar?i.bitwiseOR:i.bitwiseAND,1)}function jw(){K.charCodeAt(f.pos+1)===I.equalsTo?Se(i.assign,2):Se(i.bitwiseXOR,1)}function xw(t){const e=K.charCodeAt(f.pos+1);if(e===t){Se(i.preIncDec,2);return}e===I.equalsTo?Se(i.assign,2):t===I.plusSign?Se(i.plus,1):Se(i.minus,1)}function vw(){const t=K.charCodeAt(f.pos+1);if(t===I.lessThan){if(K.charCodeAt(f.pos+2)===I.equalsTo){Se(i.assign,3);return}f.isType?Se(i.lessThan,1):Se(i.bitShiftL,2);return}t===I.equalsTo?Se(i.relationalOrEqual,2):Se(i.lessThan,1)}function xb(){if(f.isType){Se(i.greaterThan,1);return}const t=K.charCodeAt(f.pos+1);if(t===I.greaterThan){const e=K.charCodeAt(f.pos+2)===I.greaterThan?3:2;if(K.charCodeAt(f.pos+e)===I.equalsTo){Se(i.assign,e+1);return}Se(i.bitShiftR,e);return}t===I.equalsTo?Se(i.relationalOrEqual,2):Se(i.greaterThan,1)}function vb(){f.type===i.greaterThan&&(f.pos-=1,xb())}function ww(t){const e=K.charCodeAt(f.pos+1);if(e===I.equalsTo){Se(i.equality,K.charCodeAt(f.pos+2)===I.equalsTo?3:2);return}if(t===I.equalsTo&&e===I.greaterThan){f.pos+=2,ue(i.arrow);return}Se(t===I.equalsTo?i.eq:i.bang,1)}function Pw(){const t=K.charCodeAt(f.pos+1),e=K.charCodeAt(f.pos+2);t===I.questionMark&&!(we&&f.isType)?e===I.equalsTo?Se(i.assign,3):Se(i.nullishCoalescing,2):t===I.dot&&!(e>=I.digit0&&e<=I.digit9)?(f.pos+=2,ue(i.questionDot)):(++f.pos,ue(i.question))}function wb(t){switch(t){case I.numberSign:++f.pos,ue(i.hash);return;case I.dot:Ow();return;case I.leftParenthesis:++f.pos,ue(i.parenL);return;case I.rightParenthesis:++f.pos,ue(i.parenR);return;case I.semicolon:++f.pos,ue(i.semi);return;case I.comma:++f.pos,ue(i.comma);return;case I.leftSquareBracket:++f.pos,ue(i.bracketL);return;case I.rightSquareBracket:++f.pos,ue(i.bracketR);return;case I.leftCurlyBrace:we&&K.charCodeAt(f.pos+1)===I.verticalBar?Se(i.braceBarL,2):(++f.pos,ue(i.braceL));return;case I.rightCurlyBrace:++f.pos,ue(i.braceR);return;case I.colon:K.charCodeAt(f.pos+1)===I.colon?Se(i.doubleColon,2):(++f.pos,ue(i.colon));return;case I.questionMark:Pw();return;case I.atSign:++f.pos,ue(i.at);return;case I.graveAccent:++f.pos,ue(i.backQuote);return;case I.digit0:{const e=K.charCodeAt(f.pos+1);if(e===I.lowercaseX||e===I.uppercaseX||e===I.lowercaseO||e===I.uppercaseO||e===I.lowercaseB||e===I.uppercaseB){_w();return}}case I.digit1:case I.digit2:case I.digit3:case I.digit4:case I.digit5:case I.digit6:case I.digit7:case I.digit8:case I.digit9:Pb(!1);return;case I.quotationMark:case I.apostrophe:Ew(t);return;case I.slash:bw();return;case I.percentSign:case I.asterisk:mw(t);return;case I.verticalBar:case I.ampersand:gw(t);return;case I.caret:jw();return;case I.plusSign:case I.dash:xw(t);return;case I.lessThan:vw();return;case I.greaterThan:xb();return;case I.equalsTo:case I.exclamationMark:ww(t);return;case I.tilde:Se(i.tilde,1);return}pe(`Unexpected character '${String.fromCharCode(t)}'`,f.pos)}function Se(t,e){f.pos+=e,ue(t)}function Sw(){const t=f.pos;let e=!1,r=!1;for(;;){if(f.pos>=K.length){pe("Unterminated regular expression",t);return}const o=K.charCodeAt(f.pos);if(e)e=!1;else{if(o===I.leftSquareBracket)r=!0;else if(o===I.rightSquareBracket&&r)r=!1;else if(o===I.slash&&!r)break;e=o===I.backslash}++f.pos}++f.pos,kw(),ue(i.regexp)}function Qc(){for(;;){const t=K.charCodeAt(f.pos);if(t>=I.digit0&&t<=I.digit9||t===I.underscore)f.pos++;else break}}function _w(){for(f.pos+=2;;){const e=K.charCodeAt(f.pos);if(e>=I.digit0&&e<=I.digit9||e>=I.lowercaseA&&e<=I.lowercaseF||e>=I.uppercaseA&&e<=I.uppercaseF||e===I.underscore)f.pos++;else break}K.charCodeAt(f.pos)===I.lowercaseN?(++f.pos,ue(i.bigint)):ue(i.num)}function Pb(t){let e=!1,r=!1;t||Qc();let o=K.charCodeAt(f.pos);if(o===I.dot&&(++f.pos,Qc(),o=K.charCodeAt(f.pos)),(o===I.uppercaseE||o===I.lowercaseE)&&(o=K.charCodeAt(++f.pos),(o===I.plusSign||o===I.dash)&&++f.pos,Qc(),o=K.charCodeAt(f.pos)),o===I.lowercaseN?(++f.pos,e=!0):o===I.lowercaseM&&(++f.pos,r=!0),e){ue(i.bigint);return}if(r){ue(i.decimal);return}ue(i.num)}function Ew(t){for(f.pos++;;){if(f.pos>=K.length){pe("Unterminated string constant");return}const e=K.charCodeAt(f.pos);if(e===I.backslash)f.pos++;else if(e===t)break;f.pos++}f.pos++,ue(i.string)}function Iw(){for(;;){if(f.pos>=K.length){pe("Unterminated template");return}const t=K.charCodeAt(f.pos);if(t===I.graveAccent||t===I.dollarSign&&K.charCodeAt(f.pos+1)===I.leftCurlyBrace){if(f.pos===f.start&&j(i.template))if(t===I.dollarSign){f.pos+=2,ue(i.dollarBraceL);return}else{++f.pos,ue(i.backQuote);return}ue(i.template);return}t===I.backslash&&f.pos++,f.pos++}}function kw(){for(;f.pos<K.length;){const t=K.charCodeAt(f.pos);if(Zn[t])f.pos++;else if(t===I.backslash){if(f.pos+=2,K.charCodeAt(f.pos)===I.leftCurlyBrace){for(;f.pos<K.length&&K.charCodeAt(f.pos)!==I.rightCurlyBrace;)f.pos++;f.pos++}}else break}}function gl(t,e=t.currentIndex()){let r=e+1;if(ti(t,r)){const o=t.identifierNameAtIndex(e);return{isType:!1,leftName:o,rightName:o,endIndex:r}}if(r++,ti(t,r))return{isType:!0,leftName:null,rightName:null,endIndex:r};if(r++,ti(t,r))return{isType:!1,leftName:t.identifierNameAtIndex(e),rightName:t.identifierNameAtIndex(e+2),endIndex:r};if(r++,ti(t,r))return{isType:!0,leftName:null,rightName:null,endIndex:r};throw new Error(`Unexpected import/export specifier at ${e}`)}function ti(t,e){const r=t.tokens[e];return r.type===i.braceR||r.type===i.comma}const Nw=new Map([["quot",'"'],["amp","&"],["apos","'"],["lt","<"],["gt",">"],["nbsp"," "],["iexcl","¡"],["cent","¢"],["pound","£"],["curren","¤"],["yen","¥"],["brvbar","¦"],["sect","§"],["uml","¨"],["copy","©"],["ordf","ª"],["laquo","«"],["not","¬"],["shy","­"],["reg","®"],["macr","¯"],["deg","°"],["plusmn","±"],["sup2","²"],["sup3","³"],["acute","´"],["micro","µ"],["para","¶"],["middot","·"],["cedil","¸"],["sup1","¹"],["ordm","º"],["raquo","»"],["frac14","¼"],["frac12","½"],["frac34","¾"],["iquest","¿"],["Agrave","À"],["Aacute","Á"],["Acirc","Â"],["Atilde","Ã"],["Auml","Ä"],["Aring","Å"],["AElig","Æ"],["Ccedil","Ç"],["Egrave","È"],["Eacute","É"],["Ecirc","Ê"],["Euml","Ë"],["Igrave","Ì"],["Iacute","Í"],["Icirc","Î"],["Iuml","Ï"],["ETH","Ð"],["Ntilde","Ñ"],["Ograve","Ò"],["Oacute","Ó"],["Ocirc","Ô"],["Otilde","Õ"],["Ouml","Ö"],["times","×"],["Oslash","Ø"],["Ugrave","Ù"],["Uacute","Ú"],["Ucirc","Û"],["Uuml","Ü"],["Yacute","Ý"],["THORN","Þ"],["szlig","ß"],["agrave","à"],["aacute","á"],["acirc","â"],["atilde","ã"],["auml","ä"],["aring","å"],["aelig","æ"],["ccedil","ç"],["egrave","è"],["eacute","é"],["ecirc","ê"],["euml","ë"],["igrave","ì"],["iacute","í"],["icirc","î"],["iuml","ï"],["eth","ð"],["ntilde","ñ"],["ograve","ò"],["oacute","ó"],["ocirc","ô"],["otilde","õ"],["ouml","ö"],["divide","÷"],["oslash","ø"],["ugrave","ù"],["uacute","ú"],["ucirc","û"],["uuml","ü"],["yacute","ý"],["thorn","þ"],["yuml","ÿ"],["OElig","Œ"],["oelig","œ"],["Scaron","Š"],["scaron","š"],["Yuml","Ÿ"],["fnof","ƒ"],["circ","ˆ"],["tilde","˜"],["Alpha","Α"],["Beta","Β"],["Gamma","Γ"],["Delta","Δ"],["Epsilon","Ε"],["Zeta","Ζ"],["Eta","Η"],["Theta","Θ"],["Iota","Ι"],["Kappa","Κ"],["Lambda","Λ"],["Mu","Μ"],["Nu","Ν"],["Xi","Ξ"],["Omicron","Ο"],["Pi","Π"],["Rho","Ρ"],["Sigma","Σ"],["Tau","Τ"],["Upsilon","Υ"],["Phi","Φ"],["Chi","Χ"],["Psi","Ψ"],["Omega","Ω"],["alpha","α"],["beta","β"],["gamma","γ"],["delta","δ"],["epsilon","ε"],["zeta","ζ"],["eta","η"],["theta","θ"],["iota","ι"],["kappa","κ"],["lambda","λ"],["mu","μ"],["nu","ν"],["xi","ξ"],["omicron","ο"],["pi","π"],["rho","ρ"],["sigmaf","ς"],["sigma","σ"],["tau","τ"],["upsilon","υ"],["phi","φ"],["chi","χ"],["psi","ψ"],["omega","ω"],["thetasym","ϑ"],["upsih","ϒ"],["piv","ϖ"],["ensp"," "],["emsp"," "],["thinsp"," "],["zwnj","‌"],["zwj","‍"],["lrm","‎"],["rlm","‏"],["ndash","–"],["mdash","—"],["lsquo","‘"],["rsquo","’"],["sbquo","‚"],["ldquo","“"],["rdquo","”"],["bdquo","„"],["dagger","†"],["Dagger","‡"],["bull","•"],["hellip","…"],["permil","‰"],["prime","′"],["Prime","″"],["lsaquo","‹"],["rsaquo","›"],["oline","‾"],["frasl","⁄"],["euro","€"],["image","ℑ"],["weierp","℘"],["real","ℜ"],["trade","™"],["alefsym","ℵ"],["larr","←"],["uarr","↑"],["rarr","→"],["darr","↓"],["harr","↔"],["crarr","↵"],["lArr","⇐"],["uArr","⇑"],["rArr","⇒"],["dArr","⇓"],["hArr","⇔"],["forall","∀"],["part","∂"],["exist","∃"],["empty","∅"],["nabla","∇"],["isin","∈"],["notin","∉"],["ni","∋"],["prod","∏"],["sum","∑"],["minus","−"],["lowast","∗"],["radic","√"],["prop","∝"],["infin","∞"],["ang","∠"],["and","∧"],["or","∨"],["cap","∩"],["cup","∪"],["int","∫"],["there4","∴"],["sim","∼"],["cong","≅"],["asymp","≈"],["ne","≠"],["equiv","≡"],["le","≤"],["ge","≥"],["sub","⊂"],["sup","⊃"],["nsub","⊄"],["sube","⊆"],["supe","⊇"],["oplus","⊕"],["otimes","⊗"],["perp","⊥"],["sdot","⋅"],["lceil","⌈"],["rceil","⌉"],["lfloor","⌊"],["rfloor","⌋"],["lang","〈"],["rang","〉"],["loz","◊"],["spades","♠"],["clubs","♣"],["hearts","♥"],["diams","♦"]]);function Sb(t){const[e,r]=vp(t.jsxPragma||"React.createElement"),[o,l]=vp(t.jsxFragmentPragma||"React.Fragment");return{base:e,suffix:r,fragmentBase:o,fragmentSuffix:l}}function vp(t){let e=t.indexOf(".");return e===-1&&(e=t.length),[t.slice(0,e),t.slice(e)]}class et{getPrefixCode(){return""}getHoistedCode(){return""}getSuffixCode(){return""}}class ar extends et{__init(){this.lastLineNumber=1}__init2(){this.lastIndex=0}__init3(){this.filenameVarName=null}__init4(){this.esmAutomaticImportNameResolutions={}}__init5(){this.cjsAutomaticModuleNameResolutions={}}constructor(e,r,o,l,a){super(),this.rootTransformer=e,this.tokens=r,this.importProcessor=o,this.nameManager=l,this.options=a,ar.prototype.__init.call(this),ar.prototype.__init2.call(this),ar.prototype.__init3.call(this),ar.prototype.__init4.call(this),ar.prototype.__init5.call(this),this.jsxPragmaInfo=Sb(a),this.isAutomaticRuntime=a.jsxRuntime==="automatic",this.jsxImportSource=a.jsxImportSource||"react"}process(){return this.tokens.matches1(i.jsxTagStart)?(this.processJSXTag(),!0):!1}getPrefixCode(){let e="";if(this.filenameVarName&&(e+=`const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath||"")};`),this.isAutomaticRuntime)if(this.importProcessor)for(const[r,o]of Object.entries(this.cjsAutomaticModuleNameResolutions))e+=`var ${o} = require("${r}");`;else{const{createElement:r,...o}=this.esmAutomaticImportNameResolutions;r&&(e+=`import {createElement as ${r}} from "${this.jsxImportSource}";`);const l=Object.entries(o).map(([a,c])=>`${a} as ${c}`).join(", ");if(l){const a=this.jsxImportSource+(this.options.production?"/jsx-runtime":"/jsx-dev-runtime");e+=`import {${l}} from "${a}";`}}return e}processJSXTag(){const{jsxRole:e,start:r}=this.tokens.currentToken(),o=this.options.production?null:this.getElementLocationCode(r);this.isAutomaticRuntime&&e!==Jn.KeyAfterPropSpread?this.transformTagToJSXFunc(o,e):this.transformTagToCreateElement(o)}getElementLocationCode(e){return`lineNumber: ${this.getLineNumberForIndex(e)}`}getLineNumberForIndex(e){const r=this.tokens.code;for(;this.lastIndex<e&&this.lastIndex<r.length;)r[this.lastIndex]===`
`&&this.lastLineNumber++,this.lastIndex++;return this.lastLineNumber}transformTagToJSXFunc(e,r){const o=r===Jn.StaticChildren;this.tokens.replaceToken(this.getJSXFuncInvocationCode(o));let l=null;if(this.tokens.matches1(i.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, {`),this.processAutomaticChildrenAndEndProps(r);else{if(this.processTagIntro(),this.tokens.appendCode(", {"),l=this.processProps(!0),this.tokens.matches2(i.slash,i.jsxTagEnd))this.tokens.appendCode("}");else if(this.tokens.matches1(i.jsxTagEnd))this.tokens.removeToken(),this.processAutomaticChildrenAndEndProps(r);else throw new Error("Expected either /> or > at the end of the tag.");l&&this.tokens.appendCode(`, ${l}`)}for(this.options.production||(l===null&&this.tokens.appendCode(", void 0"),this.tokens.appendCode(`, ${o}, ${this.getDevSource(e)}, this`)),this.tokens.removeInitialToken();!this.tokens.matches1(i.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}transformTagToCreateElement(e){if(this.tokens.replaceToken(this.getCreateElementInvocationCode()),this.tokens.matches1(i.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, null`),this.processChildren(!0);else if(this.processTagIntro(),this.processPropsObjectWithDevInfo(e),!this.tokens.matches2(i.slash,i.jsxTagEnd))if(this.tokens.matches1(i.jsxTagEnd))this.tokens.removeToken(),this.processChildren(!0);else throw new Error("Expected either /> or > at the end of the tag.");for(this.tokens.removeInitialToken();!this.tokens.matches1(i.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}getJSXFuncInvocationCode(e){return this.options.production?e?this.claimAutoImportedFuncInvocation("jsxs","/jsx-runtime"):this.claimAutoImportedFuncInvocation("jsx","/jsx-runtime"):this.claimAutoImportedFuncInvocation("jsxDEV","/jsx-dev-runtime")}getCreateElementInvocationCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedFuncInvocation("createElement","");{const{jsxPragmaInfo:e}=this;return`${this.importProcessor&&this.importProcessor.getIdentifierReplacement(e.base)||e.base}${e.suffix}(`}}getFragmentCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedName("Fragment",this.options.production?"/jsx-runtime":"/jsx-dev-runtime");{const{jsxPragmaInfo:e}=this;return(this.importProcessor&&this.importProcessor.getIdentifierReplacement(e.fragmentBase)||e.fragmentBase)+e.fragmentSuffix}}claimAutoImportedFuncInvocation(e,r){const o=this.claimAutoImportedName(e,r);return this.importProcessor?`${o}.call(void 0, `:`${o}(`}claimAutoImportedName(e,r){if(this.importProcessor){const o=this.jsxImportSource+r;return this.cjsAutomaticModuleNameResolutions[o]||(this.cjsAutomaticModuleNameResolutions[o]=this.importProcessor.getFreeIdentifierForPath(o)),`${this.cjsAutomaticModuleNameResolutions[o]}.${e}`}else return this.esmAutomaticImportNameResolutions[e]||(this.esmAutomaticImportNameResolutions[e]=this.nameManager.claimFreeName(`_${e}`)),this.esmAutomaticImportNameResolutions[e]}processTagIntro(){let e=this.tokens.currentIndex()+1;for(;this.tokens.tokens[e].isType||!this.tokens.matches2AtIndex(e-1,i.jsxName,i.jsxName)&&!this.tokens.matches2AtIndex(e-1,i.greaterThan,i.jsxName)&&!this.tokens.matches1AtIndex(e,i.braceL)&&!this.tokens.matches1AtIndex(e,i.jsxTagEnd)&&!this.tokens.matches2AtIndex(e,i.slash,i.jsxTagEnd);)e++;if(e===this.tokens.currentIndex()+1){const r=this.tokens.identifierName();_b(r)&&this.tokens.replaceToken(`'${r}'`)}for(;this.tokens.currentIndex()<e;)this.rootTransformer.processToken()}processPropsObjectWithDevInfo(e){const r=this.options.production?"":`__self: this, __source: ${this.getDevSource(e)}`;if(!this.tokens.matches1(i.jsxName)&&!this.tokens.matches1(i.braceL)){r?this.tokens.appendCode(`, {${r}}`):this.tokens.appendCode(", null");return}this.tokens.appendCode(", {"),this.processProps(!1),r?this.tokens.appendCode(` ${r}}`):this.tokens.appendCode("}")}processProps(e){let r=null;for(;;){if(this.tokens.matches2(i.jsxName,i.eq)){const o=this.tokens.identifierName();if(e&&o==="key"){r!==null&&this.tokens.appendCode(r.replace(/[^\n]/g,"")),this.tokens.removeToken(),this.tokens.removeToken();const l=this.tokens.snapshot();this.processPropValue(),r=this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(l);continue}else this.processPropName(o),this.tokens.replaceToken(": "),this.processPropValue()}else if(this.tokens.matches1(i.jsxName)){const o=this.tokens.identifierName();this.processPropName(o),this.tokens.appendCode(": true")}else if(this.tokens.matches1(i.braceL))this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("");else break;this.tokens.appendCode(",")}return r}processPropName(e){e.includes("-")?this.tokens.replaceToken(`'${e}'`):this.tokens.copyToken()}processPropValue(){this.tokens.matches1(i.braceL)?(this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("")):this.tokens.matches1(i.jsxTagStart)?this.processJSXTag():this.processStringPropValue()}processStringPropValue(){const e=this.tokens.currentToken(),r=this.tokens.code.slice(e.start+1,e.end-1),o=wp(r),l=Tw(r);this.tokens.replaceToken(l+o)}processAutomaticChildrenAndEndProps(e){e===Jn.StaticChildren?(this.tokens.appendCode(" children: ["),this.processChildren(!1),this.tokens.appendCode("]}")):(e===Jn.OneChild&&this.tokens.appendCode(" children: "),this.processChildren(!1),this.tokens.appendCode("}"))}processChildren(e){let r=e;for(;;){if(this.tokens.matches2(i.jsxTagStart,i.slash))return;let o=!1;if(this.tokens.matches1(i.braceL))this.tokens.matches2(i.braceL,i.braceR)?(this.tokens.replaceToken(""),this.tokens.replaceToken("")):(this.tokens.replaceToken(r?", ":""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken(""),o=!0);else if(this.tokens.matches1(i.jsxTagStart))this.tokens.appendCode(r?", ":""),this.processJSXTag(),o=!0;else if(this.tokens.matches1(i.jsxText)||this.tokens.matches1(i.jsxEmptyText))o=this.processChildTextElement(r);else throw new Error("Unexpected token when processing JSX children.");o&&(r=!0)}}processChildTextElement(e){const r=this.tokens.currentToken(),o=this.tokens.code.slice(r.start,r.end),l=wp(o),a=Cw(o);return a==='""'?(this.tokens.replaceToken(l),!1):(this.tokens.replaceToken(`${e?", ":""}${a}${l}`),!0)}getDevSource(e){return`{fileName: ${this.getFilenameVarName()}, ${e}}`}getFilenameVarName(){return this.filenameVarName||(this.filenameVarName=this.nameManager.claimFreeName("_jsxFileName")),this.filenameVarName}}function _b(t){const e=t.charCodeAt(0);return e>=I.lowercaseA&&e<=I.lowercaseZ}function Cw(t){let e="",r="",o=!1,l=!1;for(let a=0;a<t.length;a++){const c=t[a];if(c===" "||c==="	"||c==="\r")o||(r+=c);else if(c===`
`)r="",o=!0;else{if(l&&o&&(e+=" "),e+=r,r="",c==="&"){const{entity:s,newI:d}=Eb(t,a+1);a=d-1,e+=s}else e+=c;l=!0,o=!1}}return o||(e+=r),JSON.stringify(e)}function wp(t){let e=0,r=0;for(const o of t)o===`
`?(e++,r=0):o===" "&&r++;return`
`.repeat(e)+" ".repeat(r)}function Tw(t){let e="";for(let r=0;r<t.length;r++){const o=t[r];if(o===`
`)if(/\s/.test(t[r+1]))for(e+=" ";r<t.length&&/\s/.test(t[r+1]);)r++;else e+=`
`;else if(o==="&"){const{entity:l,newI:a}=Eb(t,r+1);e+=l,r=a-1}else e+=o}return JSON.stringify(e)}function Eb(t,e){let r="",o=0,l,a=e;if(t[a]==="#"){let c=10;a++;let s;if(t[a]==="x")for(c=16,a++,s=a;a<t.length&&Rw(t.charCodeAt(a));)a++;else for(s=a;a<t.length&&Aw(t.charCodeAt(a));)a++;if(t[a]===";"){const d=t.slice(s,a);d&&(a++,l=String.fromCodePoint(parseInt(d,c)))}}else for(;a<t.length&&o++<10;){const c=t[a];if(a++,c===";"){l=Nw.get(r);break}r+=c}return l?{entity:l,newI:a}:{entity:"&",newI:e}}function Aw(t){return t>=I.digit0&&t<=I.digit9}function Rw(t){return t>=I.digit0&&t<=I.digit9||t>=I.lowercaseA&&t<=I.lowercaseF||t>=I.uppercaseA&&t<=I.uppercaseF}function Ib(t,e){const r=Sb(e),o=new Set;for(let l=0;l<t.tokens.length;l++){const a=t.tokens[l];if(a.type===i.name&&!a.isType&&(a.identifierRole===oe.Access||a.identifierRole===oe.ObjectShorthand||a.identifierRole===oe.ExportAccess)&&!a.shadowsGlobal&&o.add(t.identifierNameForToken(a)),a.type===i.jsxTagStart&&o.add(r.base),a.type===i.jsxTagStart&&l+1<t.tokens.length&&t.tokens[l+1].type===i.jsxTagEnd&&(o.add(r.base),o.add(r.fragmentBase)),a.type===i.jsxName&&a.identifierRole===oe.Access){const c=t.identifierNameForToken(a);(!_b(c)||t.tokens[l+1].type===i.dot)&&o.add(t.identifierNameForToken(a))}}return o}class cr{__init(){this.nonTypeIdentifiers=new Set}__init2(){this.importInfoByPath=new Map}__init3(){this.importsToReplace=new Map}__init4(){this.identifierReplacements=new Map}__init5(){this.exportBindingsByLocalName=new Map}constructor(e,r,o,l,a,c,s){this.nameManager=e,this.tokens=r,this.enableLegacyTypeScriptModuleInterop=o,this.options=l,this.isTypeScriptTransformEnabled=a,this.keepUnusedImports=c,this.helperManager=s,cr.prototype.__init.call(this),cr.prototype.__init2.call(this),cr.prototype.__init3.call(this),cr.prototype.__init4.call(this),cr.prototype.__init5.call(this)}preprocessTokens(){for(let e=0;e<this.tokens.tokens.length;e++)this.tokens.matches1AtIndex(e,i._import)&&!this.tokens.matches3AtIndex(e,i._import,i.name,i.eq)&&this.preprocessImportAtIndex(e),this.tokens.matches1AtIndex(e,i._export)&&!this.tokens.matches2AtIndex(e,i._export,i.eq)&&this.preprocessExportAtIndex(e);this.generateImportReplacements()}pruneTypeOnlyImports(){this.nonTypeIdentifiers=Ib(this.tokens,this.options);for(const[e,r]of this.importInfoByPath.entries()){if(r.hasBareImport||r.hasStarExport||r.exportStarNames.length>0||r.namedExports.length>0)continue;[...r.defaultNames,...r.wildcardNames,...r.namedImports.map(({localName:l})=>l)].every(l=>this.shouldAutomaticallyElideImportedName(l))&&this.importsToReplace.set(e,"")}}shouldAutomaticallyElideImportedName(e){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(e)}generateImportReplacements(){for(const[e,r]of this.importInfoByPath.entries()){const{defaultNames:o,wildcardNames:l,namedImports:a,namedExports:c,exportStarNames:s,hasStarExport:d}=r;if(o.length===0&&l.length===0&&a.length===0&&c.length===0&&s.length===0&&!d){this.importsToReplace.set(e,`require('${e}');`);continue}const u=this.getFreeIdentifierForPath(e);let h;this.enableLegacyTypeScriptModuleInterop?h=u:h=l.length>0?l[0]:this.getFreeIdentifierForPath(e);let p=`var ${u} = require('${e}');`;if(l.length>0)for(const y of l){const S=this.enableLegacyTypeScriptModuleInterop?u:`${this.helperManager.getHelperName("interopRequireWildcard")}(${u})`;p+=` var ${y} = ${S};`}else s.length>0&&h!==u?p+=` var ${h} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${u});`:o.length>0&&h!==u&&(p+=` var ${h} = ${this.helperManager.getHelperName("interopRequireDefault")}(${u});`);for(const{importedName:y,localName:S}of c)p+=` ${this.helperManager.getHelperName("createNamedExportFrom")}(${u}, '${S}', '${y}');`;for(const y of s)p+=` exports.${y} = ${h};`;d&&(p+=` ${this.helperManager.getHelperName("createStarExport")}(${u});`),this.importsToReplace.set(e,p);for(const y of o)this.identifierReplacements.set(y,`${h}.default`);for(const{importedName:y,localName:S}of a)this.identifierReplacements.set(S,`${u}.${y}`)}}getFreeIdentifierForPath(e){const r=e.split("/"),l=r[r.length-1].replace(/\W/g,"");return this.nameManager.claimFreeName(`_${l}`)}preprocessImportAtIndex(e){const r=[],o=[],l=[];if(e++,(this.tokens.matchesContextualAtIndex(e,w._type)||this.tokens.matches1AtIndex(e,i._typeof))&&!this.tokens.matches1AtIndex(e+1,i.comma)&&!this.tokens.matchesContextualAtIndex(e+1,w._from)||this.tokens.matches1AtIndex(e,i.parenL))return;if(this.tokens.matches1AtIndex(e,i.name)&&(r.push(this.tokens.identifierNameAtIndex(e)),e++,this.tokens.matches1AtIndex(e,i.comma)&&e++),this.tokens.matches1AtIndex(e,i.star)&&(e+=2,o.push(this.tokens.identifierNameAtIndex(e)),e++),this.tokens.matches1AtIndex(e,i.braceL)){const s=this.getNamedImports(e+1);e=s.newIndex;for(const d of s.namedImports)d.importedName==="default"?r.push(d.localName):l.push(d)}if(this.tokens.matchesContextualAtIndex(e,w._from)&&e++,!this.tokens.matches1AtIndex(e,i.string))throw new Error("Expected string token at the end of import statement.");const a=this.tokens.stringValueAtIndex(e),c=this.getImportInfo(a);c.defaultNames.push(...r),c.wildcardNames.push(...o),c.namedImports.push(...l),r.length===0&&o.length===0&&l.length===0&&(c.hasBareImport=!0)}preprocessExportAtIndex(e){if(this.tokens.matches2AtIndex(e,i._export,i._var)||this.tokens.matches2AtIndex(e,i._export,i._let)||this.tokens.matches2AtIndex(e,i._export,i._const))this.preprocessVarExportAtIndex(e);else if(this.tokens.matches2AtIndex(e,i._export,i._function)||this.tokens.matches2AtIndex(e,i._export,i._class)){const r=this.tokens.identifierNameAtIndex(e+2);this.addExportBinding(r,r)}else if(this.tokens.matches3AtIndex(e,i._export,i.name,i._function)){const r=this.tokens.identifierNameAtIndex(e+3);this.addExportBinding(r,r)}else this.tokens.matches2AtIndex(e,i._export,i.braceL)?this.preprocessNamedExportAtIndex(e):this.tokens.matches2AtIndex(e,i._export,i.star)&&this.preprocessExportStarAtIndex(e)}preprocessVarExportAtIndex(e){let r=0;for(let o=e+2;;o++)if(this.tokens.matches1AtIndex(o,i.braceL)||this.tokens.matches1AtIndex(o,i.dollarBraceL)||this.tokens.matches1AtIndex(o,i.bracketL))r++;else if(this.tokens.matches1AtIndex(o,i.braceR)||this.tokens.matches1AtIndex(o,i.bracketR))r--;else{if(r===0&&!this.tokens.matches1AtIndex(o,i.name))break;if(this.tokens.matches1AtIndex(1,i.eq)){const l=this.tokens.currentToken().rhsEndIndex;if(l==null)throw new Error("Expected = token with an end index.");o=l-1}else{const l=this.tokens.tokens[o];if(pb(l)){const a=this.tokens.identifierNameAtIndex(o);this.identifierReplacements.set(a,`exports.${a}`)}}}}preprocessNamedExportAtIndex(e){e+=2;const{newIndex:r,namedImports:o}=this.getNamedImports(e);if(e=r,this.tokens.matchesContextualAtIndex(e,w._from))e++;else{for(const{importedName:c,localName:s}of o)this.addExportBinding(c,s);return}if(!this.tokens.matches1AtIndex(e,i.string))throw new Error("Expected string token at the end of import statement.");const l=this.tokens.stringValueAtIndex(e);this.getImportInfo(l).namedExports.push(...o)}preprocessExportStarAtIndex(e){let r=null;if(this.tokens.matches3AtIndex(e,i._export,i.star,i._as)?(e+=3,r=this.tokens.identifierNameAtIndex(e),e+=2):e+=3,!this.tokens.matches1AtIndex(e,i.string))throw new Error("Expected string token at the end of star export statement.");const o=this.tokens.stringValueAtIndex(e),l=this.getImportInfo(o);r!==null?l.exportStarNames.push(r):l.hasStarExport=!0}getNamedImports(e){const r=[];for(;;){if(this.tokens.matches1AtIndex(e,i.braceR)){e++;break}const o=gl(this.tokens,e);if(e=o.endIndex,o.isType||r.push({importedName:o.leftName,localName:o.rightName}),this.tokens.matches2AtIndex(e,i.comma,i.braceR)){e+=2;break}else if(this.tokens.matches1AtIndex(e,i.braceR)){e++;break}else if(this.tokens.matches1AtIndex(e,i.comma))e++;else throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[e])}`)}return{newIndex:e,namedImports:r}}getImportInfo(e){const r=this.importInfoByPath.get(e);if(r)return r;const o={defaultNames:[],wildcardNames:[],namedImports:[],namedExports:[],hasBareImport:!1,exportStarNames:[],hasStarExport:!1};return this.importInfoByPath.set(e,o),o}addExportBinding(e,r){this.exportBindingsByLocalName.has(e)||this.exportBindingsByLocalName.set(e,[]),this.exportBindingsByLocalName.get(e).push(r)}claimImportCode(e){const r=this.importsToReplace.get(e);return this.importsToReplace.set(e,""),r||""}getIdentifierReplacement(e){return this.identifierReplacements.get(e)||null}resolveExportBinding(e){const r=this.exportBindingsByLocalName.get(e);return!r||r.length===0?null:r.map(o=>`exports.${o}`).join(" = ")}getGlobalNames(){return new Set([...this.identifierReplacements.keys(),...this.exportBindingsByLocalName.keys()])}}var nf={exports:{}},ri={exports:{}},Pp;function Lw(){return Pp||(Pp=1,function(t,e){(function(r,o){o(e)})(Qn,function(r){r.get=void 0,r.put=void 0,r.pop=void 0;class o{constructor(){this._indexes={__proto__:null},this.array=[]}}r.get=(l,a)=>l._indexes[a],r.put=(l,a)=>{const c=r.get(l,a);if(c!==void 0)return c;const{array:s,_indexes:d}=l;return d[a]=s.push(a)-1},r.pop=l=>{const{array:a,_indexes:c}=l;if(a.length===0)return;const s=a.pop();c[s]=void 0},r.SetArray=o,Object.defineProperty(r,"__esModule",{value:!0})})}(ri,ri.exports)),ri.exports}var oi={exports:{}},Sp;function kb(){return Sp||(Sp=1,function(t,e){(function(r,o){o(e)})(Qn,function(r){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=new Uint8Array(64),s=new Uint8Array(128);for(let m=0;m<a.length;m++){const O=a.charCodeAt(m);c[m]=O,s[O]=m}const d=typeof TextDecoder<"u"?new TextDecoder:typeof Buffer<"u"?{decode(m){return Buffer.from(m.buffer,m.byteOffset,m.byteLength).toString()}}:{decode(m){let O="";for(let b=0;b<m.length;b++)O+=String.fromCharCode(m[b]);return O}};function u(m){const O=new Int32Array(5),b=[];let v=0;do{const E=h(m,v),k=[];let _=!0,N=0;O[0]=0;for(let D=v;D<E;D++){let A;D=p(m,D,O,0);const W=O[0];W<N&&(_=!1),N=W,y(m,D,E)?(D=p(m,D,O,1),D=p(m,D,O,2),D=p(m,D,O,3),y(m,D,E)?(D=p(m,D,O,4),A=[W,O[1],O[2],O[3],O[4]]):A=[W,O[1],O[2],O[3]]):A=[W],k.push(A)}_||S(k),b.push(k),v=E+1}while(v<=m.length);return b}function h(m,O){const b=m.indexOf(";",O);return b===-1?m.length:b}function p(m,O,b,v){let E=0,k=0,_=0;do{const D=m.charCodeAt(O++);_=s[D],E|=(_&31)<<k,k+=5}while(_&32);const N=E&1;return E>>>=1,N&&(E=-2147483648|-E),b[v]+=E,O}function y(m,O,b){return O>=b?!1:m.charCodeAt(O)!==44}function S(m){m.sort(g)}function g(m,O){return m[0]-O[0]}function x(m){const O=new Int32Array(5),b=1024*16,v=b-36,E=new Uint8Array(b),k=E.subarray(0,v);let _=0,N="";for(let D=0;D<m.length;D++){const A=m[D];if(D>0&&(_===b&&(N+=d.decode(E),_=0),E[_++]=59),A.length!==0){O[0]=0;for(let W=0;W<A.length;W++){const J=A[W];_>v&&(N+=d.decode(k),E.copyWithin(0,v,_),_-=v),W>0&&(E[_++]=44),_=P(E,_,O,J,0),J.length!==1&&(_=P(E,_,O,J,1),_=P(E,_,O,J,2),_=P(E,_,O,J,3),J.length!==4&&(_=P(E,_,O,J,4)))}}}return N+d.decode(E.subarray(0,_))}function P(m,O,b,v,E){const k=v[E];let _=k-b[E];b[E]=k,_=_<0?-_<<1|1:_<<1;do{let N=_&31;_>>>=5,_>0&&(N|=32),m[O++]=c[N]}while(_>0);return O}r.decode=u,r.encode=x,Object.defineProperty(r,"__esModule",{value:!0})})}(oi,oi.exports)),oi.exports}var li={exports:{}},Yc={exports:{}},_p;function Fw(){return _p||(_p=1,function(t,e){(function(r,o){t.exports=o()})(Qn,function(){const r=/^[\w+.-]+:\/\//,o=/^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/,l=/^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;var a;(function(b){b[b.Empty=1]="Empty",b[b.Hash=2]="Hash",b[b.Query=3]="Query",b[b.RelativePath=4]="RelativePath",b[b.AbsolutePath=5]="AbsolutePath",b[b.SchemeRelative=6]="SchemeRelative",b[b.Absolute=7]="Absolute"})(a||(a={}));function c(b){return r.test(b)}function s(b){return b.startsWith("//")}function d(b){return b.startsWith("/")}function u(b){return b.startsWith("file:")}function h(b){return/^[.?#]/.test(b)}function p(b){const v=o.exec(b);return S(v[1],v[2]||"",v[3],v[4]||"",v[5]||"/",v[6]||"",v[7]||"")}function y(b){const v=l.exec(b),E=v[2];return S("file:","",v[1]||"","",d(E)?E:"/"+E,v[3]||"",v[4]||"")}function S(b,v,E,k,_,N,D){return{scheme:b,user:v,host:E,port:k,path:_,query:N,hash:D,type:a.Absolute}}function g(b){if(s(b)){const E=p("http:"+b);return E.scheme="",E.type=a.SchemeRelative,E}if(d(b)){const E=p("http://foo.com"+b);return E.scheme="",E.host="",E.type=a.AbsolutePath,E}if(u(b))return y(b);if(c(b))return p(b);const v=p("http://foo.com/"+b);return v.scheme="",v.host="",v.type=b?b.startsWith("?")?a.Query:b.startsWith("#")?a.Hash:a.RelativePath:a.Empty,v}function x(b){if(b.endsWith("/.."))return b;const v=b.lastIndexOf("/");return b.slice(0,v+1)}function P(b,v){m(v,v.type),b.path==="/"?b.path=v.path:b.path=x(v.path)+b.path}function m(b,v){const E=v<=a.RelativePath,k=b.path.split("/");let _=1,N=0,D=!1;for(let W=1;W<k.length;W++){const J=k[W];if(!J){D=!0;continue}if(D=!1,J!=="."){if(J===".."){N?(D=!0,N--,_--):E&&(k[_++]=J);continue}k[_++]=J,N++}}let A="";for(let W=1;W<_;W++)A+="/"+k[W];(!A||D&&!A.endsWith("/.."))&&(A+="/"),b.path=A}function O(b,v){if(!b&&!v)return"";const E=g(b);let k=E.type;if(v&&k!==a.Absolute){const N=g(v),D=N.type;switch(k){case a.Empty:E.hash=N.hash;case a.Hash:E.query=N.query;case a.Query:case a.RelativePath:P(E,N);case a.AbsolutePath:E.user=N.user,E.host=N.host,E.port=N.port;case a.SchemeRelative:E.scheme=N.scheme}D>k&&(k=D)}m(E,k);const _=E.query+E.hash;switch(k){case a.Hash:case a.Query:return _;case a.RelativePath:{const N=E.path.slice(1);return N?h(v||b)&&!h(N)?"./"+N+_:N+_:_||"."}case a.AbsolutePath:return E.path+_;default:return E.scheme+"//"+E.user+E.host+E.port+E.path+_}}return O})}(Yc)),Yc.exports}var Ep;function Mw(){return Ep||(Ep=1,function(t,e){(function(r,o){o(e,kb(),Fw())})(Qn,function(r,o,l){function a(C){return C&&typeof C=="object"&&"default"in C?C:{default:C}}var c=a(l);function s(C,T){return T&&!T.endsWith("/")&&(T+="/"),c.default(C,T)}function d(C){if(!C)return"";const T=C.lastIndexOf("/");return C.slice(0,T+1)}const u=0,h=1,p=2,y=3,S=4,g=1,x=2;function P(C,T){const L=m(C,0);if(L===C.length)return C;T||(C=C.slice());for(let q=L;q<C.length;q=m(C,q+1))C[q]=b(C[q],T);return C}function m(C,T){for(let L=T;L<C.length;L++)if(!O(C[L]))return L;return C.length}function O(C){for(let T=1;T<C.length;T++)if(C[T][u]<C[T-1][u])return!1;return!0}function b(C,T){return T||(C=C.slice()),C.sort(v)}function v(C,T){return C[u]-T[u]}let E=!1;function k(C,T,L,q){for(;L<=q;){const ee=L+(q-L>>1),Q=C[ee][u]-T;if(Q===0)return E=!0,ee;Q<0?L=ee+1:q=ee-1}return E=!1,L-1}function _(C,T,L){for(let q=L+1;q<C.length&&C[q][u]===T;L=q++);return L}function N(C,T,L){for(let q=L-1;q>=0&&C[q][u]===T;L=q--);return L}function D(){return{lastKey:-1,lastNeedle:-1,lastIndex:-1}}function A(C,T,L,q){const{lastKey:ee,lastNeedle:Q,lastIndex:te}=L;let be=0,le=C.length-1;if(q===ee){if(T===Q)return E=te!==-1&&C[te][u]===T,te;T>=Q?be=te===-1?0:te:le=te}return L.lastKey=q,L.lastNeedle=T,L.lastIndex=k(C,T,be,le)}function W(C,T){const L=T.map(ae);for(let q=0;q<C.length;q++){const ee=C[q];for(let Q=0;Q<ee.length;Q++){const te=ee[Q];if(te.length===1)continue;const be=te[h],le=te[p],de=te[y],je=L[be],ke=je[le]||(je[le]=[]),Be=T[be],Ve=_(ke,de,A(ke,de,Be,le));J(ke,Be.lastIndex=Ve+1,[de,q,te[u]])}}return L}function J(C,T,L){for(let q=C.length;q>T;q--)C[q]=C[q-1];C[T]=L}function ae(){return{__proto__:null}}const ie=function(C,T){const L=typeof C=="string"?JSON.parse(C):C;if(!("sections"in L))return new Re(L,T);const q=[],ee=[],Q=[],te=[];xe(L,T,q,ee,Q,te,0,0,1/0,1/0);const be={version:3,file:L.file,names:te,sources:ee,sourcesContent:Q,mappings:q};return r.presortedDecodedMap(be)};function xe(C,T,L,q,ee,Q,te,be,le,de){const{sections:je}=C;for(let ke=0;ke<je.length;ke++){const{map:Be,offset:Ve}=je[ke];let rn=le,_n=de;if(ke+1<je.length){const cn=je[ke+1].offset;rn=Math.min(le,te+cn.line),rn===le?_n=Math.min(de,be+cn.column):rn<le&&(_n=be+cn.column)}Pe(Be,T,L,q,ee,Q,te+Ve.line,be+Ve.column,rn,_n)}}function Pe(C,T,L,q,ee,Q,te,be,le,de){if("sections"in C)return xe(...arguments);const je=new Re(C,T),ke=q.length,Be=Q.length,Ve=r.decodedMappings(je),{resolvedSources:rn,sourcesContent:_n}=je;if(_e(q,rn),_e(Q,je.names),_n)_e(ee,_n);else for(let cn=0;cn<rn.length;cn++)ee.push(null);for(let cn=0;cn<Ve.length;cn++){const rr=te+cn;if(rr>le)return;const Ir=z(L,rr),xo=cn===0?be:0,kr=Ve[cn];for(let or=0;or<kr.length;or++){const Hn=kr[or],Et=xo+Hn[u];if(rr===le&&Et>=de)return;if(Hn.length===1){Ir.push([Et]);continue}const Nr=ke+Hn[h],Cr=Hn[p],Tr=Hn[y];Ir.push(Hn.length===4?[Et,Nr,Cr,Tr]:[Et,Nr,Cr,Tr,Be+Hn[S]])}}}function _e(C,T){for(let L=0;L<T.length;L++)C.push(T[L])}function z(C,T){for(let L=C.length;L<=T;L++)C[L]=[];return C[T]}const Z="`line` must be greater than 0 (lines start at line 1)",Y="`column` must be greater than or equal to 0 (columns start at column 0)",se=-1,Oe=1;r.encodedMappings=void 0,r.decodedMappings=void 0,r.traceSegment=void 0,r.originalPositionFor=void 0,r.generatedPositionFor=void 0,r.allGeneratedPositionsFor=void 0,r.eachMapping=void 0,r.sourceContentFor=void 0,r.presortedDecodedMap=void 0,r.decodedMap=void 0,r.encodedMap=void 0;class Re{constructor(T,L){const q=typeof T=="string";if(!q&&T._decodedMemo)return T;const ee=q?JSON.parse(T):T,{version:Q,file:te,names:be,sourceRoot:le,sources:de,sourcesContent:je}=ee;this.version=Q,this.file=te,this.names=be,this.sourceRoot=le,this.sources=de,this.sourcesContent=je;const ke=s(le||"",d(L));this.resolvedSources=de.map(Ve=>s(Ve||"",ke));const{mappings:Be}=ee;typeof Be=="string"?(this._encoded=Be,this._decoded=void 0):(this._encoded=void 0,this._decoded=P(Be,q)),this._decodedMemo=D(),this._bySources=void 0,this._bySourceMemos=void 0}}(()=>{r.encodedMappings=T=>{var L;return(L=T._encoded)!==null&&L!==void 0?L:T._encoded=o.encode(T._decoded)},r.decodedMappings=T=>T._decoded||(T._decoded=o.decode(T._encoded)),r.traceSegment=(T,L,q)=>{const ee=r.decodedMappings(T);if(L>=ee.length)return null;const Q=ee[L],te=V(Q,T._decodedMemo,L,q,Oe);return te===-1?null:Q[te]},r.originalPositionFor=(T,{line:L,column:q,bias:ee})=>{if(L--,L<0)throw new Error(Z);if(q<0)throw new Error(Y);const Q=r.decodedMappings(T);if(L>=Q.length)return F(null,null,null,null);const te=Q[L],be=V(te,T._decodedMemo,L,q,ee||Oe);if(be===-1)return F(null,null,null,null);const le=te[be];if(le.length===1)return F(null,null,null,null);const{names:de,resolvedSources:je}=T;return F(je[le[h]],le[p]+1,le[y],le.length===5?de[le[S]]:null)},r.allGeneratedPositionsFor=(T,{source:L,line:q,column:ee,bias:Q})=>C(T,L,q,ee,Q||se,!0),r.generatedPositionFor=(T,{source:L,line:q,column:ee,bias:Q})=>C(T,L,q,ee,Q||Oe,!1),r.eachMapping=(T,L)=>{const q=r.decodedMappings(T),{names:ee,resolvedSources:Q}=T;for(let te=0;te<q.length;te++){const be=q[te];for(let le=0;le<be.length;le++){const de=be[le],je=te+1,ke=de[0];let Be=null,Ve=null,rn=null,_n=null;de.length!==1&&(Be=Q[de[1]],Ve=de[2]+1,rn=de[3]),de.length===5&&(_n=ee[de[4]]),L({generatedLine:je,generatedColumn:ke,source:Be,originalLine:Ve,originalColumn:rn,name:_n})}}},r.sourceContentFor=(T,L)=>{const{sources:q,resolvedSources:ee,sourcesContent:Q}=T;if(Q==null)return null;let te=q.indexOf(L);return te===-1&&(te=ee.indexOf(L)),te===-1?null:Q[te]},r.presortedDecodedMap=(T,L)=>{const q=new Re(Le(T,[]),L);return q._decoded=T.mappings,q},r.decodedMap=T=>Le(T,r.decodedMappings(T)),r.encodedMap=T=>Le(T,r.encodedMappings(T));function C(T,L,q,ee,Q,te){if(q--,q<0)throw new Error(Z);if(ee<0)throw new Error(Y);const{sources:be,resolvedSources:le}=T;let de=be.indexOf(L);if(de===-1&&(de=le.indexOf(L)),de===-1)return te?[]:$(null,null);const ke=(T._bySources||(T._bySources=W(r.decodedMappings(T),T._bySourceMemos=be.map(D))))[de][q];if(ke==null)return te?[]:$(null,null);const Be=T._bySourceMemos[de];if(te)return X(ke,Be,q,ee,Q);const Ve=V(ke,Be,q,ee,Q);if(Ve===-1)return $(null,null);const rn=ke[Ve];return $(rn[g]+1,rn[x])}})();function Le(C,T){return{version:C.version,file:C.file,names:C.names,sourceRoot:C.sourceRoot,sources:C.sources,sourcesContent:C.sourcesContent,mappings:T}}function F(C,T,L,q){return{source:C,line:T,column:L,name:q}}function $(C,T){return{line:C,column:T}}function V(C,T,L,q,ee){let Q=A(C,q,T,L);return E?Q=(ee===se?_:N)(C,q,Q):ee===se&&Q++,Q===-1||Q===C.length?-1:Q}function X(C,T,L,q,ee){let Q=V(C,T,L,q,Oe);if(!E&&ee===se&&Q++,Q===-1||Q===C.length)return[];const te=E?q:C[Q][u];E||(Q=N(C,te,Q));const be=_(C,te,Q),le=[];for(;Q<=be;Q++){const de=C[Q];le.push($(de[g]+1,de[x]))}return le}r.AnyMap=ie,r.GREATEST_LOWER_BOUND=Oe,r.LEAST_UPPER_BOUND=se,r.TraceMap=Re,Object.defineProperty(r,"__esModule",{value:!0})})}(li,li.exports)),li.exports}(function(t,e){(function(r,o){o(e,Lw(),kb(),Mw())})(Qn,function(r,o,l,a){r.addSegment=void 0,r.addMapping=void 0,r.maybeAddSegment=void 0,r.maybeAddMapping=void 0,r.setSourceContent=void 0,r.toDecodedMap=void 0,r.toEncodedMap=void 0,r.fromMap=void 0,r.allMappings=void 0;let y;class S{constructor({file:_,sourceRoot:N}={}){this._names=new o.SetArray,this._sources=new o.SetArray,this._sourcesContent=[],this._mappings=[],this.file=_,this.sourceRoot=N}}r.addSegment=(k,_,N,D,A,W,J,ae)=>y(!1,k,_,N,D,A,W,J,ae),r.maybeAddSegment=(k,_,N,D,A,W,J,ae)=>y(!0,k,_,N,D,A,W,J,ae),r.addMapping=(k,_)=>E(!1,k,_),r.maybeAddMapping=(k,_)=>E(!0,k,_),r.setSourceContent=(k,_,N)=>{const{_sources:D,_sourcesContent:A}=k;A[o.put(D,_)]=N},r.toDecodedMap=k=>{const{file:_,sourceRoot:N,_mappings:D,_sources:A,_sourcesContent:W,_names:J}=k;return m(D),{version:3,file:_||void 0,names:J.array,sourceRoot:N||void 0,sources:A.array,sourcesContent:W,mappings:D}},r.toEncodedMap=k=>{const _=r.toDecodedMap(k);return Object.assign(Object.assign({},_),{mappings:l.encode(_.mappings)})},r.allMappings=k=>{const _=[],{_mappings:N,_sources:D,_names:A}=k;for(let W=0;W<N.length;W++){const J=N[W];for(let ae=0;ae<J.length;ae++){const ie=J[ae],xe={line:W+1,column:ie[0]};let Pe,_e,z;ie.length!==1&&(Pe=D.array[ie[1]],_e={line:ie[2]+1,column:ie[3]},ie.length===5&&(z=A.array[ie[4]])),_.push({generated:xe,source:Pe,original:_e,name:z})}}return _},r.fromMap=k=>{const _=new a.TraceMap(k),N=new S({file:_.file,sourceRoot:_.sourceRoot});return O(N._names,_.names),O(N._sources,_.sources),N._sourcesContent=_.sourcesContent||_.sources.map(()=>null),N._mappings=a.decodedMappings(_),N},y=(k,_,N,D,A,W,J,ae,ie)=>{const{_mappings:xe,_sources:Pe,_sourcesContent:_e,_names:z}=_,Z=g(xe,N),Y=x(Z,D);if(!A)return k&&b(Z,Y)?void 0:P(Z,Y,[D]);const se=o.put(Pe,A),Oe=ae?o.put(z,ae):-1;if(se===_e.length&&(_e[se]=ie??null),!(k&&v(Z,Y,se,W,J,Oe)))return P(Z,Y,ae?[D,se,W,J,Oe]:[D,se,W,J])};function g(k,_){for(let N=k.length;N<=_;N++)k[N]=[];return k[_]}function x(k,_){let N=k.length;for(let D=N-1;D>=0;N=D--){const A=k[D];if(_>=A[0])break}return N}function P(k,_,N){for(let D=k.length;D>_;D--)k[D]=k[D-1];k[_]=N}function m(k){const{length:_}=k;let N=_;for(let D=N-1;D>=0&&!(k[D].length>0);N=D,D--);N<_&&(k.length=N)}function O(k,_){for(let N=0;N<_.length;N++)o.put(k,_[N])}function b(k,_){return _===0?!0:k[_-1].length===1}function v(k,_,N,D,A,W){if(_===0)return!1;const J=k[_-1];return J.length===1?!1:N===J[1]&&D===J[2]&&A===J[3]&&W===(J.length===5?J[4]:-1)}function E(k,_,N){const{generated:D,source:A,original:W,name:J,content:ae}=N;if(!A)return y(k,_,D.line-1,D.column,null,null,null,null,null);const ie=A;return y(k,_,D.line-1,D.column,ie,W.line-1,W.column,J,ae)}r.GenMapping=S,Object.defineProperty(r,"__esModule",{value:!0})})})(nf,nf.exports);var To=nf.exports;function Dw({code:t,mappings:e},r,o,l,a){const c=Bw(l,a),s=new To.GenMapping({file:o.compiledFilename});let d=0,u=e[0];for(;u===void 0&&d<e.length-1;)d++,u=e[d];let h=0,p=0;u!==p&&To.maybeAddSegment(s,h,0,r,h,0);for(let x=0;x<t.length;x++){if(x===u){const P=u-p,m=c[d];for(To.maybeAddSegment(s,h,P,r,h,m);(u===x||u===void 0)&&d<e.length-1;)d++,u=e[d]}t.charCodeAt(x)===I.lineFeed&&(h++,p=x+1,u!==p&&To.maybeAddSegment(s,h,0,r,h,0))}const{sourceRoot:y,sourcesContent:S,...g}=To.toEncodedMap(s);return g}function Bw(t,e){const r=new Array(e.length);let o=0,l=e[o].start,a=0;for(let c=0;c<t.length;c++)c===l&&(r[o]=l-a,o++,l=e[o].start),t.charCodeAt(c)===I.lineFeed&&(a=c+1);return r}const $w={require:`
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
  `};class ta{__init(){this.helperNames={}}__init2(){this.createRequireName=null}constructor(e){this.nameManager=e,ta.prototype.__init.call(this),ta.prototype.__init2.call(this)}getHelperName(e){let r=this.helperNames[e];return r||(r=this.nameManager.claimFreeName(`_${e}`),this.helperNames[e]=r,r)}emitHelpers(){let e="";this.helperNames.optionalChainDelete&&this.getHelperName("optionalChain"),this.helperNames.asyncOptionalChainDelete&&this.getHelperName("asyncOptionalChain");for(const[r,o]of Object.entries($w)){const l=this.helperNames[r];let a=o;r==="optionalChainDelete"?a=a.replace("OPTIONAL_CHAIN_NAME",this.helperNames.optionalChain):r==="asyncOptionalChainDelete"?a=a.replace("ASYNC_OPTIONAL_CHAIN_NAME",this.helperNames.asyncOptionalChain):r==="require"&&(this.createRequireName===null&&(this.createRequireName=this.nameManager.claimFreeName("_createRequire")),a=a.replace(/CREATE_REQUIRE_NAME/g,this.createRequireName)),l&&(e+=" ",e+=a.replace(r,l).replace(/\s+/g," ").trim())}return e}}function Ip(t,e,r){zw(t,r)&&Uw(t,e,r)}function zw(t,e){for(const r of t.tokens)if(r.type===i.name&&!r.isType&&cw(r)&&e.has(t.identifierNameForToken(r)))return!0;return!1}function Uw(t,e,r){const o=[];let l=e.length-1;for(let a=t.tokens.length-1;;a--){for(;o.length>0&&o[o.length-1].startTokenIndex===a+1;)o.pop();for(;l>=0&&e[l].endTokenIndex===a+1;)o.push(e[l]),l--;if(a<0)break;const c=t.tokens[a],s=t.identifierNameForToken(c);if(o.length>1&&!c.isType&&c.type===i.name&&r.has(s)){if(sw(c))kp(o[o.length-1],t,s);else if(fw(c)){let d=o.length-1;for(;d>0&&!o[d].isFunctionScope;)d--;if(d<0)throw new Error("Did not find parent function scope.");kp(o[d],t,s)}}}if(o.length>0)throw new Error("Expected empty scope stack after processing file.")}function kp(t,e,r){for(let o=t.startTokenIndex;o<t.endTokenIndex;o++){const l=e.tokens[o];(l.type===i.name||l.type===i.jsxName)&&e.identifierNameForToken(l)===r&&(l.shadowsGlobal=!0)}}function Hw(t,e){const r=[];for(const o of e)o.type===i.name&&r.push(t.slice(o.start,o.end));return r}class pd{__init(){this.usedNames=new Set}constructor(e,r){pd.prototype.__init.call(this),this.usedNames=new Set(Hw(e,r))}claimFreeName(e){const r=this.findFreeName(e);return this.usedNames.add(r),r}findFreeName(e){if(!this.usedNames.has(e))return e;let r=2;for(;this.usedNames.has(e+String(r));)r++;return e+String(r)}}var Ee={},tf={},dt={},qw=Qn&&Qn.__extends||function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,l){o.__proto__=l}||function(o,l){for(var a in l)l.hasOwnProperty(a)&&(o[a]=l[a])},t(e,r)};return function(e,r){t(e,r);function o(){this.constructor=e}e.prototype=r===null?Object.create(r):(o.prototype=r.prototype,new o)}}();Object.defineProperty(dt,"__esModule",{value:!0});dt.DetailContext=dt.NoopContext=dt.VError=void 0;var Nb=function(t){qw(e,t);function e(r,o){var l=t.call(this,o)||this;return l.path=r,Object.setPrototypeOf(l,e.prototype),l}return e}(Error);dt.VError=Nb;var Ww=function(){function t(){}return t.prototype.fail=function(e,r,o){return!1},t.prototype.unionResolver=function(){return this},t.prototype.createContext=function(){return this},t.prototype.resolveUnion=function(e){},t}();dt.NoopContext=Ww;var Cb=function(){function t(){this._propNames=[""],this._messages=[null],this._score=0}return t.prototype.fail=function(e,r,o){return this._propNames.push(e),this._messages.push(r),this._score+=o,!1},t.prototype.unionResolver=function(){return new Vw},t.prototype.resolveUnion=function(e){for(var r,o,l=e,a=null,c=0,s=l.contexts;c<s.length;c++){var d=s[c];(!a||d._score>=a._score)&&(a=d)}a&&a._score>0&&((r=this._propNames).push.apply(r,a._propNames),(o=this._messages).push.apply(o,a._messages))},t.prototype.getError=function(e){for(var r=[],o=this._propNames.length-1;o>=0;o--){var l=this._propNames[o];e+=typeof l=="number"?"["+l+"]":l?"."+l:"";var a=this._messages[o];a&&r.push(e+" "+a)}return new Nb(e,r.join("; "))},t.prototype.getErrorDetail=function(e){for(var r=[],o=this._propNames.length-1;o>=0;o--){var l=this._propNames[o];e+=typeof l=="number"?"["+l+"]":l?"."+l:"";var a=this._messages[o];a&&r.push({path:e,message:a})}for(var c=null,o=r.length-1;o>=0;o--)c&&(r[o].nested=[c]),c=r[o];return c},t}();dt.DetailContext=Cb;var Vw=function(){function t(){this.contexts=[]}return t.prototype.createContext=function(){var e=new Cb;return this.contexts.push(e),e},t}();(function(t){var e=Qn&&Qn.__extends||function(){var F=function($,V){return F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(X,C){X.__proto__=C}||function(X,C){for(var T in C)C.hasOwnProperty(T)&&(X[T]=C[T])},F($,V)};return function($,V){F($,V);function X(){this.constructor=$}$.prototype=V===null?Object.create(V):(X.prototype=V.prototype,new X)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.basicTypes=t.BasicType=t.TParamList=t.TParam=t.param=t.TFunc=t.func=t.TProp=t.TOptional=t.opt=t.TIface=t.iface=t.TEnumLiteral=t.enumlit=t.TEnumType=t.enumtype=t.TIntersection=t.intersection=t.TUnion=t.union=t.TTuple=t.tuple=t.TArray=t.array=t.TLiteral=t.lit=t.TName=t.name=t.TType=void 0;var r=dt,o=function(){function F(){}return F}();t.TType=o;function l(F){return typeof F=="string"?c(F):F}function a(F,$){var V=F[$];if(!V)throw new Error("Unknown type "+$);return V}function c(F){return new s(F)}t.name=c;var s=function(F){e($,F);function $(V){var X=F.call(this)||this;return X.name=V,X._failMsg="is not a "+V,X}return $.prototype.getChecker=function(V,X,C){var T=this,L=a(V,this.name),q=L.getChecker(V,X,C);return L instanceof z||L instanceof $?q:function(ee,Q){return q(ee,Q)?!0:Q.fail(null,T._failMsg,0)}},$}(o);t.TName=s;function d(F){return new u(F)}t.lit=d;var u=function(F){e($,F);function $(V){var X=F.call(this)||this;return X.value=V,X.name=JSON.stringify(V),X._failMsg="is not "+X.name,X}return $.prototype.getChecker=function(V,X){var C=this;return function(T,L){return T===C.value?!0:L.fail(null,C._failMsg,-1)}},$}(o);t.TLiteral=u;function h(F){return new p(l(F))}t.array=h;var p=function(F){e($,F);function $(V){var X=F.call(this)||this;return X.ttype=V,X}return $.prototype.getChecker=function(V,X){var C=this.ttype.getChecker(V,X);return function(T,L){if(!Array.isArray(T))return L.fail(null,"is not an array",0);for(var q=0;q<T.length;q++){var ee=C(T[q],L);if(!ee)return L.fail(q,null,1)}return!0}},$}(o);t.TArray=p;function y(){for(var F=[],$=0;$<arguments.length;$++)F[$]=arguments[$];return new S(F.map(function(V){return l(V)}))}t.tuple=y;var S=function(F){e($,F);function $(V){var X=F.call(this)||this;return X.ttypes=V,X}return $.prototype.getChecker=function(V,X){var C=this.ttypes.map(function(L){return L.getChecker(V,X)}),T=function(L,q){if(!Array.isArray(L))return q.fail(null,"is not an array",0);for(var ee=0;ee<C.length;ee++){var Q=C[ee](L[ee],q);if(!Q)return q.fail(ee,null,1)}return!0};return X?function(L,q){return T(L,q)?L.length<=C.length?!0:q.fail(C.length,"is extraneous",2):!1}:T},$}(o);t.TTuple=S;function g(){for(var F=[],$=0;$<arguments.length;$++)F[$]=arguments[$];return new x(F.map(function(V){return l(V)}))}t.union=g;var x=function(F){e($,F);function $(V){var X=F.call(this)||this;X.ttypes=V;var C=V.map(function(L){return L instanceof s||L instanceof u?L.name:null}).filter(function(L){return L}),T=V.length-C.length;return C.length?(T>0&&C.push(T+" more"),X._failMsg="is none of "+C.join(", ")):X._failMsg="is none of "+T+" types",X}return $.prototype.getChecker=function(V,X){var C=this,T=this.ttypes.map(function(L){return L.getChecker(V,X)});return function(L,q){for(var ee=q.unionResolver(),Q=0;Q<T.length;Q++){var te=T[Q](L,ee.createContext());if(te)return!0}return q.resolveUnion(ee),q.fail(null,C._failMsg,0)}},$}(o);t.TUnion=x;function P(){for(var F=[],$=0;$<arguments.length;$++)F[$]=arguments[$];return new m(F.map(function(V){return l(V)}))}t.intersection=P;var m=function(F){e($,F);function $(V){var X=F.call(this)||this;return X.ttypes=V,X}return $.prototype.getChecker=function(V,X){var C=new Set,T=this.ttypes.map(function(L){return L.getChecker(V,X,C)});return function(L,q){var ee=T.every(function(Q){return Q(L,q)});return ee?!0:q.fail(null,null,0)}},$}(o);t.TIntersection=m;function O(F){return new b(F)}t.enumtype=O;var b=function(F){e($,F);function $(V){var X=F.call(this)||this;return X.members=V,X.validValues=new Set,X._failMsg="is not a valid enum value",X.validValues=new Set(Object.keys(V).map(function(C){return V[C]})),X}return $.prototype.getChecker=function(V,X){var C=this;return function(T,L){return C.validValues.has(T)?!0:L.fail(null,C._failMsg,0)}},$}(o);t.TEnumType=b;function v(F,$){return new E(F,$)}t.enumlit=v;var E=function(F){e($,F);function $(V,X){var C=F.call(this)||this;return C.enumName=V,C.prop=X,C._failMsg="is not "+V+"."+X,C}return $.prototype.getChecker=function(V,X){var C=this,T=a(V,this.enumName);if(!(T instanceof b))throw new Error("Type "+this.enumName+" used in enumlit is not an enum type");var L=T.members[this.prop];if(!T.members.hasOwnProperty(this.prop))throw new Error("Unknown value "+this.enumName+"."+this.prop+" used in enumlit");return function(q,ee){return q===L?!0:ee.fail(null,C._failMsg,-1)}},$}(o);t.TEnumLiteral=E;function k(F){return Object.keys(F).map(function($){return _($,F[$])})}function _(F,$){return $ instanceof W?new J(F,$.ttype,!0):new J(F,l($),!1)}function N(F,$){return new D(F,k($))}t.iface=N;var D=function(F){e($,F);function $(V,X){var C=F.call(this)||this;return C.bases=V,C.props=X,C.propSet=new Set(X.map(function(T){return T.name})),C}return $.prototype.getChecker=function(V,X,C){var T=this,L=this.bases.map(function(le){return a(V,le).getChecker(V,X)}),q=this.props.map(function(le){return le.ttype.getChecker(V,X)}),ee=new r.NoopContext,Q=this.props.map(function(le,de){return!le.isOpt&&!q[de](void 0,ee)}),te=function(le,de){if(typeof le!="object"||le===null)return de.fail(null,"is not an object",0);for(var je=0;je<L.length;je++)if(!L[je](le,de))return!1;for(var je=0;je<q.length;je++){var ke=T.props[je].name,Be=le[ke];if(Be===void 0){if(Q[je])return de.fail(ke,"is missing",1)}else{var Ve=q[je](Be,de);if(!Ve)return de.fail(ke,null,1)}}return!0};if(!X)return te;var be=this.propSet;return C&&(this.propSet.forEach(function(le){return C.add(le)}),be=C),function(le,de){if(!te(le,de))return!1;for(var je in le)if(!be.has(je))return de.fail(je,"is extraneous",2);return!0}},$}(o);t.TIface=D;function A(F){return new W(l(F))}t.opt=A;var W=function(F){e($,F);function $(V){var X=F.call(this)||this;return X.ttype=V,X}return $.prototype.getChecker=function(V,X){var C=this.ttype.getChecker(V,X);return function(T,L){return T===void 0||C(T,L)}},$}(o);t.TOptional=W;var J=function(){function F($,V,X){this.name=$,this.ttype=V,this.isOpt=X}return F}();t.TProp=J;function ae(F){for(var $=[],V=1;V<arguments.length;V++)$[V-1]=arguments[V];return new ie(new _e($),l(F))}t.func=ae;var ie=function(F){e($,F);function $(V,X){var C=F.call(this)||this;return C.paramList=V,C.result=X,C}return $.prototype.getChecker=function(V,X){return function(C,T){return typeof C=="function"?!0:T.fail(null,"is not a function",0)}},$}(o);t.TFunc=ie;function xe(F,$,V){return new Pe(F,l($),!!V)}t.param=xe;var Pe=function(){function F($,V,X){this.name=$,this.ttype=V,this.isOpt=X}return F}();t.TParam=Pe;var _e=function(F){e($,F);function $(V){var X=F.call(this)||this;return X.params=V,X}return $.prototype.getChecker=function(V,X){var C=this,T=this.params.map(function(Q){return Q.ttype.getChecker(V,X)}),L=new r.NoopContext,q=this.params.map(function(Q,te){return!Q.isOpt&&!T[te](void 0,L)}),ee=function(Q,te){if(!Array.isArray(Q))return te.fail(null,"is not an array",0);for(var be=0;be<T.length;be++){var le=C.params[be];if(Q[be]===void 0){if(q[be])return te.fail(le.name,"is missing",1)}else{var de=T[be](Q[be],te);if(!de)return te.fail(le.name,null,1)}}return!0};return X?function(Q,te){return ee(Q,te)?Q.length<=T.length?!0:te.fail(T.length,"is extraneous",2):!1}:ee},$}(o);t.TParamList=_e;var z=function(F){e($,F);function $(V,X){var C=F.call(this)||this;return C.validator=V,C.message=X,C}return $.prototype.getChecker=function(V,X){var C=this;return function(T,L){return C.validator(T)?!0:L.fail(null,C.message,0)}},$}(o);t.BasicType=z,t.basicTypes={any:new z(function(F){return!0},"is invalid"),number:new z(function(F){return typeof F=="number"},"is not a number"),object:new z(function(F){return typeof F=="object"&&F},"is not an object"),boolean:new z(function(F){return typeof F=="boolean"},"is not a boolean"),string:new z(function(F){return typeof F=="string"},"is not a string"),symbol:new z(function(F){return typeof F=="symbol"},"is not a symbol"),void:new z(function(F){return F==null},"is not void"),undefined:new z(function(F){return F===void 0},"is not undefined"),null:new z(function(F){return F===null},"is not null"),never:new z(function(F){return!1},"is unexpected"),Date:new z(Y("[object Date]"),"is not a Date"),RegExp:new z(Y("[object RegExp]"),"is not a RegExp")};var Z=Object.prototype.toString;function Y(F){return function($){return typeof $=="object"&&$&&Z.call($)===F}}typeof Buffer<"u"&&(t.basicTypes.Buffer=new z(function(F){return Buffer.isBuffer(F)},"is not a Buffer"));for(var se=function(F){t.basicTypes[F.name]=new z(function($){return $ instanceof F},"is not a "+F.name)},Oe=0,Re=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,ArrayBuffer];Oe<Re.length;Oe++){var Le=Re[Oe];se(Le)}})(tf);(function(t){var e=Qn&&Qn.__spreadArrays||function(){for(var d=0,u=0,h=arguments.length;u<h;u++)d+=arguments[u].length;for(var p=Array(d),y=0,u=0;u<h;u++)for(var S=arguments[u],g=0,x=S.length;g<x;g++,y++)p[y]=S[g];return p};Object.defineProperty(t,"__esModule",{value:!0}),t.Checker=t.createCheckers=void 0;var r=tf,o=dt,l=tf;Object.defineProperty(t,"TArray",{enumerable:!0,get:function(){return l.TArray}}),Object.defineProperty(t,"TEnumType",{enumerable:!0,get:function(){return l.TEnumType}}),Object.defineProperty(t,"TEnumLiteral",{enumerable:!0,get:function(){return l.TEnumLiteral}}),Object.defineProperty(t,"TFunc",{enumerable:!0,get:function(){return l.TFunc}}),Object.defineProperty(t,"TIface",{enumerable:!0,get:function(){return l.TIface}}),Object.defineProperty(t,"TLiteral",{enumerable:!0,get:function(){return l.TLiteral}}),Object.defineProperty(t,"TName",{enumerable:!0,get:function(){return l.TName}}),Object.defineProperty(t,"TOptional",{enumerable:!0,get:function(){return l.TOptional}}),Object.defineProperty(t,"TParam",{enumerable:!0,get:function(){return l.TParam}}),Object.defineProperty(t,"TParamList",{enumerable:!0,get:function(){return l.TParamList}}),Object.defineProperty(t,"TProp",{enumerable:!0,get:function(){return l.TProp}}),Object.defineProperty(t,"TTuple",{enumerable:!0,get:function(){return l.TTuple}}),Object.defineProperty(t,"TType",{enumerable:!0,get:function(){return l.TType}}),Object.defineProperty(t,"TUnion",{enumerable:!0,get:function(){return l.TUnion}}),Object.defineProperty(t,"TIntersection",{enumerable:!0,get:function(){return l.TIntersection}}),Object.defineProperty(t,"array",{enumerable:!0,get:function(){return l.array}}),Object.defineProperty(t,"enumlit",{enumerable:!0,get:function(){return l.enumlit}}),Object.defineProperty(t,"enumtype",{enumerable:!0,get:function(){return l.enumtype}}),Object.defineProperty(t,"func",{enumerable:!0,get:function(){return l.func}}),Object.defineProperty(t,"iface",{enumerable:!0,get:function(){return l.iface}}),Object.defineProperty(t,"lit",{enumerable:!0,get:function(){return l.lit}}),Object.defineProperty(t,"name",{enumerable:!0,get:function(){return l.name}}),Object.defineProperty(t,"opt",{enumerable:!0,get:function(){return l.opt}}),Object.defineProperty(t,"param",{enumerable:!0,get:function(){return l.param}}),Object.defineProperty(t,"tuple",{enumerable:!0,get:function(){return l.tuple}}),Object.defineProperty(t,"union",{enumerable:!0,get:function(){return l.union}}),Object.defineProperty(t,"intersection",{enumerable:!0,get:function(){return l.intersection}}),Object.defineProperty(t,"BasicType",{enumerable:!0,get:function(){return l.BasicType}});var a=dt;Object.defineProperty(t,"VError",{enumerable:!0,get:function(){return a.VError}});function c(){for(var d=[],u=0;u<arguments.length;u++)d[u]=arguments[u];for(var h=Object.assign.apply(Object,e([{},r.basicTypes],d)),p={},y=0,S=d;y<S.length;y++)for(var g=S[y],x=0,P=Object.keys(g);x<P.length;x++){var m=P[x];p[m]=new s(h,g[m])}return p}t.createCheckers=c;var s=function(){function d(u,h,p){if(p===void 0&&(p="value"),this.suite=u,this.ttype=h,this._path=p,this.props=new Map,h instanceof r.TIface)for(var y=0,S=h.props;y<S.length;y++){var g=S[y];this.props.set(g.name,g.ttype)}this.checkerPlain=this.ttype.getChecker(u,!1),this.checkerStrict=this.ttype.getChecker(u,!0)}return d.prototype.setReportedPath=function(u){this._path=u},d.prototype.check=function(u){return this._doCheck(this.checkerPlain,u)},d.prototype.test=function(u){return this.checkerPlain(u,new o.NoopContext)},d.prototype.validate=function(u){return this._doValidate(this.checkerPlain,u)},d.prototype.strictCheck=function(u){return this._doCheck(this.checkerStrict,u)},d.prototype.strictTest=function(u){return this.checkerStrict(u,new o.NoopContext)},d.prototype.strictValidate=function(u){return this._doValidate(this.checkerStrict,u)},d.prototype.getProp=function(u){var h=this.props.get(u);if(!h)throw new Error("Type has no property "+u);return new d(this.suite,h,this._path+"."+u)},d.prototype.methodArgs=function(u){var h=this._getMethod(u);return new d(this.suite,h.paramList)},d.prototype.methodResult=function(u){var h=this._getMethod(u);return new d(this.suite,h.result)},d.prototype.getArgs=function(){if(!(this.ttype instanceof r.TFunc))throw new Error("getArgs() applied to non-function");return new d(this.suite,this.ttype.paramList)},d.prototype.getResult=function(){if(!(this.ttype instanceof r.TFunc))throw new Error("getResult() applied to non-function");return new d(this.suite,this.ttype.result)},d.prototype.getType=function(){return this.ttype},d.prototype._doCheck=function(u,h){var p=new o.NoopContext;if(!u(h,p)){var y=new o.DetailContext;throw u(h,y),y.getError(this._path)}},d.prototype._doValidate=function(u,h){var p=new o.NoopContext;if(u(h,p))return null;var y=new o.DetailContext;return u(h,y),y.getErrorDetail(this._path)},d.prototype._getMethod=function(u){var h=this.props.get(u);if(!h)throw new Error("Type has no property "+u);if(!(h instanceof r.TFunc))throw new Error("Property "+u+" is not a method");return h},d}();t.Checker=s})(Ee);const Gw=Ee.union(Ee.lit("jsx"),Ee.lit("typescript"),Ee.lit("flow"),Ee.lit("imports"),Ee.lit("react-hot-loader"),Ee.lit("jest")),Jw=Ee.iface([],{compiledFilename:"string"}),Xw=Ee.iface([],{transforms:Ee.array("Transform"),disableESTransforms:Ee.opt("boolean"),jsxRuntime:Ee.opt(Ee.union(Ee.lit("classic"),Ee.lit("automatic"),Ee.lit("preserve"))),production:Ee.opt("boolean"),jsxImportSource:Ee.opt("string"),jsxPragma:Ee.opt("string"),jsxFragmentPragma:Ee.opt("string"),keepUnusedImports:Ee.opt("boolean"),preserveDynamicImport:Ee.opt("boolean"),injectCreateRequireForImportRequire:Ee.opt("boolean"),enableLegacyTypeScriptModuleInterop:Ee.opt("boolean"),enableLegacyBabel5ModuleInterop:Ee.opt("boolean"),sourceMapOptions:Ee.opt("SourceMapOptions"),filePath:Ee.opt("string")}),Kw={Transform:Gw,SourceMapOptions:Jw,Options:Xw},{Options:Qw}=Ee.createCheckers(Kw);function Yw(t){Qw.strictCheck(t)}function Tb(){B(),tn(!1)}function Ab(t){B(),Fa(t)}function tr(t){ce(),yd(t)}function ra(){ce(),f.tokens[f.tokens.length-1].identifierRole=oe.ImportDeclaration}function yd(t){let e;f.scopeDepth===0?e=oe.TopLevelDeclaration:t?e=oe.BlockScopedDeclaration:e=oe.FunctionScopedDeclaration,f.tokens[f.tokens.length-1].identifierRole=e}function Fa(t){switch(f.type){case i._this:{const e=he(0);B(),ye(e);return}case i._yield:case i.name:{f.type=i.name,tr(t);return}case i.bracketL:{B(),hd(i.bracketR,t,!0);return}case i.braceL:_d(!0,t);return;default:pe()}}function hd(t,e,r=!1,o=!1,l=0){let a=!0,c=!1;const s=f.tokens.length;for(;!R(t)&&!f.error;)if(a?a=!1:(M(i.comma),f.tokens[f.tokens.length-1].contextId=l,!c&&f.tokens[s].isType&&(f.tokens[f.tokens.length-1].isType=!0,c=!0)),!(r&&j(i.comma))){if(R(t))break;if(j(i.ellipsis)){Ab(e),Rb(),R(i.comma),M(t);break}else Zw(o,e)}}function Zw(t,e){t&&Od([w._public,w._protected,w._private,w._readonly,w._override]),oa(e),Rb(),oa(e,!0)}function Rb(){we?b_():me&&aS()}function oa(t,e=!1){if(e||Fa(t),!R(i.eq))return;const r=f.tokens.length-1;tn(),f.tokens[r].rhsEndIndex=f.tokens.length}function rf(){return j(i.name)}function eP(){return j(i.name)||!!(f.type&i.IS_KEYWORD)||j(i.string)||j(i.num)||j(i.bigint)||j(i.decimal)}function Lb(){const t=f.snapshot();return B(),(j(i.bracketL)||j(i.braceL)||j(i.star)||j(i.ellipsis)||j(i.hash)||eP())&&!On()?!0:(f.restoreFromSnapshot(t),!1)}function Od(t){for(;Fb(t)!==null;);}function Fb(t){if(!j(i.name))return null;const e=f.contextualKeyword;if(t.indexOf(e)!==-1&&Lb()){switch(e){case w._readonly:f.tokens[f.tokens.length-1].type=i._readonly;break;case w._abstract:f.tokens[f.tokens.length-1].type=i._abstract;break;case w._static:f.tokens[f.tokens.length-1].type=i._static;break;case w._public:f.tokens[f.tokens.length-1].type=i._public;break;case w._private:f.tokens[f.tokens.length-1].type=i._private;break;case w._protected:f.tokens[f.tokens.length-1].type=i._protected;break;case w._override:f.tokens[f.tokens.length-1].type=i._override;break;case w._declare:f.tokens[f.tokens.length-1].type=i._declare;break}return e}return null}function Tl(){for(ce();R(i.dot);)ce()}function nP(){Tl(),!On()&&j(i.lessThan)&&go()}function tP(){B(),Al()}function rP(){B()}function oP(){M(i._typeof),j(i._import)?Mb():Tl(),!On()&&j(i.lessThan)&&go()}function Mb(){M(i._import),M(i.parenL),M(i.string),M(i.parenR),R(i.dot)&&Tl(),j(i.lessThan)&&go()}function lP(){R(i._const);const t=R(i._in),e=Xe(w._out);R(i._const),(t||e)&&!j(i.name)?f.tokens[f.tokens.length-1].type=i.name:ce(),R(i._extends)&&De(),R(i.eq)&&De()}function _r(){j(i.lessThan)&&Ma()}function Ma(){const t=he(0);for(j(i.lessThan)||j(i.typeParameterStart)?B():pe();!R(i.greaterThan)&&!f.error;)lP(),R(i.comma);ye(t)}function bd(t){const e=t===i.arrow;_r(),M(i.parenL),f.scopeDepth++,iP(!1),f.scopeDepth--,(e||j(t))&&jl(t)}function iP(t){hd(i.parenR,t)}function la(){R(i.comma)||Ce()}function Np(){bd(i.colon),la()}function aP(){const t=f.snapshot();B();const e=R(i.name)&&j(i.colon);return f.restoreFromSnapshot(t),e}function Db(){if(!(j(i.bracketL)&&aP()))return!1;const t=he(0);return M(i.bracketL),ce(),Al(),M(i.bracketR),mo(),la(),ye(t),!0}function Cp(t){R(i.question),!t&&(j(i.parenL)||j(i.lessThan))?(bd(i.colon),la()):(mo(),la())}function cP(){if(j(i.parenL)||j(i.lessThan)){Np();return}if(j(i._new)){B(),j(i.parenL)||j(i.lessThan)?Np():Cp(!1);return}const t=!!Fb([w._readonly]);Db()||((re(w._get)||re(w._set))&&Lb(),xl(-1),Cp(t))}function sP(){Bb()}function Bb(){for(M(i.braceL);!R(i.braceR)&&!f.error;)cP()}function fP(){const t=f.snapshot(),e=dP();return f.restoreFromSnapshot(t),e}function dP(){return B(),R(i.plus)||R(i.minus)?re(w._readonly):(re(w._readonly)&&B(),!j(i.bracketL)||(B(),!rf())?!1:(B(),j(i._in)))}function uP(){ce(),M(i._in),De()}function pP(){M(i.braceL),j(i.plus)||j(i.minus)?(B(),We(w._readonly)):Xe(w._readonly),M(i.bracketL),uP(),Xe(w._as)&&De(),M(i.bracketR),j(i.plus)||j(i.minus)?(B(),M(i.question)):R(i.question),EP(),Ce(),M(i.braceR)}function yP(){for(M(i.bracketL);!R(i.bracketR)&&!f.error;)hP(),R(i.comma)}function hP(){R(i.ellipsis)?De():(De(),R(i.question)),R(i.colon)&&De()}function OP(){M(i.parenL),De(),M(i.parenR)}function bP(){for(Ft(),Ft();!j(i.backQuote)&&!f.error;)M(i.dollarBraceL),De(),Ft(),Ft();B()}var Vt;(function(t){t[t.TSFunctionType=0]="TSFunctionType";const r=1;t[t.TSConstructorType=r]="TSConstructorType";const o=r+1;t[t.TSAbstractConstructorType=o]="TSAbstractConstructorType"})(Vt||(Vt={}));function Zc(t){t===Vt.TSAbstractConstructorType&&We(w._abstract),(t===Vt.TSConstructorType||t===Vt.TSAbstractConstructorType)&&M(i._new);const e=f.inDisallowConditionalTypesContext;f.inDisallowConditionalTypesContext=!1,bd(i.arrow),f.inDisallowConditionalTypesContext=e}function mP(){switch(f.type){case i.name:nP();return;case i._void:case i._null:B();return;case i.string:case i.num:case i.bigint:case i.decimal:case i._true:case i._false:uo();return;case i.minus:B(),uo();return;case i._this:{rP(),re(w._is)&&!On()&&tP();return}case i._typeof:oP();return;case i._import:Mb();return;case i.braceL:fP()?pP():sP();return;case i.bracketL:yP();return;case i.parenL:OP();return;case i.backQuote:bP();return;default:if(f.type&i.IS_KEYWORD){B(),f.tokens[f.tokens.length-1].type=i.name;return}break}pe()}function gP(){for(mP();!On()&&R(i.bracketL);)R(i.bracketR)||(De(),M(i.bracketR))}function jP(){if(We(w._infer),ce(),j(i._extends)){const t=f.snapshot();M(i._extends);const e=f.inDisallowConditionalTypesContext;f.inDisallowConditionalTypesContext=!0,De(),f.inDisallowConditionalTypesContext=e,(f.error||!f.inDisallowConditionalTypesContext&&j(i.question))&&f.restoreFromSnapshot(t)}}function of(){if(re(w._keyof)||re(w._unique)||re(w._readonly))B(),of();else if(re(w._infer))jP();else{const t=f.inDisallowConditionalTypesContext;f.inDisallowConditionalTypesContext=!1,gP(),f.inDisallowConditionalTypesContext=t}}function Tp(){if(R(i.bitwiseAND),of(),j(i.bitwiseAND))for(;R(i.bitwiseAND);)of()}function xP(){if(R(i.bitwiseOR),Tp(),j(i.bitwiseOR))for(;R(i.bitwiseOR);)Tp()}function vP(){return j(i.lessThan)?!0:j(i.parenL)&&PP()}function wP(){if(j(i.name)||j(i._this))return B(),!0;if(j(i.braceL)||j(i.bracketL)){let t=1;for(B();t>0&&!f.error;)j(i.braceL)||j(i.bracketL)?t++:(j(i.braceR)||j(i.bracketR))&&t--,B();return!0}return!1}function PP(){const t=f.snapshot(),e=SP();return f.restoreFromSnapshot(t),e}function SP(){return B(),!!(j(i.parenR)||j(i.ellipsis)||wP()&&(j(i.colon)||j(i.comma)||j(i.question)||j(i.eq)||j(i.parenR)&&(B(),j(i.arrow))))}function jl(t){const e=he(0);M(t),IP()||De(),ye(e)}function _P(){j(i.colon)&&jl(i.colon)}function mo(){j(i.colon)&&Al()}function EP(){R(i.colon)&&De()}function IP(){const t=f.snapshot();return re(w._asserts)?(B(),Xe(w._is)?(De(),!0):rf()||j(i._this)?(B(),Xe(w._is)&&De(),!0):(f.restoreFromSnapshot(t),!1)):rf()||j(i._this)?(B(),re(w._is)&&!On()?(B(),De(),!0):(f.restoreFromSnapshot(t),!1)):!1}function Al(){const t=he(0);M(i.colon),De(),ye(t)}function De(){if(Ap(),f.inDisallowConditionalTypesContext||On()||!R(i._extends))return;const t=f.inDisallowConditionalTypesContext;f.inDisallowConditionalTypesContext=!0,Ap(),f.inDisallowConditionalTypesContext=t,M(i.question),De(),M(i.colon),De()}function kP(){return re(w._abstract)&&Me()===i._new}function Ap(){if(vP()){Zc(Vt.TSFunctionType);return}if(j(i._new)){Zc(Vt.TSConstructorType);return}else if(kP()){Zc(Vt.TSAbstractConstructorType);return}xP()}function NP(){const t=he(1);De(),M(i.greaterThan),ye(t),Rl()}function CP(){if(R(i.jsxTagStart)){f.tokens[f.tokens.length-1].type=i.typeParameterStart;const t=he(1);for(;!j(i.greaterThan)&&!f.error;)De(),R(i.comma);$n(),ye(t)}}function $b(){for(;!j(i.braceL)&&!f.error;)TP(),R(i.comma)}function TP(){Tl(),j(i.lessThan)&&go()}function AP(){tr(!1),_r(),R(i._extends)&&$b(),Bb()}function RP(){tr(!1),_r(),M(i.eq),De(),Ce()}function LP(){if(j(i.string)?uo():ce(),R(i.eq)){const t=f.tokens.length-1;tn(),f.tokens[t].rhsEndIndex=f.tokens.length}}function md(){for(tr(!1),M(i.braceL);!R(i.braceR)&&!f.error;)LP(),R(i.comma)}function gd(){M(i.braceL),za(i.braceR)}function lf(){tr(!1),R(i.dot)?lf():gd()}function zb(){re(w._global)?ce():j(i.string)?St():pe(),j(i.braceL)?gd():Ce()}function af(){ra(),M(i.eq),MP(),Ce()}function FP(){return re(w._require)&&Me()===i.parenL}function MP(){FP()?DP():Tl()}function DP(){We(w._require),M(i.parenL),j(i.string)||pe(),uo(),M(i.parenR)}function BP(){if(it())return!1;switch(f.type){case i._function:{const t=he(1);B();const e=f.start;return xr(e,!0),ye(t),!0}case i._class:{const t=he(1);return vr(!0,!1),ye(t),!0}case i._const:if(j(i._const)&&dd(w._enum)){const t=he(1);return M(i._const),We(w._enum),f.tokens[f.tokens.length-1].type=i._enum,md(),ye(t),!0}case i._var:case i._let:{const t=he(1);return vi(f.type!==i._var),ye(t),!0}case i.name:{const t=he(1),e=f.contextualKeyword;let r=!1;return e===w._global?(zb(),r=!0):r=Da(e,!0),ye(t),r}default:return!1}}function Rp(){return Da(f.contextualKeyword,!0)}function $P(t){switch(t){case w._declare:{const e=f.tokens.length-1;if(BP())return f.tokens[e].type=i._declare,!0;break}case w._global:if(j(i.braceL))return gd(),!0;break;default:return Da(t,!1)}return!1}function Da(t,e){switch(t){case w._abstract:if(Mr(e)&&j(i._class))return f.tokens[f.tokens.length-1].type=i._abstract,vr(!0,!1),!0;break;case w._enum:if(Mr(e)&&j(i.name))return f.tokens[f.tokens.length-1].type=i._enum,md(),!0;break;case w._interface:if(Mr(e)&&j(i.name)){const r=he(e?2:1);return AP(),ye(r),!0}break;case w._module:if(Mr(e)){if(j(i.string)){const r=he(e?2:1);return zb(),ye(r),!0}else if(j(i.name)){const r=he(e?2:1);return lf(),ye(r),!0}}break;case w._namespace:if(Mr(e)&&j(i.name)){const r=he(e?2:1);return lf(),ye(r),!0}break;case w._type:if(Mr(e)&&j(i.name)){const r=he(e?2:1);return RP(),ye(r),!0}break}return!1}function Mr(t){return t?(B(),!0):!it()}function zP(){const t=f.snapshot();return Ma(),jo(),_P(),M(i.arrow),f.error?(f.restoreFromSnapshot(t),!1):(Ll(!0),!0)}function jd(){f.type===i.bitShiftL&&(f.pos-=1,ue(i.lessThan)),go()}function go(){const t=he(0);for(M(i.lessThan);!j(i.greaterThan)&&!f.error;)De(),R(i.comma);t?(M(i.greaterThan),ye(t)):(ye(t),vb(),M(i.greaterThan),f.tokens[f.tokens.length-1].isType=!0)}function Ub(){if(j(i.name))switch(f.contextualKeyword){case w._abstract:case w._declare:case w._enum:case w._interface:case w._module:case w._namespace:case w._type:return!0}return!1}function UP(t,e){if(j(i.colon)&&jl(i.colon),!j(i.braceL)&&it()){let r=f.tokens.length-1;for(;r>=0&&(f.tokens[r].start>=t||f.tokens[r].type===i._default||f.tokens[r].type===i._export);)f.tokens[r].isType=!0,r--;return}Ll(!1,e)}function HP(t,e,r){if(!On()&&R(i.bang)){f.tokens[f.tokens.length-1].type=i.nonNullAssertion;return}if(j(i.lessThan)||j(i.bitShiftL)){const o=f.snapshot();if(!e&&Kb()&&zP())return;if(jd(),!e&&R(i.parenL)?(f.tokens[f.tokens.length-1].subscriptStartIndex=t,Gt()):j(i.backQuote)?Sd():(f.type===i.greaterThan||f.type!==i.parenL&&f.type&i.IS_EXPRESSION_START&&!On())&&pe(),f.error)f.restoreFromSnapshot(o);else return}else!e&&j(i.questionDot)&&Me()===i.lessThan&&(B(),f.tokens[t].isOptionalChainStart=!0,f.tokens[f.tokens.length-1].subscriptStartIndex=t,go(),M(i.parenL),Gt());vd(t,e,r)}function qP(){if(R(i._import))return re(w._type)&&Me()!==i.eq&&We(w._type),af(),!0;if(R(i.eq))return nn(),Ce(),!0;if(Xe(w._as))return We(w._namespace),ce(),Ce(),!0;if(re(w._type)){const t=Me();(t===i.braceL||t===i.star)&&B()}return!1}function WP(){if(ce(),j(i.comma)||j(i.braceR)){f.tokens[f.tokens.length-1].identifierRole=oe.ImportDeclaration;return}if(ce(),j(i.comma)||j(i.braceR)){f.tokens[f.tokens.length-1].identifierRole=oe.ImportDeclaration,f.tokens[f.tokens.length-2].isType=!0,f.tokens[f.tokens.length-1].isType=!0;return}if(ce(),j(i.comma)||j(i.braceR)){f.tokens[f.tokens.length-3].identifierRole=oe.ImportAccess,f.tokens[f.tokens.length-1].identifierRole=oe.ImportDeclaration;return}ce(),f.tokens[f.tokens.length-3].identifierRole=oe.ImportAccess,f.tokens[f.tokens.length-1].identifierRole=oe.ImportDeclaration,f.tokens[f.tokens.length-4].isType=!0,f.tokens[f.tokens.length-3].isType=!0,f.tokens[f.tokens.length-2].isType=!0,f.tokens[f.tokens.length-1].isType=!0}function VP(){if(ce(),j(i.comma)||j(i.braceR)){f.tokens[f.tokens.length-1].identifierRole=oe.ExportAccess;return}if(ce(),j(i.comma)||j(i.braceR)){f.tokens[f.tokens.length-1].identifierRole=oe.ExportAccess,f.tokens[f.tokens.length-2].isType=!0,f.tokens[f.tokens.length-1].isType=!0;return}if(ce(),j(i.comma)||j(i.braceR)){f.tokens[f.tokens.length-3].identifierRole=oe.ExportAccess;return}ce(),f.tokens[f.tokens.length-3].identifierRole=oe.ExportAccess,f.tokens[f.tokens.length-4].isType=!0,f.tokens[f.tokens.length-3].isType=!0,f.tokens[f.tokens.length-2].isType=!0,f.tokens[f.tokens.length-1].isType=!0}function GP(){if(re(w._abstract)&&Me()===i._class)return f.type=i._abstract,B(),vr(!0,!0),!0;if(re(w._interface)){const t=he(2);return Da(w._interface,!0),ye(t),!0}return!1}function JP(){if(f.type===i._const){const t=Cl();if(t.type===i.name&&t.contextualKeyword===w._enum)return M(i._const),We(w._enum),f.tokens[f.tokens.length-1].type=i._enum,md(),!0}return!1}function XP(t){const e=f.tokens.length;Od([w._abstract,w._readonly,w._declare,w._static,w._override]);const r=f.tokens.length;if(Db()){const l=t?e-1:e;for(let a=l;a<r;a++)f.tokens[a].isType=!0;return!0}return!1}function KP(t){$P(t)||Ce()}function QP(){const t=Xe(w._declare);t&&(f.tokens[f.tokens.length-1].type=i._declare);let e=!1;if(j(i.name))if(t){const r=he(2);e=Rp(),ye(r)}else e=Rp();if(!e)if(t){const r=he(2);An(!0),ye(r)}else An(!0)}function YP(t){if(t&&(j(i.lessThan)||j(i.bitShiftL))&&jd(),Xe(w._implements)){f.tokens[f.tokens.length-1].type=i._implements;const e=he(1);$b(),ye(e)}}function ZP(){_r()}function eS(){_r()}function nS(){const t=he(0);On()||R(i.bang),mo(),ye(t)}function tS(){j(i.colon)&&Al()}function rS(t,e){return Ra?oS(t,e):lS(t,e)}function oS(t,e){if(!j(i.lessThan))return ut(t,e);const r=f.snapshot();let o=ut(t,e);if(f.error)f.restoreFromSnapshot(r);else return o;return f.type=i.typeParameterStart,Ma(),o=ut(t,e),o||pe(),o}function lS(t,e){if(!j(i.lessThan))return ut(t,e);const r=f.snapshot();Ma();const o=ut(t,e);if(o||pe(),f.error)f.restoreFromSnapshot(r);else return o;return ut(t,e)}function iS(){if(j(i.colon)){const t=f.snapshot();jl(i.colon),Nn()&&pe(),j(i.arrow)||pe(),f.error&&f.restoreFromSnapshot(t)}return R(i.arrow)}function aS(){const t=he(0);R(i.question),mo(),ye(t)}function cS(){(j(i.lessThan)||j(i.bitShiftL))&&jd(),cm()}function sS(){let t=!1,e=!1;for(;;){if(f.pos>=K.length){pe("Unterminated JSX contents");return}const r=K.charCodeAt(f.pos);if(r===I.lessThan||r===I.leftCurlyBrace){if(f.pos===f.start){if(r===I.lessThan){f.pos++,ue(i.jsxTagStart);return}wb(r);return}ue(t&&!e?i.jsxEmptyText:i.jsxText);return}r===I.lineFeed?t=!0:r!==I.space&&r!==I.carriageReturn&&r!==I.tab&&(e=!0),f.pos++}}function fS(t){for(f.pos++;;){if(f.pos>=K.length){pe("Unterminated string constant");return}if(K.charCodeAt(f.pos)===t){f.pos++;break}f.pos++}ue(i.string)}function dS(){let t;do{if(f.pos>K.length){pe("Unexpectedly reached the end of input.");return}t=K.charCodeAt(++f.pos)}while(Zn[t]||t===I.dash);ue(i.jsxName)}function cf(){$n()}function Hb(t){if(cf(),!R(i.colon)){f.tokens[f.tokens.length-1].identifierRole=t;return}cf()}function qb(){const t=f.tokens.length;Hb(oe.Access);let e=!1;for(;j(i.dot);)e=!0,$n(),cf();if(!e){const r=f.tokens[t],o=K.charCodeAt(r.start);o>=I.lowercaseA&&o<=I.lowercaseZ&&(r.identifierRole=null)}}function uS(){switch(f.type){case i.braceL:B(),nn(),$n();return;case i.jsxTagStart:Vb(),$n();return;case i.string:$n();return;default:pe("JSX value should be either an expression or a quoted JSX text")}}function pS(){M(i.ellipsis),nn()}function yS(t){if(j(i.jsxTagEnd))return!1;qb(),me&&CP();let e=!1;for(;!j(i.slash)&&!j(i.jsxTagEnd)&&!f.error;){if(R(i.braceL)){e=!0,M(i.ellipsis),tn(),$n();continue}e&&f.end-f.start===3&&K.charCodeAt(f.start)===I.lowercaseK&&K.charCodeAt(f.start+1)===I.lowercaseE&&K.charCodeAt(f.start+2)===I.lowercaseY&&(f.tokens[t].jsxRole=Jn.KeyAfterPropSpread),Hb(oe.ObjectKey),j(i.eq)&&($n(),uS())}const r=j(i.slash);return r&&$n(),r}function hS(){j(i.jsxTagEnd)||qb()}function Wb(){const t=f.tokens.length-1;f.tokens[t].jsxRole=Jn.NoChildren;let e=0;if(!yS(t))for(Dr();;)switch(f.type){case i.jsxTagStart:if($n(),j(i.slash)){$n(),hS(),f.tokens[t].jsxRole!==Jn.KeyAfterPropSpread&&(e===1?f.tokens[t].jsxRole=Jn.OneChild:e>1&&(f.tokens[t].jsxRole=Jn.StaticChildren));return}e++,Wb(),Dr();break;case i.jsxText:e++,Dr();break;case i.jsxEmptyText:Dr();break;case i.braceL:B(),j(i.ellipsis)?(pS(),Dr(),e+=2):(j(i.braceR)||(e++,nn()),Dr());break;default:pe();return}}function Vb(){$n(),Wb()}function $n(){f.tokens.push(new La),jb(),f.start=f.pos;const t=K.charCodeAt(f.pos);if(Nl[t])dS();else if(t===I.quotationMark||t===I.apostrophe)fS(t);else switch(++f.pos,t){case I.greaterThan:ue(i.jsxTagEnd);break;case I.lessThan:ue(i.jsxTagStart);break;case I.slash:ue(i.slash);break;case I.equalsTo:ue(i.eq);break;case I.leftCurlyBrace:ue(i.braceL);break;case I.dot:ue(i.dot);break;case I.colon:ue(i.colon);break;default:pe()}}function Dr(){f.tokens.push(new La),f.start=f.pos,sS()}function OS(t){if(j(i.question)){const e=Me();if(e===i.colon||e===i.comma||e===i.parenR)return}Gb(t)}function bS(){hb(i.question),j(i.colon)&&(me?Al():we&&Er())}class mS{constructor(e){this.stop=e}}function nn(t=!1){if(tn(t),j(i.comma))for(;R(i.comma);)tn(t)}function tn(t=!1,e=!1){return me?rS(t,e):we?w_(t,e):ut(t,e)}function ut(t,e){if(j(i._yield))return RS(),!1;(j(i.parenL)||j(i.name)||j(i._yield))&&(f.potentialArrowAt=f.start);const r=gS(t);return e&&Pd(),f.type&i.IS_ASSIGN?(B(),tn(t),!1):r}function gS(t){return xS(t)?!0:(jS(t),!1)}function jS(t){me||we?OS(t):Gb(t)}function Gb(t){R(i.question)&&(tn(),M(i.colon),tn(t))}function xS(t){const e=f.tokens.length;return Rl()?!0:(ji(e,-1,t),!1)}function ji(t,e,r){if(me&&(i._in&i.PRECEDENCE_MASK)>e&&!On()&&(Xe(w._as)||Xe(w._satisfies))){const l=he(1);De(),ye(l),vb(),ji(t,e,r);return}const o=f.type&i.PRECEDENCE_MASK;if(o>0&&(!r||!j(i._in))&&o>e){const l=f.type;B(),l===i.nullishCoalescing&&(f.tokens[f.tokens.length-1].nullishStartIndex=t);const a=f.tokens.length;Rl(),ji(a,l&i.IS_RIGHT_ASSOCIATIVE?o-1:o,r),l===i.nullishCoalescing&&(f.tokens[t].numNullishCoalesceStarts++,f.tokens[f.tokens.length-1].numNullishCoalesceEnds++),ji(t,e,r)}}function Rl(){if(me&&!Ra&&R(i.lessThan))return NP(),!1;if(re(w._module)&&bb()===I.leftCurlyBrace&&!fb())return LS(),!1;if(f.type&i.IS_PREFIX)return B(),Rl(),!1;if(Jb())return!0;for(;f.type&i.IS_POSTFIX&&!Nn();)f.type===i.preIncDec&&(f.type=i.postIncDec),B();return!1}function Jb(){const t=f.tokens.length;return St()?!0:(xd(t),f.tokens.length>t&&f.tokens[t].isOptionalChainStart&&(f.tokens[f.tokens.length-1].isOptionalChainEnd=!0),!1)}function xd(t,e=!1){we?S_(t,e):Xb(t,e)}function Xb(t,e=!1){const r=new mS(!1);do vS(t,e,r);while(!r.stop&&!f.error)}function vS(t,e,r){me?HP(t,e,r):we?l_(t,e,r):vd(t,e,r)}function vd(t,e,r){if(!e&&R(i.doubleColon))wd(),r.stop=!0,xd(t,e);else if(j(i.questionDot)){if(f.tokens[t].isOptionalChainStart=!0,e&&Me()===i.parenL){r.stop=!0;return}B(),f.tokens[f.tokens.length-1].subscriptStartIndex=t,R(i.bracketL)?(nn(),M(i.bracketR)):R(i.parenL)?Gt():ia()}else if(R(i.dot))f.tokens[f.tokens.length-1].subscriptStartIndex=t,ia();else if(R(i.bracketL))f.tokens[f.tokens.length-1].subscriptStartIndex=t,nn(),M(i.bracketR);else if(!e&&j(i.parenL))if(Kb()){const o=f.snapshot(),l=f.tokens.length;B(),f.tokens[f.tokens.length-1].subscriptStartIndex=t;const a=ml();f.tokens[f.tokens.length-1].contextId=a,Gt(),f.tokens[f.tokens.length-1].contextId=a,wS()&&(f.restoreFromSnapshot(o),r.stop=!0,f.scopeDepth++,jo(),PS(l))}else{B(),f.tokens[f.tokens.length-1].subscriptStartIndex=t;const o=ml();f.tokens[f.tokens.length-1].contextId=o,Gt(),f.tokens[f.tokens.length-1].contextId=o}else j(i.backQuote)?Sd():r.stop=!0}function Kb(){return f.tokens[f.tokens.length-1].contextualKeyword===w._async&&!Nn()}function Gt(){let t=!0;for(;!R(i.parenR)&&!f.error;){if(t)t=!1;else if(M(i.comma),R(i.parenR))break;em(!1)}}function wS(){return j(i.colon)||j(i.arrow)}function PS(t){me?tS():we&&v_(),M(i.arrow),vl(t)}function wd(){const t=f.tokens.length;St(),xd(t,!0)}function St(){if(R(i.modulo))return ce(),!1;if(j(i.jsxText)||j(i.jsxEmptyText))return uo(),!1;if(j(i.lessThan)&&Ra)return f.type=i.jsxTagStart,Vb(),B(),!1;const t=f.potentialArrowAt===f.start;switch(f.type){case i.slash:case i.assign:uw();case i._super:case i._this:case i.regexp:case i.num:case i.bigint:case i.decimal:case i.string:case i._null:case i._true:case i._false:return B(),!1;case i._import:return B(),j(i.dot)&&(f.tokens[f.tokens.length-1].type=i.name,B(),ce()),!1;case i.name:{const e=f.tokens.length,r=f.start,o=f.contextualKeyword;return ce(),o===w._await?(AS(),!1):o===w._async&&j(i._function)&&!Nn()?(B(),xr(r,!1),!1):t&&o===w._async&&!Nn()&&j(i.name)?(f.scopeDepth++,tr(!1),M(i.arrow),vl(e),!0):j(i._do)&&!Nn()?(B(),Jt(),!1):t&&!Nn()&&j(i.arrow)?(f.scopeDepth++,yd(!1),M(i.arrow),vl(e),!0):(f.tokens[f.tokens.length-1].identifierRole=oe.Access,!1)}case i._do:return B(),Jt(),!1;case i.parenL:return Qb(t);case i.bracketL:return B(),Zb(i.bracketR,!0),!1;case i.braceL:return _d(!1,!1),!1;case i._function:return SS(),!1;case i.at:Ld();case i._class:return vr(!1),!1;case i._new:return ES(),!1;case i.backQuote:return Sd(),!1;case i.doubleColon:return B(),wd(),!1;case i.hash:{const e=bb();return Nl[e]||e===I.backslash?ia():B(),!1}default:return pe(),!1}}function ia(){R(i.hash),ce()}function SS(){const t=f.start;ce(),R(i.dot)&&ce(),xr(t,!1)}function uo(){B()}function Ba(){M(i.parenL),nn(),M(i.parenR)}function Qb(t){const e=f.snapshot(),r=f.tokens.length;M(i.parenL);let o=!0;for(;!j(i.parenR)&&!f.error;){if(o)o=!1;else if(M(i.comma),j(i.parenR))break;if(j(i.ellipsis)){Ab(!1),Pd();break}else tn(!1,!0)}return M(i.parenR),t&&_S()&&sf()?(f.restoreFromSnapshot(e),f.scopeDepth++,jo(),sf(),vl(r),f.error?(f.restoreFromSnapshot(e),Qb(!1),!1):!0):!1}function _S(){return j(i.colon)||!Nn()}function sf(){return me?iS():we?P_():R(i.arrow)}function Pd(){(me||we)&&bS()}function ES(){if(M(i._new),R(i.dot)){ce();return}IS(),we&&i_(),R(i.parenL)&&Zb(i.parenR)}function IS(){wd(),R(i.questionDot)}function Sd(){for(Ft(),Ft();!j(i.backQuote)&&!f.error;)M(i.dollarBraceL),nn(),Ft(),Ft();B()}function _d(t,e){const r=ml();let o=!0;for(B(),f.tokens[f.tokens.length-1].contextId=r;!R(i.braceR)&&!f.error;){if(o)o=!1;else if(M(i.comma),R(i.braceR))break;let l=!1;if(j(i.ellipsis)){const a=f.tokens.length;if(Tb(),t&&(f.tokens.length===a+2&&yd(e),R(i.braceR)))break;continue}t||(l=R(i.star)),!t&&re(w._async)?(l&&pe(),ce(),j(i.colon)||j(i.parenL)||j(i.braceR)||j(i.eq)||j(i.comma)||(j(i.star)&&(B(),l=!0),xl(r))):xl(r),TS(t,e,r)}f.tokens[f.tokens.length-1].contextId=r}function kS(t){return!t&&(j(i.string)||j(i.num)||j(i.bracketL)||j(i.name)||!!(f.type&i.IS_KEYWORD))}function NS(t,e){const r=f.start;return j(i.parenL)?(t&&pe(),ff(r,!1),!0):kS(t)?(xl(e),ff(r,!1),!0):!1}function CS(t,e){if(R(i.colon)){t?oa(e):tn(!1);return}let r;t?f.scopeDepth===0?r=oe.ObjectShorthandTopLevelDeclaration:e?r=oe.ObjectShorthandBlockScopedDeclaration:r=oe.ObjectShorthandFunctionScopedDeclaration:r=oe.ObjectShorthand,f.tokens[f.tokens.length-1].identifierRole=r,oa(e,!0)}function TS(t,e,r){me?ZP():we&&O_(),NS(t,r)||CS(t,e)}function xl(t){we&&Rd(),R(i.bracketL)?(f.tokens[f.tokens.length-1].contextId=t,tn(),M(i.bracketR),f.tokens[f.tokens.length-1].contextId=t):(j(i.num)||j(i.string)||j(i.bigint)||j(i.decimal)?St():ia(),f.tokens[f.tokens.length-1].identifierRole=oe.ObjectKey,f.tokens[f.tokens.length-1].contextId=t)}function ff(t,e){const r=ml();f.scopeDepth++;const o=f.tokens.length;jo(e,r),Yb(t,r);const a=f.tokens.length;f.scopes.push(new pt(o,a,!0)),f.scopeDepth--}function vl(t){Ll(!0);const e=f.tokens.length;f.scopes.push(new pt(t,e,!0)),f.scopeDepth--}function Yb(t,e=0){me?UP(t,e):we?o_(e):Ll(!1,e)}function Ll(t,e=0){t&&!j(i.braceL)?tn():Jt(!0,e)}function Zb(t,e=!1){let r=!0;for(;!R(t)&&!f.error;){if(r)r=!1;else if(M(i.comma),R(t))break;em(e)}}function em(t){t&&j(i.comma)||(j(i.ellipsis)?(Tb(),Pd()):j(i.question)?B():tn(!1,!0))}function ce(){B(),f.tokens[f.tokens.length-1].type=i.name}function AS(){Rl()}function RS(){B(),!j(i.semi)&&!Nn()&&(R(i.star),tn())}function LS(){We(w._module),M(i.braceL),za(i.braceR)}function FS(t){return(t.type===i.name||!!(t.type&i.IS_KEYWORD))&&t.contextualKeyword!==w._from}function yt(t){const e=he(0);M(t||i.colon),Sn(),ye(e)}function Lp(){M(i.modulo),We(w._checks),R(i.parenL)&&(nn(),M(i.parenR))}function Ed(){const t=he(0);M(i.colon),j(i.modulo)?Lp():(Sn(),j(i.modulo)&&Lp()),ye(t)}function MS(){B(),Id(!0)}function DS(){B(),ce(),j(i.lessThan)&&nt(),M(i.parenL),uf(),M(i.parenR),Ed(),Ce()}function df(){j(i._class)?MS():j(i._function)?DS():j(i._var)?BS():Xe(w._module)?R(i.dot)?US():$S():re(w._type)?HS():re(w._opaque)?qS():re(w._interface)?WS():j(i._export)?zS():pe()}function BS(){B(),om(),Ce()}function $S(){for(j(i.string)?St():ce(),M(i.braceL);!j(i.braceR)&&!f.error;)j(i._import)?(B(),ym()):pe();M(i.braceR)}function zS(){M(i._export),R(i._default)?j(i._function)||j(i._class)?df():(Sn(),Ce()):j(i._var)||j(i._function)||j(i._class)||re(w._opaque)?df():j(i.star)||j(i.braceL)||re(w._interface)||re(w._type)||re(w._opaque)?um():pe()}function US(){We(w._exports),Er(),Ce()}function HS(){B(),Nd()}function qS(){B(),Cd(!0)}function WS(){B(),Id()}function Id(t=!1){if($a(),j(i.lessThan)&&nt(),R(i._extends))do xi();while(!t&&R(i.comma));if(re(w._mixins)){B();do xi();while(R(i.comma))}if(re(w._implements)){B();do xi();while(R(i.comma))}aa(t,!1,t)}function xi(){nm(!1),j(i.lessThan)&&jr()}function kd(){Id()}function $a(){ce()}function Nd(){$a(),j(i.lessThan)&&nt(),yt(i.eq),Ce()}function Cd(t){We(w._type),$a(),j(i.lessThan)&&nt(),j(i.colon)&&yt(i.colon),t||yt(i.eq),Ce()}function VS(){Rd(),om(),R(i.eq)&&Sn()}function nt(){const t=he(0);j(i.lessThan)||j(i.typeParameterStart)?B():pe();do VS(),j(i.greaterThan)||M(i.comma);while(!j(i.greaterThan)&&!f.error);M(i.greaterThan),ye(t)}function jr(){const t=he(0);for(M(i.lessThan);!j(i.greaterThan)&&!f.error;)Sn(),j(i.greaterThan)||M(i.comma);M(i.greaterThan),ye(t)}function GS(){if(We(w._interface),R(i._extends))do xi();while(R(i.comma));aa(!1,!1,!1)}function Td(){j(i.num)||j(i.string)?St():ce()}function JS(){Me()===i.colon?(Td(),yt()):Sn(),M(i.bracketR),yt()}function XS(){Td(),M(i.bracketR),M(i.bracketR),j(i.lessThan)||j(i.parenL)?Ad():(R(i.question),yt())}function Ad(){for(j(i.lessThan)&&nt(),M(i.parenL);!j(i.parenR)&&!j(i.ellipsis)&&!f.error;)ca(),j(i.parenR)||M(i.comma);R(i.ellipsis)&&ca(),M(i.parenR),yt()}function KS(){Ad()}function aa(t,e,r){let o;for(e&&j(i.braceBarL)?(M(i.braceBarL),o=i.braceBarR):(M(i.braceL),o=i.braceR);!j(o)&&!f.error;){if(r&&re(w._proto)){const l=Me();l!==i.colon&&l!==i.question&&(B(),t=!1)}if(t&&re(w._static)){const l=Me();l!==i.colon&&l!==i.question&&B()}if(Rd(),R(i.bracketL))R(i.bracketL)?XS():JS();else if(j(i.parenL)||j(i.lessThan))KS();else{if(re(w._get)||re(w._set)){const l=Me();(l===i.name||l===i.string||l===i.num)&&B()}QS()}YS()}M(o)}function QS(){if(j(i.ellipsis)){if(M(i.ellipsis),R(i.comma)||R(i.semi),j(i.braceR))return;Sn()}else Td(),j(i.lessThan)||j(i.parenL)?Ad():(R(i.question),yt())}function YS(){!R(i.semi)&&!R(i.comma)&&!j(i.braceR)&&!j(i.braceBarR)&&pe()}function nm(t){for(t||ce();R(i.dot);)ce()}function ZS(){nm(!0),j(i.lessThan)&&jr()}function e_(){M(i._typeof),tm()}function n_(){for(M(i.bracketL);f.pos<K.length&&!j(i.bracketR)&&(Sn(),!j(i.bracketR));)M(i.comma);M(i.bracketR)}function ca(){const t=Me();t===i.colon||t===i.question?(ce(),R(i.question),yt()):Sn()}function uf(){for(;!j(i.parenR)&&!j(i.ellipsis)&&!f.error;)ca(),j(i.parenR)||M(i.comma);R(i.ellipsis)&&ca()}function tm(){let t=!1;const e=f.noAnonFunctionType;switch(f.type){case i.name:{if(re(w._interface)){GS();return}ce(),ZS();return}case i.braceL:aa(!1,!1,!1);return;case i.braceBarL:aa(!1,!0,!1);return;case i.bracketL:n_();return;case i.lessThan:nt(),M(i.parenL),uf(),M(i.parenR),M(i.arrow),Sn();return;case i.parenL:if(B(),!j(i.parenR)&&!j(i.ellipsis))if(j(i.name)){const r=Me();t=r!==i.question&&r!==i.colon}else t=!0;if(t)if(f.noAnonFunctionType=!1,Sn(),f.noAnonFunctionType=e,f.noAnonFunctionType||!(j(i.comma)||j(i.parenR)&&Me()===i.arrow)){M(i.parenR);return}else R(i.comma);uf(),M(i.parenR),M(i.arrow),Sn();return;case i.minus:B(),uo();return;case i.string:case i.num:case i._true:case i._false:case i._null:case i._this:case i._void:case i.star:B();return;default:if(f.type===i._typeof){e_();return}else if(f.type&i.IS_KEYWORD){B(),f.tokens[f.tokens.length-1].type=i.name;return}}pe()}function t_(){for(tm();!Nn()&&(j(i.bracketL)||j(i.questionDot));)R(i.questionDot),M(i.bracketL),R(i.bracketR)||(Sn(),M(i.bracketR))}function rm(){R(i.question)?rm():t_()}function Fp(){rm(),!f.noAnonFunctionType&&R(i.arrow)&&Sn()}function Mp(){for(R(i.bitwiseAND),Fp();R(i.bitwiseAND);)Fp()}function r_(){for(R(i.bitwiseOR),Mp();R(i.bitwiseOR);)Mp()}function Sn(){r_()}function Er(){yt()}function om(){ce(),j(i.colon)&&Er()}function Rd(){(j(i.plus)||j(i.minus))&&(B(),f.tokens[f.tokens.length-1].isType=!0)}function o_(t){j(i.colon)&&Ed(),Ll(!1,t)}function l_(t,e,r){if(j(i.questionDot)&&Me()===i.lessThan){if(e){r.stop=!0;return}B(),jr(),M(i.parenL),Gt();return}else if(!e&&j(i.lessThan)){const o=f.snapshot();if(jr(),M(i.parenL),Gt(),f.error)f.restoreFromSnapshot(o);else return}vd(t,e,r)}function i_(){if(j(i.lessThan)){const t=f.snapshot();jr(),f.error&&f.restoreFromSnapshot(t)}}function a_(){if(j(i.name)&&f.contextualKeyword===w._interface){const t=he(0);return B(),kd(),ye(t),!0}else if(re(w._enum))return lm(),!0;return!1}function c_(){return re(w._enum)?(lm(),!0):!1}function s_(t){if(t===w._declare){if(j(i._class)||j(i.name)||j(i._function)||j(i._var)||j(i._export)){const e=he(1);df(),ye(e)}}else if(j(i.name)){if(t===w._interface){const e=he(1);kd(),ye(e)}else if(t===w._type){const e=he(1);Nd(),ye(e)}else if(t===w._opaque){const e=he(1);Cd(!1),ye(e)}}Ce()}function f_(){return re(w._type)||re(w._interface)||re(w._opaque)||re(w._enum)}function d_(){return j(i.name)&&(f.contextualKeyword===w._type||f.contextualKeyword===w._interface||f.contextualKeyword===w._opaque||f.contextualKeyword===w._enum)}function u_(){if(re(w._type)){const t=he(1);B(),j(i.braceL)?(Fd(),wl()):Nd(),ye(t)}else if(re(w._opaque)){const t=he(1);B(),Cd(!1),ye(t)}else if(re(w._interface)){const t=he(1);B(),kd(),ye(t)}else An(!0)}function p_(){return j(i.star)||re(w._type)&&Me()===i.star}function y_(){if(Xe(w._type)){const t=he(2);pf(),ye(t)}else pf()}function h_(t){if(t&&j(i.lessThan)&&jr(),re(w._implements)){const e=he(0);B(),f.tokens[f.tokens.length-1].type=i._implements;do $a(),j(i.lessThan)&&jr();while(R(i.comma));ye(e)}}function O_(){j(i.lessThan)&&(nt(),j(i.parenL)||pe())}function b_(){const t=he(0);R(i.question),j(i.colon)&&Er(),ye(t)}function m_(){if(j(i._typeof)||re(w._type)){const t=Cl();(FS(t)||t.type===i.braceL||t.type===i.star)&&B()}}function g_(){const t=f.contextualKeyword===w._type||f.type===i._typeof;t?B():ce(),re(w._as)&&!dd(w._as)?(ce(),t&&!j(i.name)&&!(f.type&i.IS_KEYWORD)||ce()):(t&&(j(i.name)||f.type&i.IS_KEYWORD)&&ce(),Xe(w._as)&&ce())}function j_(){if(j(i.lessThan)){const t=he(0);nt(),ye(t)}}function x_(){j(i.colon)&&Er()}function v_(){if(j(i.colon)){const t=f.noAnonFunctionType;f.noAnonFunctionType=!0,Er(),f.noAnonFunctionType=t}}function w_(t,e){if(j(i.lessThan)){const r=f.snapshot();let o=ut(t,e);if(f.error)f.restoreFromSnapshot(r),f.type=i.typeParameterStart;else return o;const l=he(0);if(nt(),ye(l),o=ut(t,e),o)return!0;pe()}return ut(t,e)}function P_(){if(j(i.colon)){const t=he(0),e=f.snapshot(),r=f.noAnonFunctionType;f.noAnonFunctionType=!0,Ed(),f.noAnonFunctionType=r,Nn()&&pe(),j(i.arrow)||pe(),f.error&&f.restoreFromSnapshot(e),ye(t)}return R(i.arrow)}function S_(t,e=!1){if(f.tokens[f.tokens.length-1].contextualKeyword===w._async&&j(i.lessThan)){const r=f.snapshot();if(__()&&!f.error)return;f.restoreFromSnapshot(r)}Xb(t,e)}function __(){f.scopeDepth++;const t=f.tokens.length;return jo(),sf()?(vl(t),!0):!1}function lm(){We(w._enum),f.tokens[f.tokens.length-1].type=i._enum,ce(),E_()}function E_(){Xe(w._of)&&B(),M(i.braceL),I_(),M(i.braceR)}function I_(){for(;!j(i.braceR)&&!f.error&&!R(i.ellipsis);)k_(),j(i.braceR)||M(i.comma)}function k_(){ce(),R(i.eq)&&B()}function N_(){if(za(i.eof),f.scopes.push(new pt(0,f.tokens.length,!0)),f.scopeDepth!==0)throw new Error(`Invalid scope depth at end of file: ${f.scopeDepth}`);return new OE(f.tokens,f.scopes)}function An(t){we&&a_()||(j(i.at)&&Ld(),C_(t))}function C_(t){if(me&&JP())return;const e=f.type;switch(e){case i._break:case i._continue:A_();return;case i._debugger:R_();return;case i._do:L_();return;case i._for:F_();return;case i._function:if(Me()===i.dot)break;t||pe(),B_();return;case i._class:t||pe(),vr(!0);return;case i._if:$_();return;case i._return:z_();return;case i._switch:U_();return;case i._throw:H_();return;case i._try:W_();return;case i._let:case i._const:t||pe();case i._var:vi(e!==i._var);return;case i._while:V_();return;case i.braceL:Jt();return;case i.semi:G_();return;case i._export:case i._import:{const l=Me();if(l===i.parenL||l===i.dot)break;B(),e===i._import?ym():um();return}case i.name:if(f.contextualKeyword===w._async){const l=f.start,a=f.snapshot();if(B(),j(i._function)&&!Nn()){M(i._function),xr(l,!0);return}else f.restoreFromSnapshot(a)}else if(f.contextualKeyword===w._using&&!fb()&&Me()===i.name){vi(!0);return}else if(im()){We(w._await),vi(!0);return}}const r=f.tokens.length;nn();let o=null;if(f.tokens.length===r+1){const l=f.tokens[f.tokens.length-1];l.type===i.name&&(o=l.contextualKeyword)}if(o==null){Ce();return}R(i.colon)?J_():X_(o)}function im(){if(!re(w._await))return!1;const t=f.snapshot();return B(),!re(w._using)||On()||(B(),!j(i.name)||On())?(f.restoreFromSnapshot(t),!1):(f.restoreFromSnapshot(t),!0)}function Ld(){for(;j(i.at);)am()}function am(){if(B(),R(i.parenL))nn(),M(i.parenR);else{for(ce();R(i.dot);)ce();T_()}}function T_(){me?cS():cm()}function cm(){R(i.parenL)&&Gt()}function A_(){B(),it()||(ce(),Ce())}function R_(){B(),Ce()}function L_(){B(),An(!1),M(i._while),Ba(),R(i.semi)}function F_(){f.scopeDepth++;const t=f.tokens.length;D_();const e=f.tokens.length;f.scopes.push(new pt(t,e,!1)),f.scopeDepth--}function M_(){return!(!re(w._using)||dd(w._of))}function D_(){B();let t=!1;if(re(w._await)&&(t=!0,B()),M(i.parenL),j(i.semi)){t&&pe(),es();return}const e=im();if(e||j(i._var)||j(i._let)||j(i._const)||M_()){if(e&&We(w._await),B(),sm(!0,f.type!==i._var),j(i._in)||re(w._of)){Dp(t);return}es();return}if(nn(!0),j(i._in)||re(w._of)){Dp(t);return}t&&pe(),es()}function B_(){const t=f.start;B(),xr(t,!0)}function $_(){B(),Ba(),An(!1),R(i._else)&&An(!1)}function z_(){B(),it()||(nn(),Ce())}function U_(){B(),Ba(),f.scopeDepth++;const t=f.tokens.length;for(M(i.braceL);!j(i.braceR)&&!f.error;)if(j(i._case)||j(i._default)){const r=j(i._case);B(),r&&nn(),M(i.colon)}else An(!0);B();const e=f.tokens.length;f.scopes.push(new pt(t,e,!1)),f.scopeDepth--}function H_(){B(),nn(),Ce()}function q_(){Fa(!0),me&&mo()}function W_(){if(B(),Jt(),j(i._catch)){B();let t=null;if(j(i.parenL)&&(f.scopeDepth++,t=f.tokens.length,M(i.parenL),q_(),M(i.parenR)),Jt(),t!=null){const e=f.tokens.length;f.scopes.push(new pt(t,e,!1)),f.scopeDepth--}}R(i._finally)&&Jt()}function vi(t){B(),sm(!1,t),Ce()}function V_(){B(),Ba(),An(!1)}function G_(){B()}function J_(){An(!0)}function X_(t){me?KP(t):we?s_(t):Ce()}function Jt(t=!1,e=0){const r=f.tokens.length;f.scopeDepth++,M(i.braceL),e&&(f.tokens[f.tokens.length-1].contextId=e),za(i.braceR),e&&(f.tokens[f.tokens.length-1].contextId=e);const o=f.tokens.length;f.scopes.push(new pt(r,o,t)),f.scopeDepth--}function za(t){for(;!R(t)&&!f.error;)An(!0)}function es(){M(i.semi),j(i.semi)||nn(),M(i.semi),j(i.parenR)||nn(),M(i.parenR),An(!1)}function Dp(t){t?Xe(w._of):B(),nn(),M(i.parenR),An(!1)}function sm(t,e){for(;;){if(K_(e),R(i.eq)){const r=f.tokens.length-1;tn(t),f.tokens[r].rhsEndIndex=f.tokens.length}if(!R(i.comma))break}}function K_(t){Fa(t),me?nS():we&&x_()}function xr(t,e,r=!1){j(i.star)&&B(),e&&!r&&!j(i.name)&&!j(i._yield)&&pe();let o=null;j(i.name)&&(e||(o=f.tokens.length,f.scopeDepth++),tr(!1));const l=f.tokens.length;f.scopeDepth++,jo(),Yb(t);const a=f.tokens.length;f.scopes.push(new pt(l,a,!0)),f.scopeDepth--,o!==null&&(f.scopes.push(new pt(o,a,!0)),f.scopeDepth--)}function jo(t=!1,e=0){me?eS():we&&j_(),M(i.parenL),e&&(f.tokens[f.tokens.length-1].contextId=e),hd(i.parenR,!1,!1,t,e),e&&(f.tokens[f.tokens.length-1].contextId=e)}function vr(t,e=!1){const r=ml();B(),f.tokens[f.tokens.length-1].contextId=r,f.tokens[f.tokens.length-1].isExpression=!t;let o=null;t||(o=f.tokens.length,f.scopeDepth++),eE(t,e),nE();const l=f.tokens.length;if(Q_(r),!f.error&&(f.tokens[l].contextId=r,f.tokens[f.tokens.length-1].contextId=r,o!==null)){const a=f.tokens.length;f.scopes.push(new pt(o,a,!1)),f.scopeDepth--}}function fm(){return j(i.eq)||j(i.semi)||j(i.braceR)||j(i.bang)||j(i.colon)}function dm(){return j(i.parenL)||j(i.lessThan)}function Q_(t){for(M(i.braceL);!R(i.braceR)&&!f.error;){if(R(i.semi))continue;if(j(i.at)){am();continue}const e=f.start;Y_(e,t)}}function Y_(t,e){me&&Od([w._declare,w._public,w._protected,w._private,w._override]);let r=!1;if(j(i.name)&&f.contextualKeyword===w._static){if(ce(),dm()){Do(t,!1);return}else if(fm()){wi();return}if(f.tokens[f.tokens.length-1].type=i._static,r=!0,j(i.braceL)){f.tokens[f.tokens.length-1].contextId=e,Jt();return}}Z_(t,r,e)}function Z_(t,e,r){if(me&&XP(e))return;if(R(i.star)){Ao(r),Do(t,!1);return}Ao(r);let o=!1;const l=f.tokens[f.tokens.length-1];l.contextualKeyword===w._constructor&&(o=!0),Bp(),dm()?Do(t,o):fm()?wi():l.contextualKeyword===w._async&&!it()?(f.tokens[f.tokens.length-1].type=i._async,j(i.star)&&B(),Ao(r),Bp(),Do(t,!1)):(l.contextualKeyword===w._get||l.contextualKeyword===w._set)&&!(it()&&j(i.star))?(l.contextualKeyword===w._get?f.tokens[f.tokens.length-1].type=i._get:f.tokens[f.tokens.length-1].type=i._set,Ao(r),Do(t,!1)):l.contextualKeyword===w._accessor&&!it()?(Ao(r),wi()):it()?wi():pe()}function Do(t,e){me?_r():we&&j(i.lessThan)&&nt(),ff(t,e)}function Ao(t){xl(t)}function Bp(){if(me){const t=he(0);R(i.question),ye(t)}}function wi(){if(me?(hb(i.bang),mo()):we&&j(i.colon)&&Er(),j(i.eq)){const t=f.tokens.length;B(),tn(),f.tokens[t].rhsEndIndex=f.tokens.length}Ce()}function eE(t,e=!1){me&&(!t||e)&&re(w._implements)||(j(i.name)&&tr(!0),me?_r():we&&j(i.lessThan)&&nt())}function nE(){let t=!1;R(i._extends)?(Jb(),t=!0):t=!1,me?YP(t):we&&h_(t)}function um(){const t=f.tokens.length-1;me&&qP()||(lE()?iE():oE()?(ce(),j(i.comma)&&Me()===i.star?(M(i.comma),M(i.star),We(w._as),ce()):pm(),wl()):R(i._default)?tE():cE()?rE():(Fd(),wl()),f.tokens[t].rhsEndIndex=f.tokens.length)}function tE(){if(me&&GP()||we&&c_())return;const t=f.start;R(i._function)?xr(t,!0,!0):re(w._async)&&Me()===i._function?(Xe(w._async),R(i._function),xr(t,!0,!0)):j(i._class)?vr(!0,!0):j(i.at)?(Ld(),vr(!0,!0)):(tn(),Ce())}function rE(){me?QP():we?u_():An(!0)}function oE(){if(me&&Ub())return!1;if(we&&d_())return!1;if(j(i.name))return f.contextualKeyword!==w._async;if(!j(i._default))return!1;const t=ud(),e=Cl(),r=e.type===i.name&&e.contextualKeyword===w._from;if(e.type===i.comma)return!0;if(r){const o=K.charCodeAt(Ob(t+4));return o===I.quotationMark||o===I.apostrophe}return!1}function pm(){R(i.comma)&&Fd()}function wl(){Xe(w._from)&&(St(),hm()),Ce()}function lE(){return we?p_():j(i.star)}function iE(){we?y_():pf()}function pf(){M(i.star),re(w._as)?aE():wl()}function aE(){B(),f.tokens[f.tokens.length-1].type=i._as,ce(),pm(),wl()}function cE(){return me&&Ub()||we&&f_()||f.type===i._var||f.type===i._const||f.type===i._let||f.type===i._function||f.type===i._class||re(w._async)||j(i.at)}function Fd(){let t=!0;for(M(i.braceL);!R(i.braceR)&&!f.error;){if(t)t=!1;else if(M(i.comma),R(i.braceR))break;sE()}}function sE(){if(me){VP();return}ce(),f.tokens[f.tokens.length-1].identifierRole=oe.ExportAccess,Xe(w._as)&&ce()}function fE(){const t=f.snapshot();return We(w._module),Xe(w._from)?re(w._from)?(f.restoreFromSnapshot(t),!0):(f.restoreFromSnapshot(t),!1):j(i.comma)?(f.restoreFromSnapshot(t),!1):(f.restoreFromSnapshot(t),!0)}function dE(){re(w._module)&&fE()&&B()}function ym(){if(me&&j(i.name)&&Me()===i.eq){af();return}if(me&&re(w._type)){const t=Cl();if(t.type===i.name&&t.contextualKeyword!==w._from){if(We(w._type),Me()===i.eq){af();return}}else(t.type===i.star||t.type===i.braceL)&&We(w._type)}j(i.string)||(dE(),pE(),We(w._from)),St(),hm(),Ce()}function uE(){return j(i.name)}function $p(){ra()}function pE(){we&&m_();let t=!0;if(!(uE()&&($p(),!R(i.comma)))){if(j(i.star)){B(),We(w._as),$p();return}for(M(i.braceL);!R(i.braceR)&&!f.error;){if(t)t=!1;else if(R(i.colon)&&pe("ES2015 named imports do not destructure. Use another statement for destructuring after the import."),M(i.comma),R(i.braceR))break;yE()}}}function yE(){if(me){WP();return}if(we){g_();return}ra(),re(w._as)&&(f.tokens[f.tokens.length-1].identifierRole=oe.ImportAccess,B(),ra())}function hm(){(j(i._with)||re(w._assert)&&!On())&&(B(),_d(!1,!1))}function hE(){return f.pos===0&&K.charCodeAt(0)===I.numberSign&&K.charCodeAt(1)===I.exclamationMark&&gb(2),mb(),N_()}class OE{constructor(e,r){this.tokens=e,this.scopes=r}}function bE(t,e,r,o){if(o&&r)throw new Error("Cannot combine flow and typescript plugins.");lw(t,e,r,o);const l=hE();if(f.error)throw tw(f.error);return l}function mE(t){let e=t.currentIndex(),r=0;const o=t.currentToken();do{const l=t.tokens[e];if(l.isOptionalChainStart&&r++,l.isOptionalChainEnd&&r--,r+=l.numNullishCoalesceStarts,r-=l.numNullishCoalesceEnds,l.contextualKeyword===w._await&&l.identifierRole==null&&l.scopeDepth===o.scopeDepth)return!0;e+=1}while(r>0&&e<t.tokens.length);return!1}class Xo{__init(){this.resultCode=""}__init2(){this.resultMappings=new Array(this.tokens.length)}__init3(){this.tokenIndex=0}constructor(e,r,o,l,a){this.code=e,this.tokens=r,this.isFlowEnabled=o,this.disableESTransforms=l,this.helperManager=a,Xo.prototype.__init.call(this),Xo.prototype.__init2.call(this),Xo.prototype.__init3.call(this)}snapshot(){return{resultCode:this.resultCode,tokenIndex:this.tokenIndex}}restoreToSnapshot(e){this.resultCode=e.resultCode,this.tokenIndex=e.tokenIndex}dangerouslyGetAndRemoveCodeSinceSnapshot(e){const r=this.resultCode.slice(e.resultCode.length);return this.resultCode=e.resultCode,r}reset(){this.resultCode="",this.resultMappings=new Array(this.tokens.length),this.tokenIndex=0}matchesContextualAtIndex(e,r){return this.matches1AtIndex(e,i.name)&&this.tokens[e].contextualKeyword===r}identifierNameAtIndex(e){return this.identifierNameForToken(this.tokens[e])}identifierNameAtRelativeIndex(e){return this.identifierNameForToken(this.tokenAtRelativeIndex(e))}identifierName(){return this.identifierNameForToken(this.currentToken())}identifierNameForToken(e){return this.code.slice(e.start,e.end)}rawCodeForToken(e){return this.code.slice(e.start,e.end)}stringValueAtIndex(e){return this.stringValueForToken(this.tokens[e])}stringValue(){return this.stringValueForToken(this.currentToken())}stringValueForToken(e){return this.code.slice(e.start+1,e.end-1)}matches1AtIndex(e,r){return this.tokens[e].type===r}matches2AtIndex(e,r,o){return this.tokens[e].type===r&&this.tokens[e+1].type===o}matches3AtIndex(e,r,o,l){return this.tokens[e].type===r&&this.tokens[e+1].type===o&&this.tokens[e+2].type===l}matches1(e){return this.tokens[this.tokenIndex].type===e}matches2(e,r){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===r}matches3(e,r,o){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===r&&this.tokens[this.tokenIndex+2].type===o}matches4(e,r,o,l){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===r&&this.tokens[this.tokenIndex+2].type===o&&this.tokens[this.tokenIndex+3].type===l}matches5(e,r,o,l,a){return this.tokens[this.tokenIndex].type===e&&this.tokens[this.tokenIndex+1].type===r&&this.tokens[this.tokenIndex+2].type===o&&this.tokens[this.tokenIndex+3].type===l&&this.tokens[this.tokenIndex+4].type===a}matchesContextual(e){return this.matchesContextualAtIndex(this.tokenIndex,e)}matchesContextIdAndLabel(e,r){return this.matches1(e)&&this.currentToken().contextId===r}previousWhitespaceAndComments(){let e=this.code.slice(this.tokenIndex>0?this.tokens[this.tokenIndex-1].end:0,this.tokenIndex<this.tokens.length?this.tokens[this.tokenIndex].start:this.code.length);return this.isFlowEnabled&&(e=e.replace(/@flow/g,"")),e}replaceToken(e){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=e,this.appendTokenSuffix(),this.tokenIndex++}replaceTokenTrimmingLeftWhitespace(e){this.resultCode+=this.previousWhitespaceAndComments().replace(/[^\r\n]/g,""),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=e,this.appendTokenSuffix(),this.tokenIndex++}removeInitialToken(){this.replaceToken("")}removeToken(){this.replaceTokenTrimmingLeftWhitespace("")}removeBalancedCode(){let e=0;for(;!this.isAtEnd();){if(this.matches1(i.braceL))e++;else if(this.matches1(i.braceR)){if(e===0)return;e--}this.removeToken()}}copyExpectedToken(e){if(this.tokens[this.tokenIndex].type!==e)throw new Error(`Expected token ${e}`);this.copyToken()}copyToken(){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}copyTokenWithPrefix(e){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultCode+=e,this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}appendTokenPrefix(){const e=this.currentToken();if((e.numNullishCoalesceStarts||e.isOptionalChainStart)&&(e.isAsyncOperation=mE(this)),!this.disableESTransforms){if(e.numNullishCoalesceStarts)for(let r=0;r<e.numNullishCoalesceStarts;r++)e.isAsyncOperation?(this.resultCode+="await ",this.resultCode+=this.helperManager.getHelperName("asyncNullishCoalesce")):this.resultCode+=this.helperManager.getHelperName("nullishCoalesce"),this.resultCode+="(";e.isOptionalChainStart&&(e.isAsyncOperation&&(this.resultCode+="await "),this.tokenIndex>0&&this.tokenAtRelativeIndex(-1).type===i._delete?e.isAsyncOperation?this.resultCode+=this.helperManager.getHelperName("asyncOptionalChainDelete"):this.resultCode+=this.helperManager.getHelperName("optionalChainDelete"):e.isAsyncOperation?this.resultCode+=this.helperManager.getHelperName("asyncOptionalChain"):this.resultCode+=this.helperManager.getHelperName("optionalChain"),this.resultCode+="([")}}appendTokenSuffix(){const e=this.currentToken();if(e.isOptionalChainEnd&&!this.disableESTransforms&&(this.resultCode+="])"),e.numNullishCoalesceEnds&&!this.disableESTransforms)for(let r=0;r<e.numNullishCoalesceEnds;r++)this.resultCode+="))"}appendCode(e){this.resultCode+=e}currentToken(){return this.tokens[this.tokenIndex]}currentTokenCode(){const e=this.currentToken();return this.code.slice(e.start,e.end)}tokenAtRelativeIndex(e){return this.tokens[this.tokenIndex+e]}currentIndex(){return this.tokenIndex}nextToken(){if(this.tokenIndex===this.tokens.length)throw new Error("Unexpectedly reached end of input.");this.tokenIndex++}previousToken(){this.tokenIndex--}finish(){if(this.tokenIndex!==this.tokens.length)throw new Error("Tried to finish processing tokens before reaching the end.");return this.resultCode+=this.previousWhitespaceAndComments(),{code:this.resultCode,mappings:this.resultMappings}}isAtEnd(){return this.tokenIndex===this.tokens.length}}function gE(t,e,r,o){const l=e.snapshot(),a=jE(e);let c=[];const s=[],d=[];let u=null;const h=[],p=[],y=e.currentToken().contextId;if(y==null)throw new Error("Expected non-null class context ID on class open-brace.");for(e.nextToken();!e.matchesContextIdAndLabel(i.braceR,y);)if(e.matchesContextual(w._constructor)&&!e.currentToken().isType)({constructorInitializerStatements:c,constructorInsertPos:u}=zp(e));else if(e.matches1(i.semi))o||p.push({start:e.currentIndex(),end:e.currentIndex()+1}),e.nextToken();else if(e.currentToken().isType)e.nextToken();else{const S=e.currentIndex();let g=!1,x=!1,P=!1;for(;sa(e.currentToken());)e.matches1(i._static)&&(g=!0),e.matches1(i.hash)&&(x=!0),(e.matches1(i._declare)||e.matches1(i._abstract))&&(P=!0),e.nextToken();if(g&&e.matches1(i.braceL)){ns(e,y);continue}if(x){ns(e,y);continue}if(e.matchesContextual(w._constructor)&&!e.currentToken().isType){({constructorInitializerStatements:c,constructorInsertPos:u}=zp(e));continue}const m=e.currentIndex();if(xE(e),e.matches1(i.lessThan)||e.matches1(i.parenL)){ns(e,y);continue}for(;e.currentToken().isType;)e.nextToken();if(e.matches1(i.eq)){const O=e.currentIndex(),b=e.currentToken().rhsEndIndex;if(b==null)throw new Error("Expected rhsEndIndex on class field assignment.");for(e.nextToken();e.currentIndex()<b;)t.processToken();let v;g?(v=r.claimFreeName("__initStatic"),d.push(v)):(v=r.claimFreeName("__init"),s.push(v)),h.push({initializerName:v,equalsIndex:O,start:m,end:e.currentIndex()})}else(!o||P)&&p.push({start:S,end:e.currentIndex()})}return e.restoreToSnapshot(l),o?{headerInfo:a,constructorInitializerStatements:c,instanceInitializerNames:[],staticInitializerNames:[],constructorInsertPos:u,fields:[],rangesToRemove:p}:{headerInfo:a,constructorInitializerStatements:c,instanceInitializerNames:s,staticInitializerNames:d,constructorInsertPos:u,fields:h,rangesToRemove:p}}function ns(t,e){for(t.nextToken();t.currentToken().contextId!==e;)t.nextToken();for(;sa(t.tokenAtRelativeIndex(-1));)t.previousToken()}function jE(t){const e=t.currentToken(),r=e.contextId;if(r==null)throw new Error("Expected context ID on class token.");const o=e.isExpression;if(o==null)throw new Error("Expected isExpression on class token.");let l=null,a=!1;for(t.nextToken(),t.matches1(i.name)&&(l=t.identifierName());!t.matchesContextIdAndLabel(i.braceL,r);)t.matches1(i._extends)&&!t.currentToken().isType&&(a=!0),t.nextToken();return{isExpression:o,className:l,hasSuperclass:a}}function zp(t){const e=[];t.nextToken();const r=t.currentToken().contextId;if(r==null)throw new Error("Expected context ID on open-paren starting constructor params.");for(;!t.matchesContextIdAndLabel(i.parenR,r);)if(t.currentToken().contextId===r){if(t.nextToken(),sa(t.currentToken())){for(t.nextToken();sa(t.currentToken());)t.nextToken();const a=t.currentToken();if(a.type!==i.name)throw new Error("Expected identifier after access modifiers in constructor arg.");const c=t.identifierNameForToken(a);e.push(`this.${c} = ${c}`)}}else t.nextToken();for(t.nextToken();t.currentToken().isType;)t.nextToken();let o=t.currentIndex(),l=!1;for(;!t.matchesContextIdAndLabel(i.braceR,r);){if(!l&&t.matches2(i._super,i.parenL)){t.nextToken();const a=t.currentToken().contextId;if(a==null)throw new Error("Expected a context ID on the super call");for(;!t.matchesContextIdAndLabel(i.parenR,a);)t.nextToken();o=t.currentIndex(),l=!0}t.nextToken()}return t.nextToken(),{constructorInitializerStatements:e,constructorInsertPos:o}}function sa(t){return[i._async,i._get,i._set,i.plus,i.minus,i._readonly,i._static,i._public,i._private,i._protected,i._override,i._abstract,i.star,i._declare,i.hash].includes(t.type)}function xE(t){if(t.matches1(i.bracketL)){const r=t.currentToken().contextId;if(r==null)throw new Error("Expected class context ID on computed name open bracket.");for(;!t.matchesContextIdAndLabel(i.bracketR,r);)t.nextToken();t.nextToken()}else t.nextToken()}function Om(t){if(t.removeInitialToken(),t.removeToken(),t.removeToken(),t.removeToken(),t.matches1(i.parenL))t.removeToken(),t.removeToken(),t.removeToken();else for(;t.matches1(i.dot);)t.removeToken(),t.removeToken()}const bm={typeDeclarations:new Set,valueDeclarations:new Set};function mm(t){const e=new Set,r=new Set;for(let o=0;o<t.tokens.length;o++){const l=t.tokens[o];l.type===i.name&&yb(l)&&(l.isType?e.add(t.identifierNameForToken(l)):r.add(t.identifierNameForToken(l)))}return{typeDeclarations:e,valueDeclarations:r}}function gm(t){let e=t.currentIndex();for(;!t.matches1AtIndex(e,i.braceR);)e++;return t.matchesContextualAtIndex(e+1,w._from)&&t.matches1AtIndex(e+2,i.string)}function ur(t){(t.matches2(i._with,i.braceL)||t.matches2(i.name,i.braceL)&&t.matchesContextual(w._assert))&&(t.removeToken(),t.removeToken(),t.removeBalancedCode(),t.removeToken())}function jm(t,e,r,o){if(!t||e)return!1;const l=r.currentToken();if(l.rhsEndIndex==null)throw new Error("Expected non-null rhsEndIndex on export token.");const a=l.rhsEndIndex-r.currentIndex();if(a!==3&&!(a===4&&r.matches1AtIndex(l.rhsEndIndex-1,i.semi)))return!1;const c=r.tokenAtRelativeIndex(2);if(c.type!==i.name)return!1;const s=r.identifierNameForToken(c);return o.typeDeclarations.has(s)&&!o.valueDeclarations.has(s)}class Ko extends et{__init(){this.hadExport=!1}__init2(){this.hadNamedExport=!1}__init3(){this.hadDefaultExport=!1}constructor(e,r,o,l,a,c,s,d,u,h,p,y){super(),this.rootTransformer=e,this.tokens=r,this.importProcessor=o,this.nameManager=l,this.helperManager=a,this.reactHotLoaderTransformer=c,this.enableLegacyBabel5ModuleInterop=s,this.enableLegacyTypeScriptModuleInterop=d,this.isTypeScriptTransformEnabled=u,this.isFlowTransformEnabled=h,this.preserveDynamicImport=p,this.keepUnusedImports=y,Ko.prototype.__init.call(this),Ko.prototype.__init2.call(this),Ko.prototype.__init3.call(this),this.declarationInfo=u?mm(r):bm}getPrefixCode(){let e="";return this.hadExport&&(e+='Object.defineProperty(exports, "__esModule", {value: true});'),e}getSuffixCode(){return this.enableLegacyBabel5ModuleInterop&&this.hadDefaultExport&&!this.hadNamedExport?`
module.exports = exports.default;
`:""}process(){return this.tokens.matches3(i._import,i.name,i.eq)?this.processImportEquals():this.tokens.matches1(i._import)?(this.processImport(),!0):this.tokens.matches2(i._export,i.eq)?(this.tokens.replaceToken("module.exports"),!0):this.tokens.matches1(i._export)&&!this.tokens.currentToken().isType?(this.hadExport=!0,this.processExport()):this.tokens.matches2(i.name,i.postIncDec)&&this.processPostIncDec()?!0:this.tokens.matches1(i.name)||this.tokens.matches1(i.jsxName)?this.processIdentifier():this.tokens.matches1(i.eq)?this.processAssignment():this.tokens.matches1(i.assign)?this.processComplexAssignment():this.tokens.matches1(i.preIncDec)?this.processPreIncDec():!1}processImportEquals(){const e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.importProcessor.shouldAutomaticallyElideImportedName(e)?Om(this.tokens):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(i._import,i.parenL)){if(this.preserveDynamicImport){this.tokens.copyToken();return}const r=this.enableLegacyTypeScriptModuleInterop?"":`${this.helperManager.getHelperName("interopRequireWildcard")}(`;this.tokens.replaceToken(`Promise.resolve().then(() => ${r}require`);const o=this.tokens.currentToken().contextId;if(o==null)throw new Error("Expected context ID on dynamic import invocation.");for(this.tokens.copyToken();!this.tokens.matchesContextIdAndLabel(i.parenR,o);)this.rootTransformer.processToken();this.tokens.replaceToken(r?")))":"))");return}if(this.removeImportAndDetectIfShouldElide())this.tokens.removeToken();else{const r=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(r)),this.tokens.appendCode(this.importProcessor.claimImportCode(r))}ur(this.tokens),this.tokens.matches1(i.semi)&&this.tokens.removeToken()}removeImportAndDetectIfShouldElide(){if(this.tokens.removeInitialToken(),this.tokens.matchesContextual(w._type)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,i.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._from))return this.removeRemainingImport(),!0;if(this.tokens.matches1(i.name)||this.tokens.matches1(i.star))return this.removeRemainingImport(),!1;if(this.tokens.matches1(i.string))return!1;let e=!1,r=!1;for(;!this.tokens.matches1(i.string);)(!e&&this.tokens.matches1(i.braceL)||this.tokens.matches1(i.comma))&&(this.tokens.removeToken(),this.tokens.matches1(i.braceR)||(r=!0),(this.tokens.matches2(i.name,i.comma)||this.tokens.matches2(i.name,i.braceR)||this.tokens.matches4(i.name,i.name,i.name,i.comma)||this.tokens.matches4(i.name,i.name,i.name,i.braceR))&&(e=!0)),this.tokens.removeToken();return this.keepUnusedImports?!1:this.isTypeScriptTransformEnabled?!e:this.isFlowTransformEnabled?r&&!e:!1}removeRemainingImport(){for(;!this.tokens.matches1(i.string);)this.tokens.removeToken()}processIdentifier(){const e=this.tokens.currentToken();if(e.shadowsGlobal)return!1;if(e.identifierRole===oe.ObjectShorthand)return this.processObjectShorthand();if(e.identifierRole!==oe.Access)return!1;const r=this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(e));if(!r)return!1;let o=this.tokens.currentIndex()+1;for(;o<this.tokens.tokens.length&&this.tokens.tokens[o].type===i.parenR;)o++;return this.tokens.tokens[o].type===i.parenL?this.tokens.tokenAtRelativeIndex(1).type===i.parenL&&this.tokens.tokenAtRelativeIndex(-1).type!==i._new?(this.tokens.replaceToken(`${r}.call(void 0, `),this.tokens.removeToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR)):this.tokens.replaceToken(`(0, ${r})`):this.tokens.replaceToken(r),!0}processObjectShorthand(){const e=this.tokens.identifierName(),r=this.importProcessor.getIdentifierReplacement(e);return r?(this.tokens.replaceToken(`${e}: ${r}`),!0):!1}processExport(){if(this.tokens.matches2(i._export,i._enum)||this.tokens.matches3(i._export,i._const,i._enum))return this.hadNamedExport=!0,!1;if(this.tokens.matches2(i._export,i._default))return this.tokens.matches3(i._export,i._default,i._enum)?(this.hadDefaultExport=!0,!1):(this.processExportDefault(),!0);if(this.tokens.matches2(i._export,i.braceL))return this.processExportBindings(),!0;if(this.tokens.matches2(i._export,i.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._type)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(i.braceL)){for(;!this.tokens.matches1(i.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(i._as)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(w._from)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,i.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),ur(this.tokens)),!0}if(this.hadNamedExport=!0,this.tokens.matches2(i._export,i._var)||this.tokens.matches2(i._export,i._let)||this.tokens.matches2(i._export,i._const))return this.processExportVar(),!0;if(this.tokens.matches2(i._export,i._function)||this.tokens.matches3(i._export,i.name,i._function))return this.processExportFunction(),!0;if(this.tokens.matches2(i._export,i._class)||this.tokens.matches3(i._export,i._abstract,i._class)||this.tokens.matches2(i._export,i.at))return this.processExportClass(),!0;if(this.tokens.matches2(i._export,i.star))return this.processExportStar(),!0;throw new Error("Unrecognized export syntax.")}processAssignment(){const e=this.tokens.currentIndex(),r=this.tokens.tokens[e-1];if(r.isType||r.type!==i.name||r.shadowsGlobal||e>=2&&this.tokens.matches1AtIndex(e-2,i.dot)||e>=2&&[i._var,i._let,i._const].includes(this.tokens.tokens[e-2].type))return!1;const o=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(r));return o?(this.tokens.copyToken(),this.tokens.appendCode(` ${o} =`),!0):!1}processComplexAssignment(){const e=this.tokens.currentIndex(),r=this.tokens.tokens[e-1];if(r.type!==i.name||r.shadowsGlobal||e>=2&&this.tokens.matches1AtIndex(e-2,i.dot))return!1;const o=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(r));return o?(this.tokens.appendCode(` = ${o}`),this.tokens.copyToken(),!0):!1}processPreIncDec(){const e=this.tokens.currentIndex(),r=this.tokens.tokens[e+1];if(r.type!==i.name||r.shadowsGlobal||e+2<this.tokens.tokens.length&&(this.tokens.matches1AtIndex(e+2,i.dot)||this.tokens.matches1AtIndex(e+2,i.bracketL)||this.tokens.matches1AtIndex(e+2,i.parenL)))return!1;const o=this.tokens.identifierNameForToken(r),l=this.importProcessor.resolveExportBinding(o);return l?(this.tokens.appendCode(`${l} = `),this.tokens.copyToken(),!0):!1}processPostIncDec(){const e=this.tokens.currentIndex(),r=this.tokens.tokens[e],o=this.tokens.tokens[e+1];if(r.type!==i.name||r.shadowsGlobal||e>=1&&this.tokens.matches1AtIndex(e-1,i.dot))return!1;const l=this.tokens.identifierNameForToken(r),a=this.importProcessor.resolveExportBinding(l);if(!a)return!1;const c=this.tokens.rawCodeForToken(o),s=this.importProcessor.getIdentifierReplacement(l)||l;if(c==="++")this.tokens.replaceToken(`(${s} = ${a} = ${s} + 1, ${s} - 1)`);else if(c==="--")this.tokens.replaceToken(`(${s} = ${a} = ${s} - 1, ${s} + 1)`);else throw new Error(`Unexpected operator: ${c}`);return this.tokens.removeToken(),!0}processExportDefault(){let e=!0;if(this.tokens.matches4(i._export,i._default,i._function,i.name)||this.tokens.matches5(i._export,i._default,i.name,i._function,i.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,w._async)){this.tokens.removeInitialToken(),this.tokens.removeToken();const r=this.processNamedFunction();this.tokens.appendCode(` exports.default = ${r};`)}else if(this.tokens.matches4(i._export,i._default,i._class,i.name)||this.tokens.matches5(i._export,i._default,i._abstract,i._class,i.name)||this.tokens.matches3(i._export,i._default,i.at)){this.tokens.removeInitialToken(),this.tokens.removeToken(),this.copyDecorators(),this.tokens.matches1(i._abstract)&&this.tokens.removeToken();const r=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.default = ${r};`)}else if(jm(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))e=!1,this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken();else if(this.reactHotLoaderTransformer){const r=this.nameManager.claimFreeName("_default");this.tokens.replaceToken(`let ${r}; exports.`),this.tokens.copyToken(),this.tokens.appendCode(` = ${r} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(r)}else this.tokens.replaceToken("exports."),this.tokens.copyToken(),this.tokens.appendCode(" =");e&&(this.hadDefaultExport=!0)}copyDecorators(){for(;this.tokens.matches1(i.at);)if(this.tokens.copyToken(),this.tokens.matches1(i.parenL))this.tokens.copyExpectedToken(i.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR);else{for(this.tokens.copyExpectedToken(i.name);this.tokens.matches1(i.dot);)this.tokens.copyExpectedToken(i.dot),this.tokens.copyExpectedToken(i.name);this.tokens.matches1(i.parenL)&&(this.tokens.copyExpectedToken(i.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR))}}processExportVar(){this.isSimpleExportVar()?this.processSimpleExportVar():this.processComplexExportVar()}isSimpleExportVar(){let e=this.tokens.currentIndex();if(e++,e++,!this.tokens.matches1AtIndex(e,i.name))return!1;for(e++;e<this.tokens.tokens.length&&this.tokens.tokens[e].isType;)e++;return!!this.tokens.matches1AtIndex(e,i.eq)}processSimpleExportVar(){this.tokens.removeInitialToken(),this.tokens.copyToken();const e=this.tokens.identifierName();for(;!this.tokens.matches1(i.eq);)this.rootTransformer.processToken();const r=this.tokens.currentToken().rhsEndIndex;if(r==null)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<r;)this.rootTransformer.processToken();this.tokens.appendCode(`; exports.${e} = ${e}`)}processComplexExportVar(){this.tokens.removeInitialToken(),this.tokens.removeToken();const e=this.tokens.matches1(i.braceL);e&&this.tokens.appendCode("(");let r=0;for(;;)if(this.tokens.matches1(i.braceL)||this.tokens.matches1(i.dollarBraceL)||this.tokens.matches1(i.bracketL))r++,this.tokens.copyToken();else if(this.tokens.matches1(i.braceR)||this.tokens.matches1(i.bracketR))r--,this.tokens.copyToken();else{if(r===0&&!this.tokens.matches1(i.name)&&!this.tokens.currentToken().isType)break;if(this.tokens.matches1(i.eq)){const o=this.tokens.currentToken().rhsEndIndex;if(o==null)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<o;)this.rootTransformer.processToken()}else{const o=this.tokens.currentToken();if(pb(o)){const l=this.tokens.identifierName();let a=this.importProcessor.getIdentifierReplacement(l);if(a===null)throw new Error(`Expected a replacement for ${l} in \`export var\` syntax.`);dw(o)&&(a=`${l}: ${a}`),this.tokens.replaceToken(a)}else this.rootTransformer.processToken()}}if(e){const o=this.tokens.currentToken().rhsEndIndex;if(o==null)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<o;)this.rootTransformer.processToken();this.tokens.appendCode(")")}}processExportFunction(){this.tokens.replaceToken("");const e=this.processNamedFunction();this.tokens.appendCode(` exports.${e} = ${e};`)}processNamedFunction(){if(this.tokens.matches1(i._function))this.tokens.copyToken();else if(this.tokens.matches2(i.name,i._function)){if(!this.tokens.matchesContextual(w._async))throw new Error("Expected async keyword in function export.");this.tokens.copyToken(),this.tokens.copyToken()}if(this.tokens.matches1(i.star)&&this.tokens.copyToken(),!this.tokens.matches1(i.name))throw new Error("Expected identifier for exported function name.");const e=this.tokens.identifierName();if(this.tokens.copyToken(),this.tokens.currentToken().isType)for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return this.tokens.copyExpectedToken(i.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR),this.rootTransformer.processPossibleTypeRange(),this.tokens.copyExpectedToken(i.braceL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.braceR),e}processExportClass(){this.tokens.removeInitialToken(),this.copyDecorators(),this.tokens.matches1(i._abstract)&&this.tokens.removeToken();const e=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.${e} = ${e};`)}processExportBindings(){this.tokens.removeInitialToken(),this.tokens.removeToken();const e=gm(this.tokens),r=[];for(;;){if(this.tokens.matches1(i.braceR)){this.tokens.removeToken();break}const o=gl(this.tokens);for(;this.tokens.currentIndex()<o.endIndex;)this.tokens.removeToken();if(!(o.isType||!e&&this.shouldElideExportedIdentifier(o.leftName))){const a=o.rightName;a==="default"?this.hadDefaultExport=!0:this.hadNamedExport=!0;const c=o.leftName,s=this.importProcessor.getIdentifierReplacement(c);r.push(`exports.${a} = ${s||c};`)}if(this.tokens.matches1(i.braceR)){this.tokens.removeToken();break}if(this.tokens.matches2(i.comma,i.braceR)){this.tokens.removeToken(),this.tokens.removeToken();break}else if(this.tokens.matches1(i.comma))this.tokens.removeToken();else throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`)}if(this.tokens.matchesContextual(w._from)){this.tokens.removeToken();const o=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(o)),ur(this.tokens)}else this.tokens.appendCode(r.join(" "));this.tokens.matches1(i.semi)&&this.tokens.removeToken()}processExportStar(){for(this.tokens.removeInitialToken();!this.tokens.matches1(i.string);)this.tokens.removeToken();const e=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(e)),ur(this.tokens),this.tokens.matches1(i.semi)&&this.tokens.removeToken()}shouldElideExportedIdentifier(e){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.declarationInfo.valueDeclarations.has(e)}}class vE extends et{constructor(e,r,o,l,a,c,s,d){super(),this.tokens=e,this.nameManager=r,this.helperManager=o,this.reactHotLoaderTransformer=l,this.isTypeScriptTransformEnabled=a,this.isFlowTransformEnabled=c,this.keepUnusedImports=s,this.nonTypeIdentifiers=a&&!s?Ib(e,d):new Set,this.declarationInfo=a&&!s?mm(e):bm,this.injectCreateRequireForImportRequire=!!d.injectCreateRequireForImportRequire}process(){if(this.tokens.matches3(i._import,i.name,i.eq))return this.processImportEquals();if(this.tokens.matches4(i._import,i.name,i.name,i.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._type)){this.tokens.removeInitialToken();for(let e=0;e<7;e++)this.tokens.removeToken();return!0}if(this.tokens.matches2(i._export,i.eq))return this.tokens.replaceToken("module.exports"),!0;if(this.tokens.matches5(i._export,i._import,i.name,i.name,i.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,w._type)){this.tokens.removeInitialToken();for(let e=0;e<8;e++)this.tokens.removeToken();return!0}if(this.tokens.matches1(i._import))return this.processImport();if(this.tokens.matches2(i._export,i._default))return this.processExportDefault();if(this.tokens.matches2(i._export,i.braceL))return this.processNamedExports();if(this.tokens.matches2(i._export,i.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._type)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(i.braceL)){for(;!this.tokens.matches1(i.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(i._as)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(w._from)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,i.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),ur(this.tokens)),!0}return!1}processImportEquals(){const e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.shouldAutomaticallyElideImportedName(e)?Om(this.tokens):this.injectCreateRequireForImportRequire?(this.tokens.replaceToken("const"),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.replaceToken(this.helperManager.getHelperName("require"))):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(i._import,i.parenL))return!1;const e=this.tokens.snapshot();if(this.removeImportTypeBindings()){for(this.tokens.restoreToSnapshot(e);!this.tokens.matches1(i.string);)this.tokens.removeToken();this.tokens.removeToken(),ur(this.tokens),this.tokens.matches1(i.semi)&&this.tokens.removeToken()}return!0}removeImportTypeBindings(){if(this.tokens.copyExpectedToken(i._import),this.tokens.matchesContextual(w._type)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,i.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,w._from))return!0;if(this.tokens.matches1(i.string))return this.tokens.copyToken(),!1;this.tokens.matchesContextual(w._module)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,w._from)&&this.tokens.copyToken();let e=!1,r=!1,o=!1;if(this.tokens.matches1(i.name)&&(this.shouldAutomaticallyElideImportedName(this.tokens.identifierName())?(this.tokens.removeToken(),this.tokens.matches1(i.comma)&&this.tokens.removeToken()):(e=!0,this.tokens.copyToken(),this.tokens.matches1(i.comma)&&(o=!0,this.tokens.removeToken()))),this.tokens.matches1(i.star))this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2))?(this.tokens.removeToken(),this.tokens.removeToken(),this.tokens.removeToken()):(o&&this.tokens.appendCode(","),e=!0,this.tokens.copyExpectedToken(i.star),this.tokens.copyExpectedToken(i.name),this.tokens.copyExpectedToken(i.name));else if(this.tokens.matches1(i.braceL)){for(o&&this.tokens.appendCode(","),this.tokens.copyToken();!this.tokens.matches1(i.braceR);){r=!0;const l=gl(this.tokens);if(l.isType||this.shouldAutomaticallyElideImportedName(l.rightName)){for(;this.tokens.currentIndex()<l.endIndex;)this.tokens.removeToken();this.tokens.matches1(i.comma)&&this.tokens.removeToken()}else{for(e=!0;this.tokens.currentIndex()<l.endIndex;)this.tokens.copyToken();this.tokens.matches1(i.comma)&&this.tokens.copyToken()}}this.tokens.copyExpectedToken(i.braceR)}return this.keepUnusedImports?!1:this.isTypeScriptTransformEnabled?!e:this.isFlowTransformEnabled?r&&!e:!1}shouldAutomaticallyElideImportedName(e){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(e)}processExportDefault(){if(jm(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))return this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken(),!0;if(!(this.tokens.matches4(i._export,i._default,i._function,i.name)||this.tokens.matches5(i._export,i._default,i.name,i._function,i.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,w._async)||this.tokens.matches4(i._export,i._default,i._class,i.name)||this.tokens.matches5(i._export,i._default,i._abstract,i._class,i.name))&&this.reactHotLoaderTransformer){const r=this.nameManager.claimFreeName("_default");return this.tokens.replaceToken(`let ${r}; export`),this.tokens.copyToken(),this.tokens.appendCode(` ${r} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(r),!0}return!1}processNamedExports(){if(!this.isTypeScriptTransformEnabled)return!1;this.tokens.copyExpectedToken(i._export),this.tokens.copyExpectedToken(i.braceL);const e=gm(this.tokens);let r=!1;for(;!this.tokens.matches1(i.braceR);){const o=gl(this.tokens);if(o.isType||!e&&this.shouldElideExportedName(o.leftName)){for(;this.tokens.currentIndex()<o.endIndex;)this.tokens.removeToken();this.tokens.matches1(i.comma)&&this.tokens.removeToken()}else{for(r=!0;this.tokens.currentIndex()<o.endIndex;)this.tokens.copyToken();this.tokens.matches1(i.comma)&&this.tokens.copyToken()}}return this.tokens.copyExpectedToken(i.braceR),!this.keepUnusedImports&&e&&!r&&(this.tokens.removeToken(),this.tokens.removeToken(),ur(this.tokens)),!0}shouldElideExportedName(e){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&this.declarationInfo.typeDeclarations.has(e)&&!this.declarationInfo.valueDeclarations.has(e)}}class wE extends et{constructor(e,r,o){super(),this.rootTransformer=e,this.tokens=r,this.isImportsTransformEnabled=o}process(){return this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange()?!0:this.tokens.matches1(i._enum)?(this.processEnum(),!0):this.tokens.matches2(i._export,i._enum)?(this.processNamedExportEnum(),!0):this.tokens.matches3(i._export,i._default,i._enum)?(this.processDefaultExportEnum(),!0):!1}processNamedExportEnum(){if(this.isImportsTransformEnabled){this.tokens.removeInitialToken();const e=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.tokens.appendCode(` exports.${e} = ${e};`)}else this.tokens.copyToken(),this.processEnum()}processDefaultExportEnum(){this.tokens.removeInitialToken(),this.tokens.removeToken();const e=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.isImportsTransformEnabled?this.tokens.appendCode(` exports.default = ${e};`):this.tokens.appendCode(` export default ${e};`)}processEnum(){this.tokens.replaceToken("const"),this.tokens.copyExpectedToken(i.name);let e=!1;this.tokens.matchesContextual(w._of)&&(this.tokens.removeToken(),e=this.tokens.matchesContextual(w._symbol),this.tokens.removeToken());const r=this.tokens.matches3(i.braceL,i.name,i.eq);this.tokens.appendCode(' = require("flow-enums-runtime")');const o=!e&&!r;for(this.tokens.replaceTokenTrimmingLeftWhitespace(o?".Mirrored([":"({");!this.tokens.matches1(i.braceR);){if(this.tokens.matches1(i.ellipsis)){this.tokens.removeToken();break}this.processEnumElement(e,r),this.tokens.matches1(i.comma)&&this.tokens.copyToken()}this.tokens.replaceToken(o?"]);":"});")}processEnumElement(e,r){if(e){const o=this.tokens.identifierName();this.tokens.copyToken(),this.tokens.appendCode(`: Symbol("${o}")`)}else r?(this.tokens.copyToken(),this.tokens.replaceTokenTrimmingLeftWhitespace(":"),this.tokens.copyToken()):this.tokens.replaceToken(`"${this.tokens.identifierName()}"`)}}function PE(t){let e,r=t[0],o=1;for(;o<t.length;){const l=t[o],a=t[o+1];if(o+=2,(l==="optionalAccess"||l==="optionalCall")&&r==null)return;l==="access"||l==="optionalAccess"?(e=r,r=a(r)):(l==="call"||l==="optionalCall")&&(r=a((...c)=>r.call(e,...c)),e=void 0)}return r}const ii="jest",SE=["mock","unmock","enableAutomock","disableAutomock"];class Md extends et{__init(){this.hoistedFunctionNames=[]}constructor(e,r,o,l){super(),this.rootTransformer=e,this.tokens=r,this.nameManager=o,this.importProcessor=l,Md.prototype.__init.call(this)}process(){return this.tokens.currentToken().scopeDepth===0&&this.tokens.matches4(i.name,i.dot,i.name,i.parenL)&&this.tokens.identifierName()===ii?PE([this,"access",e=>e.importProcessor,"optionalAccess",e=>e.getGlobalNames,"call",e=>e(),"optionalAccess",e=>e.has,"call",e=>e(ii)])?!1:this.extractHoistedCalls():!1}getHoistedCode(){return this.hoistedFunctionNames.length>0?this.hoistedFunctionNames.map(e=>`${e}();`).join(""):""}extractHoistedCalls(){this.tokens.removeToken();let e=!1;for(;this.tokens.matches3(i.dot,i.name,i.parenL);){const r=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);if(SE.includes(r)){const l=this.nameManager.claimFreeName("__jestHoist");this.hoistedFunctionNames.push(l),this.tokens.replaceToken(`function ${l}(){${ii}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR),this.tokens.appendCode(";}"),e=!1}else e?this.tokens.copyToken():this.tokens.replaceToken(`${ii}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.parenR),e=!0}return!0}}class _E extends et{constructor(e){super(),this.tokens=e}process(){if(this.tokens.matches1(i.num)){const e=this.tokens.currentTokenCode();if(e.includes("_"))return this.tokens.replaceToken(e.replace(/_/g,"")),!0}return!1}}class EE extends et{constructor(e,r){super(),this.tokens=e,this.nameManager=r}process(){return this.tokens.matches2(i._catch,i.braceL)?(this.tokens.copyToken(),this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`),!0):!1}}class IE extends et{constructor(e,r){super(),this.tokens=e,this.nameManager=r}process(){if(this.tokens.matches1(i.nullishCoalescing)){const o=this.tokens.currentToken();return this.tokens.tokens[o.nullishStartIndex].isAsyncOperation?this.tokens.replaceTokenTrimmingLeftWhitespace(", async () => ("):this.tokens.replaceTokenTrimmingLeftWhitespace(", () => ("),!0}if(this.tokens.matches1(i._delete)&&this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)return this.tokens.removeInitialToken(),!0;const r=this.tokens.currentToken().subscriptStartIndex;if(r!=null&&this.tokens.tokens[r].isOptionalChainStart&&this.tokens.tokenAtRelativeIndex(-1).type!==i._super){const o=this.nameManager.claimFreeName("_");let l;if(r>0&&this.tokens.matches1AtIndex(r-1,i._delete)&&this.isLastSubscriptInChain()?l=`${o} => delete ${o}`:l=`${o} => ${o}`,this.tokens.tokens[r].isAsyncOperation&&(l=`async ${l}`),this.tokens.matches2(i.questionDot,i.parenL)||this.tokens.matches2(i.questionDot,i.lessThan))this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${l}`);else if(this.tokens.matches2(i.questionDot,i.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${l}`);else if(this.tokens.matches1(i.questionDot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${l}.`);else if(this.tokens.matches1(i.dot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${l}.`);else if(this.tokens.matches1(i.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${l}[`);else if(this.tokens.matches1(i.parenL))this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${l}(`);else throw new Error("Unexpected subscript operator in optional chain.");return!0}return!1}isLastSubscriptInChain(){let e=0;for(let r=this.tokens.currentIndex()+1;;r++){if(r>=this.tokens.tokens.length)throw new Error("Reached the end of the code while finding the end of the access chain.");if(this.tokens.tokens[r].isOptionalChainStart?e++:this.tokens.tokens[r].isOptionalChainEnd&&e--,e<0)return!0;if(e===0&&this.tokens.tokens[r].subscriptStartIndex!=null)return!1}}justSkippedSuper(){let e=0,r=this.tokens.currentIndex()-1;for(;;){if(r<0)throw new Error("Reached the start of the code while finding the start of the access chain.");if(this.tokens.tokens[r].isOptionalChainStart?e--:this.tokens.tokens[r].isOptionalChainEnd&&e++,e<0)return!1;if(e===0&&this.tokens.tokens[r].subscriptStartIndex!=null)return this.tokens.tokens[r-1].type===i._super;r--}}}class kE extends et{constructor(e,r,o,l){super(),this.rootTransformer=e,this.tokens=r,this.importProcessor=o,this.options=l}process(){const e=this.tokens.currentIndex();if(this.tokens.identifierName()==="createReactClass"){const r=this.importProcessor&&this.importProcessor.getIdentifierReplacement("createReactClass");return r?this.tokens.replaceToken(`(0, ${r})`):this.tokens.copyToken(),this.tryProcessCreateClassCall(e),!0}if(this.tokens.matches3(i.name,i.dot,i.name)&&this.tokens.identifierName()==="React"&&this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+2)==="createClass"){const r=this.importProcessor&&this.importProcessor.getIdentifierReplacement("React")||"React";return r?(this.tokens.replaceToken(r),this.tokens.copyToken(),this.tokens.copyToken()):(this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.copyToken()),this.tryProcessCreateClassCall(e),!0}return!1}tryProcessCreateClassCall(e){const r=this.findDisplayName(e);r&&this.classNeedsDisplayName()&&(this.tokens.copyExpectedToken(i.parenL),this.tokens.copyExpectedToken(i.braceL),this.tokens.appendCode(`displayName: '${r}',`),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(i.braceR),this.tokens.copyExpectedToken(i.parenR))}findDisplayName(e){return e<2?null:this.tokens.matches2AtIndex(e-2,i.name,i.eq)?this.tokens.identifierNameAtIndex(e-2):e>=2&&this.tokens.tokens[e-2].identifierRole===oe.ObjectKey?this.tokens.identifierNameAtIndex(e-2):this.tokens.matches2AtIndex(e-2,i._export,i._default)?this.getDisplayNameFromFilename():null}getDisplayNameFromFilename(){const r=(this.options.filePath||"unknown").split("/"),o=r[r.length-1],l=o.lastIndexOf("."),a=l===-1?o:o.slice(0,l);return a==="index"&&r[r.length-2]?r[r.length-2]:a}classNeedsDisplayName(){let e=this.tokens.currentIndex();if(!this.tokens.matches2(i.parenL,i.braceL))return!1;const r=e+1,o=this.tokens.tokens[r].contextId;if(o==null)throw new Error("Expected non-null context ID on object open-brace.");for(;e<this.tokens.tokens.length;e++){const l=this.tokens.tokens[e];if(l.type===i.braceR&&l.contextId===o){e++;break}if(this.tokens.identifierNameAtIndex(e)==="displayName"&&this.tokens.tokens[e].identifierRole===oe.ObjectKey&&l.contextId===o)return!1}if(e===this.tokens.tokens.length)throw new Error("Unexpected end of input when processing React class.");return this.tokens.matches1AtIndex(e,i.parenR)||this.tokens.matches2AtIndex(e,i.comma,i.parenR)}}class Dd extends et{__init(){this.extractedDefaultExportName=null}constructor(e,r){super(),this.tokens=e,this.filePath=r,Dd.prototype.__init.call(this)}setExtractedDefaultExportName(e){this.extractedDefaultExportName=e}getPrefixCode(){return`
      (function () {
        var enterModule = require('react-hot-loader').enterModule;
        enterModule && enterModule(module);
      })();`.replace(/\s+/g," ").trim()}getSuffixCode(){const e=new Set;for(const o of this.tokens.tokens)!o.isType&&yb(o)&&o.identifierRole!==oe.ImportDeclaration&&e.add(this.tokens.identifierNameForToken(o));const r=Array.from(e).map(o=>({variableName:o,uniqueLocalName:o}));return this.extractedDefaultExportName&&r.push({variableName:this.extractedDefaultExportName,uniqueLocalName:"default"}),`
;(function () {
  var reactHotLoader = require('react-hot-loader').default;
  var leaveModule = require('react-hot-loader').leaveModule;
  if (!reactHotLoader) {
    return;
  }
${r.map(({variableName:o,uniqueLocalName:l})=>`  reactHotLoader.register(${o}, "${l}", ${JSON.stringify(this.filePath||"")});`).join(`
`)}
  leaveModule(module);
})();`}process(){return!1}}const NE=new Set(["break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield","enum","implements","interface","let","package","private","protected","public","static","await","false","null","true"]);function Up(t){if(t.length===0||!Nl[t.charCodeAt(0)])return!1;for(let e=1;e<t.length;e++)if(!Zn[t.charCodeAt(e)])return!1;return!NE.has(t)}class CE extends et{constructor(e,r,o){super(),this.rootTransformer=e,this.tokens=r,this.isImportsTransformEnabled=o}process(){return this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange()?!0:this.tokens.matches1(i._public)||this.tokens.matches1(i._protected)||this.tokens.matches1(i._private)||this.tokens.matches1(i._abstract)||this.tokens.matches1(i._readonly)||this.tokens.matches1(i._override)||this.tokens.matches1(i.nonNullAssertion)?(this.tokens.removeInitialToken(),!0):this.tokens.matches1(i._enum)||this.tokens.matches2(i._const,i._enum)?(this.processEnum(),!0):this.tokens.matches2(i._export,i._enum)||this.tokens.matches3(i._export,i._const,i._enum)?(this.processEnum(!0),!0):!1}processEnum(e=!1){for(this.tokens.removeInitialToken();this.tokens.matches1(i._const)||this.tokens.matches1(i._enum);)this.tokens.removeToken();const r=this.tokens.identifierName();this.tokens.removeToken(),e&&!this.isImportsTransformEnabled&&this.tokens.appendCode("export "),this.tokens.appendCode(`var ${r}; (function (${r})`),this.tokens.copyExpectedToken(i.braceL),this.processEnumBody(r),this.tokens.copyExpectedToken(i.braceR),e&&this.isImportsTransformEnabled?this.tokens.appendCode(`)(${r} || (exports.${r} = ${r} = {}));`):this.tokens.appendCode(`)(${r} || (${r} = {}));`)}processEnumBody(e){let r=null;for(;!this.tokens.matches1(i.braceR);){const{nameStringCode:o,variableName:l}=this.extractEnumKeyInfo(this.tokens.currentToken());this.tokens.removeInitialToken(),this.tokens.matches3(i.eq,i.string,i.comma)||this.tokens.matches3(i.eq,i.string,i.braceR)?this.processStringLiteralEnumMember(e,o,l):this.tokens.matches1(i.eq)?this.processExplicitValueEnumMember(e,o,l):this.processImplicitValueEnumMember(e,o,l,r),this.tokens.matches1(i.comma)&&this.tokens.removeToken(),l!=null?r=l:r=`${e}[${o}]`}}extractEnumKeyInfo(e){if(e.type===i.name){const r=this.tokens.identifierNameForToken(e);return{nameStringCode:`"${r}"`,variableName:Up(r)?r:null}}else if(e.type===i.string){const r=this.tokens.stringValueForToken(e);return{nameStringCode:this.tokens.code.slice(e.start,e.end),variableName:Up(r)?r:null}}else throw new Error("Expected name or string at beginning of enum element.")}processStringLiteralEnumMember(e,r,o){o!=null?(this.tokens.appendCode(`const ${o}`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(`; ${e}[${r}] = ${o};`)):(this.tokens.appendCode(`${e}[${r}]`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(";"))}processExplicitValueEnumMember(e,r,o){const l=this.tokens.currentToken().rhsEndIndex;if(l==null)throw new Error("Expected rhsEndIndex on enum assign.");if(o!=null){for(this.tokens.appendCode(`const ${o}`),this.tokens.copyToken();this.tokens.currentIndex()<l;)this.rootTransformer.processToken();this.tokens.appendCode(`; ${e}[${e}[${r}] = ${o}] = ${r};`)}else{for(this.tokens.appendCode(`${e}[${e}[${r}]`),this.tokens.copyToken();this.tokens.currentIndex()<l;)this.rootTransformer.processToken();this.tokens.appendCode(`] = ${r};`)}}processImplicitValueEnumMember(e,r,o,l){let a=l!=null?`${l} + 1`:"0";o!=null&&(this.tokens.appendCode(`const ${o} = ${a}; `),a=o),this.tokens.appendCode(`${e}[${e}[${r}] = ${a}] = ${r};`)}}class fa{__init(){this.transformers=[]}__init2(){this.generatedVariables=[]}constructor(e,r,o,l){fa.prototype.__init.call(this),fa.prototype.__init2.call(this),this.nameManager=e.nameManager,this.helperManager=e.helperManager;const{tokenProcessor:a,importProcessor:c}=e;this.tokens=a,this.isImportsTransformEnabled=r.includes("imports"),this.isReactHotLoaderTransformEnabled=r.includes("react-hot-loader"),this.disableESTransforms=!!l.disableESTransforms,l.disableESTransforms||(this.transformers.push(new IE(a,this.nameManager)),this.transformers.push(new _E(a)),this.transformers.push(new EE(a,this.nameManager))),r.includes("jsx")&&(l.jsxRuntime!=="preserve"&&this.transformers.push(new ar(this,a,c,this.nameManager,l)),this.transformers.push(new kE(this,a,c,l)));let s=null;if(r.includes("react-hot-loader")){if(!l.filePath)throw new Error("filePath is required when using the react-hot-loader transform.");s=new Dd(a,l.filePath),this.transformers.push(s)}if(r.includes("imports")){if(c===null)throw new Error("Expected non-null importProcessor with imports transform enabled.");this.transformers.push(new Ko(this,a,c,this.nameManager,this.helperManager,s,o,!!l.enableLegacyTypeScriptModuleInterop,r.includes("typescript"),r.includes("flow"),!!l.preserveDynamicImport,!!l.keepUnusedImports))}else this.transformers.push(new vE(a,this.nameManager,this.helperManager,s,r.includes("typescript"),r.includes("flow"),!!l.keepUnusedImports,l));r.includes("flow")&&this.transformers.push(new wE(this,a,r.includes("imports"))),r.includes("typescript")&&this.transformers.push(new CE(this,a,r.includes("imports"))),r.includes("jest")&&this.transformers.push(new Md(this,a,this.nameManager,c))}transform(){this.tokens.reset(),this.processBalancedCode();let r=this.isImportsTransformEnabled?'"use strict";':"";for(const c of this.transformers)r+=c.getPrefixCode();r+=this.helperManager.emitHelpers(),r+=this.generatedVariables.map(c=>` var ${c};`).join("");for(const c of this.transformers)r+=c.getHoistedCode();let o="";for(const c of this.transformers)o+=c.getSuffixCode();const l=this.tokens.finish();let{code:a}=l;if(a.startsWith("#!")){let c=a.indexOf(`
`);return c===-1&&(c=a.length,a+=`
`),{code:a.slice(0,c+1)+r+a.slice(c+1)+o,mappings:this.shiftMappings(l.mappings,r.length)}}else return{code:r+a+o,mappings:this.shiftMappings(l.mappings,r.length)}}processBalancedCode(){let e=0,r=0;for(;!this.tokens.isAtEnd();){if(this.tokens.matches1(i.braceL)||this.tokens.matches1(i.dollarBraceL))e++;else if(this.tokens.matches1(i.braceR)){if(e===0)return;e--}if(this.tokens.matches1(i.parenL))r++;else if(this.tokens.matches1(i.parenR)){if(r===0)return;r--}this.processToken()}}processToken(){if(this.tokens.matches1(i._class)){this.processClass();return}for(const e of this.transformers)if(e.process())return;this.tokens.copyToken()}processNamedClass(){if(!this.tokens.matches2(i._class,i.name))throw new Error("Expected identifier for exported class name.");const e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.processClass(),e}processClass(){const e=gE(this,this.tokens,this.nameManager,this.disableESTransforms),r=(e.headerInfo.isExpression||!e.headerInfo.className)&&e.staticInitializerNames.length+e.instanceInitializerNames.length>0;let o=e.headerInfo.className;r&&(o=this.nameManager.claimFreeName("_class"),this.generatedVariables.push(o),this.tokens.appendCode(` (${o} =`));const a=this.tokens.currentToken().contextId;if(a==null)throw new Error("Expected class to have a context ID.");for(this.tokens.copyExpectedToken(i._class);!this.tokens.matchesContextIdAndLabel(i.braceL,a);)this.processToken();this.processClassBody(e,o);const c=e.staticInitializerNames.map(s=>`${o}.${s}()`);r?this.tokens.appendCode(`, ${c.map(s=>`${s}, `).join("")}${o})`):e.staticInitializerNames.length>0&&this.tokens.appendCode(` ${c.map(s=>`${s};`).join(" ")}`)}processClassBody(e,r){const{headerInfo:o,constructorInsertPos:l,constructorInitializerStatements:a,fields:c,instanceInitializerNames:s,rangesToRemove:d}=e;let u=0,h=0;const p=this.tokens.currentToken().contextId;if(p==null)throw new Error("Expected non-null context ID on class.");this.tokens.copyExpectedToken(i.braceL),this.isReactHotLoaderTransformEnabled&&this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");const y=a.length+s.length>0;if(l===null&&y){const S=this.makeConstructorInitCode(a,s,r);if(o.hasSuperclass){const g=this.nameManager.claimFreeName("args");this.tokens.appendCode(`constructor(...${g}) { super(...${g}); ${S}; }`)}else this.tokens.appendCode(`constructor() { ${S}; }`)}for(;!this.tokens.matchesContextIdAndLabel(i.braceR,p);)if(u<c.length&&this.tokens.currentIndex()===c[u].start){let S=!1;for(this.tokens.matches1(i.bracketL)?this.tokens.copyTokenWithPrefix(`${c[u].initializerName}() {this`):this.tokens.matches1(i.string)||this.tokens.matches1(i.num)?(this.tokens.copyTokenWithPrefix(`${c[u].initializerName}() {this[`),S=!0):this.tokens.copyTokenWithPrefix(`${c[u].initializerName}() {this.`);this.tokens.currentIndex()<c[u].end;)S&&this.tokens.currentIndex()===c[u].equalsIndex&&this.tokens.appendCode("]"),this.processToken();this.tokens.appendCode("}"),u++}else if(h<d.length&&this.tokens.currentIndex()>=d[h].start){for(this.tokens.currentIndex()<d[h].end&&this.tokens.removeInitialToken();this.tokens.currentIndex()<d[h].end;)this.tokens.removeToken();h++}else this.tokens.currentIndex()===l?(this.tokens.copyToken(),y&&this.tokens.appendCode(`;${this.makeConstructorInitCode(a,s,r)};`),this.processToken()):this.processToken();this.tokens.copyExpectedToken(i.braceR)}makeConstructorInitCode(e,r,o){return[...e,...r.map(l=>`${o}.prototype.${l}.call(this)`)].join(";")}processPossibleArrowParamEnd(){if(this.tokens.matches2(i.parenR,i.colon)&&this.tokens.tokenAtRelativeIndex(1).isType){let e=this.tokens.currentIndex()+1;for(;this.tokens.tokens[e].isType;)e++;if(this.tokens.matches1AtIndex(e,i.arrow)){for(this.tokens.removeInitialToken();this.tokens.currentIndex()<e;)this.tokens.removeToken();return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"),!0}}return!1}processPossibleAsyncArrowWithTypeParams(){if(!this.tokens.matchesContextual(w._async)&&!this.tokens.matches1(i._async))return!1;const e=this.tokens.tokenAtRelativeIndex(1);if(e.type!==i.lessThan||!e.isType)return!1;let r=this.tokens.currentIndex()+1;for(;this.tokens.tokens[r].isType;)r++;if(this.tokens.matches1AtIndex(r,i.parenL)){for(this.tokens.replaceToken("async ("),this.tokens.removeInitialToken();this.tokens.currentIndex()<r;)this.tokens.removeToken();return this.tokens.removeToken(),this.processBalancedCode(),this.processToken(),!0}return!1}processPossibleTypeRange(){if(this.tokens.currentToken().isType){for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return!0}return!1}shiftMappings(e,r){for(let o=0;o<e.length;o++){const l=e[o];l!==void 0&&(e[o]=l+r)}return e}}var TE={};(function(t){t.__esModule=!0,t.LinesAndColumns=void 0;var e=`
`,r="\r",o=function(){function l(a){this.string=a;for(var c=[0],s=0;s<a.length;)switch(a[s]){case e:s+=e.length,c.push(s);break;case r:s+=r.length,a[s]===e&&(s+=e.length),c.push(s);break;default:s++;break}this.offsets=c}return l.prototype.locationForIndex=function(a){if(a<0||a>this.string.length)return null;for(var c=0,s=this.offsets;s[c+1]<=a;)c++;var d=a-s[c];return{line:c,column:d}},l.prototype.indexForLocation=function(a){var c=a.line,s=a.column;return c<0||c>=this.offsets.length||s<0||s>this.lengthOfLine(c)?null:this.offsets[c]+s},l.prototype.lengthOfLine=function(a){var c=this.offsets[a],s=a===this.offsets.length-1?this.string.length:this.offsets[a+1];return s-c},l}();t.LinesAndColumns=o,t.default=o})(TE);function AE(t){const e=new Set;for(let r=0;r<t.tokens.length;r++)t.matches1AtIndex(r,i._import)&&!t.matches3AtIndex(r,i._import,i.name,i.eq)&&RE(t,r,e);return e}function RE(t,e,r){e++,!t.matches1AtIndex(e,i.parenL)&&(t.matches1AtIndex(e,i.name)&&(r.add(t.identifierNameAtIndex(e)),e++,t.matches1AtIndex(e,i.comma)&&e++),t.matches1AtIndex(e,i.star)&&(e+=2,r.add(t.identifierNameAtIndex(e)),e++),t.matches1AtIndex(e,i.braceL)&&(e++,LE(t,e,r)))}function LE(t,e,r){for(;;){if(t.matches1AtIndex(e,i.braceR))return;const o=gl(t,e);if(e=o.endIndex,o.isType||r.add(o.rightName),t.matches2AtIndex(e,i.comma,i.braceR))return;if(t.matches1AtIndex(e,i.braceR))return;if(t.matches1AtIndex(e,i.comma))e++;else throw new Error(`Unexpected token: ${JSON.stringify(t.tokens[e])}`)}}function FE(t,e){Yw(e);try{const r=ME(t,e),l=new fa(r,e.transforms,!!e.enableLegacyBabel5ModuleInterop,e).transform();let a={code:l.code};if(e.sourceMapOptions){if(!e.filePath)throw new Error("filePath must be specified when generating a source map.");a={...a,sourceMap:Dw(l,e.filePath,e.sourceMapOptions,t,r.tokenProcessor.tokens)}}return a}catch(r){throw e.filePath&&(r.message=`Error transforming ${e.filePath}: ${r.message}`),r}}function ME(t,e){const r=e.transforms.includes("jsx"),o=e.transforms.includes("typescript"),l=e.transforms.includes("flow"),a=e.disableESTransforms===!0,c=bE(t,r,o,l),s=c.tokens,d=c.scopes,u=new pd(t,s),h=new ta(u),p=new Xo(t,s,l,a,h),y=!!e.enableLegacyTypeScriptModuleInterop;let S=null;return e.transforms.includes("imports")?(S=new cr(u,p,y,e,e.transforms.includes("typescript"),!!e.keepUnusedImports,h),S.preprocessTokens(),Ip(p,d,S.getGlobalNames()),e.transforms.includes("typescript")&&!e.keepUnusedImports&&S.pruneTypeOnlyImports()):e.transforms.includes("typescript")&&!e.keepUnusedImports&&Ip(p,d,AE(p)),{tokenProcessor:p,scopes:d,nameManager:u,importProcessor:S,helperManager:h}}var DE=Object.defineProperty,BE=Object.defineProperties,$E=Object.getOwnPropertyDescriptors,da=Object.getOwnPropertySymbols,xm=Object.prototype.hasOwnProperty,vm=Object.prototype.propertyIsEnumerable,Hp=(t,e,r)=>e in t?DE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,at=(t,e)=>{for(var r in e||(e={}))xm.call(e,r)&&Hp(t,r,e[r]);if(da)for(var r of da(e))vm.call(e,r)&&Hp(t,r,e[r]);return t},Fl=(t,e)=>BE(t,$E(e)),zE=(t,e)=>{var r={};for(var o in t)xm.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(t!=null&&da)for(var o of da(t))e.indexOf(o)<0&&vm.call(t,o)&&(r[o]=t[o]);return r},UE=(t,e,r)=>new Promise((o,l)=>{var a=d=>{try{s(r.next(d))}catch(u){l(u)}},c=d=>{try{s(r.throw(d))}catch(u){l(u)}},s=d=>d.done?o(d.value):Promise.resolve(d.value).then(a,c);s((r=r.apply(t,e)).next())}),HE=t=>{const{tabMode:e="indentation"}=t,r=U.useRef(null),[o,l]=U.useState(t.code||""),{theme:a}=t;return U.useEffect(()=>{l(t.code)},[t.code]),Z0(r,c=>l(c.slice(0,-1)),{disabled:t.disabled,indentation:e==="indentation"?2:void 0}),U.useEffect(()=>{t.onChange&&t.onChange(o)},[o]),n.jsx("div",{className:t.className,style:t.style,children:n.jsx(ob,{code:o,theme:t.theme||tb.nightOwl,language:t.language,children:({className:c,tokens:s,getLineProps:d,getTokenProps:u,style:h})=>n.jsx("pre",{className:c,style:at(at({margin:0,outline:"none",padding:10,fontFamily:"inherit"},a&&typeof a.plain=="object"?a.plain:{}),h),ref:r,spellCheck:"false",children:s.map((p,y)=>n.jsxs("span",Fl(at({},d({line:p})),{children:[p.filter(S=>!S.empty).map((S,g)=>n.jsx("span",at({},u({token:S})),`token-${g}`)),`
`]}),`line-${y}`))})})})},qE=HE,WE=U.createContext({}),Ua=WE,VE=["jsx","imports"];function yf(t={}){const e=Array.isArray(t.transforms)?t.transforms.filter(Boolean):VE;return r=>FE(r,{transforms:e}).code}var GE=(t,e)=>class extends U.Component{componentDidCatch(o){e(o)}render(){return typeof t=="function"?n.jsx(t,{}):Xt.isValidElement(t)?t:null}},wm=GE,JE=(t,e)=>{const r=Object.keys(e),o=r.map(l=>e[l]);return new Function(...r,t)(...o)},Pm=JE;function XE(...t){return t.reduce((e,r)=>(...o)=>e(r(...o)))}var Sm='const _jsxFileName = "";',qp=t=>t.trim().replace(/;$/,""),KE=t=>t.replace(Sm,"").trim(),QE=t=>Sm+t,YE=t=>`return (${t})`,ZE=({code:t="",scope:e={},enableTypeScript:r=!0},o)=>{const l=["jsx"];r&&l.push("typescript");const a=XE(QE,yf({transforms:["imports"]}),YE,KE,qp,yf({transforms:l}),qp)(t);return wm(Pm(a,at({React:Xt},e)),o)},eI=({code:t="",scope:e={},enableTypeScript:r=!0},o,l)=>{const a=s=>{typeof s>"u"?l(new SyntaxError("`render` must be called with valid JSX.")):o(wm(s,l))};if(!/render\s*\(/.test(t))return l(new SyntaxError("No-Inline evaluations must call `render`."));const c=["jsx","imports"];r&&c.splice(1,0,"typescript"),Pm(yf({transforms:c})(t),Fl(at({React:Xt},e),{render:a}))};function nI({children:t,code:e="",language:r="tsx",theme:o,enableTypeScript:l=!0,disabled:a=!1,scope:c,transformCode:s,noInline:d=!1}){const[u,h]=U.useState({error:void 0,element:void 0});function p(g){return UE(this,null,function*(){const x=P=>{h({error:P.toString(),element:void 0})};try{const P=s?s(g):g;try{const m=yield Promise.resolve(P),O=v=>h({error:void 0,element:v});if(typeof m!="string")throw new Error("Code failed to transform");const b={code:m,scope:c,enableTypeScript:l};d?(h({error:void 0,element:null}),eI(b,O,x)):O(ZE(b,x))}catch(m){return x(m)}}catch(P){return x(P),Promise.resolve()}})}const y=g=>h({error:g.toString()});U.useEffect(()=>{p(e).catch(y)},[e,c,d,s]);const S=g=>{p(g).catch(y)};return n.jsx(Ua.Provider,{value:Fl(at({},u),{code:e,language:r,theme:o,disabled:a,onError:y,onChange:S}),children:t})}var tI=nI;function rI(t){const{code:e,language:r,theme:o,disabled:l,onChange:a}=U.useContext(Ua);return n.jsx(qE,at({theme:o,code:e,language:r,disabled:l,onChange:a},t))}function oI(t){const{error:e}=U.useContext(Ua);return e?n.jsx("pre",Fl(at({},t),{children:e})):null}function lI(t){var e=t,{Component:r="div"}=e,o=zE(e,["Component"]);const{element:l}=U.useContext(Ua);return n.jsx(r,Fl(at({},o),{children:l?n.jsx(l,{}):null}))}var iI=lI;function aI({value:t,onChange:e,options:r,className:o,style:l}){const[a,c]=U.useState(!1),s=r.find(d=>d.value===t);return n.jsxs("div",{className:en("doc-ui-select",o),style:l,children:[n.jsx(bl,{icon:s==null?void 0:s.icon,onClick:()=>c(d=>!d),children:s==null?void 0:s.label}),n.jsx("div",{className:en("doc-ui-select-dropdown",a&&"doc-ui-select-dropdown-open"),children:r.map(d=>n.jsx(bl,{icon:d.icon,onClick:()=>{e(d.value),c(!1)},children:d.label},d.value))})]})}const cI=/import[\w_,{}$\s]+from\s['"]([.@\w/_-]+)['"];?/gm;function sI(t){return t.replace(cI,"")}function fI({code:t,filename:e,language:r="jsx",device:o="responsive",disablePadding:l,className:a,style:c,imports:s}){const d=U.useMemo(()=>[{value:"mobile",label:"Mobile",icon:n.jsx(qv,{})},{value:"tablet",label:"Tablet",icon:n.jsx(Vv,{})},{value:"laptop",label:"Laptop",icon:n.jsx(Uv,{})}],[]),[u,h]=U.useState(o==="responsive"?"laptop":o),p=U.useMemo(()=>d.find(y=>y.value===u),[u,d]);return n.jsxs("div",{className:en("doc-ui-demo-block","doc-ui-demo-block-"+u,a),style:c,children:[n.jsxs(cb,{children:[n.jsx(ib,{language:r,filename:e}),n.jsx(ab,{}),o==="responsive"?n.jsx(aI,{value:u,onChange:h,options:d}):n.jsx(bl,{icon:p==null?void 0:p.icon,children:p==null?void 0:p.label}),n.jsx(lb,{code:t})]}),n.jsx(tI,{code:t,theme:{plain:{},styles:[]},enableTypeScript:r==="tsx",transformCode:sI,scope:s,noInline:t==null?void 0:t.includes("render("),children:n.jsxs("div",{className:"doc-ui-demo-block-main",children:[n.jsx(iI,{className:en("doc-ui-demo-block-preview",l&&"doc-ui-demo-block-preview-disable-padding")}),n.jsxs("div",{className:"doc-ui-demo-block-develop",children:[n.jsx(oI,{className:"doc-ui-demo-block-error"}),n.jsx(rI,{className:"doc-ui-demo-block-editor"})]})]})})]})}function dI(t){return n.jsx("div",{className:"doc-ui-table",children:n.jsx("table",{...t})})}const uI={code:Q0,pre:({children:t,...e})=>{var a,c,s;const r=U.Children.only(t),o=((a=r.props.className)==null?void 0:a.substring(9))||"bash",l=(s=(c=r.props.children)==null?void 0:c.trim)==null?void 0:s.call(c);return["jsx","tsx"].includes(o)&&!e.static?n.jsx(fI,{language:o,code:l,...e}):n.jsx(K0,{language:o,code:l,...e})},table:dI,Alert:Xv};function pI({docs:t=[],basename:e,languages:r,className:o,style:l}){const a=U.useMemo(()=>{const c=f1({fallbackLng:"en",supportedLngs:r==null?void 0:r.map(s=>s.code),debug:!0,interpolation:{escapeValue:!1},resources:{en:{translation:{hello:"Hello from other i18n instance"}},de:{translation:{hello:"Hallo aus einer anderen i18n Instanz"}}}});return c.init(),c},[r]);return n.jsx(_1,{i18n:a,children:n.jsx(vv,{basename:e,children:n.jsxs("div",{className:en("doc-ui",o),style:l,children:[n.jsx(Av,{languages:r,docs:t}),n.jsx("main",{className:"doc-ui-main",children:n.jsx("article",{className:"doc-ui-content",children:n.jsx(Bx,{components:uI,children:n.jsx(yv,{children:t.map(c=>n.jsx(JO,{index:c.filepath==="README.md",path:gi(c.filepath),Component:c.default},c.filepath))})})})})]})})})}const yI="README.md",hI="Alibaba Front-end Specification",OI=void 0;function Wp(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Alibaba Front-end Specification"}),`
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// disallowed - 禁止（用于部分明令禁止的用法）
// bad - 反例
// allowed - 中例（用于允许但不推荐的用法）
// good - 正例
// best - 最佳正例（多个正例中最好的实现）
`})}),`
`,n.jsx(e.h2,{children:"如何参与"}),`
`,n.jsxs(e.p,{children:["非常欢迎大家通过 ",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/issues",children:"Issues"})," 反馈问题和需求，或者通过 ",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/pulls",children:"PRs"})," 参与贡献，请参考 ",n.jsx(e.a,{href:"/CONTRIBUTING.md",children:"CONTRIBUTING.md"}),"。"]})]})}function _m(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Wp,{...t})}):Wp(t)}_m.displayName="MDXContent";const bI=Object.freeze(Object.defineProperty({__proto__:null,default:_m,filepath:yI,frontmatter:OI,title:hI},Symbol.toStringTag,{value:"Module"})),mI="README.zh.md",gI="阿里巴巴前端规约",jI=void 0;function Vp(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"阿里巴巴前端规约"}),`
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// disallowed - 禁止（用于部分明令禁止的用法）
// bad - 反例
// allowed - 中例（用于允许但不推荐的用法）
// good - 正例
// best - 最佳正例（多个正例中最好的实现）
`})}),`
`,n.jsx(e.h2,{children:"如何参与"}),`
`,n.jsxs(e.p,{children:["非常欢迎大家通过 ",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/issues",children:"Issues"})," 反馈问题和需求，或者通过 ",n.jsx(e.a,{href:"https://github.com/alibaba/f2e-spec/pulls",children:"PRs"})," 参与贡献，请参考 ",n.jsx(e.a,{href:"/CONTRIBUTING.md",children:"CONTRIBUTING.md"}),"。"]})]})}function Em(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Vp,{...t})}):Vp(t)}Em.displayName="MDXContent";const xI=Object.freeze(Object.defineProperty({__proto__:null,default:Em,filepath:mI,frontmatter:jI,title:gI},Symbol.toStringTag,{value:"Module"})),vI="coding/common.md",wI="Common Coding Specification",PI={group:"Coding Style",order:0};function Gp(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Common Coding Specification"}),`
`,n.jsxs(e.p,{children:[`Common guidelines that apply to various programming languages. Linting tools like
`,n.jsx(e.a,{href:"https://editorconfig.org/",children:"EditorConfig"})," and ",n.jsx(e.a,{href:"https://prettier.io/",children:"Prettier"})," can be used."]}),`
`,n.jsx(e.h2,{children:"Indention"}),`
`,n.jsx(e.p,{children:"2 spaces."}),`
`,n.jsx(e.pre,{filename:".editorconfig",children:n.jsx(e.code,{className:"language-ini",children:`indent_style = space
indent_size = 2
`})}),`
`,n.jsx(e.p,{children:"The decision is made based on the following reasons:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"spaces have same visual results in all editors and web pages, while tabs don't."}),`
`,n.jsx(e.li,{children:"2 spaces is more obvious than 1 space."}),`
`,n.jsxs(e.li,{children:["2 spaces saves more spaces than 3 or 4 spaces, espacially for ",n.jsx(e.code,{children:"html"})," and ",n.jsx(e.code,{children:"jsx"}),` syntax which can
have very deep nesting structure.`]}),`
`]}),`
`,n.jsx(e.h2,{children:"Max line length"}),`
`,n.jsx(e.p,{children:"100 chars."}),`
`,n.jsx(e.pre,{filename:".editorconfig",children:n.jsx(e.code,{className:"language-ini",children:`max_line_length = 100
`})}),`
`,n.jsx(e.pre,{filename:".vscode/settings.json",children:n.jsx(e.code,{className:"language-json",children:`{
  "editor.rulers": [100]
}
`})}),`
`,n.jsx(e.p,{children:`Hard line wrap helps reading and debuging code more effiently. We considered diff code side by side
on a equivalent 1600px wide screen. For smaller screens, we suggest to decrease font size or display
scale factor.`}),`
`,n.jsx(e.h2,{children:"Charset encoding"}),`
`,n.jsxs(e.p,{children:["All source code and text files should use ",n.jsx(e.code,{children:"utf-8"})," charset when encoding and decoding."]}),`
`,n.jsx(e.pre,{filename:".editorconfig",children:n.jsx(e.code,{className:"language-ini",children:`charset = utf-8
`})}),`
`,n.jsx(e.h2,{children:"Authors and contributors"}),`
`,n.jsx(e.p,{children:"Authors:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/guoyunhe",children:"Guo Yunhe"})}),`
`]})]})}function Im(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Gp,{...t})}):Gp(t)}Im.displayName="MDXContent";const SI=Object.freeze(Object.defineProperty({__proto__:null,default:Im,filepath:vI,frontmatter:PI,title:wI},Symbol.toStringTag,{value:"Module"})),_I="coding/common.zh.md",EI="通用编码规约",II={group:"代码风格",order:0};function Jp(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"通用编码规约"}),`
`,n.jsxs(e.p,{children:["适用于多种编程语言的编码规约。对应的规约工具主要是 ",n.jsx(e.a,{href:"https://editorconfig.org/",children:"EditorConfig"})," 和 ",n.jsx(e.a,{href:"https://prettier.io/",children:"Prettier"}),"。"]}),`
`,n.jsx(e.h2,{children:"缩进"}),`
`,n.jsx(e.p,{children:"两个空格。"}),`
`,n.jsx(e.pre,{filename:".editorconfig",children:n.jsx(e.code,{className:"language-ini",children:`indent_style = space
indent_size = 2
`})}),`
`,n.jsx(e.p,{children:"之所以选择两个空格，是有以下考虑："}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"空格在所有编辑器和网页中展示的效果均一致，而 Tab 则无法控制实际展示的缩进宽度。"}),`
`,n.jsx(e.li,{children:"2 个空格相比 1 个空格更加明显。"}),`
`,n.jsxs(e.li,{children:["2 个空格相比 3 个空格或 4 个空格更节约空间，适合 ",n.jsx(e.code,{children:"html"})," 和 ",n.jsx(e.code,{children:"jsx"})," 等层级较深的语法。"]}),`
`]}),`
`,n.jsx(e.h2,{children:"行宽"}),`
`,n.jsx(e.p,{children:"100 字符。"}),`
`,n.jsx(e.pre,{filename:".editorconfig",children:n.jsx(e.code,{className:"language-ini",children:`max_line_length = 100
`})}),`
`,n.jsx(e.pre,{filename:".vscode/settings.json",children:n.jsx(e.code,{className:"language-json",children:`{
  "editor.rulers": [100]
}
`})}),`
`,n.jsx(e.p,{children:"硬换行能提高代码阅读和调试的效率。我们考虑了在等效 1600px 宽的屏幕，左右分屏对比代码的情况。对于更小的屏幕，我们建议调小字体或者缩放比例。"}),`
`,n.jsx(e.h2,{children:"编码"}),`
`,n.jsxs(e.p,{children:["所有源代码和纯文本文件都应使用 ",n.jsx(e.code,{children:"utf-8"})," 编码。"]}),`
`,n.jsx(e.pre,{filename:".editorconfig",children:n.jsx(e.code,{className:"language-ini",children:`charset = utf-8
`})}),`
`,n.jsx(e.h2,{children:"作者及贡献者"}),`
`,n.jsx(e.p,{children:"作者："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"https://github.com/guoyunhe",children:"郭云鹤"})}),`
`]})]})}function km(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Jp,{...t})}):Jp(t)}km.displayName="MDXContent";const kI=Object.freeze(Object.defineProperty({__proto__:null,default:km,filepath:_I,frontmatter:II,title:EI},Symbol.toStringTag,{value:"Module"})),NI="coding/css.md",CI="CSS Coding Specification",TI={group:"Coding Style",order:2};function Xp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"CSS Coding Specification"}),`
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
`]})]})}function Nm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Xp,{...t})}):Xp(t)}Nm.displayName="MDXContent";const AI=Object.freeze(Object.defineProperty({__proto__:null,default:Nm,filepath:NI,frontmatter:TI,title:CI},Symbol.toStringTag,{value:"Module"})),RI="coding/css.zh.md",LI="CSS 编码规约",FI={group:"代码风格",order:2};function Kp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"CSS 编码规约"}),`
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
`]})]})}function Cm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Kp,{...t})}):Kp(t)}Cm.displayName="MDXContent";const MI=Object.freeze(Object.defineProperty({__proto__:null,default:Cm,filepath:RI,frontmatter:FI,title:LI},Symbol.toStringTag,{value:"Module"})),DI="coding/html.md",BI="HTML Coding Specification",$I={group:"Coding Style",order:1};function Qp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"HTML Coding Specification"}),`
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
`]})]})}function Tm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Qp,{...t})}):Qp(t)}Tm.displayName="MDXContent";const zI=Object.freeze(Object.defineProperty({__proto__:null,default:Tm,filepath:DI,frontmatter:$I,title:BI},Symbol.toStringTag,{value:"Module"})),UI="coding/html.zh.md",HI="HTML 编码规约",qI={group:"代码风格",order:1};function Yp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"HTML 编码规约"}),`
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
`]})]})}function Am(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Yp,{...t})}):Yp(t)}Am.displayName="MDXContent";const WI=Object.freeze(Object.defineProperty({__proto__:null,default:Am,filepath:UI,frontmatter:qI,title:HI},Symbol.toStringTag,{value:"Module"})),VI="coding/javascript.md",GI="JavaScript Coding Specification",JI={group:"Coding Style",order:3};function Zp(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"JavaScript Coding Specification"}),`
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 导致 Uncaught ReferenceError 报错
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - else 应与 if 的 } 放在同一行
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// good
function doNothing() {}
`})}),`
`,n.jsx(e.p,{children:"但如果空代码块在多块结构中，仍建议按上一条非空块的 Egyptian Brackets 风格换行："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}
`})}),`
`,n.jsx(e.p,{children:"声明函数时，函数名和参数列表之间无空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
`})}),`
`,n.jsx(e.p,{children:"小括号内部两侧无空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);
`})}),`
`,n.jsx(e.p,{children:"大括号内部两侧有空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent' };
`})}),`
`,n.jsx(e.p,{children:"运算符两侧有空格，除了一元运算符："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 文件末尾未保留换行符
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
var foo = 'foo';
var bar;

// good
const foo = 'foo';
let bar;
`})}),`
`,n.jsx(e.p,{children:"更不要什么都不用（这将产生全局变量，从而污染全局命名空间）："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
foo = 'foo';

// good
const foo = 'foo';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.2【强制】正确地使用 const 和 let。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-const",children:"prefer-const"})]}),`
`,n.jsxs(e.p,{children:["声明变量时，应优先使用 ",n.jsx(e.code,{children:"const"}),"，只有当变量会被重新赋值时才使用 ",n.jsx(e.code,{children:"let"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 声明后未发生重新赋值，应使用 const
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 未使用变量 foo
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
console.log(foo); // => undefined
var foo = 'foo';

// good
var foo = 'foo';
console.log(foo); // => foo
`})}),`
`,n.jsxs(e.p,{children:["在 ES6 中，由于 ",n.jsx(e.code,{children:"const"})," 和 ",n.jsx(e.code,{children:"let"})," 没有声明提升作用，如果在声明前就使用变量，会直接报错："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 如果权限校验（checkUserPermission）失败，fetchData 是不必要的
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 本例的结果是 let 仅对 a 起到\b\b了预想效果，b 和 c 都成了全局变量
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const str = '1';

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const num = 1;

// bad
const str = new String(num); // typeof str is "object" not "string"
const str = num + ''; // invokes num.valueOf()
const str = num.toString(); // isn’t guaranteed to return a string

// good
const str = String(num);
`})}),`
`,n.jsxs(e.p,{children:["【布尔值】使用 ",n.jsx(e.code,{children:"!!"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const age = 0;

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
parseInt("071"); // => ES5 前的执行环境中得到的是 57

// good
parseInt("071", 10); // => 71
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.4【强制】避免不必要的布尔\b类型转换。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-extra-boolean-cast",children:"no-extra-boolean-cast"})]}),`
`,n.jsxs(e.p,{children:["在 ",n.jsx(e.code,{children:"if"})," 等条件语句中，将表达式的结果强制转换成布尔值是多余的："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const name = "tod";
const name = \`tod\`; // 模板字符串中应包含变量或换行，否则需用单引号

// good
const name = 'tod';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.5.2【推荐】使用模板字符串替代字符串拼接。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-template",children:"prefer-template"})]}),`
`,n.jsx(e.p,{children:"模板字符串让代码更简洁，可读性更强"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 欲将 ['a', 'b', 'c'] 转换成 {a: 0, b: 1, c: 2}
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 欲将 ['a', 'b', 'c'] 转换成 {a: 0, b: 1, c: 2}
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// good
const nodes = [...foo];
const uniqueNodes = [...new Set(foo)]; // 可以利用 Set 和 ... 将数组去重
`})}),`
`,n.jsx(e.p,{children:"数组拼接："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const array1 = [1, 2].concat(array);

// good
const array1 = [1, 2, ...array]
`})}),`
`,n.jsxs(e.p,{children:["用 ",n.jsx(e.code,{children:"..."})," 替代 ",n.jsx(e.code,{children:"apply"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const args = [1, 2, 3, 4];
Math.max.apply(Math, args);

// good
const args = [1, 2, 3, 4];
Math.max(...args);
`})}),`
`,n.jsxs(e.p,{children:["特殊的，遍历可迭代对象时，\b使用 ",n.jsx(e.code,{children:"Array.from"})," 而不是 ",n.jsx(e.code,{children:"..."}),"，以免创建一个临时数组："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.3.4【推荐】使用解构获取数组元素。"}),`
`,n.jsx(e.p,{children:"使用 ES6 提供的解构方法获取数组元素："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const arr = [1, 2, 3, 4];
const first = arr[0];
const second = arr[1];

// good
const arr = [1, 2, 3, 4];
const [first, second] = arr;
`})}),`
`,n.jsx(e.p,{children:"函数有多个返回值时，应使用对象解构而不是数组解构，因为数组解构需要考虑返回值的位置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const obj = new Object();

// good
const obj = {};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.2【强制】使用对象属性和方法的简写语法。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/object-shorthand",children:"object-shorthand"})]}),`
`,n.jsx(e.p,{children:"ES6 提供了对象属性和方法的简写语法，可以使代码更加简洁："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const value = 'foo';

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const anakinSkywalker = 'Anakin Skywalker';
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const obj = {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// very bad - original 会被影响
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// good
const copy = { a: 1, b: 2, c: 3 };
const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.7【推荐】使用解构获取对象属性。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-destructuring",children:"prefer-destructuring"})]}),`
`,n.jsx(e.p,{children:"获取对象的同名属性、多个属性时，使用解构让代码更简洁，也可以减少为了使用属性而创建的临时引用。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function getKey(k) {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const obj = {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const sum = new Function('a', 'b', 'return a + b');

// good
const sum = (a, b) => (a + b);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.2【强制】不要在块中使用函数声明。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-inner-declarations",children:"no-inner-declarations"})]}),`
`,n.jsxs(e.p,{children:["在非函数块（如 ",n.jsx(e.code,{children:"if"}),"、",n.jsx(e.code,{children:"while"})," 等）中，不要使用函数声明："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 函数声明不是块作用域而是函数作用域，因此在块外也能使用函数，容易引起误解
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:"// good - 函数体包含多条语句时，始终加上大括号\n[1, 2, 3].map((number) => {\n  const nextNumber = number + 1;\n  return `A string containing the ${nextNumber}.`;\n});\n\n// good - 函数体只包含一条\b `return` 语句时，可以也建议省略大括号和 `return`\n[1, 2, 3].map(number => `A string containing the ${number + 1}.`);\n\n// good - 也可以选择始终不省略大括号，不使用简写语法糖，以方便后续在函数体内增加语句\n[1, 2, 3].map((number) => {\n  return `A string containing the ${number + 1}.`;\n});\n"})}),`
`,n.jsxs(e.p,{children:["当 ",n.jsx(e.code,{children:"return"})," 的\b内容为对象或者有多行时，需要用小括号包裹："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - Uncaught SyntaxError: Unexpected token
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// good - 未使用 return 简写语法时，参数始终加上小括号
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`(function () {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const numbers = [1, 2, 3, 4, 5];

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 以下两种\b constructor 可以省略
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 非子类不能使用 super
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
import React from 'react';
import { Component }  from 'react';

// good
import React, { Component } from 'react';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.3【强制】import 语句需要放到模块的最上方。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md",children:"import/first"})]}),`
`,n.jsxs(e.p,{children:["由于 ",n.jsx(e.code,{children:"import"})," 语句会被声明提升，将它们放到模块的最上方以防止异常行为。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// foo.js
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// foo.js
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
export function foo() {}

// good
export default function foo() {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.7.11【参考】不要在 import 时直接 export。"}),`
`,n.jsx(e.p,{children:"虽然一行代码更\b简洁，\b但这不利于代码的可读性和一致性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const id = '83949';

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let num = 1;

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = void 0;

// good
const foo = undefined;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.4【强制】避免嵌套的三元表达式。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-nested-ternary",children:"no-nested-ternary"})]}),`
`,n.jsx(e.p,{children:"嵌套的三元表达式会降低代码可读性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = bar ? baz : qux === quxx ? bing : bam;

// good
const qu = qux === quxx ? bing : bam;
const foo = bar ? baz : qu;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.5【强制】避免不必要的三元表达式。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-unneeded-ternary",children:"no-unneeded-ternary"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`if ({}) { // => true
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
function isTruthy(x) {
  debugger;
  return Boolean(x);
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.10.3【推荐】禁止使用 alert。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-alert",children:"no-alert"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"alert"})," 语句会使浏览器弹出原生警告框，这可能让人感觉你的程序出错了。如果需要对用户弹出警告信息，好的做法是使用第三方的弹窗组件或自己定义警告框样式。同理，",n.jsx(e.code,{children:"confirm"})," 和 ",n.jsx(e.code,{children:"prompt"})," 语句也不应\b被使用。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
alert('Oops!');

// good - 使用自定义的 Alert 组件
Alert('Oops!');
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.10.4【推荐】生产环境\b禁止使用 console。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-console",children:"no-console"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"console"})," 语句通常在调试阶段使用，发布上线前，应该去掉代码里所有的 ",n.jsx(e.code,{children:"console"})," 语句。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
window = {};
Object = null;
undefined = 1;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3 注释"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`注释的目的：提高代码的可读性，从而提高代码的可维护性
注释的原则：如无必要，勿增注释；如有必要，尽量详尽`}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.1【推荐】单行注释使用 //。"}),`
`,n.jsx(e.p,{children:"注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;
`})}),`
`,n.jsx(e.p,{children:"注释行上方需要有一个空行（除非注释行上方是一个块的顶部），以增加可读性："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 注释行上方需要一个空行
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`class Calculator extends Abacus {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`/**
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 在本文件中使用的常量，不需使用 UPPERCASE_VARIABLES 风格
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// good
export const THIS_IS_CONSTANT = '一个常量';
`})}),`
`,n.jsxs(e.p,{children:["此外，如果 ",n.jsx(e.code,{children:"export"})," 一个对象，只有对象本身需要使用 UPPERCASE_VARIABLES ，对象属性的 key 仍然使用正常命名风格："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - unnecessarily uppercases key while adding no semantic value
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function makeStyleGuide() {
  // ...
}

export default makeStyleGuide;
`})}),`
`,n.jsxs(e.p,{children:["使用大驼峰（PascalCase）命名 ",n.jsx(e.code,{children:"export"})," 的 class、函数库、字面量对象："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const AnObject = {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// good
var foo = 'foo';
`})}),`
`,n.jsxs(e.p,{children:["需注意，",n.jsx(e.code,{children:"var"})," 声明的变量不是块作用域而是函数作用域："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 将打印 2, 2, 2，而非 0, 1, 2
for (var i = 0; i < 3; ++i) {
  var iteration = i;
  setTimeout(function() { console.log(iteration); }, i * 1000);
}
`})}),`
`,n.jsxs(e.p,{children:["另外，",n.jsx(e.code,{children:"var"})," 声明的变量会被提升到其作用域顶部："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 变量声明会被提升到函数顶部，但赋值不会被提升
function example() {
  console.log(declaredButNotAssigned); // => undefined
  console.log(notDeclared); // => throws a ReferenceError
  var declaredButNotAssigned = true;
}
`})}),`
`,n.jsx(e.p,{children:"即便如此，我们还是推荐在变量使用前再进行声明，而不是统一在作用域开始处声明，以增强可读性。当然，如果你担心声明提升问题会带来隐患，也可以选择统一在\b\b作用域开始处进行声明。"}),`
`,n.jsxs(e.p,{children:["不要在声明前就使用变量，这样做可能给人带来疑惑和隐患。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-use-before-define.html",children:n.jsx(e.code,{children:"no-use-before-define"})})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var items = [1, 2, 3];

// bad
var itemsCopy = [];
for (var i = 0; i < items.length; i++) {
  itemsCopy[i] = items[i];
}

// good
var itemsCopy = items.slice();
`})}),`
`,n.jsx(e.p,{children:"将类数组对象转换成数组："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function trigger() {
  var args = Array.prototype.slice.call(arguments);
  // ...
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"5.4【推荐】不要使用保留字作为对象的属性名。"}),`
`,n.jsxs(e.p,{children:["不要使用",n.jsx(e.a,{href:"http://es5.github.io/#x7.6.1",children:"保留字"}),"作为对象的属性名，它们在 IE8 中不工作"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`]})]})}function Rm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(Zp,{...t})}):Zp(t)}Rm.displayName="MDXContent";const XI=Object.freeze(Object.defineProperty({__proto__:null,default:Rm,filepath:VI,frontmatter:JI,title:GI},Symbol.toStringTag,{value:"Module"})),KI="coding/javascript.zh.md",QI="JavaScript 编码规约",YI={group:"代码风格",order:3};function ey(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"JavaScript 编码规约"}),`
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 导致 Uncaught ReferenceError 报错
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - else 应与 if 的 } 放在同一行
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// good
function doNothing() {}
`})}),`
`,n.jsx(e.p,{children:"但如果空代码块在多块结构中，仍建议按上一条非空块的 Egyptian Brackets 风格换行："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}
`})}),`
`,n.jsx(e.p,{children:"声明函数时，函数名和参数列表之间无空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
`})}),`
`,n.jsx(e.p,{children:"小括号内部两侧无空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);
`})}),`
`,n.jsx(e.p,{children:"大括号内部两侧有空格："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = {clark: 'kent'};

// good
const foo = { clark: 'kent' };
`})}),`
`,n.jsx(e.p,{children:"运算符两侧有空格，除了一元运算符："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 文件末尾未保留换行符
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
var foo = 'foo';
var bar;

// good
const foo = 'foo';
let bar;
`})}),`
`,n.jsx(e.p,{children:"更不要什么都不用（这将产生全局变量，从而污染全局命名空间）："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
foo = 'foo';

// good
const foo = 'foo';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.1.2【强制】正确地使用 const 和 let。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-const",children:"prefer-const"})]}),`
`,n.jsxs(e.p,{children:["声明变量时，应优先使用 ",n.jsx(e.code,{children:"const"}),"，只有当变量会被重新赋值时才使用 ",n.jsx(e.code,{children:"let"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 声明后未发生重新赋值，应使用 const
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 未使用变量 foo
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
console.log(foo); // => undefined
var foo = 'foo';

// good
var foo = 'foo';
console.log(foo); // => foo
`})}),`
`,n.jsxs(e.p,{children:["在 ES6 中，由于 ",n.jsx(e.code,{children:"const"})," 和 ",n.jsx(e.code,{children:"let"})," 没有声明提升作用，如果在声明前就使用变量，会直接报错："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 如果权限校验（checkUserPermission）失败，fetchData 是不必要的
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 本例的结果是 let 仅对 a 起到\b\b了预想效果，b 和 c 都成了全局变量
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const str = '1';

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const num = 1;

// bad
const str = new String(num); // typeof str is "object" not "string"
const str = num + ''; // invokes num.valueOf()
const str = num.toString(); // isn’t guaranteed to return a string

// good
const str = String(num);
`})}),`
`,n.jsxs(e.p,{children:["【布尔值】使用 ",n.jsx(e.code,{children:"!!"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const age = 0;

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
parseInt("071"); // => ES5 前的执行环境中得到的是 57

// good
parseInt("071", 10); // => 71
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.4【强制】避免不必要的布尔\b类型转换。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-extra-boolean-cast",children:"no-extra-boolean-cast"})]}),`
`,n.jsxs(e.p,{children:["在 ",n.jsx(e.code,{children:"if"})," 等条件语句中，将表达式的结果强制转换成布尔值是多余的："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const name = "tod";
const name = \`tod\`; // 模板字符串中应包含变量或换行，否则需用单引号

// good
const name = 'tod';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.2.5.2【推荐】使用模板字符串替代字符串拼接。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-template",children:"prefer-template"})]}),`
`,n.jsx(e.p,{children:"模板字符串让代码更简洁，可读性更强"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 欲将 ['a', 'b', 'c'] 转换成 {a: 0, b: 1, c: 2}
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 欲将 ['a', 'b', 'c'] 转换成 {a: 0, b: 1, c: 2}
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// good
const nodes = [...foo];
const uniqueNodes = [...new Set(foo)]; // 可以利用 Set 和 ... 将数组去重
`})}),`
`,n.jsx(e.p,{children:"数组拼接："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const array1 = [1, 2].concat(array);

// good
const array1 = [1, 2, ...array]
`})}),`
`,n.jsxs(e.p,{children:["用 ",n.jsx(e.code,{children:"..."})," 替代 ",n.jsx(e.code,{children:"apply"}),"："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const args = [1, 2, 3, 4];
Math.max.apply(Math, args);

// good
const args = [1, 2, 3, 4];
Math.max(...args);
`})}),`
`,n.jsxs(e.p,{children:["特殊的，遍历可迭代对象时，\b使用 ",n.jsx(e.code,{children:"Array.from"})," 而不是 ",n.jsx(e.code,{children:"..."}),"，以免创建一个临时数组："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.3.4【推荐】使用解构获取数组元素。"}),`
`,n.jsx(e.p,{children:"使用 ES6 提供的解构方法获取数组元素："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const arr = [1, 2, 3, 4];
const first = arr[0];
const second = arr[1];

// good
const arr = [1, 2, 3, 4];
const [first, second] = arr;
`})}),`
`,n.jsx(e.p,{children:"函数有多个返回值时，应使用对象解构而不是数组解构，因为数组解构需要考虑返回值的位置："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const obj = new Object();

// good
const obj = {};
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.2【强制】使用对象属性和方法的简写语法。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/object-shorthand",children:"object-shorthand"})]}),`
`,n.jsx(e.p,{children:"ES6 提供了对象属性和方法的简写语法，可以使代码更加简洁："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const value = 'foo';

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const anakinSkywalker = 'Anakin Skywalker';
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const obj = {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// very bad - original 会被影响
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// good
const copy = { a: 1, b: 2, c: 3 };
const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.4.7【推荐】使用解构获取对象属性。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/prefer-destructuring",children:"prefer-destructuring"})]}),`
`,n.jsx(e.p,{children:"获取对象的同名属性、多个属性时，使用解构让代码更简洁，也可以减少为了使用属性而创建的临时引用。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function getKey(k) {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const obj = {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const sum = new Function('a', 'b', 'return a + b');

// good
const sum = (a, b) => (a + b);
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.5.2【强制】不要在块中使用函数声明。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-inner-declarations",children:"no-inner-declarations"})]}),`
`,n.jsxs(e.p,{children:["在非函数块（如 ",n.jsx(e.code,{children:"if"}),"、",n.jsx(e.code,{children:"while"})," 等）中，不要使用函数声明："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 函数声明不是块作用域而是函数作用域，因此在块外也能使用函数，容易引起误解
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:"// good - 函数体包含多条语句时，始终加上大括号\n[1, 2, 3].map((number) => {\n  const nextNumber = number + 1;\n  return `A string containing the ${nextNumber}.`;\n});\n\n// good - 函数体只包含一条\b `return` 语句时，可以也建议省略大括号和 `return`\n[1, 2, 3].map(number => `A string containing the ${number + 1}.`);\n\n// good - 也可以选择始终不省略大括号，不使用简写语法糖，以方便后续在函数体内增加语句\n[1, 2, 3].map((number) => {\n  return `A string containing the ${number + 1}.`;\n});\n"})}),`
`,n.jsxs(e.p,{children:["当 ",n.jsx(e.code,{children:"return"})," 的\b内容为对象或者有多行时，需要用小括号包裹："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - Uncaught SyntaxError: Unexpected token
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// good - 未使用 return 简写语法时，参数始终加上小括号
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`(function () {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const numbers = [1, 2, 3, 4, 5];

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 以下两种\b constructor 可以省略
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 非子类不能使用 super
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
import React from 'react';
import { Component }  from 'react';

// good
import React, { Component } from 'react';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.7.3【强制】import 语句需要放到模块的最上方。eslint: ",n.jsx(e.a,{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md",children:"import/first"})]}),`
`,n.jsxs(e.p,{children:["由于 ",n.jsx(e.code,{children:"import"})," 语句会被声明提升，将它们放到模块的最上方以防止异常行为。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// foo.js
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// foo.js
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
export function foo() {}

// good
export default function foo() {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"2.7.11【参考】不要在 import 时直接 export。"}),`
`,n.jsx(e.p,{children:"虽然一行代码更\b简洁，\b但这不利于代码的可读性和一致性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const id = '83949';

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`let num = 1;

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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = void 0;

// good
const foo = undefined;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.4【强制】避免嵌套的三元表达式。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-nested-ternary",children:"no-nested-ternary"})]}),`
`,n.jsx(e.p,{children:"嵌套的三元表达式会降低代码可读性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const foo = bar ? baz : qux === quxx ? bing : bam;

// good
const qu = qux === quxx ? bing : bam;
const foo = bar ? baz : qu;
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.8.5【强制】避免不必要的三元表达式。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-unneeded-ternary",children:"no-unneeded-ternary"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`if ({}) { // => true
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
function isTruthy(x) {
  debugger;
  return Boolean(x);
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.10.3【推荐】禁止使用 alert。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-alert",children:"no-alert"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"alert"})," 语句会使浏览器弹出原生警告框，这可能让人感觉你的程序出错了。如果需要对用户弹出警告信息，好的做法是使用第三方的弹窗组件或自己定义警告框样式。同理，",n.jsx(e.code,{children:"confirm"})," 和 ",n.jsx(e.code,{children:"prompt"})," 语句也不应\b被使用。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
alert('Oops!');

// good - 使用自定义的 Alert 组件
Alert('Oops!');
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["2.10.4【推荐】生产环境\b禁止使用 console。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-console",children:"no-console"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.code,{children:"console"})," 语句通常在调试阶段使用，发布上线前，应该去掉代码里所有的 ",n.jsx(e.code,{children:"console"})," 语句。"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
window = {};
Object = null;
undefined = 1;
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{children:"3 注释"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:`注释的目的：提高代码的可读性，从而提高代码的可维护性
注释的原则：如无必要，勿增注释；如有必要，尽量详尽`}),`
`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"3.1【推荐】单行注释使用 //。"}),`
`,n.jsx(e.p,{children:"注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;
`})}),`
`,n.jsx(e.p,{children:"注释行上方需要有一个空行（除非注释行上方是一个块的顶部），以增加可读性："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 注释行上方需要一个空行
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`class Calculator extends Abacus {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`/**
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - 在本文件中使用的常量，不需使用 UPPERCASE_VARIABLES 风格
const PRIVATE_VARIABLE = 'should not be unnecessarily uppercased within a file';

// bad
export let REASSIGNABLE_VARIABLE = 'do not use let with uppercase variables';

// good
export const THIS_IS_CONSTANT = '一个常量';
`})}),`
`,n.jsxs(e.p,{children:["此外，如果 ",n.jsx(e.code,{children:"export"})," 一个对象，只有对象本身需要使用 UPPERCASE_VARIABLES ，对象属性的 key 仍然使用正常命名风格："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad - unnecessarily uppercases key while adding no semantic value
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function makeStyleGuide() {
  // ...
}

export default makeStyleGuide;
`})}),`
`,n.jsxs(e.p,{children:["使用大驼峰（PascalCase）命名 ",n.jsx(e.code,{children:"export"})," 的 class、函数库、字面量对象："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const AnObject = {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// good
var foo = 'foo';
`})}),`
`,n.jsxs(e.p,{children:["需注意，",n.jsx(e.code,{children:"var"})," 声明的变量不是块作用域而是函数作用域："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 将打印 2, 2, 2，而非 0, 1, 2
for (var i = 0; i < 3; ++i) {
  var iteration = i;
  setTimeout(function() { console.log(iteration); }, i * 1000);
}
`})}),`
`,n.jsxs(e.p,{children:["另外，",n.jsx(e.code,{children:"var"})," 声明的变量会被提升到其作用域顶部："]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// 变量声明会被提升到函数顶部，但赋值不会被提升
function example() {
  console.log(declaredButNotAssigned); // => undefined
  console.log(notDeclared); // => throws a ReferenceError
  var declaredButNotAssigned = true;
}
`})}),`
`,n.jsx(e.p,{children:"即便如此，我们还是推荐在变量使用前再进行声明，而不是统一在作用域开始处声明，以增强可读性。当然，如果你担心声明提升问题会带来隐患，也可以选择统一在\b\b作用域开始处进行声明。"}),`
`,n.jsxs(e.p,{children:["不要在声明前就使用变量，这样做可能给人带来疑惑和隐患。eslint: ",n.jsx(e.a,{href:"https://eslint.org/docs/rules/no-use-before-define.html",children:n.jsx(e.code,{children:"no-use-before-define"})})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`var items = [1, 2, 3];

// bad
var itemsCopy = [];
for (var i = 0; i < items.length; i++) {
  itemsCopy[i] = items[i];
}

// good
var itemsCopy = items.slice();
`})}),`
`,n.jsx(e.p,{children:"将类数组对象转换成数组："}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`function trigger() {
  var args = Array.prototype.slice.call(arguments);
  // ...
}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsx(e.p,{children:"5.4【推荐】不要使用保留字作为对象的属性名。"}),`
`,n.jsxs(e.p,{children:["不要使用",n.jsx(e.a,{href:"http://es5.github.io/#x7.6.1",children:"保留字"}),"作为对象的属性名，它们在 IE8 中不工作"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`]})]})}function Lm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ey,{...t})}):ey(t)}Lm.displayName="MDXContent";const ZI=Object.freeze(Object.defineProperty({__proto__:null,default:Lm,filepath:KI,frontmatter:YI,title:QI},Symbol.toStringTag,{value:"Module"})),ek="coding/node.md",nk="Node.js Coding Specification",tk={group:"Coding Style",order:6};function ny(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Node.js Coding Specification"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsxs(e.p,{children:["Node.js 规约主要包含编码风格、安全规约、最佳实践等几个部分，目的是给业务同学提供研发过程中的实质性规范和指导。其中编码风格 follow ",n.jsx(e.a,{href:"https://github.com/eggjs/eslint-config-egg",children:"eslint-config-egg"}),"。"]}),`
`,n.jsx(e.h2,{children:"1 编码风格"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["1.1【推荐】使用 Node.js 内置的全局变量。eslint: ",n.jsx(e.a,{href:"https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global",children:"node/prefer-global"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const util = require('util');
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`class Jedi {
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
`]})]})}function Fm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ny,{...t})}):ny(t)}Fm.displayName="MDXContent";const rk=Object.freeze(Object.defineProperty({__proto__:null,default:Fm,filepath:ek,frontmatter:tk,title:nk},Symbol.toStringTag,{value:"Module"})),ok="coding/node.zh.md",lk="Node.js 编码规约",ik={group:"代码风格",order:6};function ty(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Node.js 编码规约"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsxs(e.p,{children:["Node.js 规约主要包含编码风格、安全规约、最佳实践等几个部分，目的是给业务同学提供研发过程中的实质性规范和指导。其中编码风格 follow ",n.jsx(e.a,{href:"https://github.com/eggjs/eslint-config-egg",children:"eslint-config-egg"}),"。"]}),`
`,n.jsx(e.h2,{children:"1 编码风格"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["1.1【推荐】使用 Node.js 内置的全局变量。eslint: ",n.jsx(e.a,{href:"https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/prefer-global",children:"node/prefer-global"})]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`const util = require('util');
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`class Jedi {
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
`]})]})}function Mm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ty,{...t})}):ty(t)}Mm.displayName="MDXContent";const ak=Object.freeze(Object.defineProperty({__proto__:null,default:Mm,filepath:ok,frontmatter:ik,title:lk},Symbol.toStringTag,{value:"Module"})),ck="coding/rax.md",sk="Rax Coding Specification",fk={group:"Coding Style",order:7};function ry(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Rax Coding Specification"}),`
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
`]})]})}function Dm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ry,{...t})}):ry(t)}Dm.displayName="MDXContent";const dk=Object.freeze(Object.defineProperty({__proto__:null,default:Dm,filepath:ck,frontmatter:fk,title:sk},Symbol.toStringTag,{value:"Module"})),uk="coding/rax.zh.md",pk="Rax 编码规约",yk={group:"代码风格",order:7};function oy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Rax 编码规约"}),`
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
`]})]})}function Bm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(oy,{...t})}):oy(t)}Bm.displayName="MDXContent";const hk=Object.freeze(Object.defineProperty({__proto__:null,default:Bm,filepath:uk,frontmatter:yk,title:pk},Symbol.toStringTag,{value:"Module"})),Ok="coding/react.md",bk="React Coding Specification",mk={group:"Coding Style",order:5};function ly(t){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"React Coding Specification"}),`
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
`]})]})}function $m(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ly,{...t})}):ly(t)}$m.displayName="MDXContent";const gk=Object.freeze(Object.defineProperty({__proto__:null,default:$m,filepath:Ok,frontmatter:mk,title:bk},Symbol.toStringTag,{value:"Module"})),jk="coding/react.zh.md",xk="React 编码规约",vk={group:"代码风格",order:5};function iy(t){const e={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"React 编码规约"}),`
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
`]})]})}function zm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(iy,{...t})}):iy(t)}zm.displayName="MDXContent";const wk=Object.freeze(Object.defineProperty({__proto__:null,default:zm,filepath:jk,frontmatter:vk,title:xk},Symbol.toStringTag,{value:"Module"})),Pk="coding/typescript.md",Sk="TypeScript Coding Specification",_k={group:"Coding Style",order:4};function ay(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"TypeScript Coding Specification"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsx(e.p,{children:"TypeScript 是微软开发的一款开源编程语言，它是 JavaScript 的超集，因此其编码规约和配套 Lint 工具也与《JavaScript 编码规约》一脉相承。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"本文未包含的编码风格说明均默认遵循《JavaScript 编码规约》。"})}),`
`,n.jsx(e.h2,{children:"编码风格"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://img.alicdn.com/imgextra/i3/O1CN01xiw6bP1oMEFb7VtuO_!!6000000005210-55-tps-663-378.svg",alt:"示例代码标注图"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】重载的函数必须写在一起 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md",children:"@typescript-eslint/adjacent-overload-signatures"})]}),`
`,n.jsx(e.p,{children:"自然相关的项组合在一起将提高代码可读性和组织性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// @ts-expect-error
// @ts-ignore
// @ts-nocheck
// @ts-check
`})}),`
`,n.jsx(e.p,{children:"我们允许在代码中使用指令注释，但需要跟随一定长度的描述说明。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
const foo = <string>'bar';

// good
const foo = 'bar' as string;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad: comma style(JSON style)
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// good
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`interface Foo {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
const fs = require('fs');

// good
import * as fs from 'fs';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】不建议将 this 赋值给其他变量 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md",children:"@typescript-eslint/no-this-alias"})]}),`
`,n.jsx(e.p,{children:"通过变量赋值为 this 的方式来管理函数作用域不是我们推荐的最佳实践，应使用箭头函数保留函数作用域。此规则中允许对 this 的解构赋值。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
module Foo {}

// good
declare module Foo {}
declare namespace Foo {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】字符串字面量使用单引号包裹 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md",children:"@typescript-eslint/quotes"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
const foo = "bar";

// good
const foo = 'bar';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】 加号 ",n.jsx(e.code,{children:"+"})," 连接的两侧同为数字或同为字符串 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md",children:"@typescript-eslint/restrict-plus-operands"})]}),`
`,n.jsx(e.p,{children:"数字与字符串的连接往往会导致一些预期外的问题。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`]})]})}function Um(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(ay,{...t})}):ay(t)}Um.displayName="MDXContent";const Ek=Object.freeze(Object.defineProperty({__proto__:null,default:Um,filepath:Pk,frontmatter:_k,title:Sk},Symbol.toStringTag,{value:"Module"})),Ik="coding/typescript.zh.md",kk="TypeScript 编码规约",Nk={group:"代码风格",order:4};function cy(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"TypeScript 编码规约"}),`
`,n.jsx(e.h2,{children:"前言"}),`
`,n.jsx(e.p,{children:"TypeScript 是微软开发的一款开源编程语言，它是 JavaScript 的超集，因此其编码规约和配套 Lint 工具也与《JavaScript 编码规约》一脉相承。"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"本文未包含的编码风格说明均默认遵循《JavaScript 编码规约》。"})}),`
`,n.jsx(e.h2,{children:"编码风格"}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"https://img.alicdn.com/imgextra/i3/O1CN01xiw6bP1oMEFb7VtuO_!!6000000005210-55-tps-663-378.svg",alt:"示例代码标注图"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】重载的函数必须写在一起 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md",children:"@typescript-eslint/adjacent-overload-signatures"})]}),`
`,n.jsx(e.p,{children:"自然相关的项组合在一起将提高代码可读性和组织性。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// @ts-expect-error
// @ts-ignore
// @ts-nocheck
// @ts-check
`})}),`
`,n.jsx(e.p,{children:"我们允许在代码中使用指令注释，但需要跟随一定长度的描述说明。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
const foo = <string>'bar';

// good
const foo = 'bar' as string;
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad: comma style(JSON style)
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// good
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`interface Foo {
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
const fs = require('fs');

// good
import * as fs from 'fs';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】不建议将 this 赋值给其他变量 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md",children:"@typescript-eslint/no-this-alias"})]}),`
`,n.jsx(e.p,{children:"通过变量赋值为 this 的方式来管理函数作用域不是我们推荐的最佳实践，应使用箭头函数保留函数作用域。此规则中允许对 this 的解构赋值。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
module Foo {}

// good
declare module Foo {}
declare namespace Foo {}
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【强制】字符串字面量使用单引号包裹 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md",children:"@typescript-eslint/quotes"})]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
const foo = "bar";

// good
const foo = 'bar';
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:["【推荐】 加号 ",n.jsx(e.code,{children:"+"})," 连接的两侧同为数字或同为字符串 ",n.jsx(e.a,{href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md",children:"@typescript-eslint/restrict-plus-operands"})]}),`
`,n.jsx(e.p,{children:"数字与字符串的连接往往会导致一些预期外的问题。"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-ts",children:`// bad
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
`]})]})}function Hm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(cy,{...t})}):cy(t)}Hm.displayName="MDXContent";const Ck=Object.freeze(Object.defineProperty({__proto__:null,default:Hm,filepath:Ik,frontmatter:Nk,title:kk},Symbol.toStringTag,{value:"Module"})),Tk="engineering/changelog.md",Ak="Changelog Specification",Rk={group:"Engineering",order:1.2};function sy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Changelog Specification"}),`
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

## [<version>](version-diff-url) (<date>)

### <type>

- <desc>
- <desc>

### <type>

- <desc>
- <desc>
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
`]})]})}function qm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(sy,{...t})}):sy(t)}qm.displayName="MDXContent";const Lk=Object.freeze(Object.defineProperty({__proto__:null,default:qm,filepath:Tk,frontmatter:Rk,title:Ak},Symbol.toStringTag,{value:"Module"})),Fk="engineering/changelog.zh.md",Mk="更新日志规约",Dk={group:"工程实践",order:1.2};function fy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"更新日志规约"}),`
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

## [<version>](version-diff-url) (<date>)

### <type>

- <desc>
- <desc>

### <type>

- <desc>
- <desc>
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
`]})]})}function Wm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(fy,{...t})}):fy(t)}Wm.displayName="MDXContent";const Bk=Object.freeze(Object.defineProperty({__proto__:null,default:Wm,filepath:Fk,frontmatter:Dk,title:Mk},Symbol.toStringTag,{value:"Module"})),$k="engineering/git.md",zk="Git Specification",Uk={group:"Engineering",order:1};function dy(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Git Specification"}),`
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
`]})]})}function Vm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(dy,{...t})}):dy(t)}Vm.displayName="MDXContent";const Hk=Object.freeze(Object.defineProperty({__proto__:null,default:Vm,filepath:$k,frontmatter:Uk,title:zk},Symbol.toStringTag,{value:"Module"})),qk="engineering/git.zh.md",Wk="Git 相关规约",Vk={group:"工程实践",order:1};function uy(t){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Git 相关规约"}),`
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
`]})]})}function Gm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(uy,{...t})}):uy(t)}Gm.displayName="MDXContent";const Gk=Object.freeze(Object.defineProperty({__proto__:null,default:Gm,filepath:qk,frontmatter:Vk,title:Wk},Symbol.toStringTag,{value:"Module"})),Jk="engineering/writing.md",Xk="Writing Specification",Kk={group:"Engineering",order:1.1};function py(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"Writing Specification"}),`
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

1.会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）2.个性化设置（如用户自定义设置、主题等）3.浏览器行为跟踪（如跟踪分析用户行为等）

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
`]})]})}function Jm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(py,{...t})}):py(t)}Jm.displayName="MDXContent";const Qk=Object.freeze(Object.defineProperty({__proto__:null,default:Jm,filepath:Jk,frontmatter:Kk,title:Xk},Symbol.toStringTag,{value:"Module"})),Yk="engineering/writing.zh.md",Zk="文档通用规约",e2={group:"工程实践",order:2.2};function yy(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...fe(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e.h1,{children:"文档通用规约"}),`
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

1.会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）2.个性化设置（如用户自定义设置、主题等）3.浏览器行为跟踪（如跟踪分析用户行为等）

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
`]})]})}function Xm(t={}){const{wrapper:e}={...fe(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(yy,{...t})}):yy(t)}Xm.displayName="MDXContent";const n2=Object.freeze(Object.defineProperty({__proto__:null,default:Xm,filepath:Yk,frontmatter:e2,title:Zk},Symbol.toStringTag,{value:"Module"}));function t2(){return n.jsx(pI,{docs:[bI,xI,SI,kI,AI,MI,zI,WI,XI,ZI,rk,ak,dk,hk,gk,wk,Ek,Ck,Lk,Bk,Hk,Gk,Qk,n2],basename:"/f2e-spec/",languages:[{code:"en",name:"🇬🇧 English"},{code:"zh",name:"🇨🇳 中文"}]})}kO(document.getElementById("root")).render(n.jsx(t2,{}));
