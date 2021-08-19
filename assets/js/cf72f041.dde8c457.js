"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[68921],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,k=m["".concat(c,".").concat(u)]||m[u]||s[u]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82307:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var a=n(25773),i=n(30808),r=(n(27378),n(35318)),o=["components"],d={id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"},c=void 0,l={unversionedId:"datepickerandroid",id:"version-0.63/datepickerandroid",isDocsHomePage:!1,title:"\ud83d\udea7 DatePickerAndroid",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/datetimepicker instead.",source:"@site/versioned_docs/version-0.63/datepickerandroid.md",sourceDirName:".",slug:"/datepickerandroid",permalink:"/docs/0.63/datepickerandroid",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/datepickerandroid.md",version:"0.63",frontMatter:{id:"datepickerandroid",title:"\ud83d\udea7 DatePickerAndroid"}},p=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u67e5\u770b\u65b9\u6cd5",id:"\u67e5\u770b\u65b9\u6cd5",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>open()</code>",id:"open",children:[]},{value:"<code>dateSetAction()</code>",id:"datesetaction",children:[]},{value:"<code>dismissedAction()</code>",id:"dismissedaction",children:[]}]}],s={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-datetimepicker"},"@react-native-community/datetimepicker")," instead.")),(0,r.kt)("p",null,"\u672c\u7ec4\u4ef6\u4f1a\u6253\u5f00\u4e00\u4e2a\u6807\u51c6\u7684 Android \u65e5\u671f\u9009\u62e9\u5668\u7684\u5bf9\u8bdd\u6846\u3002"),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"try {\n  const {action, year, month, day} = await DatePickerAndroid.open({\n    // \u8981\u8bbe\u7f6e\u9ed8\u8ba4\u503c\u4e3a\u4eca\u5929\u7684\u8bdd\uff0c\u4f7f\u7528`new Date()`\u5373\u53ef\u3002\n    // \u4e0b\u9762\u663e\u793a\u7684\u4f1a\u662f2020\u5e745\u670825\u65e5\u3002\u6708\u4efd\u662f\u4ece0\u5f00\u59cb\u7b97\u7684\u3002\n    date: new Date(2020, 4, 25)\n  });\n  if (action !== DatePickerAndroid.dismissedAction) {\n    // \u8fd9\u91cc\u5f00\u59cb\u53ef\u4ee5\u5904\u7406\u7528\u6237\u9009\u597d\u7684\u5e74\u6708\u65e5\u4e09\u4e2a\u53c2\u6570\uff1ayear, month (0-11), day\n  }\n} catch ({code, message}) {\n  console.warn('Cannot open date picker', message);\n}\n")),(0,r.kt)("h3",{id:"\u67e5\u770b\u65b9\u6cd5"},"\u67e5\u770b\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.63/datepickerandroid#open"},(0,r.kt)("inlineCode",{parentName:"a"},"open"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.63/datepickerandroid#datesetaction"},(0,r.kt)("inlineCode",{parentName:"a"},"dateSetAction"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/0.63/datepickerandroid#dismissedaction"},(0,r.kt)("inlineCode",{parentName:"a"},"dismissedAction")))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"open"},(0,r.kt)("inlineCode",{parentName:"h3"},"open()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static open(options)\n")),(0,r.kt)("p",null,"\u6253\u5f00\u4e00\u4e2a\u6807\u51c6\u7684 Android \u65e5\u671f\u9009\u62e9\u5668\u7684\u5bf9\u8bdd\u6846\u3002"),(0,r.kt)("p",null,"\u53ef\u9009\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"options"),"\u5bf9\u8c61\u7684 key \u503c\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"date")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),"\u5bf9\u8c61\u6216\u6beb\u79d2\u65f6\u95f4\u6233) - \u9ed8\u8ba4\u663e\u793a\u7684\u65e5\u671f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minDate")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),"\u5bf9\u8c61\u6216\u6beb\u79d2\u65f6\u95f4\u6233) - \u53ef\u9009\u7684\u6700\u5c0f\u65e5\u671f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"maxDate")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Date"),"\u5bf9\u8c61\u6216\u6beb\u79d2\u65f6\u95f4\u6233) - \u53ef\u9009\u7684\u6700\u5927\u65e5\u671f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mode")," (",(0,r.kt)("inlineCode",{parentName:"li"},"enum('calendar', 'spinner', 'default')"),") - \u8bbe\u7f6e\u9009\u62e9\u5668\u7684\u6a21\u5f0f\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"'calendar': Show a date picker in calendar mode."),(0,r.kt)("li",{parentName:"ul"},"'spinner': Show a date picker in spinner mode."),(0,r.kt)("li",{parentName:"ul"},"'default': Show a default native date picker(spinner/calendar) based on android versions.")))),(0,r.kt)("p",null,"\u5728\u7528\u6237\u9009\u597d\u65e5\u671f\u540e\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u56de\u8c03\u53c2\u6570\u4e3a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"action"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"month")," (0-11), ",(0,r.kt)("inlineCode",{parentName:"p"},"day"),"\u3002\u5982\u679c\u7528\u6237\u53d6\u6d88\u4e86\u5bf9\u8bdd\u6846\uff0cPromise \u4ecd\u7136\u4f1a\u6267\u884c\uff0c\u8fd4\u56de\u7684 action \u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"DatePickerAndroid.dismissedAction"),"\uff0c\u5176\u4ed6\u51e0\u9879\u53c2\u6570\u5219\u4e3a undefined\u3002\u6240\u4ee5\u8bf7\u5728\u4f7f\u7528\u5176\u4ed6\u503c\u4e4b\u524d",(0,r.kt)("strong",{parentName:"p"},"\u52a1\u5fc5"),"\u5148\u68c0\u67e5",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"\u7684\u503c\u662f\u5426\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"DatePickerAndroid.dateSetAction"),"\u3002"),(0,r.kt)("p",null,"Note the native date picker dialog has some UI glitches on Android 4 and lower when using the ",(0,r.kt)("inlineCode",{parentName:"p"},"minDate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"maxDate")," options."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"datesetaction"},(0,r.kt)("inlineCode",{parentName:"h3"},"dateSetAction()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static dateSetAction()\n")),(0,r.kt)("p",null,"\u5df2\u9009\u4e2d\u4e00\u4e2a\u65e5\u671f\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dismissedaction"},(0,r.kt)("inlineCode",{parentName:"h3"},"dismissedAction()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"static dismissedAction()\n")),(0,r.kt)("p",null,"\u5bf9\u8bdd\u6846\u5df2\u88ab\u53d6\u6d88\u3002"),(0,r.kt)("hr",null),(0,r.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(100.00%)"))}m.isMDXComponent=!0}}]);