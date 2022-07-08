"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[83940],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61758:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return h}});var r=n(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&u(e,n,t[n]);return e};const d={id:"publishing-to-app-store",title:"\u4e0a\u67b6 App Store"},m=void 0,f={unversionedId:"publishing-to-app-store",id:"version-0.63/publishing-to-app-store",title:"\u4e0a\u67b6 App Store",description:"\u4e0a\u67b6\u5e94\u7528\u7684\u8fc7\u7a0b\u548c\u4efb\u4f55\u5176\u5b83\u539f\u751f iOS \u5e94\u7528\u4e00\u6837\uff0c\u4f46\u6709\u4e00\u4e9b\u989d\u5916\u7684\u6ce8\u610f\u4e8b\u9879\u8981\u8003\u8651\u3002",source:"@site/versioned_docs/version-0.63/publishing-to-app-store.md",sourceDirName:".",slug:"/publishing-to-app-store",permalink:"/docs/0.63/publishing-to-app-store",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/publishing-to-app-store.md",tags:[],version:"0.63",frontMatter:{id:"publishing-to-app-store",title:"\u4e0a\u67b6 App Store"},sidebar:"version-0.63/docs",previous:{title:"iOS\u5e94\u7528\u6269\u5c55",permalink:"/docs/0.63/app-extensions"}},b={},h=[{value:"1. Enable App Transport Security",id:"1-enable-app-transport-security",level:3},{value:"2. \u914d\u7f6e release scheme",id:"2-\u914d\u7f6e-release-scheme",level:3},{value:"\u5173\u4e8e\u542f\u52a8\u5c4f\u7684\u4f18\u5316\u6280\u5de7",id:"\u5173\u4e8e\u542f\u52a8\u5c4f\u7684\u4f18\u5316\u6280\u5de7",level:4},{value:"3. \u7f16\u8bd1\u53d1\u5e03 app",id:"3-\u7f16\u8bd1\u53d1\u5e03-app",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(100.00%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000",level:5}],y={toc:h};function g(e){var t,o=e,{components:u}=o,d=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(o,["components"]);return(0,r.kt)("wrapper",(t=c(c({},y),d),a(t,i({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u4e0a\u67b6\u5e94\u7528\u7684\u8fc7\u7a0b\u548c\u4efb\u4f55\u5176\u5b83\u539f\u751f iOS \u5e94\u7528\u4e00\u6837\uff0c\u4f46\u6709\u4e00\u4e9b\u989d\u5916\u7684\u6ce8\u610f\u4e8b\u9879\u8981\u8003\u8651\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you are using Expo then read the Expo Guide for ",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.expo.io/versions/latest/distribution/building-standalone-apps/"}),"Building Standalone Apps"),".")),(0,r.kt)("h3",c({},{id:"1-enable-app-transport-security"}),"1. Enable App Transport Security"),(0,r.kt)("p",null,"App Transport Security \u662f iOS 9 \u5f15\u5165\u7684\u4e00\u9879\u5b89\u5168\u7279\u6027\uff0c\u62d2\u7edd\u4e0d\u901a\u8fc7 HTTPS \u53d1\u9001\u7684\u6240\u6709 HTTP \u8bf7\u6c42\u3002\u8fd9\u4f1a\u5bfc\u81f4 HTTP \u4f20\u8f93\u963b\u585e\uff0c\u5305\u62ec\u5f00\u53d1\u8005 React Native \u670d\u52a1\u5668\u3002\u4e3a\u4e86\u4f7f\u5f00\u53d1\u5bb9\u6613\uff0c\u5728 React Native projects \u91cc ATS \u9ed8\u8ba4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"\u7981\u7528\u3002"),(0,r.kt)("p",null,"You should re-enable ATS prior to building your app for production by removing the ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," entry from the ",(0,r.kt)("inlineCode",{parentName:"p"},"NSExceptionDomains")," dictionary and setting ",(0,r.kt)("inlineCode",{parentName:"p"},"NSAllowsArbitraryLoads")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"Info.plist")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ios/")," folder. You can also re-enable ATS from within Xcode by opening your target properties under the Info pane and editing the App Transport Security Settings entry."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If your application needs to access HTTP resources on production, see ",(0,r.kt)("a",c({parentName:"p"},{href:"http://ste.vn/2015/06/10/configuring-app-transport-security-ios-9-osx-10-11/"}),"this post")," to learn how to configure ATS on your project.")),(0,r.kt)("h3",c({},{id:"2-\u914d\u7f6e-release-scheme"}),"2. \u914d\u7f6e release scheme"),(0,r.kt)("p",null,"\u9700\u8981\u5728 Xcode \u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," scheme \u7f16\u8bd1\u5728 App Store \u53d1\u5e03\u7684 app\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Release"),"\u7248\u672c\u7684\u5e94\u7528\u4f1a\u81ea\u52a8\u7981\u7528\u5f00\u53d1\u8005\u83dc\u5355\uff0c\u540c\u65f6\u4e5f\u4f1a\u5c06 js \u6587\u4ef6\u548c\u9759\u6001\u56fe\u7247\u6253\u5305\u538b\u7f29\u540e\u5185\u7f6e\u5230\u5305\u4e2d\uff0c\u8fd9\u6837\u5e94\u7528\u53ef\u4ee5\u5728\u672c\u5730\u8bfb\u53d6\u800c\u65e0\u9700\u8bbf\u95ee\u5f00\u53d1\u670d\u52a1\u5668\uff08\u540c\u65f6\u8fd9\u6837\u4e00\u6765\u4f60\u4e5f\u65e0\u6cd5\u518d\u8c03\u8bd5\uff0c\u9700\u8981\u8c03\u8bd5\u8bf7\u5c06 Buiid Configuration \u518d\u6539\u4e3a debug\uff09\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u7531\u4e8e\u53d1\u5e03\u7248\u672c\u5df2\u7ecf\u5185\u7f6e\u4e86 js \u6587\u4ef6\uff0c\u56e0\u800c\u4e5f\u65e0\u6cd5\u518d\u901a\u8fc7\u5f00\u53d1\u670d\u52a1\u5668\u6765\u5b9e\u65f6\u66f4\u65b0\u3002\u9762\u5411\u7528\u6237\u7684\u70ed\u66f4\u65b0\uff0c\u8bf7\u4f7f\u7528\u4e13\u95e8\u7684",(0,r.kt)("a",c({parentName:"p"},{href:"https://pushy.reactnative.cn"}),"\u70ed\u66f4\u65b0\u670d\u52a1"),"\u3002"),(0,r.kt)("p",null,"\u8981\u914d\u7f6e app \u4e3a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," scheme \u7f16\u8bd1\uff0c\u8bf7\u524d\u5f80",(0,r.kt)("strong",{parentName:"p"},"Product")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Scheme")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Edit Scheme"),"\u3002\u9009\u62e9\u4fa7\u8fb9\u680f\u7684",(0,r.kt)("strong",{parentName:"p"},"Run"),"\u6807\u7b7e\uff0c\u7136\u540e\u8bbe\u7f6e\u4e0b\u62c9\u7684 Build Configuration \u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Release"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(55615).Z,width:"718",height:"486"})),(0,r.kt)("h4",c({},{id:"\u5173\u4e8e\u542f\u52a8\u5c4f\u7684\u4f18\u5316\u6280\u5de7"}),"\u5173\u4e8e\u542f\u52a8\u5c4f\u7684\u4f18\u5316\u6280\u5de7"),(0,r.kt)("p",null,"\u968f\u7740 App \u5305\u5927\u5c0f\u7684\u589e\u957f\uff0c\u53ef\u80fd\u5f00\u59cb\u5728\u542f\u52a8\u5c4f(splash)\u548c\u6839\u5e94\u7528\u89c6\u56fe\u663e\u793a\u4e4b\u95f4\u770b\u5230\u767d\u5c4f\u95ea\u73b0\u3002\u5982\u679c\u662f\u8fd9\u6837\uff0c\u4e3a\u4e86\u5728\u8f6c\u6362\u671f\u95f4\u4fdd\u6301\u542f\u52a8\u5c4f\u663e\u793a\uff0c\u53ef\u4ee5\u6dfb\u52a0\u4e0b\u5217\u4ee3\u7801\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"AppDelegate.m"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-objectivec"}),'  // Place this code after "[self.window makeKeyAndVisible]" and before "return YES;"\n  UIStoryboard *sb = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];\n  UIViewController *vc = [sb instantiateInitialViewController];\n  rootView.loadingView = vc.view;\n')),(0,r.kt)("p",null,"The static bundle is built every time you target a physical device, even in Debug. If you want to save time, turn off bundle generation in Debug by adding the following to your shell script in the Xcode Build Phase ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle React Native code and images"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-sh"}),' if [ "${CONFIGURATION}" == "Debug" ]; then\n  export SKIP_BUNDLING=true\n fi\n')),(0,r.kt)("h3",c({},{id:"3-\u7f16\u8bd1\u53d1\u5e03-app"}),"3. \u7f16\u8bd1\u53d1\u5e03 app"),(0,r.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb",(0,r.kt)("inlineCode",{parentName:"p"},"\u2318B"),"\u6216\u4ece\u83dc\u5355\u680f\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"Product")," \u2192 ",(0,r.kt)("strong",{parentName:"p"},"Build")," \u7f16\u8bd1\u53d1\u5e03 app\u3002\u4e00\u65e6\u7f16\u8bd1\u53d1\u5e03\uff0c\u5c31\u80fd\u591f\u5411 beta \u6d4b\u8bd5\u8005\u53d1\u5e03 app\uff0c\u63d0\u4ea4 app \u5230 App Store\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"React Native CLI")," to perform this operation using the option ",(0,r.kt)("inlineCode",{parentName:"p"},"--configuration")," with the value ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"npx react-native run-ios --configuration Release"),").")),(0,r.kt)("hr",null),(0,r.kt)("h5",c({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm10000"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,r.kt)("a",c({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(100.00%)"))}g.isMDXComponent=!0},55615:function(e,t,n){t.Z=n.p+"assets/images/ConfigureReleaseScheme-68e17e8d9a2cf2b73adb47865b45399d.png"}}]);