function Yp(u,n){for(var o=0;o<n.length;o++){const l=n[o];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in u)){const f=Object.getOwnPropertyDescriptor(l,c);f&&Object.defineProperty(u,c,f.get?f:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function l(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();function Ip(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var du={exports:{}},ur={};var Od;function Qp(){if(Od)return ur;Od=1;var u=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(l,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var g in c)g!=="key"&&(f[g]=c[g])}else f=c;return c=f.ref,{$$typeof:u,type:l,key:h,ref:c!==void 0?c:null,props:f}}return ur.Fragment=n,ur.jsx=o,ur.jsxs=o,ur}var Bd;function Wp(){return Bd||(Bd=1,du.exports=Qp()),du.exports}var A=Wp(),hu={exports:{}},cr={},pu={exports:{}},mu={};var Ld;function Xp(){return Ld||(Ld=1,(function(u){function n(B,F){var $=B.length;B.push(F);e:for(;0<$;){var ge=$-1>>>1,Ae=B[ge];if(0<c(Ae,F))B[ge]=F,B[$]=Ae,$=ge;else break e}}function o(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var F=B[0],$=B.pop();if($!==F){B[0]=$;e:for(var ge=0,Ae=B.length,E=Ae>>>1;ge<E;){var G=2*(ge+1)-1,Q=B[G],W=G+1,ne=B[W];if(0>c(Q,$))W<Ae&&0>c(ne,Q)?(B[ge]=ne,B[W]=$,ge=W):(B[ge]=Q,B[G]=$,ge=G);else if(W<Ae&&0>c(ne,$))B[ge]=ne,B[W]=$,ge=W;else break e}}return F}function c(B,F){var $=B.sortIndex-F.sortIndex;return $!==0?$:B.id-F.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;u.unstable_now=function(){return f.now()}}else{var h=Date,g=h.now();u.unstable_now=function(){return h.now()-g}}var y=[],v=[],b=1,x=null,w=3,T=!1,k=!1,O=!1,R=!1,N=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var F=o(v);F!==null;){if(F.callback===null)l(v);else if(F.startTime<=B)l(v),F.sortIndex=F.expirationTime,n(y,F);else break;F=o(v)}}function Y(B){if(O=!1,P(B),!k)if(o(y)!==null)k=!0,C||(C=!0,Se());else{var F=o(v);F!==null&&ze(Y,F.startTime-B)}}var C=!1,I=-1,K=5,X=-1;function ae(){return R?!0:!(u.unstable_now()-X<K)}function le(){if(R=!1,C){var B=u.unstable_now();X=B;var F=!0;try{e:{k=!1,O&&(O=!1,j(I),I=-1),T=!0;var $=w;try{t:{for(P(B),x=o(y);x!==null&&!(x.expirationTime>B&&ae());){var ge=x.callback;if(typeof ge=="function"){x.callback=null,w=x.priorityLevel;var Ae=ge(x.expirationTime<=B);if(B=u.unstable_now(),typeof Ae=="function"){x.callback=Ae,P(B),F=!0;break t}x===o(y)&&l(y),P(B)}else l(y);x=o(y)}if(x!==null)F=!0;else{var E=o(v);E!==null&&ze(Y,E.startTime-B),F=!1}}break e}finally{x=null,w=$,T=!1}F=void 0}}finally{F?Se():C=!1}}}var Se;if(typeof Z=="function")Se=function(){Z(le)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,ke=ce.port2;ce.port1.onmessage=le,Se=function(){ke.postMessage(null)}}else Se=function(){N(le,0)};function ze(B,F){I=N(function(){B(u.unstable_now())},F)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(B){B.callback=null},u.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<B?Math.floor(1e3/B):5},u.unstable_getCurrentPriorityLevel=function(){return w},u.unstable_next=function(B){switch(w){case 1:case 2:case 3:var F=3;break;default:F=w}var $=w;w=F;try{return B()}finally{w=$}},u.unstable_requestPaint=function(){R=!0},u.unstable_runWithPriority=function(B,F){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=w;w=B;try{return F()}finally{w=$}},u.unstable_scheduleCallback=function(B,F,$){var ge=u.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ge+$:ge):$=ge,B){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=$+Ae,B={id:b++,callback:F,priorityLevel:B,startTime:$,expirationTime:Ae,sortIndex:-1},$>ge?(B.sortIndex=$,n(v,B),o(y)===null&&B===o(v)&&(O?(j(I),I=-1):O=!0,ze(Y,$-ge))):(B.sortIndex=Ae,n(y,B),k||T||(k=!0,C||(C=!0,Se()))),B},u.unstable_shouldYield=ae,u.unstable_wrapCallback=function(B){var F=w;return function(){var $=w;w=F;try{return B.apply(this,arguments)}finally{w=$}}}})(mu)),mu}var Nd;function Kp(){return Nd||(Nd=1,pu.exports=Xp()),pu.exports}var gu={exports:{}},re={};var Gd;function Jp(){if(Gd)return re;Gd=1;var u=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),w=Symbol.iterator;function T(E){return E===null||typeof E!="object"?null:(E=w&&E[w]||E["@@iterator"],typeof E=="function"?E:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,R={};function N(E,G,Q){this.props=E,this.context=G,this.refs=R,this.updater=Q||k}N.prototype.isReactComponent={},N.prototype.setState=function(E,G){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,G,"setState")},N.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function j(){}j.prototype=N.prototype;function Z(E,G,Q){this.props=E,this.context=G,this.refs=R,this.updater=Q||k}var P=Z.prototype=new j;P.constructor=Z,O(P,N.prototype),P.isPureReactComponent=!0;var Y=Array.isArray;function C(){}var I={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function X(E,G,Q){var W=Q.ref;return{$$typeof:u,type:E,key:G,ref:W!==void 0?W:null,props:Q}}function ae(E,G){return X(E.type,G,E.props)}function le(E){return typeof E=="object"&&E!==null&&E.$$typeof===u}function Se(E){var G={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(Q){return G[Q]})}var ce=/\/+/g;function ke(E,G){return typeof E=="object"&&E!==null&&E.key!=null?Se(""+E.key):G.toString(36)}function ze(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(C,C):(E.status="pending",E.then(function(G){E.status==="pending"&&(E.status="fulfilled",E.value=G)},function(G){E.status==="pending"&&(E.status="rejected",E.reason=G)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function B(E,G,Q,W,ne){var oe=typeof E;(oe==="undefined"||oe==="boolean")&&(E=null);var Me=!1;if(E===null)Me=!0;else switch(oe){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(E.$$typeof){case u:case n:Me=!0;break;case b:return Me=E._init,B(Me(E._payload),G,Q,W,ne)}}if(Me)return ne=ne(E),Me=W===""?"."+ke(E,0):W,Y(ne)?(Q="",Me!=null&&(Q=Me.replace(ce,"$&/")+"/"),B(ne,G,Q,"",function(Ra){return Ra})):ne!=null&&(le(ne)&&(ne=ae(ne,Q+(ne.key==null||E&&E.key===ne.key?"":(""+ne.key).replace(ce,"$&/")+"/")+Me)),G.push(ne)),1;Me=0;var st=W===""?".":W+":";if(Y(E))for(var Ge=0;Ge<E.length;Ge++)W=E[Ge],oe=st+ke(W,Ge),Me+=B(W,G,Q,oe,ne);else if(Ge=T(E),typeof Ge=="function")for(E=Ge.call(E),Ge=0;!(W=E.next()).done;)W=W.value,oe=st+ke(W,Ge++),Me+=B(W,G,Q,oe,ne);else if(oe==="object"){if(typeof E.then=="function")return B(ze(E),G,Q,W,ne);throw G=String(E),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return Me}function F(E,G,Q){if(E==null)return E;var W=[],ne=0;return B(E,W,"","",function(oe){return G.call(Q,oe,ne++)}),W}function $(E){if(E._status===-1){var G=E._result;G=G(),G.then(function(Q){(E._status===0||E._status===-1)&&(E._status=1,E._result=Q)},function(Q){(E._status===0||E._status===-1)&&(E._status=2,E._result=Q)}),E._status===-1&&(E._status=0,E._result=G)}if(E._status===1)return E._result.default;throw E._result}var ge=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},Ae={map:F,forEach:function(E,G,Q){F(E,function(){G.apply(this,arguments)},Q)},count:function(E){var G=0;return F(E,function(){G++}),G},toArray:function(E){return F(E,function(G){return G})||[]},only:function(E){if(!le(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return re.Activity=x,re.Children=Ae,re.Component=N,re.Fragment=o,re.Profiler=c,re.PureComponent=Z,re.StrictMode=l,re.Suspense=y,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,re.__COMPILER_RUNTIME={__proto__:null,c:function(E){return I.H.useMemoCache(E)}},re.cache=function(E){return function(){return E.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(E,G,Q){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var W=O({},E.props),ne=E.key;if(G!=null)for(oe in G.key!==void 0&&(ne=""+G.key),G)!K.call(G,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&G.ref===void 0||(W[oe]=G[oe]);var oe=arguments.length-2;if(oe===1)W.children=Q;else if(1<oe){for(var Me=Array(oe),st=0;st<oe;st++)Me[st]=arguments[st+2];W.children=Me}return X(E.type,ne,W)},re.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},re.createElement=function(E,G,Q){var W,ne={},oe=null;if(G!=null)for(W in G.key!==void 0&&(oe=""+G.key),G)K.call(G,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(ne[W]=G[W]);var Me=arguments.length-2;if(Me===1)ne.children=Q;else if(1<Me){for(var st=Array(Me),Ge=0;Ge<Me;Ge++)st[Ge]=arguments[Ge+2];ne.children=st}if(E&&E.defaultProps)for(W in Me=E.defaultProps,Me)ne[W]===void 0&&(ne[W]=Me[W]);return X(E,oe,ne)},re.createRef=function(){return{current:null}},re.forwardRef=function(E){return{$$typeof:g,render:E}},re.isValidElement=le,re.lazy=function(E){return{$$typeof:b,_payload:{_status:-1,_result:E},_init:$}},re.memo=function(E,G){return{$$typeof:v,type:E,compare:G===void 0?null:G}},re.startTransition=function(E){var G=I.T,Q={};I.T=Q;try{var W=E(),ne=I.S;ne!==null&&ne(Q,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(C,ge)}catch(oe){ge(oe)}finally{G!==null&&Q.types!==null&&(G.types=Q.types),I.T=G}},re.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},re.use=function(E){return I.H.use(E)},re.useActionState=function(E,G,Q){return I.H.useActionState(E,G,Q)},re.useCallback=function(E,G){return I.H.useCallback(E,G)},re.useContext=function(E){return I.H.useContext(E)},re.useDebugValue=function(){},re.useDeferredValue=function(E,G){return I.H.useDeferredValue(E,G)},re.useEffect=function(E,G){return I.H.useEffect(E,G)},re.useEffectEvent=function(E){return I.H.useEffectEvent(E)},re.useId=function(){return I.H.useId()},re.useImperativeHandle=function(E,G,Q){return I.H.useImperativeHandle(E,G,Q)},re.useInsertionEffect=function(E,G){return I.H.useInsertionEffect(E,G)},re.useLayoutEffect=function(E,G){return I.H.useLayoutEffect(E,G)},re.useMemo=function(E,G){return I.H.useMemo(E,G)},re.useOptimistic=function(E,G){return I.H.useOptimistic(E,G)},re.useReducer=function(E,G,Q){return I.H.useReducer(E,G,Q)},re.useRef=function(E){return I.H.useRef(E)},re.useState=function(E){return I.H.useState(E)},re.useSyncExternalStore=function(E,G,Q){return I.H.useSyncExternalStore(E,G,Q)},re.useTransition=function(){return I.H.useTransition()},re.version="19.2.7",re}var Hd;function Du(){return Hd||(Hd=1,gu.exports=Jp()),gu.exports}var vu={exports:{}},vt={};var Pd;function $p(){if(Pd)return vt;Pd=1;var u=Du();function n(y){var v="https://react.dev/errors/"+y;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)v+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+y+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(n(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(y,v,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:y,containerInfo:v,implementation:b}}var h=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,v){if(y==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return vt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,vt.createPortal=function(y,v){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(n(299));return f(y,v,null,b)},vt.flushSync=function(y){var v=h.T,b=l.p;try{if(h.T=null,l.p=2,y)return y()}finally{h.T=v,l.p=b,l.d.f()}},vt.preconnect=function(y,v){typeof y=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,l.d.C(y,v))},vt.prefetchDNS=function(y){typeof y=="string"&&l.d.D(y)},vt.preinit=function(y,v){if(typeof y=="string"&&v&&typeof v.as=="string"){var b=v.as,x=g(b,v.crossOrigin),w=typeof v.integrity=="string"?v.integrity:void 0,T=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;b==="style"?l.d.S(y,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:x,integrity:w,fetchPriority:T}):b==="script"&&l.d.X(y,{crossOrigin:x,integrity:w,fetchPriority:T,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},vt.preinitModule=function(y,v){if(typeof y=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var b=g(v.as,v.crossOrigin);l.d.M(y,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&l.d.M(y)},vt.preload=function(y,v){if(typeof y=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var b=v.as,x=g(b,v.crossOrigin);l.d.L(y,b,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},vt.preloadModule=function(y,v){if(typeof y=="string")if(v){var b=g(v.as,v.crossOrigin);l.d.m(y,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else l.d.m(y)},vt.requestFormReset=function(y){l.d.r(y)},vt.unstable_batchedUpdates=function(y,v){return y(v)},vt.useFormState=function(y,v,b){return h.H.useFormState(y,v,b)},vt.useFormStatus=function(){return h.H.useHostTransitionStatus()},vt.version="19.2.7",vt}var qd;function k1(){if(qd)return vu.exports;qd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(n){console.error(n)}}return u(),vu.exports=$p(),vu.exports}var Vd;function em(){if(Vd)return cr;Vd=1;var u=Kp(),n=Du(),o=k1();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(l(188))}function v(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,i=t;;){var r=a.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){a=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===a)return y(r),e;if(s===i)return y(r),t;s=s.sibling}throw Error(l(188))}if(a.return!==i.return)a=r,i=s;else{for(var d=!1,m=r.child;m;){if(m===a){d=!0,a=r,i=s;break}if(m===i){d=!0,i=r,a=s;break}m=m.sibling}if(!d){for(m=s.child;m;){if(m===a){d=!0,a=s,i=r;break}if(m===i){d=!0,i=s,a=r;break}m=m.sibling}if(!d)throw Error(l(189))}}if(a.alternate!==i)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,w=Symbol.for("react.element"),T=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),C=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),X=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),le=Symbol.iterator;function Se(e){return e===null||typeof e!="object"?null:(e=le&&e[le]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case N:return"Profiler";case R:return"StrictMode";case Y:return"Suspense";case C:return"SuspenseList";case X:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case Z:return e.displayName||"Context";case j:return(e._context.displayName||"Context")+".Consumer";case P:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case K:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var ze=Array.isArray,B=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ge=[],Ae=-1;function E(e){return{current:e}}function G(e){0>Ae||(e.current=ge[Ae],ge[Ae]=null,Ae--)}function Q(e,t){Ae++,ge[Ae]=e.current,e.current=t}var W=E(null),ne=E(null),oe=E(null),Me=E(null);function st(e,t){switch(Q(oe,t),Q(ne,e),Q(W,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=id(t),e=nd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(W),Q(W,e)}function Ge(){G(W),G(ne),G(oe)}function Ra(e){e.memoizedState!==null&&Q(Me,e);var t=W.current,a=nd(t,e.type);t!==a&&(Q(ne,e),Q(W,a))}function $a(e){ne.current===e&&(G(W),G(ne)),Me.current===e&&(G(Me),rr._currentValue=$)}var Mi,Ai;function $t(e){if(Mi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Mi=t&&t[1]||"",Ai=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Mi+e+Ai}var ve=!1;function Ti(e,t){if(!e||ve)return"";ve=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var V=function(){throw Error()};if(Object.defineProperty(V.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(V,[])}catch(L){var D=L}Reflect.construct(e,[],V)}else{try{V.call()}catch(L){D=L}e.call(V.prototype)}}else{try{throw Error()}catch(L){D=L}(V=e())&&typeof V.catch=="function"&&V.catch(function(){})}}catch(L){if(L&&D&&typeof L.stack=="string")return[L.stack,D.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),d=s[0],m=s[1];if(d&&m){var S=d.split(`
`),U=m.split(`
`);for(r=i=0;i<S.length&&!S[i].includes("DetermineComponentFrameRoot");)i++;for(;r<U.length&&!U[r].includes("DetermineComponentFrameRoot");)r++;if(i===S.length||r===U.length)for(i=S.length-1,r=U.length-1;1<=i&&0<=r&&S[i]!==U[r];)r--;for(;1<=i&&0<=r;i--,r--)if(S[i]!==U[r]){if(i!==1||r!==1)do if(i--,r--,0>r||S[i]!==U[r]){var H=`
`+S[i].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=i&&0<=r);break}}}finally{ve=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?$t(a):""}function zt(e,t){switch(e.tag){case 26:case 27:case 5:return $t(e.type);case 16:return $t("Lazy");case 13:return e.child!==t&&t!==null?$t("Suspense Fallback"):$t("Suspense");case 19:return $t("SuspenseList");case 0:case 15:return Ti(e.type,!1);case 11:return Ti(e.type.render,!1);case 1:return Ti(e.type,!0);case 31:return $t("Activity");default:return""}}function Sr(e){try{var t="",a=null;do t+=zt(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ue=Object.prototype.hasOwnProperty,ft=u.unstable_scheduleCallback,ra=u.unstable_cancelCallback,wr=u.unstable_shouldYield,yn=u.unstable_requestPaint,Fe=u.unstable_now,Ri=u.unstable_getCurrentPriorityLevel,Er=u.unstable_ImmediatePriority,Mr=u.unstable_UserBlockingPriority,de=u.unstable_NormalPriority,Pe=u.unstable_LowPriority,_e=u.unstable_IdlePriority,nt=u.log,za=u.unstable_setDisableYieldValue,ei=null,Je=null;function xt(e){if(typeof nt=="function"&&za(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(ei,e)}catch{}}var ot=Math.clz32?Math.clz32:Tr,Ar=Math.log,xn=Math.LN2;function Tr(e){return e>>>=0,e===0?32:31-(Ar(e)/xn|0)|0}var ti=256,ea=262144,bt=4194304;function Lt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ai(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var r=0,s=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var m=i&134217727;return m!==0?(i=m&~s,i!==0?r=Lt(i):(d&=m,d!==0?r=Lt(d):a||(a=m&~e,a!==0&&(r=Lt(a))))):(m=i&~s,m!==0?r=Lt(m):d!==0?r=Lt(d):a||(a=i&~e,a!==0&&(r=Lt(a)))),r===0?0:t!==0&&t!==r&&(t&s)===0&&(s=r&-r,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:r}function Wt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Rr(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zi(){var e=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),e}function ii(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ca(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function as(e,t,a,i,r,s){var d=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var m=e.entanglements,S=e.expirationTimes,U=e.hiddenUpdates;for(a=d&~a;0<a;){var H=31-ot(a),V=1<<H;m[H]=0,S[H]=-1;var D=U[H];if(D!==null)for(U[H]=null,H=0;H<D.length;H++){var L=D[H];L!==null&&(L.lane&=-536870913)}a&=~V}i!==0&&zr(e,i,0),s!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=s&~(d&~t))}function zr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-ot(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function ni(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-ot(a),r=1<<i;r&t|e[i]&t&&(e[i]|=t),a&=~r}}function he(e,t){var a=t&-t;return a=(a&42)!==0?1:Ie(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ie(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function se(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ye(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Rd(e.type))}function rt(e,t){var a=F.p;try{return F.p=e,t()}finally{F.p=a}}var dt=Math.random().toString(36).slice(2),Ye="__reactFiber$"+dt,$e="__reactProps$"+dt,Nt="__reactContainer$"+dt,Ci="__reactEvents$"+dt,ki="__reactListeners$"+dt,Lh="__reactHandles$"+dt,ju="__reactResources$"+dt,bn="__reactMarker$"+dt;function is(e){delete e[Ye],delete e[$e],delete e[Ci],delete e[ki],delete e[Lh]}function _i(e){var t=e[Ye];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Nt]||a[Ye]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=fd(e);e!==null;){if(a=e[Ye])return a;e=fd(e)}return t}e=a,a=e.parentNode}return null}function Ui(e){if(e=e[Ye]||e[Nt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Sn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Di(e){var t=e[ju];return t||(t=e[ju]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ut(e){e[bn]=!0}var Zu=new Set,Fu={};function ri(e,t){Oi(e,t),Oi(e+"Capture",t)}function Oi(e,t){for(Fu[e]=t,e=0;e<t.length;e++)Zu.add(t[e])}var Nh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yu={},Iu={};function Gh(e){return Ue.call(Iu,e)?!0:Ue.call(Yu,e)?!1:Nh.test(e)?Iu[e]=!0:(Yu[e]=!0,!1)}function Cr(e,t,a){if(Gh(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function kr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function la(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hh(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){a=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(d){a=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ns(e){if(!e._valueTracker){var t=Qu(e)?"checked":"value";e._valueTracker=Hh(e,t,""+e[t])}}function Wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Qu(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function _r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ph=/[\n"\\]/g;function Ht(e){return e.replace(Ph,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function rs(e,t,a,i,r,s,d,m){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gt(t)):e.value!==""+Gt(t)&&(e.value=""+Gt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?ls(e,d,Gt(t)):a!=null?ls(e,d,Gt(a)):i!=null&&e.removeAttribute("value"),r==null&&s!=null&&(e.defaultChecked=!!s),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.name=""+Gt(m):e.removeAttribute("name")}function Xu(e,t,a,i,r,s,d,m){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){ns(e);return}a=a!=null?""+Gt(a):"",t=t!=null?""+Gt(t):a,m||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=m?e.checked:!!i,e.defaultChecked=!!i,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),ns(e)}function ls(e,t,a){t==="number"&&_r(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Bi(e,t,a,i){if(e=e.options,t){t={};for(var r=0;r<a.length;r++)t["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=t.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Gt(a),t=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function Ku(e,t,a){if(t!=null&&(t=""+Gt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+Gt(a):""}function Ju(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(l(92));if(ze(i)){if(1<i.length)throw Error(l(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=Gt(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),ns(e)}function Li(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var qh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $u(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||qh.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ec(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&a[r]!==i&&$u(e,r,i)}else for(var s in t)t.hasOwnProperty(s)&&$u(e,s,t[s])}function ss(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ur(e){return jh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var os=null;function us(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ni=null,Gi=null;function tc(e){var t=Ui(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(rs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var r=i[$e]||null;if(!r)throw Error(l(90));rs(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Wu(i)}break e;case"textarea":Ku(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Bi(e,!!a.multiple,t,!1)}}}var cs=!1;function ac(e,t,a){if(cs)return e(t,a);cs=!0;try{var i=e(t);return i}finally{if(cs=!1,(Ni!==null||Gi!==null)&&(xl(),Ni&&(t=Ni,e=Gi,Gi=Ni=null,tc(t),e)))for(t=0;t<e.length;t++)tc(e[t])}}function wn(e,t){var a=e.stateNode;if(a===null)return null;var i=a[$e]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fs=!1;if(oa)try{var En={};Object.defineProperty(En,"passive",{get:function(){fs=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{fs=!1}var ka=null,ds=null,Dr=null;function ic(){if(Dr)return Dr;var e,t=ds,a=t.length,i,r="value"in ka?ka.value:ka.textContent,s=r.length;for(e=0;e<a&&t[e]===r[e];e++);var d=a-e;for(i=1;i<=d&&t[a-i]===r[s-i];i++);return Dr=r.slice(e,1<i?1-i:void 0)}function Or(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Br(){return!0}function nc(){return!1}function St(e){function t(a,i,r,s,d){this._reactName=a,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(a=e[m],this[m]=a?a(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Br:nc,this.isPropagationStopped=nc,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),t}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lr=St(li),Mn=x({},li,{view:0,detail:0}),Zh=St(Mn),hs,ps,An,Nr=x({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==An&&(An&&e.type==="mousemove"?(hs=e.screenX-An.screenX,ps=e.screenY-An.screenY):ps=hs=0,An=e),hs)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),rc=St(Nr),Fh=x({},Nr,{dataTransfer:0}),Yh=St(Fh),Ih=x({},Mn,{relatedTarget:0}),ms=St(Ih),Qh=x({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),Wh=St(Qh),Xh=x({},li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kh=St(Xh),Jh=x({},li,{data:0}),lc=St(Jh),$h={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a2(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=t2[e])?!!t[e]:!1}function gs(){return a2}var i2=x({},Mn,{key:function(e){if(e.key){var t=$h[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Or(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?e2[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?Or(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Or(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n2=St(i2),r2=x({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sc=St(r2),l2=x({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),s2=St(l2),o2=x({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),u2=St(o2),c2=x({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f2=St(c2),d2=x({},li,{newState:0,oldState:0}),h2=St(d2),p2=[9,13,27,32],vs=oa&&"CompositionEvent"in window,Tn=null;oa&&"documentMode"in document&&(Tn=document.documentMode);var m2=oa&&"TextEvent"in window&&!Tn,oc=oa&&(!vs||Tn&&8<Tn&&11>=Tn),uc=" ",cc=!1;function fc(e,t){switch(e){case"keyup":return p2.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hi=!1;function g2(e,t){switch(e){case"compositionend":return dc(t);case"keypress":return t.which!==32?null:(cc=!0,uc);case"textInput":return e=t.data,e===uc&&cc?null:e;default:return null}}function v2(e,t){if(Hi)return e==="compositionend"||!vs&&fc(e,t)?(e=ic(),Dr=ds=ka=null,Hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oc&&t.locale!=="ko"?null:t.data;default:return null}}var y2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!y2[e.type]:t==="textarea"}function pc(e,t,a,i){Ni?Gi?Gi.push(i):Gi=[i]:Ni=i,t=Tl(t,"onChange"),0<t.length&&(a=new Lr("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Rn=null,zn=null;function x2(e){Kf(e,0)}function Gr(e){var t=Sn(e);if(Wu(t))return e}function mc(e,t){if(e==="change")return t}var gc=!1;if(oa){var ys;if(oa){var xs="oninput"in document;if(!xs){var vc=document.createElement("div");vc.setAttribute("oninput","return;"),xs=typeof vc.oninput=="function"}ys=xs}else ys=!1;gc=ys&&(!document.documentMode||9<document.documentMode)}function yc(){Rn&&(Rn.detachEvent("onpropertychange",xc),zn=Rn=null)}function xc(e){if(e.propertyName==="value"&&Gr(zn)){var t=[];pc(t,zn,e,us(e)),ac(x2,t)}}function b2(e,t,a){e==="focusin"?(yc(),Rn=t,zn=a,Rn.attachEvent("onpropertychange",xc)):e==="focusout"&&yc()}function S2(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gr(zn)}function w2(e,t){if(e==="click")return Gr(t)}function E2(e,t){if(e==="input"||e==="change")return Gr(t)}function M2(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:M2;function Cn(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var r=a[i];if(!Ue.call(t,r)||!Ct(e[r],t[r]))return!1}return!0}function bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sc(e,t){var a=bc(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bc(a)}}function wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ec(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=_r(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=_r(e.document)}return t}function bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var A2=oa&&"documentMode"in document&&11>=document.documentMode,Pi=null,Ss=null,kn=null,ws=!1;function Mc(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ws||Pi==null||Pi!==_r(i)||(i=Pi,"selectionStart"in i&&bs(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),kn&&Cn(kn,i)||(kn=i,i=Tl(Ss,"onSelect"),0<i.length&&(t=new Lr("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Pi)))}function si(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var qi={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionrun:si("Transition","TransitionRun"),transitionstart:si("Transition","TransitionStart"),transitioncancel:si("Transition","TransitionCancel"),transitionend:si("Transition","TransitionEnd")},Es={},Ac={};oa&&(Ac=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function oi(e){if(Es[e])return Es[e];if(!qi[e])return e;var t=qi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Ac)return Es[e]=t[a];return e}var Tc=oi("animationend"),Rc=oi("animationiteration"),zc=oi("animationstart"),T2=oi("transitionrun"),R2=oi("transitionstart"),z2=oi("transitioncancel"),Cc=oi("transitionend"),kc=new Map,Ms="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ms.push("scrollEnd");function Xt(e,t){kc.set(e,t),ri(t,[e])}var Hr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pt=[],Vi=0,As=0;function Pr(){for(var e=Vi,t=As=Vi=0;t<e;){var a=Pt[t];Pt[t++]=null;var i=Pt[t];Pt[t++]=null;var r=Pt[t];Pt[t++]=null;var s=Pt[t];if(Pt[t++]=null,i!==null&&r!==null){var d=i.pending;d===null?r.next=r:(r.next=d.next,d.next=r),i.pending=r}s!==0&&_c(a,r,s)}}function qr(e,t,a,i){Pt[Vi++]=e,Pt[Vi++]=t,Pt[Vi++]=a,Pt[Vi++]=i,As|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ts(e,t,a,i){return qr(e,t,a,i),Vr(e)}function ui(e,t){return qr(e,null,null,t),Vr(e)}function _c(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var r=!1,s=e.return;s!==null;)s.childLanes|=a,i=s.alternate,i!==null&&(i.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(r=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,r&&t!==null&&(r=31-ot(a),e=s.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=a|536870912),s):null}function Vr(e){if(50<Jn)throw Jn=0,Lo=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ji={};function C2(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,a,i){return new C2(e,t,a,i)}function Rs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ua(e,t){var a=e.alternate;return a===null?(a=kt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Uc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function jr(e,t,a,i,r,s){var d=0;if(i=e,typeof e=="function")Rs(e)&&(d=1);else if(typeof e=="string")d=Op(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case X:return e=kt(31,a,t,r),e.elementType=X,e.lanes=s,e;case O:return ci(a.children,r,s,t);case R:d=8,r|=24;break;case N:return e=kt(12,a,t,r|2),e.elementType=N,e.lanes=s,e;case Y:return e=kt(13,a,t,r),e.elementType=Y,e.lanes=s,e;case C:return e=kt(19,a,t,r),e.elementType=C,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Z:d=10;break e;case j:d=9;break e;case P:d=11;break e;case I:d=14;break e;case K:d=16,i=null;break e}d=29,a=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=kt(d,a,t,r),t.elementType=e,t.type=i,t.lanes=s,t}function ci(e,t,a,i){return e=kt(7,e,i,t),e.lanes=a,e}function zs(e,t,a){return e=kt(6,e,null,t),e.lanes=a,e}function Dc(e){var t=kt(18,null,null,0);return t.stateNode=e,t}function Cs(e,t,a){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Oc=new WeakMap;function qt(e,t){if(typeof e=="object"&&e!==null){var a=Oc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Sr(t)},Oc.set(e,t),t)}return{value:e,source:t,stack:Sr(t)}}var Zi=[],Fi=0,Zr=null,_n=0,Vt=[],jt=0,_a=null,ta=1,aa="";function ca(e,t){Zi[Fi++]=_n,Zi[Fi++]=Zr,Zr=e,_n=t}function Bc(e,t,a){Vt[jt++]=ta,Vt[jt++]=aa,Vt[jt++]=_a,_a=e;var i=ta;e=aa;var r=32-ot(i)-1;i&=~(1<<r),a+=1;var s=32-ot(t)+r;if(30<s){var d=r-r%5;s=(i&(1<<d)-1).toString(32),i>>=d,r-=d,ta=1<<32-ot(t)+r|a<<r|i,aa=s+e}else ta=1<<s|a<<r|i,aa=e}function ks(e){e.return!==null&&(ca(e,1),Bc(e,1,0))}function _s(e){for(;e===Zr;)Zr=Zi[--Fi],Zi[Fi]=null,_n=Zi[--Fi],Zi[Fi]=null;for(;e===_a;)_a=Vt[--jt],Vt[jt]=null,aa=Vt[--jt],Vt[jt]=null,ta=Vt[--jt],Vt[jt]=null}function Lc(e,t){Vt[jt++]=ta,Vt[jt++]=aa,Vt[jt++]=_a,ta=t.id,aa=t.overflow,_a=e}var ht=null,qe=null,we=!1,Ua=null,Zt=!1,Us=Error(l(519));function Da(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Un(qt(t,e)),Us}function Nc(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[Ye]=e,t[$e]=i,a){case"dialog":me("cancel",t),me("close",t);break;case"iframe":case"object":case"embed":me("load",t);break;case"video":case"audio":for(a=0;a<er.length;a++)me(er[a],t);break;case"source":me("error",t);break;case"img":case"image":case"link":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"input":me("invalid",t),Xu(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":me("invalid",t);break;case"textarea":me("invalid",t),Ju(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||td(t.textContent,a)?(i.popover!=null&&(me("beforetoggle",t),me("toggle",t)),i.onScroll!=null&&me("scroll",t),i.onScrollEnd!=null&&me("scrollend",t),i.onClick!=null&&(t.onclick=sa),t=!0):t=!1,t||Da(e,!0)}function Gc(e){for(ht=e.return;ht;)switch(ht.tag){case 5:case 31:case 13:Zt=!1;return;case 27:case 3:Zt=!0;return;default:ht=ht.return}}function Yi(e){if(e!==ht)return!1;if(!we)return Gc(e),we=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ko(e.type,e.memoizedProps)),a=!a),a&&qe&&Da(e),Gc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));qe=cd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));qe=cd(e)}else t===27?(t=qe,Ia(e.type)?(e=au,au=null,qe=e):qe=t):qe=ht?Yt(e.stateNode.nextSibling):null;return!0}function fi(){qe=ht=null,we=!1}function Ds(){var e=Ua;return e!==null&&(At===null?At=e:At.push.apply(At,e),Ua=null),e}function Un(e){Ua===null?Ua=[e]:Ua.push(e)}var Os=E(null),di=null,fa=null;function Oa(e,t,a){Q(Os,t._currentValue),t._currentValue=a}function da(e){e._currentValue=Os.current,G(Os)}function Bs(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function Ls(e,t,a,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var s=r.dependencies;if(s!==null){var d=r.child;s=s.firstContext;e:for(;s!==null;){var m=s;s=r;for(var S=0;S<t.length;S++)if(m.context===t[S]){s.lanes|=a,m=s.alternate,m!==null&&(m.lanes|=a),Bs(s.return,a,e),i||(d=null);break e}s=m.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(l(341));d.lanes|=a,s=d.alternate,s!==null&&(s.lanes|=a),Bs(d,a,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function Ii(e,t,a,i){e=null;for(var r=t,s=!1;r!==null;){if(!s){if((r.flags&524288)!==0)s=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(l(387));if(d=d.memoizedProps,d!==null){var m=r.type;Ct(r.pendingProps.value,d.value)||(e!==null?e.push(m):e=[m])}}else if(r===Me.current){if(d=r.alternate,d===null)throw Error(l(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(rr):e=[rr])}r=r.return}e!==null&&Ls(t,e,a,i),t.flags|=262144}function Fr(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function hi(e){di=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return Hc(di,e)}function Yr(e,t){return di===null&&hi(e),Hc(e,t)}function Hc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(l(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return a}var k2=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},_2=u.unstable_scheduleCallback,U2=u.unstable_NormalPriority,et={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ns(){return{controller:new k2,data:new Map,refCount:0}}function Dn(e){e.refCount--,e.refCount===0&&_2(U2,function(){e.controller.abort()})}var On=null,Gs=0,Qi=0,Wi=null;function D2(e,t){if(On===null){var a=On=[];Gs=0,Qi=Vo(),Wi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Gs++,t.then(Pc,Pc),t}function Pc(){if(--Gs===0&&On!==null){Wi!==null&&(Wi.status="fulfilled");var e=On;On=null,Qi=0,Wi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function O2(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<a.length;r++)(0,a[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),i}var qc=B.S;B.S=function(e,t){Af=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&D2(e,t),qc!==null&&qc(e,t)};var pi=E(null);function Hs(){var e=pi.current;return e!==null?e:He.pooledCache}function Ir(e,t){t===null?Q(pi,pi.current):Q(pi,t.pool)}function Vc(){var e=Hs();return e===null?null:{parent:et._currentValue,pool:e}}var Xi=Error(l(460)),Ps=Error(l(474)),Qr=Error(l(542)),Wr={then:function(){}};function jc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(sa,sa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yc(e),e;default:if(typeof t.status=="string")t.then(sa,sa);else{if(e=He,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Yc(e),e}throw gi=t,Xi}}function mi(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gi=a,Xi):a}}var gi=null;function Fc(){if(gi===null)throw Error(l(459));var e=gi;return gi=null,e}function Yc(e){if(e===Xi||e===Qr)throw Error(l(483))}var Ki=null,Bn=0;function Xr(e){var t=Bn;return Bn+=1,Ki===null&&(Ki=[]),Zc(Ki,e,t)}function Ln(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Kr(e,t){throw t.$$typeof===w?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ic(e){function t(z,M){if(e){var _=z.deletions;_===null?(z.deletions=[M],z.flags|=16):_.push(M)}}function a(z,M){if(!e)return null;for(;M!==null;)t(z,M),M=M.sibling;return null}function i(z){for(var M=new Map;z!==null;)z.key!==null?M.set(z.key,z):M.set(z.index,z),z=z.sibling;return M}function r(z,M){return z=ua(z,M),z.index=0,z.sibling=null,z}function s(z,M,_){return z.index=_,e?(_=z.alternate,_!==null?(_=_.index,_<M?(z.flags|=67108866,M):_):(z.flags|=67108866,M)):(z.flags|=1048576,M)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function m(z,M,_,q){return M===null||M.tag!==6?(M=zs(_,z.mode,q),M.return=z,M):(M=r(M,_),M.return=z,M)}function S(z,M,_,q){var te=_.type;return te===O?H(z,M,_.props.children,q,_.key):M!==null&&(M.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===K&&mi(te)===M.type)?(M=r(M,_.props),Ln(M,_),M.return=z,M):(M=jr(_.type,_.key,_.props,null,z.mode,q),Ln(M,_),M.return=z,M)}function U(z,M,_,q){return M===null||M.tag!==4||M.stateNode.containerInfo!==_.containerInfo||M.stateNode.implementation!==_.implementation?(M=Cs(_,z.mode,q),M.return=z,M):(M=r(M,_.children||[]),M.return=z,M)}function H(z,M,_,q,te){return M===null||M.tag!==7?(M=ci(_,z.mode,q,te),M.return=z,M):(M=r(M,_),M.return=z,M)}function V(z,M,_){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=zs(""+M,z.mode,_),M.return=z,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case T:return _=jr(M.type,M.key,M.props,null,z.mode,_),Ln(_,M),_.return=z,_;case k:return M=Cs(M,z.mode,_),M.return=z,M;case K:return M=mi(M),V(z,M,_)}if(ze(M)||Se(M))return M=ci(M,z.mode,_,null),M.return=z,M;if(typeof M.then=="function")return V(z,Xr(M),_);if(M.$$typeof===Z)return V(z,Yr(z,M),_);Kr(z,M)}return null}function D(z,M,_,q){var te=M!==null?M.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return te!==null?null:m(z,M,""+_,q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case T:return _.key===te?S(z,M,_,q):null;case k:return _.key===te?U(z,M,_,q):null;case K:return _=mi(_),D(z,M,_,q)}if(ze(_)||Se(_))return te!==null?null:H(z,M,_,q,null);if(typeof _.then=="function")return D(z,M,Xr(_),q);if(_.$$typeof===Z)return D(z,M,Yr(z,_),q);Kr(z,_)}return null}function L(z,M,_,q,te){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return z=z.get(_)||null,m(M,z,""+q,te);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case T:return z=z.get(q.key===null?_:q.key)||null,S(M,z,q,te);case k:return z=z.get(q.key===null?_:q.key)||null,U(M,z,q,te);case K:return q=mi(q),L(z,M,_,q,te)}if(ze(q)||Se(q))return z=z.get(_)||null,H(M,z,q,te,null);if(typeof q.then=="function")return L(z,M,_,Xr(q),te);if(q.$$typeof===Z)return L(z,M,_,Yr(M,q),te);Kr(M,q)}return null}function J(z,M,_,q){for(var te=null,Te=null,ee=M,fe=M=0,be=null;ee!==null&&fe<_.length;fe++){ee.index>fe?(be=ee,ee=null):be=ee.sibling;var Re=D(z,ee,_[fe],q);if(Re===null){ee===null&&(ee=be);break}e&&ee&&Re.alternate===null&&t(z,ee),M=s(Re,M,fe),Te===null?te=Re:Te.sibling=Re,Te=Re,ee=be}if(fe===_.length)return a(z,ee),we&&ca(z,fe),te;if(ee===null){for(;fe<_.length;fe++)ee=V(z,_[fe],q),ee!==null&&(M=s(ee,M,fe),Te===null?te=ee:Te.sibling=ee,Te=ee);return we&&ca(z,fe),te}for(ee=i(ee);fe<_.length;fe++)be=L(ee,z,fe,_[fe],q),be!==null&&(e&&be.alternate!==null&&ee.delete(be.key===null?fe:be.key),M=s(be,M,fe),Te===null?te=be:Te.sibling=be,Te=be);return e&&ee.forEach(function(Ja){return t(z,Ja)}),we&&ca(z,fe),te}function ie(z,M,_,q){if(_==null)throw Error(l(151));for(var te=null,Te=null,ee=M,fe=M=0,be=null,Re=_.next();ee!==null&&!Re.done;fe++,Re=_.next()){ee.index>fe?(be=ee,ee=null):be=ee.sibling;var Ja=D(z,ee,Re.value,q);if(Ja===null){ee===null&&(ee=be);break}e&&ee&&Ja.alternate===null&&t(z,ee),M=s(Ja,M,fe),Te===null?te=Ja:Te.sibling=Ja,Te=Ja,ee=be}if(Re.done)return a(z,ee),we&&ca(z,fe),te;if(ee===null){for(;!Re.done;fe++,Re=_.next())Re=V(z,Re.value,q),Re!==null&&(M=s(Re,M,fe),Te===null?te=Re:Te.sibling=Re,Te=Re);return we&&ca(z,fe),te}for(ee=i(ee);!Re.done;fe++,Re=_.next())Re=L(ee,z,fe,Re.value,q),Re!==null&&(e&&Re.alternate!==null&&ee.delete(Re.key===null?fe:Re.key),M=s(Re,M,fe),Te===null?te=Re:Te.sibling=Re,Te=Re);return e&&ee.forEach(function(Fp){return t(z,Fp)}),we&&ca(z,fe),te}function Ne(z,M,_,q){if(typeof _=="object"&&_!==null&&_.type===O&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case T:e:{for(var te=_.key;M!==null;){if(M.key===te){if(te=_.type,te===O){if(M.tag===7){a(z,M.sibling),q=r(M,_.props.children),q.return=z,z=q;break e}}else if(M.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===K&&mi(te)===M.type){a(z,M.sibling),q=r(M,_.props),Ln(q,_),q.return=z,z=q;break e}a(z,M);break}else t(z,M);M=M.sibling}_.type===O?(q=ci(_.props.children,z.mode,q,_.key),q.return=z,z=q):(q=jr(_.type,_.key,_.props,null,z.mode,q),Ln(q,_),q.return=z,z=q)}return d(z);case k:e:{for(te=_.key;M!==null;){if(M.key===te)if(M.tag===4&&M.stateNode.containerInfo===_.containerInfo&&M.stateNode.implementation===_.implementation){a(z,M.sibling),q=r(M,_.children||[]),q.return=z,z=q;break e}else{a(z,M);break}else t(z,M);M=M.sibling}q=Cs(_,z.mode,q),q.return=z,z=q}return d(z);case K:return _=mi(_),Ne(z,M,_,q)}if(ze(_))return J(z,M,_,q);if(Se(_)){if(te=Se(_),typeof te!="function")throw Error(l(150));return _=te.call(_),ie(z,M,_,q)}if(typeof _.then=="function")return Ne(z,M,Xr(_),q);if(_.$$typeof===Z)return Ne(z,M,Yr(z,_),q);Kr(z,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,M!==null&&M.tag===6?(a(z,M.sibling),q=r(M,_),q.return=z,z=q):(a(z,M),q=zs(_,z.mode,q),q.return=z,z=q),d(z)):a(z,M)}return function(z,M,_,q){try{Bn=0;var te=Ne(z,M,_,q);return Ki=null,te}catch(ee){if(ee===Xi||ee===Qr)throw ee;var Te=kt(29,ee,null,z.mode);return Te.lanes=q,Te.return=z,Te}}}var vi=Ic(!0),Qc=Ic(!1),Ba=!1;function qs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vs(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function La(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Na(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Ce&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=Vr(e),_c(e,null,a),t}return qr(e,i,t,a),Vr(e)}function Nn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ni(e,a)}}function js(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var r=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var d={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?r=s=d:s=s.next=d,a=a.next}while(a!==null);s===null?r=s=t:s=s.next=t}else r=s=t;a={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Zs=!1;function Gn(){if(Zs){var e=Wi;if(e!==null)throw e}}function Hn(e,t,a,i){Zs=!1;var r=e.updateQueue;Ba=!1;var s=r.firstBaseUpdate,d=r.lastBaseUpdate,m=r.shared.pending;if(m!==null){r.shared.pending=null;var S=m,U=S.next;S.next=null,d===null?s=U:d.next=U,d=S;var H=e.alternate;H!==null&&(H=H.updateQueue,m=H.lastBaseUpdate,m!==d&&(m===null?H.firstBaseUpdate=U:m.next=U,H.lastBaseUpdate=S))}if(s!==null){var V=r.baseState;d=0,H=U=S=null,m=s;do{var D=m.lane&-536870913,L=D!==m.lane;if(L?(xe&D)===D:(i&D)===D){D!==0&&D===Qi&&(Zs=!0),H!==null&&(H=H.next={lane:0,tag:m.tag,payload:m.payload,callback:null,next:null});e:{var J=e,ie=m;D=t;var Ne=a;switch(ie.tag){case 1:if(J=ie.payload,typeof J=="function"){V=J.call(Ne,V,D);break e}V=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ie.payload,D=typeof J=="function"?J.call(Ne,V,D):J,D==null)break e;V=x({},V,D);break e;case 2:Ba=!0}}D=m.callback,D!==null&&(e.flags|=64,L&&(e.flags|=8192),L=r.callbacks,L===null?r.callbacks=[D]:L.push(D))}else L={lane:D,tag:m.tag,payload:m.payload,callback:m.callback,next:null},H===null?(U=H=L,S=V):H=H.next=L,d|=D;if(m=m.next,m===null){if(m=r.shared.pending,m===null)break;L=m,m=L.next,L.next=null,r.lastBaseUpdate=L,r.shared.pending=null}}while(!0);H===null&&(S=V),r.baseState=S,r.firstBaseUpdate=U,r.lastBaseUpdate=H,s===null&&(r.shared.lanes=0),Va|=d,e.lanes=d,e.memoizedState=V}}function Wc(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function Xc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wc(a[e],t)}var Ji=E(null),Jr=E(0);function Kc(e,t){e=Sa,Q(Jr,e),Q(Ji,t),Sa=e|t.baseLanes}function Fs(){Q(Jr,Sa),Q(Ji,Ji.current)}function Ys(){Sa=Jr.current,G(Ji),G(Jr)}var _t=E(null),Ft=null;function Ga(e){var t=e.alternate;Q(Xe,Xe.current&1),Q(_t,e),Ft===null&&(t===null||Ji.current!==null||t.memoizedState!==null)&&(Ft=e)}function Is(e){Q(Xe,Xe.current),Q(_t,e),Ft===null&&(Ft=e)}function Jc(e){e.tag===22?(Q(Xe,Xe.current),Q(_t,e),Ft===null&&(Ft=e)):Ha()}function Ha(){Q(Xe,Xe.current),Q(_t,_t.current)}function Ut(e){G(_t),Ft===e&&(Ft=null),G(Xe)}var Xe=E(0);function $r(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||eu(a)||tu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ha=0,ue=null,Be=null,tt=null,el=!1,$i=!1,yi=!1,tl=0,Pn=0,en=null,B2=0;function Qe(){throw Error(l(321))}function Qs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ct(e[a],t[a]))return!1;return!0}function Ws(e,t,a,i,r,s){return ha=s,ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?B0:co,yi=!1,s=a(i,r),yi=!1,$i&&(s=e0(t,a,i,r)),$c(e),s}function $c(e){B.H=jn;var t=Be!==null&&Be.next!==null;if(ha=0,tt=Be=ue=null,el=!1,Pn=0,en=null,t)throw Error(l(300));e===null||at||(e=e.dependencies,e!==null&&Fr(e)&&(at=!0))}function e0(e,t,a,i){ue=e;var r=0;do{if($i&&(en=null),Pn=0,$i=!1,25<=r)throw Error(l(301));if(r+=1,tt=Be=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}B.H=L0,s=t(a,i)}while($i);return s}function L2(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?qn(t):t,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ue.flags|=1024),t}function Xs(){var e=tl!==0;return tl=0,e}function Ks(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Js(e){if(el){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}el=!1}ha=0,tt=Be=ue=null,$i=!1,Pn=tl=0,en=null}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?ue.memoizedState=tt=e:tt=tt.next=e,tt}function Ke(){if(Be===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=tt===null?ue.memoizedState:tt.next;if(t!==null)tt=t,Be=e;else{if(e===null)throw ue.alternate===null?Error(l(467)):Error(l(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},tt===null?ue.memoizedState=tt=e:tt=tt.next=e}return tt}function al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qn(e){var t=Pn;return Pn+=1,en===null&&(en=[]),e=Zc(en,e,t),t=ue,(tt===null?t.memoizedState:tt.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?B0:co),e}function il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qn(e);if(e.$$typeof===Z)return pt(e)}throw Error(l(438,String(e)))}function $s(e){var t=null,a=ue.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=ue.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=al(),ue.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=ae;return t.index++,a}function pa(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=Ke();return eo(t,Be,e)}function eo(e,t,a){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=a;var r=e.baseQueue,s=i.pending;if(s!==null){if(r!==null){var d=r.next;r.next=s.next,s.next=d}t.baseQueue=r=s,i.pending=null}if(s=e.baseState,r===null)e.memoizedState=s;else{t=r.next;var m=d=null,S=null,U=t,H=!1;do{var V=U.lane&-536870913;if(V!==U.lane?(xe&V)===V:(ha&V)===V){var D=U.revertLane;if(D===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),V===Qi&&(H=!0);else if((ha&D)===D){U=U.next,D===Qi&&(H=!0);continue}else V={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},S===null?(m=S=V,d=s):S=S.next=V,ue.lanes|=D,Va|=D;V=U.action,yi&&a(s,V),s=U.hasEagerState?U.eagerState:a(s,V)}else D={lane:V,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},S===null?(m=S=D,d=s):S=S.next=D,ue.lanes|=V,Va|=V;U=U.next}while(U!==null&&U!==t);if(S===null?d=s:S.next=m,!Ct(s,e.memoizedState)&&(at=!0,H&&(a=Wi,a!==null)))throw a;e.memoizedState=s,e.baseState=d,e.baseQueue=S,i.lastRenderedState=s}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function to(e){var t=Ke(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var i=a.dispatch,r=a.pending,s=t.memoizedState;if(r!==null){a.pending=null;var d=r=r.next;do s=e(s,d.action),d=d.next;while(d!==r);Ct(s,t.memoizedState)||(at=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,i]}function t0(e,t,a){var i=ue,r=Ke(),s=we;if(s){if(a===void 0)throw Error(l(407));a=a()}else a=t();var d=!Ct((Be||r).memoizedState,a);if(d&&(r.memoizedState=a,at=!0),r=r.queue,no(n0.bind(null,i,r,e),[e]),r.getSnapshot!==t||d||tt!==null&&tt.memoizedState.tag&1){if(i.flags|=2048,tn(9,{destroy:void 0},i0.bind(null,i,r,a,t),null),He===null)throw Error(l(349));s||(ha&127)!==0||a0(i,t,a)}return a}function a0(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ue.updateQueue,t===null?(t=al(),ue.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function i0(e,t,a,i){t.value=a,t.getSnapshot=i,r0(t)&&l0(e)}function n0(e,t,a){return a(function(){r0(t)&&l0(e)})}function r0(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ct(e,a)}catch{return!0}}function l0(e){var t=ui(e,2);t!==null&&Tt(t,e,2)}function ao(e){var t=yt();if(typeof e=="function"){var a=e;if(e=a(),yi){xt(!0);try{a()}finally{xt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:e},t}function s0(e,t,a,i){return e.baseState=a,eo(e,Be,typeof i=="function"?i:pa)}function N2(e,t,a,i,r){if(sl(e))throw Error(l(485));if(e=t.action,e!==null){var s={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){s.listeners.push(d)}};B.T!==null?a(!0):s.isTransition=!1,i(s),a=t.pending,a===null?(s.next=t.pending=s,o0(t,s)):(s.next=a.next,t.pending=a.next=s)}}function o0(e,t){var a=t.action,i=t.payload,r=e.state;if(t.isTransition){var s=B.T,d={};B.T=d;try{var m=a(r,i),S=B.S;S!==null&&S(d,m),u0(e,t,m)}catch(U){io(e,t,U)}finally{s!==null&&d.types!==null&&(s.types=d.types),B.T=s}}else try{s=a(r,i),u0(e,t,s)}catch(U){io(e,t,U)}}function u0(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){c0(e,t,i)},function(i){return io(e,t,i)}):c0(e,t,a)}function c0(e,t,a){t.status="fulfilled",t.value=a,f0(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,o0(e,a)))}function io(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,f0(t),t=t.next;while(t!==i)}e.action=null}function f0(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function d0(e,t){return t}function h0(e,t){if(we){var a=He.formState;if(a!==null){e:{var i=ue;if(we){if(qe){t:{for(var r=qe,s=Zt;r.nodeType!==8;){if(!s){r=null;break t}if(r=Yt(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){qe=Yt(r.nextSibling),i=r.data==="F!";break e}}Da(i)}i=!1}i&&(t=a[0])}}return a=yt(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:d0,lastRenderedState:t},a.queue=i,a=U0.bind(null,ue,i),i.dispatch=a,i=ao(!1),s=uo.bind(null,ue,!1,i.queue),i=yt(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,a=N2.bind(null,ue,r,s,a),r.dispatch=a,i.memoizedState=e,[t,a,!1]}function p0(e){var t=Ke();return m0(t,Be,e)}function m0(e,t,a){if(t=eo(e,t,d0)[0],e=nl(pa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=qn(t)}catch(d){throw d===Xi?Qr:d}else i=t;t=Ke();var r=t.queue,s=r.dispatch;return a!==t.memoizedState&&(ue.flags|=2048,tn(9,{destroy:void 0},G2.bind(null,r,a),null)),[i,s,e]}function G2(e,t){e.action=t}function g0(e){var t=Ke(),a=Be;if(a!==null)return m0(t,a,e);Ke(),t=t.memoizedState,a=Ke();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function tn(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=ue.updateQueue,t===null&&(t=al(),ue.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function v0(){return Ke().memoizedState}function rl(e,t,a,i){var r=yt();ue.flags|=e,r.memoizedState=tn(1|t,{destroy:void 0},a,i===void 0?null:i)}function ll(e,t,a,i){var r=Ke();i=i===void 0?null:i;var s=r.memoizedState.inst;Be!==null&&i!==null&&Qs(i,Be.memoizedState.deps)?r.memoizedState=tn(t,s,a,i):(ue.flags|=e,r.memoizedState=tn(1|t,s,a,i))}function y0(e,t){rl(8390656,8,e,t)}function no(e,t){ll(2048,8,e,t)}function H2(e){ue.flags|=4;var t=ue.updateQueue;if(t===null)t=al(),ue.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function x0(e){var t=Ke().memoizedState;return H2({ref:t,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function b0(e,t){return ll(4,2,e,t)}function S0(e,t){return ll(4,4,e,t)}function w0(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function E0(e,t,a){a=a!=null?a.concat([e]):null,ll(4,4,w0.bind(null,t,e),a)}function ro(){}function M0(e,t){var a=Ke();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Qs(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function A0(e,t){var a=Ke();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Qs(t,i[1]))return i[0];if(i=e(),yi){xt(!0);try{e()}finally{xt(!1)}}return a.memoizedState=[i,t],i}function lo(e,t,a){return a===void 0||(ha&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Rf(),ue.lanes|=e,Va|=e,a)}function T0(e,t,a,i){return Ct(a,t)?a:Ji.current!==null?(e=lo(e,a,i),Ct(e,t)||(at=!0),e):(ha&42)===0||(ha&1073741824)!==0&&(xe&261930)===0?(at=!0,e.memoizedState=a):(e=Rf(),ue.lanes|=e,Va|=e,t)}function R0(e,t,a,i,r){var s=F.p;F.p=s!==0&&8>s?s:8;var d=B.T,m={};B.T=m,uo(e,!1,t,a);try{var S=r(),U=B.S;if(U!==null&&U(m,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var H=O2(S,i);Vn(e,t,H,Bt(e))}else Vn(e,t,i,Bt(e))}catch(V){Vn(e,t,{then:function(){},status:"rejected",reason:V},Bt())}finally{F.p=s,d!==null&&m.types!==null&&(d.types=m.types),B.T=d}}function P2(){}function so(e,t,a,i){if(e.tag!==5)throw Error(l(476));var r=z0(e).queue;R0(e,r,t,$,a===null?P2:function(){return C0(e),a(i)})}function z0(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:$},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pa,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function C0(e){var t=z0(e);t.next===null&&(t=e.alternate.memoizedState),Vn(e,t.next.queue,{},Bt())}function oo(){return pt(rr)}function k0(){return Ke().memoizedState}function _0(){return Ke().memoizedState}function q2(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Bt();e=La(a);var i=Na(t,e,a);i!==null&&(Tt(i,t,a),Nn(i,t,a)),t={cache:Ns()},e.payload=t;return}t=t.return}}function V2(e,t,a){var i=Bt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sl(e)?D0(t,a):(a=Ts(e,t,a,i),a!==null&&(Tt(a,e,i),O0(a,t,i)))}function U0(e,t,a){var i=Bt();Vn(e,t,a,i)}function Vn(e,t,a,i){var r={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(sl(e))D0(t,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,m=s(d,a);if(r.hasEagerState=!0,r.eagerState=m,Ct(m,d))return qr(e,t,r,0),He===null&&Pr(),!1}catch{}if(a=Ts(e,t,r,i),a!==null)return Tt(a,e,i),O0(a,t,i),!0}return!1}function uo(e,t,a,i){if(i={lane:2,revertLane:Vo(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},sl(e)){if(t)throw Error(l(479))}else t=Ts(e,a,i,2),t!==null&&Tt(t,e,2)}function sl(e){var t=e.alternate;return e===ue||t!==null&&t===ue}function D0(e,t){$i=el=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function O0(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,ni(e,a)}}var jn={readContext:pt,use:il,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};jn.useEffectEvent=Qe;var B0={readContext:pt,use:il,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:y0,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,rl(4194308,4,w0.bind(null,t,e),a)},useLayoutEffect:function(e,t){return rl(4194308,4,e,t)},useInsertionEffect:function(e,t){rl(4,2,e,t)},useMemo:function(e,t){var a=yt();t=t===void 0?null:t;var i=e();if(yi){xt(!0);try{e()}finally{xt(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=yt();if(a!==void 0){var r=a(t);if(yi){xt(!0);try{a(t)}finally{xt(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=V2.bind(null,ue,e),[i.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:function(e){e=ao(e);var t=e.queue,a=U0.bind(null,ue,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:ro,useDeferredValue:function(e,t){var a=yt();return lo(a,e,t)},useTransition:function(){var e=ao(!1);return e=R0.bind(null,ue,e.queue,!0,!1),yt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=ue,r=yt();if(we){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),He===null)throw Error(l(349));(xe&127)!==0||a0(i,t,a)}r.memoizedState=a;var s={value:a,getSnapshot:t};return r.queue=s,y0(n0.bind(null,i,s,e),[e]),i.flags|=2048,tn(9,{destroy:void 0},i0.bind(null,i,s,a,t),null),a},useId:function(){var e=yt(),t=He.identifierPrefix;if(we){var a=aa,i=ta;a=(i&~(1<<32-ot(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=tl++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=B2++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:oo,useFormState:h0,useActionState:h0,useOptimistic:function(e){var t=yt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=uo.bind(null,ue,!0,a),a.dispatch=t,[e,t]},useMemoCache:$s,useCacheRefresh:function(){return yt().memoizedState=q2.bind(null,ue)},useEffectEvent:function(e){var t=yt(),a={impl:e};return t.memoizedState=a,function(){if((Ce&2)!==0)throw Error(l(440));return a.impl.apply(void 0,arguments)}}},co={readContext:pt,use:il,useCallback:M0,useContext:pt,useEffect:no,useImperativeHandle:E0,useInsertionEffect:b0,useLayoutEffect:S0,useMemo:A0,useReducer:nl,useRef:v0,useState:function(){return nl(pa)},useDebugValue:ro,useDeferredValue:function(e,t){var a=Ke();return T0(a,Be.memoizedState,e,t)},useTransition:function(){var e=nl(pa)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:qn(e),t]},useSyncExternalStore:t0,useId:k0,useHostTransitionStatus:oo,useFormState:p0,useActionState:p0,useOptimistic:function(e,t){var a=Ke();return s0(a,Be,e,t)},useMemoCache:$s,useCacheRefresh:_0};co.useEffectEvent=x0;var L0={readContext:pt,use:il,useCallback:M0,useContext:pt,useEffect:no,useImperativeHandle:E0,useInsertionEffect:b0,useLayoutEffect:S0,useMemo:A0,useReducer:to,useRef:v0,useState:function(){return to(pa)},useDebugValue:ro,useDeferredValue:function(e,t){var a=Ke();return Be===null?lo(a,e,t):T0(a,Be.memoizedState,e,t)},useTransition:function(){var e=to(pa)[0],t=Ke().memoizedState;return[typeof e=="boolean"?e:qn(e),t]},useSyncExternalStore:t0,useId:k0,useHostTransitionStatus:oo,useFormState:g0,useActionState:g0,useOptimistic:function(e,t){var a=Ke();return Be!==null?s0(a,Be,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$s,useCacheRefresh:_0};L0.useEffectEvent=x0;function fo(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:x({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ho={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=Bt(),r=La(i);r.payload=t,a!=null&&(r.callback=a),t=Na(e,r,i),t!==null&&(Tt(t,e,i),Nn(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=Bt(),r=La(i);r.tag=1,r.payload=t,a!=null&&(r.callback=a),t=Na(e,r,i),t!==null&&(Tt(t,e,i),Nn(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Bt(),i=La(a);i.tag=2,t!=null&&(i.callback=t),t=Na(e,i,a),t!==null&&(Tt(t,e,a),Nn(t,e,a))}};function N0(e,t,a,i,r,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,d):t.prototype&&t.prototype.isPureReactComponent?!Cn(a,i)||!Cn(r,s):!0}function G0(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&ho.enqueueReplaceState(t,t.state,null)}function xi(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=x({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function H0(e){Hr(e)}function P0(e){console.error(e)}function q0(e){Hr(e)}function ol(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function V0(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function po(e,t,a){return a=La(a),a.tag=3,a.payload={element:null},a.callback=function(){ol(e,t)},a}function j0(e){return e=La(e),e.tag=3,e}function Z0(e,t,a,i){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;e.payload=function(){return r(s)},e.callback=function(){V0(t,a,i)}}var d=a.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){V0(t,a,i),typeof r!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var m=i.stack;this.componentDidCatch(i.value,{componentStack:m!==null?m:""})})}function j2(e,t,a,i,r){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&Ii(t,a,r,!0),a=_t.current,a!==null){switch(a.tag){case 31:case 13:return Ft===null?bl():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=r,i===Wr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Ho(e,i,r)),!1;case 22:return a.flags|=65536,i===Wr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Ho(e,i,r)),!1}throw Error(l(435,a.tag))}return Ho(e,i,r),bl(),!1}if(we)return t=_t.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==Us&&(e=Error(l(422),{cause:i}),Un(qt(e,a)))):(i!==Us&&(t=Error(l(423),{cause:i}),Un(qt(t,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=qt(i,a),r=po(e.stateNode,i,r),js(e,r),We!==4&&(We=2)),!1;var s=Error(l(520),{cause:i});if(s=qt(s,a),Kn===null?Kn=[s]:Kn.push(s),We!==4&&(We=2),t===null)return!0;i=qt(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=po(a.stateNode,i,e),js(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(ja===null||!ja.has(s))))return a.flags|=65536,r&=-r,a.lanes|=r,r=j0(r),Z0(r,e,a,i),js(a,r),!1}a=a.return}while(a!==null);return!1}var mo=Error(l(461)),at=!1;function mt(e,t,a,i){t.child=e===null?Qc(t,null,a,i):vi(t,e.child,a,i)}function F0(e,t,a,i,r){a=a.render;var s=t.ref;if("ref"in i){var d={};for(var m in i)m!=="ref"&&(d[m]=i[m])}else d=i;return hi(t),i=Ws(e,t,a,d,s,r),m=Xs(),e!==null&&!at?(Ks(e,t,r),ma(e,t,r)):(we&&m&&ks(t),t.flags|=1,mt(e,t,i,r),t.child)}function Y0(e,t,a,i,r){if(e===null){var s=a.type;return typeof s=="function"&&!Rs(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,I0(e,t,s,i,r)):(e=jr(a.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Eo(e,r)){var d=s.memoizedProps;if(a=a.compare,a=a!==null?a:Cn,a(d,i)&&e.ref===t.ref)return ma(e,t,r)}return t.flags|=1,e=ua(s,i),e.ref=t.ref,e.return=t,t.child=e}function I0(e,t,a,i,r){if(e!==null){var s=e.memoizedProps;if(Cn(s,i)&&e.ref===t.ref)if(at=!1,t.pendingProps=i=s,Eo(e,r))(e.flags&131072)!==0&&(at=!0);else return t.lanes=e.lanes,ma(e,t,r)}return go(e,t,a,i,r)}function Q0(e,t,a,i){var r=i.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,t.child=null;return W0(e,t,s,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ir(t,s!==null?s.cachePool:null),s!==null?Kc(t,s):Fs(),Jc(t);else return i=t.lanes=536870912,W0(e,t,s!==null?s.baseLanes|a:a,a,i)}else s!==null?(Ir(t,s.cachePool),Kc(t,s),Ha(),t.memoizedState=null):(e!==null&&Ir(t,null),Fs(),Ha());return mt(e,t,r,a),t.child}function Zn(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function W0(e,t,a,i,r){var s=Hs();return s=s===null?null:{parent:et._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&Ir(t,null),Fs(),Jc(t),e!==null&&Ii(e,t,i,!0),t.childLanes=r,null}function ul(e,t){return t=fl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function X0(e,t,a){return vi(t,e.child,null,a),e=ul(t,t.pendingProps),e.flags|=2,Ut(t),t.memoizedState=null,e}function Z2(e,t,a){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(we){if(i.mode==="hidden")return e=ul(t,i),t.lanes=536870912,Zn(null,e);if(Is(t),(e=qe)?(e=ud(e,Zt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_a!==null?{id:ta,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=Dc(e),a.return=t,t.child=a,ht=t,qe=null)):e=null,e===null)throw Da(t);return t.lanes=536870912,null}return ul(t,i)}var s=e.memoizedState;if(s!==null){var d=s.dehydrated;if(Is(t),r)if(t.flags&256)t.flags&=-257,t=X0(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(at||Ii(e,t,a,!1),r=(a&e.childLanes)!==0,at||r){if(i=He,i!==null&&(d=he(i,a),d!==0&&d!==s.retryLane))throw s.retryLane=d,ui(e,d),Tt(i,e,d),mo;bl(),t=X0(e,t,a)}else e=s.treeContext,qe=Yt(d.nextSibling),ht=t,we=!0,Ua=null,Zt=!1,e!==null&&Lc(t,e),t=ul(t,i),t.flags|=4096;return t}return e=ua(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function cl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function go(e,t,a,i,r){return hi(t),a=Ws(e,t,a,i,void 0,r),i=Xs(),e!==null&&!at?(Ks(e,t,r),ma(e,t,r)):(we&&i&&ks(t),t.flags|=1,mt(e,t,a,r),t.child)}function K0(e,t,a,i,r,s){return hi(t),t.updateQueue=null,a=e0(t,i,a,r),$c(e),i=Xs(),e!==null&&!at?(Ks(e,t,s),ma(e,t,s)):(we&&i&&ks(t),t.flags|=1,mt(e,t,a,s),t.child)}function J0(e,t,a,i,r){if(hi(t),t.stateNode===null){var s=ji,d=a.contextType;typeof d=="object"&&d!==null&&(s=pt(d)),s=new a(i,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ho,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=i,s.state=t.memoizedState,s.refs={},qs(t),d=a.contextType,s.context=typeof d=="object"&&d!==null?pt(d):ji,s.state=t.memoizedState,d=a.getDerivedStateFromProps,typeof d=="function"&&(fo(t,a,d,i),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(d=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),d!==s.state&&ho.enqueueReplaceState(s,s.state,null),Hn(t,i,s,r),Gn(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){s=t.stateNode;var m=t.memoizedProps,S=xi(a,m);s.props=S;var U=s.context,H=a.contextType;d=ji,typeof H=="object"&&H!==null&&(d=pt(H));var V=a.getDerivedStateFromProps;H=typeof V=="function"||typeof s.getSnapshotBeforeUpdate=="function",m=t.pendingProps!==m,H||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(m||U!==d)&&G0(t,s,i,d),Ba=!1;var D=t.memoizedState;s.state=D,Hn(t,i,s,r),Gn(),U=t.memoizedState,m||D!==U||Ba?(typeof V=="function"&&(fo(t,a,V,i),U=t.memoizedState),(S=Ba||N0(t,a,S,i,D,U,d))?(H||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=U),s.props=i,s.state=U,s.context=d,i=S):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{s=t.stateNode,Vs(e,t),d=t.memoizedProps,H=xi(a,d),s.props=H,V=t.pendingProps,D=s.context,U=a.contextType,S=ji,typeof U=="object"&&U!==null&&(S=pt(U)),m=a.getDerivedStateFromProps,(U=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(d!==V||D!==S)&&G0(t,s,i,S),Ba=!1,D=t.memoizedState,s.state=D,Hn(t,i,s,r),Gn();var L=t.memoizedState;d!==V||D!==L||Ba||e!==null&&e.dependencies!==null&&Fr(e.dependencies)?(typeof m=="function"&&(fo(t,a,m,i),L=t.memoizedState),(H=Ba||N0(t,a,H,i,D,L,S)||e!==null&&e.dependencies!==null&&Fr(e.dependencies))?(U||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,L,S),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,L,S)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=L),s.props=i,s.state=L,s.context=S,i=H):(typeof s.componentDidUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&D===e.memoizedState||(t.flags|=1024),i=!1)}return s=i,cl(e,t),i=(t.flags&128)!==0,s||i?(s=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&i?(t.child=vi(t,e.child,null,r),t.child=vi(t,null,a,r)):mt(e,t,a,r),t.memoizedState=s.state,e=t.child):e=ma(e,t,r),e}function $0(e,t,a,i){return fi(),t.flags|=256,mt(e,t,a,i),t.child}var vo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yo(e){return{baseLanes:e,cachePool:Vc()}}function xo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ot),e}function ef(e,t,a){var i=t.pendingProps,r=!1,s=(t.flags&128)!==0,d;if((d=s)||(d=e!==null&&e.memoizedState===null?!1:(Xe.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(we){if(r?Ga(t):Ha(),(e=qe)?(e=ud(e,Zt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_a!==null?{id:ta,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=Dc(e),a.return=t,t.child=a,ht=t,qe=null)):e=null,e===null)throw Da(t);return tu(e)?t.lanes=32:t.lanes=536870912,null}var m=i.children;return i=i.fallback,r?(Ha(),r=t.mode,m=fl({mode:"hidden",children:m},r),i=ci(i,r,a,null),m.return=t,i.return=t,m.sibling=i,t.child=m,i=t.child,i.memoizedState=yo(a),i.childLanes=xo(e,d,a),t.memoizedState=vo,Zn(null,i)):(Ga(t),bo(t,m))}var S=e.memoizedState;if(S!==null&&(m=S.dehydrated,m!==null)){if(s)t.flags&256?(Ga(t),t.flags&=-257,t=So(e,t,a)):t.memoizedState!==null?(Ha(),t.child=e.child,t.flags|=128,t=null):(Ha(),m=i.fallback,r=t.mode,i=fl({mode:"visible",children:i.children},r),m=ci(m,r,a,null),m.flags|=2,i.return=t,m.return=t,i.sibling=m,t.child=i,vi(t,e.child,null,a),i=t.child,i.memoizedState=yo(a),i.childLanes=xo(e,d,a),t.memoizedState=vo,t=Zn(null,i));else if(Ga(t),tu(m)){if(d=m.nextSibling&&m.nextSibling.dataset,d)var U=d.dgst;d=U,i=Error(l(419)),i.stack="",i.digest=d,Un({value:i,source:null,stack:null}),t=So(e,t,a)}else if(at||Ii(e,t,a,!1),d=(a&e.childLanes)!==0,at||d){if(d=He,d!==null&&(i=he(d,a),i!==0&&i!==S.retryLane))throw S.retryLane=i,ui(e,i),Tt(d,e,i),mo;eu(m)||bl(),t=So(e,t,a)}else eu(m)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,qe=Yt(m.nextSibling),ht=t,we=!0,Ua=null,Zt=!1,e!==null&&Lc(t,e),t=bo(t,i.children),t.flags|=4096);return t}return r?(Ha(),m=i.fallback,r=t.mode,S=e.child,U=S.sibling,i=ua(S,{mode:"hidden",children:i.children}),i.subtreeFlags=S.subtreeFlags&65011712,U!==null?m=ua(U,m):(m=ci(m,r,a,null),m.flags|=2),m.return=t,i.return=t,i.sibling=m,t.child=i,Zn(null,i),i=t.child,m=e.child.memoizedState,m===null?m=yo(a):(r=m.cachePool,r!==null?(S=et._currentValue,r=r.parent!==S?{parent:S,pool:S}:r):r=Vc(),m={baseLanes:m.baseLanes|a,cachePool:r}),i.memoizedState=m,i.childLanes=xo(e,d,a),t.memoizedState=vo,Zn(e.child,i)):(Ga(t),a=e.child,e=a.sibling,a=ua(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=a,t.memoizedState=null,a)}function bo(e,t){return t=fl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fl(e,t){return e=kt(22,e,null,t),e.lanes=0,e}function So(e,t,a){return vi(t,e.child,null,a),e=bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tf(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Bs(e.return,t,a)}function wo(e,t,a,i,r,s){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:r,treeForkCount:s}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=i,d.tail=a,d.tailMode=r,d.treeForkCount=s)}function af(e,t,a){var i=t.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var d=Xe.current,m=(d&2)!==0;if(m?(d=d&1|2,t.flags|=128):d&=1,Q(Xe,d),mt(e,t,i,a),i=we?_n:0,!m&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tf(e,a,t);else if(e.tag===19)tf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=t.child,r=null;a!==null;)e=a.alternate,e!==null&&$r(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=t.child,t.child=null):(r=a.sibling,a.sibling=null),wo(t,!1,r,a,s,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&$r(e)===null){t.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}wo(t,!0,a,null,s,i);break;case"together":wo(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function ma(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Va|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Ii(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=ua(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ua(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Eo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fr(e)))}function F2(e,t,a){switch(t.tag){case 3:st(t,t.stateNode.containerInfo),Oa(t,et,e.memoizedState.cache),fi();break;case 27:case 5:Ra(t);break;case 4:st(t,t.stateNode.containerInfo);break;case 10:Oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Is(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Ga(t),t.flags|=128,null):(a&t.child.childLanes)!==0?ef(e,t,a):(Ga(t),e=ma(e,t,a),e!==null?e.sibling:null);Ga(t);break;case 19:var r=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(Ii(e,t,a,!1),i=(a&t.childLanes)!==0),r){if(i)return af(e,t,a);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Q(Xe,Xe.current),i)break;return null;case 22:return t.lanes=0,Q0(e,t,a,t.pendingProps);case 24:Oa(t,et,e.memoizedState.cache)}return ma(e,t,a)}function nf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)at=!0;else{if(!Eo(e,a)&&(t.flags&128)===0)return at=!1,F2(e,t,a);at=(e.flags&131072)!==0}else at=!1,we&&(t.flags&1048576)!==0&&Bc(t,_n,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=mi(t.elementType),t.type=e,typeof e=="function")Rs(e)?(i=xi(e,i),t.tag=1,t=J0(null,t,e,i,a)):(t.tag=0,t=go(null,t,e,i,a));else{if(e!=null){var r=e.$$typeof;if(r===P){t.tag=11,t=F0(null,t,e,i,a);break e}else if(r===I){t.tag=14,t=Y0(null,t,e,i,a);break e}}throw t=ke(e)||e,Error(l(306,t,""))}}return t;case 0:return go(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,r=xi(i,t.pendingProps),J0(e,t,i,r,a);case 3:e:{if(st(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var s=t.memoizedState;r=s.element,Vs(e,t),Hn(t,i,null,a);var d=t.memoizedState;if(i=d.cache,Oa(t,et,i),i!==s.cache&&Ls(t,[et],a,!0),Gn(),i=d.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=$0(e,t,i,a);break e}else if(i!==r){r=qt(Error(l(424)),t),Un(r),t=$0(e,t,i,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=Yt(e.firstChild),ht=t,we=!0,Ua=null,Zt=!0,a=Qc(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fi(),i===r){t=ma(e,t,a);break e}mt(e,t,i,a)}t=t.child}return t;case 26:return cl(e,t),e===null?(a=md(t.type,null,t.pendingProps,null))?t.memoizedState=a:we||(a=t.type,e=t.pendingProps,i=Rl(oe.current).createElement(a),i[Ye]=t,i[$e]=e,gt(i,a,e),ut(i),t.stateNode=i):t.memoizedState=md(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ra(t),e===null&&we&&(i=t.stateNode=dd(t.type,t.pendingProps,oe.current),ht=t,Zt=!0,r=qe,Ia(t.type)?(au=r,qe=Yt(i.firstChild)):qe=r),mt(e,t,t.pendingProps.children,a),cl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&we&&((r=i=qe)&&(i=Sp(i,t.type,t.pendingProps,Zt),i!==null?(t.stateNode=i,ht=t,qe=Yt(i.firstChild),Zt=!1,r=!0):r=!1),r||Da(t)),Ra(t),r=t.type,s=t.pendingProps,d=e!==null?e.memoizedProps:null,i=s.children,Ko(r,s)?i=null:d!==null&&Ko(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=Ws(e,t,L2,null,null,a),rr._currentValue=r),cl(e,t),mt(e,t,i,a),t.child;case 6:return e===null&&we&&((e=a=qe)&&(a=wp(a,t.pendingProps,Zt),a!==null?(t.stateNode=a,ht=t,qe=null,e=!0):e=!1),e||Da(t)),null;case 13:return ef(e,t,a);case 4:return st(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=vi(t,null,i,a):mt(e,t,i,a),t.child;case 11:return F0(e,t,t.type,t.pendingProps,a);case 7:return mt(e,t,t.pendingProps,a),t.child;case 8:return mt(e,t,t.pendingProps.children,a),t.child;case 12:return mt(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,Oa(t,t.type,i.value),mt(e,t,i.children,a),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,hi(t),r=pt(r),i=i(r),t.flags|=1,mt(e,t,i,a),t.child;case 14:return Y0(e,t,t.type,t.pendingProps,a);case 15:return I0(e,t,t.type,t.pendingProps,a);case 19:return af(e,t,a);case 31:return Z2(e,t,a);case 22:return Q0(e,t,a,t.pendingProps);case 24:return hi(t),i=pt(et),e===null?(r=Hs(),r===null&&(r=He,s=Ns(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=a),r=s),t.memoizedState={parent:i,cache:r},qs(t),Oa(t,et,r)):((e.lanes&a)!==0&&(Vs(e,t),Hn(t,null,null,a),Gn()),r=e.memoizedState,s=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),Oa(t,et,i)):(i=s.cache,Oa(t,et,i),i!==r.cache&&Ls(t,[et],a,!0))),mt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function ga(e){e.flags|=4}function Mo(e,t,a,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(_f())e.flags|=8192;else throw gi=Wr,Ps}else e.flags&=-16777217}function rf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bd(t))if(_f())e.flags|=8192;else throw gi=Wr,Ps}function dl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zi():536870912,e.lanes|=t,ln|=t)}function Fn(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Y2(e,t,a){var i=t.pendingProps;switch(_s(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return Ve(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),da(et),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?ga(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ds())),Ve(t),null;case 26:var r=t.type,s=t.memoizedState;return e===null?(ga(t),s!==null?(Ve(t),rf(t,s)):(Ve(t),Mo(t,r,null,i,a))):s?s!==e.memoizedState?(ga(t),Ve(t),rf(t,s)):(Ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ga(t),Ve(t),Mo(t,r,e,i,a)),null;case 27:if($a(t),a=oe.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}e=W.current,Yi(t)?Nc(t):(e=dd(r,i,a),t.stateNode=e,ga(t))}return Ve(t),null;case 5:if($a(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return Ve(t),null}if(s=W.current,Yi(t))Nc(t);else{var d=Rl(oe.current);switch(s){case 1:s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=d.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?d.createElement(r,{is:i.is}):d.createElement(r)}}s[Ye]=t,s[$e]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)s.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=s;e:switch(gt(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ga(t)}}return Ve(t),Mo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ga(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=oe.current,Yi(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,r=ht,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[Ye]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||td(e.nodeValue,a)),e||Da(t,!0)}else e=Rl(e).createTextNode(i),e[Ye]=t,t.stateNode=e}return Ve(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=Yi(t),a!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Ye]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),e=!1}else a=Ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Ut(t),t):(Ut(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Yi(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(l(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(l(317));r[Ye]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ve(t),r=!1}else r=Ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Ut(t),t):(Ut(t),null)}return Ut(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),dl(t,t.updateQueue),Ve(t),null);case 4:return Ge(),e===null&&Yo(t.stateNode.containerInfo),Ve(t),null;case 10:return da(t.type),Ve(t),null;case 19:if(G(Xe),i=t.memoizedState,i===null)return Ve(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Fn(i,!1);else{if(We!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=$r(e),s!==null){for(t.flags|=128,Fn(i,!1),e=s.updateQueue,t.updateQueue=e,dl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Uc(a,e),a=a.sibling;return Q(Xe,Xe.current&1|2),we&&ca(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Fe()>vl&&(t.flags|=128,r=!0,Fn(i,!1),t.lanes=4194304)}else{if(!r)if(e=$r(s),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,dl(t,e),Fn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!we)return Ve(t),null}else 2*Fe()-i.renderingStartTime>vl&&a!==536870912&&(t.flags|=128,r=!0,Fn(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(e=i.last,e!==null?e.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fe(),e.sibling=null,a=Xe.current,Q(Xe,r?a&1|2:a&1),we&&ca(t,i.treeForkCount),e):(Ve(t),null);case 22:case 23:return Ut(t),Ys(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),a=t.updateQueue,a!==null&&dl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&G(pi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),da(et),Ve(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function I2(e,t){switch(_s(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return da(et),Ge(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return $a(t),null;case 31:if(t.memoizedState!==null){if(Ut(t),t.alternate===null)throw Error(l(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ut(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Xe),null;case 4:return Ge(),null;case 10:return da(t.type),null;case 22:case 23:return Ut(t),Ys(),e!==null&&G(pi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return da(et),null;case 25:return null;default:return null}}function lf(e,t){switch(_s(t),t.tag){case 3:da(et),Ge();break;case 26:case 27:case 5:$a(t);break;case 4:Ge();break;case 31:t.memoizedState!==null&&Ut(t);break;case 13:Ut(t);break;case 19:G(Xe);break;case 10:da(t.type);break;case 22:case 23:Ut(t),Ys(),e!==null&&G(pi);break;case 24:da(et)}}function Yn(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){i=void 0;var s=a.create,d=a.inst;i=s(),d.destroy=i}a=a.next}while(a!==r)}}catch(m){Oe(t,t.return,m)}}function Pa(e,t,a){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&e)===e){var d=i.inst,m=d.destroy;if(m!==void 0){d.destroy=void 0,r=t;var S=a,U=m;try{U()}catch(H){Oe(r,S,H)}}}i=i.next}while(i!==s)}}catch(H){Oe(t,t.return,H)}}function sf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Xc(t,a)}catch(i){Oe(e,e.return,i)}}}function of(e,t,a){a.props=xi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){Oe(e,t,i)}}function In(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(r){Oe(e,t,r)}}function ia(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(r){Oe(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){Oe(e,t,r)}else a.current=null}function uf(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(r){Oe(e,e.return,r)}}function Ao(e,t,a){try{var i=e.stateNode;mp(i,e.type,a,t),i[$e]=t}catch(r){Oe(e,e.return,r)}}function cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function To(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ro(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=sa));else if(i!==4&&(i===27&&Ia(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ro(e,t,a),e=e.sibling;e!==null;)Ro(e,t,a),e=e.sibling}function hl(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(hl(e,t,a),e=e.sibling;e!==null;)hl(e,t,a),e=e.sibling}function ff(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);gt(t,i,a),t[Ye]=e,t[$e]=a}catch(s){Oe(e,e.return,s)}}var va=!1,it=!1,zo=!1,df=typeof WeakSet=="function"?WeakSet:Set,ct=null;function Q2(e,t){if(e=e.containerInfo,Wo=Ol,e=Ec(e),bs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var d=0,m=-1,S=-1,U=0,H=0,V=e,D=null;t:for(;;){for(var L;V!==a||r!==0&&V.nodeType!==3||(m=d+r),V!==s||i!==0&&V.nodeType!==3||(S=d+i),V.nodeType===3&&(d+=V.nodeValue.length),(L=V.firstChild)!==null;)D=V,V=L;for(;;){if(V===e)break t;if(D===a&&++U===r&&(m=d),D===s&&++H===i&&(S=d),(L=V.nextSibling)!==null)break;V=D,D=V.parentNode}V=L}a=m===-1||S===-1?null:{start:m,end:S}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xo={focusedElem:e,selectionRange:a},Ol=!1,ct=t;ct!==null;)if(t=ct,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ct=e;else for(;ct!==null;){switch(t=ct,s=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=t,r=s.memoizedProps,s=s.memoizedState,i=a.stateNode;try{var J=xi(a.type,r);e=i.getSnapshotBeforeUpdate(J,s),i.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Oe(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)$o(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$o(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,ct=e;break}ct=t.return}}function hf(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),i&4&&Yn(5,a);break;case 1:if(xa(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(d){Oe(a,a.return,d)}else{var r=xi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Oe(a,a.return,d)}}i&64&&sf(a),i&512&&In(a,a.return);break;case 3:if(xa(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Xc(e,t)}catch(d){Oe(a,a.return,d)}}break;case 27:t===null&&i&4&&ff(a);case 26:case 5:xa(e,a),t===null&&i&4&&uf(a),i&512&&In(a,a.return);break;case 12:xa(e,a);break;case 31:xa(e,a),i&4&&gf(e,a);break;case 13:xa(e,a),i&4&&vf(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ip.bind(null,a),Ep(e,a))));break;case 22:if(i=a.memoizedState!==null||va,!i){t=t!==null&&t.memoizedState!==null||it,r=va;var s=it;va=i,(it=t)&&!s?ba(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),va=r,it=s}break;case 30:break;default:xa(e,a)}}function pf(e){var t=e.alternate;t!==null&&(e.alternate=null,pf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&is(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,wt=!1;function ya(e,t,a){for(a=a.child;a!==null;)mf(e,t,a),a=a.sibling}function mf(e,t,a){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(ei,a)}catch{}switch(a.tag){case 26:it||ia(a,t),ya(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:it||ia(a,t);var i=Ze,r=wt;Ia(a.type)&&(Ze=a.stateNode,wt=!1),ya(e,t,a),ar(a.stateNode),Ze=i,wt=r;break;case 5:it||ia(a,t);case 6:if(i=Ze,r=wt,Ze=null,ya(e,t,a),Ze=i,wt=r,Ze!==null)if(wt)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(s){Oe(a,t,s)}else try{Ze.removeChild(a.stateNode)}catch(s){Oe(a,t,s)}break;case 18:Ze!==null&&(wt?(e=Ze,sd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pn(e)):sd(Ze,a.stateNode));break;case 4:i=Ze,r=wt,Ze=a.stateNode.containerInfo,wt=!0,ya(e,t,a),Ze=i,wt=r;break;case 0:case 11:case 14:case 15:Pa(2,a,t),it||Pa(4,a,t),ya(e,t,a);break;case 1:it||(ia(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&of(a,t,i)),ya(e,t,a);break;case 21:ya(e,t,a);break;case 22:it=(i=it)||a.memoizedState!==null,ya(e,t,a),it=i;break;default:ya(e,t,a)}}function gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pn(e)}catch(a){Oe(t,t.return,a)}}}function vf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pn(e)}catch(a){Oe(t,t.return,a)}}function W2(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new df),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new df),t;default:throw Error(l(435,e.tag))}}function pl(e,t){var a=W2(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var r=np.bind(null,e,i);i.then(r,r)}})}function Et(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var r=a[i],s=e,d=t,m=d;e:for(;m!==null;){switch(m.tag){case 27:if(Ia(m.type)){Ze=m.stateNode,wt=!1;break e}break;case 5:Ze=m.stateNode,wt=!1;break e;case 3:case 4:Ze=m.stateNode.containerInfo,wt=!0;break e}m=m.return}if(Ze===null)throw Error(l(160));mf(s,d,r),Ze=null,wt=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yf(t,e),t=t.sibling}var Kt=null;function yf(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Et(t,e),Mt(e),i&4&&(Pa(3,e,e.return),Yn(3,e),Pa(5,e,e.return));break;case 1:Et(t,e),Mt(e),i&512&&(it||a===null||ia(a,a.return)),i&64&&va&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var r=Kt;if(Et(t,e),Mt(e),i&512&&(it||a===null||ia(a,a.return)),i&4){var s=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[bn]||s[Ye]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),gt(s,i,a),s[Ye]=e,ut(s),i=s;break e;case"link":var d=yd("link","href",r).get(i+(a.href||""));if(d){for(var m=0;m<d.length;m++)if(s=d[m],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){d.splice(m,1);break t}}s=r.createElement(i),gt(s,i,a),r.head.appendChild(s);break;case"meta":if(d=yd("meta","content",r).get(i+(a.content||""))){for(m=0;m<d.length;m++)if(s=d[m],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){d.splice(m,1);break t}}s=r.createElement(i),gt(s,i,a),r.head.appendChild(s);break;default:throw Error(l(468,i))}s[Ye]=e,ut(s),i=s}e.stateNode=i}else xd(r,e.type,e.stateNode);else e.stateNode=vd(r,i,e.memoizedProps);else s!==i?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,i===null?xd(r,e.type,e.stateNode):vd(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ao(e,e.memoizedProps,a.memoizedProps)}break;case 27:Et(t,e),Mt(e),i&512&&(it||a===null||ia(a,a.return)),a!==null&&i&4&&Ao(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Et(t,e),Mt(e),i&512&&(it||a===null||ia(a,a.return)),e.flags&32){r=e.stateNode;try{Li(r,"")}catch(J){Oe(e,e.return,J)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Ao(e,r,a!==null?a.memoizedProps:r)),i&1024&&(zo=!0);break;case 6:if(Et(t,e),Mt(e),i&4){if(e.stateNode===null)throw Error(l(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(J){Oe(e,e.return,J)}}break;case 3:if(kl=null,r=Kt,Kt=zl(t.containerInfo),Et(t,e),Kt=r,Mt(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{pn(t.containerInfo)}catch(J){Oe(e,e.return,J)}zo&&(zo=!1,xf(e));break;case 4:i=Kt,Kt=zl(e.stateNode.containerInfo),Et(t,e),Mt(e),Kt=i;break;case 12:Et(t,e),Mt(e);break;case 31:Et(t,e),Mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,pl(e,i)));break;case 13:Et(t,e),Mt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(gl=Fe()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,pl(e,i)));break;case 22:r=e.memoizedState!==null;var S=a!==null&&a.memoizedState!==null,U=va,H=it;if(va=U||r,it=H||S,Et(t,e),it=H,va=U,Mt(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(a===null||S||va||it||bi(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){S=a=t;try{if(s=S.stateNode,r)d=s.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{m=S.stateNode;var V=S.memoizedProps.style,D=V!=null&&V.hasOwnProperty("display")?V.display:null;m.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(J){Oe(S,S.return,J)}}}else if(t.tag===6){if(a===null){S=t;try{S.stateNode.nodeValue=r?"":S.memoizedProps}catch(J){Oe(S,S.return,J)}}}else if(t.tag===18){if(a===null){S=t;try{var L=S.stateNode;r?od(L,!0):od(S.stateNode,!1)}catch(J){Oe(S,S.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,pl(e,a))));break;case 19:Et(t,e),Mt(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,pl(e,i)));break;case 30:break;case 21:break;default:Et(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(cf(i)){a=i;break}i=i.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var r=a.stateNode,s=To(e);hl(e,s,r);break;case 5:var d=a.stateNode;a.flags&32&&(Li(d,""),a.flags&=-33);var m=To(e);hl(e,m,d);break;case 3:case 4:var S=a.stateNode.containerInfo,U=To(e);Ro(e,U,S);break;default:throw Error(l(161))}}catch(H){Oe(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hf(e,t.alternate,t),t=t.sibling}function bi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Pa(4,t,t.return),bi(t);break;case 1:ia(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&of(t,t.return,a),bi(t);break;case 27:ar(t.stateNode);case 26:case 5:ia(t,t.return),bi(t);break;case 22:t.memoizedState===null&&bi(t);break;case 30:bi(t);break;default:bi(t)}e=e.sibling}}function ba(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,s=t,d=s.flags;switch(s.tag){case 0:case 11:case 15:ba(r,s,a),Yn(4,s);break;case 1:if(ba(r,s,a),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(U){Oe(i,i.return,U)}if(i=s,r=i.updateQueue,r!==null){var m=i.stateNode;try{var S=r.shared.hiddenCallbacks;if(S!==null)for(r.shared.hiddenCallbacks=null,r=0;r<S.length;r++)Wc(S[r],m)}catch(U){Oe(i,i.return,U)}}a&&d&64&&sf(s),In(s,s.return);break;case 27:ff(s);case 26:case 5:ba(r,s,a),a&&i===null&&d&4&&uf(s),In(s,s.return);break;case 12:ba(r,s,a);break;case 31:ba(r,s,a),a&&d&4&&gf(r,s);break;case 13:ba(r,s,a),a&&d&4&&vf(r,s);break;case 22:s.memoizedState===null&&ba(r,s,a),In(s,s.return);break;case 30:break;default:ba(r,s,a)}t=t.sibling}}function Co(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Dn(a))}function ko(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Dn(e))}function Jt(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bf(e,t,a,i),t=t.sibling}function bf(e,t,a,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Jt(e,t,a,i),r&2048&&Yn(9,t);break;case 1:Jt(e,t,a,i);break;case 3:Jt(e,t,a,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Dn(e)));break;case 12:if(r&2048){Jt(e,t,a,i),e=t.stateNode;try{var s=t.memoizedProps,d=s.id,m=s.onPostCommit;typeof m=="function"&&m(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){Oe(t,t.return,S)}}else Jt(e,t,a,i);break;case 31:Jt(e,t,a,i);break;case 13:Jt(e,t,a,i);break;case 23:break;case 22:s=t.stateNode,d=t.alternate,t.memoizedState!==null?s._visibility&2?Jt(e,t,a,i):Qn(e,t):s._visibility&2?Jt(e,t,a,i):(s._visibility|=2,an(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Co(d,t);break;case 24:Jt(e,t,a,i),r&2048&&ko(t.alternate,t);break;default:Jt(e,t,a,i)}}function an(e,t,a,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,d=t,m=a,S=i,U=d.flags;switch(d.tag){case 0:case 11:case 15:an(s,d,m,S,r),Yn(8,d);break;case 23:break;case 22:var H=d.stateNode;d.memoizedState!==null?H._visibility&2?an(s,d,m,S,r):Qn(s,d):(H._visibility|=2,an(s,d,m,S,r)),r&&U&2048&&Co(d.alternate,d);break;case 24:an(s,d,m,S,r),r&&U&2048&&ko(d.alternate,d);break;default:an(s,d,m,S,r)}t=t.sibling}}function Qn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,r=i.flags;switch(i.tag){case 22:Qn(a,i),r&2048&&Co(i.alternate,i);break;case 24:Qn(a,i),r&2048&&ko(i.alternate,i);break;default:Qn(a,i)}t=t.sibling}}var Wn=8192;function nn(e,t,a){if(e.subtreeFlags&Wn)for(e=e.child;e!==null;)Sf(e,t,a),e=e.sibling}function Sf(e,t,a){switch(e.tag){case 26:nn(e,t,a),e.flags&Wn&&e.memoizedState!==null&&Bp(a,Kt,e.memoizedState,e.memoizedProps);break;case 5:nn(e,t,a);break;case 3:case 4:var i=Kt;Kt=zl(e.stateNode.containerInfo),nn(e,t,a),Kt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Wn,Wn=16777216,nn(e,t,a),Wn=i):nn(e,t,a));break;default:nn(e,t,a)}}function wf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ct=i,Mf(i,e)}wf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 0:case 11:case 15:Xn(e),e.flags&2048&&Pa(9,e,e.return);break;case 3:Xn(e);break;case 12:Xn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ml(e)):Xn(e);break;default:Xn(e)}}function ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];ct=i,Mf(i,e)}wf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Pa(8,t,t.return),ml(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ml(t));break;default:ml(t)}e=e.sibling}}function Mf(e,t){for(;ct!==null;){var a=ct;switch(a.tag){case 0:case 11:case 15:Pa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Dn(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,ct=i;else e:for(a=e;ct!==null;){i=ct;var r=i.sibling,s=i.return;if(pf(i),i===a){ct=null;break e}if(r!==null){r.return=s,ct=r;break e}ct=s}}}var X2={getCacheForType:function(e){var t=pt(et),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return pt(et).controller.signal}},K2=typeof WeakMap=="function"?WeakMap:Map,Ce=0,He=null,pe=null,xe=0,De=0,Dt=null,qa=!1,rn=!1,_o=!1,Sa=0,We=0,Va=0,Si=0,Uo=0,Ot=0,ln=0,Kn=null,At=null,Do=!1,gl=0,Af=0,vl=1/0,yl=null,ja=null,lt=0,Za=null,sn=null,wa=0,Oo=0,Bo=null,Tf=null,Jn=0,Lo=null;function Bt(){return(Ce&2)!==0&&xe!==0?xe&-xe:B.T!==null?Vo():ye()}function Rf(){if(Ot===0)if((xe&536870912)===0||we){var e=ea;ea<<=1,(ea&3932160)===0&&(ea=262144),Ot=e}else Ot=536870912;return e=_t.current,e!==null&&(e.flags|=32),Ot}function Tt(e,t,a){(e===He&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(on(e,0),Fa(e,xe,Ot,!1)),Ca(e,a),((Ce&2)===0||e!==He)&&(e===He&&((Ce&2)===0&&(Si|=a),We===4&&Fa(e,xe,Ot,!1)),na(e))}function zf(e,t,a){if((Ce&6)!==0)throw Error(l(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Wt(e,t),r=i?ep(e,t):Go(e,t,!0),s=i;do{if(r===0){rn&&!i&&Fa(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!J2(a)){r=Go(e,t,!1),s=!1;continue}if(r===2){if(s=t,e.errorRecoveryDisabledLanes&s)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var m=e;r=Kn;var S=m.current.memoizedState.isDehydrated;if(S&&(on(m,d).flags|=256),d=Go(m,d,!1),d!==2){if(_o&&!S){m.errorRecoveryDisabledLanes|=s,Si|=s,r=4;break e}s=At,At=r,s!==null&&(At===null?At=s:At.push.apply(At,s))}r=d}if(s=!1,r!==2)continue}}if(r===1){on(e,0),Fa(e,t,0,!0);break}e:{switch(i=e,s=r,s){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Fa(i,t,Ot,!qa);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(r=gl+300-Fe(),10<r)){if(Fa(i,t,Ot,!qa),ai(i,0,!0)!==0)break e;wa=t,i.timeoutHandle=rd(Cf.bind(null,i,a,At,yl,Do,t,Ot,Si,ln,qa,s,"Throttled",-0,0),r);break e}Cf(i,a,At,yl,Do,t,Ot,Si,ln,qa,s,null,-0,0)}}break}while(!0);na(e)}function Cf(e,t,a,i,r,s,d,m,S,U,H,V,D,L){if(e.timeoutHandle=-1,V=t.subtreeFlags,V&8192||(V&16785408)===16785408){V={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},Sf(t,s,V);var J=(s&62914560)===s?gl-Fe():(s&4194048)===s?Af-Fe():0;if(J=Lp(V,J),J!==null){wa=s,e.cancelPendingCommit=J(Nf.bind(null,e,t,s,a,i,r,d,m,S,H,V,null,D,L)),Fa(e,s,d,!U);return}}Nf(e,t,s,a,i,r,d,m,S)}function J2(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var r=a[i],s=r.getSnapshot;r=r.value;try{if(!Ct(s(),r))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fa(e,t,a,i){t&=~Uo,t&=~Si,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var s=31-ot(r),d=1<<s;i[s]=-1,r&=~d}a!==0&&zr(e,a,t)}function xl(){return(Ce&6)===0?($n(0),!1):!0}function No(){if(pe!==null){if(De===0)var e=pe.return;else e=pe,fa=di=null,Js(e),Ki=null,Bn=0,e=pe;for(;e!==null;)lf(e.alternate,e),e=e.return;pe=null}}function on(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),wa=0,No(),He=e,pe=a=ua(e.current,null),xe=t,De=0,Dt=null,qa=!1,rn=Wt(e,t),_o=!1,ln=Ot=Uo=Si=Va=We=0,At=Kn=null,Do=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-ot(i),s=1<<r;t|=e[r],i&=~s}return Sa=t,Pr(),a}function kf(e,t){ue=null,B.H=jn,t===Xi||t===Qr?(t=Fc(),De=3):t===Ps?(t=Fc(),De=4):De=t===mo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,pe===null&&(We=1,ol(e,qt(t,e.current)))}function _f(){var e=_t.current;return e===null?!0:(xe&4194048)===xe?Ft===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Ft:!1}function Uf(){var e=B.H;return B.H=jn,e===null?jn:e}function Df(){var e=B.A;return B.A=X2,e}function bl(){We=4,qa||(xe&4194048)!==xe&&_t.current!==null||(rn=!0),(Va&134217727)===0&&(Si&134217727)===0||He===null||Fa(He,xe,Ot,!1)}function Go(e,t,a){var i=Ce;Ce|=2;var r=Uf(),s=Df();(He!==e||xe!==t)&&(yl=null,on(e,t)),t=!1;var d=We;e:do try{if(De!==0&&pe!==null){var m=pe,S=Dt;switch(De){case 8:No(),d=6;break e;case 3:case 2:case 9:case 6:_t.current===null&&(t=!0);var U=De;if(De=0,Dt=null,un(e,m,S,U),a&&rn){d=0;break e}break;default:U=De,De=0,Dt=null,un(e,m,S,U)}}$2(),d=We;break}catch(H){kf(e,H)}while(!0);return t&&e.shellSuspendCounter++,fa=di=null,Ce=i,B.H=r,B.A=s,pe===null&&(He=null,xe=0,Pr()),d}function $2(){for(;pe!==null;)Of(pe)}function ep(e,t){var a=Ce;Ce|=2;var i=Uf(),r=Df();He!==e||xe!==t?(yl=null,vl=Fe()+500,on(e,t)):rn=Wt(e,t);e:do try{if(De!==0&&pe!==null){t=pe;var s=Dt;t:switch(De){case 1:De=0,Dt=null,un(e,t,s,1);break;case 2:case 9:if(jc(s)){De=0,Dt=null,Bf(t);break}t=function(){De!==2&&De!==9||He!==e||(De=7),na(e)},s.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:jc(s)?(De=0,Dt=null,Bf(t)):(De=0,Dt=null,un(e,t,s,7));break;case 5:var d=null;switch(pe.tag){case 26:d=pe.memoizedState;case 5:case 27:var m=pe;if(d?bd(d):m.stateNode.complete){De=0,Dt=null;var S=m.sibling;if(S!==null)pe=S;else{var U=m.return;U!==null?(pe=U,Sl(U)):pe=null}break t}}De=0,Dt=null,un(e,t,s,5);break;case 6:De=0,Dt=null,un(e,t,s,6);break;case 8:No(),We=6;break e;default:throw Error(l(462))}}tp();break}catch(H){kf(e,H)}while(!0);return fa=di=null,B.H=i,B.A=r,Ce=a,pe!==null?0:(He=null,xe=0,Pr(),We)}function tp(){for(;pe!==null&&!wr();)Of(pe)}function Of(e){var t=nf(e.alternate,e,Sa);e.memoizedProps=e.pendingProps,t===null?Sl(e):pe=t}function Bf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=K0(a,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=K0(a,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:Js(t);default:lf(a,t),t=pe=Uc(t,Sa),t=nf(a,t,Sa)}e.memoizedProps=e.pendingProps,t===null?Sl(e):pe=t}function un(e,t,a,i){fa=di=null,Js(t),Ki=null,Bn=0;var r=t.return;try{if(j2(e,r,t,a,xe)){We=1,ol(e,qt(a,e.current)),pe=null;return}}catch(s){if(r!==null)throw pe=r,s;We=1,ol(e,qt(a,e.current)),pe=null;return}t.flags&32768?(we||i===1?e=!0:rn||(xe&536870912)!==0?e=!1:(qa=e=!0,(i===2||i===9||i===3||i===6)&&(i=_t.current,i!==null&&i.tag===13&&(i.flags|=16384))),Lf(t,e)):Sl(t)}function Sl(e){var t=e;do{if((t.flags&32768)!==0){Lf(t,qa);return}e=t.return;var a=Y2(t.alternate,t,Sa);if(a!==null){pe=a;return}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);We===0&&(We=5)}function Lf(e,t){do{var a=I2(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);We=6,pe=null}function Nf(e,t,a,i,r,s,d,m,S){e.cancelPendingCommit=null;do wl();while(lt!==0);if((Ce&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(s=t.lanes|t.childLanes,s|=As,as(e,a,s,d,m,S),e===He&&(pe=He=null,xe=0),sn=t,Za=e,wa=a,Oo=s,Bo=r,Tf=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rp(de,function(){return Vf(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=B.T,B.T=null,r=F.p,F.p=2,d=Ce,Ce|=4;try{Q2(e,t,a)}finally{Ce=d,F.p=r,B.T=i}}lt=1,Gf(),Hf(),Pf()}}function Gf(){if(lt===1){lt=0;var e=Za,t=sn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var i=F.p;F.p=2;var r=Ce;Ce|=4;try{yf(t,e);var s=Xo,d=Ec(e.containerInfo),m=s.focusedElem,S=s.selectionRange;if(d!==m&&m&&m.ownerDocument&&wc(m.ownerDocument.documentElement,m)){if(S!==null&&bs(m)){var U=S.start,H=S.end;if(H===void 0&&(H=U),"selectionStart"in m)m.selectionStart=U,m.selectionEnd=Math.min(H,m.value.length);else{var V=m.ownerDocument||document,D=V&&V.defaultView||window;if(D.getSelection){var L=D.getSelection(),J=m.textContent.length,ie=Math.min(S.start,J),Ne=S.end===void 0?ie:Math.min(S.end,J);!L.extend&&ie>Ne&&(d=Ne,Ne=ie,ie=d);var z=Sc(m,ie),M=Sc(m,Ne);if(z&&M&&(L.rangeCount!==1||L.anchorNode!==z.node||L.anchorOffset!==z.offset||L.focusNode!==M.node||L.focusOffset!==M.offset)){var _=V.createRange();_.setStart(z.node,z.offset),L.removeAllRanges(),ie>Ne?(L.addRange(_),L.extend(M.node,M.offset)):(_.setEnd(M.node,M.offset),L.addRange(_))}}}}for(V=[],L=m;L=L.parentNode;)L.nodeType===1&&V.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof m.focus=="function"&&m.focus(),m=0;m<V.length;m++){var q=V[m];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Ol=!!Wo,Xo=Wo=null}finally{Ce=r,F.p=i,B.T=a}}e.current=t,lt=2}}function Hf(){if(lt===2){lt=0;var e=Za,t=sn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var i=F.p;F.p=2;var r=Ce;Ce|=4;try{hf(e,t.alternate,t)}finally{Ce=r,F.p=i,B.T=a}}lt=3}}function Pf(){if(lt===4||lt===3){lt=0,yn();var e=Za,t=sn,a=wa,i=Tf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?lt=5:(lt=0,sn=Za=null,qf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(ja=null),se(a),t=t.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(ei,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=B.T,r=F.p,F.p=2,B.T=null;try{for(var s=e.onRecoverableError,d=0;d<i.length;d++){var m=i[d];s(m.value,{componentStack:m.stack})}}finally{B.T=t,F.p=r}}(wa&3)!==0&&wl(),na(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Lo?Jn++:(Jn=0,Lo=e):Jn=0,$n(0)}}function qf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Dn(t)))}function wl(){return Gf(),Hf(),Pf(),Vf()}function Vf(){if(lt!==5)return!1;var e=Za,t=Oo;Oo=0;var a=se(wa),i=B.T,r=F.p;try{F.p=32>a?32:a,B.T=null,a=Bo,Bo=null;var s=Za,d=wa;if(lt=0,sn=Za=null,wa=0,(Ce&6)!==0)throw Error(l(331));var m=Ce;if(Ce|=4,Ef(s.current),bf(s,s.current,d,a),Ce=m,$n(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(ei,s)}catch{}return!0}finally{F.p=r,B.T=i,qf(e,t)}}function jf(e,t,a){t=qt(a,t),t=po(e.stateNode,t,2),e=Na(e,t,2),e!==null&&(Ca(e,2),na(e))}function Oe(e,t,a){if(e.tag===3)jf(e,e,a);else for(;t!==null;){if(t.tag===3){jf(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ja===null||!ja.has(i))){e=qt(a,e),a=j0(2),i=Na(t,a,2),i!==null&&(Z0(a,i,t,e),Ca(i,2),na(i));break}}t=t.return}}function Ho(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new K2;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(a)||(_o=!0,r.add(a),e=ap.bind(null,e,t,a),t.then(e,e))}function ap(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,He===e&&(xe&a)===a&&(We===4||We===3&&(xe&62914560)===xe&&300>Fe()-gl?(Ce&2)===0&&on(e,0):Uo|=a,ln===xe&&(ln=0)),na(e)}function Zf(e,t){t===0&&(t=zi()),e=ui(e,t),e!==null&&(Ca(e,t),na(e))}function ip(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Zf(e,a)}function np(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),Zf(e,a)}function rp(e,t){return ft(e,t)}var El=null,cn=null,Po=!1,Ml=!1,qo=!1,Ya=0;function na(e){e!==cn&&e.next===null&&(cn===null?El=cn=e:cn=cn.next=e),Ml=!0,Po||(Po=!0,sp())}function $n(e,t){if(!qo&&Ml){qo=!0;do for(var a=!1,i=El;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var d=i.suspendedLanes,m=i.pingedLanes;s=(1<<31-ot(42|e)+1)-1,s&=r&~(d&~m),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,Qf(i,s))}else s=xe,s=ai(i,i===He?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(s&3)===0||Wt(i,s)||(a=!0,Qf(i,s));i=i.next}while(a);qo=!1}}function lp(){Ff()}function Ff(){Ml=Po=!1;var e=0;Ya!==0&&vp()&&(e=Ya);for(var t=Fe(),a=null,i=El;i!==null;){var r=i.next,s=Yf(i,t);s===0?(i.next=null,a===null?El=r:a.next=r,r===null&&(cn=a)):(a=i,(e!==0||(s&3)!==0)&&(Ml=!0)),i=r}lt!==0&&lt!==5||$n(e),Ya!==0&&(Ya=0)}function Yf(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var d=31-ot(s),m=1<<d,S=r[d];S===-1?((m&a)===0||(m&i)!==0)&&(r[d]=Rr(m,t)):S<=t&&(e.expiredLanes|=m),s&=~m}if(t=He,a=xe,a=ai(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ra(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Wt(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&ra(i),se(a)){case 2:case 8:a=Mr;break;case 32:a=de;break;case 268435456:a=_e;break;default:a=de}return i=If.bind(null,e),a=ft(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&ra(i),e.callbackPriority=2,e.callbackNode=null,2}function If(e,t){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(wl()&&e.callbackNode!==a)return null;var i=xe;return i=ai(e,e===He?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(zf(e,i,t),Yf(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?If.bind(null,e):null)}function Qf(e,t){if(wl())return null;zf(e,t,!0)}function sp(){xp(function(){(Ce&6)!==0?ft(Er,lp):Ff()})}function Vo(){if(Ya===0){var e=Qi;e===0&&(e=ti,ti<<=1,(ti&261888)===0&&(ti=256)),Ya=e}return Ya}function Wf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ur(""+e)}function Xf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function op(e,t,a,i,r){if(t==="submit"&&a&&a.stateNode===r){var s=Wf((r[$e]||null).action),d=i.submitter;d&&(t=(t=d[$e]||null)?Wf(t.formAction):d.getAttribute("formAction"),t!==null&&(s=t,d=null));var m=new Lr("action","action",null,i,r);e.push({event:m,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Ya!==0){var S=d?Xf(r,d):new FormData(r);so(a,{pending:!0,data:S,method:r.method,action:s},null,S)}}else typeof s=="function"&&(m.preventDefault(),S=d?Xf(r,d):new FormData(r),so(a,{pending:!0,data:S,method:r.method,action:s},s,S))},currentTarget:r}]})}}for(var jo=0;jo<Ms.length;jo++){var Zo=Ms[jo],up=Zo.toLowerCase(),cp=Zo[0].toUpperCase()+Zo.slice(1);Xt(up,"on"+cp)}Xt(Tc,"onAnimationEnd"),Xt(Rc,"onAnimationIteration"),Xt(zc,"onAnimationStart"),Xt("dblclick","onDoubleClick"),Xt("focusin","onFocus"),Xt("focusout","onBlur"),Xt(T2,"onTransitionRun"),Xt(R2,"onTransitionStart"),Xt(z2,"onTransitionCancel"),Xt(Cc,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ri("onBeforeInput",["compositionend","keypress","textInput","paste"]),ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(er));function Kf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],r=i.event;i=i.listeners;e:{var s=void 0;if(t)for(var d=i.length-1;0<=d;d--){var m=i[d],S=m.instance,U=m.currentTarget;if(m=m.listener,S!==s&&r.isPropagationStopped())break e;s=m,r.currentTarget=U;try{s(r)}catch(H){Hr(H)}r.currentTarget=null,s=S}else for(d=0;d<i.length;d++){if(m=i[d],S=m.instance,U=m.currentTarget,m=m.listener,S!==s&&r.isPropagationStopped())break e;s=m,r.currentTarget=U;try{s(r)}catch(H){Hr(H)}r.currentTarget=null,s=S}}}}function me(e,t){var a=t[Ci];a===void 0&&(a=t[Ci]=new Set);var i=e+"__bubble";a.has(i)||(Jf(t,e,2,!1),a.add(i))}function Fo(e,t,a){var i=0;t&&(i|=4),Jf(a,e,i,t)}var Al="_reactListening"+Math.random().toString(36).slice(2);function Yo(e){if(!e[Al]){e[Al]=!0,Zu.forEach(function(a){a!=="selectionchange"&&(fp.has(a)||Fo(a,!1,e),Fo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Al]||(t[Al]=!0,Fo("selectionchange",!1,t))}}function Jf(e,t,a,i){switch(Rd(t)){case 2:var r=Hp;break;case 8:r=Pp;break;default:r=su}a=r.bind(null,t,a,e),r=void 0,!fs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,a,{capture:!0,passive:r}):e.addEventListener(t,a,!0):r!==void 0?e.addEventListener(t,a,{passive:r}):e.addEventListener(t,a,!1)}function Io(e,t,a,i,r){var s=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var d=i.tag;if(d===3||d===4){var m=i.stateNode.containerInfo;if(m===r)break;if(d===4)for(d=i.return;d!==null;){var S=d.tag;if((S===3||S===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;m!==null;){if(d=_i(m),d===null)return;if(S=d.tag,S===5||S===6||S===26||S===27){i=s=d;continue e}m=m.parentNode}}i=i.return}ac(function(){var U=s,H=us(a),V=[];e:{var D=kc.get(e);if(D!==void 0){var L=Lr,J=e;switch(e){case"keypress":if(Or(a)===0)break e;case"keydown":case"keyup":L=n2;break;case"focusin":J="focus",L=ms;break;case"focusout":J="blur",L=ms;break;case"beforeblur":case"afterblur":L=ms;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=rc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=s2;break;case Tc:case Rc:case zc:L=Wh;break;case Cc:L=u2;break;case"scroll":case"scrollend":L=Zh;break;case"wheel":L=f2;break;case"copy":case"cut":case"paste":L=Kh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=sc;break;case"toggle":case"beforetoggle":L=h2}var ie=(t&4)!==0,Ne=!ie&&(e==="scroll"||e==="scrollend"),z=ie?D!==null?D+"Capture":null:D;ie=[];for(var M=U,_;M!==null;){var q=M;if(_=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||_===null||z===null||(q=wn(M,z),q!=null&&ie.push(tr(M,q,_))),Ne)break;M=M.return}0<ie.length&&(D=new L(D,J,null,a,H),V.push({event:D,listeners:ie}))}}if((t&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",D&&a!==os&&(J=a.relatedTarget||a.fromElement)&&(_i(J)||J[Nt]))break e;if((L||D)&&(D=H.window===H?H:(D=H.ownerDocument)?D.defaultView||D.parentWindow:window,L?(J=a.relatedTarget||a.toElement,L=U,J=J?_i(J):null,J!==null&&(Ne=f(J),ie=J.tag,J!==Ne||ie!==5&&ie!==27&&ie!==6)&&(J=null)):(L=null,J=U),L!==J)){if(ie=rc,q="onMouseLeave",z="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ie=sc,q="onPointerLeave",z="onPointerEnter",M="pointer"),Ne=L==null?D:Sn(L),_=J==null?D:Sn(J),D=new ie(q,M+"leave",L,a,H),D.target=Ne,D.relatedTarget=_,q=null,_i(H)===U&&(ie=new ie(z,M+"enter",J,a,H),ie.target=_,ie.relatedTarget=Ne,q=ie),Ne=q,L&&J)t:{for(ie=dp,z=L,M=J,_=0,q=z;q;q=ie(q))_++;q=0;for(var te=M;te;te=ie(te))q++;for(;0<_-q;)z=ie(z),_--;for(;0<q-_;)M=ie(M),q--;for(;_--;){if(z===M||M!==null&&z===M.alternate){ie=z;break t}z=ie(z),M=ie(M)}ie=null}else ie=null;L!==null&&$f(V,D,L,ie,!1),J!==null&&Ne!==null&&$f(V,Ne,J,ie,!0)}}e:{if(D=U?Sn(U):window,L=D.nodeName&&D.nodeName.toLowerCase(),L==="select"||L==="input"&&D.type==="file")var Te=mc;else if(hc(D))if(gc)Te=E2;else{Te=S2;var ee=b2}else L=D.nodeName,!L||L.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?U&&ss(U.elementType)&&(Te=mc):Te=w2;if(Te&&(Te=Te(e,U))){pc(V,Te,a,H);break e}ee&&ee(e,D,U),e==="focusout"&&U&&D.type==="number"&&U.memoizedProps.value!=null&&ls(D,"number",D.value)}switch(ee=U?Sn(U):window,e){case"focusin":(hc(ee)||ee.contentEditable==="true")&&(Pi=ee,Ss=U,kn=null);break;case"focusout":kn=Ss=Pi=null;break;case"mousedown":ws=!0;break;case"contextmenu":case"mouseup":case"dragend":ws=!1,Mc(V,a,H);break;case"selectionchange":if(A2)break;case"keydown":case"keyup":Mc(V,a,H)}var fe;if(vs)e:{switch(e){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Hi?fc(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(oc&&a.locale!=="ko"&&(Hi||be!=="onCompositionStart"?be==="onCompositionEnd"&&Hi&&(fe=ic()):(ka=H,ds="value"in ka?ka.value:ka.textContent,Hi=!0)),ee=Tl(U,be),0<ee.length&&(be=new lc(be,e,null,a,H),V.push({event:be,listeners:ee}),fe?be.data=fe:(fe=dc(a),fe!==null&&(be.data=fe)))),(fe=m2?g2(e,a):v2(e,a))&&(be=Tl(U,"onBeforeInput"),0<be.length&&(ee=new lc("onBeforeInput","beforeinput",null,a,H),V.push({event:ee,listeners:be}),ee.data=fe)),op(V,e,U,a,H)}Kf(V,t)})}function tr(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Tl(e,t){for(var a=t+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=wn(e,a),r!=null&&i.unshift(tr(e,r,s)),r=wn(e,t),r!=null&&i.push(tr(e,r,s))),e.tag===3)return i;e=e.return}return[]}function dp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $f(e,t,a,i,r){for(var s=t._reactName,d=[];a!==null&&a!==i;){var m=a,S=m.alternate,U=m.stateNode;if(m=m.tag,S!==null&&S===i)break;m!==5&&m!==26&&m!==27||U===null||(S=U,r?(U=wn(a,s),U!=null&&d.unshift(tr(a,U,S))):r||(U=wn(a,s),U!=null&&d.push(tr(a,U,S)))),a=a.return}d.length!==0&&e.push({event:t,listeners:d})}var hp=/\r\n?/g,pp=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace(hp,`
`).replace(pp,"")}function td(e,t){return t=ed(t),ed(e)===t}function Le(e,t,a,i,r,s){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Li(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Li(e,""+i);break;case"className":kr(e,"class",i);break;case"tabIndex":kr(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":kr(e,a,i);break;case"style":ec(e,i,s);break;case"data":if(t!=="object"){kr(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ur(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Le(e,t,"name",r.name,r,null),Le(e,t,"formEncType",r.formEncType,r,null),Le(e,t,"formMethod",r.formMethod,r,null),Le(e,t,"formTarget",r.formTarget,r,null)):(Le(e,t,"encType",r.encType,r,null),Le(e,t,"method",r.method,r,null),Le(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ur(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=sa);break;case"onScroll":i!=null&&me("scroll",e);break;case"onScrollEnd":i!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Ur(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":me("beforetoggle",e),me("toggle",e),Cr(e,"popover",i);break;case"xlinkActuate":la(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":la(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":la(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":la(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":la(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":la(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":la(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":la(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":la(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Cr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Vh.get(a)||a,Cr(e,a,i))}}function Qo(e,t,a,i,r,s){switch(a){case"style":ec(e,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Li(e,i):(typeof i=="number"||typeof i=="bigint")&&Li(e,""+i);break;case"onScroll":i!=null&&me("scroll",e);break;case"onScrollEnd":i!=null&&me("scrollend",e);break;case"onClick":i!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Fu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),t=a.slice(2,r?a.length-7:void 0),s=e[$e]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(t,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,r);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Cr(e,a,i)}}}function gt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var i=!1,r=!1,s;for(s in a)if(a.hasOwnProperty(s)){var d=a[s];if(d!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Le(e,t,s,d,a,null)}}r&&Le(e,t,"srcSet",a.srcSet,a,null),i&&Le(e,t,"src",a.src,a,null);return;case"input":me("invalid",e);var m=s=d=r=null,S=null,U=null;for(i in a)if(a.hasOwnProperty(i)){var H=a[i];if(H!=null)switch(i){case"name":r=H;break;case"type":d=H;break;case"checked":S=H;break;case"defaultChecked":U=H;break;case"value":s=H;break;case"defaultValue":m=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(l(137,t));break;default:Le(e,t,i,H,a,null)}}Xu(e,s,m,S,U,d,r,!1);return;case"select":me("invalid",e),i=d=s=null;for(r in a)if(a.hasOwnProperty(r)&&(m=a[r],m!=null))switch(r){case"value":s=m;break;case"defaultValue":d=m;break;case"multiple":i=m;default:Le(e,t,r,m,a,null)}t=s,a=d,e.multiple=!!i,t!=null?Bi(e,!!i,t,!1):a!=null&&Bi(e,!!i,a,!0);return;case"textarea":me("invalid",e),s=r=i=null;for(d in a)if(a.hasOwnProperty(d)&&(m=a[d],m!=null))switch(d){case"value":i=m;break;case"defaultValue":r=m;break;case"children":s=m;break;case"dangerouslySetInnerHTML":if(m!=null)throw Error(l(91));break;default:Le(e,t,d,m,a,null)}Ju(e,i,r,s);return;case"option":for(S in a)a.hasOwnProperty(S)&&(i=a[S],i!=null)&&(S==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":Le(e,t,S,i,a,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(i=0;i<er.length;i++)me(er[i],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(i=a[U],i!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:Le(e,t,U,i,a,null)}return;default:if(ss(t)){for(H in a)a.hasOwnProperty(H)&&(i=a[H],i!==void 0&&Qo(e,t,H,i,a,void 0));return}}for(m in a)a.hasOwnProperty(m)&&(i=a[m],i!=null&&Le(e,t,m,i,a,null))}function mp(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,d=null,m=null,S=null,U=null,H=null;for(L in a){var V=a[L];if(a.hasOwnProperty(L)&&V!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":S=V;default:i.hasOwnProperty(L)||Le(e,t,L,null,i,V)}}for(var D in i){var L=i[D];if(V=a[D],i.hasOwnProperty(D)&&(L!=null||V!=null))switch(D){case"type":s=L;break;case"name":r=L;break;case"checked":U=L;break;case"defaultChecked":H=L;break;case"value":d=L;break;case"defaultValue":m=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(l(137,t));break;default:L!==V&&Le(e,t,D,L,i,V)}}rs(e,d,m,S,U,H,s,r);return;case"select":L=d=m=D=null;for(s in a)if(S=a[s],a.hasOwnProperty(s)&&S!=null)switch(s){case"value":break;case"multiple":L=S;default:i.hasOwnProperty(s)||Le(e,t,s,null,i,S)}for(r in i)if(s=i[r],S=a[r],i.hasOwnProperty(r)&&(s!=null||S!=null))switch(r){case"value":D=s;break;case"defaultValue":m=s;break;case"multiple":d=s;default:s!==S&&Le(e,t,r,s,i,S)}t=m,a=d,i=L,D!=null?Bi(e,!!a,D,!1):!!i!=!!a&&(t!=null?Bi(e,!!a,t,!0):Bi(e,!!a,a?[]:"",!1));return;case"textarea":L=D=null;for(m in a)if(r=a[m],a.hasOwnProperty(m)&&r!=null&&!i.hasOwnProperty(m))switch(m){case"value":break;case"children":break;default:Le(e,t,m,null,i,r)}for(d in i)if(r=i[d],s=a[d],i.hasOwnProperty(d)&&(r!=null||s!=null))switch(d){case"value":D=r;break;case"defaultValue":L=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(l(91));break;default:r!==s&&Le(e,t,d,r,i,s)}Ku(e,D,L);return;case"option":for(var J in a)D=a[J],a.hasOwnProperty(J)&&D!=null&&!i.hasOwnProperty(J)&&(J==="selected"?e.selected=!1:Le(e,t,J,null,i,D));for(S in i)D=i[S],L=a[S],i.hasOwnProperty(S)&&D!==L&&(D!=null||L!=null)&&(S==="selected"?e.selected=D&&typeof D!="function"&&typeof D!="symbol":Le(e,t,S,D,i,L));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)D=a[ie],a.hasOwnProperty(ie)&&D!=null&&!i.hasOwnProperty(ie)&&Le(e,t,ie,null,i,D);for(U in i)if(D=i[U],L=a[U],i.hasOwnProperty(U)&&D!==L&&(D!=null||L!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(l(137,t));break;default:Le(e,t,U,D,i,L)}return;default:if(ss(t)){for(var Ne in a)D=a[Ne],a.hasOwnProperty(Ne)&&D!==void 0&&!i.hasOwnProperty(Ne)&&Qo(e,t,Ne,void 0,i,D);for(H in i)D=i[H],L=a[H],!i.hasOwnProperty(H)||D===L||D===void 0&&L===void 0||Qo(e,t,H,D,i,L);return}}for(var z in a)D=a[z],a.hasOwnProperty(z)&&D!=null&&!i.hasOwnProperty(z)&&Le(e,t,z,null,i,D);for(V in i)D=i[V],L=a[V],!i.hasOwnProperty(V)||D===L||D==null&&L==null||Le(e,t,V,D,i,L)}function ad(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var r=a[i],s=r.transferSize,d=r.initiatorType,m=r.duration;if(s&&m&&ad(d)){for(d=0,m=r.responseEnd,i+=1;i<a.length;i++){var S=a[i],U=S.startTime;if(U>m)break;var H=S.transferSize,V=S.initiatorType;H&&ad(V)&&(S=S.responseEnd,d+=H*(S<m?1:(m-U)/(S-U)))}if(--i,t+=8*(s+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Wo=null,Xo=null;function Rl(e){return e.nodeType===9?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ko(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jo=null;function vp(){var e=window.event;return e&&e.type==="popstate"?e===Jo?!1:(Jo=e,!0):(Jo=null,!1)}var rd=typeof setTimeout=="function"?setTimeout:void 0,yp=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,xp=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(bp)}:rd;function bp(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function sd(e,t){var a=t,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(r),pn(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")ar(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ar(a);for(var s=a.firstChild;s;){var d=s.nextSibling,m=s.nodeName;s[bn]||m==="SCRIPT"||m==="STYLE"||m==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=d}}else a==="body"&&ar(e.ownerDocument.body);a=r}while(a);pn(t)}function od(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function $o(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$o(a),is(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Sp(e,t,a,i){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[bn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Yt(e.nextSibling),e===null)break}return null}function wp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yt(e.nextSibling),e===null))return null;return e}function ud(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Yt(e.nextSibling),e===null))return null;return e}function eu(e){return e.data==="$?"||e.data==="$~"}function tu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ep(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var au=null;function cd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Yt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function fd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function dd(e,t,a){switch(t=Rl(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function ar(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);is(e)}var It=new Map,hd=new Set;function zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ea=F.d;F.d={f:Mp,r:Ap,D:Tp,C:Rp,L:zp,m:Cp,X:_p,S:kp,M:Up};function Mp(){var e=Ea.f(),t=xl();return e||t}function Ap(e){var t=Ui(e);t!==null&&t.tag===5&&t.type==="form"?C0(t):Ea.r(e)}var fn=typeof document>"u"?null:document;function pd(e,t,a){var i=fn;if(i&&typeof t=="string"&&t){var r=Ht(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),hd.has(r)||(hd.add(r),e={rel:e,crossOrigin:a,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),gt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Tp(e){Ea.D(e),pd("dns-prefetch",e,null)}function Rp(e,t){Ea.C(e,t),pd("preconnect",e,t)}function zp(e,t,a){Ea.L(e,t,a);var i=fn;if(i&&e&&t){var r='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Ht(a.imageSizes)+'"]')):r+='[href="'+Ht(e)+'"]';var s=r;switch(t){case"style":s=dn(e);break;case"script":s=hn(e)}It.has(s)||(e=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),It.set(s,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(ir(s))||t==="script"&&i.querySelector(nr(s))||(t=i.createElement("link"),gt(t,"link",e),ut(t),i.head.appendChild(t)))}}function Cp(e,t){Ea.m(e,t);var a=fn;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Ht(i)+'"][href="'+Ht(e)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=hn(e)}if(!It.has(s)&&(e=x({rel:"modulepreload",href:e},t),It.set(s,e),a.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(nr(s)))return}i=a.createElement("link"),gt(i,"link",e),ut(i),a.head.appendChild(i)}}}function kp(e,t,a){Ea.S(e,t,a);var i=fn;if(i&&e){var r=Di(i).hoistableStyles,s=dn(e);t=t||"default";var d=r.get(s);if(!d){var m={loading:0,preload:null};if(d=i.querySelector(ir(s)))m.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},a),(a=It.get(s))&&iu(e,a);var S=d=i.createElement("link");ut(S),gt(S,"link",e),S._p=new Promise(function(U,H){S.onload=U,S.onerror=H}),S.addEventListener("load",function(){m.loading|=1}),S.addEventListener("error",function(){m.loading|=2}),m.loading|=4,Cl(d,t,i)}d={type:"stylesheet",instance:d,count:1,state:m},r.set(s,d)}}}function _p(e,t){Ea.X(e,t);var a=fn;if(a&&e){var i=Di(a).hoistableScripts,r=hn(e),s=i.get(r);s||(s=a.querySelector(nr(r)),s||(e=x({src:e,async:!0},t),(t=It.get(r))&&nu(e,t),s=a.createElement("script"),ut(s),gt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function Up(e,t){Ea.M(e,t);var a=fn;if(a&&e){var i=Di(a).hoistableScripts,r=hn(e),s=i.get(r);s||(s=a.querySelector(nr(r)),s||(e=x({src:e,async:!0,type:"module"},t),(t=It.get(r))&&nu(e,t),s=a.createElement("script"),ut(s),gt(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function md(e,t,a,i){var r=(r=oe.current)?zl(r):null;if(!r)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=dn(a.href),a=Di(r).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dn(a.href);var s=Di(r).hoistableStyles,d=s.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,d),(s=r.querySelector(ir(e)))&&!s._p&&(d.instance=s,d.state.loading=5),It.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},It.set(e,a),s||Dp(r,e,a,d.state))),t&&i===null)throw Error(l(528,""));return d}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=hn(a),a=Di(r).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function dn(e){return'href="'+Ht(e)+'"'}function ir(e){return'link[rel="stylesheet"]['+e+"]"}function gd(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Dp(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),gt(t,"link",a),ut(t),e.head.appendChild(t))}function hn(e){return'[src="'+Ht(e)+'"]'}function nr(e){return"script[async]"+e}function vd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(i)return t.instance=i,ut(i),i;var r=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),ut(i),gt(i,"style",r),Cl(i,a.precedence,e),t.instance=i;case"stylesheet":r=dn(a.href);var s=e.querySelector(ir(r));if(s)return t.state.loading|=4,t.instance=s,ut(s),s;i=gd(a),(r=It.get(r))&&iu(i,r),s=(e.ownerDocument||e).createElement("link"),ut(s);var d=s;return d._p=new Promise(function(m,S){d.onload=m,d.onerror=S}),gt(s,"link",i),t.state.loading|=4,Cl(s,a.precedence,e),t.instance=s;case"script":return s=hn(a.src),(r=e.querySelector(nr(s)))?(t.instance=r,ut(r),r):(i=a,(r=It.get(s))&&(i=x({},a),nu(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),ut(r),gt(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Cl(i,a.precedence,e));return t.instance}function Cl(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,d=0;d<i.length;d++){var m=i[d];if(m.dataset.precedence===t)s=m;else if(s!==r)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function iu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function nu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var kl=null;function yd(e,t,a){if(kl===null){var i=new Map,r=kl=new Map;r.set(a,i)}else r=kl,i=r.get(a),i||(i=new Map,r.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var s=a[r];if(!(s[bn]||s[Ye]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var d=s.getAttribute(t)||"";d=e+d;var m=i.get(d);m?m.push(s):i.set(d,[s])}}return i}function xd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Op(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function bd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bp(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=dn(i.href),s=t.querySelector(ir(r));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=_l.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,ut(s);return}s=t.ownerDocument||t,i=gd(i),(r=It.get(r))&&iu(i,r),s=s.createElement("link"),ut(s);var d=s;d._p=new Promise(function(m,S){d.onload=m,d.onerror=S}),gt(s,"link",i),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_l.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var ru=0;function Lp(e,t){return e.stylesheets&&e.count===0&&Dl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Dl(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&ru===0&&(ru=62500*gp());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Dl(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>ru?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function _l(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Dl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ul=null;function Dl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ul=new Map,t.forEach(Np,e),Ul=null,_l.call(e))}function Np(e,t){if(!(t.state.loading&4)){var a=Ul.get(e);if(a)var i=a.get(null);else{a=new Map,Ul.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var d=r[s];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(a.set(d.dataset.precedence,d),i=d)}i&&a.set(null,i)}r=t.instance,d=r.getAttribute("data-precedence"),s=a.get(d)||i,s===i&&a.set(null,r),a.set(d,r),this.count++,i=_l.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var rr={$$typeof:Z,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Gp(e,t,a,i,r,s,d,m,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ii(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.hiddenUpdates=ii(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function Sd(e,t,a,i,r,s,d,m,S,U,H,V){return e=new Gp(e,t,a,d,S,U,H,V,m),t=1,s===!0&&(t|=24),s=kt(3,null,null,t),e.current=s,s.stateNode=e,t=Ns(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:i,isDehydrated:a,cache:t},qs(s),e}function wd(e){return e?(e=ji,e):ji}function Ed(e,t,a,i,r,s){r=wd(r),i.context===null?i.context=r:i.pendingContext=r,i=La(t),i.payload={element:a},s=s===void 0?null:s,s!==null&&(i.callback=s),a=Na(e,i,t),a!==null&&(Tt(a,e,t),Nn(a,e,t))}function Md(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function lu(e,t){Md(e,t),(e=e.alternate)&&Md(e,t)}function Ad(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&Tt(t,e,67108864),lu(e,67108864)}}function Td(e){if(e.tag===13||e.tag===31){var t=Bt();t=Ie(t);var a=ui(e,t);a!==null&&Tt(a,e,t),lu(e,t)}}var Ol=!0;function Hp(e,t,a,i){var r=B.T;B.T=null;var s=F.p;try{F.p=2,su(e,t,a,i)}finally{F.p=s,B.T=r}}function Pp(e,t,a,i){var r=B.T;B.T=null;var s=F.p;try{F.p=8,su(e,t,a,i)}finally{F.p=s,B.T=r}}function su(e,t,a,i){if(Ol){var r=ou(i);if(r===null)Io(e,t,i,Bl,a),zd(e,i);else if(Vp(r,e,t,a,i))i.stopPropagation();else if(zd(e,i),t&4&&-1<qp.indexOf(e)){for(;r!==null;){var s=Ui(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var d=Lt(s.pendingLanes);if(d!==0){var m=s;for(m.pendingLanes|=2,m.entangledLanes|=2;d;){var S=1<<31-ot(d);m.entanglements[1]|=S,d&=~S}na(s),(Ce&6)===0&&(vl=Fe()+500,$n(0))}}break;case 31:case 13:m=ui(s,2),m!==null&&Tt(m,s,2),xl(),lu(s,2)}if(s=ou(i),s===null&&Io(e,t,i,Bl,a),s===r)break;r=s}r!==null&&i.stopPropagation()}else Io(e,t,i,null,a)}}function ou(e){return e=us(e),uu(e)}var Bl=null;function uu(e){if(Bl=null,e=_i(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=h(t),e!==null)return e;e=null}else if(a===31){if(e=g(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Bl=e,null}function Rd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ri()){case Er:return 2;case Mr:return 8;case de:case Pe:return 32;case _e:return 268435456;default:return 32}default:return 32}}var cu=!1,Qa=null,Wa=null,Xa=null,lr=new Map,sr=new Map,Ka=[],qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zd(e,t){switch(e){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function or(e,t,a,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},t!==null&&(t=Ui(t),t!==null&&Ad(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function Vp(e,t,a,i,r){switch(t){case"focusin":return Qa=or(Qa,e,t,a,i,r),!0;case"dragenter":return Wa=or(Wa,e,t,a,i,r),!0;case"mouseover":return Xa=or(Xa,e,t,a,i,r),!0;case"pointerover":var s=r.pointerId;return lr.set(s,or(lr.get(s)||null,e,t,a,i,r)),!0;case"gotpointercapture":return s=r.pointerId,sr.set(s,or(sr.get(s)||null,e,t,a,i,r)),!0}return!1}function Cd(e){var t=_i(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=h(a),t!==null){e.blockedOn=t,rt(e.priority,function(){Td(a)});return}}else if(t===31){if(t=g(a),t!==null){e.blockedOn=t,rt(e.priority,function(){Td(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ou(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);os=i,a.target.dispatchEvent(i),os=null}else return t=Ui(a),t!==null&&Ad(t),e.blockedOn=a,!1;t.shift()}return!0}function kd(e,t,a){Ll(e)&&a.delete(t)}function jp(){cu=!1,Qa!==null&&Ll(Qa)&&(Qa=null),Wa!==null&&Ll(Wa)&&(Wa=null),Xa!==null&&Ll(Xa)&&(Xa=null),lr.forEach(kd),sr.forEach(kd)}function Nl(e,t){e.blockedOn===t&&(e.blockedOn=null,cu||(cu=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,jp)))}var Gl=null;function _d(e){Gl!==e&&(Gl=e,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Gl===e&&(Gl=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(uu(i||a)===null)continue;break}var s=Ui(a);s!==null&&(e.splice(t,3),t-=3,so(s,{pending:!0,data:r,method:a.method,action:i},i,r))}}))}function pn(e){function t(S){return Nl(S,e)}Qa!==null&&Nl(Qa,e),Wa!==null&&Nl(Wa,e),Xa!==null&&Nl(Xa,e),lr.forEach(t),sr.forEach(t);for(var a=0;a<Ka.length;a++){var i=Ka[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Cd(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var r=a[i],s=a[i+1],d=r[$e]||null;if(typeof s=="function")d||_d(a);else if(d){var m=null;if(s&&s.hasAttribute("formAction")){if(r=s,d=s[$e]||null)m=d.formAction;else if(uu(r)!==null)continue}else m=d.action;typeof m=="function"?a[i+1]=m:(a.splice(i,3),i-=3),_d(a)}}}function Ud(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function fu(e){this._internalRoot=e}Hl.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,i=Bt();Ed(a,i,e,t,null,null)},Hl.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ed(e.current,2,null,e,null,null),xl(),t[Nt]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ye();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ka.length&&t!==0&&t<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&Cd(e)}};var Dd=n.version;if(Dd!=="19.2.7")throw Error(l(527,Dd,"19.2.7"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=v(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Zp={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pl.isDisabled&&Pl.supportsFiber)try{ei=Pl.inject(Zp),Je=Pl}catch{}}return cr.createRoot=function(e,t){if(!c(e))throw Error(l(299));var a=!1,i="",r=H0,s=P0,d=q0;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Sd(e,1,!1,null,null,a,i,null,r,s,d,Ud),e[Nt]=t.current,Yo(e),new fu(t)},cr.hydrateRoot=function(e,t,a){if(!c(e))throw Error(l(299));var i=!1,r="",s=H0,d=P0,m=q0,S=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(d=a.onCaughtError),a.onRecoverableError!==void 0&&(m=a.onRecoverableError),a.formState!==void 0&&(S=a.formState)),t=Sd(e,1,!0,t,a??null,i,r,S,s,d,m,Ud),t.context=wd(null),a=t.current,i=Bt(),i=Ie(i),r=La(i),r.callback=null,Na(a,r,i),a=i,t.current.lanes=a,Ca(t,a),na(t),e[Nt]=t.current,Yo(e),new Hl(t)},cr.version="19.2.7",cr}var jd;function tm(){if(jd)return hu.exports;jd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(n){console.error(n)}}return u(),hu.exports=em(),hu.exports}var am=tm(),p=Du();const hr=Ip(p),_1=Yp({__proto__:null,default:hr},[p]),im=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M204.41,51.63a108,108,0,1,0,0,152.74A107.38,107.38,0,0,0,204.41,51.63Zm-17,17A83.85,83.85,0,0,1,196.26,79L169,111.09l-23.3-65.21A83.52,83.52,0,0,1,187.43,68.6Zm-118.85,0a83.44,83.44,0,0,1,51.11-24.2l14.16,39.65L65.71,71.61C66.64,70.59,67.59,69.59,68.58,68.6ZM48,153.7a84.48,84.48,0,0,1,3.4-60.3L92.84,101Zm20.55,33.7A83.94,83.94,0,0,1,59.74,177L87,144.91l23.3,65.21A83.53,83.53,0,0,1,68.58,187.4Zm36.36-63.61,15.18-17.85,23.06,4.21,7.88,22.06-15.17,17.85-23.06-4.21Zm82.49,63.61a83.49,83.49,0,0,1-51.11,24.2L122.15,172l68.14,12.44C189.36,185.41,188.41,186.41,187.43,187.4ZM163.16,155,208,102.3a84.43,84.43,0,0,1-3.41,60.3Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M195.88,60.12a96,96,0,1,0,0,135.76A96,96,0,0,0,195.88,60.12Zm-55.34,103h0l-36.68-6.69h0L91.32,121.3l24.14-28.41h0l36.68,6.69,12.54,35.12Z",opacity:"0.2"}),p.createElement("path",{d:"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,65.78a88.18,88.18,0,0,1,11,13.48L167.55,119,139.63,40.78A87.34,87.34,0,0,1,190.23,65.78ZM155.59,133l-18.16,21.37-27.59-5L100.41,123l18.16-21.37,27.59,5ZM65.77,65.78a87.34,87.34,0,0,1,56.66-25.59l17.51,49L58.3,74.32A88,88,0,0,1,65.77,65.78ZM46.65,161.54a88.41,88.41,0,0,1,2.53-72.62l51.21,9.35Zm19.12,28.68a88.18,88.18,0,0,1-11-13.48L88.45,137l27.92,78.18A87.34,87.34,0,0,1,65.77,190.22Zm124.46,0a87.34,87.34,0,0,1-56.66,25.59l-17.51-49,81.64,14.91A88,88,0,0,1,190.23,190.22Zm-34.62-32.49,53.74-63.27a88.41,88.41,0,0,1-2.53,72.62Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M232,128A104,104,0,0,0,54.46,54.46,104,104,0,0,0,128,232h.09A104,104,0,0,0,232,128ZM49.18,88.92l51.21,9.35L46.65,161.53A88.39,88.39,0,0,1,49.18,88.92Zm160.17,5.54a88.41,88.41,0,0,1-2.53,72.62l-51.21-9.35Zm-8.08-15.2L167.55,119,139.63,40.78a87.38,87.38,0,0,1,50.6,25A88.74,88.74,0,0,1,201.27,79.26ZM122.43,40.19l17.51,49L58.3,74.32a89.28,89.28,0,0,1,7.47-8.55A87.37,87.37,0,0,1,122.43,40.19ZM54.73,176.74,88.45,137l27.92,78.18a88,88,0,0,1-61.64-38.48Zm78.84,39.06-17.51-49L139.14,171h0l58.52,10.69a87.5,87.5,0,0,1-64.13,34.12Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M200.12,55.88A102,102,0,0,0,55.87,200.12,102,102,0,1,0,200.12,55.88Zm-102,66.67,19.65-23.14,29.86,5.46,10.21,28.58-19.65,23.14-29.86-5.46ZM209.93,90.69a90.24,90.24,0,0,1-2,78.63l-56.14-10.24Zm-6.16-11.28-36.94,43.48L136.66,38.42a89.31,89.31,0,0,1,55,25.94A91.33,91.33,0,0,1,203.77,79.41Zm-139.41-15A89.37,89.37,0,0,1,123.81,38.1L143,91.82,54.75,75.71A91.2,91.2,0,0,1,64.36,64.36ZM48,86.68l56.14,10.24L46.07,165.31a90.24,90.24,0,0,1,2-78.63Zm4.21,89.91,36.94-43.48,30.17,84.47a89.31,89.31,0,0,1-55-25.94A91.33,91.33,0,0,1,52.23,176.59Zm139.41,15a89.32,89.32,0,0,1-59.45,26.26L113,164.18l88.24,16.11A91.2,91.2,0,0,1,191.64,191.64Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,65.78a88.18,88.18,0,0,1,11,13.48L167.55,119,139.63,40.78A87.34,87.34,0,0,1,190.23,65.78ZM155.59,133l-18.16,21.37-27.59-5L100.41,123l18.16-21.37,27.59,5ZM65.77,65.78a87.34,87.34,0,0,1,56.66-25.59l17.51,49L58.3,74.32A88,88,0,0,1,65.77,65.78ZM46.65,161.54a88.41,88.41,0,0,1,2.53-72.62l51.21,9.35Zm19.12,28.68a88.18,88.18,0,0,1-11-13.48L88.45,137l27.92,78.18A87.34,87.34,0,0,1,65.77,190.22Zm124.46,0a87.34,87.34,0,0,1-56.66,25.59l-17.51-49,81.64,14.91A88,88,0,0,1,190.23,190.22Zm-34.62-32.49,53.74-63.27a88.41,88.41,0,0,1-2.53,72.62Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M198.71,57.29A100,100,0,1,0,57.29,198.71,100,100,0,1,0,198.71,57.29Zm10.37,114.27-61-11.14L210.4,87a92.26,92.26,0,0,1-1.32,84.52ZM95.87,122.13,117,97.24l32.14,5.86,11,30.77L139,158.76l-32.14-5.86ZM206.24,79.58l-40.13,47.25L133.75,36.2a92.09,92.09,0,0,1,72.49,43.38ZM63,63a91.31,91.31,0,0,1,62.26-26.88L146,94.41,51.32,77.11A92.94,92.94,0,0,1,63,63Zm-16,21.49,61,11.14L45.6,169a92.26,92.26,0,0,1,1.32-84.52Zm2.84,92,40.13-47.25,32.36,90.63a92.09,92.09,0,0,1-72.49-43.38Zm143.29,16.63a91.31,91.31,0,0,1-62.26,26.88L110,161.59l94.72,17.3A92.94,92.94,0,0,1,193.05,193.05Z"}))]]),nm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M219.23,159.2a196.66,196.66,0,0,0-18-31.2,196.66,196.66,0,0,0,18-31.2c11.84-26.31,11.69-47.48-.43-59.6s-33.29-12.27-59.6-.43a196.66,196.66,0,0,0-31.2,18,196.66,196.66,0,0,0-31.2-18c-26.31-11.84-47.48-11.69-59.6.43s-12.27,33.29-.43,59.6a196.66,196.66,0,0,0,18,31.2,196.66,196.66,0,0,0-18,31.2c-11.84,26.31-11.69,47.48.43,59.6h0C43.33,224.93,51.78,228,62,228c10,0,21.77-2.92,34.76-8.77a196.66,196.66,0,0,0,31.2-18,196.66,196.66,0,0,0,31.2,18c13,5.85,24.74,8.77,34.76,8.77,10.26,0,18.71-3.07,24.84-9.2h0C230.92,206.68,231.07,185.51,219.23,159.2Zm-17.41-105c5.25,5.26,1.79,26-16,53.78-5.61-6.66-11.65-13.25-18.07-19.67S154.7,75.83,148,70.22C175.82,52.39,196.56,48.93,201.82,54.18ZM171.24,128a288.6,288.6,0,0,1-20.51,22.73A288.6,288.6,0,0,1,128,171.24a288.6,288.6,0,0,1-22.73-20.51A288.6,288.6,0,0,1,84.76,128,298.55,298.55,0,0,1,128,84.76a286.83,286.83,0,0,1,22.73,20.51A286.83,286.83,0,0,1,171.24,128ZM54.18,54.18c1.46-1.45,4.1-2.24,7.75-2.24,9.53,0,25.94,5.39,46,18.28-6.66,5.61-13.25,11.65-19.67,18.07S75.83,101.3,70.22,108C52.39,80.18,48.93,59.44,54.18,54.18Zm0,147.64c-5.25-5.26-1.79-26,16-53.78,5.61,6.66,11.65,13.25,18.07,19.67s13,12.46,19.67,18.07C80.18,203.61,59.44,207.07,54.18,201.82Zm147.64,0c-5.26,5.25-26,1.79-53.78-16,6.66-5.61,13.25-11.65,19.67-18.07s12.46-13,18.07-19.67C203.61,175.82,207.07,196.56,201.82,201.82ZM144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M210.26,210.26c-17.23,17.23-68-5.63-113.46-51.06S28.51,63,45.74,45.74s68,5.63,113.46,51.06S227.49,193,210.26,210.26Z",opacity:"0.2"}),p.createElement("path",{d:"M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.47,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A302.47,302.47,0,0,0,141.27,70C172.15,49,196.91,43.81,204.55,51.45Zm-153.1,0c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.19,51.45,204.55ZM128,140a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm76.55,64.56c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M193.83,128a195.73,195.73,0,0,0,19.9-33.65c10.74-23.88,11-42.66.8-52.88s-29-9.94-52.88.8A195.73,195.73,0,0,0,128,62.17a195.73,195.73,0,0,0-33.65-19.9c-23.88-10.74-42.66-11-52.88-.8s-9.94,29,.8,52.88A195.73,195.73,0,0,0,62.17,128a195.73,195.73,0,0,0-19.9,33.65c-10.74,23.88-11,42.66-.8,52.88h0c5,5,12,7.47,20.63,7.47,9.1,0,20-2.76,32.25-8.27A195.73,195.73,0,0,0,128,193.83a195.73,195.73,0,0,0,33.65,19.9C173.9,219.24,184.8,222,193.9,222c8.64,0,15.65-2.49,20.63-7.47h0c10.23-10.22,9.94-29-.8-52.88A195.73,195.73,0,0,0,193.83,128ZM206,50c9.28,9.28,2.36,36.29-19.8,68a306.2,306.2,0,0,0-22.78-25.45A306.2,306.2,0,0,0,138,69.76C169.75,47.61,196.77,40.68,206,50Zm-27.19,78A289.17,289.17,0,0,1,155,155a289.17,289.17,0,0,1-27,23.88A289.17,289.17,0,0,1,101,155a290.62,290.62,0,0,1-23.88-27A297.06,297.06,0,0,1,128,77.14,290.74,290.74,0,0,1,155,101,289.17,289.17,0,0,1,178.85,128ZM50,50c2.68-2.69,6.84-4,12.17-4,13.11,0,33.3,8,55.87,23.81A302.94,302.94,0,0,0,92.54,92.54,306.2,306.2,0,0,0,69.76,118C47.6,86.25,40.68,59.24,50,50ZM50,206h0c-9.28-9.28-2.35-36.29,19.8-68a306.2,306.2,0,0,0,22.78,25.45A306.2,306.2,0,0,0,118,186.24C86.25,208.4,59.24,215.32,50,206ZM206,206c-9.28,9.28-36.29,2.35-68-19.81a304.26,304.26,0,0,0,25.45-22.77A306.2,306.2,0,0,0,186.24,138C208.4,169.75,215.32,196.76,206,206Zm-68-78a10,10,0,1,1-10-10A10,10,0,0,1,138,128Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M211.89,162.47A195.58,195.58,0,0,0,191.36,128a195.58,195.58,0,0,0,20.53-34.47c10.38-23.06,10.81-41,1.21-50.63s-27.57-9.17-50.63,1.21A195.58,195.58,0,0,0,128,64.64,195.58,195.58,0,0,0,93.53,44.11C70.47,33.73,52.49,33.3,42.9,42.9s-9.17,27.57,1.21,50.63A195.58,195.58,0,0,0,64.64,128a195.58,195.58,0,0,0-20.53,34.47c-10.38,23.06-10.81,41-1.21,50.63h0C47.5,217.7,54,220,62.12,220c8.78,0,19.41-2.71,31.41-8.11A195.58,195.58,0,0,0,128,191.36a195.58,195.58,0,0,0,34.47,20.53c12,5.4,22.63,8.11,31.41,8.11,8.09,0,14.62-2.3,19.22-6.9h0C222.7,203.51,222.27,185.53,211.89,162.47ZM207.45,48.55c10.27,10.28,3.14,39.05-21.1,72.84A301,301,0,0,0,162,94a301,301,0,0,0-27.43-24.31C168.4,45.4,197.17,38.27,207.45,48.55Zm-26,79.45a293.16,293.16,0,0,1-25,28.38,291.82,291.82,0,0,1-28.38,25,291.82,291.82,0,0,1-28.38-25,293.16,293.16,0,0,1-25-28.38A302.36,302.36,0,0,1,128,74.58a295.83,295.83,0,0,1,28.37,25A293.16,293.16,0,0,1,181.41,128ZM48.55,48.55c3.05-3,7.71-4.55,13.64-4.55,14.11,0,35.41,8.59,59.19,25.65a304.89,304.89,0,0,0-51.73,51.74C45.41,87.6,38.28,58.83,48.55,48.55Zm0,158.9c-10.27-10.28-3.14-39,21.1-72.84A301,301,0,0,0,94,162a301,301,0,0,0,27.43,24.31C87.6,210.59,58.83,217.72,48.55,207.45Zm158.9,0c-10.28,10.27-39,3.14-72.84-21.1A301,301,0,0,0,162,162a301,301,0,0,0,24.31-27.43C210.59,168.4,217.72,197.17,207.45,207.45ZM136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Z"}))]]),rm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4ZM128,84a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,84Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,156Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z",opacity:"0.2"}),p.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,60H178.13L163.32,37.78A4,4,0,0,0,160,36H96a4,4,0,0,0-3.32,1.78L77.85,60H48A20,20,0,0,0,28,80V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V80A20,20,0,0,0,208,60Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V80A12,12,0,0,1,48,68H80a4,4,0,0,0,3.33-1.78L98.13,44h59.72l14.82,22.22A4,4,0,0,0,176,68h32a12,12,0,0,1,12,12ZM128,92a40,40,0,1,0,40,40A40,40,0,0,0,128,92Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,128,164Z"}))]]),lm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),p.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),sm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M148,96V48a12,12,0,0,1,24,0V84h36a12,12,0,0,1,0,24H160A12,12,0,0,1,148,96ZM96,148H48a12,12,0,0,0,0,24H84v36a12,12,0,0,0,24,0V160A12,12,0,0,0,96,148Zm112,0H160a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V172h36a12,12,0,0,0,0-24ZM96,36A12,12,0,0,0,84,48V84H48a12,12,0,0,0,0,24H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,64V192a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192A16,16,0,0,1,208,64Z",opacity:"0.2"}),p.createElement("path",{d:"M152,96V48a8,8,0,0,1,16,0V88h40a8,8,0,0,1,0,16H160A8,8,0,0,1,152,96ZM96,152H48a8,8,0,0,0,0,16H88v40a8,8,0,0,0,16,0V160A8,8,0,0,0,96,152Zm112,0H160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168h40a8,8,0,0,0,0-16ZM96,40a8,8,0,0,0-8,8V88H48a8,8,0,0,0,0,16H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M152,96V48a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,208,104H160A8,8,0,0,1,152,96ZM96,152H48a8,8,0,0,0-5.66,13.66l48,48A8,8,0,0,0,104,208V160A8,8,0,0,0,96,152ZM99.06,40.61a8,8,0,0,0-8.72,1.73l-48,48A8,8,0,0,0,48,104H96a8,8,0,0,0,8-8V48A8,8,0,0,0,99.06,40.61ZM208,152H160a8,8,0,0,0-8,8v48a8,8,0,0,0,13.66,5.66l48-48A8,8,0,0,0,208,152Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M154,96V48a6,6,0,0,1,12,0V90h42a6,6,0,0,1,0,12H160A6,6,0,0,1,154,96ZM96,154H48a6,6,0,0,0,0,12H90v42a6,6,0,0,0,12,0V160A6,6,0,0,0,96,154Zm112,0H160a6,6,0,0,0-6,6v48a6,6,0,0,0,12,0V166h42a6,6,0,0,0,0-12ZM96,42a6,6,0,0,0-6,6V90H48a6,6,0,0,0,0,12H96a6,6,0,0,0,6-6V48A6,6,0,0,0,96,42Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M152,96V48a8,8,0,0,1,16,0V88h40a8,8,0,0,1,0,16H160A8,8,0,0,1,152,96ZM96,152H48a8,8,0,0,0,0,16H88v40a8,8,0,0,0,16,0V160A8,8,0,0,0,96,152Zm112,0H160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168h40a8,8,0,0,0,0-16ZM96,40a8,8,0,0,0-8,8V88H48a8,8,0,0,0,0,16H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M156,96V48a4,4,0,0,1,8,0V92h44a4,4,0,0,1,0,8H160A4,4,0,0,1,156,96ZM96,156H48a4,4,0,0,0,0,8H92v44a4,4,0,0,0,8,0V160A4,4,0,0,0,96,156Zm112,0H160a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V164h44a4,4,0,0,0,0-8ZM96,44a4,4,0,0,0-4,4V92H48a4,4,0,0,0,0,8H96a4,4,0,0,0,4-4V48A4,4,0,0,0,96,44Z"}))]]),om=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M220,48V88a12,12,0,0,1-24,0V60H168a12,12,0,0,1,0-24h40A12,12,0,0,1,220,48ZM88,196H60V168a12,12,0,0,0-24,0v40a12,12,0,0,0,12,12H88a12,12,0,0,0,0-24Zm120-40a12,12,0,0,0-12,12v28H168a12,12,0,0,0,0,24h40a12,12,0,0,0,12-12V168A12,12,0,0,0,208,156ZM88,36H48A12,12,0,0,0,36,48V88a12,12,0,0,0,24,0V60H88a12,12,0,0,0,0-24Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,48V208H48V48Z",opacity:"0.2"}),p.createElement("path",{d:"M216,48V88a8,8,0,0,1-16,0V56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48ZM88,200H56V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H88a8,8,0,0,0,0-16Zm120-40a8,8,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M93.66,202.34A8,8,0,0,1,88,216H48a8,8,0,0,1-8-8V168a8,8,0,0,1,13.66-5.66ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,88,40ZM211.06,160.61a8,8,0,0,0-8.72,1.73l-40,40A8,8,0,0,0,168,216h40a8,8,0,0,0,8-8V168A8,8,0,0,0,211.06,160.61ZM208,40H168a8,8,0,0,0-5.66,13.66l40,40A8,8,0,0,0,216,88V48A8,8,0,0,0,208,40Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M214,48V88a6,6,0,0,1-12,0V54H168a6,6,0,0,1,0-12h40A6,6,0,0,1,214,48ZM88,202H54V168a6,6,0,0,0-12,0v40a6,6,0,0,0,6,6H88a6,6,0,0,0,0-12Zm120-40a6,6,0,0,0-6,6v34H168a6,6,0,0,0,0,12h40a6,6,0,0,0,6-6V168A6,6,0,0,0,208,162ZM88,42H48a6,6,0,0,0-6,6V88a6,6,0,0,0,12,0V54H88a6,6,0,0,0,0-12Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,48V88a8,8,0,0,1-16,0V56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48ZM88,200H56V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H88a8,8,0,0,0,0-16Zm120-40a8,8,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M212,48V88a4,4,0,0,1-8,0V52H168a4,4,0,0,1,0-8h40A4,4,0,0,1,212,48ZM88,204H52V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H88a4,4,0,0,0,0-8Zm120-40a4,4,0,0,0-4,4v36H168a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,208,164ZM88,44H48a4,4,0,0,0-4,4V88a4,4,0,0,0,8,0V52H88a4,4,0,0,0,0-8Z"}))]]),um=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V184a12,12,0,0,0-24,0v27.13A84.18,84.18,0,0,1,44.87,140H72a12,12,0,0,0,0-24H44.87A84.18,84.18,0,0,1,116,44.87V72a12,12,0,0,0,24,0V44.87A84.18,84.18,0,0,1,211.13,116H184a12,12,0,0,0,0,24h27.13A84.18,84.18,0,0,1,140,211.13Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),p.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V184a8,8,0,0,0-16,0v31.63A88.13,88.13,0,0,1,40.37,136H72a8,8,0,0,0,0-16H40.37A88.13,88.13,0,0,1,120,40.37V72a8,8,0,0,0,16,0V40.37A88.13,88.13,0,0,1,215.63,120H184a8,8,0,0,0,0,16h31.63A88.13,88.13,0,0,1,136,215.63Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M176,136h23.54A72.11,72.11,0,0,1,136,199.54V176a8,8,0,0,0-16,0v23.54A72.11,72.11,0,0,1,56.46,136H80a8,8,0,0,0,0-16H56.46A72.11,72.11,0,0,1,120,56.46V80a8,8,0,0,0,16,0V56.46A72.11,72.11,0,0,1,199.54,120H176a8,8,0,0,0,0,16Zm56-8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V184a6,6,0,0,0-12,0v33.8A90.15,90.15,0,0,1,38.2,134H72a6,6,0,0,0,0-12H38.2A90.15,90.15,0,0,1,122,38.2V72a6,6,0,0,0,12,0V38.2A90.15,90.15,0,0,1,217.8,122H184a6,6,0,0,0,0,12h33.8A90.15,90.15,0,0,1,134,217.8Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V184a8,8,0,0,0-16,0v31.63A88.13,88.13,0,0,1,40.37,136H72a8,8,0,0,0,0-16H40.37A88.13,88.13,0,0,1,120,40.37V72a8,8,0,0,0,16,0V40.37A88.13,88.13,0,0,1,215.63,120H184a8,8,0,0,0,0,16h31.63A88.13,88.13,0,0,1,136,215.63Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V184a4,4,0,0,0-8,0v35.91A92.13,92.13,0,0,1,36.09,132H72a4,4,0,0,0,0-8H36.09A92.13,92.13,0,0,1,124,36.09V72a4,4,0,0,0,8,0V36.09A92.13,92.13,0,0,1,219.91,124H184a4,4,0,0,0,0,8h35.91A92.13,92.13,0,0,1,132,219.91Z"}))]]),cm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,100H132.92l78.14-20.63a12,12,0,0,0,8.52-14.75l-8.16-30a19.94,19.94,0,0,0-24.3-13.95L34.79,60.87a19.74,19.74,0,0,0-12.14,9.27,19.48,19.48,0,0,0-1.95,15L28,112v88a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V112A12,12,0,0,0,216,100ZM124.89,61.91l18.29,10.56-25.95,6.85L98.94,68.76Zm64.45-17,3.91,14.35-17.13,4.52L157.83,53.21ZM66,77.46,84.29,88l-35.4,9.35L45,83ZM204,196H52V124H204Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M67.71,64.59l47.79,27.6L40.43,112,32.27,82a7.76,7.76,0,0,1,5.58-9.52ZM199.84,37.76a7.9,7.9,0,0,0-9.66-5.49L126.61,49.05,174.4,76.64,208,67.77Z",opacity:"0.2"}),p.createElement("path",{d:"M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07L164.57,71,136.44,54.72ZM77.55,70.27l28.12,16.24-59.6,15.73-6-22.08Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,106H86.68L209.53,73.57a6,6,0,0,0,4.26-7.38l-8.16-30a13.94,13.94,0,0,0-17-9.72L36.32,66.67a13.77,13.77,0,0,0-8.48,6.47,13.57,13.57,0,0,0-1.36,10.42L34,111.34c0,.22,0,.44,0,.66v88a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V112A6,6,0,0,0,216,106ZM125.75,55.48l33,19.07-42.43,11.2-33-19.07Zm66-17.41a1.92,1.92,0,0,1,2.34,1.26l6.57,24.18L175.26,70.2l-33-19.07ZM38.23,79.14a1.85,1.85,0,0,1,1.15-.87L66.86,71l33,19.08L44.66,104.68l-6.6-24.27A1.63,1.63,0,0,1,38.23,79.14ZM210,200a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V118H210Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,104H102.09L210,75.51a8,8,0,0,0,5.68-9.84l-8.16-30a15.93,15.93,0,0,0-19.42-11.13L35.81,64.74a15.75,15.75,0,0,0-9.7,7.4,15.51,15.51,0,0,0-1.55,12L32,111.56c0,.14,0,.29,0,.44v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V112A8,8,0,0,0,216,104ZM192.16,40l6,22.07-22.62,6L147.42,51.83Zm-66.69,17.6,28.12,16.24-36.94,9.75L88.53,67.37Zm-79.4,44.62-6-22.08,26.5-7L94.69,89.4ZM208,200H48V120H208v80Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,108H71.26L209,71.64a4,4,0,0,0,2.84-4.92l-8.16-30a11.92,11.92,0,0,0-14.54-8.31L36.83,68.61a11.78,11.78,0,0,0-7.26,5.53A11.59,11.59,0,0,0,28.41,83l7.67,28.19A3.87,3.87,0,0,0,36,112v88a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V112A4,4,0,0,0,216,108ZM126,53.33l38,21.92L116.08,87.9,78.12,66Zm65.16-17.2a4,4,0,0,1,1-.13A3.88,3.88,0,0,1,196,38.81l7.1,26.12L175,72.35,137,50.43Zm-154.7,42a3.86,3.86,0,0,1,2.37-1.8l28.27-7.46,38,21.91L43.25,107.12,36.13,80.94A3.66,3.66,0,0,1,36.5,78.14ZM212,200a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V116H212Z"}))]]),fm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M248.59,58.67c-6.31-10.87-23-21.06-66.16-9.71A95.94,95.94,0,0,0,32,128q0,3.6.26,7.14C.56,166.86,1.1,186.4,7.44,197.33,13.4,207.61,25.3,212,40.68,212c9.79,0,21-1.78,32.95-4.91A95.94,95.94,0,0,0,224,128c0-2.41-.09-4.79-.27-7.16,14.31-14.38,23.86-28.21,27-40C253.55,70.42,251.12,63,248.59,58.67ZM128,56a72.11,72.11,0,0,1,70.19,56C184,124.73,165,138.59,141.92,151.86c-21.74,12.49-43.55,22.36-63.09,28.65A72,72,0,0,1,128,56ZM28.19,185.29c-.61-1.07-.17-8.22,10.67-21.71A95.77,95.77,0,0,0,52.35,187C35.12,189.61,28.85,186.41,28.19,185.29ZM128,200a71.66,71.66,0,0,1-22.56-3.64,394.1,394.1,0,0,0,48.42-23.69A388.11,388.11,0,0,0,198.43,143,72.12,72.12,0,0,1,128,200ZM227.57,74.65c-1.28,4.78-4.81,10.87-10.39,17.8A95.74,95.74,0,0,0,203.68,69c15.83-2.37,23.17,0,24.15,1.71C228,71,228.21,72.28,227.57,74.65Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,128a88,88,0,1,1-88-88A88,88,0,0,1,216,128Z",opacity:"0.2"}),p.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.85-16.16-58.5-8.66A96,96,0,0,0,32.81,140.3C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4,96,96,0,0,0,153.78-88.25c12.51-13,20.83-25.35,23.66-35.92C248.83,72.51,248.24,66.07,245.11,60.68Zm-13.69,15c-6.11,22.78-48.65,57.31-87.52,79.64-67.81,39-113.62,41.52-119.16,32-1.46-2.51-.65-7.24,2.22-13a80.06,80.06,0,0,1,10.28-15.05,95.53,95.53,0,0,0,6.23,14.18,4,4,0,0,0,4,2.12,122.14,122.14,0,0,0,16.95-3.32c21.23-5.55,46.63-16.48,71.52-30.78s47-30.66,62.45-46.15A122.74,122.74,0,0,0,209.7,82.45a4,4,0,0,0,.17-4.52,96.26,96.26,0,0,0-9.1-12.46c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M243.39,61.68c-7.24-12.48-27-15-57.24-7.49A93.92,93.92,0,0,0,34.05,128a94.5,94.5,0,0,0,.9,13c-21.86,22.38-29.56,40.78-22.29,53.32,4.5,7.76,14,11.69,27.86,11.69a116.38,116.38,0,0,0,25-3.16c1.45-.32,2.92-.68,4.41-1a93.95,93.95,0,0,0,151.19-86.89c12.65-13,21.11-25.32,23.86-35.6C246.76,72.53,246.24,66.59,243.39,61.68ZM128,46a82.12,82.12,0,0,1,80.19,64.94c-16,15.3-38.14,31.67-63.3,46.12C117.49,172.82,92.79,183,72.85,188.6A82,82,0,0,1,128,46ZM23,188.3c-3.52-6.07,2.31-18.56,15-33a94,94,0,0,0,21.07,36.62C39.42,195.74,26.39,194.08,23,188.3ZM128,210a81.41,81.41,0,0,1-43.35-12.45c20.68-6.71,43.56-17.06,66.22-30.08,22.83-13.12,43.13-27.67,59.05-41.91,0,.81.06,1.62.06,2.44A82.08,82.08,0,0,1,128,210ZM233.35,76.21c-1.88,7-7.28,15.49-15.36,24.61a93.92,93.92,0,0,0-21.1-36.7c15.82-3.05,32-3.49,36.12,3.58C234.2,69.75,234.31,72.62,233.35,76.21Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M241.66,62.68c-6.73-11.58-26.58-13.8-56-6.3A92,92,0,0,0,37,141.7c-21.38,21.69-29.44,40-22.68,51.62,4.13,7.11,13,10.71,26,10.71A115.25,115.25,0,0,0,65,200.9c1.74-.39,3.52-.82,5.32-1.28A92,92,0,0,0,220,128a92.84,92.84,0,0,0-1-13.73c12.77-13,21.31-25.28,24-35.47C244.69,72.54,244.23,67.12,241.66,62.68ZM128,44a84.13,84.13,0,0,1,82.38,67.56c-16.17,15.69-38.8,32.48-64.49,47.24-27.31,15.69-52.81,26.25-73.61,32A84,84,0,0,1,128,44ZM21.25,189.3C17,182,23.75,167.7,39,151.24A92,92,0,0,0,63,193.09C40.86,198,25.47,196.58,21.25,189.3ZM128,212a83.58,83.58,0,0,1-48-15.1c21.58-6.58,45.83-17.37,69.85-31.16,24.25-13.94,45.61-29.46,61.83-44.44.18,2.21.3,4.44.3,6.7A84.1,84.1,0,0,1,128,212ZM235.28,76.73c-2.13,8-8.58,17.65-18.25,28.06a92.07,92.07,0,0,0-24.12-41.92c21.85-4.82,37.59-3.46,41.83,3.83C236.2,69.23,236.39,72.6,235.28,76.73Z"}))]]),dm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M243.16,68.85a17.4,17.4,0,0,0-15.26-12l-34.52-2.72L180.12,22.66a17.52,17.52,0,0,0-32.24,0L134.62,54.09l-34.51,2.72a17.39,17.39,0,0,0-9.93,30.62l26.17,22.1-8,33a17.46,17.46,0,0,0,26,19L164,143.66l29.59,17.81a17.46,17.46,0,0,0,26-19l-8-33,26.17-22.1A17.3,17.3,0,0,0,243.16,68.85ZM190.5,96a12,12,0,0,0-3.92,12l6,24.91-22.41-13.5a12.06,12.06,0,0,0-12.38,0l-22.41,13.5,6-24.91a12,12,0,0,0-3.93-12L118,79.48l25.83-2a12,12,0,0,0,10.11-7.3L164,46.2l10.11,23.94a12,12,0,0,0,10.11,7.3l25.82,2Zm-158,88.52a12,12,0,0,1-17-17l51.76-51.75a12,12,0,0,1,17,17Zm63.59-8.57a12,12,0,0,1,0,17l-47.59,47.6a12,12,0,0,1-17-17l47.6-47.59A12,12,0,0,1,96.08,175.92Zm62.44,9.56a12,12,0,0,1,0,17l-38,38a12,12,0,0,1-17-17l38-38A12,12,0,0,1,158.52,185.48Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M230.08,78.26l-31.84,26.88L208,145.33a5.46,5.46,0,0,1-8.19,5.86L164,129.66l-35.78,21.53a5.46,5.46,0,0,1-8.19-5.86l9.73-40.19L97.92,78.26a5.38,5.38,0,0,1,3.13-9.48l41.79-3.31,16.1-38.14a5.51,5.51,0,0,1,10.12,0l16.1,38.14L227,68.78A5.38,5.38,0,0,1,230.08,78.26Z",opacity:"0.2"}),p.createElement("path",{d:"M239.35,70.08a13.41,13.41,0,0,0-11.77-9.28l-36.94-2.92L176.43,24.22a13.51,13.51,0,0,0-24.86,0L137.36,57.88,100.42,60.8a13.39,13.39,0,0,0-7.66,23.58l28.06,23.68-8.56,35.39a13.32,13.32,0,0,0,5.1,13.91,13.51,13.51,0,0,0,15,.69L164,139l31.65,19.06a13.54,13.54,0,0,0,15-.69,13.34,13.34,0,0,0,5.09-13.91l-8.56-35.39,28.06-23.68A13.32,13.32,0,0,0,239.35,70.08ZM193.08,99a8,8,0,0,0-2.61,8l8.28,34.21L168.13,122.8a8,8,0,0,0-8.25,0l-30.62,18.43L137.54,107a8,8,0,0,0-2.62-8L108,76.26l35.52-2.81a8,8,0,0,0,6.74-4.87L164,35.91l13.79,32.67a8,8,0,0,0,6.74,4.87l35.53,2.81Zm-105,24.18L29.66,181.66a8,8,0,0,1-11.32-11.32l58.45-58.45a8,8,0,0,1,11.32,11.32Zm10.81,49.87a8,8,0,0,1,0,11.31L45.66,237.66a8,8,0,0,1-11.32-11.32l53.27-53.26A8,8,0,0,1,98.92,173.08Zm73-1a8,8,0,0,1,0,11.32l-54.28,54.28a8,8,0,0,1-11.32-11.32l54.29-54.28A8,8,0,0,1,171.94,172.06Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M235.24,84.38l-28.06,23.68,8.56,35.39a13.34,13.34,0,0,1-5.09,13.91,13.54,13.54,0,0,1-15,.69L164,139l-31.65,19.06a13.51,13.51,0,0,1-15-.69,13.32,13.32,0,0,1-5.1-13.91l8.56-35.39L92.76,84.38a13.39,13.39,0,0,1,7.66-23.58l36.94-2.92,14.21-33.66a13.51,13.51,0,0,1,24.86,0l14.21,33.66,36.94,2.92a13.39,13.39,0,0,1,7.66,23.58ZM88.11,111.89a8,8,0,0,0-11.32,0L18.34,170.34a8,8,0,0,0,11.32,11.32l58.45-58.45A8,8,0,0,0,88.11,111.89Zm-.5,61.19L34.34,226.34a8,8,0,0,0,11.32,11.32l53.26-53.27a8,8,0,0,0-11.31-11.31Zm73-1-54.29,54.28a8,8,0,0,0,11.32,11.32l54.28-54.28a8,8,0,0,0-11.31-11.32Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M237.45,70.69a11.42,11.42,0,0,0-10-7.9l-38.16-3L174.59,25a11.51,11.51,0,0,0-21.18,0L138.73,59.78l-38.15,3a11.39,11.39,0,0,0-6.53,20.06l29,24.48-8.86,36.59a11.35,11.35,0,0,0,4.34,11.83,11.51,11.51,0,0,0,12.78.58L164,136.66l32.69,19.67a11.5,11.5,0,0,0,12.77-.58,11.33,11.33,0,0,0,4.34-11.83L205,107.33l29-24.48A11.32,11.32,0,0,0,237.45,70.69Zm-43.08,29.87a6,6,0,0,0-2,6l9.41,38.86L167.1,124.52a6,6,0,0,0-6.19,0l-34.72,20.89,9.41-38.86a6,6,0,0,0-2-6L102.94,74.65l40.37-3.19a6,6,0,0,0,5.06-3.65l15.63-37,15.63,37a6,6,0,0,0,5.06,3.65l40.37,3.19ZM86.69,121.79,28.24,180.24a6,6,0,0,1-8.48-8.48l58.45-58.45a6,6,0,0,1,8.48,8.48Zm10.82,52.7a6,6,0,0,1,0,8.49L44.24,236.24a6,6,0,0,1-8.48-8.48L89,174.49A6,6,0,0,1,97.51,174.49Zm73-1a6,6,0,0,1,0,8.48l-54.29,54.28a6,6,0,0,1-8.48-8.48L162,173.48A6,6,0,0,1,170.53,173.48Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M239.35,70.08a13.41,13.41,0,0,0-11.77-9.28l-36.94-2.92L176.43,24.22a13.51,13.51,0,0,0-24.86,0L137.36,57.88,100.42,60.8a13.39,13.39,0,0,0-7.66,23.58l28.06,23.68-8.56,35.39a13.32,13.32,0,0,0,5.1,13.91,13.51,13.51,0,0,0,15,.69L164,139l31.65,19.06a13.54,13.54,0,0,0,15-.69,13.34,13.34,0,0,0,5.09-13.91l-8.56-35.39,28.06-23.68A13.32,13.32,0,0,0,239.35,70.08ZM193.08,99a8,8,0,0,0-2.61,8l8.28,34.21L168.13,122.8a8,8,0,0,0-8.25,0l-30.62,18.43L137.54,107a8,8,0,0,0-2.62-8L108,76.26l35.52-2.81a8,8,0,0,0,6.74-4.87L164,35.91l13.79,32.67a8,8,0,0,0,6.74,4.87l35.53,2.81Zm-105,24.18L29.66,181.66a8,8,0,0,1-11.32-11.32l58.45-58.45a8,8,0,0,1,11.32,11.32Zm10.81,49.87a8,8,0,0,1,0,11.31L45.66,237.66a8,8,0,0,1-11.32-11.32l53.27-53.26A8,8,0,0,1,98.92,173.08Zm73-1a8,8,0,0,1,0,11.32l-54.28,54.28a8,8,0,0,1-11.32-11.32l54.29-54.28A8,8,0,0,1,171.94,172.06Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M235.55,71.3a9.44,9.44,0,0,0-8.28-6.51L187.9,61.68,172.75,25.77a9.51,9.51,0,0,0-17.49,0L140.1,61.68l-39.36,3.11a9.39,9.39,0,0,0-5.4,16.53l30,25.28-9.14,37.79a9.24,9.24,0,0,0,3.58,9.75,9.52,9.52,0,0,0,10.56.48L164,134.32l33.72,20.3a9.52,9.52,0,0,0,10.56-.48,9.24,9.24,0,0,0,3.58-9.75l-9.15-37.79,29.95-25.28A9.34,9.34,0,0,0,235.55,71.3Zm-8.05,3.91-31.84,26.87a4,4,0,0,0-1.31,4l9.73,40.19a1.28,1.28,0,0,1-.53,1.42,1.5,1.5,0,0,1-1.71.07l-35.77-21.53a4,4,0,0,0-4.13,0l-35.78,21.53a1.48,1.48,0,0,1-1.7-.07,1.3,1.3,0,0,1-.54-1.42l9.73-40.19a4,4,0,0,0-1.31-4L100.51,75.21a1.29,1.29,0,0,1-.44-1.46,1.4,1.4,0,0,1,1.3-1l41.79-3.3A4,4,0,0,0,146.53,67l16.1-38.15a1.51,1.51,0,0,1,2.75,0L181.48,67a4,4,0,0,0,3.37,2.43l41.79,3.3a1.39,1.39,0,0,1,1.29,1A1.27,1.27,0,0,1,227.5,75.21ZM85.28,120.38,26.83,178.83a4,4,0,0,1-5.66-5.66l58.45-58.45a4,4,0,0,1,5.66,5.66Zm10.81,55.53a4,4,0,0,1,0,5.65L42.83,234.83a4,4,0,0,1-5.66-5.66l53.27-53.26A4,4,0,0,1,96.09,175.91Zm73-1a4,4,0,0,1,0,5.66l-54.28,54.28a4,4,0,0,1-5.66-5.66l54.29-54.28A4,4,0,0,1,169.11,174.89Z"}))]]),hm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M40,92H70.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24H137.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24Zm64-24A12,12,0,1,1,92,80,12,12,0,0,1,104,68Zm112,96H201.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24h94.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24Zm-48,24a12,12,0,1,1,12-12A12,12,0,0,1,168,188Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M128,80a24,24,0,1,1-24-24A24,24,0,0,1,128,80Zm40,72a24,24,0,1,0,24,24A24,24,0,0,0,168,152Z",opacity:"0.2"}),p.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M32,80a8,8,0,0,1,8-8H77.17a28,28,0,0,1,53.66,0H216a8,8,0,0,1,0,16H130.83a28,28,0,0,1-53.66,0H40A8,8,0,0,1,32,80Zm184,88H194.83a28,28,0,0,0-53.66,0H40a8,8,0,0,0,0,16H141.17a28,28,0,0,0,53.66,0H216a8,8,0,0,0,0-16Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M40,86H74.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12H133.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12Zm64-24A18,18,0,1,1,86,80,18,18,0,0,1,104,62ZM216,170H197.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12h98.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12Zm-48,24a18,18,0,1,1,18-18A18,18,0,0,1,168,194Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M40,84H76.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8H131.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8Zm64-24A20,20,0,1,1,84,80,20,20,0,0,1,104,60ZM216,172H195.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8H140.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8Zm-48,24a20,20,0,1,1,20-20A20,20,0,0,1,168,196Z"}))]]),pm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M250,138a12,12,0,0,1-24,0,94.11,94.11,0,0,0-94-94,84.09,84.09,0,0,0-84,84,74.09,74.09,0,0,0,74,74,64.07,64.07,0,0,0,64-64,54.06,54.06,0,0,0-54-54,44.05,44.05,0,0,0-44,44,34,34,0,0,0,34,34,24,24,0,0,0,24-24,14,14,0,0,0-14-14,4,4,0,0,0-2.82,1.17A12,12,0,0,1,124,148a20,20,0,0,1-20-20,28,28,0,0,1,28-28,38,38,0,0,1,38,38,48.05,48.05,0,0,1-48,48,58.07,58.07,0,0,1-58-58,68.07,68.07,0,0,1,68-68,78.09,78.09,0,0,1,78,78,88.1,88.1,0,0,1-88,88,98.11,98.11,0,0,1-98-98A108.12,108.12,0,0,1,132,20,118.13,118.13,0,0,1,250,138Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M240,144H208a80,80,0,0,1-80,80,88,88,0,0,1-88-88,96,96,0,0,1,96-96A104,104,0,0,1,240,144Z",opacity:"0.2"}),p.createElement("path",{d:"M248,144a8,8,0,0,1-16,0,96.11,96.11,0,0,0-96-96,88.1,88.1,0,0,0-88,88,80.09,80.09,0,0,0,80,80,72.08,72.08,0,0,0,72-72,64.07,64.07,0,0,0-64-64,56.06,56.06,0,0,0-56,56,48.05,48.05,0,0,0,48,48,40,40,0,0,0,40-40,32,32,0,0,0-32-32,24,24,0,0,0-24,24,16,16,0,0,0,16,16,8,8,0,0,0,8-8,8,8,0,0,1,0-16,16,16,0,0,1,16,16,24,24,0,0,1-24,24,32,32,0,0,1-32-32,40,40,0,0,1,40-40,48.05,48.05,0,0,1,48,48,56.06,56.06,0,0,1-56,56,64.07,64.07,0,0,1-64-64,72.08,72.08,0,0,1,72-72,80.09,80.09,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.11,96.11,0,0,1-96-96A104.11,104.11,0,0,1,136,32,112.12,112.12,0,0,1,248,144Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M248,144a8,8,0,0,1-16,0,96.11,96.11,0,0,0-96-96c-1.4,0-2.8,0-4.18.1A80.06,80.06,0,0,0,56,128a64.07,64.07,0,0,0,64,64,44.05,44.05,0,0,0,44-44,32,32,0,0,0-32-32,8,8,0,0,0,0,16,16,16,0,0,1,16,16,28,28,0,0,1-28,28,48.05,48.05,0,0,1-48-48,64.07,64.07,0,0,1,64-64,80.09,80.09,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.11,96.11,0,0,1-96-96A104.11,104.11,0,0,1,136,32,112.12,112.12,0,0,1,248,144Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M246,144a6,6,0,0,1-12,0,98.11,98.11,0,0,0-98-98,90.1,90.1,0,0,0-90,90,82.1,82.1,0,0,0,82,82,74.09,74.09,0,0,0,74-74,66.08,66.08,0,0,0-66-66,58.07,58.07,0,0,0-58,58,50.06,50.06,0,0,0,50,50,42,42,0,0,0,42-42,34,34,0,0,0-34-34,26,26,0,0,0-26,26,18,18,0,0,0,18,18,10,10,0,0,0,10-10,2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14,22,22,0,0,1-22,22,30,30,0,0,1-30-30,38,38,0,0,1,38-38,46.06,46.06,0,0,1,46,46,54.06,54.06,0,0,1-54,54,62.07,62.07,0,0,1-62-62,70.08,70.08,0,0,1,70-70,78.09,78.09,0,0,1,78,78,86.1,86.1,0,0,1-86,86,94.11,94.11,0,0,1-94-94A102.12,102.12,0,0,1,136,34,110.13,110.13,0,0,1,246,144Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M248,144a8,8,0,0,1-16,0,96.11,96.11,0,0,0-96-96,88.1,88.1,0,0,0-88,88,80.09,80.09,0,0,0,80,80,72.08,72.08,0,0,0,72-72,64.07,64.07,0,0,0-64-64,56.06,56.06,0,0,0-56,56,48.05,48.05,0,0,0,48,48,40,40,0,0,0,40-40,32,32,0,0,0-32-32,24,24,0,0,0-24,24,16,16,0,0,0,16,16,8,8,0,0,0,8-8,8,8,0,0,1,0-16,16,16,0,0,1,16,16,24,24,0,0,1-24,24,32,32,0,0,1-32-32,40,40,0,0,1,40-40,48.05,48.05,0,0,1,48,48,56.06,56.06,0,0,1-56,56,64.07,64.07,0,0,1-64-64,72.08,72.08,0,0,1,72-72,80.09,80.09,0,0,1,80,80,88.1,88.1,0,0,1-88,88,96.11,96.11,0,0,1-96-96A104.11,104.11,0,0,1,136,32,112.12,112.12,0,0,1,248,144Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M244,144a4,4,0,0,1-8,0A100.11,100.11,0,0,0,136,44a92.1,92.1,0,0,0-92,92,84.09,84.09,0,0,0,84,84,76.08,76.08,0,0,0,76-76,68.07,68.07,0,0,0-68-68,60.07,60.07,0,0,0-60,60,52.06,52.06,0,0,0,52,52,44.05,44.05,0,0,0,44-44,36,36,0,0,0-36-36,28,28,0,0,0-28,28,20,20,0,0,0,20,20,12,12,0,0,0,12-12,4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12,20,20,0,0,1-20,20,28,28,0,0,1-28-28,36,36,0,0,1,36-36,44.05,44.05,0,0,1,44,44,52.06,52.06,0,0,1-52,52,60.07,60.07,0,0,1-60-60,68.07,68.07,0,0,1,68-68,76.08,76.08,0,0,1,76,76,84.09,84.09,0,0,1-84,84,92.1,92.1,0,0,1-92-92A100.11,100.11,0,0,1,136,36,108.12,108.12,0,0,1,244,144Z"}))]]),mm=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),p.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"}))]]),gm=p.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Rt=p.forwardRef((u,n)=>{const{alt:o,color:l,size:c,weight:f,mirrored:h,children:g,weights:y,...v}=u,{color:b="currentColor",size:x,weight:w="regular",mirrored:T=!1,...k}=p.useContext(gm);return p.createElement("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:c??x,height:c??x,fill:l??b,viewBox:"0 0 256 256",transform:h||T?"scale(-1, 1)":void 0,...k,...v},!!o&&p.createElement("title",null,o),g,y.get(f??w))});Rt.displayName="IconBase";const U1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:im}));U1.displayName="ApertureIcon";const vm=U1,D1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:nm}));D1.displayName="AtomIcon";const ym=D1,O1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:rm}));O1.displayName="CameraIcon";const Zd=O1,B1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:lm}));B1.displayName="CaretDownIcon";const xm=B1,L1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:sm}));L1.displayName="CornersInIcon";const bm=L1,N1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:om}));N1.displayName="CornersOutIcon";const Sm=N1,G1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:um}));G1.displayName="CrosshairSimpleIcon";const wm=G1,H1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:cm}));H1.displayName="FilmSlateIcon";const Em=H1,P1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:fm}));P1.displayName="PlanetIcon";const Mm=P1,q1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:dm}));q1.displayName="ShootingStarIcon";const Am=q1,V1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:hm}));V1.displayName="SlidersHorizontalIcon";const Tm=V1,j1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:pm}));j1.displayName="SpiralIcon";const Rm=j1,Z1=p.forwardRef((u,n)=>p.createElement(Rt,{ref:n,...u,weights:mm}));Z1.displayName="XIcon";const F1=Z1,zm="modulepreload",Cm=function(u,n){return new URL(u,n).href},Fd={},Yd=function(n,o,l){let c=Promise.resolve();if(o&&o.length>0){let v=function(b){return Promise.all(b.map(x=>Promise.resolve(x).then(w=>({status:"fulfilled",value:w}),w=>({status:"rejected",reason:w}))))};const h=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),y=g?.nonce||g?.getAttribute("nonce");c=v(o.map(b=>{if(b=Cm(b,l),b in Fd)return;Fd[b]=!0;const x=b.endsWith(".css"),w=x?'[rel="stylesheet"]':"";if(l)for(let k=h.length-1;k>=0;k--){const O=h[k];if(O.href===b&&(!x||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${b}"]${w}`))return;const T=document.createElement("link");if(T.rel=x?"stylesheet":zm,x||(T.as="script"),T.crossOrigin="",T.href=b,y&&T.setAttribute("nonce",y),document.head.appendChild(T),x)return new Promise((k,O)=>{T.addEventListener("load",k),T.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${b}`)))})}))}function f(h){const g=new Event("vite:preloadError",{cancelable:!0});if(g.payload=h,window.dispatchEvent(g),!g.defaultPrevented)throw h}return c.then(h=>{for(const g of h||[])g.status==="rejected"&&f(g.reason);return n().catch(f)})},Ou=`
fn h13(p0: vec3f) -> f32 { var p = fract(p0*0.1031); p += dot(p, p.zyx+vec3f(31.32)); return fract((p.x+p.y)*p.z); }
fn h33(p0: vec3f) -> vec3f { var p = fract(p0*vec3f(0.1031,0.1030,0.0973)); p += dot(p, p.yxz+vec3f(33.33)); return fract((p.xxy+p.yxx)*p.zyx); }
fn vno(p0: vec3f) -> f32 {
  let i = floor(p0); var f = fract(p0); f = f*f*(3.0-2.0*f);
  let a = h13(i); let b = h13(i+vec3f(1.0,0.0,0.0)); let c = h13(i+vec3f(0.0,1.0,0.0)); let d = h13(i+vec3f(1.0,1.0,0.0));
  let e = h13(i+vec3f(0.0,0.0,1.0)); let g = h13(i+vec3f(1.0,0.0,1.0)); let hh = h13(i+vec3f(0.0,1.0,1.0)); let j = h13(i+vec3f(1.0,1.0,1.0));
  return mix(mix(mix(a,b,f.x),mix(c,d,f.x),f.y),mix(mix(e,g,f.x),mix(hh,j,f.x),f.y),f.z);
}
fn fbm(p0: vec3f) -> f32 { var s = 0.0; var a = 0.5; var p = p0; for (var i = 0; i < 4; i++) { s += a*vno(p); p = p*2.03+vec3f(11.7); a *= 0.5; } return s; }
fn bb(T0: f32) -> vec3f {
  let T = clamp(T0, 1200.0, 22000.0); let t = T*0.01; var c: vec3f;
  c.r = select(clamp(1.29293618*pow(max(t-60.0,0.001),-0.13320476),0.0,1.0), 1.0, t <= 66.0);
  c.g = select(clamp(1.12989086*pow(max(t-60.0,0.001),-0.07551485),0.0,1.0), clamp(0.39008158*log(t)-0.63184144,0.0,1.0), t <= 66.0);
  c.b = select(select(clamp(0.54320679*log(max(t-10.0,0.001))-1.19625408,0.0,1.0), 0.0, t <= 19.0), 1.0, t >= 66.0);
  return c*c;
}`,es=`
fn signNZ2(v: vec2f) -> vec2f { return vec2f(select(-1.0, 1.0, v.x >= 0.0), select(-1.0, 1.0, v.y >= 0.0)); }
fn octEncode(d: vec3f) -> vec2f {
  let p = d.xy / (abs(d.x)+abs(d.y)+abs(d.z));
  return select(p, (vec2f(1.0)-abs(p.yx))*signNZ2(p), d.z < 0.0);
}
fn octDecodeRaw(e: vec2f) -> vec3f {
  var v = vec3f(e, 1.0-abs(e.x)-abs(e.y));
  if (v.z < 0.0) { let t = (vec2f(1.0)-abs(v.yx))*signNZ2(v.xy); v = vec3f(t, v.z); }
  return v;
}
fn octDecode(e: vec2f) -> vec3f { return normalize(octDecodeRaw(e)); }
fn octCandidateScore(q: vec2i, referenceDir: vec3f) -> f32 {
  let v = octDecodeRaw(vec2f(q)*(1.0/32767.0));
  let alignment = max(dot(v,referenceDir),0.0);
  return alignment*alignment/max(dot(v,v),1e-12);
}
fn packOct16Precise(encoded0: vec2f) -> u32 {
  // Ordered comparison is also false for NaN, so this rejects both NaN and
  // infinities without relying on optional classification builtins.
  if (!all(abs(encoded0) <= vec2f(1e20))) { return 0u; }
  let encoded = clamp(encoded0,vec2f(-1.0),vec2f(1.0));
  // referenceDir need not be normalized: its constant squared length cancels
  // when the two cosine scores are compared, avoiding inverse square roots.
  let referenceDir = octDecodeRaw(encoded);
  let scaled = encoded*32767.0;
  let lo = vec2i(floor(scaled));
  let hi = vec2i(ceil(scaled));
  let fraction = scaled-vec2f(lo);
  let nearest = select(lo,hi,fraction >= vec2f(0.5));
  let residual = abs(scaled-vec2f(nearest));
  var alternate = nearest;
  if (residual.x >= residual.y) {
    alternate.x = select(lo.x,hi.x,nearest.x == lo.x);
  } else {
    alternate.y = select(lo.y,hi.y,nearest.y == lo.y);
  }
  let nearestScore = octCandidateScore(nearest,referenceDir);
  let alternateScore = octCandidateScore(alternate,referenceDir);
  // Stable tie rule: keep the ordinary nearest code.
  let best = select(nearest,alternate,alternateScore > nearestScore);
  return (bitcast<u32>(best.x)&0xffffu)
       | ((bitcast<u32>(best.y)&0xffffu)<<16u);
}`,Id=(u,n)=>{const o=Math.hypot(...u),[l,c,f]=u.map(v=>v/o),h=Math.cos(n),g=Math.sin(n),y=1-h;return[y*l*l+h,y*l*c+g*f,y*l*f-g*c,y*l*c-g*f,y*c*c+h,y*c*f+g*l,y*l*f+g*c,y*c*f-g*l,y*f*f+h].map(v=>v.toFixed(8)).join(",")},yr=`
const REGION_ROT_UNIVERSE = mat3x3f(${Id([.36,-.48,.8],2.1)});
const REGION_ROT_ANTIVERSE = mat3x3f(${Id([-.7,.2,.6],1.3)});
fn regionDir(d: vec3f, region: u32) -> vec3f {
  if (region == 1u) { return REGION_ROT_UNIVERSE*d; }
  if (region == 2u) { return REGION_ROT_ANTIVERSE*vec3f(d.x,d.y,-d.z); }
  return d;
}
fn regionGrade(region: u32) -> vec3f {
  if (region == 1u) { return vec3f(0.82,0.92,1.18); }
  if (region == 2u) { return vec3f(1.25,0.85,0.72); }
  return vec3f(1.0);
}`,km=`
@group(0) @binding(31) var bucketColors: texture_2d_array<f32>;
@group(0) @binding(32) var bucketDistances: texture_2d_array<f32>;
@group(0) @binding(33) var bucketPreviousSpan: texture_2d_array<u32>;
var<private> bucketDepth: vec3f = vec3f(1e30);
var<private> bucketPending: u32 = 0u;
var<private> bucketPixel: vec2u = vec2u(0u);
var<private> volumeDepthMin: f32 = 1e30;
var<private> volumeDepthMax: f32 = 0.0;
// Last frame's depth span of the medium at this pixel; where it recorded
// none, a span as deep as the disk centred on the black hole.
fn bucketSpan(p: vec2i) -> vec2f {
  let v = textureLoad(bucketPreviousSpan,p,0,0).xy;
  let span = bitcast<vec2f>(v);
  let d = length(U.camPos);
  if (span.x>0.0 && span.y>=span.x && span.y<1e5) { return span; }
  return vec2f(max(0.1,d-0.5*U.diskOut),d+0.5*U.diskOut);
}
// Per-ray set-up: each layer's crossing distance is its rocks' mean distance,
// or a point before, inside or behind the span when the layer is empty.
fn bucketInit(pixel: vec2u) {
  bucketPixel = pixel;
  bucketPending = 7u;
  let p = vec2i(pixel);
  let span = bucketSpan(p);
  let fallback = vec3f(0.5*span.x,0.5*(span.x+span.y),span.y+0.5*max(span.y-span.x,1.0));
  for (var i = 0u; i < 3u; i++) {
    let color = textureLoad(bucketColors,p,i32(i),0);
    let distance = textureLoad(bucketDistances,p,i32(i),0).xy;
    bucketDepth[i] = select(fallback[i],distance.x/max(distance.y,1e-6),
      color.a>1e-4 && distance.y>1e-5);
  }
  bucketDepth.y = max(bucketDepth.x,bucketDepth.y);
  bucketDepth.z = max(bucketDepth.y,bucketDepth.z);
}
fn bucketCross(h: ptr<function,Hits>, distance: f32) {
  for (var i = 0u; i < 3u; i++) {
    if ((bucketPending&(1u<<i))!=0u && distance>=bucketDepth[i]) {
      textureStore(bucketPrefixOut,bucketPixel,i32(i),
        vec4f((*h).inlineRadiance,clamp((*h).inlineTrans.r,0.0,1.0)));
      bucketPending &= ~(1u<<i);
    }
  }
}
`,_m=`
${es}
${yr}
struct BucketComposeUni { cameraDistance: f32, horizon: f32 }
@group(0) @binding(0) var<uniform> B: BucketComposeUni;
@group(0) @binding(1) var total: texture_2d<f32>;
@group(0) @binding(2) var prefixes: texture_2d_array<f32>;
@group(0) @binding(3) var colors: texture_2d_array<f32>;
@group(0) @binding(4) var distances: texture_2d_array<f32>;
@group(0) @binding(5) var rayField: texture_2d<u32>;
@group(0) @binding(6) var metadata: texture_2d_array<u32>;
@group(0) @binding(7) var sky: texture_cube<f32>;
@group(0) @binding(8) var skySampler: sampler;
@group(0) @binding(9) var outputColor: texture_storage_2d<rgba16float,write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) id: vec3u) {
  if (any(id.xy>=textureDimensions(outputColor))) { return; }
  let medium = textureLoad(total,id.xy,0);
  let trans = clamp(abs(medium.a),0.0,1.0);
  let powers = vec3f(1.0,1.6,2.5);
  // x: sky LOD; y: the ray was captured by the hole.
  let information = textureLoad(metadata,id.xy,1,0).xy;
  // The medium's depth span and the rock coverage per layer, both as of the
  // last time this pixel was marched.
  let span = bitcast<vec2f>(textureLoad(metadata,id.xy,0,0).xy);
  let marched = unpack4x8unorm(textureLoad(metadata,id.xy,2,0).x);
  var visible = vec3f(1.0);
  var coverageLeft = 1.0;
  var previous = vec3f(0.0);
  var previousT = 1.0;
  var rgb = vec3f(0.0);
  // Front to back: the medium up to each layer, then the layer veiled by the
  // medium in front of it; the layer's coverage occludes everything behind.
  for (var i = 0; i < 3; i++) {
    let value = textureLoad(prefixes,id.xy,i,0);
    var prefix = clamp(value.rgb,previous,max(medium.rgb,previous));
    var prefixT = clamp(value.a,trans,previousT);
    var rock = textureLoad(colors,id.xy,i,0);
    let depth = textureLoad(distances,id.xy,i,0).xy;
    // A rock that entered the middle layer after the pixel was last marched.
    // The stored prefix was taken at mid-span (bucketInit's fallback for an
    // empty layer); move it to the rock's distance along the three known
    // points of the profile: nothing at the span's start, the stored value
    // in the middle, the whole medium at its end. The near and far layers
    // need no such step: their fallbacks lie on the rock's side of the span.
    if (i==1 && rock.a>0.01 && marched.y<0.01 && depth.y>1e-5 && span.y>span.x) {
      let t = clamp((depth.x/depth.y-span.x)/(span.y-span.x),0.0,1.0);
      if (t<0.5) {
        let s = 2.0*t;
        prefix = mix(previous,prefix,s);
        prefixT = pow(max(previousT,1e-6),1.0-s)*pow(max(prefixT,1e-6),s);
      } else {
        let s = 2.0*t-1.0;
        prefix = mix(prefix,max(medium.rgb,previous),s);
        prefixT = pow(max(prefixT,1e-6),1.0-s)*pow(max(trans,1e-6),s);
      }
    }
    // A captured ray cannot see rocks beyond the hole.
    if (information.y!=0u && depth.y>1e-5 && depth.x/depth.y>B.cameraDistance-2.0*B.horizon) {
      rock = vec4f(0.0);
    }
    let coverage = clamp(rock.a,0.0,1.0);
    rgb += visible*(prefix-previous)+visible*pow(vec3f(prefixT),powers)*rock.rgb;
    visible *= pow(vec3f(1.0-coverage),powers);
    coverageLeft *= 1.0-coverage;
    previous = prefix;
    previousT = prefixT;
  }
  rgb += visible*max(medium.rgb-previous,vec3f(0.0));
  let ray = textureLoad(rayField,id.xy,0).xy;
  var alpha = 0.0;
  if ((ray.y&4u)!=0u) {
    let region = (ray.y>>8u)&7u;
    let direction = regionDir(octDecode(unpack2x16snorm(ray.x)),region);
    let background = textureSampleLevel(sky,skySampler,direction,bitcast<f32>(information.x));
    rgb += visible*pow(vec3f(trans),powers)*background.rgb*regionGrade(region);
    alpha = background.a*coverageLeft*dot(pow(vec3f(trans),powers),vec3f(0.2126,0.7152,0.0722));
  }
  textureStore(outputColor,id.xy,vec4f(rgb,alpha));
}
`;class Um{constructor(n){this.device=n;const o=GPUShaderStage.COMPUTE,l=h=>n.createBuffer({size:h,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.uniforms=[l(160),l(160),l(160)],this.composeUniform=l(16);const c=(h,g=!1,y=!1)=>({binding:h,visibility:o,texture:{sampleType:y?"uint":"float",viewDimension:g?"2d-array":"2d"}}),f=(h,g)=>({binding:h,visibility:o,storageTexture:{access:"write-only",format:g}});this.composeLayout=n.createBindGroupLayout({entries:[{binding:0,visibility:o,buffer:{type:"uniform"}},c(1),c(2,!0),c(3,!0),c(4,!0),c(5,!1,!0),c(6,!0,!0),{binding:7,visibility:o,texture:{sampleType:"float",viewDimension:"cube"}},{binding:8,visibility:o,sampler:{type:"filtering"}},f(9,"rgba16float")]}),this.composePipeline=n.createComputePipeline({layout:n.createPipelineLayout({bindGroupLayouts:[this.composeLayout]}),compute:{module:n.createShaderModule({code:_m}),entryPoint:"main"}})}device;uniforms;composeUniform;renderGroups=[];colorViews=[];distanceViews=[];composeLayout;composePipeline;composeGroup;width=1;height=1;bind(n,o,l,c,f){this.width=n.output.width,this.height=n.output.height;const h=(y,v=!1)=>y.createView({dimension:v?"2d-array":"2d"});this.colorViews=[0,1,2].map(y=>n.colors.createView({dimension:"2d",baseArrayLayer:y,arrayLayerCount:1})),this.distanceViews=[0,1,2].map(y=>n.distances.createView({dimension:"2d",baseArrayLayer:y,arrayLayerCount:1})),this.renderGroups=this.uniforms.map(y=>this.device.createBindGroup({layout:o,entries:l.map(v=>v.binding===0?{binding:0,resource:{buffer:y}}:v)}));const g=(y,v,b=!1)=>({binding:y,resource:h(v,b)});this.composeGroup=this.device.createBindGroup({layout:this.composeLayout,entries:[{binding:0,resource:{buffer:this.composeUniform}},g(1,n.total),g(2,n.prefix,!0),g(3,n.colors,!0),g(4,n.distances,!0),g(5,n.ray),g(6,n.metadata,!0),{binding:7,resource:c},{binding:8,resource:f},g(9,n.output)]})}writeRasterUniforms(n){for(let o=0;o<3;o++){const l=n.slice(0,40);l[33]=o,this.device.queue.writeBuffer(this.uniforms[o],0,l)}}compose(n,o,l,c){this.device.queue.writeBuffer(this.composeUniform,0,new Float32Array([o,l]));const f=n.beginComputePass({timestampWrites:c});f.setPipeline(this.composePipeline),f.setBindGroup(0,this.composeGroup),f.dispatchWorkgroups(Math.ceil(this.width/8),Math.ceil(this.height/8)),f.end()}dispose(){this.uniforms.forEach(n=>n.destroy()),this.composeUniform.destroy()}}function yu(u,n,o){const l=u.indexOf("fn "+n+"(");if(l<0)throw new Error("Missing star-field function "+n);const c=u.indexOf("{",l);let f=1,h=c+1,g=!1,y=!1;for(;h<u.length&&f;h++){const v=u[h],b=u[h+1];if(g){v===`
`&&(g=!1);continue}if(y){v==="*"&&b==="/"&&(y=!1,h++);continue}if(v==="/"&&b==="/"){g=!0,h++;continue}if(v==="/"&&b==="*"){y=!0,h++;continue}v==="{"&&f++,v==="}"&&f--}if(f)throw new Error("Unclosed star-field function "+n);return u.slice(0,c+1)+`
`+o+`
`+u.slice(h-1)}const Dm=`
struct StarProjection { r0: vec4f, r1: vec4f, r2: vec4f, view: vec4f }
@group(0) @binding(27) var starCurrentRays: texture_2d<u32>;
@group(1) @binding(0) var referenceRays: texture_2d<u32>;
@group(1) @binding(1) var<uniform> S: StarProjection;
fn revealedSinceZoom(p: vec2u, kind: u32) -> bool {
  if (S.r1.w<.5) { return false; }
  // The material march can omit interior continuation behind opaque smoke.
  // A newly visible escape in current rays needs its complete geometry now.
  let current = textureLoad(starCurrentRays,p,0).y&0x704u;
  return (current&4u)!=0u && current!=kind && ((current&0x700u)!=0u || (kind&4u)==0u);
}
// Writes this pixel's direction word from the reference field, or returns
// false when the pixel must be traced: outside the reference, between two
// regions, or revealed since the zoom.
fn referenceDirection(p: vec2u, n: vec3f) -> bool {
  // Axis-aligned views need only the exact symmetry rotation. Avoid turning
  // floating-point near-identity projections into interpolation or retraces.
  if (S.r0.w>.5) {
    let ray = textureLoad(referenceRays,p,0).xy;
    var word = ray.x;
    if (revealedSinceZoom(p,ray.y&0x704u)) { return false; }
    if ((ray.y&4u)!=0u && (S.view.x!=1.0 || S.view.y!=0.0)) {
      let d = octDecode(unpack2x16snorm(word));
      word = packOct16Precise(octEncode(vec3f(S.view.x*d.x-S.view.y*d.y,
        S.view.y*d.x+S.view.x*d.y,d.z)));
    }
    textureStore(gRay,p,vec4u(word,(ray.y&0x704u)|((u32(U.frameStamp)&65535u)<<16u),0u,0u));
    return true;
  }
  let old = vec3f(dot(S.r0.xyz,n),dot(S.r1.xyz,n),dot(S.r2.xyz,n));
  if (old.z<=1e-6) { return false; }
  let size = vec2i(textureDimensions(referenceRays));
  let uv = vec2f(old.x/(old.z*S.view.z*S.view.w),-old.y/(old.z*S.view.z))*.5+vec2f(.5);
  let grid = uv*vec2f(size)-vec2f(.5);
  let lo = vec2i(floor(grid));
  let f = fract(grid);
  if (any(lo<vec2i(0)) || any(lo+vec2i(1)>=size)) { return false; }
  let a = textureLoad(referenceRays,lo,0).xy;
  let b = textureLoad(referenceRays,lo+vec2i(1,0),0).xy;
  let c = textureLoad(referenceRays,lo+vec2i(0,1),0).xy;
  let d = textureLoad(referenceRays,lo+vec2i(1,1),0).xy;
  let kind = a.y&0x704u;
  if (revealedSinceZoom(p,kind)) { return false; }
  if ((b.y&0x704u)!=kind || (c.y&0x704u)!=kind || (d.y&0x704u)!=kind) { return false; }
  var word = 0u;
  if ((kind&4u)!=0u) {
    let direction = normalize(mix(
      mix(octDecode(unpack2x16snorm(a.x)),octDecode(unpack2x16snorm(b.x)),f.x),
      mix(octDecode(unpack2x16snorm(c.x)),octDecode(unpack2x16snorm(d.x)),f.x),f.y));
    let rotated = vec3f(S.view.x*direction.x-S.view.y*direction.y,
      S.view.y*direction.x+S.view.x*direction.y,direction.z);
    word = packOct16Precise(octEncode(rotated));
  }
  textureStore(gRay,p,vec4u(word,kind|((u32(U.frameStamp)&65535u)<<16u),0u,0u));
  return true;
}
`;function Om(u,n){if(u=yu(u,"inlineMaterialStep",""),u=yu(u,"inlineMarchChord",""),u=yu(u,"writeOut",`
  var word = 0u;
  if (h0.esc==1u) { word = packOct16Precise(clamp(h0.dir,vec2f(-1.0),vec2f(1.0))); }
  textureStore(gRay,gid,vec4u(word,
    ((h0.esc&1u)<<2u)|((h0.region&7u)<<8u)|((u32(U.frameStamp)&65535u)<<16u),0u,0u));
`),u=u.replaceAll("I.exact","1.0").replaceAll("U.jitterX","0.0").replaceAll("U.jitterY","0.0"),n){const o=u.indexOf("fn rayDir(");if(o<0)throw new Error("Missing star projection anchor");u=u.slice(0,o)+Dm+`
`+u.slice(o);const l=u.lastIndexOf("fn main("),c=u.indexOf("  var outPixel = gid.xy;",l);if(c<0)throw new Error("Missing star dispatch anchor");u=u.slice(0,c)+`
  if (any(gid.xy>=outDims)) { return; }
  if (referenceDirection(gid.xy,rayDir(gid.xy,outDims))) { return; }
`+u.slice(c)}return u}function Bm(u,n,o){const l=Math.cos(o),c=Math.sin(o),f=new Float32Array(16);for(let h=0;h<3;h++)for(let g=0;g<3;g++){const y=8+4*g,v=u[h];f[4*h+g]=v[0]*n[y]+v[1]*(l*n[y+1]+c*n[y+2])+v[2]*(-c*n[y+1]+l*n[y+2])+v[3]*n[y+3]}return f[12]=l,f[13]=c,f}class Lm{constructor(n){this.device=n;const o=l=>n.createBuffer({size:l,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.referenceGeometry=o(192),this.currentGeometry=o(192),this.material=o(96),this.projection=o(64),this.layout=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{sampleType:"uint"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]})}device;layout;reference=null;referenceGeometry;currentGeometry;material;projection;referenceGroup=null;currentGroup=null;sampleGroup=null;entries=null;target=null;key="";builds=0;axes=[];adoptions=0;adopted=!1;geometry(n){const o=n.slice();o[25]=0,o[26]=.055,o[29]=o[30]=0;for(const l of[34,35,36,37,38,40])o[l]=0;return o[39]=.02,o[44]=1,o}run(n,o){const l=o.target.width,c=o.target.height;if((this.reference?.width!==l||this.reference?.height!==c)&&(this.release(),this.reference=this.device.createTexture({label:"centered star reference",size:[l,c],format:"rg32uint",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST})),!this.referenceGroup||this.entries!==o.entries||this.target!==o.target){const g=y=>this.device.createBindGroup({layout:o.layout,entries:o.entries.map(v=>v.binding===0?{binding:0,resource:{buffer:y?this.referenceGeometry:this.currentGeometry}}:v.binding===4?{binding:4,resource:(y?this.reference:o.target).createView()}:v.binding===11?{binding:11,resource:{buffer:this.material}}:v.binding===27?{binding:27,resource:o.rawRay.createView()}:v)});this.referenceGroup=g(!0),this.currentGroup=g(!1),this.sampleGroup=this.device.createBindGroup({layout:this.layout,entries:[{binding:0,resource:this.reference.createView()},{binding:1,resource:{buffer:this.projection}}]}),this.entries=o.entries,this.target=o.target}if(o.adopt){n.copyTextureToTexture({texture:o.target},{texture:this.reference},[l,c]),this.key=o.key,this.axes=o.referenceAxes,this.adoptions++,this.adopted=!0;return}if(this.device.queue.writeBuffer(this.material,0,o.material),this.key!==o.key){this.device.queue.writeBuffer(this.referenceGeometry,0,this.geometry(o.referenceGeometry));const g=n.beginComputePass({timestampWrites:o.stamp("star-reference")});g.setPipeline(o.build),g.setBindGroup(0,this.referenceGroup),g.dispatchWorkgroups(Math.ceil(l/8),Math.ceil(c/8)),g.end(),this.key=o.key,this.axes=o.referenceAxes,this.builds++,this.adopted=!1}const f=Bm(this.axes,o.geometry,o.yaw);f[3]=o.direct?1:0,f[7]=this.adopted?1:0,f[14]=o.referenceGeometry[3],f[15]=o.referenceGeometry[27]/o.referenceGeometry[28],this.device.queue.writeBuffer(this.projection,0,f),this.device.queue.writeBuffer(this.currentGeometry,0,this.geometry(o.geometry));const h=n.beginComputePass({timestampWrites:o.stamp("star-reprojection")});h.setPipeline(o.reuse),h.setBindGroup(0,this.currentGroup),h.setBindGroup(1,this.sampleGroup),h.dispatchWorkgroups(Math.ceil(l/8),Math.ceil(c/8)),h.end()}report(){return{bytes:this.reference?this.reference.width*this.reference.height*8:0,builds:this.builds,adoptions:this.adoptions,ready:!!this.key}}release(){this.reference?.destroy(),this.reference=null,this.referenceGroup=this.currentGroup=this.sampleGroup=null,this.entries=null,this.target=null,this.key="",this.axes=[],this.adopted=!1}dispose(){this.release(),this.referenceGeometry.destroy(),this.currentGeometry.destroy(),this.material.destroy(),this.projection.destroy()}}const Nm=`
fn h33s(p0: vec3f) -> vec3f {
  var p = fract(p0*vec3f(0.1031,0.1030,0.0973));
  p += dot(p,p.yxz+vec3f(33.33));
  return fract((p.xxy+p.yxx)*p.zyx);
}
`,Y1=`
struct StarFace { uv: vec2f, face: u32 }
// The cube face (+x, -x, +y, -y, +z, -z) a direction falls on, and its
// position on that face in [0,1]².
fn starFace(d: vec3f) -> StarFace {
  let a = abs(d);
  var uv = vec2f(0.0);
  var face = 0u;
  if (a.x>=a.y && a.x>=a.z) {
    if (d.x>=0.0) {
      face = 0u;
      uv = vec2f(-d.z,-d.y)/a.x;
    } else {
      face = 1u;
      uv = vec2f(d.z,-d.y)/a.x;
    }
  } else if (a.y>=a.z) {
    if (d.y>=0.0) {
      face = 2u;
      uv = vec2f(d.x,d.z)/a.y;
    } else {
      face = 3u;
      uv = vec2f(d.x,-d.z)/a.y;
    }
  } else {
    if (d.z>=0.0) {
      face = 4u;
      uv = vec2f(d.x,-d.y)/a.z;
    } else {
      face = 5u;
      uv = vec2f(-d.x,-d.y)/a.z;
    }
  }
  return StarFace(uv*.5+vec2f(.5),face);
}
// The inverse of starFace.
fn starFaceDirection(face: u32, uv: vec2f) -> vec3f {
  let p = uv*2.0-vec2f(1.0);
  var d = vec3f(0.0);
  switch (face) {
    case 0u: { d = vec3f(1.0,-p.y,-p.x); }
    case 1u: { d = vec3f(-1.0,-p.y,p.x); }
    case 2u: { d = vec3f(p.x,1.0,p.y); }
    case 3u: { d = vec3f(p.x,-1.0,-p.y); }
    case 4u: { d = vec3f(p.x,-p.y,1.0); }
    default: { d = vec3f(-p.x,-p.y,-1.0); }
  }
  return normalize(d);
}
// Cell id of the 130³ star lattice to its integer position, centred on 0.
fn starCell(id: u32) -> vec3f {
  return vec3f(f32(id%130u),f32((id/130u)%130u),f32(id/(130u*130u)))-vec3f(65.0);
}
`,Gm=`
${Nm}
${Y1}
${yr}
// Approximate blackbody colour of a temperature in kelvin, squared to take
// it to roughly linear light.
fn bbs(T0: f32) -> vec3f {
  let T = clamp(T0,1200.0,22000.0);
  let t = T*0.01;
  var c: vec3f;
  c.r = select(clamp(1.29293618*pow(max(t-60.0,0.001),-0.13320476),0.0,1.0),1.0,t <= 66.0);
  c.g = select(clamp(1.12989086*pow(max(t-60.0,0.001),-0.07551485),0.0,1.0),
               clamp(0.39008158*log(t)-0.63184144,0.0,1.0),t <= 66.0);
  c.b = select(select(clamp(0.54320679*log(max(t-10.0,0.001))-1.19625408,0.0,1.0),0.0,t <= 19.0),
               1.0,t >= 66.0);
  return c*c;
}

struct CatalogUni { density: f32, size: f32, pad0: f32, pad1: f32 }
@group(0) @binding(0) var<uniform> B: CatalogUni;
// Fixed-point RGB energy per texel of the 48 face layers, then four words
// per region: its total energy and its star count.
@group(0) @binding(1) var<storage,read_write> energy: array<atomic<u32>>;
@group(0) @binding(2) var output: texture_storage_2d_array<rgba16float,write>;
const ENERGY_SCALE = 4294967296.0;
// Adds weighted flux to one texel; a texel past the face edge lands on the
// neighbouring face instead.
fn deposit(region: u32, face: u32, q: vec2i, weight: f32, flux: vec3f) {
  let n = i32(B.size);
  var f = face;
  var p = q;
  if (any(q<vec2i(0)) || any(q>=vec2i(n))) {
    let adjacent = starFace(starFaceDirection(face,(vec2f(q)+vec2f(.5))/B.size));
    f = adjacent.face;
    p = vec2i(clamp(adjacent.uv*B.size,vec2f(0.0),vec2f(B.size-1.0)));
  }
  let base = ((region*6u+f)*u32(n*n)+u32(p.y*n+p.x))*3u;
  let e = vec3u(round(flux*weight*ENERGY_SCALE));
  atomicAdd(&energy[base],e.x);
  atomicAdd(&energy[base+1u],e.y);
  atomicAdd(&energy[base+2u],e.z);
}
// One invocation per lattice cell and region (gid.y).
@compute @workgroup_size(64)
fn collect(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x>=2197000u || gid.y>=8u) { return; }
  let cell = starCell(gid.x);
  let radius2 = dot(cell+vec3f(.5),cell+vec3f(.5));
  if (radius2<62.0*62.0 || radius2>66.0*66.0) { return; }
  let h = h33s(cell+f32(gid.y)*vec3f(37.0,11.0,23.0));
  let center = normalize(cell+vec3f(.5)+(h.yzx-vec3f(.5))*.80);
  let home = floor(center*64.0-vec3f(.5));
  if (any(cell<home) || any(cell>home+vec3f(1.0))) { return; }
  let selected = fract(h.x*7.13+h.y*13.71+h.z*19.37);
  if (selected>clamp(B.density,0.0,2.0)*(.055+.055*exp(-center.y*center.y*150.0))) { return; }
  let mag = pow(fract(h.x*17.17+h.y*5.23+h.z*11.91),6.0);
  // Convert the existing catalogue's luminosity ordering to a fixed angular
  // flux. This calibration never depends on the live viewport or lens map.
  let angularRadius = (1.20+.90*mag+3.70*pow(mag,4.0))*.00053;
  let seed = fract(h.x*3.17+h.y*9.73+h.z*15.31);
  let color = clamp(bbs(mix(3000.0,12000.0,seed*seed))*regionGrade(gid.y),vec3f(0.0),vec3f(1.0));
  let flux = color*(3.14159265359*angularRadius*angularRadius)*(.42+.58*pow(mag,.35));
  let total = u32(B.size*B.size)*48u*3u+gid.y*4u;
  let e = vec3u(round(flux*ENERGY_SCALE));
  atomicAdd(&energy[total],e.x);
  atomicAdd(&energy[total+1u],e.y);
  atomicAdd(&energy[total+2u],e.z);
  atomicAdd(&energy[total+3u],1u);
  // Split the star bilinearly over its four nearest texels.
  let face = starFace(center);
  let grid = face.uv*B.size-vec2f(.5);
  let lo = vec2i(floor(grid));
  let f = fract(grid);
  deposit(gid.y,face.face,lo,(1.0-f.x)*(1.0-f.y),flux);
  deposit(gid.y,face.face,lo+vec2i(1,0),f.x*(1.0-f.y),flux);
  deposit(gid.y,face.face,lo+vec2i(0,1),(1.0-f.x)*f.y,flux);
  deposit(gid.y,face.face,lo+vec2i(1,1),f.x*f.y,flux);
}
// Energy per texel to radiance: divide by the texel's solid angle. Alpha
// keeps the solid-angle Jacobian, the weight of the mip average.
@compute @workgroup_size(8,8)
fn resolve(@builtin(global_invocation_id) id: vec3u) {
  let n = u32(B.size);
  if (any(id.xy>=vec2u(n)) || id.z>=48u) { return; }
  let k = ((id.z*n+id.y)*n+id.x)*3u;
  let flux = vec3f(f32(atomicLoad(&energy[k])),f32(atomicLoad(&energy[k+1u])),
    f32(atomicLoad(&energy[k+2u])))/ENERGY_SCALE;
  let uv = (vec2f(id.xy)+vec2f(.5))*2.0/B.size-vec2f(1.0);
  let jacobian = pow(1.0+dot(uv,uv),-1.5);
  let solidAngle = 4.0*jacobian/(B.size*B.size);
  textureStore(output,id.xy,i32(id.z),vec4f(flux/solidAngle,jacobian));
}
`,Hm=`
@group(0) @binding(0) var source: texture_2d_array<f32>;
@group(0) @binding(1) var output: texture_storage_2d_array<rgba16float,write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) id: vec3u) {
  if (any(id.xy>=textureDimensions(output)) || id.z>=48u) { return; }
  var weighted = vec3f(0.0);
  var area = 0.0;
  for (var y = 0u; y < 2u; y++) {
    for (var x = 0u; x < 2u; x++) {
      let v = textureLoad(source,id.xy*2u+vec2u(x,y),i32(id.z),0);
      weighted += v.rgb*v.a;
      area += v.a;
    }
  }
  textureStore(output,id.xy,i32(id.z),vec4f(weighted/max(area,1e-12),area*.25));
}
`,Pm=`
${Y1}
@group(0) @binding(5) var starRadiance: texture_cube_array<f32>;
@group(0) @binding(6) var starSampler: sampler;
// A direction in the face's own axes: (u, v, distance along the face normal).
fn starFaceComponents(face: u32, d: vec3f) -> vec3f {
  switch (face) {
    case 0u: { return vec3f(-d.z,-d.y,d.x); }
    case 1u: { return vec3f(d.z,-d.y,-d.x); }
    case 2u: { return vec3f(d.x,d.z,d.y); }
    case 3u: { return vec3f(d.x,-d.z,-d.y); }
    case 4u: { return vec3f(d.x,-d.y,d.z); }
    default: { return vec3f(-d.x,-d.y,-d.z); }
  }
}
fn integratedStars(d: vec3f, dx0: vec3f, dy0: vec3f, region: u32) -> vec3f {
  let dx = dx0*C.starC2.w;
  let dy = dy0*C.starC2.w;
  let mapping = starFace(d);
  let face = mapping.face;
  let p = starFaceComponents(face,d);
  let x = starFaceComponents(face,dx);
  let y = starFaceComponents(face,dy);
  let n = f32(textureDimensions(starRadiance).x);
  // The footprint's axes in face texels, then the ellipse's major and minor
  // axes. The minor axis (at least 1/16 of the major) sets the level; a
  // longer major axis is covered by taps along it.
  let ux = (x.xy*p.z-p.xy*x.z)*(.5*n/(p.z*p.z));
  let uy = (y.xy*p.z-p.xy*y.z)*(.5*n/(p.z*p.z));
  let xx = dot(ux,ux);
  let yy = dot(uy,uy);
  let xy = dot(ux,uy);
  let root = sqrt(max(0.0,(xx-yy)*(xx-yy)+4.0*xy*xy));
  let major = sqrt(max(0.0,.5*(xx+yy+root)));
  let minor = sqrt(max(0.0,.5*(xx+yy-root)));
  let width = max(1.0,max(minor,major/16.0));
  let lod = log2(width);
  if (major<=width) {
    return textureSampleLevel(starRadiance,starSampler,d,i32(region),lod).rgb*C.starC1.w;
  }
  // A fixed tap count avoids changing the sampling pattern as the lens moves.
  let taps = 16u;
  var angle = 0.0;
  if (abs(xx-yy)+abs(xy)>1e-10) { angle = .5*atan2(2.0*xy,xx-yy); }
  let axis = (ux*cos(angle)+uy*sin(angle))/n;
  var light = vec3f(0.0);
  for (var i = 0u; i < taps; i++) {
    let offset = (f32(i)+.5)/f32(taps)-.5;
    light += textureSampleLevel(starRadiance,starSampler,
      starFaceDirection(face,mapping.uv+axis*offset),i32(region),lod).rgb;
  }
  return light*(C.starC1.w/f32(taps));
}
`;class qm{constructor(n){this.device=n,this.size=n.limits.maxStorageBufferBindingSize>=512*512*48*3*4+128?512:256,this.mipCount=Math.log2(this.size)+1;const o=this.size;this.texture=n.createTexture({label:"integrated star radiance",size:[o,o,48],format:"rgba16float",mipLevelCount:this.mipCount,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC}),this.view=this.texture.createView({dimension:"cube-array"}),this.sampler=n.createSampler({minFilter:"linear",magFilter:"linear",mipmapFilter:"linear"}),this.words=n.createBuffer({size:o*o*48*3*4+128,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.uniform=n.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});const l=GPUShaderStage.COMPUTE,c=n.createBindGroupLayout({entries:[{binding:0,visibility:l,buffer:{type:"uniform"}},{binding:1,visibility:l,buffer:{type:"storage"}},{binding:2,visibility:l,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"2d-array"}}]}),f=n.createShaderModule({code:Gm}),h=n.createPipelineLayout({bindGroupLayouts:[c]});this.collect=n.createComputePipeline({layout:h,compute:{module:f,entryPoint:"collect"}}),this.resolve=n.createComputePipeline({layout:h,compute:{module:f,entryPoint:"resolve"}});const g=v=>this.texture.createView({dimension:"2d-array",baseMipLevel:v,mipLevelCount:1});this.group=n.createBindGroup({layout:c,entries:[{binding:0,resource:{buffer:this.uniform}},{binding:1,resource:{buffer:this.words}},{binding:2,resource:g(0)}]});const y=n.createBindGroupLayout({entries:[{binding:0,visibility:l,texture:{sampleType:"unfilterable-float",viewDimension:"2d-array"}},{binding:1,visibility:l,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"2d-array"}}]});this.mip=n.createComputePipeline({layout:n.createPipelineLayout({bindGroupLayouts:[y]}),compute:{module:n.createShaderModule({code:Hm}),entryPoint:"main"}});for(let v=1;v<this.mipCount;v++)this.mipGroups.push(n.createBindGroup({layout:y,entries:[{binding:0,resource:g(v-1)},{binding:1,resource:g(v)}]}))}device;texture;view;sampler;size;mipCount;words;uniform;group;collect;resolve;mip;mipGroups=[];density=-1;builds=0;update(n,o,l){if(this.density===o)return;this.device.queue.writeBuffer(this.uniform,0,new Float32Array([o,this.size,0,0])),n.clearBuffer(this.words);let c=n.beginComputePass({timestampWrites:l("star-catalogue-build")});c.setPipeline(this.collect),c.setBindGroup(0,this.group),c.dispatchWorkgroups(Math.ceil(2197e3/64),8),c.end(),c=n.beginComputePass({timestampWrites:l("star-catalogue-resolve")}),c.setPipeline(this.resolve),c.setBindGroup(0,this.group),c.dispatchWorkgroups(this.size/8,this.size/8,48),c.end(),c=n.beginComputePass({timestampWrites:l("star-catalogue-mips")}),c.setPipeline(this.mip);for(let f=1;f<this.mipCount;f++)c.setBindGroup(0,this.mipGroups[f-1]),c.dispatchWorkgroups(Math.ceil((this.size>>f)/8),Math.ceil((this.size>>f)/8),48);c.end(),this.density=o,this.builds++}report(){return{ready:this.density>=0,density:this.density,builds:this.builds,resolution:this.size,bytes:this.words.size+48*((this.size*this.size*4-1)/3)*8,representation:"linear-radiance"}}async audit(){const n=this.device,o=this.mipCount,l=n.createBuffer({size:o*256+128,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST}),c=n.createBuffer({size:l.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),f=n.createComputePipeline({layout:"auto",compute:{entryPoint:"main",module:n.createShaderModule({code:`
      @group(0) @binding(0) var light: texture_2d_array<f32>;
      @group(0) @binding(1) var<storage,read_write> sums: array<atomic<u32>>;
      // Per region (four words): fixed-point flux (radiance × solid angle)
      // and the count of non-finite or out-of-range texels.
      @compute @workgroup_size(8,8)
      fn main(@builtin(global_invocation_id) id: vec3u) {
        let n = textureDimensions(light);
        if (any(id.xy>=n) || id.z>=48u) { return; }
        let v = textureLoad(light,id.xy,i32(id.z),0);
        let k = (id.z/6u)*4u;
        if (!all(v>=vec4f(0.0)) || !all(v<vec4f(65504.0))) {
          atomicAdd(&sums[k+3u],1u);
          return;
        }
        let e = vec3u(round(v.rgb*v.a*(4.0/f32(n.x*n.y))*4294967296.0));
        if (e.x>0u) { atomicAdd(&sums[k],e.x); }
        if (e.y>0u) { atomicAdd(&sums[k+1u],e.y); }
        if (e.z>0u) { atomicAdd(&sums[k+2u],e.z); }
      }`})}}),h=n.createCommandEncoder();for(let T=0;T<o;T++){const k=n.createBindGroup({layout:f.getBindGroupLayout(0),entries:[{binding:0,resource:this.texture.createView({dimension:"2d-array",baseMipLevel:T,mipLevelCount:1})},{binding:1,resource:{buffer:l,offset:T*256,size:128}}]}),O=h.beginComputePass();O.setPipeline(f),O.setBindGroup(0,k),O.dispatchWorkgroups(Math.ceil((this.size>>T)/8),Math.ceil((this.size>>T)/8),48),O.end()}h.copyBufferToBuffer(this.words,this.size*this.size*48*3*4,l,o*256,128),h.copyBufferToBuffer(l,0,c,0,l.size),n.queue.submit([h.finish()]),await c.mapAsync(GPUMapMode.READ);const g=new Uint32Array(c.getMappedRange()),y=Array.from({length:8},(T,k)=>Array.from(g.subarray(o*64+k*4,o*64+k*4+3),O=>O/4294967296)),v=Array.from({length:8},(T,k)=>g[o*64+k*4+3]);let b=0,x=0;const w=Array.from({length:o},(T,k)=>({level:k,flux:Array.from({length:8},(O,R)=>(b+=g[k*64+R*4+3],Array.from(g.subarray(k*64+R*4,k*64+R*4+3),(N,j)=>{const Z=N/4294967296;return x=Math.max(x,Math.abs(Z-y[R][j])/Math.max(y[R][j],1e-12)),Z})))}));return c.unmap(),c.destroy(),l.destroy(),{...this.report(),expected:y,starCounts:v,levels:w,errors:b,maxRelativeError:x}}dispose(){this.texture.destroy(),this.words.destroy(),this.uniform.destroy()}}const Vm=24,Qd=8,jm=20,I1=64,Q1=u=>Vm+Math.max(1,u)*Uint32Array.BYTES_PER_ELEMENT,ts=`
struct WorkQueueWrite {
  count: atomic<u32>,
  overflow: atomic<u32>,
  dispatchX: u32,
  dispatchY: u32,
  dispatchZ: u32,
  capacity: u32,
  items: array<u32>,
}
struct WorkQueueRead {
  count: u32,
  overflow: u32,
  dispatchX: u32,
  dispatchY: u32,
  dispatchZ: u32,
  capacity: u32,
  items: array<u32>,
}
`,Zm=`
${ts}
@group(0) @binding(0) var<storage, read_write> queue: WorkQueueWrite;
const LOCAL_SIZE = ${I1}u;
const MAX_GROUPS_PER_DIMENSION = 65535u;

fn finalizeDispatch() {
  let count = min(atomicLoad(&queue.count),queue.capacity);
  let groups = (count+LOCAL_SIZE-1u)/LOCAL_SIZE;
  queue.dispatchX = min(groups,MAX_GROUPS_PER_DIMENSION);
  queue.dispatchY = select(1u,(groups+MAX_GROUPS_PER_DIMENSION-1u)
    /MAX_GROUPS_PER_DIMENSION,groups > 0u);
  queue.dispatchZ = 1u;
  // After finalization count is executable work, not attempted work. The
  // separate overflow word keeps the number of rejected appends; nothing
  // reads it now that a temporal frame's queue has a slot for every pixel.
  atomicStore(&queue.count,count);
}

@compute @workgroup_size(1)
fn main() { finalizeDispatch(); }
`,Fm=`
${es}
${yr}
${ts}
// enabled: 1 reprojection, 2 class counters, 4 axial motion (rotate0..2
// carry last frame's points into this frame's camera frame). stretch is the
// escape-direction difference between neighbours (radians) above which a
// pixel counts as stretched. refresh: the march's refresh pattern this
// frame (count of the eight pixels of a 2x4 cell, phase, and cellOfFour of
// the march uniform; see main in inline-volume.ts). support is the donor
// weight a masked fetch needs; iterations the solver's (bilinear solve when
// above 0.5).
struct ReprojectionUni {
  size: vec2u, frame: u32, enabled: u32,
  motion: f32, delta: f32, spin: f32, q2: f32,
  diskOut: f32, advection: f32, radius: f32, tolerance: f32,
  transmission: f32, stretch: f32, historyReady: f32, support: f32,
  rotate0: vec4f, rotate1: vec4f, rotate2: vec4f,
  camera: vec3f, iterations: f32,
  refresh: vec3f, pad: f32,
}
@group(0) @binding(0) var<uniform> R: ReprojectionUni;
// The whole medium: radiance and the negated transmittance.
@group(0) @binding(1) var previousFront: texture_2d<f32>;
@group(0) @binding(3) var previousPoint: texture_2d<f32>;
@group(0) @binding(4) var currentFront: texture_2d<f32>;
@group(0) @binding(6) var currentPoint: texture_2d<f32>;
@group(0) @binding(7) var currentRay: texture_2d<u32>;
@group(0) @binding(8) var warpedFront: texture_storage_2d<rgba16float,write>;
@group(0) @binding(10) var warpedPoint: texture_storage_2d<rgba32float,write>;
@group(0) @binding(11) var historySampler: sampler;
@group(0) @binding(12) var<storage,read_write> repairQueue: WorkQueueWrite;
@group(0) @binding(13) var<storage,read_write> counters: array<atomic<u32>>;
@group(0) @binding(16) var previousRay: texture_2d<u32>;
// The medium in front of each rock layer (debris-depth.ts), as of the
// pixel's last march, and its reprojected copy.
@group(0) @binding(17) var currentPrefix: texture_2d_array<f32>;
@group(0) @binding(18) var warpedPrefix: texture_storage_2d_array<rgba16float,write>;

fn bounded(p: vec2i) -> vec2i { return clamp(p,vec2i(0),vec2i(R.size)-vec2i(1)); }
fn oldPoint(p: vec2i) -> vec4f { return textureLoad(previousPoint,bounded(p),0); }
fn fresh(p: vec2i) -> bool { return (textureLoad(currentRay,bounded(p),0).y>>16u) == R.frame; }
// Whether the march's refresh pattern takes in pixel q this frame (main in
// inline-volume.ts). Before the repairs run no other pixel can be fresh, so
// the anchor search asks this first and loads only the pixels that can be.
fn selected(q: vec2i) -> bool {
  let u = vec2u(q);
  let cell = vec2u(u.x>>1u,u.y>>2u);
  if (R.refresh.z >= 0.0 && (cell.x&1u)+2u*(cell.y&1u) != u32(R.refresh.z)) { return false; }
  let phase = ((u.x&1u)+2u*(u.y&3u)+8u-u32(R.refresh.y))&7u;
  let count = u32(R.refresh.x);
  return ((phase*count)&7u) < count;
}
// Moves a point with the disk's Keplerian rotation for dt.
fn advect(p: vec3f, dt: f32) -> vec3f {
  let radius = max(length(p.xy),0.1);
  let sk = sqrt(max(radius-R.q2,1e-6));
  let omega = sk/(radius*radius+R.spin*sk);
  let angle = -0.70710678*pow(R.diskOut/25.0,1.5)*omega*dt*R.advection;
  let c = cos(angle);
  let s = sin(angle);
  return vec3f(vec2f(c*p.x-s*p.y,s*p.x+c*p.y),p.z);
}
// Change of last frame's scattering point per pixel along axis, from the
// neighbours of the same class.
fn pointSlope(p: vec2i, c: vec4f, axis: vec2i) -> vec3f {
  let a = oldPoint(p-axis);
  let b = oldPoint(p+axis);
  if (floor(a.w) == floor(c.w) && floor(b.w) == floor(c.w)) { return 0.5*(b.xyz-a.xyz); }
  if (floor(b.w) == floor(c.w)) { return b.xyz-c.xyz; }
  if (floor(a.w) == floor(c.w)) { return c.xyz-a.xyz; }
  return vec3f(0.0);
}
// Writes the pixel's medium and scattering point, and carries its three
// layer prefixes along: unchanged where the medium is (a fresh pixel, plain
// sky, a placeholder), else the same fraction of the radiance and the same
// fraction of the optical depth. The comparison and the fractions use the
// medium as the 16-bit target stores it.
fn put(p: vec2u, medium: vec4f, point: vec4f) {
  textureStore(warpedFront,p,medium);
  textureStore(warpedPoint,p,point);
  let a = textureLoad(currentFront,p,0);
  let b = quantizeToF16(medium);
  for (var i = 0; i < 3; i++) {
    let prefix = textureLoad(currentPrefix,p,i,0);
    if (all(a==b)) {
      textureStore(warpedPrefix,p,i,prefix);
      continue;
    }
    let fraction = clamp(prefix.rgb/max(a.rgb,vec3f(1e-7)),vec3f(0.0),vec3f(1.0));
    let optical = clamp(log(max(prefix.a,1e-6))/min(log(max(abs(a.a),1e-6)),-1e-6),0.0,1.0);
    textureStore(warpedPrefix,p,i,vec4f(b.rgb*fraction,pow(max(abs(b.a),1e-6),optical)));
  }
}
struct RayField { dir: vec3f, region: u32, valid: bool, traced: bool }
// Last frame's escape direction at a pixel. traced: a frame stamp is
// present, so this is a marched pixel and not a cleared texture.
fn oldRay(p: vec2i) -> RayField {
  let r = textureLoad(previousRay,bounded(p),0).xy;
  return RayField(octDecode(unpack2x16snorm(r.x)),(r.y>>8u)&7u,(r.y&4u) != 0u,(r.y>>16u) != 0u);
}
// Why a pixel must be re-traced whatever its history says (0: no reason):
// 4 never traced, 5 a region or validity boundary next to it, 6 strong
// lensing stretch. Neighbours behind opaque material do not count.
fn criticalRay(p: vec2i) -> u32 {
  let c = oldRay(p);
  if (!c.traced) { return 4u; }
  let offsets = array<vec2i,4>(vec2i(-1,0),vec2i(1,0),vec2i(0,-1),vec2i(0,1));
  for (var k = 0u; k < 4u; k++) {
    let q = p+offsets[k];
    if (((u32(max(oldPoint(q).w,1.0))-1u)&128u) != 0u) { continue; }
    let n = oldRay(q);
    if (n.valid != c.valid || n.region != c.region) { return 5u; }
    if (c.valid && length(n.dir-c.dir) > R.stretch) { return 6u; }
  }
  return 0u;
}
// The critical-ray reason of this pixel (1: not classified, a fresh pixel).
var<private> criticalReason: u32 = 1u;
// Where in last frame's image the scattering point goal of class klass was.
// status 0, or why it cannot be said: 6 the search left the class, 7 a
// degenerate gradient, 8 outside the image, 9 too few donors of the class,
// 10 the donors' point is not the goal. mask: the donors of the class among
// the four texels around uv; masked: some were left out.
struct Located { uv: vec2f, donor: vec3f, mask: u32, support: f32, masked: bool, status: u32 }
fn locate(p: vec2i, goal: vec3f, klass: f32) -> Located {
  var found = Located(vec2f(p),vec3f(0.0),0u,0.0,false,0u);
  // Gauss-Newton search from the pixel itself.
  var uv = vec2f(p);
  let iterations = select(2u,u32(max(R.iterations,1.0)),R.iterations>.5);
  for (var iteration = 0u; iteration < iterations; iteration++) {
    let q = bounded(vec2i(round(uv)));
    let c = oldPoint(q);
    if (floor(c.w) != floor(klass)) { found.status = 6u; return found; }
    var position = c.xyz;
    var origin = vec2f(q);
    var dx = vec3f(0.0);
    var dy = vec3f(0.0);
    var bilinear = false;
    if (R.iterations>.5) {
      let lo = vec2i(floor(uv));
      let f = fract(uv);
      let a = oldPoint(lo);
      let b = oldPoint(lo+vec2i(1,0));
      let c0 = oldPoint(lo+vec2i(0,1));
      let d = oldPoint(lo+vec2i(1,1));
      if (floor(a.w)==floor(klass) && floor(b.w)==floor(klass)
          && floor(c0.w)==floor(klass) && floor(d.w)==floor(klass)) {
        position = mix(mix(a.xyz,b.xyz,f.x),mix(c0.xyz,d.xyz,f.x),f.y);
        origin = uv;
        dx = mix(b.xyz-a.xyz,d.xyz-c0.xyz,f.y);
        dy = mix(c0.xyz-a.xyz,d.xyz-b.xyz,f.x);
        bilinear = true;
      }
    }
    let error = goal-position;
    if (dot(error,error) < 1e-10) { break; }
    if (!bilinear) {
      dx = pointSlope(q,c,vec2i(1,0));
      dy = pointSlope(q,c,vec2i(0,1));
    }
    let xx = dot(dx,dx)+1e-9;
    let xy = dot(dx,dy);
    let yy = dot(dy,dy)+1e-9;
    let determinant = xx*yy-xy*xy;
    if (determinant < 1e-12) { found.status = 7u; return found; }
    let ex = dot(dx,error);
    let ey = dot(dy,error);
    let correction = vec2f(yy*ex-xy*ey,xx*ey-xy*ex)/determinant;
    uv = clamp(origin+correction,vec2f(p)-vec2f(R.radius),vec2f(p)+vec2f(R.radius));
  }
  found.uv = uv;
  if (any(uv < vec2f(0.0)) || any(uv > vec2f(R.size)-vec2f(1.0))) { found.status = 8u; return found; }
  let lo = vec2i(floor(uv));
  let frac = fract(uv);
  let weights = vec4f((1.0-frac.x)*(1.0-frac.y),frac.x*(1.0-frac.y),
    (1.0-frac.x)*frac.y,frac.x*frac.y);
  let offsets = array<vec2i,4>(vec2i(0,0),vec2i(1,0),vec2i(0,1),vec2i(1,1));
  for (var k = 0u; k < 4u; k++) {
    if (weights[k] < 1e-5) { continue; }
    let value = oldPoint(bounded(lo+offsets[k]));
    if (floor(value.w) != floor(klass)) {
      found.masked = true;
      continue;
    }
    found.support += weights[k];
    found.mask |= 1u<<k;
    found.donor += weights[k]*value.xyz;
  }
  if (found.masked) {
    if (found.support<R.support) { found.status = 9u; return found; }
    found.donor /= max(found.support,1e-6);
  }
  let relativeScale = max(distance(goal,R.camera),1.0);
  if (distance(found.donor,goal) > R.tolerance*relativeScale) { found.status = 10u; }
  return found;
}
// What an unrefreshed pixel needs, from its history alone: 1 a search for
// its medium in last frame's image, 2 nothing (plain sky, which keeps last
// frame's value), or the reason it must be re-traced: 3 no usable history,
// 4 sky that carries an overlay, 13 a critical ray.
fn classify(p: vec2i, prior: vec4f) -> u32 {
  criticalReason = 2u;
  if (R.historyReady < 0.5 || prior.w < 0.5) { return 3u; }
  let kind = u32(prior.w)-1u;
  criticalReason = 3u;
  if ((kind&64u) != 0u) { return 3u; }
  criticalReason = 0u;
  if ((kind&128u) == 0u) {
    criticalReason = criticalRay(p);
    if (criticalReason != 0u) { return 13u; }
  }
  if ((kind&16u) != 0u) { return 1u; }
  // Ordinary sky has no scattering point. Its escaped direction advances
  // at display rate and samples the cube once; ordered topology is repaired.
  let oldFront = textureLoad(previousFront,p,0);
  return select(2u,4u,max(oldFront.r,max(oldFront.g,oldFront.b)) > 1e-5);
}
// The nearest pixel the march refreshed this frame whose scattering point is
// of the class of prior, now and a frame ago: its change over the frame
// stands in for this pixel's. found is false when there is none nearby.
struct Anchor { pixel: vec2i, point: vec3f, found: bool }
fn findAnchor(p: vec2i, prior: vec4f) -> Anchor {
  // In turn: the pixel's own 2x4 interleave cell; when only one cell in
  // four is refreshed (idle), the eight cells around it at the refreshed
  // in-cell position; then the 7x7 block around the pixel.
  let base = p-vec2i(p.x&1,p.y&3);
  let phase = i32(R.refresh.y);
  let inCell = vec2i(phase&1,(phase>>1)&3);
  let cells = array<vec2i,8>(vec2i(-2,0),vec2i(2,0),vec2i(0,-4),vec2i(0,4),
    vec2i(-2,-4),vec2i(2,-4),vec2i(-2,4),vec2i(2,4));
  var anchor = Anchor(p,prior.xyz,false);
  var best = 1e30;
  for (var k = 0u; k < 65u; k++) {
    var q = p;
    if (k < 8u) {
      q = base+vec2i(i32(k&1u),i32(k>>1u));
      if (any(q >= vec2i(R.size))) { continue; }
    } else if (k < 16u) {
      if (k == 8u && best < 1e20) { break; }
      if (R.refresh.z < 0.0) { continue; }
      q = base+cells[k-8u]+inCell;
      if (any(q < vec2i(0)) || any(q >= vec2i(R.size))) { continue; }
    } else {
      if (k == 16u && best < 1e20) { break; }
      let n = i32(k-16u);
      q = bounded(p+vec2i(n%7-3,n/7-3));
    }
    if (!selected(q)) { continue; }
    if (!fresh(q)) { continue; }
    let candidate = textureLoad(currentPoint,q,0);
    if (floor(candidate.w) != floor(prior.w) || floor(oldPoint(q).w) != floor(prior.w)) {
      continue;
    }
    let delta = vec2f(q-p);
    let d = dot(delta,delta);
    if (d < best) {
      best = d;
      anchor = Anchor(q,candidate.xyz,true);
    }
  }
  return anchor;
}
// Returns 0 for a pixel the march refreshed this frame, 1 for a reprojected
// one, 2 for plain sky, 3 to 13 for a rejection (the reason, 13 a critical
// ray; the pixel is queued for an exact repair) and 16 outside the image.
// Every case ends in the one write at the bottom: the GPU runs a block of
// pixels in step, so each further copy of it would be paid by all of them.
fn projectPixel(pixel: vec2u) -> u32 {
  if (any(pixel >= R.size)) { return 16u; }
  let p = vec2i(pixel);
  // What the march left here: this frame's result on a fresh pixel, else
  // last frame's, which stays as the placeholder of a rejected pixel until
  // the queued repair overwrites it.
  var medium = textureLoad(currentFront,p,0);
  var point = textureLoad(currentPoint,p,0);
  let prior = oldPoint(p);
  var status = 0u;
  if (!fresh(p)) {
    status = classify(p,prior);
    if (status == 2u) {
      medium = textureLoad(previousFront,p,0);
      point = prior;
    }
  }
  if (status == 1u) {
    // The scattering point to find in last frame's image. The camera's
    // change comes from the anchor's world displacement, without projecting
    // a bent ray as a pinhole direction; under axial motion from the
    // rotation itself, which needs no anchor. Material-only motion keeps the
    // previous scattering location as the target.
    let anchor = findAnchor(p,prior);
    var goalPoint = prior.xyz;
    if ((R.enabled&4u) != 0u) {
      goalPoint = vec3f(dot(R.rotate0.xyz,prior.xyz),dot(R.rotate1.xyz,prior.xyz),
        dot(R.rotate2.xyz,prior.xyz));
    } else if (!anchor.found) {
      status = 5u;
    } else if (R.motion > 0.01) { goalPoint += anchor.point-oldPoint(anchor.pixel).xyz; }
    if (status == 1u) {
      // Captured rays include static topology. Do not orbit that overlay
      // with the material; it still receives geometric camera reprojection.
      let dt = select(R.delta,0.0,((u32(max(prior.w,1.0))-1u)&32u) != 0u);
      let was = locate(p,advect(goalPoint,-dt),prior.w);
      let uv = was.uv;
      if (was.status != 0u) {
        status = was.status;
      } else {
        // Last frame's medium at uv: over the matching donors only when
        // some were masked out, else one bilinear fetch.
        let lo = vec2i(floor(uv));
        let frac = fract(uv);
        let weights = vec4f((1.0-frac.x)*(1.0-frac.y),frac.x*(1.0-frac.y),
          (1.0-frac.x)*frac.y,frac.x*frac.y);
        let offsets = array<vec2i,4>(vec2i(0,0),vec2i(1,0),vec2i(0,1),vec2i(1,1));
        var history = vec4f(0.0);
        if (was.masked) {
          for (var k = 0u; k < 4u; k++) {
            if ((was.mask&(1u<<k))!=0u) {
              history += weights[k]*textureLoad(previousFront,bounded(lo+offsets[k]),0);
            }
          }
          history /= max(was.support,1e-6);
        } else {
          history = textureLoad(previousFront,lo,0);
          if (any(frac>vec2f(1e-6))) {
            history = textureSampleLevel(previousFront,historySampler,
              (uv+vec2f(0.5))/vec2f(R.size),0.0);
          }
        }
        // The history must change its transmittance the way the anchor did
        // (not at all without an anchor).
        let oldTotalT = clamp(abs(textureLoad(previousFront,p,0).a),0.0,1.0);
        let totalT = clamp(abs(history.a),0.0,1.0);
        var expected = oldTotalT;
        if (anchor.found) {
          expected = clamp(oldTotalT+abs(textureLoad(currentFront,anchor.pixel,0).a)
            -abs(textureLoad(previousFront,anchor.pixel,0).a),0.0,1.0);
        }
        if (abs(totalT-expected) > R.transmission) {
          status = 11u;
        } else {
          medium = vec4f(history.rgb,-max(totalT,1e-3));
          point = vec4f(advect(was.donor,dt),prior.w);
        }
      }
    }
  }
  put(pixel,medium,point);
  return status;
}
var<workgroup> localStats: array<atomic<u32>,16>;
var<workgroup> localClassStats: array<atomic<u32>,32>;
var<workgroup> localCritical: array<atomic<u32>,8>;
var<workgroup> localRepairCount: atomic<u32>;
var<workgroup> localRepairs: array<u32,64>;
var<workgroup> repairBase: u32;
// Counters and queue appends are gathered per workgroup first, so each
// group touches the global atomics once.
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) id: vec3u, @builtin(local_invocation_index) lane: u32) {
  let status = projectPixel(id.xy);
  if (status < 16u) {
    if ((R.enabled&2u) != 0u) {
      atomicAdd(&localStats[status],1u);
      if (criticalReason != 1u) { atomicAdd(&localCritical[criticalReason],1u); }
      if (status>=3u) {
        let prior = textureLoad(previousPoint,id.xy,0).w;
        let geometry = prior>=.5 && ((u32(max(prior,1.0))-1u)&32u)!=0u;
        atomicAdd(&localClassStats[select(16u,0u,geometry)+status],1u);
      }
    }
    if (status >= 3u) {
      let rank = atomicAdd(&localRepairCount,1u);
      localRepairs[rank] = id.y*R.size.x+id.x;
    }
  }
  workgroupBarrier();
  if (lane == 0u) {
    for (var k = 0u; k < 16u; k++) {
      let n = atomicLoad(&localStats[k]);
      if (n>0u) { atomicAdd(&counters[k],n); }
    }
    if ((R.enabled&2u)!=0u) {
      for (var k = 0u; k < 8u; k++) {
        let n = atomicLoad(&localCritical[k]);
        if (n>0u) { atomicAdd(&counters[16u+k],n); }
      }
      for (var k = 0u; k < 32u; k++) {
        let n = atomicLoad(&localClassStats[k]);
        if (n>0u) { atomicAdd(&counters[24u+k],n); }
      }
    }
    let count = atomicLoad(&localRepairCount);
    repairBase = atomicAdd(&repairQueue.count,count);
    let available = repairQueue.capacity-min(repairBase,repairQueue.capacity);
    atomicAdd(&repairQueue.overflow,count-min(count,available));
  }
  workgroupBarrier();
  if (lane < atomicLoad(&localRepairCount) && repairBase+lane < repairQueue.capacity) {
    repairQueue.items[repairBase+lane] = localRepairs[lane];
  }
}
`;class Ym{constructor(n,o){this.device=n;const l=GPUShaderStage.COMPUTE;this.layout=n.createBindGroupLayout({entries:[{binding:0,visibility:l,buffer:{type:"uniform"}},...[1,4].map(c=>({binding:c,visibility:l,texture:{sampleType:"float"}})),...[3,6].map(c=>({binding:c,visibility:l,texture:{sampleType:"unfilterable-float"}})),...[7,16].map(c=>({binding:c,visibility:l,texture:{sampleType:"uint"}})),{binding:8,visibility:l,storageTexture:{access:"write-only",format:"rgba16float"}},{binding:10,visibility:l,storageTexture:{access:"write-only",format:"rgba32float"}},{binding:11,visibility:l,sampler:{type:"filtering"}},...[12,13].map(c=>({binding:c,visibility:l,buffer:{type:"storage"}})),{binding:17,visibility:l,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:18,visibility:l,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"2d-array"}}]}),this.uniform=n.createBuffer({size:144,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.counters=n.createBuffer({size:224,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),n.createComputePipelineAsync({layout:n.createPipelineLayout({bindGroupLayouts:[this.layout]}),compute:{module:n.createShaderModule({code:Fm}),entryPoint:"main"}}).then(c=>{this.pipeline=c},o)}device;layout;pipeline=null;uniform;counters;group=null;boundQueue=null;boundPoint=null;run(n,o){const l=o.textures;if(!this.pipeline)return!1;if(this.boundQueue!==o.queue||this.boundPoint!==l.currentPoint||!this.group){const f=(g,y,v=!1)=>({binding:g,resource:y.createView({dimension:v?"2d-array":"2d"})}),h=[{binding:0,resource:{buffer:this.uniform}},f(1,l.previousFront),f(3,l.previousPoint),f(4,l.currentFront),f(6,l.currentPoint),f(7,l.currentRay),f(8,l.warpedFront),f(10,l.warpedPoint),{binding:11,resource:o.sampler},{binding:12,resource:{buffer:o.queue}},{binding:13,resource:{buffer:this.counters}},f(16,l.previousRay),f(17,l.currentPrefix,!0),f(18,l.warpedPrefix,!0)];this.group=this.device.createBindGroup({layout:this.layout,entries:h}),this.boundQueue=o.queue,this.boundPoint=l.currentPoint}this.device.queue.writeBuffer(this.uniform,0,o.uniform);const c=n.beginComputePass({timestampWrites:o.stamp()});return c.setPipeline(this.pipeline),c.setBindGroup(0,this.group),c.dispatchWorkgroups(Math.ceil(l.currentFront.width/8),Math.ceil(l.currentFront.height/8)),c.end(),!0}resetCounters(){this.device.queue.writeBuffer(this.counters,0,new Uint32Array(56))}async counts(){const n=this.device.createBuffer({size:224,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),o=this.device.createCommandEncoder();o.copyBufferToBuffer(this.counters,0,n,0,224),this.device.queue.submit([o.finish()]),await n.mapAsync(GPUMapMode.READ);const l=Array.from(new Uint32Array(n.getMappedRange()));return n.unmap(),n.destroy(),{fresh:l[0],reprojected:l[1],sky:l[2],repaired:l.slice(3,16).reduce((c,f)=>c+f,0),reasons:l.slice(3,16),criticalReasons:l.slice(16,24),geometryReasons:l.slice(27,40),otherReasons:l.slice(43,56)}}dispose(){this.uniform.destroy(),this.counters.destroy(),this.pipeline=null,this.group=null}}const Im=`
${ts}
struct SortUni {
  width: u32, height: u32, columns: u32, buckets: u32,
  span: u32, tile: u32, pad0: u32, pad1: u32
}
struct Bucket { count: atomic<u32>, cursor: atomic<u32>, start: u32, pad: u32 }
@group(0) @binding(0) var<storage,read> source: WorkQueueRead;
@group(0) @binding(1) var<storage,read_write> output: WorkQueueWrite;
@group(0) @binding(2) var<storage,read_write> bins: array<Bucket>;
@group(0) @binding(3) var<uniform> S: SortUni;
const SORT_GROUP_SIZE: u32 = 64u;
// The queue item of this lane under the queue's 2-D indirect dispatch.
fn itemIndex(group: vec3u, groups: vec3u, lane: u32) -> u32 {
  return (group.y*groups.x+group.x)*SORT_GROUP_SIZE+lane;
}
// Row-major index of the tile that holds a pixel.
fn bucket(pixel: u32) -> u32 {
  return ((pixel/S.width)/S.tile)*S.columns+(pixel%S.width)/S.tile;
}
@compute @workgroup_size(SORT_GROUP_SIZE)
fn count(@builtin(workgroup_id) group: vec3u, @builtin(num_workgroups) groups: vec3u,
         @builtin(local_invocation_index) lane: u32) {
  let index = itemIndex(group,groups,lane);
  if (index>=min(source.count,source.capacity)) { return; }
  atomicAdd(&bins[bucket(source.items[index])].count,1u);
}
var<workgroup> sums: array<u32,256>;
// One workgroup: each lane sums a run of S.span tiles, the lanes scan those
// sums, then each lane hands out its tiles' start offsets.
@compute @workgroup_size(256)
fn prefix(@builtin(local_invocation_index) lane: u32) {
  let begin = lane*S.span;
  let end = min(begin+S.span,S.buckets);
  var sum = 0u;
  for (var i = begin; i < end; i++) { sum += atomicLoad(&bins[i].count); }
  sums[lane] = sum;
  workgroupBarrier();
  for (var offset = 1u; offset < 256u; offset *= 2u) {
    var add = 0u;
    if (lane>=offset) { add = sums[lane-offset]; }
    workgroupBarrier();
    sums[lane] += add;
    workgroupBarrier();
  }
  var start = 0u;
  if (lane>0u) { start = sums[lane-1u]; }
  for (var i = begin; i < end; i++) {
    bins[i].start = start;
    atomicStore(&bins[i].cursor,0u);
    start += atomicLoad(&bins[i].count);
  }
}
@compute @workgroup_size(SORT_GROUP_SIZE)
fn scatter(@builtin(workgroup_id) group: vec3u, @builtin(num_workgroups) groups: vec3u,
           @builtin(local_invocation_index) lane: u32) {
  let index = itemIndex(group,groups,lane);
  if (index>=min(source.count,source.capacity)) { return; }
  let pixel = source.items[index];
  let bin = bucket(pixel);
  let rank = atomicAdd(&bins[bin].cursor,1u);
  output.items[bins[bin].start+rank] = pixel;
}
`;class Qm{constructor(n){this.device=n;const o=GPUShaderStage.COMPUTE;this.layout=n.createBindGroupLayout({entries:[{binding:0,visibility:o,buffer:{type:"read-only-storage"}},{binding:1,visibility:o,buffer:{type:"storage"}},{binding:2,visibility:o,buffer:{type:"storage"}},{binding:3,visibility:o,buffer:{type:"uniform"}}]});const l=n.createPipelineLayout({bindGroupLayouts:[this.layout]}),c=n.createShaderModule({code:Im}),f=h=>n.createComputePipeline({layout:l,compute:{module:c,entryPoint:h}});this.count=f("count"),this.scatter=f("scatter"),this.prefix=f("prefix"),this.uniform=n.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.args=n.createBuffer({size:12,usage:GPUBufferUsage.INDIRECT|GPUBufferUsage.COPY_DST})}device;layout;count;scatter;prefix;uniform;args;bins=null;output=null;group=null;input=null;key="";width=0;height=0;tile=16;spatialBuckets=0;prepare(n,o,l,c){const f=[o,l,c].join("/");if(this.input===n&&f===this.key)return;this.release(),this.input=n,this.key=f,this.width=o,this.height=l,this.tile=c;const h=Math.ceil(o/c);this.spatialBuckets=h*Math.ceil(l/c);const g=this.spatialBuckets;this.bins=this.device.createBuffer({size:g*16,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.output=this.device.createBuffer({size:n.size,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.group=this.device.createBindGroup({layout:this.layout,entries:[{binding:0,resource:{buffer:n}},{binding:1,resource:{buffer:this.output}},{binding:2,resource:{buffer:this.bins}},{binding:3,resource:{buffer:this.uniform}}]}),this.device.queue.writeBuffer(this.uniform,0,new Uint32Array([o,l,h,g,Math.ceil(g/256),c,0,0]))}run(n,o){if(!(!this.input||!this.output||!this.bins||!this.group)){n.clearBuffer(this.bins),n.copyBufferToBuffer(this.input,0,this.output,0,24),n.copyBufferToBuffer(this.input,8,this.args,0,12);for(const[l,c]of[["count",this.count],["prefix",this.prefix],["scatter",this.scatter]]){const f=n.beginComputePass({timestampWrites:o("ordered-"+l)});f.setPipeline(c),f.setBindGroup(0,this.group),l==="prefix"?f.dispatchWorkgroups(1):f.dispatchWorkgroupsIndirect(this.args,0),f.end()}n.copyBufferToBuffer(this.output,0,this.input,0,this.input.size)}}async audit(){if(!this.input||!this.bins)return{active:!1,count:0,invalid:0,duplicates:0,inversions:0};const n=this.device.createBuffer({size:this.input.size+this.bins.size,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),o=this.device.createCommandEncoder();o.copyBufferToBuffer(this.input,0,n,0,this.input.size),o.copyBufferToBuffer(this.bins,0,n,this.input.size,this.bins.size),this.device.queue.submit([o.finish()]),await n.mapAsync(GPUMapMode.READ);const l=new Uint32Array(n.getMappedRange()),c=Math.min(l[0],l[5]),f=new Set,h=Math.ceil(this.width/this.tile);let g=0,y=0,v=0;for(let x=0;x<c;x++){const w=l[6+x];w>=this.width*this.height&&g++,f.has(w)&&y++,f.add(w)}const b=this.input.size/4;for(let x=0;x<this.bins.size/16;x++){const w=l[b+x*4+2],T=w+l[b+x*4];for(let k=w;k<Math.min(T,c);k++){const O=l[6+k];Math.floor(Math.floor(O/this.width)/this.tile)*h+Math.floor(O%this.width/this.tile)!==x%this.spatialBuckets&&v++}}return n.unmap(),n.destroy(),{active:!0,count:c,invalid:g,duplicates:y,inversions:v,tile:this.tile,bytes:this.input.size+(this.bins?.size??0)}}release(){this.bins?.destroy(),this.output?.destroy(),this.bins=this.output=null,this.group=null,this.input=null,this.key=""}dispose(){this.release(),this.uniform.destroy(),this.args.destroy()}}class Wm{constructor(n){this.device=n;const o=l=>n.createBuffer({size:l,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.refineGeometryUniform=o(192),this.refineMaterialUniform=o(96),this.finalizeLayout=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),this.finalizePipeline=n.createComputePipeline({layout:n.createPipelineLayout({bindGroupLayouts:[this.finalizeLayout]}),compute:{module:n.createShaderModule({code:Zm}),entryPoint:"main"}}),this.allocateQueue(1)}device;refineGeometryUniform;refineMaterialUniform;refineQueue;queueCapacity=1;finalizeLayout;finalizePipeline;finalizeGroup;indirectBuffer=null;ordered=null;orderEnabled=!1;allocateQueue(n){this.refineQueue&&this.queueCapacity===n||(this.refineQueue?.destroy(),this.queueCapacity=n,this.refineQueue=this.device.createBuffer({size:Q1(n),usage:GPUBufferUsage.STORAGE|GPUBufferUsage.INDIRECT|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.finalizeGroup=this.device.createBindGroup({layout:this.finalizeLayout,entries:[{binding:0,resource:{buffer:this.refineQueue}}]}))}prepare(n){this.allocateQueue(n.temporal?n.width*n.height:1),this.orderEnabled=n.temporal,this.orderEnabled?(this.ordered??=new Qm(this.device),this.ordered.prepare(this.refineQueue,n.width,n.height,n.orderTile)):this.ordered?.release(),this.device.queue.writeBuffer(this.refineQueue,0,new Uint32Array([0,0,0,1,1,this.queueCapacity]))}refineGroup(n,o){return this.device.createBindGroup({layout:n,entries:o.map(l=>l.binding===0?{binding:0,resource:{buffer:this.refineGeometryUniform}}:l.binding===1?{binding:1,resource:{buffer:this.refineQueue}}:l.binding===11?{binding:11,resource:{buffer:this.refineMaterialUniform}}:l)})}setIndirectBuffer(n){this.indirectBuffer=n}orderedAudit(){return this.ordered?.audit()}refinementUniforms(n,o){const l=n.slice();l[25]=3;const c=o.slice();c[11]=1,this.device.queue.writeBuffer(this.refineGeometryUniform,0,l),this.device.queue.writeBuffer(this.refineMaterialUniform,0,c)}refine(n,o,l,c,f){let h=n.beginComputePass({timestampWrites:f("refine-queue")});h.setPipeline(this.finalizePipeline),h.setBindGroup(0,this.finalizeGroup),h.dispatchWorkgroups(1),h.end(),this.orderEnabled&&c&&this.ordered.run(n,f);const g=this.indirectBuffer??this.refineQueue;this.indirectBuffer&&n.copyBufferToBuffer(this.refineQueue,Qd,this.indirectBuffer,32,12),h=n.beginComputePass({timestampWrites:f("geodesic-refine")}),h.setPipeline(o),h.setBindGroup(0,l),h.dispatchWorkgroupsIndirect(g,this.indirectBuffer?32:Qd),h.end()}dispose(){this.ordered?.dispose(),this.refineQueue.destroy(),this.refineGeometryUniform.destroy(),this.refineMaterialUniform.destroy()}}const Xm=`
@group(0) @binding(0) var source: texture_3d<f32>;
@group(0) @binding(1) var mipOut: texture_storage_3d<rgba16float,write>;
@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) id: vec3u) {
  let dst = textureDimensions(mipOut);
  if (any(id >= dst)) { return; }
  let src = textureDimensions(source);
  // Include every source texel, including the 3 -> 1 level of a 96³ chain.
  let lo = id*src/dst;
  let hi = (id+vec3u(1))*src/dst;
  var sum = vec4f(0.0);
  for (var z = lo.z; z < hi.z; z++) {
    for (var y = lo.y; y < hi.y; y++) {
      for (var x = lo.x; x < hi.x; x++) {
        let value = textureLoad(source,vec3i(i32(x),i32(y),i32(z)),0);
        sum += value;
      }
    }
  }
  let span = hi-lo;
  textureStore(mipOut,id,sum/f32(span.x*span.y*span.z));
}`,Wd=`
@group(0) @binding(0) var source: texture_3d<f32>;
@group(0) @binding(1) var mipOut: texture_storage_3d<rgba16float,write>;
@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) id: vec3u) {
  if (any(id >= textureDimensions(mipOut))) { return; }
  let v = textureLoad(source,vec3i(id),0);
  let crust = 0.8*v.y+0.2*v.w;
  textureStore(mipOut,id,vec4f(crust,crust*crust,0.0,0.0));
}`;class Km{constructor(n){this.device=n,this.layout=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,texture:{viewDimension:"3d"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"3d"}}]});const o=n.createPipelineLayout({bindGroupLayouts:[this.layout]}),l=c=>n.createComputePipeline({layout:o,compute:{module:n.createShaderModule({code:c}),entryPoint:"main"}});this.mip=l(Xm),this.moments=l(Wd),this.squared=l(Wd.replace("vec4f(crust,crust*crust,0.0,0.0)","v*v"))}device;layout;mip;moments;squared;dispatch(n,o,l,c,f,h){const g=(b,x)=>b.createView({dimension:"3d",baseMipLevel:x,mipLevelCount:1}),y=this.device.createBindGroup({layout:this.layout,entries:[{binding:0,resource:g(l,c)},{binding:1,resource:g(f,h)}]}),v=n.beginComputePass();v.setPipeline(o),v.setBindGroup(0,y),v.dispatchWorkgroups(...[f.width,f.height,f.depthOrArrayLayers].map(b=>Math.ceil(Math.max(1,b>>h)/4))),v.end()}generate(n,o){for(let l=1;l<o.mipLevelCount;l++)this.dispatch(n,this.mip,o,l-1,o,l)}crustMoments(n,o,l=!1){const c=this.device.createTexture({size:[o.width,o.height,o.depthOrArrayLayers],dimension:"3d",format:"rgba16float",mipLevelCount:o.mipLevelCount,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING});return this.dispatch(n,l?this.squared:this.moments,o,0,c,0),this.generate(n,c),c}}class Jm{query;resolve;read;busy=!1;active=!1;labels=[];generation=0;samples=[];moving=!1;scale=1;eligible=!0;constructor(n){this.query=n.createQuerySet({type:"timestamp",count:128}),this.resolve=n.createBuffer({size:1024,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),this.read=n.createBuffer({size:1024,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})}reset(){this.generation++,this.samples=[]}begin(n,o,l=!0){this.active=!this.busy,this.labels=[],this.moving=n,this.scale=o,this.eligible=l}stamp(n){if(!this.active||this.labels.length>=64)return;const o=this.labels.length;return this.labels.push(n),{querySet:this.query,beginningOfPassWriteIndex:2*o,endOfPassWriteIndex:2*o+1}}resolveFrame(n){if(!this.active||!this.labels.length)return;const o=[...this.labels],l=this.generation,c=this.moving,f=this.scale,h=this.eligible;return n.resolveQuerySet(this.query,0,o.length*2,this.resolve,0),n.copyBufferToBuffer(this.resolve,0,this.read,0,o.length*16),this.busy=!0,this.active=!1,()=>{this.read.mapAsync(GPUMapMode.READ).then(()=>{const g=new BigUint64Array(this.read.getMappedRange()),y={};let v=null,b=0n;o.forEach((w,T)=>{const k=g[2*T],O=g[2*T+1];O<k||k===0n||Number(O-k)/1e6>=1e3||((v===null||k<v)&&(v=k),O>b&&(b=O),y[w]=Number(O-k)/1e6)}),this.read.unmap();const x=v===null?0:Number(b-v)/1e6;l===this.generation&&x>0&&x<1e3&&!("sky"in y)&&!("star-catalogue-build"in y)&&(this.samples.push({frameMs:x,passes:y,moving:c,scale:f,eligible:h}),this.samples.length>180&&this.samples.shift()),this.busy=!1},()=>{this.busy=!1})}}report(){const n=this.samples,o=c=>c.sort((f,h)=>f-h)[c.length>>1]??0,l={};for(const c of n)for(const f of Object.keys(c.passes))l[f]=0;for(const c of Object.keys(l))l[c]=o(n.map(f=>f.passes[c]??0));return{count:n.length,frameMs:o(n.map(c=>c.frameMs)),passes:l,samples:[...n]}}budgetSample(n,o){const l=this.samples.filter(c=>c.eligible&&c.moving===n&&c.scale===o).slice(-16);return l.length<8?0:l.map(c=>c.frameMs).sort((c,f)=>c-f)[l.length>>1]}dispose(){this.generation++,this.query.destroy(),this.resolve.destroy(),this.read.destroy()}}const $m=-1,eg=1,tg=24,ag=16,ig=24,ng=12,rg=1.25,lg=1,sg=1,og=1,ug=64,cg=1e30,Xd=.005,Kd=.002,fg=16,dg=1,hg=4,pg=.04,mg=.15,gg=.3,vg=.75,yg=1,xg=.85,bg=14,Sg=16;class wg{yaw=-.5;pitch=.082;dist=13;lookYaw=0;lookPitch=0;velYaw=0;velPitch=0;homing=!1;fov=55;onInteract=null;looking=!1;lastInputAt=-1/0;ptrs=new Map;ac=new AbortController;attach(n){const{signal:o}=this.ac;n.style.touchAction="none",n.style.cursor="grab",n.addEventListener("pointerdown",c=>{try{n.setPointerCapture(c.pointerId)}catch{}this.ptrs.set(c.pointerId,{x:c.clientX,y:c.clientY}),n.style.cursor="grabbing",c.shiftKey||(this.velYaw=this.velPitch=0),this.lastInputAt=performance.now(),this.onInteract?.()},{signal:o}),n.addEventListener("pointermove",c=>{const f=this.ptrs.get(c.pointerId);if(f){if(this.lastInputAt=performance.now(),this.ptrs.size===2){const h=[...this.ptrs.entries()].find(([g])=>g!==c.pointerId);if(h){const g=Math.hypot(f.x-h[1].x,f.y-h[1].y),y=Math.hypot(c.clientX-h[1].x,c.clientY-h[1].y);g>0&&(this.dist=Math.max(3.4,Math.min(70,this.dist*g/y)));const v=this.fov*5e-5;this.lookYaw-=(c.clientX-f.x)*.5*v,this.lookPitch+=(c.clientY-f.y)*.5*v,this.lookPitch=Math.max(-1.5,Math.min(1.5,this.lookPitch)),this.homing=!1,this.looking=!0}}else if(c.shiftKey){const h=this.fov*5e-5;this.lookYaw-=(c.clientX-f.x)*h,this.lookPitch+=(c.clientY-f.y)*h,this.lookPitch=Math.max(-1.5,Math.min(1.5,this.lookPitch)),this.homing=!1,this.looking=!0}else{const h=c.clientX-f.x,g=c.clientY-f.y;this.orbitBy(-h*.005,g*.005),this.velYaw=-h*.005,this.velPitch=g*.005,this.looking=!1}this.ptrs.set(c.pointerId,{x:c.clientX,y:c.clientY})}},{signal:o});const l=c=>{this.ptrs.delete(c.pointerId),this.lastInputAt=performance.now(),this.ptrs.size===0&&(this.looking=!1),n.style.cursor="grab"};n.addEventListener("pointerup",l,{signal:o}),n.addEventListener("pointercancel",l,{signal:o}),n.addEventListener("wheel",c=>{c.preventDefault(),this.dist=Math.max(3.4,Math.min(70,this.dist*Math.exp(c.deltaY*.0012))),this.lastInputAt=performance.now(),this.onInteract?.()},{passive:!1,signal:o}),n.addEventListener("dblclick",()=>{this.lastInputAt=performance.now(),this.reset()},{signal:o})}detach(){this.ac.abort()}orbitBy(n,o){this.yaw+=n,this.pitch=Math.max(-1.45,Math.min(1.45,this.pitch+o))}setView(n){n.yawDeg!==void 0&&(this.yaw=n.yawDeg*Math.PI/180),n.pitchDeg!==void 0&&(this.pitch=n.pitchDeg*Math.PI/180),n.dist!==void 0&&(this.dist=n.dist),this.lookYaw=this.lookPitch=0,this.homing=!1,this.velYaw=this.velPitch=0}getState(){return{yaw:this.yaw,pitch:this.pitch,dist:this.dist,lookYaw:this.lookYaw,lookPitch:this.lookPitch}}setState(n){this.yaw=n.yaw,this.pitch=Math.max(-1.45,Math.min(1.45,n.pitch)),this.dist=Math.max(3.4,Math.min(70,n.dist)),this.lookYaw=n.lookYaw,this.lookPitch=Math.max(-1.5,Math.min(1.5,n.lookPitch)),this.velYaw=this.velPitch=0,this.homing=!1,this.looking=!1,this.ptrs.clear(),this.lastInputAt=-1/0}reset(){this.setView({yawDeg:-29,pitchDeg:4.7,dist:13})}rehome(){this.homing=!0}get offCenter(){return Math.abs(this.lookYaw)+Math.abs(this.lookPitch)>.02}isUserActive(n=performance.now(),o=400){return this.ptrs.size>0||n-this.lastInputAt<o}update(n,o){const l=this.ptrs.size>0&&!this.looking;if(o&&!l&&(this.yaw+=n*.03),this.velYaw||this.velPitch){(this.ptrs.size===0||this.looking)&&this.orbitBy(this.velYaw*n*60,this.velPitch*n*60);const c=Math.pow(.9,n*60);this.velYaw*=c,this.velPitch*=c,Math.abs(this.velYaw)<1e-5&&Math.abs(this.velPitch)<1e-5&&(this.velYaw=this.velPitch=0)}this.homing&&(this.lookYaw*=.82,this.lookPitch*=.82,Math.abs(this.lookYaw)<8e-4&&Math.abs(this.lookPitch)<8e-4&&(this.lookYaw=this.lookPitch=0,this.homing=!1))}poseKey(){return this.yaw.toFixed(5)+","+this.pitch.toFixed(5)+","+this.dist.toFixed(4)+","+this.lookYaw.toFixed(5)+","+this.lookPitch.toFixed(5)}axisymmetryKey(){return this.pitch.toFixed(5)+","+this.dist.toFixed(4)+","+this.lookYaw.toFixed(5)+","+this.lookPitch.toFixed(5)}}const Eg=.33,Au=1,xu=1e3/240,Mg=2,Ag=100,Tg=48,Rg=6,zg=.94,Jd=220,$d=900,Cg=2,e1=1.1,t1=.85,kg=2e3,_g=2500,Ug=3e4,Dg=350,Og=3e3,Bg=3,Lg=800,Ng=12e3,Gg=(u,n,o)=>Math.max(n,Math.min(o,u)),fr=u=>Math.round(Gg(u,Eg,Au)*100)/100;class Hg{displayPeriodMs=1e3/60;rafWindow=[];slowerCadenceRun=[];slowerCadenceEvidence=[];lastCap=Number.NaN;lastScaleChange=-1/0;lastUnhealthyAt=-1/0;lastDownAt=-1/0;failedScale;growthBlockedUntil=0;wasInteractive=!1;gestureScale;gestureHeavyFrames=0;movingScale;heavyCost=0;heavyCostScale=0;calmSince;restoreDeadline=0;lastUpAt=-1/0;ceilingScale;ceilingUntil=0;constructor(n){}observeRaf(n,o){if(!(n>=Mg&&n<=Ag))return;if(this.rafWindow.push(n),this.rafWindow.length>Tg&&this.rafWindow.shift(),n>this.displayPeriodMs*1.12){const f=this.slowerCadenceRun.length?this.slowerCadenceRun.reduce((y,v)=>y+v,0)/this.slowerCadenceRun.length:n;Math.abs(n-f)>Math.max(.8,f*.09)?(this.slowerCadenceRun=[n],this.slowerCadenceEvidence=[o]):(this.slowerCadenceRun.push(n),this.slowerCadenceEvidence.push(o),this.slowerCadenceRun.length>20&&(this.slowerCadenceRun.shift(),this.slowerCadenceEvidence.shift()));const h=this.slowerCadenceEvidence.slice(-3),g=o&&h.filter(Boolean).length>=2;if(this.slowerCadenceRun.length>=5&&g){const y=[...this.slowerCadenceRun].sort((v,b)=>v-b);this.displayPeriodMs=Math.max(xu,y[Math.floor(y.length/2)]),this.rafWindow=[...this.slowerCadenceRun],this.slowerCadenceRun=[],this.slowerCadenceEvidence=[]}return}if(this.slowerCadenceRun=[],this.slowerCadenceEvidence=[],this.rafWindow.length<6)return;const l=[...this.rafWindow].sort((f,h)=>f-h),c=l[l.length>>1];c<this.displayPeriodMs*.92&&(this.displayPeriodMs=Math.max(xu,c))}targetFrameMs(n){const o=n>0&&n<240?1e3/n:0;return Math.max(xu,this.displayPeriodMs,o)}reset(n){this.lastScaleChange=n,this.lastUnhealthyAt=n,this.growthBlockedUntil=n+350,this.failedScale=void 0,this.gestureScale=void 0,this.gestureHeavyFrames=0,this.movingScale=void 0,this.ceilingScale=void 0}tick(n){const o=Math.min(n.gpuBudgetMs??1/0,this.targetFrameMs(n.fpsCap)),l=()=>({changed:!1,scale:n.scale,reason:"none",targetMs:o});if(n.fpsCap!==this.lastCap){const b=Number.isFinite(this.lastCap);this.lastCap=n.fpsCap,b&&this.reset(n.now)}if(this.wasInteractive&&!n.interactive&&(this.failedScale=void 0,this.restoreDeadline=n.now+Og),n.interactive||n.calm===!1?this.calmSince=void 0:this.calmSince??=n.now,n.enabled?!this.wasInteractive&&n.interactive&&(this.gestureScale===void 0&&(this.gestureHeavyFrames=0,this.heavyCostScale=0),this.gestureScale=Math.max(this.gestureScale??0,n.scale)):this.gestureScale=void 0,this.wasInteractive=n.interactive,!n.enabled||!n.allowChanges)return l();if(n.gpuBudgetMs!==void 0){const b=n.timestampMs??0,x=b>0&&Number.isFinite(b),w=n.now-this.lastScaleChange,T=(j,Z)=>{const P=fr(j);return Math.abs(P-n.scale)<.005?l():(P>n.scale&&(this.lastUpAt=n.now),this.lastScaleChange=n.now,{changed:!0,scale:P,reason:Z,targetMs:o})};n.interactive&&n.heavy&&(this.gestureHeavyFrames++,x&&(this.heavyCost=b,this.heavyCostScale=n.scale));const k=this.gestureHeavyFrames>=Bg;if(!n.interactive&&this.gestureScale!==void 0&&(this.gestureScale<=n.scale+.005?(k&&(this.movingScale=void 0),this.gestureScale=void 0):n.now>this.restoreDeadline&&(this.gestureScale=void 0)),n.interactive&&k&&this.movingScale!==void 0&&this.movingScale<n.scale-.005)return T(this.movingScale,"gesture-start");const O=this.gestureScale!==void 0&&w>=$d&&this.calmSince!==void 0&&n.now-this.calmSince>=Dg,R=()=>{const j=this.gestureScale;if(k){const Z=this.heavyCostScale===n.scale&&this.heavyCost>0&&Math.sqrt(o*t1/this.heavyCost)>=1.25;this.movingScale=fr(Z?Math.min(j,n.scale*e1):n.scale)}return this.gestureScale=void 0,this.gestureHeavyFrames=0,this.ceilingScale=void 0,T(j,"gesture-end")};if(!n.streaming)return O?R():l();if(!x)return l();if(b>o*1.03)return!n.interactive&&n.now-this.lastUpAt<_g||w<Jd?l():(n.interactive||(this.ceilingScale=n.scale,this.ceilingUntil=n.now+Ug),T(Math.max(n.scale*.8,n.scale*Math.sqrt(o*.92/b)),"deadline-miss"));if(n.interactive)return l();if(this.gestureScale!==void 0)return O?R():l();if(w<kg)return l();this.ceilingScale!==void 0&&n.now>this.ceilingUntil&&(this.ceilingScale=void 0);let N=n.scale*Math.min(Cg,Math.sqrt(o*t1/b));return this.ceilingScale!==void 0&&(N=Math.min(N,this.ceilingScale*.94)),N>=n.scale*e1?T(N,"headroom"):l()}if(!n.streaming||n.completedCount<8)return l();const c=1e3/o,f=n.completedFps+n.skipsPerSec,h=Math.min(c,Math.max(f,1)),g=1e3/h;if(n.skipsPerSec>=Rg&&n.gpuFrameMs>g*1.02&&n.now-this.lastScaleChange>=Jd){const b=n.scale*Math.sqrt(g*.85/n.gpuFrameMs),x=fr(Math.max(b,n.scale*.66));if(x<n.scale-.005)return this.failedScale=n.scale,this.lastDownAt=n.now,this.lastScaleChange=n.now,this.growthBlockedUntil=n.now+(n.interactive?500:900),{changed:!0,scale:x,reason:"deadline-miss",targetMs:o}}if(!(n.completedFps>=h*zg))return this.lastUnhealthyAt=n.now,l();if(n.interactive||n.scale>=Au-.005||n.now<this.growthBlockedUntil||n.now-this.lastUnhealthyAt<Lg||n.now-this.lastScaleChange<$d)return l();this.failedScale!==void 0&&n.now-this.lastDownAt>Ng&&(this.failedScale=void 0);let v;if(this.failedScale===void 0)v=fr(Math.min(Au,n.scale*2));else{if(this.failedScale<=n.scale+.015)return l();v=fr(Math.min(n.scale*2,(n.scale+this.failedScale)/2))}return v<=n.scale+.005?l():(this.lastScaleChange=n.now,{changed:!0,scale:v,reason:"probe",targetMs:o})}}const Bu=.98*.98,Tu=u=>Math.sqrt(Math.max(0,Bu-u*u)),W1=u=>Math.sqrt(Math.max(0,Bu-u*u)),$l=(u,n=0)=>1+Math.sqrt(Math.max(1-u*u-n*n,0)),X1=(u,n=0)=>1-Math.sqrt(Math.max(1-u*u-n*n,0)),K1=(u,n=0)=>{const o=u===0?3:2*(1+Math.cos(.6666666666666666*Math.acos(-u)));if(n===0)return o;let l=o;for(let c=0;c<40;c++){const f=Math.sqrt(Math.max(l-n*n,1e-12)),h=l*l-3*l+2*n*n+2*u*f,g=2*l-3+u/f,y=h/g;if(l-=y,Math.abs(y)<1e-13)break}return l};function a1(u,n,o=0){const l=o*o,c=n*n,f=u*u,h=f*u,g=-(f-2*u+l)/f,y=-n*(2*u-l)/f,v=f+c+c*(2*u-l)/f,b=-2*(u-l)/h,x=2*n*(u-l)/h,w=2*u-2*c*(u-l)/h,T=(-x+Math.sqrt(Math.max(x*x-b*w,0)))/w,k=-(g+2*y*T+v*T*T),O=k>0?1/Math.sqrt(k):1/0;return{omega:T,ut:O,energy:-(g+y*T)*O,angularMomentum:(y+v*T)*O}}const Pg=(u,n,o=0)=>{const l=Math.sqrt(Math.max(u-o*o,1e-9));return l/(u*u+n*l)};function qg(u,n=0){if(n===0){const f=1+Math.cbrt(1-u*u)*(Math.cbrt(1+u)+Math.cbrt(1-u)),h=Math.sqrt(3*u*u+f*f);return 3+h-Math.sqrt((3-f)*(3+f+2*h))}const o=f=>{const h=1e-5*f;return(a1(f+h,u,n).energy-a1(f-h,u,n).energy)/(2*h)};let l=K1(u,n)*1.02,c=12;for(let f=0;f<70;f++){const h=.5*(l+c);o(h)>0?c=h:l=h}return .5*(l+c)}const Vg=(u,n=0)=>qg(u,n),jg=(u,n=0)=>{const o=Math.abs(u),l=$l(o,n),c=K1(o,n);return l+.9*(c-l)},Zg={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹","-":"⁻"},Fg=u=>String(u).split("").map(n=>Zg[n]??n).join("");function i1(u,n){if(!isFinite(u))return"—";const o=Math.floor(Math.log10(Math.abs(u)));return o>=-1&&o<4?u.toFixed(n):(u/Math.pow(10,o)).toFixed(1)+"×10"+Fg(o)}const J1=(u,n)=>u[0]*n[0]+u[1]*n[1]+u[2]*n[2],Yg=(u,n)=>[u[1]*n[2]-u[2]*n[1],u[2]*n[0]-u[0]*n[2],u[0]*n[1]-u[1]*n[0]],$1=(u,n)=>{const[o,l,c]=u,f=n*n,h=o*o+l*l+c*c-f,g=.5*(h+Math.sqrt(h*h+4*f*c*c));return Math.sqrt(Math.max(g,Number.MIN_VALUE))},eh=(u,n,o,l)=>{const c=u*u;return(2*u-l*l)*c/(c*c+n*o*o)},n1=(u,n,o=0)=>{const[l,c,f]=u,h=$1(u,n),g=h*h,y=n*n,v=g+y,b=[1,(h*l+n*c)/v,(h*c-n*l)/v,f/h],x=eh(h,y,f,o),w=new Float64Array(16);for(let T=0;T<4;T++)for(let k=0;k<4;k++){const O=T*4+k;w[O]=(T===k?T===0?-1:1:0)+x*b[T]*b[k]}return w},Ig=(u,n,o=0)=>{const[l,c,f]=u,h=$1(u,n),g=h*h,y=n*n,v=g+y,b=[-1,(h*l+n*c)/v,(h*c-n*l)/v,f/h],x=eh(h,y,f,o),w=new Float64Array(16);for(let T=0;T<4;T++)for(let k=0;k<4;k++){const O=T*4+k;w[O]=(T===k?T===0?-1:1:0)-x*b[T]*b[k]}return w},gn=(u,n,o)=>{let l=0;for(let c=0;c<4;c++)for(let f=0;f<4;f++)l+=n[c]*u[c*4+f]*o[f];return l},ql=(u,n)=>{const o=[0,0,0,0];for(let l=0;l<4;l++)for(let c=0;c<4;c++)o[l]+=u[l*4+c]*n[c];return o},Vl=(u,n)=>{const o=[0,0,0,0];for(let l=0;l<4;l++)for(let c=0;c<4;c++)o[l]+=u[l*4+c]*n[c];return o},r1=(u,n,o)=>{for(let l=0;l<4;l++)u[l]+=o*n[l]},Qg=u=>[0,u[0],u[1],u[2]],bu=(u,n,o,l)=>{const c=Qg(o);for(let y=0;y<2;y++){r1(c,n,gn(u,n,c));for(const v of l)r1(c,v,-gn(u,v,c))}const f=gn(u,c,c);if(!(f>1e-24)||!Number.isFinite(f))throw new Error("Camera seed is degenerate in the static observer rest space.");const h=1/Math.sqrt(f);for(let y=0;y<4;y++)c[y]*=h;const g=[c[1],c[2],c[3]];if(J1(g,o)<0)for(let y=0;y<4;y++)c[y]*=-1;return c},l1=(u,n,o)=>{const l=Math.abs(gn(u,n,n)+1);let c=0,f=0;for(let h=0;h<o.length;h++){c=Math.max(c,Math.abs(gn(u,n,o[h])));for(let g=0;g<o.length;g++)f=Math.max(f,Math.abs(gn(u,o[h],o[g])-(h===g?1:0)))}return{timelike:l,restOrthogonality:c,spatialOrthonormality:f,max:Math.max(l,c,f)}},jl=u=>[Math.fround(u[0]),Math.fround(u[1]),Math.fround(u[2]),Math.fround(u[3])],th=(u,n,o,l=0)=>{const c=n1(u,n,l),f=-c[0];if(!(f>0)||!Number.isFinite(f))throw new Error("A coordinate-static camera is undefined inside the Kerr ergoregion.");const h=Math.sqrt(f),g=[1/h,0,0,0],y=bu(c,g,o.right,[]),v=bu(c,g,o.up,[y]);let b=bu(c,g,o.forward,[y,v]);J1(Yg([y[1],y[2],y[3]],[v[1],v[2],v[3]]),[b[1],b[2],b[3]])>0&&(b=b.map(C=>-C));const w={observer:ql(c,g),right:ql(c,y),up:ql(c,v),forward:ql(c,b)},T=l1(c,g,[y,v,b]),k=[Math.fround(u[0]),Math.fround(u[1]),Math.fround(u[2])],O=Math.fround(n),R=Math.fround(l),N=n1(k,O,R),j=Ig(k,O,R),Z=[jl(w.observer),jl(w.right),jl(w.up),jl(w.forward)],P=Vl(j,Z[0]),Y=[Vl(j,Z[1]),Vl(j,Z[2]),Vl(j,Z[3])];return{lapse:h,contravariant:{observer:g,right:y,up:v,forward:b},covariant:w,residuals:T,uploadedF32Residuals:l1(N,P,Y)}},Wl=2048,Zl=64,Wg=`
@group(0) @binding(24) var materialPointOut: texture_storage_2d<rgba32float,write>;
@group(0) @binding(25) var materialPointPrev: texture_2d<f32>;
var<private> scatteringPointSum: vec3f = vec3f(0.0);
var<private> scatteringPointWeight: f32 = 0.0;
var<private> scatteringRadiusSum: f32 = 0.0;
var<private> geometryOverlayTouched: bool = false;
`,Xg=`
struct ExtC {
  E: f32, L: f32, K: f32, Qc: f32,
  a: f32, a2: f32, q2: f32, aE2: f32,
  rPlus: f32, rMinus: f32, rP: f32, tol: f32,
}
// state: a = (r, dr/dl, m.x, m.y), b = (m.z, m'.x, m'.y, m'.z), psi
struct ExtSt { a: vec4f, b: vec4f, psi: f32 }
struct ExtStep { s: ExtSt, err: f32 }
fn extSgn(x: f32) -> f32 { return select(1.0,-1.0,x < 0.0); }
fn extP(c: ExtC, r: f32) -> f32 { return c.E*(r*r+c.a2)-c.a*c.L; }
fn extDelta(c: ExtC, r: f32) -> f32 { return r*r-2.0*r+c.a2+c.q2; }
fn extR(c: ExtC, r: f32) -> f32 { let pp = extP(c,r); return pp*pp-extDelta(c,r)*c.K; }
fn extRd2(c: ExtC, r: f32) -> f32 { return 2.0*c.E*r*extP(c,r)-(r-1.0)*c.K; }
fn extSpeed2(c: ExtC, mz: f32) -> f32 { return c.Qc+c.L*c.L+c.aE2*mz*mz; }
fn extRstar(c: ExtC, r: f32) -> f32 {
  return (log(abs(r-c.rPlus))-log(abs(r-c.rMinus)))/(c.rPlus-c.rMinus);
}
// Horizon-regular azimuth rate. The clamp only bites on the physical singular
// lines (turning point on a horizon), where the azimuth is unresolvable anyway.
fn extRad(c: ExtC, r: f32, rp: f32, ch: f32) -> f32 {
  let den = extP(c,r)-ch*rp;
  return clamp(c.a*c.K/select(den,extSgn(den)*1e-9,abs(den) < 1e-9),-2e4*c.E,2e4*c.E);
}
fn extDeriv(c: ExtC, s: ExtSt, ch: f32) -> ExtSt {
  let mz = s.b.x;
  let m = vec3f(s.a.zw,mz);
  let fz = c.aE2*mz;
  let sp2 = extSpeed2(c,mz);
  let mpp = fz*(vec3f(0.0,0.0,1.0)-mz*m)-sp2*m;
  return ExtSt(vec4f(s.a.y,extRd2(c,s.a.x),s.b.yz),
               vec4f(s.b.w,mpp),
               extRad(c,s.a.x,s.a.y,ch)-c.a*c.E);
}
fn extAxpy(s: ExtSt, k: ExtSt, h: f32) -> ExtSt {
  return ExtSt(s.a+h*k.a,s.b+h*k.b,s.psi+h*k.psi);
}
/* Dormand-Prince 5(4) step with an embedded error estimate; k1 is supplied by
   the caller (a retried step restarts from the same state). err is the RMS
   of the component errors over tol·(scale + |y|); accept when err <= 1. */
fn extDopri(c: ExtC, s: ExtSt, h: f32, ch: f32, k1: ExtSt) -> ExtStep {
  let k2 = extDeriv(c,extAxpy(s,k1,0.2*h),ch);
  let k3 = extDeriv(c,extAxpy(extAxpy(s,k1,0.075*h),k2,0.225*h),ch);
  let k4 = extDeriv(c,extAxpy(extAxpy(extAxpy(s,k1,0.9777777778*h),k2,-3.7333333333*h),k3,3.5555555556*h),ch);
  let k5 = extDeriv(c,extAxpy(extAxpy(extAxpy(extAxpy(s,k1,2.9525986892*h),k2,-11.5958016736*h),k3,9.8228928517*h),k4,-0.2908093278*h),ch);
  let k6 = extDeriv(c,extAxpy(extAxpy(extAxpy(extAxpy(extAxpy(s,k1,2.8462752525*h),k2,-10.7575757576*h),k3,8.9064227178*h),k4,0.2784090909*h),k5,-0.2735313036*h),ch);
  let y = extAxpy(extAxpy(extAxpy(extAxpy(extAxpy(s,k1,0.0911458333*h),k3,0.4492362983*h),k4,0.6510416667*h),k5,-0.3223758834*h),k6,0.1309523810*h);
  let k7 = extDeriv(c,y,ch);
  let e = extAxpy(extAxpy(extAxpy(extAxpy(extAxpy(extAxpy(ExtSt(vec4f(0.0),vec4f(0.0),0.0),
    k1,0.0012326389*h),k3,-0.0042527703*h),k4,0.0369791667*h),k5,-0.0508637709*h),k6,0.0419047619*h),k7,-0.025*h);
  let scA = c.tol*(vec4f(1.0,c.E,1.0,1.0)+max(abs(s.a),abs(y.a)));
  let scB = c.tol*(vec4f(1.0,c.E,c.E,c.E)+max(abs(s.b),abs(y.b)));
  let scP = c.tol*(1.0+max(abs(s.psi),abs(y.psi)));
  let qa = e.a/scA; let qb = e.b/scB; let qp = e.psi/scP;
  return ExtStep(y,sqrt((dot(qa,qa)+dot(qb,qb)+qp*qp)/9.0));
}
// Largest step whose displacement v·h + ½·acc·h² stays under lim.
fn extSolveH(v: f32, acc: f32, lim: f32) -> f32 {
  if (acc < 1e-12) { return lim/max(v,1e-12); }
  return (-v+sqrt(v*v+2.0*acc*lim))/acc;
}
// Project the state back onto the exact constraints: |dr/dl| = sqrt(R), |m| = 1,
// m' tangential with |m'| = sqrt(Q + L^2 + a^2E^2 m_z^2).
fn extProject(c: ExtC, s0: ExtSt) -> ExtSt {
  var s = s0;
  let RR = extR(c,s.a.x);
  if (RR > 0.0) { s.a.y = extSgn(s.a.y)*sqrt(RR); }
  var m = vec3f(s.a.zw,s.b.x);
  m = m/max(length(m),1e-12);
  var mp = vec3f(s.b.yzw);
  mp -= dot(mp,m)*m;
  let sp = length(mp);
  let spx = sqrt(max(extSpeed2(c,m.z),0.0));
  if (sp > 1e-12) { mp *= spx/sp; }
  s.a = vec4f(s.a.xy,m.xy); s.b = vec4f(m.z,mp);
  return s;
}
/* ——— topology overlay: translucent wireframe shells ——— */
fn topoColor(kind: u32) -> vec3f {
  switch kind {
    case 0u: { return vec3f(1.0,0.42,0.12); }   // outer horizon
    case 1u: { return vec3f(0.55,0.30,1.0); }   // inner (Cauchy) horizon
    case 2u: { return vec3f(0.20,0.85,1.0); }   // outer ergosurface
    default: { return vec3f(0.35,1.0,0.45); }   // inner ergosurface
  }
}
fn topoGridLine(theta: f32, phi: f32) -> f32 {
  let k = 0.2617993878;   // 15 degrees
  let dt = abs(theta/k-round(theta/k))*k;
  let dp = abs(phi/k-round(phi/k))*k*max(sin(theta),0.05);
  return 1.0-smoothstep(0.0,0.012,min(dt,dp));
}
struct TopoAcc { rgb: vec3f, tr: vec3f }
fn topoShell(acc: TopoAcc, kind: u32, theta: f32, phi: f32, edge: f32) -> TopoAcc {
  let base = select(U.topoErgo,U.topoHorizon,kind < 2u);
  if (base <= 0.0) { return acc; }
  // Every window ray crosses each horizon twice, so a uniform fill would only
  // fog the window. The shells are drawn as wireframe cages: a faint fill,
  // grid lines, and a grazing-incidence limb carry the shape.
  let alpha = clamp(base*(0.12+U.topoGrid*topoGridLine(theta,phi)+U.topoEdge*edge),0.0,0.95);
  return TopoAcc(acc.rgb+acc.tr*topoColor(kind)*(alpha*0.5),acc.tr*(1.0-alpha));
}
/* Asymptotic tail from |r| = 12 to infinity in w = 1/|r|: the remaining Mino
   time and the angular increments are smooth ODEs on [0, w0] because
   G(w) = w⁴R(±1/w) → E² as w → 0. Three RK4 steps suffice (~1e-6 rad). */
fn extTailDeriv(c: ExtC, w: f32, sgnR: f32, st: ExtSt, ch: f32) -> ExtSt {
  let ww = max(w,1e-9);
  let r = sgnR/ww;
  let pw = c.E*(1.0+c.a2*w*w)-c.a*c.L*w*w;
  let G = max(pw*pw-(w*w-2.0*sgnR*w*w*w+(c.a2+c.q2)*w*w*w*w)*c.K,1e-12);
  let invG = inverseSqrt(G);
  let rp = -sgnR*sqrt(G)/(ww*ww);
  let d = extDeriv(c,ExtSt(vec4f(r,rp,st.a.zw),st.b,st.psi),ch);
  return ExtSt(vec4f(0.0,0.0,d.a.zw*invG),d.b*invG,d.psi*invG);
}
fn extDir(s: ExtSt) -> vec3f {
  let m = normalize(vec3f(s.a.zw,s.b.x));
  let cs = cos(s.psi); let sn = sin(s.psi);
  return vec3f(m.x*cs-m.y*sn,m.x*sn+m.y*cs,m.z);
}
fn extendRay(h: ptr<function, Hits>, x: vec3f, p: vec3f, E: f32) {
  var c: ExtC;
  c.a = U.a; c.a2 = U.a*U.a; c.q2 = U.q2; c.E = E; c.aE2 = c.a2*E*E; c.tol = U.extTol;
  let disc = max(1.0-c.a2-c.q2,1e-6);
  c.rPlus = 1.0+sqrt(disc); c.rMinus = 1.0-sqrt(disc);
  let rad = kerrRadiusState(x,c.a2); let r0 = rad.r;
  let u0 = clamp(x.z/r0,-1.0,1.0);
  let s2 = max(1.0-u0*u0,1e-8); let s0 = sqrt(s2);
  c.L = x.x*p.y-x.y*p.x;
  let pth = (u0/s0)*(x.x*p.x+x.y*p.y)-r0*s0*p.z;
  c.Qc = pth*pth+u0*u0*(c.L*c.L/s2-c.aE2);
  c.K = c.Qc+(c.L-c.a*E)*(c.L-c.a*E);
  let rP2 = c.a*c.L/E-c.a2;
  c.rP = select(-1.0,sqrt(max(rP2,0.0)),rP2 > 0.0);
  // Initial signs from the forward contravariant velocity; speeds are set
  // exactly from the potentials. m starts at azimuth 0: the whole initial
  // azimuth lives in psi.
  let dxF = derivAtRadius(x,p,E,c.a,c.a2,rad).dx;
  let r02 = r0*r0; let D = r02*r02+c.a2*x.z*x.z;
  let gr = vec3f(r02*r0*x.x,r02*r0*x.y,r0*(r02+c.a2)*x.z)/D;
  let rdot = dot(gr,dxF);
  let udot = (dxF.z*r0-x.z*rdot)/r02;
  let theta0 = max(c.Qc-u0*u0*(c.L*c.L/s2-c.aE2),0.0);
  let thp0 = -extSgn(udot)*sqrt(theta0);
  var s = ExtSt(vec4f(r0,extSgn(rdot)*sqrt(max(extR(c,r0),0.0)),s0,0.0),
                vec4f(u0,thp0*u0,c.L/s0,-thp0*s0),0.0);
  var pSign = extSgn(extP(c,r0));
  var ch = -pSign*extSgn(s.a.y);
  s.psi = kerrSchildPhi(x,r0,c.a)+(ch-1.0)*c.a*extRstar(c,r0);
  var level = 0u; var region = 4u;
  var sigMin = 1e30; var tAtSig = 1.0; var wind = 0.0;
  var acc = TopoAcc(vec3f(0.0),vec3f(1.0));
  var ctcDone = false; var terminated = false;
  let maxSteps = u32(U.extMaxSteps);
  var hAdapt = -0.01;
  for (var i = 0u; i < maxSteps; i++) {
    let r = s.a.x; let u = s.b.x;
    // Re-emerged rays leave at 12 r_g; antiverse rays (r < 0, never through
    // r+ again) leave at -12. Past that even near-critical rays run straight
    // enough for the tail.
    if ((r >= 12.0 && level >= 1u) || r <= -12.0) { terminated = true; break; }
    let Sig = r*r+c.a2*u*u;
    if (Sig < sigMin) { sigMin = Sig; tAtSig = acc.tr.g; }
    if (Sig < 1e-6) { region = 3u; break; }
    let k1 = extDeriv(c,s,ch);
    // Error control picks the step; a displacement bound at a coarse scale
    // (0.3 r_g near the hole, 0.3 rad on the sphere) only caps it so event
    // detection stays sane.
    let ar = abs(r);
    let drLim = 0.3*max(1.0,ar*(0.4+ar/(ar+3.0))/0.7);
    let hr = extSolveH(abs(s.a.y),abs(k1.a.y),drLim);
    let hm = 0.3/max(sqrt(max(extSpeed2(c,u),0.0)),1e-6);
    let hCap = -min(hr,hm);
    var hh = max(hCap,min(hAdapt,-1e-6));
    var ns = ExtStep(s,0.0);
    var landed = false;
    for (var attempt = 0u; attempt < 12u; attempt++) {
      ns = extDopri(c,s,hh,ch,k1);
      if (ns.err > 1.0) { hh *= max(0.2,0.85*pow(max(ns.err,1e-10),-0.2)); continue; }
      let rn = ns.s.a.x;
      let crossed = (r-c.rPlus)*(rn-c.rPlus) < 0.0 || (r-c.rMinus)*(rn-c.rMinus) < 0.0;
      if (crossed && extSgn(ns.s.a.y) != extSgn(s.a.y)) { hh *= 0.5; continue; }
      if (!landed && c.rP > 0.0) {
        let pn = extP(c,rn);
        if (pn != 0.0 && extSgn(pn) != pSign) {
          let frac = (c.rP-r)/(rn-r);
          if (frac > 1e-6 && frac < 1.0) { hh *= frac; landed = true; continue; }
        }
      }
      break;
    }
    hAdapt = hh*min(2.5,max(0.2,0.85*pow(max(ns.err,1e-10),-0.2)));
    var sn = ns.s;
    let rn = sn.a.x; let rpn = sn.a.y; let un = sn.b.x;
    // Surface events, composited front to back in ray order. Every surface
    // lives inside |r| < 2 (outer ergosurface at most 2), so the far leg
    // skips this block entirely.
    if (min(abs(r),abs(rn)) < 2.2) {
      let theta = acos(clamp(un,-1.0,1.0));
      let phiS = sn.psi+atan2(sn.a.w,sn.a.z);
      if ((r-c.rPlus)*(rn-c.rPlus) < 0.0) {
        if (rn > r) { level += 1u; }
        acc = topoShell(acc,0u,theta,phiS,0.25*E/(abs(rpn)+0.25*E));
      }
      if ((r-c.rMinus)*(rn-c.rMinus) < 0.0) {
        acc = topoShell(acc,1u,theta,phiS,0.25*E/(abs(rpn)+0.25*E));
      }
      let G0 = extDelta(c,r)-c.a2*(1.0-u*u);
      let G1 = extDelta(c,rn)-c.a2*(1.0-un*un);
      if (G0*G1 < 0.0) {
        let rm = 0.5*(r+rn);
        let gdot = abs((2.0*rn-2.0)*rpn+2.0*c.a2*un*sn.b.w);
        let edge = 0.5*E/(gdot+0.5*E);
        if (rm > c.rPlus) { acc = topoShell(acc,2u,theta,phiS,edge); }
        else if (rm < c.rMinus) { acc = topoShell(acc,3u,theta,phiS,edge); }
      }
      if (rn < 0.0 && !ctcDone && U.ctcTint > 0.0
          && (rn*rn+c.a2)*(rn*rn+c.a2) < extDelta(c,rn)*c.a2*(1.0-un*un)) {
        ctcDone = true;
        let al = 0.5*U.ctcTint;
        acc.rgb += acc.tr*vec3f(1.0,0.2,0.8)*(al*0.6);
        acc.tr *= 1.0-al;
      }
    }
    // Chart bookkeeping at the step boundary: c must equal -sign(P)·sign(r')
    // before the next horizon crossing; convert exactly when it changes.
    let pn = extP(c,rn);
    if (landed || (pn != 0.0 && extSgn(pn) != pSign)) { pSign = -pSign; }
    let cNew = -pSign*extSgn(rpn);
    if (cNew != ch) {
      let conv = (cNew-ch)*c.a*extRstar(c,rn);
      sn.psi += clamp(conv,-1e4,1e4);
      ch = cNew;
    }
    wind += abs(sn.psi-s.psi)+length(vec3f(sn.b.yzw))*abs(hh);
    s = extProject(c,sn);
    if (level > 2u) { break; }
  }
  if (terminated) {
    region = select(2u,1u,s.a.x > 0.0);
    let sgnR = extSgn(s.a.x);
    let w0 = 1.0/abs(s.a.x);
    var st = s;
    var w = w0;
    let dw = -w0/3.0;
    for (var k = 0u; k < 3u; k++) {
      let k1 = extTailDeriv(c,w,sgnR,st,ch);
      let k2 = extTailDeriv(c,w+0.5*dw,sgnR,extAxpy(st,k1,0.5*dw),ch);
      let k3 = extTailDeriv(c,w+0.5*dw,sgnR,extAxpy(st,k2,0.5*dw),ch);
      let k4 = extTailDeriv(c,max(w+dw,1e-6),sgnR,extAxpy(st,k3,dw),ch);
      st = extAxpy(extAxpy(extAxpy(extAxpy(st,k1,dw/6.0),k2,dw/3.0),k3,dw/3.0),k4,dw/6.0);
      w += dw;
    }
    (*h).esc = 1u;
    (*h).dir = octEncode(extDir(st));
  } else if (region != 3u && level >= 1u) {
    // Budget exhausted after re-emerging (critical-band rays wind for
    // hundreds of steps): keep the direction reached and blur it fully rather
    // than punch a black hole in the image.
    region = 1u; wind = 1e4;
    (*h).esc = 1u;
    (*h).dir = octEncode(extDir(s));
  }
  if (U.ringGlow > 0.0) {
    let g = U.ringGlow*exp(-sigMin/max(U.ringWidth,1e-4));
    acc.rgb += tAtSig*vec3f(1.0,0.95,0.85)*(g*0.8);
  }
  (*h).region = region; (*h).extRGB = acc.rgb; (*h).extT = acc.tr; (*h).extWind = wind;
}
`,Kg=`
struct Uni {
  camPos: vec3f, tanHF: f32,
  observerCov: vec4f,
  camRCov: vec4f,
  camUCov: vec4f,
  camFCov: vec4f,
  a: f32, diskIn: f32, diskOut: f32, esc: f32,
  maxSteps: f32, traceMode: f32, hr: f32, fullWidth: f32,
  fullHeight: f32, jitterX: f32, jitterY: f32, captureRadius: f32,
  /* Kerr-Newman charge squared (q = Q/M) and the maximal-extension controls;
     ext > 0.5 continues captured rays through the interior (extension.ts). */
  q2: f32, ext: f32, topoHorizon: f32, topoErgo: f32,
  topoGrid: f32, topoEdge: f32, ringGlow: f32, ringWidth: f32,
  ctcTint: f32, extTol: f32, extMaxSteps: f32, frameStamp: f32,
  smokeOpacity: f32,
}
@group(0) @binding(0) var<uniform> U: Uni;
`,Jg=`
fn rayDir(gid: vec2u, dims: vec2u) -> vec3f {
  let res = vec2f(dims);
  var ndc = vec2f((f32(gid.x)+0.5+U.jitterX)/res.x*2.0-1.0, 1.0-(f32(gid.y)+0.5+U.jitterY)/res.y*2.0);
  ndc.x *= res.x/res.y;
  return normalize(vec3f(U.tanHF*ndc.x,U.tanHF*ndc.y,1.0));
}
fn receivedPhotonCovector(localDir: vec3f) -> vec4f {
  // localDir points from the observer toward the source.  This is the one
  // future-directed received-photon state used by the path and invariants.
  return U.observerCov-localDir.x*U.camRCov-localDir.y*U.camUCov-localDir.z*U.camFCov;
}
fn observerKsr(x: vec3f, a: f32) -> f32 {
  let a2 = a*a;
  let b = dot(x,x)-a2;
  return sqrt(max(0.5*(b+sqrt(b*b+4.0*a2*x.z*x.z)),1e-8));
}
fn photonForwardSpatial(x: vec3f, p: vec3f, E: f32, a: f32) -> vec3f {
  let r = observerKsr(x,a); let r2 = r*r; let a2 = a*a;
  let f = (2.0*r-U.q2)*r2/(r2*r2+a2*x.z*x.z+1e-9);
  let k = vec3f((r*x.x+a*x.y)/(r2+a2),
                (r*x.y-a*x.x)/(r2+a2),x.z/max(r,1e-6));
  return p-f*(E+dot(k,p))*k;
}
fn kerrSchildPhi(x: vec3f, r: f32, a: f32) -> f32 {
  return atan2(r*x.y-a*x.x,r*x.x+a*x.y);
}
fn schwarzschildEscapeTail(x: vec3f, sourceward0: vec3f) -> vec3f {
  // First post-Minkowskian spatial tail from the finite outward state to
  // infinity.  With c = x.n/r, the stable angular remainder is
  // delta = M/b * (1-c)^2 * (2+c), M=1.  This is the difference between the
  // current Euclidean tangent angle and the asymptotic Schwarzschild orbit,
  // not the much larger full-lens 2M/b half-deflection.
  let n = normalize(sourceward0);
  let r = length(x);
  let z = dot(x,n);
  let c = clamp(z/max(r,1e-6),0.0,1.0);
  let impact = x-z*n;
  let b = length(impact);
  if (!(z > 0.0) || b < 1e-5 || r < 20.0) { return n; }
  let delta = (1.0-c)*(1.0-c)*(2.0+c)/b;
  return normalize(n-delta*impact/b);
}
struct KerrRadius { r: f32, r2: f32 }
fn kerrRadiusState(x: vec3f, a2: f32) -> KerrRadius {
  // Keep this operation order identical to the former ksr()/deriv() radius
  // solve.  The state exists only to share that exact f32 result between a
  // capture guard and the derivative evaluated at the same position.
  let b = dot(x,x)-a2;
  let r2 = max(0.5*(b+sqrt(b*b+4.0*a2*x.z*x.z)), 1e-8);
  return KerrRadius(sqrt(r2),r2);
}
fn ksr(x: vec3f, a2: f32) -> f32 {
  // Keep the material sampler's established scalar helper byte-for-byte: the
  // state-returning form is used only where a derivative shares the result.
  let b = dot(x,x)-a2;
  let r2 = 0.5*(b+sqrt(b*b+4.0*a2*x.z*x.z));
  return sqrt(max(r2, 1e-8));
}
struct DXP { dx: vec3f, dp: vec3f }
fn derivAtRadius(x: vec3f, p: vec3f, E: f32, a: f32,
                 a2: f32, radius: KerrRadius) -> DXP {
  let r = radius.r; let r2 = radius.r2; let r3 = r*r2;
  let D = r2*r2+a2*x.z*x.z+1e-9;
  let gr = vec3f(r3*x.x, r3*x.y, r*(r2+a2)*x.z)/D;
  // Kerr-Newman Kerr-Schild scalar f = (2r - q^2) r^2 / D. The uncharged
  // branch keeps the former expressions bit for bit.
  let f = (2.0*r3-U.q2*r2)/D;
  let gD = 4.0*r3*gr+vec3f(0.0,0.0,2.0*a2*x.z);
  var gf = f*(3.0/r*gr-gD/D);
  if (U.q2 > 0.0) { gf = ((6.0*r2-2.0*U.q2*r)/D)*gr-f*gD/D; }
  let Q = r2+a2;
  let k = vec3f((r*x.x+a*x.y)/Q, (r*x.y-a*x.x)/Q, x.z/r);
  let s = E+dot(k,p);
  let tq = 2.0*r/Q;
  var pk: vec3f;
  pk.x = p.x*((gr.x*x.x+r)/Q-k.x*tq*gr.x)+p.y*((gr.x*x.y-a)/Q-k.y*tq*gr.x)+p.z*(-x.z*gr.x/r2);
  pk.y = p.x*((gr.y*x.x+a)/Q-k.x*tq*gr.y)+p.y*((gr.y*x.y+r)/Q-k.y*tq*gr.y)+p.z*(-x.z*gr.y/r2);
  pk.z = p.x*((gr.z*x.x)/Q-k.x*tq*gr.z)+p.y*((gr.z*x.y)/Q-k.y*tq*gr.z)+p.z*(1.0/r-x.z*gr.z/r2);
  var o: DXP;
  o.dx = p-f*s*k;
  o.dp = 0.5*s*s*gf+f*s*pk;
  return o;
}
fn derivBack(x: vec3f, p: vec3f, E: f32, a: f32,
             a2: f32, radius: KerrRadius) -> DXP {
  let forward = derivAtRadius(x,p,E,a,a2,radius);
  var backward: DXP;
  backward.dx = -forward.dx;
  backward.dp = -forward.dp;
  return backward;
}
fn compactKerrEscapeDirection(
  x0: vec3f, p0: vec3f, E: f32, a: f32, a2: f32,
  initialRadius: KerrRadius,
) -> vec3f {
  // Two compact Kutta RK3 continuations advance an escaped state beyond 100M
  // before the analytic mass tail.  A radius-scaled affine step (not a
  // radial-velocity-scaled one) remains well conditioned for nearly tangent
  // escape rays.  Binary64 comparison against a 400M reference plus the same
  // asymptotic tail bounds p99 below one tenth of a 35-degree/1260px pixel.
  var x = x0;
  var p = p0;
  var radius = initialRadius;
  for (var iteration = 0u; iteration < 2u; iteration++) {
    let ds = select(0.5,0.8,iteration == 1u)*radius.r;
    let k1 = derivBack(x,p,E,a,a2,radius);
    let xK2 = x+0.5*ds*k1.dx;
    let k2 = derivBack(xK2,p+0.5*ds*k1.dp,E,a,a2,
                       kerrRadiusState(xK2,a2));
    let xK3 = x+ds*(-k1.dx+2.0*k2.dx);
    let k3 = derivBack(xK3,p+ds*(-k1.dp+2.0*k2.dp),E,a,a2,
                       kerrRadiusState(xK3,a2));
    x += ds/6.0*(k1.dx+4.0*k2.dx+k3.dx);
    p += ds/6.0*(k1.dp+4.0*k2.dp+k3.dp);
    // Only the second step needs a refreshed radius; the caller already
    // carries the exact finite-boundary value and no third step consumes one.
    if (iteration == 0u) { radius = kerrRadiusState(x,a2); }
  }
  return schwarzschildEscapeTail(x,-photonForwardSpatial(x,p,E,a));
}
/* Prograde equatorial Keplerian angular velocity. Kerr-Newman replaces
   sqrt(r) by s = sqrt(r - q^2): Omega = s/(r^2 + a s). The uncharged branch
   keeps the former expression bit for bit. */
fn keplerOmega(rho: f32) -> f32 {
  if (U.q2 > 0.0) {
    let s = sqrt(max(rho-U.q2,1e-6));
    return s/(rho*rho+U.a*s);
  }
  return 1.0/(rho*sqrt(rho)+U.a);
}
fn kerrGAt(r0: f32, Er: f32, Lz: f32, lc: f32) -> f32 {
  let rB = max(r0,1e-3);
  let sq = sqrt(rB);
  // Circular-orbit existence is guarded; production disk radii stay outside
  // the corresponding ISCO.
  var om = 1.0/(rB*sq+U.a);
  var ut = (rB*sq+U.a)/(pow(rB,0.75)*sqrt(max(rB*sq-3.0*sq+2.0*U.a,1e-4)));
  if (U.q2 > 0.0) {
    // Kerr-Newman circular orbit: u^t = (r^2 + a s)/(r sqrt(r^2 - 3r + 2q^2 + 2as)).
    let s = sqrt(max(rB-U.q2,1e-6));
    om = s/(rB*rB+U.a*s);
    ut = (rB*rB+U.a*s)/(rB*sqrt(max(rB*rB-3.0*rB+2.0*U.q2+2.0*U.a*s,1e-4)));
  }
  let wem = max(ut*(Er-om*Lz),1e-4);
  return (Er/lc)/wem;
}
`,$g=`
fn crossUnorm(x: f32, m: f32) -> u32 { return u32(round(clamp(x,0.0,1.0)*m)); }
fn crossRPack(r: f32, rIn: f32, rOut: f32) -> u32 {
  return crossUnorm((r-rIn)/max(rOut-rIn,1e-6),65535.0);
}
fn crossRUnpack(q: u32, rIn: f32, rOut: f32) -> f32 {
  return mix(rIn,rOut,f32(q)*(1.0/65535.0));
}
// Lower bound of the retired surface shading's opacity at h = 0
// (0.05 + 0.42*sqrt(0.045) = 0.139095... before the radial fades), less an
// f32 margin, so the bound never overstates the surface opacity.
const AL_MIN = 0.138;
fn fades(r: f32) -> f32 {
  let fadeO = 1.0 - smoothstep(U.diskOut*0.62, U.diskOut, r);
  // Exactly zero for r <= diskIn.
  let fadeI = smoothstep(1.0, 1.05, r/U.diskIn);
  return fadeO*fadeI;
}
fn cachedSurfaceFades(r: f32) -> f32 {
  let q = crossRPack(r,U.diskIn,U.diskOut);
  return fades(crossRUnpack(q,U.diskIn,U.diskOut));
}
`,ev=`
// The material march; false only for the stable star field's geometry trace,
// which keeps unstretched far-field steps and skips the per-ray set-up of
// the depth buckets and the ray cone.
override MATERIAL_MARCH: bool = false;
// The temporal variant (TAA frames and their exact repairs): per-pixel
// refresh and the scattering points for the world-space reprojection.
override TEMPORAL_REFRESH: bool = false;
${ts}
// Exact repairs read their pixels here (traceMode 3, repair-queue.ts).
@group(0) @binding(1) var<storage, read> workQueue: WorkQueueRead;
@group(0) @binding(2) var bucketPrefixOut: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(3) var bucketInfoOut: texture_storage_2d_array<rg32uint, write>;
@group(0) @binding(4) var gRay: texture_storage_2d<rg32uint, write>;
@group(0) @binding(6) var inlineSky: texture_cube<f32>;
@group(0) @binding(7) var inlineSkySampler: sampler;
@group(0) @binding(8) var inlineNoiseTex: texture_3d<f32>;
@group(0) @binding(9) var inlineNoiseSampler: sampler;
/* Material uniform I (binding 11): 22 f32, 88 bytes, no padding. Written
   by frame() in renderer.ts; the exact repairs (repair-queue.ts) copy
   it with exact = 1, the stable star field copies it as is.
     offset  0  tempK, bright, materialTime, debrisPhase
            16  beam, grav, camLapse, pivotOmega
            32  hazeKeep, pixelAngle, cameraStatic, exact
            48  noiseLodBias, crustStrength, stableDistance, stableWidth
            64  filterDistance, filterWidth, refreshCount, refreshPhase
            80  materialScale, cellOfFour
   refreshCount of the eight pixels of each 2x4 cell are marched per frame,
   the phase advancing every frame (main). cellOfFour: -1 refreshes every
   cell; 0 to 3 only one cell (x + 2y) of every 2x2 block of cells, a
   quarter of the share (the idle refresh).
   cameraStatic: 1 while the pose holds this frame. exact: 1 marches every
   pixel (no per-pixel refresh): history resets, idle accumulation, captures,
   TAA off, validation exact mode, full-refresh zoom. */
struct InlineUni {
  tempK: f32, bright: f32, materialTime: f32, debrisPhase: f32,
  beam: f32, grav: f32, camLapse: f32, pivotOmega: f32,
  hazeKeep: f32, pixelAngle: f32, cameraStatic: f32, exact: f32,
  noiseLodBias: f32, crustStrength: f32, stableDistance: f32, stableWidth: f32,
  filterDistance: f32, filterWidth: f32, refreshCount: f32, refreshPhase: f32,
  materialScale: f32, cellOfFour: f32,
}
@group(0) @binding(11) var<uniform> I: InlineUni;
@group(0) @binding(14) var bakedOctavesLo: texture_3d<f32>;
@group(0) @binding(15) var bakedOctavesMid: texture_3d<f32>;
@group(0) @binding(16) var bakedOctavesHi: texture_3d<f32>;
// The whole medium: radiance and the negated final transmittance.
@group(0) @binding(17) var inlineFront: texture_storage_2d<rgba16float, write>;
// The previous frame's final escape-direction field (gRayFinal, copied after
// every frame). Differences between neighbours inside the same 8x8 tile give
// the direction gradient: the ray cone of the noise footprint, the star
// direction without this frame's jitter, and the sky footprint LOD.
@group(0) @binding(19) var gRayPrev: texture_2d<u32>;
@group(0) @binding(20) var crustMoments: texture_3d<f32>;
@group(0) @binding(21) var octaveSecondLo: texture_3d<f32>;
@group(0) @binding(22) var octaveSecondMid: texture_3d<f32>;
@group(0) @binding(23) var octaveSecondHi: texture_3d<f32>;
var<private> noiseLogFootprint: f32 = -32.0;
var<private> rayConeAngle: f32 = 0.0;
var<private> stableRayPhase: f32 = 0.5;
var<private> stablePhaseChosen: bool = false;
fn noiseMip(texelsPerUnit: f32) -> f32 {
  return max(0.0,noiseLogFootprint+log2(texelsPerUnit)+I.noiseLodBias);
}
struct RayField { dir: vec3f, region: u32, valid: bool, word: u32, traced: bool }
fn rayFieldAt(p: vec2i, dims: vec2i) -> RayField {
  let r = textureLoad(gRayPrev,clamp(p,vec2i(0),dims-vec2i(1)),0).xy;
  // traced: a frame stamp is present, i.e. this is a marched pixel and not
  // the cleared texture after a target reallocation.
  return RayField(octDecode(unpack2x16snorm(r.x)),(r.y>>8u)&7u,(r.y&4u) != 0u,r.x,
    (r.y>>16u) != 0u);
}
/* One axis of that gradient: central where both same-tile, same-region
   neighbours exist, one-sided at a tile edge, none (w = 0) when the field is
   unavailable — first frame after a resize, or a neighbour that ended in a
   different sky region. */
fn rayFieldSlope(c: RayField, p: vec2i, axis: vec2i, local: i32, dims: vec2i) -> vec4f {
  let m = rayFieldAt(p-axis,dims);
  let q = rayFieldAt(p+axis,dims);
  let mOk = local > 0 && m.valid && m.region == c.region;
  let qOk = local < 7 && dot(p+axis,axis) < dot(dims,axis) && q.valid && q.region == c.region;
  if (mOk && qOk) { return vec4f(0.5*(q.dir-m.dir),1.0); }
  if (qOk) { return vec4f(q.dir-c.dir,1.0); }
  if (mOk) { return vec4f(c.dir-m.dir,1.0); }
  return vec4f(0.0);
}
// Accumulated path length spent near the photon sphere. Rays forming the
// granulated rim band LINGER there (half-wraps and full wraps at small
// radius) while rays imaging the arcs merely transit, so path-below-radius
// separates the beyond-Nyquist regime precisely where a minimum-radius
// test would blur the whole upper arc. Drives the material/sky LOD fades.
var<private> rayRingPath: f32 = 0.0;
// Broad stream field hoisted to one fetch per geodesic chord: its texel
// pitch is several times the material substep, so per-substep sampling was
// pure redundant bandwidth.
var<private> chordStreamWeight: f32 = 0.0;
// Relativistic transfer factors vary slowly across one RK chord; the march
// evaluates them once at the chord midpoint.
var<private> chordShift: f32 = 1.0;
var<private> chordTemperature: f32 = 1.0;
`,tv=`
const NPGS_PI = 3.141592653589793;
const NPGS_REFERENCE_OUTER = 25.0;
const NPGS_REFERENCE_THIN = 0.75;
const NPGS_REFERENCE_HOPPER = 0.40;
const NPGS_SHAPE_NORM: f32 = 4.8927365644105745;
fn materialSpectral(logT: f32) -> vec3f {
  return exp(logT*vec3f(1.0,1.6,2.5));
}
// NPGS's custom display mapping suppresses low radiance more strongly than
// Astra's ACES path. These are display-pipeline unit conversions: they retain
// the reference density topology and opacity ordering rather than retuning the
// procedural field to compensate for the host tone mapper.
const NPGS_TO_ASTRA_RADIANCE = 0.24;
const NPGS_TO_ASTRA_OPACITY = 0.34;

fn npgsWrapAngle(a: f32) -> f32 {
  return atan2(sin(a),cos(a));
}
fn npgsSoftSaturate(x: f32) -> f32 {
  return 1.0-1.0/(max(x,0.0)+1.0);
}
fn npgsShape(x0: f32, alpha: f32, beta: f32) -> f32 {
  let x = clamp(x0,0.0,1.0);
  return NPGS_SHAPE_NORM*pow(max(x,1e-8),alpha)*pow(max(1.0-x,1e-8),beta);
}
fn bakedLevelWeight(l: f32, s: f32, e: f32) -> f32 {
  return max(0.0, min(e, l+1.0)-max(s, l));
}
fn npgsDiskNoise(p: vec3f, s: f32, e: f32, contrast: f32) -> f32 {
  // Log-domain reconstruction of the eleven-octave product from the startup
  // bake (see wgsl/noise-bake.ts): the per-octave ln(1+0.1v) terms sum with
  // the original window weights, and ln(10) cancels against the 0.1 of the
  // reference's display transform. Two to three fetches replace ~33 lattice
  // evaluations per call. Levels 7+ carry zero weight for every reachable
  // window and are dropped.
  var accLog = 0.0;
  var accVariance = 0.0;
  let wm2 = bakedLevelWeight(-2.0,s,e); let wm1 = bakedLevelWeight(-1.0,s,e);
  if (wm2+wm1 > 0.0) {
    let lod = noiseMip(96.0/81.0);
    let t = textureSampleLevel(bakedOctavesLo,inlineNoiseSampler,p/81.0,lod);
    accLog += wm2*t.r+wm1*t.g;
    if (lod > 0.0) {
      let second = textureSampleLevel(octaveSecondLo,inlineNoiseSampler,p/81.0,lod);
      let variance = max(second-t*t,vec4f(0.0))*min(lod,1.0);
      let weights = vec4f(wm2,wm1,0.0,0.0);
      accVariance += dot(variance,weights*weights);
    }
  }
  let w0 = bakedLevelWeight(0.0,s,e); let w1 = bakedLevelWeight(1.0,s,e);
  if (w0+w1 > 0.0) {
    let lod = noiseMip(128.0/27.0);
    let t = textureSampleLevel(bakedOctavesMid,inlineNoiseSampler,p/27.0,lod);
    accLog += w0*t.r+w1*t.g;
    if (lod > 0.0) {
      let second = textureSampleLevel(octaveSecondMid,inlineNoiseSampler,p/27.0,lod);
      let variance = max(second-t*t,vec4f(0.0))*min(lod,1.0);
      let weights = vec4f(w0,w1,0.0,0.0);
      accVariance += dot(variance,weights*weights);
    }
  }
  let w2 = bakedLevelWeight(2.0,s,e); let w3 = bakedLevelWeight(3.0,s,e);
  if (w2+w3 > 0.0) {
    let lod = noiseMip(128.0/3.0);
    let t = textureSampleLevel(bakedOctavesHi,inlineNoiseSampler,p/3.0,lod);
    accLog += w2*t.r+w3*t.g;
    if (lod > 0.0) {
      let second = textureSampleLevel(octaveSecondHi,inlineNoiseSampler,p/3.0,lod);
      let variance = max(second-t*t,vec4f(0.0))*min(lod,1.0);
      let weights = vec4f(w2,w3,0.0,0.0);
      accVariance += dot(variance,weights*weights);
    }
  }
  let w4 = bakedLevelWeight(4.0,s,e); let w5 = bakedLevelWeight(5.0,s,e);
  if (w4+w5 > 0.0) {
    let lod = noiseMip(96.0*9.0);
    let t = textureSampleLevel(bakedOctavesLo,inlineNoiseSampler,p*9.0,lod);
    accLog += w4*t.b+w5*t.a;
    if (lod > 0.0) {
      let second = textureSampleLevel(octaveSecondLo,inlineNoiseSampler,p*9.0,lod);
      let variance = max(second-t*t,vec4f(0.0))*min(lod,1.0);
      let weights = vec4f(0.0,0.0,w4,w5);
      accVariance += dot(variance,weights*weights);
    }
  }
  let w6 = bakedLevelWeight(6.0,s,e);
  if (w6 > 0.0) {
    let lod = noiseMip(128.0*27.0);
    let t = textureSampleLevel(bakedOctavesMid,inlineNoiseSampler,p*27.0,lod);
    accLog += w6*t.b;
    if (lod > 0.0) {
      let second = textureSampleLevel(octaveSecondMid,inlineNoiseSampler,p*27.0,lod);
      let variance = max(second-t*t,vec4f(0.0))*min(lod,1.0);
      let weights = vec4f(0.0,0.0,w6,0.0);
      accVariance += dot(variance,weights*weights);
    }
  }
  if (accVariance > 0.0) {
    // Match the low-frequency mean after the convex contrast transform.
    // Logistic-normal moment approximation prevents log-mip Jensen darkening.
    let spread = sqrt(1.0+0.39269908*contrast*contrast*accVariance);
    let v = max(accLog,log(1e-6))*contrast/spread;
    return spread*(max(v,0.0)+log(1.0+exp(-abs(v))));
  }
  let v = max(accLog,log(1e-6))*contrast;
  return max(v,0.0)+log(1.0+exp(-abs(v)));
}
fn npgsEffectiveRadius(r: f32, inner: f32, outer: f32) -> f32 {
  let x = clamp((r-inner)/max(outer-inner,1e-6),0.0,1.0);
  let curve = max(1.0,(outer-inner)/10.0);
  if (abs(curve-1.0) < 1e-5) { return x; }
  return clamp((-1.0+sqrt(max(0.0,1.0+4.0*curve*curve*x
    -4.0*x*curve)))/(2.0*curve-2.0),0.0,1.0);
}
fn npgsSpiralIntegral(r: f32, spin: f32) -> f32 {
  let u = sqrt(max(r,1e-6));
  let k3 = spin*0.70710678;
  if (abs(k3) < 0.001*u*u*u) {
    let invU = 1.0/u;
    let eps3 = k3*invU*invU*invU;
    return -16.9705627*invU
      *(1.0-0.25*eps3+0.142857*eps3*eps3);
  }
  let k = sign(k3)*pow(abs(k3),0.33333333);
  let logTerm = (r-k*u+k*k)/max((u+k)*(u+k),1e-9);
  return (5.6568542/k)*(0.5*log(max(logTerm,1e-9))
    +1.7320508*(atan2(2.0*u-k,1.7320508*k)-1.5707963));
}
fn npgsSeamedBodyNoise(r: f32, z: f32, theta: f32,
                       outer: f32, noiseLevel: f32,
                       levelMut: f32, contrastMut: f32,
                       materialTime: f32) -> f32 {
  let rotR = r+materialTime/12.0;
  let angularScale = 0.02*pow(outer,0.7);
  var result = npgsDiskNoise(
    vec3f(0.1*rotR,0.1*z,angularScale*theta),
    noiseLevel+2.0-levelMut,noiseLevel+4.0-levelMut,
    80.0-contrastMut);
  let seam = theta+NPGS_PI;
  if (seam < 0.1*NPGS_PI) {
    let wrapped = theta+2.0*NPGS_PI;
    let other = npgsDiskNoise(
      vec3f(0.1*rotR,0.1*z,angularScale*wrapped),
      noiseLevel+2.0-levelMut,noiseLevel+4.0-levelMut,
      80.0-contrastMut);
    result = mix(other,result,clamp(seam/(0.1*NPGS_PI),0.0,1.0));
  }
  return result;
}
fn npgsSeamedOuterWave(r: f32, z: f32, theta: f32,
                       outer: f32, noiseLevel: f32,
                       levelMut: f32, contrastMut: f32,
                       materialTime: f32) -> f32 {
  let radialTime = r*4.65114e-6-materialTime/30.0;
  let angularScale = 0.02*pow(outer,0.7);
  var result = npgsDiskNoise(
    vec3f(0.1*(radialTime-0.08*outer*theta),0.1*z,
          angularScale*theta),
    noiseLevel+2.0-levelMut,noiseLevel+3.0-levelMut,
    80.0-contrastMut);
  let seam = theta+NPGS_PI;
  if (seam < 0.1*NPGS_PI) {
    let wrapped = theta+2.0*NPGS_PI;
    let other = npgsDiskNoise(
      vec3f(0.1*(radialTime-0.08*outer*wrapped),0.1*z,
            angularScale*wrapped),
      noiseLevel+2.0-levelMut,noiseLevel+3.0-levelMut,
      80.0-contrastMut);
    result = mix(other,result,clamp(seam/(0.1*NPGS_PI),0.0,1.0));
  }
  return result;
}
fn inlineTemperature(r: f32) -> f32 {
  let x = max(r/U.diskIn,1.0001);
  return I.tempK*pow(x,-0.75)
    *pow(max(1.0-sqrt(0.97/x),0.0),0.25)*2.0;
}
fn inlineTransferFactor(r: f32, full: f32) -> f32 {
  // Reissner-Nordstrom-form lapse proxy; q = 0 adds an exact zero.
  let grav = sqrt(max(1.0-2.0/r+U.q2/(r*r),0.001))/max(I.camLapse,1e-5);
  let doppler = full/max(grav,1e-5);
  return mix(1.0,doppler,I.beam)*mix(1.0,grav,I.grav);
}
fn npgsAccumulate(h: ptr<function,Hits>, sampleRgb: vec3f,
                  sampleAlpha: f32, stepLength: f32) {
  let stepRgb = max(sampleRgb,vec3f(0.0))*stepLength;
  let stepAlpha = max(sampleAlpha,0.0)*stepLength;
  let remaining = clamp((*h).inlineTrans.r,0.0,1.0);
  // Integrate the scalar source weight across the step analytically, then
  // evaluate the chromatic transfer at its equivalent optical position.
  let analyticStart = log(max(remaining,1e-30));
  let opticalGreen = 1.6*stepAlpha;
  var averageGreen = 1.0-0.5*opticalGreen+opticalGreen*opticalGreen/6.0;
  if (opticalGreen > 0.001) { averageGreen=(1.0-exp(-opticalGreen))/opticalGreen; }
  let effectiveLog = analyticStart+log(max(averageGreen,1e-30))/1.6;
  let attenuation = materialSpectral(effectiveLog);
  let weighted = stepRgb*attenuation;
  let denominator = weighted.r+weighted.g+weighted.b;
  if (denominator > 1e-7) {
    let middle = attenuation.g;
    let sumRgb = (stepRgb.r+stepRgb.g+stepRgb.b)*middle;
    var contribution = sumRgb*weighted/denominator;
    let contributionSum = max(
      contribution.r+contribution.g+contribution.b,1e-7);
    let chroma = max(3.0*contribution/contributionSum,vec3f(1e-6));
    contribution *= sqrt(chroma);
    (*h).inlineRadiance += contribution;
  }
  // Transmission is carried through its logarithm.
  (*h).inlineTrans = materialSpectral(analyticStart-stepAlpha);
  if ((*h).inlineTrans.r<0.01) { (*h).tauStop = 1u; }
}

fn inlineMaterialStep(h: ptr<function,Hits>, x: vec3f,
                      localDir: vec3f, stepLength: f32) {
  if ((*h).tauStop != 0u || U.hr <= 1e-5) { return; }
  bucketCross(h,distance(U.camPos,x));
  let worldR = ksr(x,U.a*U.a);
  if (worldR <= U.diskIn || worldR >= U.diskOut) { return; }

  // Normalize Astra's user-selected extent into the reference disk's 25-unit
  // material domain. This preserves the reference feature count and its
  // default 0.75 + 0.40(r-3) volumetric thickness at any outer-radius setting.
  let referenceScale = NPGS_REFERENCE_OUTER/max(U.diskOut,1e-5);
  let r = worldR*referenceScale;
  let rho = length(x.xy)*referenceScale;
  let z = x.z*referenceScale;
  let inner = U.diskIn*referenceScale;
  let outer = NPGS_REFERENCE_OUTER;
  let thicknessScale = U.hr/0.055;
  let thin = NPGS_REFERENCE_THIN*thicknessScale;
  let hopper = NPGS_REFERENCE_HOPPER*thicknessScale;
  let geometricThin = thin+max(0.0,(rho-3.0)*hopper);
  let innerCloudRadius = (r-inner)/min(outer-inner,12.0);
  let innerCloudBound = max(geometricThin,thin)
    *max(0.0,1.0-5.0*innerCloudRadius*innerCloudRadius);
  let effective = npgsEffectiveRadius(r,inner,outer);
  let densityShape = npgsShape(effective,0.9,1.5);
  if (densityShape <= 1e-6) { return; }

  let phi = kerrSchildPhi(x,worldR,U.a);
  // Post-dip samples are imaged at extreme compression near the critical
  // curve — that regime extends well outside the photon sphere at high
  // spin. Shift the entire procedural octave window coarser there so the
  // base medium AND the noise-perturbed disk-edge cutoff stay band-limited;
  // sub-pixel jitter cannot integrate static cross-pixel decorrelation, so
  // the fix has to happen at the source field.
  let ringNoiseLod = 1.0-smoothstep(9.0,18.0,rayRingPath);
  let noiseLevel = max(0.0,2.0-0.6*geometricThin)
    -2.2*(1.0-ringNoiseLod);
  let logTheta = npgsWrapAngle(phi+2.0*log(max(r,1e-6)));
  let viewDistance = distance(U.camPos,x);
  noiseLogFootprint = -32.0;
  if (viewDistance > I.filterDistance) {
    let filterWeight = smoothstep(I.filterDistance,I.filterDistance+I.filterWidth,viewDistance);
    noiseLogFootprint = log2(max(viewDistance*rayConeAngle*referenceScale*filterWeight,1e-9));
  }
  let thickBase = 0.4+0.6*clamp(geometricThin-0.5,0.0,2.5)/2.5;
  var thicknessModulation = 1.0;
  if (thickBase!=1.0) {
    let thicknessNoise = npgsDiskNoise(
      vec3f(1.5*logTheta,r+I.materialTime/12.0,0.0),
      noiseLevel-0.7,noiseLevel+1.3,80.0);
    thicknessModulation = thickBase+(1.0-thickBase)*npgsSoftSaturate(thicknessNoise);
  }
  let perturbedThickness = max(1e-6,geometricThin*densityShape*thicknessModulation);
  if (abs(z) >= max(perturbedThickness,innerCloudBound)) { return; }

  noiseLogFootprint -= 3.3219281;
  let spiral = npgsSpiralIntegral(r,0.5*U.a);
  let inflowTheta = npgsWrapAngle(phi-spiral);
  let levelMut = 0.91*log(1.0+(0.06/0.91)
    *max(0.0,min(1000.0,r)-10.0));
  let contrastMut = 80.0*log(1.0+0.006
    *max(0.0,min(1000000.0,r)-10.0));

  var sampleValue = 0.0;
  var density = densityShape;
  if (abs(z) < perturbedThickness) {
    sampleValue = npgsSeamedBodyNoise(
      r,z,inflowTheta,outer,noiseLevel,levelMut,contrastMut,I.materialTime);
    if (r > max(0.15379*outer,0.15379*64.0)) {
      let outerWave = npgsSeamedOuterWave(
        r,z,logTheta,outer,noiseLevel,levelMut,contrastMut,I.materialTime);
      let waveBlend = 0.5+0.5*max(-1.0,
        1.0-exp(-0.15*(100.0*r/max(outer,64.0)-20.0)));
      sampleValue *= mix(1.0,clamp(1.05*outerWave-0.5,0.0,3.0),
                         waveBlend);
    }
    let vertical = max(0.0,1.0-abs(z)/perturbedThickness);
    density *= 0.7*vertical*density;
  }

  var sampleRgb = vec3f(sampleValue*density*1.4);
  var sampleAlpha = sampleValue*density*density/0.3;
  if (abs(z) < perturbedThickness) {
    let relativeHeight = clamp(abs(z)/perturbedThickness,0.0,1.0);
    sampleRgb *= max(0.0,0.2+2.0*sqrt(relativeHeight*relativeHeight+0.001));
  }

  // The separately rotating inner cloud is a real second volumetric component,
  // not a painted layer. It survives where the main spiral body thins out.
  if (abs(z) < innerCloudBound) {
    let innerOmega = 1.0/(pow(max(3.0,inner),1.5)+0.5*U.a);
    let timePhase = innerOmega*I.materialTime;
    let innerTheta = npgsWrapAngle(phi-0.666666*timePhase);
    let dustIntensity = max(1.0-pow(z/max(geometricThin
      *max(1.0-5.0*innerCloudRadius*innerCloudRadius,0.0001),1e-6),2.0),0.0);
    if (dustIntensity > 0.0) {
      let angular = 1.5*fract((1.5*innerTheta+timePhase)
        /(2.0*NPGS_PI))*2.0*NPGS_PI;
      let dust = npgsDiskNoise(vec3f(angular,r,z),0.0,6.0,80.0)
        *dustIntensity;
      let edgeOn = sqrt(max(0.0,1.0001-localDir.z*localDir.z));
      sampleRgb += vec3f(0.02*dust*edgeOn);
      sampleAlpha += 0.004*dust*edgeOn;
    }
  }

  let shift = chordShift;
  let temperature = chordTemperature;
  let visionTemperature = temperature*shift;
  let viewFactor = mix(0.2+0.8*abs(localDir.z),1.0,
                       clamp(geometricThin-0.8,0.2,1.0));
  var brightness = (0.05*min(outer/1000.0,1000.0/outer)
    +0.55/exp(5.0*effective)*viewFactor)
    *pow(max(temperature/max(I.tempK,1e-5),1e-5),1.0);
  sampleRgb *= brightness*bb(visionTemperature)
    *min(pow(shift,4.0),1.0)
    *min(1.0,1.3*(outer-r)/max(outer-inner,1e-6));
  sampleAlpha *= 0.125;

  let dilutionOuter = mix(min(outer,25.0),outer,
    smoothstep(6.0,max(0.05*outer,12.0),r));
  let thinBoost = 5.0/max(thin+0.5*hopper*dilutionOuter,0.2);
  let thickBoost = 100.0/max(dilutionOuter,1e-4);
  let boost = max(thinBoost,thickBoost);
  sampleRgb *= boost;
  sampleAlpha *= boost;

  let innerBrighten = mix(3.0,2.0,
    clamp((outer-50.0)/50.0,0.0,1.0));
  var innerRatio = 1.0-clamp(6.0*(r-inner)
    /max(outer-inner,1e-6),0.0,1.0);
  innerRatio *= innerRatio;
  sampleRgb *= NPGS_TO_ASTRA_RADIANCE*I.bright
    *(1.0+innerBrighten*innerRatio);
  sampleAlpha *= NPGS_TO_ASTRA_OPACITY*0.5
    *(1.0+(1.0+innerBrighten)*innerRatio);

  if (ringNoiseLod > 0.0) {
    // The debris layer itself is composited between the depth buckets
    // (bucketCross) as the march crosses them; the medium needs no
    // reciprocal suppression or reconstructed particle cells. What the smoke
    // does need is the same author: the co-moving stream field that decides
    // which debris clusters exist makes the smoke dustier inside those lanes
    // (more extinction, less emission) and cleaner between them, so unresolved
    // far matter keeps the granular lane texture the near field established.
    // No term here depends on observer distance — nothing can sweep a shell
    // or ring through the disk as the camera moves.
    let particleRadius = length(x.xy);
    let particlePhi = atan2(x.y,x.x);
    let rateScale = 0.70710678*pow(U.diskOut/25.0,1.5);
    let localOmega = keplerOmega(max(particleRadius,1e-6));
    let localDebrisOmega = -rateScale*localOmega;
    let debrisPivot = -rateScale*I.pivotOmega;
    let sourceAngle = particlePhi-I.debrisPhase
      -(localDebrisOmega-debrisPivot)*I.materialTime;
    let streamWeight = chordStreamWeight;
    // Strand-anisotropic columnar crust: high radial frequency with long
    // tangential coherence, fetched once at a fixed texture height (integer
    // angular multiplier, seam-free at the atan2 wrap). Differentially
    // sheared ring strands are what the reference shows as near-solid flow
    // lines; the fine channel breaks each strand into grain without
    // severing it.
    let crustPosition = vec3f(
      0.80*particleRadius,
      sourceAngle/(2.0*NPGS_PI)+0.55*log(max(particleRadius,1.0)),
      0.37);
    // Footprint-driven LOD: one pixel spans ever more source space with
    // distance and lensing compression; sampling the crust at its matching
    // mip lets the thresholded strand pattern converge to its mean tone
    // instead of aliasing into sand across the far disk and arcs.
    let sampleFootprint = distance(U.camPos,x)*I.pixelAngle;
    let crustLod = clamp(log2(max(sampleFootprint*51.2,1.0)),0.0,
      f32(textureNumLevels(inlineNoiseTex)-1u));
    let crustField = textureSampleLevel(
      inlineNoiseTex,inlineNoiseSampler,crustPosition,crustLod);
    let strand = crustField.y;
    let crust = clamp(0.80*strand+0.20*crustField.w,0.0,1.0);
    // Grain reaches everywhere (soft floor); real darkening and haze
    // thinning start only outside the luminous inner sheet, and the dark
    // phase grows from minority strands at mid radii to majority crust far
    // out — the reference keeps a glowing sheet under the grain until the
    // outer body.
    let emberZone = 0.30+0.70*smoothstep(0.12,0.36,effective);
    let darkZone = smoothstep(0.16,0.42,effective);
    let outerness = smoothstep(0.35,0.85,effective);
    // The dark particulate phase lives in the same thin equatorial sheet as
    // the raster debris. Grazing rays then cross one strand layer instead of
    // integrating many clump columns into murk, and the flared smoke above
    // remains haze.
    let sheet = 1.0-smoothstep(0.42,0.85,
      abs(z)/max(perturbedThickness,1e-5));
    // Samples taken after the ray has dipped near the photon sphere image
    // at far-beyond-Nyquist compression: fade the strand/grain modulation
    // there so the ring shows the smooth base medium instead of speckle.
    // Foreground material is sampled before the dip and keeps full texture.
    let ringLod = ringNoiseLod;
    var clumpDark = smoothstep(mix(0.44,0.29,outerness),
      mix(0.56,0.41,outerness),crust);
    if (crustLod > 0.5 && I.crustStrength > 0.0) {
      let moments = textureSampleLevel(crustMoments,inlineNoiseSampler,crustPosition,crustLod).xy;
      let variance = max(0.0,moments.y-moments.x*moments.x);
      let threshold = mix(0.50,0.35,outerness);
      let zScore = (moments.x-threshold)/sqrt(max(variance+0.00072,1e-6));
      let coverage = 0.5+0.5*sign(zScore)*sqrt(1.0-exp(-0.63661977*zScore*zScore));
      clumpDark = mix(clumpDark,coverage,
        clamp(I.crustStrength*smoothstep(0.5,2.5,crustLod),0.0,1.0));
    }
    let grain = clamp(0.55*crustField.x+0.45*crustField.z,0.0,1.0);
    // Strand AUTHORSHIP, not modulation: multiplying the strongly patterned
    // silky base field by strands still reads as silk. Inside the ember
    // sheet the base pattern is divided out at matched scale and the
    // strand/grain field becomes the luminance structure itself — dark
    // strand bodies against bright thin cracks, broken by grain — which is
    // what the reference shows as dense, near-solid flow lines. The base
    // field keeps authoring the luminous inner sheet and the off-sheet
    // haze; deep debris lanes press authorship harder.
    let authorship = darkZone*sheet*ringLod
      *(0.72+0.20*streamWeight);
    let crackPattern = 1.0-clumpDark;
    var strandLum = mix(0.10,1.55,crackPattern)*(0.55+0.45*grain);
    strandLum *= 1.0+0.18*smoothstep(0.55,0.95,effective);
    let carrier = sampleRgb/max(sampleValue,0.12);
    sampleRgb = mix(sampleRgb,carrier*strandLum*0.80,authorship);
    sampleAlpha *= mix(1.0,mix(0.75,3.40,clumpDark),authorship);
    // Non-authored phases keep a granular stipple of the same field so no
    // region of the medium reverts to silk.
    let grainZone = emberZone*(0.45+0.55*sheet)*ringLod*(1.0-authorship);
    sampleRgb *= mix(1.0,mix(0.62,1.42,grain),grainZone);
    sampleAlpha *= mix(1.0,mix(1.20,0.86,grain),grainZone);
    // Off-sheet haze thins in the ember zone so the disk reads as a compact
    // granular sheet rather than a fat torus of smoke. The retention target
    // is the live "Debris haze" knob: 1 keeps the full B haze around the
    // debris, lower values thin it harder.
    sampleRgb *= mix(1.0,I.hazeKeep,darkZone*(1.0-sheet));
  }
  if (ringNoiseLod <= 0.0) {
    let darkZone = smoothstep(0.16,0.42,effective);
    let sheet = 1.0-smoothstep(0.42,0.85,abs(z)/max(perturbedThickness,1e-5));
    sampleRgb *= mix(1.0,I.hazeKeep,darkZone*(1.0-sheet));
  }
  if (U.smokeOpacity > 1.0) { sampleAlpha *= U.smokeOpacity; }
  // A sample with neither emission nor opacity leaves the transfer state
  // (and the rock layers' medium depth span) untouched.
  if (sampleAlpha<=0.0 && max(sampleRgb.r,max(sampleRgb.g,sampleRgb.b))<=0.0) { return; }
  // The depth span of the medium along this ray places the next frame's
  // rock buckets (bucketInfoOut layer 0).
  let d = distance(U.camPos,x);
  volumeDepthMin = min(volumeDepthMin,d);
  volumeDepthMax = max(volumeDepthMax,d);
  if (TEMPORAL_REFRESH) {
    // Scattering point: the visibility-weighted mean position of the medium,
    // the world anchor of the history reprojection (written in writeOut).
    let opacity = max(sampleAlpha*stepLength,0.0);
    let weight = clamp((*h).inlineTrans.r,0.0,1.0)
      *(1.0-exp(-opacity));
    let radius = max(length(x.xy),1e-6);
    scatteringPointSum += weight*vec3f(x.xy/radius,x.z);
    scatteringRadiusSum += weight*radius;
    scatteringPointWeight += weight;
  }
  npgsAccumulate(h,sampleRgb,sampleAlpha,stepLength);
}
fn inlineMarchChord(h: ptr<function,Hits>, x0: vec3f, x1: vec3f,
                    Er: f32, Lz: f32, lc: f32,
                    phase: ptr<function,f32>) {
  if ((*h).tauStop != 0u || U.hr <= 1e-5) { return; }
  let referenceScale = NPGS_REFERENCE_OUTER/max(U.diskOut,1e-5);
  let thicknessScale = U.hr/0.055;
  let maxReferenceHalf = NPGS_REFERENCE_THIN*thicknessScale
    +NPGS_REFERENCE_HOPPER*thicknessScale*NPGS_REFERENCE_OUTER+2.0;
  let maxWorldHalf = maxReferenceHalf/referenceScale;
  if ((x0.z > maxWorldHalf && x1.z > maxWorldHalf)
      || (x0.z < -maxWorldHalf && x1.z < -maxWorldHalf)) { return; }
  // Local flare bound: the global slab test above uses the widest possible
  // disk, but most grazing chords sit in the empty wedge far above the
  // local sheet. The beta density shape peaks at exactly 1, so the local
  // geometric flare (plus margin) bounds every perturbed thickness and the
  // inner cloud alike.
  let rhoRefMax = max(length(x0.xy),length(x1.xy))*referenceScale;
  let localFlare = (NPGS_REFERENCE_THIN
    +max(0.0,(rhoRefMax-3.0)*NPGS_REFERENCE_HOPPER))*thicknessScale;
  let localBound = (max(localFlare,NPGS_REFERENCE_THIN*thicknessScale)
    *1.06+0.4)/referenceScale;
  if ((x0.z > localBound && x1.z > localBound)
      || (x0.z < -localBound && x1.z < -localBound)) { return; }
  let chord = x1-x0;
  let chordLength = length(chord);
  if (chordLength <= 1e-7) { return; }
  let xy = chord.xy;
  let closest = clamp(-dot(x0.xy,xy)/max(dot(xy,xy),1e-9),0.0,1.0);
  if (length(x0.xy+closest*xy) > U.diskOut*1.10) { return; }
  // Inner-cavity cull: r_BL <= |x| always and |x| is convex along the
  // linear chord, so both endpoints inside diskIn keep every point in the
  // cavity where the material is exactly zero. Shadow-adjacent rays were
  // burning full substep loops there for nothing.
  if (max(dot(x0,x0),dot(x1,x1)) < U.diskIn*U.diskIn*0.9025) { return; }

  // Constant-coordinate-time Kerr–Schild spatial proper length, evaluated at
  // the chord midpoint exactly as the reference does for each geodesic step.
  let mid = 0.5*(x0+x1);
  let r = ksr(mid,U.a*U.a);
  let r2 = r*r;
  let denominator = r2*r2+U.a*U.a*mid.z*mid.z+1e-9;
  let metricF = (2.0*r-U.q2)*r2/denominator;
  let q = r2+U.a*U.a;
  let principal = vec3f(
    (r*mid.x+U.a*mid.y)/q,
    (r*mid.y-U.a*mid.x)/q,
    mid.z/r);
  let properWorld = sqrt(max(dot(chord,chord)
    +metricF*pow(dot(principal,chord),2.0),1e-9));
  let totalDistance = properWorld*referenceScale;
  let localDir = normalize(chord);
  // One broad stream fetch per chord (see the private declarations): the
  // field's texel pitch is several substeps wide, so the chord midpoint
  // represents every sample in it.
  let midRadius = length(mid.xy);
  let midPhi = atan2(mid.y,mid.x);
  let rateScale = 0.70710678*pow(U.diskOut/25.0,1.5);
  let localOmega = keplerOmega(max(midRadius,1e-6));
  let midSourceAngle = midPhi-I.debrisPhase
    -(-rateScale*localOmega-(-rateScale*I.pivotOmega))*I.materialTime;
  let streamPosition = vec3f(
    0.075*midRadius,
    midSourceAngle/(2.0*NPGS_PI)+0.11*log(max(midRadius,1.0)),
    0.35*mid.z);
  let chordFootprint = distance(U.camPos,mid)*I.pixelAngle;
  let streamLod = clamp(log2(max(chordFootprint*4.76,1.0)),0.0,
    f32(textureNumLevels(inlineNoiseTex)-1u));
  let streamField = textureSampleLevel(
    inlineNoiseTex,inlineNoiseSampler,streamPosition,streamLod);
  let streamRaw = clamp(0.52*streamField.x+0.30*streamField.y
    +0.18*streamField.z,0.0,1.0);
  chordStreamWeight = smoothstep(0.30,0.72,streamRaw);
  let midWorldR = ksr(mid,U.a*U.a);
  chordShift = clamp(inlineTransferFactor(
    midWorldR,kerrGAt(midWorldR,Er,Lz,lc)),0.03,32.0);
  chordTemperature = inlineTemperature(midWorldR);

  // Adaptive quadrature: heavily veiled samples and far-from-camera chords
  // contribute little per unit length, so the step stretches there (up to
  // ~3x). The per-ray phase jitter plus temporal accumulation hide the
  // coarser quadrature; optical depth stays correct because the true step
  // length is what enters the accumulator.
  let farBoost = 1.35*smoothstep(5.0,15.0,distance(U.camPos,x0));
  if (!stablePhaseChosen) {
    stablePhaseChosen = true;
    let farWeight = smoothstep(I.stableDistance,I.stableDistance+I.stableWidth,
      distance(U.camPos,x0));
    (*phase) = mix((*phase),stableRayPhase,farWeight);
  }
  var traveled = 0.0;
  for (var sampleIndex = 0u; sampleIndex < 192u; sampleIndex++) {
    if (traveled >= totalDistance || (*h).tauStop != 0u) { break; }
    let veil = smoothstep(0.60,0.15,(*h).inlineTrans.r);
    let materialStep = 0.17*I.materialScale
      *(1.0+1.2*veil+farBoost);
    let advance = (*phase)*materialStep;
    let next = min(totalDistance,traveled+advance);
    if (next >= totalDistance-1e-7) {
      (*phase) = max(0.0,(*phase)
        -(totalDistance-traveled)/materialStep);
      traveled = totalDistance;
      break;
    }
    traveled = next;
    (*phase) = 1.0;
    inlineMaterialStep(h,mix(x0,x1,traveled/totalDistance),
                       localDir,materialStep);
  }
}
`,av=`
fn writeOut(gid: vec2u, h0: Hits) {
  var h = h0;
  // Maximal extension: the topology/ring overlay accumulated through the
  // interior sits behind every medium sample in front of the hole (the
  // continuation starts where the exterior march stopped), so it composites
  // here under the current transmittance before the terminal sky.
  if (U.ext > 0.5 && h.capture == 1u) {
    h.inlineRadiance += h.inlineTrans*h.extRGB;
    h.inlineTrans *= h.extT;
  }
  // The escape-direction gradient from the previous march feeds two things.
  // The composite pass rasters catalog stars AFTER the temporal resolve from
  // the direction stored here, so that direction must not carry this frame's
  // sub-pixel jitter or every star shivers in place by up to half a pixel
  // per frame (dense enough inside the window to read as boiling). The
  // first-order correction D(centre) = D(centre+j) - J*j leaves an error of
  // order |D''|*|j|^2 — a thousandth of a pixel even inside the window. The
  // same gradient is the pixel's footprint on the diffuse sky cubemap, which
  // sizes the mip level where lensing packs many texels into one pixel.
  var starDv = select(vec2f(0.0),clamp(h.dir,vec2f(-1.0),vec2f(1.0)),h.esc == 1u);
  var footLod = 0.0;
  var unstable = false;
  var starHold = false;
  var heldWord = 0u;
  if (h.esc == 1u) {
    let gi = vec2i(gid);
    let dims = vec2i(textureDimensions(gRayPrev));
    let c = rayFieldAt(gi,dims);
    // A pixel is unstable when last frame traced it to a different fate:
    // invalid then, valid now, or another sky region. A never-traced
    // previous field (first frame after a reallocation) says nothing — gating
    // on it blanked the whole star layer for a frame on every render-scale
    // step or canvas resize.
    unstable = c.traced && (!c.valid || c.region != h.region);
    if (all(dims == vec2i(textureDimensions(gRay))) && c.valid && c.region == h.region) {
      let sx = rayFieldSlope(c,gi,vec2i(1,0),gi.x&7,dims);
      let sy = rayFieldSlope(c,gi,vec2i(0,1),gi.y&7,dims);
      let foot = max(select(0.0,length(sx.xyz),sx.w > 0.5),
                     select(0.0,length(sy.xyz),sy.w > 0.5));
      // A face-centre texel of the sky cube spans 2/N radians. The -0.5 bias
      // keeps the sharpness the jittered temporal resolve recovers by itself
      // and leaves the unlensed sky (about 1.2 texels per pixel) untouched.
      footLod = max(0.0,log2(max(foot,1e-6)*${(Wl/2).toFixed(1)})-0.5);
      // Never extrapolate across the critical curve, where neighbouring
      // pixels see unrelated sky; the star layer fades out there anyway.
      if (sx.w > 0.5 && sy.w > 0.5 && foot < 0.05) {
        let centre = normalize(octDecode(h.dir)-sx.xyz*U.jitterX-sy.xyz*U.jitterY);
        starDv = clamp(octEncode(centre),vec2f(-1.0),vec2f(1.0));
        // Parked camera: every pixel is still re-marched on the eighth-rate
        // cycle, and the re-traced centre direction differs from last
        // frame's only by trace and 16-bit quantization noise (about 1e-4
        // rad) — yet a few hundredths of a pixel flip the star raster's
        // coverage sub-samples, which reads as sporadic blinking across a
        // dense field. Hold the stored word bit-exactly while the new value
        // sits inside a tenth-of-a-pixel band; any pose change rewrites it.
        if (I.cameraStatic > 0.5 && length(centre-c.dir) < 0.1*max(foot,I.pixelAngle)) {
          starHold = true;
          heldWord = c.word;
        }
      }
    }
  }
  // Rays that skirted the photon sphere compress enormous sky solid angle
  // into one pixel; sample up the mip chain there so the piled-up star
  // images become the film's smooth ring glow instead of static. Window
  // rays use their accumulated azimuthal winding the same way: the
  // critical-curve band winds many times through the interior. The
  // measured footprint takes over wherever the previous frame supplied one.
  let skyLod = max(max(smoothstep(9.0,18.0,rayRingPath)*5.0,
                       smoothstep(8.0,40.0,h.extWind)*4.5),footLod);
  // Star gate for the composite (bits 3-7, 0 = draw, 31 = suppress). The
  // continuous footprint fade lives in the composite's own screen
  // derivatives — a quantized per-pixel LOD here stepped by a quarter mip on
  // a few percent of pixels every frame and made the window's stars blink.
  // The gate only marks what those derivatives cannot see: a pixel whose
  // region (or validity) differs from last frame's is a boundary pixel
  // flipping under the jitter, and its catalog would blink.
  let gateBits = select(0u,31u,unstable);
  var starDirWord = 0u;
  if (h.esc == 1u) { starDirWord = select(packOct16Precise(starDv),heldWord,starHold); }
  // bit 2: escape direction valid; bits 3-7: star gate; bits 8-10: terminal
  // sky region; bits 16-31: frame stamp, by which the advance pass tells
  // pixels this march wrote from stale ones.
  let stamp = u32(U.frameStamp)&0xFFFFu;
  textureStore(gRay,gid,vec4u(starDirWord,
    ((h.esc&1u)<<2u)|(gateBits<<3u)|((h.region&7u)<<8u)|(stamp<<16u),0u,0u));
  if (TEMPORAL_REFRESH) {
    let material = scatteringPointWeight > 1e-7;
    let inverseWeight = 1.0/max(scatteringPointWeight,1e-7);
    let angleWeight = length(scatteringPointSum.xy);
    var point = vec3f(scatteringRadiusSum*inverseWeight*scatteringPointSum.xy/max(angleWeight,1e-7),
      scatteringPointSum.z*inverseWeight);
    let opaqueMaterial = material && h0.inlineTrans.r < 0.015;
    let geometryAnchor = !opaqueMaterial && h.esc != 0u
      && (geometryOverlayTouched
          || (h.capture != 0u && U.topoHorizon+U.topoErgo+U.ringGlow+U.ctcTint > 0.0));
    if (geometryAnchor) { point = octDecode(h.dir); }
    let ambiguous = material && !geometryAnchor && angleWeight < 0.05*scatteringPointWeight;
    // The integer part is a categorical anchor class; the fraction stores diffuse-sky LOD.
    var kind = (h.region&7u)|((h.esc&1u)<<3u)|select(0u,16u,material || geometryAnchor)
      |select(0u,32u,geometryAnchor)|select(0u,64u,ambiguous);
    // Below the existing extension-transmission gate the hidden terminal
    // sky class is irrelevant to material history. It must not turn every
    // opaque grain into a full-rate geometric edge.
    if (opaqueMaterial) { kind = 128u|16u|select(0u,64u,ambiguous); }
    if (abs(U.jitterX)+abs(U.jitterY) > 0.0) {
      let p = vec2i(gid);
      let size = vec2i(textureDimensions(materialPointPrev));
      let old = textureLoad(materialPointPrev,clamp(p,vec2i(0),size-vec2i(1)),0);
      if (u32(old.w) == kind+1u) {
        let xm = textureLoad(materialPointPrev,clamp(p-vec2i(1,0),vec2i(0),size-vec2i(1)),0);
        let xp = textureLoad(materialPointPrev,clamp(p+vec2i(1,0),vec2i(0),size-vec2i(1)),0);
        let ym = textureLoad(materialPointPrev,clamp(p-vec2i(0,1),vec2i(0),size-vec2i(1)),0);
        let yp = textureLoad(materialPointPrev,clamp(p+vec2i(0,1),vec2i(0),size-vec2i(1)),0);
        var dx = vec3f(0.0);
        var dy = vec3f(0.0);
        if (u32(xm.w) == kind+1u && u32(xp.w) == kind+1u) { dx=0.5*(xp.xyz-xm.xyz); }
        if (u32(ym.w) == kind+1u && u32(yp.w) == kind+1u) { dy=0.5*(yp.xyz-ym.xyz); }
        point -= dx*U.jitterX+dy*U.jitterY;
        if (geometryAnchor) { point = normalize(point); }
      }
    }
    textureStore(materialPointOut,gid,vec4f(point,f32(kind+1u)+clamp(skyLod,0.0,12.0)/16.0));
  }
  // Depth buckets: the medium in front of each rock layer the ray never
  // crossed is the whole march (see bucketCross).
  for (var i = 0u; i < 3u; i++) {
    if ((bucketPending&(1u<<i))!=0u) {
      textureStore(bucketPrefixOut,gid,i32(i),
        vec4f(h0.inlineRadiance,clamp(h0.inlineTrans.r,0.0,1.0)));
    }
  }
  // Bucket metadata. Layer 0: the medium's depth span (the next frame's
  // bucketSpan); layer 1: sky LOD and the capture flag (bucket compose);
  // layer 2: the rock coverage per layer (temporalCritical, next frame).
  let valid = volumeDepthMax>=volumeDepthMin;
  textureStore(bucketInfoOut,gid,0,vec4u(bitcast<u32>(select(0.0,volumeDepthMin,valid)),
    bitcast<u32>(select(0.0,volumeDepthMax,valid)),0u,0u));
  textureStore(bucketInfoOut,gid,1,vec4u(bitcast<u32>(skyLod),h.capture,0u,0u));
  let c0 = textureLoad(bucketColors,vec2i(gid),0,0).a;
  let c1 = textureLoad(bucketColors,vec2i(gid),1,0).a;
  let c2 = textureLoad(bucketColors,vec2i(gid),2,0).a;
  textureStore(bucketInfoOut,gid,2,vec4u(pack4x8unorm(vec4f(c0,c1,c2,0.0)),0u,0u,0u));
  textureStore(inlineFront,gid,vec4f(h.inlineRadiance,-max(h.inlineTrans.r,1e-6)));
}
`,iv=`
struct Hits {
  esc: u32, capture: u32, tauStop: u32,
  // Medium radiance and spectral transmittance accumulated front to back.
  inlineRadiance: vec3f, inlineTrans: vec3f,
  dir: vec2f,
  /* Maximal extension: terminal block (0 ours, 1 previous universe,
     2 antiverse, 3 ring, 4 budget), accumulated |dphi| winding for sky LOD,
     and the topology/ring overlay as premultiplied radiance + transmittance
     that sits behind all medium in front of the hole. */
  region: u32, extWind: f32, extRGB: vec3f, extT: vec3f,
}
fn trace(dir: vec3f) -> Hits {
  // One future-directed photon covector supplies both the Hamiltonian path and
  // every conserved quantity.  Negative affine flow follows it from the
  // observer toward the source in the physical +a spacetime.
  var h: Hits;
  h.inlineRadiance = vec3f(0.0);
  h.inlineTrans = vec3f(1.0);
  h.extT = vec3f(1.0);
  let a2c = U.a*U.a;
  var x = U.camPos;
  let initialRadius = kerrRadiusState(x,a2c);
  let received = receivedPhotonCovector(dir);
  let E = max(-received.x,1e-6);
  var p = received.yzw;
  let Er = E;
  // Static-observer normalization gives -p.u_obs=1 and therefore E/lapse=1.
  let lc = E;
  let Lz = x.x*p.y-x.y*p.x;
  var escd = false;
  // Every capture guard breaks to ONE hand-off site below: the interior
  // continuation is a large function and inlining it five times bloated the
  // kernel (measured: the whole march slowed, not just window rays).
  var captured = false;
  var zP = x.z;
  var lastDx = vec3f(0.0);
  var transUB = 1.0;
  var materialPhase = 0.05+0.95*h13(dir*173.0);
  let n = u32(clamp(U.maxSteps, 1.0, 640.0));
  // Each exact quartic result is carried only after all consumers of the old
  // state run.  This changes no capture/material ordering; it only prevents a
  // derivative at that same x from solving the quartic a second time.
  var radiusState = initialRadius;
  for (var i = 0u; i < n; i++) {
    let r = radiusState.r;
    var dlBase = clamp(0.055*r*(0.4+r/(r+3.0)), 0.03, select(1.5, 2.6, r > 20.0 && abs(x.z) > 3.0));
    // Far-field stretch: the material march tolerates slightly coarser
    // weak-field integration; the star field's geometry trace does not.
    if (MATERIAL_MARCH) { dlBase *= 1.0+0.45*smoothstep(7.0,18.0,r); }
    let xP = x;
    let d1 = derivBack(x,p,E,U.a,a2c,radiusState); lastDx = d1.dx;
    let dl = min(dlBase,0.1*max(length(p),E)/max(length(d1.dp),1e-6));
    let rEuler = ksr(x+dl*d1.dx,a2c);
    if (r <= U.captureRadius || rEuler <= U.captureRadius) {
      captured = true;
      break;
    }
    if (r > 16.0) { // weak field: midpoint (RK2) — half the derivative cost
      let xK2 = x+0.5*dl*d1.dx;
      let d2 = derivBack(xK2,p+0.5*dl*d1.dp,E,U.a,a2c,
                         kerrRadiusState(xK2,a2c));
      x += dl*d2.dx; p += dl*d2.dp;
    } else {
      // Each RK trial is checked before its derivative for the same reason as
      // the completed chord: the past-horizon coordinate stiffness can turn
      // one invalid stage into a numerically huge, false outward escape.
      let xK2 = x+0.5*dl*d1.dx;
      let radiusK2 = kerrRadiusState(xK2,a2c);
      if (radiusK2.r <= U.captureRadius) {
        captured = true;
        break;
      }
      let d2 = derivBack(xK2,p+0.5*dl*d1.dp,E,U.a,a2c,radiusK2);
      let xK3 = x+0.5*dl*d2.dx;
      let radiusK3 = kerrRadiusState(xK3,a2c);
      if (radiusK3.r <= U.captureRadius) {
        captured = true;
        break;
      }
      let d3 = derivBack(xK3,p+0.5*dl*d2.dp,E,U.a,a2c,radiusK3);
      let xK4 = x+dl*d3.dx;
      let radiusK4 = kerrRadiusState(xK4,a2c);
      if (radiusK4.r <= U.captureRadius) {
        captured = true;
        break;
      }
      let d4 = derivBack(xK4,p+dl*d3.dp,E,U.a,a2c,radiusK4);
      x += dl/6.0*(d1.dx+2.0*d2.dx+2.0*d3.dx+d4.dx);
      p += dl/6.0*(d1.dp+2.0*d2.dp+2.0*d3.dp+d4.dp);
    }
    let nextRadius = kerrRadiusState(x,a2c);
    let rn = nextRadius.r;
    if (U.hr < 0.001) {
      // Razor-thin disk (THIN_DISK_W): a midplane crossing inside the disk,
      // where a circular orbit exists, attenuates the transmittance bound.
      if (zP*x.z < 0.0) {
        let t = zP/(zP-x.z);
        let xh = mix(xP, x, t);
        let rho2 = xh.x*xh.x+xh.y*xh.y;
        let rb = sqrt(max(rho2-a2c, 0.0));
        if (rb >= U.diskIn && rb <= U.diskOut) {
          let sq = sqrt(rb);
          var den = rb*sq-3.0*sq+2.0*U.a;
          if (U.q2 > 0.0) {
            let sk = sqrt(max(rb-U.q2,1e-6));
            den = rb*rb-3.0*rb+2.0*U.q2+2.0*U.a*sk;
          }
          if (den > 1e-4) {
            transUB *= 1.0 - AL_MIN*cachedSurfaceFades(rb);
            if (transUB < 0.05) { h.tauStop = 1u; return h; }
          }
        }
      }
    } else if (h.tauStop == 0u) {
      inlineMarchChord(&h,xP,x,Er,Lz,lc,&materialPhase);
    }
    zP = x.z;
    if (rn <= U.captureRadius || rn < 0.5) {
      captured = true;
      break;
    }
    if (rn < 4.6) { rayRingPath += dl; }
    // Topology overlay, exterior part: rays that skirt the hole without
    // entering it still cross the outer ergosurface (r < 2). The sign
    // change of r^2 - 2r + q^2 + a^2 cos^2(theta) between the chord ends
    // marks the crossing; the shell composites in ray order right here,
    // behind the medium already accumulated and in front of what follows.
    if (U.ext > 0.5 && U.topoErgo > 0.0 && r < 2.2) {
      let gP = r*r-2.0*r+U.q2+a2c*xP.z*xP.z/(r*r);
      let gN = rn*rn-2.0*rn+U.q2+a2c*x.z*x.z/(rn*rn);
      if (gP*gN < 0.0) {
        let thetaE = acos(clamp(x.z/rn,-1.0,1.0));
        let edgeE = clamp(1.0-abs(gN-gP)/(0.35*dl+1e-6),0.0,1.0);
        let shellE = topoShell(TopoAcc(h.inlineRadiance,h.inlineTrans),2u,
                               thetaE,kerrSchildPhi(x,rn,U.a),edgeE);
        h.inlineRadiance = shellE.rgb;
        h.inlineTrans = shellE.tr;
        if (TEMPORAL_REFRESH) { geometryOverlayTouched = true; }
      }
    }
    radiusState = nextRadius;
    if (rn > U.esc && dot(x, lastDx) > 0.0) { escd = true; break; }
  }
  if (captured) {
    // (x, p) is the last accepted exterior state: the guard fired either
    // before a step (state unchanged) or after a completed step that landed
    // inside the surface but still well outside r+.
    h.capture = 1u;
    if (U.ext > 0.5 && max(h.inlineTrans.r,max(h.inlineTrans.g,h.inlineTrans.b)) > 0.015) {
      extendRay(&h,x,p,E);
    }
    return h;
  }
  if (escd) {
    h.esc = 1u;
    h.dir = octEncode(compactKerrEscapeDirection(x,p,E,U.a,a2c,radiusState));
  }
  return h;
}

@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u,
        @builtin(workgroup_id) workgroupId: vec3u,
        @builtin(local_invocation_index) localIndex: u32,
        @builtin(num_workgroups) workgroupCount: vec3u) {
  let outDims = textureDimensions(gRay);
  var outPixel = gid.xy;
  var fullPixel = outPixel;
  var fullDims = outDims;
  if (U.traceMode > 2.5) {
    // Exact repairs: one queued pixel per invocation (repair-queue.ts).
    fullDims = vec2u(u32(U.fullWidth),u32(U.fullHeight));
    let groupIndex = workgroupId.y*workgroupCount.x+workgroupId.x;
    let queueIndex = groupIndex*${I1}u+localIndex;
    let accepted = min(workQueue.count,workQueue.capacity);
    if (queueIndex >= accepted) { return; }
    let packedPixel = workQueue.items[queueIndex];
    fullPixel = vec2u(packedPixel%fullDims.x,packedPixel/fullDims.x);
    outPixel = fullPixel;
  } else if ((outPixel.x >= outDims.x || outPixel.y >= outDims.y)
             && (!TEMPORAL_REFRESH || I.exact > 0.5)) {
    // A per-pixel refresh dispatch is checked after its remap below.
    return;
  }
  if (TEMPORAL_REFRESH && I.exact < 0.5) {
    // Per-pixel refresh: the dispatch covers count/8 of the pixels, phase
    // selects which, interleaved in 2x4 blocks.
    let count = u32(I.refreshCount);
    let phase = u32(I.refreshPhase);
    if (count == 1u && I.cellOfFour >= 0.0) {
      // Idle refresh: the dispatch covers one cell of every 2x2 block.
      let which = u32(I.cellOfFour);
      let cell = outPixel*2u+vec2u(which&1u,which>>1u);
      outPixel = cell*vec2u(2,4)+vec2u(phase&1u,(phase>>1u)&3u);
    } else if (count == 1u) {
      outPixel = outPixel*vec2u(2,4)+vec2u(phase&1u,(phase>>1u)&3u);
    } else if (count == 2u) {
      outPixel = outPixel*2u+vec2u(phase&1u,(phase>>1u)&1u);
    } else if (count == 4u) {
      outPixel.x = outPixel.x*2u+(phase&1u);
    } else if (count != 8u) {
      let slot = outPixel.x%count;
      let p = (phase+(slot*8u+count-1u)/count)&7u;
      outPixel = vec2u(outPixel.x/count,outPixel.y)*vec2u(2,4)+vec2u(p&1u,p>>1u);
    }
    fullPixel = outPixel;
    if (any(outPixel >= outDims)) { return; }
  }
  rayConeAngle = I.pixelAngle;
  if (MATERIAL_MARCH) {
    bucketInit(outPixel);
    // Ray cone of the noise footprint: the lensed pixel footprint from the
    // previous frame's direction gradient, between one and two pixels.
    let p = vec2i(outPixel);
    let dims = vec2i(outDims);
    let c = rayFieldAt(p,dims);
    if (c.valid && c.traced) {
      let dx = rayFieldSlope(c,p,vec2i(1,0),p.x&7,dims);
      let dy = rayFieldSlope(c,p,vec2i(0,1),p.y&7,dims);
      if (dx.w > 0.5 && dy.w > 0.5) {
        rayConeAngle = clamp(sqrt(length(cross(dx.xyz,dy.xyz))),
          I.pixelAngle,2.0*I.pixelAngle);
      }
    }
  }
  let h = trace(rayDir(fullPixel, fullDims));
  writeOut(outPixel, h);
}
`,Su=`// ASTRA march: Kerr-Newman geodesics with the inline volumetric medium.
${Kg}${ev}${Wg}${km}
${Ou}
${yr}
${es}
${$g}${Jg}${tv}${av}${Xg}${iv}`,nv=`
struct DebrisUniforms {
  camPosTan: vec4f,
  rightAspect: vec4f,
  upNear: vec4f,
  forwardFar: vec4f,
  disk: vec4f,
  motion: vec4f,
  viewport: vec4f,
  jitter: vec4f,
  extra: vec4f,
  quality: vec4f,
}
@group(0) @binding(0) var<uniform> U: DebrisUniforms;
@group(0) @binding(1) var debrisNoise: texture_3d<f32>;
@group(0) @binding(2) var debrisNoiseSampler: sampler;
// Member records from the expansion passes: the whole placement chain
// runs once per member there. r0 = centre + tint, r1 = scale + virtual
// id, r2 = stream weight, crust darkness, orbit angle (large only; the
// frame is stored exactly, never reconstructed from the centre).
@group(0) @binding(4) var<storage, read> microRecords: array<vec4f>;
@group(0) @binding(5) var<storage, read> largeRecords: array<vec4f>;
// Last frame's depth span of the medium per pixel (bucketInfo layer 0),
// which decides each fragment's depth layer.
@group(0) @binding(6) var previousVolumeSpan: texture_2d_array<u32>;

const PI: f32 = 3.141592653589793;
const PHI: f32 = 1.618033988749895;
const MICRO_INSTANCE_OFFSET: u32 = 98304u;
// One cluster field authors both tiers: cluster k owns eight large members
// and sixty-four micro members — 98304/8 == 786432/64 == 12288.
const LARGE_CLUSTER_MEMBERS: u32 = 8u;
const MICRO_CLUSTER_MEMBERS: u32 = 64u;
const CLUSTER_ID_SALT: u32 = 0x51ed270bu;
// Facets stop being resolvable near this projected half-size; below it the
// mesh hands its identity to the analytic silhouette representation.
const MESH_MIN_HALF_PX: f32 = 1.35;
override MICRO_DEBRIS: bool = false;
// One pass writes all three depth layers (each fragment to its own layer's
// pair of targets) instead of one pass per layer that discards the rest.
override LAYERS_AT_ONCE: bool = false;
const ROCK_VERTICES = array<vec3f, 12>(
  vec3f(-1.0, PHI, 0.0), vec3f(1.0, PHI, 0.0),
  vec3f(-1.0, -PHI, 0.0), vec3f(1.0, -PHI, 0.0),
  vec3f(0.0, -1.0, PHI), vec3f(0.0, 1.0, PHI),
  vec3f(0.0, -1.0, -PHI), vec3f(0.0, 1.0, -PHI),
  vec3f(PHI, 0.0, -1.0), vec3f(PHI, 0.0, 1.0),
  vec3f(-PHI, 0.0, -1.0), vec3f(-PHI, 0.0, 1.0),
);
const ROCK_INDICES = array<u32, 60>(
  0u, 11u, 5u, 0u, 5u, 1u, 0u, 1u, 7u, 0u, 7u, 10u, 0u, 10u, 11u,
  1u, 5u, 9u, 5u, 11u, 4u, 11u, 10u, 2u, 10u, 7u, 6u, 7u, 1u, 8u,
  3u, 9u, 4u, 3u, 4u, 2u, 3u, 2u, 6u, 3u, 6u, 8u, 3u, 8u, 9u,
  4u, 9u, 5u, 2u, 4u, 11u, 6u, 2u, 10u, 8u, 6u, 7u, 9u, 8u, 1u,
);
const GRAIN_CORNERS = array<vec2f, 6>(
  vec2f(-1.0,-1.0), vec2f(1.0,-1.0), vec2f(1.0,1.0),
  vec2f(-1.0,-1.0), vec2f(1.0,1.0), vec2f(-1.0,1.0),
);

fn hashU32(value: u32) -> u32 {
  var x = value;
  x = (x ^ (x >> 16u)) * 0x7feb352du;
  x = (x ^ (x >> 15u)) * 0x846ca68bu;
  return x ^ (x >> 16u);
}
fn random01(instance: u32, lane: u32) -> f32 {
  return f32(hashU32(instance * 0x9e3779b9u + lane * 0x85ebca6bu)
    & 0x00ffffffu) / 16777216.0;
}
fn clusterRandom(cluster: u32, lane: u32) -> f32 {
  return random01(cluster ^ CLUSTER_ID_SALT, lane);
}
fn rotateAxis(point: vec3f, axis: vec3f, angle: f32) -> vec3f {
  let c = cos(angle);
  let s = sin(angle);
  return point * c + cross(axis, point) * s
    + axis * dot(axis, point) * (1.0 - c);
}
fn debrisDensityShape(radius: f32) -> f32 {
  let referenceScale = 25.0/max(U.disk.y,1e-5);
  let r = radius*referenceScale;
  let inner = U.disk.x*referenceScale;
  let x = clamp((r-inner)/max(25.0-inner,1e-6),0.0,1.0);
  let curve = max(1.0,(25.0-inner)/10.0);
  var effective = x;
  if (abs(curve-1.0) >= 1e-5) {
    effective = clamp((-1.0+sqrt(max(
      0.0,1.0+4.0*curve*curve*x-4.0*x*curve)))
      /(2.0*curve-2.0),0.0,1.0);
  }
  let alpha = 0.9;
  let beta = 1.5;
  let norm = pow(alpha+beta,alpha+beta)
    /max(pow(alpha,alpha)*pow(beta,beta),1e-8);
  return norm*pow(max(effective,1e-8),alpha)
    *pow(max(1.0-effective,1e-8),beta);
}
fn debrisBaseHalfHeight(radius: f32, densityShape: f32) -> f32 {
  // Match the NPGS carrier's 0.75 + 0.40(r-3) reference flare and its radial
  // density collapse so debris occupies the same envelope as the smoke.
  let referenceScale = 25.0/max(U.disk.y,1e-5);
  let referenceRadius = radius*referenceScale;
  let thicknessScale = U.disk.z/0.055;
  let thin = 0.75*thicknessScale;
  let hopper = 0.40*thicknessScale;
  let geometricThin = thin+max(0.0,(referenceRadius-3.0)*hopper);
  return max(0.008,geometricThin*densityShape/referenceScale);
}
fn sharedStreamField(radius: f32, sourceAngle: f32,
                     sourceHeight: f32) -> vec4f {
  // Cylindrical coordinates make one texture period exactly seam-safe around
  // the disk. The logarithmic angular offset turns its broad cells into
  // spiral streams. inline-volume.ts uses this same mapping and LOD.
  let p = vec3f(
    0.075 * radius,
    sourceAngle / (2.0 * PI) + 0.11 * log(max(radius, 1.0)),
    0.35 * sourceHeight);
  // Population occupancy belongs to co-moving material space and mip zero;
  // the filtered fetch is still fully deterministic in that space (explicit
  // level, wrap-sampled), it only smooths between texels exactly like the
  // inline medium's crust so both see one continuous field.
  return textureSampleLevel(debrisNoise, debrisNoiseSampler, p, 0.0);
}
fn sharedStreamWeight(field: vec4f) -> f32 {
  let raw = clamp(0.52 * field.x + 0.30 * field.y
    + 0.18 * field.z, 0.0, 1.0);
  return smoothstep(0.30, 0.72, raw);
}
fn meshPoint(vertex: u32, instance: u32) -> vec3f {
  // The vertex-indexed perturbation is shared by adjacent faces, preserving a
  // watertight convex silhouette while breaking the perfect base polyhedron.
  let irregular = 0.76 + 0.34 * random01(instance, 31u + vertex);
  return normalize(ROCK_VERTICES[vertex]) * irregular;
}
fn mediumLight(center: vec3f) -> vec2f {
  // Debris is lit by the medium it is embedded in, with no artificial floor.
  // x: ambient glow proportional to the local plasma emission proxy — where
  // the smoke's perceived silhouette collapses, so does the debris.
  // y: directional irradiance from the hot inner annulus, gated to the disk's
  // support because the intervening medium absorbs it farther out.
  let radius = max(length(center.xy), 0.001);
  let dShape = debrisDensityShape(radius);
  let halfH = debrisBaseHalfHeight(radius, dShape);
  let vertical = exp(-0.5*center.z*center.z/max(halfH*halfH, 1e-6));
  let ambient = dShape*mix(0.35, 1.0, vertical);
  // The equatorial body absorbs most inner-annulus light before it reaches
  // matter far above or below the plane; without this, high-|z| foreground
  // rocks bloom as isolated orange points over the dim haze.
  let inner = clamp(10.0/(radius*radius+4.0), 0.0, 1.1)
    *pow(clamp(dShape, 0.0, 1.0), 0.6)
    *mix(0.25, 1.0, vertical);
  return vec2f(ambient, inner);
}

struct VertexOut {
  @builtin(position) position: vec4f,
  @location(0) @interpolate(flat) normal: vec3f,
  @location(1) @interpolate(flat) center: vec3f,
  // tint, visibility, impostor flag, observer distance
  @location(2) @interpolate(flat) misc: vec4f,
  @location(3) localUv: vec2f,
  // x: crust bed darkness — rocks inside dark clumps are the clump and stay
  // mostly unlit; rocks in cracks catch the glow.
  @location(4) @interpolate(flat) bed: vec2f,
  @location(5) @interpolate(flat) lodScreen: vec4f,
}

@vertex
fn vs(@builtin(vertex_index) vertexIndex: u32,
      @builtin(instance_index) instance: u32) -> VertexOut {
  var out: VertexOut;
  let inner = U.disk.x;
  let outer = U.disk.y;

  // Both tiers read the member record the expansion pass wrote; the large
  // tier's also carries the orbit angle that orients its mesh. The override
  // constant folds the unused side away.
  var center = vec3f(0.0);
  var scale = vec3f(0.0);
  var tint = 0.0;
  var virtualInstance = 0u;
  var streamWeight = 0.0;
  var clumpDark = 0.0;
  var radial = vec3f(1.0, 0.0, 0.0);
  var tangent = vec3f(0.0, 1.0, 0.0);
  {
    var recordBase = instance * 3u;
    var r0 = vec4f(0.0);
    var r1 = vec4f(0.0);
    var r2 = vec4f(0.0);
    if (MICRO_DEBRIS) {
      r0 = microRecords[recordBase];
      r1 = microRecords[recordBase + 1u];
      r2 = microRecords[recordBase + 2u];
    } else {
      r0 = largeRecords[recordBase];
      r1 = largeRecords[recordBase + 1u];
      r2 = largeRecords[recordBase + 2u];
      radial = vec3f(cos(r2.z), sin(r2.z), 0.0);
      tangent = vec3f(-radial.y, radial.x, 0.0);
    }
    center = r0.xyz;
    tint = r0.w;
    scale = r1.xyz;
    virtualInstance = u32(r1.w);
    streamWeight = r2.x;
    clumpDark = r2.y;
  }
  let observerDistance = distance(center, U.camPosTan.xyz);

  // ---- visibility: physical guards only, never a distance LOD ----
  // The inline integrator veils and eventually absorbs far debris with real
  // optical depth, so no observer-distance window exists to sweep a shell
  // through the disk. What remains: a near-clip guard and the black-hole
  // depth fade beyond which unlensed Euclidean geometry would be wrong.
  let nearFade = smoothstep(0.34, 0.72, observerDistance);
  let centerRelative = center - U.camPosTan.xyz;
  let centerCameraPosition = vec3f(
    dot(centerRelative, U.rightAspect.xyz),
    dot(centerRelative, U.upNear.xyz),
    dot(centerRelative, U.forwardFar.xyz));
  let blackHoleDepth = dot(-U.camPosTan.xyz, U.forwardFar.xyz);
  let foregroundWidth = max(0.8, 0.08 * U.disk.y);
  let foregroundFade = 1.0 - smoothstep(
    blackHoleDepth - foregroundWidth,
    blackHoleDepth + 0.35 * foregroundWidth,
    centerCameraPosition.z);
  // A straight-line image is only valid while the sightline stays outside the
  // photon-capture zone. Matter in the strong-field region whose apparent
  // position lands inside the shadow silhouette would really be lensed out to
  // the rim (and crushed by redshift), so fade it instead of painting glowing
  // grit over the void. A rock immediately in front of the camera is exempt:
  // its direct image legitimately silhouettes against the shadow.
  let rockRadius = length(center);
  let sight = centerRelative / max(observerDistance, 1e-4);
  let sightClosest = max(dot(-U.camPosTan.xyz, sight), 0.0);
  let sightImpact = length(U.camPosTan.xyz + sightClosest * sight);
  let strongField = 1.0 - smoothstep(4.8, 7.0, rockRadius);
  let shadowSight = 1.0 - smoothstep(5.8, 7.6, sightImpact);
  let nearCamera = 1.0 - smoothstep(1.6, 2.6, observerDistance);
  let directImageValid = 1.0
    - strongField * shadowSight * (1.0 - nearCamera);
  let lodFade = nearFade * foregroundFade * directImageValid;
  let geometryScale = sqrt(clamp(lodFade, 0.0, 1.0));

  let projectedHalfSize = max(scale.x, max(scale.y, scale.z))
    / max(centerCameraPosition.z, 0.001)
    / U.camPosTan.w * (0.5 * U.viewport.y);
  let actualProjectedHalfSize = geometryScale * projectedHalfSize;
  // Below ~1/50 px the analytic coverage itself is invisible; skipping is a
  // raster-cost floor, not a visual population change.
  let visible = actualProjectedHalfSize > 0.02;
  var asImpostor = MICRO_DEBRIS || actualProjectedHalfSize < MESH_MIN_HALF_PX;
  // Large rocks draw both representations (60 mesh vertices, then the 6 of
  // the silhouette quad) and hand over between them in the fragment shader
  // with a per-rock hashed mask instead of a hard switch at one size.
  let crossfade = !MICRO_DEBRIS && U.quality.y>0.5;
  let meshWeight = smoothstep(1.08,1.62,actualProjectedHalfSize);
  var drawVertex = vertexIndex;
  var representationWeight = 1.0;
  if (crossfade) {
    asImpostor = vertexIndex>=60u;
    if (asImpostor) {
      drawVertex = vertexIndex-60u;
      representationWeight = 1.0-meshWeight;
    } else {
      representationWeight = meshWeight;
    }
  }
  // Demoted or invisible large rocks collapse 54 of their 60 vertices to a
  // degenerate point; bail before the mesh-point/rotation math instead of
  // paying it per vertex for geometry the rasterizer discards.
  if ((!crossfade && !MICRO_DEBRIS && vertexIndex >= 6u && (asImpostor || !visible))
      || representationWeight<=0.001) {
    out.position = vec4f(2.0, 2.0, 2.0, 1.0);
    out.misc = vec4f(0.0);
    out.normal = vec3f(0.0, 0.0, 1.0);
    out.center = center;
    out.localUv = vec2f(0.0);
    out.bed = vec2f(0.0);
    return out;
  }

  var unscaledWorldOffset = vec3f(0.0);
  var fragmentNormal = normalize(U.camPosTan.xyz - center);
  var localUv = vec2f(0.0);
  var rasterInflation = 1.0;
  let turnSeed = random01(virtualInstance, 14u);
  if (asImpostor) {
    // Camera-facing analytic silhouette of the same rock: the quad is
    // inflated to a guaranteed raster footprint while the true area lives in
    // fractional edge coverage, so sub-pixel debris dims instead of blinking.
    var corner = vec2f(0.0);
    if (drawVertex < 6u) { corner = GRAIN_CORNERS[drawVertex]; }
    let turn = (turnSeed - 0.5) * 0.92;
    let turnC = cos(turn);
    let turnS = sin(turn);
    let rotatedCorner = vec2f(
      turnC * corner.x - turnS * corner.y,
      turnS * corner.x + turnC * corner.y);
    var quadHalf = vec2f(scale.y, scale.z);
    if (!MICRO_DEBRIS) {
      let meanScale = (scale.x + scale.y + scale.z) / 3.0;
      quadHalf = vec2f(1.15 * meanScale);
    }
    rasterInflation = clamp(
      U.quality.x / max(actualProjectedHalfSize, 1e-4), 1.0, 16.0);
    unscaledWorldOffset =
      U.rightAspect.xyz * rotatedCorner.x * quadHalf.x
      + U.upNear.xyz * rotatedCorner.y * quadHalf.y;
    localUv = corner * rasterInflation;
  } else {
    var turnAxis = vec3f(
      random01(virtualInstance, 11u) * 2.0 - 1.0,
      random01(virtualInstance, 12u) * 2.0 - 1.0,
      random01(virtualInstance, 13u) * 2.0 - 1.0);
    turnAxis = normalize(turnAxis + vec3f(0.001, 0.002, 0.003));
    let turn = turnSeed * 2.0 * PI;
    let faceStart = (drawVertex / 3u) * 3u;
    let i0 = ROCK_INDICES[faceStart];
    let i1 = ROCK_INDICES[faceStart + 1u];
    let i2 = ROCK_INDICES[faceStart + 2u];
    let q0 = rotateAxis(meshPoint(i0, virtualInstance) * scale, turnAxis, turn);
    let q1 = rotateAxis(meshPoint(i1, virtualInstance) * scale, turnAxis, turn);
    let q2 = rotateAxis(meshPoint(i2, virtualInstance) * scale, turnAxis, turn);
    var q = q0;
    if (drawVertex % 3u == 1u) { q = q1; }
    if (drawVertex % 3u == 2u) { q = q2; }
    unscaledWorldOffset =
      radial * q.x + tangent * q.y + vec3f(0.0, 0.0, q.z);
    let localNormal = normalize(cross(q1 - q0, q2 - q0));
    fragmentNormal = normalize(
      radial * localNormal.x + tangent * localNormal.y
      + vec3f(0.0, 0.0, localNormal.z));
  }

  let worldOffset = unscaledWorldOffset * geometryScale * rasterInflation;
  let worldPosition = center + worldOffset;
  let relative = worldPosition - U.camPosTan.xyz;
  let cameraPosition = vec3f(
    dot(relative, U.rightAspect.xyz),
    dot(relative, U.upNear.xyz),
    dot(relative, U.forwardFar.xyz));
  out.normal = fragmentNormal;
  out.center = center;
  out.misc = vec4f(
    tint,
    select(0.0, 1.0, visible),
    select(0.0, 1.0, asImpostor),
    observerDistance);
  out.localUv = localUv;
  out.bed = vec2f(clumpDark,meshWeight);
  // The rock centre in pixels, its projected half size and its id: the
  // frame of the crossfade mask, fixed to the rock rather than the screen.
  let centreNdc = vec2f(centerCameraPosition.x/(U.camPosTan.w*U.rightAspect.w),
    centerCameraPosition.y/U.camPosTan.w)/max(centerCameraPosition.z,0.001);
  out.lodScreen = vec4f((vec2f(0.5,-0.5)*centreNdc+vec2f(0.5))*U.viewport.xy+U.jitter.xy,
    actualProjectedHalfSize,f32(virtualInstance));

  let nearPlane = U.upNear.w;
  let farPlane = max(
    U.forwardFar.w,
    length(U.camPosTan.xyz) + U.disk.y + 2.0);
  if (!visible || cameraPosition.z <= nearPlane) {
    out.position = vec4f(2.0, 2.0, 2.0, 1.0);
    out.misc.y = 0.0;
    return out;
  }
  let clipZ = farPlane / (farPlane - nearPlane) * cameraPosition.z
    - farPlane * nearPlane / (farPlane - nearPlane);
  out.position = vec4f(
    // The same sub-pixel jitter as the geodesic rays, so debris edges
    // integrate under the temporal resolve instead of staying raw.
    cameraPosition.x / (U.camPosTan.w * U.rightAspect.w)
      + U.jitter.x * 2.0 / U.viewport.x * cameraPosition.z,
    cameraPosition.y / U.camPosTan.w
      - U.jitter.y * 2.0 / U.viewport.y * cameraPosition.z,
    clipZ,
    cameraPosition.z);
  return out;
}

struct FragOut {
  // Premultiplied radiance + coverage, composited by the inline integrator
  // at this layer's distance along each geodesic.
  @location(0) color: vec4f,
  // Coverage-weighted distance accumulator (dist·coverage, coverage): the
  // integrator recovers the mean debris distance per pixel from x/y.
  @location(1) dist: vec4f,
  // The middle and far layers' pairs when LAYERS_AT_ONCE (location 0 and 1
  // are then the near layer's). A zero leaves its target as it was under
  // both blend modes; a pipeline with two targets ignores these.
  @location(2) color1: vec4f,
  @location(3) dist1: vec4f,
  @location(4) color2: vec4f,
  @location(5) dist2: vec4f,
}

@fragment
fn fs(in: VertexOut, @builtin(front_facing) frontFacing: bool) -> FragOut {
  // fwidth converts the irregular silhouette into pixel coverage. The
  // inflated quad guarantees fragment invocation even when the true shard
  // is sub-pixel, eliminating binary sample-centre fizzle. Derivatives are
  // computed unconditionally (uniform control flow); the mesh path simply
  // ignores them.
  let theta = atan2(in.localUv.y, in.localUv.x);
  let edge = 0.74
    + 0.10 * sin(3.0 * theta + 11.0 * in.misc.x)
    + 0.055 * sin(5.0 * theta - 7.0 * in.misc.x);
  let signedDistance = length(in.localUv) - edge;
  let antialiasWidth = max(fwidth(signedDistance), 0.012);
  var coverage = in.misc.y;
  if (in.misc.z > 0.5) {
    coverage *= 1.0 - smoothstep(
      -antialiasWidth, antialiasWidth, signedDistance);
  }
  if (coverage <= 0.002) { discard; }
  // Mesh/silhouette crossfade: a hashed mask on cells fixed to the rock,
  // blended between two cell sizes so it does not pop as the rock shrinks,
  // keeps each pixel in exactly one representation (bed.y: the mesh weight).
  if (!MICRO_DEBRIS && U.quality.y>0.5) {
    let objectUv = (in.position.xy-in.lodScreen.xy)/max(in.lodScreen.z,0.01);
    let level = log2(max(in.lodScreen.z,1.0));
    let scale = exp2(floor(level));
    let c0 = vec2i(floor(objectUv*scale));
    let c1 = vec2i(floor(objectUv*scale*2.0));
    let seed = u32(in.lodScreen.w);
    let h0 = f32(hashU32((bitcast<u32>(c0.x)*73856093u)^(bitcast<u32>(c0.y)*19349663u)^seed)
      &0x00ffffffu)/16777216.0;
    let h1 = f32(hashU32((bitcast<u32>(c1.x)*73856093u)^(bitcast<u32>(c1.y)*19349663u)^seed)
      &0x00ffffffu)/16777216.0;
    let mask = mix(h0,h1,fract(level));
    if ((in.misc.z>0.5 && mask<in.bed.y) || (in.misc.z<0.5 && mask>=in.bed.y)) { discard; }
  }
  // Depth layers: a fragment belongs to the layer its distance falls in
  // relative to last frame's medium span (bucketSpan in debris-depth.ts,
  // same fallback). Drawn one layer per pass, it stays only in the pass of
  // its layer (extra.y); drawn all at once, it goes to that layer's targets.
  var bucket = 0u;
  if (U.extra.y>=0.0) {
    let p = vec2i(in.position.xy);
    let raw = textureLoad(previousVolumeSpan,p,0,0).xy;
    var span = bitcast<vec2f>(raw);
    let d = length(U.camPosTan.xyz);
    if (!(span.x>0.0 && span.y>=span.x && span.y<1e5)) {
      span = vec2f(max(0.1,d-0.5*U.disk.y),d+0.5*U.disk.y);
    }
    bucket = 2u;
    if (in.misc.w<span.x) {
      bucket = 0u;
    } else if (in.misc.w<span.y) {
      bucket = 1u;
    }
    if (!LAYERS_AT_ONCE && bucket!=u32(U.extra.y)) { discard; }
  }
  let normal = select(-in.normal, in.normal, frontFacing);
  let cylindricalRadius = max(length(in.center.xy), 0.001);
  // Non-emissive matter lit by the disk itself: ambient glow follows the
  // local emission proxy and the hot inner annulus supplies the directional
  // term. Debris outside the medium's visible support goes dark with it
  // instead of floating as bright confetti past the smoke's edge.
  let light = mediumLight(in.center);
  let lightDirection = normalize(vec3f(
    -in.center.x, -in.center.y, 0.28 * cylindricalRadius));
  let diffuse = max(dot(normal, lightDirection), 0.0);
  let topFill = 0.5 + 0.5 * abs(normal.z);
  // Rocks inherit their bed's darkness: inside a dark clump the ambient
  // glow is mostly gone (the clump IS the dark matter), while the inner
  // annulus still rim-lights crack-side faces. This keeps debris reading as
  // dark grain against glow, never lit gravel over a darkened bed.
  let bed = in.bed.x;
  var illumination = U.viewport.z * (
    0.85 * light.x * (0.55 + 0.45 * topFill) * mix(1.0, 0.22, bed)
    + 1.2 * light.y * (0.10 + 0.90 * diffuse) * mix(1.0, 0.45, bed));
  // Reflected light climbs out of the same potential the smoke's transfer
  // does: dim by the relative (g_rock/g_camera)^4, so inner-cavity debris
  // fades toward black with the medium instead of glowing beside the shadow.
  // U.disk.w carries the camera lapse.
  if (U.disk.w > 0.0) {
    // Reissner-Nordstrom-form lapse; jitter.z = charge squared (0 for Kerr).
    let rockR = max(length(in.center), 2.05);
    let lapse = sqrt(max(1.0 - 2.0 / rockR + U.jitter.z / (rockR * rockR), 0.0))
      / U.disk.w;
    illumination *= clamp(lapse * lapse * lapse * lapse, 0.0, 1.2);
  }
  // Desaturated char-brown family: the reference grain reads as burnt crust
  // against cream glow, never as saturated orange confetti.
  var albedo = mix(vec3f(0.075, 0.030, 0.010),
                   vec3f(0.46, 0.155, 0.044), in.misc.x);
  if (MICRO_DEBRIS) {
    // Grit cuts granular silhouettes out of the luminous medium rather than
    // becoming a second emission layer.
    illumination *= 0.80;
    albedo = mix(vec3f(0.025, 0.007, 0.002),
                 vec3f(0.30, 0.065, 0.010), in.misc.x);
  }
  let reflected = albedo * illumination;
  let color = vec4f(reflected * coverage, coverage);
  let dist = vec4f(in.misc.w * coverage, coverage, 0.0, 0.0);
  var out: FragOut;
  if (!LAYERS_AT_ONCE || bucket==0u) {
    out.color = color;
    out.dist = dist;
  } else if (bucket==1u) {
    out.color1 = color;
    out.dist1 = dist;
  } else {
    out.color2 = color;
    out.dist2 = dist;
  }
  return out;
}
`,s1=[96,128,128],rv=`
struct BakeUni {
  cellsR: f32, cellsG: f32, period: f32, size: f32,
  seedR: f32, seedG: f32, seedAltR: f32, seedAltG: f32,
}
@group(0) @binding(0) var<uniform> B: BakeUni;
@group(0) @binding(1) var bakeOut: texture_storage_3d<rgba16float, write>;

fn bakeLattice(cell: vec3f, cells: f32, seed: f32) -> f32 {
  let wrapped = cell-floor(cell/cells)*cells;
  return 2.0*fract(sin(dot(wrapped+vec3f(seed),
    vec3f(12.9898,78.233,213.765)))*43758.5453)-1.0;
}
fn bakeValueNoise(position: vec3f, cells: f32, seed: f32) -> f32 {
  let cell = floor(position);
  let q0 = fract(position);
  let q = q0*q0*(3.0-2.0*q0);
  let a0 = mix(bakeLattice(cell,cells,seed),
               bakeLattice(cell+vec3f(1.0,0.0,0.0),cells,seed),q.x);
  let a1 = mix(bakeLattice(cell+vec3f(0.0,1.0,0.0),cells,seed),
               bakeLattice(cell+vec3f(1.0,1.0,0.0),cells,seed),q.x);
  let b0 = mix(bakeLattice(cell+vec3f(0.0,0.0,1.0),cells,seed),
               bakeLattice(cell+vec3f(1.0,0.0,1.0),cells,seed),q.x);
  let b1 = mix(bakeLattice(cell+vec3f(0.0,1.0,1.0),cells,seed),
               bakeLattice(cell+vec3f(1.0,1.0,1.0),cells,seed),q.x);
  return mix(mix(a0,a1,q.y),mix(b0,b1,q.y),q.z);
}
fn bakeTerm(position: vec3f, cells: f32, seed: f32) -> f32 {
  return log(1.0+0.1*bakeValueNoise(position,cells,seed));
}

@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let size = u32(B.size);
  if (gid.x >= size || gid.y >= size || gid.z >= size) { return; }
  // Texel centres over one tiling period.
  let unit = (vec3f(gid)+vec3f(0.5))/B.size;
  let posR = unit*B.cellsR;
  let posG = unit*B.cellsG;
  textureStore(bakeOut, gid, vec4f(
    bakeTerm(posR, B.cellsR, B.seedR),
    bakeTerm(posG, B.cellsG, B.seedG),
    bakeTerm(posR, B.cellsR, B.seedAltR),
    bakeTerm(posG, B.cellsG, B.seedAltG)));
}
`,Fl=12288,Lu=`
struct DebrisUniforms {
  camPosTan: vec4f,
  rightAspect: vec4f,
  upNear: vec4f,
  forwardFar: vec4f,
  disk: vec4f,
  motion: vec4f,
  viewport: vec4f,
  jitter: vec4f,
  extra: vec4f,
  quality: vec4f,
}
@group(0) @binding(0) var<uniform> U: DebrisUniforms;
const PI: f32 = 3.141592653589793;
const CLUSTER_ID_SALT: u32 = 0x51ed270bu;
/* Prograde Keplerian rate; motion.z = spin, jitter.z = charge squared. The
   Kerr-Newman form replaces sqrt(r) by sqrt(r - q^2); q = 0 keeps the Kerr
   expression bit for bit. */
fn debrisKepler(rho: f32) -> f32 {
  if (U.jitter.z > 0.0) {
    let s = sqrt(max(rho - U.jitter.z, 1e-6));
    return s / (rho * rho + U.motion.z * s);
  }
  return 1.0 / (rho * sqrt(rho) + U.motion.z);
}

fn hashU32(value: u32) -> u32 {
  var x = value;
  x = (x ^ (x >> 16u)) * 0x7feb352du;
  x = (x ^ (x >> 15u)) * 0x846ca68bu;
  return x ^ (x >> 16u);
}
fn random01(instance: u32, lane: u32) -> f32 {
  return f32(hashU32(instance * 0x9e3779b9u + lane * 0x85ebca6bu)
    & 0x00ffffffu) / 16777216.0;
}
fn clusterRandom(cluster: u32, lane: u32) -> f32 {
  return random01(cluster ^ CLUSTER_ID_SALT, lane);
}
fn debrisDensityShape(radius: f32) -> f32 {
  let referenceScale = 25.0/max(U.disk.y,1e-5);
  let r = radius*referenceScale;
  let inner = U.disk.x*referenceScale;
  let x = clamp((r-inner)/max(25.0-inner,1e-6),0.0,1.0);
  let curve = max(1.0,(25.0-inner)/10.0);
  var effective = x;
  if (abs(curve-1.0) >= 1e-5) {
    effective = clamp((-1.0+sqrt(max(
      0.0,1.0+4.0*curve*curve*x-4.0*x*curve)))
      /(2.0*curve-2.0),0.0,1.0);
  }
  let alpha = 0.9;
  let beta = 1.5;
  let norm = pow(alpha+beta,alpha+beta)
    /max(pow(alpha,alpha)*pow(beta,beta),1e-8);
  return norm*pow(max(effective,1e-8),alpha)
    *pow(max(1.0-effective,1e-8),beta);
}
fn debrisBaseHalfHeight(radius: f32, densityShape: f32) -> f32 {
  let referenceScale = 25.0/max(U.disk.y,1e-5);
  let referenceRadius = radius*referenceScale;
  let thicknessScale = U.disk.z/0.055;
  let thin = 0.75*thicknessScale;
  let hopper = 0.40*thicknessScale;
  let geometricThin = thin+max(0.0,(referenceRadius-3.0)*hopper);
  return max(0.008,geometricThin*densityShape/referenceScale);
}
/* False for a rock the raster's vertex shader (debris.ts, vs) leaves without
   a single fragment: faded out completely (closer than the near fade, beyond
   the hole's depth, or a direct image that is not valid in the strong
   field), behind the camera, or outside the view. The fade tests repeat the
   vertex shader's expressions with each threshold moved slightly to the
   drawn side; the view test bounds the rock by a sphere of twice its
   largest half extent plus the two pixels a small rock's quad is inflated
   to. */
fn rockDrawn(center: vec3f, scale: vec3f) -> bool {
  let relative = center-U.camPosTan.xyz;
  let observerDistance = length(relative);
  if (observerDistance <= 0.33) { return false; }
  let view = vec3f(dot(relative,U.rightAspect.xyz),dot(relative,U.upNear.xyz),
    dot(relative,U.forwardFar.xyz));
  let blackHoleDepth = dot(-U.camPosTan.xyz,U.forwardFar.xyz);
  let foregroundWidth = max(0.8,0.08*U.disk.y);
  if (view.z >= blackHoleDepth+0.35*foregroundWidth+0.001) { return false; }
  let sight = relative/max(observerDistance,1e-4);
  let sightClosest = max(dot(-U.camPosTan.xyz,sight),0.0);
  let sightImpact = length(U.camPosTan.xyz+sightClosest*sight);
  if (length(center) <= 4.79 && sightImpact <= 5.79 && observerDistance >= 2.61) { return false; }
  let tanY = U.camPosTan.w;
  let tanX = tanY*U.rightAspect.w;
  let depth = max(view.z,0.0);
  let bound = 2.0*max(scale.x,max(scale.y,scale.z))+2.0*depth*tanY/(0.5*U.viewport.y);
  if (view.z+bound <= U.upNear.w) { return false; }
  if (abs(view.x) > depth*tanX+bound*(1.0+tanX)) { return false; }
  if (abs(view.y) > depth*tanY+bound*(1.0+tanY)) { return false; }
  return true;
}
`,lv=`
${Lu}
@group(0) @binding(1) var debrisNoise: texture_3d<f32>;
@group(0) @binding(2) var debrisNoiseSampler: sampler;
// Per cluster: alive flag, stream weight, crust darkness.
@group(0) @binding(3) var<storage, read_write> clusterInfo: array<vec4f>;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3u, @builtin(num_workgroups) groups: vec3u) {
  let cluster = gid.x+gid.y*groups.x*64u;
  if (cluster >= u32(U.extra.x)) { return; }
  let inner = U.disk.x;
  let outer = U.disk.y;
  let clusterRadiusMix = clusterRandom(cluster, 1u);
  let clusterAngle0 = 2.0 * PI * clusterRandom(cluster, 2u);
  let clusterZUnit = (clusterRandom(cluster, 3u) + clusterRandom(cluster, 4u)
    + clusterRandom(cluster, 5u) - 1.5) / 1.5;
  let clusterRadius = sqrt(mix(inner * inner, outer * outer, clusterRadiusMix));
  let clusterShape = debrisDensityShape(clusterRadius);
  let clusterHalf = debrisBaseHalfHeight(clusterRadius, clusterShape);
  let p = vec3f(
    0.075 * clusterRadius,
    clusterAngle0 / (2.0 * PI) + 0.11 * log(max(clusterRadius, 1.0)),
    0.35 * clusterZUnit * clusterHalf);
  let field = textureSampleLevel(debrisNoise, debrisNoiseSampler, p, 0.0);
  let raw = clamp(0.52 * field.x + 0.30 * field.y
    + 0.18 * field.z, 0.0, 1.0);
  let streamWeight = smoothstep(0.30, 0.72, raw);
  let crustPosition = vec3f(
    0.80 * clusterRadius,
    clusterAngle0 / (2.0 * PI) + 0.55 * log(max(clusterRadius, 1.0)),
    0.37);
  let crustField = textureSampleLevel(
    debrisNoise, debrisNoiseSampler, crustPosition, 0.0);
  let crust = clamp(0.80 * crustField.y + 0.20 * crustField.w, 0.0, 1.0);
  let outerness = smoothstep(0.30, 0.80, clusterRadiusMix);
  let clumpDark = smoothstep(mix(0.44, 0.29, outerness),
    mix(0.56, 0.41, outerness), crust);
  let streamOccupied = clusterRandom(cluster, 24u)
    < mix(0.34, 1.0, pow(streamWeight, 1.1))
      * mix(0.45, 1.0, clumpDark);
  let radialOccupied = clusterRandom(cluster, 25u)
    < pow(clamp(clusterShape, 0.0, 1.0), 0.9);
  let verticalOccupied = clusterRandom(cluster, 26u)
    < pow(max(0.0, 1.0 - abs(clusterZUnit)), 1.5);
  let alive = streamOccupied && radialOccupied && verticalOccupied;
  clusterInfo[cluster] = vec4f(
    select(0.0, 1.0, alive), streamWeight, clumpDark, 0.0);
}
`,mr=786432,sv=`
${Lu}
@group(0) @binding(1) var<storage, read> clusterInfo: array<vec4f>;
// Micro member records: r0 = centre + tint, r1 = quad half extents +
// virtual id, r2 = stream weight + crust darkness.
@group(0) @binding(2) var<storage, read_write> microRecords: array<vec4f>;
@group(0) @binding(3) var<storage, read_write> microCount: atomic<u32>;

const MICRO_VIRTUAL_OFFSET: u32 = 98304u;
const MICRO_CLUSTER_MEMBERS: u32 = 64u;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3u, @builtin(num_workgroups) groups: vec3u) {
  let localId = gid.x+gid.y*groups.x*64u;
  if (localId >= u32(U.extra.x)*64u) { return; }
  let cluster = localId / MICRO_CLUSTER_MEMBERS;
  let member = localId % MICRO_CLUSTER_MEMBERS;
  let info = clusterInfo[cluster];
  if (info.x < 0.5) { return; }
  let streamWeight = info.y;
  // Each further unit of rock population takes a fresh id range
  // (884736 = 98304 large + 786432 micro ids).
  let virtualInstance = MICRO_VIRTUAL_OFFSET+(localId%${mr}u)
    +(localId/${mr}u)*884736u;
  let fullness = mix(0.82, 1.0, clusterRandom(cluster, 28u));
  if (random01(virtualInstance, 22u) >= fullness) { return; }

  let inner = U.disk.x;
  let outer = U.disk.y;
  let clusterRadiusMix = clusterRandom(cluster, 1u);
  let clusterAngle0 = 2.0 * PI * clusterRandom(cluster, 2u);
  let clusterZUnit = (clusterRandom(cluster, 3u) + clusterRandom(cluster, 4u)
    + clusterRandom(cluster, 5u) - 1.5) / 1.5;
  let clusterRadius = sqrt(mix(inner * inner, outer * outer, clusterRadiusMix));

  let train = pow(clusterRandom(cluster, 27u), 1.6);
  let isField = clusterRandom(cluster, 29u) < 0.24;
  var tangentialHalf = mix(0.35, 2.20, train) * (0.6 + 0.8 * streamWeight);
  var radialHalf = 0.075 * tangentialHalf;
  var verticalSpread = 0.30;
  if (isField) {
    tangentialHalf *= 6.0;
    radialHalf *= 5.0;
    verticalSpread = 0.55;
  }
  tangentialHalf *= 1.3;
  radialHalf *= 1.4;
  let sizeClass = mix(0.62, 2.00, pow(clusterRandom(cluster, 30u), 2.2));

  let mT = random01(virtualInstance, 40u) + random01(virtualInstance, 41u) - 1.0;
  let mR = random01(virtualInstance, 42u) + random01(virtualInstance, 43u) - 1.0;
  let mZ = random01(virtualInstance, 44u) + random01(virtualInstance, 45u) - 1.0;
  let radius = clamp(clusterRadius + mR * radialHalf,
    inner + 0.05, outer - 0.02);
  let zUnit = clamp(
    clusterZUnit + mZ * verticalSpread * (1.0 - abs(clusterZUnit)),
    -1.0, 1.0);
  let deltaAngle = mT * tangentialHalf / max(clusterRadius, 1e-3);

  let omega = debrisKepler(clusterRadius);
  let rateScale = 0.70710678 * pow(U.disk.y / 25.0, 1.5);
  let debrisOmega = -rateScale * omega;
  let debrisPivot = -rateScale * U.motion.w;
  let angle = clusterAngle0 + deltaAngle + U.motion.y
    + (debrisOmega - debrisPivot) * U.motion.x;
  let radial = vec3f(cos(angle), sin(angle), 0.0);
  let logRadius = log(max(radius, 1.0));

  let radialDensity = debrisDensityShape(radius);
  let baseHalfHeight = debrisBaseHalfHeight(radius, radialDensity);
  let halfHeight = baseHalfHeight * mix(0.68, 1.30, streamWeight);
  let sheetHalf = 0.42 * halfHeight;
  let stratumShift = sheetHalf * (
    0.16 * sin(3.0 * angle + 4.6 * logRadius)
    + 0.10 * sin(7.0 * angle - 2.2 * logRadius));
  let center = vec3f(
    radial.xy * radius,
    zUnit * sheetHalf + stratumShift);

  let sizeSample = random01(virtualInstance, 6u);
  let baseSize = sqrt(sizeClass) * (0.0030 + 0.0105 * pow(sizeSample, 2.2));
  let scale = baseSize * vec3f(
    mix(0.52, 0.96, random01(virtualInstance, 8u)),
    mix(1.02, 1.92, random01(virtualInstance, 9u)),
    mix(0.66, 1.10, random01(virtualInstance, 10u)));
  if (!rockDrawn(center,scale)) { return; }

  let slot = atomicAdd(&microCount, 1u);
  // Validation can pin the record order (quality.w): atomic slots make the
  // raster draw order, and so its blending, differ from run to run.
  let base = select(slot, localId, U.quality.w > 0.5) * 3u;
  microRecords[base] = vec4f(center, random01(virtualInstance, 15u));
  microRecords[base + 1u] = vec4f(scale, f32(virtualInstance));
  microRecords[base + 2u] = vec4f(streamWeight, info.z, 0.0, 0.0);
}
`,gr=98304,ov=`
${Lu}
@group(0) @binding(1) var<storage, read> clusterInfo: array<vec4f>;
// Large member records: r0 = centre + tint, r1 = mesh scale + virtual id,
// r2 = stream weight, crust darkness, orbit angle (frame stored exactly —
// never reconstructed from the centre).
@group(0) @binding(2) var<storage, read_write> largeRecords: array<vec4f>;
@group(0) @binding(3) var<storage, read_write> largeCount: atomic<u32>;

const LARGE_CLUSTER_MEMBERS_E: u32 = 8u;

@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) gid: vec3u, @builtin(num_workgroups) groups: vec3u) {
  let localId = gid.x+gid.y*groups.x*64u;
  if (localId >= u32(U.extra.x)*8u) { return; }
  let cluster = localId / LARGE_CLUSTER_MEMBERS_E;
  let virtualInstance = (localId%${gr}u)
    +(localId/${gr}u)*884736u;
  let info = clusterInfo[cluster];
  if (info.x < 0.5) { return; }
  let streamWeight = info.y;
  let fullness = mix(0.82, 1.0, clusterRandom(cluster, 28u));
  if (random01(virtualInstance, 22u) >= fullness) { return; }

  let inner = U.disk.x;
  let outer = U.disk.y;
  let clusterRadiusMix = clusterRandom(cluster, 1u);
  let clusterAngle0 = 2.0 * PI * clusterRandom(cluster, 2u);
  let clusterZUnit = (clusterRandom(cluster, 3u) + clusterRandom(cluster, 4u)
    + clusterRandom(cluster, 5u) - 1.5) / 1.5;
  let clusterRadius = sqrt(mix(inner * inner, outer * outer, clusterRadiusMix));

  let train = pow(clusterRandom(cluster, 27u), 1.6);
  let isField = clusterRandom(cluster, 29u) < 0.24;
  var tangentialHalf = mix(0.35, 2.20, train) * (0.6 + 0.8 * streamWeight);
  var radialHalf = 0.075 * tangentialHalf;
  var verticalSpread = 0.20;
  if (isField) {
    tangentialHalf *= 6.0;
    radialHalf *= 5.0;
    verticalSpread = 0.55;
  }
  let sizeClass = mix(0.62, 2.00, pow(clusterRandom(cluster, 30u), 2.2));

  let mT = random01(virtualInstance, 40u) + random01(virtualInstance, 41u) - 1.0;
  let mR = random01(virtualInstance, 42u) + random01(virtualInstance, 43u) - 1.0;
  let mZ = random01(virtualInstance, 44u) + random01(virtualInstance, 45u) - 1.0;
  let radius = clamp(clusterRadius + mR * radialHalf,
    inner + 0.05, outer - 0.02);
  let zUnit = clamp(
    clusterZUnit + mZ * verticalSpread * (1.0 - abs(clusterZUnit)),
    -1.0, 1.0);
  let deltaAngle = mT * tangentialHalf / max(clusterRadius, 1e-3);

  let omega = debrisKepler(clusterRadius);
  let rateScale = 0.70710678 * pow(U.disk.y / 25.0, 1.5);
  let debrisOmega = -rateScale * omega;
  let debrisPivot = -rateScale * U.motion.w;
  let angle = clusterAngle0 + deltaAngle + U.motion.y
    + (debrisOmega - debrisPivot) * U.motion.x;
  let radial = vec3f(cos(angle), sin(angle), 0.0);
  let logRadius = log(max(radius, 1.0));

  let radialDensity = debrisDensityShape(radius);
  let baseHalfHeight = debrisBaseHalfHeight(radius, radialDensity);
  let halfHeight = baseHalfHeight * mix(0.68, 1.30, streamWeight);
  let sheetHalf = 0.42 * halfHeight;
  let stratumShift = sheetHalf * (
    0.16 * sin(3.0 * angle + 4.6 * logRadius)
    + 0.10 * sin(7.0 * angle - 2.2 * logRadius));
  let center = vec3f(
    radial.xy * radius,
    zUnit * sheetHalf + stratumShift);

  let sizeSample = random01(virtualInstance, 6u);
  let rareSample = random01(virtualInstance, 7u);
  let baseSize = sizeClass * (0.0042 + 0.0165 * pow(sizeSample, 2.6)
    + 0.028 * smoothstep(0.985, 1.0, rareSample));
  let scale = baseSize * vec3f(
    mix(0.55, 1.18, random01(virtualInstance, 8u)),
    mix(0.80, 1.85, random01(virtualInstance, 9u)),
    mix(0.48, 1.05, random01(virtualInstance, 10u)));
  if (!rockDrawn(center,scale)) { return; }

  let slot = atomicAdd(&largeCount, 1u);
  // Validation can pin the record order (quality.w): atomic slots make the
  // raster draw order, and so its blending, differ from run to run.
  let base = select(slot, localId, U.quality.w > 0.5) * 3u;
  largeRecords[base] = vec4f(center, random01(virtualInstance, 15u));
  largeRecords[base + 1u] = vec4f(scale, f32(virtualInstance));
  largeRecords[base + 2u] = vec4f(streamWeight, info.z, angle, 0.0);
}
`,uv=`
// [vertexCount, instanceCount, firstVertex, firstInstance], large then micro.
@group(0) @binding(0) var<storage, read_write> drawArgs: array<u32, 8>;
// The last two vec4s of the rock uniform.
struct DrawMode { padding: array<vec4f,8>, extra: vec4f, quality: vec4f }
@group(0) @binding(1) var<uniform> drawMode: DrawMode;
@group(0) @binding(2) var<storage, read_write> largeCount: atomic<u32>;
@group(0) @binding(3) var<storage, read_write> microCount: atomic<u32>;

@compute @workgroup_size(1)
fn main() {
  // 60 mesh vertices, plus the 6 of the silhouette quad a large rock
  // crossfades to (quality.y).
  drawArgs[0] = select(60u,66u,drawMode.quality.y>0.5);
  let ordered = drawMode.quality.w > 0.5;
  drawArgs[1] = select(atomicLoad(&largeCount), u32(drawMode.extra.x) * 8u, ordered);
  drawArgs[2] = 0u;
  drawArgs[3] = 0u;
  drawArgs[4] = 6u;
  drawArgs[5] = select(atomicLoad(&microCount), u32(drawMode.extra.x) * 64u, ordered);
  drawArgs[6] = 0u;
  drawArgs[7] = 0u;
}
`,cv=`
struct SkyU {
  galM: mat3x3f, padStarDensity: f32, galB: f32, pxA: f32,
  nebD: f32, nebS: f32, pad0: f32, pad1: f32, pad2: f32,
}
struct SkyCenters {
  count: u32, pad0: u32, pad1: u32, pad2: u32,
  /** xyz = anchor direction, w = angular radius in radians. */
  c: array<vec4f, 10>,
}
@group(0) @binding(0) var<uniform> SU: SkyU;
@group(0) @binding(1) var outSky: texture_storage_2d_array<rgba16float, write>;
@group(0) @binding(2) var astronomicalSky: texture_2d<f32>;
@group(0) @binding(3) var astronomicalSamp: sampler;
@group(0) @binding(4) var<uniform> SC: SkyCenters;
${Ou}
/* GPU-baked volume-integrated clouds in a transparent equirectangular
   atlas (synthesized by nebula-bake; formerly a shipped PNG whose
   fetch-failure procedural fallback lived here). RGB stores display-encoded
   emitted radiance and alpha the integrated optical depth. No photographic
   sky, survey grain, contour extraction or analytic shell survives into
   this texture. */
fn volumetricAtlas(d: vec3f) -> vec4f {
  // Select the nearest baked cloud and scale only its local gnomonic
  // tangent coordinates. At 1x this is exactly the identity; at other sizes
  // it keeps every anchor fixed and still performs one atlas lookup.
  if (SC.count == 0u) { return vec4f(0.0); }
  var center = SC.c[0].xyz;
  var radius = SC.c[0].w;
  var nearest = dot(d,center);
  for (var i = 1u; i < SC.count; i++) {
    let n = dot(d,SC.c[i].xyz);
    if (n > nearest) { center = SC.c[i].xyz; radius = SC.c[i].w; nearest = n; }
  }
  let scale = clamp(SU.nebS,0.3,2.5);
  // 1.354x the angular radius reproduces the retired constant (0.52 at
  // the old 22-degree patches): margin for the turbulent silhouette.
  let supportAngle = min(radius*1.354*scale+0.055,1.35);
  if (nearest < cos(supportAngle)) { return vec4f(0.0); }
  let tangent = d/max(nearest,0.12)-center;
  let sampleDirection = normalize(center+tangent/scale);
  let lon = atan2(sampleDirection.z,sampleDirection.x);
  let lat = asin(clamp(sampleDirection.y,-1.0,1.0));
  let uv = vec2f(fract(0.5-lon/6.28318530718),0.5-lat/3.14159265359);
  let atlas = textureSampleLevel(astronomicalSky,astronomicalSamp,uv,0.0);
  return vec4f(pow(max(atlas.rgb,vec3f(0.0)),vec3f(2.2)),atlas.a);
}
/* A clean but internally structured galaxy. Every stochastic term remains
   gated by a latitude envelope: empty sky and the celestial poles therefore
   stay free of the photographic grain/radial residue of the rejected survey
   raster. The narrow stellar banks, broken clouds and warped dust lane avoid
   reading as one diffuse smoke streak. */
fn cleanGalaxy(d: vec3f) -> vec3f {
  let warp0 = fbm(d*2.35+vec3f(17.4,5.1,29.7));
  let warp1 = fbm(d*6.8+vec3f(41.7,12.8,3.6));
  let warp = (warp0-0.47)*0.048+(warp1-0.47)*0.012;
  let sl = d.y+warp;
  let halo = exp(-sl*sl*38.0);
  let disk = exp(-sl*sl*150.0);

  // A broad population term keeps the band recognisably stellar rather than
  // reducing it to isolated gas blobs. Two finer scales break that population
  // into banks and knots without adding any sky-wide grain.
  let mass0 = fbm(d*3.7+vec3f(4.7,21.3,9.2));
  let mass1 = fbm(d*9.4+vec3f(31.8,2.4,17.1));
  let mass2 = fbm(d*21.0+vec3f(13.9,27.6,44.1));
  let occupancy = smoothstep(0.27,0.70,mass0);
  let banks = occupancy*(0.32+0.68*smoothstep(0.34,0.65,mass1));
  let knots =
    smoothstep(0.51,0.71,mass2+mass1*0.13)
    *smoothstep(0.30,0.62,mass0);

  // A much thinner, independently warped absorber splits the luminous banks.
  // Clumpy opacity prevents the lane becoming a mechanically uniform stripe.
  let dustWarp = (fbm(d*7.2+vec3f(11.6,38.2,6.4))-0.47)*0.024;
  let dustProfile = exp(-(sl+dustWarp)*(sl+dustWarp)*760.0);
  let dustClumps = smoothstep(
    0.38,0.64,
    mix(
      fbm(d*5.9+vec3f(7.3,18.1,42.6)),
      fbm(d*13.1+vec3f(29.4,3.8,14.7)),
      0.34,
    ),
  );
  let dustLane = dustProfile*(0.46+0.48*dustClumps);

  let coreDir = normalize(vec3f(0.94,0.035,0.34));
  let coreAngle = acos(clamp(dot(d,coreDir),-1.0,1.0));
  let core =
    exp(-coreAngle*coreAngle*20.0)*exp(-sl*sl*30.0)
    +exp(-coreAngle*coreAngle*6.0)*exp(-sl*sl*16.0)*0.05;
  let coreWarmth = exp(-coreAngle*coreAngle*4.5);
  let bandColor = mix(
    vec3f(0.39,0.45,0.61),
    vec3f(0.68,0.46,0.29),
    clamp(coreWarmth*0.78+smoothstep(0.54,0.76,mass1)*0.22,0.0,1.0),
  );
  var galaxy =
    halo*(0.32+0.68*warp0)*vec3f(0.0017,0.0022,0.0042)
    +disk*(0.022+0.31*banks+0.22*knots)*bandColor
    +core*(0.38+0.62*banks)*vec3f(0.92,0.58,0.30)*0.54;
  galaxy *= 1.0-dustLane;
  return galaxy;
}
fn skyGen(d0: vec3f) -> vec4f {
  let d = normalize(SU.galM*d0);
  let volume = volumetricAtlas(d);
  let nebulaStrength = clamp(SU.nebD,0.0,2.0);
  let volumeAlpha =
    1.0-pow(max(1.0-volume.a,0.0001),nebulaStrength);
  var authored = vec3f(0.0008,0.0009,0.0012)
    +cleanGalaxy(d)*SU.galB;
  authored *= 1.0-volumeAlpha*0.72;
  authored += volume.rgb*nebulaStrength*1.18;
  let starTransmission = 1.0-volumeAlpha*0.82;
  return vec4f(authored,starTransmission);
}
fn faceDir(f: u32, s: f32, t: f32) -> vec3f {
  switch f {
    case 0u: { return vec3f(1.0,-t,-s); }
    case 1u: { return vec3f(-1.0,-t,s); }
    case 2u: { return vec3f(s,1.0,t); }
    case 3u: { return vec3f(s,-1.0,-t); }
    case 4u: { return vec3f(s,-t,1.0); }
    default: { return vec3f(-s,-t,-1.0); }
  }
}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let N = textureDimensions(outSky).x;
  if (gid.x >= N || gid.y >= N) { return; }
  let s = (f32(gid.x)+0.5)/f32(N)*2.0-1.0;
  let t = (f32(gid.y)+0.5)/f32(N)*2.0-1.0;
  let d = normalize(faceDir(gid.z, s, t));
  textureStore(outSky, gid.xy, gid.z, skyGen(d));
}`,fv=`
@group(0) @binding(0) var srcSky: texture_cube<f32>;
@group(0) @binding(1) var srcSamp: sampler;
@group(0) @binding(2) var dstSky: texture_storage_2d_array<rgba16float, write>;
fn faceDir(f: u32, s: f32, t: f32) -> vec3f {
  switch f {
    case 0u: { return vec3f(1.0,-t,-s); }
    case 1u: { return vec3f(-1.0,-t,s); }
    case 2u: { return vec3f(s,1.0,t); }
    case 3u: { return vec3f(s,-1.0,-t); }
    case 4u: { return vec3f(s,-t,1.0); }
    default: { return vec3f(-s,-t,-1.0); }
  }
}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let N = textureDimensions(dstSky).x;
  if (gid.x >= N || gid.y >= N || gid.z >= 6u) { return; }
  let s = (f32(gid.x)+0.5)/f32(N)*2.0-1.0;
  let t = (f32(gid.y)+0.5)/f32(N)*2.0-1.0;
  let o = 0.5/f32(N);
  let c =
    textureSampleLevel(srcSky,srcSamp,normalize(faceDir(gid.z,s-o,t-o)),0.0)
    +textureSampleLevel(srcSky,srcSamp,normalize(faceDir(gid.z,s+o,t-o)),0.0)
    +textureSampleLevel(srcSky,srcSamp,normalize(faceDir(gid.z,s-o,t+o)),0.0)
    +textureSampleLevel(srcSky,srcSamp,normalize(faceDir(gid.z,s+o,t+o)),0.0);
  textureStore(dstSky,gid.xy,gid.z,c*0.25);
}`,Nu=144,Yl=320,o1=4096,u1=2048,dv=1.35,ah=256,hv=4,vr=10,pv=[[4.5,7.5,4],[7.5,4,5],[3.5,5,9.5]],mv=u=>()=>{u|=0,u=u+1831565813|0;let n=Math.imul(u^u>>>15,1|u);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296},wu=(u,n,o)=>{const l=(u%360+360)%360/60,c=o*n,f=c*(1-Math.abs(l%2-1)),h=o-c,g=l<1?[c,f,0]:l<2?[f,c,0]:l<3?[0,c,f]:l<4?[0,f,c]:l<5?[f,0,c]:[c,0,f];return[g[0]+h,g[1]+h,g[2]+h]},gv=(u,n=Math.floor(Math.random()*2147483647))=>{const o=mv(n),l=Math.max(0,Math.min(vr,Math.round(u))),c=[],f=o()*360,h=137.50776405;for(let g=0;g<l;g++){const y=l===1?.5:(g+.5)/l,v=Math.max(-.96,Math.min(.96,1-2*y+(o()-.5)*.5)),b=Math.asin(v)*180/Math.PI,x=(g*h+o()*60)%360,w=f+g*h+(o()-.5)*48,T=(o()<.5?-1:1)*(55+o()*70),k=Math.floor(o()*3);c.push({seed:Math.floor(o()*2147483647),variant:k,targetRa:x,targetDec:b,angularRadius:14+o()*10,roll:o()*360-180,lineColor:wu(w,.78+.17*o(),.34+.26*o()),hotColor:wu(w+T,.45+.25*o(),.55+.25*o()),dustColor:wu(w+(o()-.5)*30,.6+.2*o(),.05+.07*o()),exposure:1.42+o()*.3,opacity:2.05+o()*.55,midSigma:pv[k]})}return c},vv=[14,17,12],yv=[1.6,2.4,1.45],ih=u=>Math.max(1,Math.round(4*u+.5)),xv=u=>{const n=ih(u);let o=0;const l=[];for(let f=-n;f<=n;f++){const h=Math.exp(-(f*f)/(2*u*u));l.push(h),o+=h}let c=0;for(const f of l)c+=f/o*(f/o);return Math.sqrt(c)},nh=(u,n)=>{const o=u*Math.PI/180,l=n*Math.PI/180;return[Math.cos(l)*Math.cos(o),Math.sin(l),Math.cos(l)*Math.sin(o)]},bv=u=>{const n=nh(u.targetRa,u.targetDec),o=Math.atan2(n[2],n[0]),l=Math.asin(Math.max(-1,Math.min(1,n[1]))),c=[-Math.sin(o),0,Math.cos(o)],f=[-Math.sin(l)*Math.cos(o),Math.cos(l),-Math.sin(l)*Math.sin(o)],h=u.roll*Math.PI/180,g=Math.cos(h),y=Math.sin(h),v=c.map((x,w)=>g*x+y*f[w]),b=c.map((x,w)=>-y*x+g*f[w]);return{center:n,east:v,north:b,tanExtent:Math.tan(u.angularRadius*Math.PI/180)}},Sv=u=>{const n=Nu/176,o=y=>[y[2]*n,y[1]*n,y[0]*n],l=o(vv),c=o(u.midSigma),f=o(yv),h=[0,1,2].map(y=>{const v=[l[y],c[y],f[y]];return{sigma:v,radius:v.map(ih)}}),g=[0,1,2].map(y=>{let v=1;for(const b of h)v*=xv(b.sigma[y]);return 1/Math.max(v,1e-6)});return{axes:h,invStd:g}},Ei=`
const VOL = ${Nu};
const DOMAIN = ${dv};
const HIST_BINS = ${ah}u;
const HIST_MAX = ${hv};

fn nbHash(v: vec4u) -> u32 {
  var x = (v.x*0x9E3779B9u) ^ (v.y*0x85EBCA6Bu) ^ (v.z*0xC2B2AE35u) ^ (v.w*0x27D4EB2Fu);
  x = (x ^ (x >> 16u))*0x7FEB352Du;
  x = (x ^ (x >> 15u))*0x846CA68Bu;
  return x ^ (x >> 16u);
}
fn nbUnit(v: vec4u) -> f32 {
  return (f32(nbHash(v) & 0x00FFFFFFu)+0.5)/16777216.0;
}
fn nbSmoothstep(lo: f32, hi: f32, v: f32) -> f32 {
  let t = clamp((v-lo)/(hi-lo), 0.0, 1.0);
  return t*t*(3.0-2.0*t);
}
`,wv=`
struct NoiseUni { seed: u32, pad0: u32, pad1: u32, pad2: u32 }
@group(0) @binding(0) var<uniform> NU: NoiseUni;
@group(0) @binding(1) var noiseOut: texture_storage_3d<rgba16float, write>;
${Ei}
fn gauss(p: vec3u, channel: u32, seed: u32) -> f32 {
  let u1 = nbUnit(vec4u(p.x, p.y, p.z, seed*8u+channel*2u));
  let u2 = nbUnit(vec4u(p.x, p.y, p.z, seed*8u+channel*2u+1u));
  return sqrt(-2.0*log(max(u1, 1e-7)))*cos(6.28318530718*u2);
}
@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= u32(VOL) || gid.y >= u32(VOL) || gid.z >= u32(VOL)) { return; }
  textureStore(noiseOut, gid, vec4f(
    gauss(gid, 0u, NU.seed), gauss(gid, 1u, NU.seed), gauss(gid, 2u, NU.seed), 0.0));
}
`,Ev=`
struct BlurUni {
  sigma: vec3f, axis: u32,
  radius: vec3u, pad0: u32,
}
@group(0) @binding(0) var<uniform> BU: BlurUni;
@group(0) @binding(1) var blurIn: texture_3d<f32>;
@group(0) @binding(2) var blurOut: texture_storage_3d<rgba16float, write>;
${Ei}
fn axisVec(axis: u32) -> vec3i {
  if (axis == 0u) { return vec3i(1,0,0); }
  if (axis == 1u) { return vec3i(0,1,0); }
  return vec3i(0,0,1);
}
@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= u32(VOL) || gid.y >= u32(VOL) || gid.z >= u32(VOL)) { return; }
  let dir = axisVec(BU.axis);
  var acc = vec3f(0.0);
  var wsum = vec3f(0.0);
  let maxR = i32(max(BU.radius.x, max(BU.radius.y, BU.radius.z)));
  for (var i = -maxR; i <= maxR; i++) {
    let p = (vec3i(gid)+dir*i+vec3i(VOL)*2) % vec3i(VOL);
    let s = textureLoad(blurIn, vec3u(p), 0).rgb;
    let fi = f32(i);
    let w = select(vec3f(0.0),
      exp(-fi*fi/(2.0*BU.sigma*BU.sigma)),
      abs(vec3f(fi)) <= vec3f(BU.radius));
    acc += s*w;
    wsum += w;
  }
  textureStore(blurOut, gid, vec4f(acc/max(wsum, vec3f(1e-6)), 0.0));
}
`,Mv=`
struct DensityUni {
  invStd: vec3f, variant: u32,
}
@group(0) @binding(0) var<uniform> DU: DensityUni;
@group(0) @binding(1) var fieldsTex: texture_3d<f32>;
@group(0) @binding(2) var densityOut: texture_storage_3d<rgba16float, write>;
@group(0) @binding(3) var<storage, read_write> hist: array<atomic<u32>>;
${Ei}
fn fieldAt(p: vec3u) -> vec3f {
  return textureLoad(fieldsTex, p, 0).rgb*DU.invStd;
}
@compute @workgroup_size(4,4,4)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= u32(VOL) || gid.y >= u32(VOL) || gid.z >= u32(VOL)) { return; }
  let f = fieldAt(gid);
  let low = f.x; let mid = f.y; let fine = f.z;
  // np.roll copies of the low field decorrelate the three warp axes
  // without more full-resolution fields.
  let lowRy = textureLoad(fieldsTex,
    vec3u(gid.x, (gid.y+u32(VOL)-u32(VOL/3)) % u32(VOL), gid.z), 0).r*DU.invStd.x;
  let lowRz = textureLoad(fieldsTex,
    vec3u((gid.x+u32(VOL)-u32(VOL/4)) % u32(VOL), gid.y, gid.z), 0).r*DU.invStd.x;
  let axisStep = 2.0*DOMAIN/f32(VOL-1);
  let x = -DOMAIN + f32(gid.x)*axisStep;
  let y = -DOMAIN + f32(gid.y)*axisStep;
  let z = -DOMAIN + f32(gid.z)*axisStep;
  let xx = x + 0.11*low;
  let yy = y + 0.085*lowRy;
  let zz = z + 0.075*lowRz;

  var body = 0.0;
  var envelope = 0.0;
  var cavity = 1.0;
  var dust = 0.0;
  if (DU.variant == 0u) {
    body =
      1.00*exp(-pow((xx+0.23)/0.64,2.0)-pow((yy-0.02)/0.52,2.0)-pow((zz+0.03)/0.58,2.0))
      +0.82*exp(-pow((xx-0.34)/0.52,2.0)-pow((yy+0.19)/0.41,2.0)-pow((zz-0.12)/0.50,2.0))
      +0.68*exp(-pow((xx+0.37)/0.45,2.0)-pow((yy-0.34)/0.35,2.0)-pow((zz-0.16)/0.43,2.0));
    envelope = nbSmoothstep(0.035, 0.45, body);
    let voidA = exp(-pow((xx+0.08)/0.29,2.0)-pow((yy-0.02)/0.23,2.0)-pow((zz+0.05)/0.27,2.0));
    let voidB = exp(-pow((xx-0.38)/0.22,2.0)-pow((yy+0.04)/0.18,2.0)-pow((zz-0.02)/0.24,2.0));
    cavity = 1.0 - 0.68*max(voidA, 0.65*voidB);
  } else if (DU.variant == 1u) {
    // Tilted 3D axis: the central lane cannot project to a straight stripe.
    let u = (0.68*xx + 0.68*yy + 0.27*zz)*1.15;
    let v = (-0.72*xx + 0.69*yy - 0.08*zz)*1.15;
    let w = (-0.24*xx - 0.14*yy + 0.96*zz)*1.15;
    body =
      0.96*exp(-pow((u-0.34)/0.49,2.0)-pow(v/0.48,2.0)-pow(w/0.53,2.0))
      +0.92*exp(-pow((u+0.36)/0.52,2.0)-pow((v+0.04)/0.46,2.0)-pow((w-0.04)/0.55,2.0))
      +0.32*exp(-pow(u/0.30,2.0)-pow(v/0.32,2.0)-pow(w/0.38,2.0));
    envelope = nbSmoothstep(0.04, 0.43, body);
    cavity = 1.0 - 0.34*exp(-pow(u/0.30,2.0)-pow(v/0.24,2.0)-pow(w/0.30,2.0));
    dust = exp(-pow((u+0.03+0.07*mid)/0.16,2.0)-pow(v/0.58,2.0)-pow((w-0.22)/0.27,2.0))
      *nbSmoothstep(-0.55, 0.72, low+0.35*fine);
  } else {
    // Swept fan of overlapping filled sheets — no radial field, no loop.
    let bend = yy + 0.24*xx*xx - 0.10*zz;
    body =
      0.86*exp(-pow((xx+0.20)/0.82,2.0)-pow((bend-0.22)/0.34,2.0)-pow((zz+0.06)/0.68,2.0))
      +0.68*exp(-pow((xx-0.23)/0.64,2.0)-pow((bend+0.18)/0.30,2.0)-pow((zz-0.12)/0.58,2.0))
      +0.46*exp(-pow((xx+0.50)/0.42,2.0)-pow((yy+0.18)/0.46,2.0)-pow((zz-0.23)/0.45,2.0));
    envelope = nbSmoothstep(0.035, 0.42, body);
  }
  // Transparent breathing room around the tangent patch, from UNWARPED
  // coordinates — a safety window, not the visible silhouette.
  envelope *= (1.0-nbSmoothstep(1.12, 1.30, abs(x)))*(1.0-nbSmoothstep(1.12, 1.30, abs(y)));

  let cloud = 0.72*low + 0.42*mid + 0.12*fine;
  let occupancy = nbSmoothstep(-0.06, 0.72, cloud);
  let billow = exp(clamp(0.38*low + 0.23*mid, -1.0, 1.15));
  var density = pow(max(envelope,0.0), 1.18)*cavity
    *(0.012 + 0.988*pow(occupancy, 1.45))*billow;
  density *= 0.50 + 0.50*nbSmoothstep(-0.38, 0.78, fine);

  textureStore(densityOut, gid, vec4f(density, dust, 0.0, 0.0));
  if (density > 0.01) {
    let bin = min(u32(density/HIST_MAX*f32(HIST_BINS)), HIST_BINS-1u);
    atomicAdd(&hist[bin], 1u);
  }
}
`,Av=`
@group(0) @binding(0) var<storage, read_write> hist: array<atomic<u32>>;
@group(0) @binding(1) var<storage, read_write> scaleOut: array<f32>;
${Ei}
@compute @workgroup_size(1)
fn main() {
  var total = 0u;
  for (var i = 0u; i < HIST_BINS; i++) { total += atomicLoad(&hist[i]); }
  var reference = 1.0;
  if (total > 0u) {
    let goal = u32(round(f32(total)*0.93));
    var cum = 0u;
    for (var i = 0u; i < HIST_BINS; i++) {
      cum += atomicLoad(&hist[i]);
      if (cum >= goal) {
        reference = (f32(i)+1.0)/f32(HIST_BINS)*HIST_MAX;
        break;
      }
    }
  }
  scaleOut[0] = 1.0/max(reference, 1e-5);
  // Reset for the next nebula's density pass.
  for (var i = 0u; i < HIST_BINS; i++) { atomicStore(&hist[i], 0u); }
}
`,Tv=`
struct LightUni {
  axis: u32, reverse: u32, pad0: u32, pad1: u32,
  opacity: f32, pad2: f32, pad3: f32, pad4: f32,
}
@group(0) @binding(0) var<uniform> LU: LightUni;
@group(0) @binding(1) var densityTex: texture_3d<f32>;
@group(0) @binding(2) var<storage, read> densScale: array<f32>;
@group(0) @binding(3) var lightOut: texture_storage_3d<r32float, write>;
${Ei}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= u32(VOL) || gid.y >= u32(VOL)) { return; }
  let step = 2.0*DOMAIN/f32(VOL);
  var depth = 0.0;
  for (var i = 0; i < VOL; i++) {
    let along = select(u32(i), u32(VOL-1-i), LU.reverse == 1u);
    var p = vec3u(0u);
    if (LU.axis == 0u) { p = vec3u(along, gid.x, gid.y); }
    else { p = vec3u(gid.x, along, gid.y); }
    textureStore(lightOut, p, vec4f(exp(-depth*step*LU.opacity), 0.0, 0.0, 0.0));
    let d = clamp(textureLoad(densityTex, p, 0).r*densScale[0], 0.0, 2.35);
    depth += d;
  }
}
`,Rv=`
struct IntegrateUni {
  lineColor: vec3f, exposure: f32,
  hotColor: vec3f, opacity: f32,
  dustColor: vec3f, variant: u32,
  invStdLow: f32, pad0: f32, pad1: f32, pad2: f32,
}
@group(0) @binding(0) var<uniform> IU: IntegrateUni;
@group(0) @binding(1) var densityTex: texture_3d<f32>;
@group(0) @binding(2) var volSamp: sampler;
@group(0) @binding(3) var fieldsTex: texture_3d<f32>;
@group(0) @binding(4) var lightATex: texture_3d<f32>;
@group(0) @binding(5) var lightBTex: texture_3d<f32>;
@group(0) @binding(6) var<storage, read> densScale: array<f32>;
@group(0) @binding(7) var patchOut: texture_storage_2d<rgba16float, write>;
${Ei}
fn densityAt(uvw: vec3f) -> f32 {
  let raw = textureSampleLevel(densityTex, volSamp, uvw, 0.0).r;
  return clamp(raw*densScale[0], 0.0, 2.35);
}
fn dustAt(uvw: vec3f) -> f32 {
  return textureSampleLevel(densityTex, volSamp, uvw, 0.0).g;
}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let patchN = textureDimensions(patchOut).x;
  if (gid.x >= patchN || gid.y >= patchN) { return; }
  // Patch pixel -> volume column. uvw addresses texel centers.
  let ux = (f32(gid.x)+0.5)/f32(patchN);
  let uy = (f32(gid.y)+0.5)/f32(patchN);
  let x = -DOMAIN + 2.0*DOMAIN*ux;
  let y = -DOMAIN + 2.0*DOMAIN*uy;
  let step = 2.0*DOMAIN/f32(VOL);
  let texel = 1.0/f32(VOL);

  var transmittance = 1.0;
  var radiance = vec3f(0.0);
  for (var zi = 0; zi < VOL; zi++) {
    let uvw = vec3f(ux, uy, (f32(zi)+0.5)*texel);
    let z = -DOMAIN + 2.0*DOMAIN*(f32(zi)+0.5)*texel;
    let d = densityAt(uvw);
    let dust = dustAt(uvw);
    // Warped ionization distance (the warp reuses the blurred low field).
    let low = textureSampleLevel(fieldsTex, volSamp, uvw, 0.0).r*IU.invStdLow;
    let lowRy = textureSampleLevel(fieldsTex, volSamp,
      uvw-vec3f(0.0, f32(VOL/3)*texel, 0.0), 0.0).r*IU.invStdLow;
    let lowRz = textureSampleLevel(fieldsTex, volSamp,
      uvw-vec3f(f32(VOL/4)*texel, 0.0, 0.0), 0.0).r*IU.invStdLow;
    let xx = x + 0.11*low;
    let yy = y + 0.085*lowRy;
    let zz = z + 0.075*lowRz;
    let sourceR = sqrt(pow(xx+0.12,2.0)+pow(yy-0.08,2.0)+pow(zz+0.06,2.0));
    let ion = exp(-pow(sourceR/0.78, 2.0));

    let coldClumps = nbSmoothstep(0.72, 1.55, d)*(1.0-ion);
    let extinction = d*(0.88+1.65*coldClumps) + dust*2.2;

    let ip = vec3u(u32(ux*f32(VOL)), u32(uy*f32(VOL)), u32(zi));
    let visA = textureLoad(lightATex, min(ip, vec3u(u32(VOL-1))), 0).r;
    let visB = textureLoad(lightBTex, min(ip, vec3u(u32(VOL-1))), 0).r;

    // Soft-density normal from a widened central difference (stands in
    // for the script's sigma-1.35 pre-blur before np.gradient).
    let e = 1.5*texel;
    let gx = densityAt(uvw+vec3f(e,0.0,0.0))-densityAt(uvw-vec3f(e,0.0,0.0));
    let gy = densityAt(uvw+vec3f(0.0,e,0.0))-densityAt(uvw-vec3f(0.0,e,0.0));
    let gz = densityAt(uvw+vec3f(0.0,0.0,e))-densityAt(uvw-vec3f(0.0,0.0,e));
    let glen = max(sqrt(gx*gx+gy*gy+gz*gz), 1e-4);
    let nx = -gx/glen; let ny = -gy/glen; let nz = -gz/glen;
    let facingA = clamp(nx*0.78 - ny*0.42 + nz*0.46, 0.0, 1.0);
    let facingB = clamp(-nx*0.36 + ny*0.72 - nz*0.60, 0.0, 1.0);

    let shapeA = 0.20 + 0.80*facingA;
    let shapeB = 0.24 + 0.76*facingB;
    let ambient = d*IU.dustColor*(0.010 + 0.018*ion);
    let scattered = d*(
      IU.lineColor*(0.018 + 1.08*pow(visA, 1.60)*shapeA)
      + IU.hotColor*(0.012 + 0.92*pow(visB, 1.75)*shapeB*(0.18+0.82*ion)));
    let recombination = pow(d, 1.42)*ion*ion
      *(IU.lineColor*0.62 + IU.hotColor*0.38)*0.38;

    radiance += transmittance*(ambient+scattered+recombination)*step;
    transmittance *= exp(-extinction*step*IU.opacity);
  }
  var alpha = 1.0 - transmittance;
  var tone = vec3f(1.0) - exp(-radiance*IU.exposure);
  // Exact suppression of negligible tails: no square patch boundary.
  let support = nbSmoothstep(0.002, 0.055, alpha);
  alpha *= support;
  tone *= support;
  textureStore(patchOut, gid.xy, vec4f(tone, alpha));
}
`,zv=`
struct PatchFrame {
  center: vec3f, tanExtent: f32,
  east: vec3f, pad0: f32,
  north: vec3f, pad1: f32,
}
struct ComposeUni {
  count: u32, pad0: u32, pad1: u32, pad2: u32,
  frames: array<PatchFrame, ${vr}>,
}
@group(0) @binding(0) var<uniform> CU: ComposeUni;
@group(0) @binding(1) var patches: texture_2d_array<f32>;
@group(0) @binding(2) var patchSamp: sampler;
@group(0) @binding(3) var atlasOut: texture_storage_2d<rgba8unorm, write>;
${Ei}
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(atlasOut);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  // Equirect direction, matching sky.ts: lon = pi - 2pi*(x+0.5)/W.
  let lon = 3.14159265359 - 6.28318530718*(f32(gid.x)+0.5)/f32(dims.x);
  let lat = 1.57079632679 - 3.14159265359*(f32(gid.y)+0.5)/f32(dims.y);
  let view = vec3f(cos(lat)*cos(lon), sin(lat), cos(lat)*sin(lon));
  var outRgb = vec3f(0.0);
  var outA = 0.0;
  for (var i = 0u; i < CU.count; i++) {
    let fr = CU.frames[i];
    let forward = dot(view, fr.center);
    if (forward <= 0.0) { continue; }
    let u = 0.5 + dot(view, fr.east)/forward/(2.0*fr.tanExtent);
    let v = 0.5 - dot(view, fr.north)/forward/(2.0*fr.tanExtent);
    if (u < 0.0 || u > 1.0 || v < 0.0 || v > 1.0) { continue; }
    let s = textureSampleLevel(patches, patchSamp, vec2f(u, v), i, 0.0);
    outRgb = s.rgb*s.a + outRgb*outA*(1.0-s.a);
    outA = s.a + outA*(1.0-s.a);
    outRgb /= max(outA, 1e-6);
  }
  textureStore(atlasOut, gid.xy,
    vec4f(pow(clamp(outRgb, vec3f(0.0), vec3f(1.0)), vec3f(1.0/2.2)), clamp(outA, 0.0, 1.0)));
}
`,Cv=`
struct TU { alpha: f32, clampK: f32 }
@group(0) @binding(0) var<uniform> T: TU;
@group(0) @binding(1) var curT: texture_2d<f32>;
@group(0) @binding(2) var histT: texture_2d<f32>;
@group(0) @binding(3) var outT: texture_storage_2d<rgba16float, write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(outT);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let px = vec2i(gid.xy);
  let curSample = textureLoad(curT,px,0);
  let cur = curSample.rgb;
  var o = cur;
  if (T.alpha < 0.999) {
    var hist = textureLoad(histT, px, 0).rgb;
    if (T.clampK > 0.5) {
      let sd = vec2i(dims)-vec2i(1);
      var mn = cur; var mx = cur;
      // cur already loaded the center. Spell out the remaining eight taps
      // in the original order: one fewer rgba16f read per shaded pixel and
      // no dynamic loop state, with identical min/max results.
      var c = textureLoad(curT,clamp(px+vec2i(-1,-1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(0,-1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(1,-1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(-1,0),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(1,0),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(-1,1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(0,1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      c = textureLoad(curT,clamp(px+vec2i(1,1),vec2i(0),sd),0).rgb;
      mn = min(mn,c); mx = max(mx,c);
      hist = clamp(hist, mn, mx);
    }
    o = mix(hist, cur, T.alpha);
  }
  // Compact stars are composed analytically after the adaptive upscale. Alpha
  // carries only current-frame sky visibility, never temporally blurred star
  // radiance, so moving silhouettes cannot leave a stale star-shaped ghost.
  textureStore(outT, gid.xy, vec4f(o, curSample.a));
}`,kv=`
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var dst: texture_storage_2d<rgba16float, write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(dst);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let uv = (vec2f(gid.xy)+vec2f(0.5))/vec2f(dims);
  textureStore(dst, gid.xy, textureSampleLevel(src, samp, uv, 0.0));
}`,_v=`
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var dst: texture_storage_2d<rgba16float, write>;
fn lum(c: vec3f) -> f32 { return dot(c,vec3f(0.299,0.587,0.114)); }
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(dst);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let uv = (vec2f(gid.xy)+vec2f(0.5))/vec2f(dims);
  let c = textureSampleLevel(src, samp, uv, 0.0).rgb;
  let l = lum(c);
  /* The transfer/shade pipeline is intentionally exposure-safe and its
     canonical disk peaks below linear 0.5. A legacy 0.6 threshold therefore
     produced an identically black bloom texture. This soft gate selects the
     upper highlight tail without turning the low-luminance nebula into fog.

     Native catalog stars are added later and never enter this pass. The
     support classifier still prevents compact disk sparks from becoming
     detached halation: a line or surface has support along at least one
     opposite sample pair, while an isolated point does not. The pass is
     quarter-linear-resolution, so the eight extra reads cost one half of a
     full-resolution bilinear read per frame. */
  let p = vec2f(6.0)/vec2f(textureDimensions(src));
  let support = max(max(
    0.5*(lum(textureSampleLevel(src,samp,uv+vec2f(p.x,0.0),0.0).rgb)
        +lum(textureSampleLevel(src,samp,uv-vec2f(p.x,0.0),0.0).rgb)),
    0.5*(lum(textureSampleLevel(src,samp,uv+vec2f(0.0,p.y),0.0).rgb)
        +lum(textureSampleLevel(src,samp,uv-vec2f(0.0,p.y),0.0).rgb))),
    max(
    0.5*(lum(textureSampleLevel(src,samp,uv+p,0.0).rgb)
        +lum(textureSampleLevel(src,samp,uv-p,0.0).rgb)),
    0.5*(lum(textureSampleLevel(src,samp,uv+vec2f(p.x,-p.y),0.0).rgb)
        +lum(textureSampleLevel(src,samp,uv+vec2f(-p.x,p.y),0.0).rgb))));
  let extended = smoothstep(0.12,0.38,support/max(l,0.001));
  textureStore(dst, gid.xy,
    vec4f(c*smoothstep(0.10,0.35,l)*extended, 1.0));
}`,Uv=`
@group(0) @binding(0) var src: texture_2d<f32>;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var dst: texture_storage_2d<rgba16float, write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(dst);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let uv = (vec2f(gid.xy)+vec2f(0.5))/vec2f(dims);
  let o = vec2f(0.5)/vec2f(textureDimensions(src));
  let c = textureSampleLevel(src,samp,uv+vec2f(-o.x,-o.y),0.0).rgb
          +textureSampleLevel(src,samp,uv+vec2f( o.x,-o.y),0.0).rgb
          +textureSampleLevel(src,samp,uv+vec2f(-o.x, o.y),0.0).rgb
          +textureSampleLevel(src,samp,uv+vec2f( o.x, o.y),0.0).rgb;
  textureStore(dst,vec2i(gid.xy),vec4f(c*0.25,1.0));
}`,Dv=`
@group(0) @binding(0) var low: texture_2d<f32>;
@group(0) @binding(1) var high: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;
@group(0) @binding(3) var dst: texture_storage_2d<rgba16float, write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(dst);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let uv = (vec2f(gid.xy)+vec2f(0.5))/vec2f(dims);
  let p = vec2f(1.0)/vec2f(textureDimensions(low));
  var broad = textureSampleLevel(low,samp,uv,0.0).rgb*0.40;
  broad += textureSampleLevel(low,samp,uv+vec2f( p.x,0.0),0.0).rgb*0.15;
  broad += textureSampleLevel(low,samp,uv+vec2f(-p.x,0.0),0.0).rgb*0.15;
  broad += textureSampleLevel(low,samp,uv+vec2f(0.0, p.y),0.0).rgb*0.15;
  broad += textureSampleLevel(low,samp,uv+vec2f(0.0,-p.y),0.0).rgb*0.15;
  let detail = textureSampleLevel(high,samp,uv,0.0).rgb;
  textureStore(dst,vec2i(gid.xy),vec4f(detail*0.12+broad*0.88,1.0));
}`,Ov=`
${yr}
struct CU {
  res: vec2f, bloom: f32, expo: f32,
  sharp: f32, starDens: f32, jitter: vec2f,
  starC0: vec4f,
  starC1: vec4f,
  starC2: vec4f,
}
@group(0) @binding(0) var sceneT: texture_2d<f32>;
@group(0) @binding(1) var bloomT: texture_2d<f32>;
@group(0) @binding(2) var rayT: texture_2d<u32>;
@group(0) @binding(3) var samp: sampler;
@group(0) @binding(4) var<uniform> C: CU;
fn h2(p: vec2f) -> f32 { return fract(sin(dot(p, vec2f(12.9898,78.233)))*43758.5453); }
fn h33s(p0: vec3f) -> vec3f {
  var p = fract(p0*vec3f(0.1031,0.1030,0.0973));
  p += dot(p,p.yxz+vec3f(33.33));
  return fract((p.xxy+p.yxx)*p.zyx);
}
fn bbs(T0: f32) -> vec3f {
  let T = clamp(T0,1200.0,22000.0); let t = T*0.01; var c: vec3f;
  c.r = select(clamp(1.29293618*pow(max(t-60.0,0.001),-0.13320476),0.0,1.0),1.0,t <= 66.0);
  c.g = select(clamp(1.12989086*pow(max(t-60.0,0.001),-0.07551485),0.0,1.0),
               clamp(0.39008158*log(t)-0.63184144,0.0,1.0),t <= 66.0);
  c.b = select(select(clamp(0.54320679*log(max(t-10.0,0.001))-1.19625408,0.0,1.0),0.0,t <= 19.0),
               1.0,t >= 66.0);
  return c*c;
}
fn octDir(e: vec2f) -> vec3f {
  var v = vec3f(e,1.0-abs(e.x)-abs(e.y));
  if (v.z < 0.0) {
    let s = vec2f(select(-1.0,1.0,v.x >= 0.0),select(-1.0,1.0,v.y >= 0.0));
    v = vec3f((vec2f(1.0)-abs(v.yx))*s,v.z);
  }
  return normalize(v);
}
/* One escape-direction node. region: 0 ours, 1 previous universe, 2
   antiverse for a valid escape, -1 when the ray ended without one. gate: 1
   where the march flagged the pixel as flipping region or validity under
   the trace jitter (bits 3-7), where a star would blink. */
struct RayNode { dir: vec3f, region: f32, gate: f32 }
fn rayNode(p: vec2i, dims: vec2i) -> RayNode {
  let r = textureLoad(rayT,clamp(p,vec2i(0),dims-vec2i(1)),0).xy;
  let region = select(-1.0,f32((r.y>>8u)&7u),(r.y&4u) != 0u);
  return RayNode(octDir(unpack2x16snorm(r.x)),region,f32((r.y>>3u)&31u)/31.0);
}
/* The ray cache is traced at the adaptive internal resolution. The march
   publishes pixel-centre directions (its own jitter removed, stale pixels
   rotated to the current pose), so this interpolates a regular grid —
   vectors, not packed octahedral codes. Where a node ended without an
   escape (region -1) or the four nodes ended in different sky regions (-2)
   no star is drawn: a nearest-node fallback there flips catalog with the
   jitter from frame to frame and the stars blink. */
struct RaySample { dir: vec3f, region: f32, gate: f32, dx: vec3f, dy: vec3f }
fn nativeRay(uv: vec2f) -> RaySample {
  let dims = vec2i(textureDimensions(rayT));
  let q = uv*vec2f(dims)-vec2f(0.5)-C.jitter;
  let p = vec2i(floor(q)); let f = fract(q);
  let r00 = rayNode(p,dims);
  let r10 = rayNode(p+vec2i(1,0),dims);
  let r01 = rayNode(p+vec2i(0,1),dims);
  let r11 = rayNode(p+vec2i(1,1),dims);
  if (min(min(r00.region,r10.region),min(r01.region,r11.region)) < 0.0) {
    return RaySample(r00.dir,-1.0,0.0,vec3f(0.0),vec3f(0.0));
  }
  if (r10.region != r00.region || r01.region != r00.region || r11.region != r00.region) {
    return RaySample(r00.dir,-2.0,0.0,vec3f(0.0),vec3f(0.0));
  }
  let raw = mix(mix(r00.dir,r10.dir,f.x),mix(r01.dir,r11.dir,f.x),f.y);
  let bilinear = normalize(raw);
  // For window regions (region 1 and up) with the integrated starlight on:
  // the interpolated direction's change per output pixel, the footprint
  // that light is filtered over.
  var dx = vec3f(0.0);
  var dy = vec3f(0.0);
  if (C.starC0.w>.5 && r00.region>.5) {
    let sx = mix(r10.dir-r00.dir,r11.dir-r01.dir,f.y);
    let sy = mix(r01.dir-r00.dir,r11.dir-r10.dir,f.x);
    let inverseLength = inverseSqrt(max(dot(raw,raw),1e-12));
    dx = (sx-bilinear*dot(bilinear,sx))*inverseLength*f32(dims.x)/C.res.x;
    dy = (sy-bilinear*dot(bilinear,sy))*inverseLength*f32(dims.y)/C.res.y;
  }
  let gate = mix(mix(r00.gate,r10.gate,f.x),mix(r01.gate,r11.gate,f.x),f.y);
  return RaySample(bilinear,r00.region,gate,dx,dy);
}
/* Integrate a filled circle over the output pixel with a stable 4x4 coverage
   grid. A single SDF sample is visibly faceted at the 2-8 px diameters used by
   stars, while HDR edge samples are re-saturated by the scene tone mapper.
   Returning actual area coverage lets the final display-space composite keep
   the edge round without introducing a soft halo. */
fn discCoverage(q: vec2f, radius: f32) -> f32 {
  if (max(abs(q.x),abs(q.y)) > radius+0.71) { return 0.0; }
  var covered = 0.0;
  for (var i = 0u; i < 16u; i++) {
    let samplePos = vec2f(
      (f32(i&3u)+0.5)*0.25-0.5,
      (f32(i>>2u)+0.5)*0.25-0.5,
    );
    covered += select(0.0,1.0,dot(q-samplePos,q-samplePos) <= radius*radius);
  }
  return covered*(1.0/16.0);
}
/* One seam-free 3-D shell supplies deterministic celestial centers. The
   local inverse escape-direction Jacobian converts each angular displacement
   back to output-pixel coordinates, so even strongly lensed stars are rastered
   as circular output-space discs. RGB is premultiplied display colour and A is
   coverage/brightness; the layer is deliberately composited after tone map. */
fn nativeStars(d: vec3f, dx: vec3f, dy: vec3f, region: u32) -> vec4f {
  let g00 = dot(dx,dx); let g01 = dot(dx,dy); let g11 = dot(dy,dy);
  let det = g00*g11-g01*g01;
  if (det < 1e-18 || C.starDens < 0.001) { return vec4f(0.0); }
  let lattice = 64.0;
  let p = d*lattice;
  let base = floor(p-vec3f(0.5));
  let galacticBand = exp(-d.y*d.y*150.0);
  let selection = clamp(C.starDens,0.0,2.0)*(0.055+0.055*galacticBand);
  // Each sky region draws its own catalog: offset the lattice hash so the
  // previous universe and the antiverse are not our stars rotated.
  let regionSalt = vec3f(f32(region))*vec3f(37.0,11.0,23.0);
  let grade = regionGrade(region);
  var acc = vec4f(0.0);
  for (var i = 0u; i < 8u; i++) {
    let o = vec3f(f32(i&1u),f32((i>>1u)&1u),f32((i>>2u)&1u));
    let cell = base+o;
    let h = h33s(cell+regionSalt);
    let selected = fract(h.x*7.13+h.y*13.71+h.z*19.37);
    if (selected > selection) { continue; }
    let center = normalize(cell+vec3f(0.5)+(h.yzx-vec3f(0.5))*0.80);
    let delta = center-d*dot(center,d);
    let b0 = dot(delta,dx); let b1 = dot(delta,dy);
    let screenOffset = vec2f(
      (b0*g11-b1*g01)/det,
      (b1*g00-b0*g01)/det,
    );
    let magSeed = fract(h.x*17.17+h.y*5.23+h.z*11.91);
    let mag = pow(magSeed,6.0);
    let giant = mag*mag*mag*mag;
    // Most stars stay near the floor; the very sparse seed^24 tail reaches a
    // large enough diameter to read as genuinely round on a raster display.
    // The 1.2 px floor is deliberate: a 0.9 px floor left the field looking
    // like scattered single-pixel noise at desktop DPI.
    let radiusPx = 1.20+0.90*mag+3.70*giant;
    let coverage = discCoverage(screenOffset,radiusPx);
    if (coverage <= 0.0) { continue; }
    let temperatureSeed = fract(h.x*3.17+h.y*9.73+h.z*15.31);
    let color = pow(
      clamp(bbs(mix(3000.0,12000.0,temperatureSeed*temperatureSeed))*grade,vec3f(0.0),vec3f(1.0)),
      vec3f(1.0/2.2),
    );
    let opacity = coverage*(0.42+0.58*pow(mag,0.35));
    let remaining = 1.0-acc.a;
    acc += vec4f(color,1.0)*(remaining*opacity);
  }
  return acc;
}
${Pm}
@vertex fn vs(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {
  let p = vec2f(f32((vi<<1u)&2u), f32(vi&2u));
  return vec4f(p*2.0-1.0, 0.0, 1.0);
}
@fragment fn fs(@builtin(position) pos: vec4f) -> @location(0) vec4f {
  let uv = pos.xy/C.res;
  let scene = textureSample(sceneT,samp,uv);
  var c = scene.rgb;
  var starLayer = vec4f(0.0);
  var stellarLight = vec3f(0.0);
  var starVisibility = 0.0;
  if (C.sharp > 0.001) { // HDR unsharp — recovers crispness lost to internal downscale
    let px = vec2f(1.0)/vec2f(textureDimensions(sceneT));
    let nb = textureSample(sceneT, samp, uv+vec2f(0.0,px.y)).rgb
           + textureSample(sceneT, samp, uv-vec2f(0.0,px.y)).rgb
           + textureSample(sceneT, samp, uv+vec2f(px.x,0.0)).rgb
           + textureSample(sceneT, samp, uv-vec2f(px.x,0.0)).rgb;
    c = max(c + C.sharp*(c - nb*0.25), vec3f(0.0));
  }
  if (textureDimensions(rayT).x > 1u) {
    let ray = nativeRay(uv);
    let region = u32(max(ray.region,0.0));
    // The sky region's fixed rotation is applied before the Galactic tilt,
    // exactly as the inline march does for the diffuse cubemap.
    let cachedDir = regionDir(ray.dir,region);
    let d = normalize(
      C.starC0.xyz*cachedDir.x
      +C.starC1.xyz*cachedDir.y
      +C.starC2.xyz*cachedDir.z);
    // Derivatives are taken after the complete cached-yaw/Galactic transform,
    // in native output pixels rather than adaptive internal pixels.
    let dx = dpdx(d); let dy = dpdy(d);
    // starC0.w: integrated starlight on; starC1.w its strength, starC2.w
    // its filter width. The analytic footprint goes through the same
    // region and Galactic rotations as d.
    let keepWindow = C.starC0.w > 0.5 && region > 0u;
    var filterDx = dx;
    var filterDy = dy;
    if (keepWindow) {
      let x = regionDir(ray.dx,region);
      let y = regionDir(ray.dy,region);
      filterDx = C.starC0.xyz*x.x+C.starC1.xyz*x.y+C.starC2.xyz*x.z;
      filterDy = C.starC0.xyz*y.x+C.starC1.xyz*y.y+C.starC2.xyz*y.z;
    }
    // Keep the original point-star appearance and its original transition.
    // The analytic derivatives belong only to the unresolved-light filter;
    // using them for the resolved-star fade would alter visible stars too.
    let footprint = sqrt(max(dot(dx,dx),dot(dy,dy)));
    let resolved = 1.0-smoothstep(0.5/64.0,1.25/64.0,footprint);
    let gate = 1.0-smoothstep(0.25,0.75,ray.gate);
    if (scene.a>0.001 && gate>0.001 && ray.region>=0.0) {
      if (resolved>0.001) {
        starLayer = nativeStars(d,dx,dy,region);
        starVisibility = scene.a*resolved*gate;
      }
      if (keepWindow && resolved<1.0) {
        // Fill only the light lost as the original point lookup becomes
        // unresolved. Fully resolved stars keep their sizes, colours and
        // display-space brightness exactly; no whole-window recalibration.
        stellarLight = integratedStars(d,filterDx,filterDy,region)*scene.a*gate*(1.0-resolved);
      }
    }
  }
  c += stellarLight;
  c += C.bloom*textureSample(bloomT, samp, uv).rgb;
  c *= C.expo;
  c = clamp((c*(2.51*c+vec3f(0.03)))/(c*(2.43*c+vec3f(0.59))+vec3f(0.14)), vec3f(0.0), vec3f(1.0));
  c = pow(c, vec3f(1.0/2.2));
  let starAlpha = clamp(starLayer.a*starVisibility,0.0,1.0);
  c = c*(1.0-starAlpha)+starLayer.rgb*starVisibility;
  c += vec3f((h2(pos.xy)-0.5)/255.0);
  return vec4f(c, 1.0);
}`,Bv=`
${Ou}
${es}
/* r0..r2: rows of the rotation taking last frame's world directions to this
   frame's; r0.w: this frame's 16-bit stamp; r1.w: 1 when a rotation is
   needed at all (0 for a parked camera); r2.w: 1 on a frame that marched
   every pixel without jitter (TAA off, or a full-refresh zoom). */
struct AdvanceUni { r0: vec4f, r1: vec4f, r2: vec4f }
@group(0) @binding(0) var<uniform> A: AdvanceUni;
@group(0) @binding(1) var rayMarch: texture_2d<u32>;
@group(0) @binding(2) var rayPrev: texture_2d<u32>;
@group(0) @binding(3) var rayOut: texture_storage_2d<rg32uint, write>;
@compute @workgroup_size(8,8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let dims = textureDimensions(rayOut);
  if (gid.x >= dims.x || gid.y >= dims.y) { return; }
  let p = vec2i(gid.xy);
  let m = textureLoad(rayMarch,p,0).xy;
  let stamp = u32(A.r0.w)&0xFFFFu;
  if ((m.y>>16u) == stamp) {
    // Centered full refresh has no jitter-induced fate instability. A region
    // newly moving into this pixel must not inherit a previous-pose gate.
    let bits = select(m.y,m.y&~(31u<<3u),A.r2.w>0.5);
    textureStore(rayOut,gid.xy,vec4u(m.x,bits,0u,0u));
    return;
  }
  var q = textureLoad(rayPrev,p,0).xy;
  // The star gate (bits 3-7) describes the frame that traced the pixel; a
  // stale pixel cannot be flipping, so the gate must not ride along in the
  // copy until the pixel is next marched.
  q.y = q.y&~(31u<<3u);
  if (A.r1.w > 0.5 && (q.y&4u) != 0u) {
    let d = octDecode(unpack2x16snorm(q.x));
    let dr = normalize(vec3f(dot(A.r0.xyz,d),dot(A.r1.xyz,d),dot(A.r2.xyz,d)));
    q.x = packOct16Precise(octEncode(dr));
  }
  textureStore(rayOut,gid.xy,vec4u(q,0u,0u));
}`,c1=u=>Math.floor(Math.log2(Math.max(1,u)))+1,Gu=(...u)=>new Float32Array(u),Lv=(u,n)=>{const o=new Float32Array(9);for(let l=0;l<3;l++)for(let c=0;c<3;c++)o[l*3+c]=u[c]*n[l*3]+u[3+c]*n[l*3+1]+u[6+c]*n[l*3+2];return o},Nv=(u,n)=>{const o=Math.cos(u),l=Math.sin(u),c=Math.cos(n),f=Math.sin(n);return Gu(o,0,-l,-l*f,c,-o*f,l*c,f,o*c)},f1=u=>{const n=Math.hypot(u[0],u[1],u[2])||1;return[u[0]/n,u[1]/n,u[2]/n]},d1=(u,n)=>[u[1]*n[2]-u[2]*n[1],u[2]*n[0]-u[0]*n[2],u[0]*n[1]-u[1]*n[0]],h1=(u,n)=>{const o=Math.cos(u),l=Math.sin(u),c=Math.cos(n),f=Math.sin(n);return Gu(c,0,-f,f*l,o,c*l,f*o,-l,c*o)},p1=(u,n)=>{let o=1,l=0;for(;u>0;)o/=n,l+=o*(u%n),u=Math.floor(u/n);return l},Gv=150,Il=1200,Hv=8,Pv=Hv*65536,qv=u=>Math.min(.24,u.diskH*u.diskFlare*u.smokeThickness),m1=(u,n)=>{const o=[Math.max(8,u>>2),Math.max(8,n>>2)],l=[Math.max(1,o[0]>>1),Math.max(1,o[1]>>1)],c=[Math.max(1,l[0]>>1),Math.max(1,l[1]>>1)],f=[Math.max(1,c[0]>>1),Math.max(1,c[1]>>1)];return[o,l,c,f]},Eu=u=>u instanceof Error?`${u.name}: ${u.message}`:String(u),Vv=()=>{const u=location.origin;return window.isSecureContext?["WebGPU was not exposed by this browser or operating system.",`Current origin: ${u} (secure context)`,"","Check the browser’s WebGPU setting and reload. On Safari, also verify that the OS supports WebGPU and that Lockdown Mode or device policy is not disabling it."].join(`
`):["WebGPU is blocked because this page is not a secure context.",`Current origin: ${u}`,"","Binding Vite to 0.0.0.0 makes the page reachable, but plain HTTP on a LAN address is not WebGPU-eligible. For a phone or another computer, serve Astra through trusted HTTPS or an HTTPS tunnel. localhost/127.0.0.1 works only on the machine running the server."].join(`
`)},g1=u=>{const n=Math.tan(u.fov*Math.PI/360),o=u.spin,l=u.charge,c=Vg(o,l),f=Math.max(u.diskOut,c+2.5),h=g=>Pg(g,o,l);return{tanHalfFov:n,diskInner:c,diskOuter:f,spin:o,charge:l,rPlus:$l(o,l),rMinus:X1(o,l),pivotOmega:h(Math.sqrt(Math.max(c*f,1)))}},v1=u=>{const n=Math.cos(u.pitch),o=Math.sin(u.pitch),l=[u.dist*n*Math.cos(u.yaw),u.dist*n*Math.sin(u.yaw),u.dist*o];Math.abs(l[2])<.02&&(l[2]=.02);const c=f1([-l[0],-l[1],-l[2]]),f=f1(d1(c,[0,0,1])),h=d1(f,c),g=Gu(f[0],f[1],f[2],h[0],h[1],h[2],c[0],c[1],c[2]);return{pos:l,basis:Lv(g,Nv(u.lookYaw,u.lookPitch))}},jv=1e-6,Zv=400,y1=(u,n,o,l,c,f,h,g,y,v,b=0,x=new Float32Array(48))=>{const{pos:w,basis:T}=l,O=th(w,u.spin,{right:[T[0],T[1],T[2]],up:[T[3],T[4],T[5]],forward:[T[6],T[7],T[8]]},u.charge).covariant;return x.set([w[0],w[1],w[2],u.tanHalfFov,...O.observer,...O.right,...O.up,...O.forward,u.spin,u.diskInner,u.diskOuter,Math.max(32,o.dist+10),g,y,c,f,h,v[0],v[1],jg(u.spin,u.charge),u.charge*u.charge,n.extension?1:0,n.topoHorizon,n.topoErgo,n.topoGrid,n.topoEdge,n.ringGlow,n.ringWidth,n.ctcTint,jv,Zv,b,n.smokeOpacity],0),x},Fv=(u,n)=>{const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],l=u.spin*u.spin,c=o-l,f=Math.max(1e-8,.5*(c+Math.sqrt(c*c+4*l*n[2]*n[2]))),g=(2*Math.sqrt(f)-u.charge*u.charge)*f/Math.max(1e-8,f*f+l*n[2]*n[2]);return Math.sqrt(Math.max(1-g,1e-4))};let Mu=null;const Yv=()=>{if(Mu)return Mu;const u=b=>(b^=b>>>16,b=Math.imul(b,2146121005),b^=b>>>15,b=Math.imul(b,2221713035),(b^b>>>16)>>>0),n=(b,x,w,T,k)=>(b=(b%T+T)%T,x=(x%T+T)%T,w=(w%T+T)%T,u(Math.imul(b+17,73856093)^Math.imul(x+31,19349663)^Math.imul(w+47,83492791)^k)/4294967295),o=(b,x,w,T,k)=>{const O=64/T;if(T===1)return n(b,x,w,O,k);const R=b/T,N=x/T,j=w/T,Z=Math.floor(R),P=Math.floor(N),Y=Math.floor(j),C=R-Z,I=N-P,K=j-Y,X=C*C*(3-2*C),ae=I*I*(3-2*I),le=K*K*(3-2*K),Se=(ze,B,F)=>ze+(B-ze)*F,ce=Se(Se(n(Z,P,Y,O,k),n(Z+1,P,Y,O,k),X),Se(n(Z,P+1,Y,O,k),n(Z+1,P+1,Y,O,k),X),ae),ke=Se(Se(n(Z,P,Y+1,O,k),n(Z+1,P,Y+1,O,k),X),Se(n(Z,P+1,Y+1,O,k),n(Z+1,P+1,Y+1,O,k),X),ae);return Math.min(1,Math.max(0,.5+(Se(ce,ke,le)-.5)*1.35))};let l=64,c=new Uint8Array(l*l*l*4);const f=[[[8,.48],[4,.34],[2,.18]],[[4,.46],[2,.36],[1,.18]],[[4,.24],[2,.42],[1,.34]],[[2,.38],[1,.62]]],h=[608135816,2242054355,320440878,57701188],g=[2654435769,2135587861,2496678331],y=(b,x,w,T,k)=>{let O=0;for(let R=0;R<T.length;R++){const[N,j]=T[R];O+=j*o(b,x,w,N,(k^g[R])>>>0)}return Math.min(1,Math.max(0,.5+(O-.5)*1.4))};for(let b=0;b<l;b++)for(let x=0;x<l;x++)for(let w=0;w<l;w++){const T=((b*l+x)*l+w)*4;for(let k=0;k<4;k++)c[T+k]=Math.round(y(w,x,b,f[k],h[k])*255)}const v=[{size:l,data:c}];for(;l>1;){const b=c,x=l;l>>=1,c=new Uint8Array(l*l*l*4);for(let w=0;w<l;w++)for(let T=0;T<l;T++)for(let k=0;k<l;k++){const O=((w*l+T)*l+k)*4;for(let R=0;R<4;R++){let N=0;for(let j=0;j<2;j++)for(let Z=0;Z<2;Z++)for(let P=0;P<2;P++)N+=b[(((w*2+j)*x+T*2+Z)*x+k*2+P)*4+R];c[O+R]=Math.round(N/8)}}v.push({size:l,data:c})}return Mu=v,v};class Iv{camera=new wg;onStats=null;onError=null;onReady=null;onProgress=null;canvas;params;device=null;gpuProfiler=null;repairQueue=null;temporalMaterial=null;historyCamera=null;stableStarField=null;starCatalog=null;zoomStarReferencePose=null;debrisDepthLayers=null;repairGroup=null;repairBoundQueue=null;inlineEntries=[];validationAllowApproximate=!1;validationErrors=[];validationHideDebris=!1;validationOrderedRocks=!1;validationFrameListener=null;validationFrameReject=null;validationMode="off";validationDelta=0;validationPoseSequence=null;ctx=null;fmt;disposed=!1;ready=!1;raf=0;startGen=0;pSky=null;pSkyMip=null;pMarchBase=null;lazyPipelines=new Map;pendingPipelines=new Set;failedPipelines=new Set;activeMarchKey="base";pTaa=null;pBright=null;pHalationDown=null;pHalationUp=null;pResample=null;rockLayersAtOnce=!1;pDebris=null;pDebrisMicro=null;pComposite=null;inlineBGL;skyBGL;skyMipBGL;taaBGL;filtBGL;halationUpBGL;debrisBGL;compBGL;samp;diskNoiseSamp;astronomicalSkySamp;inlineGeoU;inlineU;skyU;skyCentersU;taaU;compU;debrisU;skyTex;skyCubeView;astronomicalSkyTex;astronomicalSkyView;pNebNoise=null;pNebBlur=null;pNebDensity=null;pNebPercentile=null;pNebLight=null;pNebIntegrate=null;pNebCompose=null;nebNoiseBGL;nebBlurBGL;nebDensityBGL;nebPercentileBGL;nebLightBGL;nebIntegrateBGL;nebComposeBGL;nebulaPipesReady=[];nebulaBakeChain=Promise.resolve();skyN=Wl;diskNoiseTex;bakeNoiseTex=[];bakeNoiseViews=[];bakeNoiseMoments=[];diskNoiseView;crustMomentsTex;simTargets=null;curView;debrisDepthView;skyBG;skyMipBGs=[];inlineBG;rayAdvanceBGL;rayAdvanceBG;pRayAdvance=null;rayAdvanceU;prevBasis=null;frameStamp=0;debrisCullBGL;debrisCullBG;debrisCullFinalizeBGL;debrisCullFinalizeBG;pDebrisCull=null;pDebrisExpandMicro=null;pDebrisExpandLarge=null;debrisExpandLargeBG;debrisExpandBGL;debrisExpandBG;pDebrisCullFinalize=null;microRecordsBuf=null;microCountBuf=null;largeRecordsBuf=null;largeCountBuf=null;clusterInfoBuf=null;debrisPopulationCapacity=1;debrisArgsLarge=null;debrisArgsMicro=null;taaBG=[];brightBG=[];halationDownBGs=[];halationUpBGs=[];compBG=[];simW=8;simH=8;resScale=.62;autoScale=.62;qualityGovernor=new Hg(this.autoScale);warmupUntil=0;rawLastT=0;lastQualitySubmitted=!1;tDisk=0;debrisPhase=0;prevPos=[0,0,0];prevFw=[0,0,1];prevRt=[1,0,0];lastT=0;nextT;accumN=0;readIdx=0;jitterSeq=0;histValid=!1;accumCarried=!1;skyDirty=!0;skyPendingAt=-1;geoDirty=!0;shadeDirty=!0;presentDirty=!0;bloomStale=!0;lastPoseKey="";prev;stage=new Float32Array(64);pipelineTotal=0;pipelineDone=0;firstFramePresented=!1;captureActive=!1;captureStepDt=null;capturePriorScale=1;captureTick=null;captureTargetW=0;captureTargetH=0;captureBlitCanvas=null;captureBlitResolve=null;captureBlitReject=null;frames=0;statT0=0;framesInFlight=0;completedFrames=0;completionDts=[];lastCompletionT=0;perfCompletions=[];perfSkips=[];constructor(n,o){this.canvas=n,this.params={...o},this.prev={...o},this.skyN=Wl,this.camera.fov=o.fov,this.resScale=o.quality>0?Math.min(100,o.quality)/100:this.autoScale}async start(){const n=++this.startGen;if(cancelAnimationFrame(this.raf),this.ready=!1,this.firstFramePresented=!1,this.pipelineTotal=0,this.pipelineDone=0,this.framesInFlight=0,this.completedFrames=0,this.completionDts.length=0,this.lastCompletionT=0,this.perfCompletions.length=0,this.perfSkips.length=0,this.onProgress?.(.02),this.destroySimTargets(),this.pSky=this.pSkyMip=this.pMarchBase=null,this.lazyPipelines.clear(),this.pendingPipelines.clear(),this.failedPipelines.clear(),this.pTaa=this.pBright=this.pHalationDown=this.pHalationUp=null,this.pResample=null,this.pDebris=this.pDebrisMicro=this.pComposite=null,!navigator.gpu){this.onError?.(Vv());return}let o=null,l="";try{o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"})}catch(w){l=Eu(w)}if(this.disposed||n!==this.startGen)return;if(!o){this.onError?.("WebGPU adapter unavailable — the browser reports no compatible GPU."+(l?`

Adapter request failed: ${l}`:""));return}const c=[];o.features.has("timestamp-query")&&c.push("timestamp-query");const f=Math.min(8,o.limits.maxStorageTexturesPerShaderStage),h=f>4?{maxStorageTexturesPerShaderStage:f}:{};h.maxSampledTexturesPerShaderStage=Math.min(24,o.limits.maxSampledTexturesPerShaderStage),h.maxStorageBufferBindingSize=Math.min(512*1024*1024,o.limits.maxStorageBufferBindingSize),h.maxBufferSize=o.limits.maxBufferSize;const g=o.limits.maxColorAttachmentBytesPerSample>=48&&o.limits.maxColorAttachments>=6;g&&(h.maxColorAttachmentBytesPerSample=48);let y;try{y=await o.requestDevice({requiredFeatures:c,requiredLimits:h})}catch(w){!this.disposed&&n===this.startGen&&this.onError?.(`WebGPU device creation failed.

${Eu(w)}`);return}if(this.disposed||n!==this.startGen){y.destroy();return}this.onProgress?.(.12),this.device=y,this.rockLayersAtOnce=g,this.repairQueue=new Wm(y),this.debrisDepthLayers=new Um(y),this.stableStarField=new Lm(y),this.starCatalog=new qm(y),this.temporalMaterial=new Ym(y,w=>{n!==this.startGen||this.disposed||(this.validationErrors.push(String(w)),this.onError?.(`World reprojection shader failed: ${w}`))}),this.gpuProfiler=y.features.has("timestamp-query")?new Jm(y):null,y.addEventListener("uncapturederror",w=>{const T=w.error.message;this.validationErrors.includes(T)||(this.validationErrors.push(T),this.validationErrors.length>100&&this.validationErrors.shift(),console.error("WebGPU validation:",T))}),this.skyN=Wl,y.lost.then(w=>{this.device===y&&(this.ready=!1,!this.disposed&&w.reason!=="destroyed"&&(this.device=null,this.start()))});const v=this.canvas.getContext("webgpu");if(!v){y.destroy(),this.device=null,this.onError?.("WebGPU canvas initialization failed — this browser exposed WebGPU but did not provide a canvas context.");return}this.ctx=v;try{this.fmt=navigator.gpu.getPreferredCanvasFormat(),v.configure({device:y,format:this.fmt,alphaMode:"opaque"}),this.createLayoutsAndPipelines(y,n),this.createStaticResources(y),this.onProgress?.(.2+.7*(this.pipelineDone/Math.max(1,this.pipelineTotal))),await(this.nebulaBakeChain=this.bakeNebulaAtlas(y,n)),this.resize()}catch(w){y.destroy(),this.device=null,this.onError?.(`WebGPU renderer initialization failed.

${Eu(w)}`);return}this.skyDirty=this.geoDirty=this.shadeDirty=this.presentDirty=!0;const b=performance.now();this.warmupUntil=b+650,this.resetQualityEvidence(b),this.ready=!0,this.onReady?.();const x=w=>{this.disposed||this.startGen!==n||(this.raf=requestAnimationFrame(x),this.frame(w))};this.raf=requestAnimationFrame(x)}dispose(){this.validationFrameReject?.(new Error("Renderer disposed.")),this.validationFrameListener=null,this.validationFrameReject=null,this.disposed=!0,this.startGen++,cancelAnimationFrame(this.raf),this.camera.detach(),this.gpuProfiler?.dispose(),this.repairQueue?.dispose(),this.temporalMaterial?.dispose(),this.stableStarField?.dispose(),this.stableStarField=null,this.starCatalog?.dispose(),this.starCatalog=null,this.debrisDepthLayers?.dispose();try{this.device?.destroy()}catch{}}get capturing(){return this.captureActive}planCaptureTarget(n,o,l=!1){const c=this.device?.limits.maxTextureDimension2D??8192,h=Math.min(1,c/n,c/o,Math.sqrt(33554432/(n*o)));let g=Math.max(2,Math.round(n*h)),y=Math.max(2,Math.round(o*h));return l&&(g&=-2,y&=-2),{w:g,h:y}}async captureStill(n,o,l){const c=Math.min(Zl,Math.max(2,Math.round(n.samples??Zl)));this.captureBegin(!1,n.targetW??0,n.targetH??0);try{return await this.waitCapture(()=>(o?.(Math.min(this.accumN,c),c),this.accumN>=c),l),await this.snapshotPng(l)}finally{this.captureEnd()}}async captureVideo(n,o,l){const c=Math.min(60,Math.max(10,Math.round(n.fps??30))),f=Math.min(30,Math.max(1,n.seconds??5)),h=Math.min(Zl,Math.max(2,Math.round(n.samples??8))),g=Math.round(f*c);if(typeof VideoEncoder>"u")throw new Error("Recording needs WebCodecs video encoding, which this browser does not expose.");const{Output:y,Mp4OutputFormat:v,WebMOutputFormat:b,BufferTarget:x,CanvasSource:w,getFirstEncodableVideoCodec:T}=await Yd(async()=>{const{Output:O,Mp4OutputFormat:R,WebMOutputFormat:N,BufferTarget:j,CanvasSource:Z,getFirstEncodableVideoCodec:P}=await import("./index-CBVJQUGz.js");return{Output:O,Mp4OutputFormat:R,WebMOutputFormat:N,BufferTarget:j,CanvasSource:Z,getFirstEncodableVideoCodec:P}},[],import.meta.url);this.captureBegin(!0,n.targetW??0,n.targetH??0);let k=null;try{const O=this.captureBlitCanvas;if(!O)throw new Error("Capture staging canvas was released.");const R=O.width,N=O.height,j=new v;let Z=j,P="mp4",Y=await T(j.getSupportedVideoCodecs(),{width:R,height:N});if(!Y){const ae=new b;Y=await T(ae.getSupportedVideoCodecs(),{width:R,height:N}),Z=ae,P="webm"}if(!Y)throw new Error(`No supported video codec at ${R}x${N} on this device.`);const C=new x;k=new y({format:Z,target:C});const I=Math.min(4e7,Math.max(4e6,Math.round(.12*R*N*c))),K=new w(O,{codec:Y,bitrate:I});k.addVideoTrack(K,{frameRate:c}),await k.start();for(let ae=0;ae<g;ae++)ae>0&&(this.captureStepDt=1/c),await this.waitCapture(()=>this.captureStepDt===null&&this.accumN>=h,l),await this.requestPresentedBlit(l),o?.(ae+1,g,"render"),await K.add(ae/c,1/c);o?.(g,g,"encode"),await k.finalize();const X=C.buffer;if(!X)throw new Error("The encoder produced no output.");return{blob:new Blob([X],{type:P==="mp4"?"video/mp4":"video/webm"}),extension:P}}catch(O){try{await k?.cancel()}catch{}throw O}finally{this.captureEnd()}}captureBegin(n=!1,o=0,l=0){if(this.captureActive)throw new Error("A capture is already in progress.");if(!this.ready||!this.device)throw new Error("The renderer is not ready to capture.");if(this.captureActive=!0,this.captureStepDt=null,o>0&&l>0){const f=this.planCaptureTarget(o,l,n);this.captureTargetW=f.w,this.captureTargetH=f.h}else this.captureTargetW=0,this.captureTargetH=0;this.capturePriorScale=this.resScale,this.resScale=1,this.resizeCanvas(),this.resizeSim();const c=document.createElement("canvas");if(c.width=Math.max(2,n?this.canvas.width&-2:this.canvas.width),c.height=Math.max(2,n?this.canvas.height&-2:this.canvas.height),!c.getContext("2d"))throw new Error("2D staging canvas unavailable for capture.");this.captureBlitCanvas=c,this.histValid=!1,this.accumN=0,this.jitterSeq=0,this.geoDirty=this.shadeDirty=this.presentDirty=!0}captureEnd(){this.captureActive&&(this.captureActive=!1,this.captureStepDt=null,this.captureTick=null,this.captureBlitReject?.(new Error("Capture ended before the frame was read.")),this.captureBlitResolve=null,this.captureBlitReject=null,this.captureBlitCanvas=null,this.resScale=this.capturePriorScale,this.captureTargetW=0,this.captureTargetH=0,!this.disposed&&this.ready&&this.device&&(this.resize(),this.resetQualityEvidence()),this.histValid=!1,this.accumN=0,this.geoDirty=this.shadeDirty=this.presentDirty=!0)}waitCapture(n,o){return new Promise((l,c)=>{const f=this.startGen,h=()=>{if(o?.aborted){this.captureTick=null,c(new DOMException("Capture canceled.","AbortError"));return}if(this.disposed||this.startGen!==f){this.captureTick=null,c(new Error("The renderer restarted during capture."));return}n()&&(this.captureTick=null,l())};this.captureTick=h,h()})}requestPresentedBlit(n){return new Promise((o,l)=>{if(n?.aborted){l(new DOMException("Capture canceled.","AbortError"));return}this.presentDirty=!0,this.captureBlitResolve=o,this.captureBlitReject=l})}async snapshotPng(n){await this.requestPresentedBlit(n);const o=this.captureBlitCanvas;if(!o)throw new Error("Capture staging canvas was released.");return await new Promise((l,c)=>o.toBlob(f=>f?l(f):c(new Error("PNG encoding failed.")),"image/png"))}validationReport(){return{source:"98e7b9e9c43a82c898de956ff8e13f7bbc5085f8",ready:this.firstFramePresented&&!this.disposed,validationMode:this.validationMode,width:this.simW,height:this.simH,dpr:devicePixelRatio,camera:this.camera.getState(),time:this.tDisk,frame:this.frames,frameStamp:this.frameStamp,accumulation:this.accumN,pending:this.pendingPipelines.size>0,activePipeline:this.activeMarchKey,capabilities:this.device?Array.from(this.device.features):[],stableStars:this.stableStarField?.report(),starCatalog:this.starCatalog?.report(),approximateValidation:this.validationAllowApproximate,gpu:this.gpuProfiler?.report(),errors:[...this.validationErrors]}}validationBurstFrames(n=24){if(this.validationFrameListener||this.captureActive)return Promise.reject(new Error("Capture already active."));const o=Math.max(2,Math.min(48,Math.round(n)));return new Promise((l,c)=>{const f=[];this.validationFrameReject=c,this.validationFrameListener=()=>{const h=document.createElement("canvas");h.width=this.canvas.width,h.height=this.canvas.height,h.getContext("2d").drawImage(this.canvas,0,0),f.push({frame:this.frames,time:this.tDisk,pose:this.camera.getState(),canvas:h}),f.length===o&&(this.validationFrameListener=null,this.validationFrameReject=null,l(f.map(g=>({frame:g.frame,time:g.time,pose:g.pose,png:g.canvas.toDataURL("image/png")}))))},this.presentDirty=!0})}validationSequence(n,o=1/60){if(n.length<2||n.length>48)throw new Error("Sequence length must be 2..48");return this.validationMode="parked",this.validationDelta=o,this.validationPoseSequence=n.map(l=>({...l})),this.validationBurstFrames(n.length).finally(()=>{this.validationDelta=0,this.validationPoseSequence=null,this.validationMode="off"})}validationBenchmark(n,o=1/60){if(n.length<2||n.length>240||this.validationFrameListener||this.captureActive)throw new Error("Invalid or overlapping benchmark");this.validationMode="parked",this.validationDelta=o,this.validationPoseSequence=n.map(c=>({...c}));let l=n.length;return new Promise((c,f)=>{this.validationFrameReject=f,this.validationFrameListener=()=>{--l>0||(this.validationFrameListener=null,this.validationFrameReject=null,this.validationDelta=0,this.validationPoseSequence=null,this.validationMode="off",c(this.validationReport()))},this.presentDirty=!0})}async validationRays(n=!1,o=!1){const l=this.device,c=o?this.simTargets?.gRay:this.simTargets?.gRayFinal;if(!l||!c)throw new Error("Renderer not ready.");const f=this.frameStamp,h=Math.ceil(c.width*8/256)*256,g=l.createBuffer({size:h*c.height,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),y=l.createCommandEncoder();y.copyTextureToBuffer({texture:c},{buffer:g,bytesPerRow:h,rowsPerImage:c.height},[c.width,c.height]),l.queue.submit([y.finish()]),await g.mapAsync(GPUMapMode.READ);const v=new Uint32Array(g.getMappedRange());let b=0,x=0,w=0,T=0;const k=new Array(8).fill(0);for(let R=0;R<c.height;R++)for(let N=0;N<c.width;N++){const j=v[R*(h/4)+N*2+1];j&4&&b++,j>>>16===f&&T++,j>>>16||x++,j>>>3&31&&w++,k[j>>>8&7]++}const O=n?v.slice():void 0;return g.unmap(),g.destroy(),{width:c.width,height:c.height,valid:b,never:x,gated:w,fresh:T,regions:k,words:O,rowStride:h/4}}async validationPoints(){const n=this.device,o=this.simTargets?.materialPoint;if(!n||!o)throw new Error("Renderer not ready");const l=Math.ceil(o.width*16/256)*256,c=n.createBuffer({size:l*o.height,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),f=n.createCommandEncoder();f.copyTextureToBuffer({texture:o},{buffer:c,bytesPerRow:l,rowsPerImage:o.height},[o.width,o.height]),n.queue.submit([f.finish()]),await c.mapAsync(GPUMapMode.READ);const h=new Float32Array(c.getMappedRange());let g=0,y=0,v=0,b=0,x=0;for(let w=0;w<o.height;w++)for(let T=0;T<o.width;T++){const k=w*l/4+T*4,O=h[k+3];Number.isFinite(h[k]+h[k+1]+h[k+2]+O)||g++,O===0&&y++,Math.floor(O)-1&16&&v++,Math.floor(O)-1&64&&b++,x=Math.max(x,Math.hypot(h[k],h[k+1],h[k+2]))}return c.unmap(),c.destroy(),{width:o.width,height:o.height,nonfinite:g,never:y,material:v,ambiguous:b,maxRadius:x}}validationDebris(n){this.validationHideDebris=!n,this.shadeDirty=!0}validationRockOrder(n){this.validationOrderedRocks=n,this.shadeDirty=!0}validationApproximate(n){this.validationAllowApproximate=n,this.geoDirty=this.shadeDirty=this.presentDirty=!0,this.histValid=!1,this.gpuProfiler?.reset()}async validationRockCounts(){const n=this.device;if(!n||!this.debrisArgsLarge)throw new Error("Renderer not ready");const o=n.createBuffer({size:64,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),l=n.createCommandEncoder();l.copyBufferToBuffer(this.debrisArgsLarge,0,o,0,64),n.queue.submit([l.finish()]),await o.mapAsync(GPUMapMode.READ);const c=Array.from(new Uint32Array(o.getMappedRange()));return o.unmap(),o.destroy(),{largeVertices:c[0],microVertices:c[4],large:c[1],micro:c[5],population:this.rockPopulation(),capacity:this.debrisPopulationCapacity,bytes:(this.microRecordsBuf?.size??0)+(this.largeRecordsBuf?.size??0),indirectBuffers:this.debrisArgsLarge===this.debrisArgsMicro?1:2}}async validationBuckets(){const n=this.device,o=this.simTargets;if(!n||!o)throw new Error("Renderer not ready");const l=[o.inlineFront,o.bucketPrefix,o.bucketColor,o.bucketDistance],c=Math.ceil(o.inlineFront.width*8/256)*256,f=o.inlineFront.height,h=o.inlineFront.width,g=l.map(N=>n.createBuffer({size:c*f*N.depthOrArrayLayers,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})),y=n.createCommandEncoder();l.forEach((N,j)=>y.copyTextureToBuffer({texture:N},{buffer:g[j],bytesPerRow:c,rowsPerImage:f},[h,f,N.depthOrArrayLayers])),n.queue.submit([y.finish()]),await Promise.all(g.map(N=>N.mapAsync(GPUMapMode.READ)));const v=g.map(N=>new Uint16Array(N.getMappedRange())),b=N=>{const j=N&32768?-1:1,Z=N>>10&31,P=N&1023;return j*(Z===31?P?NaN:1/0:Z===0?P*2**-24:(1+P/1024)*2**(Z-15))},x=(N,j,Z,P=0)=>{const Y=(P*f+Z)*c/2+j*4;return[0,1,2,3].map(C=>b(v[N][Y+C]))};let w=0,T=0,k=0,O=0;const R=[0,0,0];for(let N=0;N<f;N++)for(let j=0;j<h;j++){const Z=x(0,j,N);let P=[0,0,0,1],Y=0;Z.every(Number.isFinite)||w++;for(let C=0;C<3;C++){const I=x(1,j,N,C),K=x(2,j,N,C),X=x(3,j,N,C);if([...I,...K,...X].every(Number.isFinite)||w++,(I[3]>P[3]+.002||I[3]<Math.abs(Z[3])-.002||I[3]<0||I[3]>1.002)&&T++,I.slice(0,3).some((ae,le)=>ae<P[le]-.002||ae>Z[le]+Math.max(.002,Math.abs(Z[le])*.002))&&k++,K[3]>.002&&X[1]>.002){R[C]++;const ae=X[0]/X[1];ae<Y-.1&&O++,Y=ae}P=I}}return g.forEach(N=>{N.unmap(),N.destroy()}),{active:!0,width:h,height:f,nonfinite:w,transmissionOrder:T,radianceOrder:k,depthOrder:O,covered:R}}validationHistoryCounts(){return this.temporalMaterial?.counts()}validationOrderedRepairs(){return this.repairQueue?.orderedAudit()}validationResetTiming(){this.gpuProfiler?.reset()}validationStarCatalog(){return this.starCatalog?.audit()}async validationStarFilter(){if(!this.device)throw new Error("Renderer not ready");return(await Yd(async()=>{const{validateStarFilter:n}=await import("./star-filter-validation-Dlbp76QY.js");return{validateStarFilter:n}},[],import.meta.url)).validateStarFilter(this.device)}validationPin(n,o=0,l="exact"){this.validationMode=l,this.validationDelta=0,this.validationPoseSequence=null,n&&this.camera.setState(n),this.tDisk=o;const c=g1(this.params).pivotOmega;this.debrisPhase=-Math.SQRT1_2*Math.pow(this.params.diskOut/25,1.5)*c*o%(2*Math.PI),this.geoDirty=this.shadeDirty=this.presentDirty=!0,this.histValid=!1,this.accumN=0,this.jitterSeq=0,this.gpuProfiler?.reset()}async validationPng(){if(this.captureActive||this.captureBlitResolve)throw new Error("A capture is already active.");const n=document.createElement("canvas");n.width=this.canvas.width,n.height=this.canvas.height,this.captureBlitCanvas=n;try{return await this.requestPresentedBlit(),n.toDataURL("image/png")}finally{this.captureBlitCanvas=null}}setParams(n){const o=this.prev;let l=!1;const c=n.diskFlare!==o.diskFlare||n.smokeOpacity!==o.smokeOpacity||n.smokeThickness!==o.smokeThickness||n.rockPopulation!==o.rockPopulation;(c||n.windowStarlight!==o.windowStarlight||n.starFilterWidth!==o.starFilterWidth)&&(this.presentDirty=!0,c&&(this.geoDirty=this.shadeDirty=!0,l=!0),this.gpuProfiler?.reset(),this.resetQualityEvidence());const h=n.bloom>.004!=o.bloom>.004,g=n.spin!==o.spin||n.diskOut!==o.diskOut||n.diskH!==o.diskH||n.fov!==o.fov;if(this.params={...n},n.nebCount!==o.nebCount){const y=this.device;if(y&&this.ready){const v=this.startGen;this.nebulaBakeChain=this.nebulaBakeChain.then(()=>this.bakeNebulaAtlas(y,v))}}(n.galBright!==o.galBright||n.galTilt!==o.galTilt||n.nebDens!==o.nebDens||n.nebSize!==o.nebSize)&&(this.skyPendingAt=performance.now()),n.starDens!==o.starDens&&(this.presentDirty=!0),(n.spin!==o.spin||n.charge!==o.charge||n.extension!==o.extension||n.diskOut!==o.diskOut||n.diskH!==o.diskH||n.fov!==o.fov)&&(this.geoDirty=!0,l=!0),(n.topoHorizon!==o.topoHorizon||n.topoErgo!==o.topoErgo||n.topoGrid!==o.topoGrid||n.topoEdge!==o.topoEdge||n.ringGlow!==o.ringGlow||n.ringWidth!==o.ringWidth||n.ctcTint!==o.ctcTint)&&(this.shadeDirty=!0),(n.diskTemp!==o.diskTemp||n.diskBright!==o.diskBright||n.beaming!==o.beaming||n.redshift!==o.redshift||n.playing!==o.playing||n.diskSpeed!==o.diskSpeed||n.diskHaze!==o.diskHaze)&&(this.shadeDirty=!0),n.taa!==o.taa&&(this.geoDirty=!0,this.shadeDirty=!0,this.presentDirty=!0,this.histValid=!1,this.accumN=0,this.jitterSeq=0),(n.bloom!==o.bloom||n.exposure!==o.exposure)&&(this.presentDirty=!0),n.fpsCap!==o.fpsCap&&(this.nextT=void 0,this.resetQualityEvidence()),n.quality!==o.quality&&(n.quality>0?this.resScale=Math.min(100,n.quality)/100:(o.quality>0&&(this.autoScale=this.resScale),this.resScale=this.autoScale),this.resetQualityEvidence(),this.resizeSim()),(h||g)&&this.resetQualityEvidence(),l&&(this.histValid=!1,this.accumN=0),this.camera.fov=n.fov,this.prev={...n}}resize(){if(!this.device||this.captureActive)return;const n=this.resizeCanvas(),o=this.resizeSim();(n||o)&&this.resetQualityEvidence()}resizeCanvas(){const n=this.device;if(!n)return!1;if(this.captureActive&&this.captureTargetW>0){const g=this.canvas.width!==this.captureTargetW||this.canvas.height!==this.captureTargetH;return g&&(this.canvas.width=this.captureTargetW,this.canvas.height=this.captureTargetH,this.presentDirty=!0),g}const o=Math.min(devicePixelRatio||1,2),l=n.limits.maxTextureDimension2D,c=Math.min(l,Math.max(2,Math.round(this.canvas.clientWidth*o))),f=Math.min(l,Math.max(2,Math.round(this.canvas.clientHeight*o))),h=this.canvas.width!==c||this.canvas.height!==f;return this.canvas.width!==c&&(this.canvas.width=c),this.canvas.height!==f&&(this.canvas.height=f),h&&(this.presentDirty=!0),h}resizeSim(n=!1){const o=this.device;if(!o)return!1;const l=this.canvas.width,c=this.canvas.height,f=Math.max(8,Math.round(l*this.resScale)),h=Math.max(8,Math.round(c*this.resScale));if(this.simTargets&&this.simW===f&&this.simH===h)return!1;this.gpuProfiler?.reset();const g=n&&this.histValid&&this.pResample&&this.simTargets?this.simTargets.accum[this.readIdx]:null;this.simW=f,this.simH=h;const[[y,v],[b,x],[w,T],[k,O]]=m1(f,h);this.destroySimTargets(g);const R=GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST,N=(P,Y,C,I=1)=>o.createTexture({size:[P,Y,I],format:C,usage:R}),j=(P,Y,C,I=1)=>o.createTexture({size:[P,Y,I],format:C,usage:R|GPUTextureUsage.RENDER_ATTACHMENT}),Z=(P,Y)=>{const C=o.createBuffer({size:Y,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.INDIRECT|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});return o.queue.writeBuffer(C,jm,new Uint32Array([P])),C};if(this.simTargets={bucketPrefix:N(f,h,"rgba16float",3),bucketInfo:N(f,h,"rg32uint",3),bucketColor:j(f,h,"rgba16float",3),bucketDistance:j(f,h,"rgba16float",3),bucketSpanPrev:N(f,h,"rg32uint"),bucketPrefixWarp:N(f,h,"rgba16float",3),gRay:N(f,h,"rg32uint"),gRayPrev:o.createTexture({size:[f,h],format:"rg32uint",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING}),gRayFinal:o.createTexture({size:[f,h],format:"rg32uint",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST}),workQueue:Z(1,Q1(1)),cur:j(f,h,"rgba16float"),inlineFront:N(f,h,"rgba16float"),materialPoint:N(f,h,"rgba32float"),materialPointPrev:N(f,h,"rgba32float"),materialFrontPrev:N(f,h,"rgba16float"),materialPointWarp:N(f,h,"rgba32float"),materialFrontWarp:N(f,h,"rgba16float"),debrisDepth:o.createTexture({size:[f,h],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),accum:[0,1].map(()=>N(f,h,"rgba16float")),bloomL0:N(y,v,"rgba16float"),bloomL1:N(b,x,"rgba16float"),bloomL2:N(w,T,"rgba16float"),bloomL3:N(k,O,"rgba16float"),bloomUp2:N(w,T,"rgba16float"),bloomUp1:N(b,x,"rgba16float"),bloomUp0:N(y,v,"rgba16float")},this.curView=this.simTargets.cur.createView(),this.debrisDepthView=this.simTargets.debrisDepth.createView(),this.buildBindGroups(o),this.accumN=0,this.histValid=!1,this.accumCarried=!1,g){const P=o.createCommandEncoder(),Y=P.beginComputePass();Y.setPipeline(this.pResample),Y.setBindGroup(0,o.createBindGroup({layout:this.filtBGL,entries:[{binding:0,resource:g.createView()},{binding:1,resource:this.samp},{binding:2,resource:this.simTargets.accum[this.readIdx].createView()}]})),Y.dispatchWorkgroups(Math.ceil(f/8),Math.ceil(h/8)),Y.end(),o.queue.submit([P.finish()]),g.destroy(),this.accumCarried=!0}return this.geoDirty=this.shadeDirty=this.presentDirty=!0,this.bloomStale=!0,!0}destroySimTargets(n=null){const o=this.simTargets;if(o){try{[o.bucketColor,o.bucketDistance,o.bucketSpanPrev,o.bucketPrefixWarp,o.materialPoint,o.materialPointPrev,o.materialFrontPrev,o.materialPointWarp,o.materialFrontWarp,o.bucketPrefix,o.bucketInfo,o.gRay,o.gRayPrev,o.gRayFinal,o.cur,o.inlineFront,o.debrisDepth,...o.accum,o.bloomL0,o.bloomL1,o.bloomL2,o.bloomL3,o.bloomUp2,o.bloomUp1,o.bloomUp0].forEach(l=>{l!==n&&l.destroy()}),o.workQueue.destroy()}catch{}this.simTargets=null}}lensMapFixed(n){const o=this.historyCamera;return this.histValid&&o!==null&&o.pitch===n.pitch&&o.dist===n.dist&&o.lookYaw===n.lookYaw&&o.lookPitch===n.lookPitch&&Math.abs(n.yaw-o.yaw)<=Xd}cameraStepKind(n){const o=this.historyCamera;if(!o)return"idle";if(o.pitch!==n.pitch||o.dist!==n.dist||o.lookYaw!==n.lookYaw||o.lookPitch!==n.lookPitch)return"free";const l=Math.abs(n.yaw-o.yaw);return l<=Kd?"idle":l<=Xd?"slow":"free"}pixelInterleaveEnabled(){return(this.params.taa||this.validationAllowApproximate)&&!this.captureActive}temporalMarch(){const n="temporal",o=this.lazyPipelines.get(n);if(o)return o;const l=this.device;if(l&&!this.pendingPipelines.has(n)&&!this.failedPipelines.has(n)){this.pendingPipelines.add(n);const c=this.startGen;l.createComputePipelineAsync({label:`${n} march`,layout:l.createPipelineLayout({bindGroupLayouts:[this.inlineBGL]}),compute:{module:l.createShaderModule({code:Su}),entryPoint:"main",constants:{MATERIAL_MARCH:1,TEMPORAL_REFRESH:1}}}).then(f=>{c===this.startGen&&(this.lazyPipelines.set(n,f),this.pendingPipelines.delete(n),this.pixelInterleaveEnabled()&&(this.histValid=!1,this.accumN=0,this.geoDirty=this.shadeDirty=this.presentDirty=!0,this.gpuProfiler?.reset()))},f=>{c===this.startGen&&(this.pendingPipelines.delete(n),this.failedPipelines.add(n),this.validationErrors.push(String(f)),this.onError?.(`March shader could not compile: ${f}`))})}return null}stableStarPipeline(n){const o="stars"+(n?"/reuse":"/reference"),l=this.lazyPipelines.get(o);if(l)return l;const c=this.device;if(c&&!this.pendingPipelines.has(o)&&!this.failedPipelines.has(o)){this.pendingPipelines.add(o);const f=this.startGen,h=Om(Su,n);c.createComputePipelineAsync({label:o,layout:c.createPipelineLayout({bindGroupLayouts:[this.inlineBGL,...n?[this.stableStarField.layout]:[]]}),compute:{module:c.createShaderModule({code:h}),entryPoint:"main",constants:{MATERIAL_MARCH:0}}}).then(g=>{f===this.startGen&&(this.lazyPipelines.set(o,g),this.pendingPipelines.delete(o),this.geoDirty=this.shadeDirty=!0)},g=>{f===this.startGen&&(this.pendingPipelines.delete(o),this.failedPipelines.add(o),this.validationErrors.push(String(g)),this.onError?.("Stable stars: "+g))})}return null}rockPopulation(){return this.params.rockPopulation}resizeRockBuffers(){const n=this.device;if(!n)return;const o=this.rockPopulation();if(o===this.debrisPopulationCapacity)return;this.debrisPopulationCapacity=o,this.clusterInfoBuf?.destroy(),this.microRecordsBuf?.destroy(),this.largeRecordsBuf?.destroy();const l=c=>n.createBuffer({size:c,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST});this.clusterInfoBuf=l(Fl*o*16),this.microRecordsBuf=l(mr*o*48),this.largeRecordsBuf=l(gr*o*48),this.simTargets&&this.buildBindGroups(n)}createLayoutsAndPipelines(n,o){const l=GPUShaderStage,c=R=>n.createShaderModule({code:R});this.skyBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:l.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"2d-array"}},{binding:2,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"2d"}},{binding:3,visibility:l.COMPUTE,sampler:{type:"filtering"}},{binding:4,visibility:l.COMPUTE,buffer:{type:"uniform"}}]}),this.skyMipBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"cube"}},{binding:1,visibility:l.COMPUTE,sampler:{type:"filtering"}},{binding:2,visibility:l.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"2d-array"}}]});const f=(R,N,j="2d")=>({binding:R,visibility:l.COMPUTE,storageTexture:{access:"write-only",format:N,viewDimension:j}});this.inlineBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:l.COMPUTE,buffer:{type:"read-only-storage"}},f(2,"rgba16float","2d-array"),f(3,"rg32uint","2d-array"),f(4,"rg32uint"),{binding:6,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"cube"}},{binding:7,visibility:l.COMPUTE,sampler:{type:"filtering"}},{binding:8,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},{binding:9,visibility:l.COMPUTE,sampler:{type:"filtering"}},{binding:11,visibility:l.COMPUTE,buffer:{type:"uniform"}},{binding:14,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},{binding:15,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},{binding:16,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},f(17,"rgba16float"),{binding:19,visibility:l.COMPUTE,texture:{sampleType:"uint"}},...[20,21,22,23].map(R=>({binding:R,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}})),f(24,"rgba32float"),{binding:25,visibility:l.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:27,visibility:l.COMPUTE,texture:{sampleType:"uint"}},...[31,32].map(R=>({binding:R,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"2d-array"}})),{binding:33,visibility:l.COMPUTE,texture:{sampleType:"uint",viewDimension:"2d-array"}}]}),this.rayAdvanceBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:l.COMPUTE,texture:{sampleType:"uint"}},{binding:2,visibility:l.COMPUTE,texture:{sampleType:"uint"}},f(3,"rg32uint")]});const h=R=>({binding:R,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}}),g=(R,N)=>({binding:R,visibility:l.COMPUTE,storageTexture:{access:"write-only",format:N,viewDimension:"3d"}});this.nebNoiseBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},g(1,"rgba16float")]}),this.nebBlurBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},h(1),g(2,"rgba16float")]}),this.nebDensityBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},h(1),g(2,"rgba16float"),{binding:3,visibility:l.COMPUTE,buffer:{type:"storage"}}]}),this.nebPercentileBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"storage"}},{binding:1,visibility:l.COMPUTE,buffer:{type:"storage"}}]}),this.nebLightBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},h(1),{binding:2,visibility:l.COMPUTE,buffer:{type:"read-only-storage"}},g(3,"r32float")]}),this.nebIntegrateBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},h(1),{binding:2,visibility:l.COMPUTE,sampler:{type:"filtering"}},h(3),{binding:4,visibility:l.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"3d"}},{binding:5,visibility:l.COMPUTE,texture:{sampleType:"unfilterable-float",viewDimension:"3d"}},{binding:6,visibility:l.COMPUTE,buffer:{type:"read-only-storage"}},{binding:7,visibility:l.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float"}}]}),this.nebComposeBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"2d-array"}},{binding:2,visibility:l.COMPUTE,sampler:{type:"filtering"}},{binding:3,visibility:l.COMPUTE,storageTexture:{access:"write-only",format:"rgba8unorm"}}]}),this.taaBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:l.COMPUTE,texture:{sampleType:"unfilterable-float"}},{binding:2,visibility:l.COMPUTE,texture:{sampleType:"unfilterable-float"}},f(3,"rgba16float")]}),this.filtBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,texture:{sampleType:"float"}},{binding:1,visibility:l.COMPUTE,sampler:{type:"filtering"}},f(2,"rgba16float")]}),this.halationUpBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,texture:{sampleType:"float"}},{binding:1,visibility:l.COMPUTE,texture:{sampleType:"float"}},{binding:2,visibility:l.COMPUTE,sampler:{type:"filtering"}},f(3,"rgba16float")]}),this.debrisBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.VERTEX|l.FRAGMENT,buffer:{type:"uniform"}},{binding:1,visibility:l.VERTEX,texture:{sampleType:"float",viewDimension:"3d"}},{binding:2,visibility:l.VERTEX,sampler:{type:"filtering"}},{binding:4,visibility:l.VERTEX,buffer:{type:"read-only-storage"}},{binding:5,visibility:l.VERTEX,buffer:{type:"read-only-storage"}},{binding:6,visibility:l.FRAGMENT,texture:{sampleType:"uint",viewDimension:"2d-array"}}]}),this.debrisCullBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:l.COMPUTE,texture:{sampleType:"float",viewDimension:"3d"}},{binding:2,visibility:l.COMPUTE,sampler:{type:"filtering"}},{binding:3,visibility:l.COMPUTE,buffer:{type:"storage"}}]}),this.debrisCullFinalizeBGL=n.createBindGroupLayout({entries:[{binding:1,visibility:l.COMPUTE,buffer:{type:"uniform"}},{binding:0,visibility:l.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:l.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:l.COMPUTE,buffer:{type:"storage"}}]}),this.debrisExpandBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:l.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:l.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:l.COMPUTE,buffer:{type:"storage"}}]}),this.compBGL=n.createBindGroupLayout({entries:[{binding:0,visibility:l.FRAGMENT,texture:{sampleType:"float"}},{binding:1,visibility:l.FRAGMENT,texture:{sampleType:"float"}},{binding:2,visibility:l.FRAGMENT,texture:{sampleType:"uint"}},{binding:3,visibility:l.FRAGMENT,sampler:{type:"filtering"}},{binding:4,visibility:l.FRAGMENT,buffer:{type:"uniform"}},{binding:5,visibility:l.FRAGMENT,texture:{sampleType:"float",viewDimension:"cube-array"}},{binding:6,visibility:l.FRAGMENT,sampler:{type:"filtering"}}]});const y=R=>n.createPipelineLayout({bindGroupLayouts:[R]}),v=()=>!this.disposed&&this.startGen===o&&this.device===n,b=()=>{this.pipelineDone++,v()&&this.onProgress?.(.2+.7*(this.pipelineDone/Math.max(1,this.pipelineTotal)))},x=(R,N,j,Z)=>(this.pipelineTotal++,n.createComputePipelineAsync({layout:y(R),compute:{module:c(N),entryPoint:"main",...Z?{constants:Z}:{}}}).then(P=>{v()&&j(P),b()},P=>{v()&&this.onError?.("Shader compile failed: "+P),b()}));x(this.skyBGL,cv,R=>{this.pSky=R}),x(this.skyMipBGL,fv,R=>{this.pSkyMip=R}),x(this.rayAdvanceBGL,Bv,R=>{this.pRayAdvance=R}),this.nebulaPipesReady=[x(this.nebNoiseBGL,wv,R=>{this.pNebNoise=R}),x(this.nebBlurBGL,Ev,R=>{this.pNebBlur=R}),x(this.nebDensityBGL,Mv,R=>{this.pNebDensity=R}),x(this.nebPercentileBGL,Av,R=>{this.pNebPercentile=R}),x(this.nebLightBGL,Tv,R=>{this.pNebLight=R}),x(this.nebIntegrateBGL,Rv,R=>{this.pNebIntegrate=R}),x(this.nebComposeBGL,zv,R=>{this.pNebCompose=R})],x(this.inlineBGL,Su,R=>{this.pMarchBase=R},{MATERIAL_MARCH:1,TEMPORAL_REFRESH:0}),x(this.debrisCullBGL,lv,R=>{this.pDebrisCull=R}),x(this.debrisExpandBGL,sv,R=>{this.pDebrisExpandMicro=R}),x(this.debrisExpandBGL,ov,R=>{this.pDebrisExpandLarge=R}),x(this.debrisCullFinalizeBGL,uv,R=>{this.pDebrisCullFinalize=R}),x(this.taaBGL,Cv,R=>{this.pTaa=R}),x(this.filtBGL,_v,R=>{this.pBright=R}),x(this.filtBGL,Uv,R=>{this.pHalationDown=R}),x(this.filtBGL,kv,R=>{this.pResample=R}),x(this.halationUpBGL,Dv,R=>{this.pHalationUp=R});const w=c(nv),T=[{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}}},{format:"rgba16float",blend:{color:{srcFactor:"one",dstFactor:"one",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one",operation:"add"}}}],k=R=>n.createRenderPipeline({layout:y(this.debrisBGL),vertex:{module:w,entryPoint:"vs",constants:{MICRO_DEBRIS:R?1:0}},fragment:{module:w,entryPoint:"fs",constants:{MICRO_DEBRIS:R?1:0,LAYERS_AT_ONCE:this.rockLayersAtOnce?1:0},targets:this.rockLayersAtOnce?[...T,...T,...T]:T},primitive:{topology:"triangle-list"},depthStencil:{format:"depth24plus",depthWriteEnabled:!R,depthCompare:"less"}});this.pDebris=k(!1),this.pDebrisMicro=k(!0);const O=c(Ov);this.pComposite=n.createRenderPipeline({layout:y(this.compBGL),vertex:{module:O,entryPoint:"vs"},fragment:{module:O,entryPoint:"fs",targets:[{format:this.fmt}]},primitive:{topology:"triangle-list"}})}createStaticResources(n){this.samp=n.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge",addressModeW:"clamp-to-edge"}),this.diskNoiseSamp=n.createSampler({magFilter:"linear",minFilter:"linear",mipmapFilter:"linear",addressModeU:"repeat",addressModeV:"repeat",addressModeW:"repeat"}),this.astronomicalSkySamp=n.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"clamp-to-edge"});const o=f=>n.createBuffer({size:f,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});this.inlineGeoU=o(256),this.inlineU=o(96),this.rayAdvanceU=o(48),this.skyU=o(80),this.skyCentersU=o(16+vr*16),this.taaU=o(16),this.compU=o(80),this.debrisU=o(160),this.debrisPopulationCapacity=1,this.clusterInfoBuf=n.createBuffer({size:Fl*16,usage:GPUBufferUsage.STORAGE});const l=()=>n.createBuffer({size:64,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.INDIRECT|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});this.debrisArgsLarge=l(),this.debrisArgsMicro=this.debrisArgsLarge,this.repairQueue.setIndirectBuffer(this.debrisArgsLarge),this.microRecordsBuf=n.createBuffer({size:mr*48,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.microCountBuf=n.createBuffer({size:4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.largeRecordsBuf=n.createBuffer({size:gr*48,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.largeCountBuf=n.createBuffer({size:4,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),this.skyTex=n.createTexture({size:[this.skyN,this.skyN,6],format:"rgba16float",mipLevelCount:c1(this.skyN),usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),this.skyCubeView=this.skyTex.createView({dimension:"cube"}),this.skyMipBGs=this.createSkyMipBindGroups(n,this.skyTex),this.astronomicalSkyTex=n.createTexture({size:[o1,u1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING}),this.astronomicalSkyView=this.astronomicalSkyTex.createView();const c=Yv();this.diskNoiseTex=n.createTexture({size:[c[0].size,c[0].size,c[0].size],dimension:"3d",format:"rgba8unorm",mipLevelCount:c.length,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});for(let f=0;f<c.length;f++){const{size:h,data:g}=c[f],y=h*4,v=Math.max(256,Math.ceil(y/256)*256);let b=g;if(v!==y){b=new Uint8Array(v*h*h);for(let x=0;x<h;x++)for(let w=0;w<h;w++){const T=(x*h+w)*y;b.set(g.subarray(T,T+y),(x*h+w)*v)}}n.queue.writeTexture({texture:this.diskNoiseTex,mipLevel:f},b,{bytesPerRow:v,rowsPerImage:h},{width:h,height:h,depthOrArrayLayers:h})}this.diskNoiseView=this.diskNoiseTex.createView({dimension:"3d"}),this.bakeNoiseTex=s1.map(f=>n.createTexture({size:[f,f,f],dimension:"3d",format:"rgba16float",mipLevelCount:c1(f),usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING})),this.bakeNoiseViews=this.bakeNoiseTex.map(f=>f.createView({dimension:"3d"}));{const f=n.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,storageTexture:{access:"write-only",format:"rgba16float",viewDimension:"3d"}}]}),h=n.createComputePipeline({layout:n.createPipelineLayout({bindGroupLayouts:[f]}),compute:{module:n.createShaderModule({code:rv}),entryPoint:"main"}}),g=[[9,27],[27,81],[27,81]],y=n.createCommandEncoder(),v=new Km(n);this.bakeNoiseMoments=[],this.bakeNoiseTex.forEach((b,x)=>{const w=s1[x],T=n.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});n.queue.writeBuffer(T,0,new Float32Array([g[x][0],g[x][1],0,w,0,0,17.13+x,41.7+x]));const k=n.createBindGroup({layout:f,entries:[{binding:0,resource:{buffer:T}},{binding:1,resource:this.bakeNoiseTex[x].createView({dimension:"3d",baseMipLevel:0,mipLevelCount:1})}]}),O=y.beginComputePass();O.setPipeline(h),O.setBindGroup(0,k),O.dispatchWorkgroups(w/4,w/4,w/4),O.end(),v.generate(y,this.bakeNoiseTex[x]),this.bakeNoiseMoments.push(v.crustMoments(y,this.bakeNoiseTex[x],!0))}),this.crustMomentsTex=v.crustMoments(y,this.diskNoiseTex),n.queue.submit([y.finish()])}this.skyBG=this.createSkyBakeBindGroup(n,this.skyTex)}async bakeNebulaAtlas(n,o){if(await Promise.all(this.nebulaPipesReady),this.disposed||o!==this.startGen||this.device!==n||!this.pNebNoise||!this.pNebBlur||!this.pNebDensity||!this.pNebPercentile||!this.pNebLight||!this.pNebIntegrate||!this.pNebCompose)return;const c=gv(this.params.nebCount,void 0),f=new ArrayBuffer(16+vr*16);new Uint32Array(f,0,1)[0]=c.length;const h=new Float32Array(f,16);c.forEach((K,X)=>{h.set(nh(K.targetRa,K.targetDec),X*4),h[X*4+3]=K.angularRadius*Math.PI/180}),n.queue.writeBuffer(this.skyCentersU,0,f);const g=Nu,y=K=>n.createTexture({size:[g,g,g],dimension:"3d",format:K,usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),v=y("rgba16float"),b=y("rgba16float"),x=y("r32float"),w=y("r32float"),T=n.createTexture({size:[Yl,Yl,Math.max(1,c.length)],format:"rgba16float",usage:GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING}),k=n.createBuffer({size:ah*4,usage:GPUBufferUsage.STORAGE}),O=n.createBuffer({size:16,usage:GPUBufferUsage.STORAGE}),R=n.createBuffer({size:512,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),N=n.createSampler({magFilter:"linear",minFilter:"linear",addressModeU:"repeat",addressModeV:"repeat",addressModeW:"repeat"}),j=(K,X,ae,le,Se,ce)=>{ce&&n.queue.writeBuffer(R,0,ce.buffer,ce.byteOffset,ce.byteLength);const ke=n.createCommandEncoder(),ze=ke.beginComputePass();ze.setPipeline(K),ze.setBindGroup(0,n.createBindGroup({layout:K.getBindGroupLayout(0),entries:X})),ze.dispatchWorkgroups(ae,le,Se),ze.end(),n.queue.submit([ke.finish()])},Z=(K,X)=>{const ae=new ArrayBuffer(K*4);return X(new Float32Array(ae),new Uint32Array(ae)),new Uint8Array(ae)},P=Math.ceil(g/4),Y={binding:0,resource:{buffer:R}};for(let K=0;K<c.length;K++){const X=c[K],ae=Sv(X);j(this.pNebNoise,[Y,{binding:1,resource:v.createView()}],P,P,P,new Uint32Array([X.seed,0,0,0]));const le=[v,b];for(let ce=0;ce<3;ce++){const ke=le[ce%2],ze=le[1-ce%2],{sigma:B,radius:F}=ae.axes[ce];j(this.pNebBlur,[Y,{binding:1,resource:ke.createView()},{binding:2,resource:ze.createView()}],P,P,P,Z(8,($,ge)=>{$.set(B,0),ge[3]=ce,ge.set(F,4)}))}j(this.pNebDensity,[Y,{binding:1,resource:b.createView()},{binding:2,resource:v.createView()},{binding:3,resource:{buffer:k}}],P,P,P,Z(4,(ce,ke)=>{ce.set(ae.invStd,0),ke[3]=X.variant})),j(this.pNebPercentile,[{binding:0,resource:{buffer:k}},{binding:1,resource:{buffer:O}}],1,1,1);const Se=X.variant===1?[[0,0,1.55,x],[0,1,1.35,w]]:X.variant===2?[[1,0,1.45,x],[1,1,1.2,w]]:[[0,0,1.55,x],[1,1,1.2,w]];for(const[ce,ke,ze,B]of Se)j(this.pNebLight,[Y,{binding:1,resource:v.createView()},{binding:2,resource:{buffer:O}},{binding:3,resource:B.createView()}],Math.ceil(g/8),Math.ceil(g/8),1,Z(8,(F,$)=>{$[0]=ce,$[1]=ke,F[4]=ze}));j(this.pNebIntegrate,[Y,{binding:1,resource:v.createView()},{binding:2,resource:N},{binding:3,resource:b.createView()},{binding:4,resource:x.createView()},{binding:5,resource:w.createView()},{binding:6,resource:{buffer:O}},{binding:7,resource:T.createView({dimension:"2d",baseArrayLayer:K,arrayLayerCount:1})}],Math.ceil(Yl/8),Math.ceil(Yl/8),1,Z(16,(ce,ke)=>{ce.set(X.lineColor,0),ce[3]=X.exposure,ce.set(X.hotColor,4),ce[7]=X.opacity,ce.set(X.dustColor,8),ke[11]=X.variant,ce[12]=ae.invStd[0]}))}const C=new ArrayBuffer(16+vr*48);new Uint32Array(C,0,1)[0]=c.length;const I=new Float32Array(C,16);c.forEach((K,X)=>{const ae=bv(K);I.set([...ae.center,ae.tanExtent],X*12),I.set([...ae.east,0],X*12+4),I.set([...ae.north,0],X*12+8)}),j(this.pNebCompose,[Y,{binding:1,resource:T.createView({dimension:"2d-array"})},{binding:2,resource:N},{binding:3,resource:this.astronomicalSkyView}],Math.ceil(o1/8),Math.ceil(u1/8),1,new Uint8Array(C)),this.skyDirty=!0,this.histValid=!1,this.presentDirty=!0,n.queue.onSubmittedWorkDone().then(()=>{v.destroy(),b.destroy(),x.destroy(),w.destroy(),T.destroy(),k.destroy(),O.destroy(),R.destroy()})}createSkyBakeBindGroup(n,o){return n.createBindGroup({layout:this.skyBGL,entries:[{binding:0,resource:{buffer:this.skyU}},{binding:1,resource:o.createView({dimension:"2d-array",baseMipLevel:0,mipLevelCount:1})},{binding:2,resource:this.astronomicalSkyView},{binding:3,resource:this.astronomicalSkySamp},{binding:4,resource:{buffer:this.skyCentersU}}]})}createSkyMipBindGroups(n,o){const l=[];for(let c=1;c<o.mipLevelCount;c++)l.push(n.createBindGroup({layout:this.skyMipBGL,entries:[{binding:0,resource:o.createView({dimension:"cube",baseMipLevel:c-1,mipLevelCount:1})},{binding:1,resource:this.samp},{binding:2,resource:o.createView({dimension:"2d-array",baseMipLevel:c,mipLevelCount:1})}]}));return l}buildBindGroups(n){const o=this.simTargets,l=o.inlineFront.createView(),c=[{binding:0,resource:{buffer:this.debrisU}},{binding:1,resource:this.diskNoiseView},{binding:2,resource:this.diskNoiseSamp},{binding:4,resource:{buffer:this.microRecordsBuf}},{binding:5,resource:{buffer:this.largeRecordsBuf}},{binding:6,resource:o.bucketSpanPrev.createView({dimension:"2d-array"})}];this.debrisDepthLayers.bind({colors:o.bucketColor,distances:o.bucketDistance,prefix:o.bucketPrefix,total:o.inlineFront,ray:o.gRayFinal,metadata:o.bucketInfo,output:o.cur},this.debrisBGL,c,this.skyCubeView,this.samp),this.debrisCullBG=n.createBindGroup({layout:this.debrisCullBGL,entries:[{binding:0,resource:{buffer:this.debrisU}},{binding:1,resource:this.diskNoiseView},{binding:2,resource:this.diskNoiseSamp},{binding:3,resource:{buffer:this.clusterInfoBuf}}]}),this.debrisCullFinalizeBG=n.createBindGroup({layout:this.debrisCullFinalizeBGL,entries:[{binding:0,resource:{buffer:this.debrisArgsLarge}},{binding:1,resource:{buffer:this.debrisU}},{binding:2,resource:{buffer:this.largeCountBuf}},{binding:3,resource:{buffer:this.microCountBuf}}]}),this.debrisExpandBG=n.createBindGroup({layout:this.debrisExpandBGL,entries:[{binding:0,resource:{buffer:this.debrisU}},{binding:1,resource:{buffer:this.clusterInfoBuf}},{binding:2,resource:{buffer:this.microRecordsBuf}},{binding:3,resource:{buffer:this.microCountBuf}}]}),this.debrisExpandLargeBG=n.createBindGroup({layout:this.debrisExpandBGL,entries:[{binding:0,resource:{buffer:this.debrisU}},{binding:1,resource:{buffer:this.clusterInfoBuf}},{binding:2,resource:{buffer:this.largeRecordsBuf}},{binding:3,resource:{buffer:this.largeCountBuf}}]});const f=o.bucketPrefix.createView({dimension:"2d-array"}),h=o.bucketInfo.createView({dimension:"2d-array"}),g=o.gRay.createView(),y=o.gRayPrev.createView(),v=o.gRayFinal.createView(),b=o.accum.map(Y=>Y.createView()),x=o.bloomL0.createView(),w=o.bloomL1.createView(),T=o.bloomL2.createView(),k=o.bloomL3.createView(),O=o.bloomUp2.createView(),R=o.bloomUp1.createView(),N=o.bloomUp0.createView(),j=[{binding:0,resource:{buffer:this.inlineGeoU}},{binding:1,resource:{buffer:o.workQueue}},{binding:2,resource:f},{binding:3,resource:h},{binding:4,resource:g},{binding:6,resource:this.skyCubeView},{binding:7,resource:this.samp},{binding:8,resource:this.diskNoiseView},{binding:9,resource:this.diskNoiseSamp},{binding:11,resource:{buffer:this.inlineU}},{binding:14,resource:this.bakeNoiseViews[0]},{binding:15,resource:this.bakeNoiseViews[1]},{binding:16,resource:this.bakeNoiseViews[2]},{binding:17,resource:l},{binding:19,resource:y},{binding:20,resource:this.crustMomentsTex.createView({dimension:"3d"})},...this.bakeNoiseMoments.map((Y,C)=>({binding:21+C,resource:Y.createView({dimension:"3d"})})),{binding:24,resource:o.materialPoint.createView()},{binding:25,resource:o.materialPointPrev.createView()},{binding:27,resource:v},{binding:31,resource:o.bucketColor.createView({dimension:"2d-array"})},{binding:32,resource:o.bucketDistance.createView({dimension:"2d-array"})},{binding:33,resource:o.bucketSpanPrev.createView({dimension:"2d-array"})}];this.inlineEntries=j,this.repairGroup=null,this.repairBoundQueue=null,this.inlineBG=n.createBindGroup({layout:this.inlineBGL,entries:j}),this.rayAdvanceBG=n.createBindGroup({layout:this.rayAdvanceBGL,entries:[{binding:0,resource:{buffer:this.rayAdvanceU}},{binding:1,resource:g},{binding:2,resource:y},{binding:3,resource:v}]}),this.taaBG=[0,1].map(Y=>n.createBindGroup({layout:this.taaBGL,entries:[{binding:0,resource:{buffer:this.taaU}},{binding:1,resource:this.curView},{binding:2,resource:b[1-Y]},{binding:3,resource:b[Y]}]})),this.brightBG=[0,1].map(Y=>n.createBindGroup({layout:this.filtBGL,entries:[{binding:0,resource:b[Y]},{binding:1,resource:this.samp},{binding:2,resource:x}]}));const Z=(Y,C)=>n.createBindGroup({layout:this.filtBGL,entries:[{binding:0,resource:Y},{binding:1,resource:this.samp},{binding:2,resource:C}]});this.halationDownBGs=[Z(x,w),Z(w,T),Z(T,k)];const P=(Y,C,I)=>n.createBindGroup({layout:this.halationUpBGL,entries:[{binding:0,resource:Y},{binding:1,resource:C},{binding:2,resource:this.samp},{binding:3,resource:I}]});this.halationUpBGs=[P(k,T,O),P(O,w,R),P(R,x,N)],this.compBG=[0,1].map(Y=>n.createBindGroup({layout:this.compBGL,entries:[{binding:0,resource:b[Y]},{binding:1,resource:N},{binding:2,resource:v},{binding:3,resource:this.samp},{binding:4,resource:{buffer:this.compU}},{binding:5,resource:this.starCatalog.view},{binding:6,resource:this.starCatalog.sampler}]}))}resetQualityEvidence(n=performance.now()){this.gpuProfiler?.reset(),this.qualityGovernor.reset(n),this.perfCompletions.length=0,this.perfSkips.length=0,this.completionDts.length=0,this.lastCompletionT=0}frame(n){if(this.disposed||!this.ready||!this.device||document.hidden||!this.simTargets)return;this.captureTick?.();const o=this.rawLastT?n-this.rawLastT:0;this.rawLastT=n;const l=this.params,c=l.taa||this.captureActive,f=this.captureActive?this.captureStepDt:null;this.captureActive&&(this.captureStepDt=null);const h=l.playing&&l.diskSpeed>0&&(!this.captureActive||f!==null),g=this.pixelInterleaveEnabled()?this.temporalMarch():null,y=g!==null,v=g??this.pMarchBase;this.activeMarchKey=y?"temporal":"base";const b=this.stableStarPipeline(!1),x=this.stableStarPipeline(!0),w=!!(this.pSky&&this.pSkyMip&&this.pMarchBase&&this.inlineBG&&this.pTaa&&this.pBright&&this.pHalationDown&&this.pHalationUp&&this.pDebris&&this.pDebrisMicro&&this.pComposite&&(!y||this.temporalMaterial?.pipeline));if(this.qualityGovernor.observeRaf(o,!w||!this.lastQualitySubmitted),!w){this.lastQualitySubmitted=!1;return}if(this.framesInFlight>=2){this.lastQualitySubmitted=!1;const de=performance.now();for(this.perfSkips.push(de);this.perfSkips.length&&de-this.perfSkips[0]>Il;)this.perfSkips.shift();this.emitStats(de);return}const T=this.captureActive?0:l.fpsCap;if(T&&T<240){if(this.nextT===void 0&&(this.nextT=n),n<this.nextT-.5){this.lastQualitySubmitted=!1;return}const de=1e3/T;this.nextT=Math.max(this.nextT+de,n-de)}this.lastT||(this.lastT=n);const k=Math.min(.1,(n-this.lastT)/1e3);this.lastT=n,this.skyPendingAt>=0&&n-this.skyPendingAt>Gv&&(this.skyDirty=!0,this.histValid=!1,this.skyPendingAt=-1);const O=this.validationMode!=="off"?this.validationDelta:this.captureActive?f??0:k;this.camera.update(O,l.autoOrbit);const R=this.validationPoseSequence?.shift();R&&this.camera.setState(R);const N=this.camera.poseKey(),j=N!==this.lastPoseKey||this.validationMode==="moving";this.lastPoseKey=N,j&&(this.geoDirty=!0);const Z=g1(l),{tanHalfFov:P,diskInner:Y,diskOuter:C,spin:I,pivotOmega:K}=Z;if(h){const de=O*l.diskSpeed*4.5;this.tDisk=(this.tDisk+de)%Pv;const Pe=Math.SQRT1_2*Math.pow(C/25,1.5);this.debrisPhase=(this.debrisPhase-Pe*K*de)%(2*Math.PI),this.shadeDirty=!0}this.validationMode!=="off"&&(this.shadeDirty=!0);const X=this.camera,{pos:ae,basis:le}=v1(X),Se=[le[0],le[1],le[2]],ce=[le[6],le[7],le[8]];let ke=this.geoDirty;const ze=Math.hypot(ae[0]-this.prevPos[0],ae[1]-this.prevPos[1],ae[2]-this.prevPos[2]),B=Math.acos(Math.min(1,Math.max(-1,ce[0]*this.prevFw[0]+ce[1]*this.prevFw[1]+ce[2]*this.prevFw[2]))),F=Math.acos(Math.min(1,Math.max(-1,Se[0]*this.prevRt[0]+Se[1]*this.prevRt[1]+Se[2]*this.prevRt[2])));this.prevPos=ae,this.prevFw=[ce[0],ce[1],ce[2]],this.prevRt=[Se[0],Se[1],Se[2]];const $=Math.max(this.validationMode==="moving"?2:0,(B+ze/Math.max(this.camera.dist,3))/Math.max(P,.1),F)*(this.simH*.5),ge=this.historyCamera?.dist??X.dist,Ae=Math.abs(Math.log(X.dist/Math.max(ge,1e-6)))*this.simH*.5,E=this.captureActive?0:Math.min(1,Ae*og);let G=j?.16+.39*Math.min(1,$/3):.2;G+=(1-G)*E;const Q=G;let W=1;const ne=this.geoDirty||this.shadeDirty||this.skyDirty;ne?(this.accumN=0,this.captureActive&&(G=1,W=0)):c&&!h&&this.accumN<Zl&&(this.accumN===0&&(this.accumN=1),ke=!0,G=1/(this.accumN+1),W=0);let oe=ke||this.shadeDirty||this.skyDirty,Me=W===0?"idle":oe?"full-trace":"idle";const st=this.camera.isUserActive(n)||j&&ke&&$>2;for(Me!=="full-trace"&&(this.perfCompletions.length=0,this.perfSkips.length=0);this.perfCompletions.length&&n-this.perfCompletions[0]>Il;)this.perfCompletions.shift();for(;this.perfSkips.length&&n-this.perfSkips[0]>Il;)this.perfSkips.shift();const Ge=this.perfCompletions.length;let Ra=0,$a=0;if(Ge>=2){const de=n-this.perfCompletions[0];de>50&&(Ra=(Ge-1)*1e3/de);const Pe=[];for(let _e=Math.max(1,Ge-10);_e<Ge;_e++)Pe.push(this.perfCompletions[_e]-this.perfCompletions[_e-1]);Pe.sort((_e,nt)=>_e-nt),$a=Pe[Pe.length>>1]??0}const Mi=this.cameraStepKind(X),Ai=this.qualityGovernor.tick({now:n,scale:this.resScale,fpsCap:l.fpsCap,enabled:l.quality===0&&!this.captureActive,allowChanges:n>this.warmupUntil||st,streaming:Me==="full-trace",interactive:st,calm:Mi==="idle",heavy:Mi==="free",completedFps:Ra,completedCount:Ge,gpuFrameMs:$a,gpuBudgetMs:this.gpuProfiler?j?Sg:bg:void 0,timestampMs:this.gpuProfiler?.budgetSample(j,this.resScale),skipsPerSec:this.perfSkips.length/(Il/1e3)});Ai.changed&&(this.autoScale=Ai.scale,this.resScale=Ai.scale,this.perfCompletions.length=0,this.perfSkips.length=0,this.resizeSim(!0)&&(ke=!0,oe=!0,Me="full-trace",G=1,W=0));const $t=this.accumCarried&&ne&&c&&!this.captureActive&&this.validationMode==="off";this.accumCarried=!1,this.resizeRockBuffers();const ve=this.simTargets;if(!ve||!this.inlineBG){this.lastQualitySubmitted=!1;return}if(!oe&&!this.presentDirty){this.lastQualitySubmitted=!1,this.lastCompletionT=0,this.emitStats(n);return}this.histValid||(G=1,W=0);const Ti=this.device,zt=Ti.queue,Sr=480,Ue=Ti.createCommandEncoder();this.temporalMaterial?.resetCounters(),this.gpuProfiler?.begin(j,this.resScale,W!==0&&!this.captureActive);const ft=de=>this.gpuProfiler?.stamp(de),ra=l.starDens>.001;ra||(this.zoomStarReferencePose=null),ra&&this.starCatalog.update(Ue,l.starDens,ft);const wr=l.bloom>.004;if(this.skyDirty){const de=h1(l.galTilt*Math.PI/180,.6);zt.writeBuffer(this.skyU,0,new Float32Array([de[0],de[1],de[2],0,de[3],de[4],de[5],0,de[6],de[7],de[8],0,0,l.galBright,1.25*(Math.PI/2)/this.skyN,l.nebDens,l.nebSize,0,0,0]));const Pe=Ue.beginComputePass({timestampWrites:ft("sky")});Pe.setPipeline(this.pSky),Pe.setBindGroup(0,this.skyBG),Pe.dispatchWorkgroups(Math.ceil(this.skyN/8),Math.ceil(this.skyN/8),6),Pe.setPipeline(this.pSkyMip);let _e=this.skyN;for(const nt of this.skyMipBGs)_e=Math.max(1,Math.floor(_e/2)),Pe.setBindGroup(0,nt),Pe.dispatchWorkgroups(Math.ceil(_e/8),Math.ceil(_e/8),6);Pe.end()}ke&&(W===0?this.accumN++:this.accumN=1);let yn=!1;if(oe){const de=1-this.readIdx,Pe=Fv(Z,ae);let _e=[0,0];if(c&&this.histValid&&!(E>=1)){const he=W===0?this.accumN+1:this.jitterSeq=(this.jitterSeq&15)+1;_e=[p1(he,2)-.5,p1(he,3)-.5]}{if(this.stage.set([ae[0],ae[1],ae[2],P,le[0],le[1],le[2],this.simW/this.simH,le[3],le[4],le[5],.025,le[6],le[7],le[8],12.5,Y,C,l.diskH,Pe,this.tDisk,this.debrisPhase,I,K,this.simW,this.simH,l.diskBright,l.diskTemp,_e[0],_e[1],Z.charge*Z.charge,0],0),this.stage.set([Fl*this.rockPopulation(),-1,0,0,xg,1,0,this.validationOrderedRocks?1:0],32),zt.writeBuffer(this.debrisU,0,this.stage,0,40),this.debrisDepthLayers.writeRasterUniforms(this.stage),this.validationOrderedRocks&&(Ue.clearBuffer(this.microRecordsBuf),Ue.clearBuffer(this.largeRecordsBuf)),zt.writeBuffer(this.microCountBuf,0,new Uint32Array([0])),zt.writeBuffer(this.largeCountBuf,0,new Uint32Array([0])),this.pDebrisCull&&this.pDebrisExpandMicro&&this.pDebrisExpandLarge&&this.pDebrisCullFinalize){const se=Ue.beginComputePass({timestampWrites:ft("cull")});se.setPipeline(this.pDebrisCull),se.setBindGroup(0,this.debrisCullBG),se.dispatchWorkgroups(Math.ceil(Fl*this.rockPopulation()/64)),se.setPipeline(this.pDebrisExpandMicro),se.setBindGroup(0,this.debrisExpandBG);const ye=Math.ceil(mr*this.rockPopulation()/64);se.dispatchWorkgroups(Math.min(ye,65535),Math.ceil(ye/65535)),se.setPipeline(this.pDebrisExpandLarge),se.setBindGroup(0,this.debrisExpandLargeBG),se.dispatchWorkgroups(Math.ceil(gr*this.rockPopulation()/64)),se.setPipeline(this.pDebrisCullFinalize),se.setBindGroup(0,this.debrisCullFinalizeBG),se.dispatchWorkgroups(1),se.end()}const he=this.debrisDepthLayers,Ie=(se,ye)=>{const rt=Ue.beginRenderPass({timestampWrites:ft(se),colorAttachments:ye.flatMap(dt=>[he.colorViews[dt],he.distanceViews[dt]]).map(dt=>({view:dt,clearValue:{r:0,g:0,b:0,a:0},loadOp:"clear",storeOp:"store"})),depthStencilAttachment:{view:this.debrisDepthView,depthLoadOp:"clear",depthClearValue:1,depthStoreOp:"discard"}});rt.setPipeline(this.pDebris),rt.setBindGroup(0,he.renderGroups[ye[0]]),this.validationHideDebris||rt.drawIndirect(this.debrisArgsLarge,0),rt.setPipeline(this.pDebrisMicro),this.validationHideDebris||rt.drawIndirect(this.debrisArgsMicro,16),rt.end()};if(this.rockLayersAtOnce)Ie("debris",[0,1,2]);else for(let se=0;se<3;se++)Ie("debris-"+se,[se])}const nt=!j&&$<.25,za=this.lensMapFixed(X),ei=za?cg:ug;let Je=this.simW,xt=this.simH;const ot=Math.ceil((nt?lg:sg)*(1-E)+8*E),Ar=y&&W!==0&&this.validationMode!=="exact",xn=Ar&&ot===1&&za&&Math.abs(X.yaw-(this.historyCamera?.yaw??X.yaw))<=Kd,Tr=xn?this.frames>>2&7:this.frames&7,ti=xn?[0,3,1,2][this.frames&3]:-1;if(Ar){const he=ot;xn?(Je=Math.ceil(this.simW/4),xt=Math.ceil(this.simH/8)):he===1?(Je=Math.ceil(this.simW/2),xt=Math.ceil(this.simH/4)):he===2?(Je=Math.ceil(this.simW/2),xt=Math.ceil(this.simH/2)):he===4?Je=Math.ceil(this.simW/2):he!==8&&(Je=Math.ceil(this.simW/2)*he,xt=Math.ceil(this.simH/4))}let ea,bt=null,Lt=null;{this.frameStamp=this.frameStamp%65535+1;const he=y1(Z,l,X,{pos:ae,basis:le},qv(l),this.simW,this.simH,Sr,0,_e,this.frameStamp);this.repairQueue.prepare({width:this.simW,height:this.simH,temporal:y,orderTile:fg}),(this.repairBoundQueue!==this.repairQueue.refineQueue||!this.repairGroup)&&(this.repairBoundQueue=this.repairQueue.refineQueue,this.repairGroup=this.repairQueue.refineGroup(this.inlineBGL,this.inlineEntries.map(ye=>ye.binding===2?{binding:2,resource:ve.bucketPrefixWarp.createView({dimension:"2d-array"})}:ye.binding===17?{binding:17,resource:ve.materialFrontWarp.createView()}:ye.binding===24?{binding:24,resource:ve.materialPointWarp.createView()}:ye))),bt=he,zt.writeBuffer(this.inlineGeoU,0,he);const Ie=[l.diskTemp,l.diskBright,this.tDisk,this.debrisPhase,l.beaming?1:0,l.redshift?1:0,Pe,K,l.diskHaze,2*P/this.simH,j?0:1,W===0||!y||this.validationMode==="exact"||E>=1?1:0,$m,eg,tg,ag,ig,ng,ot,Tr,rg,ti],se=new Float32Array(Ie);Lt=se,zt.writeBuffer(this.inlineU,0,se),y&&this.repairQueue.refinementUniforms(he,se),ea=Ue.beginComputePass({timestampWrites:ft("march")}),ea.setPipeline(v),ea.setBindGroup(0,this.inlineBG)}if(ea.dispatchWorkgroups(Math.ceil(Je/8),Math.ceil(xt/8)),ea.end(),y){const he=[this.simW,this.simH,1];{const Ie=new ArrayBuffer(144),se=new Uint32Array(Ie),ye=new Float32Array(Ie),rt=this.historyCamera,dt=!!rt&&rt.pitch===X.pitch&&rt.dist===X.dist&&rt.lookYaw===X.lookYaw&&rt.lookPitch===X.lookPitch;se.set([this.simW,this.simH,this.frameStamp,3|(dt?4:0)]),ye.set([j?$:0,h?O*l.diskSpeed*4.5:0,l.spin,l.charge*l.charge,l.diskOut,dg,hg,pg,za?gg:mg,ei*2*P/this.simH,this.histValid?1:0,vg],4);const Ye=this.prevBasis;for(let $e=0;$e<3;$e++)for(let Nt=0;Nt<3;Nt++){let Ci=Ye?0:$e===Nt?1:0;if(Ye)for(let ki=0;ki<3;ki++)Ci+=le[3*ki+$e]*Ye[3*ki+Nt];ye[16+4*$e+Nt]=Ci}ye.set(ae,28),ye[31]=yg,ye.set([ot,Tr,ti],32),this.temporalMaterial.run(Ue,{textures:{previousFront:ve.materialFrontPrev,previousPoint:ve.materialPointPrev,currentFront:ve.inlineFront,currentPoint:ve.materialPoint,currentPrefix:ve.bucketPrefix,warpedFront:ve.materialFrontWarp,warpedPoint:ve.materialPointWarp,warpedPrefix:ve.bucketPrefixWarp,currentRay:ve.gRay,previousRay:ve.gRayPrev},queue:this.repairQueue.refineQueue,sampler:this.samp,uniform:Ie,stamp:()=>ft("reprojection")}),this.repairQueue.refine(Ue,v,this.repairGroup,!za,ft),Ue.copyTextureToTexture({texture:ve.bucketPrefixWarp},{texture:ve.bucketPrefix},[this.simW,this.simH,3]),Ue.copyTextureToTexture({texture:ve.materialFrontWarp},{texture:ve.inlineFront},he),Ue.copyTextureToTexture({texture:ve.materialPointWarp},{texture:ve.materialPoint},he)}Ue.copyTextureToTexture({texture:ve.materialPoint},{texture:ve.materialPointPrev},he),Ue.copyTextureToTexture({texture:ve.inlineFront},{texture:ve.materialFrontPrev},he)}const ai=this.prevBasis,Wt=this.stage.subarray(0,12);Wt.fill(0);let Rr=0;if(ai)for(let he=0;he<3;he++)for(let Ie=0;Ie<3;Ie++){let se=0;for(let ye=0;ye<3;ye++)se+=le[3*ye+he]*ai[3*ye+Ie];Wt[4*he+Ie]=se,Math.abs(se-(he===Ie?1:0))>1e-7&&(Rr=1)}this.prevBasis=Float32Array.from(le),Wt[3]=this.frameStamp,Wt[7]=Rr,Wt[11]=!c||E>=1?1:0,zt.writeBuffer(this.rayAdvanceU,0,this.stage,0,12);const zi=!!(b&&x&&bt&&Lt&&c&&(E<1||ra)),ii=!l.taa||this.captureActive||this.validationMode==="exact",Ca=zi&&ra&&E>=1&&!ii;if(!(zi&&!Ca))if(this.pRayAdvance){const he=Ue.beginComputePass({timestampWrites:ft("advance")});he.setPipeline(this.pRayAdvance),he.setBindGroup(0,this.rayAdvanceBG),he.dispatchWorkgroups(Math.ceil(this.simW/8),Math.ceil(this.simH/8)),he.end()}else Ue.copyTextureToTexture({texture:ve.gRay},{texture:ve.gRayFinal},[this.simW,this.simH,1]);if(zi&&b&&x&&bt&&Lt){const he=Ca;he&&(this.zoomStarReferencePose={...X});const Ie=this.zoomStarReferencePose;Ie&&(Ie.pitch!==X.pitch||Ie.dist!==X.dist)&&(this.zoomStarReferencePose=null);const se=ii?{...X}:this.zoomStarReferencePose??{...X,yaw:0,lookYaw:0,lookPitch:0},ye=v1(se),rt=th(ye.pos,l.spin,{right:[ye.basis[0],ye.basis[1],ye.basis[2]],up:[ye.basis[3],ye.basis[4],ye.basis[5]],forward:[ye.basis[6],ye.basis[7],ye.basis[8]]},l.charge),dt=y1(Z,l,se,ye,.055,this.simW,this.simH,bt[24],0,[0,0],this.frameStamp),Ye=[this.simW,this.simH,X.pitch,X.dist,se.yaw,se.lookYaw,se.lookPitch,l.spin,l.charge,l.extension,l.fov,bt[21],bt[22],bt[23],bt[24]].join(":");this.stableStarField.run(Ue,{key:Ye,referenceGeometry:dt,referenceAxes:[rt.contravariant.right,rt.contravariant.up,rt.contravariant.forward],geometry:bt,material:Lt,yaw:X.yaw-se.yaw,direct:ii||X.lookYaw===se.lookYaw&&X.lookPitch===se.lookPitch,adopt:he,target:ve.gRayFinal,rawRay:ve.gRay,layout:this.inlineBGL,entries:this.inlineEntries,build:b,reuse:x,stamp:ft})}Ue.copyTextureToTexture({texture:ve.gRayFinal},{texture:ve.gRayPrev},[this.simW,this.simH,1]),this.debrisDepthLayers.compose(Ue,this.camera.dist,Z.rPlus,ft("bucket-compose")),Ue.copyTextureToTexture({texture:ve.bucketInfo},{texture:ve.bucketSpanPrev},[this.simW,this.simH,1]);const as=c?$t?Q:G:1,zr=c?$t?1:W:0;this.stage.set([as,zr],0),zt.writeBuffer(this.taaU,0,this.stage,0,2);const ni=Ue.beginComputePass({timestampWrites:ft("taa")});ni.setPipeline(this.pTaa),ni.setBindGroup(0,this.taaBG[de]),ni.dispatchWorkgroups(Math.ceil(this.simW/8),Math.ceil(this.simH/8)),ni.end(),this.readIdx=de,this.histValid=!0,yn=!0}if(wr&&(yn||this.bloomStale)){const Pe=m1(this.simW,this.simH).map(([nt,za])=>[Math.ceil(nt/8),Math.ceil(za/8)]),_e=Ue.beginComputePass({timestampWrites:ft("bloom")});_e.setPipeline(this.pBright),_e.setBindGroup(0,this.brightBG[this.readIdx]),_e.dispatchWorkgroups(...Pe[0]),_e.setPipeline(this.pHalationDown);for(let nt=0;nt<3;nt++)_e.setBindGroup(0,this.halationDownBGs[nt]),_e.dispatchWorkgroups(...Pe[nt+1]);_e.setPipeline(this.pHalationUp);for(let nt=0;nt<3;nt++)_e.setBindGroup(0,this.halationUpBGs[nt]),_e.dispatchWorkgroups(...Pe[2-nt]);_e.end(),this.bloomStale=!1}yn&&!wr&&(this.bloomStale=!0);const Fe=h1(l.galTilt*Math.PI/180,.6);this.stage.set([this.canvas.width,this.canvas.height,l.bloom,l.exposure,Math.max(0,.75*(1-this.resScale))+(this.resScale<1?.12:0),l.starDens,0,0,Fe[0],Fe[1],Fe[2],ra?1:0,Fe[3],Fe[4],Fe[5],l.windowStarlight,Fe[6],Fe[7],Fe[8],l.starFilterWidth],0),zt.writeBuffer(this.compU,0,this.stage,0,20);const Ri=Ue.beginRenderPass({timestampWrites:ft("composite"),colorAttachments:[{view:this.ctx.getCurrentTexture().createView(),loadOp:"clear",clearValue:{r:0,g:0,b:0,a:1},storeOp:"store"}]});Ri.setPipeline(this.pComposite),Ri.setBindGroup(0,this.compBG[this.readIdx]),Ri.draw(3),Ri.end();const Er=this.gpuProfiler?.resolveFrame(Ue);if(zt.submit([Ue.finish()]),Er?.(),this.validationFrameListener?.(),this.firstFramePresented||(this.firstFramePresented=!0,this.onProgress?.(1)),this.captureBlitResolve&&this.captureBlitCanvas){this.captureBlitCanvas.getContext("2d").drawImage(this.canvas,0,0);const Pe=this.captureBlitResolve;this.captureBlitResolve=null,this.captureBlitReject=null,Pe()}this.framesInFlight++;const Mr=this.startGen;zt.onSubmittedWorkDone().then(()=>{if(this.startGen!==Mr)return;this.framesInFlight=Math.max(0,this.framesInFlight-1);const de=performance.now();this.lastCompletionT&&this.completionDts.push(de-this.lastCompletionT),this.lastCompletionT=de,this.completedFrames++,this.perfCompletions.push(de)}),this.lastQualitySubmitted=!0,this.skyDirty=this.geoDirty=this.shadeDirty=this.presentDirty=!1,this.historyCamera=this.camera.getState(),this.frames++,this.emitStats(n)}emitStats(n){if(this.statT0||(this.statT0=n),n-this.statT0>500){const o=(n-this.statT0)/1e3,l=this.completionDts.slice().sort((h,g)=>h-g),c=l.length?l[Math.min(l.length-1,Math.ceil(l.length*.95)-1)]:0,f=this.gpuProfiler?.report();this.onStats?.({fps:Math.round(this.completedFrames/o),p95Ms:Math.round(c),simW:this.simW,simH:this.simH,resScale:this.resScale,gpuFrameMs:f?.frameMs,gpuMarchMs:f?Object.entries(f.passes).reduce((h,[g,y])=>h+(g==="march"||g.endsWith("geodesic-refine")||g==="history-repair"?y:0),0):void 0}),this.completedFrames=0,this.statT0=n,this.completionDts.length=0}}}const x1=u=>{let n;const o=new Set,l=(v,b)=>{const x=typeof v=="function"?v(n):v;if(!Object.is(x,n)){const w=n;n=b??(typeof x!="object"||x===null)?x:Object.assign({},n,x),o.forEach(T=>T(n,w))}},c=()=>n,g={setState:l,getState:c,getInitialState:()=>y,subscribe:v=>(o.add(v),()=>o.delete(v))},y=n=u(l,c,g);return g},Qv=(u=>u?x1(u):x1),Wv=u=>u;function Xv(u,n=Wv){const o=hr.useSyncExternalStore(u.subscribe,hr.useCallback(()=>n(u.getState()),[u,n]),hr.useCallback(()=>n(u.getInitialState()),[u,n]));return hr.useDebugValue(o),o}const Kv=u=>{const n=Qv(u),o=l=>Xv(n,l);return Object.assign(o,n),o},rh=(u=>Kv);function lh(u,n){let o;try{o=u()}catch{return}return{getItem:c=>{var f;const h=y=>y===null?null:JSON.parse(y,void 0),g=(f=o.getItem(c))!=null?f:null;return g instanceof Promise?g.then(h):h(g)},setItem:(c,f)=>o.setItem(c,JSON.stringify(f,void 0)),removeItem:c=>o.removeItem(c)}}const Ru=u=>n=>{try{const o=u(n);return o instanceof Promise?o:{then(l){return Ru(l)(o)},catch(l){return this}}}catch(o){return{then(l){return this},catch(l){return Ru(l)(o)}}}},Jv=(u,n)=>(o,l,c)=>{let f={storage:lh(()=>window.localStorage),partialize:R=>R,version:0,merge:(R,N)=>({...N,...R}),...n},h=!1,g=0;const y=new Set,v=new Set;let b=f.storage;if(!b)return u((...R)=>{console.warn(`[zustand persist middleware] Unable to update item '${f.name}', the given storage is currently unavailable.`),o(...R)},l,c);const x=()=>{const R=f.partialize({...l()});return b.setItem(f.name,{state:R,version:f.version})},w=c.setState;c.setState=(R,N)=>(w(R,N),x());const T=u((...R)=>(o(...R),x()),l,c);c.getInitialState=()=>T;let k;const O=()=>{var R,N;if(!b)return;const j=++g;h=!1,y.forEach(P=>{var Y;return P((Y=l())!=null?Y:T)});const Z=((N=f.onRehydrateStorage)==null?void 0:N.call(f,(R=l())!=null?R:T))||void 0;return Ru(b.getItem.bind(b))(f.name).then(P=>{if(P)if(typeof P.version=="number"&&P.version!==f.version){if(f.migrate){const Y=f.migrate(P.state,P.version);return Y instanceof Promise?Y.then(C=>[!0,C]):[!0,Y]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,P.state];return[!1,void 0]}).then(P=>{var Y;if(j!==g)return;const[C,I]=P;if(k=f.merge(I,(Y=l())!=null?Y:T),o(k,!0),C)return x()}).then(()=>{j===g&&(Z?.(l(),void 0),k=l(),h=!0,v.forEach(P=>P(k)))}).catch(P=>{j===g&&Z?.(void 0,P)})};return c.persist={setOptions:R=>{f={...f,...R},R.storage&&(b=R.storage)},clearStorage:()=>{b?.removeItem(f.name)},getOptions:()=>f,rehydrate:()=>O(),hasHydrated:()=>h,onHydrate:R=>(y.add(R),()=>{y.delete(R)}),onFinishHydration:R=>(v.add(R),()=>{v.delete(R)})},f.skipHydration||O(),k||T},$v=Jv,e3={spin:.98,charge:0,extension:!0,diskOut:15,diskH:.055,diskTemp:5600,diskBright:1.15,diskSpeed:.55,diskHaze:.62,diskFlare:1.45,smokeOpacity:1,smokeThickness:1,rockPopulation:4,playing:!0,beaming:!0,redshift:!0,starDens:.8,windowStarlight:1,starFilterWidth:1,galBright:.75,galTilt:14,nebDens:1.4,nebSize:2,nebCount:3,quality:0,fov:55,taa:!0,bloom:.7,exposure:1.05,fpsCap:60,autoOrbit:!0,captureScale:1,photoSamples:64,clipSeconds:5,clipFps:30,clipSamples:8,topoHorizon:0,topoErgo:0,topoGrid:.6,topoEdge:1.2,ringGlow:1,ringWidth:.02,ctcTint:0},t3=3,sh=[["spin",0,.98],["charge",0,.98],["topoHorizon",0,1],["topoErgo",0,1],["topoGrid",0,2],["topoEdge",0,3],["ringGlow",0,4],["ringWidth",.002,.2],["ctcTint",0,1],["diskFlare",1,2],["smokeOpacity",1,3],["smokeThickness",1,1.8],["rockPopulation",1,8],["windowStarlight",.25,4],["starFilterWidth",.5,2]],a3=new Set(["diskFlare","smokeOpacity","smokeThickness","rockPopulation","windowStarlight","starFilterWidth"]),i3=sh.filter(([u])=>a3.has(u));function n3(u){const n={...u,rockPopulation:Math.round(u.rockPopulation)},o=n;for(const[l,c,f]of i3)o[l]=Math.min(f,Math.max(c,o[l]));return n}function b1(u,n){return u.spin*u.spin+u.charge*u.charge<=Bu?u:"charge"in n&&!("spin"in n)?{...u,charge:Tu(u.spin)}:{...u,spin:W1(u.charge)}}const oh="astra.params.v1";function zu(u,n){return Math.min(u,n)>=560?"desktop":u>n?"landscape":"portrait"}const S1=(()=>{try{return!localStorage.getItem(oh)&&zu(window.innerWidth,window.innerHeight)!=="desktop"}catch{return!1}})(),je=rh()((u,n)=>({stats:{fps:0,p95Ms:0,simW:0,simH:0,resScale:0},offCenter:!1,hintDone:!1,activeSec:"presets",loadProgress:0,capture:null,setStats:o=>{const l=n().stats;(l.fps!==o.fps||l.p95Ms!==o.p95Ms||l.simW!==o.simW||l.simH!==o.simH||l.resScale!==o.resScale||l.gpuFrameMs!==o.gpuFrameMs||l.gpuMarchMs!==o.gpuMarchMs)&&u({stats:o})},setOffCenter:o=>{n().offCenter!==o&&u({offCenter:o})},setHintDone:()=>{n().hintDone||u({hintDone:!0})},setActiveSec:o=>{n().activeSec!==o&&u({activeSec:o})},setLoadProgress:o=>{const l=n().loadProgress;(o>l||o<l-.5)&&u({loadProgress:o})},setCapture:o=>u({capture:o})}));let w1=0,pr=null;const Hu=()=>{if(pr){try{localStorage.setItem(pr[0],pr[1])}catch{}pr=null}};window.addEventListener("pagehide",Hu);document.addEventListener("visibilitychange",()=>{document.hidden&&Hu()});const r3={getItem:u=>localStorage.getItem(u),removeItem:u=>localStorage.removeItem(u),setItem:(u,n)=>{pr=[u,n],window.clearTimeout(w1),w1=window.setTimeout(Hu,400)}},Qt=rh()($v(u=>({params:e3,panelOpen:!S1,secOpen:S1?{presets:!0,space:!1,disk:!1,env:!1,render:!1}:{presets:!0,space:!0,disk:!0,env:!0,render:!0},set:n=>u(o=>({params:b1(n3({...o.params,...n}),n)})),setPanelOpen:n=>u({panelOpen:n}),toggleSec:n=>u(o=>({secOpen:{...o.secOpen,[n]:!o.secOpen[n]}}))}),{name:oh,storage:lh(()=>r3),partialize:u=>({params:u.params,panelOpen:u.panelOpen,secOpen:u.secOpen,defaults:t3}),merge:(u,n)=>{const o=u;if(!o||typeof o!="object")return n;const l={...n.params};for(const v in o.params??{}){const b=v;b in l&&typeof o.params[b]==typeof l[b]&&(l[b]=o.params[b])}const c=o.params&&typeof o.params=="object"?o.params:{},f=v=>typeof v=="number"?v:void 0,h=(v,b)=>{!(v in c)&&b!==void 0&&(l[v]=b)};h("diskFlare",c.expFlare===!1?1:f(c.expFlareScale)),h("smokeOpacity",c.expSmokeVeil===!0?f(c.expSmokeOpacity):1),h("smokeThickness",c.expSmokeVeil===!0?f(c.expSmokeThickness):1),h("rockPopulation",c.expMoreRocks===!0?f(c.expRockPopulation):4),h("windowStarlight",f(c.expWindowStarBrightness)),h("starFilterWidth",f(c.expWindowStarFilter));const g=typeof o.defaults=="number"?o.defaults:1;g<2&&(l.topoHorizon=n.params.topoHorizon,l.topoErgo=n.params.topoErgo,l.ctcTint=n.params.ctcTint),g===2&&(l.ringGlow=n.params.ringGlow),l.diskH=Math.min(.2,Math.max(0,l.diskH)),l.nebDens=Math.min(2,Math.max(0,l.nebDens)),l.nebCount=Math.min(10,Math.max(0,Math.round(l.nebCount))),l.nebSize=Math.min(2.5,Math.max(.3,l.nebSize)),l.rockPopulation=Math.round(l.rockPopulation),l.quality=Math.min(100,Math.max(0,Math.round(l.quality)));const y=l;for(const[v,b,x]of sh)y[v]=Math.min(x,Math.max(b,y[v]));return{...n,params:b1(l,{charge:l.charge}),panelOpen:typeof o.panelOpen=="boolean"?o.panelOpen:n.panelOpen,secOpen:{...n.secOpen,...o.secOpen??{}}}}})),Aa={current:null};function l3(){const u=p.useRef(null),[n,o]=p.useState(null),l=Qt(c=>c.params);return p.useEffect(()=>{const c=u.current;if(!c)return;const f=new Iv(c,Qt.getState().params);Aa.current=f,f.onStats=y=>je.getState().setStats(y),f.onError=y=>{o(y),je.getState().setLoadProgress(1)},f.onReady=()=>o(null),f.onProgress=y=>je.getState().setLoadProgress(y),f.camera.onInteract=()=>je.getState().setHintDone(),f.camera.attach(c),f.start();const h=new ResizeObserver(()=>f.resize());h.observe(c);const g=setInterval(()=>{je.getState().setOffCenter(f.camera.offCenter)},300);return()=>{clearInterval(g),h.disconnect(),f.dispose(),Aa.current=null}},[]),p.useEffect(()=>{Aa.current?.setParams(l)},[l]),A.jsxs(A.Fragment,{children:[A.jsx("canvas",{ref:u,className:"absolute left-0 top-0 block h-lvh w-lvw"}),n&&A.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-ground p-8 text-center text-[13px] leading-relaxed text-neutral-500",children:A.jsx("div",{className:"max-w-xl whitespace-pre-line",children:n})})]})}function uh(u,[n,o]){return Math.min(o,Math.max(n,u))}function mn(u,n,{checkForDefaultPrevented:o=!0}={}){return function(c){if(u?.(c),o===!1||!c||!c.defaultPrevented)return n?.(c)}}function E1(u,n){if(typeof u=="function")return u(n);u!=null&&(u.current=n)}function s3(...u){return n=>{let o=!1;const l=u.map(c=>{const f=E1(c,n);return!o&&typeof f=="function"&&(o=!0),f});if(o)return()=>{for(let c=0;c<l.length;c++){const f=l[c];typeof f=="function"?f():E1(u[c],null)}}}}function Ta(...u){return p.useCallback(s3(...u),u)}function ch(u,n=[]){let o=[];function l(f,h){const g=p.createContext(h);g.displayName=f+"Context";const y=o.length;o=[...o,h];const v=x=>{const{scope:w,children:T,...k}=x,O=w?.[u]?.[y]||g,R=p.useMemo(()=>k,Object.values(k));return A.jsx(O.Provider,{value:R,children:T})};v.displayName=f+"Provider";function b(x,w,T={}){const{optional:k=!1}=T,O=w?.[u]?.[y]||g,R=p.useContext(O);if(R)return R;if(h!==void 0)return h;if(!k)throw new Error(`\`${x}\` must be used within \`${f}\``)}return[v,b]}const c=()=>{const f=o.map(h=>p.createContext(h));return function(g){const y=g?.[u]||f;return p.useMemo(()=>({[`__scope${u}`]:{...g,[u]:y}}),[g,y])}};return c.scopeName=u,[l,o3(c,...n)]}function o3(...u){const n=u[0];if(u.length===1)return n;const o=()=>{const l=u.map(c=>({useScope:c(),scopeName:c.scopeName}));return function(f){const h=l.reduce((g,{useScope:y,scopeName:v})=>{const x=y(f)[`__scope${v}`];return{...g,...x}},{});return p.useMemo(()=>({[`__scope${n.scopeName}`]:h}),[h])}};return o.scopeName=n.scopeName,o}var fh=globalThis?.document?p.useLayoutEffect:()=>{},u3=_1[" useInsertionEffect ".trim().toString()]||fh;function c3({prop:u,defaultProp:n,onChange:o=()=>{},caller:l}){const[c,f,h]=f3({defaultProp:n,onChange:o}),g=u!==void 0,y=g?u:c;{const b=p.useRef(u!==void 0);p.useEffect(()=>{const x=b.current;x!==g&&console.warn(`${l} is changing from ${x?"controlled":"uncontrolled"} to ${g?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),b.current=g},[g,l])}const v=p.useCallback(b=>{if(g){const x=d3(b)?b(u):b;x!==u&&h.current?.(x)}else f(b)},[g,u,f,h]);return[y,v]}function f3({defaultProp:u,onChange:n}){const[o,l]=p.useState(u),c=p.useRef(o),f=p.useRef(n);return u3(()=>{f.current=n},[n]),p.useEffect(()=>{c.current!==o&&(f.current?.(o),c.current=o)},[o,c]),[o,l,f]}function d3(u){return typeof u=="function"}var h3=p.createContext(void 0);function p3(u){const n=p.useContext(h3);return u||n||"ltr"}function m3(u){const n=p.useRef({value:u,previous:u});return p.useMemo(()=>(n.current.value!==u&&(n.current.previous=n.current.value,n.current.value=u),n.current.previous),[u])}function g3(u){const[n,o]=p.useState(void 0);return fh(()=>{if(u){o({width:u.offsetWidth,height:u.offsetHeight});const l=new ResizeObserver(c=>{if(!Array.isArray(c)||!c.length)return;const f=c[0];let h,g;if("borderBoxSize"in f){const y=f.borderBoxSize,v=Array.isArray(y)?y[0]:y;h=v.inlineSize,g=v.blockSize}else h=u.offsetWidth,g=u.offsetHeight;o({width:h,height:g})});return l.observe(u,{box:"border-box"}),()=>l.unobserve(u)}else o(void 0)},[u]),n}k1();function Cu(u){const n=p.forwardRef((o,l)=>{let{children:c,...f}=o,h=null,g=!1;const y=[];M1(c)&&typeof Ql=="function"&&(c=Ql(c._payload)),p.Children.forEach(c,w=>{if(S3(w)){g=!0;const T=w;let k="child"in T.props?T.props.child:T.props.children;M1(k)&&typeof Ql=="function"&&(k=Ql(k._payload)),h=y3(T,k),y.push(h?.props?.children)}else y.push(w)}),h?h=p.cloneElement(h,void 0,y):!g&&p.Children.count(c)===1&&p.isValidElement(c)&&(h=c);const v=h?b3(h):void 0,b=Ta(l,v);if(!h){if(c||c===0)throw new Error(g?A3(u):M3(u));return c}const x=x3(f,h.props??{});return h.type!==p.Fragment&&(x.ref=l?b:v),p.cloneElement(h,x)});return n.displayName=`${u}.Slot`,n}var v3=Symbol.for("radix.slottable"),y3=(u,n)=>{if("child"in u.props){const o=u.props.child;return p.isValidElement(o)?p.cloneElement(o,void 0,u.props.children(o.props.children)):null}return p.isValidElement(n)?n:null};function x3(u,n){const o={...n};for(const l in n){const c=u[l],f=n[l];/^on[A-Z]/.test(l)?c&&f?o[l]=(...g)=>{const y=f(...g);return c(...g),y}:c&&(o[l]=c):l==="style"?o[l]={...c,...f}:l==="className"&&(o[l]=[c,f].filter(Boolean).join(" "))}return{...u,...o}}function b3(u){let n=Object.getOwnPropertyDescriptor(u.props,"ref")?.get,o=n&&"isReactWarning"in n&&n.isReactWarning;return o?u.ref:(n=Object.getOwnPropertyDescriptor(u,"ref")?.get,o=n&&"isReactWarning"in n&&n.isReactWarning,o?u.props.ref:u.props.ref||u.ref)}function S3(u){return p.isValidElement(u)&&typeof u.type=="function"&&"__radixId"in u.type&&u.type.__radixId===v3}var w3=Symbol.for("react.lazy");function M1(u){return u!=null&&typeof u=="object"&&"$$typeof"in u&&u.$$typeof===w3&&"_payload"in u&&E3(u._payload)}function E3(u){return typeof u=="object"&&u!==null&&"then"in u}var M3=u=>`${u} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,A3=u=>`${u} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,Ql=_1[" use ".trim().toString()],T3=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],xr=T3.reduce((u,n)=>{const o=Cu(`Primitive.${n}`),l=p.forwardRef((c,f)=>{const{asChild:h,...g}=c,y=h?o:n;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),A.jsx(y,{...g,ref:f})});return l.displayName=`Primitive.${n}`,{...u,[n]:l}},{});function R3(u){const n=u+"CollectionProvider",[o,l]=ch(n),[c,f]=o(n,{collectionRef:{current:null},itemMap:new Map}),h=O=>{const{scope:R,children:N}=O,j=p.useRef(null),Z=p.useRef(new Map).current;return A.jsx(c,{scope:R,itemMap:Z,collectionRef:j,children:N})};h.displayName=n;const g=u+"CollectionSlot",y=Cu(g),v=p.forwardRef((O,R)=>{const{scope:N,children:j}=O,Z=f(g,N),P=Ta(R,Z.collectionRef);return A.jsx(y,{ref:P,children:j})});v.displayName=g;const b=u+"CollectionItemSlot",x="data-radix-collection-item",w=Cu(b),T=p.forwardRef((O,R)=>{const{scope:N,children:j,...Z}=O,P=p.useRef(null),Y=Ta(R,P),C=f(b,N);return p.useEffect(()=>(C.itemMap.set(P,{ref:P,...Z}),()=>{C.itemMap.delete(P)})),A.jsx(w,{[x]:"",ref:Y,children:j})});T.displayName=b;function k(O){const R=f(u+"CollectionConsumer",O);return p.useCallback(()=>{const j=R.collectionRef.current;if(!j)return[];const Z=Array.from(j.querySelectorAll(`[${x}]`));return Array.from(R.itemMap.values()).sort((C,I)=>Z.indexOf(C.ref.current)-Z.indexOf(I.ref.current))},[R.collectionRef,R.itemMap])}return[{Provider:h,Slot:v,ItemSlot:T},k,l]}var dh=["PageUp","PageDown"],hh=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],ph={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},vn="Slider",[ku,z3,C3]=R3(vn),[Pu]=ch(vn,[C3]),[k3,br]=Pu(vn),mh=p.forwardRef((u,n)=>{const{name:o,min:l=0,max:c=100,step:f=1,orientation:h="horizontal",disabled:g=!1,minStepsBetweenThumbs:y=0,defaultValue:v=[l],value:b,onValueChange:x=()=>{},onValueCommit:w=()=>{},inverted:T=!1,form:k,...O}=u,R=p.useRef(new Set),N=p.useRef(0),j=p.useRef(!1),P=h==="horizontal"?_3:U3,[Y,C]=p.useState(null),I=Ta(n,C),[K=[],X]=c3({prop:b,defaultProp:v,onChange:B=>{[...R.current][N.current]?.focus({preventScroll:!0,focusVisible:j.current}),j.current=!1,x(B)}}),ae=p.useRef(K),le=p.useRef(K);p.useEffect(()=>{const B=k?Y?.ownerDocument.getElementById(k):Y?.closest("form");if(B instanceof HTMLFormElement){const F=()=>X(le.current);return B.addEventListener("reset",F),()=>B.removeEventListener("reset",F)}},[Y,k,X]);function Se(B){const F=L3(K,B);ze(B,F)}function ce(B){ze(B,N.current)}function ke(){const B=ae.current[N.current];K[N.current]!==B&&w(K)}function ze(B,F,{commit:$}={commit:!1}){const ge=_h(f),Ae=Kl(Math.round((B-l)/f)*f+l,ge),E=uh(Ae,[l,c]);X((G=[])=>{const Q=O3(G,E,F);if(H3(Q,y*f)){N.current=Q.indexOf(E);const W=String(Q)!==String(G);return W&&$&&w(Q),W?Q:G}else return G})}return A.jsx(k3,{scope:u.__scopeSlider,name:o,disabled:g,min:l,max:c,valueIndexToChangeRef:N,thumbs:R.current,values:K,orientation:h,form:k,children:A.jsx(ku.Provider,{scope:u.__scopeSlider,children:A.jsx(ku.Slot,{scope:u.__scopeSlider,children:A.jsx(P,{"aria-disabled":g,"data-disabled":g?"":void 0,...O,ref:I,onPointerDown:mn(O.onPointerDown,()=>{g||(ae.current=K,j.current=!1)}),min:l,max:c,inverted:T,onSlideStart:g?void 0:Se,onSlideMove:g?void 0:ce,onSlideEnd:g?void 0:ke,onHomeKeyDown:()=>{g||(j.current=!0,ze(l,0,{commit:!0}))},onEndKeyDown:()=>{g||(j.current=!0,ze(c,K.length-1,{commit:!0}))},onStepKeyDown:({event:B,direction:F})=>{if(!g){j.current=!0;const Ae=dh.includes(B.key)||B.shiftKey&&hh.includes(B.key)?10:1,E=N.current,G=K[E],Q=P3(G,{min:l,step:f,direction:F,multiplier:Ae});ze(Q,E,{commit:!0})}}})})})})});mh.displayName=vn;var[gh,vh]=Pu(vn,{startEdge:"left",endEdge:"right",size:"width",direction:1}),_3=p.forwardRef((u,n)=>{const{min:o,max:l,dir:c,inverted:f,onSlideStart:h,onSlideMove:g,onSlideEnd:y,onStepKeyDown:v,...b}=u,[x,w]=p.useState(null),T=Ta(n,w),k=p.useRef(void 0),O=p3(c),R=O==="ltr",N=R&&!f||!R&&f;function j(Z){const P=k.current||x.getBoundingClientRect(),Y=[0,P.width],I=qu(Y,N?[o,l]:[l,o]);return k.current=P,I(Z-P.left)}return A.jsx(gh,{scope:u.__scopeSlider,startEdge:N?"left":"right",endEdge:N?"right":"left",direction:N?1:-1,size:"width",children:A.jsx(yh,{dir:O,"data-orientation":"horizontal",...b,ref:T,style:{...b.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:Z=>{const P=j(Z.clientX);h?.(P)},onSlideMove:Z=>{const P=j(Z.clientX);g?.(P)},onSlideEnd:()=>{k.current=void 0,y?.()},onStepKeyDown:Z=>{const Y=ph[N?"from-left":"from-right"].includes(Z.key);v?.({event:Z,direction:Y?-1:1})}})})}),U3=p.forwardRef((u,n)=>{const{min:o,max:l,inverted:c,onSlideStart:f,onSlideMove:h,onSlideEnd:g,onStepKeyDown:y,...v}=u,b=p.useRef(null),x=Ta(n,b),w=p.useRef(void 0),T=!c;function k(O){const R=w.current||b.current.getBoundingClientRect(),N=[0,R.height],Z=qu(N,T?[l,o]:[o,l]);return w.current=R,Z(O-R.top)}return A.jsx(gh,{scope:u.__scopeSlider,startEdge:T?"bottom":"top",endEdge:T?"top":"bottom",size:"height",direction:T?1:-1,children:A.jsx(yh,{"data-orientation":"vertical",...v,ref:x,style:{...v.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:O=>{const R=k(O.clientY);f?.(R)},onSlideMove:O=>{const R=k(O.clientY);h?.(R)},onSlideEnd:()=>{w.current=void 0,g?.()},onStepKeyDown:O=>{const N=ph[T?"from-bottom":"from-top"].includes(O.key);y?.({event:O,direction:N?-1:1})}})})}),yh=p.forwardRef((u,n)=>{const{__scopeSlider:o,onSlideStart:l,onSlideMove:c,onSlideEnd:f,onHomeKeyDown:h,onEndKeyDown:g,onStepKeyDown:y,...v}=u,b=br(vn,o);return A.jsx(xr.span,{...v,ref:n,onKeyDown:mn(u.onKeyDown,x=>{x.key==="Home"?(h(x),x.preventDefault()):x.key==="End"?(g(x),x.preventDefault()):dh.concat(hh).includes(x.key)&&(y(x),x.preventDefault())}),onPointerDown:mn(u.onPointerDown,x=>{const w=x.target;w.setPointerCapture(x.pointerId),x.preventDefault(),b.thumbs.has(w)?w.focus({preventScroll:!0,focusVisible:!1}):l(x)}),onPointerMove:mn(u.onPointerMove,x=>{x.target.hasPointerCapture(x.pointerId)&&c(x)}),onPointerUp:mn(u.onPointerUp,x=>{const w=x.target;w.hasPointerCapture(x.pointerId)&&(w.releasePointerCapture(x.pointerId),f(x))})})}),xh="SliderTrack",bh=p.forwardRef((u,n)=>{const{__scopeSlider:o,...l}=u,c=br(xh,o);return A.jsx(xr.span,{"data-disabled":c.disabled?"":void 0,"data-orientation":c.orientation,...l,ref:n})});bh.displayName=xh;var _u="SliderRange",Sh=p.forwardRef((u,n)=>{const{__scopeSlider:o,...l}=u,c=br(_u,o),f=vh(_u,o),h=p.useRef(null),g=Ta(n,h),y=c.values.length,v=c.values.map(w=>kh(w,c.min,c.max)),b=y>1?Math.min(...v):0,x=100-Math.max(...v);return A.jsx(xr.span,{"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,...l,ref:g,style:{...u.style,[f.startEdge]:b+"%",[f.endEdge]:x+"%"}})});Sh.displayName=_u;var wh="SliderThumb",[D3,Eh]=Pu(wh),Mh="SliderThumbProvider";function Ah(u){const{__scopeSlider:n,name:o,children:l,internal_do_not_use_render:c}=u,f=br(Mh,n),h=z3(n),[g,y]=p.useState(null),v=p.useMemo(()=>g?h().findIndex(R=>R.ref.current===g):-1,[h,g]),b=g3(g),x=g?!!f.form||!!g.closest("form"):!0,w=f.values[v],T=o??(f.name?f.name+(f.values.length>1?"[]":""):void 0),k=w===void 0?0:kh(w,f.min,f.max);p.useEffect(()=>{if(g)return f.thumbs.add(g),()=>{f.thumbs.delete(g)}},[g,f.thumbs]);const O={value:w,name:T,form:f.form,isFormControl:x,index:v,thumb:g,onThumbChange:y,percent:k,size:b};return A.jsx(D3,{scope:n,...O,children:q3(c)?c(O):l})}Ah.displayName=Mh;var Xl="SliderThumbTrigger",Th=p.forwardRef((u,n)=>{const{__scopeSlider:o,...l}=u,c=br(Xl,o),f=vh(Xl,o),{index:h,value:g,percent:y,size:v,onThumbChange:b}=Eh(Xl,o),x=Ta(n,b),w=B3(h,c.values.length),T=v?.[f.size],k=T?N3(T,y,f.direction):0;return A.jsx("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[f.startEdge]:`calc(${y}% + ${k}px)`},children:A.jsx(ku.ItemSlot,{scope:o,children:A.jsx(xr.span,{role:"slider","aria-label":u["aria-label"]||w,"aria-valuemin":c.min,"aria-valuenow":g,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...l,ref:x,style:g===void 0?{display:"none"}:u.style,onFocus:mn(u.onFocus,()=>{c.valueIndexToChangeRef.current=h})})})})});Th.displayName=Xl;var Rh=p.forwardRef((u,n)=>{const{__scopeSlider:o,name:l,...c}=u;return A.jsx(Ah,{__scopeSlider:o,name:l,internal_do_not_use_render:({index:f,isFormControl:h})=>A.jsxs(A.Fragment,{children:[A.jsx(Th,{...c,ref:n,__scopeSlider:o}),h?A.jsx(Ch,{__scopeSlider:o},f):null]})})});Rh.displayName=wh;var zh="SliderBubbleInput",Ch=p.forwardRef(({__scopeSlider:u,...n},o)=>{const{value:l,name:c,form:f}=Eh(zh,u),h=p.useRef(null),g=Ta(h,o),y=m3(l);return p.useEffect(()=>{const v=h.current;if(!v)return;const b=window.HTMLInputElement.prototype,w=Object.getOwnPropertyDescriptor(b,"value").set;if(y!==l&&w){const T=new Event("input",{bubbles:!0});w.call(v,l),v.dispatchEvent(T)}},[y,l]),A.jsx(xr.input,{style:{display:"none"},name:c,form:f,...n,ref:g,defaultValue:l})});Ch.displayName=zh;function O3(u=[],n,o){const l=[...u];return l[o]=n,l.sort((c,f)=>c-f)}function kh(u,n,o){const f=100/(o-n)*(u-n);return uh(f,[0,100])}function B3(u,n){return n>2?`Value ${u+1} of ${n}`:n===2?["Minimum","Maximum"][u]:void 0}function L3(u,n){if(u.length===1)return 0;const o=u.map(c=>Math.abs(c-n)),l=Math.min(...o);return o.indexOf(l)}function N3(u,n,o){const l=u/2,f=qu([0,50],[0,l]);return(l-f(n)*o)*o}function G3(u){return u.slice(0,-1).map((n,o)=>u[o+1]-n)}function H3(u,n){if(n>0){const o=G3(u);return Math.min(...o)>=n}return!0}function qu(u,n){return o=>{if(u[0]===u[1]||n[0]===n[1])return n[0];const l=(n[1]-n[0])/(u[1]-u[0]);return n[0]+l*(o-u[0])}}function _h(u){if(!Number.isFinite(u))return 0;const n=u.toString();if(n.includes("e")){const[l,c]=n.split("e"),f=l.split(".")[1]||"",h=Number(c);return Math.max(0,f.length-h)}const o=n.split(".")[1];return o?o.length:0}function Kl(u,n){const o=Math.pow(10,n);return Math.round(u*o)/o}function P3(u,{min:n,step:o,direction:l,multiplier:c}){const f=_h(o),h=(u-n)/o,g=Math.round(h),y=Kl(g*o+n,f)===Kl(u,f);let v;return y?v=g+c*l:l>0?v=Math.ceil(h):v=Math.floor(h),Kl(v*o+n,f)}function q3(u){return typeof u=="function"}const V3="linear-gradient(90deg,#b0421f 0%,#e08a35 30%,#f5daa6 55%,#f0f2ff 75%,#a9c2ff 100%)";function Ee(u){return A.jsxs("div",{className:"flex flex-col gap-px "+(u.disabled?"pointer-events-none opacity-40":""),children:[A.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[A.jsx("span",{className:"text-[12px] text-neutral-400",children:u.label}),A.jsx("span",{className:"tabular text-[11.5px] text-neutral-200",children:u.disp})]}),A.jsxs(mh,{className:"relative flex h-[18px] w-full touch-none select-none items-center pointer-coarse:h-8",min:u.min,max:u.max,step:u.step,value:[u.value],disabled:u.disabled,onValueChange:([n])=>u.onChange(n),children:[A.jsx(bh,{className:"relative h-[3px] grow rounded-full bg-neutral-800 pointer-coarse:h-1",style:u.tempTrack?{background:V3}:void 0,children:!u.tempTrack&&A.jsx(Sh,{className:"absolute h-full rounded-full bg-accent"})}),A.jsx(Rh,{"aria-label":u.label,className:"block size-[11px] cursor-pointer rounded-full border-[1.5px] border-accent bg-ground pointer-coarse:size-[18px]"})]})]})}function Ma(u){return A.jsxs("div",{className:"flex items-center justify-between gap-2",children:[A.jsx("span",{className:"text-[12px] text-neutral-400",children:u.label}),A.jsx("button",{onClick:u.onToggle,"aria-pressed":u.on,"aria-label":u.label,className:"cursor-pointer rounded-full border px-[11px] py-0.5 text-[11px] transition-colors pointer-coarse:px-4 pointer-coarse:py-1.5 "+(u.on?"border-accent bg-accent/14 text-accent-200 hover:bg-accent/22":"border-neutral-800 bg-transparent text-neutral-500 hover:border-neutral-600 hover:text-neutral-300"),children:u.on?"On":"Off"})]})}function j3(u){return A.jsx("div",{className:"flex gap-1 rounded-md border border-neutral-900 bg-neutral-900/45 p-1",children:u.options.map(n=>A.jsx("button",{title:n.tip,"aria-pressed":u.value===n.id,onClick:()=>u.onChange(n.id),className:"min-w-0 flex-1 cursor-pointer rounded-sm border px-0.5 py-[7px] text-[10.5px] font-medium transition-all pointer-coarse:py-[9px] "+(u.value===n.id?"border-accent bg-accent/12 text-accent-200 shadow-[0_0_10px] shadow-accent/18":"border-transparent text-neutral-400 hover:bg-ink/6 hover:text-neutral-200"),children:n.label},n.id))})}function dr(u){return A.jsxs("div",{"data-sec":u.id,className:"flex flex-none flex-col",children:[A.jsxs("button",{onClick:u.onToggle,className:"flex w-full cursor-pointer items-center gap-2 rounded-sm px-0.5 py-[7px] text-left hover:bg-ink/5 pointer-coarse:py-[11px]",children:[A.jsx("span",{className:"flex-none text-[14px] text-accent-300",children:u.icon}),A.jsx("span",{className:"whitespace-nowrap text-[10.5px] font-medium uppercase tracking-[0.12em] text-neutral-300",children:u.label}),A.jsx("span",{className:"tabular min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-right text-[10.5px] text-neutral-600",children:u.open?"":u.summary}),A.jsx(xm,{size:12,className:"flex-none text-neutral-500 transition-transform duration-[250ms]",style:{transform:`rotate(${u.open?180:0}deg)`}})]}),u.open&&A.jsx("div",{className:"flex flex-col gap-2.5 px-0.5 pb-1.5 pt-1",children:u.children})]})}const Jl=[{id:"eternal",label:"Eternal",sub:"maximal extension",view:{yawDeg:-29,pitchDeg:4.7,dist:13},p:{spin:.98,charge:0,extension:!0,diskOut:15,diskH:.055,diskTemp:5600,diskBright:1.15,diskSpeed:.55,beaming:!0,redshift:!0,starDens:.8,galBright:.75,galTilt:14,nebDens:1.4,nebSize:2,nebCount:3,fov:55,bloom:.7,exposure:1.05,playing:!0}},{id:"garg",label:"Gargantua",sub:"Interstellar",view:{yawDeg:-29,pitchDeg:4.7,dist:13},p:{spin:.98,charge:0,extension:!1,diskOut:15,diskH:.055,diskTemp:5600,diskBright:1.15,diskSpeed:.55,beaming:!0,redshift:!0,starDens:.8,galBright:.75,galTilt:14,nebDens:1.4,nebSize:2,nebCount:3,fov:55,bloom:.7,exposure:1.05,playing:!0}},{id:"m87",label:"M87*",sub:"EHT · 2019",view:{yawDeg:40,pitchDeg:72,dist:26},p:{spin:.9,charge:0,extension:!1,diskOut:16,diskH:.15,diskTemp:9500,diskBright:1,diskSpeed:.7,beaming:!0,redshift:!0,starDens:1,galBright:.9,galTilt:32,nebDens:.65,nebSize:.85,nebCount:3,fov:60,bloom:.7,exposure:1,playing:!0}}];function Z3(u){for(const n of Jl){let o=!0;for(const l in n.p){const c=l,f=n.p[c],h=u[c];if(typeof f=="number"?Math.abs(h-f)>1e-9:h!==f){o=!1;break}}if(o)return n.id}return null}const F3=[{id:"presets",label:"Presets"},{id:"space",label:"Spacetime"},{id:"disk",label:"Accretion disk"},{id:"env",label:"Environment"},{id:"render",label:"Render"}];function Y3(u){return A.jsxs("div",{className:"mt-1 flex items-center gap-2",children:[A.jsx("span",{className:"text-[9.5px] uppercase tracking-[0.14em] text-neutral-500",children:u.label}),A.jsx("span",{className:"h-px flex-1 bg-neutral-800"})]})}function I3(u){const n=Qt(C=>C.params),o=Qt(C=>C.secOpen),l=Qt(C=>C.set),c=Qt(C=>C.setPanelOpen),f=Qt(C=>C.toggleSec),h=je(C=>C.activeSec),g=je(C=>C.setActiveSec),y=je(C=>C.stats.resScale),v=p.useRef(null),b=p.useRef(0),x=p.useRef(n.bloom>.004?n.bloom:.7),{mode:w}=u,T=w==="portrait",k=Z3(n),O=n.fpsCap>0&&n.fpsCap<240,R=Math.max(1,Math.min(100,Math.round((y||.62)*100))),N=()=>{window.clearTimeout(b.current),b.current=window.setTimeout(()=>{const C=v.current;if(!C)return;const I=C.querySelectorAll("[data-sec]");if(!I.length)return;let K=I[0].dataset.sec;I.forEach(X=>{X.offsetTop<=C.scrollTop+72&&(K=X.dataset.sec)}),C.scrollTop+C.clientHeight>=C.scrollHeight-8&&(K=I[I.length-1].dataset.sec),g(K)},60)},j=C=>{const I=v.current,K=I?.querySelector(`[data-sec="${C}"]`);I&&K&&I.scrollTo({top:Math.max(0,K.offsetTop-10),behavior:"smooth"})},Z=C=>{const I=Jl.find(K=>K.id===C);l(I.p),Aa.current?.camera.setView(I.view)},P=C=>({open:o[C],onToggle:()=>f(C)}),Y=T?"inset-x-2.5 bottom-[calc(var(--sab)_+_10px)] h-[min(58dvh,470px)]":w==="landscape"?"top-2.5 right-[calc(var(--sar)_+_10px)] bottom-[calc(var(--sab)_+_10px)] w-[min(300px,46vw)]":"top-3.5 right-3.5 bottom-3.5 w-[302px]";return A.jsxs("div",{className:`glass-panel absolute z-30 overflow-hidden rounded-lg ${Y}`,children:[T&&A.jsx("button",{onClick:()=>c(!1),"aria-label":"Hide controls",className:"absolute inset-x-0 top-0 z-10 flex h-[22px] cursor-pointer items-center justify-center",children:A.jsx("span",{className:"h-1 w-[42px] rounded-full bg-neutral-700"})}),A.jsxs("div",{ref:v,onScroll:N,className:`no-scrollbar absolute inset-0 flex flex-col gap-3 overflow-y-auto overflow-x-hidden overscroll-contain pb-5 pl-4 pr-5 ${T?"pt-[26px]":"pt-3.5"}`,children:[A.jsxs("div",{className:"flex flex-none items-center justify-between",children:[A.jsx("span",{className:"text-[11px] uppercase tracking-[0.14em] text-neutral-400",children:"Controls"}),A.jsx("button",{onClick:()=>c(!1),"aria-label":"Hide controls",className:"flex cursor-pointer rounded-sm px-2 py-1 text-[14px] text-neutral-500 hover:bg-accent/10 hover:text-accent",children:A.jsx(F1,{size:14})})]}),A.jsx(dr,{id:"presets",icon:A.jsx(Mm,{}),label:"Presets",...P("presets"),summary:k?Jl.find(C=>C.id===k).label:"custom",children:A.jsx("div",{className:"flex gap-2",children:Jl.map(C=>{const I=k===C.id;return A.jsxs("button",{onClick:()=>Z(C.id),className:"flex flex-1 cursor-pointer flex-col items-start gap-px rounded-md border px-[11px] py-2 text-left transition-all pointer-coarse:px-3 pointer-coarse:py-[11px] "+(I?"border-accent bg-accent/11 shadow-[0_0_14px] shadow-accent/22":"border-neutral-800 hover:border-neutral-600 hover:bg-ink/5"),children:[A.jsxs("span",{className:"flex items-center gap-1.5",children:[A.jsx("span",{className:"size-1.5 flex-none rounded-full transition-all "+(I?"bg-accent shadow-[0_0_6px] shadow-accent":"bg-neutral-700")}),A.jsx("span",{className:"text-[12.5px] font-medium "+(I?"text-accent-200":"text-neutral-200"),children:C.label})]}),A.jsx("span",{className:"text-[10px] text-neutral-500",children:C.sub})]},C.id)})})}),A.jsx("div",{className:"hr-fade"}),A.jsxs(dr,{id:"space",icon:A.jsx(ym,{}),label:"Spacetime",...P("space"),summary:"a "+n.spin.toFixed(2)+(n.charge>.0025?" · q "+n.charge.toFixed(2):"")+" · r₊ "+$l(n.spin,n.charge).toFixed(2)+" · "+(n.extension?"eternal":"black hole"),children:[A.jsx(Ee,{label:"Black hole spin",min:0,max:Math.max(.005,W1(n.charge)),step:.005,value:n.spin,disp:"a/M "+n.spin.toFixed(3),onChange:C=>l({spin:C})}),A.jsx(Ee,{label:"Electric charge",min:0,max:Math.max(.005,Tu(n.spin)),step:.005,value:n.charge,disp:n.charge<.0025?"Neutral":"Q/M "+n.charge.toFixed(3),disabled:Tu(n.spin)<.005,onChange:C=>l({charge:C})}),A.jsx("div",{className:"tabular text-[10.5px] text-neutral-500",children:"horizons r₊ "+$l(n.spin,n.charge).toFixed(3)+" · r₋ "+X1(n.spin,n.charge).toFixed(3)+" rg · a² + q² ≤ 0.98²"}),A.jsx(Ma,{label:"Eternal maximal extension",on:n.extension,onToggle:()=>l({extension:!n.extension})}),A.jsx(Y3,{label:"Topology overlay"}),A.jsx(Ee,{label:"Horizon shells",min:0,max:1,step:.01,value:n.topoHorizon,disp:n.topoHorizon<.005?"Off":n.topoHorizon.toFixed(2),disabled:!n.extension,onChange:C=>l({topoHorizon:C})}),A.jsx(Ee,{label:"Ergosurface shells",min:0,max:1,step:.01,value:n.topoErgo,disp:n.topoErgo<.005?"Off":n.topoErgo.toFixed(2),disabled:!n.extension,onChange:C=>l({topoErgo:C})}),A.jsx(Ee,{label:"Shell grid lines",min:0,max:2,step:.05,value:n.topoGrid,disp:n.topoGrid<.025?"Off":n.topoGrid.toFixed(2)+"×",disabled:!n.extension,onChange:C=>l({topoGrid:C})}),A.jsx(Ee,{label:"Shell edge glow",min:0,max:3,step:.05,value:n.topoEdge,disp:n.topoEdge<.025?"Off":n.topoEdge.toFixed(2)+"×",disabled:!n.extension,onChange:C=>l({topoEdge:C})}),A.jsx(Ee,{label:"Ring singularity glow",min:0,max:4,step:.05,value:n.ringGlow,disp:n.ringGlow<.025?"Off":n.ringGlow.toFixed(2)+"×",disabled:!n.extension,onChange:C=>l({ringGlow:C})}),A.jsx(Ee,{label:"Ring glow width",min:.002,max:.2,step:.001,value:n.ringWidth,disp:"Σ "+n.ringWidth.toFixed(3),disabled:!n.extension||n.ringGlow<.025,onChange:C=>l({ringWidth:C})}),A.jsx(Ee,{label:"Time-machine torus tint",min:0,max:1,step:.01,value:n.ctcTint,disp:n.ctcTint<.005?"Off":n.ctcTint.toFixed(2),disabled:!n.extension,onChange:C=>l({ctcTint:C})})]}),A.jsx("div",{className:"hr-fade"}),A.jsxs(dr,{id:"disk",icon:A.jsx(Rm,{}),label:"Accretion disk",...P("disk"),summary:i1(n.diskTemp,0)+" K · "+n.diskOut.toFixed(0)+" rg · h/r "+n.diskH.toFixed(2),children:[A.jsx(Ee,{label:"Accretion brightness",min:0,max:3,step:.05,value:n.diskBright,disp:n.diskBright.toFixed(2)+"×",onChange:C=>l({diskBright:C})}),A.jsx(Ee,{label:"Outer radius",min:8,max:30,step:.5,value:n.diskOut,disp:n.diskOut.toFixed(1)+" rg",onChange:C=>l({diskOut:C})}),A.jsx(Ee,{label:"Vertical thickness",min:0,max:.18,step:.005,value:n.diskH,disp:n.diskH<.0025?"razor-thin":"h/r "+n.diskH.toFixed(2),onChange:C=>l({diskH:C})}),A.jsx(Ee,{label:"Flare",min:1,max:2,step:.05,value:n.diskFlare,disp:n.diskFlare<1.0025?"None":n.diskFlare.toFixed(2)+"×",onChange:C=>l({diskFlare:C})}),A.jsx(Ee,{label:"Smoke opacity",min:1,max:3,step:.05,value:n.smokeOpacity,disp:n.smokeOpacity.toFixed(2)+"×",onChange:C=>l({smokeOpacity:C})}),A.jsx(Ee,{label:"Smoke thickness",min:1,max:1.8,step:.05,value:n.smokeThickness,disp:n.smokeThickness.toFixed(2)+"×",onChange:C=>l({smokeThickness:C})}),A.jsx(Ee,{label:"Temperature",min:2e3,max:15e3,step:100,value:n.diskTemp,disp:i1(n.diskTemp,0)+" K",tempTrack:!0,onChange:C=>l({diskTemp:C})}),A.jsx(Ee,{label:"Orbital speed",min:0,max:3,step:.05,value:n.diskSpeed,disp:n.diskSpeed.toFixed(2)+"×",onChange:C=>l({diskSpeed:C})}),A.jsx(Ee,{label:"Debris haze",min:.3,max:1,step:.01,value:n.diskHaze,disp:n.diskHaze.toFixed(2)+"×",onChange:C=>l({diskHaze:C})}),A.jsx(Ee,{label:"Rock population",min:1,max:8,step:1,value:n.rockPopulation,disp:n.rockPopulation.toFixed(0)+"×",onChange:C=>l({rockPopulation:Math.round(C)})}),A.jsx(Ma,{label:"Doppler beaming",on:n.beaming,onToggle:()=>l({beaming:!n.beaming})}),A.jsx(Ma,{label:"Gravitational redshift",on:n.redshift,onToggle:()=>l({redshift:!n.redshift})}),A.jsx(Ma,{label:"Orbital motion",on:n.playing,onToggle:()=>l({playing:!n.playing})})]}),A.jsx("div",{className:"hr-fade"}),A.jsxs(dr,{id:"env",icon:A.jsx(Am,{}),label:"Environment",...P("env"),summary:"stars "+n.starDens.toFixed(1)+"× · tilt "+n.galTilt.toFixed(0)+"°",children:[A.jsx(Ee,{label:"Star density",min:0,max:2,step:.05,value:n.starDens,disp:n.starDens.toFixed(2)+"×",onChange:C=>l({starDens:C})}),A.jsx(Ee,{label:"Window starlight",min:.25,max:4,step:.05,value:n.windowStarlight,disp:n.windowStarlight.toFixed(2)+"×",onChange:C=>l({windowStarlight:C})}),A.jsx(Ee,{label:"Star filter width",min:.5,max:2,step:.1,value:n.starFilterWidth,disp:n.starFilterWidth.toFixed(1)+"×",onChange:C=>l({starFilterWidth:C})}),A.jsx(Ee,{label:"Galaxy brightness",min:0,max:2,step:.05,value:n.galBright,disp:n.galBright.toFixed(2)+"×",onChange:C=>l({galBright:C})}),A.jsx(Ee,{label:"Galaxy tilt",min:-80,max:80,step:1,value:n.galTilt,disp:n.galTilt.toFixed(0)+"°",onChange:C=>l({galTilt:C})}),A.jsx(Ee,{label:"Nebula count",min:0,max:10,step:1,value:n.nebCount,disp:n.nebCount===0?"None":n.nebCount.toFixed(0),onChange:C=>l({nebCount:C})}),A.jsx(Ee,{label:"Nebula density",min:0,max:2,step:.05,value:n.nebDens,disp:n.nebDens<.025?"Off":n.nebDens.toFixed(2)+"×",onChange:C=>l({nebDens:C})}),A.jsx(Ee,{label:"Nebula size",min:.3,max:2.5,step:.05,value:n.nebSize,disp:n.nebSize.toFixed(2)+"×",onChange:C=>l({nebSize:C})})]}),A.jsx("div",{className:"hr-fade"}),A.jsxs(dr,{id:"render",icon:A.jsx(vm,{}),label:"Render",...P("render"),summary:(n.quality===0?"Auto":n.quality+"%")+" · "+n.fov.toFixed(0)+"°",children:[A.jsx(Ee,{label:"Render scale",min:1,max:100,step:1,value:n.quality===0?R:n.quality,disp:n.quality===0?`auto · ${R}%`:`${n.quality}%`,disabled:n.quality===0,onChange:C=>l({quality:Math.round(C)})}),A.jsx(Ma,{label:"Auto render scale",on:n.quality===0,onToggle:()=>l({quality:n.quality===0?R:0})}),A.jsx(Ee,{label:"Field of view",min:35,max:95,step:1,value:n.fov,disp:n.fov.toFixed(0)+"°",onChange:C=>l({fov:C})}),A.jsx(Ma,{label:"Temporal antialiasing",on:n.taa,onToggle:()=>l({taa:!n.taa})}),A.jsx(Ma,{label:"Bloom effect",on:n.bloom>.004,onToggle:()=>{n.bloom>.004?(x.current=n.bloom,l({bloom:0})):l({bloom:Math.max(.05,x.current)})}}),A.jsx(Ee,{label:"Bloom",min:0,max:1.6,step:.05,value:n.bloom,disp:n.bloom.toFixed(2),onChange:C=>{C>.004&&(x.current=C),l({bloom:C})}}),A.jsx(Ee,{label:"Exposure",min:.25,max:2.5,step:.05,value:n.exposure,disp:n.exposure.toFixed(2),onChange:C=>l({exposure:C})}),A.jsx(Ee,{label:"FPS cap",min:15,max:235,step:5,value:O?n.fpsCap:120,disp:O?n.fpsCap.toFixed(0)+" fps":"Uncapped",disabled:!O,onChange:C=>l({fpsCap:C})}),A.jsx(Ma,{label:"Limit frame rate",on:O,onToggle:()=>l({fpsCap:O?240:120})}),A.jsx(Ma,{label:"Auto-orbit when idle",on:n.autoOrbit,onToggle:()=>l({autoOrbit:!n.autoOrbit})}),A.jsx("button",{onClick:()=>Aa.current?.camera.reset(),className:"cursor-pointer self-start rounded-md px-1 py-1 text-[12px] text-accent hover:bg-accent/10",children:"Reset view"})]})]}),A.jsx("div",{className:"absolute right-[5px] top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-[7px]",children:F3.map(C=>A.jsx("button",{"aria-label":C.label,title:C.label,onClick:()=>j(C.id),className:"w-1.5 flex-none cursor-pointer rounded-[3px] border-0 p-0 transition-all duration-300 "+(h===C.id?"h-5 bg-accent shadow-[0_0_10px] shadow-accent/60":"h-1.5 bg-neutral-700 hover:bg-neutral-500")},C.id))})]})}function Q3(u){return A.jsxs("div",{className:"pointer-events-none absolute z-20 flex flex-col gap-0.5",style:u.mobile?{left:"calc(var(--sal) + 14px)",top:"calc(var(--sat) + 12px)"}:{left:"calc(var(--sal) + 18px)",top:"calc(var(--sat) + 16px)"},children:[A.jsx("span",{className:"text-[10.5px] uppercase tracking-[0.14em] text-accent-300",children:"Geodesic ray tracer"}),A.jsx("span",{className:"text-[16px] font-medium tracking-tight",children:"Black hole"})]})}function W3(u){const n=je(h=>h.offCenter),{mode:o,panelOpen:l}=u,f=o==="portrait"?"top-[calc(var(--sat)_+_70px)] left-1/2":l?o==="landscape"?"left-[calc((100%-min(300px,46vw))/2)]":o==="desktop"?"left-[calc((100%-302px)/2)]":"left-1/2":"left-1/2";return A.jsx("div",{className:`glass-panel absolute z-20 -translate-x-1/2 rounded-full p-[3px] transition-opacity duration-300 ${f}`,style:{...o!=="portrait"?{top:`calc(var(--sat) + ${o==="desktop"?16:10}px)`}:{},opacity:n?1:0,pointerEvents:n?"auto":"none"},children:A.jsxs("button",{onClick:()=>Aa.current?.camera.rehome(),title:"Recenter on black hole","aria-label":"Recenter on black hole",className:"flex cursor-pointer items-center gap-1.5 rounded-full border border-accent/55 px-3 py-1 text-[10.5px] text-accent-300 shadow-[0_0_10px] shadow-accent/14 pointer-coarse:px-3.5 pointer-coarse:py-[7px]",children:[A.jsx(wm,{size:13}),A.jsx("span",{children:"Recenter"})]})})}function X3(u){const n=je(g=>g.stats),o=Qt(g=>g.params.quality),l=u.mode==="desktop",c=n.fps?`${n.fps} fps · ${n.p95Ms} ms`:"…",f=n.simW?`${n.simW}×${n.simH} · ${Math.round(n.resScale*100)}%${o===0?"":" · manual"}`:"",h=l?{left:"calc(var(--sal) + 18px)",bottom:"max(14px, var(--sab))"}:{right:u.mode==="landscape"&&u.panelOpen?"calc(var(--sar) + min(300px, 46vw) + 22px)":"calc(var(--sar) + 14px)",top:"calc(var(--sat) + 13px)"};return A.jsxs("div",{className:`tabular pointer-events-none absolute z-10 flex flex-col gap-px text-[10px] leading-[13px] text-neutral-500 ${l?"":"items-end"}`,style:{...h,textShadow:"0 1px 3px rgb(0 0 0 / 0.55)"},children:[A.jsx("span",{children:c}),A.jsx("span",{children:f}),!1]})}function K3(u){const n=je(y=>y.hintDone),{mode:o,panelOpen:l,coarse:c}=u,f=n||o==="portrait"&&l,h=o==="portrait"?"bottom-[calc(var(--sab)_+_64px)]":o==="landscape"?"bottom-[calc(var(--sab)_+_48px)]":"bottom-[18px]",g=o==="landscape"&&l?"left-[calc((100%-min(300px,46vw))/2)]":"left-1/2";return A.jsx("div",{className:`pointer-events-none absolute z-10 -translate-x-1/2 whitespace-nowrap text-[11.5px] text-neutral-500 transition-opacity duration-700 ${h} ${g}`,style:{opacity:f?0:1},children:c?"drag to orbit · two-finger pan to look · pinch to zoom":"drag to orbit · ⇧ drag to look · scroll to zoom · double-click to reset"})}function J3(u){const n=Qt(o=>o.setPanelOpen);return A.jsxs("button",{onClick:()=>n(!0),className:"glass-panel z-30 flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-[5px] text-[12px] text-neutral-200 hover:text-accent-200 pointer-coarse:px-[18px] pointer-coarse:py-[9px] "+(u.portrait?"absolute bottom-[calc(var(--sab)_+_14px)] left-1/2 -translate-x-1/2":"absolute right-3.5 top-3.5"),children:[A.jsx(Tm,{size:14}),A.jsx("span",{children:"Controls"})]})}const Uu=58,A1=2*Math.PI*Uu;function $3(){const u=je(f=>f.loadProgress),n=u>=1,[o,l]=p.useState(!1);if(p.useEffect(()=>{if(!n){l(!1);return}const f=setTimeout(()=>l(!0),950);return()=>clearTimeout(f)},[n]),o)return null;const c=Math.min(1,Math.max(0,u));return A.jsxs("div",{className:"absolute inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-ground transition-opacity duration-700",style:{opacity:n?0:1,pointerEvents:n?"none":"auto"},role:"progressbar","aria-valuenow":Math.round(c*100),"aria-valuemin":0,"aria-valuemax":100,"aria-label":"Compiling spacetime",children:[A.jsxs("svg",{width:"176",height:"176",viewBox:"0 0 176 176",children:[A.jsx("circle",{cx:"88",cy:"88",r:"40",fill:"#000"}),A.jsx("circle",{cx:"88",cy:"88",r:"41",fill:"none",stroke:"rgba(244,228,199,0.16)",strokeWidth:"1.5"}),A.jsx("circle",{cx:"88",cy:"88",r:Uu,fill:"none",stroke:"rgba(244,228,199,0.09)",strokeWidth:"2"}),A.jsx("circle",{cx:"88",cy:"88",r:Uu,fill:"none",stroke:"#f2e2c4",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:A1,strokeDashoffset:(1-c)*A1,transform:"rotate(-90 88 88)",style:{transition:"stroke-dashoffset 340ms cubic-bezier(0.4,0,0.2,1)",filter:"drop-shadow(0 0 7px rgba(242,226,196,0.4))"}})]}),A.jsxs("span",{className:"tabular text-[11px] tracking-[0.14em] text-neutral-500",children:[Math.round(c*100),"%"]})]})}let wi=null;const Uh=()=>{const u=new Date,n=o=>String(o).padStart(2,"0");return`${u.getFullYear()}${n(u.getMonth()+1)}${n(u.getDate())}-${n(u.getHours())}${n(u.getMinutes())}${n(u.getSeconds())}`},Dh=(u,n)=>{const o=URL.createObjectURL(u),l=document.createElement("a");l.href=o,l.download=n,l.click(),setTimeout(()=>URL.revokeObjectURL(o),3e4)},Oh=(u,n)=>{if(n instanceof DOMException&&n.name==="AbortError"){je.getState().setCapture(null);return}console.error("Capture failed:",n);const o=n instanceof Error?`${n.name}: ${n.message}`:String(n);je.getState().setCapture({kind:u,done:0,total:0,phase:"error",error:o})},T1=typeof VideoEncoder<"u",Vu=()=>{const u=Math.min(devicePixelRatio||1,3);return{w:Math.round(screen.width*u),h:Math.round(screen.height*u)}},R1=(u,n=!1)=>{const o=Vu(),l=Math.round(o.w*u),c=Math.round(o.h*u);return Aa.current?.planCaptureTarget(l,c,n)??{w:l,h:c}};async function ey(u){const n=Aa.current,o=je.getState();if(!n||o.capture)return;wi=new AbortController;const l=Vu();o.setCapture({kind:"photo",done:0,total:u.samples,phase:"render"});try{const c=await n.captureStill({samples:u.samples,targetW:Math.round(l.w*u.scale),targetH:Math.round(l.h*u.scale)},(f,h)=>{je.getState().setCapture({kind:"photo",done:f,total:h,phase:"render"})},wi.signal);Dh(c,`astra-${Uh()}.png`),je.getState().setCapture(null)}catch(c){Oh("photo",c)}finally{wi=null}}async function ty(u){const n=Aa.current,o=je.getState();if(!n||o.capture)return;wi=new AbortController;const l=Vu(),c=Math.round(u.seconds*u.fps);o.setCapture({kind:"video",done:0,total:c,phase:"render"});try{const{blob:f,extension:h}=await n.captureVideo({seconds:u.seconds,fps:u.fps,samples:u.samples,targetW:Math.round(l.w*u.scale),targetH:Math.round(l.h*u.scale)},(g,y,v)=>{je.getState().setCapture({kind:"video",done:g,total:y,phase:v})},wi.signal);Dh(f,`astra-${Uh()}.${h}`),je.getState().setCapture(null)}catch(f){Oh("video",f)}finally{wi=null}}function ay(){wi?.abort()}function iy(){je.getState().capture?.phase==="error"&&je.getState().setCapture(null)}function ny(){const u=je(c=>c.capture);if(!u)return null;const n=u.phase==="error",o=u.total>0?Math.min(100,Math.round(u.done/u.total*100)):0,l=n?u.error??"Capture failed.":u.phase==="encode"?"Finalizing clip…":u.kind==="photo"?`Supersampling — ${u.done}/${u.total} samples`:`Rendering frames — ${u.done}/${u.total}`;return A.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/60",children:A.jsxs("div",{className:"glass-panel flex w-[320px] max-w-[calc(100vw-32px)] flex-col gap-3 rounded-lg px-5 py-4",children:[A.jsxs("span",{className:"text-[11px] uppercase tracking-[0.14em] text-neutral-400",children:[u.kind==="photo"?"Photograph":"Clip",n?" — failed":" — native resolution"]}),!n&&A.jsx("div",{className:"h-1 overflow-hidden rounded-full bg-neutral-800",children:A.jsx("div",{className:"h-full rounded-full bg-accent shadow-[0_0_8px] shadow-accent/50 transition-[width] duration-200",style:{width:`${u.phase==="encode"?100:o}%`}})}),A.jsx("span",{className:`text-[11.5px] leading-relaxed ${n?"text-amber-400":"text-neutral-300"}`,children:l}),A.jsx("button",{onClick:n?iy:ay,className:"cursor-pointer self-end rounded-md px-2 py-1 text-[12px] text-neutral-400 hover:bg-accent/10 hover:text-accent",children:n?"Close":"Cancel"})]})})}const ry=["8","16","32","64"];function z1(u){return A.jsxs("div",{className:"flex flex-col gap-1",children:[A.jsx("span",{className:"text-[10.5px] text-neutral-500",children:u.label}),A.jsx(j3,{options:ry.map(n=>({id:n,label:`${n}×`})),value:String(u.value),onChange:n=>u.onChange(Number(n))})]})}function C1(u){return A.jsxs("div",{className:"flex flex-col gap-1",children:[A.jsxs("button",{onClick:u.onClick,disabled:u.disabled,className:"flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-3 py-[9px] text-[13px] font-semibold text-ground shadow-[0_0_14px] shadow-accent/25 transition-colors hover:bg-accent-400 disabled:cursor-default disabled:opacity-40",children:[u.icon,A.jsx("span",{children:u.label})]}),A.jsx("span",{className:"text-center text-[9.5px] text-neutral-600",children:u.sub})]})}function ly(u){const[n,o]=p.useState(!1),l=Qt(w=>w.params),c=Qt(w=>w.set),f=je(w=>w.capture)!==null,{mode:h,panelOpen:g}=u;if(h==="portrait"&&g)return null;const v=h!=="portrait"&&g?"calc(var(--sar) + min(300px, 46vw) + 22px)":"calc(var(--sar) + 14px)",b=R1(l.captureScale),x=R1(l.captureScale,!0);return A.jsxs("div",{className:"absolute z-30 flex flex-col items-end gap-2",style:{right:v,bottom:"calc(var(--sab) + 14px)"},children:[n&&A.jsxs("div",{className:"glass-panel flex w-[264px] flex-col gap-3 rounded-lg px-3.5 py-3",children:[A.jsxs("div",{className:"flex items-center justify-between",children:[A.jsx("span",{className:"text-[10.5px] uppercase tracking-[0.14em] text-neutral-400",children:"Capture"}),A.jsx("button",{onClick:()=>o(!1),"aria-label":"Close capture menu",className:"flex cursor-pointer rounded-sm px-1.5 py-0.5 text-neutral-500 hover:bg-accent/10 hover:text-accent",children:A.jsx(F1,{size:13})})]}),A.jsx(Ee,{label:"Resolution",min:1,max:4,step:.5,value:l.captureScale,disp:`${l.captureScale.toFixed(1)}× · ${b.w}×${b.h}`,onChange:w=>c({captureScale:w})}),A.jsx(z1,{label:"Photo supersampling",value:l.photoSamples,onChange:w=>c({photoSamples:w})}),A.jsx(C1,{icon:A.jsx(Zd,{size:16,weight:"fill"}),label:"Photograph",sub:`${b.w}×${b.h} PNG · ${l.photoSamples}× supersampled`,disabled:f,onClick:()=>{ey({scale:l.captureScale,samples:l.photoSamples})}}),A.jsx("div",{className:"hr-fade"}),A.jsx(Ee,{label:"Clip length",min:1,max:15,step:1,value:l.clipSeconds,disp:`${l.clipSeconds.toFixed(0)} s`,onChange:w=>c({clipSeconds:w})}),A.jsx(Ee,{label:"Clip frame rate",min:10,max:60,step:5,value:l.clipFps,disp:`${l.clipFps.toFixed(0)} fps`,onChange:w=>c({clipFps:w})}),A.jsx(z1,{label:"Clip supersampling",value:l.clipSamples,onChange:w=>c({clipSamples:w})}),A.jsx(C1,{icon:A.jsx(Em,{size:16,weight:"fill"}),label:"Record clip",sub:T1?`${x.w}×${x.h} · ${l.clipSeconds}s @ ${l.clipFps} fps`:"needs WebCodecs — not exposed by this browser",disabled:f||!T1,onClick:()=>{ty({scale:l.captureScale,seconds:l.clipSeconds,fps:l.clipFps,samples:l.clipSamples})}})]}),A.jsx("button",{onClick:()=>o(w=>!w),"aria-label":n?"Collapse capture menu":"Open capture menu","aria-expanded":n,className:`glass-panel flex cursor-pointer rounded-full p-[11px] transition-colors ${n?"text-accent-200":"text-neutral-300 hover:text-accent-200"}`,children:A.jsx(Zd,{size:18})})]})}const Bh=()=>{const u=document;return document.fullscreenElement??u.webkitFullscreenElement??null},sy=()=>{const u=document.documentElement;return!!(u.requestFullscreen??u.webkitRequestFullscreen)},oy=()=>{const u=document,n=document.documentElement;Bh()?(document.exitFullscreen??u.webkitExitFullscreen)?.call(document):n.requestFullscreen?n.requestFullscreen({navigationUI:"hide"}).catch(()=>{n.webkitRequestFullscreen?.()}):n.webkitRequestFullscreen?.()};function uy(u){const[n,o]=p.useState(!1);if(p.useEffect(()=>{const c=()=>o(!!Bh());return document.addEventListener("fullscreenchange",c),document.addEventListener("webkitfullscreenchange",c),()=>{document.removeEventListener("fullscreenchange",c),document.removeEventListener("webkitfullscreenchange",c)}},[]),!sy())return null;const l=u.mode==="landscape"&&u.panelOpen?"calc(var(--sar) + min(300px, 46vw) + 22px)":"calc(var(--sar) + 12px)";return A.jsx("button",{onClick:oy,"aria-label":n?"Exit full screen":"Enter full screen",className:"glass-panel absolute z-20 flex cursor-pointer rounded-full p-[9px] text-neutral-300 hover:text-accent-200",style:{top:"calc(var(--sat) + 46px)",right:l},children:n?A.jsx(bm,{size:16}):A.jsx(Sm,{size:16})})}function cy(){const u=Qt(h=>h.panelOpen),n=je(h=>h.setHintDone),[o,l]=p.useState(()=>zu(window.innerWidth,window.innerHeight)),[c]=p.useState(()=>matchMedia("(pointer: coarse)").matches);p.useEffect(()=>{const h=()=>l(zu(window.innerWidth,window.innerHeight));window.addEventListener("resize",h);const g=setTimeout(n,1e4);return()=>{window.removeEventListener("resize",h),clearTimeout(g)}},[n]);const f=o!=="desktop";return A.jsxs("div",{className:"full-bleed-root fixed inset-0 text-ink",children:[A.jsx(l3,{}),A.jsx(Q3,{mobile:f}),f&&A.jsx(uy,{mode:o,panelOpen:u}),A.jsx(W3,{mode:o,panelOpen:u}),A.jsx(X3,{mode:o,panelOpen:u}),A.jsx(K3,{mode:o,panelOpen:u,coarse:c}),u?A.jsx(I3,{mode:o}):A.jsx(J3,{portrait:o==="portrait"}),A.jsx(ly,{mode:o,panelOpen:u}),A.jsx(ny,{}),A.jsx($3,{})]})}console.info(`astra ${"98e7b9e9c43a82c898de956ff8e13f7bbc5085f8".slice(0,12)}`);am.createRoot(document.getElementById("root")).render(A.jsx(cy,{}));export{Pm as M,Gm as S,Hm as a};
