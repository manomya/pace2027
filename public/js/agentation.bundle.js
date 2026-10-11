(()=>{var h8=Object.create;var ow=Object.defineProperty;var m8=Object.getOwnPropertyDescriptor;var p8=Object.getOwnPropertyNames;var g8=Object.getPrototypeOf,y8=Object.prototype.hasOwnProperty;var $r=(r,i)=>()=>{try{return i||r((i={exports:{}}).exports,i),i.exports}catch(c){throw i=0,c}};var b8=(r,i,c,d)=>{if(i&&typeof i=="object"||typeof i=="function")for(let f of p8(i))!y8.call(r,f)&&f!==c&&ow(r,f,{get:()=>i[f],enumerable:!(d=m8(i,f))||d.enumerable});return r};var Tt=(r,i,c)=>(c=r!=null?h8(g8(r)):{},b8(i||!r||!r.__esModule?ow(c,"default",{value:r,enumerable:!0}):c,r));var lw=$r((wt,vm)=>{"use strict";(function(){function r(p,U){Object.defineProperty(d.prototype,p,{get:function(){console.warn("%s(...) is deprecated in plain JavaScript React classes. %s",U[0],U[1])}})}function i(p){return p===null||typeof p!="object"?null:(p=Po&&p[Po]||p["@@iterator"],typeof p=="function"?p:null)}function c(p,U){p=(p=p.constructor)&&(p.displayName||p.name)||"ReactClass";var ae=p+"."+U;Ho[ae]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",U,p),Ho[ae]=!0)}function d(p,U,ae){this.props=p,this.context=U,this.refs=cl,this.updater=ae||Ln}function f(){}function h(p,U,ae){this.props=p,this.context=U,this.refs=cl,this.updater=ae||Ln}function b(){}function v(p){return""+p}function w(p){try{v(p);var U=!1}catch{U=!0}if(U){U=console;var ae=U.error,te=typeof Symbol=="function"&&Symbol.toStringTag&&p[Symbol.toStringTag]||p.constructor.name||"Object";return ae.call(U,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",te),v(p)}}function j(p){if(p==null)return null;if(typeof p=="function")return p.$$typeof===dt?null:p.displayName||p.name||null;if(typeof p=="string")return p;switch(p){case Ee:return"Fragment";case Oe:return"Profiler";case ee:return"StrictMode";case Cn:return"Suspense";case Pt:return"SuspenseList";case $o:return"Activity";case zn:return"ViewTransition"}if(typeof p=="object")switch(typeof p.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),p.$$typeof){case st:return"Portal";case Ot:return p.displayName||"Context";case ge:return(p._context.displayName||"Context")+".Consumer";case Nn:var U=p.render;return p=p.displayName,p||(p=U.displayName||U.name||"",p=p!==""?"ForwardRef("+p+")":"ForwardRef"),p;case In:return U=p.displayName||null,U!==null?U:j(p.type)||"Memo";case jn:U=p._payload,p=p._init;try{return j(p(U))}catch{}}return null}function L(p){if(p===Ee)return"<>";if(typeof p=="object"&&p!==null&&p.$$typeof===jn)return"<...>";try{var U=j(p);return U?"<"+U+">":"<...>"}catch{return"<...>"}}function R(){var p=Te.A;return p===null?null:p.getOwner()}function H(){return Error("react-stack-top-frame")}function z(p){if(ie.call(p,"key")){var U=Object.getOwnPropertyDescriptor(p,"key").get;if(U&&U.isReactWarning)return!1}return p.key!==void 0}function S(p,U){function ae(){kt||(kt=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",U))}ae.isReactWarning=!0,Object.defineProperty(p,"key",{get:ae,configurable:!0})}function V(){var p=j(this.type);return Rt[p]||(Rt[p]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),p=this.props.ref,p!==void 0?p:null}function B(p,U,ae,te,ve,et){var Ce=ae.ref;return p={$$typeof:Ne,type:p,key:U,props:ae,_owner:te},(Ce!==void 0?Ce:null)!==null?Object.defineProperty(p,"ref",{enumerable:!1,get:V}):Object.defineProperty(p,"ref",{enumerable:!1,value:null}),p._store={},Object.defineProperty(p._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(p,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(p,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:ve}),Object.defineProperty(p,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:et}),Object.freeze&&(Object.freeze(p.props),Object.freeze(p)),p}function ne(p,U){return U=B(p.type,U,p.props,p._owner,p._debugStack,p._debugTask),p._store&&(U._store.validated=p._store.validated),U}function ze(p){G(p)?p._store&&(p._store.validated=1):typeof p=="object"&&p!==null&&p.$$typeof===jn&&(p._payload.status==="fulfilled"?G(p._payload.value)&&p._payload.value._store&&(p._payload.value._store.validated=1):p._store&&(p._store.validated=1))}function G(p){return typeof p=="object"&&p!==null&&p.$$typeof===Ne}function ue(p){var U={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function(ae){return U[ae]})}function mt(p,U){return typeof p=="object"&&p!==null&&p.key!=null?(w(p.key),ue(""+p.key)):U.toString(36)}function vt(p){switch(p.status){case"fulfilled":return p.value;case"rejected":throw p.reason;default:switch(typeof p.status=="string"?p.then(b,b):(p.status="pending",p.then(function(U){p.status==="pending"&&(p.status="fulfilled",p.value=U)},function(U){p.status==="pending"&&(p.status="rejected",p.reason=U)})),p.status){case"fulfilled":return p.value;case"rejected":throw p.reason}}throw p}function ke(p,U,ae,te,ve){var et=typeof p;(et==="undefined"||et==="boolean")&&(p=null);var Ce=!1;if(p===null)Ce=!0;else switch(et){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(p.$$typeof){case Ne:case st:Ce=!0;break;case jn:return Ce=p._init,ke(Ce(p._payload),U,ae,te,ve)}}if(Ce){Ce=p,ve=ve(Ce);var Ae=te===""?"."+mt(Ce,0):te;return We(ve)?(ae="",Ae!=null&&(ae=Ae.replace(ce,"$&/")+"/"),ke(ve,U,ae,"",function(Ht){return Ht})):ve!=null&&(G(ve)&&(ve.key!=null&&(Ce&&Ce.key===ve.key||w(ve.key)),ae=ne(ve,ae+(ve.key==null||Ce&&Ce.key===ve.key?"":(""+ve.key).replace(ce,"$&/")+"/")+Ae),te!==""&&Ce!=null&&G(Ce)&&Ce.key==null&&Ce._store&&!Ce._store.validated&&(ae._store.validated=2),ve=ae),U.push(ve)),1}if(Ce=0,Ae=te===""?".":te+":",We(p))for(var Ge=0;Ge<p.length;Ge++)te=p[Ge],et=Ae+mt(te,Ge),Ce+=ke(te,U,ae,et,ve);else if(Ge=i(p),typeof Ge=="function")for(Ge===p.entries&&(F||console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),F=!0),p=Ge.call(p),Ge=0;!(te=p.next()).done;)te=te.value,et=Ae+mt(te,Ge++),Ce+=ke(te,U,ae,et,ve);else if(et==="object"){if(typeof p.then=="function")return ke(vt(p),U,ae,te,ve);throw U=String(p),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function it(p,U,ae){if(p==null)return p;var te=[],ve=0;return ke(p,te,"","",function(et){return U.call(ae,et,ve++)}),te}function fe(p){if(p._status===-1){var U=null,ae=null,te=p._ioInfo;te!=null&&(te.start=te.end=performance.now(),te.value=new Promise(function(Ce,Ae){U=Ce,ae=Ae})),te=p._result;var ve=te();if(ve.then(function(Ce){if(p._status===0||p._status===-1){p._status=1,p._result=Ce;var Ae=p._ioInfo;if(Ae!=null){Ae.end=performance.now();var Ge=Ce?.default;U(Ge),Ae.value.status="fulfilled",Ae.value.value=Ge}ve.status===void 0&&(ve.status="fulfilled",ve.value=Ce)}},function(Ce){if(p._status===0||p._status===-1){p._status=2,p._result=Ce;var Ae=p._ioInfo;Ae!=null&&(Ae.end=performance.now(),Ae.value.then(b,b),ae(Ce),Ae.value.status="rejected",Ae.value.reason=Ce),ve.status===void 0&&(ve.status="rejected",ve.reason=Ce)}}),te=p._ioInfo,te!=null){var et=ve.displayName;typeof et=="string"&&(te.name=et)}p._status===-1&&(p._status=0,p._result=ve)}if(p._status===1)return te=p._result,te===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,te),"default"in te||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,te),te.default;throw p._result}function Be(){var p=Te.H;return p===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),p}function Qe(){Te.asyncTransitions--}function Me(p){var U=Te.T,ae={};ae.types=U!==null?U.types:null,ae._updatedFibers=new Set,Te.T=ae;try{var te=p(),ve=Te.S;ve!==null&&ve(ae,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&(Te.asyncTransitions++,te.then(Qe,Qe),te.then(b,oe))}catch(et){oe(et)}finally{U===null&&ae._updatedFibers&&(p=ae._updatedFibers.size,ae._updatedFibers.clear(),10<p&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")),U!==null&&ae.types!==null&&(U.types!==null&&U.types!==ae.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),U.types=ae.types),Te.T=U}}function Re(p){var U=Te.T;if(U!==null){var ae=U.types;ae===null?U.types=[p]:ae.indexOf(p)===-1&&ae.push(p)}else Te.asyncTransitions===0&&console.error("addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."),Me(Re.bind(null,p))}function Le(p){if(De===null)try{var U=("require"+Math.random()).slice(0,7);De=(vm&&vm[U]).call(vm,"timers").setImmediate}catch{De=function(te){Ie===!1&&(Ie=!0,typeof MessageChannel>"u"&&console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var ve=new MessageChannel;ve.port1.onmessage=te,ve.port2.postMessage(void 0)}}return De(p)}function J(p){return 1<p.length&&typeof AggregateError=="function"?new AggregateError(p):p[0]}function pe(p,U){U!==me-1&&console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),me=U}function He(p,U,ae){var te=Te.actQueue;if(te!==null)if(te.length!==0)try{Ue(te),Le(function(){return He(p,U,ae)});return}catch(ve){Te.thrownErrors.push(ve)}else Te.actQueue=null;0<Te.thrownErrors.length?(te=J(Te.thrownErrors),Te.thrownErrors.length=0,ae(te)):U(p)}function Ue(p){if(!rt){rt=!0;var U=0;try{for(;U<p.length;U++){var ae=p[U];do{Te.didUsePromise=!1;var te=ae(!1);if(te!==null){if(Te.didUsePromise){p[U]=ae,p.splice(0,U);return}ae=te}else break}while(!0)}p.length=0}catch(ve){p.splice(0,U+1),Te.thrownErrors.push(ve)}finally{rt=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var Ne=Symbol.for("react.transitional.element"),st=Symbol.for("react.portal"),Ee=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),Oe=Symbol.for("react.profiler"),ge=Symbol.for("react.consumer"),Ot=Symbol.for("react.context"),Nn=Symbol.for("react.forward_ref"),Cn=Symbol.for("react.suspense"),Pt=Symbol.for("react.suspense_list"),In=Symbol.for("react.memo"),jn=Symbol.for("react.lazy"),$o=Symbol.for("react.activity"),zn=Symbol.for("react.view_transition"),Po=Symbol.iterator,Ho={},Ln={isMounted:function(){return!1},enqueueForceUpdate:function(p){c(p,"forceUpdate")},enqueueReplaceState:function(p){c(p,"replaceState")},enqueueSetState:function(p){c(p,"setState")}},ho=Object.assign,cl={};Object.freeze(cl),d.prototype.isReactComponent={},d.prototype.setState=function(p,U){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,U,"setState")},d.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};var ye={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]};for($t in ye)ye.hasOwnProperty($t)&&r($t,ye[$t]);f.prototype=d.prototype,ye=h.prototype=new f,ye.constructor=h,ho(ye,d.prototype),ye.isPureReactComponent=!0;var We=Array.isArray,dt=Symbol.for("react.client.reference"),Te={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},ie=Object.prototype.hasOwnProperty,Gt=console.createTask?console.createTask:function(){return null};ye={react_stack_bottom_frame:function(p){return p()}};var kt,Bt,Rt={},le=ye.react_stack_bottom_frame.bind(ye,H)(),Y=Gt(L(H)),F=!1,ce=/\/+/g,oe=typeof reportError=="function"?reportError:function(p){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof p=="object"&&p!==null&&typeof p.message=="string"?String(p.message):String(p),error:p});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",p);return}console.error(p)},Ie=!1,De=null,me=0,je=!1,rt=!1,xt=typeof queueMicrotask=="function"?function(p){queueMicrotask(function(){return queueMicrotask(p)})}:Le;ye=Object.freeze({__proto__:null,c:function(p){return Be().useMemoCache(p)}});var $t={map:it,forEach:function(p,U,ae){it(p,function(){U.apply(this,arguments)},ae)},count:function(p){var U=0;return it(p,function(){U++}),U},toArray:function(p){return it(p,function(U){return U})||[]},only:function(p){if(!G(p))throw Error("React.Children.only expected to receive a single React element child.");return p}};wt.Activity=$o,wt.Children=$t,wt.Component=d,wt.Fragment=Ee,wt.Profiler=Oe,wt.PureComponent=h,wt.StrictMode=ee,wt.Suspense=Cn,wt.ViewTransition=zn,wt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te,wt.__COMPILER_RUNTIME=ye,wt.act=function(p){var U=Te.actQueue,ae=me;me++;var te=Te.actQueue=U!==null?U:[],ve=!1;try{var et=p()}catch(Ge){Te.thrownErrors.push(Ge)}if(0<Te.thrownErrors.length)throw pe(U,ae),p=J(Te.thrownErrors),Te.thrownErrors.length=0,p;if(et!==null&&typeof et=="object"&&typeof et.then=="function"){var Ce=et;return xt(function(){ve||je||(je=!0,console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(Ge,Ht){ve=!0,Ce.then(function(jt){if(pe(U,ae),ae===0){try{Ue(te),Le(function(){return He(jt,Ge,Ht)})}catch(oo){Te.thrownErrors.push(oo)}if(0<Te.thrownErrors.length){var Ye=J(Te.thrownErrors);Te.thrownErrors.length=0,Ht(Ye)}}else Ge(jt)},function(jt){pe(U,ae),0<Te.thrownErrors.length&&(jt=J(Te.thrownErrors),Te.thrownErrors.length=0),Ht(jt)})}}}var Ae=et;if(pe(U,ae),ae===0&&(Ue(te),te.length!==0&&xt(function(){ve||je||(je=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),Te.actQueue=null),0<Te.thrownErrors.length)throw p=J(Te.thrownErrors),Te.thrownErrors.length=0,p;return{then:function(Ge,Ht){ve=!0,ae===0?(Te.actQueue=te,Le(function(){return He(Ae,Ge,Ht)})):Ge(Ae)}}},wt.addTransitionType=Re,wt.cache=function(p){return function(){return p.apply(null,arguments)}},wt.cacheSignal=function(){return null},wt.captureOwnerStack=function(){var p=Te.getCurrentStack;return p===null?null:p()},wt.cloneElement=function(p,U,ae){if(p==null)throw Error("The argument must be a React element, but you passed "+p+".");var te=ho({},p.props),ve=p.key,et=p._owner;if(U!=null){var Ce;e:{if(ie.call(U,"ref")&&(Ce=Object.getOwnPropertyDescriptor(U,"ref").get)&&Ce.isReactWarning){Ce=!1;break e}Ce=U.ref!==void 0}Ce&&(et=R()),z(U)&&(w(U.key),ve=""+U.key);for(Ae in U)!ie.call(U,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&U.ref===void 0||(te[Ae]=U[Ae])}var Ae=arguments.length-2;if(Ae===1)te.children=ae;else if(1<Ae){Ce=Array(Ae);for(var Ge=0;Ge<Ae;Ge++)Ce[Ge]=arguments[Ge+2];te.children=Ce}for(te=B(p.type,ve,te,et,p._debugStack,p._debugTask),ve=2;ve<arguments.length;ve++)ze(arguments[ve]);return te},wt.createContext=function(p){return p={$$typeof:Ot,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null},p.Provider=p,p.Consumer={$$typeof:ge,_context:p},p._currentRenderer=null,p._currentRenderer2=null,p},wt.createElement=function(p,U,ae){for(var te=2;te<arguments.length;te++)ze(arguments[te]);var ve;te={};var et=null;if(U!=null)for(ve in Bt||!("__self"in U)||"key"in U||(Bt=!0,console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")),z(U)&&(w(U.key),et=""+U.key),U)ie.call(U,ve)&&ve!=="key"&&ve!=="__self"&&ve!=="__source"&&(te[ve]=U[ve]);var Ce=arguments.length-2;if(Ce===1)te.children=ae;else if(1<Ce){for(var Ae=Array(Ce),Ge=0;Ge<Ce;Ge++)Ae[Ge]=arguments[Ge+2];Object.freeze&&Object.freeze(Ae),te.children=Ae}if(p&&p.defaultProps)for(ve in Ce=p.defaultProps,Ce)te[ve]===void 0&&(te[ve]=Ce[ve]);return et&&S(te,typeof p=="function"?p.displayName||p.name||"Unknown":p),(ve=1e4>Te.recentlyCreatedOwnerStacks++)?(Ae=Error.stackTraceLimit,Error.stackTraceLimit=10,Ce=Error("react-stack-top-frame"),Error.stackTraceLimit=Ae):Ce=le,B(p,et,te,R(),Ce,ve?Gt(L(p)):Y)},wt.createRef=function(){var p={current:null};return Object.seal(p),p},wt.forwardRef=function(p){p!=null&&p.$$typeof===In?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof p!="function"?console.error("forwardRef requires a render function but was given %s.",p===null?"null":typeof p):p.length!==0&&p.length!==2&&console.error("forwardRef render functions accept exactly two parameters: props and ref. %s",p.length===1?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),p!=null&&p.defaultProps!=null&&console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");var U={$$typeof:Nn,render:p},ae;return Object.defineProperty(U,"displayName",{enumerable:!1,configurable:!0,get:function(){return ae},set:function(te){ae=te,p.name||p.displayName||(Object.defineProperty(p,"name",{value:te}),p.displayName=te)}}),U},wt.isValidElement=G,wt.lazy=function(p){p={_status:-1,_result:p};var U={$$typeof:jn,_payload:p,_init:fe},ae={name:"lazy",start:-1,end:-1,value:null,owner:null,debugStack:Error("react-stack-top-frame"),debugTask:console.createTask?console.createTask("lazy()"):null};return p._ioInfo=ae,U._debugInfo=[{awaited:ae}],U},wt.memo=function(p,U){p==null&&console.error("memo: The first argument must be a component. Instead received: %s",p===null?"null":typeof p),U={$$typeof:In,type:p,compare:U===void 0?null:U};var ae;return Object.defineProperty(U,"displayName",{enumerable:!1,configurable:!0,get:function(){return ae},set:function(te){ae=te,p.name||p.displayName||(Object.defineProperty(p,"name",{value:te}),p.displayName=te)}}),U},wt.startTransition=Me,wt.unstable_useCacheRefresh=function(){return Be().useCacheRefresh()},wt.use=function(p){return Be().use(p)},wt.useActionState=function(p,U,ae){return Be().useActionState(p,U,ae)},wt.useCallback=function(p,U){return Be().useCallback(p,U)},wt.useContext=function(p){var U=Be();return p.$$typeof===ge&&console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"),U.useContext(p)},wt.useDebugValue=function(p,U){return Be().useDebugValue(p,U)},wt.useDeferredValue=function(p,U){return Be().useDeferredValue(p,U)},wt.useEffect=function(p,U){return p==null&&console.warn("React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"),Be().useEffect(p,U)},wt.useEffectEvent=function(p){return Be().useEffectEvent(p)},wt.useId=function(){return Be().useId()},wt.useImperativeHandle=function(p,U,ae){return Be().useImperativeHandle(p,U,ae)},wt.useInsertionEffect=function(p,U){return p==null&&console.warn("React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"),Be().useInsertionEffect(p,U)},wt.useLayoutEffect=function(p,U){return p==null&&console.warn("React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"),Be().useLayoutEffect(p,U)},wt.useMemo=function(p,U){return Be().useMemo(p,U)},wt.useOptimistic=function(p,U){return Be().useOptimistic(p,U)},wt.useReducer=function(p,U,ae){return Be().useReducer(p,U,ae)},wt.useRef=function(p){return Be().useRef(p)},wt.useState=function(p){return Be().useState(p)},wt.useSyncExternalStore=function(p,U,ae){return Be().useSyncExternalStore(p,U,ae)},wt.useTransition=function(){return Be().useTransition()},wt.version="19.3.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var $n=$r((Fk,aw)=>{"use strict";aw.exports=lw()});var rw=$r(Gn=>{"use strict";(function(){function r(){if(ue=!1,it){var J=Gn.unstable_now();Qe=J;var pe=!0;try{e:{ze=!1,G&&(G=!1,vt(fe),fe=-1),ne=!0;var He=B;try{t:{for(h(J),V=c(H);V!==null&&!(V.expirationTime>J&&v());){var Ue=V.callback;if(typeof Ue=="function"){V.callback=null,B=V.priorityLevel;var Ne=Ue(V.expirationTime<=J);if(J=Gn.unstable_now(),typeof Ne=="function"){V.callback=Ne,h(J),pe=!0;break t}V===c(H)&&d(H),h(J)}else d(H);V=c(H)}if(V!==null)pe=!0;else{var st=c(z);st!==null&&w(b,st.startTime-J),pe=!1}}break e}finally{V=null,B=He,ne=!1}pe=void 0}}finally{pe?Me():it=!1}}}function i(J,pe){var He=J.length;J.push(pe);e:for(;0<He;){var Ue=He-1>>>1,Ne=J[Ue];if(0<f(Ne,pe))J[Ue]=pe,J[He]=Ne,He=Ue;else break e}}function c(J){return J.length===0?null:J[0]}function d(J){if(J.length===0)return null;var pe=J[0],He=J.pop();if(He!==pe){J[0]=He;e:for(var Ue=0,Ne=J.length,st=Ne>>>1;Ue<st;){var Ee=2*(Ue+1)-1,ee=J[Ee],Oe=Ee+1,ge=J[Oe];if(0>f(ee,He))Oe<Ne&&0>f(ge,ee)?(J[Ue]=ge,J[Oe]=He,Ue=Oe):(J[Ue]=ee,J[Ee]=He,Ue=Ee);else if(Oe<Ne&&0>f(ge,He))J[Ue]=ge,J[Oe]=He,Ue=Oe;else break e}}return pe}function f(J,pe){var He=J.sortIndex-pe.sortIndex;return He!==0?He:J.id-pe.id}function h(J){for(var pe=c(z);pe!==null;){if(pe.callback===null)d(z);else if(pe.startTime<=J)d(z),pe.sortIndex=pe.expirationTime,i(H,pe);else break;pe=c(z)}}function b(J){if(G=!1,h(J),!ze)if(c(H)!==null)ze=!0,it||(it=!0,Me());else{var pe=c(z);pe!==null&&w(b,pe.startTime-J)}}function v(){return ue?!0:!(Gn.unstable_now()-Qe<Be)}function w(J,pe){fe=mt(function(){J(Gn.unstable_now())},pe)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),Gn.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;Gn.unstable_now=function(){return j.now()}}else{var L=Date,R=L.now();Gn.unstable_now=function(){return L.now()-R}}var H=[],z=[],S=1,V=null,B=3,ne=!1,ze=!1,G=!1,ue=!1,mt=typeof setTimeout=="function"?setTimeout:null,vt=typeof clearTimeout=="function"?clearTimeout:null,ke=typeof setImmediate<"u"?setImmediate:null,it=!1,fe=-1,Be=5,Qe=-1;if(typeof ke=="function")var Me=function(){ke(r)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Le=Re.port2;Re.port1.onmessage=r,Me=function(){Le.postMessage(null)}}else Me=function(){mt(r,0)};Gn.unstable_IdlePriority=5,Gn.unstable_ImmediatePriority=1,Gn.unstable_LowPriority=4,Gn.unstable_NormalPriority=3,Gn.unstable_Profiling=null,Gn.unstable_UserBlockingPriority=2,Gn.unstable_cancelCallback=function(J){J.callback=null},Gn.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<J?Math.floor(1e3/J):5},Gn.unstable_getCurrentPriorityLevel=function(){return B},Gn.unstable_next=function(J){switch(B){case 1:case 2:case 3:var pe=3;break;default:pe=B}var He=B;B=pe;try{return J()}finally{B=He}},Gn.unstable_requestPaint=function(){ue=!0},Gn.unstable_runWithPriority=function(J,pe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var He=B;B=J;try{return pe()}finally{B=He}},Gn.unstable_scheduleCallback=function(J,pe,He){var Ue=Gn.unstable_now();switch(typeof He=="object"&&He!==null?(He=He.delay,He=typeof He=="number"&&0<He?Ue+He:Ue):He=Ue,J){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=He+Ne,J={id:S++,callback:pe,priorityLevel:J,startTime:He,expirationTime:Ne,sortIndex:-1},He>Ue?(J.sortIndex=He,i(z,J),c(H)===null&&J===c(z)&&(G?(vt(fe),fe=-1):G=!0,w(b,He-Ue))):(J.sortIndex=Ne,i(H,J),ze||ne||(ze=!0,it||(it=!0,Me()))),J},Gn.unstable_shouldYield=v,Gn.unstable_wrapCallback=function(J){var pe=B;return function(){var He=B;B=pe;try{return J.apply(this,arguments)}finally{B=He}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var sw=$r((Zk,iw)=>{"use strict";iw.exports=rw()});var cw=$r(il=>{"use strict";(function(){function r(){}function i(z){return""+z}function c(z,S,V){var B=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;if(B==null)B=null;else if(B===R)B=R;else{try{i(B);var ne=!1}catch{ne=!0}ne&&(console.error("The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",typeof Symbol=="function"&&Symbol.toStringTag&&B[Symbol.toStringTag]||B.constructor.name||"Object"),i(B)),B=""+B}return{$$typeof:j,key:B,children:z,containerInfo:S,implementation:V}}function d(z,S){if(z==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}function f(z){return z===null?"`null`":z===void 0?"`undefined`":z===""?"an empty string":'something with type "'+typeof z+'"'}function h(z){return z===null?"`null`":z===void 0?"`undefined`":z===""?"an empty string":typeof z=="string"?JSON.stringify(z):typeof z=="number"?"`"+z+"`":'something with type "'+typeof z+'"'}function b(){var z=H.H;return z===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),z}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var v=$n(),w={d:{f:r,r:function(){throw Error("Invalid form element. requestFormReset must be passed a form that was rendered by React.")},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},j=Symbol.for("react.portal"),L=Symbol.for("react.recoverable"),R=Symbol.for("react.optimistic_key"),H=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map=="function"&&Map.prototype!=null&&typeof Map.prototype.forEach=="function"&&typeof Set=="function"&&Set.prototype!=null&&typeof Set.prototype.clear=="function"&&typeof Set.prototype.forEach=="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),il.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,il.browser=function(z){return{$$typeof:L,_reason:z}},il.createPortal=function(z,S){var V=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error("Target container is not a DOM element.");return c(z,S,null,V)},il.flushSync=function(z){var S=H.T,V=w.p;try{if(H.T=null,w.p=2,z)return z()}finally{H.T=S,w.p=V,w.d.f()&&console.error("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.")}},il.preconnect=function(z,S){typeof z=="string"&&z?S!=null&&typeof S!="object"?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",h(S)):S!=null&&typeof S.crossOrigin!="string"&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",f(S.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",f(z)),typeof z=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,w.d.C(z,S))},il.prefetchDNS=function(z){if(typeof z!="string"||!z)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",f(z));else if(1<arguments.length){var S=arguments[1];typeof S=="object"&&S.hasOwnProperty("crossOrigin")?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",h(S)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",h(S))}typeof z=="string"&&w.d.D(z)},il.preinit=function(z,S){if(typeof z=="string"&&z?S==null||typeof S!="object"?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",h(S)):S.as!=="style"&&S.as!=="script"&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',h(S.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",f(z)),typeof z=="string"&&S&&typeof S.as=="string"){var V=S.as,B=d(V,S.crossOrigin),ne=typeof S.integrity=="string"?S.integrity:void 0,ze=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;V==="style"?w.d.S(z,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:B,integrity:ne,fetchPriority:ze}):V==="script"&&w.d.X(z,{crossOrigin:B,integrity:ne,fetchPriority:ze,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},il.preinitModule=function(z,S){var V="";typeof z=="string"&&z||(V+=" The `href` argument encountered was "+f(z)+"."),S!==void 0&&typeof S!="object"?V+=" The `options` argument encountered was "+f(S)+".":S&&"as"in S&&S.as!=="script"&&(V+=" The `as` option encountered was "+h(S.as)+"."),V?console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",V):(V=S&&typeof S.as=="string"?S.as:"script",V)==="script"||(V=h(V),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',V,z)),typeof z=="string"&&(typeof S=="object"&&S!==null?(S.as==null||S.as==="script")&&(V=d(S.as,S.crossOrigin),w.d.M(z,{crossOrigin:V,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})):S==null&&w.d.M(z))},il.preload=function(z,S){var V="";if(typeof z=="string"&&z||(V+=" The `href` argument encountered was "+f(z)+"."),S==null||typeof S!="object"?V+=" The `options` argument encountered was "+f(S)+".":typeof S.as=="string"&&S.as||(V+=" The `as` option encountered was "+f(S.as)+"."),V&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',V),typeof z=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){V=S.as;var B=d(V,S.crossOrigin);w.d.L(z,V,{crossOrigin:B,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},il.preloadModule=function(z,S){var V="";typeof z=="string"&&z||(V+=" The `href` argument encountered was "+f(z)+"."),S!==void 0&&typeof S!="object"?V+=" The `options` argument encountered was "+f(S)+".":S&&"as"in S&&typeof S.as!="string"&&(V+=" The `as` option encountered was "+f(S.as)+"."),V&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',V),typeof z=="string"&&(S?(V=d(S.as,S.crossOrigin),w.d.m(z,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:V,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})):w.d.m(z))},il.requestFormReset=function(z){w.d.r(z)},il.unstable_batchedUpdates=function(z,S){return z(S)},il.useFormState=function(z,S,V){return b().useFormState(z,S,V)},il.useFormStatus=function(){return b().useHostTransitionStatus()},il.version="19.3.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var qf=$r((Kk,uw)=>{"use strict";uw.exports=cw()});var dw=$r(xm=>{"use strict";(function(){function r(e,t){for(e=e.memoizedState;e!==null&&0<t;)e=e.next,t--;return e}function i(e,t,n,o){if(n>=t.length)return o;var l=t[n],a=Co(e)?e.slice():Nt({},e);return a[l]=i(e[l],t,n+1,o),a}function c(e,t,n){if(t.length!==n.length)console.warn("copyWithRename() expects paths of the same length");else{for(var o=0;o<n.length-1;o++)if(t[o]!==n[o]){console.warn("copyWithRename() expects paths to be the same except for the deepest key");return}return d(e,t,n,0)}}function d(e,t,n,o){var l=t[o],a=Co(e)?e.slice():Nt({},e);return o+1===t.length?(a[n[o]]=a[l],Co(a)?a.splice(l,1):delete a[l]):a[l]=d(e[l],t,n,o+1),a}function f(e,t,n){var o=t[n],l=Co(e)?e.slice():Nt({},e);return n+1===t.length?(Co(l)?l.splice(o,1):delete l[o],l):(l[o]=f(e[o],t,n+1),l)}function h(){return!1}function b(){return null}function v(){console.error("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks")}function w(){console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")}function j(){}function L(){}function R(e){var t=[];return e.forEach(function(n){t.push(n)}),t.sort().join(", ")}function H(e,t,n,o){return new Nc(e,t,n,o)}function z(e,t){e.context===Ki&&(Hp(e.current,2,t,e,null,null),Jc())}function S(e,t){if(si!==null){var n=t.staleFamilies;t=t.updatedFamilies,Nd(),p_(e.current,t,n),Jc()}}function V(e){si=e}function B(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ne(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function ze(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function G(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ue(e){if(ne(e)!==e)throw Error("Unable to find node on an unmounted component.")}function mt(e){var t=e.alternate;if(!t){if(t=ne(e),t===null)throw Error("Unable to find node on an unmounted component.");return t!==e?null:e}for(var n=e,o=t;;){var l=n.return;if(l===null)break;var a=l.alternate;if(a===null){if(o=l.return,o!==null){n=o;continue}break}if(l.child===a.child){for(a=l.child;a;){if(a===n)return ue(l),e;if(a===o)return ue(l),t;a=a.sibling}throw Error("Unable to find node on an unmounted component.")}if(n.return!==o.return)n=l,o=a;else{for(var s=!1,u=l.child;u;){if(u===n){s=!0,n=l,o=a;break}if(u===o){s=!0,o=l,n=a;break}u=u.sibling}if(!s){for(u=a.child;u;){if(u===n){s=!0,n=a,o=l;break}if(u===o){s=!0,o=a,n=l;break}u=u.sibling}if(!s)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(n.alternate!==o)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}if(n.tag!==3)throw Error("Unable to find node on an unmounted component.");return n.stateNode.current===n?e:t}function vt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=vt(e),t!==null)return t;e=e.sibling}return null}function ke(e,t,n,o,l){it(e.child,!1,t,n,o,l)}function it(e,t,n,o,l,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,o,l,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&it(e.child,t,n,o,l,a))return!0;e=e.sibling}return!1}function fe(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function Be(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function Qe(e){var t=[null,null],n=fe(e);return n===null||Me(t,e,n.child,{foundSelf:!1}),t}function Me(e,t,n,o){for(;n!==null;){if(n===t)o.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(o.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&Me(e,t,n.child,o))return!0;n=n.sibling}return!1}function Re(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error("Expected to find a host node. This is a bug in React.")}}function Le(e,t,n){return e===n?!0:e===t?(au=e,!0):!1}function J(e,t,n){return e===n?(Xp=e,!1):e===t?(Xp!==null&&(au=e),!0):!1}function pe(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function He(e,t,n){for(var o=0,l=e;l;l=n(l))o++;l=0;for(var a=t;a;a=n(a))l++;for(;0<o-l;)e=n(e),o--;for(;0<l-o;)t=n(t),l--;for(;o--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}function Ue(e){return e===null||typeof e!="object"?null:(e=m5&&e[m5]||e["@@iterator"],typeof e=="function"?e:null)}function Ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===v6?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case iu:return"Fragment";case Gp:return"Profiler";case ih:return"StrictMode";case Pp:return"Suspense";case Fp:return"SuspenseList";case Wp:return"Activity";case Zp:return"ViewTransition"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case ru:return"Portal";case Ga:return e.displayName||"Context";case Qp:return(e._context.displayName||"Context")+".Consumer";case sh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ch:return t=e.displayName||null,t!==null?t:Ne(e.type)||"Memo";case Hl:t=e._payload,e=e._init;try{return Ne(e(t))}catch{}}return null}function st(e){return typeof e.tag=="number"?Ee(e):typeof e.name=="string"?e.name:null}function Ee(e){var t=e.type;switch(e.tag){case 31:return"Activity";case 24:return"Cache";case 9:return(t._context.displayName||"Context")+".Consumer";case 10:return t.displayName||"Context";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 26:case 27:case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(t);case 8:return t===ih?"StrictMode":"Mode";case 22:if(e.return!==null)return Ee(e.return);break;case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 30:return"ViewTransition";case 1:case 0:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;break;case 29:if(t=e._debugInfo,t!=null){for(var n=t.length-1;0<=n;n--)if(typeof t[n].name=="string")return t[n].name}if(e.return!==null)return Ee(e.return)}return null}function ee(e){return{current:e}}function Oe(e,t){0>li?console.error("Unexpected pop."):(t!==Kp[li]&&console.error("Unexpected Fiber popped."),e.current=Jp[li],Jp[li]=null,Kp[li]=null,li--)}function ge(e,t,n){li++,Jp[li]=e.current,Kp[li]=n,e.current=t}function Ot(e){return e===null&&console.error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."),e}function Nn(e,t){ge(Qi,t,e),ge(Xd,e,e),ge(Gi,null,e);var n=t.nodeType;switch(n){case 9:case 11:n=n===9?"#document":"#fragment",t=(t=t.documentElement)&&(t=t.namespaceURI)?C2(t):yi;break;default:if(n=t.tagName,t=t.namespaceURI)t=C2(t),t=k2(t,n);else switch(n){case"svg":t=qu;break;case"math":t=_m;break;default:t=yi}}n=n.toLowerCase(),n=cd(null,n),n={context:t,ancestorInfo:n},Oe(Gi,e),ge(Gi,n,e)}function Cn(e){Oe(Gi,e),Oe(Xd,e),Oe(Qi,e)}function Pt(){return Ot(Gi.current)}function In(e){var t=e.memoizedState;t!==null&&(Xu._currentValue=t.memoizedState,ge(uh,e,e)),t=Ot(Gi.current);var n=e.type,o=k2(t.context,n);n=cd(t.ancestorInfo,n),o={context:o,ancestorInfo:n},t!==o&&(ge(Xd,e,e),ge(Gi,o,e))}function jn(e){Xd.current===e&&(Oe(Gi,e),Oe(Xd,e)),uh.current===e&&(Oe(uh,e),Xu._currentValue=fc)}function $o(){}function zn(){if(Gd===0){p5=console.log,g5=console.info,y5=console.warn,b5=console.error,v5=console.group,x5=console.groupCollapsed,w5=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$o,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Gd++}function Po(){if(Gd--,Gd===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Nt({},e,{value:p5}),info:Nt({},e,{value:g5}),warn:Nt({},e,{value:y5}),error:Nt({},e,{value:b5}),group:Nt({},e,{value:v5}),groupCollapsed:Nt({},e,{value:x5}),groupEnd:Nt({},e,{value:w5})})}0>Gd&&console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}function Ho(e){var t=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,e=e.stack,Error.prepareStackTrace=t,e.startsWith(`Error: react-stack-top-frame
`)&&(e=e.slice(29)),t=e.indexOf(`
`),t!==-1&&(e=e.slice(t+1)),t=e.indexOf("react_stack_bottom_frame"),t!==-1&&(t=e.lastIndexOf(`
`,t)),t!==-1)e=e.slice(0,t);else return"";return e}function Ln(e){if(eg===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);eg=t&&t[1]||"",S5=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+eg+e+S5}function ho(e,t){if(!e||tg)return"";var n=ng.get(e);if(n!==void 0)return n;tg=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var o=null;o=K.H,K.H=null,zn();try{var l={DetermineComponentFrameRoot:function(){try{if(t){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch($e){var q=$e}Reflect.construct(e,[],O)}else{try{O.call()}catch($e){q=$e}O=!1;try{var _e=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),O=!0,new e}finally{O&&(_e!==void 0?Object.defineProperty(e.prototype,"props",_e):delete e.prototype.props)}}}else{try{throw Error()}catch($e){q=$e}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch($e){if($e&&q&&typeof $e.stack=="string")return[$e.stack,q.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=l.DetermineComponentFrameRoot(),u=s[0],_=s[1];if(u&&_){var m=u.split(`
`),E=_.split(`
`);for(s=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;s<E.length&&!E[s].includes("DetermineComponentFrameRoot");)s++;if(a===m.length||s===E.length)for(a=m.length-1,s=E.length-1;1<=a&&0<=s&&m[a]!==E[s];)s--;for(;1<=a&&0<=s;a--,s--)if(m[a]!==E[s]){if(a!==1||s!==1)do if(a--,s--,0>s||m[a]!==E[s]){var D=`
`+m[a].replace(" at new "," at ");return e.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",e.displayName)),typeof e=="function"&&ng.set(e,D),D}while(1<=a&&0<=s);break}}}finally{tg=!1,K.H=o,Po(),Error.prepareStackTrace=n}return m=(m=e?e.displayName||e.name:"")?Ln(m):"",typeof e=="function"&&ng.set(e,m),m}function cl(e,t){switch(e.tag){case 26:case 27:case 5:return Ln(e.type);case 16:return Ln("Lazy");case 13:return e.child!==t&&t!==null?Ln("Suspense Fallback"):Ln("Suspense");case 19:return Ln("SuspenseList");case 0:case 15:return ho(e.type,!1);case 11:return ho(e.type.render,!1);case 1:return ho(e.type,!0);case 31:return Ln("Activity");case 30:return Ln("ViewTransition");default:return""}}function ye(e){try{var t="",n=null;do{t+=cl(e,n);var o=e._debugInfo;if(o)for(var l=o.length-1;0<=l;l--){var a=o[l];if(typeof a.name=="string"){var s=t;e:{var u=a.name,_=a.env,m=a.debugLocation;if(m!=null){var E=Ho(m),D=E.lastIndexOf(`
`),O=D===-1?E:E.slice(D+1);if(O.indexOf(u)!==-1){var q=`
`+O;break e}}q=Ln(u+(_?" ["+_+"]":""))}t=s+q}}n=e,e=e.return}while(e);return t}catch(_e){return`
Error generating stack: `+_e.message+`
`+_e.stack}}function We(e){return(e=e?e.displayName||e.name:"")?Ln(e):""}function dt(){if(Kl===null)return null;var e=Kl._debugOwner;return e!=null?st(e):null}function Te(){if(Kl===null)return"";var e=Kl;try{var t="";switch(e.tag===6&&(e=e.return),e.tag){case 26:case 27:case 5:t+=Ln(e.type);break;case 13:t+=Ln("Suspense");break;case 19:t+=Ln("SuspenseList");break;case 31:t+=Ln("Activity");break;case 30:t+=Ln("ViewTransition");break;case 0:case 15:case 1:e._debugOwner||t!==""||(t+=We(e.type));break;case 11:e._debugOwner||t!==""||(t+=We(e.type.render))}for(;e;)if(typeof e.tag=="number"){var n=e;e=n._debugOwner;var o=n._debugStack;if(e&&o){var l=Ho(o);l!==""&&(t+=`
`+l)}}else if(e.debugStack!=null){var a=e.debugStack;(e=e.owner)&&a&&(t+=`
`+Ho(a))}else break;var s=t}catch(u){s=`
Error generating stack: `+u.message+`
`+u.stack}return s}function ie(e,t,n,o,l,a,s){var u=Kl;Gt(e);try{return e!==null&&e._debugTask?e._debugTask.run(t.bind(null,n,o,l,a,s)):t(n,o,l,a,s)}finally{Gt(u)}throw Error("runWithFiberInDEV should never be called in production. This is a bug in React.")}function Gt(e){K.getCurrentStack=e===null?null:Te,Sr=!1,Kl=e}function kt(e){return typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}function Bt(e){try{return Rt(e),!1}catch{return!0}}function Rt(e){return""+e}function le(e,t){if(Bt(e))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",t,kt(e)),Rt(e)}function Y(e,t){if(Bt(e))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",t,kt(e)),Rt(e)}function F(e){if(Bt(e))return console.error("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",kt(e)),Rt(e)}function ce(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return console.error("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"),!0;try{cu=t.inject(e),ol=t}catch(n){console.error("React instrumentation encountered an error: %o.",n)}return!!t.checkDCE}function oe(e){if(typeof T6=="function"&&M6(e),ol&&typeof ol.setStrictMode=="function")try{ol.setStrictMode(cu,e)}catch(t){Cr||(Cr=!0,console.error("React instrumentation encountered an error: %o",t))}}function Ie(e){return e>>>=0,e===0?32:31-(R6(e)/A6|0)|0}function De(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error("Should have found matching lanes. This is a bug in React."),e}}function me(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var l=0,a=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var u=o&134217727;return u!==0?(o=u&~a,o!==0?l=De(o):(s&=u,s!==0?l=De(s):n||(n=u&~e,n!==0&&(l=De(n))))):(u=o&~a,u!==0?l=De(u):s!==0?l=De(s):n||(n=o&~e,n!==0&&(l=De(n)))),l===0?0:t!==0&&t!==l&&(t&a)===0&&(a=l&-l,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:l}function je(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rt(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var o=31-vl(n),l=1<<o;t|=e[o],n&=~l}return t}function xt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error("Should have found matching lanes. This is a bug in React."),-1}}function $t(){var e=_h;return _h<<=1,(_h&62914560)===0&&(_h=4194304),e}function p(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function U(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ae(e,t,n,o,l,a){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var u=e.entanglements,_=e.expirationTimes,m=e.hiddenUpdates;for(n=s&~n;0<n;){var E=31-vl(n),D=1<<E;u[E]=0,_[E]=-1;var O=m[E];if(O!==null)for(m[E]=null,E=0;E<O.length;E++){var q=O[E];q!==null&&(q.lane&=-536870913)}n&=~D}o!==0&&te(e,o,0),a!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=a&~(s&~t))}function te(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-vl(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&261930}function ve(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-vl(n),l=1<<o;l&t|e[o]&t&&(e[o]|=t),n&=~l}}function et(e,t){var n=t&-t;return n=(n&42)!==0?1:Ce(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ce(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ae(e,t,n){if(kr)for(e=e.pendingUpdatersLaneMap;0<n;){var o=31-vl(n),l=1<<o;e[o].add(t),n&=~l}}function Ge(e,t){if(kr)for(var n=e.pendingUpdatersLaneMap,o=e.memoizedUpdaters;0<t;){var l=31-vl(t);e=1<<l,l=n[l],0<l.size&&(l.forEach(function(a){var s=a.alternate;s!==null&&o.has(s)||o.add(a)}),l.clear()),t&=~e}}function Ht(e){return e&=-e,xl!==0&&xl<e?Qa!==0&&Qa<e?(e&134217727)!==0?Er:hh:Qa:xl}function jt(){var e=fn.p;return e!==0?e:(e=window.event,e===void 0?Er:s5(e.type))}function Ye(e,t){var n=fn.p;try{return fn.p=e,t()}finally{fn.p=n}}function oo(e){delete e[qo],delete e[wl],delete e[O6],delete e[D6]}function Zn(e){var t;if(t=e[qo])return t;for(var n=e.parentNode;n;){if(t=n[Pi]||n[qo]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=V2(e);e!==null;){if(n=e[qo])return n;e=V2(e)}return t}e=n,n=e.parentNode}return null}function An(e){if(e=e[qo]||e[Pi]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error("getNodeFromInstance: Invalid argument.")}function Wo(e){var t=e[k5];return t||(t=e[k5]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function hn(e){e[Qd]=!0}function ul(e){e[mh]=void 0}function Ql(e,t){ia(e,t),ia(e+"Capture",t)}function ia(e,t){Ys[e]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),Ys[e]=t;var n=e.toLowerCase();for(ig[n]=e,e==="onDoubleClick"&&(ig.ondblclick=e),e=0;e<t.length;e++)E5.add(t[e])}function Rl(e,t){N6[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||console.error(e==="select"?"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.":"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function yc(e){return va.call(M5,e)?!0:va.call(T5,e)?!1:z6.test(e)?M5[e]=!0:(T5[e]=!0,console.error("Invalid attribute name: `%s`",e),!1)}function nd(){var e=sn;return sn=!1,e}function od(e,t,n){if(yc(t)){if(!e.hasAttribute(t)){switch(typeof n){case"symbol":case"object":return n;case"function":return n;case"boolean":if(n===!1)return n}return n===void 0?void 0:null}return e=t.toLowerCase()==="nonce"?e.nonce:e.getAttribute(t),e===""&&n===!0?!0:(le(n,t),e===""+n?n:e)}}function Jt(e,t,n){if(yc(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}le(n,t),e.setAttribute(t,n)}}function bc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}le(n,t),e.setAttribute(t,n)}}function Jn(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}le(o,n),e.setAttributeNS(t,n,o)}}function Zo(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return F(e),e;default:return""}}function mo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ir(e,t,n){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var l=o.get,a=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){F(s),n=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return n},setValue:function(s){F(s),n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ld(e){if(!e._valueTracker){var t=mo(e)?"checked":"value";e._valueTracker=Ir(e,t,""+e[t])}}function ad(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=mo(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function dl(e){return e.replace(L6,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vc(e,t){t.checked===void 0||t.defaultChecked===void 0||A5||(console.error("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",dt()||"A component",t.type),A5=!0),t.value===void 0||t.defaultValue===void 0||R5||(console.error("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",dt()||"A component",t.type),R5=!0)}function Ft(e,t,n,o,l,a,s,u){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?(le(s,"type"),e.type=s):e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Zo(t)):e.value!==""+Zo(t)&&(e.value=""+Zo(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?s==="number"&&e.value==t?Da(e,Zo(e.value)):Da(e,Zo(t)):n!=null?Da(e,Zo(n)):o!=null&&e.removeAttribute("value"),l==null&&a!=null&&(e.defaultChecked=!!a),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?(le(u,"name"),e.name=""+Zo(u)):e.removeAttribute("name")}function xc(e,t,n,o,l,a,s,u){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(le(a,"type"),e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){ld(e);return}n=n!=null?""+Zo(n):"",t=t!=null?""+Zo(t):n,u||t===e.value||(e.value=t),e.defaultValue=t}o=o??l,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=u?e.checked:!!o,e.defaultChecked=!!o,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(le(s,"name"),e.name=s),ld(e)}function Da(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function xi(e,t){t.value==null&&(typeof t.children=="object"&&t.children!==null?Vp.Children.forEach(t.children,function(n){n==null||typeof n=="string"||typeof n=="number"||typeof n=="bigint"||D5||(D5=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):t.dangerouslySetInnerHTML==null||N5||(N5=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),t.selected==null||O5||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),O5=!0)}function Dt(){var e=dt();return e?`

Check the render method of \``+e+"`.":""}function Jo(e,t,n,o){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Zo(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,o&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function jr(e,t){for(e=0;e<L5.length;e++){var n=L5[e];if(t[n]!=null){var o=Co(t[n]);t.multiple&&!o?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,Dt()):!t.multiple&&o&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,Dt())}}t.value===void 0||t.defaultValue===void 0||z5||(console.error("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"),z5=!0)}function or(e,t){t.value===void 0||t.defaultValue===void 0||B5||(console.error("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",dt()||"A component"),B5=!0),t.children!=null&&t.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function wc(e,t,n){if(t!=null&&(t=""+Zo(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Zo(n):""}function yn(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Co(o)){if(1<o.length)throw Error("<textarea> can only have at most one child.");o=o[0]}n=o}n==null&&(n=""),t=n}n=Zo(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o),ld(e)}function rd(e,t){return e.serverProps===void 0&&e.serverTail.length===0&&e.children.length===1&&3<e.distanceFromLeaf&&e.distanceFromLeaf>15-t?rd(e.children[0],t):e}function Ko(e){return"  "+"  ".repeat(e)}function lr(e){return"+ "+"  ".repeat(e)}function ar(e){return"- "+"  ".repeat(e)}function l_(e){switch(e.tag){case 26:case 27:case 5:return e.type;case 16:return"Lazy";case 31:return"Activity";case 13:return"Suspense";case 19:return"SuspenseList";case 0:case 15:return e=e.type,e.displayName||e.name||null;case 11:return e=e.type.render,e.displayName||e.name||null;case 1:return e=e.type,e.displayName||e.name||null;default:return null}}function wi(e,t){return $5.test(e)?(e=JSON.stringify(e),e.length>t-2?8>t?'{"..."}':"{"+e.slice(0,t-7)+'..."}':"{"+e+"}"):e.length>t?5>t?'{"..."}':e.slice(0,t-3)+"...":e}function id(e,t,n){var o=120-2*n;if(t===null)return lr(n)+wi(e,o)+`
`;if(typeof t=="string"){for(var l=0;l<t.length&&l<e.length&&t.charCodeAt(l)===e.charCodeAt(l);l++);return l>o-8&&10<l&&(e="..."+e.slice(l-8),t="..."+t.slice(l-8)),lr(n)+wi(e,o)+`
`+ar(n)+wi(t,o)+`
`}return Ko(n)+wi(e,o)+`
`}function lo(e){return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/,function(t,n){return n})}function rr(e,t){switch(typeof e){case"string":return e=JSON.stringify(e),e.length>t?5>t?'"..."':e.slice(0,t-4)+'..."':e;case"object":if(e===null)return"null";if(Co(e))return"[...]";if(e.$$typeof===wr)return(t=Ne(e.type))?"<"+t+">":"<...>";var n=lo(e);if(n==="Object"){n="",t-=2;for(var o in e)if(e.hasOwnProperty(o)){var l=JSON.stringify(o);if(l!=='"'+o+'"'&&(o=l),t-=o.length-2,l=rr(e[o],15>t?t:15),t-=l.length,0>t){n+=n===""?"...":", ...";break}n+=(n===""?"":",")+o+":"+l}return"{"+n+"}"}return n;case"function":return(t=e.displayName||e.name)?"function "+t:"function";default:return String(e)}}function Si(e,t){return typeof e!="string"||$5.test(e)?"{"+rr(e,t-2)+"}":e.length>t-2?5>t?'"..."':'"'+e.slice(0,t-5)+'..."':'"'+e+'"'}function sd(e,t,n){var o=120-n.length-e.length,l=[],a;for(a in t)if(t.hasOwnProperty(a)&&a!=="children"){var s=Si(t[a],120-n.length-a.length-1);o-=a.length+s.length+2,l.push(a+"="+s)}return l.length===0?n+"<"+e+`>
`:0<o?n+"<"+e+" "+l.join(" ")+`>
`:n+"<"+e+`
`+n+"  "+l.join(`
`+n+"  ")+`
`+n+`>
`}function ot(e,t,n){var o="",l=Nt({},t),a;for(a in e)if(e.hasOwnProperty(a)){delete l[a];var s=120-2*n-a.length-2,u=rr(e[a],s);t.hasOwnProperty(a)?(s=rr(t[a],s),o+=lr(n)+a+": "+u+`
`,o+=ar(n)+a+": "+s+`
`):o+=lr(n)+a+": "+u+`
`}for(var _ in l)l.hasOwnProperty(_)&&(e=rr(l[_],120-2*n-_.length-2),o+=ar(n)+_+": "+e+`
`);return o}function sa(e,t,n,o){var l="",a=new Map;for(m in n)n.hasOwnProperty(m)&&a.set(m.toLowerCase(),m);if(a.size===1&&a.has("children"))l+=sd(e,t,Ko(o));else{for(var s in t)if(t.hasOwnProperty(s)&&s!=="children"){var u=120-2*(o+1)-s.length-1,_=a.get(s.toLowerCase());if(_!==void 0){a.delete(s.toLowerCase());var m=t[s];_=n[_];var E=Si(m,u);u=Si(_,u),typeof m=="object"&&m!==null&&typeof _=="object"&&_!==null&&lo(m)==="Object"&&lo(_)==="Object"&&(2<Object.keys(m).length||2<Object.keys(_).length||-1<E.indexOf("...")||-1<u.indexOf("..."))?l+=Ko(o+1)+s+`={{
`+ot(m,_,o+2)+Ko(o+1)+`}}
`:(l+=lr(o+1)+s+"="+E+`
`,l+=ar(o+1)+s+"="+u+`
`)}else l+=Ko(o+1)+s+"="+Si(t[s],u)+`
`}a.forEach(function(D){if(D!=="children"){var O=120-2*(o+1)-D.length-1;l+=ar(o+1)+D+"="+Si(n[D],O)+`
`}}),l=l===""?Ko(o)+"<"+e+`>
`:Ko(o)+"<"+e+`
`+l+Ko(o)+`>
`}return e=n.children,t=t.children,typeof e=="string"||typeof e=="number"||typeof e=="bigint"?(a="",(typeof t=="string"||typeof t=="number"||typeof t=="bigint")&&(a=""+t),l+=id(a,""+e,o+1)):(typeof t=="string"||typeof t=="number"||typeof t=="bigint")&&(l=e==null?l+id(""+t,null,o+1):l+id(""+t,void 0,o+1)),l}function Sc(e,t){var n=l_(e);if(n===null){for(n="",e=e.child;e;)n+=Sc(e,t),e=e.sibling;return n}return Ko(t)+"<"+n+`>
`}function ws(e,t){var n=rd(e,t);if(n!==e&&(e.children.length!==1||e.children[0]!==n))return Ko(t)+`...
`+ws(n,t+1);n="";var o=e.fiber._debugInfo;if(o)for(var l=0;l<o.length;l++){var a=o[l].name;typeof a=="string"&&(n+=Ko(t)+"<"+a+`>
`,t++)}if(o="",l=e.fiber.pendingProps,e.fiber.tag===6)o=id(l,e.serverProps,t),t++;else if(a=l_(e.fiber),a!==null)if(e.serverProps===void 0){o=t;var s=120-2*o-a.length-2,u="";for(m in l)if(l.hasOwnProperty(m)&&m!=="children"){var _=Si(l[m],15);if(s-=m.length+_.length+2,0>s){u+=" ...";break}u+=" "+m+"="+_}o=Ko(o)+"<"+a+u+`>
`,t++}else e.serverProps===null?(o=sd(a,l,lr(t)),t++):typeof e.serverProps=="string"?console.error("Should not have matched a non HostText fiber to a Text node. This is a bug in React."):(o=sa(a,l,e.serverProps,t),t++);var m="";for(l=e.fiber.child,a=0;l&&a<e.children.length;)s=e.children[a],s.fiber===l?(m+=ws(s,t),a++):m+=Sc(l,t),l=l.sibling;for(l&&0<e.children.length&&(m+=Ko(t)+`...
`),l=e.serverTail,e.serverProps===null&&t--,e=0;e<l.length;e++)a=l[e],m=typeof a=="string"?m+(ar(t)+wi(a,120-2*t)+`
`):m+sd(a.type,a.props,ar(t));return n+o+m}function Na(e){try{return`

`+ws(e,0)}catch{return""}}function a_(e,t,n){for(var o=t,l=null,a=0;o;)o===e&&(a=0),l={fiber:o,children:l!==null?[l]:[],serverProps:o===t?n:o===e?null:void 0,serverTail:[],distanceFromLeaf:a},a++,o=o.return;return l!==null?Na(l).replaceAll(/^[+-]/gm,">"):""}function cd(e,t){var n=Nt({},e||U5),o={tag:t};return H5.indexOf(t)!==-1&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),$6.indexOf(t)!==-1&&(n.pTagInButtonScope=null),B6.indexOf(t)!==-1&&t!=="address"&&t!=="div"&&t!=="p"&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=o,t==="form"&&(n.formTag=o),t==="a"&&(n.aTagInScope=o),t==="button"&&(n.buttonTagInScope=o),t==="nobr"&&(n.nobrTagInScope=o),t==="p"&&(n.pTagInButtonScope=o),t==="li"&&(n.listItemTagAutoclosing=o),(t==="dd"||t==="dt")&&(n.dlItemTagAutoclosing=o),t==="#document"||t==="html"?n.containerTagInScope=null:n.containerTagInScope||(n.containerTagInScope=o),e!==null||t!=="#document"&&t!=="html"&&t!=="body"?n.implicitRootScope===!0&&(n.implicitRootScope=!1):n.implicitRootScope=!0,n}function r_(e,t,n){switch(t){case"tr":return e==="th"||e==="td"||e==="style"||e==="script"||e==="template";case"tbody":case"thead":case"tfoot":return e==="tr"||e==="style"||e==="script"||e==="template";case"colgroup":return e==="col"||e==="template";case"table":return e==="caption"||e==="colgroup"||e==="tbody"||e==="tfoot"||e==="thead"||e==="style"||e==="script"||e==="template";case"head":return e==="base"||e==="basefont"||e==="bgsound"||e==="link"||e==="meta"||e==="title"||e==="noscript"||e==="noframes"||e==="style"||e==="script"||e==="template";case"html":if(n)break;return e==="head"||e==="body"||e==="frameset";case"frameset":return e==="frame";case"#document":if(!n)return e==="html"}switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t!=="h1"&&t!=="h2"&&t!=="h3"&&t!=="h4"&&t!=="h5"&&t!=="h6";case"rp":case"rt":return H6.indexOf(t)===-1;case"caption":case"col":case"colgroup":case"input":return t!=="select";case"frameset":case"frame":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":return t==null;case"head":return n||t===null;case"html":return n&&t==="#document"||t===null;case"body":return n&&(t==="#document"||t==="html")||t===null}return!0}function Qm(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null}function Yr(e,t){for(;e;){switch(e.tag){case 5:case 26:case 27:if(e.type===t)return e}e=e.return}return null}function Cc(e,t){t=t||U5;var n=t.current;if(t=(n=r_(e,n&&n.tag,t.implicitRootScope)?null:n)?null:Qm(e,t),t=n||t,!t)return!0;var o=t.tag;if(t=String(!!n)+"|"+e+"|"+o,ph[t])return!1;ph[t]=!0;var l=(t=Kl)?Yr(t.return,o):null,a=t!==null&&l!==null?a_(l,t,null):"",s="<"+e+">";return n?(n="",o==="table"&&e==="tr"&&(n+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,s,o,n,a)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,s,o,a),t&&(e=t.return,l===null||e===null||l===e&&e._debugOwner===t._debugOwner||ie(l,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,o,s)})),!1}function za(e,t,n){if(n||r_("#text",t,!1))return!0;if(n="#text|"+t,ph[n])return!1;ph[n]=!0;var o=(n=Kl)?Yr(n,t):null;return n=n!==null&&o!==null?a_(o,n,n.tag!==6?{children:null}:null):"",/\S/.test(e)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,t,n):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,t,n),!1}function Ci(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function i_(e){return e.replace(j6,function(t,n){return n.toUpperCase()})}function qr(e,t,n){var o=t.indexOf("--")===0;o||(-1<t.indexOf("-")?uu.hasOwnProperty(t)&&uu[t]||(uu[t]=!0,console.error("Unsupported style property %s. Did you mean %s?",t,i_(t.replace(I6,"ms-")))):U6.test(t)?uu.hasOwnProperty(t)&&uu[t]||(uu[t]=!0,console.error("Unsupported vendor-prefixed style property %s. Did you mean %s?",t,t.charAt(0).toUpperCase()+t.slice(1))):!Y5.test(n)||cg.hasOwnProperty(n)&&cg[n]||(cg[n]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,t,n.replace(Y5,""))),typeof n=="number"&&(isNaN(n)?q5||(q5=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",t)):isFinite(n)||V5||(V5=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",t)))),n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||X5.has(t)?t==="float"?e.cssFloat=n:(Y(n,t),e[t]=(""+n).trim()):e[t]=n+"px"}function ki(e,t,n){if(t!=null&&typeof t!="object")throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(t&&Object.freeze(t),e=e.style,n!=null){if(t){var o={};if(n){for(var l in n)if(n.hasOwnProperty(l)&&!t.hasOwnProperty(l))for(var a=sg[l]||[l],s=0;s<a.length;s++)o[a[s]]=l}for(var u in t)if(t.hasOwnProperty(u)&&(!n||n[u]!==t[u]))for(l=sg[u]||[u],a=0;a<l.length;a++)o[l[a]]=u;u={};for(var _ in t)for(l=sg[_]||[_],a=0;a<l.length;a++)u[l[a]]=_;_={};for(var m in o)if(l=o[m],(a=u[m])&&l!==a&&(s=l+","+a,!_[s])){_[s]=!0,s=console;var E=t[l];s.error.call(s,"%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",E==null||typeof E=="boolean"||E===""?"Removing":"Updating",l,a)}}for(var D in n)!n.hasOwnProperty(D)||t!=null&&t.hasOwnProperty(D)||(D.indexOf("--")===0?e.setProperty(D,""):D==="float"?e.cssFloat="":e[D]="",sn=!0);for(var O in t)m=t[O],t.hasOwnProperty(O)&&n[O]!==m&&(qr(e,O,m),sn=!0)}else for(o in t)t.hasOwnProperty(o)&&qr(e,o,t[o])}function ir(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Al(e){return Y6.get(e)||e}function Ei(e,t){if(va.call(fu,t)&&fu[t])return!0;if(V6.test(t)){if(e="aria-"+t.slice(4).toLowerCase(),e=G5.hasOwnProperty(e)?e:null,e==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),fu[t]=!0;if(t!==e)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,e),fu[t]=!0}if(q6.test(t)){if(e=t.toLowerCase(),e=G5.hasOwnProperty(e)?e:null,e==null)return fu[t]=!0,!1;t!==e&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,e),fu[t]=!0)}return!0}function s_(e,t){var n=[],o;for(o in t)Ei(e,o)||n.push(o);t=n.map(function(l){return"`"+l+"`"}).join(", "),n.length===1?console.error("Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",t,e):1<n.length&&console.error("Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",t,e)}function ud(e,t,n,o){if(va.call(Sl,t)&&Sl[t])return!0;var l=t.toLowerCase();if(l==="onfocusin"||l==="onfocusout")return console.error("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),Sl[t]=!0;if(typeof n=="function"&&(e==="form"&&t==="action"||e==="input"&&t==="formAction"||e==="button"&&t==="formAction"))return!0;if(o!=null){if(e=o.possibleRegistrationNames,o.registrationNameDependencies.hasOwnProperty(t))return!0;if(o=e.hasOwnProperty(l)?e[l]:null,o!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",t,o),Sl[t]=!0;if(P5.test(t))return console.error("Unknown event handler property `%s`. It will be ignored.",t),Sl[t]=!0}else if(P5.test(t))return X6.test(t)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),Sl[t]=!0;if(G6.test(t)||Q6.test(t))return!0;if(l==="innerhtml")return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Sl[t]=!0;if(l==="aria")return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Sl[t]=!0;if(l==="is"&&n!==null&&n!==void 0&&typeof n!="string")return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),Sl[t]=!0;if(typeof n=="number"&&isNaN(n))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),Sl[t]=!0;if(yh.hasOwnProperty(l)){if(l=yh[l],l!==t)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",t,l),Sl[t]=!0}else if(t!==l)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,l),Sl[t]=!0;switch(t){case"dangerouslySetInnerHTML":case"children":case"style":case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":return!0;case"innerText":case"textContent":return!0}switch(typeof n){case"boolean":switch(t){case"autoFocus":case"checked":case"multiple":case"muted":case"selected":case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"capture":case"download":case"inert":return!0;default:return l=t.toLowerCase().slice(0,5),l==="data-"||l==="aria-"?!0:(n?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),Sl[t]=!0)}case"function":case"symbol":return Sl[t]=!0,!1;case"string":if(n==="false"||n==="true"){switch(t){case"checked":case"selected":case"multiple":case"muted":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":case"inert":break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,n==="false"?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),Sl[t]=!0}}return!0}function dd(e,t,n){var o=[],l;for(l in t)ud(e,l,t[l],n)||o.push(l);t=o.map(function(a){return"`"+a+"`"}).join(", "),o.length===1?console.error("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",t,e):1<o.length&&console.error("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",t,e)}function Vr(e){return P6.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function To(){}function el(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function kc(e){var t=An(e);if(t&&(e=t.stateNode)){var n=e[wl]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ft(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(le(t,"name"),n=n.querySelectorAll('input[name="'+dl(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var l=o[wl]||null;if(!l)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");Ft(o,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&ad(o)}break e;case"textarea":wc(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Jo(e,!!n.multiple,t,!1)}}}function Ol(e,t,n){if(ug)return e(t,n);ug=!0;try{var o=e(t);return o}finally{if(ug=!1,(_u!==null||hu!==null)&&(Jc(),_u&&(t=_u,e=hu,hu=_u=null,kc(t),e)))for(t=0;t<e.length;t++)kc(e[t])}}function Ss(e,t){var n=e.stateNode;if(n===null)return null;var o=n[wl]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof n+"` type.");return n}function Ec(){if(bh)return bh;var e,t=fg,n=t.length,o,l="value"in Fi?Fi.value:Fi.textContent,a=l.length;for(e=0;e<n&&t[e]===l[e];e++);var s=n-e;for(o=1;o<=s&&t[n-o]===l[a-o];o++);return bh=l.slice(e,1<o?1-o:void 0)}function Cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fd(){return!0}function Tc(){return!1}function tl(e){function t(n,o,l,a,s){this._reactName=n,this._targetInst=l,this.type=o,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(a):a[u]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?fd:Tc,this.isPropagationStopped=Tc,this}return Nt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fd)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fd)},persist:function(){},isPersistent:fd}),t}function l1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=i3[e])?!!t[e]:!1}function c_(){return l1}function Pm(e,t){switch(e){case"keyup":return x3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==J5;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}function a1(e,t){switch(e){case"compositionend":return Fm(t);case"keypress":return t.which!==ev?null:(nv=!0,tv);case"textInput":return e=t.data,e===tv&&nv?null:e;default:return null}}function _d(e,t){if(mu)return e==="compositionend"||!pg&&Pm(e,t)?(e=Ec(),bh=fg=Fi=null,mu=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return K5&&t.locale!=="ko"?null:t.data;default:return null}}function hd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!S3[e.type]:t==="textarea"}function Ti(e){if(!Tr)return!1;e="on"+e;var t=e in document;return t||(t=document.createElement("div"),t.setAttribute(e,"return;"),t=typeof t[e]=="function"),t}function Uo(e,t,n,o){_u?hu?hu.push(o):hu=[o]:_u=o,t=eh(t,"onChange"),0<t.length&&(n=new vh("onChange","change",null,n,o),e.push({event:n,listeners:t}))}function sr(e){d2(e,0)}function cr(e){var t=Fo(e);if(ad(t))return e}function po(e,t){if(e==="change")return t}function u_(){Kd&&(Kd.detachEvent("onpropertychange",md),ef=Kd=null)}function md(e){if(e.propertyName==="value"&&cr(ef)){var t=[];Uo(t,ef,e,el(e)),Ol(sr,t)}}function d_(e,t,n){e==="focusin"?(u_(),Kd=t,ef=n,Kd.attachEvent("onpropertychange",md)):e==="focusout"&&u_()}function nn(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cr(ef)}function Wm(e,t){if(e==="click")return cr(t)}function ca(e,t){if(e==="input"||e==="change")return cr(t)}function f_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}function Mi(e,t){if(Cl(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var l=n[o];if(!va.call(t,l)||!Cl(e[l],t[l]))return!1}return!0}function Mc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function __(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function h_(e,t){var n=__(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=__(n)}}function pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ua(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mc(e.document)}return t}function Qn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Rc(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yg||pu==null||pu!==Mc(o)||(o=pu,"selectionStart"in o&&Qn(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),tf&&Mi(tf,o)||(tf=o,o=eh(gg,"onSelect"),0<o.length&&(t=new vh("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=pu)))}function ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}function fl(e){if(bg[e])return bg[e];if(!gu[e])return e;var t=gu[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lv)return bg[e]=t[n];return e}function go(e,t){cv.set(e,t),Ql(t,[e])}function rn(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=er.identifierPrefix;var n=M3++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function Ac(e){if(e==null||typeof e=="string")return e;var t=null,n=Hu;if(n!==null)for(var o=0;o<n.length;o++){var l=e[n[o]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??e.default}function Dl(e,t){return e=Ac(e),t=Ac(t),t==null?e==="auto"?null:e:t==="auto"?null:t}function m_(e){for(var t=wh,n=0;n<e.length&&n<xa;n++){var o=e[n];if(typeof o=="object"&&o!==null)if(Co(o)&&o.length===2&&typeof o[0]=="string"){if(t!==wh&&t!==Cg)return wg;t=Cg}else return wg;else{if(typeof o=="function"||typeof o=="string"&&50<o.length||t!==wh&&t!==Sg||typeof o=="bigint")return wg;t=Sg}}return t}function Xr(e,t,n,o){if(!ArrayBuffer.isView(e)){var l=0,a;for(a in e)if(va.call(e,a)&&a[0]!=="_"&&(l++,yo(a,e[a],t,n,o),l>=xa)){t.push([o+"\xA0\xA0".repeat(n)+"Only "+xa+" properties are shown. React will not log more properties of this object.",""]);break}}}function Gr(e){return"$$typeof"in e&&va.call(e,"$$typeof")?e.$$typeof:void 0}function yo(e,t,n,o,l){switch(typeof t){case"object":if(t===null){t="null";break}else{if(Gr(t)===wr){var a=Ne(t.type)||"\u2026",s=t.key;t=t.props;var u=Object.keys(t),_=u.length;if(s==null&&_===0){t="<"+a+" />";break}if(3>o||_===1&&u[0]==="children"&&s==null){t="<"+a+" \u2026 />";break}n.push([l+"\xA0\xA0".repeat(o)+e,"<"+a]),s!==null&&yo("key",s,n,o+1,l),e=!1,s=0;for(var m in t)if(s++,m==="children"?t.children!=null&&(!Co(t.children)||0<t.children.length)&&(e=!0):va.call(t,m)&&m[0]!=="_"&&yo(m,t[m],n,o+1,l),s>=xa)break;n.push(["",e?">\u2026</"+a+">":"/>"]);return}if(a=Object.prototype.toString.call(t),a=a.slice(8,a.length-1),ArrayBuffer.isView(t)){t=t.length,t=typeof t=="number"?a+"("+t+")":a;break}if(a==="Array"){if(m=t.length>xa,s=m_(t),s===Sg||s===wh){t=JSON.stringify(m?t.slice(0,xa).concat("\u2026"):t);break}else if(s===Cg){for(n.push([l+"\xA0\xA0".repeat(o)+e,""]),e=0;e<t.length&&e<xa;e++)a=t[e],yo(a[0],a[1],n,o+1,l);m&&yo(xa.toString(),"\u2026",n,o+1,l);return}}if(a==="Promise"){if(t.status==="fulfilled"){if(a=n.length,yo(e,t.value,n,o,l),n.length>a){n=n[a],n[1]="Promise<"+(n[1]||"Object")+">";return}}else if(t.status==="rejected"&&(a=n.length,yo(e,t.reason,n,o,l),n.length>a)){n=n[a],n[1]="Rejected Promise<"+n[1]+">";return}n.push(["\xA0\xA0".repeat(o)+e,"Promise"]);return}a==="Object"&&(m=Object.getPrototypeOf(t))&&typeof m.constructor=="function"&&(a=m.constructor.name),n.push([l+"\xA0\xA0".repeat(o)+e,a==="Object"?3>o?"":"\u2026":a]),3>o&&Xr(t,n,o+1,l);return}case"function":t=t.name,t=t===""||typeof t!="string"?"() => {}":t+"() {}";break;case"string":t=t===O3?"\u2026":JSON.stringify(1024<=t.length?t.slice(0,1023)+"\u2026":t);break;case"undefined":t="undefined";break;case"boolean":t=t?"true":"false";break;default:t=String(t)}n.push([l+"\xA0\xA0".repeat(o)+e,t])}function ks(e,t,n,o){var l=!0,a=0;for(u in e){if(a>xa){n.push(["Previous object has more than "+xa+" properties. React will not attempt to diff objects with too many properties.",""]),l=!1;break}u in t||(n.push([Sh+"\xA0\xA0".repeat(o)+u,"\u2026"]),l=!1),a++}a=0;for(var s in t){if(a>xa){n.push(["Next object has more than "+xa+" properties. React will not attempt to diff objects with too many properties.",""]),l=!1;break}if(s in e){var u=e[s],_=t[s];if(u!==_){if(o===0&&s==="children"){l="\xA0\xA0".repeat(o)+s,n.push([Sh+l,"\u2026"],[Ch+l,"\u2026"]),l=!1;continue}if(!(3<=o)){if(typeof u=="object"&&typeof _=="object"&&u!==null&&_!==null&&Gr(u)===Gr(_))if(Gr(_)===wr){if(u.type===_.type&&u.key===_.key){u=Ne(_.type)||"\u2026",l="\xA0\xA0".repeat(o)+s,u="<"+u+" \u2026 />",n.push([Sh+l,u],[Ch+l,u]),l=!1;continue}}else{var m=Object.prototype.toString.call(u),E=Object.prototype.toString.call(_);if(m===E&&(E==="[object Object]"||E==="[object Array]")){m=[fv+"\xA0\xA0".repeat(o)+s,E==="[object Array]"?"Array":""],n.push(m),E=n.length,ks(u,_,n,o+1)?E===n.length&&(m[1]="Referentially unequal but deeply equal objects. Consider memoization."):l=!1;continue}}else if(typeof u=="function"&&typeof _=="function"&&u.name===_.name&&u.length===_.length&&(m=Function.prototype.toString.call(u),E=Function.prototype.toString.call(_),m===E)){u=_.name===""?"() => {}":_.name+"() {}",n.push([fv+"\xA0\xA0".repeat(o)+s,u+" Referentially unequal function closure. Consider memoization."]);continue}}yo(s,u,n,o,Sh),yo(s,_,n,o,Ch),l=!1}}else n.push([Ch+"\xA0\xA0".repeat(o)+s,"\u2026"]),l=!1;a++}return l}function bo(e){Qt=e&63?"Blocking":e&64?"Gesture":e&4194176?"Transition":e&62914560?"Suspense":e&2080374784?"Idle":"Other"}function vo(e,t,n,o){Bn&&(Ji.start=t,Ji.end=n,ri.color="warning",ri.tooltipText=o,ri.properties=null,(e=e._debugTask)?e.run(performance.measure.bind(performance,o,Ji)):performance.measure(o,Ji),performance.clearMeasures(o))}function Qr(e,t,n){vo(e,t,n,"Reconnect")}function Io(e,t,n,o,l){var a=Ee(e);if(a!==null&&Bn){var s=e.alternate,u=e.actualDuration;if(s===null||s.child!==e.child)for(var _=e.child;_!==null;_=_.sibling)u-=_.actualDuration;u=.5>u?o?"tertiary-light":"primary-light":10>u?o?"tertiary":"primary":100>u?o?"tertiary-dark":"primary-dark":"error";var m=e.memoizedProps;o=e._debugTask,m!==null&&s!==null&&s.memoizedProps!==m?(_=[D3],m=ks(s.memoizedProps,m,_,0),1<_.length?(m&&!Zi&&(s.lanes&l)===0&&100<e.actualDuration?(Zi=!0,_[0]=N3,ri.color="warning",ri.tooltipText=_v):(ri.color=u,ri.tooltipText=a),ri.properties=_,Ji.start=t,Ji.end=n,e="\u200B"+a,o!=null?o.run(performance.measure.bind(performance,e,Ji)):performance.measure(e,Ji),performance.clearMeasures(e)):o!=null?o.run(console.timeStamp.bind(console,a,t,n,Ul,void 0,u)):console.timeStamp(a,t,n,Ul,void 0,u)):o!=null?o.run(console.timeStamp.bind(console,a,t,n,Ul,void 0,u)):console.timeStamp(a,t,n,Ul,void 0,u)}}function Pr(e,t,n,o){if(Bn){var l=Ee(e);if(l!==null){for(var a=null,s=[],u=0;u<o.length;u++){var _=o[u];a==null&&_.source!==null&&(a=_.source._debugTask),_=_.value,s.push(["Error",typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_)])}e.key!==null&&yo("key",e.key,s,0,""),e.memoizedProps!==null&&Xr(e.memoizedProps,s,0,""),a==null&&(a=e._debugTask),e={start:t,end:n,detail:{devtools:{color:"error",track:Ul,tooltipText:e.tag===13?"Hydration failed":"Error boundary caught an error",properties:s}}},l="\u200B"+l,a?a.run(performance.measure.bind(performance,l,e)):performance.measure(l,e),performance.clearMeasures(l)}}}function Mo(e,t,n,o,l){if(l!==null){if(Bn){var a=Ee(e);if(a!==null){o=[];for(var s=0;s<l.length;s++){var u=l[s].value;o.push(["Error",typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u)])}e.key!==null&&yo("key",e.key,o,0,""),e.memoizedProps!==null&&Xr(e.memoizedProps,o,0,""),t={start:t,end:n,detail:{devtools:{color:"error",track:Ul,tooltipText:"A lifecycle or effect errored",properties:o}}},e=e._debugTask,n="\u200B"+a,e?e.run(performance.measure.bind(performance,n,t)):performance.measure(n,t),performance.clearMeasures(n)}}}else a=Ee(e),a!==null&&Bn&&(l=1>o?"secondary-light":100>o?"secondary":500>o?"secondary-dark":"error",(e=e._debugTask)?e.run(console.timeStamp.bind(console,a,t,n,Ul,void 0,l)):console.timeStamp(a,t,n,Ul,void 0,l))}function Fr(e,t,n,o){!Bn||t<=e||(n=(n&738197653)===n?"tertiary-dark":"primary-dark",o?o.run(console.timeStamp.bind(console,"Prewarm",e,t,Qt,qt,n)):console.timeStamp("Prewarm",e,t,Qt,qt,n))}function da(e,t,n,o){!Bn||t<=e||(n=(n&738197653)===n?"tertiary-dark":"primary-dark",o?o.run(console.timeStamp.bind(console,"Suspended",e,t,Qt,qt,n)):console.timeStamp("Suspended",e,t,Qt,qt,n))}function Es(e,t,n,o){!Bn||t<=e||(o?o.run(console.timeStamp.bind(console,"Errored",e,t,Qt,qt,"error")):console.timeStamp("Errored",e,t,Qt,qt,"error"))}function Wr(e,t,n,o){!Bn||t<=e||(o?o.run(console.timeStamp.bind(console,n,e,t,Qt,qt,"secondary-light")):console.timeStamp(n,e,t,Qt,qt,"secondary-light"))}function _l(e,t,n,o,l){if(Bn&&!(t<=e)){for(var a=[],s=0;s<n.length;s++){var u=n[s].value;a.push(["Error",typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u)])}e={start:e,end:t,detail:{devtools:{color:"error",track:Qt,trackGroup:qt,tooltipText:o?"Remaining Effects Errored":"Commit Errored",properties:a}}},l?l.run(performance.measure.bind(performance,"Errored",e)):performance.measure("Errored",e),performance.clearMeasures("Errored")}}function Ri(e,t,n,o,l){n!==null?_l(e,t,n,!1,l):!Bn||t<=e||(l?l.run(console.timeStamp.bind(console,o?"Commit Interrupted View Transition":"Commit",e,t,Qt,qt,o?"error":"secondary-dark")):console.timeStamp(o?"Commit Interrupted View Transition":"Commit",e,t,Qt,qt,o?"error":"secondary-dark"))}function hl(e,t,n){!Bn||t<=e||(n?n.run(console.timeStamp.bind(console,"Animating",e,t,Qt,qt,"secondary-dark")):console.timeStamp("Animating",e,t,Qt,qt,"secondary-dark"))}function dr(){for(var e=yu,t=kg=yu=0;t<e;){var n=wa[t];wa[t++]=null;var o=wa[t];wa[t++]=null;var l=wa[t];wa[t++]=null;var a=wa[t];if(wa[t++]=null,o!==null&&l!==null){var s=o.pending;s===null?l.next=l:(l.next=s.next,s.next=l),o.pending=l}a!==0&&Oc(n,l,a)}}function Ts(e,t,n,o){wa[yu++]=e,wa[yu++]=t,wa[yu++]=n,wa[yu++]=o,kg|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function ml(e,t,n,o){return Ts(e,t,n,o),Dc(e)}function xo(e,t){return Ts(e,null,null,t),Dc(e)}function Oc(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var l=!1,a=e.return;a!==null;)a.childLanes|=n,o=a.alternate,o!==null&&(o.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&nf||(l=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,l&&t!==null&&(l=31-vl(n),e=a.hiddenUpdates,o=e[l],o===null?e[l]=[t]:o.push(t),t.lane=n|536870912),a):null}function Dc(e){if(zf>P3)throw rc=zf=0,Lf=om=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");rc>F3&&(rc=0,Lf=null,console.error("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")),e.alternate===null&&(e.flags&4098)!==0&&a2(e);for(var t=e,n=t.return;n!==null;)t.alternate===null&&(t.flags&4098)!==0&&a2(e),t=n,n=t.return;return t.tag===3?t.stateNode:null}function fr(e){if(si===null)return e;var t=si(e);return t===void 0?e:t.current}function Ms(e,t){if(si===null)return!1;var n=si,o=e.elementType;t=t.type;var l=!1,a=typeof t=="object"&&t!==null?t.$$typeof:null;switch(e.tag){case 1:typeof t=="function"&&(l=!0);break;case 0:(typeof t=="function"||a===Hl)&&(l=!0);break;case 11:(a===sh||a===Hl)&&(l=!0);break;case 14:case 15:(a===ch||a===Hl)&&(l=!0);break;default:return!1}return!!(l&&(e=n(o),e!==void 0&&e===n(t)))}function Ai(e){si!==null&&typeof WeakSet=="function"&&(bu===null&&(bu=new WeakSet),bu.add(e))}function p_(e,t,n){do{var o=e,l=o.alternate,a=o.child,s=o.sibling,u=o.tag,_=o.type,m=o.elementType,E=null;switch(o=null,u){case 0:case 1:E=_;break;case 15:E=_,o=m;break;case 14:o=m;break;case 11:E=_.render,o=m}if(si===null)throw Error("Expected resolveFamily to be set during hot reload.");var D=si;if(_=m=!1,E!==null&&(E=D(E),E!==void 0&&(n.has(E)?_=!0:t.has(E)&&(u===1?_=!0:m=!0))),_||o===null||(u=D(o),u!==void 0&&n.has(u)?_=!0:typeof o=="object"&&o.$$typeof===Hl&&(u=o._payload,u._status===1&&(u=D(u._result.default),u!==void 0&&n.has(u)&&(_=!0)))),bu!==null&&(bu.has(e)||l!==null&&bu.has(l))&&(_=!0),_&&(e._debugNeedsRemount=!0),(_||m)&&(l=xo(e,2),l!==null&&Pn(l,e,2)),a===null||_||p_(a,t,n),s===null)break;e=s}while(!0)}function Nc(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,mv||typeof Object.preventExtensions!="function"||Object.preventExtensions(this)}function zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nl(e,t){var n=e.alternate;switch(n===null?(n=H(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugOwner=e._debugOwner,n._debugStack=e._debugStack,n._debugTask=e._debugTask,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null,n.actualDuration=-0,n.actualStartTime=-1.1),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugInfo=e._debugInfo,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case 0:case 15:case 14:case 1:case 11:n.type=fr(e.type)}return n}function gd(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration),e}function Rs(e,t,n,o,l,a){var s=0,u=fr(e);if(typeof u=="function")zc(u)&&(s=1);else if(typeof u=="string")s=Pt(),s=l6(e,n,s)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(u){case Wp:return t=H(31,n,t,l),t.elementType=Wp,t.lanes=a,t;case iu:return La(n.children,l,a,t);case ih:s=8,l|=ll,l|=Pa;break;case Gp:return e=n,o=l,typeof e.id!="string"&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id),t=H(12,e,t,o|zt),t.elementType=Gp,t.lanes=a,t.stateNode={effectDuration:0,passiveEffectDuration:0},t;case Pp:return t=H(13,n,t,l),t.elementType=Pp,t.lanes=a,t;case Fp:return t=H(19,n,t,l),t.elementType=Fp,t.lanes=a,t;case g6:case Zp:return e=l|hv,t=H(30,n,t,e),t.elementType=Zp,t.lanes=a,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof u=="object"&&u!==null)switch(u.$$typeof){case Ga:s=10;break e;case Qp:s=9;break e;case sh:s=11;break e;case ch:s=14;break e;case Hl:s=16,u=null;break e}n="",(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(n+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),e===null?u="null":Co(e)?u="array":e!==void 0&&e.$$typeof===wr?(u="<"+(Ne(e.type)||"Unknown")+" />",n=" Did you accidentally export a JSX literal instead of a component?"):u=typeof e,(s=o?st(o):null)&&(n+=`

Check the render method of \``+s+"`."),s=29,n=Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(u+"."+n)),u=null}return t=H(s,n,t,l),t.elementType=e,t.type=u,t.lanes=a,t._debugOwner=o,t}function Lc(e,t,n){return t=Rs(e.type,e.key,e.props,e._owner,t,n),t._debugOwner=e._owner,t._debugStack=e._debugStack,t._debugTask=e._debugTask,t}function La(e,t,n,o){return e=H(7,e,o,t),e.lanes=n,e}function As(e,t,n){return e=H(6,e,null,t),e.lanes=n,e}function Oi(e){var t=H(18,null,null,ht);return t.stateNode=e,t}function Di(e,t,n){return t=H(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nl(e,t){if(typeof e=="object"&&e!==null){var n=Eg.get(e);return n!==void 0?n:(t={value:e,source:t,stack:ye(t)},Eg.set(e,t),t)}return{value:e,source:t,stack:ye(t)}}function zl(e,t){fa(),vu[xu++]=of,vu[xu++]=kh,kh=e,of=t}function Bc(e,t,n){fa(),Sa[Ca++]=ci,Sa[Ca++]=ui,Sa[Ca++]=qs,qs=e;var o=ci;e=ui;var l=32-vl(o)-1;o&=~(1<<l),n+=1;var a=32-vl(t)+l;if(30<a){var s=l-l%5;a=(o&(1<<s)-1).toString(32),o>>=s,l-=s,ci=1<<32-vl(t)+l|n<<l|o,ui=a+e}else ci=1<<a|n<<l|o,ui=e}function _r(e){fa(),e.return!==null&&(zl(e,1),Bc(e,1,0))}function Ni(e){for(;e===kh;)kh=vu[--xu],vu[xu]=null,of=vu[--xu],vu[xu]=null;for(;e===qs;)qs=Sa[--Ca],Sa[Ca]=null,ui=Sa[--Ca],Sa[Ca]=null,ci=Sa[--Ca],Sa[Ca]=null}function Pl(){return fa(),qs!==null?{id:ci,overflow:ui}:null}function g_(e,t){fa(),Sa[Ca++]=ci,Sa[Ca++]=ui,Sa[Ca++]=qs,ci=t.id,ui=t.overflow,qs=e}function fa(){Lt||console.error("Expected to be hydrating. This is a bug in React. Please file an issue.")}function Ba(e,t){if(e.return===null){if(ea===null)ea={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t};else{if(ea.fiber!==e)throw Error("Saw multiple hydration diff roots in a pass. This is a bug in React.");ea.distanceFromLeaf>t&&(ea.distanceFromLeaf=t)}return ea}var n=Ba(e.return,t+1).children;return 0<n.length&&n[n.length-1].fiber===e?(n=n[n.length-1],n.distanceFromLeaf>t&&(n.distanceFromLeaf=t),n):(t={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t},n.push(t),t)}function $c(){Lt&&console.error("We should not be hydrating here. This is a bug in React. Please file a bug.")}function Zr(e,t){Mr||(e=Ba(e,0),e.serverProps=null,t!==null&&(t=Y2(t),e.serverTail.push(t)))}function hr(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:!1,n="",o=ea;throw o!==null&&(ea=null,n=Na(o)),Jr(nl(Error("Hydration failed because the server rendered "+(t?"text":"HTML")+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+n),e)),Tg}function y_(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[qo]=e,t[wl]=o,wp(n,o),n){case"dialog":Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":case"embed":Wt("load",t);break;case"video":case"audio":for(n=0;n<Bf.length;n++)Wt(Bf[n],t);break;case"source":Wt("error",t);break;case"img":case"image":case"link":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"input":Rl("input",o),Wt("invalid",t),vc(t,o),xc(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"option":xi(t,o);break;case"select":Rl("select",o),Wt("invalid",t),jr(t,o);break;case"textarea":Rl("textarea",o),Wt("invalid",t),or(t,o),yn(t,o.value,o.defaultValue,o.children)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||g2(t.textContent,n)?(o.popover!=null&&(Wt("beforetoggle",t),Wt("toggle",t)),o.onScroll!=null&&Wt("scroll",t),o.onScrollEnd!=null&&Wt("scrollend",t),o.onClick!=null&&(t.onclick=To),t=!0):t=!1,t||hr(e,!0)}function Hc(e){for(Ao=e.return;Ao;)switch(Ao.tag){case 5:case 31:case 13:ka=!1;return;case 27:case 3:ka=!0;return;default:Ao=Ao.return}}function $a(e){if(e!==Ao)return!1;if(!Lt)return Hc(e),Lt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Tp(e.type,e.memoizedProps)),n=!n),n&&On){for(n=On;n;){var o=Ba(e,0),l=Y2(n);o.serverTail.push(l),n=l.type==="Suspense"?Np(n):Jl(n.nextSibling)}hr(e)}if(Hc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");On=Np(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");On=Np(e)}else t===27?(t=On,Xi(e.type)?(e=Sy,Sy=null,On=e):On=t):On=Ao?Jl(e.stateNode.nextSibling):null;return!0}function pl(){On=Ao=null,Mr=Lt=!1}function Os(){var e=es;return e!==null&&(Tl===null?Tl=e:Tl.push.apply(Tl,e),es=null),e}function Jr(e){es===null?es=[e]:es.push(e)}function Ll(){var e=ea;if(e!==null){ea=null;for(var t=Na(e);0<e.children.length;)e=e.children[0];ie(e.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,"https://react.dev/link/hydration-mismatch",t)})}}function Kr(){wu=Eh=null,Su=!1}function _a(e,t,n){ge(Mg,t._currentValue,e),t._currentValue=n,ge(Rg,t._currentRenderer,e),t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==gv&&console.error("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer=gv}function Ha(e,t){e._currentValue=Mg.current;var n=Rg.current;Oe(Rg,t),e._currentRenderer=n,Oe(Mg,t)}function mr(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}e!==n&&console.error("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function zi(e,t,n,o){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var a=l.dependencies;if(a!==null){var s=l.child;a=a.firstContext;e:for(;a!==null;){var u=a;a=l;for(var _=0;_<t.length;_++)if(u.context===t[_]){a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),mr(a.return,n,e),o||(s=null);break e}a=u.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mr(s,n,e),s=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),mr(l.return,n,e),s=l.child,s=s!==null?s.sibling:null):s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function ha(e,t,n,o){e=null;for(var l=t,a=!1;l!==null;){if(!a){if((l.flags&524288)!==0)a=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error("Should have a current fiber. This is a bug in React.");if(s=s.memoizedProps,s!==null){var u=l.type;Cl(l.pendingProps.value,s.value)||(e!==null?e.push(u):e=[u])}}else if(l===uh.current){if(s=l.alternate,s===null)throw Error("Should have a current fiber. This is a bug in React.");s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Xu):e=[Xu])}l=l.return}return e!==null&&zi(t,e,n,o),t.flags|=262144,e!==null}function Ds(e){for(e=e.firstContext;e!==null;){if(!Cl(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function pr(e){Eh=e,wu=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function kn(e){return Su&&console.error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."),yd(Eh,e)}function Ns(e,t){return Eh===null&&pr(e),yd(e,t)}function yd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},wu===null){if(e===null)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");wu=t,e.dependencies={lanes:0,firstContext:t,_debugThenableState:null},e.flags|=524288}else wu=wu.next=t;return n}function Uc(){return{controller:new L3,data:new Map,refCount:0}}function ao(e){e.controller.signal.aborted&&console.warn("A cache instance was retained after it was already freed. This likely indicates a bug in React."),e.refCount++}function Li(e){e.refCount--,0>e.refCount&&console.warn("A cache instance was released after it was already freed. This likely indicates a bug in React."),e.refCount===0&&B3($3,function(){e.controller.abort()})}function bd(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var o=t[e];n.indexOf(o)===-1&&n.push(o)}}}function b_(e){var t=e.transitionTypes;return e.transitionTypes=null,t}function Ua(e,t,n){(e&127)!==0?0>Rr&&(Rr=to(),rf=Th(t),Ag=t,n!=null&&(Og=Ee(n)),(tn&(Eo|oa))!==zo&&(Fn=!0,ns=af),e=Ud(),t=Hd(),e!==Cu||t!==sf?Cu=-1.1:t!==null&&(ns=af),Xs=e,sf=t):(e&4194048)!==0&&0>Ea&&(Ea=to(),cf=Th(t),yv=t,n!=null&&(bv=Ee(n)),0>_i)&&(e=Ud(),t=Hd(),(e!==ls||t!==Gs)&&(ls=-1.1),os=e,Gs=t)}function v_(e){if(0>Rr){Rr=to(),rf=e._debugTask!=null?e._debugTask:null,(tn&(Eo|oa))!==zo&&(ns=af);var t=Ud(),n=Hd();t!==Cu||n!==sf?Cu=-1.1:n!==null&&(ns=af),Xs=t,sf=n}0>Ea&&(Ea=to(),cf=e._debugTask!=null?e._debugTask:null,0>_i)&&(e=Ud(),t=Hd(),(e!==ls||t!==Gs)&&(ls=-1.1),os=e,Gs=t)}function ma(){var e=Vs;return Vs=0,e}function Ia(e){var t=Vs;return Vs=e,t}function x(e){var t=Vs;return Vs+=e,t}function C(){ct=at=-1.1}function T(){var e=at;return at=-1.1,e}function I(e){0<=e&&(at=e)}function Q(){var e=Yn;return Yn=-0,e}function X(e){0<=e&&(Yn=e)}function P(){var e=Un;return Un=null,e}function be(){var e=Fn;return Fn=!1,e}function Ze(e){kl=to(),0>e.actualStartTime&&(e.actualStartTime=kl)}function lt(e){if(0<=kl){var t=to()-kl;e.actualDuration+=t,e.selfBaseDuration=t,kl=-1}}function nt(e){if(0<=kl){var t=to()-kl;e.actualDuration+=t,kl=-1}}function tt(){if(0<=kl){var e=to(),t=e-kl;kl=-1,Vs+=t,Yn+=t,ct=e}}function Ct(e){Un===null&&(Un=[]),Un.push(e),fi===null&&(fi=[]),fi.push(e)}function pt(){kl=to(),0>at&&(at=kl)}function Pe(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function ft(e,t){if(df===null){var n=df=[];Lg=0,as=yp(),ku={status:"pending",value:void 0,then:function(o){n.push(o)}}}return Lg++,t.then(yt,yt),t}function yt(){if(--Lg===0&&(-1<Ea||(_i=-1.1),lf=null,df!==null)){ku!==null&&(ku.status="fulfilled");var e=df;df=null,as=0,ku=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Kt(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(o.status="rejected",o.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),o}function bn(){var e=Ps.current;return e!==null?e:Mn.pooledCache}function ro(e,t){t===null?ge(Ps,Ps.current,e):ge(Ps,t.pool,e)}function bt(){var e=bn();return e===null?null:{parent:so._currentValue,pool:e}}function _t(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function en(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hn(e,t,n,o){K.actQueue!==null&&(K.didUsePromise=!0);var l=e.thenables;if(n=l[n],n===void 0?l.push(t):n!==t&&(e.didWarnAboutUncachedPromise||(e.didWarnAboutUncachedPromise=!0,console.error("A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.")),t.then(To,To),t=n),t._debugInfo===void 0){e=performance.now(),l=t.displayName;var a={name:typeof l=="string"?l:"Promise",start:e,end:e,value:t};t._debugInfo=[{awaited:a}],t.status!=="fulfilled"&&t.status!=="rejected"&&(e=function(){a.end=performance.now()},t.then(e,e))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw o=t.reason,Bi(o),o===void 0&&!("reason"in t)?Error("A rejected Promise was passed to React without a `reason` property. React threw a generic error from where the Promise was used to assist in identifying the problematic Promise. Make sure that instrumented Promises correctly set the `reason` property when setting `status` to `'rejected'`."):o;default:if(typeof t.status=="string")t.then(To,To);else{if(e=Mn,e!==null&&100<e.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=s}},function(s){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw o=t.reason,Bi(o),o}throw Zs=t,yf=!0,Ug||o===null||o.alternate!==null||(Ws=o,Bh=Error("This library called use() to suspend in a previous render but did not call use() when it finished. This indicates an incorrect use of use(). Learn more: https://react.dev/warnings/conditional-use-of-use")),Eu}}function wo(e){try{return Y3(e)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Zs=t,yf=!0,Eu):t}}function Bl(){if(Zs===null)throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");var e=Zs;return Zs=null,yf=!1,e}function Bi(e){if(e===Eu||e===zh)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function zs(e,t){return e===t?!0:e.tag!==t.tag||e.type!==t.type||e.key!==t.key||e.index!==t.index||e.tag===3&&e.stateNode!==t.stateNode||e.return===null||t.return===null?!1:zs(e.return,t.return)}function ln(e){var t=Vt;return e!=null&&(Vt=t===null?e:t.concat(e)),t}function ei(){var e=Vt;if(e!=null){for(var t=e.length-1;0<=t;t--)if(e[t].name!=null){var n=e[t].debugTask;if(n!=null)return n}}return null}function ti(e,t,n){for(var o=Object.keys(e.props),l=0;l<o.length;l++){var a=o[l];if(a!=="children"&&a!=="key"&&a!=="ref"){t===null&&(t=Lc(e,n.mode,0),t._debugInfo=Vt,t.return=n),ie(t,function(s){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key`, `ref`, and `children` props.",s)},a);break}}}function ja(e){var t=bf;return bf+=1,Tu===null&&(Tu=_t()),Hn(Tu,e,t,null)}function vn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ya(e,t){throw t.$$typeof===p6?Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`):(e=Object.prototype.toString.call(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead."))}function pa(e,t){var n=ei();n!==null?n.run(Ya.bind(null,e,t)):Ya(e,t)}function x_(e,t){var n=Ee(e)||"Component";$v[n]||($v[n]=!0,t=t.displayName||t.name||"Component",e.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,t,t,t):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,t,t,n,t,n))}function Ic(e,t){var n=ei();n!==null?n.run(x_.bind(null,e,t)):x_(e,t)}function w_(e,t){var n=Ee(e)||"Component";Hv[n]||(Hv[n]=!0,t=String(t),e.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,t):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,n,t,n))}function jc(e,t){var n=ei();n!==null?n.run(w_.bind(null,e,t)):w_(e,t)}function r1(e){function t(M,A){if(e){var N=M.deletions;N===null?(M.deletions=[A],M.flags|=16):N.push(A)}}function n(M,A){if(!e)return null;for(;A!==null;)t(M,A),A=A.sibling;return null}function o(M){for(var A=new Map;M!==null;)M.key===null?A.set(M.index,M):A.set(M.key,M),M=M.sibling;return A}function l(M,A){return M=Nl(M,A),M.index=0,M.sibling=null,M}function a(M,A,N){return M.index=N,e?(N=M.alternate,N!==null?(N=N.index,N<A?(M.flags|=2,A):N):(M.flags|=134217730,A)):(M.flags|=1048576,A)}function s(M){return e&&M.alternate===null&&(M.flags|=134217730),M}function u(M,A,N,Z){return A===null||A.tag!==6?(A=As(N,M.mode,Z),A.return=M,A._debugOwner=M,A._debugTask=M._debugTask,A._debugInfo=Vt,A):(A=l(A,N),A.return=M,A._debugInfo=Vt,A)}function _(M,A,N,Z){var Se=N.type;return Se===iu?(A=E(M,A,N.props.children,Z,N.key),vn(A,N),ti(N,A,M),A):A!==null&&(A.elementType===Se||Ms(A,N)||typeof Se=="object"&&Se!==null&&Se.$$typeof===Hl&&wo(Se)===A.type)?(A=l(A,N.props),vn(A,N),A.return=M,A._debugOwner=N._owner,A._debugInfo=Vt,A):(A=Lc(N,M.mode,Z),vn(A,N),A.return=M,A._debugInfo=Vt,A)}function m(M,A,N,Z){return A===null||A.tag!==4||A.stateNode.containerInfo!==N.containerInfo||A.stateNode.implementation!==N.implementation?(A=Di(N,M.mode,Z),A.return=M,A._debugInfo=Vt,A):(A=l(A,N.children||[]),A.return=M,A._debugInfo=Vt,A)}function E(M,A,N,Z,Se){return A===null||A.tag!==7?(A=La(N,M.mode,Z,Se),A.return=M,A._debugOwner=M,A._debugTask=M._debugTask,A._debugInfo=Vt,A):(A=l(A,N),A.return=M,A._debugInfo=Vt,A)}function D(M,A,N){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=As(""+A,M.mode,N),A.return=M,A._debugOwner=M,A._debugTask=M._debugTask,A._debugInfo=Vt,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case wr:return N=Lc(A,M.mode,N),vn(N,A),N.return=M,M=ln(A._debugInfo),N._debugInfo=Vt,Vt=M,N;case ru:return A=Di(A,M.mode,N),A.return=M,A._debugInfo=Vt,A;case Hl:var Z=ln(A._debugInfo);return A=wo(A),M=D(M,A,N),Vt=Z,M}if(Co(A)||Ue(A))return N=La(A,M.mode,N,null),N.return=M,N._debugOwner=M,N._debugTask=M._debugTask,M=ln(A._debugInfo),N._debugInfo=Vt,Vt=M,N;if(typeof A.then=="function")return Z=ln(A._debugInfo),M=D(M,ja(A),N),Vt=Z,M;if(A.$$typeof===Ga)return D(M,Ns(M,A),N);pa(M,A)}return typeof A=="function"&&Ic(M,A),typeof A=="symbol"&&jc(M,A),null}function O(M,A,N,Z){var Se=A!==null?A.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return Se!==null?null:u(M,A,""+N,Z);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case wr:return N.key===Se?(Se=ln(N._debugInfo),M=_(M,A,N,Z),Vt=Se,M):null;case ru:return N.key===Se?m(M,A,N,Z):null;case Hl:return Se=ln(N._debugInfo),N=wo(N),M=O(M,A,N,Z),Vt=Se,M}if(Co(N)||Ue(N))return Se!==null?null:(Se=ln(N._debugInfo),M=E(M,A,N,Z,null),Vt=Se,M);if(typeof N.then=="function")return Se=ln(N._debugInfo),M=O(M,A,ja(N),Z),Vt=Se,M;if(N.$$typeof===Ga)return O(M,A,Ns(M,N),Z);pa(M,N)}return typeof N=="function"&&Ic(M,N),typeof N=="symbol"&&jc(M,N),null}function q(M,A,N,Z,Se){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return M=M.get(N)||null,u(A,M,""+Z,Se);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case wr:return N=M.get(Z.key===null?N:Z.key)||null,M=ln(Z._debugInfo),A=_(A,N,Z,Se),Vt=M,A;case ru:return M=M.get(Z.key===null?N:Z.key)||null,m(A,M,Z,Se);case Hl:var ut=ln(Z._debugInfo);return Z=wo(Z),A=q(M,A,N,Z,Se),Vt=ut,A}if(Co(Z)||Ue(Z))return N=M.get(N)||null,M=ln(Z._debugInfo),A=E(A,N,Z,Se,null),Vt=M,A;if(typeof Z.then=="function")return ut=ln(Z._debugInfo),A=q(M,A,N,ja(Z),Se),Vt=ut,A;if(Z.$$typeof===Ga)return q(M,A,N,Ns(A,Z),Se);pa(A,Z)}return typeof Z=="function"&&Ic(A,Z),typeof Z=="symbol"&&jc(A,Z),null}function _e(M,A,N,Z){if(typeof N!="object"||N===null)return Z;switch(N.$$typeof){case wr:case ru:L(M,A,N);var Se=N.key;if(typeof Se!="string")break;if(Z===null){Z=new Set,Z.add(Se);break}if(!Z.has(Se)){Z.add(Se);break}ie(A,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.",Se)});break;case Hl:N=wo(N),_e(M,A,N,Z)}return Z}function $e(M,A,N,Z){for(var Se=null,ut=null,Ke=null,Mt=A,It=A=0,Xn=null;Mt!==null&&It<N.length;It++){Mt.index>It?(Xn=Mt,Mt=null):Xn=Mt.sibling;var wn=O(M,Mt,N[It],Z);if(wn===null){Mt===null&&(Mt=Xn);break}Se=_e(M,wn,N[It],Se),e&&Mt&&wn.alternate===null&&t(M,Mt),A=a(wn,A,It),Ke===null?ut=wn:Ke.sibling=wn,Ke=wn,Mt=Xn}if(It===N.length)return n(M,Mt),Lt&&zl(M,It),ut;if(Mt===null){for(;It<N.length;It++)Mt=D(M,N[It],Z),Mt!==null&&(Se=_e(M,Mt,N[It],Se),A=a(Mt,A,It),Ke===null?ut=Mt:Ke.sibling=Mt,Ke=Mt);return Lt&&zl(M,It),ut}for(Mt=o(Mt);It<N.length;It++)Xn=q(Mt,M,It,N[It],Z),Xn!==null&&(Se=_e(M,Xn,N[It],Se),e&&(wn=Xn.alternate,wn!==null&&Mt.delete(wn.key===null?It:wn.key)),A=a(Xn,A,It),Ke===null?ut=Xn:Ke.sibling=Xn,Ke=Xn);return e&&Mt.forEach(function(vi){return t(M,vi)}),Lt&&zl(M,It),ut}function Je(M,A,N,Z){if(N==null)throw Error("An iterable object provided no iterator.");for(var Se=null,ut=null,Ke=A,Mt=A=0,It=null,Xn=null,wn=N.next();Ke!==null&&!wn.done;Mt++,wn=N.next()){Ke.index>Mt?(It=Ke,Ke=null):It=Ke.sibling;var vi=O(M,Ke,wn.value,Z);if(vi===null){Ke===null&&(Ke=It);break}Xn=_e(M,vi,wn.value,Xn),e&&Ke&&vi.alternate===null&&t(M,Ke),A=a(vi,A,Mt),ut===null?Se=vi:ut.sibling=vi,ut=vi,Ke=It}if(wn.done)return n(M,Ke),Lt&&zl(M,Mt),Se;if(Ke===null){for(;!wn.done;Mt++,wn=N.next())Ke=D(M,wn.value,Z),Ke!==null&&(Xn=_e(M,Ke,wn.value,Xn),A=a(Ke,A,Mt),ut===null?Se=Ke:ut.sibling=Ke,ut=Ke);return Lt&&zl(M,Mt),Se}for(Ke=o(Ke);!wn.done;Mt++,wn=N.next())It=q(Ke,M,Mt,wn.value,Z),It!==null&&(Xn=_e(M,It,wn.value,Xn),e&&(wn=It.alternate,wn!==null&&Ke.delete(wn.key===null?Mt:wn.key)),A=a(It,A,Mt),ut===null?Se=It:ut.sibling=It,ut=It);return e&&Ke.forEach(function(_8){return t(M,_8)}),Lt&&zl(M,Mt),Se}function At(M,A,N,Z){if(typeof N=="object"&&N!==null&&N.type===iu&&N.key===null&&N.props.ref===void 0&&(ti(N,null,M),N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case wr:var Se=ln(N._debugInfo);e:{for(var ut=N.key;A!==null;){if(A.key===ut){if(ut=N.type,ut===iu){if(A.tag===7){n(M,A.sibling),Z=l(A,N.props.children),vn(Z,N),Z.return=M,Z._debugOwner=N._owner,Z._debugInfo=Vt,ti(N,Z,M),M=Z;break e}}else if(A.elementType===ut||Ms(A,N)||typeof ut=="object"&&ut!==null&&ut.$$typeof===Hl&&wo(ut)===A.type){n(M,A.sibling),Z=l(A,N.props),vn(Z,N),Z.return=M,Z._debugOwner=N._owner,Z._debugInfo=Vt,M=Z;break e}n(M,A);break}else t(M,A);A=A.sibling}N.type===iu?(Z=La(N.props.children,M.mode,Z,N.key),vn(Z,N),Z.return=M,Z._debugOwner=M,Z._debugTask=M._debugTask,Z._debugInfo=Vt,ti(N,Z,M),M=Z):(Z=Lc(N,M.mode,Z),vn(Z,N),Z.return=M,Z._debugInfo=Vt,M=Z)}return M=s(M),Vt=Se,M;case ru:e:{for(Se=N,N=Se.key;A!==null;){if(A.key===N)if(A.tag===4&&A.stateNode.containerInfo===Se.containerInfo&&A.stateNode.implementation===Se.implementation){n(M,A.sibling),Z=l(A,Se.children||[]),Z.return=M,M=Z;break e}else{n(M,A);break}else t(M,A);A=A.sibling}Z=Di(Se,M.mode,Z),Z.return=M,M=Z}return s(M);case Hl:return Se=ln(N._debugInfo),N=wo(N),M=At(M,A,N,Z),Vt=Se,M}if(Co(N))return $e(M,A,N,Z);if(Ue(N)){if(Se=N,N=Ue(Se),typeof N!="function")throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");return ut=N.call(Se),ut===Se?(M.tag!==0||Object.prototype.toString.call(M.type)!=="[object GeneratorFunction]"||Object.prototype.toString.call(ut)!=="[object Generator]")&&(Lv||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),Lv=!0):Se.entries!==N||Ig||(console.error("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),Ig=!0),Je(M,A,ut,Z)}if(typeof N.then=="function")return Se=ln(N._debugInfo),M=At(M,A,ja(N),Z),Vt=Se,M;if(N.$$typeof===Ga)return At(M,A,Ns(M,N),Z);pa(M,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(Se=""+N,A!==null&&A.tag===6?(n(M,A.sibling),Z=l(A,Se),Z.return=M,M=Z):(n(M,A),Z=As(Se,M.mode,Z),Z.return=M,Z._debugOwner=M,Z._debugTask=M._debugTask,Z._debugInfo=Vt,M=Z),s(M)):(typeof N=="function"&&Ic(M,N),typeof N=="symbol"&&jc(M,N),n(M,A))}return function(M,A,N,Z){var Se=Vt;Vt=null;try{bf=0;var ut=At(M,A,N,Z);return Tu=null,ut}catch(Xn){if(Xn===Eu||Xn===zh)throw Xn;var Ke=H(29,Xn,null,M.mode);Ke.lanes=Z,Ke.return=M;var Mt=Ke._debugInfo=Vt;if(Ke._debugOwner=M._debugOwner,Ke._debugTask=M._debugTask,Mt!=null){for(var It=Mt.length-1;0<=It;It--)if(typeof Mt[It].stack=="string"){Ke._debugOwner=Mt[It],Ke._debugTask=Mt[It].debugTask;break}}return Ke}finally{Vt=Se}}}function i1(e,t){var n=Co(e);return e=!n&&typeof Ue(e)=="function",n||e?(n=n?"array":"iterable",console.error("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",n,t,n),!1):!0}function Zm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $i(e){return{lane:e,tag:Iv,payload:null,callback:null,next:null}}function Hi(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,Yg===o&&!qv){var l=Ee(e);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,l),qv=!0}return(tn&Eo)!==zo?(l=o.pending,l===null?t.next=t:(t.next=l.next,l.next=t),o.pending=t,t=Dc(e),Oc(e,null,n),t):(Ts(e,o,t,n),Dc(e))}function vd(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ve(e,n)}}function S_(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var l=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?l=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?l=a=t:a=a.next=t}else l=a=t;n={baseState:o.baseState,firstBaseUpdate:l,lastBaseUpdate:a,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xd(){if(qg){var e=ku;if(e!==null)throw e}}function wd(e,t,n,o){qg=!1;var l=e.updateQueue;rs=!1,Yg=l.shared;var a=l.firstBaseUpdate,s=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var _=u,m=_.next;_.next=null,s===null?a=m:s.next=m,s=_;var E=e.alternate;E!==null&&(E=E.updateQueue,u=E.lastBaseUpdate,u!==s&&(u===null?E.firstBaseUpdate=m:u.next=m,E.lastBaseUpdate=_))}if(a!==null){var D=l.baseState;s=0,E=m=_=null,u=a;do{var O=u.lane&-536870913,q=O!==u.lane;if(q?(Et&O)===O:(o&O)===O){O!==0&&O===as&&(qg=!0),E!==null&&(E=E.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{O=e;var _e=u,$e=t,Je=n;switch(_e.tag){case jv:if(_e=_e.payload,typeof _e=="function"){Su=!0;var At=_e.call(Je,D,$e);if(O.mode&ll){oe(!0);try{_e.call(Je,D,$e)}finally{oe(!1)}}Su=!1,D=At;break e}D=_e;break e;case jg:O.flags=O.flags&-65537|128;case Iv:if(At=_e.payload,typeof At=="function"){if(Su=!0,_e=At.call(Je,D,$e),O.mode&ll){oe(!0);try{At.call(Je,D,$e)}finally{oe(!1)}}Su=!1}else _e=At;if(_e==null)break e;D=Nt({},D,_e);break e;case Yv:rs=!0}}O=u.callback,O!==null&&(e.flags|=64,q&&(e.flags|=8192),q=l.callbacks,q===null?l.callbacks=[O]:q.push(O))}else q={lane:O,tag:u.tag,payload:u.payload,callback:u.callback,next:null},E===null?(m=E=q,_=D):E=E.next=q,s|=O;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;q=u,u=q.next,q.next=null,l.lastBaseUpdate=q,l.shared.pending=null}}while(!0);E===null&&(_=D),l.baseState=_,l.firstBaseUpdate=m,l.lastBaseUpdate=E,a===null&&(l.shared.lanes=0),cs|=s,e.lanes=s,e.memoizedState=D}Yg=null}function s1(e,t){if(typeof e!="function")throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+e);e.call(t)}function R4(e,t){var n=e.shared.hiddenCallbacks;if(n!==null)for(e.shared.hiddenCallbacks=null,e=0;e<n.length;e++)s1(n[e],t)}function c1(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)s1(n[e],t)}function u1(e,t){var n=Lr;ge($h,n,e),ge(is,t,e),Lr=n|t.baseLanes}function Km(e){ge($h,Lr,e),ge(is,is.current,e)}function e0(e){Lr=$h.current,Oe(is,e),Oe($h,e)}function Ui(e){var t=e.alternate;ge(Xo,Xo.current&Mu,e),ge(Vo,e,e),al===null&&(t===null||is.current!==null||t.memoizedState!==null)&&(al=e)}function t0(e){ge(Xo,Xo.current,e),ge(Vo,e,e),al===null&&(al=e)}function d1(e){e.tag===22?(ge(Xo,Xo.current,e),ge(Vo,e,e),al===null&&(al=e)):Ii(e)}function Ii(e){ge(Xo,Xo.current,e),ge(Vo,Vo.current,e)}function Fl(e){Oe(Vo,e),al===e&&(al=null),Oe(Xo,e)}function Sd(e,t){ge(Vo,Vo.current,e),ge(Xo,t,e)}function n0(e){Oe(Xo,e),Oe(Vo,e),al===e&&(al=null)}function C_(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Op(n)||Dp(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Yt(){var e=W;Ma===null?Ma=[e]:Ma.push(e)}function xe(){var e=W;if(Ma!==null&&(mi++,Ma[mi]!==e)){var t=Ee(gt);if(!Vv.has(t)&&(Vv.add(t),Ma!==null)){for(var n="",o=0;o<=mi;o++){var l=Ma[o],a=o===mi?e:l;for(l=o+1+". "+l;30>l.length;)l+=" ";l+=a+`
`,n+=l}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function Yc(e){e==null||Co(e)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",W,typeof e)}function k_(){var e=Ee(gt);Gv.has(e)||(Gv.add(e),console.error("ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",e))}function Kn(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function o0(e,t){if(Sf)return!1;if(t===null)return console.error("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",W),!1;e.length!==t.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,W,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!Cl(e[n],t[n]))return!1;return!0}function l0(e,t,n,o,l,a){hi=a,gt=t,Ma=e!==null?e._debugHookTypes:null,mi=-1,Sf=e!==null&&e.type!==t.type,(Object.prototype.toString.call(n)==="[object AsyncFunction]"||Object.prototype.toString.call(n)==="[object AsyncGeneratorFunction]")&&(a=Ee(gt),Vg.has(a)||(Vg.add(a),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",a===null?"An unknown Component":"<"+a+">"))),t.memoizedState=null,t.updateQueue=null,t.lanes=0,K.H=e!==null&&e.memoizedState!==null?Gg:Ma!==null?Qv:Xg,Ks=a=(t.mode&ll)!==ht;var s=Bg(n,o,l);if(Ks=!1,Au&&(s=a0(t,n,o,l)),a){oe(!0);try{s=a0(t,n,o,l)}finally{oe(!1)}}return f1(e,t),s}function f1(e,t){t._debugHookTypes=Ma,t.dependencies===null?Ar!==null&&(t.dependencies={lanes:0,firstContext:null,_debugThenableState:Ar}):t.dependencies._debugThenableState=Ar;var n=Ar;if(Ws!==null&&zs(Ws,t)&&(n!==null||Bh===null||Ug||(Ug=!0,console.error(Bh)),Bh=Ws=null),K.H=Ih,n=Tn!==null&&Tn.next!==null,hi=0,Ma=W=co=Tn=gt=null,mi=-1,e!==null&&(e.flags&1206910976)!==(t.flags&1206910976)&&console.error("Internal React error: Expected static flag was missing. Please notify the React team."),Hh=!1,wf=0,Ar=null,n)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");e===null||no||(e=e.dependencies,e!==null&&Ds(e)&&(no=!0)),yf?(yf=!1,e=!0):e=!1,e&&(t=Ee(t)||"Unknown",Xv.has(t)||Vg.has(t)||(Xv.add(t),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function a0(e,t,n,o){gt=e;var l=0;do{if(Au&&(Ar=null),wf=0,Au=!1,l>=V3)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");if(l+=1,Sf=!1,co=Tn=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}mi=-1,K.H=Pv,a=Bg(t,n,o)}while(Au);return a}function A4(){var e=K.H,t=e.useState()[0];return t=typeof t.then=="function"?Cd(t):t,e=e.useState()[0],(Tn!==null?Tn.memoizedState:null)!==e&&(gt.flags|=1024),t}function r0(){var e=Uh!==0;return Uh=0,e}function i0(e,t,n){t.updateQueue=e.updateQueue,t.flags=(t.mode&Pa)!==ht?t.flags&-805308421:t.flags&-2053,e.lanes&=~n}function s0(e){if(Hh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Hh=!1}hi=0,Ma=co=Tn=gt=null,mi=-1,W=null,Au=!1,wf=Uh=0,Ar=null}function gl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return co===null?gt.memoizedState=co=e:co=co.next=e,co}function mn(){if(Tn===null){var e=gt.alternate;e=e!==null?e.memoizedState:null}else e=Tn.next;var t=co===null?gt.memoizedState:co.next;if(t!==null)co=t,Tn=e;else{if(e===null)throw gt.alternate===null?Error("Update hook called on initial render. This is likely a bug in React. Please file an issue."):Error("Rendered more hooks than during the previous render.");Tn=e,e={memoizedState:Tn.memoizedState,baseState:Tn.baseState,baseQueue:Tn.baseQueue,queue:Tn.queue,next:null},co===null?gt.memoizedState=co=e:co=co.next=e}return co}function E_(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cd(e){var t=wf;return wf+=1,Ar===null&&(Ar=_t()),e=Hn(Ar,e,t,gt),t=gt,(co===null?t.memoizedState:co.next)===null&&(t=t.alternate,K.H=t!==null&&t.memoizedState!==null?Gg:Xg),e}function ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cd(e);if(e.$$typeof===b6)return;if(e.$$typeof===Ga)return kn(e)}throw Error("An unsupported type was passed to use(): "+String(e))}function Ls(e){var t=null,n=gt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=E_(),gt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0||Sf)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=y6;else n.length!==e&&console.error("Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",n.length,e);return t.index++,n}function qa(e,t){return typeof t=="function"?t(e):t}function c0(e,t,n){var o=gl();if(n!==void 0){var l=n(t);if(Ks){oe(!0);try{n(t)}finally{oe(!1)}}}else l=t;return o.memoizedState=o.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},o.queue=e,e=e.dispatch=L4.bind(null,gt,e),[o.memoizedState,e]}function qc(e){var t=mn();return u0(t,Tn,e)}function u0(e,t,n){var o=e.queue;if(o===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");o.lastRenderedReducer=n;var l=e.baseQueue,a=o.pending;if(a!==null){if(l!==null){var s=l.next;l.next=a.next,a.next=s}t.baseQueue!==l&&console.error("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),t.baseQueue=l=a,o.pending=null}if(a=e.baseState,l===null)e.memoizedState=a;else{t=l.next;var u=s=null,_=null,m=t,E=!1;do{var D=m.lane&-536870913;if(D!==m.lane?(Et&D)===D:(hi&D)===D){var O=m.revertLane;if(O===0)_!==null&&(_=_.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),D===as&&(E=!0);else if((hi&O)===O){m=m.next,O===as&&(E=!0);continue}else D={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},_===null?(u=_=D,s=a):_=_.next=D,gt.lanes|=O,cs|=O;D=m.action,Ks&&n(a,D),a=m.hasEagerState?m.eagerState:n(a,D)}else O={lane:D,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},_===null?(u=_=O,s=a):_=_.next=O,gt.lanes|=D,cs|=D;m=m.next}while(m!==null&&m!==t);if(_===null?s=a:_.next=u,!Cl(a,e.memoizedState)&&(no=!0,E&&(n=ku,n!==null)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=_,o.lastRenderedState=a}return l===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function kd(e){var t=mn(),n=t.queue;if(n===null)throw Error("Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)");n.lastRenderedReducer=e;var o=n.dispatch,l=n.pending,a=t.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do a=e(a,s.action),s=s.next;while(s!==l);Cl(a,t.memoizedState)||(no=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,o]}function d0(e,t,n){var o=gt,l=gl();if(Lt){if(n===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");var a=n();Ru||a===n()||(console.error("The result of getServerSnapshot should be cached to avoid an infinite loop"),Ru=!0)}else{if(a=t(),Ru||(n=t(),Cl(a,n)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Ru=!0)),Mn===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(Et&127)!==0||_1(o,t,a)}return l.memoizedState=a,n={value:a,getSnapshot:t},l.queue=n,A_(m1.bind(null,o,n,e),[e]),o.flags|=2048,Xc(Ta|rl,{destroy:void 0},h1.bind(null,o,n,a,t),null),a}function T_(e,t,n){var o=gt,l=mn(),a=Lt;if(a){if(n===void 0)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");n=n()}else if(n=t(),!Ru){var s=t();Cl(n,s)||(console.error("The result of getSnapshot should be cached to avoid an infinite loop"),Ru=!0)}(s=!Cl((Tn||l).memoizedState,n))&&(l.memoizedState=n,no=!0),l=l.queue;var u=m1.bind(null,o,l,e);if($l(2048,rl,u,[e]),e=l.getSnapshot!==t||s||co!==null&&(co.memoizedState.tag&Ta)!==xf,Xc(e?Ta|rl:rl,{destroy:void 0},h1.bind(null,o,l,n,t),null),e){if(o.flags|=2048,Mn===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");a||(hi&127)!==0||_1(o,t,n)}return n}function _1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=gt.updateQueue,t===null?(t=E_(),gt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function h1(e,t,n,o){t.value=n,t.getSnapshot=o,p1(t)&&g1(e)}function m1(e,t,n){return n(function(){p1(t)&&(Ua(2,"updateSyncExternalStore()",e),g1(e))})}function p1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Cl(e,n)}catch{return!0}}function g1(e){var t=xo(e,2);t!==null&&Pn(t,e,2)}function f0(e){var t=gl();if(typeof e=="function"){var n=e;if(e=n(),Ks){oe(!0);try{n()}finally{oe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:e},t}function _0(e){e=f0(e);var t=e.queue,n=B1.bind(null,gt,t);return t.dispatch=n,[e.memoizedState,n]}function h0(e){var t=gl();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=M0.bind(null,gt,!0,n),n.dispatch=t,[e,t]}function y1(e,t){var n=mn();return b1(n,Tn,e,t)}function b1(e,t,n,o){return e.baseState=n,u0(e,Tn,typeof o=="function"?o:qa)}function v1(e,t){var n=mn();return Tn!==null?b1(n,Tn,e,t):(n.baseState=e,[e,n.queue.dispatch])}function O4(e,t,n,o,l){if(B_(e))throw Error("Cannot update action state while rendering.");if(e=t.action,e!==null){var a={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){a.listeners.push(s)}};K.T!==null?n(!0):a.isTransition=!1,o(a),n=t.pending,n===null?(a.next=t.pending=a,x1(t,a)):(a.next=n.next,t.pending=n.next=a)}}function x1(e,t){var n=t.action,o=t.payload,l=e.state;if(t.isTransition){var a=K.T,s={};s.types=a!==null?a.types:null,s._updatedFibers=new Set,K.T=s;try{var u=n(l,o),_=K.S;_!==null&&_(s,u),w1(e,t,u)}catch(m){m0(e,t,m)}finally{a!==null&&s.types!==null&&(a.types!==null&&a.types!==s.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),a.types=s.types),K.T=a,a===null&&s._updatedFibers&&(e=s._updatedFibers.size,s._updatedFibers.clear(),10<e&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}else try{s=n(l,o),w1(e,t,s)}catch(m){m0(e,t,m)}}function w1(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?(K.asyncTransitions++,n.then(L_,L_),n.then(function(o){S1(e,t,o)},function(o){return m0(e,t,o)}),t.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):S1(e,t,n)}function S1(e,t,n){t.status="fulfilled",t.value=n,C1(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,x1(e,n)))}function m0(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,C1(t),t=t.next;while(t!==o)}e.action=null}function C1(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function k1(e,t){return t}function Vc(e,t){if(Lt){var n=Mn.formState;if(n!==null){e:{var o=gt;if(Lt){if(On){t:{for(var l=On,a=ka;l.nodeType!==8;){if(!a){l=null;break t}if(l=Jl(l.nextSibling),l===null){l=null;break t}}a=l.data,l=a===gy||a===Dx?l:null}if(l){On=Jl(l.nextSibling),o=l.data===gy;break e}}hr(o)}o=!1}o&&(t=n[0])}}return n=gl(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:k1,lastRenderedState:t},n.queue=o,n=B1.bind(null,gt,o),o.dispatch=n,o=f0(!1),a=M0.bind(null,gt,!1,o.queue),o=gl(),l={state:t,dispatch:null,action:e,pending:null},o.queue=l,n=O4.bind(null,gt,l,a,n),l.dispatch=n,o.memoizedState=e,[t,n,!1]}function M_(e){var t=mn();return E1(t,Tn,e)}function E1(e,t,n){if(t=u0(e,t,k1)[0],e=qc(qa)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=Cd(t)}catch(s){throw s===Eu?zh:s}else o=t;t=mn();var l=t.queue,a=l.dispatch;return n!==t.memoizedState&&(gt.flags|=2048,Xc(Ta|rl,{destroy:void 0},D4.bind(null,l,n),null)),[o,a,e]}function D4(e,t){e.action=t}function R_(e){var t=mn(),n=Tn;if(n!==null)return E1(t,n,e);mn(),t=t.memoizedState,n=mn();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function Xc(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=gt.updateQueue,t===null&&(t=E_(),gt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function p0(e){var t=gl();return e={current:e},t.memoizedState=e}function Bs(e,t,n,o){var l=gl();gt.flags|=e,l.memoizedState=Xc(Ta|t,{destroy:void 0},n,o===void 0?null:o)}function $l(e,t,n,o){var l=mn();o=o===void 0?null:o;var a=l.memoizedState.inst;Tn!==null&&o!==null&&o0(o,Tn.memoizedState.deps)?l.memoizedState=Xc(t,a,n,o):(gt.flags|=e,l.memoizedState=Xc(Ta|t,a,n,o))}function A_(e,t){(gt.mode&Pa)!==ht?Bs(545261568,rl,e,t):Bs(8390656,rl,e,t)}function N4(e){gt.flags|=4;var t=gt.updateQueue;if(t===null)t=E_(),gt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function g0(e){var t=gl(),n={impl:e};return t.memoizedState=n,function(){if((tn&Eo)!==zo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return n.impl.apply(void 0,arguments)}}function O_(e){var t=mn().memoizedState;return N4({ref:t,nextImpl:e}),function(){if((tn&Eo)!==zo)throw Error("A function wrapped in useEffectEvent can't be called during rendering.");return t.impl.apply(void 0,arguments)}}function y0(e,t){var n=4194308;return(gt.mode&Pa)!==ht&&(n|=268435456),Bs(n,ta,e,t)}function T1(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return t.hasOwnProperty("current")||console.error("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(t).join(", ")+"}"),e=e(),t.current=e,function(){t.current=null}}function b0(e,t,n){typeof t!="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null"),n=n!=null?n.concat([e]):null;var o=4194308;(gt.mode&Pa)!==ht&&(o|=268435456),Bs(o,ta,T1.bind(null,t,e),n)}function D_(e,t,n){typeof t!="function"&&console.error("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",t!==null?typeof t:"null"),n=n!=null?n.concat([e]):null,$l(4,ta,T1.bind(null,t,e),n)}function v0(e,t){return gl().memoizedState=[e,t===void 0?null:t],e}function N_(e,t){var n=mn();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&o0(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function x0(e,t){var n=gl();t=t===void 0?null:t;var o=e();if(Ks){oe(!0);try{e()}finally{oe(!1)}}return n.memoizedState=[o,t],o}function z_(e,t){var n=mn();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&o0(t,o[1]))return o[0];if(o=e(),Ks){oe(!0);try{e()}finally{oe(!1)}}return n.memoizedState=[o,t],o}function w0(e,t){var n=gl();return S0(n,e,t)}function M1(e,t){var n=mn();return A1(n,Tn.memoizedState,e,t)}function R1(e,t){var n=mn();return Tn===null?S0(n,e,t):A1(n,Tn.memoizedState,e,t)}function S0(e,t,n){return n===void 0||(hi&1073741824)!==0&&(Et&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Yb(),gt.lanes|=e,cs|=e,n)}function A1(e,t,n,o){return Cl(n,t)?n:is.current!==null?(e=S0(e,n,o),Cl(e,t)||(no=!0),e):(hi&106)===0||(hi&1073741824)!==0&&(Et&261930)===0?(no=!0,e.memoizedState=n):(e=Yb(),gt.lanes|=e,cs|=e,t)}function L_(){K.asyncTransitions--}function O1(e,t,n,o,l){var a=fn.p;fn.p=a!==0&&a<Qa?a:Qa;var s=K.T,u={};u.types=s!==null?s.types:null,u._updatedFibers=new Set,K.T=u,M0(e,!1,t,n);try{var _=l(),m=K.S;if(m!==null&&m(u,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){K.asyncTransitions++,_.then(L_,L_);var E=Kt(_,o);Ed(e,t,E,Wl(e))}else Ed(e,t,o,Wl(e))}catch(D){Ed(e,t,{then:function(){},status:"rejected",reason:D},Wl(e))}finally{fn.p=a,s!==null&&u.types!==null&&(s.types!==null&&s.types!==u.types&&console.error("We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."),s.types=u.types),K.T=s,s===null&&u._updatedFibers&&(e=u._updatedFibers.size,u._updatedFibers.clear(),10<e&&console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."))}}function C0(e,t,n,o){if(e.tag!==5)throw Error("Expected the form instance to be a HostComponent. This is a bug in React.");var l=D1(e).queue;v_(e),O1(e,l,t,fc,n===null?j:function(){return N1(e),n(o)})}function D1(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fc,baseState:fc,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:fc},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function N1(e){K.T===null&&console.error("requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.");var t=D1(e);t.next===null&&(t=e.alternate.memoizedState),Ed(e,t.next.queue,{},Wl(e))}function k0(){var e=f0(!1);return e=O1.bind(null,gt,e.queue,!0,!1),gl().memoizedState=e,[!1,e]}function z1(){var e=qc(qa)[0],t=mn().memoizedState;return[typeof e=="boolean"?e:Cd(e),t]}function L1(){var e=kd(qa)[0],t=mn().memoizedState;return[typeof e=="boolean"?e:Cd(e),t]}function $s(){return kn(Xu)}function E0(){var e=gl(),t=Mn.identifierPrefix;if(Lt){var n=ui,o=ci;n=(o&~(1<<32-vl(o)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Uh++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=q3++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t}function T0(){return gl().memoizedState=z4.bind(null,gt)}function z4(e,t){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var o=Wl(n),l=$i(o),a=Hi(n,l,o);a!==null&&(Ua(o,"refresh()",e),Pn(a,n,o),vd(a,n,o)),e=Uc(),t!=null&&a!==null&&console.error("The seed argument is not enabled outside experimental channels."),l.payload={cache:e};return}n=n.return}}function L4(e,t,n){var o=arguments;typeof o[3]=="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),o=Wl(e);var l={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};B_(e)?$1(t,l):(l=ml(e,t,l,o),l!==null&&(Ua(o,"dispatch()",e),Pn(l,e,o),H1(l,t,o)))}function B1(e,t,n){var o=arguments;typeof o[3]=="function"&&console.error("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."),o=Wl(e),Ed(e,t,n,o)&&Ua(o,"setState()",e)}function Ed(e,t,n,o){var l={lane:o,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(B_(e))$1(t,l);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null)){var s=K.H;K.H=Ja;try{var u=t.lastRenderedState,_=a(u,n);if(l.hasEagerState=!0,l.eagerState=_,Cl(_,u))return Ts(e,t,l,0),Mn===null&&dr(),!1}catch{}finally{K.H=s}}if(n=ml(e,t,l,o),n!==null)return Pn(n,e,o),H1(n,t,o),!0}return!1}function M0(e,t,n,o){if(K.T===null&&as===0&&console.error("An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."),o={lane:2,revertLane:yp(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},B_(e)){if(t)throw Error("Cannot update optimistic state while rendering.");console.error("Cannot call startTransition while rendering.")}else t=ml(e,n,o,2),t!==null&&(Ua(2,"setOptimistic()",e),Pn(t,e,2))}function B_(e){var t=e.alternate;return e===gt||t!==null&&t===gt}function $1(e,t){Au=Hh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function H1(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ve(e,n)}}function R0(e){if(e!==null&&typeof e!="function"){var t=String(e);ax.has(t)||(ax.add(t),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",e))}}function A0(e,t,n,o){var l=e.memoizedState,a=n(o,l);if(e.mode&ll){oe(!0);try{a=n(o,l)}finally{oe(!1)}}a===void 0&&(t=Ne(t)||"Component",tx.has(t)||(tx.add(t),console.error("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",t))),l=a==null?l:Nt({},l,a),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}function U1(e,t,n,o,l,a,s){var u=e.stateNode;if(typeof u.shouldComponentUpdate=="function"){if(n=u.shouldComponentUpdate(o,a,s),e.mode&ll){oe(!0);try{n=u.shouldComponentUpdate(o,a,s)}finally{oe(!1)}}return n===void 0&&console.error("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",Ne(t)||"Component"),n}return t.prototype&&t.prototype.isPureReactComponent?!Mi(n,o)||!Mi(l,a):!0}function I1(e,t,n,o){var l=t.state;typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==l&&(e=Ee(e)||"Component",Wv.has(e)||(Wv.add(e),console.error("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",e)),Qg.enqueueReplaceState(t,t.state,null))}function Hs(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=Nt({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function j1(e){xg(e),console.warn(`%s

%s
`,Ou?"An error occurred in the <"+Ou+"> component.":"An error occurred in one of your React components.",`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function Y1(e){var t=Ou?"The above error occurred in the <"+Ou+"> component.":"The above error occurred in one of your React components.",n="React will try to recreate this component tree from scratch using the error boundary you provided, "+((Pg||"Anonymous")+".");if(typeof e=="object"&&e!==null&&typeof e.environmentName=="string"){var o=e.environmentName;e=[`%o

%s

%s
`,e,t,n].slice(0),typeof e[0]=="string"?e.splice(0,1,Yx+" "+e[0],qx,gm+o+gm,Vx):e.splice(0,0,Yx,qx,gm+o+gm,Vx),e.unshift(console),o=d8.apply(console.error,e),o()}else console.error(`%o

%s

%s
`,e,t,n)}function q1(e){xg(e)}function $_(e,t){try{Ou=t.source?Ee(t.source):null,Pg=null;var n=t.value;if(K.actQueue!==null)K.thrownErrors.push(n);else{var o=e.onUncaughtError;o(n,{componentStack:t.stack})}}catch(l){setTimeout(function(){throw l})}}function V1(e,t,n){try{Ou=n.source?Ee(n.source):null,Pg=Ee(t);var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function O0(e,t,n){return n=$i(n),n.tag=jg,n.payload={element:null},n.callback=function(){ie(t.source,$_,e,t)},n}function D0(e){return e=$i(e),e.tag=jg,e}function N0(e,t,n,o){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var a=o.value;e.payload=function(){return l(a)},e.callback=function(){Ai(n),ie(o.source,V1,t,n,o)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Ai(n),ie(o.source,V1,t,n,o),typeof l!="function"&&(ds===null?ds=new Set([this]):ds.add(this)),U3(this,o),typeof l=="function"||(n.lanes&2)===0&&console.error("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",Ee(n)||"Unknown")})}function B4(e,t,n,o,l){if(n.flags|=32768,kr&&zd(e,l),o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&ha(t,n,l,!0),Lt&&(Mr=!0),n=Vo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return al===null?Z_():n.alternate===null&&qn===pi&&(qn=Gh),n.flags&=-257,n.flags|=65536,n.lanes=l,o===Lh?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),hp(e,o,l)),!1;case 22:return n.flags|=65536,o===Lh?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),hp(e,o,l)),!1}throw Error("Unexpected Suspense handler tag ("+n.tag+"). This is a bug in React.")}return hp(e,o,l),Z_(),!1}if(Lt)return Mr=!0,t=Vo.current,t!==null?(t.tag===19&&console.error("SuspenseList should never catch while hydrating. This is a bug in React."),(t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,o!==Tg&&Jr(nl(Error("There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",{cause:o}),n))):(o!==Tg&&Jr(nl(Error("There was an error while hydrating but React was able to recover by instead client rendering the entire root.",{cause:o}),n)),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,o=nl(o,n),l=O0(e.stateNode,o,l),S_(e,l),qn!==ss&&(qn=tc)),!1;var a=nl(Error("There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",{cause:o}),n);if(Of===null?Of=[a]:Of.push(a),qn!==ss&&(qn=tc),t===null)return!0;o=nl(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=O0(n.stateNode,o,e),S_(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(ds===null||!ds.has(a))))return n.flags|=65536,l&=-l,n.lanes|=l,l=D0(l),N0(l,e,n,o),S_(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}function So(e,t,n,o){t.child=e===null?Uv(t,null,n,o):Js(t,e.child,n,o)}function X1(e,t,n,o,l){n=n.render;var a=fr(n);if(a!==n&&(n=a,e!==null&&(no=!0)),a=t.ref,"ref"in o){var s={};for(var u in o)u!=="ref"&&(s[u]=o[u])}else s=o;return pr(t),o=l0(e,t,n,s,a,l),u=r0(),e!==null&&!no?(i0(e,t,l),ni(e,t,l)):(Lt&&u&&_r(t),t.flags|=1,So(e,t,o,l),t.child)}function G1(e,t,n,o,l){if(e===null){var a=n.type;return typeof a=="function"&&!zc(a)&&a.defaultProps===void 0&&n.compare===null?(n=fr(a),t.tag=15,t.type=n,L0(t,a),Q1(e,t,n,o,l)):(e=Rs(n.type,null,o,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!j0(e,l)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(s,o)&&e.ref===t.ref)return ni(e,t,l)}return t.flags|=1,e=Nl(a,o),e.ref=t.ref,e.return=t,t.child=e}function Q1(e,t,n,o,l){if(e!==null){var a=e.memoizedProps;if(Mi(a,o)&&e.ref===t.ref&&t.type===e.type)if(no=!1,t.pendingProps=o=a,j0(e,l))(e.flags&131072)!==0&&(no=!0);else return t.lanes=e.lanes,ni(e,t,l)}return z0(e,t,n,o,l)}function P1(e,t,n,o){var l=o.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:nf,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(o=t.child=e.child,l=0;o!==null;)l=l|o.lanes|o.childLanes,o=o.sibling;o=l&~a}else o=0,t.child=null;return F1(e,t,a,n,o)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ro(t,a!==null?a.cachePool:null),a!==null?u1(t,a):Km(t),d1(t);else return o=t.lanes=536870912,F1(e,t,a!==null?a.baseLanes|n:n,n,o)}else a!==null?(ro(t,a.cachePool),u1(t,a),Ii(t),t.memoizedState=null):(e!==null&&ro(t,null),Km(t),Ii(t));return So(e,t,l,n),t.child}function Td(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:nf,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function F1(e,t,n,o,l){var a=bn();return a=a===null?null:{parent:so._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ro(t,null),Km(t),d1(t),e!==null&&ha(e,t,o,!0),t.childLanes=l,null}function H_(e,t){var n=t.hidden;return n!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,n===!0?"hidden":n===!1?"hidden={false}":"hidden={...}",n?'mode="hidden"':'mode="visible"'),t=U_({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function W1(e,t,n){return Js(t,e.child,null,n),e=H_(t,t.pendingProps),e.flags|=2,Fl(t),t.memoizedState=null,e}function $4(e,t,n){var o=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Lt){if(o.mode==="hidden")return e=H_(t,o),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Td(null,e);if(t0(t),(e=On)?(n=j2(e,ka),n=n!==null&&n.data===sc?n:null,n!==null&&(o={dehydrated:n,treeContext:Pl(),retryLane:536870912,hydrationErrors:null},t.memoizedState=o,o=Oi(n),o.return=t,t.child=o,Ao=t,On=null)):n=null,n===null)throw Zr(t,e),hr(t);return t.lanes=536870912,null}return H_(t,o)}var a=e.memoizedState;if(a!==null){var s=a.dehydrated;if(t0(t),l)if(t.flags&256)t.flags&=-257,t=W1(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error("Client rendering an Activity suspended it again. This is a bug in React.");else if($c(),(n&536870912)!==0&&W_(t),no||ha(e,t,n,!1),l=(n&e.childLanes)!==0,no||l){if(is.current===null){if(o=Mn,o!==null&&(s=et(o,n),s!==0&&s!==a.retryLane))throw a.retryLane=s,xo(e,s),Pn(o,e,s),Fg;Z_()}t=W1(e,t,n)}else e=a.treeContext,On=Jl(s.nextSibling),Ao=t,Lt=!0,es=null,Mr=!1,ea=null,ka=!1,e!==null&&g_(t,e),t=H_(t,o),t.flags|=134221824;return t}return a=e.child,o={mode:o.mode,children:o.children},(n&536870912)!==0&&(n&e.lanes)!==0&&W_(t),e=Nl(a,o),e.ref=t.ref,t.child=e,e.return=t,e}function Gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error("Expected ref to be a function, an object returned by React.createRef(), or undefined/null.");(e===null||e.ref!==n)&&(t.flags|=4194816)}}function z0(e,t,n,o,l){if(n.prototype&&typeof n.prototype.render=="function"){var a=Ne(n)||"Unknown";rx[a]||(console.error("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",a,a),rx[a]=!0)}return t.mode&ll&&Za.recordLegacyContextWarning(t,null),e===null&&(L0(t,t.type),n.contextTypes&&(a=Ne(n)||"Unknown",sx[a]||(sx[a]=!0,console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",a)))),pr(t),n=l0(e,t,n,o,void 0,l),o=r0(),e!==null&&!no?(i0(e,t,l),ni(e,t,l)):(Lt&&o&&_r(t),t.flags|=1,So(e,t,n,l),t.child)}function Z1(e,t,n,o,l,a){return pr(t),mi=-1,Sf=e!==null&&e.type!==t.type,t.updateQueue=null,n=a0(t,o,n,l),f1(e,t),o=r0(),e!==null&&!no?(i0(e,t,a),ni(e,t,a)):(Lt&&o&&_r(t),t.flags|=1,So(e,t,n,a),t.child)}function J1(e,t,n,o,l){switch(b(t)){case!1:var a=t.stateNode,s=new t.type(t.memoizedProps,a.context).state;a.updater.enqueueSetState(a,s,null);break;case!0:t.flags|=128,t.flags|=65536,a=Error("Simulated error coming from DevTools");var u=l&-l;if(t.lanes|=u,s=Mn,s===null)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");u=D0(u),N0(u,s,t,nl(a,t)),S_(t,u)}if(pr(t),t.stateNode===null){if(s=Ki,a=n.contextType,"contextType"in n&&a!==null&&(a===void 0||a.$$typeof!==Ga)&&!lx.has(n)&&(lx.add(n),u=a===void 0?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":typeof a!="object"?" However, it is set to a "+typeof a+".":a.$$typeof===Qp?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(a).join(", ")+"}.",console.error("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",Ne(n)||"Component",u)),typeof a=="object"&&a!==null&&(s=kn(a)),a=new n(o,s),t.mode&ll){oe(!0);try{a=new n(o,s)}finally{oe(!1)}}if(s=t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Qg,t.stateNode=a,a._reactInternals=t,a._reactInternalInstance=Fv,typeof n.getDerivedStateFromProps=="function"&&s===null&&(s=Ne(n)||"Component",Zv.has(s)||(Zv.add(s),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",s,a.state===null?"null":"undefined",s))),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"){var _=u=s=null;if(typeof a.componentWillMount=="function"&&a.componentWillMount.__suppressDeprecationWarning!==!0?s="componentWillMount":typeof a.UNSAFE_componentWillMount=="function"&&(s="UNSAFE_componentWillMount"),typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps.__suppressDeprecationWarning!==!0?u="componentWillReceiveProps":typeof a.UNSAFE_componentWillReceiveProps=="function"&&(u="UNSAFE_componentWillReceiveProps"),typeof a.componentWillUpdate=="function"&&a.componentWillUpdate.__suppressDeprecationWarning!==!0?_="componentWillUpdate":typeof a.UNSAFE_componentWillUpdate=="function"&&(_="UNSAFE_componentWillUpdate"),s!==null||u!==null||_!==null){a=Ne(n)||"Component";var m=typeof n.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";Kv.has(a)||(Kv.add(a),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,a,m,s!==null?`
  `+s:"",u!==null?`
  `+u:"",_!==null?`
  `+_:""))}}a=t.stateNode,s=Ne(n)||"Component",a.render||(n.prototype&&typeof n.prototype.render=="function"?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",s):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",s)),!a.getInitialState||a.getInitialState.isReactClassApproved||a.state||console.error("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",s),a.getDefaultProps&&!a.getDefaultProps.isReactClassApproved&&console.error("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",s),a.contextType&&console.error("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",s),n.childContextTypes&&!ox.has(n)&&(ox.add(n),console.error("%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",s)),n.contextTypes&&!nx.has(n)&&(nx.add(n),console.error("%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",s)),typeof a.componentShouldUpdate=="function"&&console.error("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",s),n.prototype&&n.prototype.isPureReactComponent&&typeof a.shouldComponentUpdate<"u"&&console.error("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",Ne(n)||"A pure component"),typeof a.componentDidUnmount=="function"&&console.error("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",s),typeof a.componentDidReceiveProps=="function"&&console.error("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",s),typeof a.componentWillRecieveProps=="function"&&console.error("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",s),typeof a.UNSAFE_componentWillRecieveProps=="function"&&console.error("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",s),u=a.props!==o,a.props!==void 0&&u&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",s),a.defaultProps&&console.error("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",s,s),typeof a.getSnapshotBeforeUpdate!="function"||typeof a.componentDidUpdate=="function"||Jv.has(n)||(Jv.add(n),console.error("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",Ne(n))),typeof a.getDerivedStateFromProps=="function"&&console.error("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",s),typeof a.getDerivedStateFromError=="function"&&console.error("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",s),typeof n.getSnapshotBeforeUpdate=="function"&&console.error("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",s),(u=a.state)&&(typeof u!="object"||Co(u))&&console.error("%s.state: must be set to an object or null",s),typeof a.getChildContext=="function"&&typeof n.childContextTypes!="object"&&console.error("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",s),a=t.stateNode,a.props=o,a.state=t.memoizedState,a.refs={},Zm(t),s=n.contextType,a.context=typeof s=="object"&&s!==null?kn(s):Ki,a.state===o&&(s=Ne(n)||"Component",ex.has(s)||(ex.add(s),console.error("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",s))),t.mode&ll&&Za.recordLegacyContextWarning(t,a),Za.recordUnsafeLifecycleWarnings(t,a),a.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(A0(t,n,s,o),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&(console.error("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",Ee(t)||"Component"),Qg.enqueueReplaceState(a,a.state,null)),wd(t,o,a,l),xd(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),(t.mode&Pa)!==ht&&(t.flags|=268435456),a=!0}else if(e===null){a=t.stateNode;var E=t.memoizedProps;u=Hs(n,E),a.props=u;var D=a.context;_=n.contextType,s=Ki,typeof _=="object"&&_!==null&&(s=kn(_)),m=n.getDerivedStateFromProps,_=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function",E=t.pendingProps!==E,_||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(E||D!==s)&&I1(t,a,o,s),rs=!1;var O=t.memoizedState;a.state=O,wd(t,o,a,l),xd(),D=t.memoizedState,E||O!==D||rs?(typeof m=="function"&&(A0(t,n,m,o),D=t.memoizedState),(u=rs||U1(t,n,u,o,O,D,s))?(_||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308),(t.mode&Pa)!==ht&&(t.flags|=268435456)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),(t.mode&Pa)!==ht&&(t.flags|=268435456),t.memoizedProps=o,t.memoizedState=D),a.props=o,a.state=D,a.context=s,a=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),(t.mode&Pa)!==ht&&(t.flags|=268435456),a=!1)}else{a=t.stateNode,Jm(e,t),s=t.memoizedProps,_=Hs(n,s),a.props=_,m=t.pendingProps,O=a.context,D=n.contextType,u=Ki,typeof D=="object"&&D!==null&&(u=kn(D)),E=n.getDerivedStateFromProps,(D=typeof E=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==m||O!==u)&&I1(t,a,o,u),rs=!1,O=t.memoizedState,a.state=O,wd(t,o,a,l),xd();var q=t.memoizedState;s!==m||O!==q||rs||e!==null&&e.dependencies!==null&&Ds(e.dependencies)?(typeof E=="function"&&(A0(t,n,E,o),q=t.memoizedState),(_=rs||U1(t,n,_,o,O,q,u)||e!==null&&e.dependencies!==null&&Ds(e.dependencies))?(D||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(o,q,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(o,q,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=q),a.props=o,a.state=q,a.context=u,a=_):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}if(u=a,Gc(e,t),s=(t.flags&128)!==0,u||s){if(u=t.stateNode,Gt(t),s&&typeof n.getDerivedStateFromError!="function")n=null,kl=-1;else if(n=kv(u),t.mode&ll){oe(!0);try{kv(u)}finally{oe(!1)}}t.flags|=1,e!==null&&s?(t.child=Js(t,e.child,null,l),t.child=Js(t,null,n,l)):So(e,t,n,l),t.memoizedState=u.state,e=t.child}else e=ni(e,t,l);return l=t.stateNode,a&&l.props!==o&&(Du||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",Ee(t)||"a component"),Du=!0),e}function K1(e,t,n,o){return pl(),t.flags|=256,So(e,t,n,o),t.child}function L0(e,t){t&&t.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,t.displayName||t.name||"Component"),typeof t.getDerivedStateFromProps=="function"&&(e=Ne(t)||"Unknown",cx[e]||(console.error("%s: Function components do not support getDerivedStateFromProps.",e),cx[e]=!0)),typeof t.contextType=="object"&&t.contextType!==null&&(t=Ne(t)||"Unknown",ix[t]||(console.error("%s: Function components do not support contextType.",t),ix[t]=!0))}function B0(e){return{baseLanes:e,cachePool:bt()}}function $0(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Vl),e}function eb(e,t,n){var o=t.pendingProps;h(t)&&(t.flags|=128);var l=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(Xo.current&vf)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Lt){if(l?Ui(t):Ii(t),(e=On)?(n=j2(e,ka),n=n!==null&&n.data!==sc?n:null,n!==null&&(s={dehydrated:n,treeContext:Pl(),retryLane:536870912,hydrationErrors:null},t.memoizedState=s,s=Oi(n),s.return=t,t.child=s,Ao=t,On=null)):n=null,n===null)throw Zr(t,e),hr(t);return Dp(n)?t.lanes=32:t.lanes=536870912,null}return a=o.children,o=o.fallback,l?(Ii(t),l=t.mode,a=U_({mode:"hidden",children:a},l),o=La(o,l,n,null),a.return=t,o.return=t,a.sibling=o,t.child=a,o=t.child,o.memoizedState=B0(n),o.childLanes=$0(e,s,n),t.memoizedState=Zg,Td(null,o)):(Ui(t),H0(t,a))}var u=e.memoizedState;if(u!==null){var _=u.dehydrated;if(_!==null)return H4(e,t,a,s,o,_,u,n)}return l?(Ii(t),l=o.fallback,a=t.mode,u=e.child,_=u.sibling,o=Nl(u,{mode:"hidden",children:o.children}),o.subtreeFlags=u.subtreeFlags&1206910976,_!==null?l=Nl(_,l):(l=La(l,a,n,null),l.flags|=2),l.return=t,o.return=t,o.sibling=l,t.child=o,Td(null,o),o=t.child,l=e.child.memoizedState,l===null?l=B0(n):(a=l.cachePool,a!==null?(u=so._currentValue,a=a.parent!==u?{parent:u,pool:u}:a):a=bt(),l={baseLanes:l.baseLanes|n,cachePool:a}),o.memoizedState=l,o.childLanes=$0(e,s,n),t.memoizedState=Zg,Td(e.child,o)):(u!==null&&(n&62914560)===n&&(n&e.lanes)!==0&&W_(t),Ui(t),n=e.child,e=n.sibling,n=Nl(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function H0(e,t){return t=U_({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function U_(e,t){return e=H(22,e,null,t),e.lanes=0,e}function I_(e,t,n){return Js(t,e.child,null,n),e=H0(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H4(e,t,n,o,l,a,s,u){if(n){if(t.flags&256)return Ui(t),t.flags&=-257,I_(e,t,u);if(t.memoizedState!==null)return Ii(t),t.child=e.child,t.flags|=128,null;Ii(t);var _=l.fallback,m=t.mode,E=U_({mode:"visible",children:l.children},m);return _=La(_,m,u,null),_.flags|=2,E.return=t,_.return=t,E.sibling=_,t.child=E,Js(t,e.child,null,u),_=t.child,_.memoizedState=B0(u),_.childLanes=$0(e,o,u),t.memoizedState=Zg,Td(null,_)}if(Ui(t),$c(),(u&536870912)!==0&&W_(t),Dp(a)){if(o=a.nextSibling&&a.nextSibling.dataset,o){_=o.dgst;var D=o.msg;m=o.stck,E=o.cstck}return a=D,s=_,l=m,o=E,_=s,m=a,E=l,l=o,_!==H3&&(o=Error(m||"The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),o.stack=E||"",o.digest=_,_=l===void 0?null:l,m={value:o,source:null,stack:_},typeof _=="string"&&Eg.set(o,m),Jr(m)),I_(e,t,u)}if(no||ha(e,t,u,!1),o=(u&e.childLanes)!==0,no||o){if(is.current!==null)return I_(e,t,u);if(o=Mn,o!==null&&(_=et(o,u),_!==0&&_!==s.retryLane))throw s.retryLane=_,xo(e,_),Pn(o,e,_),Fg;return Op(a)||Z_(),I_(e,t,u)}return Op(a)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,On=Jl(a.nextSibling),Ao=t,Lt=!0,es=null,Mr=!1,ea=null,ka=!1,e!==null&&g_(t,e),t=H0(t,l.children),t.flags|=134221824,t)}function tb(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),mr(e.return,t,n)}function nb(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&C_(n)===null&&(t=e),e=e.sibling}return t}function j_(e,t,n,o,l,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:l,treeForkCount:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=l,s.treeForkCount=a)}function U0(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function I0(e,t,n){var o=t.pendingProps,l=o.revealOrder,a=o.tail,s=o.children,u=Xo.current;if(t.flags&128)return Sd(t,u),null;if((o=(u&vf)!==0)?(u=u&Mu|vf,t.flags|=128):u&=Mu,Sd(t,u),u=l??"null",l!=null&&l!=="forwards"&&l!=="backwards"&&l!=="unstable_legacy-backwards"&&l!=="together"&&l!=="independent"&&!ux[u])if(ux[u]=!0,typeof l=="string")switch(l.toLowerCase()){case"together":case"forwards":case"backwards":case"independent":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',l,l.toLowerCase());break;case"forward":case"backward":console.error('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',l,l.toLowerCase());break;default:console.error('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',l)}else console.error('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',l);u=a??"null",Wg[u]||a==null||(a!=="visible"&&a!=="collapsed"&&a!=="hidden"?(Wg[u]=!0,console.error('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',a)):l!=null&&l!=="forwards"&&l!=="backwards"&&l!=="unstable_legacy-backwards"&&(Wg[u]=!0,console.error('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" (default) or "backwards". Did you mean to specify revealOrder="forwards"?',a)));e:if((l==null||l==="forwards"||l==="backwards"||l==="unstable_legacy-backwards")&&s!==void 0&&s!==null&&s!==!1)if(Co(s)){for(u=0;u<s.length;u++)if(!i1(s[u],u))break e}else if(u=Ue(s),typeof u=="function"){if(u=u.call(s))for(var _=u.next(),m=0;!_.done;_=u.next()){if(!i1(_.value,m))break e;m++}}else console.error('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',l);if(l==="backwards"&&e!==null?(U0(e),So(e,t,s,n),U0(e)):So(e,t,s,n),Lt?(fa(),s=of):s=0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tb(e,n,t);else if(e.tag===19)tb(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"backwards":n=nb(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null,U0(t)),j_(t,!0,l,null,a,s);break;case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&C_(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}j_(t,!0,n,null,a,s);break;case"together":j_(t,!1,null,null,void 0,s);break;case"independent":t.memoizedState=null;break;default:n=nb(t.child),n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),j_(t,!1,l,n,a,s)}return t.child}function ob(e,t,n){var o=t.type,l=t.pendingProps,a=l.value;return"value"in l||fx||(fx=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),_a(t,o,a),So(e,t,l.children,n),t.child}function ni(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kl=-1,cs|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ha(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error("Resuming work not yet implemented.");if(t.child!==null){for(e=t.child,n=Nl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function j0(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ds(e)))}function U4(e,t,n){switch(t.tag){case 3:Nn(t,t.stateNode.containerInfo),_a(t,so,e.memoizedState.cache),pl();break;case 27:case 5:In(t);break;case 4:Nn(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 12:(n&t.childLanes)!==0&&(t.flags|=4),t.flags|=2048;var o=t.stateNode;o.effectDuration=-0,o.passiveEffectDuration=-0;break;case 31:if(t.memoizedState!==null)return t.flags|=128,t0(t),null;break;case 13:if(o=t.memoizedState,o!==null){if(o.dehydrated!==null)return Ui(t),t.flags|=128,null;o=ha(e,t,n,!1);var l=t.child.childLanes;return o||(n&l)!==0?eb(e,t,n):(Ui(t),e=ni(e,t,n),e!==null?e.sibling:null)}Ui(t);break;case 19:if(t.flags&128)return I0(e,t,n);if(l=(e.flags&128)!==0,o=(n&t.childLanes)!==0,o||(ha(e,t,n,!1),o=(n&t.childLanes)!==0),l){if(o)return I0(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Sd(t,Xo.current),o)break;return null;case 22:return t.lanes=0,P1(e,t,n,t.pendingProps);case 24:_a(t,so,e.memoizedState.cache)}return ni(e,t,n)}function Y0(e,t,n){if(t._debugNeedsRemount&&e!==null){n=Rs(fr(t.elementType),t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes),n._debugStack=t._debugStack,n._debugTask=t._debugTask;var o=t.return;if(o===null)throw Error("Cannot swap the root fiber.");if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,n._debugInfo=t._debugInfo,t===o.child)o.child=n;else{var l=o.child;if(l===null)throw Error("Expected parent to have a child.");for(;l.sibling!==t;)if(l=l.sibling,l===null)throw Error("Expected to find the previous sibling.");l.sibling=n}return t=o.deletions,t===null?(o.deletions=[e],o.flags|=16):t.push(e),n.flags|=134217730,n}if(e!==null)if(e.memoizedProps!==t.pendingProps||t.type!==e.type)no=!0;else{if(!j0(e,n)&&(t.flags&128)===0)return no=!1,U4(e,t,n);no=(e.flags&131072)!==0}else no=!1,(o=Lt)&&(fa(),o=(t.flags&1048576)!==0),o&&(o=t.index,fa(),Bc(t,of,o));switch(t.lanes=0,t.tag){case 16:e:if(o=t.pendingProps,e=wo(t.elementType),e=fr(e),t.type=e,typeof e=="function")zc(e)?(o=Hs(e,o),t.tag=1,t=J1(null,t,e,o,n)):(t.tag=0,L0(t,e),t=z0(null,t,e,o,n));else{if(e!=null){if(l=e.$$typeof,l===sh){t.tag=11,t=X1(null,t,e,o,n);break e}else if(l===ch){t.tag=14,t=G1(null,t,e,o,n);break e}else if(l===Ga){t.tag=10,t.type=e,t=ob(null,t,n);break e}}throw t="",e!==null&&typeof e=="object"&&e.$$typeof===Hl&&(t=" Did you wrap a component in React.lazy() more than once?"),n=Ne(e)||e,Error("Element type is invalid. Received a promise that resolves to: "+n+". Lazy element type must resolve to a class or function."+t)}return t;case 0:return z0(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,l=Hs(o,t.pendingProps),J1(e,t,o,l,n);case 3:e:{if(Nn(t,t.stateNode.containerInfo),e===null)throw Error("Should have a current fiber. This is a bug in React.");o=t.pendingProps;var a=t.memoizedState;l=a.element,Jm(e,t),wd(t,o,null,n);var s=t.memoizedState;if(o=s.cache,_a(t,so,o),o!==a.cache&&zi(t,[so],n,!0),xd(),o=s.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=K1(e,t,o,n);break e}else if(o!==l){l=nl(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),t),Jr(l),t=K1(e,t,o,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,On=Jl(e.firstChild),Ao=t,Lt=!0,es=null,Mr=!1,ea=null,ka=!0,n=Uv(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling;else{if(pl(),o===l){t=ni(e,t,n);break e}So(e,t,o,n)}t=t.child}return t;case 26:return Gc(e,t),e===null?(n=P2(t.type,null,t.pendingProps,null))?t.memoizedState=n:Lt||(t.stateNode=E2(t.type,t.pendingProps,Ot(Qi.current),t)):t.memoizedState=P2(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return In(t),e===null&&Lt&&(o=Ot(Qi.current),l=Pt(),o=t.stateNode=X2(t.type,t.pendingProps,o,l,!1),Mr||(l=w2(o,t.type,t.pendingProps,l),l!==null&&(Ba(t,0).serverProps=l)),Ao=t,ka=!0,l=On,Xi(t.type)?(Sy=l,On=Jl(o.firstChild)):On=l),So(e,t,t.pendingProps.children,n),Gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Lt&&(a=Pt(),o=Cc(t.type,a.ancestorInfo),l=On,(s=!l)||(s=PS(l,t.type,t.pendingProps,ka),s!==null?(t.stateNode=s,Mr||(a=w2(s,t.type,t.pendingProps,a),a!==null&&(Ba(t,0).serverProps=a)),Ao=t,On=Jl(s.firstChild),ka=!1,a=!0):a=!1,s=!a),s&&(o&&Zr(t,l),hr(t))),In(t),l=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,o=a.children,Tp(l,a)?o=null:s!==null&&Tp(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=l0(e,t,A4,null,null,n),Xu._currentValue=l),Gc(e,t),So(e,t,o,n),t.child;case 6:return e===null&&Lt&&(n=t.pendingProps,e=Pt(),o=e.ancestorInfo.current,n=o!=null?za(n,o.tag,e.ancestorInfo.implicitRootScope):!0,e=On,(o=!e)||(o=FS(e,t.pendingProps,ka),o!==null?(t.stateNode=o,Ao=t,On=null,o=!0):o=!1,o=!o),o&&(n&&Zr(t,e),hr(t))),null;case 13:return eb(e,t,n);case 4:return Nn(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=Js(t,null,o,n):So(e,t,o,n),t.child;case 11:return X1(e,t,t.type,t.pendingProps,n);case 7:return o=t.pendingProps,Gc(e,t),So(e,t,o,n),t.child;case 8:return So(e,t,t.pendingProps.children,n),t.child;case 12:return t.flags|=4,t.flags|=2048,o=t.stateNode,o.effectDuration=-0,o.passiveEffectDuration=-0,So(e,t,t.pendingProps.children,n),t.child;case 10:return ob(e,t,n);case 9:return l=t.type._context,o=t.pendingProps.children,typeof o!="function"&&console.error("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),pr(t),l=kn(l),o=Bg(o,l,void 0),t.flags|=1,So(e,t,o,n),t.child;case 14:return G1(e,t,t.type,t.pendingProps,n);case 15:return Q1(e,t,t.type,t.pendingProps,n);case 19:return I0(e,t,n);case 31:return $4(e,t,n);case 22:return P1(e,t,n,t.pendingProps);case 24:return pr(t),o=kn(so),e===null?(l=bn(),l===null&&(l=Mn,a=Uc(),l.pooledCache=a,ao(a),a!==null&&(l.pooledCacheLanes|=n),l=a),t.memoizedState={parent:o,cache:l},Zm(t),_a(t,so,l)):((e.lanes&n)!==0&&(Jm(e,t),wd(t,null,null,n),xd()),l=e.memoizedState,a=t.memoizedState,l.parent!==o?(l={parent:o,cache:o},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),_a(t,so,o)):(o=a.cache,_a(t,so,o),o!==l.cache&&zi(t,[so],n,!0))),So(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=t.pendingProps,o.name!=null&&o.name!=="auto"?t.flags|=e===null?18882560:18874368:Lt&&_r(t),o.className!==void 0&&(l=typeof o.className=="string"?JSON.stringify(o.className):"{...}",dx[l]||(dx[l]=!0,console.error(`<ViewTransition> doesn't accept a "className" prop. It has been renamed to "default".
-   <ViewTransition className=%s>
+   <ViewTransition default=%s>`,l,l))),e!==null&&e.memoizedProps.name!==o.name?t.flags|=4194816:Gc(e,t),So(e,t,o.children,n),t.child;case 29:throw t.pendingProps}throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function oi(e){e.flags|=4}function q0(e,t,n,o,l){var a;if((a=(e.mode&hv)!==ht)&&(a=n===null?J2(t,o):J2(t,o)&&(o.src!==n.src||o.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Gb())e.flags|=8192;else throw Zs=Lh,Hg}else e.flags&=-16777217}function lb(e,t){if(t.type!=="stylesheet"||(t.state.loading&Ra)!==dc)e.flags&=-16777217;else if(e.flags|=16777216,!K2(t))if(Gb())e.flags|=8192;else throw Zs=Lh,Hg}function Y_(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$t():536870912,e.lanes|=t,lc|=t)}function Md(e,t){if(!Lt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function En(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)if((e.mode&zt)!==ht){for(var l=e.selfBaseDuration,a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&1206910976,o|=a.flags&1206910976,l+=a.treeBaseDuration,a=a.sibling;e.treeBaseDuration=l}else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags&1206910976,o|=l.flags&1206910976,l.return=e,l=l.sibling;else if((e.mode&zt)!==ht){l=e.actualDuration,a=e.selfBaseDuration;for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,o|=s.subtreeFlags,o|=s.flags,l+=s.actualDuration,a+=s.treeBaseDuration,s=s.sibling;e.actualDuration=l,e.treeBaseDuration=a}else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,o|=l.subtreeFlags,o|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function I4(e,t,n){var o=t.pendingProps;switch(Ni(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(t),null;case 1:return En(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Ha(so,t),Cn(t),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&($a(t)?(Ll(),oi(t)):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Os())),En(t),null;case 26:var l=t.type,a=t.memoizedState;return e===null?(oi(t),a!==null?(En(t),lb(t,a)):(En(t),q0(t,l,null,o,n))):a?a!==e.memoizedState?(oi(t),En(t),lb(t,a)):(En(t),t.flags&=-16777217):(e=e.memoizedProps,e!==o&&oi(t),En(t),q0(t,l,e,o,n)),null;case 27:if(jn(t),n=Ot(Qi.current),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&oi(t);else{if(!o){if(t.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return En(t),t.subtreeFlags&=-33554433,null}e=Pt(),$a(t)?y_(t,e):(e=X2(l,o,n,e,!0),t.stateNode=e,oi(t))}return En(t),t.subtreeFlags&=-33554433,null;case 5:if(jn(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&oi(t);else{if(!o){if(t.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return En(t),t.subtreeFlags&=-33554433,null}var s=Pt();if($a(t))y_(t,s);else{switch(a=Ot(Qi.current),Cc(l,s.ancestorInfo),s=s.context,a=$d(a),s){case qu:a=a.createElementNS(du,l);break;case _m:a=a.createElementNS(gh,l);break;default:switch(l){case"svg":a=a.createElementNS(du,l);break;case"math":a=a.createElementNS(gh,l);break;case"script":a=a.createElement("div"),Lx||gS(o)||(console.error("Encountered a script tag while rendering React component. Scripts inside React components are never executed when rendering on the client. Consider using template tag instead (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)."),Lx=!0),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof o.is=="string"?a.createElement("select",{is:o.is}):a.createElement("select"),o.multiple?a.multiple=!0:o.size&&(a.size=o.size);break;default:a=typeof o.is=="string"?a.createElement(l,{is:o.is}):a.createElement(l),l.indexOf("-")===-1&&(l!==l.toLowerCase()&&console.error("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",l),Object.prototype.toString.call(a)!=="[object HTMLUnknownElement]"||va.call(Bx,l)||(Bx[l]=!0,console.error("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",l)))}}a[qo]=t,a[wl]=o;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;e:switch(Yo(a,l,o),l){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&oi(t)}}return En(t),t.subtreeFlags&=-33554433,q0(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&oi(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");if(e=Ot(Qi.current),n=Pt(),$a(t)){if(e=t.stateNode,n=t.memoizedProps,l=!Mr,o=null,a=Ao,a!==null)switch(a.tag){case 3:l&&(l=q2(e,n,o),l!==null&&(Ba(t,0).serverProps=l));break;case 27:case 5:o=a.memoizedProps,l&&(l=q2(e,n,o),l!==null&&(Ba(t,0).serverProps=l))}e[qo]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||g2(e.nodeValue,n)),e||hr(t,!0)}else l=n.ancestorInfo.current,l!=null&&za(o,l.tag,n.ancestorInfo.implicitRootScope),e=$d(e).createTextNode(o),e[qo]=t,t.stateNode=e}return En(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(o=$a(t),n!==null){if(e===null){if(!o)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error("Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.");e[qo]=t,En(t),(t.mode&zt)!==ht&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration))}else Ll(),pl(),(t.flags&128)===0&&(n=t.memoizedState=null),t.flags|=4,En(t),(t.mode&zt)!==ht&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration));e=!1}else n=Os(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Fl(t),t):(Fl(t),null);if((t.flags&128)!==0)throw Error("Client rendering an Activity suspended it again. This is a bug in React.")}return En(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=o,a=$a(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");a[qo]=t,En(t),(t.mode&zt)!==ht&&l!==null&&(l=t.child,l!==null&&(t.treeBaseDuration-=l.treeBaseDuration))}else Ll(),pl(),(t.flags&128)===0&&(l=t.memoizedState=null),t.flags|=4,En(t),(t.mode&zt)!==ht&&l!==null&&(l=t.child,l!==null&&(t.treeBaseDuration-=l.treeBaseDuration));l=!1}else l=Os(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Fl(t),t):(Fl(t),null)}return Fl(t),(t.flags&128)!==0?(t.lanes=n,(t.mode&zt)!==ht&&Pe(t),t):(n=o!==null,e=e!==null&&e.memoizedState!==null,n&&(o=t.child,l=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(l=o.alternate.memoizedState.cachePool.pool),a=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(a=o.memoizedState.cachePool.pool),a!==l&&(o.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Y_(t,t.updateQueue),En(t),(t.mode&zt)!==ht&&n&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration)),null);case 4:return Cn(t),e===null&&vp(t.stateNode.containerInfo),t.flags|=67108864,En(t),null;case 10:return Ha(t.type,t),En(t),null;case 19:if(n0(t),o=t.memoizedState,o===null)return En(t),null;if(l=(t.flags&128)!==0,a=o.rendering,a===null)if(l)Md(o,!1);else{if(qn!==pi||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=C_(e),a!==null){for(t.flags|=128,Md(o,!1),e=a.updateQueue,t.updateQueue=e,Y_(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gd(n,e),n=n.sibling;return Sd(t,Xo.current&Mu|vf),Lt&&zl(t,o.treeForkCount),t.child}e=e.sibling}o.tail!==null&&eo()>Jh&&(t.flags|=128,l=!0,Md(o,!1),t.lanes=4194304)}else{if(!l)if(e=C_(a),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Y_(t,e),Md(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!a.alternate&&!Lt)return En(t),null}else 2*eo()-o.renderingStartTime>Jh&&n!==536870912&&(t.flags|=128,l=!0,Md(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(e=o.last,e!==null?e.sibling=a:t.child=a,o.last=a)}if(o.tail!==null){e=o.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=eo(),e.sibling=null,a=Xo.current,a=l?a&Mu|vf:a&Mu,o.tailMode==="visible"||o.tailMode==="collapsed"||!n||Lt?Sd(t,a):(n=a,ge(Vo,t,t),ge(Xo,n,t),al===null&&(al=t)),Lt&&zl(t,o.treeForkCount),e}return En(t),null;case 22:case 23:return Fl(t),e0(t),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(En(t),t.subtreeFlags&6&&(t.flags|=8192)):En(t),n=t.updateQueue,n!==null&&Y_(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&Oe(Ps,t),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ha(so,t),En(t),null;case 25:return null;case 30:return t.flags|=33554432,En(t),null}throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function j4(e,t){switch(Ni(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&zt)!==ht&&Pe(t),t):null;case 3:return Ha(so,t),Cn(t),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jn(t),null;case 31:if(t.memoizedState!==null){if(Fl(t),t.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");pl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&zt)!==ht&&Pe(t),t):null;case 13:if(Fl(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");pl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&zt)!==ht&&Pe(t),t):null;case 19:return n0(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Cn(t),null;case 10:return Ha(t.type,t),null;case 22:case 23:return Fl(t),e0(t),e!==null&&Oe(Ps,t),e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&zt)!==ht&&Pe(t),t):null;case 24:return Ha(so,t),null;case 25:return null;default:return null}}function ab(e,t){switch(Ni(t),t.tag){case 3:Ha(so,t),Cn(t);break;case 26:case 27:case 5:jn(t);break;case 4:Cn(t);break;case 31:t.memoizedState!==null&&Fl(t);break;case 13:Fl(t);break;case 19:n0(t);break;case 10:Ha(t.type,t);break;case 22:case 23:Fl(t),e0(t),e!==null&&Oe(Ps,t);break;case 24:Ha(so,t)}}function gr(e){return(e.mode&zt)!==ht}function rb(e,t){gr(e)?(pt(),Rd(t,e),tt()):Rd(t,e)}function V0(e,t,n){gr(e)?(pt(),Qc(n,e,t),tt()):Qc(n,e,t)}function Rd(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var l=o.next;n=l;do{if((n.tag&e)===e&&(o=void 0,(e&El)!==xf&&(Uu=!0),o=ie(t,I3,n),(e&El)!==xf&&(Uu=!1),o!==void 0&&typeof o!="function")){var a=void 0;a=(n.tag&ta)!==0?"useLayoutEffect":(n.tag&El)!==0?"useInsertionEffect":"useEffect";var s=void 0;s=o===null?" You returned null. If your effect does not require clean up, return undefined (or nothing).":typeof o.then=="function"?`

It looks like you wrote `+a+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+a+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:" You returned: "+o,ie(t,function(u,_){console.error("%s must not return anything besides a function, which is used for clean-up.%s",u,_)},a,s)}n=n.next}while(n!==l)}}catch(u){dn(t,t.return,u)}}function Qc(e,t,n){try{var o=t.updateQueue,l=o!==null?o.lastEffect:null;if(l!==null){var a=l.next;o=a;do{if((o.tag&e)===e){var s=o.inst,u=s.destroy;u!==void 0&&(s.destroy=void 0,(e&El)!==xf&&(Uu=!0),l=t,ie(l,j3,l,n,u),(e&El)!==xf&&(Uu=!1))}o=o.next}while(o!==a)}}catch(_){dn(t,t.return,_)}}function ib(e,t){gr(e)?(pt(),Rd(t,e),tt()):Rd(t,e)}function X0(e,t,n){gr(e)?(pt(),Qc(n,e,t),tt()):Qc(n,e,t)}function sb(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;e.type.defaultProps||"ref"in e.memoizedProps||Du||(n.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ee(e)||"instance"),n.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Ee(e)||"instance"));try{ie(e,c1,t,n)}catch(o){dn(e,e.return,o)}}}function Y4(e,t,n){return e.getSnapshotBeforeUpdate(t,n)}function q4(e,t){var n=t.memoizedProps,o=t.memoizedState;t=e.stateNode,e.type.defaultProps||"ref"in e.memoizedProps||Du||(t.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ee(e)||"instance"),t.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Ee(e)||"instance"));try{var l=Hs(e.type,n),a=ie(e,Y4,t,l,o);n=_x,a!==void 0||n.has(e.type)||(n.add(e.type),ie(e,function(){console.error("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",Ee(e))})),t.__reactInternalSnapshotBeforeUpdate=a}catch(s){dn(e,e.return,s)}}function cb(e,t,n){n.props=Hs(e.type,e.memoizedProps),n.state=e.memoizedState,gr(e)?(pt(),ie(e,Ov,e,t,n),tt()):ie(e,Ov,e,t,n)}function V4(e){var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;var o=rn(e.memoizedProps,n);(n.ref===null||n.ref.name!==o)&&(n.ref=z2(o)),n=n.ref;break;case 7:e.stateNode===null&&(n=new Zl(e),ke(e,GS,n),e.stateNode=n),n=e.stateNode;break;default:n=e.stateNode}if(typeof t=="function")if(gr(e))try{pt(),e.refCleanup=t(n)}finally{tt()}else e.refCleanup=t(n);else typeof t=="string"?console.error("String refs are no longer supported."):t.hasOwnProperty("current")||console.error("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",Ee(e)),t.current=n}}function yr(e,t){try{ie(e,V4,e)}catch(n){dn(e,t,n)}}function jo(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{if(gr(e))try{pt(),ie(e,o)}finally{tt(e)}else ie(e,o)}catch(l){dn(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{if(gr(e))try{pt(),ie(e,n,null)}finally{tt(e)}else ie(e,n,null)}catch(l){dn(e,t,l)}else n.current=null}function ub(e,t,n,o){var l=e.memoizedProps,a=l.id,s=l.onCommit;l=l.onRender,t=t===null?"mount":"update",Oh&&(t="nested-update"),typeof l=="function"&&l(a,t,e.actualDuration,e.treeBaseDuration,e.actualStartTime,n),typeof s=="function"&&s(a,t,o,n)}function X4(e,t,n,o){var l=e.memoizedProps;e=l.id,l=l.onPostCommit,t=t===null?"mount":"update",Oh&&(t="nested-update"),typeof l=="function"&&l(e,t,o,n)}function q_(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)I2(e.stateNode,t[n])}function db(e){for(var t=e.return;t!==null&&(Q0(t)&&I2(e.stateNode,t.stateNode),!G0(t));)t=t.return}function Ad(e){for(var t=e.return;t!==null&&(Q0(t)&&QS(e.stateNode,t.stateNode),!G0(t));)t=t.return}function G0(e){return e.tag===5||e.tag===3||e.tag===27}function Q0(e){return e&&e.tag===7&&e.stateNode!==null}function P0(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{ie(e,vS,o,t,n,e)}catch(l){dn(e,e.return,l)}}function F0(e,t,n){try{ie(e,wS,e.stateNode,e.type,n,t,e)}catch(o){dn(e,e.return,o)}}function fb(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xi(e.type)||e.tag===4}function W0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fb(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xi(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Z0(e,t,n,o){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?(M2(n),(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t)):(M2(n),t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),l=n._reactRootContainer,l!=null||t.onclick!==null||(t.onclick=To)),q_(e,o),sn=!0;else if(l!==4&&(l===27&&(q_(e,o),o=null,Xi(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Z0(e,t,n,o),e=e.sibling;e!==null;)Z0(e,t,n,o),e=e.sibling}function V_(e,t,n,o){var l=e.tag;if(l===5||l===6)l=e.stateNode,t?n.insertBefore(l,t):n.appendChild(l),q_(e,o),sn=!0;else if(l!==4&&(l===27&&(q_(e,o),o=null,Xi(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(V_(e,t,n,o),e=e.sibling;e!==null;)V_(e,t,n,o),e=e.sibling}function G4(e){for(var t,n=e.return;n!==null;){if(fb(n)){t=n;break}n=n.return}n=null;for(var o=e.return;o!==null;){if(Q0(o)){var l=o.stateNode;n===null?n=[l]:n.push(l)}if(G0(o))break;o=o.return}if(t==null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");switch(t.tag){case 27:t=t.stateNode,o=W0(e),V_(e,o,t,n);break;case 5:o=t.stateNode,t.flags&32&&(T2(o),t.flags&=-33),t=W0(e),V_(e,t,o,n);break;case 3:case 4:t=t.stateNode.containerInfo,o=W0(e),Z0(e,o,t,n);break;default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}function _b(e){var t=e.stateNode,n=e.memoizedProps;try{ie(e,n6,e.type,n,t,e)}catch(o){dn(e,e.return,o)}}function hb(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Yh=!0)}function mb(){var e=Dr;return Dr=null,e}function Pc(e,t,n,o,l){return jl=0,(t=pb(e.child,t,n,o,l))&&e._debugTask!=null&&Il===null&&(Il=e._debugTask),t}function pb(e,t,n,o,l){for(var a=!1;e!==null;){if(e.tag===5){var s=e.stateNode;if(o!==null){var u=Mp(s);o.push(u),u.view&&(a=!0)}else a||Mp(s).view&&(a=!0);Yh=!0,O2(s,jl===0?t:t+"_"+jl,n),jl++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&l||pb(e.child,t,n,o,l)&&(a=!0));e=e.sibling}return a}function br(e,t){for(;e!==null;)e.tag===5?D2(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||br(e.child,t)),e=e.sibling}function X_(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(X_(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error("Found a pair with an auto name. This is a bug in React.");var n=t.name;t=Dl(t.default,t.share),t!=="none"&&(Pc(e,n,t,null,!1)||br(e.child,!1))}e=e.sibling}}function J0(e,t){if(e.tag===30){var n=e.stateNode,o=e.memoizedProps,l=rn(o,n),a=Dl(o.default,n.paired?o.share:o.enter);a!=="none"?Pc(e,l,a,null,!1)?(X_(e),n.paired||t||Zc(e,o.onEnter)):br(e.child,!1):X_(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)J0(e,t),e=e.sibling;else X_(e)}function K0(e){if(na!==null&&na.size!==0){var t=na;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,o=n.name;if(o!=null&&o!=="auto"){var l=t.get(o);if(l!==void 0){var a=Dl(n.default,n.share);if(a!=="none"&&(Pc(e,o,a,null,!1)?(a=e.stateNode,l.paired=a,a.paired=l,Zc(e,n.onShare)):br(e.child,!1)),t.delete(o),t.size===0)break}}}K0(e)}e=e.sibling}}}function ep(e){if(e.tag===30){var t=e.memoizedProps,n=rn(t,e.stateNode),o=na!==null?na.get(n):void 0,l=Dl(t.default,o!==void 0?t.share:t.exit);l!=="none"&&(Pc(e,n,l,null,!1)?o!==void 0?(l=e.stateNode,o.paired=l,l.paired=o,na.delete(n),Zc(e,t.onShare)):Zc(e,t.onExit):br(e.child,!1)),na!==null&&K0(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ep(e),e=e.sibling;else na!==null&&K0(e)}function gb(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=rn(t,e.stateNode);t=Dl(t.default,t.update),e.flags&=-5,t!=="none"&&Pc(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&gb(e);e=e.sibling}}function tp(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,br(e.child,!1))}tp(e)}e=e.sibling}}function G_(e){if(e.tag===30)e.stateNode.paired=null,br(e.child,!1),tp(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)G_(e),e=e.sibling;else tp(e)}function yb(e){for(e=e.child;e!==null;)e.tag===30?br(e.child,!1):(e.subtreeFlags&33554432)!==0&&yb(e),e=e.sibling}function np(e,t,n,o,l,a,s){for(var u=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(a!==null&&jl<a.length){var m=a[jl],E=Mp(_);(m.view||E.view)&&(u=!0);var D;if(D=(e.flags&4)===0)if(E.clip)D=!0;else{D=m.rect;var O=E.rect;D=D.y!==O.y||D.x!==O.x||D.height!==O.height||D.width!==O.width}D&&(e.flags|=4),E.abs?E=!m.abs:(m=m.rect,E=E.rect,E=m.height!==E.height||m.width!==E.width),E&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&O2(_,jl===0?n:n+"_"+jl,l),u&&(e.flags&4)!==0||(Dr===null&&(Dr=[]),Dr.push(_,jl===0?o:o+"_"+jl,t.memoizedProps)),jl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&s?e.flags|=t.flags&32:np(e,t.child,n,o,l,a,s)&&(u=!0));t=t.sibling}return u}function bb(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,o=e.stateNode,l=rn(n,o),a=Dl(n.default,n.update);if(t){o=o.clones;var s=o===null?null:o.map(NS)}else s=e.memoizedState,e.memoizedState=null;o=e;var u=e.child,_=l;jl=0,a=np(o,u,_,l,a,s,!1),(e.flags&4)!==0&&a&&(t||Zc(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&bb(e,t);e=e.sibling}}function vb(e){var t=e.memoizedProps.name;if(t!=null&&t!=="auto"){var n=qh.get(t);if(n!==void 0){if(n!==e&&n!==e.alternate&&!hx[t]){hx[t]=!0;var o=JSON.stringify(t);ie(e,function(){console.error("There are two <ViewTransition name=%s> components with the same name mounted at the same time. This is not supported and will cause View Transitions to error. Try to use a more unique name e.g. by using a namespace prefix and adding the id of an item to the name.",o)}),ie(n,function(){console.error("The existing <ViewTransition name=%s> duplicate has this stack trace.",o)})}}else qh.set(t,e)}}function xb(e){var t=e.memoizedProps.name;if(t!=null&&t!=="auto"){var n=qh.get(t);n===void 0||n!==e&&n!==e.alternate||qh.delete(t)}}function wb(e,t){return t.tag===31?(t=t.memoizedState,e.memoizedState!==null&&t===null):t.tag===13?(e=e.memoizedState,t=t.memoizedState,e!==null&&e.dehydrated!==null&&(t===null||t.dehydrated===null)):t.tag===3?e.memoizedState.isDehydrated&&(t.flags&256)===0:!1}function Q4(e,t,n){if(e=e.containerInfo,yy=Gu,e=ua(e),Qn(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var a=l.anchorOffset,s=l.focusNode;l=l.focusOffset;try{o.nodeType,s.nodeType}catch{o=null;break e}var u=0,_=-1,m=-1,E=0,D=0,O=e,q=null;t:for(;;){for(var _e;O!==o||a!==0&&O.nodeType!==3||(_=u+a),O!==s||l!==0&&O.nodeType!==3||(m=u+l),O.nodeType===3&&(u+=O.nodeValue.length),(_e=O.firstChild)!==null;)q=O,O=_e;for(;;){if(O===e)break t;if(q===o&&++E===a&&(_=u),q===s&&++D===l&&(m=u),(_e=O.nextSibling)!==null)break;O=q,q=O.parentNode}O=_e}o=_===-1||m===-1?null:{start:_,end:m}}else o=null}o=o||{start:0,end:0}}else o=null;for(by={focusedElem:e,selectionRange:o},Gu=!1,n=(n&335544064)===n,No=t,t=n?9270:1024;No!==null;){if(e=No,n&&(o=e.deletions,o!==null))for(a=0;a<o.length;a++)n&&ep(o[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&hb(e),Q_(n);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&n&&ep(o),Q_(n);continue}else if(o!==null&&o.memoizedState!==null){n&&hb(e),Q_(n);continue}}o=e.child,(e.subtreeFlags&t)!==0&&o!==null?(o.return=e,No=o):(n&&gb(e),Q_(n))}}na=null}function Q_(e){for(;No!==null;){var t=No,n=t,o=e,l=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:(a&1024)!==0&&l!==null&&q4(n,l);break;case 3:if((a&1024)!==0){if(o=n.stateNode.containerInfo,n=o.nodeType,n===9)Ap(o);else if(n===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Ap(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:o&&l!==null&&(o=l,l=n,n=rn(o.memoizedProps,o.stateNode),l=l.memoizedProps,l=Dl(l.default,l.update),l!=="none"&&Pc(o,n,l,o.memoizedState=[],!0));break;default:if((a&1024)!==0)throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}if(o=t.sibling,o!==null){o.return=t.return,No=o;break}No=t.return}}function Sb(e,t,n){var o=T(),l=Q(),a=P(),s=be(),u=n.flags;switch(n.tag){case 0:case 11:case 15:Xa(e,n),u&4&&rb(n,ta|Ta);break;case 1:if(Xa(e,n),u&4)if(e=n.stateNode,t===null)n.type.defaultProps||"ref"in n.memoizedProps||Du||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ee(n)||"instance"),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Ee(n)||"instance")),gr(n)?(pt(),ie(n,$g,n,e),tt()):ie(n,$g,n,e);else{var _=Hs(n.type,t.memoizedProps);t=t.memoizedState,n.type.defaultProps||"ref"in n.memoizedProps||Du||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",Ee(n)||"instance"),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",Ee(n)||"instance")),gr(n)?(pt(),ie(n,Mv,n,e,_,t,e.__reactInternalSnapshotBeforeUpdate),tt()):ie(n,Mv,n,e,_,t,e.__reactInternalSnapshotBeforeUpdate)}u&64&&sb(n),u&512&&yr(n,n.return);break;case 3:if(t=ma(),Xa(e,n),u&64&&(u=n.updateQueue,u!==null)){if(_=null,n.child!==null)switch(n.child.tag){case 27:case 5:_=n.child.stateNode;break;case 1:_=n.child.stateNode}try{ie(n,c1,u,_)}catch(E){dn(n,n.return,E)}}e.effectDuration+=Ia(t);break;case 27:t===null&&u&4&&_b(n);case 26:case 5:if(Xa(e,n),t===null){if(u&4)P0(n);else if(u&64){e=n.type,t=n.memoizedProps,_=n.stateNode;try{ie(n,xS,_,e,t,n)}catch(E){dn(n,n.return,E)}}}u&512&&yr(n,n.return);break;case 12:if(u&4){u=ma(),Xa(e,n),e=n.stateNode,e.effectDuration+=x(u);try{ie(n,ub,n,t,di,e.effectDuration)}catch(E){dn(n,n.return,E)}}else Xa(e,n);break;case 31:Xa(e,n),u&4&&Tb(e,n);break;case 13:Xa(e,n),u&4&&Mb(e,n),u&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(u=rS.bind(null,n),WS(e,u))));break;case 22:if(u=n.memoizedState!==null||Do,!u){var m=t!==null&&t.memoizedState!==null||pn;t=Do,_=pn,Do=u,(pn=m)&&!_?(u=Vh,(n.subtreeFlags&8772)!==0&&(u|=Jg),ga(e,n,u),(n.mode&zt)!==ht&&0<=at&&0<=ct&&.05<ct-at&&Qr(n,at,ct)):Xa(e,n),Do=t,pn=_}break;case 30:u&18874368&&vb(n),Xa(e,n),u&512&&yr(n,n.return);break;case 7:u&512&&yr(n,n.return);default:Xa(e,n)}(n.mode&zt)!==ht&&0<=at&&0<=ct&&((Fn||.05<Yn)&&Mo(n,at,ct,Yn,Un),n.alternate===null&&n.return!==null&&n.return.alternate!==null&&.05<ct-at&&(wb(n.return.alternate,n.return)||vo(n,at,ct,"Mount"))),I(o),X(l),Un=a,Fn=s}function op(e,t){for(e=e.child;e!==null;)Cb(e,t),e=e.sibling}function Cb(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;t?ie(e,TS,n):ie(e,AS,e.stateNode,e.memoizedProps)}catch(a){dn(e,e.return,a)}lp(e,t);break;case 6:try{var o=e.stateNode;t?ie(e,MS,o):ie(e,OS,o,e.memoizedProps),sn=!0}catch(a){dn(e,e.return,a)}break;case 18:try{var l=e.stateNode;t?ie(e,ES,l):ie(e,RS,e.stateNode)}catch(a){dn(e,e.return,a)}break;case 22:case 23:e.memoizedState===null&&op(e,t);break;default:op(e,t)}}function lp(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,o=t;switch(n.tag){case 4:Cb(n,o);break e;case 22:n.memoizedState===null&&lp(n,o);break e;default:lp(n,o)}}e=e.sibling}}function kb(e){var t=e.alternate;t!==null&&(e.alternate=null,kb(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&oo(t)),e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Va(e,t,n){for(n=n.child;n!==null;)Eb(e,t,n),n=n.sibling}function Eb(e,t,n){if(ol&&typeof ol.onCommitFiberUnmount=="function")try{ol.onCommitFiberUnmount(cu,n)}catch(m){Cr||(Cr=!0,console.error("React instrumentation encountered an error: %o",m))}var o=T(),l=Q(),a=P(),s=be();switch(n.tag){case 26:pn||jo(n,t),Va(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!pn&&(e=n.stateNode,e.parentNode.removeChild(e));break;case 27:pn||jo(n,t),Ad(n);var u=uo,_=Yl;Xi(n.type)&&(uo=n.stateNode,Yl=!1),Va(e,t,n),ie(n,G2,n.stateNode,n.type,n.memoizedProps),uo=u,Yl=_;break;case 5:pn||jo(n,t),Ad(n);case 6:if(n.tag===6&&Ad(n),u=uo,_=Yl,uo=null,Va(e,t,n),uo=u,Yl=_,uo!==null)if(Yl)try{ie(n,kS,uo,n.stateNode),sn=!0}catch(m){dn(n,t,m)}else try{ie(n,CS,uo,n.stateNode),sn=!0}catch(m){dn(n,t,m)}break;case 18:uo!==null&&(Yl?(e=uo,R2(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),lu(e)):R2(uo,n.stateNode));break;case 4:u=uo,_=Yl,uo=n.stateNode.containerInfo,Yl=!0,Va(e,t,n),uo=u,Yl=_;break;case 0:case 11:case 14:case 15:Qc(El,n,t),pn||V0(n,t,ta),Va(e,t,n);break;case 1:pn||(jo(n,t),u=n.stateNode,typeof u.componentWillUnmount=="function"&&cb(n,t,u)),Va(e,t,n);break;case 21:Va(e,t,n);break;case 22:pn=(u=pn)||n.memoizedState!==null,Va(e,t,n),pn=u;break;case 30:n.flags&18874368&&xb(n),jo(n,t),Va(e,t,n);break;case 7:pn||jo(n,t),Va(e,t,n);break;default:Va(e,t,n)}(n.mode&zt)!==ht&&0<=at&&0<=ct&&(Fn||.05<Yn)&&Mo(n,at,ct,Yn,Un),I(o),X(l),Un=a,Fn=s}function Tb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ie(t,JS,e)}catch(n){dn(t,t.return,n)}}}function Mb(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ie(t,KS,e)}catch(n){dn(t,t.return,n)}}function P4(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new mx),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new mx),t;default:throw Error("Unexpected Suspense handler tag ("+e.tag+"). This is a bug in React.")}}function P_(e,t){var n=P4(e);t.forEach(function(o){if(!n.has(o)){if(n.add(o),kr)if(Nu!==null&&zu!==null)zd(zu,Nu);else throw Error("Expected finished root and lanes to be set. This is a bug in React.");var l=iS.bind(null,e,o);o.then(l,l)}})}function yl(e,t,n){var o=t.deletions;if(o!==null)for(var l=0;l<o.length;l++){var a=e,s=t,u=o[l],_=T(),m=s;e:for(;m!==null;){switch(m.tag){case 27:if(Xi(m.type)){uo=m.stateNode,Yl=!1;break e}break;case 5:uo=m.stateNode,Yl=!1;break e;case 3:case 4:uo=m.stateNode.containerInfo,Yl=!0;break e}m=m.return}if(uo===null)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");Eb(a,s,u),uo=null,Yl=!1,(u.mode&zt)!==ht&&0<=at&&0<=ct&&.05<ct-at&&vo(u,at,ct,"Unmount"),I(_),a=u,s=a.alternate,s!==null&&(s.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Rb(t,e,n),t=t.sibling}function Rb(e,t,n){var o=T(),l=Q(),a=P(),s=be(),u=e.alternate,_=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_&4&&(u=e.updateQueue,u=u!==null?u.events:null,u!==null))for(var m=0;m<u.length;m++){var E=u[m];E.ref.impl=E.nextImpl}yl(t,e,n),bl(e),_&4&&(Qc(El|Ta,e,e.return),Rd(El|Ta,e),V0(e,e.return,ta|Ta));break;case 1:yl(t,e,n),bl(e),_&512&&(pn||u===null||jo(u,u.return)),_&64&&Do&&(t=e.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(_=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=_===null?n:_.concat(n))));break;case 26:if(m=Ka,yl(t,e,n),bl(e),_&512&&(pn||u===null||jo(u,u.return)),_&4)if(_=u!==null?u.memoizedState:null,n=e.memoizedState,u===null)if(n===null)if(e.stateNode===null)if(Do)e.stateNode=E2(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,_=m.ownerDocument||m;t:switch(t){case"title":u=_.getElementsByTagName("title")[0],(!u||u[Qd]||u[qo]||u.namespaceURI===du||u.hasAttribute("itemprop"))&&(u=_.createElement(t),_.head.insertBefore(u,_.querySelector("head > title"))),Yo(u,t,n),u[qo]=e,hn(u),t=u;break e;case"link":if(m=Z2("link","href",_).get(t+(n.href||""))){for(E=0;E<m.length;E++)if(u=m[E],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){m.splice(E,1);break t}}u=_.createElement(t),Yo(u,t,n),_.head.appendChild(u);break;case"meta":if(m=Z2("meta","content",_).get(t+(n.content||""))){for(E=0;E<m.length;E++)if(u=m[E],le(n.content,"content"),u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){m.splice(E,1);break t}}u=_.createElement(t),Yo(u,t,n),_.head.appendChild(u);break;default:throw Error('getNodesForType encountered a type it did not expect: "'+t+'". This is a bug in React.')}u[qo]=e,hn(u),t=u}e.stateNode=t}else Do||$p(m,e.type,e.stateNode);else e.stateNode=W2(m,n,e.memoizedProps);else _!==n?(_===null?(t=u.stateNode,t===null||pn||t.parentNode.removeChild(t)):_.count--,n===null?Do||$p(m,e.type,e.stateNode):W2(m,n,e.memoizedProps)):n===null&&e.stateNode!==null&&F0(e,e.memoizedProps,u.memoizedProps);break;case 27:yl(t,e,n),bl(e),_&512&&(pn||u===null||jo(u,u.return)),u!==null&&_&4&&F0(e,e.memoizedProps,u.memoizedProps);break;case 5:if(m=Nr,Nr=!1,yl(t,e,n),Nr=m,bl(e),_&512&&(pn||u===null||jo(u,u.return)),e.flags&32){t=e.stateNode;try{ie(e,T2,t),sn=!0}catch(_e){dn(e,e.return,_e)}}_&4&&e.stateNode!=null&&(t=e.memoizedProps,F0(e,t,u!==null?u.memoizedProps:t)),_&1024&&(Kg=!0,e.type!=="form"&&console.error("Unexpected host component type. Expected a form. This is a bug in React."));break;case 6:if(yl(t,e,n),bl(e),_&4){if(e.stateNode===null)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");t=e.memoizedProps,n=u!==null?u.memoizedProps:t,_=e.stateNode;try{ie(e,SS,_,n,t),sn=!0}catch(_e){dn(e,e.return,_e)}}break;case 3:if(m=ma(),sn=!1,hm=null,E=Ka,Ka=Id(t.containerInfo),yl(t,e,n),Ka=E,bl(e),_&4&&u!==null&&u.memoizedState.isDehydrated)try{ie(e,ZS,t.containerInfo)}catch(_e){dn(e,e.return,_e)}Kg&&(Kg=!1,Ab(e)),t.effectDuration+=Ia(m),sn=!1;break;case 4:_=Nr,Nr=Do,u=nd(),m=Ka,Ka=Id(e.stateNode.containerInfo),yl(t,e,n),bl(e),Ka=m,sn&&kf&&(Xh=!0),sn=u,Nr=_;break;case 12:_=ma(),yl(t,e,n),bl(e),e.stateNode.effectDuration+=x(_);break;case 31:yl(t,e,n),bl(e),_&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,P_(e,t)));break;case 13:yl(t,e,n),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(u!==null&&u.memoizedState!==null)&&(Zh=eo()),_&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,P_(e,t)));break;case 22:m=e.memoizedState!==null,E=u!==null&&u.memoizedState!==null;var D=Do,O=pn,q=Nr;Do=D||m,Nr=q||m,pn=O||E,yl(t,e,n),pn=O,Nr=q,Do=D,E&&!m&&!D&&!O&&(e.mode&zt)!==ht&&0<=at&&0<=ct&&.05<ct-at&&Qr(e,at,ct),bl(e),_&8192&&(t=e.stateNode,t._visibility=m?t._visibility&~nf:t._visibility|nf,!m||u===null||E||Do||pn||(t=Vh,n=E||pn,u=Do,E=pn,Do=m||Do,pn=n,Yi(e,t),(e.mode&zt)!==ht&&0<=at&&0<=ct&&.05<ct-at&&vo(e,at,ct,"Disconnect"),Do=u,pn=E),!m&&Nr||op(e,m)),_&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,P_(e,n))));break;case 19:yl(t,e,n),bl(e),_&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,P_(e,t)));break;case 30:_&512&&(pn||u===null||jo(u,u.return)),_=nd(),m=kf,E=(n&335544064)===n,D=e.memoizedProps,kf=E&&Dl(D.default,D.update)!=="none",yl(t,e,n),bl(e),E&&u!==null&&sn&&(e.flags|=4),kf=m,sn=_;break;case 21:break;case 7:_&512&&(pn||u===null||jo(u,u.return)),u&&u.stateNode!==null&&(u.stateNode._fragmentFiber=e);default:yl(t,e,n),bl(e)}(e.mode&zt)!==ht&&0<=at&&0<=ct&&((Fn||.05<Yn)&&Mo(e,at,ct,Yn,Un),e.alternate===null&&e.return!==null&&e.return.alternate!==null&&.05<ct-at&&(wb(e.return.alternate,e.return)||vo(e,at,ct,"Mount"))),I(o),X(l),Un=a,Fn=s}function bl(e){var t=e.flags;if(t&2){try{ie(e,G4,e)}catch(n){dn(e,e.return,n)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ab(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ab(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Gu=!0,t.reset(),Gu=!1),e=e.sibling}}function Fc(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Ob(t,e),t=t.sibling;else bb(t,!1)}function Ob(e,t){var n=e.alternate;if(n===null)J0(e,!1);else switch(e.tag){case 3:if(ey=zr=!1,mb(),Fc(t,e),!zr&&!Xh){if(e=Dr,e!==null)for(var o=0;o<e.length;o+=3){n=e[o];var l=e[o+1];D2(n,e[o+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),ey=!0}Dr=null;break;case 5:Fc(t,e);break;case 4:o=zr,zr=!1,Fc(t,e),zr&&(Xh=!0),zr=o;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?J0(e,!1):Fc(t,e));break;case 30:o=zr,l=mb(),zr=!1,Fc(t,e),zr&&(e.flags|=4);var a=e.memoizedProps,s=e.stateNode;t=rn(a,s),s=rn(n.memoizedProps,s);var u=Dl(a.default,a.update);u==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,jl=0,t=np(e,n,t,s,u,a,!0),jl!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Zc(e,e.memoizedProps.onUpdate),Dr=l):l!==null&&(l.push.apply(l,Dr),Dr=l),zr=(e.flags&32)!==0?!0:o;break;default:Fc(t,e)}}function Xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sb(e,t.alternate,t),t=t.sibling}function Db(e,t){var n=T(),o=Q(),l=P(),a=be();switch(e.tag){case 0:case 11:case 14:case 15:V0(e,e.return,ta),Yi(e,t);break;case 1:jo(e,e.return);var s=e.stateNode;typeof s.componentWillUnmount=="function"&&cb(e,e.return,s),Yi(e,t);break;case 27:(t&Vh)!==Cf&&ie(e,G2,e.stateNode,e.type,e.memoizedProps);case 5:jo(e,e.return),e.tag!==5&&e.tag!==27||Ad(e),Yi(e,t);break;case 6:Ad(e);break;case 26:jo(e,e.return),s=e.stateNode,e.memoizedState!==null||s===null||pn||s.parentNode.removeChild(s),Yi(e,t);break;case 22:e.memoizedState===null&&Yi(e,t);break;case 30:e.flags&18874368&&xb(e),jo(e,e.return),Yi(e,t);break;case 7:jo(e,e.return);default:Yi(e,t)}(e.mode&zt)!==ht&&0<=at&&0<=ct&&(Fn||.05<Yn)&&Mo(e,at,ct,Yn,Un),I(n),X(o),Un=l,Fn=a}function Yi(e,t){for(e=e.child;e!==null;)Db(e,t),e=e.sibling}function Nb(e,t,n,o){var l=T(),a=Q(),s=P(),u=be(),_=n.flags,m=(o&Jg)!==Cf;switch(n.tag){case 0:case 11:case 15:ga(e,n,o),rb(n,ta);break;case 1:if(ga(e,n,o),t=n.stateNode,typeof t.componentDidMount=="function"&&ie(n,$g,n,t),t=n.updateQueue,t!==null){e=n.stateNode;try{ie(n,R4,t,e)}catch(D){dn(n,n.return,D)}}m&&_&64&&sb(n),yr(n,n.return);break;case 27:(o&Vh)!==Cf&&_b(n);case 5:n.tag!==5&&n.tag!==27||db(n),ga(e,n,o),m&&t===null&&_&4&&P0(n),yr(n,n.return);break;case 6:db(n);break;case 26:var E=n.stateNode;n.memoizedState!==null||E===null||Do||$p(Id(E.ownerDocument),n.type,E),ga(e,n,o),m&&t===null&&_&4&&P0(n),yr(n,n.return);break;case 12:if(m&&_&4){_=ma(),ga(e,n,o),m=n.stateNode,m.effectDuration+=x(_);try{ie(n,ub,n,t,di,m.effectDuration)}catch(D){dn(n,n.return,D)}}else ga(e,n,o);break;case 31:ga(e,n,o),m&&_&4&&Tb(e,n);break;case 13:ga(e,n,o),m&&_&4&&Mb(e,n);break;case 22:n.memoizedState===null&&ga(e,n,o),yr(n,n.return);break;case 30:ga(e,n,o),_&18874368&&vb(n),yr(n,n.return);break;case 7:yr(n,n.return);default:ga(e,n,o)}(n.mode&zt)!==ht&&0<=at&&0<=ct&&(Fn||.05<Yn)&&Mo(n,at,ct,Yn,Un),I(l),X(a),Un=s,Fn=u}function ga(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&~Jg,t=t.child;t!==null;)Nb(e,t.alternate,t,n),t=t.sibling}function ap(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&ao(e),n!=null&&Li(n))}function rp(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(ao(t),e!=null&&Li(e))}function ya(e,t,n,o,l){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256)||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(t=t.child;t!==null;)a=t.sibling,zb(e,t,n,o,a!==null?a.actualStartTime:l),t=a;else a&&yb(t)}function zb(e,t,n,o,l){var a=T(),s=Q(),u=P(),_=be(),m=Zi,E=(n&335544064)===n;E&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&G_(t);var D=t.flags;switch(t.tag){case 0:case 11:case 15:(t.mode&zt)!==ht&&0<t.actualStartTime&&(t.flags&1)!==0&&Io(t,t.actualStartTime,l,ko,n),ya(e,t,n,o,l),D&2048&&ib(t,rl|Ta);break;case 1:(t.mode&zt)!==ht&&0<t.actualStartTime&&((t.flags&128)!==0?Pr(t,t.actualStartTime,l,[]):(t.flags&1)!==0&&Io(t,t.actualStartTime,l,ko,n)),ya(e,t,n,o,l);break;case 3:var O=ma(),q=ko;ko=t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&(t.flags&256)===0,ya(e,t,n,o,l),ko=q,E&&ey&&(n=e.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),D&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),o=t.memoizedState.cache,o!==n&&(ao(o),n!=null&&Li(n))),e.passiveEffectDuration+=Ia(O);break;case 12:if(D&2048){D=ma(),ya(e,t,n,o,l),e=t.stateNode,e.passiveEffectDuration+=x(D);try{ie(t,X4,t,t.alternate,di,e.passiveEffectDuration)}catch(_e){dn(t,t.return,_e)}}else ya(e,t,n,o,l);break;case 31:D=ko,O=t.alternate!==null?t.alternate.memoizedState:null,E=t.memoizedState,O!==null&&E===null?(E=t.deletions,E!==null&&0<E.length&&E[0].tag===18?(ko=!1,O=O.hydrationErrors,O!==null&&Pr(t,t.actualStartTime,l,O)):ko=!0):ko=!1,ya(e,t,n,o,l),ko=D;break;case 13:D=ko,O=t.alternate!==null?t.alternate.memoizedState:null,E=t.memoizedState,O===null||O.dehydrated===null||E!==null&&E.dehydrated!==null?ko=!1:(E=t.deletions,E!==null&&0<E.length&&E[0].tag===18?(ko=!1,O=O.hydrationErrors,O!==null&&Pr(t,t.actualStartTime,l,O)):ko=!0),ya(e,t,n,o,l),ko=D;break;case 23:break;case 22:q=t.stateNode,O=t.alternate,t.memoizedState!==null?(E&&O!==null&&O.memoizedState===null&&G_(O),q._visibility&ii?ya(e,t,n,o,l):Od(e,t,n,o,l)):(E&&O!==null&&O.memoizedState!==null&&G_(t),q._visibility&ii?ya(e,t,n,o,l):(q._visibility|=ii,Wc(e,t,n,o,(t.subtreeFlags&10256)!==0||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child),l),(t.mode&zt)===ht||ko||(e=t.actualStartTime,0<=e&&.05<l-e&&Qr(t,e,l),0<=at&&0<=ct&&.05<ct-at&&Qr(t,at,ct)))),D&2048&&ap(O,t);break;case 24:ya(e,t,n,o,l),D&2048&&rp(t.alternate,t);break;case 30:E&&(D=t.alternate,D!==null&&(br(D.child,!0),br(t.child,!0))),ya(e,t,n,o,l);break;default:ya(e,t,n,o,l)}(t.mode&zt)!==ht&&((e=!ko&&t.alternate===null&&t.return!==null&&t.return.alternate!==null)&&(n=t.actualStartTime,0<=n&&.05<l-n&&vo(t,n,l,"Mount")),0<=at&&0<=ct&&((Fn||.05<Yn)&&Mo(t,at,ct,Yn,Un),e&&.05<ct-at&&vo(t,at,ct,"Mount"))),I(a),X(s),Un=u,Fn=_,Zi=m}function Wc(e,t,n,o,l,a){for(l=l&&((t.subtreeFlags&10256)!==0||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child)),t=t.child;t!==null;){var s=t.sibling;Lb(e,t,n,o,l,s!==null?s.actualStartTime:a),t=s}}function Lb(e,t,n,o,l,a){var s=T(),u=Q(),_=P(),m=be(),E=Zi;l&&(t.mode&zt)!==ht&&0<t.actualStartTime&&(t.flags&1)!==0&&Io(t,t.actualStartTime,a,ko,n);var D=t.flags;switch(t.tag){case 0:case 11:case 15:Wc(e,t,n,o,l,a),ib(t,rl);break;case 23:break;case 22:var O=t.stateNode;t.memoizedState!==null?O._visibility&ii?Wc(e,t,n,o,l,a):Od(e,t,n,o,a):(O._visibility|=ii,Wc(e,t,n,o,l,a)),l&&D&2048&&ap(t.alternate,t);break;case 24:Wc(e,t,n,o,l,a),l&&D&2048&&rp(t.alternate,t);break;default:Wc(e,t,n,o,l,a)}(t.mode&zt)!==ht&&0<=at&&0<=ct&&(Fn||.05<Yn)&&Mo(t,at,ct,Yn,Un),I(s),X(u),Un=_,Fn=m,Zi=E}function Od(e,t,n,o,l){if(t.subtreeFlags&10256||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(var a=t.child;a!==null;){t=a.sibling;var s=e,u=n,_=o,m=t!==null?t.actualStartTime:l,E=Zi;(a.mode&zt)!==ht&&0<a.actualStartTime&&(a.flags&1)!==0&&Io(a,a.actualStartTime,m,ko,u);var D=a.flags;switch(a.tag){case 22:Od(s,a,u,_,m),D&2048&&ap(a.alternate,a);break;case 24:Od(s,a,u,_,m),D&2048&&rp(a.alternate,a);break;default:Od(s,a,u,_,m)}Zi=E,a=t}}function Us(e,t,n){if(e.subtreeFlags&ec)for(e=e.child;e!==null;)Bb(e,t,n),e=e.sibling}function Bb(e,t,n){switch(e.tag){case 26:Us(e,t,n),e.flags&ec&&(e.memoizedState!==null?a6(n,Ka,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&t5(n,e)));break;case 5:Us(e,t,n),e.flags&ec&&(e=e.stateNode,(t&335544128)===t&&t5(n,e));break;case 3:case 4:var o=Ka;Ka=Id(e.stateNode.containerInfo),Us(e,t,n),Ka=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ec,ec=16777216,Us(e,t,n),ec=o):Us(e,t,n));break;case 30:if((e.flags&ec)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var l=e.stateNode;l.paired=null,na===null&&(na=new Map),na.set(o,l)}Us(e,t,n);break;default:Us(e,t,n)}}function $b(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Dd(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],l=T();No=o,Ib(o,e),(o.mode&zt)!==ht&&0<=at&&0<=ct&&.05<ct-at&&vo(o,at,ct,"Unmount"),I(l)}$b(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Hb(e),e=e.sibling}function Hb(e){var t=T(),n=Q(),o=P(),l=be();switch(e.tag){case 0:case 11:case 15:Dd(e),e.flags&2048&&X0(e,e.return,rl|Ta);break;case 3:var a=ma();Dd(e),e.stateNode.passiveEffectDuration+=Ia(a);break;case 12:a=ma(),Dd(e),e.stateNode.passiveEffectDuration+=x(a);break;case 22:a=e.stateNode,e.memoizedState!==null&&a._visibility&ii&&(e.return===null||e.return.tag!==13)?(a._visibility&=~ii,F_(e),(e.mode&zt)!==ht&&0<=at&&0<=ct&&.05<ct-at&&vo(e,at,ct,"Disconnect")):Dd(e);break;default:Dd(e)}(e.mode&zt)!==ht&&0<=at&&0<=ct&&(Fn||.05<Yn)&&Mo(e,at,ct,Yn,Un),I(t),X(n),Fn=l,Un=o}function F_(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n],l=T();No=o,Ib(o,e),(o.mode&zt)!==ht&&0<=at&&0<=ct&&.05<ct-at&&vo(o,at,ct,"Unmount"),I(l)}$b(e)}for(e=e.child;e!==null;)Ub(e),e=e.sibling}function Ub(e){var t=T(),n=Q(),o=P(),l=be();switch(e.tag){case 0:case 11:case 15:X0(e,e.return,rl),F_(e);break;case 22:var a=e.stateNode;a._visibility&ii&&(a._visibility&=~ii,F_(e));break;default:F_(e)}(e.mode&zt)!==ht&&0<=at&&0<=ct&&(Fn||.05<Yn)&&Mo(e,at,ct,Yn,Un),I(t),X(n),Fn=l,Un=o}function Ib(e,t){for(;No!==null;){var n=No,o=n,l=t,a=T(),s=Q(),u=P(),_=be();switch(o.tag){case 0:case 11:case 15:X0(o,l,rl);break;case 23:case 22:o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(l=o.memoizedState.cachePool.pool,l!=null&&ao(l));break;case 24:Li(o.memoizedState.cache)}if((o.mode&zt)!==ht&&0<=at&&0<=ct&&(Fn||.05<Yn)&&Mo(o,at,ct,Yn,Un),I(a),X(s),Fn=_,Un=u,o=n.child,o!==null)o.return=n,No=o;else e:for(n=e;No!==null;){if(o=No,a=o.sibling,s=o.return,kb(o),o===n){No=null;break e}if(a!==null){a.return=s,No=a;break e}No=s}}}function F4(){G3.forEach(function(e){return e()})}function jb(){var e=typeof IS_REACT_ACT_ENVIRONMENT<"u"?IS_REACT_ACT_ENVIRONMENT:void 0;return e||K.actQueue===null||console.error("The current testing environment is not configured to support act(...)"),e}function Wl(e){if((tn&Eo)!==zo&&Et!==0)return Et&-Et;var t=K.T;return t!==null?(t._updatedFibers||(t._updatedFibers=new Set),t._updatedFibers.add(e),Ws!==null&&jt()===xl&&(Ws=null),yp()):(e=jt(),e===xl&&(Ws=null),e)}function Yb(){if(Vl===0)if((Et&536870912)===0||Lt){var e=fh;fh<<=1,(fh&3932160)===0&&(fh=262144),Vl=e}else Vl=536870912;return e=Vo.current,e!==null&&(e.flags|=32),Vl}function Zc(e,t){if(t!=null){var n=e.stateNode,o=n.ref;o===null&&(o=n.ref=z2(rn(e.memoizedProps,n))),$u===null&&($u=[]),$u.push(t.bind(null,o))}}function Pn(e,t,n){if(Uu&&console.error("useInsertionEffect must not schedule updates."),uy&&(lm=!0),(e===Mn&&(gn===nc||gn===oc)||e.cancelPendingCommit!==null)&&(Kc(e,0),qi(e,Et,Vl,!1)),U(e,n),(tn&Eo)!==zo&&e===Mn){if(Sr)switch(t.tag){case 0:case 11:case 15:e=Ut&&Ee(Ut)||"Unknown",Tx.has(e)||(Tx.add(e),t=Ee(t)||"Unknown",console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",t,e,e));break;case 1:Ex||(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),Ex=!0)}}else kr&&Ae(e,t,n),cS(t),e===Mn&&((tn&Eo)===zo&&(us|=n),qn===ss&&qi(e,Et,Vl,!1)),vr(e)}function qb(e,t,n){if((tn&(Eo|oa))!==zo)throw Error("Should not already be working.");if(Et!==0&&Ut!==null){var o=Ut,l=eo();switch(vv){case Rf:case nc:var a=uf;Bn&&((o=o._debugTask)?o.run(console.timeStamp.bind(console,"Suspended",a,l,Ul,void 0,"primary-light")):console.timeStamp("Suspended",a,l,Ul,void 0,"primary-light"));break;case oc:a=uf,Bn&&((o=o._debugTask)?o.run(console.timeStamp.bind(console,"Action",a,l,Ul,void 0,"primary-light")):console.timeStamp("Action",a,l,Ul,void 0,"primary-light"));break;default:Bn&&(o=l-uf,3>o||console.timeStamp("Blocked",uf,l,Ul,void 0,5>o?"primary-light":10>o?"primary":100>o?"primary-dark":"error"))}}a=(n=!n&&(t&127)===0&&(t&e.expiredLanes)===0||je(e,t))?Z4(e,t):sp(e,t,!0);var s=n;do{if(a===pi){Lu&&!n&&qi(e,t,0,!1),t=gn,uf=to(),vv=t;break}else{if(o=eo(),l=e.current.alternate,s&&!W4(l)){bo(t),l=Oo,a=o,!Bn||a<=l||(Wn?Wn.run(console.timeStamp.bind(console,"Teared Render",l,a,Qt,qt,"error")):console.timeStamp("Teared Render",l,a,Qt,qt,"error")),Is(t,o),a=sp(e,t,!1),s=!1;continue}if(a===tc){if(s=t,e.errorRecoveryDisabledLanes&s)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){bo(t),Es(Oo,o,t,Wn),Is(t,o),t=u;e:{o=e,a=s,s=Of;var _=o.current.memoizedState.isDehydrated;if(_&&(Kc(o,u).flags|=256),u=sp(o,u,!1),u!==tc&&u!==Mf){if(oy&&!_){o.errorRecoveryDisabledLanes|=a,us|=a,a=ss;break e}o=Tl,Tl=s,o!==null&&(Tl===null?Tl=o:Tl.push.apply(Tl,o))}a=u}if(s=!1,a!==tc)continue;o=eo()}}if(a===Tf){bo(t),Es(Oo,o,t,Wn),Is(t,o),Kc(e,0),qi(e,t,0,!0);break}e:{switch(n=e,a){case pi:case Tf:throw Error("Root did not complete. This is a bug in React.");case ss:if((t&4194048)!==t&&(t&62914560)!==t)break;case Mf:bo(t),Fr(Oo,o,t,Wn),Is(t,o),l=t,(l&127)!==0?Rh=o:(l&4194048)!==0&&(Ah=o),qi(n,t,Vl,!gi);break e;case tc:Tl=null;break;case Gh:case px:break;default:throw Error("Unknown root exit status.")}if(K.actQueue!==null)cp(n,l,t,Tl,Df,Wh,Vl,us,lc,gi,a,null,null,Oo,o);else{if((t&62914560)===t&&(s=Zh+bx-eo(),10<s)){if(qi(n,t,Vl,!gi),me(n,0,!0)!==0)break e;Xl=t,n.timeoutHandle=xy(Vb.bind(null,n,l,Tl,Df,Wh,t,Vl,us,lc,gi,a,"Throttled",Oo,o),s);break e}Vb(n,l,Tl,Df,Wh,t,Vl,us,lc,gi,a,null,Oo,o)}}}break}while(!0);vr(e)}function Vb(e,t,n,o,l,a,s,u,_,m,E,D,O,q){e.timeoutHandle=uc;var _e=t.subtreeFlags,$e=(a&335544064)===a,Je=null;if(($e||_e&8192||(_e&16785408)===16785408)&&(Je={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:To},na=null,Bb(t,a,Je),$e&&(_e=Je,$e=e.containerInfo,$e=($e.nodeType===9?$e:$e.ownerDocument).__reactViewTransition,$e!=null&&(_e.count++,_e.waitingForViewTransition=!0,_e=qd.bind(_e),$e.finished.then(_e,_e))),_e=(a&62914560)===a?Zh-eo():(a&4194048)===a?yx-eo():0,_e=r6(Je,_e),_e!==null)){Xl=a,e.cancelPendingCommit=_e(cp.bind(null,e,t,a,n,o,l,s,u,_,m,E,Je,Je.waitingForViewTransition?"Waiting for the previous Animation":0<Je.count?0<Je.imgCount?"Suspended on CSS and Images":"Suspended on CSS":Je.imgCount===1?"Suspended on an Image":0<Je.imgCount?"Suspended on Images":null,O,q)),qi(e,a,s,!m);return}cp(e,t,a,n,o,l,s,u,_,m,E,Je,D,O,q)}function W4(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var l=n[o],a=l.getSnapshot;l=l.value;try{if(!Cl(a(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qi(e,t,n,o){t=rt(e,t),t&=~Fh,t&=~us,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var l=t;0<l;){var a=31-vl(l),s=1<<a;o[a]=-1,l&=~s}n!==0&&te(e,n,t)}function Jc(){return(tn&(Eo|oa))===zo?(Ld(0,!1),!1):!0}function ip(){if(Ut!==null){if(gn===ql)var e=Ut.return;else e=Ut,Kr(),s0(e),Tu=null,bf=0,e=Ut;for(;e!==null;)ab(e.alternate,e),e=e.return;Ut=null}}function Is(e,t){(e&127)!==0&&(ts=t),(e&4194048)!==0&&(Wa=t),(e&62914560)!==0&&(Ng=t),(e&2080374784)!==0&&(zg=t)}function Kc(e,t){Bn&&(console.timeStamp("Blocking Track",.003,.003,"Blocking",qt,"primary-light"),console.timeStamp("Transition Track",.003,.003,"Transition",qt,"primary-light"),console.timeStamp("Suspense Track",.003,.003,"Suspense",qt,"primary-light"),console.timeStamp("Idle Track",.003,.003,"Idle",qt,"primary-light"));var n=Oo;if(Oo=to(),Et!==0&&0<n){if(bo(Et),qn===Gh||qn===ss)Fr(n,Oo,t,Wn);else{var o=Oo,l=Wn;if(Bn&&!(o<=n)){var a=(t&738197653)===t?"tertiary-dark":"primary-dark",s=(t&536870912)===t?"Prewarm":(t&201326741)===t?"Interrupted Hydration":"Interrupted Render";l?l.run(console.timeStamp.bind(console,s,n,o,Qt,qt,a)):console.timeStamp(s,n,o,Qt,qt,a)}}Is(Et,Oo)}if(n=Wn,Wn=null,(t&127)!==0){Wn=rf,l=0<=Rr&&Rr<ts?ts:Rr,o=0<=Xs&&Xs<ts?ts:Xs,a=0<=o?o:0<=l?l:Oo,0<=Rh?(bo(2),da(Rh,a,t,n)):(Qs&127)!==0&&(bo(2),hl(ts,a,Il)),n=l;var u=o,_=sf,m=0<Cu,E=ns===af,D=ns===Mh;if(l=Oo,o=rf,a=Ag,s=Og,Bn){if(Qt="Blocking",0<n?n>l&&(n=l):n=l,0<u?u>n&&(u=n):u=n,_!==null&&n>u){var O=m?"secondary-light":"warning";o?o.run(console.timeStamp.bind(console,m?"Consecutive":"Event: "+_,u,n,Qt,qt,O)):console.timeStamp(m?"Consecutive":"Event: "+_,u,n,Qt,qt,O)}l>n&&(u=E?"error":(t&738197653)===t?"tertiary-light":"primary-light",E=D?"Promise Resolved":E?"Cascading Update":5<l-n?"Update Blocked":"Update",D=[],s!=null&&D.push(["Component name",s]),a!=null&&D.push(["Method name",a]),n={start:n,end:l,detail:{devtools:{properties:D,track:Qt,trackGroup:qt,color:u}}},o?o.run(performance.measure.bind(performance,E,n)):performance.measure(E,n),performance.clearMeasures(E))}Rr=-1.1,ns=0,Og=Ag=null,Rh=-1.1,Cu=Xs,Xs=-1.1,ts=to()}return(t&4194048)!==0&&(Wn=cf,l=0<=_i&&_i<Wa?Wa:_i,n=0<=Ea&&Ea<Wa?Wa:Ea,o=0<=os&&os<Wa?Wa:os,a=0<=o?o:0<=n?n:Oo,0<=Ah?(bo(256),da(Ah,a,t,Wn)):(Qs&4194048)!==0&&(bo(256),hl(Wa,a,Il)),D=o,u=Gs,_=0<ls,m=Dg===Mh,a=Oo,o=cf,s=yv,E=bv,Bn&&(Qt="Transition",0<n?n>a&&(n=a):n=a,0<l?l>n&&(l=n):l=n,0<D?D>l&&(D=l):D=l,l>D&&u!==null&&(O=_?"secondary-light":"warning",o?o.run(console.timeStamp.bind(console,_?"Consecutive":"Event: "+u,D,l,Qt,qt,O)):console.timeStamp(_?"Consecutive":"Event: "+u,D,l,Qt,qt,O)),n>l&&(o?o.run(console.timeStamp.bind(console,"Action",l,n,Qt,qt,"primary-dark")):console.timeStamp("Action",l,n,Qt,qt,"primary-dark")),a>n&&(l=m?"Promise Resolved":5<a-n?"Update Blocked":"Update",D=[],E!=null&&D.push(["Component name",E]),s!=null&&D.push(["Method name",s]),n={start:n,end:a,detail:{devtools:{properties:D,track:Qt,trackGroup:qt,color:"primary-light"}}},o?o.run(performance.measure.bind(performance,l,n)):performance.measure(l,n),performance.clearMeasures(l))),Ea=_i=-1.1,Dg=0,Ah=-1.1,ls=os,os=-1.1,Wa=to()),(t&62914560)!==0&&(Qs&62914560)!==0&&(bo(4194304),hl(Ng,Oo,Il)),(t&2080374784)!==0&&(Qs&2080374784)!==0&&(bo(268435456),hl(zg,Oo,Il)),n=e.timeoutHandle,n!==uc&&(e.timeoutHandle=uc,a8(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Xl=0,ip(),Mn=e,Ut=n=Nl(e.current,null),Et=t,gn=ql,la=null,gi=!1,Lu=je(e,t),oy=!1,qn=pi,lc=Vl=Fh=us=cs=0,Tl=Of=null,Wh=!1,Lr=rt(e,t),dr(),e=dv(),1e3<e-uv&&(K.recentlyCreatedOwnerStacks=0,uv=e),Za.discardPendingWarnings(),n}function Xb(e,t){gt=null,K.H=Ih,K.getCurrentStack=null,Sr=!1,Kl=null,t===Eu||t===zh?(t=Bl(),gn=Rf):t===Hg?(t=Bl(),gn=gx):gn=t===Fg?ny:t!==null&&typeof t=="object"&&typeof t.then=="function"?Af:Qh,la=t;var n=Ut;n===null?(qn=Tf,$_(e,nl(t,e.current))):n.mode&zt&&lt(n)}function Gb(){var e=Vo.current;return e===null?!0:(Et&4194048)===Et?al===null:(Et&62914560)===Et||(Et&536870912)!==0?e===al:!1}function Qb(){var e=K.H;return K.H=Ih,e===null?Ih:e}function Pb(){var e=K.A;return K.A=X3,e}function W_(e){Wn===null&&(Wn=e._debugTask==null?null:e._debugTask)}function Z_(){qn=ss,gi||(Et&4194048)!==Et&&Vo.current!==null||(Lu=!0),(cs&134217727)===0&&(us&134217727)===0||Mn===null||qi(Mn,Et,Vl,!1)}function sp(e,t,n){var o=tn;tn|=Eo;var l=Qb(),a=Pb();if(Mn!==e||Et!==t){if(kr){var s=e.memoizedUpdaters;0<s.size&&(zd(e,Et),s.clear()),Ge(e,t)}Df=null,Kc(e,t)}t=!1,s=qn;e:do try{if(gn!==ql&&Ut!==null){var u=Ut,_=la;switch(gn){case ny:ip(),s=Mf;break e;case Rf:case nc:case oc:case Af:Vo.current===null&&(t=!0);var m=gn;if(gn=ql,la=null,eu(e,u,_,m),n&&Lu){s=pi;break e}break;default:m=gn,gn=ql,la=null,eu(e,u,_,m)}}Fb(),s=qn;break}catch(E){Xb(e,E)}while(!0);return t&&e.shellSuspendCounter++,Kr(),tn=o,K.H=l,K.A=a,Ut===null&&(Mn=null,Et=0,dr()),s}function Fb(){for(;Ut!==null;)Wb(Ut)}function Z4(e,t){var n=tn;tn|=Eo;var o=Qb(),l=Pb();if(Mn!==e||Et!==t){if(kr){var a=e.memoizedUpdaters;0<a.size&&(zd(e,Et),a.clear()),Ge(e,t)}Df=null,Jh=eo()+vx,Kc(e,t)}else Lu=je(e,t);e:do try{if(gn!==ql&&Ut!==null)t:switch(t=Ut,a=la,gn){case Qh:gn=ql,la=null,eu(e,t,a,Qh);break;case nc:case oc:if(en(a)){gn=ql,la=null,Zb(t);break}t=function(){gn!==nc&&gn!==oc||Mn!==e||(gn=Ph),vr(e)},a.then(t,t);break e;case Rf:gn=Ph;break e;case gx:gn=ty;break e;case Ph:en(a)?(gn=ql,la=null,Zb(t)):(gn=ql,la=null,eu(e,t,a,Ph));break;case ty:var s=null;switch(Ut.tag){case 26:s=Ut.memoizedState;case 5:case 27:var u=Ut;if(s?K2(s):u.stateNode.complete){gn=ql,la=null;var _=u.sibling;if(_!==null)Ut=_;else{var m=u.return;m!==null?(Ut=m,J_(m)):Ut=null}break t}break;default:console.error("Unexpected type of fiber triggered a suspensey commit. This is a bug in React.")}gn=ql,la=null,eu(e,t,a,ty);break;case Af:gn=ql,la=null,eu(e,t,a,Af);break;case ny:ip(),qn=Mf;break e;default:throw Error("Unexpected SuspendedReason. This is a bug in React.")}K.actQueue!==null?Fb():J4();break}catch(E){Xb(e,E)}while(!0);return Kr(),K.H=o,K.A=l,tn=n,Ut!==null?pi:(Mn=null,Et=0,dr(),qn)}function J4(){for(;Ut!==null&&!S6();)Wb(Ut)}function Wb(e){var t=e.alternate;(e.mode&zt)!==ht?(Ze(e),t=ie(e,Y0,t,e,Lr),lt(e)):t=ie(e,Y0,t,e,Lr),e.memoizedProps=e.pendingProps,t===null?J_(e):Ut=t}function Zb(e){var t=ie(e,K4,e);e.memoizedProps=e.pendingProps,t===null?J_(e):Ut=t}function K4(e){var t=e.alternate,n=(e.mode&zt)!==ht;switch(n&&Ze(e),e.tag){case 15:case 0:t=Z1(t,e,e.pendingProps,e.type,void 0,Et);break;case 11:t=Z1(t,e,e.pendingProps,e.type.render,e.ref,Et);break;case 5:s0(e);var o=e;o===Ao&&(Lt?(Hc(o),o.tag===5&&o.stateNode!=null&&(On=o.stateNode)):(Hc(o),Lt=!0));default:ab(t,e),e=Ut=gd(e,Lr),t=Y0(t,e,Lr)}return n&&lt(e),t}function eu(e,t,n,o){Kr(),s0(t),Tu=null,bf=0;var l=t.return;try{if(B4(e,l,t,n,Et)){qn=Tf,$_(e,nl(n,e.current)),Ut=null;return}}catch(a){if(l!==null)throw Ut=l,a;qn=Tf,$_(e,nl(n,e.current)),Ut=null;return}t.flags&32768?(Lt||o===Qh?e=!0:Lu||(Et&536870912)!==0?e=!1:(gi=e=!0,(o===nc||o===oc||o===Rf||o===Af)&&(o=Vo.current,o!==null&&o.tag===13&&(o.flags|=16384))),Jb(t,e)):J_(t)}function J_(e){var t=e;do{if((t.flags&32768)!==0){Jb(t,gi);return}var n=t.alternate;if(e=t.return,Ze(t),n=ie(t,I4,n,t,Lr),(t.mode&zt)!==ht&&nt(t),n!==null){Ut=n;return}if(t=t.sibling,t!==null){Ut=t;return}Ut=t=e}while(t!==null);qn===pi&&(qn=px)}function Jb(e,t){do{var n=j4(e.alternate,e);if(n!==null){n.flags&=32767,Ut=n;return}if((e.mode&zt)!==ht){nt(e),n=e.actualDuration;for(var o=e.child;o!==null;)n+=o.actualDuration,o=o.sibling;e.actualDuration=n}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ut=e;return}Ut=e=n}while(e!==null);qn=Mf,Ut=null}function cp(e,t,n,o,l,a,s,u,_,m,E,D,O,q,_e){e.cancelPendingCommit=null;do Nd();while(Vn!==Br);if(Za.flushLegacyContextWarning(),Za.flushPendingUnsafeLifecycleWarnings(),(tn&(Eo|oa))!==zo)throw Error("Should not already be working.");if(bo(n),E===tc)Es(q,_e,n,Wn);else if(o!==null){if(m=t!==null&&t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&(t.flags&256)!==0,a=Wn,Bn&&!(_e<=q)){E=[];for(var $e=0;$e<o.length;$e++){var Je=o[$e].value;E.push(["Recoverable Error",typeof Je=="object"&&Je!==null&&typeof Je.message=="string"?String(Je.message):String(Je)])}q={start:q,end:_e,detail:{devtools:{color:"primary-dark",track:Qt,trackGroup:qt,tooltipText:m?"Hydration Failed":"Recovered after Error",properties:E}}},a?a.run(performance.measure.bind(performance,"Recovered",q)):performance.measure("Recovered",q),performance.clearMeasures("Recovered")}}else a=Wn,!Bn||_e<=q||(m=(n&738197653)===n?"tertiary-dark":"primary-dark",E=(n&536870912)===n?"Prepared":(n&201326741)===n?"Hydrated":"Render",a?a.run(console.timeStamp.bind(console,E,q,_e,Qt,qt,m)):console.timeStamp(E,q,_e,Qt,qt,m));if(t!==null){if(n===0&&console.error("finishedLanes should not be empty during a commit. This is a bug in React."),t===e.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");e===Mn&&(Ut=Mn=null,Et=0),ac=t,er=e,Xl=n,sy=l,Cx=o,tm=_e,nm=O,aa=Kh,cy=null,eS(e,t,n,s,u,_,D,O,_e)}}function eS(e,t,n,o,l,a,s,u,_){var m=t.lanes|t.childLanes;if(iy=m,m|=kg,ae(e,n,m,o,l,a),$u=null,(n&335544064)===n?(Hu=b_(e),o=10262):(Hu=null,o=10256),t.actualDuration!==0||(t.subtreeFlags&o)!==0||(t.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,sS(su,function(){return Uf=window.event,aa===Kh&&(aa=ly),_p(),null})):(e.callbackNode=null,e.callbackPriority=0),fi=null,di=to(),u!==null&&Wr(_,di,u,Wn),Yh=!1,u=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||u){u=K.T,K.T=null,_=fn.p,fn.p=xl,o=tn,tn|=oa;try{Q4(e,t,n)}finally{tn=o,fn.p=_,K.T=u}}Vn=wx,Yh?(Qs|=n,Il=null,Bu=$S(s,e.containerInfo,Hu,up,dp,lS,fp,_p,tS,nS,oS.bind(null,n))):(up(),dp(),fp())}function tS(e){if(Vn!==Br){var t=er.onRecoverableError;t(e,Kb(null))}}function nS(e){Fa=to(),Ri(nm===null?tm:di,Fa,fi,aa===Nf,Wn),nm=cy=e}function oS(e){if((Qs&e)!==0){var t=Il;Qs&=~e,Il=null,(e&4194048)!==0&&(Et&4194048)===0&&(Xl&4194048)===0&&(bo(256),hl(Wa,eo(),t)),(e&62914560)!==0&&(Et&62914560)===0&&(Xl&62914560)===0&&(bo(4194304),hl(Ng,eo(),t)),(e&2080374784)!==0&&(Et&2080374784)===0&&(Xl&2080374784)===0&&(bo(268435456),hl(zg,eo(),t))}}function lS(){Vn===ay&&(Vn=Br,Ob(ac,er),Vn=ry)}function up(){if(Vn===wx){Vn=Br;var e=er,t=ac,n=Xl,o=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var l=fn.p;fn.p=xl;var a=tn;tn|=oa;try{Nu=n,zu=e,kf=Xh=!1,C(),Rb(t,e,n),zu=Nu=null,n=by;var s=ua(e.containerInfo),u=n.focusedElem,_=n.selectionRange;if(s!==u&&u&&u.ownerDocument&&pd(u.ownerDocument.documentElement,u)){if(_!==null&&Qn(u)){var m=_.start,E=_.end;if(E===void 0&&(E=m),"selectionStart"in u)u.selectionStart=m,u.selectionEnd=Math.min(E,u.value.length);else{var D=u.ownerDocument||document,O=D&&D.defaultView||window;if(O.getSelection){var q=O.getSelection(),_e=u.textContent.length,$e=Math.min(_.start,_e),Je=_.end===void 0?$e:Math.min(_.end,_e);!q.extend&&$e>Je&&(s=Je,Je=$e,$e=s);var At=h_(u,$e),M=h_(u,Je);if(At&&M&&(q.rangeCount!==1||q.anchorNode!==At.node||q.anchorOffset!==At.offset||q.focusNode!==M.node||q.focusOffset!==M.offset)){var A=D.createRange();A.setStart(At.node,At.offset),q.removeAllRanges(),$e>Je?(q.addRange(A),q.extend(M.node,M.offset)):(A.setEnd(M.node,M.offset),q.addRange(A))}}}}for(D=[],q=u;q=q.parentNode;)q.nodeType===1&&D.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<D.length;u++){var N=D[u];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}Gu=!!yy,by=yy=null}finally{tn=a,fn.p=l,K.T=o}}e.current=t,Vn=Sx}}function dp(){if(Vn===Sx){Vn=Br;var e=cy;if(e!==null){di=to();var t=Fa,n=di;!Bn||n<=t||(Il?Il.run(console.timeStamp.bind(console,e,t,n,Qt,qt,"secondary-light")):console.timeStamp(e,t,n,Qt,qt,"secondary-light"))}e=er,t=ac,n=Xl;var o=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var l=fn.p;fn.p=xl;var a=tn;tn|=oa;try{Nu=n,zu=e,C(),Sb(e,t.alternate,t),zu=Nu=null}finally{tn=a,fn.p=l,K.T=o}}e=tm,t=nm,Fa=to(),Ri(t===null?e:di,Fa,fi,aa===Nf,Wn),Vn=ay}}function fp(){if(Vn===ry||Vn===ay){if(Vn===ry){var e=Fa;Fa=to();var t=Fa,n=aa===Nf;!Bn||t<=e||(Il?Il.run(console.timeStamp.bind(console,n?"Interrupted View Transition":"Starting Animation",e,t,Qt,qt,n?"error":"secondary-light")):console.timeStamp(n?"Interrupted View Transition":"Starting Animation",e,t,Qt,qt,n?" error":"secondary-light")),aa!==Nf&&(aa=xx)}Vn=Br,e=Bu,Bu=null,C6(),t=er;var o=ac;n=Xl;var l=Cx,a=(n&335544064)===n?10262:10256;(a=o.actualDuration!==0||(o.subtreeFlags&a)!==0||(o.flags&a)!==0)?Vn=em:(Vn=Br,ac=er=null,e2(t,t.pendingLanes),rc=0,Lf=null);var s=t.pendingLanes;if(s===0&&(ds=null),a||l2(t),s=Ht(n),o=o.stateNode,ol&&typeof ol.onCommitFiberRoot=="function")try{var u=(o.current.flags&128)===128;switch(s){case xl:var _=lg;break;case Qa:_=ag;break;case Er:_=su;break;case hh:_=rg;break;default:_=su}ol.onCommitFiberRoot(cu,o,_,u)}catch(O){Cr||(Cr=!0,console.error("React instrumentation encountered an error: %o",O))}if(kr&&t.memoizedUpdaters.clear(),F4(),l!==null){u=K.T,_=fn.p,fn.p=xl,K.T=null;try{var m=t.onRecoverableError;for(o=0;o<l.length;o++){var E=l[o],D=Kb(E.stack);ie(E.source,m,E.value,D)}}finally{K.T=u,fn.p=_}}if(m=$u,E=Hu,Hu=null,m!==null&&($u=null,E===null&&(E=[]),e!==null))for(D=0;D<m.length;D++)l=(0,m[D])(E),l!==void 0&&e.finished.finally(l);(Xl&3)!==0&&Nd(),vr(t),s=t.pendingLanes,(n&261930)!==0&&(s&42)!==0?(Dh=!0,t===om?zf++:(zf=0,om=t)):(zf=0,om=null),a||Is(n,Fa),Ld(0,!1)}}function Kb(e){return e={componentStack:e},Object.defineProperty(e,"digest",{get:function(){console.error('You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.')}}),e}function e2(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Li(t)))}function Nd(){return Bu!==null&&(Bu.skipTransition(),kx||(kx=!0,console.warn("A flushSync update cancelled a View Transition because it was called while the View Transition was still preparing. To preserve the synchronous semantics, React had to skip the View Transition. If you can, try to avoid flushSync() in a scenario that's likely to interfere.")),Bu=null,aa=Nf),up(),dp(),fp(),_p()}function _p(){if(Vn!==em)return!1;var e=er,t=iy;iy=0;var n=Ht(Xl),o=Er===0||Er>n?Er:n;n=K.T;var l=fn.p;try{fn.p=o,K.T=null;var a=sy;sy=null,o=er;var s=Xl;if(Vn=Br,ac=er=null,Xl=0,(tn&(Eo|oa))!==zo)throw Error("Cannot flush passive effects while already rendering.");bo(s),uy=!0,lm=!1;var u=0;if(fi=null,u=eo(),aa===xx)hl(Fa,u,Il);else{var _=Fa,m=u,E=aa===ly;!Bn||m<=_||(Wn?Wn.run(console.timeStamp.bind(console,E?"Waiting for Paint":"Waiting",_,m,Qt,qt,"secondary-light")):console.timeStamp(E?"Waiting for Paint":"Waiting",_,m,Qt,qt,"secondary-light"))}_=tn,tn|=oa;var D=o.current;C(),Hb(D);var O=o.current;D=tm,C(),zb(o,O,s,a,D),l2(o),tn=_;var q=eo();if(O=u,D=Wn,fi!==null?_l(O,q,fi,!0,D):!Bn||q<=O||(D?D.run(console.timeStamp.bind(console,"Remaining Effects",O,q,Qt,qt,"secondary-dark")):console.timeStamp("Remaining Effects",O,q,Qt,qt,"secondary-dark")),Is(s,q),Ld(0,!1),lm?o===Lf?rc++:(rc=0,Lf=o):rc=0,lm=uy=!1,ol&&typeof ol.onPostCommitFiberRoot=="function")try{ol.onPostCommitFiberRoot(cu,o)}catch($e){Cr||(Cr=!0,console.error("React instrumentation encountered an error: %o",$e))}var _e=o.current.stateNode;return _e.effectDuration=0,_e.passiveEffectDuration=0,!0}finally{fn.p=l,K.T=n,e2(e,t)}}function t2(e,t,n){t=nl(n,t),Ct(t),t=O0(e.stateNode,t,2),e=Hi(e,t,2),e!==null&&(U(e,2),vr(e))}function dn(e,t,n){if(Uu=!1,e.tag===3)t2(e,e,n);else{for(;t!==null;){if(t.tag===3){t2(t,e,n);return}if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ds===null||!ds.has(o))){e=nl(n,e),Ct(e),n=D0(2),o=Hi(t,n,2),o!==null&&(N0(n,o,t,e),U(o,2),vr(o));return}}t=t.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}}function hp(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Q3;var l=new Set;o.set(t,l)}else l=o.get(t),l===void 0&&(l=new Set,o.set(t,l));l.has(n)||(oy=!0,l.add(n),o=aS.bind(null,e,t,n),kr&&zd(e,n),t.then(o,o))}function aS(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,(n&127)!==0?0>Rr&&(ts=Rr=to(),rf=Th("Promise Resolved"),ns=Mh):(n&4194048)!==0&&0>Ea&&(Wa=Ea=to(),cf=Th("Promise Resolved"),Dg=Mh),jb()&&K.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),Mn===e&&(Et&n)===n&&((qn===ss||qn===Gh&&(Et&62914560)===Et&&eo()-Zh<bx)&&(tn&Eo)===zo?Kc(e,0):Fh|=n,lc===Et&&(lc=0)),vr(e)}function n2(e,t){t===0&&(t=$t()),e=xo(e,t),e!==null&&(U(e,t),vr(e))}function rS(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),n2(e,n)}function iS(e,t){var n=0;switch(e.tag){case 31:case 13:var o=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}o!==null&&o.delete(t),n2(e,n)}function mp(e,t,n){if((t.subtreeFlags&134225920)!==0)for(t=t.child;t!==null;){var o=e,l=t,a=l.type===ih;a=n||a,l.tag!==22?l.flags&134217728?a&&ie(l,o2,o,l):mp(o,l,a):l.memoizedState===null&&(a&&l.flags&134225920?ie(l,o2,o,l):l.subtreeFlags&134217728&&ie(l,mp,o,l,a)),t=t.sibling}}function o2(e,t){oe(!0);try{Db(t,Cf),Ub(t),Nb(e,t.alternate,t,Cf),Lb(e,t,0,null,!1,0)}finally{oe(!1)}}function l2(e){var t=!0;e.current.mode&(ll|Pa)||(t=!1),mp(e,e.current,t)}function a2(e){if((tn&Eo)===zo){var t=e.tag;if(t===3||t===1||t===0||t===11||t===14||t===15){if(t=Ee(e)||"ReactComponent",am!==null){if(am.has(t))return;am.add(t)}else am=new Set([t]);ie(e,function(){console.error("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.")})}}}function zd(e,t){kr&&e.memoizedUpdaters.forEach(function(n){Ae(e,n,t)})}function sS(e,t){var n=K.actQueue;return n!==null?(n.push(t),W3):og(e,t)}function cS(e){jb()&&K.actQueue===null&&ie(e,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,Ee(e))})}function vr(e){e!==ju&&e.next===null&&(ju===null?Iu=ju=e:ju=ju.next=e),rm=!0,K.actQueue!==null?fy||(fy=!0,c2()):dy||(dy=!0,c2())}function Ld(e,t){if(!_y&&rm){_y=!0;do for(var n=!1,o=Iu;o!==null;){if(!t)if(e!==0){var l=o.pendingLanes;if(l===0)var a=0;else{var s=o.suspendedLanes,u=o.pingedLanes;a=(1<<31-vl(42|e)+1)-1,a&=l&~(s&~u),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,s2(o,a))}else a=Et,a=me(o,o===Mn?a:0,o.cancelPendingCommit!==null||o.timeoutHandle!==uc),(a&3)===0||je(o,a)||(n=!0,s2(o,a));o=o.next}while(n);_y=!1}}function uS(){Uf=window.event,pp()}function pp(){rm=fy=dy=!1;var e=0;fs!==0&&yS()&&(e=fs);for(var t=eo(),n=null,o=Iu;o!==null;){var l=o.next,a=r2(o,t);a===0?(o.next=null,n===null?Iu=l:n.next=l,l===null&&(ju=n)):(n=o,(e!==0||(a&3)!==0)&&(rm=!0)),o=l}Vn!==Br&&Vn!==em||Ld(e,!1),fs!==0&&(fs=0)}function r2(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,l=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var s=31-vl(a),u=1<<s,_=l[s];_===-1?((u&n)===0||(u&o)!==0)&&(l[s]=xt(u,t)):_<=t&&(e.expiredLanes|=u),a&=~u}if(t=Mn,n=Et,n=me(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==uc),o=e.callbackNode,n===0||e===t&&(gn===nc||gn===oc)||e.cancelPendingCommit!==null)return o!==null&&gp(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||je(e,n)){if(t=n&-n,t!==e.callbackPriority||K.actQueue!==null&&o!==hy)gp(o);else return t;switch(Ht(n)){case xl:case Qa:n=ag;break;case Er:n=su;break;case hh:n=rg;break;default:n=su}return o=i2.bind(null,e),K.actQueue!==null?(K.actQueue.push(o),n=hy):n=og(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&gp(o),e.callbackPriority=2,e.callbackNode=null,2}function i2(e,t){if(Dh=Oh=!1,Uf=window.event,Vn!==Br&&Vn!==em)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(aa===Kh&&(aa=ly),Nd()&&e.callbackNode!==n)return null;var o=Et;return o=me(e,e===Mn?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==uc),o===0?null:(qb(e,o,t),r2(e,eo()),e.callbackNode!=null&&e.callbackNode===n?i2.bind(null,e):null)}function s2(e,t){if(Nd())return null;Oh=Dh,Dh=!1,qb(e,t,!0)}function gp(e){e!==hy&&e!==null&&w6(e)}function c2(){K.actQueue!==null&&K.actQueue.push(function(){return pp(),null}),r8(function(){(tn&(Eo|oa))!==zo?og(lg,uS):pp()})}function yp(){if(fs===0){var e=as;e===0&&(e=dh,dh<<=1,(dh&261888)===0&&(dh=256)),fs=e}return fs}function u2(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:(le(e,"action"),Vr(e))}function dS(e,t,n,o,l){if(t==="submit"&&n&&n.stateNode===l){var a=u2((l[wl]||null).action),s=o.submitter;s&&(t=(t=s[wl]||null)?u2(t.formAction):s.getAttribute("formAction"),t!==null&&(a=t,s=null));var u=new vh("action","action",null,o,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(fs!==0){var _=new FormData(l,s),m={pending:!0,data:_,method:l.method,action:a};Object.freeze(m),C0(n,m,null,_)}}else typeof a=="function"&&(u.preventDefault(),_=new FormData(l,s),m={pending:!0,data:_,method:l.method,action:a},Object.freeze(m),C0(n,m,a,_))},currentTarget:l}]})}}function K_(e,t,n){e.currentTarget=n;try{t(e)}catch(o){xg(o)}e.currentTarget=null}function d2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n];e:{var l=void 0,a=o.event;if(o=o.listeners,t)for(var s=o.length-1;0<=s;s--){var u=o[s],_=u.instance,m=u.currentTarget;if(u=u.listener,_!==l&&a.isPropagationStopped())break e;_!==null?ie(_,K_,a,u,m):K_(a,u,m),l=_}else for(s=0;s<o.length;s++){if(u=o[s],_=u.instance,m=u.currentTarget,u=u.listener,_!==l&&a.isPropagationStopped())break e;_!==null?ie(_,K_,a,u,m):K_(a,u,m),l=_}}}}function Wt(e,t){my.has(e)||console.error('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',e);var n=t[C5];n===void 0&&(n=t[C5]=new Set);var o=e+"__bubble";n.has(o)||(f2(t,e,2,!1),n.add(o))}function bp(e,t,n){my.has(e)&&!t&&console.error('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',e);var o=0;t&&(o|=4),f2(n,e,o,t)}function vp(e){if(!e[im]){e[im]=!0,E5.forEach(function(n){n!=="selectionchange"&&(my.has(n)||bp(n,!1,e),bp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[im]||(t[im]=!0,bp("selectionchange",!1,t))}}function f2(e,t,n,o){switch(s5(t)){case xl:var l=d6;break;case Qa:l=f6;break;default:l=Ip}n=l.bind(null,t,n,e),l=void 0,!dg||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),o?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function xp(e,t,n,o,l){var a=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var u=o.stateNode.containerInfo;if(u===l)break;if(s===4)for(s=o.return;s!==null;){var _=s.tag;if((_===3||_===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;u!==null;){if(s=Zn(u),s===null)return;if(_=s.tag,_===5||_===6||_===26||_===27){o=a=s;continue e}u=u.parentNode}}o=o.return}Ol(function(){var m=a,E=el(n),D=[];e:{var O=cv.get(e);if(O!==void 0){var q=vh,_e=e;switch(e){case"keypress":if(Cs(n)===0)break e;case"keydown":case"keyup":q=c3;break;case"focusin":_e="focus",q=mg;break;case"focusout":_e="blur",q=mg;break;case"beforeblur":case"afterblur":q=mg;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=F5;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Z6;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=h3;break;case av:case rv:case iv:q=e3;break;case sv:q=p3;break;case"scroll":case"scrollend":q=F6;break;case"wheel":q=y3;break;case"copy":case"cut":case"paste":q=n3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Z5;break;case"submit":q=f3;break;case"toggle":case"beforetoggle":q=v3}var $e=(t&4)!==0,Je=!$e&&(e==="scroll"||e==="scrollend"),At=$e?O!==null?O+"Capture":null:O;$e=[];for(var M=m,A;M!==null;){var N=M;if(A=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||A===null||At===null||(N=Ss(M,At),N!=null&&$e.push(Bd(M,N,A))),Je)break;M=M.return}0<$e.length&&(O=new q(O,_e,null,n,E),D.push({event:O,listeners:$e}))}}if((t&7)===0){e:{if(q=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",q&&n!==Pd&&(_e=n.relatedTarget||n.fromElement)&&(Zn(_e)||_e[Pi]))break e;(O||q)&&(_e=E.window===E?E:(q=E.ownerDocument)?q.defaultView||q.parentWindow:window,O?(q=n.relatedTarget||n.toElement,O=m,q=q?Zn(q):null,q!==null&&(Je=ne(q),$e=q.tag,q!==Je||$e!==5&&$e!==27&&$e!==6)&&(q=null)):(O=null,q=m),O!==q&&($e=F5,N="onMouseLeave",At="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&($e=Z5,N="onPointerLeave",At="onPointerEnter",M="pointer"),Je=O==null?_e:Fo(O),A=q==null?_e:Fo(q),_e=new $e(N,M+"leave",O,n,E),_e.target=Je,_e.relatedTarget=A,N=null,Zn(E)===m&&($e=new $e(At,M+"enter",q,n,E),$e.target=A,$e.relatedTarget=Je,N=$e),Je=N,$e=O&&q?He(O,q,fS):null,O!==null&&_2(D,_e,O,$e,!1),q!==null&&Je!==null&&_2(D,Je,q,$e,!0)))}e:{if(O=m?Fo(m):window,q=O.nodeName&&O.nodeName.toLowerCase(),q==="select"||q==="input"&&O.type==="file")var Z=po;else if(hd(O))if(ov)Z=ca;else{Z=nn;var Se=d_}else q=O.nodeName,!q||q.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?m&&ir(m.elementType)&&(Z=po):Z=Wm;if(Z&&(Z=Z(e,m))){Uo(D,Z,n,E);break e}Se&&Se(e,O,m)}switch(Se=m?Fo(m):window,e){case"focusin":(hd(Se)||Se.contentEditable==="true")&&(pu=Se,gg=m,tf=null);break;case"focusout":tf=gg=pu=null;break;case"mousedown":yg=!0;break;case"contextmenu":case"mouseup":case"dragend":yg=!1,Rc(D,n,E);break;case"selectionchange":if(C3)break;case"keydown":case"keyup":Rc(D,n,E)}var ut;if(pg)e:{switch(e){case"compositionstart":var Ke="onCompositionStart";break e;case"compositionend":Ke="onCompositionEnd";break e;case"compositionupdate":Ke="onCompositionUpdate";break e}Ke=void 0}else mu?Pm(e,n)&&(Ke="onCompositionEnd"):e==="keydown"&&n.keyCode===J5&&(Ke="onCompositionStart");Ke&&(K5&&n.locale!=="ko"&&(mu||Ke!=="onCompositionStart"?Ke==="onCompositionEnd"&&mu&&(ut=Ec()):(Fi=E,fg="value"in Fi?Fi.value:Fi.textContent,mu=!0)),Se=eh(m,Ke),0<Se.length&&(Ke=new W5(Ke,e,null,n,E),D.push({event:Ke,listeners:Se}),ut?Ke.data=ut:(ut=Fm(n),ut!==null&&(Ke.data=ut)))),(ut=w3?a1(e,n):_d(e,n))&&(Ke=eh(m,"onBeforeInput"),0<Ke.length&&(Se=new l3("onBeforeInput","beforeinput",null,n,E),D.push({event:Se,listeners:Ke}),Se.data=ut)),dS(D,e,m,n,E)}d2(D,t)})}function Bd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eh(e,t){for(var n=t+"Capture",o=[];e!==null;){var l=e,a=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||a===null||(l=Ss(e,n),l!=null&&o.unshift(Bd(e,l,a)),l=Ss(e,t),l!=null&&o.push(Bd(e,l,a))),e.tag===3)return o;e=e.return}return[]}function fS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _2(e,t,n,o,l){for(var a=t._reactName,s=[];n!==null&&n!==o;){var u=n,_=u.alternate,m=u.stateNode;if(u=u.tag,_!==null&&_===o)break;u!==5&&u!==26&&u!==27||m===null||(_=m,l?(m=Ss(n,a),m!=null&&s.unshift(Bd(n,m,_))):l||(m=Ss(n,a),m!=null&&s.push(Bd(n,m,_)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}function wp(e,t){s_(e,t),e!=="input"&&e!=="textarea"&&e!=="select"||t==null||t.value!==null||Q5||(Q5=!0,e==="select"&&t.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e));var n={registrationNameDependencies:Ys,possibleRegistrationNames:ig};ir(e)||typeof t.is=="string"||dd(e,t,n),t.contentEditable&&!t.suppressContentEditableWarning&&t.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function Ro(e,t,n,o){t!==n&&(n=Vi(n),Vi(t)!==n&&(o[e]=t))}function h2(e){return!!(e.getAttribute("vt-share")||e.getAttribute("vt-exit")||e.getAttribute("vt-enter")||e.getAttribute("vt-update"))}function m2(e){if(!h2(e))return!1;var t=e.getAttribute("vt-name");return e=e.style["view-transition-name"],t?t===e:e.startsWith("_T_")}function _S(e,t,n){t.forEach(function(o){o==="style"?e.getAttribute(o)!==""&&(o=e.style,(o.length===1&&o[0]==="view-transition-name"||o.length===2&&o[0]==="view-transition-class"&&o[1]==="view-transition-name")&&m2(e)||(n.style=Cp(e))):n[y2(o)]=e.getAttribute(o)})}function xr(e,t){t===!1?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)}function p2(e,t){return e=e.namespaceURI===gh||e.namespaceURI===du?e.ownerDocument.createElementNS(e.namespaceURI,e.tagName):e.ownerDocument.createElement(e.tagName),e.innerHTML=t,e.innerHTML}function Vi(e){return Bt(e)&&(console.error("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",kt(e)),Rt(e)),(typeof e=="string"?e:""+e).replace(Z3,`
`).replace(J3,"")}function g2(e,t){return t=Vi(t),Vi(e)===t}function xn(e,t,n,o,l,a){switch(n){case"children":if(typeof o=="string")za(o,t,!1),t==="body"||t==="textarea"&&o===""||Ci(e,o);else if(typeof o=="number"||typeof o=="bigint")za(""+o,t,!1),t!=="body"&&Ci(e,""+o);else return;break;case"className":bc(e,"class",o);break;case"tabIndex":bc(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":bc(e,n,o);break;case"style":ki(e,o,a);return;case"data":if(t!=="object"){bc(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){console.error(n==="src"?'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.':'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',n,n),e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}le(o,n),o=Vr(o),e.setAttribute(n,o);break;case"action":case"formAction":if(o!=null&&(t==="form"?n==="formAction"?console.error("You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."):typeof o=="function"&&(l.encType==null&&l.method==null||um||(um=!0,console.error("Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.")),l.target==null||cm||(cm=!0,console.error("Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."))):t==="input"||t==="button"?n==="action"?console.error("You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."):t!=="input"||l.type==="submit"||l.type==="image"||sm?t!=="button"||l.type==null||l.type==="submit"||sm?typeof o=="function"&&(l.name==null||Ax||(Ax=!0,console.error('Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.')),l.formEncType==null&&l.formMethod==null||um||(um=!0,console.error("Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.")),l.formTarget==null||cm||(cm=!0,console.error("Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."))):(sm=!0,console.error('A button can only specify a formAction along with type="submit" or no type.')):(sm=!0,console.error('An input can only specify a formAction along with type="submit" or type="image".')):console.error(n==="action"?"You can only pass the action prop to <form>.":"You can only pass the formAction prop to <input> or <button>.")),typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&xn(e,t,"name",l.name,l,null),xn(e,t,"formEncType",l.formEncType,l,null),xn(e,t,"formMethod",l.formMethod,l,null),xn(e,t,"formTarget",l.formTarget,l,null)):(xn(e,t,"encType",l.encType,l,null),xn(e,t,"method",l.method,l,null),xn(e,t,"target",l.target,l,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}le(o,n),o=Vr(o),e.setAttribute(n,o);break;case"onClick":o!=null&&(typeof o!="function"&&xr(n,o),e.onclick=To);return;case"onScroll":o!=null&&(typeof o!="function"&&xr(n,o),Wt("scroll",e));return;case"onScrollEnd":o!=null&&(typeof o!="function"&&xr(n,o),Wt("scrollend",e));return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=o.__html,n!=null){if(l.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}le(o,n),n=Vr(o),e.setAttributeNS(ic,"xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?(le(o,n),e.setAttribute(n,o)):e.removeAttribute(n);break;case"inert":o!==""||dm[n]||(dm[n]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",n));case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?(le(o,n),e.setAttribute(n,o)):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?(le(o,n),e.setAttribute(n,o)):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):(le(o,n),e.setAttribute(n,o));break;case"popover":Wt("beforetoggle",e),Wt("toggle",e),Jt(e,"popover",o);break;case"xlinkActuate":Jn(e,ic,"xlink:actuate",o);break;case"xlinkArcrole":Jn(e,ic,"xlink:arcrole",o);break;case"xlinkRole":Jn(e,ic,"xlink:role",o);break;case"xlinkShow":Jn(e,ic,"xlink:show",o);break;case"xlinkTitle":Jn(e,ic,"xlink:title",o);break;case"xlinkType":Jn(e,ic,"xlink:type",o);break;case"xmlBase":Jn(e,py,"xml:base",o);break;case"xmlLang":Jn(e,py,"xml:lang",o);break;case"xmlSpace":Jn(e,py,"xml:space",o);break;case"is":a!=null&&console.error('Cannot update the "is" prop after it has been initialized.'),Jt(e,"is",o);break;case"innerText":case"textContent":return;case"popoverTarget":Ox||o==null||typeof o!="object"||(Ox=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",o));default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=Al(n),Jt(e,n,o);else{Ys.hasOwnProperty(n)&&o!=null&&typeof o!="function"&&xr(n,o);return}}sn=!0}function Sp(e,t,n,o,l,a){switch(n){case"style":ki(e,o,a);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=o.__html,n!=null){if(l.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof o=="string")Ci(e,o);else if(typeof o=="number"||typeof o=="bigint")Ci(e,""+o);else return;break;case"onScroll":o!=null&&(typeof o!="function"&&xr(n,o),Wt("scroll",e));return;case"onScrollEnd":o!=null&&(typeof o!="function"&&xr(n,o),Wt("scrollend",e));return;case"onClick":o!=null&&(typeof o!="function"&&xr(n,o),e.onclick=To);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(Ys.hasOwnProperty(n))o!=null&&typeof o!="function"&&xr(n,o);else e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),a=n.slice(2,l?n.length-7:void 0),t=e[wl]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,l),typeof o=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,o,l);break e}sn=!0,n in e?e[n]=o:o===!0?e.setAttribute(n,""):Jt(e,n,o)}return}sn=!0}function Yo(e,t,n){switch(wp(t,n),t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",e),Wt("load",e);var o=!1,l=!1,a;for(a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s!=null)switch(a){case"src":o=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:xn(e,t,a,s,n,null)}}l&&xn(e,t,"srcSet",n.srcSet,n,null),o&&xn(e,t,"src",n.src,n,null);return;case"input":Rl("input",n),Wt("invalid",e);var u=a=s=l=null,_=null,m=null;for(o in n)if(n.hasOwnProperty(o)){var E=n[o];if(E!=null)switch(o){case"name":l=E;break;case"type":s=E;break;case"checked":_=E;break;case"defaultChecked":m=E;break;case"value":a=E;break;case"defaultValue":u=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:xn(e,t,o,E,n,null)}}vc(e,n),xc(e,a,u,_,m,s,l,!1);return;case"select":Rl("select",n),Wt("invalid",e),o=s=a=null;for(l in n)if(n.hasOwnProperty(l)&&(u=n[l],u!=null))switch(l){case"value":a=u;break;case"defaultValue":s=u;break;case"multiple":o=u;default:xn(e,t,l,u,n,null)}jr(e,n),t=a,n=s,e.multiple=!!o,t!=null?Jo(e,!!o,t,!1):n!=null&&Jo(e,!!o,n,!0);return;case"textarea":Rl("textarea",n),Wt("invalid",e),a=l=o=null;for(s in n)if(n.hasOwnProperty(s)&&(u=n[s],u!=null))switch(s){case"value":o=u;break;case"defaultValue":l=u;break;case"children":a=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:xn(e,t,s,u,n,null)}or(e,n),yn(e,o,l,a);return;case"option":xi(e,n);for(_ in n)n.hasOwnProperty(_)&&(o=n[_],o!=null)&&(_==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":xn(e,t,_,o,n,null));return;case"dialog":Wt("beforetoggle",e),Wt("toggle",e),Wt("cancel",e),Wt("close",e);break;case"iframe":case"object":Wt("load",e);break;case"video":case"audio":for(o=0;o<Bf.length;o++)Wt(Bf[o],e);break;case"image":Wt("error",e),Wt("load",e);break;case"details":Wt("toggle",e);break;case"embed":case"source":case"link":Wt("error",e),Wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in n)if(n.hasOwnProperty(m)&&(o=n[m],o!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:xn(e,t,m,o,n,null)}return;default:if(ir(t)){for(E in n)n.hasOwnProperty(E)&&(o=n[E],o!==void 0&&Sp(e,t,E,o,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(o=n[u],o!=null&&xn(e,t,u,o,n,null))}function hS(e,t,n,o){switch(wp(t,o),t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,a=null,s=null,u=null,_=null,m=null,E=null;for(q in n){var D=n[q];if(n.hasOwnProperty(q)&&D!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":_=D;default:o.hasOwnProperty(q)||xn(e,t,q,null,o,D)}}for(var O in o){var q=o[O];if(D=n[O],o.hasOwnProperty(O)&&(q!=null||D!=null))switch(O){case"type":q!==D&&(sn=!0),a=q;break;case"name":q!==D&&(sn=!0),l=q;break;case"checked":q!==D&&(sn=!0),m=q;break;case"defaultChecked":q!==D&&(sn=!0),E=q;break;case"value":q!==D&&(sn=!0),s=q;break;case"defaultValue":q!==D&&(sn=!0),u=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:q!==D&&xn(e,t,O,q,o,D)}}t=n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null,o=o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null,t||!o||Rx||(console.error("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),Rx=!0),!t||o||Mx||(console.error("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"),Mx=!0),Ft(e,s,u,_,m,E,a,l);return;case"select":q=s=u=O=null;for(a in n)if(_=n[a],n.hasOwnProperty(a)&&_!=null)switch(a){case"value":break;case"multiple":q=_;default:o.hasOwnProperty(a)||xn(e,t,a,null,o,_)}for(l in o)if(a=o[l],_=n[l],o.hasOwnProperty(l)&&(a!=null||_!=null))switch(l){case"value":a!==_&&(sn=!0),O=a;break;case"defaultValue":a!==_&&(sn=!0),u=a;break;case"multiple":a!==_&&(sn=!0),s=a;default:a!==_&&xn(e,t,l,a,o,_)}o=u,t=s,n=q,O!=null?Jo(e,!!t,O,!1):!!n!=!!t&&(o!=null?Jo(e,!!t,o,!0):Jo(e,!!t,t?[]:"",!1));return;case"textarea":q=O=null;for(u in n)if(l=n[u],n.hasOwnProperty(u)&&l!=null&&!o.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:xn(e,t,u,null,o,l)}for(s in o)if(l=o[s],a=n[s],o.hasOwnProperty(s)&&(l!=null||a!=null))switch(s){case"value":l!==a&&(sn=!0),O=l;break;case"defaultValue":l!==a&&(sn=!0),q=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:l!==a&&xn(e,t,s,l,o,a)}wc(e,O,q);return;case"option":for(var _e in n)O=n[_e],n.hasOwnProperty(_e)&&O!=null&&!o.hasOwnProperty(_e)&&(_e==="selected"?e.selected=!1:xn(e,t,_e,null,o,O));for(_ in o)O=o[_],q=n[_],o.hasOwnProperty(_)&&O!==q&&(O!=null||q!=null)&&(_==="selected"?(O!==q&&(sn=!0),e.selected=O&&typeof O!="function"&&typeof O!="symbol"):xn(e,t,_,O,o,q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in n)O=n[$e],n.hasOwnProperty($e)&&O!=null&&!o.hasOwnProperty($e)&&xn(e,t,$e,null,o,O);for(m in o)if(O=o[m],q=n[m],o.hasOwnProperty(m)&&O!==q&&(O!=null||q!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:xn(e,t,m,O,o,q)}return;default:if(ir(t)){for(var Je in n)O=n[Je],n.hasOwnProperty(Je)&&O!==void 0&&!o.hasOwnProperty(Je)&&Sp(e,t,Je,void 0,o,O);for(E in o)O=o[E],q=n[E],!o.hasOwnProperty(E)||O===q||O===void 0&&q===void 0||Sp(e,t,E,O,o,q);return}}for(var At in n)O=n[At],n.hasOwnProperty(At)&&O!=null&&!o.hasOwnProperty(At)&&xn(e,t,At,null,o,O);for(D in o)O=o[D],q=n[D],!o.hasOwnProperty(D)||O===q||O==null&&q==null||xn(e,t,D,O,o,q)}function y2(e){switch(e){case"class":return"className";case"for":return"htmlFor";default:return e}}function Cp(e){for(var t={},n=e.style,o=0;o<n.length;o++){var l=n[o];l==="view-transition-name"&&m2(e)||(t[l]=n.getPropertyValue(l))}return t}function b2(e,t,n){if(t!=null&&typeof t!="object")console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var o,l=o="",a;for(a in t)if(t.hasOwnProperty(a)){var s=t[a];s!=null&&typeof s!="boolean"&&s!==""&&(a.indexOf("--")===0?(Y(s,a),o+=l+a+":"+(""+s).trim()):typeof s!="number"||s===0||X5.has(a)?(Y(s,a),o+=l+a.replace(I5,"-$1").toLowerCase().replace(j5,"-ms-")+":"+(""+s).trim()):o+=l+a.replace(I5,"-$1").toLowerCase().replace(j5,"-ms-")+":"+s+"px",l=";")}o=o||null,t=e.getAttribute("style"),t!==o&&(o=Vi(o),t=Vi(t),t===o||t[t.length-1]===";"&&h2(e)||(n.style=Cp(e)))}}function ba(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null)switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":return}else if(o!=null)switch(typeof o){case"function":case"symbol":case"boolean":break;default:if(le(o,t),e===""+o)return}Ro(t,e,o,a)}function v2(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null){switch(typeof o){case"function":case"symbol":return}if(!o)return}else switch(typeof o){case"function":case"symbol":break;default:if(o)return}Ro(t,e,o,a)}function kp(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null)switch(typeof o){case"undefined":case"function":case"symbol":return}else if(o!=null)switch(typeof o){case"function":case"symbol":break;default:if(le(o,n),e===""+o)return}Ro(t,e,o,a)}function x2(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null)switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":return;default:if(isNaN(o))return}else if(o!=null)switch(typeof o){case"function":case"symbol":case"boolean":break;default:if(!isNaN(o)&&(le(o,t),e===""+o))return}Ro(t,e,o,a)}function Ep(e,t,n,o,l,a){if(l.delete(n),e=e.getAttribute(n),e===null)switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":return}else if(o!=null)switch(typeof o){case"function":case"symbol":case"boolean":break;default:if(le(o,t),n=Vr(""+o),e===n)return}Ro(t,e,o,a)}function w2(e,t,n,o){for(var l={},a=new Set,s=e.attributes,u=0;u<s.length;u++)switch(s[u].name.toLowerCase()){case"value":break;case"checked":break;case"selected":break;case"vt-name":case"vt-update":case"vt-enter":case"vt-exit":case"vt-share":case"vt-parent-enter":case"vt-parent-exit":break;default:a.add(s[u].name)}if(ir(t)){for(var _ in n)if(n.hasOwnProperty(_)){var m=n[_];if(m!=null){if(Ys.hasOwnProperty(_))typeof m!="function"&&xr(_,m);else if(n.suppressHydrationWarning!==!0)switch(_){case"children":typeof m!="string"&&typeof m!="number"||Ro("children",e.textContent,m,l);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":s=e.innerHTML,m=m?m.__html:void 0,m!=null&&(m=p2(e,m),Ro(_,s,m,l));continue;case"style":a.delete(_),b2(e,m,l);continue;case"offsetParent":case"offsetTop":case"offsetLeft":case"offsetWidth":case"offsetHeight":case"isContentEditable":case"outerText":case"outerHTML":a.delete(_.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",_);continue;case"className":a.delete("class"),s=od(e,"class",m),Ro("className",s,m,l);continue;default:o.context===yi&&t!=="svg"&&t!=="math"?a.delete(_.toLowerCase()):a.delete(_),s=od(e,_,m),Ro(_,s,m,l)}}}}else for(m in n)if(n.hasOwnProperty(m)&&(_=n[m],_!=null)){if(Ys.hasOwnProperty(m))typeof _!="function"&&xr(m,_);else if(n.suppressHydrationWarning!==!0)switch(m){case"children":typeof _!="string"&&typeof _!="number"||Ro("children",e.textContent,_,l);continue;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"value":case"checked":case"selected":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":continue;case"dangerouslySetInnerHTML":s=e.innerHTML,_=_?_.__html:void 0,_!=null&&(_=p2(e,_),s!==_&&(l[m]={__html:s}));continue;case"className":ba(e,m,"class",_,a,l);continue;case"tabIndex":ba(e,m,"tabindex",_,a,l);continue;case"style":a.delete(m),b2(e,_,l);continue;case"multiple":a.delete(m),Ro(m,e.multiple,_,l);continue;case"muted":a.delete(m),Ro(m,e.muted,_,l);continue;case"autoFocus":a.delete("autofocus"),Ro(m,e.autofocus,_,l);continue;case"data":if(t!=="object"){a.delete(m),s=e.getAttribute("data"),Ro(m,s,_,l);continue}case"src":case"href":if(!(_!==""||t==="a"&&m==="href"||t==="object"&&m==="data")){console.error(m==="src"?'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.':'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',m,m);continue}Ep(e,m,m,_,a,l);continue;case"action":case"formAction":if(s=e.getAttribute(m),typeof _=="function"){a.delete(m.toLowerCase()),m==="formAction"?(a.delete("name"),a.delete("formenctype"),a.delete("formmethod"),a.delete("formtarget")):(a.delete("enctype"),a.delete("method"),a.delete("target"));continue}else if(s===e8){a.delete(m.toLowerCase()),Ro(m,"function",_,l);continue}Ep(e,m,m.toLowerCase(),_,a,l);continue;case"xlinkHref":Ep(e,m,"xlink:href",_,a,l);continue;case"contentEditable":kp(e,m,"contenteditable",_,a,l);continue;case"spellCheck":kp(e,m,"spellcheck",_,a,l);continue;case"draggable":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":kp(e,m,m,_,a,l);continue;case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":v2(e,m,m.toLowerCase(),_,a,l);continue;case"capture":case"download":e:{u=e;var E=s=m,D=l;if(a.delete(E),u=u.getAttribute(E),u===null)switch(typeof _){case"undefined":case"function":case"symbol":break e;default:if(_===!1)break e}else if(_!=null)switch(typeof _){case"function":case"symbol":break;case"boolean":if(_===!0&&u==="")break e;break;default:if(le(_,s),u===""+_)break e}Ro(s,u,_,D)}continue;case"cols":case"rows":case"size":case"span":e:{if(u=e,E=s=m,D=l,a.delete(E),u=u.getAttribute(E),u===null)switch(typeof _){case"undefined":case"function":case"symbol":case"boolean":break e;default:if(isNaN(_)||1>_)break e}else if(_!=null)switch(typeof _){case"function":case"symbol":case"boolean":break;default:if(!(isNaN(_)||1>_)&&(le(_,s),u===""+_))break e}Ro(s,u,_,D)}continue;case"rowSpan":x2(e,m,"rowspan",_,a,l);continue;case"start":x2(e,m,m,_,a,l);continue;case"xHeight":ba(e,m,"x-height",_,a,l);continue;case"xlinkActuate":ba(e,m,"xlink:actuate",_,a,l);continue;case"xlinkArcrole":ba(e,m,"xlink:arcrole",_,a,l);continue;case"xlinkRole":ba(e,m,"xlink:role",_,a,l);continue;case"xlinkShow":ba(e,m,"xlink:show",_,a,l);continue;case"xlinkTitle":ba(e,m,"xlink:title",_,a,l);continue;case"xlinkType":ba(e,m,"xlink:type",_,a,l);continue;case"xmlBase":ba(e,m,"xml:base",_,a,l);continue;case"xmlLang":ba(e,m,"xml:lang",_,a,l);continue;case"xmlSpace":ba(e,m,"xml:space",_,a,l);continue;case"inert":_!==""||dm[m]||(dm[m]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",m)),v2(e,m,m,_,a,l);continue;default:if(!(2<m.length)||m[0]!=="o"&&m[0]!=="O"||m[1]!=="n"&&m[1]!=="N"){u=Al(m),s=!1,o.context===yi&&t!=="svg"&&t!=="math"?a.delete(u.toLowerCase()):(E=m.toLowerCase(),E=yh.hasOwnProperty(E)&&yh[E]||null,E!==null&&E!==m&&(s=!0,a.delete(E)),a.delete(u));e:if(E=e,D=u,u=_,yc(D))if(E.hasAttribute(D))E=D.toLowerCase()==="nonce"?E.nonce:E.getAttribute(D),le(u,D),u=E===""+u?u:E;else{switch(typeof u){case"function":case"symbol":break e;case"boolean":if(E=D.toLowerCase().slice(0,5),E!=="data-"&&E!=="aria-")break e}u=u===void 0?void 0:null}else u=void 0;s||Ro(m,u,_,l)}}}return 0<a.size&&n.suppressHydrationWarning!==!0&&_S(e,a,l),Object.keys(l).length===0?null:l}function mS(e,t){switch(e.length){case 0:return"";case 1:return e[0];case 2:return e[0]+" "+t+" "+e[1];default:return e.slice(0,-1).join(", ")+", "+t+" "+e[e.length-1]}}function S2(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),o=0;o<n.length;o++){var l=n[o],a=l.transferSize,s=l.initiatorType,u=l.duration;if(a&&u&&S2(s)){for(s=0,u=l.responseEnd,o+=1;o<n.length;o++){var _=n[o],m=_.startTime;if(m>u)break;var E=_.transferSize,D=_.initiatorType;E&&S2(D)&&(_=_.responseEnd,s+=E*(_<u?1:(u-m)/(_-m)))}if(--o,t+=8*(a+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}function $d(e){return e.nodeType===9?e:e.ownerDocument}function C2(e){switch(e){case du:return qu;case gh:return _m;default:return yi}}function k2(e,t){if(e===yi)switch(t){case"svg":return qu;case"math":return _m;default:return yi}return e===qu&&t==="foreignObject"?yi:e}function E2(e,t,n,o){return n=$d(n).createElement(e),n[qo]=o,n[wl]=t,Yo(n,e,t),hn(n),n}function gS(e){if(e=e.type,typeof e!="string"||e===""||(e=e.toLowerCase(),e==="module"||e==="importmap"||e==="speculationrules"))return!1;switch(e){case"application/ecmascript":case"application/javascript":case"application/x-ecmascript":case"application/x-javascript":case"text/ecmascript":case"text/javascript":case"text/javascript1.0":case"text/javascript1.1":case"text/javascript1.2":case"text/javascript1.3":case"text/javascript1.4":case"text/javascript1.5":case"text/jscript":case"text/livescript":case"text/x-ecmascript":case"text/x-javascript":return!1}return!0}function Tp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function yS(){var e=window.event;return e&&e.type==="popstate"?e===vy?!1:(vy=e,!0):(vy=null,!1)}function Hd(){var e=window.event;return e&&e!==Uf?e.type:null}function Ud(){var e=window.event;return e&&e!==Uf?e.timeStamp:-1.1}function bS(e){setTimeout(function(){throw e})}function vS(e,t,n){switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&e.focus();break;case"img":n.src?e.src=n.src:n.srcSet&&(e.srcset=n.srcSet)}}function xS(){}function wS(e,t,n,o){hS(e,t,n,o),e[wl]=o}function T2(e){Ci(e,"")}function SS(e,t,n){e.nodeValue=n}function M2(e){if(!e.__reactWarnedAboutChildrenConflict){var t=e[wl]||null;if(t!==null){var n=An(e);n!==null&&(typeof t.children=="string"||typeof t.children=="number"?(e.__reactWarnedAboutChildrenConflict=!0,ie(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):t.dangerouslySetInnerHTML!=null&&(e.__reactWarnedAboutChildrenConflict=!0,ie(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function Xi(e){return e==="head"}function CS(e,t){e.removeChild(t)}function kS(e,t){(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).removeChild(t)}function R2(e,t){var n=t,o=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n===Hf||n===fm){if(o===0){e.removeChild(l),lu(t);return}o--}else if(n===$f||n===_s||n===cc||n===Yu||n===sc)o++;else if(n===n8)zp(e.ownerDocument.documentElement);else if(n===l8){n=e.ownerDocument.head,zp(n);for(var a=n.firstChild;a;){var s=a.nextSibling,u=a.nodeName;a[Qd]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=s}}else n===o8&&zp(e.ownerDocument.body);n=l}while(n);lu(t)}function A2(e,t){var n=e;e=0;do{var o=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),o&&o.nodeType===8)if(n=o.data,n===Hf){if(e===0)break;e--}else n!==$f&&n!==_s&&n!==cc&&n!==Yu||e++;n=o}while(n)}function ES(e){A2(e,!0)}function TS(e){e=e.style,typeof e.setProperty=="function"?e.setProperty("display","none","important"):e.display="none"}function MS(e){e.nodeValue=""}function RS(e){A2(e,!1)}function AS(e,t){t=t[zx],t=t!=null&&t.hasOwnProperty("display")?t.display:null,e.style.display=t==null||typeof t=="boolean"?"":(""+t).trim()}function OS(e,t){e.nodeValue=t}function DS(e){for(var t=e.firstChild;t!=null;){if(t.nodeType===1&&getComputedStyle(t).display==="block"){var n=An(t)||An(e);ie(n,function(o,l){console.error(`You're about to start a <ViewTransition> around a display: inline element <%s>, which itself has a display: block element <%s> inside it. This might trigger a bug in Safari which causes the View Transition to be skipped with a duplicate name error.
https://bugs.webkit.org/show_bug.cgi?id=290923`,o.toLocaleLowerCase(),l.toLocaleLowerCase())},e.tagName,t.tagName);break}if(t.firstChild!=null)t=t.firstChild;else{if(t===e)break;for(;t.nextSibling==null&&t.parentNode!=null&&t.parentNode!==e;)t=t.parentNode;t=t.nextSibling}}}function O2(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var o=1;else for(var l=o=0;l<t.length;l++){var a=t[l];0<a.width&&0<a.height&&o++}o===1?(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom):DS(e)}}function D2(e,t){e=e.style,t=t[zx];var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function N2(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Mp(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return N2(t,n,e)}function NS(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return N2(t,n,e)}function zS(e,t){if(typeof e=="object"&&e!==null)switch(e.name){case"TimeoutError":return Error("A ViewTransition timed out because a Navigation stalled. This can happen if a Navigation is blocked on React itself. Such as if it's resolved inside useEffect. This can be solved by moving the resolution to useLayoutEffect.",{cause:e});case"AbortError":return t?null:Error("A ViewTransition was aborted early. This might be because you have other View Transition libraries on the page and only one can run at a time. To avoid this, use only React's built-in <ViewTransition> to coordinate.",{cause:e});case"InvalidStateError":if(e.message==="View transition was skipped because document visibility state is hidden."||e.message==="Skipping view transition because document visibility state has become hidden."||e.message==="Skipping view transition because viewport size changed."||e.message==="Transition was aborted because of invalid state")return null}return e}function LS(e){return e.documentElement.clientHeight}function BS(e){this.addEventListener("load",e),this.addEventListener("error",e)}function $S(e,t,n,o,l,a,s,u,_,m,E){var D=t.nodeType===9?t:t.ownerDocument;try{var O=D.startViewTransition({update:function(){var _e=D.defaultView,$e=_e.navigation&&_e.navigation.transition,Je=D.fonts.status;o();var At=[];if(Je==="loaded"&&(LS(D),D.fonts.status==="loading"&&At.push(D.fonts.ready)),Je=At.length,e!==null)for(var M=e.suspenseyImages,A=0,N=0;N<M.length;N++){var Z=M[N];if(!Z.complete){var Se=Z.getBoundingClientRect();if(0<Se.bottom&&0<Se.right&&Se.top<_e.innerHeight&&Se.left<_e.innerWidth){if(A+=e5(Z),A>mm){At.length=Je;break}Z=new Promise(BS.bind(Z)),At.push(Z)}}}if(0<At.length)return m(0<Je?At.length>Je?"Waiting on Fonts and Images":"Waiting on Fonts":"Waiting on Images"),_e=Promise.race([Promise.all(At),new Promise(function(ut){return setTimeout(ut,i8)})]).then(l,l),($e?Promise.allSettled([$e.finished,_e]):_e).then(a,a);if(l(),$e)return $e.finished.then(a,a);a()},types:n});D.__reactViewTransition=O;var q=[];return O.ready.then(function(){for(var _e=D.documentElement.getAnimations({subtree:!0}),$e=0;$e<_e.length;$e++){var Je=_e[$e],At=Je.effect,M=At.pseudoElement;if(M!=null&&M.startsWith("::view-transition")){q.push(Je),Je=At.getKeyframes();for(var A=M=void 0,N=!0,Z=0;Z<Je.length;Z++){var Se=Je[Z],ut=Se.width;if(M===void 0)M=ut;else if(M!==ut){N=!1;break}if(ut=Se.height,A===void 0)A=ut;else if(A!==ut){N=!1;break}delete Se.width,delete Se.height,Se.transform==="none"&&delete Se.transform}N&&M!==void 0&&A!==void 0&&(At.setKeyframes(Je),N=getComputedStyle(At.target,At.pseudoElement),N.width!==M||N.height!==A)&&(N=Je[0],N.width=M,N.height=A,N=Je[Je.length-1],N.width=M,N.height=A,At.setKeyframes(Je))}}s()},function(_e){D.__reactViewTransition===O&&(D.__reactViewTransition=null);try{_e=zS(_e,!1),_e!==null&&_(_e)}finally{o(),l(),s(),E()}}),O.finished.finally(function(){for(var _e=0;_e<q.length;_e++)q[_e].cancel();D.__reactViewTransition===O&&(D.__reactViewTransition=null),E(),u()}),O}catch{return o(),l(),E(),s(),null}}function js(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}function z2(e){return{name:e,group:new js("group",e),imagePair:new js("image-pair",e),old:new js("old",e),new:new js("new",e)}}function Zl(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}function HS(e,t,n,o){return Re(e).addEventListener(t,n,o),!1}function US(e,t,n,o){return Re(e).removeEventListener(t,n,o),!1}function tu(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function L2(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function B2(e,t,n,o){if(e.length===0)return-1;o=L2(o);for(var l=0;l<e.length;l++){var a=e[l];if(a.type===t&&a.listener===n&&L2(a.optionsOrUseCapture)===o)return l}return-1}function $2(e,t){return e.tag===6?!1:(e=Re(e),e6(e,t))}function Rp(e,t){return t.push(e),!1}function IS(e,t){return e.tag===6?!1:(e=Re(e),e===t||e.contains(t)?(t.blur(),!0):!1)}function jS(e,t){return e.tag===6||(e=Re(e),t.observe(e)),!1}function YS(e,t){return e.tag===6||(e=Re(e),t.unobserve(e)),!1}function qS(e,t,n){tr.push({fragmentInstance:e,observer:t,instance:n}),wy||(wy=!0,t6(function(){wy=!1;var o=tr;tr=[];for(var l=0;l<o.length;l++){var a=o[l];a.observer.unobserve(a.instance)}}))}function VS(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=Re(e),t.push.apply(t,e.getClientRects());return!1}function XS(e,t,n,o,l){var a=Zn(l);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)e:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break e}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=l.ownerDocument,l===a||l===a.documentElement||l===a.body;e:{for(a=t,t=fe(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break e}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=He(n,a,pe),t===null?t=!1:(it(t,!0,Le,a,n),a=au,au=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===o)&&(t=He(o,a,pe),t===null?t=!1:(it(t,!0,J,a,o),a=au,Xp=au=null,t=a!==null)),t):!1}function H2(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}function GS(e,t){return e=Re(e),U2(e,t),!1}function U2(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function I2(e,t){var n=t._eventListeners;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o];e.addEventListener(l.type,l.attachedListener,tu(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var s=0,u=0;u<tr.length;u++){var _=tr[u];(_.fragmentInstance!==t||_.observer!==a||_.instance!==e)&&(tr[s++]=_)}tr.length=s,a.observe(e)}),U2(e,t))}function QS(e,t){var n=t._eventListeners;if(n!==null)for(var o=0;o<n.length;o++){var l=n[o];e.removeEventListener(l.type,l.attachedListener,tu(l.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?qS(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Ap(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Ap(n),oo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function PS(e,t,n,o){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Qd])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){le(l.name,"name");var a=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Jl(e.nextSibling),e===null)break}return null}function FS(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Jl(e.nextSibling),e===null))return null;return e}function j2(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Jl(e.nextSibling),e===null))return null;return e}function Op(e){return e.data===_s||e.data===cc}function Dp(e){return e.data===Yu||e.data===_s&&e.ownerDocument.readyState!==Nx}function WS(e,t){var n=e.ownerDocument;if(e.data===cc)e._reactRetry=t;else if(e.data!==_s||n.readyState!==Nx)t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Jl(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===$f||t===Yu||t===_s||t===cc||t===sc||t===gy||t===Dx)break;if(t===Hf||t===fm)return null}}return e}function Y2(e){if(e.nodeType===1){for(var t=e.nodeName.toLowerCase(),n={},o=e.attributes,l=0;l<o.length;l++){var a=o[l];n[y2(a.name)]=a.name.toLowerCase()==="style"?Cp(e):a.value}return{type:t,props:n}}return e.nodeType===8?e.data===sc?{type:"Activity",props:{}}:{type:"Suspense",props:{}}:e.nodeValue}function q2(e,t,n){return n===null||n[t8]!==!0?(e.nodeValue===t?e=null:(t=Vi(t),e=Vi(e.nodeValue)===t?null:e.nodeValue),e):null}function Np(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===Hf||n===fm){if(t===0)return Jl(e.nextSibling);t--}else n!==$f&&n!==Yu&&n!==_s&&n!==cc&&n!==sc||t++}e=e.nextSibling}return null}function V2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===$f||n===Yu||n===_s||n===cc||n===sc){if(t===0)return e;t--}else n!==Hf&&n!==fm||t++}e=e.previousSibling}return null}function ZS(e){lu(e)}function JS(e){lu(e)}function KS(e){lu(e)}function e6(e,t){function n(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return o}function t6(e){Hx(function(){Hx(function(t){return e(t)})})}function X2(e,t,n,o,l){switch(l&&Cc(e,o.ancestorInfo),t=$d(n),e){case"html":if(e=t.documentElement,!e)throw Error("React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.");return e;case"head":if(e=t.head,!e)throw Error("React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.");return e;case"body":if(e=t.body,!e)throw Error("React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.");return e;default:throw Error("resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.")}}function n6(e,t,n,o){if(!n[Pi]&&An(n)){var l=n.tagName.toLowerCase();console.error("You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",l,l,l)}switch(e){case"html":case"head":case"body":break;default:console.error("acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.")}for(l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Yo(n,e,t),n[qo]=o,n[wl]=t}function G2(e,t,n){for(var o in n){var l=n[o];n.hasOwnProperty(o)&&l!=null&&xn(e,t,o,null,K3,l)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===To&&(e.onclick=null),oo(e)}function zp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);oo(e)}function Id(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}function Q2(e,t,n){var o=Vu;if(o&&typeof t=="string"&&t){var l=dl(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),jx.has(l)||(jx.add(l),e={rel:e,crossOrigin:n,href:t},o.querySelector(l)===null&&(t=o.createElement("link"),Yo(t,"link",e),hn(t),o.head.appendChild(t)))}}function P2(e,t,n,o){var l=(l=Qi.current)?Id(l):null;if(!l)throw Error('"resourceRoot" was expected to exist. This is a bug in React.');switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=nu(n.href),t=Wo(l).hoistableStyles,o=t.get(n),o||(o={type:"style",instance:null,count:0,state:null},t.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=nu(n.href);var a=Wo(l).hoistableStyles,s=a.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:dc,preload:null}},a.set(e,s),(a=l.querySelector(jd(e)))?a._p||(s.instance=a,s.state.loading=If|Ra):(a=Aa.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Aa.set(e,a)),o6(l,e,a,s.state))),t&&o===null)throw n=`

  - `+th(t)+`
  + `+th(n),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return s}if(t&&o!==null)throw n=`

  - `+th(t)+`
  + `+th(n),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=ou(n),t=Wo(l).hoistableScripts,o=t.get(n),o||(o={type:"script",instance:null,count:0,state:null},t.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error('getResource encountered a type it did not expect: "'+e+'". this is a bug in React.')}}function th(e){var t=0,n="<link";return typeof e.rel=="string"?(t++,n+=' rel="'+e.rel+'"'):va.call(e,"rel")&&(t++,n+=' rel="'+(e.rel===null?"null":"invalid type "+typeof e.rel)+'"'),typeof e.href=="string"?(t++,n+=' href="'+e.href+'"'):va.call(e,"href")&&(t++,n+=' href="'+(e.href===null?"null":"invalid type "+typeof e.href)+'"'),typeof e.precedence=="string"?(t++,n+=' precedence="'+e.precedence+'"'):va.call(e,"precedence")&&(t++,n+=" precedence={"+(e.precedence===null?"null":"invalid type "+typeof e.precedence)+"}"),Object.getOwnPropertyNames(e).length>t&&(n+=" ..."),n+" />"}function nu(e){return'href="'+dl(e)+'"'}function jd(e){return'link[rel="stylesheet"]['+e+"]"}function F2(e){return Nt({},e,{"data-precedence":e.precedence,precedence:null})}function o6(e,t,n,o){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[mh]!==!0){o.loading=If;return}}else t=e.createElement("link"),t[mh]=!0,t.onload=t.onerror=ul.bind(null,t),Yo(t,"link",n),hn(t),e.head.appendChild(t);o.preload=t,t.addEventListener("load",function(){return o.loading|=If}),t.addEventListener("error",function(){return o.loading|=Ux})}function ou(e){return'[src="'+dl(e)+'"]'}function Yd(e){return"script[async]"+e}function W2(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+dl(n.href)+'"]');if(o)return t.instance=o,hn(o),o;var l=Nt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),hn(o),Yo(o,"style",l),nh(o,n.precedence,e),t.instance=o;case"stylesheet":l=nu(n.href);var a=e.querySelector(jd(l));if(a)return t.state.loading|=Ra,t.instance=a,hn(a),a;o=F2(n),(l=Aa.get(l))&&Lp(o,l),a=(e.ownerDocument||e).createElement("link"),hn(a);var s=a;return s._p=new Promise(function(u,_){s.onload=u,s.onerror=_}),Yo(a,"link",o),t.state.loading|=Ra,nh(a,n.precedence,e),t.instance=a;case"script":return a=ou(n.src),(l=e.querySelector(Yd(a)))?(t.instance=l,hn(l),l):(o=n,(l=Aa.get(a))&&(o=Nt({},n),Bp(o,l)),e=e.ownerDocument||e,l=e.createElement("script"),hn(l),Yo(l,"link",o),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error('acquireResource encountered a resource type it did not expect: "'+t.type+'". this is a bug in React.')}else t.type==="stylesheet"&&(t.state.loading&Ra)===dc&&(o=t.instance,t.state.loading|=Ra,nh(o,n.precedence,e));return t.instance}function nh(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=o.length?o[o.length-1]:null,a=l,s=0;s<o.length;s++){var u=o[s];if(u.dataset.precedence===t)a=u;else if(a!==l)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Bp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}function Z2(e,t,n){if(hm===null){var o=new Map,l=hm=new Map;l.set(n,o)}else l=hm,o=l.get(n),o||(o=new Map,l.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var a=n[l];if(!(a[Qd]||a[qo]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!==du){var s=a.getAttribute(t)||"";s=e+s;var u=o.get(s);u?u.push(a):o.set(s,[a])}}return o}function $p(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function l6(e,t,n){var o=!n.ancestorInfo.containerTagInScope;if(n.context===qu||t.itemProp!=null)return!o||t.itemProp==null||e!=="meta"&&e!=="title"&&e!=="style"&&e!=="link"&&e!=="script"||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",e,e),!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href===""){o&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError){if(t.rel==="stylesheet"&&typeof t.precedence=="string"){e=t.href;var l=t.onError,a=t.disabled;n=[],t.onLoad&&n.push("`onLoad`"),l&&n.push("`onError`"),a!=null&&n.push("`disabled`"),l=mS(n,"and"),l+=n.length===1?" prop":" props",a=n.length===1?"an "+l:"the "+l,n.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',e,a,l)}o&&(typeof t.rel!="string"||typeof t.href!="string"||t.href===""?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(t.onError||t.onLoad)&&console.error("Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."));break}return t.rel==="stylesheet"?(e=t.precedence,t=t.disabled,typeof e!="string"&&o&&console.error('Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'),typeof e=="string"&&t==null):!0;case"script":if(e=t.async&&typeof t.async!="function"&&typeof t.async!="symbol",!e||t.onLoad||t.onError||!t.src||typeof t.src!="string"){o&&(e?t.onLoad||t.onError?console.error("Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error('Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'));break}return!0;case"noscript":case"template":o&&console.error("Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",e)}return!1}function J2(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function K2(e){return!(e.type==="stylesheet"&&(e.state.loading&Ix)===dc)}function e5(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function t5(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=e5(t),e.suspenseyImages.push(t)),e=i6.bind(e),t.decode().then(e,e))}function a6(e,t,n,o){if(n.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(n.state.loading&Ra)===dc){if(n.instance===null){var l=nu(o.href),a=t.querySelector(jd(l));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=qd.bind(e),t.then(e,e)),n.state.loading|=Ra,n.instance=a,hn(a);return}a=t.ownerDocument||t,o=F2(o),(l=Aa.get(l))&&Lp(o,l),a=a.createElement("link"),hn(a);var s=a;s._p=new Promise(function(u,_){s.onload=u,s.onerror=_}),Yo(a,"link",o),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&Ix)===dc&&(e.count++,n=qd.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}function r6(e,t){return e.stylesheets&&e.count===0&&oh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var o=setTimeout(function(){if(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},s8+t);0<e.imgBytes&&mm===0&&(mm=125*pS()*u8);var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>mm?50:c8)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(l)}}:null}function n5(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)oh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function qd(){this.count--,n5(this)}function i6(){this.imgCount--,n5(this)}function oh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pm=new Map,t.forEach(s6,e),pm=null,qd.call(e))}function s6(e,t){if(!(t.state.loading&Ra)){var n=pm.get(e);if(n)var o=n.get(Cy);else{n=new Map,pm.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<l.length;a++){var s=l[a];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),o=s)}o&&n.set(Cy,o)}l=t.instance,s=l.getAttribute("data-precedence"),a=n.get(s)||o,a===o&&n.set(Cy,l),n.set(s,l),this.count++,o=qd.bind(this),l.addEventListener("load",o),l.addEventListener("error",o),a?a.parentNode.insertBefore(l,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=Ra}}function c6(e,t,n,o,l,a,s,u,_){for(this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=uc,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=p(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=p(0),this.hiddenUpdates=p(null),this.identifierPrefix=o,this.onUncaughtError=l,this.onCaughtError=a,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.transitionTypes=null,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,e=this.pendingUpdatersLaneMap=[],t=0;31>t;t++)e.push(new Set);this._debugRootType=n?"hydrateRoot()":"createRoot()"}function o5(e,t,n,o,l,a,s,u,_,m,E,D){return e=new c6(e,t,n,s,_,m,E,D,u),t=z3,a===!0&&(t|=ll|Pa),t|=zt,a=H(3,null,null,t),e.current=a,a.stateNode=e,t=Uc(),ao(t),e.pooledCache=t,ao(t),a.memoizedState={element:o,isDehydrated:n,cache:t},Zm(a),e}function l5(e){return e?(e=Ki,e):Ki}function Hp(e,t,n,o,l,a){if(ol&&typeof ol.onScheduleFiberRoot=="function")try{ol.onScheduleFiberRoot(cu,o,n)}catch(s){Cr||(Cr=!0,console.error("React instrumentation encountered an error: %o",s))}l=l5(l),o.context===null?o.context=l:o.pendingContext=l,Sr&&Kl!==null&&!Xx&&(Xx=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,Ee(Kl)||"Unknown")),o=$i(t),o.payload={element:n},a=a===void 0?null:a,a!==null&&(typeof a!="function"&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",a),o.callback=a),n=Hi(e,o,t),n!==null&&(Ua(t,"root.render()",null),Pn(n,e,t),vd(n,e,t))}function a5(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Up(e,t){a5(e,t),(e=e.alternate)&&a5(e,t)}function r5(e){if(e.tag===13||e.tag===31){var t=xo(e,67108864);t!==null&&Pn(t,e,67108864),Up(e,67108864)}}function i5(e){if(e.tag===13||e.tag===31){var t=Wl(e);t=Ce(t);var n=xo(e,t);n!==null&&Pn(n,e,t),Up(e,t)}}function u6(){return Kl}function d6(e,t,n,o){var l=K.T;K.T=null;var a=fn.p;try{fn.p=xl,Ip(e,t,n,o)}finally{fn.p=a,K.T=l}}function f6(e,t,n,o){var l=K.T;K.T=null;var a=fn.p;try{fn.p=Qa,Ip(e,t,n,o)}finally{fn.p=a,K.T=l}}function Ip(e,t,n,o){if(Gu){var l=jp(o);if(l===null)xp(e,t,o,ym,n),c5(e,o);else if(_6(l,e,t,n,o))o.stopPropagation();else if(c5(e,o),t&4&&-1<f8.indexOf(e)){for(;l!==null;){var a=An(l);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var s=De(a.pendingLanes);if(s!==0){var u=a;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var _=1<<31-vl(s);u.entanglements[1]|=_,s&=~_}vr(a),(tn&(Eo|oa))===zo&&(Jh=eo()+vx,Ld(0,!1))}}break;case 31:case 13:u=xo(a,2),u!==null&&Pn(u,a,2),Jc(),Up(a,2)}if(a=jp(o),a===null&&xp(e,t,o,ym,n),a===l)break;l=a}l!==null&&o.stopPropagation()}else xp(e,t,o,null,n)}}function jp(e){return e=el(e),Yp(e)}function Yp(e){if(ym=null,e=Zn(e),e!==null){var t=ne(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ze(t),e!==null)return e;e=null}else if(n===31){if(e=G(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ym=e,null}function s5(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return xl;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return Qa;case"message":switch(k6()){case lg:return xl;case ag:return Qa;case su:case E6:return Er;case rg:return hh;default:return Er}default:return Er}}function c5(e,t){switch(e){case"focusin":case"focusout":hs=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":ps=null;break;case"pointerover":case"pointerout":jf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yf.delete(t.pointerId)}}function Vd(e,t,n,o,l,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:a,targetContainers:[l]},t!==null&&(t=An(t),t!==null&&r5(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function _6(e,t,n,o,l){switch(t){case"focusin":return hs=Vd(hs,e,t,n,o,l),!0;case"dragenter":return ms=Vd(ms,e,t,n,o,l),!0;case"mouseover":return ps=Vd(ps,e,t,n,o,l),!0;case"pointerover":var a=l.pointerId;return jf.set(a,Vd(jf.get(a)||null,e,t,n,o,l)),!0;case"gotpointercapture":return a=l.pointerId,Yf.set(a,Vd(Yf.get(a)||null,e,t,n,o,l)),!0}return!1}function u5(e){var t=Zn(e.target);if(t!==null){var n=ne(t);if(n!==null){if(t=n.tag,t===13){if(t=ze(n),t!==null){e.blockedOn=t,Ye(e.priority,function(){i5(n)});return}}else if(t===31){if(t=G(n),t!==null){e.blockedOn=t,Ye(e.priority,function(){i5(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jp(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n),l=o;Pd!==null&&console.error("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),Pd=l,n.target.dispatchEvent(o),Pd===null&&console.error("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),Pd=null}else return t=An(n),t!==null&&r5(t),e.blockedOn=n,!1;t.shift()}return!0}function d5(e,t,n){lh(e)&&n.delete(t)}function h6(){ky=!1,hs!==null&&lh(hs)&&(hs=null),ms!==null&&lh(ms)&&(ms=null),ps!==null&&lh(ps)&&(ps=null),jf.forEach(d5),Yf.forEach(d5)}function ah(e,t){e.blockedOn===t&&(e.blockedOn=null,ky||(ky=!0,io.unstable_scheduleCallback(io.unstable_NormalPriority,h6)))}function f5(e){bm!==e&&(bm=e,io.unstable_scheduleCallback(io.unstable_NormalPriority,function(){bm===e&&(bm=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],l=e[t+2];if(typeof o!="function"){if(Yp(o||n)===null)continue;break}var a=An(n);a!==null&&(e.splice(t,3),t-=3,n={pending:!0,data:l,method:n.method,action:o},Object.freeze(n),C0(a,n,o,l))}}))}function lu(e){function t(_){return ah(_,e)}hs!==null&&ah(hs,e),ms!==null&&ah(ms,e),ps!==null&&ah(ps,e),jf.forEach(t),Yf.forEach(t);for(var n=0;n<gs.length;n++){var o=gs[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<gs.length&&(n=gs[0],n.blockedOn===null);)u5(n),n.blockedOn===null&&gs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var l=n[o],a=n[o+1],s=l[wl]||null;if(typeof a=="function")s||f5(n);else if(s){var u=null;if(a&&a.hasAttribute("formAction")){if(l=a,s=a[wl]||null)u=s.formAction;else if(Yp(l)!==null)continue}else u=s.action;typeof u=="function"?n[o+1]=u:(n.splice(o,3),o-=3),f5(n)}}}function _5(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),o||setTimeout(n,20)}function n(){if(!o&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function qp(e){this._internalRoot=e}function rh(e){this._internalRoot=e}function h5(e){e[Pi]&&(e._reactRootContainer?console.error("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):console.error("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var io=sw(),Vp=$n(),m6=qf(),au=null,Xp=null,Nt=Object.assign,p6=Symbol.for("react.element"),wr=Symbol.for("react.transitional.element"),ru=Symbol.for("react.portal"),iu=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),Gp=Symbol.for("react.profiler"),Qp=Symbol.for("react.consumer"),Ga=Symbol.for("react.context"),sh=Symbol.for("react.forward_ref"),Pp=Symbol.for("react.suspense"),Fp=Symbol.for("react.suspense_list"),ch=Symbol.for("react.memo"),Hl=Symbol.for("react.lazy"),Wp=Symbol.for("react.activity"),g6=Symbol.for("react.legacy_hidden"),y6=Symbol.for("react.memo_cache_sentinel"),Zp=Symbol.for("react.view_transition"),b6=Symbol.for("react.recoverable"),m5=Symbol.iterator,v6=Symbol.for("react.client.reference"),Co=Array.isArray,K=Vp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fn=m6.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x6=Object.freeze({pending:!1,data:null,method:null,action:null}),Jp=[],Kp=[],li=-1,Gi=ee(null),Xd=ee(null),Qi=ee(null),uh=ee(null),Gd=0,p5,g5,y5,b5,v5,x5,w5;$o.__reactDisabledLog=!0;var eg,S5,tg=!1,ng=new(typeof WeakMap=="function"?WeakMap:Map),Kl=null,Sr=!1,va=Object.prototype.hasOwnProperty,og=io.unstable_scheduleCallback,w6=io.unstable_cancelCallback,S6=io.unstable_shouldYield,C6=io.unstable_requestPaint,eo=io.unstable_now,k6=io.unstable_getCurrentPriorityLevel,lg=io.unstable_ImmediatePriority,ag=io.unstable_UserBlockingPriority,su=io.unstable_NormalPriority,E6=io.unstable_LowPriority,rg=io.unstable_IdlePriority,T6=io.log,M6=io.unstable_setDisableYieldValue,cu=null,ol=null,Cr=!1,kr=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u",vl=Math.clz32?Math.clz32:Ie,R6=Math.log,A6=Math.LN2,dh=256,fh=262144,_h=4194304,xl=2,Qa=8,Er=32,hh=268435456,ai=Math.random().toString(36).slice(2),qo="__reactFiber$"+ai,wl="__reactProps$"+ai,Pi="__reactContainer$"+ai,C5="__reactEvents$"+ai,O6="__reactListeners$"+ai,D6="__reactHandles$"+ai,k5="__reactResources$"+ai,Qd="__reactMarker$"+ai,mh="__reactLoad$"+ai,E5=new Set,Ys={},ig={},N6={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},z6=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),T5={},M5={},sn=!1,L6=/[\n"\\]/g,R5=!1,A5=!1,O5=!1,D5=!1,N5=!1,z5=!1,L5=["value","defaultValue"],B5=!1,$5=/["'&<>\n\t]|^\s|\s$/,B6="address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(" "),H5="applet caption html table td th marquee object select template foreignObject desc title".split(" "),$6=H5.concat(["button"]),H6="dd dt li option optgroup p rp rt".split(" "),U5={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},ph={},sg={animation:"animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(" "),background:"backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(" "),backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:"borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(" "),borderBlock:"borderBlockEndColor borderBlockEndStyle borderBlockEndWidth borderBlockStartColor borderBlockStartStyle borderBlockStartWidth".split(" "),borderBlockColor:["borderBlockEndColor","borderBlockStartColor"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBlockStyle:["borderBlockEndStyle","borderBlockStartStyle"],borderBlockWidth:["borderBlockEndWidth","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInline:"borderInlineEndColor borderInlineEndStyle borderInlineEndWidth borderInlineStartColor borderInlineStartStyle borderInlineStartWidth".split(" "),borderInlineColor:["borderInlineEndColor","borderInlineStartColor"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderInlineStyle:["borderInlineEndStyle","borderInlineStartStyle"],borderInlineWidth:["borderInlineEndWidth","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],colorAdjust:["printColorAdjust"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],containIntrinsicSize:["containIntrinsicHeight","containIntrinsicWidth"],container:["containerName","containerType"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:"fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(" "),fontSynthesis:["fontSynthesisPosition","fontSynthesisSmallCaps","fontSynthesisStyle","fontSynthesisWeight"],fontVariant:"fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(" "),gap:["columnGap","rowGap"],grid:"gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(" "),gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],inset:["bottom","left","right","top"],insetBlock:["insetBlockEnd","insetBlockStart"],insetInline:["insetInlineEnd","insetInlineStart"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marginBlock:["marginBlockEnd","marginBlockStart"],marginInline:["marginInlineEnd","marginInlineStart"],marker:["markerEnd","markerMid","markerStart"],mask:"maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(" "),maskPosition:["maskPositionX","maskPositionY"],offset:["offsetAnchor","offsetDistance","offsetPath","offsetPosition","offsetRotate"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],paddingBlock:["paddingBlockEnd","paddingBlockStart"],paddingInline:["paddingInlineEnd","paddingInlineStart"],pageBreakAfter:["breakAfter"],pageBreakBefore:["breakBefore"],pageBreakInside:["breakInside"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],scrollMargin:["scrollMarginBottom","scrollMarginLeft","scrollMarginRight","scrollMarginTop"],scrollMarginBlock:["scrollMarginBlockEnd","scrollMarginBlockStart"],scrollMarginInline:["scrollMarginInlineEnd","scrollMarginInlineStart"],scrollPadding:["scrollPaddingBottom","scrollPaddingLeft","scrollPaddingRight","scrollPaddingTop"],scrollPaddingBlock:["scrollPaddingBlockEnd","scrollPaddingBlockStart"],scrollPaddingInline:["scrollPaddingInlineEnd","scrollPaddingInlineStart"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle","textDecorationThickness"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],textWrap:["textWrapMode","textWrapStyle"],transition:["transitionBehavior","transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],verticalAlign:["alignmentBaseline","baselineShift","baselineSource"],whiteSpace:["textWrapMode","whiteSpaceCollapse"],wordWrap:["overflowWrap"]},I5=/([A-Z])/g,j5=/^ms-/,U6=/^(?:webkit|moz|o)[A-Z]/,I6=/^-ms-/,j6=/-(.)/g,Y5=/;\s*$/,uu={},cg={},q5=!1,V5=!1,X5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")),gh="http://www.w3.org/1998/Math/MathML",du="http://www.w3.org/2000/svg",Y6=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yh={accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",credentialless:"credentialless",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",fetchpriority:"fetchPriority",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",inert:"inert",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",masktype:"maskType",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",popover:"popover",popovertarget:"popoverTarget",popovertargetaction:"popoverTargetAction",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",transformorigin:"transformOrigin","transform-origin":"transformOrigin",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},G5={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},fu={},q6=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),V6=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Q5=!1,Sl={},P5=/^on./,X6=/^on[^A-Z]/,G6=RegExp("^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Q6=RegExp("^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),P6=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,Pd=null,_u=null,hu=null,ug=!1,Tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dg=!1;if(Tr)try{var Fd={};Object.defineProperty(Fd,"passive",{get:function(){dg=!0}}),window.addEventListener("test",Fd,Fd),window.removeEventListener("test",Fd,Fd)}catch{dg=!1}var Fi=null,fg=null,bh=null,Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vh=tl(Wi),Wd=Nt({},Wi,{view:0,detail:0}),F6=tl(Wd),_g,hg,Zd,xh=Nt({},Wd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:c_,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zd&&(Zd&&e.type==="mousemove"?(_g=e.screenX-Zd.screenX,hg=e.screenY-Zd.screenY):hg=_g=0,Zd=e),_g)},movementY:function(e){return"movementY"in e?e.movementY:hg}}),F5=tl(xh),W6=Nt({},xh,{dataTransfer:0}),Z6=tl(W6),J6=Nt({},Wd,{relatedTarget:0}),mg=tl(J6),K6=Nt({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),e3=tl(K6),t3=Nt({},Wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n3=tl(t3),o3=Nt({},Wi,{data:0}),W5=tl(o3),l3=W5,a3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},s3=Nt({},Wd,{key:function(e){if(e.key){var t=a3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:c_,charCode:function(e){return e.type==="keypress"?Cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c3=tl(s3),u3=Nt({},xh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Z5=tl(u3),d3=Nt({},Wi,{submitter:0}),f3=tl(d3),_3=Nt({},Wd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:c_}),h3=tl(_3),m3=Nt({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),p3=tl(m3),g3=Nt({},xh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),y3=tl(g3),b3=Nt({},Wi,{newState:0,oldState:0,source:0}),v3=tl(b3),x3=[9,13,27,32],J5=229,pg=Tr&&"CompositionEvent"in window,Jd=null;Tr&&"documentMode"in document&&(Jd=document.documentMode);var w3=Tr&&"TextEvent"in window&&!Jd,K5=Tr&&(!pg||Jd&&8<Jd&&11>=Jd),ev=32,tv=String.fromCharCode(ev),nv=!1,mu=!1,S3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Kd=null,ef=null,ov=!1;Tr&&(ov=Ti("input")&&(!document.documentMode||9<document.documentMode));var Cl=typeof Object.is=="function"?Object.is:f_,C3=Tr&&"documentMode"in document&&11>=document.documentMode,pu=null,gg=null,tf=null,yg=!1,gu={animationend:ur("Animation","AnimationEnd"),animationiteration:ur("Animation","AnimationIteration"),animationstart:ur("Animation","AnimationStart"),transitionrun:ur("Transition","TransitionRun"),transitionstart:ur("Transition","TransitionStart"),transitioncancel:ur("Transition","TransitionCancel"),transitionend:ur("Transition","TransitionEnd")},bg={},lv={};Tr&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete gu.animationend.animation,delete gu.animationiteration.animation,delete gu.animationstart.animation),"TransitionEvent"in window||delete gu.transitionend.transition);var av=fl("animationend"),rv=fl("animationiteration"),iv=fl("animationstart"),k3=fl("transitionrun"),E3=fl("transitionstart"),T3=fl("transitioncancel"),sv=fl("transitionend"),cv=new Map,vg="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vg.push("scrollEnd");var M3=0,uv=0;if(typeof performance=="object"&&typeof performance.now=="function")var R3=performance,dv=function(){return R3.now()};else{var A3=Date;dv=function(){return A3.now()}}var xg=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},O3="This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.",wh=0,wg=1,Sg=2,Cg=3,xa=100,Sh="-\xA0",Ch="+\xA0",fv="\u2007\xA0",Bn=typeof console<"u"&&typeof console.timeStamp=="function"&&typeof performance<"u"&&typeof performance.measure=="function",Ul="Components \u269B",qt="Scheduler \u269B",Qt="Blocking",Zi=!1,ri={color:"primary",properties:null,tooltipText:"",track:Ul},Ji={start:-0,end:-0,detail:{devtools:ri}},D3=["Changed Props",""],_v="This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.",N3=["Changed Props",_v],nf=1,ii=2,wa=[],yu=0,kg=0,Ki={};Object.freeze(Ki);var si=null,bu=null,ht=0,z3=1,zt=2,ll=8,Pa=16,hv=32,mv=!1;try{var pv=Object.preventExtensions({})}catch{mv=!0}var Eg=new WeakMap,vu=[],xu=0,kh=null,of=0,Sa=[],Ca=0,qs=null,ci=1,ui="",Ao=null,On=null,Lt=!1,Mr=!1,ea=null,es=null,ka=!1,Tg=Error("Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),Mg=ee(null),Rg=ee(null),gv={},Eh=null,wu=null,Su=!1,L3=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},B3=io.unstable_scheduleCallback,$3=io.unstable_NormalPriority,so={$$typeof:Ga,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},lf=null,to=io.unstable_now,Th=console.createTask?console.createTask:function(){return null},af=1,Mh=2,Oo=-0,di=-0,Fa=-0,fi=null,kl=-1.1,Vs=-0,Yn=-0,at=-1.1,ct=-1.1,Un=null,Fn=!1,ts=-0,Rr=-1.1,rf=null,ns=0,Ag=null,Og=null,Xs=-1.1,sf=null,Cu=-1.1,Rh=-1.1,Wa=-0,_i=-1.1,Ea=-1.1,Dg=0,cf=null,yv=null,bv=null,os=-1.1,Gs=null,ls=-1.1,Ah=-1.1,Ng=-0,zg=-0,Qs=0,Il=null,vv=0,uf=-1.1,Oh=!1,Dh=!1,df=null,Lg=0,as=0,ku=null,xv=K.S;K.S=function(e,t){if(yx=eo(),typeof t=="object"&&t!==null&&typeof t.then=="function"){if(0>_i&&0>Ea){_i=to();var n=Ud(),o=Hd();(n!==ls||o!==Gs)&&(ls=-1.1),os=n,Gs=o}ft(e,t)}if(lf!==null)for(n=Iu;n!==null;)bd(n,lf),n=n.next;if(n=e.types,n!==null){for(o=Iu;o!==null;)bd(o,n),o=o.next;if(as!==0){o=lf,o===null&&(o=lf=[]);for(var l=0;l<n.length;l++){var a=n[l];o.indexOf(a)===-1&&o.push(a)}}}xv!==null&&xv(e,t)};var Ps=ee(null),Za={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},ff=[],_f=[],hf=[],mf=[],pf=[],gf=[],Fs=new Set;Za.recordUnsafeLifecycleWarnings=function(e,t){Fs.has(e.type)||(typeof t.componentWillMount=="function"&&t.componentWillMount.__suppressDeprecationWarning!==!0&&ff.push(e),e.mode&ll&&typeof t.UNSAFE_componentWillMount=="function"&&_f.push(e),typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps.__suppressDeprecationWarning!==!0&&hf.push(e),e.mode&ll&&typeof t.UNSAFE_componentWillReceiveProps=="function"&&mf.push(e),typeof t.componentWillUpdate=="function"&&t.componentWillUpdate.__suppressDeprecationWarning!==!0&&pf.push(e),e.mode&ll&&typeof t.UNSAFE_componentWillUpdate=="function"&&gf.push(e))},Za.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;0<ff.length&&(ff.forEach(function(u){e.add(Ee(u)||"Component"),Fs.add(u.type)}),ff=[]);var t=new Set;0<_f.length&&(_f.forEach(function(u){t.add(Ee(u)||"Component"),Fs.add(u.type)}),_f=[]);var n=new Set;0<hf.length&&(hf.forEach(function(u){n.add(Ee(u)||"Component"),Fs.add(u.type)}),hf=[]);var o=new Set;0<mf.length&&(mf.forEach(function(u){o.add(Ee(u)||"Component"),Fs.add(u.type)}),mf=[]);var l=new Set;0<pf.length&&(pf.forEach(function(u){l.add(Ee(u)||"Component"),Fs.add(u.type)}),pf=[]);var a=new Set;if(0<gf.length&&(gf.forEach(function(u){a.add(Ee(u)||"Component"),Fs.add(u.type)}),gf=[]),0<t.size){var s=R(t);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,s)}0<o.size&&(s=R(o),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,s)),0<a.size&&(s=R(a),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,s)),0<e.size&&(s=R(e),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,s)),0<n.size&&(s=R(n),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,s)),0<l.size&&(s=R(l),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,s))};var Nh=new Map,wv=new Set;Za.recordLegacyContextWarning=function(e,t){for(var n=null,o=e;o!==null;)o.mode&ll&&(n=o),o=o.return;n===null?console.error("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."):!wv.has(e.type)&&(o=Nh.get(n),e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext=="function")&&(o===void 0&&(o=[],Nh.set(n,o)),o.push(e))},Za.flushLegacyContextWarning=function(){Nh.forEach(function(e){if(e.length!==0){var t=e[0],n=new Set;e.forEach(function(l){n.add(Ee(l)||"Component"),wv.add(l.type)});var o=R(n);ie(t,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,o)})}})},Za.discardPendingWarnings=function(){ff=[],_f=[],hf=[],mf=[],pf=[],gf=[],Nh=new Map};var H3="",Sv={react_stack_bottom_frame:function(e,t,n){var o=Sr;Sr=!0;try{return e(t,n)}finally{Sr=o}}},Bg=Sv.react_stack_bottom_frame.bind(Sv),Cv={react_stack_bottom_frame:function(e){var t=Sr;Sr=!0;try{return e.render()}finally{Sr=t}}},kv=Cv.react_stack_bottom_frame.bind(Cv),Ev={react_stack_bottom_frame:function(e,t){try{t.componentDidMount()}catch(n){dn(e,e.return,n)}}},$g=Ev.react_stack_bottom_frame.bind(Ev),Tv={react_stack_bottom_frame:function(e,t,n,o,l){try{t.componentDidUpdate(n,o,l)}catch(a){dn(e,e.return,a)}}},Mv=Tv.react_stack_bottom_frame.bind(Tv),Rv={react_stack_bottom_frame:function(e,t){var n=t.stack;e.componentDidCatch(t.value,{componentStack:n!==null?n:""})}},U3=Rv.react_stack_bottom_frame.bind(Rv),Av={react_stack_bottom_frame:function(e,t,n){try{n.componentWillUnmount()}catch(o){dn(e,t,o)}}},Ov=Av.react_stack_bottom_frame.bind(Av),Dv={react_stack_bottom_frame:function(e){var t=e.create;return e=e.inst,t=t(),e.destroy=t}},I3=Dv.react_stack_bottom_frame.bind(Dv),Nv={react_stack_bottom_frame:function(e,t,n){try{n()}catch(o){dn(e,t,o)}}},j3=Nv.react_stack_bottom_frame.bind(Nv),zv={react_stack_bottom_frame:function(e){var t=e._init;return t(e._payload)}},Y3=zv.react_stack_bottom_frame.bind(zv),Eu=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),Hg=Error("Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."),zh=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Lh={then:function(){console.error('Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.')}},Ws=null,Bh=null,Ug=!1,Zs=null,yf=!1,Tu=null,bf=0,Vt=null,Ig,Lv=Ig=!1,Bv={},$v={},Hv={};L=function(e,t,n){if(n!==null&&typeof n=="object"&&n._store&&(!n._store.validated&&n.key==null||n._store.validated===2)){if(typeof n._store!="object")throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");n._store.validated=1;var o=Ee(e),l=o||"null";if(!Bv[l]){Bv[l]=!0,n=n._owner,e=e._debugOwner;var a="";e&&typeof e.tag=="number"&&(l=Ee(e))&&(a=`

Check the render method of \``+l+"`."),a||o&&(a=`

Check the top-level render call using <`+o+">.");var s="";n!=null&&e!==n&&(o=null,typeof n.tag=="number"?o=Ee(n):typeof n.name=="string"&&(o=n.name),o&&(s=" It was passed a child from "+o+".")),ie(t,function(){console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',a,s)})}}};var Js=r1(!0),Uv=r1(!1),Iv=0,jv=1,Yv=2,jg=3,rs=!1,qv=!1,Yg=null,qg=!1,is=ee(null),$h=ee(0),Vo=ee(null),al=null,Mu=1,vf=2,Xo=ee(0),xf=0,Ta=1,El=2,ta=4,rl=8,Ru,Vv=new Set,Xv=new Set,Vg=new Set,Gv=new Set,hi=0,gt=null,Tn=null,co=null,Hh=!1,Au=!1,Ks=!1,Uh=0,wf=0,Ar=null,q3=0,V3=25,W=null,Ma=null,mi=-1,Sf=!1,Ih={readContext:kn,use:ji,useCallback:Kn,useContext:Kn,useEffect:Kn,useImperativeHandle:Kn,useLayoutEffect:Kn,useInsertionEffect:Kn,useMemo:Kn,useReducer:Kn,useRef:Kn,useState:Kn,useDebugValue:Kn,useDeferredValue:Kn,useTransition:Kn,useSyncExternalStore:Kn,useId:Kn,useHostTransitionStatus:Kn,useFormState:Kn,useActionState:Kn,useOptimistic:Kn,useMemoCache:Kn,useCacheRefresh:Kn,useEffectEvent:Kn},Xg=null,Qv=null,Gg=null,Pv=null,Or=null,Ja=null,jh=null;Xg={readContext:function(e){return kn(e)},use:ji,useCallback:function(e,t){return W="useCallback",Yt(),Yc(t),v0(e,t)},useContext:function(e){return W="useContext",Yt(),kn(e)},useEffect:function(e,t){return W="useEffect",Yt(),Yc(t),A_(e,t)},useImperativeHandle:function(e,t,n){return W="useImperativeHandle",Yt(),Yc(n),b0(e,t,n)},useInsertionEffect:function(e,t){W="useInsertionEffect",Yt(),Yc(t),Bs(4,El,e,t)},useLayoutEffect:function(e,t){return W="useLayoutEffect",Yt(),Yc(t),y0(e,t)},useMemo:function(e,t){W="useMemo",Yt(),Yc(t);var n=K.H;K.H=Or;try{return x0(e,t)}finally{K.H=n}},useReducer:function(e,t,n){W="useReducer",Yt();var o=K.H;K.H=Or;try{return c0(e,t,n)}finally{K.H=o}},useRef:function(e){return W="useRef",Yt(),p0(e)},useState:function(e){W="useState",Yt();var t=K.H;K.H=Or;try{return _0(e)}finally{K.H=t}},useDebugValue:function(){W="useDebugValue",Yt()},useDeferredValue:function(e,t){return W="useDeferredValue",Yt(),w0(e,t)},useTransition:function(){return W="useTransition",Yt(),k0()},useSyncExternalStore:function(e,t,n){return W="useSyncExternalStore",Yt(),d0(e,t,n)},useId:function(){return W="useId",Yt(),E0()},useFormState:function(e,t){return W="useFormState",Yt(),k_(),Vc(e,t)},useActionState:function(e,t){return W="useActionState",Yt(),Vc(e,t)},useOptimistic:function(e){return W="useOptimistic",Yt(),h0(e)},useHostTransitionStatus:$s,useMemoCache:Ls,useCacheRefresh:function(){return W="useCacheRefresh",Yt(),T0()},useEffectEvent:function(e){return W="useEffectEvent",Yt(),g0(e)}},Qv={readContext:function(e){return kn(e)},use:ji,useCallback:function(e,t){return W="useCallback",xe(),v0(e,t)},useContext:function(e){return W="useContext",xe(),kn(e)},useEffect:function(e,t){return W="useEffect",xe(),A_(e,t)},useImperativeHandle:function(e,t,n){return W="useImperativeHandle",xe(),b0(e,t,n)},useInsertionEffect:function(e,t){W="useInsertionEffect",xe(),Bs(4,El,e,t)},useLayoutEffect:function(e,t){return W="useLayoutEffect",xe(),y0(e,t)},useMemo:function(e,t){W="useMemo",xe();var n=K.H;K.H=Or;try{return x0(e,t)}finally{K.H=n}},useReducer:function(e,t,n){W="useReducer",xe();var o=K.H;K.H=Or;try{return c0(e,t,n)}finally{K.H=o}},useRef:function(e){return W="useRef",xe(),p0(e)},useState:function(e){W="useState",xe();var t=K.H;K.H=Or;try{return _0(e)}finally{K.H=t}},useDebugValue:function(){W="useDebugValue",xe()},useDeferredValue:function(e,t){return W="useDeferredValue",xe(),w0(e,t)},useTransition:function(){return W="useTransition",xe(),k0()},useSyncExternalStore:function(e,t,n){return W="useSyncExternalStore",xe(),d0(e,t,n)},useId:function(){return W="useId",xe(),E0()},useActionState:function(e,t){return W="useActionState",xe(),Vc(e,t)},useFormState:function(e,t){return W="useFormState",xe(),k_(),Vc(e,t)},useOptimistic:function(e){return W="useOptimistic",xe(),h0(e)},useHostTransitionStatus:$s,useMemoCache:Ls,useCacheRefresh:function(){return W="useCacheRefresh",xe(),T0()},useEffectEvent:function(e){return W="useEffectEvent",xe(),g0(e)}},Gg={readContext:function(e){return kn(e)},use:ji,useCallback:function(e,t){return W="useCallback",xe(),N_(e,t)},useContext:function(e){return W="useContext",xe(),kn(e)},useEffect:function(e,t){W="useEffect",xe(),$l(2048,rl,e,t)},useImperativeHandle:function(e,t,n){return W="useImperativeHandle",xe(),D_(e,t,n)},useInsertionEffect:function(e,t){return W="useInsertionEffect",xe(),$l(4,El,e,t)},useLayoutEffect:function(e,t){return W="useLayoutEffect",xe(),$l(4,ta,e,t)},useMemo:function(e,t){W="useMemo",xe();var n=K.H;K.H=Ja;try{return z_(e,t)}finally{K.H=n}},useReducer:function(e,t,n){W="useReducer",xe();var o=K.H;K.H=Ja;try{return qc(e,t,n)}finally{K.H=o}},useRef:function(){return W="useRef",xe(),mn().memoizedState},useState:function(){W="useState",xe();var e=K.H;K.H=Ja;try{return qc(qa)}finally{K.H=e}},useDebugValue:function(){W="useDebugValue",xe()},useDeferredValue:function(e,t){return W="useDeferredValue",xe(),M1(e,t)},useTransition:function(){return W="useTransition",xe(),z1()},useSyncExternalStore:function(e,t,n){return W="useSyncExternalStore",xe(),T_(e,t,n)},useId:function(){return W="useId",xe(),mn().memoizedState},useFormState:function(e){return W="useFormState",xe(),k_(),M_(e)},useActionState:function(e){return W="useActionState",xe(),M_(e)},useOptimistic:function(e,t){return W="useOptimistic",xe(),y1(e,t)},useHostTransitionStatus:$s,useMemoCache:Ls,useCacheRefresh:function(){return W="useCacheRefresh",xe(),mn().memoizedState},useEffectEvent:function(e){return W="useEffectEvent",xe(),O_(e)}},Pv={readContext:function(e){return kn(e)},use:ji,useCallback:function(e,t){return W="useCallback",xe(),N_(e,t)},useContext:function(e){return W="useContext",xe(),kn(e)},useEffect:function(e,t){W="useEffect",xe(),$l(2048,rl,e,t)},useImperativeHandle:function(e,t,n){return W="useImperativeHandle",xe(),D_(e,t,n)},useInsertionEffect:function(e,t){return W="useInsertionEffect",xe(),$l(4,El,e,t)},useLayoutEffect:function(e,t){return W="useLayoutEffect",xe(),$l(4,ta,e,t)},useMemo:function(e,t){W="useMemo",xe();var n=K.H;K.H=jh;try{return z_(e,t)}finally{K.H=n}},useReducer:function(e,t,n){W="useReducer",xe();var o=K.H;K.H=jh;try{return kd(e,t,n)}finally{K.H=o}},useRef:function(){return W="useRef",xe(),mn().memoizedState},useState:function(){W="useState",xe();var e=K.H;K.H=jh;try{return kd(qa)}finally{K.H=e}},useDebugValue:function(){W="useDebugValue",xe()},useDeferredValue:function(e,t){return W="useDeferredValue",xe(),R1(e,t)},useTransition:function(){return W="useTransition",xe(),L1()},useSyncExternalStore:function(e,t,n){return W="useSyncExternalStore",xe(),T_(e,t,n)},useId:function(){return W="useId",xe(),mn().memoizedState},useFormState:function(e){return W="useFormState",xe(),k_(),R_(e)},useActionState:function(e){return W="useActionState",xe(),R_(e)},useOptimistic:function(e,t){return W="useOptimistic",xe(),v1(e,t)},useHostTransitionStatus:$s,useMemoCache:Ls,useCacheRefresh:function(){return W="useCacheRefresh",xe(),mn().memoizedState},useEffectEvent:function(e){return W="useEffectEvent",xe(),O_(e)}},Or={readContext:function(e){return w(),kn(e)},use:function(e){return v(),ji(e)},useCallback:function(e,t){return W="useCallback",v(),Yt(),v0(e,t)},useContext:function(e){return W="useContext",v(),Yt(),kn(e)},useEffect:function(e,t){return W="useEffect",v(),Yt(),A_(e,t)},useImperativeHandle:function(e,t,n){return W="useImperativeHandle",v(),Yt(),b0(e,t,n)},useInsertionEffect:function(e,t){W="useInsertionEffect",v(),Yt(),Bs(4,El,e,t)},useLayoutEffect:function(e,t){return W="useLayoutEffect",v(),Yt(),y0(e,t)},useMemo:function(e,t){W="useMemo",v(),Yt();var n=K.H;K.H=Or;try{return x0(e,t)}finally{K.H=n}},useReducer:function(e,t,n){W="useReducer",v(),Yt();var o=K.H;K.H=Or;try{return c0(e,t,n)}finally{K.H=o}},useRef:function(e){return W="useRef",v(),Yt(),p0(e)},useState:function(e){W="useState",v(),Yt();var t=K.H;K.H=Or;try{return _0(e)}finally{K.H=t}},useDebugValue:function(){W="useDebugValue",v(),Yt()},useDeferredValue:function(e,t){return W="useDeferredValue",v(),Yt(),w0(e,t)},useTransition:function(){return W="useTransition",v(),Yt(),k0()},useSyncExternalStore:function(e,t,n){return W="useSyncExternalStore",v(),Yt(),d0(e,t,n)},useId:function(){return W="useId",v(),Yt(),E0()},useFormState:function(e,t){return W="useFormState",v(),Yt(),Vc(e,t)},useActionState:function(e,t){return W="useActionState",v(),Yt(),Vc(e,t)},useOptimistic:function(e){return W="useOptimistic",v(),Yt(),h0(e)},useMemoCache:function(e){return v(),Ls(e)},useHostTransitionStatus:$s,useCacheRefresh:function(){return W="useCacheRefresh",Yt(),T0()},useEffectEvent:function(e){return W="useEffectEvent",v(),Yt(),g0(e)}},Ja={readContext:function(e){return w(),kn(e)},use:function(e){return v(),ji(e)},useCallback:function(e,t){return W="useCallback",v(),xe(),N_(e,t)},useContext:function(e){return W="useContext",v(),xe(),kn(e)},useEffect:function(e,t){W="useEffect",v(),xe(),$l(2048,rl,e,t)},useImperativeHandle:function(e,t,n){return W="useImperativeHandle",v(),xe(),D_(e,t,n)},useInsertionEffect:function(e,t){return W="useInsertionEffect",v(),xe(),$l(4,El,e,t)},useLayoutEffect:function(e,t){return W="useLayoutEffect",v(),xe(),$l(4,ta,e,t)},useMemo:function(e,t){W="useMemo",v(),xe();var n=K.H;K.H=Ja;try{return z_(e,t)}finally{K.H=n}},useReducer:function(e,t,n){W="useReducer",v(),xe();var o=K.H;K.H=Ja;try{return qc(e,t,n)}finally{K.H=o}},useRef:function(){return W="useRef",v(),xe(),mn().memoizedState},useState:function(){W="useState",v(),xe();var e=K.H;K.H=Ja;try{return qc(qa)}finally{K.H=e}},useDebugValue:function(){W="useDebugValue",v(),xe()},useDeferredValue:function(e,t){return W="useDeferredValue",v(),xe(),M1(e,t)},useTransition:function(){return W="useTransition",v(),xe(),z1()},useSyncExternalStore:function(e,t,n){return W="useSyncExternalStore",v(),xe(),T_(e,t,n)},useId:function(){return W="useId",v(),xe(),mn().memoizedState},useFormState:function(e){return W="useFormState",v(),xe(),M_(e)},useActionState:function(e){return W="useActionState",v(),xe(),M_(e)},useOptimistic:function(e,t){return W="useOptimistic",v(),xe(),y1(e,t)},useMemoCache:function(e){return v(),Ls(e)},useHostTransitionStatus:$s,useCacheRefresh:function(){return W="useCacheRefresh",xe(),mn().memoizedState},useEffectEvent:function(e){return W="useEffectEvent",v(),xe(),O_(e)}},jh={readContext:function(e){return w(),kn(e)},use:function(e){return v(),ji(e)},useCallback:function(e,t){return W="useCallback",v(),xe(),N_(e,t)},useContext:function(e){return W="useContext",v(),xe(),kn(e)},useEffect:function(e,t){W="useEffect",v(),xe(),$l(2048,rl,e,t)},useImperativeHandle:function(e,t,n){return W="useImperativeHandle",v(),xe(),D_(e,t,n)},useInsertionEffect:function(e,t){return W="useInsertionEffect",v(),xe(),$l(4,El,e,t)},useLayoutEffect:function(e,t){return W="useLayoutEffect",v(),xe(),$l(4,ta,e,t)},useMemo:function(e,t){W="useMemo",v(),xe();var n=K.H;K.H=Ja;try{return z_(e,t)}finally{K.H=n}},useReducer:function(e,t,n){W="useReducer",v(),xe();var o=K.H;K.H=Ja;try{return kd(e,t,n)}finally{K.H=o}},useRef:function(){return W="useRef",v(),xe(),mn().memoizedState},useState:function(){W="useState",v(),xe();var e=K.H;K.H=Ja;try{return kd(qa)}finally{K.H=e}},useDebugValue:function(){W="useDebugValue",v(),xe()},useDeferredValue:function(e,t){return W="useDeferredValue",v(),xe(),R1(e,t)},useTransition:function(){return W="useTransition",v(),xe(),L1()},useSyncExternalStore:function(e,t,n){return W="useSyncExternalStore",v(),xe(),T_(e,t,n)},useId:function(){return W="useId",v(),xe(),mn().memoizedState},useFormState:function(e){return W="useFormState",v(),xe(),R_(e)},useActionState:function(e){return W="useActionState",v(),xe(),R_(e)},useOptimistic:function(e,t){return W="useOptimistic",v(),xe(),v1(e,t)},useMemoCache:function(e){return v(),Ls(e)},useHostTransitionStatus:$s,useCacheRefresh:function(){return W="useCacheRefresh",xe(),mn().memoizedState},useEffectEvent:function(e){return W="useEffectEvent",v(),xe(),O_(e)}};var Fv={},Wv=new Set,Zv=new Set,Jv=new Set,Kv=new Set,ex=new Set,tx=new Set,nx=new Set,ox=new Set,lx=new Set,ax=new Set;Object.freeze(Fv);var Qg={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=Wl(e),l=$i(o);l.payload=t,n!=null&&(R0(n),l.callback=n),t=Hi(e,l,o),t!==null&&(Ua(o,"this.setState()",e),Pn(t,e,o),vd(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=Wl(e),l=$i(o);l.tag=jv,l.payload=t,n!=null&&(R0(n),l.callback=n),t=Hi(e,l,o),t!==null&&(Ua(o,"this.replaceState()",e),Pn(t,e,o),vd(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wl(e),o=$i(n);o.tag=Yv,t!=null&&(R0(t),o.callback=t),t=Hi(e,o,n),t!==null&&(Ua(n,"this.forceUpdate()",e),Pn(t,e,n),vd(t,e,n))}},Ou=null,Pg=null,Fg=Error("This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."),no=!1,rx={},ix={},sx={},cx={},Du=!1,ux={},Wg={},dx={},Zg={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},fx=!1,_x=null;_x=new Set;var Yh=!1,na=null,Dr=null,jl=0,qh=new Map,hx={},Cf=0,Jg=1,Vh=2,Do=!1,pn=!1,Nr=!1,Kg=!1,mx=typeof WeakSet=="function"?WeakSet:Set,No=null,Nu=null,zu=null,zr=!1,kf=!1,Xh=!1,ey=!1,uo=null,Yl=!1,Ka=null,ko=!1,ec=8192,X3={getCacheForType:function(e){var t=kn(so),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return kn(so).controller.signal},getOwner:function(){return Kl}};if(typeof Symbol=="function"&&Symbol.for){var Ef=Symbol.for;Ef("selector.component"),Ef("selector.has_pseudo_class"),Ef("selector.role"),Ef("selector.test_id"),Ef("selector.text")}var G3=[],Q3=typeof WeakMap=="function"?WeakMap:Map,zo=0,Eo=2,oa=4,pi=0,Tf=1,tc=2,Gh=3,ss=4,Mf=6,px=5,tn=zo,Mn=null,Ut=null,Et=0,ql=0,Qh=1,nc=2,Rf=3,gx=4,ty=5,Af=6,Ph=7,ny=8,oc=9,gn=ql,la=null,gi=!1,Lu=!1,oy=!1,Lr=0,qn=pi,cs=0,us=0,Fh=0,Vl=0,lc=0,Of=null,Tl=null,Wh=!1,Zh=0,yx=0,bx=300,Jh=1/0,vx=500,Df=null,Wn=null,ds=null,Kh=0,Nf=1,ly=2,xx=3,Br=0,wx=1,Sx=2,ay=3,ry=4,em=5,Vn=0,er=null,ac=null,Xl=0,iy=0,tm=-0,sy=null,Cx=null,Bu=null,$u=null,Hu=null,nm=null,aa=Kh,cy=null,P3=50,zf=0,om=null,uy=!1,lm=!1,F3=50,rc=0,Lf=null,Uu=!1,kx=!1,am=null,Ex=!1,Tx=new Set,W3={},Iu=null,ju=null,dy=!1,fy=!1,rm=!1,_y=!1,fs=0,hy={};(function(){for(var e=0;e<vg.length;e++){var t=vg[e],n=t.toLowerCase();t=t[0].toUpperCase()+t.slice(1),go(n,"on"+t)}go(av,"onAnimationEnd"),go(rv,"onAnimationIteration"),go(iv,"onAnimationStart"),go("dblclick","onDoubleClick"),go("focusin","onFocus"),go("focusout","onBlur"),go(k3,"onTransitionRun"),go(E3,"onTransitionStart"),go(T3,"onTransitionCancel"),go(sv,"onTransitionEnd")})(),ia("onMouseEnter",["mouseout","mouseover"]),ia("onMouseLeave",["mouseout","mouseover"]),ia("onPointerEnter",["pointerout","pointerover"]),ia("onPointerLeave",["pointerout","pointerover"]),Ql("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ql("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ql("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ql("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ql("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ql("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),my=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bf)),im="_reactListening"+Math.random().toString(36).slice(2),Mx=!1,Rx=!1,sm=!1,Ax=!1,cm=!1,um=!1,Ox=!1,dm={},Z3=/\r\n?/g,J3=/\u0000|\uFFFD/g,ic="http://www.w3.org/1999/xlink",py="http://www.w3.org/XML/1998/namespace",K3={},e8="javascript:throw new Error('React form unexpectedly submitted.')",t8="suppressHydrationWarning",sc="&",fm="/&",$f="$",Hf="/$",_s="$?",cc="$~",Yu="$!",n8="html",o8="body",l8="head",gy="F!",Dx="F",Nx="loading",zx="style",yi=0,qu=1,_m=2,yy=null,by=null,Lx=!1,Bx={dialog:!0,webview:!0},vy=null,Uf=void 0,xy=typeof setTimeout=="function"?setTimeout:void 0,a8=typeof clearTimeout=="function"?clearTimeout:void 0,uc=-1,$x=typeof Promise=="function"?Promise:void 0,Hx=typeof requestAnimationFrame=="function"?requestAnimationFrame:xy,r8=typeof queueMicrotask=="function"?queueMicrotask:typeof $x<"u"?function(e){return $x.resolve(null).then(e).catch(bS)}:xy,i8=500;js.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:Nt({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},js.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),o=[],l=0;l<n.length;l++){var a=n[l].effect;a!==null&&a.target===e&&a.pseudoElement===t&&o.push(n[l])}return o},js.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},Zl.prototype.addEventListener=function(e,t,n){var o=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(o=n.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(B2(a,e,t,n)===-1){var s=this,u=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(u=function(_){s.removeEventListener(e,t,n),typeof t=="function"?t.call(this,_):t.handleEvent(_)}),o!==null&&(l=s.removeEventListener.bind(s,e,t,n),o.addEventListener("abort",l,{once:!0}),l=o.removeEventListener.bind(o,"abort",l)),o=tu(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:u,cleanup:l}),ke(this._fragmentFiber,HS,e,u,o)}this._eventListeners=a}},Zl.prototype.removeEventListener=function(e,t,n){var o=this._eventListeners;if(o!==null&&(t=B2(o,e,t,n),t!==-1)){var l=o[t];n=l.attachedListener;var a=l.cleanup;l=tu(l.optionsOrUseCapture),ke(this._fragmentFiber,US,e,n,l),o.splice(t,1),a!==null&&a()}},Zl.prototype.dispatchEvent=function(e){var t=fe(this._fragmentFiber);if(t===null)return!0;t=Re(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var o=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var a=n[l];o.addEventListener(a.type,a.attachedListener,tu(a.optionsOrUseCapture))}if(t.appendChild(o),e=o.dispatchEvent(e),n)for(l=0;l<n.length;l++)a=n[l],o.removeEventListener(a.type,a.attachedListener,tu(a.optionsOrUseCapture));return t.removeChild(o),e}return t.dispatchEvent(e)},Zl.prototype.focus=function(e){it(this._fragmentFiber.child,!0,$2,e,void 0,void 0)},Zl.prototype.focusLast=function(e){var t=[];it(this._fragmentFiber.child,!0,Rp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!$2(t[n],e);n--);},Zl.prototype.blur=function(){var e=fe(this._fragmentFiber);e!==null&&(e=Re(e),e=$d(e).activeElement,e!==null&&ke(this._fragmentFiber,IS,e))},Zl.prototype.observeUsing=function(e){var t=!1,n=!1;ke(this._fragmentFiber,function(o){if(o.tag===6)t=!0;else return n=!0;return!1}),t&&!n&&console.error("observeUsing() was called on a FragmentInstance with only text children. Observers do not work on text nodes."),this._observers===null&&(this._observers=new Set),this._observers.add(e),ke(this._fragmentFiber,jS,e)},Zl.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),ke(this._fragmentFiber,YS,e);for(var n=t=0;n<tr.length;n++){var o=tr[n];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):tr[t++]=o}tr.length=t}else console.error("You are calling unobserveUsing() with an observer that is not being observed with this fragment instance. First attach the observer with observeUsing()")};var tr=[],wy=!1;Zl.prototype.getClientRects=function(){var e=[];return ke(this._fragmentFiber,VS,e),e},Zl.prototype.getRootNode=function(e){var t=fe(this._fragmentFiber);return t===null?this:Re(t).getRootNode(e)},Zl.prototype.compareDocumentPosition=function(e){var t=fe(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];ke(this._fragmentFiber,Rp,n);var o=Re(t);if(n.length===0){if(t=o,Be(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(t=n)}n=this._fragmentFiber;var l=o=t.compareDocumentPosition(e);return t===e?l=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=Qe(n)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(e=Re(n).compareDocumentPosition(e),l=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=Re(n[0]),l=Re(n[n.length-1]);var a=Be(this._fragmentFiber)?t.parentElement:o;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var s=t.compareDocumentPosition(e),u=l.compareDocumentPosition(e),_=s&Node.DOCUMENT_POSITION_CONTAINED_BY||u&Node.DOCUMENT_POSITION_CONTAINED_BY;return u=o&&a&&s&Node.DOCUMENT_POSITION_FOLLOWING&&u&Node.DOCUMENT_POSITION_PRECEDING,t=o&&t===e||a&&l===e||_||u?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&t===e||!a&&l===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:s,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||XS(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},Zl.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error("FragmentInstance.scrollIntoView() does not support scrollIntoViewOptions. Use the alignToTop boolean instead.");var t=[];ke(this._fragmentFiber,Rp,t);var n=e!==!1;if(t.length===0){var o=Qe(this._fragmentFiber);if(o=n?o[1]||o[0]||fe(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=Re(o),H2(e,n);return}if(o=Re(o),o.nodeType!==9){if(o.nodeType===11){n="host"in o?o.host:null,n!==null?n.scrollIntoView(e):console.warn("You are attempting to scroll a FragmentInstance that is only mounted inside a detached DocumentFragment. No scroll was performed.");return}o.scrollIntoView(e)}}for(o=n?t.length-1:0;o!==(n?-1:t.length);){var l=t[o];l.tag===6?(l=Re(l),H2(l,n)):Re(l).scrollIntoView(e),o+=n?-1:1}};var Sy=null,dc=0,If=1,Ux=2,Ix=3,Ra=4,Aa=new Map,jx=new Set,bi=fn.d;fn.d={f:function(){var e=bi.f(),t=Jc();return e||t},r:function(e){var t=An(e);t!==null&&t.tag===5&&t.type==="form"?N1(t):bi.r(e)},D:function(e){bi.D(e),Q2("dns-prefetch",e,null)},C:function(e,t){bi.C(e,t),Q2("preconnect",e,t)},L:function(e,t,n){bi.L(e,t,n);var o=Vu;if(o&&e&&t){var l='link[rel="preload"][as="'+dl(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+dl(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+dl(n.imageSizes)+'"]')):l+='[href="'+dl(e)+'"]';var a=l;switch(t){case"style":a=nu(e);break;case"script":a=ou(e)}if(!(Aa.has(a)||(e=Nt({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Aa.set(a,e),o.querySelector(l)!==null||t==="style"&&o.querySelector(jd(a))||t==="script"&&o.querySelector(Yd(a))))){var s=o.createElement("link");Yo(s,"link",e),t==="style"&&(s[mh]=!0,s.onload=s.onerror=function(){ul(s)}),hn(s),o.head.appendChild(s)}}},m:function(e,t){bi.m(e,t);var n=Vu;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+dl(o)+'"][href="'+dl(e)+'"]',a=l;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=ou(e)}if(!Aa.has(a)&&(e=Nt({rel:"modulepreload",href:e},t),Aa.set(a,e),n.querySelector(l)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yd(a)))return}o=n.createElement("link"),Yo(o,"link",e),hn(o),n.head.appendChild(o)}}},X:function(e,t){bi.X(e,t);var n=Vu;if(n&&e){var o=Wo(n).hoistableScripts,l=ou(e),a=o.get(l);a||(a=n.querySelector(Yd(l)),a||(e=Nt({src:e,async:!0},t),(t=Aa.get(l))&&Bp(e,t),a=n.createElement("script"),hn(a),Yo(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},o.set(l,a))}},S:function(e,t,n){bi.S(e,t,n);var o=Vu;if(o&&e){var l=Wo(o).hoistableStyles,a=nu(e);t=t||"default";var s=l.get(a);if(!s){var u={loading:dc,preload:null};if(s=o.querySelector(jd(a)))u.loading=If|Ra;else{e=Nt({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Aa.get(a))&&Lp(e,n);var _=s=o.createElement("link");hn(_),Yo(_,"link",e),_._p=new Promise(function(m,E){_.onload=m,_.onerror=E}),_.addEventListener("load",function(){u.loading|=If}),_.addEventListener("error",function(){u.loading|=Ux}),u.loading|=Ra,nh(s,t,o)}s={type:"stylesheet",instance:s,count:1,state:u},l.set(a,s)}}},M:function(e,t){bi.M(e,t);var n=Vu;if(n&&e){var o=Wo(n).hoistableScripts,l=ou(e),a=o.get(l);a||(a=n.querySelector(Yd(l)),a||(e=Nt({src:e,async:!0,type:"module"},t),(t=Aa.get(l))&&Bp(e,t),a=n.createElement("script"),hn(a),Yo(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},o.set(l,a))}}};var Vu=typeof document>"u"?null:document,hm=null,s8=6e4,c8=800,u8=500,mm=0,Cy=null,pm=null,fc=x6,Xu={$$typeof:Ga,Provider:null,Consumer:null,_currentValue:fc,_currentValue2:fc,_threadCount:0},Yx="%c%s%c",qx="background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px",Vx="",gm=" ",d8=Function.prototype.bind,Xx=!1,Gx=null,Qx=null,Px=null,Fx=null,Wx=null,Zx=null,Jx=null,Kx=null,ew=null,tw=null;Gx=function(e,t,n,o){t=r(e,t),t!==null&&(n=i(t.memoizedState,n,0,o),t.memoizedState=n,t.baseState=n,e.memoizedProps=Nt({},e.memoizedProps),n=xo(e,2),n!==null&&Pn(n,e,2))},Qx=function(e,t,n){t=r(e,t),t!==null&&(n=f(t.memoizedState,n,0),t.memoizedState=n,t.baseState=n,e.memoizedProps=Nt({},e.memoizedProps),n=xo(e,2),n!==null&&Pn(n,e,2))},Px=function(e,t,n,o){t=r(e,t),t!==null&&(n=c(t.memoizedState,n,o),t.memoizedState=n,t.baseState=n,e.memoizedProps=Nt({},e.memoizedProps),n=xo(e,2),n!==null&&Pn(n,e,2))},Fx=function(e,t,n){e.pendingProps=i(e.memoizedProps,t,0,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=xo(e,2),t!==null&&Pn(t,e,2)},Wx=function(e,t){e.pendingProps=f(e.memoizedProps,t,0),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=xo(e,2),t!==null&&Pn(t,e,2)},Zx=function(e,t,n){e.pendingProps=c(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=xo(e,2),t!==null&&Pn(t,e,2)},Jx=function(e){var t=xo(e,2);t!==null&&Pn(t,e,2)},Kx=function(e){var t=$t(),n=xo(e,t);n!==null&&Pn(n,e,t)},ew=function(e){b=e},tw=function(e){h=e};var Gu=!0,ym=null,ky=!1,hs=null,ms=null,ps=null,jf=new Map,Yf=new Map,gs=[],f8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "),bm=null;if(rh.prototype.render=qp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error("Cannot update an unmounted root.");var n=arguments;typeof n[1]=="function"?console.error("does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):B(n[1])?console.error("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):typeof n[1]<"u"&&console.error("You passed a second argument to root.render(...) but it only accepts one argument."),n=e;var o=t.current,l=Wl(o);Hp(o,l,n,t,null,null)},rh.prototype.unmount=qp.prototype.unmount=function(){var e=arguments;if(typeof e[0]=="function"&&console.error("does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."),e=this._internalRoot,e!==null){this._internalRoot=null;var t=e.containerInfo;(tn&(Eo|oa))!==zo&&console.error("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),Hp(e.current,2,null,e,null,null),Jc(),t[Pi]=null}},rh.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gs.length&&t!==0&&t<gs[n].priority;n++);gs.splice(n,0,e),n===0&&u5(e)}},(function(){var e=Vp.version;if(e!=="19.3.0")throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(e+`
  - react-dom:  19.3.0
Learn more: https://react.dev/warnings/version-mismatch`))})(),typeof Map=="function"&&Map.prototype!=null&&typeof Map.prototype.forEach=="function"&&typeof Set=="function"&&Set.prototype!=null&&typeof Set.prototype.clear=="function"&&typeof Set.prototype.forEach=="function"||console.error("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"),fn.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error("Unable to find node on an unmounted component."):(e=Object.keys(e).join(","),Error("Argument appears to not be a ReactComponent. Keys: "+e));return e=mt(t),e=e!==null?vt(e):null,e=e===null?null:e.stateNode,e},!(function(){var e={bundleType:1,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.3.0"};return e.overrideHookState=Gx,e.overrideHookStateDeletePath=Qx,e.overrideHookStateRenamePath=Px,e.overrideProps=Fx,e.overridePropsDeletePath=Wx,e.overridePropsRenamePath=Zx,e.scheduleUpdate=Jx,e.scheduleRetry=Kx,e.setErrorHandler=ew,e.setSuspenseHandler=tw,e.scheduleRefresh=S,e.scheduleRoot=z,e.setRefreshHandler=V,e.getCurrentFiber=u6,ce(e)})()&&Tr&&window.top===window.self&&(-1<navigator.userAgent.indexOf("Chrome")&&navigator.userAgent.indexOf("Edge")===-1||-1<navigator.userAgent.indexOf("Firefox"))){var nw=window.location.protocol;/^(https?|file):$/.test(nw)&&console.info("%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools"+(nw==="file:"?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:""),"font-weight:bold")}xm.createRoot=function(e,t){if(!B(e))throw Error("Target container is not a DOM element.");h5(e);var n=!1,o="",l=j1,a=Y1,s=q1;return t!=null&&(t.hydrate?console.warn("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):typeof t=="object"&&t!==null&&t.$$typeof===wr&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=o5(e,1,!1,null,null,n,o,null,l,a,s,_5),e[Pi]=t.current,vp(e),new qp(t)},xm.hydrateRoot=function(e,t,n){if(!B(e))throw Error("Target container is not a DOM element.");h5(e),t===void 0&&console.error("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");var o=!1,l="",a=j1,s=Y1,u=q1,_=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(_=n.formState)),t=o5(e,1,!0,t,n??null,o,l,_,a,s,u,_5),t.context=l5(null),n=t.current,o=Wl(n),o=Ce(o),l=$i(o),l.callback=null,Hi(n,l,o),Ua(o,"hydrateRoot()",null),n=o,t.current.lanes=n,U(t,n),vr(t),e[Pi]=t.current,vp(e),new rh(t)},xm.version="19.3.0",typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop=="function"&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()});var _w=$r((tE,fw)=>{"use strict";fw.exports=dw()});var hw=$r(wm=>{"use strict";(function(){function r(ee){if(ee==null)return null;if(typeof ee=="function")return ee.$$typeof===Me?null:ee.displayName||ee.name||null;if(typeof ee=="string")return ee;switch(ee){case B:return"Fragment";case ze:return"Profiler";case ne:return"StrictMode";case vt:return"Suspense";case ke:return"SuspenseList";case Be:return"Activity";case Qe:return"ViewTransition"}if(typeof ee=="object")switch(typeof ee.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),ee.$$typeof){case V:return"Portal";case ue:return ee.displayName||"Context";case G:return(ee._context.displayName||"Context")+".Consumer";case mt:var Oe=ee.render;return ee=ee.displayName,ee||(ee=Oe.displayName||Oe.name||"",ee=ee!==""?"ForwardRef("+ee+")":"ForwardRef"),ee;case it:return Oe=ee.displayName||null,Oe!==null?Oe:r(ee.type)||"Memo";case fe:Oe=ee._payload,ee=ee._init;try{return r(ee(Oe))}catch{}}return null}function i(ee){return""+ee}function c(ee){try{i(ee);var Oe=!1}catch{Oe=!0}if(Oe){Oe=console;var ge=Oe.error,Ot=typeof Symbol=="function"&&Symbol.toStringTag&&ee[Symbol.toStringTag]||ee.constructor.name||"Object";return ge.call(Oe,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",Ot),i(ee)}}function d(ee){if(ee===B)return"<>";if(typeof ee=="object"&&ee!==null&&ee.$$typeof===fe)return"<...>";try{var Oe=r(ee);return Oe?"<"+Oe+">":"<...>"}catch{return"<...>"}}function f(){var ee=Re.A;return ee===null?null:ee.getOwner()}function h(){return Error("react-stack-top-frame")}function b(ee){if(Le.call(ee,"key")){var Oe=Object.getOwnPropertyDescriptor(ee,"key").get;if(Oe&&Oe.isReactWarning)return!1}return ee.key!==void 0}function v(ee,Oe){function ge(){He||(He=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",Oe))}ge.isReactWarning=!0,Object.defineProperty(ee,"key",{get:ge,configurable:!0})}function w(){var ee=r(this.type);return Ue[ee]||(Ue[ee]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),ee=this.props.ref,ee!==void 0?ee:null}function j(ee,Oe,ge,Ot,Nn,Cn){var Pt=ge.ref;return ee={$$typeof:S,type:ee,key:Oe,props:ge,_owner:Ot},(Pt!==void 0?Pt:null)!==null?Object.defineProperty(ee,"ref",{enumerable:!1,get:w}):Object.defineProperty(ee,"ref",{enumerable:!1,value:null}),ee._store={},Object.defineProperty(ee._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(ee,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(ee,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:Nn}),Object.defineProperty(ee,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:Cn}),Object.freeze&&(Object.freeze(ee.props),Object.freeze(ee)),ee}function L(ee,Oe,ge,Ot,Nn,Cn){var Pt=Oe.children;if(Pt!==void 0)if(Ot)if(J(Pt)){for(Ot=0;Ot<Pt.length;Ot++)R(Pt[Ot]);Object.freeze&&Object.freeze(Pt)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else R(Pt);if(Le.call(Oe,"key")){Pt=r(ee);var In=Object.keys(Oe).filter(function($o){return $o!=="key"});Ot=0<In.length?"{key: someKey, "+In.join(": ..., ")+": ...}":"{key: someKey}",Ee[Pt+Ot]||(In=0<In.length?"{"+In.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ot,Pt,In,Pt),Ee[Pt+Ot]=!0)}if(Pt=null,ge!==void 0&&(c(ge),Pt=""+ge),b(Oe)&&(c(Oe.key),Pt=""+Oe.key),"key"in Oe){ge={};for(var jn in Oe)jn!=="key"&&(ge[jn]=Oe[jn])}else ge=Oe;return Pt&&v(ge,typeof ee=="function"?ee.displayName||ee.name||"Unknown":ee),j(ee,Pt,ge,f(),Nn,Cn)}function R(ee){H(ee)?ee._store&&(ee._store.validated=1):typeof ee=="object"&&ee!==null&&ee.$$typeof===fe&&(ee._payload.status==="fulfilled"?H(ee._payload.value)&&ee._payload.value._store&&(ee._payload.value._store.validated=1):ee._store&&(ee._store.validated=1))}function H(ee){return typeof ee=="object"&&ee!==null&&ee.$$typeof===S}var z=$n(),S=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ze=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),ue=Symbol.for("react.context"),mt=Symbol.for("react.forward_ref"),vt=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Be=Symbol.for("react.activity"),Qe=Symbol.for("react.view_transition"),Me=Symbol.for("react.client.reference"),Re=z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Le=Object.prototype.hasOwnProperty,J=Array.isArray,pe=console.createTask?console.createTask:function(){return null};z={react_stack_bottom_frame:function(ee){return ee()}};var He,Ue={},Ne=z.react_stack_bottom_frame.bind(z,h)(),st=pe(d(h)),Ee={};wm.Fragment=B,wm.jsx=function(ee,Oe,ge){var Ot=1e4>Re.recentlyCreatedOwnerStacks++;if(Ot){var Nn=Error.stackTraceLimit;Error.stackTraceLimit=10;var Cn=Error("react-stack-top-frame");Error.stackTraceLimit=Nn}else Cn=Ne;return L(ee,Oe,ge,!1,Cn,Ot?pe(d(ee)):st)},wm.jsxs=function(ee,Oe,ge){var Ot=1e4>Re.recentlyCreatedOwnerStacks++;if(Ot){var Nn=Error.stackTraceLimit;Error.stackTraceLimit=10;var Cn=Error("react-stack-top-frame");Error.stackTraceLimit=Nn}else Cn=Ne;return L(ee,Oe,ge,!0,Cn,Ot?pe(d(ee)):st)}})()});var fo=$r((oE,mw)=>{"use strict";mw.exports=hw()});var T4=Tt($n()),M4=Tt(_w());var Ym=Tt($n(),1),$=Tt($n(),1),Vm=Tt($n(),1),o4=Tt(qf(),1),ed=Tt($n(),1),td=Tt($n(),1),l4=Tt(qf(),1),a4=Tt(fo(),1),Lo=Tt($n(),1),Kf=Tt($n(),1),i4=Tt($n(),1),sl=Tt($n(),1),an=Tt(fo(),1),Uy=Tt(fo(),1),qe=Tt(fo(),1),Ur=Tt($n(),1),u4=Tt(qf(),1),pc=Tt(fo(),1),Iy=Tt(fo(),1),mc=Tt(fo(),1),un=Tt($n(),1),y=Tt(fo(),1),Dn=Tt(fo(),1),Bo=Tt($n(),1),xs=Tt($n(),1),g=Tt(fo(),1),St=Tt($n(),1),on=Tt(fo(),1),gk=Tt($n(),1),Gl=Tt($n(),1),Qy=Tt(fo(),1),Oa=Tt($n(),1),Hr=Tt(fo(),1),vs=Tt($n(),1),t_=Tt(fo(),1),C4=Tt($n(),1),Wu=Tt(fo(),1),Zu=Tt(fo(),1),Xe=Tt(fo(),1),Gm=Tt($n(),1),n_=Tt(fo(),1),we=Tt(fo(),1),k4=Tt($n(),1),Fw=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Ey=Fw.flatMap(r=>[`:not([${r}])`,`:not([${r}] *)`]).join(""),$y="feedback-freeze-styles",Hy="__agentation_freeze";function v8(){return typeof window>"u"?{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:i=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}:window[Hy]??{frozen:!1,installed:!1,origSetTimeout:window.setTimeout.bind(window),origSetInterval:window.setInterval.bind(window),origRAF:window.requestAnimationFrame.bind(window),pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}}var Zt=v8();function Ww(){if(typeof window>"u")return;let r=window;Zt=r[Hy]??(r[Hy]=Zt),!Zt.installed&&(window.setTimeout=(i,c,...d)=>typeof i=="string"?Zt.origSetTimeout(i,c):Zt.origSetTimeout((...f)=>{Zt.frozen?Zt.frozenTimeoutQueue.push(()=>i(...f)):i(...f)},c,...d),window.setInterval=(i,c,...d)=>typeof i=="string"?Zt.origSetInterval(i,c):Zt.origSetInterval((...f)=>{Zt.frozen||i(...f)},c,...d),window.requestAnimationFrame=i=>Zt.origRAF(c=>{Zt.frozen?Zt.frozenRAFQueue.push(i):i(c)}),Zt.installed=!0)}var cn=Zt.origSetTimeout,Zw=Zt.origSetInterval,Im=Zt.origRAF;function x8(r){return r?Fw.some(i=>!!r.closest?.(`[${i}]`)):!1}function w8(){if(typeof document>"u"||(Ww(),Zt.frozen))return;Zt.frozen=!0,Zt.frozenTimeoutQueue=[],Zt.frozenRAFQueue=[];let r=document.getElementById($y);r||(r=document.createElement("style"),r.id=$y),r.textContent=`
    *${Ey},
    *${Ey}::before,
    *${Ey}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(r),Zt.pausedAnimations=[];try{document.getAnimations().forEach(i=>{if(i.playState!=="running")return;let c=i.effect?.target;x8(c)||(i.pause(),Zt.pausedAnimations.push(i))})}catch{}document.querySelectorAll("video").forEach(i=>{i.paused||(i.dataset.wasPaused="false",i.pause())})}function pw(){if(typeof document>"u"||!Zt.frozen)return;Zt.frozen=!1;let r=Zt.frozenTimeoutQueue;Zt.frozenTimeoutQueue=[];for(let c of r)Zt.origSetTimeout(()=>{if(Zt.frozen){Zt.frozenTimeoutQueue.push(c);return}try{c()}catch(d){console.warn("[agentation] Error replaying queued timeout:",d)}},0);let i=Zt.frozenRAFQueue;Zt.frozenRAFQueue=[];for(let c of i)Zt.origRAF(d=>{if(Zt.frozen){Zt.frozenRAFQueue.push(c);return}c(d)});for(let c of Zt.pausedAnimations)try{c.play()}catch(d){console.warn("[agentation] Error resuming animation:",d)}Zt.pausedAnimations=[],document.getElementById($y)?.remove(),document.querySelectorAll("video").forEach(c=>{c.dataset.wasPaused==="false"&&(c.play().catch(()=>{}),delete c.dataset.wasPaused)})}function gw(){let r=(0,Ym.useMemo)(()=>{let i=0,c=new Set,d=()=>(c.forEach(clearTimeout),c.clear(),++i),f=b=>b===i;return{start:d,isCurrent:f,schedule:(b,v,w)=>{if(!f(b))return;let j=cn(()=>{c.delete(j),f(b)&&v()},w);c.add(j)}}},[]);return(0,Ym.useEffect)(()=>()=>{r.start()},[r]),r}function S8(r,i,c,d){let f=j=>d.get(j.id)??j.id,h=new Map(r.map(j=>[f(j),j])),b=new Map(i.map(j=>[f(j),j])),v=new Set(c.map(j=>j.id)),w=[];for(let j of c){let L=h.get(j.id),R=b.get(j.id);if(L&&!R)continue;let H=R&&L&&R.comment!==L.comment;w.push(H?{...j,comment:R.comment}:j)}for(let[j,L]of b)!h.has(j)&&!v.has(j)&&w.push(L);return w}function o_(r){if(r.tagName!=="IFRAME")return null;try{return r.contentDocument}catch{return null}}function ra(r,i=document){if(r===i)return null;try{return r.defaultView?.frameElement}catch{return null}}function Py(r){return r.nodeType===11&&"host"in r}function Ku(r){let i=r.getBoundingClientRect(),c=r.offsetWidth?i.width/r.offsetWidth:1,d=r.offsetHeight?i.height/r.offsetHeight:1,f=r.ownerDocument.defaultView?.getComputedStyle(r),h=L=>parseFloat(L||"0")||0,b=h(f?.paddingLeft),v=h(f?.paddingTop),w=r.clientWidth-b-h(f?.paddingRight),j=r.clientHeight-v-h(f?.paddingBottom);return{x:i.left+(r.clientLeft+b)*c,y:i.top+(r.clientTop+v)*d,sx:c,sy:d,width:w*c,height:j*d}}function yw(r){try{let i=new URL(r);return i.origin+i.pathname}catch{return r}}function C8(r,i,c,d=document){let f=ra(r,d);for(;f;){let h=Ku(f);i=h.x+i*h.sx,c=h.y+c*h.sy,f=ra(f.ownerDocument,d)}return{x:i,y:c}}function _o(r,i=document){let c=r.getBoundingClientRect();return Jw(r.ownerDocument,c,i)}function Jw(r,i,c){if(!ra(r,c))return i;let d=i.left,f=i.top,h=i.right,b=i.bottom,v=ra(r,c);for(;v;){let w=Ku(v);d=Math.max(w.x,w.x+d*w.sx),f=Math.max(w.y,w.y+f*w.sy),h=Math.min(w.x+w.width,w.x+h*w.sx),b=Math.min(w.y+w.height,w.y+b*w.sy),v=ra(v.ownerDocument,c)}return new DOMRect(d,f,Math.max(0,h-d),Math.max(0,b-f))}function qm(r){let i=[];for(let c of r.querySelectorAll("*"))c.tagName==="IFRAME"&&i.push(c),c.shadowRoot&&c.tagName!=="AGENTATION-TOOLBAR"&&i.push(...qm(c.shadowRoot));return i}function k8(r,i,c,d=document){let f=[];for(let R=ra(r.ownerDocument,d);R;R=ra(R.ownerDocument,d))f.unshift(R);if(!f.length)return;let h=f.map(R=>{let H=Ku(R);return i=(i-H.x)/H.sx,c=(c-H.y)/H.sy,{index:qm(R.ownerDocument).indexOf(R),id:R.id||void 0,url:o_(R)?.URL??""}}),b=r.ownerDocument.defaultView,v=!1;for(let R=r;R;R=R.parentElement)if(["fixed","sticky"].includes(b.getComputedStyle(R).position)){v=!0;break}let w=v?0:b.scrollX,j=v?0:b.scrollY,L=r.getBoundingClientRect();return{path:h,x:i+w,y:c+j,fixed:v,boundingBox:{x:L.left+w,y:L.top+j,width:L.width,height:L.height}}}function E8(r=document){let i=new Map,c=d=>{let f=i.get(d);return f||(f=qm(d),i.set(d,f)),f};return d=>T8(d,r,c)}function T8(r,i=document,c=qm){let d=r.frame;if(!d)return r;let f=i;for(let z of d.path){let S=c(f),V=z.id?S.find(ne=>ne.id===z.id):S[z.index],B=V&&o_(V);if(!B||yw(B.URL)!==yw(z.url))return null;f=B}let h=f.defaultView,b=d.fixed?0:h.scrollX,v=d.fixed?0:h.scrollY,w=d.x-b,j=d.y-v;for(let z=f,S=ra(f,i);S;S=ra(z,i)){let V=z.defaultView;if(w<0||j<0||w>V.innerWidth||j>V.innerHeight)return null;let B=Ku(S);if(B.width<=0||B.height<=0)return null;w=B.x+w*B.sx,j=B.y+j*B.sy,z=S.ownerDocument}let L=d.boundingBox,R=Jw(f,new DOMRect(L.x-b,L.y-v,L.width,L.height),i),H=i.defaultView;return{...r,x:w/H.innerWidth*100,y:j+(r.isFixed?0:H.scrollY),boundingBox:{x:R.x,y:R.y+(r.isFixed?0:H.scrollY),width:R.width,height:R.height}}}function M8(r,i,c){if(!("clientX"in r)||i===c)return r;let d=C8(i,r.clientX,r.clientY,c);return new Proxy(r,{get(f,h){if(h==="clientX")return d.x;if(h==="clientY")return d.y;let b=Reflect.get(f,h,f);return typeof b=="function"?b.bind(f):b}})}function R8(r,i){let c=new Set([r]),d=new Set,f=[],h=new Set,b=!1,v=!1,w,j=(R,H)=>{let z=S=>R.listener(M8(S,H,r));R.handlers.set(H,z),H.addEventListener(R.type,z,R.options)},L=()=>{if(b=!1,!v)return;let R=new Set,H=new Set,z=[],S=V=>{z.push(V);for(let B of V.querySelectorAll("*"))if(!B.matches("agentation-toolbar, [data-agentation-portal]")&&(B.shadowRoot&&S(B.shadowRoot),B.tagName==="IFRAME")){H.add(B);let ne=o_(B);ne&&!R.has(ne)&&(R.add(ne),S(ne))}};R.add(r),S(r);for(let V of c)if(!R.has(V)){for(let B of d){let ne=B.handlers.get(V);ne&&V.removeEventListener(B.type,ne,B.options),B.handlers.delete(V)}c.delete(V)}for(let V of R)if(!c.has(V)){c.add(V);for(let B of d)j(B,V)}for(let V of h)H.has(V)||V.removeEventListener("load",L);for(let V of H)h.has(V)||V.addEventListener("load",L);h=H,w?.disconnect(),h.forEach(V=>w?.observe(V)),f.forEach(V=>V.disconnect()),f=z.map(V=>{let B=new MutationObserver(ne=>{ne.some(G=>[...G.addedNodes,...G.removedNodes].some(ue=>ue.nodeType===1&&!ue.closest("agentation-toolbar, [data-agentation-portal]")&&(ue.tagName==="IFRAME"||!!ue.shadowRoot||!!ue.querySelector("iframe"))))&&!b&&(b=!0,queueMicrotask(L))});return B.observe(V,{childList:!0,subtree:!0}),B}),i?.()};return{start(){v||(v=!0,typeof ResizeObserver=="function"&&(w=new ResizeObserver(()=>i?.())),L())},stop(){v=!1,w?.disconnect(),w=void 0,f.forEach(R=>R.disconnect()),f=[];for(let R of h)R.removeEventListener("load",L);h.clear();for(let R of d)for(let[H,z]of R.handlers)H.removeEventListener(R.type,z,R.options);d.clear(),c.clear(),c.add(r)},addEventListener(R,H,z){let S={type:R,listener:H,options:z,handlers:new Map};d.add(S);for(let V of c)j(S,V)},removeEventListener(R,H,z){for(let S of d)if(S.type===R&&S.listener===H){for(let[V,B]of S.handlers)V.removeEventListener(R,B,S.options);d.delete(S)}},querySelectorAll(R){return[...c].flatMap(H=>[...H.querySelectorAll(R)])}}}var Fy=["data-testid","data-test","data-qa","data-cy","data-component"];function Wf(r,i=Fy){let c={};for(let d of[...new Set(i)].slice(0,16)){if(!/^[a-zA-Z_][\w:.-]*$/.test(d))continue;let f=r.getAttribute(d);f!=null&&f.length<=500&&Object.defineProperty(c,d,{value:f,enumerable:!0})}return c}function A8(r,i=Fy){return Object.entries(Wf(r,i)).filter(([c,d])=>/^data-[a-z0-9_-]+$/.test(c)&&d.length<=120).slice(0,2).map(([c,d])=>`[${c}="${d.replace(/[\\"\n\r\f\0]/g,f=>f==="\\"||f==='"'?`\\${f}`:`\\${f.charCodeAt(0).toString(16)} `)}"]`).join("")}function Ju(r){if(r.parentElement)return r.parentElement;let i=r.getRootNode();return Py(i)?i.host:null}function Qo(r,i){let c=r;for(;c;){if(c.matches(i))return c;c=Ju(c)}return null}function Kw(r,i=4,c){let d=[],f=r,h=0;for(;f&&h<i;){let v=f.tagName.toLowerCase();if(v==="html"||v==="body"){d.length===0&&d.push(v);break}let w=v;if(f.id)w=`#${f.id}`;else if(f.className&&typeof f.className=="string"){let L=f.className.split(/\s+/).find(R=>R.length>2&&!R.match(/^[a-z]{1,2}$/)&&!R.match(/[A-Z0-9]{5,}/));L&&(w=`.${L.split("_")[0]}`)}w+=A8(f,c);let j=Ju(f);!f.parentElement&&j&&(w=`\u27E8shadow\u27E9 ${w}`),d.unshift(w),f=j,h++}let b=ra(r.ownerDocument);return(b?Kw(b,2)+" > \u27E8iframe\u27E9 ":"")+d.join(" > ")}function O8(r){let i="";for(let c of r.childNodes)if(c.nodeType===Node.TEXT_NODE){let d=c.textContent?.trim();d&&(i+=(i?" ":"")+d)}return i}function Fu(r,i){let c=Kw(r,4,i);if(r.dataset.element)return{name:r.dataset.element,path:c};let d=r.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(d)){let f=Qo(r,"svg");if(f){let h=Ju(f);if(h?.namespaceURI==="http://www.w3.org/1999/xhtml")return{name:`graphic in ${Fu(h).name}`,path:c}}return{name:"graphic element",path:c}}if(d==="svg"){let f=Ju(r);if(f?.tagName.toLowerCase()==="button"){let h=f.textContent?.trim();return{name:h?`icon in "${h}" button`:"button icon",path:c}}return{name:"icon",path:c}}if(d==="button"){let f=r.textContent?.trim(),h=r.getAttribute("aria-label");return h?{name:`button [${h}]`,path:c}:{name:f?`button "${f.slice(0,25)}"`:"button",path:c}}if(d==="a"){let f=r.textContent?.trim(),h=r.getAttribute("href");return f?{name:`link "${f.slice(0,25)}"`,path:c}:h?{name:`link to ${h.slice(0,30)}`,path:c}:{name:"link",path:c}}if(d==="input"){let f=r.getAttribute("type")||"text",h=r.getAttribute("placeholder"),b=r.getAttribute("name");return h?{name:`input "${h}"`,path:c}:b?{name:`input [${b}]`,path:c}:{name:`${f} input`,path:c}}if(["h1","h2","h3","h4","h5","h6"].includes(d)){let f=r.textContent?.trim();return{name:f?`${d} "${f.slice(0,35)}"`:d,path:c}}if(d==="p"){let f=r.textContent?.trim();return f?{name:`paragraph: "${f.slice(0,40)}${f.length>40?"...":""}"`,path:c}:{name:"paragraph",path:c}}if(d==="span"||d==="label"){let f=r.textContent?.trim();return f&&f.length<40?{name:`"${f}"`,path:c}:{name:d,path:c}}if(d==="li"){let f=r.textContent?.trim();return f&&f.length<40?{name:`list item: "${f.slice(0,35)}"`,path:c}:{name:"list item",path:c}}if(d==="blockquote")return{name:"blockquote",path:c};if(d==="code"){let f=r.textContent?.trim();return f&&f.length<30?{name:`code: \`${f}\``,path:c}:{name:"code",path:c}}if(d==="pre")return{name:"code block",path:c};if(d==="img"){let f=r.getAttribute("alt");return{name:f?`image "${f.slice(0,30)}"`:"image",path:c}}if(d==="video")return{name:"video",path:c};if(["div","section","article","nav","header","footer","aside","main"].includes(d)){let f=r.className,h=r.getAttribute("role"),b=r.getAttribute("aria-label");if(b)return{name:`${d} [${b}]`,path:c};if(h)return{name:`${h}`,path:c};let v=O8(r);if(v&&v.length<50)return{name:`"${v}"`,path:c};if(typeof f=="string"&&f){let w=f.split(/[\s_-]+/).map(j=>j.replace(/[A-Z0-9]{5,}.*$/,"")).filter(j=>j.length>2&&!/^[a-z]{1,2}$/.test(j)).slice(0,2);if(w.length>0)return{name:w.join(" "),path:c}}return{name:d==="div"?"container":d,path:c}}return{name:d,path:c}}function Vf(r){let i=[],c=r.textContent?.trim();c&&c.length<100&&i.push(c);let d=r.previousElementSibling;if(d){let h=d.textContent?.trim();h&&h.length<50&&i.unshift(`[before: "${h.slice(0,40)}"]`)}let f=r.nextElementSibling;if(f){let h=f.textContent?.trim();h&&h.length<50&&i.push(`[after: "${h.slice(0,40)}"]`)}return i.join(" ")}function Sm(r){let i=Ju(r);if(!i)return"";let c=r.getRootNode(),f=(Py(c)&&r.parentElement?Array.from(r.parentElement.children):Array.from(i.children)).filter(L=>L!==r&&L.namespaceURI==="http://www.w3.org/1999/xhtml");if(f.length===0)return"";let h=f.slice(0,4).map(L=>{let R=L.tagName.toLowerCase(),H=L.className,z="";if(typeof H=="string"&&H){let S=H.split(/\s+/).map(V=>V.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(V=>V.length>2&&!/^[a-z]{1,2}$/.test(V));S&&(z=`.${S}`)}if(R==="button"||R==="a"){let S=L.textContent?.trim().slice(0,15);if(S)return`${R}${z} "${S}"`}return`${R}${z}`}),v=i.tagName.toLowerCase();if(typeof i.className=="string"&&i.className){let L=i.className.split(/\s+/).map(R=>R.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(R=>R.length>2&&!/^[a-z]{1,2}$/.test(R));L&&(v=`.${L}`)}let w=i.children.length,j=w>h.length+1?` (${w} total in ${v})`:"";return h.join(", ")+j}function Xf(r){let i=r.className;return typeof i!="string"||!i?"":i.split(/\s+/).filter(d=>d.length>0).map(d=>{let f=d.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return f?f[1]:d}).filter((d,f,h)=>h.indexOf(d)===f).join(", ")}var e4=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),D8=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),N8=new Set(["input","textarea","select"]),z8=new Set(["img","video","canvas","svg"]),L8=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Cm(r){if(typeof window>"u")return{};let i=(r.ownerDocument.defaultView??window).getComputedStyle(r),c={},d=r.tagName.toLowerCase(),f;D8.has(d)?f=["color","fontSize","fontWeight","fontFamily","lineHeight"]:d==="button"||d==="a"&&r.getAttribute("role")==="button"?f=["backgroundColor","color","padding","borderRadius","fontSize"]:N8.has(d)?f=["backgroundColor","color","padding","borderRadius","fontSize"]:z8.has(d)?f=["width","height","objectFit","borderRadius"]:L8.has(d)?f=["display","padding","margin","gap","backgroundColor"]:f=["color","fontSize","margin","padding","backgroundColor"];for(let h of f){let b=h.replace(/([A-Z])/g,"-$1").toLowerCase(),v=i.getPropertyValue(b);v&&!e4.has(v)&&(c[h]=v)}return c}var B8=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function km(r){if(typeof window>"u")return"";let i=(r.ownerDocument.defaultView??window).getComputedStyle(r),c=[];for(let d of B8){let f=d.replace(/([A-Z])/g,"-$1").toLowerCase(),h=i.getPropertyValue(f);h&&!e4.has(h)&&c.push(`${f}: ${h}`)}return c.join("; ")}function $8(r){if(!r)return;let i={},c=r.split(";").map(d=>d.trim()).filter(Boolean);for(let d of c){let f=d.indexOf(":");if(f>0){let h=d.slice(0,f).trim(),b=d.slice(f+1).trim();h&&b&&(i[h]=b)}}return Object.keys(i).length>0?i:void 0}function Em(r){let i=[],c=r.getAttribute("role"),d=r.getAttribute("aria-label"),f=r.getAttribute("aria-describedby"),h=r.getAttribute("tabindex"),b=r.getAttribute("aria-hidden");return c&&i.push(`role="${c}"`),d&&i.push(`aria-label="${d}"`),f&&i.push(`aria-describedby="${f}"`),h&&i.push(`tabindex=${h}`),b==="true"&&i.push("aria-hidden"),r.matches("a, button, input, select, textarea, [tabindex]")&&i.push("focusable"),i.join(", ")}function Zf(r){let i=[],c=r;for(;c&&c.tagName.toLowerCase()!=="html";){let f=c.tagName.toLowerCase(),h=f;if(c.id)h=`${f}#${c.id}`;else if(c.className&&typeof c.className=="string"){let v=c.className.split(/\s+/).map(w=>w.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(w=>w.length>2);v&&(h=`${f}.${v}`)}let b=Ju(c);!c.parentElement&&b&&(h=`\u27E8shadow\u27E9 ${h}`),i.unshift(h),c=b}let d=ra(r.ownerDocument);return(d?Zf(d)+" > \u27E8iframe\u27E9 ":"")+i.join(" > ")}var t4="agentation-toolbar, [data-agentation-root], [data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]",H8=new Set(["DIV","SPAN","SECTION","ARTICLE","MAIN","ASIDE","HEADER","FOOTER","NAV"]);function Hm(r,i){let c=document.elementFromPoint(r,i),d=new Set;for(;c&&!d.has(c);){d.add(c);let f=o_(c),h;if(f){let b=Ku(c);r=(r-b.x)/b.sx,i=(i-b.y)/b.sy,h=f.elementFromPoint?.(r,i)}else h=c.shadowRoot?.elementFromPoint?.(r,i);if(!h||h===c)break;c=h}return c}function U8(r){if(typeof r.checkVisibility=="function")return r.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=getComputedStyle(r);if(i.visibility==="hidden"||i.visibility==="collapse")return!1;let c=r;for(;c;){let d=getComputedStyle(c);if(d.opacity==="0"||d.display==="none"||d.contentVisibility==="hidden")return!1;let f=c.getRootNode();c=c.parentElement||(Py(f)?f.host:null)}return!0}function n4(r,i){let c=[],d=new Set,f=(h,b,v)=>{for(let w of h){if(d.has(w))continue;if(d.add(w),w.shadowRoot){let L=w.shadowRoot,R=L.elementsFromPoint?.(b,v)??[];f(R.length?R:[L.elementFromPoint?.(b,v)].filter(Boolean),b,v)}let j=o_(w);if(j){let L=Ku(w),R=(b-L.x)/L.sx,H=(v-L.y)/L.sy;f(j.elementsFromPoint?.(R,H)??[j.elementFromPoint?.(R,H)].filter(Boolean),R,H)}w!==w.ownerDocument.body&&w!==w.ownerDocument.documentElement&&!Qo(w,t4)&&U8(w)&&c.push(w)}};return f(document.elementsFromPoint?.(r,i)??[document.elementFromPoint(r,i)].filter(Boolean),r,i),c}function Tm(r,i,c){if(c.width<=0||c.height<=0)return null;let d=null,f=1/0;for(let h of n4(r,i)){let b=_o(h),v=b.width/c.width,w=b.height/c.height;if(v<.5||v>2||w<.5||w>2)continue;let j=Math.abs(Math.log(v))+Math.abs(Math.log(w));j<f&&(d=h,f=j)}return d}function bw(r,i){let c=Hm(r,i);if(!c||Qo(c,t4))return null;let d=n4(r,i);for(let b of d)if(!H8.has(b.tagName)&&!b.shadowRoot||Array.from(b.childNodes).some(v=>v.nodeType===Node.TEXT_NODE&&v.textContent?.trim()))return b;let f=null,h=1/0;for(let b of d){let v=_o(b),w=v.width*v.height;w>0&&w<h&&(f=b,h=w)}return f}function I8(r){let i=(0,Vm.useCallback)(c=>r?(window.addEventListener("hashchange",c),window.addEventListener("popstate",c),()=>{window.removeEventListener("hashchange",c),window.removeEventListener("popstate",c)}):()=>{},[r]);return(0,Vm.useSyncExternalStore)(i,()=>window.location.pathname+(r?window.location.hash:""),()=>"/")}var Mm=new Map;function j8(r,i){let c=(Mm.get(r)??Promise.resolve()).then(i),d=c.then(()=>{},()=>{});return Mm.set(r,d),d.then(()=>{Mm.get(r)===d&&Mm.delete(r)}),c}function Y8(r,i,c){try{let d=new URL(r,c);return d.origin===c&&d.pathname+d.hash===i}catch{return!1}}var vw=typeof window>"u"?ed.useEffect:ed.useLayoutEffect;function q8(r){let[i,c]=(0,ed.useState)(null);return vw(()=>{let d=document.createElement("div");return d.setAttribute("data-agentation-portal",""),d.style.display="contents",c(d),()=>d.remove()},[]),vw(()=>{if(!i)return;let d=r??document.body;if(d.ownerDocument!==document){console.warn("[Agentation] portalContainer belongs to another document; the toolbar will not render.");return}let f=document.activeElement;for(;f?.shadowRoot?.activeElement;)f=f.shadowRoot.activeElement;let h=f&&i.contains(document.activeElement)?f:null;typeof i.hidePopover=="function"&&i.matches(":popover-open")&&i.hidePopover(),d.appendChild(i),r&&typeof i.showPopover=="function"?(i.setAttribute("popover","manual"),i.style.cssText="position:fixed;inset:0 auto auto 0;margin:0;padding:0;border:0;background:transparent;width:0;height:0;overflow:visible;pointer-events:none",i.showPopover()):(i.removeAttribute("popover"),i.style.cssText="display:contents"),h?.focus({preventScroll:!0})},[i,r]),i}var V8=({mode:r="open",delegatesFocus:i,slotAssignment:c,host:d="div",children:f,className:h,...b})=>{let v=(0,td.useRef)(null),[w,j]=(0,td.useState)(null);return(0,td.useLayoutEffect)(()=>{let R=v.current;if(!R||R.shadowRoot)return;let H=R.attachShadow({mode:r,delegatesFocus:i,slotAssignment:c});j(H)},[]),(0,a4.jsx)(d,{ref:v,...b,...d.includes("-")?{class:h}:{className:h},children:w&&(0,l4.createPortal)(f,w)})};function Wy(r,i,c){let d=(0,Kf.useRef)(c);(0,Kf.useLayoutEffect)(()=>{d.current=c},[c]),(0,Kf.useLayoutEffect)(()=>{let f=r.current;if(!i||!f)return;let h=!1,b=f.getAnimations?.()??[];return Promise.allSettled(b.map(v=>v.finished)).then(()=>{h||d.current()}),()=>{h=!0}},[r,i])}var r4=`@charset "UTF-8";
.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  pointer-events: none;
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.75rem;
}

.styles-module__sourceAction___EabJb {
  display: block;
  max-width: 100%;
  margin: -2px 0 8px;
  padding: 2px 0;
  background: transparent;
  color: #fff;
  font: inherit;
  font-size: 11px;
  border: 0;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.15s ease;
}
.styles-module__sourceAction___EabJb:hover, .styles-module__sourceAction___EabJb:focus-visible {
  opacity: 1;
}
.styles-module__sourceAction___EabJb:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 3px;
}

.styles-module__light___6AaSQ .styles-module__sourceAction___EabJb {
  color: #111;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR,
.styles-module__deleteButton___4VuAE {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 1.875rem;
  padding: 0.375rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  display: flex;
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__popup___IhzrD.styles-module__enter___L7U7N, .styles-module__popup___IhzrD.styles-module__exit___5eGjE {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
}
.styles-module__sharedForm___8GvQl {
  --card-motion: 200ms cubic-bezier(0.2, 0.8, 0.2, 1);
  padding: 0.75rem 1rem;
  transition: padding var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__header___wWsSi {
  transition: margin-bottom var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__sharedForm___8GvQl .styles-module__previewExcerpt___DCOIL {
  display: none;
}
.styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
  opacity: 1;
  margin-left: 0;
  transition: margin-left var(--card-motion), opacity 100ms ease-out, transform var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5 {
  position: relative;
  height: var(--editor-field-height, 57px);
  border-radius: 8px;
  overflow: clip;
  transition: height var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--field-border, rgba(255, 255, 255, 0.15));
  border-radius: inherit;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;
  transition: opacity var(--card-motion), border-color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNoteContent___6q3KD {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: clip;
  transition: width var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5[data-truncated]::after {
  content: "\u2026";
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
  font-size: 13px;
  line-height: 1.4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__textarea___jrSae {
  display: block;
  width: calc(280px - 2rem);
  max-width: calc(100vw - 24px - 2rem);
  margin: 0;
  background: transparent !important;
  border-color: transparent !important;
  transform: translate(0, 0);
  transition: transform var(--card-motion), color var(--card-motion);
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows var(--card-motion), opacity 80ms ease-out;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl {
  transition-delay: 0ms, 120ms;
}
.styles-module__sharedForm___8GvQl .styles-module__sharedExtraInner___EuUh4 {
  min-height: 0;
  overflow: hidden;
}
.styles-module__sharedForm___8GvQl .styles-module__actions___D6x3f {
  min-height: 0;
  overflow: hidden;
  transition: margin-top var(--card-motion);
}
.styles-module__sharedForm___8GvQl[data-preview] {
  padding: 8px 12px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__header___wWsSi {
  margin-bottom: 5px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__previewExcerpt___DCOIL {
  display: inline;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__element___fTV2z {
  line-height: 1.4;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__chevron___ZZJlR {
  opacity: 0;
  margin-left: -18px;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5 {
  height: 20.2px;
  border-radius: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::before {
  opacity: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae {
  transform: translate(-11px, calc(-9px + (1.4em - 1lh) / 2));
  color: #fff;
  overflow: hidden;
  cursor: default;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedExtra___RUBKC, .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedActions___6Glpl {
  grid-template-rows: 0fr;
  opacity: 0;
  transition-delay: 0ms;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__actions___D6x3f {
  margin-top: 0;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__stylesWrapper___pnHgy {
  grid-template-rows: 0fr;
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated] .styles-module__sharedNoteContent___6q3KD {
  width: calc(100% - 12px);
}
.styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5[data-truncated]::after {
  opacity: 1;
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__sharedNote___OYVi5::before {
  border-color: var(--field-border, rgba(0, 0, 0, 0.12));
  background: rgba(0, 0, 0, 0.03);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__textarea___jrSae, .styles-module__light___6AaSQ .styles-module__sharedForm___8GvQl[data-preview] .styles-module__sharedNote___OYVi5::after {
  color: rgba(0, 0, 0, 0.85);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__sharedForm___8GvQl {
    --card-motion: 1ms linear;
  }
  .styles-module__sharedForm___8GvQl .styles-module__sharedActions___6Glpl, .styles-module__sharedForm___8GvQl .styles-module__headerToggle___WpW0b .styles-module__chevron___ZZJlR {
    transition: opacity 100ms ease-out;
    transition-delay: 0ms;
  }
}`,Xt={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",popupEnter:"styles-module__popupEnter___AuQDN",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",popupExit:"styles-module__popupExit___JJKQX",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",green:"styles-module__green___99l3h",actions:"styles-module__actions___D6x3f",sourceAction:"styles-module__sourceAction___EabJb",light:"styles-module__light___6AaSQ",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteButton:"styles-module__deleteButton___4VuAE",deleteWrapper:"styles-module__deleteWrapper___oSjdo",sharedForm:"styles-module__sharedForm___8GvQl",previewExcerpt:"styles-module__previewExcerpt___DCOIL",sharedNote:"styles-module__sharedNote___OYVi5",sharedNoteContent:"styles-module__sharedNoteContent___6q3KD",sharedExtra:"styles-module__sharedExtra___RUBKC",sharedActions:"styles-module__sharedActions___6Glpl",sharedExtraInner:"styles-module__sharedExtraInner___EuUh4"},Ty="data-agentation-styles";function s4(r,i,c){if(!c||!r)return;let d=r.nodeType===9?r.head:r.nodeType===11?r:null;if(!d||typeof d.querySelector!="function"||d.querySelector(`style[${Ty}~="toolbar"], style[${Ty}~="${i}"]`))return;let h=(r.nodeType===9?r:r.ownerDocument).createElement("style");h.setAttribute(Ty,i),h.textContent=c,d.appendChild(h)}function Zy(r,i){return(0,i4.useCallback)(c=>{c&&s4(c.getRootNode(),r,i)},[r,i])}function xw(r){if(!r)return;let i=c=>c.stopImmediatePropagation();document.addEventListener("focusin",i,!0),document.addEventListener("focusout",i,!0);try{r.focus({preventScroll:!0})}finally{document.removeEventListener("focusin",i,!0),document.removeEventListener("focusout",i,!0)}}var c4=(0,sl.forwardRef)(function({element:i,timestamp:c,selectedText:d,placeholder:f="What should change?",initialValue:h="",submitLabel:b="Add",onSubmit:v,onCancel:w,onDelete:j,onOpenSource:L,allowEmpty:R=!1,accentColor:H="#3c82f7",computedStyles:z,disabled:S=!1,preview:V=!1,resetOnPreview:B=!0,variant:ne="popup"},ze){let G=ne==="card",[ue,mt]=(0,sl.useState)(h),[vt,ke]=(0,sl.useState)(!1),[it,fe]=(0,sl.useState)(!1),Be=(0,sl.useRef)(null),Qe=(0,sl.useRef)(null),Me=d?` "${d.slice(0,30)}${d.length>30?"...":""}"`:"";(0,sl.useLayoutEffect)(()=>{let J=Qe.current,pe=Be.current;if(!G||!J||!pe)return;let He=()=>{J.style.setProperty("--editor-field-height",`${pe.offsetHeight}px`)};if(He(),"CanvasRenderingContext2D"in window){let Ne=document.createElement("canvas").getContext("2d");if(Ne){let st=getComputedStyle(pe).fontFamily;Ne.font=`13px ${st}`;let Ee=Ne.measureText(h.replace(/\s+/g," ")).width;Ne.font=`italic 12px ${st}`;let ee=Ne.measureText(i+Me).width,Oe=Math.min(200,Math.max(120,Math.ceil(Math.max(Ee,ee))+24));J.closest("[data-annotation-card]")?.style.setProperty("--preview-width",`${Oe}px`);let ge=J.querySelector("[data-shared-note]");ge&&ge.toggleAttribute("data-truncated",Ee>Oe-24)}}let Ue=typeof ResizeObserver<"u"?new ResizeObserver(He):null;return Ue?.observe(pe),()=>Ue?.disconnect()},[G,i,h,Me]),(0,sl.useLayoutEffect)(()=>{V&&B&&(mt(h),fe(!1),Be.current&&(Be.current.scrollTop=0,Be.current.scrollLeft=0))},[V,B,h]),(0,sl.useImperativeHandle)(ze,()=>({focus(){let J=Be.current;xw(J),J&&(J.selectionStart=J.selectionEnd=J.value.length,J.scrollTop=G?0:J.scrollHeight)}}),[G]);let Re=(0,sl.useCallback)(()=>{S||!ue.trim()&&!R||v(ue.trim())},[S,ue,R,v]),Le=J=>{J.stopPropagation(),!J.nativeEvent.isComposing&&(J.key==="Enter"&&!J.shiftKey&&(J.preventDefault(),Re()),J.key==="Escape"&&w())};return(0,an.jsxs)("div",{ref:Qe,className:G?Xt.sharedForm:void 0,style:G?void 0:{display:"contents"},"data-annotation-editor":!0,"data-preview":V||void 0,children:[(0,an.jsxs)("div",{className:Xt.header,"data-editor-heading":!0,children:[z&&Object.keys(z).length>0?(0,an.jsxs)("button",{className:Xt.headerToggle,onClick:()=>{let J=it;fe(!it),J&&cn(()=>xw(Be.current),0)},type:"button",children:[(0,an.jsx)("svg",{className:`${Xt.chevron} ${it?Xt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,an.jsx)("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,an.jsxs)("span",{className:Xt.element,children:[i,G&&Me&&(0,an.jsx)("span",{className:Xt.previewExcerpt,children:Me})]})]}):(0,an.jsxs)("span",{className:Xt.element,children:[i,G&&Me&&(0,an.jsx)("span",{className:Xt.previewExcerpt,children:Me})]}),c&&(0,an.jsx)("span",{className:Xt.timestamp,children:c})]}),L&&(0,an.jsx)("div",{className:G?Xt.sharedExtra:void 0,style:G?void 0:{display:"contents"},children:(0,an.jsx)("div",{className:G?Xt.sharedExtraInner:void 0,style:G?void 0:{display:"contents"},children:(0,an.jsx)("button",{type:"button",className:Xt.sourceAction,onClick:L,children:"Open in editor"})})}),z&&Object.keys(z).length>0&&(0,an.jsx)("div",{className:`${Xt.stylesWrapper} ${it?Xt.expanded:""}`,children:(0,an.jsx)("div",{className:Xt.stylesInner,children:(0,an.jsx)("div",{className:Xt.stylesBlock,children:Object.entries(z).map(([J,pe])=>(0,an.jsxs)("div",{className:Xt.styleLine,children:[(0,an.jsx)("span",{className:Xt.styleProperty,children:J.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",(0,an.jsx)("span",{className:Xt.styleValue,children:pe}),";"]},J))})})}),d&&(0,an.jsx)("div",{className:G?Xt.sharedExtra:void 0,style:G?void 0:{display:"contents"},children:(0,an.jsx)("div",{className:G?Xt.sharedExtraInner:void 0,style:G?void 0:{display:"contents"},children:(0,an.jsxs)("div",{className:Xt.quote,children:["\u201C",d.slice(0,80),d.length>80?"...":"","\u201D"]})})}),(0,an.jsx)("div",{"data-shared-note":!0,className:G?Xt.sharedNote:void 0,style:G?{"--field-border":vt?H:void 0}:{display:"contents"},children:(0,an.jsx)("div",{className:G?Xt.sharedNoteContent:void 0,style:G?void 0:{display:"contents"},children:(0,an.jsx)("textarea",{ref:Be,className:Xt.textarea,readOnly:V,"aria-hidden":V,style:G?void 0:{borderColor:vt?H:void 0},placeholder:f,value:V?ue.replace(/\s+/g," "):ue,onChange:J=>mt(J.target.value),onFocus:()=>ke(!0),onBlur:()=>ke(!1),rows:2,onKeyDown:Le})})}),(0,an.jsx)("div",{"data-editor-actions":!0,className:G?Xt.sharedActions:void 0,style:G?void 0:{display:"contents"},children:(0,an.jsxs)("div",{className:Xt.actions,children:[j&&(0,an.jsx)("div",{className:Xt.deleteWrapper,children:(0,an.jsx)("button",{className:Xt.deleteButton,onClick:j,type:"button","aria-label":"Delete annotation",children:"Delete"})}),(0,an.jsx)("button",{className:Xt.cancel,onClick:w,children:"Cancel"}),(0,an.jsx)("button",{className:Xt.submit,style:{backgroundColor:H,opacity:ue.trim()||R?1:.4},onClick:Re,disabled:S||!ue.trim()&&!R,children:b})]})})]})}),Jy=(0,Lo.forwardRef)(function({element:i,timestamp:c,selectedText:d,placeholder:f="What should change?",initialValue:h="",submitLabel:b="Add",onSubmit:v,onCancel:w,onDelete:j,onOpenSource:L,allowEmpty:R=!1,style:H,accentColor:z="#3c82f7",isExiting:S=!1,onExitComplete:V,lightMode:B=!1,computedStyles:ne},ze){let[G,ue]=(0,Lo.useState)(!1),[mt,vt]=(0,Lo.useState)("initial"),ke=(0,Lo.useRef)(null),it=(0,Lo.useRef)(null);(0,Lo.useEffect)(()=>{s4(it.current?.getRootNode(),"annotation-popup",r4)},[]);let fe=(0,Lo.useRef)(null);(0,Lo.useEffect)(()=>{let Le=cn(()=>{vt(J=>J==="initial"?"enter":J)},0);return()=>{clearTimeout(Le),fe.current&&clearTimeout(fe.current)}},[]),(0,Lo.useEffect)(()=>{if(S)return;let Le=cn(()=>ke.current?.focus(),50);return()=>clearTimeout(Le)},[S]);let Be=(0,Lo.useCallback)(()=>{fe.current&&clearTimeout(fe.current),ue(!0),fe.current=cn(()=>{ue(!1),ke.current?.focus()},250)},[]);(0,Lo.useImperativeHandle)(ze,()=>({shake:Be}),[Be]);let Qe=(0,Lo.useCallback)(()=>{if(V){w();return}vt("exit")},[w,V]),Me=S?"exit":mt;Wy(it,Me==="exit",()=>{S?V?.():w()});let Re=[Xt.popup,B?Xt.light:"",Me==="enter"?Xt.enter:"",Me==="entered"?Xt.entered:"",Me==="exit"?Xt.exit:"",G&&Me!=="exit"?Xt.shake:""].filter(Boolean).join(" ");return(0,Uy.jsx)("div",{ref:it,className:Re,"data-annotation-popup":!0,style:H,onAnimationEnd:Le=>{Le.target===Le.currentTarget&&Le.animationName.includes("popupEnter")&&!S&&vt("entered")},onKeyDownCapture:Le=>{Le.key!=="Escape"||Le.nativeEvent.isComposing||(Le.preventDefault(),Le.stopPropagation(),Qe())},onClick:Le=>Le.stopPropagation(),children:(0,Uy.jsx)(c4,{ref:ke,element:i,timestamp:c,selectedText:d,placeholder:f,initialValue:h,submitLabel:b,onSubmit:v,onCancel:Qe,onDelete:j,onOpenSource:L,allowEmpty:R,accentColor:z,computedStyles:ne,disabled:Me==="exit"})})}),Xm=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Rn={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};var X8=({size:r=16})=>(0,qe.jsx)("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",children:(0,qe.jsx)("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})});var G8=({size:r=20,...i})=>(0,qe.jsxs)("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[(0,qe.jsx)("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),(0,qe.jsx)("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]});var Q8=({size:r=24,copied:i=!1,tint:c})=>(0,qe.jsxs)("svg",{ref:Zy("icon-transitions",Xm),width:r,height:r,viewBox:"0 0 24 24",fill:"none",style:c?{color:c,transition:"color 0.3s ease"}:void 0,children:[(0,qe.jsxs)("g",{className:`${Rn.iconState} ${i?Rn.hiddenScaled:Rn.visibleScaled}`,children:[(0,qe.jsx)("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),(0,qe.jsx)("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,qe.jsxs)("g",{className:`${Rn.iconState} ${i?Rn.visibleScaled:Rn.hiddenScaled}`,children:[(0,qe.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),P8=({size:r=24,state:i="idle"})=>{let c=i==="idle",d=i==="sent",f=i==="failed",h=i==="sending";return(0,qe.jsxs)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",children:[(0,qe.jsx)("g",{className:`${Rn.iconStateFast} ${c?Rn.visibleScaled:h?Rn.sending:Rn.hiddenScaled}`,children:(0,qe.jsx)("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,qe.jsxs)("g",{className:`${Rn.iconStateFast} ${d?Rn.visibleScaled:Rn.hiddenScaled}`,children:[(0,qe.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,qe.jsxs)("g",{className:`${Rn.iconStateFast} ${f?Rn.visibleScaled:Rn.hiddenScaled}`,children:[(0,qe.jsx)("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),(0,qe.jsx)("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})};var F8=({size:r=24,isOpen:i=!0})=>(0,qe.jsxs)("svg",{ref:Zy("icon-transitions",Xm),width:r,height:r,viewBox:"0 0 24 24",fill:"none",children:[(0,qe.jsxs)("g",{className:`${Rn.iconFade} ${i?Rn.visible:Rn.hidden}`,children:[(0,qe.jsx)("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,qe.jsxs)("g",{className:`${Rn.iconFade} ${i?Rn.hidden:Rn.visible}`,children:[(0,qe.jsx)("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),(0,qe.jsx)("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),W8=({size:r=24,isPaused:i=!1})=>(0,qe.jsxs)("svg",{ref:Zy("icon-transitions",Xm),width:r,height:r,viewBox:"0 0 24 24",fill:"none",children:[(0,qe.jsxs)("g",{className:`${Rn.iconFadeFast} ${i?Rn.hidden:Rn.visible}`,children:[(0,qe.jsx)("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,qe.jsx)("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),(0,qe.jsx)("path",{className:`${Rn.iconFadeFast} ${i?Rn.visible:Rn.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]});var Z8=({size:r=16})=>(0,qe.jsxs)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",children:[(0,qe.jsx)("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]});var J8=({size:r=16})=>(0,qe.jsx)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",children:(0,qe.jsx)("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})});var K8=({size:r=16})=>(0,qe.jsxs)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",children:[(0,qe.jsxs)("g",{clipPath:"url(#clip0_2_53)",children:[(0,qe.jsx)("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,qe.jsx)("defs",{children:(0,qe.jsx)("clipPath",{id:"clip0_2_53",children:(0,qe.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]});var e7=({size:r=16})=>(0,qe.jsxs)("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",children:[(0,qe.jsx)("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,qe.jsx)("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),t7=({size:r=16})=>(0,qe.jsx)("svg",{width:r,height:r,viewBox:"0 0 20 20",fill:"none",children:(0,qe.jsx)("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),n7=({size:r=16})=>(0,qe.jsx)("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qe.jsx)("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})});var o7=({size:r=16})=>(0,qe.jsx)("svg",{width:r,height:r,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,qe.jsx)("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});var l7=({size:r=24})=>(0,qe.jsxs)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"none",children:[(0,qe.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),(0,qe.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),(0,qe.jsx)("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),a7=({content:r,children:i,...c})=>{let[d,f]=(0,Ur.useState)(!1),[h,b]=(0,Ur.useState)(!1),[v,w]=(0,Ur.useState)({top:0,right:0}),j=(0,Ur.useRef)(null),L=(0,Ur.useRef)(null),R=(0,Ur.useRef)(null),H=()=>{if(j.current){let V=j.current.getBoundingClientRect();w({top:V.top+V.height/2,right:window.innerWidth-V.left+8})}},z=()=>{b(!0),R.current&&(clearTimeout(R.current),R.current=null),H(),L.current=cn(()=>{f(!0)},500)},S=()=>{L.current&&(clearTimeout(L.current),L.current=null),f(!1),R.current=cn(()=>{b(!1)},150)};return(0,Ur.useEffect)(()=>()=>{L.current&&clearTimeout(L.current),R.current&&clearTimeout(R.current)},[]),(0,pc.jsxs)(pc.Fragment,{children:[(0,pc.jsx)("span",{ref:j,onMouseEnter:z,onMouseLeave:S,...c,children:i}),h&&(0,u4.createPortal)((0,pc.jsx)("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:v.top,right:v.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:d?1:0,transition:"opacity 0.15s ease"},children:r}),document.body)]})},r7=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,ww={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"},hc=({content:r})=>(0,Iy.jsx)(a7,{className:ww.tooltip,content:r,children:(0,Iy.jsx)(G8,{className:ww.tooltipIcon})}),i7=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

:host {
  /* Set here rather than inline so a consumer className rule can still hide the toolbar. */
  display: contents;
  position: fixed;
  top: auto;
  left: auto;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 100000;
}

.styles-module__positionContext___AZFHE,
.styles-module__toolbar___wNsdK {
  position: inherit;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
  z-index: inherit;
}

.styles-module__toolbar___wNsdK {
  width: 337px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0.36s cubic-bezier(0.19, 1, 0.22, 1), top 0s, right 0s, bottom 0s;
}
.styles-module__toolbar___wNsdK[data-dragging=true] {
  transition: none;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 22px;
  padding: 5px;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__toolbar___wNsdK,
  .styles-module__toolbarContainer___dIhma {
    transition: none;
  }
}
.styles-module__buttonWrapper___rBcdv.styles-module__toggleWrapper___7N0-q {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
}

.styles-module__togglePlaceholder___wnqrL {
  width: 34px;
  flex: 0 0 34px;
  height: 34px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__toggleContent___0yfyP::before {
  content: "";
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  pointer-events: none;
  background: transparent;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: #fff;
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(255, 255, 255, 0.12);
}
.styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active::before, .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:active .styles-module__toggleGlyph___R7Oom {
  transform: scale(0.92);
}

.styles-module__toggleIcon___Jbtus {
  transform: translateY(-0.5px);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.styles-module__expandedToggle___F7SRN .styles-module__toggleIcon___Jbtus {
  transform: none;
}

.styles-module__toggleGlyph___R7Oom {
  overflow: visible;
  transition: transform 0.1s ease;
}
.styles-module__toggleGlyph___R7Oom path {
  transform-box: fill-box;
  transform-origin: center;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.16s ease;
}

.styles-module__toggleTopLine___hQaCm,
.styles-module__toggleMiddleLine___sFFVe {
  vector-effect: non-scaling-stroke;
}

.styles-module__toggleBottomLine___V-jX3 {
  transform-origin: left center;
}

.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleTopLine___hQaCm {
  transform: translateY(5.25px) rotate(45deg) scaleX(1.1422494);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleMiddleLine___sFFVe {
  transform: translateX(3.5px) rotate(-45deg) scaleX(2.4748737);
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleBottomLine___V-jX3 {
  transform: scaleX(0);
  opacity: 0;
}
.styles-module__toggleGlyph___R7Oom[data-active=true] .styles-module__toggleSparkle___eeF99 {
  transform: scale(0);
  opacity: 0;
}

.styles-module__toggleContent___0yfyP:focus-visible,
.styles-module__controlButton___8Q0jc:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: filter 0.14s ease-out, opacity 0.14s ease-out, transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  transition: filter 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.24s ease-out, transform 0.42s cubic-bezier(0.19, 1, 0.22, 1);
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(6px);
  transform: scale(0.4);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__controlsContent___9GJWU,
  .styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW,
  .styles-module__toggleContent___0yfyP,
  .styles-module__toggleContent___0yfyP::before,
  .styles-module__toggleGlyph___R7Oom,
  .styles-module__toggleIcon___Jbtus,
  .styles-module__toggleGlyph___R7Oom path {
    transition: none;
  }
  .styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
    filter: none;
    transform: none;
  }
}
.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-user-select: none;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -6px;
  transition: width 0.36s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1), margin 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.36s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 3px;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  z-index: 99999;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: min(280px, 100vw - 16px - 1.2rem);
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__toggleContent___0yfyP.styles-module__expandedToggle___F7SRN:hover::before {
  background: rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,de={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",positionContext:"styles-module__positionContext___AZFHE",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",buttonWrapper:"styles-module__buttonWrapper___rBcdv",toggleWrapper:"styles-module__toggleWrapper___7N0-q",togglePlaceholder:"styles-module__togglePlaceholder___wnqrL",toggleContent:"styles-module__toggleContent___0yfyP",expandedToggle:"styles-module__expandedToggle___F7SRN",toggleGlyph:"styles-module__toggleGlyph___R7Oom",toggleIcon:"styles-module__toggleIcon___Jbtus",toggleTopLine:"styles-module__toggleTopLine___hQaCm",toggleMiddleLine:"styles-module__toggleMiddleLine___sFFVe",toggleBottomLine:"styles-module__toggleBottomLine___V-jX3",toggleSparkle:"styles-module__toggleSparkle___eeF99",controlButton:"styles-module__controlButton___8Q0jc",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};function s7({active:r}){return(0,mc.jsxs)("svg",{className:de.toggleGlyph,"data-active":r,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,mc.jsx)("path",{className:de.toggleTopLine,d:"M5.5 6.75H18.5"}),(0,mc.jsx)("path",{className:de.toggleMiddleLine,d:"M5.5 12H11.5"}),(0,mc.jsx)("path",{className:de.toggleBottomLine,d:"M5.5 17.25H9.25"}),(0,mc.jsx)("path",{className:de.toggleSparkle,d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z"})]})}var Ve={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},d4=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Ve.navigation},{type:"header",label:"Header",...Ve.header},{type:"hero",label:"Hero",...Ve.hero},{type:"section",label:"Section",...Ve.section},{type:"sidebar",label:"Sidebar",...Ve.sidebar},{type:"footer",label:"Footer",...Ve.footer},{type:"modal",label:"Modal",...Ve.modal},{type:"banner",label:"Banner",...Ve.banner},{type:"drawer",label:"Drawer",...Ve.drawer},{type:"popover",label:"Popover",...Ve.popover},{type:"divider",label:"Divider",...Ve.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Ve.card},{type:"text",label:"Text",...Ve.text},{type:"image",label:"Image",...Ve.image},{type:"video",label:"Video",...Ve.video},{type:"table",label:"Table",...Ve.table},{type:"grid",label:"Grid",...Ve.grid},{type:"list",label:"List",...Ve.list},{type:"chart",label:"Chart",...Ve.chart},{type:"codeBlock",label:"Code Block",...Ve.codeBlock},{type:"map",label:"Map",...Ve.map},{type:"timeline",label:"Timeline",...Ve.timeline},{type:"calendar",label:"Calendar",...Ve.calendar},{type:"accordion",label:"Accordion",...Ve.accordion},{type:"carousel",label:"Carousel",...Ve.carousel},{type:"logo",label:"Logo",...Ve.logo},{type:"faq",label:"FAQ",...Ve.faq},{type:"gallery",label:"Gallery",...Ve.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Ve.button},{type:"input",label:"Input",...Ve.input},{type:"search",label:"Search",...Ve.search},{type:"form",label:"Form",...Ve.form},{type:"tabs",label:"Tabs",...Ve.tabs},{type:"dropdown",label:"Dropdown",...Ve.dropdown},{type:"toggle",label:"Toggle",...Ve.toggle},{type:"stepper",label:"Stepper",...Ve.stepper},{type:"rating",label:"Rating",...Ve.rating},{type:"fileUpload",label:"File Upload",...Ve.fileUpload},{type:"checkbox",label:"Checkbox",...Ve.checkbox},{type:"radio",label:"Radio",...Ve.radio},{type:"slider",label:"Slider",...Ve.slider},{type:"datePicker",label:"Date Picker",...Ve.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Ve.avatar},{type:"badge",label:"Badge",...Ve.badge},{type:"tag",label:"Tag",...Ve.tag},{type:"breadcrumb",label:"Breadcrumb",...Ve.breadcrumb},{type:"pagination",label:"Pagination",...Ve.pagination},{type:"progress",label:"Progress",...Ve.progress},{type:"alert",label:"Alert",...Ve.alert},{type:"toast",label:"Toast",...Ve.toast},{type:"notification",label:"Notification",...Ve.notification},{type:"tooltip",label:"Tooltip",...Ve.tooltip},{type:"stat",label:"Stat",...Ve.stat},{type:"skeleton",label:"Skeleton",...Ve.skeleton},{type:"chip",label:"Chip",...Ve.chip},{type:"icon",label:"Icon",...Ve.icon},{type:"spinner",label:"Spinner",...Ve.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Ve.pricing},{type:"testimonial",label:"Testimonial",...Ve.testimonial},{type:"cta",label:"CTA",...Ve.cta},{type:"productCard",label:"Product Card",...Ve.productCard},{type:"profile",label:"Profile",...Ve.profile},{type:"feature",label:"Feature",...Ve.feature},{type:"team",label:"Team",...Ve.team},{type:"login",label:"Login",...Ve.login},{type:"contact",label:"Contact",...Ve.contact}]}],nr={};for(let r of d4)for(let i of r.items)nr[i.type]=i;function he({w:r,h:i=3,strong:c}){return(0,y.jsx)("div",{style:{width:typeof r=="number"?`${r}px`:r,height:i,borderRadius:2,background:c?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Sn({w:r,h:i,radius:c=3,style:d}){return(0,y.jsx)("div",{style:{width:typeof r=="number"?`${r}px`:r,height:typeof i=="number"?`${i}px`:i,borderRadius:c,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...d}})}function Ml({size:r}){return(0,y.jsx)("div",{style:{width:r,height:r,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function c7({width:r,height:i}){let c=Math.max(8,i*.2);return(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${c}px`,gap:r*.02},children:[(0,y.jsx)(Sn,{w:Math.max(20,i*.5),h:Math.max(12,i*.4),radius:2}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",gap:r*.03,marginLeft:r*.04},children:[(0,y.jsx)(he,{w:r*.06}),(0,y.jsx)(he,{w:r*.07}),(0,y.jsx)(he,{w:r*.05}),(0,y.jsx)(he,{w:r*.06})]}),(0,y.jsx)(Sn,{w:r*.1,h:Math.min(28,i*.5),radius:4})]})}function u7({width:r,height:i,text:c}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:i*.05},children:[c?(0,y.jsx)("span",{style:{fontSize:Math.min(20,i*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:c}):(0,y.jsx)(he,{w:r*.5,h:Math.max(6,i*.04),strong:!0}),(0,y.jsx)(he,{w:r*.6}),(0,y.jsx)(he,{w:r*.4}),(0,y.jsx)(Sn,{w:Math.min(140,r*.2),h:Math.min(36,i*.12),radius:6,style:{marginTop:i*.06}})]})}function d7({width:r,height:i}){let c=Math.max(3,Math.floor(i/36));return(0,y.jsxs)("div",{style:{padding:r*.08,display:"flex",flexDirection:"column",gap:i*.03},children:[(0,y.jsx)(he,{w:r*.6,h:4,strong:!0}),Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,y.jsx)(Sn,{w:10,h:10,radius:2}),(0,y.jsx)(he,{w:r*(.4+f*17%30/100)})]},f))]})}function f7({width:r,height:i}){let c=Math.max(2,Math.min(4,Math.floor(r/160)));return(0,y.jsx)("div",{style:{display:"flex",padding:`${i*.12}px ${r*.03}px`,gap:r*.05},children:Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsx)(he,{w:"60%",h:3,strong:!0}),(0,y.jsx)(he,{w:"80%",h:2}),(0,y.jsx)(he,{w:"70%",h:2}),(0,y.jsx)(he,{w:"60%",h:2})]},f))})}function _7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsxs)("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,y.jsx)(he,{w:r*.3,h:4,strong:!0}),(0,y.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),(0,y.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,y.jsx)(he,{w:"90%"}),(0,y.jsx)(he,{w:"70%"}),(0,y.jsx)(he,{w:"80%"})]}),(0,y.jsxs)("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[(0,y.jsx)(Sn,{w:70,h:26,radius:4}),(0,y.jsx)(Sn,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function h7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,y.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,y.jsx)(he,{w:"70%",h:4,strong:!0}),(0,y.jsx)(he,{w:"95%",h:2}),(0,y.jsx)(he,{w:"85%",h:2}),(0,y.jsx)(he,{w:"50%",h:2})]})]})}function m7({width:r,height:i,text:c}){if(c)return(0,y.jsx)("div",{style:{padding:4,fontSize:Math.min(14,i*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:c});let d=Math.max(2,Math.floor(i/18));return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[(0,y.jsx)(he,{w:r*.6,h:5,strong:!0}),Array.from({length:d},(f,h)=>(0,y.jsx)(he,{w:`${70+h*13%25}%`,h:2},h))]})}function p7({width:r,height:i}){return(0,y.jsx)("div",{style:{height:"100%",position:"relative"},children:(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${i}`,preserveAspectRatio:"none",fill:"none",children:[(0,y.jsx)("line",{x1:"0",y1:"0",x2:r,y2:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,y.jsx)("line",{x1:r,y1:"0",x2:"0",y2:i,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,y.jsx)("circle",{cx:r*.3,cy:i*.3,r:Math.min(r,i)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function g7({width:r,height:i}){let c=Math.max(2,Math.min(5,Math.floor(r/100))),d=Math.max(2,Math.min(6,Math.floor(i/32)));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:c},(f,h)=>(0,y.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,y.jsx)(he,{w:"70%",h:3,strong:!0})},h))}),Array.from({length:d},(f,h)=>(0,y.jsx)("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:c},(b,v)=>(0,y.jsx)("div",{style:{flex:1,padding:"0 8px"},children:(0,y.jsx)(he,{w:`${50+(h*7+v*13)%40}%`,h:2})},v))},h))]})}function y7({width:r,height:i}){let c=Math.max(2,Math.floor(i/28));return(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[(0,y.jsx)(Ml,{size:8}),(0,y.jsx)(he,{w:`${55+f*17%35}%`,h:2})]},f))})}function b7({width:r,height:i,text:c}){return(0,y.jsx)("div",{style:{height:"100%",borderRadius:Math.min(8,i/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:c?(0,y.jsx)("span",{style:{fontSize:Math.min(13,i*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:c}):(0,y.jsx)(he,{w:Math.max(20,r*.5),h:3,strong:!0})})}function v7({width:r,height:i}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[(0,y.jsx)(he,{w:Math.min(80,r*.3),h:2}),(0,y.jsx)("div",{style:{height:Math.min(36,i*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:(0,y.jsx)(he,{w:"40%",h:2})})]})}function x7({width:r,height:i}){let c=Math.max(2,Math.min(5,Math.floor(i/56)));return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:i*.04,padding:8},children:[Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsx)(he,{w:60+f*17%30,h:2}),(0,y.jsx)(Sn,{w:"100%",h:28,radius:4})]},f)),(0,y.jsx)(Sn,{w:Math.min(120,r*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function w7({width:r,height:i}){let c=Math.max(2,Math.min(4,Math.floor(r/120)));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:c},(d,f)=>(0,y.jsx)("div",{style:{padding:"8px 12px",borderBottom:f===0?"2px solid var(--agd-bar-strong)":"none"},children:(0,y.jsx)(he,{w:60,h:3,strong:f===0})},f))}),(0,y.jsxs)("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[(0,y.jsx)(he,{w:"80%",h:2}),(0,y.jsx)(he,{w:"65%",h:2}),(0,y.jsx)(he,{w:"75%",h:2})]})]})}function S7({width:r,height:i}){let c=Math.min(r,i)/2;return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${i}`,fill:"none",children:[(0,y.jsx)("circle",{cx:r/2,cy:i/2,r:c-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),(0,y.jsx)("circle",{cx:r/2,cy:i*.38,r:c*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),(0,y.jsx)("path",{d:`M${r/2-c*.55} ${i*.78} C${r/2-c*.55} ${i*.55} ${r/2+c*.55} ${i*.55} ${r/2+c*.55} ${i*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function C7({width:r,height:i}){return(0,y.jsx)("div",{style:{height:"100%",borderRadius:i/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)(he,{w:Math.max(16,r*.5),h:2,strong:!0})})}function k7({width:r,height:i}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:i*.08},children:[(0,y.jsx)(he,{w:r*.5,h:Math.max(5,i*.06),strong:!0}),(0,y.jsx)(he,{w:r*.35})]})}function E7({width:r,height:i}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:i*.04,padding:r*.04},children:[(0,y.jsx)(he,{w:r*.3,h:4,strong:!0}),(0,y.jsx)(he,{w:r*.7}),(0,y.jsx)(he,{w:r*.5}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",gap:r*.03,marginTop:i*.06},children:[(0,y.jsx)(Sn,{w:"33%",h:"100%",radius:4}),(0,y.jsx)(Sn,{w:"33%",h:"100%",radius:4}),(0,y.jsx)(Sn,{w:"33%",h:"100%",radius:4})]})]})}function T7({width:r,height:i}){let c=Math.max(2,Math.min(4,Math.floor(r/140))),d=Math.max(1,Math.min(3,Math.floor(i/120)));return(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${c}, 1fr)`,gridTemplateRows:`repeat(${d}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:c*d},(f,h)=>(0,y.jsx)(Sn,{w:"100%",h:"100%",radius:4},h))})}function M7({width:r,height:i}){let c=Math.max(2,Math.floor((i-32)/28));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:(0,y.jsx)(he,{w:r*.5,h:3,strong:!0})}),(0,y.jsx)("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:c},(d,f)=>(0,y.jsx)("div",{style:{padding:"4px 6px",borderRadius:3,background:f===0?"var(--agd-fill)":"transparent"},children:(0,y.jsx)(he,{w:`${50+f*17%35}%`,h:2,strong:f===0})},f))})]})}function R7({width:r,height:i}){let c=Math.min(r,i)/2;return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${i}`,fill:"none",children:[(0,y.jsx)("rect",{x:"1",y:"1",width:r-2,height:i-2,rx:c,stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,y.jsx)("circle",{cx:r-c,cy:i/2,r:c*.7,fill:"var(--agd-bar)"})]})}function A7({width:r,height:i}){let c=Math.min(i/2,20);return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:c,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${c*.6}px`,gap:6},children:[(0,y.jsx)(Ml,{size:Math.min(14,i*.4)}),(0,y.jsx)(he,{w:"50%",h:2})]})}function O7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,y.jsx)(Ml,{size:Math.min(20,i*.5)}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(he,{w:"60%",h:3,strong:!0}),(0,y.jsx)(he,{w:"80%",h:2})]}),(0,y.jsx)("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function D7({width:r,height:i}){return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${i}`,fill:"none",children:[(0,y.jsx)("rect",{x:"0",y:"0",width:r,height:i,rx:i/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),(0,y.jsx)("rect",{x:"1",y:"1",width:r*.65,height:i-2,rx:(i-2)/2,fill:"var(--agd-bar)"})]})}function N7({width:r,height:i}){let c=Math.max(3,Math.min(7,Math.floor(r/50))),d=r/(c*2);return(0,y.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:c},(f,h)=>{let b=30+(h*37+17)%55;return(0,y.jsx)(Sn,{w:d,h:`${b}%`,radius:2},h)})})}function z7({width:r,height:i}){let c=Math.min(r,i)*.12;return(0,y.jsxs)("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,y.jsx)(Sn,{w:"100%",h:"100%",radius:4}),(0,y.jsx)("div",{style:{position:"absolute",width:c*2,height:c*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)("div",{style:{width:0,height:0,borderLeft:`${c*.6}px solid var(--agd-bar-strong)`,borderTop:`${c*.4}px solid transparent`,borderBottom:`${c*.4}px solid transparent`,marginLeft:c*.15}})})]})}function L7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsx)("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)(he,{w:"60%",h:2})}),(0,y.jsx)("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function B7({width:r,height:i}){let c=Math.max(2,Math.min(4,Math.floor(r/80)));return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[f>0&&(0,y.jsx)("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),(0,y.jsx)(he,{w:40+f*13%20,h:2,strong:f===c-1})]},f))})}function $7({width:r,height:i}){let c=Math.max(3,Math.min(5,Math.floor(r/40))),d=Math.min(28,i*.8);return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:c},(f,h)=>(0,y.jsx)(Sn,{w:d,h:d,radius:4,style:h===1?{background:"var(--agd-bar)"}:void 0},h))})}function H7({width:r}){return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:(0,y.jsx)("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function U7({width:r,height:i}){let c=Math.max(2,Math.min(4,Math.floor(i/40)));return(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:f===0?2:1},children:[(0,y.jsx)(he,{w:`${40+f*17%25}%`,h:3,strong:!0}),(0,y.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:f===0?"\u25BC":"\u25B6"})]},f))})}function I7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[(0,y.jsxs)("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[(0,y.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u2039"}),(0,y.jsx)(Sn,{w:"100%",h:"100%",radius:4}),(0,y.jsx)("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[(0,y.jsx)(Ml,{size:5}),(0,y.jsx)(Ml,{size:5}),(0,y.jsx)(Ml,{size:5})]})]})}function j7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:i*.04},children:[(0,y.jsx)(he,{w:r*.4,h:3,strong:!0}),(0,y.jsx)(he,{w:r*.3,h:6,strong:!0}),(0,y.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(c,d)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:4},children:[(0,y.jsx)(Ml,{size:5}),(0,y.jsx)(he,{w:`${50+d*17%35}%`,h:2})]},d))}),(0,y.jsx)(Sn,{w:r*.7,h:Math.min(32,i*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Y7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[(0,y.jsx)("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"\u201C"}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsx)(he,{w:"90%",h:2}),(0,y.jsx)(he,{w:"75%",h:2}),(0,y.jsx)(he,{w:"60%",h:2})]}),(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,y.jsx)(Ml,{size:20}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[(0,y.jsx)(he,{w:60,h:3,strong:!0}),(0,y.jsx)(he,{w:40,h:2})]})]})]})}function q7({width:r,height:i}){return(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:i*.08},children:[(0,y.jsx)(he,{w:r*.5,h:Math.max(4,i*.05),strong:!0}),(0,y.jsx)(he,{w:r*.35}),(0,y.jsx)(Sn,{w:Math.min(140,r*.25),h:Math.min(32,i*.15),radius:6,style:{marginTop:i*.04,background:"var(--agd-bar)"}})]})}function V7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,y.jsx)("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:(0,y.jsx)("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(he,{w:"40%",h:3,strong:!0}),(0,y.jsx)(he,{w:"70%",h:2})]})]})}function X7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[(0,y.jsx)(he,{w:r*.4,h:3,strong:!0}),(0,y.jsx)(Sn,{w:60,h:Math.min(24,i*.6),radius:4})]})}function G7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:i*.06},children:[(0,y.jsx)(he,{w:r*.5,h:2}),(0,y.jsx)(he,{w:r*.4,h:Math.max(8,i*.18),strong:!0}),(0,y.jsx)(he,{w:r*.3,h:2})]})}function Q7({width:r,height:i}){let c=Math.max(3,Math.min(5,Math.floor(r/100))),d=Math.min(12,i*.35);return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:c},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[(0,y.jsx)("div",{style:{width:d,height:d,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:h===0?"var(--agd-bar)":"transparent",flexShrink:0}}),h<c-1&&(0,y.jsx)("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},h))})}function P7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[(0,y.jsx)(he,{w:Math.max(16,r*.5),h:2,strong:!0}),(0,y.jsx)("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function F7({width:r,height:i}){let d=Math.min(i*.7,r/7.5);return(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:d*.2},children:Array.from({length:5},(f,h)=>(0,y.jsx)("svg",{width:d,height:d,viewBox:"0 0 16 16",fill:"none",children:(0,y.jsx)("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:h<3?"var(--agd-bar)":"none"})},h))})}function W7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${i}`,fill:"none",style:{position:"absolute",inset:0},children:[(0,y.jsx)("line",{x1:0,y1:i*.3,x2:r,y2:i*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),(0,y.jsx)("line",{x1:0,y1:i*.6,x2:r,y2:i*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),(0,y.jsx)("line",{x1:r*.4,y1:0,x2:r*.6,y2:i,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),(0,y.jsx)("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:(0,y.jsxs)("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[(0,y.jsx)("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),(0,y.jsx)("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Z7({width:r,height:i}){let c=Math.max(3,Math.min(5,Math.floor(i/60)));return(0,y.jsxs)("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[(0,y.jsx)("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[(0,y.jsx)(Ml,{size:8}),f<c-1&&(0,y.jsx)("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},f))}),(0,y.jsx)("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(he,{w:`${35+f*13%25}%`,h:3,strong:!0}),(0,y.jsx)(he,{w:`${50+f*17%30}%`,h:2})]},f))})]})}function J7({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:i*.06},children:[(0,y.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,y.jsx)("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,y.jsx)("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),(0,y.jsx)(he,{w:r*.4,h:2}),(0,y.jsx)(he,{w:r*.25,h:2})]})}function K7({width:r,height:i}){let c=Math.max(3,Math.min(8,Math.floor(i/20)));return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsxs)("div",{style:{display:"flex",gap:3,marginBottom:4},children:[(0,y.jsx)(Ml,{size:6}),(0,y.jsx)(Ml,{size:6}),(0,y.jsx)(Ml,{size:6})]}),Array.from({length:c},(d,f)=>(0,y.jsx)("div",{style:{display:"flex",gap:6,paddingLeft:f>0&&f<c-1?12:0},children:(0,y.jsx)(he,{w:`${25+f*23%50}%`,h:2,strong:f===0})},f))]})}function eC({width:r,height:i}){let f=Math.min((r-16)/7,(i-40)/6);return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[(0,y.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u2039"}),(0,y.jsx)(he,{w:r*.3,h:3,strong:!0}),(0,y.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,y.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(h,b)=>(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:f*.6},children:(0,y.jsx)(he,{w:f*.5,h:2})},`h${b}`)),Array.from({length:35},(h,b)=>(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:f},children:(0,y.jsx)("div",{style:{width:f*.6,height:f*.6,borderRadius:"50%",background:b===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:b===12?1:.3}})})},b))]})]})}function tC({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[(0,y.jsx)(Ml,{size:Math.min(32,i*.55)}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(he,{w:"50%",h:3,strong:!0}),(0,y.jsx)(he,{w:"75%",h:2})]}),(0,y.jsx)(he,{w:30,h:2})]})}function nC({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,y.jsx)("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),(0,y.jsxs)("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,y.jsx)(he,{w:"65%",h:4,strong:!0}),(0,y.jsx)(he,{w:"40%",h:3}),(0,y.jsx)("div",{style:{flex:1}}),(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,y.jsx)(he,{w:"30%",h:5,strong:!0}),(0,y.jsx)(Sn,{w:Math.min(70,r*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function oC({width:r,height:i}){let c=Math.min(48,i*.3);return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:i*.06},children:[(0,y.jsx)(Ml,{size:c}),(0,y.jsx)(he,{w:r*.45,h:4,strong:!0}),(0,y.jsx)(he,{w:r*.3,h:2}),(0,y.jsxs)("div",{style:{display:"flex",gap:r*.08,marginTop:i*.04},children:[(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,y.jsx)(he,{w:20,h:3,strong:!0}),(0,y.jsx)(he,{w:28,h:2})]}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,y.jsx)(he,{w:20,h:3,strong:!0}),(0,y.jsx)(he,{w:28,h:2})]}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[(0,y.jsx)(he,{w:20,h:3,strong:!0}),(0,y.jsx)(he,{w:28,h:2})]})]})]})}function lC({width:r,height:i}){let c=Math.max(r*.6,80),d=Math.max(3,Math.floor(i/40));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex"},children:[(0,y.jsx)("div",{style:{width:r-c,background:"var(--agd-fill)",opacity:.3}}),(0,y.jsxs)("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:r*.04},children:[(0,y.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:i*.06},children:[(0,y.jsx)(he,{w:c*.4,h:4,strong:!0}),(0,y.jsx)("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:d},(f,h)=>(0,y.jsx)("div",{style:{padding:"6px 0"},children:(0,y.jsx)(he,{w:`${50+h*17%35}%`,h:2,strong:h===0})},h))]})]})}function aC({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,y.jsxs)("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[(0,y.jsx)(he,{w:"70%",h:3,strong:!0}),(0,y.jsx)(he,{w:"90%",h:2}),(0,y.jsx)(he,{w:"60%",h:2})]}),(0,y.jsx)("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function rC({width:r,height:i}){let c=Math.min(i*.7,r*.3);return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:r*.08},children:[(0,y.jsx)(Sn,{w:c,h:c,radius:c*.25}),(0,y.jsx)(he,{w:r*.45,h:Math.max(4,i*.2),strong:!0})]})}function iC({width:r,height:i}){let c=Math.max(2,Math.min(5,Math.floor(i/56)));return(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:f===0?2:1},children:[(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:6},children:[(0,y.jsx)("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),(0,y.jsx)(he,{w:r*(.3+f*13%25/100),h:3,strong:!0})]}),(0,y.jsx)("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:f===0?"\u25BC":"\u25B6"})]},f))})}function sC({width:r,height:i}){let c=Math.max(2,Math.min(4,Math.floor(r/120))),d=Math.max(1,Math.min(3,Math.floor(i/120)));return(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${c}, 1fr)`,gridTemplateRows:`repeat(${d}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:c*d},(f,h)=>(0,y.jsx)("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[(0,y.jsx)("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),(0,y.jsx)("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},h))})}function cC({width:r,height:i}){let c=Math.min(r,i);return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${i}`,fill:"none",children:[(0,y.jsx)("rect",{x:"1",y:(i-c+2)/2,width:c-2,height:c-2,rx:c*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,y.jsx)("path",{d:`M${c*.25} ${i/2}l${c*.2} ${c*.2} ${c*.3}-${c*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function uC({width:r,height:i}){let c=Math.min(r,i)/2-1;return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${i}`,fill:"none",children:[(0,y.jsx)("circle",{cx:r/2,cy:i/2,r:c,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),(0,y.jsx)("circle",{cx:r/2,cy:i/2,r:c*.45,fill:"var(--agd-bar)"})]})}function dC({width:r,height:i}){let c=Math.max(2,i*.12),d=Math.min(i*.35,10),f=r*.55;return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[(0,y.jsx)("div",{style:{width:"100%",height:c,borderRadius:c/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:(0,y.jsx)("div",{style:{width:f,height:"100%",borderRadius:c/2,background:"var(--agd-bar)"}})}),(0,y.jsx)("div",{style:{position:"absolute",left:f-d,width:d*2,height:d*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function fC({width:r,height:i}){let c=Math.min(36,i*.15),d=7,f=4,h=Math.min((r-16)/d,(i-c-40)/(f+1));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsxs)("div",{style:{height:c,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[(0,y.jsx)(he,{w:"40%",h:2}),(0,y.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[(0,y.jsx)("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),(0,y.jsx)("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),(0,y.jsxs)("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[(0,y.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u2039"}),(0,y.jsx)(he,{w:r*.25,h:2,strong:!0}),(0,y.jsx)("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"\u203A"})]}),(0,y.jsx)("div",{style:{display:"grid",gridTemplateColumns:`repeat(${d}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:d*f},(b,v)=>(0,y.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:h},children:(0,y.jsx)("div",{style:{width:h*.5,height:h*.5,borderRadius:"50%",background:v===10?"var(--agd-bar)":"transparent"},children:(0,y.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:v===10?1:.25}})})})},v))})]})]})}function _C({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:i*.08,padding:4},children:[(0,y.jsx)("div",{style:{width:"100%",height:i*.2,borderRadius:4,background:"var(--agd-fill)"}}),(0,y.jsx)("div",{style:{width:"70%",height:Math.max(6,i*.1),borderRadius:3,background:"var(--agd-fill)"}}),(0,y.jsx)("div",{style:{width:"90%",height:Math.max(4,i*.06),borderRadius:3,background:"var(--agd-fill)"}}),(0,y.jsx)("div",{style:{width:"50%",height:Math.max(4,i*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function hC({width:r,height:i}){return(0,y.jsx)("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:(0,y.jsxs)("div",{style:{height:"100%",flex:1,borderRadius:i/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${i*.3}px`,gap:4},children:[(0,y.jsx)(he,{w:"60%",h:2,strong:!0}),(0,y.jsx)("div",{style:{width:Math.max(6,i*.3),height:Math.max(6,i*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function mC({width:r,height:i}){let c=Math.min(r,i);return(0,y.jsx)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${i}`,fill:"none",children:(0,y.jsx)("path",{d:`M${r/2} ${(i-c)/2+c*.1}l${c*.12} ${c*.25} ${c*.28} ${c*.04}-${c*.2} ${c*.2} ${c*.05} ${c*.28}-${c*.25}-${c*.12}-${c*.25} ${c*.12} ${c*.05}-${c*.28}-${c*.2}-${c*.2} ${c*.28}-${c*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function pC({width:r,height:i}){let c=Math.min(r,i)/2-2;return(0,y.jsxs)("svg",{width:"100%",height:"100%",viewBox:`0 0 ${r} ${i}`,fill:"none",children:[(0,y.jsx)("circle",{cx:r/2,cy:i/2,r:c,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),(0,y.jsx)("path",{d:`M${r/2} ${i/2-c}a${c} ${c} 0 0 1 ${c} ${c}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function gC({width:r,height:i}){let c=Math.min(36,i*.25,r*.12),d=Math.max(1,Math.min(3,Math.floor(i/80)));return(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:d},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",gap:r*.04,alignItems:"flex-start"},children:[(0,y.jsx)(Sn,{w:c,h:c,radius:c*.25}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[(0,y.jsx)(he,{w:`${40+h*13%20}%`,h:3,strong:!0}),(0,y.jsx)(he,{w:`${60+h*17%25}%`,h:2})]})]},h))})}function yC({width:r,height:i}){let c=Math.max(2,Math.min(4,Math.floor(r/120))),d=Math.min(36,i*.25);return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:i*.06,padding:i*.06},children:[(0,y.jsx)(he,{w:r*.3,h:4,strong:!0}),(0,y.jsx)("div",{style:{display:"flex",gap:r*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:c},(f,h)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[(0,y.jsx)(Ml,{size:d}),(0,y.jsx)(he,{w:r*.12,h:3,strong:!0}),(0,y.jsx)(he,{w:r*.08,h:2})]},h))})]})}function bC({width:r,height:i}){let c=Math.max(2,Math.min(3,Math.floor(i/80)));return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:r*.06,gap:i*.04},children:[(0,y.jsx)(he,{w:r*.5,h:Math.max(5,i*.04),strong:!0}),(0,y.jsx)(he,{w:r*.35,h:2}),(0,y.jsx)("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:i*.03,marginTop:i*.04},children:Array.from({length:c},(d,f)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(he,{w:Math.min(60,r*.2),h:2}),(0,y.jsx)(Sn,{w:"100%",h:Math.min(32,i*.1),radius:4})]},f))}),(0,y.jsx)(Sn,{w:"100%",h:Math.min(36,i*.12),radius:6,style:{marginTop:i*.03,background:"var(--agd-bar)"}}),(0,y.jsx)(he,{w:r*.4,h:2})]})}function vC({width:r,height:i}){return(0,y.jsxs)("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:r*.04,gap:i*.03},children:[(0,y.jsx)(he,{w:r*.4,h:4,strong:!0}),(0,y.jsx)(he,{w:r*.6,h:2}),(0,y.jsxs)("div",{style:{display:"flex",gap:6,marginTop:i*.03},children:[(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(he,{w:50,h:2}),(0,y.jsx)(Sn,{w:"100%",h:Math.min(28,i*.1),radius:4})]}),(0,y.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(he,{w:40,h:2}),(0,y.jsx)(Sn,{w:"100%",h:Math.min(28,i*.1),radius:4})]})]}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[(0,y.jsx)(he,{w:50,h:2}),(0,y.jsx)(Sn,{w:"100%",h:Math.min(28,i*.1),radius:4})]}),(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[(0,y.jsx)(he,{w:60,h:2}),(0,y.jsx)(Sn,{w:"100%",h:"100%",radius:4})]}),(0,y.jsx)(Sn,{w:Math.min(120,r*.3),h:Math.min(30,i*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var xC={navigation:c7,hero:u7,sidebar:d7,footer:f7,modal:_7,card:h7,text:m7,image:p7,table:g7,list:y7,button:b7,input:v7,form:x7,tabs:w7,avatar:S7,badge:C7,header:k7,section:E7,grid:T7,dropdown:M7,toggle:R7,search:A7,toast:O7,progress:D7,chart:N7,video:z7,tooltip:L7,breadcrumb:B7,pagination:$7,divider:H7,accordion:U7,carousel:I7,pricing:j7,testimonial:Y7,cta:q7,alert:V7,banner:X7,stat:G7,stepper:Q7,tag:P7,rating:F7,map:W7,timeline:Z7,fileUpload:J7,codeBlock:K7,calendar:eC,notification:tC,productCard:nC,profile:oC,drawer:lC,popover:aC,logo:rC,faq:iC,gallery:sC,checkbox:cC,radio:uC,slider:dC,datePicker:fC,skeleton:_C,chip:hC,icon:mC,spinner:pC,feature:gC,team:yC,login:bC,contact:vC};function wC({type:r,width:i,height:c,text:d}){let f=xC[r];return f?(0,y.jsx)("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:(0,y.jsx)(f,{width:i,height:c,text:d})}):(0,y.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,y.jsx)("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:r})})}var SC=`.styles-module__overlay___aWh-q svg[fill=none],
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] {
  fill: none !important;
}
.styles-module__overlay___aWh-q svg[fill=none] :not([fill]),
.styles-module__rearrangeOverlay___-3R3t svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  width: calc(100% - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q,
.styles-module__handleE___0hM5u,
.styles-module__handleS___JjDRv,
.styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj,
.styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after,
.styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa,
.styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after,
.styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__palette___C7iSH[data-panel-present=true] {
  visibility: visible;
}
.styles-module__palette___C7iSH[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__palette___C7iSH {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  width: 100%;
  text-align: left;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  -webkit-user-select: none;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  -webkit-user-select: none;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(88.0082041185%, 37.39404381%, 2.2663056855%);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}
.styles-module__canvasToggle___-QqSy:focus-visible,
.styles-module__paletteItem___6TlnA:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: -2px;
}`,se={overlay:"styles-module__overlay___aWh-q",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",overlayExiting:"styles-module__overlayExiting___iEmYr",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"},Qu=24,Rm=5;function Sw(r,i,c,d,f){let h=1/0,b=1/0,v=r.x,w=r.x+r.width,j=r.x+r.width/2,L=r.y,R=r.y+r.height,H=r.y+r.height/2,z=!d,S=z?[v,w,j]:[...d.left?[v]:[],...d.right?[w]:[]],V=z?[L,R,H]:[...d.top?[L]:[],...d.bottom?[R]:[]],B=[];for(let Qe of i)c.has(Qe.id)||B.push(Qe);f&&B.push(...f);for(let Qe of B){let Me=Qe.x,Re=Qe.x+Qe.width,Le=Qe.x+Qe.width/2,J=Qe.y,pe=Qe.y+Qe.height,He=Qe.y+Qe.height/2;for(let Ue of S)for(let Ne of[Me,Re,Le]){let st=Ne-Ue;Math.abs(st)<Rm&&Math.abs(st)<Math.abs(h)&&(h=st)}for(let Ue of V)for(let Ne of[J,pe,He]){let st=Ne-Ue;Math.abs(st)<Rm&&Math.abs(st)<Math.abs(b)&&(b=st)}}let ne=Math.abs(h)<Rm?h:0,ze=Math.abs(b)<Rm?b:0,G=[],ue=new Set,mt=v+ne,vt=w+ne,ke=j+ne,it=L+ze,fe=R+ze,Be=H+ze;for(let Qe of B){let Me=Qe.x,Re=Qe.x+Qe.width,Le=Qe.x+Qe.width/2,J=Qe.y,pe=Qe.y+Qe.height,He=Qe.y+Qe.height/2;for(let Ue of[Me,Le,Re])for(let Ne of[mt,ke,vt])if(Math.abs(Ne-Ue)<.5){let st=`x:${Math.round(Ue)}`;ue.has(st)||(ue.add(st),G.push({axis:"x",pos:Ue}))}for(let Ue of[J,He,pe])for(let Ne of[it,Be,fe])if(Math.abs(Ne-Ue)<.5){let st=`y:${Math.round(Ue)}`;ue.has(st)||(ue.add(st),G.push({axis:"y",pos:Ue}))}}return{dx:ne,dy:ze,guides:G}}function Cw(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function CC({placements:r,onChange:i,activeComponent:c,onActiveComponentChange:d,isDarkMode:f,exiting:h,onInteractionChange:b,className:v,passthrough:w,extraSnapRects:j,onSelectionChange:L,deselectSignal:R,onDragMove:H,onDragEnd:z,clearingPlacements:S,wireframe:V}){let[B,ne]=(0,un.useState)(new Set),[ze,G]=(0,un.useState)(null),[ue,mt]=(0,un.useState)(null),[vt,ke]=(0,un.useState)(null),[it,fe]=(0,un.useState)([]),[Be,Qe]=(0,un.useState)(null),[Me,Re]=(0,un.useState)(!1),Le=(0,un.useRef)(!1),[J,pe]=(0,un.useState)(new Set),He=(0,un.useRef)(new Map),Ue=(0,un.useRef)(null),Ne=(0,un.useRef)(null),st=(0,un.useRef)(r);st.current=r;let Ee=(0,un.useRef)(L);Ee.current=L;let ee=(0,un.useRef)(H);ee.current=H;let Oe=(0,un.useRef)(z);Oe.current=z;let ge=(0,un.useRef)(R);(0,un.useEffect)(()=>{R!==ge.current&&(ge.current=R,ne(new Set))},[R]),(0,un.useEffect)(()=>{S?.length&&(ne(ye=>new Set([...ye].filter(We=>!S.some(dt=>dt.id===We)))),Ne.current=null)},[S]),(0,un.useEffect)(()=>{let ye=We=>{let dt=We.composedPath()[0]||We.target;if(!(dt.tagName==="INPUT"||dt.tagName==="TEXTAREA"||dt.isContentEditable)){if((We.key==="Backspace"||We.key==="Delete")&&B.size>0){We.preventDefault();let ie=new Set(B);pe(ie),ne(new Set),cn(()=>{i(st.current.filter(Gt=>!ie.has(Gt.id))),pe(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(We.key)&&B.size>0){We.preventDefault();let ie=We.shiftKey?20:1,Gt=We.key==="ArrowLeft"?-ie:We.key==="ArrowRight"?ie:0,kt=We.key==="ArrowUp"?-ie:We.key==="ArrowDown"?ie:0;i(r.map(Bt=>B.has(Bt.id)?{...Bt,x:Math.max(0,Bt.x+Gt),y:Math.max(0,Bt.y+kt)}:Bt));return}if(We.key==="Escape"){c?d(null):B.size>0&&ne(new Set);return}}};return document.addEventListener("keydown",ye),()=>document.removeEventListener("keydown",ye)},[B,c,r,i,d]);let Ot=(0,un.useCallback)(ye=>{if(ye.button!==0||w||ye.target.closest(`.${se.placement}`))return;ye.preventDefault(),ye.stopPropagation();let dt=window.scrollY,Te=ye.clientX,ie=ye.clientY;if(c){Ne.current="place",b?.(!0);let Gt=!1,kt=Te,Bt=ie,Rt=Y=>{kt=Y.clientX,Bt=Y.clientY;let F=Math.abs(kt-Te),ce=Math.abs(Bt-ie);if((F>5||ce>5)&&(Gt=!0),Gt){let oe=Math.min(Te,kt),Ie=Math.min(ie,Bt),De=Math.abs(kt-Te),me=Math.abs(Bt-ie);G({x:oe,y:Ie,w:De,h:me}),ke({x:Y.clientX+12,y:Y.clientY+12,text:`${Math.round(De)} \xD7 ${Math.round(me)}`})}},le=Y=>{window.removeEventListener("mousemove",Rt),window.removeEventListener("mouseup",le),G(null),ke(null),Ne.current=null,b?.(!1);let F=Ve[c],ce,oe,Ie,De;Gt?(ce=Math.min(Te,kt),oe=Math.min(ie,Bt)+dt,Ie=Math.max(Qu,Math.abs(kt-Te)),De=Math.max(Qu,Math.abs(Bt-ie))):(Ie=F.width,De=F.height,ce=Te-Ie/2,oe=ie+dt-De/2),ce=Math.max(0,ce),oe=Math.max(0,oe);let me={id:Cw(),type:c,x:ce,y:oe,width:Ie,height:De,scrollY:dt,timestamp:Date.now()},je=[...r,me];i(je),ne(new Set([me.id])),d(null)};window.addEventListener("mousemove",Rt),window.addEventListener("mouseup",le)}else{ye.shiftKey||ne(new Set),Ne.current="select";let Gt=!1,kt=Rt=>{let le=Math.abs(Rt.clientX-Te),Y=Math.abs(Rt.clientY-ie);if((le>4||Y>4)&&(Gt=!0),Gt){let F=Math.min(Te,Rt.clientX),ce=Math.min(ie,Rt.clientY);mt({x:F,y:ce,w:Math.abs(Rt.clientX-Te),h:Math.abs(Rt.clientY-ie)})}},Bt=Rt=>{if(window.removeEventListener("mousemove",kt),window.removeEventListener("mouseup",Bt),Ne.current=null,Gt){let le=Math.min(Te,Rt.clientX),Y=Math.min(ie,Rt.clientY)+dt,F=Math.abs(Rt.clientX-Te),ce=Math.abs(Rt.clientY-ie),oe=new Set(ye.shiftKey?B:new Set);for(let Ie of r){let De=Ie.y-dt;Ie.x+Ie.width>le&&Ie.x<le+F&&Ie.y+Ie.height>Y&&Ie.y<Y+ce&&oe.add(Ie.id)}ne(oe)}mt(null)};window.addEventListener("mousemove",kt),window.addEventListener("mouseup",Bt)}},[c,w,r,i,B]),Nn=(0,un.useCallback)((ye,We)=>{if(ye.button!==0)return;let dt=ye.target;if(dt.closest(`.${se.handle}`)||dt.closest(`.${se.deleteButton}`))return;ye.preventDefault(),ye.stopPropagation();let Te;ye.shiftKey?(Te=new Set(B),Te.has(We)?Te.delete(We):Te.add(We)):B.has(We)?Te=new Set(B):Te=new Set([We]),ne(Te),(Te.size!==B.size||[...Te].some(je=>!B.has(je)))&&Ee.current?.(Te,ye.shiftKey);let Gt=window.scrollY,kt=ye.clientX,Bt=ye.clientY,Rt=new Map;for(let je of r)Te.has(je.id)&&Rt.set(je.id,{x:je.x,y:je.y});Ne.current="move",b?.(!0);let le=!1,Y=!1,F=r,ce=0,oe=0,Ie=new Map;for(let je of r)Rt.has(je.id)&&Ie.set(je.id,{w:je.width,h:je.height});let De=je=>{let rt=je.clientX-kt,xt=je.clientY-Bt;if((Math.abs(rt)>2||Math.abs(xt)>2)&&(le=!0),!le)return;if(je.altKey&&!Y){Y=!0;let Ht=[];for(let jt of r)Rt.has(jt.id)&&Ht.push({...jt,id:Cw(),timestamp:Date.now()});F=[...r,...Ht]}let $t=1/0,p=1/0,U=-1/0,ae=-1/0;for(let[Ht,jt]of Rt){let Ye=Ie.get(Ht);Ye&&($t=Math.min($t,jt.x+rt),p=Math.min(p,jt.y+xt),U=Math.max(U,jt.x+rt+Ye.w),ae=Math.max(ae,jt.y+xt+Ye.h))}let te={x:$t,y:p,width:U-$t,height:ae-p},{dx:ve,dy:et,guides:Ce}=Sw(te,F,new Set(Rt.keys()),void 0,j);fe(Ce);let Ae=rt+ve,Ge=xt+et;ce=Ae,oe=Ge,i(F.map(Ht=>{let jt=Rt.get(Ht.id);return jt?{...Ht,x:Math.max(0,jt.x+Ae),y:Math.max(0,jt.y+Ge)}:Ht})),ee.current?.(Ae,Ge)},me=()=>{window.removeEventListener("mousemove",De),window.removeEventListener("mouseup",me),Ne.current=null,b?.(!1),fe([]),Oe.current?.(ce,oe,le)};window.addEventListener("mousemove",De),window.addEventListener("mouseup",me)},[B,r,i,b]),Cn=(0,un.useCallback)((ye,We,dt)=>{ye.preventDefault(),ye.stopPropagation();let Te=r.find(oe=>oe.id===We);if(!Te)return;ne(new Set([We])),Ne.current="resize",b?.(!0);let ie=ye.clientX,Gt=ye.clientY,kt=Te.width,Bt=Te.height,Rt=Te.x,le=Te.y,Y={left:dt.includes("w"),right:dt.includes("e"),top:dt.includes("n"),bottom:dt.includes("s")},F=oe=>{let Ie=oe.clientX-ie,De=oe.clientY-Gt,me=kt,je=Bt,rt=Rt,xt=le;dt.includes("e")&&(me=Math.max(Qu,kt+Ie)),dt.includes("w")&&(me=Math.max(Qu,kt-Ie),rt=Rt+kt-me),dt.includes("s")&&(je=Math.max(Qu,Bt+De)),dt.includes("n")&&(je=Math.max(Qu,Bt-De),xt=le+Bt-je);let $t={x:rt,y:xt,width:me,height:je},{dx:p,dy:U,guides:ae}=Sw($t,st.current,new Set([We]),Y,j);fe(ae),p!==0&&(Y.right?me+=p:Y.left&&(rt+=p,me-=p)),U!==0&&(Y.bottom?je+=U:Y.top&&(xt+=U,je-=U)),i(st.current.map(te=>te.id===We?{...te,x:rt,y:xt,width:me,height:je}:te)),ke({x:oe.clientX+12,y:oe.clientY+12,text:`${Math.round(me)} \xD7 ${Math.round(je)}`})},ce=()=>{window.removeEventListener("mousemove",F),window.removeEventListener("mouseup",ce),ke(null),Ne.current=null,b?.(!1),fe([])};window.addEventListener("mousemove",F),window.addEventListener("mouseup",ce)},[r,i,b]),Pt=(0,un.useCallback)(ye=>{Ne.current=null,pe(We=>{let dt=new Set(We);return dt.add(ye),dt}),ne(We=>{let dt=new Set(We);return dt.delete(ye),dt}),cn(()=>{i(st.current.filter(We=>We.id!==ye)),pe(We=>{let dt=new Set(We);return dt.delete(ye),dt})},180)},[i]),In=new Set(["text","hero","button","badge","cta","toast","modal","card","navigation","tabs","input","search","breadcrumb","pricing","testimonial","alert","banner","tag","notification","stat","productCard"]),jn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},$o=(0,un.useCallback)(ye=>{let We=r.find(dt=>dt.id===ye);We&&(Le.current=!!We.text,Qe(ye),Re(!1))},[r]),zn=(0,un.useCallback)(()=>{Be&&(Re(!0),cn(()=>{Qe(null),Re(!1)},150))},[Be]);(0,un.useEffect)(()=>{h&&Be&&zn()},[h]);let Po=(0,un.useCallback)(ye=>{Be&&(i(r.map(We=>We.id===Be?{...We,text:ye.trim()||void 0}:We)),zn())},[Be,r,i,zn]),Ho=typeof window<"u"?window.scrollY:0,Ln=["nw","ne","se","sw"],ho=V?"#f97316":"#3c82f7",cl=[{dir:"n",cls:se.edgeN,arrow:(0,Dn.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Dn.jsx)("path",{d:"M4 0.5L1 4.5h6z",fill:ho})})},{dir:"e",cls:se.edgeE,arrow:(0,Dn.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Dn.jsx)("path",{d:"M5.5 4L1.5 1v6z",fill:ho})})},{dir:"s",cls:se.edgeS,arrow:(0,Dn.jsx)("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:(0,Dn.jsx)("path",{d:"M4 5.5L1 1.5h6z",fill:ho})})},{dir:"w",cls:se.edgeW,arrow:(0,Dn.jsx)("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:(0,Dn.jsx)("path",{d:"M0.5 4L4.5 1v6z",fill:ho})})}];return(0,Dn.jsxs)(Dn.Fragment,{children:[(0,Dn.jsx)("div",{ref:Ue,className:`${se.overlay} ${f?"":se.light} ${c?se.placing:""} ${w?se.passthrough:""} ${h?se.overlayExiting:""} ${V?se.wireframe:""}${v?` ${v}`:""}`,"data-feedback-toolbar":!0,onMouseDown:Ot,children:r.map(ye=>{let We=B.has(ye.id),dt=nr[ye.type]?.label||ye.type,Te=ye.y-Ho;return(0,Dn.jsxs)("div",{"data-design-placement":ye.id,className:`${se.placement} ${We?se.selected:""} ${J.has(ye.id)||S?.includes(ye)?se.exiting:""}`,style:{left:ye.x,top:Te,width:ye.width,height:ye.height,position:"fixed"},onMouseDown:ie=>Nn(ie,ye.id),onDoubleClick:()=>$o(ye.id),children:[(0,Dn.jsx)("span",{className:se.placementLabel,children:dt}),(0,Dn.jsx)("span",{className:`${se.placementAnnotation} ${ye.text?se.annotationVisible:""}`,children:(ye.text&&He.current.set(ye.id,ye.text),ye.text||He.current.get(ye.id)||"")}),(0,Dn.jsx)("div",{className:se.placementContent,children:(0,Dn.jsx)(wC,{type:ye.type,width:ye.width,height:ye.height,text:ye.text})}),(0,Dn.jsx)("div",{className:se.deleteButton,onMouseDown:ie=>ie.stopPropagation(),onClick:()=>Pt(ye.id),children:"\u2715"}),Ln.map(ie=>(0,Dn.jsx)("div",{className:`${se.handle} ${se[`handle${ie.charAt(0).toUpperCase()}${ie.slice(1)}`]}`,onMouseDown:Gt=>Cn(Gt,ye.id,ie)},ie)),cl.map(({dir:ie,cls:Gt,arrow:kt})=>(0,Dn.jsx)("div",{className:`${se.edgeHandle} ${Gt}`,onMouseDown:Bt=>Cn(Bt,ye.id,ie),children:kt},ie))]},ye.id)})}),Be&&(()=>{let ye=r.find(le=>le.id===Be);if(!ye)return null;let We=ye.y-Ho,dt=ye.x+ye.width/2,Te=We-8,ie=We+ye.height+8,Gt=Te>200,kt=ie<window.innerHeight-100,Bt=Math.max(160,Math.min(window.innerWidth-160,dt)),Rt;return Gt?Rt={left:Bt,bottom:window.innerHeight-Te}:kt?Rt={left:Bt,top:ie}:Rt={left:Bt,top:Math.max(80,window.innerHeight/2-80)},(0,Dn.jsx)(Jy,{element:nr[ye.type]?.label||ye.type,placeholder:jn[ye.type]||"Label or content text",initialValue:ye.text??"",submitLabel:Le.current?"Save":"Set",onSubmit:Po,onCancel:zn,onDelete:Le.current?()=>{Po("")}:void 0,isExiting:Me,lightMode:!f,style:Rt})})(),ze&&(0,Dn.jsx)("div",{className:se.drawBox,style:{left:ze.x,top:ze.y,width:ze.w,height:ze.h},"data-feedback-toolbar":!0}),ue&&(0,Dn.jsx)("div",{className:se.selectBox,style:{left:ue.x,top:ue.y,width:ue.w,height:ue.h},"data-feedback-toolbar":!0}),vt&&(0,Dn.jsx)("div",{className:se.sizeIndicator,style:{left:vt.x,top:vt.y},"data-feedback-toolbar":!0,children:vt.text}),it.map((ye,We)=>(0,Dn.jsx)("div",{className:se.guideLine,style:ye.axis==="x"?{position:"fixed",left:ye.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:ye.pos-Ho,right:0,height:1},"data-feedback-toolbar":!0},`${ye.axis}-${ye.pos}-${We}`))]})}function f4(r,{keepMounted:i=!1,onExited:c}={}){let[d,f]=(0,xs.useState)(i||r),h=(0,xs.useRef)(null),b=(0,xs.useRef)(c);return r&&!d&&f(!0),(0,xs.useLayoutEffect)(()=>{b.current=c},[c]),(0,xs.useLayoutEffect)(()=>{let v=h.current;if(!v||v.dataset.panelOpen==="true"===r)return;getComputedStyle(v).opacity,v.dataset.panelPresent="true",v.dataset.panelOpen=String(r);let w=!1,j=v.getAnimations?.()??[];return Promise.allSettled(j.map(L=>L.finished)).then(()=>{w||r||(delete v.dataset.panelPresent,i||f(!1),b.current?.())}),()=>{w=!0}},[r,d,i]),{ref:h,mounted:d}}function kC(r){if(!r)return"";let i=r.scrollTop>2,c=r.scrollTop+r.clientHeight<r.scrollHeight-2;return`${i?se.fadeTop:""} ${c?se.fadeBottom:""}`}var k="currentColor",re="0.5";function EC({type:r}){switch(r){case"navigation":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:k,opacity:".4"}),(0,g.jsx)("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:k,opacity:".25"})]});case"header":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:k,opacity:".35"}),(0,g.jsx)("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:k,opacity:".15"})]});case"hero":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:k,opacity:".35"}),(0,g.jsx)("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:k,strokeWidth:re})]});case"section":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:k,opacity:".3"}),(0,g.jsx)("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:k,opacity:".15"})]});case"sidebar":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:k,opacity:".3"}),(0,g.jsx)("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:k,opacity:".15"})]});case"footer":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:k,opacity:".2"})]});case"modal":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:k,opacity:".3"}),(0,g.jsx)("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:k,strokeWidth:re})]});case"divider":return(0,g.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,g.jsx)("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:k,strokeWidth:"0.5",opacity:".3"})});case"card":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:k,opacity:".04"}),(0,g.jsx)("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:k,opacity:".12"})]});case"text":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:k,opacity:".3"}),(0,g.jsx)("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:k,opacity:".12"})]});case"image":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:k,strokeWidth:".3",opacity:".25"}),(0,g.jsx)("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:k,strokeWidth:".3",opacity:".25"})]});case"video":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:k,strokeWidth:re,fill:k,opacity:".15"})]});case"table":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:k,strokeWidth:".3",opacity:".25"}),(0,g.jsx)("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:k,strokeWidth:".3",opacity:".25"}),(0,g.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:k,strokeWidth:".3",opacity:".25"}),(0,g.jsx)("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:k,strokeWidth:".3",opacity:".25"})]});case"grid":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:k,strokeWidth:re})]});case"list":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"3.5",cy:"8",r:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:k,opacity:".2"})]});case"chart":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:k,opacity:".3"}),(0,g.jsx)("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:k,opacity:".2"})]});case"accordion":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:k,strokeWidth:re})]});case"carousel":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:k,strokeWidth:re,opacity:".35"}),(0,g.jsx)("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:k,strokeWidth:re,opacity:".35"}),(0,g.jsx)("circle",{cx:"8.5",cy:"14",r:".6",fill:k,opacity:".35"}),(0,g.jsx)("circle",{cx:"10",cy:"14",r:".6",fill:k,opacity:".15"}),(0,g.jsx)("circle",{cx:"11.5",cy:"14",r:".6",fill:k,opacity:".15"})]});case"button":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:k,opacity:".25"})]});case"input":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:k,opacity:".12"})]});case"search":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:k,strokeWidth:re}),(0,g.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:k,strokeWidth:re,opacity:".3"}),(0,g.jsx)("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:k,strokeWidth:re,opacity:".3"}),(0,g.jsx)("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:k,opacity:".12"})]});case"form":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:k,strokeWidth:re})]});case"tabs":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:k,strokeWidth:re})]});case"dropdown":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:k,strokeWidth:re,opacity:".3"}),(0,g.jsx)("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:k,strokeWidth:re,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:k,strokeWidth:re}),(0,g.jsx)("circle",{cx:"13",cy:"8",r:"2",fill:k,opacity:".3"})]});case"avatar":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("circle",{cx:"10",cy:"8",r:"6",stroke:k,strokeWidth:re}),(0,g.jsx)("circle",{cx:"10",cy:"6.5",r:"2",stroke:k,strokeWidth:re}),(0,g.jsx)("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:k,strokeWidth:re})]});case"badge":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:k,opacity:".25"})]});case"breadcrumb":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:k,opacity:".3"}),(0,g.jsx)("path",{d:"M6.5 7l1 1-1 1",stroke:k,strokeWidth:re,opacity:".2"}),(0,g.jsx)("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("path",{d:"M14 7l1 1-1 1",stroke:k,strokeWidth:re,opacity:".2"}),(0,g.jsx)("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:k,opacity:".15"})]});case"pagination":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:k,opacity:".15",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:k,strokeWidth:re})]});case"progress":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:k,opacity:".2"})]});case"toast":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("circle",{cx:"5",cy:"8",r:"1.5",stroke:k,strokeWidth:re,opacity:".3"}),(0,g.jsx)("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".12"})]});case"tooltip":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("path",{d:"M9 10l1 2.5 1-2.5",stroke:k,strokeWidth:re})]});case"pricing":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:k,opacity:".1"}),(0,g.jsx)("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:k,opacity:".1"}),(0,g.jsx)("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:k,opacity:".2"})]});case"testimonial":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("text",{x:"4",y:"5.5",fontSize:"4",fill:k,opacity:".2",fontFamily:"serif",children:"\u201C"}),(0,g.jsx)("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:k,opacity:".12"}),(0,g.jsx)("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:k,strokeWidth:re,opacity:".25"}),(0,g.jsx)("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:k,opacity:".15"})]});case"cta":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:k,opacity:".3"}),(0,g.jsx)("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:k,strokeWidth:re})]});case"alert":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("circle",{cx:"6",cy:"8",r:"2",stroke:k,strokeWidth:re,opacity:".3"}),(0,g.jsx)("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:k,strokeWidth:"0.6",opacity:".5"}),(0,g.jsx)("circle",{cx:"6",cy:"9.3",r:".3",fill:k,opacity:".5"}),(0,g.jsx)("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:k,opacity:".2"})]});case"banner":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:k,strokeWidth:re})]});case"stat":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:k,opacity:".3"}),(0,g.jsx)("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:k,opacity:".12"})]});case"stepper":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("circle",{cx:"4",cy:"8",r:"2",fill:k,opacity:".2",stroke:k,strokeWidth:re}),(0,g.jsx)("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:k,strokeWidth:".4",opacity:".3"}),(0,g.jsx)("circle",{cx:"10",cy:"8",r:"2",stroke:k,strokeWidth:re}),(0,g.jsx)("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:k,strokeWidth:".4",opacity:".3"}),(0,g.jsx)("circle",{cx:"16",cy:"8",r:"2",stroke:k,strokeWidth:re})]});case"tag":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:k,strokeWidth:re,opacity:".2"}),(0,g.jsx)("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:k,strokeWidth:re,opacity:".2"})]});case"rating":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:k,opacity:".25"}),(0,g.jsx)("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:k,opacity:".25"}),(0,g.jsx)("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:k,strokeWidth:re,opacity:".25"})]});case"map":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:k,strokeWidth:".3",opacity:".15"}),(0,g.jsx)("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:k,strokeWidth:".3",opacity:".15"}),(0,g.jsx)("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:k,opacity:".15",stroke:k,strokeWidth:re})]});case"timeline":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:k,strokeWidth:".4",opacity:".25"}),(0,g.jsx)("circle",{cx:"5",cy:"4",r:"1.5",fill:k,opacity:".2",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("circle",{cx:"5",cy:"13",r:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:k,opacity:".15"})]});case"fileUpload":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:k,strokeWidth:re,strokeDasharray:"2 1"}),(0,g.jsx)("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:k,strokeWidth:re,opacity:".3"}),(0,g.jsx)("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:k,opacity:".15"})]});case"codeBlock":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("circle",{cx:"4",cy:"4",r:".6",fill:k,opacity:".3"}),(0,g.jsx)("circle",{cx:"5.5",cy:"4",r:".6",fill:k,opacity:".3"}),(0,g.jsx)("circle",{cx:"7",cy:"4",r:".6",fill:k,opacity:".3"}),(0,g.jsx)("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:k,opacity:".12"})]});case"calendar":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:k,strokeWidth:".4",opacity:".25"}),(0,g.jsx)("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:k,opacity:".2"}),(0,g.jsx)("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"7",cy:"9",r:".6",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"10",cy:"9",r:".6",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"13",cy:"9",r:".6",fill:k,opacity:".3"}),(0,g.jsx)("circle",{cx:"7",cy:"12",r:".6",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"10",cy:"12",r:".6",fill:k,opacity:".2"})]});case"notification":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("circle",{cx:"5.5",cy:"8",r:"2",stroke:k,strokeWidth:re,opacity:".25"}),(0,g.jsx)("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:k,opacity:".12"}),(0,g.jsx)("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:k,opacity:".25"})]});case"productCard":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:k,opacity:".04"}),(0,g.jsx)("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:k,strokeWidth:re})]});case"profile":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("circle",{cx:"10",cy:"5",r:"3",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:k,opacity:".12"})]});case"drawer":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:k,strokeWidth:re,opacity:".15"})]});case"popover":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("path",{d:"M9 11l1 2.5 1-2.5",stroke:k,strokeWidth:re})]});case"logo":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:k,strokeWidth:re}),(0,g.jsx)("path",{d:"M5 9.5l2-4 2 4",stroke:k,strokeWidth:re,opacity:".3"}),(0,g.jsx)("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:k,opacity:".12"})]});case"faq":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("text",{x:"2.5",y:"5.5",fontSize:"4",fill:k,opacity:".3",fontWeight:"bold",children:"?"}),(0,g.jsx)("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:k,opacity:".12"}),(0,g.jsx)("text",{x:"2.5",y:"11.5",fontSize:"4",fill:k,opacity:".3",fontWeight:"bold",children:"?"}),(0,g.jsx)("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:k,opacity:".12"})]});case"gallery":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:k,strokeWidth:re})]});case"checkbox":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:k,strokeWidth:re,opacity:".35"})]});case"radio":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("circle",{cx:"10",cy:"8",r:"4",stroke:k,strokeWidth:re}),(0,g.jsx)("circle",{cx:"10",cy:"8",r:"2",fill:k,opacity:".3"})]});case"slider":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("circle",{cx:"12",cy:"8",r:"2.5",stroke:k,strokeWidth:re})]});case"datePicker":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:k,opacity:".12"}),(0,g.jsx)("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:k,strokeWidth:re,strokeDasharray:"2 1",opacity:".3"}),(0,g.jsx)("circle",{cx:"6",cy:"10",r:".6",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"10",cy:"10",r:".6",fill:k,opacity:".3"}),(0,g.jsx)("circle",{cx:"14",cy:"10",r:".6",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"6",cy:"13",r:".6",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"10",cy:"13",r:".6",fill:k,opacity:".2"})]});case"skeleton":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:k,opacity:".08"}),(0,g.jsx)("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:k,opacity:".08"}),(0,g.jsx)("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:k,opacity:".08"})]});case"chip":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:k,opacity:".08",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:k,strokeWidth:re,opacity:".2"}),(0,g.jsx)("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:k,strokeWidth:re,opacity:".2"}),(0,g.jsx)("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:k,strokeWidth:re,opacity:".25"})]});case"icon":return(0,g.jsx)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:(0,g.jsx)("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:k,strokeWidth:re,opacity:".3"})});case"spinner":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("circle",{cx:"10",cy:"8",r:"5",stroke:k,strokeWidth:re,opacity:".12"}),(0,g.jsx)("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:k,strokeWidth:re,opacity:".35",strokeLinecap:"round"})]});case"feature":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:k,strokeWidth:re,opacity:".25"}),(0,g.jsx)("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:k,opacity:".12"}),(0,g.jsx)("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:k,opacity:".12"})]});case"team":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("circle",{cx:"5",cy:"5",r:"2.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"15",cy:"5",r:"2.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("circle",{cx:"10",cy:"5",r:"2.5",stroke:k,strokeWidth:re,opacity:".5"}),(0,g.jsx)("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:k,opacity:".15"}),(0,g.jsx)("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:k,opacity:".1"})]});case"login":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:k,opacity:".25"}),(0,g.jsx)("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:k,opacity:".2"})]});case"contact":return(0,g.jsxs)("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[(0,g.jsx)("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:k,opacity:".2"}),(0,g.jsx)("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:k,strokeWidth:re}),(0,g.jsx)("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:k,opacity:".2"})]});default:return null}}function TC({activeType:r,onSelect:i,onDragStart:c,scrollRef:d,fadeClass:f,blankCanvas:h}){return(0,g.jsx)("div",{ref:d,className:`${se.placeScroll} ${f||""}`,children:d4.map(b=>(0,g.jsxs)("div",{className:se.paletteSection,children:[(0,g.jsx)("div",{className:se.paletteSectionTitle,children:b.section}),b.items.map(v=>(0,g.jsxs)("button",{type:"button","aria-pressed":r===v.type,className:`${se.paletteItem} ${r===v.type?se.active:""} ${h?se.wireframe:""}`,onClick:()=>i(v.type),onMouseDown:w=>{w.button===0&&c(v.type,w)},children:[(0,g.jsx)("span",{className:se.paletteItemIcon,"aria-hidden":"true",children:(0,g.jsx)(EC,{type:v.type})}),(0,g.jsx)("span",{className:se.paletteItemLabel,children:v.label})]},v.type))]},b.section))})}function MC({value:r,suffix:i}){let[c,d]=(0,Bo.useState)(null),[f,h]=(0,Bo.useState)(i),[b,v]=(0,Bo.useState)("up"),w=(0,Bo.useRef)(r),j=(0,Bo.useRef)(i),L=(0,Bo.useRef)(),R=c!==null&&f!==i;return(0,Bo.useEffect)(()=>{if(r!==w.current){if(r===0){w.current=r,j.current=i,d(null);return}v(r>w.current?"up":"down"),d(w.current),h(j.current),w.current=r,j.current=i,clearTimeout(L.current),L.current=cn(()=>d(null),250)}else j.current=i},[r,i]),c===null?(0,g.jsxs)(g.Fragment,{children:[r,i?` ${i}`:""]}):R?(0,g.jsxs)("span",{className:se.rollingWrap,children:[(0,g.jsxs)("span",{style:{visibility:"hidden"},children:[r," ",i]}),(0,g.jsxs)("span",{className:`${se.rollingNum} ${b==="up"?se.exitUp:se.exitDown}`,children:[c," ",f]},`o${c}-${r}`),(0,g.jsxs)("span",{className:`${se.rollingNum} ${b==="up"?se.enterUp:se.enterDown}`,children:[r," ",i]},`n${r}`)]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("span",{className:se.rollingWrap,children:[(0,g.jsx)("span",{style:{visibility:"hidden"},children:r}),(0,g.jsx)("span",{className:`${se.rollingNum} ${b==="up"?se.exitUp:se.exitDown}`,children:c},`o${c}-${r}`),(0,g.jsx)("span",{className:`${se.rollingNum} ${b==="up"?se.enterUp:se.enterDown}`,children:r},`n${r}`)]}),i?` ${i}`:""]})}function RC({activeType:r,onSelect:i,isDarkMode:c,sectionCount:d,onDetectSections:f,visible:h,onExited:b,placementCount:v,onClearPlacements:w,onDragStart:j,blankCanvas:L,onBlankCanvasChange:R,wireframePurpose:H,onWireframePurposeChange:z,Tooltip:S}){let{ref:V,mounted:B}=f4(h,{onExited:b}),[ne,ze]=(0,Bo.useState)(!1),[G,ue]=(0,Bo.useState)(!0),mt=(0,Bo.useRef)(0),vt=(0,Bo.useRef)(""),ke=(0,Bo.useRef)(null),[it,fe]=(0,Bo.useState)(""),Be=v>0||d>0,Qe=v+d;if(Qe>0&&(mt.current=Qe,vt.current=L?Qe===1?"Component":"Components":Qe===1?"Change":"Changes"),(0,Bo.useEffect)(()=>{if(Be)ne?ue(!1):(ue(!0),ze(!0),Im(()=>{Im(()=>{ue(!1)})}));else{ue(!0);let Re=cn(()=>ze(!1),300);return()=>clearTimeout(Re)}},[Be]),(0,Bo.useEffect)(()=>{if(!h)return;let Re=ke.current;if(!Re)return;let Le=()=>fe(kC(Re));Re.addEventListener("scroll",Le,{passive:!0});let J=new ResizeObserver(Le);return J.observe(Re),()=>{Re.removeEventListener("scroll",Le),J.disconnect()}},[h]),!B)return null;let Me=[];return v>0&&Me.push("placed"),d>0&&Me.push("captured"),(0,g.jsxs)("div",{className:`${se.palette} ${c?"":se.light}`,ref:Re=>{V.current=Re,Re?.toggleAttribute("inert",!h)},"aria-hidden":!h,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:Re=>Re.stopPropagation(),onMouseDown:Re=>Re.stopPropagation(),children:[(0,g.jsxs)("div",{className:se.paletteHeader,children:[(0,g.jsx)("div",{className:se.paletteHeaderTitle,children:"Layout Mode"}),(0,g.jsxs)("div",{className:se.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",(0,g.jsx)("a",{href:"https://agentation.com/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),(0,g.jsxs)("button",{type:"button","aria-pressed":L,className:`${se.canvasToggle} ${L?se.active:""}`,onClick:()=>R(!L),children:[(0,g.jsx)("span",{className:se.canvasToggleIcon,"aria-hidden":"true",children:(0,g.jsxs)("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[(0,g.jsx)("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),(0,g.jsx)("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,g.jsx)("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,g.jsx)("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,g.jsx)("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,g.jsx)("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,g.jsx)("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),(0,g.jsx)("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,g.jsx)("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),(0,g.jsx)("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),(0,g.jsx)("span",{className:se.canvasToggleLabel,children:"Wireframe New Page"})]}),(0,g.jsx)("div",{className:`${se.wireframePurposeWrap} ${L?"":se.collapsed}`,"aria-hidden":!L,ref:Re=>{Re?.toggleAttribute("inert",!L)},children:(0,g.jsx)("div",{className:se.wireframePurposeInner,children:(0,g.jsx)("textarea",{className:se.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:H,onChange:Re=>z(Re.target.value),rows:2})})}),(0,g.jsx)(TC,{activeType:r,onSelect:i,onDragStart:j,scrollRef:ke,fadeClass:it,blankCanvas:L}),ne&&(0,g.jsx)("div",{className:`${se.paletteFooterWrap} ${G?se.footerHidden:""}`,children:(0,g.jsx)("div",{className:se.paletteFooterInner,children:(0,g.jsx)("div",{className:se.paletteFooterInnerContent,children:(0,g.jsxs)("div",{className:se.paletteFooter,children:[(0,g.jsx)("span",{className:se.paletteFooterCount,children:(0,g.jsx)(MC,{value:mt.current,suffix:vt.current})}),(0,g.jsx)("button",{className:se.paletteFooterClear,onClick:w,children:"Clear"})]})})})})]})}var AC=new Set(["nav","header","main","section","article","footer","aside"]),jy={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},kw={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},OC=new Set(["script","style","noscript","link","meta"]),DC=40;function _4(r){let i=r;for(;i&&i!==document.body&&i!==document.documentElement;){let c=window.getComputedStyle(i).position;if(c==="fixed"||c==="sticky")return!0;i=i.parentElement}return!1}function gc(r){let i=r.tagName.toLowerCase();if(["nav","header","footer","main"].includes(i)&&document.querySelectorAll(i).length===1)return i;if(r.id)return`#${CSS.escape(r.id)}`;if(r.className&&typeof r.className=="string"){let f=r.className.split(/\s+/).filter(h=>h.length>0).find(h=>h.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(h)&&!/^[a-z]{1,2}$/.test(h));if(f){let h=`${i}.${CSS.escape(f)}`;if(document.querySelectorAll(h).length===1)return h}}let c=r.parentElement;if(c){let f=Array.from(c.children).indexOf(r)+1;return`${c===document.body?"body":gc(c)} > ${i}:nth-child(${f})`}return i}function jm(r){let i=r.tagName.toLowerCase(),c=r.getAttribute("aria-label");if(c)return c;let d=r.getAttribute("role");if(d&&jy[d])return jy[d];if(kw[i])return kw[i];let f=r.querySelector("h1, h2, h3, h4, h5, h6");if(f){let b=f.textContent?.trim();if(b&&b.length<=50)return b;if(b)return b.slice(0,47)+"..."}let{name:h}=Fu(r);return h.charAt(0).toUpperCase()+h.slice(1)}function h4(r){let i=r.className;return typeof i!="string"||!i?null:i.split(/\s+/).map(d=>d.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(d=>d.length>2&&!/^[a-z]{1,2}$/.test(d))||null}function m4(r){let i=r.textContent?.trim();if(!i)return null;let c=i.replace(/\s+/g," ");return c.length<=30?c:c.slice(0,30)+"\u2026"}function NC(){let r=document.querySelector("main")||document.body,i=Array.from(r.children),c=i;r!==document.body&&i.length<3&&(c=Array.from(document.body.children));let d=[];return c.forEach((f,h)=>{if(!(f instanceof HTMLElement))return;let b=f.tagName.toLowerCase();if(OC.has(b)||f.hasAttribute("data-feedback-toolbar")||f.closest("[data-feedback-toolbar]"))return;let v=window.getComputedStyle(f);if(v.display==="none"||v.visibility==="hidden")return;let w=f.getBoundingClientRect();if(w.height<DC)return;let j=AC.has(b),L=f.getAttribute("role")&&jy[f.getAttribute("role")],R=b==="div"&&w.height>=60;if(!j&&!L&&!R)return;let H=window.scrollY,z=_4(f),S={x:w.x,y:z?w.y:w.y+H,width:w.width,height:w.height};d.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jm(f),tagName:b,selector:gc(f),role:f.getAttribute("role"),className:h4(f),textSnippet:m4(f),originalRect:S,currentRect:{...S},originalIndex:h,isFixed:z})}),d}function zC(r){let i=window.scrollY,c=r.getBoundingClientRect(),d=_4(r),f={x:c.x,y:d?c.y:c.y+i,width:c.width,height:c.height},h=r.parentElement,b=0;return h&&(b=Array.from(h.children).indexOf(r)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:jm(r),tagName:r.tagName.toLowerCase(),selector:gc(r),role:r.getAttribute("role"),className:h4(r),textSnippet:m4(r),originalRect:f,currentRect:{...f},originalIndex:b,isFixed:d}}var Ew={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},Tw=["nw","n","ne","e","se","s","sw","w"],Am=24,Mw=16,Om=5;function Rw(r,i,c,d){let f=1/0,h=1/0,b=r.x,v=r.x+r.width,w=r.x+r.width/2,j=r.y,L=r.y+r.height,R=r.y+r.height/2,H=[];for(let ke of i)c.has(ke.id)||H.push(ke.currentRect);d&&H.push(...d);for(let ke of H){let it=ke.x,fe=ke.x+ke.width,Be=ke.x+ke.width/2,Qe=ke.y,Me=ke.y+ke.height,Re=ke.y+ke.height/2;for(let Le of[b,v,w])for(let J of[it,fe,Be]){let pe=J-Le;Math.abs(pe)<Om&&Math.abs(pe)<Math.abs(f)&&(f=pe)}for(let Le of[j,L,R])for(let J of[Qe,Me,Re]){let pe=J-Le;Math.abs(pe)<Om&&Math.abs(pe)<Math.abs(h)&&(h=pe)}}let z=Math.abs(f)<Om?f:0,S=Math.abs(h)<Om?h:0,V=[],B=new Set,ne=b+z,ze=v+z,G=w+z,ue=j+S,mt=L+S,vt=R+S;for(let ke of H){let it=ke.x,fe=ke.x+ke.width,Be=ke.x+ke.width/2,Qe=ke.y,Me=ke.y+ke.height,Re=ke.y+ke.height/2;for(let Le of[it,Be,fe])for(let J of[ne,G,ze])if(Math.abs(J-Le)<.5){let pe=`x:${Math.round(Le)}`;B.has(pe)||(B.add(pe),V.push({axis:"x",pos:Le}))}for(let Le of[Qe,Re,Me])for(let J of[ue,vt,mt])if(Math.abs(J-Le)<.5){let pe=`y:${Math.round(Le)}`;B.has(pe)||(B.add(pe),V.push({axis:"y",pos:Le}))}}return{dx:z,dy:S,guides:V}}var LC=new Set(["script","style","noscript","link","meta","br","hr"]);function Aw(r){let i=r;for(;i&&i!==document.body&&i!==document.documentElement;){if(i.closest("[data-feedback-toolbar]"))return null;if(LC.has(i.tagName.toLowerCase())){i=i.parentElement;continue}let c=i.getBoundingClientRect();if(c.width>=Mw&&c.height>=Mw)return i;i=i.parentElement}return null}function BC({rearrangeState:r,onChange:i,isDarkMode:c,exiting:d,className:f,blankCanvas:h,extraSnapRects:b,onSelectionChange:v,deselectSignal:w,onDragMove:j,onDragEnd:L,clearing:R}){let{sections:H}=r,z=(0,St.useRef)(r);z.current=r;let[S,V]=(0,St.useState)(new Set);(0,St.useEffect)(()=>{R&&V(new Set)},[R]);let B=(0,St.useRef)(w);(0,St.useEffect)(()=>{w!==B.current&&(B.current=w,V(new Set))},[w]);let[ne,ze]=(0,St.useState)(null),[G,ue]=(0,St.useState)(!1),mt=(0,St.useRef)(!1),vt=(0,St.useCallback)(Y=>{let F=H.find(ce=>ce.id===Y);F&&(mt.current=!!F.note,ze(Y),ue(!1))},[H]),ke=(0,St.useCallback)(()=>{ne&&(ue(!0),cn(()=>{ze(null),ue(!1)},150))},[ne]),it=(0,St.useCallback)(Y=>{ne&&(i({...r,sections:H.map(F=>F.id===ne?{...F,note:Y.trim()||void 0}:F)}),ke())},[ne,H,r,i,ke]);(0,St.useEffect)(()=>{d&&ne&&ke()},[d]);let[fe,Be]=(0,St.useState)(new Set),Qe=(0,St.useRef)(new Map),[Me,Re]=(0,St.useState)(null),[Le,J]=(0,St.useState)(null),[pe,He]=(0,St.useState)([]),[Ue,Ne]=(0,St.useState)(0),st=(0,St.useRef)(null),Ee=(0,St.useRef)(new Set),ee=(0,St.useRef)(new Map),[Oe,ge]=(0,St.useState)(new Map),[Ot,Nn]=(0,St.useState)(new Map),Cn=(0,St.useRef)(new Set),Pt=(0,St.useRef)(new Map),In=(0,St.useRef)(v);In.current=v;let jn=(0,St.useRef)(j);jn.current=j;let $o=(0,St.useRef)(L);$o.current=L,(0,St.useEffect)(()=>{h&&V(new Set)},[h]);let[zn,Po]=(0,St.useState)(()=>!r.sections.some(Y=>{let F=Y.originalRect,ce=Y.currentRect;return Math.abs(F.x-ce.x)>1||Math.abs(F.y-ce.y)>1||Math.abs(F.width-ce.width)>1||Math.abs(F.height-ce.height)>1}));(0,St.useEffect)(()=>{if(!zn){let Y=cn(()=>Po(!0),380);return()=>clearTimeout(Y)}},[]);let Ho=(0,St.useRef)(new Set);(0,St.useEffect)(()=>{Ho.current=new Set(H.map(Y=>Y.selector))},[H]),(0,St.useEffect)(()=>{let Y=()=>Ne(window.scrollY);return Y(),window.addEventListener("scroll",Y,{passive:!0}),window.addEventListener("resize",Y,{passive:!0}),()=>{window.removeEventListener("scroll",Y),window.removeEventListener("resize",Y)}},[]),(0,St.useEffect)(()=>{let Y=F=>{if(st.current){Re(null);return}let ce=document.elementFromPoint(F.clientX,F.clientY);if(!ce){Re(null);return}if(ce.closest("[data-feedback-toolbar]")){Re(null);return}if(ce.closest("[data-design-placement]")){Re(null);return}if(ce.closest("[data-annotation-popup]")){Re(null);return}let oe=Aw(ce);if(!oe){Re(null);return}for(let De of Ho.current)try{let me=document.querySelector(De);if(me&&(me===oe||oe.contains(me))){Re(null);return}}catch{}let Ie=oe.getBoundingClientRect();Re({x:Ie.x,y:Ie.y,w:Ie.width,h:Ie.height})};return document.addEventListener("mousemove",Y,{passive:!0}),()=>document.removeEventListener("mousemove",Y)},[H]),(0,St.useEffect)(()=>{let Y=document.body.style.userSelect;return document.body.style.webkitUserSelect="none",document.body.style.userSelect="none",()=>{document.body.style.webkitUserSelect=Y,document.body.style.userSelect=Y}},[]),(0,St.useEffect)(()=>{let Y=F=>{if(st.current||F.button!==0)return;let ce=F.composedPath()[0]??F.target;if(!ce||ce.closest("[data-feedback-toolbar]")||ce.closest("[data-design-placement]")||ce.closest("[data-annotation-popup]"))return;let oe=Aw(ce),Ie=!1;if(oe)for(let me of Ho.current)try{let je=document.querySelector(me);if(je&&(je===oe||oe.contains(je))){Ie=!0;break}}catch{}let De=!!(F.shiftKey||F.metaKey||F.ctrlKey);if(oe&&!Ie){F.preventDefault(),F.stopPropagation();let me=zC(oe),je=[...H,me],rt=[...r.originalOrder,me.id];i({...r,sections:je,originalOrder:rt});let xt=new Set([me.id]);V(xt),In.current?.(xt,De),Re(null);let $t=F.clientX,p=F.clientY,U={x:me.currentRect.x,y:me.currentRect.y},ae=me.originalRect,te=!1,ve=0,et=0;st.current="move";let Ce=Ge=>{let Ht=Ge.clientX-$t,jt=Ge.clientY-p;if(!te&&(Math.abs(Ht)>2||Math.abs(jt)>2)&&(te=!0),!te)return;let Ye={x:U.x+Ht,y:U.y+jt,width:me.currentRect.width,height:me.currentRect.height},oo=Rw(Ye,je,new Set([me.id]),b);He(oo.guides);let Zn=Ht+oo.dx,An=jt+oo.dy;ve=Zn,et=An;let Fo=le().querySelector(`[data-rearrange-section="${me.id}"]`);Fo&&(Fo.style.transform=`translate(${Zn}px, ${An}px)`),ge(new Map([[me.id,{x:U.x+Zn,y:U.y+An,width:me.currentRect.width,height:me.currentRect.height}]])),jn.current?.(Zn,An)},Ae=()=>{window.removeEventListener("mousemove",Ce),window.removeEventListener("mouseup",Ae),st.current=null,He([]),ge(new Map);let Ge=le().querySelector(`[data-rearrange-section="${me.id}"]`);Ge&&(Ge.style.transform=""),te&&i({...r,sections:je.map(Ht=>Ht.id===me.id?{...Ht,currentRect:{...Ht.currentRect,x:Math.max(0,U.x+ve),y:Math.max(0,U.y+et)}}:Ht),originalOrder:rt}),$o.current?.(ve,et,te)};window.addEventListener("mousemove",Ce),window.addEventListener("mouseup",Ae)}else if(Ie&&oe){F.preventDefault();for(let me of H)try{let je=document.querySelector(me.selector);if(je&&je===oe){let rt=new Set([me.id]);V(rt),In.current?.(rt,De);return}}catch{}De||(V(new Set),In.current?.(new Set,!1))}else De||(V(new Set),In.current?.(new Set,!1))};return document.addEventListener("mousedown",Y,!0),()=>document.removeEventListener("mousedown",Y,!0)},[H,r,i]),(0,St.useEffect)(()=>{let Y=F=>{let ce=F.composedPath()[0]||F.target;if(!(ce.tagName==="INPUT"||ce.tagName==="TEXTAREA"||ce.isContentEditable)){if((F.key==="Backspace"||F.key==="Delete")&&S.size>0){F.preventDefault();let oe=new Set(S);Be(Ie=>{let De=new Set(Ie);for(let me of oe)De.add(me);return De}),V(new Set),cn(()=>{let Ie=z.current;i({...Ie,sections:Ie.sections.filter(De=>!oe.has(De.id)),originalOrder:Ie.originalOrder.filter(De=>!oe.has(De))}),Be(De=>{let me=new Set(De);for(let je of oe)me.delete(je);return me})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(F.key)&&S.size>0){F.preventDefault();let oe=F.shiftKey?20:1,Ie=F.key==="ArrowLeft"?-oe:F.key==="ArrowRight"?oe:0,De=F.key==="ArrowUp"?-oe:F.key==="ArrowDown"?oe:0;i({...r,sections:H.map(me=>S.has(me.id)?{...me,currentRect:{...me.currentRect,x:Math.max(0,me.currentRect.x+Ie),y:Math.max(0,me.currentRect.y+De)}}:me)});return}F.key==="Escape"&&S.size>0&&V(new Set)}};return document.addEventListener("keydown",Y),()=>document.removeEventListener("keydown",Y)},[S,H,r,i]);let Ln=(0,St.useCallback)((Y,F)=>{if(Y.button!==0)return;let ce=Y.target;if(ce.closest(`.${se.handle}`)||ce.closest(`.${se.deleteButton}`))return;Y.preventDefault(),Y.stopPropagation();let oe;Y.shiftKey||Y.metaKey||Y.ctrlKey?(oe=new Set(S),oe.has(F)?oe.delete(F):oe.add(F)):S.has(F)?oe=new Set(S):oe=new Set([F]),V(oe),(oe.size!==S.size||[...oe].some(te=>!S.has(te)))&&In.current?.(oe,!!(Y.shiftKey||Y.metaKey||Y.ctrlKey));let De=Y.clientX,me=Y.clientY,je=new Map;for(let te of H)oe.has(te.id)&&je.set(te.id,{x:te.currentRect.x,y:te.currentRect.y});st.current="move";let rt=!1,xt=0,$t=0,p=new Map;for(let te of H)if(oe.has(te.id)){let ve=le().querySelector(`[data-rearrange-section="${te.id}"]`);p.set(te.id,{outlineEl:ve,curW:te.currentRect.width,curH:te.currentRect.height})}let U=te=>{let ve=te.clientX-De,et=te.clientY-me;if(ve===0&&et===0)return;rt=!0;let Ce=1/0,Ae=1/0,Ge=-1/0,Ht=-1/0;for(let[An,{curW:Fo,curH:Wo}]of p){let hn=je.get(An);if(!hn)continue;let ul=hn.x+ve,Ql=hn.y+et;Ce=Math.min(Ce,ul),Ae=Math.min(Ae,Ql),Ge=Math.max(Ge,ul+Fo),Ht=Math.max(Ht,Ql+Wo)}let jt=Rw({x:Ce,y:Ae,width:Ge-Ce,height:Ht-Ae},H,oe,b),Ye=ve+jt.dx,oo=et+jt.dy;xt=Ye,$t=oo,He(jt.guides);for(let[,{outlineEl:An}]of p)An&&(An.style.transform=`translate(${Ye}px, ${oo}px)`);let Zn=new Map;for(let[An,{curW:Fo,curH:Wo}]of p){let hn=je.get(An);if(hn){let ul={x:Math.max(0,hn.x+Ye),y:Math.max(0,hn.y+oo),width:Fo,height:Wo};Zn.set(An,ul)}}ge(Zn),jn.current?.(Ye,oo)},ae=te=>{window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",ae),st.current=null,He([]),ge(new Map);for(let[,{outlineEl:ve}]of p)ve&&(ve.style.transform="");if(rt){let ve=te.clientX-De,et=te.clientY-me;if(Math.abs(ve)<5&&Math.abs(et)<5)i({...r,sections:H.map(Ce=>{let Ae=je.get(Ce.id);return Ae?{...Ce,currentRect:{...Ce.currentRect,x:Ae.x,y:Ae.y}}:Ce})});else{i({...r,sections:H.map(Ce=>{let Ae=je.get(Ce.id);return Ae?{...Ce,currentRect:{...Ce.currentRect,x:Math.max(0,Ae.x+xt),y:Math.max(0,Ae.y+$t)}}:Ce})}),$o.current?.(xt,$t,!0);return}}$o.current?.(0,0,!1)};window.addEventListener("mousemove",U),window.addEventListener("mouseup",ae)},[S,H,r,i]),ho=(0,St.useCallback)((Y,F,ce)=>{Y.preventDefault(),Y.stopPropagation();let oe=H.find(ae=>ae.id===F);if(!oe)return;V(new Set([F])),st.current="resize";let Ie=Y.clientX,De=Y.clientY,me={...oe.currentRect},je=oe.originalRect,rt=me.width/me.height,xt={...me},$t=le().querySelector(`[data-rearrange-section="${F}"]`),p=ae=>{let te=ae.clientX-Ie,ve=ae.clientY-De,et=me.x,Ce=me.y,Ae=me.width,Ge=me.height;if(ce.includes("e")&&(Ae=Math.max(Am,me.width+te)),ce.includes("w")&&(Ae=Math.max(Am,me.width-te),et=me.x+me.width-Ae),ce.includes("s")&&(Ge=Math.max(Am,me.height+ve)),ce.includes("n")&&(Ge=Math.max(Am,me.height-ve),Ce=me.y+me.height-Ge),ae.shiftKey)if(ce.length===2){let jt=Math.abs(Ae-me.width),Ye=Math.abs(Ge-me.height);jt>Ye?Ge=Ae/rt:Ae=Ge*rt,ce.includes("w")&&(et=me.x+me.width-Ae),ce.includes("n")&&(Ce=me.y+me.height-Ge)}else ce==="e"||ce==="w"?Ge=Ae/rt:Ae=Ge*rt,ce==="w"&&(et=me.x+me.width-Ae),ce==="n"&&(Ce=me.y+me.height-Ge);xt={x:et,y:Ce,width:Ae,height:Ge},$t&&($t.style.left=`${et}px`,$t.style.top=`${Ce-Ue}px`,$t.style.width=`${Ae}px`,$t.style.height=`${Ge}px`),J({x:ae.clientX+12,y:ae.clientY+12,text:`${Math.round(Ae)} \xD7 ${Math.round(Ge)}`}),ge(new Map([[F,xt]]))},U=()=>{window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",U),J(null),st.current=null,ge(new Map),i({...r,sections:H.map(ae=>ae.id===F?{...ae,currentRect:xt}:ae)})};window.addEventListener("mousemove",p),window.addEventListener("mouseup",U)},[H,r,i,Ue]),cl=(0,St.useCallback)(Y=>{Be(F=>{let ce=new Set(F);return ce.add(Y),ce}),V(F=>{let ce=new Set(F);return ce.delete(Y),ce}),cn(()=>{let F=z.current;i({...F,sections:F.sections.filter(ce=>ce.id!==Y),originalOrder:F.originalOrder.filter(ce=>ce!==Y)}),Be(ce=>{let oe=new Set(ce);return oe.delete(Y),oe})},180)},[i]),ye=Y=>{let F=Y.originalRect,ce=Y.currentRect;return Math.abs(F.x-ce.x)>1||Math.abs(F.y-ce.y)>1||Math.abs(F.width-ce.width)>1||Math.abs(F.height-ce.height)>1},We=Y=>{let F=Y.originalRect,ce=Y.currentRect;return Math.abs(F.x-ce.x)>1||Math.abs(F.y-ce.y)>1},dt=Y=>{let F=Y.originalRect,ce=Y.currentRect;return Math.abs(F.width-ce.width)>1||Math.abs(F.height-ce.height)>1};for(let Y of H)ee.current.has(Y.id)||(We(Y)?ee.current.set(Y.id,"move"):dt(Y)&&ee.current.set(Y.id,"resize"));for(let Y of ee.current.keys())H.some(F=>F.id===Y)||ee.current.delete(Y);let Te=H.filter(Y=>{try{if(fe.has(Y.id)||S.has(Y.id))return!0;let F=document.querySelector(Y.selector);if(!F)return!1;let ce=F.getBoundingClientRect(),oe=Y.originalRect;return Math.abs(ce.width-oe.width)+Math.abs(ce.height-oe.height)<200}catch{return!1}}),ie=Te.filter(Y=>ye(Y)),Gt=Te.filter(Y=>!ye(Y)),kt=new Set(ie.map(Y=>Y.id));for(let Y of Ee.current)kt.has(Y)||Ee.current.delete(Y);let Bt=[...kt].sort().join(",");for(let Y of ie)Pt.current.set(Y.id,{currentRect:Y.currentRect,originalRect:Y.originalRect,isFixed:Y.isFixed});(0,St.useEffect)(()=>{let Y=Cn.current;Cn.current=kt;let F=new Map;for(let ce of Y)if(!kt.has(ce)){if(!H.some(Ie=>Ie.id===ce))continue;let oe=Pt.current.get(ce);oe&&(F.set(ce,{orig:oe.originalRect,target:oe.currentRect,isFixed:oe.isFixed}),Pt.current.delete(ce))}if(F.size>0){Nn(oe=>{let Ie=new Map(oe);for(let[De,me]of F)Ie.set(De,me);return Ie});let ce=cn(()=>{Nn(oe=>{let Ie=new Map(oe);for(let De of F.keys())Ie.delete(De);return Ie})},250);return()=>clearTimeout(ce)}},[Bt,H]);let Rt=(0,St.useRef)(null),le=()=>Rt.current?.getRootNode()??document;return(0,on.jsxs)(on.Fragment,{children:[(0,on.jsxs)("div",{ref:Rt,className:`${se.rearrangeOverlay} ${c?"":se.light} ${d?se.overlayExiting:""}${f?` ${f}`:""}`,"data-feedback-toolbar":!0,children:[Me&&(0,on.jsx)("div",{className:se.hoverHighlight,style:{left:Me.x,top:Me.y,width:Me.w,height:Me.h}}),Gt.map(Y=>{let F=Y.currentRect,ce=Y.isFixed?F.y:F.y-Ue,oe=Ew,Ie=S.has(Y.id);return(0,on.jsxs)("div",{"data-rearrange-section":Y.id,className:`${se.sectionOutline} ${Ie?se.selected:""} ${R||d||fe.has(Y.id)?se.exiting:""}`,style:{left:F.x,top:ce,width:F.width,height:F.height,borderColor:oe.border,backgroundColor:oe.bg,...zn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:De=>Ln(De,Y.id),onDoubleClick:()=>vt(Y.id),children:[(0,on.jsx)("span",{className:se.sectionLabel,style:{backgroundColor:oe.pill},children:Y.label}),(0,on.jsx)("span",{className:`${se.sectionAnnotation} ${Y.note?se.annotationVisible:""}`,children:(Y.note&&Qe.current.set(Y.id,Y.note),Y.note||Qe.current.get(Y.id)||"")}),(0,on.jsxs)("span",{className:se.sectionDimensions,children:[Math.round(F.width)," \xD7 ",Math.round(F.height)]}),(0,on.jsx)("div",{className:se.deleteButton,onMouseDown:De=>De.stopPropagation(),onClick:()=>cl(Y.id),children:"\u2715"}),Tw.map(De=>(0,on.jsx)("div",{className:`${se.handle} ${se[`handle${De.charAt(0).toUpperCase()}${De.slice(1)}`]}`,onMouseDown:me=>ho(me,Y.id,De)},De))]},Y.id)}),ie.map(Y=>{let F=Y.currentRect,ce=Y.isFixed?F.y:F.y-Ue,oe=S.has(Y.id),Ie=We(Y),De=dt(Y);if(h&&!oe)return null;let je=!Ee.current.has(Y.id);return je&&Ee.current.add(Y.id),(0,on.jsxs)("div",{"data-rearrange-section":Y.id,className:`${se.ghostOutline} ${oe?se.selected:""} ${R||d||fe.has(Y.id)?se.exiting:""}`,style:{left:F.x,top:ce,width:F.width,height:F.height,...zn?{}:{opacity:0,animation:"none",transition:"none"},...je?{}:{animation:"none"}},onMouseDown:rt=>Ln(rt,Y.id),onDoubleClick:()=>vt(Y.id),children:[(0,on.jsx)("span",{className:se.sectionLabel,style:{backgroundColor:Ew.pill},children:Y.label}),(0,on.jsx)("span",{className:`${se.sectionAnnotation} ${Y.note?se.annotationVisible:""}`,children:(Y.note&&Qe.current.set(Y.id,Y.note),Y.note||Qe.current.get(Y.id)||"")}),(0,on.jsxs)("span",{className:se.sectionDimensions,children:[Math.round(F.width)," \xD7 ",Math.round(F.height)]}),(0,on.jsx)("div",{className:se.deleteButton,onMouseDown:rt=>rt.stopPropagation(),onClick:()=>cl(Y.id),children:"\u2715"}),Tw.map(rt=>(0,on.jsx)("div",{className:`${se.handle} ${se[`handle${rt.charAt(0).toUpperCase()}${rt.slice(1)}`]}`,onMouseDown:xt=>ho(xt,Y.id,rt)},rt)),(0,on.jsx)("span",{className:se.ghostBadge,children:(()=>{let rt=ee.current.get(Y.id);if(Ie&&De){let[xt,$t]=rt==="resize"?["Resize","Move"]:["Move","Resize"];return(0,on.jsxs)(on.Fragment,{children:["Suggested ",xt," ",(0,on.jsxs)("span",{className:se.ghostBadgeExtra,children:["& ",$t]})]})}return`Suggested ${De?"Resize":"Move"}`})()})]},Y.id)})]}),!h&&(()=>{let Y=[];for(let F of ie){let ce=Oe.get(F.id);Y.push({id:F.id,orig:F.originalRect,target:ce||F.currentRect,isFixed:F.isFixed,isSelected:S.has(F.id),isExiting:fe.has(F.id)})}for(let[F,ce]of Oe)if(!Y.some(oe=>oe.id===F)){let oe=H.find(Ie=>Ie.id===F);oe&&Y.push({id:F,orig:oe.originalRect,target:ce,isFixed:oe.isFixed,isSelected:S.has(F)})}for(let[F,ce]of Ot)Y.some(oe=>oe.id===F)||Y.push({id:F,orig:ce.orig,target:ce.target,isFixed:ce.isFixed,isSelected:!1,isExiting:!0});return Y.length===0?null:(0,on.jsxs)("svg",{className:`${se.connectorSvg} ${R||d?se.connectorExiting:""}`,children:[Y.map(({id:F,orig:ce,target:oe,isFixed:Ie,isSelected:De,isExiting:me})=>{let je=ce.x+ce.width/2,rt=(Ie?ce.y:ce.y-Ue)+ce.height/2,xt=oe.x+oe.width/2,$t=(Ie?oe.y:oe.y-Ue)+oe.height/2,p=xt-je,U=$t-rt,ae=Math.sqrt(p*p+U*U);if(ae<2)return null;let te=Math.min(1,ae/40),ve=Math.min(ae*.3,60),et=ae>0?-U/ae:0,Ce=ae>0?p/ae:0,Ae=(je+xt)/2+et*ve,Ge=(rt+$t)/2+Ce*ve,Ht=Oe.has(F),jt=Ht||De?1:.4,Ye=Ht||De?1:.5;return(0,on.jsxs)("g",{className:me?se.connectorExiting:"",children:[(0,on.jsx)("path",{className:se.connectorLine,d:`M ${je} ${rt} Q ${Ae} ${Ge} ${xt} ${$t}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:jt*te}),(0,on.jsx)("circle",{className:se.connectorDot,cx:je,cy:rt,r:4*te,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Ye*te,filter:"url(#connDotShadow)"}),(0,on.jsx)("circle",{className:se.connectorDot,cx:xt,cy:$t,r:4*te,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Ye*te,filter:"url(#connDotShadow)"})]},`conn-${F}`)}),(0,on.jsx)("defs",{children:(0,on.jsx)("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:(0,on.jsx)("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),ne&&(()=>{let Y=H.find($t=>$t.id===ne);if(!Y)return null;let F=Y.currentRect,ce=Y.isFixed?F.y:F.y-Ue,oe=F.x+F.width/2,Ie=ce-8,De=ce+F.height+8,me=Ie>200,je=De<window.innerHeight-100,rt=Math.max(160,Math.min(window.innerWidth-160,oe)),xt;return me?xt={left:rt,bottom:window.innerHeight-Ie}:je?xt={left:rt,top:De}:xt={left:rt,top:Math.max(80,window.innerHeight/2-80)},(0,on.jsx)(Jy,{element:Y.label,placeholder:"Add a note about this section",initialValue:Y.note??"",submitLabel:mt.current?"Save":"Set",onSubmit:it,onCancel:ke,onDelete:mt.current?()=>{it("")}:void 0,isExiting:G,lightMode:!c,style:xt})})(),Le&&(0,on.jsx)("div",{className:se.sizeIndicator,style:{left:Le.x,top:Le.y},"data-feedback-toolbar":!0,children:Le.text}),pe.map((Y,F)=>(0,on.jsx)("div",{className:se.guideLine,style:Y.axis==="x"?{position:"fixed",left:Y.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:Y.pos-Ue,width:"100vw",height:1}},`${Y.axis}-${Y.pos}-${F}`))]})}var Yy=new Set(["script","style","noscript","link","meta","br","hr"]);function $C(){let r=document.querySelector("main")||document.body,i=[],c=Array.from(r.children),d=r!==document.body&&c.length<3?Array.from(document.body.children):c;for(let f of d){if(!(f instanceof HTMLElement)||Yy.has(f.tagName.toLowerCase())||f.hasAttribute("data-feedback-toolbar"))continue;let h=window.getComputedStyle(f);if(h.display==="none"||h.visibility==="hidden")continue;let b=f.getBoundingClientRect();if(!(b.height<10||b.width<10)){i.push({label:jm(f),selector:gc(f),top:b.top,bottom:b.bottom,left:b.left,right:b.right,area:b.width*b.height});for(let v of Array.from(f.children)){if(!(v instanceof HTMLElement)||Yy.has(v.tagName.toLowerCase())||v.hasAttribute("data-feedback-toolbar"))continue;let w=window.getComputedStyle(v);if(w.display==="none"||w.visibility==="hidden")continue;let j=v.getBoundingClientRect();j.height<10||j.width<10||i.push({label:jm(v),selector:gc(v),top:j.top,bottom:j.bottom,left:j.left,right:j.right,area:j.width*j.height})}}}return i}function HC(r){let i=window.scrollY;return r.map(({label:c,selector:d,rect:f})=>{let h=f.y-i;return{label:c,selector:d,top:h,bottom:h+f.height,left:f.x,right:f.x+f.width,area:f.width*f.height}})}function UC(r){let i=window.scrollY,c=r.y-i,d=r.x;return{top:c,bottom:c+r.height,left:d,right:d+r.width,area:r.width*r.height}}function qy(r,i){let c=i?HC(i):$C(),d=UC(r),f=null,h=null,b=null,v=null,w=null;for(let S of c){if(Math.abs(S.left-d.left)<2&&Math.abs(S.top-d.top)<2&&Math.abs(S.right-S.left-r.width)<2&&Math.abs(S.bottom-S.top-r.height)<2)continue;S.left<=d.left+2&&S.right>=d.right-2&&S.top<=d.top+2&&S.bottom>=d.bottom-2&&S.area>d.area*1.5&&(!w||S.area<w._area)&&(w={label:S.label,selector:S.selector,_area:S.area});let V=d.right>S.left+5&&d.left<S.right-5,B=d.bottom>S.top+5&&d.top<S.bottom-5;if(V&&S.bottom<=d.top+5){let ne=Math.round(d.top-S.bottom);(!f||ne<f._dist)&&(f={label:S.label,selector:S.selector,gap:Math.max(0,ne),_dist:ne})}if(V&&S.top>=d.bottom-5){let ne=Math.round(S.top-d.bottom);(!h||ne<h._dist)&&(h={label:S.label,selector:S.selector,gap:Math.max(0,ne),_dist:ne})}if(B&&S.right<=d.left+5){let ne=Math.round(d.left-S.right);(!b||ne<b._dist)&&(b={label:S.label,selector:S.selector,gap:Math.max(0,ne),_dist:ne})}if(B&&S.left>=d.right-5){let ne=Math.round(S.left-d.right);(!v||ne<v._dist)&&(v={label:S.label,selector:S.selector,gap:Math.max(0,ne),_dist:ne})}}let j=window.innerWidth,L=window.innerHeight,R=jC(r,j),H=S=>S?{label:S.label,selector:S.selector,gap:S.gap}:null,z=IC(d,r,j,L,w?{label:w.label,selector:w.selector,_area:w._area}:null,c);return{above:H(f),below:H(h),left:H(b),right:H(v),alignment:R,containedIn:w?{label:w.label,selector:w.selector}:null,outOfBounds:z}}function IC(r,i,c,d,f,h){let b={},v=!1,w=[];if(r.left<-2&&w.push("left"),r.right>c+2&&w.push("right"),r.top<-2&&w.push("top"),r.bottom>d+2&&w.push("bottom"),w.length>0&&(b.viewport=w,v=!0),f){let j=h.find(L=>L.label===f.label&&L.selector===f.selector&&Math.abs(L.area-f._area)<10);if(j){let L=[];r.left<j.left-2&&L.push("left"),r.right>j.right+2&&L.push("right"),r.top<j.top-2&&L.push("top"),r.bottom>j.bottom+2&&L.push("bottom"),L.length>0&&(b.container={label:f.label,edges:L},v=!0)}}return v?b:null}function jC(r,i){if(r.width/i>.85)return"full-width";let d=r.x+r.width/2,f=i/2,h=d-f,b=i*.08;return Math.abs(h)<b?"center":h<0?"left":"right"}function p4(r){switch(r){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function g4(r,i={}){let c=[];r.above&&c.push(`Below \`${r.above.label}\`${r.above.gap>0?` (${r.above.gap}px gap)`:""}`),r.below&&c.push(`Above \`${r.below.label}\`${r.below.gap>0?` (${r.below.gap}px gap)`:""}`),i.includeLeftRight&&(r.left&&c.push(`Right of \`${r.left.label}\`${r.left.gap>0?` (${r.left.gap}px gap)`:""}`),r.right&&c.push(`Left of \`${r.right.label}\`${r.right.gap>0?` (${r.right.gap}px gap)`:""}`));let d=p4(r.alignment);return r.containedIn?c.push(`${d.charAt(0).toUpperCase()+d.slice(1)} in \`${r.containedIn.label}\``):c.push(`${d.charAt(0).toUpperCase()+d.slice(1)} in page`),i.includePixelRef&&i.pixelRef&&c.push(`Pixel ref: \`${i.pixelRef}\``),r.outOfBounds&&(r.outOfBounds.viewport&&c.push(`**Outside viewport** (${r.outOfBounds.viewport.join(", ")} edge${r.outOfBounds.viewport.length>1?"s":""})`),r.outOfBounds.container&&c.push(`**Outside \`${r.outOfBounds.container.label}\`** (${r.outOfBounds.container.edges.join(", ")} edge${r.outOfBounds.container.edges.length>1?"s":""})`)),c}function YC(r,i,c){let d=[];r.above&&d.push(`below \`${r.above.label}\``),r.below&&d.push(`above \`${r.below.label}\``),r.left&&d.push(`right of \`${r.left.label}\``),r.right&&d.push(`left of \`${r.right.label}\``),r.containedIn&&d.push(`inside \`${r.containedIn.label}\``),d.push(p4(r.alignment)),r.outOfBounds?.viewport&&d.push(`**outside viewport** (${r.outOfBounds.viewport.join(", ")})`),r.outOfBounds?.container&&d.push(`**outside \`${r.outOfBounds.container.label}\`** (${r.outOfBounds.container.edges.join(", ")})`);let f=c?`, ${Math.round(c.width)}\xD7${Math.round(c.height)}px`:"";return`at (${Math.round(i.x)}, ${Math.round(i.y)})${f}: ${d.join(", ")}`}var Ow=15;function Dw(r){if(r.length<2)return[];let i=[],c=new Set;for(let d=0;d<r.length;d++){if(c.has(d))continue;let f=[d];for(let h=d+1;h<r.length;h++)c.has(h)||Math.abs(r[d].rect.y-r[h].rect.y)<Ow&&f.push(h);if(f.length>=2){let h=f.map(w=>r[w]);h.sort((w,j)=>w.rect.x-j.rect.x);let b=[];for(let w=0;w<h.length-1;w++)b.push(Math.round(h[w+1].rect.x-(h[w].rect.x+h[w].rect.width)));let v=Math.round(h.reduce((w,j)=>w+j.rect.y,0)/h.length);i.push({labels:h.map(w=>w.label),type:"row",sharedEdge:v,gaps:b,avgGap:b.length?Math.round(b.reduce((w,j)=>w+j,0)/b.length):0}),f.forEach(w=>c.add(w))}}for(let d=0;d<r.length;d++){if(c.has(d))continue;let f=[d];for(let h=d+1;h<r.length;h++)c.has(h)||Math.abs(r[d].rect.x-r[h].rect.x)<Ow&&f.push(h);if(f.length>=2){let h=f.map(w=>r[w]);h.sort((w,j)=>w.rect.y-j.rect.y);let b=[];for(let w=0;w<h.length-1;w++)b.push(Math.round(h[w+1].rect.y-(h[w].rect.y+h[w].rect.height)));let v=Math.round(h.reduce((w,j)=>w+j.rect.x,0)/h.length);i.push({labels:h.map(w=>w.label),type:"column",sharedEdge:v,gaps:b,avgGap:b.length?Math.round(b.reduce((w,j)=>w+j,0)/b.length):0}),f.forEach(w=>c.add(w))}}return i}function qC(r){if(r.length<2)return[];let i=Dw(r.map(b=>({label:b.label,rect:b.originalRect}))),c=Dw(r.map(b=>({label:b.label,rect:b.currentRect}))),d=[],f=new Set;for(let b of i){let v=new Set(b.labels),w=null,j=0;for(let L of c){let R=L.labels.filter(H=>v.has(H)).length;R>=2&&R>j&&(w=L,j=R)}if(w){let L=w.labels.filter(H=>v.has(H)),R=L.join(", ");if(w.type!==b.type){let H=b.type==="row"?"y":"x",z=w.type==="row"?"y":"x";d.push(`**${R}**: ${b.type} (${H}\u2248${b.sharedEdge}, ${b.avgGap}px gaps) \u2192 ${w.type} (${z}\u2248${w.sharedEdge}, ${w.avgGap}px gaps)`)}else if(Math.abs(b.sharedEdge-w.sharedEdge)>20||Math.abs(b.avgGap-w.avgGap)>5){let H=b.type==="row"?"y":"x",z=Math.abs(b.sharedEdge-w.sharedEdge)>20?` ${H}: ${b.sharedEdge} \u2192 ${w.sharedEdge}`:"",S=Math.abs(b.avgGap-w.avgGap)>5?` gaps: ${b.avgGap}px \u2192 ${w.avgGap}px`:"";d.push(`**${R}**: ${b.type} shifted \u2014${z}${S}`)}L.forEach(H=>f.add(H))}else{let L=b.labels.join(", "),R=b.type==="row"?"y":"x";d.push(`**${L}**: ${b.type} (${R}\u2248${b.sharedEdge}) dissolved`),b.labels.forEach(H=>f.add(H))}}for(let b of c){if(b.labels.every(j=>f.has(j))||b.labels.filter(j=>!f.has(j)).length<2)continue;if(!i.some(j=>j.labels.filter(R=>b.labels.includes(R)).length>=2)){let j=b.type==="row"?"y":"x";d.push(`**${b.labels.join(", ")}**: new ${b.type} (${j}\u2248${b.sharedEdge}, ${b.avgGap}px gaps)`),b.labels.forEach(L=>f.add(L))}}let h=r.filter(b=>!f.has(b.label));if(h.length>=2){let b={};for(let v of h){let w=Math.round(v.currentRect.x/5)*5;(b[w]??(b[w]=[])).push(v.label)}for(let[v,w]of Object.entries(b))w.length>=2&&d.push(`**${w.join(", ")}**: shared left edge at x\u2248${v}`)}return d}function y4(r){if(typeof document>"u")return{viewport:r,contentArea:null};let i=[],c=new Set,d=v=>{c.has(v)||v instanceof HTMLElement&&(v.hasAttribute("data-feedback-toolbar")||Yy.has(v.tagName.toLowerCase())||(c.add(v),i.push(v)))},f=document.querySelector("main");f&&d(f);let h=document.querySelector("[role='main']");h&&d(h);for(let v of Array.from(document.body.children))if(d(v),v.children){for(let w of Array.from(v.children))if(d(w),w.children)for(let j of Array.from(w.children))d(j)}let b=null;for(let v of i){let w=v.getBoundingClientRect();if(w.height<50)continue;let j=getComputedStyle(v);if(j.maxWidth&&j.maxWidth!=="none"&&j.maxWidth!=="0px"){(!b||w.width<b.rect.width)&&(b={el:v,rect:w});continue}!b&&w.width<r.width-20&&w.width>100&&(b={el:v,rect:w})}if(b){let{el:v,rect:w}=b;return{viewport:r,contentArea:{width:Math.round(w.width),left:Math.round(w.left),right:Math.round(w.right),centerX:Math.round(w.left+w.width/2),selector:gc(v)}}}return{viewport:r,contentArea:null}}function VC(r){if(typeof document>"u")return null;let i=document.querySelector(r);if(!i?.parentElement)return null;let c=getComputedStyle(i.parentElement),d={parentDisplay:c.display,parentSelector:gc(i.parentElement)};return c.display.includes("flex")&&(d.flexDirection=c.flexDirection),c.display.includes("grid")&&c.gridTemplateColumns!=="none"&&(d.gridCols=c.gridTemplateColumns),c.gap&&c.gap!=="normal"&&c.gap!=="0px"&&(d.gap=c.gap),d}function b4(r,i){let c=i.contentArea,d=c?c.width:i.viewport.width,f=c?c.left:0,h=c?c.centerX:Math.round(i.viewport.width/2),b=Math.round(r.x-f),v=Math.round(f+d-(r.x+r.width)),w=(r.width/d*100).toFixed(1),j=r.x+r.width/2,L=Math.abs(j-h)<20,R=r.width/d>.95,H=[];return R?H.push("`width: 100%` of container"):H.push(`left \`${b}px\` in container, right \`${v}px\`, width \`${w}%\` (\`${Math.round(r.width)}px\`)`),L&&!R&&H.push("centered \u2014 `margin-inline: auto`"),H.join(" \u2014 ")}function v4(r){let{viewport:i,contentArea:c}=r,d=`### Reference Frame
`;if(d+=`- Viewport: \`${i.width}\xD7${i.height}px\`
`,c){let f=c;d+=`- Content area: \`${f.width}px\` wide, left edge at \`x=${f.left}\`, right at \`x=${f.right}\` (\`${f.selector}\`)
`,d+=`- Pixel \u2192 CSS translation:
`,d+=`  - **Horizontal position in container**: \`element.x - ${f.left}\` \u2192 use as \`margin-left\` or \`left\`
`,d+=`  - **Width as % of container**: \`element.width / ${f.width} \xD7 100\` \u2192 use as \`width: X%\`
`,d+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` \u2192 use as `margin-top` or `gap`\n",d+=`  - **Centered**: if \`|element.centerX - ${f.centerX}| < 20px\` \u2192 use \`margin-inline: auto\`
`}else d+=`- No distinct content container \u2014 elements positioned relative to full viewport
`,d+=`- Pixel \u2192 CSS translation:
`,d+=`  - **Width as % of viewport**: \`element.width / ${i.width} \xD7 100\` \u2192 use as \`width: X%\`
`,d+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(i.width/2)}| < 20px\` \u2192 use \`margin-inline: auto\`
`;return d+=`
`,d}function XC(r){let i=VC(r);if(!i)return null;let c=`\`${i.parentDisplay}\``;return i.flexDirection&&(c+=`, flex-direction: \`${i.flexDirection}\``),i.gridCols&&(c+=`, grid-template-columns: \`${i.gridCols}\``),i.gap&&(c+=`, gap: \`${i.gap}\``),`Parent: ${c} (\`${i.parentSelector}\`)`}function Nw(r,i,c,d="standard"){if(r.length===0)return"";let f=[...r].sort((B,ne)=>Math.abs(B.y-ne.y)<20?B.x-ne.x:B.y-ne.y),h="";if(c?.blankCanvas?(h+=`## Wireframe: New Page

`,c.wireframePurpose&&(h+=`> **Purpose:** ${c.wireframePurpose}
>
`),h+=`> ${r.length} component${r.length!==1?"s":""} placed \u2014 this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):h+=`## Design Layout

> ${r.length} component${r.length!==1?"s":""} placed

`,d==="compact")return h+=`### Components
`,f.forEach((B,ne)=>{let ze=nr[B.type]?.label||B.type;h+=`${ne+1}. **${ze}** \u2014 \`${Math.round(B.width)}\xD7${Math.round(B.height)}px\` at \`(${Math.round(B.x)}, ${Math.round(B.y)})\`
`,B.text&&(h+=`   - Note: "${B.text}"
`)}),h;let b=y4(i);h+=v4(b),h+=`### Components
`,f.forEach((B,ne)=>{let ze=nr[B.type]?.label||B.type,G={x:B.x,y:B.y,width:B.width,height:B.height};h+=`${ne+1}. **${ze}** \u2014 \`${Math.round(B.width)}\xD7${Math.round(B.height)}px\` at \`(${Math.round(B.x)}, ${Math.round(B.y)})\`
`,B.text&&(h+=`   - Note: "${B.text}"
`);let ue=qy(G),vt=g4(ue,{includeLeftRight:d==="detailed"||d==="forensic"});for(let it of vt)h+=`   - ${it}
`;let ke=b4(G,b);ke&&(h+=`   - CSS: ${ke}
`)}),h+=`
### Layout Analysis
`;let v=[];for(let B of f){let ne=v.find(ze=>Math.abs(ze.y-B.y)<30);ne?ne.items.push(B):v.push({y:B.y,items:[B]})}if(v.sort((B,ne)=>B.y-ne.y),v.forEach((B,ne)=>{B.items.sort((G,ue)=>G.x-ue.x);let ze=B.items.map(G=>nr[G.type]?.label||G.type);if(B.items.length===1){let ue=B.items[0].width>i.width*.8;h+=`- Row ${ne+1} (y\u2248${Math.round(B.y)}): ${ze[0]}${ue?" \u2014 full width":""}
`}else h+=`- Row ${ne+1} (y\u2248${Math.round(B.y)}): ${ze.join(" | ")} \u2014 ${B.items.length} items side by side
`}),d==="detailed"||d==="forensic"){h+=`
### Spacing & Gaps
`;for(let B=0;B<f.length-1;B++){let ne=f[B],ze=f[B+1],G=nr[ne.type]?.label||ne.type,ue=nr[ze.type]?.label||ze.type,mt=Math.round(ze.y-(ne.y+ne.height)),vt=Math.round(ze.x-(ne.x+ne.width));Math.abs(ne.y-ze.y)<30?h+=`- ${G} \u2192 ${ue}: \`${vt}px\` horizontal gap
`:h+=`- ${G} \u2192 ${ue}: \`${mt}px\` vertical gap
`}if(d==="forensic"&&f.length>2){h+=`
### All Pairwise Gaps
`;for(let B=0;B<f.length;B++)for(let ne=B+1;ne<f.length;ne++){let ze=f[B],G=f[ne],ue=nr[ze.type]?.label||ze.type,mt=nr[G.type]?.label||G.type,vt=Math.round(G.y-(ze.y+ze.height)),ke=Math.round(G.x-(ze.x+ze.width));h+=`- ${ue} \u2194 ${mt}: h=\`${ke}px\` v=\`${vt}px\`
`}}d==="forensic"&&(h+=`
### Z-Order (placement order)
`,r.forEach((B,ne)=>{let ze=nr[B.type]?.label||B.type;h+=`${ne}. ${ze} at \`(${Math.round(B.x)}, ${Math.round(B.y)})\`
`}))}h+=`
### Suggested Implementation
`;let w=f.some(B=>B.type==="navigation"),j=f.some(B=>B.type==="hero"),L=f.some(B=>B.type==="sidebar"),R=f.some(B=>B.type==="footer"),H=f.filter(B=>B.type==="card"),z=f.filter(B=>B.type==="form"),S=f.filter(B=>B.type==="table"),V=f.filter(B=>B.type==="modal");if(w&&(h+=`- Top navigation bar with logo + nav links + CTA
`),j&&(h+=`- Hero section with heading, subtext, and call-to-action
`),L&&(h+=`- Sidebar layout \u2014 use CSS Grid with sidebar + main content area
`),H.length>1?h+=`- ${H.length}-column card grid \u2014 use CSS Grid or Flexbox
`:H.length===1&&(h+=`- Card component with image + content area
`),z.length>0&&(h+=`- ${z.length} form${z.length>1?"s":""} \u2014 add proper labels, validation, and submit handling
`),S.length>0&&(h+=`- Data table \u2014 consider sortable columns and pagination
`),V.length>0&&(h+=`- Modal dialog \u2014 add overlay backdrop and focus trapping
`),R&&(h+=`- Multi-column footer with links
`),d==="detailed"||d==="forensic"){if(h+=`
### CSS Suggestions
`,L){let B=f.find(ne=>ne.type==="sidebar");h+=`- \`display: grid; grid-template-columns: ${Math.round(B.width)}px 1fr;\`
`}if(H.length>1){let B=Math.round(H[0].width);h+=`- \`display: grid; grid-template-columns: repeat(${H.length}, ${B}px); gap: 16px;\`
`}w&&(h+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return h}function zw(r,i="standard",c){let{sections:d}=r,f=[];for(let L of d){let R=L.originalRect,H=L.currentRect,z=Math.abs(R.x-H.x)>1||Math.abs(R.y-H.y)>1,S=Math.abs(R.width-H.width)>1||Math.abs(R.height-H.height)>1,V=!!L.note;if(!z&&!S&&!V){i==="forensic"&&f.push({section:L,posMoved:!1,sizeChanged:!1});continue}f.push({section:L,posMoved:z,sizeChanged:S})}if(f.length===0||i!=="forensic"&&f.every(L=>!L.posMoved&&!L.sizeChanged&&!L.section.note))return"";let h=`## Suggested Layout Changes

`,b=c?c.width:typeof window<"u"?window.innerWidth:0,v=c?c.height:typeof window<"u"?window.innerHeight:0,w=y4({width:b,height:v});i!=="compact"&&(h+=v4(w)),i==="forensic"&&(h+=`> Detected at: \`${new Date(r.detectedAt).toISOString()}\`
`,h+=`> Total sections: ${d.length}

`);let j=L=>d.map(R=>({label:R.label,selector:R.selector,rect:L==="original"?R.originalRect:R.currentRect}));h+=`**Changes:**
`;for(let{section:L,posMoved:R,sizeChanged:H}of f){let z=L.originalRect,S=L.currentRect;if(!R&&!H){L.note?(h+=`- **${L.label}** \u2014 note only
`,h+=`  - Note: "${L.note}"
`):h+=`- ${L.label} \u2014 unchanged at (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`;continue}if(i==="compact"){R&&H?h+=`- Suggested: move **${L.label}** to (${Math.round(S.x)}, ${Math.round(S.y)}) ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`:R?h+=`- Suggested: move **${L.label}** to (${Math.round(S.x)}, ${Math.round(S.y)})
`:h+=`- Suggested: resize **${L.label}** to ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`,L.note&&(h+=`  - Note: "${L.note}"
`);continue}if(R&&H?h+=`- Suggested: move and resize **${L.label}**
`:R?h+=`- Suggested: move **${L.label}**
`:h+=`- Suggested: resize **${L.label}** from ${Math.round(z.width)}\xD7${Math.round(z.height)}px to ${Math.round(S.width)}\xD7${Math.round(S.height)}px
`,L.note&&(h+=`  - Note: "${L.note}"
`),R){let B=qy(z,j("original")),ne=qy(S,j("current")),ze=H?{width:z.width,height:z.height}:void 0;h+=`  - Currently ${YC(B,{x:z.x,y:z.y},ze)}
`;let G=H?{width:S.width,height:S.height}:void 0,ue=`at (${Math.round(S.x)}, ${Math.round(S.y)})`,mt=G?`, ${Math.round(G.width)}\xD7${Math.round(G.height)}px`:"",ke=g4(ne,{includeLeftRight:i==="detailed"||i==="forensic"});if(ke.length>0){h+=`  - Suggested position ${ue}${mt}: ${ke[0]}
`;for(let fe=1;fe<ke.length;fe++)h+=`    ${ke[fe]}
`}else h+=`  - Suggested position ${ue}${mt}
`;let it=b4(S,w);it&&(h+=`  - CSS: ${it}
`)}let V=XC(L.selector);if(V&&(h+=`  - ${V}
`),h+=`  - Selector: \`${L.selector}\`
`,i==="detailed"||i==="forensic"){let B=L.className?`${L.tagName}.${L.className.split(" ")[0]}`:L.tagName;B!==L.selector&&(h+=`  - Element: \`${B}\`
`),L.role&&(h+=`  - Role: \`${L.role}\`
`),i==="forensic"&&L.textSnippet&&(h+=`  - Text: "${L.textSnippet}"
`)}i==="forensic"&&(h+=`  - Original rect: \`{ x: ${Math.round(z.x)}, y: ${Math.round(z.y)}, w: ${Math.round(z.width)}, h: ${Math.round(z.height)} }\`
`,h+=`  - Current rect: \`{ x: ${Math.round(S.x)}, y: ${Math.round(S.y)}, w: ${Math.round(S.width)}, h: ${Math.round(S.height)} }\`
`)}if(i!=="compact"){let L=f.filter(H=>H.posMoved).map(H=>({label:H.section.label,originalRect:H.section.originalRect,currentRect:H.section.currentRect})),R=qC(L);if(R.length>0){h+=`
### Layout Summary
`;for(let H of R)h+=`- ${H}
`}}if(i!=="compact"&&d.length>1){h+=`
### All Sections (current positions)
`;let L=[...d].sort((R,H)=>Math.abs(R.currentRect.y-H.currentRect.y)<20?R.currentRect.x-H.currentRect.x:R.currentRect.y-H.currentRect.y);for(let R of L){let H=R.currentRect,z=Math.abs(H.x-R.originalRect.x)>1||Math.abs(H.y-R.originalRect.y)>1||Math.abs(H.width-R.originalRect.width)>1||Math.abs(H.height-R.originalRect.height)>1;h+=`- ${R.label}: \`${Math.round(H.width)}\xD7${Math.round(H.height)}px\` at \`(${Math.round(H.x)}, ${Math.round(H.y)})\`${z?" \u2190 suggested":""}
`}}return h}var Vy="feedback-annotations-",x4=7;function Ky(r){return`${Vy}${r}`}function ys(r){if(typeof window>"u")return[];try{let i=localStorage.getItem(Ky(r));if(!i)return[];let c=JSON.parse(i),d=Date.now()-x4*24*60*60*1e3;return c.filter(f=>!f.timestamp||f.timestamp>d)}catch{return[]}}function w4(r,i){if(!(typeof window>"u"))try{localStorage.setItem(Ky(r),JSON.stringify(i))}catch{}}function GC(){let r=new Map;if(typeof window>"u")return r;try{let i=Date.now()-x4*24*60*60*1e3;for(let c=0;c<localStorage.length;c++){let d=localStorage.key(c);if(d?.startsWith(Vy)){let f=d.slice(Vy.length),h=localStorage.getItem(d);if(h){let v=JSON.parse(h).filter(w=>!w.timestamp||w.timestamp>i);v.length>0&&r.set(f,v)}}}}catch{}return r}function My(r,i,c){let d=i.map(f=>({...f,_syncedTo:c}));w4(r,d)}var e1="agentation-design-";function QC(r){if(typeof window>"u")return[];try{let i=localStorage.getItem(`${e1}${r}`);return i?JSON.parse(i):[]}catch{return[]}}function PC(r,i){if(!(typeof window>"u"))try{localStorage.setItem(`${e1}${r}`,JSON.stringify(i))}catch{}}function FC(r){if(!(typeof window>"u"))try{localStorage.removeItem(`${e1}${r}`)}catch{}}var t1="agentation-rearrange-";function WC(r){if(typeof window>"u")return null;try{let i=localStorage.getItem(`${t1}${r}`);return i?JSON.parse(i):null}catch{return null}}function ZC(r,i){if(!(typeof window>"u"))try{localStorage.setItem(`${t1}${r}`,JSON.stringify(i))}catch{}}function JC(r){if(!(typeof window>"u"))try{localStorage.removeItem(`${t1}${r}`)}catch{}}var n1="agentation-wireframe-";function KC(r){if(typeof window>"u")return null;try{let i=localStorage.getItem(`${n1}${r}`);return i?JSON.parse(i):null}catch{return null}}function Lw(r,i){if(!(typeof window>"u"))try{localStorage.setItem(`${n1}${r}`,JSON.stringify(i))}catch{}}function Dm(r){if(!(typeof window>"u"))try{localStorage.removeItem(`${n1}${r}`)}catch{}}var S4="agentation-session-";function o1(r){return`${S4}${r}`}function ek(r){if(typeof window>"u")return null;try{return localStorage.getItem(o1(r))}catch{return null}}function Ry(r,i){if(!(typeof window>"u"))try{localStorage.setItem(o1(r),i)}catch{}}function tk(r){if(!(typeof window>"u"))try{localStorage.removeItem(o1(r))}catch{}}var Xy=`${S4}toolbar-hidden`;function nk(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Xy)==="1"}catch{return!1}}function ok(r){if(!(typeof window>"u"))try{r?sessionStorage.setItem(Xy,"1"):sessionStorage.removeItem(Xy)}catch{}}async function Ay(r,i){let c=await fetch(`${r}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:i})});if(!c.ok)throw new Error(`Failed to create session: ${c.status}`);return c.json()}async function Bw(r,i){let c=await fetch(`${r}/sessions/${i}`);if(!c.ok)throw new Error(`Failed to get session: ${c.status}`);return c.json()}async function $w(r,i,c){!c.elementPath&&(c.element==="body"||c.element==="html")&&(c={...c,elementPath:c.element});let d=await fetch(`${r}/sessions/${i}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!d.ok)throw new Error(`Failed to sync annotation: ${d.status}`);return d.json()}async function Oy(r,i,c){let d=await fetch(`${r}/annotations/${i}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!d.ok)throw new Error(`Failed to update annotation: ${d.status}`);return d.json()}async function Nm(r,i){let c=await fetch(`${r}/annotations/${i}`,{method:"DELETE"});if(!c.ok)throw new Error(`Failed to delete annotation: ${c.status}`)}var _n={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Hw=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Uw=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],lk=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function ak(r){let i=r?.mode??"filtered",c=Hw;if(r?.skipExact){let d=r.skipExact instanceof Set?r.skipExact:new Set(r.skipExact);c=new Set([...Hw,...d])}return{maxComponents:r?.maxComponents??6,maxDepth:r?.maxDepth??30,mode:i,skipExact:c,skipPatterns:r?.skipPatterns?[...Uw,...r.skipPatterns]:Uw,userPatterns:r?.userPatterns??lk,filter:r?.filter}}function rk(r){return r.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function ik(r,i=10){let c=new Set,d=r,f=0;for(;d&&f<i;)d.className&&typeof d.className=="string"&&d.className.split(/\s+/).forEach(h=>{if(h.length>1){let b=h.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();b.length>1&&c.add(b)}}),d=d.parentElement,f++;return c}function sk(r,i){let c=rk(r);for(let d of i){if(d===c)return!0;let f=c.split("-").filter(b=>b.length>2),h=d.split("-").filter(b=>b.length>2);for(let b of f)for(let v of h)if(b===v||b.includes(v)||v.includes(b))return!0}return!1}function ck(r,i,c,d){if(c.filter)return c.filter(r,i);switch(c.mode){case"all":return!0;case"filtered":return!(c.skipExact.has(r)||c.skipPatterns.some(f=>f.test(r)));case"smart":return c.skipExact.has(r)||c.skipPatterns.some(f=>f.test(r))?!1:!!(d&&sk(r,d)||c.userPatterns.some(f=>f.test(r)));default:return!0}}var Pu=null,uk=new WeakMap;function Dy(r){return Object.keys(r).some(i=>i.startsWith("__reactFiber$")||i.startsWith("__reactInternalInstance$")||i.startsWith("__reactProps$"))}function dk(){if(Pu!==null)return Pu;if(typeof document>"u")return!1;if(document.body&&Dy(document.body))return Pu=!0,!0;let r=["#root","#app","#__next","[data-reactroot]"];for(let i of r){let c=document.querySelector(i);if(c&&Dy(c))return Pu=!0,!0}if(document.body){for(let i of document.body.children)if(Dy(i))return Pu=!0,!0}return Pu=!1,!1}var Gf={map:uk};function fk(r){return Object.keys(r).find(c=>c.startsWith("__reactFiber$")||c.startsWith("__reactInternalInstance$"))||null}function _k(r){let i=fk(r);return i?r[i]:null}function _c(r){return r?r.displayName?r.displayName:r.name?r.name:null:null}function hk(r){let{tag:i,type:c,elementType:d}=r;if(i===_n.HostComponent||i===_n.HostText||i===_n.HostHoistable||i===_n.HostSingleton||i===_n.Fragment||i===_n.Mode||i===_n.Profiler||i===_n.DehydratedFragment||i===_n.HostRoot||i===_n.HostPortal||i===_n.ScopeComponent||i===_n.OffscreenComponent||i===_n.LegacyHiddenComponent||i===_n.CacheComponent||i===_n.TracingMarkerComponent||i===_n.Throw||i===_n.ViewTransitionComponent||i===_n.ActivityComponent)return null;if(i===_n.ForwardRef){let f=d;if(f?.render){let h=_c(f.render);if(h)return h}return f?.displayName?f.displayName:_c(c)}if(i===_n.MemoComponent||i===_n.SimpleMemoComponent){let f=d;if(f?.type){let h=_c(f.type);if(h)return h}return f?.displayName?f.displayName:_c(c)}if(i===_n.ContextProvider){let f=c;return f?._context?.displayName?`${f._context.displayName}.Provider`:null}if(i===_n.ContextConsumer){let f=c;return f?.displayName?`${f.displayName}.Consumer`:null}if(i===_n.LazyComponent){let f=d;return f?._status===1&&f._result?_c(f._result):null}return i===_n.SuspenseComponent||i===_n.SuspenseListComponent?null:i===_n.IncompleteClassComponent||i===_n.IncompleteFunctionComponent||i===_n.FunctionComponent||i===_n.ClassComponent||i===_n.IndeterminateComponent?_c(c):null}function mk(r){return r.length<=2||r.length<=3&&r===r.toLowerCase()}function pk(r,i){let c=ak(i),d=c.mode==="all";if(d){let w=Gf.map.get(r);if(w!==void 0)return w}if(!dk()){let w={path:null,components:[]};return d&&Gf.map.set(r,w),w}let f=c.mode==="smart"?ik(r):void 0,h=[];try{let w=_k(r),j=0;for(;w&&j<c.maxDepth&&h.length<c.maxComponents;){let L=hk(w);L&&!mk(L)&&ck(L,j,c,f)&&h.push(L),w=w.return,j++}}catch{let w={path:null,components:[]};return d&&Gf.map.set(r,w),w}if(h.length===0){let w={path:null,components:[]};return d&&Gf.map.set(r,w),w}let v={path:h.slice().reverse().map(w=>`<${w}>`).join(" "),components:h};return d&&Gf.map.set(r,v),v}var Qf={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16};function yk(r){if(!r||typeof r!="object")return null;let i=Object.keys(r),c=i.find(h=>h.startsWith("__reactFiber$"));if(c)return r[c]||null;let d=i.find(h=>h.startsWith("__reactInternalInstance$"));if(d)return r[d]||null;let f=i.find(h=>{if(!h.startsWith("__react"))return!1;let b=r[h];return b&&typeof b=="object"&&"_debugSource"in b});return f&&r[f]||null}function e_(r){if(!r.type||typeof r.type=="string")return null;if(typeof r.type=="object"||typeof r.type=="function"){let i=r.type;if(i.displayName)return i.displayName;if(i.name)return i.name}return null}function bk(r,i=50){let c=r,d=0;for(;c&&d<i;){if(c._debugSource)return{source:c._debugSource,componentName:e_(c)};if(c._debugOwner?._debugSource)return{source:c._debugOwner._debugSource,componentName:e_(c._debugOwner)};c=c.return,d++}return null}function vk(r){let i=r,c=0,d=50;for(;i&&c<d;){let f=i,h=["_debugSource","__source","_source","debugSource"];for(let b of h){let v=f[b];if(v&&typeof v=="object"&&"fileName"in v)return{source:v,componentName:e_(i)}}if(i.memoizedProps){let b=i.memoizedProps;if(b.__source&&typeof b.__source=="object"){let v=b.__source;if(v.fileName&&v.lineNumber)return{source:{fileName:v.fileName,lineNumber:v.lineNumber,columnNumber:v.columnNumber},componentName:e_(i)}}}i=i.return,c++}return null}var zm=new Map;function xk(r){let i=r.tag,c=r.type,d=r.elementType;if(typeof c=="string"||c==null||typeof c=="function"&&c.prototype?.isReactComponent)return null;if((i===Qf.FunctionComponent||i===Qf.IndeterminateComponent)&&typeof c=="function")return c;if(i===Qf.ForwardRef&&d){let f=d.render;if(typeof f=="function")return f}if((i===Qf.MemoComponent||i===Qf.SimpleMemoComponent)&&d){let f=d.type;if(typeof f=="function")return f}return typeof c=="function"?c:null}function wk(){let r=gk,i=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(i&&"H"in i)return{get:()=>i.H,set:d=>{i.H=d}};let c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(c){let d=c.ReactCurrentDispatcher;if(d&&"current"in d)return{get:()=>d.current,set:f=>{d.current=f}}}return null}function Sk(r,i){let c=r.split(`
`),d=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/\/_next\/static\/chunks\//,/\/\.vite\/deps\//,/\/_astro\//,/\/assets\/[^\s/]+[-.][\w-]{8,}\.m?js(?:[?:]|$)/,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],f=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,h=/^[^@]*@(.+?):(\d+):(\d+)$/;for(let b of c){let v=b.trim();if(!v||d.some(j=>j.test(v)))continue;if(i){let j=i.replace(/^bound /,"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(!new RegExp(`(?:at (?:Object\\.)?|^)${j}(?: \\(|@| \\[)`).test(v))continue}let w=f.exec(v)||h.exec(v);if(w)return{fileName:w[1],line:parseInt(w[2],10),column:parseInt(w[3],10)}}return null}function Ck(r){let i=r;return i=i.replace(/[?#].*$/,""),i=i.replace(/^turbopack:\/\/\/\[project\]\//,""),i=i.replace(/^webpack-internal:\/\/\/\.\//,""),i=i.replace(/^webpack-internal:\/\/\//,""),i=i.replace(/^webpack:\/\/\/\.\//,""),i=i.replace(/^webpack:\/\/\//,""),i=i.replace(/^turbopack:\/\/\//,""),i=i.replace(/^https?:\/\/[^/]+\//,""),i=i.replace(/^file:\/\/\//,"/"),i=i.replace(/^\([^)]+\)\/\.\//,""),i=i.replace(/^\.\//,""),i}function kk(r){let i=xk(r);if(!i)return null;if(zm.has(i))return zm.get(i);let c=wk();if(!c)return zm.set(i,null),null;let d=c.get(),f=null;try{let h=new Proxy({},{get(){throw new Error("probe")}});c.set(h);try{i({})}catch(b){if(b instanceof Error&&b.message==="probe"&&b.stack){let v=Sk(b.stack,i.name);v&&(f={fileName:Ck(v.fileName),lineNumber:v.line,columnNumber:v.column,componentName:e_(r)||void 0})}}}finally{c.set(d)}return zm.set(i,f),f}function Ek(r,i=15){let c=r,d=0;for(;c&&d<i;){let f=kk(c);if(f)return f;c=c.return,d++}return null}function Gy(r){let i=yk(r);if(!i)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let c=bk(i);if(c||(c=vk(i)),c?.source)return{found:!0,source:{fileName:c.source.fileName,lineNumber:c.source.lineNumber,columnNumber:c.source.columnNumber,componentName:c.componentName||void 0},isReactApp:!0,isProduction:!1};let d=Ek(i);return d?{found:!0,source:d,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function Tk(r,i="path"){let{fileName:c,lineNumber:d,columnNumber:f}=r,h=`${c}:${d}`;return f!==void 0&&(h+=`:${f}`),i==="vscode"?`vscode://file${c.startsWith("/")?"":"/"}${h}`:h}function Mk(r,i=10){let c=r,d=0;for(;c&&d<i;){let f=Gy(c);if(f.found)return f;c=c.parentElement,d++}return Gy(r)}var Pf=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function Um(r,i){let c=`## Page Feedback: ${r}
`,d=i?.replace(/[\r\n\t]+/g," ").trim();return d&&(c+=`**App:** ${d.replace(/[\\`*_\[\]<>]/g,"\\$&")}
`),c}function Iw(r,i,c="standard",d={}){if(r.length===0)return"";let f=typeof window<"u"?`${window.innerWidth}\xD7${window.innerHeight}`:"unknown",h=Um(i,d.appName);return c==="forensic"?(h+=`
**Environment:**
`,h+=`- Viewport: ${f}
`,typeof window<"u"&&(h+=`- URL: ${window.location.href}
`,h+=`- User Agent: ${navigator.userAgent}
`,h+=`- Timestamp: ${new Date().toISOString()}
`,h+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),h+=`
---
`):c!=="compact"&&(h+=`**Viewport:** ${f}
`),h+=`
`,r.forEach((b,v)=>{c==="compact"?(h+=`${v+1}. **${b.element}**${b.sourceFile?` (${b.sourceFile})`:""}: ${b.comment}`,b.selectedText&&(h+=` (re: "${b.selectedText.slice(0,30)}${b.selectedText.length>30?"...":""}")`),h+=`
`):c==="forensic"?(h+=`### ${v+1}. ${b.element}
`,b.isMultiSelect&&b.fullPath&&(h+=`*Forensic data shown for first element of selection*
`),b.fullPath&&(h+=`**Full DOM Path:** ${b.fullPath}
`),b.cssClasses&&(h+=`**CSS Classes:** ${b.cssClasses}
`),b.boundingBox&&(h+=`**Position:** x:${Math.round(b.boundingBox.x)}, y:${Math.round(b.boundingBox.y)} (${Math.round(b.boundingBox.width)}\xD7${Math.round(b.boundingBox.height)}px)
`),h+=`**Annotation at:** ${b.x.toFixed(1)}% from left, ${Math.round(b.y)}px from top
`,b.selectedText&&(h+=`**Selected text:** "${b.selectedText}"
`),b.nearbyText&&!b.selectedText&&(h+=`**Context:** ${b.nearbyText.slice(0,100)}
`),b.computedStyles&&(h+=`**Computed Styles:** ${b.computedStyles}
`),b.accessibility&&(h+=`**Accessibility:** ${b.accessibility}
`),b.nearbyElements&&(h+=`**Nearby Elements:** ${b.nearbyElements}
`),b.sourceFile&&(h+=`**Source:** ${b.sourceFile}
`),b.reactComponents&&(h+=`**React:** ${b.reactComponents}
`),h+=`**Feedback:** ${b.comment}

`):(h+=`### ${v+1}. ${b.element}
`,h+=`**Location:** ${b.elementPath}
`,b.sourceFile&&(h+=`**Source:** ${b.sourceFile}
`),b.reactComponents&&(h+=`**React:** ${b.reactComponents}
`),c==="detailed"&&(b.cssClasses&&(h+=`**Classes:** ${b.cssClasses}
`),b.boundingBox&&(h+=`**Position:** ${Math.round(b.boundingBox.x)}px, ${Math.round(b.boundingBox.y)}px (${Math.round(b.boundingBox.width)}\xD7${Math.round(b.boundingBox.height)}px)
`)),b.selectedText&&(h+=`**Selected text:** "${b.selectedText}"
`),c==="detailed"&&b.nearbyText&&!b.selectedText&&(h+=`**Context:** ${b.nearbyText.slice(0,100)}
`),h+=`**Feedback:** ${b.comment}

`)}),h.trim()}function jw(r,i,c="markdown"){return c==="markdown"?i:[...new Set(r.map(d=>c==="source"?d.sourceFile:c==="classes"?d.cssClasses:d.attributes?.[c.attribute]).filter(d=>typeof d=="string"&&d.length>0))].join(`
`)}async function Rk(r){if(typeof window>"u")return!1;try{if(navigator.clipboard?.writeText)return await navigator.clipboard.writeText(r),!0}catch{}return Ak(r)}function Ak(r){let i=document.createElement("textarea"),c=document.activeElement;for(;c?.shadowRoot?.activeElement;)c=c.shadowRoot.activeElement;let d=c instanceof HTMLInputElement||c instanceof HTMLTextAreaElement?c:null,f=d&&d.selectionStart!==null?{start:d.selectionStart,end:d.selectionEnd,direction:d.selectionDirection}:null,h=document.getSelection(),b=h?Array.from({length:h.rangeCount},(v,w)=>h.getRangeAt(w).cloneRange()):[];try{return i.value=r,i.setAttribute("readonly",""),i.style.cssText="position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;",document.body.appendChild(i),i.focus({preventScroll:!0}),i.select(),i.setSelectionRange(0,r.length),document.execCommand("copy")}catch{return!1}finally{if(i.remove(),c instanceof HTMLElement&&c.isConnected&&(c.focus({preventScroll:!0}),d&&f&&d.setSelectionRange(f.start,f.end,f.direction)),h){h.removeAllRanges();for(let v of b)h.addRange(v)}}}function Yw(r){if(!r)return r;try{let i=new URL(r,"http://agentation.invalid");return i.pathname+i.search+i.hash}catch{return r}}function qw(r,i,c=[]){let d=new Map,f=new Map(c.map(v=>[v.id,v])),h=!1;async function b(v,w){if(h||w.running||w.timer)return;let j=w.desired,L=i.get(v);if(!j&&!L){d.delete(v),i.delete(v);return}let R=j?JSON.stringify(j):void 0;if(!(j&&L&&w.synced===R)){w.running=!0;try{if(!j)await r.remove(L),i.delete(v),w.synced=void 0;else if(L)await r.update(L,j),w.synced=R;else{i.set(v,"");let H=await r.create(j);i.set(v,H.id),w.synced=R}w.retries=0,w.running=!1,!h&&d.get(v)===w&&b(v,w)}catch(H){if(w.running=!1,!h&&d.get(v)===w&&(console.warn("[Agentation] Failed to sync layout feedback:",H),i.get(v)&&w.retries<3)){let z=500*2**w.retries++;w.timer=cn(()=>{w.timer=void 0,b(v,w)},z)}}}}return{replace(v){let w=new Map(v.map(j=>[j.id,j]));for(let[j,L]of w){let R=d.get(j);if(!R){R={running:!1,retries:0},d.set(j,R);let H=[...f.values()].find(z=>z.kind===L.kind&&Yw(z.url)===Yw(L.url)&&(L.kind==="placement"?z.timestamp===L.timestamp&&z.element===L.element:z.element===L.element));H&&(i.set(j,H.id),f.delete(H.id))}JSON.stringify(R.desired)!==JSON.stringify(L)&&(R.retries=0,R.timer&&clearTimeout(R.timer),R.timer=void 0),R.desired=L}for(let[j,L]of d)w.has(j)||(L.desired=void 0),b(j,L)},forget(v){let w=d.get(v);w?.timer&&clearTimeout(w.timer),d.delete(v),i.delete(v)},dispose(){h=!0;for(let v of d.values())v.timer&&clearTimeout(v.timer)}}}function Ok(r,i,c,d){let f=!1,h,b,v=1e3,w,j=z=>{!f&&(z?.status==="resolved"||z?.status==="dismissed")&&d(z)},L=async()=>{if(f||w||!c())return;let z=new AbortController;w=z;let S=cn(()=>z.abort(),5e3);try{let V=await fetch(`${r}/sessions/${i}`,{signal:z.signal});if(!V.ok)return;let B=await V.json();!f&&!z.signal.aborted&&Array.isArray(B.annotations)&&B.annotations.forEach(j)}catch{}finally{clearTimeout(S),w===z&&(w=void 0)}},R=()=>{if(f)return;let z=new EventSource(`${r}/sessions/${i}/events`),S=()=>{v=1e3,L()},V=ne=>{try{j(JSON.parse(ne.data).payload)}catch{}},B=()=>{z.readyState!==EventSource.CLOSED||f||b!==void 0||(h?.(),b=cn(()=>{b=void 0,R()},v),v=Math.min(v*2,1e4))};z.addEventListener("open",S),z.addEventListener("annotation.updated",V),z.addEventListener("error",B),h=()=>{z.removeEventListener("open",S),z.removeEventListener("annotation.updated",V),z.removeEventListener("error",B),z.close()}};R();let H=Zw(()=>{L()},1e4);return()=>{f=!0,h?.(),b!==void 0&&clearTimeout(b),clearInterval(H),w?.abort()}}var Dk=`.styles-module__surface___7qnpJ {
  padding: 0;
  width: var(--preview-width, 200px);
  max-width: calc(100vw - 24px);
  overflow: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  z-index: inherit;
  will-change: auto;
  transform: translateX(-50%);
  transition: left 200ms cubic-bezier(0.2, 0.8, 0.2, 1), top 200ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 200ms cubic-bezier(0.2, 0.8, 0.2, 1), width 200ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 100ms ease-out, visibility 0s 200ms;
}
.styles-module__surface___7qnpJ[data-positioning] {
  transition: none;
}
.styles-module__surface___7qnpJ[data-direct-entry] *, .styles-module__surface___7qnpJ[data-direct-entry] *::before, .styles-module__surface___7qnpJ[data-direct-entry] *::after {
  transition: none !important;
}
.styles-module__surface___7qnpJ[data-state=preview], .styles-module__surface___7qnpJ[data-state=edit] {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}
.styles-module__surface___7qnpJ[data-state=edit], .styles-module__surface___7qnpJ[data-annotation-popup][data-state=hidden] {
  width: 280px;
  border-radius: 16px;
}
.styles-module__surface___7qnpJ[data-state=edit] {
  pointer-events: auto;
}
.styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__surface___7qnpJ[data-state=preview] {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__surface___7qnpJ {
    transition: opacity 100ms ease-out, visibility 0s 100ms;
  }
}`,Nk={surface:"styles-module__surface___7qnpJ"},zk=(0,Gl.forwardRef)(function({annotation:i,editing:c,exiting:d,restorePreview:f,editorProps:h,lightMode:b,scrollY:v,onExited:w},j){let L=(0,Gl.useRef)({annotation:i,editorProps:h}),R=i??L.current.annotation,H=i?h:L.current.editorProps,z=(0,Gl.useRef)(null),S=(0,Gl.useRef)(null),V=(0,Gl.useRef)(),B=(0,Gl.useRef)(v),ne=c&&!d?"edit":i&&(!c||f)?"preview":"hidden",ze=ne==="preview"||!c;return(0,Gl.useLayoutEffect)(()=>{i&&(L.current={annotation:i,editorProps:h})},[i,h]),(0,Gl.useLayoutEffect)(()=>{let G=z.current;if(!G||!R)return;let ue=ne==="edit"&&(V.current!==R.id||G.dataset.state==="hidden"&&getComputedStyle(G).opacity==="0");ue&&(G.dataset.directEntry="true");let mt=()=>{let it=R.x/100*window.innerWidth,fe=R.isFixed?R.y:R.y-v,Be=ne==="preview"||!c,Qe=parseFloat(G.style.getPropertyValue("--preview-width"))||200,Me=Math.min(Qe,window.innerWidth-24),Re=Math.max(12,Math.min(window.innerWidth-Me-12,it-Me/2)),Le=Be?Me:Math.min(280,window.innerWidth-24),J=Math.min(Be?12:20,(window.innerWidth-Le)/2),pe=fe>window.innerHeight-(Be?101:290);G.style.left=`${Math.max(J,Math.min(window.innerWidth-Le-J,Re))}px`,G.style.right="auto",G.style.top=`${Math.max(12,Math.min(window.innerHeight-12,fe+(pe?-21:21)))}px`,G.style.bottom="auto",G.style.transform=pe?"translateY(-100%)":"translateY(0)",G.style.maxHeight=`${Math.max(100,pe?fe-33:window.innerHeight-fe-33)}px`},vt=V.current!==R.id||B.current!==v||G.dataset.state==="hidden";vt&&(G.dataset.positioning="true"),mt(),(vt||ue)&&G.getBoundingClientRect(),delete G.dataset.positioning,delete G.dataset.directEntry,G.dataset.state=ne,G.inert=ne!=="edit",V.current=R.id,B.current=v;let ke=()=>{G.dataset.positioning="true",mt(),G.getBoundingClientRect(),delete G.dataset.positioning};return window.addEventListener("resize",ke),()=>window.removeEventListener("resize",ke)},[R?.id,R?.x,R?.y,R?.isFixed,ne,c,v,R?.comment]),(0,Gl.useLayoutEffect)(()=>{c&&!d&&S.current?.focus()},[c,d,R?.id]),Wy(z,d,w),(0,Gl.useImperativeHandle)(j,()=>({shake(){z.current?.animate?.([{translate:"0px"},{translate:"-3px"},{translate:"3px"},{translate:"-2px"},{translate:"2px"},{translate:"0px"}],{duration:250}),S.current?.focus()}}),[]),!R||!H?null:(0,Qy.jsx)("div",{ref:z,className:`${Xt.popup} ${Nk.surface} ${b?Xt.light:""}`,"data-feedback-toolbar":!0,"data-annotation-card":!0,"data-annotation-popup":c?"":void 0,"data-state":"hidden","aria-hidden":ne==="hidden",onClick:G=>G.stopPropagation(),onKeyDownCapture:G=>{G.key!=="Escape"||G.nativeEvent.isComposing||!c||(G.preventDefault(),G.stopPropagation(),H.onCancel())},children:(0,Qy.jsx)(c4,{ref:S,...H,variant:"card",preview:ze,resetOnPreview:!c,disabled:!c||d},R.id)})}),Lk=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-family: inherit;
  line-height: 1;
  text-align: center;
  appearance: none;
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  -webkit-user-select: none;
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7 > * {
  pointer-events: none;
}
.styles-module__marker___9CKF7:focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 3px;
}
.styles-module__marker___9CKF7:hover, .styles-module__marker___9CKF7:focus-visible, .styles-module__marker___9CKF7.styles-module__previewVisible___imMag {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq) {
  transition: background-color 0.15s ease, transform 0.1s ease, z-index 0s 0.1s;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):focus-visible, .styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq).styles-module__previewVisible___imMag {
  transition-delay: 0s;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
  animation: styles-module__markerConfirm___RT4Sk 220ms ease-out both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):not(.styles-module__confirm___BtMvq):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U.styles-module__exit___KBdR3 {
  animation-duration: 150ms;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

@keyframes styles-module__markerConfirm___RT4Sk {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  25% {
    transform: translate(-50%, -50%) scale(0.94);
  }
  65% {
    transform: translate(-50%, -50%) scale(1.06);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.styles-module__number___1JFu9 {
  display: block;
}

.styles-module__numberGlyph___qchdk {
  display: block;
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
  transition: opacity 140ms ease-out, transform 180ms cubic-bezier(0.22, 1, 0.36, 1), filter 140ms ease-out;
}

.styles-module__actionGlyph___AFRt0 {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translateY(2px) scale(0.8) rotate(-12deg);
  filter: blur(1px);
  transition: opacity 120ms ease-out, transform 160ms cubic-bezier(0.22, 1, 0.36, 1), filter 120ms ease-out;
}

.styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(-2px) scale(0.8);
  filter: blur(1px);
}
.styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
  opacity: 1;
  transform: translateY(0) scale(1) rotate(0);
  filter: blur(0);
}

.styles-module__plus___xslMP {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
  filter: blur(1px);
  transition: opacity 100ms ease-out, transform 140ms ease-out, filter 100ms ease-out;
  pointer-events: none;
}

.styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk {
  opacity: 0;
  transform: translateY(5px);
  filter: blur(2px);
}
.styles-module__pending___BiY-U .styles-module__plus___xslMP {
  opacity: 1;
  transform: rotate(0) scale(1);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  .styles-module__marker___9CKF7.styles-module__enter___8kI3q, .styles-module__marker___9CKF7.styles-module__exit___KBdR3, .styles-module__marker___9CKF7.styles-module__clearing___8rM7K, .styles-module__marker___9CKF7.styles-module__confirm___BtMvq {
    animation-duration: 1ms;
    animation-delay: 0ms !important;
  }
  .styles-module__numberGlyph___qchdk, .styles-module__actionGlyph___AFRt0, .styles-module__plus___xslMP {
    transition: opacity 100ms ease-out;
    transform: none;
    filter: none;
  }
  .styles-module__pending___BiY-U .styles-module__numberGlyph___qchdk, .styles-module__pending___BiY-U .styles-module__plus___xslMP,
  .styles-module__actionVisible___Kb--l .styles-module__numberGlyph___qchdk, .styles-module__actionVisible___Kb--l .styles-module__actionGlyph___AFRt0 {
    transform: none;
    filter: none;
  }
}`,Go={marker:"styles-module__marker___9CKF7",previewVisible:"styles-module__previewVisible___imMag",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",confirm:"styles-module__confirm___BtMvq",markerIn:"styles-module__markerIn___x4G8D",markerConfirm:"styles-module__markerConfirm___RT4Sk",markerOut:"styles-module__markerOut___6VhQN",pending:"styles-module__pending___BiY-U",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",renumberRoll:"styles-module__renumberRoll___akV9B",number:"styles-module__number___1JFu9",numberGlyph:"styles-module__numberGlyph___qchdk",actionGlyph:"styles-module__actionGlyph___AFRt0",actionVisible:"styles-module__actionVisible___Kb--l",plus:"styles-module__plus___xslMP"},Vw=(0,Oa.memo)(function({annotation:i,pending:c=!1,globalIndex:d,layerIndex:f,layerSize:h,isExiting:b,isClearing:v,isAnimated:w,isNew:j,isHovered:L,isRemoving:R,onRemoveComplete:H,isEditingAny:z,renumberFrom:S,markerClickBehavior:V,onHoverEnter:B,onEnterComplete:ne,onHoverLeave:ze,onClick:G,onContextMenu:ue}){let[mt,vt]=(0,Oa.useState)(w),ke=(0,Oa.useRef)(c),[it,fe]=(0,Oa.useState)(!1),Be=ke.current&&!c&&mt&&!it;(0,Oa.useLayoutEffect)(()=>{b&&vt(!1)},[b]);let Qe=(0,Oa.useRef)(null),Me=(0,Oa.useRef)({action:!1,delete:!1}),Re=L&&!z,Le=Re&&V==="delete";(0,Oa.useLayoutEffect)(()=>{R||(Me.current={action:Re,delete:Le})},[R,Re,Le]);let J=R?Me.current.action:Re,pe=R?Me.current.delete:Le;Wy(Qe,R,()=>H(i.id));let He=i.isMultiSelect,Ue=He?"var(--agentation-color-green)":"var(--agentation-color-accent)",Ne=v?Go.clearing:b||R?Go.exit:Be?Go.confirm:!w&&!mt?Go.enter:"",st=v?`${Math.min(f*20,120)}ms`:R||c||Be?"0ms":b?`${(h-1-f)*20}ms`:`${j?0:f*20}ms`;return(0,Hr.jsxs)("button",{ref:Qe,type:"button","aria-label":c?"Pending annotation":`${V==="delete"?"Delete":"Edit"} annotation ${d+1}: ${i.element}`,disabled:c||b||R||v,tabIndex:c||z?-1:0,className:`${Go.marker} ${c?Go.pending:""} ${He?Go.multiSelect:""} ${Ne} ${!c&&J?Go.actionVisible:""} ${pe?Go.hovered:""} ${L&&!z&&!R?Go.previewVisible:""}`,"data-annotation-marker":c?void 0:"","data-annotation-pending":c?"":void 0,style:{left:`${i.x}%`,top:i.y,backgroundColor:pe?void 0:Ue,animationDelay:st},onAnimationEnd:Ee=>{Ee.target===Ee.currentTarget&&(Ne===Go.enter||Ne===Go.confirm)&&(vt(!0),c||fe(!0),c||ne(i.id))},onMouseOver:()=>{c||B(i)},onMouseOut:Ee=>{let ee=Ee.relatedTarget;(!(ee instanceof Node)||!Ee.currentTarget.contains(ee))&&ze(i.id)},onFocus:Ee=>{!c&&Ee.currentTarget.matches(":focus-visible")&&B(i)},onBlur:()=>ze(i.id),onClick:Ee=>{Ee.stopPropagation(),!c&&!b&&!R&&G(i,Ee.currentTarget)},onContextMenu:ue?Ee=>{V==="delete"&&(Ee.preventDefault(),Ee.stopPropagation(),!c&&!b&&!R&&ue(i,Ee.currentTarget))}:void 0,children:[(0,Hr.jsx)("span",{className:`${Go.number} ${S!==null&&d>=S?Go.renumber:""}`,"aria-hidden":"true",children:(0,Hr.jsx)("span",{className:Go.numberGlyph,children:d+1})},d),(0,Hr.jsx)("span",{className:Go.actionGlyph,"aria-hidden":"true",children:V==="delete"?(0,Hr.jsx)(K8,{size:He?18:16}):(0,Hr.jsx)(n7,{size:16})}),ke.current&&(0,Hr.jsx)("span",{className:Go.plus,"aria-hidden":"true",children:(0,Hr.jsx)(X8,{size:12})})]})}),Bk=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB[data-checked] .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,Ny={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"},zy=({className:r="",checked:i,onChange:c,...d})=>(0,t_.jsxs)("div",{className:`${Ny.switchContainer} ${r}`,"data-checked":i?"":void 0,children:[(0,t_.jsx)("input",{className:Ny.switchInput,checked:i,onChange:c,type:"checkbox",...d}),(0,t_.jsx)("div",{className:Ny.switchThumb})]}),$k=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk[data-checked] .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,Lm={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"},Hk=({className:r="",checked:i,onChange:c,...d})=>(0,Wu.jsxs)("div",{className:`${Lm.checkboxContainer} ${r}`,"data-checked":i?"":void 0,children:[(0,Wu.jsx)("input",{className:Lm.checkboxInput,type:"checkbox",checked:i,onChange:c,...d}),(0,Wu.jsx)("svg",{className:Lm.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,Wu.jsx)("path",{className:Lm.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),Uk=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,Xw={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"},Gw=({className:r="",label:i,tooltip:c,checked:d,onChange:f,...h})=>{let b=(0,C4.useId)();return(0,Zu.jsxs)("div",{className:`${Xw.container} ${r}`,...h,children:[(0,Zu.jsx)(Hk,{id:b,onChange:f,checked:d}),(0,Zu.jsx)("label",{className:Xw.label,htmlFor:b,children:i}),c&&(0,Zu.jsx)(hc,{content:c})]})},Ik=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- :where(button, a, input, select, textarea):focus-visible {
  outline: 2px solid var(--agentation-color-accent);
  outline-offset: 2px;
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 253px;
  max-width: calc(100vw - 20px);
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn- {
  opacity: 0;
  transform: translateY(var(--panel-offset-y, 4px)) scale(0.98);
  transform-origin: var(--panel-origin, bottom right);
  filter: blur(2px);
  pointer-events: none;
  visibility: hidden;
  transition: opacity 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 120ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.styles-module__settingsPanel___qNkn-[data-panel-present=true] {
  visibility: visible;
}
.styles-module__settingsPanel___qNkn-[data-panel-open=true] {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
  pointer-events: auto;
  transition-duration: 160ms;
}
@media (prefers-reduced-motion: reduce) {
  .styles-module__settingsPanel___qNkn- {
    transition: none;
    transform: none;
    filter: none;
  }
}
.styles-module__settingsPanel___qNkn-.styles-module__below___Vpv-k {
  --panel-offset-y: -4px;
  --panel-origin: top right;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.0094em;
  color: #bbb;
  text-decoration: none;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: 6px;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: auto;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #333;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,Fe={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",below:"styles-module__below___Vpv-k",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"},jk=(0,vs.memo)(function({settings:i,onSettingsChange:c,isDarkMode:d,onToggleTheme:f,isDevMode:h,connectionStatus:b,endpoint:v,onExited:w,isOpen:j,toolbarNearBottom:L,settingsPage:R,onSettingsPageChange:H,onHideToolbar:z}){let{ref:S}=f4(j,{keepMounted:!0,onExited:w}),V=(0,vs.useRef)(null),B=(0,vs.useRef)(null),ne=(0,vs.useRef)(!1);(0,vs.useLayoutEffect)(()=>{!j||!ne.current||(ne.current=!1,(R==="automations"?B:V).current?.focus())},[j,R]);let ze=d?"Switch to light mode":"Switch to dark mode";return(0,Xe.jsx)("div",{className:`${Fe.settingsPanel} ${L?Fe.below:""}`,style:L?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,ref:G=>{S.current=G,G?.toggleAttribute("inert",!j)},role:"group","aria-label":"Feedback settings","aria-hidden":!j,children:(0,Xe.jsxs)("div",{className:Fe.settingsPanelContainer,children:[(0,Xe.jsxs)("div",{className:`${Fe.settingsPage} ${R==="automations"?Fe.slideLeft:""}`,ref:G=>{G?.toggleAttribute("inert",R!=="main")},"aria-hidden":R!=="main",children:[(0,Xe.jsxs)("div",{className:Fe.settingsHeader,children:[(0,Xe.jsx)("a",{className:Fe.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer","aria-label":"Agentation",children:"Agentation"}),(0,Xe.jsxs)("p",{className:Fe.settingsVersion,children:["v","3.1.2"]}),(0,Xe.jsx)("button",{className:Fe.themeToggle,onClick:f,title:ze,"aria-label":ze,children:(0,Xe.jsx)("span",{className:Fe.themeIconWrapper,children:(0,Xe.jsx)("span",{className:Fe.themeIcon,children:d?(0,Xe.jsx)(e7,{size:20}):(0,Xe.jsx)(t7,{size:20})},d?"sun":"moon")})})]}),(0,Xe.jsx)("div",{className:Fe.divider}),(0,Xe.jsxs)("div",{className:Fe.settingsSection,children:[(0,Xe.jsxs)("div",{className:Fe.settingsRow,children:[(0,Xe.jsxs)("div",{className:Fe.settingsLabel,children:["Output Detail",(0,Xe.jsx)(hc,{content:"Controls how much detail is included in the copied output"})]}),(0,Xe.jsxs)("button",{className:Fe.cycleButton,onClick:()=>{let ue=(Pf.findIndex(mt=>mt.value===i.outputDetail)+1)%Pf.length;c({outputDetail:Pf[ue].value})},children:[(0,Xe.jsx)("span",{className:Fe.cycleButtonText,children:Pf.find(G=>G.value===i.outputDetail)?.label},i.outputDetail),(0,Xe.jsx)("span",{className:Fe.cycleDots,children:Pf.map(G=>(0,Xe.jsx)("span",{className:`${Fe.cycleDot} ${i.outputDetail===G.value?Fe.active:""}`},G.value))})]})]}),(0,Xe.jsxs)("div",{className:`${Fe.settingsRow} ${Fe.settingsRowMarginTop} ${h?"":Fe.settingsRowDisabled}`,children:[(0,Xe.jsxs)("div",{className:Fe.settingsLabel,children:["React Components",(0,Xe.jsx)(hc,{content:h?"Include React component names in annotations":"Disabled \u2014 production builds minify component names, making detection unreliable. Use in development mode."})]}),(0,Xe.jsx)(zy,{"aria-label":"React Components",checked:h&&i.reactEnabled,onChange:G=>c({reactEnabled:G.target.checked}),disabled:!h})]}),(0,Xe.jsxs)("div",{className:`${Fe.settingsRow} ${Fe.settingsRowMarginTop}`,children:[(0,Xe.jsxs)("div",{className:Fe.settingsLabel,children:["Hide Until Restart",(0,Xe.jsx)(hc,{content:"Hides the toolbar until you open a new tab"})]}),(0,Xe.jsx)(zy,{"aria-label":"Hide Until Restart",checked:!1,onChange:G=>{G.target.checked&&z()}})]})]}),(0,Xe.jsx)("div",{className:Fe.divider}),(0,Xe.jsxs)("div",{className:Fe.settingsSection,children:[(0,Xe.jsx)("div",{className:`${Fe.settingsLabel} ${Fe.settingsLabelMarker}`,children:"Marker Color"}),(0,Xe.jsx)("div",{className:Fe.colorOptions,children:Jf.map(G=>(0,Xe.jsx)("button",{className:`${Fe.colorOption} ${i.annotationColorId===G.id?Fe.selected:""}`,style:{"--swatch":G.srgb,"--swatch-p3":G.p3},onClick:()=>c({annotationColorId:G.id}),title:G.label,"aria-label":G.label,type:"button"},G.id))})]}),(0,Xe.jsx)("div",{className:Fe.divider}),(0,Xe.jsxs)("div",{className:Fe.settingsSection,children:[(0,Xe.jsx)(Gw,{className:"checkbox-field",label:"Clear on copy/send",checked:i.autoClearAfterCopy,onChange:G=>c({autoClearAfterCopy:G.target.checked}),tooltip:"Automatically clear annotations after copying"}),(0,Xe.jsx)(Gw,{className:Fe.checkboxField,label:"Block page interactions",checked:i.blockInteractions,onChange:G=>c({blockInteractions:G.target.checked})})]}),(0,Xe.jsx)("div",{className:Fe.divider}),(0,Xe.jsxs)("button",{className:Fe.settingsNavLink,ref:V,onClick:G=>{ne.current=G.detail===0,G.currentTarget.blur(),H("automations")},children:[(0,Xe.jsx)("span",{children:"Manage MCP & Webhooks"}),(0,Xe.jsxs)("span",{className:Fe.settingsNavLinkRight,children:[v&&b!=="disconnected"&&(0,Xe.jsx)("span",{className:`${Fe.mcpNavIndicator} ${Fe[b]}`}),(0,Xe.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,Xe.jsx)("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),(0,Xe.jsxs)("div",{className:`${Fe.settingsPage} ${Fe.automationsPage} ${R==="automations"?Fe.slideIn:""}`,ref:G=>{G?.toggleAttribute("inert",R!=="automations")},"aria-hidden":R!=="automations",children:[(0,Xe.jsxs)("button",{className:Fe.settingsBackButton,ref:B,"aria-label":"Back to settings",onClick:G=>{ne.current=G.detail===0,G.currentTarget.blur(),H("main")},children:[(0,Xe.jsx)(o7,{size:16}),(0,Xe.jsx)("span",{children:"Manage MCP & Webhooks"})]}),(0,Xe.jsx)("div",{className:Fe.divider}),(0,Xe.jsxs)("div",{className:Fe.settingsSection,children:[(0,Xe.jsxs)("div",{className:Fe.settingsRow,children:[(0,Xe.jsxs)("span",{className:Fe.automationHeader,children:["MCP Connection",(0,Xe.jsx)(hc,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),v&&(0,Xe.jsx)("div",{className:`${Fe.mcpStatusDot} ${Fe[b]}`,title:b==="connected"?"Connected":b==="connecting"?"Connecting...":"Disconnected"})]}),(0,Xe.jsxs)("p",{className:Fe.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",(0,Xe.jsx)("a",{href:"https://agentation.com/mcp",target:"_blank",rel:"noopener noreferrer",className:Fe.learnMoreLink,children:"Learn more"})]})]}),(0,Xe.jsx)("div",{className:Fe.divider}),(0,Xe.jsxs)("div",{className:`${Fe.settingsSection} ${Fe.settingsSectionGrow}`,children:[(0,Xe.jsxs)("div",{className:Fe.settingsRow,children:[(0,Xe.jsxs)("span",{className:Fe.automationHeader,children:["Webhooks",(0,Xe.jsx)(hc,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),(0,Xe.jsxs)("div",{className:Fe.autoSendContainer,children:[(0,Xe.jsx)("label",{htmlFor:"agentation-auto-send",className:`${Fe.autoSendLabel} ${i.webhooksEnabled?Fe.active:""} ${i.webhookUrl?"":Fe.disabled}`,children:"Auto-Send"}),(0,Xe.jsx)(zy,{id:"agentation-auto-send",checked:i.webhooksEnabled,onChange:G=>c({webhooksEnabled:G.target.checked}),disabled:!i.webhookUrl})]})]}),(0,Xe.jsx)("p",{className:Fe.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),(0,Xe.jsx)("textarea",{className:Fe.webhookUrlInput,placeholder:"Webhook URL","aria-label":"Webhook URL",value:i.webhookUrl,onKeyDown:G=>G.stopPropagation(),onChange:G=>c({webhookUrl:G.target.value})})]})]})]})})});function Yk({x:r,y:i,elementName:c,reactComponents:d}){let f=(0,Gm.useRef)(null);return(0,Gm.useLayoutEffect)(()=>{let h=f.current;if(!h)return;let b=()=>{let v=h.offsetWidth,w=h.offsetHeight;h.style.left=`${Math.max(8,Math.min(r,window.innerWidth-v-8))}px`;let j=i-w-8;h.style.top=`${Math.max(8,Math.min(j,window.innerHeight-w-8))}px`};return b(),window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)},[r,i,c,d]),(0,n_.jsxs)("div",{ref:f,className:`${de.hoverTooltip} ${de.enter}`,children:[d&&(0,n_.jsx)("div",{className:de.hoverReactPath,children:d}),(0,n_.jsx)("div",{className:de.hoverElementName,children:c})]})}var qk=`@charset "UTF-8";
/* Reset box-model and set borders */
/* ============================================ */
*,
::before,
::after {
  border-width: 0;
  border-style: solid;
  box-sizing: border-box;
}

/* Document */
/* ============================================ */
/**
 * 1. Correct line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 * 3. Remove gray overlay on links for iOS.
 * 4. Render kerning consistently in all browsers.
 * 5. Correct font smoothing for macOS.
 */
:host {
  /* Inherited properties cross the shadow boundary, so a host page's
     text-transform, letter-spacing or font would otherwise restyle the UI. */
  font: 400 16px/1.5 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-variant: normal;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-align: start;
  text-indent: 0;
  text-shadow: none;
  white-space: normal;
  direction: ltr;
  writing-mode: horizontal-tb;
  hyphens: manual;
  word-break: normal;
  overflow-wrap: normal;
  tab-size: 8;
  list-style: none;
  quotes: initial;
  caret-color: auto;
  user-select: auto;
  -webkit-text-fill-color: initial;
  -webkit-text-stroke: 0;
  text-rendering: auto;
  -webkit-text-size-adjust: 100%; /* 2 */
  -webkit-tap-highlight-color: transparent; /* 3 */
  font-feature-settings: "kern"; /* 4 */
  -webkit-font-feature-settings: "kern"; /* 5 */
  -moz-font-feature-settings: "kern"; /* 5 */
  -webkit-font-smoothing: antialiased; /* 5 */
  -moz-osx-font-smoothing: grayscale; /* 5 */
}

/* Vertical rhythm */
/* ============================================ */
p,
table,
blockquote,
address,
pre,
iframe,
form,
figure,
dl {
  margin: 0;
}

/* Headings */
/* ============================================ */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}

/* Lists (enumeration) */
/* ============================================ */
ul,
ol,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Lists (definition) */
/* ============================================ */
dd {
  margin-left: 0;
}

/* Grouping content */
/* ============================================ */
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */
hr {
  clear: both;
  margin: 0;
  border-top-width: 1px;
  height: 0; /* 1 */
  box-sizing: content-box; /* 1 */
  overflow: visible; /* 2 */
  color: inherit;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 * 3. Wrap lines by default instead of overflow.
 */
pre {
  font-family: inherit; /* 1 */
  font-size: inherit; /* 2 */
  white-space: pre-line; /* 3 */
}

address {
  font-style: inherit;
}

/* Text-level semantics */
/* ============================================ */
/**
 * Remove the gray background on active links in IE 10.
 */
a {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */
abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: none; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */
b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */
code,
kbd,
samp {
  font-family: "Menlo", "Monaco", "Consolas", "Courier New", monospace; /* 1 */
  font-size: inherit; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */
small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
 */
sub,
sup {
  position: relative;
  vertical-align: baseline;
  line-height: 0;
  font-size: 75%;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Replaced content */
/* ============================================ */
/**
 * Prevent vertical alignment issues.
 */
svg,
img,
embed,
object,
iframe {
  vertical-align: bottom;
}

/*
 * 1. Remove image default bottom space.
 * 2. Prevent image from overflowing the container.
 */
img {
  display: block;
  max-width: 100%;
}

/**
 * Prevent alignment issues on Safari.
 */
@supports (background: -webkit-named-image(i)) {
  svg {
    will-change: transform;
  }
}
/* Forms */
/* ============================================ */
/**
 * Reset form fields to make them styleable.
 * 1. Make form elements stylable across systems iOS especially.
 * 2. Inherit text-transform from parent.
 */
button,
input,
optgroup,
select,
textarea {
  -webkit-appearance: none; /* 1 */
  appearance: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  background: transparent;
  vertical-align: middle;
  text-align: inherit;
  text-transform: inherit; /* 2 */
  font: inherit;
  color: inherit;
}

/**
 * Correct cursors for clickable elements.
 */
button,
[type=button],
[type=reset],
[type=submit] {
  cursor: pointer;
}

button:disabled,
[type=button]:disabled,
[type=reset]:disabled,
[type=submit]:disabled {
  cursor: default;
}

/**
 * Clickable labels and selects.
 */
select,
label {
  cursor: pointer;
}

/**
 * Improve outlines for Firefox and unify style with input elements & buttons.
 */
:-moz-focusring {
  outline: auto;
}

select:disabled {
  opacity: inherit;
}

/**
 * 1. Remove padding.
 */
option {
  padding: 0; /* 1 */
}

/**
 * Reset to invisible
 */
fieldset {
  margin: 0;
  padding: 0;
  min-width: 0;
}

legend {
  display: contents;
  padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */
progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */
textarea {
  overflow: auto;
}

/**
 * Remove increment and decrement buttons in Chrome.
 */
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

/**
 * Correct the outline style in Safari.
 */
[type=search] {
  outline-offset: -2px;
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
 * Remove the \u2018X\u2019 from Chrome and Safari.
 */
[type=search]::-webkit-search-decoration,
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-results-button,
[type=search]::-webkit-search-results-decoration {
  display: none;
}

/**
 * 1. Hide file input completely.
 * 2. Remove selected file text.
 * 3. Set cursor to pointer for all browsers.
 */
[type=file] {
  opacity: 0; /* 1 */
  font-size: 0; /* 2 */
  cursor: pointer; /* 3 */
}

/**
	* Fix appearance for Firefox
	*/
[type=number] {
  -moz-appearance: textfield;
}

/**
 * Set cursor to pointer for all browsers.
 */
[type=range] {
  cursor: pointer;
}

/**
 * Reset slider thumbs to make them styleable.
 */
[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
}

[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  appearance: none;
  border-width: 0;
  border-radius: 0;
  background-color: transparent;
}

/* Interactive */
/* ============================================ */
/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */
details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */
summary {
  display: list-item;
}

/*
 * Remove outline for editable content.
 */
[contenteditable]:focus {
  outline: auto;
}

/* Tables */
/* ============================================ */
/**
1. Correct table border color inheritance in all Chrome and Safari.
*/
table {
  border-color: inherit; /* 1 */
  border-collapse: collapse;
}

caption {
  text-align: left;
}

td,
th {
  vertical-align: top;
  padding: 0;
}

th {
  text-align: left;
  font-weight: inherit;
}

/* Misc */
/* ============================================ */
/*
 * Make placeholder style consistent across all browsers.
 */
::placeholder {
  color: #999;
  opacity: 1;
}

/*
 * Hide focus outline but keep it visible for Windows High Contrast Mode.
 */
:focus {
  outline-style: solid;
  outline-color: transparent;
}

/*
 * Hide input arrow when used with datalist.
 */
::-webkit-calendar-picker-indicator {
  display: none !important;
}`,Vk=[qk,i7,r4,$k,SC,r7,Xm,Lk,Dk,Uk,Ik,Bk].join(`
`);function Bm(r,i="filtered",c){let{name:d,path:f}=Fu(r,c);if(i==="off")return{name:d,elementName:d,path:f,reactComponents:null};let h=pk(r,{mode:i});return{name:h.path?`${h.path} ${d}`:d,elementName:d,path:f,reactComponents:h.path}}var Qw=!1,Ly={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},Pw=r=>{if(!r||!r.trim())return!1;try{let i=new URL(r.trim());return i.protocol==="http:"||i.protocol==="https:"}catch{return!1}},Xk={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},bs=r=>r.metaKey||r.ctrlKey,Jf=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],Gk=[...Jf.map(r=>`
    [data-agentation-accent="${r.id}"] {
      --agentation-color-accent: ${r.srgb};
    }
    @supports (color: color(display-p3 0 0 0)) {
      [data-agentation-accent="${r.id}"] {
        --agentation-color-accent: ${r.p3};
      }
    }
  `),`:host {
    ${Jf.map(r=>`--agentation-color-${r.id}: ${r.srgb};`).join(`
`)}
  }`,`@supports (color: color(display-p3 0 0 0)) {
    :host {
      ${Jf.map(r=>`--agentation-color-${r.id}: ${r.p3};`).join(`
`)}
    }
  }`].join("");function By(r){let i=r;for(let d=ra(i.ownerDocument);d;d=ra(i.ownerDocument))i=d;let c=i;for(;c&&c!==document.body;){let f=window.getComputedStyle(c).position;if(f==="fixed"||f==="sticky")return!0;c=c.parentElement}return!1}function Ff(r){return r.kind!=="placement"&&r.kind!=="rearrange"&&r.status!=="resolved"&&r.status!=="dismissed"}function $m(r){let i=Gy(r),c=i.found?i:Mk(r);if(c.found&&c.source)return Tk(c.source,"path")}function E4(r={}){let i=I8(r.useHashLocation??!1),c=(0,$.useState)(!1),d=q8(r.portalContainer);return d?(0,o4.createPortal)((0,k4.createElement)(Qk,{...r,key:r.useHashLocation?i:void 0,pathname:i,activeState:c,portalHost:d}),d):null}function Qk({pathname:r,activeState:i,portalHost:c,useHashLocation:d=!1,appName:f,enableKeyboardShortcuts:h=!0,identifyingAttributes:b=Fy,copyFormat:v="markdown",onOpenSource:w,portalContainer:j,demoAnnotations:L,demoDelay:R=1e3,enableDemoMode:H=!1,onAnnotationAdd:z,onAnnotationDelete:S,onAnnotationUpdate:V,onAnnotationsClear:B,onCopy:ne,onSubmit:ze,copyToClipboard:G=!0,endpoint:ue,sessionId:mt,onSessionCreated:vt,webhookUrl:ke,className:it}){let[fe,Be]=i,[,Qe]=(0,$.useState)(0),[Me]=(0,$.useState)(()=>R8(document,()=>Qe(x=>x+1)));(0,$.useEffect)(()=>(Me.start(),()=>Me.stop()),[Me]);let Re=typeof v=="object"?v.attribute:void 0,Le=(0,$.useMemo)(()=>Re?[...b,Re]:b,[b,Re]),J=(0,$.useRef)(!0);(0,$.useLayoutEffect)(()=>(J.current=!0,()=>{J.current=!1}),[]);let pe=(0,$.useCallback)(x=>d?j8(JSON.stringify([ue,r]),x):x(),[ue,r,d]),He=(0,$.useRef)(new Map),Ue=(0,$.useRef)(new Set),Ne=x=>Ff(x)&&!Ue.current.has(x.id),st=async(...x)=>{let C=await $w(...x),T=x[2],I=T.id;if(I&&(He.current.set(I,C.id),Ue.current.has(I)&&Ue.current.add(C.id)),!d){let Q=new URL(T.url||window.location.href).pathname,X=ys(Q).find(P=>P.id===I);try{if(Ue.current.has(I))await Nm(x[0],C.id);else if(X&&X.comment!==T.comment)return await Oy(x[0],C.id,{comment:X.comment}),{...C,comment:X.comment}}catch(P){console.warn("[Agentation] Failed to apply changes made during sync:",P)}}return C},Ee=x=>d?{...x,annotations:x.annotations.filter(C=>!Ue.current.has(C.id)&&Y8(C.url||x.url,r,window.location.origin))}:x,ee=(0,$.useRef)(r);ee.current=r;let Oe=(x,C,T,I=r)=>{let Q=S8(x,ys(I),C,He.current).filter(Ne);I===ee.current&&J.current&&Ot(Q),My(I,Q,T)},[ge,Ot]=(0,$.useState)([]),[Nn,Cn]=(0,$.useState)(!0),[Pt,In]=(0,$.useState)(()=>nk()),[jn,$o]=(0,$.useState)(!1);(0,$.useLayoutEffect)(()=>{Ww()},[]);let zn=(0,$.useRef)(null),Po=(0,$.useRef)(null),Ho=(0,$.useRef)(null),Ln=(0,$.useRef)(null),ho=(0,$.useRef)(!1),cl=(0,$.useRef)(!1),ye=(0,$.useRef)(!1);(0,$.useLayoutEffect)(()=>{fe&&ho.current?(ho.current=!1,Ho.current?.querySelector("button:not(:disabled)")?.focus()):!fe&&cl.current&&(cl.current=!1,Po.current?.focus())},[fe]),(0,$.useEffect)(()=>{let x=T=>{let I=zn.current;I&&T.composedPath().includes(I)&&T.stopPropagation()},C=["mousedown","click","pointerdown"];return C.forEach(T=>c.addEventListener(T,x)),()=>{C.forEach(T=>c.removeEventListener(T,x))}},[c]);let[We,dt]=(0,$.useState)(!1),[Te,ie]=(0,$.useState)(!1),[Gt,kt]=(0,$.useState)(null),[Bt,Rt]=(0,$.useState)({x:0,y:0}),[le,Y]=(0,$.useState)(null),[F,ce]=(0,$.useState)(!1),oe=gw(),Ie=gw(),[De,me]=(0,$.useState)("idle"),[je,rt]=(0,$.useState)(!1),xt=(0,$.useRef)(new Set),$t=(0,$.useRef)(new Set),p=(0,$.useRef)(),U=(0,$.useCallback)(()=>{!xt.current.size&&!p.current&&rt(!1)},[]);(0,$.useEffect)(()=>()=>clearTimeout(p.current),[]);let[ae,te]=(0,$.useState)(null),[ve,et]=(0,$.useState)(null),[Ce,Ae]=(0,$.useState)([]),[Ge,Ht]=(0,$.useState)(null),jt=(0,$.useRef)(null);(0,$.useEffect)(()=>()=>{jt.current&&clearTimeout(jt.current)},[]);let[Ye,oo]=(0,$.useState)(null),Zn=(0,$.useRef)(null),An=(0,$.useRef)(!1),[Fo,Wo]=(0,$.useState)(!1);(0,$.useLayoutEffect)(()=>{if(Ye||!Zn.current)return;let x=Zn.current;if(Zn.current=null,le)return;(fe&&x.isConnected&&!x.disabled?x:Po.current)?.focus({preventScroll:!0})},[Ye,fe,le]);let[hn,ul]=(0,$.useState)(null),[Ql,ia]=(0,$.useState)([]),[Rl,yc]=(0,$.useState)(0),[nd,od]=(0,$.useState)(!1),[Jt,bc]=(0,$.useState)(!1),[Jn,Zo]=(0,$.useState)(!1),[mo,Ir]=(0,$.useState)(!1),[ld,ad]=(0,$.useState)("main"),[dl,vc]=(0,$.useState)(!1),[Ft,xc]=(0,$.useState)(!1),[Da,xi]=(0,$.useState)(!1),[Dt,Jo]=(0,$.useState)([]),[jr,or]=(0,$.useState)(null),wc=(0,$.useRef)(!1),[yn,rd]=(0,$.useState)(!1),[Ko,lr]=(0,$.useState)(!1),[ar,l_]=(0,$.useState)(1),[wi,id]=(0,$.useState)("new-page"),[lo,rr]=(0,$.useState)(""),[Si,sd]=(0,$.useState)(!1),[ot,sa]=(0,$.useState)(null),Sc=(0,$.useRef)(!1),ws=(0,$.useRef)({rearrange:null,placements:[]}),Na=(0,$.useRef)({rearrange:null,placements:[]}),[a_,cd]=(0,$.useState)(0),[r_,Qm]=(0,$.useState)(0),[Yr,Cc]=(0,$.useState)([]),[za,Ci]=(0,$.useState)(null),i_=(0,$.useRef)({designPlacements:Dt,rearrangeState:ot,blankCanvas:yn,wireframePurpose:lo});i_.current={designPlacements:Dt,rearrangeState:ot,blankCanvas:yn,wireframePurpose:lo};let qr=(0,$.useRef)({placements:Yr,rearrange:za}),ki=(0,$.useRef)(new Set),ir=(0,$.useRef)(new Set),Al=(0,$.useRef)(null),Ei=(0,$.useRef)(),s_=Ft&&fe&&!Da&&yn;(0,$.useEffect)(()=>{if(s_){lr(!1);let x=Im(()=>{lr(!0)});return()=>cancelAnimationFrame(x)}else lr(!1)},[s_]);let ud=(0,$.useRef)(new Map),dd=(0,$.useRef)([]),Vr=(0,$.useRef)(new Map),To=(0,$.useRef)(null),[el,kc]=(0,$.useState)(!1),[Ol,Ss]=(0,$.useState)([]),Ec=(0,$.useRef)(Ol);Ec.current=Ol;let[Cs,fd]=(0,$.useState)(null),Tc=(0,$.useRef)(null),tl=(0,$.useRef)(!1),l1=(0,$.useRef)([]),c_=(0,$.useRef)(0),Pm=(0,$.useRef)(null),Fm=(0,$.useRef)(null),a1=(0,$.useRef)(1),[_d,hd]=(0,$.useState)(!1),Ti=(0,$.useRef)(null),[Uo,sr]=(0,$.useState)([]),cr=(0,$.useRef)(!1),po=()=>{vc(!0)},u_=()=>{vc(!1)},md=()=>{_d||(Ti.current=cn(()=>hd(!0),850))},d_=()=>{Ti.current&&(clearTimeout(Ti.current),Ti.current=null),hd(!1),u_()};(0,$.useEffect)(()=>()=>{Ti.current&&clearTimeout(Ti.current)},[]);let[nn,Wm]=(0,$.useState)(()=>{try{let x=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...Ly,...x,annotationColorId:Jf.find(C=>C.id===x.annotationColorId)?x.annotationColorId:Ly.annotationColorId}}catch{return Ly}}),[ca,f_]=(0,$.useState)(!0),[Mi,Mc]=(0,$.useState)(!1),__=(0,$.useCallback)(x=>{Wm(C=>({...C,...x}))},[]),h_=(0,$.useCallback)(()=>{zn.current?.classList.add(de.disableTransitions),f_(x=>!x),Im(()=>{zn.current?.classList.remove(de.disableTransitions)})},[]),pd=!0,ua=pd&&nn.reactEnabled?Xk[nn.outputDetail]:"off",[Qn,Rc]=(0,$.useState)(d?null:mt??null),ur=(0,$.useRef)(!1),[fl,go]=(0,$.useState)(ue?"connecting":"disconnected"),[rn,Ac]=(0,$.useState)(null),[Dl,m_]=(0,$.useState)(!1),Xr=(0,$.useRef)(null),Gr=(0,$.useRef)(!1),yo=(0,$.useRef)(new Set),ks=(0,$.useRef)(new Map),bo=(0,$.useCallback)(x=>{yo.current.add(x),ml.current===x&&(ml.current=null)},[]),[vo,Qr]=(0,$.useState)(new Set),[Io,Pr]=(0,$.useState)(!1),[Mo,Fr]=(0,$.useState)(!1),[da,Es]=(0,$.useState)(!1),Wr=(0,$.useRef)(null),_l=(0,$.useRef)(null),Ri=(0,$.useRef)(null),hl=(0,$.useRef)(null),dr=(0,$.useRef)(!1),Ts=(0,$.useRef)(0),ml=(0,$.useRef)(null),xo=(0,$.useRef)(null),Oc=8,Dc=50,fr=(0,$.useRef)(null),Ms=(0,$.useRef)(null),Ai=(0,$.useRef)(null),p_=(0,$.useCallback)(()=>ad("main"),[]);(0,$.useEffect)(()=>{mo||vc(!1)},[mo]),(0,$.useLayoutEffect)(()=>{mo&&ye.current&&(ye.current=!1,zn.current?.querySelector("[data-agentation-settings-panel] button")?.focus())},[mo]);let Nc=fe&&Nn&&!Ft;(0,$.useEffect)(()=>{if(Nc)ie(!1),dt(!0),yo.current.clear();else if(We){ie(!0);let x=cn(()=>{dt(!1),ie(!1)},250);return()=>clearTimeout(x)}},[Nc]),(0,$.useEffect)(()=>{bc(!0),yc(window.scrollY);let x=ys(r);Ot(x.filter(Ff)),Qw||(Mc(!0),Qw=!0,cn(()=>Mc(!1),750));try{let C=localStorage.getItem("feedback-toolbar-theme");C!==null&&f_(C==="dark")}catch{}try{let C=localStorage.getItem("feedback-toolbar-position");if(C){let T=JSON.parse(C);typeof T.x=="number"&&typeof T.y=="number"&&Ac(T)}}catch{}},[r]),(0,$.useEffect)(()=>{Jt&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(nn))},[nn,Jt]),(0,$.useEffect)(()=>{Jt&&localStorage.setItem("feedback-toolbar-theme",ca?"dark":"light")},[ca,Jt]);let zc=(0,$.useRef)(!1);(0,$.useEffect)(()=>{let x=zc.current;zc.current=Dl,x&&!Dl&&rn&&Jt&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(rn))},[Dl,rn,Jt]),(0,$.useEffect)(()=>{if(!ue||!Jt||ur.current)return;ur.current=!0,go("connecting");let x=window.location.href;pe(async()=>{try{let T=ek(r),I=mt||T,Q=!1;if(I)try{let X=ys(r),P=Ee(await Bw(ue,I));dd.current=P.annotations.filter(nt=>nt.kind==="placement"||nt.kind==="rearrange"),J.current&&(Rc(P.id),go("connected")),Ry(r,P.id),Q=!0;let be=ys(r).filter(Ff),Ze=new Set(P.annotations.map(nt=>nt.id)),lt=be.filter(nt=>!Ze.has(nt.id));if(lt.length>0){let tt=`${typeof window<"u"?window.location.origin:""}${r}`,pt=(await Promise.allSettled(lt.map(ft=>st(ue,P.id,{...ft,sessionId:P.id,url:tt})))).map((ft,yt)=>ft.status==="fulfilled"?ft.value:(console.warn("[Agentation] Failed to sync annotation:",ft.reason),lt[yt])),Pe=[...P.annotations,...pt];Oe(X,Pe,P.id)}else Oe(X,P.annotations,P.id)}catch(X){console.warn("[Agentation] Could not join session, creating new:",X),tk(r)}if(!Q){let X=await Ay(ue,x);Ry(r,X.id),J.current&&(Rc(X.id),go("connected"),vt?.(X.id));let P=d?new Map([[r,ys(r)]]):GC(),be=typeof window<"u"?window.location.origin:"",Ze=[];for(let[lt,nt]of P){let tt=nt.filter(Pe=>Ff(Pe)&&!Pe._syncedTo);if(tt.length===0)continue;let Ct=`${be}${lt}`,pt=lt===r;Ze.push((async()=>{try{let Pe=pt?X:await Ay(ue,Ct),yt=(await Promise.allSettled(tt.map(Kt=>st(ue,Pe.id,{...Kt,sessionId:Pe.id,url:Ct})))).map((Kt,bn)=>Kt.status==="fulfilled"?Kt.value:(console.warn("[Agentation] Failed to sync annotation:",Kt.reason),tt[bn]));Oe(tt,yt,Pe.id,lt)}catch(Pe){console.warn(`[Agentation] Failed to sync annotations for ${lt}:`,Pe)}})())}await Promise.allSettled(Ze)}}catch(T){J.current&&go("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",T)}})},[ue,mt,Jt,vt,r,pe]),(0,$.useEffect)(()=>{if(!ue||!Jt)return;let x=async()=>{try{(await fetch(`${ue}/health`)).ok?go("connected"):go("disconnected")}catch{go("disconnected")}};x();let C=Zw(x,1e4);return()=>clearInterval(C)},[ue,Jt]);let Nl=(0,$.useRef)(ge),gd=(0,$.useRef)(!1);(0,$.useLayoutEffect)(()=>{Nl.current=ge,gd.current=ge.length>0||Dt.length>0||(ot?.sections.length??0)>0},[ge,Dt.length,ot?.sections.length]);let Rs=(0,$.useCallback)(x=>{let C=xt.current.has(x);if(C&&($t.current.delete(x),$t.current.size))return;let T=C?new Set(xt.current):new Set([x]);C&&(xt.current.clear(),U());for(let X of T)ks.current.delete(X),yo.current.delete(X);Ot(X=>X.filter(P=>!T.has(P.id))),Qr(X=>new Set([...X].filter(P=>!T.has(P))));let I=C?[]:Nl.current.filter(X=>X.kind!=="placement"&&X.kind!=="rearrange"),Q=I.findIndex(X=>X.id===x);Q>=0&&Q<I.length-1&&(Ht(X=>X===null?Q:Math.min(X,Q)),jt.current&&clearTimeout(jt.current),jt.current=cn(()=>Ht(null),200))},[U]);(0,$.useEffect)(()=>!ue||!Jt||!Qn?void 0:Ok(ue,Qn,()=>gd.current,T=>{let{id:I,kind:Q}=T;if(Q==="placement"){for(let[X,P]of ud.current)if(P===I){To.current?.placements.forget(X),Jo(be=>be.filter(Ze=>Ze.id!==X));break}}else if(Q==="rearrange"){for(let[X,P]of Vr.current)if(P===I){To.current?.rearrange.forget(X),sa(be=>{if(!be)return null;let Ze=be.sections.filter(lt=>lt.id!==X);return Ze.length===0?null:{...be,sections:Ze}});break}}else{if(!Nl.current.some(X=>X.id===I))return;Qr(X=>new Set(X).add(I))}}),[ue,Jt,Qn]),(0,$.useEffect)(()=>{if(!ue||!Jt)return;let x=xo.current==="disconnected",C=fl==="connected";xo.current=fl,x&&C&&pe(async()=>{try{let I=ys(r).filter(Ff);if(I.length===0)return;let X=`${typeof window<"u"?window.location.origin:""}${r}`,P=Qn,be=[];if(P)try{be=Ee(await Bw(ue,P)).annotations}catch{P=null}P||(P=(await Ay(ue,X)).id,J.current&&Rc(P),Ry(r,P));let Ze=new Set(be.map(nt=>nt.id)),lt=I.filter(nt=>!Ze.has(nt.id));if(lt.length>0){let tt=(await Promise.allSettled(lt.map(pt=>st(ue,P,{...pt,sessionId:P,url:X})))).map((pt,Pe)=>pt.status==="fulfilled"?pt.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",pt.reason),lt[Pe])),Ct=[...be,...tt];Oe(I,Ct,P)}}catch(I){console.warn("[Agentation] Failed to sync on reconnect:",I)}})},[fl,ue,Jt,Qn,r,pe]);let Lc=(0,$.useCallback)(()=>{jn||($o(!0),Ir(!1),Be(!1),cn(()=>{ok(!0),In(!0),$o(!1)},400))},[jn]);(0,$.useEffect)(()=>{if(!H||!Jt||!L||L.length===0||ge.length>0)return;let x=[];return x.push(cn(()=>{Be(!0)},R-200)),L.forEach((C,T)=>{let I=R+T*300;x.push(cn(()=>{let Q=document.querySelector(C.selector);if(!Q)return;let X=_o(Q),{name:P,path:be}=Fu(Q),Ze={id:`demo-${Date.now()}-${T}`,x:(X.left+X.width/2)/window.innerWidth*100,y:X.top+X.height/2+window.scrollY,comment:C.comment,element:P,elementPath:be,timestamp:Date.now(),selectedText:C.selectedText,boundingBox:{x:X.left,y:X.top+window.scrollY,width:X.width,height:X.height},nearbyText:Vf(Q),cssClasses:Xf(Q)};Ot(lt=>[...lt,Ze])},I))}),()=>{x.forEach(clearTimeout)}},[H,Jt,L,R]),(0,$.useEffect)(()=>{let x=()=>{yc(window.scrollY),Qe(C=>C+1),od(!0),Ai.current&&clearTimeout(Ai.current),Ai.current=cn(()=>{od(!1)},150)};return Me.addEventListener("scroll",x,{passive:!0,capture:!0}),()=>{Me.removeEventListener("scroll",x,!0),Ai.current&&clearTimeout(Ai.current)}},[Me]),(0,$.useEffect)(()=>{if(!Jt)return;let x=ge.filter(C=>!vo.has(C.id));x.length>0?Qn?My(r,x,Qn):w4(r,x):localStorage.removeItem(Ky(r))},[ge,r,Jt,Qn,je,vo]),(0,$.useEffect)(()=>{if(Jt&&!wc.current){wc.current=!0;let x=QC(r);x.length>0&&Jo(x)}},[Jt,r]),(0,$.useEffect)(()=>{if(Jt&&wc.current&&!yn){let x=Dt.filter(C=>!Yr.includes(C));x.length>0?PC(r,x):FC(r)}},[Dt,r,Jt,yn,Yr]),(0,$.useEffect)(()=>{if(Jt&&!Sc.current){Sc.current=!0;let x=WC(r);if(x){let C={...x,sections:x.sections.map(T=>({...T,currentRect:T.currentRect??{...T.originalRect}}))};sa(C)}}},[Jt,r]),(0,$.useEffect)(()=>{Jt&&Sc.current&&!yn&&(ot&&ot!==za?ZC(r,ot):JC(r))},[ot,r,Jt,yn,za]);let La=(0,$.useRef)(!1);(0,$.useEffect)(()=>{if(Jt&&!La.current){La.current=!0;let x=KC(r);x&&(Na.current={rearrange:x.rearrange,placements:x.placements||[]},x.purpose&&rr(x.purpose))}},[Jt,r]),(0,$.useEffect)(()=>{if(!Jt||!La.current||je)return;let x=Na.current;yn?(ot?.sections?.length??0)>0||Dt.length>0||lo?Lw(r,{rearrange:ot,placements:Dt,purpose:lo}):Dm(r):(x.rearrange?.sections?.length??0)>0||x.placements.length>0||lo?Lw(r,{rearrange:x.rearrange,placements:x.placements,purpose:lo}):Dm(r)},[ot,Dt,lo,yn,r,Jt,je]),(0,$.useEffect)(()=>{Ft&&!ot&&sa({sections:[],originalOrder:[],detectedAt:Date.now()})},[Ft,ot]),(0,$.useEffect)(()=>{if(!ue||!Qn)return;let x={create:T=>pe(()=>$w(ue,Qn,T)),update:(T,I)=>pe(()=>Oy(ue,T,I)),remove:T=>pe(()=>Nm(ue,T))};ud.current=new Map,Vr.current=new Map;let C={placements:qw(x,ud.current,dd.current.filter(T=>T.kind==="placement")),rearrange:qw(x,Vr.current,dd.current.filter(T=>T.kind==="rearrange"))};return To.current=C,()=>{C.placements.dispose(),C.rearrange.dispose(),To.current===C&&(To.current=null)}},[ue,Qn,r,pe]),(0,$.useEffect)(()=>{let x=window.location.pathname+window.location.search+window.location.hash;To.current?.placements.replace(Dt.filter(C=>!Yr.includes(C)).map(C=>({id:C.id,x:C.x/window.innerWidth*100,y:C.y,comment:`Place ${C.type} at (${Math.round(C.x)}, ${Math.round(C.y)}), ${C.width}\xD7${C.height}px${C.text?` \u2014 "${C.text}"`:""}`,element:`[design:${C.type}]`,elementPath:"[placement]",timestamp:C.timestamp,url:x,intent:"change",severity:"important",kind:"placement",placement:{componentType:C.type,width:C.width,height:C.height,scrollY:C.scrollY,text:C.text}})))},[Dt,ue,Qn,r,Yr]),(0,$.useEffect)(()=>{let x=To.current;if(!x)return;if(ot===za){x.rearrange.replace([]);return}let C=cn(()=>{let T=window.location.pathname+window.location.search+window.location.hash,I=[];for(let Q of ot?.sections??[]){let X=Q.originalRect,P=Q.currentRect,be=Math.abs(X.x-P.x)>1||Math.abs(X.y-P.y)>1||Math.abs(X.width-P.width)>1||Math.abs(X.height-P.height)>1;if(!be&&!Q.note)continue;let Ze=Q.note?` \u2014 "${Q.note}"`:"";I.push({id:Q.id,x:P.x/window.innerWidth*100,y:P.y,comment:be?`Move ${Q.label} section (${Q.tagName}) \u2014 from (${Math.round(X.x)},${Math.round(X.y)}) ${Math.round(X.width)}\xD7${Math.round(X.height)} to (${Math.round(P.x)},${Math.round(P.y)}) ${Math.round(P.width)}\xD7${Math.round(P.height)}${Ze}`:`Note on ${Q.label} section (${Q.tagName})${Ze}`,element:Q.selector,elementPath:"[rearrange]",timestamp:ot.detectedAt,url:T,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:Q.selector,label:Q.label,tagName:Q.tagName,originalRect:X,currentRect:P}})}x.rearrange.replace(I)},300);return()=>clearTimeout(C)},[ot,ue,Qn,r,za]);let As=(0,$.useCallback)(()=>{clearTimeout(Ei.current),xi(!1),xc(!0)},[]);(0,$.useEffect)(()=>()=>clearTimeout(Ei.current),[]);let Oi=(0,$.useCallback)(()=>{xi(!0),xc(!1),or(null),clearTimeout(Ei.current),Ei.current=cn(()=>{xi(!1)},300)},[]),Di=(0,$.useCallback)(()=>{let x=Po.current?.getRootNode();cl.current=!!x?.activeElement&&!!zn.current?.contains(x.activeElement),cl.current&&x?.activeElement?.blur(),Ir(!1),Ft&&(xi(!0),xc(!1),or(null),clearTimeout(Ei.current),Ei.current=cn(()=>{xi(!1)},300)),Be(!1)},[Ft]),nl=(0,$.useCallback)(()=>{Jn||(w8(),Zo(!0))},[Jn]),zl=(0,$.useCallback)(()=>{Jn&&(pw(),Zo(!1))},[Jn]),Bc=(0,$.useCallback)(()=>{Jn?zl():nl()},[Jn,nl,zl]),_r=(0,$.useCallback)((x=Uo)=>{let C=x.filter(P=>P.element.isConnected);if(C.length===0){sr([]);return}let T=C[0],I=T.element,Q=C.length>1,X=C.map(P=>_o(P.element));if(Q){let P={left:Math.min(...X.map(yt=>yt.left)),top:Math.min(...X.map(yt=>yt.top)),right:Math.max(...X.map(yt=>yt.right)),bottom:Math.max(...X.map(yt=>yt.bottom))},be=C.slice(0,5).map(yt=>yt.name).join(", "),Ze=C.length>5?` +${C.length-5} more`:"",lt=X.map(yt=>({x:yt.left,y:yt.top+window.scrollY,width:yt.width,height:yt.height})),tt=C[C.length-1].element,Ct=X[X.length-1],pt=Ct.left+Ct.width/2,Pe=Ct.top+Ct.height/2,ft=By(tt);Y({id:Date.now().toString(),x:pt/window.innerWidth*100,y:ft?Pe:Pe+window.scrollY,clientY:Pe,element:`${C.length} elements: ${be}${Ze}`,elementPath:"multi-select",boundingBox:{x:P.left,y:P.top+window.scrollY,width:P.right-P.left,height:P.bottom-P.top},isMultiSelect:!0,isFixed:ft,elementBoundingBoxes:lt,multiSelectElements:C.map(yt=>yt.element),targetElement:tt,fullPath:Zf(I),accessibility:Em(I),computedStyles:km(I),computedStylesObj:Cm(I),nearbyElements:Sm(I),cssClasses:Xf(I),nearbyText:Vf(I),sourceFile:$m(I),attributes:Wf(I,Le)})}else{let P=X[0],be=By(I);Y({id:Date.now().toString(),x:P.left/window.innerWidth*100,y:be?P.top:P.top+window.scrollY,clientY:P.top,element:T.name,elementPath:T.path,boundingBox:{x:P.left,y:be?P.top:P.top+window.scrollY,width:P.width,height:P.height},isFixed:be,fullPath:Zf(I),accessibility:Em(I),computedStyles:km(I),computedStylesObj:Cm(I),nearbyElements:Sm(I),cssClasses:Xf(I),nearbyText:Vf(I),reactComponents:T.reactComponents,targetElement:I,sourceFile:$m(I),attributes:Wf(I,Le)})}sr([]),kt(null)},[Uo,Le]);(0,$.useEffect)(()=>{fe||(Y(null),oo(null),ul(null),ia([]),kt(null),Ir(!1),sr([]),cr.current=!1,Jn&&zl())},[fe,Jn,zl]),(0,$.useEffect)(()=>()=>{pw()},[]),(0,$.useEffect)(()=>{if(!fe)return;let x=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),C=document.createElement("style");return C.id="agentation-cursor",C.textContent=`
      body { cursor: crosshair !important; }
      body :is(${x}) { cursor: text !important; }
    `,document.head.appendChild(C),()=>{let T=document.getElementById("agentation-cursor");T&&T.remove()}},[fe]),(0,$.useEffect)(()=>{if(Cs!==null&&fe)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Cs,fe]),(0,$.useEffect)(()=>{if(!fe||le||Ye||el||Ft)return;let x=null,C=(X,P,be)=>{let Ze=Hm(X,P),lt=be?bw(X,P):Ze;if(!lt||Qo(lt,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){kt(null);return}let{name:nt,elementName:tt,path:Ct,reactComponents:pt}=Bm(lt,ua,Le);kt({element:nt,elementName:tt,elementPath:Ct,rect:_o(lt),reactComponents:pt,isPiercing:be&&lt!==Ze}),Rt({x:X,y:P})},T=X=>{let P=X.composedPath()[0]||X.target;if(Qo(P,"[data-feedback-toolbar], [data-annotation-popup], [data-annotation-marker]")){x=null,kt(null);return}x={x:X.clientX,y:X.clientY},C(X.clientX,X.clientY,bs(X))},I=X=>{(X.key==="Meta"||X.key==="Control")&&x&&C(x.x,x.y,bs(X))},Q=()=>{x=null,kt(null)};return Me.addEventListener("mousemove",T),Me.addEventListener("keydown",I),Me.addEventListener("keyup",I),Me.addEventListener("mouseleave",Q),window.addEventListener("blur",Q),()=>{Me.removeEventListener("mousemove",T),Me.removeEventListener("keydown",I),Me.removeEventListener("keyup",I),Me.removeEventListener("mouseleave",Q),window.removeEventListener("blur",Q)}},[fe,le,Ye,el,Ft,ua,Le]);let Ni=(0,$.useCallback)((x,C)=>{if(Ye&&!Mo){Ms.current?.shake();return}if(le&&!Io){if(zn.current?.querySelector("[data-annotation-popup]:not([data-annotation-card]) textarea")?.value.trim()){fr.current?.shake();return}Pr(!0)}if(Zn.current=C??null,An.current=C?.matches(":focus-visible")??!1,Wo(!1),Fr(!1),oo(x),te(null),et(null),Ae([]),x.elementBoundingBoxes?.length){let T=[];for(let I of x.elementBoundingBoxes){let Q=I.x+I.width/2,X=I.y+I.height/2-window.scrollY,P=Tm(Q,X,I);P&&T.push(P)}ia(T),ul(null)}else if(x.boundingBox){let T=x.boundingBox,I=T.x+T.width/2,Q=x.isFixed?T.y+T.height/2:T.y+T.height/2-window.scrollY,X=Tm(I,Q,T);if(X){let P=_o(X),be=P.width/T.width,Ze=P.height/T.height;be<.5||Ze<.5?ul(null):ul(X)}else ul(null);ia([])}else ul(null),ia([])},[le,Io,Ye,Mo]);(0,$.useEffect)(()=>{if(!fe||el||Ft)return;let x=C=>{if(dr.current){dr.current=!1,C.preventDefault(),C.stopPropagation();return}let T=C.composedPath()[0]||C.target;if(Qo(T,"[data-feedback-toolbar]")||Qo(T,"[data-annotation-popup]")||Qo(T,"[data-annotation-marker]"))return;if(bs(C)&&!le&&!Ye){C.preventDefault(),C.stopPropagation(),cr.current=C.shiftKey;let yt=bw(C.clientX,C.clientY);if(!yt)return;let Kt=_o(yt),{name:bn,path:ro,reactComponents:bt}=Bm(yt,ua,Le),_t=Uo.findIndex(en=>en.element===yt);_t>=0?sr(en=>en.filter((Hn,wo)=>wo!==_t)):sr(en=>[...en,{element:yt,rect:Kt,name:bn,path:ro,reactComponents:bt??void 0}]);return}let I=Qo(T,"button, a, input, select, textarea, [role='button'], [onclick]");if(nn.blockInteractions&&(C.preventDefault(),C.stopPropagation()),le&&!Io){if(I&&!nn.blockInteractions)return;C.preventDefault(),fr.current?.shake();return}if(Ye&&!Mo){if(I&&!nn.blockInteractions)return;C.preventDefault(),Ms.current?.shake();return}C.preventDefault();let Q=Hm(C.clientX,C.clientY);if(!Q)return;let{name:X,path:P,reactComponents:be}=Bm(Q,ua,Le),Ze=_o(Q),lt=C.clientX/window.innerWidth*100,nt=By(Q),tt=nt?C.clientY:C.clientY+window.scrollY,Ct=Q.ownerDocument.defaultView?.getSelection(),pt;Ct&&Ct.toString().trim().length>0&&(pt=Ct.toString().trim().slice(0,500));let Pe=Cm(Q),ft=km(Q);Pr(!1),Y({id:Date.now().toString(),x:lt,y:tt,clientY:C.clientY,element:X,elementPath:P,selectedText:pt,boundingBox:{x:Ze.left,y:nt?Ze.top:Ze.top+window.scrollY,width:Ze.width,height:Ze.height},nearbyText:Vf(Q),cssClasses:Xf(Q),isFixed:nt,fullPath:Zf(Q),accessibility:Em(Q),computedStyles:ft,computedStylesObj:Pe,nearbyElements:Sm(Q),reactComponents:be??void 0,sourceFile:$m(Q),attributes:Wf(Q,Le),frame:k8(Q,C.clientX,C.clientY),targetElement:Q}),kt(null)};return Me.addEventListener("click",x,!0),()=>Me.removeEventListener("click",x,!0)},[fe,el,Ft,le,Io,Ye,Mo,nn.blockInteractions,ua,Le,Uo]),(0,$.useEffect)(()=>{if(!fe)return;let x=T=>{let I=(T.key==="Meta"||T.key==="Control")&&!bs(T),Q=T.key==="Shift"&&cr.current;(I||Q)&&!_l.current&&Uo.length>0&&_r()},C=()=>{cr.current=!1,sr([]),kt(null),Wr.current=null,_l.current=null,Es(!1),hl.current?.replaceChildren()};return Me.addEventListener("keyup",x),window.addEventListener("blur",C),()=>{Me.removeEventListener("keyup",x),window.removeEventListener("blur",C)}},[fe,Uo,_r]),(0,$.useEffect)(()=>{if(!fe||le||el||Ft)return;let x=C=>{if(C.button!==0)return;dr.current=!1;let T=C.composedPath()[0]||C.target;if(Qo(T,"[data-feedback-toolbar]")||Qo(T,"[data-annotation-marker]")||Qo(T,"[data-annotation-popup]"))return;let I=new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]);!bs(C)&&(I.has(T.tagName)||T.isContentEditable)||(C.preventDefault(),Wr.current={x:C.clientX,y:C.clientY})};return Me.addEventListener("mousedown",x),()=>Me.removeEventListener("mousedown",x)},[fe,le,el,Ft]),(0,$.useEffect)(()=>{if(!fe||le)return;let x=C=>{if(!Wr.current)return;let T=C.clientX-Wr.current.x,I=C.clientY-Wr.current.y,Q=T*T+I*I,X=Oc*Oc;if(!da&&Q>=X&&(_l.current=Wr.current,Es(!0),C.preventDefault()),(da||Q>=X)&&_l.current){if(Ri.current){let bt=Math.min(_l.current.x,C.clientX),_t=Math.min(_l.current.y,C.clientY),en=Math.abs(C.clientX-_l.current.x),Hn=Math.abs(C.clientY-_l.current.y);Ri.current.style.transform=`translate(${bt}px, ${_t}px)`,Ri.current.style.width=`${en}px`,Ri.current.style.height=`${Hn}px`}let P=Date.now();if(P-Ts.current<Dc)return;Ts.current=P;let be=_l.current.x,Ze=_l.current.y,lt=Math.min(be,C.clientX),nt=Math.min(Ze,C.clientY),tt=Math.max(be,C.clientX),Ct=Math.max(Ze,C.clientY),pt=(lt+tt)/2,Pe=(nt+Ct)/2,ft=new Set,yt=[[lt,nt],[tt,nt],[lt,Ct],[tt,Ct],[pt,Pe],[pt,nt],[pt,Ct],[lt,Pe],[tt,Pe]];for(let[bt,_t]of yt){let en=document.elementsFromPoint(bt,_t);for(let Hn of en)Hn instanceof HTMLElement&&ft.add(Hn)}let Kt=Me.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(let bt of Kt)if(bt instanceof HTMLElement){let _t=_o(bt),en=_t.left+_t.width/2,Hn=_t.top+_t.height/2,wo=en>=lt&&en<=tt&&Hn>=nt&&Hn<=Ct,Bl=Math.min(_t.right,tt)-Math.max(_t.left,lt),Bi=Math.min(_t.bottom,Ct)-Math.max(_t.top,nt),zs=Bl>0&&Bi>0?Bl*Bi:0,ln=_t.width*_t.height,ei=ln>0?zs/ln:0;(wo||ei>.5)&&ft.add(bt)}let bn=[],ro=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(let bt of ft){if(Qo(bt,"[data-feedback-toolbar]")||Qo(bt,"[data-annotation-marker]"))continue;let _t=_o(bt);if(!(_t.width>window.innerWidth*.8&&_t.height>window.innerHeight*.5)&&!(_t.width<10||_t.height<10)&&_t.left<tt&&_t.right>lt&&_t.top<Ct&&_t.bottom>nt){let en=bt.tagName,Hn=ro.has(en);if(!Hn&&(en==="DIV"||en==="SPAN")){let wo=bt.textContent&&bt.textContent.trim().length>0,Bl=bt.onclick!==null||bt.getAttribute("role")==="button"||bt.getAttribute("role")==="link"||bt.classList.contains("clickable")||bt.hasAttribute("data-clickable");(wo||Bl)&&!bt.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Hn=!0)}if(Hn){let wo=!1;for(let Bl of bn)if(Bl.left<=_t.left&&Bl.right>=_t.right&&Bl.top<=_t.top&&Bl.bottom>=_t.bottom){wo=!0;break}wo||bn.push(_t)}}}if(hl.current){let bt=hl.current;for(;bt.children.length>bn.length;)bt.removeChild(bt.lastChild);bn.forEach((_t,en)=>{let Hn=bt.children[en];Hn||(Hn=document.createElement("div"),Hn.className=de.selectedElementHighlight,bt.appendChild(Hn)),Hn.style.transform=`translate(${_t.left}px, ${_t.top}px)`,Hn.style.width=`${_t.width}px`,Hn.style.height=`${_t.height}px`})}}};return Me.addEventListener("mousemove",x,{passive:!0}),()=>Me.removeEventListener("mousemove",x)},[fe,le,da,Oc]),(0,$.useEffect)(()=>{if(!fe)return;let x=C=>{let T=da,I=_l.current;if(da&&I){dr.current=!0;let Q=Math.min(I.x,C.clientX),X=Math.min(I.y,C.clientY),P=Math.max(I.x,C.clientX),be=Math.max(I.y,C.clientY),Ze=[];Me.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Pe=>{if(!(Pe instanceof HTMLElement)||Qo(Pe,"[data-feedback-toolbar]")||Qo(Pe,"[data-annotation-marker]"))return;let ft=_o(Pe);ft.width>window.innerWidth*.8&&ft.height>window.innerHeight*.5||ft.width<10||ft.height<10||ft.left<P&&ft.right>Q&&ft.top<be&&ft.bottom>X&&Ze.push({element:Pe,rect:ft})});let nt=Ze.filter(({element:Pe})=>!Ze.some(({element:ft})=>ft!==Pe&&Pe.contains(ft))),tt=C.clientX/window.innerWidth*100,Ct=C.clientY+window.scrollY,pt=(bs(C)||Uo.length>0)&&!le&&!Ye;if(nt.length>0)if(pt){let Pe=[...Uo];for(let{element:ft,rect:yt}of nt){if(Pe.some(bt=>bt.element===ft))continue;let{name:Kt,path:bn,reactComponents:ro}=Bm(ft,ua,Le);Pe.push({element:ft,rect:yt,name:Kt,path:bn,reactComponents:ro??void 0})}cr.current=C.shiftKey,bs(C)?sr(Pe):_r(Pe)}else{let Pe=nt.reduce((bt,{rect:_t})=>({left:Math.min(bt.left,_t.left),top:Math.min(bt.top,_t.top),right:Math.max(bt.right,_t.right),bottom:Math.max(bt.bottom,_t.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),ft=nt.slice(0,5).map(({element:bt})=>Fu(bt).name).join(", "),yt=nt.length>5?` +${nt.length-5} more`:"",Kt=nt[0].element,bn=Cm(Kt),ro=km(Kt);Y({id:Date.now().toString(),x:tt,y:Ct,clientY:C.clientY,element:`${nt.length} elements: ${ft}${yt}`,elementPath:"multi-select",boundingBox:{x:Pe.left,y:Pe.top+window.scrollY,width:Pe.right-Pe.left,height:Pe.bottom-Pe.top},isMultiSelect:!0,fullPath:Zf(Kt),accessibility:Em(Kt),computedStyles:ro,computedStylesObj:bn,nearbyElements:Sm(Kt),cssClasses:Xf(Kt),nearbyText:Vf(Kt),sourceFile:$m(Kt),attributes:Wf(Kt,Le)})}else if(pt&&!bs(C))_r();else if(!pt){let Pe=Math.abs(P-Q),ft=Math.abs(be-X);Pe>20&&ft>20&&Y({id:Date.now().toString(),x:tt,y:Ct,clientY:C.clientY,element:"Area selection",elementPath:`region at (${Math.round(Q)}, ${Math.round(X)})`,boundingBox:{x:Q,y:X+window.scrollY,width:Pe,height:ft},isMultiSelect:!0})}kt(null)}else T&&(dr.current=!0);Wr.current=null,_l.current=null,Es(!1),hl.current&&(hl.current.innerHTML="")};return Me.addEventListener("mouseup",x),()=>Me.removeEventListener("mouseup",x)},[fe,da,le,Ye,ua,Le,Uo,_r]);let Pl=(0,$.useCallback)(async(x,C,T)=>{let I=nn.webhookUrl||ke;if(!I||!nn.webhooksEnabled&&!T)return!1;try{return(await fetch(I,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:x,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...C})})).ok}catch(Q){return console.warn("[Agentation] Webhook failed:",Q),!1}},[ke,nn.webhookUrl,nn.webhooksEnabled]),g_=(0,$.useCallback)(x=>{if(!le||le.isSubmitted)return;let C={id:le.id,x:le.x,y:le.y,comment:x,element:le.element,elementPath:le.elementPath,timestamp:Date.now(),selectedText:le.selectedText,boundingBox:le.boundingBox,nearbyText:le.nearbyText,cssClasses:le.cssClasses,isMultiSelect:le.isMultiSelect,isFixed:le.isFixed,fullPath:le.fullPath,accessibility:le.accessibility,computedStyles:le.computedStyles,nearbyElements:le.nearbyElements,reactComponents:le.reactComponents,sourceFile:le.sourceFile,attributes:le.attributes,frame:le.frame,elementBoundingBoxes:le.elementBoundingBoxes,...ue&&Qn?{sessionId:Qn,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};Ot(T=>[...T,C]),Y({...le,isSubmitted:!0}),ml.current=C.id,z?.(C),Pl("annotation.add",{annotation:C}),Pr(!0),window.getSelection()?.removeAllRanges(),ue&&Qn&&pe(async()=>{let T=await st(ue,Qn,C);if(d){let I=ys(r);My(r,I.map(Q=>Q.id===C.id?{...Q,id:T.id}:Q),Qn)}!J.current||Ue.current.has(C.id)||T.id!==C.id&&(ks.current.set(T.id,C.id),ml.current===C.id&&(ml.current=T.id),Ot(I=>I.map(Q=>Q.id===C.id?{...Q,id:T.id}:Q)),yo.current.delete(C.id)&&yo.current.add(T.id))}).catch(T=>{console.warn("[Agentation] Failed to sync annotation:",T)})},[le,z,Pl,ue,Qn,pe,r,d]),fa=(0,$.useCallback)(()=>{Pr(!0)},[]),Ba=(0,$.useCallback)(()=>{Y(null),Pr(!1)},[]),$c=(0,$.useCallback)(x=>{if(Ue.current.has(x))return;Ue.current.add(x);let C=ge.find(T=>T.id===x);Ye?.id===x&&(Wo(!1),Fr(!0)),Qr(T=>new Set(T).add(x)),C&&(S?.(C),Pl("annotation.delete",{annotation:C})),ue&&pe(()=>Nm(ue,He.current.get(x)??x)).catch(T=>{console.warn("[Agentation] Failed to delete annotation from server:",T)})},[ge,Ye,S,Pl,ue,pe]),Zr=(0,$.useCallback)(x=>{if(!x){te(null),et(null),Ae([]);return}if(te(x.id),x.elementBoundingBoxes?.length){let C=[];for(let T of x.elementBoundingBoxes){let I=T.x+T.width/2,Q=T.y+T.height/2-window.scrollY,X=Tm(I,Q,T);X&&C.push(X)}Ae(C),et(null)}else if(x.boundingBox){let C=x.boundingBox,T=C.x+C.width/2,I=x.isFixed?C.y+C.height/2:C.y+C.height/2-window.scrollY,Q=Tm(T,I,C);if(Q){let X=_o(Q),P=X.width/C.width,be=X.height/C.height;P<.5||be<.5?et(null):et(Q)}else et(null);Ae([])}else et(null),Ae([])},[]),hr=(0,$.useCallback)(x=>{if(!Ye)return;let C={...Ye,comment:x};oo(C),Ot(T=>T.map(I=>I.id===Ye.id?C:I)),V?.(C),Pl("annotation.update",{annotation:C}),ue&&pe(()=>Oy(ue,He.current.get(Ye.id)??Ye.id,{comment:x})).catch(T=>{console.warn("[Agentation] Failed to update annotation on server:",T)}),Wo(An.current||!!Zn.current?.matches(":hover")),Fr(!0)},[Ye,V,Pl,ue,pe]),y_=(0,$.useCallback)(()=>{Wo(An.current||!!Zn.current?.matches(":hover")),Fr(!0)},[]),Hc=(0,$.useCallback)(()=>{Fo&&Ye&&!le&&te(Ye.id),oo(null),ul(null),ia([]),Fr(!1)},[Fo,Ye,le]),$a=(0,$.useCallback)((x,C)=>{if(!x.length&&!C)return;rt(!0);let T={placements:[...qr.current.placements,...x],rearrange:C??qr.current.rearrange};qr.current=T,Cc(T.placements),Ci(T.rearrange),clearTimeout(p.current),p.current=cn(()=>{Jo(I=>I.filter(Q=>!T.placements.includes(Q))),sa(I=>I===T.rearrange?null:I),qr.current={placements:[],rearrange:null},Cc([]),Ci(null),p.current=void 0,U()},200)},[U]),pl=(0,$.useCallback)(()=>{if(!J.current)return;let x=new Map(Nl.current.map(be=>[be.id,be])),C=[];for(let be of ge){let Ze=x.get(He.current.get(be.id)??be.id)??x.get(be.id);Ze&&Ze.comment===be.comment&&!Ue.current.has(Ze.id)&&!C.includes(Ze)&&C.push(Ze)}let T=C.length,I=i_.current,Q=Dt.filter(be=>I.designPlacements.includes(be)&&!qr.current.placements.includes(be)),X=ot===I.rearrangeState&&ot!==qr.current.rearrange?ot:null,P=Ol.filter(be=>Ec.current.includes(be));if(!(T===0&&P.length===0&&Q.length===0&&!X)){for(let be of C)Ue.current.add(be.id),xt.current.add(be.id),$t.current.add(be.id);if(Qr(be=>new Set([...be,...C.map(Ze=>Ze.id)])),B?.(C),Pl("annotations.clear",{annotations:C}),ue&&Promise.all(C.map(be=>pe(()=>Nm(ue,He.current.get(be.id)??be.id)).catch(Ze=>{console.warn("[Agentation] Failed to delete annotation from server:",Ze)}))),rt(!0),Ss(be=>be.filter(Ze=>!P.includes(Ze))),P.length>0&&P.length===Ec.current.length){let be=Tc.current;be?.getContext("2d")?.clearRect(0,0,be.width,be.height)}$a(Q,X),yn===I.blankCanvas&&lo===I.wireframePurpose&&Dt===I.designPlacements&&ot===I.rearrangeState&&(yn&&rd(!1),lo&&rr(""),Na.current={rearrange:null,placements:[]},Dm(r)),U()}},[r,ge,Ol,Dt,ot,yn,lo,B,Pl,ue,pe,U,$a]),Os=(0,$.useCallback)(async()=>{let x=oe.start(),C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:r,T=Ft&&yn,I;if(T){if(Dt.length===0&&!ot&&!lo)return;I=f?Um(C,f):""}else{if(I=Iw(ge,C,nn.outputDetail,{appName:f}),!I&&Ol.length===0&&Dt.length===0&&!ot)return;I||(I=Um(C,f))}if(!T&&Ol.length>0){let X=new Set;for(let lt of ge)lt.drawingIndex!=null&&X.add(lt.drawingIndex);let P=Tc.current;P&&(P.style.visibility="hidden");let be=[],Ze=window.scrollY;for(let lt=0;lt<Ol.length;lt++){if(X.has(lt))continue;let nt=Ol[lt];if(nt.points.length<2)continue;let tt=nt.fixed?nt.points:nt.points.map(vn=>({x:vn.x,y:vn.y-Ze})),Ct=1/0,pt=1/0,Pe=-1/0,ft=-1/0;for(let vn of tt)Ct=Math.min(Ct,vn.x),pt=Math.min(pt,vn.y),Pe=Math.max(Pe,vn.x),ft=Math.max(ft,vn.y);let yt=Pe-Ct,Kt=ft-pt,bn=Math.hypot(yt,Kt),ro=tt[0],bt=tt[tt.length-1],_t=Math.hypot(bt.x-ro.x,bt.y-ro.y),en,Hn=_t<bn*.35,wo=yt/Math.max(Kt,1);if(Hn&&bn>20){let vn=Math.max(yt,Kt)*.15,Ya=0;for(let pa of tt){let x_=pa.x-Ct<vn,Ic=Pe-pa.x<vn,w_=pa.y-pt<vn,jc=ft-pa.y<vn;(x_||Ic)&&(w_||jc)&&Ya++}en=Ya>tt.length*.15?"box":"circle"}else wo>3&&Kt<40?en="underline":_t>bn*.5?en="arrow":en="drawing";let Bl=Math.min(10,tt.length),Bi=Math.max(1,Math.floor(tt.length/Bl)),zs=new Set,ln=[],ei=[ro];for(let vn=Bi;vn<tt.length-1;vn+=Bi)ei.push(tt[vn]);ei.push(bt);for(let vn of ei){let Ya=Hm(vn.x,vn.y);if(!Ya||zs.has(Ya)||Qo(Ya,"[data-feedback-toolbar]"))continue;zs.add(Ya);let{name:pa}=Fu(Ya);ln.includes(pa)||ln.push(pa)}let ti=`${Math.round(Ct)},${Math.round(pt)} \u2192 ${Math.round(Pe)},${Math.round(ft)}`,ja;(en==="circle"||en==="box")&&ln.length>0?ja=`${en==="box"?"Boxed":"Circled"} **${ln[0]}**${ln.length>1?` (and ${ln.slice(1).join(", ")})`:""} (region: ${ti})`:en==="underline"&&ln.length>0?ja=`Underlined **${ln[0]}** (${ti})`:en==="arrow"&&ln.length>=2?ja=`Arrow from **${ln[0]}** to **${ln[ln.length-1]}** (${Math.round(ro.x)},${Math.round(ro.y)} \u2192 ${Math.round(bt.x)},${Math.round(bt.y)})`:ln.length>0?ja=`${en==="arrow"?"Arrow":"Drawing"} near **${ln.join("**, **")}** (region: ${ti})`:ja=`Drawing at ${ti}`,be.push(ja)}P&&(P.style.visibility=""),be.length>0&&(I+=`
**Drawings:**
`,be.forEach((lt,nt)=>{I+=`${nt+1}. ${lt}
`}))}if((Dt.length>0||T&&lo)&&(I+=`
`+Nw(Dt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:yn,wireframePurpose:lo||void 0},nn.outputDetail)),ot){let X=zw(ot,nn.outputDetail,{width:window.innerWidth,height:window.innerHeight});X&&(I+=`
`+X)}if(I=jw(ge,I,v),!I){ce(!1);return}let Q=!G||await Rk(I);ne?.(I),oe.isCurrent(x)&&(ce(Q),Q&&(oe.schedule(x,()=>ce(!1),2e3),nn.autoClearAfterCopy&&oe.schedule(x,pl,500)))},[ge,Ol,Dt,ot,yn,Ft,wi,lo,r,nn.outputDetail,ua,Le,nn.autoClearAfterCopy,pl,oe,G,v,f,ne]),Jr=Pw(nn.webhookUrl)||Pw(ke||""),Ll=ze!=null||Jr&&!nn.webhooksEnabled,Kr=fe?Ll?337:297:44,_a=(0,$.useCallback)(async()=>{let x=Ie.start(),C=typeof window<"u"?window.location.href:r,T=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:r,I=Iw(ge,T,nn.outputDetail,{appName:f});if(!I&&Dt.length===0&&!ot)return;if(I||(I=Um(T,f)),Dt.length>0&&(I+=`
`+Nw(Dt,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:yn,wireframePurpose:lo||void 0},nn.outputDetail)),ot){let be=zw(ot,nn.outputDetail,{width:window.innerWidth,height:window.innerHeight});be&&(I+=`
`+be)}me("sending");let Q=!0;try{await ze?.(I,ge)}catch(be){console.warn("[Agentation] Submit callback failed:",be),Q=!1}if(!Ie.isCurrent(x))return;let X=Jr?await Pl("submit",{output:I,annotations:ge,url:C},!0):!0,P=Q&&X&&Ll;Ie.isCurrent(x)&&(me(P?"sent":"failed"),Ie.schedule(x,()=>me("idle"),2500),P&&nn.autoClearAfterCopy&&Ie.schedule(x,pl,500))},[ze,f,Pl,ge,Dt,ot,yn,wi,r,nn.outputDetail,ua,Le,nn.autoClearAfterCopy,pl,Jr,Ll,Ie]);(0,$.useEffect)(()=>{let C=(X=!1)=>{Xr.current?.dragging&&(Gr.current=X,m_(!1)),Xr.current=null},T=X=>{let P=Xr.current;if(!P)return;if((X.buttons&1)===0){C();return}let be=X.clientX-P.x,Ze=X.clientY-P.y,lt=Math.sqrt(be*be+Ze*Ze);if(!P.dragging&&lt>10&&(P.dragging=!0,m_(!0)),P.dragging){let nt=P.toolbarX+be,tt=P.toolbarY+Ze,Ct=20,pt=337,Pe=44,yt=pt-Kr,Kt=Ct-yt,bn=window.innerWidth-Ct-pt;nt=Math.max(Kt,Math.min(bn,nt)),tt=Math.max(Ct,Math.min(window.innerHeight-Pe-Ct,tt)),Ac({x:nt,y:tt})}},I=()=>C(!0),Q=()=>C();return Me.addEventListener("mousemove",T),Me.addEventListener("mouseup",I,!0),window.addEventListener("blur",Q),()=>{Me.removeEventListener("mousemove",T),Me.removeEventListener("mouseup",I,!0),window.removeEventListener("blur",Q)}},[Kr]);let Ha=(0,$.useCallback)(x=>{if(Gr.current=!1,Xr.current=null,x.button!==0||x.target.closest("button")&&(x.target.closest("button")!==Po.current||fe)||x.target.closest("[data-agentation-settings-panel]"))return;let C=x.currentTarget.parentElement;if(!C)return;let T=_o(C);Xr.current={x:x.clientX,y:x.clientY,toolbarX:T.left,toolbarY:T.top,dragging:!1}},[fe]);(0,$.useLayoutEffect)(()=>{if(!rn)return;let x=()=>{let Q=rn.x,X=rn.y,Ze=20-(337-Kr),lt=window.innerWidth-20-337;Q=Math.max(Ze,Math.min(lt,Q)),X=Math.max(20,Math.min(window.innerHeight-44-20,X)),(Q!==rn.x||X!==rn.y)&&Ac({x:Q,y:X})};return x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)},[rn,Kr]),(0,$.useEffect)(()=>{if(!h)return;let x=T=>{if(T.defaultPrevented||T.isComposing||T.altKey)return;let I=T.composedPath()[0]||T.target,Q=I.tagName==="INPUT"||I.tagName==="TEXTAREA"||I.tagName==="SELECT"||I.isContentEditable;if(T.key==="Escape"){if(j&&!le&&!Ye&&(fe||mo||Ft||el||Uo.length)&&(T.preventDefault(),T.stopPropagation()),mo){T.preventDefault(),Ir(!1),Ln.current?.focus();return}if(Ft){jr?or(null):Oi();return}if(el){kc(!1);return}if(Uo.length>0){sr([]);return}le||Ye||fe&&(po(),Di())}if((T.metaKey||T.ctrlKey)&&T.shiftKey&&(T.key==="f"||T.key==="F")){T.preventDefault(),po(),fe?Di():(Po.current?.blur(),ho.current=!0,Be(!0));return}!fe||Q||T.metaKey||T.ctrlKey||T.repeat||((T.key==="p"||T.key==="P")&&(T.preventDefault(),po(),Bc()),(T.key==="l"||T.key==="L")&&(T.preventDefault(),po(),el&&kc(!1),mo&&Ir(!1),le&&fa(),Ft?Oi():As()),(T.key==="h"||T.key==="H")&&ge.length>0&&(T.preventDefault(),po(),Cn(X=>!X)),(T.key==="c"||T.key==="C")&&(ge.length>0||Dt.length>0||ot)&&(T.preventDefault(),po(),Os()),(T.key==="x"||T.key==="X")&&(ge.length>0||Dt.length>0||ot)&&(T.preventDefault(),po(),pl(),Dt.length>0&&Jo([]),ot&&sa(null)),(T.key==="s"||T.key==="S")&&ge.length>0&&Ll&&De==="idle"&&(T.preventDefault(),po(),_a()))},C=!!j;return Me.addEventListener("keydown",x,C),()=>Me.removeEventListener("keydown",x,C)},[h,j,Ye,fe,el,Ft,jr,Dt,ot,le,ge.length,Ll,De,_a,Bc,Os,pl,Uo,mo,Di,As,Oi]);let mr=ge.length>0,zi=E8(),ha=ge.filter(x=>x.kind!=="placement"&&x.kind!=="rearrange"),Ds=ha.flatMap((x,C)=>{let T=zi(x);return T?[{annotation:T,index:C}]:[]}),pr=le&&!le.isSubmitted?zi({...le,comment:"",timestamp:0}):null,kn=[...We?Ds.map(x=>({...x,pending:!1})):[],...pr?[{annotation:pr,index:ha.length,pending:!0}]:[]];(0,$.useEffect)(()=>{let x=new Set(We&&!Pt?Ds.map(({annotation:C})=>C.id):[]);ml.current&&!x.has(ml.current)&&(ml.current=null);for(let C of vo)x.has(C)||Rs(C)}),(0,$.useEffect)(()=>{Ye&&vo.has(Ye.id)&&(Wo(!1),Fr(!0))},[Ye,vo]);let Ns=(0,$.useCallback)(x=>{!Te&&x.id!==ml.current&&Zr(x)},[Te,Zr]),yd=(0,$.useCallback)(x=>{ae===x&&Zr(null)},[ae,Zr]),Uc=(0,$.useCallback)((x,C)=>{if(Ye&&!Mo){Ms.current?.shake();return}Io&&Ba(),nn.markerClickBehavior==="delete"?$c(x.id):Ni(x,C)},[nn.markerClickBehavior,$c,Ni,Io,Ba,Ye,Mo]),ao=Ye??(Nc&&!le&&!je?ge.find(x=>x.id===ae&&!vo.has(x.id)):null),Li=Jn?"Resume animations":"Pause animations",bd=Ft?"Exit layout mode":"Layout mode",b_=Nn?"Hide markers":"Show markers",v_=v!=="markdown"&&!jw(ge,"",v),ma=typeof v=="object"?`Copy ${v.attribute}`:v==="source"?"Copy source paths":v==="classes"?"Copy classes":Ft&&yn?"Copy layout":"Copy feedback",Ia=fe?0:-1;return!Jt||Pt?null:(0,we.jsxs)(V8,{host:"agentation-toolbar",className:it,children:[(0,we.jsxs)("style",{"data-agentation-styles":"toolbar",children:[Vk,Gk]}),(0,we.jsxs)("div",{ref:zn,className:de.positionContext,style:{display:"contents"},"data-agentation-theme":ca?"dark":"light","data-agentation-accent":nn.annotationColorId,"data-agentation-root":"",children:[(0,we.jsx)("div",{className:de.toolbar,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,"data-dragging":Dl||void 0,style:rn?{left:rn.x,top:rn.y,right:"auto",bottom:"auto"}:void 0,children:(0,we.jsxs)("div",{className:`${de.toolbarContainer} ${fe?de.expanded:de.collapsed} ${Mi?de.entrance:""} ${jn?de.hiding:""} ${Ll?de.serverConnected:""}`,onMouseDown:Ha,children:[(0,we.jsxs)("div",{className:`${de.controlsContent} ${fe?de.visible:de.hidden} ${rn&&rn.y<100?de.tooltipBelow:""} ${dl||mo?de.tooltipsHidden:""} ${_d?de.tooltipsInSession:""}`,ref:x=>{Ho.current=x,x?.toggleAttribute("inert",!fe)},role:"group","aria-label":"Feedback controls","aria-hidden":!fe,onMouseEnter:md,onMouseLeave:d_,children:[(0,we.jsxs)("div",{className:`${de.buttonWrapper} ${rn&&rn.x<120?de.buttonWrapperAlignLeft:""}`,children:[(0,we.jsx)("button",{className:de.controlButton,onClick:x=>{x.stopPropagation(),po(),Bc()},"data-active":Jn,"aria-label":Li,"aria-pressed":Jn,tabIndex:Ia,children:(0,we.jsx)(W8,{size:24,isPaused:Jn})}),(0,we.jsxs)("span",{className:de.buttonTooltip,children:[Li,h&&(0,we.jsx)("span",{className:de.shortcut,children:"P"})]})]}),(0,we.jsxs)("div",{className:de.buttonWrapper,children:[(0,we.jsx)("button",{className:`${de.controlButton} ${ca?"":de.light}`,onClick:x=>{x.stopPropagation(),po(),el&&kc(!1),mo&&Ir(!1),le&&fa(),Ft?Oi():As()},"data-active":Ft,"aria-label":bd,"aria-pressed":Ft,tabIndex:Ia,style:Ft&&yn?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:(0,we.jsx)(l7,{size:21})}),(0,we.jsxs)("span",{className:de.buttonTooltip,children:[bd,h&&(0,we.jsx)("span",{className:de.shortcut,children:"L"})]})]}),(0,we.jsxs)("div",{className:de.buttonWrapper,children:[(0,we.jsx)("button",{className:de.controlButton,onClick:x=>{x.stopPropagation(),po(),Cn(!Nn)},disabled:!mr||Ft,"aria-label":b_,tabIndex:Ia,children:(0,we.jsx)(F8,{size:24,isOpen:Nn})}),(0,we.jsxs)("span",{className:de.buttonTooltip,children:[b_,h&&(0,we.jsx)("span",{className:de.shortcut,children:"H"})]})]}),(0,we.jsxs)("div",{className:de.buttonWrapper,children:[(0,we.jsx)("button",{className:`${de.controlButton} ${F?de.statusShowing:""}`,onClick:x=>{x.stopPropagation(),po(),Os()},disabled:v_||(Ft&&yn?Dt.length===0&&!ot?.sections?.length:!mr&&Ol.length===0&&Dt.length===0&&!ot?.sections?.length),"data-active":F,"aria-label":ma,tabIndex:Ia,children:(0,we.jsx)(Q8,{size:24,copied:F,tint:Ft&&yn&&(Dt.length>0||ot?.sections?.length)?"#f97316":void 0})}),(0,we.jsxs)("span",{className:de.buttonTooltip,children:[v_?"No matching metadata":ma,h&&(0,we.jsx)("span",{className:de.shortcut,children:"C"})]})]}),(0,we.jsxs)("div",{className:`${de.buttonWrapper} ${de.sendButtonWrapper} ${fe&&Ll?de.sendButtonVisible:""}`,children:[(0,we.jsxs)("button",{className:`${de.controlButton} ${De==="sent"||De==="failed"?de.statusShowing:""}`,onClick:x=>{x.stopPropagation(),po(),_a()},disabled:!mr||!Ll||De==="sending","data-no-hover":De==="sent"||De==="failed",tabIndex:fe&&Ll?0:-1,"aria-label":"Send Annotations","aria-hidden":!Ll,children:[(0,we.jsx)(P8,{size:24,state:De}),mr&&De==="idle"&&(0,we.jsx)("span",{className:de.buttonBadge,children:ge.length})]}),(0,we.jsxs)("span",{className:de.buttonTooltip,children:["Send Annotations",h&&(0,we.jsx)("span",{className:de.shortcut,children:"S"})]})]}),(0,we.jsxs)("div",{className:de.buttonWrapper,children:[(0,we.jsx)("button",{className:de.controlButton,onClick:x=>{x.stopPropagation(),po(),pl()},disabled:!mr&&Ol.length===0&&Dt.length===0&&!ot?.sections?.length,"data-danger":!0,"aria-label":"Clear all",tabIndex:Ia,children:(0,we.jsx)(J8,{size:24})}),(0,we.jsxs)("span",{className:de.buttonTooltip,children:["Clear all",h&&(0,we.jsx)("span",{className:de.shortcut,children:"X"})]})]}),(0,we.jsxs)("div",{className:de.buttonWrapper,children:[(0,we.jsx)("button",{ref:Ln,"aria-label":"Settings","aria-expanded":mo,tabIndex:Ia,className:de.controlButton,onClick:x=>{x.stopPropagation(),po(),Ft&&Oi(),ye.current=!mo&&x.detail===0,Ir(!mo)},children:(0,we.jsx)(Z8,{size:24})}),ue&&fl!=="disconnected"&&(0,we.jsx)("span",{className:`${de.mcpIndicator} ${de[fl]} ${mo?de.hidden:""}`,title:fl==="connected"?"MCP Connected":"MCP Connecting..."}),(0,we.jsx)("span",{className:de.buttonTooltip,children:"Settings"})]}),(0,we.jsx)("div",{className:de.divider}),(0,we.jsx)("div",{className:de.togglePlaceholder,"aria-hidden":"true"})]}),(0,we.jsxs)("div",{className:`${de.buttonWrapper} ${de.toggleWrapper} ${rn&&rn.y<100?de.tooltipBelow:""} ${!fe||dl||mo?de.tooltipsHidden:""} ${_d?de.tooltipsInSession:""} ${rn&&typeof window<"u"&&rn.x>window.innerWidth-120?de.buttonWrapperAlignRight:""}`,onMouseEnter:md,onMouseLeave:d_,children:[(0,we.jsx)("button",{ref:Po,type:"button",className:`${de.toggleContent} ${fe?de.expandedToggle:""}`,"aria-label":fe?"Exit":"Start feedback mode","aria-expanded":fe,"aria-keyshortcuts":h?"Meta+Shift+F Control+Shift+F":void 0,title:fe?void 0:h?"Start feedback mode (\u2318\u21E7F / Ctrl+Shift+F)":"Start feedback mode",onClick:x=>{if(Gr.current){Gr.current=!1,x.preventDefault();return}x.stopPropagation(),fe?(po(),Di()):(x.currentTarget.blur(),ho.current=x.detail===0,Be(!0))},children:(0,we.jsxs)("span",{className:de.toggleIcon,children:[(0,we.jsx)(s7,{active:fe}),ha.length>0&&(0,we.jsx)("span",{className:`${de.badge} ${fe?de.fadeOut:""} ${Mi?de.entrance:""}`,children:ha.length})]})}),(0,we.jsxs)("span",{className:de.buttonTooltip,"aria-hidden":!fe,children:["Exit",h&&(0,we.jsx)("span",{className:de.shortcut,children:"Esc"})]})]}),(0,we.jsx)(RC,{visible:Ft&&fe,activeType:jr,onSelect:x=>{or(jr===x?null:x)},isDarkMode:ca,sectionCount:ot?.sections.length??0,onDetectSections:()=>{let x=NC(),C=ot?.sections??[],T=new Set(C.map(P=>P.selector)),I=x.filter(P=>!T.has(P.selector)),Q=[...C,...I],X=[...ot?.originalOrder??[],...I.map(P=>P.id)];sa({sections:Q,originalOrder:X,detectedAt:Date.now()})},placementCount:Dt.length,onClearPlacements:()=>{$a(Dt,ot)},blankCanvas:yn,onBlankCanvasChange:x=>{let C={sections:[],originalOrder:[],detectedAt:Date.now()};x?(ws.current={rearrange:ot,placements:Dt},sa(Na.current.rearrange||C),Jo(Na.current.placements),or(null)):(Na.current={rearrange:ot,placements:Dt},sa(ws.current.rearrange||C),Jo(ws.current.placements)),rd(x)},wireframePurpose:lo,onWireframePurposeChange:rr,Tooltip:hc,onDragStart:(x,C)=>{C.preventDefault();let T=Ve[x],I=null,Q=!1,X=C.clientX,P=C.clientY,Ze=C.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,lt=tt=>{let Ct=tt.clientX-X,pt=tt.clientY-P;if(!Q&&(Math.abs(Ct)>4||Math.abs(pt)>4)&&(Q=!0,I=document.createElement("div"),I.className=`${se.dragPreview}${yn?` ${se.dragPreviewWireframe}`:""}`,zn.current?.appendChild(I)),!I)return;let Pe=Math.max(0,Ze-tt.clientY),ft=Math.min(1,Pe/180),yt=1-Math.pow(1-ft,2),Kt=28,bn=20,ro=Math.min(140,T.width*.18),bt=Math.min(90,T.height*.18),_t=Kt+(ro-Kt)*yt,en=bn+(bt-bn)*yt;I.style.width=`${_t}px`,I.style.height=`${en}px`,I.style.left=`${tt.clientX-_t/2}px`,I.style.top=`${tt.clientY-en/2}px`,I.style.opacity=`${.5+.5*yt}`,I.textContent=yt>.25?x:""},nt=tt=>{if(window.removeEventListener("mousemove",lt),window.removeEventListener("mouseup",nt),I&&I.remove(),Q){let Ct=T.width,pt=T.height,Pe=window.scrollY,ft=Math.max(0,tt.clientX-Ct/2),yt=Math.max(0,tt.clientY+Pe-pt/2),Kt={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:x,x:ft,y:yt,width:Ct,height:pt,scrollY:Pe,timestamp:Date.now()};Jo(bn=>[...bn,Kt]),or(null),ki.current=new Set,cd(bn=>bn+1)}};window.addEventListener("mousemove",lt),window.addEventListener("mouseup",nt)}}),(0,we.jsx)(jk,{settings:nn,onSettingsChange:__,isDarkMode:ca,onToggleTheme:h_,isDevMode:pd,connectionStatus:fl,endpoint:ue,onExited:p_,isOpen:fe&&mo,toolbarNearBottom:!!rn&&rn.y<230,settingsPage:ld,onSettingsPageChange:ad,onHideToolbar:Lc})]})}),(Ft||Da)&&(0,we.jsx)("div",{className:`${se.blankCanvas} ${Ko?se.visible:""} ${Si?se.gridActive:""}`,style:{"--canvas-opacity":ar},"data-feedback-toolbar":!0}),Ft&&yn&&Ko&&(0,we.jsxs)("div",{className:se.wireframeNotice,"data-feedback-toolbar":!0,children:[(0,we.jsxs)("div",{className:se.wireframeOpacityRow,children:[(0,we.jsx)("span",{className:se.wireframeOpacityLabel,children:"Toggle Opacity"}),(0,we.jsx)("input",{type:"range",className:se.wireframeOpacitySlider,min:0,max:1,step:.01,value:ar,onChange:x=>l_(Number(x.target.value))})]}),(0,we.jsxs)("div",{className:se.wireframeNoticeTitleRow,children:[(0,we.jsx)("span",{className:se.wireframeNoticeTitle,children:"Wireframe Mode"}),(0,we.jsx)("span",{className:se.wireframeNoticeDivider}),(0,we.jsx)("button",{className:se.wireframeStartOver,onClick:()=>{$a(Dt,ot),Na.current={rearrange:null,placements:[]},rr(""),Dm(r)},children:"Start Over"})]}),"Drag components onto the canvas.",(0,we.jsx)("br",{}),"Copied output will only include the wireframed layout."]}),(Ft||Da)&&(0,we.jsx)(CC,{placements:Dt,onChange:Jo,activeComponent:Da?null:jr,onActiveComponentChange:or,isDarkMode:ca,exiting:Da,onInteractionChange:sd,passthrough:!jr,extraSnapRects:ot?.sections.map(x=>x.currentRect),deselectSignal:a_,clearingPlacements:Yr,wireframe:yn,onSelectionChange:(x,C)=>{ki.current=x,C||(ir.current=new Set,Qm(T=>T+1))},onDragMove:(x,C)=>{let T=ir.current;if(!(!T.size||!ot)){if(!Al.current){Al.current=new Map;for(let I of ot.sections)T.has(I.id)&&Al.current.set(I.id,{x:I.currentRect.x,y:I.currentRect.y})}for(let I of ot.sections){if(!T.has(I.id)||!Al.current.get(I.id))continue;let X=zn.current?.querySelector(`[data-rearrange-section="${I.id}"]`);X&&(X.style.transform=`translate(${x}px, ${C}px)`)}}},onDragEnd:(x,C,T)=>{let I=ir.current,Q=Al.current;if(Al.current=null,!(!I.size||!ot||!Q)){for(let X of I){let P=zn.current?.querySelector(`[data-rearrange-section="${X}"]`);P&&(P.style.transform="")}T&&sa(X=>X&&{...X,sections:X.sections.map(P=>{let be=Q.get(P.id);return be?{...P,currentRect:{...P.currentRect,x:Math.max(0,be.x+x),y:Math.max(0,be.y+C)}}:P})})}}}),(Ft||Da)&&ot&&(0,we.jsx)(BC,{rearrangeState:ot,onChange:sa,isDarkMode:ca,exiting:Da,blankCanvas:yn,extraSnapRects:Dt.map(x=>({x:x.x,y:x.y,width:x.width,height:x.height})),clearing:ot===za,deselectSignal:r_,onSelectionChange:(x,C)=>{ir.current=x,C||(ki.current=new Set,cd(T=>T+1))},onDragMove:(x,C)=>{let T=ki.current;if(T.size){if(!Al.current){Al.current=new Map;for(let I of Dt)T.has(I.id)&&Al.current.set(I.id,{x:I.x,y:I.y})}for(let I of T){let Q=zn.current?.querySelector(`[data-design-placement="${I}"]`);Q&&(Q.style.transform=`translate(${x}px, ${C}px)`)}}},onDragEnd:(x,C,T)=>{let I=ki.current,Q=Al.current;if(Al.current=null,!(!I.size||!Q)){for(let X of I){let P=zn.current?.querySelector(`[data-design-placement="${X}"]`);P&&(P.style.transform="")}T&&Jo(X=>X.map(P=>{let be=Q.get(P.id);return be?{...P,x:Math.max(0,be.x+x),y:Math.max(0,be.y+C)}:P}))}}}),(0,we.jsx)("canvas",{ref:Tc,className:`${de.drawCanvas} ${el?de.active:""}`,"aria-hidden":"true",style:{opacity:Nc?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),(0,we.jsx)("div",{className:de.markersLayer,"data-feedback-toolbar":!0,children:kn.filter(({annotation:x})=>!x.isFixed).map(({annotation:x,index:C,pending:T},I,Q)=>(0,we.jsx)(Vw,{annotation:x,pending:T,globalIndex:C,layerIndex:I,layerSize:Q.length,isExiting:T?Io:Te,isClearing:xt.current.has(x.id),isAnimated:yo.current.has(x.id),isNew:ml.current===x.id,onEnterComplete:bo,isHovered:!Te&&ae===x.id,isRemoving:vo.has(x.id),onRemoveComplete:Rs,isEditingAny:!!Ye,renumberFrom:Ge,markerClickBehavior:nn.markerClickBehavior,onHoverEnter:Ns,onHoverLeave:yd,onClick:Uc,onContextMenu:Ni},ks.current.get(x.id)??x.id))}),(0,we.jsx)("div",{className:de.fixedMarkersLayer,"data-feedback-toolbar":!0,children:kn.filter(({annotation:x})=>x.isFixed).map(({annotation:x,index:C,pending:T},I,Q)=>(0,we.jsx)(Vw,{annotation:x,pending:T,globalIndex:C,layerIndex:I,layerSize:Q.length,isExiting:T?Io:Te,isClearing:xt.current.has(x.id),isAnimated:yo.current.has(x.id),isNew:ml.current===x.id,onEnterComplete:bo,isHovered:!Te&&ae===x.id,isRemoving:vo.has(x.id),onRemoveComplete:Rs,isEditingAny:!!Ye,renumberFrom:Ge,markerClickBehavior:nn.markerClickBehavior,onHoverEnter:Ns,onHoverLeave:yd,onClick:Uc,onContextMenu:Ni},ks.current.get(x.id)??x.id))}),fe&&Gt&&!le&&!Ye&&!nd&&!da&&(0,we.jsx)(Yk,{x:Bt.x,y:Bt.y,elementName:Gt.elementName,reactComponents:Gt.reactComponents}),fe&&(0,we.jsxs)("div",{className:de.overlay,"data-feedback-toolbar":!0,style:le||Ye?{zIndex:"inherit"}:void 0,children:[Gt?.rect&&!le&&!nd&&!da&&(0,we.jsx)("div",{className:`${de.hoverHighlight} ${de.enter}`,style:{left:Gt.rect.left,top:Gt.rect.top,width:Gt.rect.width,height:Gt.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)",...Gt.isPiercing?{borderStyle:"dashed"}:{}}}),Uo.filter(x=>x.element.isConnected).map((x,C)=>{let T=_o(x.element),I=Uo.length>1;return(0,we.jsx)("div",{className:I?de.multiSelectOutline:de.singleSelectOutline,style:{position:"fixed",left:T.left,top:T.top,width:T.width,height:T.height,...I?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},C)}),ae&&!le&&(()=>{let x=ge.find(Q=>Q.id===ae);if(!x?.boundingBox)return null;if(x.elementBoundingBoxes?.length)return Ce.length>0?Ce.filter(Q=>Q.isConnected).map((Q,X)=>{let P=_o(Q);return(0,we.jsx)("div",{className:`${de.multiSelectOutline} ${de.enter}`,style:{left:P.left,top:P.top,width:P.width,height:P.height}},`hover-outline-live-${X}`)}):x.elementBoundingBoxes.map((Q,X)=>(0,we.jsx)("div",{className:`${de.multiSelectOutline} ${de.enter}`,style:{left:Q.x,top:Q.y-Rl,width:Q.width,height:Q.height}},`hover-outline-${X}`));let C=ve&&ve.isConnected?_o(ve):null,T=C?{x:C.left,y:C.top,width:C.width,height:C.height}:{x:x.boundingBox.x,y:x.isFixed?x.boundingBox.y:x.boundingBox.y-Rl,width:x.boundingBox.width,height:x.boundingBox.height},I=x.isMultiSelect;return(0,we.jsx)("div",{className:`${I?de.multiSelectOutline:de.singleSelectOutline} ${de.enter}`,style:{left:T.x,top:T.y,width:T.width,height:T.height,...I?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),le&&(0,we.jsxs)(we.Fragment,{children:[le.multiSelectElements?.length?le.multiSelectElements.filter(x=>x.isConnected).map((x,C)=>{let T=_o(x);return(0,we.jsx)("div",{className:`${de.multiSelectOutline} ${Io?de.exit:de.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height}},`pending-multi-${C}`)}):le.targetElement&&le.targetElement.isConnected?(()=>{let x=_o(le.targetElement);return(0,we.jsx)("div",{className:`${de.singleSelectOutline} ${Io?de.exit:de.enter}`,style:{left:x.left,top:x.top,width:x.width,height:x.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():le.boundingBox&&(0,we.jsx)("div",{className:`${le.isMultiSelect?de.multiSelectOutline:de.singleSelectOutline} ${Io?de.exit:de.enter}`,style:{left:le.boundingBox.x,top:le.boundingBox.y-Rl,width:le.boundingBox.width,height:le.boundingBox.height,...le.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{let x=zi(le)??le,C=x.x,T=x.isFixed?x.y:x.y-Rl;return(0,we.jsx)(we.Fragment,{children:(0,we.jsx)(Jy,{ref:fr,element:le.element,selectedText:le.selectedText,allowEmpty:typeof v=="object"&&!!le.attributes?.[v.attribute],onOpenSource:w&&le.sourceFile?()=>w(le.sourceFile):void 0,computedStyles:le.computedStylesObj,placeholder:typeof v=="object"&&le.attributes?.[v.attribute]?"Add a note (optional)":le.element==="Area selection"?"What should change in this area?":le.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:g_,onExitComplete:Ba,onCancel:fa,isExiting:Io,lightMode:!ca,accentColor:le.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,C/100*window.innerWidth)),...T>window.innerHeight-290?{bottom:window.innerHeight-T+20}:{top:T+20}}},le.id)})})()]}),Ye&&(0,we.jsx)(we.Fragment,{children:Ye.elementBoundingBoxes?.length?Ql.length>0?Ql.filter(x=>x.isConnected).map((x,C)=>{let T=_o(x);return(0,we.jsx)("div",{className:`${de.multiSelectOutline} ${de.enter}`,style:{left:T.left,top:T.top,width:T.width,height:T.height}},`edit-multi-live-${C}`)}):Ye.elementBoundingBoxes.map((x,C)=>(0,we.jsx)("div",{className:`${de.multiSelectOutline} ${de.enter}`,style:{left:x.x,top:x.y-Rl,width:x.width,height:x.height}},`edit-multi-${C}`)):(()=>{let x=hn&&hn.isConnected?_o(hn):null,C=x?{x:x.left,y:x.top,width:x.width,height:x.height}:Ye.boundingBox?{x:Ye.boundingBox.x,y:Ye.isFixed?Ye.boundingBox.y:Ye.boundingBox.y-Rl,width:Ye.boundingBox.width,height:Ye.boundingBox.height}:null;return C?(0,we.jsx)("div",{className:`${Ye.isMultiSelect?de.multiSelectOutline:de.singleSelectOutline} ${de.enter}`,style:{left:C.x,top:C.y,width:C.width,height:C.height,...Ye.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})()}),da&&(0,we.jsxs)(we.Fragment,{children:[(0,we.jsx)("div",{ref:Ri,className:de.dragSelection}),(0,we.jsx)("div",{ref:hl,className:de.highlightsContainer})]})]}),(0,we.jsx)(zk,{ref:Ms,annotation:ao?zi(ao)??Ye:null,editing:!!Ye,exiting:Mo,restorePreview:Fo,scrollY:Rl,lightMode:!ca,onExited:Hc,editorProps:ao?{element:ao.element,selectedText:ao.selectedText,allowEmpty:typeof v=="object"&&!!ao.attributes?.[v.attribute],onOpenSource:w&&ao.sourceFile?()=>w(ao.sourceFile):void 0,computedStyles:$8(ao.computedStyles),placeholder:"Edit your feedback...",initialValue:ao.comment,submitLabel:"Save",onSubmit:hr,onCancel:y_,onDelete:()=>$c(ao.id),accentColor:ao.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)"}:void 0})]})]})}(function(){if(typeof window>"u")return;function i(){if(document.getElementById("agentation-root"))return;let c=document.createElement("div");c.id="agentation-root",document.body.appendChild(c);try{(0,M4.createRoot)(c).render(T4.default.createElement(E4,{appName:"PACE-2027 Conference",endpoint:"http://localhost:4747",copyFormat:"markdown",identifyingAttributes:["id","data-track","data-action","aria-label","role","class"]})),console.log("\u{1F3AF} Agentation visual feedback toolbar mounted successfully.")}catch(d){console.error("Failed to initialize Agentation:",d)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",i):i()})();})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.development.js:
  (**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.development.js:
  (**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.development.js:
  (**
   * @license React
   * react-dom-client.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
