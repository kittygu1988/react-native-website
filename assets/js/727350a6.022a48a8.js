"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20589],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return v}});var n=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(a),v=i,m=d["".concat(l,".").concat(v)]||d[v]||p[v]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function v(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},78196:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=a(25773),i=a(30808),r=(a(27378),a(35318)),o=["components"],c={id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb"},l=void 0,s={unversionedId:"native-modules-intro",id:"native-modules-intro",isDocsHomePage:!1,title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb",description:"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing.",source:"@site/../cndocs/native-modules-intro.md",sourceDirName:".",slug:"/native-modules-intro",permalink:"/docs/next/native-modules-intro",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/native-modules-intro.md",version:"current",frontMatter:{id:"native-modules-intro",title:"\u539f\u751f\u6a21\u5757\u7b80\u4ecb"},sidebar:"docs",previous:{title:"\u7f51\u7edc\u5b89\u5168\u7b56\u7565",permalink:"/docs/next/security"},next:{title:"Android \u539f\u751f\u6a21\u5757",permalink:"/docs/next/native-modules-android"}},u=[{value:"\u521b\u5efa\u539f\u751f\u6a21\u5757",id:"\u521b\u5efa\u539f\u751f\u6a21\u5757",children:[]},{value:"\u6559\u7a0b",id:"\u6559\u7a0b",children:[]}],p={toc:u};function d(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sometimes a React Native app needs to access a native platform API that is not available by default in JavaScript, for example the native APIs to access Apple or Android pay. Maybe you want to reuse some existing Objective-C, Swift, Java or C++ libraries without having to reimplement it in JavaScript, or write some high performance, multi-threaded code for things like image processing."),(0,r.kt)("p",null,"The NativeModule system exposes instances of Java/Objective-C/C++ (native) classes to JavaScript (JS) as JS objects, thereby allowing you to execute arbitrary native code from within JS. While we don't expect this feature to be part of the usual development process, it is essential that it exists. If React Native doesn't export a native API that your JS app needs you should be able to export it yourself!"),(0,r.kt)("h2",{id:"\u521b\u5efa\u539f\u751f\u6a21\u5757"},"\u521b\u5efa\u539f\u751f\u6a21\u5757"),(0,r.kt)("p",null,"There are two ways to write a native module for your React Native application:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Directly within your React Native application\u2019s iOS/Android projects"),(0,r.kt)("li",{parentName:"ol"},"As a NPM package that can be installed as a dependency by your/other React Native applications")),(0,r.kt)("p",null,"This guide will first walk you through implementing a native module directly within a React Native application. However the native module you build in the following guide can be distributed as an NPM package. Check out the ",(0,r.kt)("a",{parentName:"p",href:"native-modules-setup"},"Setting Up a Native Module as a NPM Package")," guide if you are interested in doing so."),(0,r.kt)("h2",{id:"\u6559\u7a0b"},"\u6559\u7a0b"),(0,r.kt)("p",null,"In the following sections we will walk you through guides on how to build a native module directly within a React Native application. As a prerequisite, you will need a React Native application to work within. You can follow the steps ",(0,r.kt)("a",{parentName:"p",href:"getting-started"},"here")," to setup a React Native application if you do not already have one."),(0,r.kt)("p",null,"Imagine that you want to access the iOS/Android native calendar APIs from JavaScript within a React Native application in order to create calendar events. React Native does not expose a JavaScript API to communicate with the native calendar libraries. However, through native modules, you can write native code that communicates with native calendar APIs. Then you can invoke that native code through JavaScript in your React Native application."),(0,r.kt)("p",null,"In the following sections you will create such a Calendar native module for both ",(0,r.kt)("a",{parentName:"p",href:"native-modules-android"},"Android")," and ",(0,r.kt)("a",{parentName:"p",href:"native-modules-ios"},"iOS"),"."))}d.isMDXComponent=!0}}]);