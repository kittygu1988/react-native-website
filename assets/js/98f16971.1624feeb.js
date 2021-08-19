"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[47864],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=n(25773),a=n(30808),r=(n(27378),n(35318)),i=["components"],l={id:"debugging",title:"\u8c03\u8bd5"},s=void 0,p={unversionedId:"debugging",id:"debugging",isDocsHomePage:!1,title:"\u8c03\u8bd5",description:"\u5f00\u542f\u8c03\u8bd5\u7684\u5feb\u6377\u952e",source:"@site/../cndocs/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/docs/next/debugging",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/debugging.md",version:"current",frontMatter:{id:"debugging",title:"\u8c03\u8bd5"},sidebar:"docs",previous:{title:"\u5feb\u901f\u5237\u65b0",permalink:"/docs/next/fast-refresh"},next:{title:"Symbolicating a stack trace",permalink:"/docs/next/symbolication"}},c=[{value:"\u5f00\u542f\u8c03\u8bd5\u7684\u5feb\u6377\u952e",id:"\u5f00\u542f\u8c03\u8bd5\u7684\u5feb\u6377\u952e",children:[]},{value:"\u8bbf\u95ee App \u5185\u7684\u5f00\u53d1\u83dc\u5355",id:"\u8bbf\u95ee-app-\u5185\u7684\u5f00\u53d1\u83dc\u5355",children:[]},{value:"Enabling Fast Refresh",id:"enabling-fast-refresh",children:[]},{value:"LogBox",id:"logbox",children:[]},{value:"\u63a7\u5236\u53f0\u7684\u9519\u8bef\u4e0e\u8b66\u544a\u63d0\u793a",id:"\u63a7\u5236\u53f0\u7684\u9519\u8bef\u4e0e\u8b66\u544a\u63d0\u793a",children:[{value:"\u672a\u6355\u83b7\u7684\u9519\u8bef",id:"\u672a\u6355\u83b7\u7684\u9519\u8bef",children:[]},{value:"\u8bed\u6cd5\u9519\u8bef",id:"\u8bed\u6cd5\u9519\u8bef",children:[]}]},{value:"Chrome \u5f00\u53d1\u8005\u5de5\u5177",id:"chrome-\u5f00\u53d1\u8005\u5de5\u5177",children:[{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 JavaScript \u8c03\u8bd5\u5668\u6765\u8c03\u8bd5",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684-javascript-\u8c03\u8bd5\u5668\u6765\u8c03\u8bd5",children:[]}]},{value:"Safari Developer Tools",id:"safari-developer-tools",children:[]},{value:"React Developer Tools",id:"react-developer-tools",children:[{value:"Integration with React Native Inspector",id:"integration-with-react-native-inspector",children:[]},{value:"Inspecting Component Instances",id:"inspecting-component-instances",children:[]}]},{value:"\u6027\u80fd\u76d1\u6d4b",id:"\u6027\u80fd\u76d1\u6d4b",children:[]},{value:"Debugging Application State",id:"debugging-application-state",children:[]},{value:"\u8bbf\u95ee\u63a7\u5236\u53f0\u65e5\u5fd7",id:"\u8bbf\u95ee\u63a7\u5236\u53f0\u65e5\u5fd7",children:[]},{value:"\u4f7f\u7528 Chrome \u5f00\u53d1\u8005\u5de5\u5177\u6765\u5728\u8bbe\u5907\u4e0a\u8c03\u8bd5",id:"\u4f7f\u7528-chrome-\u5f00\u53d1\u8005\u5de5\u5177\u6765\u5728\u8bbe\u5907\u4e0a\u8c03\u8bd5",children:[]},{value:"\u8c03\u8bd5\u539f\u751f\u4ee3\u7801",id:"\u8c03\u8bd5\u539f\u751f\u4ee3\u7801",children:[]}],d={toc:c};function u(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5f00\u542f\u8c03\u8bd5\u7684\u5feb\u6377\u952e"},"\u5f00\u542f\u8c03\u8bd5\u7684\u5feb\u6377\u952e"),(0,r.kt)("p",null,"React Native \u5728 iOS \u6a21\u62df\u5668\u4e0a\u652f\u6301\u4e00\u4e9b\u5feb\u6377\u952e\u64cd\u4f5c\uff0c\u5177\u4f53\u4f1a\u5728\u4e0b\u6587\u4e2d\u63cf\u8ff0\u3002\u8981\u4f7f\u7528\u5feb\u6377\u952e\u8bf7",(0,r.kt)("strong",{parentName:"p"},'\u52a1\u5fc5\u786e\u4fdd\u6a21\u62df\u5668\u7684 Hardware \u83dc\u5355\u4e2d\uff0cKeyboard \u9009\u9879\u4e0b\u7684"Connect Hardware Keyboard"\u5904\u4e8e\u5f00\u542f\u72b6\u6001'),"\uff0c\u5426\u5219\u6309\u952e\u662f\u6ca1\u6709\u54cd\u5e94\u7684\u3002"),(0,r.kt)("h2",{id:"\u8bbf\u95ee-app-\u5185\u7684\u5f00\u53d1\u83dc\u5355"},"\u8bbf\u95ee App \u5185\u7684\u5f00\u53d1\u83dc\u5355"),(0,r.kt)("p",null,'\u4f60\u53ef\u4ee5\u901a\u8fc7\u6447\u6643\u8bbe\u5907\u6216\u662f\u9009\u62e9 iOS \u6a21\u62df\u5668\u7684"Hardware"\u83dc\u5355\u4e2d\u7684"Shake Gesture"\u9009\u9879\u6765\u6253\u5f00\u5f00\u53d1\u83dc\u5355\u3002\u53e6\u5916\uff0c\u5982\u679c\u662f\u5728 iOS \u6a21\u62df\u5668\u4e2d\u8fd0\u884c\uff0c\u8fd8\u53ef\u4ee5\u6309\u4e0b',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Command")),(0,r.kt)("inlineCode",{parentName:"p"},"\u2318")," + ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"D"))," \u5feb\u6377\u952e\uff0cAndroid \u6a21\u62df\u5668\u5bf9\u5e94\u7684\u5219\u662f",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Command")),(0,r.kt)("inlineCode",{parentName:"p"},"\u2318")," + ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"M")),"\uff08windows \u4e0a\u53ef\u80fd\u662f F1 \u6216\u8005 F2\uff09\uff0c\u6216\u662f\u76f4\u63a5\u5728\u547d\u4ee4\u884c\u4e2d\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"adb shell input keyevent 82"),"\u6765\u53d1\u9001\u83dc\u5355\u952e\u547d\u4ee4\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(74759).Z})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728\u53d1\u5e03\uff08production\uff09\u7248\u672c\u4e2d\u5f00\u53d1\u8005\u83dc\u5355\u5c06\u65e0\u6cd5\u4f7f\u7528\u3002")),(0,r.kt)("h2",{id:"enabling-fast-refresh"},"Enabling Fast Refresh"),(0,r.kt)("p",null,"Fast Refresh is a React Native feature that allows you to get near-instant feedback for changes in your React components. While debugging, it can help to have ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/fast-refresh"},"Fast Refresh"),' enabled. Fast Refresh is enabled by default, and you can toggle "Enable Fast Refresh" in the React Native developer menu. When enabled, most of your edits should be visible within a second or two.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'\u67d0\u4e9b\u60c5\u51b5\u4e0b\u81ea\u52a8\u5237\u65b0\u5e76\u4e0d\u80fd\u987a\u5229\u5b9e\u65bd\u3002\u5982\u679c\u78b0\u5230\u4efb\u4f55\u754c\u9762\u5237\u65b0\u4e0a\u7684\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u624b\u52a8\u5b8c\u5168\u5237\u65b0\u3002\u5177\u4f53\u7684\u64cd\u4f5c\u5c31\u662f\u5728\u5f00\u53d1\u83dc\u5355\u4e2d\u70b9\u51fb"Reload"\u9009\u9879\u3002\u4e5f\u53ef\u4ee5\u5728 iOS \u6a21\u62df\u5668\u4e2d\u6309\u4e0b',(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Command")),(0,r.kt)("inlineCode",{parentName:"p"},"\u2318")," + ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"R"))," \uff0cAndroid \u6a21\u62df\u5668\u4e0a\u5bf9\u5e94\u7684\u5219\u662f\u6309\u4e24\u4e0b",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"R"))," \u3002")),(0,r.kt)("p",null,"\u4f46\u6709\u4e9b\u65f6\u5019\u4f60\u5fc5\u987b\u8981\u91cd\u65b0\u7f16\u8bd1\u5e94\u7528\uff08run-ios \u6216\u662f run-android\uff09\u624d\u80fd\u4f7f\u4fee\u6539\u751f\u6548\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u4e86\u65b0\u7684\u8d44\u6e90(\u6bd4\u5982\u7ed9 iOS \u7684",(0,r.kt)("inlineCode",{parentName:"li"},"Images.xcassets"),"\u6216\u662f Andorid \u7684",(0,r.kt)("inlineCode",{parentName:"li"},"res/drawable"),"\u6587\u4ef6\u5939\u6dfb\u52a0\u4e86\u56fe\u7247)"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u6539\u4e86\u4efb\u4f55\u7684\u539f\u751f\u4ee3\u7801\uff08objective-c/swift/java\uff09")),(0,r.kt)("h2",{id:"logbox"},"LogBox"),(0,r.kt)("p",null,"Errors and warnings in development builds are displayed in LogBox inside your app."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"LogBox \u5728\u53d1\u5e03\u7248\u672c\uff08release/production\uff09\u4e2d\u662f\u81ea\u52a8\u7981\u7528\u7684\u3002")),(0,r.kt)("h2",{id:"\u63a7\u5236\u53f0\u7684\u9519\u8bef\u4e0e\u8b66\u544a\u63d0\u793a"},"\u63a7\u5236\u53f0\u7684\u9519\u8bef\u4e0e\u8b66\u544a\u63d0\u793a"),(0,r.kt)("p",null,"Console errors and warnings are displayed as on-screen notifications with a red or yellow badge, and the number of errors or warning in the console respectively. To view a console error or warnings, tap the notification to view the full screen information about the log and to paginiate through all of the logs in the console."),(0,r.kt)("p",null,"These notifications can be hidden using ",(0,r.kt)("inlineCode",{parentName:"p"},"LogBox.ignoreAllLogs()"),". This is useful when giving product demos, for example. Additionally, notifications can be hidden on a per-log basis via ",(0,r.kt)("inlineCode",{parentName:"p"},"LogBox.ignoreLogs()"),". This is useful when there's a noisy warning that cannot be fixed, like those in a third-party dependency."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Ignore logs as a last resort and create a task to fix any logs that are ignored.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { LogBox } from 'react-native';\n\n// Ignore log notification by message:\nLogBox.ignoreLogs(['Warning: ...']);\n\n// Ignore all log notifications:\nLogBox.ignoreAllLogs();\n")),(0,r.kt)("h3",{id:"\u672a\u6355\u83b7\u7684\u9519\u8bef"},"\u672a\u6355\u83b7\u7684\u9519\u8bef"),(0,r.kt)("p",null,"Unhanded JavaScript errors such as ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined is not a function")," will automatically open a full screen LogBox error with the source of the error. These errors are dismissable and minimizable so that you can see the state of your app when these errors occur, but should always be addressed."),(0,r.kt)("h3",{id:"\u8bed\u6cd5\u9519\u8bef"},"\u8bed\u6cd5\u9519\u8bef"),(0,r.kt)("p",null,"Syntax errors will automatically open a full screen LogBox error with the source of the syntax error. This error is not dismissable because it represents invalid JavaScript execution that must be fixed before continuing with your app. To dismiss these errors, fix the syntax error and either save to automatically dismiss (with Fast Refresh enabled) or cmd+r to reload (with Fast Refresh disabled)."),(0,r.kt)("h2",{id:"chrome-\u5f00\u53d1\u8005\u5de5\u5177"},"Chrome \u5f00\u53d1\u8005\u5de5\u5177"),(0,r.kt)("p",null,'\u5728\u5f00\u53d1\u8005\u83dc\u5355\u4e2d\u9009\u62e9"Debug JS Remotely"\u9009\u9879\uff0c\u5373\u53ef\u4ee5\u5f00\u59cb\u5728 Chrome \u4e2d\u8c03\u8bd5 JavaScript \u4ee3\u7801\u3002\u70b9\u51fb\u8fd9\u4e2a\u9009\u9879\u7684\u540c\u65f6\u4f1a\u81ea\u52a8\u6253\u5f00\u8c03\u8bd5\u9875\u9762 ',(0,r.kt)("a",{parentName:"p",href:"http://localhost:8081/debugger-ui"},"http://localhost:8081/debugger-ui"),".(\u5982\u679c\u5730\u5740\u680f\u6253\u5f00\u7684\u662f ip \u5730\u5740\uff0c\u5219\u8bf7\u81ea\u884c\u6539\u4e3a localhost)"),(0,r.kt)("p",null,"\u5728 Chrome \u7684\u83dc\u5355\u4e2d\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"Tools \u2192 Developer Tools"),"\u53ef\u4ee5\u6253\u5f00\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u952e\u76d8\u5feb\u6377\u952e\u6765\u6253\u5f00\uff08Mac \u4e0a\u662f",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Command")),(0,r.kt)("inlineCode",{parentName:"p"},"\u2318")," + ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Option")),(0,r.kt)("inlineCode",{parentName:"p"},"\u2325")," + ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"I")),"\uff0cWindows \u4e0a\u662f",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Ctrl"))," + ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Shift"))," + ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"I")),"\u6216\u662f F12\uff09\u3002\u6253\u5f00",(0,r.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/2233339/javascript-is-there-a-way-to-get-chrome-to-break-on-all-errors/17324511#17324511"},"\u6709\u5f02\u5e38\u65f6\u6682\u505c\uff08Pause On Caught Exceptions\uff09"),"\u9009\u9879\uff0c\u80fd\u591f\u83b7\u5f97\u66f4\u597d\u7684\u5f00\u53d1\u4f53\u9a8c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: on Android, if the times between the debugger and device have drifted; things such as animation, event behavior, etc., might not work properly or the results may not be accurate. Please correct this by running ",(0,r.kt)("inlineCode",{parentName:"p"},'adb shell "date `date +%m%d%H%M%Y.%S%3N`"')," on your debugger machine. Root access is required for the use in real device.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1aChrome \u4e2d\u5e76\u4e0d\u80fd\u76f4\u63a5\u770b\u5230 App \u7684\u7528\u6237\u754c\u9762\uff0c\u800c\u53ea\u80fd\u63d0\u4f9b console \u7684\u8f93\u51fa\uff0c\u4ee5\u53ca\u5728 sources \u9879\u4e2d\u65ad\u70b9\u8c03\u8bd5 js \u811a\u672c\u3002\u4e00\u4e9b\u8001\u7684\u6559\u7a0b\u548c\u6587\u7ae0\u4f1a\u63d0\u5230 React \u7684 Chrome \u63d2\u4ef6\uff0c\u8fd9\u4e00\u63d2\u4ef6\u76ee\u524d\u5e76\u4e0d\u652f\u6301 React Native\uff0c\u800c\u4e14\u8c03\u8bd5\u672c\u8eab\u5e76\u4e0d\u9700\u8981\u8fd9\u4e2a\u63d2\u4ef6\u3002\u4e0d\u8fc7\u4f60\u53ef\u4ee5\u5b89\u88c5\u72ec\u7acb\uff08\u975e\u63d2\u4ef6\uff09\u7248\u672c\u7684 React Developer Tools \u6765\u8f85\u52a9\u67e5\u770b\u754c\u9762\u5e03\u5c40\uff0c\u4e0b\u6587\u4f1a\u8bb2\u8ff0\u5177\u4f53\u5b89\u88c5\u65b9\u6cd5\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4f7f\u7528 Chrome \u8c03\u8bd5\u76ee\u524d\u65e0\u6cd5\u89c2\u6d4b\u5230 React Native \u4e2d\u7684\u7f51\u7edc\u8bf7\u6c42\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u529f\u80fd\u66f4\u5f3a\u5927\u7684\u7b2c\u4e09\u65b9\u7684",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jhen0409/react-native-debugger"},"react-native-debugger"),"\u6216\u662f\u5b98\u65b9\u7684",(0,r.kt)("a",{parentName:"p",href:"https://fbflipper.com/"},"flipper"),"\uff08\u6ce8\u610f\u4ec5\u80fd\u5728 0.62 \u4ee5\u4e0a\u7248\u672c\u53ef\u7528\uff09\u6765\u89c2\u6d4b\u3002")),(0,r.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684-javascript-\u8c03\u8bd5\u5668\u6765\u8c03\u8bd5"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 JavaScript \u8c03\u8bd5\u5668\u6765\u8c03\u8bd5"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u7528\u5176\u4ed6\u7684 JavaScript \u8c03\u8bd5\u5668\u6765\u4ee3\u66ff Chrome\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"REACT_DEBUGGER"),'\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5176\u503c\u4e3a\u542f\u52a8\u81ea\u5b9a\u4e49\u8c03\u8bd5\u5668\u7684\u547d\u4ee4\u3002\u8c03\u8bd5\u7684\u6d41\u7a0b\u4f9d\u7136\u662f\u4ece\u5f00\u53d1\u8005\u83dc\u5355\u4e2d\u7684"Debug JS Remotely"\u9009\u9879\u5f00\u59cb\u3002'),(0,r.kt)("p",null,"\u88ab\u6307\u5b9a\u7684\u8c03\u8bd5\u5668\u9700\u8981\u77e5\u9053\u9879\u76ee\u6240\u5728\u7684\u76ee\u5f55\uff08\u53ef\u4ee5\u4e00\u6b21\u4f20\u9012\u591a\u4e2a\u76ee\u5f55\u53c2\u6570\uff0c\u4ee5\u7a7a\u683c\u9694\u5f00\uff09\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u8bbe\u5b9a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},'REACT_DEBUGGER="node /\u67d0\u4e2a\u8def\u5f84/launchDebugger.js --port 2345 --type ReactNative"'),"\uff0c\u90a3\u4e48\u542f\u52a8\u8c03\u8bd5\u5668\u7684\u547d\u4ee4\u5c31\u5e94\u8be5\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"node /\u67d0\u4e2a\u8def\u5f84/launchDebugger.js --port 2345 --type ReactNative /\u67d0\u4e2a\u8def\u5f84/\u4f60\u7684RN\u9879\u76ee\u76ee\u5f55"),"\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u6267\u884c\u7684\u8c03\u8bd5\u5668\u6700\u597d\u662f\u4e00\u4e2a\u77ed\u8fdb\u7a0b\uff08short-lived processes\uff09\uff0c\u540c\u65f6\u6700\u597d\u4e5f\u4e0d\u8981\u6709\u8d85\u8fc7 200k \u7684\u6587\u5b57\u8f93\u51fa\u3002")),(0,r.kt)("h2",{id:"safari-developer-tools"},"Safari Developer Tools"),(0,r.kt)("p",null,'\u4f60\u53ef\u4ee5\u4f7f\u7528 Safari \u6765\u8c03\u8bd5\u4f60\u7684 iOS \u7248\u672c\u7684\u5e94\u7528\uff0c\u800c\u4e0d\u5fc5\u542f\u7528"Debug JS Remotely".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enable Develop menu in Safari: ",(0,r.kt)("inlineCode",{parentName:"li"},'Preferences \u2192 Advanced \u2192 Select "Show Develop menu in menu bar"')),(0,r.kt)("li",{parentName:"ul"},"Select your app's JSContext: ",(0,r.kt)("inlineCode",{parentName:"li"},"Develop \u2192 Simulator \u2192 JSContext")),(0,r.kt)("li",{parentName:"ul"},"Safari's Web Inspector should open which has a Console and a Debugger")),(0,r.kt)("p",null,"\u867d\u7136\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ef\u80fd\u6ca1\u6709\u542f\u7528 source map\uff0c\u4f46\u60a8\u53ef\u4ee5\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"http://blog.nparashuram.com/2019/10/debugging-react-native-ios-apps-with.html"},"\u672c\u6307\u5357"),"\u6216",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=GrGqIIz51k4"},"Youtube \u89c6\u9891"),"\u6765\u542f\u7528 source map\uff0c\u5e76\u5728\u6e90\u4ee3\u7801\u7684\u6b63\u786e\u4f4d\u7f6e\u8bbe\u7f6e\u65ad\u70b9\u3002"),(0,r.kt)("p",null,'\u7136\u800c\uff0c\u6bcf\u6b21\u91cd\u65b0\u52a0\u8f7d\u5e94\u7528\u7a0b\u5e8f\uff08\u4f7f\u7528\u5b9e\u65f6\u91cd\u65b0\u52a0\u8f7d\uff0c\u6216\u901a\u8fc7\u624b\u52a8\u91cd\u65b0\u52a0\u8f7d\uff09\u65f6\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 JSContext\u3002\u9009\u62e9 "\u81ea\u52a8\u663e\u793a JSContextts \u7684 Web \u68c0\u67e5\u5668(Automatically Show Web Inspectors for JSContexts)"\u53ef\u4ee5\u5e2e\u4f60\u81ea\u52a8\u9009\u62e9\u6700\u65b0\u7684 JSContext\u3002'),(0,r.kt)("h2",{id:"react-developer-tools"},"React Developer Tools"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react/tree/master/packages/react-devtools"},"\u72ec\u7acb\u7248 React \u5f00\u53d1\u8005\u5de5\u5177(\u4e0d\u662f chrome \u7684\u63d2\u4ef6)"),"\u6765\u8c03\u8bd5 React \u7ec4\u4ef6\u5c42\u6b21\u7ed3\u6784\u3002\u8981\u4f7f\u7528\u5b83\uff0c\u8bf7\u5168\u5c40\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"react-devtools"),"\u5305:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1areact-devtools v4 \u9700\u8981 react-native 0.62 \u6216\u66f4\u9ad8\u7248\u672c\u624d\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install -g react-devtools\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bd1\u6ce8\uff1areact-devtools \u4f9d\u8d56\u4e8e electron\uff0c\u800c electron \u9700\u8981\u5230\u56fd\u5916\u670d\u52a1\u5668\u4e0b\u8f7d\u4e8c\u8fdb\u5236\u5305\uff0c\u6240\u4ee5\u56fd\u5185\u7528\u6237\u8fd9\u4e00\u6b65\u5f88\u53ef\u80fd\u4f1a\u5361\u4f4f\u3002\u6b64\u65f6\u8bf7\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"\u73af\u5883\u53d8\u91cf"),"\u4e2d\u6dfb\u52a0 electron \u4e13\u7528\u7684\u56fd\u5185\u955c\u50cf\u6e90\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},'ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"'),"\uff0c\u7136\u540e\u518d\u5c1d\u8bd5\u5b89\u88c5 react-devtools\u3002")),(0,r.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210\u540e\u5728\u547d\u4ee4\u884c\u4e2d\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"react-devtools"),"\u5373\u53ef\u542f\u52a8\u6b64\u5de5\u5177\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"react-devtools\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"React DevTools",src:n(83686).Z})),(0,r.kt)("p",null,"\u5f88\u5feb\u5c31\u80fd\u8fde\u4e0a\u6a21\u62df\u5668\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u63d0\u793a\uff1a\u5982\u679c\u4f60\u4e0d\u60f3\u5168\u5c40\u5b89\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"react-devtools"),"\uff0c\u53ef\u4ee5\u628a\u5b83\u5355\u72ec\u52a0\u5165\u9879\u76ee\u4e2d\u3002\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"npm install --save-dev react-devtools"),"\u547d\u4ee4\u628a",(0,r.kt)("inlineCode",{parentName:"p"},"react-devtools"),"\u5305\u5b89\u88c5\u5230\u4f60\u7684\u9879\u76ee\u4e2d\uff0c\u5e76\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"scripts"),"\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'"react-devtools": "react-devtools"'),"\uff0c\u63a5\u7740\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"npm run react-devtools"),"\u547d\u4ee4\u5373\u53ef\u3002")),(0,r.kt)("h3",{id:"integration-with-react-native-inspector"},"Integration with React Native Inspector"),(0,r.kt)("p",null,'Open the in-app developer menu and choose "Toggle Inspector". It will bring up an overlay that lets you tap on any UI element and see information about it:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"React Native Inspector",src:n(29692).Z})),(0,r.kt)("p",null,"However, when ",(0,r.kt)("inlineCode",{parentName:"p"},"react-devtools")," is running, Inspector will enter a collapsed mode, and instead use the DevTools as primary UI. In this mode, clicking on something in the simulator will bring up the relevant components in the DevTools:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"React DevTools Inspector Integration",src:n(85715).Z})),(0,r.kt)("p",null,'You can choose "Toggle Inspector" in the same menu to exit this mode.'),(0,r.kt)("h3",{id:"inspecting-component-instances"},"Inspecting Component Instances"),(0,r.kt)("p",null,"When debugging JavaScript in Chrome, you can inspect the props and state of the React components in the browser console."),(0,r.kt)("p",null,"First, follow the instructions for debugging in Chrome to open the Chrome console."),(0,r.kt)("p",null,"Make sure that the dropdown in the top left corner of the Chrome console says ",(0,r.kt)("inlineCode",{parentName:"p"},"debuggerWorker.js"),". ",(0,r.kt)("strong",{parentName:"p"},"This step is essential.")),(0,r.kt)("p",null,"Then select a React component in React DevTools. There is a search box at the top that helps you find one by name. As soon as you select it, it will be available as ",(0,r.kt)("inlineCode",{parentName:"p"},"$r")," in the Chrome console, letting you inspect its props, state, and instance properties."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"React DevTools Chrome Console Integration",src:n(14900).Z})),(0,r.kt)("h2",{id:"\u6027\u80fd\u76d1\u6d4b"},"\u6027\u80fd\u76d1\u6d4b"),(0,r.kt)("p",null,'\u4f60\u53ef\u4ee5\u5728\u5f00\u53d1\u8005\u83dc\u5355\u4e2d\u9009\u62e9"Pref Monitor"\u9009\u9879\u4ee5\u5f00\u542f\u4e00\u4e2a\u60ac\u6d6e\u5c42\uff0c\u5176\u4e2d\u4f1a\u663e\u793a\u5e94\u7528\u7684\u5f53\u524d\u5e27\u6570\u3002'),(0,r.kt)("hr",{style:{marginTop:25,marginBottom:25}}),(0,r.kt)("h2",{id:"debugging-application-state"},"Debugging Application State"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinitered/reactotron"},"Reactotron")," is an open-source desktop app that allows you to inspect Redux or MobX-State-Tree application state as well as view custom logs, run custom commands such as resetting state, store and restore state snapshots, and other helpful debugging features for React Native apps."),(0,r.kt)("p",null,"You can view installation instructions ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/infinitered/reactotron"},"in the README"),". If you're using Expo, here is an article detailing ",(0,r.kt)("a",{parentName:"p",href:"https://shift.infinite.red/start-using-reactotron-in-your-expo-project-today-in-3-easy-steps-a03d11032a7a"},"how to install on Expo"),"."),(0,r.kt)("h1",{id:"\u539f\u751f\u7aef\u8c03\u8bd5"},"\u539f\u751f\u7aef\u8c03\u8bd5"),(0,r.kt)("div",{class:"banner-native-code-required"},(0,r.kt)("h3",null,"Projects with Native Code Only"),(0,r.kt)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed ",(0,r.kt)("code",null,"expo-cli")," workflow, see the guide on ",(0,r.kt)("a",{href:"https://docs.expo.io/versions/latest/workflow/customizing/",target:"_blank"},"ejecting")," to use this API.")),(0,r.kt)("h2",{id:"\u8bbf\u95ee\u63a7\u5236\u53f0\u65e5\u5fd7"},"\u8bbf\u95ee\u63a7\u5236\u53f0\u65e5\u5fd7"),(0,r.kt)("p",null,"\u5728\u8fd0\u884c RN \u5e94\u7528\u65f6\uff0c\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u5982\u4e0b\u547d\u4ee4\u6765\u67e5\u770b\u63a7\u5236\u53f0\u7684\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx react-native log-ios\n$ npx react-native log-android\n")),(0,r.kt)("p",null,"\u6b64\u5916\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5728 iOS \u6a21\u62df\u5668\u7684\u83dc\u5355\u4e2d\u9009\u62e9",(0,r.kt)("inlineCode",{parentName:"p"},"Debug \u2192 Open System Log..."),"\u6765\u67e5\u770b\u3002\u5982\u679c\u662f Android \u5e94\u7528\uff0c\u65e0\u8bba\u662f\u8fd0\u884c\u5728\u6a21\u62df\u5668\u6216\u662f\u771f\u673a\u4e0a\uff0c\u90fd\u53ef\u4ee5\u901a\u8fc7\u5728\u7ec8\u7aef\u547d\u4ee4\u884c\u91cc\u8fd0\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"adb logcat *:S ReactNative:V ReactNativeJS:V"),"\u547d\u4ee4\u6765\u67e5\u770b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you're using Create React Native App, console logs already appear in the same terminal output as the packager.")),(0,r.kt)("h2",{id:"\u4f7f\u7528-chrome-\u5f00\u53d1\u8005\u5de5\u5177\u6765\u5728\u8bbe\u5907\u4e0a\u8c03\u8bd5"},"\u4f7f\u7528 Chrome \u5f00\u53d1\u8005\u5de5\u5177\u6765\u5728\u8bbe\u5907\u4e0a\u8c03\u8bd5"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you're using Create React Native App, this is configured for you already.")),(0,r.kt)("p",null,"\u5bf9\u4e8e iOS \u771f\u673a\u6765\u8bf4\uff0c\u9700\u8981\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/WebSocket/RCTWebSocketExecutor.m"},(0,r.kt)("inlineCode",{parentName:"a"},"RCTWebSocketExecutor.m")),'\u6587\u4ef6\uff0c\u7136\u540e\u5c06\u5176\u4e2d\u7684"localhost"\u6539\u4e3a\u4f60\u7684\u7535\u8111\u7684 IP \u5730\u5740\uff0c\u6700\u540e\u542f\u7528\u5f00\u53d1\u8005\u83dc\u5355\u4e2d\u7684"Debug JS Remotely"\u9009\u9879\u3002'),(0,r.kt)("p",null,"\u5bf9\u4e8e Android 5.0+\u8bbe\u5907\uff08\u5305\u62ec\u6a21\u62df\u5668\uff09\u6765\u8bf4\uff0c\u5c06\u8bbe\u5907\u901a\u8fc7 USB \u8fde\u63a5\u5230\u7535\u8111\u4e0a\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"http://developer.android.com/tools/help/adb.html"},(0,r.kt)("inlineCode",{parentName:"a"},"adb"),"\u547d\u4ee4\u884c\u5de5\u5177"),"\u6765\u8bbe\u5b9a\u4ece\u8bbe\u5907\u5230\u7535\u8111\u7684\u7aef\u53e3\u8f6c\u53d1\uff1a"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"adb reverse tcp:8081 tcp:8081")),(0,r.kt)("p",null,'\u5982\u679c\u8bbe\u5907 Android \u7248\u672c\u5728 5.0 \u4ee5\u4e0b\uff0c\u5219\u53ef\u4ee5\u5728\u5f00\u53d1\u8005\u83dc\u5355\u4e2d\u9009\u62e9"Dev Settings - Debug server host for device"\uff0c\u7136\u540e\u5728\u5176\u4e2d\u586b\u5165\u7535\u8111\u7684\u201dIP \u5730\u5740:\u7aef\u53e3\u201c\u3002'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5728 Chrome \u8c03\u8bd5\u65f6\u9047\u5230\u4e00\u4e9b\u95ee\u9898\uff0c\u90a3\u6709\u53ef\u80fd\u662f\u67d0\u4e9b Chrome \u7684\u63d2\u4ef6\u5f15\u8d77\u7684\u3002\u8bd5\u7740\u7981\u7528\u6240\u6709\u7684\u63d2\u4ef6\uff0c\u7136\u540e\u9010\u4e2a\u542f\u7528\uff0c\u4ee5\u786e\u5b9a\u662f\u5426\u67d0\u4e2a\u63d2\u4ef6\u5f71\u54cd\u5230\u4e86\u8c03\u8bd5\u3002")),(0,r.kt)("h2",{id:"\u8c03\u8bd5\u539f\u751f\u4ee3\u7801"},"\u8c03\u8bd5\u539f\u751f\u4ee3\u7801"),(0,r.kt)("p",null,"\u5728\u548c\u539f\u751f\u4ee3\u7801\u6253\u4ea4\u9053\u65f6\uff08\u6bd4\u5982\u7f16\u5199\u539f\u751f\u6a21\u5757\uff09\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece Android Studio \u6216\u662f Xcode \u4e2d\u542f\u52a8\u5e94\u7528\uff0c\u5e76\u5229\u7528\u8fd9\u4e9b IDE \u7684\u5185\u7f6e\u529f\u80fd\u6765\u8c03\u8bd5\uff08\u6bd4\u5982\u8bbe\u7f6e\u65ad\u70b9\uff09\u3002\u8fd9\u4e00\u65b9\u9762\u548c\u5f00\u53d1\u539f\u751f\u5e94\u7528\u5e76\u65e0\u4e8c\u81f4\u3002"))}u.isMDXComponent=!0},74759:function(e,t,n){t.Z=n.p+"assets/images/DeveloperMenu-f22b01f374248b3242dfb3a1017f98a8.png"},29692:function(e,t,n){t.Z=n.p+"assets/images/Inspector-4bd1342086bcd964bbd7f82e453743a7.gif"},83686:function(e,t,n){t.Z=n.p+"assets/images/ReactDevTools-46f5369dca7c5f17b9e2390e76968d56.png"},14900:function(e,t,n){t.Z=n.p+"assets/images/ReactDevToolsDollarR-1d3a289a44523b92e252a3c65fb82a83.gif"},85715:function(e,t,n){t.Z=n.p+"assets/images/ReactDevToolsInspector-fb13d6cdad3479437715a25e038cf6f6.gif"}}]);