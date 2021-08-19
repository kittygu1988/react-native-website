"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[26222],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(27378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=i,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5596:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=r(25773),i=r(30808),a=(r(27378),r(35318)),o=["components"],c={id:"imageeditor",title:"\ud83d\udea7 ImageEditor"},l=void 0,p={unversionedId:"imageeditor",id:"version-0.63/imageeditor",isDocsHomePage:!1,title:"\ud83d\udea7 ImageEditor",description:"\u5df2\u8fc7\u65f6\u3002 \u8bf7\u4f7f\u7528@react-native-community/image-editor\u4ee3\u66ff\u3002",source:"@site/versioned_docs/version-0.63/imageeditor.md",sourceDirName:".",slug:"/imageeditor",permalink:"/docs/0.63/imageeditor",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/imageeditor.md",version:"0.63",frontMatter:{id:"imageeditor",title:"\ud83d\udea7 ImageEditor"}},u=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"<code>cropImage()</code>",id:"cropimage",children:[]},{value:"cropData",id:"cropdata",children:[]}]}],m={toc:u};function s(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," \u8bf7\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-image-editor"},"@react-native-community/image-editor"),"\u4ee3\u66ff\u3002")),(0,a.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,a.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,a.kt)("h3",{id:"cropimage"},(0,a.kt)("inlineCode",{parentName:"h3"},"cropImage()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"static cropImage(uri, cropData, success, failure)\n")),(0,a.kt)("p",null,"\u6839\u636e\u6307\u5b9a\u7684 URI \u53c2\u6570\u526a\u88c1\u5bf9\u5e94\u7684\u56fe\u7247\u3002\u5982\u679c URI \u6307\u5411\u4e00\u4e2a\u8fdc\u7a0b\u56fe\u7247\uff0c\u5219\u9996\u5148\u4f1a\u81ea\u52a8\u4e0b\u8f7d\u8be5\u56fe\u7247\u3002\u5982\u679c\u56fe\u7247\u65e0\u6cd5\u4e0b\u8f7d\u6216\u8bfb\u53d6\uff0c\u5219\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"failure"),"\u56de\u8c03\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u526a\u88c1\u6210\u529f\u5b8c\u6210\uff0c\u5219\u526a\u88c1\u597d\u7684\u56fe\u7247\u4f1a\u88ab\u5b58\u653e\u5728",(0,a.kt)("a",{parentName:"p",href:"imagestore.md"},(0,a.kt)("inlineCode",{parentName:"a"},"ImageStore")),"\u4e2d\uff0c\u540c\u65f6",(0,a.kt)("inlineCode",{parentName:"p"},"success"),"\u56de\u8c03\u51fd\u6570\u4e2d\u8fd4\u56de\u7684 URI \u53c2\u6570\u4f1a\u6307\u5411 ImageStore \u4e2d\u7684\u6b64\u56fe\u7247\u3002\u8bf7\u8bb0\u5f97\u5728\u5b8c\u6210\u5904\u7406\u903b\u8f91\u540e\u5220\u9664 ImageStore \u4e2d\u7684\u56fe\u7247\u3002"),(0,a.kt)("h3",{id:"cropdata"},"cropData"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"offset")," - The top-left corner of the cropped image, specified in the original image's coordinate space"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"size")," - Size (dimensions) of the cropped image"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"displaySize (optional)")," - Size to which you want to scale the cropped image"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"resizeMode (optional)")," - Resizing mode to use when scaling the image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'cropData = {\n  offset: { x: number, y: number },\n  size: { width: number, height: number },\n  displaySize: { width: number, height: number },\n  resizeMode: "contain/cover/stretch",\n};\n')),(0,a.kt)("hr",null),(0,a.kt)("h5",{id:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm10000"},"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",{parentName:"h5",href:"https://github.com/search?q=sunnylqm&type=Users"},"sunnylqm"),"(100.00%)"))}s.isMDXComponent=!0}}]);