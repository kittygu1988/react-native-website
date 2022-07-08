"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[92655],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),b=a,v=s["".concat(l,".").concat(b)]||s[b]||f[b]||c;return r?n.createElement(v,i(i({ref:t},u),{},{components:r})):n.createElement(v,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},19431:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return b},default:function(){return y},frontMatter:function(){return s},metadata:function(){return v},toc:function(){return m}});var n=r(35318),a=Object.defineProperty,c=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&u(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&u(e,r,t[r]);return e};const s={id:"fabric-renderer",title:"Fabric \u6e32\u67d3\u5668"},b=void 0,v={unversionedId:"fabric-renderer",id:"version-0.68/fabric-renderer",title:"Fabric \u6e32\u67d3\u5668",description:"Fabric \u662f React Native \u65b0\u67b6\u6784\u7684\u6e32\u67d3\u7cfb\u7edf\uff0c\u662f\u4ece\u8001\u67b6\u6784\u7684\u6e32\u67d3\u7cfb\u7edf\u6f14\u53d8\u800c\u6765\u7684\u3002\u6838\u5fc3\u539f\u7406\u662f\u5728 C++ \u5c42\u7edf\u4e00\u66f4\u591a\u7684\u6e32\u67d3\u903b\u8f91\uff0c\u63d0\u5347\u4e0e\u5bbf\u4e3b\u5e73\u53f0\uff08host platforms\uff09\u4e92\u64cd\u4f5c\u6027\uff0c\u5e76\u4e3a React Native \u89e3\u9501\u66f4\u591a\u80fd\u529b\u3002\u5176\u7814\u53d1\u59cb\u4e8e 2018 \u5e74\u3002\u4ece 2021 \u5e74\u5f00\u59cb\uff0c Facebook App \u4e2d\u7684 React Native \u542f\u7528\u4e86\u65b0\u7684\u6e32\u67d3\u5668\u3002",source:"@site/versioned_docs/version-0.68/fabric-renderer.md",sourceDirName:".",slug:"/fabric-renderer",permalink:"/docs/0.68/fabric-renderer",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/fabric-renderer.md",tags:[],version:"0.68",frontMatter:{id:"fabric-renderer",title:"Fabric \u6e32\u67d3\u5668"},sidebar:"\u67b6\u6784",previous:{title:"\u67b6\u6784\u6982\u89c8",permalink:"/docs/0.68/architecture-overview"},next:{title:"\u6e32\u67d3\uff0c\u63d0\u4ea4\u4e0e\u6302\u8f7d\uff08\u6e32\u67d3\u6d41\u6c34\u7ebf\uff09",permalink:"/docs/0.68/render-pipeline"}},d={},m=[{value:"\u65b0\u6e32\u67d3\u5668\u7684\u521d\u8877\u548c\u6536\u76ca",id:"\u65b0\u6e32\u67d3\u5668\u7684\u521d\u8877\u548c\u6536\u76ca",level:2}],k={toc:m};function y(e){var t,r=e,{components:a}=r,u=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},k),u),c(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Fabric \u662f React Native \u65b0\u67b6\u6784\u7684\u6e32\u67d3\u7cfb\u7edf\uff0c\u662f\u4ece\u8001\u67b6\u6784\u7684\u6e32\u67d3\u7cfb\u7edf\u6f14\u53d8\u800c\u6765\u7684\u3002\u6838\u5fc3\u539f\u7406\u662f\u5728 C++ \u5c42\u7edf\u4e00\u66f4\u591a\u7684\u6e32\u67d3\u903b\u8f91\uff0c\u63d0\u5347\u4e0e\u5bbf\u4e3b\u5e73\u53f0\uff08host platforms\uff09\u4e92\u64cd\u4f5c\u6027\uff0c\u5e76\u4e3a React Native \u89e3\u9501\u66f4\u591a\u80fd\u529b\u3002\u5176\u7814\u53d1\u59cb\u4e8e 2018 \u5e74\u3002\u4ece 2021 \u5e74\u5f00\u59cb\uff0c Facebook App \u4e2d\u7684 React Native \u542f\u7528\u4e86\u65b0\u7684\u6e32\u67d3\u5668\u3002"),(0,n.kt)("p",null,"\u8be5\u6587\u6863\u7b80\u4ecb\u4e86\u65b0\u6e32\u67d3\u5668\uff08new renderer\uff09\u53ca\u5176\u6838\u5fc3\u6982\u5ff5\uff0c\u5b83\u4e0d\u5305\u62ec\u5e73\u53f0\u7ec6\u8282\u548c\u4efb\u4f55\u4ee3\u7801\u7ec6\u8282\uff0c\u5b83\u4ecb\u7ecd\u4e86\u6838\u5fc3\u6982\u5ff5\u3001\u521d\u8877\u3001\u6536\u76ca\u548c\u4e0d\u540c\u573a\u666f\u7684\u6e32\u67d3\u6d41\u7a0b\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u540d\u8bcd\u89e3\u91ca\uff1a"),(0,n.kt)("p",{parentName:"blockquote"},"\u5bbf\u4e3b\u5e73\u53f0\uff08Host platform\uff09\uff1aReact Native \u5d4c\u5165\u7684\u5e73\u53f0\uff0c\u6bd4\u5982 Android\u3001iOS\u3001Windows\u3001macOS\u3002"),(0,n.kt)("p",{parentName:"blockquote"},"Fabric \u6e32\u67d3\u5668\uff08Fabric Renderer\uff09\uff1aReact Native \u6267\u884c\u7684 React \u6846\u67b6\u4ee3\u7801\uff0c\u548c React \u5728 Web \u4e2d\u6267\u884c\u4ee3\u7801\u662f\u540c\u4e00\u4efd\u3002\u4f46\u662f\uff0cReact Native \u6e32\u67d3\u7684\u662f\u901a\u7528\u5e73\u53f0\u89c6\u56fe\uff08\u5bbf\u4e3b\u89c6\u56fe\uff09\u800c\u4e0d\u662f DOM \u8282\u70b9\uff08\u53ef\u4ee5\u8ba4\u4e3a DOM \u662f Web \u7684\u5bbf\u4e3b\u89c6\u56fe\uff09\u3002 Fabric \u6e32\u67d3\u5668\u4f7f\u5f97\u6e32\u67d3\u5bbf\u4e3b\u89c6\u56fe\u53d8\u5f97\u53ef\u884c\u3002Fabric \u8ba9 React \u4e0e\u5404\u4e2a\u5e73\u53f0\u76f4\u63a5\u901a\u4fe1\u5e76\u7ba1\u7406\u5176\u5bbf\u4e3b\u89c6\u56fe\u5b9e\u4f8b\u3002 Fabric \u6e32\u67d3\u5668\u5b58\u5728\u4e8e JavaScript \u4e2d\uff0c\u5e76\u4e14\u5b83\u8c03\u7528\u7684\u662f\u7531 C++ \u4ee3\u7801\u66b4\u9732\u7684\u63a5\u53e3\u3002\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u6709\u66f4\u591a\u5173\u4e8e React \u6e32\u67d3\u5668\u7684\u4fe1\u606f\u3002")),(0,n.kt)("h2",f({},{id:"\u65b0\u6e32\u67d3\u5668\u7684\u521d\u8877\u548c\u6536\u76ca"}),"\u65b0\u6e32\u67d3\u5668\u7684\u521d\u8877\u548c\u6536\u76ca"),(0,n.kt)("p",null,"\u5f00\u53d1\u65b0\u7684\u6e32\u67d3\u67b6\u6784\u7684\u521d\u8877\u662f\u4e3a\u4e86\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u800c\u8fd9\u79cd\u65b0\u4f53\u9a8c\u662f\u5728\u8001\u67b6\u6784\u4e0a\u662f\u4e0d\u53ef\u80fd\u5b9e\u73b0\u7684\u3002\u6bd4\u5982\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u63d0\u5347\u5bbf\u4e3b\u89c6\u56fe\uff08host views\uff09\u548c React \u89c6\u56fe\uff08React views\uff09\u7684\u4e92\u64cd\u4f5c\u6027\uff0c\u6e32\u67d3\u5668\u5fc5\u987b\u6709\u80fd\u529b\u540c\u6b65\u5730\u6d4b\u91cf\u548c\u6e32\u67d3 React \u754c\u9762\u3002\u5728\u8001\u67b6\u6784\u4e2d\uff0cReact Native \u5e03\u5c40\u662f\u5f02\u6b65\u7684\uff0c\u8fd9\u5bfc\u81f4\u5728\u5bbf\u4e3b\u89c6\u56fe\u4e2d\u6e32\u67d3\u5d4c\u5957\u7684 React Native \u89c6\u56fe\uff0c\u4f1a\u6709\u5e03\u5c40\u201c\u6296\u52a8\u201d\u7684\u95ee\u9898\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u501f\u52a9\u591a\u4f18\u5148\u7ea7\u548c\u540c\u6b65\u4e8b\u4ef6\u7684\u80fd\u529b\uff0c\u6e32\u67d3\u5668\u53ef\u4ee5\u63d0\u9ad8\u7528\u6237\u4ea4\u4e92\u7684\u4f18\u5148\u7ea7\uff0c\u6765\u786e\u4fdd\u4ed6\u4eec\u7684\u64cd\u4f5c\u5f97\u5230\u53ca\u65f6\u7684\u5904\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},"React Suspense \u7684\u96c6\u6210\uff0c\u5141\u8bb8\u4f60\u5728 React \u4e2d\u66f4\u7b26\u5408\u76f4\u89c9\u5730\u5199\u8bf7\u6c42\u6570\u636e\u4ee3\u7801\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u4f60\u5728 React Native \u4f7f\u7528 React Concurrent \u53ef\u4e2d\u65ad\u6e32\u67d3\u529f\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u5bb9\u6613\u5b9e\u73b0 React Native \u7684\u670d\u52a1\u7aef\u6e32\u67d3\u3002")),(0,n.kt)("p",null,"\u65b0\u67b6\u6784\u7684\u6536\u76ca\u8fd8\u5305\u62ec\uff0c\u4ee3\u7801\u8d28\u91cf\u3001\u6027\u80fd\u3001\u53ef\u6269\u5c55\u6027\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u5b89\u5168\uff1a\u4ee3\u7801\u751f\u6210\u5de5\u5177\uff08code generation\uff09\u786e\u4fdd\u4e86 JS \u548c\u5bbf\u4e3b\u5e73\u53f0\u4e24\u65b9\u9762\u7684\u7c7b\u578b\u5b89\u5168\u3002\u4ee3\u7801\u751f\u6210\u5de5\u5177\u4f7f\u7528 JavaScript \u7ec4\u4ef6\u58f0\u660e\u4f5c\u4e3a\u552f\u4e00\u4e8b\u5b9e\u6e90\uff0c\u751f\u6210 C++ \u7ed3\u6784\u4f53\u6765\u6301\u6709 props \u5c5e\u6027\u3002\u4e0d\u4f1a\u56e0\u4e3a JavaScript \u548c\u5bbf\u4e3b\u7ec4\u4ef6 props \u5c5e\u6027\u4e0d\u5339\u914d\u800c\u51fa\u73b0\u6784\u5efa\u9519\u8bef\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5171\u4eab C++ core\uff1a\u6e32\u67d3\u5668\u662f\u7528 C++ \u5b9e\u73b0\u7684\uff0c\u5176\u6838\u5fc3 core \u5728\u5e73\u53f0\u4e4b\u95f4\u662f\u5171\u4eab\u7684\u3002\u8fd9\u589e\u52a0\u4e86\u4e00\u81f4\u6027\u5e76\u4e14\u4f7f\u5f97\u65b0\u7684\u5e73\u53f0\u80fd\u591f\u66f4\u5bb9\u6613\u91c7\u7528 React Native\u3002\uff08\u8bd1\u6ce8\uff1a\u4f8b\u5982 VR \u65b0\u5e73\u53f0\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u597d\u7684\u5bbf\u4e3b\u5e73\u53f0\u4e92\u64cd\u4f5c\u6027\uff1a\u5f53\u5bbf\u4e3b\u7ec4\u4ef6\u96c6\u6210\u5230 React Native \u65f6\uff0c\u540c\u6b65\u548c\u7ebf\u7a0b\u5b89\u5168\u7684\u5e03\u5c40\u8ba1\u7b97\u63d0\u5347\u4e86\u7528\u6237\u4f53\u9a8c\uff08\u8bd1\u6ce8\uff1a\u6ca1\u6709\u5f02\u6b65\u7684\u6296\u52a8\uff09\u3002\u8fd9\u610f\u5473\u7740\u90a3\u4e9b\u9700\u8981\u540c\u6b65 API \u7684\u5bbf\u4e3b\u5e73\u53f0\u5e93\uff0c\u53d8\u5f97\u66f4\u5bb9\u6613\u96c6\u6210\u4e86\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd\u63d0\u5347\uff1a\u65b0\u7684\u6e32\u67d3\u7cfb\u7edf\u7684\u5b9e\u73b0\u662f\u8de8\u5e73\u53f0\u7684\uff0c\u6bcf\u4e2a\u5e73\u53f0\u90fd\u4ece\u90a3\u4e9b\u539f\u672c\u53ea\u5728\u67d0\u4e2a\u7279\u5b9a\u5e73\u53f0\u7684\u5b9e\u73b0\u7684\u6027\u80fd\u4f18\u5316\u4e2d\uff0c\u5f97\u5230\u4e86\u6536\u76ca\u3002\u6bd4\u5982\u62cd\u5e73\u89c6\u56fe\u5c42\u7ea7\uff0c\u539f\u672c\u53ea\u662f Android \u4e0a\u7684\u6027\u80fd\u4f18\u5316\u65b9\u6848\uff0c\u73b0\u5728 Android \u548c iOS \u90fd\u76f4\u63a5\u6709\u4e86\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\uff1a\u65b0\u7684\u6e32\u67d3\u7cfb\u7edf\u7684\u5b9e\u73b0\u662f\u8de8\u5e73\u53f0\u7684\uff0c\u4e0d\u540c\u5e73\u53f0\u4e4b\u95f4\u66f4\u5bb9\u6613\u4fdd\u6301\u4e00\u81f4\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u66f4\u5feb\u7684\u542f\u52a8\u901f\u5ea6\uff1a\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bbf\u4e3b\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u662f\u61d2\u6267\u884c\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"JS \u548c\u5bbf\u4e3b\u5e73\u53f0\u4e4b\u95f4\u7684\u6570\u636e\u5e8f\u5217\u5316\u66f4\u5c11\uff1aReact \u4f7f\u7528\u5e8f\u5217\u5316 JSON \u5728 JavaScript \u548c\u5bbf\u4e3b\u5e73\u53f0\u4e4b\u95f4\u4f20\u9012\u6570\u636e\u3002\u65b0\u7684\u6e32\u67d3\u5668\u7528 JSI\uff08JavaScript Interface\uff09\u76f4\u63a5\u83b7\u53d6 JavaScript \u6570\u636e\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u540d\u8bcd\u89e3\u91ca"),(0,n.kt)("p",{parentName:"blockquote"},"JavaScript Interfaces (JSI)\uff1a\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u7684 API\uff0c\u7ed9\u5728 C++ \u5e94\u7528\u4e2d\u5d4c\u5165\u7684 JavaScript \u5f15\u64ce\u7528\u7684\u3002Fabric \u4f7f\u7528\u5b83\u5728 Fabric \u7684 C++ \u6838\u5fc3\u548c React \u4e4b\u95f4\u8fdb\u884c\u901a\u4fe1\u3002")))}y.isMDXComponent=!0}}]);