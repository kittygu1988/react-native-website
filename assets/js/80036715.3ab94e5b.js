"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[16582],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=r,h=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26140:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=n(25773),r=n(30808),l=(n(27378),n(35318)),i=["components"],o={id:"layoutevent",title:"\u5e03\u5c40\u4e8b\u4ef6\u5bf9\u8c61"},p=void 0,u={unversionedId:"layoutevent",id:"layoutevent",isDocsHomePage:!1,title:"\u5e03\u5c40\u4e8b\u4ef6\u5bf9\u8c61",description:"LayoutEvent object is returned in the callback as a result of component layout change, for example onLayout in View component.",source:"@site/../cndocs/layoutevent.md",sourceDirName:".",slug:"/layoutevent",permalink:"/docs/next/layoutevent",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/layoutevent.md",version:"current",frontMatter:{id:"layoutevent",title:"\u5e03\u5c40\u4e8b\u4ef6\u5bf9\u8c61"},sidebar:"\u7ec4\u4ef6",previous:{title:"View \u6837\u5f0f\u5c5e\u6027",permalink:"/docs/next/view-style-props"},next:{title:"\u70b9\u51fb\u4e8b\u4ef6\u5bf9\u8c61",permalink:"/docs/next/pressevent"}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"\u5c5e\u6027\u4e0e\u503c",id:"\u5c5e\u6027\u4e0e\u503c",children:[{value:"<code>height</code>",id:"height",children:[]},{value:"<code>width</code>",id:"width",children:[]},{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>target</code>",id:"target",children:[]}]},{value:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"LayoutEvent")," object is returned in the callback as a result of component layout change, for example ",(0,l.kt)("inlineCode",{parentName:"p"},"onLayout")," in ",(0,l.kt)("a",{parentName:"p",href:"view"},"View")," component."),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"{\n    layout: {\n        width: 520,\n        height: 70.5,\n        x: 0,\n        y: 42.5\n    },\n    target: 1127\n}\n")),(0,l.kt)("h2",{id:"\u5c5e\u6027\u4e0e\u503c"},"\u5c5e\u6027\u4e0e\u503c"),(0,l.kt)("h3",{id:"height"},(0,l.kt)("inlineCode",{parentName:"h3"},"height")),(0,l.kt)("p",null,"Height of the component after the layout changes."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"width"},(0,l.kt)("inlineCode",{parentName:"h3"},"width")),(0,l.kt)("p",null,"Width of the component after the layout changes."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"x"},(0,l.kt)("inlineCode",{parentName:"h3"},"x")),(0,l.kt)("p",null,"Component X coordinate inside the parent component."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"y"},(0,l.kt)("inlineCode",{parentName:"h3"},"y")),(0,l.kt)("p",null,"Component Y coordinate inside the parent component."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h3",{id:"target"},(0,l.kt)("inlineCode",{parentName:"h3"},"target")),(0,l.kt)("p",null,"The node id of the element receiving the PressEvent."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"number, ",(0,l.kt)("inlineCode",{parentName:"td"},"null"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"No")))),(0,l.kt)("h2",{id:"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"},"\u88ab\u4e0b\u5217\u7ec4\u4ef6\u5f15\u7528"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"image"},(0,l.kt)("inlineCode",{parentName:"a"},"Image"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"pressable"},(0,l.kt)("inlineCode",{parentName:"a"},"Pressable"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"scrollview"},(0,l.kt)("inlineCode",{parentName:"a"},"ScrollView"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"text"},(0,l.kt)("inlineCode",{parentName:"a"},"Text"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"textinput"},(0,l.kt)("inlineCode",{parentName:"a"},"TextInput"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"touchablewithoutfeedback"},(0,l.kt)("inlineCode",{parentName:"a"},"TouchableWithoutFeedback"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"view"},(0,l.kt)("inlineCode",{parentName:"a"},"View")))))}m.isMDXComponent=!0}}]);