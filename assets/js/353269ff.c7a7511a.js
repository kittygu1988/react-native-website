"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[8185],{35318:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(27378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),m=o,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},54286:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return b}});var r=t(35318),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))s.call(n,t)&&u(e,t,n[t]);return e};const c={id:"ram-bundles-inline-requires",title:"RAM Bundles \u548c\u5185\u8054\u5f15\u7528\u4f18\u5316"},m=void 0,f={unversionedId:"ram-bundles-inline-requires",id:"version-0.66/ram-bundles-inline-requires",title:"RAM Bundles \u548c\u5185\u8054\u5f15\u7528\u4f18\u5316",description:"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u8f83\u4e3a\u5e9e\u5927\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u53ef\u80fd\u8981\u8003\u8651\u4f7f\u7528RAM(Random Access Modules\uff0c\u968f\u673a\u5b58\u53d6\u6a21\u5757\uff09\u683c\u5f0f\u7684 bundle \u548c\u5185\u8054\u5f15\u7528\u3002\u8fd9\u5bf9\u4e8e\u5177\u6709\u5927\u91cf\u9875\u9762\u7684\u5e94\u7528\u7a0b\u5e8f\u662f\u975e\u5e38\u6709\u7528\u7684\uff0c\u8fd9\u4e9b\u9875\u9762\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u5178\u578b\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4e0d\u4f1a\u88ab\u6253\u5f00\u3002\u901a\u5e38\u5bf9\u4e8e\u542f\u52a8\u540e\u4e00\u6bb5\u65f6\u95f4\u5185\u4e0d\u9700\u8981\u5927\u91cf\u4ee3\u7801\u7684\u5e94\u7528\u7a0b\u5e8f\u6765\u8bf4\u662f\u975e\u5e38\u6709\u7528\u7684\u3002\u4f8b\u5982\u5e94\u7528\u7a0b\u5e8f\u5305\u542b\u590d\u6742\u7684\u914d\u7f6e\u6587\u4ef6\u5c4f\u5e55\u6216\u8f83\u5c11\u4f7f\u7528\u7684\u529f\u80fd\uff0c\u4f46\u5927\u591a\u6570\u4f1a\u8bdd\u53ea\u6d89\u53ca\u8bbf\u95ee\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u5c4f\u5e55\u66f4\u65b0\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528RAM\u683c\u5f0f\u6765\u4f18\u5316bundle\u7684\u52a0\u8f7d\uff0c\u5e76\u4e14\u5185\u8054\u5f15\u7528\u8fd9\u4e9b\u529f\u80fd\u548c\u9875\u9762\uff08\u5f53\u5b83\u4eec\u88ab\u5b9e\u9645\u4f7f\u7528\u65f6\uff09\u3002",source:"@site/versioned_docs/version-0.66/ram-bundles-inline-requires.md",sourceDirName:".",slug:"/ram-bundles-inline-requires",permalink:"/docs/0.66/ram-bundles-inline-requires",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/ram-bundles-inline-requires.md",tags:[],version:"0.66",frontMatter:{id:"ram-bundles-inline-requires",title:"RAM Bundles \u548c\u5185\u8054\u5f15\u7528\u4f18\u5316"},sidebar:"docs",previous:{title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316",permalink:"/docs/0.66/optimizing-flatlist-configuration"},next:{title:"Profiling",permalink:"/docs/0.66/profiling"}},v={},b=[{value:"\u52a0\u8f7d JavaScript",id:"\u52a0\u8f7d-javascript",level:3},{value:"\u5185\u8054\u5f15\u7528",id:"\u5185\u8054\u5f15\u7528",level:3},{value:"\u4f18\u5316\u524d",id:"\u4f18\u5316\u524d",level:4},{value:"\u4f18\u5316\u540e",id:"\u4f18\u5316\u540e",level:4},{value:"\u542f\u7528 RAM \u683c\u5f0f",id:"\u542f\u7528-ram-\u683c\u5f0f",level:3},{value:"\u914d\u7f6e\u9884\u52a0\u8f7d\u53ca\u5185\u8054\u5f15\u7528",id:"\u914d\u7f6e\u9884\u52a0\u8f7d\u53ca\u5185\u8054\u5f15\u7528",level:3},{value:"\u8c03\u8bd5\u9884\u52a0\u8f7d\u7684\u6a21\u5757",id:"\u8c03\u8bd5\u9884\u52a0\u8f7d\u7684\u6a21\u5757",level:3},{value:"\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6(metro.config.js)",id:"\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6metroconfigjs",level:3},{value:"\u6d4b\u8bd5\u548c\u8861\u91cf\u6539\u8fdb",id:"\u6d4b\u8bd5\u548c\u8861\u91cf\u6539\u8fdb",level:3}],k={toc:b};function g(e){var n,t=e,{components:o}=t,u=((e,n)=>{var t={};for(var r in e)d.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t})(t,["components"]);return(0,r.kt)("wrapper",(n=p(p({},k),u),i(n,a({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u4e2a\u8f83\u4e3a\u5e9e\u5927\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f60\u53ef\u80fd\u8981\u8003\u8651\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),"(Random Access Modules\uff0c\u968f\u673a\u5b58\u53d6\u6a21\u5757\uff09\u683c\u5f0f\u7684 bundle \u548c\u5185\u8054\u5f15\u7528\u3002\u8fd9\u5bf9\u4e8e\u5177\u6709\u5927\u91cf\u9875\u9762\u7684\u5e94\u7528\u7a0b\u5e8f\u662f\u975e\u5e38\u6709\u7528\u7684\uff0c\u8fd9\u4e9b\u9875\u9762\u5728\u5e94\u7528\u7a0b\u5e8f\u7684\u5178\u578b\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4e0d\u4f1a\u88ab\u6253\u5f00\u3002\u901a\u5e38\u5bf9\u4e8e\u542f\u52a8\u540e\u4e00\u6bb5\u65f6\u95f4\u5185\u4e0d\u9700\u8981\u5927\u91cf\u4ee3\u7801\u7684\u5e94\u7528\u7a0b\u5e8f\u6765\u8bf4\u662f\u975e\u5e38\u6709\u7528\u7684\u3002\u4f8b\u5982\u5e94\u7528\u7a0b\u5e8f\u5305\u542b\u590d\u6742\u7684\u914d\u7f6e\u6587\u4ef6\u5c4f\u5e55\u6216\u8f83\u5c11\u4f7f\u7528\u7684\u529f\u80fd\uff0c\u4f46\u5927\u591a\u6570\u4f1a\u8bdd\u53ea\u6d89\u53ca\u8bbf\u95ee\u5e94\u7528\u7a0b\u5e8f\u7684\u4e3b\u5c4f\u5e55\u66f4\u65b0\u3002\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"RAM"),"\u683c\u5f0f\u6765\u4f18\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"bundle"),"\u7684\u52a0\u8f7d\uff0c\u5e76\u4e14\u5185\u8054\u5f15\u7528\u8fd9\u4e9b\u529f\u80fd\u548c\u9875\u9762\uff08\u5f53\u5b83\u4eec\u88ab\u5b9e\u9645\u4f7f\u7528\u65f6\uff09\u3002"),(0,r.kt)("h3",p({},{id:"\u52a0\u8f7d-javascript"}),"\u52a0\u8f7d JavaScript"),(0,r.kt)("p",null,"\u5728 react-native \u6267\u884c JS \u4ee3\u7801\u4e4b\u524d\uff0c\u5fc5\u987b\u5c06\u4ee3\u7801\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u5e76\u8fdb\u884c\u89e3\u6790\u3002\u5982\u679c\u4f60\u52a0\u8f7d\u4e86\u4e00\u4e2a 50MB \u7684 bundle\uff0c\u90a3\u4e48\u6240\u6709\u7684 50mb \u90fd\u5fc5\u987b\u88ab\u52a0\u8f7d\u548c\u89e3\u6790\u624d\u80fd\u88ab\u6267\u884c\u3002RAM \u683c\u5f0f\u7684 bundle \u5219\u5bf9\u6b64\u8fdb\u884c\u4e86\u4f18\u5316\uff0c\u5373\u542f\u52a8\u65f6\u53ea\u52a0\u8f7d 50MB \u4e2d\u5b9e\u9645\u9700\u8981\u7684\u90e8\u5206\uff0c\u4e4b\u540e\u518d\u9010\u6e10\u6309\u9700\u52a0\u8f7d\u66f4\u591a\u7684\u5305\u3002"),(0,r.kt)("h3",p({},{id:"\u5185\u8054\u5f15\u7528"}),"\u5185\u8054\u5f15\u7528"),(0,r.kt)("p",null,"\u5185\u8054\u5f15\u7528(require \u4ee3\u66ff import)\u53ef\u4ee5\u5ef6\u8fdf\u6a21\u5757\u6216\u6587\u4ef6\u7684\u52a0\u8f7d\uff0c\u76f4\u5230\u5b9e\u9645\u9700\u8981\u8be5\u6587\u4ef6\u3002\u4e00\u4e2a\u57fa\u672c\u7684\u4f8b\u5b50\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),(0,r.kt)("h4",p({},{id:"\u4f18\u5316\u524d"}),"\u4f18\u5316\u524d"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"import React, { Component } from 'react';\nimport { Text } from 'react-native';\n// ... import some very expensive modules\n\n// You may want to log at the file level to verify when this is happening\nconsole.log('VeryExpensive component loaded');\n\nexport default class VeryExpensive extends Component {\n  // lots and lots of code\n  render() {\n    return <Text>Very Expensive Component</Text>;\n  }\n}\n")),(0,r.kt)("h4",p({},{id:"\u4f18\u5316\u540e"}),"\u4f18\u5316\u540e"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"import React, { Component } from 'react';\nimport { TouchableOpacity, View, Text } from 'react-native';\n\nlet VeryExpensive = null;\n\nexport default class Optimized extends Component {\n  state = { needsExpensive: false };\n\n  didPress = () => {\n    if (VeryExpensive == null) {\n      VeryExpensive = require('./VeryExpensive').default;\n    }\n\n    this.setState(() => ({\n      needsExpensive: true,\n    }));\n  };\n\n  render() {\n    return (\n      <View style={{ marginTop: 20 }}>\n        <TouchableOpacity onPress={this.didPress}>\n          <Text>Load</Text>\n        </TouchableOpacity>\n        {this.state.needsExpensive ? <VeryExpensive /> : null}\n      </View>\n    );\n  }\n}\n")),(0,r.kt)("p",null,"\u5373\u4fbf\u4e0d\u4f7f\u7528 RAM \u683c\u5f0f\uff0c\u5185\u8054\u5f15\u7528\u4e5f\u4f1a\u4f7f\u542f\u52a8\u65f6\u95f4\u51cf\u5c11\uff0c\u56e0\u4e3a\u4f18\u5316\u540e\u7684\u4ee3\u7801\u53ea\u6709\u5728\u7b2c\u4e00\u6b21 require \u65f6\u624d\u4f1a\u6267\u884c\u3002"),(0,r.kt)("h3",p({},{id:"\u542f\u7528-ram-\u683c\u5f0f"}),"\u542f\u7528 RAM \u683c\u5f0f"),(0,r.kt)("p",null,"\u5728 iOS \u4e0a\u4f7f\u7528 RAM \u683c\u5f0f\u5c06\u521b\u5efa\u4e00\u4e2a\u7b80\u5355\u7684\u7d22\u5f15\u6587\u4ef6\uff0cReact Native \u5c06\u6839\u636e\u6b64\u6587\u4ef6\u4e00\u6b21\u52a0\u8f7d\u4e00\u4e2a\u6a21\u5757\u3002\u5728 Android \u4e0a\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5b83\u4f1a\u4e3a\u6bcf\u4e2a\u6a21\u5757\u521b\u5efa\u4e00\u7ec4\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u50cf iOS \u4e00\u6837\uff0c\u5f3a\u5236 Android \u53ea\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u4f46\u4f7f\u7528\u591a\u4e2a\u6587\u4ef6\u53ef\u4ee5\u63d0\u9ad8\u6027\u80fd\uff0c\u5e76\u964d\u4f4e\u5185\u5b58\u5360\u7528\u3002"),(0,r.kt)("p",null,'\u5728 Xcode \u4e2d\u542f\u7528 RAM \u683c\u5f0f\uff0c\u9700\u8981\u7f16\u8f91 build phase \u91cc\u7684"Bundle React Native code and images"\u3002\u5728',(0,r.kt)("inlineCode",{parentName:"p"},"../node_modules/react-native/scripts/react-native-xcode.sh"),"\u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'export BUNDLE_COMMAND="ram-bundle"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),'export BUNDLE_COMMAND="ram-bundle"\nexport NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh\n')),(0,r.kt)("p",null,"\u5728 Android \u4e0a\u542f\u7528 RAM \u683c\u5f0f\uff0c\u9700\u8981\u7f16\u8f91 android/app/build.gradle \u6587\u4ef6\u3002\u5728",(0,r.kt)("inlineCode",{parentName:"p"},'apply from: "../../node_modules/react-native/react.gradle"'),"\u4e4b\u524d\u4fee\u6539\u6216\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"project.ext.react"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),'project.ext.react = [\n  bundleCommand: "ram-bundle",\n]\n')),(0,r.kt)("p",null,"\u5982\u679c\u5728 Android \u4e0a\uff0c\u4f60\u60f3\u4f7f\u7528\u5355\u4e2a\u7d22\u5f15\u6587\u4ef6\uff08\u5982\u524d\u6240\u8ff0\uff09\uff0c\u8bf7\u5728 Android \u4e0a\u4f7f\u7528\u4ee5\u4e0b\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),'project.ext.react = [\n  bundleCommand: "ram-bundle",\n  extraPackagerArgs: ["--indexed-ram-bundle"]\n]\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note")),": If you are using ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/facebook/hermes"}),"Hermes JS Engine"),", you do not need RAM bundles. When loading the bytecode, ",(0,r.kt)("inlineCode",{parentName:"p"},"mmap")," ensures that the entire file is not loaded.")),(0,r.kt)("h3",p({},{id:"\u914d\u7f6e\u9884\u52a0\u8f7d\u53ca\u5185\u8054\u5f15\u7528"}),"\u914d\u7f6e\u9884\u52a0\u8f7d\u53ca\u5185\u8054\u5f15\u7528"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u542f\u7528\u4e86RAM\u683c\u5f0f\uff0c\u7136\u800c\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"require"),"\u4f1a\u9020\u6210\u989d\u5916\u7684\u5f00\u9500\u3002\u56e0\u4e3a\u5f53\u9047\u5230\u5c1a\u672a\u52a0\u8f7d\u7684\u6a21\u5757\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"require"),"\u9700\u8981\u901a\u8fc7bridge\u6765\u53d1\u9001\u6d88\u606f\u3002\u8fd9\u4e3b\u8981\u4f1a\u5f71\u54cd\u5230\u542f\u52a8\u901f\u5ea6\uff0c\u56e0\u4e3a\u5728\u5e94\u7528\u7a0b\u5e8f\u52a0\u8f7d\u521d\u59cb\u6a21\u5757\u65f6\u53ef\u80fd\u89e6\u53d1\u76f8\u5f53\u5927\u91cf\u7684\u8bf7\u6c42\u8c03\u7528\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u6211\u4eec\u53ef\u4ee5\u914d\u7f6e\u4e00\u90e8\u5206\u6a21\u5757\u8fdb\u884c\u9884\u52a0\u8f7d\u3002\u4e3a\u4e86\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u4f60\u5c06\u9700\u8981\u5b9e\u73b0\u67d0\u79cd\u5f62\u5f0f\u7684\u5185\u8054\u5f15\u7528\u3002"),(0,r.kt)("h3",p({},{id:"\u8c03\u8bd5\u9884\u52a0\u8f7d\u7684\u6a21\u5757"}),"\u8c03\u8bd5\u9884\u52a0\u8f7d\u7684\u6a21\u5757"),(0,r.kt)("p",null,"\u5728\u60a8\u7684\u6839\u6587\u4ef6 (index.(ios|android).js) \u4e2d\uff0c\u60a8\u53ef\u4ee5\u5728\u521d\u59cb\u5bfc\u5165(initial imports)\u4e4b\u540e\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"const modules = require.getModules();\nconst moduleIds = Object.keys(modules);\nconst loadedModuleNames = moduleIds\n  .filter(moduleId => modules[moduleId].isInitialized)\n  .map(moduleId => modules[moduleId].verboseName);\nconst waitingModuleNames = moduleIds\n  .filter(moduleId => !modules[moduleId].isInitialized)\n  .map(moduleId => modules[moduleId].verboseName);\n\n// make sure that the modules you expect to be waiting are actually waiting\nconsole.log(\n  'loaded:',\n  loadedModuleNames.length,\n  'waiting:',\n  waitingModuleNames.length\n);\n\n// grab this text blob, and put it in a file named packager/modulePaths.js\nconsole.log(`module.exports = ${JSON.stringify(loadedModuleNames.sort())};`);\n")),(0,r.kt)("p",null,"\u5f53\u4f60\u8fd0\u884c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b console \u63a7\u5236\u53f0\uff0c\u6709\u591a\u5c11\u6a21\u5757\u5df2\u7ecf\u52a0\u8f7d\uff0c\u6709\u591a\u5c11\u6a21\u5757\u5728\u7b49\u5f85\u3002\u4f60\u53ef\u80fd\u60f3\u67e5\u770b moduleNames\uff0c\u770b\u770b\u662f\u5426\u6709\u4efb\u4f55\u610f\u5916\u3002\u6ce8\u610f\u5728\u9996\u6b21 import \u65f6\u8c03\u7528\u7684\u5185\u8054\u5f15\u7528\u3002\u4f60\u53ef\u80fd\u9700\u8981\u68c0\u67e5\u548c\u91cd\u6784\uff0c\u4ee5\u786e\u4fdd\u53ea\u6709\u4f60\u60f3\u8981\u7684\u6a21\u5757\u5728\u542f\u52a8\u65f6\u52a0\u8f7d\u3002\u8bf7\u6ce8\u610f\uff0c\u60a8\u53ef\u4ee5\u6839\u636e\u9700\u8981\u4fee\u6539 Systrace \u5bf9\u8c61\uff0c\u4ee5\u5e2e\u52a9\u8c03\u8bd5\u6709\u95ee\u9898\u7684\u5f15\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"require.Systrace.beginEvent = (message) => {\n  if(message.includes(problematicModule)) {\n    throw new Error();\n  }\n}\n")),(0,r.kt)("p",null,"\u867d\u7136\u6bcf\u4e2a App \u5404\u6709\u4e0d\u540c\uff0c\u4f46\u53ea\u52a0\u8f7d\u7b2c\u4e00\u4e2a\u9875\u9762\u6240\u9700\u7684\u6a21\u5757\u662f\u6709\u666e\u9002\u610f\u4e49\u7684\u3002\u5f53\u4f60\u6ee1\u610f\u65f6\uff0c\u628a loadedModuleNames \u7684\u8f93\u51fa\u653e\u5230 packager/modulePaths.js \u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("h3",p({},{id:"\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6metroconfigjs"}),"\u66f4\u65b0\u914d\u7f6e\u6587\u4ef6(metro.config.js)"),(0,r.kt)("p",null,"We now need to update ",(0,r.kt)("inlineCode",{parentName:"p"},"metro.config.js")," in the root of the project to use our newly generated ",(0,r.kt)("inlineCode",{parentName:"p"},"modulePaths.js")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"const modulePaths = require('./packager/modulePaths');\nconst resolve = require('path').resolve;\nconst fs = require('fs');\n\n// Update the following line if the root folder of your app is somewhere else.\nconst ROOT_FOLDER = resolve(__dirname, '..');\n\nconst config = {\n  transformer: {\n    getTransformOptions: () => {\n      const moduleMap = {};\n      modulePaths.forEach(path => {\n        if (fs.existsSync(path)) {\n          moduleMap[resolve(path)] = true;\n        }\n      });\n      return {\n        preloadedModules: moduleMap,\n        transform: { inlineRequires: { blacklist: moduleMap } },\n      };\n    },\n  },\n  projectRoot: ROOT_FOLDER,\n};\n\nmodule.exports = config;\n")),(0,r.kt)("p",null,"\u5728\u542f\u7528RAM\u683c\u5f0f\u4e4b\u540e\uff0c\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"preloadedModules"),"\u6761\u76ee\u6307\u793a\u54ea\u4e9b\u6a21\u5757\u9700\u8981\u9884\u52a0\u8f7d\u3002\u5f53 bundle \u88ab\u52a0\u8f7d\u65f6\uff0c\u8fd9\u4e9b\u6a21\u5757\u7acb\u5373\u88ab\u52a0\u8f7d\uff0c\u751a\u81f3\u5728\u4efb\u4f55 requires \u6267\u884c\u4e4b\u524d\u3002blacklist \u8868\u660e\u8fd9\u4e9b\u6a21\u5757\u4e0d\u5e94\u8be5\u88ab\u8981\u6c42\u5185\u8054\u5f15\u7528\uff0c\u56e0\u4e3a\u5b83\u4eec\u662f\u9884\u52a0\u8f7d\u7684\uff0c\u6240\u4ee5\u4f7f\u7528\u5185\u8054\u6ca1\u6709\u6027\u80fd\u4f18\u52bf\u3002\u5b9e\u9645\u4e0a\u6bcf\u6b21\u89e3\u6790\u5185\u8054\u5f15\u7528 JavaScript \u90fd\u4f1a\u82b1\u8d39\u989d\u5916\u7684\u65f6\u95f4\u3002"),(0,r.kt)("h3",p({},{id:"\u6d4b\u8bd5\u548c\u8861\u91cf\u6539\u8fdb"}),"\u6d4b\u8bd5\u548c\u8861\u91cf\u6539\u8fdb"),(0,r.kt)("p",null,"\u60a8\u73b0\u5728\u5e94\u8be5\u51c6\u5907\u597d\u4f7f\u7528RAM\u683c\u5f0f\u548c\u5185\u8054\u5f15\u7528\u6765\u6784\u5efa\u60a8\u7684\u5e94\u7528\u4e86\u3002\u4fdd\u5b58\u542f\u52a8\u524d\u540e\u7684\u65f6\u95f4\uff0c\u6765\u6d4b\u8bd5\u4e0b\u6709\u591a\u5c11\u6539\u8fdb\u5427\uff01"))}g.isMDXComponent=!0}}]);