"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[16668],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45981:function(e,t,n){var a=n(161),r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),i=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),l=r?"ios":"android",o=r?"macos":i?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:l,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,n){var a=n(27378);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},64535:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(27378),r=n(84956);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(38944),o="tabItem_c0e5",p="tabItemActive_28AG";var s=37,c=39;var d=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,d=e.values,u=e.groupId,m=e.className,v=i(),h=v.tabGroupChoices,A=v.setTabGroupChoices,f=(0,a.useState)(r),k=f[0],b=f[1],g=a.Children.toArray(e.children),y=[];if(null!=u){var C=h[u];null!=C&&C!==k&&d.some((function(e){return e.value===C}))&&b(C)}var S=function(e){var t=e.currentTarget,n=y.indexOf(t),a=d[n].value;b(a),null!=u&&(A(u,a),setTimeout((function(){var e,n,a,r,i,l,o,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,s=l.innerWidth,n>=0&&i<=s&&r<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case c:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var r=y.indexOf(e.target)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},d.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:w,onFocus:S,onClick:S},n)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},84956:function(e,t,n){var a=(0,n(27378).createContext)(void 0);t.Z=a},78630:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return m},default:function(){return h}});var a=n(25773),r=n(30808),i=(n(27378),n(35318)),l=n(64535),o=n(70517),p=n(45981),s=["components"],c={id:"appstate",title:"AppState"},d=void 0,u={unversionedId:"appstate",id:"version-0.63/appstate",isDocsHomePage:!1,title:"AppState",description:"AppState\u80fd\u544a\u8bc9\u4f60\u5e94\u7528\u5f53\u524d\u662f\u5728\u524d\u53f0\u8fd8\u662f\u5728\u540e\u53f0\uff0c\u5e76\u4e14\u80fd\u5728\u72b6\u6001\u53d8\u5316\u7684\u65f6\u5019\u901a\u77e5\u4f60\u3002",source:"@site/versioned_docs/version-0.63/appstate.md",sourceDirName:".",slug:"/appstate",permalink:"/docs/0.63/appstate",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/appstate.md",version:"0.63",frontMatter:{id:"appstate",title:"AppState"},sidebar:"version-0.63/api",previous:{title:"AppRegistry",permalink:"/docs/0.63/appregistry"},next:{title:"DevSettings",permalink:"/docs/0.63/devsettings"}},m=[{value:"App States",id:"app-states",children:[]},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",children:[{value:"<code>blur</code>",id:"blur",children:[]},{value:"<code>change</code>",id:"change",children:[]},{value:"<code>focus</code>",id:"focus",children:[]},{value:"<code>memoryWarning</code>",id:"memorywarning",children:[]}]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"<code>currentState</code>",id:"currentstate",children:[]}]}],v={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AppState"),"\u80fd\u544a\u8bc9\u4f60\u5e94\u7528\u5f53\u524d\u662f\u5728\u524d\u53f0\u8fd8\u662f\u5728\u540e\u53f0\uff0c\u5e76\u4e14\u80fd\u5728\u72b6\u6001\u53d8\u5316\u7684\u65f6\u5019\u901a\u77e5\u4f60\u3002"),(0,i.kt)("p",null,"AppState \u901a\u5e38\u5728\u5904\u7406\u63a8\u9001\u901a\u77e5\u7684\u65f6\u5019\u7528\u6765\u51b3\u5b9a\u5185\u5bb9\u548c\u5bf9\u5e94\u7684\u884c\u4e3a\u3002"),(0,i.kt)("h3",{id:"app-states"},"App States"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"active")," - \u5e94\u7528\u6b63\u5728\u524d\u53f0\u8fd0\u884c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"background")," - \u5e94\u7528\u6b63\u5728\u540e\u53f0\u8fd0\u884c\u3002\u7528\u6237\u53ef\u80fd\u9762\u5bf9\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728\u522b\u7684\u5e94\u7528\u4e2d"),(0,i.kt)("li",{parentName:"ul"},"\u505c\u7559\u5728\u684c\u9762"),(0,i.kt)("li",{parentName:"ul"},"\u5bf9 Android \u6765\u8bf4\u8fd8\u53ef\u80fd\u5904\u5728\u53e6\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"li"},"Activity"),"\u4e2d\uff08\u5373\u4fbf\u662f\u7531\u4f60\u7684\u5e94\u7528\u62c9\u8d77\u7684\uff09"))),(0,i.kt)("li",{parentName:"ul"},"[iOS]"," ",(0,i.kt)("inlineCode",{parentName:"li"},"inactive")," - \u6b64\u72b6\u6001\u8868\u793a\u5e94\u7528\u6b63\u5728\u524d\u540e\u53f0\u7684\u5207\u6362\u8fc7\u7a0b\u4e2d\uff0c\u6216\u662f\u5904\u5728\u7cfb\u7edf\u7684\u591a\u4efb\u52a1\u89c6\u56fe\uff0c\u53c8\u6216\u662f\u5904\u5728\u6765\u7535\u72b6\u6001\u4e2d\u3002")),(0,i.kt)("p",null,"\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u9605\u8bfb",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/app_and_scenes/managing_your_app_s_life_cycle"},"Apple \u7684\u6587\u6863"),"\u3002"),(0,i.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,i.kt)("p",null,"\u8981\u83b7\u53d6\u5f53\u524d\u7684\u72b6\u6001\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"AppState.currentState"),"\uff0c\u8fd9\u4e2a\u53d8\u91cf\u4f1a\u4e00\u76f4\u4fdd\u6301\u66f4\u65b0\u3002\u4e0d\u8fc7\u5728\u542f\u52a8\u7684\u8fc7\u7a0b\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"currentState"),"\u53ef\u80fd\u4e3a null\uff0c\u76f4\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"AppState"),"\u4ece\u539f\u751f\u4ee3\u7801\u5f97\u5230\u901a\u77e5\u4e3a\u6b62\u3002"),(0,i.kt)(l.Z,{groupId:"syntax",defaultValue:p.Z.defaultSyntax,values:p.Z.syntax,mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"AppState Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useRef%2C%20useState%2C%20useEffect%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20AppStateExample%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20appState%20%3D%20useRef(AppState.currentState)%3B%0A%20%20const%20%5BappStateVisible%2C%20setAppStateVisible%5D%20%3D%20useState(appState.current)%3B%0A%0A%20%20useEffect(()%20%3D%3E%20%7B%0A%20%20%20%20AppState.addEventListener(%22change%22%2C%20_handleAppStateChange)%3B%0A%0A%20%20%20%20return%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20AppState.removeEventListener(%22change%22%2C%20_handleAppStateChange)%3B%0A%20%20%20%20%7D%3B%0A%20%20%7D%2C%20%5B%5D)%3B%0A%0A%20%20const%20_handleAppStateChange%20%3D%20(nextAppState)%20%3D%3E%20%7B%0A%20%20%20%20if%20(%0A%20%20%20%20%20%20appState.current.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20appState.current%20%3D%20nextAppState%3B%0A%20%20%20%20setAppStateVisible(appState.current)%3B%0A%20%20%20%20console.log(%22AppState%22%2C%20appState.current)%3B%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7BappStateVisible%7D%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,i.kt)("p",null,"If you don't want to see the AppState update from ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"inactive")," on iOS you can remove the state variable and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"appState.current")," value.")),(0,i.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,i.kt)("div",{className:"snack-player","data-snack-name":"AppState Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20AppState%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20AppStateExample%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20appState%3A%20AppState.currentState%0A%20%20%7D%3B%0A%0A%20%20componentDidMount()%20%7B%0A%20%20%20%20AppState.addEventListener(%22change%22%2C%20this._handleAppStateChange)%3B%0A%20%20%7D%0A%0A%20%20componentWillUnmount()%20%7B%0A%20%20%20%20AppState.removeEventListener(%22change%22%2C%20this._handleAppStateChange)%3B%0A%20%20%7D%0A%0A%20%20_handleAppStateChange%20%3D%20nextAppState%20%3D%3E%20%7B%0A%20%20%20%20if%20(%0A%20%20%20%20%20%20this.state.appState.match(%2Finactive%7Cbackground%2F)%20%26%26%0A%20%20%20%20%20%20nextAppState%20%3D%3D%3D%20%22active%22%0A%20%20%20%20)%20%7B%0A%20%20%20%20%20%20console.log(%22App%20has%20come%20to%20the%20foreground!%22)%3B%0A%20%20%20%20%7D%0A%20%20%20%20this.setState(%7B%20appState%3A%20nextAppState%20%7D)%3B%0A%20%20%7D%3B%0A%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CText%3ECurrent%20state%20is%3A%20%7Bthis.state.appState%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20AppStateExample%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,i.kt)("p",null,'\u4e0a\u9762\u7684\u8fd9\u4e2a\u4f8b\u5b50\u53ea\u4f1a\u663e\u793a"Current state is: active"\uff0c\u8fd9\u662f\u56e0\u4e3a\u5e94\u7528\u53ea\u6709\u5728',(0,i.kt)("inlineCode",{parentName:"p"},"active"),"\u72b6\u6001\u4e0b\u624d\u80fd\u88ab\u7528\u6237\u770b\u5230\u3002\u5e76\u4e14 null \u72b6\u6001\u53ea\u4f1a\u5728\u4e00\u5f00\u59cb\u7684\u4e00\u77ac\u95f4\u51fa\u73b0\u3002If you want to experiment with the code we recommend to use your own device instead of embedded preview."),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,i.kt)("h2",{id:"\u4e8b\u4ef6"},"\u4e8b\u4ef6"),(0,i.kt)("h3",{id:"blur"},(0,i.kt)("inlineCode",{parentName:"h3"},"blur")),(0,i.kt)("p",null,"[Android only]"," Received when the user is not actively interacting with the app. Useful in situations when the user pulls down the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/topics/ui/notifiers/notifications#bar-and-drawer"},"notification drawer"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"AppState")," won't change but the ",(0,i.kt)("inlineCode",{parentName:"p"},"blur")," event will get fired."),(0,i.kt)("h3",{id:"change"},(0,i.kt)("inlineCode",{parentName:"h3"},"change")),(0,i.kt)("p",null,"This even is received when the app state has changed. The listener is called with one of ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.63/appstate#app-states"},"the current app state values"),"."),(0,i.kt)("h3",{id:"focus"},(0,i.kt)("inlineCode",{parentName:"h3"},"focus")),(0,i.kt)("p",null,"[Android only]"," Received when the app gains focus (the user is interacting with the app)."),(0,i.kt)("h3",{id:"memorywarning"},(0,i.kt)("inlineCode",{parentName:"h3"},"memoryWarning")),(0,i.kt)("p",null,"This event is used in the need of throwing memory warning or releasing it."),(0,i.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,i.kt)("h3",{id:"addeventlistener"},(0,i.kt)("inlineCode",{parentName:"h3"},"addEventListener()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"addEventListener(type, handler);\n")),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\uff0c\u7528\u4e8e\u76d1\u542c\u5e94\u7528\u72b6\u6001\u7684\u53d8\u5316\u3002type \u53c2\u6570\u5e94\u586b",(0,i.kt)("inlineCode",{parentName:"p"},"change"),"\u3002"),(0,i.kt)("p",null,"TODO: now that AppState is a subclass of NativeEventEmitter, we could deprecate ",(0,i.kt)("inlineCode",{parentName:"p"},"addEventListener")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"removeEventListener")," and use ",(0,i.kt)("inlineCode",{parentName:"p"},"addListener")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"listener.remove()")," directly. That will be a breaking change though, as both the method and event names are different (addListener events are currently required to be globally unique)."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removeeventlistener"},(0,i.kt)("inlineCode",{parentName:"h3"},"removeEventListener()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"removeEventListener(type, handler);\n")),(0,i.kt)("p",null,"\u79fb\u9664\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\u3002type \u53c2\u6570\u5e94\u586b",(0,i.kt)("inlineCode",{parentName:"p"},"change"),"\u3002"),(0,i.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,i.kt)("h3",{id:"currentstate"},(0,i.kt)("inlineCode",{parentName:"h3"},"currentState")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"AppState.currentState;\n")),(0,i.kt)("hr",null),(0,i.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm9565-sunnylqm435"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(95.65%), ",(0,i.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(4.35%)"))}h.isMDXComponent=!0}}]);