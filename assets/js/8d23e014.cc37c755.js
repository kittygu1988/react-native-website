"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[20646],{35318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56002:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return u},metadata:function(){return f},toc:function(){return y}});var r=n(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const u={id:"clipboard",title:"\ud83d\udea7 Clipboard"},m=void 0,f={unversionedId:"clipboard",id:"version-0.68/clipboard",title:"\ud83d\udea7 Clipboard",description:"Deprecated. Use one of the community packages instead.",source:"@site/versioned_docs/version-0.68/clipboard.md",sourceDirName:".",slug:"/clipboard",permalink:"/docs/0.68/clipboard",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/clipboard.md",tags:[],version:"0.68",frontMatter:{id:"clipboard",title:"\ud83d\udea7 Clipboard"}},b={},y=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"<code>getString()</code>",id:"getstring",level:3},{value:"<code>setString()</code>",id:"setstring",level:3}],g={toc:y};function k(e){var t,n=e,{components:a}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},g),s),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Deprecated.")," Use one of the ",(0,r.kt)("a",d({parentName:"p"},{href:"https://reactnative.directory/?search=clipboard"}),"community packages")," instead.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Clipboard"),"\u7ec4\u4ef6\u53ef\u4ee5\u5728 iOS \u548c Android \u7684\u526a\u8d34\u677f\u4e2d\u8bfb\u5199\u5185\u5bb9\u3002"),(0,r.kt)("h2",d({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,r.kt)("div",d({},{className:"snack-player","data-snack-name":"Clipboard API Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%0Aimport%20%7B%20SafeAreaView%2C%20View%2C%20Text%2C%20TouchableOpacity%2C%20Clipboard%2C%20StyleSheet%20%7D%20from%20'react-native'%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BcopiedText%2C%20setCopiedText%5D%20%3D%20useState('')%0A%20%20const%20copyToClipboard%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20Clipboard.setString('hello%20world')%0A%20%20%7D%0A%20%20const%20fetchCopiedText%20%3D%20async%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20text%20%3D%20await%20Clipboard.getString()%0A%20%20%20%20setCopiedText(text)%0A%20%20%7D%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7B%7B%20flex%3A%201%20%7D%7D%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20copyToClipboard()%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EClick%20here%20to%20copy%20to%20Clipboard%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CTouchableOpacity%20onPress%3D%7B()%20%3D%3E%20fetchCopiedText()%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%3EView%20copied%20text%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableOpacity%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.copiedText%7D%3E%7BcopiedText%7D%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%0A%7D%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20alignItems%3A%20'center'%0A%20%20%7D%2C%0A%20%20copiedText%3A%20%7B%0A%20%20%20%20marginTop%3A%2010%2C%0A%20%20%20%20color%3A%20'red'%0A%20%20%7D%0A%7D)%0Aexport%20default%20App","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)("hr",null),(0,r.kt)("h1",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,r.kt)("h2",d({},{id:"\u65b9\u6cd5"}),"\u65b9\u6cd5"),(0,r.kt)("h3",d({},{id:"getstring"}),(0,r.kt)("inlineCode",{parentName:"h3"},"getString()")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static getString()\n")),(0,r.kt)("p",null,"\u83b7\u53d6\u526a\u8d34\u677f\u7684\u6587\u672c\u5185\u5bb9\u3002\u8fd4\u56de\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"\uff0c\u7136\u540e\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u8bfb\u53d6\u526a\u8d34\u677f\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"async _getContent() {\n  const content = await Clipboard.getString();\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",d({},{id:"setstring"}),(0,r.kt)("inlineCode",{parentName:"h3"},"setString()")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"static setString(content)\n")),(0,r.kt)("p",null,"\u8bbe\u7f6e\u526a\u8d34\u677f\u7684\u6587\u672c\u5185\u5bb9\uff0c\u7136\u540e\u4f60\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u8bbe\u7f6e\u526a\u8d34\u677f\u5185\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-jsx"}),"_setContent() {\n  Clipboard.setString('hello world');\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53c2\u6570\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u540d\u79f0"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Required"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"content"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Yes"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"The content to be stored in the clipboard")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Notice")),(0,r.kt)("p",null,"Be careful when you're trying to copy to clipboard any data except ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", some data need additional stringification. For example, if you will try to copy array - Android will raise an exception, but iOS will not."))}k.isMDXComponent=!0}}]);