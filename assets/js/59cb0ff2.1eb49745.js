"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[63013],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},45981:function(e,t,n){var a=n(161),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",i=r?"macos":o?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:i,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},64535:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(27378),r=n(84956);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(38944),i="tabItem_c0e5",c="tabItemActive_28AG";var s=37,u=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,p=e.groupId,m=e.className,h=o(),f=h.tabGroupChoices,v=h.setTabGroupChoices,k=(0,a.useState)(r),g=k[0],b=k[1],y=a.Children.toArray(e.children),N=[];if(null!=p){var w=f[p];null!=w&&w!==g&&d.some((function(e){return e.value===w}))&&b(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=d[n].value;b(a),null!=p&&(v(p,a),setTimeout((function(){var e,n,a,r,o,l,i,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,s=l.innerWidth,n>=0&&o<=s&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case s:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},84956:function(e,t,n){var a=(0,n(27378).createContext)(void 0);t.Z=a},13060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(25773),r=n(30808),o=(n(27378),n(35318)),l=n(64535),i=n(70517),c=n(45981),s=["components"],u={id:"appearance",title:"Appearance"},d=void 0,p={unversionedId:"appearance",id:"version-0.65/appearance",isDocsHomePage:!1,title:"Appearance",description:"`jsx",source:"@site/versioned_docs/version-0.65/appearance.md",sourceDirName:".",slug:"/appearance",permalink:"/docs/appearance",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/appearance.md",version:"0.65",frontMatter:{id:"appearance",title:"Appearance"},sidebar:"version-0.65/api",previous:{title:"Animated.ValueXY",permalink:"/docs/animatedvaluexy"},next:{title:"AppRegistry",permalink:"/docs/appregistry"}},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>getColorScheme()</code>",id:"getcolorscheme",children:[]},{value:"<code>addChangeListener()</code>",id:"addchangelistener",children:[]},{value:"<code>removeChangeListener()</code>",id:"removechangelistener",children:[]}]}],h={toc:m};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Appearance } from 'react-native';\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Appearance")," module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark)."),(0,o.kt)("h4",{id:"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"},"\u7ed9\u5f00\u53d1\u8005\u7684\u63d0\u793a"),(0,o.kt)(l.Z,{groupId:"guide",defaultValue:"web",values:c.Z.getDevNotesTabs(["android","ios","web"]),mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"web",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Appearance")," API is inspired by the ",(0,o.kt)("a",{parentName:"p",href:"https://drafts.csswg.org/mediaqueries-5/"},"Media Queries draft")," from the W3C. The color scheme preference is modeled after the ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme"},(0,o.kt)("inlineCode",{parentName:"a"},"prefers-color-scheme")," CSS media feature"),"."))),(0,o.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/look-and-feel/darktheme"},"Dark theme")," preference on Android 10 (API level 29) devices and higher."))),(0,o.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The color scheme preference will map to the user's Light or ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/dark-mode/"},"Dark Mode")," preference on iOS 13 devices and higher.")))),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Appearance")," \u6a21\u5757\u7528\u6765\u68c0\u6d4b\u7528\u6237\u662f\u5426\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\uff08\u591c\u95f4\u6a21\u5f0f\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const colorScheme = Appearance.getColorScheme();\nif (colorScheme === 'dark') {\n  // \u7528\u6237\u5f00\u542f\u4e86\u6697\u8272\u6a21\u5f0f\n}\n")),(0,o.kt)("p",null,"Although the color scheme is available immediately, this may change (e.g. scheduled color scheme change at sunrise or sunset). Any rendering logic or styles that depend on the user preferred color scheme should try to call this function on every render, rather than caching the value. For example, you may use the ",(0,o.kt)("a",{parentName:"p",href:"usecolorscheme"},(0,o.kt)("inlineCode",{parentName:"a"},"useColorScheme"))," React hook as it provides and subscribes to color scheme updates, or you may use inline styles rather than setting a value in a ",(0,o.kt)("inlineCode",{parentName:"p"},"StyleSheet"),"."),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,o.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,o.kt)("h3",{id:"getcolorscheme"},(0,o.kt)("inlineCode",{parentName:"h3"},"getColorScheme()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static getColorScheme()\n")),(0,o.kt)("p",null,"Indicates the current user preferred color scheme. The value may be updated later, either through direct user action (e.g. theme selection in device settings) or on a schedule (e.g. light and dark themes that follow the day/night cycle)."),(0,o.kt)("p",null,"Supported color schemes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53d6\u503c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"light"')),(0,o.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u9009\u62e9\u4e86\u6d45\u8272\u6a21\u5f0f\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"dark"')),(0,o.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u9009\u62e9\u4e86\u6df1\u8272\u6a21\u5f0f\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"null")),(0,o.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u6ca1\u6709\u660e\u786e\u9009\u62e9\u67d0\u79cd\u6a21\u5f0f\u3002")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u5728\u4f7f\u7528 chrome \u8c03\u8bd5\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"getColorScheme()"),"\u5c06\u59cb\u7ec8\u8fd4\u56de",(0,o.kt)("inlineCode",{parentName:"p"},"light"),"\u3002")),(0,o.kt)("p",null,"\u66f4\u591a\u8bf4\u660e\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"usecolorscheme"},(0,o.kt)("inlineCode",{parentName:"a"},"useColorScheme")),"\u3002"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"addchangelistener"},(0,o.kt)("inlineCode",{parentName:"h3"},"addChangeListener()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static addChangeListener(listener)\n")),(0,o.kt)("p",null,"Add an event handler that is fired when appearance preferences change."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"removechangelistener"},(0,o.kt)("inlineCode",{parentName:"h3"},"removeChangeListener()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"static removeChangeListener(listener)\n")),(0,o.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u51fd\u6570\u3002"))}f.isMDXComponent=!0}}]);