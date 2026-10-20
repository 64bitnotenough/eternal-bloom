(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var sh={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function Xy(){if(z_)return No;z_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var I_;function Wy(){return I_||(I_=1,sh.exports=Xy()),sh.exports}var wt=Wy(),rh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function qy(){if(B_)return ce;B_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(U,$,vt){this.props=U,this.context=$,this.refs=A,this.updater=vt||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function I(U,$,vt){this.props=U,this.context=$,this.refs=A,this.updater=vt||y}var L=I.prototype=new x;L.constructor=I,E(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function H(U,$,vt,yt,Ct,Pt){return vt=Pt.ref,{$$typeof:r,type:U,key:$,ref:vt!==void 0?vt:null,props:Pt}}function W(U,$){return H(U.type,$,void 0,void 0,void 0,U.props)}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function C(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(vt){return $[vt]})}var G=/\/+/g;function q(U,$){return typeof U=="object"&&U!==null&&U.key!=null?C(""+U.key):$.toString(36)}function nt(){}function ut(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(nt,nt):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function rt(U,$,vt,yt,Ct){var Pt=typeof U;(Pt==="undefined"||Pt==="boolean")&&(U=null);var J=!1;if(U===null)J=!0;else switch(Pt){case"bigint":case"string":case"number":J=!0;break;case"object":switch(U.$$typeof){case r:case t:J=!0;break;case g:return J=U._init,rt(J(U._payload),$,vt,yt,Ct)}}if(J)return Ct=Ct(U),J=yt===""?"."+q(U,0):yt,D(Ct)?(vt="",J!=null&&(vt=J.replace(G,"$&/")+"/"),rt(Ct,$,vt,"",function(Zt){return Zt})):Ct!=null&&(R(Ct)&&(Ct=W(Ct,vt+(Ct.key==null||U&&U.key===Ct.key?"":(""+Ct.key).replace(G,"$&/")+"/")+J)),$.push(Ct)),1;J=0;var ft=yt===""?".":yt+":";if(D(U))for(var St=0;St<U.length;St++)yt=U[St],Pt=ft+q(yt,St),J+=rt(yt,$,vt,Pt,Ct);else if(St=v(U),typeof St=="function")for(U=St.call(U),St=0;!(yt=U.next()).done;)yt=yt.value,Pt=ft+q(yt,St++),J+=rt(yt,$,vt,Pt,Ct);else if(Pt==="object"){if(typeof U.then=="function")return rt(ut(U),$,vt,yt,Ct);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return J}function O(U,$,vt){if(U==null)return U;var yt=[],Ct=0;return rt(U,yt,"","",function(Pt){return $.call(vt,Pt,Ct++)}),yt}function Y(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(vt){(U._status===0||U._status===-1)&&(U._status=1,U._result=vt)},function(vt){(U._status===0||U._status===-1)&&(U._status=2,U._result=vt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var Z=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function xt(){}return ce.Children={map:O,forEach:function(U,$,vt){O(U,function(){$.apply(this,arguments)},vt)},count:function(U){var $=0;return O(U,function(){$++}),$},toArray:function(U){return O(U,function($){return $})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ce.Component=S,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=I,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ce.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},ce.cache=function(U){return function(){return U.apply(null,arguments)}},ce.cloneElement=function(U,$,vt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=E({},U.props),Ct=U.key,Pt=void 0;if($!=null)for(J in $.ref!==void 0&&(Pt=void 0),$.key!==void 0&&(Ct=""+$.key),$)!B.call($,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&$.ref===void 0||(yt[J]=$[J]);var J=arguments.length-2;if(J===1)yt.children=vt;else if(1<J){for(var ft=Array(J),St=0;St<J;St++)ft[St]=arguments[St+2];yt.children=ft}return H(U.type,Ct,void 0,void 0,Pt,yt)},ce.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ce.createElement=function(U,$,vt){var yt,Ct={},Pt=null;if($!=null)for(yt in $.key!==void 0&&(Pt=""+$.key),$)B.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Ct[yt]=$[yt]);var J=arguments.length-2;if(J===1)Ct.children=vt;else if(1<J){for(var ft=Array(J),St=0;St<J;St++)ft[St]=arguments[St+2];Ct.children=ft}if(U&&U.defaultProps)for(yt in J=U.defaultProps,J)Ct[yt]===void 0&&(Ct[yt]=J[yt]);return H(U,Pt,void 0,void 0,null,Ct)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(U){return{$$typeof:h,render:U}},ce.isValidElement=R,ce.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:Y}},ce.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},ce.startTransition=function(U){var $=P.T,vt={};P.T=vt;try{var yt=U(),Ct=P.S;Ct!==null&&Ct(vt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(xt,Z)}catch(Pt){Z(Pt)}finally{P.T=$}},ce.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ce.use=function(U){return P.H.use(U)},ce.useActionState=function(U,$,vt){return P.H.useActionState(U,$,vt)},ce.useCallback=function(U,$){return P.H.useCallback(U,$)},ce.useContext=function(U){return P.H.useContext(U)},ce.useDebugValue=function(){},ce.useDeferredValue=function(U,$){return P.H.useDeferredValue(U,$)},ce.useEffect=function(U,$,vt){var yt=P.H;if(typeof vt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,$)},ce.useId=function(){return P.H.useId()},ce.useImperativeHandle=function(U,$,vt){return P.H.useImperativeHandle(U,$,vt)},ce.useInsertionEffect=function(U,$){return P.H.useInsertionEffect(U,$)},ce.useLayoutEffect=function(U,$){return P.H.useLayoutEffect(U,$)},ce.useMemo=function(U,$){return P.H.useMemo(U,$)},ce.useOptimistic=function(U,$){return P.H.useOptimistic(U,$)},ce.useReducer=function(U,$,vt){return P.H.useReducer(U,$,vt)},ce.useRef=function(U){return P.H.useRef(U)},ce.useState=function(U){return P.H.useState(U)},ce.useSyncExternalStore=function(U,$,vt){return P.H.useSyncExternalStore(U,$,vt)},ce.useTransition=function(){return P.H.useTransition()},ce.version="19.1.1",ce}var F_;function Vd(){return F_||(F_=1,rh.exports=qy()),rh.exports}var gn=Vd(),oh={exports:{}},Oo={},lh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function Yy(){return H_||(H_=1,(function(r){function t(O,Y){var Z=O.length;O.push(Y);t:for(;0<Z;){var xt=Z-1>>>1,U=O[xt];if(0<l(U,Y))O[xt]=Y,O[Z]=U,Z=xt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Y=O[0],Z=O.pop();if(Z!==Y){O[0]=Z;t:for(var xt=0,U=O.length,$=U>>>1;xt<$;){var vt=2*(xt+1)-1,yt=O[vt],Ct=vt+1,Pt=O[Ct];if(0>l(yt,Z))Ct<U&&0>l(Pt,yt)?(O[xt]=Pt,O[Ct]=Z,xt=Ct):(O[xt]=yt,O[vt]=Z,xt=vt);else if(Ct<U&&0>l(Pt,Z))O[xt]=Pt,O[Ct]=Z,xt=Ct;else break t}}return Y}function l(O,Y){var Z=O.sortIndex-Y.sortIndex;return Z!==0?Z:O.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,_=null,v=3,y=!1,E=!1,A=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var Y=i(p);Y!==null;){if(Y.callback===null)s(p);else if(Y.startTime<=O)s(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function P(O){if(A=!1,D(O),!E)if(i(m)!==null)E=!0,B||(B=!0,q());else{var Y=i(p);Y!==null&&rt(P,Y.startTime-O)}}var B=!1,H=-1,W=5,R=-1;function C(){return S?!0:!(r.unstable_now()-R<W)}function G(){if(S=!1,B){var O=r.unstable_now();R=O;var Y=!0;try{t:{E=!1,A&&(A=!1,I(H),H=-1),y=!0;var Z=v;try{e:{for(D(O),_=i(m);_!==null&&!(_.expirationTime>O&&C());){var xt=_.callback;if(typeof xt=="function"){_.callback=null,v=_.priorityLevel;var U=xt(_.expirationTime<=O);if(O=r.unstable_now(),typeof U=="function"){_.callback=U,D(O),Y=!0;break e}_===i(m)&&s(m),D(O)}else s(m);_=i(m)}if(_!==null)Y=!0;else{var $=i(p);$!==null&&rt(P,$.startTime-O),Y=!1}}break t}finally{_=null,v=Z,y=!1}Y=void 0}}finally{Y?q():B=!1}}}var q;if(typeof L=="function")q=function(){L(G)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ut=nt.port2;nt.port1.onmessage=G,q=function(){ut.postMessage(null)}}else q=function(){x(G,0)};function rt(O,Y){H=x(function(){O(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(O){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var Z=v;v=Y;try{return O()}finally{v=Z}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(O,Y){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Z=v;v=O;try{return Y()}finally{v=Z}},r.unstable_scheduleCallback=function(O,Y,Z){var xt=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,O){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Z+U,O={id:g++,callback:Y,priorityLevel:O,startTime:Z,expirationTime:U,sortIndex:-1},Z>xt?(O.sortIndex=Z,t(p,O),i(m)===null&&O===i(p)&&(A?(I(H),H=-1):A=!0,rt(P,Z-xt))):(O.sortIndex=U,t(m,O),E||y||(E=!0,B||(B=!0,q()))),O},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(O){var Y=v;return function(){var Z=v;v=Y;try{return O.apply(this,arguments)}finally{v=Z}}}})(ch)),ch}var G_;function jy(){return G_||(G_=1,lh.exports=Yy()),lh.exports}var uh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function Zy(){if(V_)return Nn;V_=1;var r=Vd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Nn.flushSync=function(m){var p=f.T,g=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=g,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.1",Nn}var k_;function Ky(){if(k_)return uh.exports;k_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),uh.exports=Zy(),uh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function Qy(){if(X_)return Oo;X_=1;var r=jy(),t=Vd(),i=Ky();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,b=u.child;b;){if(b===a){M=!0,a=u,o=d;break}if(b===o){M=!0,o=u,a=d;break}b=b.sibling}if(!M){for(b=d.child;b;){if(b===a){M=!0,a=d,o=u;break}if(b===o){M=!0,o=d,a=u;break}b=b.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function p(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=p(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var nt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case P:return"Suspense";case B:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case L:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var rt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},xt=[],U=-1;function $(e){return{current:e}}function vt(e){0>U||(e.current=xt[U],xt[U]=null,U--)}function yt(e,n){U++,xt[U]=e.current,e.current=n}var Ct=$(null),Pt=$(null),J=$(null),ft=$(null);function St(e,n){switch(yt(J,n),yt(Pt,e),yt(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?u_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=u_(n),e=f_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Ct),yt(Ct,e)}function Zt(){vt(Ct),vt(Pt),vt(J)}function Yt(e){e.memoizedState!==null&&yt(ft,e);var n=Ct.current,a=f_(n,e.type);n!==a&&(yt(Pt,e),yt(Ct,a))}function ge(e){Pt.current===e&&(vt(Ct),vt(Pt)),ft.current===e&&(vt(ft),wo._currentValue=Z)}var on=Object.prototype.hasOwnProperty,F=r.unstable_scheduleCallback,Le=r.unstable_cancelCallback,re=r.unstable_shouldYield,ie=r.unstable_requestPaint,zt=r.unstable_now,ke=r.unstable_getCurrentPriorityLevel,kt=r.unstable_ImmediatePriority,oe=r.unstable_UserBlockingPriority,Ze=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,N=r.unstable_IdlePriority,T=r.log,it=r.unstable_setDisableYieldValue,ht=null,mt=null;function ct(e){if(typeof T=="function"&&it(e),mt&&typeof mt.setStrictMode=="function")try{mt.setStrictMode(ht,e)}catch{}}var It=Math.clz32?Math.clz32:jt,At=Math.log,Wt=Math.LN2;function jt(e){return e>>>=0,e===0?32:31-(At(e)/Wt|0)|0}var Mt=256,Lt=4194304;function Qt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~d,o!==0?u=Qt(o):(M&=b,M!==0?u=Qt(M):a||(a=b&~e,a!==0&&(u=Qt(a))))):(b=o&~d,b!==0?u=Qt(b):M!==0?u=Qt(M):a||(a=o&~e,a!==0&&(u=Qt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Dt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function bt(){var e=Lt;return Lt<<=1,(Lt&62914560)===0&&(Lt=4194304),e}function Rt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,z=e.expirationTimes,et=e.hiddenUpdates;for(a=M&~a;0<a;){var dt=31-It(a),gt=1<<dt;b[dt]=0,z[dt]=-1;var at=et[dt];if(at!==null)for(et[dt]=null,dt=0;dt<at.length;dt++){var st=at[dt];st!==null&&(st.lane&=-536870913)}a&=~gt}o!==0&&_t(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function _t(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Vt(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function se(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function we(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ee(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:D_(e.type))}function _i(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var hn=Math.random().toString(36).slice(2),dn="__reactFiber$"+hn,Je="__reactProps$"+hn,wi="__reactContainer$"+hn,Rs="__reactEvents$"+hn,el="__reactListeners$"+hn,ws="__reactHandles$"+hn,Fr="__reactResources$"+hn,Ci="__reactMarker$"+hn;function Cs(e){delete e[dn],delete e[Je],delete e[Rs],delete e[el],delete e[ws]}function Hi(e){var n=e[dn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[wi]||a[dn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=m_(e);e!==null;){if(a=e[dn])return a;e=m_(e)}return n}e=a,a=e.parentNode}return null}function fa(e){if(e=e[dn]||e[wi]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ja(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ha(e){var n=e[Fr];return n||(n=e[Fr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ln(e){e[Ci]=!0}var nl=new Set,il={};function w(e,n){j(e,n),j(e+"Capture",n)}function j(e,n){for(il[e]=n,e=0;e<n.length;e++)nl.add(n[e])}var ot=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),lt={},Q={};function Tt(e){return on.call(Q,e)?!0:on.call(lt,e)?!1:ot.test(e)?Q[e]=!0:(lt[e]=!0,!1)}function Ut(e,n,a){if(Tt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ft(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Nt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var $t,ee;function qt(e){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",ee=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+ee}var de=!1;function Te(e,n){if(!e||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var at=st}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(st){at=st}e.call(gt.prototype)}}else{try{throw Error()}catch(st){at=st}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&at&&typeof st.stack=="string")return[st.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],b=d[1];if(M&&b){var z=M.split(`
`),et=b.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===et.length)for(o=z.length-1,u=et.length-1;1<=o&&0<=u&&z[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==et[u]){var dt=`
`+z[o].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=o&&0<=u);break}}}finally{de=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function qe(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Te(e.type,!1);case 11:return Te(e.type.render,!1);case 1:return Te(e.type,!0);case 31:return qt("Activity");default:return""}}function Ne(e){try{var n="";do n+=qe(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function We(e){var n=Jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xe(e){e._valueTracker||(e._valueTracker=We(e))}function Dn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Jt(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function vi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function Sn(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(e,n,a,o,u,d,M,b){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+pe(n)):e.value!==""+pe(n)&&(e.value=""+pe(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Un(e,M,pe(n)):a!=null?Un(e,M,pe(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+pe(b):e.removeAttribute("name")}function In(e,n,a,o,u,d,M,b){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+pe(a):"",n=n!=null?""+pe(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Un(e,n,a){n==="number"&&vi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $e(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+pe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function An(e,n,a){if(n!=null&&(n=""+pe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+pe(a):""}function Ds(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=pe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Vn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Gv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function up(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Gv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function fp(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&up(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&up(e,d,n[d])}function iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return kv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var au=null;function su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,Ls=null;function hp(e){var n=fa(e);if(n&&(e=n.stateNode)){var a=e[Je]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ge(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Je]||null;if(!u)throw Error(s(90));Ge(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Dn(o)}break t;case"textarea":An(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&$e(e,!!a.multiple,n,!1)}}}var ru=!1;function dp(e,n,a){if(ru)return e(n,a);ru=!0;try{var o=e(n);return o}finally{if(ru=!1,(Us!==null||Ls!==null)&&(kl(),Us&&(n=Us,e=Ls,Ls=Us=null,hp(n),e)))for(n=0;n<e.length;n++)hp(e[n])}}function Hr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Je]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Gi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{ou=!1}var da=null,lu=null,sl=null;function pp(){if(sl)return sl;var e,n=lu,a=n.length,o,u="value"in da?da.value:da.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return sl=u.slice(e,1<o?1-o:void 0)}function rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function mp(){return!1}function kn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(d):d[b]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ol:mp,this.isPropagationStopped=mp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=kn(Za),Vr=g({},Za,{view:0,detail:0}),Xv=kn(Vr),cu,uu,kr,cl=g({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(cu=e.screenX-kr.screenX,uu=e.screenY-kr.screenY):uu=cu=0,kr=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),gp=kn(cl),Wv=g({},cl,{dataTransfer:0}),qv=kn(Wv),Yv=g({},Vr,{relatedTarget:0}),fu=kn(Yv),jv=g({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Zv=kn(jv),Kv=g({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qv=kn(Kv),Jv=g({},Za,{data:0}),_p=kn(Jv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ex[e])?!!n[e]:!1}function hu(){return nx}var ix=g({},Vr,{key:function(e){if(e.key){var n=$v[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ax=kn(ix),sx=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=kn(sx),rx=g({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),ox=kn(rx),lx=g({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=kn(lx),ux=g({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fx=kn(ux),hx=g({},Za,{newState:0,oldState:0}),dx=kn(hx),px=[9,13,27,32],du=Gi&&"CompositionEvent"in window,Xr=null;Gi&&"documentMode"in document&&(Xr=document.documentMode);var mx=Gi&&"TextEvent"in window&&!Xr,xp=Gi&&(!du||Xr&&8<Xr&&11>=Xr),yp=" ",Sp=!1;function Mp(e,n){switch(e){case"keyup":return px.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function gx(e,n){switch(e){case"compositionend":return Ep(n);case"keypress":return n.which!==32?null:(Sp=!0,yp);case"textInput":return e=n.data,e===yp&&Sp?null:e;default:return null}}function _x(e,n){if(Ns)return e==="compositionend"||!du&&Mp(e,n)?(e=pp(),sl=lu=da=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xp&&n.locale!=="ko"?null:n.data;default:return null}}var vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!vx[e.type]:n==="textarea"}function bp(e,n,a,o){Us?Ls?Ls.push(o):Ls=[o]:Us=o,n=Zl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Wr=null,qr=null;function xx(e){s_(e,0)}function ul(e){var n=ja(e);if(Dn(n))return e}function Ap(e,n){if(e==="change")return n}var Rp=!1;if(Gi){var pu;if(Gi){var mu="oninput"in document;if(!mu){var wp=document.createElement("div");wp.setAttribute("oninput","return;"),mu=typeof wp.oninput=="function"}pu=mu}else pu=!1;Rp=pu&&(!document.documentMode||9<document.documentMode)}function Cp(){Wr&&(Wr.detachEvent("onpropertychange",Dp),qr=Wr=null)}function Dp(e){if(e.propertyName==="value"&&ul(qr)){var n=[];bp(n,qr,e,su(e)),dp(xx,n)}}function yx(e,n,a){e==="focusin"?(Cp(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",Dp)):e==="focusout"&&Cp()}function Sx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(qr)}function Mx(e,n){if(e==="click")return ul(n)}function Ex(e,n){if(e==="input"||e==="change")return ul(n)}function Tx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Tx;function Yr(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!on.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lp(e,n){var a=Up(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Up(a)}}function Np(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Np(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Op(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vi(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vi(e.document)}return n}function gu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var bx=Gi&&"documentMode"in document&&11>=document.documentMode,Os=null,_u=null,jr=null,vu=!1;function Pp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||Os==null||Os!==vi(o)||(o=Os,"selectionStart"in o&&gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jr&&Yr(jr,o)||(jr=o,o=Zl(_u,"onSelect"),0<o.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Os)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ps={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},xu={},zp={};Gi&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Qa(e){if(xu[e])return xu[e];if(!Ps[e])return e;var n=Ps[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in zp)return xu[e]=n[a];return e}var Ip=Qa("animationend"),Bp=Qa("animationiteration"),Fp=Qa("animationstart"),Ax=Qa("transitionrun"),Rx=Qa("transitionstart"),wx=Qa("transitioncancel"),Hp=Qa("transitionend"),Gp=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function xi(e,n){Gp.set(e,n),w(n,[e])}var Vp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ne(n)},Vp.set(e,n),n)}return{value:e,source:n,stack:Ne(n)}}var ci=[],zs=0,Su=0;function fl(){for(var e=zs,n=Su=zs=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var d=ci[n];if(ci[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&kp(a,u,d)}}function hl(e,n,a,o){ci[zs++]=e,ci[zs++]=n,ci[zs++]=a,ci[zs++]=o,Su|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Mu(e,n,a,o){return hl(e,n,a,o),dl(e)}function Is(e,n){return hl(e,null,null,n),dl(e)}function kp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-It(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function dl(e){if(50<yo)throw yo=0,Cf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Bs={};function Cx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new Cx(e,n,a,o)}function Eu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Xp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function pl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Eu(e)&&(M=1);else if(typeof e=="string")M=Uy(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=Qn(31,a,n,u),e.elementType=R,e.lanes=d,e;case E:return Ja(a.children,u,d,n);case A:M=8,u|=24;break;case S:return e=Qn(12,a,n,u|2),e.elementType=S,e.lanes=d,e;case P:return e=Qn(13,a,n,u),e.elementType=P,e.lanes=d,e;case B:return e=Qn(19,a,n,u),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case x:case L:M=10;break t;case I:M=9;break t;case D:M=11;break t;case H:M=14;break t;case W:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=Qn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function Ja(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Tu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function bu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fs=[],Hs=0,ml=null,gl=0,ui=[],fi=0,$a=null,ki=1,Xi="";function ts(e,n){Fs[Hs++]=gl,Fs[Hs++]=ml,ml=e,gl=n}function Wp(e,n,a){ui[fi++]=ki,ui[fi++]=Xi,ui[fi++]=$a,$a=e;var o=ki;e=Xi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var d=32-It(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,ki=1<<32-It(n)+u|a<<u|o,Xi=d+e}else ki=1<<d|a<<u|o,Xi=e}function Au(e){e.return!==null&&(ts(e,1),Wp(e,1,0))}function Ru(e){for(;e===ml;)ml=Fs[--Hs],Fs[Hs]=null,gl=Fs[--Hs],Fs[Hs]=null;for(;e===$a;)$a=ui[--fi],ui[fi]=null,Xi=ui[--fi],ui[fi]=null,ki=ui[--fi],ui[fi]=null}var Bn=null,tn=null,Re=!1,es=null,Di=!1,wu=Error(s(519));function ns(e){var n=Error(s(418,""));throw Qr(li(n,e)),wu}function qp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[dn]=e,n[Je]=o,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)Se(Mo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),xe(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Ds(n,o.value,o.defaultValue,o.children),xe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||c_(n.textContent,a)?(o.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),o.onScroll!=null&&Se("scroll",n),o.onScrollEnd!=null&&Se("scrollend",n),o.onClick!=null&&(n.onclick=Kl),n=!0):n=!1,n||ns(e)}function Yp(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Bn=Bn.return}}function Zr(e){if(e!==Bn)return!1;if(!Re)return Yp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wf(e.type,e.memoizedProps)),a=!a),a&&tn&&ns(e),Yp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){tn=Si(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}tn=null}}else n===27?(n=tn,Ca(e.type)?(e=Zf,Zf=null,tn=e):tn=n):tn=Bn?Si(e.stateNode.nextSibling):null;return!0}function Kr(){tn=Bn=null,Re=!1}function jp(){var e=es;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),es=null),e}function Qr(e){es===null?es=[e]:es.push(e)}var Cu=$(null),is=null,Wi=null;function pa(e,n,a){yt(Cu,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=Cu.current,vt(Cu)}function Du(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Uu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var b=d;d=u;for(var z=0;z<n.length;z++)if(b.context===n[z]){d.lanes|=a,b=d.alternate,b!==null&&(b.lanes|=a),Du(d.return,a,e),o||(M=null);break t}d=b.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),Du(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Jr(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var b=u.type;Kn(u.pendingProps.value,M.value)||(e!==null?e.push(b):e=[b])}}else if(u===ft.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&Uu(n,e,a,o),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return Zp(is,e)}function vl(e,n){return is===null&&as(e),Zp(e,n)}function Zp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(s(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var Dx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ux=r.unstable_scheduleCallback,Lx=r.unstable_NormalPriority,pn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new Dx,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&Ux(Lx,function(){e.controller.abort()})}var to=null,Nu=0,Gs=0,Vs=null;function Nx(e,n){if(to===null){var a=to=[];Nu=0,Gs=zf(),Vs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Nu++,n.then(Kp,Kp),n}function Kp(){if(--Nu===0&&to!==null){Vs!==null&&(Vs.status="fulfilled");var e=to;to=null,Gs=0,Vs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ox(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Qp=O.S;O.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Nx(e,n),Qp!==null&&Qp(e,n)};var ss=$(null);function Ou(){var e=ss.current;return e!==null?e:Xe.pooledCache}function xl(e,n){n===null?yt(ss,ss.current):yt(ss,n.pool)}function Jp(){var e=Ou();return e===null?null:{parent:pn._currentValue,pool:e}}var eo=Error(s(460)),$p=Error(s(474)),yl=Error(s(542)),Pu={then:function(){}};function tm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sl(){}function em(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Sl,Sl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e;default:if(typeof n.status=="string")n.then(Sl,Sl);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,im(e),e}throw no=n,eo}}var no=null;function nm(){if(no===null)throw Error(s(459));var e=no;return no=null,e}function im(e){if(e===eo||e===yl)throw Error(s(483))}var ma=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=dl(e),kp(e,null,a),n}return hl(e,o,n,a),dl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}function Bu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Fu=!1;function ao(){if(Fu){var e=Vs;if(e!==null)throw e}}function so(e,n,a,o){Fu=!1;var u=e.updateQueue;ma=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var z=b,et=z.next;z.next=null,M===null?d=et:M.next=et,M=z;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,b=dt.lastBaseUpdate,b!==M&&(b===null?dt.firstBaseUpdate=et:b.next=et,dt.lastBaseUpdate=z))}if(d!==null){var gt=u.baseState;M=0,dt=et=z=null,b=d;do{var at=b.lane&-536870913,st=at!==b.lane;if(st?(Me&at)===at:(o&at)===at){at!==0&&at===Gs&&(Fu=!0),dt!==null&&(dt=dt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var ae=e,te=b;at=n;var ze=a;switch(te.tag){case 1:if(ae=te.payload,typeof ae=="function"){gt=ae.call(ze,gt,at);break t}gt=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=te.payload,at=typeof ae=="function"?ae.call(ze,gt,at):ae,at==null)break t;gt=g({},gt,at);break t;case 2:ma=!0}}at=b.callback,at!==null&&(e.flags|=64,st&&(e.flags|=8192),st=u.callbacks,st===null?u.callbacks=[at]:st.push(at))}else st={lane:at,tag:b.tag,payload:b.payload,callback:b.callback,next:null},dt===null?(et=dt=st,z=gt):dt=dt.next=st,M|=at;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;st=b,b=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);dt===null&&(z=gt),u.baseState=z,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),ba|=M,e.lanes=M,e.memoizedState=gt}}function am(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)am(a[e],n)}var ks=$(null),Ml=$(0);function rm(e,n){e=$i,yt(Ml,e),yt(ks,n),$i=e|n.baseLanes}function Hu(){yt(Ml,$i),yt(ks,ks.current)}function Gu(){$i=Ml.current,vt(ks),vt(Ml)}var va=0,_e=null,Oe=null,cn=null,El=!1,Xs=!1,rs=!1,Tl=0,ro=0,Ws=null,Px=0;function an(){throw Error(s(321))}function Vu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function ku(e,n,a,o,u,d){return va=d,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?km:Xm,rs=!1,d=a(o,u),rs=!1,Xs&&(d=lm(n,a,o,u)),om(e),d}function om(e){O.H=Dl;var n=Oe!==null&&Oe.next!==null;if(va=0,cn=Oe=_e=null,El=!1,ro=0,Ws=null,n)throw Error(s(300));e===null||Mn||(e=e.dependencies,e!==null&&_l(e)&&(Mn=!0))}function lm(e,n,a,o){_e=e;var u=0;do{if(Xs&&(Ws=null),ro=0,Xs=!1,25<=u)throw Error(s(301));if(u+=1,cn=Oe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}O.H=Vx,d=n(a,o)}while(Xs);return d}function zx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(_e.flags|=1024),n}function Xu(){var e=Tl!==0;return Tl=0,e}function Wu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qu(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}va=0,cn=Oe=_e=null,Xs=!1,ro=Tl=0,Ws=null}function Xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?_e.memoizedState=cn=e:cn=cn.next=e,cn}function un(){if(Oe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=cn===null?_e.memoizedState:cn.next;if(n!==null)cn=n,Oe=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},cn===null?_e.memoizedState=cn=e:cn=cn.next=e}return cn}function Yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=ro;return ro+=1,Ws===null&&(Ws=[]),e=em(Ws,e,n),n=_e,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?km:Xm),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===L)return Ln(e)}throw Error(s(438,String(e)))}function ju(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Yu(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function Al(e){var n=un();return Zu(n,Oe,e)}function Zu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var b=M=null,z=null,et=n,dt=!1;do{var gt=et.lane&-536870913;if(gt!==et.lane?(Me&gt)===gt:(va&gt)===gt){var at=et.revertLane;if(at===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),gt===Gs&&(dt=!0);else if((va&at)===at){et=et.next,at===Gs&&(dt=!0);continue}else gt={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(b=z=gt,M=d):z=z.next=gt,_e.lanes|=at,ba|=at;gt=et.action,rs&&a(d,gt),d=et.hasEagerState?et.eagerState:a(d,gt)}else at={lane:gt,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},z===null?(b=z=at,M=d):z=z.next=at,_e.lanes|=gt,ba|=gt;et=et.next}while(et!==null&&et!==n);if(z===null?M=d:z.next=b,!Kn(d,e.memoizedState)&&(Mn=!0,dt&&(a=Vs,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Ku(e){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Kn(d,n.memoizedState)||(Mn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function cm(e,n,a){var o=_e,u=un(),d=Re;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!Kn((Oe||u).memoizedState,a);M&&(u.memoizedState=a,Mn=!0),u=u.queue;var b=hm.bind(null,o,u,e);if(lo(2048,8,b,[e]),u.getSnapshot!==n||M||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,qs(9,Rl(),fm.bind(null,o,u,a,n),null),Xe===null)throw Error(s(349));d||(va&124)!==0||um(o,n,a)}return a}function um(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Yu(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function fm(e,n,a,o){n.value=a,n.getSnapshot=o,dm(n)&&pm(e)}function hm(e,n,a){return a(function(){dm(n)&&pm(e)})}function dm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function pm(e){var n=Is(e,2);n!==null&&ni(n,e,2)}function Qu(e){var n=Xn();if(typeof e=="function"){var a=e;if(e=a(),rs){ct(!0);try{a()}finally{ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function mm(e,n,a,o){return e.baseState=a,Zu(e,Oe,typeof o=="function"?o:Yi)}function Ix(e,n,a,o,u){if(Cl(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};O.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,gm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function gm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=O.T,M={};O.T=M;try{var b=a(u,o),z=O.S;z!==null&&z(M,b),_m(e,n,b)}catch(et){Ju(e,n,et)}finally{O.T=d}}else try{d=a(u,o),_m(e,n,d)}catch(et){Ju(e,n,et)}}function _m(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){vm(e,n,o)},function(o){return Ju(e,n,o)}):vm(e,n,a)}function vm(e,n,a){n.status="fulfilled",n.value=a,xm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,gm(e,a)))}function Ju(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==o)}e.action=null}function xm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ym(e,n){return n}function Sm(e,n){if(Re){var a=Xe.formState;if(a!==null){t:{var o=_e;if(Re){if(tn){e:{for(var u=tn,d=Di;u.nodeType!==8;){if(!d){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){tn=Si(u.nextSibling),o=u.data==="F!";break t}}ns(o)}o=!1}o&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},a.queue=o,a=Hm.bind(null,_e,o),o.dispatch=a,o=Qu(!1),d=af.bind(null,_e,!1,o.queue),o=Xn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Ix.bind(null,_e,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Mm(e){var n=un();return Em(n,Oe,e)}function Em(e,n,a){if(n=Zu(e,n,ym)[0],e=Al(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(M){throw M===eo?yl:M}else o=n;n=un();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,qs(9,Rl(),Bx.bind(null,u,a),null)),[o,d,e]}function Bx(e,n){e.action=n}function Tm(e){var n=un(),a=Oe;if(a!==null)return Em(n,a,e);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function qs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Yu(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Rl(){return{destroy:void 0,resource:void 0}}function bm(){return un().memoizedState}function wl(e,n,a,o){var u=Xn();o=o===void 0?null:o,_e.flags|=e,u.memoizedState=qs(1|n,Rl(),a,o)}function lo(e,n,a,o){var u=un();o=o===void 0?null:o;var d=u.memoizedState.inst;Oe!==null&&o!==null&&Vu(o,Oe.memoizedState.deps)?u.memoizedState=qs(n,d,a,o):(_e.flags|=e,u.memoizedState=qs(1|n,d,a,o))}function Am(e,n){wl(8390656,8,e,n)}function Rm(e,n){lo(2048,8,e,n)}function wm(e,n){return lo(4,2,e,n)}function Cm(e,n){return lo(4,4,e,n)}function Dm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Um(e,n,a){a=a!=null?a.concat([e]):null,lo(4,4,Dm.bind(null,n,e),a)}function $u(){}function Lm(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Vu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Nm(e,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Vu(n,o[1]))return o[0];if(o=e(),rs){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o}function tf(e,n,a){return a===void 0||(va&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=zg(),_e.lanes|=e,ba|=e,a)}function Om(e,n,a,o){return Kn(a,n)?a:ks.current!==null?(e=tf(e,a,o),Kn(e,n)||(Mn=!0),e):(va&42)===0?(Mn=!0,e.memoizedState=a):(e=zg(),_e.lanes|=e,ba|=e,n)}function Pm(e,n,a,o,u){var d=Y.p;Y.p=d!==0&&8>d?d:8;var M=O.T,b={};O.T=b,af(e,!1,n,a);try{var z=u(),et=O.S;if(et!==null&&et(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var dt=Ox(z,o);co(e,n,dt,ei(e))}else co(e,n,o,ei(e))}catch(gt){co(e,n,{then:function(){},status:"rejected",reason:gt},ei())}finally{Y.p=d,O.T=M}}function Fx(){}function ef(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=zm(e).queue;Pm(e,u,n,Z,a===null?Fx:function(){return Im(e),a(o)})}function zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:Z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Im(e){var n=zm(e).next.queue;co(e,n,{},ei())}function nf(){return Ln(wo)}function Bm(){return un().memoizedState}function Fm(){return un().memoizedState}function Hx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=ga(a);var o=_a(n,e,a);o!==null&&(ni(o,n,a),io(o,n,a)),n={cache:Lu()},e.payload=n;return}n=n.return}}function Gx(e,n,a){var o=ei();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?Gm(n,a):(a=Mu(e,n,a,o),a!==null&&(ni(a,e,o),Vm(a,n,o)))}function Hm(e,n,a){var o=ei();co(e,n,a,o)}function co(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))Gm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,b=d(M,a);if(u.hasEagerState=!0,u.eagerState=b,Kn(b,M))return hl(e,n,u,0),Xe===null&&fl(),!1}catch{}finally{}if(a=Mu(e,n,u,o),a!==null)return ni(a,e,o),Vm(a,n,o),!0}return!1}function af(e,n,a,o){if(o={lane:2,revertLane:zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(s(479))}else n=Mu(e,a,o,2),n!==null&&ni(n,e,2)}function Cl(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function Gm(e,n){Xs=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Vt(e,a)}}var Dl={readContext:Ln,use:bl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},km={readContext:Ln,use:bl,useCallback:function(e,n){return Xn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:Am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,Dm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=Xn();n=n===void 0?null:n;var o=e();if(rs){ct(!0);try{e()}finally{ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Xn();if(a!==void 0){var u=a(n);if(rs){ct(!0);try{a(n)}finally{ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Gx.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=Xn();return e={current:e},n.memoizedState=e},useState:function(e){e=Qu(e);var n=e.queue,a=Hm.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:$u,useDeferredValue:function(e,n){var a=Xn();return tf(a,e,n)},useTransition:function(){var e=Qu(!1);return e=Pm.bind(null,_e,e.queue,!0,!1),Xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=Xn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(Me&124)!==0||um(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Am(hm.bind(null,o,d,e),[e]),o.flags|=2048,qs(9,Rl(),fm.bind(null,o,d,a,n),null),a},useId:function(){var e=Xn(),n=Xe.identifierPrefix;if(Re){var a=Xi,o=ki;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Px++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:nf,useFormState:Sm,useActionState:Sm,useOptimistic:function(e){var n=Xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=af.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:ju,useCacheRefresh:function(){return Xn().memoizedState=Hx.bind(null,_e)}},Xm={readContext:Ln,use:bl,useCallback:Lm,useContext:Ln,useEffect:Rm,useImperativeHandle:Um,useInsertionEffect:wm,useLayoutEffect:Cm,useMemo:Nm,useReducer:Al,useRef:bm,useState:function(){return Al(Yi)},useDebugValue:$u,useDeferredValue:function(e,n){var a=un();return Om(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Al(Yi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:nf,useFormState:Mm,useActionState:Mm,useOptimistic:function(e,n){var a=un();return mm(a,Oe,e,n)},useMemoCache:ju,useCacheRefresh:Fm},Vx={readContext:Ln,use:bl,useCallback:Lm,useContext:Ln,useEffect:Rm,useImperativeHandle:Um,useInsertionEffect:wm,useLayoutEffect:Cm,useMemo:Nm,useReducer:Ku,useRef:bm,useState:function(){return Ku(Yi)},useDebugValue:$u,useDeferredValue:function(e,n){var a=un();return Oe===null?tf(a,e,n):Om(a,Oe.memoizedState,e,n)},useTransition:function(){var e=Ku(Yi)[0],n=un().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:nf,useFormState:Tm,useActionState:Tm,useOptimistic:function(e,n){var a=un();return Oe!==null?mm(a,Oe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ju,useCacheRefresh:Fm},Ys=null,uo=0;function Ul(e){var n=uo;return uo+=1,Ys===null&&(Ys=[]),em(Ys,e,n)}function fo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ll(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wm(e){var n=e._init;return n(e._payload)}function qm(e){function n(K,k){if(e){var tt=K.deletions;tt===null?(K.deletions=[k],K.flags|=16):tt.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function o(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=Vi(K,k),K.index=0,K.sibling=null,K}function d(K,k,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<k?(K.flags|=67108866,k):tt):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function M(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function b(K,k,tt,pt){return k===null||k.tag!==6?(k=Tu(tt,K.mode,pt),k.return=K,k):(k=u(k,tt),k.return=K,k)}function z(K,k,tt,pt){var Gt=tt.type;return Gt===E?dt(K,k,tt.props.children,pt,tt.key):k!==null&&(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===W&&Wm(Gt)===k.type)?(k=u(k,tt.props),fo(k,tt),k.return=K,k):(k=pl(tt.type,tt.key,tt.props,null,K.mode,pt),fo(k,tt),k.return=K,k)}function et(K,k,tt,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=bu(tt,K.mode,pt),k.return=K,k):(k=u(k,tt.children||[]),k.return=K,k)}function dt(K,k,tt,pt,Gt){return k===null||k.tag!==7?(k=Ja(tt,K.mode,pt,Gt),k.return=K,k):(k=u(k,tt),k.return=K,k)}function gt(K,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Tu(""+k,K.mode,tt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return tt=pl(k.type,k.key,k.props,null,K.mode,tt),fo(tt,k),tt.return=K,tt;case y:return k=bu(k,K.mode,tt),k.return=K,k;case W:var pt=k._init;return k=pt(k._payload),gt(K,k,tt)}if(rt(k)||q(k))return k=Ja(k,K.mode,tt,null),k.return=K,k;if(typeof k.then=="function")return gt(K,Ul(k),tt);if(k.$$typeof===L)return gt(K,vl(K,k),tt);Ll(K,k)}return null}function at(K,k,tt,pt){var Gt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Gt!==null?null:b(K,k,""+tt,pt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case v:return tt.key===Gt?z(K,k,tt,pt):null;case y:return tt.key===Gt?et(K,k,tt,pt):null;case W:return Gt=tt._init,tt=Gt(tt._payload),at(K,k,tt,pt)}if(rt(tt)||q(tt))return Gt!==null?null:dt(K,k,tt,pt,null);if(typeof tt.then=="function")return at(K,k,Ul(tt),pt);if(tt.$$typeof===L)return at(K,k,vl(K,tt),pt);Ll(K,tt)}return null}function st(K,k,tt,pt,Gt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return K=K.get(tt)||null,b(k,K,""+pt,Gt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case v:return K=K.get(pt.key===null?tt:pt.key)||null,z(k,K,pt,Gt);case y:return K=K.get(pt.key===null?tt:pt.key)||null,et(k,K,pt,Gt);case W:var ve=pt._init;return pt=ve(pt._payload),st(K,k,tt,pt,Gt)}if(rt(pt)||q(pt))return K=K.get(tt)||null,dt(k,K,pt,Gt,null);if(typeof pt.then=="function")return st(K,k,tt,Ul(pt),Gt);if(pt.$$typeof===L)return st(K,k,tt,vl(k,pt),Gt);Ll(k,pt)}return null}function ae(K,k,tt,pt){for(var Gt=null,ve=null,Kt=k,ne=k=0,Tn=null;Kt!==null&&ne<tt.length;ne++){Kt.index>ne?(Tn=Kt,Kt=null):Tn=Kt.sibling;var be=at(K,Kt,tt[ne],pt);if(be===null){Kt===null&&(Kt=Tn);break}e&&Kt&&be.alternate===null&&n(K,Kt),k=d(be,k,ne),ve===null?Gt=be:ve.sibling=be,ve=be,Kt=Tn}if(ne===tt.length)return a(K,Kt),Re&&ts(K,ne),Gt;if(Kt===null){for(;ne<tt.length;ne++)Kt=gt(K,tt[ne],pt),Kt!==null&&(k=d(Kt,k,ne),ve===null?Gt=Kt:ve.sibling=Kt,ve=Kt);return Re&&ts(K,ne),Gt}for(Kt=o(Kt);ne<tt.length;ne++)Tn=st(Kt,K,ne,tt[ne],pt),Tn!==null&&(e&&Tn.alternate!==null&&Kt.delete(Tn.key===null?ne:Tn.key),k=d(Tn,k,ne),ve===null?Gt=Tn:ve.sibling=Tn,ve=Tn);return e&&Kt.forEach(function(Oa){return n(K,Oa)}),Re&&ts(K,ne),Gt}function te(K,k,tt,pt){if(tt==null)throw Error(s(151));for(var Gt=null,ve=null,Kt=k,ne=k=0,Tn=null,be=tt.next();Kt!==null&&!be.done;ne++,be=tt.next()){Kt.index>ne?(Tn=Kt,Kt=null):Tn=Kt.sibling;var Oa=at(K,Kt,be.value,pt);if(Oa===null){Kt===null&&(Kt=Tn);break}e&&Kt&&Oa.alternate===null&&n(K,Kt),k=d(Oa,k,ne),ve===null?Gt=Oa:ve.sibling=Oa,ve=Oa,Kt=Tn}if(be.done)return a(K,Kt),Re&&ts(K,ne),Gt;if(Kt===null){for(;!be.done;ne++,be=tt.next())be=gt(K,be.value,pt),be!==null&&(k=d(be,k,ne),ve===null?Gt=be:ve.sibling=be,ve=be);return Re&&ts(K,ne),Gt}for(Kt=o(Kt);!be.done;ne++,be=tt.next())be=st(Kt,K,ne,be.value,pt),be!==null&&(e&&be.alternate!==null&&Kt.delete(be.key===null?ne:be.key),k=d(be,k,ne),ve===null?Gt=be:ve.sibling=be,ve=be);return e&&Kt.forEach(function(ky){return n(K,ky)}),Re&&ts(K,ne),Gt}function ze(K,k,tt,pt){if(typeof tt=="object"&&tt!==null&&tt.type===E&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case v:t:{for(var Gt=tt.key;k!==null;){if(k.key===Gt){if(Gt=tt.type,Gt===E){if(k.tag===7){a(K,k.sibling),pt=u(k,tt.props.children),pt.return=K,K=pt;break t}}else if(k.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===W&&Wm(Gt)===k.type){a(K,k.sibling),pt=u(k,tt.props),fo(pt,tt),pt.return=K,K=pt;break t}a(K,k);break}else n(K,k);k=k.sibling}tt.type===E?(pt=Ja(tt.props.children,K.mode,pt,tt.key),pt.return=K,K=pt):(pt=pl(tt.type,tt.key,tt.props,null,K.mode,pt),fo(pt,tt),pt.return=K,K=pt)}return M(K);case y:t:{for(Gt=tt.key;k!==null;){if(k.key===Gt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(K,k.sibling),pt=u(k,tt.children||[]),pt.return=K,K=pt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}pt=bu(tt,K.mode,pt),pt.return=K,K=pt}return M(K);case W:return Gt=tt._init,tt=Gt(tt._payload),ze(K,k,tt,pt)}if(rt(tt))return ae(K,k,tt,pt);if(q(tt)){if(Gt=q(tt),typeof Gt!="function")throw Error(s(150));return tt=Gt.call(tt),te(K,k,tt,pt)}if(typeof tt.then=="function")return ze(K,k,Ul(tt),pt);if(tt.$$typeof===L)return ze(K,k,vl(K,tt),pt);Ll(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(K,k.sibling),pt=u(k,tt),pt.return=K,K=pt):(a(K,k),pt=Tu(tt,K.mode,pt),pt.return=K,K=pt),M(K)):a(K,k)}return function(K,k,tt,pt){try{uo=0;var Gt=ze(K,k,tt,pt);return Ys=null,Gt}catch(Kt){if(Kt===eo||Kt===yl)throw Kt;var ve=Qn(29,Kt,null,K.mode);return ve.lanes=pt,ve.return=K,ve}finally{}}}var js=qm(!0),Ym=qm(!1),hi=$(null),Ui=null;function xa(e){var n=e.alternate;yt(mn,mn.current&1),yt(hi,e),Ui===null&&(n===null||ks.current!==null||n.memoizedState!==null)&&(Ui=e)}function jm(e){if(e.tag===22){if(yt(mn,mn.current),yt(hi,e),Ui===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ui=e)}}else ya()}function ya(){yt(mn,mn.current),yt(hi,hi.current)}function ji(e){vt(hi),Ui===e&&(Ui=null),vt(mn)}var mn=$(0);function Nl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||jf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ei(),u=ga(o);u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,o),n!==null&&(ni(n,e,o),io(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ei(),u=ga(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=_a(e,u,o),n!==null&&(ni(n,e,o),io(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),o=ga(a);o.tag=2,n!=null&&(o.callback=n),n=_a(e,o,a),n!==null&&(ni(n,e,a),io(n,e,a))}};function Zm(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,o)||!Yr(u,d):!0}function Km(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&rf.enqueueReplaceState(n,n.state,null)}function os(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Ol=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Qm(e){Ol(e)}function Jm(e){console.error(e)}function $m(e){Ol(e)}function Pl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function tg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(e,n,a){return a=ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,n)},a}function eg(e){return e=ga(e),e.tag=3,e}function ng(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){tg(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){tg(n,a,o),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function kx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 13:return Ui===null?Uf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Nf(e,o,u)),!1;case 22:return a.flags|=65536,o===Pu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Nf(e,o,u)),!1}throw Error(s(435,a.tag))}return Nf(e,o,u),Uf(),!1}if(Re)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==wu&&(e=Error(s(422),{cause:o}),Qr(li(e,a)))):(o!==wu&&(n=Error(s(423),{cause:o}),Qr(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=of(e.stateNode,o,u),Bu(e,u),en!==4&&(en=2)),!1;var d=Error(s(520),{cause:o});if(d=li(d,a),xo===null?xo=[d]:xo.push(d),en!==4&&(en=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=of(a.stateNode,o,e),Bu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Aa===null||!Aa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=eg(u),ng(u,e,a,o),Bu(a,u),!1}a=a.return}while(a!==null);return!1}var ig=Error(s(461)),Mn=!1;function Rn(e,n,a,o){n.child=e===null?Ym(n,null,a,o):js(n,e.child,a,o)}function ag(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var b in o)b!=="ref"&&(M[b]=o[b])}else M=o;return as(n),o=ku(e,n,a,M,d,u),b=Xu(),e!==null&&!Mn?(Wu(e,n,u),Zi(e,n,u)):(Re&&b&&Au(n),n.flags|=1,Rn(e,n,o,u),n.child)}function sg(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Eu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,rg(e,n,d,o,u)):(e=pl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!mf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(M,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=Vi(d,o),e.ref=n.ref,e.return=n,n.child=e}function rg(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(Yr(d,o)&&e.ref===n.ref)if(Mn=!1,n.pendingProps=o=d,mf(e,u))(e.flags&131072)!==0&&(Mn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return lf(e,n,a,o,u)}function og(e,n,a){var o=n.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=n.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return lg(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xl(n,d!==null?d.cachePool:null),d!==null?rm(n,d):Hu(),jm(n);else return n.lanes=n.childLanes=536870912,lg(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(xl(n,d.cachePool),rm(n,d),ya(),n.memoizedState=null):(e!==null&&xl(n,null),Hu(),ya());return Rn(e,n,u,a),n.child}function lg(e,n,a,o){var u=Ou();return u=u===null?null:{parent:pn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&xl(n,null),Hu(),jm(n),e!==null&&Jr(e,n,o,!0),null}function zl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function lf(e,n,a,o,u){return as(n),a=ku(e,n,a,o,void 0,u),o=Xu(),e!==null&&!Mn?(Wu(e,n,u),Zi(e,n,u)):(Re&&o&&Au(n),n.flags|=1,Rn(e,n,a,u),n.child)}function cg(e,n,a,o,u,d){return as(n),n.updateQueue=null,a=lm(n,o,a,u),om(e),o=Xu(),e!==null&&!Mn?(Wu(e,n,d),Zi(e,n,d)):(Re&&o&&Au(n),n.flags|=1,Rn(e,n,a,d),n.child)}function ug(e,n,a,o,u){if(as(n),n.stateNode===null){var d=Bs,M=a.contextType;typeof M=="object"&&M!==null&&(d=Ln(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=rf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},zu(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Ln(M):Bs,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(sf(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&rf.enqueueReplaceState(d,d.state,null),so(n,o,d,u),ao(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var b=n.memoizedProps,z=os(a,b);d.props=z;var et=d.context,dt=a.contextType;M=Bs,typeof dt=="object"&&dt!==null&&(M=Ln(dt));var gt=a.getDerivedStateFromProps;dt=typeof gt=="function"||typeof d.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b||et!==M)&&Km(n,d,o,M),ma=!1;var at=n.memoizedState;d.state=at,so(n,o,d,u),ao(),et=n.memoizedState,b||at!==et||ma?(typeof gt=="function"&&(sf(n,a,gt,o),et=n.memoizedState),(z=ma||Zm(n,a,z,o,at,et,M))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),d.props=o,d.state=et,d.context=M,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Iu(e,n),M=n.memoizedProps,dt=os(a,M),d.props=dt,gt=n.pendingProps,at=d.context,et=a.contextType,z=Bs,typeof et=="object"&&et!==null&&(z=Ln(et)),b=a.getDerivedStateFromProps,(et=typeof b=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==gt||at!==z)&&Km(n,d,o,z),ma=!1,at=n.memoizedState,d.state=at,so(n,o,d,u),ao();var st=n.memoizedState;M!==gt||at!==st||ma||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof b=="function"&&(sf(n,a,b,o),st=n.memoizedState),(dt=ma||Zm(n,a,dt,o,at,st,z)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,st,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,st,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=st),d.props=o,d.state=st,d.context=z,o=dt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,zl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=js(n,e.child,null,u),n.child=js(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Zi(e,n,u),e}function fg(e,n,a,o){return Kr(),n.flags|=256,Rn(e,n,a,o),n.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(e){return{baseLanes:e,cachePool:Jp()}}function ff(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function hg(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?xa(n):ya(),Re){var b=tn,z;if(z=b){t:{for(z=b,b=Di;z.nodeType!==8;){if(!b){b=null;break t}if(z=Si(z.nextSibling),z===null){b=null;break t}}b=z}b!==null?(n.memoizedState={dehydrated:b,treeContext:$a!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},z=Qn(18,null,null,0),z.stateNode=b,z.return=n,n.child=z,Bn=n,tn=null,z=!0):z=!1}z||ns(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return jf(b)?n.lanes=32:n.lanes=536870912,null;ji(n)}return b=o.children,o=o.fallback,u?(ya(),u=n.mode,b=Il({mode:"hidden",children:b},u),o=Ja(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,u=n.child,u.memoizedState=uf(a),u.childLanes=ff(e,M,a),n.memoizedState=cf,o):(xa(n),hf(n,b))}if(z=e.memoizedState,z!==null&&(b=z.dehydrated,b!==null)){if(d)n.flags&256?(xa(n),n.flags&=-257,n=df(e,n,a)):n.memoizedState!==null?(ya(),n.child=e.child,n.flags|=128,n=null):(ya(),u=o.fallback,b=n.mode,o=Il({mode:"visible",children:o.children},b),u=Ja(u,b,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,js(n,e.child,null,a),o=n.child,o.memoizedState=uf(a),o.childLanes=ff(e,M,a),n.memoizedState=cf,n=u);else if(xa(n),jf(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var et=M.dgst;M=et,o=Error(s(419)),o.stack="",o.digest=M,Qr({value:o,source:null,stack:null}),n=df(e,n,a)}else if(Mn||Jr(e,n,a,!1),M=(a&e.childLanes)!==0,Mn||M){if(M=Xe,M!==null&&(o=a&-a,o=(o&42)!==0?1:se(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,Is(e,o),ni(M,e,o),ig;b.data==="$?"||Uf(),n=df(e,n,a)}else b.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,tn=Si(b.nextSibling),Bn=n,Re=!0,es=null,Di=!1,e!==null&&(ui[fi++]=ki,ui[fi++]=Xi,ui[fi++]=$a,ki=e.id,Xi=e.overflow,$a=n),n=hf(n,o.children),n.flags|=4096);return n}return u?(ya(),u=o.fallback,b=n.mode,z=e.child,et=z.sibling,o=Vi(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,et!==null?u=Vi(et,u):(u=Ja(u,b,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,b=e.child.memoizedState,b===null?b=uf(a):(z=b.cachePool,z!==null?(et=pn._currentValue,z=z.parent!==et?{parent:et,pool:et}:z):z=Jp(),b={baseLanes:b.baseLanes|a,cachePool:z}),u.memoizedState=b,u.childLanes=ff(e,M,a),n.memoizedState=cf,o):(xa(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function hf(e,n){return n=Il({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Il(e,n){return e=Qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function df(e,n,a){return js(n,e.child,null,a),e=hf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dg(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Du(e.return,n,a)}function pf(e,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function pg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Rn(e,n,o.children,a),o=mn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,a,n);else if(e.tag===19)dg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(mn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Nl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),pf(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Nl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}pf(n,!0,a,null,d);break;case"together":pf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Jr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function Xx(e,n,a){switch(n.tag){case 3:St(n,n.stateNode.containerInfo),pa(n,pn,e.memoizedState.cache),Kr();break;case 27:case 5:Yt(n);break;case 4:St(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?hg(e,n,a):(xa(n),e=Zi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Jr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return pg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(mn,mn.current),o)break;return null;case 22:case 23:return n.lanes=0,og(e,n,a);case 24:pa(n,pn,e.memoizedState.cache)}return Zi(e,n,a)}function mg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Mn=!0;else{if(!mf(e,a)&&(n.flags&128)===0)return Mn=!1,Xx(e,n,a);Mn=(e.flags&131072)!==0}else Mn=!1,Re&&(n.flags&1048576)!==0&&Wp(n,gl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Eu(o)?(e=os(o,e),n.tag=1,n=ug(null,n,o,e,a)):(n.tag=0,n=lf(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=ag(null,n,o,e,a);break t}else if(u===H){n.tag=14,n=sg(null,n,o,e,a);break t}}throw n=ut(o)||o,Error(s(306,n,""))}}return n;case 0:return lf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=os(o,n.pendingProps),ug(e,n,o,u,a);case 3:t:{if(St(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Iu(e,n),so(n,o,null,a);var M=n.memoizedState;if(o=M.cache,pa(n,pn,o),o!==d.cache&&Uu(n,[pn],a,!0),ao(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=fg(e,n,o,a);break t}else if(o!==u){u=li(Error(s(424)),n),Qr(u),n=fg(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(tn=Si(e.firstChild),Bn=n,Re=!0,es=null,Di=!0,a=Ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Kr(),o===u){n=Zi(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return zl(e,n),e===null?(a=x_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,o=Ql(J.current).createElement(a),o[dn]=n,o[Je]=e,Cn(o,a,e),ln(o),n.stateNode=o):n.memoizedState=x_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Yt(n),e===null&&Re&&(o=n.stateNode=g_(n.type,n.pendingProps,J.current),Bn=n,Di=!0,u=tn,Ca(n.type)?(Zf=u,tn=Si(o.firstChild)):tn=u),Rn(e,n,n.pendingProps.children,a),zl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=o=tn)&&(o=vy(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,Bn=n,tn=Si(o.firstChild),Di=!1,u=!0):u=!1),u||ns(n)),Yt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,Wf(u,d)?o=null:M!==null&&Wf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=ku(e,n,zx,null,null,a),wo._currentValue=u),zl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&Re&&((e=a=tn)&&(a=xy(a,n.pendingProps,Di),a!==null?(n.stateNode=a,Bn=n,tn=null,e=!0):e=!1),e||ns(n)),null;case 13:return hg(e,n,a);case 4:return St(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=js(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return ag(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,pa(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,as(n),u=Ln(u),o=o(u),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return sg(e,n,n.type,n.pendingProps,a);case 15:return rg(e,n,n.type,n.pendingProps,a);case 19:return pg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Il(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Vi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return og(e,n,a);case 24:return as(n),o=Ln(pn),e===null?(u=Ou(),u===null&&(u=Xe,d=Lu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},zu(n),pa(n,pn,u)):((e.lanes&a)!==0&&(Iu(e,n),so(n,null,null,a),ao()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),pa(n,pn,o)):(o=d.cache,pa(n,pn,o),o!==u.cache&&Uu(n,[pn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ki(e){e.flags|=4}function gg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!T_(n)){if(n=hi.current,n!==null&&((Me&4194048)===Me?Ui!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==Ui))throw no=Pu,$p;e.flags|=8192}}function Bl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?bt():536870912,e.lanes|=n,Js|=n)}function ho(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Wx(e,n,a){var o=n.pendingProps;switch(Ru(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(pn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zr(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,jp())),Qe(n),null;case 26:return a=n.memoizedState,e===null?(Ki(n),a!==null?(Qe(n),gg(n,a)):(Qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ki(n),Qe(n),gg(n,a)):(Qe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ki(n),Qe(n),n.flags&=-16777217),null;case 27:ge(n),a=J.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}e=Ct.current,Zr(n)?qp(n):(e=g_(u,o,a),n.stateNode=e,Ki(n))}return Qe(n),null;case 5:if(ge(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qe(n),null}if(e=Ct.current,Zr(n))qp(n);else{switch(u=Ql(J.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[dn]=n,e[Je]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Cn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(n)}}return Qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=J.current,Zr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[dn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||c_(e.nodeValue,a)),e||ns(n)}else e=Ql(e).createTextNode(o),e[dn]=n,n.stateNode=e}return Qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Zr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[dn]=n}else Kr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=jp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Bl(n,n.updateQueue),Qe(n),null;case 4:return Zt(),e===null&&Hf(n.stateNode.containerInfo),Qe(n),null;case 10:return qi(n.type),Qe(n),null;case 19:if(vt(mn),u=n.memoizedState,u===null)return Qe(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)ho(u,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Nl(e),d!==null){for(n.flags|=128,ho(u,!1),e=d.updateQueue,n.updateQueue=e,Bl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Xp(a,e),a=a.sibling;return yt(mn,mn.current&1|2),n.child}e=e.sibling}u.tail!==null&&zt()>Gl&&(n.flags|=128,o=!0,ho(u,!1),n.lanes=4194304)}else{if(!o)if(e=Nl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Bl(n,e),ho(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Re)return Qe(n),null}else 2*zt()-u.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,o=!0,ho(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(e=u.last,e!==null?e.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=zt(),n.sibling=null,e=mn.current,yt(mn,o?e&1|2:e&1),n):(Qe(n),null);case 22:case 23:return ji(n),Gu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Bl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&vt(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(pn),Qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function qx(e,n){switch(Ru(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(pn),Zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ge(n),null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Kr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return vt(mn),null;case 4:return Zt(),null;case 10:return qi(n.type),null;case 22:case 23:return ji(n),Gu(),e!==null&&vt(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(pn),null;case 25:return null;default:return null}}function _g(e,n){switch(Ru(n),n.tag){case 3:qi(pn),Zt();break;case 26:case 27:case 5:ge(n);break;case 4:Zt();break;case 13:ji(n);break;case 19:vt(mn);break;case 10:qi(n.type);break;case 22:case 23:ji(n),Gu(),e!==null&&vt(ss);break;case 24:qi(pn)}}function po(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(b){Ve(n,n.return,b)}}function Sa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,u=n;var z=a,et=b;try{et()}catch(dt){Ve(u,z,dt)}}}o=o.next}while(o!==d)}}catch(dt){Ve(n,n.return,dt)}}function vg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{sm(n,a)}catch(o){Ve(e,e.return,o)}}}function xg(e,n,a){a.props=os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Li(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function yg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function gf(e,n,a){try{var o=e.stateNode;dy(o,e.type,a,n),o[Je]=n}catch(u){Ve(e,e.return,u)}}function Sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function _f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Kl));else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(vf(e,n,a),e=e.sibling;e!==null;)vf(e,n,a),e=e.sibling}function Fl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fl(e,n,a),e=e.sibling;e!==null;)Fl(e,n,a),e=e.sibling}function Mg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[dn]=e,n[Je]=a}catch(d){Ve(e,e.return,d)}}var Qi=!1,sn=!1,xf=!1,Eg=typeof WeakSet=="function"?WeakSet:Set,En=null;function Yx(e,n){if(e=e.containerInfo,kf=ic,e=Op(e),gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,b=-1,z=-1,et=0,dt=0,gt=e,at=null;e:for(;;){for(var st;gt!==a||u!==0&&gt.nodeType!==3||(b=M+u),gt!==d||o!==0&&gt.nodeType!==3||(z=M+o),gt.nodeType===3&&(M+=gt.nodeValue.length),(st=gt.firstChild)!==null;)at=gt,gt=st;for(;;){if(gt===e)break e;if(at===a&&++et===u&&(b=M),at===d&&++dt===o&&(z=M),(st=gt.nextSibling)!==null)break;gt=at,at=gt.parentNode}gt=st}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xf={focusedElem:e,selectionRange:a},ic=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ae=os(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ae,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ve(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function Tg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ma(e,a),o&4&&po(5,a);break;case 1:if(Ma(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ve(a,a.return,M)}else{var u=os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ve(a,a.return,M)}}o&64&&vg(a),o&512&&mo(a,a.return);break;case 3:if(Ma(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{sm(e,n)}catch(M){Ve(a,a.return,M)}}break;case 27:n===null&&o&4&&Mg(a);case 26:case 5:Ma(e,a),n===null&&o&4&&yg(a),o&512&&mo(a,a.return);break;case 12:Ma(e,a);break;case 13:Ma(e,a),o&4&&Rg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ny.bind(null,a),yy(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||sn,u=Qi;var d=sn;Qi=o,(sn=n)&&!d?Ea(e,a,(a.subtreeFlags&8772)!==0):Ma(e,a),Qi=u,sn=d}break;case 30:break;default:Ma(e,a)}}function bg(e){var n=e.alternate;n!==null&&(e.alternate=null,bg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Cs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Wn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)Ag(e,n,a),a=a.sibling}function Ag(e,n,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:sn||Li(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Li(a,n);var o=Ye,u=Wn;Ca(a.type)&&(Ye=a.stateNode,Wn=!1),Ji(e,n,a),To(a.stateNode),Ye=o,Wn=u;break;case 5:sn||Li(a,n);case 6:if(o=Ye,u=Wn,Ye=null,Ji(e,n,a),Ye=o,Wn=u,Ye!==null)if(Wn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(d){Ve(a,n,d)}else try{Ye.removeChild(a.stateNode)}catch(d){Ve(a,n,d)}break;case 18:Ye!==null&&(Wn?(e=Ye,p_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Lo(e)):p_(Ye,a.stateNode));break;case 4:o=Ye,u=Wn,Ye=a.stateNode.containerInfo,Wn=!0,Ji(e,n,a),Ye=o,Wn=u;break;case 0:case 11:case 14:case 15:sn||Sa(2,a,n),sn||Sa(4,a,n),Ji(e,n,a);break;case 1:sn||(Li(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&xg(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:sn=(o=sn)||a.memoizedState!==null,Ji(e,n,a),sn=o;break;default:Ji(e,n,a)}}function Rg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(a){Ve(n,n.return,a)}}function jx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Eg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Eg),n;default:throw Error(s(435,e.tag))}}function yf(e,n){var a=jx(e);n.forEach(function(o){var u=iy.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,b=M;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){Ye=b.stateNode,Wn=!1;break t}break;case 5:Ye=b.stateNode,Wn=!1;break t;case 3:case 4:Ye=b.stateNode.containerInfo,Wn=!0;break t}b=b.return}if(Ye===null)throw Error(s(160));Ag(d,M,u),Ye=null,Wn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)wg(n,e),n=n.sibling}var yi=null;function wg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(n,e),$n(e),o&4&&(Sa(3,e,e.return),po(3,e),Sa(5,e,e.return));break;case 1:Jn(n,e),$n(e),o&512&&(sn||a===null||Li(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=yi;if(Jn(n,e),$n(e),o&512&&(sn||a===null||Li(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ci]||d[dn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[dn]=e,ln(d),o=d;break t;case"link":var M=M_("link","href",u).get(o+(a.href||""));if(M){for(var b=0;b<M.length;b++)if(d=M[b],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(b,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=M_("meta","content",u).get(o+(a.content||""))){for(b=0;b<M.length;b++)if(d=M[b],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(b,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[dn]=e,ln(d),o=d}e.stateNode=o}else E_(u,e.type,e.stateNode);else e.stateNode=S_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?E_(u,e.type,e.stateNode):S_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&gf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Jn(n,e),$n(e),o&512&&(sn||a===null||Li(a,a.return)),a!==null&&o&4&&gf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Jn(n,e),$n(e),o&512&&(sn||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{Vn(u,"")}catch(st){Ve(e,e.return,st)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,gf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(xf=!0);break;case 6:if(Jn(n,e),$n(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(st){Ve(e,e.return,st)}}break;case 3:if(tc=null,u=yi,yi=Jl(n.containerInfo),Jn(n,e),yi=u,$n(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Lo(n.containerInfo)}catch(st){Ve(e,e.return,st)}xf&&(xf=!1,Cg(e));break;case 4:o=yi,yi=Jl(e.stateNode.containerInfo),Jn(n,e),$n(e),yi=o;break;case 12:Jn(n,e),$n(e);break;case 13:Jn(n,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Af=zt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yf(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,et=Qi,dt=sn;if(Qi=et||u,sn=dt||z,Jn(n,e),sn=dt,Qi=et,$n(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||Qi||sn||ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=z.stateNode;var gt=z.memoizedProps.style,at=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(st){Ve(z,z.return,st)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(st){Ve(z,z.return,st)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,yf(e,a))));break;case 19:Jn(n,e),$n(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,yf(e,o)));break;case 30:break;case 21:break;default:Jn(n,e),$n(e)}}function $n(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Sg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=_f(e);Fl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(Vn(M,""),a.flags&=-33);var b=_f(e);Fl(e,b,M);break;case 3:case 4:var z=a.stateNode.containerInfo,et=_f(e);vf(e,et,z);break;default:throw Error(s(161))}}catch(dt){Ve(e,e.return,dt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ma(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Tg(e,n.alternate,n),n=n.sibling}function ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),ls(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xg(n,n.return,a),ls(n);break;case 27:To(n.stateNode);case 26:case 5:Li(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}e=e.sibling}}function Ea(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:Ea(u,d,a),po(4,d);break;case 1:if(Ea(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ve(o,o.return,et)}if(o=d,u=o.updateQueue,u!==null){var b=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)am(z[u],b)}catch(et){Ve(o,o.return,et)}}a&&M&64&&vg(d),mo(d,d.return);break;case 27:Mg(d);case 26:case 5:Ea(u,d,a),a&&o===null&&M&4&&yg(d),mo(d,d.return);break;case 12:Ea(u,d,a);break;case 13:Ea(u,d,a),a&&M&4&&Rg(u,d);break;case 22:d.memoizedState===null&&Ea(u,d,a),mo(d,d.return);break;case 30:break;default:Ea(u,d,a)}n=n.sibling}}function Sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$r(a))}function Mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e))}function Ni(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Dg(e,n,a,o),n=n.sibling}function Dg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,a,o),u&2048&&po(9,n);break;case 1:Ni(e,n,a,o);break;case 3:Ni(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e)));break;case 12:if(u&2048){Ni(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,b=d.onPostCommit;typeof b=="function"&&b(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ve(n,n.return,z)}}else Ni(e,n,a,o);break;case 13:Ni(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Ni(e,n,a,o):go(e,n):d._visibility&2?Ni(e,n,a,o):(d._visibility|=2,Zs(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Sf(M,n);break;case 24:Ni(e,n,a,o),u&2048&&Mf(n.alternate,n);break;default:Ni(e,n,a,o)}}function Zs(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,b=a,z=o,et=M.flags;switch(M.tag){case 0:case 11:case 15:Zs(d,M,b,z,u),po(8,M);break;case 23:break;case 22:var dt=M.stateNode;M.memoizedState!==null?dt._visibility&2?Zs(d,M,b,z,u):go(d,M):(dt._visibility|=2,Zs(d,M,b,z,u)),u&&et&2048&&Sf(M.alternate,M);break;case 24:Zs(d,M,b,z,u),u&&et&2048&&Mf(M.alternate,M);break;default:Zs(d,M,b,z,u)}n=n.sibling}}function go(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:go(a,o),u&2048&&Sf(o.alternate,o);break;case 24:go(a,o),u&2048&&Mf(o.alternate,o);break;default:go(a,o)}n=n.sibling}}var _o=8192;function Ks(e){if(e.subtreeFlags&_o)for(e=e.child;e!==null;)Ug(e),e=e.sibling}function Ug(e){switch(e.tag){case 26:Ks(e),e.flags&_o&&e.memoizedState!==null&&Ny(yi,e.memoizedState,e.memoizedProps);break;case 5:Ks(e);break;case 3:case 4:var n=yi;yi=Jl(e.stateNode.containerInfo),Ks(e),yi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=_o,_o=16777216,Ks(e),_o=n):Ks(e));break;default:Ks(e)}}function Lg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Og(o,e)}Lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ng(e),e=e.sibling}function Ng(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Hl(e)):vo(e);break;default:vo(e)}}function Hl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,Og(o,e)}Lg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Hl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Hl(n));break;default:Hl(n)}e=e.sibling}}function Og(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$r(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else t:for(a=e;En!==null;){o=En;var u=o.sibling,d=o.return;if(bg(o),o===a){En=null;break t}if(u!==null){u.return=d,En=u;break t}En=d}}}var Zx={getCacheForType:function(e){var n=Ln(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Kx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Xe=null,ye=null,Me=0,De=0,ti=null,Ta=!1,Qs=!1,Ef=!1,$i=0,en=0,ba=0,cs=0,Tf=0,di=0,Js=0,xo=null,qn=null,bf=!1,Af=0,Gl=1/0,Vl=null,Aa=null,wn=0,Ra=null,$s=null,tr=0,Rf=0,wf=null,Pg=null,yo=0,Cf=null;function ei(){if((Ce&2)!==0&&Me!==0)return Me&-Me;if(O.T!==null){var e=Gs;return e!==0?e:zf()}return Ee()}function zg(){di===0&&(di=(Me&536870912)===0||Re?X():536870912);var e=hi.current;return e!==null&&(e.flags|=32),di}function ni(e,n,a){(e===Xe&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(er(e,0),wa(e,Me,di,!1)),Bt(e,a),((Ce&2)===0||e!==Xe)&&(e===Xe&&((Ce&2)===0&&(cs|=a),en===4&&wa(e,Me,di,!1)),Oi(e))}function Ig(e,n,a){if((Ce&6)!==0)throw Error(s(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Dt(e,n),u=o?$x(e,n):Lf(e,n,!0),d=o;do{if(u===0){Qs&&!o&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!Qx(a)){u=Lf(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var b=e;u=xo;var z=b.current.memoizedState.isDehydrated;if(z&&(er(b,M).flags|=256),M=Lf(b,M,!1),M!==2){if(Ef&&!z){b.errorRecoveryDisabledLanes|=d,cs|=d,u=4;break t}d=qn,qn=u,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){er(e,0),wa(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(o,n,di,!Ta);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Af+300-zt(),10<u)){if(wa(o,n,di,!Ta),Xt(o,0,!0)!==0)break t;o.timeoutHandle=h_(Bg.bind(null,o,a,qn,Vl,bf,n,di,cs,Js,Ta,d,2,-0,0),u);break t}Bg(o,a,qn,Vl,bf,n,di,cs,Js,Ta,d,0,-0,0)}}break}while(!0);Oi(e)}function Bg(e,n,a,o,u,d,M,b,z,et,dt,gt,at,st){if(e.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(Ro={stylesheets:null,count:0,unsuspend:Ly},Ug(n),gt=Oy(),gt!==null)){e.cancelPendingCommit=gt(Wg.bind(null,e,n,d,a,o,u,M,b,z,dt,1,at,st)),wa(e,d,M,!et);return}Wg(e,n,d,a,o,u,M,b,z)}function Qx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Kn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,o){n&=~Tf,n&=~cs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-It(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&_t(e,a,n)}function kl(){return(Ce&6)===0?(So(0),!1):!0}function Df(){if(ye!==null){if(De===0)var e=ye.return;else e=ye,Wi=is=null,qu(e),Ys=null,uo=0,e=ye;for(;e!==null;)_g(e.alternate,e),e=e.return;ye=null}}function er(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,my(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Df(),Xe=e,ye=a=Vi(e.current,null),Me=n,De=0,ti=null,Ta=!1,Qs=Dt(e,n),Ef=!1,Js=di=Tf=cs=ba=en=0,qn=xo=null,bf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),d=1<<u;n|=e[u],o&=~d}return $i=n,fl(),a}function Fg(e,n){_e=null,O.H=Dl,n===eo||n===yl?(n=nm(),De=3):n===$p?(n=nm(),De=4):De=n===ig?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,ye===null&&(en=1,Pl(e,li(n,e.current)))}function Hg(){var e=O.H;return O.H=Dl,e===null?Dl:e}function Gg(){var e=O.A;return O.A=Zx,e}function Uf(){en=4,Ta||(Me&4194048)!==Me&&hi.current!==null||(Qs=!0),(ba&134217727)===0&&(cs&134217727)===0||Xe===null||wa(Xe,Me,di,!1)}function Lf(e,n,a){var o=Ce;Ce|=2;var u=Hg(),d=Gg();(Xe!==e||Me!==n)&&(Vl=null,er(e,n)),n=!1;var M=en;t:do try{if(De!==0&&ye!==null){var b=ye,z=ti;switch(De){case 8:Df(),M=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var et=De;if(De=0,ti=null,nr(e,b,z,et),a&&Qs){M=0;break t}break;default:et=De,De=0,ti=null,nr(e,b,z,et)}}Jx(),M=en;break}catch(dt){Fg(e,dt)}while(!0);return n&&e.shellSuspendCounter++,Wi=is=null,Ce=o,O.H=u,O.A=d,ye===null&&(Xe=null,Me=0,fl()),M}function Jx(){for(;ye!==null;)Vg(ye)}function $x(e,n){var a=Ce;Ce|=2;var o=Hg(),u=Gg();Xe!==e||Me!==n?(Vl=null,Gl=zt()+500,er(e,n)):Qs=Dt(e,n);t:do try{if(De!==0&&ye!==null){n=ye;var d=ti;e:switch(De){case 1:De=0,ti=null,nr(e,n,d,1);break;case 2:case 9:if(tm(d)){De=0,ti=null,kg(n);break}n=function(){De!==2&&De!==9||Xe!==e||(De=7),Oi(e)},d.then(n,n);break t;case 3:De=7;break t;case 4:De=5;break t;case 7:tm(d)?(De=0,ti=null,kg(n)):(De=0,ti=null,nr(e,n,d,7));break;case 5:var M=null;switch(ye.tag){case 26:M=ye.memoizedState;case 5:case 27:var b=ye;if(!M||T_(M)){De=0,ti=null;var z=b.sibling;if(z!==null)ye=z;else{var et=b.return;et!==null?(ye=et,Xl(et)):ye=null}break e}}De=0,ti=null,nr(e,n,d,5);break;case 6:De=0,ti=null,nr(e,n,d,6);break;case 8:Df(),en=6;break t;default:throw Error(s(462))}}ty();break}catch(dt){Fg(e,dt)}while(!0);return Wi=is=null,O.H=o,O.A=u,Ce=a,ye!==null?0:(Xe=null,Me=0,fl(),en)}function ty(){for(;ye!==null&&!re();)Vg(ye)}function Vg(e){var n=mg(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Xl(e):ye=n}function kg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=cg(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=cg(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:qu(n);default:_g(a,n),n=ye=Xp(n,$i),n=mg(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Xl(e):ye=n}function nr(e,n,a,o){Wi=is=null,qu(n),Ys=null,uo=0;var u=n.return;try{if(kx(e,u,n,a,Me)){en=1,Pl(e,li(a,e.current)),ye=null;return}}catch(d){if(u!==null)throw ye=u,d;en=1,Pl(e,li(a,e.current)),ye=null;return}n.flags&32768?(Re||o===1?e=!0:Qs||(Me&536870912)!==0?e=!1:(Ta=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Xg(n,e)):Xl(n)}function Xl(e){var n=e;do{if((n.flags&32768)!==0){Xg(n,Ta);return}e=n.return;var a=Wx(n.alternate,n,$i);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);en===0&&(en=5)}function Xg(e,n){do{var a=qx(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);en=6,ye=null}function Wg(e,n,a,o,u,d,M,b,z){e.cancelPendingCommit=null;do Wl();while(wn!==0);if((Ce&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Su,Et(e,a,d,M,b,z),e===Xe&&(ye=Xe=null,Me=0),$s=n,Ra=e,tr=a,Rf=d,wf=u,Pg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ay(Ze,function(){return Kg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=Y.p,Y.p=2,M=Ce,Ce|=4;try{Yx(e,n,a)}finally{Ce=M,Y.p=u,O.T=o}}wn=1,qg(),Yg(),jg()}}function qg(){if(wn===1){wn=0;var e=Ra,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=Y.p;Y.p=2;var u=Ce;Ce|=4;try{wg(n,e);var d=Xf,M=Op(e.containerInfo),b=d.focusedElem,z=d.selectionRange;if(M!==b&&b&&b.ownerDocument&&Np(b.ownerDocument.documentElement,b)){if(z!==null&&gu(b)){var et=z.start,dt=z.end;if(dt===void 0&&(dt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(dt,b.value.length);else{var gt=b.ownerDocument||document,at=gt&&gt.defaultView||window;if(at.getSelection){var st=at.getSelection(),ae=b.textContent.length,te=Math.min(z.start,ae),ze=z.end===void 0?te:Math.min(z.end,ae);!st.extend&&te>ze&&(M=ze,ze=te,te=M);var K=Lp(b,te),k=Lp(b,ze);if(K&&k&&(st.rangeCount!==1||st.anchorNode!==K.node||st.anchorOffset!==K.offset||st.focusNode!==k.node||st.focusOffset!==k.offset)){var tt=gt.createRange();tt.setStart(K.node,K.offset),st.removeAllRanges(),te>ze?(st.addRange(tt),st.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),st.addRange(tt))}}}}for(gt=[],st=b;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var pt=gt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}ic=!!kf,Xf=kf=null}finally{Ce=u,Y.p=o,O.T=a}}e.current=n,wn=2}}function Yg(){if(wn===2){wn=0;var e=Ra,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=Y.p;Y.p=2;var u=Ce;Ce|=4;try{Tg(e,n.alternate,n)}finally{Ce=u,Y.p=o,O.T=a}}wn=3}}function jg(){if(wn===4||wn===3){wn=0,ie();var e=Ra,n=$s,a=tr,o=Pg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,$s=Ra=null,Zg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),we(a),n=n.stateNode,mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=Y.p,Y.p=2,O.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var b=o[M];d(b.value,{componentStack:b.stack})}}finally{O.T=n,Y.p=u}}(tr&3)!==0&&Wl(),Oi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Cf?yo++:(yo=0,Cf=e):yo=0,So(0)}}function Zg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$r(n)))}function Wl(e){return qg(),Yg(),jg(),Kg()}function Kg(){if(wn!==5)return!1;var e=Ra,n=Rf;Rf=0;var a=we(tr),o=O.T,u=Y.p;try{Y.p=32>a?32:a,O.T=null,a=wf,wf=null;var d=Ra,M=tr;if(wn=0,$s=Ra=null,tr=0,(Ce&6)!==0)throw Error(s(331));var b=Ce;if(Ce|=4,Ng(d.current),Dg(d,d.current,M,a),Ce=b,So(0,!1),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(ht,d)}catch{}return!0}finally{Y.p=u,O.T=o,Zg(e,n)}}function Qg(e,n,a){n=li(a,n),n=of(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(Bt(e,2),Oi(e))}function Ve(e,n,a){if(e.tag===3)Qg(e,e,a);else for(;n!==null;){if(n.tag===3){Qg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Aa===null||!Aa.has(o))){e=li(a,e),a=eg(2),o=_a(n,a,2),o!==null&&(ng(a,o,n,e),Bt(o,2),Oi(o));break}}n=n.return}}function Nf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Kx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Ef=!0,u.add(a),e=ey.bind(null,e,n,a),n.then(e,e))}function ey(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(Me&a)===a&&(en===4||en===3&&(Me&62914560)===Me&&300>zt()-Af?(Ce&2)===0&&er(e,0):Tf|=a,Js===Me&&(Js=0)),Oi(e)}function Jg(e,n){n===0&&(n=bt()),e=Is(e,n),e!==null&&(Bt(e,n),Oi(e))}function ny(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Jg(e,a)}function iy(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Jg(e,a)}function ay(e,n){return F(e,n)}var ql=null,ir=null,Of=!1,Yl=!1,Pf=!1,us=0;function Oi(e){e!==ir&&e.next===null&&(ir===null?ql=ir=e:ir=ir.next=e),Yl=!0,Of||(Of=!0,ry())}function So(e,n){if(!Pf&&Yl){Pf=!0;do for(var a=!1,o=ql;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,b=o.pingedLanes;d=(1<<31-It(42|e)+1)-1,d&=u&~(M&~b),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,n_(o,d))}else d=Me,d=Xt(o,o===Xe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Dt(o,d)||(a=!0,n_(o,d));o=o.next}while(a);Pf=!1}}function sy(){$g()}function $g(){Yl=Of=!1;var e=0;us!==0&&(py()&&(e=us),us=0);for(var n=zt(),a=null,o=ql;o!==null;){var u=o.next,d=t_(o,n);d===0?(o.next=null,a===null?ql=u:a.next=u,u===null&&(ir=a)):(a=o,(e!==0||(d&3)!==0)&&(Yl=!0)),o=u}So(e)}function t_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-It(d),b=1<<M,z=u[M];z===-1?((b&a)===0||(b&o)!==0)&&(u[M]=le(b,n)):z<=n&&(e.expiredLanes|=b),d&=~b}if(n=Xe,a=Me,a=Xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(De===2||De===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Le(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Le(o),we(a)){case 2:case 8:a=oe;break;case 32:a=Ze;break;case 268435456:a=N;break;default:a=Ze}return o=e_.bind(null,e),a=F(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Le(o),e.callbackPriority=2,e.callbackNode=null,2}function e_(e,n){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wl()&&e.callbackNode!==a)return null;var o=Me;return o=Xt(e,e===Xe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ig(e,o,n),t_(e,zt()),e.callbackNode!=null&&e.callbackNode===a?e_.bind(null,e):null)}function n_(e,n){if(Wl())return null;Ig(e,n,!0)}function ry(){gy(function(){(Ce&6)!==0?F(kt,sy):$g()})}function zf(){return us===0&&(us=X()),us}function i_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function a_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function oy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=i_((u[Je]||null).action),M=o.submitter;M&&(n=(n=M[Je]||null)?i_(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var b=new ll("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(us!==0){var z=M?a_(u,M):new FormData(u);ef(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(b.preventDefault(),z=M?a_(u,M):new FormData(u),ef(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var If=0;If<yu.length;If++){var Bf=yu[If],ly=Bf.toLowerCase(),cy=Bf[0].toUpperCase()+Bf.slice(1);xi(ly,"on"+cy)}xi(Ip,"onAnimationEnd"),xi(Bp,"onAnimationIteration"),xi(Fp,"onAnimationStart"),xi("dblclick","onDoubleClick"),xi("focusin","onFocus"),xi("focusout","onBlur"),xi(Ax,"onTransitionRun"),xi(Rx,"onTransitionStart"),xi(wx,"onTransitionCancel"),xi(Hp,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),w("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),w("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),w("onBeforeInput",["compositionend","keypress","textInput","paste"]),w("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),w("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function s_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var b=o[M],z=b.instance,et=b.currentTarget;if(b=b.listener,z!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){Ol(dt)}u.currentTarget=null,d=z}else for(M=0;M<o.length;M++){if(b=o[M],z=b.instance,et=b.currentTarget,b=b.listener,z!==d&&u.isPropagationStopped())break t;d=b,u.currentTarget=et;try{d(u)}catch(dt){Ol(dt)}u.currentTarget=null,d=z}}}}function Se(e,n){var a=n[Rs];a===void 0&&(a=n[Rs]=new Set);var o=e+"__bubble";a.has(o)||(r_(n,e,2,!1),a.add(o))}function Ff(e,n,a){var o=0;n&&(o|=4),r_(a,e,o,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Hf(e){if(!e[jl]){e[jl]=!0,nl.forEach(function(a){a!=="selectionchange"&&(uy.has(a)||Ff(a,!1,e),Ff(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[jl]||(n[jl]=!0,Ff("selectionchange",!1,n))}}function r_(e,n,a,o){switch(D_(n)){case 2:var u=Iy;break;case 8:u=By;break;default:u=th}a=u.bind(null,n,a,e),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Gf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var b=o.stateNode.containerInfo;if(b===u)break;if(M===4)for(M=o.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;b!==null;){if(M=Hi(b),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){o=d=M;continue t}b=b.parentNode}}o=o.return}dp(function(){var et=d,dt=su(a),gt=[];t:{var at=Gp.get(e);if(at!==void 0){var st=ll,ae=e;switch(e){case"keypress":if(rl(a)===0)break t;case"keydown":case"keyup":st=ax;break;case"focusin":ae="focus",st=fu;break;case"focusout":ae="blur",st=fu;break;case"beforeblur":case"afterblur":st=fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=ox;break;case Ip:case Bp:case Fp:st=Zv;break;case Hp:st=cx;break;case"scroll":case"scrollend":st=Xv;break;case"wheel":st=fx;break;case"copy":case"cut":case"paste":st=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=vp;break;case"toggle":case"beforetoggle":st=dx}var te=(n&4)!==0,ze=!te&&(e==="scroll"||e==="scrollend"),K=te?at!==null?at+"Capture":null:at;te=[];for(var k=et,tt;k!==null;){var pt=k;if(tt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||tt===null||K===null||(pt=Hr(k,K),pt!=null&&te.push(Eo(k,pt,tt))),ze)break;k=k.return}0<te.length&&(at=new st(at,ae,null,a,dt),gt.push({event:at,listeners:te}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",st=e==="mouseout"||e==="pointerout",at&&a!==au&&(ae=a.relatedTarget||a.fromElement)&&(Hi(ae)||ae[wi]))break t;if((st||at)&&(at=dt.window===dt?dt:(at=dt.ownerDocument)?at.defaultView||at.parentWindow:window,st?(ae=a.relatedTarget||a.toElement,st=et,ae=ae?Hi(ae):null,ae!==null&&(ze=c(ae),te=ae.tag,ae!==ze||te!==5&&te!==27&&te!==6)&&(ae=null)):(st=null,ae=et),st!==ae)){if(te=gp,pt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(te=vp,pt="onPointerLeave",K="onPointerEnter",k="pointer"),ze=st==null?at:ja(st),tt=ae==null?at:ja(ae),at=new te(pt,k+"leave",st,a,dt),at.target=ze,at.relatedTarget=tt,pt=null,Hi(dt)===et&&(te=new te(K,k+"enter",ae,a,dt),te.target=tt,te.relatedTarget=ze,pt=te),ze=pt,st&&ae)e:{for(te=st,K=ae,k=0,tt=te;tt;tt=ar(tt))k++;for(tt=0,pt=K;pt;pt=ar(pt))tt++;for(;0<k-tt;)te=ar(te),k--;for(;0<tt-k;)K=ar(K),tt--;for(;k--;){if(te===K||K!==null&&te===K.alternate)break e;te=ar(te),K=ar(K)}te=null}else te=null;st!==null&&o_(gt,at,st,te,!1),ae!==null&&ze!==null&&o_(gt,ze,ae,te,!0)}}t:{if(at=et?ja(et):window,st=at.nodeName&&at.nodeName.toLowerCase(),st==="select"||st==="input"&&at.type==="file")var Gt=Ap;else if(Tp(at))if(Rp)Gt=Ex;else{Gt=Sx;var ve=yx}else st=at.nodeName,!st||st.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&iu(et.elementType)&&(Gt=Ap):Gt=Mx;if(Gt&&(Gt=Gt(e,et))){bp(gt,Gt,a,dt);break t}ve&&ve(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&Un(at,"number",at.value)}switch(ve=et?ja(et):window,e){case"focusin":(Tp(ve)||ve.contentEditable==="true")&&(Os=ve,_u=et,jr=null);break;case"focusout":jr=_u=Os=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Pp(gt,a,dt);break;case"selectionchange":if(bx)break;case"keydown":case"keyup":Pp(gt,a,dt)}var Kt;if(du)t:{switch(e){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else Ns?Mp(e,a)&&(ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(xp&&a.locale!=="ko"&&(Ns||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&Ns&&(Kt=pp()):(da=dt,lu="value"in da?da.value:da.textContent,Ns=!0)),ve=Zl(et,ne),0<ve.length&&(ne=new _p(ne,e,null,a,dt),gt.push({event:ne,listeners:ve}),Kt?ne.data=Kt:(Kt=Ep(a),Kt!==null&&(ne.data=Kt)))),(Kt=mx?gx(e,a):_x(e,a))&&(ne=Zl(et,"onBeforeInput"),0<ne.length&&(ve=new _p("onBeforeInput","beforeinput",null,a,dt),gt.push({event:ve,listeners:ne}),ve.data=Kt)),oy(gt,e,et,a,dt)}s_(gt,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Zl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Hr(e,a),u!=null&&o.unshift(Eo(e,u,d)),u=Hr(e,n),u!=null&&o.push(Eo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function o_(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var b=a,z=b.alternate,et=b.stateNode;if(b=b.tag,z!==null&&z===o)break;b!==5&&b!==26&&b!==27||et===null||(z=et,u?(et=Hr(a,d),et!=null&&M.unshift(Eo(a,et,z))):u||(et=Hr(a,d),et!=null&&M.push(Eo(a,et,z)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var fy=/\r\n?/g,hy=/\u0000|\uFFFD/g;function l_(e){return(typeof e=="string"?e:""+e).replace(fy,`
`).replace(hy,"")}function c_(e,n){return n=l_(n),l_(e)===n}function Kl(){}function Pe(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Vn(e,""+o);break;case"className":Ft(e,"class",o);break;case"tabIndex":Ft(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(e,a,o);break;case"style":fp(e,o,d);break;case"data":if(n!=="object"){Ft(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=al(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Pe(e,n,"name",u.name,u,null),Pe(e,n,"formEncType",u.formEncType,u,null),Pe(e,n,"formMethod",u.formMethod,u,null),Pe(e,n,"formTarget",u.formTarget,u,null)):(Pe(e,n,"encType",u.encType,u,null),Pe(e,n,"method",u.method,u,null),Pe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=al(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Kl);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Ut(e,"popover",o);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ut(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vv.get(a)||a,Ut(e,a,o))}}function Vf(e,n,a,o,u,d){switch(a){case"style":fp(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Vn(e,o):(typeof o=="number"||typeof o=="bigint")&&Vn(e,""+o);break;case"onScroll":o!=null&&Se("scroll",e);break;case"onScrollEnd":o!=null&&Se("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Kl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!il.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[Je]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ut(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,d,M,a,null)}}u&&Pe(e,n,"srcSet",a.srcSet,a,null),o&&Pe(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var b=d=M=u=null,z=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var dt=a[o];if(dt!=null)switch(o){case"name":u=dt;break;case"type":M=dt;break;case"checked":z=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":b=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:Pe(e,n,o,dt,a,null)}}In(e,d,b,z,et,M,u,!1),xe(e);return;case"select":Se("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":d=b;break;case"defaultValue":M=b;break;case"multiple":o=b;default:Pe(e,n,u,b,a,null)}n=d,a=M,e.multiple=!!o,n!=null?$e(e,!!o,n,!1):a!=null&&$e(e,!!o,a,!0);return;case"textarea":Se("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(b=a[M],b!=null))switch(M){case"value":o=b;break;case"defaultValue":u=b;break;case"children":d=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Pe(e,n,M,b,a,null)}Ds(e,o,u,d),xe(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Pe(e,n,z,o,a,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(o=0;o<Mo.length;o++)Se(Mo[o],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Pe(e,n,et,o,a,null)}return;default:if(iu(n)){for(dt in a)a.hasOwnProperty(dt)&&(o=a[dt],o!==void 0&&Vf(e,n,dt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Pe(e,n,b,o,a,null))}function dy(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,b=null,z=null,et=null,dt=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":z=gt;default:o.hasOwnProperty(st)||Pe(e,n,st,null,o,gt)}}for(var at in o){var st=o[at];if(gt=a[at],o.hasOwnProperty(at)&&(st!=null||gt!=null))switch(at){case"type":d=st;break;case"name":u=st;break;case"checked":et=st;break;case"defaultChecked":dt=st;break;case"value":M=st;break;case"defaultValue":b=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==gt&&Pe(e,n,at,st,o,gt)}}Ge(e,M,b,z,et,dt,d,u);return;case"select":st=M=b=at=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":st=z;default:o.hasOwnProperty(d)||Pe(e,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":at=d;break;case"defaultValue":b=d;break;case"multiple":M=d;default:d!==z&&Pe(e,n,u,d,o,z)}n=b,a=M,o=st,at!=null?$e(e,!!a,at,!1):!!o!=!!a&&(n!=null?$e(e,!!a,n,!0):$e(e,!!a,a?[]:"",!1));return;case"textarea":st=at=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Pe(e,n,b,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":at=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Pe(e,n,M,u,o,d)}An(e,at,st);return;case"option":for(var ae in a)if(at=a[ae],a.hasOwnProperty(ae)&&at!=null&&!o.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Pe(e,n,ae,null,o,at)}for(z in o)if(at=o[z],st=a[z],o.hasOwnProperty(z)&&at!==st&&(at!=null||st!=null))switch(z){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Pe(e,n,z,at,o,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)at=a[te],a.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te)&&Pe(e,n,te,null,o,at);for(et in o)if(at=o[et],st=a[et],o.hasOwnProperty(et)&&at!==st&&(at!=null||st!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Pe(e,n,et,at,o,st)}return;default:if(iu(n)){for(var ze in a)at=a[ze],a.hasOwnProperty(ze)&&at!==void 0&&!o.hasOwnProperty(ze)&&Vf(e,n,ze,void 0,o,at);for(dt in o)at=o[dt],st=a[dt],!o.hasOwnProperty(dt)||at===st||at===void 0&&st===void 0||Vf(e,n,dt,at,o,st);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!o.hasOwnProperty(K)&&Pe(e,n,K,null,o,at);for(gt in o)at=o[gt],st=a[gt],!o.hasOwnProperty(gt)||at===st||at==null&&st==null||Pe(e,n,gt,at,o,st)}var kf=null,Xf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function u_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Wf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var qf=null;function py(){var e=window.event;return e&&e.type==="popstate"?e===qf?!1:(qf=e,!0):(qf=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,d_=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof d_<"u"?function(e){return d_.resolve(null).then(e).catch(_y)}:h_;function _y(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function p_(e,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&To(M.documentElement),a&2&&To(M.body),a&4)for(a=M.head,To(a),M=a.firstChild;M;){var b=M.nextSibling,z=M.nodeName;M[Ci]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=b}}if(u===0){e.removeChild(d),Lo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Lo(n)}function Yf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yf(a),Cs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function vy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ci])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Si(e.nextSibling),e===null)break}return null}function xy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Si(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function yy(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Zf=null;function m_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function g_(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Cs(e)}var pi=new Map,__=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=Y.d;Y.d={f:Sy,r:My,D:Ey,C:Ty,L:by,m:Ay,X:wy,S:Ry,M:Cy};function Sy(){var e=ta.f(),n=kl();return e||n}function My(e){var n=fa(e);n!==null&&n.tag===5&&n.type==="form"?Im(n):ta.r(e)}var sr=typeof document>"u"?null:document;function v_(e,n,a){var o=sr;if(o&&typeof n=="string"&&n){var u=Sn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),__.has(u)||(__.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),ln(n),o.head.appendChild(n)))}}function Ey(e){ta.D(e),v_("dns-prefetch",e,null)}function Ty(e,n){ta.C(e,n),v_("preconnect",e,n)}function by(e,n,a){ta.L(e,n,a);var o=sr;if(o&&e&&n){var u='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Sn(a.imageSizes)+'"]')):u+='[href="'+Sn(e)+'"]';var d=u;switch(n){case"style":d=rr(e);break;case"script":d=or(e)}pi.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(bo(d))||n==="script"&&o.querySelector(Ao(d))||(n=o.createElement("link"),Cn(n,"link",e),ln(n),o.head.appendChild(n)))}}function Ay(e,n){ta.m(e,n);var a=sr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Sn(o)+'"][href="'+Sn(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=or(e)}if(!pi.has(d)&&(e=g({rel:"modulepreload",href:e},n),pi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(d)))return}o=a.createElement("link"),Cn(o,"link",e),ln(o),a.head.appendChild(o)}}}function Ry(e,n,a){ta.S(e,n,a);var o=sr;if(o&&e){var u=ha(o).hoistableStyles,d=rr(e);n=n||"default";var M=u.get(d);if(!M){var b={loading:0,preload:null};if(M=o.querySelector(bo(d)))b.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(d))&&Kf(e,a);var z=M=o.createElement("link");ln(z),Cn(z,"link",e),z._p=new Promise(function(et,dt){z.onload=et,z.onerror=dt}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,$l(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:b},u.set(d,M)}}}function wy(e,n){ta.X(e,n);var a=sr;if(a&&e){var o=ha(a).hoistableScripts,u=or(e),d=o.get(u);d||(d=a.querySelector(Ao(u)),d||(e=g({src:e,async:!0},n),(n=pi.get(u))&&Qf(e,n),d=a.createElement("script"),ln(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Cy(e,n){ta.M(e,n);var a=sr;if(a&&e){var o=ha(a).hoistableScripts,u=or(e),d=o.get(u);d||(d=a.querySelector(Ao(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Qf(e,n),d=a.createElement("script"),ln(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function x_(e,n,a,o){var u=(u=J.current)?Jl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=ha(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rr(a.href);var d=ha(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(bo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),d||Dy(u,e,a,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=ha(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function rr(e){return'href="'+Sn(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function y_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Dy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),ln(n),e.head.appendChild(n))}function or(e){return'[src="'+Sn(e)+'"]'}function Ao(e){return"script[async]"+e}function S_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Sn(a.href)+'"]');if(o)return n.instance=o,ln(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ln(o),Cn(o,"style",u),$l(o,a.precedence,e),n.instance=o;case"stylesheet":u=rr(a.href);var d=e.querySelector(bo(u));if(d)return n.state.loading|=4,n.instance=d,ln(d),d;o=y_(a),(u=pi.get(u))&&Kf(o,u),d=(e.ownerDocument||e).createElement("link"),ln(d);var M=d;return M._p=new Promise(function(b,z){M.onload=b,M.onerror=z}),Cn(d,"link",o),n.state.loading|=4,$l(d,a.precedence,e),n.instance=d;case"script":return d=or(a.src),(u=e.querySelector(Ao(d)))?(n.instance=u,ln(u),u):(o=a,(u=pi.get(d))&&(o=g({},a),Qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ln(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,$l(o,a.precedence,e));return n.instance}function $l(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var b=o[M];if(b.dataset.precedence===n)d=b;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function M_(e,n,a){if(tc===null){var o=new Map,u=tc=new Map;u.set(a,o)}else u=tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Ci]||d[dn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var b=o.get(M);b?b.push(d):o.set(M,[d])}}return o}function E_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Uy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function T_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ro=null;function Ly(){}function Ny(e,n,a){if(Ro===null)throw Error(s(475));var o=Ro;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=rr(a.href),d=e.querySelector(bo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=ec.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,ln(d);return}d=e.ownerDocument||e,a=y_(a),(u=pi.get(u))&&Kf(a,u),d=d.createElement("link"),ln(d);var M=d;M._p=new Promise(function(b,z){M.onload=b,M.onerror=z}),Cn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=ec.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Oy(){if(Ro===null)throw Error(s(475));var e=Ro;return e.stylesheets&&e.count===0&&Jf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Jf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ec(){if(this.count--,this.count===0){if(this.stylesheets)Jf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function Jf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(Py,e),nc=null,ec.call(e))}function Py(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var o=a.get(null);else{a=new Map,nc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=ec.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:L,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function zy(e,n,a,o,u,d,M,b){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rt(0),this.hiddenUpdates=Rt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function b_(e,n,a,o,u,d,M,b,z,et,dt,gt){return e=new zy(e,n,a,M,b,z,et,gt),n=1,d===!0&&(n|=24),d=Qn(3,null,null,n),e.current=d,d.stateNode=e,n=Lu(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},zu(d),e}function A_(e){return e?(e=Bs,e):Bs}function R_(e,n,a,o,u,d){u=A_(u),o.context===null?o.context=u:o.pendingContext=u,o=ga(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=_a(e,o,n),a!==null&&(ni(a,e,n),io(a,e,n))}function w_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function $f(e,n){w_(e,n),(e=e.alternate)&&w_(e,n)}function C_(e){if(e.tag===13){var n=Is(e,67108864);n!==null&&ni(n,e,67108864),$f(e,67108864)}}var ic=!0;function Iy(e,n,a,o){var u=O.T;O.T=null;var d=Y.p;try{Y.p=2,th(e,n,a,o)}finally{Y.p=d,O.T=u}}function By(e,n,a,o){var u=O.T;O.T=null;var d=Y.p;try{Y.p=8,th(e,n,a,o)}finally{Y.p=d,O.T=u}}function th(e,n,a,o){if(ic){var u=eh(o);if(u===null)Gf(e,n,o,ac,a),U_(e,o);else if(Hy(u,e,n,a,o))o.stopPropagation();else if(U_(e,o),n&4&&-1<Fy.indexOf(e)){for(;u!==null;){var d=fa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Qt(d.pendingLanes);if(M!==0){var b=d;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var z=1<<31-It(M);b.entanglements[1]|=z,M&=~z}Oi(d),(Ce&6)===0&&(Gl=zt()+500,So(0))}}break;case 13:b=Is(d,2),b!==null&&ni(b,d,2),kl(),$f(d,2)}if(d=eh(o),d===null&&Gf(e,n,o,ac,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Gf(e,n,o,null,a)}}function eh(e){return e=su(e),nh(e)}var ac=null;function nh(e){if(ac=null,e=Hi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ac=e,null}function D_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ke()){case kt:return 2;case oe:return 8;case Ze:case Ke:return 32;case N:return 268435456;default:return 32}default:return 32}}var ih=!1,Da=null,Ua=null,La=null,Co=new Map,Do=new Map,Na=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function U_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Uo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=fa(n),n!==null&&C_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Hy(e,n,a,o,u){switch(n){case"focusin":return Da=Uo(Da,e,n,a,o,u),!0;case"dragenter":return Ua=Uo(Ua,e,n,a,o,u),!0;case"mouseover":return La=Uo(La,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Co.set(d,Uo(Co.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Do.set(d,Uo(Do.get(d)||null,e,n,a,o,u)),!0}return!1}function L_(e){var n=Hi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,_i(e.priority,function(){if(a.tag===13){var o=ei();o=se(o);var u=Is(a,o);u!==null&&ni(u,a,o),$f(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);au=o,a.target.dispatchEvent(o),au=null}else return n=fa(a),n!==null&&C_(n),e.blockedOn=a,!1;n.shift()}return!0}function N_(e,n,a){sc(e)&&a.delete(n)}function Gy(){ih=!1,Da!==null&&sc(Da)&&(Da=null),Ua!==null&&sc(Ua)&&(Ua=null),La!==null&&sc(La)&&(La=null),Co.forEach(N_),Do.forEach(N_)}function rc(e,n){e.blockedOn===n&&(e.blockedOn=null,ih||(ih=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Gy)))}var oc=null;function O_(e){oc!==e&&(oc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){oc===e&&(oc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(nh(o||a)===null)continue;break}var d=fa(a);d!==null&&(e.splice(n,3),n-=3,ef(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Lo(e){function n(z){return rc(z,e)}Da!==null&&rc(Da,e),Ua!==null&&rc(Ua,e),La!==null&&rc(La,e),Co.forEach(n),Do.forEach(n);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)L_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[Je]||null;if(typeof d=="function")M||O_(a);else if(M){var b=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[Je]||null)b=M.formAction;else if(nh(u)!==null)continue}else b=M.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),O_(a)}}}function ah(e){this._internalRoot=e}lc.prototype.render=ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ei();R_(a,o,e,n,null,null)},lc.prototype.unmount=ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;R_(e.current,2,null,e,null,null),kl(),n[wi]=null}};function lc(e){this._internalRoot=e}lc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ee();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&L_(e)}};var P_=t.version;if(P_!=="19.1.1")throw Error(s(527,P_,"19.1.1"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Vy={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ht=cc.inject(Vy),mt=cc}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Qm,d=Jm,M=$m,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=b_(e,1,!1,null,null,a,o,u,d,M,b,null),e[wi]=n.current,Hf(e),new ah(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=Qm,M=Jm,b=$m,z=null,et=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(et=a.formState)),n=b_(e,1,!0,n,a??null,o,u,d,M,b,z,et),n.context=A_(null),a=n.current,o=ei(),o=se(o),u=ga(o),u.callback=null,_a(a,u,o),a=o,n.current.lanes=a,Bt(n,a),Oi(n),e[wi]=n.current,Hf(e),new lc(n)},Oo.version="19.1.1",Oo}var W_;function Jy(){if(W_)return oh.exports;W_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),oh.exports=Qy(),oh.exports}var $y=Jy();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="180",wr={ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tS=0,q_=1,eS=2,sv=1,nS=2,ra=3,Wa=0,Hn=1,Zn=2,ka=0,Cr=1,Y_=2,j_=3,Z_=4,iS=5,vs=100,aS=101,sS=102,rS=103,oS=104,lS=200,cS=201,uS=202,fS=203,Zh=204,Kh=205,hS=206,dS=207,pS=208,mS=209,gS=210,_S=211,vS=212,xS=213,yS=214,Qh=0,Jh=1,$h=2,Lr=3,td=4,ed=5,nd=6,id=7,Xd=0,SS=1,MS=2,Xa=0,ES=1,TS=2,bS=3,rv=4,AS=5,RS=6,wS=7,ov=300,Nr=301,Or=302,ad=303,sd=304,tu=306,rd=1e3,ys=1001,od=1002,oi=1003,CS=1004,uc=1005,zi=1006,fh=1007,Ss=1008,Fi=1009,lv=1010,cv=1011,Yo=1012,Wd=1013,Ms=1014,Ii=1015,Jo=1016,qd=1017,Yd=1018,jo=1020,uv=35902,fv=35899,hv=1021,dv=1022,Ai=1023,Zo=1026,Ko=1027,jd=1028,Zd=1029,pv=1030,Kd=1031,Qd=1033,Hc=33776,Gc=33777,Vc=33778,kc=33779,ld=35840,cd=35841,ud=35842,fd=35843,hd=36196,dd=37492,pd=37496,md=37808,gd=37809,_d=37810,vd=37811,xd=37812,yd=37813,Sd=37814,Md=37815,Ed=37816,Td=37817,bd=37818,Ad=37819,Rd=37820,wd=37821,Cd=36492,Dd=36494,Ud=36495,Ld=36283,Nd=36284,Od=36285,Pd=36286,DS=3200,US=3201,Jd=0,LS=1,Va="",si="srgb",Pr="srgb-linear",Yc="linear",Ie="srgb",lr=7680,K_=519,NS=512,OS=513,PS=514,mv=515,zS=516,IS=517,BS=518,FS=519,Q_=35044,HS=35048,J_="300 es",Bi=2e3,jc=2001;class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xc=Math.PI/180,zd=180/Math.PI;function $o(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function fe(r,t,i){return Math.max(t,Math.min(i,r))}function GS(r,t){return(r%t+t)%t}function hh(r,t,i){return(1-i)*r+i*t}function Po(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const gv={DEG2RAD:Xc,clamp:fe};class Ht{constructor(t=0,i=0){Ht.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=fe(this.x,t.x,i.x),this.y=fe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=fe(this.x,t,i),this.y=fe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const v=c[f+0],y=c[f+1],E=c[f+2],A=c[f+3];if(h===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(h===1){t[i+0]=v,t[i+1]=y,t[i+2]=E,t[i+3]=A;return}if(_!==A||m!==v||p!==y||g!==E){let S=1-h;const x=m*v+p*y+g*E+_*A,I=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const P=Math.sqrt(L),B=Math.atan2(P,x*I);S=Math.sin(S*B)/P,h=Math.sin(h*B)/P}const D=h*I;if(m=m*S+v*D,p=p*S+y*D,g=g*S+E*D,_=_*S+A*D,S===1-h){const P=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=P,p*=P,g*=P,_*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[f],v=c[f+1],y=c[f+2],E=c[f+3];return t[i]=h*E+g*_+m*y-p*v,t[i+1]=m*E+g*v+p*_-h*y,t[i+2]=p*E+g*y+h*v-m*_,t[i+3]=g*E-h*_-m*v-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),_=h(c/2),v=m(s/2),y=m(l/2),E=m(c/2);switch(f){case"XYZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"YXZ":this._x=v*g*_+p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"ZXY":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_-v*y*E;break;case"ZYX":this._x=v*g*_-p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_+v*y*E;break;case"YZX":this._x=v*g*_+p*y*E,this._y=p*y*_+v*g*E,this._z=p*g*E-v*y*_,this._w=p*g*_-v*y*E;break;case"XZY":this._x=v*g*_-p*y*E,this._y=p*y*_-v*g*E,this._z=p*g*E+v*y*_,this._w=p*g*_+v*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=s+h+_;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>_){const y=2*Math.sqrt(1+s-h-_);this._w=(g-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-s-_);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-s*p,this._z=c*g+f*p+s*m-l*h,this._w=f*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+s*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),_=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=f*_+this._w*v,this._x=s*_+this._x*v,this._y=l*_+this._y*v,this._z=c*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,i=0,s=0){V.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*l-h*s),g=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-h*g,this.y=s+m*g+h*p-c*_,this.z=l+m*_+c*g-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=fe(this.x,t.x,i.x),this.y=fe(this.y,t.y,i.y),this.z=fe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=fe(this.x,t,i),this.y=fe(this.y,t,i),this.z=fe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return dh.copy(this).projectOnVector(t),this.sub(dh)}reflect(t){return this.sub(dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(fe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dh=new V,$_=new Es;class ue{constructor(t,i,s,l,c,f,h,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p)}set(t,i,s,l,c,f,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],g=s[4],_=s[7],v=s[2],y=s[5],E=s[8],A=l[0],S=l[3],x=l[6],I=l[1],L=l[4],D=l[7],P=l[2],B=l[5],H=l[8];return c[0]=f*A+h*I+m*P,c[3]=f*S+h*L+m*B,c[6]=f*x+h*D+m*H,c[1]=p*A+g*I+_*P,c[4]=p*S+g*L+_*B,c[7]=p*x+g*D+_*H,c[2]=v*A+y*I+E*P,c[5]=v*S+y*L+E*B,c[8]=v*x+y*D+E*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*f*g-i*h*p-s*c*g+s*h*m+l*c*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=g*f-h*p,v=h*m-g*c,y=p*c-f*m,E=i*_+s*v+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(l*p-g*s)*A,t[2]=(h*s-l*f)*A,t[3]=v*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-h*i)*A,t[6]=y*A,t[7]=(s*m-p*i)*A,t[8]=(f*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(ph.makeScale(t,i)),this}rotate(t){return this.premultiply(ph.makeRotation(-t)),this}translate(t,i){return this.premultiply(ph.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new ue;function _v(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Zc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function VS(){const r=Zc("canvas");return r.style.display="block",r}const t0={};function Qo(r){r in t0||(t0[r]=!0,console.warn(r))}function kS(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const e0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XS(){const r={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ie&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ie&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Pr]:{primaries:t,whitePoint:s,transfer:Yc,toXYZ:e0,fromXYZ:n0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:e0,fromXYZ:n0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),r}const Ae=XS();function la(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Dr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cr;class WS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{cr===void 0&&(cr=Zc("canvas")),cr.width=t.width,cr.height=t.height;const l=cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=la(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(la(i[s]/255)*255):i[s]=la(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qS=0;class $d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(mh(l[f].image)):c.push(mh(l[f]))}else c=mh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function mh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?WS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YS=0;const gh=new V;class Gn extends bs{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=ys,l=ys,c=zi,f=Ss,h=Ai,m=Fi,p=Gn.DEFAULT_ANISOTROPY,g=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=$o(),this.name="",this.source=new $d(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ov)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rd:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case od:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rd:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case od:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=ov;Gn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,i=0,s=0,l=1){He.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],v=m[1],y=m[5],E=m[9],A=m[2],S=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(y+1)/2,P=(x+1)/2,B=(g+v)/4,H=(_+A)/4,W=(E+S)/4;return L>D&&L>P?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=B/s,c=H/s):D>P?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=W/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=H/c,l=W/c),this.set(s,l,c,i),this}let I=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(v-g)*(v-g));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(_-A)/I,this.z=(v-g)/I,this.w=Math.acos((p+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=fe(this.x,t.x,i.x),this.y=fe(this.y,t.y,i.y),this.z=fe(this.z,t.z,i.z),this.w=fe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=fe(this.x,t,i),this.y=fe(this.y,t,i),this.z=fe(this.z,t,i),this.w=fe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(fe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jS extends bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new He(0,0,t,i),this.scissorTest=!1,this.viewport=new He(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Gn(l);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new $d(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends jS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class vv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZS extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=oi,this.minFilter=oi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Mi):Mi.fromBufferAttribute(c,f),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),fc.copy(s.boundingBox)),fc.applyMatrix4(t.matrixWorld),this.union(fc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),hc.subVectors(this.max,zo),ur.subVectors(t.a,zo),fr.subVectors(t.b,zo),hr.subVectors(t.c,zo),Pa.subVectors(fr,ur),za.subVectors(hr,fr),fs.subVectors(ur,hr);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-fs.z,fs.y,Pa.z,0,-Pa.x,za.z,0,-za.x,fs.z,0,-fs.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-fs.y,fs.x,0];return!_h(i,ur,fr,hr,hc)||(i=[1,0,0,0,1,0,0,0,1],!_h(i,ur,fr,hr,hc))?!1:(dc.crossVectors(Pa,za),i=[dc.x,dc.y,dc.z],_h(i,ur,fr,hr,hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new V,new V,new V,new V,new V,new V,new V,new V],Mi=new V,fc=new As,ur=new V,fr=new V,hr=new V,Pa=new V,za=new V,fs=new V,zo=new V,hc=new V,dc=new V,hs=new V;function _h(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){hs.fromArray(r,c);const h=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=t.dot(hs),p=i.dot(hs),g=s.dot(hs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const KS=new As,Io=new V,vh=new V;class Ya{constructor(t=new V,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):KS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(vh)),this.expandByPoint(Io.copy(t.center).sub(vh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new V,xh=new V,pc=new V,Ia=new V,yh=new V,mc=new V,Sh=new V;class tl{constructor(t=new V,i=new V(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){xh.copy(t).add(i).multiplyScalar(.5),pc.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(xh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(pc),h=Ia.dot(this.direction),m=-Ia.dot(pc),p=Ia.lengthSq(),g=Math.abs(1-f*f);let _,v,y,E;if(g>0)if(_=f*m-h,v=f*h-m,E=c*g,_>=0)if(v>=-E)if(v<=E){const A=1/g;_*=A,v*=A,y=_*(_+f*v+2*h)+v*(f*_+v+2*m)+p}else v=c,_=Math.max(0,-(f*v+h)),y=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(f*v+h)),y=-_*_+v*(v+2*m)+p;else v<=-E?(_=Math.max(0,-(-f*c+h)),v=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p):v<=E?(_=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(_=Math.max(0,-(f*c+h)),v=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+v*(v+2*m)+p);else v=f>0?-c:c,_=Math.max(0,-(f*v+h)),y=-_*_+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(xh).addScaledVector(pc,v),y}intersectSphere(t,i){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(s=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(t.min.z-v.z)*_,m=(t.max.z-v.z)*_):(h=(t.max.z-v.z)*_,m=(t.min.z-v.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,s,l,c){yh.subVectors(i,t),mc.subVectors(s,t),Sh.crossVectors(yh,mc);let f=this.direction.dot(Sh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Ia.subVectors(this.origin,t);const m=h*this.direction.dot(mc.crossVectors(Ia,mc));if(m<0)return null;const p=h*this.direction.dot(yh.cross(Ia));if(p<0||m+p>f)return null;const g=-h*Ia.dot(Sh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,i,s,l,c,f,h,m,p,g,_,v,y,E,A,S){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,h,m,p,g,_,v,y,E,A,S)}set(t,i,s,l,c,f,h,m,p,g,_,v,y,E,A,S){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=y,x[7]=E,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/dr.setFromMatrixColumn(t,0).length(),c=1/dr.setFromMatrixColumn(t,1).length(),f=1/dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const v=f*g,y=f*_,E=h*g,A=h*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=v-A*p,i[9]=-h*m,i[2]=A-v*p,i[6]=E+y*p,i[10]=f*m}else if(t.order==="YXZ"){const v=m*g,y=m*_,E=p*g,A=p*_;i[0]=v+A*h,i[4]=E*h-y,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-h,i[2]=y*h-E,i[6]=A+v*h,i[10]=f*m}else if(t.order==="ZXY"){const v=m*g,y=m*_,E=p*g,A=p*_;i[0]=v-A*h,i[4]=-f*_,i[8]=E+y*h,i[1]=y+E*h,i[5]=f*g,i[9]=A-v*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(t.order==="ZYX"){const v=f*g,y=f*_,E=h*g,A=h*_;i[0]=m*g,i[4]=E*p-y,i[8]=v*p+A,i[1]=m*_,i[5]=A*p+v,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(t.order==="YZX"){const v=f*m,y=f*p,E=h*m,A=h*p;i[0]=m*g,i[4]=A-v*_,i[8]=E*_+y,i[1]=_,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*_+E,i[10]=v-A*_}else if(t.order==="XZY"){const v=f*m,y=f*p,E=h*m,A=h*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+A,i[5]=f*g,i[9]=y*_-E,i[2]=E*_-y,i[6]=h*g,i[10]=A*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(QS,t,JS)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ba.crossVectors(s,ii),Ba.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ba.crossVectors(s,ii)),Ba.normalize(),gc.crossVectors(ii,Ba),l[0]=Ba.x,l[4]=gc.x,l[8]=ii.x,l[1]=Ba.y,l[5]=gc.y,l[9]=ii.y,l[2]=Ba.z,l[6]=gc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],g=s[1],_=s[5],v=s[9],y=s[13],E=s[2],A=s[6],S=s[10],x=s[14],I=s[3],L=s[7],D=s[11],P=s[15],B=l[0],H=l[4],W=l[8],R=l[12],C=l[1],G=l[5],q=l[9],nt=l[13],ut=l[2],rt=l[6],O=l[10],Y=l[14],Z=l[3],xt=l[7],U=l[11],$=l[15];return c[0]=f*B+h*C+m*ut+p*Z,c[4]=f*H+h*G+m*rt+p*xt,c[8]=f*W+h*q+m*O+p*U,c[12]=f*R+h*nt+m*Y+p*$,c[1]=g*B+_*C+v*ut+y*Z,c[5]=g*H+_*G+v*rt+y*xt,c[9]=g*W+_*q+v*O+y*U,c[13]=g*R+_*nt+v*Y+y*$,c[2]=E*B+A*C+S*ut+x*Z,c[6]=E*H+A*G+S*rt+x*xt,c[10]=E*W+A*q+S*O+x*U,c[14]=E*R+A*nt+S*Y+x*$,c[3]=I*B+L*C+D*ut+P*Z,c[7]=I*H+L*G+D*rt+P*xt,c[11]=I*W+L*q+D*O+P*U,c[15]=I*R+L*nt+D*Y+P*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],g=t[2],_=t[6],v=t[10],y=t[14],E=t[3],A=t[7],S=t[11],x=t[15];return E*(+c*m*_-l*p*_-c*h*v+s*p*v+l*h*y-s*m*y)+A*(+i*m*y-i*p*v+c*f*v-l*f*y+l*p*g-c*m*g)+S*(+i*p*_-i*h*y-c*f*_+s*f*y+c*h*g-s*p*g)+x*(-l*h*g-i*m*_+i*h*v+l*f*_-s*f*v+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],g=t[8],_=t[9],v=t[10],y=t[11],E=t[12],A=t[13],S=t[14],x=t[15],I=_*S*p-A*v*p+A*m*y-h*S*y-_*m*x+h*v*x,L=E*v*p-g*S*p-E*m*y+f*S*y+g*m*x-f*v*x,D=g*A*p-E*_*p+E*h*y-f*A*y-g*h*x+f*_*x,P=E*_*m-g*A*m-E*h*v+f*A*v+g*h*S-f*_*S,B=i*I+s*L+l*D+c*P;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/B;return t[0]=I*H,t[1]=(A*v*c-_*S*c-A*l*y+s*S*y+_*l*x-s*v*x)*H,t[2]=(h*S*c-A*m*c+A*l*p-s*S*p-h*l*x+s*m*x)*H,t[3]=(_*m*c-h*v*c-_*l*p+s*v*p+h*l*y-s*m*y)*H,t[4]=L*H,t[5]=(g*S*c-E*v*c+E*l*y-i*S*y-g*l*x+i*v*x)*H,t[6]=(E*m*c-f*S*c-E*l*p+i*S*p+f*l*x-i*m*x)*H,t[7]=(f*v*c-g*m*c+g*l*p-i*v*p-f*l*y+i*m*y)*H,t[8]=D*H,t[9]=(E*_*c-g*A*c-E*s*y+i*A*y+g*s*x-i*_*x)*H,t[10]=(f*A*c-E*h*c+E*s*p-i*A*p-f*s*x+i*h*x)*H,t[11]=(g*h*c-f*_*c-g*s*p+i*_*p+f*s*y-i*h*y)*H,t[12]=P*H,t[13]=(g*A*l-E*_*l+E*s*v-i*A*v-g*s*S+i*_*S)*H,t[14]=(E*h*l-f*A*l-E*s*m+i*A*m+f*s*S-i*h*S)*H,t[15]=(f*_*l-g*h*l+g*s*m-i*_*m-f*s*v+i*h*v)*H,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,g=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,_=h+h,v=c*p,y=c*g,E=c*_,A=f*g,S=f*_,x=h*_,I=m*p,L=m*g,D=m*_,P=s.x,B=s.y,H=s.z;return l[0]=(1-(A+x))*P,l[1]=(y+D)*P,l[2]=(E-L)*P,l[3]=0,l[4]=(y-D)*B,l[5]=(1-(v+x))*B,l[6]=(S+I)*B,l[7]=0,l[8]=(E+L)*H,l[9]=(S-I)*H,l[10]=(1-(v+A))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=dr.set(l[0],l[1],l[2]).length();const f=dr.set(l[4],l[5],l[6]).length(),h=dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,g=1/f,_=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),s.x=c,s.y=f,s.z=h,this}makePerspective(t,i,s,l,c,f,h=Bi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),v=(i+t)/(i-t),y=(s+l)/(s-l);let E,A;if(m)E=c/(f-c),A=f*c/(f-c);else if(h===Bi)E=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===jc)E=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,h=Bi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),v=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,A;if(m)E=1/(f-c),A=f/(f-c);else if(h===Bi)E=-2/(f-c),A=-(f+c)/(f-c);else if(h===jc)E=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const dr=new V,Ei=new Ue,QS=new V(0,0,0),JS=new V(1,1,1),Ba=new V,gc=new V,ii=new V,i0=new Ue,a0=new Es;class Ri{constructor(t=0,i=0,s=0,l=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(fe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-fe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(fe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return i0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(i0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return a0.setFromEuler(this),this.setFromQuaternion(a0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $S=0;const s0=new V,pr=new Es,ia=new Ue,_c=new V,Bo=new V,tM=new V,eM=new Es,r0=new V(1,0,0),o0=new V(0,1,0),l0=new V(0,0,1),c0={type:"added"},nM={type:"removed"},mr={type:"childadded",child:null},Mh={type:"childremoved",child:null};class rn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const t=new V,i=new Ri,s=new Es,l=new V(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ue}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(r0,t)}rotateY(t){return this.rotateOnAxis(o0,t)}rotateZ(t){return this.rotateOnAxis(l0,t)}translateOnAxis(t,i){return s0.copy(t).applyQuaternion(this.quaternion),this.position.add(s0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(r0,t)}translateY(t){return this.translateOnAxis(o0,t)}translateZ(t){return this.translateOnAxis(l0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?_c.copy(t):_c.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Bo,_c,this.up):ia.lookAt(_c,Bo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),pr.setFromRotationMatrix(ia),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(c0),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(nM),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(c0),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,t,tM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,eM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),g=f(t.images),_=f(t.shapes),v=f(t.skeletons),y=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}rn.DEFAULT_UP=new V(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new V,aa=new V,Eh=new V,sa=new V,gr=new V,_r=new V,u0=new V,Th=new V,bh=new V,Ah=new V,Rh=new He,wh=new He,Ch=new He;class bi{constructor(t=new V,i=new V,s=new V){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ti.subVectors(l,i),aa.subVectors(s,i),Eh.subVectors(t,i);const f=Ti.dot(Ti),h=Ti.dot(aa),m=Ti.dot(Eh),p=aa.dot(aa),g=aa.dot(Eh),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const v=1/_,y=(p*m-h*g)*v,E=(f*g-h*m)*v;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,s,l,c,f,h,m){return this.getBarycoord(t,i,s,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(f,sa.y),m.addScaledVector(h,sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Rh.setScalar(0),wh.setScalar(0),Ch.setScalar(0),Rh.fromBufferAttribute(t,i),wh.fromBufferAttribute(t,s),Ch.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Rh,c.x),f.addScaledVector(wh,c.y),f.addScaledVector(Ch,c.z),f}static isFrontFacing(t,i,s,l){return Ti.subVectors(s,i),aa.subVectors(t,i),Ti.cross(aa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),Ti.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return bi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,h;gr.subVectors(l,s),_r.subVectors(c,s),Th.subVectors(t,s);const m=gr.dot(Th),p=_r.dot(Th);if(m<=0&&p<=0)return i.copy(s);bh.subVectors(t,l);const g=gr.dot(bh),_=_r.dot(bh);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(s).addScaledVector(gr,f);Ah.subVectors(t,c);const y=gr.dot(Ah),E=_r.dot(Ah);if(E>=0&&y<=E)return i.copy(c);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(_r,h);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return u0.subVectors(c,l),h=(_-g)/(_-g+(y-E)),i.copy(l).addScaledVector(u0,h);const x=1/(S+A+v);return f=A*x,h=v*x,i.copy(s).addScaledVector(gr,f).addScaledVector(_r,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Dh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class he{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=GS(t,1),i=fe(i,0,1),s=fe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Dh(f,c,t+1/3),this.g=Dh(f,c,t),this.b=Dh(f,c,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const s=xv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Ae.workingToColorSpace(Pn.copy(this),t),Math.round(fe(Pn.r*255,0,255))*65536+Math.round(fe(Pn.g*255,0,255))*256+Math.round(fe(Pn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Pn.copy(this),i);const s=Pn.r,l=Pn.g,c=Pn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=g<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Pn.copy(this),i),t.r=Pn.r,t.g=Pn.g,t.b=Pn.b,t}getStyle(t=si){Ae.workingToColorSpace(Pn.copy(this),t);const i=Pn.r,s=Pn.g,l=Pn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(vc);const s=hh(Fa.h,vc.h,i),l=hh(Fa.s,vc.s,i),c=hh(Fa.l,vc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new he;he.NAMES=xv;let iM=0;class ca extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Cr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zh&&(s.blendSrc=this.blendSrc),this.blendDst!==Kh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class yv extends ca{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new V,xc=new Ht;let aM=0;class gi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Q_,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)xc.fromBufferAttribute(this,i),xc.applyMatrix3(t),this.setXY(i,xc.x,xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Po(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Yn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Yn(i,this.array),s=Yn(s,this.array),l=Yn(l,this.array),c=Yn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Q_&&(t.usage=this.usage),t}}class Sv extends gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Mv extends gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class je extends gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let sM=0;const mi=new Ue,Uh=new rn,vr=new V,ai=new As,Fo=new As,bn=new V;class vn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_v(t)?Mv:Sv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return Uh.lookAt(t),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new je(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Fo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ai.min,Fo.min),ai.expandByPoint(bn),bn.addVectors(ai.max,Fo.max),ai.expandByPoint(bn)):(ai.expandByPoint(Fo.min),ai.expandByPoint(Fo.max))}ai.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)bn.fromBufferAttribute(h,p),m&&(vr.fromBufferAttribute(t,p),bn.add(vr)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<s.count;W++)h[W]=new V,m[W]=new V;const p=new V,g=new V,_=new V,v=new Ht,y=new Ht,E=new Ht,A=new V,S=new V;function x(W,R,C){p.fromBufferAttribute(s,W),g.fromBufferAttribute(s,R),_.fromBufferAttribute(s,C),v.fromBufferAttribute(c,W),y.fromBufferAttribute(c,R),E.fromBufferAttribute(c,C),g.sub(p),_.sub(p),y.sub(v),E.sub(v);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(G),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(G),h[W].add(A),h[R].add(A),h[C].add(A),m[W].add(S),m[R].add(S),m[C].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let W=0,R=I.length;W<R;++W){const C=I[W],G=C.start,q=C.count;for(let nt=G,ut=G+q;nt<ut;nt+=3)x(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const L=new V,D=new V,P=new V,B=new V;function H(W){P.fromBufferAttribute(l,W),B.copy(P);const R=h[W];L.copy(R),L.sub(P.multiplyScalar(P.dot(R))).normalize(),D.crossVectors(B,R);const G=D.dot(m[W])<0?-1:1;f.setXYZW(W,L.x,L.y,L.z,G)}for(let W=0,R=I.length;W<R;++W){const C=I[W],G=C.start,q=C.count;for(let nt=G,ut=G+q;nt<ut;nt+=3)H(t.getX(nt+0)),H(t.getX(nt+1)),H(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new V,c=new V,f=new V,h=new V,m=new V,p=new V,g=new V,_=new V;if(t)for(let v=0,y=t.count;v<y;v+=3){const E=t.getX(v+0),A=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),s.setXYZ(v+0,g.x,g.y,g.z),s.setXYZ(v+1,g.x,g.y,g.z),s.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,_=h.normalized,v=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){h.isInterleavedBufferAttribute?y=m[A]*h.data.stride+h.offset:y=m[A]*g;for(let x=0;x<g;x++)v[E++]=p[y++]}return new gi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new vn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,_=p.length;g<_;g++){const v=p[g],y=t(v,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const y=p[_];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,y=_.length;v<y;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f0=new Ue,ds=new tl,yc=new Ya,h0=new V,Sc=new V,Mc=new V,Ec=new V,Lh=new V,Tc=new V,d0=new V,bc=new V;class Be extends rn{constructor(t=new vn,i=new yv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Tc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],_=c[m];g!==0&&(Lh.fromBufferAttribute(_,t),f?Tc.addScaledVector(Lh,g):Tc.addScaledVector(Lh.sub(i),g))}i.add(Tc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),yc.copy(s.boundingSphere),yc.applyMatrix4(c),ds.copy(t.ray).recast(t.near),!(yc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(yc,h0)===null||ds.origin.distanceToSquared(h0)>(t.far-t.near)**2))&&(f0.copy(c).invert(),ds.copy(t.ray).applyMatrix4(f0),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const S=v[E],x=f[S.materialIndex],I=Math.max(S.start,y.start),L=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let D=I,P=L;D<P;D+=3){const B=h.getX(D),H=h.getX(D+1),W=h.getX(D+2);l=Ac(this,x,t,s,p,g,_,B,H,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let S=E,x=A;S<x;S+=3){const I=h.getX(S),L=h.getX(S+1),D=h.getX(S+2);l=Ac(this,f,t,s,p,g,_,I,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const S=v[E],x=f[S.materialIndex],I=Math.max(S.start,y.start),L=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let D=I,P=L;D<P;D+=3){const B=D,H=D+1,W=D+2;l=Ac(this,x,t,s,p,g,_,B,H,W),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,x=A;S<x;S+=3){const I=S,L=S+1,D=S+2;l=Ac(this,f,t,s,p,g,_,I,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function rM(r,t,i,s,l,c,f,h){let m;if(t.side===Hn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,t.side===Wa,h),m===null)return null;bc.copy(h),bc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(bc);return p<i.near||p>i.far?null:{distance:p,point:bc.clone(),object:r}}function Ac(r,t,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Sc),r.getVertexPosition(m,Mc),r.getVertexPosition(p,Ec);const g=rM(r,t,i,s,Sc,Mc,Ec,d0);if(g){const _=new V;bi.getBarycoord(d0,Sc,Mc,Ec,_),l&&(g.uv=bi.getInterpolatedAttribute(l,h,m,p,_,new Ht)),c&&(g.uv1=bi.getInterpolatedAttribute(c,h,m,p,_,new Ht)),f&&(g.normal=bi.getInterpolatedAttribute(f,h,m,p,_,new V),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new V,materialIndex:0};bi.getNormal(Sc,Mc,Ec,v.normal),g.face=v,g.barycoord=_}return g}class Ir extends vn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,y=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new je(p,3)),this.setAttribute("normal",new je(g,3)),this.setAttribute("uv",new je(_,2));function E(A,S,x,I,L,D,P,B,H,W,R){const C=D/H,G=P/W,q=D/2,nt=P/2,ut=B/2,rt=H+1,O=W+1;let Y=0,Z=0;const xt=new V;for(let U=0;U<O;U++){const $=U*G-nt;for(let vt=0;vt<rt;vt++){const yt=vt*C-q;xt[A]=yt*I,xt[S]=$*L,xt[x]=ut,p.push(xt.x,xt.y,xt.z),xt[A]=0,xt[S]=0,xt[x]=B>0?1:-1,g.push(xt.x,xt.y,xt.z),_.push(vt/H),_.push(1-U/W),Y+=1}}for(let U=0;U<W;U++)for(let $=0;$<H;$++){const vt=v+$+rt*U,yt=v+$+rt*(U+1),Ct=v+($+1)+rt*(U+1),Pt=v+($+1)+rt*U;m.push(vt,yt,Pt),m.push(yt,Ct,Pt),Z+=6}h.addGroup(y,Z,R),y+=Z,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Fn(r){const t={};for(let i=0;i<r.length;i++){const s=zr(r[i]);for(const l in s)t[l]=s[l]}return t}function oM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Ev(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const lM={clone:zr,merge:Fn};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends ca{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=oM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Tv extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new V,p0=new Ht,m0=new Ht;class ri extends Tv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=zd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zd*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,p0,m0),i.subVectors(m0,p0)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xr=-90,yr=1;class fM extends rn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(xr,yr,t,i);l.layers=this.layers,this.add(l);const c=new ri(xr,yr,t,i);c.layers=this.layers,this.add(c);const f=new ri(xr,yr,t,i);f.layers=this.layers,this.add(f);const h=new ri(xr,yr,t,i);h.layers=this.layers,this.add(h);const m=new ri(xr,yr,t,i);m.layers=this.layers,this.add(m);const p=new ri(xr,yr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(t===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,v,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class bv extends Gn{constructor(t=[],i=Nr,s,l,c,f,h,m,p,g){super(t,i,s,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hM extends Ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ir(5,5,5),c=new qa({name:"CubemapFromEquirect",uniforms:zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:ka});c.uniforms.tEquirect.value=i;const f=new Be(l,c),h=i.minFilter;return i.minFilter===Ss&&(i.minFilter=zi),new fM(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class oa extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dM={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,s),x=this._getHandJoint(p,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&v>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(dM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new oa;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Av extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class pM extends Gn{constructor(t=null,i=1,s=1,l,c,f,h,m,p=oi,g=oi,_,v){super(null,f,h,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g0 extends gi{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Sr=new Ue,_0=new Ue,Rc=[],v0=new As,mM=new Ue,Ho=new Be,Go=new Ya;class Id extends Be{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new g0(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,mM)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new As),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Sr),v0.copy(t.boundingBox).applyMatrix4(Sr),this.boundingBox.union(v0)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ya),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Sr),Go.copy(t.boundingSphere).applyMatrix4(Sr),this.boundingSphere.union(Go)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let h=0;h<s.length;h++)s[h]=l[f+h]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Ho.geometry=this.geometry,Ho.material=this.material,Ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(s),t.ray.intersectsSphere(Go)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Sr),_0.multiplyMatrices(s,Sr),Ho.matrixWorld=_0,Ho.raycast(t,Rc);for(let f=0,h=Rc.length;f<h;f++){const m=Rc[f];m.instanceId=c,m.object=this,i.push(m)}Rc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new g0(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new pM(new Float32Array(l*this.count),l,this.count,jd,Ii));const c=this.morphTexture.source.data.data;let f=0;for(let p=0;p<s.length;p++)f+=s[p];const h=this.geometry.morphTargetsRelative?1:1-f,m=l*t;c[m]=h,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oh=new V,gM=new V,_M=new ue;class Ga{constructor(t=new V(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Oh.subVectors(s,i).cross(gM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Oh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||_M.getNormalMatrix(t),l=this.coplanarPoint(Oh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Ya,vM=new Ht(.5,.5),wc=new V;class ep{constructor(t=new Ga,i=new Ga,s=new Ga,l=new Ga,c=new Ga,f=new Ga){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Bi,s=!1){const l=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],y=c[7],E=c[8],A=c[9],S=c[10],x=c[11],I=c[12],L=c[13],D=c[14],P=c[15];if(l[0].setComponents(p-f,y-g,x-E,P-I).normalize(),l[1].setComponents(p+f,y+g,x+E,P+I).normalize(),l[2].setComponents(p+h,y+_,x+A,P+L).normalize(),l[3].setComponents(p-h,y-_,x-A,P-L).normalize(),s)l[4].setComponents(m,v,S,D).normalize(),l[5].setComponents(p-m,y-v,x-S,P-D).normalize();else if(l[4].setComponents(p-m,y-v,x-S,P-D).normalize(),i===Bi)l[5].setComponents(p+m,y+v,x+S,P+D).normalize();else if(i===jc)l[5].setComponents(m,v,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);const i=vM.distanceTo(t.center);return ps.radius=.7071067811865476+i,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(wc.x=l.normal.x>0?t.max.x:t.min.x,wc.y=l.normal.y>0?t.max.y:t.min.y,wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Rv extends ca{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Kc=new V,Qc=new V,x0=new Ue,Vo=new tl,Cc=new Ya,Ph=new V,y0=new V;class S0 extends rn{constructor(t=new vn,i=new Rv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Kc.fromBufferAttribute(i,l-1),Qc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Kc.distanceTo(Qc);t.setAttribute("lineDistance",new je(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,t.ray.intersectsSphere(Cc)===!1)return;x0.copy(l).invert(),Vo.copy(t.ray).applyMatrix4(x0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,g=s.index,v=s.attributes.position;if(g!==null){const y=Math.max(0,f.start),E=Math.min(g.count,f.start+f.count);for(let A=y,S=E-1;A<S;A+=p){const x=g.getX(A),I=g.getX(A+1),L=Dc(this,t,Vo,m,x,I,A);L&&i.push(L)}if(this.isLineLoop){const A=g.getX(E-1),S=g.getX(y),x=Dc(this,t,Vo,m,A,S,E-1);x&&i.push(x)}}else{const y=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let A=y,S=E-1;A<S;A+=p){const x=Dc(this,t,Vo,m,A,A+1,A);x&&i.push(x)}if(this.isLineLoop){const A=Dc(this,t,Vo,m,E-1,y,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Dc(r,t,i,s,l,c,f){const h=r.geometry.attributes.position;if(Kc.fromBufferAttribute(h,l),Qc.fromBufferAttribute(h,c),i.distanceSqToSegment(Kc,Qc,Ph,y0)>s)return;Ph.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ph);if(!(p<t.near||p>t.far))return{distance:p,point:y0.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class Wc extends ca{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const M0=new Ue,Bd=new tl,Uc=new Ya,Lc=new V;class Nc extends rn{constructor(t=new vn,i=new Wc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Uc.copy(s.boundingSphere),Uc.applyMatrix4(l),Uc.radius+=c,t.ray.intersectsSphere(Uc)===!1)return;M0.copy(l).invert(),Bd.copy(t.ray).applyMatrix4(M0);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const v=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let E=v,A=y;E<A;E++){const S=p.getX(E);Lc.fromBufferAttribute(_,S),E0(Lc,S,m,l,t,i,this)}}else{const v=Math.max(0,f.start),y=Math.min(_.count,f.start+f.count);for(let E=v,A=y;E<A;E++)Lc.fromBufferAttribute(_,E),E0(Lc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function E0(r,t,i,s,l,c,f){const h=Bd.distanceSqToPoint(r);if(h<i){const m=new V;Bd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class wv extends Gn{constructor(t,i,s=Ms,l,c,f,h=oi,m=oi,p,g=Zo,_=1){if(g!==Zo&&g!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:_};super(v,l,c,f,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $d(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Cv extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class np extends vn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],v=[],y=[];let E=0;const A=[],S=s/2;let x=0;I(),f===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(y,2));function I(){const D=new V,P=new V;let B=0;const H=(i-t)/s;for(let W=0;W<=c;W++){const R=[],C=W/c,G=C*(i-t)+t;for(let q=0;q<=l;q++){const nt=q/l,ut=nt*m+h,rt=Math.sin(ut),O=Math.cos(ut);P.x=G*rt,P.y=-C*s+S,P.z=G*O,_.push(P.x,P.y,P.z),D.set(rt,H,O).normalize(),v.push(D.x,D.y,D.z),y.push(nt,1-C),R.push(E++)}A.push(R)}for(let W=0;W<l;W++)for(let R=0;R<c;R++){const C=A[R][W],G=A[R+1][W],q=A[R+1][W+1],nt=A[R][W+1];(t>0||R!==0)&&(g.push(C,G,nt),B+=3),(i>0||R!==c-1)&&(g.push(G,q,nt),B+=3)}p.addGroup(x,B,0),x+=B}function L(D){const P=E,B=new Ht,H=new V;let W=0;const R=D===!0?t:i,C=D===!0?1:-1;for(let q=1;q<=l;q++)_.push(0,S*C,0),v.push(0,C,0),y.push(.5,.5),E++;const G=E;for(let q=0;q<=l;q++){const ut=q/l*m+h,rt=Math.cos(ut),O=Math.sin(ut);H.x=R*O,H.y=S*C,H.z=R*rt,_.push(H.x,H.y,H.z),v.push(0,C,0),B.x=rt*.5+.5,B.y=O*.5*C+.5,y.push(B.x,B.y),E++}for(let q=0;q<l;q++){const nt=P+q,ut=G+q;D===!0?g.push(ut,ut+1,nt):g.push(ut+1,ut,nt),W+=3}p.addGroup(x,W,D===!0?1:2),x+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new np(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ip extends np{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,h=Math.PI*2){super(0,t,i,s,l,c,f,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:h}}static fromJSON(t){return new ip(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(l=Math.floor(h+(m-h)/2),p=s[l]-f,p<0)h=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const g=s[l],v=s[l+1]-g,y=(f-g)/v;return(l+y)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),h=this.getPoint(c),m=i||(f.isVector2?new Ht:new V);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new V,l=[],c=[],f=[],h=new V,m=new Ue;for(let y=0;y<=t;y++){const E=y/t;l[y]=this.getTangentAt(E,new V)}c[0]=new V,f[0]=new V;let p=Number.MAX_VALUE;const g=Math.abs(l[0].x),_=Math.abs(l[0].y),v=Math.abs(l[0].z);g<=p&&(p=g,s.set(1,0,0)),_<=p&&(p=_,s.set(0,1,0)),v<=p&&s.set(0,0,1),h.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],h),f[0].crossVectors(l[0],c[0]);for(let y=1;y<=t;y++){if(c[y]=c[y-1].clone(),f[y]=f[y-1].clone(),h.crossVectors(l[y-1],l[y]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(fe(l[y-1].dot(l[y]),-1,1));c[y].applyMatrix4(m.makeRotationAxis(h,E))}f[y].crossVectors(l[y],c[y])}if(i===!0){let y=Math.acos(fe(c[0].dot(c[t]),-1,1));y/=t,l[0].dot(h.crossVectors(c[0],c[t]))>0&&(y=-y);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(l[E],y*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dv extends ua{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,i=new Ht){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),v=m-this.aX,y=p-this.aY;m=v*g-y*_+this.aX,p=v*_+y*g+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class xM extends Dv{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function ap(){let r=0,t=0,i=0,s=0;function l(c,f,h,m){r=c,t=h,i=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){l(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,g,_){let v=(f-c)/p-(h-c)/(p+g)+(h-f)/g,y=(h-f)/g-(m-f)/(g+_)+(m-h)/_;v*=g,y*=g,l(f,h,v,y)},calc:function(c){const f=c*c,h=f*c;return r+t*c+i*f+s*h}}}const Oc=new V,zh=new ap,Ih=new ap,Bh=new ap;class sp extends ua{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new V){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,g;this.closed||h>0?p=l[(h-1)%c]:(Oc.subVectors(l[0],l[1]).add(l[0]),p=Oc);const _=l[h%c],v=l[(h+1)%c];if(this.closed||h+2<c?g=l[(h+2)%c]:(Oc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Oc),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),y),A=Math.pow(_.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(g),y);A<1e-4&&(A=1),E<1e-4&&(E=A),S<1e-4&&(S=A),zh.initNonuniformCatmullRom(p.x,_.x,v.x,g.x,E,A,S),Ih.initNonuniformCatmullRom(p.y,_.y,v.y,g.y,E,A,S),Bh.initNonuniformCatmullRom(p.z,_.z,v.z,g.z,E,A,S)}else this.curveType==="catmullrom"&&(zh.initCatmullRom(p.x,_.x,v.x,g.x,this.tension),Ih.initCatmullRom(p.y,_.y,v.y,g.y,this.tension),Bh.initCatmullRom(p.z,_.z,v.z,g.z,this.tension));return s.set(zh.calc(m),Ih.calc(m),Bh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new V().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function T0(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,h=r*r,m=r*h;return(2*i-2*s+c+f)*m+(-3*i+3*s-2*c-f)*h+c*r+i}function yM(r,t){const i=1-r;return i*i*t}function SM(r,t){return 2*(1-r)*r*t}function MM(r,t){return r*r*t}function Wo(r,t,i,s){return yM(r,t)+SM(r,i)+MM(r,s)}function EM(r,t){const i=1-r;return i*i*i*t}function TM(r,t){const i=1-r;return 3*i*i*r*t}function bM(r,t){return 3*(1-r)*r*r*t}function AM(r,t){return r*r*r*t}function qo(r,t,i,s,l){return EM(r,t)+TM(r,i)+bM(r,s)+AM(r,l)}class RM extends ua{constructor(t=new Ht,i=new Ht,s=new Ht,l=new Ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Ht){const s=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(qo(t,l.x,c.x,f.x,h.x),qo(t,l.y,c.y,f.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wM extends ua{constructor(t=new V,i=new V,s=new V,l=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new V){const s=i,l=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(qo(t,l.x,c.x,f.x,h.x),qo(t,l.y,c.y,f.y,h.y),qo(t,l.z,c.z,f.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class CM extends ua{constructor(t=new Ht,i=new Ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Ht){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Ht){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class DM extends ua{constructor(t=new V,i=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new V){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new V){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class UM extends ua{constructor(t=new Ht,i=new Ht,s=new Ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Ht){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(Wo(t,l.x,c.x,f.x),Wo(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uv extends ua{constructor(t=new V,i=new V,s=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new V){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(Wo(t,l.x,c.x,f.x),Wo(t,l.y,c.y,f.y),Wo(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class LM extends ua{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Ht){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),h=c-f,m=l[f===0?f:f-1],p=l[f],g=l[f>l.length-2?l.length-1:f+1],_=l[f>l.length-3?l.length-1:f+2];return s.set(T0(h,m.x,p.x,g.x,_.x),T0(h,m.y,p.y,g.y,_.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Ht().fromArray(l))}return this}}var NM=Object.freeze({__proto__:null,ArcCurve:xM,CatmullRomCurve3:sp,CubicBezierCurve:RM,CubicBezierCurve3:wM,EllipseCurve:Dv,LineCurve:CM,LineCurve3:DM,QuadraticBezierCurve:UM,QuadraticBezierCurve3:Uv,SplineCurve:LM});class eu extends vn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,_=t/h,v=i/m,y=[],E=[],A=[],S=[];for(let x=0;x<g;x++){const I=x*v-f;for(let L=0;L<p;L++){const D=L*_-c;E.push(D,-I,0),A.push(0,0,1),S.push(L/h),S.push(1-x/m)}}for(let x=0;x<m;x++)for(let I=0;I<h;I++){const L=I+p*x,D=I+p*(x+1),P=I+1+p*(x+1),B=I+1+p*x;y.push(L,D,B),y.push(D,P,B)}this.setIndex(y),this.setAttribute("position",new je(E,3)),this.setAttribute("normal",new je(A,3)),this.setAttribute("uv",new je(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Jc extends vn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const g=[],_=new V,v=new V,y=[],E=[],A=[],S=[];for(let x=0;x<=s;x++){const I=[],L=x/s;let D=0;x===0&&f===0?D=.5/i:x===s&&m===Math.PI&&(D=-.5/i);for(let P=0;P<=i;P++){const B=P/i;_.x=-t*Math.cos(l+B*c)*Math.sin(f+L*h),_.y=t*Math.cos(f+L*h),_.z=t*Math.sin(l+B*c)*Math.sin(f+L*h),E.push(_.x,_.y,_.z),v.copy(_).normalize(),A.push(v.x,v.y,v.z),S.push(B+D,1-L),I.push(p++)}g.push(I)}for(let x=0;x<s;x++)for(let I=0;I<i;I++){const L=g[x][I+1],D=g[x][I],P=g[x+1][I],B=g[x+1][I+1];(x!==0||f>0)&&y.push(L,D,B),(x!==s-1||m<Math.PI)&&y.push(D,P,B)}this.setIndex(y),this.setAttribute("position",new je(E,3)),this.setAttribute("normal",new je(A,3)),this.setAttribute("uv",new je(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $c extends vn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],h=[],m=[],p=[],g=new V,_=new V,v=new V;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const A=E/l*c,S=y/s*Math.PI*2;_.x=(t+i*Math.cos(S))*Math.cos(A),_.y=(t+i*Math.cos(S))*Math.sin(A),_.z=i*Math.sin(S),h.push(_.x,_.y,_.z),g.x=t*Math.cos(A),g.y=t*Math.sin(A),v.subVectors(_,g).normalize(),m.push(v.x,v.y,v.z),p.push(E/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const A=(l+1)*y+E-1,S=(l+1)*(y-1)+E-1,x=(l+1)*(y-1)+E,I=(l+1)*y+E;f.push(A,S,I),f.push(S,x,I)}this.setIndex(f),this.setAttribute("position",new je(h,3)),this.setAttribute("normal",new je(m,3)),this.setAttribute("uv",new je(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $c(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rp extends vn{constructor(t=new Uv(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const h=new V,m=new V,p=new Ht;let g=new V;const _=[],v=[],y=[],E=[];A(),this.setIndex(E),this.setAttribute("position",new je(_,3)),this.setAttribute("normal",new je(v,3)),this.setAttribute("uv",new je(y,2));function A(){for(let L=0;L<i;L++)S(L);S(c===!1?i:0),I(),x()}function S(L){g=t.getPointAt(L/i,g);const D=f.normals[L],P=f.binormals[L];for(let B=0;B<=l;B++){const H=B/l*Math.PI*2,W=Math.sin(H),R=-Math.cos(H);m.x=R*D.x+W*P.x,m.y=R*D.y+W*P.y,m.z=R*D.z+W*P.z,m.normalize(),v.push(m.x,m.y,m.z),h.x=g.x+s*m.x,h.y=g.y+s*m.y,h.z=g.z+s*m.z,_.push(h.x,h.y,h.z)}}function x(){for(let L=1;L<=i;L++)for(let D=1;D<=l;D++){const P=(l+1)*(L-1)+(D-1),B=(l+1)*L+(D-1),H=(l+1)*L+D,W=(l+1)*(L-1)+D;E.push(P,B,W),E.push(B,H,W)}}function I(){for(let L=0;L<=i;L++)for(let D=0;D<=l;D++)p.x=L/i,p.y=D/l,y.push(p.x,p.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new rp(new NM[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ur extends ca{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Mr extends Ur{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new he(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new he(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new he(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class OM extends ca{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jd,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class PM extends ca{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class zM extends ca{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class op extends rn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class IM extends op{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Fh=new Ue,b0=new V,A0=new V;class Lv{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ep,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;b0.setFromMatrixPosition(t.matrixWorld),i.position.copy(b0),A0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(A0),i.updateMatrixWorld(),Fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const R0=new Ue,ko=new V,Hh=new V;class BM extends Lv{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),ko.setFromMatrixPosition(t.matrixWorld),s.position.copy(ko),Hh.copy(s.position),Hh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Hh),s.updateMatrixWorld(),l.makeTranslation(-ko.x,-ko.y,-ko.z),R0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(R0,s.coordinateSystem,s.reversedDepth)}}class Nv extends op{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new BM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ov extends Tv{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class FM extends Lv{constructor(){super(new Ov(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gh extends op{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new FM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class HM extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const w0=new Ue;class GM{constructor(t,i,s=0,l=1/0){this.ray=new tl(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new tp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return w0.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w0),this}intersectObject(t,i=!0,s=[]){return Fd(t,this,s,i),s.sort(C0),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)Fd(t[l],this,s,i);return s.sort(C0),s}}function C0(r,t){return r.distance-t.distance}function Fd(r,t,i,s){let l=!0;if(r.layers.test(t.layers)&&r.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)Fd(c[f],t,i,!0)}}class D0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=fe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(fe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class VM extends bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function U0(r,t,i,s){const l=kM(s);switch(i){case hv:return r*t;case jd:return r*t/l.components*l.byteLength;case Zd:return r*t/l.components*l.byteLength;case pv:return r*t*2/l.components*l.byteLength;case Kd:return r*t*2/l.components*l.byteLength;case dv:return r*t*3/l.components*l.byteLength;case Ai:return r*t*4/l.components*l.byteLength;case Qd:return r*t*4/l.components*l.byteLength;case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Vc:case kc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cd:case fd:return Math.max(r,16)*Math.max(t,8)/4;case ld:case ud:return Math.max(r,8)*Math.max(t,8)/2;case hd:case dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case pd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case _d:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case vd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case yd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Md:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Rd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case wd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cd:case Dd:case Ud:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ld:case Nd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Od:case Pd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kM(r){switch(r){case Fi:case lv:return{byteLength:1,components:1};case Yo:case cv:case Jo:return{byteLength:2,components:1};case qd:case Yd:return{byteLength:2,components:4};case Ms:case Wd:case Ii:return{byteLength:4,components:1};case uv:case fv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function XM(r){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let v=0;for(let y=1;y<_.length;y++){const E=_[v],A=_[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,_[v]=A)}_.length=v+1;for(let y=0,E=_.length;y<E;y++){const A=_[y];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var WM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$E=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,oT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,uT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ST=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ET=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,DT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,UT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,LT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,OT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,BT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,QT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,JT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$T=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,db=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_b=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:WM,alphahash_pars_fragment:qM,alphamap_fragment:YM,alphamap_pars_fragment:jM,alphatest_fragment:ZM,alphatest_pars_fragment:KM,aomap_fragment:QM,aomap_pars_fragment:JM,batching_pars_vertex:$M,batching_vertex:tE,begin_vertex:eE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:aE,bumpmap_pars_fragment:sE,clipping_planes_fragment:rE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:fE,color_pars_vertex:hE,color_vertex:dE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:gE,displacementmap_pars_vertex:_E,displacementmap_vertex:vE,emissivemap_fragment:xE,emissivemap_pars_fragment:yE,colorspace_fragment:SE,colorspace_pars_fragment:ME,envmap_fragment:EE,envmap_common_pars_fragment:TE,envmap_pars_fragment:bE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:IE,envmap_vertex:RE,fog_vertex:wE,fog_pars_vertex:CE,fog_fragment:DE,fog_pars_fragment:UE,gradientmap_pars_fragment:LE,lightmap_pars_fragment:NE,lights_lambert_fragment:OE,lights_lambert_pars_fragment:PE,lights_pars_begin:zE,lights_toon_fragment:BE,lights_toon_pars_fragment:FE,lights_phong_fragment:HE,lights_phong_pars_fragment:GE,lights_physical_fragment:VE,lights_physical_pars_fragment:kE,lights_fragment_begin:XE,lights_fragment_maps:WE,lights_fragment_end:qE,logdepthbuf_fragment:YE,logdepthbuf_pars_fragment:jE,logdepthbuf_pars_vertex:ZE,logdepthbuf_vertex:KE,map_fragment:QE,map_pars_fragment:JE,map_particle_fragment:$E,map_particle_pars_fragment:tT,metalnessmap_fragment:eT,metalnessmap_pars_fragment:nT,morphinstance_vertex:iT,morphcolor_vertex:aT,morphnormal_vertex:sT,morphtarget_pars_vertex:rT,morphtarget_vertex:oT,normal_fragment_begin:lT,normal_fragment_maps:cT,normal_pars_fragment:uT,normal_pars_vertex:fT,normal_vertex:hT,normalmap_pars_fragment:dT,clearcoat_normal_fragment_begin:pT,clearcoat_normal_fragment_maps:mT,clearcoat_pars_fragment:gT,iridescence_pars_fragment:_T,opaque_fragment:vT,packing:xT,premultiplied_alpha_fragment:yT,project_vertex:ST,dithering_fragment:MT,dithering_pars_fragment:ET,roughnessmap_fragment:TT,roughnessmap_pars_fragment:bT,shadowmap_pars_fragment:AT,shadowmap_pars_vertex:RT,shadowmap_vertex:wT,shadowmask_pars_fragment:CT,skinbase_vertex:DT,skinning_pars_vertex:UT,skinning_vertex:LT,skinnormal_vertex:NT,specularmap_fragment:OT,specularmap_pars_fragment:PT,tonemapping_fragment:zT,tonemapping_pars_fragment:IT,transmission_fragment:BT,transmission_pars_fragment:FT,uv_pars_fragment:HT,uv_pars_vertex:GT,uv_vertex:VT,worldpos_vertex:kT,background_vert:XT,background_frag:WT,backgroundCube_vert:qT,backgroundCube_frag:YT,cube_vert:jT,cube_frag:ZT,depth_vert:KT,depth_frag:QT,distanceRGBA_vert:JT,distanceRGBA_frag:$T,equirect_vert:tb,equirect_frag:eb,linedashed_vert:nb,linedashed_frag:ib,meshbasic_vert:ab,meshbasic_frag:sb,meshlambert_vert:rb,meshlambert_frag:ob,meshmatcap_vert:lb,meshmatcap_frag:cb,meshnormal_vert:ub,meshnormal_frag:fb,meshphong_vert:hb,meshphong_frag:db,meshphysical_vert:pb,meshphysical_frag:mb,meshtoon_vert:gb,meshtoon_frag:_b,points_vert:vb,points_frag:xb,shadow_vert:yb,shadow_frag:Sb,sprite_vert:Mb,sprite_frag:Eb},Ot={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Pi={basic:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Fn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Fn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new he(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Fn([Ot.points,Ot.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Fn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Fn([Ot.common,Ot.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Fn([Ot.sprite,Ot.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Fn([Ot.common,Ot.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Fn([Ot.lights,Ot.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Pi.physical={uniforms:Fn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Pc={r:0,b:0,g:0},ms=new Ri,Tb=new Ue;function bb(r,t,i,s,l,c,f){const h=new he(0);let m=c===!0?0:1,p,g,_=null,v=0,y=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function A(L){let D=!1;const P=E(L);P===null?x(h,m):P&&P.isColor&&(x(P,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(L,D){const P=E(D);P&&(P.isCubeTexture||P.mapping===tu)?(g===void 0&&(g=new Be(new Ir(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:zr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,H,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ms.copy(D.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Tb.makeRotationFromEuler(ms)),g.material.toneMapped=Ae.getTransfer(P.colorSpace)!==Ie,(_!==P||v!==P.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=P,v=P.version,y=r.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Be(new eu(2,2),new qa({name:"BackgroundMaterial",uniforms:zr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(P.colorSpace)!==Ie,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,v=P.version,y=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,D){L.getRGB(Pc,Ev(r)),s.buffers.color.setClear(Pc.r,Pc.g,Pc.b,D,f)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,x(h,m)},render:A,addToRenderList:S,dispose:I}}function Ab(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function h(C,G,q,nt,ut){let rt=!1;const O=_(nt,q,G);c!==O&&(c=O,p(c.object)),rt=y(C,nt,q,ut),rt&&E(C,nt,q,ut),ut!==null&&t.update(ut,r.ELEMENT_ARRAY_BUFFER),(rt||f)&&(f=!1,D(C,G,q,nt),ut!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function _(C,G,q){const nt=q.wireframe===!0;let ut=s[C.id];ut===void 0&&(ut={},s[C.id]=ut);let rt=ut[G.id];rt===void 0&&(rt={},ut[G.id]=rt);let O=rt[nt];return O===void 0&&(O=v(m()),rt[nt]=O),O}function v(C){const G=[],q=[],nt=[];for(let ut=0;ut<i;ut++)G[ut]=0,q[ut]=0,nt[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:nt,object:C,attributes:{},index:null}}function y(C,G,q,nt){const ut=c.attributes,rt=G.attributes;let O=0;const Y=q.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const U=ut[Z];let $=rt[Z];if($===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;O++}return c.attributesNum!==O||c.index!==nt}function E(C,G,q,nt){const ut={},rt=G.attributes;let O=0;const Y=q.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let U=rt[Z];U===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ut[Z]=$,O++}c.attributes=ut,c.attributesNum=O,c.index=nt}function A(){const C=c.newAttributes;for(let G=0,q=C.length;G<q;G++)C[G]=0}function S(C){x(C,0)}function x(C,G){const q=c.newAttributes,nt=c.enabledAttributes,ut=c.attributeDivisors;q[C]=1,nt[C]===0&&(r.enableVertexAttribArray(C),nt[C]=1),ut[C]!==G&&(r.vertexAttribDivisor(C,G),ut[C]=G)}function I(){const C=c.newAttributes,G=c.enabledAttributes;for(let q=0,nt=G.length;q<nt;q++)G[q]!==C[q]&&(r.disableVertexAttribArray(q),G[q]=0)}function L(C,G,q,nt,ut,rt,O){O===!0?r.vertexAttribIPointer(C,G,q,ut,rt):r.vertexAttribPointer(C,G,q,nt,ut,rt)}function D(C,G,q,nt){A();const ut=nt.attributes,rt=q.getAttributes(),O=G.defaultAttributeValues;for(const Y in rt){const Z=rt[Y];if(Z.location>=0){let xt=ut[Y];if(xt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),xt!==void 0){const U=xt.normalized,$=xt.itemSize,vt=t.get(xt);if(vt===void 0)continue;const yt=vt.buffer,Ct=vt.type,Pt=vt.bytesPerElement,J=Ct===r.INT||Ct===r.UNSIGNED_INT||xt.gpuType===Wd;if(xt.isInterleavedBufferAttribute){const ft=xt.data,St=ft.stride,Zt=xt.offset;if(ft.isInstancedInterleavedBuffer){for(let Yt=0;Yt<Z.locationSize;Yt++)x(Z.location+Yt,ft.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Yt=0;Yt<Z.locationSize;Yt++)S(Z.location+Yt);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let Yt=0;Yt<Z.locationSize;Yt++)L(Z.location+Yt,$/Z.locationSize,Ct,U,St*Pt,(Zt+$/Z.locationSize*Yt)*Pt,J)}else{if(xt.isInstancedBufferAttribute){for(let ft=0;ft<Z.locationSize;ft++)x(Z.location+ft,xt.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ft=0;ft<Z.locationSize;ft++)S(Z.location+ft);r.bindBuffer(r.ARRAY_BUFFER,yt);for(let ft=0;ft<Z.locationSize;ft++)L(Z.location+ft,$/Z.locationSize,Ct,U,$*Pt,$/Z.locationSize*ft*Pt,J)}}else if(O!==void 0){const U=O[Y];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(Z.location,U);break;case 3:r.vertexAttrib3fv(Z.location,U);break;case 4:r.vertexAttrib4fv(Z.location,U);break;default:r.vertexAttrib1fv(Z.location,U)}}}}I()}function P(){W();for(const C in s){const G=s[C];for(const q in G){const nt=G[q];for(const ut in nt)g(nt[ut].object),delete nt[ut];delete G[q]}delete s[C]}}function B(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const q in G){const nt=G[q];for(const ut in nt)g(nt[ut].object),delete nt[ut];delete G[q]}delete s[C.id]}function H(C){for(const G in s){const q=s[G];if(q[C.id]===void 0)continue;const nt=q[C.id];for(const ut in nt)g(nt[ut].object),delete nt[ut];delete q[C.id]}}function W(){R(),f=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:B,releaseStatesOfProgram:H,initAttributes:A,enableAttribute:S,disableUnusedAttributes:I}}function Rb(r,t,i){let s;function l(p){s=p}function c(p,g){r.drawArrays(s,p,g),i.update(g,s,1)}function f(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];i.update(y,s,1)}function m(p,g,_,v){if(_===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)f(p[E],g[E],v[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,v,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*v[A];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function wb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(H){return!(H!==Ai&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const W=H===Jo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Fi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==Ii&&!W)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:P,maxSamples:B}}function Cb(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ga,h=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const y=_.length!==0||v||s!==0||l;return l=v,s=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,y){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const I=c?0:s,L=I*4;let D=x.clippingState||null;m.value=D,D=g(E,v,L,y);for(let P=0;P!==L;++P)D[P]=i[P];x.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,v,y,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const x=y+A*4,I=v.matrixWorldInverse;h.getNormalMatrix(I),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,D=y;L!==A;++L,D+=4)f.copy(_[L]).applyMatrix4(I,h),f.normal.toArray(S,D),S[D+3]=f.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function Db(r){let t=new WeakMap;function i(f,h){return h===ad?f.mapping=Nr:h===sd&&(f.mapping=Or),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===ad||h===sd)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new hM(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Rr=4,L0=[.125,.215,.35,.446,.526,.582],xs=20,Vh=new Ov,N0=new he;let kh=null,Xh=0,Wh=0,qh=!1;const _s=(1+Math.sqrt(5))/2,Er=1/_s,O0=[new V(-_s,Er,0),new V(_s,Er,0),new V(-Er,0,_s),new V(Er,0,_s),new V(0,_s,-Er),new V(0,_s,Er),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Ub=new V;class Hd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=Ub}=c;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=qh,t.scissorTest=!1,zc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Nr||t.mapping===Or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:Jo,format:Ai,colorSpace:Pr,depthBuffer:!1},l=P0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lb(c)),this._blurMaterial=Nb(c,t,i)}return l}_compileMaterial(t){const i=new Be(this._lodPlanes[0],t);this._renderer.compile(i,Vh)}_sceneToCubeUV(t,i,s,l,c){const m=new ri(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,y=_.toneMapping;_.getClearColor(N0),_.toneMapping=Xa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new yv({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),S=new Be(new Ir,A);let x=!1;const I=t.background;I?I.isColor&&(A.color.copy(I),t.background=null,x=!0):(A.color.copy(N0),x=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const P=this._cubeSize;zc(l,D*P,L>2?P:0,P,P),_.setRenderTarget(l),x&&_.render(S,m),_.render(t,m)}S.geometry.dispose(),S.material.dispose(),_.toneMapping=y,_.autoClear=v,t.background=I}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Nr||t.mapping===Or;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=I0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Be(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;zc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Vh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=O0[(l-c-1)%O0.length];this._blur(t,c-1,c,f,h)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Be(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*xs-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):xs;S>xs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const x=[];let I=0;for(let H=0;H<xs;++H){const W=H/A,R=Math.exp(-W*W/2);x.push(R),H===0?I+=R:H<S&&(I+=2*R)}for(let H=0;H<x.length;H++)x[H]=x[H]/I;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=x,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=E,v.mipInt.value=L-s;const D=this._sizeLods[l],P=3*D*(l>L-Rr?l-L+Rr:0),B=4*(this._cubeSize-D);zc(i,P,B,3*D,2*D),m.setRenderTarget(i),m.render(_,Vh)}}function Lb(r){const t=[],i=[],s=[];let l=r;const c=r-Rr+1+L0.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>r-Rr?m=L0[f-r+Rr-1]:f===0&&(m=0),s.push(m);const p=1/(h-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,A=3,S=2,x=1,I=new Float32Array(A*E*y),L=new Float32Array(S*E*y),D=new Float32Array(x*E*y);for(let B=0;B<y;B++){const H=B%3*2/3-1,W=B>2?0:-1,R=[H,W,0,H+2/3,W,0,H+2/3,W+1,0,H,W,0,H+2/3,W+1,0,H,W+1,0];I.set(R,A*E*B),L.set(v,S*E*B);const C=[B,B,B,B,B,B];D.set(C,x*E*B)}const P=new vn;P.setAttribute("position",new gi(I,A)),P.setAttribute("uv",new gi(L,S)),P.setAttribute("faceIndex",new gi(D,x)),t.push(P),l>Rr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function P0(r,t,i){const s=new Ts(r,t,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Nb(r,t,i){const s=new Float32Array(xs),l=new V(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function z0(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function I0(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function lp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ob(r){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===ad||m===sd,g=m===Nr||m===Or;if(p||g){let _=t.get(h);const v=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new Hd(r)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Hd(r)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",c),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Pb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Qo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function zb(r,t,i,s){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(t.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const y in v)t.update(v[y],r.ARRAY_BUFFER)}function p(_){const v=[],y=_.index,E=_.attributes.position;let A=0;if(y!==null){const I=y.array;A=y.version;for(let L=0,D=I.length;L<D;L+=3){const P=I[L+0],B=I[L+1],H=I[L+2];v.push(P,B,B,H,H,P)}}else if(E!==void 0){const I=E.array;A=E.version;for(let L=0,D=I.length/3-1;L<D;L+=3){const P=L+0,B=L+1,H=L+2;v.push(P,B,B,H,H,P)}}else return;const S=new(_v(v)?Mv:Sv)(v,1);S.version=A;const x=c.get(_);x&&t.remove(x),c.set(_,S)}function g(_){const v=c.get(_);if(v){const y=_.index;y!==null&&v.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:g}}function Ib(r,t,i){let s;function l(v){s=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*f),i.update(y,s,1)}function p(v,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,v*f,E),i.update(y,s,E))}function g(v,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,E);let S=0;for(let x=0;x<E;x++)S+=y[x];i.update(S,s,1)}function _(v,y,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<v.length;x++)p(v[x]/f,y[x],A[x]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,A,0,E);let x=0;for(let I=0;I<E;I++)x+=y[I]*A[I];i.update(x,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Bb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Fb(r,t,i){const s=new WeakMap,l=new He;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let v=s.get(h);if(v===void 0||v.count!==_){let C=function(){W.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var y=C;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],I=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),S===!0&&(D=3);let P=h.attributes.position.count*D,B=1;P>t.maxTextureSize&&(B=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const H=new Float32Array(P*B*4*_),W=new vv(H,P,B,_);W.type=Ii,W.needsUpdate=!0;const R=D*4;for(let G=0;G<_;G++){const q=x[G],nt=I[G],ut=L[G],rt=P*B*4*G;for(let O=0;O<q.count;O++){const Y=O*R;E===!0&&(l.fromBufferAttribute(q,O),H[rt+Y+0]=l.x,H[rt+Y+1]=l.y,H[rt+Y+2]=l.z,H[rt+Y+3]=0),A===!0&&(l.fromBufferAttribute(nt,O),H[rt+Y+4]=l.x,H[rt+Y+5]=l.y,H[rt+Y+6]=l.z,H[rt+Y+7]=0),S===!0&&(l.fromBufferAttribute(ut,O),H[rt+Y+8]=l.x,H[rt+Y+9]=l.y,H[rt+Y+10]=l.z,H[rt+Y+11]=ut.itemSize===4?l.w:1)}}v={count:_,texture:W,size:new Ht(P,B)},s.set(h,v),h.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function Hb(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const zv=new Gn,B0=new wv(1,1),Iv=new vv,Bv=new ZS,Fv=new bv,F0=[],H0=[],G0=new Float32Array(16),V0=new Float32Array(9),k0=new Float32Array(4);function Br(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=F0[l];if(c===void 0&&(c=new Float32Array(l),F0[l]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,r[f].toArray(c,h)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function nu(r,t){let i=H0[t];i===void 0&&(i=new Int32Array(t),H0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Gb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Vb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function kb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function Xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function Wb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,s))return;k0.set(s),r.uniformMatrix2fv(this.addr,!1,k0),yn(i,s)}}function qb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,s))return;V0.set(s),r.uniformMatrix3fv(this.addr,!1,V0),yn(i,s)}}function Yb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(xn(i,s))return;G0.set(s),r.uniformMatrix4fv(this.addr,!1,G0),yn(i,s)}}function jb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Zb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function Kb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function Qb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function Jb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function $b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function t1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function e1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function n1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(B0.compareFunction=mv,c=B0):c=zv,i.setTexture2D(t||c,l)}function i1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Bv,l)}function a1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Fv,l)}function s1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Iv,l)}function r1(r){switch(r){case 5126:return Gb;case 35664:return Vb;case 35665:return kb;case 35666:return Xb;case 35674:return Wb;case 35675:return qb;case 35676:return Yb;case 5124:case 35670:return jb;case 35667:case 35671:return Zb;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return Jb;case 36294:return $b;case 36295:return t1;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return s1}}function o1(r,t){r.uniform1fv(this.addr,t)}function l1(r,t){const i=Br(t,this.size,2);r.uniform2fv(this.addr,i)}function c1(r,t){const i=Br(t,this.size,3);r.uniform3fv(this.addr,i)}function u1(r,t){const i=Br(t,this.size,4);r.uniform4fv(this.addr,i)}function f1(r,t){const i=Br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function h1(r,t){const i=Br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function d1(r,t){const i=Br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function p1(r,t){r.uniform1iv(this.addr,t)}function m1(r,t){r.uniform2iv(this.addr,t)}function g1(r,t){r.uniform3iv(this.addr,t)}function _1(r,t){r.uniform4iv(this.addr,t)}function v1(r,t){r.uniform1uiv(this.addr,t)}function x1(r,t){r.uniform2uiv(this.addr,t)}function y1(r,t){r.uniform3uiv(this.addr,t)}function S1(r,t){r.uniform4uiv(this.addr,t)}function M1(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||zv,c[f])}function E1(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Bv,c[f])}function T1(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Fv,c[f])}function b1(r,t,i){const s=this.cache,l=t.length,c=nu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Iv,c[f])}function A1(r){switch(r){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return u1;case 35674:return f1;case 35675:return h1;case 35676:return d1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return v1;case 36294:return x1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return b1}}class R1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=r1(i.type)}}class w1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=A1(i.type)}}class C1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function X0(r,t){r.seq.push(t),r.map[t.id]=t}function D1(r,t,i){const s=r.name,l=s.length;for(Yh.lastIndex=0;;){const c=Yh.exec(s),f=Yh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){X0(i,p===void 0?new R1(h,r,t):new w1(h,r,t));break}else{let _=i.map[h];_===void 0&&(_=new C1(h),X0(i,_)),i=_}}}class qc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);D1(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function W0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const U1=37297;let L1=0;function N1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const q0=new ue;function O1(r){Ae._getMatrix(q0,Ae.workingColorSpace,r);const t=`mat3( ${q0.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(r)){case Yc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Y0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+N1(r.getShaderSource(t),h)}else return c}function P1(r,t){const i=O1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function z1(r,t){let i;switch(t){case ES:i="Linear";break;case TS:i="Reinhard";break;case bS:i="Cineon";break;case rv:i="ACESFilmic";break;case RS:i="AgX";break;case wS:i="Neutral";break;case AS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new V;function I1(){Ae.getLuminanceCoefficients(Ic);const r=Ic.x.toFixed(4),t=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function F1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function H1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return i}function Xo(r){return r!==""}function j0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Z0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(r){return r.replace(G1,k1)}const V1=new Map;function k1(r,t){let i=me[t];if(i===void 0){const s=V1.get(t);if(s!==void 0)i=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Gd(i)}const X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function K0(r){return r.replace(X1,W1)}function W1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Q0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function q1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===sv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===nS?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function Y1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Nr:case Or:t="ENVMAP_TYPE_CUBE";break;case tu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function j1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Or:t="ENVMAP_MODE_REFRACTION";break}return t}function Z1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xd:t="ENVMAP_BLENDING_MULTIPLY";break;case SS:t="ENVMAP_BLENDING_MIX";break;case MS:t="ENVMAP_BLENDING_ADD";break}return t}function K1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Q1(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=q1(i),p=Y1(i),g=j1(i),_=Z1(i),v=K1(i),y=B1(i),E=F1(c),A=l.createProgram();let S,x,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Xo).join(`
`),x.length>0&&(x+=`
`)):(S=[Q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),x=[Q0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?me.tonemapping_pars_fragment:"",i.toneMapping!==Xa?z1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,P1("linearToOutputTexel",i.outputColorSpace),I1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Xo).join(`
`)),f=Gd(f),f=j0(f,i),f=Z0(f,i),h=Gd(h),h=j0(h,i),h=Z0(h,i),f=K0(f),h=K0(h),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",i.glslVersion===J_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===J_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=I+S+f,D=I+x+h,P=W0(l,l.VERTEX_SHADER,L),B=W0(l,l.FRAGMENT_SHADER,D);l.attachShader(A,P),l.attachShader(A,B),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function H(G){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(A)||"",nt=l.getShaderInfoLog(P)||"",ut=l.getShaderInfoLog(B)||"",rt=q.trim(),O=nt.trim(),Y=ut.trim();let Z=!0,xt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,P,B);else{const U=Y0(l,P,"vertex"),$=Y0(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+rt+`
`+U+`
`+$)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(O===""||Y==="")&&(xt=!1);xt&&(G.diagnostics={runnable:Z,programLog:rt,vertexShader:{log:O,prefix:S},fragmentShader:{log:Y,prefix:x}})}l.deleteShader(P),l.deleteShader(B),W=new qc(l,A),R=H1(l,A)}let W;this.getUniforms=function(){return W===void 0&&H(this),W};let R;this.getAttributes=function(){return R===void 0&&H(this),R};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,U1)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=L1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=B,this}let J1=0;class $1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new tA(t),i.set(t,s)),s}}class tA{constructor(t){this.id=J1++,this.code=t,this.usedTimes=0}}function eA(r,t,i,s,l,c,f){const h=new tp,m=new $1,p=new Set,g=[],_=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return p.add(R),R===0?"uv":`uv${R}`}function S(R,C,G,q,nt){const ut=q.fog,rt=nt.geometry,O=R.isMeshStandardMaterial?q.environment:null,Y=(R.isMeshStandardMaterial?i:t).get(R.envMap||O),Z=Y&&Y.mapping===tu?Y.image.height:null,xt=E[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const U=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,$=U!==void 0?U.length:0;let vt=0;rt.morphAttributes.position!==void 0&&(vt=1),rt.morphAttributes.normal!==void 0&&(vt=2),rt.morphAttributes.color!==void 0&&(vt=3);let yt,Ct,Pt,J;if(xt){const Ee=Pi[xt];yt=Ee.vertexShader,Ct=Ee.fragmentShader}else yt=R.vertexShader,Ct=R.fragmentShader,m.update(R),Pt=m.getVertexShaderID(R),J=m.getFragmentShaderID(R);const ft=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),Zt=nt.isInstancedMesh===!0,Yt=nt.isBatchedMesh===!0,ge=!!R.map,on=!!R.matcap,F=!!Y,Le=!!R.aoMap,re=!!R.lightMap,ie=!!R.bumpMap,zt=!!R.normalMap,ke=!!R.displacementMap,kt=!!R.emissiveMap,oe=!!R.metalnessMap,Ze=!!R.roughnessMap,Ke=R.anisotropy>0,N=R.clearcoat>0,T=R.dispersion>0,it=R.iridescence>0,ht=R.sheen>0,mt=R.transmission>0,ct=Ke&&!!R.anisotropyMap,It=N&&!!R.clearcoatMap,At=N&&!!R.clearcoatNormalMap,Wt=N&&!!R.clearcoatRoughnessMap,jt=it&&!!R.iridescenceMap,Mt=it&&!!R.iridescenceThicknessMap,Lt=ht&&!!R.sheenColorMap,Qt=ht&&!!R.sheenRoughnessMap,Xt=!!R.specularMap,Dt=!!R.specularColorMap,le=!!R.specularIntensityMap,X=mt&&!!R.transmissionMap,bt=mt&&!!R.thicknessMap,Rt=!!R.gradientMap,Bt=!!R.alphaMap,Et=R.alphaTest>0,_t=!!R.alphaHash,Vt=!!R.extensions;let se=Xa;R.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(se=r.toneMapping);const we={shaderID:xt,shaderType:R.type,shaderName:R.name,vertexShader:yt,fragmentShader:Ct,defines:R.defines,customVertexShaderID:Pt,customFragmentShaderID:J,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Yt,batchingColor:Yt&&nt._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&nt.instanceColor!==null,instancingMorph:Zt&&nt.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:ft===null?r.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Pr,alphaToCoverage:!!R.alphaToCoverage,map:ge,matcap:on,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:Z,aoMap:Le,lightMap:re,bumpMap:ie,normalMap:zt,displacementMap:v&&ke,emissiveMap:kt,normalMapObjectSpace:zt&&R.normalMapType===LS,normalMapTangentSpace:zt&&R.normalMapType===Jd,metalnessMap:oe,roughnessMap:Ze,anisotropy:Ke,anisotropyMap:ct,clearcoat:N,clearcoatMap:It,clearcoatNormalMap:At,clearcoatRoughnessMap:Wt,dispersion:T,iridescence:it,iridescenceMap:jt,iridescenceThicknessMap:Mt,sheen:ht,sheenColorMap:Lt,sheenRoughnessMap:Qt,specularMap:Xt,specularColorMap:Dt,specularIntensityMap:le,transmission:mt,transmissionMap:X,thicknessMap:bt,gradientMap:Rt,opaque:R.transparent===!1&&R.blending===Cr&&R.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Et,alphaHash:_t,combine:R.combine,mapUv:ge&&A(R.map.channel),aoMapUv:Le&&A(R.aoMap.channel),lightMapUv:re&&A(R.lightMap.channel),bumpMapUv:ie&&A(R.bumpMap.channel),normalMapUv:zt&&A(R.normalMap.channel),displacementMapUv:ke&&A(R.displacementMap.channel),emissiveMapUv:kt&&A(R.emissiveMap.channel),metalnessMapUv:oe&&A(R.metalnessMap.channel),roughnessMapUv:Ze&&A(R.roughnessMap.channel),anisotropyMapUv:ct&&A(R.anisotropyMap.channel),clearcoatMapUv:It&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:At&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&A(R.sheenRoughnessMap.channel),specularMapUv:Xt&&A(R.specularMap.channel),specularColorMapUv:Dt&&A(R.specularColorMap.channel),specularIntensityMapUv:le&&A(R.specularIntensityMap.channel),transmissionMapUv:X&&A(R.transmissionMap.channel),thicknessMapUv:bt&&A(R.thicknessMap.channel),alphaMapUv:Bt&&A(R.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(zt||Ke),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!rt.attributes.uv&&(ge||Bt),fog:!!ut,useFog:R.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:St,skinning:nt.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:vt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:ge&&R.map.isVideoTexture===!0&&Ae.getTransfer(R.map.colorSpace)===Ie,decodeVideoTextureEmissive:kt&&R.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(R.emissiveMap.colorSpace)===Ie,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Zn,flipSided:R.side===Hn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Vt&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&R.extensions.multiDraw===!0||Yt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function x(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)C.push(G),C.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(I(C,R),L(C,R),C.push(r.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function I(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function L(R,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),R.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),R.push(h.mask)}function D(R){const C=E[R.type];let G;if(C){const q=Pi[C];G=lM.clone(q.uniforms)}else G=R.uniforms;return G}function P(R,C){let G;for(let q=0,nt=g.length;q<nt;q++){const ut=g[q];if(ut.cacheKey===C){G=ut,++G.usedTimes;break}}return G===void 0&&(G=new Q1(r,C,R,c),g.push(G)),G}function B(R){if(--R.usedTimes===0){const C=g.indexOf(R);g[C]=g[g.length-1],g.pop(),R.destroy()}}function H(R){m.remove(R)}function W(){m.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:D,acquireProgram:P,releaseProgram:B,releaseShaderCache:H,programs:g,dispose:W}}function nA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function iA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function J0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_,v,y,E,A,S){let x=r[t];return x===void 0?(x={id:_.id,object:_,geometry:v,material:y,groupOrder:E,renderOrder:_.renderOrder,z:A,group:S},r[t]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=y,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=A,x.group=S),t++,x}function h(_,v,y,E,A,S){const x=f(_,v,y,E,A,S);y.transmission>0?s.push(x):y.transparent===!0?l.push(x):i.push(x)}function m(_,v,y,E,A,S){const x=f(_,v,y,E,A,S);y.transmission>0?s.unshift(x):y.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,v){i.length>1&&i.sort(_||iA),s.length>1&&s.sort(v||J0),l.length>1&&l.sort(v||J0)}function g(){for(let _=t,v=r.length;_<v;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function aA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new $0,r.set(s,[f])):l>=c.length?(f=new $0,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function sA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new V,color:new he};break;case"SpotLight":i={position:new V,direction:new V,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new he,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new he,groundColor:new he};break;case"RectAreaLight":i={color:new he,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=i,i}}}function rA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let oA=0;function lA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function cA(r){const t=new sA,i=rA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new V);const l=new V,c=new Ue,f=new Ue;function h(p){let g=0,_=0,v=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let y=0,E=0,A=0,S=0,x=0,I=0,L=0,D=0,P=0,B=0,H=0;p.sort(lA);for(let R=0,C=p.length;R<C;R++){const G=p[R],q=G.color,nt=G.intensity,ut=G.distance,rt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=q.r*nt,_+=q.g*nt,v+=q.b*nt;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],nt);H++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,Z=i.get(G);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,s.directionalShadow[y]=Z,s.directionalShadowMap[y]=rt,s.directionalShadowMatrix[y]=G.shadow.matrix,I++}s.directional[y]=O,y++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(q).multiplyScalar(nt),O.distance=ut,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[A]=O;const Y=G.shadow;if(G.map&&(s.spotLightMap[P]=G.map,P++,Y.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[A]=Y.matrix,G.castShadow){const Z=i.get(G);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,s.spotShadow[A]=Z,s.spotShadowMap[A]=rt,D++}A++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(q).multiplyScalar(nt),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=O,S++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const Y=G.shadow,Z=i.get(G);Z.shadowIntensity=Y.intensity,Z.shadowBias=Y.bias,Z.shadowNormalBias=Y.normalBias,Z.shadowRadius=Y.radius,Z.shadowMapSize=Y.mapSize,Z.shadowCameraNear=Y.camera.near,Z.shadowCameraFar=Y.camera.far,s.pointShadow[E]=Z,s.pointShadowMap[E]=rt,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=O,E++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(nt),O.groundColor.copy(G.groundColor).multiplyScalar(nt),s.hemi[x]=O,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ot.LTC_FLOAT_1,s.rectAreaLTC2=Ot.LTC_FLOAT_2):(s.rectAreaLTC1=Ot.LTC_HALF_1,s.rectAreaLTC2=Ot.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=v;const W=s.hash;(W.directionalLength!==y||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==S||W.hemiLength!==x||W.numDirectionalShadows!==I||W.numPointShadows!==L||W.numSpotShadows!==D||W.numSpotMaps!==P||W.numLightProbes!==H)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=S,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+P-B,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=H,W.directionalLength=y,W.pointLength=E,W.spotLength=A,W.rectAreaLength=S,W.hemiLength=x,W.numDirectionalShadows=I,W.numPointShadows=L,W.numSpotShadows=D,W.numSpotMaps=P,W.numLightProbes=H,s.version=oA++)}function m(p,g){let _=0,v=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let x=0,I=p.length;x<I;x++){const L=p[x];if(L.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),_++}else if(L.isSpotLight){const D=s.spot[y];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(L.isPointLight){const D=s.point[v];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),A++}}}return{setup:h,setupView:m,state:s}}function tv(r){const t=new cA(r),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function uA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new tv(r),t.set(l,[h])):c>=f.length?(h=new tv(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const fA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dA(r,t,i){let s=new ep;const l=new Ht,c=new Ht,f=new He,h=new PM({depthPacking:US}),m=new zM,p={},g=i.maxTextureSize,_={[Wa]:Hn,[Hn]:Wa,[Zn]:Zn},v=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:fA,fragmentShader:hA}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const E=new vn;E.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Be(E,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sv;let x=this.type;this.render=function(B,H,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const R=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),q=r.state;q.setBlending(ka),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const nt=x!==ra&&this.type===ra,ut=x===ra&&this.type!==ra;for(let rt=0,O=B.length;rt<O;rt++){const Y=B[rt],Z=Y.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const xt=Z.getFrameExtents();if(l.multiply(xt),c.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/xt.x),l.x=c.x*xt.x,Z.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/xt.y),l.y=c.y*xt.y,Z.mapSize.y=c.y)),Z.map===null||nt===!0||ut===!0){const $=this.type!==ra?{minFilter:oi,magFilter:oi}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Ts(l.x,l.y,$),Z.map.texture.name=Y.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();const U=Z.getViewportCount();for(let $=0;$<U;$++){const vt=Z.getViewport($);f.set(c.x*vt.x,c.y*vt.y,c.x*vt.z,c.y*vt.w),q.viewport(f),Z.updateMatrices(Y,$),s=Z.getFrustum(),D(H,W,Z.camera,Y,this.type)}Z.isPointLightShadow!==!0&&this.type===ra&&I(Z,W),Z.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(R,C,G)};function I(B,H){const W=t.update(A);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Ts(l.x,l.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(H,null,W,v,A,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(H,null,W,y,A,null)}function L(B,H,W,R){let C=null;const G=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?m:h,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const q=C.uuid,nt=H.uuid;let ut=p[q];ut===void 0&&(ut={},p[q]=ut);let rt=ut[nt];rt===void 0&&(rt=C.clone(),ut[nt]=rt,H.addEventListener("dispose",P)),C=rt}if(C.visible=H.visible,C.wireframe=H.wireframe,R===ra?C.side=H.shadowSide!==null?H.shadowSide:H.side:C.side=H.shadowSide!==null?H.shadowSide:_[H.side],C.alphaMap=H.alphaMap,C.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,C.map=H.map,C.clipShadows=H.clipShadows,C.clippingPlanes=H.clippingPlanes,C.clipIntersection=H.clipIntersection,C.displacementMap=H.displacementMap,C.displacementScale=H.displacementScale,C.displacementBias=H.displacementBias,C.wireframeLinewidth=H.wireframeLinewidth,C.linewidth=H.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const q=r.properties.get(C);q.light=W}return C}function D(B,H,W,R,C){if(B.visible===!1)return;if(B.layers.test(H.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===ra)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const nt=t.update(B),ut=B.material;if(Array.isArray(ut)){const rt=nt.groups;for(let O=0,Y=rt.length;O<Y;O++){const Z=rt[O],xt=ut[Z.materialIndex];if(xt&&xt.visible){const U=L(B,xt,R,C);B.onBeforeShadow(r,B,H,W,nt,U,Z),r.renderBufferDirect(W,null,nt,U,B,Z),B.onAfterShadow(r,B,H,W,nt,U,Z)}}}else if(ut.visible){const rt=L(B,ut,R,C);B.onBeforeShadow(r,B,H,W,nt,rt,null),r.renderBufferDirect(W,null,nt,rt,B,null),B.onAfterShadow(r,B,H,W,nt,rt,null)}}const q=B.children;for(let nt=0,ut=q.length;nt<ut;nt++)D(q[nt],H,W,R,C)}function P(B){B.target.removeEventListener("dispose",P);for(const W in p){const R=p[W],C=B.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const pA={[Qh]:Jh,[$h]:nd,[td]:id,[Lr]:ed,[Jh]:Qh,[nd]:$h,[id]:td,[ed]:Lr};function mA(r,t){function i(){let X=!1;const bt=new He;let Rt=null;const Bt=new He(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!X&&(r.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){X=Et},setClear:function(Et,_t,Vt,se,we){we===!0&&(Et*=se,_t*=se,Vt*=se),bt.set(Et,_t,Vt,se),Bt.equals(bt)===!1&&(r.clearColor(Et,_t,Vt,se),Bt.copy(bt))},reset:function(){X=!1,Rt=null,Bt.set(-1,0,0,0)}}}function s(){let X=!1,bt=!1,Rt=null,Bt=null,Et=null;return{setReversed:function(_t){if(bt!==_t){const Vt=t.get("EXT_clip_control");_t?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const se=Et;Et=null,this.setClear(se)}},getReversed:function(){return bt},setTest:function(_t){_t?ft(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(_t){Rt!==_t&&!X&&(r.depthMask(_t),Rt=_t)},setFunc:function(_t){if(bt&&(_t=pA[_t]),Bt!==_t){switch(_t){case Qh:r.depthFunc(r.NEVER);break;case Jh:r.depthFunc(r.ALWAYS);break;case $h:r.depthFunc(r.LESS);break;case Lr:r.depthFunc(r.LEQUAL);break;case td:r.depthFunc(r.EQUAL);break;case ed:r.depthFunc(r.GEQUAL);break;case nd:r.depthFunc(r.GREATER);break;case id:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){Et!==_t&&(bt&&(_t=1-_t),r.clearDepth(_t),Et=_t)},reset:function(){X=!1,Rt=null,Bt=null,Et=null,bt=!1}}}function l(){let X=!1,bt=null,Rt=null,Bt=null,Et=null,_t=null,Vt=null,se=null,we=null;return{setTest:function(Ee){X||(Ee?ft(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(Ee){bt!==Ee&&!X&&(r.stencilMask(Ee),bt=Ee)},setFunc:function(Ee,_i,hn){(Rt!==Ee||Bt!==_i||Et!==hn)&&(r.stencilFunc(Ee,_i,hn),Rt=Ee,Bt=_i,Et=hn)},setOp:function(Ee,_i,hn){(_t!==Ee||Vt!==_i||se!==hn)&&(r.stencilOp(Ee,_i,hn),_t=Ee,Vt=_i,se=hn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){we!==Ee&&(r.clearStencil(Ee),we=Ee)},reset:function(){X=!1,bt=null,Rt=null,Bt=null,Et=null,_t=null,Vt=null,se=null,we=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,y=[],E=null,A=!1,S=null,x=null,I=null,L=null,D=null,P=null,B=null,H=new he(0,0,0),W=0,R=!1,C=null,G=null,q=null,nt=null,ut=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Y=0;const Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),O=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),O=Y>=2);let xt=null,U={};const $=r.getParameter(r.SCISSOR_BOX),vt=r.getParameter(r.VIEWPORT),yt=new He().fromArray($),Ct=new He().fromArray(vt);function Pt(X,bt,Rt,Bt){const Et=new Uint8Array(4),_t=r.createTexture();r.bindTexture(X,_t),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Rt;Vt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(bt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(bt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return _t}const J={};J[r.TEXTURE_2D]=Pt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ft(r.DEPTH_TEST),f.setFunc(Lr),ie(!1),zt(q_),ft(r.CULL_FACE),Le(ka);function ft(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function St(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Zt(X,bt){return _[X]!==bt?(r.bindFramebuffer(X,bt),_[X]=bt,X===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=bt),X===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=bt),!0):!1}function Yt(X,bt){let Rt=y,Bt=!1;if(X){Rt=v.get(bt),Rt===void 0&&(Rt=[],v.set(bt,Rt));const Et=X.textures;if(Rt.length!==Et.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Vt=Et.length;_t<Vt;_t++)Rt[_t]=r.COLOR_ATTACHMENT0+_t;Rt.length=Et.length,Bt=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Rt)}function ge(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const on={[vs]:r.FUNC_ADD,[aS]:r.FUNC_SUBTRACT,[sS]:r.FUNC_REVERSE_SUBTRACT};on[rS]=r.MIN,on[oS]=r.MAX;const F={[lS]:r.ZERO,[cS]:r.ONE,[uS]:r.SRC_COLOR,[Zh]:r.SRC_ALPHA,[gS]:r.SRC_ALPHA_SATURATE,[pS]:r.DST_COLOR,[hS]:r.DST_ALPHA,[fS]:r.ONE_MINUS_SRC_COLOR,[Kh]:r.ONE_MINUS_SRC_ALPHA,[mS]:r.ONE_MINUS_DST_COLOR,[dS]:r.ONE_MINUS_DST_ALPHA,[_S]:r.CONSTANT_COLOR,[vS]:r.ONE_MINUS_CONSTANT_COLOR,[xS]:r.CONSTANT_ALPHA,[yS]:r.ONE_MINUS_CONSTANT_ALPHA};function Le(X,bt,Rt,Bt,Et,_t,Vt,se,we,Ee){if(X===ka){A===!0&&(St(r.BLEND),A=!1);return}if(A===!1&&(ft(r.BLEND),A=!0),X!==iS){if(X!==S||Ee!==R){if((x!==vs||D!==vs)&&(r.blendEquation(r.FUNC_ADD),x=vs,D=vs),Ee)switch(X){case Cr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y_:r.blendFunc(r.ONE,r.ONE);break;case j_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Z_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Cr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case j_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Z_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,L=null,P=null,B=null,H.set(0,0,0),W=0,S=X,R=Ee}return}Et=Et||bt,_t=_t||Rt,Vt=Vt||Bt,(bt!==x||Et!==D)&&(r.blendEquationSeparate(on[bt],on[Et]),x=bt,D=Et),(Rt!==I||Bt!==L||_t!==P||Vt!==B)&&(r.blendFuncSeparate(F[Rt],F[Bt],F[_t],F[Vt]),I=Rt,L=Bt,P=_t,B=Vt),(se.equals(H)===!1||we!==W)&&(r.blendColor(se.r,se.g,se.b,we),H.copy(se),W=we),S=X,R=!1}function re(X,bt){X.side===Zn?St(r.CULL_FACE):ft(r.CULL_FACE);let Rt=X.side===Hn;bt&&(Rt=!Rt),ie(Rt),X.blending===Cr&&X.transparent===!1?Le(ka):Le(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;h.setTest(Bt),Bt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),kt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(X){C!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),C=X)}function zt(X){X!==tS?(ft(r.CULL_FACE),X!==G&&(X===q_?r.cullFace(r.BACK):X===eS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),G=X}function ke(X){X!==q&&(O&&r.lineWidth(X),q=X)}function kt(X,bt,Rt){X?(ft(r.POLYGON_OFFSET_FILL),(nt!==bt||ut!==Rt)&&(r.polygonOffset(bt,Rt),nt=bt,ut=Rt)):St(r.POLYGON_OFFSET_FILL)}function oe(X){X?ft(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function Ze(X){X===void 0&&(X=r.TEXTURE0+rt-1),xt!==X&&(r.activeTexture(X),xt=X)}function Ke(X,bt,Rt){Rt===void 0&&(xt===null?Rt=r.TEXTURE0+rt-1:Rt=xt);let Bt=U[Rt];Bt===void 0&&(Bt={type:void 0,texture:void 0},U[Rt]=Bt),(Bt.type!==X||Bt.texture!==bt)&&(xt!==Rt&&(r.activeTexture(Rt),xt=Rt),r.bindTexture(X,bt||J[X]),Bt.type=X,Bt.texture=bt)}function N(){const X=U[xt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function it(){try{r.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{r.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{r.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{r.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{r.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Wt(){try{r.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{r.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{r.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(X){yt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),yt.copy(X))}function Qt(X){Ct.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ct.copy(X))}function Xt(X,bt){let Rt=p.get(bt);Rt===void 0&&(Rt=new WeakMap,p.set(bt,Rt));let Bt=Rt.get(X);Bt===void 0&&(Bt=r.getUniformBlockIndex(bt,X.name),Rt.set(X,Bt))}function Dt(X,bt){const Bt=p.get(bt).get(X);m.get(bt)!==Bt&&(r.uniformBlockBinding(bt,Bt,X.__bindingPointIndex),m.set(bt,Bt))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},xt=null,U={},_={},v=new WeakMap,y=[],E=null,A=!1,S=null,x=null,I=null,L=null,D=null,P=null,B=null,H=new he(0,0,0),W=0,R=!1,C=null,G=null,q=null,nt=null,ut=null,yt.set(0,0,r.canvas.width,r.canvas.height),Ct.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ft,disable:St,bindFramebuffer:Zt,drawBuffers:Yt,useProgram:ge,setBlending:Le,setMaterial:re,setFlipSided:ie,setCullFace:zt,setLineWidth:ke,setPolygonOffset:kt,setScissorTest:oe,activeTexture:Ze,bindTexture:Ke,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:it,texImage2D:jt,texImage3D:Mt,updateUBOMapping:Xt,uniformBlockBinding:Dt,texStorage2D:At,texStorage3D:Wt,texSubImage2D:ht,texSubImage3D:mt,compressedTexSubImage2D:ct,compressedTexSubImage3D:It,scissor:Lt,viewport:Qt,reset:le}}function gA(r,t,i,s,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ht,g=new WeakMap;let _;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,T){return y?new OffscreenCanvas(N,T):Zc("canvas")}function A(N,T,it){let ht=1;const mt=Ke(N);if((mt.width>it||mt.height>it)&&(ht=it/Math.max(mt.width,mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ct=Math.floor(ht*mt.width),It=Math.floor(ht*mt.height);_===void 0&&(_=E(ct,It));const At=T?E(ct,It):_;return At.width=ct,At.height=It,At.getContext("2d").drawImage(N,0,0,ct,It),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ct+"x"+It+")."),At}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),N;return N}function S(N){return N.generateMipmaps}function x(N){r.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,T,it,ht,mt=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ct=T;if(T===r.RED&&(it===r.FLOAT&&(ct=r.R32F),it===r.HALF_FLOAT&&(ct=r.R16F),it===r.UNSIGNED_BYTE&&(ct=r.R8)),T===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(ct=r.R8UI),it===r.UNSIGNED_SHORT&&(ct=r.R16UI),it===r.UNSIGNED_INT&&(ct=r.R32UI),it===r.BYTE&&(ct=r.R8I),it===r.SHORT&&(ct=r.R16I),it===r.INT&&(ct=r.R32I)),T===r.RG&&(it===r.FLOAT&&(ct=r.RG32F),it===r.HALF_FLOAT&&(ct=r.RG16F),it===r.UNSIGNED_BYTE&&(ct=r.RG8)),T===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(ct=r.RG8UI),it===r.UNSIGNED_SHORT&&(ct=r.RG16UI),it===r.UNSIGNED_INT&&(ct=r.RG32UI),it===r.BYTE&&(ct=r.RG8I),it===r.SHORT&&(ct=r.RG16I),it===r.INT&&(ct=r.RG32I)),T===r.RGB_INTEGER&&(it===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),it===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),it===r.UNSIGNED_INT&&(ct=r.RGB32UI),it===r.BYTE&&(ct=r.RGB8I),it===r.SHORT&&(ct=r.RGB16I),it===r.INT&&(ct=r.RGB32I)),T===r.RGBA_INTEGER&&(it===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),it===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),it===r.UNSIGNED_INT&&(ct=r.RGBA32UI),it===r.BYTE&&(ct=r.RGBA8I),it===r.SHORT&&(ct=r.RGBA16I),it===r.INT&&(ct=r.RGBA32I)),T===r.RGB&&(it===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),it===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),T===r.RGBA){const It=mt?Yc:Ae.getTransfer(ht);it===r.FLOAT&&(ct=r.RGBA32F),it===r.HALF_FLOAT&&(ct=r.RGBA16F),it===r.UNSIGNED_BYTE&&(ct=It===Ie?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function D(N,T){let it;return N?T===null||T===Ms||T===jo?it=r.DEPTH24_STENCIL8:T===Ii?it=r.DEPTH32F_STENCIL8:T===Yo&&(it=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ms||T===jo?it=r.DEPTH_COMPONENT24:T===Ii?it=r.DEPTH_COMPONENT32F:T===Yo&&(it=r.DEPTH_COMPONENT16),it}function P(N,T){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==oi&&N.minFilter!==zi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function B(N){const T=N.target;T.removeEventListener("dispose",B),W(T),T.isVideoTexture&&g.delete(T)}function H(N){const T=N.target;T.removeEventListener("dispose",H),C(T)}function W(N){const T=s.get(N);if(T.__webglInit===void 0)return;const it=N.source,ht=v.get(it);if(ht){const mt=ht[T.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&R(N),Object.keys(ht).length===0&&v.delete(it)}s.remove(N)}function R(N){const T=s.get(N);r.deleteTexture(T.__webglTexture);const it=N.source,ht=v.get(it);delete ht[T.__cacheKey],f.memory.textures--}function C(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let mt=0;mt<T.__webglFramebuffer[ht].length;mt++)r.deleteFramebuffer(T.__webglFramebuffer[ht][mt]);else r.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)r.deleteFramebuffer(T.__webglFramebuffer[ht]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=N.textures;for(let ht=0,mt=it.length;ht<mt;ht++){const ct=s.get(it[ht]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),f.memory.textures--),s.remove(it[ht])}s.remove(N)}let G=0;function q(){G=0}function nt(){const N=G;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function ut(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function rt(N,T){const it=s.get(N);if(N.isVideoTexture&&oe(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&it.__version!==N.version){const ht=N.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(it,N,T);return}}else N.isExternalTexture&&(it.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+T)}function O(N,T){const it=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&it.__version!==N.version){J(it,N,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+T)}function Y(N,T){const it=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&it.__version!==N.version){J(it,N,T);return}i.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+T)}function Z(N,T){const it=s.get(N);if(N.version>0&&it.__version!==N.version){ft(it,N,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+T)}const xt={[rd]:r.REPEAT,[ys]:r.CLAMP_TO_EDGE,[od]:r.MIRRORED_REPEAT},U={[oi]:r.NEAREST,[CS]:r.NEAREST_MIPMAP_NEAREST,[uc]:r.NEAREST_MIPMAP_LINEAR,[zi]:r.LINEAR,[fh]:r.LINEAR_MIPMAP_NEAREST,[Ss]:r.LINEAR_MIPMAP_LINEAR},$={[NS]:r.NEVER,[FS]:r.ALWAYS,[OS]:r.LESS,[mv]:r.LEQUAL,[PS]:r.EQUAL,[BS]:r.GEQUAL,[zS]:r.GREATER,[IS]:r.NOTEQUAL};function vt(N,T){if(T.type===Ii&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===zi||T.magFilter===fh||T.magFilter===uc||T.magFilter===Ss||T.minFilter===zi||T.minFilter===fh||T.minFilter===uc||T.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,xt[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,xt[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,xt[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,U[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===oi||T.minFilter!==uc&&T.minFilter!==Ss||T.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function yt(N,T){let it=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",B));const ht=T.source;let mt=v.get(ht);mt===void 0&&(mt={},v.set(ht,mt));const ct=ut(T);if(ct!==N.__cacheKey){mt[ct]===void 0&&(mt[ct]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,it=!0),mt[ct].usedTimes++;const It=mt[N.__cacheKey];It!==void 0&&(mt[N.__cacheKey].usedTimes--,It.usedTimes===0&&R(T)),N.__cacheKey=ct,N.__webglTexture=mt[ct].texture}return it}function Ct(N,T,it){return Math.floor(Math.floor(N/it)/T)}function Pt(N,T,it,ht){const ct=N.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,it,ht,T.data);else{ct.sort((Mt,Lt)=>Mt.start-Lt.start);let It=0;for(let Mt=1;Mt<ct.length;Mt++){const Lt=ct[It],Qt=ct[Mt],Xt=Lt.start+Lt.count,Dt=Ct(Qt.start,T.width,4),le=Ct(Lt.start,T.width,4);Qt.start<=Xt+1&&Dt===le&&Ct(Qt.start+Qt.count-1,T.width,4)===Dt?Lt.count=Math.max(Lt.count,Qt.start+Qt.count-Lt.start):(++It,ct[It]=Qt)}ct.length=It+1;const At=r.getParameter(r.UNPACK_ROW_LENGTH),Wt=r.getParameter(r.UNPACK_SKIP_PIXELS),jt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Mt=0,Lt=ct.length;Mt<Lt;Mt++){const Qt=ct[Mt],Xt=Math.floor(Qt.start/4),Dt=Math.ceil(Qt.count/4),le=Xt%T.width,X=Math.floor(Xt/T.width),bt=Dt,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,le),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,le,X,bt,Rt,it,ht,T.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,At),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,jt)}}function J(N,T,it){let ht=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=r.TEXTURE_3D);const mt=yt(N,T),ct=T.source;i.bindTexture(ht,N.__webglTexture,r.TEXTURE0+it);const It=s.get(ct);if(ct.version!==It.__version||mt===!0){i.activeTexture(r.TEXTURE0+it);const At=Ae.getPrimaries(Ae.workingColorSpace),Wt=T.colorSpace===Va?null:Ae.getPrimaries(T.colorSpace),jt=T.colorSpace===Va||At===Wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let Mt=A(T.image,!1,l.maxTextureSize);Mt=Ze(T,Mt);const Lt=c.convert(T.format,T.colorSpace),Qt=c.convert(T.type);let Xt=L(T.internalFormat,Lt,Qt,T.colorSpace,T.isVideoTexture);vt(ht,T);let Dt;const le=T.mipmaps,X=T.isVideoTexture!==!0,bt=It.__version===void 0||mt===!0,Rt=ct.dataReady,Bt=P(T,Mt);if(T.isDepthTexture)Xt=D(T.format===Ko,T.type),bt&&(X?i.texStorage2D(r.TEXTURE_2D,1,Xt,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,Xt,Mt.width,Mt.height,0,Lt,Qt,null));else if(T.isDataTexture)if(le.length>0){X&&bt&&i.texStorage2D(r.TEXTURE_2D,Bt,Xt,le[0].width,le[0].height);for(let Et=0,_t=le.length;Et<_t;Et++)Dt=le[Et],X?Rt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Qt,Dt.data):i.texImage2D(r.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Lt,Qt,Dt.data);T.generateMipmaps=!1}else X?(bt&&i.texStorage2D(r.TEXTURE_2D,Bt,Xt,Mt.width,Mt.height),Rt&&Pt(T,Mt,Lt,Qt)):i.texImage2D(r.TEXTURE_2D,0,Xt,Mt.width,Mt.height,0,Lt,Qt,Mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&bt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Xt,le[0].width,le[0].height,Mt.depth);for(let Et=0,_t=le.length;Et<_t;Et++)if(Dt=le[Et],T.format!==Ai)if(Lt!==null)if(X){if(Rt)if(T.layerUpdates.size>0){const Vt=U0(Dt.width,Dt.height,T.format,T.type);for(const se of T.layerUpdates){const we=Dt.data.subarray(se*Vt/Dt.data.BYTES_PER_ELEMENT,(se+1)*Vt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,se,Dt.width,Dt.height,1,Lt,we)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,Mt.depth,Lt,Dt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,Xt,Dt.width,Dt.height,Mt.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Rt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,Dt.width,Dt.height,Mt.depth,Lt,Qt,Dt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Et,Xt,Dt.width,Dt.height,Mt.depth,0,Lt,Qt,Dt.data)}else{X&&bt&&i.texStorage2D(r.TEXTURE_2D,Bt,Xt,le[0].width,le[0].height);for(let Et=0,_t=le.length;Et<_t;Et++)Dt=le[Et],T.format!==Ai?Lt!==null?X?Rt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Dt.data):i.compressedTexImage2D(r.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Rt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Dt.width,Dt.height,Lt,Qt,Dt.data):i.texImage2D(r.TEXTURE_2D,Et,Xt,Dt.width,Dt.height,0,Lt,Qt,Dt.data)}else if(T.isDataArrayTexture)if(X){if(bt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Xt,Mt.width,Mt.height,Mt.depth),Rt)if(T.layerUpdates.size>0){const Et=U0(Mt.width,Mt.height,T.format,T.type);for(const _t of T.layerUpdates){const Vt=Mt.data.subarray(_t*Et/Mt.data.BYTES_PER_ELEMENT,(_t+1)*Et/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Lt,Qt,Vt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Qt,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,Mt.width,Mt.height,Mt.depth,0,Lt,Qt,Mt.data);else if(T.isData3DTexture)X?(bt&&i.texStorage3D(r.TEXTURE_3D,Bt,Xt,Mt.width,Mt.height,Mt.depth),Rt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Lt,Qt,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,Xt,Mt.width,Mt.height,Mt.depth,0,Lt,Qt,Mt.data);else if(T.isFramebufferTexture){if(bt)if(X)i.texStorage2D(r.TEXTURE_2D,Bt,Xt,Mt.width,Mt.height);else{let Et=Mt.width,_t=Mt.height;for(let Vt=0;Vt<Bt;Vt++)i.texImage2D(r.TEXTURE_2D,Vt,Xt,Et,_t,0,Lt,Qt,null),Et>>=1,_t>>=1}}else if(le.length>0){if(X&&bt){const Et=Ke(le[0]);i.texStorage2D(r.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}for(let Et=0,_t=le.length;Et<_t;Et++)Dt=le[Et],X?Rt&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Lt,Qt,Dt):i.texImage2D(r.TEXTURE_2D,Et,Xt,Lt,Qt,Dt);T.generateMipmaps=!1}else if(X){if(bt){const Et=Ke(Mt);i.texStorage2D(r.TEXTURE_2D,Bt,Xt,Et.width,Et.height)}Rt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Lt,Qt,Mt)}else i.texImage2D(r.TEXTURE_2D,0,Xt,Lt,Qt,Mt);S(T)&&x(ht),It.__version=ct.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ft(N,T,it){if(T.image.length!==6)return;const ht=yt(N,T),mt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+it);const ct=s.get(mt);if(mt.version!==ct.__version||ht===!0){i.activeTexture(r.TEXTURE0+it);const It=Ae.getPrimaries(Ae.workingColorSpace),At=T.colorSpace===Va?null:Ae.getPrimaries(T.colorSpace),Wt=T.colorSpace===Va||It===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const jt=T.isCompressedTexture||T.image[0].isCompressedTexture,Mt=T.image[0]&&T.image[0].isDataTexture,Lt=[];for(let _t=0;_t<6;_t++)!jt&&!Mt?Lt[_t]=A(T.image[_t],!0,l.maxCubemapSize):Lt[_t]=Mt?T.image[_t].image:T.image[_t],Lt[_t]=Ze(T,Lt[_t]);const Qt=Lt[0],Xt=c.convert(T.format,T.colorSpace),Dt=c.convert(T.type),le=L(T.internalFormat,Xt,Dt,T.colorSpace),X=T.isVideoTexture!==!0,bt=ct.__version===void 0||ht===!0,Rt=mt.dataReady;let Bt=P(T,Qt);vt(r.TEXTURE_CUBE_MAP,T);let Et;if(jt){X&&bt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,le,Qt.width,Qt.height);for(let _t=0;_t<6;_t++){Et=Lt[_t].mipmaps;for(let Vt=0;Vt<Et.length;Vt++){const se=Et[Vt];T.format!==Ai?Xt!==null?X?Rt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,se.width,se.height,Xt,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,le,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,0,0,se.width,se.height,Xt,Dt,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt,le,se.width,se.height,0,Xt,Dt,se.data)}}}else{if(Et=T.mipmaps,X&&bt){Et.length>0&&Bt++;const _t=Ke(Lt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt[_t].width,Lt[_t].height,Xt,Dt,Lt[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Lt[_t].width,Lt[_t].height,0,Xt,Dt,Lt[_t].data);for(let Vt=0;Vt<Et.length;Vt++){const we=Et[Vt].image[_t].image;X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,we.width,we.height,Xt,Dt,we.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,le,we.width,we.height,0,Xt,Dt,we.data)}}else{X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Xt,Dt,Lt[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Xt,Dt,Lt[_t]);for(let Vt=0;Vt<Et.length;Vt++){const se=Et[Vt];X?Rt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,0,0,Xt,Dt,se.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Vt+1,le,Xt,Dt,se.image[_t])}}}S(T)&&x(r.TEXTURE_CUBE_MAP),ct.__version=mt.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function St(N,T,it,ht,mt,ct){const It=c.convert(it.format,it.colorSpace),At=c.convert(it.type),Wt=L(it.internalFormat,It,At,it.colorSpace),jt=s.get(T),Mt=s.get(it);if(Mt.__renderTarget=T,!jt.__hasExternalTextures){const Lt=Math.max(1,T.width>>ct),Qt=Math.max(1,T.height>>ct);mt===r.TEXTURE_3D||mt===r.TEXTURE_2D_ARRAY?i.texImage3D(mt,ct,Wt,Lt,Qt,T.depth,0,It,At,null):i.texImage2D(mt,ct,Wt,Lt,Qt,0,It,At,null)}i.bindFramebuffer(r.FRAMEBUFFER,N),kt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,mt,Mt.__webglTexture,0,ke(T)):(mt===r.TEXTURE_2D||mt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ht,mt,Mt.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(N,T,it){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){const ht=T.depthTexture,mt=ht&&ht.isDepthTexture?ht.type:null,ct=D(T.stencilBuffer,mt),It=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,At=ke(T);kt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,At,ct,T.width,T.height):it?r.renderbufferStorageMultisample(r.RENDERBUFFER,At,ct,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ct,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,It,r.RENDERBUFFER,N)}else{const ht=T.textures;for(let mt=0;mt<ht.length;mt++){const ct=ht[mt],It=c.convert(ct.format,ct.colorSpace),At=c.convert(ct.type),Wt=L(ct.internalFormat,It,At,ct.colorSpace),jt=ke(T);it&&kt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,Wt,T.width,T.height):kt(T)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,Wt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Wt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Yt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),rt(T.depthTexture,0);const mt=ht.__webglTexture,ct=ke(T);if(T.depthTexture.format===Zo)kt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,mt,0);else if(T.depthTexture.format===Ko)kt(T)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function ge(N){const T=s.get(N),it=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ht=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const mt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",mt)};ht.addEventListener("dispose",mt),T.__depthDisposeCallback=mt}T.__boundDepthTexture=ht}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");const ht=N.texture.mipmaps;ht&&ht.length>0?Yt(T.__webglFramebuffer[0],N):Yt(T.__webglFramebuffer,N)}else if(it){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=r.createRenderbuffer(),Zt(T.__webglDepthbuffer[ht],N,!1);else{const mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer[ht];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}else{const ht=N.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Zt(T.__webglDepthbuffer,N,!1);else{const mt=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,mt,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function on(N,T,it){const ht=s.get(N);T!==void 0&&St(ht.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&ge(N)}function F(N){const T=N.texture,it=s.get(N),ht=s.get(T);N.addEventListener("dispose",H);const mt=N.textures,ct=N.isWebGLCubeRenderTarget===!0,It=mt.length>1;if(It||(ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture()),ht.__version=T.version,f.memory.textures++),ct){it.__webglFramebuffer=[];for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[At]=[];for(let Wt=0;Wt<T.mipmaps.length;Wt++)it.__webglFramebuffer[At][Wt]=r.createFramebuffer()}else it.__webglFramebuffer[At]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let At=0;At<T.mipmaps.length;At++)it.__webglFramebuffer[At]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(It)for(let At=0,Wt=mt.length;At<Wt;At++){const jt=s.get(mt[At]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&kt(N)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let At=0;At<mt.length;At++){const Wt=mt[At];it.__webglColorRenderbuffer[At]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[At]);const jt=c.convert(Wt.format,Wt.colorSpace),Mt=c.convert(Wt.type),Lt=L(Wt.internalFormat,jt,Mt,Wt.colorSpace,N.isXRRenderTarget===!0),Qt=ke(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,Lt,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+At,r.RENDERBUFFER,it.__webglColorRenderbuffer[At])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),Zt(it.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,ht.__webglTexture),vt(r.TEXTURE_CUBE_MAP,T);for(let At=0;At<6;At++)if(T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)St(it.__webglFramebuffer[At][Wt],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,Wt);else St(it.__webglFramebuffer[At],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);S(T)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(It){for(let At=0,Wt=mt.length;At<Wt;At++){const jt=mt[At],Mt=s.get(jt);let Lt=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,Mt.__webglTexture),vt(Lt,jt),St(it.__webglFramebuffer,N,jt,r.COLOR_ATTACHMENT0+At,Lt,0),S(jt)&&x(Lt)}i.unbindTexture()}else{let At=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(At=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(At,ht.__webglTexture),vt(At,T),T.mipmaps&&T.mipmaps.length>0)for(let Wt=0;Wt<T.mipmaps.length;Wt++)St(it.__webglFramebuffer[Wt],N,T,r.COLOR_ATTACHMENT0,At,Wt);else St(it.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,At,0);S(T)&&x(At),i.unbindTexture()}N.depthBuffer&&ge(N)}function Le(N){const T=N.textures;for(let it=0,ht=T.length;it<ht;it++){const mt=T[it];if(S(mt)){const ct=I(N),It=s.get(mt).__webglTexture;i.bindTexture(ct,It),x(ct),i.unbindTexture()}}}const re=[],ie=[];function zt(N){if(N.samples>0){if(kt(N)===!1){const T=N.textures,it=N.width,ht=N.height;let mt=r.COLOR_BUFFER_BIT;const ct=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,It=s.get(N),At=T.length>1;if(At)for(let jt=0;jt<T.length;jt++)i.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,It.__webglMultisampledFramebuffer);const Wt=N.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let jt=0;jt<T.length;jt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(mt|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(mt|=r.STENCIL_BUFFER_BIT)),At){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,It.__webglColorRenderbuffer[jt]);const Mt=s.get(T[jt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,it,ht,0,0,it,ht,mt,r.NEAREST),m===!0&&(re.length=0,ie.length=0,re.push(r.COLOR_ATTACHMENT0+jt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(re.push(ct),ie.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),At)for(let jt=0;jt<T.length;jt++){i.bindFramebuffer(r.FRAMEBUFFER,It.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.RENDERBUFFER,It.__webglColorRenderbuffer[jt]);const Mt=s.get(T[jt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,It.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+jt,r.TEXTURE_2D,Mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,It.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ke(N){return Math.min(l.maxSamples,N.samples)}function kt(N){const T=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(N){const T=f.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Ze(N,T){const it=N.colorSpace,ht=N.format,mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||it!==Pr&&it!==Va&&(Ae.getTransfer(it)===Ie?(ht!==Ai||mt!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function Ke(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=q,this.setTexture2D=rt,this.setTexture2DArray=O,this.setTexture3D=Y,this.setTextureCube=Z,this.rebindTextures=on,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=St,this.useMultisampledRTT=kt}function _A(r,t){function i(s,l=Va){let c;const f=Ae.getTransfer(l);if(s===Fi)return r.UNSIGNED_BYTE;if(s===qd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===uv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===fv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===lv)return r.BYTE;if(s===cv)return r.SHORT;if(s===Yo)return r.UNSIGNED_SHORT;if(s===Wd)return r.INT;if(s===Ms)return r.UNSIGNED_INT;if(s===Ii)return r.FLOAT;if(s===Jo)return r.HALF_FLOAT;if(s===hv)return r.ALPHA;if(s===dv)return r.RGB;if(s===Ai)return r.RGBA;if(s===Zo)return r.DEPTH_COMPONENT;if(s===Ko)return r.DEPTH_STENCIL;if(s===jd)return r.RED;if(s===Zd)return r.RED_INTEGER;if(s===pv)return r.RG;if(s===Kd)return r.RG_INTEGER;if(s===Qd)return r.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===kc)if(f===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Hc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Hc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ld||s===cd||s===ud||s===fd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===ld)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===hd||s===dd||s===pd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===hd||s===dd)return f===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===pd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed||s===Td||s===bd||s===Ad||s===Rd||s===wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===md)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_d)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===xd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Sd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Md)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ed)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Td)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ad)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wd)return f===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Cd||s===Dd||s===Ud)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Cd)return f===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ld||s===Nd||s===Od||s===Pd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Ld)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Nd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Od)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Pd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const vA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Cv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qa({vertexShader:vA,fragmentShader:xA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Be(new eu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SA extends bs{constructor(t,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,_=null,v=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",S=new yA,x={},I=i.getContextAttributes();let L=null,D=null;const P=[],B=[],H=new Ht;let W=null;const R=new ri;R.viewport=new He;const C=new ri;C.viewport=new He;const G=[R,C],q=new HM;let nt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ft=P[J];return ft===void 0&&(ft=new Nh,P[J]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(J){let ft=P[J];return ft===void 0&&(ft=new Nh,P[J]=ft),ft.getGripSpace()},this.getHand=function(J){let ft=P[J];return ft===void 0&&(ft=new Nh,P[J]=ft),ft.getHandSpace()};function rt(J){const ft=B.indexOf(J.inputSource);if(ft===-1)return;const St=P[ft];St!==void 0&&(St.update(J.inputSource,J.frame,p||f),St.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",Y);for(let J=0;J<P.length;J++){const ft=B[J];ft!==null&&(B[J]=null,P[J].disconnect(ft))}nt=null,ut=null,S.reset();for(const J in x)delete x[J];t.setRenderTarget(L),y=null,v=null,_=null,l=null,D=null,Pt.stop(),s.isPresenting=!1,t.setPixelRatio(W),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){h=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",Y),I.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(H),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Zt=null,Yt=null;I.depth&&(Yt=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=I.stencil?Ko:Zo,Zt=I.stencil?jo:Ms);const ge={colorFormat:i.RGBA8,depthFormat:Yt,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(ge),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),D=new Ts(v.textureWidth,v.textureHeight,{format:Ai,type:Fi,depthTexture:new wv(v.textureWidth,v.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:I.stencil,colorSpace:t.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const St={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Ts(y.framebufferWidth,y.framebufferHeight,{format:Ai,type:Fi,colorSpace:t.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),Pt.setContext(l),Pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(J){for(let ft=0;ft<J.removed.length;ft++){const St=J.removed[ft],Zt=B.indexOf(St);Zt>=0&&(B[Zt]=null,P[Zt].disconnect(St))}for(let ft=0;ft<J.added.length;ft++){const St=J.added[ft];let Zt=B.indexOf(St);if(Zt===-1){for(let ge=0;ge<P.length;ge++)if(ge>=B.length){B.push(St),Zt=ge;break}else if(B[ge]===null){B[ge]=St,Zt=ge;break}if(Zt===-1)break}const Yt=P[Zt];Yt&&Yt.connect(St)}}const Z=new V,xt=new V;function U(J,ft,St){Z.setFromMatrixPosition(ft.matrixWorld),xt.setFromMatrixPosition(St.matrixWorld);const Zt=Z.distanceTo(xt),Yt=ft.projectionMatrix.elements,ge=St.projectionMatrix.elements,on=Yt[14]/(Yt[10]-1),F=Yt[14]/(Yt[10]+1),Le=(Yt[9]+1)/Yt[5],re=(Yt[9]-1)/Yt[5],ie=(Yt[8]-1)/Yt[0],zt=(ge[8]+1)/ge[0],ke=on*ie,kt=on*zt,oe=Zt/(-ie+zt),Ze=oe*-ie;if(ft.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ze),J.translateZ(oe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Yt[10]===-1)J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Ke=on+oe,N=F+oe,T=ke-Ze,it=kt+(Zt-Ze),ht=Le*F/N*Ke,mt=re*F/N*Ke;J.projectionMatrix.makePerspective(T,it,ht,mt,Ke,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function $(J,ft){ft===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ft.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let ft=J.near,St=J.far;S.texture!==null&&(S.depthNear>0&&(ft=S.depthNear),S.depthFar>0&&(St=S.depthFar)),q.near=C.near=R.near=ft,q.far=C.far=R.far=St,(nt!==q.near||ut!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),nt=q.near,ut=q.far),q.layers.mask=J.layers.mask|6,R.layers.mask=q.layers.mask&3,C.layers.mask=q.layers.mask&5;const Zt=J.parent,Yt=q.cameras;$(q,Zt);for(let ge=0;ge<Yt.length;ge++)$(Yt[ge],Zt);Yt.length===2?U(q,R,C):q.projectionMatrix.copy(R.projectionMatrix),vt(J,q,Zt)};function vt(J,ft,St){St===null?J.matrix.copy(ft.matrixWorld):(J.matrix.copy(St.matrixWorld),J.matrix.invert(),J.matrix.multiply(ft.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ft.projectionMatrix),J.projectionMatrixInverse.copy(ft.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(J){m=J,v!==null&&(v.fixedFoveation=J),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(J){return x[J]};let yt=null;function Ct(J,ft){if(g=ft.getViewerPose(p||f),E=ft,g!==null){const St=g.views;y!==null&&(t.setRenderTargetFramebuffer(D,y.framebuffer),t.setRenderTarget(D));let Zt=!1;St.length!==q.cameras.length&&(q.cameras.length=0,Zt=!0);for(let F=0;F<St.length;F++){const Le=St[F];let re=null;if(y!==null)re=y.getViewport(Le);else{const zt=_.getViewSubImage(v,Le);re=zt.viewport,F===0&&(t.setRenderTargetTextures(D,zt.colorTexture,zt.depthStencilTexture),t.setRenderTarget(D))}let ie=G[F];ie===void 0&&(ie=new ri,ie.layers.enable(F),ie.viewport=new He,G[F]=ie),ie.matrix.fromArray(Le.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Le.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(re.x,re.y,re.width,re.height),F===0&&(q.matrix.copy(ie.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Zt===!0&&q.cameras.push(ie)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const F=_.getDepthInformation(St[0]);F&&F.isValid&&F.texture&&S.init(F,l.renderState)}if(Yt&&Yt.includes("camera-access")&&A){t.state.unbindTexture(),_=s.getBinding();for(let F=0;F<St.length;F++){const Le=St[F].camera;if(Le){let re=x[Le];re||(re=new Cv,x[Le]=re);const ie=_.getCameraImage(Le);re.sourceTexture=ie}}}}for(let St=0;St<P.length;St++){const Zt=B[St],Yt=P[St];Zt!==null&&Yt!==void 0&&Yt.update(Zt,ft,p||f)}yt&&yt(J,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),E=null}const Pt=new Pv;Pt.setAnimationLoop(Ct),this.setAnimationLoop=function(J){yt=J},this.dispose=function(){}}}const gs=new Ri,MA=new Ue;function EA(r,t){function i(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,Ev(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function l(S,x,I,L,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(S,x):x.isMeshToonMaterial?(c(S,x),_(S,x)):x.isMeshPhongMaterial?(c(S,x),g(S,x)):x.isMeshStandardMaterial?(c(S,x),v(S,x),x.isMeshPhysicalMaterial&&y(S,x,D)):x.isMeshMatcapMaterial?(c(S,x),E(S,x)):x.isMeshDepthMaterial?c(S,x):x.isMeshDistanceMaterial?(c(S,x),A(S,x)):x.isMeshNormalMaterial?c(S,x):x.isLineBasicMaterial?(f(S,x),x.isLineDashedMaterial&&h(S,x)):x.isPointsMaterial?m(S,x,I,L):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,i(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Hn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,i(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Hn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,i(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,i(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const I=t.get(x),L=I.envMap,D=I.envMapRotation;L&&(S.envMap.value=L,gs.copy(D),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),S.envMapRotation.value.setFromMatrix4(MA.makeRotationFromEuler(gs)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,S.aoMapTransform))}function f(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform))}function h(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function m(S,x,I,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*I,S.scale.value=L*.5,x.map&&(S.map.value=x.map,i(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,i(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,i(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function v(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,I){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const I=t.get(x).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function TA(r,t,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,L){const D=L.program;s.uniformBlockBinding(I,D)}function p(I,L){let D=l[I.id];D===void 0&&(E(I),D=g(I),l[I.id]=D,I.addEventListener("dispose",S));const P=L.program;s.updateUBOMapping(I,P);const B=t.render.frame;c[I.id]!==B&&(v(I),c[I.id]=B)}function g(I){const L=_();I.__bindingPointIndex=L;const D=r.createBuffer(),P=I.__size,B=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,P,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function _(){for(let I=0;I<h;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(I){const L=l[I.id],D=I.uniforms,P=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let B=0,H=D.length;B<H;B++){const W=Array.isArray(D[B])?D[B]:[D[B]];for(let R=0,C=W.length;R<C;R++){const G=W[R];if(y(G,B,R,P)===!0){const q=G.__offset,nt=Array.isArray(G.value)?G.value:[G.value];let ut=0;for(let rt=0;rt<nt.length;rt++){const O=nt[rt],Y=A(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,q+ut,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,ut),ut+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(I,L,D,P){const B=I.value,H=L+"_"+D;if(P[H]===void 0)return typeof B=="number"||typeof B=="boolean"?P[H]=B:P[H]=B.clone(),!0;{const W=P[H];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return P[H]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function E(I){const L=I.uniforms;let D=0;const P=16;for(let H=0,W=L.length;H<W;H++){const R=Array.isArray(L[H])?L[H]:[L[H]];for(let C=0,G=R.length;C<G;C++){const q=R[C],nt=Array.isArray(q.value)?q.value:[q.value];for(let ut=0,rt=nt.length;ut<rt;ut++){const O=nt[ut],Y=A(O),Z=D%P,xt=Z%Y.boundary,U=Z+xt;D+=xt,U!==0&&P-U<Y.storage&&(D+=P-U),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=Y.storage}}}const B=D%P;return B>0&&(D+=P-B),I.__size=D,I.__cache={},this}function A(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function S(I){const L=I.target;L.removeEventListener("dispose",S);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function x(){for(const I in l)r.deleteBuffer(l[I]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}class bA{constructor(t={}){const{canvas:i=VS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,x=null;const I=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let P=!1;this._outputColorSpace=si;let B=0,H=0,W=null,R=-1,C=null;const G=new He,q=new He;let nt=null;const ut=new he(0);let rt=0,O=i.width,Y=i.height,Z=1,xt=null,U=null;const $=new He(0,0,O,Y),vt=new He(0,0,O,Y);let yt=!1;const Ct=new ep;let Pt=!1,J=!1;const ft=new Ue,St=new V,Zt=new He,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function on(){return W===null?Z:1}let F=s;function Le(w,j){return i.getContext(w,j)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kd}`),i.addEventListener("webglcontextlost",Rt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Et,!1),F===null){const j="webgl2";if(F=Le(j,w),F===null)throw Le(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let re,ie,zt,ke,kt,oe,Ze,Ke,N,T,it,ht,mt,ct,It,At,Wt,jt,Mt,Lt,Qt,Xt,Dt,le;function X(){re=new Pb(F),re.init(),Xt=new _A(F,re),ie=new wb(F,re,t,Xt),zt=new mA(F,re),ie.reversedDepthBuffer&&v&&zt.buffers.depth.setReversed(!0),ke=new Bb(F),kt=new nA,oe=new gA(F,re,zt,kt,ie,Xt,ke),Ze=new Db(D),Ke=new Ob(D),N=new XM(F),Dt=new Ab(F,N),T=new zb(F,N,ke,Dt),it=new Hb(F,T,N,ke),Mt=new Fb(F,ie,oe),At=new Cb(kt),ht=new eA(D,Ze,Ke,re,ie,Dt,At),mt=new EA(D,kt),ct=new aA,It=new uA(re),jt=new bb(D,Ze,Ke,zt,it,y,m),Wt=new dA(D,it,ie),le=new TA(F,ke,ie,zt),Lt=new Rb(F,re,ke),Qt=new Ib(F,re,ke),ke.programs=ht.programs,D.capabilities=ie,D.extensions=re,D.properties=kt,D.renderLists=ct,D.shadowMap=Wt,D.state=zt,D.info=ke}X();const bt=new SA(D,F);this.xr=bt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=re.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=re.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(w){w!==void 0&&(Z=w,this.setSize(O,Y,!1))},this.getSize=function(w){return w.set(O,Y)},this.setSize=function(w,j,ot=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,Y=j,i.width=Math.floor(w*Z),i.height=Math.floor(j*Z),ot===!0&&(i.style.width=w+"px",i.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(O*Z,Y*Z).floor()},this.setDrawingBufferSize=function(w,j,ot){O=w,Y=j,Z=ot,i.width=Math.floor(w*ot),i.height=Math.floor(j*ot),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(G)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,j,ot,lt){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,j,ot,lt),zt.viewport(G.copy($).multiplyScalar(Z).round())},this.getScissor=function(w){return w.copy(vt)},this.setScissor=function(w,j,ot,lt){w.isVector4?vt.set(w.x,w.y,w.z,w.w):vt.set(w,j,ot,lt),zt.scissor(q.copy(vt).multiplyScalar(Z).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){zt.setScissorTest(yt=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){U=w},this.getClearColor=function(w){return w.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(w=!0,j=!0,ot=!0){let lt=0;if(w){let Q=!1;if(W!==null){const Tt=W.texture.format;Q=Tt===Qd||Tt===Kd||Tt===Zd}if(Q){const Tt=W.texture.type,Ut=Tt===Fi||Tt===Ms||Tt===Yo||Tt===jo||Tt===qd||Tt===Yd,Ft=jt.getClearColor(),Nt=jt.getClearAlpha(),$t=Ft.r,ee=Ft.g,qt=Ft.b;Ut?(E[0]=$t,E[1]=ee,E[2]=qt,E[3]=Nt,F.clearBufferuiv(F.COLOR,0,E)):(A[0]=$t,A[1]=ee,A[2]=qt,A[3]=Nt,F.clearBufferiv(F.COLOR,0,A))}else lt|=F.COLOR_BUFFER_BIT}j&&(lt|=F.DEPTH_BUFFER_BIT),ot&&(lt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Rt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Et,!1),jt.dispose(),ct.dispose(),It.dispose(),kt.dispose(),Ze.dispose(),Ke.dispose(),it.dispose(),Dt.dispose(),le.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",hn),bt.removeEventListener("sessionend",dn),Je.stop()};function Rt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=ke.autoReset,j=Wt.enabled,ot=Wt.autoUpdate,lt=Wt.needsUpdate,Q=Wt.type;X(),ke.autoReset=w,Wt.enabled=j,Wt.autoUpdate=ot,Wt.needsUpdate=lt,Wt.type=Q}function Et(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function _t(w){const j=w.target;j.removeEventListener("dispose",_t),Vt(j)}function Vt(w){se(w),kt.remove(w)}function se(w){const j=kt.get(w).programs;j!==void 0&&(j.forEach(function(ot){ht.releaseProgram(ot)}),w.isShaderMaterial&&ht.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,ot,lt,Q,Tt){j===null&&(j=Yt);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,Ft=fa(w,j,ot,lt,Q);zt.setMaterial(lt,Ut);let Nt=ot.index,$t=1;if(lt.wireframe===!0){if(Nt=T.getWireframeAttribute(ot),Nt===void 0)return;$t=2}const ee=ot.drawRange,qt=ot.attributes.position;let de=ee.start*$t,Te=(ee.start+ee.count)*$t;Tt!==null&&(de=Math.max(de,Tt.start*$t),Te=Math.min(Te,(Tt.start+Tt.count)*$t)),Nt!==null?(de=Math.max(de,0),Te=Math.min(Te,Nt.count)):qt!=null&&(de=Math.max(de,0),Te=Math.min(Te,qt.count));const qe=Te-de;if(qe<0||qe===1/0)return;Dt.setup(Q,lt,Ft,ot,Nt);let Ne,pe=Lt;if(Nt!==null&&(Ne=N.get(Nt),pe=Qt,pe.setIndex(Ne)),Q.isMesh)lt.wireframe===!0?(zt.setLineWidth(lt.wireframeLinewidth*on()),pe.setMode(F.LINES)):pe.setMode(F.TRIANGLES);else if(Q.isLine){let Jt=lt.linewidth;Jt===void 0&&(Jt=1),zt.setLineWidth(Jt*on()),Q.isLineSegments?pe.setMode(F.LINES):Q.isLineLoop?pe.setMode(F.LINE_LOOP):pe.setMode(F.LINE_STRIP)}else Q.isPoints?pe.setMode(F.POINTS):Q.isSprite&&pe.setMode(F.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Qo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Jt=Q._multiDrawStarts,We=Q._multiDrawCounts,xe=Q._multiDrawCount,Dn=Nt?N.get(Nt).bytesPerElement:1,vi=kt.get(lt).currentProgram.getUniforms();for(let zn=0;zn<xe;zn++)vi.setValue(F,"_gl_DrawID",zn),pe.render(Jt[zn]/Dn,We[zn])}else if(Q.isInstancedMesh)pe.renderInstances(de,qe,Q.count);else if(ot.isInstancedBufferGeometry){const Jt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,We=Math.min(ot.instanceCount,Jt);pe.renderInstances(de,qe,We)}else pe.render(de,qe)};function we(w,j,ot){w.transparent===!0&&w.side===Zn&&w.forceSinglePass===!1?(w.side=Hn,w.needsUpdate=!0,Ci(w,j,ot),w.side=Wa,w.needsUpdate=!0,Ci(w,j,ot),w.side=Zn):Ci(w,j,ot)}this.compile=function(w,j,ot=null){ot===null&&(ot=w),x=It.get(ot),x.init(j),L.push(x),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),w!==ot&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(j.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights();const lt=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Tt=Q.material;if(Tt)if(Array.isArray(Tt))for(let Ut=0;Ut<Tt.length;Ut++){const Ft=Tt[Ut];we(Ft,ot,Q),lt.add(Ft)}else we(Tt,ot,Q),lt.add(Tt)}),x=L.pop(),lt},this.compileAsync=function(w,j,ot=null){const lt=this.compile(w,j,ot);return new Promise(Q=>{function Tt(){if(lt.forEach(function(Ut){kt.get(Ut).currentProgram.isReady()&&lt.delete(Ut)}),lt.size===0){Q(w);return}setTimeout(Tt,10)}re.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Ee=null;function _i(w){Ee&&Ee(w)}function hn(){Je.stop()}function dn(){Je.start()}const Je=new Pv;Je.setAnimationLoop(_i),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(w){Ee=w,bt.setAnimationLoop(w),w===null?Je.stop():Je.start()},bt.addEventListener("sessionstart",hn),bt.addEventListener("sessionend",dn),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(j),j=bt.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,j,W),x=It.get(w,L.length),x.init(j),L.push(x),ft.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ct.setFromProjectionMatrix(ft,Bi,j.reversedDepth),J=this.localClippingEnabled,Pt=At.init(this.clippingPlanes,J),S=ct.get(w,I.length),S.init(),I.push(S),bt.enabled===!0&&bt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&wi(Tt,j,-1/0,D.sortObjects)}wi(w,j,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(xt,U),ge=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ge&&jt.addToRenderList(S,w),this.info.render.frame++,Pt===!0&&At.beginShadows();const ot=x.state.shadowsArray;Wt.render(ot,w,j),Pt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=S.opaque,Q=S.transmissive;if(x.setupLights(),j.isArrayCamera){const Tt=j.cameras;if(Q.length>0)for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++){const Nt=Tt[Ut];el(lt,Q,w,Nt)}ge&&jt.render(w);for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++){const Nt=Tt[Ut];Rs(S,w,Nt,Nt.viewport)}}else Q.length>0&&el(lt,Q,w,j),ge&&jt.render(w),Rs(S,w,j);W!==null&&H===0&&(oe.updateMultisampleRenderTarget(W),oe.updateRenderTargetMipmap(W)),w.isScene===!0&&w.onAfterRender(D,w,j),Dt.resetDefaultState(),R=-1,C=null,L.pop(),L.length>0?(x=L[L.length-1],Pt===!0&&At.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function wi(w,j,ot,lt){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ct.intersectsSprite(w)){lt&&Zt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ft);const Ut=it.update(w),Ft=w.material;Ft.visible&&S.push(w,Ut,Ft,ot,Zt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ct.intersectsObject(w))){const Ut=it.update(w),Ft=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Zt.copy(w.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),Zt.copy(Ut.boundingSphere.center)),Zt.applyMatrix4(w.matrixWorld).applyMatrix4(ft)),Array.isArray(Ft)){const Nt=Ut.groups;for(let $t=0,ee=Nt.length;$t<ee;$t++){const qt=Nt[$t],de=Ft[qt.materialIndex];de&&de.visible&&S.push(w,Ut,de,ot,Zt.z,qt)}}else Ft.visible&&S.push(w,Ut,Ft,ot,Zt.z,null)}}const Tt=w.children;for(let Ut=0,Ft=Tt.length;Ut<Ft;Ut++)wi(Tt[Ut],j,ot,lt)}function Rs(w,j,ot,lt){const Q=w.opaque,Tt=w.transmissive,Ut=w.transparent;x.setupLightsView(ot),Pt===!0&&At.setGlobalState(D.clippingPlanes,ot),lt&&zt.viewport(G.copy(lt)),Q.length>0&&ws(Q,j,ot),Tt.length>0&&ws(Tt,j,ot),Ut.length>0&&ws(Ut,j,ot),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function el(w,j,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[lt.id]===void 0&&(x.state.transmissionRenderTarget[lt.id]=new Ts(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Jo:Fi,minFilter:Ss,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const Tt=x.state.transmissionRenderTarget[lt.id],Ut=lt.viewport||G;Tt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),Nt=D.getActiveCubeFace(),$t=D.getActiveMipmapLevel();D.setRenderTarget(Tt),D.getClearColor(ut),rt=D.getClearAlpha(),rt<1&&D.setClearColor(16777215,.5),D.clear(),ge&&jt.render(ot);const ee=D.toneMapping;D.toneMapping=Xa;const qt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),x.setupLightsView(lt),Pt===!0&&At.setGlobalState(D.clippingPlanes,lt),ws(w,ot,lt),oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt),re.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Te=0,qe=j.length;Te<qe;Te++){const Ne=j[Te],pe=Ne.object,Jt=Ne.geometry,We=Ne.material,xe=Ne.group;if(We.side===Zn&&pe.layers.test(lt.layers)){const Dn=We.side;We.side=Hn,We.needsUpdate=!0,Fr(pe,ot,lt,Jt,We,xe),We.side=Dn,We.needsUpdate=!0,de=!0}}de===!0&&(oe.updateMultisampleRenderTarget(Tt),oe.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Ft,Nt,$t),D.setClearColor(ut,rt),qt!==void 0&&(lt.viewport=qt),D.toneMapping=ee}function ws(w,j,ot){const lt=j.isScene===!0?j.overrideMaterial:null;for(let Q=0,Tt=w.length;Q<Tt;Q++){const Ut=w[Q],Ft=Ut.object,Nt=Ut.geometry,$t=Ut.group;let ee=Ut.material;ee.allowOverride===!0&&lt!==null&&(ee=lt),Ft.layers.test(ot.layers)&&Fr(Ft,j,ot,Nt,ee,$t)}}function Fr(w,j,ot,lt,Q,Tt){w.onBeforeRender(D,j,ot,lt,Q,Tt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(D,j,ot,lt,w,Tt),Q.transparent===!0&&Q.side===Zn&&Q.forceSinglePass===!1?(Q.side=Hn,Q.needsUpdate=!0,D.renderBufferDirect(ot,j,lt,Q,w,Tt),Q.side=Wa,Q.needsUpdate=!0,D.renderBufferDirect(ot,j,lt,Q,w,Tt),Q.side=Zn):D.renderBufferDirect(ot,j,lt,Q,w,Tt),w.onAfterRender(D,j,ot,lt,Q,Tt)}function Ci(w,j,ot){j.isScene!==!0&&(j=Yt);const lt=kt.get(w),Q=x.state.lights,Tt=x.state.shadowsArray,Ut=Q.state.version,Ft=ht.getParameters(w,Q.state,Tt,j,ot),Nt=ht.getProgramCacheKey(Ft);let $t=lt.programs;lt.environment=w.isMeshStandardMaterial?j.environment:null,lt.fog=j.fog,lt.envMap=(w.isMeshStandardMaterial?Ke:Ze).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?j.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",_t),$t=new Map,lt.programs=$t);let ee=$t.get(Nt);if(ee!==void 0){if(lt.currentProgram===ee&&lt.lightsStateVersion===Ut)return Hi(w,Ft),ee}else Ft.uniforms=ht.getUniforms(w),w.onBeforeCompile(Ft,D),ee=ht.acquireProgram(Ft,Nt),$t.set(Nt,ee),lt.uniforms=Ft.uniforms;const qt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=At.uniform),Hi(w,Ft),lt.needsLights=ha(w),lt.lightsStateVersion=Ut,lt.needsLights&&(qt.ambientLightColor.value=Q.state.ambient,qt.lightProbe.value=Q.state.probe,qt.directionalLights.value=Q.state.directional,qt.directionalLightShadows.value=Q.state.directionalShadow,qt.spotLights.value=Q.state.spot,qt.spotLightShadows.value=Q.state.spotShadow,qt.rectAreaLights.value=Q.state.rectArea,qt.ltc_1.value=Q.state.rectAreaLTC1,qt.ltc_2.value=Q.state.rectAreaLTC2,qt.pointLights.value=Q.state.point,qt.pointLightShadows.value=Q.state.pointShadow,qt.hemisphereLights.value=Q.state.hemi,qt.directionalShadowMap.value=Q.state.directionalShadowMap,qt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,qt.spotShadowMap.value=Q.state.spotShadowMap,qt.spotLightMatrix.value=Q.state.spotLightMatrix,qt.spotLightMap.value=Q.state.spotLightMap,qt.pointShadowMap.value=Q.state.pointShadowMap,qt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=ee,lt.uniformsList=null,ee}function Cs(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=qc.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Hi(w,j){const ot=kt.get(w);ot.outputColorSpace=j.outputColorSpace,ot.batching=j.batching,ot.batchingColor=j.batchingColor,ot.instancing=j.instancing,ot.instancingColor=j.instancingColor,ot.instancingMorph=j.instancingMorph,ot.skinning=j.skinning,ot.morphTargets=j.morphTargets,ot.morphNormals=j.morphNormals,ot.morphColors=j.morphColors,ot.morphTargetsCount=j.morphTargetsCount,ot.numClippingPlanes=j.numClippingPlanes,ot.numIntersection=j.numClipIntersection,ot.vertexAlphas=j.vertexAlphas,ot.vertexTangents=j.vertexTangents,ot.toneMapping=j.toneMapping}function fa(w,j,ot,lt,Q){j.isScene!==!0&&(j=Yt),oe.resetTextureUnits();const Tt=j.fog,Ut=lt.isMeshStandardMaterial?j.environment:null,Ft=W===null?D.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Pr,Nt=(lt.isMeshStandardMaterial?Ke:Ze).get(lt.envMap||Ut),$t=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ee=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),qt=!!ot.morphAttributes.position,de=!!ot.morphAttributes.normal,Te=!!ot.morphAttributes.color;let qe=Xa;lt.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(qe=D.toneMapping);const Ne=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,pe=Ne!==void 0?Ne.length:0,Jt=kt.get(lt),We=x.state.lights;if(Pt===!0&&(J===!0||w!==C)){const $e=w===C&&lt.id===R;At.setState(lt,w,$e)}let xe=!1;lt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==We.state.version||Jt.outputColorSpace!==Ft||Q.isBatchedMesh&&Jt.batching===!1||!Q.isBatchedMesh&&Jt.batching===!0||Q.isBatchedMesh&&Jt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Jt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Jt.instancing===!1||!Q.isInstancedMesh&&Jt.instancing===!0||Q.isSkinnedMesh&&Jt.skinning===!1||!Q.isSkinnedMesh&&Jt.skinning===!0||Q.isInstancedMesh&&Jt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Jt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Jt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Jt.instancingMorph===!1&&Q.morphTexture!==null||Jt.envMap!==Nt||lt.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==At.numPlanes||Jt.numIntersection!==At.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==qt||Jt.morphNormals!==de||Jt.morphColors!==Te||Jt.toneMapping!==qe||Jt.morphTargetsCount!==pe)&&(xe=!0):(xe=!0,Jt.__version=lt.version);let Dn=Jt.currentProgram;xe===!0&&(Dn=Ci(lt,j,Q));let vi=!1,zn=!1,Sn=!1;const Ge=Dn.getUniforms(),In=Jt.uniforms;if(zt.useProgram(Dn.program)&&(vi=!0,zn=!0,Sn=!0),lt.id!==R&&(R=lt.id,zn=!0),vi||C!==w){zt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ge.setValue(F,"projectionMatrix",w.projectionMatrix),Ge.setValue(F,"viewMatrix",w.matrixWorldInverse);const An=Ge.map.cameraPosition;An!==void 0&&An.setValue(F,St.setFromMatrixPosition(w.matrixWorld)),ie.logarithmicDepthBuffer&&Ge.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ge.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,zn=!0,Sn=!0)}if(Q.isSkinnedMesh){Ge.setOptional(F,Q,"bindMatrix"),Ge.setOptional(F,Q,"bindMatrixInverse");const $e=Q.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ge.setValue(F,"boneTexture",$e.boneTexture,oe))}Q.isBatchedMesh&&(Ge.setOptional(F,Q,"batchingTexture"),Ge.setValue(F,"batchingTexture",Q._matricesTexture,oe),Ge.setOptional(F,Q,"batchingIdTexture"),Ge.setValue(F,"batchingIdTexture",Q._indirectTexture,oe),Ge.setOptional(F,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ge.setValue(F,"batchingColorTexture",Q._colorsTexture,oe));const Un=ot.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Mt.update(Q,ot,Dn),(zn||Jt.receiveShadow!==Q.receiveShadow)&&(Jt.receiveShadow=Q.receiveShadow,Ge.setValue(F,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(In.envMap.value=Nt,In.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&j.environment!==null&&(In.envMapIntensity.value=j.environmentIntensity),zn&&(Ge.setValue(F,"toneMappingExposure",D.toneMappingExposure),Jt.needsLights&&ja(In,Sn),Tt&&lt.fog===!0&&mt.refreshFogUniforms(In,Tt),mt.refreshMaterialUniforms(In,lt,Z,Y,x.state.transmissionRenderTarget[w.id]),qc.upload(F,Cs(Jt),In,oe)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(qc.upload(F,Cs(Jt),In,oe),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ge.setValue(F,"center",Q.center),Ge.setValue(F,"modelViewMatrix",Q.modelViewMatrix),Ge.setValue(F,"normalMatrix",Q.normalMatrix),Ge.setValue(F,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const $e=lt.uniformsGroups;for(let An=0,Ds=$e.length;An<Ds;An++){const Vn=$e[An];le.update(Vn,Dn),le.bind(Vn,Dn)}}return Dn}function ja(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function ha(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,j,ot){const lt=kt.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),kt.get(w.texture).__webglTexture=j,kt.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,j){const ot=kt.get(w);ot.__webglFramebuffer=j,ot.__useDefaultFramebuffer=j===void 0};const ln=F.createFramebuffer();this.setRenderTarget=function(w,j=0,ot=0){W=w,B=j,H=ot;let lt=!0,Q=null,Tt=!1,Ut=!1;if(w){const Nt=kt.get(w);if(Nt.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(F.FRAMEBUFFER,null),lt=!1;else if(Nt.__webglFramebuffer===void 0)oe.setupRenderTarget(w);else if(Nt.__hasExternalTextures)oe.rebindTextures(w,kt.get(w.texture).__webglTexture,kt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const qt=w.depthTexture;if(Nt.__boundDepthTexture!==qt){if(qt!==null&&kt.has(qt)&&(w.width!==qt.image.width||w.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const ee=kt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[j])?Q=ee[j][ot]:Q=ee[j],Tt=!0):w.samples>0&&oe.useMultisampledRTT(w)===!1?Q=kt.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?Q=ee[ot]:Q=ee,G.copy(w.viewport),q.copy(w.scissor),nt=w.scissorTest}else G.copy($).multiplyScalar(Z).floor(),q.copy(vt).multiplyScalar(Z).floor(),nt=yt;if(ot!==0&&(Q=ln),zt.bindFramebuffer(F.FRAMEBUFFER,Q)&&lt&&zt.drawBuffers(w,Q),zt.viewport(G),zt.scissor(q),zt.setScissorTest(nt),Tt){const Nt=kt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,ot)}else if(Ut){const Nt=j;for(let $t=0;$t<w.textures.length;$t++){const ee=kt.get(w.textures[$t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$t,ee.__webglTexture,ot,Nt)}}else if(w!==null&&ot!==0){const Nt=kt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nt.__webglTexture,ot)}R=-1},this.readRenderTargetPixels=function(w,j,ot,lt,Q,Tt,Ut,Ft=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt){zt.bindFramebuffer(F.FRAMEBUFFER,Nt);try{const $t=w.textures[Ft],ee=$t.format,qt=$t.type;if(!ie.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-lt&&ot>=0&&ot<=w.height-Q&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ft),F.readPixels(j,ot,lt,Q,Xt.convert(ee),Xt.convert(qt),Tt))}finally{const $t=W!==null?kt.get(W).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(w,j,ot,lt,Q,Tt,Ut,Ft=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=kt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ut!==void 0&&(Nt=Nt[Ut]),Nt)if(j>=0&&j<=w.width-lt&&ot>=0&&ot<=w.height-Q){zt.bindFramebuffer(F.FRAMEBUFFER,Nt);const $t=w.textures[Ft],ee=$t.format,qt=$t.type;if(!ie.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ft),F.readPixels(j,ot,lt,Q,Xt.convert(ee),Xt.convert(qt),0);const Te=W!==null?kt.get(W).__webglFramebuffer:null;zt.bindFramebuffer(F.FRAMEBUFFER,Te);const qe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await kS(F,qe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,de),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(de),F.deleteSync(qe),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,j=null,ot=0){const lt=Math.pow(2,-ot),Q=Math.floor(w.image.width*lt),Tt=Math.floor(w.image.height*lt),Ut=j!==null?j.x:0,Ft=j!==null?j.y:0;oe.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,ot,0,0,Ut,Ft,Q,Tt),zt.unbindTexture()};const nl=F.createFramebuffer(),il=F.createFramebuffer();this.copyTextureToTexture=function(w,j,ot=null,lt=null,Q=0,Tt=null){Tt===null&&(Q!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=Q,Q=0):Tt=0);let Ut,Ft,Nt,$t,ee,qt,de,Te,qe;const Ne=w.isCompressedTexture?w.mipmaps[Tt]:w.image;if(ot!==null)Ut=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,Nt=ot.isBox3?ot.max.z-ot.min.z:1,$t=ot.min.x,ee=ot.min.y,qt=ot.isBox3?ot.min.z:0;else{const Un=Math.pow(2,-Q);Ut=Math.floor(Ne.width*Un),Ft=Math.floor(Ne.height*Un),w.isDataArrayTexture?Nt=Ne.depth:w.isData3DTexture?Nt=Math.floor(Ne.depth*Un):Nt=1,$t=0,ee=0,qt=0}lt!==null?(de=lt.x,Te=lt.y,qe=lt.z):(de=0,Te=0,qe=0);const pe=Xt.convert(j.format),Jt=Xt.convert(j.type);let We;j.isData3DTexture?(oe.setTexture3D(j,0),We=F.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(oe.setTexture2DArray(j,0),We=F.TEXTURE_2D_ARRAY):(oe.setTexture2D(j,0),We=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,j.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,j.unpackAlignment);const xe=F.getParameter(F.UNPACK_ROW_LENGTH),Dn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),vi=F.getParameter(F.UNPACK_SKIP_PIXELS),zn=F.getParameter(F.UNPACK_SKIP_ROWS),Sn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$t),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt);const Ge=w.isDataArrayTexture||w.isData3DTexture,In=j.isDataArrayTexture||j.isData3DTexture;if(w.isDepthTexture){const Un=kt.get(w),$e=kt.get(j),An=kt.get(Un.__renderTarget),Ds=kt.get($e.__renderTarget);zt.bindFramebuffer(F.READ_FRAMEBUFFER,An.__webglFramebuffer),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Vn=0;Vn<Nt;Vn++)Ge&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(w).__webglTexture,Q,qt+Vn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(j).__webglTexture,Tt,qe+Vn)),F.blitFramebuffer($t,ee,Ut,Ft,de,Te,Ut,Ft,F.DEPTH_BUFFER_BIT,F.NEAREST);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||kt.has(w)){const Un=kt.get(w),$e=kt.get(j);zt.bindFramebuffer(F.READ_FRAMEBUFFER,nl),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,il);for(let An=0;An<Nt;An++)Ge?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Un.__webglTexture,Q,qt+An):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Un.__webglTexture,Q),In?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,$e.__webglTexture,Tt,qe+An):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,$e.__webglTexture,Tt),Q!==0?F.blitFramebuffer($t,ee,Ut,Ft,de,Te,Ut,Ft,F.COLOR_BUFFER_BIT,F.NEAREST):In?F.copyTexSubImage3D(We,Tt,de,Te,qe+An,$t,ee,Ut,Ft):F.copyTexSubImage2D(We,Tt,de,Te,$t,ee,Ut,Ft);zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else In?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(We,Tt,de,Te,qe,Ut,Ft,Nt,pe,Jt,Ne.data):j.isCompressedArrayTexture?F.compressedTexSubImage3D(We,Tt,de,Te,qe,Ut,Ft,Nt,pe,Ne.data):F.texSubImage3D(We,Tt,de,Te,qe,Ut,Ft,Nt,pe,Jt,Ne):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,de,Te,Ut,Ft,pe,Jt,Ne.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,de,Te,Ne.width,Ne.height,pe,Ne.data):F.texSubImage2D(F.TEXTURE_2D,Tt,de,Te,Ut,Ft,pe,Jt,Ne);F.pixelStorei(F.UNPACK_ROW_LENGTH,xe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,vi),F.pixelStorei(F.UNPACK_SKIP_ROWS,zn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Sn),Tt===0&&j.generateMipmaps&&F.generateMipmap(We),zt.unbindTexture()},this.initRenderTarget=function(w){kt.get(w).__webglFramebuffer===void 0&&oe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?oe.setTextureCube(w,0):w.isData3DTexture?oe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?oe.setTexture2DArray(w,0):oe.setTexture2D(w,0),zt.unbindTexture()},this.resetState=function(){B=0,H=0,W=null,zt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}class AA extends Av{constructor(){super();const t=new Ir;t.deleteAttribute("uv");const i=new Ur({side:Hn}),s=new Ur,l=new Nv(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Be(t,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const f=new Id(t,s,6),h=new rn;h.position.set(-10.906,2.009,1.846),h.rotation.set(0,-.195,0),h.scale.set(2.328,7.905,4.651),h.updateMatrix(),f.setMatrixAt(0,h.matrix),h.position.set(-5.607,-.754,-.758),h.rotation.set(0,.994,0),h.scale.set(1.97,1.534,3.955),h.updateMatrix(),f.setMatrixAt(1,h.matrix),h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),h.updateMatrix(),f.setMatrixAt(2,h.matrix),h.position.set(-2.017,.018,6.124),h.rotation.set(0,.333,0),h.scale.set(2.002,4.566,2.064),h.updateMatrix(),f.setMatrixAt(3,h.matrix),h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),h.updateMatrix(),f.setMatrixAt(4,h.matrix),h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),h.updateMatrix(),f.setMatrixAt(5,h.matrix),this.add(f);const m=new Be(t,Tr(50));m.position.set(-16.116,14.37,8.208),m.scale.set(.1,2.428,2.739),this.add(m);const p=new Be(t,Tr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Be(t,Tr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Be(t,Tr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const v=new Be(t,Tr(20));v.position.set(3.235,11.486,-12.541),v.scale.set(2.5,2,.1),this.add(v);const y=new Be(t,Tr(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const t=new Set;this.traverse(i=>{i.isMesh&&(t.add(i.geometry),t.add(i.material))});for(const i of t)i.dispose()}}function Tr(r){return new OM({color:0,emissive:16777215,emissiveIntensity:r})}const ev={type:"change"},cp={type:"start"},Hv={type:"end"},Bc=new tl,nv=new Ga,RA=Math.cos(70*gv.DEG2RAD),_n=new V,jn=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jh=1e-6;class wA extends VM{constructor(t,i=null){super(t,i),this.state=Fe.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:wr.ROTATE,MIDDLE:wr.DOLLY,RIGHT:wr.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Es,this._lastTargetPosition=new V,this._quat=new Es().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new D0,this._sphericalDelta=new D0,this._scale=1,this._panOffset=new V,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new V,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=DA.bind(this),this._onPointerDown=CA.bind(this),this._onPointerUp=UA.bind(this),this._onContextMenu=BA.bind(this),this._onMouseWheel=OA.bind(this),this._onKeyDown=PA.bind(this),this._onTouchStart=zA.bind(this),this._onTouchMove=IA.bind(this),this._onMouseDown=LA.bind(this),this._onMouseMove=NA.bind(this),this._interceptControlDown=FA.bind(this),this._interceptControlUp=HA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ev),this.update(),this.state=Fe.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),l<-Math.PI?l+=jn:l>Math.PI&&(l-=jn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=_n.length();f=this._clampDistance(h*this._scale);const m=h-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const h=new V(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new V(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),f=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Bc.origin.copy(this.object.position),Bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bc.direction))<RA?this.object.lookAt(this.target):(nv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bc.intersectPlane(nv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>jh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jh||this._lastTargetPosition.distanceToSquared(this.target)>jh?(this.dispatchEvent(ev),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?jn/60*this.autoRotateSpeed*t:jn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,h=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/i.clientHeight),this._rotateUp(jn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new Ht,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function CA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function DA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function UA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hv),this.state=Fe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function LA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case wr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Fe.DOLLY;break;case wr.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}break;case wr.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(cp)}function NA(r){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function OA(r){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(r.preventDefault(),this.dispatchEvent(cp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Hv))}function PA(r){this.enabled!==!1&&this._handleKeyDown(r)}function zA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ar.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Fe.TOUCH_ROTATE;break;case Ar.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case Ar.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Fe.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(cp)}function IA(r){switch(this._trackPointer(r),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Fe.NONE}}function BA(r){this.enabled!==!1&&r.preventDefault()}function FA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function HA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iv(r){const t=[],i=[],s=[];for(let p=0;p<2;p++)for(let g=0;g<=14;g++)for(let _=0;_<=10;_++){const v=g/14,y=_/10*2-1,E=r==="cosmos"?.28:r==="tulip"?.58:r==="aurora"?.25:r==="peony"?.65:.53,A=Math.pow(Math.sin(Math.PI*v),r==="aurora"?.9:.58)*(r==="peony"?1+.09*Math.sin(v*28):1),S=Math.sin(y*8.5+v*5)*Math.pow(v,2.5),x=y*E*A*(1+.045*S),I=v*(r==="tulip"?1.25:1)+.035*S,L=(r==="rose"?.42:r==="tulip"?.12:.29)*v*v+.22*y*y*A+(r==="peony"?.075:.025)*Math.sin(v*17+y*4)*v+.075*Math.sin(y*10+v*4)*Math.pow(v,3)+(p===0?1:-1)*(.018+.009*Math.abs(y));t.push(x,I,L);const D=.84+.16*v;i.push(1,D*(.89+.11*v),D*(.87+.13*v))}const f=165;for(let p=0;p<2;p++)for(let g=0;g<14;g++)for(let _=0;_<10;_++){const v=p*f+g*11+_,y=v+1,E=v+10+1,A=E+1;p===0?s.push(v,y,E,y,A,E):s.push(v,E,y,y,E,A)}const h=[];for(let p=0;p<=10;p++)h.push(p);for(let p=1;p<=14;p++)h.push(p*11+10);for(let p=9;p>=0;p--)h.push(154+p);for(let p=13;p>0;p--)h.push(p*11);h.forEach((p,g)=>{const _=h[(g+1)%h.length];s.push(p,p+f,_,_,p+f,_+f)});const m=new vn;return m.setAttribute("position",new je(t,3)),m.setAttribute("color",new je(i,3)),m.setIndex(s),m.computeVertexNormals(),m}function Fc(r,t,i,s=22){return new Be(new rp(new sp(r),s,t,5,!1),i)}function av(r,t,i){const s=new sp(r),l=[],c=[];for(let h=0;h<=64;h++){const m=h/64,p=s.getPoint(m),g=s.getTangent(m),_=new V(-g.y,g.x,.28*Math.sin(m*6)).normalize();for(const v of[-1,1]){const y=p.clone().addScaledVector(_,v*t/2);l.push(y.x,y.y,y.z)}}for(let h=0;h<64;h++){const m=h*2;c.push(m,m+1,m+2,m+1,m+3,m+2)}const f=new vn;return f.setAttribute("position",new je(l,3)),f.setIndex(c),f.computeVertexNormals(),new Be(f,i)}const nn=(r,t,i)=>new V(r,t,i),br=gv.clamp;class GA{constructor(t,i,s,l){this.host=t,this.onFlower=s,this.onSecret=l,this.renderer=new bA({antialias:devicePixelRatio<2,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<700?1.35:1.8)),this.renderer.outputColorSpace=si,this.renderer.toneMapping=rv,this.renderer.toneMappingExposure=1.05;const c=new AA,f=new Hd(this.renderer);this.environment=f.fromScene(c,.035),this.scene.environment=this.environment.texture,this.scene.environmentIntensity=.85,this.scene.background=new he(398379),c.dispose(),f.dispose(),this.renderer.transmissionResolutionScale=innerWidth<700?.35:.6,t.append(this.renderer.domElement),this.camera.position.set(0,1.2,11.5),this.controls=new wA(this.camera,this.renderer.domElement),this.controls.target.set(0,.2,0),this.controls.enableDamping=!0,this.controls.enablePan=!1,this.controls.minDistance=7,this.controls.maxDistance=15,this.controls.minPolarAngle=.55,this.controls.maxPolarAngle=2.05,this.controls.autoRotate=!1,this.controls.autoRotateSpeed=.28,this.scene.add(new IM(16771807,1456997,1.4));const h=new Gh(16770524,2.4);h.position.set(3,6,6),this.scene.add(h);const m=new Gh(16760277,1.7);m.position.set(-5,2,-2),this.scene.add(m);const p=new Gh(6678271,3.5);p.position.set(4,3,-4),this.scene.add(p),this.scene.add(this.root),this.scene.add(this.halo);const g=new vn().setFromPoints(Array.from({length:40},(R,C)=>nn(Math.cos(C/40*Math.PI*2)*.63,0,Math.sin(C/40*Math.PI*2)*.63)));this.halo.add(new Nc(g,new Wc({color:16767131,size:.04,transparent:!0,opacity:0,depthWrite:!1}))),this.controls.addEventListener("start",()=>{this.cinematic=!1});const _=new Ur({color:9984073,metalness:.65,roughness:.25}),v=new Mr({color:9495533,metalness:0,roughness:.08,transmission:innerWidth<700?.22:.72,thickness:.17,ior:1.46,clearcoat:1,envMapIntensity:1.45,side:Zn}),y=["rose","peony","tulip","cosmos","aurora"],E=y.map(iv),A=i.map(R=>new Mr({color:R,vertexColors:!0,roughness:.09,metalness:0,transmission:innerWidth<700?.26:.68,thickness:.2,ior:1.46,attenuationColor:new he(16770267),attenuationDistance:1.4,envMapIntensity:1.35,clearcoat:1,clearcoatRoughness:.06,iridescence:.18,iridescenceIOR:1.3,side:Zn})),S=new Ur({color:15255179,metalness:.7,roughness:.3,emissive:5977362,emissiveIntensity:.3}),x=new Ur({color:16766087,emissive:16757547,emissiveIntensity:3.5,roughness:.3}),I=new Map([[0,nn(-.85,1.4,1.15)],[1,nn(.7,2.1,.8)],[5,nn(.95,.65,1.3)]]),L=iv("peony");for(let R=0;R<29;R++){const C=R*2.399963,G=Math.sqrt((R+.4)/29)*2.14;let q=Math.cos(C)*G,nt=1.05+Math.sqrt(Math.max(0,1-G*G/5.6))*.95+Math.sin(R*3.1)*.12,ut=Math.sin(C)*G*.64-.35;const rt=I.get(R);rt&&(q=rt.x,nt=rt.y,ut=rt.z);const O=y[R%5],Y=new oa;Y.position.set(q,nt,ut),Y.rotation.set(.55+ut*.18,0,-q*.19);const Z=(rt?.86:O==="peony"?.48:O==="cosmos"?.36:.43)*(1+.12*Math.sin(R*7));Y.scale.setScalar(Z),Y.userData.flower=R,this.root.add(Y);const xt=[],U=O==="rose"||O==="peony"?5:O==="tulip"?2:O==="aurora"?3:1;for(let J=0;J<U;J++){const ft=O==="tulip"?3:O==="cosmos"?10:O==="aurora"?7:6+J*3;for(let St=0;St<ft;St++)xt.push({angle:St/ft*Math.PI*2+J*1.63,tilt:O==="tulip"?.38+J*.3:O==="cosmos"?1.34:.28+J/(U-1)*1.1,size:O==="cosmos"?.94:.42+J*.14,radius:J*.05})}const $=new Id(E[R%5],A[R%A.length].clone(),xt.length);$.instanceMatrix.setUsage(HS),$.frustumCulled=!1,$.boundingSphere=new Ya(nn(0,.5,0),2),$.userData.flower=R,Y.add($);const vt=new Be(new Jc(O==="cosmos"?.17:.16,16,10),x);if(vt.scale.y=.7,rt){const J=new Nv(16761164,1.8,2.1,1.5);J.position.set(0,.27,.1),Y.add(J);for(let ft=0;ft<5;ft++){const St=ft/5*Math.PI*2;Y.add(Fc([nn(0,.08,0),nn(Math.sin(St)*.12,.35,Math.cos(St)*.12),nn(Math.sin(St)*.22,.24,Math.cos(St)*.22)],.014,x,12))}}if(vt.position.y=.11,Y.add(vt),O==="cosmos"||O==="aurora"){const J=new Id(new Jc(.024,5,4),S,18);for(let ft=0;ft<18;ft++){const St=ft*2.4,Zt=Math.sqrt(ft/18)*.14;this.dummy.position.set(Math.cos(St)*Zt,.14+Math.sin(ft)*.02,Math.sin(St)*Zt),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),J.setMatrixAt(ft,this.dummy.matrix)}Y.add(J)}const yt=new Be(new ip(.23,.37,5),_);yt.rotation.z=Math.PI,yt.position.y=-.12,Y.add(yt);const Ct=Fc([nn(-q*.05,-2.45,ut*.06),nn(q*.28,-.65,ut*.3),nn(q,nt-.1,ut)],.026,_);this.stems.push(Ct),this.root.add(Ct);const Pt=new Be(L,v);Pt.position.set(q*.57,-.1+Math.sin(R)*.35,ut*.5),Pt.rotation.set(.4,R*1.3,-q*.5),Pt.scale.set(.65,.85,.65),this.root.add(Pt),this.root.add(Fc([Pt.position.clone(),Pt.localToWorld(nn(0,.55,.11))],.008,_,8)),this.flowers.push({group:Y,petals:$,parts:xt,delay:R*.052,id:R,selected:-100,baseX:Y.rotation.x})}A.forEach(R=>R.dispose()),this.wrapping(S);const D=new Float32Array((innerWidth<700?220:500)*3);for(let R=0;R<D.length;R+=3)D[R]=Math.sin(R*37.7)*8,D[R+1]=Math.cos(R*13.2)*6,D[R+2]=-4+Math.sin(R*7.3)*6;this.particles=new Nc(new vn().setAttribute("position",new gi(D,3)),new Wc({color:16044957,size:.021,transparent:!0,opacity:.65,depthWrite:!1})),this.scene.add(this.particles);const P=[];for(let R=0;R<100;R++){const C=R/99*Math.PI*2;P.push(nn(16*Math.sin(C)**3/12,(13*Math.cos(C)-5*Math.cos(2*C)-2*Math.cos(3*C)-Math.cos(4*C))/12+3.8,Math.sin(C*2)*.25))}const B=new vn().setFromPoints(P);this.spark=new Nc(B,new Wc({color:16767389,size:.065,transparent:!0,opacity:0,depthWrite:!1})),this.heart.add(this.spark),this.heart.add(new S0(B,new Rv({color:15518108,transparent:!0,opacity:0}))),this.scene.add(this.heart);const H=new oa;for(let R=0;R<2;R++){const C=new Be(new $c(.19,.012,6,48),S);C.rotation.y=R?.75:-.75,C.rotation.x=.3,H.add(C)}H.position.set(.34,-1.84,.66),this.root.add(H),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.resize(),t.addEventListener("pointerdown",this.pointerDown),t.addEventListener("pointerup",this.pointerUp),t.addEventListener("dblclick",this.reset);const W=()=>{document.hidden?(cancelAnimationFrame(this.frame),this.frame=0):!this.disposed&&!this.frame&&this.animate()};document.addEventListener("visibilitychange",W),this.resumeCleanup=()=>document.removeEventListener("visibilitychange",W),this.animate()}renderer;scene=new Av;camera=new ri(38,1,.1,100);controls;flowers=[];frame=0;start=performance.now();active=!1;reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;heartStart=0;visited=new Set;root=new oa;heart=new oa;particles;spark;observer;dummy=new rn;down={x:0,y:0};ray=new GM;disposed=!1;stems=[];halo=new oa;cinematic=!1;environment;slowFrames=0;frameTime=performance.now();resumeCleanup;wrapping(t){const i=new Mr({color:1387597,metalness:.25,roughness:.37,side:Zn,clearcoat:.65});for(let c=0;c<2;c++){const f=[],h=[];for(let v=0;v<=18;v++)for(let y=0;y<=72;y++){const E=v/18,A=y/72*Math.PI*2,S=.26+E*(1.68+c*.2)+Math.sin(A*7+E*2)*E*.12;f.push(Math.cos(A)*S,-2.35+E*(2.6+c*.23)+E*E*(.22*Math.sin(A*3+.7)),Math.sin(A)*S*.7)}for(let v=0;v<18;v++)for(let y=0;y<72;y++){const E=v*73+y;h.push(E,E+1,E+72+1,E+1,E+72+2,E+72+1)}const p=new vn;p.setAttribute("position",new je(f,3)),p.setIndex(h),p.computeVertexNormals();const g=new Be(p,c===0?i:new Mr({color:10333116,metalness:.2,roughness:.45,side:Zn,transparent:!0,opacity:.6}));this.root.add(g);const _=[];for(let v=0;v<=72;v++){const y=3942+v*3;_.push(nn(f[y],f[y+1],f[y+2]))}this.root.add(Fc(_,.012,t,72))}const s=new Mr({color:14333068,metalness:.55,roughness:.28,side:Zn,clearcoat:.7});for(const c of[-1,1])this.root.add(av([nn(0,-1.65,.55),nn(c*.8,-1.15,.65),nn(c*.94,-1.7,.45),nn(0,-1.7,.6)],.22,s)),this.root.add(av([nn(c*.07,-1.72,.6),nn(c*.32,-2.2,.76),nn(c*.48,-2.72,.73),nn(c*.8,-2.65,.62)],.23,s));const l=new Be(new $c(.2,.08,8,24),s);l.scale.set(.7,1,.6),l.position.set(0,-1.67,.6),this.root.add(l)}resize(){const t=this.host.clientWidth,i=this.host.clientHeight;this.renderer.setSize(t,i),this.camera.aspect=t/i,this.camera.fov=t/i<.7?49:38,this.camera.updateProjectionMatrix()}pointerDown=t=>{this.down={x:t.clientX,y:t.clientY}};pointerUp=t=>{if(!this.active||Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>8)return;const i=this.host.getBoundingClientRect();this.ray.setFromCamera(new Ht((t.clientX-i.left)/i.width*2-1,-(t.clientY-i.top)/i.height*2+1),this.camera);const s=this.ray.intersectObjects(this.flowers.map(l=>l.petals),!1)[0];s&&this.selectFlower(s.object.userData.flower)};reset=()=>{this.camera.position.set(0,1.2,11.5),this.controls.target.set(0,.2,0),this.controls.update()};selectFlower(t){this.active&&(this.flowers[t].selected=performance.now(),this.halo.position.copy(this.flowers[t].group.position),this.halo.position.z+=.3,this.halo.userData.start=performance.now(),this.visited.add(t),this.onFlower(t,this.visited.size),this.visited.size>=5&&!this.heartStart&&(this.heartStart=performance.now(),this.onSecret()))}bloom(){this.active=!0,this.start=performance.now(),this.reset(),this.cinematic=!this.reduced}animate=()=>{if(this.disposed)return;this.frame=requestAnimationFrame(this.animate);const t=performance.now(),i=(t-this.start)/1e3;for(const l of this.flowers){const c=this.active?this.reduced?1:br((i-l.delay)/2.7,0,1):0,f=Math.max(0,1-(t-l.selected)/1800),h=l.petals.material;h.emissive.set(16757086),h.emissiveIntensity=.025+f*.18,l.group.rotation.x=l.baseX+(this.reduced?0:Math.sin(i*.6+l.id)*.018),l.parts.forEach((m,p)=>{const g=this.dummy;g.position.set(Math.sin(m.angle)*m.radius,.01,Math.cos(m.angle)*m.radius),g.rotation.set(0,m.angle,0);const _=br((c-(1-m.tilt/1.5)*.16)/.84,0,1);g.rotateX(.035+_*_*(3-2*_)*m.tilt+f*.1),g.scale.setScalar(m.size),g.updateMatrix(),l.petals.setMatrixAt(p,g.matrix)}),l.petals.instanceMatrix.needsUpdate=!0,l.group.visible=this.active}for(const l of this.stems)l.geometry.setDrawRange(0,Math.floor(br(i/1.8,0,1)*(l.geometry.index?.count||0)/3)*3);if(this.reduced||(this.particles.rotation.y=i*.012),this.heartStart){const l=br((t-this.heartStart)/2200,0,1),c=this.spark.geometry.attributes.position;this.heart.position.y=(1-l)*-3,this.heart.scale.setScalar(.3+l*.7);for(const f of this.heart.children)f.material instanceof ca&&(f.material.opacity=l*.85);this.spark.geometry.setDrawRange(0,Math.floor(c.count*l))}if(this.halo.userData.start){const l=br((t-this.halo.userData.start)/1800,0,1);this.halo.scale.setScalar(.6+l),this.halo.rotation.y=l*2,this.halo.children[0].material.opacity=(1-l)*.9}if(this.cinematic&&this.active){const l=br(i/4,0,1),c=l*l*(3-2*l);this.camera.position.set(.65*(1-c),1.2+(1-c)*.6,13.2-c*1.7),l===1&&(this.cinematic=!1)}const s=t-this.frameTime;this.frameTime=t,s>42&&this.slowFrames++,this.slowFrames===120&&(this.scene.traverse(l=>{if(l instanceof Be){const c=Array.isArray(l.material)?l.material:[l.material];for(const f of c)f instanceof Mr&&f.transmission>0&&(f.transmission=0,f.roughness=.14,f.needsUpdate=!0)}}),this.renderer.setPixelRatio(1),this.resize(),this.slowFrames++),this.controls.update(),this.renderer.render(this.scene,this.camera)};dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.observer.disconnect(),this.resumeCleanup(),this.controls.dispose(),this.host.removeEventListener("pointerdown",this.pointerDown),this.host.removeEventListener("pointerup",this.pointerUp),this.host.removeEventListener("dblclick",this.reset);const t=new Set,i=new Set;this.scene.traverse(s=>{if(s instanceof Be||s instanceof Nc||s instanceof S0){t.add(s.geometry);for(const l of Array.isArray(s.material)?s.material:[s.material])i.add(l)}}),t.forEach(s=>s.dispose()),i.forEach(s=>s.dispose()),this.environment?.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}}class VA{constructor(t){this.url=t}ctx;timer;gain;media;step=0;async toggle(t){if(!t){this.timer&&clearInterval(this.timer),this.timer=void 0,this.media?.pause(),this.ctx&&await this.ctx.suspend();return}if(this.url){this.media??=new Audio(this.url),this.media.loop=!0,this.media.volume=.18,await this.media.play();return}this.ctx??=new AudioContext,this.gain??=this.ctx.createGain(),this.gain.gain.value=.055,this.gain.connect(this.ctx.destination),await this.ctx.resume();const i=[261.63,329.63,392,493.88,440,392,329.63,293.66],s=()=>{this.note(i[this.step++%i.length],2.8),this.step%4===1&&this.note(130.81,4)};s(),this.timer=setInterval(s,850)}note(t=880,i=.7){if(!this.ctx||this.ctx.state!=="running"||!this.gain)return;const s=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.currentTime;s.type="sine",s.frequency.value=t,l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(.3,c+.04),l.gain.exponentialRampToValueAtTime(.001,c+i),s.connect(l),l.connect(this.gain),s.start(c),s.stop(c+i)}dispose(){this.timer&&clearInterval(this.timer),this.media?.pause(),this.ctx?.close()}}function kA(){const r=gn.useRef(null),t=gn.useRef(null),i=gn.useRef(null),[s,l]=gn.useState(null),[c,f]=gn.useState(0),[h,m]=gn.useState(!1),[p,g]=gn.useState(!1),[_,v]=gn.useState(""),[y,E]=gn.useState(""),[A,S]=gn.useState(0),[x,I]=gn.useState(!1),[L,D]=gn.useState(!1),[P,B]=gn.useState(!1),[H,W]=gn.useState(""),R=gn.useRef(0),C=gn.useRef(null);gn.useEffect(()=>{const q=new AbortController;return fetch("/eternal-bloom/gift-config.json",{signal:q.signal}).then(nt=>{if(!nt.ok)throw Error("Không tải được cấu hình món quà.");return f(45),nt.json()}).then(nt=>{if(!Array.isArray(nt.palette)||!nt.palette.length||!Array.isArray(nt.messages)||!nt.messages.length)throw Error("Hãy kiểm tra palette và messages trong gift-config.json.");l(nt)}).catch(nt=>{nt.name!=="AbortError"&&v(nt.message)}),()=>q.abort()},[]),gn.useEffect(()=>{if(!s||!r.current)return;let q;try{f(60);const nt=new GA(r.current,s.palette,(ut,rt)=>{S(rt),E(s.messages[ut%s.messages.length]),i.current?.note(),clearTimeout(q),q=setTimeout(()=>E(""),6500)},()=>{I(!0)});t.current=nt,i.current=new VA(s.musicUrl?"/eternal-bloom/"+s.musicUrl.replace(/^\//,""):""),f(100),m(!0)}catch{v("Thiết bị chưa khởi tạo được WebGL. Hãy bật tăng tốc đồ họa hoặc thử Chrome/Safari phiên bản mới.")}return()=>{clearTimeout(q),t.current?.dispose(),t.current=null,i.current?.dispose()}},[s]);async function G(){try{await i.current?.toggle(!P),B(!P)}catch{W("Chưa phát được âm thanh. Bạn thử bấm lại hoặc kiểm tra tệp nhạc nhé.")}}return gn.useEffect(()=>{if(!L)return;const q=nt=>{nt.key==="Escape"&&D(!1),nt.key==="Tab"&&(nt.preventDefault(),C.current?.querySelector("button")?.focus())};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[L]),wt.jsxs("main",{className:p?"experience opened":"experience",children:[wt.jsx("div",{className:"aura aura-one"}),wt.jsx("div",{className:"aura aura-two"}),wt.jsx("div",{className:"grain"}),wt.jsxs("header",{children:[wt.jsxs("a",{className:"brand",href:"#","aria-label":"Eternal Bloom",children:["✳ ",wt.jsx("span",{children:"ETERNAL BLOOM"})]}),wt.jsx("span",{className:"edition",children:"A UNIVERSE MADE FOR YOU"}),wt.jsxs("span",{className:"date",children:["20 / 10 ",wt.jsx("span",{children:"— A LITTLE LOVE"})]})]}),wt.jsx("div",{className:"scene",ref:r,"aria-label":"Bó hoa 3D tương tác. Kéo để xoay, cuộn để phóng to, nhấn đúp để đặt lại góc nhìn."}),!p&&wt.jsxs("section",{className:"intro",children:[wt.jsx("div",{className:"intro-star",children:"✧"}),wt.jsx("p",{className:"eyebrow",children:"MỘT MÓN QUÀ NHỎ • MỘT TÌNH YÊU LỚN"}),wt.jsxs("h1",{children:["Một vũ trụ hoa.",wt.jsx("br",{}),wt.jsx("em",{children:"Dành riêng cho em."})]}),wt.jsxs("p",{className:"intro-note",children:["Anh có một điều nhỏ muốn gửi đến",s?.recipient?" "+s.recipient:" em","..."]}),wt.jsxs("button",{className:"primary",disabled:!h||!!_,onClick:()=>{g(!0),t.current?.bloom()},children:["Khám phá món quà ",wt.jsx("span",{children:"↗"})]}),!h&&!_&&wt.jsxs("div",{className:"loading",children:[wt.jsx("progress",{max:"100",value:c}),wt.jsxs("span",{children:["Chuẩn bị vũ trụ nhỏ · ",c,"%"]})]}),_&&wt.jsx("p",{role:"alert",className:"error",children:_}),wt.jsx("span",{className:"intro-bottom",children:"Được tạo bằng những điều dịu dàng."})]}),p&&wt.jsxs(wt.Fragment,{children:[wt.jsxs("section",{className:"title",children:[wt.jsx("p",{className:"eyebrow",children:s?.recipient?"FOR "+s.recipient.toUpperCase():"FOR SOMEONE VERY SPECIAL"}),wt.jsxs("h1",{children:["A Little Universe,",wt.jsx("br",{}),wt.jsx("em",{children:"Just for You."})]}),wt.jsx("p",{children:s?.headline})]}),wt.jsxs("div",{className:"specimen",children:[wt.jsx("span",{children:"01—29"}),wt.jsx("i",{}),wt.jsxs("p",{children:["Không có hai bông hoa",wt.jsx("br",{}),"nào hoàn toàn giống nhau.",wt.jsx("br",{}),"Như cách em đặc biệt."]})]}),wt.jsxs("aside",{className:"dedication",children:[wt.jsx("span",{children:"WITH ALL MY LOVE"}),wt.jsxs("p",{children:[s?.sender||"Anh"," ",wt.jsx("i",{children:"♡"})]})]}),wt.jsx("div",{className:"flower-note",role:"status","aria-live":"polite",children:y&&wt.jsxs("div",{children:[wt.jsx("span",{children:"✧ MỘT ĐIỀU ANH MUỐN NÓI"}),wt.jsx("p",{children:y}),wt.jsx("button",{onClick:()=>E(""),"aria-label":"Đóng lời nhắn",children:"×"})]},y)}),wt.jsxs("footer",{children:[wt.jsxs("div",{className:"hint",children:[wt.jsx("span",{children:"✦"}),wt.jsxs("p",{children:["Chạm vào hoa, tìm điều dịu dàng",wt.jsxs("small",{children:[Math.min(A,5)," / 5 bông hoa ·"," ",x?"Bí mật đã được hé lộ":"Một bí mật đang chờ em"]})]})]}),wt.jsxs("div",{className:"controls",children:[wt.jsxs("button",{className:"accessible-flower",title:"Khám phá một bông hoa bằng bàn phím",onClick:()=>t.current?.selectFlower(R.current++%29),children:["✧ ",wt.jsx("span",{children:"Chạm hoa"})]}),wt.jsxs("button",{onClick:()=>{t.current?.bloom(),E("")},title:"Cho hoa nở lần nữa",children:["↻ ",wt.jsx("span",{children:"Nở lần nữa"})]}),wt.jsxs("button",{onClick:()=>t.current?.reset(),title:"Đặt lại góc nhìn",children:["◎ ",wt.jsx("span",{children:"Góc nhìn"})]}),s?.musicEnabled&&wt.jsxs("button",{onClick:G,"aria-pressed":P,title:"Bật/tắt âm nhạc",children:[P?"♫":"♪"," ",wt.jsx("span",{children:P?"Tắt nhạc":"Bật nhạc"})]}),x&&wt.jsxs("button",{className:"letter-button",onClick:()=>D(!0),children:["♡ ",wt.jsx("span",{children:"Mở thư"})]})]})]}),wt.jsx("div",{className:"orbit-help",children:"KÉO ĐỂ XOAY · CUỘN / CHỤM ĐỂ ZOOM · NHẤN ĐÚP ĐỂ TRỞ VỀ"}),x&&!L&&wt.jsxs("button",{className:"secret",onClick:()=>D(!0),children:[wt.jsx("span",{children:"✧"})," Giữa hàng triệu vì sao,",wt.jsx("br",{}),wt.jsx("em",{children:"anh vẫn chọn em."}),wt.jsx("small",{children:"Chạm để mở lá thư ♡"})]})]}),L&&wt.jsx("div",{className:"letter-backdrop",onClick:()=>D(!1),children:wt.jsxs("section",{ref:C,className:"letter",role:"dialog","aria-modal":"true","aria-label":"Lá thư gửi em",onClick:q=>q.stopPropagation(),children:[wt.jsx("button",{className:"close",autoFocus:!0,onClick:()=>D(!1),children:"Đóng ×"}),wt.jsx("span",{className:"eyebrow",children:"A LETTER, JUST FOR YOU"}),wt.jsxs("h2",{children:["Gửi ",s?.recipient||"em",","]}),wt.jsx("p",{children:s?.letter}),s?.womenDay&&wt.jsx("p",{className:"occasion",children:s.womenDayMessage}),wt.jsxs("i",{children:[s?.sender," ♡"]})]})}),H&&wt.jsxs("button",{className:"notice",onClick:()=>W(""),children:[H," ×"]})]})}$y.createRoot(document.getElementById("root")).render(wt.jsx(kA,{}));
